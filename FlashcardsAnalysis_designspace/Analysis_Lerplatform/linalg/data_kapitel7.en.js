/* ==========================================================================
   LINEAR ALGEBRA I – CHAPTER 7 (English): The vector space Hom(V, W)  (Part III)
   (Representing matrices, matrix multiplication, Theorems 7.1–7.6, Corollary 7.5)
   + Exercise sheets 6 (Ex. 29), 7 (Ex. 30–32), 8 (Ex. 33–35)
   Linear Algebra I – Prof. Dr. Lorenz Halbeisen, HS 2026
   English translation of data_kapitel7.js. Formulas, HTML and ids are identical.
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_EN_KAPITEL_7 = {
  // ========================================================================
  // 7a HOM(V,W) AND REPRESENTING MATRICES
  // ========================================================================
  "la7_def_hom": {
    title: "Definition: Vector space homomorphism and Hom(V, W)",
    category: "7a Hom(V,W) and representing matrices",
    type: "definition",
    front: R`What is a <b>vector space homomorphism</b>, and what does $\mathrm{Hom}(V,W)$ denote? How is $V^*$ related to it?`,
    back: R`Let $V$ and $W$ be two VS over the <b>same</b> field $K$. A linear map $\varphi: V\to W$ (i.e. a linear function $V\to W$) is called a <b>vector space homomorphism</b> (homos = similar), and
$$\mathrm{Hom}(V,W)$$
denotes the set of all vector space homomorphisms $V\to W$.<br><br>
<b>Remark:</b> $V^* = \mathrm{Hom}(V,K)$, where $K$ is the VS over $K$.<br>
<b>Notation:</b> The elements of $\mathrm{Hom}(V,W)$ are often denoted by $\varphi,\psi$, etc.`,
    meta: "Script: Ch. 7 (Part III Linear maps), definition, remark, notation",
    explanation: R`“Homomorphism” = <b>structure-preserving</b> map. For vector spaces the structure is “add and scale”, and linear maps preserve exactly that.<br><br>
<b>From here on the main topic is:</b> not single vector spaces any more, but <b>maps between them</b>. The big questions: How does one describe linear maps concretely (matrices)? How do they behave when composed (matrix product)? What changes under a change of basis (Ch. 8)? What is sent to $0$, what is hit (kernel, image, Ch. 10)?<br><br>
<b>Important special cases:</b> $\mathrm{Hom}(V,K) = V^*$ (functionals), $\mathrm{Hom}(V,V)$ (self-maps, e.g. $\varphi^n$ in Exercise sheet 8, Exercise 35), $\mathrm{Hom}(K^n,K^m)\cong M_{m\times n}(K)$.`,
    example: R`<b>1.</b> $\varphi:\mathbb{R}^3\to\mathbb{R}^2$, $\varphi(x,y,z) = (x+y,y-z)$; e.g. $\varphi(1,2,3) = (3,-1)$.<br>
<b>2.</b> Derivative $V\to W$ of polynomials of degree $\le 3$ to degree $\le 2$: $1+x+2x^2\mapsto 1+4x$ (Ch. 9, example).<br>
<b>3.</b> Identity $\iota: V\to V$, $x\mapsto x$; zero map $x\mapsto 0_W$.`,
    counterexample: R`<b>1. Different fields:</b> $\mathbb{C}\to\mathbb{C}$, $z\mapsto\bar z$ is $\mathbb{R}$-linear, but not a homomorphism of $\mathbb{C}$-vector spaces: $\overline{i\cdot 1} = -i\neq i\cdot\bar 1$.<br>
<b>2. Not linear:</b> translation $x\mapsto x+(1,0)$ in $\mathbb{R}^2$ ($0\mapsto(1,0)$).<br>
<b>3.</b> Rotation about a point $\neq 0$ is not linear (the origin moves).`
  },
  "la7_satz_7_1": {
    title: "Theorem 7.1: Hom(V, W) is a vector space",
    category: "7a Hom(V,W) and representing matrices",
    type: "satz",
    front: R`State <b>Theorem 7.1</b>: with which operations does $\mathrm{Hom}(V,W)$ become a vector space?`,
    back: R`Let $V$ and $W$ be two VS over $K$. Then the set $\mathrm{Hom}(V,W)$ with
$$(\varphi+_{\mathrm{Hom}}\psi)(x) := \varphi(x)+_W\psi(x)\qquad(x\in V)$$
is a VS over $K$, where the scalar multiplication is defined by
$$(\lambda\cdot_{\mathrm{Hom}}\varphi)(x) := \lambda\cdot\varphi(x)\quad[\text{scalar mult. of the VS }W\text{ over }K].$$
<b>Proof:</b> Essentially the proof of Theorem 6.1 [actually somewhat simpler, because one can distinguish the VS $W$ from the field $K$ better; in Theorem 6.1 we had $W = K$]: $\varphi+\psi$ and $\lambda\varphi$ are again linear, the zero map is neutral, $-\varphi$ is the inverse, the axioms hold pointwise from $W$.`,
    meta: "Script: Ch. 7, Theorem 7.1",
    explanation: R`Linear maps are added and scaled <b>pointwise</b> – like functions. The content of the theorem: sums and multiples of linear maps are linear again, e.g.
$$(\varphi+\psi)(x+y) = \varphi(x)+\varphi(y)+\psi(x)+\psi(y) = (\varphi+\psi)(x)+(\varphi+\psi)(y).$$
<b>Meaning:</b> Maps are themselves vectors. With bases in $V$ and $W$, the assignment $\varphi\mapsto A_\varphi$ is an <b>isomorphism</b> $\mathrm{Hom}(V,W)\to M_{m\times n}(K)$ (Exercise sheet 7, Exercise 30 + Theorem 7.6): matrix addition is addition of maps.<br><br>
<b>In addition</b> there is the composition $\circ$ on $\mathrm{Hom}(V,V)$ (Theorem 7.2) – which makes $\mathrm{Hom}(V,V)$ even a ring (cf. $M_{n\times n}(K)$, Exercise sheet 7, Exercise 32).`,
    example: R`$\varphi,\psi:\mathbb{R}^2\to\mathbb{R}^2$, $\varphi(a,b) = (a,0)$ (projection), $\psi(a,b) = (b,a)$ (reflection): $(\varphi+2\psi)(a,b) = (a+2b,2a)$; e.g. $(\varphi+2\psi)(1,3) = (7,2) = (1,0)+2\cdot(3,1)$ ✓.`,
    counterexample: R`<b>Not closed, e.g. for isomorphisms:</b> $\iota$ and $-\iota$ are bijective, but $\iota+(-\iota) = 0$ is not – the bijective linear maps do <b>not</b> form a subspace of $\mathrm{Hom}(V,V)$.<br>
<b>Different target spaces:</b> $\varphi\in\mathrm{Hom}(\mathbb{R}^2,\mathbb{R}^2)$ and $\psi\in\mathrm{Hom}(\mathbb{R}^2,\mathbb{R}^3)$ cannot be added.`
  },
  "la7_def_darstellungsmatrix": {
    title: "Representing matrix A_φ of a linear map",
    category: "7a Hom(V,W) and representing matrices",
    type: "definition",
    front: R`How does one assign to $\varphi\in\mathrm{Hom}(V,W)$ an $(m\times n)$ matrix $A_\varphi$ with respect to bases $\mathcal{B}_V = \{x_1,\dots,x_n\}$, $\mathcal{B}_W = \{y_1,\dots,y_m\}$? What is in the $j$-th column?`,
    back: R`• Since $\varphi$ is linear, it suffices to know $\varphi(x_1),\dots,\varphi(x_n)$ ($=: w_1,\dots,w_n$): for $x = \sum_{j=1}^n\lambda_jx_j$ we have $\varphi(x) = \sum_{j=1}^n\lambda_j\cdot w_j$.<br>
• Since $\mathcal{B}_W$ is a basis, each $w_j$ is uniquely $w_j = \sum_{i=1}^m\mu_i^j\cdot y_i$ with $\mu_i^j\in K$.<br>
• Writing the coefficients of $w_j$ as a column gives the $(m\times n)$ matrix
$$A_\varphi := \begin{pmatrix}\mu_1^1&\cdots&\mu_1^n\\\mu_2^1&&\mu_2^n\\\vdots&\ddots&\vdots\\\mu_m^1&\cdots&\mu_m^n\end{pmatrix} = \begin{pmatrix}|&|&&|\\w_1&w_2&\cdots&w_n\\|&|&&|\end{pmatrix}.$$
<b>Remember:</b> the <b>$j$-th column</b> of $A_\varphi$ contains the coordinates of $\varphi(x_j)$ with respect to $\mathcal{B}_W$ ($m$ rows, $n$ columns).`,
    meta: "Script: Ch. 7, matrices of linear maps φ ∈ Hom(V,W)",
    explanation: R`<b>Rule of thumb:</b> “<b>The columns are the images of the basis vectors.</b>” More information is not needed, because a linear map is determined by its values on a basis (cf. Theorem 6.0 for functionals).<br><br>
<b>Index convention</b> (as for $M_{m\times n}(K)$): upper index $j$ = column = “which basis vector $x_j$ of $V$”, lower index $i$ = row = “which coordinate with respect to $y_i$”. Later written briefly as $A_\varphi = (\mu_i^j)_m^n$.<br><br>
<b>The matrix depends on both bases!</b> The same map can have very different matrices (Mathematica example: once “full”, once diagonal). Chapter 8 describes how it changes under a change of basis. With Exercise sheet 8, Exercise 33: $\mu_i^j = y_i^*(\varphi(x_j))$.`,
    example: R`(Stammbach III.3.5) $\varphi(x_1,x_2,x_3) = (x_1+x_2,x_2-x_3)$. Standard bases: $\varphi(e_1) = (1,0)$, $\varphi(e_2) = (1,1)$, $\varphi(e_3) = (0,-1)$ ⇒ $A_\varphi = \begin{pmatrix}1&1&0\\0&1&-1\end{pmatrix}$.<br>
With $\mathcal{B}_V = \{(1,1,0),(0,1,1),(1,1,1)\}$: $\varphi(1,1,0) = (2,1)$, $\varphi(0,1,1) = (1,0)$, $\varphi(1,1,1) = (2,0)$ ⇒ $A_\varphi = \begin{pmatrix}2&1&2\\1&0&0\end{pmatrix}$.`,
    counterexample: R`<b>Rows instead of columns:</b> If one writes the images $(1,0),(1,1),(0,-1)$ as <b>rows</b>, one gets $\begin{pmatrix}1&0\\1&1\\0&-1\end{pmatrix}$ – this is $(A_\varphi)^t$ (the matrix of the dual map, Ch. 9), not $A_\varphi$.<br>
<b>No basis, no matrix:</b> for $\varphi: \mathbb{Q}[X]\to\mathbb{Q}[X]$, $p\mapsto p'$ there is no finite matrix (infinite-dimensional).`
  },
  "la7_matrix_mal_vektor": {
    title: "Matrix times vector: A_φ · (λ_j) = coordinates of φ(x)",
    category: "7a Hom(V,W) and representing matrices",
    type: "proposition",
    front: R`How is the product of an $(m\times n)$ matrix with an $(n\times 1)$ matrix defined, and why does $A_\varphi\cdot x = \varphi(x)$ hold (in coordinates)? Compute the script example $\begin{pmatrix}2&-1&0\\1&2&3\end{pmatrix}\cdot\begin{pmatrix}1\\1\\2\end{pmatrix}$.`,
    back: R`<b>Definition:</b> For $A = (\mu_i^j)$ ($m\times n$) and $v = \begin{pmatrix}\lambda_1\\\vdots\\\lambda_n\end{pmatrix}$,
$$A\cdot v := \begin{pmatrix}\lambda_1\mu_1^1+\lambda_2\mu_1^2+\dots+\lambda_n\mu_1^n\\\vdots\\\lambda_1\mu_m^1+\lambda_2\mu_m^2+\dots+\lambda_n\mu_m^n\end{pmatrix} = \lambda_1\cdot\begin{pmatrix}|\\w_1\\|\end{pmatrix}+\dots+\lambda_n\cdot\begin{pmatrix}|\\w_n\\|\end{pmatrix}.$$
The $\ell$-th component is $\alpha_\ell = (\mu_\ell^1,\dots,\mu_\ell^n)\cdot\begin{pmatrix}\lambda_1\\\vdots\\\lambda_n\end{pmatrix}$ (row $\ell$ times column).<br>
<b>Reason:</b> $\varphi(x) = \sum_j\lambda_jw_j = \sum_j\lambda_j\sum_i\mu_i^jy_i = \sum_i\alpha_iy_i$. So $A_\varphi\cdot(\lambda_j) = (\alpha_i)$, in short $A_\varphi\cdot x = \varphi(x)$.<br><br>
<b>Example (script):</b> $\begin{pmatrix}2&-1&0\\1&2&3\end{pmatrix}\cdot\begin{pmatrix}1\\1\\2\end{pmatrix} = 1\cdot\begin{pmatrix}2\\1\end{pmatrix}+1\cdot\begin{pmatrix}-1\\2\end{pmatrix}+2\cdot\begin{pmatrix}0\\3\end{pmatrix} = \begin{pmatrix}1\\9\end{pmatrix}$.`,
    meta: "Script: Ch. 7, multiplication of an (m×n) matrix with an (n×1) matrix, example; summary",
    explanation: R`<b>Two readings</b> of the same product:<br>
• <b>Column view:</b> $A\cdot v$ is the <b>linear combination of the columns</b> of $A$ with weights $\lambda_j$ – exactly “$\varphi(x) = \sum\lambda_j\varphi(x_j)$”.<br>
• <b>Row view:</b> each component is “row times column” – each row is a functional (Theorem 6.0), namely $y_i^*\circ\varphi$.<br><br>
<b>Format rule:</b> $(m\times n)\cdot(n\times 1)\leadsto(m\times 1)$ – the “inner” numbers must agree.<br><br>
<b>Summary of the script:</b> We started from $\varphi\in\mathrm{Hom}(V,W)$ and, with respect to two bases, established a connection between $\varphi(x)$ and $A_\varphi\cdot(\lambda_j)$. One could also have defined the multiplication abstractly and shown the connection later – but this way it is <b>motivated</b>.`,
    example: R`<b>Mathematica example:</b> $A_\varphi = \begin{pmatrix}1&1&-1\\2&0&-2\\1&-1&-1\end{pmatrix}$, $\varphi(e_1+2e_2-3e_3)$: $A_\varphi\cdot\begin{pmatrix}1\\2\\-3\end{pmatrix} = \begin{pmatrix}1+2+3\\2+0+6\\1-2+3\end{pmatrix} = \begin{pmatrix}6\\8\\2\end{pmatrix}$, so $6e_1+8e_2+2e_3$.`,
    counterexample: R`<b>Format does not fit:</b> $\begin{pmatrix}2&-1&0\\1&2&3\end{pmatrix}\cdot\begin{pmatrix}1\\2\end{pmatrix}$ is <b>not defined</b> ($3\neq 2$).<br>
<b>Wrong reading direction:</b> If one computes “column times vector”, e.g. first column $(2,1)$ times the vector, nonsense results. Correct: row 1 $(2,-1,0)\cdot(1,1,2)^t = 2-1+0 = 1$.`
  },
  "la7_bsp_wurzeln": {
    title: "Example: A map between root spaces – matrix and kernel",
    category: "7a Hom(V,W) and representing matrices",
    type: "beispiel",
    front: R`$V = \{q_0+q_1\sqrt 2+q_2\sqrt 3\}$, $W = \{p_1\sqrt 5+p_2\sqrt 7\}$ over $\mathbb{Q}$, $\mathcal{B}_V = \{1,\sqrt 2,\sqrt 3\}$, $\mathcal{B}_W = \{\sqrt 5,\sqrt 5+\sqrt 7\}$, and $\varphi(1) = \sqrt 5+\sqrt 7$, $\varphi(\sqrt 2) = 3\sqrt 5+2\sqrt 7$, $\varphi(\sqrt 3) = 2\sqrt 5+\sqrt 7$. Determine $A_\varphi$ and $\varphi(1-\sqrt 2+\sqrt 3)$.`,
    back: R`With $y_1 = \sqrt 5$, $y_2 = \sqrt 5+\sqrt 7$:
$$\varphi(x_1) = y_2,\qquad\varphi(x_2) = y_1+2y_2,\qquad\varphi(x_3) = y_1+y_2$$
(Check: $y_1+2y_2 = 3\sqrt 5+2\sqrt 7$ ✓). So
$$A_\varphi = \begin{pmatrix}0&1&1\\1&2&1\end{pmatrix}.$$
For $x_0 := x_1-x_2+x_3 = 1-\sqrt 2+\sqrt 3$:
$$A_\varphi\cdot\begin{pmatrix}1\\-1\\1\end{pmatrix} = \begin{pmatrix}0-1+1\\1-2+1\end{pmatrix} = \begin{pmatrix}0\\0\end{pmatrix}\;\Rightarrow\;\varphi(x_0) = 0_W.$$
If in $\mathcal{B}_V$ the vector $x_3$ is replaced by $x_0$, then $A_\varphi = \begin{pmatrix}0&1&0\\1&2&0\end{pmatrix}$.<br>
<b>Remark:</b> $\{x\in V: \varphi(x) = 0_W\}$ is a subspace of $V$ (Exercise 25(d)) – the kernel (Ch. 10).`,
    meta: "Script: Ch. 7, example (V, W with roots) and remark",
    explanation: R`<b>Lessons of the example:</b><br>
1. The matrix depends on the bases – also on the <b>choice in $W$</b>: with respect to $\{\sqrt 5,\sqrt 7\}$, $\varphi(1)$ would have coordinates $(1,1)$, but with respect to $\{\sqrt 5,\sqrt 5+\sqrt 7\}$ it has $(0,1)$.<br>
2. A vector that is sent to $0$ yields a <b>zero column</b> if one chooses it as a basis vector. A clever choice of basis makes matrices simpler – the guiding theme of Chapter 8 (change of basis).<br>
3. $\varphi$ cannot be injective: $\dim(V) = 3\gt 2 = \dim(W)$; some vector $\neq 0$ must go to $0$.`,
    example: R`$\varphi(2+\sqrt 3)$: coordinates $(2,0,1)$ ⇒ $A_\varphi(2,0,1)^t = (1,3)^t$, so $\varphi(2+\sqrt 3) = y_1+3y_2 = 4\sqrt 5+3\sqrt 7$. Directly: $2(\sqrt 5+\sqrt 7)+(2\sqrt 5+\sqrt 7) = 4\sqrt 5+3\sqrt 7$ ✓.`,
    counterexample: R`<b>Coordinates with respect to the wrong basis:</b> If one reads $\varphi(\sqrt 2) = 3\sqrt 5+2\sqrt 7$ as the column $(3,2)$, one uses the basis $\{\sqrt 5,\sqrt 7\}$ instead of $\mathcal{B}_W$ – then $A_\varphi(1,-1,1)^t$ also gives the vector $(1-3+2,1-2+1) = (0,0)$, but the matrix $\begin{pmatrix}1&3&2\\1&2&1\end{pmatrix}$ is a <b>different</b> one (it belongs to another pair of bases).`
  },
  // ========================================================================
  // 7b COMPOSITION AND MATRIX MULTIPLICATION
  // ========================================================================
  "la7_satz_7_2": {
    title: "Theorem 7.2: The composition of linear maps is linear",
    category: "7b Composition and matrix multiplication",
    type: "satz",
    front: R`State and prove <b>Theorem 7.2</b> (in one step for (i) and (ii)).`,
    back: R`<b>Theorem 7.2:</b> Let $V,W,U$ be three VS over the same field $K$, and $\varphi\in\mathrm{Hom}(V,W)$, $\psi\in\mathrm{Hom}(W,U)$. Then the composition $\psi\circ\varphi$, defined by $(\psi\circ\varphi)(x) := \psi(\varphi(x))$, is a <b>linear map $V\to U$</b>. [Remark: one sometimes writes $\psi\cdot\varphi$ or $\psi\varphi$.]<br><br>
<b>Proof:</b> $\psi\circ\varphi$ is a map $V\to U$. Linearity in one step:
$$\begin{aligned}(\psi\circ\varphi)(\lambda\cdot x+_Vy) &= \psi(\varphi(\lambda\cdot x+_Vy)) &&\text{def. of }\psi\circ\varphi\\&= \psi(\lambda\cdot\varphi(x)+_W\varphi(y)) &&\varphi\text{ is lin.}\\&= \lambda\cdot\psi(\varphi(x))+_U\psi(\varphi(y)) &&\psi\text{ is lin.}\\&= \lambda\cdot(\psi\circ\varphi)(x)+_U(\psi\circ\varphi)(y).\end{aligned}$$
<b>Remark:</b> $\psi\circ\varphi$ for $\varphi\in\mathrm{Hom}(V,W)$, $\psi\in\mathrm{Hom}(V',W')$ is only defined if $W = V'$ – in particular if $\varphi,\psi\in\mathrm{Hom}(V,V)$.`,
    meta: "Script: Ch. 7, Theorem 7.2 with proof (the script's statement says “V → W”, meaning V → U)",
    explanation: R`<b>The one-step trick:</b> instead of checking (i) and (ii) separately, one shows $f(\lambda x+y) = \lambda f(x)+f(y)$. With $\lambda = 1$ one gets (i), with $y = 0$ one gets (ii) (Stammbach III.2.1 (iii)).<br><br>
<b>Meaning:</b> Composing stays within the world of linear maps. From this one immediately defines <b>matrix multiplication</b>: $A_\psi\cdot A_\varphi := A_{\psi\circ\varphi}$. Associativity of the matrix product then follows for free from the associativity of $\circ$ (Exercise sheet 7, Exercise 32).<br><br>
<b>Reading from right to left:</b> $\psi\circ\varphi$ means “first $\varphi$, then $\psi$”.`,
    example: R`$\varphi:\mathbb{R}^2\to\mathbb{R}^3$, $\varphi(a,b) = (a,b,a+b)$; $\psi:\mathbb{R}^3\to\mathbb{R}$, $\psi(u,v,w) = u-w$. Then $(\psi\circ\varphi)(a,b) = a-(a+b) = -b$ – linear. E.g. $(\psi\circ\varphi)(3,5) = \psi(3,5,8) = -5$.`,
    counterexample: R`<b>1. Not defined:</b> $\varphi:\mathbb{R}^2\to\mathbb{R}^3$, $\psi:\mathbb{R}^2\to\mathbb{R}^2$: $\psi\circ\varphi$ makes no sense ($\varphi(x)\in\mathbb{R}^3$ does not lie in the domain of $\psi$).<br>
<b>2. Order matters:</b> with $\varphi(a,b) = (b,a)$ and $\psi(a,b) = (a,0)$ we have $\psi\circ\varphi(1,2) = (2,0)$, but $\varphi\circ\psi(1,2) = (0,1)$.`
  },
  "la7_matrixmultiplikation": {
    title: "Multiplication of matrices: A_ψ · A_φ := A_{ψ∘φ}",
    category: "7b Composition and matrix multiplication",
    type: "definition",
    front: R`How does the script define the matrix product $A_\psi\cdot A_\varphi$, and which formula results for the entry $\beta_{\ell_0}^{j_0}$ (row $\ell_0$, column $j_0$)? Compute $\begin{pmatrix}1&2&3\\-1&0&1\end{pmatrix}\cdot\begin{pmatrix}1&-1\\0&2\\3&-1\end{pmatrix}$.`,
    back: R`Let $\mathcal{B}_V = \{x_1,\dots,x_n\}$, $\mathcal{B}_W = \{y_1,\dots,y_m\}$, $\mathcal{B}_U = \{z_1,\dots,z_k\}$ be bases, $\varphi\in\mathrm{Hom}(V,W)$, $\psi\in\mathrm{Hom}(W,U)$. Then $A_\psi$ is a $(k\times m)$ matrix, $A_\varphi$ an $(m\times n)$ matrix, and $A_{\psi\circ\varphi}$ a $(k\times n)$ matrix. <b>Definition:</b>
$$A_\psi\cdot A_\varphi := A_{\psi\circ\varphi}\qquad\text{“}(k\times m)\cdot(m\times n)\leadsto(k\times n)\text{”}.$$
With $A_\varphi = (\mu_i^j)$, $A_\psi = (\eta_\ell^i)$, $A_{\psi\circ\varphi} = (\beta_\ell^j)$: $(\psi\circ\varphi)(x_{j_0}) = \psi\big(\sum_i\mu_i^{j_0}y_i\big) = \sum_i\mu_i^{j_0}\sum_\ell\eta_\ell^iz_\ell$, so
$$\beta_{\ell_0}^{j_0} = \sum_{i=1}^m\mu_i^{j_0}\cdot\eta_{\ell_0}^i = (\eta_{\ell_0}^1,\dots,\eta_{\ell_0}^m)\cdot\begin{pmatrix}\mu_1^{j_0}\\\vdots\\\mu_m^{j_0}\end{pmatrix}$$
= <b>row $\ell_0$ of $A_\psi$ times column $j_0$ of $A_\varphi$</b>.<br>
<b>Example:</b> $\begin{pmatrix}1&2&3\\-1&0&1\end{pmatrix}\begin{pmatrix}1&-1\\0&2\\3&-1\end{pmatrix} = \begin{pmatrix}10&0\\2&0\end{pmatrix}$.`,
    meta: "Script: Ch. 7, multiplication of matrices, example",
    explanation: R`<b>Matrix multiplication is defined so that it represents composition.</b> This explains the seemingly odd rule “row times column”: column $j$ of $A_{\psi\circ\varphi}$ must be $\psi(\varphi(x_j))$ in coordinates, i.e. $A_\psi\cdot(\text{column }j\text{ of }A_\varphi)$.<br><br>
<b>Column view:</b> column $j$ of $A_\psi A_\varphi$ = $A_\psi\cdot$ (column $j$ of $A_\varphi$). <b>Row view:</b> entry = row times column.<br><br>
<b>Format:</b> the inner dimension $m = \dim(W)$ must match (the “intermediate target”). Calculation rules (Stammbach I.1.11): $A(B+C) = AB+AC$ (Exercise sheet 7, Exercise 31), $(\lambda A)B = \lambda(AB) = A(\lambda B)$, $A(BC) = (AB)C$ – but in general <b>$AB\neq BA$</b>.`,
    example: R`Worked out: row 1 times column 1: $1\cdot 1+2\cdot 0+3\cdot 3 = 10$; row 1 times column 2: $-1+4-3 = 0$; row 2 times column 1: $-1+0+3 = 2$; row 2 times column 2: $1+0-1 = 0$.<br>
(Stammbach III.3.12) $B = \begin{pmatrix}2&-1\\1&1\\0&0\end{pmatrix}$, $A = \begin{pmatrix}1&1&0\\0&1&-1\end{pmatrix}$: $BA = \begin{pmatrix}2&1&1\\1&2&-1\\0&0&0\end{pmatrix}$ ($3\times 3$), $AB = \begin{pmatrix}3&0\\1&1\end{pmatrix}$ ($2\times 2$).`,
    counterexample: R`<b>Entrywise multiplication is wrong:</b> “multiplying” $\begin{pmatrix}1&1\\0&1\end{pmatrix}$ and $\begin{pmatrix}1&0\\0&-1\end{pmatrix}$ entrywise would give $\begin{pmatrix}1&0\\0&-1\end{pmatrix}$; the correct product is $\begin{pmatrix}1&-1\\0&-1\end{pmatrix}$.<br>
<b>Format:</b> $\begin{pmatrix}1&2\\3&4\end{pmatrix}\cdot\begin{pmatrix}1&2&3\end{pmatrix}$ is not defined ($2\neq 1$).`
  },
  "la7_nichtkommutativ": {
    title: "Remark: Matrix multiplication is in general not commutative",
    category: "7b Composition and matrix multiplication",
    type: "beispiel",
    front: R`Show with an example from the script that for $(n\times n)$ matrices in general $A\cdot B\neq B\cdot A$. What does this mean geometrically?`,
    back: R`$$\begin{pmatrix}1&1\\0&1\end{pmatrix}\cdot\begin{pmatrix}1&0\\0&-1\end{pmatrix} = \begin{pmatrix}1&-1\\0&-1\end{pmatrix}\;\neq\;\begin{pmatrix}1&1\\0&-1\end{pmatrix} = \begin{pmatrix}1&0\\0&-1\end{pmatrix}\cdot\begin{pmatrix}1&1\\0&1\end{pmatrix}.$$
In general (Exercise sheet 7, Exercise 32(b)): the ring $M_{n\times n}(K)$ is commutative <b>only for $n = 1$</b>; for $n\ge 2$, e.g. $E_{12}E_{21} = E_{11}\neq E_{22} = E_{21}E_{12}$.`,
    meta: "Script: Ch. 7, remark after matrix multiplication; Exercise sheet 7, Exercise 32(b)",
    explanation: R`Since $AB$ represents the map “first $B$, then $A$”, non-commutativity means: <b>the order of transformations matters.</b><br><br>
<b>Geometrically:</b> $S := \begin{pmatrix}1&1\\0&1\end{pmatrix}$ is a shear (pushes to the right, proportional to the height), $P := \begin{pmatrix}1&0\\0&-1\end{pmatrix}$ the reflection in the $x$-axis. “First reflect, then shear” ($SP$) pushes a point below the axis to the left; “first shear, then reflect” ($PS$) pushes the original point to the right and then reflects it. The results differ.<br><br>
<b>Everyday analogy:</b> first socks, then shoes ≠ first shoes, then socks.<br><br>
<b>Exceptions:</b> diagonal matrices commute with each other; every matrix commutes with $I_n$ and with its own powers.`,
    example: R`With the shear $S := \begin{pmatrix}1&1\\0&1\end{pmatrix}$ and the reflection $P := \begin{pmatrix}1&0\\0&-1\end{pmatrix}$ applied to the vector $(0,1)$: $SP(0,1)^t = S(0,-1)^t = (-1,-1)^t$, but $PS(0,1)^t = P(1,1)^t = (1,-1)^t$.<br>
Commuting: $\begin{pmatrix}2&0\\0&3\end{pmatrix}\begin{pmatrix}5&0\\0&-1\end{pmatrix} = \begin{pmatrix}10&0\\0&-3\end{pmatrix} = \begin{pmatrix}5&0\\0&-1\end{pmatrix}\begin{pmatrix}2&0\\0&3\end{pmatrix}$.`,
    counterexample: R`<b>$n = 1$:</b> $(\alpha)\cdot(\beta) = (\alpha\beta) = (\beta\alpha) = (\beta)\cdot(\alpha)$ – $M_{1\times 1}(K)$ is “essentially $K$” and commutative.<br>
<b>Not even both defined:</b> for $A$ ($2\times 3$) and $B$ ($3\times 3$), $AB$ exists, but $BA$ does not.`
  },
  "la7_s7_a30_add": {
    title: "Exercise sheet 7, Exercise 30: Addition and scalar multiplication of matrices",
    category: "7b Composition and matrix multiplication",
    type: "aufgabe",
    front: R`How must $A_\varphi+A_\psi$ and $\lambda\cdot A_\varphi$ be defined so that $A_{\varphi+_{\mathrm{Hom}}\psi} = A_\varphi+A_\psi$ and $A_{\lambda\cdot\varphi} = \lambda\cdot A_\varphi$ hold?`,
    back: R`Let $A_\varphi = (\beta_i^j)$, $A_\psi = (\gamma_i^j)$, i.e. $\varphi(x_j) = \sum_i\beta_i^jy_i$, $\psi(x_j) = \sum_i\gamma_i^jy_i$.<br>
<b>(a)</b> $(\varphi+_{\mathrm{Hom}}\psi)(x_j) = \varphi(x_j)+\psi(x_j) = \sum_{i=1}^m(\beta_i^j+\gamma_i^j)\cdot y_i$. Because the coordinates are unique (Theorem 4.1), it must hold that
$$(\beta_i^j)+(\gamma_i^j) := (\beta_i^j+\gamma_i^j)\quad\text{(entrywise)}.$$
<b>(b)</b> $(\lambda\cdot\varphi)(x_j) = \lambda\cdot\sum_i\beta_i^jy_i = \sum_i(\lambda\beta_i^j)y_i$ ⇒ $\lambda\cdot(\beta_i^j) := (\lambda\cdot\beta_i^j)$.<br><br>
<b>Remark:</b> Hence $M_{m\times n}(K)$ is a VS over $K$, and $\varphi\mapsto A_\varphi$ is a linear map $\mathrm{Hom}(V,W)\to M_{m\times n}(K)$ which is bijective by Corollary 7.5 and Theorem 7.6.`,
    meta: "Exercise sheet 7, Exercise 30; script Ch. 7, addition of matrices and multiplication by a scalar",
    explanation: R`The script derives <b>all</b> matrix operations from the maps: product ↔ composition, sum ↔ pointwise sum, scalar multiplication ↔ pointwise scaling. Hence the assignment $\varphi\mapsto A_\varphi$ is <b>structure-preserving</b> – an isomorphism of vector spaces (and for $V = W$ even of rings).<br><br>
<b>The key</b> is again the uniqueness of coordinates: if a vector has two representations in a basis, the coefficients coincide – so the matrix of $\varphi+\psi$ <b>must</b> be the entrywise sum.`,
    example: R`$\varphi(a,b) = (a+b,a)$, $\psi(a,b) = (b,-a)$ on $\mathbb{R}^2$ (standard basis): $A_\varphi = \begin{pmatrix}1&1\\1&0\end{pmatrix}$, $A_\psi = \begin{pmatrix}0&1\\-1&0\end{pmatrix}$, $A_\varphi+A_\psi = \begin{pmatrix}1&2\\0&0\end{pmatrix}$. Directly: $(\varphi+\psi)(a,b) = (a+2b,0)$ ✓.`,
    counterexample: R`<b>The matrix of the composition is not the sum:</b> $A_{\psi\circ\varphi} = A_\psi A_\varphi = \begin{pmatrix}0&1\\-1&0\end{pmatrix}\begin{pmatrix}1&1\\1&0\end{pmatrix} = \begin{pmatrix}1&0\\-1&-1\end{pmatrix}\neq A_\psi+A_\varphi$. Check: $\psi(\varphi(a,b)) = \psi(a+b,a) = (a,-a-b)$ ✓.`
  },
  "la7_s7_a31_distributiv": {
    title: "Exercise sheet 7, Exercise 31: Distributive law A·(B + C) = A·B + A·C",
    category: "7b Composition and matrix multiplication",
    type: "aufgabe",
    front: R`Show for $A = (\alpha_l^i)$ ($k\times m$) and $B = (\beta_i^j)$, $C = (\gamma_i^j)$ ($m\times n$): $A\cdot(B+C) = (A\cdot B)+(A\cdot C)$ – once directly, once via linear maps.`,
    back: R`<b>1. Proof (entries):</b> With $(A\cdot B)_l^j = \sum_{i=1}^m\alpha_l^i\beta_i^j$:
$$\big(A(B+C)\big)_l^j = \sum_{i=1}^m\alpha_l^i(\beta_i^j+\gamma_i^j) = \sum_i\alpha_l^i\beta_i^j+\sum_i\alpha_l^i\gamma_i^j = (AB)_l^j+(AC)_l^j.$$
<b>2. Proof (maps):</b> Choose (Corollary 7.5) $\varphi_1,\varphi_2\in\mathrm{Hom}(V,W)$, $\psi\in\mathrm{Hom}(W,U)$ with $A_{\varphi_1} = B$, $A_{\varphi_2} = C$, $A_\psi = A$. For $x\in V$:
$$\big(\psi\circ(\varphi_1+\varphi_2)\big)(x) = \psi(\varphi_1(x)+\varphi_2(x)) = \psi(\varphi_1(x))+\psi(\varphi_2(x)),$$
because $\psi$ is linear. Taking matrices: $A(B+C) = A_\psi A_{\varphi_1+\varphi_2} = A_{\psi\circ\varphi_1+\psi\circ\varphi_2} = AB+AC$.`,
    meta: "Exercise sheet 7, Exercise 31",
    explanation: R`<b>Two proof styles</b>, both worth mastering:<br>
• <b>Coordinatewise</b>: robust, but one has to manage the indices carefully (upper = column, lower = row).<br>
• <b>Abstract</b>: matrix rules are mirror images of map rules. $A(B+C) = AB+AC$ is exactly the <b>linearity of $\psi$</b>. The second distributive law $(B+C)D = BD+CD$, on the other hand, is already the <b>definition</b> of the sum of maps: $(\varphi_1+\varphi_2)\circ\chi = \varphi_1\circ\chi+\varphi_2\circ\chi$ (holds even for non-linear $\varphi_i$).<br><br>
Together with associativity, the distributive laws are needed in Exercise 32 to show that $M_{n\times n}(K)$ is a ring.`,
    example: R`$A = \begin{pmatrix}1&2\\0&1\end{pmatrix}$, $B = \begin{pmatrix}1&0\\1&0\end{pmatrix}$, $C = \begin{pmatrix}0&1\\0&1\end{pmatrix}$: $B+C = \begin{pmatrix}1&1\\1&1\end{pmatrix}$, $A(B+C) = \begin{pmatrix}3&3\\1&1\end{pmatrix}$; $AB = \begin{pmatrix}3&0\\1&0\end{pmatrix}$, $AC = \begin{pmatrix}0&3\\0&1\end{pmatrix}$, sum $\begin{pmatrix}3&3\\1&1\end{pmatrix}$ ✓.`,
    counterexample: R`<b>Order when expanding:</b> $A(B+C) = AB+AC$, but <b>not</b> $= BA+CA$: with the matrices on the left, $BA = \begin{pmatrix}1&2\\1&2\end{pmatrix}$, $CA = \begin{pmatrix}0&1\\0&1\end{pmatrix}$, sum $\begin{pmatrix}1&3\\1&3\end{pmatrix}\neq\begin{pmatrix}3&3\\1&1\end{pmatrix}$.<br>
<b>Binomial formula fails:</b> $(A+B)^2 = A^2+AB+BA+B^2\neq A^2+2AB+B^2$ if $AB\neq BA$.`
  },
  "la7_s7_a32_ring": {
    title: "Exercise sheet 7, Exercise 32: M_{n×n}(K) is a ring, commutative only for n = 1",
    category: "7b Composition and matrix multiplication",
    type: "aufgabe",
    front: R`Show: (a) $(M_{n\times n}(K),+,\cdot)$ is a ring; (b) it is commutative only for $n = 1$. What role does $I_n$ play?`,
    back: R`<b>(a)</b> $(M,+)$ is an abelian group (entrywise). <b>Associativity:</b> with $A = A_\varphi$, $B = A_\psi$, $C = A_\chi$ (Corollary 7.5), $(AB)C = A(BC)$ follows from $(\varphi\circ\psi)\circ\chi = \varphi\circ(\psi\circ\chi)$ (both: $x\mapsto\varphi(\psi(\chi(x)))$). <b>Identity element:</b> $I_n := (\delta_i^j) = A_{\mathrm{Id}}$ with $I_nA = A = AI_n$. <b>Distributive:</b> Exercise 31.<br>
<b>(b)</b> $n = 1$: $(\alpha)(\beta) = (\alpha\beta) = (\beta\alpha)$. $n\ge 2$: for $E_{rs}$ (1 in row $r$, column $s$; in the script, Theorem 7.6: $E_r^s$)
$$E_{rs}\cdot E_{tu} = \begin{cases}E_{ru} & s = t\\ 0 & s\neq t\end{cases},\qquad E_{12}E_{21} = E_{11}\neq E_{22} = E_{21}E_{12}.$$`,
    meta: "Exercise sheet 7, Exercise 32; script Ch. 8 (In, “Mn×n(K) is a ring”)",
    explanation: R`<b>Matrices inherit the algebra of the maps:</b> since $\varphi\mapsto A_\varphi$ translates composition into product, every rule about $\circ$ also holds for matrices – associativity costs nothing, whereas the direct proof via triple sums is tedious.<br><br>
<b>$I_n$</b> is the matrix of the identity; it is needed in Chapter 8: change-of-basis matrices satisfy $(\alpha_i^j)(\tilde\alpha_i^j) = I_n$ – they are <b>inverse</b> to each other. There the script uses exactly that $M_{n\times n}(K)$ is a ring with identity $I_n$.<br><br>
<b>Consequences of non-commutativity:</b> zero divisors ($E_{12}E_{12} = 0$), $(AB)^{-1} = B^{-1}A^{-1}$, the binomial formula only for commuting matrices.`,
    example: R`$E_{12}E_{21} = \begin{pmatrix}0&1\\0&0\end{pmatrix}\begin{pmatrix}0&0\\1&0\end{pmatrix} = \begin{pmatrix}1&0\\0&0\end{pmatrix}$, $E_{21}E_{12} = \begin{pmatrix}0&0\\0&1\end{pmatrix}$.<br>
$I_2\cdot\begin{pmatrix}2&7\\1&8\end{pmatrix} = \begin{pmatrix}2&7\\1&8\end{pmatrix}$.`,
    counterexample: R`<b>Not a field (for $n\ge 2$):</b> $E_{12}\neq 0$ has no inverse, because $E_{12}\cdot E_{12} = 0$ (zero divisor, cf. Theorem 2.1 (b)).<br>
<b>Non-square matrices</b> do not form a ring: the product of two $(2\times 3)$ matrices is not defined.`
  },
  "la7_s8_a33": {
    title: "Exercise sheet 8, Exercise 33: Entries of the representing matrix via the dual basis",
    category: "7b Composition and matrix multiplication",
    type: "aufgabe",
    front: R`Show with dual bases: (a) $\alpha_i^j = y_i^*\big(\varphi(x_j)\big)$ for $A_\varphi = (\alpha_i^j)_m^n$; (b) for $A_{\psi\circ\varphi} = (\beta_l^j)_k^n$ we have $\beta_l^j = \sum_{i=1}^mz_l^*(\psi(y_i))\cdot y_i^*(\varphi(x_j))$.`,
    back: R`<b>(a)</b> $\varphi(x_j) = \sum_{i'=1}^m\alpha_{i'}^jy_{i'}$. Apply the linear functional $y_i^*$:
$$y_i^*(\varphi(x_j)) = \sum_{i'=1}^m\alpha_{i'}^j\cdot y_i^*(y_{i'}) = \sum_{i'}\alpha_{i'}^j\delta_i^{i'} = \alpha_i^j.$$
<b>(b)</b> By (a) for $\psi\circ\varphi$: $\beta_l^j = z_l^*((\psi\circ\varphi)(x_j))$. With $(\psi\circ\varphi)(x_j) = \psi\big(\sum_i\alpha_i^jy_i\big) = \sum_i\alpha_i^j\psi(y_i)$ it follows that
$$\beta_l^j = \sum_{i=1}^m\alpha_i^j\cdot z_l^*(\psi(y_i)) = \sum_{i=1}^mz_l^*(\psi(y_i))\cdot y_i^*(\varphi(x_j)).$$
<b>Remark:</b> With $A_\psi = (\eta_l^i)$, $\eta_l^i = z_l^*(\psi(y_i))$, this reads $\beta_l^j = \sum_i\eta_l^i\alpha_i^j$ – the formula for $A_\psi\cdot A_\varphi$.`,
    meta: "Exercise sheet 8, Exercise 33",
    explanation: R`<b>Rule of thumb:</b> “entry $(i,j)$ = $i$-th coordinate of the image of the $j$-th basis vector” – and the $i$-th coordinate is read off by the dual functional $y_i^*$. More compact than this, the definition of the representing matrix cannot be.<br><br>
<b>Use:</b> formulas for matrices become calculations with functionals, e.g. the derivation of the product formula in (b), or in Ch. 9 the proof of $A_{\varphi^*} = (A_\varphi)^t$: $\eta_j^i = (\varphi^*(y_i^*))(x_j) = y_i^*(\varphi(x_j)) = \mu_i^j$.`,
    example: R`$\varphi(x_1,x_2,x_3) = (x_1+x_2,x_2-x_3)$, $\mathcal{B}_V = \{(1,1,0),(0,1,1),(1,1,1)\}$, standard basis in $\mathbb{R}^2$ ($y_i^*$ = $i$-th component): $\alpha_1^3 = y_1^*(\varphi(1,1,1)) = y_1^*(2,0) = 2$, $\alpha_2^1 = y_2^*(\varphi(1,1,0)) = y_2^*(2,1) = 1$ – matching $A_\varphi = \begin{pmatrix}2&1&2\\1&0&0\end{pmatrix}$.`,
    counterexample: R`<b>Wrong functional:</b> $\alpha_i^j\neq x_j^*(\varphi(\dots))$ – the dual functional must come from the <b>target space</b> $W^*$ ($y_i^*$), because $\varphi(x_j)\in W$. $x_j^*$ is not even defined on $W$ (for $V\neq W$).<br>
<b>Dual basis of the wrong basis:</b> with $\mathcal{B}_W = \{(1,1),(1,-1)\}$ we have $y_1^*(a,b) = \tfrac{a+b}2$, and $\alpha_1^3 = y_1^*(2,0) = 1\neq 2$ – different basis, different matrix.`
  },
  // ========================================================================
  // 7c ISOMORPHISM AND DIMENSION OF HOM(V,W)
  // ========================================================================
  "la7_def_isomorph": {
    title: "Definition: Isomorphic vector spaces V ≅ W",
    category: "7c Isomorphism and dim Hom(V,W)",
    type: "definition",
    front: R`When are two vector spaces <b>isomorphic</b>? What follows for the inverse map?`,
    back: R`Two VS $V$ and $W$ over the same field $K$ are <b>isomorphic</b> if and only if there exists a <b>bijective vector space homomorphism</b> $\Phi\in\mathrm{Hom}(V,W)$. If $V$ and $W$ are isomorphic, we write
$$V\cong W.$$
[and hence also $\Phi^{-1}\in\mathrm{Hom}(W,V)$]`,
    meta: "Script: Ch. 7, Hom(Kⁿ, Kᵐ): definition of isomorphic",
    explanation: R`“Isomorphic” = <b>built the same way</b>: an isomorphism is a renaming of the vectors which respects addition and scalar multiplication. Anything one can do linear-algebraically in $V$ can be done in exactly the same way in $W$.<br><br>
<b>The inverse map is automatically linear</b> (Stammbach II.4.7): from $\Phi(\Phi^{-1}(u)+\Phi^{-1}(v)) = u+v$ it follows that $\Phi^{-1}(u+v) = \Phi^{-1}(u)+\Phi^{-1}(v)$; analogously for scalars.<br><br>
<b>Isomorphisms preserve linear independence and bases</b> (Stammbach II.4.10). Hence isomorphic finite-dimensional VS have the same dimension – and conversely, VS of the same dimension are isomorphic (Theorem 7.3).`,
    example: R`<b>1.</b> Polynomials of degree $\le 2$ $\cong\mathbb{R}^3$ via $a_0+a_1x+a_2x^2\mapsto(a_0,a_1,a_2)$.<br>
<b>2.</b> $\mathrm{Fib}\cong\mathbb{R}^2$ via $F_{a,b}\mapsto(a,b)$; e.g. $(1,1,2,3,5,\dots)\mapsto(1,1)$.<br>
<b>3.</b> $M_{2\times 3}(K)\cong K^6$ (list the entries).`,
    counterexample: R`<b>1.</b> $\mathbb{R}^2\not\cong\mathbb{R}^3$ (different dimension); e.g. $(a,b)\mapsto(a,b,0)$ is injective but not surjective.<br>
<b>2. Bijective, but not linear:</b> $x\mapsto x^3$ on $\mathbb{R}$ is bijective, but not an isomorphism ($2^3\neq 2\cdot 1^3$).<br>
<b>3.</b> $S(K)\cong\{(0,a_1,a_2,\dots)\}\subsetneq S(K)$ (shift) – in the infinite case a vector space can be isomorphic to a proper subspace.`
  },
  "la7_satz_7_3": {
    title: "Theorem 7.3: Every n-dimensional VS is isomorphic to Kⁿ",
    category: "7c Isomorphism and dim Hom(V,W)",
    type: "satz",
    front: R`State and prove <b>Theorem 7.3</b>. What does the inverse map $\Phi^{-1}$ look like?`,
    back: R`<b>Theorem 7.3:</b> If $V$ is a finite-dimensional VS over $K$ with $\dim(V) = n$, then $V\cong K^n$.<br><br>
<b>Proof:</b> Let $\mathcal{B}_V = \{x_1,\dots,x_n\}$ be a basis and
$$\Phi: K^n\to V,\qquad\begin{pmatrix}\lambda_1\\\vdots\\\lambda_n\end{pmatrix}\mapsto(x_1,\dots,x_n)\cdot\begin{pmatrix}\lambda_1\\\vdots\\\lambda_n\end{pmatrix} = \sum_{i=1}^n\lambda_ix_i.$$
<b>(1) $\Phi$ linear:</b> $\Phi(\eta(\lambda_i)+(\mu_i)) = \sum(\eta\lambda_i+\mu_i)x_i = \eta\Phi((\lambda_i))+\Phi((\mu_i))$.<br>
<b>(2) surjective:</b> $x = \sum\lambda_ix_i\in V$ ⇒ $\Phi((\lambda_i)) = x$.<br>
<b>(3) injective:</b> $\Phi((\lambda_i)) = \Phi((\mu_i))$ ⇒ $\sum\lambda_ix_i = \sum\mu_ix_i$ ⇒ (basis) $\lambda_i = \mu_i$.<br>
<b>(4) Inverse map</b> with the dual basis $\mathcal{B}_V^* = \{x_1^*,\dots,x_n^*\}$:
$$\Phi^{-1}: V\to K^n,\qquad x\mapsto\begin{pmatrix}x_1^*(x)\\\vdots\\x_n^*(x)\end{pmatrix},$$
because $\Phi^{-1}(\Phi((\lambda_i))) = (x_i^*(\sum_j\lambda_jx_j)) = (\lambda_i)$.`,
    meta: "Script: Ch. 7, Theorem 7.3 with proof",
    explanation: R`<b>“Introducing coordinates” is an isomorphism.</b> $\Phi^{-1}$ assigns to each vector its coordinate vector with respect to $\mathcal{B}_V$, and $\Phi$ assembles a vector from coordinates. This is why in every finite-dimensional VS one can <b>calculate as in $K^n$</b> – polynomials, Fibonacci sequences, root spaces, …<br><br>
<b>But (Stammbach II.4.15):</b> the isomorphism depends on the <b>choice of basis</b>. Different bases give different coordinates (change of basis, Ch. 8). The important properties (dimension, rank, linear independence, …) are basis-independent; many problems consist precisely in finding a <b>good</b> basis.<br><br>
<b>Consequence:</b> finite-dimensional VS over $K$ are determined up to isomorphism by their dimension.`,
    example: R`$V$ = polynomials of degree $\le 2$, $\mathcal{B}_V = \{1,x,x^2\}$: $\Phi(3,-1,2)^t = 3-x+2x^2$; $\Phi^{-1}(5x^2-4) = (-4,0,5)^t$.<br>
With the Lagrange basis $\mathcal{L} = \{L_0,L_1,L_2\}$ (nodes $0,1,2$): $\Phi_{\mathcal{L}}^{-1}(p) = (p(0),p(1),p(2))^t$, e.g. $\Phi_{\mathcal{L}}^{-1}(2+3x-x^2) = (2,4,4)^t$ (Ch. 8).`,
    counterexample: R`<b>No coordinates without a basis:</b> for infinite-dimensional spaces there is no isomorphism to any $K^n$: $\mathbb{Q}[X]\not\cong\mathbb{Q}^n$ for every $n$.<br>
<b>“Coordinate vector” with respect to a spanning set</b> is not well defined: with $\{(1,0),(0,1),(1,1)\}$, the vector $(1,1)$ has “coordinates” $(1,1,0)$ and $(0,0,1)$ – the map $K^3\to K^2$ is not injective.`
  },
  "la7_satz_7_4": {
    title: "Theorem 7.4: The commutative diagram φ = Φ ∘ A_φ ∘ Φ⁻¹",
    category: "7c Isomorphism and dim Hom(V,W)",
    type: "satz",
    front: R`What does <b>Theorem 7.4</b> state? When does a diagram <b>commute</b>?`,
    back: R`<b>Theorem 7.4:</b> Let $V,W$ be VS over $K$ with bases $\mathcal{B}_V = \{x_1,\dots,x_n\}$, $\mathcal{B}_W = \{y_1,\dots,y_m\}$ and $\varphi\in\mathrm{Hom}(V,W)$. Then the diagram
$$\begin{array}{ccc}V&\xrightarrow{\;\varphi\;}&W\\ {\scriptstyle\Phi}\uparrow\downarrow{\scriptstyle\Phi^{-1}}&\circlearrowleft&{\scriptstyle\Phi^{-1}}\downarrow\uparrow{\scriptstyle\Phi}\\ K^n&\xrightarrow{\;A_\varphi\;}&K^m\end{array}\qquad x\mapsto\varphi(x),\quad(\lambda_i)\mapsto A_\varphi\cdot(\lambda_i).$$
commutes.
<b>Definition:</b> A diagram <b>commutes</b> ($\circlearrowleft$) if all paths along the arrows with the same start and end points give the same map. For example, for all $x\in V$:
$$\Phi\big(\underbrace{A_\varphi\cdot\underbrace{\Phi^{-1}(x)}_{\in K^n}}_{\in K^m}\big) = \varphi(x).$$
[The proof follows from the definitions and Theorem 7.3.]`,
    meta: "Script: Ch. 7, Theorem 7.4, definition of commuting diagram",
    explanation: R`<b>The three steps</b> “take coordinates ($\Phi^{-1}$) – apply the matrix ($A_\varphi$) – translate back ($\Phi$)” give the same as “apply $\varphi$ directly”. In short: <b>the matrix computes in coordinates what the map does in the space.</b><br><br>
<b>Diagrams</b> are a compact language for such equations: instead of writing $\Phi\circ A_\varphi\circ\Phi^{-1} = \varphi$, one draws a square. The same technique proves the change-of-basis formula in Theorem 8.1 (two squares on top of each other) and illustrates the dual map in Theorem 9.1.<br><br>
<b>Caution:</b> the two $\Phi$'s are different: on the left $K^n\to V$ (with $\mathcal{B}_V$), on the right $K^m\to W$ (with $\mathcal{B}_W$).`,
    example: R`$\varphi$ = derivative, $V$ = degree $\le 2$, $W$ = degree $\le 1$, monomial bases: $A_\varphi = \begin{pmatrix}0&1&0\\0&0&2\end{pmatrix}$. For $p = 4+3x-x^2$: $\Phi^{-1}(p) = (4,3,-1)^t$, $A_\varphi(4,3,-1)^t = (3,-2)^t$, $\Phi(3,-2)^t = 3-2x$ – and directly $(4+3x-x^2)' = 3-2x$ ✓.`,
    counterexample: R`<b>The diagram does not commute if the bases do not match:</b> in the example on the left, $A_\varphi$ is computed with respect to the monomial basis $\{1,x\}$ of $W$. If one translates back at the top right with a <b>different</b> basis $\{1,1+x\}$, one gets $\Phi(3,-2)^t = 3\cdot 1-2\cdot(1+x) = 1-2x\neq 3-2x = \varphi(4+3x-x^2)$. $A_\varphi$, $\Phi$ and $\Phi^{-1}$ must refer to the <b>same</b> bases.`
  },
  "la7_kor_7_5": {
    title: "Corollary 7.5: Every matrix is a representing matrix",
    category: "7c Isomorphism and dim Hom(V,W)",
    type: "satz",
    front: R`What does <b>Corollary 7.5</b> state, and how does one prove it with the canonical bases?`,
    back: R`<b>Corollary 7.5:</b> For every $(m\times n)$ matrix $M\in M_{m\times n}(K)$ there exist vector spaces $V$ and $W$ over $K$ of dimension $n$ and $m$ respectively, and a $\varphi\in\mathrm{Hom}(V,W)$, such that $A_\varphi = M$.<br><br>
<b>Proof:</b> Let $V = K^n$, $W = K^m$ with the <b>canonical bases</b> $\mathcal{B}_V = \{e_1,\dots,e_n\}$, $\mathcal{B}_W = \{\tilde e_1,\dots,\tilde e_m\}$, where $e_j$ has a $1$ at the $j$-th place and $0$ elsewhere ($\tilde e_i$ analogously). Define
$$\varphi: V\to W,\qquad\varphi(x) := \Phi\big(M\cdot\Phi^{-1}(x)\big)\quad(\text{here simply }\varphi(x) = M\cdot x).$$
Then $A_\varphi = M$ [canonical = standard, yardstick, guideline (Greek)].`,
    meta: "Script: Ch. 7, Corollary 7.5 with proof",
    explanation: R`Theorem 7.4 says “every linear map has a matrix”, Corollary 7.5 says conversely “<b>every matrix is the matrix of a linear map</b>”. Together: linear maps (between spaces with fixed bases) and matrices are <b>the same thing in two languages</b>. This is why one may prove matrix rules via maps (Exercise sheet 7, Exercises 31/32).<br><br>
<b>Canonical basis</b> = the standard basis $e_1,\dots,e_n$; with respect to it the coordinate vector of $x\in K^n$ is simply $x$ itself ($\Phi = \mathrm{Id}$). Then “apply the matrix” literally is the map $x\mapsto Mx$, and the columns of $M$ are the images $Me_j$.`,
    example: R`$M = \begin{pmatrix}0&-1\\1&0\end{pmatrix}$ belongs to $\varphi:\mathbb{R}^2\to\mathbb{R}^2$, $\varphi(a,b) = (-b,a)$ – rotation by $90°$: $\varphi(e_1) = (0,1)^t$ = 1st column, $\varphi(e_2) = (-1,0)^t$ = 2nd column. E.g. $\varphi(3,1) = (-1,3)$.`,
    counterexample: R`<b>Not unique without a basis:</b> the same matrix $M$ belongs to many maps, depending on the choice of basis: $\begin{pmatrix}1&0\\0&0\end{pmatrix}$ is, with respect to $\{e_1,e_2\}$, the projection onto the $x$-axis, and with respect to $\{(1,1),(1,-1)\}$ the projection onto the line $y = x$ along $y = -x$ (e.g. $(2,0) = (1,1)+(1,-1)\mapsto(1,1)$).`
  },
  "la7_satz_7_6": {
    title: "Theorem 7.6: dim Hom(V, W) = m · n",
    category: "7c Isomorphism and dim Hom(V,W)",
    type: "satz",
    front: R`State and prove <b>Theorem 7.6</b> with the matrices $E_{i_0}^{j_0}$. What does the corresponding basis of $\mathrm{Hom}(V,W)$ look like (Exercise sheet 8, Exercise 34)?`,
    back: R`<b>Theorem 7.6:</b> Let $V$ and $W$ be VS over $K$ of dimension $n$ and $m$ respectively. Then $\mathrm{Hom}(V,W)$ has dimension $m\cdot n$.<br><br>
<b>Proof:</b> $V\cong K^n$, $W\cong K^m$ (Theorem 7.3); by Theorem 7.4 and Corollary 7.5, each $\varphi$ corresponds uniquely to an $(m\times n)$ matrix $A_\varphi$ and vice versa. Let $E_{i_0}^{j_0}$ be the matrix with $1$ in row $i_0$, column $j_0$, and $0$ elsewhere. For $A = (\alpha_i^j)$
$$A = \sum_{i_0=1}^m\sum_{j_0=1}^n\alpha_{i_0}^{j_0}\cdot E_{i_0}^{j_0},$$
the $E_{i_0}^{j_0}$ are linearly independent, and there are $m\cdot n$ of them ⇒ $\dim(\mathrm{Hom}(V,W)) = m\cdot n$.<br><br>
<b>Exercise sheet 8, Exercise 34:</b> The corresponding maps are $\Psi_{i_0}^{j_0}: x\mapsto x_{j_0}^*(x)\cdot y_{i_0}$, i.e. $\Psi_{i_0}^{j_0}(x_j) = y_{i_0}$ for $j = j_0$, otherwise $0_W$; and $\varphi = \sum_{i,j}\alpha_i^j\Psi_i^j$.`,
    meta: "Script: Ch. 7, Theorem 7.6 with proof; Exercise sheet 8, Exercise 34 (a)–(f)",
    explanation: R`<b>Counting degrees of freedom:</b> a linear map $V\to W$ is determined by the images of the $n$ basis vectors, each image has $m$ coordinates, and all these numbers can be chosen freely. So $m\cdot n$ degrees of freedom.<br><br>
<b>$\Psi_{i_0}^{j_0}$ = “elementary map”</b> (Stammbach III.6.6): it reads off the $j_0$-th coordinate ($x_{j_0}^*$) and writes it down as a multiple of $y_{i_0}$. Every linear map is a sum of such “read-off-and-write-down” operations, weighted by the matrix entries.<br><br>
<b>Special cases:</b> $\dim(V^*) = \dim(\mathrm{Hom}(V,K)) = 1\cdot n = n$ (Theorem 6.2); $\dim(\mathrm{Hom}(V,V)) = n^2$ – which is why $\varphi^0,\varphi^1,\dots,\varphi^{n^2}$ are always linearly dependent (minimal polynomial, Exercise sheet 8, Exercise 35).`,
    example: R`$m = n = 2$: $\begin{pmatrix}3&-1\\0&5\end{pmatrix} = 3E_1^1-1\cdot E_1^2+0\cdot E_2^1+5E_2^2$.<br>
$\dim(\mathrm{Hom}(\mathbb{R}^3,\mathbb{R}^2)) = 6$; $\dim(\mathrm{Hom}(\mathbb{F}_2^2,\mathbb{F}_2^2)) = 4$, so there are $2^4 = 16$ linear maps $\mathbb{F}_2^2\to\mathbb{F}_2^2$.`,
    counterexample: R`<b>Not $m+n$:</b> $\mathrm{Hom}(\mathbb{R}^2,\mathbb{R}^3)$ has dimension $6$, not $5$ – one needs an image with 3 coordinates for each of the 2 basis vectors.<br>
<b>Infinite-dimensional:</b> $\dim(\mathrm{Hom}(c_{00},K)) = \dim(c_{00}^*)\gt\dim(c_{00})\cdot 1$ (Exercise sheet 6, Exercise 27) – the formula fails.`
  },
  "la7_bsp_mathematica_basen": {
    title: "Mathematica example: The same map in two bases",
    category: "7c Isomorphism and dim Hom(V,W)",
    type: "beispiel",
    front: R`$\varphi:\mathbb{R}^3\to\mathbb{R}^3$ has the matrix $A_\varphi = \begin{pmatrix}1&1&-1\\2&0&-2\\1&-1&-1\end{pmatrix}$ with respect to $\mathcal{B}_1 = \{e_1,e_2,e_3\}$. Determine the matrix $B_\varphi$ with respect to $\mathcal{B}_2 = \{x_1,x_2,x_3\}$, where $x_1 = e_2+e_3$, $x_2 = e_1+e_2$, $x_3 = e_1+e_3$.`,
    back: R`Compute $\varphi(x_j)$ in the canonical basis and write the result in $\mathcal{B}_2$:
$$A_\varphi\begin{pmatrix}0\\1\\1\end{pmatrix} = \begin{pmatrix}0\\-2\\-2\end{pmatrix} = -2x_1,\quad A_\varphi\begin{pmatrix}1\\1\\0\end{pmatrix} = \begin{pmatrix}2\\2\\0\end{pmatrix} = 2x_2,\quad A_\varphi\begin{pmatrix}1\\0\\1\end{pmatrix} = \begin{pmatrix}0\\0\\0\end{pmatrix}.$$
So
$$B_\varphi = \begin{pmatrix}-2&0&0\\0&2&0\\0&0&0\end{pmatrix}.$$
E.g. $\varphi(x_1+2x_2-3x_3) = B_\varphi(1,2,-3)^t = (-2,4,0)^t$, i.e. $-2x_1+4x_2+0x_3$.<br>
“The linear map is the same in both cases, but the matrices $A_\varphi$ and $B_\varphi$ are very different. With respect to $\mathcal{B}_2$, $\varphi$ is easier to understand.”`,
    meta: "Script: Mathematica notebook “lineare_Abbildungen_und_Basen.nb” (after Theorem 7.6)",
    explanation: R`<b>The best basis makes the matrix diagonal:</b> in $\mathcal{B}_2$ one sees immediately what $\varphi$ does – $x_1$ is stretched by $-2$ (and reflected), $x_2$ is stretched by $2$, $x_3$ is sent to $0$. These $x_j$ are <b>eigenvectors</b> (outlook: eigenvalues $-2,2,0$), cf. $M_{\mathrm{Fib}}$ in Exercise sheet 6, Exercise 29.<br><br>
<b>Recipe</b> for the matrix with respect to a new basis (preview of Theorem 8.1): (1) write the new basis vectors in old coordinates, (2) apply the old matrix, (3) express the result in the new basis – this is exactly $\tilde A_\varphi = B\cdot A_\varphi\cdot B^{-1}$.<br><br>
From $B_\varphi$ one can also read off the kernel ($\langle x_3\rangle$) and the rank ($2$).`,
    example: R`Consistency check: $x_1+2x_2-3x_3 = (0,1,1)+(2,2,0)-(3,0,3) = (-1,3,-2)$; $A_\varphi(-1,3,-2)^t = (-1+3+2,\,-2+0+4,\,-1-3+2)^t = (4,2,-2)^t$; and $-2x_1+4x_2 = (0,-2,-2)+(4,4,0) = (4,2,-2)$ ✓.`,
    counterexample: R`<b>Changing only the $V$-basis, keeping the $W$-coordinates old:</b> if one writes the images $\varphi(x_j)$ in <b>canonical</b> coordinates as columns, one gets $\begin{pmatrix}0&2&0\\-2&2&0\\-2&0&0\end{pmatrix}$ – the matrix with respect to the pair $(\mathcal{B}_2,\mathcal{B}_1)$, not $B_\varphi$. For a self-map one must take the <b>same</b> basis in the start and target space to see the diagonal form.`
  },
  // ========================================================================
  // EXERCISE SHEETS 6 AND 8 – POWERS OF MAPS
  // ========================================================================
  "la7_s6_a29_mfib": {
    title: "Exercise sheet 6, Exercise 29: The Fibonacci matrix M_Fib and its eigenvectors",
    category: "7c Isomorphism and dim Hom(V,W)",
    type: "aufgabe",
    front: R`$\varphi_{\mathrm{Fib}}:\mathrm{Fib}\to\mathrm{Fib}$ with $\varphi(F_{1,0}) = F_{0,1}$, $\varphi(F_{0,1}) = F_{1,0}+F_{0,1}$ has $M_{\mathrm{Fib}} = \begin{pmatrix}0&1\\1&1\end{pmatrix}$. Show (a) $M_{\mathrm{Fib}}^n\begin{pmatrix}a\\b\end{pmatrix} = \begin{pmatrix}f_n\\f_{n+1}\end{pmatrix}$ for $F_{a,b} = (f_0,f_1,\dots)$; (b) find $x_1\neq x_2$, $\lambda_i$ with $M_{\mathrm{Fib}}\begin{pmatrix}1\\x_i\end{pmatrix} = \lambda_i\begin{pmatrix}1\\x_i\end{pmatrix}$.`,
    back: R`$M_{\mathrm{Fib}}\begin{pmatrix}u\\v\end{pmatrix} = \begin{pmatrix}v\\u+v\end{pmatrix}$ – one “Fibonacci step”.<br>
<b>(a) Induction:</b> $n = 0$: $M^0 = I_2$. Step: $M^{n+1}\begin{pmatrix}a\\b\end{pmatrix} = M\begin{pmatrix}f_n\\f_{n+1}\end{pmatrix} = \begin{pmatrix}f_{n+1}\\f_n+f_{n+1}\end{pmatrix} = \begin{pmatrix}f_{n+1}\\f_{n+2}\end{pmatrix}$.<br>
<b>(b)</b> $M\begin{pmatrix}1\\x\end{pmatrix} = \begin{pmatrix}x\\1+x\end{pmatrix} = \lambda\begin{pmatrix}1\\x\end{pmatrix}$ ⇔ $\lambda = x$ and $1+x = x^2$, so
$$x_1 = \varphi = \tfrac{1+\sqrt 5}{2},\qquad x_2 = \psi = \tfrac{1-\sqrt 5}{2},\qquad\lambda_i = x_i.$$
<b>Remark:</b> $M^n\begin{pmatrix}1\\x_i\end{pmatrix} = x_i^n\begin{pmatrix}1\\x_i\end{pmatrix}$, i.e. $F_{1,x_i} = (1,x_i,x_i^2,\dots)$ – the basis $B_3$ from Exercise 17. With $\begin{pmatrix}0\\1\end{pmatrix} = \tfrac{1}{\sqrt 5}\begin{pmatrix}1\\\varphi\end{pmatrix}-\tfrac{1}{\sqrt 5}\begin{pmatrix}1\\\psi\end{pmatrix}$ we again get Binet: $f_n = \tfrac{1}{\sqrt 5}(\varphi^n-\psi^n)$.`,
    meta: "Exercise sheet 6, Exercise 29 (in the script: Fib, Exercises 11, 17)",
    explanation: R`<b>Matrix powers = repeated application.</b> The whole Fibonacci recursion sits in a $2\times 2$ matrix that pushes the pair $(f_n,f_{n+1})$ one step further.<br><br>
<b>Eigenvectors make powers trivial:</b> for a vector $v$ with $Mv = \lambda v$ we have $M^nv = \lambda^nv$. If one decomposes an arbitrary starting vector into eigenvectors, $M^n$ becomes “multiply each component by $\lambda_i^n$”. That is the idea behind Binet – and the reason why in Chapter 8 one looks for bases in which a matrix is <b>diagonal</b> ($\mathrm{diag}(\varphi,\psi)$).<br><br>
(Notation: here $\varphi,\psi$ denote the numbers $\tfrac{1\pm\sqrt 5}{2}$, not maps.)`,
    example: R`$M^5 = \begin{pmatrix}3&5\\5&8\end{pmatrix}$; $M^5\begin{pmatrix}0\\1\end{pmatrix} = \begin{pmatrix}5\\8\end{pmatrix} = \begin{pmatrix}f_5\\f_6\end{pmatrix}$ for $F_{0,1} = (0,1,1,2,3,5,8,\dots)$ ✓. With $F_{2,1}$: $M^5\begin{pmatrix}2\\1\end{pmatrix} = \begin{pmatrix}11\\18\end{pmatrix}$, and $F_{2,1} = (2,1,3,4,7,11,18,\dots)$ ✓.`,
    counterexample: R`<b>Not an eigenvector:</b> $M\begin{pmatrix}1\\2\end{pmatrix} = \begin{pmatrix}2\\3\end{pmatrix}$ is not a multiple of $(1,2)^t$ ($\tfrac21\neq\tfrac32$).<br>
<b>Geometric sequence with the wrong $t$:</b> $(1,2,4,8,\dots)$ does not satisfy the recursion ($4\neq 2+1$), because $2^2\neq 2+1$; only $t\in\{\varphi,\psi\}$ works.`
  },
  "la7_s8_a35_minimalpolynom": {
    title: "Exercise sheet 8, Exercise 35: Annihilating polynomial / minimal polynomial",
    category: "7c Isomorphism and dim Hom(V,W)",
    type: "aufgabe",
    front: R`For $\varphi\in\mathrm{Hom}(V,V)$ ($\dim(V) = n$) let $\varphi^0 = \mathrm{Id}$, $\varphi^{k+1} = \varphi\circ\varphi^k$. Show: there exist $N\le n\cdot n$ and a polynomial $p_\varphi = \sum_{k=0}^Na_kX^k$ with $a_N = 1$, such that $a_0\varphi^0+\dots+a_N\varphi^N$ is the zero map.`,
    back: R`Let $d := \dim(\mathrm{Hom}(V,V)) = n\cdot n$ (Theorem 7.6). Consider the $d+1$ maps $\varphi^0,\varphi^1,\dots,\varphi^d\in\mathrm{Hom}(V,V)$.<br>
<b>Case 1:</b> $\varphi^a = \varphi^b$ for some $a\lt b\le d$ ⇒ $(-1)\varphi^a+1\cdot\varphi^b = 0_{\mathrm{Hom}}$; $N := b$.<br>
<b>Case 2:</b> pairwise different ⇒ $d+1$ vectors in the $d$-dimensional space are <b>linearly dependent</b> ⇒ (Theorem 4.0) $\sum_{k=0}^d\lambda_k\varphi^k = 0_{\mathrm{Hom}}$, not all $\lambda_k = 0$. Let $N$ be the largest index with $\lambda_N\neq 0$; set $a_k := \lambda_N^{-1}\lambda_k$. Then $a_N = 1$ and $\sum_{k=0}^Na_k\varphi^k = \lambda_N^{-1}\cdot 0_{\mathrm{Hom}} = 0_{\mathrm{Hom}}$.<br><br>
<b>Remark:</b> The polynomial of smallest degree with this property is called the <b>minimal polynomial</b> $m_\varphi$. For $\varphi_{\mathrm{Fib}}$: $m_{\varphi_{\mathrm{Fib}}} = X^2-X-1$; for the zero map on $V\neq\{0\}$: $m_\varphi = X$.`,
    meta: "Exercise sheet 8, Exercise 35",
    explanation: R`<b>Dimension argument in its purest form:</b> in a space of dimension $d$, any $d+1$ vectors are always linearly dependent. The powers $\varphi^0,\varphi^1,\dots$ live in $\mathrm{Hom}(V,V)$ with $d = n^2$ – so at some point a power must be a linear combination of the previous ones. This dependence, normalised to leading coefficient $1$, is the annihilating polynomial.<br><br>
<b>Outlook:</b> the roots of the minimal polynomial are the <b>eigenvalues</b>: for $M_{\mathrm{Fib}}$ these are $\tfrac{1\pm\sqrt 5}{2}$ (Exercise 29). The Cayley–Hamilton theorem (later) improves the bound $N\le n^2$ to $N\le n$.`,
    example: R`$M := M_{\mathrm{Fib}}$: $M^2 = \begin{pmatrix}1&1\\1&2\end{pmatrix}$, so $M^2-M-I_2 = \begin{pmatrix}1-0-1&1-1-0\\1-1-0&2-1-1\end{pmatrix} = 0$ ⇒ $X^2-X-1$ annihilates $\varphi_{\mathrm{Fib}}$.<br>
$S = \begin{pmatrix}1&1\\0&1\end{pmatrix}$: $(S-I_2)^2 = \begin{pmatrix}0&1\\0&0\end{pmatrix}^2 = 0$ ⇒ $X^2-2X+1$ annihilates $S$.`,
    counterexample: R`<b>Degree 1 does not suffice for $M_{\mathrm{Fib}}$:</b> $M+a_0I_2 = 0$ would mean $M = -a_0I_2$ (a diagonal matrix), but $M$ has a $1$ off the diagonal. Degree 0 ($a_0 = 1$) gives $\mathrm{Id}\neq 0$. So $X^2-X-1$ is minimal.<br>
<b>A polynomial that is not monic is not a “minimal polynomial”:</b> $2X^2-2X-2$ also annihilates, but has leading coefficient $2\neq 1$.`
  }
};
})();
