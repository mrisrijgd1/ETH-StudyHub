/* ==========================================================================
   FLASHCARDS CHAPTER 9 (English): The derivative and the Riemann integral
   Analysis I - Prof. Dr. Manfred Einsiedler
   English translation of data_kapitel9.js. Formulas, HTML and ids are identical.
   ========================================================================== */

window.FLASHCARDS_EN_KAPITEL_9 = {
  "k9_theorem_9_2": {
    title: "Theorem 9.2 & Corollary 9.3: Derivative of the integral",
    category: "9.1 The fundamental theorem",
    type: "satz",
    front: "What does <b>Theorem 9.2</b> say about the derivative of the indefinite integral $F(x) = \\int_a^x f(t)\\,\\mathrm{d}t$, and what follows for continuous $f$ (Corollary 9.3)?",
    back: "<b>Theorem 9.2:</b> Let $f \\in \\mathcal{R}([a,b])$ be Riemann-integrable. If $f$ is <b>continuous</b> at $x_0 \\in [a,b]$, then $F: x \\mapsto \\int_a^x f(t)\\,\\mathrm{d}t$ is differentiable at $x_0$ with<br>$$F'(x_0) = f(x_0).$$<br><b>Corollary 9.3:</b> For continuous $f \\in C([a,b])$, $x \\mapsto \\int_a^x f(t)\\,\\mathrm{d}t$ is an <b>antiderivative</b> of $f$, and every antiderivative $F$ has the form<br>$$F(x) = \\int_a^x f(t)\\,\\mathrm{d}t + C.$$<br>In particular every continuous function on a compact interval has an antiderivative.",
    meta: "Script: Definition 9.1, Theorem 9.2, Corollary 9.3",
    explanation: "<b>Proof idea:</b> $\\frac{F(x) - F(x_0)}{x - x_0} - f(x_0) = \\frac{1}{x - x_0}\\int_{x_0}^x (f(t) - f(x_0))\\,\\mathrm{d}t$; continuity at $x_0$ squeezes the integrand below $\\varepsilon$, and the triangle inequality for integrals (Theorem 4.24) and interval additivity (Theorem 4.26) do the rest. Intuitively: $F(x) - F(x_0) \\approx f(x_0)(x - x_0)$ plus an error strip of area $\\le \\varepsilon(x - x_0)$. Here the two strands of the semester meet: integral (Chapter 4) and derivative (Chapter 8).",
    example: "$F(x) = \\int_0^x e^{-t^2}\\mathrm{d}t$ is differentiable with $F'(x) = e^{-x^2}$ &ndash; although $F$ cannot be expressed through elementary functions! This is how 'new' functions arise (integral sine Si, error function, Section 9.2.8).",
    counterexample: "<b>1.</b> Without continuity at $x_0$, $F'(x_0) \\neq f(x_0)$ can happen, or the derivative may not exist: for $f = \\operatorname{sgn}$ one gets $F(x) = |x|$ &ndash; not differentiable at the jump $0$.<br><b>2.</b> Riemann integrability alone does not yield an antiderivative: discontinuous integrable $f$ (step functions!) in general have no antiderivative at all &ndash; 'integral with variable limit' and 'antiderivative' coincide only for continuous $f$."
  },
  "k9_kor_9_4_9_5": {
    title: "Corollaries 9.4 & 9.5: The fundamental theorem in computational form",
    category: "9.1 The fundamental theorem",
    type: "satz",
    front: "How does one compute integrals with antiderivatives (Corollary 9.4), and how does one reconstruct $F$ from $F'$ (Corollary 9.5)?",
    back: "<b>Corollary 9.4 (computing the integral):</b> If $f \\in C([a,b])$ is continuous and $F$ is an antiderivative of $f$, then<br>$$\\int_a^b f(t)\\,\\mathrm{d}t = F(b) - F(a) = \\big[F(x)\\big]_a^b.$$<br><b>Corollary 9.5 (integral of the derivative):</b> If $F \\in C^1([a,b])$ is continuously differentiable, then for all $x \\in [a,b]$<br>$$F(x) = F(a) + \\int_a^x F'(t)\\,\\mathrm{d}t.$$<br>Together these results are called the <b>fundamental theorem of calculus</b> (Leibniz, Newton, Barrow).",
    meta: "Script: Corollaries 9.4 & 9.5",
    explanation: "Differentiation and integration are inverse operations &ndash; in both directions: 9.4 turns every differentiation rule into an integration formula (so the formulas of Corollary 7.86 only truly make sense now), 9.5 says: a $C^1$ function is completely determined by its starting value and its derivative. The continuity assumptions can be weakened (Exercise 9.6: finitely many points of discontinuity).",
    example: "$\\int_0^1 x^2\\,\\mathrm{d}x = \\big[\\tfrac{x^3}{3}\\big]_0^1 = \\tfrac13$ &ndash; the value that Chapters 1 and 4 computed laboriously via upper and lower sums, in one line.",
    counterexample: "<b>1.</b> In Corollary 9.5 the $C^1$ hypothesis is essential: for functions like $F(x) = x^2\\sin(\\tfrac{1}{x^2})$ (differentiable, $F'$ unbounded) $F'$ is not even Riemann-integrable &ndash; the formula breaks down.<br><b>2.</b> Applying Corollary 9.4 blindly across points of non-definition is wrong: $\\int_{-1}^1 \\tfrac{1}{x^2}\\mathrm{d}x \\neq \\big[-\\tfrac1x\\big]_{-1}^1 = -2$ (negative for a positive integrand!) &ndash; the integrand is not (Riemann-)integrable on $[-1,1]$ at all."
  },
  "k9_kor_9_11": {
    title: "Corollary 9.11: Differentiating power series",
    category: "9.1 The fundamental theorem",
    type: "satz",
    front: "May one <b>differentiate power series term by term</b> (Corollary 9.11)?",
    back: "Yes: if $f(x) = \\sum_{n=0}^\\infty c_n x^n$ is a power series with radius of convergence $R > 0$, then $f: (-R, R) \\to \\mathbb{R}$ is differentiable with<br>$$f'(x) = \\sum_{n=1}^\\infty n c_n x^{n-1},$$<br>where the differentiated power series has <b>the same radius of convergence $R$</b>.<br><br><b>Consequence (Exercise 9.12):</b> Power series are <b>smooth</b> on $(-R,R)$, and $c_n = \\frac{f^{(n)}(0)}{n!}$ &ndash; the coefficients are uniquely determined by the function (comparison of coefficients, Exercise 9.13).",
    meta: "Script: Corollary 9.11, Exercises 9.12/9.13",
    explanation: "<b>Elegant proof via integration:</b> the candidate series $g(x) = \\sum n c_n x^{n-1}$ may be integrated termwise by Theorem 7.85 and gives (up to $c_0$) $f$ again; by Corollary 9.3 $f$ is then an antiderivative of $g$, so $f' = g$. In this way the difficult interchange 'derivative vs. limit' is traced back to the interchange 'integral vs. limit' already proven (uniform convergence!).",
    example: "$\\exp' = \\exp$ re-proved: $\\big(\\sum \\tfrac{x^n}{n!}\\big)' = \\sum \\tfrac{n x^{n-1}}{n!} = \\sum \\tfrac{x^{n-1}}{(n-1)!} = \\exp(x)$. Likewise $\\sin' = \\cos$ directly from the series.",
    counterexample: "<b>1.</b> For general sequences of functions termwise differentiation is FALSE, even under uniform convergence: $f_n(x) = \\tfrac{\\sin(nx)}{n} \\to 0$ uniformly, but $f_n'(x) = \\cos(nx) \\not\\to 0$ &ndash; the power series structure is essential.<br><b>2.</b> At the boundary $|x| = R$ the corollary does not hold: $\\sum \\tfrac{x^n}{n^2}$ converges at $x = 1$, but the differentiated series $\\sum \\tfrac{x^{n-1}}{n}$ diverges there &ndash; boundary points need their own arguments."
  },
  "k9_log2_leibniz": {
    title: "9.1.2 & 9.1.3: log 2 and the Leibniz series",
    category: "9.1 The fundamental theorem",
    type: "beispiel",
    front: "Compute the values of the <b>alternating harmonic series</b> and the <b>Leibniz series</b> with the fundamental theorem.",
    back: "$$\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n} = \\log 2, \\qquad \\sum_{n=0}^\\infty \\frac{(-1)^n}{2n+1} = \\frac{\\pi}{4}$$<br><b>Method (three steps each):</b><br>1. Geometric series for the derivative: $\\log(1+x)' = \\frac{1}{1+x} = \\sum (-1)^n x^n$ resp. $\\arctan'(x) = \\frac{1}{1+x^2} = \\sum (-1)^n x^{2n}$ on $(-1,1)$.<br>2. Integrate termwise (Corollary 9.5 + Theorem 7.85): $\\log(1+x) = \\sum_{k=1}^\\infty \\frac{(-1)^{k+1}}{k}x^k$, $\\arctan x = \\sum_{n=0}^\\infty \\frac{(-1)^n}{2n+1}x^{2n+1}$.<br>3. Boundary point $x = 1$ with <b>Abel's limit theorem</b> (Theorem 7.65): the series converge at $1$ (Leibniz criterion), so the values agree with $\\log 2$ resp. $\\arctan 1 = \\tfrac\\pi4$.",
    meta: "Script: Sections 9.1.2 & 9.1.3",
    explanation: "Chapter 7 could only show the convergence of these series &ndash; only the fundamental theorem yields their values. The three-step pattern 'recognise the derivative as a geometric series, integrate, Abel at the boundary' is a reusable machine for evaluating series.",
    example: "The same method gives the $\\log(1+x)$ and $\\arctan$ series for ALL $x \\in (-1, 1]$ &ndash; e.g. $\\log\\tfrac32 = \\tfrac12 - \\tfrac{1}{2\\cdot4} + \\tfrac{1}{3\\cdot 8} - \\dots$",
    counterexample: "<b>1.</b> Without the Abel step the argument at $x = 1$ is incomplete: the power series expansion a priori holds only on $(-1,1)$ &ndash; convergence at the boundary plus continuity must be justified separately.<br><b>2.</b> The Leibniz series converges agonisingly slowly (error $\\sim \\tfrac{1}{2n}$): after 1000 terms one only has 3 correct decimals of $\\pi$ &ndash; for the numerical computation of $\\pi$ it is unsuitable, however beautiful."
  },
  "k9_partielle": {
    title: "9.2.1: Integration by parts",
    category: "9.2 Integration methods",
    type: "satz",
    front: "What is <b>integration by parts</b> (indefinite and definite), and from which differentiation rule does it come?",
    back: "From the <b>product rule</b> $(uv)' = u'v + uv'$ it follows that<br>$$\\int u v'\\,\\mathrm{d}x = uv - \\int u'v\\,\\mathrm{d}x + C \\qquad \\Big(\\text{short: } \\int u\\,\\mathrm{d}v = uv - \\int v\\,\\mathrm{d}u + C\\Big)$$<br>and, for continuously differentiable $u, v$ on $[a,b]$, in definite form:<br>$$\\int_a^b u v'\\,\\mathrm{d}x = \\big[uv\\big]_a^b - \\int_a^b u'v\\,\\mathrm{d}x.$$",
    meta: "Script: Section 9.2.1, Example 9.15, Section 9.2.6",
    explanation: "The hope: the new integral $\\int u'v$ is simpler than the old one. Typical strategies: choose polynomials as $u$ (they get smaller under differentiation &ndash; so for $\\int x^n e^x\\,\\mathrm{d}x$ the degree drops by 1 per step), or 'phoenix integrals' such as $\\int e^x\\sin x\\,\\mathrm{d}x$, where after two steps the original integral reappears and is solved algebraically. The Taylor theorem (Theorem 9.46) also arises from repeated integration by parts!",
    example: "Example 9.15: $\\int x e^x\\,\\mathrm{d}x = xe^x - \\int e^x\\,\\mathrm{d}x = (x-1)e^x + C$. Tricky: $\\int \\log x\\,\\mathrm{d}x = \\int 1 \\cdot \\log x\\,\\mathrm{d}x = x\\log x - \\int 1\\,\\mathrm{d}x = x\\log x - x + C$ (with $v' = 1$!).",
    counterexample: "<b>1.</b> A wrong choice of roles makes everything worse: for $\\int xe^x\\,\\mathrm{d}x$ with $u = e^x$, $v' = x$ one gets $\\int \\tfrac{x^2}{2}e^x\\,\\mathrm{d}x$ &ndash; the degree grows.<br><b>2.</b> $\\int uv\\,\\mathrm{d}x \\neq \\big(\\int u\\big)\\big(\\int v\\big)$: there is no 'product rule for integration' &ndash; precisely why integration by parts is needed as a substitute."
  },
  "k9_substitution": {
    title: "9.2.2 & 9.2.4: Substitution (forward and backward)",
    category: "9.2 Integration methods",
    type: "satz",
    front: "What is the <b>substitution rule</b>, and how does forward substitution $u = f(x)$ differ from trigonometric (backward) substitution $x = r\\sin\\theta$?",
    back: "From the <b>chain rule</b>: if $g$ has antiderivative $G$ and $f$ is continuously differentiable, then<br>$$\\int g(f(x))\\,f'(x)\\,\\mathrm{d}x = G(f(x)) + C \\qquad \\Big(\\text{with } u = f(x),\\ \\mathrm{d}u = f'(x)\\,\\mathrm{d}x: \\int g(u)\\,\\mathrm{d}u\\Big)$$<br>For the definite integral the <b>limits are substituted along</b>: $\\int_a^b g(f(x))f'(x)\\,\\mathrm{d}x = \\int_{f(a)}^{f(b)} g(u)\\,\\mathrm{d}u$.<br><br><b>Backward (9.2.4):</b> One sets $x = f(\\theta)$ with <i>bijective</i> $f$ and at the end substitutes back $\\theta = f^{-1}(x)$ &ndash; e.g. $x = r\\sin\\theta$ turns $\\sqrt{r^2 - x^2}$ into $r\\cos\\theta$ (Example 9.21, area of a circle).",
    meta: "Script: Sections 9.2.2, 9.2.4, 9.2.6; Examples 9.17, 9.21",
    explanation: "Forward substitution needs an eye for a factor that is the inner derivative $f'$ (Example 9.17: $\\int \\frac{x}{1+x^2}\\mathrm{d}x = \\tfrac12\\log(1+x^2) + C$ with $u = 1 + x^2$). Backward substitution is chosen 'on suspicion' according to the function type: $\\sqrt{r^2 - x^2} \\to x = r\\sin\\theta$, $\\sqrt{1 + x^2} \\to x = \\sinh\\theta$. This gives $\\int\\sqrt{r^2 - x^2}\\,\\mathrm{d}x = \\tfrac{r^2}{2}\\big(\\arcsin\\tfrac{x}{r} + \\tfrac{x}{r}\\sqrt{1 - \\tfrac{x^2}{r^2}}\\big) + C$ and from it the area $\\pi r^2$ of the circle (Example 9.64).",
    example: "$\\int_0^1 2x\\,e^{x^2}\\mathrm{d}x = \\int_0^1 e^u\\,\\mathrm{d}u = e - 1$ ($u = x^2$; limits $0 \\mapsto 0$, $1 \\mapsto 1$ substituted along &ndash; no back-substitution needed).",
    counterexample: "<b>1.</b> Forgetting the limits is THE classic: $\\int_0^2 2x e^{x^2}\\mathrm{d}x = \\int_0^4 e^u\\mathrm{d}u = e^4 - 1$, NOT $\\int_0^2 e^u\\mathrm{d}u$.<br><b>2.</b> Backward substitution requires bijectivity: $x = \\sin\\theta$ is only invertible on $[-\\tfrac\\pi2, \\tfrac\\pi2]$ &ndash; whoever ignores this gets, for example, wrong signs for $\\sqrt{\\cos^2\\theta} = |\\cos\\theta|$."
  },
  "k9_partialbruch": {
    title: "9.2.3: Integrating rational functions (partial fractions)",
    category: "9.2 Integration methods",
    type: "satz",
    front: "By which <b>procedure</b> does one integrate a rational function $\\frac{p(x)}{q(x)}$?",
    back: "1. <b>Polynomial division</b> (Exercise 3.17): split off a polynomial until $\\deg p < \\deg q$.<br>2. <b>Partial fraction decomposition:</b> decompose according to the factorisation of $q$ into summands of the form $\\frac{A}{(x-a)^n}$ (real roots) and $\\frac{Bx + C}{(x^2 + bx + c)^n}$ (complex root pairs); determine the constants by comparing coefficients.<br>3. <b>Elementary integrals</b> (Example 9.18):<br>$$\\int \\frac{\\mathrm{d}x}{x-a} = \\log|x-a| + C, \\qquad \\int \\frac{\\mathrm{d}x}{(x-a)^n} = \\frac{(x-a)^{1-n}}{1-n} + C \\ (n \\ge 2),$$<br>and quadratic denominators lead to $\\log$- and $\\arctan$-terms.",
    meta: "Script: Section 9.2.3, Examples 9.18/9.19",
    explanation: "Example 9.19 demonstrates it: $\\frac{x^4+1}{x^2(x+1)}$ becomes, by division, $x - 1 + \\frac{x^2+1}{x^2(x+1)}$, then the ansatz $\\frac{x^2+1}{x^2(x+1)} = \\frac{A}{x^2} + \\frac{B}{x} + \\frac{C}{x+1}$. Remarkably, rational functions can always be integrated elementarily in this way (by rational functions, log and arctan) &ndash; one of the few classes of functions with a complete algorithm.",
    example: "$\\int \\frac{\\mathrm{d}x}{x^2 - 1} = \\tfrac12\\int\\big(\\frac{1}{x-1} - \\frac{1}{x+1}\\big)\\mathrm{d}x = \\tfrac12\\log\\left|\\frac{x-1}{x+1}\\right| + C$.",
    counterexample: "<b>1.</b> Without prior polynomial division the partial fraction ansatz is wrong: $\\frac{x^2}{x-1}$ cannot be written as $\\frac{A}{x-1}$ &ndash; the ansatz presupposes $\\deg p < \\deg q$.<br><b>2.</b> Multiple roots need ALL powers: $\\frac{1}{x^2(x+1)} = \\frac{A}{x^2} + \\frac{C}{x+1}$ (without $\\frac{B}{x}$) is unsolvable &ndash; for each $k$-fold root $a$ the ansatz needs $\\frac{A_1}{x-a}, \\dots, \\frac{A_k}{(x-a)^k}$."
  },
  "k9_uneigentlich": {
    title: "9.3.1: Improper integration limits",
    category: "9.3 The improper integral",
    type: "definition",
    front: "How is the <b>improper integral</b> $\\int_a^\\infty f(x)\\,\\mathrm{d}x$ defined, and when does $\\int_1^\\infty x^{-\\alpha}\\,\\mathrm{d}x$ converge?",
    back: "For $f: [a, \\infty) \\to \\mathbb{C}$ with $f|_{[a,b]} \\in \\mathcal{R}([a,b])$ for all $b > a$:<br>$$\\int_a^\\infty f(x)\\,\\mathrm{d}x = \\lim_{b \\to \\infty} \\int_a^b f(x)\\,\\mathrm{d}x,$$<br>if the limit exists (<b>convergent</b>, otherwise <b>divergent</b>). $\\int_{-\\infty}^\\infty$ is defined by <b>separate</b> limit passages $\\int_{-\\infty}^0 + \\int_0^\\infty$.<br><br><b>Example 9.30 ($\\alpha$-test):</b><br>$$\\int_1^\\infty x^{-\\alpha}\\,\\mathrm{d}x = \\begin{cases} \\frac{1}{\\alpha - 1} & \\text{if } \\alpha > 1 \\\\ +\\infty & \\text{if } \\alpha \\le 1 \\end{cases}$$<br><b>Lemma 9.33:</b> For $f \\ge 0$ one always has $\\int_a^\\infty f\\,\\mathrm{d}x = \\sup_b \\int_a^b f\\,\\mathrm{d}x$ &ndash; convergent or $= \\infty$.",
    meta: "Script: Section 9.3.1, Examples 9.29/9.30/9.32/9.34, Lemma 9.33",
    explanation: "Example 9.29: $\\int_0^\\infty \\frac{\\mathrm{d}x}{1+x^2} = \\lim_b \\arctan b = \\tfrac\\pi2$. For $f \\ge 0$ a majorant principle works as for series: the <b>Gaussian bell curve</b> $\\int_{-\\infty}^\\infty e^{-x^2}\\mathrm{d}x$ converges, since $e^{-x^2} \\le e^{-x}$ for $x \\ge 1$ (Example 9.34; the value $\\sqrt{\\pi}$ comes only in the 2nd semester).",
    example: "$\\int_1^\\infty \\frac{\\mathrm{d}x}{x^2} = 1$ (convergent, $\\alpha = 2$), $\\int_1^\\infty \\frac{\\mathrm{d}x}{x} = \\infty$ (harmonic borderline case $\\alpha = 1$).",
    counterexample: "<b>1.</b> Example 9.32: $\\int_{-\\infty}^\\infty x\\,\\mathrm{d}x$ does NOT exist, although the symmetric limit $\\lim_c \\int_{-c}^c x\\,\\mathrm{d}x = 0$ exists &ndash; the asymmetric variant $\\int_{-c}^{c+1}$ gives $\\infty$; therefore the definition demands separate limit passages.<br><b>2.</b> Convergence of the integral does NOT force $f(x) \\to 0$: a function with ever narrower spikes of height 1 at the integers has a convergent integral, but $f(n) = 1$ &ndash; unlike for series (Prop. 7.2) there is no 'null sequence criterion'."
  },
  "k9_satz_9_35": {
    title: "Theorem 9.35: The integral test for series",
    category: "9.3 The improper integral",
    type: "satz",
    front: "What does the <b>integral test</b> (Theorem 9.35) say, and how does one prove it?",
    back: "Let $f: [1, \\infty) \\to \\mathbb{R}_{\\ge 0}$ be <b>monotonically decreasing</b>. Then<br>$$\\sum_{n=2}^\\infty f(n) \\;\\le\\; \\int_1^\\infty f(x)\\,\\mathrm{d}x \\;\\le\\; \\sum_{n=1}^\\infty f(n).$$<br><b>In particular:</b> the series $\\sum_{n=1}^\\infty f(n)$ converges <b>if and only if</b> the improper integral $\\int_1^\\infty f(x)\\,\\mathrm{d}x$ converges.",
    meta: "Script: Theorem 9.35 & Exercise 9.36",
    explanation: "<b>Proof:</b> on $[n, n+1]$ monotonicity gives $f(n+1) \\le \\int_n^{n+1} f(x)\\,\\mathrm{d}x \\le f(n)$ &ndash; the series is a lower and upper sum of the integral with mesh width 1; then sum up and apply Theorem 6.5 / Lemma 9.33. The test translates convergence of series into convergence of integrals, which are often much easier to compute &ndash; and yields quantitative bounds as a bonus.",
    example: "The p-test anew (Exercise 9.36): $\\sum \\frac{1}{n^p}$ converges $\\iff \\int_1^\\infty x^{-p}\\mathrm{d}x$ converges $\\iff p > 1$. Refined: $\\sum_{n=1}^N \\tfrac1n = \\log N + O(1)$ &ndash; the divergence rate of the harmonic series.",
    counterexample: "<b>1.</b> Without monotonicity the test is false: $f$ with narrow spikes at the integers ($f(n) = 1$, almost zero between them) has a convergent integral, but $\\sum f(n) = \\infty$.<br><b>2.</b> The test compares convergence, not values: $\\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2}{6} \\neq 1 = \\int_1^\\infty \\frac{\\mathrm{d}x}{x^2}$ &ndash; never read off the series value from the integral."
  },
  "k9_unbeschraenkt": {
    title: "9.3.2: Integrals of unbounded functions",
    category: "9.3 The improper integral",
    type: "definition",
    front: "How is $\\int_a^B f(x)\\,\\mathrm{d}x$ defined for $f$ <b>unbounded</b> at $B$, and what do $\\int_0^1 \\log x\\,\\mathrm{d}x$ and $\\int_{-1}^1 \\tfrac1x\\,\\mathrm{d}x$ give?",
    back: "For $f: [a, B) \\to \\mathbb{C}$ with $f|_{[a,b]} \\in \\mathcal{R}([a,b])$ for all $b \\in (a, B)$:<br>$$\\int_a^B f(x)\\,\\mathrm{d}x = \\lim_{b \\nearrow B} \\int_a^b f(x)\\,\\mathrm{d}x$$<br>(analogously $\\lim_{a \\searrow A}$ at the lower limit); interior singularities are split by interval additivity into separate improper integrals.<br><br><b>Example 9.39:</b> $\\int_0^1 \\log x\\,\\mathrm{d}x = \\lim_{a \\searrow 0}\\big[x\\log x - x\\big]_a^1 = -1$ (since $a\\log a \\to 0$).<br><b>Example 9.40:</b> $\\int_{-1}^1 \\tfrac1x\\,\\mathrm{d}x$ <b>does not exist</b>: both partial integrals $\\int_{-1}^0$ and $\\int_0^1$ diverge ($-\\infty$ resp. $+\\infty$) &ndash; and one assigns no value to the integral either.",
    meta: "Script: Section 9.3.2, Exercise 9.38, Examples 9.39-9.41",
    explanation: "Mirror image of the $\\alpha$-test at $\\infty$: $\\int_0^1 x^{-\\alpha}\\mathrm{d}x$ converges exactly for $\\alpha < 1$ (roles swapped!). For bounded $f$ the improper integral is compatible with the ordinary Riemann integral (Exercise 9.38). The Gamma function combines both types: $\\Gamma(s) = \\int_0^\\infty x^{s-1}e^{-x}\\mathrm{d}x$ is improper at $0$ AND at $\\infty$ &ndash; integration by parts gives $\\Gamma(s+1) = s\\Gamma(s)$ and $\\Gamma(n+1) = n!$ &ndash; the factorial is interpolated to a function on $(0, \\infty)$ ($\\Gamma(\\tfrac12) = \\sqrt\\pi$ in the 2nd semester).",
    example: "$\\int_0^1 \\frac{\\mathrm{d}x}{\\sqrt{x}} = \\lim_{a\\searrow 0}\\big[2\\sqrt{x}\\big]_a^1 = 2$ &ndash; unbounded integrand, finite area.",
    counterexample: "<b>1.</b> Whoever overlooks the singularity of $\\tfrac1x$ at $0$ and naively computes $[\\log|x|]_{-1}^1 = 0$ 'proves' a value for a non-existent integral &ndash; always split interior singularities FIRST.<br><b>2.</b> $\\int_0^1 \\frac{\\mathrm{d}x}{x}$ diverges ($\\alpha = 1$ is the borderline case here too) &ndash; 'the integrand is infinite only at one point' does not suffice for convergence."
  },
  "k9_theorem_9_46": {
    title: "Theorem 9.46: Taylor approximation with integral remainder",
    category: "9.4 Taylor approximation",
    type: "satz",
    front: "Define the <b>$n$-th Taylor approximation</b> and state <b>Theorem 9.46</b> with the integral remainder (and the variants of Lagrange and Cauchy).",
    back: "For $n$-times differentiable $f$ and $x_0 \\in (a,b)$:<br>$$P_{x_0,n}^f(x) = \\sum_{k=0}^n \\frac{f^{(k)}(x_0)}{k!}(x - x_0)^k$$<br>(the unique polynomial with the same derivatives $\\le n$ at $x_0$).<br><br><b>Theorem 9.46:</b> If $f$ is $(n+1)$-times <i>continuously</i> differentiable, then $f(x) = P^f_{x_0,n}(x) + R^f_{x_0,n}(x)$ with the <b>integral remainder</b><br>$$R^f_{x_0,n}(x) = \\int_{x_0}^x f^{(n+1)}(t)\\,\\frac{(x-t)^n}{n!}\\,\\mathrm{d}t.$$<br><b>Variants (Exercise 9.48):</b> There are $\\xi_L$ resp. $\\xi_C$ between $x_0$ and $x$ with<br>$$R^f_{x_0,n}(x) = \\frac{f^{(n+1)}(\\xi_L)}{(n+1)!}(x - x_0)^{n+1} \\ \\text{(Lagrange)}, \\qquad R^f_{x_0,n}(x) = \\frac{f^{(n+1)}(\\xi_C)}{n!}(x - \\xi_C)^n(x - x_0) \\ \\text{(Cauchy)}.$$",
    meta: "Script: Theorem 9.46 & Exercise 9.48, Section 9.4",
    explanation: "<b>Proof:</b> induction with integration by parts &ndash; the case $n = 0$ IS the fundamental theorem ($f(x) = f(x_0) + \\int_{x_0}^x f'$); each further step pushes one derivative from the remainder into the polynomial via integration by parts. Taylor thus generalises the tangent ($n = 1$) to approximations of arbitrary order; the Lagrange form generalises the mean value theorem.",
    example: "$e^x = 1 + x + \\tfrac{x^2}{2} + R_2(x)$ with $|R_2(x)| \\le \\frac{e^{|x|}}{6}|x|^3$; at $x = 0{,}1$ the error is $< 2\\cdot 10^{-4}$ &ndash; three terms suffice for 3 decimals.",
    counterexample: "<b>1.</b> The Taylor polynomial is in general NOT a good global approximation: for $\\log(1+x)$ around $0$ the polynomials diverge completely for $x > 1$ &ndash; the quality holds locally at $x_0$.<br><b>2.</b> The integral form needs a continuous $(n+1)$-st derivative; Lagrange and Cauchy get by with mere existence &ndash; the hypotheses of the three forms are not identical."
  },
  "k9_kor_9_47": {
    title: "Corollary 9.47 & Example 9.49: Taylor estimate and extrema",
    category: "9.4 Taylor approximation",
    type: "satz",
    front: "What is the <b>Taylor estimate</b> (Corollary 9.47), and how does it refine the criterion for extrema (Example 9.49)?",
    back: "<b>Corollary 9.47:</b> With $M_{n+1} = \\max\\{|f^{(n+1)}(t)| : t \\text{ between } x_0 \\text{ and } x\\}$ one has<br>$$\\big|f(x) - P^f_{x_0,n}(x)\\big| \\le \\frac{M_{n+1}\\,|x - x_0|^{n+1}}{(n+1)!},$$<br>in particular $f(x) = P^f_{x_0,n}(x) + O\\big((x-x_0)^{n+1}\\big)$ for $x \\to x_0$.<br><br><b>Example 9.49 (extrema):</b> If $f'(x_0) = \\dots = f^{(n-1)}(x_0) = 0$ and $f^{(n)}(x_0) \\neq 0$, then $f$ has at $x_0$:<br>&bull; $n$ even, $f^{(n)}(x_0) > 0$: local <b>minimum</b>; $f^{(n)}(x_0) < 0$: local <b>maximum</b>;<br>&bull; $n$ odd: <b>no</b> extremum.",
    meta: "Script: Corollary 9.47 & Example 9.49",
    explanation: "The factorial in the denominator makes Taylor so powerful: for bounded derivatives (exp, sin, cos) $(n+1)!$ beats every $|x - x_0|^{n+1}$ &ndash; the Taylor series converges on all of $\\mathbb{R}$ to the function. The extremum criterion settles the cases left open when $f''(x_0) = 0$: the first non-vanishing derivative dominates the local behaviour ($f(x) \\approx f(x_0) + \\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n$).",
    example: "$f(x) = x^4$: $f' = f'' = f''' = 0$ at $0$, $f^{(4)}(0) = 24 > 0$, $n = 4$ even $\\Rightarrow$ minimum. $f(x) = x^3$: $n = 3$ odd $\\Rightarrow$ saddle point &ndash; finally cleanly justified.",
    counterexample: "<b>1.</b> If ALL derivatives vanish (as for $\\psi$ from Example 9.45), the criterion says nothing: $\\psi$ has a minimum at zero, and $\\psi(x) = 0$ for $x \\le 0$ &ndash; beyond all finite orders no Taylor argument decides.<br><b>2.</b> $M_{n+1}$ must really be the maximum OVER THE INTERVAL, not $|f^{(n+1)}(x_0)|$: for rapidly growing high derivatives (e.g. $\\log$ near $0$) one would otherwise grossly underestimate the error."
  },
  "k9_taylorreihe": {
    title: "9.4 & 9.4.1: Taylor series and analytic functions",
    category: "9.4 Taylor approximation",
    type: "definition",
    front: "What is the <b>Taylor series</b> of a smooth function, and why is it <b>not always</b> equal to the function (Example 9.45)?",
    back: "For smooth $f$ the <b>Taylor series</b> about $x_0$ is the power series<br>$$T_{x_0}^f(x) = \\sum_{k=0}^\\infty \\frac{f^{(k)}(x_0)}{k!}(x - x_0)^k.$$<br>$f$ is called (real) <b>analytic</b> if it is locally represented by its Taylor series around every point.<br><br><b>Example 9.45 (vanishing Taylor series):</b> The smooth function $\\psi(x) = e^{-1/x}$ for $x > 0$, $\\psi(x) = 0$ for $x \\le 0$ (Example 8.23) has $\\psi^{(n)}(0) = 0$ for ALL $n$ &ndash; its Taylor series about $0$ is the zero series, although $\\psi(x) > 0$ for $x > 0$. $\\psi$ is <b>smooth but not analytic</b>.",
    meta: "Script: Sections 9.4 & 9.4.1, Example 9.45",
    explanation: "The Taylor series always has the same derivatives as $f$ at $x_0$ &ndash; but this determines the function only when the remainder $R_{x_0,n}(x) \\to 0$ for $n \\to \\infty$ (Corollary 9.47 checks exactly this). Conversely, power series are always analytic (Corollary 9.11): the world divides into $C^\\infty \\supsetneq$ analytic. In complex analysis (function theory) this difference disappears &ndash; complex differentiable automatically means analytic.",
    example: "exp, sin, cos are analytic on $\\mathbb{R}$: the Lagrange remainder $\\frac{M_{n+1}|x|^{n+1}}{(n+1)!} \\to 0$, since the derivatives are uniformly bounded (or $M_{n+1} = e^{|x|}$ fixed) &ndash; their power series representations from Chapter 7 are exactly their Taylor series.",
    counterexample: "<b>1.</b> 'Taylor series converges' $\\neq$ 'Taylor series converges to $f$': for $\\psi$ the zero series converges perfectly well &ndash; only to the wrong function.<br><b>2.</b> Smoothness gives no positive radius of convergence of the Taylor series in the useful sense: with $\\psi$-building blocks there are smooth functions whose Taylor series about $0$ converges ONLY at $x = 0$."
  },
  "k9_satz_9_56": {
    title: "Theorem 9.56: Rectangle and trapezoidal rules",
    category: "9.5 Numerical integration",
    type: "satz",
    front: "How do the <b>rectangle rule</b> and the <b>chord trapezoidal rule</b> approximate the integral, and how fast do the errors fall (Theorem 9.56)?",
    back: "With step size $h = \\frac{b-a}{n}$ and nodes $x_\\ell = a + \\ell h$:<br><br>(a) <b>Rectangle rule</b> ($f \\in C^1$):<br>$$\\int_a^b f(x)\\,\\mathrm{d}x = h\\big(f(x_0) + \\dots + f(x_{n-1})\\big) + F_1, \\qquad |F_1| \\le \\frac{(b-a)^2}{2n}\\max|f'|$$<br>(b) <b>Chord trapezoidal rule</b> ($f \\in C^2$):<br>$$\\int_a^b f(x)\\,\\mathrm{d}x = \\frac{h}{2}\\big(f(x_0) + 2f(x_1) + \\dots + 2f(x_{n-1}) + f(x_n)\\big) + F_2, \\qquad |F_2| \\le \\frac{(b-a)^3}{6n^2}\\max|f''|$$",
    meta: "Script: Theorem 9.56, Section 9.5",
    explanation: "The error falls like $\\tfrac1n$ (rectangles) resp. $\\tfrac{1}{n^2}$ (trapezoids): the trapezoidal rule replaces $f$ piecewise by chords instead of constants &ndash; one order of approximation more. The proofs run through Taylor estimates (Corollary 9.47) on each subinterval; smoother integrands permit better methods (Simpson: $\\tfrac{1}{n^4}$). Important for functions without an elementary antiderivative ($e^{-x^2}$, $\\tfrac{\\sin x}{x}$, ...).",
    example: "$\\int_0^1 e^{-x^2}\\mathrm{d}x$ with the trapezoidal rule, $n = 10$: error $\\le \\frac{1}{600}\\max|f''| \\approx 0{,}003$ &ndash; two reliable decimal places with 11 function values.",
    counterexample: "<b>1.</b> The error bounds need smoothness: for merely continuous, strongly oscillating $f$ the rectangle sum can be arbitrarily bad &ndash; the bound contains $\\max|f'|$ and would otherwise be worthless.<br><b>2.</b> Doubling $n$ does NOT halve the trapezoidal error &ndash; it quarters it ($\\tfrac{1}{n^2}$!); whoever confuses error orders invests computing effort wrongly."
  },
  "k9_asymptotik": {
    title: "9.6: Wallis, Stirling and the Euler–Mascheroni constant",
    category: "9.6 Three asymptotic formulas",
    type: "satz",
    front: "Name the three asymptotic formulas from Section 9.6: the <b>Wallis product</b>, the <b>Stirling formula</b> and the <b>asymptotics of the harmonic series</b>.",
    back: "&bull; <b>Wallis product (9.17):</b><br>$$\\pi = \\lim_{n\\to\\infty} \\frac{1}{n}\\,\\frac{(2^n n!)^4}{((2n)!)^2}$$<br>&bull; <b>Stirling formula (9.19):</b><br>$$\\lim_{n\\to\\infty} \\frac{n!}{\\sqrt{2\\pi n}\\,\\left(\\frac{n}{e}\\right)^n} = 1, \\qquad \\text{short } n! \\approx \\sqrt{2\\pi n}\\left(\\frac{n}{e}\\right)^n$$<br>&bull; <b>Harmonic series (9.21):</b><br>$$\\sum_{k=1}^n \\frac{1}{k} = \\log n + \\gamma + \\frac{1}{2n} + O\\big(\\tfrac{1}{n^2}\\big)$$<br>with the <b>Euler–Mascheroni constant</b> $\\gamma = \\int_1^\\infty\\big(\\tfrac{1}{\\lfloor x\\rfloor} - \\tfrac1x\\big)\\mathrm{d}x = 0{,}5772\\dots$",
    meta: "Script: Sections 9.6.1-9.6.3",
    explanation: "<b>Trilogy of methods:</b> Wallis follows from the recursion for $I_k = \\int_0^\\pi \\sin^k x\\,\\mathrm{d}x$ (integration by parts!). Stirling compares $\\log(n!) = \\sum \\log k$ with $\\int \\log x\\,\\mathrm{d}x$ via Taylor estimates &ndash; Wallis supplies the constant $\\sqrt{2\\pi}$ along the way. The harmonic asymptotics refine the integral test. Common pattern: <i>replace sums by integrals and control the error with Taylor.</i>",
    example: "Stirling in practice: $100! \\approx \\sqrt{200\\pi}\\,(100/e)^{100} \\approx 9{,}32 \\cdot 10^{157}$ (true value $9{,}33\\cdot10^{157}$ &ndash; relative error below $0{,}1\\%$). Harmonic: $\\sum_{k=1}^{10^6} \\tfrac1k \\approx 13{,}816 + 0{,}577 = 14{,}393$.",
    counterexample: "<b>1.</b> Stirling is a <i>relative</i>, not an absolute asymptotic: the difference $n! - \\sqrt{2\\pi n}(n/e)^n$ diverges to $\\infty$ &ndash; only the quotient tends to 1.<br><b>2.</b> $\\sum_{k=1}^n \\tfrac1k - \\log n$ converges (to $\\gamma$), but $\\sum \\tfrac1k$ itself diverges &ndash; 'grows like $\\log n$' must not be confused with 'bounded'."
  },
  "k9_bogenlaenge": {
    title: "9.7.2: Arc length of paths",
    category: "9.7 Applications",
    type: "definition",
    front: "How is the <b>arc length</b> of a continuously differentiable path $\\gamma: [a,b] \\to \\mathbb{R}^d$ defined, and why is that the 'only sensible' definition?",
    back: "$$L(\\gamma) = \\int_a^b \\|\\dot\\gamma(t)\\|_2\\,\\mathrm{d}t = \\int_a^b \\sqrt{\\dot\\gamma_1(t)^2 + \\dots + \\dot\\gamma_d(t)^2}\\,\\mathrm{d}t$$<br>&ndash; the integral of the <b>speed</b> $\\|\\dot\\gamma(t)\\|_2$ over time.<br><br><b>Justification via Proposition 4.30:</b> The distance travelled is an <i>additive interval function</i>, trapped between $(\\beta - \\alpha)\\cdot$ minimum and maximum speed &ndash; by 4.30 only the integral of the speed remains. The arc length is invariant under <b>reparametrisation</b> (Lemma 9.67).<br><br><b>Example 9.66:</b> $\\gamma(t) = re^{it} = (r\\cos t, r\\sin t)$, $t \\in [0, 2\\pi]$: $\\|\\dot\\gamma(t)\\| = r$, so circumference $= 2\\pi r$.",
    meta: "Script: Section 9.7.2, Example 9.66, Lemma 9.67",
    explanation: "For graphs $\\gamma(t) = (t, f(t))$ the formula becomes $L = \\int_a^b \\sqrt{1 + f'(t)^2}\\,\\mathrm{d}t$. That the circumference $2\\pi r$ comes out finally closes the circle with the analytic definition of $\\pi$ from Theorem 7.74 &ndash; the 'circle number' earns its name. Area counterpart (9.7.1): the area of a circle $\\pi r^2$ via $4\\int_0^r \\sqrt{r^2 - x^2}\\,\\mathrm{d}x$ (Example 9.64).",
    example: "Parabola $f(t) = \\tfrac{t^2}{2}$ on $[0, 1]$: $L = \\int_0^1 \\sqrt{1 + t^2}\\,\\mathrm{d}t = \\tfrac12\\big(\\sqrt2 + \\operatorname{arsinh} 1\\big)$ &ndash; here the arsinh antiderivative from Chapter 8 pays off.",
    counterexample: "<b>1.</b> The arc length is NOT $\\|\\gamma(b) - \\gamma(a)\\|$: the circular path has length $2\\pi r$, but endpoint distance 0 &ndash; one measures the path, not the displacement.<br><b>2.</b> For merely continuous (not $C^1$) paths the length can be infinite: fractal curves such as the Koch curve have infinite arc length between any two points &ndash; the formula requires continuous differentiability."
  },
  "k9_rotation": {
    title: "9.7.4/9.7.5: Solids of revolution (volume and surface area)",
    category: "9.7 Applications",
    type: "satz",
    front: "How does one compute the <b>volume</b> and <b>lateral surface area</b> of a solid of revolution, and what results for the sphere?",
    back: "If the graph of $f: [a,b] \\to \\mathbb{R}_{\\ge 0}$ is rotated about the $x$-axis:<br>&bull; <b>Volume:</b> $\\displaystyle V = \\pi\\int_a^b f(x)^2\\,\\mathrm{d}x$ (disks of radius $f(x)$)<br>&bull; <b>Lateral surface area:</b> $\\displaystyle O = 2\\pi \\int_a^b f(x)\\sqrt{1 + f'(x)^2}\\,\\mathrm{d}x$<br><br><b>Sphere of radius $r$</b> (rotation of $f(x) = \\sqrt{r^2 - x^2}$ over $[-r, r]$):<br>$$V = \\pi\\int_{-r}^r (r^2 - x^2)\\,\\mathrm{d}x = \\frac{4}{3}\\pi r^3 \\quad \\text{(Example 9.72)}, \\qquad O = 2\\pi\\int_{-r}^r r\\,\\mathrm{d}x = 4\\pi r^2 \\quad \\text{(Example 9.74)}$$",
    meta: "Script: Sections 9.7.4/9.7.5, Examples 9.72/9.74",
    explanation: "Both formulas are applications of Proposition 4.30: volume and surface area are additive interval functions, locally trapped by cylinder or truncated-cone bounds. A nice sphere detail: in the surface area $f(x)\\sqrt{1 + f'(x)^2} = \\sqrt{r^2 - x^2}\\cdot\\frac{r}{\\sqrt{r^2 - x^2}} = r$ &ndash; every 'slice' of equal width contributes the same area (Archimedes' theorem).",
    example: "Cone (rotation of $f(x) = \\tfrac{r}{h}x$ over $[0,h]$): $V = \\pi\\tfrac{r^2}{h^2}\\int_0^h x^2\\,\\mathrm{d}x = \\tfrac13\\pi r^2 h$ &ndash; the school formula from one line of analysis.",
    counterexample: "<b>1.</b> For the surface area one may NOT naively compute $2\\pi\\int f\\,\\mathrm{d}x$ (circumference times width without the slant factor): for the cone the factor $\\sqrt{1 + f'^2}$ would then be missing &ndash; unlike for the volume, the error of the 'horizontal approximation' is NOT negligible here (compare the staircase paradox for arc length).<br><b>2.</b> Gabriel's horn ($f(x) = \\tfrac1x$ on $[1, \\infty)$): finite volume $\\pi$, but infinite surface area &ndash; convergence of volume and of area are independent."
  }
};
