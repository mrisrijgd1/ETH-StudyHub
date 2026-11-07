// StudyHub tip card: one small, dismissible tip per page view, cycling through the list, in the page language.
// Polls are answered with one tap and recorded as Umami events ("poll").
(function () {
  if (/(^|\/)(pdf|script|phys-script)\.html$/.test(location.pathname)) return;
  var FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSe39md3GC3hyHaj6P2GtBLJB2W8UnFEi3NOHiRQUEPzbyUqag/viewform';
  var de = (document.documentElement.lang || '').slice(0, 2) === 'de';
  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  if (get('sh-tips-off') === '1') return;
  var EN = [
    { t: 'Every lesson ends with an optional <b>For wonder</b> section: five minutes of the beautiful side of the topic, no exam pressure.' },
    { t: 'Low-energy day? Each refresher unit has a <b>bad-day version</b>: a small minimum that still counts.' },
    { t: 'Stuck in a proof? The <a href="moves.html">moves library</a> lists the tricks proofs keep reusing, and when to reach for each one.' },
    { t: 'Ten minutes of <a href="flashcards.html">flashcards</a> a day keeps definitions exam-exact.' },
    { t: 'Not sure where to start? <a href="path.html">Find your path</a> in five quick questions.' },
    { t: 'You can <a href="download.html">download everything</a> and make your own version with Claude, tuned to how you learn.' },
    { t: 'Every story has a formal twin: read the picture first, then the exact version right next to it.' },
    { t: 'The <a href="exam-map.html">exam map</a> shows what the old exams actually ask, so you know what matters most.' },
    { t: 'Prefer German? Use the <b>Deutsch</b> button at the top of every page.' },
    { q: 'Would you like a progress system (tick off lessons, see how far you are)?', id: 'progress' },
    { q: 'Would you like a forum to ask questions about each lesson?', id: 'forum' },
    { q: 'Would you like lesson stories retold in a world you love (music, sport, games…)?', id: 'own-world' },
    { t: 'Thought of a feature? I’d love to hear it: <a href="' + FORM + '" target="_blank" rel="noopener">send feedback</a>.' }
  ];
  var DE = [
    { t: 'Jede Lektion endet mit einem optionalen Abschnitt <b>Zum Staunen</b>: fünf Minuten für die schöne Seite des Themas, ohne Prüfungsdruck.' },
    { t: 'Wenig Energie heute? Jede Repetitionseinheit hat eine <b>Version für schlechte Tage</b>: ein kleines Minimum, das trotzdem zählt.' },
    { t: 'Hängst du in einem Beweis? Die <a href="moves.html">Kniff-Sammlung</a> zeigt die Tricks, die Beweise immer wieder verwenden, und wann du welchen brauchst.' },
    { t: 'Zehn Minuten <a href="flashcards.html">Lernkarten</a> pro Tag, und die Definitionen sitzen prüfungsgenau.' },
    { t: 'Unsicher, wo du anfangen sollst? <a href="path.html">Finde deinen Weg</a> mit fünf kurzen Fragen.' },
    { t: 'Du kannst <a href="download.html">alles herunterladen</a> und mit Claude deine eigene Version machen, passend zu deiner Art zu lernen.' },
    { t: 'Jede Geschichte hat einen formalen Zwilling: zuerst das Bild, direkt daneben die exakte Version.' },
    { t: 'Die <a href="exam-map.html">Prüfungslandkarte</a> zeigt, was die alten Prüfungen wirklich fragen, damit du weisst, was am meisten zählt.' },
    { t: 'Lieber Englisch? Oben auf jeder Seite gibt es den Knopf <b>English</b>.' },
    { q: 'Hättest du gern ein Fortschrittssystem (Lektionen abhaken, sehen, wie weit du bist)?', id: 'progress' },
    { q: 'Hättest du gern ein Forum, um Fragen zu jeder Lektion zu stellen?', id: 'forum' },
    { q: 'Hättest du gern die Geschichten in einer Welt, die du liebst (Musik, Sport, Games …)?', id: 'own-world' },
    { t: 'Hast du eine Idee für eine Funktion? Ich freue mich darauf: <a href="' + FORM + '" target="_blank" rel="noopener">Feedback senden</a>.' }
  ];
  var L = de ? DE : EN;
  var answered = {};
  try { answered = JSON.parse(get('sh-polls') || '{}') || {}; } catch (e) { answered = {}; }
  var i = parseInt(get('sh-tip-i') || '0', 10) || 0, tip = null;
  function pick() {
    for (var n = 0; n < L.length; n++) {
      var c = L[(i + n) % L.length];
      if (!(c.id && answered[c.id])) { i = (i + n) % L.length; set('sh-tip-i', String((i + 1) % L.length)); return c; }
    }
    return null;
  }
  tip = pick();
  if (!tip) return;
  function track(name, data) { try { if (window.umami && window.umami.track) window.umami.track(name, data); } catch (e) {} }
  var css = '#sh-tip{position:fixed;right:16px;bottom:16px;z-index:50;max-width:340px;width:calc(100% - 32px);box-sizing:border-box;' +
    'background:var(--surface,#fff);color:var(--ink,#222);border:1px solid var(--rule,#ccd);border-left:4px solid var(--accent,#5b5bd6);' +
    'border-radius:12px;padding:.75rem 2.2rem .75rem .9rem;font:inherit;font-size:.9rem;line-height:1.45;box-shadow:0 6px 24px rgba(0,0,0,.12);' +
    'opacity:0;transform:translateY(8px);transition:opacity .3s,transform .3s}' +
    '#sh-tip.on{opacity:1;transform:none}#sh-tip .k{font-size:.72rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--accent,#5b5bd6);margin-bottom:.2rem}' +
    '#sh-tip .x{position:absolute;top:.35rem;right:.4rem;border:0;background:none;color:inherit;font-size:1.25rem;line-height:1;cursor:pointer;padding:.2rem .4rem;opacity:.6}' +
    '#sh-tip .x:hover{opacity:1}#sh-tip .b{display:flex;gap:.5rem;margin-top:.55rem;flex-wrap:wrap}' +
    '#sh-tip .b button{font:inherit;font-size:.85rem;font-weight:600;padding:.3rem .9rem;border-radius:999px;border:1px solid var(--accent,#5b5bd6);background:none;color:var(--accent,#5b5bd6);cursor:pointer}' +
    '#sh-tip .b button.y{background:var(--accent,#5b5bd6);color:#fff}#sh-tip .f{display:flex;justify-content:space-between;align-items:center;margin-top:.55rem}#sh-tip .nx{font:inherit;font-size:.8rem;font-weight:600;color:var(--accent,#5b5bd6);background:none;border:0;padding:0;cursor:pointer}#sh-tip .off{font:inherit;font-size:.72rem;color:var(--muted,#777);background:none;border:0;padding:0;cursor:pointer;text-decoration:underline}' +
    '@media print{#sh-tip{display:none}}';
  function show() {
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    var box = document.createElement('aside'); box.id = 'sh-tip'; box.setAttribute('role', 'note');
    document.body.appendChild(box);
    function close() { box.classList.remove('on'); setTimeout(function () { box.remove(); }, 300); }
    function render() {
      var head = tip.q ? (de ? 'Kurze Frage' : 'Quick question') : (de ? 'Wusstest du?' : 'Did you know?');
      var html = '<div class="k">' + head + '</div><div class="t">' + (tip.q || tip.t) + '</div>';
      if (tip.q) html += '<div class="b"><button class="y" data-a="yes">' + (de ? 'Ja' : 'Yes') + '</button><button data-a="no">' + (de ? 'Eher nicht' : 'Not really') + '</button></div>';
      html += '<button class="x" aria-label="' + (de ? 'Schliessen' : 'Close') + '">×</button>' +
        '<div class="f"><button class="nx">' + (de ? 'Nächster Tipp ›' : 'Next tip ›') + '</button><button class="off">' + (de ? 'Keine Tipps mehr' : 'Don’t show tips') + '</button></div>';
      box.innerHTML = html;
      box.querySelector('.x').onclick = function () { track('tip-close', { i: i }); close(); };
      box.querySelector('.off').onclick = function () { set('sh-tips-off', '1'); track('tips-off', { i: i }); close(); };
      box.querySelector('.nx').onclick = function () { track('tip-next', { i: i }); i = (i + 1) % L.length; var t = pick(); if (t) { tip = t; render(); } else close(); };
      var links = box.querySelectorAll('.t a');
      for (var k = 0; k < links.length; k++) links[k].addEventListener('click', function () { track('tip-click', { i: i, href: this.getAttribute('href') }); });
      if (tip.q) {
        var bs = box.querySelectorAll('.b button');
        for (var j = 0; j < bs.length; j++) bs[j].onclick = function () {
          var a = this.getAttribute('data-a');
          track('poll', { q: tip.id, a: a, lang: de ? 'de' : 'en' });
          answered[tip.id] = a; set('sh-polls', JSON.stringify(answered));
          box.querySelector('.b').outerHTML = '<div class="b" style="font-weight:600">' + (de ? 'Danke! ' : 'Thanks! ') +
            '<a href="' + FORM + '" target="_blank" rel="noopener">' + (de ? 'Mehr sagen?' : 'Tell me more?') + '</a></div>';
        };
      }
    }
    render();
    requestAnimationFrame(function () { box.classList.add('on'); });
  }
  setTimeout(show, 2500);
})();
