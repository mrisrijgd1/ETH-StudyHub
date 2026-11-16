import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { normaliseQuestion, normaliseAll, loadBank, bankMode } from '../bank.js';
import { checkAnswer } from '../game.js';

const good = { id: 't1', subject: 'analysis', lang: 'de', source: { kind: 'studyhub', label: 'x' }, chapter: '6',
  type: 'multi', difficulty: 3, stem: 'Frage $x$', options: [{ key: 'a', text: '1' }, { key: 'b', text: '2' }],
  correct: ['a'], explanation: 'e', optionNotes: { a: 'n', z: 'ignored' }, refs: [], figure: null, answerStatus: 'official' };

test('normalises a valid question', () => {
  const { q, error } = normaliseQuestion(good);
  assert.equal(error, undefined);
  assert.equal(q.chapter, 6);
  assert.deepEqual(Object.keys(q.optionNotes), ['a']);
  assert.equal(q.fixedOrder, false);
});

test('rejects invalid questions', () => {
  const bad = [
    { ...good, id: '' }, { ...good, subject: 'chemie' }, { ...good, difficulty: 6 },
    { ...good, correct: ['c'] }, { ...good, type: 'single', correct: ['a', 'b'] },
    { ...good, options: [{ key: 'a', text: '' }] }, { ...good, chapter: null }, { ...good, stem: ' ' },
  ];
  for (const b of bad) assert.ok(normaliseQuestion(b).error, JSON.stringify(b).slice(0, 60));
});

test('figure URLs: only relative or https', () => {
  assert.equal(normaliseQuestion({ ...good, figure: 'javascript:alert(1)' }).q.figure, null);
  assert.equal(normaliseQuestion({ ...good, figure: 'figures/a.png' }).q.figure, 'figures/a.png');
  assert.equal(normaliseQuestion({ ...good, figure: 'https://x.org/a.png' }).q.figure, 'https://x.org/a.png');
});

test('duplicate ids: first wins', () => {
  const warns = [];
  assert.equal(normaliseAll([good, { ...good, stem: 'other' }], w => warns.push(w)).length, 1);
  assert.equal(warns.length, 1);
});

test('?bank=dev switches folder', async () => {
  assert.equal(bankMode('?bank=dev'), 'dev');
  assert.equal(bankMode(''), 'public');
  const asked = [];
  const files = {
    'https://x/dive/questions/index.json': { files: ['a.json'] },
    'https://x/dive/questions/a.json': [good],
    'https://x/dive/questions/dev/index.json': ['b.json', 'missing.json'],
    'https://x/dive/questions/dev/b.json': { questions: [{ ...good, id: 'dev1' }] },
  };
  const fetch = async (u) => { asked.push(u); return files[u] ? { ok: true, json: async () => files[u] } : { ok: false, status: 404 }; };
  const pub = await loadBank({ fetch, base: 'https://x/dive/', search: '' });
  assert.deepEqual(pub.map(q => q.id), ['t1']);
  const warns = [];
  const dev = await loadBank({ fetch, base: 'https://x/dive/', search: '?bank=dev', warn: w => warns.push(w) });
  assert.deepEqual(dev.map(q => q.id), ['dev1']);
  assert.equal(warns.length, 1);
});

test('public sample bank: 12 valid questions, 6 per subject, difficulties 1-5, some multi', () => {
  const idx = JSON.parse(readFileSync(new URL('../questions/index.json', import.meta.url)));
  assert.ok((idx.files || idx).includes('sample.json'));
  const raw = JSON.parse(readFileSync(new URL('../questions/sample.json', import.meta.url)));
  const qs = normaliseAll(raw, (w) => assert.fail(w));
  assert.equal(qs.length, 12);
  for (const s of ['analysis', 'physics']) {
    const sub = qs.filter(q => q.subject === s);
    assert.equal(sub.length, 6);
    assert.deepEqual([...new Set(sub.map(q => q.difficulty))].sort(), [1, 2, 3, 4, 5]);
  }
  assert.ok(qs.some(q => q.type === 'multi'));
  for (const q of qs) {
    assert.ok(q.explanation.length > 20, q.id);
    for (const o of q.options) assert.ok(q.optionNotes[o.key], `${q.id} note for ${o.key}`);
    assert.ok(checkAnswer(q, q.correct));
    assert.equal(q.lang, 'de');
    // explanations must not refer to option letters, because options are shuffled
    if (!q.fixedOrder) assert.ok(!/(?<![A-Za-z0-9_\\])\([a-f]\)/.test(q.explanation), `${q.id} letter ref`);
  }
});

test('dev bank (if built) is valid', { skip: !existsSync(new URL('../questions/dev/index.json', import.meta.url)) }, () => {
  const idx = JSON.parse(readFileSync(new URL('../questions/dev/index.json', import.meta.url)));
  for (const f of (idx.files || idx)) {
    const raw = JSON.parse(readFileSync(new URL('../questions/dev/' + f, import.meta.url)));
    const qs = normaliseAll(raw, (w) => assert.fail(w));
    assert.equal(qs.length, raw.length);
  }
});
