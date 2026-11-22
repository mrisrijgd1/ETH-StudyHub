/* StudyHub service worker: makes visited pages (and, on request, all lessons) work offline.
   - Pages (HTML): network first, saved copy when offline, offline.html as last resort.
   - Versioned files (?v=): the saved copy at once. Other files: network first, saved copy offline.
   - MathJax (jsDelivr) and Google Fonts: saved on first use.
   - Never saved: PDFs and the docs/ folder (too big), Supabase (accounts), analytics. */
const VERSION = 'sw-2026-11-22-versioned-assets';
const PAGES = 'sh-pages', FILES = 'sh-files', EXT = 'sh-ext';
const CORE = ['./', 'index.html', 'offline.html', 'manifest.webmanifest', 'assets/icons/icon-192.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(PAGES).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => ![PAGES, FILES, EXT].includes(k)).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

const skip = u => /\.pdf($|\?)/i.test(u.pathname) || /\/docs\//.test(u.pathname) || /\/pdf\//.test(u.pathname) || /\/assets\/pdf[._]/.test(u.pathname);
const isPage = (req, u) => req.mode === 'navigate' || /\.html$|\/$/.test(u.pathname);
const extOk = u => /(^|\.)cdn\.jsdelivr\.net$/.test(u.hostname) && /mathjax/.test(u.pathname) || /fonts\.(googleapis|gstatic)\.com$/.test(u.hostname);

async function netFirst(req, name, page) {
  const c = await caches.open(name);
  try {
    const res = await fetch(req);
    if (res && res.ok) c.put(req, res.clone());
    return res;
  } catch (e) {
    const alt = new URL(req.url); alt.search = ''; if (alt.pathname.endsWith('/')) alt.pathname += 'index.html';
    const hit = (await c.match(req, { ignoreSearch: true })) || (await caches.match(req, { ignoreSearch: true })) || (await caches.match(alt.href));
    if (hit) return hit;
    return page ? (await caches.match('offline.html', { ignoreSearch: true })) : new Response('', { status: 504 });
  }
}
async function fileSWR(req, name) {
  const c = await caches.open(name);
  const versioned = new URL(req.url).searchParams.has('v');
  // A new version must not silently receive an older cached script or stylesheet.
  const hit = await c.match(req) || (!versioned && await c.match(req, { ignoreSearch: true }));
  const net = fetch(req).then(res => { if (res && (res.ok || res.type === 'opaque')) c.put(req, res.clone()); return res; }).catch(() => null);
  const response = hit || (await net);
  if (response) return response;
  // A previous version is still useful when the device is genuinely offline.
  return (await c.match(req, { ignoreSearch: true })) || new Response('', { status: 504 });
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const u = new URL(req.url);
  if (u.origin === location.origin) {
    if (skip(u)) return;
    // versioned files (?v=...) never change: saved copy first; everything else: network first, so new pages never meet old scripts
    e.respondWith(isPage(req, u) ? netFirst(req, PAGES, true) : /[?&]v=/.test(u.search) ? fileSWR(req, FILES) : netFirst(req, FILES, false));
  } else if (extOk(u)) {
    e.respondWith(fileSWR(req, EXT));
  }
});

/* "Save for offline" on My StudyHub: page posts {type:'save', urls:[...]}, we report progress. */
self.addEventListener('message', e => {
  const d = e.data || {};
  if (d.type !== 'save' || !Array.isArray(d.urls)) return;
  const port = e.ports && e.ports[0];
  e.waitUntil((async () => {
    const pc = await caches.open(PAGES), fc = await caches.open(FILES), xc = await caches.open(EXT);
    let done = 0, failed = 0;
    for (const url of d.urls) {
      try {
        const u = new URL(url, self.registration.scope);
        const ext = u.origin !== location.origin;
        const res = await fetch(u.href, ext ? { mode: 'no-cors' } : {});
        if (!(res.ok || res.type === 'opaque')) throw 0;
        await (ext ? xc : /\.html$|\/$/.test(u.pathname) ? pc : fc).put(u.href, res);
      } catch (err) { failed++; }
      done++;
      if (port && (done % 10 === 0 || done === d.urls.length)) port.postMessage({ done, failed, total: d.urls.length });
    }
  })());
});
