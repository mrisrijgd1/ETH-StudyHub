/* ==========================================================================
   LINEAR ALGEBRA I – CHAPTER 4 (English): Bases and dimension
   (Linear span, linear independence, basis, dimension, Theorems 4.0–4.6, Lemma 4.2) + Exercise sheet 3
   Linear Algebra I – Prof. Dr. Lorenz Halbeisen, HS 2026
   English translation of data_kapitel4.js. Formulas, HTML and ids are identical.
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_EN_KAPITEL_4 = {
  // ========================================================================
  // 4a LINEAR COMBINATIONS AND LINEAR INDEPENDENCE
  // ========================================================================
  "la4_def_huelle": {
    title: "Definition: Linear combination and linear span ⟨M⟩",
    category: "4a Linear combinations and linear independence",
    type: "definition",
    front: R`What is a <b>linear combination</b> of vectors $x_1,\dots,x_n$, and how is the <b>linear span</b> $\langle M\rangle$ of a set $M\subseteq V$ defined? What is $\langle\emptyset\rangle$?`,
    back: R`Let $V$ be a VS over $K$, $x_1,\dots,x_n\in V$ (pairwise distinct) and $\lambda_1,\dots,\lambda_n\in K$. Then
$$\lambda_1\cdot x_1+\dots+\lambda_n\cdot x_n = \sum_{i=1}^n\lambda_i\cdot x_i\in V$$
is a <b>linear combination</b> of the vectors $x_1,\dots,x_n$; the <b>empty sum</b> ($n=0$) denotes the zero vector $0_V$ [empty sums are 0, empty products are 1].<br><br>
<b>Definition:</b> For $M\subseteq V$,
$$\langle M\rangle := \Big\{\sum_{i=1}^n\lambda_i\cdot x_i:\;n\in\mathbb{N}\wedge\forall 1\le i\le n\,(\lambda_i\in K\wedge x_i\in M)\Big\}\subseteq V$$
is the <b>linear span</b> of $M$: the set of all vectors that can be written as (finite!) linear combinations of vectors from $M$. In particular $\langle\emptyset\rangle = \{0_V\}$.`,
    meta: "Script: Ch. 4, linear combination, definition of linear span, remark",
    explanation: R`<b>Geometrically</b> (Stammbach I.4.1): the multiples $\lambda x$ of a vector $x\neq 0$ form a line through $0$; the combinations $\lambda x+\mu y$ of two non-parallel vectors form a plane through $0$. $\langle M\rangle$ is in general “everything one can build from $M$ by stretching and adding”.<br><br>
<b>Central properties:</b><br>
• $M\subseteq\langle M\rangle$ (take $1\cdot x$), and $0_V\in\langle M\rangle$ always (empty sum).<br>
• $\langle M\rangle$ is the <b>smallest subspace</b> containing $M$; $W$ is a subspace if and only if $\langle W\rangle = W$ (Lemma 5.0).<br>
• $\langle\langle M\rangle\rangle = \langle M\rangle$ (linear combinations of linear combinations are linear combinations).<br><br>
<b>Finiteness is central:</b> even if $M$ is infinite, every linear combination uses only <b>finitely many</b> vectors. This is what distinguishes algebra from analysis (series).`,
    example: R`<b>1.</b> (Stammbach I.4.5) $M = \{(1,1,0),(1,0,1)\}\subseteq\mathbb{R}^3$: $\langle M\rangle = \{(a+b,a,b): a,b\in\mathbb{R}\} = \{(x,y,z): x-y-z = 0\}$ – a plane through $0$. E.g. $2\cdot(1,1,0)-3\cdot(1,0,1) = (-1,2,-3)$, and $-1-2-(-3) = 0$ ✓.<br>
<b>2.</b> $\langle\{X^0,X^2,X^4,\dots\}\rangle\subseteq\mathbb{Q}[X]$ are exactly the even polynomials $p(-X) = p(X)$, e.g. $3-X^2+\tfrac12X^4$.`,
    counterexample: R`<b>1. Only finite sums:</b> $(1,1,1,\dots)\notin\langle\{e_i: i\in\mathbb{N}\}\rangle\subseteq S(K)$, although “$\sum_{i=0}^\infty e_i$” formally looks like this (Ch. 4, example 3 on bases).<br>
<b>2.</b> $(1,0,0)\notin\langle\{(1,1,0),(1,0,1)\}\rangle$, since $1-0-0 = 1\neq 0$.<br>
<b>3.</b> $\langle\emptyset\rangle\neq\emptyset$: the linear span always contains $0_V$.`
  },
  "la4_def_lu": {
    title: "Definition: Linearly independent / linearly dependent",
    category: "4a Linear combinations and linear independence",
    type: "definition",
    front: R`How does the script define that the vectors of a set $M\subseteq V$ are <b>linearly independent</b> (l.i.)? Is $\{0_V\}$ l.i.?`,
    back: R`If $V$ is a VS over $K$ and $M\subseteq V$, then the vectors from $M$ are called <b>linearly independent (l.i.)</b> if
$$\forall x\in M\;\big(x\notin\langle M\setminus\{x\}\rangle\big).$$
Otherwise the vectors from $M$ are called <b>linearly dependent (l.d.)</b>.<br><br>
<b>Examples:</b><br>
• $M = \{0\}$: $M\setminus\{0\} = \emptyset$ and $0\in\langle\emptyset\rangle = \{0\}$ – so $0$ is a l.d. vector.<br>
• $V = K^2$, $M = \{(1,0),(0,1)\}$: $(1,0)\notin\langle\{(0,1)\}\rangle$ and $(0,1)\notin\langle\{(1,0)\}\rangle$ – l.i.`,
    meta: "Script: Ch. 4, definition of l.i./l.d. with examples",
    explanation: R`<b>Intuition:</b> linearly independent means <b>“none is superfluous”</b>: no vector from $M$ can be built from the others. Each brings a new direction. If you remove a vector from an l.i. set, the span becomes strictly smaller.<br><br>
<b>Two equivalent views:</b><br>
• <b>Script definition</b> (“no vector is an LC of the others”) – intuitive.<br>
• <b>Theorem 4.0</b> (“$0$ can only be represented trivially”) – computational: one solves a homogeneous linear system.<br><br>
<b>Consequences:</b> every set containing $0_V$ is l.d.; every subset of an l.i. set is l.i.; every superset of an l.d. set is l.d. $\emptyset$ is l.i. (the condition “$\forall x\in\emptyset$” is vacuously satisfied). A single vector $x\neq 0_V$ is l.i. (Lemma 3.0 (d)).`,
    example: R`<b>1.</b> $(1,2)$ and $(3,1)$ in $\mathbb{R}^2$ are l.i.: $(1,2) = \lambda(3,1)$ would mean $\lambda = \tfrac13$ and $\lambda = 2$ – impossible (and symmetrically).<br>
<b>2.</b> (Stammbach II.1.6) $\beta_1 = (2,-1,1)$, $\beta_2 = (1,0,0)$, $\beta_3 = (0,2,1)$ are l.i.: the system $2x_1+x_2 = 0$, $-x_1+2x_3 = 0$, $x_1+x_3 = 0$ has only the trivial solution.`,
    counterexample: R`<b>1.</b> (Stammbach II.1.6) $\alpha_1 = (1,-1,0)$, $\alpha_2 = (3,2,1)$, $\alpha_3 = (1,4,1)$ are <b>l.d.</b>: $2\alpha_1-\alpha_2+\alpha_3 = (2-3+1,-2-2+4,0-1+1) = 0$, so $\alpha_3 = \alpha_2-2\alpha_1\in\langle\{\alpha_1,\alpha_2\}\rangle$.<br>
<b>2.</b> Pairwise l.i. is not enough: $(1,0),(0,1),(1,1)$ are pairwise l.i., but together l.d.: $(1,1) = (1,0)+(0,1)$.<br>
<b>3.</b> Depends on the field: $1$ and $\sqrt 2$ are l.i. over $\mathbb{Q}$, but l.d. over $\mathbb{R}$: $\sqrt 2 = \sqrt 2\cdot 1$.`
  },
  "la4_satz_4_0": {
    title: "Theorem 4.0: l.i. ⟺ the zero vector is only trivially representable",
    category: "4a Linear combinations and linear independence",
    type: "satz",
    front: R`State <b>Theorem 4.0</b>: when is a set $M\subseteq V$ l.i.? How does one use it for calculations?`,
    back: R`Let $V$ be a VS over $K$. A set $M\subseteq V$ of vectors is <b>l.i. if and only if</b>
$$\sum_{i=1}^n\lambda_i\cdot x_i = 0\;\longrightarrow\;\forall 1\le i\le n\,(\lambda_i = 0)\qquad(\ast)$$
where $n\in\mathbb{N}^+$ and $\forall 1\le i\le n\,(\lambda_i\in K\wedge x_i\in M)$ (with pairwise distinct $x_i$).<br><br>
In words: the <b>only</b> linear combination of vectors from $M$ giving the zero vector is the <b>trivial</b> one (all coefficients $0$).`,
    meta: "Script: Ch. 4, Theorem 4.0",
    explanation: R`<b>Computational recipe:</b> to check $x_1,\dots,x_n\in K^m$ for l.i., one sets up $\lambda_1x_1+\dots+\lambda_nx_n = 0$. This is a <b>homogeneous linear system</b> in $\lambda_1,\dots,\lambda_n$. Only the trivial solution ⟺ l.i.<br><br>
<b>Why equivalent to the definition?</b> A non-trivial representation $\sum\lambda_ix_i = 0$ with $\lambda_1\neq 0$ can be solved for $x_1$ (division by $\lambda_1$ – here one needs the field!): $x_1 = \sum_{i\ge 2}(-\lambda_1^{-1}\lambda_i)x_i\in\langle M\setminus\{x_1\}\rangle$. Conversely, $y = \sum\lambda_ix_i$ with $x_i\neq y$ gives the non-trivial representation $\sum\lambda_ix_i+(-1)\cdot y = 0$.<br><br>
<b>Advantage of (∗):</b> all vectors are treated equally – one does not have to check for each $x$ separately whether it lies in the span of the others. (∗) is the form used in almost all proofs (Theorems 4.1, 6.2, Lemma 5.6, exercise sheets).`,
    example: R`<b>1.</b> $(1,1,0),(0,1,1),(1,0,1)\in\mathbb{R}^3$: $\lambda_1+\lambda_3 = 0$, $\lambda_1+\lambda_2 = 0$, $\lambda_2+\lambda_3 = 0$ ⇒ $\lambda_3 = -\lambda_1$, $\lambda_2 = -\lambda_1$, $-2\lambda_1 = 0$ ⇒ all $0$: <b>l.i.</b><br>
<b>2.</b> Exercise sheet 3, Exercise 19: $q_0+q_1\sqrt 2+q_2\sqrt 3+q_3\sqrt 6 = 0$ with $q_i\in\mathbb{Q}$ ⇒ all $q_i = 0$ – so $1,\sqrt 2,\sqrt 3,\sqrt 6$ are l.i. over $\mathbb{Q}$.`,
    counterexample: R`<b>1.</b> Over $\mathbb{F}_2$: $(\bar 1,\bar 1,\bar 0),(\bar 0,\bar 1,\bar 1),(\bar 1,\bar 0,\bar 1)$ are <b>l.d.</b>: their sum is $(\bar 2,\bar 2,\bar 2) = (\bar 0,\bar 0,\bar 0)$ with all $\lambda_i = \bar 1\neq\bar 0$. (Over $\mathbb{R}$ the same pattern would be l.i. – the field matters!)<br>
<b>2.</b> $\{(1,2),(3,6)\}$: $3\cdot(1,2)+(-1)\cdot(3,6) = (0,0)$ – non-trivial, so l.d.`
  },
  "la4_beweis_4_0": {
    title: "Proof of Theorem 4.0 (twice contraposition)",
    category: "4a Linear combinations and linear independence",
    type: "beweis",
    front: R`Prove both directions of <b>Theorem 4.0</b> using contraposition.`,
    back: R`<b>(⇒) Contraposition:</b> Writing (∗) as $A\to B$, we have $\neg(\ast)\iff A\wedge\neg B$: $\sum_{i=1}^n\lambda_ix_i = 0\wedge\exists i\,(\lambda_i\neq 0)$. W.l.o.g. $\lambda_1\neq 0$ (otherwise renumber). Then
$$0 = (-\lambda_1^{-1})\cdot\sum_{i=1}^n\lambda_ix_i = -x_1+\sum_{i=2}^n(-\lambda_1^{-1}\lambda_i)x_i\;\Rightarrow\;x_1 = \sum_{i=2}^n\underbrace{(-\lambda_1^{-1}\lambda_i)}_{=:\lambda_i'}\cdot x_i$$
with $x_i\in M\setminus\{x_1\}$. So $x_1\in\langle M\setminus\{x_1\}\rangle$: $M$ is not l.i.<br>
<b>(⇐) Contraposition:</b> If the vectors from $M$ are not l.i., then there is $y\in M$ with $y\in\langle M\setminus\{y\}\rangle$, i.e. $y = \sum_{i=1}^n\lambda_ix_i$ with $x_i\in M\setminus\{y\}$. Then
$$0 = y-y = \sum_{i=1}^n\lambda_ix_i-y = \sum_{i=1}^{n+1}\lambda_ix_i\quad\text{with }\lambda_{n+1} := -1,\;x_{n+1} := y.$$
Since $\lambda_{n+1}\neq 0$, this is $\neg(\ast)$.`,
    meta: "Script: Ch. 4, proof of Theorem 4.0",
    explanation: R`<b>Key step (⇒):</b> a non-vanishing coefficient is normalised to $-1$ by <b>multiplying with $-\lambda_1^{-1}$</b>; then $x_1$ stands “alone” and is expressed as an LC of the others. Without a field (without $\lambda_1^{-1}$) this does not work.<br><br>
<b>Key step (⇐):</b> a representation $y = \dots$ is turned into a representation of zero by moving $y$ to the other side, so that $y$ has coefficient $-1\neq 0$. Important: $y$ does not occur on the right (the $x_i$ are from $M\setminus\{y\}$), otherwise the $-1$ could cancel.<br><br>
<b>Logic:</b> the negation of an implication is $\neg(A\to B)\iff\neg(\neg A\vee B)\iff A\wedge\neg B$ – the tool from Chapter 1. “w.l.o.g.” = without loss of generality.`,
    example: R`$M = \{(1,2),(2,5),(1,1)\}\subseteq\mathbb{Q}^2$: $3\cdot(1,2)-1\cdot(2,5)-1\cdot(1,1) = (0,0)$ with $\lambda_1 = 3\neq 0$. Multiply by $-\tfrac13$: $(1,2) = \tfrac13(2,5)+\tfrac13(1,1)$. Check: $\tfrac13(3,6) = (1,2)$ ✓.`,
    counterexample: R`<b>Source of error:</b> in the representation $0 = \sum\lambda_ix_i$ one cannot solve for an $x_k$ with $\lambda_k = 0$. In $0\cdot(1,0)+2\cdot(0,1)-1\cdot(0,2) = 0$ we have $\lambda_1 = 0$, and indeed $(0,1) = \tfrac12(0,2)$ – one must choose the index with $\lambda\neq 0$; $(1,0)$ does <i>not</i> lie in $\langle\{(0,1),(0,2)\}\rangle$.`
  },
  "la4_lemma_4_2": {
    title: "Lemma 4.2: A vector is an LC of the preceding ones",
    category: "4a Linear combinations and linear independence",
    type: "lemma",
    front: R`State and prove <b>Lemma 4.2</b> about finite sequences $x_1,\dots,x_n$ of vectors $\neq 0$.`,
    back: R`<b>Lemma 4.2:</b> A finite sequence (i.e. a list) $x_1,\dots,x_n$ of vectors different from $0$ is <b>l.d. if and only if</b> some vector $x_k$ for $2\le k\le n$ is a linear combination of the <b>preceding</b> vectors, i.e. $x_k = \sum_{i=1}^{k-1}\lambda_i\cdot x_i$.<br><br>
<b>Proof (⇐):</b> clear – if $x_k$ is an LC of the preceding ones, then $x_1,\dots,x_n$ are not l.i.<br>
<b>(⇒):</b> If $x_1,\dots,x_n$ are l.d., then there exists a <b>smallest</b> $k$ with $2\le k\le n$ such that already $x_1,\dots,x_k$ are l.d. So there are $\lambda_1,\dots,\lambda_k$, not all $0$, with $\sum_{i=1}^k\lambda_ix_i = 0$. From the minimality of $k$ it follows that $\lambda_k\neq 0$ – otherwise already $x_1,\dots,x_{k-1}$ would be l.d. Hence
$$x_k = \sum_{i=1}^{k-1}(-\lambda_k^{-1}\cdot\lambda_i)\cdot x_i.$$`,
    meta: "Script: Ch. 4, Lemma 4.2 with proof",
    explanation: R`<b>Idea:</b> one goes through the list from the front and asks at each new vector: “Do you bring something new, or can you be built from your predecessors?” If the list is l.d., there is a <b>first</b> vector that brings nothing new.<br><br>
<b>Why $k\ge 2$?</b> $x_1\neq 0$ alone is l.i. (Lemma 3.0 (d)); so the first dependency can appear at the earliest at the second vector. That is why the assumption “vectors not equal to $0$” is made.<br><br>
<b>Significance:</b> Lemma 4.2 is the engine behind Theorems 4.3, 4.4 and the exchange theorem of Steinitz (4.5): in a spanning sequence one always <b>deletes</b> the first superfluous vector without changing the span – that is “thinning out” to a basis.`,
    example: R`Sequence $(1,0),(0,1),(2,3)$ in $\mathbb{R}^2$: $(1,0)$ and $(0,1)$ are l.i.; $(2,3) = 2\cdot(1,0)+3\cdot(0,1)$ – so $k = 3$, $\lambda_1 = 2$, $\lambda_2 = 3$.<br>
Sequence $(1,1,0),(2,2,0),(0,0,1)$: already $k=2$: $(2,2,0) = 2\cdot(1,1,0)$.`,
    counterexample: R`<b>1. “Preceding” is important, but not “every”:</b> in $(1,0),(0,1),(1,1)$ the vector $(1,0)$ is <b>not</b> an LC of its predecessors (there are none), although $(1,0) = (1,1)-(0,1)$ – the lemma only guarantees <i>one</i> index $k$, here $k=3$.<br>
<b>2. Zero vector:</b> without “$\neq 0$” the lemma would fail for the sequence $0,(1,0)$: it is l.d., but $(1,0)$ is not an LC of $0$ – the dependency sits in the first vector ($k = 1$).`
  },
  // ========================================================================
  // 4b BASIS AND DIMENSION
  // ========================================================================
  "la4_def_basis": {
    title: "Definition: Basis (with examples 0.–3.)",
    category: "4b Basis and dimension",
    type: "definition",
    front: R`When is $B\subseteq V$ a <b>basis</b> of $V$? Name the examples of the script – why is $\{e_i: i\in\mathbb{N}\}$ <b>not</b> a basis of $S(K)$?`,
    back: R`If $V$ is a VS over $K$ and $B\subseteq V$, then $B$ is a <b>basis</b> of $V$ if
$$B\text{ is a set of l.i. vectors with }\langle B\rangle = V.$$
<b>Examples:</b><br>
<b>0.</b> $\emptyset$ is a basis of the zero space $\{0_V\}$.<br>
<b>1.</b> $B_4 = \{(1,0,0,0),(0,1,0,0),(0,0,1,0),(0,0,0,1)\}$ is a basis of $\mathbb{R}^4$ (e.g. $\langle B_4\setminus\{x_3\}\rangle = \{(\lambda_1,\lambda_2,0,\lambda_4)\}\not\ni x_3$, and $(\lambda_1,\dots,\lambda_4) = \sum\lambda_ix_i$).<br>
<b>2.</b> $B = \{X^i: i\in\mathbb{N}\}$ (with $X^0 := 1$) is a basis of $\mathbb{Q}[X]$.<br>
<b>3.</b> $M = \{e_i: i\in\mathbb{N}\}\subseteq S(K)$ is l.i., but $\langle M\rangle\neq S(K)$: $(1,1,1,\dots)$ is not an LC of vectors from $M$ – <b>linear combinations are always finite</b>. So not a basis.<br>
<b>Remark:</b> Every VS has a basis; but for this one needs the axiom of choice.`,
    meta: "Script: Ch. 4, definition of basis, examples 0.–3., remark",
    explanation: R`<b>Basis = minimal construction instructions:</b> “l.i.” means <i>no vector is superfluous</i>, “$\langle B\rangle = V$” means <i>everything can be built</i>. Equivalently (Stammbach II.2.7/2.9): a basis is a <b>maximal</b> l.i. set and a <b>minimal</b> spanning system.<br><br>
<b>Coordinates:</b> every vector has a <b>unique</b> representation with respect to a basis (Theorem 4.1) – the coefficients are its coordinates. This is how an abstract VS becomes $K^n$ (Theorem 7.3).<br><br>
<b>Example 3 is subtle:</b> in $S(K)$ a basis exists (axiom of choice), but nobody can write it down explicitly. The $e_i$ form a basis of the smaller space $c_{00}$ of “eventually zero sequences” (Exercise sheet 6, Exercise 27).`,
    example: R`<b>1.</b> $\{(1,1),(1,-1)\}$ is a basis of $\mathbb{R}^2$: $(a,b) = \tfrac{a+b}{2}(1,1)+\tfrac{a-b}{2}(1,-1)$, e.g. $(5,1) = 3(1,1)+2(1,-1)$.<br>
<b>2.</b> (Stammbach II.2.5) $\alpha = (1,1,0)$, $\beta = (1,0,1)$, $\gamma = (1,1,1)$ is a basis of $\mathbb{R}^3$: $e_1 = \alpha+\beta-\gamma$, $e_2 = \gamma-\beta$, $e_3 = \gamma-\alpha$.<br>
<b>3.</b> $\{1,\sqrt 2\}$ is a basis of $\mathbb{Q}(\sqrt 2)$ over $\mathbb{Q}$.`,
    counterexample: R`<b>1. Spanning, but not l.i.:</b> $\{(1,0),(0,1),(1,1)\}$ spans $\mathbb{R}^2$, but is l.d. – not a basis.<br>
<b>2. l.i., but does not span:</b> $\{(1,0,0),(0,1,0)\}$ in $\mathbb{R}^3$: $(0,0,1)$ is missing.<br>
<b>3. Infinite case:</b> $\{e_i\}$ in $S(K)$ (example 3): $(1,1,1,\dots)\notin\langle\{e_i\}\rangle$.`
  },
  "la4_satz_4_1": {
    title: "Theorem 4.1: Unique representation with respect to a basis",
    category: "4b Basis and dimension",
    type: "satz",
    front: R`What does <b>Theorem 4.1</b> say, and how does one prove it (Exercise 15)?`,
    back: R`<b>Theorem 4.1:</b> If $B\subseteq V$ is a basis of the VS $V$ (over a field $K$), then every vector of $V$ can be written – up to the order – in a <b>unique way</b> as a linear combination of vectors from $B$ with <b>non-vanishing coefficients</b>.<br><br>
<b>Proof (Exercise 15):</b> <i>Existence:</i> $V = \langle B\rangle$. <i>Uniqueness:</i> for $x = 0_V$ the empty LC is the only one. Let $x\neq 0_V$ and
$$x = \sum_{i=1}^n\lambda_ix_i = \sum_{j=1}^m\mu_jy_j,\qquad x_i,y_j\in B,\;\lambda_i,\mu_j\in K\setminus\{0\}.$$
Collect all vectors involved in $\{z_1,\dots,z_k\}$ and fill in missing coefficients with $0$: $x = \sum_l\alpha_lz_l = \sum_l\beta_lz_l$. Then $0_V = \sum_l(\alpha_l-\beta_l)z_l$; since the $z_l\in B$ are l.i. (Theorem 4.0), $\alpha_l = \beta_l$ for all $l$. Because all $\lambda_i,\mu_j\neq 0$, every $x_i$ also occurs as some $y_j$ and vice versa, with the same coefficient; in particular $n = m$.`,
    meta: "Script: Ch. 4, Theorem 4.1; Exercise sheet 3, Exercise 15",
    explanation: R`<b>Basis = coordinate system:</b> existence of the representation comes from “spanning”, uniqueness from “l.i.”. Together every vector gets a unique list of coordinates – the foundation for Theorem 7.3 ($V\cong K^n$), representing matrices and change of basis.<br><br>
<b>Why “non-vanishing coefficients” and “up to order”?</b> Otherwise one could add arbitrary summands $0\cdot b$ or reorder them – this does not change the vector. For a <b>finite, ordered</b> basis $\{x_1,\dots,x_n\}$ one says more simply: the coefficients $\lambda_1,\dots,\lambda_n$ (with zeros) are unique.<br><br>
The converse also holds (Stammbach II.2.3): if every vector has a unique representation, the family is a basis (unique representation of $0$ ⇒ l.i.).`,
    example: R`Basis $\{(1,1,0),(1,0,1),(1,1,1)\}$ of $\mathbb{R}^3$ (Stammbach II.4.2): $\xi = (2,4,1) = 1\cdot(1,1,0)-2\cdot(1,0,1)+3\cdot(1,1,1)$. Check: $(1-2+3,\,1+0+3,\,0-2+3) = (2,4,1)$ ✓. The coordinates $(1,-2,3)$ are unique.`,
    counterexample: R`<b>Without l.i. there is no uniqueness:</b> with the spanning system $\{(1,0),(0,1),(1,1)\}$ we have $(2,3) = 2(1,0)+3(0,1) = 1(1,0)+2(0,1)+1(1,1) = -1(1,0)+0(0,1)+3(1,1)$ – infinitely many representations.`
  },
  "la4_def_dimension": {
    title: "Definition: Dimension and finite-dimensional",
    category: "4b Basis and dimension",
    type: "definition",
    front: R`How is the <b>dimension</b> of a VS defined, and when is $V$ called <b>finite-dimensional</b>? Why is the definition meaningful?`,
    back: R`<b>Definition:</b> If $V$ is a VS over $K$ and $B\subseteq V$ is a basis of $V$, then $|B|$ is called the <b>dimension</b> of $V$, $\dim(V)$, where $|B|$ denotes the number of elements of $B$ (for infinite $B$ the cardinality).<br>
<b>Remark:</b> We will show later that the dimension is uniquely determined (Theorem 4.6).<br><br>
<b>Definition:</b> A VS $V$ is called <b>finite-dimensional</b> if $V$ has a finite basis; otherwise <b>infinite-dimensional</b>.`,
    meta: "Script: Ch. 4, definitions of dimension and finite-dimensional",
    explanation: R`The dimension counts the <b>“degrees of freedom”</b>: how many independent numbers are needed to determine a vector? A line through $0$ has dimension 1, a plane 2, $K^n$ has $n$.<br><br>
<b>Well-definedness</b> is not self-evident: different bases could a priori have different numbers of elements. Only the exchange theorem of Steinitz (4.5) shows that all bases have the same size (Theorem 4.6). Until then “$\dim(V) := |B|$” is a definition only under this proviso.<br><br>
<b>Dimension depends on the field:</b> $\dim_{\mathbb{C}}(\mathbb{C}) = 1$, $\dim_{\mathbb{R}}(\mathbb{C}) = 2$; $V = \mathbb{Q}(\sqrt 2,\sqrt 3)$ has dimension 4 over $\mathbb{Q}$ and dimension 2 over $\mathbb{Q}(\sqrt 2)$ (Exercise sheet 3, Exercise 19).`,
    example: R`$\dim(K^n) = n$; $\dim(\{0_V\}) = 0$ (basis $\emptyset$); $\dim(M_{m\times n}(K)) = m\cdot n$ (e.g. $\dim(M_{2\times 3}) = 6$); $\dim(\mathrm{Fib}) = 2$ (Exercise sheet 3, 17); polynomials of degree $\le 4$: dimension $5$ (basis $1,x,x^2,x^3,x^4$).`,
    counterexample: R`<b>Infinite-dimensional:</b> $\mathbb{Q}[X]$ (basis $\{X^i: i\in\mathbb{N}\}$), $S(K)$, $c_{00}$, the space of all functions $\mathbb{R}\to\mathbb{R}$. For $\mathbb{Q}[X]$: finitely many polynomials have a maximal degree $d$, so $X^{d+1}$ does not lie in their span – no finite basis.<br>
<b>“Number of coordinates” ≠ dimension:</b> the plane $\{(x,y,z): x-y-z = 0\}\subseteq\mathbb{R}^3$ consists of triples, but has dimension 2.`
  },
  // ========================================================================
  // 4c BASIS EXTENSION AND EXCHANGE THEOREM
  // ========================================================================
  "la4_satz_4_3": {
    title: "Theorem 4.3: Basis extension theorem",
    category: "4c Basis extension and exchange theorem",
    type: "satz",
    front: R`State and prove <b>Theorem 4.3</b>: every finite l.i. set can be extended to a basis.`,
    back: R`<b>Theorem 4.3:</b> If $V$ is a finite-dimensional VS and $M\subseteq V$ is a finite set of l.i. vectors, then $M$ can be extended to a basis of $V$, i.e. there exists a basis $B$ of $V$ with $M\subseteq B$.<br><br>
<b>Proof:</b> Let $\{x_1,\dots,x_n\}$ be a finite basis and $M = \{y_1,\dots,y_m\}$ l.i. If $\langle M\rangle = V$, we are done (for $M = \emptyset$: $M\subseteq\{x_1,\dots,x_n\}$). Otherwise consider the sequence
$$S = (y_1,\dots,y_m,x_1,\dots,x_n).$$
Since the $y_i$ are LCs of the $x_i$, $S$ is l.d. (for $m\ge 1$). By Lemma 4.2 some $z\in S$ is an LC of the preceding ones; since the $y_i$ are l.i., $z = x_i$. Delete $x_i$: $S' = (y_1,\dots,y_m,x_1,\dots,x_{i-1},x_{i+1},\dots,x_n)$ with $\langle S'\rangle = \langle S\rangle = V$. Repeat until the sequence $\tilde S$ is l.i. Then $\tilde S$ is a basis with $M\subseteq\tilde S$.`,
    meta: "Script: Ch. 4, definition finite-dimensional, Theorem 4.3 with proof",
    explanation: R`<b>Picture:</b> one puts the given vectors $y_1,\dots,y_m$ <b>at the front</b> of the list (they should stay in any case) and attaches a known basis. This list certainly spans everything, but is too long. Then one goes through it from the front and throws out every vector that can be built from its predecessors. Since the $y$’s are at the front and l.i., <b>only $x$’s get thrown out</b>.<br><br>
<b>Why does the span stay the same?</b> A deleted vector is an LC of the remaining ones – one can always “rebuild” it.<br><br>
<b>Application:</b> Lemma 5.1 (i) ($\dim(U)\le\dim(V)$), Lemma 5.6 ($\dim(V/W) = n-m$), extending bases of subspaces (Stammbach III.2.15, dimension formula).`,
    example: R`$M = \{(1,1,0)\}$ in $\mathbb{R}^3$, basis $e_1,e_2,e_3$. Sequence $((1,1,0),e_1,e_2,e_3)$: $e_1$ is not an LC of $(1,1,0)$; $e_2 = (1,1,0)-e_1$ ⇒ delete $e_2$. The rest $((1,1,0),e_1,e_3)$ is l.i. ⇒ basis $\{(1,1,0),(1,0,0),(0,0,1)\}\supseteq M$.`,
    counterexample: R`<b>1. An l.d. set cannot be extended:</b> $M = \{(1,0),(2,0)\}$ is contained in no basis (every superset remains l.d.).<br>
<b>2. Extension is not unique:</b> $\{(1,1,0)\}$ can also be extended by $\{(0,1,0),(0,0,1)\}$ – the procedure depends on the order of the $x_i$.<br>
<b>3.</b> In the infinite-dimensional case one needs the axiom of choice (e.g. extending $\{e_i^*\}$ to a basis of $c_{00}(\mathbb{F}_2)^*$, Exercise sheet 6).`
  },
  "la4_satz_4_4": {
    title: "Theorem 4.4: Every finite spanning set contains a basis",
    category: "4c Basis extension and exchange theorem",
    type: "satz",
    front: R`What does <b>Theorem 4.4</b> say, and how does it follow from the procedure of Theorem 4.3?`,
    back: R`<b>Theorem 4.4:</b> If $V$ is a finite-dimensional VS and $M\subseteq V$ is a finite set with $\langle M\rangle = V$, then <b>$M$ contains a basis</b> of $V$.<br><br>
<b>Proof:</b> Let $M = \{x_1,\dots,x_n\}$. If $x_1,\dots,x_n$ are l.i., then $M$ is a basis. Otherwise consider the sequence $(x_1,\dots,x_n)$ and proceed as in the proof of Theorem 4.3: by Lemma 4.2 one deletes a vector that is an LC of its predecessors (the span remains $V$), and repeats until the sequence is l.i.`,
    meta: "Script: Ch. 4, Theorem 4.4 with proof; Stammbach II.3.2",
    explanation: R`Theorems 4.3 and 4.4 are two sides of the same coin:<br>
• <b>4.3 (extending):</b> l.i. set $\to$ make it a basis by adding vectors.<br>
• <b>4.4 (thinning out):</b> spanning set $\to$ make it a basis by leaving vectors out.<br>
A basis always lies “between” l.i. sets and spanning sets: every l.i. set has at most $\dim(V)$ elements, every spanning set at least $\dim(V)$ (consequence of Steinitz, Stammbach II.3.6).<br><br>
<b>Practical:</b> to find a basis of $\langle\{v_1,\dots,v_k\}\rangle$, delete from left to right every vector that is an LC of the previous ones.`,
    example: R`$M = \{(1,2),(2,4),(0,1),(3,3)\}$ spans $\mathbb{R}^2$. Going through the sequence: $(1,2)$ stays; $(2,4) = 2(1,2)$ is deleted; $(0,1)$ stays; $(3,3) = 3(1,2)-3(0,1)$ is deleted. Basis $\{(1,2),(0,1)\}\subseteq M$.`,
    counterexample: R`<b>1. Not a spanning set:</b> $\{(1,2),(2,4)\}$ contains no basis of $\mathbb{R}^2$ (the span is only a line).<br>
<b>2. Infinite case:</b> $S(K)$ is spanned by itself; that this (infinite) set contains a basis follows only from the axiom of choice – one cannot give one explicitly (remark after the basis examples).`
  },
  "la4_satz_4_5": {
    title: "Theorem 4.5: Exchange theorem of Steinitz",
    category: "4c Basis extension and exchange theorem",
    type: "satz",
    front: R`State the <b>exchange theorem of Steinitz</b> (Theorem 4.5).`,
    back: R`Let $V$ be a VS and let $\{x_1,\dots,x_n\}\subseteq V$ and $\{y_1,\dots,y_m\}\subseteq V$ be two subsets with $m,n\in\mathbb{N}^+$ such that:
<ul><li><b>(i)</b> the vectors $y_1,\dots,y_m$ are <b>l.i.</b>, and</li>
<li><b>(ii)</b> $\langle\{x_1,\dots,x_n\}\rangle = V$;</li></ul>
then $\boxed{n\ge m}$, and there exists a subset $X\subseteq\{x_1,\dots,x_n\}$ with $|X| = n-m$ and
$$\langle\{y_1,\dots,y_m\}\cup X\rangle = V.$$`,
    meta: "Script: Ch. 4, Theorem 4.5 (exchange theorem of Steinitz)",
    explanation: R`<b>Core statement:</b> <i>“A l.i. set is never larger than a spanning set.”</i> And more: one can <b>exchange in</b> the $m$ independent vectors $y_j$ one at a time, each time exactly one $x_i$ leaving, without the span shrinking.<br><br>
<b>Intuition:</b> each new independent vector $y_j$ “occupies” a direction that was previously covered by some $x_i$. If there were more $y$’s than $x$’s, the $x$’s would run out before all $y$’s were accommodated – then the remaining $y$’s would be LCs of the already exchanged ones, contradicting l.i.<br><br>
<b>Consequences:</b> Theorem 4.6 (all bases have the same size), Lemma 5.1 (i), “more than $n$ vectors in an $n$-dim. space are l.d.”, “fewer than $n$ do not span”.`,
    example: R`Exercise sheet 3, Exercise 16 in $\mathbb{Q}^4$: $x_1,\dots,x_4$ standard basis, $y_1 = (1,1,1,0)$, $y_2 = (0,1,1,0)$ are l.i. ($m=2$, $n=4$). The exchange gives $X = \{x_2,x_4\}$ with $|X| = 4-2$ and $\langle\{y_1,y_2,x_2,x_4\}\rangle = \mathbb{Q}^4$.`,
    counterexample: R`<b>1. (i) violated:</b> $y_1 = (1,0)$, $y_2 = (2,0)$, $y_3 = (3,0)$ are l.d.; $m = 3\gt n = 2$ for the spanning set $\{(1,0),(0,1)\}$ – no contradiction to the theorem.<br>
<b>2. (ii) violated:</b> $\{x_1\} = \{(1,0,0)\}$ does not span $\mathbb{R}^3$; the three l.i. vectors $e_1,e_2,e_3$ are more than $n = 1$.<br>
<b>3.</b> More than $n$ vectors in an $n$-dim. space are always l.d.: $(1,2),(3,4),(5,6)$ in $\mathbb{R}^2$: $(5,6) = -1\cdot(1,2)+2\cdot(3,4)$.`
  },
  "la4_beweis_4_5": {
    title: "Proof of the exchange theorem of Steinitz",
    category: "4c Basis extension and exchange theorem",
    type: "beweis",
    front: R`Prove the <b>exchange theorem of Steinitz</b> (Theorem 4.5) using Lemma 4.2.`,
    back: R`Consider $S_m := (y_m,x_1,\dots,x_n)$. Since $\langle\{x_1,\dots,x_n\}\rangle = V$, $S_m$ is l.d. and $\langle S_m\rangle = V$.<br>
• By Lemma 4.2 some $x_i$ is an LC of $y_m,x_1,\dots,x_{i-1}$ (not $y_m$, which stands at the front).<br>
• $S_m' := (y_m,x_1,\dots,x_{i-1},x_{i+1},\dots,x_n)$: $\langle S_m'\rangle = V$, $|S_m'| = n$.<br>
• $S_{m-1} := (y_{m-1},y_m,x_1,\dots,\widehat{x_i},\dots,x_n)$ is again l.d. (because $y_{m-1}\in\langle S_m'\rangle = V$); by Lemma 4.2 one again deletes an $x$ (not $y_m$, since $y_{m-1},y_m$ are l.i.). We have $|S_{m-1}'| = n$, $\langle S_{m-1}'\rangle = V$; and so on.<br>
• Each time we attach a $y_j$ at the front, we delete an $x_i$ – until all $y_1,\dots,y_m$ are inserted. That this works shows $n\ge m$.<br>
• Result: $S_1' = (y_1,\dots,y_m,x_{i_1},\dots,x_{i_k})$ with $\langle S_1'\rangle = V$, $|S_1'| = n$. So $m+k = n$; with $X := \{x_{i_1},\dots,x_{i_k}\}$: $|X| = n-m$, $\langle\{y_1,\dots,y_m\}\cup X\rangle = V$.`,
    meta: "Script: Ch. 4, proof of Theorem 4.5",
    explanation: R`<b>Invariant of the procedure:</b> after each step the sequence has exactly <b>$n$ vectors</b> and spans $V$. A $y$ comes in, an $x$ goes out.<br><br>
<b>Why is always an $x$ deleted, never a $y$?</b> Lemma 4.2 provides the <b>first</b> vector that is an LC of its predecessors. The $y$’s all stand at the front and are l.i. among themselves – none of them is an LC of its predecessors. So the vector found is an $x$.<br><br>
<b>Why $n\ge m$?</b> If the $x$’s ran out before all $y$’s were inserted, the sequence would consist only of $y$’s spanning $V$ – the next $y_j$ would then be an LC of the already inserted $y$’s, contradicting (i). (Stammbach proves the same by induction, Lemma II.3.8.)`,
    example: R`$V = \mathbb{R}^2$, $x_1 = (1,0)$, $x_2 = (0,1)$, $y_1 = (1,1)$, $y_2 = (1,-1)$.<br>
$S_2 = ((1,-1),(1,0),(0,1))$: $(0,1) = (1,0)-(1,-1)$ ⇒ delete $x_2$: $S_2' = ((1,-1),(1,0))$.<br>
$S_1 = ((1,1),(1,-1),(1,0))$: $(1,0) = \tfrac12(1,1)+\tfrac12(1,-1)$ ⇒ delete $x_1$: $S_1' = ((1,1),(1,-1))$, $X = \emptyset$, $|X| = 2-2 = 0$ ✓.`,
    counterexample: R`<b>Wrong order of checking:</b> if in $S_2 = ((1,-1),(1,0),(0,1))$ one deleted some arbitrary vector instead of the <i>first</i> dependent one, say $(1,-1)$ itself (indeed $(1,-1) = (1,0)-(0,1)$), then $y_2$ would be lost – exactly what the phrase “preceding” in Lemma 4.2 prevents.`
  },
  "la4_satz_4_6": {
    title: "Theorem 4.6: All bases have the same number of elements",
    category: "4c Basis extension and exchange theorem",
    type: "satz",
    front: R`What does <b>Theorem 4.6</b> say, how does it follow from Steinitz, and what holds in the infinite-dimensional case?`,
    back: R`<b>Theorem 4.6:</b> If $V$ is a finite-dimensional VS and $B_1$ and $B_2$ are bases of $V$, then $|B_1| = |B_2|$.<br><br>
<b>Proof:</b> Bases satisfy both (i) (l.i.) and (ii) (spanning) of Theorem 4.5. Applying Steinitz with $B_2$ as the l.i. set and $B_1$ as the spanning set gives $|B_1|\ge|B_2|$; conversely $|B_2|\ge|B_1|$. Hence $|B_1| = |B_2|$.<br><br>
<b>Remark:</b> Theorem 4.6 also holds for infinite-dimensional VS; then $|B|$ denotes the cardinality, and $|B_1| = |B_2|$ means that there is a bijection between $B_1$ and $B_2$.`,
    meta: "Script: Ch. 4, Theorem 4.6 with proof and remark",
    explanation: R`With this the <b>dimension is well-defined</b> – it does not depend on the chosen basis. This is one of the most important invariants of linear algebra: two finite-dimensional VS over $K$ are isomorphic if and only if they have the same dimension (Theorem 7.3, Stammbach II.4.13).<br><br>
<b>Useful consequences</b> (Stammbach II.3.6) in an $n$-dimensional space:<br>
• fewer than $n$ vectors never span;<br>
• more than $n$ vectors are always l.d.;<br>
• $n$ l.i. vectors already form a basis;<br>
• $n$ spanning vectors already form a basis.<br>
The last two save work: one only has to check <i>one</i> of the two basis conditions when the count is right.`,
    example: R`$\mathrm{Fib}$: the bases $B_1 = \{F_{1,0},F_{0,1}\}$, $B_2 = \{F_{1,1},F_{2,1}\}$, $B_3 = \{F_{1,\varphi},F_{1,\psi}\}$ all have 2 elements ⇒ $\dim(\mathrm{Fib}) = 2$ (Exercise sheet 3, Exercise 17).<br>
$\mathbb{R}^2$: $\{(1,0),(0,1)\}$ and $\{(1,1),(1,-1)\}$ – both 2 elements.`,
    counterexample: R`<b>1. Minimal spanning vs. any spanning set:</b> $\{(1,0),(0,1),(1,1)\}$ has 3 elements and spans $\mathbb{R}^2$ – but it is not a basis; Theorem 4.6 concerns only bases.<br>
<b>2. Other fields, other number:</b> $\{1\}$ is a basis of $\mathbb{C}$ over $\mathbb{C}$, $\{1,i\}$ a basis of $\mathbb{C}$ over $\mathbb{R}$ – no contradiction, these are different vector spaces.`
  },
  // ========================================================================
  // SERIES 3
  // ========================================================================
  "la4_s3_a16_steinitz": {
    title: "Exercise sheet 3, Exercise 16: Steinitz concretely in ℚ⁴",
    category: "4c Basis extension and exchange theorem",
    type: "aufgabe",
    front: R`In $V = \mathbb{Q}^4$ let $\{x_1,x_2,x_3,x_4\}$ be the standard basis, $y_1 = (1,1,1,0)$, $y_2 = (0,1,1,0)$. Use the <b>exchange theorem of Steinitz</b> to replace two of the $x_i$ by $y_1,y_2$. (Start: $S_2 = (y_2,x_1,x_2,x_3,x_4)$.)`,
    back: R`<b>1st step:</b> $S_2 = (y_2,x_1,x_2,x_3,x_4)$. $\{y_2,x_1\}$ is l.i., $\{y_2,x_1,x_2\}$ is l.i., but $\{y_2,x_1,x_2,x_3\}$ is l.d., because
$$x_3 = y_2-x_2\quad\big((0,0,1,0) = (0,1,1,0)-(0,1,0,0)\big).$$
Delete $x_3$: $S_2' = (y_2,x_1,x_2,x_4)$, $\langle S_2'\rangle = V$.<br>
<b>2nd step:</b> $S_1 = (y_1,y_2,x_1,x_2,x_4)$. Already $\{y_1,y_2,x_1\}$ is l.d., because
$$x_1 = y_1-y_2\quad\big((1,0,0,0) = (1,1,1,0)-(0,1,1,0)\big).$$
Delete $x_1$: $S_1' = (y_1,y_2,x_2,x_4)$.<br>
<b>Result:</b> $\{y_1,y_2,x_2,x_4\}$ is a basis of $\mathbb{Q}^4$.`,
    meta: "Exercise sheet 3, Exercise 16 (model solution; there a typo “x₃ = y₂ − x₃”, correct: x₃ = y₂ − x₂)",
    explanation: R`<b>Procedure as in the proof:</b> attach the $y$’s one at a time at the front; each time find the <b>first</b> vector that is an LC of its predecessors, and delete it. The span always remains all of $\mathbb{Q}^4$.<br><br>
<b>Check that the result is a basis:</b> 4 vectors in the 4-dimensional space that span $\mathbb{Q}^4$ are automatically a basis by Theorem 4.6. Explicitly: $x_1 = y_1-y_2$, $x_3 = y_2-x_2$ – so all standard basis vectors lie in the span.<br><br>
<b>Remark on the model solution:</b> there it says “$x_3 = y_2-x_3$” – a typo; the correct version is $x_3 = y_2-x_2$.`,
    example: R`Coordinates of a vector in the new basis: $(a,b,c,d) = a\cdot x_1+b\cdot x_2+c\cdot x_3+d\cdot x_4 = a(y_1-y_2)+bx_2+c(y_2-x_2)+dx_4 = a\,y_1+(c-a)\,y_2+(b-c)\,x_2+d\,x_4$. E.g. $(2,5,3,1) = 2y_1+1\cdot y_2+2x_2+x_4$; check: $(2,2,2,0)+(0,1,1,0)+(0,2,0,0)+(0,0,0,1) = (2,5,3,1)$ ✓.`,
    counterexample: R`<b>Wrong choice:</b> $\{y_1,y_2,x_2,x_3\}$ is <b>not</b> a basis: all four vectors have $0$ as 4th coordinate, so $x_4$ is missing. One must not delete arbitrary two $x_i$ – only those the procedure yields (or those one has otherwise shown to be superfluous).`
  },
  "la4_s3_a17_fib": {
    title: "Exercise sheet 3, Exercise 17: Three bases of Fib and Binet’s formula",
    category: "4b Basis and dimension",
    type: "aufgabe",
    front: R`Find three different bases of the vector space $\mathrm{Fib}$. Why does Fib have dimension 2, and how does the <b>formula of Binet</b> follow?`,
    back: R`<b>Auxiliary fact:</b> For $a,b\in\mathbb{R}$ there is exactly one sequence $F_{a,b}\in\mathrm{Fib}$ with $f_0 = a$, $f_1 = b$: $F_{a,b} = (a,b,a+b,a+2b,2a+3b,\dots)$ (existence recursively, uniqueness by induction).<br>
<b>Corollary:</b> If $(a,b),(c,d)$ are l.i. in $\mathbb{R}^2$, then $\{F_{a,b},F_{c,d}\}$ is a basis of Fib.<br><br>
<b>Three bases:</b> $B_1 = \{F_{1,0},F_{0,1}\}$, $\;B_2 = \{F_{1,1},F_{2,1}\}$, $\;B_3 = \{F_{1,\varphi},F_{1,\psi}\}$ with
$$\varphi = \tfrac{1+\sqrt 5}{2},\quad\psi = \tfrac{1-\sqrt 5}{2}\quad(\text{solutions of }t^2 = t+1),\qquad F_{1,t} = (1,t,t^2,t^3,\dots).$$
<b>Binet:</b> $F_{0,1} = \tfrac{1}{\sqrt 5}F_{1,\varphi}-\tfrac{1}{\sqrt 5}F_{1,\psi}$, termwise:
$$f_n = \frac{1}{\sqrt 5}\Big(\Big(\tfrac{1+\sqrt 5}{2}\Big)^n-\Big(\tfrac{1-\sqrt 5}{2}\Big)^n\Big).$$`,
    meta: "Exercise sheet 3, Exercise 17; cf. Exercise sheet 6, Exercise 29 (eigenvectors of M_Fib)",
    explanation: R`<b>Why dimension 2?</b> A Fibonacci sequence is uniquely determined by its <b>two initial values</b> – the map $\mathrm{Fib}\to\mathbb{R}^2$, $(f_n)\mapsto(f_0,f_1)$ is an isomorphism. With respect to $B_1$ the coordinates are exactly the initial values: $f = f_0F_{1,0}+f_1F_{0,1}$.<br><br>
<b>Why is $B_3$ so useful?</b> The sequences $(1,t,t^2,\dots)$ are <b>geometric</b> – one can write down their $n$-th term immediately. They lie in Fib exactly when $t^{i+2} = t^{i+1}+t^i$, i.e. $t^2 = t+1$. In this basis the recurrence becomes “diagonal” (Exercise sheet 6, Exercise 29: eigenvectors of $M_{\mathrm{Fib}}$). Every Fibonacci sequence splits into two geometric sequences – this is how Binet arises.<br><br>
<b>Thinking in change of basis</b> (Ch. 8): the same sequence has coordinates $(0,1)$ in $B_1$, and $(\tfrac1{\sqrt 5},-\tfrac1{\sqrt 5})$ in $B_3$.`,
    example: R`$B_2$: $F_{1,1} = (1,1,2,3,5,8,\dots)$, $F_{2,1} = (2,1,3,4,7,11,\dots)$ (Lucas-like). Since $(1,1),(2,1)$ are l.i., $B_2$ is a basis. Coordinates of $F_{0,1}$ with respect to $B_2$: ansatz $\lambda(1,1)+\mu(2,1) = (0,1)$ ⇒ $\lambda+2\mu = 0$, $\lambda+\mu = 1$ ⇒ $\mu = -1$, $\lambda = 2$: $F_{0,1} = 2F_{1,1}-F_{2,1} = (0,1,1,2,3,5,\dots)$ ✓.<br>
Binet for $n=5$: $\varphi^5\approx 11.0902$, $\psi^5\approx -0.0902$, $\tfrac{11.1803}{2.2361} = 5 = f_5$ ✓.`,
    counterexample: R`<b>1.</b> $\{F_{1,2},F_{2,4}\}$ is <b>not</b> a basis: $(1,2),(2,4)$ are l.d., and $F_{2,4} = 2F_{1,2}$.<br>
<b>2.</b> $\{F_{1,0}\}$ alone does not span: $F_{0,1}$ is not a multiple of it ($f_0 = 0$ would force $\lambda = 0$).<br>
<b>3.</b> $(1,2,4,8,\dots) = F_{1,2}$? No – $F_{1,2} = (1,2,3,5,\dots)$; the geometric sequence with $t = 2$ does <b>not</b> lie in Fib, since $4\neq 2+1$.`
  },
  "la4_s3_a18_qx_basis": {
    title: "Exercise sheet 3, Exercise 18: An unusual basis of ℚ[X]",
    category: "4b Basis and dimension",
    type: "aufgabe",
    front: R`Let $x_n := 1+(n+1)\sum_{i=1}^nX^i$ in $\mathbb{Q}[X]$, so $x_0 = 1$, $x_1 = 1+2X$, $x_2 = 1+3X+3X^2$, … Show: (a) $\{x_n: n\in\mathbb{N}\}$ is l.i.; (b) $\langle\{x_n\}\rangle = \mathbb{Q}[X]$.`,
    back: R`<b>(a)</b> $x_{n+1}$ has degree $n+1$, all of $x_0,\dots,x_n$ have degree $\le n$; so $x_{n+1}\notin\langle\{x_i: 0\le i\le n\}\rangle$. With <b>Lemma 4.2</b>, $x_0,\dots,x_n$ are l.i. for every $n$, so the whole set is l.i. (linear independence is a property of finite subsets).<br>
<b>(b)</b> Since $\{X^i\}$ is a basis, it suffices that $X^k\in\langle\{x_0,\dots,x_k\}\rangle$ for all $k$. <b>Induction:</b> $X^0 = x_0$. If $X^k = \sum_{i=0}^k\lambda_i^kx_i$ for all $k\le n$, then
$$(n+2)X^{n+1} = x_{n+1}-1-(n+2)\big(X+X^2+\dots+X^n\big),$$
and on the right only vectors from $\langle\{x_0,\dots,x_{n+1}\}\rangle$ occur. Hence also $X^{n+1}$.`,
    meta: "Exercise sheet 3, Exercise 18",
    explanation: R`<b>Degree argument</b> = Lemma 4.2 in action: in a list where every vector has a <b>new highest degree</b>, no vector can be an LC of its predecessors (the predecessors do not reach this degree). That is the “staircase form” – it guarantees linear independence.<br><br>
<b>Spanning by induction:</b> one “peels off” the highest term: $x_{n+1}$ contains $(n+2)X^{n+1}$ plus terms of lower degree, and those are constructible by the induction hypothesis. Since $n+2\neq 0$ in $\mathbb{Q}$, one can divide by $n+2$.<br><br>
The same argument shows in general: every sequence of polynomials $p_0,p_1,\dots$ with $\deg p_n = n$ is a basis of $K[X]$ (e.g. $1, X-c, (X-c)^2,\dots$ – the Taylor basis, Stammbach II.8.2.2).`,
    example: R`$X = \tfrac12(x_1-x_0)$. For $X^2$: $x_2 = 1+3X+3X^2$ ⇒ $X^2 = \tfrac13(x_2-x_0-3X) = \tfrac13x_2-\tfrac12x_1+\tfrac16x_0$.<br>
Check: $\tfrac13(1+3X+3X^2)-\tfrac12(1+2X)+\tfrac16 = (\tfrac13-\tfrac12+\tfrac16)+(X-X)+X^2 = X^2$ ✓.`,
    counterexample: R`<b>Same degree ⇒ argument fails:</b> $p_0 = 1+X$, $p_1 = 2+2X$ both have degree 1 and are l.d. ($p_1 = 2p_0$).<br>
<b>Missing degree ⇒ does not span:</b> $\{1,X^2,X^3,X^4,\dots\}$ is l.i., but $X\notin$ the span (every LC has coefficient $0$ at $X$).<br>
<b>Characteristic:</b> over $\mathbb{F}_2$, $x_1 = 1+2X = 1 = x_0$ – the construction collapses, because one cannot divide by $2 = 0$.`
  },
  "la4_s3_a19_koerperwahl": {
    title: "Exercise sheet 3, Exercise 19: The basis depends on the base field",
    category: "4b Basis and dimension",
    type: "aufgabe",
    front: R`$V = \{q_0+q_1\sqrt 2+q_2\sqrt 3+q_3\sqrt 6: q_i\in\mathbb{Q}\}$ is considered as a VS over $K_0 = \mathbb{Q}$, $K_1 = \mathbb{Q}(\sqrt 2)$, $K_2 = \mathbb{Q}(\sqrt 3)$, $K_3 = \mathbb{Q}(\sqrt 6)$ ($V_i$ over $K_i$). Give bases and explain why e.g. $\{1,\sqrt 3\}$ is a basis of $V_1$, but not of $V_2$.`,
    back: R`<b>Solutions:</b> (a) $B_0 = \{1,\sqrt 2,\sqrt 3,\sqrt 6\}$ for $V_0$; (b) $B_1 = \{1,\sqrt 3\}$ for $V_1$; (c) $B_3 = \{\sqrt 2,\sqrt 6\}$ for $V_3$; (d) $B_{2,3} = \{\sqrt 2,\sqrt 3\}$ is a basis of $V_1$ and $V_2$, but not of $V_3$.<br><br>
<b>Key (auxiliary fact 2):</b> $q_0+q_1\sqrt 2+q_2\sqrt 3+q_3\sqrt 6 = 0$ with $q_i\in\mathbb{Q}$ ⇒ all $q_i = 0$ (proof idea: $\sqrt 3\notin\mathbb{Q}(\sqrt 2)$, by squaring).<br>
<b>$B_1$ over $K_1$:</b> $(a+b\sqrt 2)\cdot 1+(c+d\sqrt 2)\cdot\sqrt 3 = a+b\sqrt 2+c\sqrt 3+d\sqrt 6$ – spans everything, and $=0$ only for $a=b=c=d=0$.<br>
<b>$B_1$ not over $K_2$:</b> $\sqrt 3\in K_2$ is a <b>scalar</b>, so $\sqrt 3 = \sqrt 3\cdot 1$ – l.d.<br>
<b>$B_{2,3}$ not over $K_3$:</b> $\tfrac12\sqrt 6\in K_3$ and $\tfrac12\sqrt 6\cdot\sqrt 2 = \sqrt 3$ – l.d.`,
    meta: "Exercise sheet 3, Exercise 19",
    explanation: R`<b>Lesson:</b> “linearly independent” and “basis” are <b>not properties of sets alone</b>, but depend on <b>which scalars are allowed</b>. The bigger the field, the more one can “bridge with a factor”, and the smaller the dimension: $\dim_{\mathbb{Q}}(V) = 4$, $\dim_{K_i}(V) = 2$ for $i = 1,2,3$.<br><br>
<b>Rule of thumb:</b> two vectors $u,v\neq 0$ are l.d. over $K$ exactly when the quotient $\tfrac vu$ lies in $K$. $\tfrac{\sqrt 3}{1} = \sqrt 3$ lies in $K_2$, not in $K_1$; $\tfrac{\sqrt 3}{\sqrt 2} = \tfrac{\sqrt 6}{2}$ lies in $K_3$, but neither in $K_1$ nor in $K_2$.<br><br>
<b>Degree formula (outlook):</b> $4 = [V:\mathbb{Q}] = [V:K_1]\cdot[K_1:\mathbb{Q}] = 2\cdot 2$.`,
    example: R`Coordinates of $v = 5+\sqrt 2-3\sqrt 3+4\sqrt 6$:<br>
with respect to $B_0$: $(5,1,-3,4)$;<br>
with respect to $B_1$ over $K_1$: $v = (5+\sqrt 2)\cdot 1+(-3+4\sqrt 2)\cdot\sqrt 3$ – two coordinates from $K_1$.<br>
with respect to $B_{2,3}$ over $K_1$: $v = (1+\tfrac52\sqrt 2)\sqrt 2+(-3+4\sqrt 2)\sqrt 3$; check: $\sqrt 2+5-3\sqrt 3+4\sqrt 6$ ✓.`,
    counterexample: R`<b>$B_0$ over $K_1$:</b> $\{1,\sqrt 2,\sqrt 3,\sqrt 6\}$ is l.d. over $\mathbb{Q}(\sqrt 2)$: $\sqrt 2 = \sqrt 2\cdot 1$ and $\sqrt 6 = \sqrt 2\cdot\sqrt 3$.<br>
<b>$\{1,\sqrt 6\}$ over $K_3$:</b> $\sqrt 6 = \sqrt 6\cdot 1$ – l.d.; and $\{1\}$ alone does not span $V_3$ ($\sqrt 2\notin\mathbb{Q}(\sqrt 6)$).`
  }
};
})();
