/* ==========================================================================
   LINEAR ALGEBRA I – CHAPTER 1 (English): The language of mathematics
   (Logical operators, quantifiers, proof methods, countable/uncountable)
   Linear Algebra I – Prof. Dr. Lorenz Halbeisen, HS 2026
   English translation of data_kapitel1.js. Formulas, HTML and ids are identical.
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_EN_KAPITEL_1 = {
  // ========================================================================
  // 1a LOGICAL OPERATORS
  // ========================================================================
  "la1_def_operatoren": {
    title: "Definition: Logical operators and truth table",
    category: "1a Logical operators",
    type: "definition",
    front: R`Which <b>logical operators</b> does the script introduce, how are $\leftrightarrow$, $\veebar$ and $\neq$ abbreviated, and what does the <b>truth table</b> of $A\to B$ look like?`,
    back: R`Logical operators are 1-place or 2-place operators on statements $A,B,C,\dots$:
<ul><li>$\neg A$: “NOT $A$”, $\;A\wedge B$: “$A$ AND $B$”, $\;A\vee B$: “$A$ OR $B$” (inclusive OR),</li>
<li>$A\to B$: “IF $A$ THEN $B$”, also “$A$ IMPLIES $B$”.</li></ul>
<b>Abbreviations:</b> $A\leftrightarrow B$ for $(A\to B)\wedge(B\to A)$; $\;A\veebar B$ (“either $A$ or $B$”) for $(A\vee B)\wedge\neg(A\wedge B)$; $\;x\neq y$ for $\neg(x=y)$.<br><br>
<b>Truth table</b> (0 false, 1 true):
$$\begin{array}{cc|cccc} A&B&\neg A&A\wedge B&A\vee B&A\to B\\\hline 0&0&1&0&0&1\\0&1&1&0&1&1\\1&0&0&0&1&0\\1&1&0&1&1&1\end{array}$$`,
    meta: "Script: Ch. 1, logical operators, truth table",
    explanation: R`The truth table is the <b>semantics</b> (meaning) of the operators. The only entry that takes getting used to is $A\to B$: an implication is <b>false only if $A$ is true and $B$ is false</b>. If $A$ is false, then $A\to B$ is always true (“ex falso quodlibet”).<br><br>
<b>Intuition:</b> $A\to B$ is a <i>promise</i>: “If it rains, I take the umbrella.” The promise is broken only if it rains <i>and</i> I do not take the umbrella. If it does not rain, the promise is not broken – whatever I do.<br><br>
<b>Inclusive OR:</b> $A\vee B$ is also true when both are true. The exclusive $\veebar$ is “rarely needed” – but it reappears as the symmetric difference $\triangle$ (Exercise sheet 0) and as addition in $\mathbb{F}_2$.`,
    example: R`<b>Example from the script:</b> If $A$ is the statement $0=1$ and $B$ the statement $1=1$ (interpreted in $\mathbb{N}$), then $A$ is false and <b>both</b> $A\to B$ <b>and</b> $A\to\neg B$ are true: “$0=1\to 1=1$” and “$0=1\to 1\neq 1$” are both true.<br>
<b>Numerical example:</b> “$x\gt 3\to x^2\gt 9$” is true for $x=5$ ($1\to 1$), true for $x=-4$ ($0\to 1$) and true for $x=1$ ($0\to 0$).`,
    counterexample: R`<b>1.</b> “$x^2\gt 9\to x\gt 3$” is <b>false</b> for $x=-4$: $16\gt 9$ is true, $-4\gt 3$ is false (row $1\to 0$). The converse of a true implication need not be true!<br>
<b>2.</b> Inclusive vs. exclusive: for $A$: “$2$ is even” and $B$: “$2$ is prime”, $A\vee B$ is true, but $A\veebar B$ is false (both are true).`
  },
  "la1_def_aequivalenz": {
    title: "Definition: Logical equivalence, de Morgan",
    category: "1a Logical operators",
    type: "definition",
    front: R`When are two statements <b>logically equivalent</b> ($A\iff B$)? Name the four basic equivalences of the script (including <b>de Morgan</b>) and explain why $\neg$ and $\wedge$ are enough to express everything.`,
    back: R`$A$ and $B$ are <b>logically equivalent</b>, written $A\iff B$, if both $A\to B$ and $B\to A$ are provable from the logical axioms. (For example $A\iff A$, $A\iff A\wedge A$.)<br><br>
<b>Examples:</b>
$$\neg\neg A\iff A\quad\text{(double negation rule)},\qquad A\to B\iff\neg A\vee B,$$
$$\neg(A_1\wedge\dots\wedge A_n)\iff\neg A_1\vee\dots\vee\neg A_n,\qquad \neg(A_1\vee\dots\vee A_n)\iff\neg A_1\wedge\dots\wedge\neg A_n$$
(the last two: <b>de Morgan’s rules</b>).<br><br>
Hence everything can be written with only “$\neg$” and “$\wedge$” (or “$\neg$” and “$\vee$”):
$$A\vee B\iff\neg(\neg A\wedge\neg B),\qquad A\wedge B\iff\neg(\neg A\vee\neg B).$$`,
    meta: "Script: Ch. 1, definition (logically equivalent), examples of logical equivalences",
    explanation: R`Logically equivalent statements are <b>interchangeable</b>: in every interpretation they are true or false at the same time (same column in the truth table). This is the tool for rewriting statements until one can prove them – e.g. turning an implication into its contrapositive (next card).<br><br>
<b>De Morgan intuitively:</b> “not (both)” means “at least one is not”; “not (at least one)” means “none”. When negating, $\wedge$ and $\vee$ are swapped – just as $\forall$ and $\exists$ are swapped when negating quantifiers.<br><br>
<b>$A\to B\iff\neg A\vee B$</b> explains the truth table of the implication: $A\to B$ is true as soon as $A$ is false or $B$ is true.`,
    example: R`<b>1.</b> Negation of “$x\gt 0$ and $x\lt 5$”: “$x\le 0$ or $x\ge 5$”. For $x=7$: original false, negation true ✓.<br>
<b>2.</b> “If $n$ is divisible by $4$, then $n$ is even” $\iff$ “$n$ is not divisible by $4$ or $n$ is even”. For $n=6$: $0\to 1$ resp. $1\vee 1$, both true.<br>
<b>3.</b> Truth table check of $\neg(A\wedge B)\iff\neg A\vee\neg B$ for $A=1,B=0$: left $\neg 0 = 1$, right $0\vee 1 = 1$ ✓.`,
    counterexample: R`<b>1. Wrong de Morgan:</b> $\neg(A\wedge B)$ is <b>not</b> equivalent to $\neg A\wedge\neg B$: for $A$: “$6$ is even” (true), $B$: “$6\gt 10$” (false), $\neg(A\wedge B)$ is true, but $\neg A\wedge\neg B$ is false.<br>
<b>2.</b> $A\to B$ is <b>not</b> equivalent to $B\to A$ (converse): “$n=4\to n$ is even” is true, but “$n$ even $\to n=4$” is false for $n=2$.`
  },
  "la1_kontraposition_aequivalenz": {
    title: "The contrapositive: A → B ⟺ ¬B → ¬A",
    category: "1a Logical operators",
    type: "satz",
    front: R`Using the basic equivalences, derive that $A\to B\iff\neg B\to\neg A$ holds.`,
    back: R`$$A\to B\iff\neg A\vee B\iff B\vee\neg A\iff\neg\neg B\vee\neg A\iff\neg B\to\neg A.$$
Steps: (1) $A\to B\iff\neg A\vee B$; (2) $\vee$ is commutative ($A\vee B\iff B\vee A$); (3) double negation $B\iff\neg\neg B$; (4) again $C\to D\iff\neg C\vee D$ with $C=\neg B$, $D=\neg A$.<br><br>
So: $\boxed{A\to B\iff\neg B\to\neg A}$ – “we will need this later” (contrapositive rule, proof of $\sqrt 2\notin\mathbb{Q}$, Theorem 2.1 (b), Theorem 4.0, Lemma 5.3 (iii)).`,
    meta: "Script: Ch. 1, further examples of logical equivalences",
    explanation: R`The contrapositive is the same statement <b>seen from the other side</b>: “If it rains, the street is wet” says exactly the same as “If the street is not wet, it does not rain.”<br><br>
<b>Why useful?</b> Often the negation $\neg B$ is a <b>more concrete assumption</b> than $A$. Example: “$x\cdot y = 0\to(x=0\vee y=0)$” is hard to show directly; the contrapositive “$(x\neq 0\wedge y\neq 0)\to x\cdot y\neq 0$” gives us the inverses $x^{-1},y^{-1}$ (Theorem 2.1 (b)). Likewise, in Theorem 4.0 (linear independence ⟺ only the trivial representation of 0) each direction is proved by contraposition.<br><br>
<b>Careful with negation:</b> $\neg(A\to B)\iff A\wedge\neg B$ (see the proof of Theorem 4.0).`,
    example: R`<b>1.</b> “$n^2$ even $\to n$ even” is shown by contraposition: “$n$ odd $\to n^2$ odd”: $n = 2k+1\Rightarrow n^2 = 4k^2+4k+1$ is odd. E.g. $n=7$: $49$ is odd.<br>
<b>2.</b> In $\mathbb{Q}$: “$x\neq 0\wedge y\neq 0\to xy\neq 0$” is the contrapositive of “$xy=0\to x=0\vee y=0$”; e.g. $\tfrac23\cdot(-\tfrac{9}{4}) = -\tfrac32\neq 0$.`,
    counterexample: R`<b>Converse ≠ contrapositive:</b> “$n$ divisible by $6$ $\to n$ even” is true; the <i>converse</i> “$n$ even $\to$ divisible by $6$” is false ($n=4$). The <i>negation of both sides</i> “$n$ not divisible by 6 $\to n$ odd” is also false ($n=4$) – only the contrapositive “$n$ odd $\to$ not divisible by 6” is equivalent.`
  },
  // ========================================================================
  // 1b LOGICAL QUANTIFIERS
  // ========================================================================
  "la1_def_quantoren": {
    title: "Definition: Logical quantifiers ∃ and ∀",
    category: "1b Logical quantifiers",
    type: "definition",
    front: R`What do $\exists x\,A(x)$ and $\forall x\,A(x)$ mean? How are the quantifiers related through negation? Is $\forall x\in\emptyset\,(x\neq x)$ true?`,
    back: R`The logical quantifiers are the <b>existential quantifier</b> “$\exists$” and the <b>universal quantifier</b> “$\forall$”; they say something about the elements of a domain (a set):
<ul><li>$\exists x\,A(x)$: “there exists an $x$ such that the statement $A$ holds for $x$”,</li>
<li>$\forall x\,A(x)$: “for all $x$, the statement $A$ holds for $x$”.</li></ul>
Abbreviations: $\forall x\in\mathbb{Z}\,(x+0=x)$ for $\forall x\,(x\in\mathbb{Z}\to x+0=x)$, and $\exists x\in\mathbb{Z}\,(x+x=0)$ for $\exists x\,(x\in\mathbb{Z}\wedge x+x=0)$.<br><br>
<b>Duality:</b>
$$\forall x\,B(x)\iff\neg\exists x\,\neg B(x),\qquad\exists x\,B(x)\iff\neg\forall x\,\neg B(x).$$
<b>Remark:</b> $\forall x\in\emptyset\,(x\neq x)\iff\neg\exists x\in\emptyset\,(x=x)$ – and this is <b>true</b>, since there is no $x$ in $\emptyset$.`,
    meta: "Script: Ch. 1, logical quantifiers, remark on ∀x∈∅",
    explanation: R`<b>Watch the abbreviations:</b> with the universal quantifier the domain is attached with “$\to$”, with the existential quantifier with “$\wedge$”. Mixing these up gives nonsense: $\exists x\,(x\in\mathbb{Z}\to x+x=0)$ is trivially true (take an $x\notin\mathbb{Z}$).<br><br>
<b>Negating:</b> “Not everybody is good” = “there is someone who is not good”. When negating, $\neg$ moves inwards and flips every quantifier ($\forall\leftrightarrow\exists$). This is how one negates long statements such as the definition of linear independence.<br><br>
<b>Empty universal statements are true</b> (“vacuous truth”): one needs this all the time, e.g. $\emptyset$ is linearly independent (basis of the zero space, Chapter 4), because the condition “$\forall x\in\emptyset\dots$” is satisfied vacuously.`,
    example: R`<b>1. Script:</b> $\neg\forall x\forall y\,(x=y\to y\neq x)\iff\exists x\exists y\,(x=y\wedge y=x)$ (using $A\to B\iff\neg A\vee B$, de Morgan and double negation) – true, e.g. $x=y=3$.<br>
<b>2.</b> Negation of “$\forall n\in\mathbb{N}\,(n^2\ge n)$”: “$\exists n\in\mathbb{N}\,(n^2\lt n)$” – false, so the original is true ($0\ge 0$, $1\ge 1$, $4\ge 2$, …).<br>
<b>3.</b> “$\exists x\in\mathbb{Z}\,(x+x=0)$” is true with $x=0$.`,
    counterexample: R`<b>1. Order of quantifiers:</b> $\forall x\in\mathbb{Z}\,\exists y\in\mathbb{Z}\,(x+y=0)$ is true ($y=-x$), but $\exists y\in\mathbb{Z}\,\forall x\in\mathbb{Z}\,(x+y=0)$ is false: the same $y$ would have to satisfy $1+y=0$ and $2+y=0$.<br>
<b>2. Wrong negation:</b> The negation of “all prime numbers are odd” is <b>not</b> “all prime numbers are even”, but “there is an even prime number” (namely $2$).`
  },
  "la1_gleichheit": {
    title: "Properties of the equality relation “=”",
    category: "1b Logical quantifiers",
    type: "proposition",
    front: R`Which three provable properties does the equality relation “$=$” have, and what follows from them?`,
    back: R`<ul><li>$\forall x\,(x=x)$ — <b>reflexive</b>,</li>
<li>$\forall x\forall y\,(x=y\to y=x)$ — <b>symmetric</b>,</li>
<li>$\forall x\forall y\forall z\,\big((x=y\wedge y=z)\to x=z\big)$ — <b>transitive</b>.</li></ul>
Thus the equality relation “$=$” is an <b>equivalence relation</b> (see Analysis).`,
    meta: "Script: Ch. 1, provable properties of the equality relation",
    explanation: R`These three properties are exactly what one needs to compute with “$=$” in ordinary chains: $a = b = c\Rightarrow a=c$. Every relation with these three properties behaves like an “equality on a coarser level”.<br><br>
<b>Where does this come back?</b> In Chapter 5, $x\sim y:\iff x-y\in W$ is an equivalence relation (Lemma 5.4) – “equal up to an error in $W$”. Its equivalence classes are the affine spaces $a+W$, and from them the quotient space $V/W$ arises. Likewise $\mathbb{Z}_m$ is a set of equivalence classes (“equal up to multiples of $m$”). In Exercise sheet 5, $x\sim y:\iff\exists\lambda\neq 0\,(\lambda x=y)$ is an equivalence relation.`,
    example: R`<b>1.</b> Congruence mod $5$: $x\equiv y:\iff 5\mid x-y$ is reflexive ($5\mid 0$), symmetric ($5\mid 12-2 \Rightarrow 5\mid 2-12$) and transitive ($12\equiv 2$, $2\equiv 7\Rightarrow 12\equiv 7$).<br>
<b>2.</b> On $\mathbb{R}^2$: $x\sim y:\iff x-y\in\{(t,0):t\in\mathbb{R}\}$; e.g. $(3,5)\sim(-1,5)$, since $(4,0)$ lies on the $x$-axis.`,
    counterexample: R`<b>1.</b> “$\lt$” on $\mathbb{N}$ is transitive, but not reflexive ($3\lt 3$ is false) and not symmetric.<br>
<b>2.</b> “$\le$” is reflexive and transitive, but not symmetric: $2\le 5$, but $5\not\le 2$.<br>
<b>3.</b> “$|x-y|\le 1$” on $\mathbb{R}$ is reflexive and symmetric, but not transitive: $0\sim 0.8$, $0.8\sim 1.6$, but $|0-1.6| = 1.6\gt 1$.`
  },
  // ========================================================================
  // 1c PROOF METHODS
  // ========================================================================
  "la1_schlussregeln": {
    title: "Proof and rules of inference: modus ponens, contraposition, contradiction",
    category: "1c Proof methods",
    type: "definition",
    front: R`What is a <b>mathematical proof</b>? State <b>modus ponens</b>, the <b>contraposition rule</b> and the <b>contradiction rule</b>.`,
    back: R`A <b>proof</b> is a <b>finite sequence of statements</b> such that every statement is either an axiom or follows from earlier statements by a rule of inference.<br><br>
<b>Modus ponens:</b> $\dfrac{A,\quad A\to B}{B}$ (“from $A$ and $A\to B$ we may conclude $B$”; this rule is enough to prove everything).<br>
<b>Contraposition rule:</b> $\dfrac{A,\quad\neg B\to\neg A}{B}$ (modus ponens with $A\to B\iff\neg B\to\neg A$).<br>
<b>Contradiction rule:</b> $\dfrac{\neg A\to(C\wedge\neg C)}{A}$ ($C$ an arbitrary statement).<br>
<b>Further:</b> $\dfrac{A\to B,\;B\to C}{A\to C}$, $\;\dfrac{A\to B,\;A\to C}{A\to(B\wedge C)}$, $\;\dfrac{A\to C,\;B\to C}{(A\vee B)\to C}$.`,
    meta: "Script: Ch. 1, proof methods",
    explanation: R`Above the fraction line stand the assumptions, below it the conclusion. All proof techniques of the script are applications of these rules:<br>
• <b>Direct proof</b> = chains of modus ponens / transitivity ($A\to B$, $B\to C$ ⇒ $A\to C$).<br>
• <b>Proof by contraposition</b> = one shows $\neg B\to\neg A$ instead of $A\to B$.<br>
• <b>Proof by contradiction</b> = one assumes $\neg A$ and derives a contradiction $C\wedge\neg C$. Since $C\wedge\neg C$ is always false, $\neg A\to(C\wedge\neg C)$ can only be true if $\neg A$ is false, i.e. $A$ is true.<br>
• <b>Case distinction</b> = the rule $\frac{A\to C,\;B\to C}{(A\vee B)\to C}$.<br><br>
“Usually one does not mention the use of modus ponens and only shows $A\to B$.”`,
    example: R`<b>Modus ponens:</b> $A$: “$6$ is divisible by $3$” (true), $A\to B$: “divisible by $3$ $\to$ digit sum divisible by 3”, so $B$: the digit sum of $6$ is divisible by 3 ✓.<br>
<b>Case distinction:</b> $n^2+n$ is even: case $n$ even ($n=4$: $20$), case $n$ odd ($n=5$: $30$) – in both cases a factor of $n(n+1)$ is even.`,
    counterexample: R`<b>Invalid rule of inference (“affirming the consequent”):</b> $\dfrac{B,\;A\to B}{A}$ is <b>invalid</b>. Example: $B$: “$4$ is even” (true), $A\to B$: “$4$ divisible by 8 $\to 4$ even” (true), but $A$: “$4$ divisible by 8” is false.<br>
<b>Infinite “proofs”</b> do not exist: a proof is by definition a <i>finite</i> sequence – “we check $n=0,1,2,\dots$ one by one” is not a proof (that is what the induction axiom is for).`
  },
  "la1_bsp_primzahlen": {
    title: "Direct proof: There is no largest prime number",
    category: "1c Proof methods",
    type: "beweis",
    front: R`Prove directly: in $\mathbb{N}$ there is no largest prime number, i.e. $\neg\exists p\in\mathbb{P}\;\forall q\in\mathbb{P}\,(q\le p)$.`,
    back: R`Let $p\in\mathbb{P}$ be any prime and $r := q_0\cdot q_1\cdots q_n$ the product of <b>all</b> primes $q_i$ with $q_i\le p$.<br>
Then $r+1$ is <b>not divisible</b> by any $q_i$ for $0\le i\le n$ (remainder $1$).<br>
$\Rightarrow$ In the prime factorisation of $r+1$ there occurs a prime $p_0$ with $p_0\gt p$.<br>
Since $p$ was arbitrary, we have shown:
$$\forall p\in\mathbb{P}\;\exists p_0\in\mathbb{P}\,(p_0\gt p)\iff\neg\exists p\in\mathbb{P}\;\neg\forall p_0\in\mathbb{P}\,\neg(p_0\gt p)\iff\neg\exists p\in\mathbb{P}\;\forall q\in\mathbb{P}\,(q\le p).$$
(In the last step $p_0$ was renamed to $q$.)`,
    meta: "Script: Ch. 1, example (direct proof)",
    explanation: R`<b>Idea:</b> From all the “small” primes one builds a number that none of them divides. Its prime factors must therefore be “new”, i.e. larger than $p$.<br><br>
<b>Logic behind it:</b> The statement $A$ is the negation of an existence statement. Instead, the proof shows the equivalent $\forall\exists$-statement (“for every prime there is a larger one”) and transforms it using $\forall x\,B\iff\neg\exists x\,\neg B$ and $\neg(p_0\gt p)\iff p_0\le p$. This shows how the quantifier rules are used in a real proof.<br><br>
<b>Common misunderstanding:</b> $r+1$ does <b>not have to be prime itself</b> – only its prime factors must be larger than $p$.`,
    example: R`$p=5$: $r = 2\cdot 3\cdot 5 = 30$, $r+1 = 31$ is prime and $31\gt 5$.<br>
$p=7$: $r = 210$, $r+1 = 211$ (prime) $\gt 7$.`,
    counterexample: R`$p=13$: $r = 2\cdot 3\cdot 5\cdot 7\cdot 11\cdot 13 = 30030$, and $r+1 = 30031 = 59\cdot 509$ is <b>not prime</b>. Still: the prime factors $59$ and $509$ are $\gt 13$ – exactly what the proof claims. Whoever claims “$r+1$ is prime” makes a mistake.`
  },
  "la1_bsp_wurzel2": {
    title: "Proof by contraposition: √2 ∉ ℚ",
    category: "1c Proof methods",
    type: "beweis",
    front: R`How does the script prove $\sqrt 2\notin\mathbb{Q}$ by <b>contraposition</b>? What are $A$ and $B$?`,
    back: R`Let $B$: “$\sqrt 2\notin\mathbb{Q}$” and $A$: “$(\sqrt 2)^2 = 2$”. By definition of $\sqrt 2$, $A$ is true; with modus ponens it suffices to show $A\to B$.<br>
Instead of $A\to B$ we show the <b>contrapositive</b> $\neg B\to\neg A$, i.e. $\sqrt 2\in\mathbb{Q}\to(\sqrt 2)^2\neq 2$:
$$\sqrt 2\in\mathbb{Q}\Rightarrow\exists m\,\exists n\;\Big(\sqrt 2 = \tfrac mn\text{ with }m,n\gt 1\text{ and }ggT(m,n)=1\Big)\Rightarrow ggT(m^2,n^2)=1\Rightarrow\tfrac{m^2}{n^2}\neq 2\Rightarrow(\sqrt 2)^2\neq 2.$$
With the contraposition rule $B$ follows, i.e. $\sqrt 2\notin\mathbb{Q}$.`,
    meta: "Script: Ch. 1, example (proof by contraposition)",
    explanation: R`<b>Key step:</b> A fully reduced fraction stays reduced when squared ($ggT(m,n)=1\Rightarrow ggT(m^2,n^2)=1$, unique prime factorisation). A reduced fraction $\tfrac{m^2}{n^2}$ with denominator $n^2\gt 1$ is not an integer, hence $\neq 2$. That one may assume $n\gt 1$ comes from the fact that $n=1$ would mean $\sqrt 2 = m\in\mathbb{N}$ – impossible because $1^2 = 1\lt 2\lt 4 = 2^2$ (and $m\gt 1$ follows from $\sqrt 2\gt 1$).<br><br>
<b>Why contraposition?</b> “$\sqrt 2\in\mathbb{Q}$” provides concrete objects $m,n$ that one can compute with. The direct statement “$\sqrt 2\notin\mathbb{Q}$” is a negation – one cannot do much with it.<br><br>
The irrationality of $\sqrt 2$ is exactly why $\mathbb{Q}(\sqrt 2) = \{a+b\sqrt 2: a,b\in\mathbb{Q}\}$ is a <b>strictly larger</b> field than $\mathbb{Q}$, and why $a^2-2b^2\neq 0$ for $(a,b)\neq(0,0)$ (Chapter 3).`,
    example: R`Try $\tfrac{m}{n} = \tfrac75$: $\tfrac{49}{25}$ – reduced, $\neq 2$. Try $\tfrac{17}{12}$: $\tfrac{289}{144}\approx 2.007$, reduced ($ggT(289,144) = 1$), $\neq 2$. Likewise $\sqrt 3\notin\mathbb{Q}$, $\sqrt 6\notin\mathbb{Q}$ (Exercise sheet 3, Exercise 19, auxiliary lemma 1).`,
    counterexample: R`The proof does <b>not</b> work for $\sqrt 4$: there $\tfrac{m}{n} = \tfrac21$ with denominator $n = 1$, and $\tfrac{m^2}{n^2} = 4$ is indeed an integer. The argument “reduced $\Rightarrow\neq$ integer” needs $n\gt 1$ – for $\sqrt 2$ this holds (no $m\in\mathbb{N}$ has $m^2 = 2$), for $\sqrt 4$ it does not.`
  },
  "la1_bsp_induktion": {
    title: "Induction proof: |P(M)| = 2ⁿ",
    category: "1c Proof methods",
    type: "beweis",
    front: R`State the <b>induction axiom</b> and use it to prove: if $M$ has exactly $n$ elements, then $|\mathcal{P}(M)| = 2^n$.`,
    back: R`<b>Induction axiom:</b> If $A(n)$ is a statement about $n\in\mathbb{N}$ and
$$\underbrace{A(0)}_{\text{base case}}\wedge\underbrace{\forall n\,\big(A(n)\to A(n+1)\big)}_{\text{induction step}},$$
then $\forall n\,A(n)$ holds.<br><br>
<b>Proof:</b> $A(n)$: “$|M| = n\to|\mathcal{P}(M)| = 2^n$”.<br>
<b>Base case:</b> $|M|=0\Rightarrow M=\emptyset$, $\mathcal{P}(M)=\{\emptyset\}$, $|\mathcal{P}(M)| = 1 = 2^0$.<br>
<b>Step:</b> Let $|M| = n$ and $A(n)$ be true. For $\tilde M := M\cup\{a\}$ with $a\notin M$ we have $|\tilde M| = n+1$ and
$$\mathcal{P}(\tilde M) = \mathcal{P}(M)\cup\big\{x\cup\{a\}: x\in\mathcal{P}(M)\big\},$$
a disjoint union of two sets with $2^n$ elements each. Hence $|\mathcal{P}(\tilde M)| = 2\cdot 2^n = 2^{n+1}$.`,
    meta: "Script: Ch. 1, example (induction proof)",
    explanation: R`<b>Domino picture:</b> the first stone falls ($A(0)$), and every falling stone knocks over the next one ($A(n)\to A(n+1)$) – so all fall.<br><br>
<b>Idea of the step:</b> every subset of $\tilde M$ <b>either contains $a$ or does not</b>. Those without $a$ are exactly the subsets of $M$; those with $a$ arise from these by adding $a$. So one new element doubles the number of subsets.<br><br>
Since $0\in\mathbb{N}$ in our convention, the induction starts at $0$ – with the empty set, which has exactly one subset ($\emptyset$ itself).`,
    example: R`$M=\{1,2\}$: $\mathcal{P}(M) = \{\emptyset,\{1\},\{2\},\{1,2\}\}$, so $4 = 2^2$.<br>
$\tilde M = \{1,2,3\}$: the 4 old ones plus $\{3\},\{1,3\},\{2,3\},\{1,2,3\}$ – together $8 = 2^3$ ✓.`,
    counterexample: R`<b>Without a base case everything breaks:</b> $A(n)$: “$n = n+1$”. The step $A(n)\to A(n+1)$ is correct (add $1$), but $A(0)$: “$0=1$” is false – so nothing follows.<br>
<b>Without a correct step:</b> the statement “$n^2+n+41$ is prime” holds for $n=0,\dots,39$, but for $n=40$ we get $1681 = 41^2$ – many checked cases do not replace an induction step.`
  },
  "la1_satz_cantor": {
    title: "Proof by contradiction: Cantor’s theorem",
    category: "1c Proof methods",
    type: "satz",
    front: R`State and prove <b>Cantor’s theorem</b>: no function $g: M\to\mathcal{P}(M)$ is surjective.`,
    back: R`<b>Cantor’s theorem:</b> If $M$ is any set (finite or infinite) and $g: M\to\mathcal{P}(M)$ is any function, then $g$ is not surjective, i.e. $\exists x\in\mathcal{P}(M)\;\forall a\in M\,(g(a)\neq x)$.<br><br>
<b>Proof:</b> Define $Y := \{a\in M: a\notin g(a)\}$. Then $Y\subseteq M$, so $Y\in\mathcal{P}(M)$.<br>
Let $A$ be the statement $\neg\exists a\in M\,(g(a)=Y)$; we derive a contradiction from $\neg A$. Let $a_0\in M$ with $g(a_0) = Y$. Then
$$a_0\in Y\iff a_0\notin g(a_0)\iff a_0\notin Y,$$
i.e. $\neg A\to(a_0\in Y\wedge a_0\notin Y)$. By the <b>contradiction rule</b> $A$ follows: $g$ is not surjective.`,
    meta: "Script: Ch. 1, example (proof by contradiction), Cantor’s theorem",
    explanation: R`<b>Diagonal idea:</b> $Y$ is built so that it differs from <b>every</b> function value $g(a)$ – and precisely at the element $a$: if $a$ lies in $g(a)$, then $a$ is not in $Y$, and vice versa. So $Y$ cannot be any $g(a)$.<br><br>
One can picture $g$ as a table (row $a$, column $b$, entry “$b\in g(a)$?”). $Y$ arises by <b>flipping the diagonal</b> – it deviates from row $a$ at the position $(a,a)$.<br><br>
<b>Consequence:</b> $\mathcal{P}(M)$ is always “strictly larger” than $M$; in particular $\mathcal{P}(\mathbb{N})$ (and hence $\mathbb{R}$) is uncountable. In Exercise sheet 6 (Exercise 27) this gives: the dual space $c_{00}(\mathbb{F}_2)^*$ is uncountable – larger than $c_{00}(\mathbb{F}_2)$ itself.`,
    example: R`$M=\{1,2,3\}$, $g(1) = \{1,2\}$, $g(2) = \{1\}$, $g(3) = \{2,3\}$.<br>
$1\in g(1)$ → $1\notin Y$; $\;2\notin g(2)$ → $2\in Y$; $\;3\in g(3)$ → $3\notin Y$. So $Y = \{2\}$ – and indeed $\{2\}$ is not a function value. (For finite $M$ one also sees it by counting: $3$ values, but $2^3 = 8$ subsets.)`,
    counterexample: R`<b>The other way round works:</b> $M\to\mathcal{P}(M)$, $a\mapsto\{a\}$ is <b>injective</b> – so $\mathcal{P}(M)$ is at least as large as $M$, but never equally large. E.g. $\{1,2,3\}\to\{\{1\},\{2\},\{3\}\}$ hits only $3$ of the $8$ subsets.<br>
<b>No surjection $\mathbb{N}\to\mathcal{P}(\mathbb{N})$</b>, although there is a surjection $\mathbb{N}\to\mathbb{Z}$ ($0,1,-1,2,-2,\dots$) – “infinite” is not the same as “infinite”.`
  },
  // ========================================================================
  // 1d COUNTABLE, PIGEONHOLE PRINCIPLE
  // ========================================================================
  "la1_def_abzaehlbar": {
    title: "Definition: Countable and uncountable",
    category: "1d Countable and pigeonhole principle",
    type: "definition",
    front: R`When is a set <b>countable</b> resp. <b>uncountable</b>? Why is $\mathbb{R}$ uncountable?`,
    back: R`A set $M$ is called <b>countable</b> if it is finite or can be counted by the natural numbers from $\mathbb{N}$, i.e. if there is a <b>bijection $f:\mathbb{N}\to M$</b>; otherwise $M$ is called <b>uncountable</b>.<br><br>
Examples of infinite countable sets: $\mathbb{N},\mathbb{Z},\mathbb{Q},\mathbb{P}$ (primes), $2\cdot\mathbb{Z}$.<br><br>
<b>$\mathbb{R}$ is uncountable:</b> There is a bijection between $\mathbb{R}$ and $\mathcal{P}(\mathbb{N})$. By Cantor’s theorem there is no surjection $\mathbb{N}\to\mathcal{P}(\mathbb{N})$, so $\mathcal{P}(\mathbb{N})$ – and hence $\mathbb{R}$ – is not countable.`,
    meta: "Script: Ch. 1, remark on countable and uncountable",
    explanation: R`Countable means: one can write the elements in a <b>(possibly infinite) list</b> $f(0),f(1),f(2),\dots$ in which every element appears at some point.<br><br>
Surprisingly, $\mathbb{Z}$ and even $\mathbb{Q}$ are “not larger” than $\mathbb{N}$, although they seem to be at first glance. $\mathbb{R}$, on the other hand, is strictly larger – no list captures all real numbers (diagonal argument).<br><br>
<b>Relevance for linear algebra:</b> Infinite-dimensional vector spaces have bases of different “size” (cardinality). Theorem 4.6 (all bases have the same size) also holds there; but $\dim(V^*) = \dim(V)$ (Theorem 6.2) holds only in the finite-dimensional case: $c_{00}(\mathbb{F}_2)$ has a countable basis, $c_{00}(\mathbb{F}_2)^*$ is uncountable (Exercise sheet 6, Exercise 27).`,
    example: R`<b>$\mathbb{Z}$ is countable:</b> $f(0)=0$, $f(1)=1$, $f(2)=-1$, $f(3)=2$, $f(4)=-2$, …, i.e. $f(2k-1) = k$, $f(2k) = -k$.<br>
<b>Finite subsets of $\mathbb{N}$ are countable</b> (model solution, Exercise sheet 6): assign to $S=\{m_1,\dots,m_n\}$ the product of the $m_i$-th primes (counting $p_0 = 2$, $p_1 = 3$, $p_2 = 5$, …), e.g. $\{0,2\}\mapsto 2\cdot 5 = 10$ (injective thanks to unique prime factorisation).`,
    counterexample: R`<b>$\mathcal{P}(\mathbb{N})$ and $\mathbb{R}$</b> are uncountable. Also the set of <b>all</b> 0-1 sequences $\{0,1\}^{\mathbb{N}}$ is uncountable (it corresponds to $\mathcal{P}(\mathbb{N})$: a sequence = indicator of a subset, e.g. $(1,0,1,0,\dots)\leftrightarrow\{0,2,4,\dots\}$) – in contrast to the sequences with only finitely many ones ($c_{00}(\mathbb{F}_2)$), which are countable.`
  },
  "la1_satz_schubfach": {
    title: "Pigeonhole principle and the theorem on Z_p",
    category: "1d Countable and pigeonhole principle",
    type: "satz",
    front: R`What does the <b>pigeonhole principle</b> say? Use it to prove: if $p\ge 3$ is prime and $1\le a\le p-1$, then there is $k$ with $0\le k\le p-1$ and $\bar a\cdot\bar a^k = \bar 1$ in $\mathbb{Z}_p$.`,
    back: R`<b>Pigeonhole principle:</b> If $m+1$ objects are placed into $m$ pigeonholes, then at least one pigeonhole contains at least two objects.<br><br>
<b>Proof of the theorem:</b> Consider the $p$ objects $a^0,a^1,\dots,a^{p-1}$ and place them via $a^n\mapsto\overline{a^n}$ into the $p-1$ pigeonholes $\bar 1,\dots,\overline{p-1}\in\mathbb{Z}_p$. Since $p$ is prime and $1\le a\le p-1$, we have $\bar a^n\neq\bar 0$.<br>
Pigeonhole ⇒ there are $0\le s\lt t\le p-1$ with $\bar a^s = \bar a^t$. With $t = s+(k+1)$, $k\ge 0$:
$$\bar a^s = \bar a^s\cdot\bar a^{k+1}\;\Rightarrow\;\underbrace{\bar a^s}_{\neq\bar 0}\cdot\big(\bar a^{k+1}-\bar 1\big) = \bar 0\;\Rightarrow\;\bar a^{k+1} = \bar 1\;\Rightarrow\;\bar a\cdot\bar a^k = \bar 1,$$
where the second-to-last implication holds because $\mathbb{Z}_p$ is a field (no zero divisors).`,
    meta: "Script: Ch. 1, example (proof with the pigeonhole principle), theorem; cf. Exercise sheet 1, Exercise 8(d)",
    explanation: R`The pigeonhole principle is an <b>existence statement without construction</b>: one knows that two powers must coincide, without knowing which ones. That is enough to find the <b>multiplicative inverse</b> $\bar a^{-1} = \bar a^k$.<br><br>
<b>Intuition:</b> The sequence $\bar a,\bar a^2,\bar a^3,\dots$ lives in the finite set $\mathbb{Z}_p\setminus\{\bar 0\}$ and must therefore repeat; since one can cancel in a field, it returns to $\bar a^0 = \bar 1$ – the powers run in a circle back to $\bar 1$.<br><br>
<b>Careful, circularity:</b> The step “$\bar a^s\neq\bar 0$ and product $=\bar 0\Rightarrow$ second factor $=\bar 0$” uses the absence of zero divisors (which holds in $\mathbb{Z}_p$, since $p$ is prime: $p\mid xy\Rightarrow p\mid x\vee p\mid y$).`,
    example: R`$p=7$, $a=3$: powers $\bar 3^0,\dots,\bar 3^6 = \bar 1,\bar 3,\bar 2,\bar 6,\bar 4,\bar 5,\bar 1$. Repetition $\bar 3^0 = \bar 3^6$, so $k+1 = 6$, $k=5$: $\bar 3\cdot\bar 3^5 = \bar 3\cdot\bar 5 = \overline{15} = \bar 1$ ✓.<br>
<b>Pigeonhole directly:</b> Among 13 people, two have a birthday in the same month.`,
    counterexample: R`<b>$p$ not prime:</b> In $\mathbb{Z}_6$ with $a=2$: $\bar 2^0,\bar 2^1,\bar 2^2,\bar 2^3,\dots = \bar 1,\bar 2,\bar 4,\bar 2,\bar 4,\dots$ – the powers repeat ($\bar 2^1 = \bar 2^3$), but they <b>never return to $\bar 1$</b>. The cancellation step $\bar 2\cdot(\bar 2^2-\bar 1) = \bar 2\cdot\bar 3 = \bar 0$ does <i>not</i> yield $\bar 2^2 = \bar 1$ (zero divisors!).`
  }
};
})();
