import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ZONES } from '../config.js';
import { pickDifficulty, difficultyFallbackOrder, drawQuestion, seededRng, optionOrder, shuffle } from '../game.js';

const mk = (id, subject, difficulty, chapter = 1) => ({ id, subject, difficulty, chapter, options: [], correct: [] });

test('zone weights only use levels 1-5 and are positive', () => {
  for (const z of ZONES) {
    const ks = Object.keys(z.weights).map(Number);
    assert.ok(ks.length > 0);
    for (const k of ks) assert.ok(k >= 1 && k <= 5);
  }
  assert.deepEqual(Object.keys(ZONES[0].weights), ['1']);
  assert.deepEqual(Object.keys(ZONES[1].weights).sort(), ['1', '2']);
  assert.deepEqual(Object.keys(ZONES[2].weights).sort(), ['2', '3']);
  assert.deepEqual(Object.keys(ZONES[3].weights).sort(), ['3', '4']);
  assert.deepEqual(Object.keys(ZONES[4].weights).sort(), ['4', '5']);
});

test('pickDifficulty respects weights', () => {
  const rng = seededRng(1);
  const counts = { 1: 0, 2: 0 };
  for (let i = 0; i < 10000; i++) counts[pickDifficulty({ 1: 0.4, 2: 0.6 }, rng)]++;
  assert.ok(Math.abs(counts[2] / 10000 - 0.6) < 0.03, JSON.stringify(counts));
  assert.equal(pickDifficulty({ 3: 1 }, rng), 3);
  assert.equal(pickDifficulty({ 1: 0, 4: 1 }, () => 0), 4);
});

test('fallback order: nearest level, deeper first', () => {
  assert.deepEqual(difficultyFallbackOrder(3), [3, 4, 2, 5, 1]);
  assert.deepEqual(difficultyFallbackOrder(1), [1, 2, 3, 4, 5]);
  assert.deepEqual(difficultyFallbackOrder(5), [5, 4, 3, 2, 1]);
  assert.deepEqual(difficultyFallbackOrder(4), [4, 5, 3, 2, 1]);
});

test('sunlight draws difficulty 1 when available', () => {
  const pool = [mk('a1', 'analysis', 1), mk('a2', 'analysis', 2), mk('a5', 'analysis', 5)];
  const rng = seededRng(7);
  for (let i = 0; i < 50; i++) assert.equal(drawQuestion(pool, { depth: 0, rng }).id, 'a1');
});

test('empty bucket falls back to the nearest level, deeper first', () => {
  // sunlight wants 1; only 2 and 3 exist -> 2
  const pool = [mk('x2', 'analysis', 2), mk('x3', 'analysis', 3)];
  assert.equal(drawQuestion(pool, { depth: 0, rng: seededRng(3) }).id, 'x2');
  // abyssal (3 or 4), only 2 and 5 exist: target 3 -> 4? no -> 2?  order [3,4,2,5,1] -> 2
  //                                     target 4 -> [4,5,...] -> 5
  const pool2 = [mk('y2', 'analysis', 2), mk('y5', 'analysis', 5)];
  assert.equal(drawQuestion(pool2, { depth: 4000, rng: () => 0.1 }).id, 'y2'); // rng 0.1 -> target 3
  assert.equal(drawQuestion(pool2, { depth: 4000, rng: () => 0.9 }).id, 'y5'); // rng 0.9 -> target 4
});

test('no repeats within a dive; null when exhausted', () => {
  const pool = [mk('a', 'analysis', 1), mk('b', 'analysis', 1), mk('c', 'analysis', 3)];
  const used = new Set();
  const rng = seededRng(11);
  for (let i = 0; i < 3; i++) {
    const q = drawQuestion(pool, { depth: 0, used, rng });
    assert.ok(!used.has(q.id));
    used.add(q.id);
  }
  assert.equal(drawQuestion(pool, { depth: 0, used, rng }), null);
});

test('prefers ids not seen in recent dives, but uses them if nothing else', () => {
  const pool = [mk('old', 'analysis', 1), mk('new', 'analysis', 1)];
  const rng = seededRng(5);
  for (let i = 0; i < 30; i++) {
    assert.equal(drawQuestion(pool, { depth: 0, recent: new Set(['old']), rng }).id, 'new');
  }
  assert.equal(drawQuestion([mk('old', 'analysis', 1)], { depth: 0, recent: new Set(['old']), rng }).id, 'old');
});

test('Gemischt picks subject proportionally to available questions', () => {
  const pool = [];
  for (let i = 0; i < 30; i++) pool.push(mk('a' + i, 'analysis', 1));
  for (let i = 0; i < 10; i++) pool.push(mk('p' + i, 'physics', 1));
  const rng = seededRng(99);
  let phys = 0;
  const N = 4000;
  for (let i = 0; i < N; i++) if (drawQuestion(pool, { depth: 0, rng }).subject === 'physics') phys++;
  assert.ok(Math.abs(phys / N - 0.25) < 0.03, `physics share ${phys / N}`);
});

test('options keep order with fixedOrder, else are a permutation', () => {
  const q = { fixedOrder: true, options: [{ key: 'a' }, { key: 'b' }, { key: 'c' }] };
  assert.deepEqual(optionOrder(q, seededRng(1)).map(o => o.key), ['a', 'b', 'c']);
  const q2 = { ...q, fixedOrder: false };
  const keys = optionOrder(q2, seededRng(2)).map(o => o.key).sort();
  assert.deepEqual(keys, ['a', 'b', 'c']);
  assert.deepEqual(shuffle([1, 2, 3, 4], seededRng(3)).sort(), [1, 2, 3, 4]);
});
