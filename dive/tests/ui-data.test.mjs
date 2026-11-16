import { test } from 'node:test';
import assert from 'node:assert/strict';
import { STRINGS } from '../i18n.js';
import { depthToWorldY, pixelScale } from '../sea.js';
import { depthAfterAnswers } from '../game.js';
import { STEP_PX, ZONES } from '../config.js';
import { measureText } from '../pixelfont.js';

test('German and English UI strings have the same keys', () => {
  assert.deepEqual(Object.keys(STRINGS.en).sort(), Object.keys(STRINGS.de).sort());
});

test('every correct answer moves the diver the same distance on screen', () => {
  for (let n = 0; n < 24; n++) {
    assert.equal(depthToWorldY(depthAfterAnswers(n + 1)) - depthToWorldY(depthAfterAnswers(n)), STEP_PX);
  }
});

test('pixel scale gives a ~320x180 logical canvas on desktop, taller on phones', () => {
  assert.equal(pixelScale(1920, 1080), 6);
  assert.equal(Math.ceil(1920 / 6), 320);
  assert.equal(pixelScale(1280, 720), 4);
  assert.equal(pixelScale(390, 844), 2);
});

test('zone names and captions exist in both languages', () => {
  for (const z of ZONES) {
    assert.ok(z.name.de && z.name.en);
    if (z.caption) assert.ok(z.caption.de && z.caption.en);
  }
  assert.equal(measureText('ABC'), 17);
});
