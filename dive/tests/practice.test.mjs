import { test } from 'node:test';
import assert from 'node:assert/strict';

test('practice mode (no timer) has unlimited lives', async () => {
  const { isPractice, wrongEndsDive } = await import('../game.js');
  assert.equal(isPractice(0), true);
  assert.equal(isPractice(null), true);
  assert.equal(wrongEndsDive(0), false);
  for (const s of [30, 60, 120, 180, 300]) { assert.equal(isPractice(s), false); assert.equal(wrongEndsDive(s), true); }
});
