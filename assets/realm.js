/* Realm map: one fantasy map, one place per lesson. A place lights up when its lesson is marked done
   (progress from localStorage "sh-progress", which account.js keeps in sync with the account). */
(function () {
  var root = document.getElementById('sh-realm'); if (!root) return;
  var DE = root.getAttribute('data-lang') === 'de', P = DE ? '../' : '';
  function L(en, de) { return DE ? de : en; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  var AN = ['The Oath and the Challenge', 'The Messenger Guild', 'Great Houses and the Endless Roll Call', "The Siege Engineer's Three Weapons", 'The Quarter-Turn Spell', 'The Lowest Ceiling', 'The Unbroken Road', 'The Walled Garden', 'Tiles and Canopies', 'The Measure of Distance', 'The Climber and the Tide', "The Wanderer's Return", 'Approaching the Gate', 'The Tower over the Lake', "The Mapmaker's Apprentices", 'The Spell with Endless Words', "The Cart's Climb Gauge", 'Ropes over the Valley', 'The Ledger and the Hourglass', 'Roads Without End', 'The Seer of the Carts', 'The Rails of the Plain'];
  var PH = ['The Archers of the Tower', 'Winter on the Moat', 'Hauling the Winter Supplies', 'The Winter Fair', 'The Castle Well', "The Tumbler's Loop", "The Dancer's Spin", 'The Skittles Alley', "The Astronomer's Tower", 'The Drawbridge', 'The Mill Wheel', 'The Clock Tower', 'The Singing Bridge', 'The Hot-Air Balloon', 'The Engine Room', 'The Ice Palace'];
  var prog = {}; try { prog = JSON.parse(localStorage.getItem('sh-progress') || '{}') || {}; } catch (e) {}
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function places(names, prefix, x0, x1, y0, perRow, dy) {
    return names.map(function (t, i) {
      var r = Math.floor(i / perRow), c = i % perRow; if (r % 2) c = perRow - 1 - c;
      var x = x0 + (x1 - x0) * c / (perRow - 1) + (r % 2 ? -8 : 8) * Math.sin(i * 1.7), y = y0 + r * dy + 14 * Math.sin(i * 2.3);
      var f = prefix + '-' + pad(i + 1) + '.html';
      return { n: i + 1, t: t, f: f, x: Math.round(x), y: Math.round(y), done: !!(prog[f] && prog[f].done) };
    });
  }
  var A = places(AN, 'lesson', 70, 530, 175, 6, 92), Ph = places(PH, 'phys', 70, 530, 735, 6, 92);
  function road(ps) { return ps.map(function (p, i) { if (!i) return 'M' + p.x + ' ' + p.y; var q = ps[i - 1], mx = (p.x + q.x) / 2, my = (p.y + q.y) / 2 + (p.y === q.y ? 0 : 0);
    return 'Q' + (q.y !== p.y && Math.abs(q.y - p.y) > 40 ? (p.x < 300 ? p.x - 40 : p.x + 40) : mx) + ' ' + (Math.abs(q.y - p.y) > 40 ? my : my - 16) + ' ' + p.x + ' ' + p.y; }).join(' '); }
  function trees(x, y, n, seed) { var s = ''; for (var i = 0; i < n; i++) { var tx = x + ((seed * 37 + i * 53) % 90), ty = y + ((seed * 17 + i * 29) % 40); s += '<path d="M' + tx + ' ' + (ty - 14) + 'l-7 14h14z" class="tr"/>'; } return s; }
  function hills(x, y, w) { return '<path d="M' + x + ' ' + y + 'l' + w / 2 + ' -' + w / 2.2 + 'l' + w / 2 + ' ' + w / 2.2 + 'z" class="mt"/><path d="M' + (x + w / 2) + ' ' + (y - w / 2.2) + 'l-' + w / 8 + ' ' + w / 8 + 'h' + w / 4 + 'z" class="snow"/>'; }
  var next = null; A.concat(Ph).some(function (p) { if (!p.done) { next = p; return true; } });
  function dots(ps, cls) { return ps.map(function (p) {
    return '<a href="' + P + p.f + '" class="pl' + (p.done ? ' lit' : '') + (p === next ? ' nx' : '') + ' ' + cls + '" data-f="' + p.f + '" aria-label="' + esc(p.n + '. ' + p.t + (p.done ? L(' (done)', ' (erledigt)') : '')) + '">' +
      '<circle cx="' + p.x + '" cy="' + p.y + '" r="22" class="halo"/><circle cx="' + p.x + '" cy="' + p.y + '" r="15" class="dot"/><text x="' + p.x + '" y="' + (p.y + 5) + '" text-anchor="middle">' + p.n + '</text></a>'; }).join(''); }
  var nA = A.filter(function (p) { return p.done; }).length, nP = Ph.filter(function (p) { return p.done; }).length;
  var svg = '<svg viewBox="0 0 600 1000" role="group" aria-label="' + L('Realm map', 'Karte des Reichs') + '">' +
    '<defs><radialGradient id="rg"><stop offset="0" stop-color="#ffe9a8"/><stop offset="1" stop-color="#ffe9a8" stop-opacity="0"/></radialGradient></defs>' +
    '<rect x="6" y="6" width="588" height="988" rx="22" class="land"/>' +
    '<path d="M6 560 C150 520 260 600 380 555 S560 540 594 575 L594 600 C520 575 430 610 360 590 S170 560 6 590Z" class="water"/>' +
    '<text x="300" y="70" text-anchor="middle" class="rt">' + L('The Kingdom of Analysis', 'Das Königreich der Analysis') + '</text>' +
    '<text x="300" y="98" text-anchor="middle" class="rs">' + nA + ' / 22 ' + L('places lit', 'Orte erleuchtet') + '</text>' +
    hills(18, 150, 60) + hills(520, 150, 64) + hills(470, 520, 50) + trees(20, 470, 6, 1) + trees(250, 120, 4, 2) +
    '<text x="300" y="650" text-anchor="middle" class="rt">' + L('The Castle of Physics', 'Die Burg der Physik') + '</text>' +
    '<text x="300" y="678" text-anchor="middle" class="rs" dy="-2">' + nP + ' / 16 ' + L('places lit', 'Orte erleuchtet') + '</text>' +
    trees(14, 960, 5, 3) + trees(480, 962, 5, 4) + hills(265, 990, 70) +
    '<path d="' + road(A) + '" class="road"/><path d="' + road(Ph) + '" class="road"/>' + dots(A, 'an') + dots(Ph, 'ph') + '</svg>';
  var css = document.createElement('style');
  css.textContent = '#sh-realm svg{width:100%;max-width:640px;display:block;margin:1rem auto}#sh-realm .land{fill:var(--story,#f2e6d0);stroke:var(--story-edge,#94692a);stroke-width:3}' +
    '#sh-realm .water{fill:#7fa7c6;opacity:.55}#sh-realm .tr{fill:#4f7a55;opacity:.7}#sh-realm .mt{fill:var(--muted,#6f6350);opacity:.5}#sh-realm .snow{fill:#fff;opacity:.8}' +
    '#sh-realm .road{fill:none;stroke:var(--story-edge,#94692a);stroke-width:4;stroke-dasharray:2 9;stroke-linecap:round;opacity:.7}' +
    '#sh-realm .rt{font:600 30px var(--font-display,serif);fill:var(--head,#263a2e)}#sh-realm .rs{font:15px var(--font-util,sans-serif);fill:var(--muted,#6f6350)}' +
    '#sh-realm .dot{fill:var(--surface,#fff);stroke:var(--muted,#6f6350);stroke-width:2.5}#sh-realm .halo{fill:none}#sh-realm text{pointer-events:none}#sh-realm .pl text{font:600 14px var(--font-util,sans-serif);fill:var(--ink,#222)}' +
    '#sh-realm .lit .dot{fill:#f2c14e;stroke:#a6781c}#sh-realm .lit .halo{fill:url(#rg)}#sh-realm .lit text{fill:#3a2a00}' +
    '#sh-realm .nx .dot{stroke:var(--accent,#2f5a42);stroke-width:4}#sh-realm .nx .halo{fill:none;stroke:var(--accent,#2f5a42);stroke-width:2;stroke-dasharray:4 4;animation:shr 6s linear infinite;transform-origin:center;transform-box:fill-box}' +
    '@keyframes shr{to{transform:rotate(360deg)}}@media (prefers-reduced-motion:reduce){#sh-realm .nx .halo{animation:none}}' +
    '#sh-realm a.pl:focus{outline:none}#sh-realm a.pl:focus .dot,#sh-realm a.pl:hover .dot{stroke:var(--accent,#2f5a42);stroke-width:4}' +
    '#sh-realm .card{border:1px solid var(--rule,#ccd);border-radius:12px;padding:.8rem 1rem;background:var(--surface);margin:.6rem auto;max-width:640px;min-height:3.2rem}#sh-realm .card .mk-n{font-size:.88rem;opacity:.8}';
  document.head.appendChild(css);
  function card(p) {
    if (!p) return '<strong>' + L('Every place is lit. The whole realm is yours.', 'Alle Orte leuchten. Das ganze Reich gehört dir.') + '</strong>';
    var subj = p.f.indexOf('phys') === 0 ? L('Physics', 'Physik') : 'Analysis';
    return '<div class="mk-n">' + subj + ' · ' + L('Lesson', 'Lektion') + ' ' + p.n + (p.done ? ' · ' + L('done', 'erledigt') + ' ✓' : '') + '</div><strong>' + esc(p.t) + '</strong> · <a href="' + P + p.f + '">' + L('Go there', 'Hingehen') + '</a>';
  }
  root.innerHTML = '<div class="card" id="rl-card">' + (next ? '<div class="mk-n">' + L('Your next place (dashed ring)', 'Dein nächster Ort (gestrichelter Ring)') + '</div>' + card(next).replace(/^<div class="mk-n">[^<]*<\/div>/, '') : card(null)) + '</div>' + svg +
    '<p class="mk-n" style="text-align:center;font-size:.9rem">' + L('Tap a place to see its name. A place lights up when you tick “Done” in that lesson\'s “Your progress” box.', 'Tippe auf einen Ort, um seinen Namen zu sehen. Ein Ort leuchtet auf, sobald du in der Lektion im Feld „Dein Fortschritt“ „Erledigt“ ankreuzt.') + '</p>';
  var all = A.concat(Ph), cardEl = document.getElementById('rl-card');
  root.querySelectorAll('a.pl').forEach(function (a) {
    var p = all.filter(function (q) { return q.f === a.getAttribute('data-f'); })[0];
    function show() { cardEl.innerHTML = card(p); }
    a.addEventListener('mouseenter', show); a.addEventListener('focus', show);
    a.addEventListener('click', function (ev) { if (cardEl.getAttribute('data-sel') !== p.f) { ev.preventDefault(); cardEl.setAttribute('data-sel', p.f); show(); } });
  });
})();
