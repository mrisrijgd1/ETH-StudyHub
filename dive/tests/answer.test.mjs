import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkAnswer } from '../game.js';

const single = { type: 'single', correct: ['b'] };
const multi = { type: 'multi', correct: ['a', 'c'] };
const none = { type: 'multi', correct: [] };

test('single choice', () => {
  assert.ok(checkAnswer(single, ['b']));
  assert.ok(!checkAnswer(single, ['a']));
  assert.ok(!checkAnswer(single, []));
  assert.ok(!checkAnswer(single, ['a', 'b']));
});

test('multi: exact set match only', () => {
  assert.ok(checkAnswer(multi, ['a', 'c']));
  assert.ok(checkAnswer(multi, ['c', 'a']));
  assert.ok(checkAnswer(multi, ['c', 'a', 'c']), 'duplicates ignored');
  assert.ok(!checkAnswer(multi, ['a']), 'subset is wrong');
  assert.ok(!checkAnswer(multi, ['a', 'b', 'c']), 'superset is wrong');
  assert.ok(!checkAnswer(multi, []));
});

test('multi: empty set allowed', () => {
  assert.ok(checkAnswer(none, []));
  assert.ok(checkAnswer(none, undefined));
  assert.ok(!checkAnswer(none, ['a']));
});
