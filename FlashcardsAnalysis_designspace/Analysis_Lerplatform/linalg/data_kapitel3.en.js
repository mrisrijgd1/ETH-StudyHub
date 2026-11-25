/* ==========================================================================
   LINEAR ALGEBRA I – CHAPTER 3 (English): Definitions and examples (vector spaces)
   (Definition 1, Lemma 3.0, examples of fields and vector spaces) + Exercise sheet 2
   Linear Algebra I – Prof. Dr. Lorenz Halbeisen, HS 2026
   English translation of data_kapitel3.js. Formulas, HTML and ids are identical.
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_EN_KAPITEL_3 = {
  // ========================================================================
  // 3a DEFINITION OF A VECTOR SPACE
  // ========================================================================
  "la3_def1_vektorraum": {
    title: "Definition 1: Vector space over a field K",
    category: "3a Definition of a vector space",
    type: "definition",
    front: R`How is a <b>vector space over the field $K$</b> (a $K$-vector space) defined? Name all four axioms (a)–(d) of the scalar multiplication.`,
    back: R`Let $(V,\circ)$ be an <b>abelian group</b> and $(K,+,\cdot,0,1)$ a <b>field</b>. Furthermore let
$$\ast: K\times V\longrightarrow V,\qquad(\lambda,x)\longmapsto\lambda\ast x$$
be an operation with the following properties:
<ul><li><b>(a)</b> $\forall x\in V\;(1\ast x = x)$,</li>
<li><b>(b)</b> $\forall\lambda,\mu\in K\;\forall x\in V\;\big((\lambda+\mu)\ast x = (\lambda\ast x)\circ(\mu\ast x)\big)$,</li>
<li><b>(c)</b> $\forall\lambda,\mu\in K\;\forall x\in V\;\big((\lambda\cdot\mu)\ast x = \lambda\ast(\mu\ast x)\big)$,</li>
<li><b>(d)</b> $\forall\lambda\in K\;\forall x,y\in V\;\big(\lambda\ast(x\circ y) = (\lambda\ast x)\circ(\lambda\ast y)\big)$.</li></ul>
Then $V$ is a <b>vector space over the field $K$</b>, also a <b>$K$-vector space</b>; for $K=\mathbb{R}$ a <b>real vector space</b>.<br>
Elements of $V$: <b>vectors</b>; elements of $K$: <b>scalars</b>. One usually writes $+_V$ for “$\circ$” with neutral element $0_V$, and $\cdot$ for “$\ast$”.`,
    meta: "Script: Ch. 3 (Part II), Definition 1 and remark",
    explanation: R`<b>Remark (script):</b> “Algebraically, a vector space is a field that acts on an abelian group.” There are two worlds: the <b>vectors</b> (one can only add them) and the <b>scalars</b> (one can add, multiply and divide them). Scalar multiplication connects the two worlds, and (a)–(d) say that it behaves like “ordinary stretching”:<br>
• (a) stretching by $1$ changes nothing;<br>
• (b) and (d) are the two <b>distributive laws</b> (one over $+$ in $K$, one over $+_V$ in $V$);<br>
• (c) stretching twice = stretching once by the product.<br><br>
<b>Two different plus signs!</b> In (b) the left side has $+$ in $K$, the right side $+_V$ in $V$. That is why the script writes $+_V$ and $0_V$ at the beginning. Likewise $\lambda\cdot\mu\cdot x$ always means $(\lambda\cdot\mu)\ast x = \lambda\ast(\mu\ast x)$.<br><br>
<b>Recipe for a proof:</b> (1) $(V,+_V)$ is an abelian group; (2) $\ast$ is a map $K\times V\to V$ (closure!); (3) check (a)–(d) – usually componentwise.`,
    example: R`<b>1.</b> $\mathbb{R}^2$ over $\mathbb{R}$: (b) for $\lambda=2,\mu=3$, $x=(1,-1)$: $(2+3)\cdot(1,-1) = (5,-5) = (2,-2)+(3,-3)$ ✓.<br>
<b>2.</b> $\mathbb{R}$ as a vector space over $\mathbb{Q}$ (subfield, see below): $\tfrac12\cdot\pi$ is a “vector”.<br>
<b>3.</b> $\mathbb{F}_2^3$ over $\mathbb{F}_2$: $\bar 1\cdot(\bar 1,\bar 0,\bar 1) = (\bar 1,\bar 0,\bar 1)$ (axiom (a)), $(\bar 1+\bar 1)\cdot x = \bar 0\cdot x = 0_V = x+x$ ✓.`,
    counterexample: R`<b>1. (b) violated</b> (Stammbach I.3.10, Exercise 7): $\mathbb{R}^2$ with ordinary addition and $c\ast(x,y) := (cx,y)$. Then $(1+1)\ast(0,1) = (0,1)$, but $1\ast(0,1)+1\ast(0,1) = (0,2)$.<br>
<b>2. (b) violated:</b> $V=\mathbb{R}$, $\lambda\ast x := \lambda^2 x$: $(1+1)\ast 1 = 4\neq 2 = 1\ast 1+1\ast 1$.<br>
<b>3. (a) violated:</b> $\lambda\ast x := 0_V$ for all $\lambda,x$ satisfies (b)–(d), but $1\ast x = 0_V\neq x$ for $x\neq 0_V$.<br>
<b>4. Not a field:</b> $\mathbb{Z}^2$ “over $\mathbb{Z}$” is not a vector space in the sense of Definition 1, because $\mathbb{Z}$ is not a field.`
  },
  "la3_lemma_3_0": {
    title: "Lemma 3.0: Calculation rules in vector spaces",
    category: "3a Definition of a vector space",
    type: "lemma",
    front: R`State <b>Lemma 3.0</b> (a)–(d) for a vector space $(V,+_V,0_V)$ over $(K,+,\cdot,0,1)$ and prove it.`,
    back: R`<ul><li><b>(a)</b> $\forall x\in V\;(0\cdot x = 0_V)$,</li>
<li><b>(b)</b> $\forall\lambda\in K\;(\lambda\cdot 0_V = 0_V)$,</li>
<li><b>(c)</b> $\forall x\in V\;\big((-1)\cdot x = -x\big)$ [$-1$ the inverse of $1$ in $K$; $-x$ the inverse of $x$ in $V$],</li>
<li><b>(d)</b> $\forall\lambda\in K\;\forall x\in V\;\big(\lambda\cdot x = 0_V\to(\lambda = 0\vee x = 0_V)\big)$.</li></ul>
<b>Proof (Exercise 10).</b> Auxiliary fact: $u+_V u = u\Rightarrow u = 0_V$ (add $-u$).<br>
(a) $0\cdot x = (0+0)\cdot x\overset{\text{Ax. (b)}}{=}0\cdot x+_V 0\cdot x$ ⇒ auxiliary fact.<br>
(b) $\lambda\cdot 0_V = \lambda\cdot(0_V+_V 0_V)\overset{\text{Ax. (d)}}{=}\lambda\cdot 0_V+_V\lambda\cdot 0_V$ ⇒ auxiliary fact.<br>
(c) $x+_V(-1)\cdot x = 1\cdot x+_V(-1)\cdot x = (1+(-1))\cdot x = 0\cdot x\overset{(a)}{=}0_V$; inverses are unique.<br>
(d) If $\lambda\neq 0$, then $x = 1\cdot x = (\lambda^{-1}\lambda)\cdot x = \lambda^{-1}\cdot(\lambda\cdot x) = \lambda^{-1}\cdot 0_V\overset{(b)}{=}0_V$.`,
    meta: "Script: Ch. 3, Lemma 3.0 (proof: Exercise 10, Exercise sheet 2)",
    explanation: R`These are the vector space versions of Theorem 2.2 (a),(b) and Theorem 2.1 (b). They look “obvious”, but follow <b>only</b> from the axioms – that is the point: in <i>every</i> vector space (polynomials, sequences, functions, matrices, $\mathbb{F}_p^n$ …) they hold automatically.<br><br>
<b>Careful with the two zeros:</b> in (a) the left side has the zero $0\in K$, the right side the zero vector $0_V$. In (d) the statement is the alternative “the scalar is $0$ <b>or</b> the vector is $0_V$”.<br><br>
<b>Where is the field needed?</b> Only in (d): there one divides by $\lambda$. Over a ring with zero divisors (d) is false – that is one reason why linear algebra demands a field. (d) is also the reason why a single vector $x\neq 0_V$ is linearly independent (Ch. 4).`,
    example: R`<b>In $\mathbb{R}^3$:</b> $0\cdot(4,-1,7) = (0,0,0)$; $\;(-1)\cdot(4,-1,7) = (-4,1,-7)$ is the additive inverse.<br>
<b>In $\mathbb{F}_3^2$:</b> $\bar 2\cdot(\bar 1,\bar 2) = (\bar 2,\bar 1)$ and $(\bar 1,\bar 2)+(\bar 2,\bar 1) = (\bar 0,\bar 0)$ – so $\bar 2 = -\bar 1$ times $x$ equals $-x$, as (c) says.<br>
<b>(d):</b> $\lambda\cdot(3,0) = (0,0)$ in $\mathbb{Q}^2$ forces $3\lambda = 0$, so $\lambda = 0$.`,
    counterexample: R`<b>(d) false without a field:</b> In $\mathbb{Z}_6^2$ (with $\mathbb{Z}_6$ “scalars”) we have $\bar 2\cdot(\bar 3,\bar 3) = (\bar 0,\bar 0)$, although $\bar 2\neq\bar 0$ and $(\bar 3,\bar 3)\neq 0$.<br>
<b>(a) with the wrong zero:</b> “$0\cdot x = 0$” is misleading without an index: in $V = M_{2\times 2}(\mathbb{R})$, $0\cdot\begin{pmatrix}1&2\\3&4\end{pmatrix}$ is the <b>zero matrix</b>, not the number $0$.`
  },
  // ========================================================================
  // 3b EXAMPLES OF FIELDS
  // ========================================================================
  "la3_bsp_koerper_fp": {
    title: "Examples of fields: ℚ, ℝ, ℂ, 𝔽ₚ, 𝔽₄",
    category: "3b Examples of fields",
    type: "beispiel",
    front: R`Which fields does the script name as examples? What is $\mathbb{F}_p$, and what size do finite fields have?`,
    back: R`<b>0.</b> $\mathbb{Q},\mathbb{R},\mathbb{C}$.<br>
<b>1.</b> For every prime $p$, $(\mathbb{Z}_p,+_p,\cdot_p,0,1)$ is a field (Exercise 8); we denote these fields by $\mathbb{F}_p$.<br>
<b>2.</b> In Exercise 9 the field $\mathbb{F}_4$ with 4 elements was constructed.<br>
[Finite fields are always of the form $\mathbb{F}_{p^n}$ for $p$ prime and $n\in\mathbb{N}_{>0}$.]<br>
<b>3.</b> There are fields between $\mathbb{Q}$ and $\mathbb{R}$, e.g. $\mathbb{Q}(\sqrt 2)$ (next card); similarly $\mathbb{Q}(\sqrt n)$ for $n\in\mathbb{N}$.`,
    meta: "Script: Ch. 3, examples of fields 0.–3.; Exercise sheet 1, Exercises 8, 9",
    explanation: R`Linear algebra works over <b>every</b> field – not only over $\mathbb{R}$. Finite fields are especially instructive, because one can count everything by hand (e.g. $\mathbb{F}_p^n$ has exactly $p^n$ vectors, Exercise sheet 2).<br><br>
<b>Why $p^n$?</b> A finite field $L$ contains $\mathbb{F}_p$ (the multiples of $1$) for a prime $p$ and is a <b>vector space over $\mathbb{F}_p$</b> (subfield example). If it has dimension $n$, it has $p^n$ elements (every vector has $n$ coordinates, each with $p$ possibilities). That is why there is no field with 6 or 10 elements.<br><br>
<b>Difference $\mathbb{Z}_4$ vs. $\mathbb{F}_4$:</b> both have 4 elements, but only $\mathbb{F}_4$ is a field.`,
    example: R`<b>$\mathbb{F}_3$:</b> multiplication table: $\bar 1\cdot\bar 1 = \bar 1$, $\bar 1\cdot\bar 2 = \bar 2$, $\bar 2\cdot\bar 2 = \bar 4 = \bar 1$ – so $\bar 2^{-1} = \bar 2$.<br>
<b>$\mathbb{F}_4 = \{0,1,a,b\}$</b> as a vector space over $\mathbb{F}_2$ with basis $\{1,a\}$: $b = 1+a$, so $4 = 2^2$ elements.<br>
<b>$\mathbb{F}_{11}$:</b> $\bar 7^{-1} = \bar 8$, since $56 = 5\cdot 11+1$.`,
    counterexample: R`<b>1.</b> $\mathbb{Z}_4,\mathbb{Z}_6,\mathbb{Z}_9$ are not fields ($\bar 3\cdot\bar 3 = \bar 0$ in $\mathbb{Z}_9$).<br>
<b>2.</b> There is <b>no</b> field with $6$ elements ($6$ is not a prime power).<br>
<b>3.</b> $\mathbb{Z}$ and $\mathbb{N}$ are not fields; $\{a+b\sqrt[3]{2}: a,b\in\mathbb{Q}\}$ is not even closed under “$\cdot$”: $\sqrt[3]2\cdot\sqrt[3]2 = \sqrt[3]4$ does not lie in it.`
  },
  "la3_q_wurzel2": {
    title: "Claim: ℚ(√2) is a field",
    category: "3b Examples of fields",
    type: "proposition",
    front: R`Show: $\mathbb{Q}(\sqrt 2) := \{a+b\cdot\sqrt 2: a,b\in\mathbb{Q}\}$ is a <b>field</b> with the addition and multiplication of $\mathbb{R}$. What is the multiplicative inverse?`,
    back: R`Since $(\mathbb{R},+,\cdot,0,1)$ is a field, it suffices to show that addition and multiplication are <b>operations on $\mathbb{Q}(\sqrt 2)$</b> and that the <b>inverses</b> lie in $\mathbb{Q}(\sqrt 2)$ again (neutral elements $0 = 0+0\sqrt 2$, $1 = 1+0\sqrt 2$).<br>
<b>Addition:</b> $(a_1+b_1\sqrt 2)+(a_2+b_2\sqrt 2) = (a_1+a_2)+(b_1+b_2)\sqrt 2$.<br>
<b>Multiplication:</b> $(a_1+b_1\sqrt 2)(a_2+b_2\sqrt 2) = \underbrace{(a_1a_2+2b_1b_2)}_{\in\mathbb{Q}}+\underbrace{(a_1b_2+b_1a_2)}_{\in\mathbb{Q}}\sqrt 2$.<br>
<b>Additive inverse:</b> $(-a)+(-b)\sqrt 2$.<br>
<b>Multiplicative inverse</b> ($a\neq 0$ or $b\neq 0$):
$$(a+b\sqrt 2)\cdot\Big(\frac{a}{a^2-2b^2}+\frac{-b}{a^2-2b^2}\sqrt 2\Big) = \frac{a^2-2b^2}{a^2-2b^2} = 1.$$
<b>Remark:</b> $a^2-2b^2 = 0$ would only be possible for $\tfrac ab = \pm\sqrt 2$ or $a=b=0$; the former is impossible, because $\tfrac ab\in\mathbb{Q}$.`,
    meta: "Script: Ch. 3, examples of fields 3., claim with proof",
    explanation: R`<b>Idea of the inverse:</b> as in “rationalising the denominator”: $\dfrac{1}{a+b\sqrt 2} = \dfrac{a-b\sqrt 2}{(a+b\sqrt 2)(a-b\sqrt 2)} = \dfrac{a-b\sqrt 2}{a^2-2b^2}$. The denominator is rational – and <b>never $0$</b>, exactly because $\sqrt 2\notin\mathbb{Q}$ (Chapter 1).<br><br>
<b>Subfield trick:</b> one does not have to re-check all field axioms: associativity, commutativity, distributivity are inherited from $\mathbb{R}$. Only “stays inside” has to be checked – the same pattern as Fib $\subseteq S$ (Exercise sheet 0) and later the subspace criterion.<br><br>
$\mathbb{Q}(\sqrt 2)$ is a <b>2-dimensional vector space over $\mathbb{Q}$</b> with basis $\{1,\sqrt 2\}$ – and Exercise sheet 3, Exercise 19 shows how the choice of base field ($\mathbb{Q}$, $\mathbb{Q}(\sqrt 2)$, $\mathbb{Q}(\sqrt 3)$, $\mathbb{Q}(\sqrt 6)$) changes bases and dimension.`,
    example: R`<b>1.</b> $(1+2\sqrt 2)^{-1}$: $a^2-2b^2 = 1-8 = -7$, so $(1+2\sqrt 2)^{-1} = -\tfrac17+\tfrac27\sqrt 2$. Check: $(1+2\sqrt 2)(-\tfrac17+\tfrac27\sqrt 2) = -\tfrac17+\tfrac27\sqrt2-\tfrac27\sqrt 2+\tfrac87 = 1$ ✓.<br>
<b>2.</b> $(3+2\sqrt 2)^{-1} = 3-2\sqrt 2$, since $9-8 = 1$.<br>
<b>3.</b> $(1+\sqrt 2)(3-\sqrt 2) = (3-2)+(-1+3)\sqrt 2 = 1+2\sqrt 2$.`,
    counterexample: R`<b>1.</b> $\{a+b\sqrt[3]2: a,b\in\mathbb{Q}\}$ is not a field (not closed: $\sqrt[3]2^2 = \sqrt[3]4$).<br>
<b>2.</b> $\{a+b\sqrt 2: a,b\in\mathbb{Z}\}$ is a ring, but not a field: $2^{-1} = \tfrac12\notin$ it, while $(1+\sqrt 2)^{-1} = -1+\sqrt 2$ happens to lie in it.<br>
<b>3.</b> $\mathbb{Q}(\sqrt 4) = \mathbb{Q}$ – there $a^2-4b^2 = 0$ is possible for $(a,b) = (2,1)$; the formula for the inverse then does not apply, because $\sqrt 4 = 2$ is rational.`
  },
  // ========================================================================
  // 3c EXAMPLES OF VECTOR SPACES
  // ========================================================================
  "la3_bsp_nullraum_unterkoerper": {
    title: "Vector space examples 0. and 1.: zero space and subfields",
    category: "3c Examples of vector spaces",
    type: "beispiel",
    front: R`Why is the <b>zero space</b> a vector space over every field, and why is a field $L$ a vector space over every <b>subfield</b> $K\subseteq L$?`,
    back: R`<b>0.</b> $V = \{0_V\}$, the <b>zero space</b>, is a vector space (VS) over every field ($\lambda\cdot 0_V := 0_V$; all axioms hold trivially).<br>
<b>1.</b> If $K$ is a <b>subfield</b> of $L$ (i.e. $K\subseteq L$ with the same operations), then $L$ is a VS over $K$: for $\lambda\in K$ and $x\in L$ put $\lambda\ast x := \lambda\cdot x$ (multiplication in $L$).<br>
Example: $\mathbb{Q}(\sqrt 2)$ is a VS over $\mathbb{Q}$; $K$ is a VS over $K$.`,
    meta: "Script: Ch. 3, vector spaces 0. and 1.",
    explanation: R`<b>Zero space:</b> the smallest possible vector space. It is important as a “border case”: its basis is $\emptyset$ (Ch. 4), its dimension $0$, and it is $K^0$. It is also the smallest subspace of every VS ($\{0_V\}$, the trivial subspaces).<br><br>
<b>Subfield:</b> the vector space axioms (a)–(d) are simply field axioms of $L$ (associativity, distributivity, $1\cdot x = x$), restricted to scalars from $K$. One “forgets” that in $L$ one could also divide by elements of $L\setminus K$. The same set can have different dimensions over different fields: $\mathbb{C}$ has dimension $1$ over $\mathbb{C}$, dimension $2$ over $\mathbb{R}$ (basis $\{1,i\}$), and infinite dimension over $\mathbb{Q}$.`,
    example: R`<b>1.</b> $\mathbb{Q}(\sqrt 2)$ over $\mathbb{Q}$: the “vector” $3-5\sqrt 2 = 3\cdot 1+(-5)\cdot\sqrt 2$ has “coordinates” $(3,-5)$ with respect to $\{1,\sqrt 2\}$.<br>
<b>2.</b> $\mathbb{C}$ over $\mathbb{R}$: $2+3i = 2\cdot 1+3\cdot i$.<br>
<b>3.</b> $\mathbb{F}_4$ over $\mathbb{F}_2$: $b = 1\cdot 1+1\cdot a$.`,
    counterexample: R`<b>1. Not a subfield:</b> $\mathbb{Q}$ is <i>not</i> a VS over $\mathbb{R}$ with the ordinary multiplication: $\sqrt 2\cdot 1 = \sqrt 2\notin\mathbb{Q}$ – scalar multiplication leads out of $V$.<br>
<b>2.</b> $\mathbb{Z}$ is not a VS over $\mathbb{Q}$: $\tfrac12\cdot 1\notin\mathbb{Z}$.<br>
<b>3.</b> $\{0_V,x\}$ with $x\neq 0_V$ is not a VS in $\mathbb{R}^2$: $2\cdot x\notin\{0_V,x\}$.`
  },
  "la3_bsp_kn": {
    title: "Vector space example 2.: The coordinate space Kⁿ",
    category: "3c Examples of vector spaces",
    type: "beispiel",
    front: R`How is the <b>coordinate space $K^n$</b> defined? What are $K^0$ and $K^1$?`,
    back: R`Let $(K,+,\cdot,0,1)$ be a field and $n\in\mathbb{N}$. Then
$$K^n := \underbrace{K\times\dots\times K}_{n\text{ times}} = \{(a_1,\dots,a_n): a_i\in K\text{ for }1\le i\le n\}$$
(n-tuples, written as row vectors). With
$$(a_1,\dots,a_n)+_{K^n}(b_1,\dots,b_n) := (a_1+b_1,\dots,a_n+b_n),\qquad\lambda\cdot(a_1,\dots,a_n) := (\lambda a_1,\dots,\lambda a_n)$$
$K^n$ is a VS over $K$, the <b>$n$-dimensional coordinate space</b>.<br>
<b>Remark:</b> $K^0$ is the zero space; $K^1$ is the VS $K$ over $K$. Later we write the vectors of $K^n$ as <b>column vectors</b> $\begin{pmatrix}a_1\\\vdots\\a_n\end{pmatrix}$.`,
    meta: "Script: Ch. 3, vector spaces 2.; Exercise sheet 0, Exercise 2",
    explanation: R`$K^n$ is <b>the</b> model vector space: Theorem 7.3 shows that every $n$-dimensional VS over $K$ is isomorphic to $K^n$ (coordinates with respect to a basis). Everything is done <b>componentwise</b>, and all axioms are inherited componentwise from the field (just as in Exercise sheet 0, Exercise 2 for $\mathbb{Z}^4$).<br><br>
<b>Row or column?</b> Content-wise it does not matter. Column vectors are practical once one multiplies matrices from the left: $A_\varphi\cdot x = \varphi(x)$ (Ch. 7). Functionals then become row vectors (Ch. 6/9).<br><br>
<b>Geometry</b> (Stammbach I.2): $\mathbb{R}^3$ corresponds to the arrows in space after choosing a coordinate system.`,
    example: R`<b>1.</b> In $\mathbb{R}^3$: $2\cdot(1,0,-3)+(4,1,1) = (6,1,-5)$.<br>
<b>2.</b> In $\mathbb{F}_5^2$: $\bar 3\cdot(\bar 2,\bar 4)+(\bar 1,\bar 1) = (\bar 6,\overline{12})+(\bar 1,\bar 1) = (\bar 2,\bar 3)$.<br>
<b>3.</b> $K^1 = K$: in $\mathbb{Q}^1$ the “vector” is $\tfrac34$, and the “scalar multiplication” $2\cdot\tfrac34 = \tfrac32$.`,
    counterexample: R`<b>1.</b> With “componentwise” multiplication $(a_1,a_2)\cdot(b_1,b_2) := (a_1b_1,a_2b_2)$, $\mathbb{R}^2$ does <b>not become a field</b>: $(1,0)\cdot(0,1) = (0,0)$ (zero divisors) – in LA one does not multiply vectors with each other.<br>
<b>2.</b> $\{(a_1,a_2)\in\mathbb{R}^2: a_1\ge 0\}$ with the $\mathbb{R}^2$ operations is not a VS: $(-1)\cdot(2,0) = (-2,0)$ does not lie in it.`
  },
  "la3_bsp_matrizen": {
    title: "Vector space example 3.: The m × n matrices M_{m×n}(K) – index convention",
    category: "3c Examples of vector spaces",
    type: "beispiel",
    front: R`How does the script write the entries of an $(m\times n)$ matrix $A\in M_{m\times n}(K)$ (which index is up, which is down)? How are matrices added and multiplied by scalars?`,
    back: R`If $K$ is a field and $m,n\in\mathbb{N}_{>0}$, then $M_{m\times n}(K)$ is the set of all $m\times n$ matrices with entries in $K$:
$$A = \begin{pmatrix}a_1^1&a_1^2&\cdots&a_1^n\\a_2^1&a_2^2&\cdots&a_2^n\\\vdots&&\ddots&\vdots\\a_m^1&\cdots&\cdots&a_m^n\end{pmatrix}\quad(m\text{ rows},\;n\text{ columns}),$$
$$a_i^j\quad\text{with}\quad j = \text{column number (upper)},\quad i = \text{row number (lower)}.$$
A row is a row vector from $K^n$, a column a column vector from $K^m$. (Other notation: $a_{ij}$, $i$ = row, $j$ = column.)<br>
Addition and scalar multiplication <b>entrywise</b> as in $K^n$: $\lambda\cdot A = (\lambda\cdot a_i^j)$.`,
    meta: "Script: Ch. 3, vector spaces 3.; Exercise sheet 7, Exercise 30",
    explanation: R`<b>Rule of thumb from the script:</b> the <b>upper</b> index counts the <b>columns</b>, the <b>lower</b> one the <b>rows</b>. This fits the representing matrix (Ch. 7): in the $j$-th column of $A_\varphi$ stand the coordinates $\mu_1^j,\dots,\mu_m^j$ of the image vector $\varphi(x_j)$ – the upper index $j$ says <b>which</b> basis vector was mapped, the lower $i$ says <b>which</b> coordinate.<br><br>
Later (Ch. 8) one briefly writes $(\alpha_i^j)_m^n$ for the $(m\times n)$ matrix; if $n=1$ resp. $m=1$, one omits $n,j$ resp. $m,i$: $(\lambda_i)_m$ is a column vector, $(\mu^j)^n$ a row vector.<br><br>
As a vector space $M_{m\times n}(K)$ is “merely” $K^{mn}$ arranged in a rectangle – the dimension is $m\cdot n$ (Theorem 7.6). The interesting structure (matrix multiplication) only comes in Ch. 7.`,
    example: R`$A = \begin{pmatrix}1&2&3\\4&5&6\end{pmatrix}\in M_{2\times 3}(\mathbb{R})$: $m=2$ rows, $n=3$ columns.<br>
$a_2^1 = 4$ (row 2, column 1), $a_1^3 = 3$ (row 1, column 3), $a_2^3 = 6$.<br>
$2\cdot A+\begin{pmatrix}0&-4&1\\0&0&-12\end{pmatrix} = \begin{pmatrix}2&0&7\\8&10&0\end{pmatrix}$.`,
    counterexample: R`<b>Mixing up indices:</b> in the example $a_1^2 = 2$, but $a_2^1 = 4$ – if one swaps upper and lower, one reads the <b>transposed</b> matrix (Ch. 9).<br>
<b>Cannot be added:</b> a $2\times 3$ and a $3\times 2$ matrix cannot be added (different vector spaces), although both have 6 entries.`
  },
  "la3_bsp_folgenraum": {
    title: "Vector space example 4.: The sequence space S(K)",
    category: "3c Examples of vector spaces",
    type: "beispiel",
    front: R`How is the <b>sequence space $S(K)$</b> defined, and why is it a vector space?`,
    back: R`Let $S(K)$ be the set of all infinite sequences $(a_0,\dots,a_n,\dots)$ (for $n\in\mathbb{N}$) with elements from $K$ and $+_S$ defined termwise (as in Exercise 3):
$$(a_0,a_1,\dots)+_S(b_0,b_1,\dots) := (a_0+b_0,a_1+b_1,\dots).$$
With $\lambda\cdot(a_0,a_1,\dots) := (\lambda\cdot a_0,\lambda\cdot a_1,\dots)$ for $\lambda\in K$, $S(K)$ is a VS over $K$ (cf. Exercise 11). All axioms hold termwise.`,
    meta: "Script: Ch. 3, vector spaces 4.; Exercise sheet 0, Exercise 3; Exercise sheet 2, Exercise 11",
    explanation: R`$S(K)$ is “$K^n$ with $n=\infty$”: a sequence is a function $\mathbb{N}\to K$, and with pointwise operations all functions $M\to K$ form a VS (Exercise sheet 2, remark on Exercise 14).<br><br>
<b>Important difference to $K^n$:</b> the “unit sequences” $e_i = (0,\dots,0,1,0,\dots)$ are linearly independent, but are <b>not a basis</b> of $S(K)$: linear combinations are <b>always finite</b>, and $(1,1,1,\dots)$ is not a finite linear combination of the $e_i$ (Ch. 4, Example 3). The $e_i$ only span $c_{00}$ (sequences with finitely many entries $\neq 0$, Exercise sheet 6).<br><br>
Many interesting subspaces: Fib (Fibonacci recurrence, dimension 2), convergent sequences, null sequences (Stammbach I.3.2).`,
    example: R`$(1,2,3,4,\dots)+(-1,0,1,2,\dots) = (0,2,4,6,\dots)$; $\;\tfrac12\cdot(2,4,8,16,\dots) = (1,2,4,8,\dots)$.<br>
Subspace Fib $\subseteq S(\mathbb{R})$: $(0,1,1,2,3,\dots)$ and $(2,1,3,4,7,\dots)$ lie in it, and so does their sum $(2,2,4,6,10,\dots)$ ($4 = 2+2$, $6 = 4+2$, $10 = 6+4$ ✓).`,
    counterexample: R`<b>1.</b> Sequences with $a_0 = 1$: not a VS (the zero sequence is missing; $(1,0,\dots)+(1,0,\dots) = (2,0,\dots)$ drops out).<br>
<b>2.</b> Sequences with only non-negative terms: not a VS, $(-1)\cdot(1,1,\dots)$ drops out.<br>
<b>3.</b> “Basis from the $e_i$” fails: $(1,1,1,\dots)\neq\sum_{i=0}^{N}\lambda_i e_i$ for every finite $N$, because on the right the term $N+1$ is $0$.`
  },
  "la3_s2_a11_a14": {
    title: "Exercise sheet 2, Exercises 11 & 14: Fib and the function space ℝ^ℝ",
    category: "3c Examples of vector spaces",
    type: "aufgabe",
    front: R`Show: (a) $\mathrm{Fib}$ is a vector space over $\mathbb{R}$; (b) the set $V$ of all functions $f:\mathbb{R}\to\mathbb{R}$ with $(f+g)(x) := f(x)+g(x)$ is a vector space over $\mathbb{R}$.`,
    back: R`<b>(a) Fib:</b> $(\mathrm{Fib},+)$ is an abelian group (Exercise 3(b)). Scalar multiplication termwise $\lambda\cdot(f_n) := (\lambda f_n)$. It stays in Fib: $\lambda f_{i+2} = \lambda(f_{i+1}+f_i) = \lambda f_{i+1}+\lambda f_i$. The axioms (a)–(d) hold termwise in $\mathbb{R}$.<br><br>
<b>(b) Functions:</b> $(\lambda\cdot f)(x) := \lambda\cdot f(x)$. Group: zero function $0_V(x) = 0$ is neutral, $(-f)(x) := -f(x)$ is the inverse; associativity and commutativity pointwise. Axioms pointwise:
$$\lambda(f(x)+g(x)) = \lambda f(x)+\lambda g(x),\;(\lambda+\mu)f(x) = \lambda f(x)+\mu f(x),\;(\lambda\mu)f(x) = \lambda(\mu f(x)),\;1\cdot f(x) = f(x).$$
Two functions are equal if they agree at every point – so the axioms hold in $V$.`,
    meta: "Exercise sheet 2, Exercises 11 and 14 (model solution with remarks)",
    explanation: R`<b>The principle “inherit pointwise”:</b> if $W$ is a VS and $M$ is any set, then the set of all functions $M\to W$ with pointwise operations is a VS. Sequences ($M = \mathbb{N}$), functions ($M = \mathbb{R}$), tuples ($M = \{1,\dots,n\}$), matrices ($M = \{1,\dots,m\}\times\{1,\dots,n\}$) are all special cases!<br><br>
<b>For Fib</b> only one step is added: the subset must be <b>closed</b> under the operations. This works because the recurrence is <b>linear and homogeneous</b>. (In Ch. 5: Fib is a subspace of $S(\mathbb{R})$.)<br><br>
<b>Outlook:</b> Fib has dimension 2 (Exercise sheet 3, Exercise 17), because a Fibonacci sequence is determined by $(f_0,f_1)$.`,
    example: R`<b>Fib:</b> $3\cdot(1,0,1,1,2,3,\dots) = (3,0,3,3,6,9,\dots)$ – again Fibonacci-like ($6 = 3+3$, $9 = 6+3$).<br>
<b>Functions:</b> $f(x) = x^2$, $g(x) = \sin x$: $(2f+g)(\pi) = 2\pi^2+0 = 2\pi^2$; $\;(f+(-f))(3) = 9-9 = 0 = 0_V(3)$.`,
    counterexample: R`<b>1.</b> $\{f:\mathbb{R}\to\mathbb{R}: f(0) = 1\}$ is not a VS: $0_V(0) = 0\neq 1$, and $(f+g)(0) = 2$.<br>
<b>2.</b> $\{f: f(x)\ge 0\;\forall x\}$ is not a group: for $f(x) = x^2$ the inverse $-f$ is missing.<br>
<b>3.</b> Sequences with $f_{i+2} = f_{i+1}\cdot f_i$: $(1,2,2,4,8,\dots)$ satisfies it, but $2\cdot$ it $= (2,4,4,8,\dots)$ does not: the third term is $4\neq 4\cdot 2 = 8$ – not closed under scalar multiplication.`
  },
  "la3_s2_a12_qx": {
    title: "Exercise sheet 2, Exercise 12: ℚ[X] is a vector space over ℚ",
    category: "3c Examples of vector spaces",
    type: "aufgabe",
    front: R`Show that $\mathbb{Q}[X]$ (polynomials with rational coefficients), with polynomial addition and $\lambda\cdot p := \sum_{i\ge 0}(\lambda a_i)X^i$, is a vector space over $\mathbb{Q}$. How does this relate to the ring structure?`,
    back: R`Write $p = \sum_{i\ge 0}a_iX^i$ with $a_i\in\mathbb{Q}$ and $a_i = 0$ for almost all $i$. $(\mathbb{Q}[X],+)$ is an abelian group (Exercise 7(a)).<br>
<b>Scalar multiplication stays in $\mathbb{Q}[X]$:</b> if $a_i = 0$ for $i\gt n$, then also $\lambda a_i = 0$; and $\lambda a_i\in\mathbb{Q}$.<br>
<b>Axioms coefficientwise:</b> $\lambda(a_k+b_k) = \lambda a_k+\lambda b_k$, $(\lambda+\mu)a_k = \lambda a_k+\mu a_k$, $(\lambda\mu)a_k = \lambda(\mu a_k)$, $1\cdot a_k = a_k$.<br><br>
<b>Remark:</b> If one regards $\lambda$ as a constant polynomial, then $(\lambda\cdot p)_k = \sum_{i+j=k}e_ia_j = \lambda a_k$ – scalar multiplication is ring multiplication with constants. This makes $\mathbb{Q}[X]$ an <b>algebra over $\mathbb{Q}$</b>.`,
    meta: "Exercise sheet 2, Exercise 12; Script: Ch. 4, example 2 (basis {Xⁱ})",
    explanation: R`As a <b>vector space</b> one “forgets” that polynomials can also be multiplied with each other – one only uses addition and multiples. Then a polynomial is simply its <b>coefficient list</b> $(a_0,a_1,a_2,\dots)$ with only finitely many entries $\neq 0$ – i.e. an element of $c_{00}(\mathbb{Q})$.<br><br>
<b>Basis</b> (Ch. 4): $\{X^i: i\in\mathbb{N}\}$ with $X^0 := 1$; $\mathbb{Q}[X]$ is infinite-dimensional. Other bases: the polynomials $x_n = 1+(n+1)\sum_{i=1}^n X^i$ from Exercise sheet 3, Exercise 18, or Lagrange polynomials for polynomials of degree $\le n$ (Ch. 8).<br><br>
The subspace of polynomials of degree $\le n$ has dimension $n+1$ (basis $1,X,\dots,X^n$).`,
    example: R`$p = 1-\tfrac12X+3X^3$, $q = 2+X-X^3$: $\;p+2q = 5+\tfrac32X+X^3$.<br>
As coefficient vectors: $(1,-\tfrac12,0,3,0,\dots)+2\cdot(2,1,0,-1,0,\dots) = (5,\tfrac32,0,1,0,\dots)$.`,
    counterexample: R`<b>1.</b> The polynomials of degree <b>exactly</b> $2$ do not form a VS: $(X^2+X)+(-X^2) = X$ has degree 1; moreover the zero polynomial is missing.<br>
<b>2.</b> $\mathbb{Z}[X]$ is not a VS over $\mathbb{Q}$: $\tfrac12\cdot X\notin\mathbb{Z}[X]$.<br>
<b>3.</b> “Polynomial” vs. “polynomial function” over $\mathbb{F}_2$: $X^2+X\neq 0$ as a polynomial, but as a function $\mathbb{F}_2\to\mathbb{F}_2$ we have $x^2+x = 0$ for $x = \bar 0,\bar 1$ – in the vector space $\mathbb{F}_2[X]$ the coefficients count.`
  },
  "la3_s2_a13_zpn": {
    title: "Exercise sheet 2, Exercise 13: The finite vector space ℤₚⁿ",
    category: "3c Examples of vector spaces",
    type: "aufgabe",
    front: R`(a) How many elements does the vector space $\mathbb{Z}_p^n$ over $\mathbb{Z}_p$ have? (b) Compute for $p = 11$, $n = 11$: $\bar 7\cdot(\bar 0,\bar 1,\bar 2,\dots,\overline{10})$.`,
    back: R`<b>(a)</b> $|\mathbb{Z}_p^n| = p^n$: we have $|\mathbb{Z}_p| = p$ (each element has exactly one representative $0\le k\lt p$), and each of the $n$ components can independently take one of the $p$ values: $p\cdot p\cdots p = p^n$.<br>
<b>(b)</b> Componentwise with $\cdot_{11}$:
$$\bar 7\cdot(\bar 0,\bar 1,\bar 2,\bar 3,\bar 4,\bar 5,\bar 6,\bar 7,\bar 8,\bar 9,\overline{10}) = (\bar 0,\bar 7,\bar 3,\overline{10},\bar 6,\bar 2,\bar 9,\bar 5,\bar 1,\bar 8,\bar 4).$$`,
    meta: "Exercise sheet 2, Exercise 13",
    explanation: R`For the count the operations play no role – it is pure counting of $n$-tuples. More interesting is (b): multiplication by $\bar 7\neq\bar 0$ <b>permutes</b> the elements of $\mathbb{Z}_{11}$ – each one occurs exactly once. This is exactly the injectivity of $x\mapsto 7x$ in a field (pigeonhole argument from Ch. 1 and Exercise sheet 1, 8(d)); in particular $\bar 1$ appears (at position $\bar 8$), so $\bar 7^{-1} = \bar 8$.<br><br>
<b>Outlook:</b> $\mathbb{Z}_p^n$ has dimension $n$; a $k$-dimensional subspace has exactly $p^k$ elements. So one can even count the subspaces of finite vector spaces.`,
    example: R`<b>$\mathbb{Z}_2^3$</b> has $2^3 = 8$ vectors: $(\bar 0,\bar 0,\bar 0),(\bar 1,\bar 0,\bar 0),\dots,(\bar 1,\bar 1,\bar 1)$.<br>
Check for (b): $7\cdot 3 = 21 = 11+10\Rightarrow\overline{10}$; $\;7\cdot 8 = 56 = 5\cdot 11+1\Rightarrow\bar 1$; $\;7\cdot 10 = 70 = 6\cdot 11+4\Rightarrow\bar 4$ ✓.`,
    counterexample: R`<b>Not a field, no permutation:</b> In $\mathbb{Z}_{12}$, $\bar 4\cdot(\bar 0,\bar 1,\dots,\overline{11}) = (\bar 0,\bar 4,\bar 8,\bar 0,\bar 4,\bar 8,\dots)$ – only 3 different values, $\bar 1$ never occurs ($\bar 4$ has no inverse). $\mathbb{Z}_{12}^n$ is therefore not a vector space in the sense of Definition 1.`
  }
};
})();
