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
    { t: 'Not sure where to start? <a href="path.html">Five quick questions</a> suggest a route for you.' },
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
  { id: 'intro-video', d: '2026-11-23', en: 'New: a <a href="index.html#intro-video">short video</a> that shows StudyHub in under two minutes.', de: 'Neu: ein <a href="index.html#intro-video">kurzes Video</a>, das StudyHub in unter zwei Minuten zeigt (auf Englisch).' },
  { id: 'search-icon', d: '2026-11-23', en: 'New: the search icon at the top finds any lesson, exercise or page.', de: 'Neu: Die Lupe oben findet jede Lektion, Aufgabe und Seite.' },
  { id: 'refresher-all', d: '2026-11-23', en: 'All 12 Analysis <a href="analysis.html#refresher">refresher units</a> are online.', de: 'Alle 12 Analysis-<a href="analysis.html#refresher">Repetitionseinheiten</a> sind online (vorerst auf Englisch).' },
  { id: 'linalg-redo-1', d: '2026-11-15', en: 'The rebuilt <a href="linalg.html">Linear Algebra I</a> course is ready to explore.', de: 'Der neu aufgebaute Kurs <a href="../linalg.html">Lineare Algebra I</a> ist bereit.' },
  { id: 'phys-depth', d: '2026-11-14', en: 'All 16 <a href="physics.html">Physics lessons</a> now teach each worked example step by step, like Analysis.', de: 'Alle 16 <a href="physics.html">Physik-Lektionen</a> erklären jetzt jedes Beispiel Schritt für Schritt, wie Analysis.' },
  { id: 'progress-one', d: '2026-11-14', en: '<a href="account.html">My StudyHub</a> now shows how far you are in every subject, in one place.', de: '<a href="account.html">Mein StudyHub</a> zeigt jetzt an einem Ort, wie weit du in jedem Fach bist.' },
  { id: 'clarity-1', d: '2026-11-14', en: 'Easier to find your way: <a href="practice.html">Practice</a> is sorted by subject, and Linear Algebra has its own <a href="linalg.html">page</a>.', de: 'Leichter zurechtfinden: <a href="practice.html">Üben</a> ist nach Fach geordnet, und Lineare Algebra hat eine eigene <a href="linalg.html">Seite</a>.' },
  { id: 'linalg-1-5', d: '2026-11-14', en: 'New: Linear Algebra I, lessons <a href="linalg-01.html">1</a> to <a href="linalg-05.html">5</a>.', de: 'Neu: Lineare Algebra I, Lektionen <a href="../linalg-01.html">1</a> bis <a href="../linalg-05.html">5</a> (vorerst auf Englisch).' },
  { id: 'phys-sweep', d: '2026-11-14', en: 'All 16 Physics lessons got a final review, with new interactive graphs in <a href="phys-01.html">lesson 1</a>.', de: 'Alle 16 Physik-Lektionen wurden ein letztes Mal durchgesehen, mit neuen interaktiven Grafiken in <a href="phys-01.html">Lektion 1</a>.' },
  { id: 'toolbox', d: '2026-11-14', en: 'New: the <a href="toolbox.html">Toolbox</a>, one search over every definition, theorem and exercise.', de: 'Neu: der <a href="toolbox.html">Werkzeugkasten</a>, eine Suche über jede Definition, jeden Satz und jede Aufgabe.' },
  { id: 'phys-14-16', d: '2026-11-13', en: 'Physics lessons <a href="phys-14.html">14</a>, <a href="phys-15.html">15</a> and <a href="phys-16.html">16</a> are out: heat and the ideal gas, cyclic processes and the Carnot engine, and entropy, real gases and phase transitions, with eight interactive graphs. That completes all 16 Physics I lessons.', de: 'Die Physik-Lektionen <a href="phys-14.html">14</a>, <a href="phys-15.html">15</a> und <a href="phys-16.html">16</a> sind da: Wärme und das ideale Gas, Kreisprozesse und die Carnot-Maschine, und Entropie, reale Gase und Phasenübergänge, mit acht interaktiven Grafiken. Damit sind alle 16 Lektionen von Physik I fertig.' },
  { id: 'phys-11-13', d: '2026-11-13', en: 'Physics lessons <a href="phys-11.html">11</a>, <a href="phys-12.html">12</a> and <a href="phys-13.html">13</a> are out: rotation and rolling, oscillations and pendulums, and resonance and coupled pendulums, with nine interactive graphs.', de: 'Die Physik-Lektionen <a href="phys-11.html">11</a>, <a href="phys-12.html">12</a> und <a href="phys-13.html">13</a> sind da: Drehung und Rollen, Schwingungen und Pendel, und Resonanz und gekoppelte Pendel, mit neun interaktiven Grafiken.' },
  { id: 'phys-08-10', d: '2026-11-13', en: 'Physics lessons <a href="phys-08.html">8</a>, <a href="phys-09.html">9</a> and <a href="phys-10.html">10</a> are out: collisions, gravitation and the planets, and rigid bodies at rest, with seven interactive graphs.', de: 'Die Physik-Lektionen <a href="phys-08.html">8</a>, <a href="phys-09.html">9</a> und <a href="phys-10.html">10</a> sind da: Stösse, Gravitation und Planeten, und starre Körper in Ruhe, mit sieben interaktiven Grafiken.' },
  { id: 'phys-05-07', d: '2026-11-13', en: 'Physics lessons <a href="phys-05.html">5</a>, <a href="phys-06.html">6</a> and <a href="phys-07.html">7</a> are out: work and power, energy conservation and the loop, angular momentum and the centre of mass, with eight interactive graphs.', de: 'Die Physik-Lektionen <a href="phys-05.html">5</a>, <a href="phys-06.html">6</a> und <a href="phys-07.html">7</a> sind da: Arbeit und Leistung, Energieerhaltung und der Looping, Drehimpuls und Schwerpunkt, mit acht interaktiven Grafiken.' },
  { id: 'unit34', d: '2026-11-11', en: 'Refresher <a href="refresher-03.html">unit 3</a> and <a href="refresher-04.html">unit 4</a> are online.', de: 'Repetitions-<a href="refresher-03.html">Einheit 3</a> und <a href="refresher-04.html">Einheit 4</a> sind online (vorerst auf Englisch).' },
  { id: 'unit2', d: '2026-11-10', en: 'Refresher <a href="refresher-02.html">unit 2</a> is online (lessons 4–6: √3, the triangle inequality, a supremum), with new flashcards for lessons 4–6.', de: 'Repetitions-<a href="refresher-02.html">Einheit 2</a> ist online (Lektionen 4–6: √3, die Dreiecksungleichung, ein Supremum, vorerst auf Englisch), dazu neue Lernkarten für die Lektionen 4–6 (auf Englisch).' },
  { id: 'design', d: '2026-11-09', en: 'A new storybook design, with warm paper and a soft lantern glow. Pick it under Design at the top.', de: 'Ein neues Märchenbuch-Design mit warmem Papier und sanftem Laternenlicht. Du findest es oben unter Design.' },
  { id: 'community', d: '2026-11-09', en: 'New: comments under every lesson, and a <a href="community.html">Community</a> page with the forum.', de: 'Neu: Kommentare unter jeder Lektion und eine <a href="community.html">Community</a>-Seite mit Forum.' },
  { id: 'progress', d: '2026-11-09', en: 'Tick off lessons, rate them and keep notes, also as a guest. <a href="account.html">See your progress</a>.', de: 'Hake Lektionen ab, bewerte sie und mach Notizen, auch als Gast. <a href="account.html">Zu deinem Fortschritt</a>.' },
  { id: 'menu', d: '2026-11-09', en: 'A clearer <a href="index.html">home page</a> and a menu on every page.', de: 'Eine übersichtlichere <a href="index.html">Startseite</a> und ein Menü auf jeder Seite.' },
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
    NEWS.slice(0, 2).forEach(function (it) { nh += '<li><small class="sh-news-date">' + it.d.split('-').reverse().join('.') + '</small> ' + (de ? it.de : it.en) + '</li>'; });
    newsBox.innerHTML = '<ul class="sh-news-list">' + nh + '</ul><p class="sh-news-all"><a href="tips.html">' + (de ? 'Alle Neuigkeiten und Tipps' : 'All updates and tips') + '</a></p>';
  }
  var page = document.getElementById('sh-tips-page');
  if (page) {
    var css2 = '#sh-tips-page .tp{border:1px solid var(--rule,#ccd);border-left:4px solid var(--accent,#5b5bd6);border-radius:10px;padding:.7rem .9rem;margin:.6rem 0}' +
      '#sh-tips-page .b{display:flex;gap:.5rem;margin-top:.5rem;flex-wrap:wrap;align-items:center}' +
      '#sh-tips-page button{font:inherit;font-size:.85rem;font-weight:600;min-height:44px;padding:.4rem 1rem;border-radius:8px;border:1px solid var(--accent,#5b5bd6);background:none;color:var(--accent,#5b5bd6);cursor:pointer}' +
      '#sh-tips-page button.on{background:var(--accent,#5b5bd6);color:#fff}#sh-tips-page .tg{margin:1rem 0 1.5rem}';
    var st2 = document.createElement('style'); st2.textContent = css2; document.head.appendChild(st2);
    function draw() {
      var off = get('sh-tips-off') === '1';
      var h = '<div class="tg"><strong>' + (de ? 'Tipp-Pop-up: ' : 'Tip pop-up: ') + '</strong>' + (off ? (de ? 'aus' : 'off') : (de ? 'an' : 'on')) +
        ' <button id="sh-tg">' + (off ? (de ? 'Wieder einschalten' : 'Turn back on') : (de ? 'Ausschalten' : 'Turn off')) + '</button></div>';
      h += '<h2>' + (de ? 'Was ist neu?' : 'What’s new') + '</h2>';
      NEWS.forEach(function (it) { h += '<div class="tp"><small class="sh-news-date">' + it.d.split('-').reverse().join('.') + '</small><br>' + (de ? it.de : it.en) + '</div>'; });
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
  tip = tipsOff ? null : (freshNews() || pick()); // "Don't show tips" also silences the What's-new cards
  if (!tip) return;
  var css = '#sh-tip{position:fixed;right:16px;bottom:16px;z-index:30;max-width:340px;width:calc(100% - 32px);box-sizing:border-box;' +
    'background:var(--surface,#fff);color:var(--ink,#222);border:1px solid var(--rule,#ccd);border-left:4px solid var(--accent,#5b5bd6);' +
    'border-radius:12px;padding:.85rem 3rem .85rem 1rem;font:inherit;font-size:.9rem;line-height:1.45;box-shadow:0 6px 24px rgba(0,0,0,.12);' +
    'opacity:0;transform:translateY(8px);transition:opacity .3s,transform .3s}' +
    '#sh-tip.on{opacity:1;transform:none}#sh-tip .t{overflow-wrap:anywhere}#sh-tip .k{font-size:.72rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--accent,#5b5bd6);margin-bottom:.2rem}' +
    '#sh-tip .x{position:absolute;top:4px;right:4px;width:44px;height:44px;display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:8px;background:none;color:inherit;font-size:1.25rem;line-height:1;cursor:pointer;padding:0;opacity:.7}' +
    '#sh-tip .x:hover{opacity:1}#sh-tip .b{display:flex;gap:.5rem;margin-top:.55rem;flex-wrap:wrap}' +
    '#sh-tip .b button{font:inherit;font-size:.85rem;font-weight:600;min-height:44px;padding:.35rem .95rem;border-radius:8px;border:1px solid var(--accent,#5b5bd6);background:none;color:var(--accent,#5b5bd6);cursor:pointer}' +
    '#sh-tip .b button.y{background:var(--accent,#5b5bd6);color:#fff}#sh-tip .f{display:flex;justify-content:space-between;align-items:center;margin-top:.55rem}#sh-tip .nx{font:inherit;font-size:.8rem;font-weight:600;color:var(--accent,#5b5bd6);background:none;border:0;padding:0;cursor:pointer}#sh-tip .all{font-size:.8rem;font-weight:600;color:var(--accent,#5b5bd6)}#sh-tip .off{font:inherit;font-size:.72rem;color:var(--muted,#777);background:none;border:0;padding:0;cursor:pointer;text-decoration:underline}' +
    '@media(max-width:640px){#sh-tip{position:relative;left:auto;right:auto;top:auto;bottom:auto;width:100%;max-width:none;margin:1rem 0;padding:.75rem 3rem .75rem .9rem;font-size:.85rem;z-index:auto;box-shadow:none}#sh-tip .t{display:block;overflow:visible}#sh-tip .nx,#sh-tip .all,#sh-tip .off{min-height:44px;display:inline-flex;align-items:center}}' +
    '@media print{#sh-tip{display:none}}';
  function placeTip(box) {
    var main = document.querySelector('main');
    if (matchMedia('(max-width:640px)').matches && main) {
      var intro = main.querySelector(':scope > header, :scope > .page-head, :scope > .hero, :scope > .app-heading');
      if (intro) intro.after(box); else main.prepend(box);
    } else document.body.appendChild(box);
  }
  function show() {
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    var box = document.createElement('aside'); box.id = 'sh-tip'; box.setAttribute('role', 'note');
    var phone = matchMedia('(max-width:640px)');
    function reposition() { placeTip(box); }
    placeTip(box);
    phone.addEventListener('change', reposition);
    function close() { phone.removeEventListener('change', reposition); box.classList.remove('on'); setTimeout(function () { box.remove(); }, 300); }
    function render() {
      var head = tip.news ? (de ? 'Neu' : 'New') : tip.q ? (de ? 'Kurze Frage' : 'Quick question') : (de ? 'Wusstest du?' : 'Did you know?');
      var html = '<div class="k">' + head + '</div><div class="t">' + (tip.q || tip.t) + '</div>';
      if (tip.q) html += '<div class="b"><button class="y" data-a="yes">' + (de ? 'Ja' : 'Yes') + '</button><button data-a="no">' + (de ? 'Eher nicht' : 'Not really') + '</button></div>';
      html += '<button class="x" aria-label="' + (de ? 'Schliessen' : 'Close') + '">×</button>' +
        '<div class="f"><span><button class="nx">' + (de ? 'Nächster Tipp ›' : 'Next tip ›') + '</button> · <a class="all" href="tips.html">' + (de ? 'Alle Tipps' : 'All tips') + '</a></span><button class="off">' + (de ? 'Keine Tipps mehr' : 'Don’t show tips') + '</button></div>';
      box.innerHTML = html;
      box.querySelector('.x').onclick = function () { track('tip-close', { i: i }); close(); };
      box.querySelector('.off').onclick = function () { set('sh-tips-off', '1'); track('tips-off', { i: i }); close(); };
      box.querySelector('.nx').onclick = function () { track('tip-next', { i: i }); var t = tipsOff ? null : (freshNews() || pick()); if (t) { tip = t; render(); } else close(); };
      var links = box.querySelectorAll('.t a');
      for (var k = 0; k < links.length; k++) links[k].addEventListener('click', function () { track('tip-click', { i: i, href: this.getAttribute('href') }); });
      if (tip.q) {
        var bs = box.querySelectorAll('.b button');
        for (var j = 0; j < bs.length; j++) bs[j].onclick = function () {
          var a = this.getAttribute('data-a');
          track('poll', { q: tip.id, a: a, lang: de ? 'de' : 'en' });
          answered[tip.id] = a; set('sh-polls', JSON.stringify(answered));
          box.querySelector('.b').outerHTML = '<div class="b sh-tip-thanks">' + (de ? 'Danke! ' : 'Thanks! ') +
            '<a href="' + FORM + '" target="_blank" rel="noopener">' + (de ? 'Mehr sagen?' : 'Tell me more?') + '</a></div>';
        };
      }
    }
    render();
    requestAnimationFrame(function () { box.classList.add('on'); });
  }
  setTimeout(show, 2500);
})();
