import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ZONES, MAX_DEPTH } from '../config.js';
import { zoneAt, zoneIndexAt, depthAfterCorrect, depthAfterAnswers, answersForPerfect, isPerfect } from '../game.js';

test('zones are contiguous from 0 to the floor', () => {
  assert.equal(ZONES[0].from, 0);
  for (let i = 1; i < ZONES.length; i++) assert.equal(ZONES[i].from, ZONES[i - 1].to);
  assert.equal(ZONES[ZONES.length - 1].to, MAX_DEPTH);
  for (const z of ZONES) assert.equal((z.to - z.from) % z.step, 0, `${z.id} step divides zone`);
});

test('zone lookup at boundaries', () => {
  assert.equal(zoneAt(0).id, 'sunlight');
  assert.equal(zoneAt(199).id, 'sunlight');
  assert.equal(zoneAt(200).id, 'twilight');
  assert.equal(zoneAt(999).id, 'twilight');
  assert.equal(zoneAt(1000).id, 'midnight');
  assert.equal(zoneAt(4000).id, 'abyssal');
  assert.equal(zoneAt(6000).id, 'hadal');
  assert.equal(zoneAt(10999).id, 'hadal');
  assert.equal(zoneAt(11000), null);
  assert.equal(zoneIndexAt(11000), -1);
});

test('metres per correct answer follow the zone table', () => {
  assert.equal(depthAfterCorrect(0), 100);
  assert.equal(depthAfterCorrect(100), 200);
  assert.equal(depthAfterCorrect(200), 400);
  assert.equal(depthAfterCorrect(800), 1000);
  assert.equal(depthAfterCorrect(1000), 1500);
  assert.equal(depthAfterCorrect(3500), 4000);
  assert.equal(depthAfterCorrect(4000), 4500);
  assert.equal(depthAfterCorrect(5500), 6000);
  assert.equal(depthAfterCorrect(6000), 6625);
  assert.equal(depthAfterCorrect(10375), 11000);
  assert.equal(depthAfterCorrect(11000), 11000);
});

test('answers needed per zone and for a perfect dive', () => {
  assert.equal(depthAfterAnswers(2), 200);
  assert.equal(depthAfterAnswers(6), 1000);
  assert.equal(depthAfterAnswers(12), 4000);
  assert.equal(depthAfterAnswers(16), 6000);
  assert.equal(depthAfterAnswers(24), 11000);
  assert.equal(answersForPerfect(), 24);
  assert.ok(isPerfect(11000));
  assert.ok(!isPerfect(10375));
});
