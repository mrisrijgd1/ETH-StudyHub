/* "Suggest a fix or addition" box on content pages (curated data pool).
   Signed-in students file a suggestion (table public.suggestions). Nothing on the page changes until the
   site owner has checked it against the script and accepted it; status shows on My StudyHub. */
(function () {
  var page = (location.pathname.split('/').pop() || '').replace(/\.html.*$/, '');
  if (!/^(lesson|phys|refresher|serie|linalg)-[a-z]?\d+$|^(toolbox|moves|tree|flashcards)$/.test(page)) return;
  var DE = /\/de\//.test(location.pathname);
  function L(en, de) { return DE ? de : en; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  var main = document.querySelector('main'); if (!main) return;

  var css = document.createElement('style');
  css.textContent = '.sh-sug{margin:2rem 0 1rem}.sh-sug>summary{cursor:pointer;font-weight:700;list-style:none}.sh-sug>summary::-webkit-details-marker{display:none}' +
    '.sh-sug>summary:before{content:"✎ ";color:var(--accent,#5b5bd6)}.sh-sug .sg-kinds{display:flex;flex-wrap:wrap;gap:.4rem;margin:.6rem 0}' +
    '.sh-sug .sg-kinds label{border:1px solid var(--rule,#ccd);border-radius:999px;padding:.3rem .8rem;cursor:pointer;font-size:.92rem}.sh-sug .sg-kinds input{position:absolute;opacity:0;pointer-events:none}' +
    '.sh-sug .sg-kinds label.on{background:var(--accent,#5b5bd6);border-color:var(--accent,#5b5bd6);color:var(--on,#fff)}' +
    '.sh-sug .sg-f{display:block;margin:.8rem 0}.sh-sug .sg-f span{display:block;margin-bottom:.3rem;font-size:.92rem}' +
    '.sh-sug select,.sh-sug textarea,.sh-sug input[type=text]{width:100%;box-sizing:border-box;font:inherit;padding:.5rem;border:1px solid var(--rule,#ccd);border-radius:8px;background:var(--surface,#fff);color:inherit}' +
    '.sh-sug .sg-row{display:flex;flex-wrap:wrap;gap:.8rem;align-items:center;justify-content:space-between;margin-top:.6rem}.sh-sug .sg-anon{display:flex;gap:.4rem;align-items:center;font-size:.9rem}' +
    '.sh-sug button{font:inherit;font-weight:600;border:0;border-radius:999px;padding:.5rem 1.2rem;cursor:pointer;background:var(--accent,#5b5bd6);color:var(--on,#fff)}.sh-sug button:disabled{opacity:.5;cursor:default}' +
    '.sh-sug .sg-msg{font-size:.9rem;min-height:1.2em;margin:.5rem 0 0}.sh-sug .sg-note{font-size:.88rem;opacity:.8}';
  document.head.appendChild(css);

  var heads = [].slice.call(main.querySelectorAll('h2')).filter(function (h) { return !h.closest('.sh-progress,.sh-comments,.sh-sug,nav'); })
    .map(function (h) { return h.textContent.replace(/\s+/g, ' ').trim().slice(0, 190); }).filter(Boolean);
  var kinds = [['mistake', L('Mistake', 'Fehler')], ['unclear', L('Unclear', 'Unklar')], ['addition', L('Addition', 'Ergänzung')], ['other', L('Other', 'Anderes')]];

  var box = document.createElement('details'); box.className = 'box sh-sug';
  box.innerHTML = '<summary>' + L('Suggest a fix or addition', 'Korrektur oder Ergänzung vorschlagen') + '</summary>' +
    '<p class="sg-note">' + L('Spotted a mistake, something unclear, or have something that would help others? Suggest it here. Every suggestion is checked against the script before anything on this page changes, and you can follow its status on ',
      'Fehler gefunden, etwas unklar, oder hast du etwas, das anderen hilft? Schlag es hier vor. Jeder Vorschlag wird mit dem Skript geprüft, bevor sich auf dieser Seite etwas ändert; den Stand siehst du auf ') +
    '<a href="my.html#my-suggestions">' + L('My StudyHub', 'Mein StudyHub') + '</a>. ' + L('Please never paste other people\'s notes or copyrighted material.', 'Bitte füge nie Notizen anderer oder urheberrechtlich geschütztes Material ein.') + '</p>' +
    '<div class="sg-kinds" role="radiogroup">' + kinds.map(function (k, i) { return '<label' + (i ? '' : ' class="on"') + '><input type="radio" name="sg-kind" value="' + k[0] + '"' + (i ? '' : ' checked') + '>' + k[1] + '</label>'; }).join('') + '</div>' +
    '<label class="sg-f"><span>' + L('Where?', 'Wo?') + '</span><select class="sg-sec"><option value="">' + L('Whole page', 'Ganze Seite') + '</option>' + heads.map(function (h) { return '<option>' + esc(h) + '</option>'; }).join('') + '</select></label>' +
    '<label class="sg-f"><span>' + L('The words it is about (optional; select text on the page before opening this box to fill it in)', 'Die betroffenen Worte (optional; markiere Text auf der Seite, bevor du dieses Feld öffnest)') + '</span><input type="text" class="sg-quote" maxlength="1000"></label>' +
    '<label class="sg-f"><span>' + L('Your suggestion', 'Dein Vorschlag') + '</span><textarea class="sg-body" rows="4" maxlength="4000" placeholder="' + L('What should change, or what should be added?', 'Was soll sich ändern, oder was soll dazukommen?') + '"></textarea></label>' +
    '<label class="sg-f"><span>' + L('Why? (optional, e.g. a script page or the official solution)', 'Warum? (optional, z. B. eine Skriptseite oder die offizielle Lösung)') + '</span><input type="text" class="sg-reason" maxlength="2000"></label>' +
    '<div class="sg-row"><label class="sg-anon"><input type="checkbox" class="sg-anonc"> ' + L('Hide my nickname from the reviewer', 'Meinen Spitznamen vor der Prüfung verbergen') + '</label><button type="button" class="sg-send">' + L('Send suggestion', 'Vorschlag senden') + '</button></div>' +
    '<p class="sg-msg" aria-live="polite"></p>';
  var anchor = main.querySelector('.sh-comments') || main.querySelector('nav.site.foot');
  anchor ? main.insertBefore(box, anchor) : main.appendChild(box);

  var lastSel = '';
  document.addEventListener('selectionchange', function () {
    var s = window.getSelection && window.getSelection(); var t = s ? String(s).replace(/\s+/g, ' ').trim() : '';
    if (t && s.anchorNode && main.contains(s.anchorNode) && !box.contains(s.anchorNode)) lastSel = t.slice(0, 1000);
  });
  box.addEventListener('toggle', function () { if (box.open && lastSel && !box.querySelector('.sg-quote').value) box.querySelector('.sg-quote').value = lastSel; });
  box.querySelectorAll('.sg-kinds input').forEach(function (r) {
    r.onchange = function () { box.querySelectorAll('.sg-kinds label').forEach(function (l) { l.classList.toggle('on', l.querySelector('input').checked); }); };
  });

  var msg = box.querySelector('.sg-msg'), btn = box.querySelector('.sg-send');
  function say(t) { msg.textContent = t; }
  btn.onclick = function () {
    var body = box.querySelector('.sg-body').value.trim();
    if (body.length < 5) { say(L('Please write your suggestion first (a few words at least).', 'Schreib zuerst deinen Vorschlag (mindestens ein paar Worte).')); return; }
    var S = window.SH; if (!S) { say(L('Still loading, try again in a moment.', 'Lädt noch, versuch es gleich nochmal.')); return; }
    btn.disabled = true; say(L('Sending…', 'Wird gesendet …'));
    S.sdk().then(function () {
      var S2 = window.SH;
      if (!S2.user) { btn.disabled = false; msg.innerHTML = esc(L('Please sign in first (free, it keeps out spam). Your text stays here.', 'Bitte melde dich zuerst an (gratis, das hält Spam fern). Dein Text bleibt hier.')) + ' <a href="#" class="sg-in">' + L('Sign in', 'Anmelden') + '</a>';
        msg.querySelector('.sg-in').onclick = function (e) { e.preventDefault(); try { sessionStorage.setItem('sh-sug-draft', JSON.stringify({ p: page, b: body })); } catch (x) {} S2.signIn(); }; return; }
      var k = box.querySelector('.sg-kinds input:checked');
      return S2.sb.from('suggestions').insert({ user_id: S2.user.id, page: page, section: box.querySelector('.sg-sec').value || null, quote: box.querySelector('.sg-quote').value.trim() || null,
        kind: k ? k.value : 'mistake', body: body, reason: box.querySelector('.sg-reason').value.trim() || null, anonymous: box.querySelector('.sg-anonc').checked })
        .then(function (r) {
          btn.disabled = false;
          if (r.error) { say(L('Could not send: ', 'Senden fehlgeschlagen: ') + r.error.message); return; }
          box.querySelector('.sg-body').value = ''; box.querySelector('.sg-quote').value = ''; box.querySelector('.sg-reason').value = '';
          try { sessionStorage.removeItem('sh-sug-draft'); } catch (x) {}
          say(L('Thank you! Your suggestion was sent. It will be checked against the script; you can follow it on My StudyHub.', 'Danke! Dein Vorschlag wurde gesendet. Er wird mit dem Skript geprüft; den Stand siehst du auf Mein StudyHub.'));
          try { window.umami && umami.track('suggest', { p: page }); } catch (x) {}
        });
    }).catch(function () { btn.disabled = false; say(L('Could not reach the server. Your text stays here; try again later.', 'Server nicht erreichbar. Dein Text bleibt hier; versuch es später nochmal.')); });
  };
  try { var d = JSON.parse(sessionStorage.getItem('sh-sug-draft') || 'null'); if (d && d.p === page) { box.open = true; box.querySelector('.sg-body').value = d.b; } } catch (x) {}
})();
