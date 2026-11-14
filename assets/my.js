/* My StudyHub page: plan, notes, questions, flashcards, performance, design, history.
   Data lives in Supabase (my_items, results, mocks, progress; every change versioned in my_versions).
   The same data is read and written by the student's own AI through the StudyHub connector. */
(function () {
  var root = document.getElementById('sh-my'); if (!root) return;
  var DE = root.getAttribute('data-lang') === 'de';
  function L(en, de) { return DE ? de : en; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  var S = null, items = {};
  var css = document.createElement('style');
  css.textContent = '#sh-my section{margin:2.2rem 0}#sh-my textarea,#sh-my input[type=text],#sh-my select{width:100%;box-sizing:border-box;font:inherit;padding:.5rem;border-radius:8px;border:1px solid var(--rule,#ccd);background:var(--surface,#fff);color:inherit}' +
    '#sh-my textarea{min-height:8rem}#sh-my .row{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center;margin:.6rem 0}#sh-my .row>*{flex:1 1 10rem}#sh-my .btns{display:flex;flex-wrap:wrap;gap:.5rem;margin:.6rem 0}' +
    '#sh-my button{font:inherit;font-size:.92rem;padding:.4rem .95rem;border-radius:999px;border:1px solid var(--accent,#5b5bd6);background:none;color:var(--accent,#5b5bd6);cursor:pointer}#sh-my button.main{background:var(--accent,#5b5bd6);color:var(--on,#fff)}' +
    '#sh-my ul.it{list-style:none;padding:0}#sh-my ul.it li{border:1px solid var(--rule,#ccd);border-radius:10px;padding:.6rem .8rem;margin:.5rem 0;background:var(--surface)}#sh-my .meta{font-size:.82rem;opacity:.75}' +
    '#sh-my .st{font-size:.88rem;opacity:.8;min-height:1.2em}#sh-my .card{border:1px solid var(--rule);border-radius:14px;padding:1.2rem;margin:.8rem 0;background:var(--surface);min-height:5rem}' +
    '#sh-my table{width:100%;border-collapse:collapse;font-size:.92rem}#sh-my td,#sh-my th{text-align:left;padding:.35rem .4rem;border-bottom:1px solid var(--rule,#ccd)}#sh-my .toc a{margin-right:.9rem;white-space:nowrap}';
  document.head.appendChild(css);

  function status(id, t) { var e = document.getElementById(id); if (e) e.textContent = t; }
  function nid() { return Math.random().toString(36).slice(2, 10); }

  function load() {
    return S.sb.from('my_items').select('key,content,updated_at').then(function (r) {
      items = {}; (r.data || []).forEach(function (x) { items[x.key] = x.content; });
    });
  }
  function put(key, content, st) {
    items[key] = content;
    return S.sb.from('my_items').upsert({ user_id: S.user.id, key: key, content: content, source: 'site', updated_at: new Date().toISOString() })
      .then(function (r) { status(st, r.error ? L('Could not save: ', 'Speichern fehlgeschlagen: ') + r.error.message : L('Saved. ', 'Gespeichert. ') + new Date().toLocaleTimeString()); return r; });
  }
  function undo(key, st) {
    return S.sb.from('my_versions').select('id').eq('key', key).order('id', { ascending: false }).limit(2).then(function (r) {
      var v = r.data || []; if (v.length < 2) { status(st, L('Nothing to undo.', 'Nichts rückgängig zu machen.')); return; }
      return S.sb.rpc('my_restore_version', { p_id: v[1].id }).then(function (x) { if (x.error) status(st, x.error.message); else draw(); });
    });
  }

  function draw() {
    if (!S || !S.user) return drawGuest();
    load().then(function () {
      root.innerHTML =
        '<p class="toc"><a href="#my-plan">' + L('Plan', 'Plan') + '</a><a href="#my-notes">' + L('Notes', 'Notizen') + '</a><a href="#my-questions">' + L('Questions', 'Fragen') + '</a><a href="#my-cards">' + L('Flashcards', 'Lernkarten') + '</a><a href="#performance">' + L('Performance', 'Leistung') + '</a><a href="#my-suggestions">' + L('Suggestions', 'Vorschläge') + '</a><a href="#my-design">' + L('Design', 'Design') + '</a><a href="#my-history">' + L('History', 'Verlauf') + '</a></p>' +
        '<div class="box"><strong>' + L('What should I do today?', 'Was mache ich heute?') + '</strong> ' + L('Ask your own AI this question once the ', 'Frag das deine eigene KI, sobald der ') + '<a href="connect.html">' + L('connector', 'Connector') + '</a>' + L(' is added. It looks at your progress, marks and mistakes and suggests at most three small tasks.', ' eingerichtet ist. Sie schaut auf Fortschritt, Resultate und Fehler und schlägt höchstens drei kleine Aufgaben vor.') + '</div>' +
        secPlan() + secList('notes', L('Notes', 'Notizen'), L('Anything you want to keep: a trick, a summary, a reminder.', 'Alles, was du behalten willst: ein Trick, eine Zusammenfassung, eine Erinnerung.')) +
        secList('questions', L('Questions', 'Fragen'), L('Questions to ask in the exercise class, the forum or your AI. Tick them off when answered.', 'Fragen für die Übungsstunde, das Forum oder deine KI. Abhaken, wenn beantwortet.')) +
        secCards() + '<section id="performance"><h2>' + L('Performance', 'Leistung') + '</h2><div id="my-perf">' + L('Loading…', 'Wird geladen …') + '</div></section>' + '<section id="my-suggestions"><h2>' + L('Your suggestions', 'Deine Vorschläge') + '</h2><div id="my-sug">' + L('Loading…', 'Wird geladen …') + '</div></section>' + secDesign() + secHistory();
      wire(); perf(); sug();
    });
  }
  function drawGuest() {
    root.innerHTML = '<div class="box"><p><strong>' + L('Sign in to use My StudyHub', 'Melde dich an, um Mein StudyHub zu nutzen') + '</strong> ' + L('(free, with Google; you can stay anonymous). Your plan, notes, flashcards and results are then saved in your account and your own AI can use them.', '(gratis, mit Google; du kannst anonym bleiben). Plan, Notizen, Lernkarten und Resultate werden dann in deinem Konto gespeichert, und deine eigene KI kann sie nutzen.') + '</p>' +
      '<p><button class="main" id="my-signin">' + L('Sign in', 'Anmelden') + '</button></p></div>' +
      '<p>' + L('Your design below also works without signing in (saved in this browser only).', 'Dein Design unten funktioniert auch ohne Anmeldung (nur in diesem Browser gespeichert).') + '</p>' + secDesign();
    document.getElementById('my-signin').onclick = function () { window.SH && window.SH.signIn(); };
    wireDesign();
  }

  // ---------- plan ----------
  function secPlan() {
    return '<section id="my-plan"><h2>' + L('Plan', 'Plan') + '</h2><p>' + L('Your study plan in your own words. Your AI can write it with you (“make me a plan until the exam”).', 'Dein Lernplan in deinen Worten. Deine KI kann ihn mit dir schreiben („mach mir einen Plan bis zur Prüfung“).') + '</p>' +
      '<textarea id="my-plan-t">' + esc((items.plan || {}).text || '') + '</textarea><div class="btns"><button class="main" id="my-plan-s">' + L('Save', 'Speichern') + '</button><button id="my-plan-u">' + L('Undo last change', 'Letzte Änderung rückgängig') + '</button></div><p class="st" id="my-plan-st"></p></section>';
  }
  // ---------- notes, questions ----------
  function secList(key, title, intro) {
    var list = items[key] || [];
    return '<section id="my-' + key + '"><h2>' + title + '</h2><p>' + intro + '</p><ul class="it">' +
      list.map(function (x) {
        return '<li><div>' + (key === 'questions' ? '<label><input type="checkbox" data-q="' + esc(x.id) + '"' + (x.status === 'answered' ? ' checked' : '') + '> </label>' : '') + (x.title ? '<strong>' + esc(x.title) + '</strong><br>' : '') + esc(x.text).replace(/\n/g, '<br>') +
          (x.answer ? '<br><em>' + esc(x.answer) + '</em>' : '') + '</div><div class="meta">' + (x.page ? esc(x.page) + ' · ' : '') + (x.created ? new Date(x.created).toLocaleDateString() : '') + ' · <button data-del="' + key + ':' + esc(x.id) + '">' + L('Remove', 'Entfernen') + '</button></div></li>';
      }).join('') + '</ul>' + (list.length ? '' : '<p class="meta">' + L('Nothing yet.', 'Noch nichts.') + '</p>') +
      '<div class="row"><input type="text" id="my-' + key + '-in" placeholder="' + (key === 'notes' ? L('New note', 'Neue Notiz') : L('New question', 'Neue Frage')) + '"><input type="text" id="my-' + key + '-pg" placeholder="' + L('Lesson (optional), e.g. lesson-08', 'Lektion (optional), z. B. lesson-08') + '" style="flex:0 1 14rem"></div>' +
      '<div class="btns"><button class="main" data-add="' + key + '">' + L('Add', 'Hinzufügen') + '</button><button data-undo="' + key + '">' + L('Undo last change', 'Letzte Änderung rückgängig') + '</button></div><p class="st" id="my-' + key + '-st"></p></section>';
  }
  // ---------- flashcards ----------
  function due(c) { return !c.due || Date.parse(c.due) <= Date.now(); }
  function secCards() {
    var list = items.flashcards || [], n = list.filter(due).length;
    return '<section id="my-cards"><h2>' + L('Your flashcards', 'Deine Lernkarten') + '</h2><p>' + L('Your own cards, next to the site’s ', 'Deine eigenen Karten, neben den ') + '<a href="flashcards.html">' + L('flashcards', 'Lernkarten der Seite') + '</a>. ' + L('Your AI can make them from your mistakes. ', 'Deine KI kann sie aus deinen Fehlern machen. ') + '<strong>' + n + '</strong> ' + L('of', 'von') + ' ' + list.length + ' ' + L('due today.', 'heute fällig.') + '</p>' +
      '<div class="btns"><button class="main" id="my-study"' + (n ? '' : ' disabled') + '>' + L('Study due cards', 'Fällige Karten lernen') + '</button></div><div id="my-studybox"></div>' +
      '<details><summary>' + L('All cards and new card', 'Alle Karten und neue Karte') + '</summary><ul class="it">' + list.map(function (c) { return '<li><strong>' + esc(c.front) + '</strong><br>' + esc(c.back) + '<div class="meta">' + (c.topic ? esc(c.topic) + ' · ' : '') + L('box ', 'Fach ') + (c.box || 0) + ' · <button data-del="flashcards:' + esc(c.id) + '">' + L('Remove', 'Entfernen') + '</button></div></li>'; }).join('') + '</ul>' +
      '<div class="row"><input type="text" id="my-fc-f" placeholder="' + L('Front (question)', 'Vorderseite (Frage)') + '"><input type="text" id="my-fc-b" placeholder="' + L('Back (answer)', 'Rückseite (Antwort)') + '"></div><div class="btns"><button class="main" id="my-fc-add">' + L('Add card', 'Karte hinzufügen') + '</button><button data-undo="flashcards">' + L('Undo last change', 'Letzte Änderung rückgängig') + '</button></div><p class="st" id="my-flashcards-st"></p></details></section>';
  }
  function study() {
    var list = items.flashcards || [], q = list.filter(due), i = 0, box = document.getElementById('my-studybox');
    function show() {
      if (i >= q.length) { box.innerHTML = '<div class="card">' + L('Done for today. 🌱', 'Für heute fertig. 🌱') + '</div>'; put('flashcards', list, 'my-flashcards-st'); return; }
      var c = q[i];
      box.innerHTML = '<div class="card"><p class="meta">' + (i + 1) + ' / ' + q.length + '</p><p><strong>' + esc(c.front) + '</strong></p><div id="my-back" hidden><hr><p>' + esc(c.back) + '</p></div></div>' +
        '<div class="btns"><button id="my-rev" class="main">' + L('Show answer', 'Antwort zeigen') + '</button><button id="my-ok" hidden>' + L('Knew it', 'Gewusst') + '</button><button id="my-no" hidden>' + L('Not yet', 'Noch nicht') + '</button></div>';
      document.getElementById('my-rev').onclick = function () { document.getElementById('my-back').hidden = false; this.hidden = true; document.getElementById('my-ok').hidden = false; document.getElementById('my-no').hidden = false; };
      document.getElementById('my-ok').onclick = function () { c.box = Math.min((c.box || 0) + 1, 5); c.due = new Date(Date.now() + [1, 2, 4, 7, 14, 30][c.box] * 864e5).toISOString(); i++; show(); };
      document.getElementById('my-no').onclick = function () { c.box = 0; c.due = new Date().toISOString(); q.push(c); i++; show(); };
    }
    show();
  }
  // ---------- performance ----------
  function perf() {
    Promise.all([S.sb.from('progress').select('page,done,rating'), S.sb.from('results').select('item_id,kind,score,max_score,summary,mistakes,created_at').order('created_at', { ascending: false }).limit(100),
      S.sb.from('mocks').select('exam_id,minutes,started_at,submitted_at,score,max_score').order('started_at', { ascending: false }).limit(20)]).then(function (r) {
      var prog = r[0].data || [], res = r[1].data || [], mocks = r[2].data || [];
      var done = prog.filter(function (p) { return p.done; }).length, scored = res.filter(function (x) { return x.max_score > 0; });
      var avg = scored.length ? Math.round(100 * scored.reduce(function (s, x) { return s + x.score / x.max_score; }, 0) / scored.length) : null;
      var types = {}; res.forEach(function (x) { (x.mistakes || []).forEach(function (m) { types[m.type] = (types[m.type] || 0) + 1; }); });
      var tl = Object.keys(types).sort(function (a, b) { return types[b] - types[a]; });
      document.getElementById('my-perf').innerHTML =
        '<p><strong>' + done + '</strong> ' + L('pages ticked off', 'Seiten abgehakt') + ' · <strong>' + scored.length + '</strong> ' + L('marked attempts', 'korrigierte Versuche') + (avg !== null ? ' · ' + L('average ', 'Durchschnitt ') + '<strong>' + avg + '%</strong>' : '') + ' · <strong>' + mocks.length + '</strong> ' + L('mocks', 'Probeprüfungen') + '</p>' +
        '<h3>' + L('Mistake fingerprint', 'Fehler-Fingerabdruck') + '</h3>' + (tl.length ? '<p>' + tl.map(function (t) { return esc(t) + ' <strong>' + types[t] + '×</strong>'; }).join(' · ') + '</p>' : '<p class="meta">' + L('Appears once your AI has marked some of your work.', 'Erscheint, sobald deine KI einige Arbeiten korrigiert hat.') + '</p>') +
        (mocks.length ? '<h3>' + L('Mocks', 'Probeprüfungen') + '</h3><table><tr><th>' + L('Exam', 'Prüfung') + '</th><th>' + L('Date', 'Datum') + '</th><th>' + L('Score', 'Punkte') + '</th></tr>' + mocks.map(function (m) { return '<tr><td>' + esc(m.exam_id) + '</td><td>' + new Date(m.started_at).toLocaleDateString() + '</td><td>' + (m.max_score ? m.score + ' / ' + m.max_score : (m.submitted_at ? L('not marked yet', 'noch nicht korrigiert') : L('running', 'läuft'))) + '</td></tr>'; }).join('') + '</table>' : '') +
        (res.length ? '<h3>' + L('Latest marks', 'Neueste Resultate') + '</h3><table><tr><th>' + L('What', 'Was') + '</th><th>' + L('Score', 'Punkte') + '</th><th>' + L('Feedback', 'Rückmeldung') + '</th></tr>' + res.slice(0, 20).map(function (x) { return '<tr><td>' + esc(x.item_id) + '<div class="meta">' + new Date(x.created_at).toLocaleDateString() + '</div></td><td>' + (x.max_score ? x.score + ' / ' + x.max_score : '–') + '</td><td>' + esc((x.summary || '').slice(0, 220)) + '</td></tr>'; }).join('') + '</table>' : '');
    });
  }
  // ---------- suggestions (curated data pool; suggest.js files them) ----------
  var SUGST = { 'new': L('waiting for review', 'wartet auf Prüfung'), accepted: L('accepted, coming in the next update', 'angenommen, kommt mit dem nächsten Update'), rejected: L('not taken', 'nicht übernommen'), done: L('live on the site', 'auf der Seite umgesetzt') };
  var KIND = { mistake: L('Mistake', 'Fehler'), unclear: L('Unclear', 'Unklar'), addition: L('Addition', 'Ergänzung'), other: L('Other', 'Anderes') };
  function sugItem(x, admin) {
    return '<li><div class="meta">' + esc(KIND[x.kind] || x.kind) + ' · <a href="' + esc(x.page) + '.html">' + esc(x.page) + '</a>' + (x.section ? ' · ' + esc(x.section) : '') + ' · ' + new Date(x.created_at).toLocaleDateString() + (admin ? ' · ' + esc(x.author) : '') + '</div>' +
      (x.quote ? '<div class="meta">“' + esc(x.quote) + '”</div>' : '') + '<div>' + esc(x.body) + '</div>' + (x.reason ? '<div class="meta">' + L('Why: ', 'Warum: ') + esc(x.reason) + '</div>' : '') +
      '<div class="meta"><strong>' + esc(SUGST[x.status] || x.status) + '</strong>' + (x.review_note ? ' · ' + esc(x.review_note) : '') + '</div>' +
      (admin ? '<div class="btns"><input type="text" placeholder="' + L('Note (optional)', 'Notiz (optional)') + '" data-sn="' + x.id + '" value="' + esc(x.review_note || '') + '">' +
        ['accepted', 'rejected', 'done', 'new'].map(function (st) { return '<button data-sset="' + x.id + ':' + st + '">' + esc({ accepted: L('Accept', 'Annehmen'), rejected: L('Reject', 'Ablehnen'), done: L('Mark live', 'Als umgesetzt'), 'new': L('Back to new', 'Zurück auf neu') }[st]) + '</button>'; }).join('') + '</div>'
        : (x.status === 'new' ? '<div class="btns"><button data-sdel="' + x.id + '">' + L('Withdraw', 'Zurückziehen') + '</button></div>' : '')) + '</li>';
  }
  function sug() {
    var el = document.getElementById('my-sug'); if (!el) return;
    Promise.all([S.sb.from('suggestions').select('id,page,section,quote,kind,body,reason,status,review_note,created_at').order('created_at', { ascending: false }).limit(100), S.sb.rpc('is_admin')]).then(function (r) {
      var mine = r[0].data || [], admin = !!(r[1] && r[1].data);
      el.innerHTML = '<p>' + L('On every lesson, Serie and Toolbox page there is a box “Suggest a fix or addition”. What you send appears here with its status.', 'Auf jeder Lektions-, Serien- und Werkzeugkasten-Seite gibt es das Feld „Korrektur oder Ergänzung vorschlagen“. Was du sendest, erscheint hier mit seinem Stand.') + '</p>' +
        (mine.length ? '<ul class="it">' + mine.map(function (x) { return sugItem(x, false); }).join('') + '</ul>' : '<p class="meta">' + L('None yet.', 'Noch keine.') + '</p>') +
        (admin ? '<h3>' + L('Review (only you see this)', 'Prüfen (nur du siehst das)') + '</h3><div class="row"><select id="my-sugf"><option value="new">' + L('Waiting', 'Wartend') + '</option><option value="accepted">' + L('Accepted', 'Angenommen') + '</option><option value="">' + L('All', 'Alle') + '</option></select></div><div id="my-sugadm"></div><p class="st" id="my-sug-st"></p>' : '');
      el.querySelectorAll('[data-sdel]').forEach(function (b) { b.onclick = function () { S.sb.from('suggestions').delete().eq('id', Number(b.getAttribute('data-sdel'))).then(sug); }; });
      if (admin) { document.getElementById('my-sugf').onchange = sugAdmin; sugAdmin(); }
    });
  }
  function sugAdmin() {
    var f = document.getElementById('my-sugf').value || null, el = document.getElementById('my-sugadm');
    S.sb.rpc('suggestions_admin_list', { p_status: f }).then(function (r) {
      var v = r.data || [];
      el.innerHTML = r.error ? '<p class="meta">' + esc(r.error.message) + '</p>' : v.length ? '<ul class="it">' + v.map(function (x) { return sugItem(x, true); }).join('') + '</ul>' : '<p class="meta">' + L('Nothing here.', 'Nichts da.') + '</p>';
      el.querySelectorAll('[data-sset]').forEach(function (b) {
        b.onclick = function () { var p = b.getAttribute('data-sset').split(':'), n = el.querySelector('[data-sn="' + p[0] + '"]');
          S.sb.rpc('suggestions_admin_set', { p_id: Number(p[0]), p_status: p[1], p_note: n && n.value.trim() || null }).then(function (x) { status('my-sug-st', x.error ? x.error.message : L('Saved.', 'Gespeichert.')); sugAdmin(); }); };
      });
    });
  }
  // ---------- design ----------
  function secDesign() {
    var d = window.SHDesign ? window.SHDesign.get() : {};
    function sel(id, opts, cur) { return '<select id="' + id + '">' + opts.map(function (o) { return '<option value="' + o[0] + '"' + (o[0] === (cur || '') ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') + '</select>'; }
    function col(id, cur, lab) { return '<label>' + lab + '<br><input type="color" id="' + id + '" value="' + (cur || '#888888') + '"' + (cur ? '' : ' data-unset="1"') + '></label>'; }
    var hide = d.hide || [];
    var H = [['badday', L('“Bad day?” box', '„Schlechter Tag?“-Box')], ['story', L('Story boxes', 'Geschichten-Boxen')], ['wonder', L('“For wonder” section', 'Abschnitt „Zum Staunen“')], ['listen', L('Listen buttons', 'Vorlese-Knöpfe')], ['tips', L('Tip pop-up', 'Tipp-Pop-up')], ['comments', L('Comments', 'Kommentare')], ['progress', L('Progress box', 'Fortschritts-Box')]];
    return '<section id="my-design"><h2>' + L('Your design', 'Dein Design') + '</h2><p>' + L('Change how StudyHub looks for you. New lessons and updates keep your design. Only these safe settings exist, so nothing can break.', 'Ändere, wie StudyHub für dich aussieht. Neue Lektionen und Updates behalten dein Design. Es gibt nur diese sicheren Einstellungen, also kann nichts kaputtgehen.') + '</p>' +
      '<div class="row"><label>' + L('Light or dark', 'Hell oder dunkel') + sel('dz-theme', [['', L('Site default', 'Standard der Seite')], ['light', L('Light', 'Hell')], ['dark', L('Dark', 'Dunkel')]], d.theme) + '</label>' +
      '<label>' + L('Font', 'Schrift') + sel('dz-font', [['', L('Site default', 'Standard der Seite')], ['serif', 'Serif'], ['sans', 'Sans'], ['readable', L('Extra readable', 'Besonders lesbar')], ['mono', 'Mono']], d.font) + '</label></div>' +
      '<div class="row"><label>' + L('Text size', 'Textgrösse') + ' <span id="dz-sv">' + (d.size || 100) + '%</span><input type="range" id="dz-size" min="80" max="150" step="5" value="' + (d.size || 100) + '" style="width:100%"></label>' +
      '<label>' + L('Spacing', 'Abstände') + sel('dz-density', [['', L('Normal', 'Normal')], ['compact', L('Compact', 'Kompakt')], ['airy', L('Airy', 'Luftig')]], d.density) + '</label>' +
      '<label>' + L('Text width', 'Textbreite') + sel('dz-width', [['', L('Normal', 'Normal')], ['narrow', L('Narrow', 'Schmal')], ['wide', L('Wide', 'Breit')]], d.width) + '</label></div>' +
      '<div class="row">' + col('dz-accent', d.accent, L('Accent colour', 'Akzentfarbe')) + col('dz-background', d.background, L('Background', 'Hintergrund')) + col('dz-text', d.text, L('Text colour', 'Textfarbe')) + col('dz-box', d.box, L('Boxes', 'Boxen')) + '</div>' +
      '<p>' + L('Hide:', 'Ausblenden:') + '</p><p style="display:flex;flex-wrap:wrap;gap:.3rem 1rem">' + H.map(function (h) { return '<label><input type="checkbox" data-hide="' + h[0] + '"' + (hide.indexOf(h[0]) >= 0 ? ' checked' : '') + '> ' + h[1] + '</label>'; }).join('') + '</p>' +
      '<div class="btns"><button class="main" id="dz-save">' + L('Save my design', 'Mein Design speichern') + '</button><button id="dz-reset">' + L('Back to the StudyHub design', 'Zurück zum StudyHub-Design') + '</button>' + (S && S.user ? '<button data-undo="design">' + L('Undo last change', 'Letzte Änderung rückgängig') + '</button>' : '') + '</div><p class="st" id="my-design-st"></p></section>';
  }
  function readDesign() {
    var d = {}; var g = function (id) { return document.getElementById(id); };
    ['theme', 'font', 'density', 'width'].forEach(function (k) { var v = g('dz-' + k).value; if (v) d[k] = v; });
    var sz = Number(g('dz-size').value); if (sz !== 100) d.size = sz;
    ['accent', 'background', 'text', 'box'].forEach(function (k) { var e = g('dz-' + k); if (!e.getAttribute('data-unset')) d[k] = e.value; });
    var h = []; root.querySelectorAll('[data-hide]').forEach(function (c) { if (c.checked) h.push(c.getAttribute('data-hide')); }); if (h.length) d.hide = h;
    return d;
  }
  function wireDesign() {
    var D = window.SHDesign; if (!D) return setTimeout(wireDesign, 200);
    root.querySelectorAll('#my-design input, #my-design select').forEach(function (e) {
      e.addEventListener('input', function () { if (e.type === 'color') e.removeAttribute('data-unset'); if (e.id === 'dz-size') document.getElementById('dz-sv').textContent = e.value + '%'; D.apply(readDesign()); });
    });
    document.getElementById('dz-save').onclick = function () { D.save(readDesign()).then(function (r) { status('my-design-st', r && r.error ? r.error.message : L('Saved.', 'Gespeichert.')); }); };
    document.getElementById('dz-reset').onclick = function () { D.save({}).then(function () { location.reload(); }); };
  }
  // ---------- history ----------
  function secHistory() {
    var keys = [['plan', L('Plan', 'Plan')], ['notes', L('Notes', 'Notizen')], ['questions', L('Questions', 'Fragen')], ['flashcards', L('Flashcards', 'Lernkarten')], ['design', L('Design', 'Design')]];
    return '<section id="my-history"><h2>' + L('History', 'Verlauf') + '</h2><p>' + L('Every change, by you or your AI, is kept. Pick an item to see its versions and bring an older one back. Lesson progress has a history too (“progress:lesson-08”).', 'Jede Änderung, von dir oder deiner KI, bleibt erhalten. Wähle einen Bereich, um seine Versionen zu sehen und eine ältere zurückzuholen. Auch der Lektionsfortschritt hat einen Verlauf („progress:lesson-08“).') + '</p>' +
      '<div class="row"><select id="my-hk">' + keys.map(function (k) { return '<option value="' + k[0] + '">' + k[1] + '</option>'; }).join('') + '</select><input type="text" id="my-hk2" placeholder="' + L('or e.g. progress:lesson-08', 'oder z. B. progress:lesson-08') + '"></div>' +
      '<div class="btns"><button class="main" id="my-hshow">' + L('Show versions', 'Versionen zeigen') + '</button></div><div id="my-hlist"></div></section>';
  }
  function history() {
    var key = (document.getElementById('my-hk2').value || '').trim() || document.getElementById('my-hk').value;
    if (/^progress:/.test(key) && !/\.html$/.test(key)) key += '.html';  // progress rows use the page file name
    S.sb.from('my_versions').select('id,content,source,created_at').eq('key', key).order('id', { ascending: false }).limit(30).then(function (r) {
      var v = r.data || [];
      document.getElementById('my-hlist').innerHTML = v.length ? '<table><tr><th>' + L('When', 'Wann') + '</th><th>' + L('By', 'Von') + '</th><th>' + L('Content', 'Inhalt') + '</th><th></th></tr>' + v.map(function (x, i) {
        var by = { site: L('you', 'dir'), ai: L('your AI', 'deiner KI'), undo: L('undo', 'Rückgängig'), restore: L('restore', 'Wiederherstellung'), reset: L('reset', 'Zurücksetzen') }[x.source] || x.source;
        return '<tr><td>' + new Date(x.created_at).toLocaleString() + '</td><td>' + esc(by) + '</td><td>' + esc(x.content === null ? L('(empty)', '(leer)') : JSON.stringify(x.content).slice(0, 160)) + '</td><td>' + (i ? '<button data-restore="' + x.id + '">' + L('Restore', 'Wiederherstellen') + '</button>' : L('current', 'aktuell')) + '</td></tr>';
      }).join('') + '</table>' : '<p class="meta">' + L('No versions yet.', 'Noch keine Versionen.') + '</p>';
    });
  }

  function wire() {
    var g = function (id) { return document.getElementById(id); };
    g('my-plan-s').onclick = function () { put('plan', { text: g('my-plan-t').value }, 'my-plan-st'); };
    g('my-plan-u').onclick = function () { undo('plan', 'my-plan-st'); };
    root.querySelectorAll('[data-add]').forEach(function (b) {
      b.onclick = function () {
        var k = b.getAttribute('data-add'), t = g('my-' + k + '-in').value.trim(); if (!t) return;
        var list = (items[k] || []).slice(); list.push({ id: nid(), created: new Date().toISOString(), text: t, page: g('my-' + k + '-pg').value.trim() || undefined, status: k === 'questions' ? 'open' : undefined });
        put(k, JSON.parse(JSON.stringify(list)), 'my-' + k + '-st').then(draw);
      };
    });
    root.querySelectorAll('[data-undo]').forEach(function (b) { b.onclick = function () { var k = b.getAttribute('data-undo'); undo(k, 'my-' + k + '-st'); }; });
    root.querySelectorAll('[data-del]').forEach(function (b) {
      b.onclick = function () { var p = b.getAttribute('data-del').split(':'); put(p[0], (items[p[0]] || []).filter(function (x) { return x.id !== p[1]; }), 'my-' + p[0] + '-st').then(draw); };
    });
    root.querySelectorAll('[data-q]').forEach(function (c) {
      c.onchange = function () { var list = items.questions || []; list.forEach(function (x) { if (x.id === c.getAttribute('data-q')) x.status = c.checked ? 'answered' : 'open'; }); put('questions', list, 'my-questions-st'); };
    });
    g('my-fc-add').onclick = function () {
      var f = g('my-fc-f').value.trim(), b = g('my-fc-b').value.trim(); if (!f || !b) return;
      var list = (items.flashcards || []).slice(); list.push({ id: nid(), created: new Date().toISOString(), front: f, back: b, box: 0 });
      put('flashcards', list, 'my-flashcards-st').then(draw);
    };
    g('my-study').onclick = study;
    g('my-hshow').onclick = history;
    root.addEventListener('click', function (e) {
      var id = e.target.getAttribute && e.target.getAttribute('data-restore');
      if (id) S.sb.rpc('my_restore_version', { p_id: Number(id) }).then(function (r) { if (r.error) alert(r.error.message); else draw(); });
    });
    wireDesign();
  }

  var started = false;
  function go() { S = window.SH; if (!S) return; if (S.user && !S.sb) return; if (started && !S.user) return drawGuest(); started = true; draw(); }
  document.addEventListener('sh-auth', go);
  setTimeout(function () { if (!started) { S = window.SH || null; drawGuest(); } }, 4000);
  go();
})();
