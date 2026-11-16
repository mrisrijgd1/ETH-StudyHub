import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { availableChapters, filterQuestions, isFiltered, subjectsFor, chapterKey } from '../game.js';

const qs = [
  { id: '1', subject: 'analysis', chapter: 6 },
  { id: '2', subject: 'analysis', chapter: 2 },
  { id: '3', subject: 'analysis', chapter: 6 },
  { id: '4', subject: 'physics', chapter: 6 },
  { id: '5', subject: 'physics', chapter: 'P9' },
  { id: '6', subject: 'physics', chapter: 3 },
];

test('available chapters per subject, sorted, P-chapters last', () => {
  assert.deepEqual(availableChapters(qs, ['analysis']).map(c => c.key), ['analysis:2', 'analysis:6']);
  assert.deepEqual(availableChapters(qs, ['physics']).map(c => c.key), ['physics:3', 'physics:6', 'physics:P9']);
  const mixed = availableChapters(qs, subjectsFor('mixed'));
  assert.deepEqual(mixed.map(c => c.key), ['analysis:2', 'analysis:6', 'physics:3', 'physics:6', 'physics:P9']);
  assert.equal(mixed.find(c => c.key === 'analysis:6').count, 2);
});

test('Analysis 6 and Physik 6 are different chapters', () => {
  const got = filterQuestions(qs, { subjects: ['analysis', 'physics'], chapters: [chapterKey('analysis', 6)] });
  assert.deepEqual(got.map(q => q.id), ['1', '3']);
});

test('filter by subject and chapter', () => {
  assert.equal(filterQuestions(qs, { subjects: ['analysis'] }).length, 3);
  assert.equal(filterQuestions(qs, { subjects: ['physics'], chapters: null }).length, 3);
  assert.deepEqual(filterQuestions(qs, { subjects: ['physics'], chapters: ['physics:P9', 'analysis:2'] }).map(q => q.id), ['5']);
  assert.equal(filterQuestions(qs, { subjects: ['analysis'], chapters: [] }).length, 0);
});

test('isFiltered', () => {
  const avail = availableChapters(qs, ['analysis']);
  assert.equal(isFiltered(null, avail), false);
  assert.equal(isFiltered(['analysis:2', 'analysis:6'], avail), false);
  assert.equal(isFiltered(['analysis:6', 'analysis:2', 'physics:3'], avail), false);
  assert.equal(isFiltered(['analysis:6'], avail), true);
  assert.equal(isFiltered([], avail), true);
});

test('chapters.json has Analysis 1-9, Physik 1-8 and P9-P13', () => {
  const ch = JSON.parse(readFileSync(new URL('../chapters.json', import.meta.url)));
  assert.deepEqual(ch.analysis.map(c => c.id), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  assert.deepEqual(ch.physics.map(c => c.id), [1, 2, 3, 4, 5, 6, 7, 8, 'P9', 'P10', 'P11', 'P12', 'P13']);
  for (const c of [...ch.analysis, ...ch.physics]) assert.ok(c.de && c.en, `title for ${c.id}`);
});
