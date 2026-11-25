/* ==========================================================================
   LINEAR ALGEBRA I – CHAPTER 6 (English): The dual space
   (linear map, functional, Theorems 6.0–6.2, dual basis) + Exercise sheets 5, 6
   Linear Algebra I – Prof. Dr. Lorenz Halbeisen, HS 2026
   English translation of data_kapitel6.js. Formulas, HTML and ids are identical.
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_EN_KAPITEL_6 = {
  // ========================================================================
  // 6a LINEAR MAPS AND FUNCTIONALS
  // ========================================================================
  "la6_def_linabb_funktional": {
    title: "Definition: Linear map and functional",
    category: "6a Linear maps and functionals",
    type: "definition",
    front: R`When is $f: V\to W$ a <b>linear map</b>? What is a <b>functional</b>?`,
    back: R`Let $V$ and $W$ be vector spaces over the field $K$. A <b>linear map</b> from $V$ to $W$ is a function $f: V\to W$ such that for all $x,y\in V$ and all $\lambda\in K$:
<ul><li><b>(i)</b> $f(x+_Vy) = f(x)+_Wf(y)$,</li>
<li><b>(ii)</b> $f(\lambda\cdot x) = \lambda\cdot f(x)$.</li></ul>
[For $\lambda = 0$ this implies $f(0_V) = 0_W$.]<br><br>
If $W = K$ (i.e. $W$ the VS $K$ over $K$, resp. $W = K^1$), we call a linear map $f: V\to K$ a <b>functional</b>. [So a functional is a special linear map.]<br>
<b>Remark:</b> Linear maps $V\to W$ between arbitrary (finite-dim.) VS are the main topic of linear algebra.`,
    meta: "Script: Ch. 6, definition of linear map, functional, remark",
    explanation: R`<b>Linear = compatible with the structure:</b> it does not matter whether one first adds/stretches and then maps, or first maps and then adds/stretches. Hence <b>linear combinations are mapped to linear combinations</b>: $f(\sum\lambda_ix_i) = \sum\lambda_if(x_i)$ (induction, Stammbach II.4.4).<br><br>
<b>Consequence (Theorem 6.0, 7.x):</b> a linear map is completely determined by its <b>values on a basis</b> – one only has to know finitely many images. For functionals on $K^n$ this means: $f(x) = a_1\alpha_1+\dots+a_n\alpha_n$ for fixed numbers $a_i$.<br><br>
<b>Quick test:</b> $f(0_V)\neq 0_W$ ⇒ not linear. Constant summands (“$+1$”), squares, products of coordinates and absolute values destroy linearity.<br>
(The script writes “$f(0_V) = 0_K$” in the brackets; meant in general is the zero vector $0_W$; for functionals $W = K$ and $0_W = 0_K$.)`,
    example: R`<b>1.</b> $f:\mathbb{R}^3\to\mathbb{R}^2$, $f(x,y,z) = (x+y,y-z)$ (Stammbach III.2.3).<br>
<b>2.</b> Functional $f:\mathbb{R}^3\to\mathbb{R}$, $f(x_1,x_2,x_3) = x_1-x_2+2x_3$: $f((1,2,3)+(0,1,-1)) = f(1,3,2) = 2$ and $f(1,2,3)+f(0,1,-1) = 5+(-3) = 2$ ✓.<br>
<b>3.</b> Derivative $p\mapsto p'$ on polynomials; integral $p\mapsto\int_0^1p(x)\,dx$ (a functional).`,
    counterexample: R`<b>1.</b> $f(x,y) = (x,1+y)$: $f(0,0) = (0,1)\neq 0$.<br>
<b>2.</b> $f(x,y) = (x^2,1)$ and $g(x) = x^2$: $g(2\cdot 3) = 36\neq 2\cdot g(3) = 18$.<br>
<b>3.</b> $h(x) = |x|$ on $\mathbb{R}$: $h(1+(-1)) = 0\neq 2 = h(1)+h(-1)$.<br>
<b>4. Only (i), not (ii):</b> $\mathbb{C}\to\mathbb{C}$, $z\mapsto\bar z$ (complex conjugate) is additive, but not linear over $\mathbb{C}$: $\overline{i\cdot 1} = -i\neq i\cdot\bar 1 = i$.`
  },
  "la6_bsp_funktionale_r2": {
    title: "Examples 0.–2.: Every functional on ℝ² is of the form f_{a,b}",
    category: "6a Linear maps and functionals",
    type: "beispiel",
    front: R`Show: every map $f_{a,b}:\mathbb{R}^2\to\mathbb{R}$, $(\alpha,\beta)\mapsto a\cdot\alpha+b\cdot\beta$ is a functional, and conversely <b>every</b> functional on $\mathbb{R}^2$ is of this form.`,
    back: R`<b>0.</b> The <b>zero functional</b> $f: V\to K$, $x\mapsto 0_K$ is a functional.<br>
<b>1.</b> $f_{a,b}$ is a functional ($a = b = 0$: zero functional): for $x_1 = (\alpha_1,\beta_1)$, $x_2 = (\alpha_2,\beta_2)$:
$$f_{a,b}(x_1+x_2) = a(\alpha_1+\alpha_2)+b(\beta_1+\beta_2) = f_{a,b}(x_1)+f_{a,b}(x_2),\qquad f_{a,b}(\lambda x) = \lambda(a\alpha+b\beta) = \lambda f_{a,b}(x).$$
<b>2.</b> If $f$ is any functional, $e_1 = (1,0)$, $e_2 = (0,1)$, then for $x = (\alpha,\beta) = \alpha e_1+\beta e_2$:
$$f(x) = \alpha\cdot\underbrace{f(e_1)}_{=:a}+\beta\cdot\underbrace{f(e_2)}_{=:b} = a\alpha+b\beta = f_{a,b}(x).$$`,
    meta: "Script: Ch. 6, examples 0., 1., 2. (with proofs)",
    explanation: R`<b>The central insight:</b> a functional on $\mathbb{R}^2$ is completely determined by <b>two numbers</b> $a = f(e_1)$ and $b = f(e_2)$ – its values on the basis. Everything else follows from linearity.<br><br>
<b>Geometrically:</b> the graph of $f_{a,b}$ is a plane $z = a\alpha+b\beta$ through the origin (cf. $U_f$ in Exercise sheet 5, Exercise 25); the zero set $\{a\alpha+b\beta = 0\}$ is a line through $0$ (for $(a,b)\neq 0$).<br><br>
Example 2 is the special case $n = 2$ of <b>Theorem 6.0</b> and explains why the dual space $\mathbb{R}^{2*}$ corresponds to the space of pairs $(a,b)$ ($\mathbb{R}^2\cong\mathbb{R}^{2*}$).`,
    example: R`Let $f$ be linear with $f(1,0) = 3$ and $f(0,1) = -2$. Then $f(4,5) = 4\cdot 3+5\cdot(-2) = 2$, so $f = f_{3,-2}$.<br>
If one knows $f$ on a <b>different</b> basis, e.g. $f(1,1) = 5$, $f(1,-1) = 1$: then $f(1,0) = f(\tfrac12(1,1)+\tfrac12(1,-1)) = 3$, $f(0,1) = f(\tfrac12(1,1)-\tfrac12(1,-1)) = 2$, so $f = f_{3,2}$.`,
    counterexample: R`<b>Affine instead of linear function:</b> $g(\alpha,\beta) = 2\alpha+3\beta+1$ is not a functional ($g(0,0) = 1$) and not of the form $f_{a,b}$.<br>
<b>Values on a non-basis determine nothing:</b> if one only knows $f(1,2) = 4$ and $f(2,4) = 8$, then $f$ is <b>not</b> determined: $f_{4,0}$ and $f_{0,2}$ both satisfy this.`
  },
  "la6_satz_6_0": {
    title: "Theorem 6.0: Functionals in coordinates – row times column",
    category: "6a Linear maps and functionals",
    type: "satz",
    front: R`State and prove <b>Theorem 6.0</b>. How does one write a functional as a matrix product $(1\times n)\cdot(n\times 1)$?`,
    back: R`<b>Theorem 6.0:</b> Let $V$ be a finite-dimensional VS over $K$, $\{x_1,\dots,x_n\}$ a basis of $V$, and $f: V\to K$ a functional. Then there exist $a_1,\dots,a_n\in K$ such that for every $y = \sum_{i=1}^n\alpha_ix_i$:
$$f(y) = \sum_{i=1}^na_i\cdot\alpha_i.$$
<b>Proof:</b> Put $a_i := f(x_i)$. For $y\in V$ there are (unique) $\alpha_i$ with $y = \sum\alpha_ix_i$, and since $f$ is linear:
$$f(y) = f\Big(\sum_{i=1}^n\alpha_ix_i\Big) = \sum_{i=1}^nf(\alpha_ix_i) = \sum_{i=1}^n\alpha_i f(x_i) = \sum_{i=1}^na_i\alpha_i.$$
<b>Representation with matrices:</b> $a_1,\dots,a_n$ as a $(1\times n)$ matrix, $y$ as a column vector ($(n\times 1)$ matrix):
$$\underset{(1\times n)}{(a_1,\dots,a_n)}\cdot\underset{(n\times 1)}{\begin{pmatrix}\alpha_1\\\vdots\\\alpha_n\end{pmatrix}} := a_1\alpha_1+\dots+a_n\alpha_n = f(y),$$
where $a_j = f(x_j)$. The result is a $(1\times 1)$ matrix; the product is the usual dot product.`,
    meta: "Script: Ch. 6, Theorem 6.0 with proof, representation of f with matrices",
    explanation: R`<b>The core of linear algebra in one theorem:</b> if one knows a linear map on a basis, one knows it everywhere. For functionals these are $n$ numbers – a <b>row</b>. Vectors become <b>columns</b> (their coordinates), and evaluating is “row times column”.<br><br>
<b>This is the origin of matrix multiplication:</b> in Ch. 7 a linear map $V\to W$ ($\dim(W) = m$) becomes $m$ such rows stacked on top of each other – an $(m\times n)$ matrix – and applying it to a vector becomes $m$ dot products.<br><br>
<b>Careful:</b> the numbers $a_i$ depend on the chosen basis! The same functional has a different row in another basis (change of basis, Ch. 8).`,
    example: R`$V$ = polynomials of degree $\le 2$, basis $\{1,x,x^2\}$, $f(p) := \int_0^1p(x)\,dx$. Then $a_1 = \int_0^11 = 1$, $a_2 = \int_0^1x = \tfrac12$, $a_3 = \int_0^1x^2 = \tfrac13$.<br>
For $p = 2-3x+6x^2$: $(1,\tfrac12,\tfrac13)\cdot\begin{pmatrix}2\\-3\\6\end{pmatrix} = 2-\tfrac32+2 = \tfrac52$, and directly $\int_0^1(2-3x+6x^2)dx = 2-\tfrac32+2 = \tfrac52$ ✓.`,
    counterexample: R`<b>Infinite-dimensional:</b> for $F(f) = \int_a^bf\,dx$ on the step functions (Exercise sheet 6, 28) with basis $B$, $F(\chi_t) = t-a\neq 0$ for infinitely many basis vectors – the “row” $(a_i)$ has infinitely many entries $\neq 0$ and is not a finite LC of the $\chi^*$.<br>
<b>Non-linear function:</b> $g(p) = p(0)^2$ has no such representation: $g(2) = 4\neq 2\cdot g(1) = 2$.`
  },
  // ========================================================================
  // 6b THE DUAL SPACE
  // ========================================================================
  "la6_satz_6_1": {
    title: "Theorem 6.1: The functionals form a vector space V*",
    category: "6b The dual space V*",
    type: "satz",
    front: R`State <b>Theorem 6.1</b>: how are functionals added and multiplied by scalars, and why is the result again a functional?`,
    back: R`<b>Theorem 6.1:</b> Let $V$ be a VS over $K$. Then the set $V^*$ of functionals $f: V\to K$ with
$$(f+^*g)(x) := f(x)+_Kg(x),\qquad(\lambda\cdot^*f)(x) := \lambda\cdot f(x)\;[\text{mult. in }K]$$
is a VS over $K$. [Correction: in $(f+^*g)(x)$ the right side has $+_K$, not $+_V$.]<br><br>
<b>Proof (excerpt):</b> $f+^*g$ is a functional:<br>
(i) $(f+^*g)(x+y) = f(x)+f(y)+g(x)+g(y) = (f+^*g)(x)+(f+^*g)(y)$;<br>
(ii) $(f+^*g)(\lambda x) = \lambda f(x)+\lambda g(x) = \lambda(f+^*g)(x)$.<br>
• $+^*$ is associative and commutative, since $+$ in $K$ is ⇒ commutative semigroup.<br>
• Neutral element: the <b>zero functional</b>; inverse of $f$: $-f: x\mapsto-f(x)$ ⇒ abelian group.<br>
• Axioms of scalar multiplication analogously, e.g. $((\lambda+\mu)\cdot^*f)(x) = (\lambda+\mu)f(x) = (\lambda\cdot^*f)(x)+_K(\mu\cdot^*f)(x)$.`,
    meta: "Script: Ch. 6, Theorem 6.1 with proof and corrections",
    explanation: R`Functionals are added and scaled <b>pointwise</b> – like functions in Exercise sheet 2, Exercise 14. What is new is only the verification that <b>linearity is preserved</b>: sums and multiples of linear functionals are linear again. Thus $V^*$ is a subspace of the space of all functions $V\to K$.<br><br>
<b>Why this matters:</b> functionals are not only tools, but themselves <b>vectors</b>. One can speak about their dimension (Theorem 6.2), bases (dual basis) and even functionals on them (bidual space $V^{**}$, Ch. 9).<br><br>
Theorem 7.1 generalises this to $\mathrm{Hom}(V,W)$; there the proof is “somewhat simpler, because one can distinguish $W$ and $K$ better”.`,
    example: R`$f(x_1,x_2) = 3x_1-x_2$, $g(x_1,x_2) = x_1+2x_2$ on $\mathbb{R}^2$: $(f+^*g)(x) = 4x_1+x_2$; $(2\cdot^*f)(x) = 6x_1-2x_2$. E.g. $(f+^*g)(1,1) = 5 = f(1,1)+g(1,1) = 2+3$ ✓. In row form: $(3,-1)+(1,2) = (4,1)$.`,
    counterexample: R`<b>The product is not a VS operation in $V^*$:</b> $(f\cdot g)(x) := f(x)\cdot g(x)$ is in general <b>not linear</b>: with $f = g = $ id on $\mathbb{R}$, $(fg)(2) = 4\neq 2\cdot(fg)(1) = 2$.<br>
<b>Confusing $+_V$ / $+_K$:</b> $f(x)$ lies in $K$, not in $V$ – so “$f(x)+_Vg(x)$” (error in the official script) makes no sense as soon as $V\neq K$.`
  },
  "la6_def_dualraum": {
    title: "Definition: Dual space V* (and ℝ²* ≅ ℝ²)",
    category: "6b The dual space V*",
    type: "definition",
    front: R`What is the <b>dual space</b> $V^*$? Why does $\mathbb{R}^{2*}$ “correspond” to the space $\mathbb{R}^2$?`,
    back: R`<b>Definition:</b> Let $V$ be a VS over $K$. The VS of all functionals $f: V\to K$ is called the <b>dual space</b> of $V$ and is denoted by $V^*$. (Later: $V^* = \mathrm{Hom}(V,K)$.)<br><br>
<b>Example:</b> By example 2, the dual space $\mathbb{R}^{2*}$ of $\mathbb{R}^2 = \{(\alpha,\beta)\}$ corresponds to the space $\{(a,b): a,b\in\mathbb{R}\}$ (via $f = f_{a,b}$). I.e. $\mathbb{R}^2$ and $\mathbb{R}^{2*}$ are <b>isomorphic</b> (they have the same structure; iso = same, morphe = form, shape).`,
    meta: "Script: Ch. 6, definition of dual space, example ℝ²*",
    explanation: R`<b>Vectors vs. functionals – columns vs. rows:</b> a vector $x\in K^n$ is a column of coordinates, a functional $f\in K^{n*}$ is a row $(a_1,\dots,a_n)$, and $f(x)$ is row times column. Both spaces have the same dimension (Theorem 6.2), but are <b>conceptually different</b>: a functional is a “measuring device” that assigns a number to a vector.<br><br>
<b>Examples of functionals:</b> reading off a coordinate ($x\mapsto\alpha_i$), evaluating a polynomial at a point $t_0$ ($p\mapsto p(t_0)$), derivative at a point ($p\mapsto p'(t_0)$), integral ($p\mapsto\int_0^1p$), sum of all sequence terms in $c_{00}$.<br><br>
<b>Careful:</b> $\mathbb{R}^2\cong\mathbb{R}^{2*}$ is true, but the isomorphism $f_{a,b}\leftrightarrow(a,b)$ depends on the choice of basis $\{e_1,e_2\}$. Only $V\cong V^{**}$ (Theorem 9.0) is “canonical”.`,
    example: R`<b>Evaluation:</b> $\mathrm{ev}_2: \mathbb{Q}[X]\to\mathbb{Q}$, $p\mapsto p(2)$ is in $\mathbb{Q}[X]^*$; e.g. $\mathrm{ev}_2(1+X-X^3) = 1+2-8 = -5$.<br>
<b>Row ↔ functional:</b> $(5,-1)\in\mathbb{R}^2$ corresponds to $f_{5,-1}$, and $f_{5,-1}(2,3) = 10-3 = 7$.`,
    counterexample: R`<b>$V\not\cong V^*$ in the infinite case:</b> for $c_{00}(\mathbb{F}_2)$, $\dim(c_{00}) \lt\dim(c_{00}^*)$ – the dual space is uncountable, $c_{00}(\mathbb{F}_2)$ only countable (Exercise sheet 6, Exercise 27).<br>
<b>Not an element of the dual space:</b> $p\mapsto\deg(p)$ (degree) is not linear: $\deg(X+(-X)) = \deg(0)\neq\deg X+\deg(-X) = 2$.`
  },
  // ========================================================================
  // 6c DUAL BASIS
  // ========================================================================
  "la6_def_duale_basis": {
    title: "Definition: δ-function and dual basis B*",
    category: "6c Dual basis",
    type: "definition",
    front: R`How is the <b>δ-function</b> $\delta_i^j$ defined? What is the <b>dual basis</b> $B^*$ of $B = \{x_1,\dots,x_n\}$?`,
    back: R`<b>δ-function:</b> For $i,j\in\mathbb{N}$:
$$\delta_i^j := \begin{cases}1 & \text{if } i = j,\\ 0 & \text{if } i\neq j.\end{cases}$$
<b>Definition:</b> If $B = \{x_1,\dots,x_n\}$ is a basis of $V$, then $B^* = \{x_1^*,\dots,x_n^*\}\subseteq V^*$ with
$$x_i^*(x_j) := \delta_i^j$$
(and extended linearly: $x_i^*(x+y) := x_i^*(x)+x_i^*(y)$, $x_i^*(\lambda x) := \lambda x_i^*(x)$) is the <b>dual basis</b> of $V^*$ to $B$; $B$ and $B^*$ form a <b>pair of dual bases</b>.<br><br>
Concretely: $x_i^*$ reads off the <b>$i$-th coordinate</b> with respect to $B$: $x_i^*\big(\sum_j\lambda_jx_j\big) = \lambda_i$.`,
    meta: "Script: Ch. 6, δ-function (in the proof of Theorem 6.2), definition of dual basis",
    explanation: R`<b>The dual basis = the coordinate reading devices.</b> $x_i^*$ is the functional that is “$1$ on $x_i$, $0$ on all other basis vectors”. Applying it to an arbitrary vector gives its $i$-th coordinate.<br><br>
<b>With this everything becomes readable:</b><br>
• coordinates of a vector: $\lambda_i = x_i^*(x)$;<br>
• coefficients of a functional: $f = \sum_i f(x_i)\cdot x_i^*$ (proof of Theorem 6.2);<br>
• entries of a representing matrix: $\alpha_i^j = y_i^*(\varphi(x_j))$ (Exercise sheet 8, Exercise 33);<br>
• inverse map $\Phi^{-1}: V\to K^n$ in Theorem 7.3.<br><br>
<b>Main trap:</b> $x_i^*$ depends on the <b>whole</b> basis $B$, not just on $x_i$ (counterexample).`,
    example: R`$\mathbb{R}^2$ with basis $x_1 = (1,1)$, $x_2 = (1,-1)$: $x_1^*(a,b) = \tfrac{a+b}{2}$, $x_2^*(a,b) = \tfrac{a-b}{2}$. Check: $x_1^*(x_1) = 1$, $x_1^*(x_2) = 0$, $x_2^*(x_1) = 0$, $x_2^*(x_2) = 1$ ✓. For $(5,1)$: coordinates $(3,2)$, and indeed $(5,1) = 3x_1+2x_2$.`,
    counterexample: R`<b>$x_1^*$ does not depend only on $x_1$:</b> in the standard basis $\{(1,0),(0,1)\}$, $(1,0)^*(a,b) = a$. In the basis $\{(1,0),(1,1)\}$, however, $(1,0)^*(a,b) = a-b$ (check: $(1,0)\mapsto 1$, $(1,1)\mapsto 0$ ✓). The same vector $(1,0)$, two different dual functionals!`
  },
  "la6_satz_6_2": {
    title: "Theorem 6.2: dim(V*) = dim(V)",
    category: "6c Dual basis",
    type: "satz",
    front: R`State <b>Theorem 6.2</b> and sketch the idea of the proof. Does it also hold for infinite-dimensional VS?`,
    back: R`<b>Theorem 6.2:</b> Let $V$ be a <b>finite-dimensional</b> VS over $K$. Then
$$\dim(V^*) = \dim(V).$$
<b>Idea of proof:</b> If $\{x_1,\dots,x_n\}$ is a basis of $V$, then the dual family $\{x_1^*,\dots,x_n^*\}$ with $x_i^*(x_j) = \delta_i^j$ is a basis of $V^*$:<br>
• <b>spanning:</b> every $f\in V^*$ is $f = \sum_{i=1}^nf(x_i)\cdot x_i^*$;<br>
• <b>l.i.:</b> from $\sum\lambda_ix_i^* = 0_{V^*}$, substituting $x_j$ gives $\lambda_j = 0$.<br><br>
<b>Only finite-dimensional:</b> for $c_{00}$ (infinite-dim. over $\mathbb{Q}$ resp. $\mathbb{F}_2$) we have $\dim(c_{00})\lt\dim(c_{00}^*)$ (example 2 / Exercise 27).`,
    meta: "Script: Ch. 6, Theorem 6.2; example 2 (c₀₀, Exercise 27)",
    explanation: R`<b>Intuition:</b> a functional is determined by its $n$ values on a basis (Theorem 6.0), and these values may be chosen <b>freely</b>. So there are “exactly $n$ degrees of freedom” – as many as coordinates of a vector.<br><br>
<b>Why does it break down in the infinite case?</b> With an infinite basis one may choose the values of a functional freely on <b>all infinitely many</b> basis vectors (e.g. $1$ everywhere), but a linear combination of the $x_i^*$ is $0$ on almost all basis vectors (finite sums!). So the $x_i^*$ span only a small part of $V^*$.<br><br>
<b>Consequence:</b> $V\cong V^*$ (finite-dim.), but only via the chosen basis; without choosing a basis one has the canonical $V\cong V^{**}$ (Theorem 9.0).`,
    example: R`$V$ = polynomials of degree $\le 2$ (dimension $3$), basis $\{1,x,x^2\}$, dual basis $\{p_0^*,p_1^*,p_2^*\}$ (reading off the coefficient). The functional $\mathrm{ev}_2: p\mapsto p(2)$ is $\mathrm{ev}_2 = 1\cdot p_0^*+2\cdot p_1^*+4\cdot p_2^*$, since $\mathrm{ev}_2(1) = 1$, $\mathrm{ev}_2(x) = 2$, $\mathrm{ev}_2(x^2) = 4$. Check: $\mathrm{ev}_2(3-x+x^2) = 3-2+4 = 5$ ✓.`,
    counterexample: R`<b>Exercise sheet 6, Exercise 27:</b> in $c_{00}(\mathbb{F}_2)$ with basis $\{e_i\}$, $f_{\mathbb{N}}(a) := \sum_na_n$ (parity of the number of ones) is a functional with $f_{\mathbb{N}}(e_j) = 1$ for <b>all</b> $j$; but every finite LC $\sum_{i\in T}\lambda_ie_i^*$ is $0$ on all $e_j$ with $j\notin T$. So $f_{\mathbb{N}}\notin\langle\{e_i^*\}\rangle$.`
  },
  "la6_beweis_6_2": {
    title: "Proof of Theorem 6.2 (the dual basis is a basis)",
    category: "6c Dual basis",
    type: "beweis",
    front: R`Prove in detail: if $\{x_1,\dots,x_n\}$ is a basis of $V$, then $\{x_1^*,\dots,x_n^*\}$ is a basis of $V^*$.`,
    back: R`Define $x_i^*(x_j) := \delta_i^j$ and extend linearly.<br>
<b>1. $\langle\{x_1^*,\dots,x_n^*\}\rangle = V^*$:</b> Let $f\in V^*$, $a_i := f(x_i)$. We show $f = \sum_{i=1}^na_ix_i^*$. For arbitrary $y = \sum_{j=1}^n\lambda_jx_j$ we have on the one hand $f(y) = \sum_ja_j\lambda_j$, on the other hand
$$\Big(\sum_{i=1}^na_ix_i^*\Big)(y) = \sum_{i=1}^n\sum_{j=1}^n a_i\lambda_j\underbrace{x_i^*(x_j)}_{=\delta_i^j} = \sum_{i=1}^na_i\lambda_i.$$
So both functionals agree everywhere.<br>
<b>2. l.i.:</b> If $f := \sum_{i=1}^n\lambda_ix_i^* = 0_{V^*}$ (the zero functional), then for all $1\le j\le n$:
$$\Big(\sum_{i=1}^n\lambda_ix_i^*\Big)(x_j) = \begin{cases}0_K & \text{because }f = 0_{V^*},\\ \lambda_j & \text{from the def. of the }x_i^*,\end{cases}$$
so $\lambda_j = 0$ for all $j$.<br>
Thus $\{x_1^*,\dots,x_n^*\}$ is a basis of $V^*$ and $\dim(V^*) = n = \dim(V)$.`,
    meta: "Script: Ch. 6, proof of Theorem 6.2",
    explanation: R`<b>Two standard tricks</b> worth remembering:<br>
• <b>Equality of functionals</b> (in general of linear maps) is shown by evaluating on arbitrary vectors – or just on a basis, since linearity takes care of the rest.<br>
• <b>Filtering out coefficients</b> by plugging in a basis vector: because $x_i^*(x_j) = \delta_i^j$, exactly the $j$-th summand “survives” from the sum. The δ acts like a sieve.<br><br>
The same technique gives in Ch. 9 the matrix of the dual map ($\eta_j^i = \mu_i^j$) and in Exercise sheet 8 the formula $\alpha_i^j = y_i^*(\varphi(x_j))$.`,
    example: R`$V = \mathbb{R}^2$, basis $x_1 = (1,1)$, $x_2 = (1,-1)$, $f(a,b) = 2a+3b$. Then $a_1 = f(x_1) = 5$, $a_2 = f(x_2) = -1$, so $f = 5x_1^*-x_2^*$. Check at $(4,2)$: $5\cdot\tfrac{6}{2}-\tfrac{2}{2} = 15-1 = 14 = 2\cdot 4+3\cdot 2$ ✓.`,
    counterexample: R`<b>Agreement on one vector is not enough:</b> $f(a,b) = a$ and $g(a,b) = b$ agree on $(1,1)$, but are different ($f(1,0) = 1\neq 0 = g(1,0)$). One needs agreement on a <b>whole basis</b>.`
  },
  "la6_bsp_fib_dual": {
    title: "Example: Dual basis of Fib and the functional as a row vector",
    category: "6c Dual basis",
    type: "beispiel",
    front: R`Let $B = \{F_{1,0},F_{0,1}\}$ be the basis of $\mathrm{Fib}$. Describe the dual basis $B^*$ and how a functional $F^* = \lambda_1F_{1,0}^*+\lambda_2F_{0,1}^*$ acts on $F_{a,b}$.`,
    back: R`• $F_{a,b} = a\cdot F_{1,0}+b\cdot F_{0,1}$.<br>
• $B^* = \{F_{1,0}^*,F_{0,1}^*\}$ with $F_{i,1-i}^*(F_{j,1-j}) = \delta_i^j$ for $i,j\in\{0,1\}$ – concretely: $F_{1,0}^*$ reads off $f_0$, $F_{0,1}^*$ reads off $f_1$.<br>
• $B$ and $B^*$ form a pair of dual bases.<br>
• For $F^* = \lambda_1F_{1,0}^*+\lambda_2F_{0,1}^*$ we have
$$F^*(F_{a,b}) = \lambda_1\cdot a+\lambda_2\cdot b = \underbrace{(\lambda_1,\lambda_2)}_{\text{corresponds to }F^*}\cdot\underbrace{\begin{pmatrix}a\\b\end{pmatrix}}_{\text{corresponds to }F_{a,b}}.$$`,
    meta: "Script: Ch. 6, example 1 after the definition of the dual basis (Fib, Exercises 11, 17)",
    explanation: R`The example shows the row-column view in an “abstract” space: Fibonacci sequences are infinite sequences, but since $\dim(\mathrm{Fib}) = 2$, two coordinates suffice (the initial values). Functionals on Fib are then simply rows $(\lambda_1,\lambda_2)$.<br><br>
<b>Interesting functionals on Fib</b> are e.g. “read off the $n$-th term”: $\mathrm{ev}_n(F_{a,b}) = f_n$. Since $f_n$ is linear in $(a,b)$, there are $(\lambda_1,\lambda_2)$ with $f_n = \lambda_1a+\lambda_2b$ – namely $\lambda_1 = f_n(F_{1,0})$, $\lambda_2 = f_n(F_{0,1})$.`,
    example: R`$\mathrm{ev}_4$ (fourth term, index $4$): $F_{1,0} = (1,0,1,1,2,\dots)$, $F_{0,1} = (0,1,1,2,3,\dots)$ ⇒ $\mathrm{ev}_4 = 2F_{1,0}^*+3F_{0,1}^*$. For $F_{3,5} = (3,5,8,13,21,\dots)$: $(2,3)\cdot\begin{pmatrix}3\\5\end{pmatrix} = 6+15 = 21$ ✓.`,
    counterexample: R`<b>“Sum of all terms”</b> is not a functional on Fib (the series diverges, e.g. for $F_{1,1} = (1,1,2,3,5,\dots)$) – not every “natural” assignment is even defined. In contrast, $F_{a,b}\mapsto f_0+f_1+f_2 = 2a+2b$ is a functional, namely $2F_{1,0}^*+2F_{0,1}^*$.`
  },
  // ========================================================================
  // EXERCISE SHEETS 5 AND 6
  // ========================================================================
  "la6_s5_a26_f23": {
    title: "Exercise sheet 5, Exercise 26: Evaluating a functional on 𝔽₂₃²",
    category: "6a Linear maps and functionals",
    type: "aufgabe",
    front: R`Let $f:\mathbb{F}_{23}^2\to\mathbb{F}_{23}$ be the functional with $f(22,2) = 7$ and $f(1,22) = 20$. Compute $f(11,3)$.`,
    back: R`Set $x_1 := (22,2) = (-1,2)$, $x_2 := (1,22) = (1,-1)$, $e_1 = (1,0)$, $e_2 = (0,1)$.<br>
<b>Express the standard basis through $x_1,x_2$:</b> ansatz $e_1 = \lambda x_1+\mu x_2$: $-\lambda+\mu = 1$, $2\lambda-\mu = 0$ ⇒ $\lambda = 1$, $\mu = 2$. Analogously $e_2 = x_1+x_2$. So
$$e_1 = x_1+2x_2,\qquad e_2 = x_1+x_2.$$
<b>Values:</b> $f(e_1) = 7+2\cdot(-3) = 1$, $f(e_2) = 7+(-3) = 4$ (since $20 = -3$ in $\mathbb{F}_{23}$).<br>
<b>Result:</b>
$$f(11,3) = 11\cdot f(e_1)+3\cdot f(e_2) = 11+12 = 23 = 0.$$`,
    meta: "Exercise sheet 5, Exercise 26",
    explanation: R`<b>Strategy (Theorem 6.0 backwards):</b> a functional is determined by its values on a basis. Here one knows the values on the basis $\{x_1,x_2\}$; to compute $f(11,3)$ conveniently, one first determines the values on the standard basis – i.e. the row $(f(e_1),f(e_2)) = (1,4)$. Then $f(\alpha,\beta) = \alpha+4\beta$.<br><br>
<b>Calculating in $\mathbb{F}_{23}$:</b> instead of computing with $22$ and $20$, one replaces them by the small representatives $-1$ and $-3$. At the end one reduces modulo $23$.<br><br>
<b>Check:</b> $f(x_1) = f(-1,2) = -1+8 = 7$ ✓ and $f(x_2) = f(1,-1) = 1-4 = -3 = 20$ ✓.`,
    example: R`With the formula $f(\alpha,\beta) = \alpha+4\beta$ in $\mathbb{F}_{23}$: $f(5,5) = 25 = 2$; $f(0,6) = 24 = 1$; $f(19,1) = 23 = 0$ – so $(11,3)$ and $(19,1)$ lie in the kernel of $f$ (and indeed $(19,1)\cdot 3 = (57,3) = (11,3)$).`,
    counterexample: R`<b>Calculating over $\mathbb{Q}$ instead of $\mathbb{F}_{23}$ would be wrong:</b> with $f(22,2) = 7$, $f(1,22) = 20$ over $\mathbb{R}$ one would obtain a completely different functional (the vectors $(22,2),(1,22)$ would have other coordinates). The field determines which equations hold – $22 = -1$ holds only in $\mathbb{F}_{23}$.`
  },
  "la6_s6_a27_c00": {
    title: "Exercise sheet 6, Exercise 27: c₀₀(𝔽₂) – the dual family is not a basis",
    category: "6c Dual basis",
    type: "aufgabe",
    front: R`$c_{00}(\mathbb{F}_2)$ = sequences in $\mathbb{F}_2$ with only finitely many ones. Show: (a) $\{e_i: i\in\mathbb{N}\}$ is a basis; (b) $f_S(a) := \sum_{n\in S}a_n$ is a functional for every $S\subseteq\mathbb{N}$; (c) $\langle\{e_i^*\}\rangle\neq c_{00}(\mathbb{F}_2)^*$.`,
    back: R`<b>(a)</b> For $a$ with finite support $T = \mathrm{supp}(a) = \{n: a_n = 1\}$ we have $a = \sum_{i\in T}e_i$ (compare termwise). l.i.: from $\sum_k\lambda_ke_{i_k} = 0$ it follows by reading off at the position $i_l$ that $\lambda_l = 0$.<br>
<b>(b)</b> The sum has only finitely many summands $\neq 0$ ($n\in S\cap\mathrm{supp}(a)$), so it is well defined; linearity termwise. E.g. $f_{\{i\}} = e_i^*$; $f_{\mathbb{N}}$ = parity of the number of ones.<br>
<b>(c)</b> Every $g\in W := \langle\{e_i^*\}\rangle$ is $g = \sum_{i\in T}\lambda_ie_i^*$ ($T$ finite), so $g(e_j) = 0$ for $j\notin T$. But $f_{\mathbb{N}}(e_j) = 1$ for <b>all</b> $j$. So $f_{\mathbb{N}}\notin W$.<br>
<b>Remark:</b> $c_{00}(\mathbb{F}_2)^*$ is even uncountable ($S\mapsto f_S$ is injective on $\mathcal{P}(\mathbb{N})$, Cantor), while $c_{00}(\mathbb{F}_2)$ is only countable – Theorem 6.2 holds only in the finite-dimensional case.`,
    meta: "Exercise sheet 6, Exercise 27 (with remarks); Script Ch. 6, example 2 after the dual basis",
    explanation: R`<b>The mechanism:</b> linear spans only contain <b>finite</b> combinations. A functional, however, can be specified by arbitrary values on <b>all</b> basis vectors. The $e_i^*$ capture only functionals that are “almost everywhere zero” on the basis.<br><br>
<b>Counting argument</b> (model solution): $W$ is countable (every $g\in W$ corresponds to a finite subset of $\mathbb{N}$), but $\{f_S: S\subseteq\mathbb{N}\}$ is as large as $\mathcal{P}(\mathbb{N})$ – uncountable (Cantor’s theorem, Ch. 1). Here the logic chapter and linear algebra meet.<br><br>
<b>Remark:</b> $\{e_i^*\}$ is l.i. and can (by the axiom of choice) be extended to a basis of $c_{00}^*$ – which is strictly larger.`,
    example: R`$a = (1,0,1,1,0,0,\dots) = e_0+e_2+e_3$. With $S = \{0,1,2\}$: $f_S(a) = 1+0+1 = \bar 0$. With $S = \mathbb{N}$: $f_{\mathbb{N}}(a) = 1+1+1 = \bar 1$ (three ones, odd). $e_2^*(a) = 1$.`,
    counterexample: R`<b>In the finite case it works:</b> on $\mathbb{F}_2^3$, $f_{\{0,1,2\}} = e_0^*+e_1^*+e_2^*$ – every functional lies in the span of the dual basis, and $\dim(\mathbb{F}_2^3)^* = 3$ (there are $2^3 = 8$ functionals = 8 subsets $S$).`
  },
  "la6_s6_a28_treppen": {
    title: "Exercise sheet 6, Exercise 28: Step functions and the integral as a functional",
    category: "6c Dual basis",
    type: "aufgabe",
    front: R`$TF([a,b])$ = step functions on $[a,b]$. Show: (a) $B = \{\chi_t: t\in(a,b]\}\cup\{\chi_{\{s\}}: s\in[a,b]\}$ is a basis ($\chi_t = 1$ on $[a,t)$, $\chi_{\{s\}} = 1$ only at $s$); (b) $F(f) = \int_a^bf\,dx$ is a functional; (c) $F\notin\langle\{\chi^*:\chi\in B\}\rangle$.`,
    back: R`<b>Observation:</b> $\chi_t-\chi_u = \mathbb{1}_{[u,t)}$ for $a\le u\lt t\le b$ (with $\chi_a := 0$).<br>
<b>(a) spanning:</b> For $f$ with partition $a = t_0\lt\dots\lt t_k = b$ and values $c_j$ on $(t_{j-1},t_j)$,
$$f = \sum_{j=1}^kc_j(\chi_{t_j}-\chi_{t_{j-1}})+\sum_{j=0}^k\big(f(t_j)-g(t_j)\big)\chi_{\{t_j\}},$$
where $g$ is the first sum. <b>l.i.:</b> in $\sum\lambda_i\chi_{t_i}+\sum\mu_j\chi_{\{s_j\}} = 0$ plug in points $r\in[t_{i-1},t_i)$ outside the $s_j$ (descending induction ⇒ $\lambda_i = 0$), then $r = s_j$ ⇒ $\mu_j = 0$.<br>
<b>(b)</b> $\int_a^bf = \sum_jc_j(t_j-t_{j-1})$ is linear (common refinement).<br>
<b>(c)</b> Every $G\in\langle\{\chi^*\}\rangle$ vanishes on almost all $\chi\in B$; but $F(\chi_t) = t-a\gt 0$ for all $t\in(a,b]$ – infinitely many.`,
    meta: "Exercise sheet 6, Exercise 28",
    explanation: R`As in Exercise 27: an infinite-dimensional space has a “too large” dual space. The <b>integral</b> – the most natural functional on step functions – is <b>not a finite combination</b> of coordinate functionals, because it has a value $\neq 0$ on every “step block” $\chi_t$.<br><br>
<b>Intuition for the basis:</b> $\chi_t$ are “steps from $a$ up to $t$”; differences of steps give arbitrary step blocks $\mathbb{1}_{[u,t)}$. The point functions $\chi_{\{s\}}$ correct the values at the finitely many jump points (which the integral does not see).<br><br>
<b>Connection to analysis:</b> linearity of the integral is exactly the statement “$F\in TF([a,b])^*$”.`,
    example: R`On $[0,3]$: $f = 2$ on $(0,1)$, $5$ on $(1,3)$, $f(0) = f(1) = f(3) = 0$. Then $g = 2(\chi_1-\chi_0)+5(\chi_3-\chi_1) = -3\chi_1+5\chi_3$ (with $\chi_0 = 0$), $g(0) = 2$, $g(1) = 5$, $g(3) = 0$, so $f = -3\chi_1+5\chi_3-2\chi_{\{0\}}-5\chi_{\{1\}}$. Integral: $F(f) = 2\cdot 1+5\cdot 2 = 12 = -3F(\chi_1)+5F(\chi_3) = -3+15$ ✓.`,
    counterexample: R`<b>Point functions alone are not enough:</b> $\{\chi_{\{s\}}: s\in[a,b]\}$ is l.i., but only generates functions that are $0$ almost everywhere – $\chi_t$ (constant $1$ on an interval) is not a finite sum of point functions.<br>
<b>The integral does not see points:</b> $F(\chi_{\{s\}}) = 0$ for all $s$.`
  }
};
})();
