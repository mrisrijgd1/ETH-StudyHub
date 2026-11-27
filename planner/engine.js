/* StudyHub study planner: the rule-based scheduler (handoff/04-study-planner.md, section 5).
   Pure functions, no DOM, no network: the same file runs in the browser (window.PlannerEngine) and in
   node for the tests (tools/tests/planner-engine.test.cjs).

   It does the time arithmetic and picks the content of each block from fixed rules. An LLM (Apertus) may
   later reword goals and tasks, but it never adds hours or moves blocks: every plan comes from here.
   LLM switch: PlannerEngine.LLM_ENABLED is false and nothing in this file calls a model.

   makePlan(programme, answers, calendar, opts) -> plan
     programme  planner/data/<id>.json
     answers    the questionnaire answers, keyed by question id (D1_ana_3, F5_s, ...), see plan.html
     calendar   { boxes, skips, events, rest } from the calendar pop-up (30-minute rows from 07:00)
     opts       { today: 'YYYY-MM-DD', progress: { 'lesson-03.html': true, ... } }

   Hard rules (never broken, checked in the tests):
     - no study in blocked boxes, events, rest days, exam days, outside the study day, or in the last hour before bed
     - at most the daily cap (4, 6 or 8 h, never more than 8 h) and the weekly target
     - at most 2 full mocks a day (1 unless more are needed), never more than the stock minus mocks done
     - the day before an exam: light review only, at most 3 h */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.PlannerEngine = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var VERSION = 'rule-1';
  var CAL_START = 7 * 60;          // calendar rows start at 07:00, 30 minutes each
  var ROW = 30;
  var MAX_DAY = 8 * 60;            // Rachel, 26 Nov 2026: never more than 8 h a day
  var FILL = 0.85;                 // fill at most 85 % of the free time (spec 5.2)
  var PAD = 1.5;                   // planning-fallacy padding for first estimates (Buehler et al. 1994)
  var REVIEW_GAPS = [1, 3, 7, 14]; // days after first work on a chapter: spaced reviews
  var PERIODS = { 'early morning': [360, 540], 'late morning': [540, 720], 'early afternoon': [720, 900], 'late afternoon': [900, 1080], 'evening': [1080, 1440] };

  /* ---------- dates (ISO strings, computed in UTC so time zones never shift a day) ---------- */
  function toDate(iso) { var p = iso.split('-'); return new Date(Date.UTC(+p[0], +p[1] - 1, +p[2])); }
  function iso(d) { return d.toISOString().slice(0, 10); }
  function addDays(s, n) { var d = toDate(s); d.setUTCDate(d.getUTCDate() + n); return iso(d); }
  function diffDays(a, b) { return Math.round((toDate(b) - toDate(a)) / 864e5); }
  function dow(s) { return (toDate(s).getUTCDay() + 6) % 7; }                 // 0 = Monday
  function weekStart(s) { return addDays(s, -dow(s)); }
  function toMin(t, def) { if (!t || !/^\d{1,2}:\d{2}$/.test(t)) return def; var p = t.split(':'); return +p[0] * 60 + +p[1]; }
  function hm(m) { m = Math.round(m); return String(Math.floor(m / 60) % 24).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0'); }

  /* ---------- intervals: arrays of [from, to] in minutes, sorted, non-overlapping ---------- */
  function subtract(free, from, to) {
    var out = [];
    free.forEach(function (f) {
      if (to <= f[0] || from >= f[1]) { out.push(f); return; }
      if (from > f[0]) out.push([f[0], from]);
      if (to < f[1]) out.push([to, f[1]]);
    });
    return out;
  }
  function total(iv) { return iv.reduce(function (t, f) { return t + f[1] - f[0]; }, 0); }

  /* ---------- reading the answers ---------- */
  function num(v, def) { var n = parseFloat(v); return isFinite(n) ? n : def; }
  function settings(prog, a) {
    var dayStart = toMin(a.F5_s, 510), dayEnd = toMin(a.F5_e, 1080);
    var wake = toMin(a.F1_w, null), bed = toMin(a.F1_b, null);
    if (wake !== null) dayStart = Math.max(dayStart, wake + 30);
    if (bed !== null) { if (bed < 360) bed += 1440; dayEnd = Math.min(dayEnd, bed - 60); }   // no study in the last hour before bed
    var weekendStart = dayStart, weekendEnd = dayEnd;
    var wkWake = toMin(a.F2_w, null), wkBed = toMin(a.F2_b, null);
    if (wkWake !== null) weekendStart = Math.max(toMin(a.F5_s, 510), wkWake + 30);
    if (wkBed !== null) { if (wkBed < 360) wkBed += 1440; weekendEnd = Math.min(toMin(a.F5_e, 1080), wkBed - 60); }
    var cap = Math.min(MAX_DAY, num(String(a.E6 || '').split(' ')[0], 8) * 60);
    var block = { '25': 25, '50': 50, '90': 90 }[String(a.F5_b || '')] ||
      { '25 min': 25, '50 min': 50, '90 min': 90 }[a.G3] || 50;
    var brk = block >= 90 ? 20 : block >= 50 ? 10 : 5;
    var lenPick = { '5 min': 5, '10 min': 10, '15 min': 15, '30 min': 30 }[a.F6_len];
    if (lenPick) brk = lenPick;
    var shares = {}, sum = 0;
    prog.subjects.forEach(function (s) { var v = a.D6 && a.D6[s.k] != null ? num(a.D6[s.k], s.default_share) : s.default_share; shares[s.k] = Math.max(0, v); sum += shares[s.k]; });
    prog.subjects.forEach(function (s) { shares[s.k] = sum ? shares[s.k] / sum : 1 / prog.subjects.length; });
    var completion = { 'under 50 %': 0.6, '50 to 75 %': 0.75, '75 to 90 %': 0.85, 'almost all': 0.95 }[a.G7] || 0.8;
    return {
      dayStart: dayStart, dayEnd: dayEnd, weekendStart: weekendStart, weekendEnd: weekendEnd,
      lunch: toMin(a.F5_l, 750), pmStart: Math.max(toMin(a.F5_l, 750), toMin(a.F5_pm, toMin(a.F5_l, 750) + 60)), cap: cap,
      weekly: Math.min(7 * cap, num(a.C7, 44) * 60), lectureWeekly: Math.min(num(a.C7, 44), 25) * 60,
      block: block, brk: brk, shares: shares,
      peak: (a.F3 && a.F3.length ? a.F3 : ['late morning']).map(function (p) { return PERIODS[p]; }).filter(Boolean),
      low: PERIODS[a.F4] || null,
      mix: a.H2 || 'two per day', hardFirst: a.H3 === 'the hardest task', split: a.H4 === 'split when needed',
      proofLevel: a.D3 || '', completion: completion
    };
  }

  function examDates(prog, a) {
    var out = {};
    prog.subjects.forEach(function (s) {
      var v = a['B5_' + s.k];
      out[s.k] = v && /^\d{4}-\d{2}-\d{2}$/.test(v) ? v : prog.exam_session.from;   // unknown: plan to the start of the session
    });
    return out;
  }

  function phaseOf(prog, day, firstExam) {
    if (day <= prog.lecture_period.end) return 'lecture';
    var br = (prog.breaks || [])[0];
    if (br && day >= br.from && day <= br.to) return 'break';
    if (day < firstExam) return 'lernphase';
    return 'session';
  }

  /* ---------- free time of one day ---------- */
  function boxApplies(b, day, cal, prog) {
    var wk = weekStart(day);
    if (b.week) return b.week === wk && b.d === dow(day);
    if (b.d !== dow(day)) return false;
    if (cal.skips && cal.skips[b.id + '@' + wk]) return false;
    if ((b.fixed || b.lab === 'lecture') && day > prog.lecture_period.end) return false;   // lectures stop after the lecture period
    return true;
  }
  function freeTime(day, st, cal, prog) {
    var weekend = dow(day) >= 5;
    var s = weekend ? st.weekendStart : st.dayStart, e = weekend ? st.weekendEnd : st.dayEnd;
    if (e - s < 30) return [];
    var free = [[s, e]];
    free = subtract(free, st.lunch, st.pmStart);   // the break between the morning and the afternoon half-day
    (cal.boxes || []).forEach(function (b) {
      if (boxApplies(b, day, cal, prog)) free = subtract(free, CAL_START + b.s * ROW, CAL_START + b.e * ROW);
    });
    ((cal.events || {})[day] || []).forEach(function (ev) {
      if (ev.all) free = [];
      else free = subtract(free, CAL_START + ev.s * ROW, CAL_START + ev.e * ROW);
    });
    return free.filter(function (f) { return f[1] - f[0] >= 25; });
  }

  /* ---------- the material: one work item per chapter ---------- */
  function chapters(prog, a, progress) {
    var list = [];
    prog.subjects.forEach(function (s) {
      var struggles = a['D2_' + s.k] || [];
      s.chapters.forEach(function (c, i) {
        var r = num(a['D1_' + s.k + '_' + i], null);
        var seen = progress && progress[c.href];
        if (r === null) r = seen ? 3 : 2;                      // not rated: assume "read it" (2), or 3 if StudyHub says done
        r = Math.max(1, Math.min(5, r));
        var gap = Math.max(0.5, 5 - r);
        var hit = struggles.some(function (x) { return c.n.toLowerCase().indexOf(String(x).split(' ')[0].toLowerCase()) >= 0; });
        var need = Math.round((40 + 35 * gap) * (0.6 + 0.4 * c.w) * PAD / 5) * 5;   // minutes, padded
        if (hit) need = Math.round(need * 1.25 / 5) * 5;
        list.push({ id: s.k + ':' + i, k: s.k, i: i, name: c.n, href: c.href, w: c.w, rating: r, gap: gap,
          proofs: !!c.proofs && s.k === 'ana', struggle: hit, need: need, done: 0, firstDay: null, reviews: [] });
      });
    });
    return list;
  }
  function priority(ch) { return ch.w * ch.gap * (ch.struggle ? 1.25 : 1) * (1 - ch.done / Math.max(1, ch.need)); }

  /* ---------- what to do in one block ---------- */
  function taskFor(ch, kind, prog) {
    var s = prog.subjects.filter(function (x) { return x.k === ch.k; })[0];
    var links = [{ t: ch.name, href: ch.href }];
    var tasks;
    if (kind === 'review') {
      tasks = ['Close the script and write down the main definitions and results of "' + ch.name + '" from memory, then check.',
        s.links.flashcards ? 'Flashcards for this chapter.' : 'Solve one exercise from this chapter without notes.'];
      if (s.links.flashcards) links.push({ t: 'Flashcards', href: s.links.flashcards });
    } else if (kind === 'proof') {
      tasks = ['Write the proof skeleton of one theorem in "' + ch.name + '": the idea, then the steps.',
        'Explain each step to yourself in one sentence (why does it hold?).',
        'Close the notes and rebuild the proof from memory; compare and mark the gaps.'];
    } else if (kind === 'exam-questions') {
      tasks = ['Two or three single past exam questions on "' + ch.name + '", timed, without the solution.', 'Check against the official solution and note each mistake.'];
      links.push({ t: 'Past exams', href: s.links.exams });
    } else if (ch.rating <= 2) {
      kind = 'worked-examples';
      tasks = ['Work through the lesson "' + ch.name + '" and its worked examples step by step.', 'Then solve one similar exercise yourself, looking back only when stuck.',
        'End with recall: close everything and write down what you learned.'];
    } else {
      kind = 'theory';
      tasks = ['Review the theory of "' + ch.name + '" in the lesson.', 'Finish with one or two single past exam questions on this chapter.',
        'End with recall: close everything and write down the key results.'];
      links.push({ t: 'Past exams', href: s.links.exams });
    }
    return { kind: kind, title: s.name + ': ' + ch.name, tasks: tasks, links: links };
  }

  /* ---------- the plan ---------- */
  function makePlan(prog, answers, calendar, opts) {
    var a = answers || {}, cal = calendar || {}, o = opts || {};
    var st = settings(prog, a);
    var exams = examDates(prog, a);
    var examOn = {};
    Object.keys(exams).forEach(function (k) { (examOn[exams[k]] = examOn[exams[k]] || []).push(k); });
    var lastExam = Object.keys(exams).map(function (k) { return exams[k]; }).sort().pop();
    var firstExam = Object.keys(exams).map(function (k) { return exams[k]; }).sort()[0];
    var today = o.today || iso(new Date());
    var warnings = [];
    if (today > lastExam) return { version: VERSION, llm: false, made: today, days: [], warnings: ['All exams are in the past.'] };

    var subj = {}; prog.subjects.forEach(function (s) { subj[s.k] = s; });
    var chs = chapters(prog, a, o.progress);

    /* 1. days with their free time */
    var days = [];
    for (var d = today; d <= lastExam; d = addDays(d, 1)) {
      var day = { date: d, phase: phaseOf(prog, d, firstExam), kind: 'study', sessions: [], free: [], budget: 0 };
      if (examOn[d]) { day.kind = 'exam'; day.exams = examOn[d].map(function (k) { return subj[k].name; }); }
      else if (cal.rest && cal.rest[d]) day.kind = 'rest';
      else {
        day.free = freeTime(d, st, cal, prog);
        var before = Object.keys(exams).filter(function (k) { return addDays(exams[k], -1) === d; });
        var after = Object.keys(exams).some(function (k) { return addDays(exams[k], 1) === d; });
        if (before.length) { day.light = 'before-exam'; day.examTomorrow = before; }
        else if (after) day.light = 'after-exam';
        if (!total(day.free)) day.kind = 'off';
      }
      days.push(day);
    }

    /* 2. budget per day: the daily cap, 85 % of free time, and the weekly target spread over the study days of each week */
    var weeks = {};
    days.forEach(function (day) { if (day.kind === 'study') (weeks[weekStart(day.date)] = weeks[weekStart(day.date)] || []).push(day); });
    Object.keys(weeks).forEach(function (w) {
      var ds = weeks[w];
      var target = ds[0].phase === 'lecture' ? st.lectureWeekly : st.weekly;
      var free = ds.map(function (day) { return Math.min(st.cap, Math.floor(total(day.free) * FILL)); });
      var span = 0; for (var i = 0; i < 7; i++) { var dd = addDays(w, i); if (dd >= today && dd <= lastExam) span++; }
      var left = target * span / 7;   // a partial first or last week gets its share of the weekly target
      var share = left / ds.length;
      ds.forEach(function (day, i) {
        var b = Math.min(free[i], Math.max(share, 0));
        if (day.light === 'before-exam') b = Math.min(b, 180);
        if (day.light === 'after-exam') b = Math.min(b, 120);
        day.budget = Math.floor(b / 5) * 5;
      });
    });

    /* 3. mock exams: placed first, in the last weeks before each exam, at most one a day (two only if needed) */
    var mocksPlanned = {};
    var order = ['ana', 'phy'].concat(prog.subjects.map(function (s) { return s.k; }).filter(function (k) { return k !== 'ana' && k !== 'phy'; }));
    order.forEach(function (k) {
      var s = subj[k]; if (!s) return;
      var done = (a['D5_' + k] || []).length;
      var stock = Math.max(0, s.mocks.stock - done);
      var want = Math.min(s.mocks.max, stock);
      var min = Math.min(s.mocks.min, stock);
      if (stock < s.mocks.min) warnings.push(s.name + ': only ' + stock + ' unused past exams are left, so the plan has ' + stock + ' full mock exams instead of ' + s.mocks.min + '.');
      var len = s.exam_min + 15;
      var from = addDays(exams[k], -28), to = addDays(exams[k], -2);
      if (from < today) from = today;
      var cands = days.filter(function (day) {
        return day.kind === 'study' && !day.light && day.date >= from && day.date <= to && (day.phase === 'lernphase' || day.phase === 'session') && fitsMock(day, len, st);
      });
      var placed = 0;
      [1, 2].forEach(function (perDay) {
        if (placed >= want || (perDay === 2 && placed >= min)) return;
        var free = cands.filter(function (day) { return countMocks(day) < perDay && fitsMock(day, len, st); });
        var n = Math.min(want - placed, free.length);
        for (var j = 0; j < n; j++) {
          var idx = n === 1 ? free.length - 1 : Math.round(j * (free.length - 1) / (n - 1));   // spread out, the last one close to the exam
          var day = free[idx];
          if (!day || countMocks(day) >= perDay || !fitsMock(day, len, st)) continue;
          placeMock(day, s, len, st, placed + 1);
          placed++;
        }
      });
      mocksPlanned[k] = placed;
      if (placed < min) warnings.push(s.name + ': only ' + placed + ' of ' + min + ' mock exams fit into your free time before the exam. Free up a few long afternoons in the last weeks, or accept fewer mocks.');
    });

    /* 4. study blocks, filled with content */
    var minutesBy = {}; prog.subjects.forEach(function (s) { minutesBy[s.k] = 0; });
    days.forEach(function (day) {
      if (day.kind !== 'study') return;
      var blocks = cutBlocks(day, st);
      var used = day.sessions.reduce(function (t, x) { return t + x.min; }, 0);
      var subjectsToday = allowedSubjects(day, st, prog, minutesBy, exams);
      blocks.forEach(function (bl, bi) {
        if (used + bl.len > day.budget || used + bl.len > st.cap) return;
        var light = day.light || inPeriod(bl.from, st.low);
        var hard = st.peak.some(function (p) { return inPeriod(bl.from, p); });
        if (bi === 0 && !st.hardFirst && !day.light) light = true;
        // the student's own choice for this half-day (week view): only these subjects here
        var half = (cal.half || {})[day.date + ':' + (bl.from < st.pmStart ? 'am' : 'pm')];
        var here = subjectsToday;
        if (half && half.subj && half.subj.length) {
          here = half.subj.filter(function (k) { return subj[k] && day.date < exams[k]; });
          if (day.examTomorrow) here = here.filter(function (k) { return day.examTomorrow.indexOf(k) >= 0; });
          if (!here.length) here = subjectsToday;
        }
        var pick = pickWork(day, chs, here, minutesBy, st, light, hard, exams, prog);
        if (!pick) return;
        var t = taskFor(pick.ch, pick.kind, prog);
        day.sessions.push({ from: hm(bl.from), to: hm(bl.from + bl.len), min: bl.len, k: pick.ch.k, ch: pick.ch.id, half: bl.from < st.pmStart ? 'am' : 'pm',
          kind: t.kind, title: t.title, tasks: t.tasks, links: t.links });
        used += bl.len;
        minutesBy[pick.ch.k] += bl.len;
        pick.ch.done += bl.len;
        if (!pick.ch.firstDay) { pick.ch.firstDay = day.date; pick.ch.reviews = REVIEW_GAPS.map(function (g) { return addDays(day.date, g); }); }
        if (pick.kind === 'review') pick.ch.reviews.shift();
      });
      day.sessions.sort(function (x, y) { return x.from < y.from ? -1 : 1; });
    });

    /* 5. output */
    var coverage = chs.map(function (c) { return { id: c.id, k: c.k, name: c.name, need: c.need, planned: c.done }; });
    var missed = coverage.filter(function (c) { return c.planned === 0; });
    if (missed.length) warnings.push(missed.length + ' chapter' + (missed.length > 1 ? 's get' : ' gets') + ' no block yet, because there is less free time than material: ' +
      missed.slice(0, 5).map(function (c) { return subj[c.k].name + ' "' + c.name + '"'; }).join(', ') + (missed.length > 5 ? ' and more' : '') + '. The plan covers the most important chapters first.');
    var trialEnd = (function () { var n = 0, d2 = today; for (var i = 0; i < days.length && n < 3; i++) { if (days[i].kind === 'study') { n++; d2 = days[i].date; } } return d2; })();
    var outDays = days.map(function (day) {
      var x = { date: day.date, phase: day.phase, kind: day.kind, minutes: day.sessions.reduce(function (t, s) { return t + s.min; }, 0), sessions: day.sessions };
      if (day.exams) x.exams = day.exams;
      if (day.light) x.light = day.light;
      if (day.examTomorrow) x.examTomorrow = day.examTomorrow.map(function (k) { return subj[k].name; });
      return x;
    });
    return {
      version: VERSION, llm: false, made: today, programme: prog.id,
      exams: Object.keys(exams).map(function (k) { return { k: k, name: subj[k].name, date: exams[k], known: !!a['B5_' + k] }; }),
      trial: { from: today, to: trialEnd },
      settings: { cap: st.cap, weekly: st.weekly, block: st.block, brk: st.brk, shares: st.shares,
        half: { am: [hm(st.dayStart), hm(st.lunch)], pm: [hm(st.pmStart), hm(st.dayEnd)] } },
      totals: { minutes: minutesBy, mocks: mocksPlanned },
      coverage: coverage, warnings: warnings, days: outDays
    };
  }

  function countMocks(day) { return day.sessions.filter(function (s) { return s.kind === 'mock'; }).length; }
  function fitsMock(day, len, st) { return !!mockSlot(day, len, st); }
  function mockSlot(day, len, st) {
    var used = day.sessions.reduce(function (t, x) { return t + x.min; }, 0);
    if (used + len > Math.min(st.cap, day.budget + 30)) return null;
    var free = day.free.slice();
    day.sessions.forEach(function (s) { free = subtract(free, toMin(s.from), toMin(s.to) + st.brk); });
    var fits = free.filter(function (f) { return f[1] - f[0] >= len; });
    if (!fits.length) return null;
    for (var i = 0; i < st.peak.length; i++) {
      var p = st.peak[i];
      for (var j = 0; j < fits.length; j++) {
        var start = Math.max(fits[j][0], p[0]);
        if (start < p[1] && start + len <= fits[j][1]) return [start, start + len];
      }
    }
    var start = fits[0][0];
    return [start, start + len];
  }
  function placeMock(day, s, len, st, n) {
    var slot = mockSlot(day, len, st);
    day.sessions.push({ from: hm(slot[0]), to: hm(slot[1]), min: len, k: s.k, ch: null, kind: 'mock',
      title: s.name + ': full mock exam ' + n,
      tasks: ['One past exam, timed like the real one (' + s.exam_min + ' min, aids: ' + s.aids + '), no breaks, no help.',
        'Afterwards: mark it with the official solution and write down every mistake. That correction goes into one of the next blocks.'],
      links: [{ t: 'Mock exams', href: s.mocks.href }] });
  }

  function cutBlocks(day, st) {
    var free = day.free.slice();
    day.sessions.forEach(function (s) { free = subtract(free, toMin(s.from) - st.brk, toMin(s.to) + st.brk); });
    var out = [];
    free.forEach(function (f) {
      var t = f[0];
      while (t + st.block <= f[1]) { out.push({ from: t, len: st.block }); t += st.block + st.brk; }
      if (f[1] - t >= 25 && st.block > 25) out.push({ from: t, len: Math.floor((f[1] - t) / 5) * 5 });
    });
    return out.filter(function (b) { return b.len >= 25; });
  }

  function inPeriod(m, p) { return !!p && m >= p[0] && m < p[1]; }

  function allowedSubjects(day, st, prog, minutesBy, exams) {
    var open = prog.subjects.filter(function (s) { return day.date < exams[s.k]; }).map(function (s) { return s.k; });
    if (day.examTomorrow) return day.examTomorrow.filter(function (k) { return open.indexOf(k) >= 0; });
    var mockSubj = day.sessions.filter(function (s) { return s.kind === 'mock'; }).map(function (s) { return s.k; });
    var behind = open.slice().sort(function (x, y) { return deficit(y, st, minutesBy) - deficit(x, st, minutesBy); });
    if (day.phase === 'session') {
      // during the session the next exam comes first
      var next = open.slice().sort(function (x, y) { return exams[x] < exams[y] ? -1 : 1; })[0];
      behind = [next].concat(behind.filter(function (k) { return k !== next; }));
    }
    var n = st.mix === 'one per day' ? 1 : st.mix === 'mixed' ? open.length : 2;
    var list = mockSubj.concat(behind.filter(function (k) { return mockSubj.indexOf(k) < 0; }));
    return list.slice(0, Math.max(n, mockSubj.length));
  }
  function deficit(k, st, minutesBy) {
    var all = 0; Object.keys(minutesBy).forEach(function (x) { all += minutesBy[x]; });
    return st.shares[k] * (all + 600) - minutesBy[k];
  }

  function pickWork(day, chs, subjects, minutesBy, st, light, hard, exams, prog) {
    if (!subjects.length) return null;
    // spaced reviews that are due come first (they are short and keep earlier chapters alive)
    var due = chs.filter(function (c) { return subjects.indexOf(c.k) >= 0 && c.reviews.length && c.reviews[0] <= day.date; });
    if (due.length && (light || due.length > 2)) {
      due.sort(function (x, y) { return x.reviews[0] < y.reviews[0] ? -1 : 1; });
      return { ch: due[0], kind: 'review' };
    }
    var ks = subjects.slice().sort(function (x, y) { return deficit(y, st, minutesBy) - deficit(x, st, minutesBy); });
    for (var i = 0; i < ks.length; i++) {
      var pool = chs.filter(function (c) { return c.k === ks[i] && c.done < c.need; });
      if (!pool.length) continue;
      pool.sort(function (x, y) { return priority(y) - priority(x); });
      var ch = pool[0];
      if (light) return { ch: ch, kind: ch.done ? 'review' : 'theory' };
      var kind = 'theory';
      if (ch.done > 0) kind = ch.proofs && (hard || ch.done < ch.need / 2) ? 'proof' : 'exam-questions';
      if (day.phase === 'lernphase' || day.phase === 'session') { if (ch.done > 0 && !ch.proofs) kind = 'exam-questions'; }
      return { ch: ch, kind: kind };
    }
    if (due.length) return { ch: due[0], kind: 'review' };
    // everything planned: extra spaced reviews of the weakest chapters
    var weak = chs.filter(function (c) { return subjects.indexOf(c.k) >= 0; }).sort(function (x, y) { return y.gap * y.w - x.gap * x.w; });
    return weak.length ? { ch: weak[0], kind: 'review' } : null;
  }

  /* ---------- checks used by the tests and by the page before showing a plan ---------- */
  function check(plan, prog, answers, calendar) {
    var errs = [], st = settings(prog, answers || {}), cal = calendar || {};
    plan.days.forEach(function (day) {
      var mins = day.sessions.reduce(function (t, s) { return t + s.min; }, 0);
      if (mins > st.cap) errs.push(day.date + ': ' + mins + ' min is over the daily cap');
      if (mins > MAX_DAY) errs.push(day.date + ': over 8 h');
      if (day.kind !== 'study' && day.sessions.length) errs.push(day.date + ': sessions on a ' + day.kind + ' day');
      if (day.sessions.filter(function (s) { return s.kind === 'mock'; }).length > 2) errs.push(day.date + ': more than 2 mocks');
      if (day.light === 'before-exam' && mins > 180) errs.push(day.date + ': more than 3 h the day before an exam');
      var free = freeTime(day.date, st, cal, prog);
      day.sessions.forEach(function (s, i) {
        var f = toMin(s.from), t = toMin(s.to);
        if (!free.some(function (x) { return f >= x[0] && t <= x[1]; })) errs.push(day.date + ' ' + s.from + '-' + s.to + ': outside free time');
        day.sessions.forEach(function (o, j) { if (j > i && toMin(o.from) < t && toMin(o.to) > f) errs.push(day.date + ': overlapping sessions'); });
      });
    });
    return errs;
  }

  return { VERSION: VERSION, LLM_ENABLED: false, makePlan: makePlan, check: check,
    _: { addDays: addDays, dow: dow, freeTime: freeTime, settings: settings, subtract: subtract, toMin: toMin, hm: hm } };
});
