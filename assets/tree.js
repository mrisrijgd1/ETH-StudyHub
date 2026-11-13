/* Theorem family tree (Toolbox map view): pick a theorem, see what it rests on (down to the axioms)
   and what is built on it. Every name links to the proof in its lesson. */
(function () {
  var root = document.getElementById('sh-tree'); if (!root) return;
  var DE = root.getAttribute('data-lang') === 'de', P = DE ? '../' : '';
  function L(en, de) { return DE ? de : en; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  // id: [lesson, anchor, English name, German name, [rests on]]
  var T = {
    ax: [6, '',  'Completeness axiom of ℝ (every non-empty bounded-above set has a supremum)', 'Vollständigkeitsaxiom von ℝ', []],
    ind: [4, 'proof-c', 'Induction (and Bernoulli\'s inequality)', 'Induktion (und Bernoulli-Ungleichung)', []],
    comp: [2, 'proof-a', 'Compositions: g∘f injective ⇒ f injective', 'Verknüpfungen: g∘f injektiv ⇒ f injektiv', []],
    eqc: [3, 'proof-b', 'Equivalence classes are equal or disjoint', 'Äquivalenzklassen sind gleich oder disjunkt', []],
    tri: [5, 'proof-a', 'Triangle inequality', 'Dreiecksungleichung', []],
    sup: [6, 'proof-a', 'The supremum exists (Satz 2.59)', 'Existenz des Supremums (Satz 2.59)', ['ax']],
    arch: [6, 'proof-c', 'Archimedean principle', 'Archimedisches Prinzip', ['sup']],
    dense: [6, 'proof-d', 'ℚ is dense in ℝ', 'ℚ ist dicht in ℝ', ['arch']],
    nest: [6, 'proof-e', 'Nested intervals have a common point (Satz 2.77)', 'Intervallschachtelung (Satz 2.77)', ['sup']],
    unc: [6, 'proof-f', 'ℝ is uncountable', 'ℝ ist überabzählbar', ['nest']],
    bw: [6, 'proof-g', 'Bounded infinite sets have an accumulation point', 'Beschränkte unendliche Mengen haben einen Häufungspunkt', ['nest']],
    ivt: [7, 'proof-a', 'Intermediate value theorem', 'Zwischenwertsatz', ['sup']],
    inv: [8, 'proof-a', 'Inverse function theorem (Umkehrsatz)', 'Umkehrsatz', ['ivt']],
    bdd: [8, 'proof-b', 'Continuous on [a,b] ⇒ bounded', 'Stetig auf [a,b] ⇒ beschränkt', ['bw']],
    ext: [8, 'proof-c', 'Extreme value theorem: max and min are attained', 'Satz vom Maximum: Max und Min werden angenommen', ['bdd', 'sup']],
    heine: [8, 'proof-e', 'Heine: continuous on [a,b] ⇒ uniformly continuous', 'Heine: stetig auf [a,b] ⇒ gleichmässig stetig', ['bw']],
    lowup: [9, 'proof-a', 'Lower sums ≤ upper sums', 'Untersummen ≤ Obersummen', ['sup']],
    eps: [9, 'proof-b', 'ε-criterion for Riemann integrability', 'ε-Kriterium für Riemann-Integrierbarkeit', ['lowup']],
    mono: [9, 'proof-d', 'Monotonicity and triangle inequality of the integral', 'Monotonie und Dreiecksungleichung des Integrals', ['lowup']],
    monoint: [9, 'proof-e', 'Monotone functions are integrable', 'Monotone Funktionen sind integrierbar', ['eps']],
    contint: [9, 'proof-e', 'Continuous functions are integrable', 'Stetige Funktionen sind integrierbar', ['eps', 'heine'], 'refresher-04.html#proof-2'],
    luniq: [10, 'proof-b', 'A limit is unique', 'Ein Grenzwert ist eindeutig', ['tri']],
    cbdd: [10, 'proof-c', 'Convergent sequences are bounded', 'Konvergente Folgen sind beschränkt', ['tri']],
    seq: [10, 'proof-e', 'ε-δ continuity ⇔ sequential continuity', 'ε-δ-Stetigkeit ⇔ Folgenstetigkeit', ['arch']],
    sand: [11, 'proof-a', 'Sandwich lemma', 'Sandwich-Lemma', ['tri']],
    monc: [11, 'proof-b', 'Bounded monotone sequences converge (Satz 6.5)', 'Beschränkte monotone Folgen konvergieren (Satz 6.5)', ['sup']],
    lims: [11, 'proof-d', 'Convergent ⇔ liminf = limsup', 'Konvergent ⇔ liminf = limsup', ['monc']],
    cau: [12, 'proof-e', 'Cauchy criterion (Satz 6.26)', 'Cauchy-Kriterium (Satz 6.26)', ['lims', 'cbdd']],
    rsum: [13, 'proof-b', 'Riemann sums converge for continuous f', 'Riemann-Summen konvergieren für stetige f', ['contint', 'heine']],
    t0: [14, 'proof-a', 'Terms of a convergent series tend to 0', 'Glieder einer konvergenten Reihe gehen gegen 0', ['cau']],
    cmp: [14, 'proof-c', 'Comparison test', 'Majorantenkriterium', ['monc']],
    leib: [14, 'proof-e', 'Leibniz criterion', 'Leibniz-Kriterium', ['monc', 'nest']],
    abs: [14, 'proof-f', 'Absolute convergence ⇒ convergence', 'Absolute Konvergenz ⇒ Konvergenz', ['cau']],
    root: [14, 'proof-g', 'Root test', 'Wurzelkriterium', ['cmp', 'abs']],
    ucont: [15, 'proof-b', 'Uniform limits of continuous functions are continuous', 'Gleichmässige Limiten stetiger Funktionen sind stetig', ['tri']],
    swap: [15, 'proof-c', 'Integral and uniform limit can be swapped', 'Integral und gleichmässiger Limes vertauschen', ['mono']],
    mtest: [15, 'proof-d', 'Weierstrass M-test', 'Weierstrass-M-Test', ['cmp', 'cau']],
    rad: [16, 'proof-a', 'Radius of convergence of a power series', 'Konvergenzradius einer Potenzreihe', ['root', 'mtest']],
    expadd: [16, 'proof-c', 'Addition formula e^(z+w) = e^z e^w', 'Additionstheorem e^(z+w) = e^z e^w', ['abs']],
    tint: [16, 'proof-e', 'Term-by-term integration of power series', 'Gliedweise Integration von Potenzreihen', ['swap', 'rad']],
    dcont: [17, 'proof-a', 'Differentiable ⇒ continuous', 'Differenzierbar ⇒ stetig', []],
    prod: [17, 'proof-b', 'Product rule', 'Produktregel', ['dcont']],
    chain: [17, 'proof-c', 'Chain rule', 'Kettenregel', ['dcont']],
    dinv: [17, 'proof-d', 'Derivative of the inverse function', 'Ableitung der Umkehrfunktion', ['inv', 'chain']],
    ez: [17, 'proof-e', 'Interior extremum ⇒ f′ = 0', 'Inneres Extremum ⇒ f′ = 0', []],
    rolle: [17, 'proof-f', 'Rolle\'s theorem', 'Satz von Rolle', ['ext', 'ez']],
    mvt: [17, 'proof-g', 'Mean value theorem', 'Mittelwertsatz', ['rolle']],
    msign: [17, 'proof-h', 'Monotone or constant from the sign of f′', 'Monoton oder konstant aus dem Vorzeichen von f′', ['mvt']],
    convex: [18, 'proof-c', 'Convex ⇔ f′ increasing', 'Konvex ⇔ f′ wachsend', ['mvt']],
    jensen: [18, 'proof-d', 'Jensen\'s inequality', 'Jensen-Ungleichung', ['ind']],
    cmvt: [18, 'proof-e', 'Cauchy\'s mean value theorem', 'Verallgemeinerter Mittelwertsatz', ['rolle']],
    lhop: [18, 'proof-f', 'l\'Hôpital\'s rule', 'Regel von l\'Hôpital', ['cmvt']],
    ftc1: [19, 'proof-a', 'Fundamental theorem I: ∫ₐˣ f is an antiderivative', 'Hauptsatz I: ∫ₐˣ f ist eine Stammfunktion', ['contint', 'mono', 'ext']],
    ftc2: [19, 'proof-b', 'Fundamental theorem II: ∫ₐᵇ f = F(b) − F(a)', 'Hauptsatz II: ∫ₐᵇ f = F(b) − F(a)', ['ftc1', 'msign']],
    tdiff: [19, 'proof-c', 'Power series can be differentiated term by term', 'Potenzreihen gliedweise ableiten', ['ftc2', 'tint']],
    parts: [19, 'proof-d', 'Integration by parts', 'Partielle Integration', ['ftc2', 'prod']],
    subst: [19, 'proof-e', 'Substitution rule', 'Substitutionsregel', ['ftc2', 'chain']],
    xa: [20, 'proof-a', 'The x^(−α) test for improper integrals', 'Der x^(−α)-Test für uneigentliche Integrale', ['ftc2']],
    itest: [20, 'proof-d', 'Integral test for series', 'Integralkriterium für Reihen', ['monoint', 'monc', 'mono']],
    taylor: [21, 'proof-a', 'Taylor\'s theorem (integral remainder)', 'Satz von Taylor (Integralrestglied)', ['parts', 'ind']],
    lagr: [21, 'proof-c', 'Lagrange form of the remainder', 'Lagrange-Restglied', ['taylor', 'ivt', 'mono']],
    hdt: [21, 'proof-e', 'Higher-derivative test for extrema', 'Extremwerttest mit höheren Ableitungen', ['lagr']],
    lin1: [22, 'proof-b', 'All solutions of a linear first-order ODE', 'Alle Lösungen einer linearen DGL 1. Ordnung', ['ftc2', 'prod', 'msign']],
    lin2: [22, 'proof-d', 'All solutions of y″ + a₁y′ + a₀y = 0', 'Alle Lösungen von y″ + a₁y′ + a₀y = 0', ['lin1']]
  };
  var used = {}; Object.keys(T).forEach(function (k) { T[k][4].forEach(function (p) { (used[p] = used[p] || []).push(k); }); });
  function href(k) { var t = T[k]; return P + (t[5] || ('lesson-' + (t[0] < 10 ? '0' : '') + t[0] + '.html#' + t[1])); }
  function name(k) { return DE ? T[k][3] : T[k][2]; }
  var css = document.createElement('style');
  css.textContent = '#sh-tree select{width:100%;font:inherit;padding:.5rem;border-radius:8px;border:1px solid var(--rule,#ccd);background:var(--surface,#fff);color:inherit}' +
    '#sh-tree .cols{display:grid;grid-template-columns:1fr;gap:1rem;margin-top:1rem}@media(min-width:760px){#sh-tree .cols{grid-template-columns:1fr 1fr}}' +
    '#sh-tree ul{list-style:none;padding-left:1.1rem;margin:.2rem 0;border-left:2px solid var(--rule,#ccd)}#sh-tree .cols>div>ul{border-left:none;padding-left:0}#sh-tree li{margin:.3rem 0}' +
    '#sh-tree .les{font-size:.78rem;opacity:.7;margin-left:.35rem;white-space:nowrap}#sh-tree .me{font-weight:600;font-size:1.05rem}#sh-tree button.lk{font:inherit;color:var(--accent);background:none;border:none;padding:0;cursor:pointer;text-align:left;text-decoration:underline;text-decoration-thickness:1px}' +
    '#sh-tree .seen{opacity:.6;font-size:.85rem}';
  document.head.appendChild(css);
  var keys = Object.keys(T).sort(function (a, b) { return T[a][0] - T[b][0]; });
  var opts = '', last = 0;
  keys.forEach(function (k) { if (T[k][0] !== last) { if (last) opts += '</optgroup>'; last = T[k][0]; opts += '<optgroup label="' + L('Lesson ', 'Lektion ') + last + '">'; } opts += '<option value="' + k + '">' + esc(name(k)) + '</option>'; });
  opts += '</optgroup>';
  root.innerHTML = '<label><strong>' + L('Pick a theorem', 'Wähle einen Satz') + '</strong><select id="tr-sel">' + opts + '</select></label><div id="tr-out"></div>';
  function item(k, seen) {
    return '<button class="lk" data-k="' + k + '">' + esc(name(k)) + '</button><span class="les">' + L('L', 'L') + T[k][0] + '</span> <a href="' + href(k) + '" class="les">' + L('proof', 'Beweis') + ' →</a>';
  }
  function down(k, seen, depth) {
    var ps = T[k][4]; if (!ps.length) return '';
    return '<ul>' + ps.map(function (p) {
      if (seen[p]) return '<li>' + item(p) + ' <span class="seen">' + L('(see above)', '(siehe oben)') + '</span></li>';
      seen[p] = 1; return '<li>' + item(p) + down(p, seen, depth + 1) + '</li>';
    }).join('') + '</ul>';
  }
  function show(k) {
    document.getElementById('tr-sel').value = k;
    var u = (used[k] || []).slice().sort(function (a, b) { return T[a][0] - T[b][0]; });
    var rest = down(k, {}, 0);
    document.getElementById('tr-out').innerHTML = '<p class="me" style="margin-top:1rem">' + esc(name(k)) + ' <a class="les" href="' + href(k) + '">' + L('Lesson ', 'Lektion ') + T[k][0] + ', ' + L('proof', 'Beweis') + ' →</a></p><div class="cols">' +
      '<div><h3>' + L('Rests on', 'Beruht auf') + '</h3>' + (rest || '<p>' + L('Nothing earlier: this is a starting point (an axiom, a definition, or a direct argument).', 'Nichts Früherem: ein Ausgangspunkt (Axiom, Definition oder direktes Argument).') + '</p>') + '</div>' +
      '<div><h3>' + L('Used directly by', 'Direkt verwendet von') + '</h3>' + (u.length ? '<ul>' + u.map(function (x) { return '<li>' + item(x) + '</li>'; }).join('') + '</ul>' : '<p>' + L('Nothing later in Analysis 1 builds on it directly.', 'Nichts Späteres in Analysis 1 baut direkt darauf auf.') + '</p>') + '</div></div>';
    try { history.replaceState(null, '', '#' + k); } catch (e) {}
  }
  document.getElementById('tr-sel').onchange = function () { show(this.value); };
  root.addEventListener('click', function (e) { var b = e.target.closest('button.lk'); if (b) { show(b.getAttribute('data-k')); document.getElementById('tr-sel').scrollIntoView({ block: 'nearest' }); } });
  var h = location.hash.slice(1); show(T[h] ? h : 'taylor');
})();
