/* Timed mock exams: pick an old exam, run a timer, mark it (self-marking against the official
   solution, or with your own AI through the StudyHub connector), keep a history.
   History lives in this browser; when signed in it is also saved to the account (table mocks),
   where My StudyHub and the connector's performance tool can see it. */
(function () {
  var root = document.getElementById('sh-mock'); if (!root) return;
  var DE = root.getAttribute('data-lang') === 'de';
  function L(en, de) { return DE ? de : en; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function get(k, d) { try { var v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } }
  function put(k, v) { try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  var EX = [], tick = null;
  var css = document.createElement('style');
  css.textContent = '#sh-mock select,#sh-mock input{font:inherit;padding:.45rem;border-radius:8px;border:1px solid var(--rule,#ccd);background:var(--surface,#fff);color:inherit;box-sizing:border-box}#sh-mock select{width:100%}' +
    '#sh-mock .row{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center;margin:.7rem 0}#sh-mock .btns{display:flex;flex-wrap:wrap;gap:.5rem;margin:.8rem 0}' +
    '#sh-mock button{font:inherit;font-size:.92rem;padding:.4rem .95rem;border-radius:999px;border:1px solid var(--accent,#5b5bd6);background:none;color:var(--accent,#5b5bd6);cursor:pointer}#sh-mock button.main{background:var(--accent,#5b5bd6);color:var(--on,#fff)}' +
    '#sh-mock .clock{position:sticky;top:0;z-index:5;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:.5rem;padding:.6rem .9rem;border-radius:12px;background:var(--surface,#fff);border:1px solid var(--rule,#ccd);margin:.8rem 0}' +
    '#sh-mock .time{font-size:1.6rem;font-variant-numeric:tabular-nums;font-weight:600}#sh-mock .late .time{color:#c0392b}#sh-mock iframe{width:100%;height:75vh;border:1px solid var(--rule,#ccd);border-radius:10px;background:#fff}' +
    '#sh-mock .mk-open{display:none}@media (max-width:700px){#sh-mock iframe{display:none}#sh-mock .mk-open{display:inline-block}}' +
    '#sh-mock table{width:100%;border-collapse:collapse;font-size:.92rem}#sh-mock td,#sh-mock th{text-align:left;padding:.35rem .4rem;border-bottom:1px solid var(--rule,#ccd)}#sh-mock .pts input{width:4.2rem}#sh-mock .mk-n{font-size:.85rem;opacity:.8}';
  document.head.appendChild(css);

  function exam(id) { for (var i = 0; i < EX.length; i++) if (EX[i].id === id) return EX[i]; return null; }
  function pdf(id) { return (DE ? '../' : '') + 'docs/' + id + '.pdf'; }
  function fmt(ms) { var neg = ms < 0; ms = Math.abs(ms); var s = Math.floor(ms / 1000), h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60); s = s % 60;
    return (neg ? '+' : '') + (h ? h + ':' : '') + (h && m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s; }
  function when(t) { try { return new Date(t).toLocaleString(DE ? 'de-CH' : 'en-GB', { dateStyle: 'medium', timeStyle: 'short' }); } catch (e) { return t; } }

  function pick() {
    clearInterval(tick); root.oninput = null;
    var subj = get('sh-mock-subj', 'analysis'), mins = get('sh-mock-min', 120);
    var opts = EX.filter(function (e) { return e.s === subj; }).map(function (e) {
      return '<option value="' + esc(e.id) + '">' + esc(e.t) + (e.sol ? (e.inl ? L(' · solutions in the same PDF', ' · Lösungen im selben PDF') : L(' · official solutions', ' · offizielle Lösungen')) : '') + '</option>'; }).join('');
    root.innerHTML = '<h2 id="start">' + L('Start a mock', 'Probeprüfung starten') + '</h2>' +
      '<p>' + L('Three steps: choose an exam, set the time, start. Work on paper, like in the real exam. When the time is up, you mark it.', 'Drei Schritte: Prüfung wählen, Zeit setzen, starten. Arbeite auf Papier, wie in der echten Prüfung. Wenn die Zeit um ist, korrigierst du.') + '</p>' +
      '<div class="row"><label><input type="radio" name="subj" value="analysis"' + (subj === 'analysis' ? ' checked' : '') + '> Analysis 1</label><label><input type="radio" name="subj" value="physics"' + (subj === 'physics' ? ' checked' : '') + '> ' + L('Physics I', 'Physik I') + '</label></div>' +
      '<label>' + L('Exam (newest first)', 'Prüfung (neueste zuerst)') + '<select id="mk-ex">' + opts + '</select></label>' +
      '<p class="mk-n">' + L('Recommended: start with an exam that has official solutions, so you can mark it properly. Without official solutions, your own AI can mark it with the StudyHub connector.', 'Empfehlung: Beginne mit einer Prüfung mit offiziellen Lösungen, damit du sauber korrigieren kannst. Ohne offizielle Lösungen kann deine eigene KI mit dem StudyHub-Connector korrigieren.') + '</p>' +
      '<div class="row"><label>' + L('Minutes', 'Minuten') + ' <input id="mk-min" type="number" min="5" max="300" step="5" value="' + mins + '"></label>' +
      '<span class="mk-n">' + L('Use the length of your real exam. Not announced yet? Take 120. Short on time today? Do half the exam in 60.', 'Nimm die Länge deiner echten Prüfung. Noch nicht bekannt? Nimm 120. Wenig Zeit heute? Mach die halbe Prüfung in 60.') + '</span></div>' +
      '<div class="btns"><button class="main" id="mk-go">' + L('Start the timer', 'Timer starten') + '</button></div>' + hist();
    root.querySelectorAll('input[name=subj]').forEach(function (r) { r.onchange = function () { put('sh-mock-subj', r.value); pick(); }; });
    document.getElementById('mk-go').onclick = function () {
      var id = document.getElementById('mk-ex').value, m = Math.max(5, Math.min(300, parseInt(document.getElementById('mk-min').value, 10) || 120));
      put('sh-mock-min', m); put('sh-mock-run', { id: id, min: m, start: Date.now() }); run(); };
    bindHist();
  }

  function run() {
    var R = get('sh-mock-run', null), e = R && exam(R.id); if (!e) { put('sh-mock-run', null); return pick(); }
    var end = R.start + R.min * 60000;
    root.innerHTML = '<div class="clock" id="mk-clock"><div><div class="mk-n">' + esc(e.t) + '</div><div class="time" id="mk-t"></div></div>' +
      '<div class="btns" style="margin:0"><button class="main" id="mk-done">' + L("I'm done, mark it", 'Fertig, korrigieren') + '</button><button id="mk-quit">' + L('Cancel', 'Abbrechen') + '</button></div></div>' +
      (e.inl ? '<p class="mk-n"><strong>' + L('Careful:', 'Achtung:') + '</strong> ' + L('this PDF has the solutions in it. Read only the questions; don’t scroll into the solutions.', 'dieses PDF enthält die Lösungen. Lies nur die Aufgaben und scrolle nicht in die Lösungen.') + '</p>' : '') +
      '<p class="mk-n">' + L('The timer keeps running if you close or reload the page. When it reaches 0 it keeps counting your overtime.', 'Der Timer läuft weiter, auch wenn du die Seite schliesst oder neu lädst. Bei 0 zählt er deine Überzeit.') + ' <a href="' + pdf(e.id) + '" target="_blank" rel="noopener">' + L('Open the exam in a new tab', 'Prüfung in neuem Tab öffnen') + '</a></p>' +
      '<p class="mk-open"><a class="btn" href="' + pdf(e.id) + '" target="_blank" rel="noopener"><strong>' + L('Open the exam', 'Prüfung öffnen') + '</strong></a> ' + L('(on a phone the PDF opens in its own tab; come back here for the timer)', '(auf dem Handy öffnet sich das PDF in einem eigenen Tab; komm für den Timer hierher zurück)') + '</p>' +
      '<iframe src="' + pdf(e.id) + '#toolbar=1" title="' + esc(e.t) + '"></iframe>';
    function upd() { var left = end - Date.now(), t = document.getElementById('mk-t'); if (!t) return clearInterval(tick);
      t.textContent = left >= 0 ? fmt(left) : fmt(left) + ' ' + L('overtime', 'Überzeit'); document.getElementById('mk-clock').className = 'clock' + (left < 0 ? ' late' : ''); }
    clearInterval(tick); upd(); tick = setInterval(upd, 1000);
    document.getElementById('mk-done').onclick = function () { R.stop = Date.now(); put('sh-mock-run', R); mark(); };
    var q = document.getElementById('mk-quit'); q.onclick = function () { if (q.dataset.sure) { put('sh-mock-run', null); pick(); } else { q.dataset.sure = 1; q.textContent = L('Really cancel? Click again', 'Wirklich abbrechen? Nochmals klicken'); } };
  }

  function mark() {
    clearInterval(tick);
    var R = get('sh-mock-run', null), e = R && exam(R.id); if (!e) return pick();
    var used = Math.round(((R.stop || Date.now()) - R.start) / 60000);
    var rows = R.tasks || [{ got: '', max: '' }, { got: '', max: '' }, { got: '', max: '' }];
    function table() { return '<table><tr><th>' + L('Task', 'Aufgabe') + '</th><th>' + L('Your points', 'Deine Punkte') + '</th><th>' + L('Max', 'Max') + '</th></tr>' +
      rows.map(function (r, i) { return '<tr class="pts"><td>' + (i + 1) + '</td><td><input data-i="' + i + '" data-k="got" type="number" min="0" step="0.5" value="' + esc(r.got) + '"></td><td><input data-i="' + i + '" data-k="max" type="number" min="0" step="0.5" value="' + esc(r.max) + '"></td></tr>'; }).join('') + '</table>'; }
    var solHtml = e.sol
      ? '<p><a class="btn" href="' + pdf(e.sol) + '" target="_blank" rel="noopener"><strong>' + L('Open the official solutions', 'Offizielle Lösungen öffnen') + '</strong></a>. ' + L('Mark task by task: full points only if your argument is complete; part points for correct steps. Be strict, like the exam is.', 'Korrigiere Aufgabe für Aufgabe: volle Punkte nur bei vollständigem Argument; Teilpunkte für richtige Schritte. Sei streng, wie die Prüfung.') + '</p>'
      : '<p>' + L('There are no official solutions for this exam. Two ways to mark it:', 'Für diese Prüfung gibt es keine offiziellen Lösungen. Zwei Wege zum Korrigieren:') + '</p><ul><li>' +
        L('With your own AI: in a chat with the <a href="connect.html">StudyHub connector</a>, write “Mark my mock of ', 'Mit deiner eigenen KI: Schreibe im Chat mit dem <a href="connect.html">StudyHub-Connector</a> „Korrigiere meine Probeprüfung ') + esc(e.t) + L('” and send photos or typed answers task by task.', '“ und schicke Fotos oder getippte Antworten, Aufgabe für Aufgabe.') + '</li><li>' +
        L('Or look the topic up in the lessons and the <a href="toolbox.html">Toolbox</a> and mark it yourself.', 'Oder schlag das Thema in den Lektionen und im <a href="toolbox.html">Werkzeugkasten</a> nach und korrigiere selbst.') + '</li></ul>';
    root.innerHTML = '<h2>' + L('Mark your mock', 'Probeprüfung korrigieren') + '</h2><p class="mk-n">' + esc(e.t) + ' · ' + L('time used', 'gebrauchte Zeit') + ': ' + used + ' / ' + R.min + ' min</p>' + solHtml +
      '<h3>' + L('Your points per task', 'Deine Punkte pro Aufgabe') + '</h3><p class="mk-n">' + L('Take the maximum points from the exam sheet. Leave a row empty if you skip it.', 'Nimm die Maximalpunkte vom Prüfungsblatt. Lass eine Zeile leer, wenn du sie auslässt.') + '</p><div id="mk-tab">' + table() + '</div>' +
      '<div class="btns"><button id="mk-add">' + L('+ task', '+ Aufgabe') + '</button></div>' +
      '<label>' + L('One line for future you: what went wrong, what to repeat?', 'Eine Zeile für dein zukünftiges Ich: Was lief schief, was wiederholen?') + '<input id="mk-note" type="text" style="width:100%" maxlength="400" value="' + esc(R.note || '') + '"></label>' +
      '<div class="btns"><button class="main" id="mk-save">' + L('Save result', 'Resultat speichern') + '</button><button id="mk-back">' + L('Back to the timer', 'Zurück zum Timer') + '</button></div><p class="mk-n" id="mk-st"></p>';
    function sync() { root.querySelectorAll('#mk-tab input').forEach(function (inp) { rows[+inp.dataset.i][inp.dataset.k] = inp.value; }); R.tasks = rows; R.note = document.getElementById('mk-note').value; put('sh-mock-run', R); }
    root.oninput = sync;
    document.getElementById('mk-add').onclick = function () { sync(); rows.push({ got: '', max: '' }); document.getElementById('mk-tab').innerHTML = table(); };
    document.getElementById('mk-back').onclick = function () { sync(); delete R.stop; put('sh-mock-run', R); run(); };
    document.getElementById('mk-save').onclick = function () {
      sync(); var got = 0, max = 0;
      rows.forEach(function (r) { var g = parseFloat(r.got), m = parseFloat(r.max); if (!isNaN(m)) { max += m; got += isNaN(g) ? 0 : g; } });
      var rec = { id: R.id, t: e.t, s: e.s, min: R.min, used: used, start: R.start, stop: R.stop || Date.now(), got: got, max: max, note: R.note || '' };
      var H = get('sh-mock-hist', []); H.unshift(rec); put('sh-mock-hist', H.slice(0, 100)); put('sh-mock-run', null);
      var S = window.SH;
      if (S && S.sb && S.user) {
        S.sb.from('mocks').insert({ user_id: S.user.id, exam_id: rec.id, minutes: rec.min, started_at: new Date(rec.start).toISOString(), submitted_at: new Date(rec.stop).toISOString(),
          score: max ? got : null, max_score: max || null, feedback: (L('Self-marked on the site. ', 'Auf der Seite selbst korrigiert. ') + rec.note).slice(0, 2000) })
          .then(function (r) { if (r.error) document.getElementById('mk-st').textContent = L('Saved in this browser (account save failed).', 'Im Browser gespeichert (Konto-Speichern fehlgeschlagen).'); else pick(); });
      } else pick();
    };
  }

  function hist() {
    var H = get('sh-mock-hist', []);
    if (!H.length) return '<h2 id="history">' + L('Your mocks', 'Deine Probeprüfungen') + '</h2><p class="mk-n">' + L('None yet. Your results will appear here' + ' (and in <a href="my.html">My StudyHub</a> if you are signed in).', 'Noch keine. Deine Resultate erscheinen hier (und in <a href="my.html">Mein StudyHub</a>, wenn du angemeldet bist).') + '</p>';
    return '<h2 id="history">' + L('Your mocks', 'Deine Probeprüfungen') + '</h2><table><tr><th>' + L('Date', 'Datum') + '</th><th>' + L('Exam', 'Prüfung') + '</th><th>' + L('Points', 'Punkte') + '</th><th>' + L('Time', 'Zeit') + '</th></tr>' +
      H.map(function (h, i) { return '<tr><td>' + esc(when(h.start)) + '</td><td>' + esc(h.t) + (h.note ? '<div class="mk-n">' + esc(h.note) + '</div>' : '') + '</td><td>' + (h.max ? esc(h.got) + ' / ' + esc(h.max) + ' (' + Math.round(100 * h.got / h.max) + '%)' : '–') + '</td><td>' + esc(h.used) + ' / ' + esc(h.min) + ' min</td></tr>'; }).join('') +
      '</table><p class="mk-n">' + L('Saved in this browser.', 'Im Browser gespeichert.') + ' <a href="#" id="mk-clear">' + L('Delete this list', 'Liste löschen') + '</a></p>';
  }
  function bindHist() { var c = document.getElementById('mk-clear'); if (c) c.onclick = function (ev) { ev.preventDefault(); c.outerHTML = '<span>' + L('Really delete? ', 'Wirklich löschen? ') + '<a href="#" id="mk-yes">' + L('Yes', 'Ja') + '</a></span>';
    document.getElementById('mk-yes').onclick = function (ev2) { ev2.preventDefault(); put('sh-mock-hist', []); pick(); }; }; }

  fetch(root.getAttribute('data-src')).then(function (r) { return r.json(); }).then(function (d) { EX = d;
    var R = get('sh-mock-run', null); if (R && R.stop) mark(); else if (R) run(); else pick(); })
    .catch(function () { root.innerHTML = '<p>' + L('Could not load the exam list. Reload the page.', 'Prüfungsliste konnte nicht geladen werden. Lade die Seite neu.') + '</p>'; });
})();
