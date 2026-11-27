/* ==========================================================================
   FLASHCARDS CHAPTER 7 (English): Series, sequences of functions and power series
   Analysis I - Prof. Dr. Manfred Einsiedler
   English translation of data_kapitel7.js. Formulas, HTML and ids are identical.
   ========================================================================== */

window.FLASHCARDS_EN_KAPITEL_7 = {
  "k7_def_7_1": {
    title: "Definition 7.1 & Proposition 7.2: Series and null sequences",
    category: "7.1 Series",
    front: "When is a <b>series</b> $\\sum_{k=1}^\\infty a_k$ convergent (Definition 7.1), and what does <b>Proposition 7.2</b> say about its terms?",
    back: "For a sequence $(a_k)_k$ in $\\mathbb{R}$ or $\\mathbb{C}$, $s_n = \\sum_{k=1}^n a_k$ is the $n$-th <b>partial sum</b>. The series $\\sum_{k=1}^\\infty a_k$ is called <b>convergent</b> if the limit<br>$$\\sum_{k=1}^\\infty a_k = \\lim_{n\\to\\infty} s_n$$<br>exists (this limit is then the <b>value</b> of the series); otherwise <b>divergent</b>.<br><br><b>Proposition 7.2:</b> If $\\sum_{k=1}^\\infty a_k$ converges, then $(a_n)_n$ is a <b>null sequence</b>: $\\lim_{n\\to\\infty} a_n = 0$.",
    meta: "Script: Definition 7.1 & Proposition 7.2",
    explanation: "A series IS the sequence of its partial sums: before proving convergence, $\\sum_{k=1}^\\infty a_k$ is only a formal object, not a number. <b>Proof of Prop. 7.2:</b> $a_n = s_n - s_{n-1} \\to S - S = 0$. As a contrapositive this is the quickest divergence test: terms not tending to zero $\\Rightarrow$ the series diverges.",
    example: "$\\sum_{k=1}^\\infty \\frac{1}{k(k+1)} = \\sum_k \\big(\\tfrac1k - \\tfrac{1}{k+1}\\big)$ has telescoping partial sums $s_n = 1 - \\tfrac{1}{n+1} \\to 1$ &ndash; convergent with value $1$.",
    counterexample: "<b>1.</b> $\\sum_{n=1}^\\infty (-1)^n$ diverges, because $((-1)^n)_n$ is not a null sequence (the partial sums jump between $-1$ and $0$).<br><b>2.</b> The <b>converse of Prop. 7.2 is false</b>: the harmonic series $\\sum \\tfrac1n$ has terms tending to zero and still diverges (Example 7.4) &ndash; 'terms tend to zero' is necessary, never sufficient!"
  },
  "k7_bsp_7_3_7_4": {
    title: "Examples 7.3 & 7.4: Geometric and harmonic series",
    category: "7.1 Series",
    front: "For which $q$ does the <b>geometric series</b> converge, and why does the <b>harmonic series</b> diverge?",
    back: "<b>Geometric series (Example 7.3):</b> $\\sum_{n=0}^\\infty q^n$ converges for $q \\in \\mathbb{C}$ <b>if and only if $|q| < 1$</b>, and then<br>$$\\sum_{k=0}^\\infty q^k = \\frac{1}{1-q}$$<br>(geometric sum formula $s_n = \\frac{1 - q^{n+1}}{1-q}$ plus $q^{n+1} \\to 0$; for $|q| \\ge 1$ the terms are not a null sequence).<br><br><b>Harmonic series (Example 7.4):</b> $\\sum_{k=1}^\\infty \\tfrac1k$ diverges: for $n = 2^\\ell$, grouping into blocks gives<br>$$\\sum_{k=1}^{2^\\ell} \\frac1k \\ge 1 + \\frac{\\ell}{2}$$<br>(each block $\\tfrac{1}{2^{j}+1} + \\dots + \\tfrac{1}{2^{j+1}}$ contributes at least $\\tfrac12$) &ndash; the partial sums are unbounded, so $\\sum_{n=1}^\\infty \\tfrac1n = \\infty$.",
    meta: "Script: Examples 7.3 & 7.4 (and 7.5: harmonic leaning tower)",
    explanation: "These two series are the reference cases of the whole theory: the geometric series is the standard majorant (the root and quotient tests secretly compare with it), the harmonic series the standard minorant for divergence. Example 7.5: because $\\sum \\tfrac1k$ diverges, one can build a 'leaning tower' of overhanging blocks that reaches arbitrarily far.",
    example: "$\\sum_{k=0}^\\infty \\tfrac{1}{2^k} = \\frac{1}{1 - 1/2} = 2$; $\\sum_{k=0}^\\infty \\big(\\tfrac{i}{2}\\big)^k = \\frac{1}{1 - i/2} = \\frac{4 + 2i}{5}$ &ndash; complex $q$ are allowed too.",
    counterexample: "<b>1.</b> For $|q| = 1$ the geometric series always diverges &ndash; also for $q = i$ or $q = -1$ (terms not a null sequence); the formula $\\frac{1}{1-q}$ would be defined for $q = -1$ ($\\tfrac12$), but does NOT hold there.<br><b>2.</b> 'But the terms become tiny' does not save the harmonic series &ndash; it grows like $\\log n$, slowly, but unboundedly past every bound."
  },
  "k7_lemma_7_6_7_9": {
    title: "Lemmas 7.6-7.9: Calculation rules for series",
    category: "7.1 Series",
    type: "lemma",
    front: "Which rules hold for convergent series: <b>linearity</b> (7.6), <b>index shift</b> (7.8), <b>grouping of terms</b> (7.9)?",
    back: "&bull; <b>Linearity (Lemma 7.6):</b> If $\\sum a_k, \\sum b_k$ converge and $\\alpha \\in \\mathbb{C}$, then so do $\\sum(a_k + b_k)$ and $\\sum(\\alpha a_k)$, with the expected values &ndash; convergent series form a vector space, and the value is linear.<br>&bull; <b>Index shift (Lemma 7.8):</b> $\\sum_{k=N}^\\infty a_k$ converges if and only if $\\sum_{k=1}^\\infty a_k$ converges, with $\\sum_{k=1}^\\infty a_k = \\sum_{k=1}^{N-1} a_k + \\sum_{k=N}^\\infty a_k$. <i>Finitely many terms never change the convergence behaviour.</i><br>&bull; <b>Grouping (Lemma 7.9):</b> In a convergent series one may group adjacent terms arbitrarily ($A_k = a_{n_{k-1}+1} + \\dots + a_{n_k}$): $\\sum_k A_k = \\sum_n a_n$.",
    meta: "Script: Lemmas 7.6, 7.8, 7.9 & Example 7.10",
    explanation: "Everything follows directly from the limit laws for the partial sums; when grouping, the partial sums of $\\sum A_k$ form a <i>subsequence</i> of the partial sums of $\\sum a_n$ (Lemma 5.39). Practical point: you cannot 'break convergence at the beginning' &ndash; only the tail counts.",
    example: "$\\sum_{k=1}^\\infty \\big(\\tfrac{1}{2^k} + \\tfrac{3}{k(k+1)}\\big) = 1 + 3 \\cdot 1 = 4$ by linearity.",
    counterexample: "<b>1.</b> The converse of Lemma 7.9 is false (Example 7.10): $\\sum_n (-1)^n$ diverges, but grouped as $((-1) + 1) + ((-1) + 1) + \\dots = 0 + 0 + \\dots$ it converges &ndash; <b>you may insert brackets, but you may not drop them!</b><br><b>2.</b> Linearity needs convergence of BOTH series: $\\sum ((-1)^n + (-1)^{n+1}) = \\sum 0$ converges, although both series of summands diverge &ndash; nothing follows about the individual series from this."
  },
  "k7_prop_7_11_kor_7_12": {
    title: "Proposition 7.11 & Corollary 7.12: Non-negative terms & comparison test",
    category: "7.1 Series",
    type: "satz",
    front: "What holds for series with <b>non-negative terms</b> (Proposition 7.11), and what is the <b>comparison test</b> (Corollary 7.12)?",
    back: "<b>Proposition 7.11:</b> For $a_k \\ge 0$ the partial sums are monotonically increasing. If they are bounded, the series converges; otherwise one writes $\\sum_{k=1}^\\infty a_k = \\infty$. <i>(For non-negative series there are only two cases: convergent, or $= \\infty$.)</i><br><br><b>Corollary 7.12 (comparison test):</b> If $0 \\le a_k \\le b_k$ (for all, or all sufficiently large $k$), then $\\sum a_k \\le \\sum b_k$ and:<br>$$\\sum b_k \\text{ convergent} \\implies \\sum a_k \\text{ convergent}, \\qquad \\sum a_k \\text{ divergent} \\implies \\sum b_k \\text{ divergent}.$$<br>$\\sum b_k$ is called a <b>majorant</b>, $\\sum a_k$ a <b>minorant</b>.",
    meta: "Script: Proposition 7.11, Corollary 7.12, Examples 7.14/7.15",
    explanation: "This is Theorem 6.5 (monotone sequences) in series form &ndash; the direct line to completeness. In practice one combines the comparison test with asymptotics (Example 7.15): if $a_n$ behaves like $O(\\tfrac{1}{n^2})$, for instance $a_n = \\frac{2n-10}{n^3 - 10n + 100}$, then $\\sum a_n$ converges by comparison with $\\sum \\tfrac{M}{n^2}$. Example 7.14: $\\sum \\tfrac{1}{k^2}$ converges (e.g. via $\\tfrac{1}{k^2} \\le \\tfrac{1}{k(k-1)}$, telescoping).",
    example: "$\\sum_{n=1}^\\infty \\frac{1}{n^2 + 3n} \\le \\sum \\frac{1}{n^2} < \\infty$ &ndash; convergent by majorant. $\\sum \\frac{1}{\\sqrt{n}} \\ge \\sum \\frac{1}{n} = \\infty$ &ndash; divergent by minorant.",
    counterexample: "<b>1.</b> Without non-negativity the comparison test is false (Exercise 7.13): $a_k = -\\tfrac1k \\le b_k = 0$; $\\sum b_k = 0$ converges, but $\\sum a_k = -\\infty$ diverges.<br><b>2.</b> The comparison directions are not reversible: from '$\\sum a_k$ converges' nothing follows about the larger series $\\sum b_k$ &ndash; majorising only helps 'downwards'."
  },
  "k7_prop_7_16": {
    title: "Proposition 7.16 & Example 7.17: Condensation and the p-test",
    category: "7.1 Series",
    type: "proposition",
    front: "What does the <b>condensation criterion</b> (Proposition 7.16) say, and when does $\\sum \\frac{1}{n^p}$ converge (p-test)?",
    back: "<b>Condensation:</b> For a series $\\sum_{k=1}^\\infty a_k$ with <i>non-negative, monotonically decreasing</i> terms $a_1 \\ge a_2 \\ge \\dots \\ge 0$:<br>$$\\sum_{k=1}^\\infty a_k \\text{ converges} \\iff \\sum_{k=1}^\\infty 2^k a_{2^k} \\text{ converges.}$$<br><b>p-test (Example 7.17):</b> For $p \\in \\mathbb{R}$:<br>$$\\sum_{n=1}^\\infty \\frac{1}{n^p} \\text{ converges} \\iff p > 1.$$",
    meta: "Script: Proposition 7.16 & Example 7.17",
    explanation: "<b>Proof idea:</b> block-wise estimate $2^n a_{2^{n+1}} \\le a_{2^n + 1} + \\dots + a_{2^{n+1}} \\le 2^n a_{2^n}$ &ndash; the same idea as the divergence proof for the harmonic series, now as a general criterion. For the p-test: $\\sum 2^k \\cdot \\frac{1}{2^{kp}} = \\sum (2^{1-p})^k$ is a geometric series, convergent exactly when $2^{1-p} < 1$, i.e. $p > 1$.",
    example: "$\\sum \\frac{1}{n^2}$ converges ($p = 2$), $\\sum \\frac{1}{\\sqrt{n}}$ diverges ($p = \\tfrac12$), the harmonic series is the borderline case $p = 1$ (divergent). Also $\\sum \\frac{1}{n \\log n}$ is handled by condensation: $\\sum 2^k \\frac{1}{2^k \\cdot k\\log 2} = \\frac{1}{\\log 2}\\sum\\frac1k$ diverges.",
    counterexample: "<b>1.</b> Without monotonicity condensation is false: if $a_n = \\tfrac1n$ for powers of two $n$ and $a_n = \\tfrac{1}{n^2}$ otherwise, then $\\sum 2^k a_{2^k} = \\sum 1$ only 'sees' the bad terms &ndash; the conclusion fails because the blocks are no longer controlled.<br><b>2.</b> $p = 1$ does NOT belong to the convergence side &ndash; a notorious mistake; $p$ just above 1 (e.g. $1{,}001$) converges, only very slowly."
  },
  "k7_bedingt_7_20": {
    title: "7.1.2 & Example 7.20: Absolute vs. conditional convergence",
    category: "7.1 Series",
    type: "definition",
    front: "When is a series called <b>absolutely convergent</b> or <b>conditionally convergent</b>? Show that the <b>alternating harmonic series</b> converges conditionally.",
    back: "&bull; $\\sum_{n=1}^\\infty a_n$ is called <b>absolutely convergent</b> if $\\sum_{n=1}^\\infty |a_n|$ converges.<br>&bull; It is called <b>conditionally convergent</b> if it converges but does not converge absolutely.<br><br><b>Example 7.20:</b> The alternating harmonic series $\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n} = 1 - \\tfrac12 + \\tfrac13 - \\dots$ converges conditionally:<br>&bull; Not absolutely, since $\\sum |a_n| = \\sum \\tfrac1n = \\infty$.<br>&bull; Convergent: $s_{2n} = \\sum_{k=1}^n \\frac{1}{2k(2k-1)} \\le \\sum \\tfrac{1}{k^2}$ is monotonically increasing and bounded, and $s_{2n-1} = s_{2n} + \\tfrac{1}{2n}$ has the same limit.",
    meta: "Script: Section 7.1.2 & Example 7.20",
    explanation: "The pairing technique (playing even and odd partial sums against each other) is the core of the Leibniz criterion. Absolutely convergent series are 'robust' (rearrangement and products allowed &ndash; Section 7.2), conditionally convergent ones 'fragile' (Riemann's rearrangement theorem!). The value of the alternating harmonic series is, by the way, $\\log 2$ (via Abel's limit theorem, Example 7.66).",
    example: "$\\sum \\frac{(-1)^n}{n^2}$ even converges absolutely ($\\sum \\tfrac{1}{n^2} < \\infty$) &ndash; absolutely convergent $\\Rightarrow$ convergent (Prop. 7.28); the notions are graded.",
    counterexample: "<b>1.</b> 'Convergent' does not imply 'absolutely convergent' &ndash; exactly $\\sum \\frac{(-1)^{n+1}}{n}$ shows this.<br><b>2.</b> For conditionally convergent series one may not approximate asymptotically as with positive terms: $\\frac{(-1)^n}{\\sqrt{n}}$ and $\\frac{(-1)^n}{\\sqrt{n} + (-1)^n}$ 'behave the same', but the first series converges and the second diverges &ndash; the sign structure is everything."
  },
  "k7_satz_7_21": {
    title: "Theorem 7.21: Riemann's rearrangement theorem",
    category: "7.1 Series",
    type: "satz",
    front: "What does <b>Riemann's rearrangement theorem</b> say about conditionally convergent series?",
    back: "Let $\\sum_{n=1}^\\infty a_n$ be a <b>conditionally convergent</b> series with real terms. Then for <b>every</b> $A \\in \\mathbb{R}$ there is a rearrangement (bijection) $\\varphi: \\mathbb{N} \\to \\mathbb{N}$ such that<br>$$\\sum_{n=1}^\\infty a_{\\varphi(n)} = A$$<br>(the rearranged series converges conditionally). Moreover, there is also a rearrangement that <b>diverges</b>.",
    meta: "Script: Theorem 7.21 & Example 7.22",
    explanation: "<b>Why it works:</b> for conditionally convergent series the sub-series of positive and of negative terms both diverge (to $\\pm\\infty$), while the terms tend to zero. So one alternately collects: positive terms until just above $A$, negative terms until just below $A$, and so on &ndash; every target is reachable. Example 7.22: rearranging the alternating harmonic series as $1 - \\tfrac12 - \\tfrac14 + \\tfrac13 - \\tfrac16 - \\tfrac18 + \\dots$ gives exactly <i>half</i> the value.",
    example: "Contrast: for <b>absolutely</b> convergent series every rearrangement is allowed and gives the same value (Theorem 7.35) &ndash; commutativity of addition 'survives' the limit only under absolute convergence.",
    counterexample: "<b>1.</b> Infinite sums are NOT automatically commutative &ndash; the intuition from finite sums breaks down completely for conditional convergence.<br><b>2.</b> The theorem does not hold for absolutely convergent series: $\\sum \\frac{(-1)^n}{2^n}$ cannot be rearranged to a different value &ndash; 'conditional' is an essential hypothesis."
  },
  "k7_prop_7_25": {
    title: "Proposition 7.25: The Leibniz criterion",
    category: "7.1 Series",
    type: "proposition",
    front: "What is the <b>Leibniz criterion</b> for alternating series, including the <b>error estimate</b>?",
    back: "Let $(a_n)_n$ be a <b>monotonically decreasing sequence of positive numbers with $a_n \\to 0$</b>. Then the alternating series $\\sum_{k=1}^\\infty (-1)^{k+1} a_k$ converges, and for all $\\ell \\in \\mathbb{N}$ the <b>error estimate</b><br>$$\\left|\\sum_{k=1}^{\\ell} (-1)^{k+1} a_k - \\sum_{k=1}^{\\infty} (-1)^{k+1} a_k\\right| \\le a_{\\ell+1}$$<br>holds. Moreover the partial sums enclose the value: $s_{2n} \\le \\sum_{k=1}^\\infty (-1)^{k+1}a_k \\le s_{2n-1}$.",
    meta: "Script: Proposition 7.25, Section 7.1.3",
    explanation: "<b>Proof idea:</b> $(s_{2n})_n$ increases, $(s_{2n-1})_n$ decreases, both stay nested inside each other ('oppositely directed sequences', Exercise 6.7), and their gap is $a_{2n} \\to 0$. The error bound 'the error is at most the first omitted term' makes the criterion numerically valuable too &ndash; and in the proof of Theorem 7.74 (pi) it is used to estimate sin and cos.",
    example: "$\\sum \\frac{(-1)^{k+1}}{k}$ (alternating harmonic series) and $\\sum \\frac{(-1)^{k+1}}{\\sqrt{k}}$ converge by Leibniz. After 100 terms of the first, the error is $\\le \\frac{1}{101}$.",
    counterexample: "<b>1.</b> Without monotonicity the criterion fails: $a_{2k} = \\tfrac{1}{k}$, $a_{2k+1} = \\tfrac{1}{2^k}$ is a positive null sequence, but the alternating series diverges (the $\\tfrac1k$ parts accumulate like half the harmonic series).<br><b>2.</b> $a_n \\to 0$ is indispensable: $\\sum (-1)^{k+1} \\cdot 1$ diverges &ndash; monotonicity alone ($1 \\ge 1 \\ge \\dots$) is not enough."
  },
  "k7_satz_7_26": {
    title: "Theorem 7.26: Cauchy criterion for series",
    category: "7.1 Series",
    type: "satz",
    front: "What is the <b>Cauchy criterion for series</b> (Theorem 7.26)?",
    back: "The series $\\sum_{k=1}^\\infty a_k$ converges <b>if and only if</b> for every $\\varepsilon > 0$ there is $N \\in \\mathbb{N}$ such that for all $n \\ge m \\ge N$<br>$$\\left|\\sum_{k=m}^{n} a_k\\right| < \\varepsilon.$$<br><b>Proof:</b> This is the Cauchy criterion for sequences (Theorem 6.26) applied to the partial sums: $s_n - s_{m-1} = \\sum_{k=m}^n a_k$.",
    meta: "Script: Theorem 7.26 & Example 7.27, Section 7.1.4",
    explanation: "All 'blocks' of late terms must become small &ndash; no matter how long they are. This criterion is the workhorse of the chapter: it proves Prop. 7.28 (absolute $\\Rightarrow$ convergent) and the rearrangement theorem 7.35, and sits inside every convergence test. For $m = n$ it contains Prop. 7.2 (null sequences) as a special case.",
    example: "Example 7.27: divergence of the harmonic series via Cauchy: for $\\varepsilon = \\tfrac12$ and every $N$, $\\sum_{k=N+1}^{2N} \\tfrac1k \\ge N \\cdot \\tfrac{1}{2N} = \\tfrac12 \\not< \\varepsilon$ &ndash; the criterion fails.",
    counterexample: "<b>1.</b> Checking only blocks of fixed length is NOT enough: for $\\sum \\tfrac1k$ every single term $|a_m| = \\tfrac1m$ becomes small, but long blocks do not &ndash; exactly the mistake from Example 6.27 in series form.<br><b>2.</b> In $\\mathbb{Q}$ the criterion would be false (it rests on the completeness of $\\mathbb{R}$) &ndash; e.g. the partial sums of $\\sum \\tfrac{1}{k!}$ are Cauchy in $\\mathbb{Q}$, but their limit $e - 1 \\notin \\mathbb{Q}$."
  },
  "k7_prop_7_28": {
    title: "Proposition 7.28: Absolute convergence implies convergence",
    category: "7.2 Absolute convergence",
    type: "proposition",
    front: "Why is every <b>absolutely convergent</b> series convergent, and which inequality holds for its value?",
    back: "Every absolutely convergent series $\\sum_{n=1}^\\infty a_n$ converges, and the <b>generalised triangle inequality</b> holds<br>$$\\left|\\sum_{n=1}^\\infty a_n\\right| \\le \\sum_{n=1}^\\infty |a_n|.$$<br><b>Proof:</b> Cauchy criterion twice: $\\big|\\sum_{k=m}^n a_k\\big| \\le \\sum_{k=m}^n |a_k| < \\varepsilon$; the inequality follows from $|\\sum_{k=1}^n a_k| \\le \\sum_{k=1}^n |a_k|$ in the limit.",
    meta: "Script: Proposition 7.28, Section 7.2",
    explanation: "The finite triangle inequality (Exercise 3.4) survives the limit. Strategically important: convergence questions for arbitrary (also complex) series can be reduced to series with <i>non-negative</i> terms, where the comfortable theory from 7.1.1 (comparison, condensation) applies.",
    example: "$\\sum \\frac{(-1)^n}{n^2}$ and $\\sum \\frac{i^n}{2^n}$ converge absolutely, hence converge &ndash; without any sign or phase discussion.",
    counterexample: "<b>1.</b> The converse is false: $\\sum \\frac{(-1)^{n+1}}{n}$ converges, but not absolutely.<br><b>2.</b> Equality in the triangle inequality is rare: $\\big|\\sum \\frac{(-1)^{n+1}}{n^2}\\big| < \\sum \\frac{1}{n^2}$ strictly &ndash; cancellation makes the value smaller than the 'mass' of the series."
  },
  "k7_kor_7_29": {
    title: "Corollary 7.29: Weierstrass majorant criterion",
    category: "7.2 Absolute convergence",
    type: "satz",
    front: "What is the <b>Weierstrass majorant criterion</b> (Corollary 7.29)?",
    back: "Let $(a_n)_n$ be a complex and $(b_n)_n$ a real sequence with<br>$$|a_n| \\le b_n \\quad \\text{for all sufficiently large } n.$$<br>If $\\sum_{n=1}^\\infty b_n$ converges, then $\\sum_{n=1}^\\infty a_n$ is <b>absolutely convergent</b> (and hence convergent).",
    meta: "Script: Corollary 7.29",
    explanation: "The complex version of the comparison test: estimate the absolute values, apply Corollary 7.12, then invoke Prop. 7.28. The standard recipe: find a convergent comparison series (usually geometric or $\\sum n^{-p}$ with $p>1$) dominating the terms. The root and quotient tests are just systematised majorant comparisons with the geometric series.",
    example: "$\\sum_{n=1}^\\infty \\frac{e^{in\\theta}}{n^2}$: since $\\big|\\frac{e^{in\\theta}}{n^2}\\big| = \\frac{1}{n^2}$, it converges absolutely for every $\\theta \\in \\mathbb{R}$ &ndash; the basis for uniformly convergent series of functions.",
    counterexample: "<b>1.</b> A <i>divergent</i> majorant proves nothing: $|a_n| \\le \\tfrac1n$ allows both ($a_n = \\tfrac1n$ divergent, $a_n = \\tfrac{1}{n^2}$ convergent).<br><b>2.</b> The bound must control the <i>absolute values</i>: $a_n \\le b_n$ alone (without absolute value) is not enough &ndash; $a_n = -1 \\le b_n = \\tfrac{1}{n^2}$, but $\\sum a_n$ diverges."
  },
  "k7_kor_7_30": {
    title: "Corollary 7.30: The root test",
    category: "7.2 Absolute convergence",
    type: "satz",
    front: "What is the <b>Cauchy root test</b> (Corollary 7.30), and what holds in the case $\\alpha = 1$?",
    back: "Let $(a_n)_n$ be a sequence of complex numbers and<br>$$\\alpha = \\limsup_{n\\to\\infty} \\sqrt[n]{|a_n|} \\in \\mathbb{R} \\cup \\{\\infty\\}.$$<br>Then:<br>$$\\alpha < 1 \\implies \\sum_{n=1}^\\infty a_n \\text{ is absolutely convergent}$$<br>$$\\alpha > 1 \\implies \\sum_{n=1}^\\infty a_n \\text{ is divergent (terms not a null sequence).}$$<br><b>$\\alpha = 1$: no statement possible</b> (Example 7.31).",
    meta: "Script: Corollary 7.30 & Example 7.31",
    explanation: "<b>Proof:</b> for $\\alpha < 1$ we have $|a_k| < q^k$ with $q = \\frac{1+\\alpha}{2} < 1$ for large $k$ &ndash; a geometric majorant. For $\\alpha > 1$ Theorem 6.15 yields a subsequence with $|a_{n_k}| > 1$. The limsup makes the test <i>always</i> applicable (it always exists) &ndash; which is why it is also the tool for the radius of convergence of power series (Def. 7.55).",
    example: "$\\sum_{n=1}^\\infty \\frac{n^5}{3^n}$: $\\sqrt[n]{|a_n|} = \\frac{(\\sqrt[n]{n})^5}{3} \\to \\tfrac13 < 1$ &ndash; absolutely convergent.",
    counterexample: "<b>1.</b> $\\alpha = 1$ decides nothing (Example 7.31): $\\sum \\tfrac1n$ (divergent) and $\\sum \\tfrac{1}{n^2}$ (convergent) both have $\\sqrt[n]{|a_n|} \\to 1$.<br><b>2.</b> $\\alpha > 1$ does not mean 'slow divergence': the terms themselves stay away from zero ($|a_{n_k}| > 1$ for infinitely many $k$) &ndash; a series with terms tending to zero automatically has $\\alpha \\le 1$."
  },
  "k7_kor_7_32": {
    title: "Corollary 7.32: The quotient test",
    category: "7.2 Absolute convergence",
    type: "satz",
    front: "What is <b>d'Alembert's quotient test</b> (Corollary 7.32)?",
    back: "Let $(a_n)_n$ be a sequence of complex numbers with $a_n \\neq 0$ for all $n$, such that<br>$$\\alpha = \\lim_{n\\to\\infty} \\frac{|a_{n+1}|}{|a_n|}$$<br><b>exists</b>. Then:<br>$$\\alpha < 1 \\implies \\sum a_n \\text{ absolutely convergent}, \\qquad \\alpha > 1 \\implies \\sum a_n \\text{ divergent}$$<br>(in the second case the terms do not tend to zero). For $\\alpha = 1$: no statement.",
    meta: "Script: Corollary 7.32, Important Exercise 7.33, Exercise 7.34",
    explanation: "Proof idea as for the root test: from some $N$ on, $|a_{n+1}| \\le q|a_n|$ with $q < 1$, hence $|a_n| \\le q^{n-N}|a_N|$ &ndash; a geometric majorant. <b>Warning (Exercise 7.34):</b> unlike the root test, here you may NOT simply take the limsup: for oscillating quotients (alternately large and small) one can have $\\limsup \\frac{|a_{n+1}|}{|a_n|} > 1$ even though the series converges. The root test is the stronger of the two.",
    example: "$\\sum \\frac{z^n}{n!}$: $\\frac{|a_{n+1}|}{|a_n|} = \\frac{|z|}{n+1} \\to 0 < 1$ for every $z \\in \\mathbb{C}$ &ndash; the exponential series converges absolutely on all of $\\mathbb{C}$.",
    counterexample: "<b>1.</b> $\\alpha = 1$ is undecidable: again $\\sum \\tfrac1n$ vs. $\\sum \\tfrac{1}{n^2}$ (quotients $\\to 1$ in both cases).<br><b>2.</b> If the limit of the quotients does not exist, the test is silent, yet the series may converge perfectly well: $a_n = 2^{-n + (-1)^n}$ has quotients jumping between $\\tfrac18$ and $2$, but $\\sum a_n$ converges (root test: $\\sqrt[n]{a_n} \\to \\tfrac12$)."
  },
  "k7_satz_7_35": {
    title: "Theorem 7.35: Rearranging absolutely convergent series",
    category: "7.2 Absolute convergence",
    type: "satz",
    front: "What does <b>Theorem 7.35</b> say about rearrangements of absolutely convergent series?",
    back: "Let $\\sum_{n=1}^\\infty a_n$ be an absolutely convergent series with complex terms and $\\varphi: \\mathbb{N} \\to \\mathbb{N}$ a bijection (rearrangement). Then $\\sum_{n=1}^\\infty a_{\\varphi(n)}$ is also absolutely convergent and<br>$$\\sum_{n=1}^\\infty a_n = \\sum_{n=1}^\\infty a_{\\varphi(n)}.$$",
    meta: "Script: Theorem 7.35, Section 7.2.2",
    explanation: "The 'positive' rearrangement theorem &ndash; the counterpart of Riemann's rearrangement theorem 7.21. Proof idea: by Cauchy the 'remaining mass' $\\sum_{k \\ge N}|a_k| < \\varepsilon$; choosing $M$ so large that $\\varphi(\\{1,\\dots,M\\})$ contains all indices $1, \\dots, N$, the partial sums differ only by terms from the remaining mass. Absolutely convergent series thus behave like 'infinite sums without order'.",
    example: "$\\sum \\frac{(-1)^n}{2^n}$ may be rearranged arbitrarily (first all even, then all odd indices, and so on) &ndash; its value $\\tfrac{1}{1+1/2}-1 = -\\tfrac13$ (starting the sum at n = 1) stays the same.",
    counterexample: "<b>1.</b> For conditionally convergent series the statement is false (Theorem 7.21): the alternating harmonic series can be rearranged to any value.<br><b>2.</b> $\\varphi$ must be bijective: <i>dropping</i> terms or <i>counting them twice</i> changes the value of course, even under absolute convergence ($\\sum 2^{-n}$ without the even indices is a different series)."
  },
  "k7_satz_7_36_37": {
    title: "Theorem 7.36 & Corollary 7.37: Product theorem and Cauchy product",
    category: "7.2 Absolute convergence",
    type: "satz",
    front: "How may absolutely convergent series be <b>multiplied</b> (product theorem 7.36, Cauchy product 7.37)?",
    back: "<b>Theorem 7.36:</b> If $\\sum a_n$, $\\sum b_n$ are absolutely convergent and $\\varphi: \\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{N}$ is a bijection, then $\\sum_n a_{\\varphi(n)_1} b_{\\varphi(n)_2}$ is absolutely convergent with value $\\big(\\sum a_n\\big)\\big(\\sum b_n\\big)$ &ndash; all products $a_i b_j$ may be summed in <i>any</i> order.<br><br><b>Corollary 7.37 (Cauchy product):</b> For absolutely convergent $\\sum_{n=0}^\\infty a_n$, $\\sum_{n=0}^\\infty b_n$, with diagonal ordering:<br>$$\\sum_{n=0}^\\infty \\Big(\\sum_{k=0}^n a_{n-k} b_k\\Big) = \\Big(\\sum_{n=0}^\\infty a_n\\Big)\\Big(\\sum_{n=0}^\\infty b_n\\Big),$$<br>where the left series converges absolutely.",
    meta: "Script: Theorem 7.36 & Corollary 7.37, Example 7.38",
    explanation: "The Cauchy product collects products along the diagonals $i + j = n$ &ndash; exactly the right ordering for power series, where $a_{n-k}z^{n-k} \\cdot b_k z^k$ all carry the factor $z^n$. The addition formula $\\exp(z+w) = \\exp(z)\\exp(w)$ is THE application (Section 7.5.3): Cauchy product of the exponential series plus the binomial theorem.",
    example: "Example 7.38: $\\big(\\sum_{n=0}^\\infty q^n\\big)^2 = \\sum_{n=0}^\\infty (n+1)q^n = \\frac{1}{(1-q)^2}$ for $|q| < 1$ (on the diagonal $n$ there are $n+1$ products $q^{n-k}q^k = q^n$).",
    counterexample: "<b>1.</b> For merely conditionally convergent series the Cauchy product may diverge: the classic example $a_n = b_n = \\frac{(-1)^n}{\\sqrt{n+1}}$ (Leibniz-convergent) has Cauchy product terms of absolute value $\\ge 1$ &ndash; not a null sequence.<br><b>2.</b> Termwise multiplication $\\sum a_n b_n$ is NOT the product of the series: $\\big(\\sum 2^{-n}\\big)\\big(\\sum 3^{-n}\\big) = 3 \\neq \\sum 6^{-n} = \\tfrac65$."
  },
  "k7_def_7_40": {
    title: "Definition 7.40: Pointwise convergence and its weaknesses",
    category: "7.3 Convergence of function sequences",
    type: "definition",
    front: "When does a sequence of functions $(f_n)_n$ converge <b>pointwise</b>, and which three weaknesses do Examples 7.42-7.44 show?",
    back: "$(f_n)_n$ on $X$ converges <b>pointwise</b> to $f: X \\to \\mathbb{C}$ if $f_n(x) \\to f(x)$ for every $x \\in X$:<br>$$\\forall x \\in X\\ \\forall \\varepsilon > 0\\ \\exists N\\ \\forall n \\ge N: |f_n(x) - f(x)| < \\varepsilon$$<br>($N$ may depend on $x$!).<br><br><b>Weaknesses:</b><br>&bull; <b>Example 7.42:</b> $f_n(x) = x^n$ on $[0,1]$: continuous $f_n$, but the limit function $\\mathbb{1}_{\\{1\\}}$ is discontinuous.<br>&bull; <b>Example 7.43:</b> travelling triangular spikes ($f_n$ continuous, $f_n \\to 0$ pointwise), but $\\int_0^1 f_n\\,\\mathrm{d}x = \\tfrac14 \\not\\to 0 = \\int_0^1 f\\,\\mathrm{d}x$.<br>&bull; <b>Example 7.44:</b> $f_n = \\mathbb{1}_{\\{q_1,\\dots,q_n\\}}$ (the first $n$ rational numbers): Riemann-integrable $f_n$, limit function $\\mathbb{1}_{\\mathbb{Q}\\cap[0,1]}$ is <b>not</b> Riemann-integrable.",
    meta: "Script: Definition 7.40 & Examples 7.42-7.44",
    explanation: "So pointwise convergence preserves neither continuity, nor integrability, nor integral values &ndash; it is too weak for analysis. The position of the quantifier '$\\forall x$' BEFORE '$\\exists N$' is the whole difference from uniform convergence. (The exp definition $\\exp(x) = \\lim (1 + \\tfrac{x}{n})^n$ was our first example of pointwise convergence.)",
    example: "$f_n(x) = x^n$ on $[0, 1]$: for $x = 0{,}99$ one needs $N \\approx 460$, for $x = 0{,}999$ already $N \\approx 4600$, until $f_n(x) < \\tfrac{1}{100}$ &ndash; $N$ explodes near $1$: exactly where uniformity fails.",
    counterexample: "<b>1.</b> Example 7.43 shows: $\\lim \\int f_n \\neq \\int \\lim f_n$ is possible, although ALL functions involved (including the limit function!) are continuous.<br><b>2.</b> Example 7.44: even the mere integrability of the limit function can be lost &ndash; pointwise limits lead out of $\\mathcal{R}([0,1])$."
  },
  "k7_def_7_45": {
    title: "Definition 7.45: Uniform convergence",
    category: "7.3 Convergence of function sequences",
    type: "definition",
    front: "When does a sequence of functions converge <b>uniformly</b> (Definition 7.45), and what is the difference from pointwise convergence?",
    back: "$(f_n)_n$ on $X$ converges <b>uniformly</b> to $f$ if for every $\\varepsilon > 0$ there is $N \\in \\mathbb{N}$ such that for <b>all $n \\ge N$ and all $x \\in X$</b><br>$$|f_n(x) - f(x)| < \\varepsilon.$$<br>In predicate logic:<br>$$\\forall \\varepsilon > 0\\ \\exists N \\in \\mathbb{N}\\ \\forall n \\ge N\\ \\big(\\forall x \\in X: |f_n(x) - f(x)| < \\varepsilon\\big)$$<br>The difference from pointwise convergence: <b>$N$ does not depend on $x$</b> &ndash; the quantifier $\\forall x$ has moved behind $\\exists N$.",
    meta: "Script: Definition 7.45, Section 7.3.2",
    explanation: "Visually: from $N$ on, the WHOLE graph of $f_n$ lies in the $\\varepsilon$-tube around $f$. 'Uniform' means, as with uniform continuity, the independence of a quantity ($N$ resp. $\\delta$) from the point. Equivalently: $\\sup_{x \\in X} |f_n(x) - f(x)| \\to 0$ &ndash; convergence with respect to the sup norm $\\|\\cdot\\|_\\infty$ (cf. Exercise 5.47).",
    example: "$f_n(x) = \\tfrac{x}{n}$ on $[0, 1]$: $\\sup_{x}|f_n(x)| = \\tfrac1n \\to 0$ &ndash; uniformly to $0$. Also $f_n(x) = x^n$ on $[0, S]$ with $S < 1$: $\\sup |f_n| = S^n \\to 0$.",
    counterexample: "<b>1.</b> $f_n(x) = x^n$ on $[0, 1]$ converges pointwise but NOT uniformly: $\\sup_{x \\in [0,1]}|f_n(x) - f(x)| \\geq f_n(2^{-1/n}) = \\tfrac12$ for every $n$.<br><b>2.</b> Uniform convergence depends on the domain: the same sequence $x^n$ is uniformly convergent on every $[0, S]$, $S<1$ &ndash; 'uniform' always means 'uniform on $X$'."
  },
  "k7_satz_7_48_49": {
    title: "Theorems 7.48 & 7.49: Inheritance of continuity and the integral",
    category: "7.3 Convergence of function sequences",
    type: "satz",
    front: "What is inherited under <b>uniform</b> convergence: continuity (Theorem 7.48) and the Riemann integral (Theorem 7.49)?",
    back: "<b>Theorem 7.48:</b> If a sequence of <b>continuous</b> functions $f_n: D \\to \\mathbb{C}$ converges uniformly to $f$, then $f$ is <b>continuous</b>.<br><br><b>Theorem 7.49:</b> If a sequence of <b>Riemann-integrable</b> functions $f_n: [a,b] \\to \\mathbb{R}$ converges uniformly to $f$, then $f$ is Riemann-integrable and<br>$$\\lim_{n\\to\\infty} \\int_a^b f_n\\,\\mathrm{d}x = \\int_a^b \\lim_{n\\to\\infty} f_n\\,\\mathrm{d}x = \\int_a^b f\\,\\mathrm{d}x$$<br>&ndash; <b>integration and limit may be interchanged</b>.",
    meta: "Script: Theorems 7.48 & 7.49",
    explanation: "<b>Proof of 7.48 ('$3\\varepsilon$ argument'):</b> $|f(x) - f(x_0)| \\le |f(x) - f_n(x)| + |f_n(x) - f_n(x_0)| + |f_n(x_0) - f(x_0)| < 3\\varepsilon$ &ndash; the middle term via the continuity of $f_n$, the outer ones via uniformity. For 7.49 one shifts the step functions of $f_n$ by $\\pm\\varepsilon$: $u - \\varepsilon \\le f \\le o + \\varepsilon$. Both theorems make uniform convergence the 'right' notion for power series.",
    example: "Since $\\sum_{k=0}^n \\frac{x^k}{k!}$ converges uniformly to $\\exp$ on every $[-S, S]$, exp is continuous and may be integrated termwise (Theorem 7.85, Corollary 7.86).",
    counterexample: "<b>1.</b> Pointwise convergence is not enough: $x^n$ on $[0,1]$ (continuous $\\to$ discontinuous, Example 7.42) and the triangular spikes (integrals $\\tfrac14 \\not\\to 0$, Example 7.43).<br><b>2.</b> The converse of 7.48 does not hold: from 'all $f_n$ and $f$ continuous, $f_n \\to f$ pointwise' no uniform convergence follows &ndash; the spike sequence of 7.43 is the counterexample (everything continuous, convergence not uniform)."
  },
  "k7_def_7_54_55": {
    title: "Definitions 7.54 & 7.55: Power series and radius of convergence",
    category: "7.4 Power series",
    type: "definition",
    front: "What is a <b>power series</b>, and how is its <b>radius of convergence</b> defined (Cauchy-Hadamard)?",
    back: "<b>Definition 7.54:</b> For coefficients $a_n \\in \\mathbb{C}$ ($n \\in \\mathbb{N}_0$) the formal expression<br>$$\\sum_{n=0}^\\infty a_n z^n$$<br>is a <b>power series</b> in the variable $z$.<br><br><b>Definition 7.55 (radius of convergence):</b><br>$$R = \\frac{1}{\\limsup_{n\\to\\infty} \\sqrt[n]{|a_n|}}$$<br>with the conventions $\\tfrac{1}{+\\infty} = 0$ and (only here) $\\tfrac10 = +\\infty$.",
    meta: "Script: Definitions 7.54 & 7.55 and Lemma 7.60",
    explanation: "A power series is, first of all &ndash; like a polynomial in Def. 3.13, but with infinitely many terms &ndash; a <i>formal</i> object; only Theorem 7.56 says where one may substitute. <b>Lemma 7.60:</b> if the limit exists, the often more convenient quotient formula also holds: $R = \\lim_{n\\to\\infty} \\frac{|a_n|}{|a_{n+1}|}$. At $z = 0$ every power series converges (value $a_0$).",
    example: "$\\sum z^n$: $R = 1$. $\\sum \\frac{z^n}{n!}$: $R = \\lim \\frac{(n+1)!}{n!} = \\infty$ (exp). $\\sum n! z^n$: $R = 0$ &ndash; converges only for $z = 0$.",
    counterexample: "<b>1.</b> The quotient formula needs the existence of the limit: for $a_n = 2^{(-1)^n n}$ the quotients jump; only Cauchy-Hadamard (limsup) always works.<br><b>2.</b> $R$ says nothing about the <i>boundary</i> $|z| = R$: $\\sum z^n$, $\\sum \\tfrac{z^n}{n}$ and $\\sum \\tfrac{z^n}{n^2}$ all have $R = 1$, but behave completely differently at $|z| = 1$ (nowhere / partly / everywhere convergent)."
  },
  "k7_satz_7_56": {
    title: "Theorem 7.56: On the radius of convergence",
    category: "7.4 Power series",
    type: "satz",
    front: "What does <b>Theorem 7.56</b> say about the convergence behaviour of a power series inside, outside and on discs?",
    back: "Let $\\sum_{n=0}^\\infty a_n z^n$ be a power series with radius of convergence $R$. Then:<br>&bull; <b>$|z| < R$:</b> absolute convergence;<br>&bull; <b>$|z| > R$:</b> divergence;<br>&bull; on every disc $B_S(0)$ with $S \\in (0, R)$ the partial sums $\\sum_{n=0}^N a_n z^n$ converge <b>uniformly</b>.<br><br><b>In particular</b> the power series defines the <b>continuous</b> map $z \\in B_R(0) \\mapsto \\sum_{n=0}^\\infty a_n z^n \\in \\mathbb{C}$.",
    meta: "Script: Theorem 7.56 & Example 7.57",
    explanation: "<b>Proof:</b> root test: $\\limsup \\sqrt[n]{|a_n z^n|} = \\frac{|z|}{R}$. Uniformity on $B_S(0)$ via the Weierstrass majorant $\\sum |a_n| S^n < \\infty$; continuity then from Theorem 7.48. <b>Subtlety (Example 7.57):</b> on the <i>full open</i> disc $B_R(0)$ convergence need not be uniform (e.g. $\\sum z^n$) &ndash; only on every smaller disc $B_S(0)$, $S < R$; for continuity at each point that suffices.",
    example: "The geometric series: $\\sum z^n = \\frac{1}{1-z}$, continuous on $B_1(0)$; exp, sin, cos have $R = \\infty$ and are therefore continuous functions defined on all of $\\mathbb{C}$.",
    counterexample: "<b>1.</b> The theorem says nothing about the behaviour at $|z| = R$ &ndash; additional arguments are needed there (e.g. Leibniz at $z = -1$ for $\\sum \\tfrac{z^n}{n}$, or Abel's limit theorem).<br><b>2.</b> Uniform convergence on all of $B_R(0)$ is in general false: for $\\sum z^n$, $\\sup_{|z|<1}\\big|\\sum_{k>n} z^k\\big| = \\infty$ for every $n$ &ndash; the tail sums blow up at the boundary."
  },
  "k7_prop_7_62_satz_7_65": {
    title: "Proposition 7.62 & Theorem 7.65: Calculating with power series & Abel",
    category: "7.4 Power series",
    type: "satz",
    front: "How does one <b>add and multiply</b> power series (Proposition 7.62), and what does <b>Abel's limit theorem</b> (Theorem 7.65) say?",
    back: "<b>Proposition 7.62:</b> If $\\sum a_n z^n$, $\\sum b_n z^n$ have radii of convergence $R_a, R_b$, then for $|z| < \\min\\{R_a, R_b\\}$:<br>$$\\sum a_n z^n + \\sum b_n z^n = \\sum (a_n + b_n)z^n$$<br>$$\\Big(\\sum a_n z^n\\Big)\\Big(\\sum b_n z^n\\Big) = \\sum_{n=0}^\\infty \\Big(\\sum_{k=0}^n a_{n-k}b_k\\Big) z^n \\quad \\text{(Cauchy product)}$$<br>with radius of convergence $\\ge \\min\\{R_a, R_b\\}$ for the right-hand side.<br><br><b>Theorem 7.65 (Abel):</b> If $\\sum a_n x^n$ has radius of convergence $\\ge R$ and $\\sum a_n R^n$ converges, then the function is also continuous at the boundary point:<br>$$\\sum_{n=0}^\\infty a_n R^n = \\lim_{x \\nearrow R} \\sum_{n=0}^\\infty a_n x^n.$$",
    meta: "Script: Proposition 7.62, Theorem 7.65, Example 7.66",
    explanation: "Power series thus form a computational domain in which one works as with 'infinite polynomials'. Abel's limit theorem builds the bridge from the inside to the boundary: if the series converges at a boundary point at all, its value matches continuously the limit from inside &ndash; the tool for computing series values such as $\\log 2$ and $\\tfrac{\\pi}{4}$ (Example 7.66 with the series of $\\log(1+x)$ and $\\arctan x$, once these are available in Chapter 8).",
    example: "Example 7.66: $\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n}$ converges (Leibniz) and the associated power series has $R = 1$ &ndash; by Abel its value is $\\lim_{x \\nearrow 1} \\sum \\frac{(-1)^{n+1}}{n}x^n = \\log 2$.",
    counterexample: "<b>1.</b> The converse of Abel is false: $\\lim_{x \\nearrow 1} \\sum (-1)^n x^n = \\lim \\frac{1}{1+x} = \\tfrac12$ exists, but $\\sum (-1)^n$ diverges &ndash; a limit from inside does not imply boundary convergence.<br><b>2.</b> The radius of convergence of the product can be STRICTLY larger than $\\min\\{R_a, R_b\\}$: the product $(1-z)\\cdot\\frac{1}{1-z}$, with $R = \\infty$ and $R = 1$ respectively, is the constant $1$ with $R = \\infty$ &ndash; '$\\ge$' is not equality."
  },
  "k7_satz_7_68": {
    title: "Theorem 7.68: The complex exponential map",
    category: "7.5 The (complex) exponential map",
    type: "satz",
    front: "How is the <b>complex exponential map</b> defined, and which formulas hold (Theorem 7.68)?",
    back: "For $z \\in \\mathbb{C}$ one defines<br>$$\\exp(z) = \\sum_{k=0}^\\infty \\frac{1}{k!} z^k$$<br>(radius of convergence $\\infty$) &ndash; a <b>continuous extension</b> of the real exponential map to $\\mathbb{C}$. The following hold:<br>&bull; <b>Addition formula:</b> $\\exp(z + w) = \\exp(z)\\exp(w)$ for all $z, w \\in \\mathbb{C}$<br>&bull; <b>Absolute value:</b> $|\\exp(z)| = \\exp(\\operatorname{Re}(z))$; in particular $|\\exp(iy)| = 1$ for all $y \\in \\mathbb{R}$.<br><br>For $a > 0$ and $z \\in \\mathbb{C}$ one sets $a^z = \\exp(z \\log a)$; in particular $e^z = \\exp(z)$.",
    meta: "Script: Theorem 7.68 & Exercise 7.69, Sections 7.5.1-7.5.4",
    explanation: "<b>Proof highlights:</b> The addition formula is the Cauchy product of the two exponential series plus the binomial theorem: $\\sum_k \\frac{z^k}{k!}\\frac{w^{n-k}}{(n-k)!} = \\frac{(z+w)^n}{n!}$. For the absolute value: $\\overline{\\exp(z)} = \\exp(\\bar z)$ (continuity of conjugation), so $|\\exp(z)|^2 = \\exp(z + \\bar z) = \\exp(2\\operatorname{Re} z)$. The limit formula $\\exp(z) = \\lim (1 + \\tfrac{z}{n})^n$ also holds on all of $\\mathbb{C}$ (Exercise 7.69).",
    example: "$|e^{i\\theta}| = 1$: the map $\\theta \\mapsto e^{i\\theta}$ runs around the unit circle &ndash; the basis of polar coordinates. $e^{2+i\\pi} = e^2 \\cdot e^{i\\pi} = -e^2$.",
    counterexample: "<b>1.</b> The complex exp is NOT injective (unlike the real one): $\\exp(z + 2\\pi i) = \\exp(z)$ &ndash; it is $2\\pi i$-periodic; a 'logarithm' on $\\mathbb{C}$ requires choices (Section 7.6.5).<br><b>2.</b> $\\exp(z) \\neq 0$ for ALL $z \\in \\mathbb{C}$ (because $\\exp(z)\\exp(-z) = 1$) &ndash; but unlike in the reals, $\\exp(z)$ is not always positive or even real: $e^{i\\pi} = -1$."
  },
  "k7_satz_7_72": {
    title: "Theorem 7.72: Sine and cosine as power series",
    category: "7.6 Trigonometric functions",
    type: "satz",
    front: "How are <b>sine and cosine</b> defined via power series, and how are they related to $\\exp$ (Theorem 7.72)?",
    back: "$$\\sin(z) = z - \\frac{z^3}{3!} + \\frac{z^5}{5!} - \\dots, \\qquad \\cos(z) = 1 - \\frac{z^2}{2!} + \\frac{z^4}{4!} - \\dots$$<br>define the <b>odd</b> continuous sine function and the <b>even</b> continuous cosine function on all of $\\mathbb{C}$ (radius of convergence $\\infty$), real-valued on $\\mathbb{R}$. Relations:<br>$$\\exp(iz) = \\cos(z) + i\\sin(z) \\quad \\text{(Euler)}, \\qquad \\sin(z) = \\frac{e^{iz} - e^{-iz}}{2i}, \\qquad \\cos(z) = \\frac{e^{iz} + e^{-iz}}{2}$$<br><b>Addition formulas:</b><br>$$\\sin(z+w) = \\sin z \\cos w + \\cos z \\sin w, \\qquad \\cos(z+w) = \\cos z \\cos w - \\sin z \\sin w$$",
    meta: "Script: Theorem 7.72, Section 7.6",
    explanation: "Euler's formula arises by simply sorting the exponential series of $e^{iz}$ into even ($\\to \\cos$) and odd ($\\to \\sin$) powers &ndash; permitted thanks to absolute convergence. The addition formulas then follow from the addition formula for exp by comparing real and imaginary parts. From $|e^{ix}| = 1$ follows at once the 'trigonometric Pythagoras' $\\sin^2(x) + \\cos^2(x) = 1$ for $x \\in \\mathbb{R}$.",
    example: "$\\cos(2z) = \\cos^2 z - \\sin^2 z$ and $\\sin(2z) = 2\\sin z\\cos z$ &ndash; special cases $w = z$ of the addition formulas.",
    counterexample: "<b>1.</b> On $\\mathbb{C}$ sin and cos are NOT bounded: $\\cos(iy) = \\frac{e^{-y} + e^{y}}{2} \\to \\infty$ for $y \\to \\infty$ &ndash; the bound $|\\sin|, |\\cos| \\le 1$ holds only on $\\mathbb{R}$!<br><b>2.</b> $\\sin(z + w) \\neq \\sin z + \\sin w$: sine is not additive ($\\sin(\\pi) = 0 \\neq 2\\sin(\\tfrac\\pi2) = 2$) &ndash; only the argument is additive, in the Euler exponential form."
  },
  "k7_satz_7_74": {
    title: "Theorem 7.74 & Corollary 7.75: The circle number pi and periodicity",
    category: "7.6 Trigonometric functions",
    type: "satz",
    front: "How is $\\pi$ <b>defined</b> in the script (Theorem 7.74), and which <b>periodicity formulas</b> follow (Corollary 7.75)?",
    back: "<b>Theorem 7.74:</b> There is <b>exactly one</b> number $\\pi \\in (0, 4)$ with $\\sin(\\pi) = 0$. For this number:<br>$$e^{2\\pi i} = 1, \\quad e^{\\pi i} = -1, \\quad e^{\\frac{\\pi}{2} i} = i, \\quad e^{\\frac{3\\pi}{2}i} = -i, \\quad e^{\\frac{\\pi}{4}i} = \\tfrac{1}{\\sqrt2} + \\tfrac{i}{\\sqrt2}$$<br><b>Corollary 7.75 (periodicity):</b> For all $z \\in \\mathbb{C}$:<br>$$\\sin(z + \\pi) = -\\sin z, \\quad \\cos(z + \\pi) = -\\cos z, \\quad \\sin(z + 2\\pi) = \\sin z, \\quad \\cos(z + 2\\pi) = \\cos z$$<br>and $\\cos(z) = \\sin(z + \\tfrac{\\pi}{2})$.<br><br><b>Important Exercise 7.76:</b> The zeros of sin are exactly $\\pi\\mathbb{Z}$, those of cos exactly $\\pi\\mathbb{Z} + \\tfrac{\\pi}{2}$.",
    meta: "Script: Theorem 7.74, Corollary 7.75, Important Exercise 7.76",
    explanation: "$\\pi$ is defined here purely analytically as the smallest positive zero of the sine &ndash; no geometry needed! The existence proof uses the Leibniz error estimate for alternating series: $\\sin(x) \\ge x - \\tfrac{x^3}{6} > 0$ on $(0, 1]$ and a sign change before $4$, then the intermediate value theorem. All values in the table follow from $e^{\\pi i} = -1$ by taking roots with the addition formulas.",
    example: "By periodicity it suffices to know the values on $[0, \\tfrac{\\pi}{2}]$ to know sin and cos everywhere on $\\mathbb{R}$. $\\sin(100\\pi) = 0$, $\\cos(\\tfrac{7\\pi}{2}) = \\cos(\\tfrac{3\\pi}{2}) = 0$.",
    counterexample: "<b>1.</b> '$\\sin(\\pi) = 0$' alone does not define $\\pi$ &ndash; $0$ and $2\\pi$ are zeros too; only the restriction to $(0, 4)$ (smallest positive zero) makes $\\pi$ unique.<br><b>2.</b> $e^{2\\pi i} = 1$ again shows: exp is not injective on $\\mathbb{C}$ &ndash; from $e^z = e^w$ one only gets $z - w \\in 2\\pi i \\mathbb{Z}$, not $z = w$."
  },
  "k7_lemma_7_81": {
    title: "Lemma 7.81: Polar coordinates",
    category: "7.6 Trigonometric functions",
    type: "lemma",
    front: "What does the lemma on the <b>existence of polar coordinates</b> in $\\mathbb{C}$ say (Lemma 7.81)?",
    back: "For every $z \\in \\mathbb{C}$ there exist a uniquely determined $r \\ge 0$ and an angle $\\theta \\in [0, 2\\pi)$ with<br>$$z = r e^{i\\theta} = r(\\cos\\theta + i \\sin\\theta).$$<br>Here $r = |z|$, and the angle $\\theta$ is <b>uniquely determined if $z \\neq 0$</b>.",
    meta: "Script: Lemma 7.81, Section 7.6.4",
    explanation: "<b>Proof idea:</b> normalise to $|z| = 1$; for $\\operatorname{Im}(z) \\ge 0$ the intermediate value theorem (cos runs from $1$ to $-1$ on $[0, \\pi]$) gives a $\\theta$ with $\\cos\\theta = \\operatorname{Re}(z)$, and $\\sin\\theta = \\sqrt{1 - \\cos^2\\theta} = \\operatorname{Im}(z)$ fits automatically. <b>Geometric payoff:</b> multiplication in $\\mathbb{C}$ becomes transparent: $r_1 e^{i\\theta_1} \\cdot r_2 e^{i\\theta_2} = r_1 r_2 e^{i(\\theta_1 + \\theta_2)}$ &ndash; multiply the absolute values, add the angles.",
    example: "$z = 1 + i = \\sqrt{2}\\, e^{i\\pi/4}$; $z^2 = 2 e^{i\\pi/2} = 2i$ &ndash; taking powers becomes multiplying the angle (de Moivre). The $n$-th roots of unity are $e^{2\\pi i k/n}$, $k = 0, \\dots, n-1$.",
    counterexample: "<b>1.</b> For $z = 0$ the angle is NOT unique: $0 = 0 \\cdot e^{i\\theta}$ for every $\\theta$ &ndash; hence the exception in the lemma.<br><b>2.</b> Adding angles only holds modulo $2\\pi$: $e^{i \\cdot \\frac{3\\pi}{2}} \\cdot e^{i\\pi}$ has angle $\\tfrac{5\\pi}{2} \\equiv \\tfrac{\\pi}{2} \\pmod{2\\pi}$, not $\\tfrac{5\\pi}{2} \\in [0, 2\\pi)$ &ndash; 'add the angles' always means 'add in $\\mathbb{R}/2\\pi\\mathbb{Z}$'."
  },
  "k7_satz_7_85": {
    title: "Theorem 7.85 & Corollary 7.86: Integrating power series",
    category: "7.7 Integrating power series",
    type: "satz",
    front: "How does one integrate a <b>power series</b> (Theorem 7.85), and which integration formulas follow for exp, sin, cos (Corollary 7.86)?",
    back: "<b>Theorem 7.85 (termwise integration):</b> Let $f(x) = \\sum_{n=0}^\\infty c_n x^n$ with radius of convergence $R$. Then<br>$$F(x) = \\sum_{n=0}^\\infty \\frac{c_n}{n+1}\\, x^{n+1}$$<br>has <b>the same</b> radius of convergence $R$, and for all $a, b \\in (-R, R)$<br>$$\\int_a^b f(x)\\,\\mathrm{d}x = F(b) - F(a).$$<br><b>Corollary 7.86:</b><br>$$\\int_a^b \\exp(x)\\,\\mathrm{d}x = \\exp(b) - \\exp(a), \\quad \\int_a^b \\sin x\\,\\mathrm{d}x = -\\cos b + \\cos a, \\quad \\int_a^b \\cos x\\,\\mathrm{d}x = \\sin b - \\sin a$$",
    meta: "Script: Theorem 7.85 & Corollary 7.86, Section 7.7",
    explanation: "Each summand $c_n x^n$ is integrated separately ($\\int x^n = \\frac{x^{n+1}}{n+1}$, Theorem 4.37) &ndash; permitted thanks to the uniform convergence on $[a,b] \\subseteq (-R, R)$ and Theorem 7.49 (interchanging limit and integral). Dividing by $n+1$ does not change the radius of convergence ($\\sqrt[n]{n+1} \\to 1$). This is the foretaste of the fundamental theorem (Chapter 9): $F$ is an antiderivative of $f$.",
    example: "Termwise integration of the geometric series $\\frac{1}{1+x} = \\sum (-1)^n x^n$ gives the logarithm series $\\sum \\frac{(-1)^n}{n+1}x^{n+1}$ &ndash; together with Abel's limit theorem this yields $1 - \\tfrac12 + \\tfrac13 - \\dots = \\log 2$. The hyperbolic functions $\\sinh, \\cosh$ (7.7.1) are treated in exactly the same way.",
    counterexample: "<b>1.</b> The formula holds only for $a, b$ INSIDE $(-R, R)$: $\\int_0^1$ over the geometric series ($R = 1$) is not directly admissible &ndash; endpoints require Abel's limit theorem as an additional argument.<br><b>2.</b> For general (not uniformly convergent) series of functions termwise integration is false &ndash; the triangular-spike sequence (Example 7.43) shows how limit and integral otherwise drift apart; the power-series structure is essential."
  }
};
