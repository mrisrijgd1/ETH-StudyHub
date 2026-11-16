import { test } from 'node:test';
import assert from 'node:assert/strict';
import { reportUrl, formatTimer, qualifiesForBest, bestKey } from '../game.js';
import { REPORT_REPO, TIMERS, DEFAULT_TIMER } from '../config.js';

test('report link: new issue in the StudyHub repo with the id in the title', () => {
  const u = new URL(reportUrl(REPORT_REPO, 'sample-ana-3'));
  assert.equal(u.origin + u.pathname, 'https://github.com/mrisrijgd1/ETH-StudyHub/issues/new');
  assert.ok(u.searchParams.get('title').includes('sample-ana-3'));
});

test('timers', () => {
  assert.deepEqual(TIMERS, [30, 60, 120, 180, 300, 0]);
  assert.equal(DEFAULT_TIMER, 120);
  assert.equal(formatTimer(30), '0:30');
  assert.equal(formatTimer(300), '5:00');
  assert.equal(formatTimer(0), null);
  assert.ok(qualifiesForBest({ timer: 30, filtered: false }));
  assert.ok(!qualifiesForBest({ timer: 0, filtered: false }));
  assert.ok(!qualifiesForBest({ timer: 60, filtered: true }));
  assert.equal(bestKey('mixed', 60), 'mixed|60');
});
