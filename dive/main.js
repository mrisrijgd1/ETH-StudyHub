// Exam Dive: app controller (screens, dive state machine, DOM). Game rules live in game.js.
import { MAX_DEPTH, FLOOR, TIMERS, DEFAULT_TIMER, TIMER_WARN_SECONDS, SUBJECT_CHOICES, REPORT_REPO } from './config.js';
import {
  zoneAt, depthAfterCorrect, depthAfterAnswers, isPerfect, checkAnswer, subjectsFor,
  availableChapters, filterQuestions, isFiltered, drawQuestion, optionOrder, bestKey, qualifiesForBest,
  formatTimer, reportUrl, wrongEndsDive } from './game.js';
import { loadState, saveState, recordDive, recentIdSet, setPref } from './storage.js';
import { loadBank, bankMode, normaliseAll } from './bank.js';
import { account, signIn, loadPrivateBank, saveRun, leaderboard } from './auth.js';
import { t, setLang, getLang } from './i18n.js';
import { loadMathJax, typeset, clearMath, setRichText } from './math.js';
import { sfx, setMuted } from './audio.js';
import { createSea } from './sea.js';
import { drawText, drawSplitText, measureText } from './pixelfont.js';

const $ = (id) => document.getElementById(id);
const el = (tag, attrs = {}, ...kids) => {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null || v === false) continue;
    if (k === 'class') n.className = v;
    else if (k === 'text') n.textContent = v;
    else if (k.startsWith('on')) n.addEventListener(k.slice(2), v);
    else n.setAttribute(k, v === true ? '' : v);
  }
  for (const c of kids.flat()) if (c != null) n.append(c);
  return n;
};

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const params = new URLSearchParams(location.search);

const app = {
  store: loadState(),
  bank: [],
  byId: new Map(),
  chapterTitles: { analysis: [], physics: [] },
  mode: bankMode(location.search),
  screen: 'start',
  dive: null,
  lastDive: null,
  mathFailed: false,
  acc: null,          // signed-in StudyHub account, or null for guests
  authPending: true,
  boardSeq: 0,
};

function persist() { saveState(app.store); }
function pref(k) { return app.store.prefs[k]; }
function setPrefAndSave(k, v) { app.store = setPref(app.store, k, v); persist(); }

// ---------- i18n ----------

function applyStaticText() {
  document.documentElement.lang = getLang();
  for (const n of document.querySelectorAll('[data-i18n]')) n.textContent = t(n.dataset.i18n);
  $('btn-lang').textContent = t('lang_toggle');
  $('btn-lang').setAttribute('aria-label', t('lang_toggle_label'));
  $('sea').setAttribute('aria-label', t('canvas_label'));
  $('dive-profile').setAttribute('aria-label', t('account_settings'));
  $('dive-profile').href = getLang() === 'de' ? '../de/account.html?settings=1' : '../account.html?settings=1';
  $('dive-login-title').textContent = t(app.authPending ? 'checking_login' : 'login_required');
  $('dive-login-note').textContent = app.authPending ? '' : t('login_help');
  updateSoundButton();
}

function chapterTitle(subject, chapter) {
  const c = (app.chapterTitles[subject] || []).find(x => String(x.id) === String(chapter));
  return c ? c[getLang()] || c.de : '';
}

function subjectLabel(s) { return t(`subj_${s}`); }

function chapterLabel(subject, chapter, withSubject) {
  const n = /^P/.test(String(chapter)) ? String(chapter) : t('chapter_n', { n: chapter });
  return (withSubject ? `${t(`subj_short_${subject}`)} · ` : '') + n;
}

// ---------- pixel canvases ----------

function paintPixelText(canvas, text, opts = {}) {
  const k = opts.split ? 3 : 1; // the RGB split needs thicker strokes to stay subtle
  const w = measureText(text, k) + 4, h = 7 * k + 2 + k;
  canvas.width = w; canvas.height = h;
  const g = canvas.getContext('2d');
  g.clearRect(0, 0, w, h);
  if (opts.split) drawSplitText(g, text, 2, 1, { scale: k, split: 1, color: opts.color || '#fffaf0' });
  else drawText(g, text, 2, 1, { color: opts.color || '#e9f3ff' });
}

function paintDepth(canvas, metres) {
  const s = `${String(Math.round(metres)).padStart(5, '0')} M`;
  canvas.width = measureText(s); canvas.height = 7;
  const g = canvas.getContext('2d');
  g.clearRect(0, 0, canvas.width, canvas.height);
  drawText(g, s, 0, 0, { color: '#9ffcff' });
}

let gaugeAnim = 0;
function rollGauge(from, to) {
  cancelAnimationFrame(gaugeAnim);
  const canvas = $('gauge');
  $('hud-depth').textContent = `${t('depth')}: ${to} m`;
  if (reducedMotion || from === to) { paintDepth(canvas, to); return; }
  const t0 = performance.now(), dur = 900;
  const step = (now) => {
    const k = Math.min(1, (now - t0) / dur);
    paintDepth(canvas, from + (to - from) * (1 - Math.pow(1 - k, 3)));
    if (k < 1) gaugeAnim = requestAnimationFrame(step);
  };
  gaugeAnim = requestAnimationFrame(step);
}

// ---------- sound ----------

function updateSoundButton() {
  const muted = pref('muted') !== false;
  const b = $('btn-sound');
  b.textContent = muted ? t('sound_off') : t('sound_on');
  b.setAttribute('aria-pressed', String(!muted));
}

// ---------- screens ----------

function show(screen) {
  app.screen = screen;
  for (const s of ['start', 'dive', 'over']) $(`screen-${s}`).hidden = s !== screen;
  document.body.className = `mode-${screen}`;
  window.scrollTo(0, 0);
}

function announce(msg) {
  const live = $('live');
  live.textContent = '';
  setTimeout(() => { live.textContent = msg; }, 30);
}

// ---------- start screen ----------

function currentSubjects() { return subjectsFor(pref('subject') || 'analysis'); }

function chapterSelection() {
  const avail = availableChapters(app.bank, currentSubjects()).map(c => c.key);
  const stored = pref('chapters');
  if (!Array.isArray(stored)) return new Set(avail);
  return new Set(stored.filter(k => avail.includes(k)));
}

function renderSubjectGroup() {
  const g = $('subject-group');
  g.textContent = '';
  for (const s of SUBJECT_CHOICES) {
    const id = `subj-${s}`;
    const input = el('input', { type: 'radio', name: 'subject', id, value: s, checked: pref('subject') === s });
    input.addEventListener('change', () => {
      setPrefAndSave('subject', s);
      setPrefAndSave('chapters', null);
      renderChips(); renderStartNote(); renderLeaderboard();
    });
    g.append(el('label', { class: 'seg-item', for: id }, input, el('span', { text: subjectLabel(s) })));
  }
}

function renderTimerGroup() {
  const g = $('timer-group');
  g.textContent = '';
  for (const sec of TIMERS) {
    const id = `timer-${sec}`;
    const input = el('input', { type: 'radio', name: 'timer', id, value: sec, checked: Number(pref('timer')) === sec });
    input.addEventListener('change', () => { setPrefAndSave('timer', sec); renderStartNote(); renderLeaderboard(); });
    g.append(el('label', { class: 'seg-item', for: id }, input, el('span', { text: formatTimer(sec) || t('timer_off') })));
  }
}

function renderChips() {
  const box = $('chips');
  box.textContent = '';
  const subjects = currentSubjects();
  const avail = availableChapters(app.bank, subjects);
  const sel = chapterSelection();
  const multi = subjects.length > 1;
  for (const c of avail) {
    const id = `chip-${c.key.replace(/[^a-zA-Z0-9]/g, '-')}`;
    const title = chapterTitle(c.subject, c.chapter);
    const input = el('input', { type: 'checkbox', id, value: c.key, checked: sel.has(c.key) });
    input.addEventListener('change', () => {
      const now = new Set([...box.querySelectorAll('input:checked')].map(i => i.value));
      const all = avail.every(a => now.has(a.key));
      setPrefAndSave('chapters', all ? null : [...now]);
      renderStartNote();
    });
    box.append(el('label', { class: 'chip', for: id, title: `${title} (${c.count})` }, input,
      el('span', { class: 'chip-n', text: chapterLabel(c.subject, c.chapter, multi) }),
      el('span', { class: 'chip-t', text: title })));
  }
}

function setAllChips(on) {
  setPrefAndSave('chapters', on ? null : []);
  renderChips(); renderStartNote();
}

function startSelection() {
  const subjects = currentSubjects();
  const avail = availableChapters(app.bank, subjects);
  const sel = [...chapterSelection()];
  const filtered = isFiltered(sel, avail);
  const pool = filterQuestions(app.bank, { subjects, chapters: filtered ? sel : null });
  return { subjects, avail, sel, filtered, pool };
}

function renderStartNote() {
  const note = $('start-note');
  const btn = $('btn-dive');
  const notes = [];
  let ok = !!app.acc && app.bank.length > 0;
  if (app.bank.length) {
    const { sel, filtered, pool } = startSelection();
    if (sel.length === 0) { notes.push(t('note_no_chapters')); ok = false; }
    else if (pool.length === 0) { notes.push(t('note_empty')); ok = false; }
    if (filtered && sel.length) notes.push(t('note_filtered'));
  }
  if (Number(pref('timer')) === 0) notes.push(t('note_practice'));
  note.textContent = notes.join(' ');
  btn.disabled = !ok;
}

function renderBests() {
  const box = $('bests');
  box.textContent = '';
  const timers = TIMERS.filter(x => x > 0);
  const table = el('table', { class: 'bests' },
    el('thead', {}, el('tr', {}, el('th', { scope: 'col', text: '' }),
      ...timers.map(s => el('th', { scope: 'col', text: formatTimer(s) })))),
    el('tbody', {}, ...SUBJECT_CHOICES.map(subj => el('tr', {},
      el('th', { scope: 'row', text: subjectLabel(subj) }),
      ...timers.map(sec => {
        const b = app.store.bests[bestKey(subj, sec)];
        return el('td', { class: b ? 'has' : '', text: b ? `${b.depth} m` : '–' });
      })))));
  box.append(table);
}

function fmtDate(iso) {
  try {
    return new Date(iso).toLocaleString(getLang() === 'de' ? 'de-CH' : 'en-GB', { dateStyle: 'short', timeStyle: 'short' });
  } catch { return iso; }
}

function chaptersText(d) {
  if (!d.chapters) return t('all_chapters');
  const multi = d.subject === 'mixed';
  return d.chapters.map(k => {
    const [s, c] = k.split(':');
    return chapterLabel(s, c, multi);
  }).join(', ');
}

function renderHistory() {
  const list = $('history');
  list.textContent = '';
  const dives = app.store.dives;
  if (!dives.length) { list.append(el('li', { class: 'empty', text: t('history_empty') })); return; }
  dives.slice(0, 10).forEach((d, i) => {
    const tags = [];
    if (d.filtered) tags.push(el('span', { class: 'tag', text: t('filtered') }));
    if (!d.timer) tags.push(el('span', { class: 'tag', text: t('practice') }));
    const endQ = d.endQuestion ? app.byId.get(d.endQuestion) : null;
    list.append(el('li', { class: 'hist' },
      el('div', { class: 'hist-main' },
        el('strong', { class: 'hist-depth', text: `${d.depth} m` }),
        el('span', { text: ` · ${subjectLabel(d.subject)} · ${formatTimer(d.timer) || t('timer_off')} · ${chaptersText(d)} · ${d.answers} ✓${d.mistakes ? ` · ${d.mistakes} ✗` : ''}` }),
        ...tags),
      el('div', { class: 'hist-sub' },
        el('span', { text: `${fmtDate(d.date)} · ${t('ended_by')}: ${t(`reason_${d.endedBy}`)}` }),
        d.endQuestion ? el('span', { class: 'hist-q', title: endQ ? endQ.stem : d.endQuestion, text: ` · ${d.endQuestion}` }) : null),
      el('button', { class: 'pixel-btn tiny', type: 'button', text: t('history_review'), onclick: () => openReview(dives[i]) })));
  });
  if (dives.length > 10) list.append(el('li', { class: 'empty', text: t('history_more', { n: dives.length - 10 }) }));
}

function renderBankInfo(errorMsg) {
  const p = $('bank-info');
  if (errorMsg) { p.textContent = t('bank_error', { msg: errorMsg }); p.classList.add('err'); return; }
  p.classList.remove('err');
  p.textContent = t(app.mode === 'dev' ? 'bank_dev' : app.mode === 'private' ? 'bank_private' : 'bank_public', { n: app.bank.length })
    + (app.mathFailed ? ` ${t('math_offline')}` : '');
}

function renderStart() {
  applyStaticText();
  paintPixelText($('title-canvas'), 'EXAM DIVE', { split: true });
  $('dive-login').hidden = !!app.acc;
  $('dive-login-button').hidden = app.authPending || !!app.acc;
  $('dive-login-cta').hidden = app.authPending || !!app.acc;
  $('dive-profile').hidden = !app.acc;
  document.querySelectorAll('[data-dive-account]').forEach(panel => { panel.hidden = !app.acc; });
  if (!app.acc) return;
  $('btn-resume').hidden = !savedDive();
  renderSubjectGroup(); renderTimerGroup(); renderChips(); renderStartNote();
  renderBests(); renderHistory(); renderBankInfo(app.bankError); renderLeaderboard();
}

// ---------- leaderboard (signed-in users only) ----------

function signInButton(label) {
  return el('button', { class: 'pixel-btn small', type: 'button', text: label, onclick: () => signIn().catch(() => {}) });
}

async function renderLeaderboard() {
  const box = $('board');
  if (!box) return;
  const seq = ++app.boardSeq;
  box.textContent = '';
  const subject = pref('subject');
  const timer = Number(pref('timer')) > 0 ? Number(pref('timer')) : DEFAULT_TIMER;
  $('board-scope').textContent = `${subjectLabel(subject)} · ${formatTimer(timer)}`
    + (Number(pref('timer')) > 0 ? '' : ` ${t('board_practice_note')}`);
  if (!app.acc) {
    box.append(el('p', { class: 'hint', text: t('board_guest') }), signInButton(t('sign_in')));
    return;
  }
  box.append(el('p', { class: 'hint', text: t('board_loading') }));
  let rows;
  try { rows = await leaderboard(app.acc, subject, timer); } catch (e) {
    if (seq !== app.boardSeq) return;
    box.textContent = '';
    box.append(el('p', { class: 'hint err', text: t('board_error') }));
    return;
  }
  if (seq !== app.boardSeq) return;
  box.textContent = '';
  const me = app.acc.profile && app.acc.profile.nickname;
  if (!rows.length) box.append(el('p', { class: 'hint', text: t('board_empty') }));
  else {
    box.append(el('table', { class: 'board' },
      el('thead', {}, el('tr', {}, el('th', { scope: 'col', text: '#' }), el('th', { scope: 'col', text: t('board_name') }),
        el('th', { scope: 'col', text: t('board_depth') }), el('th', { scope: 'col', text: t('board_date') }))),
      el('tbody', {}, ...rows.map((r, i) => el('tr', { class: r.nickname === me ? 'me' : '' },
        el('td', { text: String(i + 1) }), el('th', { scope: 'row', text: r.nickname }),
        el('td', { text: `${r.depth} m` }), el('td', { text: fmtDate(r.reached_at) }))))));
  }
  const prof = app.acc.profile;
  if (!prof || !prof.leaderboard || !prof.nickname) {
    box.append(el('p', { class: 'hint' }, t('board_optin'), ' ',
      el('a', { href: '../account.html', text: t('board_optin_link') })));
  }
  if (app.mode !== 'private') box.append(el('p', { class: 'hint', text: t('board_only_private') }));
}

// ---------- the dive ----------

function diveCheckpointKey() { return `sh-resume:${app.acc.user.id}:dive`; }

function savedDive() {
  if (!app.acc) return null;
  try {
    const saved = JSON.parse(localStorage.getItem(diveCheckpointKey()));
    if (saved?.mode !== app.mode || !app.byId.has(saved.current.id)) return null;
    return saved;
  } catch { return null; }
}

function checkpointDive() {
  const d = app.dive;
  if (!app.acc || !d?.current || d.ended) return;
  const { subject, timer, filtered, chapters, depth, answers, n, mistakes, log, used, endedBy } = d;
  const { q, order, chosen, answered, deadline } = d.current;
  const target = new URL(location.href);
  target.searchParams.set('resume', '1');
  target.searchParams.set('lang', getLang());
  try {
    localStorage.setItem(diveCheckpointKey(), JSON.stringify({
      href: target.pathname + target.search, title: `${subjectLabel(subject)} · ${depth} m`, at: Date.now(), mode: app.mode,
      subject, timer, filtered, chapters, depth, answers, n, mistakes, log, used: [...used], endedBy,
      current: { id: q.id, order: order.map(option => option.key), chosen: [...chosen], answered, deadline },
    }));
  } catch { /* The dive can continue if storage is unavailable. */ }
}

function resumeDive() {
  const saved = savedDive();
  if (!saved) return;
  const { subject, timer, filtered, chapters, depth, answers, n, mistakes, log, used, endedBy, current } = saved;
  const q = app.byId.get(current.id);
  const order = current.order.map(key => q.options.find(option => option.key === key));
  if (order.some(option => !option) || order.length !== q.options.length) return;
  const subjects = subjectsFor(subject);
  app.dive = {
    subject, subjects, timer, filtered, chapters, depth, answers, n, mistakes, log, endedBy,
    timerId: 0, ended: false, used: new Set(used), recent: recentIdSet(app.store),
    pool: filterQuestions(app.bank, { subjects, chapters }),
    current: { q, order, chosen: new Set(current.chosen), answered: current.answered, deadline: current.deadline },
  };
  show('dive');
  sea.startDive();
  sea.jumpTo(depth);
  rollGauge(depth, depth);
  updateHud();
  if (current.answered) {
    const answer = log[log.length - 1];
    renderReveal({ correct: answer.correct, timeout: answer.timeout, gained: answer.correct ? depth - depthAfterAnswers(answers - 1) : 0 });
  } else {
    renderQuestion();
    startTimer();
  }
}

function startDive() {
  if (!app.acc || $('btn-dive').disabled) return;
  const { subjects, sel, filtered, pool } = startSelection();
  if (!pool.length) return;
  const timer = Number(pref('timer'));
  app.dive = {
    subject: pref('subject'), subjects, timer, filtered,
    chapters: filtered ? sel : null,
    pool, depth: 0, answers: 0, used: new Set(), recent: recentIdSet(app.store),
    log: [], current: null, timerId: 0, ended: false, n: 0, mistakes: 0,
  };
  sfx.start();
  show('dive');
  sea.startDive();
  rollGauge(0, 0);
  nextQuestion();
}

function updateHud() {
  const d = app.dive;
  const z = zoneAt(d.depth);
  $('hud-zone').textContent = z ? z.name[getLang()] : FLOOR.name[getLang()];
  $('hud-q').textContent = t('question_n', { n: d.n });
}

function nextQuestion() {
  const d = app.dive;
  const q = drawQuestion(d.pool, { depth: d.depth, used: d.used, recent: d.recent });
  if (!q) { endDive('exhausted'); return; }
  d.used.add(q.id);
  d.n++;
  d.current = { q, order: optionOrder(q), chosen: new Set(), answered: false };
  sea.setDetail(true);
  updateHud();
  renderQuestion();
  startTimer();
  checkpointDive();
}

function optionLabel(q, opt, i) { return q.fixedOrder ? opt.key : 'abcdef'[i]; }

function metaLine(q) {
  const title = chapterTitle(q.subject, q.chapter);
  const dots = '●'.repeat(q.difficulty) + '○'.repeat(5 - q.difficulty);
  return el('div', { class: 'q-meta' },
    el('span', { text: `${subjectLabel(q.subject)} · ${chapterLabel(q.subject, q.chapter, false)}${title ? ` ${title}` : ''}` }),
    el('span', { class: 'dots', title: t('difficulty', { n: q.difficulty }), 'aria-label': t('difficulty', { n: q.difficulty }), text: dots }));
}

function stemBlock(q, id) {
  const stem = el('div', { class: 'q-stem', id, tabindex: '-1' });
  setRichText(stem, q.stem);
  const frag = [stem];
  if (q.figure) frag.push(el('img', { class: 'q-figure', src: q.figure, alt: t('figure_alt'), loading: 'lazy' }));
  return frag;
}

function renderQuestion() {
  const d = app.dive;
  const { q, order } = d.current;
  const card = $('card');
  clearMath(card);
  card.textContent = '';
  card.className = 'card asking';
  card.setAttribute('aria-labelledby', 'q-stem');

  if (d.timer > 0) {
    card.append(el('div', { class: 'timer', id: 'timer', role: 'progressbar', 'aria-label': t('time_left'),
      'aria-valuemin': '0', 'aria-valuemax': String(d.timer), 'aria-valuenow': String(d.timer) },
    el('div', { class: 'timer-fill', id: 'timer-fill' }),
    el('span', { class: 'timer-text', id: 'timer-text', text: formatTimer(d.timer) })));
  } else {
    card.append(el('div', { class: 'timer off' }, el('span', { class: 'timer-text', text: t('no_timer') })));
  }
  card.append(metaLine(q), ...stemBlock(q, 'q-stem'));

  const list = el('ol', { class: 'options' });
  order.forEach((opt, i) => {
    const label = optionLabel(q, opt, i);
    const text = setRichText(el('span', { class: 'opt-text' }), opt.text, 'span');
    if (q.type === 'single') {
      list.append(el('li', {}, el('button', { class: 'opt', type: 'button', 'data-key': opt.key,
        onclick: () => submit([opt.key]) }, el('span', { class: 'opt-key', 'aria-hidden': 'true', text: label }), text)));
    } else {
      const id = `opt-${i}`;
      const box = el('input', { type: 'checkbox', id, value: opt.key, checked: d.current.chosen.has(opt.key) });
      box.addEventListener('change', () => {
        if (box.checked) d.current.chosen.add(opt.key); else d.current.chosen.delete(opt.key);
        checkpointDive();
        sfx.click();
      });
      list.append(el('li', {}, el('label', { class: 'opt', for: id }, box,
        el('span', { class: 'opt-key', 'aria-hidden': 'true', text: label }), text)));
    }
  });
  if (q.type === 'multi') card.append(el('p', { class: 'multi-hint', text: t('multi_hint') }));
  card.append(list);
  if (q.type === 'multi') {
    card.append(el('div', { class: 'actions' },
      el('button', { class: 'pixel-btn', type: 'button', id: 'btn-submit', text: t('submit'),
        onclick: () => submit([...d.current.chosen]) })));
  }
  card.scrollTop = 0;
  typeset(card).then(ok => { if (!ok) noteMathFailure(); });
  $('q-stem').focus({ preventScroll: true });
}

function noteMathFailure() {
  if (app.mathFailed) return;
  app.mathFailed = true;
  renderBankInfo(app.bankError);
}

function stopTimer() {
  if (app.dive && app.dive.timerId) { clearInterval(app.dive.timerId); app.dive.timerId = 0; }
}

function startTimer() {
  const d = app.dive;
  stopTimer();
  if (!d.timer) return;
  const deadline = d.current.deadline ?? (d.current.deadline = Date.now() + d.timer * 1000);
  const activeDeadline = performance.now() + Math.max(0, Math.min(d.timer * 1000, deadline - Date.now()));
  let lastWhole = d.timer;
  const tick = () => {
    if (!app.dive || app.dive !== d || d.current.answered) { stopTimer(); return; }
    const left = Math.max(0, (activeDeadline - performance.now()) / 1000);
    const fill = $('timer-fill'), text = $('timer-text'), bar = $('timer');
    if (fill) fill.style.width = `${(left / d.timer) * 100}%`;
    const whole = Math.ceil(left);
    if (text) text.textContent = formatTimer(whole) || '0:00';
    if (bar) {
      bar.setAttribute('aria-valuenow', String(whole));
      bar.classList.toggle('warn', left <= TIMER_WARN_SECONDS);
    }
    if (whole !== lastWhole) {
      lastWhole = whole;
      if (whole <= TIMER_WARN_SECONDS && whole > 0) sfx.tick();
    }
    if (left <= 0) { stopTimer(); submit([], { timeout: true }); }
  };
  tick();
  if (!d.current.answered) d.timerId = setInterval(tick, 100);
}

function submit(chosen, { timeout = false } = {}) {
  const d = app.dive;
  if (!d || !d.current || d.current.answered) return;
  stopTimer();
  const { q } = d.current;
  d.current.answered = true;
  d.current.chosen = new Set(chosen);
  const correct = !timeout && checkAnswer(q, chosen);
  d.log.push({ id: q.id, chosen: [...chosen], correct, timeout });
  const before = d.depth;
  let gained = 0;
  if (correct) {
    d.answers++;
    d.depth = depthAfterCorrect(d.depth);
    gained = d.depth - before;
    sea.correct(d.depth);
    rollGauge(before, d.depth);
    const zoneChanged = zoneAt(before) !== zoneAt(d.depth);
    if (isPerfect(d.depth)) sfx.perfect(); else if (zoneChanged) sfx.zone(); else sfx.correct();
    announce(t('live_correct', { m: d.depth }) + (zoneChanged && zoneAt(d.depth) ? ` ${zoneAt(d.depth).name[getLang()]}.` : ''));
  } else if (!wrongEndsDive(d.timer)) {
    // practice mode: unlimited lives, the diver keeps its depth
    d.mistakes++;
    sea.wrong();
    sfx.wrong();
    announce(t('live_wrong_practice', { m: d.depth }));
  } else {
    sea.wrong();
    sea.ascend(1.0);
    sfx.wrong();
    d.endedBy = timeout ? 'timeout' : 'wrong';
    announce(t(timeout ? 'live_timeout' : 'live_wrong', { m: d.depth }));
  }
  updateHud();
  checkpointDive();
  renderReveal({ correct, timeout, gained });
}

/** Options with right/wrong marks, the player's choice and per-option notes. */
function solutionBlock(q, order, chosenSet, answered = true) {
  const want = new Set(q.correct);
  const list = el('ol', { class: 'options reveal' });
  order.forEach((opt, i) => {
    const isRight = want.has(opt.key);
    const picked = chosenSet.has(opt.key);
    const tags = [el('span', { class: `tag ${isRight ? 'ok' : 'no'}`, text: isRight ? `✓ ${t('is_correct')}` : `✗ ${t('is_wrong')}` })];
    if (picked) tags.push(el('span', { class: 'tag mine', text: t('your_choice') }));
    if (answered && isRight && !picked && q.type === 'multi') tags.push(el('span', { class: 'tag miss', text: t('missed') }));
    const note = q.optionNotes[opt.key];
    list.append(el('li', { class: `opt ${isRight ? 'is-right' : 'is-wrong'} ${picked ? 'picked' : ''}` },
      el('div', { class: 'opt-row' },
        el('span', { class: 'opt-key', 'aria-hidden': 'true', text: optionLabel(q, opt, i) }),
        setRichText(el('span', { class: 'opt-text' }), opt.text, 'span'),
        el('span', { class: 'opt-tags' }, ...tags)),
      note ? setRichText(el('div', { class: 'opt-note' }), note) : null));
  });
  return list;
}

function explainBlock(q) {
  const out = [];
  if (q.explanation) {
    out.push(el('section', { class: 'explain' }, el('h3', { text: t('explanation') }), setRichText(el('div'), q.explanation)));
  }
  if (q.refs.length) {
    out.push(el('section', { class: 'refs' }, el('h3', { text: t('refs') }),
      el('ul', {}, ...q.refs.map(r => el('li', { text: r })))));
  }
  out.push(el('footer', { class: 'q-foot' },
    q.source.label ? el('span', { class: 'src', text: `${t('source')}: ${q.source.label}` }) : null,
    el('span', { class: `badge ${q.answerStatus}`, text: t(`status_${q.answerStatus}`) }),
    el('a', { class: 'report', href: reportUrl(REPORT_REPO, q.id, getLang()), target: '_blank', rel: 'noopener noreferrer',
      title: t('report_title'), text: t('report') })));
  return out;
}

function renderReveal({ correct, timeout, gained }) {
  const d = app.dive;
  const { q, order, chosen } = d.current;
  const card = $('card');
  clearMath(card);
  card.textContent = '';
  card.className = `card revealing ${correct ? 'good' : 'bad'}`;
  card.setAttribute('aria-labelledby', 'reveal-banner');
  sea.setDetail(false);

  const perfect = correct && isPerfect(d.depth);
  const banner = perfect ? t('perfect_banner') : correct ? t('correct_banner', { m: gained })
    : timeout ? t('timeout_banner') : wrongEndsDive(d.timer) ? t('wrong_banner') : t('wrong_banner_practice');
  card.append(el('div', { class: `banner ${correct ? 'good' : 'bad'}`, id: 'reveal-banner', text: banner }));
  card.append(metaLine(q), ...stemBlock(q, 'reveal-stem'));
  if (q.type === 'multi' && chosen.size === 0 && !timeout) card.append(el('p', { class: 'hint', text: t('you_chose_none') }));
  card.append(solutionBlock(q, order, chosen));
  card.append(...explainBlock(q));

  const actions = el('div', { class: 'actions sticky' });
  let primary;
  if (perfect) {
    primary = el('button', { class: 'pixel-btn', type: 'button', text: t('to_result'), onclick: () => endDive('perfect') });
    actions.append(primary);
  } else if (correct || !wrongEndsDive(d.timer)) {
    primary = el('button', { class: 'pixel-btn', type: 'button', text: t('continue'), onclick: () => { sfx.click(); nextQuestion(); } });
    actions.append(primary, el('button', { class: 'pixel-btn alt', type: 'button', text: t('surface'), onclick: () => endDive('surface') }));
  } else {
    primary = el('button', { class: 'pixel-btn', type: 'button', text: t('to_result'), onclick: () => endDive(d.endedBy) });
    actions.append(primary);
  }
  card.append(actions);
  card.scrollTop = 0;
  typeset(card).then(ok => { if (!ok) noteMathFailure(); });
  primary.focus({ preventScroll: true });
}

function abortDive() {
  const d = app.dive;
  if (!d || d.ended) return;
  if (d.current && d.current.answered) {
    // during a reveal: same as the "Auftauchen" button
    endDive(d.endedBy || (isPerfect(d.depth) ? 'perfect' : 'surface'));
    return;
  }
  if (!window.confirm(t('abort_confirm'))) return;
  stopTimer();
  if (d.current) d.log.push({ id: d.current.q.id, chosen: [], correct: false, skipped: true });
  endDive('abort');
}

function endDive(reason) {
  const d = app.dive;
  if (!d || d.ended) return;
  d.ended = true;
  stopTimer();
  try { localStorage.removeItem(diveCheckpointKey()); } catch { /* storage unavailable */ }
  const endQuestion = ['wrong', 'timeout', 'abort'].includes(reason) && d.current ? d.current.q.id : null;
  const record = {
    date: new Date().toISOString(),
    subject: d.subject, chapters: d.chapters, filtered: d.filtered, timer: d.timer,
    depth: d.depth, answers: d.answers, mistakes: d.mistakes, endedBy: reason, endQuestion,
    questions: d.log, bank: app.mode,
  };
  const { state, newBest } = recordDive(app.store, record);
  app.store = state;
  persist();
  app.lastDive = record;
  if (app.acc && app.mode === 'private' && qualifiesForBest(record) && record.depth > 0) saveRun(app.acc, record);
  if (reason !== 'wrong' && reason !== 'timeout') sea.ascend(0.2);
  renderOver(record, newBest);
  show('over');
}

// ---------- game over ----------

function renderOver(rec, newBest) {
  const title = rec.endedBy === 'perfect' ? t('over_perfect')
    : (rec.endedBy === 'wrong' || rec.endedBy === 'timeout') ? t('over_failed') : t('over_surfaced');
  paintPixelText($('over-title'), title, { split: true });
  $('over-h2').textContent = `${title} ${rec.depth} m`;
  paintDepth($('over-depth'), rec.depth);
  const z = rec.depth >= MAX_DEPTH ? FLOOR.name[getLang()] : zoneAt(rec.depth).name[getLang()];
  const stats = $('over-stats');
  stats.textContent = '';
  const row = (k, v) => [el('dt', { text: k }), el('dd', { text: v })];
  stats.append(...row(t('reached'), `${rec.depth} m`), ...row(t('zone_reached'), z),
    ...row(t('answers'), String(rec.answers)), ...(rec.mistakes ? row(t('mistakes'), String(rec.mistakes)) : []), ...row(t('ended_by'), t(`reason_${rec.endedBy}`)),
    ...row(t('subject'), `${subjectLabel(rec.subject)} · ${formatTimer(rec.timer) || t('timer_off')} · ${chaptersText(rec)}`));
  const tags = $('over-tags');
  tags.textContent = '';
  if (newBest) tags.append(el('span', { class: 'tag best', text: t('new_best') }));
  if (rec.filtered) tags.append(el('span', { class: 'tag', text: t('filtered') }));
  if (!rec.timer) tags.append(el('span', { class: 'tag', text: t('practice') }));
  if (!qualifiesForBest(rec) && !tags.childNodes.length) tags.hidden = true; else tags.hidden = false;

  const ending = $('over-ending');
  clearMath(ending);
  ending.textContent = '';
  const q = rec.endQuestion ? app.byId.get(rec.endQuestion) : null;
  ending.hidden = !q;
  if (q) {
    ending.append(el('h3', { text: t('ending_question') }), metaLine(q), ...stemBlock(q, 'ending-stem'));
    typeset(ending);
  }
  $('btn-review-last').hidden = !rec.questions.length;
  setTimeout(() => $('btn-again').focus({ preventScroll: true }), 50);
}

// ---------- review dialog ----------

let reviewReturnFocus = null;

function openReview(rec) {
  const body = $('review-body');
  clearMath(body);
  body.textContent = '';
  $('review-title').textContent = t('review_title', { date: fmtDate(rec.date) });
  rec.questions.forEach((entry, i) => {
    const q = app.byId.get(entry.id);
    const item = el('article', { class: `review-item ${entry.correct ? 'good' : 'bad'}` });
    const status = entry.correct ? `✓ ${t('is_correct')}` : entry.timeout ? `⏱ ${t('timeout_banner')}`
      : entry.skipped ? t('unanswered') : `✗ ${t('is_wrong')}`;
    item.append(el('div', { class: `banner small ${entry.correct ? 'good' : 'bad'}`, text: `${i + 1}. ${status}` }));
    if (!q) { item.append(el('p', { class: 'hint', text: t('q_missing', { id: entry.id }) })); body.append(item); return; }
    item.append(metaLine(q), ...stemBlock(q, `rv-${i}`), solutionBlock(q, q.options, new Set(entry.chosen || []), !entry.skipped), ...explainBlock(q));
    body.append(item);
  });
  reviewReturnFocus = document.activeElement;
  $('review').hidden = false;
  document.body.classList.add('modal-open');
  $('btn-review-close').focus();
  typeset(body);
}

function closeReview() {
  $('review').hidden = true;
  document.body.classList.remove('modal-open');
  if (reviewReturnFocus && reviewReturnFocus.focus) reviewReturnFocus.focus();
}

// ---------- keyboard ----------

const KEY_INDEX = { 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5 };

function onKey(e) {
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  if (!$('review').hidden) {
    if (e.key === 'Escape') { e.preventDefault(); closeReview(); }
    if (e.key === 'Tab') trapFocus(e, $('review'));
    return;
  }
  const tag = (e.target && e.target.tagName) || '';
  const onControl = ['BUTTON', 'A', 'INPUT', 'SELECT', 'TEXTAREA', 'LABEL'].includes(tag);
  if (app.screen === 'start') {
    if (e.key === 'Enter' && !onControl) { e.preventDefault(); startDive(); }
    return;
  }
  if (app.screen === 'dive' && app.dive && app.dive.current) {
    const cur = app.dive.current;
    if (!cur.answered) {
      const idx = KEY_INDEX[e.key.toLowerCase()];
      if (idx != null && idx < cur.order.length) {
        e.preventDefault();
        const opt = cur.order[idx];
        if (cur.q.type === 'single') submit([opt.key]);
        else {
          const box = $(`opt-${idx}`);
          box.checked = !box.checked;
          box.dispatchEvent(new Event('change'));
        }
        return;
      }
      if (e.key === 'Enter' && cur.q.type === 'multi' && !(onControl && tag !== 'INPUT')) {
        e.preventDefault(); submit([...cur.chosen]); return;
      }
      if (e.key === 'Escape') { e.preventDefault(); abortDive(); }
      return;
    }
    if (e.key === 'Escape') { e.preventDefault(); abortDive(); }
    return;
  }
  if (app.screen === 'over' && e.key === 'Escape') { e.preventDefault(); goStart(); }
}

function trapFocus(e, root) {
  const f = [...root.querySelectorAll('button, a[href], input, [tabindex]:not([tabindex="-1"])')].filter(x => !x.hidden);
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

function goStart() {
  app.dive = null;
  sea.setMode('surface');
  renderStart();
  show('start');
  $('btn-dive').focus({ preventScroll: true });
}

// ---------- boot ----------

let sea;

async function boot() {
  setLang(params.get('lang') || pref('lang') || 'de');
  setMuted(pref('muted') !== false);
  if (!TIMERS.includes(Number(pref('timer')))) app.store = setPref(app.store, 'timer', DEFAULT_TIMER);
  if (!SUBJECT_CHOICES.includes(pref('subject'))) app.store = setPref(app.store, 'subject', 'analysis');

  sea = createSea($('sea'), { reducedMotion, lang: getLang });
  app.sea = sea;
  sea.setMode('surface');

  $('btn-dive').addEventListener('click', startDive);
  $('btn-resume').addEventListener('click', resumeDive);
  const loginButtons = [$('dive-login-button'), $('dive-login-cta')];
  async function logIn() {
    loginButtons.forEach(button => { button.disabled = true; });
    try { await signIn(); }
    catch { $('dive-login-note').textContent = t('login_failed'); loginButtons.forEach(button => { button.disabled = false; }); }
  }
  loginButtons.forEach(button => button.addEventListener('click', logIn));
  $('chips-all').addEventListener('click', () => setAllChips(true));
  $('chips-none').addEventListener('click', () => setAllChips(false));
  $('btn-abort').addEventListener('click', abortDive);
  $('btn-again').addEventListener('click', () => { sea.setMode('surface'); startDive(); });
  $('btn-start').addEventListener('click', goStart);
  $('btn-review-last').addEventListener('click', () => app.lastDive && openReview(app.lastDive));
  $('btn-review-close').addEventListener('click', closeReview);
  $('review').addEventListener('click', (e) => { if (e.target === $('review')) closeReview(); });
  $('btn-lang').addEventListener('click', () => {
    setLang(getLang() === 'de' ? 'en' : 'de');
    setPrefAndSave('lang', getLang());
    sea.setLang();
    applyStaticText();
    if (app.screen === 'start') renderStart();
    else if (app.screen === 'dive' && app.dive) updateHud();
  });
  $('btn-sound').addEventListener('click', () => {
    const muted = !(pref('muted') !== false);
    setPrefAndSave('muted', muted);
    setMuted(muted);
    updateSoundButton();
    if (!muted) sfx.click();
  });
  document.addEventListener('keydown', onKey);

  applyStaticText();
  paintPixelText($('title-canvas'), 'EXAM DIVE', { split: true });
  loadMathJax().then(ok => { if (!ok) noteMathFailure(); });

  try {
    app.acc = await account();
    if (!app.acc) return;
    app.acc.sb.auth.onAuthStateChange((event, session) => {
      if (session?.user?.id !== app.acc.user.id) setTimeout(() => location.reload(), 0);
    });
    const loadQuestions = async () => {
      if (app.acc && app.mode !== 'dev') {
        try {
          const priv = normaliseAll(await loadPrivateBank(app.acc));
          if (priv.length) { app.mode = 'private'; return priv; }
        } catch (e) { console.warn('[dive] private bank unavailable, using samples:', e.message || e); }
      }
      return loadBank();
    };
    const [bank, chapters] = await Promise.all([
      loadQuestions(),
      fetch(new URL('chapters.json', import.meta.url)).then(r => r.json()).catch(() => ({ analysis: [], physics: [] })),
    ]);
    app.bank = bank;
    app.byId = new Map(bank.map(q => [q.id, q]));
    app.chapterTitles = chapters;
  } catch (e) {
    app.bankError = e.message || String(e);
  } finally {
    app.authPending = false;
    renderStart();
    if (params.get('resume') === '1') resumeDive();
  }
}

boot();

// for debugging in the console
window.__dive = app;

