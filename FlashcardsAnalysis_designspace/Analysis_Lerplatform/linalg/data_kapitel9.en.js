/* ==========================================================================
   LINEAR ALGEBRA I – CHAPTER 9 (English): The bidual space and the dual map
   (V**, Theorem 9.0, φ*, Theorem 9.1, transpose, Theorem 9.1 A_φ* = (A_φ)ᵗ)
   Linear Algebra I – Prof. Dr. Lorenz Halbeisen, HS 2026
   English translation of data_kapitel9.js. Formulas, HTML and ids are identical.
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_EN_KAPITEL_9 = {
  // ========================================================================
  // 9a THE BIDUAL SPACE
  // ========================================================================
  "la9_def_bidual": {
    title: "Definition: Bidual space V**",
    category: "9a The bidual space",
    type: "definition",
    front: R`What is the <b>bidual space</b> $V^{**}$ of a VS $V$ over $K$, and which element $x^{**}\in V^{**}$ belongs naturally to $x\in V$?`,
    back: R`If $V$ is a VS over $K$, then $V^* = \mathrm{Hom}(V,K)$ is also a VS over $K$, and hence $\mathrm{Hom}(V^*,K)$ is also a VS over $K$.<br><br>
<b>Definition:</b> The vector space $\mathrm{Hom}(V^*,K)$ is called the <b>bidual space</b> of $V$ and is denoted by $V^{**}$.<br><br>
To $x\in V$ belongs the functional on functionals
$$x^{**}: V^*\to K,\qquad x^{**}(y^*) := y^*(x),$$
“<b>evaluation at the point $x$</b>”.`,
    meta: "Script: Ch. 9, introduction and definition of the bidual space",
    explanation: R`<b>Swapping the roles:</b> normally the functional $y^*$ is the tool and $x$ the object: $y^*(x)$. For the bidual one reverses this: <b>$x$ becomes the tool</b>, which evaluates every functional “on itself”. The expression $y^*(x)$ is symmetric in its roles – one can read it as a function of $x$ (with $y^*$ fixed) or as a function of $y^*$ (with $x$ fixed).<br><br>
<b>Zu.Inf. (script):</b> the pairing $V^*\times V\to K$, $(y^*,x)\mapsto y^*(x)$ is linear in both arguments (<b>bilinear</b>). Linearity in $y^*$ gives $x^{**}\in V^{**}$, linearity in $x$ gives the linearity of $x\mapsto x^{**}$.<br><br>
<b>In coordinates</b> ($V\cong K^n$): vectors are columns, functionals rows, $y^*(x)$ = row times column. $x^{**}$ is then “the column $x$, which is multiplied from the right onto rows”.`,
    example: R`$V = \mathbb{R}^2$, $x = (2,5)$, $\{e_1^*,e_2^*\}$ the dual basis. For $y^* = 3e_1^*-e_2^*$ we have $x^{**}(y^*) = y^*(x) = 3\cdot 2-5 = 1$; for $y^* = e_2^*$ we have $x^{**}(e_2^*) = 5$.<br>
$V$ = polynomials, $p = 1+x^2$: $p^{**}(\mathrm{ev}_3) = \mathrm{ev}_3(p) = 10$, $p^{**}(\int_0^1) = \tfrac43$.`,
    counterexample: R`<b>Not every element of $V^{**}$ has this form if $V$ is infinite-dimensional:</b> for $c_{00}(\mathbb{F}_2)$ the map $x\mapsto x^{**}$ is injective, but not surjective (remark after Theorem 9.0) – there $V^{**}$ is even larger than $V^*$.<br>
<b>$x^{**}$ is not $x^*$:</b> $x^*$ (an element of a dual basis) needs a whole basis and lies in $V^*$; $x^{**}$ needs no basis and lies in $V^{**}$.`
  },
  "la9_satz_9_0": {
    title: "Theorem 9.0: V → V**, x ↦ x** is a (canonical) isomorphism",
    category: "9a The bidual space",
    type: "satz",
    front: R`State <b>Theorem 9.0</b>. What is special about this isomorphism compared with $V\cong V^*$?`,
    back: R`<b>Theorem 9.0:</b> If $V$ is a finite-dimensional VS over $K$, then the map
$$\varphi: V\to V^{**},\qquad x\mapsto x^{**},\qquad\text{defined by}\quad x^{**}(y^*) := y^*(x),$$
is an <b>isomorphism</b> from $V$ into the bidual space $V^{**}$.<br><br>
So the vectors of $V$ can be regarded, in a natural way, as vectors of $V^{**}$; $\varphi$ is a <b>canonical isomorphism</b> between $V$ and $V^{**}$.<br>
<b>Remark:</b> For infinite-dimensional VS, $\varphi$ is still injective, but no longer surjective.`,
    meta: "Script: Ch. 9, Theorem 9.0 and remark",
    explanation: R`<b>“Canonical” = without a choice.</b> $V\cong V^*$ does hold (same dimension, Theorem 6.2), but every isomorphism $V\to V^*$ depends on a chosen basis (e.g. $x_i\mapsto x_i^*$, and $x_i^*$ depends on the whole basis). $x\mapsto x^{**}$, on the other hand, is defined the same way for every VS – there is nothing to choose.<br><br>
<b>Consequence:</b> one may <b>identify</b> $V$ and $V^{**}$. Then e.g. $\varphi^{**} = \varphi$ and $(A^t)^t = A$ (remark after the transpose): dualising twice leads back.<br><br>
<b>Proof structure</b> (next card): (1) $x^{**}\in V^{**}$, (2) $\varphi$ linear, (3) surjective, (4) injective – (3) and (4) with a pair of dual bases; there one needs finite dimension.`,
    example: R`$V = \mathbb{R}^2$: with the dual basis $\{e_1^*,e_2^*\}$ and its dual basis $\{e_1^{**},e_2^{**}\}\subseteq V^{**}$ we have $e_i^{**}(e_j^*) = e_j^*(e_i) = \delta_j^i$ – so $e_i^{**}$ is exactly the image of $e_i$ under $\varphi$. E.g. $(2,5)^{**} = 2e_1^{**}+5e_2^{**}$.`,
    counterexample: R`<b>$V\to V^*$ is not canonical:</b> the “naturally looking” assignment $x\mapsto x^*$ depends on the basis: in $\{(1,0),(0,1)\}$ we have $(1,0)^*(a,b) = a$, in $\{(1,0),(1,1)\}$ we have $(1,0)^*(a,b) = a-b$ – the same vector, two different images.<br>
<b>Infinite case:</b> for $c_{00}(\mathbb{F}_2)$ we have $\dim(V)\lt\dim(V^*)\le\dim(V^{**})$, so $\varphi$ cannot be surjective.`
  },
  "la9_beweis_9_0": {
    title: "Proof of Theorem 9.0",
    category: "9a The bidual space",
    type: "beweis",
    front: R`Prove <b>Theorem 9.0</b>: $x^{**}\in V^{**}$, $\varphi: x\mapsto x^{**}$ is linear, surjective and injective (for finite-dimensional $V$).`,
    back: R`<b>• $x^{**}\in\mathrm{Hom}(V^*,K)$:</b>
$$x^{**}(\lambda y_1^*+y_2^*) = (\lambda y_1^*+y_2^*)(x) = \lambda y_1^*(x)+y_2^*(x) = \lambda x^{**}(y_1^*)+x^{**}(y_2^*)$$
(def. of $x^{**}$; def. of the VS operations in $V^*$, pointwise; def. of $x^{**}$), and $x^{**}(y^*) = y^*(x)\in K$.<br>
<b>• $\varphi$ linear:</b> $\varphi(\lambda x_1+x_2)(y^*) = y^*(\lambda x_1+x_2) = \lambda y^*(x_1)+y^*(x_2) = (\lambda\varphi(x_1)+\varphi(x_2))(y^*)$ ($y^*$ linear). [Also holds in the infinite-dimensional case.]<br>
Choose a pair of dual bases $\{x_1,\dots,x_n\}$, $\{x_1^*,\dots,x_n^*\}$.<br>
<b>• surjective:</b> let $f\in V^{**}$ with $f(x_j^*) = \lambda_j$. Then
$$\varphi\Big(\sum_i\lambda_ix_i\Big)(x_j^*) = \sum_i\lambda_i\,x_i^{**}(x_j^*) = \sum_i\lambda_i\underbrace{x_j^*(x_i)}_{=\delta_j^i} = \lambda_j,$$
so $\varphi(\sum\lambda_ix_i)$ agrees with $f$ on the basis $\{x_j^*\}$ ⇒ $\varphi(\sum\lambda_ix_i) = f$.<br>
<b>• injective:</b> $u = \sum\lambda_ix_i\neq v = \sum\mu_ix_i$ ⇒ $\lambda_j\neq\mu_j$ for some $j$ ⇒ $u^{**}(x_j^*) = \lambda_j\neq\mu_j = v^{**}(x_j^*)$ ⇒ $\varphi(u)\neq\varphi(v)$.`,
    meta: "Script: Ch. 9, proof of Theorem 9.0 with Zu.Inf. (justification of the equality signs)",
    explanation: R`<b>Every equality sign has one of three justifications:</b> (1) definition of $x^{**}$, (2) linearity of a functional, (3) pointwise definition of the VS operations in $V^*$ resp. $V^{**}$. Whoever distinguishes these three tools reliably can carry out all proofs in Ch. 9 by themselves.<br><br>
<b>Surjectivity – idea:</b> an element $f\in V^{**}$ is determined by its values on the basis $\{x_j^*\}$ of $V^*$. These values $\lambda_j$ are the coordinates of the sought preimage $\sum\lambda_jx_j$ – because $x_j^*$ reads off exactly the $j$-th coordinate.<br><br>
<b>Injectivity – idea:</b> different vectors differ in some coordinate, and the matching coordinate functional “sees” the difference. (Alternatively: injective + $\dim(V) = \dim(V^{**})$ ⇒ bijective.)`,
    example: R`$V = \mathbb{R}^2$, $f\in V^{**}$ with $f(e_1^*) = 4$, $f(e_2^*) = -1$. Preimage: $x = 4e_1-e_2 = (4,-1)$. Check for $y^* = 2e_1^*+3e_2^*$: $f(y^*) = 2\cdot 4+3\cdot(-1) = 5$ and $y^*(x) = 8-3 = 5$ ✓.`,
    counterexample: R`<b>Where finite dimension is needed:</b> in the surjectivity proof one forms $\sum_i\lambda_ix_i$ – with an infinite basis this would be an infinite sum, i.e. not a linear combination. For $c_{00}(\mathbb{F}_2)$ and $f\in V^{**}$ with $f(e_j^*) = 1$ for all $j$, the preimage would have to be $(1,1,1,\dots)$, which does not lie in $c_{00}$.`
  },
  // ========================================================================
  // 9b THE DUAL MAP
  // ========================================================================
  "la9_def_duale_abbildung": {
    title: "Definition: The dual map φ*",
    category: "9b The dual map and the transpose",
    type: "definition",
    front: R`How is the <b>dual map</b> $\varphi^*$ defined for $\varphi\in\mathrm{Hom}(V,W)$? In which spaces do the objects involved lie?`,
    back: R`If $V$ and $W$ are VS over the same field $K$ and $\varphi\in\mathrm{Hom}(V,W)$, then
$$\varphi^*: W^*\to V^*,\qquad y^*\mapsto\varphi^*(y^*),\qquad\text{defined by}\quad\big(\varphi^*(y^*)\big)(x) := y^*\big(\varphi(x)\big),$$
is the <b>dual map</b> of $\varphi$.<br><br>
<b>Zu.Inf.:</b> $\underbrace{(\underbrace{\varphi^*(\underbrace{y^*}_{\in W^*})}_{\in V^*})(\underbrace{x}_{\in V})}_{\in K} = \underbrace{y^*(\underbrace{\varphi(x)}_{\in W})}_{\in K}$.<br>
In short: $\varphi^*(y^*) = y^*\circ\varphi$ – “<b>first $\varphi$, then measure</b>”.`,
    meta: "Script: Ch. 9, definition of the dual map with Zu.Inf.",
    explanation: R`<b>The direction reverses!</b> $\varphi$ goes from $V$ to $W$, but $\varphi^*$ goes from $W^*$ to $V^*$. Reason: a measuring device $y^*$ on $W$ becomes a measuring device on $V$ by first transporting a vector $x\in V$ to $W$ with $\varphi$ and then measuring. One <b>pulls back</b> functionals.<br><br>
<b>Picture (Stammbach III.6.13):</b>
$V\xrightarrow{\varphi}W\xrightarrow{y^*}K$ – the composition $y^*\circ\varphi$ is a functional on $V$.<br><br>
<b>Consequences:</b> $(\psi\circ\varphi)^* = \varphi^*\circ\psi^*$ (the order reverses), and in matrices: $A_{\varphi^*} = (A_\varphi)^t$ (Theorem 9.1) – which explains $(AB)^t = B^tA^t$.`,
    example: R`$\varphi:\mathbb{R}^2\to\mathbb{R}^2$, $\varphi(a,b) = (a+b,2b)$; $y^* = f_{3,1}$, i.e. $y^*(u,v) = 3u+v$. Then
$$(\varphi^*(y^*))(a,b) = y^*(a+b,2b) = 3a+3b+2b = 3a+5b,$$
so $\varphi^*(f_{3,1}) = f_{3,5}$.`,
    counterexample: R`<b>Wrong direction:</b> $\varphi^*(x^*) := x^*\circ\varphi$ for $x^*\in V^*$ makes no sense if $V\neq W$: $\varphi(x)\in W$, but $x^*$ is only defined on $V$. For $\varphi:\mathbb{R}^3\to\mathbb{R}^2$, $\varphi^*:\mathbb{R}^{2*}\to\mathbb{R}^{3*}$ – from rows of length 2 to rows of length 3.<br>
<b>Not “$\varphi$ applied to the functional”:</b> $\varphi(y^*)$ is meaningless ($y^*\notin V$).`
  },
  "la9_satz_9_1_hom": {
    title: "Theorem 9.1: φ* ∈ Hom(W*, V*)",
    category: "9b The dual map and the transpose",
    type: "satz",
    front: R`Prove <b>Theorem 9.1</b>: if $\varphi\in\mathrm{Hom}(V,W)$, then $\varphi^*\in\mathrm{Hom}(W^*,V^*)$. What is the dual map of the zero map?`,
    back: R`<b>1. $\varphi^*$ is well defined</b> (i.e. $\varphi^*(y^*)\in V^*$):
$$\begin{aligned}(\varphi^*(y^*))(\lambda x_1+x_2) &= y^*(\varphi(\lambda x_1+x_2)) &&\text{def. of }\varphi^*\\&= y^*(\lambda\varphi(x_1)+\varphi(x_2)) &&\varphi\text{ is linear}\\&= \lambda y^*(\varphi(x_1))+y^*(\varphi(x_2)) &&y^*\text{ is linear}\\&= \lambda(\varphi^*(y^*))(x_1)+(\varphi^*(y^*))(x_2) &&\text{def. of }\varphi^*\end{aligned}$$
and $(\varphi^*(y^*))(x) = y^*(\varphi(x))\in K$.<br>
<b>2. $\varphi^*$ is linear:</b>
$$(\varphi^*(\lambda y_1^*+y_2^*))(x) = (\lambda y_1^*+y_2^*)(\varphi(x)) = \lambda y_1^*(\varphi(x))+y_2^*(\varphi(x)) = \lambda(\varphi^*(y_1^*))(x)+(\varphi^*(y_2^*))(x)$$
(def. of $\varphi^*$; def. of $+$ in $W^*$; def. of $\varphi^*$).<br>
<b>Remark:</b> If $\varphi$ is the zero map, then $\varphi^*$ is also the zero map: $(\varphi^*(y^*))(x) = y^*(0_W) = 0_K$ for all $x$.`,
    meta: "Script: Ch. 9, Theorem 9.1 (first part) with proof and remark",
    explanation: R`<b>Two linearities, two levels:</b><br>
1. For a <b>fixed</b> $y^*$, $\varphi^*(y^*) = y^*\circ\varphi$ is a composition of linear maps – linear by Theorem 7.2. (This is part 1.)<br>
2. As a function of $y^*$, $y^*\mapsto y^*\circ\varphi$ is linear, because the operations in $W^*$ are pointwise. (This is part 2.)<br><br>
One must always know <b>where</b> one is: part 1 checks linearity in $x\in V$, part 2 in $y^*\in W^*$. This double structure is the same as for the bidual (Theorem 9.0).`,
    example: R`With $\varphi(a,b) = (a+b,2b)$: $\varphi^*(f_{3,1}) = f_{3,5}$ and $\varphi^*(f_{1,0}) = f_{1,1}$ (since $(a+b)$). Linearity: $\varphi^*(f_{3,1}+2f_{1,0}) = \varphi^*(f_{5,1})$; $5(a+b)+2b = 5a+7b$, so $f_{5,7} = f_{3,5}+2f_{1,1}$ ✓.`,
    counterexample: R`<b>Non-linear $\varphi$:</b> for $\varphi(a) = a^2$ on $\mathbb{R}$ and $y^* = \mathrm{id}$, $y^*\circ\varphi: a\mapsto a^2$ is not a functional – part 1 fails (linearity of $\varphi$ is needed).<br>
<b>Non-linear “functional”:</b> for $g(u) = u+1$ in place of $y^*$, $g\circ\varphi$ would not be linear ($g\circ\varphi(0) = 1$).`
  },
  "la9_satz_9_1_matrix": {
    title: "Theorem 9.1: A_φ* = (A_φ)ᵗ – the matrix of the dual map is the transpose",
    category: "9b The dual map and the transpose",
    type: "satz",
    front: R`What does the representing matrix of $\varphi^*$ look like with respect to the dual bases? Derive $\eta_j^i = \mu_i^j$ and define the <b>transposed matrix</b>.`,
    back: R`Let $\{x_j\}$, $\{x_j^*\}$ and $\{y_i\}$, $\{y_i^*\}$ be pairs of dual bases, $A_\varphi = (\mu_i^j)_m^n$ (so $\varphi(x_j) = \sum_i\mu_i^jy_i$), and $A_{\varphi^*} = (\eta_j^i)_n^m$ the $(n\times m)$ matrix of $\varphi^*$ with respect to $\{y_i^*\}$, $\{x_j^*\}$, i.e. $\varphi^*(y_{i_0}^*) = \sum_j\eta_j^{i_0}x_j^*$.<br>
On the one hand: $(\varphi^*(y_{i_0}^*))(x_{j_0}) = \sum_j\eta_j^{i_0}x_j^*(x_{j_0}) = \eta_{j_0}^{i_0}$.<br>
On the other hand: $(\varphi^*(y_{i_0}^*))(x_{j_0}) = y_{i_0}^*(\varphi(x_{j_0})) = y_{i_0}^*\big(\sum_i\mu_i^{j_0}y_i\big) = \mu_{i_0}^{j_0}$.<br>
Hence $\boxed{\eta_j^i = \mu_i^j}$ for all $i,j$.<br><br>
<b>Definition:</b> the matrices $(\mu_i^j)_m^n$ and $(\eta_j^i)_n^m$ are <b>transposed</b> to each other (reflection in the diagonal).<br>
<b>Theorem 9.1:</b> For finite-dimensional $V,W$ and representing matrices with respect to two pairs of dual bases,
$$A_{\varphi^*} = (A_\varphi)^t.$$
<b>Remark:</b> With Theorem 9.0 ($x\leftrightarrow x^{**}$) we have $\varphi^{**} = \varphi$ and hence $(A^t)^t = A$.`,
    meta: "Script: Ch. 9, the matrix of the dual map, definition of transpose, example, remark, Theorem 9.1 (second part)",
    explanation: R`<b>Mental picture (Zu.Inf.):</b> in $A_\varphi$, column $j$ holds the image $\varphi(x_j)$ (coordinates with respect to $y_i$). In $A_{\varphi^*}$, column $i$ holds the image $\varphi^*(y_i^*)$ (coordinates with respect to $x_j^*$). In both cases the entry is the same number $y_i^*(\varphi(x_j))$ (Exercise sheet 8, 33) – only once at position (row $i$, column $j$), once at (row $j$, column $i$).<br><br>
<b>Rows ↔ columns intuitively:</b> a functional $y^*$ is a <b>row</b> $c$; $\varphi^*(y^*) = y^*\circ\varphi$ is the row $c\cdot A_\varphi$. If one writes functionals as columns (coordinates with respect to the dual basis), this becomes $A_\varphi^t\cdot c^t$.<br><br>
<b>Consequences:</b> $(AB)^t = B^tA^t$ (from $(\psi\circ\varphi)^* = \varphi^*\circ\psi^*$), $(A^t)^t = A$, $(A+B)^t = A^t+B^t$. (In the script both statements carry the number 9.1.)`,
    example: R`<b>Script:</b> $A = \begin{pmatrix}1&4\\2&5\\3&6\end{pmatrix}$ ⇒ $A^t = \begin{pmatrix}1&2&3\\4&5&6\end{pmatrix}$ (“$A$ transposed”).<br>
<b>Dual map:</b> $\varphi(a,b) = (a+b,2b)$: $A_\varphi = \begin{pmatrix}1&1\\0&2\end{pmatrix}$, $A_{\varphi^*} = \begin{pmatrix}1&0\\1&2\end{pmatrix}$; $A_{\varphi^*}\begin{pmatrix}3\\1\end{pmatrix} = \begin{pmatrix}3\\5\end{pmatrix}$ ↔ $\varphi^*(f_{3,1}) = f_{3,5}$ ✓.`,
    counterexample: R`<b>$(AB)^t\neq A^tB^t$:</b> $A = \begin{pmatrix}1&1\\0&1\end{pmatrix}$, $B = \begin{pmatrix}1&0\\1&1\end{pmatrix}$: $(AB)^t = \begin{pmatrix}2&1\\1&1\end{pmatrix}^t = \begin{pmatrix}2&1\\1&1\end{pmatrix} = B^tA^t$, but $A^tB^t = \begin{pmatrix}1&1\\1&2\end{pmatrix}$.<br>
<b>Without dual bases:</b> if one takes arbitrary (non-dual) bases for $V^*$ and $W^*$, then $A_{\varphi^*}$ is in general not $(A_\varphi)^t$.`
  },
  "la9_bsp_ableitung": {
    title: "Example: The derivative, its dual map and the integral ∫₀¹",
    category: "9b The dual map and the transpose",
    type: "beispiel",
    front: R`$V$ = real polynomial functions of degree $\le 3$ ($\mathcal{B}_V = \{p_0,\dots,p_3\} = \{1,x,x^2,x^3\}$), $W$ = degree $\le 2$ ($\mathcal{B}_W = \{q_0,q_1,q_2\}$), $\varphi(f) = f'$. Determine $A_\varphi$, $A_{\varphi^*}$ and $\varphi^*(\mathrm{int}_0^1)$ for $\mathrm{int}_0^1(f) := \int_0^1f(x)\,dx$.`,
    back: R`$\varphi(p_0) = 0$, $\varphi(p_1) = q_0$, $\varphi(p_2) = 2q_1$, $\varphi(p_3) = 3q_2$:
$$A_\varphi = \begin{pmatrix}0&1&0&0\\0&0&2&0\\0&0&0&3\end{pmatrix},\qquad A_{\varphi^*} = (A_\varphi)^t = \begin{pmatrix}0&0&0\\1&0&0\\0&2&0\\0&0&3\end{pmatrix}.$$
$\mathrm{int}_0^1\in W^*$ (linear), and since $\mathrm{int}_0^1(q_j) = \lambda_j$: $\lambda_0 = \int_0^11 = 1$, $\lambda_1 = \int_0^1x = \tfrac12$, $\lambda_2 = \int_0^1x^2 = \tfrac13$, so
$$\mathrm{int}_0^1 = 1\cdot q_0^*+\tfrac12q_1^*+\tfrac13q_2^*,\qquad A_{\varphi^*}\begin{pmatrix}1\\\frac12\\\frac13\end{pmatrix} = \begin{pmatrix}0\\1\\1\\1\end{pmatrix},$$
i.e. $\varphi^*(\mathrm{int}_0^1) = 0\cdot p_0^*+1\cdot p_1^*+1\cdot p_2^*+1\cdot p_3^*$.<br>
In general: $\big(\varphi^*(\mathrm{int}_0^1)\big)(f) = \mathrm{int}_0^1(f') = \int_0^1f'(x)\,dx$.`,
    meta: "Script: Ch. 9, Zu.Inf. (18.11.2026), accompanying example to Theorem 9.1",
    explanation: R`<b>What is $\varphi^*(\mathrm{int}_0^1)$ in content?</b> The functional “first differentiate, then integrate from $0$ to $1$”, i.e. by the fundamental theorem $f\mapsto f(1)-f(0)$. And indeed: $p_1^*+p_2^*+p_3^*$ sums the coefficients of $x,x^2,x^3$, and $f(1)-f(0) = a_1+a_2+a_3$ ✓.<br><br>
<b>Dual-basis functionals</b> read off coefficients: $p_2^*(2+3x^2+5x^3) = 3$; $(2p_1^*+7p_2^*)(1+x+2x^2) = 2\cdot 1+7\cdot 2 = 16$.<br><br>
The example shows all concepts of Chapters 6–9 at once: functional as a row, dual basis, dual map, transpose.`,
    example: R`$\big(\varphi^*(\mathrm{int}_0^1)\big)(2+3x+x^3) = 3+0+1 = 4$ (coefficients of $x,x^2,x^3$). Check: $\int_0^1(2+3x+x^3)'\,dx = \int_0^1(3+3x^2)\,dx = 3+1 = 4$ ✓; and $f(1)-f(0) = 6-2 = 4$ ✓.`,
    counterexample: R`<b>Using $A_\varphi$ instead of $A_{\varphi^*}$:</b> $A_\varphi$ is $3\times 4$ and expects vectors of length $4$ – with the coordinate vector $(1,\tfrac12,\tfrac13)^t$ (length 3) of $\mathrm{int}_0^1\in W^*$ it cannot be multiplied at all. Only $A_{\varphi^*}$ ($4\times 3$) maps $W^*$-coordinates (length 3) to $V^*$-coordinates (length 4).<br>
<b>$\varphi^*(\mathrm{int}_0^1)\neq\mathrm{int}_0^1$ on $V$:</b> $\int_0^1x^3dx = \tfrac14$, but $\varphi^*(\mathrm{int}_0^1)(x^3) = 1$.`
  }
};
})();
