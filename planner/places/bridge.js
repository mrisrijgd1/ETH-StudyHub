/* StudyHub additions to the study-spaces map (copied in by tools/sync-study-spaces.py).
   1. Live occupancy: ETH's traffic light per room, through api/occupancy.php (ETH's feed can't be read
      from the browser directly). Always linked to ETH's own live page.
   2. Pick mode (index.html?pick=1, opened from the planner): a "Choose this place" button in the detail
      sheet sends the place to the planner window. */
(function () {
  'use strict';
  var PICK = /[?&]pick=1\b/.test(location.search);
  var ETH_PAGE = 'https://ethz.ch/studierende/de/campus/arbeitsplaetze-studierende/auslastung-studierendenarbeitsplaetze.html';
  var WORD = { green: 'plenty of space', yellow: 'filling up', red: 'almost full' };
  var TREND = { rising: 'getting fuller', falling: 'emptying', steady: 'steady' };
  var places = [], live = null;

  var css = document.createElement('style');
  css.textContent =
    '.shb{margin:0 0 4px;padding:10px 12px;border:1px solid var(--line);border-radius:var(--r);background:var(--panel-2);font-size:13px}' +
    '.shb b{font-weight:600}.shb ul{margin:6px 0 0;padding-left:0;list-style:none;display:grid;gap:3px}' +
    '.shb li{display:flex;gap:8px;align-items:center}.shb .lt{width:10px;height:10px;border-radius:50%;flex:none}' +
    '.shb .lt.green{background:var(--ok)}.shb .lt.yellow{background:var(--warn)}.shb .lt.red{background:var(--bad)}' +
    '.shb a{color:var(--accent)}.shb .muted{color:var(--ink-3)}' +
    '.shb-pick{display:block;width:100%;margin:0 0 4px;padding:12px 14px;border:0;border-radius:var(--r);background:var(--accent);color:var(--accent-ink);font:600 15px var(--f-body);cursor:pointer}' +
    '.shb-pick:focus-visible{outline:3px solid var(--ink);outline-offset:2px}';
  document.head.appendChild(css);

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function hhmm(iso) { var d = new Date(iso); return isNaN(d) ? '' : d.toLocaleTimeString('de-CH', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Zurich' }); }

  function liveBlock(p) {
    if (!p.occupancy || p.occupancy.source !== 'eth-api') return '';
    var link = '<a href="' + ETH_PAGE + '" target="_blank" rel="noopener">ETH live page</a>';
    if (!live) return '<div class="shb"><b>Live occupancy</b> <span class="muted">· not loaded here. See the ' + link + '.</span></div>';
    var rows = (p.rooms || []).filter(function (r) { return live.rooms[r.room_id]; }).map(function (r) {
      var o = live.rooms[r.room_id];
      return '<li><span class="lt ' + o.s + '" aria-hidden="true"></span><span><b>' + esc(r.name) + '</b> <code>' + esc(r.room) + '</code>: ' +
        WORD[o.s] + (o.p != null ? ' (' + o.p + ' %)' : '') + (o.t ? ', ' + TREND[o.t] : '') + '</span></li>';
    });
    var at = '';
    (p.rooms || []).forEach(function (r) { var o = live.rooms[r.room_id]; if (o && o.at && o.at > at) at = o.at; });
    return '<div class="shb"><b>Live occupancy from ETH</b>' + (at ? ' <span class="muted">· ' + hhmm(at) + '</span>' : '') +
      (rows.length ? '<ul>' + rows.join('') + '</ul>' : '<p style="margin:4px 0 0" class="muted">No room in this building is measured right now.</p>') +
      '<p style="margin:6px 0 0" class="muted">Source: ETH Zürich traffic light, 20 % steps, updated every 5 min. ' + link + '</p></div>';
  }

  function decorate() {
    var sh = document.getElementById('sheet');
    if (!sh || sh.hidden || !places.length) return;
    var body = sh.querySelector('.d-body'), h2 = sh.querySelector('.d-title h2');
    if (!body || !h2 || body.querySelector('.shb-done')) return;
    var name = h2.textContent.trim(), p = places.filter(function (x) { return x.name === name; })[0];
    if (!p) return;
    var mark = document.createElement('i'); mark.className = 'shb-done'; mark.hidden = true; body.prepend(mark);
    var lb = liveBlock(p);
    if (lb) { var f = body.querySelector('.facts'); if (f) f.insertAdjacentHTML('afterend', lb); }
    if (PICK) {
      var b = document.createElement('button'); b.type = 'button'; b.className = 'shb-pick'; b.textContent = 'Choose this place for my plan';
      b.onclick = function () { if (window.parent !== window) window.parent.postMessage({ type: 'sh-place-pick', id: p.id, name: p.name, area: p.area || '' }, location.origin); };
      mark.after(b);
    }
  }

  function loadLive() {
    return fetch('../../api/occupancy.php', { cache: 'no-cache' }).then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) { if (j && j.rooms) { live = j; redo(); } }).catch(function () {});
  }
  function redo() { var m = document.querySelector('#sheet .shb-done'); if (m) { var sh = document.getElementById('sheet'); sh.querySelectorAll('.shb,.shb-pick,.shb-done').forEach(function (n) { n.remove(); }); } decorate(); }

  fetch('study-spaces.json').then(function (r) { return r.json(); }).then(function (d) {
    places = d.places || [];
    var sh = document.getElementById('sheet');
    if (sh) new MutationObserver(decorate).observe(sh, { childList: true, attributes: true, attributeFilter: ['hidden'] });
    decorate();
    loadLive(); setInterval(loadLive, 5 * 60 * 1000);
    if (PICK) {   // open straight on a place the planner already has
      var m = /[?&]place=([^&]+)/.exec(location.search);
      if (m) { var want = decodeURIComponent(m[1]); var t = setInterval(function () { var el = document.querySelector('.item[data-id="' + CSS.escape(want) + '"]'); if (el) { clearInterval(t); el.click(); } }, 200); setTimeout(function () { clearInterval(t); }, 6000); }
    }
  }).catch(function () {});
})();
