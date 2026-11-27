/* Official PDFs (exams, solutions, Lernblätter, scripts) are served only behind the ETH login.
   SHDoc.load(pdfjsLib, 'docs/x.pdf', containerEl) -> Promise of the PDF document, after a login check.
   The file comes from /api/doc.php with the login token; there is no public file URL. */
(function () {
  var DE = (document.documentElement.lang || '').slice(0, 2) === 'de';
  function L(en, de) { return DE ? de : en; }
  function whenAuth() {
    return new Promise(function (resolve) {
      var done = false, t;
      function check() { if (!done && window.SH && !window.SH.authPending) { done = true; clearTimeout(t); document.removeEventListener('sh-auth', check); resolve(window.SH); } }
      document.addEventListener('sh-auth', check);
      t = setTimeout(function () { if (!done) { done = true; resolve(window.SH || null); } }, 10000);
      check();
    });
  }
  function message(container, text, withButton) {
    container.innerHTML = '';
    var box = document.createElement('div'); box.className = 'doc-locked';
    box.style.cssText = 'max-width:34rem;margin:2rem auto;padding:1.2rem 1.3rem;border:1px solid var(--rule);border-radius:10px;background:var(--surface);display:flex;flex-direction:column;gap:.8rem';
    var p = document.createElement('p'); p.textContent = text; box.appendChild(p);
    if (withButton && window.SH && window.SH.signIn) {
      var b = document.createElement('button'); b.type = 'button'; b.className = 'start-btn';
      b.textContent = L('Sign in with SWITCH edu-ID', 'Mit SWITCH edu-ID anmelden');
      b.onclick = function () { window.SH.signIn(); };
      box.appendChild(b);
    }
    container.appendChild(box);
  }
  function load(lib, path, container) {
    return whenAuth().then(function (SH) {
      if (!SH || !SH.user || !SH.sb) {
        message(container, L('Official files (exams, solutions, scripts) are for ETH students: sign in with SWITCH edu-ID to open them.',
          'Offizielle Dateien (Prüfungen, Lösungen, Skripte) sind für ETH-Studierende: Melde dich mit SWITCH edu-ID an, um sie zu öffnen.'), true);
        throw new Error('signed out');
      }
      return SH.sb.auth.getSession().then(function (r) {
        var tok = r && r.data && r.data.session && r.data.session.access_token;
        if (!tok) { message(container, L('Please sign in again with SWITCH edu-ID.', 'Bitte melde dich erneut mit SWITCH edu-ID an.'), true); throw new Error('no session'); }
        return lib.getDocument({ url: '/api/doc.php?f=' + encodeURIComponent(path), httpHeaders: { Authorization: 'Bearer ' + tok },
          disableRange: true, disableStream: true }).promise;
      }).catch(function (e) {
        if (e && e.message && /signed out|no session/.test(e.message)) throw e;
        var s = e && e.status;
        if (s === 403) message(container, L('Official files need the ETH login. Sign out, then sign in with SWITCH edu-ID (your progress can come with you: account page, "Bring over my Google data").',
          'Offizielle Dateien brauchen das ETH-Login. Melde dich ab und mit SWITCH edu-ID wieder an (dein Fortschritt kommt mit: Kontoseite, „Meine Google-Daten übernehmen“).'), false);
        else if (s === 401) message(container, L('Your login has expired. Please sign in again.', 'Deine Anmeldung ist abgelaufen. Bitte melde dich erneut an.'), true);
        else if (s === 404) message(container, L('This file is not on the server yet. Please tell us via Feedback.', 'Diese Datei ist noch nicht auf dem Server. Sag uns bitte über Feedback Bescheid.'), false);
        else message(container, L('Could not open the file. Please try again.', 'Die Datei konnte nicht geöffnet werden. Bitte versuche es erneut.') + (e && e.message ? ' (' + e.message + ')' : ''), false);
        throw e;
      });
    });
  }
  window.SHDoc = { load: load };
})();
