/* ==========================================================================
   LINEAR ALGEBRA I – CHAPTER 0 (English): Known examples of algebraic structures
   (Lecture notes week 38, Definitions 1–7) + Exercise sheets 0 and 1
   Linear Algebra I – Prof. Dr. Lorenz Halbeisen, HS 2026
   English translation of data_kapitel0.js. Formulas, HTML and ids are identical.
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_EN_KAPITEL_0 = {
  // ========================================================================
  // 0a SEMIGROUPS, NEUTRAL ELEMENTS AND MONOIDS
  // ========================================================================
  "la0_def1_halbgruppe": {
    title: R`Definition 1: Semigroup`,
    category: R`0a Semigroups, neutral elements and monoids`,
    type: "definition",
    front: R`What is a <b>(commutative) semigroup</b> $(M, \circ)$?`,
    back: R`If $M$ is a set together with a <b>binary, associative</b> operation “$\circ$”, then the structure $(M,\circ)$ is a <b>semigroup</b>:
$$\forall x\,\forall y\,\forall z\;\big(x\circ(y\circ z) = (x\circ y)\circ z\big).$$
If “$\circ$” is in addition <b>commutative</b> ($\forall x\,\forall y\; x\circ y = y\circ x$), then $(M,\circ)$ is a <b>commutative semigroup</b>.<br><br>
<b>Binary</b> means: $\circ: M\times M\to M$, i.e. for all $x,y\in M$ the element $x\circ y$ is <b>again in $M$</b> (closure is contained in the phrase “operation on $M$”).`,
    meta: "Script: week 38, Definition 1, Example 1, Non-example 1",
    explanation: R`A semigroup is the <b>poorest</b> algebraic structure in the script: you may combine two elements and the result stays in the set, and in longer chains the bracketing does not matter. Nothing more – there need not be a neutral element or inverses.<br><br>
<b>Two things to check:</b><br>
1. <b>Is “$\circ$” really an operation on $M$?</b> This is the most common trap: $x\circ y$ must be defined for <i>all</i> $x,y\in M$ and lie in $M$ again.<br>
2. <b>Associativity</b> – it allows writing expressions like $x_1\circ x_2\circ\dots\circ x_n$ without brackets.<br><br>
The notions of the script build on each other: semigroup $\subset$ monoid (+ neutral element) $\subset$ group (+ inverses) – and a ring/field combines two such structures on the same set.`,
    example: R`<b>1.</b> $(\mathbb{N}_{>0},+)$ is a commutative semigroup: e.g. $(2+3)+4 = 9 = 2+(3+4)$, and $2+3=3+2$. (There is <i>no</i> neutral element, because $0\notin\mathbb{N}_{>0}$.)<br>
<b>2.</b> Example 1 in the script: $2\cdot\mathbb{N}_{>0} = \{2,4,6,\dots\}$ with $+$ is a commutative semigroup ($4+6=10\in 2\cdot\mathbb{N}_{>0}$); likewise $n\cdot\mathbb{N}_{>0}$ and $(\mathbb{R},\cdot)$.<br>
<b>3.</b> Not commutative, but a semigroup: $(M_{2\times 2}(\mathbb{R}),\cdot)$ – the matrix product is associative, but $\begin{pmatrix}1&1\\0&1\end{pmatrix}\begin{pmatrix}1&0\\0&-1\end{pmatrix}\neq\begin{pmatrix}1&0\\0&-1\end{pmatrix}\begin{pmatrix}1&1\\0&1\end{pmatrix}$ (Chapter 7).`,
    counterexample: R`<b>1. Non-example 1 (script):</b> $(-\mathbb{N},\cdot)$ with $-\mathbb{N}=\{0,-1,-2,\dots\}$ is <b>not</b> a semigroup, because “$\cdot$” is not an operation on $-\mathbb{N}$: $(-2)\cdot(-3) = 6\notin -\mathbb{N}$.<br>
<b>2.</b> $(\mathbb{Z},-)$ is closed, but <b>not associative</b>: $(5-3)-1 = 1$, but $5-(3-1) = 3$.<br>
<b>3.</b> $(\mathbb{N},\,x\circ y := x^y)$: $(2^3)^2 = 64$, but $2^{(3^2)} = 512$ – not associative.`
  },
  "la0_def2_neutral": {
    title: R`Definition 2: Left, right and neutral element`,
    category: R`0a Semigroups, neutral elements and monoids`,
    type: "definition",
    front: R`What is a <b>left neutral</b>, a <b>right neutral</b> and a <b>neutral element</b> of a semigroup $(M,\circ)$?`,
    back: R`Let $(M,\circ)$ be a semigroup and $e\in M$. If for <b>all</b> $x\in M$:
<ul><li>$e\circ x = x$, then $e$ is a <b>left neutral element</b>,</li>
<li>$x\circ e = x$, then $e$ is a <b>right neutral element</b></li></ul>
with respect to the operation “$\circ$”. If $e$ is both left and right neutral, then $e$ is a <b>neutral element</b> with respect to “$\circ$”.`,
    meta: "Script: week 38, Definition 2",
    explanation: R`A neutral element “does nothing”: combining with $e$ leaves every element unchanged. The distinction between left and right is needed because “$\circ$” need not be commutative – then an element can act neutrally from only one side.<br><br>
<b>Important:</b> The condition must hold for <b>all</b> $x\in M$, not just for a single one. And the neutral element depends on the <b>operation</b>: in $\mathbb{Z}$, $0$ is neutral for $+$, but $1$ is neutral for $\cdot$ – that is why the script later writes $e_\circ$, or speaks of neutral elements “with respect to $\circ$”.<br><br>
<b>Outlook:</b> In Theorem 2.0 (c) it is shown: if there is a left neutral $e$ and a right neutral $e'$, then $e = e\circ e' = e'$ – so a neutral element is unique.`,
    example: R`<b>1.</b> In $(\mathbb{N},+)$, $0$ is neutral: $0+7 = 7 = 7+0$.<br>
<b>2.</b> In $(\mathbb{Z},\cdot)$, $1$ is neutral: $1\cdot(-4) = -4 = (-4)\cdot 1$.<br>
<b>3.</b> In $(M_{2\times 2}(\mathbb{R}),\cdot)$, $I_2=\begin{pmatrix}1&0\\0&1\end{pmatrix}$ is neutral, e.g. $I_2\begin{pmatrix}2&5\\1&3\end{pmatrix}=\begin{pmatrix}2&5\\1&3\end{pmatrix}=\begin{pmatrix}2&5\\1&3\end{pmatrix}I_2$.`,
    counterexample: R`<b>1. Only right neutral:</b> On $M=\{p,q\}$ with $a\ast b := a$ (non-example from Chapter 2), <i>every</i> element is right neutral ($p\ast q = p$), but <i>none</i> is left neutral: $q\ast p = q\neq p$.<br>
<b>2.</b> In $(\mathbb{Z},-)$, $0$ is right neutral ($7-0=7$), but not left neutral: $0-7 = -7\neq 7$.<br>
<b>3.</b> $(\mathbb{N}_{>0},+)$ has no neutral element at all: from $e+5 = 5$ it follows that $e=0\notin\mathbb{N}_{>0}$.`
  },
  "la0_def3_monoid": {
    title: R`Definition 3: Commutative monoid`,
    category: R`0a Semigroups, neutral elements and monoids`,
    type: "definition",
    front: R`When is a structure $(M,\circ)$ a <b>commutative monoid</b>? What does the notation $\langle M,\circ,e\rangle$ mean?`,
    back: R`If $(M,\circ)$ is a <b>commutative semigroup</b> and there exists <b>exactly one</b> neutral element $e\in M$ (with respect to “$\circ$”), then the structure $(M,\circ)$ is a <b>commutative monoid</b>.<br><br>
<b>Remark 1:</b> Sometimes we also write $\langle M,\circ,e\rangle$ to name the neutral element as well.`,
    meta: "Script: week 38, Definition 3, Remark 1, Example 2, Non-example 2",
    explanation: R`Monoid = semigroup <b>with a neutral element</b>. So one can express “doing nothing” as an element. This is exactly the intermediate step towards a group: only once a neutral element exists can one say what an inverse is ($x'\circ x = e$).<br><br>
The requirement “<b>exactly one</b>” neutral element is convenient, but in fact automatic: two neutral elements $e,e'$ satisfy $e = e\circ e' = e'$ (cf. Theorem 2.0 (c)).<br><br>
<b>Memory aid for the hierarchy:</b><br>
Semigroup (associative) $\;\to\;$ monoid (+ neutral element) $\;\to\;$ group (+ inverse for every element).`,
    example: R`<b>1.</b> $(\mathbb{N},+)$ is a commutative monoid with neutral element $0$: $0+12 = 12$.<br>
<b>2. Example 2 (script):</b> $(\mathbb{Z},\cdot)$ is a commutative monoid with neutral element $1$, written $\langle\mathbb{Z},\cdot,1\rangle$.<br>
<b>3.</b> $(\mathcal{P}(M),\cap)$ is a commutative monoid with neutral element $M$: for $M=\{1,2,3\}$ we have $M\cap\{1,3\} = \{1,3\}$ (cf. Exercise sheet 1, Exercise 6).`,
    counterexample: R`<b>1. Non-example 2 (script):</b> $(2\mathbb{Z},\cdot)$ is a semigroup ($4\cdot 6 = 24\in 2\mathbb{Z}$), but <b>not a monoid</b>: the only element with $e\cdot 2 = 2$ in $\mathbb{Z}$ would be $e=1$, and $1\notin 2\mathbb{Z}$.<br>
<b>2.</b> $(\mathbb{N}_{>0},+)$ is a commutative semigroup, but not a monoid (no neutral element, since $0\notin\mathbb{N}_{>0}$).`
  },
  // ========================================================================
  // 0b INVERSES AND ABELIAN GROUPS
  // ========================================================================
  "la0_def4_inverses": {
    title: R`Definition 4: Left inverse, right inverse and inverse`,
    category: R`0b Inverses and abelian groups`,
    type: "definition",
    front: R`Let $(M,\circ)$ be a monoid with neutral element $e$. When is $x'$ a <b>left inverse</b>, a <b>right inverse</b> or an <b>inverse</b> of $x$?`,
    back: R`Let $(M,\circ)$ be a monoid with neutral element $e$, and let $x,x'\in M$. If
<ul><li>$x'\circ x = e$, then $x'$ is a <b>left inverse</b> of $x$,</li>
<li>$x\circ x' = e$, then $x'$ is a <b>right inverse</b> of $x$.</li></ul>
If $x'$ is both a left and a right inverse of $x$, then $x'$ is an <b>inverse</b> of $x$.`,
    meta: "Script: week 38, Definition 4",
    explanation: R`An inverse “undoes $x$”: if you combine $x$ with $x'$, you arrive at the neutral element $e$, i.e. at “doing nothing”. That is why one needs a neutral element <b>first</b> (a monoid) before one can speak of inverses.<br><br>
Whether one computes “$x'\circ x$” or “$x\circ x'$” makes no difference in commutative structures; the distinction becomes important for matrices (Chapters 7/8) or maps. In Theorem 2.0 (a) it is shown: in a structure satisfying G0, G1, G2, every left inverse is automatically also a right inverse.<br><br>
<b>Notation</b> (Chapter 2): additively $-x$, multiplicatively $x^{-1}$.`,
    example: R`<b>1.</b> In $(\mathbb{Z},+)$, $-5$ is the inverse of $5$: $5+(-5) = 0 = (-5)+5$.<br>
<b>2.</b> In $(\mathbb{Q}\setminus\{0\},\cdot)$, $\tfrac{3}{2}$ is the inverse of $\tfrac{2}{3}$: $\tfrac23\cdot\tfrac32 = 1$.<br>
<b>3.</b> In $\mathbb{Z}_7$, $\bar 5$ is the multiplicative inverse of $\bar 3$, since $3\cdot 5 = 15 = 2\cdot 7+1$, so $\bar 3\cdot_7\bar 5 = \bar 1$.`,
    counterexample: R`<b>1.</b> In $(\mathbb{Z},\cdot)$, $2$ has no inverse: $2\cdot x' = 1$ would only have the solution $x'=\tfrac12\notin\mathbb{Z}$.<br>
<b>2. Only one-sided inverse:</b> On $M=\{p,q\}$ with $a\ast b := a$, $p$ is only <i>right</i> neutral (so not a monoid – the example shows what goes wrong without a genuine neutral element). If one nevertheless computes with $e:=p$: $p\ast q = p = e$, so $p$ acts like a left inverse of $q$ – but $q\ast p = q\neq e$, so there is no right inverse.<br>
<b>3.</b> In $\mathbb{Z}_6$, $\bar 2$ has no multiplicative inverse: $2\cdot k\in\{0,2,4\}\pmod 6$ for all $k$, never $1$.`
  },
  "la0_def5_abelsche_gruppe": {
    title: R`Definition 5: Abelian group`,
    category: R`0b Inverses and abelian groups`,
    type: "definition",
    front: R`When is $(M,\circ)$ an <b>abelian group</b>?`,
    back: R`If $(M,\circ)$ is a <b>(commutative) monoid</b> and <b>every</b> $x\in M$ has <b>exactly one</b> inverse $x'$, then $(M,\circ)$ is an <b>abelian group</b>.<br><br>
<b>Remark 2:</b> Commutative groups are called abelian groups.<br><br>
Written out: “$\circ$” is an operation on $M$, associative, commutative, there is a neutral element $e$, and for each $x$ there is $x'$ with $x'\circ x = e = x\circ x'$.`,
    meta: "Script: week 38, Definition 5, Remark 2, Non-example 3; Exercise sheet 0",
    explanation: R`In a group one can solve every equation $a\circ x = b$ <b>uniquely</b>: $x = a'\circ b$. That is the real meaning of “inverses exist” – every operation can be undone.<br><br>
<b>Checklist (as in Exercise sheet 0):</b><br>
1. An operation on $M$ (closure!),<br>
2. associative, 3. commutative,<br>
4. state the neutral element,<br>
5. for each $x$ give an inverse <b>and show that it lies in $M$</b>.<br><br>
Abelian groups are the “additive half” of every vector space: Definition 1 in Chapter 3 requires that $(V,\circ)$ is an abelian group.`,
    example: R`<b>1.</b> $(\mathbb{Z},+)$: neutral element $0$, the inverse of $x$ is $-x$, e.g. $8+(-8)=0$.<br>
<b>2.</b> $(\mathbb{Q}\setminus\{0\},\cdot)$ (Non-example 3 / Exercise sheet 0, Exercise 1(b)): the inverse of $\tfrac ab$ is $\tfrac ba$, e.g. $-\tfrac{4}{7}\cdot(-\tfrac74)=1$.<br>
<b>3.</b> Exercise sheet 0, Exercise 2: $\mathbb{Z}^4$ with componentwise addition: $\begin{pmatrix}1\\-2\\0\\5\end{pmatrix}+\begin{pmatrix}-1\\2\\0\\-5\end{pmatrix}=0_V$.<br>
<b>4.</b> The trivial group $(\{0\},\circ)$ with $0\circ 0 := 0$ (Exercise sheet 0, Exercise 0).`,
    counterexample: R`<b>1. Non-example 3 (script):</b> $(\mathbb{Z},\cdot,1)$ is <b>not</b> a group: $3$ has no inverse in $\mathbb{Z}$.<br>
<b>2.</b> $(\mathbb{Q},\cdot)$ is not a group: $0\cdot x = 0\neq 1$ for all $x$ – that is why one removes $0$ for fields.<br>
<b>3.</b> $(\mathbb{N},+)$ is a monoid, but not a group: $3+x=0$ has no solution in $\mathbb{N}$.<br>
<b>4.</b> A group that is not abelian: invertible $2\times 2$ matrices with $\cdot$, see the counterexample from Chapter 7.`
  },
  "la0_s0_a4_symdiff": {
    title: R`Exercise sheet 0, Exercise 4: (P(M), △) is an abelian group`,
    category: R`0b Inverses and abelian groups`,
    type: "aufgabe",
    front: R`Show: for a non-empty set $M$, $(\mathcal{P}(M),\triangle)$ with $x\triangle y := (x\setminus y)\cup(y\setminus x)$ is an <b>abelian group</b>. How does one elegantly show associativity?`,
    back: R`<b>Operation:</b> $x\triangle y\subseteq x\cup y\subseteq M$, so $x\triangle y\in\mathcal{P}(M)$.<br>
<b>Key observation (∗):</b> $t\in x\triangle y \iff t$ lies in <b>exactly one</b> of the sets $x,y$.<br>
<b>Commutative:</b> $(x\setminus y)\cup(y\setminus x) = (y\setminus x)\cup(x\setminus y)$.<br>
<b>Neutral element:</b> $\emptyset$, since $\emptyset\triangle x = x$.<br>
<b>Inverse:</b> $x\triangle x = \emptyset$ – every element is <b>its own inverse</b>.<br>
<b>Associative:</b> Using (∗) one shows (∗∗): $t\in(x\triangle y)\triangle z \iff t$ lies in an <b>odd number</b> of the sets $x,y,z$. This condition is symmetric in $x,y,z$, so $(x\triangle y)\triangle z = x\triangle(y\triangle z)$.`,
    meta: "Exercise sheet 0, Exercise 4 (model solution)",
    explanation: R`The symmetric difference is “<b>exclusive or</b>” ($\veebar$ from Chapter 1) for sets: $t\in x\triangle y \iff (t\in x)\veebar(t\in y)$. Think of each element $t\in M$ as a light switch: “$\triangle x$” means <i>flip all switches in $x$</i>. Flipping twice = doing nothing ($x\triangle x=\emptyset$), and the order of flipping does not matter (commutative and associative). A switch is finally “on” exactly when it was flipped an <b>odd number</b> of times – this is the parity statement (∗∗).<br><br>
The trick of proving equality of sets <b>element by element</b> via a property that does not depend on the order saves a case distinction with 8 cases.<br><br>
This group is also the background for addition in $\mathbb{F}_4$ (Exercise sheet 1, Exercise 9) and for $c_{00}(\mathbb{F}_2)$ (Exercise sheet 6).`,
    example: R`$M=\{1,2,3,4\}$, $x=\{1,2\}$, $y=\{2,3\}$, $z=\{3,4\}$:<br>
$x\triangle y = \{1,3\}$, $(x\triangle y)\triangle z = \{1,4\}$;<br>
$y\triangle z = \{2,4\}$, $x\triangle(y\triangle z) = \{1,4\}$ ✓.<br>
Parity check: $1$ lies only in $x$ (1 time), $2$ in $x,y$ (2 times), $3$ in $y,z$ (2 times), $4$ only in $z$ (1 time) – exactly $\{1,4\}$ occur an odd number of times.`,
    counterexample: R`<b>1.</b> $(\mathcal{P}(M),\cup)$ is <b>not</b> a group: the neutral element is $\emptyset$, but for $x=\{1\}$ there is no $x'$ with $\{1\}\cup x' = \emptyset$.<br>
<b>2.</b> $(\mathcal{P}(M),\setminus)$ is not even associative: $(\{1,2\}\setminus\{2\})\setminus\{1\} = \emptyset$, but $\{1,2\}\setminus(\{2\}\setminus\{1\}) = \{1\}$.`
  },
  "la0_s0_a3_fib": {
    title: R`Exercise sheet 0, Exercise 3: The sequence space S and Fib – the subset trick`,
    category: R`0b Inverses and abelian groups`,
    type: "aufgabe",
    front: R`Let $(S,+_S)$ be the set of all real sequences with termwise addition, and $\mathrm{Fib}\subseteq S$ the sequences with $f_{i+2} = f_{i+1}+f_i$. Why is it enough, for “$(\mathrm{Fib},+_S)$ is an abelian group”, to check only a few things – which ones?`,
    back: R`$(S,+_S)$ is an abelian group (inherited termwise from $\mathbb{R}$: the zero sequence is neutral, $(-a_n)_{n\in\mathbb{N}}$ is inverse).<br><br>
For the subset $\mathrm{Fib}\subseteq S$, <b>associativity and commutativity hold automatically</b> (they hold for all elements of $S$). What remains to show is:<br>
<b>1. Closure:</b> With $h_n := f_n+g_n$ we have
$$h_{i+2} = f_{i+2}+g_{i+2} = (f_{i+1}+f_i)+(g_{i+1}+g_i) = h_{i+1}+h_i.$$
<b>2. Neutral element in Fib:</b> $0 = 0+0$, so the zero sequence $\in\mathrm{Fib}$.<br>
<b>3. Inverses in Fib:</b> $-f_{i+2} = (-f_{i+1})+(-f_i)$, so $(-f_n)\in\mathrm{Fib}$.`,
    meta: "Exercise sheet 0, Exercise 3 (a), (b)",
    explanation: R`This is the basic pattern that later becomes the <b>subspace criterion</b> (Chapter 5, Lemma 5.0): if a subset lies in a known structure, it inherits all “for all” laws (associativity, commutativity, later the vector space axioms (a)–(d)). One only has to check what <b>existence inside the subset</b> requires: does one stay inside when computing, and do the neutral element and the inverses lie inside again?<br><br>
Why does it work for Fib? Because the recurrence $f_{i+2}=f_{i+1}+f_i$ is <b>linear</b>: sums and multiples of solutions are again solutions. For a nonlinear recurrence this breaks down immediately (counterexample). Fib becomes a vector space over $\mathbb{R}$ in Exercise sheet 2, and in Exercise sheet 3 it gets dimension 2.`,
    example: R`$f = (1,0,1,1,2,3,5,\dots)$ and $g = (0,1,1,2,3,5,8,\dots)$ lie in Fib. Sum: $f+g = (1,1,2,3,5,8,13,\dots)$, and indeed $2 = 1+1$, $3=2+1$, $5 = 3+2$ ✓ – again a Fibonacci-like sequence.`,
    counterexample: R`<b>Nonlinear recurrence:</b> $Q := \{(a_n): a_{n+1} = a_n^2\}\subseteq S$ is not closed: $(1,1,1,\dots)\in Q$, but $(1,1,1,\dots)+(1,1,1,\dots) = (2,2,2,\dots)$ and $2\neq 2^2 = 4$.<br>
<b>Inhomogeneous recurrence:</b> $\{(a_n): a_{n+2}=a_{n+1}+a_n+1\}$ does not contain the zero sequence ($0\neq 0+0+1$) – so it is not a group with respect to $+_S$.`
  },
  // ========================================================================
  // 0c RINGS AND FIELDS
  // ========================================================================
  "la0_def6_ring": {
    title: R`Definition 6: (Commutative) ring`,
    category: R`0c Rings and fields`,
    type: "definition",
    front: R`When is $(M,\circ,\ast)$ a <b>(commutative) ring</b>?`,
    back: R`Let $M$ be a set on which two binary operations “$\circ$” and “$\ast$” are defined. If
<ul><li>$(M,\circ)$ is an <b>abelian group</b>,</li>
<li>$(M,\ast)$ is a <b>(commutative) monoid</b>,</li>
<li>and the <b>distributive laws</b> hold for “$\ast$” over “$\circ$”:
$$x\ast(y\circ z) = (x\ast y)\circ(x\ast z),\qquad (x\circ y)\ast z = (x\ast z)\circ(y\ast z),$$</li></ul>
then $(M,\circ,\ast)$ is a <b>(commutative) ring</b>.`,
    meta: "Script: week 38, Definition 6; Exercise sheet 1, Exercises 6–8",
    explanation: R`A ring is the abstract model of “$\mathbb{Z}$ with $+$ and $\cdot$”: one can add, subtract and multiply – but <b>not necessarily divide</b>. The distributive laws are the link that makes the two operations compatible (multiplying out!).<br><br>
Typically “$\circ$” plays the role of $+$ (with neutral element $0$), and “$\ast$” the role of $\cdot$ (with neutral element $1$). From the distributive laws alone follow rules such as $0\cdot x = 0$ and $(-x)(-y) = xy$ (Theorem 2.2) – so “minus times minus gives plus” is not an axiom, but a theorem!<br><br>
As in Definition 3, the script means a commutative monoid here; non-commutative rings (e.g. $M_{n\times n}(K)$, Exercise sheet 7) are then simply called “ring”.`,
    example: R`<b>1.</b> $(\mathbb{Z},+,\cdot)$ is a commutative ring with $0$ with respect to $+$ and $1$ with respect to $\cdot$; distributivity: $3\cdot(4+5) = 27 = 3\cdot 4+3\cdot 5$.<br>
<b>2.</b> $(\mathbb{Z}_6,+_6,\cdot_6)$ (Exercise sheet 1, Exercise 8(b)): $\bar 2\cdot_6(\bar 4+_6\bar 5) = \bar 2\cdot_6\bar 3 = \bar 0$ and $\bar 2\cdot_6\bar 4+_6\bar 2\cdot_6\bar 5 = \bar 2+_6\bar 4 = \bar 0$ ✓.<br>
<b>3.</b> $\mathbb{Q}[X]$ with polynomial addition and multiplication (Exercise sheet 1, Exercise 7).<br>
<b>4.</b> $(\mathcal{P}(M),\triangle,\cap)$ with zero $\emptyset$ and one $M$ (Exercise sheet 1, Exercise 6).`,
    counterexample: R`<b>1.</b> $(\mathbb{N},+,\cdot)$ is <b>not</b> a ring: $(\mathbb{N},+)$ is not a group ($2$ has no additive inverse).<br>
<b>2.</b> $(2\mathbb{Z},+,\cdot)$ is not a ring in the sense of the script: $(2\mathbb{Z},\cdot)$ is not a monoid ($1\notin 2\mathbb{Z}$).<br>
<b>3.</b> $(\mathbb{Z},+,\ast)$ with $x\ast y := x+y$ is not distributive: $1\ast(1+1) = 3$, but $(1\ast 1)+(1\ast 1) = 4$.`
  },
  "la0_def7_koerper": {
    title: R`Definition 7: Field`,
    category: R`0c Rings and fields`,
    type: "definition",
    front: R`When is $(M,\circ,\ast)$ a <b>field</b>?`,
    back: R`If $(M,\circ,\ast)$ is a <b>commutative ring</b> with neutral elements with respect to “$\circ$” (called $e_\circ$) and with respect to “$\ast$”, and if
$$(M\setminus\{e_\circ\},\ast)$$
is an <b>abelian group</b>, then $(M,\circ,\ast)$ is a <b>field</b>.<br><br>
In the usual notation $(K,+,\cdot,0,1)$: $(K,+)$ is an abelian group with $0$, $(K\setminus\{0\},\cdot)$ is an abelian group with $1$, and the distributive laws hold.`,
    meta: "Script: week 38, Definition 7, Example 3; Exercise sheet 1",
    explanation: R`A field is a ring in which one can <b>divide by every element except $0$</b>. This is exactly what one needs for linear algebra: to solve $\lambda\cdot x = y$ for $x$ (or to divide by $\lambda_1$ in Theorem 4.0), $\lambda^{-1}$ must exist.<br><br>
<b>Why $M\setminus\{e_\circ\}$?</b> Zero can never have a multiplicative inverse (since $0\cdot x = 0\neq 1$, Theorem 2.2 (a) and 2.1 (a)). So one only demands the group structure on the rest. Because $(K\setminus\{0\},\cdot)$ is a group, “$\cdot$” is in particular an <b>operation on $K\setminus\{0\}$</b>: products of nonzero elements are never $0$ – this is Theorem 2.1 (b) (no zero divisors).<br><br>
Fields of the script: $\mathbb{Q},\mathbb{R},\mathbb{C}$, $\mathbb{F}_p$, $\mathbb{F}_4$, $\mathbb{Q}(\sqrt 2)$ (Chapter 3).`,
    example: R`<b>1. Example 3 (script):</b> $(\mathbb{Q},+,\cdot)$: $(\mathbb{Q},+)$ is an abelian group with $0$, $(\mathbb{Q}\setminus\{0\},\cdot)$ is an abelian group, and the distributive laws hold. The inverse of $\tfrac{-5}{3}$ is $\tfrac{-3}{5}$.<br>
<b>2.</b> $\mathbb{Z}_5$ is a field: inverses $\bar 1^{-1}=\bar 1$, $\bar 2^{-1}=\bar 3$ ($2\cdot 3 = 6 = 5+1$), $\bar 4^{-1} = \bar 4$ ($16 = 3\cdot 5+1$).<br>
<b>3.</b> The smallest field: $\mathbb{F}_2=\{\bar 0,\bar 1\}$ with $\bar 1+\bar 1=\bar 0$.`,
    counterexample: R`<b>1.</b> $(\mathbb{Z},+,\cdot)$ is a commutative ring, but <b>not</b> a field: $2$ has no inverse.<br>
<b>2.</b> $\mathbb{Z}_6$ is not a field: $\bar 2\cdot_6\bar 3 = \bar 0$, so “$\cdot_6$” is not an operation on $\mathbb{Z}_6\setminus\{\bar 0\}$ (zero divisors).<br>
<b>3.</b> The zero ring $\{0\}$ is not a field: $\{0\}\setminus\{0\} = \emptyset$ is not a group (Theorem 2.1 (a): in fields $0\neq 1$).`
  },
  "la0_s1_a8_zm": {
    title: R`Exercise sheets 0/1, Exercises 5 & 8: Z_m is a field if and only if m is prime`,
    category: R`0c Rings and fields`,
    type: "aufgabe",
    front: R`How are $+_m$ and $\cdot_m$ defined on $\mathbb{Z}_m=\{\bar 0,\dots,\overline{m-1}\}$, and why is $(\mathbb{Z}_m,+_m,\cdot_m)$ <b>a field if and only if $m$ is a prime number</b>?`,
    back: R`<b>Definition:</b> $\bar k+_m\bar l := \bar a$ resp. $\bar k\cdot_m\bar l := \bar a$, where $0\le a\lt m$ and $m\cdot q + a = k+l$ resp. $= k\cdot l$ (remainder upon division by $m$). $a$ is unique (Exercises 5(a), 8(a)).<br><br>
<b>Ring:</b> For every $m\ge 1$, $\mathbb{Z}_m$ is a commutative ring (Exercise 8(b), via $\rho(r+s) = \rho(\rho(r)+\rho(s))$, $\rho(rs) = \rho(\rho(r)\rho(s))$).<br>
<b>(c) $m$ not prime ⇒ not a field:</b> $m = k\cdot l$ with $1\lt k,l\lt m$ gives $\bar k\cdot_m\bar l = \bar 0$ with $\bar k,\bar l\neq\bar 0$ – a <b>zero divisor</b>. ($m=1$: zero ring.)<br>
<b>(d) $m$ prime ⇒ field:</b> For $1\le k\le m-1$ there are (Bézout) $u,v\in\mathbb{Z}$ with $uk+vm = 1$; then $\bar u$ (reduced to $[0,m)$) is the inverse of $\bar k$. Alternatively: pigeonhole principle (theorem in Chapter 1).`,
    meta: "Exercise sheet 0, Exercise 5; Exercise sheet 1, Exercise 8 (a)–(d); Script: fields F_p (Chapter 3)",
    explanation: R`$\mathbb{Z}_m$ is “arithmetic on a clock with $m$ hours”. Whether one can divide there depends on a single question: are there nonzero elements whose product is $0$?<br><br>
<b>Intuition for (d):</b> If $m$ is prime and $\bar k\neq\bar 0$, then the map $\bar x\mapsto\bar x\cdot_m\bar k$ is <b>injective</b> (from $\bar x\bar k = \bar y\bar k$ it follows that $m\mid (x-y)k$, and since $m$ is prime and $m\nmid k$, we get $m\mid x-y$). An injective map from a finite set into itself is surjective – so $\bar 1$ is also hit. This is the remark at the end of the model solution and the pigeonhole principle from Chapter 1.<br><br>
These fields are called $\mathbb{F}_p$ from Chapter 3 onwards. Finite fields exist exactly with $p^n$ elements ($\mathbb{F}_4$ is <b>not</b> $\mathbb{Z}_4$!).`,
    example: R`<b>$\mathbb{Z}_7$:</b> inverses via Bézout: $1 = 5\cdot 3-2\cdot 7$, so $\bar 3^{-1}=\bar 5$; check $3\cdot 5 = 15 = 2\cdot 7+1$ ✓. Complete list: $\bar 1\leftrightarrow\bar 1$, $\bar 2\leftrightarrow\bar 4$, $\bar 3\leftrightarrow\bar 5$, $\bar 6\leftrightarrow\bar 6$.<br>
<b>Calculating:</b> $\bar 5+_7\bar 4 = \bar 2$ ($9 = 1\cdot 7+2$), $\bar 5\cdot_7\bar 4 = \bar 6$ ($20 = 2\cdot 7+6$).`,
    counterexample: R`<b>$\mathbb{Z}_6$:</b> $\bar 2\cdot_6\bar 3 = \bar 0$, $\bar 3\cdot_6\bar 4 = \bar 0$; $\bar 2$ has no inverse ($2k\bmod 6\in\{0,2,4\}$).<br>
<b>$\mathbb{Z}_4$:</b> $\bar 2\cdot_4\bar 2 = \bar 0$ – that is why the field with 4 elements (Exercise sheet 1, Exercise 9) has to be built differently.`
  },
  "la0_s1_a6_a7": {
    title: R`Exercise sheet 1, Exercises 6 & 7: Rings that are not fields`,
    category: R`0c Rings and fields`,
    type: "aufgabe",
    front: R`Why are $(\mathcal{P}(M),\triangle,\cap)$ (for $|M|\gt 1$) and $\mathbb{Q}[X]$ <b>commutative rings</b>, but <b>not fields</b>?`,
    back: R`<b>$(\mathcal{P}(M),\triangle,\cap)$:</b> zero $=\emptyset$, one $=M$. Distributive: $x\cap(y\triangle z) = (x\cap y)\triangle(x\cap z)$ (element by element with (∗) from Exercise 4). <b>Not a field:</b> for $x\neq\emptyset$, $x\neq M$ we have $x\cap y\subseteq x\subsetneq M$ for all $y$ – so never $x\cap y = M$. Or: $\{t_1\}\cap\{t_2\} = \emptyset$ (zero divisor).<br><br>
<b>$\mathbb{Q}[X]$:</b> polynomials $p = \sum_{i\ge 0} a_i X^i$ (almost all $a_i=0$), $(p\cdot q)_k = \sum_{i+j=k} a_i b_j$. <b>Not a field:</b> $X$ has no inverse, because the constant coefficient of $X\cdot q$ is $(X\cdot q)_0 = 0\cdot b_0 = 0\neq 1$. (Degree argument: for $q\neq 0$, $\deg(Xq) = 1+\deg q\ge 1\gt 0 = \deg(1)$.)`,
    meta: "Exercise sheet 1, Exercises 6 (a), (b) and 7 (a), (b)",
    explanation: R`Both examples show: the ring axioms do <b>not force division</b>. To show that something is not a field, it is enough to have <b>one</b> element $\neq 0$ without an inverse – or a pair of zero divisors (then there can be no inverses, Theorem 2.1 (b)).<br><br>
Remarkable: for $|M| = 1$, $\mathcal{P}(M) = \{\emptyset,M\}$ is <b>indeed</b> a field – namely (up to renaming) $\mathbb{F}_2$. “$\triangle$” is “addition mod 2”, “$\cap$” is “multiplication mod 2” (the and-operation).<br><br>
$\mathbb{Q}[X]$ returns in Chapters 3/4 as a vector space over $\mathbb{Q}$ with basis $\{X^i: i\in\mathbb{N}\}$ – there one only needs addition and scalar multiplication, and the missing division does not matter.`,
    example: R`<b>Zero divisors:</b> $M=\{1,2\}$: $\{1\}\cap\{2\} = \emptyset$, although both are $\neq\emptyset$.<br>
<b>Polynomial product:</b> $(1+2X)(3-X+X^2) = 3+5X-X^2+2X^3$; constant coefficient $1\cdot 3 = 3$.<br>
<b>Distributive:</b> $x=\{1,2\}$, $y=\{2,3\}$, $z=\{3\}$ in $M=\{1,2,3\}$: $x\cap(y\triangle z) = \{1,2\}\cap\{2\} = \{2\}$ and $(x\cap y)\triangle(x\cap z) = \{2\}\triangle\emptyset = \{2\}$ ✓.`,
    counterexample: R`<b>Yet a field:</b> $M=\{t\}$: $\mathcal{P}(M) = \{\emptyset,\{t\}\}$, and $\{t\}\cap\{t\} = \{t\} = $ one – this is $\mathbb{F}_2$ (remark in the model solution to 6(b)).<br>
<b>Constant polynomials:</b> In $\mathbb{Q}[X]$ the constants $\neq 0$ are indeed invertible, e.g. $3\cdot\tfrac13 = 1$ – “not a field” only means: <i>not all</i> elements $\neq 0$ are invertible.`
  },
  "la0_s1_a9_f4": {
    title: R`Exercise sheet 1, Exercise 9: A field with 4 elements`,
    category: R`0c Rings and fields`,
    type: "aufgabe",
    front: R`How does one define “$+$” and “$\cdot$” on $K=\{0,1,a,b\}$ so that a <b>field</b> arises? Why does $\mathbb{Z}_4$ not work?`,
    back: R`<b>Addition:</b> $x+x = 0$ for all $x$, $1+a = b$, $1+b = a$, $a+b = 1$ (and $0$ is neutral).<br>
<b>Multiplication:</b> $1$ neutral, $0\cdot x = 0$, $a\cdot a = b$, $a\cdot b = 1$, $b\cdot b = a$.<br><br>
<b>Why a field?</b> $(K,+)$ corresponds to $(\mathcal{P}(\{1,2\}),\triangle)$ via $0\mapsto\emptyset$, $1\mapsto\{1\}$, $a\mapsto\{2\}$, $b\mapsto\{1,2\}$. $(K\setminus\{0\},\cdot)$ corresponds to $(\mathbb{Z}_3,+_3)$ via $1\mapsto\bar 0$, $a\mapsto\bar 1$, $b\mapsto\bar 2$. Distributivity: case check (6 genuine cases).<br><br>
<b>$\mathbb{Z}_4$ does not work:</b> $\bar 2\cdot_4\bar 2 = \bar 0$ (zero divisor).`,
    meta: "Exercise sheet 1, Exercise 9; Script: examples of fields (Chapter 3, point 2: F_4)",
    explanation: R`The construction is a mini-version of $\mathbb{Q}(\sqrt 2)$: one takes the field $\mathbb{F}_2 = \{0,1\}$ and adjoins a root $a$ of the polynomial $X^2+X+1$ (which has no root in $\mathbb{F}_2$: $0^2+0+1 = 1$, $1^2+1+1 = 1$). Then $a^2 = a+1 = b$, and every element has the form $\lambda+\mu a$ with $\lambda,\mu\in\mathbb{F}_2$: $0, 1, a, 1+a = b$.<br><br>
That is why $\mathbb{F}_4$ is a <b>2-dimensional vector space over $\mathbb{F}_2$</b> with basis $\{1,a\}$ (Chapters 3/4) – just as $\mathbb{Q}(\sqrt 2)$ has basis $\{1,\sqrt 2\}$ over $\mathbb{Q}$. In general, finite fields always have $p^n$ elements ($\mathbb{F}_{p^n}$).`,
    example: R`Check $a\cdot(1+b) = a\cdot a = b$ and $a\cdot 1+a\cdot b = a+1 = b$ ✓.<br>
Inverses: $a^{-1} = b$ (since $ab=1$), $b^{-1} = a$, $1^{-1} = 1$.<br>
Powers of $a$: $a^1 = a$, $a^2 = b$, $a^3 = ab = 1$ – the multiplicative group is cyclic of order 3, like $\mathbb{Z}_3$.`,
    counterexample: R`<b>1.</b> $\mathbb{Z}_4$: $\bar 2\cdot_4\bar 2 = \bar 0$, and $\bar 2$ has no inverse ($\bar 2\cdot\bar k\in\{\bar 0,\bar 2\}$).<br>
<b>2.</b> If one naively chooses $a\cdot a = 1$, then $(a+1)^2 = a^2+2a+1 = 1+0+1 = 0$ (in characteristic 2), so $b\cdot b = 0$ with $b = a+1 \neq 0$ – a zero divisor, not a field.`
  }
};
})();
