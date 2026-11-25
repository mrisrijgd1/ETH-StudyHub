/* ==========================================================================
   LINEAR ALGEBRA I – CHAPTER 5 (English): Subspaces, affine spaces and quotient spaces
   (Lemmas 5.0–5.6) + Exercise sheet 5 (Exercises 24, 25)
   Linear Algebra I – Prof. Dr. Lorenz Halbeisen, HS 2026
   English translation of data_kapitel5.js. Formulas, HTML and ids are identical.
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_EN_KAPITEL_5 = {
  // ========================================================================
  // 5a SUBSPACES
  // ========================================================================
  "la5_def_unterraum": {
    title: "Definition: Subspace (linear subspace)",
    category: "5a Subspaces",
    type: "definition",
    front: R`When is a subset $W\subseteq V$ of a vector space $(V,+_V)$ over $K$ a <b>subspace</b>? What are the trivial subspaces?`,
    back: R`Let $(V,+_V)$ be a VS over $K$ with scalar multiplication $\ast$ and $W\subseteq V$ a subset. Then $W$ is a <b>subspace</b> of $V$ [more precisely: linear subspace or sub-vector space] if:
<ul><li><b>(i)</b> $+_V$ is a binary operation on $W$,</li>
<li><b>(ii)</b> $(W,+_V)$ is a VS over $K$ with scalar multiplication $\ast$.</li></ul>
<b>Example 0:</b> For every VS $V$, $\{0_V\}\subseteq V$ and $V\subseteq V$ are subspaces – the <b>trivial</b> subspaces.`,
    meta: "Script: Ch. 5, definition of subspace, example 0",
    explanation: R`A subspace is a VS that <b>lives inside a larger VS</b> and uses its operations. Geometrically: lines and planes <b>through the origin</b>.<br><br>
<b>What does one really have to check?</b> The “for all” axioms (associativity, distributivity, …) are inherited from $V$. What remains is only to check that when calculating one <b>stays in $W$</b>: sums and multiples – and with them $0_V = 0\cdot x$ and $-x = (-1)\cdot x$ (Lemma 3.0). Lemma 5.0 summarises this elegantly: $W$ is a subspace ⟺ $\langle W\rangle = W$ (Exercise 20(a)).<br><br>
<b>Quick test:</b> If $0_V$ is not in $W$, then $W$ is certainly not a subspace. (This is necessary, but not sufficient!)`,
    example: R`<b>1.</b> $\{(x,y,z)\in\mathbb{R}^3: x-y-z = 0\}$ (plane through $0$): $(2,1,1)+(1,1,0) = (3,2,1)$, and $3-2-1 = 0$ ✓; $5\cdot(2,1,1) = (10,5,5)$, $10-5-5 = 0$ ✓.<br>
<b>2.</b> Fib is a subspace of $S(\mathbb{R})$; the polynomials of degree $\le 2$ are a subspace of $\mathbb{Q}[X]$.<br>
<b>3.</b> The solution set of a homogeneous linear system, e.g. $\{x\in\mathbb{R}^3: x_1+2x_2 = 0\}$.`,
    counterexample: R`<b>1.</b> $\{(x,y): x+y = 1\}$: $(0,0)$ is missing (affine space, not a subspace).<br>
<b>2.</b> $\{(x,y): xy\ge 0\}$ (1st and 3rd quadrant including the axes): contains $0$ and all multiples, but $(2,1)+(-1,-2) = (1,-1)$ has $xy = -1\lt 0$ – not closed under $+$.<br>
<b>3.</b> (Stammbach I.4.18) $\{a\in\mathbb{R}^4: a_1\in\mathbb{Q}\}$ is closed under $+$, but $\sqrt 2\cdot(1,0,0,0)$ falls out.`
  },
  "la5_lemma_5_0": {
    title: "Lemma 5.0: W is a subspace ⟺ ⟨W⟩ = W",
    category: "5a Subspaces",
    type: "lemma",
    front: R`State <b>Lemma 5.0</b> and explain how one uses it in practice as a subspace criterion.`,
    back: R`<b>Lemma 5.0:</b> Let $V$ be a VS over $K$. Then $W\subseteq V$ is a subspace of $V$ <b>if and only if</b>
$$\langle W\rangle = W.$$
(Proof: Exercise 20(a).)<br><br>
<b>In practice:</b> Since $W\subseteq\langle W\rangle$ always holds, one only has to show $\langle W\rangle\subseteq W$, i.e. that $W$ is closed under linear combinations. For this it suffices that:
$$0_V\in W\quad\text{and}\quad\forall x_1,x_2\in W\;\forall\lambda,\mu\in K:\;\lambda x_1+\mu x_2\in W$$
(by induction, closure under arbitrary finite LCs follows; $0_V$ covers the empty sum).`,
    meta: "Script: Ch. 5, Lemma 5.0 (Exercise 20(a)); used in Lemma 5.1, Theorems 10.1, 10.2",
    explanation: R`<b>Why does (⇒) hold?</b> If $W$ is a VS, then every LC of vectors from $W$ is again in $W$ (closure under $+$ and $\cdot$, inductively). So $\langle W\rangle\subseteq W$.<br>
<b>Why (⇐)?</b> If $W$ is closed under LCs, then $+_V$ is an operation on $W$, $0_V\in W$ (empty sum), $-x = (-1)x\in W$, and all axioms are inherited from $V$.<br><br>
<b>The formulation “$\langle W\rangle = W$” is typical for the script:</b> in Lemma 5.1 (ii),(iii), Theorem 10.1 (image) and Theorem 10.2 (kernel) every subspace proof ends with “hence $\langle\dots\rangle = \dots$, and by Lemma 5.0 … is a subspace”.<br><br>
Consequence: $\langle M\rangle$ is a subspace for every $M$ (since $\langle\langle M\rangle\rangle = \langle M\rangle$) – the smallest one containing $M$.`,
    example: R`$W = \{p\in\mathbb{Q}[X]: p(1) = 0\}$: $0(1) = 0$, and $(\lambda p+\mu q)(1) = \lambda\cdot 0+\mu\cdot 0 = 0$ ⇒ subspace. E.g. $X-1$ and $X^2-1$ lie in it, and so does $3(X-1)-2(X^2-1) = -2X^2+3X-1$, and $-2+3-1 = 0$ ✓.`,
    counterexample: R`<b>1.</b> $W = \{(x,y): y = x^2\}$: $(1,1),(2,4)\in W$, but $(1,1)+(2,4) = (3,5)$ and $5\neq 9$ ⇒ $\langle W\rangle\neq W$.<br>
<b>2.</b> $W = \mathbb{Z}^2\subseteq\mathbb{R}^2$: closed under $+$, but $\tfrac12(1,0)\notin W$ ⇒ not a subspace (for scalars, all of $K$ must be allowed).`
  },
  "la5_bsp_ulambda": {
    title: "Example 1: U_λ = {x₁ + x₂ + x₃ = λ} is a subspace ⟺ λ = 0",
    category: "5a Subspaces",
    type: "beispiel",
    front: R`Let $\lambda\in K$ be fixed and $U_\lambda := \{(x_1,x_2,x_3)\in K^3: x_1+x_2+x_3 = \lambda\}$. Show: $U_\lambda$ is a subspace of $K^3$ <b>if and only if</b> $\lambda = 0$.`,
    back: R`<b>(⇒)</b> If $U_\lambda$ is a subspace, then $0_{K^3} = (0,0,0)\in U_\lambda$, i.e. $0+0+0 = \lambda$, so $\lambda = 0$.<br>
<b>(⇐)</b> Let $(x_1,x_2,x_3),(y_1,y_2,y_3)\in U_0$, i.e. $x_1+x_2+x_3 = 0 = y_1+y_2+y_3$. Then
$$(x_1+y_1)+(x_2+y_2)+(x_3+y_3) = 0,$$
so the sum lies in $U_0$. Similarly $\mu\cdot(x_1,x_2,x_3) = (\mu x_1,\mu x_2,\mu x_3)\in U_0$ for all $\mu\in K$.<br><br>
For $\lambda\neq 0$, $U_\lambda$ is an <b>affine space</b> of $U_0$ (Ch. 5, example on affine spaces).`,
    meta: "Script: Ch. 5, example 1 with proof; cf. Exercise 21",
    explanation: R`<b>Homogeneous vs. inhomogeneous:</b> the solution set of a linear equation “$\dots = 0$” is a subspace, that of “$\dots = \lambda\neq 0$” is not – it is a <b>translated copy</b>. This is exactly the structure of every linear system (Stammbach I.1.3): <i>all solutions = one particular solution + solutions of the homogeneous system</i>.<br><br>
<b>Geometrically in $\mathbb{R}^3$:</b> $U_0$ is the plane through $0$ with normal $(1,1,1)$; $U_1$ is the parallel plane through $(1,0,0)$.<br><br>
$\dim(U_0) = 2$: basis e.g. $\{(1,-1,0),(1,0,-1)\}$.`,
    example: R`$U_0\subseteq\mathbb{R}^3$: $(1,2,-3)$ and $(4,-1,-3)$ lie in it; sum $(5,1,-6)$: $5+1-6 = 0$ ✓; $-2\cdot(1,2,-3) = (-2,-4,6)$: $-2-4+6 = 0$ ✓.<br>
Over $\mathbb{F}_2$: $U_0 = \{(\bar 0,\bar 0,\bar 0),(\bar 1,\bar 1,\bar 0),(\bar 1,\bar 0,\bar 1),(\bar 0,\bar 1,\bar 1)\}$ – $4 = 2^2$ elements, dimension 2.`,
    counterexample: R`$U_1\subseteq\mathbb{R}^3$: $(1,0,0),(0,1,0)\in U_1$, but $(1,0,0)+(0,1,0) = (1,1,0)$ has sum $2\neq 1$; and $0\cdot(1,0,0) = (0,0,0)\notin U_1$.`
  },
  "la5_bsp_ur_r2": {
    title: "Example 2: The non-trivial subspaces of ℝ²",
    category: "5a Subspaces",
    type: "beispiel",
    front: R`What do the <b>non-trivial subspaces</b> of $\mathbb{R}^2$ look like, and why?`,
    back: R`The non-trivial subspaces $U\subseteq\mathbb{R}^2$ are of the form
$$U = \{(x,y)\in\mathbb{R}^2: y = m\cdot x\}\;\text{ for some }m\in\mathbb{R}\qquad\text{or}\qquad U = \{(x,y)\in\mathbb{R}^2: x = 0\}.$$
<b>Proof:</b> Non-trivial subspaces of $\mathbb{R}^2$ are 1-dimensional and are spanned by a vector $(x_0,y_0)\neq(0,0)$.<br>
• If $x_0\neq 0$: $\langle\{(x_0,y_0)\}\rangle = \langle\{(1,\tfrac{y_0}{x_0})\}\rangle$; with $m := \tfrac{y_0}{x_0}$ this is $\{x\cdot(1,m)\} = \{(x,y): y = m\cdot x\}$.<br>
• If $x_0 = 0$, then $y_0\neq 0$ and $\langle\{(0,y_0)\}\rangle = \{(x,y): x = 0\}$ (the $y$-axis).<br>
<b>Remark:</b> The analogous result holds for $K^2$ over arbitrary fields $K$.`,
    meta: "Script: Ch. 5, example 2 with proof",
    explanation: R`<b>Dimension argument:</b> a subspace $U$ of $\mathbb{R}^2$ has dimension $0$, $1$ or $2$ by Lemma 5.1 (i); dimension $0$ is $\{0\}$, dimension $2$ is $\mathbb{R}^2$ itself. What remains is dimension 1: a <b>line through the origin</b>.<br><br>
<b>Two cases</b> only because of the description: “$y = mx$” covers all lines except the vertical one ($m = \infty$). Uniformly: $U_{0;\alpha,\beta} = \{(x,y): \alpha x+\beta y = 0\}$ with $(\alpha,\beta)\neq(0,0)$ (example on affine spaces).<br><br>
Analogously in $\mathbb{R}^3$: $\{0\}$, lines through $0$, planes through $0$, $\mathbb{R}^3$.`,
    example: R`$\langle\{(2,6)\}\rangle$: $x_0 = 2\neq 0$, $m = \tfrac62 = 3$ ⇒ the line $y = 3x$; e.g. $(-1,-3) = -\tfrac12\cdot(2,6)$ ✓.<br>
$\langle\{(0,-5)\}\rangle$ = $y$-axis.<br>
Over $\mathbb{F}_3$: $K^2$ has exactly 4 lines through $0$: $m\in\{\bar 0,\bar 1,\bar 2\}$ and $x=0$ – each with 3 points.`,
    counterexample: R`<b>1.</b> The line $y = 3x+1$ is not a subspace ($(0,0)$ is missing) – it is an affine space $(0,1)+\langle\{(1,3)\}\rangle$.<br>
<b>2.</b> The parabola $y = x^2$ and the circle $x^2+y^2 = 1$ are not subspaces (not closed; the circle does not even contain $0$).`
  },
  "la5_lemma_5_1": {
    title: "Lemma 5.1: Dimension, intersection and union of subspaces",
    category: "5a Subspaces",
    type: "lemma",
    front: R`State <b>Lemma 5.1</b> (i)–(iv) for subspaces $U,U_1,U_2$ of a finite-dimensional VS $V$ and sketch the proofs.`,
    back: R`<ul><li><b>(i)</b> $\dim(U)\le\dim(V)$, and $\dim(U) = \dim(V)\Rightarrow U = V$. [Exercise 20(b): $U$ is finite-dimensional.]</li>
<li><b>(ii)</b> $U_1\cap U_2$ is a subspace of $V$ (also of $U_1$ and $U_2$); this also holds for the intersection of arbitrarily many subspaces.</li>
<li><b>(iii)</b> $\langle U_1\cup U_2\rangle$ is a subspace of $V$.</li>
<li><b>(iv)</b> In general $U_1\cup U_2$ is <b>not</b> a subspace of $V$.</li></ul>
<b>Proof:</b> (i) Extend a basis $\mathcal{B}_U = \{y_1,\dots,y_m\}$ by Steinitz to a basis $\mathcal{B}_U\cup X$ ($X\subseteq\mathcal{B}_V$) ⇒ $m\le n$, and $m = n$ only if $\mathcal{B}_U$ is already a basis of $V$.<br>
(ii) If $W\subseteq U_1\cap U_2$, then $\langle W\rangle\subseteq U_1\cap U_2$; in particular $\langle U_1\cap U_2\rangle = U_1\cap U_2$ ⇒ Lemma 5.0.<br>
(iii) $\langle\langle U_1\cup U_2\rangle\rangle = \langle U_1\cup U_2\rangle$ ⇒ Lemma 5.0.<br>
(iv) $V = \mathbb{R}^2$, $U_1 = \{(r,0)\}$, $U_2 = \{(0,s)\}$: $(1,1)\in\langle U_1\cup U_2\rangle$, but $(1,1)\notin U_1\cup U_2$.`,
    meta: "Script: Ch. 5, Lemma 5.1 with proof",
    explanation: R`<b>(i)</b> is intuitive: a subspace cannot have “more directions” than the whole space. And if it has equally many, it fills everything – a plane in $\mathbb{R}^2$ <i>is</i> $\mathbb{R}^2$.<br><br>
<b>(ii) vs. (iv):</b> the <b>intersection</b> is well-behaved (“common conditions stay satisfied”), the <b>union</b> is not: if one adds a vector from $U_1$ and one from $U_2$, one typically lands outside both. The repair is (iii): $\langle U_1\cup U_2\rangle$ – the smallest subspace containing both (the <b>sum</b> $U_1+U_2 = \{u_1+u_2\}$, Stammbach I.4.16).<br><br>
<b>When is $U_1\cup U_2$ a subspace after all?</b> Exactly when $U_1\subseteq U_2$ or $U_2\subseteq U_1$.`,
    example: R`<b>(ii)</b> In $\mathbb{R}^3$: $U_1 = \{z = 0\}$ ($xy$-plane), $U_2 = \{x = 0\}$ ($yz$-plane): $U_1\cap U_2 = \{(0,y,0)\}$ = $y$-axis, dimension 1.<br>
<b>(iii)</b> $\langle U_1\cup U_2\rangle = \mathbb{R}^3$, e.g. $(1,2,3) = (1,2,0)+(0,0,3)$.<br>
<b>(i)</b> $U = \langle\{(1,1,0),(0,1,1)\}\rangle$: $\dim(U) = 2\lt 3$ ⇒ $U\neq\mathbb{R}^3$, e.g. $(1,0,0)\notin U$? $a(1,1,0)+b(0,1,1) = (a,a+b,b) = (1,0,0)$ ⇒ $a=1,b=0$, but $a+b = 1\neq 0$ ✓.`,
    counterexample: R`<b>(iv)</b> Script: $U_1\cup U_2$ = both axes in $\mathbb{R}^2$: $(1,0)+(0,1) = (1,1)$ lies on neither axis.<br>
<b>(i) fails in infinite dimensions:</b> $U = \{(0,a_1,a_2,\dots)\}\subsetneq S(K)$, but $U\cong S(K)$ (shift) – “same dimension ⇒ equal” only holds in the finite-dimensional case.`
  },
  // ========================================================================
  // 5b AFFINE SPACES
  // ========================================================================
  "la5_def_affin": {
    title: "Definition: Affine space a + W (with examples in ℝ²)",
    category: "5b Affine spaces",
    type: "definition",
    front: R`What is an <b>affine space</b> of a subspace $W\subseteq V$? What do affine spaces look like in $\mathbb{R}^2$?`,
    back: R`<b>Definition:</b> Let $W\subseteq V$ be a subspace of $V$ and $a\in V$. Then
$$a+W := \{a+y: y\in W\}\subseteq V$$
is an <b>affine space</b> of $W$.<br><br>
<b>Examples:</b><br>
1. For $\lambda\neq 0$, $U_\lambda\subseteq K^3$ is an affine space of $U_{\lambda=0}$.<br>
2. In $\mathbb{R}^2$ all non-trivial subspaces are of the form $U_{0;\alpha,\beta} = \{(x,y): \alpha x+\beta y = 0\}$ with $(\alpha,\beta)\neq(0,0)$, i.e. lines $G$ through the origin.<br>
• If $a\notin G$, then $a+G$ is a <b>parallel line</b> to $G$.<br>
• If $G_1\neq G_2$ are non-trivial subspaces and $a,b\in\mathbb{R}^2$, then $a+G_1$ and $b+G_2$ intersect in <b>exactly one point</b>.<br>
• This holds in general in $K^2$.`,
    meta: "Script: Ch. 5, definition of affine space, examples 1, 2",
    explanation: R`An affine space is a <b>translated subspace</b>: the same “shape” (line, plane, …) and direction as $W$, but in general <b>not through $0$</b>. $a$ is called the <i>base point</i>; it is not unique: $a+W = b+W$ exactly when $a-b\in W$ (Lemma 5.3 (ii)) – every point of the affine space can serve as base point.<br><br>
<b>Linear systems:</b> the solution set of $Ax = b$ is either empty or an affine space $z+\mathrm{Ker}$ ($z$ a particular solution, kernel = solutions of $Ax = 0$).<br><br>
<b>Main purpose in the script:</b> the affine spaces of $W$ are exactly the equivalence classes of $x\sim y:\iff x-y\in W$ (Lemma 5.5) and hence the <b>elements of the quotient space $V/W$</b>.`,
    example: R`<b>1.</b> $W = \langle\{(1,2)\}\rangle$ (line $y = 2x$), $a = (0,3)$: $a+W = \{(t,3+2t)\}$ = line $y = 2x+3$.<br>
<b>2.</b> Intersection point: $(0,3)+\langle\{(1,2)\}\rangle$ and $(1,0)+\langle\{(1,-1)\}\rangle$: $(t,3+2t) = (1+s,-s)$ ⇒ $t = 1+s$, $3+2+2s = -s$ ⇒ $s = -\tfrac53$, $t = -\tfrac23$: point $(-\tfrac23,\tfrac53)$.<br>
<b>3.</b> $U_1 = (1,0,0)+U_0$ in $K^3$.`,
    counterexample: R`<b>1.</b> $a+W$ is in general <b>not</b> a subspace (Lemma 5.2): $(0,3)+W$ does not contain $(0,0)$.<br>
<b>2.</b> A circle is not an affine space (not a translated subspace).<br>
<b>3.</b> Parallel lines $a+G$ and $b+G$ with $a-b\notin G$ <b>never</b> intersect – “exactly one intersection point” only holds for $G_1\neq G_2$: $(0,0)+\langle(1,2)\rangle$ and $(0,3)+\langle(1,2)\rangle$ are disjoint.`
  },
  "la5_lemma_5_2": {
    title: "Lemma 5.2: a + W is a subspace ⟺ a ∈ W",
    category: "5b Affine spaces",
    type: "lemma",
    front: R`State and prove <b>Lemma 5.2</b>: when is an affine space $a+W$ itself a subspace?`,
    back: R`<b>Lemma 5.2:</b> Let $W\subseteq V$ be a subspace of $V$. Then $a+W$ is a subspace of $V$ <b>if and only if</b> $a\in W$. [In general, $a+W$ is therefore not a subspace of $V$.]<br><br>
<b>Proof (⇐):</b> If $a\in W$, then $a+W = W$ (since $a+y\in W$ for $y\in W$, and $y = a+(y-a)$ with $y-a\in W$), hence a subspace.<br>
<b>(⇒):</b> If $a+W$ is a subspace, then $0_V\in a+W$. I.e. there is $y\in W$ with $0_V = a+y$. It follows that
$$y = -a\;\Rightarrow\;-a\in W\;(\text{because }y\in W)\;\Rightarrow\;a\in W.$$`,
    meta: "Script: Ch. 5, Lemma 5.2 with proof",
    explanation: R`<b>In short:</b> a translated subspace is a subspace again exactly when the translation maps it <b>onto itself</b> – i.e. when one shifts it by a vector of its own. The origin must remain in it.<br><br>
<b>Proof idea:</b> the test “$0_V\in a+W$?” decides everything. $0_V\in a+W$ means $-a\in W$, and since $W$ is a subspace, this is equivalent to $a\in W$.<br><br>
This is the special case $b = 0_V$ of Lemma 5.3 (ii): $a+W = 0_V+W\iff a-0_V\in W$.`,
    example: R`$W = \langle\{(1,1)\}\rangle\subseteq\mathbb{R}^2$:<br>
$a = (3,3)\in W$: $(3,3)+W = W$ (the line $y = x$ itself), a subspace ✓.<br>
$a = (3,0)\notin W$: $(3,0)+W$ is the line $y = x-3$ – does not contain $(0,0)$, not a subspace.`,
    counterexample: R`$U_1 = (1,0,0)+U_0$ (plane $x_1+x_2+x_3 = 1$): $(1,0,0)\notin U_0$, so not a subspace – consistent with example 1 ($U_\lambda$ is a subspace ⟺ $\lambda = 0$).`
  },
  "la5_lemma_5_3": {
    title: "Lemma 5.3: When do vectors lie in the same affine space?",
    category: "5b Affine spaces",
    type: "lemma",
    front: R`State <b>Lemma 5.3</b> (i)–(iii) for a subspace $W\subseteq V$ and $a,b,x,y\in V$ and prove (ii) and (iii).`,
    back: R`<ul><li><b>(i)</b> $x$ and $y$ lie in the same affine space of $W$ if and only if $x-y\in W$.</li>
<li><b>(ii)</b> $a+W = b+W\iff a-b\in W$.</li>
<li><b>(iii)</b> $a+W\neq b+W\Rightarrow(a+W)\cap(b+W) = \emptyset$.</li></ul>
<b>Proof of (i) (⇒):</b> $x = a+w_1$, $y = a+w_2$ ⇒ $x-y = w_1-w_2\in W$. (⇐): $x-y = w_0\in W$, $x = a+w_1$ ⇒ $y = a+(w_1-w_0)\in a+W$.<br>
<b>(ii) (⇒):</b> $a = a+0_V\in a+W = b+W$, so $a = b+w_0$, i.e. $a-b = w_0\in W$. (⇐): $a = b+w_0$ ⇒ $a+W = b+\underbrace{(w_0+W)}_{=W} = b+W$.<br>
<b>(iii) Contraposition:</b> $x\in(a+W)\cap(b+W)$ ⇒ $x = a+w_1 = b+w_2$ ⇒ $a-b = w_2-w_1\in W$ $\overset{(ii)}{\Rightarrow}$ $a+W = b+W$.`,
    meta: "Script: Ch. 5, Lemma 5.3 with proof",
    explanation: R`<b>Core idea:</b> “in the same affine space” means “<b>the difference lies in $W$</b>” – one can move from $x$ to $y$ without leaving the directions of $W$.<br><br>
<b>(ii)</b> says: the base point is not unique – every point of the affine space works. <b>(iii)</b> says: two affine spaces of the same $W$ are either <b>identical or disjoint</b> – they never overlap partially. Parallel lines are equal or do not meet.<br><br>
<b>Together</b> (i)–(iii) show: the affine spaces of $W$ <b>partition $V$</b> into disjoint pieces – exactly the equivalence classes of $\sim$ (Lemmas 5.4, 5.5). These pieces become the vectors of the quotient space.`,
    example: R`$W = \langle\{(1,2)\}\rangle\subseteq\mathbb{R}^2$:<br>
(ii): $(1,5)+W = (3,9)+W$, since $(1,5)-(3,9) = (-2,-4) = -2\cdot(1,2)\in W$.<br>
(i): $(0,3)$ and $(2,7)$ lie in the same affine space ($(2,4)\in W$); $(0,3)$ and $(1,4)$ do not ($(1,1)\notin W$).<br>
(iii): $(0,3)+W$ (line $y = 2x+3$) and $(0,0)+W$ ($y = 2x$) are disjoint.`,
    counterexample: R`<b>Different subspaces:</b> for $W_1\neq W_2$, (iii) does not hold: $(0,0)+\langle(1,0)\rangle$ and $(0,0)+\langle(0,1)\rangle$ are different, but intersect in $(0,0)$. Disjointness only concerns affine spaces of the <b>same</b> $W$.`
  },
  // ========================================================================
  // 5c QUOTIENT SPACES
  // ========================================================================
  "la5_lemma_5_4": {
    title: "Lemma 5.4: x ∼ y :⟺ x − y ∈ W is an equivalence relation",
    category: "5c Quotient spaces",
    type: "lemma",
    front: R`Let $W\subseteq V$ be a subspace. On $V$ define $x\sim y:\iff x-y\in W$. Show (<b>Lemma 5.4</b>): $\sim$ is an equivalence relation.`,
    back: R`<b>Reflexive:</b> $x-x = 0_V\in W$, so $x\sim x$.<br>
<b>Symmetric:</b> $x-y = w_0\in W$ ⇒ $y-x = -w_0\in W$, so $x\sim y\Rightarrow y\sim x$.<br>
<b>Transitive:</b> $x-y = w_1\in W$ ($x\sim y$) and $y-z = w_2\in W$ ($y\sim z$) ⇒
$$x-z = (x-y)+(y-z) = w_1+w_2\in W\;\Rightarrow\;x\sim z.$$
With $\sim$, $V$ falls apart into pairwise disjoint, non-empty equivalence classes $\{[a]_\sim: a\in V\}$, where $[a]_\sim := \{x\in V: a\sim x\}$.`,
    meta: "Script: Ch. 5, quotient spaces, Lemma 5.4 with proof",
    explanation: R`$x\sim y$ means “$x$ and $y$ are <b>equal up to an error in $W$</b>”. One “ignores” everything that happens in the direction of $W$.<br><br>
<b>Every subspace property is used exactly once:</b> $0_V\in W$ for reflexivity, closure under $-$ (inverses) for symmetry, closure under $+$ for transitivity. That is why the construction only works for subspaces, not for arbitrary subsets.<br><br>
<b>Analogy:</b> $\mathbb{Z}_m$ arises from $\mathbb{Z}$ by $k\sim l:\iff k-l\in m\mathbb{Z}$ – “equal up to multiples of $m$”. $V/W$ is the same principle for vector spaces.`,
    example: R`$V = \mathbb{R}^2$, $W = x$-axis: $(3,5)\sim(-1,5)$, since $(4,0)\in W$; $(3,5)\not\sim(3,4)$, since $(0,1)\notin W$. The class of $(3,5)$ is the horizontal line $y = 5$.<br>
$V = \mathbb{Q}[X]$, $W = \langle\{1,X\}\rangle$: $X^2+3X-1\sim X^2$, since the difference $3X-1\in W$.`,
    counterexample: R`<b>No subspace, no equivalence relation:</b> $T = \{(t,0): t\ge 0\}$ (half-axis), $x\sim y:\iff x-y\in T$: not symmetric, $(1,0)-(0,0)\in T$, but $(0,0)-(1,0) = (-1,0)\notin T$.<br>
$T = \{(0,0),(1,0)\}$: not transitive, $(2,0)\sim(1,0)\sim(0,0)$, but $(2,0)-(0,0)\notin T$.`
  },
  "la5_lemma_5_5": {
    title: "Lemma 5.5: Equivalence classes = affine spaces, [a]∼ = a + W",
    category: "5c Quotient spaces",
    type: "lemma",
    front: R`State and prove <b>Lemma 5.5</b> about the equivalence classes of the relation $\sim$.`,
    back: R`<b>Lemma 5.5:</b> $\{[a]_\sim: a\in V\} = \{a+W: a\in V\}$; in fact
$$[a]_\sim = a+W\quad\text{for all }a\in V.$$
<b>Proof:</b> By Lemma 5.3 (i), $x-y\in W\iff x,y\in a+W$ for some $a\in V$, i.e.
$$\underbrace{x\sim y}_{x,y\text{ in the same equivalence class}}\iff\underbrace{x,y\in a+W\text{ (for some }a\in V)}_{x,y\text{ in the same affine space}}.$$
Hence the affine spaces $a+W$ are exactly the equivalence classes of $\sim$, and $[a]_\sim = a+W$.<br>
<b>Remark:</b> Lemma 5.3 (iii) shows that the affine spaces are pairwise disjoint – which holds in general for equivalence classes.<br>
The quotient set $V/{\sim} = \{[a]_\sim: a\in V\}$ is thus the set of affine spaces of $W$; one writes $V/W := \{a+W: a\in V\}$.`,
    meta: "Script: Ch. 5, Lemma 5.5 with proof and remark",
    explanation: R`<b>Picture:</b> $V$ is cut into <b>parallel copies of $W$</b> (in $\mathbb{R}^2$ with $W$ a line: into all parallel lines). Each copy is an equivalence class; every point lies in exactly one.<br><br>
This connects two views: the <b>algebraic</b> one (equivalence classes, “equal up to $W$”) and the <b>geometric</b> one (translated subspaces). When calculating in $V/W$ one uses the geometric notation $a+W$; when arguing about well-definedness, the algebraic one ($a\sim a'\iff a-a'\in W$).`,
    example: R`$V = \mathbb{R}^3$, $W = \langle\{(1,1,1)\}\rangle$ (space diagonal): $[(2,0,1)]_\sim = (2,0,1)+W = \{(2+t,t,1+t)\}$ – a line parallel to the diagonal. $(5,3,4)$ lies in it ($t = 3$), so $[(5,3,4)]_\sim = [(2,0,1)]_\sim$.`,
    counterexample: R`<b>Wrong:</b> “$[a]_\sim = \{a\}+$ something arbitrary”. E.g. $[(2,0,1)]_\sim\neq(2,0,1)+\langle\{(1,0,0)\}\rangle$: $(3,0,1)$ lies to the right, but $(3,0,1)-(2,0,1) = (1,0,0)\notin W$. The classes always have the direction of $W$, not some other direction.`
  },
  "la5_wohldefiniert": {
    title: "The operations +_Q and ·_Q on V/W and their well-definedness",
    category: "5c Quotient spaces",
    type: "proposition",
    front: R`How are addition $+_Q$ and scalar multiplication $\cdot_Q$ on $V/W$ defined, and why are they <b>well-defined</b>?`,
    back: R`<b>Addition:</b> $(a+W)+_Q(b+W) := \{(a+w_1)+(b+w_2): w_1,w_2\in W\}$. It holds that
$$(a+W)+_Q(b+W) = \{(a+b)+\underbrace{(w_1+w_2)}_{=w_0}\} = (a+b)+W.$$
<b>Well-defined:</b> Let $a+W = a'+W$ ($\iff a-a'\in W$) and $b+W = b'+W$ ($\iff b-b'\in W$, Lemma 5.3 (ii)). Then
$$(a+b)-(a'+b') = \underbrace{(a-a')}_{\in W}+\underbrace{(b-b')}_{\in W}\in W\;\Rightarrow\;(a+b)+W = (a'+b')+W.$$
<b>Scalar multiplication:</b> $\cdot_Q: K\times V/W\to V/W$, $(\lambda,a+W)\mapsto(\lambda\cdot a)+W$. Well-defined: $a-a'\in W\Rightarrow\lambda a-\lambda a' = \lambda(a-a')\in W$ ⇒ $(\lambda a)+W = (\lambda a')+W$.`,
    meta: "Script: Ch. 5, definition of +_Q, ·_Q and well-definedness",
    explanation: R`<b>What does “well-defined” mean?</b> The operation is defined via <b>representatives</b>: to compute $(a+W)+_Q(b+W)$ one chooses base points $a,b$ and takes $(a+b)+W$. But an element of $V/W$ has <b>many</b> base points. Well-defined means: <b>the result does not depend on the choice of representatives.</b> Otherwise $+_Q$ would not be a function at all.<br><br>
<b>Why does it work here?</b> Because $W$ is closed under $+$ and scalar multiplication: the “errors” $a-a'$ and $b-b'$ in $W$ add up to an error in $W$. This fails for relations that do not come from a subspace (Exercise sheet 5, Exercise 24).<br><br>
<b>Rule to remember:</b> in $V/W$ one calculates with the base points as in $V$, and at the end “forgets” everything in $W$.`,
    example: R`$V = \mathbb{R}^2$, $W$ = $x$-axis: $((3,5)+W)+_Q((1,2)+W) = (4,7)+W$. Other representatives: $(-10,5)$ and $(7,2)$ give $(-3,7)+W$ – and $(4,7)-(-3,7) = (7,0)\in W$ ✓, the same class (the line $y = 7$).<br>
$3\cdot_Q((3,5)+W) = (9,15)+W = (0,15)+W$.`,
    counterexample: R`<b>Not well-defined</b> (Exercise sheet 5, Exercise 24): for $x\sim y:\iff\exists\lambda\neq 0\,(\lambda x = y)$ on $\mathbb{R}^2$, $[a]+[b] := [a+b]$ with $a = b = (1,0)$ gives the class $[(2,0)]$; with the representative $b' = (-1,0)\sim b$, however, $[(0,0)]\neq[(2,0)]$.`
  },
  "la5_def_quotientenraum": {
    title: "Definition: Quotient space V/W",
    category: "5c Quotient spaces",
    type: "definition",
    front: R`What is the <b>quotient space</b> $V/W$? What is its zero vector, and what is the inverse of $a+W$?`,
    back: R`$V/W := \{a+W: a\in V\}$, the set of all affine spaces of $W$, with
$$(a+W)+_Q(b+W) = (a+b)+W,\qquad\lambda\cdot_Q(a+W) = (\lambda\cdot a)+W.$$
• $+_Q$ is a binary operation on $V/W$, and since $+$ on $V$ is commutative and associative, $(V/W,+_Q)$ is a commutative semigroup.<br>
• $0_V+W = W$ is the <b>neutral element</b>, and the <b>inverse</b> of $a+W$ is $(-a)+W$ ⇒ $(V/W,+_Q)$ is an abelian group.<br>
• With $\cdot_Q$, $V/W$ becomes a VS over $K$.<br><br>
<b>Definition:</b> The vector space $V/W$ (over $K$) is called the <b>quotient space of $V$ by $W$</b> [also factor space].`,
    meta: "Script: Ch. 5, definition of quotient space; Mathematica example of quotient spaces",
    explanation: R`<b>Idea:</b> $V/W$ is “$V$ in which $W$ is declared to be zero”. All vectors that differ only by something from $W$ are <b>identified</b>. The zero vector of $V/W$ is $W$ itself (the class of $0_V$); $a+W$ is “zero” exactly when $a\in W$.<br><br>
<b>Dimension</b> (Lemma 5.6): $\dim(V/W) = \dim(V)-\dim(W)$ – one loses exactly the directions of $W$.<br><br>
<b>Picture in $\mathbb{R}^2$:</b> $W$ = $x$-axis; the vectors of $V/W$ are the horizontal lines, and each is uniquely determined by its height $y$. So $V/W$ “is” the $y$-axis, $\cong\mathbb{R}$.<br><br>
<b>Mathematica example of the script:</b> $V$ = polynomial functions of degree $\le 4$, $U = \langle\{p_0,p_1\}\rangle = \langle\{1,x\}\rangle$: $V/U$ is 3-dimensional with basis $\{x^2+U,x^3+U,x^4+U\}$ – the linear part is ignored.`,
    example: R`<b>1.</b> $V = \mathbb{R}^3$, $W = \langle\{(1,1,1)\}\rangle$: $(3,5,2)+W = (1,3,0)+W$ (subtract $2\cdot(1,1,1)$) $= 1\cdot_Q(e_1+W)+_Q 3\cdot_Q(e_2+W)$.<br>
<b>2.</b> $V/U$ (polynomials of degree $\le 4$ modulo $\langle 1,x\rangle$): $(5+2x-x^2+7x^4)+U = (-1)(x^2+U)+7(x^4+U)$ – coordinates $(-1,0,7)$.`,
    counterexample: R`<b>1. The zero vector is not “$\{0_V\}$”:</b> in $V/W$ the zero vector is the whole set $W$; e.g. $(1,1,1)+W = W = 0_{V/W}$, although $(1,1,1)\neq 0_V$.<br>
<b>2.</b> $V/W$ is <b>not</b> a subspace of $V$: its elements are subsets of $V$, not vectors of $V$.<br>
<b>3.</b> For $W = V$, $V/V = \{V\}$ is the zero space; for $W = \{0_V\}$, $V/\{0_V\}\cong V$ (the classes are single points $\{a\}$).`
  },
  "la5_lemma_5_6": {
    title: "Lemma 5.6: dim(V/W) = dim(V) − dim(W)",
    category: "5c Quotient spaces",
    type: "lemma",
    front: R`State and prove <b>Lemma 5.6</b> about the dimension of the quotient space.`,
    back: R`<b>Lemma 5.6:</b> If $V$ is a finite-dimensional VS of dimension $n$ and $W\subseteq V$ is a subspace of dimension $m\le n$, then $V/W$ has dimension $n-m$.<br><br>
<b>Proof:</b> Let $\{y_1,\dots,y_m\}$ be a basis of $W$. By Theorem 4.3 extend it to a basis $\{y_1,\dots,y_m,x_{m+1},\dots,x_n\}$ of $V$.<br>
<b>Claim 1:</b> $\{x_k+W: m+1\le k\le n\}$ is l.i. From $\sum_{k=m+1}^n\lambda_k(x_k+W) = 0_V+W$ it follows that $\sum\lambda_kx_k\in W$, so $\sum_{k=m+1}^n\lambda_kx_k = \sum_{j=1}^m\lambda_jy_j$, i.e. $\sum_j\lambda_jy_j+\sum_k(-\lambda_k)x_k = 0_V$. Since $y_1,\dots,x_n$ are l.i., all $\lambda_i = 0$.<br>
<b>Claim 2:</b> $\langle\{x_{m+1}+W,\dots,x_n+W\}\rangle = V/W$. For $a = \sum_j\lambda_jy_j+\sum_k\lambda_kx_k$, $b := \sum_k\lambda_kx_k\sim a$ (difference in $W$), so
$$a+W = b+W = \sum_{k=m+1}^n\lambda_k\cdot_Q(x_k+W).$$
Hence $\{x_{m+1}+W,\dots,x_n+W\}$ is a basis of $V/W$, and $\dim(V/W) = n-m$.`,
    meta: "Script: Ch. 5, Lemma 5.6 with proof (there “Lemma 4.3” = Theorem 4.3)",
    explanation: R`<b>Intuition:</b> one splits a basis of $V$ into “directions of $W$” ($y_j$) and the “rest” ($x_k$). In $V/W$ the $y_j$ become zero – what remains are the $n-m$ remaining directions, and they stay independent.<br><br>
<b>Why basis extension?</b> One needs a basis of $V$ that <b>contains</b> a basis of $W$; otherwise one cannot cleanly separate the parts in $W$.<br><br>
<b>Outlook:</b> this is the prototype of the <b>dimension formula</b> $\dim(\mathrm{Ker}(\varphi))+\mathrm{Rang}(\varphi) = \dim(V)$ (Stammbach III.2.15): $V/\mathrm{Ker}(\varphi)\cong\varphi[V]$.`,
    example: R`<b>1.</b> $V = \mathbb{R}^3$, $W = \langle\{(1,1,1)\}\rangle$: extend to $\{(1,1,1),e_1,e_2\}$; then $\{e_1+W,e_2+W\}$ is a basis of $V/W$, $\dim(V/W) = 3-1 = 2$.<br>
<b>2.</b> Polynomials of degree $\le 4$ ($n = 5$) modulo $\langle 1,x\rangle$ ($m = 2$): $\dim(V/U) = 3$.<br>
<b>3.</b> $\mathbb{F}_2^3/U_0$ with $U_0 = \{x_1+x_2+x_3 = \bar 0\}$ ($4$ elements): $V/W$ has $8/4 = 2 = 2^{3-2}$ elements.`,
    counterexample: R`<b>1. Wrong extension:</b> the classes of the standard basis $\{e_1+W,e_2+W,e_3+W\}$ are <b>l.d.</b> in $\mathbb{R}^3/\langle(1,1,1)\rangle$: $(e_1+W)+(e_2+W)+(e_3+W) = (1,1,1)+W = 0_{V/W}$.<br>
<b>2. Infinite-dimensional:</b> $\dim(V) = \infty$, $\dim(W) = \infty$ says nothing about $\dim(V/W)$ (e.g. $S(K)/\{(0,a_1,a_2,\dots)\}\cong K$).`
  },
  // ========================================================================
  // EXERCISE SHEET 5
  // ========================================================================
  "la5_s5_a24": {
    title: "Exercise sheet 5, Exercise 24: An addition that is not well-defined",
    category: "5c Quotient spaces",
    type: "aufgabe",
    front: R`On $V = \mathbb{R}^2$ let $x\sim y:\iff\exists\lambda\in\mathbb{R}\setminus\{0\}\,(\lambda x = y)$ and $[a]_\sim+_\sim[b]_\sim := [a+b]_\sim$. Show: (a) $\sim$ is an equivalence relation; (b) $+_\sim$ is <b>not well-defined</b>.`,
    back: R`<b>(a)</b> Reflexive: $1\cdot x = x$. Symmetric: $\lambda x = y$, $\lambda\neq 0$ ⇒ $\lambda^{-1}y = x$. Transitive: $\lambda x = y$, $\mu y = z$ ⇒ $(\mu\lambda)x = z$ with $\mu\lambda\neq 0$.<br>
Classes: $[(0,0)] = \{(0,0)\}$; for $x\neq 0$, $[x] = \{\lambda x:\lambda\neq 0\}$ = the line through $0$ and $x$ <b>without the origin</b>.<br>
<b>(b)</b> $a = (1,0)$, $b = (1,0)$, $b' = (-1,0)$. Then $b\sim b'$ (via $\lambda = -1$), so $[b] = [b']$, but
$$[a+b] = [(2,0)]\neq[(0,0)] = [a+b'],$$
since $\lambda\cdot(2,0)\neq(0,0)$ for all $\lambda\neq 0$. Depending on the representative, $[(1,0)]+_\sim[(1,0)]$ would yield two different values.`,
    meta: "Exercise sheet 5, Exercise 24",
    explanation: R`<b>Lesson:</b> an operation on equivalence classes “via representatives” is only a function if the result <b>does not depend on the choice of representative</b>. For $V/W$ this works, because the relation comes from a <b>subspace</b> ($a\sim a'\iff a-a'\in W$, errors add up within $W$).<br><br>
Here the relation is “lie on the same line through $0$” – it is compatible with <b>multiplication</b> (that is why the set of lines is the “projective space”), but not with <b>addition</b>: two vectors on the same line may or may not add up to zero.<br><br>
<b>Test recipe for well-definedness:</b> take $a\sim a'$, $b\sim b'$ and check whether $a+b\sim a'+b'$. A single counterexample suffices to refute.`,
    example: R`Further representative pairs: $a = (1,1)$, $b = (2,0)$ ⇒ $[(3,1)]$; with $a' = (2,2)\sim a$: $[a'+b] = [(4,2)]$. Since $(4,2)$ is not a multiple of $(3,1)$ ($\tfrac43\neq\tfrac21$), here too $[a+b]\neq[a'+b]$.`,
    counterexample: R`<b>Yet well-defined:</b> the scalar multiplication $\mu\cdot[a] := [\mu a]$ for $\mu\neq 0$ is compatible with $\sim$: $a' = \lambda a$ ⇒ $\mu a' = \lambda(\mu a)\sim\mu a$. E.g. $3\cdot[(1,2)] = [(3,6)] = [(1,2)]$ – whichever representative is chosen.`
  },
  "la5_s5_a25": {
    title: "Exercise sheet 5, Exercise 25: Graph U_f and zero set N_f of a functional",
    category: "5a Subspaces",
    type: "aufgabe",
    front: R`Let $f:\mathbb{R}^n\to\mathbb{R}$ be a functional $\neq 0$. Show: (a) $U_f := \{(x,f(x)): x\in\mathbb{R}^n\}\subseteq\mathbb{R}^{n+1}$ is a non-trivial subspace; (b),(c) dimension and basis; (d) $N_f := \{x: f(x) = 0\}$ is a non-trivial subspace for $n\ge 2$; (e) a basis of $N_f$ for $f(x_1,x_2,x_3) = x_1-x_2+2x_3$.`,
    back: R`With $c_i := f(e_i)$ we have $f(\alpha_1,\dots,\alpha_n) = c_1\alpha_1+\dots+c_n\alpha_n$ (∗).<br>
<b>(a)</b> $(0,f(0)) = (0,0)\in U_f$; $(x,f(x))+(y,f(y)) = (x+y,f(x+y))$; $\lambda(x,f(x)) = (\lambda x,f(\lambda x))$. Non-trivial: $(e_1,c_1)\neq 0$ and $(0,\dots,0,1)\notin U_f$.<br>
<b>(b),(c)</b> Basis $\{(e_1,c_1),\dots,(e_n,c_n)\}$: spanning, since $\sum\alpha_i(e_i,c_i) = (x,f(x))$; l.i., since the first $n$ coordinates are $(\lambda_1,\dots,\lambda_n)$. $\dim(U_f) = n$.<br>
<b>(d)</b> $f(0) = 0$, $f(x+y) = 0+0$, $f(\lambda x) = 0$ ⇒ subspace. $N_f\neq\mathbb{R}^n$ (since $f\neq 0$). $N_f\neq\{0\}$ for $n\ge 2$: with $c_j\neq 0$, $i\neq j$, the vector $z := c_je_i-c_ie_j\neq 0$ and $f(z) = c_jc_i-c_ic_j = 0$.<br>
<b>(e)</b> $x_1 = x_2-2x_3$ ⇒ $(x_1,x_2,x_3) = x_2(1,1,0)+x_3(-2,0,1)$; basis $\{(1,1,0),(-2,0,1)\}$.`,
    meta: "Exercise sheet 5, Exercise 25 (N_f is the kernel of f, Ch. 10)",
    explanation: R`<b>$U_f$ = graph</b> of the linear function $f$: for $n = 1$ a line $y = c_1x$ through $0$ in $\mathbb{R}^2$, for $n = 2$ a plane $z = c_1x+c_2y$ in $\mathbb{R}^3$. Graphs of linear maps are always subspaces (the graph “looks like” the domain, hence $\dim(U_f) = n$).<br><br>
<b>$N_f$ = kernel</b> (Ch. 10): a “hyperplane” of dimension $n-1$ (Stammbach III.6.10). In (e): a plane through $0$ with normal vector $(1,-1,2)$.<br><br>
<b>Recipe for (e):</b> solve the equation for one variable, take the others as free parameters, and “pull the vector apart” according to the parameters.`,
    example: R`$n = 2$, $f(x_1,x_2) = 3x_1-x_2$: $U_f = \langle\{(1,0,3),(0,1,-1)\}\rangle$; e.g. $(2,5,f(2,5)) = (2,5,1) = 2(1,0,3)+5(0,1,-1)$ ✓.<br>
(e) check: $f(1,1,0) = 1-1+0 = 0$, $f(-2,0,1) = -2-0+2 = 0$ ✓; $(4,6,1)\in N_f$ ($4-6+2 = 0$) $= 6(1,1,0)+1\cdot(-2,0,1)$ ✓.`,
    counterexample: R`<b>$n = 1$:</b> for $f(x) = 3x$ on $\mathbb{R}$, $N_f = \{0\}$ – trivial. That is why (d) needs $n\ge 2$.<br>
<b>Not linear:</b> for $g(x) = x_1^2$, $\{(x,g(x))\}$ is not a subspace: $(1,0,1)+(1,0,1) = (2,0,2)$, but $g(2,0) = 4\neq 2$.<br>
<b>Inhomogeneous:</b> $\{x: f(x) = 1\}$ is an affine space, not a subspace.`
  }
};
})();
