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
    lin2: [22, 'proof-d', 'All solutions of y″ + a₁y′ + a₀y = 0', 'Alle Lösungen von y″ + a₁y′ + a₀y = 0', ['lin1']],
    // Linear Algebra I (t[6] = 1): English names only; links go to the linalg lessons
    la_ax: [5, 's2-the-definition', "Vector space axioms", "Vector space axioms", [], 'linalg-05.html#s2-the-definition', 1],
    la_vrules: [5, 'proof-a', "First rules: 0·v = 0, (−1)v = −v, no zero divisors", "First rules: 0·v = 0, (−1)v = −v, no zero divisors", ['la_ax'], 'linalg-05.html#proof-a', 1],
    la_subtest: [5, 'proof-d', "The subspace test", "The subspace test", ['la_vrules'], 'linalg-05.html#proof-d', 1],
    la_eqc: [3, 'proof-h', "The classes of an equivalence relation form a partition", "The classes of an equivalence relation form a partition", [], 'linalg-03.html#proof-h', 1],
    la_int: [6, 'proof-a', "An intersection of subspaces is a subspace", "An intersection of subspaces is a subspace", ['la_subtest'], 'linalg-06.html#proof-a', 1],
    la_span: [6, 'proof-b', "The span is the set of all linear combinations", "The span is the set of all linear combinations", ['la_int', 'la_subtest'], 'linalg-06.html#proof-b', 1],
    la_indep: [6, 'proof-c', "The two definitions of independence agree", "The two definitions of independence agree", [], 'linalg-06.html#proof-c', 1],
    la_deplist: [6, 'proof-d', "In a dependent list, a vector is a combination of earlier ones", "In a dependent list, a vector is a combination of earlier ones", ['la_indep'], 'linalg-06.html#proof-d', 1],
    la_coord: [6, 'proof-e', "A basis gives unique coordinates", "A basis gives unique coordinates", ['la_indep'], 'linalg-06.html#proof-e', 1],
    la_drop: [7, 'proof-a', "The vector to drop comes after the independent part", "The vector to drop comes after the independent part", ['la_deplist'], 'linalg-07.html#proof-a', 1],
    la_exch: [7, 'proof-b', "The exchange lemma (Steinitz)", "The exchange lemma (Steinitz)", ['la_drop', 'la_span'], 'linalg-07.html#proof-b', 1],
    la_samelen: [7, 'proof-c', "All bases have the same length", "All bases have the same length", ['la_exch'], 'linalg-07.html#proof-c', 1],
    la_contains: [7, 'proof-d', "Every generating system contains a basis", "Every generating system contains a basis", ['la_deplist'], 'linalg-07.html#proof-d', 1],
    la_extend: [7, 'proof-e', "Every independent list extends to a basis", "Every independent list extends to a basis", ['la_exch'], 'linalg-07.html#proof-e', 1],
    la_equil: [7, 'proof-f', "Equilibrium: n vectors in dimension n", "Equilibrium: n vectors in dimension n", ['la_samelen', 'la_contains', 'la_extend'], 'linalg-07.html#proof-f', 1],
    la_sumspan: [8, 'proof-a', "The sum is the span of the union", "The sum is the span of the union", ['la_span'], 'linalg-08.html#proof-a', 1],
    la_dimf: [8, 'proof-b', "The dimension formula", "The dimension formula", ['la_extend', 'la_sumspan'], 'linalg-08.html#proof-b', 1],
    la_direct: [8, 'proof-c', "Five ways to say “the overlap is only 0”", "Five ways to say “the overlap is only 0”", ['la_dimf', 'la_coord'], 'linalg-08.html#proof-c', 1],
    la_compl: [8, 'proof-d', "Every subspace has a complement", "Every subspace has a complement", ['la_extend', 'la_direct'], 'linalg-08.html#proof-d', 1],
    la_affine: [9, 'proof-a', "An affine subspace is a subspace only through 0", "An affine subspace is a subspace only through 0", ['la_subtest'], 'linalg-09.html#proof-a', 1],
    la_coset: [9, 'proof-b', "The three coset rules", "The three coset rules", ['la_subtest', 'la_eqc'], 'linalg-09.html#proof-b', 1],
    la_quot: [9, 'proof-c', "The operations on V/W are well defined", "The operations on V/W are well defined", ['la_coset'], 'linalg-09.html#proof-c', 1],
    la_dimq: [9, 'proof-d', "dim V/W = dim V − dim W", "dim V/W = dim V − dim W", ['la_quot', 'la_extend'], 'linalg-09.html#proof-d', 1],
    la_funcbasis: [10, 'proof-b', "Values on a basis determine a functional", "Values on a basis determine a functional", ['la_coord'], 'linalg-10.html#proof-b', 1],
    la_funcext: [10, 'proof-c', "Any values on a basis come from exactly one functional", "Any values on a basis come from exactly one functional", ['la_coord'], 'linalg-10.html#proof-c', 1],
    la_dualbasis: [10, 'proof-e', "The dual basis is a basis, dim V* = dim V", "The dual basis is a basis, dim V* = dim V", ['la_funcbasis', 'la_funcext'], 'linalg-10.html#proof-e', 1],
    la_dualinf: [10, 'proof-g', "In infinite dimension the dual set does not span V*", "In infinite dimension the dual set does not span V*", ['la_dualbasis'], 'linalg-10.html#proof-g', 1],
    la_linbasis: [11, 'proof-b', "Two linear maps that agree on a basis are equal", "Two linear maps that agree on a basis are equal", ['la_coord'], 'linalg-11.html#proof-b', 1],
    la_linext: [11, 'proof-c', "The extension principle: any values on a basis", "The extension principle: any values on a basis", ['la_coord'], 'linalg-11.html#proof-c', 1],
    la_matcomp: [11, 'proof-e', "The matrix computes the map", "The matrix computes the map", ['la_linext'], 'linalg-11.html#proof-e', 1],
    la_homiso: [11, 'proof-f', "T ↦ [T] is linear and bijective", "T ↦ [T] is linear and bijective", ['la_linbasis', 'la_linext'], 'linalg-11.html#proof-f', 1],
    la_kerim: [11, 'proof-g', "Kernel and image are subspaces; fibers are cosets", "Kernel and image are subspaces; fibers are cosets", ['la_subtest', 'la_coset'], 'linalg-11.html#proof-g', 1],
    la_isothm: [11, 'proof-h', "The isomorphism theorem V/Ker T ≅ Im T", "The isomorphism theorem V/Ker T ≅ Im T", ['la_kerim', 'la_quot'], 'linalg-11.html#proof-h', 1],
    la_prod: [12, 'proof-a', "The matrix of a composition is the product", "The matrix of a composition is the product", ['la_matcomp'], 'linalg-12.html#proof-a', 1],
    la_dimiso: [12, 'proof-d', "V ≅ W if and only if dim V = dim W", "V ≅ W if and only if dim V = dim W", ['la_linext', 'la_samelen'], 'linalg-12.html#proof-d', 1],
    la_dimhom: [12, 'proof-e', "dim Hom(V,W) = dim V · dim W", "dim Hom(V,W) = dim V · dim W", ['la_homiso', 'la_dimiso'], 'linalg-12.html#proof-e', 1],
    la_lagr: [12, 'proof-f', "Lagrange interpolation is an isomorphism", "Lagrange interpolation is an isomorphism", ['la_dimiso'], 'linalg-12.html#proof-f', 1],
    la_trans: [13, 'proof-a', "The transition matrix translates coordinates", "The transition matrix translates coordinates", ['la_matcomp'], 'linalg-13.html#proof-a', 1],
    la_transinv: [13, 'proof-b', "Transition matrices are inverse to each other", "Transition matrices are inverse to each other", ['la_prod', 'la_trans'], 'linalg-13.html#proof-b', 1],
    la_cob: [13, 'proof-d', "The change-of-basis formula", "The change-of-basis formula", ['la_prod', 'la_transinv'], 'linalg-13.html#proof-d', 1],
    la_sim: [13, 'proof-e', "Similar matrices are the same endomorphism", "Similar matrices are the same endomorphism", ['la_cob'], 'linalg-13.html#proof-e', 1],
    la_bidual: [14, 'proof-a', "V ≅ V** canonically", "V ≅ V** canonically", ['la_dualbasis'], 'linalg-14.html#proof-a', 1],
    la_dualmap: [14, 'proof-b', "The dual map is well defined and linear", "The dual map is well defined and linear", [], 'linalg-14.html#proof-b', 1],
    la_transpose: [14, 'proof-d', "The matrix of the dual map is the transpose", "The matrix of the dual map is the transpose", ['la_dualmap', 'la_dualbasis', 'la_matcomp'], 'linalg-14.html#proof-d', 1],
    la_ann: [14, 'proof-e', "dim U⁰ = dim V − dim U", "dim U⁰ = dim V − dim U", ['la_dualbasis', 'la_extend'], 'linalg-14.html#proof-e', 1],
    la_kerdual: [14, 'proof-f', "Kernel and image of the dual map", "Kernel and image of the dual map", ['la_ann', 'la_dualmap'], 'linalg-14.html#proof-f', 1],
    la_imspan: [15, 'proof-a', "The image is spanned by the images of a basis", "The image is spanned by the images of a basis", ['la_span'], 'linalg-15.html#proof-a', 1],
    la_rn: [15, 'proof-b', "Rank–nullity: dim Ker T + dim Im T = dim V", "Rank–nullity: dim Ker T + dim Im T = dim V", ['la_extend', 'la_imspan'], 'linalg-15.html#proof-b', 1],
    la_tsr: [15, 'proof-c', "Too small, too big, or just right", "Too small, too big, or just right", ['la_rn'], 'linalg-15.html#proof-c', 1],
    la_onesided: [15, 'proof-d', "A one-sided inverse is enough for square matrices", "A one-sided inverse is enough for square matrices", ['la_rn', 'la_prod'], 'linalg-15.html#proof-d', 1],
    la_rankcomp: [15, 'proof-e', "The rank of a composition", "The rank of a composition", ['la_rn'], 'linalg-15.html#proof-e', 1],
    la_normal: [15, 'proof-f', "The rank normal form", "The rank normal form", ['la_rn', 'la_extend'], 'linalg-15.html#proof-f', 1],
    la_rowop: [16, 'proof-a', "Row operations keep the row space", "Row operations keep the row space", [], 'linalg-16.html#proof-a', 1],
    la_echelon: [16, 'proof-b', "In echelon form: row rank = pivots = column rank", "In echelon form: row rank = pivots = column rank", ['la_rowop'], 'linalg-16.html#proof-b', 1],
    la_rcgauss: [16, 'proof-c', "Row rank = column rank (Gauss)", "Row rank = column rank (Gauss)", ['la_echelon', 'la_rowop'], 'linalg-16.html#proof-c', 1],
    la_rcnormal: [16, 'proof-d', "Row rank = column rank (normal form)", "Row rank = column rank (normal form)", ['la_normal', 'la_cob'], 'linalg-16.html#proof-d', 1],
    la_rcdual: [16, 'proof-e', "Row rank = column rank (duality)", "Row rank = column rank (duality)", ['la_kerdual', 'la_transpose', 'la_rn'], 'linalg-16.html#proof-e', 1],
    la_free: [17, 'proof-a', "The free variables parametrise the solutions", "The free variables parametrise the solutions", ['la_echelon'], 'linalg-17.html#proof-a', 1],
    la_partic: [17, 'proof-b', "All solutions = one solution + the kernel", "All solutions = one solution + the kernel", ['la_kerim'], 'linalg-17.html#proof-b', 1],
    la_invequiv: [17, 'proof-c', "The equivalences for invertible matrices", "The equivalences for invertible matrices", ['la_rn', 'la_onesided'], 'linalg-17.html#proof-c', 1],
    la_elem: [17, 'proof-d', "Elementary matrices perform row operations", "Elementary matrices perform row operations", ['la_prod'], 'linalg-17.html#proof-d', 1],
    la_prodelem: [17, 'proof-e', "Every invertible matrix is a product of elementary matrices", "Every invertible matrix is a product of elementary matrices", ['la_elem', 'la_invequiv'], 'linalg-17.html#proof-e', 1],
    la_gj: [17, 'proof-f', "Gauss–Jordan computes the inverse", "Gauss–Jordan computes the inverse", ['la_prodelem'], 'linalg-17.html#proof-f', 1],
    la_detrow: [18, 'proof-a', "How row operations change the determinant", "How row operations change the determinant", [], 'linalg-18.html#proof-a', 1],
    la_dettri: [18, 'proof-b', "The determinant of a triangular matrix", "The determinant of a triangular matrix", ['la_detrow'], 'linalg-18.html#proof-b', 1],
    la_detinv: [18, 'proof-c', "det A ≠ 0 if and only if A is invertible", "det A ≠ 0 if and only if A is invertible", ['la_detrow', 'la_dettri', 'la_invequiv'], 'linalg-18.html#proof-c', 1],
    la_detprod: [18, 'proof-d', "det(AB) = det A · det B", "det(AB) = det A · det B", ['la_detrow', 'la_prodelem', 'la_detinv'], 'linalg-18.html#proof-d', 1],
    la_detuniq: [18, 'proof-e', "At most one determinant function", "At most one determinant function", ['la_detrow', 'la_dettri'], 'linalg-18.html#proof-e', 1],
    la_sign: [19, 'proof-a', "The sign of a permutation", "The sign of a permutation", [], 'linalg-19.html#proof-a', 1],
    la_signmult: [19, 'proof-b', "The sign is multiplicative", "The sign is multiplicative", ['la_sign'], 'linalg-19.html#proof-b', 1],
    la_leib: [19, 'proof-d', "The Leibniz formula satisfies the axioms", "The Leibniz formula satisfies the axioms", ['la_signmult'], 'linalg-19.html#proof-d', 1],
    la_dett: [20, 'proof-a', "det Aᵀ = det A", "det Aᵀ = det A", ['la_leib', 'la_signmult'], 'linalg-20.html#proof-a', 1],
    la_exp: [20, 'proof-c', "Expansion along a row or column", "Expansion along a row or column", ['la_leib', 'la_dett', 'la_detuniq'], 'linalg-20.html#proof-c', 1],
    la_cramer: [20, 'proof-d', "Adjugate, inverse and Cramer's rule", "Adjugate, inverse and Cramer's rule", ['la_exp', 'la_detprod'], 'linalg-20.html#proof-d', 1],
    la_diag: [21, 'proof-a', "Diagonalisable iff a basis of eigenvectors", "Diagonalisable iff a basis of eigenvectors", ['la_cob'], 'linalg-21.html#proof-a', 1],
    la_eigind: [21, 'proof-b', "Eigenvectors for distinct eigenvalues are independent", "Eigenvectors for distinct eigenvalues are independent", ['la_indep'], 'linalg-21.html#proof-b', 1],
    la_eigdet: [21, 'proof-c', "Eigenvalues are the zeros of det(A − λI)", "Eigenvalues are the zeros of det(A − λI)", ['la_detinv'], 'linalg-21.html#proof-c', 1],
    la_charpoly: [21, 'proof-d', "The characteristic polynomial", "The characteristic polynomial", ['la_eigdet', 'la_leib'], 'linalg-21.html#proof-d', 1],
  };
  var used = {}; Object.keys(T).forEach(function (k) { T[k][4].forEach(function (p) { (used[p] = used[p] || []).push(k); }); });
  function href(k) { var t = T[k]; return (t[6] ? (DE ? '../' : '') : P) + (t[5] || ('lesson-' + (t[0] < 10 ? '0' : '') + t[0] + '.html#' + t[1])); }
  function name(k) { return DE ? T[k][3] : T[k][2]; }
  var css = document.createElement('style');
  css.textContent = '#sh-tree select{width:100%;font:inherit;padding:.5rem;border-radius:8px;border:1px solid var(--rule,#ccd);background:var(--surface,#fff);color:inherit}' +
    '#sh-tree .cols{display:grid;grid-template-columns:1fr;gap:1rem;margin-top:1rem}@media(min-width:760px){#sh-tree .cols{grid-template-columns:1fr 1fr}}' +
    '#sh-tree ul{list-style:none;padding-left:1.1rem;margin:.2rem 0;border-left:2px solid var(--rule,#ccd)}#sh-tree .cols>div>ul{border-left:none;padding-left:0}#sh-tree li{margin:.3rem 0}' +
    '#sh-tree .les{font-size:.78rem;opacity:.7;margin-left:.35rem;white-space:nowrap}#sh-tree .me{font-weight:600;font-size:1.05rem}#sh-tree button.lk{font:inherit;color:var(--accent);background:none;border:none;padding:0;cursor:pointer;text-align:left;text-decoration:underline;text-decoration-thickness:1px}' +
    '#sh-tree .seen{opacity:.6;font-size:.85rem}#sh-tree li{line-height:1.4}#sh-tree a.les{display:inline-block;padding:.2rem .1rem}' +
    '@media(max-width:600px){#sh-tree ul{padding-left:.55rem;border-left-width:2px}#sh-tree li{margin:.55rem 0}#sh-tree button.lk{padding:.15rem 0;overflow-wrap:anywhere}#sh-tree .les{white-space:normal}#sh-tree .cols h3{margin:.6rem 0 .2rem}}';
  document.head.appendChild(css);
  var keys = Object.keys(T).sort(function (a, b) { return ((T[a][6] || 0) - (T[b][6] || 0)) || (T[a][0] - T[b][0]); });
  function grp(k) { return (T[k][6] ? 'Linear Algebra I, ' + L('lesson ', 'Lektion ') : 'Analysis I, ' + L('lesson ', 'Lektion ')) + T[k][0]; }
  var opts = '', last = 0;
  keys.forEach(function (k) { if (grp(k) !== last) { if (last) opts += '</optgroup>'; last = grp(k); opts += '<optgroup label="' + last + '">'; } opts += '<option value="' + k + '">' + esc(name(k)) + '</option>'; });
  opts += '</optgroup>';
  root.innerHTML = '<p>' + L('Start in ', 'Start in ') + '<button class="lk" data-k="taylor">Analysis I</button> · <button class="lk" data-k="la_rn">Linear Algebra I</button></p><label><strong>' + L('Pick a theorem', 'Wähle einen Satz') + '</strong><select id="tr-sel">' + opts + '</select></label><div id="tr-out"></div>';
  function item(k, seen) {
    return '<button class="lk" data-k="' + k + '">' + esc(name(k)) + '</button><span class="les">' + (T[k][6] ? 'LA ' : 'L') + T[k][0] + '</span> <a href="' + href(k) + '" class="les">' + L('proof', 'Beweis') + ' →</a>';
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
    document.getElementById('tr-out').innerHTML = '<p class="me" style="margin-top:1rem">' + esc(name(k)) + ' <a class="les" href="' + href(k) + '">' + (T[k][6] ? 'Linear Algebra ' : '') + L('lesson ', 'Lektion ') + T[k][0] + ', ' + L('proof', 'Beweis') + ' →</a></p><div class="cols">' +
      '<div><h3>' + L('Rests on', 'Beruht auf') + '</h3>' + (rest || '<p>' + L('Nothing earlier: this is a starting point (an axiom, a definition, or a direct argument).', 'Nichts Früherem: ein Ausgangspunkt (Axiom, Definition oder direktes Argument).') + '</p>') + '</div>' +
      '<div><h3>' + L('Used directly by', 'Direkt verwendet von') + '</h3>' + (u.length ? '<ul>' + u.map(function (x) { return '<li>' + item(x) + '</li>'; }).join('') + '</ul>' : '<p>' + L('Nothing later in the lessons builds on it directly.', 'Nichts Späteres in den Lektionen baut direkt darauf auf.') + '</p>') + '</div></div>';
    try { history.replaceState(null, '', '#' + k); } catch (e) {}
  }
  document.getElementById('tr-sel').onchange = function () { show(this.value); };
  root.addEventListener('click', function (e) { var b = e.target.closest('button.lk'); if (b) { show(b.getAttribute('data-k')); document.getElementById('tr-sel').scrollIntoView({ block: 'nearest' }); } });
  var h = location.hash.slice(1); show(T[h] ? h : 'taylor');
})();
