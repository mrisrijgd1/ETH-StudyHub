/* ==========================================================================
   LINEAR ALGEBRA I – CHAPTER 8 (English): Change of basis
   (change-of-basis matrix, Lemma 8.0, inverse, Lagrange polynomials, Theorem 8.1)
   Linear Algebra I – Prof. Dr. Lorenz Halbeisen, HS 2026
   English translation of data_kapitel8.js. Formulas, HTML and ids are identical.
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_EN_KAPITEL_8 = {
  // ========================================================================
  // 8a CHANGE-OF-BASIS MATRICES
  // ========================================================================
  "la8_def_basiswechselmatrix": {
    title: "Definition: Change-of-basis matrix (express the old basis in the new one)",
    category: "8a Change-of-basis matrices",
    type: "definition",
    front: R`Let $\mathcal{B}_V = \{x_1,\dots,x_n\}$ (old) and $\tilde{\mathcal{B}}_V = \{\tilde x_1,\dots,\tilde x_n\}$ (new basis) be bases of $V$. What is the <b>change-of-basis matrix</b> for the change $\mathcal{B}_V\to\tilde{\mathcal{B}}_V$? What does the notation $(\alpha_i^j)_m^n$ mean?`,
    back: R`Each $x_j$ can be written as a linear combination of the new basis vectors:
$$x_j = \sum_{i=1}^n\alpha_i^j\cdot\tilde x_i\quad(1\le j\le n),\qquad\text{conversely}\quad\tilde x_j = \sum_{i=1}^n\tilde\alpha_i^j\cdot x_i.$$
For the change $\mathcal{B}_V\to\tilde{\mathcal{B}}_V$ (resp. $\tilde{\mathcal{B}}_V\to\mathcal{B}_V$) the <b>change-of-basis matrix</b> is $(\alpha_i^j)_n^n$ (resp. $(\tilde\alpha_i^j)_n^n$).<br>
<b>Remember:</b> for the change $\mathcal{B}_V\to\tilde{\mathcal{B}}_V$ we write the <b>old basis vectors as linear combinations of the new ones</b>; their coefficients form the <b>columns</b>.<br><br>
<b>Notation:</b> $(\alpha_i^j)_m^n$ denotes the $(m\times n)$ matrix $\begin{pmatrix}\alpha_1^1&\cdots&\alpha_1^n\\\vdots&&\vdots\\\alpha_m^1&\cdots&\alpha_m^n\end{pmatrix}$. If $n = 1$ resp. $m = 1$, we omit $n,j$ resp. $m,i$: $(\lambda_i)_m$ = column vector in $K^m$, $(\mu^j)^n = (\mu^1,\dots,\mu^n)$ = row vector.<br>
<b>Remark:</b> $(\alpha_i^j)_n^n$ and $(\tilde\alpha_i^j)_n^n$ are the matrices of the <b>identity map</b> $\iota: V\to V$ with respect to $\mathcal{B}_V$, $\tilde{\mathcal{B}}_V$ (resp. $\tilde{\mathcal{B}}_V$, $\mathcal{B}_V$).`,
    meta: "Script: Ch. 8, change-of-basis matrix, notation, remark",
    explanation: R`<b>Why “old in new”?</b> Because with it one converts <b>coordinates from old to new</b> (Lemma 8.0): $(\mu_i)_n = (\alpha_i^j)_n^n\cdot(\lambda_j)_n$. The matrix “translates” a coordinate list with respect to $\mathcal{B}_V$ into one with respect to $\tilde{\mathcal{B}}_V$.<br><br>
<b>Remark (identity):</b> the change-of-basis matrix is nothing new – it is the representing matrix $A_\iota$ of the identity, when one takes the old basis in the start space and the new basis in the target space. The $j$-th column = coordinates of $\iota(x_j) = x_j$ with respect to $\tilde{\mathcal{B}}_V$. So all calculation rules follow from Chapter 7.<br><br>
<b>Most common mistake:</b> writing the new vectors in old coordinates as columns – that gives the <b>inverse</b> matrix $(\tilde\alpha_i^j)$ (counterexample).`,
    example: R`$V = \mathbb{R}^2$, old $\{e_1,e_2\}$, new $\tilde x_1 = (1,0)$, $\tilde x_2 = (1,1)$. Old in new: $e_1 = 1\cdot\tilde x_1+0\cdot\tilde x_2$, $e_2 = -1\cdot\tilde x_1+1\cdot\tilde x_2$ ⇒
$$(\alpha_i^j) = \begin{pmatrix}1&-1\\0&1\end{pmatrix}.$$
(Stammbach II.8.2.1) Rotation of the basis by $\phi$: $(\alpha_i^j) = \begin{pmatrix}\cos\phi&\sin\phi\\-\sin\phi&\cos\phi\end{pmatrix}$.`,
    counterexample: R`<b>Confusion with the inverse:</b> new vectors in old coordinates: $\tilde x_1 = (1,0)$, $\tilde x_2 = (1,1)$ gives $\begin{pmatrix}1&1\\0&1\end{pmatrix} = (\tilde\alpha_i^j)$ – this is the matrix for $\tilde{\mathcal{B}}_V\to\mathcal{B}_V$, i.e. $(\alpha_i^j)^{-1}$. If one uses it for $\mathcal{B}_V\to\tilde{\mathcal{B}}_V$, one gets for $(3,5)$ the wrong “coordinates” $(8,5)$: $8\tilde x_1+5\tilde x_2 = (13,5)\neq(3,5)$.`
  },
  "la8_lemma_8_0": {
    title: "Lemma 8.0: Converting coordinates (μᵢ)ₙ = (αᵢʲ)ₙⁿ · (λⱼ)ₙ",
    category: "8a Change-of-basis matrices",
    type: "lemma",
    front: R`State and prove <b>Lemma 8.0</b>: how does one obtain the new coordinates $\mu_i$ from the old ones $\lambda_j$?`,
    back: R`<b>Lemma 8.0:</b> If $x = \sum_{j=1}^n\lambda_j\cdot x_j = \sum_{i=1}^n\mu_i\cdot\tilde x_i$, then
$$(\mu_i)_n = (\alpha_i^j)_n^n\cdot(\lambda_j)_n,\qquad\text{i.e.}\quad\begin{pmatrix}\mu_1\\\vdots\\\mu_n\end{pmatrix} = \begin{pmatrix}\alpha_1^1&\cdots&\alpha_1^n\\\vdots&\ddots&\vdots\\\alpha_n^1&\cdots&\alpha_n^n\end{pmatrix}\cdot\begin{pmatrix}\lambda_1\\\vdots\\\lambda_n\end{pmatrix}.$$
<b>Proof:</b>
$$\underbrace{\sum_{j=1}^n\lambda_j\cdot x_j}_{=x} = \sum_{j=1}^n\lambda_j\cdot\underbrace{\sum_{i=1}^n\alpha_i^j\cdot\tilde x_i}_{=x_j} = \sum_{j=1}^n\sum_{i=1}^n(\lambda_j\cdot\alpha_i^j)\cdot\tilde x_i = \sum_{i=1}^n\underbrace{\Big(\sum_{j=1}^n\lambda_j\cdot\alpha_i^j\Big)}_{=\mu_i}\cdot\tilde x_i.$$
Because the coordinates are unique, $\mu_{i_0} = \sum_{j=1}^n\lambda_j\cdot\alpha_{i_0}^j$ for every $1\le i_0\le n$, so $(\mu_i)_n = (\alpha_i^j)_n^n\cdot(\lambda_j)_n$.`,
    meta: "Script: Ch. 8, Lemma 8.0 with proof and illustration",
    explanation: R`<b>Core of the proof:</b> one substitutes the representation of the old basis vectors into the old coordinate representation and rearranges by the new basis vectors (interchanging sums). That is exactly “matrix times vector”.<br><br>
<b>As a special case of Chapter 7:</b> $(\alpha_i^j) = A_\iota$ (identity from $(V,\mathcal{B}_V)$ to $(V,\tilde{\mathcal{B}}_V)$), and $A_\iota\cdot(\text{coord. of }x) = (\text{coord. of }\iota(x) = x)$ – only now with respect to the new basis.<br><br>
<b>Important: “opposite directions”</b> (Stammbach II.8.1): the <b>basis vectors</b> are expressed old-by-new, but the <b>coordinates</b> are computed new-by-old. Note the different summation indices ($\sum_i$ for the bases, $\sum_j$ for the coordinates).`,
    example: R`With $(\alpha_i^j) = \begin{pmatrix}1&-1\\0&1\end{pmatrix}$ (old $\{e_1,e_2\}$, new $\{(1,0),(1,1)\}$) and $x = (3,5) = 3e_1+5e_2$:
$$\begin{pmatrix}1&-1\\0&1\end{pmatrix}\begin{pmatrix}3\\5\end{pmatrix} = \begin{pmatrix}-2\\5\end{pmatrix}.$$
Check: $-2\cdot(1,0)+5\cdot(1,1) = (3,5)$ ✓.`,
    counterexample: R`<b>Rows instead of columns:</b> if one reads the coefficients $x_j = \sum_i\alpha_i^j\tilde x_i$ as <b>rows</b>, one computes with the transpose $\begin{pmatrix}1&0\\-1&1\end{pmatrix}$ and gets $(3,2)$; but $3\cdot(1,0)+2\cdot(1,1) = (5,2)\neq(3,5)$.`
  },
  "la8_inverse": {
    title: "Claim: The two change-of-basis matrices are inverse to each other",
    category: "8a Change-of-basis matrices",
    type: "proposition",
    front: R`Show: $(\alpha_i^j)_n^n\cdot(\tilde\alpha_i^j)_n^n = (\tilde\alpha_i^j)_n^n\cdot(\alpha_i^j)_n^n = I_n$. What is $I_n$?`,
    back: R`$I_n$ denotes the $(n\times n)$ <b>identity matrix</b> $\begin{pmatrix}1&0&\cdots&0\\0&1&\cdots&0\\\vdots&&\ddots&\vdots\\0&0&\cdots&1\end{pmatrix} = (\delta_i^j)_n^n$.<br><br>
<b>Proof:</b> If $x = \sum_j\lambda_jx_j$, Lemma 8.0 gives the new coordinates $(\mu_i) = (\alpha_i^j)(\lambda_j)$. Applying Lemma 8.0 in the opposite direction gives back the old ones: $(\lambda_j) = (\tilde\alpha_i^j)(\mu_i)$. Hence
$$(\lambda_j)_n = (\tilde\alpha_i^j)_n^n\cdot(\alpha_i^j)_n^n\cdot(\lambda_j)_n\quad\text{for all }(\lambda_j)_n\in K^n,$$
so $(\tilde\alpha_i^j)(\alpha_i^j) = I_n$. Because $M_{n\times n}(K)$ is a ring with identity $I_n$ (Exercise 32(a)), also $(\alpha_i^j)(\tilde\alpha_i^j) = I_n$.<br>
In particular $(\tilde\alpha_i^j)_n^n = \big((\alpha_i^j)_n^n\big)^{-1}$.`,
    meta: "Script: Ch. 8, claim after Lemma 8.0 with proof",
    explanation: R`<b>Intuition:</b> converting from old to new and then back from new to old gives the original coordinates – “going there and back = doing nothing”. In the language of Chapter 7: $A_\iota\cdot A_\iota = A_{\iota\circ\iota} = A_\iota = I_n$ (with suitable bases).<br><br>
<b>On the second equation:</b> the script's justification (“because $M_{n\times n}(K)$ is a ring”) can also be seen directly: swapping the roles of the bases, the same argument gives $(\alpha_i^j)(\tilde\alpha_i^j) = I_n$ (Stammbach II.8.7).<br><br>
<b>Consequence:</b> change-of-basis matrices are always <b>invertible</b> (regular). Conversely, every invertible $(n\times n)$ matrix is the matrix of a change of basis (Stammbach II.8.7).`,
    example: R`$(\alpha_i^j) = \begin{pmatrix}1&-1\\0&1\end{pmatrix}$, $(\tilde\alpha_i^j) = \begin{pmatrix}1&1\\0&1\end{pmatrix}$: $\begin{pmatrix}1&-1\\0&1\end{pmatrix}\begin{pmatrix}1&1\\0&1\end{pmatrix} = \begin{pmatrix}1&0\\0&1\end{pmatrix}$ ✓.<br>
Lagrange example (next cards): $A\cdot B = B\cdot A = I_3$.`,
    counterexample: R`<b>Not every matrix is a change-of-basis matrix:</b> $\begin{pmatrix}1&2\\2&4\end{pmatrix}$ has no inverse – its columns $(1,2),(2,4)$ are linearly dependent, so they cannot be the coordinates of a basis.<br>
<b>Inverse ≠ entrywise reciprocal:</b> $\begin{pmatrix}1&2\\1&3\end{pmatrix}^{-1} = \begin{pmatrix}3&-2\\-1&1\end{pmatrix}$ (check: product $= I_2$), not $\begin{pmatrix}1&\frac12\\1&\frac13\end{pmatrix}$.`
  },
  // ========================================================================
  // 8b LAGRANGE INTERPOLATION
  // ========================================================================
  "la8_lagrange_basis": {
    title: "Lagrange interpolation polynomials as a basis",
    category: "8b Lagrange interpolation",
    type: "definition",
    front: R`How are the <b>Lagrange polynomials</b> $L_0,\dots,L_{n-1}$ defined for pairwise distinct nodes $x_0,\dots,x_{n-1}$? Why do they form a basis of the polynomial functions of degree $\le n-1$, and what are the coordinates of a polynomial with respect to this basis?`,
    back: R`$$L_i(x) := \prod_{j\neq i}\frac{x-x_j}{x_i-x_j}\qquad\text{with}\qquad L_i(x_j) = \delta_i^j.$$
Each $L_i$ has degree $n-1$, is $1$ at its own node and $0$ at all others.<br><br>
<b>Basis:</b> if $\sum_i\lambda_iL_i = 0$, then substituting $x_j$ gives $\lambda_j = 0$ ⇒ linearly independent; $n$ linearly independent vectors in an $n$-dimensional space ⇒ basis (Theorem 4.6).<br>
<b>Coordinates = function values:</b>
$$p = \sum_{i=0}^{n-1}p(x_i)\cdot L_i.$$
Thus <b>interpolation</b> is trivial: the polynomial of degree $\le n-1$ with values $\lambda_i$ at the points $x_i$ is $\sum_i\lambda_iL_i$.`,
    meta: "Script: Mathematica notebooks “Lagrange_Interpolationspolynome1/2.nb” (after Ch. 7)",
    explanation: R`<b>Two bases, two points of view</b> on the same space:<br>
• <b>Monomial basis</b> $\{1,x,\dots,x^{n-1}\}$: coordinates = coefficients.<br>
• <b>Lagrange basis</b> $\mathcal{L}$: coordinates = function values at the nodes.<br>
The change of basis between them is “coefficients ↔ values”: from monomials to $\mathcal{L}$ is called <b>evaluating</b>, from $\mathcal{L}$ to monomials is called <b>interpolating</b>.<br><br>
<b>The δ principle:</b> $L_i(x_j) = \delta_i^j$ has the same structure as the dual basis ($x_i^*(x_j) = \delta_i^j$). Indeed the evaluation functionals $p\mapsto p(x_i)$ are exactly the dual basis of $\mathcal{L}$.<br><br>
Mathematica example: nodes $-3,-1,0,4,5$ and values $2,2,3,4,-1$ give $g = 3+\tfrac{131}{105}x+\tfrac{317}{1680}x^2-\tfrac{29}{420}x^3-\tfrac{17}{1680}x^4$.`,
    example: R`Nodes $0,1,2$: $L_0 = \tfrac{(x-1)(x-2)}{2} = 1-\tfrac32x+\tfrac12x^2$, $L_1 = \tfrac{x(x-2)}{-1} = 2x-x^2$, $L_2 = \tfrac{x(x-1)}{2} = -\tfrac12x+\tfrac12x^2$. Check: $L_1(0) = 0$, $L_1(1) = 1$, $L_1(2) = 0$ ✓.<br>
$f = 2+3x-x^2$: $f(0) = 2$, $f(1) = 4$, $f(2) = 4$ ⇒ $f = 2L_0+4L_1+4L_2$.`,
    counterexample: R`<b>Double node:</b> for $x_0 = x_1$ the denominator $x_0-x_1 = 0$ – $L_0$ is undefined. The nodes must be pairwise distinct.<br>
<b>Too many conditions:</b> through the 3 points $(0,1),(1,2),(2,-1)$ passes exactly one polynomial of degree $\le 2$ ($1+3x-2x^2$), but no line (degree $\le 1$): $1+x$ gives $(2,3)\neq(2,-1)$.`
  },
  "la8_bsp_lagrange_grad2": {
    title: "Example: Change of basis monomials ↔ Lagrange polynomials (degree ≤ 2)",
    category: "8b Lagrange interpolation",
    type: "beispiel",
    front: R`$V$ = real polynomial functions of degree $\le 2$, $\mathcal{B} = \{p_0,p_1,p_2\} = \{1,x,x^2\}$, $\mathcal{L} = \{L_0,L_1,L_2\}$ for the nodes $0,1,2$. Determine the change-of-basis matrices $A$ ($\mathcal{B}\to\mathcal{L}$) and $B$ ($\mathcal{L}\to\mathcal{B}$). Which polynomials are $A\cdot(2,3,-1)^t$ and $B\cdot(1,2,-1)^t$?`,
    back: R`<b>$\mathcal{B}\to\mathcal{L}$:</b> write the old basis $p_j$ in $\mathcal{L}$ – the coordinates are the values $p_j(0),p_j(1),p_j(2)$:
$$A = \begin{pmatrix}1&0&0\\1&1&1\\1&2&4\end{pmatrix}\quad(\text{columns }p_0,p_1,p_2;\;\text{rows }L_0,L_1,L_2).$$
<b>$\mathcal{L}\to\mathcal{B}$:</b> $L_0 = 1-\tfrac32x+\tfrac12x^2$, $L_1 = 0+2x-x^2$, $L_2 = 0-\tfrac12x+\tfrac12x^2$:
$$B = \begin{pmatrix}1&0&0\\-\tfrac32&2&-\tfrac12\\\tfrac12&-1&\tfrac12\end{pmatrix},\qquad A\cdot B = B\cdot A = I_3.$$
<b>Applications:</b> $A\begin{pmatrix}2\\3\\-1\end{pmatrix} = \begin{pmatrix}2\\4\\4\end{pmatrix}$: $2+3x-x^2 = 2L_0+4L_1+4L_2$.<br>
$B\begin{pmatrix}1\\2\\-1\end{pmatrix} = \begin{pmatrix}1\\3\\-2\end{pmatrix}$: the polynomial of degree $\le 2$ with values $1,2,-1$ at $0,1,2$ is $1+3x-2x^2$.`,
    meta: "Script: Ch. 8, example (KW 46, day 2) with Zu.Inf.",
    explanation: R`<b>Zu.Inf. (script):</b> “The coefficients with respect to $\mathcal{L}$ are exactly the function values at the nodes $0,1,2$. So the matrix $A$ computes <b>coefficients → values</b>, the matrix $B$ computes <b>values → coefficients</b> (interpolation).”<br><br>
<b>Structure of $A$:</b> row $i$ is $(1,x_i,x_i^2)$ – a <b>Vandermonde matrix</b>. “$A$ times coefficient vector” evaluates the polynomial at all nodes simultaneously.<br><br>
<b>Check of $B$:</b> column $j$ of $B$ = coefficients of $L_j$; therefore $A\cdot(\text{column }j\text{ of }B)$ must give the values of $L_j$ at $0,1,2$, i.e. $e_j$ – that is $AB = I_3$.`,
    example: R`Check for $1+3x-2x^2$: values $1$, $1+3-2 = 2$, $1+6-8 = -1$ ✓.<br>
Further: values $(0,1,4)$ ⇒ $B(0,1,4)^t = (0,\,2-2,\,-1+2)^t = (0,0,1)^t$, i.e. $x^2$ ✓ (of course: $x^2$ has the values $0,1,4$ at $0,1,2$).`,
    counterexample: R`<b>Matrix used the wrong way round:</b> $B\cdot(2,3,-1)^t$ (inserting coefficients instead of values) gives $(2,\,-3+6+\tfrac12,\,1-3-\tfrac12)^t = (2,\tfrac72,-\tfrac52)^t$ – the polynomial $2+\tfrac72x-\tfrac52x^2$ has values $2,3,-1$ and has nothing to do with $2+3x-x^2$.`
  },
  "la8_bsp_taylor": {
    title: "Example (Stammbach): Taylor basis 1, x−c, (x−c)², …",
    category: "8b Lagrange interpolation",
    type: "beispiel",
    front: R`For polynomials of degree $\le 3$ let $\alpha_k = x^{k-1}$ (monomials) and $\beta_k = (x-c)^{k-1}$. What does the change-of-basis matrix look like, and why are the new coordinates of $p$ exactly $p(c),p'(c),\tfrac{p''(c)}{2!},\tfrac{p'''(c)}{3!}$?`,
    back: R`Old in new basis: $x = (x-c)+c$, $x^2 = ((x-c)+c)^2$, … gives
$$(\alpha_i^j) = \begin{pmatrix}1&c&c^2&c^3\\0&1&2c&3c^2\\0&0&1&3c\\0&0&0&1\end{pmatrix}.$$
For $p = a_1+a_2x+a_3x^2+a_4x^3 = b_1+b_2(x-c)+b_3(x-c)^2+b_4(x-c)^3$, Lemma 8.0 gives
$$b_1 = a_1+a_2c+a_3c^2+a_4c^3 = p(c),\;\; b_2 = a_2+2a_3c+3a_4c^2 = p'(c),\;\; b_3 = a_3+3a_4c = \tfrac{p''(c)}{2!},\;\; b_4 = a_4 = \tfrac{p'''(c)}{3!}.$$`,
    meta: "Stammbach II.8.2.2 (supplementary example to Ch. 8 / Lemma 8.0)",
    explanation: R`<b>Taylor expansion as a change of basis:</b> “expanding a polynomial around the point $c$” means nothing other than representing it in the basis $\{1,(x-c),(x-c)^2,\dots\}$. That the coordinates are the (scaled) derivatives is seen by differentiating $\sum b_k(x-c)^{k-1}$ and substituting $x = c$ – all terms except one vanish (again the δ principle).<br><br>
<b>Matrix:</b> the columns contain binomial coefficients times powers of $c$ (binomial theorem); the matrix is upper triangular with ones on the diagonal – so always invertible (inverse: the same matrix with $-c$ instead of $c$).`,
    example: R`$p = 1+2x+3x^2$, $c = 1$: $p(1) = 6$, $p'(1) = 2+6 = 8$, $\tfrac{p''(1)}{2} = 3$ ⇒ $p = 6+8(x-1)+3(x-1)^2$. Check: $6+8x-8+3x^2-6x+3 = 1+2x+3x^2$ ✓.<br>
With the matrix ($n = 3$): $\begin{pmatrix}1&1&1\\0&1&2\\0&0&1\end{pmatrix}\begin{pmatrix}1\\2\\3\end{pmatrix} = \begin{pmatrix}6\\8\\3\end{pmatrix}$ ✓.`,
    counterexample: R`<b>Wrong assumption “the coefficients stay the same”:</b> $1+2x+3x^2\neq 1+2(x-1)+3(x-1)^2 = 2-4x+3x^2$. A change of basis almost always changes the coordinates.<br>
<b>Not a polynomial:</b> for $e^x$ the “coordinate list” with respect to $\{(x-c)^k\}$ is infinite – no finite linear combination, so it is not in the polynomial space.`
  },
  // ========================================================================
  // 8c REPRESENTING MATRIX UNDER CHANGE OF BASIS
  // ========================================================================
  "la8_satz_8_1": {
    title: "Theorem 8.1: Ã_φ = B_W · A_φ · B_V⁻¹",
    category: "8c Representing matrix under change of basis",
    type: "satz",
    front: R`State <b>Theorem 8.1</b>: how does the representing matrix of $\varphi\in\mathrm{Hom}(V,W)$ change when one changes the basis in $V$ and $W$? Prove it with a diagram.`,
    back: R`<b>Theorem 8.1:</b> Let $V,W$ be VS over $K$ of dimension $n$ resp. $m$, $\mathcal{B}_V,\tilde{\mathcal{B}}_V$ bases of $V$ and $\mathcal{B}_W,\tilde{\mathcal{B}}_W$ bases of $W$. Let $B_V = (\alpha_i^j)_n^n$ and $B_W = (\beta_i^j)_m^m$ be the change-of-basis matrices for $\mathcal{B}_V\to\tilde{\mathcal{B}}_V$ resp. $\mathcal{B}_W\to\tilde{\mathcal{B}}_W$. Further let $\varphi\in\mathrm{Hom}(V,W)$ have representing matrix $A_\varphi$ with respect to $\mathcal{B}_V$ and $\mathcal{B}_W$. Then for the representing matrix $\tilde A_\varphi$ with respect to $\tilde{\mathcal{B}}_V$ and $\tilde{\mathcal{B}}_W$:
$$\boxed{\tilde A_\varphi = B_W\cdot A_\varphi\cdot B_V^{-1}}\qquad(\text{so }A_\varphi = B_W^{-1}\cdot\tilde A_\varphi\cdot B_V).$$
<b>Proof:</b> For $x\in V$, $y\in W$, Lemma 8.0 gives $x_{\tilde{\mathcal{B}}_V} = B_V\cdot x_{\mathcal{B}_V}$ and $y_{\tilde{\mathcal{B}}_W} = B_W\cdot y_{\mathcal{B}_W}$. In the diagram
$$\begin{array}{ccc}x_{\tilde{\mathcal{B}}_V}&\xrightarrow{\;\tilde A_\varphi\;}&\varphi(x)_{\tilde{\mathcal{B}}_W}\\ {\scriptstyle B_V}\uparrow&&\uparrow{\scriptstyle B_W}\\ x_{\mathcal{B}_V}&\xrightarrow{\;A_\varphi\;}&\varphi(x)_{\mathcal{B}_W}\end{array}$$
both paths lead to the coordinates of $\varphi(x)$ with respect to $\tilde{\mathcal{B}}_W$; it commutes, i.e. $\tilde A_\varphi\cdot B_V = B_W\cdot A_\varphi$, hence $\tilde A_\varphi = B_W\cdot A_\varphi\cdot B_V^{-1}$.`,
    meta: "Script: Ch. 8, Theorem 8.1 with proof; Mathematica “Basiswechsel.nb”",
    explanation: R`<b>Read from right to left</b> (as with compositions): given new coordinates $x_{\tilde{\mathcal{B}}_V}$:<br>
1. $B_V^{-1}$: back to old coordinates,<br>
2. $A_\varphi$: apply the map (in old coordinates),<br>
3. $B_W$: convert the result to new coordinates.<br><br>
<b>Special case of a self-map</b> ($V = W$, same basis at start and target): $\tilde A_\varphi = B\cdot A_\varphi\cdot B^{-1}$ – “similarity” of matrices. The aim is often to choose $B$ so that $\tilde A_\varphi$ becomes <b>diagonal</b> (eigenbasis, cf. Mathematica example $\mathrm{diag}(-2,2,0)$ and $M_{\mathrm{Fib}}$).<br><br>
<b>Mathematica example (dim 5 → 4):</b> a full $4\times 5$ matrix $A_\varphi$ becomes, through suitable bases, $\tilde A_\varphi = \begin{pmatrix}2&1&0&0&0\\0&2&0&0&0\\0&0&-1&0&0\\0&0&0&0&0\end{pmatrix}$, and $B_W^{-1}\tilde A_\varphi B_V = A_\varphi$ goes back.`,
    example: R`$V = W = \mathbb{R}^2$, $A_\varphi = \begin{pmatrix}2&1\\0&3\end{pmatrix}$ (standard basis), new basis $\{(1,0),(1,1)\}$ at start and target: $B_V = B_W = \begin{pmatrix}1&-1\\0&1\end{pmatrix}$, $B_V^{-1} = \begin{pmatrix}1&1\\0&1\end{pmatrix}$.
$$\tilde A_\varphi = \begin{pmatrix}1&-1\\0&1\end{pmatrix}\begin{pmatrix}2&1\\0&3\end{pmatrix}\begin{pmatrix}1&1\\0&1\end{pmatrix} = \begin{pmatrix}2&0\\0&3\end{pmatrix}.$$
Check: $\varphi(1,0) = (2,0) = 2\cdot(1,0)$, $\varphi(1,1) = (3,3) = 3\cdot(1,1)$ ✓.`,
    counterexample: R`<b>Wrong order / missing inverse:</b> $B_V\cdot A_\varphi\cdot B_V = \begin{pmatrix}2&-4\\0&3\end{pmatrix}$ and $B_V^{-1}A_\varphi B_V = \begin{pmatrix}2&2\\0&3\end{pmatrix}$ – both wrong (the second is the matrix with respect to a <i>different</i> change of basis). Only $B_W A_\varphi B_V^{-1}$ gives $\mathrm{diag}(2,3)$.`
  },
  "la8_rezept_satz_8_1": {
    title: "Recipe: Compute the new representing matrix directly (without the formula)",
    category: "8c Representing matrix under change of basis",
    type: "beispiel",
    front: R`How does one determine $\tilde A_\varphi$ with respect to new bases “by hand” (without $B_W A_\varphi B_V^{-1}$), and how does one check the result? Apply it to $\varphi:\mathbb{R}^3\to\mathbb{R}^2$ with $A_\varphi = \begin{pmatrix}1&0&1\\1&-1&2\end{pmatrix}$ (standard bases), $\tilde{\mathcal{B}}_V = \{(1,0,0),(1,1,0),(1,1,1)\}$, $\tilde{\mathcal{B}}_W = \{(1,1),(1,0)\}$.`,
    back: R`<b>Recipe:</b> (1) Write the new basis vectors of $V$ in old coordinates. (2) Apply $A_\varphi$. (3) Express the images in the new basis of $W$ → these are the columns of $\tilde A_\varphi$.<br><br>
<b>Application</b> (Stammbach III.5.5):<br>
$A_\varphi(1,0,0)^t = (1,1)^t = 1\cdot(1,1)+0\cdot(1,0)$;<br>
$A_\varphi(1,1,0)^t = (1,0)^t = 0\cdot(1,1)+1\cdot(1,0)$;<br>
$A_\varphi(1,1,1)^t = (2,2)^t = 2\cdot(1,1)+0\cdot(1,0)$.
$$\tilde A_\varphi = \begin{pmatrix}1&0&2\\0&1&0\end{pmatrix}.$$
<b>With Theorem 8.1:</b> $B_W$ = old in new: $e_1 = (1,0)$ = $0\cdot(1,1)+1\cdot(1,0)$, $e_2 = (1,1)-(1,0)$ ⇒ $B_W = \begin{pmatrix}0&1\\1&-1\end{pmatrix}$; $B_V^{-1}$ = new in old coordinates $= \begin{pmatrix}1&1&1\\0&1&1\\0&0&1\end{pmatrix}$; $B_WA_\varphi B_V^{-1}$ gives the same matrix.`,
    meta: "Supplement to Theorem 8.1 (Stammbach III.5.5; script: Mathematica example after Theorem 7.6)",
    explanation: R`The recipe is simply the <b>definition of the representing matrix</b> (columns = images of the basis vectors in coordinates of the target basis), applied to the new bases. Theorem 8.1 is its compact matrix form: $B_V^{-1}$ provides step (1), $A_\varphi$ step (2), $B_W$ step (3).<br><br>
<b>Remember for $B_V^{-1}$:</b> the matrix whose columns are the <b>new</b> basis vectors in <b>old</b> coordinates is $B_V^{-1}$ (= change of basis $\tilde{\mathcal{B}}_V\to\mathcal{B}_V$). It is usually the one that one can write down directly – that is why the inverse appears in Theorem 8.1.`,
    example: R`Check with a vector: $x = 2\cdot(1,0,0)+0\cdot(1,1,0)+1\cdot(1,1,1) = (3,1,1)$. Old: $\varphi(x) = A_\varphi(3,1,1)^t = (4,4)^t$. New: $\tilde A_\varphi(2,0,1)^t = (4,0)^t$, i.e. $4\cdot(1,1)+0\cdot(1,0) = (4,4)$ ✓.`,
    counterexample: R`<b>Images in old instead of new coordinates:</b> if in step (3) one writes the images $(1,1),(1,0),(2,2)$ directly as columns, one gets $\begin{pmatrix}1&1&2\\1&0&2\end{pmatrix} = A_\varphi B_V^{-1}$ – the matrix with respect to $(\tilde{\mathcal{B}}_V,\mathcal{B}_W)$, not with respect to $(\tilde{\mathcal{B}}_V,\tilde{\mathcal{B}}_W)$.`
  }
};
})();
