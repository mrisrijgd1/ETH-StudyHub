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
    { t: 'Having a hard time, not just with the material? <a href="help.html">Here is where to find help</a>, at ETH and beyond. You are not alone.' },
    { t: 'Stuck in a proof? The <a href="moves.html">moves library</a> lists the tricks proofs keep reusing, and when to reach for each one.' },
    { t: 'Ten minutes of <a href="flashcards.html">flashcards</a> a day keeps definitions exam-exact.' },
    { t: 'Not sure where to start? <a href="path.html">Find your path</a> in five quick questions.' },
    { t: 'You can <a href="download.html">download everything</a> and make your own version with Claude, tuned to how you learn.' },
    { t: 'Every story has a formal twin: read the picture first, then the exact version right next to it.' },
    { t: 'The <a href="exam-map.html">exam map</a> shows what the old exams actually ask, so you know what matters most.' },
    { t: 'Does the <b>▶ Listen</b> voice sound robotic? Download a better one for free. iPhone: Settings → Accessibility → Read &amp; Speak → Voices, pick one marked Enhanced or Premium. Android: Settings → Accessibility → Text-to-speech output.' },
    { t: 'Tired eyes? Press <b>▶ Listen</b> next to a lesson’s story or For wonder heading, and your device reads it aloud.' },
    { t: 'Feeling behind? You’re not alone. This hub was built by a student who fell behind too, and caught up in two weeks.' },
    { t: 'Nothing important is missing: every lesson says what is safe to skip, and the <a href="skipped.html">skip list</a> keeps all of it.' },
    { t: 'Every exam question in the lessons links to the original exam, so you can see it exactly as it was asked.' },
    { t: 'Thought of a feature? I’d love to hear it: <a href="' + FORM + '" target="_blank" rel="noopener">send feedback</a>.' }
  ];
  var DE = [
    { t: 'Jede Lektion endet mit einem optionalen Abschnitt <b>Zum Staunen</b>: fünf Minuten für die schöne Seite des Themas, ohne Prüfungsdruck.' },
    { t: 'Wenig Energie heute? Jede Lektion und jede Repetitionseinheit hat oben eine <b>Version für schlechte Tage</b>: ein kleines Minimum, das trotzdem zählt.' },
    { t: 'Geht es dir gerade nicht gut, nicht nur wegen des Stoffs? <a href="help.html">Hier findest du Hilfe</a>, an der ETH und darüber hinaus. Du bist nicht allein.' },
    { t: 'Hängst du in einem Beweis? Die <a href="moves.html">Kniff-Sammlung</a> zeigt die Tricks, die Beweise immer wieder verwenden, und wann du welchen brauchst.' },
    { t: 'Zehn Minuten <a href="flashcards.html">Lernkarten</a> pro Tag, und die Definitionen sitzen prüfungsgenau.' },
    { t: 'Unsicher, wo du anfangen sollst? <a href="path.html">Finde deinen Weg</a> mit fünf kurzen Fragen.' },
    { t: 'Du kannst <a href="download.html">alles herunterladen</a> und mit Claude deine eigene Version machen, passend zu deiner Art zu lernen.' },
    { t: 'Jede Geschichte hat einen formalen Zwilling: zuerst das Bild, direkt daneben die exakte Version.' },
    { t: 'Die <a href="exam-map.html">Prüfungslandkarte</a> zeigt, was die alten Prüfungen wirklich fragen, damit du weisst, was am meisten zählt.' },
    { t: 'Klingt die Stimme bei <b>▶ Anhören</b> blechern? Lade gratis eine bessere herunter. iPhone: Einstellungen → Bedienungshilfen → Vorlesen &amp; Sprechen → Stimmen, eine mit „Erweitert“ oder „Premium“ wählen. Android: Einstellungen → Bedienungshilfen → Sprachausgabe.' },
    { t: 'Müde Augen? Drück <b>▶ Anhören</b> neben der Überschrift der Geschichte oder von „Zum Staunen“, und dein Gerät liest sie dir vor.' },
    { t: 'Fühlst du dich im Rückstand? Du bist nicht allein. Dieser Hub wurde von jemandem gebaut, der auch zurückgefallen war und in zwei Wochen aufgeholt hat.' },
    { t: 'Nichts Wichtiges fehlt: Jede Lektion sagt, was du auslassen kannst, und die <a href="skipped.html">Auslassliste</a> hält alles davon fest.' },
    { t: 'Jede Prüfungsaufgabe in den Lektionen verlinkt auf die Originalprüfung, damit du sie genau so siehst, wie sie gestellt wurde.' },
    { t: 'Hast du eine Idee für eine Funktion? Ich freue mich darauf: <a href="' + FORM + '" target="_blank" rel="noopener">Feedback senden</a>.' }
  ];
  var L = de ? DE : EN;
  // What's new: newest first. Add an entry whenever a lesson or feature goes live (id must be unique).
  // Shown once per visitor as a "New" card, only within 21 days of its date; all entries are listed on tips.html.
  var NEWS = [
  { id: 'design', d: '2026-11-09', en: 'A new storybook design: warm mocha paper, pine green and a soft lantern glow (dark by default; switch to light at the top).', de: 'Ein neues Märchenbuch-Design: warmes Mokka-Papier, Tannengrün und ein sanftes Laternenlicht (standardmässig dunkel; oben auf hell umschalten).' },
  { id: 'community', d: '2026-11-09', en: 'New: comments and questions under every lesson (shared by English and German), and a <a href="community.html">Community</a> page with the forum and an opt-in leaderboard. Reading is open to all; writing needs the optional sign-in, and you can post anonymously.', de: 'Neu: Kommentare und Fragen unter jeder Lektion (gemeinsam für Englisch und Deutsch) und eine <a href="community.html">Community</a>-Seite mit Forum und freiwilliger Bestenliste. Lesen kann jede und jeder; zum Schreiben brauchst du die optionale Anmeldung, und du kannst anonym posten.' },
  { id: 'progress', d: '2026-11-09', en: 'Track your progress: tick off lessons, rate how hard they were and keep notes (box at the end of each lesson, overview under <a href="account.html">Your progress</a>). Works as a guest; signing in with Google is optional and syncs across devices.', de: 'Verfolge deinen Fortschritt: Lektionen abhaken, Schwierigkeit bewerten und Notizen machen (Feld am Ende jeder Lektion, Übersicht unter <a href="account.html">Dein Fortschritt</a>). Funktioniert als Gast; die Anmeldung mit Google ist optional und synchronisiert über deine Geräte.' },
  { id: 'menu', d: '2026-11-09', en: 'New look: a menu with dropdowns on every page (a side menu on big screens), a clearer <a href="index.html">home page</a>, and a light/dark switch (◐ at the top).', de: 'Neuer Auftritt: ein Menü mit Untermenüs auf jeder Seite (auf grossen Bildschirmen seitlich), eine übersichtlichere <a href="index.html">Startseite</a> und ein Hell/Dunkel-Schalter (◐ oben).' },
  { id: 'phys-04', d: '2026-11-09', en: 'Physics <a href="phys-04.html">lesson 4</a> is out: rotating frames, the Coriolis force and the Foucault pendulum, with an animated carousel.', de: 'Physik-<a href="phys-04.html">Lektion 4</a> ist da: rotierende Bezugssysteme, die Corioliskraft und das Foucault-Pendel, mit animiertem Karussell.' },
  { id: 'phys-03', d: '2026-11-09', en: 'Physics <a href="phys-03.html">lesson 3</a> is out: friction, ramps, ropes, drag and the scale in a lift, with three interactive graphs.', de: 'Physik-<a href="phys-03.html">Lektion 3</a> ist da: Reibung, Rampen, Seile, Luftwiderstand und die Waage im Lift, mit drei interaktiven Grafiken.' },
  { id: 'phys-02', d: '2026-11-09', en: 'Physics <a href="phys-02.html">lesson 2</a> is out: Newton’s laws, momentum and the rocket, with graphs you can drag and play with.', de: 'Physik-<a href="phys-02.html">Lektion 2</a> ist da: Newton’sche Axiome, Impuls und Rakete, mit Grafiken zum Ziehen und Ausprobieren.' },
    { id: 'listen', d: '2026-11-07', en: '<b>▶ Listen</b> next to each lesson’s story and For wonder heading reads it aloud.', de: '<b>▶ Anhören</b> neben der Geschichte und „Zum Staunen“ jeder Lektion liest sie dir vor.' },
    { id: 'help', d: '2026-11-07', en: 'A <a href="help.html">Need help?</a> page with places to turn to when studying (or life) gets heavy.', de: 'Eine Seite <a href="help.html">Brauchst du Hilfe?</a> mit Anlaufstellen, wenn das Studium (oder das Leben) schwer wird.' },
    { id: 'dense', d: '2026-11-07', en: '<a href="lesson-06.html">Lesson 6</a> now shows the three equivalent versions of “dense”, with proof.', de: '<a href="lesson-06.html">Lektion 6</a> zeigt jetzt die drei äquivalenten Versionen von „dicht“, mit Beweis.' },
    { id: 'german', d: '2026-11-07', en: 'The whole StudyHub is now also in German: switch with <b>EN | DE</b> at the top.', de: 'Der ganze StudyHub ist jetzt auch auf Deutsch: Wechsle oben mit <b>EN | DE</b>.' }
  ];
  var newsSeen = {};
  try { newsSeen = JSON.parse(get('sh-news-seen') || '{}') || {}; } catch (e) { newsSeen = {}; }
  function freshNews() {
    var now = Date.now();
    for (var n = 0; n < NEWS.length; n++) {
      var it = NEWS[n];
      if (!newsSeen[it.id] && now - Date.parse(it.d + 'T00:00:00Z') < 21 * 864e5) {
        newsSeen[it.id] = 1; set('sh-news-seen', JSON.stringify(newsSeen));
        return { t: de ? it.de : it.en, news: it.id };
      }
    }
    return null;
  }
  var answered = {};
  try { answered = JSON.parse(get('sh-polls') || '{}') || {}; } catch (e) { answered = {}; }
  function track(name, data) { try { if (window.umami && window.umami.track) window.umami.track(name, data); } catch (e) {} }
  var newsBox = document.getElementById('sh-news');
  if (newsBox) {
    var nh = '';
    NEWS.slice(0, 2).forEach(function (it) { nh += '<li><small style="opacity:.7">' + it.d.split('-').reverse().join('.') + '</small> ' + (de ? it.de : it.en) + '</li>'; });
    newsBox.innerHTML = '<ul style="padding-left:1.1rem;margin:.4rem 0">' + nh + '</ul><p style="margin:.3rem 0 0"><a href="tips.html">' + (de ? 'Alle Neuigkeiten und Tipps' : 'All updates and tips') + '</a></p>';
  }
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
      h += '<h2>' + (de ? 'Was ist neu?' : 'What’s new') + '</h2>';
      NEWS.forEach(function (it) { h += '<div class="tp"><small style="opacity:.7">' + it.d.split('-').reverse().join('.') + '</small><br>' + (de ? it.de : it.en) + '</div>'; });
      h += '<h2>' + (de ? 'Wusstest du?' : 'Did you know?') + '</h2>';
      L.forEach(function (c) { if (c.t) h += '<div class="tp">' + c.t + '</div>'; });
      if (L.some(function (c) { return c.q && c.id.indexOf('helped:') !== 0; })) h += '<h2>' + (de ? 'Kurze Fragen' : 'Quick questions') + '</h2>';
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
  var tipsOff = get('sh-tips-off') === '1';
  // Random order, and each tip is shown at most once per browser (shared across EN/DE by position).
  var seen = {};
  try { seen = JSON.parse(get('sh-tips-seen') || '{}') || {}; } catch (e) { seen = {}; }
  function key(n) { var c = L[n]; return c.id ? c.id.split(':')[0] : 't' + n; }
  var i = -1, tip = null;
  function pick() {
    var free = [];
    for (var n = 0; n < L.length; n++) if (!seen[key(n)] && !(L[n].id && answered[L[n].id])) free.push(n);
    if (!free.length) return null;
    i = free[Math.floor(Math.random() * free.length)];
    seen[key(i)] = 1; set('sh-tips-seen', JSON.stringify(seen));
    return L[i];
  }
  tip = freshNews() || (tipsOff ? null : pick());
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
      var head = tip.news ? (de ? 'Neu' : 'New') : tip.q ? (de ? 'Kurze Frage' : 'Quick question') : (de ? 'Wusstest du?' : 'Did you know?');
      var html = '<div class="k">' + head + '</div><div class="t">' + (tip.q || tip.t) + '</div>';
      if (tip.q) html += '<div class="b"><button class="y" data-a="yes">' + (de ? 'Ja' : 'Yes') + '</button><button data-a="no">' + (de ? 'Eher nicht' : 'Not really') + '</button></div>';
      html += '<button class="x" aria-label="' + (de ? 'Schliessen' : 'Close') + '">×</button>' +
        '<div class="f"><span><button class="nx">' + (de ? 'Nächster Tipp ›' : 'Next tip ›') + '</button> · <a class="all" href="tips.html">' + (de ? 'Alle Tipps' : 'All tips') + '</a></span><button class="off">' + (de ? 'Keine Tipps mehr' : 'Don’t show tips') + '</button></div>';
      box.innerHTML = html;
      box.querySelector('.x').onclick = function () { track('tip-close', { i: i }); close(); };
      box.querySelector('.off').onclick = function () { set('sh-tips-off', '1'); track('tips-off', { i: i }); close(); };
      box.querySelector('.nx').onclick = function () { track('tip-next', { i: i }); var t = freshNews() || (tipsOff ? null : pick()); if (t) { tip = t; render(); } else close(); };
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
