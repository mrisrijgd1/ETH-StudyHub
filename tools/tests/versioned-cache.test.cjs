const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const source = fs.readFileSync(path.join(__dirname, '../../sw.js'), 'utf8');
const origin = 'https://example.test/StudyHub/';
function worker(entries, network) {
  const data = new Map(Object.entries(entries).map(([key, value]) => [origin + key, new Response(value)]));
  const cache = {
    async match(request, options = {}) {
      const address = typeof request === 'string' ? request : request.url;
      if (!options.ignoreSearch) return data.get(address)?.clone();
      const target = new URL(address); target.search = '';
      const found = [...data.entries()].find(([key]) => { const u = new URL(key); u.search = ''; return u.href === target.href; });
      return found?.[1].clone();
    },
    async put(request, response) { data.set(request.url, response); }
  };
  const context = { URL, Response, Request, console, location: new URL(origin), self: { addEventListener() {} }, caches: { async open() { return cache; } }, fetch: network };
  vm.runInNewContext(source, context);
  return { load: file => context.fileSWR(new Request(origin + file), 'sh-files'), data };
}
test('a new version fetches new bytes rather than returning an older cached version', async () => {
  const w = worker({ 'assets/studyhub.js?v=old': 'OLD' }, async () => new Response('NEW'));
  assert.equal(await (await w.load('assets/studyhub.js?v=new')).text(), 'NEW');
  assert.equal(await w.data.get(origin + 'assets/studyhub.js?v=new').clone().text(), 'NEW');
});
test('an exact version remains immediately available from cache', async () => {
  const w = worker({ 'assets/studyhub.css?v=one': 'EXACT' }, () => new Promise(() => {}));
  assert.equal(await (await w.load('assets/studyhub.css?v=one')).text(), 'EXACT');
});
test('an older asset remains available offline when the new version was not cached', async () => {
  const w = worker({ 'assets/studyhub.js?v=old': 'OFFLINE COPY' }, async () => { throw Error('offline'); });
  assert.equal(await (await w.load('assets/studyhub.js?v=new')).text(), 'OFFLINE COPY');
});
test('a real network error response is not disguised as a successful old version', async () => {
  const w = worker({ 'assets/studyhub.js?v=old': 'OLD' }, async () => new Response('missing', { status: 404 }));
  const response = await w.load('assets/studyhub.js?v=new');
  assert.equal(response.status, 404);
  assert.equal(await response.text(), 'missing');
});
test('uncached offline files retain the 504 fallback', async () => {
  const w = worker({}, async () => { throw Error('offline'); });
  assert.equal((await w.load('assets/unknown.css?v=new')).status, 504);
});
test('unversioned query variants retain their existing cache behaviour', async () => {
  const w = worker({ 'assets/font.css?variant=old': 'CACHED' }, () => new Promise(() => {}));
  assert.equal(await (await w.load('assets/font.css?variant=new')).text(), 'CACHED');
});
