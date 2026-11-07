// StudyHub "Listen" button: reads the story section and the For-wonder section aloud with the device's own voice.
// Formulas: short ones are spoken in words, long ones are replaced by "a formula". Solutions and display maths are skipped.
(function () {
  if (!('speechSynthesis' in window) || !window.SpeechSynthesisUtterance) return;
  var de = (document.documentElement.lang || '').slice(0, 2) === 'de';
  var heads = [].filter.call(document.querySelectorAll('main h2[id]'), function (h) {
    return /^s1-/.test(h.id) || /for-wonder/.test(h.id);
  });
  if (!heads.length) return;
  var T = de ? { play: '▶ Anhören', stop: '■ Stopp', formula: 'eine Formel', sq: ' Quadrat', over: ' durch ', root: 'Wurzel aus ', inn: ' in ', sub: ' Teilmenge von ', le: ' kleiner gleich ', ge: ' grösser gleich ', ne: ' ungleich ', to: ' gegen ', inf: 'unendlich', eq: ' gleich ', plus: ' plus ', minus: ' minus ' }
              : { play: '▶ Listen', stop: '■ Stop', formula: 'a formula', sq: ' squared', over: ' over ', root: 'root ', inn: ' in ', sub: ' subset of ', le: ' at most ', ge: ' at least ', ne: ' not equal to ', to: ' to ', inf: 'infinity', eq: ' equals ', plus: ' plus ', minus: ' minus ' };
  function track(name, data) { try { if (window.umami && window.umami.track) window.umami.track(name, data); } catch (e) {} }
  function say(tex) {
    var t = tex.replace(/\\(mathbb|mathrm|mathcal|text|textbf|operatorname)\s*\{([^{}]*)\}/g, '$2')
      .replace(/\\[dt]?frac\{([^{}]*)\}\{([^{}]*)\}/g, '$1' + T.over + '$2')
      .replace(/\\sqrt\{([^{}]*)\}/g, T.root + '$1')
      .replace(/\^\{?2\}?/g, T.sq)
      .replace(/\\varepsilon|\\epsilon/g, 'epsilon').replace(/\\delta/g, 'delta').replace(/\\alpha/g, 'alpha').replace(/\\pi/g, 'pi')
      .replace(/\\lambda/g, 'lambda').replace(/\\infty/g, T.inf)
      .replace(/\\in\b/g, T.inn).replace(/\\subseteq|\\subset/g, T.sub)
      .replace(/\\le(q)?\b|≤/g, T.le).replace(/\\ge(q)?\b|≥/g, T.ge).replace(/\\neq?\b/g, T.ne).replace(/\\to\b/g, T.to)
      .replace(/=/g, T.eq).replace(/\+/g, T.plus).replace(/(^|[^a-zA-Z])-/g, '$1' + T.minus).replace(/\\[a-zA-Z]+/g, ' ').replace(/[{}\\$]/g, ' ').replace(/_/g, ' ').replace(/\s+/g, ' ').trim();
    return (t.length > 28 || /[\^|]/.test(t)) ? T.formula : t;
  }
  function texOf(node) {
    try {
      var items = window.MathJax && MathJax.startup && MathJax.startup.document.getMathItemsWithin(node);
      if (items && items.length) return items[0].math;
    } catch (e) {}
    return null;
  }
  function textOf(node, out) {
    if (node.nodeType === 3) { out.push(node.nodeValue); return; }
    if (node.nodeType !== 1) return;
    var tag = node.tagName.toLowerCase(), cl = node.classList;
    if (/^(script|style|button|details|table|svg|figure|mjx-assistive-mml)$/.test(tag)) return;
    if (cl.contains('sol') || cl.contains('math-display') || cl.contains('sh-listen') || cl.contains('label') || cl.contains('moves') || cl.contains('mvl')) return;
    if (tag === 'mjx-container') {
      if (node.getAttribute('display') === 'true') { out.push('. ' + T.formula + '. '); return; }
      var tx = texOf(node); out.push(' ' + (tx ? say(tx) : T.formula) + ' '); return;
    }
    for (var c = node.firstChild; c; c = c.nextSibling) textOf(c, out);
    if (/^(p|li|div|h[1-6]|blockquote|dd|dt)$/.test(tag)) out.push('. ');
  }
  function sectionText(h) {
    var out = [];
    for (var n = h.nextElementSibling; n && n.tagName !== 'H2'; n = n.nextElementSibling) textOf(n, out);
    var s = out.join('').replace(/\$([^$]+)\$/g, function (m, t) { return ' ' + say(t) + ' '; })
      .replace(/\s+/g, ' ').replace(/(\.\s*){2,}/g, '. ').replace(/([:;,])\s*\./g, '$1').replace(/\s+([.,;:!?])/g, '$1').trim();
    return s;
  }
  function chunks(s) {
    var parts = s.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [s], res = [], cur = '';
    parts.forEach(function (p) { if ((cur + p).length > 220 && cur) { res.push(cur); cur = p; } else cur += p; });
    if (cur.trim()) res.push(cur);
    return res;
  }
  var voice = null;
  function pickVoice() {
    var vs = speechSynthesis.getVoices(), want = de ? 'de' : 'en';
    var m = vs.filter(function (v) { return (v.lang || '').toLowerCase().indexOf(want) === 0; });
    var good = m.filter(function (v) { return /natural|neural|premium|enhanced|google|siri/i.test(v.name); });
    voice = good[0] || m[0] || null;
  }
  pickVoice();
  if (speechSynthesis.onvoiceschanged !== undefined) speechSynthesis.onvoiceschanged = pickVoice;
  var playing = null;
  function stop() {
    speechSynthesis.cancel();
    if (playing) { playing.textContent = T.play; playing.setAttribute('aria-pressed', 'false'); }
    playing = null;
  }
  var st = document.createElement('style');
  st.textContent = '.sh-listen{font:inherit;font-size:.8rem;font-weight:600;margin-left:.6rem;vertical-align:middle;padding:.2rem .75rem;border-radius:999px;' +
    'border:1px solid var(--accent,#5b5bd6);background:none;color:var(--accent,#5b5bd6);cursor:pointer;white-space:nowrap}' +
    '.sh-listen[aria-pressed="true"]{background:var(--accent,#5b5bd6);color:#fff}@media print{.sh-listen{display:none}}';
  document.head.appendChild(st);
  heads.forEach(function (h) {
    var b = document.createElement('button');
    b.className = 'sh-listen'; b.type = 'button'; b.textContent = T.play; b.setAttribute('aria-pressed', 'false');
    h.appendChild(b);
    b.onclick = function () {
      if (playing === b) { stop(); return; }
      stop();
      var list = chunks(sectionText(h));
      if (!list.length) return;
      playing = b; b.textContent = T.stop; b.setAttribute('aria-pressed', 'true');
      track('listen', { sec: /for-wonder/.test(h.id) ? 'wonder' : 'story', page: location.pathname.split('/').pop(), lang: de ? 'de' : 'en' });
      list.forEach(function (txt, k) {
        var u = new SpeechSynthesisUtterance(txt);
        u.lang = de ? 'de-DE' : 'en-GB'; if (voice) u.voice = voice; u.rate = 1;
        if (k === list.length - 1) u.onend = function () { if (playing === b) stop(); };
        speechSynthesis.speak(u);
      });
    };
  });
  window.addEventListener('pagehide', function () { speechSynthesis.cancel(); });
})();
