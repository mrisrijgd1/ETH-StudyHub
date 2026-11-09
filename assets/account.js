/* StudyHub accounts + progress.
   Guests: progress lives in this browser (localStorage "sh-progress").
   Signed in (optional, Google via Supabase): the same progress is synced to the account.
   The Supabase library is only loaded when someone is signed in or signing in. */
(function () {
  var URL_ = 'https://qgntwqqmpdiwexnwsmnm.supabase.co';
  var KEY = 'sb_publishable_Kox04-HlRIieoQbhDlqSuw_ko2783NR';
  var SBKEY = 'sb-qgntwqqmpdiwexnwsmnm-auth-token';
  var DE = /\/de\//.test(location.pathname);
  var BASE = (function () { var s = document.querySelector('script[src*="assets/account.js"]'); return s ? s.getAttribute('src').replace(/account\.js.*$/, '') : 'assets/'; })();
  var ROOT = BASE.replace(/assets\/$/, '');           // '' or '../'
  function L(en, de) { return DE ? de : en; }
  function track(n, d) { try { window.umami && umami.track(n, d || {}); } catch (e) {} }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  /* ---------- local progress ---------- */
  function load() { try { return JSON.parse(localStorage.getItem('sh-progress') || '{}') || {}; } catch (e) { return {}; } }
  function store(p) { try { localStorage.setItem('sh-progress', JSON.stringify(p)); } catch (e) {} }
  var page = (location.pathname.split('/').pop() || 'index.html').replace(/\?.*$/, '');
  var isLesson = /^(lesson|phys|refresher)-\d+\.html$/.test(page);

  /* ---------- Supabase (lazy) ---------- */
  var sb = null, user = null, profile = null, ready;
  function wantSdk() {
    try { if (localStorage.getItem(SBKEY)) return true; } catch (e) {}
    return /access_token=|[?&]code=/.test(location.hash + location.search);
  }
  function sdk() {
    if (ready) return ready;
    ready = new Promise(function (res, rej) {
      if (window.supabase && window.supabase.createClient) return res();
      var s = document.createElement('script'); s.src = BASE + 'supabase.js'; s.onload = res; s.onerror = rej; document.head.appendChild(s);
    }).then(function () {
      sb = window.supabase.createClient(URL_, KEY, { auth: { persistSession: true, detectSessionInUrl: true, storageKey: SBKEY } });
      return sb.auth.getSession();
    }).then(function (r) {
      user = r && r.data && r.data.session ? r.data.session.user : null;
      sb.auth.onAuthStateChange(function (ev, session) { var u = session ? session.user : null; if ((u && u.id) !== (user && user.id)) { user = u; afterAuth(); } });
      return afterAuth();
    });
    return ready;
  }
  function afterAuth() {
    if (!user) { profile = null; render(); return Promise.resolve(); }
    return Promise.all([
      sb.from('profiles').select('nickname,leaderboard').eq('id', user.id).maybeSingle(),
      sb.from('progress').select('page,done,rating,note,updated_at')
    ]).then(function (rs) {
      profile = rs[0].data || null;
      var rows = rs[1].data || [], p = load(), push = [];
      rows.forEach(function (r) {
        var t = Date.parse(r.updated_at) || 0, l = p[r.page];
        if (!l || (l.t || 0) < t) p[r.page] = { done: !!r.done, rating: r.rating || 0, note: r.note || '', t: t };
      });
      Object.keys(p).forEach(function (k) {
        var r = rows.filter(function (x) { return x.page === k; })[0];
        if (!r || (Date.parse(r.updated_at) || 0) < (p[k].t || 0)) push.push(k);
      });
      store(p);
      if (push.length) sb.from('progress').upsert(push.map(row));
      render();
    }).catch(function () { render(); });
  }
  function row(k) { var e = load()[k] || {}; return { page: k, done: !!e.done, rating: e.rating || null, note: e.note || null, updated_at: new Date(e.t || Date.now()).toISOString() }; }
  var timer;
  function save(k, v) {
    var p = load(); p[k] = Object.assign(p[k] || {}, v, { t: Date.now() }); store(p);
    if (sb && user) { clearTimeout(timer); timer = setTimeout(function () { sb.from('progress').upsert([row(k)]).then(function (r) { status(r.error ? L('Could not sync, saved in this browser.', 'Sync fehlgeschlagen, im Browser gespeichert.') : null); }); }, 600); }
  }
  function signIn() {
    track('login');
    sdk().then(function () { sb.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: location.href.split('#')[0] } }); });
  }

  /* ---------- banner link ---------- */
  function banner() {
    var a = document.querySelector('.sh-acct');
    if (!a) return;
    a.textContent = user ? (profile && profile.nickname ? profile.nickname : L('Account', 'Konto')) : L('Sign in', 'Anmelden');
    a.title = user ? L('Your account', 'Dein Konto') : L('Optional: sync your progress across devices', 'Optional: Fortschritt auf allen Geräten');
  }

  /* ---------- progress panel on lessons ---------- */
  var panel;
  function status(msg) {
    var s = panel && panel.querySelector('.shp-status'); if (!s) return;
    s.innerHTML = msg ? esc(msg) : (user
      ? L('Synced to your account', 'Mit deinem Konto synchronisiert') + (profile && profile.nickname ? ' (' + esc(profile.nickname) + ')' : '') + '.'
      : L('Saved in this browser. ', 'In diesem Browser gespeichert. ') + '<a href="' + ROOT + 'account.html">' + L('Sign in to sync across devices (optional)', 'Anmelden, um auf allen Geräten zu synchronisieren (optional)') + '</a>.');
  }
  function buildPanel() {
    if (!isLesson || panel) return;
    var main = document.querySelector('main'); if (!main) return;
    var e = load()[page] || {};
    panel = document.createElement('section'); panel.className = 'box sh-progress'; panel.setAttribute('aria-label', L('Your progress', 'Dein Fortschritt'));
    var stars = '';
    for (var i = 1; i <= 5; i++) stars += '<button type="button" data-r="' + i + '" aria-label="' + i + '">' + i + '</button>';
    panel.innerHTML = '<h2 class="shp-h">' + L('Your progress', 'Dein Fortschritt') + '</h2>' +
      '<label class="shp-done"><input type="checkbox"> ' + L('I finished this lesson', 'Ich habe diese Lektion abgeschlossen') + '</label>' +
      '<div class="shp-rate"><span>' + L('How hard was it? (1 easy, 5 very hard)', 'Wie schwer war es? (1 leicht, 5 sehr schwer)') + '</span><div class="shp-stars">' + stars + '</div></div>' +
      '<label class="shp-note"><span>' + L('Your notes (only you see them)', 'Deine Notizen (nur du siehst sie)') + '</span><textarea rows="3" maxlength="5000" placeholder="' +
      L('What to repeat, questions, page numbers…', 'Was du wiederholen willst, Fragen, Seitenzahlen …') + '"></textarea></label>' +
      '<p class="shp-status"></p>';
    var foot = main.querySelector('nav.site.foot');
    foot ? main.insertBefore(panel, foot) : main.appendChild(panel);
    var cb = panel.querySelector('input'), ta = panel.querySelector('textarea');
    cb.checked = !!e.done; ta.value = e.note || ''; paintRate(e.rating || 0);
    cb.onchange = function () { save(page, { done: cb.checked }); track('progress', { p: page, done: cb.checked }); };
    panel.querySelectorAll('.shp-stars button').forEach(function (b) { b.onclick = function () { var r = +b.dataset.r; if ((load()[page] || {}).rating === r) r = 0; save(page, { rating: r }); paintRate(r); track('rating', { p: page, r: r }); }; });
    var nt; ta.oninput = function () { clearTimeout(nt); nt = setTimeout(function () { save(page, { note: ta.value }); }, 500); };
    status();
  }
  function paintRate(r) { panel.querySelectorAll('.shp-stars button').forEach(function (b) { b.classList.toggle('on', +b.dataset.r === r); b.setAttribute('aria-pressed', +b.dataset.r === r); }); }
  function refreshPanel() {
    if (!panel) return; var e = load()[page] || {};
    panel.querySelector('input').checked = !!e.done;
    var ta = panel.querySelector('textarea'); if (document.activeElement !== ta) ta.value = e.note || '';
    paintRate(e.rating || 0); status();
  }

  /* ---------- ticks on lesson lists ---------- */
  function ticks() {
    var p = load();
    document.querySelectorAll('main a[href]').forEach(function (a) {
      var h = (a.getAttribute('href') || '').split('#')[0].split('/').pop();
      if (!/^(lesson|phys|refresher)-\d+\.html$/.test(h) || a.closest('nav') || a.closest('.sh-progress')) return;
      var done = p[h] && p[h].done, t = a.querySelector('.sh-tick');
      if (done && !t) { t = document.createElement('span'); t.className = 'sh-tick'; t.textContent = '✓'; t.title = L('Done', 'Erledigt'); a.insertBefore(t, a.firstChild); }
      else if (!done && t) t.remove();
    });
  }

  /* ---------- account page ---------- */
  function accountPage() {
    var box = document.getElementById('sh-account'); if (!box) return;
    if (!user) {
      box.innerHTML = '<p>' + L('You are using StudyHub as a guest. Everything works, and your progress is saved in this browser.', 'Du nutzt StudyHub als Gast. Alles funktioniert, und dein Fortschritt wird in diesem Browser gespeichert.') + '</p>' +
        '<p><button type="button" class="start-btn sh-google">' + L('Sign in with Google', 'Mit Google anmelden') + '</button></p>' +
        '<p class="soon">' + L('Optional. Signing in only adds syncing across your devices. Nobody sees your name or email.', 'Optional. Die Anmeldung fügt nur die Synchronisation über deine Geräte hinzu. Niemand sieht deinen Namen oder deine E-Mail.') + '</p>';
      box.querySelector('.sh-google').onclick = signIn;
    } else {
      var nick = profile && profile.nickname || '', lb = !!(profile && profile.leaderboard);
      box.innerHTML = '<p>' + L('Signed in as', 'Angemeldet als') + ' <strong>' + esc(user.email || '') + '</strong> ' + L('(only you see this)', '(nur du siehst das)') + '.</p>' +
        '<label class="sh-field"><span>' + L('Nickname (shown instead of your name, e.g. in the forum later)', 'Spitzname (wird statt deines Namens gezeigt, z. B. später im Forum)') + '</span>' +
        '<input type="text" maxlength="30" value="' + esc(nick) + '" placeholder="' + L('e.g. quiet-fox', 'z. B. stiller-fuchs') + '"></label>' +
        '<label class="sh-field sh-check"><input type="checkbox"' + (lb ? ' checked' : '') + '> ' + L('Show my nickname on the leaderboard (consistency, not speed). Off by default.', 'Meinen Spitznamen in der Bestenliste zeigen (Regelmässigkeit, nicht Tempo). Standardmässig aus.') + '</label>' +
        '<p><button type="button" class="start-btn sh-save">' + L('Save', 'Speichern') + '</button> <span class="sh-msg"></span></p>' +
        '<p><button type="button" class="sh-plain sh-out">' + L('Sign out', 'Abmelden') + '</button> · <button type="button" class="sh-plain sh-del">' + L('Delete my account', 'Mein Konto löschen') + '</button></p>';
      var inp = box.querySelector('input[type=text]'), chk = box.querySelector('.sh-check input'), msg = box.querySelector('.sh-msg');
      box.querySelector('.sh-save').onclick = function () {
        var n = inp.value.trim();
        if (n && (n.length < 2 || n.length > 30)) { msg.textContent = L('2 to 30 characters, please.', 'Bitte 2 bis 30 Zeichen.'); return; }
        sb.from('profiles').upsert({ id: user.id, nickname: n || null, leaderboard: chk.checked }).then(function (r) {
          if (r.error) { msg.textContent = /duplicate|unique/i.test(r.error.message) ? L('This nickname is taken.', 'Dieser Spitzname ist vergeben.') : L('Could not save: ', 'Speichern fehlgeschlagen: ') + r.error.message; return; }
          profile = { nickname: n || null, leaderboard: chk.checked }; msg.textContent = L('Saved.', 'Gespeichert.'); banner();
        });
      };
      box.querySelector('.sh-out').onclick = function () { sb.auth.signOut().then(function () { user = null; profile = null; render(); }); };
      box.querySelector('.sh-del').onclick = function () {
        if (!confirm(L('Delete your account, nickname and synced progress for good? The progress in this browser stays.', 'Konto, Spitzname und synchronisierten Fortschritt endgültig löschen? Der Fortschritt in diesem Browser bleibt.'))) return;
        sb.rpc('delete_my_account').then(function (r) {
          if (r.error) { msg.textContent = r.error.message; return; }
          sb.auth.signOut().then(function () { user = null; profile = null; render(); alert(L('Your account is deleted.', 'Dein Konto ist gelöscht.')); });
        });
      };
    }
    // save / load as a file (works for guests too)
    var io = document.getElementById('sh-io');
    if (io && !io.dataset.on) {
      io.dataset.on = 1;
      io.querySelector('.sh-export').onclick = function () {
        var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify({ studyhub: 1, progress: load() }, null, 1)], { type: 'application/json' }));
        a.download = 'studyhub-progress.json'; document.body.appendChild(a); a.click(); a.remove();
      };
      var file = io.querySelector('input[type=file]');
      io.querySelector('.sh-import').onclick = function () { file.click(); };
      file.onchange = function () {
        var f = file.files[0]; if (!f) return; var rd = new FileReader();
        rd.onload = function () {
          try {
            var d = JSON.parse(rd.result).progress, p = load(), n = 0;
            Object.keys(d || {}).forEach(function (k) { if (/^[\w.-]{1,100}$/.test(k) && (!p[k] || (p[k].t || 0) < (d[k].t || 0))) { p[k] = d[k]; n++; if (sb && user) save(k, {}); } });
            store(p); io.querySelector('.sh-iomsg').textContent = L('Loaded ' + n + ' pages.', n + ' Seiten geladen.'); ticks();
          } catch (e) { io.querySelector('.sh-iomsg').textContent = L('This is not a StudyHub progress file.', 'Das ist keine StudyHub-Fortschrittsdatei.'); }
        };
        rd.readAsText(f);
      };
    }
    var sum = document.getElementById('sh-summary');
    if (sum) {
      var p = load(), ks = Object.keys(p).filter(function (k) { return p[k].done; }).sort();
      sum.innerHTML = ks.length ? '<p>' + L('Finished: ', 'Abgeschlossen: ') + ks.length + '</p><ul>' + ks.map(function (k) {
        return '<li><a href="' + k + '">' + esc(k.replace('.html', '').replace('lesson-', L('Analysis ', 'Analysis ')).replace('phys-', L('Physics ', 'Physik ')).replace('refresher-', L('Refresher ', 'Repetition '))) + '</a>' +
          (p[k].rating ? ' · ' + L('difficulty ', 'Schwierigkeit ') + p[k].rating + '/5' : '') + (p[k].note ? ' · ' + L('note', 'Notiz') : '') + '</li>';
      }).join('') + '</ul>' : '<p>' + L('Nothing ticked yet. At the end of each lesson there is a small “Your progress” box.', 'Noch nichts abgehakt. Am Ende jeder Lektion gibt es ein kleines Feld „Dein Fortschritt“.') + '</p>';
    }
  }

  function render() { banner(); refreshPanel(); ticks(); accountPage(); }

  /* ---------- styles ---------- */
  var css = document.createElement('style');
  css.textContent = '@media (min-width:1100px){.sh-menu .sh-acct{margin-left:auto}.sh-menu .lang-switch{margin-left:.9rem!important}}.sh-acct{order:4;font-weight:600;text-decoration:none;font-size:.92rem;white-space:nowrap;max-width:9rem;overflow:hidden;text-overflow:ellipsis}' +
    '.sh-progress{margin:2rem 0 1rem}.sh-progress .shp-h{margin-top:0}.shp-done{display:flex;gap:.5rem;align-items:center;font-weight:600;cursor:pointer}' +
    '.shp-done input{width:1.2rem;height:1.2rem}.shp-rate{margin:.8rem 0;display:flex;flex-wrap:wrap;gap:.4rem .8rem;align-items:center}' +
    '.shp-stars{display:flex;gap:.3rem}.shp-stars button{font:inherit;width:2.2rem;height:2.2rem;border-radius:50%;border:1px solid var(--rule,#ccd);background:none;color:inherit;cursor:pointer}' +
    '.shp-stars button.on{background:var(--accent,#5b5bd6);color:#fff;border-color:var(--accent,#5b5bd6)}' +
    '.shp-note{display:block}.shp-note span,.sh-field span{display:block;margin-bottom:.3rem}.shp-note textarea,.sh-field input[type=text]{width:100%;box-sizing:border-box;font:inherit;padding:.5rem;border:1px solid var(--rule,#ccd);border-radius:8px;background:var(--surface,#fff);color:inherit}' +
    '.shp-status{font-size:.88rem;opacity:.8;margin-bottom:0}.sh-tick{color:var(--accent,#5b5bd6);font-weight:800;margin-right:.35rem}' +
    '.sh-field{display:block;margin:1rem 0}.sh-check{display:flex;gap:.5rem;align-items:flex-start}.sh-plain{font:inherit;background:none;border:0;color:var(--accent,#5b5bd6);text-decoration:underline;cursor:pointer;padding:0}' +
    'button.start-btn,.start-btn{display:inline-block;border:0;cursor:pointer;font:inherit;font-weight:700;padding:.55rem 1.2rem;border-radius:999px;background:var(--accent,#5b5bd6);color:#fff!important;text-decoration:none}';
  document.head.appendChild(css);

  function init() { buildPanel(); render(); if (wantSdk() || document.getElementById('sh-account')) sdk().catch(function () { status(L('Sync is unavailable right now; your progress is saved in this browser.', 'Synchronisation gerade nicht verfügbar; dein Fortschritt ist im Browser gespeichert.')); }); }
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', init) : init();
})();
