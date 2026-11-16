import { test } from 'node:test';
import assert from 'node:assert/strict';
import { STORAGE_KEY } from '../config.js';
import { defaultState, loadState, saveState, recordDive, recentIdSet, setPref } from '../storage.js';

function memBackend(initial = {}) {
  const data = { ...initial };
  return { data, getItem: k => (k in data ? data[k] : null), setItem: (k, v) => { data[k] = String(v); } };
}
const dive = (o = {}) => ({ date: '2026-11-16T10:00:00Z', subject: 'analysis', chapters: null, filtered: false,
  timer: 120, depth: 1500, answers: 7, endedBy: 'wrong', endQuestion: 'q7',
  questions: [{ id: 'q1', chosen: ['a'], correct: true }], ...o });

test('uses key studyhub.dive.v1', () => assert.equal(STORAGE_KEY, 'studyhub.dive.v1'));

test('missing, corrupt or throwing storage gives defaults', () => {
  assert.deepEqual(loadState(memBackend()), defaultState());
  assert.deepEqual(loadState(memBackend({ [STORAGE_KEY]: '{not json' })), defaultState());
  assert.deepEqual(loadState(memBackend({ [STORAGE_KEY]: '{"v":2}' })), defaultState());
  const throwing = { getItem() { throw new Error('denied'); }, setItem() { throw new Error('quota'); } };
  assert.deepEqual(loadState(throwing), defaultState());
  assert.equal(saveState(defaultState(), throwing), false);
  assert.deepEqual(loadState(null), defaultState());
});

test('round trip and muted by default', () => {
  const be = memBackend();
  const s0 = defaultState();
  assert.equal(s0.prefs.muted, true);
  const { state } = recordDive(s0, dive());
  assert.ok(saveState(setPref(state, 'lang', 'en'), be));
  const back = loadState(be);
  assert.equal(back.dives.length, 1);
  assert.equal(back.prefs.lang, 'en');
  assert.equal(back.prefs.muted, true);
});

test('history keeps the last 100 dives, newest first', () => {
  let s = defaultState();
  for (let i = 0; i < 120; i++) s = recordDive(s, dive({ depth: i * 100, date: `d${i}` })).state;
  assert.equal(s.dives.length, 100);
  assert.equal(s.dives[0].date, 'd119');
  assert.equal(s.dives[99].date, 'd20');
});

test('recent ids from the last 5 dives', () => {
  let s = defaultState();
  for (let i = 0; i < 7; i++) s = recordDive(s, dive({ questions: [{ id: 'q' + i }] })).state;
  assert.equal(s.recent.length, 5);
  assert.deepEqual([...recentIdSet(s)].sort(), ['q2', 'q3', 'q4', 'q5', 'q6']);
});

test('bests: per subject x timer, only timed unfiltered dives, strictly deeper wins', () => {
  let s = defaultState();
  let r = recordDive(s, dive({ depth: 1500 }));
  assert.ok(r.newBest);
  s = r.state;
  assert.equal(s.bests['analysis|120'].depth, 1500);
  r = recordDive(s, dive({ depth: 1500 }));
  assert.ok(!r.newBest, 'tie is not a new best');
  r = recordDive(r.state, dive({ depth: 4000, filtered: true, chapters: ['analysis:6'] }));
  assert.ok(!r.newBest, 'filtered never counts');
  r = recordDive(r.state, dive({ depth: 9000, timer: 0 }));
  assert.ok(!r.newBest, 'practice never counts');
  assert.equal(r.state.bests['analysis|0'], undefined);
  r = recordDive(r.state, dive({ depth: 2000, timer: 60 }));
  assert.ok(r.newBest);
  r = recordDive(r.state, dive({ depth: 600, subject: 'mixed' }));
  assert.ok(r.newBest);
  assert.deepEqual(Object.keys(r.state.bests).sort(), ['analysis|120', 'analysis|60', 'mixed|120']);
  assert.equal(r.state.dives.length, 6, 'all dives are in history, filtered and practice too');
});
