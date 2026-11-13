/* StudyHub Toolbox search. Index: assets/search-<lang>.json, built by make_search.py.
   Entry = [kind, subject, title, where, url, snippet_or_answer_html, words] */
(function () {
  var box = document.getElementById('sh-search');
  if (!box) return;
  var de = document.documentElement.lang === 'de';
  var q = document.getElementById('tb-q'), selS = document.getElementById('tb-subj'), selT = document.getElementById('tb-type');
  var res = document.getElementById('tb-res'), count = document.getElementById('tb-count'), more = document.getElementById('tb-more');
  var hint = document.getElementById('tb-hint');
  var T = de ? {
    def: 'Definition', thm: 'Satz', recipe: 'Rezept', move: 'Beweiskniff', word: 'Fachbegriff', ex: 'Aufgabe / Beispiel', proof: 'Beweis', sec: 'Lektionsabschnitt', page: 'Seite',
    a: 'Analysis 1', p: 'Physik I', g: 'StudyHub', show: 'Antwort zeigen', loading: 'Suche wird geladen …', fail: 'Die Suche konnte nicht geladen werden. Lade die Seite neu.',
    none: 'Nichts gefunden. Versuch es mit weniger Wörtern, einem Wortanfang oder dem englischen Begriff.', one: '1 Treffer', many: ' Treffer', more: 'Mehr zeigen', study: 'Als Lernkarte üben'
  } : {
    def: 'Definition', thm: 'Theorem', recipe: 'Recipe', move: 'Proof move', word: 'German term', ex: 'Exercise / example', proof: 'Proof', sec: 'Lesson section', page: 'Page',
    a: 'Analysis 1', p: 'Physics I', g: 'StudyHub', show: 'Show answer', loading: 'Loading the search …', fail: 'The search could not be loaded. Please reload the page.',
    none: 'Nothing found. Try fewer words, the start of a word, or the German term.', one: '1 result', many: ' results', more: 'Show more', study: 'Study it as a flashcard'
  };
  var GROUP = { all: null, dt: ['def', 'thm'], mr: ['move', 'recipe'], ex: ['ex'], proof: ['proof'], word: ['word'], text: ['sec', 'page'] };
  var BOOST = { def: 4, thm: 4, move: 3, recipe: 3, word: 2, page: 2, proof: 1, ex: 0, sec: 0 };
  var STOP = {};
  'the and for with that this from are was not but you your its into also than then what when which how can does did of to in on at an a is be by or as it if und der die das den dem des ein eine ist sind mit von auf aus bei oder wie es zu im am als auch nicht wenn'.split(' ').forEach(function (w) { STOP[w] = 1; });
  function fold(s) {
    s = String(s).toLowerCase().replace(/ß/g, 'ss');
    return s.normalize ? s.normalize('NFKD').replace(/[̀-ͯ]/g, '') : s;
  }
  function toks(s) {
    return (fold(s).replace(/\\[a-z]+/g, ' ').match(/[a-z0-9]+/g) || []).filter(function (w) { return !STOP[w]; });
  }
  var idx = null, loading = null, shown = 25, last = [];
  function load() {
    if (loading) return loading;
    count.textContent = T.loading;
    loading = fetch(box.getAttribute('data-src')).then(function (r) { if (!r.ok) throw 0; return r.json(); }).then(function (d) {
      idx = d.map(function (e) {
        var tw = toks(e[2].replace(/<[^>]+>/g, ' '));
        return { e: e, tw: tw, ws: (' ' + e[6] + ' '), w: e[6].split(' '), tf: fold(e[2].replace(/<[^>]+>/g, ' ')) };
      });
      run();
    }).catch(function () { count.textContent = T.fail; loading = null; });
    return loading;
  }
  function score(x, qt, qf) {
    var s = 0;
    for (var i = 0; i < qt.length; i++) {
      var t = qt[i], best = 0;
      if (x.tw.indexOf(t) >= 0) best = 6;
      else if (x.tw.some(function (w) { return w.indexOf(t) === 0; })) best = 4;
      else if (x.ws.indexOf(' ' + t + ' ') >= 0) best = 2;
      else if (t.length >= 3 && x.w.some(function (w) { return w.indexOf(t) === 0; })) best = 1;
      if (!best) return 0;
      s += best;
    }
    if (qt.length > 1 && x.tf.indexOf(qf) >= 0) s += 6;
    return s + (BOOST[x.e[0]] || 0);
  }
  function el(tag, cls, text) { var n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; }
  function render() {
    res.innerHTML = '';
    var list = last.slice(0, shown);
    list.forEach(function (r) {
      var e = r.e, li = el('li', 'tb-hit tb-' + e[0]);
      var meta = el('p', 'tb-meta');
      meta.appendChild(el('span', 'tb-kind', T[e[0]] || ''));
      meta.appendChild(document.createTextNode(' · ' + (T[e[1]] || '') + (e[3] ? ' · ' + e[3] : '')));
      if (/^(def|thm|recipe)$/.test(e[0]) && /^flashcards/.test(e[4])) {
        var qd = el('div', 'tb-title'); qd.innerHTML = e[2]; li.appendChild(qd); li.appendChild(meta);
        var d = el('details', 'tb-ans'), sm = el('summary', null, T.show), a = el('div');
        a.innerHTML = e[5]; d.appendChild(sm); d.appendChild(a);
        var st = el('a', 'tb-study', T.study); st.href = e[4]; a.appendChild(st);
        li.appendChild(d);
      } else {
        var h = el('a', 'tb-title', e[2]); h.href = e[4]; li.appendChild(h); li.appendChild(meta);
        if (e[5]) li.appendChild(el('p', 'tb-snip', e[5]));
      }
      res.appendChild(li);
    });
    more.hidden = last.length <= shown;
    if (window.MathJax && MathJax.typesetPromise) {
      try { if (MathJax.typesetClear) MathJax.typesetClear([res]); MathJax.typesetPromise([res]).catch(function () {}); } catch (err) {}
    }
  }
  function run() {
    var raw = q.value.trim();
    try { var u = new URL(location.href); if (raw) u.searchParams.set('q', raw); else u.searchParams.delete('q'); history.replaceState(null, '', u); } catch (err) {}
    if (!raw) { last = []; res.innerHTML = ''; count.textContent = ''; more.hidden = true; hint.hidden = false; return; }
    hint.hidden = true;
    if (!idx) { load(); return; }
    var qt = toks(raw), qf = fold(raw).trim();
    if (!qt.length) { last = []; render(); count.textContent = T.none; return; }
    var g = GROUP[selT.value] || null, sj = selS.value;
    last = [];
    idx.forEach(function (x) {
      if (g && g.indexOf(x.e[0]) < 0) return;
      if (sj !== 'all' && x.e[1] !== sj) return;
      var s = score(x, qt, qf);
      if (s) last.push({ e: x.e, s: s });
    });
    last.sort(function (a, b) { return b.s - a.s; });
    shown = 25;
    count.textContent = last.length ? (last.length === 1 ? T.one : last.length + T.many) : T.none;
    render();
  }
  var tm;
  q.addEventListener('input', function () { clearTimeout(tm); tm = setTimeout(run, 160); });
  q.addEventListener('focus', load, { once: true });
  selS.addEventListener('change', run); selT.addEventListener('change', run);
  more.addEventListener('click', function () { shown += 25; render(); });
  Array.prototype.forEach.call(box.querySelectorAll('[data-try]'), function (b) {
    b.addEventListener('click', function () { q.value = b.getAttribute('data-try'); run(); q.focus(); });
  });
  var p0 = null; try { p0 = new URL(location.href).searchParams.get('q'); } catch (err) {}
  if (p0) { q.value = p0; run(); }
  if (location.hash === '#search') { try { q.focus({ preventScroll: true }); } catch (err) { q.focus(); } }
})();
