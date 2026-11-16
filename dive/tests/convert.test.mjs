import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { normaliseAll } from '../bank.js';

const script = fileURLToPath(new URL('../tools/convert.py', import.meta.url));
const hasPython = spawnSync('python3', ['--version']).status === 0;

test('convert.py: merges bank + enrichment, keeps only safe records', { skip: !hasPython }, () => {
  const dir = mkdtempSync(join(tmpdir(), 'dive-convert-'));
  const bank = [
    { id: 'x1', subject: 'analysis', kind: 'quiz', source: 'Some quiz (official, with solutions)', language: 'de',
      options: { a: 'raw a', b: 'raw b', c: 'raw c' }, answer: ['a', 'c'], answer_status: 'official solution', multiple_correct: true },
    { id: 'x2', subject: 'physics', kind: 'old-exam', source: 'Exam', options: { A: '1', B: '2' }, answer: null },
    { id: 'x3', subject: 'physics', kind: 'old-exam', source: 'Exam', options: { A: '1', B: '2' }, answer: 'A', answer_status: 'official' },
    { id: 'x4', subject: 'physics', kind: 'old-exam', source: 'Exam', options: { A: '1', B: '2' }, answer: null, needs_figure: true },
  ];
  const enr = [
    { id: 'x1', answer: ['a', 'c'], solvable: true, confidence: 'high', stem_tex: 'Stem $x$', options_tex: { a: 'A', b: 'B', c: 'C' },
      explanation: 'Weil (a) gilt.', option_notes: { a: 'ja', b: 'nein', c: 'ja' }, chapter: 6, refs: ['Satz 1'], difficulty: 4, needs_figure: false },
    { id: 'x2', answer: ['B'], solvable: true, confidence: 'high', stem_tex: 'S', options_tex: { A: '1', B: '2' },
      explanation: 'E', option_notes: { A: 'n', B: 'j' }, chapter: 'P9', refs: [], difficulty: 2, needs_figure: false },
    { id: 'x3', answer: ['B'], solvable: true, confidence: 'high', stem_tex: 'S', options_tex: { A: '1', B: '2' },
      explanation: 'E', option_notes: {}, chapter: 3, refs: [], difficulty: 2 },
    { id: 'x4', answer: ['A'], solvable: true, confidence: 'high', stem_tex: 'S', options_tex: { A: '1', B: '2' },
      explanation: 'E', option_notes: {}, chapter: 3, refs: [], difficulty: 2, needs_figure: true },
  ];
  writeFileSync(join(dir, 'bank.json'), JSON.stringify(bank));
  writeFileSync(join(dir, 'enr.json'), JSON.stringify(enr));
  const out = join(dir, 'out', 'q.json');
  const r = spawnSync('python3', ['-I', script, '--bank', join(dir, 'bank.json'), '--enriched', join(dir, 'enr.json'), '--out', out], { encoding: 'utf8' });
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stderr, /x3: enrichment answer .* disagrees/);
  assert.match(r.stderr, /x4: needs a figure/);
  const qs = JSON.parse(readFileSync(out, 'utf8'));
  assert.deepEqual(qs.map(q => q.id), ['x1', 'x2']);
  const [a, b] = qs;
  assert.equal(a.type, 'multi');
  assert.equal(a.answerStatus, 'official');
  assert.equal(a.source.label, 'Some quiz');
  assert.equal(a.fixedOrder, true, 'explanation mentions (a)');
  assert.deepEqual(a.options.map(o => o.text), ['A', 'B', 'C'], 'uses options_tex, not raw text');
  assert.equal(b.type, 'single');
  assert.deepEqual(b.correct, ['b']);
  assert.equal(b.chapter, 'P9');
  assert.equal(b.answerStatus, 'verified');
  assert.equal(b.fixedOrder, false);
  assert.equal(normaliseAll(qs, w => assert.fail(w)).length, 2);
  assert.deepEqual(JSON.parse(readFileSync(join(dir, 'out', 'index.json'), 'utf8')).files, ['q.json']);
});
