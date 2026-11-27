/* ==========================================================================
   FLASHCARDS CHAPTER 8 (English): Differential calculus
   Analysis I - Prof. Dr. Manfred Einsiedler
   English translation of data_kapitel8.js. Formulas, HTML and ids are identical.
   ========================================================================== */

window.FLASHCARDS_EN_KAPITEL_8 = {
  "k8_def_8_1": {
    title: "Definition 8.1: Differentiability",
    category: "8.1 The derivative",
    front: "When is $f: D \\to \\mathbb{R}$ <b>differentiable</b> at $a$ (Definition 8.1), and what is the equivalent <b>Landau formulation</b>?",
    back: "Let $a \\in D$ be an accumulation point of $D$. $f$ is <b>differentiable at $a$</b> if the limit<br>$$f'(a) = \\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a} = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$$<br>exists (the <b>derivative</b> of $f$ at $a$; Leibniz notation $\\frac{\\mathrm{d}f}{\\mathrm{d}x}(a)$). One-sided derivatives $f'_+(a), f'_-(a)$ are defined via $x \\searrow a$ and $x \\nearrow a$ respectively.<br><br><b>Landau form (8.2):</b> Equivalently, as $x \\to a$:<br>$$f(x) = f(a) + f'(a)(x-a) + o(x-a)$$<br>The line $x \\mapsto f(a) + f'(a)(x-a)$ is the <b>tangent</b> (linear approximation) of $f$ at $a$.<br><br><b>In particular:</b> differentiable at $a$ $\\Rightarrow$ continuous at $a$.",
    meta: "Script: Definition 8.1 & equation (8.2), Section 8.1.1",
    explanation: "Geometrically, the secant through $(a, f(a))$ and $(x, f(x))$ has the difference quotient as its slope and becomes the tangent as $x \\to a$. The Landau form says more precisely: near $a$, $f$ is affine <i>up to an error that falls off faster than linearly</i> &ndash; exactly this view generalises to several dimensions. The derivative is a <b>local</b> operation: if $f$ and $g$ agree on a neighbourhood of $a$, then $f'(a) = g'(a)$. For complex-valued functions everything is defined analogously (real and imaginary parts).",
    example: "$f(x) = x^2$ at $a$: $\\frac{x^2 - a^2}{x - a} = x + a \\to 2a$, so $f'(a) = 2a$ &ndash; with no rules at all, straight from the definition.",
    counterexample: "<b>1.</b> $f(x) = |x|$ is continuous at $0$, but NOT differentiable there: $f'_+(0) = 1 \\neq -1 = f'_-(0)$ &ndash; the one-sided derivatives exist but do not agree (a kink).<br><b>2.</b> The converse of 'differentiable $\\Rightarrow$ continuous' is false &ndash; $|x|$ is the standard example; there are even functions that are continuous everywhere but differentiable nowhere."
  },
  "k8_bsp_8_3": {
    title: "Example 8.3 & Exercise 8.4: First derivatives",
    category: "8.1 The derivative",
    type: "beispiel",
    front: "Determine the derivatives of the basic functions: constants, the identity, $\\exp(\\alpha x)$, $\\sin$, $\\cos$ (Example 8.3, Exercise 8.4).",
    back: "&bull; Constant functions: derivative $= 0$; identity $x \\mapsto x$: derivative $= 1$.<br>&bull; $f(x) = \\exp(\\alpha x)$ (also $\\alpha \\in \\mathbb{C}$): $f'(a) = \\alpha\\exp(\\alpha a)$; in particular $\\exp' = \\exp$.<br>&bull; Using the limits $\\lim_{h\\to 0}\\frac{\\sin h}{h} = 1$ and $\\lim_{h\\to 0}\\frac{\\cos h - 1}{h} = 0$ together with the addition theorems:<br>$$\\sin'(x) = \\cos(x), \\qquad \\cos'(x) = -\\sin(x)$$",
    meta: "Script: Example 8.3 & Important Exercise 8.4",
    explanation: "For $\\exp$ the script works with the power series: $\\frac{\\exp(\\alpha h) - 1}{h} = \\sum_{\\ell \\ge 0} \\frac{\\alpha^{\\ell+1}}{(\\ell+1)!}h^\\ell \\to \\alpha$, since power series are continuous (Theorem 7.56). The formula $\\exp' = \\exp$ makes the exponential function the most important function of differential calculus &ndash; up to multiples, it is the only function with $y' = y$ (Lemma 8.60).",
    example: "$(e^{3x})' = 3e^{3x}$; $(\\sin x)'' = -\\sin x$ &ndash; sine and cosine solve the differential equation $y'' + y = 0$ (Example 8.65).",
    counterexample: "<b>1.</b> $(\\exp(x^2))' \\neq \\exp(x^2)$: the inner function requires the chain rule ($= 2x\\exp(x^2)$) &ndash; '$\\exp' = \\exp$' holds only for the bare exponential function.<br><b>2.</b> From $\\sin' = \\cos$ it does not follow that $\\sin'(2x) = \\cos(2x)$ is the derivative of $\\sin(2x)$: the correct statement is $(\\sin(2x))' = 2\\cos(2x)$ &ndash; keep the notations $f'(g(x))$ and $(f \\circ g)'(x)$ carefully apart!"
  },
  "k8_prop_8_5": {
    title: "Proposition 8.5 & Corollary 8.6: Sum and product rules, polynomials",
    category: "8.1 The derivative",
    type: "proposition",
    front: "What are the <b>sum and product rules</b> (Proposition 8.5), and what follows for <b>polynomials</b> (Corollary 8.6)?",
    back: "Let $f, g: D \\to \\mathbb{R}$ be differentiable at $a$. Then $f + g$ and $f \\cdot g$ are differentiable at $a$ with<br>$$(f+g)'(a) = f'(a) + g'(a)$$<br>$$(fg)'(a) = f'(a)g(a) + f(a)g'(a) \\quad \\text{(product rule)}$$<br>and $(\\alpha f)'(a) = \\alpha f'(a)$. The functions differentiable at $a$ thus form a subspace of $\\mathcal{F}(D)$, and differentiation is linear.<br><br><b>Corollary 8.6:</b> Polynomials are differentiable on all of $\\mathbb{R}$, with<br>$$(x^n)' = nx^{n-1} \\quad (n \\in \\mathbb{N})$$<br>&ndash; the derivative of a polynomial is again a polynomial.",
    meta: "Script: Proposition 8.5 & Corollary 8.6",
    explanation: "<b>Proof of the product rule</b> via the mixing trick $f(x)g(x) - f(a)g(a) = (f(x)-f(a))g(x) + f(a)(g(x)-g(a))$ and the continuity of $g$ at $a$ &ndash; the same pattern as for the limit laws (Prop. 5.30). $(x^n)' = nx^{n-1}$ then follows by induction from $x^{n+1} = x \\cdot x^n$.",
    example: "$(x^3 e^x)' = 3x^2 e^x + x^3 e^x$; $(5x^4 - 2x + 7)' = 20x^3 - 2$.",
    counterexample: "<b>1.</b> $(fg)' \\neq f'g'$: for $f = g = x$ one would otherwise get $(x^2)' = 1$, but the correct answer is $2x$ &ndash; the classic computing mistake.<br><b>2.</b> The converse of the sum rule is false: $f + g$ can be differentiable without $f, g$ being so &ndash; e.g. $f(x) = |x|$ and $g(x) = -|x|$ with $f + g = 0$."
  },
  "k8_satz_8_8": {
    title: "Theorem 8.8: The chain rule",
    category: "8.1 The derivative",
    type: "satz",
    front: "What is the <b>chain rule</b> (Theorem 8.8), and why may one not simply expand the difference quotient with $f(x) - f(x_0)$ in the proof?",
    back: "Let $f: D \\to E$ be differentiable at $x_0$ (with $y_0 = f(x_0)$ an accumulation point of $E$) and $g: E \\to \\mathbb{R}$ differentiable at $y_0$. Then $g \\circ f$ is differentiable at $x_0$ and<br>$$(g \\circ f)'(x_0) = g'(f(x_0)) \\cdot f'(x_0)$$<br>('outer derivative times inner derivative').",
    meta: "Script: Theorem 8.8 & Example 8.12",
    explanation: "<b>Subtlety of the proof:</b> naively expanding the difference quotient by $f(x) - f(x_0)$ is not allowed, since $f(x) = f(x_0)$ can happen for $x$ arbitrarily close to $x_0$ (division by 0!). The script instead uses the Landau form $f(x) = f(x_0) + f'(x_0)(x - x_0) + o(x - x_0)$ and substitutes it into that of $g$ &ndash; robust and generalisable. For nested functions one works 'strictly from outside to inside' (Example 8.12).",
    example: "$\\big(\\exp(\\sin(x^2))\\big)' = \\exp(\\sin(x^2)) \\cdot \\cos(x^2) \\cdot 2x$ &ndash; a triple chain, three factors.",
    counterexample: "<b>1.</b> $(g \\circ f)' \\neq g' \\circ f'$: for $g(y) = y^2$, $f(x) = x + 1$ we get $(g \\circ f)'(x) = 2(x+1)$, but $g'(f'(x)) = g'(1) = 2$ &ndash; the inner derivative is <i>multiplied</i>, not substituted.<br><b>2.</b> $g'$ must be evaluated at $f(x_0)$, not at $x_0$: $(\\sin(2x))' = 2\\cos(2x)$, not $2\\cos(x)$."
  },
  "k8_kor_8_11": {
    title: "Example 8.9 & Corollary 8.11: Reciprocal and quotient rule",
    category: "8.1 The derivative",
    type: "satz",
    front: "What is the <b>quotient rule</b> (Corollary 8.11), and how does one derive it from the chain rule and the product rule?",
    back: "<b>Example 8.9:</b> $\\big(\\tfrac1x\\big)' = -\\tfrac{1}{x^2}$ on $\\mathbb{R}\\setminus\\{0\\}$.<br><br><b>Corollary 8.11:</b> If $f, g$ are differentiable at $a$ and $g(a) \\neq 0$, then $\\tfrac{f}{g}$ is differentiable at $a$ with<br>$$\\left(\\frac{f}{g}\\right)'(a) = \\frac{f'(a)g(a) - f(a)g'(a)}{g(a)^2}$$<br><b>Derivation:</b> $\\tfrac1g = \\psi \\circ g$ with $\\psi(y) = \\tfrac1y$ gives, by the chain rule, $\\big(\\tfrac1g\\big)'(a) = -\\tfrac{g'(a)}{g(a)^2}$; then apply the product rule to $f \\cdot \\tfrac1g$.",
    meta: "Script: Example 8.9, Exercise 8.10, Corollary 8.11",
    explanation: "Since $g$ is continuous at $a$ and $g(a) \\neq 0$, $g \\neq 0$ holds on a whole neighbourhood &ndash; the natural domain $\\{x \\mid g(x) \\neq 0\\}$ has $a$ as an accumulation point, so the statement is well formulated. <b>Consequence:</b> rational functions are differentiable wherever they are defined. In general $(x^{-n})' = -nx^{-n-1}$ (Exercise 8.10) &ndash; the power rule also holds for negative exponents.",
    example: "$\\tan'(x) = \\big(\\tfrac{\\sin}{\\cos}\\big)'(x) = \\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\frac{1}{\\cos^2 x}$ &ndash; the most important application of the quotient rule (Section 8.3.4).",
    counterexample: "<b>1.</b> The sign in the numerator is asymmetric: $\\big(\\tfrac{f}{g}\\big)' \\neq \\frac{f'g + fg'}{g^2}$ &ndash; remember the German mnemonic 'NAZ minus ZAN über N²' (denominator times derivative of numerator, minus numerator times derivative of denominator, over the denominator squared), or the derivation.<br><b>2.</b> If $g(a) = 0$ the rule makes no sense &ndash; even if $\\tfrac{f}{g}$ can be continuously extended there (e.g. $\\tfrac{x^2}{x}$ at $0$), one must examine the extension directly."
  },
  "k8_satz_8_14": {
    title: "Theorem 8.14: Derivative of the inverse function",
    category: "8.1 The derivative",
    type: "satz",
    front: "What is the theorem on <b>differentiability of the inverse function</b> (Theorem 8.14), and what does it give for $\\log$ and $x^s$ (Example 8.15)?",
    back: "Let $f: D \\to E$ be continuous and bijective with continuous inverse $f^{-1}: E \\to D$. If $f$ is differentiable at the accumulation point $x_0$ with $f'(x_0) \\neq 0$, then $f^{-1}$ is differentiable at $y_0 = f(x_0)$ with<br>$$(f^{-1})'(y_0) = \\frac{1}{f'(x_0)} = \\frac{1}{f'(f^{-1}(y_0))}$$<br><b>Example 8.15:</b><br>&bull; $\\log'(y) = \\frac{1}{\\exp(\\log y)} = \\frac{1}{y}$; more generally $(\\log|y|)' = \\tfrac1y$ on $\\mathbb{R}\\setminus\\{0\\}$.<br>&bull; $(x^s)' = s x^{s-1}$ for arbitrary $s \\in \\mathbb{C}$ and $x > 0$ (via $x^s = \\exp(s\\log x)$ and the chain rule).",
    meta: "Script: Theorem 8.14 & Example 8.15",
    explanation: "Geometrically: the graph of $f^{-1}$ is the reflection of the graph of $f$ in the diagonal $y = x$; a line with slope $m$ becomes one with slope $\\tfrac1m$. The proof works with sequences (Lemma 6.40): $\\frac{f^{-1}(y_n) - f^{-1}(y_0)}{y_n - y_0} = \\Big(\\frac{f(x_n) - f(x_0)}{x_n - x_0}\\Big)^{-1}$, where the continuity of $f^{-1}$ guarantees $x_n \\to x_0$.",
    example: "All inverse trigonometric and inverse hyperbolic functions arise this way: $\\arcsin'(s) = \\frac{1}{\\cos(\\arcsin s)} = \\frac{1}{\\sqrt{1-s^2}}$, $\\operatorname{arsinh}'(s) = \\frac{1}{\\sqrt{1+s^2}}$ (Sections 8.3/8.4).",
    counterexample: "<b>1.</b> When $f'(x_0) = 0$ differentiability of the inverse fails: $f(x) = x^3$ is bijective with $f'(0) = 0$; the inverse $y \\mapsto y^{1/3}$ is NOT differentiable at $0$ (vertical tangent).<br><b>2.</b> $(f^{-1})'(y_0)$ is not $\\frac{1}{f'(y_0)}$: the derivative of $f$ must be evaluated at $x_0 = f^{-1}(y_0)$ &ndash; for $\\log'(y) = \\tfrac1y$ this evaluation is already built in."
  },
  "k8_def_8_16": {
    title: "Definition 8.16 to Corollary 8.18: Local extrema",
    category: "8.1 The derivative",
    type: "proposition",
    front: "What is a <b>local extremum</b> (Definition 8.16), what does the <b>necessary condition</b> say (Proposition 8.17), and which three cases does Corollary 8.18 allow?",
    back: "<b>Definition 8.16:</b> $f$ has a <b>local maximum</b> at $x_0$ if there is $\\delta > 0$ with $f(x) \\le f(x_0)$ for all $x \\in D \\cap (x_0 - \\delta, x_0 + \\delta)$; <b>isolated</b> if even $f(x) < f(x_0)$ for $x \\neq x_0$. (Minimum analogously.)<br><br><b>Proposition 8.17:</b> If $f$ has a local extremum at $x_0$, $f$ is differentiable at $x_0$, and $x_0$ is both a left-sided AND a right-sided accumulation point, then $$f'(x_0) = 0.$$<br><b>Corollary 8.18:</b> If $f: I \\to \\mathbb{R}$ has a local extremum at $x_0$, then $x_0$ is (i) an endpoint of $I$, or (ii) $f$ is not differentiable at $x_0$, or (iii) $f'(x_0) = 0$.",
    meta: "Script: Definition 8.16, Proposition 8.17, Corollary 8.18",
    explanation: "<b>Proof of 8.17:</b> at a maximum the right-hand difference quotient is $\\le 0$ and the left-hand one $\\ge 0$; differentiability forces both to the same value $0$. The corollary gives the practical checklist of 'candidates' for extrema: endpoints, kinks, critical points &ndash; all three cases really occur (Exercise 8.19).",
    example: "$f(x) = |x|$ on $[-3, 3]$: minimum at $0$ (case ii, not differentiable), maxima at $\\pm 3$ (case i, endpoints) &ndash; not a single critical point with $f' = 0$!",
    counterexample: "<b>1.</b> The converse of 8.17 is false: $f(x) = x^3$ has $f'(0) = 0$, but NO extremum at $0$ (saddle point) &ndash; '$f' = 0$' is necessary, never sufficient.<br><b>2.</b> Without the two-sided accumulation point condition 8.17 fails: $f(x) = x$ on $[0, 1]$ has a minimum at $0$ with $f'(0) = 1 \\neq 0$ &ndash; at the boundary the condition does not hold."
  },
  "k8_bsp_8_20": {
    title: "8.1.4 & Example 8.20: Continuous differentiability",
    category: "8.1 The derivative",
    type: "beispiel",
    front: "When is $f$ <b>continuously differentiable</b>, and what does the example $f_p(x) = |x|^p \\sin(\\tfrac1x)$ show?",
    back: "If $f: D \\to \\mathbb{R}$ is (everywhere) differentiable and the derivative function $f': x \\mapsto f'(x)$ is <b>continuous</b>, then $f$ is called <b>continuously differentiable</b>.<br><br><b>Example 8.20:</b> $f_p(x) = |x|^p\\sin(\\tfrac1x)$ for $x \\neq 0$, $f_p(0) = 0$ ($p > 0$):<br>&bull; $p \\le 1$: $f_p$ is <b>not differentiable</b> at $0$.<br>&bull; $1 < p < 2$: differentiable, but $f_p'$ is unbounded at $0$ &ndash; <b>not continuously differentiable</b>.<br>&bull; $p = 2$: differentiable, $f_p'$ bounded, but discontinuous at $0$ ($\\lim_{x\\to0}\\cos\\tfrac1x$ does not exist).<br>&bull; $p > 2$: continuously differentiable (but $f_p'$ is differentiable again only for $p > 3$).",
    meta: "Script: Section 8.1.4 & Example 8.20",
    explanation: "'Differentiable' and 'continuously differentiable' are genuinely different classes! At $0$ one computes the derivative directly from the difference quotient (sandwich: $|x^{p-1}\\sin\\tfrac1x| \\le |x|^{p-1} \\to 0$ for $p > 1$), while the rule-based formula $f_p'(x) = p|x|^{p-1}\\operatorname{sgn}(x)\\sin\\tfrac1x - |x|^{p-2}\\cos\\tfrac1x$ holds only for $x \\neq 0$ &ndash; the second term oscillates or explodes near $0$.",
    example: "$f_2(x) = x^2\\sin(\\tfrac1x)$ is THE standard witness for 'differentiable but not $C^1$': $f_2'(0) = 0$, but $f_2'(x) = 2x\\sin\\tfrac1x - \\cos\\tfrac1x$ oscillates at $0$ without a limit.",
    counterexample: "<b>1.</b> 'The derivative exists everywhere' does NOT imply 'the derivative is continuous' &ndash; exactly $p = 2$ shows this.<br><b>2.</b> It can get even worse: with fractal constructions there are differentiable functions on $[0,1]$ whose derivative has uncountably many points of discontinuity (on the Cantor set, Section 8.6.2)."
  },
  "k8_hoehere": {
    title: "8.1.5: Higher derivatives, C^n and smooth functions",
    category: "8.1 The derivative",
    type: "definition",
    front: "Define <b>$n$-times (continuous) differentiability</b>, $C^n(D)$, <b>smooth</b>/$C^\\infty(D)$, and state the <b>Leibniz rule</b> (Corollary 8.25).",
    back: "Recursively: $f^{(0)} = f$, $f^{(n+1)} = (f^{(n)})'$. If $f^{(n)}$ exists on all of $D$, $f$ is called <b>$n$-times differentiable</b>; if $f^{(n)}$ is in addition continuous, <b>$n$-times continuously differentiable</b> ($f \\in C^n(D)$). $f$ is called <b>smooth</b> ($f \\in C^\\infty(D)$) if $f$ is $n$-times differentiable for every $n$.<br><br><b>Leibniz rule (Corollary 8.25):</b> For $n$-times differentiable $f, g$:<br>$$(fg)^{(n)} = \\sum_{k=0}^n \\binom{n}{k} f^{(k)} g^{(n-k)}$$<br>Also combinations of $n$-times differentiable functions are $n$-times differentiable (Corollary 8.26).",
    meta: "Script: Section 8.1.5, Examples 8.22/8.23, Corollaries 8.25/8.26",
    explanation: "Smooth are e.g. polynomials, exp, sin, cos, sinh, cosh and the logarithm: $\\log^{(n)}(x) = (-1)^{n-1}(n-1)!\\,x^{-n}$ (Example 8.22, induction). <b>Surprisingly smooth (Example 8.23):</b> $\\psi(x) = \\exp(-\\tfrac1x)$ for $x > 0$, $\\psi(x) = 0$ for $x \\le 0$ is smooth on all of $\\mathbb{R}$ &ndash; all its derivatives vanish at $0$! Such 'smooth decaying functions' are the foundation of cut-off functions in later analysis.",
    example: "$(x^2 e^x)^{(10)} = \\sum_k \\binom{10}{k}(x^2)^{(k)}(e^x)^{(10-k)} = e^x(x^2 + 20x + 90)$ &ndash; only three terms, since $(x^2)^{(k)} = 0$ for $k \\ge 3$.",
    counterexample: "<b>1.</b> For every $n$ there are functions in $C^n \\setminus C^{n+1}$: $x \\mapsto x^n|x|$ is $n$-times continuously differentiable but not $(n+1)$-times differentiable (Exercise 8.21) &ndash; the hierarchy is strict.<br><b>2.</b> 'Twice differentiable' means that $(f')'$ exists &ndash; not that $f''$ exists as the limit of second difference quotients: for examples like $f(x) = x^2\\sin(\\tfrac1x)$ the limit $\\lim_h \\frac{f(h) - 2f(0) + f(-h)}{h^2}$ can exist without $f''(0)$ existing."
  },
  "k8_satz_8_28": {
    title: "Theorem 8.28: Rolle's theorem",
    category: "8.2 Central theorems of differential calculus",
    type: "satz",
    front: "What does <b>Rolle's theorem</b> (Theorem 8.28) say, and how does one prove it?",
    back: "Let $[a,b]$ be compact with $a < b$ and $f: [a,b] \\to \\mathbb{R}$ <b>continuous</b> on $[a,b]$ and <b>differentiable</b> on $(a,b)$. If<br>$$f(a) = f(b),$$<br>then there exists $\\xi \\in (a,b)$ with $f'(\\xi) = 0$.",
    meta: "Script: Theorem 8.28, Section 8.2.1",
    explanation: "<b>Proof:</b> By the extreme value theorem (Corollary 3.69) $f$ attains a maximum and a minimum on $[a,b]$. If one of them lies in the interior $(a,b)$, Proposition 8.17 gives $f' = 0$ there. If both lie at the boundary, then because $f(a) = f(b)$ the function is constant &ndash; and $f' \\equiv 0$. Note the asymmetric hypotheses: continuity up to the boundary, differentiability only in the interior &ndash; so the theorem also covers e.g. $\\sqrt{1 - x^2}$ on $[-1,1]$.",
    example: "$f(x) = x^2 - x$ on $[0, 1]$: $f(0) = f(1) = 0$, and indeed $f'(\\tfrac12) = 0$. Useful consequence: between two zeros of a differentiable function there always lies a zero of its derivative.",
    counterexample: "<b>1.</b> Without differentiability in the interior it is false: $f(x) = |x|$ on $[-1, 1]$ has $f(-1) = f(1)$, but nowhere $f' = 0$ &ndash; the kink at $0$ 'swallows' the critical point.<br><b>2.</b> False for complex-valued functions (Example 8.32): $\\gamma(t) = e^{it}$ on $[0, 2\\pi]$ has $\\gamma(0) = \\gamma(2\\pi) = 1$, but $|\\gamma'(t)| = 1$ everywhere &ndash; $\\gamma'$ never becomes zero."
  },
  "k8_theorem_8_29": {
    title: "Theorem 8.29: The mean value theorem",
    category: "8.2 Central theorems of differential calculus",
    type: "satz",
    front: "What is the <b>mean value theorem</b> (Theorem 8.29), and how does one reduce it to Rolle's theorem?",
    back: "Let $[a,b]$ be compact with $a < b$ and $f: [a,b] \\to \\mathbb{R}$ continuous on $[a,b]$ and differentiable on $(a,b)$. Then there is $\\xi \\in (a,b)$ with<br>$$f'(\\xi) = \\frac{f(b) - f(a)}{b - a}$$<br>&ndash; somewhere the instantaneous slope agrees with the average slope (the secant slope).<br><br><b>Proof:</b> Apply Rolle to $F(x) = f(x) - \\frac{f(b)-f(a)}{b-a}(x-a)$ ('subtract the secant'): $F(a) = F(b) = f(a)$.",
    meta: "Script: Theorem 8.29, Exercises 8.30/8.31, Example 8.32",
    explanation: "THE central theorem of the chapter &ndash; almost all following corollaries (constancy, monotonicity, convexity, l'Hôpital, later Taylor) are applications of the pattern: <i>choose two points $x_1 < x_2$, apply the MVT on $[x_1, x_2]$, translate information about $f'$ into information about $f$</i>. Exercise 8.31: for $f \\in C^1([a,b])$ one obtains Lipschitz continuity (with $L = \\max|f'|$).",
    example: "A car that covers 200 km in 2 hours was at some moment going exactly 100 km/h. Estimates such as $|\\sin b - \\sin a| \\le |b - a|$ follow directly (since $|\\cos| \\le 1$).",
    counterexample: "<b>1.</b> False for complex-valued functions (Example 8.32, circle parametrisation $\\gamma(t) = e^{it}$) &ndash; the MVT is a genuinely real result.<br><b>2.</b> The domain must be an interval (Exercise 8.30): $f(x) = \\tfrac{1}{x}$ on $[-1, 0) \\cup (0, 1]$ has $\\frac{f(1) - f(-1)}{2} = 1 > 0$, but $f'(x) = -x^{-2} < 0$ everywhere &ndash; nothing holds across the gap."
  },
  "k8_kor_8_33_8_35": {
    title: "Corollaries 8.33 & 8.35: Criteria for constancy and monotonicity",
    category: "8.2 Central theorems of differential calculus",
    type: "satz",
    front: "How does the derivative characterise <b>constancy</b> (Corollary 8.33) and <b>monotonicity</b> (Corollary 8.35) on an interval?",
    back: "<b>Corollary 8.33:</b> $f: I \\to \\mathbb{R}$ is constant if and only if $f$ is differentiable with $f'(x) = 0$ for all $x \\in I$.<br><br><b>Corollary 8.35:</b> For differentiable $f: I \\to \\mathbb{R}$:<br>$$f' \\ge 0 \\implies f \\text{ monotonically increasing}, \\qquad f' > 0 \\implies f \\text{ STRICTLY monotonically increasing}$$<br>(analogously $\\le 0$ / $< 0$ for decreasing).<br><br><b>Important Exercise 8.36:</b> Only the non-strict versions are equivalences: $f' \\ge 0 \\iff f$ monotonically increasing.",
    meta: "Script: Corollaries 8.33 & 8.35, Important Exercise 8.36",
    explanation: "Both follow from the MVT pattern: $f(x_2) - f(x_1) = f'(\\xi)(x_2 - x_1)$ &ndash; the sign of $f'$ controls the sign of the difference. Corollary 8.33 is also the key to the uniqueness of antiderivatives (Lemma 8.59) and to solutions of differential equations. The interval is essential: only there does the MVT connect any two points.",
    example: "$\\exp' = \\exp > 0$ $\\Rightarrow$ exp is strictly monotonically increasing &ndash; a new, effortless proof compared with Section 6.3.6.",
    counterexample: "<b>1.</b> '$f$ strictly increasing $\\Rightarrow f' > 0$' is FALSE: $f(x) = x^3$ is strictly increasing with $f'(0) = 0$ (Exercise 8.36) &ndash; strict monotonicity allows isolated zeros of the derivative.<br><b>2.</b> Without an interval 8.33 fails: $f = \\mathbb{1}_{(0,1)} - \\mathbb{1}_{(2,3)}$-like, i.e. locally constant functions on $(0,1) \\cup (2,3)$ with different values, have $f' = 0$ everywhere but are not constant."
  },
  "k8_kor_8_37": {
    title: "Corollary 8.37: Sufficient criteria for local extrema",
    category: "8.2 Central theorems of differential calculus",
    type: "satz",
    front: "State the <b>sufficient criteria</b> for local extrema at an interior point $x_0$ (Corollary 8.37): the sign change of $f'$ and the $f''$ criterion.",
    back: "Let $f: I \\to \\mathbb{R}$ be continuous, continuously differentiable on $I \\setminus \\{x_0\\}$, and $x_0$ an interior point. Then:<br>&bull; $f' > 0$ on $(x_0 - \\delta, x_0)$ and $f' < 0$ on $(x_0, x_0 + \\delta)$ $\\implies$ <b>isolated local maximum</b> at $x_0$ (reversed sign change: minimum).<br>&bull; $f' > 0$ (or $f' < 0$) on $(x_0 - \\delta, x_0 + \\delta)\\setminus\\{x_0\\}$ $\\implies$ <b>no</b> extremum.<br>&bull; If $f \\in C^2(I)$ with $f'(x_0) = 0$ and $f''(x_0) < 0$ $\\implies$ isolated local <b>maximum</b>; $f''(x_0) > 0$ $\\implies$ isolated local <b>minimum</b>.<br>&bull; At endpoints: $f'(a) > 0$ $\\Rightarrow$ isolated minimum at $a$; $f'(b) > 0$ $\\Rightarrow$ isolated maximum at $b$ (sign reversed analogously).",
    meta: "Script: Corollary 8.37, Section 8.2.2",
    explanation: "Everything is the MVT: to the left of $x_0$ $f$ increases (if $f' > 0$), to the right it falls &ndash; so a maximum. The $f''$ criterion is the special case: $f''(x_0) < 0$ makes $f'$ strictly decreasing near $x_0$ (Corollary 8.35), and with $f'(x_0) = 0$ this gives the sign change $+/-$. The script explicitly advises: <i>understand rather than memorise</i> &ndash; with the picture of the sign change one can reconstruct all cases.",
    example: "$f(x) = x^3 - x$: $f'(x) = 3x^2 - 1 = 0$ at $x = \\pm\\tfrac{1}{\\sqrt3}$; $f''(x) = 6x$ gives a maximum at $-\\tfrac{1}{\\sqrt3}$ ($f'' < 0$) and a minimum at $+\\tfrac{1}{\\sqrt3}$ ($f'' > 0$).",
    counterexample: "<b>1.</b> If $f'(x_0) = 0$ AND $f''(x_0) = 0$, nothing is decided: $x^3$ (no extremum), $x^4$ (minimum) and $-x^4$ (maximum) all satisfy both equations.<br><b>2.</b> The $f''$ criterion is sufficient, not necessary: $f(x) = x^4$ has an isolated minimum at $0$, although $f''(0) = 0$ &ndash; here the sign change of $f'$ decides."
  },
  "k8_def_8_38": {
    title: "Definition 8.38 & Lemma 8.39: Convexity",
    category: "8.2 Central theorems of differential calculus",
    type: "definition",
    front: "When is $f: I \\to \\mathbb{R}$ <b>convex</b> or <b>strictly convex</b> (Definition 8.38), and how does one characterise this via <b>secant slopes</b> (Lemma 8.39)?",
    back: "<b>Definition 8.38:</b> $f$ is <b>convex</b> if for all $x_0, x_1 \\in I$, $t \\in [0,1]$:<br>$$f\\big((1-t)x_0 + tx_1\\big) \\le (1-t)f(x_0) + tf(x_1)$$<br>(<b>strictly convex</b>: strict inequality for $x_0 \\neq x_1$, $t \\in (0,1)$; $g$ is (strictly) <b>concave</b> $:\\iff -g$ is (strictly) convex).<br><br><b>Lemma 8.39:</b> $f$ is convex if and only if for all $x_0 < x < x_1$ in $I$:<br>$$\\frac{f(x) - f(x_0)}{x - x_0} \\le \\frac{f(x_1) - f(x)}{x_1 - x}$$<br>&ndash; the secant slopes increase from left to right.",
    meta: "Script: Definition 8.38 & Lemma 8.39, Section 8.2.3",
    explanation: "Intuitively: the graph stays below every chord between two of its points ('curved upwards'). The point $(1-t)x_0 + tx_1$ runs, for $t \\in [0,1]$, exactly through the segment from $x_0$ to $x_1$; on the right-hand side stands the chord. The lemma rewrites the definition by algebra into monotonicity of the slopes &ndash; the bridge to the derivative characterisation (Prop. 8.40).",
    example: "$x \\mapsto x^2$, $\\exp$, $x \\mapsto |x|$ are convex (the last one NOT strictly, and without any differentiability!); $\\log$ is concave, $x\\log x$ strictly convex (Example 8.43).",
    counterexample: "<b>1.</b> Convexity requires an interval as domain: for $x \\mapsto \\tfrac{1}{x}$ on $(-1,0) \\cup (0,1)$ the connecting segment leaves the domain &ndash; the notion becomes meaningless.<br><b>2.</b> 'Convex' is not 'increasing': $x^2$ is convex and decreasing on $(-\\infty, 0)$ &ndash; curvature and monotonicity are independent properties."
  },
  "k8_prop_8_40": {
    title: "Proposition 8.40 & Corollary 8.42: Convexity and derivatives",
    category: "8.2 Central theorems of differential calculus",
    type: "proposition",
    front: "How does one characterise convexity of differentiable functions via $f'$ (Proposition 8.40) and via $f''$ (Corollary 8.42)?",
    back: "<b>Proposition 8.40:</b> A differentiable function $f: I \\to \\mathbb{R}$ is (strictly) convex if and only if $f'$ is (strictly) <b>monotonically increasing</b>.<br><br><b>Corollary 8.42:</b> If $f$ is twice differentiable, then:<br>$$f'' \\ge 0 \\text{ on } I \\implies f \\text{ convex}, \\qquad f'' > 0 \\text{ on } I \\implies f \\text{ strictly convex.}$$",
    meta: "Script: Proposition 8.40, Corollary 8.42, Example 8.43",
    explanation: "<b>Proof of 8.40 ($\\Leftarrow$):</b> for $x_0 < x < x_1$ the MVT yields points $\\xi_1 \\in (x_0, x)$, $\\xi_2 \\in (x, x_1)$ whose values of $f'$ are the two secant slopes; monotonicity of $f'$ orders them correctly &ndash; Lemma 8.39 concludes. In practice one almost always checks $f''$: Example 8.43 shows $x\\log x$ is strictly convex via $f''(x) = \\tfrac1x > 0$.",
    example: "$\\exp'' = \\exp > 0$: exp is strictly convex, in particular $e^x \\ge 1 + x$ (the tangent at $0$ stays below). $\\log''(x) = -\\tfrac{1}{x^2} < 0$: log is strictly concave.",
    counterexample: "<b>1.</b> The converse of Corollary 8.42 fails for 'strict': $f(x) = x^4$ is strictly convex, but $f''(0) = 0$ &ndash; '$f'' > 0$' is sufficient, not necessary.<br><b>2.</b> Convexity does not force twice (not even once) differentiability: $|x|$ is convex with a kink &ndash; the derivative criteria are specialisations, not the definition."
  },
  "k8_lemma_8_44": {
    title: "Lemma 8.44: Jensen's inequality",
    category: "8.2 Central theorems of differential calculus",
    type: "lemma",
    front: "What is <b>Jensen's inequality</b> (Lemma 8.44) for convex functions?",
    back: "Let $f: I \\to \\mathbb{R}$ be convex, $x_1, \\dots, x_n \\in I$ and $t_1, \\dots, t_n \\in [0,1]$ with $\\sum_{k=1}^n t_k = 1$. Then<br>$$f\\Big(\\sum_{k=1}^n t_k x_k\\Big) \\le \\sum_{k=1}^n t_k f(x_k).$$<br>&ndash; the function value at the weighted mean is at most the weighted mean of the function values.",
    meta: "Script: Lemma 8.44, Section 8.2.3",
    explanation: "Proof by induction on $n$: $n = 2$ is the convexity definition itself; in the step one merges the first $n$ weights into one point. Jensen is an inequality machine: with the concave $\\log$ one gets, for example, the AM-GM inequality $\\sqrt[n]{x_1 \\cdots x_n} \\le \\frac{x_1 + \\dots + x_n}{n}$ (take log of both sides, weights $t_k = \\tfrac1n$).",
    example: "$f = \\exp$, $t_k = \\tfrac1n$: $\\exp\\big(\\tfrac{1}{n}\\sum x_k\\big) \\le \\tfrac1n \\sum e^{x_k}$. For concave $f$ the inequality reverses: $\\log\\big(\\tfrac1n\\sum x_k\\big) \\ge \\tfrac1n \\sum \\log x_k$.",
    counterexample: "<b>1.</b> False without $\\sum t_k = 1$: $f(x) = x^2$, $t_1 = t_2 = 1$, $x_1 = x_2 = 1$ would give $f(2) = 4 \\le 2$ &ndash; the weights must form a convex combination.<br><b>2.</b> For non-convex functions neither direction holds: $f(x) = x^3$ on $\\mathbb{R}$ violates '$\\le$' for some choices of points and '$\\ge$' for others."
  },
  "k8_satz_8_48": {
    title: "Theorem 8.48: The extended mean value theorem (Cauchy)",
    category: "8.2 Central theorems of differential calculus",
    type: "satz",
    front: "What is the <b>extended mean value theorem of Cauchy</b> (Theorem 8.48)?",
    back: "Let $f, g$ be continuous on $[a,b]$ ($a < b$) and differentiable on $(a,b)$. Then there exists $\\xi \\in (a,b)$ with<br>$$g'(\\xi)\\big(f(b) - f(a)\\big) = f'(\\xi)\\big(g(b) - g(a)\\big).$$<br>If in addition $g'(x) \\neq 0$ for all $x \\in (a,b)$, then $g(a) \\neq g(b)$ and<br>$$\\frac{f'(\\xi)}{g'(\\xi)} = \\frac{f(b) - f(a)}{g(b) - g(a)}.$$",
    meta: "Script: Theorem 8.48, Section 8.2.4",
    explanation: "<b>Proof:</b> apply Rolle to $F(x) = g(x)(f(b) - f(a)) - f(x)(g(b) - g(a))$ &ndash; one checks $F(a) = F(b)$ directly. The ordinary MVT is the special case $g(x) = x$. <b>Geometrically:</b> the plane curve $t \\mapsto (f(t), g(t))$ has a tangent parallel to the line joining its endpoints. Main application: l'Hôpital's rule.",
    example: "With $f(x) = \\sin x$, $g(x) = x^2$ on $[0, \\tfrac\\pi2]$ there is $\\xi$ with $\\frac{\\cos\\xi}{2\\xi} = \\frac{1}{(\\pi/2)^2}$ &ndash; two 'average rates' are compared through ONE common point $\\xi$.",
    counterexample: "<b>1.</b> The naive 'proof' &ndash; apply the MVT separately to $f$ and $g$ and form the quotient &ndash; fails: one would obtain TWO different intermediate points $\\xi_f \\neq \\xi_g$; Cauchy's trick forces the same point.<br><b>2.</b> Without $g' \\neq 0$ it can happen that $g(a) = g(b)$, and the quotient form becomes meaningless &ndash; the first (product-form) statement still holds then."
  },
  "k8_satz_8_49": {
    title: "Theorem 8.49: l'Hôpital's rule",
    category: "8.2 Central theorems of differential calculus",
    type: "satz",
    front: "What is <b>l'Hôpital's rule</b> (Theorem 8.49), and which hypotheses does it need?",
    back: "Let $f, g: (a,b) \\to \\mathbb{R}$ be differentiable with $g(x) \\neq 0$ and $g'(x) \\neq 0$ on $(a,b)$. <b>Assume:</b><br>&bull; the limit $\\lim_{x \\searrow a} \\frac{f'(x)}{g'(x)}$ exists in $\\overline{\\mathbb{R}}$, and<br>&bull; there is an <b>indeterminate form</b>: either '$\\tfrac00$' ($\\lim_{x\\searrow a} f(x) = \\lim_{x\\searrow a} g(x) = 0$) or '$\\tfrac{\\infty}{\\infty}$' ($\\lim_{x \\searrow a} g(x) = \\pm\\infty$).<br><br>Then $\\lim_{x\\searrow a}\\frac{f(x)}{g(x)}$ also exists and<br>$$\\lim_{x \\searrow a} \\frac{f(x)}{g(x)} = \\lim_{x \\searrow a} \\frac{f'(x)}{g'(x)}.$$<br>Analogously for $x \\nearrow b$ and $x \\to x_0 \\in (a,b)$.",
    meta: "Script: Theorem 8.49 & Important Exercise 8.50, Section 8.2.5",
    explanation: "The rule is a corollary of the extended MVT: $\\frac{f(x) - f(y)}{g(x) - g(y)} = \\frac{f'(\\xi)}{g'(\\xi)}$ for some $\\xi$ in between; in the limit the influence of $y$ disappears. One often applies the rule several times. Compare: $\\lim_{x\\to 0}\\frac{\\sin x}{x} \\overset{\\text{l'H}}{=} \\lim \\frac{\\cos x}{1} = 1$ &ndash; much faster than the series arguments of Chapter 7.",
    example: "$\\lim_{x\\to\\infty}\\frac{\\log x}{x} \\overset{\\infty/\\infty}{=} \\lim_{x\\to\\infty}\\frac{1/x}{1} = 0$; $\\lim_{x\\to 0}\\frac{e^x - 1 - x}{x^2} \\overset{0/0}{=} \\lim\\frac{e^x - 1}{2x} \\overset{0/0}{=} \\lim\\frac{e^x}{2} = \\tfrac12$ (applied twice).",
    counterexample: "<b>1.</b> Without an indeterminate form the rule produces nonsense: $\\lim_{x\\to 0}\\frac{x + 1}{x + 2} = \\tfrac12$, but blind differentiation would give $\\frac{1}{1} = 1$.<br><b>2.</b> If $\\lim \\frac{f'}{g'}$ does not exist, NOTHING follows: $\\lim_{x\\to\\infty}\\frac{x + \\sin x}{x} = 1$ exists, although $\\frac{1 + \\cos x}{1}$ has no limit &ndash; the rule is a one-way street."
  },
  "k8_trig_umkehr": {
    title: "8.3: Inverse trigonometric functions and their derivatives",
    category: "8.3 Trigonometric functions",
    type: "satz",
    front: "On which intervals does one invert sin and tan, and what are the derivatives of <b>arcsin</b> and <b>arctan</b>?",
    back: "&bull; $\\sin|_{[-\\pi/2,\\, \\pi/2]}: [-\\tfrac\\pi2, \\tfrac\\pi2] \\to [-1,1]$ is strictly monotonically increasing and bijective; its inverse is $\\arcsin: [-1,1] \\to [-\\tfrac\\pi2, \\tfrac\\pi2]$ with<br>$$\\arcsin'(s) = \\frac{1}{\\sqrt{1 - s^2}} \\qquad (s \\in (-1,1)).$$<br>&bull; $\\tan = \\tfrac{\\sin}{\\cos}$ has $\\tan'(x) = \\tfrac{1}{\\cos^2 x} = 1 + \\tan^2 x$; $\\tan|_{(-\\pi/2,\\,\\pi/2)}: (-\\tfrac\\pi2, \\tfrac\\pi2) \\to \\mathbb{R}$ is bijective with inverse $\\arctan: \\mathbb{R} \\to (-\\tfrac\\pi2, \\tfrac\\pi2)$ and<br>$$\\arctan'(s) = \\frac{1}{1 + s^2}.$$",
    meta: "Script: Sections 8.3.1-8.3.4",
    explanation: "The procedure is always the same: find the interval of monotonicity via $\\sin' = \\cos > 0$ on $(-\\tfrac\\pi2, \\tfrac\\pi2)$ (Corollary 8.35), establish bijectivity with the intermediate value theorem, then use Theorem 8.14 for the derivative of the inverse. For arcsin: $\\arcsin'(s) = \\frac{1}{\\cos(\\arcsin s)}$ and $\\cos x = \\sqrt{1 - \\sin^2 x} > 0$ on the open interval. For arctan: $1 + \\tan^2 x = \\frac{1}{\\cos^2 x}$ removes the back-substitution. Analogously: arccos on $[0, \\pi]$ with $\\arccos'(s) = -\\frac{1}{\\sqrt{1-s^2}}$.",
    example: "$\\arctan'(1) = \\tfrac12$; the formula $\\arctan'(s) = \\frac{1}{1+s^2}$ will lead in Chapter 9 to the series $\\arctan s = s - \\tfrac{s^3}{3} + \\tfrac{s^5}{5} - \\dots$ and thus to $\\tfrac\\pi4 = 1 - \\tfrac13 + \\tfrac15 - \\dots$.",
    counterexample: "<b>1.</b> At the endpoints $s = \\pm1$ arcsin is NOT differentiable: there $\\cos(\\arcsin s) = 0$ (vertical tangent) &ndash; Theorem 8.14 requires $f'(x_0) \\neq 0$.<br><b>2.</b> $\\arcsin$ is only the inverse of the RESTRICTION: $\\arcsin(\\sin(\\pi)) = 0 \\neq \\pi$ &ndash; outside $[-\\tfrac\\pi2, \\tfrac\\pi2]$ one has $\\arcsin \\circ \\sin \\neq \\operatorname{id}$."
  },
  "k8_hyperbolisch": {
    title: "8.4: Hyperbolic functions and area functions",
    category: "8.4 Hyperbolic functions",
    type: "satz",
    front: "Define sinh, cosh, tanh, state their derivatives and the formula for the <b>area sine hyperbolicus</b>.",
    back: "$$\\sinh x = \\frac{e^x - e^{-x}}{2}, \\qquad \\cosh x = \\frac{e^x + e^{-x}}{2}, \\qquad \\tanh x = \\frac{\\sinh x}{\\cosh x}$$<br>with $\\sinh' = \\cosh$, $\\cosh' = \\sinh$ and $\\cosh^2 - \\sinh^2 = 1$.<br><br>$\\sinh: \\mathbb{R} \\to \\mathbb{R}$ is strictly monotonically increasing and bijective ($\\sinh' = \\cosh > 0$); its inverse $\\operatorname{arsinh}: \\mathbb{R} \\to \\mathbb{R}$ satisfies<br>$$\\operatorname{arsinh}'(s) = \\frac{1}{\\sqrt{1 + s^2}} \\qquad \\text{and} \\qquad \\operatorname{arsinh}(s) = \\log\\big(s + \\sqrt{1 + s^2}\\big).$$",
    meta: "Script: Section 8.4 (8.4.1-8.4.3)",
    explanation: "The hyperbolic functions are the 'exponential siblings' of sin and cos (formally: $\\cosh x = \\cos(ix)$, $\\sinh x = -i\\sin(ix)$). The area inverse functions &ndash; unlike the inverse trigonometric ones! &ndash; have closed logarithmic formulas, since $y = \\tfrac{e^x - e^{-x}}{2}$ can be solved as a quadratic equation in $e^x$. The derivative follows from Theorem 8.14: $\\operatorname{arsinh}'(s) = \\frac{1}{\\cosh(\\operatorname{arsinh} s)} = \\frac{1}{\\sqrt{1 + s^2}}$.",
    example: "$\\operatorname{arsinh}(0) = \\log(1) = 0$; the derivative formulas $\\frac{1}{\\sqrt{1+s^2}}$ and $\\frac{1}{\\sqrt{s^2 - 1}}$ (arcosh) will provide important antiderivatives in Chapter 9.",
    counterexample: "<b>1.</b> $\\cosh^2 - \\sinh^2 = 1$ (minus!), not $\\cosh^2 + \\sinh^2 = 1$ &ndash; the point pairs $(\\cosh t, \\sinh t)$ lie on the <i>hyperbola</i> $x^2 - y^2 = 1$, not on the circle.<br><b>2.</b> cosh is NOT bijective on $\\mathbb{R}$ (even function, minimum $\\cosh 0 = 1$): arcosh is only defined on $[1, \\infty)$ as the inverse of $\\cosh|_{[0,\\infty)}$ &ndash; unlike sinh, a restriction is needed."
  },
  "k8_stammfunktionen": {
    title: "8.5.2 & Lemma 8.59: Antiderivatives",
    category: "8.5 First differential equations",
    type: "definition",
    front: "What is an <b>antiderivative</b>, and what does the lemma on the <b>integration constant</b> say (Lemma 8.59)?",
    back: "An <b>antiderivative</b> of $f: I \\to \\mathbb{R}$ is a differentiable function $F: I \\to \\mathbb{R}$ with $F' = f$ (a solution of the simplest differential equation $y' = f(x)$). One writes the <b>indefinite integral</b><br>$$\\int f(x)\\,\\mathrm{d}x = F(x) + C.$$<br><b>Lemma 8.59:</b> If $F, F_1$ are antiderivatives of $f$ on an <b>interval</b> $I$, then there is a constant $C \\in \\mathbb{R}$ with $F_1 = F + C$ &ndash; the solution set of $y' = f$ is exactly $\\{F + C \\mid C \\in \\mathbb{R}\\}$.",
    meta: "Script: Section 8.5.2 & Lemma 8.59",
    explanation: "<b>Proof:</b> $(F_1 - F)' = 0$, and on an interval these are exactly the constants (Corollary 8.33 &ndash; the MVT again!). Every differentiation rule becomes an integration rule read backwards, e.g. $\\int x^s\\,\\mathrm{d}x = \\frac{x^{s+1}}{s+1} + C$ for $s \\neq -1$ and $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\log|x| + C$. The connection with the Riemann integral will only be clarified by the fundamental theorem in Chapter 9.",
    example: "$\\int \\cos x\\,\\mathrm{d}x = \\sin x + C$; $\\int e^{3x}\\,\\mathrm{d}x = \\tfrac13 e^{3x} + C$; $\\int \\frac{1}{1+x^2}\\,\\mathrm{d}x = \\arctan x + C$.",
    counterexample: "<b>1.</b> On NON-intervals the constant is not unique: on $\\mathbb{R}\\setminus\\{0\\}$, $F(x) = \\log|x| + \\operatorname{sgn}(x)$ is also an antiderivative of $\\tfrac1x$ &ndash; on each component the constant may differ.<br><b>2.</b> Not every function has an antiderivative: the signum function has none (such a function would have to be differentiable at $0$ and would be $\\pm x + C$ on the two sides &ndash; the kink prevents $F'(0)$); integrability and existence of an antiderivative are different questions."
  },
  "k8_lemma_8_60_61": {
    title: "Lemmas 8.60 & 8.61: First-order linear differential equations",
    category: "8.5 First differential equations",
    type: "lemma",
    front: "How does one solve the <b>homogeneous</b> ($y' + f(x)y = 0$) and the <b>inhomogeneous</b> linear first-order differential equation (Lemmas 8.60/8.61)?",
    back: "<b>Lemma 8.60 (homogeneous):</b> If $F$ is an antiderivative of $f$ on $I$, then the solutions of $y' + f(x)y = 0$ are <b>exactly</b> the multiples<br>$$y(x) = A\\exp(-F(x)), \\qquad A \\in \\mathbb{R}.$$<br><b>Lemma 8.61 (inhomogeneous):</b> If $y_{\\text{part}}$ is ONE solution of $y' + f(x)y = g(x)$, then the general solution is<br>$$y_{\\text{inhom}} = y_{\\text{part}} + y_{\\text{hom}}$$<br>with $y_{\\text{hom}}$ the general homogeneous solution. A particular solution is found by <b>variation of constants</b>: the ansatz $y(x) = A(x)\\exp(-F(x))$ leads to $A'(x) = g(x)\\exp(F(x))$.",
    meta: "Script: Lemmas 8.60 & 8.61, Section 8.5.3",
    explanation: "<b>Uniqueness trick (8.60):</b> for every solution $y$, $\\tilde y = \\exp(F)y$ is constant (product rule + Corollary 8.33) &ndash; exp 'absorbs' the equation. Lemma 8.61 is exactly the structure of linear systems from linear algebra: solution set = particular solution + kernel (Exercise 8.62). The forcing function $g$ is so named because it 'disturbs' the homogeneous system.",
    example: "$y' = \\lambda y$ (so $f = -\\lambda$): solutions $y = Ae^{\\lambda x}$ &ndash; exponential growth or decay. $y' + \\tfrac{1}{x} y = 0$ on $(0,\\infty)$: $F = \\log x$, solutions $y = \\tfrac{A}{x}$.",
    counterexample: "<b>1.</b> The solution set of the inhomogeneous equation is NOT a vector space: the sum of two solutions of $y' + fy = g$ solves $y' + fy = 2g$ &ndash; only the homogeneous solutions form a space (the 'kernel').<br><b>2.</b> In the variation-of-constants ansatz you may not treat $A$ as constant and still expect $g \\neq 0$: a constant $A$ gives exactly the homogeneous solution &ndash; the 'variation' is the whole point."
  },
  "k8_zweite_ordnung": {
    title: "8.5.4 & Example 8.65: Second-order equations",
    category: "8.5 First differential equations",
    type: "beispiel",
    front: "What are the solutions of the homogeneous second-order equations $y'' = 0$, $y'' - y' = 0$ and $y'' + y = 0$ (Example 8.65)?",
    back: "(a) $y'' = 0$: $\\quad y(x) = C_1 + C_2 x$<br>(b) $y'' - y' = 0$: $\\quad y(x) = C_1 + C_2 e^{x}$<br>(c) $y'' + y = 0$: $\\quad y(x) = C_1 \\sin x + C_2 \\cos x$, equivalently $y(x) = D_1 e^{ix} + D_2 e^{-ix}$<br><br>each with arbitrary constants $C_1, C_2$ (resp. $D_1, D_2$) in $\\mathbb{C}$. Behind the solutions stands the <b>characteristic polynomial</b>: the ansatz $y = e^{\\lambda x}$ in $y'' + ay' + by = 0$ leads to $\\lambda^2 + a\\lambda + b = 0$ &ndash; the roots $\\lambda$ give the basis solutions $e^{\\lambda x}$.",
    meta: "Script: Section 8.5.4, Example 8.65, Important Exercise 8.66, Example 8.67",
    explanation: "In (a) $T^2 = 0$ has the double root $0$ (solutions $1$ and $x$), in (b) $T^2 - T = 0$ has the roots $0, 1$, in (c) $T^2 + 1 = 0$ has the roots $\\pm i$ &ndash; and $e^{\\pm ix} = \\cos x \\pm i\\sin x$ translates the complex basis solutions into the real sin and cos. Physical meaning (Example 8.67): $y'' + ay' + by = 0$ describes the <b>damped oscillation</b> of a spring &ndash; damping term $ay'$, restoring force $by$.",
    example: "Initial values fix the constants: $y'' + y = 0$ with $y(0) = 0$, $y'(0) = 1$ has the unique solution $y = \\sin x$.",
    counterexample: "<b>1.</b> Two constants are needed and cannot be reduced: $y = \\sin x$ alone is not the general solution of $y'' + y = 0$ &ndash; the solution space of a linear second-order equation is two-dimensional (two initial values $y(0), y'(0)$).<br><b>2.</b> The exponential ansatz alone falls short for double roots: for $y'' = 0$, $e^{0 \\cdot x} = 1$ gives only ONE solution &ndash; the second ($y = x$) has the form $xe^{\\lambda x}$; multiplicities of roots require additional solutions."
  }
};
