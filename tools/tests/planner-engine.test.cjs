// Tests for the rule-based study planner (planner/engine.js, handoff/04-study-planner.md section 5).
// Run: node --test tools/tests/planner-engine.test.cjs
const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const E = require(path.join(__dirname, '../../planner/engine.js'));
const P = require(path.join(__dirname, '../../planner/data/hs26-mathphys-bsc-1.json'));

const base = {
  E6: '8 h', C7: '44', F5_s: '08:30', F5_e: '18:30', F5_l: '12:30', F5_b: '50',
  F3: ['late morning'], F4: 'early afternoon', D6: { ana: 40, phy: 40, inf: 20 },
  B5_ana: '2027-01-27', B5_phy: '2027-02-03', B5_inf: '2027-02-10'
};
const cal = {
  boxes: [{ id: 1, d: 0, s: 6, e: 10, lab: 'lecture', fixed: true }, { id: 2, d: 2, s: 22, e: 24, lab: 'move' },
    { id: 3, d: 4, s: 4, e: 12, lab: 'commit', week: '2027-01-11' }],
  skips: { '2@2027-01-04': true },
  events: { '2026-12-31': [{ all: true }], '2027-01-15': [{ all: false, s: 14, e: 20 }] },
  rest: { '2026-12-24': true, '2026-12-25': true, '2026-12-26': true, '2027-01-01': true, '2027-01-10': true }
};
const plan = (a, c, today) => E.makePlan(P, Object.assign({}, base, a || {}), c || cal, { today: today || '2026-11-30' });
const mins = (d) => d.sessions.reduce((t, s) => t + s.min, 0);

test('a full plan passes every hard check', () => {
  const p = plan();
  assert.deepEqual(E.check(p, P, base, cal), []);
  assert.equal(p.llm, false);
  assert.equal(E.LLM_ENABLED, false);
  assert.equal(p.days[0].date, '2026-11-30');
  assert.equal(p.days[p.days.length - 1].date, '2027-02-10');
});

test('rest days, exam days and all-day events stay empty', () => {
  const p = plan();
  const by = Object.fromEntries(p.days.map((d) => [d.date, d]));
  for (const d of ['2026-12-24', '2026-12-25', '2027-01-01', '2027-01-10']) { assert.equal(by[d].kind, 'rest'); assert.equal(by[d].sessions.length, 0); }
  assert.equal(by['2027-01-27'].kind, 'exam');
  assert.deepEqual(by['2027-01-27'].exams, ['Analysis I']);
  assert.equal(by['2026-12-31'].kind, 'off');
});

test('never more than the daily cap, and never more than 8 hours', () => {
  for (const cap of ['4 h', '6 h', '8 h', '12 h']) {
    const p = plan({ E6: cap, C7: '56' });
    const max = Math.min(8, parseInt(cap, 10)) * 60;
    for (const d of p.days) assert.ok(mins(d) <= max, d.date + ' ' + mins(d) + ' > ' + max);
  }
});

test('blocked boxes, one-week boxes, events and lunch are never used', () => {
  const p = plan();
  const by = Object.fromEntries(p.days.map((d) => [d.date, d]));
  const overlaps = (d, from, to) => d.sessions.some((s) => E._.toMin(s.from) < to && E._.toMin(s.to) > from);
  assert.ok(!overlaps(by['2026-12-07'], 600, 720), 'Monday lecture 10-12 in the lecture period');
  assert.ok(!overlaps(by['2027-01-15'], 540, 780), 'one-week box Fri 9-13');
  assert.ok(!overlaps(by['2027-01-15'], 840, 1020));
  for (const d of p.days) assert.ok(!overlaps(d, 750, 810), d.date + ' lunch');
});

test('lectures stop blocking time after the lecture period', () => {
  const p = plan();
  const jan = p.days.find((d) => d.date === '2027-01-11');
  assert.ok(jan.sessions.some((s) => E._.toMin(s.from) < 720 && E._.toMin(s.to) > 600));
});

test('mock exams: targets with tolerance, at most 2 a day, never more than the stock, never in the lecture period', () => {
  const p = plan();
  assert.ok(p.totals.mocks.ana >= 5 && p.totals.mocks.ana <= 7);
  assert.ok(p.totals.mocks.phy >= 5 && p.totals.mocks.phy <= 7);
  assert.ok(p.totals.mocks.inf >= 3 && p.totals.mocks.inf <= 4);
  for (const d of p.days) {
    const m = d.sessions.filter((s) => s.kind === 'mock');
    assert.ok(m.length <= 2);
    if (m.length) assert.ok(d.phase === 'lernphase' || d.phase === 'session', d.date + ' ' + d.phase);
  }
  // Informatik has 4 past exams; with 3 already done only 1 is left
  const q = plan({ D5_inf: ['HS 2025', 'HS 2024', 'HS 2023'] });
  assert.equal(q.totals.mocks.inf, 1);
  assert.ok(q.warnings.some((w) => /Informatik: only 1 unused/.test(w)));
});

test('mocks of a subject come before its exam, and the day before an exam is light', () => {
  const p = plan();
  for (const d of p.days) {
    for (const s of d.sessions) if (s.kind === 'mock') {
      const ex = p.exams.find((e) => e.k === s.k);
      assert.ok(d.date < ex.date);
    }
    if (d.light === 'before-exam') assert.ok(mins(d) <= 180);
  }
  const before = p.days.find((d) => d.date === '2027-01-26');
  assert.ok(before.sessions.every((s) => s.k === 'ana' && s.kind !== 'mock'));
});

test('no subject is studied after its exam', () => {
  const p = plan();
  for (const d of p.days) for (const s of d.sessions) assert.ok(d.date < p.exams.find((e) => e.k === s.k).date);
});

test('time split follows the student\'s shares', () => {
  const p = plan({ D6: { ana: 60, phy: 20, inf: 20 } });
  const m = p.totals.minutes, all = m.ana + m.phy + m.inf;
  assert.ok(m.ana / all > 0.45, 'Analysis gets the largest share: ' + (m.ana / all).toFixed(2));
});

test('weaker chapters get more time than strong ones', () => {
  const a = {}; P.subjects[0].chapters.forEach((c, i) => { a['D1_ana_' + i] = 4; });
  a.D1_ana_6 = 1;
  const p = plan(a);
  const weak = p.coverage.find((c) => c.id === 'ana:6'), strong = p.coverage.find((c) => c.id === 'ana:9');
  assert.ok(weak.need > strong.need);
  assert.ok(weak.planned > strong.planned);
});

test('sleep: no study in the last hour before bed or the first half hour after waking', () => {
  const a = { F1_b: '21:00', F1_w: '09:00', F5_s: '07:00', F5_e: '22:00' };
  const p = plan(a);
  assert.deepEqual(E.check(p, P, Object.assign({}, base, a), cal), []);
  for (const d of p.days) for (const s of d.sessions) {
    if (E._.dow(d.date) < 5) { assert.ok(E._.toMin(s.to) <= 20 * 60, d.date + ' ' + s.to); assert.ok(E._.toMin(s.from) >= 9 * 60 + 30); }
  }
});

test('unknown exam dates: the plan aims for the start of the session', () => {
  const p = plan({ B5_ana: '', B5_phy: '', B5_inf: '' });
  assert.ok(p.exams.every((e) => e.date === '2027-01-25' && !e.known));
  assert.equal(p.days[p.days.length - 1].date, '2027-01-25');
});

test('random calendars never break a hard rule', () => {
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (let n = 0; n < 25; n++) {
    const c = { boxes: [], skips: {}, events: {}, rest: {} };
    for (let i = 0; i < 8; i++) { const s = Math.floor(rnd() * 28); c.boxes.push({ id: i + 1, d: Math.floor(rnd() * 7), s, e: s + 1 + Math.floor(rnd() * 6), lab: 'plain' }); }
    for (let i = 0; i < 6; i++) c.rest[E._.addDays('2026-12-01', Math.floor(rnd() * 60))] = true;
    for (let i = 0; i < 6; i++) { const s = Math.floor(rnd() * 28); c.events[E._.addDays('2026-12-01', Math.floor(rnd() * 60))] = [{ all: rnd() < 0.3, s, e: s + 4 }]; }
    const a = { E6: ['4 h', '6 h', '8 h'][n % 3], F5_b: ['25', '50', '90'][n % 3], H2: ['one per day', 'two per day', 'mixed'][n % 3] };
    const p = plan(a, c, E._.addDays('2026-11-27', n));
    assert.deepEqual(E.check(p, P, Object.assign({}, base, a), c), [], 'run ' + n);
  }
});

test('half-days: the afternoon starts when the student says, and a chosen subject is kept', () => {
  const c = JSON.parse(JSON.stringify(cal));
  c.half = { '2027-01-12:am': { subj: ['inf'] }, '2027-01-12:pm': { subj: ['phy'] } };
  const a = { F5_l: '12:00', F5_pm: '14:00' };
  const p = plan(a, c);
  assert.deepEqual(E.check(p, P, Object.assign({}, base, a), c), []);
  const d = p.days.find((x) => x.date === '2027-01-12');
  for (const s of d.sessions) {
    assert.ok(!(E._.toMin(s.from) < 840 && E._.toMin(s.to) > 720), 'no study 12:00-14:00: ' + s.from);
    if (s.kind !== 'mock') assert.equal(s.k, E._.toMin(s.from) < 840 ? 'inf' : 'phy');
  }
  assert.deepEqual(p.settings.half, { am: ['08:30', '12:00'], pm: ['14:00', '18:30'] });
});
