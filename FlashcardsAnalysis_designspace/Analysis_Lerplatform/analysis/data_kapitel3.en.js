/* ==========================================================================
   FLASHCARDS CHAPTER 3 (English): Functions and the real numbers
   Analysis I - Prof. Dr. Manfred Einsiedler
   English translation of data_kapitel3.js. Formulas, tags and ids are identical.
   ========================================================================== */

window.FLASHCARDS_EN_KAPITEL_3 = {
  "k3_potenzsummen": {
    title: "Proposition 3.32 & 3.33: Sums of powers",
    category: "3.3 The factorial and the binomial theorem",
    front: "What is the general formula for the sum of the $d$-th powers $\\sum_{k=1}^n k^d$, and what property do the coefficients of the resulting polynomial have?",
    back: "For every $d \\in \\mathbb{N}_0$ there is a polynomial $p_{d+1} \\in \\mathbb{Q}[x]$ of degree $d+1$ with leading coefficient $\\frac{1}{d+1}$, such that for all $n \\in \\mathbb{N}$:\n$$\\sum_{k=1}^n k^d = \\frac{1}{d+1} n^{d+1} + c_d n^d + \\dots + c_1 n + c_0$$\nIn particular, using binomial coefficients $p_d(n) = \\binom{n}{d}$, the hockey-stick identity holds:\n$$\\sum_{k=0}^n \\binom{k}{d} = \\binom{n+1}{d+1}$$",
    meta: "Script: §3.3, Proposition 3.32 & 3.33",
    explanation: "<b>Proof idea & structure:</b><br>1. The formula for binomial coefficients $\\sum_{k=0}^n \\binom{k}{d} = \\binom{n+1}{d+1}$ follows directly from Pascal's triangle by induction on $n$.<br>2. Every power $k^d$ can be written as a linear combination of binomial coefficients $\\binom{k}{j}$ with $j \\le d$ (Stirling numbers of the second kind).<br>3. Summing these binomial coefficients gives a polynomial in $n$ of degree $d+1$.",
    example: "<b>Classic cases:</b><br>• $d=1$: $\\sum_{k=1}^n k = \\frac{n(n+1)}{2} = \\frac{1}{2}n^2 + \\frac{1}{2}n$<br>• $d=2$: $\\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6} = \\frac{1}{3}n^3 + \\frac{1}{2}n^2 + \\frac{1}{6}n$<br>• $d=3$: $\\sum_{k=1}^n k^3 = \\left(\\frac{n(n+1)}{2}\\right)^2 = \\frac{1}{4}n^4 + \\frac{1}{2}n^3 + \\frac{1}{4}n^2$",
    counterexample: "<b>Careful:</b> The coefficients $c_k$ are always rational ($\\mathbb{Q}$), but in general they are not integers ($\\mathbb{Z}$)."
  },
  "k3_beschraenkt_fkt": {
    title: "Definition: Boundedness of functions",
    category: "3.4 Real-valued functions",
    front: "When is a function $f: D \\to \\mathbb{R}$ (on $D \\subseteq \\mathbb{R}$) called <b>bounded above</b>, <b>bounded below</b>, or <b>bounded</b>?",
    back: "Let $D \\neq \\emptyset$ be a set and $f: D \\to \\mathbb{R}$ a function.<br>• $f$ is called <b>bounded above</b> if the image $f(D)$ is bounded above, i.e.: $\\exists C \\in \\mathbb{R} \\; \\forall x \\in D: f(x) \\le C$.<br>• $f$ is called <b>bounded below</b> if $\\exists c \\in \\mathbb{R} \\; \\forall x \\in D: f(x) \\ge c$.<br>• $f$ is called <b>bounded</b> if $f$ is both bounded above and bounded below, i.e.:<br>$$\\exists M \\ge 0 \\; \\forall x \\in D: |f(x)| \\le M$$",
    meta: "Script: §3.4.1",
    explanation: "The boundedness of a function always refers to its <i>image</i> $f(D) \\subseteq \\mathbb{R}$. It must not be confused with the boundedness of the domain $D$.",
    example: "<b>Example:</b> $f: [0, 1] \\to \\mathbb{R}, f(x) = x^2$ is bounded by $M = 1$, since $|f(x)| \\le 1$ for all $x \\in [0, 1]$.<br>Also $\\sin: \\mathbb{R} \\to \\mathbb{R}$ is bounded by $M = 1$.",
    counterexample: "<b>Counterexample:</b> $f: (0, 1] \\to \\mathbb{R}, f(x) = \\frac{1}{x}$ is bounded below by $c = 1$, but <i>not</i> bounded above (and therefore unbounded)."
  },
  "k3_monotonie_fkt": {
    title: "Definition: Monotonicity of functions",
    category: "3.4 Real-valued functions",
    front: "When is a function $f: D \\to \\mathbb{R}$ called <b>monotonically increasing</b>, or <b>strictly monotonically increasing</b>?",
    back: "Let $D \\subseteq \\mathbb{R}$. A function $f: D \\to \\mathbb{R}$ is called:<br>• <b>monotonically increasing</b> if for all $x_1, x_2 \\in D$:<br>$$x_1 < x_2 \\implies f(x_1) \\le f(x_2)$$<br>• <b>strictly monotonically increasing</b> if for all $x_1, x_2 \\in D$:<br>$$x_1 < x_2 \\implies f(x_1) < f(x_2)$$<br><i>(Monotonically (strictly) decreasing is defined analogously with $\\ge$ or $>$.)</i>",
    meta: "Script: §3.4.2",
    explanation: "In the strict case, monotonicity guarantees injectivity: every strictly monotone function is injective on its domain $D$. On intervals, injectivity of continuous functions always implies strict monotonicity.",
    example: "<b>Example:</b> $f: [0, \\infty) \\to \\mathbb{R}, f(x) = x^n$ ($n \\in \\mathbb{N}$) is strictly monotonically increasing.",
    counterexample: "<b>Counterexample:</b> $f: \\mathbb{R} \\to \\mathbb{R}, f(x) = x^2$ is <i>not</i> monotone on all of $\\mathbb{R}$ (decreasing on $(-\\infty, 0]$, increasing on $[0, \\infty)$)."
  },
  "k3_def_stetigkeit": {
    title: "Definition 3.45: Continuity at a point and on a set",
    category: "3.5 Continuity",
    front: "State the precise $\\varepsilon$-$\\delta$ definition of <b>continuity of a function $f: D \\to \\mathbb{R}$ at a point $x_0 \\in D$</b>, and on all of $D$.",
    back: "Let $D \\subseteq \\mathbb{R}$ and $f: D \\to \\mathbb{R}$.<br>• $f$ is <b>continuous at the point $x_0 \\in D$</b> if:<br>$$\\forall \\varepsilon > 0 \\; \\exists \\delta > 0 \\; \\forall x \\in D: |x - x_0| < \\delta \\implies |f(x) - f(x_0)| < \\varepsilon$$<br>• $f$ is <b>continuous</b> (on $D$) if $f$ is continuous at every point $x_0 \\in D$.",
    meta: "Script: §3.5, Definition 3.45",
    explanation: "<b>Intuition & order of quantifiers:</b><br>1. First, the challenger gives a tolerance $\\varepsilon > 0$ for the output value.<br>2. We must find a $\\delta > 0$ such that all inputs $x$ in the $\\delta$-interval around $x_0$ are mapped into the $\\varepsilon$-strip around $f(x_0)$.<br>3. For pointwise continuity, $\\delta = \\delta(\\varepsilon, x_0)$ may depend on $\\varepsilon$ AND on the point $x_0$.<br><br><svg viewBox='0 0 320 160' style='width:100%; max-width:320px; display:block; margin:10px auto;'><rect x='20' y='20' width='280' height='120' fill='#f8f9fa' stroke='#ccc'/><line x1='120' y1='20' x2='120' y2='140' stroke='#888' stroke-dasharray='4'/><line x1='20' y1='80' x2='280' y2='80' stroke='#888' stroke-dasharray='4'/><rect x='80' y='50' width='80' height='60' fill='rgba(0,123,255,0.15)' stroke='#007bff'/><path d='M 30 130 Q 120 80 270 30' fill='none' stroke='#d9534f' stroke-width='3'/><circle cx='120' cy='80' r='4' fill='#007bff'/><text x='125' y='95' font-size='11' fill='#333'>x₀</text><text x='200' y='75' font-size='11' fill='#333'>f(x₀)</text><text x='165' y='45' font-size='10' fill='#007bff'>f(x₀)+ε</text><text x='165' y='120' font-size='10' fill='#007bff'>f(x₀)-ε</text><text x='80' y='152' font-size='10' fill='#007bff'>x₀-δ</text><text x='150' y='152' font-size='10' fill='#007bff'>x₀+δ</text></svg>",
    example: "<b>Example:</b> $f(x) = ax$ is continuous on $\\mathbb{R}$. For any $x_0 \\in \\mathbb{R}$ and $\\varepsilon > 0$, choose $\\delta = \\frac{\\varepsilon}{|a|}$ (for $a \\neq 0$). Then $|ax - ax_0| = |a||x - x_0| < |a| \\cdot \\frac{\\varepsilon}{|a|} = \\varepsilon$.",
    counterexample: "<b>Counterexample:</b> The floor function $f(x) = \\lfloor x \\rfloor$ is discontinuous at every integer $x_0 \\in \\mathbb{Z}$. For $\\varepsilon = 1/2$ there is no $\\delta > 0$, because for $x = x_0 - \\delta/2$ we have $|f(x) - f(x_0)| = 1 > \\varepsilon$."
  },
  "k3_stetigkeits_beispiele": {
    title: "Examples and counterexamples for continuity",
    category: "3.5 Continuity",
    front: "Name elementary classes of continuous functions and classic examples of discontinuity from the script.",
    back: "<b>Continuous functions:</b><br>1. Constant function $x \\mapsto c$<br>2. Identity / linear function $x \\mapsto ax$<br>3. Absolute value $x \\mapsto |x|$<br>4. Power functions $x \\mapsto x^n$ and $x \\mapsto \\sqrt{x}$ on $[0, \\infty)$<br><br><b>Discontinuous functions:</b><br>1. Floor function $x \\mapsto \\lfloor x \\rfloor$ (jumps at $\\mathbb{Z}$)<br>2. Sign function $\\text{sgn}(x)$ at $x_0 = 0$<br>3. Dirichlet function $\\mathbb{1}_{\\mathbb{Q}}$ (discontinuous at every point of $\\mathbb{R}$!)",
    meta: "Script: §3.47 - §3.48",
    explanation: "The continuity of the absolute value follows directly from the reverse triangle inequality: $||x| - |x_0|| \\le |x - x_0|$. So the choice $\\delta = \\varepsilon$ works.",
    example: "Sums and products of basic continuous building blocks (e.g. polynomials $p(x) = \\sum a_k x^k$) are again continuous.",
    counterexample: "The Dirichlet function $\\mathbb{1}_{\\mathbb{Q}}(x) = \\begin{cases}1 & x \\in \\mathbb{Q}\\ 0 & x \\notin \\mathbb{Q}\\end{cases}$ is nowhere continuous, because every interval contains both rational and irrational numbers densely."
  },
  "k3_stetigkeit_algeb": {
    title: "Proposition 3.50 & 3.52: Operations with continuous functions & composition",
    category: "3.5 Continuity",
    front: "What can be said about the sum, product, quotient and composition of continuous functions?",
    back: "Let $f, g: D \\to \\mathbb{R}$ be continuous at $x_0 \\in D$. Then the following are also continuous at $x_0$:<br>1. <b>Sum/difference:</b> $f + g$ and $f - g$<br>2. <b>Product:</b> $f \\cdot g$<br>3. <b>Quotient:</b> $\\frac{f}{g}$ (provided $g(x_0) \\neq 0$ on a neighbourhood)<br>4. <b>Composition:</b> If $f: D_1 \\to D_2$ is continuous at $x_0$ and $g: D_2 \\to \\mathbb{R}$ is continuous at $y_0 = f(x_0)$, then $g \\circ f: D_1 \\to \\mathbb{R}$ is continuous at $x_0$.",
    meta: "Script: §3.5.0 - §3.5.2, Exercise 3.53",
    explanation: "<b>Proof blueprint (composition $g \\circ f$):</b><br>1. Let $\\varepsilon > 0$. Since $g$ is continuous at $y_0 = f(x_0)$, there is an $\\eta > 0$ with:<br>$$|y - y_0| < \\eta \\implies |g(y) - g(y_0)| < \\varepsilon$$<br>2. Since $f$ is continuous at $x_0$, choose for this $\\eta > 0$ a $\\delta > 0$ with:<br>$$|x - x_0| < \\delta \\implies |f(x) - f(x_0)| < \\eta$$<br>3. Substituting gives: $|x - x_0| < \\delta \\implies |g(f(x)) - g(f(x_0))| < \\varepsilon$.",
    example: "Since $f(x) = x$ and $g(y) = \\sin(y)$ are continuous, $h(x) = \\sin(x^2 + 1)$ is also continuous, as a composition of continuous functions.",
    counterexample: "For the quotient $\\frac{f(x)}{g(x)}$, the condition $g(x_0) \\neq 0$ is essential. For $f(x)=1, g(x)=x$, $\\frac{1}{x}$ is not even defined at $x_0 = 0$."
  },
  "k3_zwischenwertsatz": {
    title: "Theorem 3.58: The intermediate value theorem (IVT / Bolzano)",
    category: "3.6 The intermediate value theorem",
    front: "State the <b>intermediate value theorem (IVT)</b> for continuous real-valued functions.",
    back: "Let $I \\subseteq \\mathbb{R}$ be an <b>interval</b> and $f: I \\to \\mathbb{R}$ a <b>continuous function</b>. Let $a, b \\in I$ with $a < b$.<br>For every $c \\in \\mathbb{R}$ lying between $f(a)$ and $f(b)$ (i.e. $f(a) \\le c \\le f(b)$ or $f(b) \\le c \\le f(a)$), there exists at least one $x_0 \\in [a, b]$ with:<br>$$f(x_0) = c$$",
    meta: "Script: §3.6, Theorem 3.58",
    explanation: "<b>Geometric meaning:</b><br>The graph of a continuous function on an interval has no holes or jumps. It must cross every horizontal line $y = c$ between $f(a)$ and $f(b)$ at least once.<br><i>Note:</i> The IVT is equivalent to the completeness axiom of $\\mathbb{R}$!<br><br><svg viewBox='0 0 300 140' style='width:100%; max-width:300px; display:block; margin:10px auto;'><line x1='30' y1='120' x2='270' y2='120' stroke='#333' stroke-width='1.5'/><line x1='30' y1='20' x2='30' y2='120' stroke='#333' stroke-width='1.5'/><line x1='30' y1='65' x2='270' y2='65' stroke='#d9534f' stroke-dasharray='4'/><path d='M 50 100 Q 120 10 160 70 T 250 30' fill='none' stroke='#007bff' stroke-width='2.5'/><circle cx='50' cy='100' r='4' fill='#333'/><circle cx='250' cy='30' r='4' fill='#333'/><circle cx='100' cy='65' r='4' fill='#d9534f'/><circle cx='165' cy='65' r='4' fill='#d9534f'/><line x1='100' y1='65' x2='100' y2='120' stroke='#d9534f' stroke-dasharray='2'/><text x='45' y='135' font-size='10'>a</text><text x='245' y='135' font-size='10'>b</text><text x='95' y='135' font-size='10' fill='#d9534f'>x₀</text><text x='15' y='70' font-size='10' fill='#d9534f'>c</text></svg>",
    example: "<b>Existence of roots:</b> $f(x) = x^2 - 2$ on $[1, 2]$. Since $f(1) = -1 < 0$ and $f(2) = 2 > 0$, the IVT gives an $x_0 \\in (1, 2)$ with $f(x_0) = 0$, namely $x_0 = \\sqrt{2}$.",
    counterexample: "<b>Why continuity matters:</b> $f: [-1, 1] \\to \\mathbb{R}, f(x) = \\begin{cases} -1 & x < 0 \\\\ 1 & x \\ge 0 \\end{cases}$. Here there is no $x$ with $f(x) = 0$, although $0$ lies between $f(-1)=-1$ and $f(1)=1$!"
  },
  "k3_beweis_zws": {
    title: "Proof blueprint: Intermediate value theorem",
    category: "3.6 The intermediate value theorem",
    front: "Sketch the proof of the intermediate value theorem (Theorem 3.58) using the supremum principle.",
    back: "<b>Proof scheme (WLOG $f(a) < c < f(b)$):</b><br>1. Define the set $M = \\{t \\in [a, b] \\mid f(t) \\le c\\}$.<br>2. $M$ is non-empty ($a \\in M$) and bounded above by $b$.<br>3. By the completeness axiom, $x_0 = \\sup M \\in [a, b]$ exists.<br>4. Show $f(x_0) = c$ by ruling out the cases $f(x_0) < c$ and $f(x_0) > c$ using continuity:<br>&nbsp;&nbsp;• If $f(x_0) < c$, choose $\\varepsilon = c - f(x_0) > 0$. By continuity there would be a $\\delta > 0$ with $f(x) < c$ for $x \\in (x_0, x_0+\\delta)$, contradicting $x_0 = \\sup M$.<br>&nbsp;&nbsp;• If $f(x_0) > c$, there would similarly be a $\\delta > 0$ with $f(x) > c$ on $(x_0-\\delta, x_0]$, contradicting that $x_0$ is the least upper bound.",
    meta: "Script: §3.6, proof of Theorem 3.58",
    explanation: "The proof shows a basic technique of analysis: the point we are looking for is constructed as the supremum/infimum of a suitable set, and equality is verified using $\\varepsilon$-neighbourhoods and continuity.",
    example: "Alternatively, compare the nested intervals: $I_0 = [a,b]$, always halve and choose the subinterval whose endpoints have a sign change of $f(x)-c$.",
    counterexample: "The IVT fails in $\\mathbb{Q}$: $f: \\mathbb{Q} \\cap [1, 2] \\to \\mathbb{Q}, f(x) = x^2 - 2$ has no zero in $\\mathbb{Q}$, because $\\sqrt{2} \\notin \\mathbb{Q}$."
  },
  "k3_nullstellen_polynome": {
    title: "Exercise 3.60: Zeros of polynomials of odd degree",
    category: "3.6 The intermediate value theorem",
    front: "Use the intermediate value theorem to show that every real polynomial of <b>odd degree</b> has at least one real zero.",
    back: "Let $p(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_0$ with $a_n \\neq 0$ and $n$ odd.<br>WLOG $a_n > 0$. Factoring out $x^n$ shows:<br>$$\\lim_{x \\to +\\infty} p(x) = +\\infty \\quad \\text{and} \\quad \\lim_{x \\to -\\infty} p(x) = -\\infty$$\nHence there exist $a < 0 < b$ with $p(a) < 0$ and $p(b) > 0$.<br>Since $p$ is a polynomial and hence continuous, the intermediate value theorem gives an $x_0 \\in (a, b)$ with $p(x_0) = 0$.",
    meta: "Script: §3.6, Exercise 3.60",
    explanation: "The behaviour at infinity is dominated by the leading term $a_n x^n$. Since $n$ is odd, $x^n$ changes sign between $-\\infty$ and $+\\infty$.",
    example: "$p(x) = x^3 - x - 1$. We have $p(1) = -1 < 0$ and $p(2) = 5 > 0$. By the IVT there is at least one zero in $(1, 2)$.",
    counterexample: "<b>Even degree:</b> $p(x) = x^2 + 1$ is always $\\ge 1 > 0$ for all $x \\in \\mathbb{R}$ and has no real zero."
  },
  "k3_injektiv_monoton": {
    title: "Exercise 3.61: Injectivity and monotonicity of continuous functions",
    category: "3.6 The intermediate value theorem",
    front: "What is the relationship between <b>injectivity</b> and <b>monotonicity</b> for continuous functions on an interval?",
    back: "Let $I \\subseteq \\mathbb{R}$ be an interval and $f: I \\to \\mathbb{R}$ a continuous function.<br>Then:<br>$$f \\text{ is injective} \\iff f \\text{ is strictly monotone (increasing or decreasing)}$$",
    meta: "Script: §3.6, Exercise 3.61",
    explanation: "<b>Proof idea:</b><br>• Strictly monotone $\\implies$ injective is trivial.<br>• Injective $\\implies$ strictly monotone: if three points $x_1 < x_2 < x_3$ were such that $f(x_2)$ does not lie between $f(x_1)$ and $f(x_3)$, the intermediate value theorem would give a value taken twice, contradicting injectivity.",
    example: "$f(x) = x^3$ on $\\mathbb{R}$ is continuous and injective, hence strictly monotonically increasing.",
    counterexample: "This statement fails on non-intervals! $f: [0, 1] \\cup [2, 3] \\to \\mathbb{R}$ with $f(x) = x$ on $[0,1]$ and $f(x) = 5-x$ on $[2,3]$ is continuous and injective, but neither monotonically increasing nor decreasing."
  },
  "k3_umkehrsatz": {
    title: "Theorem 3.62: The inverse function theorem (for monotone functions)",
    category: "3.7 The inverse function theorem",
    front: "State the <b>theorem on the inverse function</b> for continuous, strictly monotone functions.",
    back: "Let $I \\subseteq \\mathbb{R}$ be an interval and $f: I \\to \\mathbb{R}$ a <b>continuous, strictly monotone</b> function.<br>Then:<br>1. The image $J = f(I) \\subseteq \\mathbb{R}$ is again an <b>interval</b>.<br>2. The inverse function $f^{-1}: J \\to I$ exists, is <b>bijective</b>, <b>strictly monotone</b> (with the same monotonicity as $f$) and <b>continuous</b>.<br>3. If $I = [a, b]$, then $J = [f(a), f(b)]$ (if $f$ is increasing) or $J = [f(b), f(a)]$ (if $f$ is decreasing).",
    meta: "Script: §3.7, Theorem 3.62",
    explanation: "The inverse function theorem guarantees that when you invert a continuous monotone function on an interval, neither continuity nor the interval property is lost.",
    example: "$f: [0, \\infty) \\to [0, \\infty), f(x) = x^n$ is continuous and strictly monotonically increasing. Its inverse $f^{-1}(y) = \\sqrt[n]{y}$ is continuous and strictly monotonically increasing on $[0, \\infty)$.",
    counterexample: "Without the interval property of the domain, the inverse function can be discontinuous! Example: $f: [0, 1) \\cup [2, 3] \\to [0, 2]$, where the inverse function jumps at $f(2)$."
  },
  "k3_beweis_umkehrsatz": {
    title: "Proof blueprint: Continuity of the inverse function",
    category: "3.7 The inverse function theorem",
    front: "In the inverse function theorem (Theorem 3.62), how do you show the <b>continuity of the inverse $f^{-1}$</b> at an interior point $y_0 = f(x_0)$?",
    back: "<b>Proof sketch (for $f$ strictly monotonically increasing):</b><br>1. For given $\\varepsilon > 0$, choose points $x_- = x_0 - \\varepsilon$ and $x_+ = x_0 + \\varepsilon$ in $I$.<br>2. By the strict monotonicity of $f$, the images satisfy:<br>$$y_- = f(x_-) < y_0 < f(x_+) = y_+$$<br>3. Choose $\\delta = \\min\\{y_0 - y_-, y_+ - y_0\\} > 0$.<br>4. For all $y \\in f(I)$ with $|y - y_0| < \\delta$ we have $y_- < y < y_+$.<br>5. Applying the strictly increasing inverse $f^{-1}$ gives:<br>$$x_0 - \\varepsilon = x_- < f^{-1}(y) < x_+ = x_0 + \\varepsilon \\implies |f^{-1}(y) - f^{-1}(y_0)| < \\varepsilon$$",
    meta: "Script: §3.7, proof of Theorem 3.62",
    explanation: "Strict monotonicity turns an $\\varepsilon$-interval around $x_0$ in the input space directly into an open $\\delta$-interval around $y_0$ in the output space.",
    example: "Application to $y = x^2$: an $\\varepsilon$-strip around $x_0 = 2$ is bounded by $f(2-\\varepsilon)$ and $f(2+\\varepsilon)$, which gives the $\\delta$ for $y_0 = 4$.",
    counterexample: "If $f$ is not strictly monotone, then $f$ is not injective and $f^{-1}$ does not exist as a function in the first place."
  },
  "k3_wurzeln_potenzen": {
    title: "Application: $n$-th roots and rational powers",
    category: "3.7 The inverse function theorem",
    front: "How are general rational powers $x^{m/n}$ defined on $[0, \\infty)$, and what properties do they have?",
    back: "1. By the inverse function theorem, for each $n \\in \\mathbb{N}$ the power function $x \\mapsto x^n$ on $[0, \\infty)$ has a continuous, strictly monotone inverse:<br>$$x \\in [0, \\infty) \\mapsto \\sqrt[n]{x} \\in [0, \\infty)$$<br>2. For $x \\in [0, \\infty)$ and $r = \\frac{m}{n} \\in \\mathbb{Q}_{>0}$ one defines:<br>$$x^{m/n} := \\sqrt[n]{x^m} = (\\sqrt[n]{x})^m$$<br>3. These power functions are continuous and satisfy all power laws (e.g. $x^{r_1+r_2} = x^{r_1} x^{r_2}$).",
    meta: "Script: §3.7, Important Exercise 3.64",
    explanation: "The inverse function theorem gives the exact mathematical foundation for root expressions and rational exponents, with no algebraic gaps.",
    example: "$f(x) = x^{2/3} = \\sqrt[3]{x^2}$ is continuous on all of $[0, \\infty)$, as a composition of continuous functions.",
    counterexample: "For negative bases $x < 0$, fractional powers are in general not well defined over the reals (e.g. $(-1)^{1/2} = \\sqrt{-1} \\notin \\mathbb{R}$)."
  },
  "k3_wurzeln_irrational": {
    title: "Lemma 3.65: Irrationality of roots of natural numbers",
    category: "3.7 The inverse function theorem",
    front: "When is the $m$-th root $\\sqrt[m]{k}$ of a natural number $k \\in \\mathbb{N}$ rational?",
    back: "Let $m, k \\in \\mathbb{N}$.<br>The $m$-th root $\\sqrt[m]{k}$ is rational if and only if it is an <b>integer</b>:<br>$$\\sqrt[m]{k} \\in \\mathbb{Q} \\iff \\sqrt[m]{k} \\in \\mathbb{N}$$<br><i>(Equivalently: every prime factor of $k$ appears with an exponent that is a multiple of $m$.)</i>",
    meta: "Script: §3.7.1, Lemma 3.65 & Exercise 3.66",
    explanation: "<b>Proof blueprint:</b><br>1. Suppose $\\sqrt[m]{k} = \\frac{p}{q}$ as a reduced fraction ($p, q \\in \\mathbb{N}$, $\\gcd(p, q) = 1$).<br>2. Raising to the power m gives $k \\cdot q^m = p^m$.<br>3. If $q > 1$, every prime factor of $q$ also divides $p^m$ and hence $p$, contradicting $\\gcd(p,q)=1$.<br>4. Therefore $q = 1$, so $\\sqrt[m]{k} = p \\in \\mathbb{N}$.",
    example: "• $\\sqrt{2} \\notin \\mathbb{Q}$, since $2$ is not a perfect square ($2 \\neq n^2$).<br>• $\\sqrt[3]{8} = 2 \\in \\mathbb{Q}$, since $8 = 2^3$.",
    counterexample: "$\\sqrt{3}$ is not rational, although $3$ is a natural number, because $3$ is not the square of a natural number."
  },
  "k3_beschraenkt_kompakt": {
    title: "Theorem 3.67: Boundedness on compact intervals",
    category: "3.8 Continuous functions on compact intervals",
    front: "State the theorem on the <b>boundedness of continuous functions</b> on compact intervals.",
    back: "Let $a, b \\in \\mathbb{R}$ with $a < b$, and let $f: [a, b] \\to \\mathbb{R}$ (or $\\mathbb{C}$) be a <b>continuous function</b> on the compact interval $[a, b]$.<br>Then $f$ is <b>bounded</b>, i.e. there exists an $M \\in \\mathbb{R}$ with:<br>$$\\forall x \\in [a, b]: |f(x)| \\le M$$",
    meta: "Script: §3.8.1, Theorem 3.67",
    explanation: "An interval $[a,b]$ is <b>compact</b> if it is both <i>bounded</i> and <i>closed</i>. Both properties are indispensable for the theorem to hold!",
    example: "$f(x) = x^3 - 3x$ on $[-2, 2]$ is continuous on a compact domain, hence bounded (e.g. by $M = 10$).",
    counterexample: "<b>Closedness violated:</b> $f(x) = \\frac{1}{x}$ on $(0, 1]$ is continuous but unbounded.<br><b>Boundedness of the interval violated:</b> $f(x) = x$ on $[0, \\infty)$ is continuous but unbounded."
  },
  "k3_beweis_beschraenkt_kompakt": {
    title: "Proof blueprint: Boundedness on compact intervals",
    category: "3.8 Continuous functions on compact intervals",
    front: "Sketch the proof by contradiction of Theorem 3.67 (boundedness of continuous functions on $[a, b]$).",
    back: "<b>Proof scheme (via nested intervals / Bolzano-Weierstrass):</b><br>1. <b>Assume for contradiction</b> that $f$ is unbounded on $I_0 = [a, b]$.<br>2. Halve $I_0$ into two subintervals. On at least one half, $f$ must be unbounded; call it $I_1$.<br>3. Repeated halving gives a nested sequence of intervals $(I_n)_{n \\in \\mathbb{N}}$ with lengths $|I_n| = \\frac{b-a}{2^n} \\to 0$.<br>4. By the nested interval principle there is a unique common point $x_0 \\in \\bigcap_{n=0}^\\infty I_n \\in [a, b]$.<br>5. Since $f$ is continuous at $x_0$, there is a $\\delta > 0$ with $|f(x)| \\le |f(x_0)| + 1$ for all $x \\in (x_0-\\delta, x_0+\\delta)$.<br>6. For large enough $n$, however, $I_n \\subset (x_0-\\delta, x_0+\\delta)$, which contradicts the unboundedness of $f$ on $I_n$!",
    meta: "Script: §3.8.1, proof of Theorem 3.67",
    explanation: "Closedness ensures that the limit point $x_0$ lies in the interval $[a,b]$. Boundedness of the interval forces the lengths of the nested intervals to converge to 0.",
    example: "The same technique (nested intervals) is used in the script for the IVT (Theorem 3.58) and for Heine's theorem (Theorem 3.75).",
    counterexample: "On $(0,1]$, the nested intervals for $f(x)=1/x$ converge to $x_0 = 0 \\notin (0,1]$, so the continuity step fails."
  },
  "k3_satz_vom_maximum": {
    title: "Corollary 3.69: Maximum and minimum theorem (Weierstrass)",
    category: "3.8 Continuous functions on compact intervals",
    front: "State the <b>maximum and minimum theorem</b> (Weierstrass extreme value theorem) on compact intervals.",
    back: "Let $f: [a, b] \\to \\mathbb{R}$ be a <b>continuous function</b> on a compact interval $[a, b]$ ($a < b$).<br>Then $f$ attains both its <b>maximum</b> and its <b>minimum</b>. That is, there exist $x_{\\min}, x_{\\max} \\in [a, b]$ with:<br>$$f(x_{\\min}) \\le f(x) \\le f(x_{\\max}) \\quad \\text{for all } x \\in [a, b]$$",
    meta: "Script: §3.8.2, Corollary 3.69",
    explanation: "<b>Proof blueprint:</b><br>1. By Theorem 3.67, $f([a,b])$ is bounded, so $S = \\sup f([a,b]) \\in \\mathbb{R}$ exists.<br>2. Assume for contradiction that $f$ never attains the maximum ($f(x) < S$ for all $x \\in [a,b]$).<br>3. Consider $g(x) = \\frac{1}{S - f(x)}$. Then $g$ is continuous on $[a,b]$ and positive.<br>4. By Theorem 3.67, $g$ is bounded by some $M > 0$, so $\\frac{1}{S - f(x)} \\le M \\implies f(x) \\le S - \\frac{1}{M}$ for all $x$.<br>5. This contradicts $S = \\sup f([a,b])$, since $S - \\frac{1}{M} < S$ would be a smaller upper bound!",
    example: "$f(x) = x^2 - x$ on $[0, 2]$. $f$ attains its minimum $-1/4$ at $x = 1/2$ and its maximum $2$ at $x = 2$.",
    counterexample: "<b>Open interval:</b> $f(x) = x$ on $(0, 1)$ is continuous, but it attains neither a minimum nor a maximum on $(0,1)$ (the supremum 1 and infimum 0 lie outside)."
  },
  "k3_def_gleichm_stetig": {
    title: "Definition 3.71: Uniform continuity",
    category: "3.8 Continuous functions on compact intervals",
    front: "Define <b>uniform continuity</b> for a function $f: D \\to \\mathbb{R}$ ($D \\subseteq \\mathbb{R}$), and explain the difference from ordinary continuity.",
    back: "A function $f: D \\to \\mathbb{R}$ is called <b>uniformly continuous</b> if:<br>$$\\forall \\varepsilon > 0 \\; \\exists \\delta > 0 \\; \\forall x, y \\in D: |x - y| < \\delta \\implies |f(x) - f(y)| < \\varepsilon$$<br><b>Difference from pointwise continuity:</b><br>• Pointwise continuity: $\\delta = \\delta(\\varepsilon, x_0)$ may depend on the point $x_0$.<br>• Uniform continuity: $\\delta = \\delta(\\varepsilon)$ is <b>universal</b> for the whole domain $D$ (depends ONLY on $\\varepsilon$).",
    meta: "Script: §3.8.3, Definition 3.71",
    explanation: "With uniform continuity, you can slide a 'universal crosshair' of width $2\\delta$ and height $2\\varepsilon$ along the entire graph, without the outputs ever swinging further apart than the height allows.<br><br><svg viewBox='0 0 300 130' style='width:100%; max-width:300px; display:block; margin:10px auto;'><rect x='20' y='15' width='260' height='100' fill='#f8f9fa' stroke='#ccc'/><path d='M 30 100 Q 150 20 270 90' fill='none' stroke='#007bff' stroke-width='2.5'/><rect x='80' y='45' width='50' height='50' fill='rgba(40,167,69,0.2)' stroke='#28a745' stroke-dasharray='3'/><rect x='190' y='50' width='50' height='50' fill='rgba(40,167,69,0.2)' stroke='#28a745' stroke-dasharray='3'/><text x='85' y='40' font-size='10' fill='#28a745'>δ constant!</text><text x='195' y='45' font-size='10' fill='#28a745'>δ constant!</text></svg>",
    example: "The linear function $f(x) = ax$ on $\\mathbb{R}$ is uniformly continuous: choose $\\delta = \\frac{\\varepsilon}{|a|}$, completely independent of $x$.",
    counterexample: "<b>Not uniformly continuous:</b> $f(x) = x^2$ on $\\mathbb{R}$. The further right you go, the steeper the function becomes, so for fixed $\\varepsilon$ the $\\delta$ would have to become arbitrarily small."
  },
  "k3_satz_von_heine": {
    title: "Theorem 3.75: Heine's theorem on uniform continuity",
    category: "3.8 Continuous functions on compact intervals",
    front: "State <b>Heine's theorem</b> on uniform continuity.",
    back: "Let $[a, b]$ be a <b>compact interval</b> ($a < b$) and $f: [a, b] \\to \\mathbb{R}$ (or $\\mathbb{C}$) a <b>continuous function</b>.<br>Then $f$ is <b>uniformly continuous</b> on $[a, b]$.",
    meta: "Script: §3.8.3, Theorem 3.75",
    explanation: "On compact intervals, continuity and uniform continuity coincide: every continuous function is automatically uniformly continuous!<br><b>Proof idea:</b> Assume the opposite holds $\\implies$ construct two sequences $(x_n), (y_n)$ with $|x_n - y_n| < 1/n$ but $|f(x_n) - f(y_n)| \\ge \\varepsilon$ $\\implies$ contradiction via nested intervals / Bolzano-Weierstrass.",
    example: "$f(x) = \\sin(x^2)$ is uniformly continuous on $[0, 100]$ by Heine's theorem.",
    counterexample: "<b>False on non-compact sets:</b><br>• $f(x) = \\frac{1}{x}$ is continuous on $(0, 1)$, but <i>not</i> uniformly continuous.<br>• $f(x) = x^2$ is continuous on $\\mathbb{R}$, but <i>not</i> uniformly continuous."
  },
  "k3_beispiele_gl_stetig": {
    title: "Exercises 3.73 & 3.76: Analysing uniform continuity",
    category: "3.8 Continuous functions on compact intervals",
    front: "Investigate the functions $f(x) = x^2$ and $g(x) = \\frac{1}{x}$ on various domains with respect to uniform continuity.",
    back: "1. <b>$f(x) = x^2$:</b><br>&nbsp;&nbsp;• On $[0, 1]$ <b>uniformly continuous</b> (since $[0, 1]$ is compact, Heine's theorem).<br>&nbsp;&nbsp;• On $\\mathbb{R}$ <b>not uniformly continuous</b>: for $x_n = n + \\frac{1}{n}$ and $y_n = n$ we have $|x_n - y_n| = \\frac{1}{n} \\to 0$, but $|f(x_n) - f(y_n)| = 2 + \\frac{1}{n^2} \\ge 2$.<br><br>2. <b>$g(x) = \\frac{1}{x}$:</b><br>&nbsp;&nbsp;• On $[1, \\infty)$ <b>uniformly continuous</b> (since $|g(x) - g(y)| = \\frac{|x-y|}{xy} \\le |x-y|$, choose $\\delta = \\varepsilon$).<br>&nbsp;&nbsp;• On $(0, 1)$ <b>not uniformly continuous</b>: near $0$ the slope grows without bound.",
    meta: "Script: §3.8.3, Exercises 3.73 & 3.76",
    explanation: "For uniform continuity on unbounded intervals, the slope of the function must not become arbitrarily large.",
    example: "Every bounded continuous function with bounded derivative is uniformly continuous.",
    counterexample: "$f(x) = \\sin(x^2)$ on $\\mathbb{R}$ is bounded and continuous, but <i>not</i> uniformly continuous, because the oscillations become arbitrarily fast as $x \\to \\infty$."
  },
  "k3_lipschitz_stetig": {
    title: "Exercise 3.78: Lipschitz continuity",
    category: "3.8 Continuous functions on compact intervals",
    front: "Define <b>Lipschitz continuity</b> and place it in the hierarchy of continuity.",
    back: "A function $f: D \\to \\mathbb{R}$ is called <b>Lipschitz continuous</b> on $D \\subseteq \\mathbb{R}$ if there is a constant $L \\ge 0$ (the Lipschitz constant) such that for all $x, y \\in D$:<br>$$|f(x) - f(y)| \\le L |x - y|$$<br><b>Hierarchy of continuity:</b><br>$$\\text{Lipschitz continuous} \\implies \\text{uniformly continuous} \\implies \\text{continuous}$$",
    meta: "Script: §3.8.3, Exercise 3.78",
    explanation: "<b>Proof sketch for Lipschitz $\\implies$ uniformly continuous:</b><br>Let $\\varepsilon > 0$. Choose $\\delta = \\frac{\\varepsilon}{L}$ (for $L > 0$). Then for all $|x-y| < \\delta$ we have $|f(x) - f(y)| \\le L |x-y| < L \\cdot \\frac{\\varepsilon}{L} = \\varepsilon$.",
    example: "$f(x) = \\sin(x)$ on $\\mathbb{R}$ is Lipschitz continuous with $L = 1$, since $|\\sin(x) - \\sin(y)| \\le |x - y|$.",
    counterexample: "<b>Uniformly continuous, but NOT Lipschitz continuous:</b> $f(x) = \\sqrt{x}$ on $[0, 1]$. By Heine's theorem $f$ is uniformly continuous. But $f$ is not Lipschitz continuous, because $\\frac{\\sqrt{x} - 0}{x - 0} = \\frac{1}{\\sqrt{x}} \\to \\infty$ as $x \\to 0^+$."
  },
  "k3_bernoulli": {
    title: "Lemma 3.5: Bernoulli's inequality",
    category: "3.1 Sums and products",
    front: "What is <b>Bernoulli's inequality</b>?",
    back: "For all real numbers $a \\ge -1$ and $n \\in \\mathbb{N}_0$:\n$$(1 + a)^n \\ge 1 + na$$",
    meta: "Script: §3.1.2, Lemma 3.5",
    explanation: "This inequality is a fundamental tool for estimates in analysis and is typically proved by induction.",
    example: "For $a = 1$ and $n = 3$: $(1+1)^3 = 8 \\ge 1 + 3\\cdot 1 = 4$.",
    counterexample: "For $a < -1$ the inequality in general no longer holds. Example: $a = -4, n = 3$: $(1-4)^3 = -27$, which is <i>not</i> $\\ge 1 + 3(-4) = -11$."
  },
  "k3_geom_summe": {
    title: "Proposition 3.8: Geometric sum formula",
    category: "3.1 Sums and products",
    front: "What is the <b>geometric sum formula</b> for $q \\in \\mathbb{C}$?",
    back: "Let $n \\in \\mathbb{N}_0$ and $q \\in \\mathbb{C}$. Then:\n$$\\sum_{k=0}^n q^k = \\begin{cases} n+1 & \\text{if } q = 1 \\\\ \\frac{q^{n+1}-1}{q-1} & \\text{if } q \\neq 1 \\end{cases}$$",
    meta: "Script: §3.1, Proposition 3.8",
    explanation: "The proof works by induction, or more elegantly by a telescoping sum: multiplying $\\sum_{k=0}^n q^k$ by $(1-q)$ or $(q-1)$, all terms cancel except for two.",
    example: "For $q = 2$ and $n = 3$: $1 + 2 + 4 + 8 = 15$. Via the formula: $\\frac{2^4 - 1}{2-1} = \\frac{15}{1} = 15$.",
    counterexample: "Careful: for $q=1$ the denominator $q-1 = 0$. That is why this trivial case (a sum of $n+1$ ones) must be treated separately."
  },
  "k3_def_polynom": {
    title: "Definitions 3.11 & 3.13: Polynomial and polynomial function",
    category: "3.2 Polynomials",
    front: "Define a <b>polynomial function</b> and explain the difference from a <b>polynomial</b>.",
    back: "• A <b>polynomial function</b> on $\\mathbb{C}$ is a function $f: \\mathbb{C} \\to \\mathbb{C}, z \\mapsto \\sum_{k=0}^n a_k z^k$ (with $n \\in \\mathbb{N}_0$ and coefficients $a_k \\in \\mathbb{C}$).<br>• A <b>polynomial</b> over an arbitrary field $K$ is a <i>formal expression</i> $\\sum_{k=0}^n a_k T^k$ with an abstract variable $T$.<br>The largest $k$ with $a_k \\neq 0$ is called the <b>degree (deg)</b>. For the zero polynomial the degree is defined as $-\\infty$.",
    meta: "Script: §3.2, Definitions 3.11 & 3.13",
    explanation: "Over infinite fields (such as $\\mathbb{R}$ or $\\mathbb{C}$) the assignment between formal polynomials and polynomial functions is bijective (Proposition 3.15). Over finite fields this is not the case, which is why algebra strictly distinguishes between the formal expression and the map.",
    example: "$f(z) = z^2 - 1$ is a real (and complex) polynomial function of degree 2.",
    counterexample: "Counterexample to uniqueness over finite fields: the function $f(a) = a^3 + a + 1$ over $\\mathbb{F}_2$ has the same values as $g(a) = 1$, although the formal polynomials $T^3 + T + 1$ and $1$ are different!"
  },
  "k3_def_fakultaet": {
    title: "Definition 3.24: Factorial",
    category: "3.3 The factorial and the binomial theorem",
    front: "How is the <b>factorial</b> $n!$ defined?",
    back: "The function $n \\mapsto n!$ on $\\mathbb{N}_0$ is defined by:<br>$$0! = 1$$<br>$$n! = \\prod_{k=1}^n k \\quad \\text{for } n \\in \\mathbb{N}$$<br>In particular, the recursive formula holds: $(n+1)! = n! \\cdot (n+1)$.",
    meta: "Script: §3.3.1, Definition 3.24",
    explanation: "The factorial has a central combinatorial meaning: it gives the number of ways to arrange $n$ distinguishable objects in a row (permutations).",
    example: "$0! = 1$<br>$3! = 1 \\cdot 2 \\cdot 3 = 6$<br>$5! = 120$",
    counterexample: "The factorial must not be confused with Gauss's sum formula: $\\sum_{k=1}^n k$ adds the numbers, while $n!$ multiplies them. $n!$ grows much faster."
  },
  "k3_binomischer_lehrsatz": {
    title: "Theorem 3.28: Binomial theorem",
    category: "3.3 The factorial and the binomial theorem",
    front: "State the <b>binomial theorem</b>.",
    back: "For all $w, z \\in \\mathbb{C}$ and $n \\in \\mathbb{N}_0$:\n$$(w + z)^n = \\sum_{k=0}^n \\binom{n}{k} w^{n-k} z^k$$",
    meta: "Script: §3.3.3, Theorem 3.28",
    explanation: "The theorem generalises the familiar binomial formulas for squares and cubes to arbitrary natural powers $n$. The proof is usually by induction, using the addition rule for binomial coefficients in Pascal's triangle.",
    example: "For $n=2$: $(w+z)^2 = \\binom{2}{0}w^2 z^0 + \\binom{2}{1}w^1 z^1 + \\binom{2}{2}w^0 z^2 = w^2 + 2wz + z^2$.",
    counterexample: "The identity $(w+z)^n = w^n + z^n$ (the so-called \"Freshman's Dream\") is in general false over $\\mathbb{R}$ and $\\mathbb{C}$ (except for $n=1$), but it can hold in fields of prime characteristic $p$ for $n=p$."
  },
  "k3_uebung_3_4": {
    title: "Important Exercise 3.4: Generalised triangle inequality",
    category: "3.1 Sums and products",
    front: "What is the <b>generalised triangle inequality</b> for finitely many complex numbers, and how is it proved?",
    back: "For all numbers $a_1, \\dots, a_n \\in \\mathbb{C}$:<br>$$\\left| \\sum_{i=1}^n a_i \\right| \\le \\sum_{i=1}^n |a_i|$$<br><b>Proof:</b> Induction on $n$: the case $n=1$ is trivial, and the induction step follows from the ordinary triangle inequality:<br>$$\\left|\\sum_{i=1}^{n+1} a_i\\right| \\le \\left|\\sum_{i=1}^{n} a_i\\right| + |a_{n+1}| \\le \\sum_{i=1}^{n} |a_i| + |a_{n+1}|.$$",
    meta: "Script: §3.1.1, Important Exercise 3.4",
    explanation: "The pattern 'lift a two-term statement to $n$ summands by induction' is a standard method. The inequality is everywhere: Chapter 4 calls the triangle inequality for integrals $|\\int f| \\le \\int |f|$ its 'continuous version'.",
    example: "$|1 + i + (-2)| = |{-1} + i| = \\sqrt{2} \\le |1| + |i| + |-2| = 4$.",
    counterexample: "<b>1.</b> Equality does not hold in general: for $a_1 = 1, a_2 = -1$ the left side is $0$, the right side $2$ (cancellation!).<br><b>2.</b> The 'reverse' version $|\\sum a_i| \\ge \\sum |a_i|$ is false. A sum can only be bounded from below with $\\big|\\,|a| - |b|\\,\\big| \\le |a+b|$ (two summands)."
  },
  "k3_prop_3_15": {
    title: "Proposition 3.15: Growth of polynomial functions",
    category: "3.2 Polynomials",
    front: "What does <b>Proposition 3.15</b> say about the growth of polynomial functions and the uniqueness of the coefficients?",
    back: "Let $f(T) \\in \\mathbb{C}[T]$ be a <i>non-constant</i> polynomial. Then for every $M > 0$ there is an $R \\ge 1$ such that for all $z \\in \\mathbb{C}$ with $|z| \\ge R$ we also have $|f(z)| \\ge M$.<br><br><b>In particular:</b> the assignment polynomial $\\mapsto$ polynomial function is <b>bijective</b> (likewise for $\\mathbb{R}[T]$). Therefore analysis from now on does not distinguish between polynomial and polynomial function.",
    meta: "Script: §3.2, Proposition 3.15",
    explanation: "<b>Proof idea:</b> Write $f(T) = a_nT^n + q(T)$ with $\\deg(q) < n$. For $|z| \\ge 1$, $|q(z)|$ grows at most like $C|z|^{n-1}$, so the leading term dominates: $|f(z)| \\ge |a_n||z|^n - C|z|^{n-1} \\to \\infty$. Injectivity follows: if two polynomials agree as functions, their difference is a bounded polynomial function (constant zero on all of $\\mathbb{C}$), hence the zero polynomial.",
    example: "$f(z) = z^2$: for $M = 100$ choose $R = 10$; for $|z| \\ge 10$ we have $|f(z)| = |z|^2 \\ge 100$. 'Non-constant polynomials become large when $|z|$ is large.'",
    counterexample: "<b>1.</b> For constant polynomials the growth statement is false: $f = 5$ stays bounded.<br><b>2.</b> Over <i>finite</i> fields the bijectivity fails: over $\\mathbb{F}_2$, $T^2 + T$ and $0$ define the same function (Example 3.14). Identifying polynomial with polynomial function is a privilege of infinite fields."
  },
  "k3_uebung_3_17": {
    title: "Important Exercise 3.17: Polynomial division (division with remainder)",
    category: "3.2 Polynomials",
    front: "What is <b>division with remainder</b> for polynomials, and what does it mean for rational functions?",
    back: "If $d$ is a polynomial different from zero, then for every polynomial $f$ there are two <b>uniquely determined</b> polynomials $q, r$ with<br>$$f = q \\cdot d + r \\quad \\text{and} \\quad \\deg(r) < \\deg(d).$$<br><b>For rational functions:</b> $\\frac{f(z)}{d(z)} = q(z) + \\frac{r(z)}{d(z)}$ on $\\mathbb{C} \\setminus \\{z \\mid d(z) = 0\\}$: the 'whole part' $q$ and a remainder fraction with a smaller numerator degree.",
    meta: "Script: §3.2.1, Example 3.16 & Important Exercise 3.17",
    explanation: "The method is modelled on written division of numbers (Example 3.16 works out $f(x) = 3x^4 - 2x^2 + 5$ divided by $d(x) = x^2 + 1$): you repeatedly eliminate the highest term of $f$ with a suitable multiple of $d$. The analogy with Theorem 2.31 (division with remainder in $\\mathbb{N}$) is no accident: the degree takes the role of the absolute value.",
    example: "$f(x) = 3x^4 - 2x^2 + 5$, $d(x) = x^2 + 1$: division gives $q(x) = 3x^2 - 5$ and $r(x) = 10$, so $3x^4 - 2x^2 + 5 = (3x^2 - 5)(x^2 + 1) + 10$.",
    counterexample: "<b>1.</b> $d = 0$ is excluded: otherwise there would be no $q$ with $f = q \\cdot 0 + r$ for $f \\neq r$.<br><b>2.</b> Without the degree condition $\\deg(r) < \\deg(d)$ the decomposition would not be unique: $x^2 = x \\cdot x + 0 = (x-1) \\cdot x + x$ would both be 'admissible'."
  },
  "k3_uebung_3_19": {
    title: "Important Exercise 3.19: Zeros and multiplicity",
    category: "3.2 Polynomials",
    front: "What is the relationship between <b>zeros</b> and <b>linear factors</b>, and how many zeros can a polynomial of degree $n$ have?",
    back: "For $f(T) \\in \\mathbb{C}[T]$ and $z \\in \\mathbb{C}$:<br>$$(T - z) \\text{ divides } f \\iff f(z) = 0.$$<br><b>Consequence:</b> A polynomial $f \\neq 0$ of degree $n$ has <b>at most $n$ distinct zeros</b> in $\\mathbb{C}$.<br><br><b>Multiplicity:</b> A zero $z$ has multiplicity $k \\in \\mathbb{N}$ if $(T-z)^k$ divides the polynomial $f$, but $(T-z)^{k+1}$ does not.",
    meta: "Script: §3.2.2, Important Exercise 3.19",
    explanation: "<b>Proof idea:</b> Division with remainder by $d = T - z$ gives $f = q \\cdot (T-z) + r$ with $\\deg(r) < 1$, so $r$ is constant; substituting $z$ shows $r = f(z)$. Each zero thus 'uses up' one linear factor and lowers the degree by 1, so more than $n$ zeros are impossible. (Exercise 3.18: using roots one shows that every quadratic polynomial over $\\mathbb{C}$ even splits into linear factors, a special case of the fundamental theorem of algebra.)",
    example: "$f(T) = T^2 - 2T + 1 = (T-1)^2$: the zero $z = 1$ has multiplicity $2$. $f(T) = T^3 - T = T(T-1)(T+1)$ has the maximal possible $3$ distinct zeros.",
    counterexample: "<b>1.</b> For the zero polynomial $f = 0$ the bound on zeros is meaningless: <i>every</i> number is a zero, which is why the assumption $f \\neq 0$ is needed.<br><b>2.</b> 'At most $n$' does not mean 'exactly $n$' over $\\mathbb{R}$: $x^2 + 1$ has degree 2 and <i>no</i> real zero (only $\\pm i$ over $\\mathbb{C}$)."
  },
  "k3_uebung_3_20": {
    title: "Important Exercise 3.20: Comparing coefficients & interpolation",
    category: "3.2 Polynomials",
    front: "What does <b>comparing coefficients</b> (Exercise 3.20) say, and what follows for <b>Lagrange interpolation</b>?",
    back: "<b>Comparing coefficients:</b> Let $f, g$ be polynomials of degree $\\le n$. If $f$ and $g$ agree at <b>more than $n$ points</b>, then $f = g$ (same degrees and same coefficients).<br><br><b>Lagrange interpolation:</b> For $n$ distinct nodes $z_1, \\dots, z_n \\in \\mathbb{C}$ and arbitrary values $w_1, \\dots, w_n$ there is <b>exactly one</b> polynomial $f$ of degree $< n$ with $f(z_k) = w_k$ for all $k$.",
    meta: "Script: §3.2.2, Important Exercise 3.20 & Lagrange interpolation",
    explanation: "<b>Proof idea:</b> $f - g$ has degree $\\le n$ but more than $n$ zeros; by Exercise 3.19 it must be $f - g = 0$. The interpolation polynomial is constructed explicitly: $f(z) = \\sum_{k=1}^n w_k \\prod_{j \\neq k} \\frac{z - z_j}{z_k - z_j}$; uniqueness follows from comparing coefficients. Memory aid: <i>a polynomial of degree $n$ is completely determined by $n+1$ function values.</i>",
    example: "Through the 2 points $(0, 1)$ and $(1, 3)$ passes exactly one polynomial of degree $< 2$: the line $f(z) = 1 + 2z$.",
    counterexample: "<b>1.</b> With only $n$ agreement points the conclusion is false: $f(T) = T(T-1)$ and $g = 0$ (both of degree $\\le 2$) agree at the 2 points $0, 1$, but are different.<br><b>2.</b> Without a degree bound there are infinitely many interpolating polynomials: through $(0,1), (1,3)$ also pass $1 + 2z + z(z-1)$, $1 + 2z + 7z(z-1)$, ..."
  },
  "k3_binomialkoeffizienten": {
    title: "Proposition 3.26 & Exercise 3.27: Binomial coefficients",
    category: "3.3 The factorial and the binomial theorem",
    front: "Define the <b>binomial coefficient</b> $\\binom{n}{k}$, and state the <b>addition rule</b> (Pascal) and its <b>combinatorial meaning</b>.",
    back: "<b>Definition:</b> For $n, k \\in \\mathbb{N}_0$ with $0 \\le k \\le n$:<br>$$\\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}, \\qquad \\text{in particular } \\binom{n}{k} = \\binom{n}{n-k}.$$<br><b>Proposition 3.26 (addition rule):</b> $\\binom{n}{0} = \\binom{n}{n} = 1$ and for $1 \\le k \\le n$:<br>$$\\binom{n}{k-1} + \\binom{n}{k} = \\binom{n+1}{k}$$<br>In particular, $\\binom{n}{k} \\in \\mathbb{N}$.<br><br><b>Exercise 3.27:</b> $\\binom{n}{k}$ is the number of $k$-element subsets of $\\{1, \\dots, n\\}$.",
    meta: "Script: §3.3.2, Proposition 3.26 & Important Exercise 3.27 (cf. Lemma 3.25: $|S_n| = n!$)",
    explanation: "The addition rule is exactly the construction rule of <b>Pascal's triangle</b>: each entry is the sum of the two entries above it. It also proves, by induction, that $\\binom{n}{k}$ is an integer (which is not obvious from the formula!). Combinatorial reading of the formula: a $k$-element subset of $\\{1,\\dots,n+1\\}$ either contains the element $n+1$ (then $\\binom{n}{k-1}$ possibilities) or does not ($\\binom{n}{k}$ possibilities). The basis is Lemma 3.25: there are $n!$ permutations of $\\{1,\\dots,n\\}$.",
    example: "$\\binom{4}{2} = \\frac{24}{2 \\cdot 2} = 6$: the six 2-element subsets of $\\{1,2,3,4\\}$. Swiss lotto: $\\binom{42}{6} = 5'245'786$.",
    counterexample: "<b>1.</b> $\\binom{n}{k}$ is <i>not</i> $\\frac{n^k}{k!}$: the common mistake ignores that drawing is done without replacement: $\\binom{4}{2} = 6 \\neq \\frac{16}{2} = 8$.<br><b>2.</b> For $k > n$ the factorial formula is not defined; one then sets $\\binom{n}{k} = 0$ (there is no $k$-element subset of an $n$-element set), cf. the convention in Proposition 3.33."
  }
};
