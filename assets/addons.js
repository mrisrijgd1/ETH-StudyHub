/* StudyHub personal add-ons: features that only their owner sees, made by the student's own AI through the
   StudyHub connector (tool "addons") and saved in the account (my_items key "addons", versioned: undo/history).

   Safety:
   - Ready-made types (note, link, kindle) are drawn by this file from checked fields. They never run code.
   - Own code ("code", stored in the account) and own hosting ("hosted", a link to the student's own https page)
     run ONLY inside a sandboxed frame without allow-same-origin. That frame has its own empty origin: it cannot
     read the login, cookies, localStorage or anything else on study-hub.ch, and it cannot change the page.
     It can only ask for the data its add-on declared in "reads" (page text, own notes, own progress,
     own flashcards), through postMessage, and draw inside its own box.
   - Add-ons load only for the signed-in owner, never for anybody else.

   Message API for own add-ons (inside the frame):
     parent.postMessage({ studyhub: 'get', what: 'page' | 'notes' | 'progress' | 'flashcards', rid: 1 }, '*')
       -> reply { studyhub: 'data', rid: 1, what, value } (or { studyhub: 'error', rid, message })
     parent.postMessage({ studyhub: 'height', value: 420 }, '*')     // grow or shrink the box (80-2000 px)
     On load the frame gets { studyhub: 'hello', page, title, lang, theme, course, reads }. */
(function () {
  if (window.SHAddons) return;
  var TYPES = ['note', 'link', 'kindle', 'code', 'hosted'];
  var READS = ['page', 'notes', 'progress', 'flashcards'];
  var MAX_CODE = 200000;
  var DE = document.documentElement.lang === 'de';
  function L(en, de) { return DE ? de : en; }
  var PAGE = (location.pathname.split('/').pop() || 'index.html').replace(/\.html.*$/, '') || 'index';
  if (PAGE === 'account' || PAGE === 'my') PAGE = 'my';
  var ROOT = /\/(de|chemie)\//.test(location.pathname) ? '../' : '';

  function str(v, max) { return typeof v === 'string' ? v.slice(0, max) : ''; }
  function httpsUrl(v) {
    if (typeof v !== 'string' || v.length > 2000) return '';
    try { var u = new URL(v.replace(/\{[a-z]+\}/g, 'x')); return u.protocol === 'https:' ? v : ''; } catch (e) { return ''; }
  }
  /* One add-on, checked. Returns null if it is not valid. Same rules as cleanAddon() in the connector. */
  function cleanOne(a) {
    if (!a || typeof a !== 'object' || TYPES.indexOf(a.type) < 0) return null;
    var o = { id: str(a.id, 20).replace(/[^\w-]/g, '') || Math.random().toString(36).slice(2, 10), type: a.type,
      name: str(a.name, 60) || a.type, on: a.on !== false };
    o.pages = (Array.isArray(a.pages) ? a.pages : ['*']).map(function (p) { return str(p, 60).replace(/[^\w*-]/g, ''); }).filter(Boolean).slice(0, 50);
    if (!o.pages.length) o.pages = ['*'];
    o.place = a.place === 'bottom' ? 'bottom' : 'top';
    if (a.type === 'note') { o.text = str(a.text, 5000); if (!o.text) return null; }
    if (a.type === 'link') { o.url = httpsUrl(a.url); if (!o.url) return null; }
    if (a.type === 'code') { o.html = str(a.html, MAX_CODE); if (!o.html) return null; }
    if (a.type === 'hosted') { o.url = httpsUrl(a.url); if (!o.url) return null; }
    if (a.type === 'code' || a.type === 'hosted') {
      o.reads = (Array.isArray(a.reads) ? a.reads : []).filter(function (r, i, all) { return READS.indexOf(r) >= 0 && all.indexOf(r) === i; });
      var h = Number(a.height); o.height = h >= 80 && h <= 2000 ? Math.round(h) : 320;
    }
    return o;
  }
  function clean(list) {
    var items = Array.isArray(list) ? list : (list && Array.isArray(list.items) ? list.items : []);
    return items.map(cleanOne).filter(Boolean).slice(0, 30);
  }
  function matches(a) {
    return a.pages.some(function (p) {
      if (p === '*') return PAGE !== 'my' && PAGE !== 'index';
      if (p.slice(-1) === '*') return PAGE.indexOf(p.slice(0, -1)) === 0;
      return p === PAGE;
    });
  }
  function course() {
    if (/^(lesson|refresher|serie-a)/.test(PAGE) || PAGE === 'analysis') return 'analysis-1';
    if (/^(phys|serie-p)/.test(PAGE) || PAGE === 'physics') return 'physics-1';
    if (/^(linalg|serie-l)/.test(PAGE)) return 'linear-algebra';
    if (/^inf/.test(PAGE) || PAGE === 'informatik') return 'informatik';
    return '';
  }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }

  var css = '.sh-addons-bar{display:flex;flex-wrap:wrap;gap:.5rem;margin:.6rem 0 1rem}' +
    '.sh-addons-bar a,.sh-addons-bar button{font:inherit;font-size:.9em;padding:.35rem .8rem;border-radius:999px;border:1px solid var(--accent,#6a4c93);background:var(--surface,#fff);color:var(--accent,#6a4c93);cursor:pointer;text-decoration:none}' +
    '.sh-addon{margin:1rem 0;border:1px dashed var(--accent,#6a4c93);border-radius:10px;padding:.6rem .9rem;background:var(--surface,transparent)}' +
    '.sh-addon>summary{cursor:pointer;font-weight:600}.sh-addon .sh-addon-tag{font-weight:400;font-size:.8em;opacity:.7;margin-left:.4rem}' +
    '.sh-addon iframe{width:100%;border:0;display:block;margin-top:.5rem;background:#fff;border-radius:6px}' +
    '.sh-addon-note p{margin:.4em 0;white-space:pre-wrap}.sh-addon-msg{font-size:.85em;opacity:.8}';

  var frames = [];   // { frame, addon, origin }
  function data(what) {
    var S = window.SH;
    if (what === 'page') {
      var m = document.querySelector('main');
      var h = m && m.querySelector('h1');
      return Promise.resolve({ id: PAGE, title: h ? h.textContent.trim() : document.title, text: m ? m.innerText.slice(0, 200000) : '' });
    }
    if (!S || !S.sb || !S.user) return Promise.reject(new Error('Not signed in.'));
    if (what === 'progress') return S.sb.from('progress').select('page, done, rating, note, updated_at').eq('user_id', S.user.id).then(function (r) { if (r.error) throw new Error(r.error.message); return r.data || []; });
    return S.sb.from('my_items').select('content').eq('user_id', S.user.id).eq('key', what).maybeSingle().then(function (r) { if (r.error) throw new Error(r.error.message); return r.data ? r.data.content : []; });
  }
  window.addEventListener('message', function (e) {
    var f = null;
    for (var i = 0; i < frames.length; i++) if (frames[i].frame.contentWindow === e.source) f = frames[i];
    if (!f || !e.data || typeof e.data !== 'object') return;
    var m = e.data, reply = function (msg) { try { f.frame.contentWindow.postMessage(msg, f.origin); } catch (x) {} };
    if (m.studyhub === 'height') { var h = Number(m.value); if (h >= 80 && h <= 2000) f.frame.style.height = Math.round(h) + 'px'; return; }
    if (m.studyhub === 'get') {
      if (f.addon.reads.indexOf(m.what) < 0) return reply({ studyhub: 'error', rid: m.rid, message: 'This add-on may not read "' + m.what + '". Allowed: ' + (f.addon.reads.join(', ') || 'nothing') + '.' });
      data(m.what).then(function (v) { reply({ studyhub: 'data', rid: m.rid, what: m.what, value: v }); },
        function (x) { reply({ studyhub: 'error', rid: m.rid, message: x.message }); });
    }
  });

  function frameFor(a) {
    var f = document.createElement('iframe');
    // No allow-same-origin: the frame gets an empty, opaque origin, so it can't touch study-hub.ch.
    f.setAttribute('sandbox', 'allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads');
    f.setAttribute('referrerpolicy', 'no-referrer');
    f.setAttribute('allow', '');
    f.setAttribute('loading', 'lazy');
    f.title = a.name;
    f.style.height = a.height + 'px';
    var origin = '*';
    if (a.type === 'hosted') { f.src = a.url; try { origin = new URL(a.url).origin; } catch (e) {} }
    else f.srcdoc = a.html;
    var rec = { frame: f, addon: a, origin: origin };
    frames.push(rec);
    f.addEventListener('load', function () {
      var dark = document.documentElement.getAttribute('data-theme') === 'dark';
      try { f.contentWindow.postMessage({ studyhub: 'hello', page: PAGE, title: document.title, lang: DE ? 'de' : 'en', theme: dark ? 'dark' : 'light', course: course(), reads: a.reads }, origin); } catch (e) {}
    });
    return f;
  }
  function kindle(btn, msg) {
    var c = course();
    btn.disabled = true;
    fetch(ROOT + 'ebooks/index.json', { cache: 'no-cache' }).then(function (r) { if (!r.ok) throw 0; return r.json(); }).then(function (idx) {
      var books = (Array.isArray(idx) ? idx : idx.books || []).filter(function (b) { return b && b.course === c && typeof b.file === 'string' && /^[\w.\/-]+\.epub$/.test(b.file) && b.file.indexOf('..') < 0; });
      if (!books.length) throw 0;
      books.forEach(function (b) { var a = document.createElement('a'); a.href = ROOT + (b.file.indexOf('ebooks/') === 0 ? '' : 'ebooks/') + b.file; a.download = ''; document.body.appendChild(a); a.click(); a.remove(); });
      msg.textContent = L('Downloaded. Drag the file into Send to Kindle (opened in a new tab) and press Send.', 'Heruntergeladen. Zieh die Datei in Send to Kindle (neuer Tab) und drück Senden.');
      window.open('https://www.amazon.com/sendtokindle', '_blank', 'noopener');
    }).catch(function () {
      msg.textContent = L('The e-book for this course is coming soon.', 'Das E-Book für diesen Kurs kommt bald.');
    }).then(function () { btn.disabled = false; });
  }

  function render(list) {
    document.querySelectorAll('.sh-addons-bar,.sh-addon').forEach(function (n) { n.remove(); });
    frames = [];
    var main = document.querySelector('main'); if (!main || PAGE === 'my' && !document.getElementById('sh-addons-here')) return;
    var mine = list.filter(function (a) { return a.on && (PAGE === 'my' ? a.pages.indexOf('my') >= 0 : matches(a)); });
    if (!mine.length) return;
    if (!document.getElementById('sh-addons-css')) { var s = el('style'); s.id = 'sh-addons-css'; s.textContent = css; document.head.appendChild(s); }
    var anchor = PAGE === 'my' ? document.getElementById('sh-addons-here') : (main.querySelector('h1') ? main.querySelector('header') || main.querySelector('h1') : null);
    var top = document.createDocumentFragment(), bottom = document.createDocumentFragment();
    var bar = el('div', 'sh-addons-bar'), msg = el('p', 'sh-addon-msg');
    mine.forEach(function (a) {
      if (a.type === 'link') {
        var href = a.url.replace(/\{page\}/g, encodeURIComponent(PAGE)).replace(/\{title\}/g, encodeURIComponent(document.title)).replace(/\{url\}/g, encodeURIComponent(location.href));
        var l = el('a', '', a.name); l.href = href; l.target = '_blank'; l.rel = 'noopener noreferrer'; bar.appendChild(l); return;
      }
      if (a.type === 'kindle') {
        if (!course()) return;
        var b = el('button', '', a.name === 'kindle' ? L('Send to Kindle', 'An Kindle senden') : a.name); b.type = 'button';
        b.onclick = function () { kindle(b, msg); }; bar.appendChild(b); return;
      }
      var box = el('details', 'sh-addon'); box.open = true;
      var sum = el('summary', '', a.name); sum.appendChild(el('span', 'sh-addon-tag', L('your add-on', 'dein Add-on'))); box.appendChild(sum);
      if (a.type === 'note') { var d = el('div', 'sh-addon-note'); a.text.split(/\n{2,}/).forEach(function (p) { d.appendChild(el('p', '', p)); }); box.appendChild(d); }
      else box.appendChild(frameFor(a));
      (a.place === 'bottom' ? bottom : top).appendChild(box);
    });
    if (bar.childNodes.length) { var wrap = document.createDocumentFragment(); wrap.appendChild(bar); wrap.appendChild(msg); top.insertBefore(wrap, top.firstChild); }
    if (anchor) anchor.parentNode.insertBefore(top, anchor.nextSibling); else main.insertBefore(top, main.firstChild);
    var tail = main.querySelector('.sh-progress,.sh-comments');
    if (tail && PAGE !== 'my') main.insertBefore(bottom, tail); else main.appendChild(bottom);
  }

  /* "Your add-ons" list on My StudyHub (account.html#addons): switch on/off, remove; undo through history. */
  function manage(list) {
    var root = document.getElementById('sh-addons-list'); if (!root) return;
    root.textContent = '';
    if (!list.length) { root.appendChild(el('p', '', L('No add-ons yet. Ask your AI, for example: "Add a Send to Kindle button to my StudyHub."', 'Noch keine Add-ons. Frag deine KI, z. B.: „Füge meinem StudyHub einen Send-to-Kindle-Knopf hinzu.“'))); return; }
    var KIND = { note: L('note', 'Notiz'), link: L('button with a link', 'Knopf mit Link'), kindle: L('Send to Kindle', 'An Kindle senden'), code: L('own add-on (in your account)', 'eigenes Add-on (im Konto)'), hosted: L('own add-on (on your own space)', 'eigenes Add-on (auf deinem Speicher)') };
    var ul = el('ul');
    list.forEach(function (a, i) {
      var li = el('li'); li.appendChild(el('strong', '', a.name));
      var info = ' · ' + KIND[a.type] + ' · ' + L('on ', 'auf ') + a.pages.join(', ');
      if (a.reads && a.reads.length) info += ' · ' + L('may read: ', 'darf lesen: ') + a.reads.join(', ');
      if (a.type === 'hosted') info += ' · ' + a.url;
      li.appendChild(document.createTextNode(info + ' '));
      var t = el('button', 'sh-plain', a.on ? L('Switch off', 'Ausschalten') : L('Switch on', 'Einschalten')); t.type = 'button';
      t.onclick = function () { list[i].on = !a.on; save(list); };
      var r = el('button', 'sh-plain', L('Remove', 'Entfernen')); r.type = 'button';
      r.onclick = function () { list.splice(i, 1); save(list); };
      li.appendChild(t); li.appendChild(document.createTextNode(' ')); li.appendChild(r); ul.appendChild(li);
    });
    root.appendChild(ul);
    root.appendChild(el('p', 'sh-addon-msg', L('Every change is saved as a version: "Undo" in your history, or ask your AI to undo it.', 'Jede Änderung wird als Version gespeichert: „Rückgängig“ im Verlauf, oder frag deine KI.')));
  }
  function save(list) {
    var S = window.SH; if (!S || !S.sb || !S.user) return;
    S.sb.from('my_items').upsert({ user_id: S.user.id, key: 'addons', content: { items: list }, source: 'site', updated_at: new Date().toISOString() })
      .then(function () { render(list); manage(list); });
  }
  function load() {
    var S = window.SH;
    if (!S || !S.sb || !S.user) { var r = document.getElementById('sh-addons-list'); if (r) r.textContent = L('Sign in to use add-ons.', 'Melde dich an, um Add-ons zu nutzen.'); return; }
    if (window.SHAddons._loaded) return; window.SHAddons._loaded = true;
    S.sb.from('my_items').select('content').eq('user_id', S.user.id).eq('key', 'addons').maybeSingle().then(function (r) {
      var list = clean(r && r.data ? r.data.content : []);
      var go = function () { render(list); manage(list); };
      document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', go) : go();
    });
  }
  window.SHAddons = { clean: clean, cleanOne: cleanOne, TYPES: TYPES, READS: READS };
  document.addEventListener('sh-auth', load);
  if (window.SH && window.SH.user) load();
})();
