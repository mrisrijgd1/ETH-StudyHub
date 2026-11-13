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
    if (Object.prototype.toString.call(t.hide) === '[object Array]') o.hide = t.hide.filter(function (h) { return HIDE[h] || h === 'wonder'; });
    return o;
  }
  function get() { try { return clean(JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { return {}; } }
  function apply(d) {
    d = clean(d);
    var css = '', v = '';
    if (d.accent) v += '--accent:' + d.accent + ';--k-X:' + d.accent + ';';
    if (d.background) v += '--bg:' + d.background + ';--bg2:' + d.background + ';';
    if (d.text) v += '--ink:' + d.text + ';--head:' + d.text + ';';
    if (d.box) v += '--surface:' + d.box + ';--story:' + d.box + ';--exam:' + d.box + ';';
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
  if (!/^(lesson|phys|refresher|serie)-[a-z0-9]+\.html$/.test(page) || page === 'phys-docs.html' || page === 'phys-plan.html' || page === 'phys-script.html') return;
  var DE = document.documentElement.lang === 'de';
  function go() {
    var main = document.querySelector('main'); if (!main) return;
    var h1 = main.querySelector('h1'); if (!h1) return;
    var css = document.createElement('style');
    css.textContent = '.sh-pdf{font:inherit;font-size:.88rem;padding:.3rem .9rem;border-radius:999px;border:1px solid var(--accent);background:none;color:var(--accent);cursor:pointer;margin:.3rem 0 .6rem}' +
      '@media print{.sh-bar,.sh-side,#sh-tip,.sh-listen,.sh-comments,.sh-progress,.sh-pdf,.badday,footer,nav.toc,iframe{display:none!important}' +
      'body,main{background:#fff!important;color:#000!important}main{max-width:none!important;margin:0!important;padding:0!important}' +
      'details{border:none!important}details>summary{list-style:none;font-weight:600}details>summary::-webkit-details-marker{display:none}' +
      '.box,.exam,.story,details{break-inside:auto}h2,h3{break-after:avoid}mjx-container[display="true"]{overflow:visible!important}a{color:inherit!important;text-decoration:none!important}}';
    document.head.appendChild(css);
    var b = document.createElement('button'); b.type = 'button'; b.className = 'sh-pdf';
    b.textContent = DE ? 'Als PDF speichern (mit allen Lösungen)' : 'Save as PDF (with all solutions)';
    b.title = DE ? 'Öffnet den Druckdialog; wähle dort „Als PDF speichern“.' : 'Opens the print dialog; choose “Save as PDF” there.';
    h1.insertAdjacentElement('afterend', b);
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
    b.onclick = function () { before(); setTimeout(function () { window.print(); }, 300); };
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
})();
