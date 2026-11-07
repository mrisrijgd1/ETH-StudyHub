// StudyHub tip card: one small, dismissible tip per page view, cycling through the list, in the page language.
// Polls are answered with one tap and recorded as Umami events ("poll").
(function () {
  if (/(^|\/)(pdf|script|phys-script)\.html$/.test(location.pathname)) return;
  var FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSe39md3GC3hyHaj6P2GtBLJB2W8UnFEi3NOHiRQUEPzbyUqag/viewform';
  var de = (document.documentElement.lang || '').slice(0, 2) === 'de';
  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  var EN = [
    { t: 'Every lesson ends with an optional <b>For wonder</b> section: five minutes of the beautiful side of the topic, no exam pressure.' },
    { t: 'Low-energy day? Every lesson and refresher unit has a <b>bad-day version</b> at the top: a small minimum that still counts.' },
    { t: 'Stuck in a proof? The <a href="moves.html">moves library</a> lists the tricks proofs keep reusing, and when to reach for each one.' },
    { t: 'Ten minutes of <a href="flashcards.html">flashcards</a> a day keeps definitions exam-exact.' },
    { t: 'Not sure where to start? <a href="path.html">Find your path</a> in five quick questions.' },
    { t: 'You can <a href="download.html">download everything</a> and make your own version with Claude, tuned to how you learn.' },
    { t: 'Every story has a formal twin: read the picture first, then the exact version right next to it.' },
    { t: 'The <a href="exam-map.html">exam map</a> shows what the old exams actually ask, so you know what matters most.' },
    { t: 'Feeling behind? You’re not alone. This hub was built by a student who fell behind too, and caught up in two weeks.' },
    { t: 'Nothing important is missing: every lesson says what is safe to skip, and the <a href="skipped.html">skip list</a> keeps all of it.' },
    { t: 'Every exam question in the lessons links to the original exam, so you can see it exactly as it was asked.' },
    { t: 'Having a hard time, not just with the material? <a href="help.html">Here is where to find help</a>, at ETH and beyond. You are not alone.' },
    { q: 'Did this page help you today?', id: 'helped:' + location.pathname.split('/').pop() },
    { q: 'Would you like timed mock exams?', id: 'mocks' },
    { q: 'Would you like a progress system (tick off lessons, see how far you are)?', id: 'progress' },
    { q: 'Would you like a forum to ask questions about each lesson?', id: 'forum' },
    { q: 'Would you like lesson stories retold in a world you love (music, sport, games…)?', id: 'own-world' },
    { t: 'Thought of a feature? I’d love to hear it: <a href="' + FORM + '" target="_blank" rel="noopener">send feedback</a>.' }
  ];
  var DE = [
    { t: 'Jede Lektion endet mit einem optionalen Abschnitt <b>Zum Staunen</b>: fünf Minuten für die schöne Seite des Themas, ohne Prüfungsdruck.' },
    { t: 'Wenig Energie heute? Jede Lektion und jede Repetitionseinheit hat oben eine <b>Version für schlechte Tage</b>: ein kleines Minimum, das trotzdem zählt.' },
    { t: 'Hängst du in einem Beweis? Die <a href="moves.html">Kniff-Sammlung</a> zeigt die Tricks, die Beweise immer wieder verwenden, und wann du welchen brauchst.' },
    { t: 'Zehn Minuten <a href="flashcards.html">Lernkarten</a> pro Tag, und die Definitionen sitzen prüfungsgenau.' },
    { t: 'Unsicher, wo du anfangen sollst? <a href="path.html">Finde deinen Weg</a> mit fünf kurzen Fragen.' },
    { t: 'Du kannst <a href="download.html">alles herunterladen</a> und mit Claude deine eigene Version machen, passend zu deiner Art zu lernen.' },
    { t: 'Jede Geschichte hat einen formalen Zwilling: zuerst das Bild, direkt daneben die exakte Version.' },
    { t: 'Die <a href="exam-map.html">Prüfungslandkarte</a> zeigt, was die alten Prüfungen wirklich fragen, damit du weisst, was am meisten zählt.' },
    { t: 'Fühlst du dich im Rückstand? Du bist nicht allein. Dieser Hub wurde von jemandem gebaut, der auch zurückgefallen war und in zwei Wochen aufgeholt hat.' },
    { t: 'Nichts Wichtiges fehlt: Jede Lektion sagt, was du auslassen kannst, und die <a href="skipped.html">Auslassliste</a> hält alles davon fest.' },
    { t: 'Jede Prüfungsaufgabe in den Lektionen verlinkt auf die Originalprüfung, damit du sie genau so siehst, wie sie gestellt wurde.' },
    { t: 'Geht es dir gerade nicht gut, nicht nur wegen des Stoffs? <a href="help.html">Hier findest du Hilfe</a>, an der ETH und darüber hinaus. Du bist nicht allein.' },
    { q: 'Hat dir diese Seite heute geholfen?', id: 'helped:' + location.pathname.split('/').pop() },
    { q: 'Hättest du gern Probeprüfungen mit Zeitlimit?', id: 'mocks' },
    { q: 'Hättest du gern ein Fortschrittssystem (Lektionen abhaken, sehen, wie weit du bist)?', id: 'progress' },
    { q: 'Hättest du gern ein Forum, um Fragen zu jeder Lektion zu stellen?', id: 'forum' },
    { q: 'Hättest du gern die Geschichten in einer Welt, die du liebst (Musik, Sport, Games …)?', id: 'own-world' },
    { t: 'Hast du eine Idee für eine Funktion? Ich freue mich darauf: <a href="' + FORM + '" target="_blank" rel="noopener">Feedback senden</a>.' }
  ];
  var L = de ? DE : EN;
  var answered = {};
  try { answered = JSON.parse(get('sh-polls') || '{}') || {}; } catch (e) { answered = {}; }
  function track(name, data) { try { if (window.umami && window.umami.track) window.umami.track(name, data); } catch (e) {} }
  var page = document.getElementById('sh-tips-page');
  if (page) {
    var css2 = '#sh-tips-page .tp{border:1px solid var(--rule,#ccd);border-left:4px solid var(--accent,#5b5bd6);border-radius:10px;padding:.7rem .9rem;margin:.6rem 0}' +
      '#sh-tips-page .b{display:flex;gap:.5rem;margin-top:.5rem;flex-wrap:wrap;align-items:center}' +
      '#sh-tips-page button{font:inherit;font-size:.85rem;font-weight:600;padding:.3rem .9rem;border-radius:999px;border:1px solid var(--accent,#5b5bd6);background:none;color:var(--accent,#5b5bd6);cursor:pointer}' +
      '#sh-tips-page button.on{background:var(--accent,#5b5bd6);color:#fff}#sh-tips-page .tg{margin:1rem 0 1.5rem}';
    var st2 = document.createElement('style'); st2.textContent = css2; document.head.appendChild(st2);
    function draw() {
      var off = get('sh-tips-off') === '1';
      var h = '<div class="tg"><strong>' + (de ? 'Tipp-Pop-up: ' : 'Tip pop-up: ') + '</strong>' + (off ? (de ? 'aus' : 'off') : (de ? 'an' : 'on')) +
        ' <button id="sh-tg">' + (off ? (de ? 'Wieder einschalten' : 'Turn back on') : (de ? 'Ausschalten' : 'Turn off')) + '</button></div>';
      h += '<h2>' + (de ? 'Wusstest du?' : 'Did you know?') + '</h2>';
      L.forEach(function (c) { if (c.t) h += '<div class="tp">' + c.t + '</div>'; });
      h += '<h2>' + (de ? 'Kurze Fragen' : 'Quick questions') + '</h2>';
      L.forEach(function (c, n) {
        if (!c.q || c.id.indexOf('helped:') === 0) return;
        var a = answered[c.id];
        h += '<div class="tp">' + c.q + '<div class="b"><button data-n="' + n + '" data-a="yes"' + (a === 'yes' ? ' class="on"' : '') + '>' + (de ? 'Ja' : 'Yes') +
          '</button><button data-n="' + n + '" data-a="no"' + (a === 'no' ? ' class="on"' : '') + '>' + (de ? 'Eher nicht' : 'Not really') + '</button></div></div>';
      });
      page.innerHTML = h;
      document.getElementById('sh-tg').onclick = function () { set('sh-tips-off', off ? '0' : '1'); track(off ? 'tips-on' : 'tips-off', { from: 'page' }); draw(); };
      var bs = page.querySelectorAll('.b button');
      for (var j = 0; j < bs.length; j++) bs[j].onclick = function () {
        var c = L[+this.getAttribute('data-n')], a = this.getAttribute('data-a');
        if (answered[c.id] !== a) track('poll', { q: c.id, a: a, lang: de ? 'de' : 'en' });
        answered[c.id] = a; set('sh-polls', JSON.stringify(answered)); draw();
      };
    }
    draw();
    return;
  }
  if (get('sh-tips-off') === '1') return;
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
  var css = '#sh-tip{position:fixed;right:16px;bottom:16px;z-index:50;max-width:340px;width:calc(100% - 32px);box-sizing:border-box;' +
    'background:var(--surface,#fff);color:var(--ink,#222);border:1px solid var(--rule,#ccd);border-left:4px solid var(--accent,#5b5bd6);' +
    'border-radius:12px;padding:.75rem 2.2rem .75rem .9rem;font:inherit;font-size:.9rem;line-height:1.45;box-shadow:0 6px 24px rgba(0,0,0,.12);' +
    'opacity:0;transform:translateY(8px);transition:opacity .3s,transform .3s}' +
    '#sh-tip.on{opacity:1;transform:none}#sh-tip .k{font-size:.72rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--accent,#5b5bd6);margin-bottom:.2rem}' +
    '#sh-tip .x{position:absolute;top:.35rem;right:.4rem;border:0;background:none;color:inherit;font-size:1.25rem;line-height:1;cursor:pointer;padding:.2rem .4rem;opacity:.6}' +
    '#sh-tip .x:hover{opacity:1}#sh-tip .b{display:flex;gap:.5rem;margin-top:.55rem;flex-wrap:wrap}' +
    '#sh-tip .b button{font:inherit;font-size:.85rem;font-weight:600;padding:.3rem .9rem;border-radius:999px;border:1px solid var(--accent,#5b5bd6);background:none;color:var(--accent,#5b5bd6);cursor:pointer}' +
    '#sh-tip .b button.y{background:var(--accent,#5b5bd6);color:#fff}#sh-tip .f{display:flex;justify-content:space-between;align-items:center;margin-top:.55rem}#sh-tip .nx{font:inherit;font-size:.8rem;font-weight:600;color:var(--accent,#5b5bd6);background:none;border:0;padding:0;cursor:pointer}#sh-tip .all{font-size:.8rem;font-weight:600;color:var(--accent,#5b5bd6)}#sh-tip .off{font:inherit;font-size:.72rem;color:var(--muted,#777);background:none;border:0;padding:0;cursor:pointer;text-decoration:underline}' +
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
        '<div class="f"><span><button class="nx">' + (de ? 'Nächster Tipp ›' : 'Next tip ›') + '</button> · <a class="all" href="tips.html">' + (de ? 'Alle Tipps' : 'All tips') + '</a></span><button class="off">' + (de ? 'Keine Tipps mehr' : 'Don’t show tips') + '</button></div>';
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
