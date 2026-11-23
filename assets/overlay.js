/* StudyHub personal design overlay.
   A student's design (theme, colours, font, size, density, width, hidden sections) is stored as SAFE TOKENS only:
   in this browser (localStorage "sh-design") and, when signed in, in the account (my_items key "design"),
   where the student's own AI can also change it through the StudyHub connector.
   Tokens become CSS variables, so every content update still shows in the student's design. */
(function () {
  var KEY = 'sh-design';
  var FONTS = { serif: '"EB Garamond",Georgia,serif', sans: 'Inter,system-ui,sans-serif', readable: 'Atkinson Hyperlegible,Verdana,system-ui,sans-serif', mono: '"IBM Plex Mono",ui-monospace,monospace' };
  var HIDE = { badday: '.badday', listen: '.sh-listen', tips: '#sh-tip', comments: '.sh-comments', progress: '.sh-progress', story: '.sp-story,.story' };
  var HEX = /^#[0-9a-fA-F]{6}$/;
  function clean(t) {
    t = t || {}; var o = {};
    if (['light', 'dark', 'auto'].indexOf(t.theme) >= 0) o.theme = t.theme;
    ['accent', 'background', 'text', 'box'].forEach(function (k) { if (HEX.test(t[k] || '')) o[k] = t[k]; });
    if (t.font === 'default' || FONTS[t.font]) o.font = t.font;
    var s = Number(t.size); if (s >= 80 && s <= 150) o.size = Math.round(s);
    if (['compact', 'normal', 'airy'].indexOf(t.density) >= 0) o.density = t.density;
    if (['narrow', 'normal', 'wide'].indexOf(t.width) >= 0) o.width = t.width;
    if (Object.prototype.toString.call(t.hide) === '[object Array]') o.hide = t.hide.filter(function (h) { return HIDE[h] || h === 'wonder' || h === 'streak'; });
    return o;
  }
  function get() { try { return clean(JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { return {}; } }
  function apply(d) {
    d = clean(d);
    var css = '', v = '';
    if (d.accent) v += '--accent:' + d.accent + ';--k-X:' + d.accent + ';';
    if (d.background) v += '--bg:' + d.background + ';--bg2:' + d.background + ';';
    if (d.text) v += '--ink:' + d.text + ';--head:' + d.text + ';';
    if (d.box) v += '--surface:' + d.box + ';';  // story and exam keep their own colours
    if (d.font && FONTS[d.font]) v += '--font-body:' + FONTS[d.font] + ';--font-display:' + FONTS[d.font] + ';';
    if (v) css += ':root,:root[data-theme="light"],:root[data-theme="dark"]{' + v + '}';
    if (d.font && FONTS[d.font]) css += 'body{font-family:var(--font-body)}';
    if (d.size) css += 'body{font-size:' + (18.5 * d.size / 100).toFixed(1) + 'px!important}';
    if (d.density === 'compact') css += 'body{line-height:1.45!important}main p,main li{margin-top:.35em;margin-bottom:.35em}.box{padding:.7rem .9rem!important}';
    if (d.density === 'airy') css += 'body{line-height:1.85!important}main p{margin:1.1em 0}';
    if (d.width === 'narrow') css += 'main{max-width:38rem!important}';
    if (d.width === 'wide') css += 'main{max-width:64rem!important}';
    (d.hide || []).forEach(function (h) { if (HIDE[h]) css += HIDE[h] + '{display:none!important}'; });
    var el = document.getElementById('sh-overlay');
    if (!el) { el = document.createElement('style'); el.id = 'sh-overlay'; document.head.appendChild(el); }
    el.textContent = css;
    if (d.theme === 'light' || d.theme === 'dark') document.documentElement.setAttribute('data-theme', d.theme);
    if ((d.hide || []).indexOf('wonder') >= 0) hideWonder();
    if ((d.hide || []).indexOf('streak') >= 0) hideStreak();
  }
  /* Streak off (Mridul, 23 Nov: shown by default, a quiet switch to turn it off). The flashcards app (Rachel's folder) keeps
     its own "Show streak" setting in prefs.streak of each subject's synced key; this sets it to false for every profile in
     this browser, so the flame, count and match disappear in all subjects. Unticking does not switch it back on by force:
     the app's own "Show streak" link does that. */
  var FC_KEYS = ['studyhub-analysis-flashcards-v1', 'studyhub-linalg-flashcards-v1'];
  function hideStreak() {
    FC_KEYS.forEach(function (k) {
      try {
        var st = JSON.parse(localStorage.getItem(k) || 'null'), changed = false;
        if (!st || !st.users) return;
        Object.keys(st.users).forEach(function (id) { var u = st.users[id]; if (u && typeof u === 'object') { u.prefs = u.prefs || {}; if (u.prefs.streak !== false) { u.prefs.streak = false; changed = true; } } });
        if (changed) localStorage.setItem(k, JSON.stringify(st));
      } catch (e) {}
    });
  }
  function hideWonder() {
    var run = function () {
      var hs = document.querySelectorAll('main h2[id*="wonder"]');
      for (var i = 0; i < hs.length; i++) { var n = hs[i]; while (n) { var next = n.nextElementSibling; n.style.display = 'none'; n = next; if (n && /^H2$/.test(n.tagName)) break; } }
    };
    document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', run) : run();
  }
  function save(d, toAccount) {
    d = clean(d);
    try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {}
    apply(d);
    var S = window.SH;
    if (toAccount !== false && S && S.sb && S.user) {
      if (Object.keys(d).length) return S.sb.from('my_items').upsert({ user_id: S.user.id, key: 'design', content: d, source: 'site', updated_at: new Date().toISOString() });
      return S.sb.from('my_items').delete().eq('user_id', S.user.id).eq('key', 'design');
    }
    return Promise.resolve({});
  }
  window.SHDesign = { get: get, apply: apply, save: save, clean: clean, FONTS: Object.keys(FONTS), HIDE: Object.keys(HIDE).concat(['wonder']) };
  apply(get());
  // Signed in: the account's design wins (the AI may have changed it).
  document.addEventListener('sh-auth', function () {
    var S = window.SH; if (!S || !S.sb || !S.user || window.SHDesign._synced) return;
    window.SHDesign._synced = true;
    S.sb.from('my_items').select('content').eq('key', 'design').maybeSingle().then(function (r) {
      if (r && r.data && r.data.content) { try { localStorage.setItem(KEY, JSON.stringify(clean(r.data.content))); } catch (e) {} apply(r.data.content); }
    });
  });
})();

/* "Save as PDF" button on lessons, refresher units and exercise sheets: prints a clean, light version
   with every solution and hint unfolded (the browser's print dialog offers "Save as PDF"). */
(function () {
  var page = (location.pathname.split('/').pop() || '');
  if (!/^(lesson|phys|refresher|serie|linalg|inf)-[a-z0-9]+\.html$/.test(page) || page === 'inf-method.html' || page === 'phys-docs.html' || page === 'phys-plan.html' || page === 'phys-script.html' || page === 'linalg-plan.html' || page === 'linalg-script.html') return;
  var DE = document.documentElement.lang === 'de';
  function go() {
    var main = document.querySelector('main'); if (!main) return;
    var h1 = main.querySelector('h1'); if (!h1) return;
    var css = document.createElement('style');
    css.textContent = '.sh-pdf{cursor:pointer}' +
      '@media print{.study-shell,#sh-tip,.sh-listen,.sh-comments,.sh-progress,.sh-pdf,.lesson-actions,.badday,footer,nav.toc,iframe{display:none!important}' +
      'body,main{background:#fff!important;color:#000!important}main{max-width:none!important;margin:0!important;padding:0!important}' +
      'details{border:none!important}details>summary{list-style:none;font-weight:600}details>summary::-webkit-details-marker{display:none}' +
      '.box,.exam,.story,details{break-inside:auto}h2,h3{break-after:avoid}mjx-container[display="true"]{overflow:visible!important}mjx-container svg g[stroke]{stroke:none!important}a{color:inherit!important;text-decoration:none!important}}';
    document.head.appendChild(css);
    /* Ready-made PDF (made at build time by make_pdfs.js, Computer Modern like the script). */
    var b = document.createElement('a'); b.className = 'sh-pdf';
    b.href = (DE ? '../' : '') + 'pdf/' + (DE ? 'de/' : 'en/') + page.replace(/\.html$/, '.pdf');
    b.setAttribute('download', 'StudyHub-' + (DE ? 'de-' : '') + page.replace(/\.html$/, '.pdf'));
    b.className = 'sh-pdf btn-secondary';
    b.textContent = DE ? 'PDF herunterladen (mit allen Lösungen)' : 'Download PDF (with all solutions)';
    b.title = DE ? 'Fertiges PDF im Stil des Skripts, alle Lösungen aufgeklappt.' : 'Ready-made PDF in the style of the script, every solution unfolded.';
    // Lesson intro: eyebrow, title, lead, then the actions (one primary "start reading", one secondary PDF).
    var head = h1.closest('header') || h1.parentNode;
    var actions = document.createElement('div'); actions.className = 'lesson-actions';
    var first = main.querySelector('h2[id]');
    if (first) { var go1 = document.createElement('a'); go1.className = 'btn-primary btn'; go1.href = '#' + first.id; go1.textContent = DE ? 'Mit dem Lesen beginnen' : 'Start reading'; actions.appendChild(go1); }
    actions.appendChild(b);
    var lead = head.querySelector('.lead');
    (lead || h1).insertAdjacentElement('afterend', actions);
    lowEnergy(main, actions);
    lessonBar(main);
    swapIcons(main);
    var closed = [], theme = null, on = false;
    function before() {
      if (on) return; on = true;
      closed = [].filter.call(document.querySelectorAll('details'), function (d) { return !d.open; });
      closed.forEach(function (d) { d.open = true; });
      theme = document.documentElement.getAttribute('data-theme'); document.documentElement.setAttribute('data-theme', 'light');
    }
    function after() {
      if (!on) return; on = false;
      closed.forEach(function (d) { d.open = false; }); closed = [];
      if (theme == null) document.documentElement.removeAttribute('data-theme'); else document.documentElement.setAttribute('data-theme', theme);
    }
    window.addEventListener('beforeprint', before); window.addEventListener('afterprint', after);
  }
  function T(en, de) { return DE ? de : en; }
  var SVG = function (d) { return '<svg class="sh-ico" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + d + '</svg>'; };
  var ICO = {
    rain: SVG('<path d="M7 15a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17 8.5a3.5 3.5 0 0 1 0 6.5z"/><path d="M9 18l-1 2M13 18l-1 2M17 18l-1 2"/>'),
    check: SVG('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),
    left: SVG('<path d="M19 12H5M11 6l-6 6 6 6"/>'),
    right: SVG('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    leaf: SVG('<path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14z"/><path d="M5 19l7-7"/>')
  };
  function swapIcons(main) {
    // The "Bad day?" box used an emoji; same monochrome line icons as the rest of the shell.
    [].forEach.call(main.querySelectorAll('.badday .bd-ico'), function (s) { s.innerHTML = ICO.rain; });
  }

  /* ---------- Low-energy view ----------
     The "Bad day?" box on each lesson names a small minimum ("Read the story in section 1", "Do only sections 1, 3
     and Proof 2"). Turning the view on folds every other numbered section under its heading. Nothing is removed:
     each folded section has a "Show" button, links into it unfold it, and "Show everything" turns the view off.
     It is kept for today only (localStorage "sh-low" = today's date), so a hard evening does not stick to tomorrow. */
  function lowEnergy(main, actions) {
    var bd = main.querySelector('.badday'); if (!bd) return;
    var text = bd.textContent, keep = {}, proofs = [], m;
    var re = /(?:sections?|abschnitt(?:e|en)?)\s+((?:\d+(?:\s*[–-]\s*\d+)?(?:\s*(?:,|and|und|&)\s*)?)+)/gi;
    while ((m = re.exec(text))) m[1].replace(/(\d+)(?:\s*[–-]\s*(\d+))?/g, function (_, a, b) { for (var i = +a; i <= +(b || a); i++) keep[i] = 1; });
    text.replace(/(?:proof|beweis)\s+(\d+)/gi, function (_, n) { proofs.push('proof-' + n); });
    if (!Object.keys(keep).length) keep[1] = 1;
    var STOP = '.sh-progress,.sh-comments,.sh-lessonbar,nav.site,footer';
    function secs() {
      var out = [];
      [].forEach.call(main.querySelectorAll('h2[id]'), function (h) {
        if (h.closest(STOP + ',details,nav')) return;
        var num = (/^\s*(\d+)\./.exec(h.textContent) || [])[1];
        var nodes = [], n = h.nextElementSibling;
        while (n && n.tagName !== 'H2' && !n.matches(STOP) && !n.querySelector('h2')) { if (!n.classList.contains('sh-low-open')) nodes.push(n); n = n.nextElementSibling; }
        var named = (num ? !!keep[+num] : /^words/.test(h.id)) || /tick off|abhaken/i.test(h.textContent);
        if (!named) for (var i = 0; i < proofs.length; i++) if (nodes.some(function (x) { return x.id === proofs[i] || x.querySelector('#' + proofs[i]); })) { named = true; break; }
        out.push({ h: h, nodes: nodes, keep: named });
      });
      return out;
    }
    var pill = document.createElement('button'); pill.type = 'button'; pill.className = 'sh-low-pill';
    var note = document.createElement('p'); note.className = 'sh-low-note'; note.setAttribute('role', 'status');
    actions.appendChild(pill); actions.insertAdjacentElement('afterend', note);
    var opened = {};
    function today() { var d = new Date(); return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); }
    function stored() { try { return localStorage.getItem('sh-low') === today(); } catch (e) { return false; } }
    function paint(on) {
      document.documentElement.classList.toggle('sh-low', on);
      pill.setAttribute('aria-pressed', on ? 'true' : 'false');
      pill.innerHTML = ICO.leaf + '<span>' + (on ? T('Low-energy view: on', 'Wenig-Energie-Ansicht: an') : T('Low-energy today?', 'Wenig Energie heute?')) + '</span>';
      note.innerHTML = on ? T('Only the bad-day minimum is open. Everything else is still here, folded under its heading. ', 'Nur das Minimum für schlechte Tage ist offen. Alles andere ist noch da, eingeklappt unter seiner Überschrift. ') +
        '<button type="button" class="btn-link sh-low-all">' + T('Show everything', 'Alles zeigen') + '</button>' : '';
      var all = note.querySelector('.sh-low-all'); if (all) all.onclick = function () { set(false); pill.focus(); };
      secs().forEach(function (s) {
        var fold = on && !s.keep && !opened[s.h.id];
        s.h.classList.toggle('sh-low-h', fold);
        s.nodes.forEach(function (n) { n.classList.toggle('sh-low-x', fold); });
        var b = s.h.nextElementSibling && s.h.nextElementSibling.classList.contains('sh-low-open') ? s.h.nextElementSibling : null;
        if (fold && !b) {
          b = document.createElement('button'); b.type = 'button'; b.className = 'sh-low-open btn-link';
          b.textContent = T('Show this section', 'Abschnitt zeigen');
          b.onclick = function () { opened[s.h.id] = 1; paint(true); s.h.setAttribute('tabindex', '-1'); s.h.focus(); };
          s.h.insertAdjacentElement('afterend', b);
        }
        if (b) b.hidden = !fold;
      });
    }
    // The long table of contents folds too while the view is on (so the "Bad day?" box is the first thing you see).
    var toc = main.querySelector('details.toc'), tocWasOpen = false;
    function foldToc(on) { if (!toc) return; if (on) { tocWasOpen = toc.open; toc.open = false; } else if (tocWasOpen) toc.open = true; }
    function set(on) { try { on ? localStorage.setItem('sh-low', today()) : localStorage.removeItem('sh-low'); } catch (e) {} opened = {}; foldToc(on); paint(on); }
    pill.onclick = function () { set(pill.getAttribute('aria-pressed') !== 'true'); };
    // A link to something inside a folded section (table of contents, search result) unfolds that section.
    function reveal() {
      if (!document.documentElement.classList.contains('sh-low') || !location.hash) return;
      var t; try { t = document.getElementById(decodeURIComponent(location.hash.slice(1))); } catch (e) {} if (!t) return;
      secs().forEach(function (s) { if (s.h === t || s.nodes.some(function (n) { return n === t || n.contains(t); })) opened[s.h.id] = 1; });
      paint(true); t.scrollIntoView();
    }
    window.addEventListener('hashchange', reveal);
    window.addEventListener('beforeprint', function () { document.documentElement.classList.remove('sh-low'); });
    window.addEventListener('afterprint', function () { if (pill.getAttribute('aria-pressed') === 'true') document.documentElement.classList.add('sh-low'); });
    if (stored()) foldToc(true);
    paint(stored()); reveal();
  }

  /* ---------- Lesson bottom bar: ← previous | Mark done | next → ----------
     Works on lessons, refresher units and exercise sheets. Uses the page's own previous/next links when it has
     them (Analysis lessons); otherwise it builds them from the file name and only shows "next" if that page exists.
     "Mark done" is the same tick as "I finished this lesson" in the progress box below (account.js). */
  function lessonBar(main) {
    var m = /^(lesson-|phys-|linalg-|inf-|refresher-|serie-a|serie-p|serie-l)(\d+)\.html$/.exec(page); if (!m) return;
    var kind = m[1], n = +m[2], w = m[2].length;
    var name = { 'lesson-': T('Lesson', 'Lektion'), 'phys-': T('Lesson', 'Lektion'), 'linalg-': T('Lesson', 'Lektion'), 'inf-': T('Lesson', 'Lektion'), 'refresher-': T('Unit', 'Einheit'), 'serie-a': 'Übungsblatt', 'serie-p': 'Serie', 'serie-l': 'Serie' }[kind];
    var lo = kind === 'serie-l' ? 0 : 1;
    function href(k) { var s = String(k); while (s.length < w) s = '0' + s; return kind + s + '.html'; }
    var foot = main.querySelector('nav.site.foot');
    function footLink(k) { return foot && foot.querySelector('a[href="' + href(k) + '"]'); }
    function cell(k, dir) {
      var a = document.createElement('a'); a.href = href(k); a.className = 'sh-lb-' + dir; a.rel = dir;
      var fl = footLink(k), title = fl ? fl.textContent.replace(/[←→]/g, '').replace(/^[^:]*:\s*/, '').trim() : '';
      var label = dir === 'prev' ? ICO.left + '<span>' + name + ' ' + k + '</span>' : '<span>' + name + ' ' + k + '</span>' + ICO.right;
      a.innerHTML = '<span class="sh-lb-dir">' + label + '</span>' + (title ? '<span class="sh-lb-title">' + title.replace(/</g, '&lt;') + '</span>' : '');
      a.setAttribute('aria-label', (dir === 'prev' ? T('Previous: ', 'Zurück: ') : T('Next: ', 'Weiter: ')) + name + ' ' + k + (title ? ', ' + title : ''));
      if (fl) fl.classList.add('sh-lb-dup');
      return a;
    }
    var bar = document.createElement('nav'); bar.className = 'sh-lessonbar'; bar.setAttribute('aria-label', T('Previous and next', 'Zurück und weiter'));
    var prev = n > lo ? cell(n - 1, 'prev') : document.createElement('span');
    if (n <= lo) prev.className = 'sh-lb-prev';
    var done = document.createElement('button'); done.type = 'button'; done.className = 'sh-lb-done';
    var next = document.createElement('span'); next.className = 'sh-lb-next';
    bar.appendChild(prev); bar.appendChild(done); bar.appendChild(next);
    if (footLink(n + 1)) bar.replaceChild(cell(n + 1, 'next'), next);
    else if (window.fetch) fetch(href(n + 1), { method: 'HEAD' }).then(function (r) { if (r.ok) bar.replaceChild(cell(n + 1, 'next'), next); }).catch(function () {});
    var panel = main.querySelector('.sh-progress');
    if (panel) main.insertBefore(bar, panel); else if (foot) main.insertBefore(bar, foot); else main.appendChild(bar);
    var sheet = /^serie/.test(kind);
    function box() { return main.querySelector('.sh-progress .shp-done input'); }
    function sync() {
      var cb = box(); done.hidden = !cb; if (!cb) return;
      done.setAttribute('aria-pressed', cb.checked ? 'true' : 'false');
      done.innerHTML = ICO.check + '<span>' + (cb.checked ? T('Done', 'Erledigt') : T('Mark done', 'Als erledigt markieren')) + '</span>';
      done.title = sheet ? T('Same tick as “I worked through this sheet” below', 'Derselbe Haken wie „Ich habe dieses Blatt durchgearbeitet“ unten')
        : T('Same tick as “I finished this lesson” below', 'Derselbe Haken wie „Ich habe diese Lektion abgeschlossen“ unten');
    }
    done.onclick = function () {
      var cb = box(); if (!cb) return;
      cb.checked = !cb.checked; cb.dispatchEvent(new Event('change', { bubbles: true }));
      sync();
      // Marking it done: show the "how hard was it?" rating right below, without jumping the page.
      if (cb.checked) { var p = main.querySelector('.sh-progress'); if (p && p.scrollIntoView) p.scrollIntoView({ block: 'nearest', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); }
    };
    document.addEventListener('change', function (e) { if (e.target && e.target.matches && e.target.matches('.shp-done input')) sync(); });
    document.addEventListener('sh-progress', sync);
    sync();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
})();

/* Desktop contents rail (from 1200px wide; CSS in studyhub.css): a copy of the page's "Contents" box sits in a sticky
   column left of the reading column, follows you while you scroll and marks the section you are in. Below 1200px
   nothing changes: the normal Contents box stays at the top. Works on every reading page with a Contents box. */
(function () {
  function go() {
    var main = document.querySelector('main'); if (!main || main.closest('.sh-read')) return;
    var toc = main.querySelector(':scope > details.toc'), head = main.querySelector(':scope > header .eyebrow');
    if (!toc || !head || !document.body.hasAttribute('data-subject')) return;
    var list = toc.querySelector(':scope > ol'); if (!list) return;
    var DE = document.documentElement.lang === 'de';
    var rail = document.createElement('nav'); rail.className = 'sh-rail'; rail.setAttribute('aria-label', DE ? 'Inhalt' : 'Contents');
    var h = document.createElement('p'); h.className = 'sh-rail-h'; h.textContent = DE ? 'Inhalt' : 'Contents';
    rail.appendChild(h); rail.appendChild(list.cloneNode(true));
    var wrap = document.createElement('div'); wrap.className = 'sh-read';
    main.parentNode.insertBefore(wrap, main); wrap.appendChild(rail); wrap.appendChild(main);
    document.documentElement.classList.add('sh-has-rail');
    if (/\$|\\\(/.test(rail.textContent) && window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([rail]).catch(function () {});
    // Where am I: the last linked heading above the top fifth of the screen.
    var links = [].slice.call(rail.querySelectorAll('a[href^="#"]')), items = [];
    links.forEach(function (a) { var t = document.getElementById(decodeURIComponent(a.getAttribute('href').slice(1))); if (t) items.push({ a: a, t: t }); });
    var cur = null, queued = false;
    function mark() {
      queued = false; if (!rail.offsetParent) return;
      var line = innerHeight * 0.2, best = null;
      for (var i = 0; i < items.length; i++) { var r = items[i].t.getBoundingClientRect(); if (!r.height && !r.width) continue; if (r.top <= line) best = items[i]; else break; }
      if (best === cur) return; cur = best;
      links.forEach(function (a) { a.removeAttribute('aria-current'); });
      [].forEach.call(rail.querySelectorAll('li.is-open'), function (li) { li.classList.remove('is-open'); });
      if (!best) return;
      best.a.setAttribute('aria-current', 'location');
      for (var li = best.a.closest('li'); li && rail.contains(li); li = li.parentNode.closest('li')) li.classList.add('is-open');
      var ar = best.a.getBoundingClientRect(), rr = rail.getBoundingClientRect();
      if (ar.top < rr.top + 30 || ar.bottom > rr.bottom - 10) rail.scrollTop += ar.top - rr.top - rr.height / 3;
    }
    function queue() { if (!queued) { queued = true; requestAnimationFrame(mark); } }
    addEventListener('scroll', queue, { passive: true }); addEventListener('resize', queue); addEventListener('hashchange', queue);
    mark();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
})();
