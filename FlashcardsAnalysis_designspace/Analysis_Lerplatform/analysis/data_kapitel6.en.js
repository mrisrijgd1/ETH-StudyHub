/* ==========================================================================
   FLASHCARDS CHAPTER 6 (English): Limits of real sequences and functions
   Analysis I - Prof. Dr. Manfred Einsiedler
   English translation of data_kapitel6.js. Formulas, HTML and ids are identical.
   ========================================================================== */

window.FLASHCARDS_EN_KAPITEL_6 = {
  "k6_prop_6_1": {
    title: "Proposition 6.1: Limits and inequalities",
    category: "6.1 Real sequences",
    front: "How do <b>limits</b> of real sequences interact with <b>inequalities</b> (Proposition 6.1)?",
    back: "Let $(a_n)_n, (b_n)_n$ be real sequences with limits $a = \\lim_{n\\to\\infty} a_n$, $b = \\lim_{n\\to\\infty} b_n$.<br><br>(i) If $a_n \\le b_n$ for all $n \\in \\mathbb{N}$, then also $a \\le b$.<br>(ii) If $a < b$, then there is $N \\in \\mathbb{N}$ such that $a_n < b_n$ for all $n \\ge N$.",
    meta: "Script: Proposition 6.1, Section 6.1",
    explanation: "<b>Proof idea for (ii):</b> with $\\varepsilon = \\frac{b-a}{2}$ the late terms lie in the disjoint balls $(a - \\varepsilon, a + \\varepsilon)$ and $(b - \\varepsilon, b + \\varepsilon)$, where $a + \\varepsilon = b - \\varepsilon$. (i) follows from this by contraposition. So limits &ldquo;preserve&rdquo; non-strict inequalities.",
    example: "$a_n = -\\tfrac1n \\le b_n = \\tfrac1n$ gives in the limit $0 \\le 0$ &ndash; correct.",
    counterexample: "<b>1.</b> Strict inequalities are lost in the limit: $a_n = 0 < b_n = \\tfrac1n$ for all $n$, but $\\lim a_n = \\lim b_n = 0$ &ndash; from $a_n < b_n$ it follows ONLY that $a \\le b$.<br><b>2.</b> (ii) holds only from some $N$ on, not for all $n$: $a_n = \\tfrac{(-1)^n}{n} \\to 0 < 1 = \\lim b_n$ with $b_n = 1$, but $a_1 < b_1$ can still only become stable late &ndash; early terms are arbitrary."
  },
  "k6_lemma_6_2": {
    title: "Lemma 6.2: The sandwich lemma",
    category: "6.1 Real sequences",
    front: "What does the <b>sandwich lemma</b> (Lemma 6.2) say, and what is it useful for (Example 6.4)?",
    back: "Let $(a_n)_n, (b_n)_n, (c_n)_n$ be real sequences with $a_n \\le b_n \\le c_n$ for all $n \\in \\mathbb{N}$. If $(a_n)_n$ and $(c_n)_n$ are convergent with the <b>same</b> limit $A = \\lim a_n = \\lim c_n$, then $(b_n)_n$ is also convergent with<br>$$\\lim_{n\\to\\infty} b_n = A.$$",
    meta: "Script: Lemma 6.2 & Example 6.4, Important Exercise 6.3",
    explanation: "The squeezed sequence has &ldquo;no other choice&rdquo;: from the larger of the two indices on, $a_n$ and $c_n$ lie in $(A - \\varepsilon, A + \\varepsilon)$, hence so does $b_n$ between them. The lemma turns convergence proofs into estimation tasks &ndash; one never has to attack the limit of the middle sequence directly. There are also improper versions (Exercise 6.21): $a_n \\le b_n$ and $a_n \\to \\infty$ force $b_n \\to \\infty$.",
    example: "Example 6.4: $-\\tfrac1n \\le \\tfrac{(-1)^n}{n} \\le \\tfrac1n$ shows $\\lim \\tfrac{(-1)^n}{n} = 0$. Similarly one proves $\\lim_{n\\to\\infty} \\sqrt[n]{n} = 1$ with clever bounds.",
    counterexample: "<b>1.</b> Different limits of the outer sequences do not suffice: $-1 \\le (-1)^n \\le 1$ traps $(-1)^n$ between convergent sequences &ndash; yet the middle diverges, since $\\lim(-1) = -1 \\neq 1$.<br><b>2.</b> The inequality really has to hold (eventually): from $b_n \\le a_n + c_n$ with $a_n, c_n \\to 0$ nothing follows about $(b_n)_n$ &ndash; the sandwich needs bounds from both sides."
  },
  "k6_satz_6_5": {
    title: "Theorem 6.5: Convergence of monotone sequences",
    category: "6.1 Real sequences",
    front: "When does a <b>monotone</b> real sequence converge, and what is its limit then (Theorem 6.5)?",
    back: "A monotone real sequence $(a_n)_n$ converges <b>if and only if it is bounded</b>. In this case:<br><br>&bull; $(a_n)_n$ monotonically increasing: $\\displaystyle\\lim_{n\\to\\infty} a_n = \\sup\\{a_n \\mid n \\in \\mathbb{N}\\}$<br>&bull; $(a_n)_n$ monotonically decreasing: $\\displaystyle\\lim_{n\\to\\infty} a_n = \\inf\\{a_n \\mid n \\in \\mathbb{N}\\}$",
    meta: "Script: Theorem 6.5, Section 6.1.1",
    explanation: "<b>Proof:</b> for the supremum $a$ there is, by Theorem 2.59, for every $\\varepsilon > 0$ some $a_N > a - \\varepsilon$; monotonicity gives $a - \\varepsilon < a_N \\le a_n \\le a$ for $n \\ge N$. Here the completeness axiom meets convergence for the first time: the sequence &ldquo;must&rdquo; creep up to the supremum. Great practical advantage: one proves convergence <i>without knowing the limit</i>.",
    example: "Exercise 6.6: the recursive sequence $a_1 = 1$, $a_{n+1} = \\tfrac23\\left(a_n + \\tfrac{1}{a_n}\\right)$ converges (monotone and bounded); the limit $a$ satisfies $a = \\tfrac23(a + \\tfrac1a)$, so $a = \\sqrt{2}$. The exponential sequence $(1 + \\tfrac{x}{n})^n$ is also treated this way (Section 6.3).",
    counterexample: "<b>1.</b> Without monotonicity boundedness is not sufficient: $(-1)^n$ is bounded and divergent.<br><b>2.</b> Without boundedness a monotone sequence diverges (improperly): $a_n = n$ grows monotonically to $\\infty$ &ndash; &ldquo;monotone&rdquo; alone does not suffice."
  },
  "k6_def_6_8_6_9": {
    title: "Definitions 6.8 & 6.9: Limes superior and limes inferior",
    category: "6.1 Real sequences",
    front: "How are the <b>limes superior</b> and <b>limes inferior</b> of a bounded real sequence defined?",
    back: "For a bounded real sequence $(a_n)_n$:<br>$$\\limsup_{n\\to\\infty} a_n = \\lim_{n\\to\\infty}\\Big(\\sup_{k \\ge n} a_k\\Big) = \\inf_{n \\in \\mathbb{N}}\\Big(\\sup_{k\\ge n} a_k\\Big)$$<br>$$\\liminf_{n\\to\\infty} a_n = \\lim_{n\\to\\infty}\\Big(\\inf_{k \\ge n} a_k\\Big) = \\sup_{n \\in \\mathbb{N}}\\Big(\\inf_{k\\ge n} a_k\\Big)$$<br>The sequences $S_n = \\sup_{k\\ge n} a_k$ (monotonically decreasing) and $I_n = \\inf_{k \\ge n} a_k$ (monotonically increasing) converge by Theorem 6.5 &ndash; limsup and liminf <b>exist for every bounded sequence</b>.",
    meta: "Script: Definitions 6.8 & 6.9, Example 6.10",
    explanation: "Intuition: $\\limsup$ = &ldquo;the largest value the sequence keeps reaching again and again&rdquo; (the limit of the running suprema); $\\liminf$ is analogous from below. For unbounded sequences one extends with $\\pm\\infty$ (Section 6.1.4). Always $\\liminf a_n \\le \\limsup a_n$.",
    example: "Example 6.10: $a_n = (-1)^n + \\tfrac1n$ has $S_n = 1 + \\tfrac1n$ resp. $1 + \\tfrac{1}{n+1}$ and $I_n = -1$, so $\\limsup a_n = 1$ and $\\liminf a_n = -1$. For $a_n = (-1)^n$: $\\limsup = 1$, $\\liminf = -1$.",
    counterexample: "<b>1.</b> $\\limsup a_n$ is NOT $\\sup_n a_n$: for $a_n = (-1)^n + \\tfrac1n$ we have $\\sup_n a_n = \\tfrac32$ (at $n=2$), but $\\limsup = 1$ &ndash; early outliers do not count.<br><b>2.</b> $\\limsup(a_n + b_n) \\neq \\limsup a_n + \\limsup b_n$ in general: $a_n = (-1)^n$, $b_n = (-1)^{n+1}$ give on the left $\\limsup 0 = 0$, on the right $1 + 1 = 2$ &ndash; only &ldquo;$\\le$&rdquo; holds."
  },
  "k6_satz_6_11": {
    title: "Theorem 6.11 & Corollary 6.14: Properties of the limes superior",
    category: "6.1 Real sequences",
    front: "Which two properties <b>characterise</b> the limes superior (Theorem 6.11), and how does one characterise convergence with it (Corollary 6.14)?",
    back: "<b>Theorem 6.11:</b> for a bounded real sequence $(a_n)_n$ and $S = \\limsup_{n\\to\\infty} a_n$:<br>&bull; For every $\\varepsilon > 0$ there are only <b>finitely many</b> $n$ with $a_n > S + \\varepsilon$.<br>&bull; For every $\\varepsilon > 0$ there are <b>infinitely many</b> $n$ with $a_n > S - \\varepsilon$.<br>(These two properties determine $S$ uniquely; analogously for the limes inferior.)<br><br><b>Corollary 6.14:</b> $(a_n)_n$ is convergent if and only if<br>$$\\liminf_{n\\to\\infty} a_n = \\limsup_{n\\to\\infty} a_n$$<br>(and then this common value is the limit).",
    meta: "Script: Theorem 6.11 & Corollary 6.14",
    explanation: "So the sequence never stays far <i>above</i> the limsup for long, but keeps returning close to it &ndash; it is the largest cluster point. The corollary is the central tool in the proof of the Cauchy criterion (Theorem 6.26): convergence = &ldquo;the gap between liminf and limsup closes&rdquo;.",
    example: "$a_n = \\tfrac1n$: $\\liminf = \\limsup = 0$ $\\Rightarrow$ convergent to $0$. For $a_n = (-1)^n$: $-1 \\neq 1$ $\\Rightarrow$ divergent &ndash; without any $\\varepsilon$ argument.",
    counterexample: "<b>1.</b> &ldquo;Infinitely many $a_n > S - \\varepsilon$&rdquo; does not mean &ldquo;almost all&rdquo;: for $(-1)^n$ infinitely many terms lie near $1 = \\limsup$, but also infinitely many near $-1$.<br><b>2.</b> Only one of the two properties does not suffice for a characterisation: $S' = \\sup_n a_n$ also satisfies the first property (finitely many &ndash; namely none &ndash; terms above $S' + \\varepsilon$), but is in general too large."
  },
  "k6_satz_6_15": {
    title: "Theorem 6.15: Convergent subsequences (Bolzano-Weierstrass)",
    category: "6.1 Real sequences",
    front: "What does <b>Theorem 6.15</b> say about the limits of convergent subsequences of a bounded sequence?",
    back: "For every convergent subsequence $(a_{n_k})_k$ of a <b>bounded</b> real sequence $(a_n)_n$<br>$$\\lim_{k\\to\\infty} a_{n_k} \\in \\Big[\\liminf_{n\\to\\infty} a_n,\\ \\limsup_{n\\to\\infty} a_n\\Big].$$<br>Moreover, there <b>exist</b> convergent subsequences with limit $\\limsup_{n\\to\\infty} a_n$ and with limit $\\liminf_{n\\to\\infty} a_n$.<br><br><b>In particular (Bolzano-Weierstrass):</b> every bounded real sequence has a convergent subsequence. The cluster points of the sequence lie exactly between liminf and limsup, and both are themselves cluster points.",
    meta: "Script: Theorem 6.15, Section 6.1.3",
    explanation: "So limsup/liminf are the largest and smallest cluster points. <b>Sequential compactness:</b> it follows that $[a,b]$ is <i>sequentially compact</i> &ndash; every sequence in $[a,b]$ has a convergent subsequence with limit in $[a,b]$ (Prop. 6.1 keeps the limit inside the interval). This notion becomes central in the 2nd semester.",
    example: "$a_n = (-1)^n$: the subsequence $(a_{2k})_k$ converges to $\\limsup = 1$, the subsequence $(a_{2k+1})_k$ to $\\liminf = -1$.",
    counterexample: "<b>1.</b> Without boundedness there can be no cluster points at all: $(n)_n$ has no convergent subsequence.<br><b>2.</b> Cluster points of the <i>sequence</i> $\\neq$ cluster points of the <i>set of values</i> (Def. 2.73): $(-1)^n$ has the sequence cluster points $\\pm 1$, but the set $\\{-1, 1\\}$ has no set cluster points."
  },
  "k6_def_6_19": {
    title: "Definition 6.19: Improper limits",
    category: "6.1 Real sequences",
    front: "When does a real sequence <b>diverge</b> <b>to $\\infty$</b> resp. $-\\infty$ (Definition 6.19)?",
    back: "$(a_n)_n$ <b>diverges to $\\infty$</b> ($\\lim_{n\\to\\infty} a_n = \\infty$) if for every $\\varepsilon > 0$ there is $N \\in \\mathbb{N}$ with<br>$$a_n \\ge \\varepsilon^{-1} \\quad \\text{for all } n \\ge N.$$<br>Analogously: $\\lim_{n\\to\\infty} a_n = -\\infty$ if $a_n \\le -\\varepsilon^{-1}$ for all $n \\ge N$. One speaks of <b>improper convergence</b>.<br><br>This also extends limsup/liminf to unbounded sequences: e.g. $\\limsup a_n = \\infty$ if $(a_n)_n$ is not bounded from above.",
    meta: "Script: Definition 6.19 & Exercises 6.20/6.21, Section 6.1.4",
    explanation: "&ldquo;$\\ge \\varepsilon^{-1}$&rdquo; instead of &ldquo;$\\ge M$&rdquo; is just a matter of taste: $\\varepsilon$ small means $\\varepsilon^{-1}$ large. Divergence to $\\infty$ is an <i>ordered</i> form of divergence &ndash; the sequence escapes every bound from above and stays there. Exercise 6.20: every unbounded sequence has at least one subsequence that diverges to $\\infty$ or $-\\infty$.",
    example: "$a_n = n^2 \\to \\infty$; $a_n = \\log\\tfrac1n \\to -\\infty$. Sandwich variant (Exercise 6.21): $a_n \\le b_n$ and $a_n \\to \\infty$ $\\Rightarrow$ $b_n \\to \\infty$.",
    counterexample: "<b>1.</b> Unbounded $\\neq$ divergent to $\\infty$: the sequence $1, 2, 1, 4, 1, 6, \\dots$ ($a_n = 1$ for odd, $a_n = n$ for even $n$) is unbounded and divergent, but does NOT diverge to $\\infty$ (it keeps returning to $1$).<br><b>2.</b> The arithmetic rules carry over only partially: $\\lim a_n = \\infty$ and $\\lim b_n = -\\infty$ leave $\\lim (a_n + b_n)$ completely open ($n + (-n) = 0$, $2n + (-n) = n \\to \\infty$) &ndash; &ldquo;$\\infty - \\infty$&rdquo; is undefined."
  },

  "k6_def_6_22": {
    title: "Definition 6.22: Cauchy sequences",
    category: "6.2 Cauchy sequences",
    front: "When is a sequence in a metric space $(X, \\mathrm{d})$ a <b>Cauchy sequence</b>, and how does the notion relate to convergence?",
    back: "$(a_n)_n$ is a <b>Cauchy sequence</b> if for every $\\varepsilon > 0$ there is $N \\in \\mathbb{N}$ such that<br>$$\\mathrm{d}(a_m, a_n) < \\varepsilon \\quad \\text{for all } m, n \\ge N.$$<br><b>Important Exercise 6.23:</b> every convergent sequence is a Cauchy sequence.<br><b>Important Exercise 6.24:</b> if a Cauchy sequence has a convergent subsequence, then it converges itself (to the same limit).<br><b>Exercise 6.25:</b> in $\\mathbb{C}$: Cauchy $\\iff$ real and imaginary parts are Cauchy.",
    meta: "Script: Definition 6.22 & Exercises 6.23-6.25",
    explanation: "Decisive: the condition only speaks about the terms <i>among themselves</i> &ndash; the limit does not appear! So one can test a suspicion of convergence without knowing a candidate. Note: $m, n$ run <i>independently</i> &ndash; it is not enough to compare only neighbours.",
    example: "$a_n = \\tfrac1n$: for $m, n \\ge N$ we have $|a_m - a_n| \\le \\tfrac1N < \\varepsilon$ for $N > \\tfrac1\\varepsilon$ &ndash; Cauchy, as a convergent sequence should be.",
    counterexample: "<b>1.</b> In incomplete spaces Cauchy sequences do not always converge: the decimal approximations $1; 1{,}4; 1{,}41; \\dots$ of $\\sqrt{2}$ form a Cauchy sequence in $\\mathbb{Q}$ without a limit in $\\mathbb{Q}$.<br><b>2.</b> $(a_n)_n$ bounded $\\not\\Rightarrow$ Cauchy: $(-1)^n$ is bounded, but $|a_n - a_{n+1}| = 2$ for all $n$."
  },
  "k6_satz_6_26": {
    title: "Theorem 6.26: The Cauchy criterion",
    category: "6.2 Cauchy sequences",
    front: "What does the <b>Cauchy criterion for real sequences</b> (Theorem 6.26) say, and why does the condition $|a_{n+1} - a_n| \\to 0$ NOT suffice (Example 6.27)?",
    back: "<b>Theorem 6.26:</b> a real sequence is <b>convergent if and only if it is a Cauchy sequence</b>.<br><br><b>Proof idea ($\\Leftarrow$):</b> a Cauchy sequence is bounded; for $m = N$ we have $a_N - \\varepsilon < a_n < a_N + \\varepsilon$ from $N$ on, so $\\limsup - \\liminf \\le 2\\varepsilon$ for every $\\varepsilon$; Corollary 6.14 gives convergence.<br><br><b>Example 6.27 (wrong criterion):</b> the condition $\\forall \\varepsilon > 0\\,\\exists N\\,\\forall n \\ge N: |a_n - a_{n+1}| < \\varepsilon$ is <i>not</i> equivalent to convergence!",
    meta: "Script: Theorem 6.26, Example 6.27, Exercise 6.28",
    explanation: "The Cauchy criterion is &ldquo;the&rdquo; completeness: Exercise 6.28 shows that it is equivalent to the completeness axiom (together with the Archimedean principle) &ndash; one says $\\mathbb{R}$ is a <i>complete</i> metric space. Advantages: unlike Theorem 6.5 it applies to arbitrary (not only monotone) sequences, and needs no knowledge of the limit.",
    example: "Applications to series follow in Chapter 7 (Cauchy criterion for series, Theorem 7.26): convergence of $\\sum \\tfrac{1}{k^2}$ can be checked via distances of partial sums.",
    counterexample: "<b>1.</b> Example 6.27: list, for each $\\ell$, the fractions between $\\ell$ and $\\ell+1$ with denominator $\\ell$ ($1; 2; 2; 2\\tfrac12; 3; 3\\tfrac13; 3\\tfrac23; 4; \\dots$). Then $|a_{n+1} - a_n| \\to 0$, but the sequence is unbounded and diverges &ndash; keeping neighbouring distances small is not enough; $m$ and $n$ must vary independently!<br><b>2.</b> In $\\mathbb{Q}$ the criterion is false (Cauchy sequences tending to $\\sqrt2$) &ndash; it is a property of $\\mathbb{R}$, not a logical trick."
  },

  "k6_prop_6_29": {
    title: "Proposition 6.29: The real exponential function",
    category: "6.3 The exponential function",
    front: "How is the <b>exponential function</b> defined in Chapter 6, and which properties does Proposition 6.29 summarise?",
    back: "For every $x \\in \\mathbb{R}$ the limit exists<br>$$\\exp(x) = \\lim_{n\\to\\infty}\\left(1 + \\frac{x}{n}\\right)^n > 0,$$<br>and this defines the <b>strictly monotonically increasing, bijective, continuous</b> map $\\exp: \\mathbb{R} \\to \\mathbb{R}_{>0}$ with the <b>addition formula</b><br>$$\\exp(x + y) = \\exp(x)\\exp(y) \\qquad \\forall x, y \\in \\mathbb{R}.$$<br>The <b>Euler number</b> is $e = \\exp(1) = \\lim_{n\\to\\infty}\\left(1 + \\tfrac1n\\right)^n \\in [2, 3]$.",
    meta: "Script: Proposition 6.29, Sections 6.3.1-6.3.7",
    explanation: "<b>Interest interpretation (6.3.1):</b> $(1 + \\tfrac{x}{n})^n$ is the capital after one year at interest rate $x$ with $n$-fold compounding within the year &ndash; more compounding dates bring more (monotone in $n$), but not without bound (boundedness): Theorem 6.5 provides existence of the limit. The important bound $1 + x \\le \\exp(x)$ holds for all $x$.",
    example: "$\\exp(0) = 1$; Exercise 6.32: $1 + x + \\tfrac{x^2}{2} \\le \\exp(x)$ for $x \\ge 0$ &ndash; exp grows faster than every polynomial (cf. Exercise 6.45: $\\lim_{x\\to\\infty} \\tfrac{e^x}{x^a} = \\infty$).",
    counterexample: "<b>1.</b> $\\exp(x+y) = \\exp(x)\\exp(y)$, NOT $\\exp(x)+\\exp(y)$: $\\exp$ turns addition into multiplication &ndash; exactly what makes it the exponential function.<br><b>2.</b> For fixed $n$, $\\left(1 + \\tfrac{x}{n}\\right)^n$ is a polynomial in $x$ &ndash; only the limit yields the exp; for instance $(1 + \\tfrac{x}{n})^n$ is negative or not monotone for $x < -n$, but the limit is always positive."
  },
  "k6_exp_beweis": {
    title: "6.3.3-6.3.7: The proof steps for Proposition 6.29",
    category: "6.3 The exponential function",
    front: "Sketch the <b>five proof steps</b> with which the script shows the properties of $\\exp$ (inversion formula, addition formula, continuity, monotonicity, surjectivity).",
    back: "1. <b>Inversion formula (6.3.3):</b> $\\exp(-x) = \\exp(x)^{-1}$, because $\\big(1 - \\tfrac{x^2}{n^2}\\big)^n \\to 1$ via Bernoulli + sandwich.<br>2. <b>Addition formula (6.3.4):</b> an analogous product trick for $\\big(1 + \\tfrac{x}{n}\\big)\\big(1 + \\tfrac{y}{n}\\big)$.<br>3. <b>Continuity (6.3.5):</b> first at $0$ via $1 + x \\le \\exp(x) \\le \\tfrac{1}{1-x}$; then everywhere via $\\exp(x) = \\exp(x - x_0)\\exp(x_0)$ as a composition of continuous maps (Prop. 3.52).<br>4. <b>Strict monotonicity (6.3.6):</b> $x < y \\Rightarrow \\exp(y) = \\exp(x)\\exp(y-x) > \\exp(x)$, since $\\exp(y-x) > 1$.<br>5. <b>Surjectivity (6.3.7):</b> for $y > 0$ we have $\\exp(-\\tfrac1y) < y < \\exp(y)$; the <b>intermediate value theorem</b> (Theorem 3.58) gives an $x$ with $\\exp(x) = y$.",
    meta: "Script: Sections 6.3.3-6.3.7",
    explanation: "A model example of how the theory interacts: Theorem 6.5 (existence), Bernoulli inequality and sandwich (formulas), composition rules (continuity), IVT (surjectivity). The addition formula is the &ldquo;master key&rdquo; &ndash; from continuity at $0$ it follows everywhere, from $\\exp > 0$ at one point everywhere.",
    example: "The bound $1 + x \\le \\exp(x)$ (for all $x \\in \\mathbb{R}$) serves three steps at once: continuity at 0, monotonicity and surjectivity.",
    counterexample: "<b>1.</b> Continuity &ldquo;only at 0&rdquo; would be worthless for general functions &ndash; only the addition formula transports it to every $x_0$; without a functional equation there is no such inheritance.<br><b>2.</b> Surjectivity onto $\\mathbb{R}$ (instead of $\\mathbb{R}_{>0}$) is false: $\\exp(x) > 0$ always &ndash; the range is part of the statement."
  },
  "k6_kor_6_33": {
    title: "Corollary 6.33: Logarithm and general powers",
    category: "6.3 The exponential function",
    front: "Which properties does the <b>natural logarithm</b> have (Corollary 6.33), and how does one use it to define <b>general powers</b> $x^a$?",
    back: "<b>Corollary 6.33:</b> the inverse function $\\log: \\mathbb{R}_{>0} \\to \\mathbb{R}$ of $\\exp$ is <b>strictly monotonically increasing, continuous and bijective</b>, and<br>$$\\log(ab) = \\log a + \\log b \\qquad \\forall a, b \\in \\mathbb{R}_{>0}.$$<br><b>General powers:</b> for $x > 0$ and $a \\in \\mathbb{R}$ one defines<br>$$x^a := \\exp(a \\log x).$$<br>In particular $e^x = \\exp(x)$, and (Exercise 6.34):<br>$$\\log(x^a) = a\\log x, \\qquad x^a x^b = x^{a+b}, \\qquad (x^a)^b = x^{ab}.$$",
    meta: "Script: Corollary 6.33 & Exercise 6.34, Section 6.3.8",
    explanation: "The existence and continuity of $\\log$ is the inverse function theorem (Theorem 3.62) in action. The product formula is the &ldquo;mirrored&rdquo; addition formula: substitute $x = \\log a, y = \\log b$. For rational $a$, $x^a$ agrees with the root definitions from Example 3.63 &ndash; the new definition is a genuine extension. Useful: $\\log$ grows more slowly than every power, $\\log x = o(x^\\alpha)$ for $\\alpha > 0$ (Exercise 6.35).",
    example: "$2^{\\sqrt{2}} = \\exp(\\sqrt{2}\\,\\log 2)$ &ndash; only this definition gives irrational exponents a meaning. $\\log(e^3) = 3$, $\\log 1 = 0$.",
    counterexample: "<b>1.</b> $\\log(a + b) \\neq \\log a + \\log b$: the logarithm turns <i>products</i> into sums, not sums into sums ($\\log 2 + \\log 2 = \\log 4$).<br><b>2.</b> $x^a$ via $\\exp(a \\log x)$ requires $x > 0$: $(-2)^{1/2}$ cannot be defined this way ($\\log(-2)$ does not exist in $\\mathbb{R}$) &ndash; negative bases remain reserved for rational exponents with odd denominator."
  },

  "k6_def_funktionsgrenzwert": {
    title: "6.4.1: The limit of a function",
    category: "6.4 Limits of functions",
    front: "How is the <b>limit $\\lim_{x \\to x_0} f(x)$</b> of a function defined, and which rules hold (Exercise 6.38)?",
    back: "Let $D \\subseteq \\mathbb{R}$, $x_0 \\in \\mathbb{R}$ a <b>cluster point</b> of $D$ and $f: D \\to \\mathbb{R}$. Then $A = \\lim_{x\\to x_0} f(x)$ if<br>$$\\forall \\varepsilon > 0\\ \\exists \\delta > 0\\ \\forall x \\in D \\cap (x_0 - \\delta, x_0 + \\delta) \\setminus \\{x_0\\}: |f(x) - A| < \\varepsilon.$$<br>The set $\\dot{U}_\\delta(x_0) = (x_0-\\delta, x_0+\\delta) \\setminus \\{x_0\\}$ is called the <b>punctured $\\delta$-neighbourhood</b>.<br><br>The limit (if it exists) is <b>unique</b>, <b>linear</b>, <b>multiplicative</b>, <b>monotone</b> and satisfies a <b>sandwich lemma</b> (Exercise 6.38).",
    meta: "Script: Section 6.4.1 & Exercise 6.38",
    explanation: "Two peculiarities: (1) $x_0$ must be a cluster point, otherwise the limit would not be unique (the condition would be vacuously satisfied). (2) The point $x_0$ itself is <i>excluded</i> &ndash; the value $f(x_0)$ (if defined) plays no role! This exactly allows limits at gaps of definition, the most important case for the derivative in Chapter 8 ($\\lim_{x\\to x_0}\\frac{f(x)-f(x_0)}{x-x_0}$).",
    example: "$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x\\to 2}(x+2) = 4$ (Exercise 6.45 treats $\\lim_{x\\to2}\\frac{x^3 - x^2 - x - 2}{x-2}$ analogously), although the function is not even defined at $x_0 = 2$ &ndash; exactly what the punctured neighbourhood is made for.",
    counterexample: "<b>1.</b> $\\lim_{x\\to x_0} f(x)$ can exist and be $\\neq f(x_0)$: $f(x) = 0$ for $x \\neq 0$, $f(0) = 1$ has $\\lim_{x\\to 0} f(x) = 0 \\neq 1 = f(0)$ (a removable discontinuity).<br><b>2.</b> At isolated points of $D$ there is no limit notion: for $D = \\{0\\} \\cup [1,2]$ and $x_0 = 0$ the punctured condition is empty &ndash; every $A$ would satisfy it; hence the cluster point requirement."
  },
  "k6_lemma_6_39_40": {
    title: "Lemmas 6.39-6.41: Limits, continuity and sequences",
    category: "6.4 Limits of functions",
    front: "How are function limits related to <b>continuity</b> (Lemma 6.39), <b>sequences</b> (Lemma 6.40) and <b>compositions</b> (Proposition 6.41)?",
    back: "&bull; <b>Lemma 6.39:</b> if $x_0 \\in D$ is a cluster point of $D$, then $f$ is continuous at $x_0$ if and only if $\\lim_{x\\to x_0} f(x) = f(x_0)$.<br>&bull; <b>Lemma 6.40:</b> $A = \\lim_{x \\to x_0} f(x)$ holds if and only if for <b>every</b> sequence $(a_n)_n$ in $D \\setminus \\{x_0\\}$ with $a_n \\to x_0$ also $f(a_n) \\to A$.<br>&bull; <b>Proposition 6.41:</b> if $y_0 = \\lim_{x\\to x_0} f(x)$ and $g$ is continuous at $y_0$, then $$\\lim_{x\\to x_0} g(f(x)) = g(y_0).$$",
    meta: "Script: Lemma 6.39, Lemma 6.40, Proposition 6.41",
    explanation: "<b>Removable discontinuities:</b> if $\\lim_{x\\to x_0} f(x) \\neq f(x_0)$ exists, one can make $f$ continuous by changing the single value ($f_{\\text{new}}(x_0) = \\lim_{x\\to x_0} f(x)$); for $x_0 \\notin D$ the limit yields a continuous extension. Lemma 6.40 translates function limits completely into sequence language &ndash; the proof of the converse again constructs a &ldquo;trap sequence&rdquo; with $\\delta = \\tfrac1n$.",
    example: "Example 6.44 uses Prop. 6.41: $\\lim_{x\\to 0} x^x = \\lim_{x \\to 0} \\exp(x \\log x) = \\exp(0) = 1$, since $x \\log x \\to 0$ (via $y\\exp(-y) \\to 0$ and sandwich) and $\\exp$ is continuous.",
    counterexample: "<b>1.</b> ONE good sequence does not suffice in Lemma 6.40: $f = \\mathbb{1}_{\\mathbb{Q}}$ satisfies $f(a_n) \\to 1$ for every rational sequence $a_n \\to 0$, but has no limit at $0$ (irrational sequences give $0$).<br><b>2.</b> In Prop. 6.41 the continuity of $g$ at $y_0$ is essential: with $f(x) = x$, $y_0 = 0$ and $g = \\operatorname{sgn}$ the limit $\\lim_{x\\to 0} g(f(x))$ does not exist &ndash; the jump of $g$ destroys the interchange."
  },
  "k6_einseitige": {
    title: "6.4.2-6.4.4: One-sided limits, jump points, x → ∞",
    category: "6.4 Limits of functions",
    front: "Define <b>left and right limits</b>, <b>jump points</b> and the limit <b>for $x \\to \\infty$</b>.",
    back: "&bull; <b>Right-hand limit</b> ($x_0$ a right-hand cluster point: $D \\cap (x_0, x_0 + \\delta) \\neq \\emptyset$ for all $\\delta$):<br>$$A = \\lim_{x \\searrow x_0} f(x) \\iff \\forall \\varepsilon > 0\\ \\exists \\delta > 0\\ \\forall x \\in D \\cap (x_0, x_0+\\delta): |f(x) - A| < \\varepsilon$$<br>analogously $\\lim_{x \\nearrow x_0}$ (left-hand) as well as improper versions with $f(x) > \\varepsilon^{-1}$.<br>&bull; The two-sided limit exists if and only if both one-sided limits exist and agree.<br>&bull; <b>Jump point:</b> both one-sided limits exist but are <b>different</b>. $f$ is called <b>right-continuous</b> at $x_0$ if $\\lim_{x\\searrow x_0} f(x) = f(x_0)$.<br>&bull; <b>$x \\to \\infty$:</b> $\\lim_{x\\to\\infty} f(x) = A$ if $\\forall \\varepsilon > 0\\ \\exists \\delta > 0\\ \\forall x \\in (\\tfrac1\\delta, \\infty) \\cap D: |f(x) - A| < \\varepsilon$.",
    meta: "Script: Sections 6.4.2-6.4.4",
    explanation: "All these &ldquo;movements&rdquo; ($x \\to x_0$, $x \\searrow x_0$, $x \\to \\pm\\infty$, proper/improper) follow the same pattern: in a suitable (punctured, one-sided or infinity) neighbourhood the values lie close to the target. The script counts &ldquo;40 definitions&rdquo; in Applet 6.54 with a wink &ndash; whoever understands the pattern need not memorise any of them.",
    example: "$\\lim_{x\\searrow 0} \\tfrac1x = +\\infty$, $\\lim_{x\\nearrow 0}\\tfrac1x = -\\infty$, $\\lim_{x \\searrow 0}\\log x = -\\infty$, $\\lim_{x\\to 0}\\sqrt{x} = \\lim_{x \\searrow 0}\\sqrt{x} = 0$. The signum function has a jump point at $0$ (one-sided limits $-1$ and $1$).",
    counterexample: "<b>1.</b> $\\tfrac1x$ has NO jump point at $0$ in the sense of the definition: the one-sided limits are improper ($\\pm\\infty$), not real &ndash; a &ldquo;pole&rdquo; is something different from a &ldquo;jump&rdquo;.<br><b>2.</b> Existence of both one-sided limits does not guarantee continuity: for the floor function $\\lfloor \\cdot \\rfloor$ both one-sided limits exist at every integer ($n-1$ and $n$), but they differ &ndash; a jump point."
  },

  "k6_def_6_46": {
    title: "Definition 6.46 & Theorem 6.47: Riemann sums",
    category: "6.5 Riemann sums",
    front: "What are <b>Riemann sums</b>, and in which sense do they approximate the Riemann integral (Theorem 6.47)?",
    back: "<b>Definition 6.46:</b> for a partition $Z = \\{a = x_0 < \\dots < x_n = b\\}$ with <b>mesh size</b> $|Z| = \\max_k (x_k - x_{k-1})$ and an admissible choice of <b>intermediate points</b> $z_k \\in [x_{k-1}, x_k]$, the Riemann sum is<br>$$R(f, Z, z) = \\sum_{k=1}^n f(z_k)(x_k - x_{k-1}).$$<br><b>Theorem 6.47:</b> if $f$ is Riemann integrable on $[a,b]$, then<br>$$\\forall \\varepsilon > 0\\ \\exists \\delta > 0\\ \\forall Z\\ \\forall z: |Z| < \\delta \\implies \\left|R(f,Z,z) - \\int_a^b f(x)\\,\\mathrm{d}x\\right| < \\varepsilon.$$<br>So the integral is the &ldquo;limit of the Riemann sums as the mesh size $\\to 0$&rdquo; &ndash; and this convergence even <i>characterises</i> Riemann integrability (Exercise 6.49).",
    meta: "Script: Definition 6.46, Theorem 6.47, Exercises 6.49/6.50",
    explanation: "This is Riemann's historical approach (1854) to the integral, which here turns out retrospectively to be equivalent to the Darboux approach of Chapter 4. The point: the intermediate points $z_k$ may be chosen <i>arbitrarily</i> &ndash; for small mesh size the choice no longer matters. Practically important for numerics and for vector-valued integrals (6.5.1): componentwise, with the triangle inequality $\\big\\|\\int f\\big\\| \\le \\int \\|f\\|$ (Exercise 6.51).",
    example: "With an equidistant partition and $z_k = \\tfrac{k}{n}$: $\\int_0^1 x^2\\,\\mathrm{d}x = \\lim_{n\\to\\infty} \\sum_{k=1}^n \\tfrac{k^2}{n^2}\\cdot\\tfrac1n = \\lim_n \\tfrac{(n+1)(2n+1)}{6n^2} = \\tfrac13$ &ndash; limits of sum sequences become integrals.",
    counterexample: "<b>1.</b> For non-integrable functions the Riemann sum depends on the choice of intermediate points: for the Dirichlet function rational $z_k$ always give $1$, irrational ones always $0$ &ndash; no limit as $|Z| \\to 0$.<br><b>2.</b> Only &ldquo;small mesh size&rdquo; counts, not &ldquo;many division points&rdquo;: a partition with 1000 points that keeps a coarse piece of length $\\tfrac{b-a}{2}$ approximates badly &ndash; $|Z|$ measures the largest piece."
  },

  "k6_landau": {
    title: "6.6: Landau notation (big O and little o)",
    category: "6.6 Landau notation",
    front: "What do $f(x) = O(g(x))$ and $f(x) = o(g(x))$ mean for $x \\to x_0$?",
    back: "Let $x_0$ be a cluster point of $D$ and $f, g: D \\to \\mathbb{R}$.<br><br>&bull; <b>Big O:</b> $f(x) = O(g(x))$ for $x \\to x_0$ if there are $\\delta > 0$ and $M > 0$ with<br>$$|f(x)| \\le M|g(x)| \\quad \\forall x \\in D \\cap \\dot{U}_\\delta(x_0)$$<br>(&ldquo;$f$ is near $x_0$ at most a constant times $g$&rdquo;).<br>&bull; <b>Little o:</b> $f(x) = o(g(x))$ for $x \\to x_0$ if for <b>every</b> $\\varepsilon > 0$ there is $\\delta > 0$ with $|f(x)| \\le \\varepsilon|g(x)|$ on $D \\cap \\dot{U}_\\delta(x_0)$. For $g \\neq 0$ equivalently:<br>$$\\lim_{x \\to x_0} \\frac{f(x)}{g(x)} = 0$$<br>(&ldquo;$f$ is negligible compared with $g$&rdquo;). Both notions hold analogously for $x \\to \\infty$, $x \\searrow x_0$ and sequences.",
    meta: "Script: Section 6.6 & Exercises 6.52/6.53",
    explanation: "The benefit: the &ldquo;implicit constant&rdquo; $M$ gets no name &ndash; one only computes with the essentials. Little o is strictly stronger than big O. Important asymptotics (Exercise 6.52, with 6.35): $\\log x = o(x^b)$ for $x\\to\\infty$, $x^a = o(e^x)$ for $x \\to \\infty$, $x^p = o(x)$ for $x \\to 0$ ($p > 1$). In Chapter 8 the derivative is read via $f(x) = f(x_0) + f'(x_0)(x - x_0) + o(x - x_0)$.",
    example: "$x^2 = O(x)$ for $x \\to 0$ (even $o(x)$), but $x^2 \\neq O(x)$ for $x \\to \\infty$ (there conversely $x = o(x^2)$) &ndash; the direction is essential to the statement! $\\frac{x+1}{x} = O(1)$ for $x \\to \\infty$.",
    counterexample: "<b>1.</b> $O$ is not equality: from $x = O(x)$ and $2x = O(x)$ it does not follow that $x = 2x$ &ndash; the &ldquo;=&rdquo; sign is a (somewhat unusual) membership notation.<br><b>2.</b> If both limits lie in $\\mathbb{R}\\setminus\\{0\\}$, then indeed $f = O(g)$, but never $f = o(g)$: $\\tfrac{f(x)}{g(x)}$ then tends to a value $\\neq 0$ &ndash; little o lives on limits that are $0$ or $\\infty$."
  }
};
