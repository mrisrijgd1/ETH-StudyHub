/* ==========================================================================
   LINEAR ALGEBRA I – CHAPTER 2 (English): Simple proofs
   (Theorem 2.0 group axioms, Theorem 2.1 fields, Theorem 2.2 rings)
   Linear Algebra I – Prof. Dr. Lorenz Halbeisen, HS 2026
   English translation of data_kapitel2.js. Formulas, HTML and ids are identical.
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_EN_KAPITEL_2 = {
  // ========================================================================
  // 2a GROUP AXIOMS
  // ========================================================================
  "la2_satz_2_0": {
    title: "Theorem 2.0: The group axioms G0, G1, G2",
    category: "2a Group axioms (Theorem 2.0)",
    type: "satz",
    front: R`State <b>Theorem 2.0</b>: which three “one-sided” axioms suffice for $(M,\circ,e)$ to be a group?`,
    back: R`Let $M$ be a set on which a binary operation “$\circ$” is defined, and let $e\in M$. Then $(M,\circ,e)$ is <b>a group if and only if</b> the three <b>group axioms</b> hold:
$$\begin{aligned}
G_0&:\;\forall x\,\forall y\,\forall z\;\big(x\circ(y\circ z) = (x\circ y)\circ z\big) &&\text{“}\circ\text{” is associative}\\
G_1&:\;\forall x\;(e\circ x = x) &&e\text{ is a left neutral element}\\
G_2&:\;\forall x\,\exists\bar x\;(\bar x\circ x = e) &&\text{every }x\text{ has a left inverse}
\end{aligned}$$
For “$\Leftarrow$” one shows: (a) every left inverse is a right inverse, (b) $e$ is also right neutral, (c) the neutral element is unique, (d) the inverse of $x$ is unique.`,
    meta: "Script: Ch. 2, Theorem 2.0",
    explanation: R`The definition of a group (week 38) demands a lot: a <b>two-sided</b> neutral element, <b>two-sided</b> inverses, and both <b>unique</b>. Theorem 2.0 says: one only has to check <b>half</b> of this – associativity plus “from the left” neutral and “from the left” inverse. The rest is forced by associativity.<br><br>
<b>Practical use:</b> When showing that something is a group, this saves work (especially in non-commutative situations such as matrices or maps).<br><br>
<b>Important:</b> Both conditions must come from the <b>same side</b>. “Right neutral + left inverse” is <b>not</b> enough – the non-example $a\ast b := a$ shows this.`,
    example: R`<b>Verification for $(\mathbb{Q}\setminus\{0\},\cdot)$ with $e=1$:</b> $G_0$ – multiplication is associative; $G_1$ – $1\cdot x = x$; $G_2$ – for $x = \tfrac{a}{b}$ we have $\bar x = \tfrac ba$ with $\tfrac ba\cdot\tfrac ab = 1$. Two-sidedness follows from the theorem (here also from commutativity).<br>
<b>Numbers in $\mathbb{Z}_7^{\times}$:</b> $\bar x = \bar 3$ has the left inverse $\bar 5$ ($\bar 5\cdot\bar 3 = \bar 1$), and by (a) also $\bar 3\cdot\bar 5 = \bar 1$.`,
    counterexample: R`<b>Non-example (script):</b> $M = \{p,q\}$, $a\ast b := a$. $G_0$ holds, every element is <b>right</b> neutral, every element has a left inverse – but no element is <b>left</b> neutral ($q\ast p = q\neq p$, $p\ast q = p\neq q$). $G_1$ is violated, and $(M,\ast)$ is not a group.<br>
<b>Without associativity:</b> $(\mathbb{Z},-)$ with $e=0$: $0$ is <i>right</i> neutral ($x-0=x$), every $x$ is “its own inverse” ($x-x = 0$) – but $G_0$ fails: $(5-3)-1 = 1\neq 3 = 5-(3-1)$.`
  },
  "la2_beweis_2_0": {
    title: "Proof of Theorem 2.0 (a)–(d)",
    category: "2a Group axioms (Theorem 2.0)",
    type: "beweis",
    front: R`Prove the direction “$\Leftarrow$” of Theorem 2.0: from $G_0$, $G_1$, $G_2$ it follows that (a) left inverses are right inverses, (b) $e$ is right neutral, (c) $e$ is unique, (d) inverses are unique.`,
    back: R`<b>(a)</b> Let $\bar{\bar x}$ be a left inverse of $\bar x$. We have $(\bar x\circ x)\circ\bar x = e\circ\bar x = \bar x$, so by $G_0$: $\bar x\circ(x\circ\bar x) = \bar x$. Multiply from the left by $\bar{\bar x}$:
$$\underbrace{\bar{\bar x}\circ\bar x}_{=e}\circ(x\circ\bar x) = \bar{\bar x}\circ\bar x = e\quad\text{and}\quad e\circ(x\circ\bar x) = x\circ\bar x.$$
Hence $x\circ\bar x = e$.<br>
<b>(b)</b> $x\circ e = x\circ(\bar x\circ x) \overset{G_0}{=} (x\circ\bar x)\circ x \overset{(a)}{=} e\circ x = x$.<br>
<b>(c)</b> If $e,e'$ are neutral elements: $e\circ e' = e$ (since $e'$ is right neutral) and $e\circ e' = e'$ (since $e$ is left neutral), so $e = e'$.<br>
<b>(d)</b> If $\bar x,\tilde x$ are inverses of $x$: $\bar x = \bar x\circ(x\circ\tilde x)\overset{G_0}{=}(\bar x\circ x)\circ\tilde x = e\circ\tilde x = \tilde x$.<br>
<b>(⇒)</b> is clear: a group satisfies $G_0,G_1,G_2$.`,
    meta: "Script: Ch. 2, proof of Theorem 2.0",
    explanation: R`<b>The strategy in (a):</b> We only know something about products where the inverse stands on the <b>left</b>. To control $x\circ\bar x$ (inverse on the right), we use associativity to place it between two factors we know: $\bar x\circ(x\circ\bar x)$. Then we remove the front factor with a <b>left inverse of the left inverse</b> ($\bar{\bar x}$). The same expression $\bar{\bar x}\circ\bar x\circ(x\circ\bar x)$ is bracketed in two ways: once it gives $e$, once $x\circ\bar x$.<br><br>
<b>Order matters:</b> (b) uses (a), and (c) and (d) use that $e$ is two-sided neutral and $\bar x$ is two-sided inverse.<br><br>
<b>The trick in (c)</b> (“evaluate $e\circ e'$ in two ways”) and in (d) (“bracket $\bar x\circ x\circ\tilde x$ in two ways”) appears again and again, e.g. in the uniqueness of inverse matrices (Ch. 8).`,
    example: R`<b>Worked in $(\mathbb{Z}_5\setminus\{\bar 0\},\cdot_5)$:</b> $x=\bar 2$, left inverse $\bar x = \bar 3$ ($\bar 3\cdot\bar 2 = \bar 6 = \bar 1$); the left inverse of $\bar 3$ is $\bar{\bar x} = \bar 2$. Step (a): $\bar 3\circ(\bar 2\circ\bar 3) = \bar 3\cdot\bar 1 = \bar 3$ ✓, and $x\circ\bar x = \bar 2\cdot\bar 3 = \bar 1$ ✓. Moreover $\bar{\bar x} = x$, as the claim after the theorem says.`,
    counterexample: R`<b>Where the proof fails without $G_1$:</b> For $a\ast b := a$ on $\{p,q\}$ with “$e$” $:=p$ (only right neutral), $G_2$ holds: $\bar x := p$ gives $p\ast x = p = e$ for all $x$. But $G_1$ fails ($p\ast q = p\neq q$), and consequently conclusion (a) fails: the left inverse $p$ of $q$ is <b>not</b> a right inverse, since $q\ast p = q\neq e$. The proof step “$e\circ\bar x = \bar x$” is exactly where $G_1$ is needed.<br>
<b>Two different one-sided neutral elements</b> can only exist if no two-sided one exists: in the non-example, $p$ and $q$ are <b>both</b> right neutral – (c) does not apply, because neither is left neutral.`
  },
  "la2_inverses_des_inversen": {
    title: "Claim: The inverse of the inverse; notations −x, x⁻¹, x − y, x : y",
    category: "2a Group axioms (Theorem 2.0)",
    type: "proposition",
    front: R`Show: in a group, the inverse of the inverse is $x$ again. Which notations ($-x$, $x^{-1}$, $x-y$, $x:y$) does the script define?`,
    back: R`<b>Claim:</b> If $(M,\circ)$ is a group, $x\in M$, $\bar x$ is the inverse of $x$ and $\bar{\bar x}$ is the inverse of $\bar x$, then $\bar{\bar x} = x$.<br>
<b>Proof:</b> $\underbrace{(\bar{\bar x}\circ\bar x)}_{=e}\circ x = x$ and $\bar{\bar x}\circ\underbrace{(\bar x\circ x)}_{=e} = \bar{\bar x}$; both left-hand sides are equal by associativity, so $x = \bar{\bar x}$.<br><br>
<b>Definition (notations):</b>
<ul><li>Additively written group (“$+$”): the inverse of $x$ is $-x$; multiplicatively: $x^{-1}$. Thus $-(-x) = x$ resp. $(x^{-1})^{-1} = x$.</li>
<li>In additive groups: $x-y := x+(-y)$; in multiplicative groups: $x:y := x\cdot y^{-1}$.</li></ul>`,
    meta: "Script: Ch. 2, claim after Theorem 2.0 and definition",
    explanation: R`“Undoing the undoing” = doing nothing. Formally this is a direct consequence of the <b>uniqueness</b> of inverses (Theorem 2.0 (d)): $x$ itself is an inverse of $\bar x$ (because $\bar x\circ x = e = x\circ\bar x$), and inverses are unique.<br><br>
<b>Subtraction is not a new operation</b>, but addition of the inverse. So, e.g. in vector spaces, one does not have to prove anything new about “$-$”: $x - y$ is defined as $x+(-y)$, and $-y = (-1)\cdot y$ (Lemma 3.0 (c)).<br><br>
<b>Careful with non-commutativity:</b> $x:y = x\cdot y^{-1}$ is in general not $y^{-1}\cdot x$; and $(x\cdot y)^{-1} = y^{-1}\cdot x^{-1}$ (the order reverses, cf. Theorem 2.1 (b)).`,
    example: R`<b>1.</b> $(\mathbb{Z},+)$: $-(-7) = 7$; $\;10-3 = 10+(-3) = 7$.<br>
<b>2.</b> $(\mathbb{Q}\setminus\{0\},\cdot)$: $\big((\tfrac25)^{-1}\big)^{-1} = (\tfrac52)^{-1} = \tfrac25$; $\;3:\tfrac34 = 3\cdot\tfrac43 = 4$.<br>
<b>3.</b> $\mathbb{Z}_7$: $-\bar 3 = \bar 4$ (since $3+4 = 7$), and $-\bar 4 = \bar 3$ ✓.`,
    counterexample: R`<b>Order in $(xy)^{-1}$:</b> For $2\times 2$ matrices $X = \begin{pmatrix}1&1\\0&1\end{pmatrix}$, $Y = \begin{pmatrix}1&0\\1&1\end{pmatrix}$ we have $XY = \begin{pmatrix}2&1\\1&1\end{pmatrix}$ with $(XY)^{-1} = \begin{pmatrix}1&-1\\-1&2\end{pmatrix} = Y^{-1}X^{-1}$, but $X^{-1}Y^{-1} = \begin{pmatrix}2&-1\\-1&1\end{pmatrix}\neq(XY)^{-1}$.<br>
<b>Subtraction is not associative</b> (so it is not a group operation): $(8-4)-2 = 2\neq 6 = 8-(4-2)$.`
  },
  // ========================================================================
  // 2b FIELDS AND RINGS
  // ========================================================================
  "la2_satz_2_1": {
    title: "Theorem 2.1: 0 ≠ 1 and absence of zero divisors in fields",
    category: "2b Consequences in fields and rings (Theorems 2.1, 2.2)",
    type: "satz",
    front: R`What does <b>Theorem 2.1</b> say about fields $(K,+,\cdot,0,1)$, and how is it proved?`,
    back: R`In fields $(K,+,\cdot,0,1)$ [resp. $(K,+,\cdot,0_K,1_K)$] the following holds:
<ul><li><b>(a)</b> $0\neq 1$,</li>
<li><b>(b)</b> $\forall x\,\forall y\;\big(x\cdot y = 0\to(x=0\vee y=0)\big)$.</li></ul>
<b>Proof of (a):</b> By definition $(K\setminus\{0\},\cdot)$ is an abelian group with neutral element $1$. If $0 = 1$, then $1\notin K\setminus\{0\}$ – then $(K\setminus\{0\},\cdot)$ cannot be a group with neutral element $1$.<br>
<b>Proof of (b), by contraposition:</b> If $x\neq 0$ and $y\neq 0$, then $x^{-1},y^{-1}\in K$ exist and hence also $(x\cdot y)^{-1} = x^{-1}\cdot y^{-1}$ (strictly speaking $y^{-1}\cdot x^{-1}$, but “$\cdot$” is commutative). So $x\cdot y\neq 0$.<br>
<b>Remark:</b> In the zero ring $(\{0\},+,\cdot,0_R,1_R)$ we have $0_R = 1_R = 0$.`,
    meta: "Script: Ch. 2, Theorem 2.1, remark on the zero ring",
    explanation: R`<b>(b) is the foundation for solving equations:</b> “A product is zero exactly when one factor is zero.” That is why $(x-2)(x+3) = 0$ can be split into $x=2$ or $x=-3$ – this works <b>only</b> in structures without zero divisors.<br><br>
<b>Intuition for the proof of (b):</b> If $x\cdot y = 0$ with $x,y\neq 0$, then multiplying by $x^{-1}$ would give $y = x^{-1}\cdot 0 = 0$ (Theorem 2.2 (a)) – a contradiction. Inverses are incompatible with zero divisors.<br><br>
<b>Where needed:</b> Lemma 3.0 (d) ($\lambda x = 0_V\Rightarrow\lambda = 0\vee x = 0_V$) is the vector space version of (b); the pigeonhole theorem in Ch. 1 cancels $\bar a^s$ using (b).`,
    example: R`<b>1.</b> In $\mathbb{Q}$: $x\cdot y = 0$ with $x = \tfrac35$ forces $y = \tfrac53\cdot 0 = 0$.<br>
<b>2.</b> In $\mathbb{Z}_5$: products of nonzero elements are never $\bar 0$, e.g. $\bar 2\cdot\bar 3 = \bar 1$, $\bar 4\cdot\bar 4 = \bar 1$, $\bar 3\cdot\bar 4 = \bar 2$.<br>
<b>3.</b> $0\neq 1$ in $\mathbb{F}_2 = \{\bar 0,\bar 1\}$ – the smallest possible field already has 2 elements.`,
    counterexample: R`<b>1. Ring with zero divisors:</b> In $\mathbb{Z}_6$, $\bar 2\cdot\bar 3 = \bar 0$, although $\bar 2,\bar 3\neq\bar 0$ – so $\mathbb{Z}_6$ is not a field (Exercise sheet 1, 8(c)).<br>
<b>2.</b> In $M_{2\times 2}(\mathbb{R})$: $\begin{pmatrix}0&1\\0&0\end{pmatrix}\cdot\begin{pmatrix}0&1\\0&0\end{pmatrix} = \begin{pmatrix}0&0\\0&0\end{pmatrix}$ – a matrix $\neq 0$ whose square is $0$.<br>
<b>3.</b> In the zero ring $0 = 1$ – so it is not a field.`
  },
  "la2_satz_2_2": {
    title: "Theorem 2.2: Consequences of the distributive laws",
    category: "2b Consequences in fields and rings (Theorems 2.1, 2.2)",
    type: "satz",
    front: R`What follows in a ring $(R,+,\cdot,0,1)$ from the distributive laws (<b>Theorem 2.2</b>)? Prove (a) and (b).`,
    back: R`Let $(R,+,\cdot,0,1)$ be a ring. Then:
<ul><li><b>(a)</b> $\forall x\,(0\cdot x = 0\wedge x\cdot 0 = 0)$,</li>
<li><b>(b)</b> $\forall x\,\big((-1)\cdot x = -x\wedge x\cdot(-1) = -x\big)$,</li>
<li><b>(c)</b> $\forall x\,\forall y\,\big((-x)\cdot(-y) = x\cdot y\big)$.</li></ul>
<b>Proof of (a):</b> $x = 1\cdot x = (1+0)\cdot x = (1\cdot x)+(0\cdot x) = x+0\cdot x$. Add $-x$: $\;0 = (-x)+x = (-x)+x+0\cdot x = 0+0\cdot x = 0\cdot x$.<br>
<b>Proof of (b):</b> $0\overset{(a)}{=}0\cdot x = \big((-1)+1\big)\cdot x = (-1)\cdot x+1\cdot x = (-1)\cdot x+x$, so $(-1)\cdot x = -x$.<br>
<b>Proof of (c):</b> $(-x)\cdot(-y) = x\cdot(-1)\cdot(-1)\cdot y = x\cdot\big((-1)\cdot(-1)\big)\cdot y = x\cdot(1\cdot y) = x\cdot y$, since $(-1)\cdot(-1)\overset{(b)}{=}-(-1) = 1$.`,
    meta: "Script: Ch. 2, Theorem 2.2 with proof",
    explanation: R`These school rules (“times zero is zero”, “minus times minus gives plus”) are <b>not axioms</b>, but consequences of distributivity. Zero is originally only the neutral element of <i>addition</i> – that it “swallows everything” under <i>multiplication</i> must be proved, and the only bridge between $+$ and $\cdot$ is the distributive law.<br><br>
<b>Key trick of (a):</b> The equation $u = u + v$ in a group forces $v = 0$ (add $-u$). With $u = x$, $v = 0\cdot x$ we get $0\cdot x = 0$. The very same auxiliary fact (“$u+u=u\Rightarrow u=0$”) proves Lemma 3.0 (a),(b) for vector spaces (Exercise sheet 2, Exercise 10).<br><br>
<b>(b) justifies the notation:</b> the additive inverse is “times $-1$”.`,
    example: R`<b>In $\mathbb{Z}_5$</b> with $x=\bar 3$: $-\bar 1 = \bar 4$, and $\bar 4\cdot\bar 3 = \overline{12} = \bar 2 = -\bar 3$ ✓ (since $\bar 3+\bar 2 = \bar 0$).<br>
(c): $(-\bar 2)(-\bar 4) = \bar 3\cdot\bar 1 = \bar 3$ and $\bar 2\cdot\bar 4 = \bar 8 = \bar 3$ ✓.<br>
<b>Matrix ring:</b> $0\cdot\begin{pmatrix}1&2\\3&4\end{pmatrix} = \begin{pmatrix}0&0\\0&0\end{pmatrix}$ and $(-I_2)\cdot A = -A$.`,
    counterexample: R`<b>Without distributivity there is no $0\cdot x = 0$:</b> On $\mathbb{Z}$ with $+$ and $x\ast y := x+y+1$ (associative, commutative, neutral element $-1$, but not distributive over $+$): $0\ast 5 = 6\neq 0$.<br>
<b>Care in non-commutative rings:</b> (a)–(c) still hold (the proof needs no commutativity), but $x\cdot y = y\cdot x$ does not: $\begin{pmatrix}0&1\\0&0\end{pmatrix}\begin{pmatrix}0&0\\1&0\end{pmatrix} = \begin{pmatrix}1&0\\0&0\end{pmatrix}\neq\begin{pmatrix}0&0\\0&1\end{pmatrix}$ (Exercise sheet 7, Exercise 32).`
  }
};
})();
