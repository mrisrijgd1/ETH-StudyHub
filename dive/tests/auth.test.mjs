import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadPrivateBank, saveRun, leaderboard } from '../auth.js';

function fakeAcc(files, opts = {}) {
  const inserted = [];
  return {
    inserted,
    sb: {
      storage: { from: () => ({
        download: async (p) => (p in files ? { data: { text: async () => JSON.stringify(files[p]) } } : { error: { message: 'not found' } }),
        createSignedUrls: async (ps) => ({ data: ps.map(p => ({ path: p, signedUrl: `https://signed/${p}` })) }),
      }) },
      from: () => ({ insert: async (row) => { if (opts.failInsert) return { error: { message: 'denied' } }; inserted.push(row); return { error: null }; } }),
      rpc: async (fn, args) => (opts.failRpc ? { error: { message: 'nope' } } : { data: [{ fn, ...args }], error: null }),
    },
  };
}

test('private bank: reads index + files and signs figure paths', async () => {
  const acc = fakeAcc({
    'index.json': { files: ['a.json', 'missing.json'] },
    'a.json': [{ id: 'x', figure: 'figures/x.png' }, { id: 'y', figure: null }, { id: 'z', figure: 'https://already/abs.png' }],
  });
  const warns = [];
  const qs = await loadPrivateBank(acc, w => warns.push(w));
  assert.equal(qs.length, 3);
  assert.equal(qs[0].figure, 'https://signed/figures/x.png');
  assert.equal(qs[1].figure, null);
  assert.equal(qs[2].figure, 'https://already/abs.png');
  assert.equal(warns.length, 1); // missing.json
});

test('private bank: a missing index throws (caller falls back to samples)', async () => {
  await assert.rejects(loadPrivateBank(fakeAcc({})));
});

test('saveRun sends only subject, timer, depth, answers and never throws', async () => {
  const acc = fakeAcc({});
  assert.equal(await saveRun(acc, { subject: 'physics', timer: 120, depth: 700, answers: 5, questions: [1], date: 'x' }), true);
  assert.deepEqual(acc.inserted, [{ subject: 'physics', timer: 120, depth: 700, answers: 5 }]);
  const orig = console.warn; console.warn = () => {};
  try { assert.equal(await saveRun(fakeAcc({}, { failInsert: true }), { subject: 'physics', timer: 120, depth: 1, answers: 1 }), false); }
  finally { console.warn = orig; }
});

test('leaderboard calls dive_leaderboard with subject and timer', async () => {
  const rows = await leaderboard(fakeAcc({}), 'analysis', 60);
  assert.deepEqual(rows, [{ fn: 'dive_leaderboard', p_subject: 'analysis', p_timer: 60 }]);
  await assert.rejects(leaderboard(fakeAcc({}, { failRpc: true }), 'analysis', 60));
});
