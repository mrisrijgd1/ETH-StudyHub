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
  (function () { var o = document.createElement('script'); o.src = BASE + 'overlay.js?v=pdf1120'; document.head.appendChild(o); })(); // personal design overlay
  (function () { // "Suggest a fix or addition" box on content pages (suggest.js)
    var pg = (location.pathname.split('/').pop() || '').replace(/\.html.*$/, '');
    if (!/^(lesson|phys|refresher|serie|linalg)-[a-z]?\d+$|^(toolbox|moves|tree|flashcards)$/.test(pg)) return;
    var s = document.createElement('script'); s.src = BASE + 'suggest.js?v=a07c4919'; document.head.appendChild(s);
  })();
  function track(n, d) { try { window.umami && umami.track(n, d || {}); } catch (e) {} }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  /* ---------- local progress ---------- */
  function load() { try { return JSON.parse(localStorage.getItem('sh-progress') || '{}') || {}; } catch (e) { return {}; } }
  function store(p) { try { localStorage.setItem('sh-progress', JSON.stringify(p)); } catch (e) {} }
  var page = (location.pathname.split('/').pop() || 'index.html').replace(/\?.*$/, '');
  var isLesson = /^(lesson|phys|refresher|linalg|chemie)-\d+\.html$|^serie-[ap]\d+\.html$/.test(page), isSheet = /^serie-/.test(page);

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
      sb.auth.onAuthStateChange(function (ev, session) { var u = session ? session.user : null; if ((u && u.id) !== (user && user.id)) { user = u; setTimeout(afterAuth, 0); } }); // setTimeout: never call Supabase inside this callback (it can deadlock)
      return afterAuth();
    });
    return ready;
  }
  /* ---------- app state sync (Exam Dive, Chemie, flashcards app) ----------
     One row per app in public.app_state. Rule: a side that did not change since the last sync takes the
     other side; if both changed, the two are merged (Dive: best of both + all dives; Chemie: union). */
  var APPS = { dive: 'studyhub.dive.v1', chemie: 'studyhub-chemie-v1', flashcards: 'studyhub-analysis-flashcards-v1' }; // flashcards: OK'd by the app's owner via Srish, 20 Nov
  var SYNCMETA = 'sh-appsync';
  function hsh(str) { var h = 5381; for (var i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) | 0; return String(h); }
  function lget(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lset(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function meta() { try { return JSON.parse(lget(SYNCMETA) || '{}') || {}; } catch (e) { return {}; } }
  function obj(x) { return x && typeof x === 'object' && !Array.isArray(x) ? x : {}; }
  var MERGE = {
    dive: function (a, b) {
      var bests = Object.assign({}, obj(b.bests));
      Object.keys(obj(a.bests)).forEach(function (k) { var x = a.bests[k], y = bests[k];
        if (!y || (x.depth || 0) > (y.depth || 0) || ((x.depth || 0) === (y.depth || 0) && (x.answers || 0) > (y.answers || 0))) bests[k] = x; });
      var seen = {}, dives = [].concat(a.dives || [], b.dives || []).filter(function (d) { var k = JSON.stringify([d.date, d.depth, d.subject, d.timer]); if (seen[k]) return false; seen[k] = 1; return true; });
      dives.sort(function (x, y) { return String(y.date || '').localeCompare(String(x.date || '')); });
      return Object.assign({}, b, a, { v: 1, bests: bests, dives: dives.slice(0, 100) });
    },
    flashcards: function (a, b) { // per user profile and card, the more recently studied state wins; logs are joined
      var out = Object.assign({}, b, a, { users: {} }), ua = obj(a.users), ub = obj(b.users);
      Object.keys(ub).concat(Object.keys(ua)).forEach(function (id) {
        if (out.users[id]) return;
        var x = obj(ua[id]), y = obj(ub[id]), cards = Object.assign({}, obj(y.cards));
        Object.keys(obj(x.cards)).forEach(function (c) { var p = x.cards[c], q = cards[c];
          if (!q || (p.last || 0) > (q.last || 0) || ((p.last || 0) === (q.last || 0) && (p.n || 0) >= (q.n || 0))) cards[c] = p; });
        var seen = {}, log = [].concat(y.log || [], x.log || []).filter(function (e) { var k = JSON.stringify(e); if (seen[k]) return false; seen[k] = 1; return true; });
        var ls = [x.lastSession, y.lastSession].filter(Boolean).sort(function (m, n) { return (n.at || 0) - (m.at || 0); })[0]; // "Continue where you left off" = the newer device's deck
        out.users[id] = Object.assign({}, y, x, { cards: cards, log: log.slice(-5000) }, ls ? { lastSession: ls } : {});
      });
      return out;
    },
    chemie: function (a, b) {
      var out = Object.assign({}, b, a), done = {};
      (b.done || []).concat(a.done || []).forEach(function (n) { done[n] = 1; });
      out.done = Object.keys(done).map(Number).sort(function (x, y) { return x - y; });
      ['notes', 'work', 'quiz', 'confidence', 'timers'].forEach(function (k) { out[k] = Object.assign({}, obj(b[k]), obj(a[k])); });
      return out;
    }
  };
  function appSync() {
    if (!sb || !user) return Promise.resolve();
    return sb.from('app_state').select('app,data').then(function (r) {
      if (r.error) return; // table not set up yet: stay local
      var remote = {}, m = meta(), push = [];
      (r.data || []).forEach(function (row) { remote[row.app] = row.data; });
      Object.keys(APPS).forEach(function (app) {
        var ls = lget(APPS[app]), R = remote[app], fin = null, local = null;
        try { local = ls ? JSON.parse(ls) : null; } catch (e) { local = null; }
        var changed = ls != null && hsh(ls) !== m[app];
        if (R == null) { if (local) { fin = ls; push.push({ app: app, data: local }); } }
        else if (local == null || !changed) { fin = JSON.stringify(R); if (fin !== ls) lset(APPS[app], fin); }
        else { var mg = MERGE[app](local, R); fin = JSON.stringify(mg); lset(APPS[app], fin); push.push({ app: app, data: mg }); }
        if (fin != null) m[app] = hsh(fin);
      });
      lset(SYNCMETA, JSON.stringify(m));
      if (push.length) return sb.from('app_state').upsert(push.map(function (x) { return { app: x.app, data: x.data, updated_at: new Date().toISOString() }; }));
    }).catch(function () {});
  }
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') appSync(); });

  /* ---------- offline: service worker + "Save for offline" on My StudyHub ---------- */
  var swReady = ('serviceWorker' in navigator && location.protocol !== 'file:') ? navigator.serviceWorker.register(ROOT + 'sw.js').catch(function () { return null; }) : Promise.resolve(null);
  function offlineBox() {
    var box = document.getElementById('sh-offline'); if (!box) return;
    if (!('serviceWorker' in navigator) || !window.caches) { box.insertAdjacentHTML('beforeend', '<p>' + L('This browser cannot save pages for offline use.', 'Dieser Browser kann keine Seiten offline speichern.') + '</p>'); return; }
    var lang = DE ? 'de' : 'en';
    box.insertAdjacentHTML('beforeend',
      '<p>' + L('To have <strong>everything</strong> ready offline (all lessons, refreshers, exercise sheets, flashcards, Exam Dive and Chemie, about 15 MB), save it once on this device. PDFs and old exams stay online only.',
               'Damit <strong>alles</strong> offline bereit ist (alle Lektionen, Refresher, Übungsblätter, Lernkarten, Exam Dive und Chemie, etwa 15 MB), speichere es einmal auf diesem Gerät. PDFs und alte Prüfungen bleiben nur online.') + '</p>' +
      '<p><button type="button" class="sh-off-btn">' + L('Save for offline', 'Für offline speichern') + '</button> <span class="sh-off-msg" role="status"></span></p>' +
      '<p>' + L('To get StudyHub as an app on your home screen: on iPhone, Safari → Share → <em>Add to Home Screen</em>; on Android or a laptop, Chrome → menu → <em>Install app</em>.',
               'StudyHub als App auf dem Startbildschirm: iPhone: Safari → Teilen → <em>Zum Home-Bildschirm</em>; Android oder Laptop: Chrome → Menü → <em>App installieren</em>.') + '</p>');
    var btn = box.querySelector('.sh-off-btn'), msg = box.querySelector('.sh-off-msg');
    try { var last = localStorage.getItem('sh-offline-' + lang); if (last) msg.textContent = L('Saved on ', 'Gespeichert am ') + new Date(+last).toLocaleDateString(DE ? 'de-CH' : 'en-GB') + L('. Save again after updates.', '. Nach Updates erneut speichern.'); } catch (e) {}
    btn.onclick = function () {
      btn.disabled = true; msg.textContent = L('Preparing…', 'Wird vorbereitet …');
      Promise.all([swReady.then(function () { return navigator.serviceWorker.ready; }), fetch(ROOT + 'offline-list.json', { cache: 'no-store' }).then(function (r) { return r.json(); })]).then(function (x) {
        var reg = x[0], urls = x[1][lang] || [];
        var ch = new MessageChannel();
        ch.port1.onmessage = function (e) {
          var d = e.data || {};
          msg.textContent = d.done < d.total ? L('Saving… ', 'Wird gespeichert … ') + d.done + ' / ' + d.total
            : (d.failed ? L('Saved, except ', 'Gespeichert, außer ') + d.failed + L(' files (try again online).', ' Dateien (online erneut versuchen).') : L('Done: everything works offline on this device.', 'Fertig: alles funktioniert auf diesem Gerät offline.'));
          if (d.done >= d.total) { btn.disabled = false; try { localStorage.setItem('sh-offline-' + lang, String(Date.now())); } catch (er) {} track('offline-save', { lang: lang, failed: d.failed }); }
        };
        (reg.active || navigator.serviceWorker.controller).postMessage({ type: 'save', urls: urls.map(function (u) { return /^https?:/.test(u) ? u : ROOT + u; }) }, [ch.port2]);
      }).catch(function () { btn.disabled = false; msg.textContent = L('Could not start. Are you online?', 'Konnte nicht starten. Bist du online?'); });
    };
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', offlineBox); else offlineBox();

  function afterAuth() {
    if (!user) { profile = null; render(); return Promise.resolve(); }
    appSync();
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
    var all = document.querySelectorAll('.sh-acct');
    for (var i = 0; i < all.length; i++) bannerOne(all[i]);
  }
  function bannerOne(a) {
    var nm = user ? (profile && profile.nickname ? profile.nickname : L('Account', 'Konto')) : L('Sign in', 'Anmelden');
    var ico = user ? esc((nm.trim()[0] || '?').toUpperCase())
      : '<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="5.2" r="3" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M2.3 14.5c.7-3 3-4.6 5.7-4.6s5 1.6 5.7 4.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>';
    a.innerHTML = '<span class="acct-full">' + esc(nm) + '</span><span class="acct-ico" aria-hidden="true">' + ico + '</span>';
    a.setAttribute('aria-label', nm);
    a.title = user ? L('Your account', 'Dein Konto') : L('Optional: sync your progress across devices', 'Optional: Fortschritt auf allen Geräten');
  }

  /* ---------- progress panel on lessons ---------- */
  var panel;
  function status(msg) {
    var s = panel && panel.querySelector('.shp-status'); if (!s) return;
    s.innerHTML = msg ? esc(msg) : (user
      ? L('Synced to your account', 'Mit deinem Konto synchronisiert') + (profile && profile.nickname ? ' (' + esc(profile.nickname) + ')' : '') + '.'
      : L('Saved in this browser. ', 'In diesem Browser gespeichert. ') + '<a href="account.html">' + L('Sign in to sync across devices (optional)', 'Anmelden, um auf allen Geräten zu synchronisieren (optional)') + '</a>.');
  }
  function buildPanel() {
    if (!isLesson || panel) return;
    var main = document.querySelector('main'); if (!main) return;
    var e = load()[page] || {};
    panel = document.createElement('section'); panel.className = 'box sh-progress'; panel.setAttribute('aria-label', L('Your progress', 'Dein Fortschritt'));
    var stars = '';
    for (var i = 1; i <= 5; i++) stars += '<button type="button" data-r="' + i + '" aria-label="' + i + '">' + i + '</button>';
    panel.innerHTML = '<h2 class="shp-h">' + L('Your progress', 'Dein Fortschritt') + '</h2>' +
      '<label class="shp-done"><input type="checkbox"> ' + (isSheet ? L('I worked through this sheet', 'Ich habe dieses Blatt durchgearbeitet') : L('I finished this lesson', 'Ich habe diese Lektion abgeschlossen')) + '</label>' +
      '<div class="shp-rate"><span>' + L('How hard was it? (1 easy, 5 very hard)', 'Wie schwer war es? (1 leicht, 5 sehr schwer)') + '</span><div class="shp-stars">' + stars + '</div></div>' +
      '<label class="shp-note"><span>' + L('Your notes (only you see them)', 'Deine Notizen (nur du siehst sie)') + '</span><textarea rows="3" maxlength="5000" placeholder="' +
      L('What to repeat, questions, page numbers…', 'Was du wiederholen willst, Fragen, Seitenzahlen …') + '"></textarea></label>' +
      '<p class="shp-status"></p>';
    var foot = main.querySelector('nav.site.foot');
    foot ? main.insertBefore(panel, foot) : main.appendChild(panel);
    var cm = document.createElement('section'); cm.className = 'sh-comments'; cm.innerHTML = '<h2 id="comments">' + L('Comments and questions', 'Kommentare und Fragen') + '</h2><div id="sh-forum" data-topic="' + page.replace('.html', '') + '"><p class="soon">' + L('Loading comments…', 'Kommentare werden geladen …') + '</p></div>';
    panel.parentNode.insertBefore(cm, panel.nextSibling);
    if ('IntersectionObserver' in window) { var io2 = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { io2.disconnect(); sdk().catch(function () {}); } }, { rootMargin: '400px' }); io2.observe(cm); } else sdk();
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
      if (!/^(lesson|phys|refresher|linalg|chemie)-\d+\.html$|^serie-[ap]\d+\.html$/.test(h) || a.closest('nav') || a.closest('.sh-progress')) return;
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
      var p = load();
      var GROUPS = [
        [L('Analysis I', 'Analysis I'), 'analysis.html', [['lesson-', 22, L('Lessons', 'Lektionen')], ['refresher-', 12, L('Refresher units', 'Repetitionseinheiten')], ['serie-a', 6, L('Übungsblätter explained', 'Übungsblätter erklärt')]]],
        ['Allgemeine Chemie I (PC)', ROOT + 'chemie/', [['chemie-', 27, L('Lessons', 'Lektionen')]]],
        [L('Physics I', 'Physik I'), 'physics.html', [['phys-', 16, L('Lessons', 'Lektionen')], ['serie-p', 7, L('Serien explained', 'Serien erklärt')]]],
        [L('Linear Algebra I', 'Lineare Algebra I'), 'linalg.html', [['linalg-', 16, L('Lessons (so far)', 'Lektionen (bisher)')]]]];
      function nameOf(k) {
        var n = (k.match(/(\d+)\.html$/) || [])[1]; n = n ? String(+n) : k;
        if (/^lesson-/.test(k)) return L('Analysis lesson ', 'Analysis-Lektion ') + n;
        if (/^refresher-/.test(k)) return L('Refresher unit ', 'Repetitionseinheit ') + n;
        if (/^serie-a/.test(k)) return L('Übungsblatt ', 'Übungsblatt ') + n;
        if (/^chemie-/.test(k)) return 'Chemie I (PC) · ' + L('Lesson ', 'Lektion ') + n;
        if (/^phys-/.test(k)) return L('Physics lesson ', 'Physik-Lektion ') + n;
        if (/^serie-p/.test(k)) return L('Physics Serie ', 'Physik-Serie ') + n;
        if (/^linalg-/.test(k)) return L('Linear Algebra lesson ', 'Lineare Algebra, Lektion ') + n;
        return k.replace('.html', '');
      }
      var keys = Object.keys(p).filter(function (k) { return /^(lesson|phys|refresher|linalg|chemie)-\d+\.html$|^serie-[ap]\d+\.html$/.test(k); });
      var any = keys.some(function (k) { return p[k].done; }), html = '';
      GROUPS.forEach(function (g) {
        var rows = '', fin = [];
        g[2].forEach(function (t) {
          var ks = keys.filter(function (k) { return k.indexOf(t[0]) === 0 && /\d+\.html$/.test(k); });
          var d = ks.filter(function (k) { return p[k].done; }), rs = ks.map(function (k) { return p[k].rating; }).filter(function (r) { return r > 0; });
          var pct = Math.min(100, Math.round(100 * d.length / t[1]));
          rows += '<div class="shs-row"><span class="shs-lab">' + t[2] + '</span><span class="shs-bar" role="img" aria-label="' + d.length + ' / ' + t[1] + '"><i style="width:' + pct + '%"></i></span><span class="shs-num">' + d.length + ' / ' + t[1] +
            (rs.length ? '<small> · ' + L('avg. difficulty ', 'Ø Schwierigkeit ') + (Math.round(10 * rs.reduce(function (a, b) { return a + b; }, 0) / rs.length) / 10) + '/5</small>' : '') + '</span></div>';
          fin = fin.concat(ks.filter(function (k) { return p[k].done || p[k].rating || p[k].note; }).sort());
        });
        html += '<div class="box shs"><h3><a href="' + g[1] + '">' + g[0] + '</a></h3>' + rows +
          (fin.length ? '<details><summary>' + L('Pages with ticks, ratings or notes', 'Seiten mit Häkchen, Bewertungen oder Notizen') + ' (' + fin.length + ')</summary><ul>' + fin.map(function (k) {
            return '<li><a href="' + (/^chemie-/.test(k) ? ROOT + 'chemie/#lesson/' + parseInt(k.match(/\d+/)[0], 10) : k) + '">' + esc(nameOf(k)) + '</a>' + (p[k].done ? ' ✓' : '') + (p[k].rating ? ' · ' + L('difficulty ', 'Schwierigkeit ') + p[k].rating + '/5' : '') + (p[k].note ? ' · ' + L('note: ', 'Notiz: ') + '<em>' + esc(String(p[k].note).slice(0, 80)) + (String(p[k].note).length > 80 ? '…' : '') + '</em>' : '') + '</li>';
          }).join('') + '</ul></details>' : '') + '</div>';
      });
      sum.innerHTML = (any ? '' : '<p>' + L('Nothing ticked yet. At the end of each lesson and each explained sheet there is a small “Your progress” box.', 'Noch nichts abgehakt. Am Ende jeder Lektion und jedes erklärten Blatts gibt es ein kleines Feld „Dein Fortschritt“.') + '</p>') + html;
      if (!document.getElementById('shs-css')) { var c = document.createElement('style'); c.id = 'shs-css'; c.textContent = '.shs h3{margin:0 0 .5rem}.shs-row{display:grid;grid-template-columns:minmax(8rem,12rem) 1fr auto;gap:.6rem;align-items:center;margin:.35rem 0}.shs-bar{height:.55rem;border-radius:99px;background:color-mix(in srgb,currentColor 12%,transparent);overflow:hidden}.shs-bar i{display:block;height:100%;background:var(--accent,#5b5bd6);border-radius:99px}.shs-num{font-variant-numeric:tabular-nums;white-space:nowrap}.shs-num small{opacity:.75}@media(max-width:560px){.shs-row{grid-template-columns:1fr auto}.shs-bar{grid-column:1/-1;order:3}}.shs details{margin-top:.5rem}.shs-perf table{width:100%;border-collapse:collapse;font-size:.92rem}.shs-perf td,.shs-perf th{text-align:left;padding:.35rem .4rem;border-bottom:1px solid var(--rule,#ccd)}.shs-perf .meta{font-size:.82rem;opacity:.75}'; document.head.appendChild(c); }
    }
    var pf = document.getElementById('sh-perf');
    if (pf) {
      if (!(sb && user)) pf.innerHTML = '<p>' + L('Marks from your AI, timed mocks and your mistake fingerprint appear here once you <a href="#account">sign in</a>. They are saved in your account, not in the browser.', 'Resultate deiner KI, Probeprüfungen und dein Fehler-Fingerabdruck erscheinen hier, sobald du dich <a href="#account">anmeldest</a>. Sie werden in deinem Konto gespeichert, nicht im Browser.') + '</p>';
      else Promise.all([sb.from('results').select('item_id,kind,score,max_score,summary,mistakes,created_at').order('created_at', { ascending: false }).limit(100),
        sb.from('mocks').select('exam_id,minutes,started_at,submitted_at,score,max_score').order('started_at', { ascending: false }).limit(20)]).then(function (r) {
        var res = r[0].data || [], mocks = r[1].data || [], scored = res.filter(function (x) { return x.max_score > 0; });
        var avg = scored.length ? Math.round(100 * scored.reduce(function (s, x) { return s + x.score / x.max_score; }, 0) / scored.length) : null;
        var types = {}; res.forEach(function (x) { (x.mistakes || []).forEach(function (m) { types[m.type] = (types[m.type] || 0) + 1; }); });
        var tl = Object.keys(types).sort(function (a, b) { return types[b] - types[a]; });
        pf.innerHTML = '<div class="shs-perf"><p><strong>' + scored.length + '</strong> ' + L('marked attempts', 'korrigierte Versuche') + (avg !== null ? ' · ' + L('average ', 'Durchschnitt ') + '<strong>' + avg + '%</strong>' : '') + ' · <strong>' + mocks.length + '</strong> ' + L('mocks', 'Probeprüfungen') + '</p>' +
          '<h3>' + L('Mistake fingerprint', 'Fehler-Fingerabdruck') + '</h3>' + (tl.length ? '<p>' + tl.map(function (t) { return esc(t) + ' <strong>' + types[t] + '×</strong>'; }).join(' · ') + '</p>' : '<p class="meta">' + L('Appears once your AI has marked some of your work (through the StudyHub connector).', 'Erscheint, sobald deine KI einige Arbeiten korrigiert hat (über den StudyHub-Connector).') + '</p>') +
          (mocks.length ? '<h3>' + L('Timed mocks', 'Probeprüfungen') + '</h3><table><tr><th>' + L('Exam', 'Prüfung') + '</th><th>' + L('Date', 'Datum') + '</th><th>' + L('Score', 'Punkte') + '</th></tr>' + mocks.map(function (m) { return '<tr><td>' + esc(m.exam_id) + '</td><td>' + new Date(m.started_at).toLocaleDateString() + '</td><td>' + (m.max_score ? m.score + ' / ' + m.max_score : (m.submitted_at ? L('not marked yet', 'noch nicht korrigiert') : L('running', 'läuft'))) + '</td></tr>'; }).join('') + '</table>' : '') +
          (res.length ? '<h3>' + L('Latest marks', 'Neueste Resultate') + '</h3><table><tr><th>' + L('What', 'Was') + '</th><th>' + L('Score', 'Punkte') + '</th><th>' + L('Feedback', 'Rückmeldung') + '</th></tr>' + res.slice(0, 20).map(function (x) { return '<tr><td>' + esc(x.item_id) + '<div class="meta">' + new Date(x.created_at).toLocaleDateString() + '</div></td><td>' + (x.max_score ? x.score + ' / ' + x.max_score : '–') + '</td><td>' + esc((x.summary || '').slice(0, 220)) + '</td></tr>'; }).join('') + '</table>' : '') + '</div>';
      });
    }
  }


  /* ---------- community: forum + leaderboard ---------- */
  var openThread = null;
  function topicName(t) {
    if (!t || t === 'general') return L('General', 'Allgemein');
    var m = t.match(/^(lesson|phys|refresher)-(\d+)$/);
    if (!m) return esc(t);
    return ({ lesson: L('Analysis lesson ', 'Analysis-Lektion '), phys: L('Physics lesson ', 'Physik-Lektion '), refresher: L('Refresher unit ', 'Repetitionseinheit ') })[m[1]] + (+m[2]);
  }
  function when(d) { try { return new Date(d).toLocaleDateString(DE ? 'de-CH' : 'en-GB', { day: 'numeric', month: 'short' }); } catch (e) { return ''; } }
  function txt(s) { return esc(s).replace(/\n/g, '<br>'); }
  function qTopic() { var m = location.search.match(/[?&]topic=([\w-]{1,40})/); return m ? m[1] : null; }
  function forumPage() {
    var box = document.getElementById('sh-forum'); if (!box || !sb) return;
    var inLesson = !!box.dataset.topic, topic = box.dataset.topic || qTopic();
    if (inLesson) return ytComments(box, topic);
    if (openThread) return threadView(box, openThread);
    var can = !!user;
    box.innerHTML = (inLesson ? '<p class="soon">' + L('Shared by the English and German version of this lesson. Also listed in the ', 'Gemeinsam für die englische und deutsche Version dieser Lektion. Auch im ') + '<a href="community.html?topic=' + esc(topic) + '">' + L('forum', 'Forum') + '</a>' + L('.', ' aufgeführt.') + '</p>'
        : '<p class="sh-filter"><label>' + L('Show: ', 'Anzeigen: ') + '<select class="f-topic"><option value="">' + L('All discussions', 'Alle Diskussionen') + '</option><option value="general"' + (topic === 'general' ? ' selected' : '') + '>' + L('General', 'Allgemein') + '</option>' + (topic && topic !== 'general' ? '<option value="' + esc(topic) + '" selected>' + topicName(topic) + '</option>' : '') + '</select></label></p>') +
      (can ? '<details class="box sh-new"><summary>' + (inLesson ? L('Write a comment or question', 'Kommentar oder Frage schreiben') : L('Start a new discussion', 'Neue Diskussion starten')) + '</summary>' +
        (inLesson ? '<input type="hidden" class="f-title" value="">' : '<label class="sh-field"><span>' + L('Title', 'Titel') + '</span><input type="text" class="f-title" maxlength="150"></label>') +
        '<label class="sh-field"><span>' + L('Your message', 'Deine Nachricht') + '</span><textarea class="f-body" rows="5" maxlength="5000"></textarea></label>' +
        '<label class="sh-field sh-check"><input type="checkbox" class="f-anon"> ' + L('Post anonymously', 'Anonym posten') + '</label>' +
        '<p><button type="button" class="start-btn f-send">' + L('Post', 'Posten') + '</button> <span class="sh-msg"></span></p></details>'
        : '<p>' + L('Everyone can read. To write, ', 'Lesen kann jede und jeder. Zum Schreiben ') + '<a href="account.html">' + L('sign in (free, optional, you can stay anonymous)', 'melde dich an (gratis, optional, du kannst anonym bleiben)') + '</a>.</p>') +
      '<div class="sh-threads"><p>' + L('Loading…', 'Wird geladen …') + '</p></div>';
    var tsel = box.querySelector('.f-topic'); if (tsel) tsel.onchange = function () { history.replaceState(null, '', tsel.value ? '?topic=' + tsel.value : location.pathname); openThread = null; forumPage(); };
    if (can) box.querySelector('.f-send').onclick = function () {
      var t = box.querySelector('.f-title').value.trim(), b = box.querySelector('.f-body').value.trim(), msg = box.querySelector('.sh-msg');
      if (inLesson) t = (b.split('\n')[0] || '').slice(0, 140) + ((b.split('\n')[0] || '').length > 140 ? '…' : ''); if (inLesson && t.length < 3) t = (t + '   ').slice(0, 3);
      if (t.length < 3 || !b) { msg.textContent = L('Please write a title (3+ characters) and a message.', 'Bitte Titel (mind. 3 Zeichen) und Nachricht schreiben.'); return; }
      sb.from('forum_threads').insert({ topic: topic || 'general', title: t, body: b, anonymous: box.querySelector('.f-anon').checked }).then(function (r) {
        if (r.error) { msg.textContent = r.error.message; return; } track('forum', { a: 'thread' }); forumPage();
      });
    };
    sb.rpc('forum_threads_list', { p_topic: topic }).then(function (r) {
      var list = box.querySelector('.sh-threads');
      if (r.error) { list.innerHTML = '<p>' + L('The forum is not available right now.', 'Das Forum ist gerade nicht verfügbar.') + '</p>'; return; }
      var d = r.data || [], sel = box.querySelector('.f-topic');
      if (sel && !topic) { var seen = {}; d.forEach(function (x) { if (x.topic && x.topic !== 'general' && !seen[x.topic]) { seen[x.topic] = 1; var o = document.createElement('option'); o.value = x.topic; o.textContent = topicName(x.topic); sel.appendChild(o); } }); }
      list.innerHTML = d.length ? d.map(function (t) {
        return '<a class="box sh-thread" href="#t' + t.id + '" data-id="' + t.id + '"><strong>' + esc(t.title) + '</strong><span>' + topicName(t.topic) + ' · ' + esc(t.author) + ' · ' + when(t.created_at) + ' · ' + t.replies + ' ' + L(t.replies == 1 ? 'reply' : 'replies', t.replies == 1 ? 'Antwort' : 'Antworten') + '</span></a>';
      }).join('') : '<p>' + (inLesson ? L('No comments yet.', 'Noch keine Kommentare.') : L('No discussions here yet. Be the first!', 'Hier gibt es noch keine Diskussionen. Sei die erste Person!')) + '</p>';
      list.querySelectorAll('.sh-thread').forEach(function (a) { a.onclick = function (e) { e.preventDefault(); openThread = d.filter(function (x) { return x.id == a.dataset.id; })[0]; forumPage(); window.scrollTo(0, box.offsetTop - 80); }; });
    });
  }

  /* ---------- lesson comments, video-site style (Srish 2026-11-10) ---------- */
  function initial(n) { return esc(((n || '?').trim()[0] || '?').toUpperCase()); }
  function myName() { return profile && profile.nickname ? profile.nickname : L('You', 'Du'); }
  function av(n, anon) { return '<span class="yt-av' + (anon ? ' yt-anon' : '') + '" aria-hidden="true">' + (anon ? '?' : initial(n)) + '</span>'; }
  function composer(ph, btn, small) {
    if (!user) return '<div class="yt-new' + (small ? ' yt-small' : '') + '">' + av('', true) + '<a class="yt-fake" href="account.html">' + L('Sign in to comment (you can stay anonymous)', 'Zum Kommentieren anmelden (auch anonym möglich)') + '</a></div>';
    return '<div class="yt-new' + (small ? ' yt-small' : '') + '">' + av(myName()) + '<div class="yt-in"><textarea class="yt-ta" rows="1" maxlength="5000" placeholder="' + ph + '"></textarea>' +
      '<div class="yt-bar" hidden><label class="yt-anonl"><input type="checkbox" class="yt-anoncb"> ' + L('Anonymous', 'Anonym') + '</label><span class="yt-msg"></span>' +
      '<button type="button" class="yt-btn yt-cancel">' + L('Cancel', 'Abbrechen') + '</button><button type="button" class="yt-btn yt-go" disabled>' + btn + '</button></div></div></div>';
  }
  function wireComposer(root, onSend) {
    var ta = root.querySelector('.yt-ta'); if (!ta) return;
    var bar = root.querySelector('.yt-bar'), go = root.querySelector('.yt-go');
    function grow() { ta.style.height = 'auto'; ta.style.height = ta.scrollHeight + 'px'; go.disabled = !ta.value.trim(); }
    ta.addEventListener('focus', function () { bar.hidden = false; });
    ta.addEventListener('input', grow);
    root.querySelector('.yt-cancel').onclick = function () { ta.value = ''; grow(); bar.hidden = true; ta.blur(); if (root.dataset.temp) root.remove(); };
    go.onclick = function () { var b = ta.value.trim(); if (!b) return; go.disabled = true; onSend(b, root.querySelector('.yt-anoncb').checked, function (err) { root.querySelector('.yt-msg').textContent = err || ''; go.disabled = false; }); };
  }
  function cmt(c, isReply) {
    var anon = c.author === 'anonymous';
    return '<div class="yt-c' + (isReply ? ' yt-r' : '') + '" data-id="' + c.id + '">' + av(c.author, anon) + '<div class="yt-body"><div class="yt-head"><strong>' + (anon ? L('anonymous', 'anonym') : esc(c.author)) + '</strong> <span>' + when(c.created_at) + '</span></div>' +
      '<div class="yt-text">' + txt(c.body) + '</div><div class="yt-acts">' + (isReply ? '' : '<button type="button" class="yt-link yt-reply">' + L('Reply', 'Antworten') + '</button>') +
      (c.mine ? '<button type="button" class="yt-link yt-del">' + L('Delete', 'Löschen') + '</button>' : '') + '</div>' +
      (isReply ? '' : '<div class="yt-replies"></div>' + (+c.replies ? '<button type="button" class="yt-link yt-more">▾ ' + c.replies + ' ' + L(c.replies == 1 ? 'reply' : 'replies', c.replies == 1 ? 'Antwort' : 'Antworten') + '</button>' : '')) + '</div></div>';
  }
  function ytComments(box, topic) {
    box.innerHTML = '<p class="yt-count">' + L('Loading…', 'Wird geladen …') + '</p>' + composer(L('Add a comment or question…', 'Kommentar oder Frage hinzufügen …'), L('Comment', 'Kommentieren')) + '<div class="yt-list"></div>' +
      '<p class="yt-note">' + L('Shared by the English and German version of this lesson. Also in the ', 'Gemeinsam für die englische und deutsche Version. Auch im ') + '<a href="community.html?topic=' + esc(topic) + '">' + L('forum', 'Forum') + '</a>.</p>';
    wireComposer(box.querySelector('.yt-new'), function (b, anon, done) {
      var t = (b.split('\n')[0] || '').slice(0, 140); if (t.length < 3) t = (t + '   ').slice(0, 3);
      sb.from('forum_threads').insert({ topic: topic, title: t, body: b, anonymous: anon }).then(function (r) { if (r.error) return done(r.error.message); track('forum', { a: 'thread' }); ytComments(box, topic); });
    });
    sb.rpc('forum_threads_list', { p_topic: topic }).then(function (r) {
      var cnt = box.querySelector('.yt-count'), list = box.querySelector('.yt-list');
      if (r.error) { cnt.textContent = L('Comments are not available right now.', 'Kommentare sind gerade nicht verfügbar.'); return; }
      var d = r.data || [];
      cnt.textContent = d.length ? d.length + ' ' + L(d.length == 1 ? 'comment' : 'comments', d.length == 1 ? 'Kommentar' : 'Kommentare') : L('No comments yet. Questions are welcome!', 'Noch keine Kommentare. Fragen sind willkommen!');
      list.innerHTML = d.map(function (c) { return cmt(c); }).join('');
      list.querySelectorAll('.yt-c').forEach(function (el) {
        var id = +el.dataset.id, c = d.filter(function (x) { return x.id == id; })[0], rep = el.querySelector('.yt-replies'), more = el.querySelector('.yt-more');
        function loadReplies() {
          sb.rpc('forum_posts_list', { p_thread: id }).then(function (q) {
            rep.innerHTML = (q.data || []).map(function (p) { return cmt(p, true); }).join(''); if (more) more.hidden = true;
            rep.querySelectorAll('.yt-del').forEach(function (b) { b.onclick = function () { var pid = b.closest('.yt-c').dataset.id; if (confirm(L('Delete this reply?', 'Diese Antwort löschen?'))) sb.from('forum_posts').delete().eq('id', pid).then(loadReplies); }; });
          });
        }
        if (more) more.onclick = loadReplies;
        var del = el.querySelector(':scope > .yt-body > .yt-acts .yt-del');
        if (del) del.onclick = function () { if (confirm(L('Delete this comment and its replies?', 'Diesen Kommentar und seine Antworten löschen?'))) sb.from('forum_threads').delete().eq('id', id).then(function () { ytComments(box, topic); }); };
        el.querySelector('.yt-reply').onclick = function () {
          if (el.querySelector('.yt-new')) return el.querySelector('.yt-ta') && el.querySelector('.yt-ta').focus();
          var w = document.createElement('div'); w.innerHTML = composer(L('Add a reply…', 'Antwort hinzufügen …'), L('Reply', 'Antworten'), true);
          var n = w.firstChild; n.dataset.temp = 1; rep.parentNode.insertBefore(n, rep);
          wireComposer(n, function (b, anon, done) { sb.from('forum_posts').insert({ thread_id: id, body: b, anonymous: anon }).then(function (q) { if (q.error) return done(q.error.message); track('forum', { a: 'reply' }); n.remove(); loadReplies(); }); });
          var ta = n.querySelector('.yt-ta'); if (ta) ta.focus();
        };
      });
    });
  }
  function threadView(box, t) {
    box.innerHTML = '<p><a href="#" class="f-back">← ' + (box.dataset.topic ? L('All comments', 'Alle Kommentare') : L('All discussions', 'Alle Diskussionen')) + '</a></p>' +
      '<article class="box sh-post"><h3>' + esc(t.title) + '</h3><p class="sh-meta">' + topicName(t.topic) + ' · ' + esc(t.author) + ' · ' + when(t.created_at) +
      (t.mine ? ' · <button type="button" class="sh-plain f-delt">' + L('delete', 'löschen') + '</button>' : '') + '</p><p>' + txt(t.body) + '</p></article>' +
      '<div class="sh-replies"><p>' + L('Loading…', 'Wird geladen …') + '</p></div>' +
      (user ? '<div class="box"><label class="sh-field"><span>' + L('Your reply', 'Deine Antwort') + '</span><textarea class="f-body" rows="4" maxlength="5000"></textarea></label>' +
        '<label class="sh-field sh-check"><input type="checkbox" class="f-anon"> ' + L('Reply anonymously', 'Anonym antworten') + '</label>' +
        '<p><button type="button" class="start-btn f-send">' + L('Reply', 'Antworten') + '</button> <span class="sh-msg"></span></p></div>'
        : '<p>' + L('To reply, ', 'Zum Antworten ') + '<a href="account.html">' + L('sign in', 'melde dich an') + '</a>.</p>');
    box.querySelector('.f-back').onclick = function (e) { e.preventDefault(); openThread = null; forumPage(); };
    var dt = box.querySelector('.f-delt');
    if (dt) dt.onclick = function () { if (confirm(L('Delete this question and all replies?', 'Diese Frage und alle Antworten löschen?'))) sb.from('forum_threads').delete().eq('id', t.id).then(function () { openThread = null; forumPage(); }); };
    var send = box.querySelector('.f-send');
    if (send) send.onclick = function () {
      var b = box.querySelector('.f-body').value.trim(), msg = box.querySelector('.sh-msg'); if (!b) return;
      sb.from('forum_posts').insert({ thread_id: t.id, body: b, anonymous: box.querySelector('.f-anon').checked }).then(function (r) {
        if (r.error) { msg.textContent = r.error.message; return; } track('forum', { a: 'reply' }); threadView(box, t);
      });
    };
    sb.rpc('forum_posts_list', { p_thread: t.id }).then(function (r) {
      var d = r.data || [], el = box.querySelector('.sh-replies');
      el.innerHTML = d.map(function (p) {
        return '<div class="box sh-post"><p class="sh-meta">' + esc(p.author) + ' · ' + when(p.created_at) + (p.mine ? ' · <button type="button" class="sh-plain f-delp" data-id="' + p.id + '">' + L('delete', 'löschen') + '</button>' : '') + '</p><p>' + txt(p.body) + '</p></div>';
      }).join('');
      el.querySelectorAll('.f-delp').forEach(function (b) { b.onclick = function () { if (confirm(L('Delete this reply?', 'Diese Antwort löschen?'))) sb.from('forum_posts').delete().eq('id', b.dataset.id).then(function () { threadView(box, t); }); }; });
    });
  }
  function leaderboardPage() {
    var box = document.getElementById('sh-board'); if (!box || !sb) return;
    sb.rpc('leaderboard_list').then(function (r) {
      var d = r.data || [];
      box.innerHTML = (d.length ? '<table class="sh-lb"><thead><tr><th>#</th><th>' + L('Nickname', 'Spitzname') + '</th><th>' + L('Active days (last 30)', 'Aktive Tage (letzte 30)') + '</th><th>' + L('Lessons finished', 'Lektionen abgeschlossen') + '</th></tr></thead><tbody>' +
        d.map(function (x, i) { return '<tr><td>' + (i + 1) + '</td><td>' + esc(x.nickname) + '</td><td>' + x.active_days_30 + '</td><td>' + x.pages_done + '</td></tr>'; }).join('') + '</tbody></table>'
        : '<p>' + L('Nobody has joined the leaderboard yet.', 'Noch niemand ist in der Bestenliste.') + '</p>') +
        '<p class="soon">' + L('Only people who turn it on appear here (in ', 'Hier erscheint nur, wer es einschaltet (unter ') + '<a href="account.html">' + L('Your progress', 'Dein Fortschritt') + '</a>' + L('). Ranked by steady work, not speed: every day you tick, rate or note something counts.', '). Sortiert nach Regelmässigkeit, nicht Tempo: Jeder Tag, an dem du etwas abhakst, bewertest oder notierst, zählt.') + '</p>';
    });
  }

  function render() { banner(); refreshPanel(); ticks(); accountPage(); forumPage(); leaderboardPage();
    window.SH = { sb: sb, user: user, signIn: signIn, sdk: sdk, L: L, esc: esc, courseProgress: load, saveCourseProgress: function(entries) {
      var p=load(), changed=[]; Object.keys(entries).forEach(function(k){if(!/^chemie-\d+\.html$/.test(k))return;var v=entries[k];if(!p[k] || !!p[k].done!==!!v.done){p[k]=Object.assign(p[k]||{},v,{t:Date.now()});changed.push(k)}});store(p);
      if(sb&&user&&changed.length)sb.from('progress').upsert(changed.map(row)).then(function(r){if(r.error)status(L('Could not sync, saved in this browser.','Sync fehlgeschlagen, im Browser gespeichert.'))});
    } }; try { document.dispatchEvent(new Event('sh-auth')); } catch (e) {} }

  /* ---------- styles ---------- */
  var css = document.createElement('style');
  css.textContent = '.acct-ico{display:none}' +
    '.sh-progress{margin:2rem 0 1rem}.sh-progress .shp-h{margin-top:0}.shp-done{display:flex;gap:.5rem;align-items:center;font-weight:600;cursor:pointer}' +
    '.shp-done input{width:1.2rem;height:1.2rem}.shp-rate{margin:.8rem 0;display:flex;flex-wrap:wrap;gap:.4rem .8rem;align-items:center}' +
    '.shp-stars{display:flex;gap:.3rem}.shp-stars button{font:inherit;width:2.2rem;height:2.2rem;border-radius:50%;border:1px solid var(--rule,#ccd);background:none;color:inherit;cursor:pointer}' +
    '.shp-stars button.on{background:var(--accent,#5b5bd6);color:#fff;border-color:var(--accent,#5b5bd6)}' +
    '.shp-note{display:block}.shp-note span,.sh-field span{display:block;margin-bottom:.3rem}.shp-note textarea,.sh-field input[type=text]{width:100%;box-sizing:border-box;font:inherit;padding:.5rem;border:1px solid var(--rule,#ccd);border-radius:8px;background:var(--surface,#fff);color:inherit}' +
    '.shp-status{font-size:.88rem;opacity:.8;margin-bottom:0}.sh-tick{color:var(--accent,#5b5bd6);font-weight:800;margin-right:.35rem}' +
    '.sh-field{display:block;margin:1rem 0}.sh-check{display:flex;gap:.5rem;align-items:flex-start}.sh-plain{font:inherit;background:none;border:0;color:var(--accent,#5b5bd6);text-decoration:underline;cursor:pointer;padding:0}' +
    '.sh-filter select{font:inherit;padding:.3rem;border-radius:8px;border:1px solid var(--rule,#ccd);background:var(--surface,#fff);color:inherit}.sh-new summary{cursor:pointer;font-weight:700}.sh-thread{display:block;text-decoration:none;color:inherit;margin:.6rem 0}.sh-thread strong{display:block;color:var(--accent,#5b5bd6)}.sh-thread span,.sh-meta{font-size:.85rem;opacity:.75}.sh-post h3{margin-top:0}.sh-replies .sh-post{margin:.6rem 0 .6rem 1rem}' +
'.sh-comments{margin-top:2.5rem}.yt-count{font-weight:600;margin:.4rem 0 1rem}.yt-new{display:flex;gap:.8rem;align-items:flex-start;margin:0 0 1.6rem}.yt-in{flex:1;min-width:0}.yt-ta{display:block;width:100%;box-sizing:border-box;font:inherit;color:inherit;background:none;border:0;border-bottom:1px solid var(--rule,#ccd);padding:.35rem 0;resize:none;overflow:hidden;outline:none;min-height:2rem}.yt-ta:focus{border-bottom:2px solid var(--ink,#222);padding-bottom:calc(.35rem - 1px)}.yt-fake{flex:1;display:block;border-bottom:1px solid var(--rule,#ccd);padding:.35rem 0;color:var(--muted,#777);text-decoration:none}.yt-fake:hover{color:var(--accent)}.yt-bar{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:.5rem;margin-top:.6rem}.yt-bar[hidden]{display:none}.yt-anonl{margin-right:auto;font-size:.9rem;display:flex;gap:.4rem;align-items:center;color:var(--muted)}.yt-msg{font-size:.85rem;color:var(--k-c,#b4475f)}.yt-btn{font:inherit;font-weight:600;font-size:.92rem;border:0;border-radius:999px;padding:.45rem 1rem;cursor:pointer;background:none;color:inherit}.yt-btn:hover{background:var(--accent-soft)}.yt-go{background:var(--accent);color:var(--on,#fff)}.yt-go:hover{background:var(--accent);filter:brightness(1.08)}.yt-go:disabled{background:var(--accent-soft);color:var(--muted);cursor:default;filter:none}.yt-av{flex:none;width:2.4rem;height:2.4rem;border-radius:50%;display:grid;place-items:center;background:var(--accent-soft);color:var(--accent);font-family:var(--font-display);font-weight:700;font-size:1.1rem}.yt-anon{color:var(--muted)}.yt-small .yt-av,.yt-r .yt-av{width:1.8rem;height:1.8rem;font-size:.9rem}.yt-small{margin:.6rem 0 .4rem}.yt-c{display:flex;gap:.8rem;margin:0 0 1.3rem}.yt-body{flex:1;min-width:0}.yt-head{font-size:.9rem}.yt-head span{color:var(--muted);font-size:.85rem;margin-left:.3rem}.yt-text{margin:.15rem 0 .2rem;overflow-wrap:anywhere}.yt-acts{display:flex;gap:1rem}.yt-link{font:inherit;font-size:.85rem;font-weight:600;background:none;border:0;padding:.2rem 0;cursor:pointer;color:var(--muted)}.yt-link:hover{color:var(--ink)}.yt-more{color:var(--accent);margin-top:.2rem}.yt-replies .yt-c{margin:.8rem 0 0}.yt-note{font-size:.85rem;color:var(--muted);margin-top:1.5rem}' +
    '.sh-lb{width:100%;border-collapse:collapse}.sh-lb th,.sh-lb td{text-align:left;padding:.4rem .5rem;border-bottom:1px solid var(--rule,#ccd)}' +
    'button.start-btn,.start-btn{display:inline-block;border:0;cursor:pointer;font:inherit;font-weight:700;padding:.55rem 1.2rem;border-radius:999px;background:var(--accent,#5b5bd6);color:#fff!important;text-decoration:none}';
  document.head.appendChild(css);

  function init() { buildPanel(); render(); if (wantSdk() || document.getElementById('sh-account') || document.getElementById('sh-forum') || document.getElementById('sh-my') || document.getElementById('sh-consent')) sdk().catch(function () { status(L('Sync is unavailable right now; your progress is saved in this browser.', 'Synchronisation gerade nicht verfügbar; dein Fortschritt ist im Browser gespeichert.')); }); }
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', init) : init();
})();

/* Compatibility for pages that are not generated by the build (Chemie app, course apps in subfolders): if a page has not
   linked the StudyHub design in its <head>, add it here. Generated pages link it in <head> themselves, so this does nothing there. */
(function(){var s=document.currentScript;if(!s||document.querySelector('link[href*="assets/studyhub.css"],link[href*="/studyhub.css"]'))return;var base=new URL('.',s.src);['learning-app.css','appearance.css','studyhub.css'].forEach(function(f){var l=document.createElement('link');l.rel='stylesheet';l.href=new URL(f+'?v=fe0ad35d',base);document.head.appendChild(l)});if(!document.querySelector('script[src*="studyhub.js"]')){var j=document.createElement('script');j.src=new URL('studyhub.js?v=fe0ad35d',base);document.head.appendChild(j)}})();
