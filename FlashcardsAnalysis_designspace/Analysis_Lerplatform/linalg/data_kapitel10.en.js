/* ==========================================================================
   LINEAR ALGEBRA I – CHAPTER 10 (English): Kernel, image and rank of a linear map
   (state of the script: up to CW 47, day 2 – definition of rank)
   Linear Algebra I – Prof. Dr. Lorenz Halbeisen, HS 2026
   English translation of data_kapitel10.js. Formulas, HTML and ids are identical.
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_EN_KAPITEL_10 = {
  "la10_bild_satz_10_1": {
    title: "Definition of image & Theorem 10.1: φ[V] is a subspace of W",
    category: "10a Kernel, image and rank",
    type: "satz",
    front: R`What is the <b>image</b> $\varphi[V]$ of $\varphi\in\mathrm{Hom}(V,W)$? Prove <b>Theorem 10.1</b>: $\varphi[V]$ is a subspace of $W$.`,
    back: R`In the following, $V,W$ are finite-dimensional VS over $K$.<br>
<b>Definition:</b> For $\varphi\in\mathrm{Hom}(V,W)$,
$$\varphi[V] := \{\varphi(x): x\in V\}\subseteq W$$
is called the <b>image</b> of $\varphi$, denoted by $\mathrm{Bild}(\varphi)$.<br><br>
<b>Theorem 10.1:</b> $\varphi[V]\subseteq W$ is a subspace of $W$.<br>
<b>Proof:</b> Since $\varphi(0_V) = 0_W$, we have $0_W\in\varphi[V]$. If $y_1,y_2\in\varphi[V]$, then there exist $x_1,x_2\in V$ with $\varphi(x_1) = y_1$, $\varphi(x_2) = y_2$, and because $\varphi$ is linear:
$$\varphi(\lambda x_1+\mu x_2) = \lambda\varphi(x_1)+\mu\varphi(x_2) = \lambda y_1+\mu y_2\in\varphi[V].$$
Hence $\langle\varphi[V]\rangle = \varphi[V]$, and $\varphi[V]$ is a subspace of $W$ (Lemma 5.0).`,
    meta: "Script: Ch. 10, definition of image, Theorem 10.1 with proof",
    explanation: R`<b>The image = everything that $\varphi$ “reaches”.</b> It is spanned by the images of a basis: $\varphi[V] = \langle\{\varphi(x_1),\dots,\varphi(x_n)\}\rangle$ – in matrix language the <b>column space</b> of $A_\varphi$ (Stammbach III.2.14, III.4.2).<br><br>
<b>Proof pattern</b> as in Ch. 5: $0$ lies in it, and linear combinations stay in it ⇒ Lemma 5.0. The key is that for points in the image one can choose <b>preimages</b>, combine these, and then use linearity.<br><br>
<b>Meaning for systems of equations:</b> $Ax = b$ is solvable exactly when $b$ lies in the image (column space). $\varphi$ is <b>surjective</b> exactly when $\varphi[V] = W$.`,
    example: R`<b>1.</b> $\varphi(x,y,z) = (x+y,y-z)$: $\varphi[\mathbb{R}^3] = \mathbb{R}^2$ (e.g. $(1,0) = \varphi(1,0,0)$ and $(0,1) = \varphi(0,1,0)-\varphi(1,0,0) = \varphi(-1,1,0)$).<br>
<b>2.</b> Mathematica example $B_\varphi = \mathrm{diag}(-2,2,0)$: $\varphi[\mathbb{R}^3] = \langle\{x_1,x_2\}\rangle = \langle\{(0,1,1),(1,1,0)\}\rangle$, a plane.<br>
<b>3.</b> Derivative $V_{\le 3}\to W_{\le 2}$: image = all of $W$ (every $a+bx+cx^2$ is the derivative of $ax+\tfrac b2x^2+\tfrac c3x^3$).`,
    counterexample: R`<b>1. Image of a non-linear map:</b> $x\mapsto(x,x^2)$ has the parabola as image – not a subspace.<br>
<b>2. Preimage is not a subspace:</b> $\{x: \varphi(x) = (1,0)\}$ for $\varphi(x,y,z) = (x+y,y-z)$ does not contain $0$ – an affine space, not a subspace.<br>
<b>3.</b> The image of $\mathrm{diag}(-2,2,0)$ is not $\mathbb{R}^3$: $x_3 = (1,0,1)$ is never hit.`
  },
  "la10_kern_satz_10_2": {
    title: "Definition of kernel & Theorem 10.2: Ker(φ) is a subspace of V",
    category: "10a Kernel, image and rank",
    type: "satz",
    front: R`What is the <b>kernel</b> $\mathrm{Ker}(\varphi)$ of $\varphi\in\mathrm{Hom}(V,W)$? Prove <b>Theorem 10.2</b>: $\mathrm{Ker}(\varphi)$ is a subspace of $V$.`,
    back: R`<b>Definition:</b> For $\varphi\in\mathrm{Hom}(V,W)$,
$$\{x\in V: \varphi(x) = 0_W\}\subseteq V$$
is called the <b>kernel</b> of $\varphi$, denoted by $\mathrm{Ker}(\varphi)$.<br><br>
<b>Theorem 10.2:</b> $\mathrm{Ker}(\varphi)\subseteq V$ is a subspace of $V$.<br>
<b>Proof:</b> Since $\varphi(0_V) = 0_W$, we have $0_V\in\mathrm{Ker}(\varphi)$. If $x_1,x_2\in\mathrm{Ker}(\varphi)$, i.e. $\varphi(x_1) = \varphi(x_2) = 0_W$, then
$$\varphi(\lambda x_1+\mu x_2) = \lambda\underbrace{\varphi(x_1)}_{=0_W}+\mu\underbrace{\varphi(x_2)}_{=0_W} = 0_W,$$
so $\lambda x_1+\mu x_2\in\mathrm{Ker}(\varphi)$. Hence $\langle\mathrm{Ker}(\varphi)\rangle = \mathrm{Ker}(\varphi)$ – a subspace of $V$.`,
    meta: "Script: Ch. 10, definition of kernel, Theorem 10.2 with proof; cf. Ch. 7 remark and Exercise sheet 5, Exercise 25(d)",
    explanation: R`<b>The kernel = everything that $\varphi$ “annihilates”</b> – the solution set of the <b>homogeneous</b> system $A_\varphi x = 0$. It measures how much information $\varphi$ loses.<br><br>
<b>Outlook (Stammbach III.2.9, not yet in the script):</b> $\varphi$ is <b>injective</b> exactly when $\mathrm{Ker}(\varphi) = \{0_V\}$. For $\varphi(u) = \varphi(v)\iff\varphi(u-v) = 0_W\iff u-v\in\mathrm{Ker}(\varphi)$. The preimage sets $\{x:\varphi(x) = y\}$ are exactly the affine spaces $x_0+\mathrm{Ker}(\varphi)$ – i.e. elements of $V/\mathrm{Ker}(\varphi)$ (Ch. 5).<br><br>
<b>Outlook, dimension formula</b> (Stammbach III.2.15): $\dim(\mathrm{Ker}(\varphi))+\mathrm{Rang}(\varphi) = \dim(V)$.`,
    example: R`<b>1.</b> (Stammbach III.2.17) $\varphi(x_1,\dots,x_4) = (x_1+2x_2-2x_4,\;-x_1+x_2-x_3,\;x_2+x_3+x_4)$: $\mathrm{Ker}(\varphi) = \langle\{(6,1,-5,4)\}\rangle$. Check: $(6+2-8,\,-6+1+5,\,1-5+4) = (0,0,0)$ ✓.<br>
<b>2.</b> $\varphi(x,y,z) = (x+y,y-z)$: $\mathrm{Ker}(\varphi) = \langle\{(-1,1,1)\}\rangle$.<br>
<b>3.</b> Ch. 7: $\mathrm{Ker}(\varphi)\ni 1-\sqrt 2+\sqrt 3$ in the root example; Exercise sheet 5: $N_f = \mathrm{Ker}(f)$.`,
    counterexample: R`<b>1.</b> $\{x: \varphi(x) = y_0\}$ for $y_0\neq 0_W$ is not a subspace ($0_V$ is missing).<br>
<b>2. Kernel ≠ “what goes to small values”:</b> for $\varphi(a,b) = (a,0)$ we have $\mathrm{Ker}(\varphi) = \{(0,b)\}$; $(0.001,5)$ does <b>not</b> lie in the kernel, although $\varphi(0.001,5)$ is “small”.<br>
<b>3.</b> Derivative on polynomials: $\mathrm{Ker}$ = constants $\neq\{0\}$ – so not injective ($x^2+1$ and $x^2+7$ have the same derivative).`
  },
  "la10_def_rang": {
    title: "Definition: Rank of a linear map",
    category: "10a Kernel, image and rank",
    type: "definition",
    front: R`How is the <b>rank</b> of $\varphi\in\mathrm{Hom}(V,W)$ defined, and which bound holds immediately?`,
    back: R`<b>Definition:</b> For $\varphi\in\mathrm{Hom}(V,W)$,
$$\dim(\varphi[V])\le\dim(W)$$
is called the <b>rank</b> of $\varphi$, denoted by $\mathrm{Rang}(\varphi)$.<br><br>
The inequality follows from Theorem 10.1 ($\varphi[V]$ is a subspace of $W$) and Lemma 5.1 (i). Likewise $\mathrm{Rang}(\varphi)\le\dim(V)$, since $\varphi[V]$ is spanned by the $n$ vectors $\varphi(x_1),\dots,\varphi(x_n)$.`,
    meta: "Script: Ch. 10, definition of rank (state: end of script, CW 47)",
    explanation: R`<b>Rank = “how many dimensions survive”</b> the map. It is <b>basis-independent</b> (the image is a subspace, whichever basis one takes) – so all representing matrices of the same map have the same rank (Stammbach III.4.3).<br><br>
<b>In matrix language</b> (outlook, Stammbach III.4.2): rank = maximal number of linearly independent <b>columns</b> of $A_\varphi$ = dimension of the column space. Later: row rank = column rank (because $\mathrm{Rang}(\varphi^*) = \mathrm{Rang}(\varphi)$, and $A_{\varphi^*} = A_\varphi^t$, Ch. 9).<br><br>
<b>Outlook, dimension formula:</b> $\mathrm{Rang}(\varphi)+\dim(\mathrm{Ker}(\varphi)) = \dim(V)$ – what does not vanish in the kernel lands in the image. For $\dim(V) = \dim(W)$: injective ⟺ surjective ⟺ isomorphism (Stammbach III.4.6).`,
    example: R`<b>1.</b> $\mathrm{diag}(-2,2,0)$ (Mathematica example): rank $2$; kernel $\langle x_3\rangle$ has dimension $1$; $2+1 = 3 = \dim(V)$.<br>
<b>2.</b> Derivative $V_{\le 3}\to W_{\le 2}$: $A_\varphi = \begin{pmatrix}0&1&0&0\\0&0&2&0\\0&0&0&3\end{pmatrix}$, rank $3 = \dim(W)$ (surjective), kernel = constants (dim. 1), $3+1 = 4$.<br>
<b>3.</b> Mathematica $4\times 5$ example: $\tilde A_\varphi$ has 3 linearly independent columns ⇒ rank $3$.`,
    counterexample: R`<b>1. Rank ≠ number of columns ≠ 0:</b> $\begin{pmatrix}1&2\\2&4\end{pmatrix}$ has 2 columns, but rank $1$ (second column $= 2\cdot$ first).<br>
<b>2. Rank ≤ min(dim V, dim W):</b> a map $\mathbb{R}^5\to\mathbb{R}^2$ has rank at most 2 – so it can never be injective (kernel has dimension $\ge 3$).<br>
<b>3.</b> Zero map: rank $0$.`
  },
  "la10_bsp_kern_bild": {
    title: "Example: Determine kernel and image concretely",
    category: "10a Kernel, image and rank",
    type: "beispiel",
    front: R`Determine kernel, image and rank of $\varphi:\mathbb{R}^3\to\mathbb{R}^3$ with $A_\varphi = \begin{pmatrix}1&2&3\\2&4&6\\1&0&1\end{pmatrix}$ (standard basis).`,
    back: R`<b>Kernel:</b> $A_\varphi x = 0$: row 2 = $2\cdot$ row 1, so only $x_1+2x_2+3x_3 = 0$ and $x_1+x_3 = 0$ remain. With $x_3 = t$: $x_1 = -t$, $2x_2 = -x_1-3x_3 = -2t$, $x_2 = -t$:
$$\mathrm{Ker}(\varphi) = \langle\{(-1,-1,1)\}\rangle.$$
<b>Image</b> = span of the columns $(1,2,1),(2,4,0),(3,6,1)$. We have $(3,6,1) = (1,2,1)+(2,4,0)$, and $(1,2,1),(2,4,0)$ are linearly independent (Lemma 4.2):
$$\varphi[\mathbb{R}^3] = \langle\{(1,2,1),(2,4,0)\}\rangle,\qquad\mathrm{Rang}(\varphi) = 2.$$
Check: $\dim(\mathrm{Ker}(\varphi))+\mathrm{Rang}(\varphi) = 1+2 = 3 = \dim(\mathbb{R}^3)$.`,
    meta: "Exercise example for Ch. 10 (method as in Stammbach III.2.17; image = span of the columns)",
    explanation: R`<b>Recipe:</b><br>
• <b>Kernel</b> = solution set of $A_\varphi x = 0$ (solve the homogeneous linear system, take free variables as parameters, read off the basis vectors – as in Exercise sheet 5, Exercise 25(e)).<br>
• <b>Image</b> = $\langle$columns of $A_\varphi\rangle$ (images of the basis vectors); by Lemma 4.2 / Theorem 4.4 remove superfluous columns ⇒ basis of the image.<br>
• <b>Rank</b> = number of columns that remain.<br><br>
<b>The dependence of the columns and the kernel are linked:</b> the relation $1\cdot s_1+1\cdot s_2-1\cdot s_3 = 0$ between the columns is exactly the kernel vector $(1,1,-1) = -(-1,-1,1)$. Every linear dependence of the columns is a kernel vector.`,
    example: R`Check kernel: $A_\varphi(-1,-1,1)^t = (-1-2+3,\,-2-4+6,\,-1+0+1)^t = (0,0,0)^t$ ✓.<br>
Is $(5,10,1)$ in the image? Ansatz $a(1,2,1)+b(2,4,0) = (5,10,1)$ ⇒ $a = 1$, $b = 2$ ✓ (a preimage is e.g. $(1,2,0)$: $A_\varphi(1,2,0)^t = (5,10,1)^t$).`,
    counterexample: R`$(1,0,0)$ does <b>not</b> lie in the image: $a+2b = 1$, $2a+4b = 0$ contradict each other ($2\cdot 1\neq 0$). So $A_\varphi x = (1,0,0)^t$ is unsolvable – $\varphi$ is not surjective (and, since the kernel is $\neq\{0\}$, not injective either).`
  }
};
})();
