/* ==========================================================================
   FLASHCARDS CHAPTER 1 (English): Introduction
   Analysis I - Prof. Dr. Manfred Einsiedler
   English translation of data_kapitel1.js. Formulas, tags and ids are identical.
   ========================================================================== */

window.FLASHCARDS_EN_KAPITEL_1 = {
  "k1_prop_1_1": {
    title: "Proposition 1.1 & Lemma 1.3: Quadrature of the parabola",
    category: "1.1 Quadrature of the parabola",
    front: "What does <b>Proposition 1.1</b> say about the area under the parabola, and which <b>sum formula</b> (Lemma 1.3) does its proof need?",
    back: "<b>Proposition 1.1:</b> Suppose there is a notion of area for regions in $\\mathbb{R}^2$ that (i) gives rectangles $[a,b] \\times [c,d]$ the area $(b-a)(d-c)$, (ii) is monotone ($F \\subseteq G \\Rightarrow$ area of $F \\le$ area of $G$) and (iii) is additive on disjoint regions. Then the area under the parabola $y = x^2$ over $[0,1]$ (if defined) is <b>necessarily $\\frac{1}{3}$</b>.<br><br><b>Lemma 1.3 (by induction):</b> For $n \\geq 1$:<br>$$1^2 + 2^2 + \\dots + n^2 = \\frac{n^3}{3} + \\frac{n^2}{2} + \\frac{n}{6}$$",
    meta: "Script: Proposition 1.1 & Lemma 1.3, Section 1.1",
    explanation: "The proof squeezes the area between the lower and upper sums of $n$ rectangles of width $\\frac1n$. With Lemma 1.3 the two bounds differ by at most $\\frac1n$ and force the value towards $\\frac13$. This is the prototype of the Riemann integral (Chapter 4), and also the first demonstration of induction.",
    example: "For $n = 3$: $1 + 4 + 9 = 14 = \\frac{27}{3} + \\frac{9}{2} + \\frac{3}{6} = 9 + 4{,}5 + 0{,}5$. With 1000 rectangles (Applet 1.2) the area already lies between $0{,}3328$ and $0{,}3338$.",
    counterexample: "<b>1.</b> The proposition does <i>not</i> prove that the area exists, only that $\\frac13$ is the one and only possible value. The existence question is settled later by integration theory.<br><b>2.</b> Without the monotonicity assumption (ii) the squeezing breaks down: from lower and upper bounds nothing more can be concluded."
  },

  "k1_aussagenlogik": {
    title: "1.3.1 Propositional logic: connectives and their negation",
    category: "1.3 Logical concepts",
    front: "Which <b>logical connectives</b> does propositional logic use, and how are they negated (De Morgan, implication)?",
    back: "For statements $A, B$ (each is either true or false, never both):<br>&bull; $\\neg A$ (not), $A \\wedge B$ (and), $A \\vee B$ (or, inclusive), $A \\implies B$ (if-then), $A \\iff B$ (if and only if).<br><br><b>Important equivalences:</b><br>&bull; $A \\implies B \\iff (\\neg A) \\vee B \\iff (\\neg B \\implies \\neg A)$ (<b>contraposition</b>)<br>&bull; $\\neg(A \\wedge B) \\iff (\\neg A) \\vee (\\neg B)$, $\\quad \\neg(A \\vee B) \\iff (\\neg A) \\wedge (\\neg B)$ (<b>De Morgan</b>)<br>&bull; $\\neg(A \\implies B) \\iff A \\wedge (\\neg B)$<br>&bull; $\\neg(\\neg A) \\iff A$",
    meta: "Script: Section 1.3.1 (Propositional logic and Boolean algebra)",
    explanation: "An implication $A \\implies B$ is false only when $A$ is true and $B$ is false. In particular it is <i>true whenever $A$ is false</i> ('ex falso quodlibet'). The negation of an implication is not an implication but an 'and': there is a case where the premise holds and the conclusion fails.",
    example: "The statement 'If $n > 2$ is even and prime, then $n$ is odd' is true, because the premise never occurs. Contraposition: 'If $n^2$ is even, then $n$ is even' is proved as 'if $n$ is odd, then $n^2$ is odd'.",
    counterexample: "<b>1.</b> $A \\implies B$ is NOT equivalent to $B \\implies A$ (the converse!): '$x > 2 \\implies x > 0$' is true, but '$x > 0 \\implies x > 2$' is false.<br><b>2.</b> The mathematical 'or' is not exclusive: '$2$ is even $\\vee$ $2$ is prime' is true, although both hold (an exclusive 'or' would be XOR)."
  },
  "k1_quantoren": {
    title: "1.3.2 Predicate logic: quantifiers",
    category: "1.3 Logical concepts",
    front: "What do the quantifiers $\\forall$, $\\exists$ and $\\exists!$ mean, and how do they behave over the <b>empty set</b>?",
    back: "For a statement $A(x)$ about elements $x$ of a set $X$:<br>&bull; $\\forall x \\in X: A(x)$ - $A(x)$ holds for <b>all</b> $x$.<br>&bull; $\\exists x \\in X: A(x)$ - there <b>exists</b> (at least one) $x$ with $A(x)$.<br>&bull; $\\exists! x \\in X: A(x)$ - <b>unique existence</b>, defined as<br>$$(\\exists x \\in X: A(x)) \\wedge (\\forall x, y \\in X: (A(x) \\wedge A(y)) \\implies x = y)$$<br><b>Peculiarity of the empty set:</b> $\\forall x \\in \\emptyset: A(x)$ is <i>always true</i>; $\\exists x \\in \\emptyset: A(x)$ is <i>always false</i>.<br><br><i>Short forms:</i> $\\forall \\varepsilon > 0: A(\\varepsilon)$ stands for $\\forall \\varepsilon \\in \\mathbb{R}: (\\varepsilon > 0 \\implies A(\\varepsilon))$; $\\exists \\varepsilon > 0: A(\\varepsilon)$ for $\\exists \\varepsilon \\in \\mathbb{R}: \\varepsilon > 0 \\wedge A(\\varepsilon)$.",
    meta: "Script: Section 1.3.2",
    explanation: "The 'empty truth' of the universal quantifier is a convention with a purpose: only this way do the negation rules (next card) hold without exception. Statements such as 'All unicorns are green' are mathematically true, because there is no counterexample.",
    example: "'$\\exists! x \\in \\mathbb{R}: x + 3 = 5$' is true ($x = 2$ exists and is unique). '$\\exists! x \\in \\mathbb{R}: x^2 = 4$' is false: there are two solutions $\\pm 2$ (existence yes, uniqueness no).",
    counterexample: "<b>1.</b> From $\\exists x: A(x)$ and $\\exists x: B(x)$ it does NOT follow that $\\exists x: (A(x) \\wedge B(x))$: there are even and there are odd numbers, but none that is both (Exercise 1.11).<br><b>2.</b> $\\forall x: (A(x) \\vee B(x))$ does NOT imply $(\\forall x: A(x)) \\vee (\\forall x: B(x))$: every integer is even or odd, but neither are all even nor are all odd."
  },
  "k1_uebung_1_9_10": {
    title: "Important Exercises 1.9 & 1.10: Swapping and negating quantifiers",
    category: "1.3 Logical concepts",
    front: "Which quantifiers may you <b>swap</b> (Exercise 1.9)? How do you <b>negate</b> quantified statements (Eq. 1.7, Exercise 1.10)?",
    back: "<b>Swapping (Exercise 1.9):</b> Quantifiers of the same kind may be swapped:<br>$$\\forall x \\forall y: A(x,y) \\iff \\forall y \\forall x: A(x,y), \\qquad \\exists x \\exists y: A(x,y) \\iff \\exists y \\exists x: A(x,y)$$<br>(this is why the short notation $\\forall x, y \\in X$ is used).<br><br><b>Negation (1.7):</b> The negation moves inwards like a minus sign and <i>flips every quantifier</i>:<br>$$\\neg(\\forall x \\in X: A(x)) \\iff \\exists x \\in X: \\neg A(x)$$<br>$$\\neg(\\exists x \\in X: A(x)) \\iff \\forall x \\in X: \\neg A(x)$$",
    meta: "Script: Important Exercises 1.9 & 1.10, Equation (1.7)",
    explanation: "Mechanically negating nested quantifiers is THE core skill of analysis. To show that a function is <i>not</i> continuous or a sequence does <i>not</i> converge, you need the correctly negated definition. Rule of thumb: every quantifier flips ($\\forall \\leftrightarrow \\exists$), and the innermost statement is negated ($<$ becomes $\\geq$, $\\implies$ becomes $\\wedge\\neg$).",
    example: "From Exercise 1.10: $\\neg(\\forall y \\in \\mathbb{R}\\ \\forall \\varepsilon > 0\\ \\exists x \\in X: |x-y| < \\varepsilon)$ is equivalent to $\\exists y \\in \\mathbb{R}\\ \\exists \\varepsilon > 0\\ \\forall x \\in X: |x - y| \\geq \\varepsilon$.",
    counterexample: "<b>1.</b> DIFFERENT quantifiers cannot be swapped! '$\\forall x \\in \\mathbb{R}\\ \\exists y \\in \\mathbb{R}: y > x$' is true (for every $x$ there is something larger), but '$\\exists y\\ \\forall x: y > x$' is false (no $y$ exceeds all $x$).<br><b>2.</b> Negating an implication does NOT produce an implication: $\\neg(|x-y| < \\varepsilon \\implies x = y)$ is $|x-y| < \\varepsilon \\wedge x \\neq y$ - a common beginner's mistake."
  },

  "k1_def_1_14": {
    title: "Definition 1.14: Subsets and equality of sets",
    category: "1.4 Set theory and maps",
    front: "When is $P$ a <b>subset</b> or <b>proper subset</b> of $Q$, and how do you show that two sets are <b>equal</b>?",
    back: "&bull; $P \\subseteq Q$ (<b>subset</b>): $\\forall x \\in P: x \\in Q$.<br>&bull; $P \\subsetneq Q$ (<b>proper subset</b>): $P \\subseteq Q$ and $P \\neq Q$.<br>&bull; $Q \\supseteq P$: '$Q$ is a superset of $P$'.<br><br><b>Equality:</b> Two sets are equal exactly when<br>$$P \\subseteq Q \\;\\wedge\\; Q \\subseteq P.$$<br><i>Separation:</i> $\\{x \\in X \\mid A(x)\\}$ is the subset of all $x \\in X$ satisfying $A(x)$.",
    meta: "Script: Definition 1.14, Section 1.4.1",
    explanation: "Proving that two sets are equal almost always splits into two separate inclusion proofs ('$\\subseteq$' and '$\\supseteq$') - a basic pattern in countless exercises. Elements have no multiplicity and no order: $\\{1, 2, 2\\} = \\{2, 1\\}$.",
    example: "$\\mathbb{N} \\subsetneq \\mathbb{Z} \\subsetneq \\mathbb{Q} \\subsetneq \\mathbb{R}$; $\\{x \\in \\mathbb{R} \\mid x^2 = 1\\} = \\{-1, 1\\}$.",
    counterexample: "<b>1.</b> Do not confuse $\\in$ and $\\subseteq$: $1 \\in \\{1, 2\\}$, but $1 \\not\\subseteq \\{1,2\\}$; on the other hand $\\{1\\} \\subseteq \\{1,2\\}$ and $\\{1\\} \\notin \\{1,2\\}$.<br><b>2.</b> $P \\subseteq Q$ does NOT rule out $P = Q$ - if you mean 'strictly smaller', you must write $\\subsetneq$. Also $\\emptyset \\subseteq Q$ always holds (empty truth!)."
  },
  "k1_def_1_16": {
    title: "Definition 1.16: Set operations",
    category: "1.4 Set theory and maps",
    front: "Define <b>intersection, union, relative complement, symmetric difference</b>, and the <b>complement</b> with respect to a universal set.",
    back: "For sets $P, Q$:<br>$$P \\cap Q = \\{x \\mid x \\in P \\wedge x \\in Q\\}$$<br>$$P \\cup Q = \\{x \\mid x \\in P \\vee x \\in Q\\}$$<br>$$P \\setminus Q = \\{x \\mid x \\in P \\wedge x \\notin Q\\}$$<br>$$P \\triangle Q = (P \\setminus Q) \\cup (Q \\setminus P) \\quad (\\text{symmetric difference, XOR})$$<br>If all sets are subsets of a universal set $X$: <b>complement</b> $P^c = X \\setminus P$.<br><br><i>Precedence:</i> complementation binds most strongly, union most weakly: $A^c \\cup B \\setminus C \\cup D \\cap E = (A^c) \\cup (B \\setminus C) \\cup (D \\cap E)$.",
    meta: "Script: Definition 1.16, Section 1.4.1",
    explanation: "The set operations are direct translations of the connectives: $\\cap \\leftrightarrow \\wedge$, $\\cup \\leftrightarrow \\vee$, $^c \\leftrightarrow \\neg$, $\\triangle \\leftrightarrow$ XOR. Every propositional equivalence becomes a set identity this way - for example the distributive laws $P \\cap (Q \\cup R) = (P \\cap Q) \\cup (P \\cap R)$.",
    example: "$P = \\{1,2,3\\}$, $Q = \\{3,4\\}$: $P \\cap Q = \\{3\\}$, $P \\cup Q = \\{1,2,3,4\\}$, $P \\setminus Q = \\{1,2\\}$, $P \\triangle Q = \\{1,2,4\\}$.",
    counterexample: "<b>1.</b> $P \\setminus Q \\neq Q \\setminus P$ in general - the difference is not symmetric (hence the separate symbol $\\triangle$).<br><b>2.</b> The complement $P^c$ is meaningless without stating the universal set $X$: $\\{1\\}^c$ in $\\mathbb{N}$ is something completely different from the same expression in $\\mathbb{R}$."
  },
  "k1_def_1_19_demorgan": {
    title: "Definition 1.19 & Exercise 1.20: Arbitrary unions and De Morgan",
    category: "1.4 Set theory and maps",
    front: "How are <b>unions and intersections over arbitrary collections</b> defined, and what are the <b>general De Morgan laws</b>?",
    back: "For a collection $\\mathcal{A}$ of sets:<br>$$\\bigcup_{A \\in \\mathcal{A}} A = \\{x \\mid \\exists A \\in \\mathcal{A}: x \\in A\\}, \\qquad \\bigcap_{A \\in \\mathcal{A}} A = \\{x \\mid \\forall A \\in \\mathcal{A}: x \\in A\\} \\;\\; (\\mathcal{A} \\neq \\emptyset)$$<br><b>De Morgan (Important Exercise 1.20):</b> For subsets of a universal set $X$:<br>$$\\Big(\\bigcup_{A \\in \\mathcal{A}} A\\Big)^c = \\bigcap_{A \\in \\mathcal{A}} A^c, \\qquad \\Big(\\bigcap_{A \\in \\mathcal{A}} A\\Big)^c = \\bigcup_{A \\in \\mathcal{A}} A^c$$",
    meta: "Script: Definition 1.19 & Important Exercise 1.20",
    explanation: "Complementation swaps $\\cup$ and $\\cap$ - the set-theoretic echo of negating quantifiers ($\\neg\\exists = \\forall\\neg$). The intersection over the <i>empty</i> collection is deliberately left undefined (it would be the 'set of all objects'); only relative to a universal set $X$ does one set $\\bigcap_{A \\in \\emptyset} A = X$.",
    example: "$\\bigcap_{n=1}^{\\infty} \\left[-\\tfrac1n, \\tfrac1n\\right] = \\{0\\}$ (Exercise 1.21): exactly $0$ lies in each of the intervals.",
    counterexample: "<b>1.</b> Infinite intersections of open intervals need not be open - $\\bigcap_n \\left(-\\tfrac1n, \\tfrac1n\\right) = \\{0\\}$: 'finite' rules do not carry over blindly to infinite collections.<br><b>2.</b> Without a universal set, De Morgan does not even make sense as a formula: $A^c$ is then not defined at all (the 'set of all non-elements' leads to Russell's paradox)."
  },
  "k1_def_1_22_27": {
    title: "Definitions 1.22, 1.23 & 1.27: Disjointness, product, power set",
    category: "1.4 Set theory and maps",
    front: "Define <b>disjoint sets</b>, the <b>Cartesian product</b> and the <b>power set</b>. Why is the set theory in the script called 'naive'?",
    back: "&bull; <b>Disjointness (1.22):</b> $A, B$ are called disjoint if $A \\cap B = \\emptyset$; their union is then called the disjoint union $A \\sqcup B$. A collection is <i>pairwise disjoint</i> if any two different sets in it are disjoint.<br>&bull; <b>Cartesian product (1.23):</b> $X \\times Y = \\{(x,y) \\mid x \\in X, y \\in Y\\}$ (ordered pairs!).<br>&bull; <b>Power set (1.27):</b> $\\mathcal{P}(X) = \\{Q \\mid Q \\subseteq X\\}$, the set of all subsets.<br><br><b>'Naive':</b> Unrestricted set formation leads to contradictions - <b>Russell's paradox</b> (Example 1.29): $R = \\{M \\mid M \\notin M\\}$ gives $R \\in R \\iff R \\notin R$. The modern foundation is the axiomatic ZF(C) set theory.",
    meta: "Script: Definitions 1.22, 1.23, 1.27 & Example 1.29",
    explanation: "For the Cartesian product, order matters: $(1,2) \\neq (2,1)$, although $\\{1,2\\} = \\{2,1\\}$. The power set of an $n$-element set has $2^n$ elements (each element is either in or out) - hence the name and the notation $2^X$.",
    example: "$\\mathcal{P}(\\emptyset) = \\{\\emptyset\\}$ and $\\mathcal{P}(\\mathcal{P}(\\emptyset)) = \\{\\emptyset, \\{\\emptyset\\}\\}$ (Exercise 1.28). $\\mathbb{R} \\times \\mathbb{R} = \\mathbb{R}^2$ is the plane.",
    counterexample: "<b>1.</b> $X \\times Y \\neq Y \\times X$ for $X \\neq Y$: $\\{1\\} \\times \\{2\\} = \\{(1,2)\\} \\neq \\{(2,1)\\}$.<br><b>2.</b> $\\mathcal{P}(\\emptyset) \\neq \\emptyset$! The power set of the empty set has one element (namely $\\emptyset$ itself) - the empty set and 'the set containing the empty set' are different."
  },
  "k1_def_1_31": {
    title: "Definition 1.31: Functions",
    category: "1.4 Set theory and maps",
    front: "What is a <b>function</b> $f: X \\to Y$? Define <b>domain, codomain, image</b> and <b>restriction</b>. When are two functions equal?",
    back: "A <b>function</b> $f: X \\to Y$ is an assignment that gives every $x \\in X$ a <i>uniquely determined</i> $y = f(x) \\in Y$. $X$ is called the <b>domain</b>, $Y$ the <b>codomain</b> (target).<br><br>&bull; <b>Image:</b> $f(X) = \\{y \\in Y \\mid \\exists x \\in X: y = f(x)\\}$; more generally $f(A) = \\{f(x) \\mid x \\in A\\}$ for $A \\subseteq X$.<br>&bull; <b>Restriction:</b> $f|_A: A \\to Y$, $f|_A(x) = f(x)$; conversely $f$ is called an extension of $f|_A$.<br><br><b>Equality:</b> $f_1 = f_2$ requires $X_1 = X_2$, $Y_1 = Y_2$ <i>and</i> $f_1(x) = f_2(x)$ for all $x$.",
    meta: "Script: Definition 1.31, Section 1.4.2",
    explanation: "A 'formula' alone is not a function - only with domain and codomain is the definition complete (notations: $f: X \\to Y,\\ x \\mapsto f(x)$ or $x \\in X \\mapsto f(x) \\in Y$). 'Well-defined' means the stated assignment really gives exactly one value in $Y$ for every $x$.",
    example: "$f: \\mathbb{R} \\to \\mathbb{R},\\ x \\mapsto x^2$ is fully defined; its image is $f(\\mathbb{R}) = \\mathbb{R}_{\\geq 0} \\neq \\mathbb{R}$ - image and codomain are different things!",
    counterexample: "<b>1.</b> $f: \\mathbb{R} \\to \\mathbb{R},\\ x \\mapsto x^2$ and $g: \\mathbb{R} \\to \\mathbb{R}_{\\geq 0},\\ x \\mapsto x^2$ are NOT the same function (different codomains - $g$ is surjective, $f$ is not).<br><b>2.</b> '$f(x) = \\pm\\sqrt{x}$' does not define a function: an $x > 0$ would be assigned <i>two</i> values - uniqueness is violated."
  },
  "k1_def_1_33": {
    title: "Definition 1.33: Injective, surjective, bijective",
    category: "1.4 Set theory and maps",
    front: "Define <b>injective</b>, <b>surjective</b> and <b>bijective</b> for a function $f: X \\to Y$.",
    back: "&bull; <b>injective</b> (an injection): $\\forall x_1, x_2 \\in X: f(x_1) = f(x_2) \\implies x_1 = x_2$<br>(different arguments have different values).<br>&bull; <b>surjective</b> (a surjection, 'function from $X$ <i>onto</i> $Y$'): every $y \\in Y$ has some $x \\in X$ with $f(x) = y$ - equivalently: $f(X) = Y$.<br>&bull; <b>bijective</b> (a bijection, 'one-to-one'): injective <i>and</i> surjective.",
    meta: "Script: Definition 1.33 & Example 1.35",
    explanation: "<b>Example 1.35 (squaring) shows: the properties depend on the domain AND the codomain:</b><br>(a) $f: \\mathbb{R}_{\\geq 0} \\to \\mathbb{R},\\ x \\mapsto x^2$: injective, not surjective.<br>(b) $f: \\mathbb{R} \\to \\mathbb{R}_{\\geq 0}$: surjective, not injective ($f(1) = f(-1)$).<br>(c) $f: \\mathbb{R} \\to \\mathbb{R}$: neither.<br>(d) $f: \\mathbb{R}_{\\geq 0} \\to \\mathbb{R}_{\\geq 0}$: bijective.<br>The question 'Is squaring bijective?' is meaningless without these specifications!",
    example: "$x \\mapsto x + 1$ on $\\mathbb{Z}$ is bijective; $x \\mapsto 2x$ is bijective on $\\mathbb{R}$, but only injective on $\\mathbb{Z}$ (odd numbers are not hit).",
    counterexample: "<b>1.</b> Injectivity does NOT mean '$x_1 = x_2 \\implies f(x_1) = f(x_2)$' - that holds for every function! The direction of the implication is decisive.<br><b>2.</b> 'Not injective' requires a concrete collision: $\\sin$ is not injective on $\\mathbb{R}$ because $\\sin(0) = \\sin(\\pi) = 0$, but it is indeed injective on $[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}]$."
  },
  "k1_def_1_36_37": {
    title: "Definitions 1.36 & 1.37: Inverse map and composition",
    category: "1.4 Set theory and maps",
    front: "How are the <b>inverse map</b> $f^{-1}$ and the <b>composition</b> $g \\circ f$ defined, and which identities link them?",
    back: "&bull; <b>Inverse map (1.36):</b> If $f: X \\to Y$ is <i>bijective</i>, then $f^{-1}: Y \\to X$ assigns to each $y \\in Y$ the unique $x \\in X$ with $f(x) = y$.<br>&bull; <b>Composition (1.37):</b> For $f: X \\to Y$, $g: Y \\to Z$, $g \\circ f: X \\to Z$ ('$g$ after $f$') is defined by $(g \\circ f)(x) = g(f(x))$.<br><br><b>Identities:</b> $f \\circ f^{-1} = \\operatorname{id}_Y$ and $f^{-1} \\circ f = \\operatorname{id}_X$.<br><br><b>Exercise 1.42 (converse):</b> If there is a $g: Y \\to X$ with $g \\circ f = \\operatorname{id}_X$ and $f \\circ g = \\operatorname{id}_Y$, then $f$ is bijective and $g = f^{-1}$ - the existence of a two-sided inverse <i>characterises</i> bijectivity.",
    meta: "Script: Definitions 1.36 & 1.37, Important Exercise 1.42",
    explanation: "For merely <i>injective</i> $f$ there is still $f^{-1}: f(X) \\to X$ with a restricted domain. Watch the notational trap: $f^{-1}(B)$ also denotes the preimage of a set (Definition 1.48) - which exists for <i>every</i> function, without any bijectivity!",
    example: "$f: \\mathbb{R}_{\\geq 0} \\to \\mathbb{R}_{\\geq 0},\\ x \\mapsto x^2$ has the inverse $f^{-1}(y) = \\sqrt{y}$. Composition: $x \\mapsto \\sqrt{x^2+1}$ is $g \\circ f$ with $f(x) = x^2 + 1$, $g(y) = \\sqrt{y}$.",
    counterexample: "<b>1.</b> $g \\circ f \\neq f \\circ g$ in general: with $f(x) = x + 1$, $g(x) = x^2$ we have $g(f(x)) = (x+1)^2$, but $f(g(x)) = x^2 + 1$.<br><b>2.</b> ONE one-sided inverse is not enough: for $f: \\mathbb{N} \\to \\mathbb{N},\\ n \\mapsto n+1$ there is a $g$ with $g \\circ f = \\operatorname{id}$ (subtract 1, map $1 \\mapsto 1$), but $f$ is not surjective, so not bijective."
  },
  "k1_lemma_1_40": {
    title: "Lemma 1.40 & Exercise 1.41: Properties of compositions",
    category: "1.4 Set theory and maps",
    front: "Which properties pass on to the composition $g \\circ f$ (Lemma 1.40), and what <b>conclusions</b> can be drawn about $f$ and $g$ from $g \\circ f$ (Exercise 1.41)?",
    back: "<b>Lemma 1.40:</b> Let $f: X \\to Y$, $g: Y \\to Z$.<br>(i) $f, g$ injective $\\implies g \\circ f$ injective.<br>(ii) $f, g$ surjective $\\implies g \\circ f$ surjective.<br>(iii) $f, g$ bijective $\\implies g \\circ f$ bijective with $$(g \\circ f)^{-1} = f^{-1} \\circ g^{-1}.$$<br><b>Exercise 1.41 (conclusions):</b><br>&bull; $g \\circ f$ surjective $\\implies g$ surjective (but not necessarily $f$!).<br>&bull; $g \\circ f$ injective $\\implies f$ injective (but not necessarily $g$!).<br>&bull; $g \\circ f$ surjective and $g$ injective $\\implies f$ surjective.<br>&bull; $g \\circ f$ injective and $f$ surjective $\\implies g$ injective.",
    meta: "Script: Lemma 1.40 & Important Exercise 1.41",
    explanation: "The order in $(g \\circ f)^{-1} = f^{-1} \\circ g^{-1}$ reverses - like putting on and taking off socks and shoes: first take off what you put on last. Memory aid for the conclusions: the <i>outer</i> function inherits surjectivity, the <i>inner</i> one injectivity.",
    example: "$f: \\mathbb{N} \\to \\mathbb{Z},\\ n \\mapsto n$ and $g: \\mathbb{Z} \\to \\mathbb{N},\\ k \\mapsto |k| + 1$: both compositions can be analysed with the lemma, e.g. $g \\circ f$ is injective, so $f$ is injective.",
    counterexample: "<b>1.</b> $g \\circ f$ surjective does NOT force $f$ to be surjective: $f: \\{1\\} \\to \\{a, b\\},\\ 1 \\mapsto a$ and $g: \\{a,b\\} \\to \\{c\\}$ - $g \\circ f$ is surjective, $f$ is not.<br><b>2.</b> $g \\circ f$ injective does NOT force $g$ to be injective: same sets, $f: \\{1\\} \\to \\{a,b\\}$, $g(a) = g(b) = c$ - $g \\circ f$ is injective (only one element!), $g$ is not."
  },
  "k1_def_1_44": {
    title: "Definition 1.44: The graph of a function",
    category: "1.4 Set theory and maps",
    front: "How is the <b>graph</b> of a function $f: X \\to Y$ defined, and which subsets of $X \\times Y$ are graphs?",
    back: "$$\\operatorname{graph}(f) = \\{(x, y) \\in X \\times Y \\mid y = f(x)\\} \\subseteq X \\times Y$$<br>A subset $G \\subseteq X \\times Y$ is the graph of a function exactly when, for <b>every</b> $x \\in X$, there is <b>exactly one</b> $y \\in Y$ with $(x, y) \\in G$ ('vertical line test': every vertical line meets $G$ exactly once).",
    meta: "Script: Definition 1.44 & Figure 1.7, Section 1.4.3",
    explanation: "The graph contains the full information about the function (given $X$ and $Y$) - in axiomatic set theory one actually <i>defines</i> functions as their graphs. From the graph one can also read off injectivity (every horizontal line meets it at most once) and surjectivity (every horizontal line meets it at least once).",
    example: "$\\operatorname{graph}(x \\mapsto x^2)$ on $\\mathbb{R}$ is the parabola $\\{(x, x^2) \\mid x \\in \\mathbb{R}\\} \\subseteq \\mathbb{R}^2$.",
    counterexample: "<b>1.</b> The unit circle $\\{(x,y) \\mid x^2 + y^2 = 1\\}$ is NOT the graph of a function of $x$: at $x = 0$ there are two points $(0, \\pm 1)$, at $x = 2$ none.<br><b>2.</b> $\\{(x, y) \\in \\mathbb{R}^2 \\mid x = y^2\\}$ ('sideways parabola') also fails: $x = -1$ has no partner, $x = 1$ has two ($y = \\pm 1$)."
  },
  "k1_def_1_48": {
    title: "Definition 1.48 & Exercise 1.49: Preimages",
    category: "1.4 Set theory and maps",
    front: "How is the <b>preimage</b> $f^{-1}(B)$ defined, and how do images and preimages behave under set operations (Exercise 1.49)?",
    back: "For $f: X \\to Y$ and $B \\subseteq Y$:<br>$$f^{-1}(B) = \\{x \\in X \\mid f(x) \\in B\\}$$<br>(defined for EVERY function, no bijectivity needed; $f^{-1}(\\emptyset) = \\emptyset$, $f^{-1}(Y) = X$).<br><br><b>Exercise 1.49:</b><br>&bull; $f(f^{-1}(B)) \\subseteq B$ (equality if $f$ is surjective)<br>&bull; $f^{-1}(f(A)) \\supseteq A$ (equality if $f$ is injective)<br>&bull; $f(A \\cup A') = f(A) \\cup f(A')$ and $f^{-1}(B \\cup B') = f^{-1}(B) \\cup f^{-1}(B')$<br>&bull; Preimages also respect $\\cap$ and complements - <b>images in general do not!</b>",
    meta: "Script: Definition 1.48 & Important Exercise 1.49",
    explanation: "Preimages are the 'better behaved' objects: they commute with all set operations. Images commute only with unions. This asymmetry is why later concepts (continuity!) are defined via <i>preimages</i> ('preimages of open sets are open', cf. Proposition 5.50).",
    example: "$f(x) = x^2$ on $\\mathbb{R}$: $f^{-1}(\\{4\\}) = \\{-2, 2\\}$, $f^{-1}([1, 4]) = [-2,-1] \\cup [1,2]$, $f^{-1}(\\{-1\\}) = \\emptyset$.",
    counterexample: "<b>1.</b> $f(A \\cap A') \\neq f(A) \\cap f(A')$ in general: $f(x) = x^2$, $A = \\{-1\\}$, $A' = \\{1\\}$: left side $f(\\emptyset) = \\emptyset$, right side $\\{1\\} \\cap \\{1\\} = \\{1\\}$.<br><b>2.</b> $f^{-1}(f(A)) = A$ can fail without injectivity: $f(x) = x^2$, $A = \\{2\\}$: $f^{-1}(f(\\{2\\})) = f^{-1}(\\{4\\}) = \\{-2, 2\\} \\supsetneq \\{2\\}$."
  },
  "k1_def_1_51": {
    title: "Definition 1.51 & Lemma 1.52: Partitions and case distinctions",
    category: "1.4 Set theory and maps",
    front: "What is a <b>partition</b> of a set $X$, and what does the lemma on <b>functions defined by case distinction</b> say?",
    back: "<b>Definition 1.51:</b> A partition of $X$ is a family $\\mathcal{P}$ of <i>non-empty, pairwise disjoint</i> subsets of $X$ with<br>$$X = \\bigsqcup_{P \\in \\mathcal{P}} P.$$<br><b>Lemma 1.52:</b> If $\\mathcal{P}$ is a partition of $X$ and for each $P \\in \\mathcal{P}$ a function $f_P: P \\to Y$ is given, then there exists <b>exactly one</b> function $f: X \\to Y$ with $f|_P = f_P$ for all $P \\in \\mathcal{P}$.",
    meta: "Script: Definition 1.51 & Lemma 1.52, Section 1.4.5",
    explanation: "The lemma justifies all definitions 'by case distinction' (such as the absolute value!): every $x$ lies in exactly one piece of the partition, so $f(x) = f_P(x)$ is well-defined. Both partition properties are needed: covering (every $x$ gets a value) and disjointness (no point gets two).",
    example: "$\\mathcal{P} = \\{\\mathbb{R}_{<0}, \\{0\\}, \\mathbb{R}_{>0}\\}$ partitions $\\mathbb{R}$; on it the sign function ($-1$, $0$, $1$) is defined piecewise and, by Lemma 1.52, well-defined.",
    counterexample: "<b>1.</b> Overlapping pieces destroy well-definedness: 'set $f = 0$ on $[0, 2]$ and $f = 1$ on $[1, 3]$' assigns two values to the points in $[1,2]$ - not a function.<br><b>2.</b> A missing covering leaves holes: $\\{\\mathbb{R}_{<0}, \\mathbb{R}_{>0}\\}$ is not a partition of $\\mathbb{R}$ (the $0$ is missing) - a 'function' defined piecewise on it would be undefined at $0$."
  },
  "k1_def_1_54": {
    title: "Definition 1.54: Iterates of a function",
    category: "1.4 Set theory and maps",
    front: "How are the <b>iterates</b> $f^{\\circ n}$ of a function $f: X \\to X$ defined?",
    back: "For $f: X \\to X$ one defines recursively:<br>$$f^{\\circ 1} = f, \\qquad f^{\\circ (n+1)} = f \\circ f^{\\circ n} \\quad (n \\in \\mathbb{N}), \\qquad f^{\\circ 0} = \\operatorname{id}_X.$$<br>So $f^{\\circ 2} = f \\circ f$, $f^{\\circ 3} = f \\circ f \\circ f$, and so on (often written simply $f^n$).",
    meta: "Script: Definition 1.54, Section 1.4.6",
    explanation: "Iteration requires $X = Y$: only then can the output serve again as input. Recursive definitions like this are the functional counterpart of induction. The dynamics of iterations ($n \\to \\infty$) is later a rich source of sequences - e.g. $f(x) = \\tfrac{x}{2}$ generates the sequence $x, \\tfrac{x}{2}, \\tfrac{x}{4}, \\dots$",
    example: "Exercise 1.55: $f$ on $X = \\{a, b, c\\}$ with $f(a) = b, f(b) = c, f(c) = a$ (cyclic) is bijective with $f^{\\circ 3} = \\operatorname{id}_X$ and $f^{-1} = f^{\\circ 2}$. For $f(x) = 3x$ on $\\mathbb{R}$, $f^{\\circ n}(x) = 3^n x$.",
    counterexample: "<b>1.</b> $f^{\\circ 2}$ is NOT $f \\cdot f$ (product of values) and NOT $f(x)^2$: for $f(x) = x + 1$, $f^{\\circ 2}(x) = x + 2$, but $f(x)^2 = (x+1)^2$.<br><b>2.</b> For $f: \\mathbb{N} \\to \\mathbb{R},\\ n \\mapsto \\sqrt{n}$, $f \\circ f$ is not even defined - the codomain $\\mathbb{R}$ does not fit into the domain $\\mathbb{N}$."
  },

  "k1_def_1_58": {
    title: "Definition 1.58: Relations",
    category: "1.6 Equivalence relations",
    front: "What is formally a <b>relation</b> on $X \\times Y$, or on $X$?",
    back: "A <b>relation</b> on $X \\times Y$ is a <i>subset</i> $R \\subseteq X \\times Y$. One writes $xRy$ for $(x, y) \\in R$ and uses symbols such as $<, \\leq, \\cong, \\equiv, \\sim$. For $X = Y$ one speaks of a relation <b>on $X$</b>. Further, $x \\not\\sim y$ stands for $\\neg(x \\sim y)$.",
    meta: "Script: Definition 1.58 & Example 1.59",
    explanation: "The abstraction 'relation = subset of the product' turns familiar symbols into mathematical objects: $\\leq$ on $\\mathbb{R}$ IS the half-plane $\\{(x,y) \\mid x \\leq y\\} \\subseteq \\mathbb{R}^2$ (Figure 1.13). This lets you read properties of relations geometrically: reflexivity = the diagonal is contained, symmetry = mirror-symmetric about the diagonal.",
    example: "Example 1.59: $m < n$ on $\\mathbb{N}$ ($\\exists k \\in \\mathbb{N}: m + k = n$); the 'approximately equal' relation $x \\approx_\\delta y \\iff |x - y| \\leq \\delta$ for fixed $\\delta > 0$; the graph of every function is a relation.",
    counterexample: "<b>1.</b> Not every relation is a function: $\\leq$ on $\\mathbb{R}$ assigns infinitely many $y$ to each $x$ - function graphs are exactly the relations with 'exactly one $y$ per $x$'.<br><b>2.</b> $\\approx_\\delta$ is NOT transitive: $0 \\approx_1 1$ and $1 \\approx_1 2$, but $0 \\not\\approx_1 2$ - small errors add up; that is why 'approximately equal' is not an equivalence relation."
  },
  "k1_def_1_61": {
    title: "Definition 1.61: Equivalence relations",
    category: "1.6 Equivalence relations",
    front: "Which three properties make a relation $\\sim$ on $X$ an <b>equivalence relation</b>?",
    back: "A relation $\\sim$ on $X$ is an <b>equivalence relation</b> if:<br><br>1. <b>Reflexivity:</b> $\\forall x \\in X: x \\sim x$<br>2. <b>Symmetry:</b> $\\forall x, y \\in X: x \\sim y \\implies y \\sim x$<br>3. <b>Transitivity:</b> $\\forall x, y, z \\in X: ((x \\sim y) \\wedge (y \\sim z)) \\implies x \\sim z$",
    meta: "Script: Definition 1.61 & Example 1.62",
    explanation: "Equivalence relations formalise 'equality in certain respects' - in everyday language the difference between 'the same' (equivalent) and 'the very same' (identical). Examples 1.62: equality itself (the finest equivalence relation), the trivial relation $R = X^2$ (the coarsest), parallelism of lines, 'same remainder when divided by $m$'.",
    example: "On $\\mathbb{Z}$: $a \\sim b \\iff m \\mid (a - b)$ (congruence modulo $m$) is an equivalence relation - the basis of 'clock arithmetic'.",
    counterexample: "<b>1.</b> $\\leq$ on $\\mathbb{R}$ is NOT an equivalence relation: reflexive and transitive, but not symmetric ($2 \\leq 3$, but $3 \\not\\leq 2$).<br><b>2.</b> $\\approx_\\delta$ ('distance $\\leq \\delta$') is reflexive and symmetric, but not transitive - all three properties must be checked independently!"
  },
  "k1_def_1_66": {
    title: "Definition 1.66: Equivalence classes and quotient set",
    category: "1.6 Equivalence relations",
    front: "Define <b>equivalence class</b>, <b>representative</b> and <b>quotient set</b> $X/\\!\\sim$.",
    back: "Let $\\sim$ be an equivalence relation on $X$. For $x \\in X$,<br>$$[x]_\\sim = \\{y \\in X \\mid y \\sim x\\}$$<br>is the <b>equivalence class</b> of $x$; every $x \\in X$ is called a <b>representative</b> of its class $[x]_\\sim$. The set of all classes<br>$$X/\\!\\sim \\;= \\{[x]_\\sim \\mid x \\in X\\}$$<br>is called the <b>quotient</b> (quotient set) of $X$ modulo $\\sim$.",
    meta: "Script: Definition 1.66, Section 1.6",
    explanation: "<b>Pot picture from the script:</b> equivalent elements go into the same pot; $[x]_\\sim$ = the contents of the pot of $x$; $X/\\!\\sim$ = the set of pots. Also: $x \\sim y \\iff [x]_\\sim = [y]_\\sim$ - two classes are either equal or disjoint. The quotient is a <i>new space</i>, formed by 'gluing together' equivalent points.",
    example: "Congruence modulo 3 on $\\mathbb{Z}$: three classes $[0] = \\{\\dots, -3, 0, 3, \\dots\\}$, $[1]$, $[2]$; the quotient $\\mathbb{Z}/\\!\\sim$ has exactly 3 elements. In Example 1.62 (iv): $[1] = \\{1,2,3\\}$, $[4] = \\{4,5\\}$, $[6] = \\{6\\}$.",
    counterexample: "<b>1.</b> Representatives are not unique: $[0] = [3] = [-3]$ modulo 3 - a definition via representatives ('choose $x \\in [x]$ and set ...') must always be checked for <b>well-definedness</b> (independence of the choice)!<br><b>2.</b> $X/\\!\\sim$ is a set of <i>sets</i>, not of elements: $[1]_\\sim \\in X/\\!\\sim$, but $1 \\notin X/\\!\\sim$."
  },
  "k1_prop_1_67": {
    title: "Proposition 1.67: Equivalence relations = partitions",
    category: "1.6 Equivalence relations",
    front: "How do <b>equivalence relations</b> and <b>partitions</b> correspond (Proposition 1.67)?",
    back: "Let $X$ be a set. Then equivalence relations on $X$ and partitions of $X$ correspond:<br><br>&bull; For an equivalence relation $\\sim$, $\\mathcal{P}_\\sim = \\{[x]_\\sim \\mid x \\in X\\}$ is a <b>partition</b> of $X$.<br>&bull; For a partition $\\mathcal{P}$, $$x \\sim_{\\mathcal{P}} y \\iff \\exists P \\in \\mathcal{P}: x \\in P \\wedge y \\in P$$ defines an <b>equivalence relation</b>.<br>&bull; The constructions are <b>mutually inverse</b>: $\\mathcal{P}_{\\sim_\\mathcal{P}} = \\mathcal{P}$ and $\\sim_{\\mathcal{P}_\\sim} = \\sim$.",
    meta: "Script: Proposition 1.67",
    explanation: "Equivalence relation and partition are two languages for the same structure: 'who is equivalent to whom?' $\\leftrightarrow$ 'who lies in the same pot?'. Core of the proof: reflexivity ensures every $x$ lies in its own class (covering, classes non-empty); symmetry and transitivity force two classes sharing an element to coincide (disjointness of different classes).",
    example: "The partition $\\{\\{1,2,3\\}, \\{4,5\\}, \\{6\\}\\}$ of $\\{1,\\dots,6\\}$ corresponds exactly to the equivalence relation from Example 1.62 (iv).",
    counterexample: "<b>1.</b> If reflexivity is dropped, the correspondence breaks: the empty relation $R = \\emptyset$ on $X \\neq \\emptyset$ is symmetric and transitive, but its 'classes' $[x] = \\emptyset$ do not form a partition.<br><b>2.</b> A family with empty or overlapping sets does not define an equivalence relation on all of $X$ via $\\sim_{\\mathcal{P}}$ - the partition properties are really needed."
  },

  "k1_def_1_74_prop_1_75": {
    title: "Definition 1.74 & Proposition 1.75: Cardinality and the pigeonhole principle",
    category: "1.7 Finite and countable sets",
    front: "When does a set have <b>cardinality $n$</b>, and what does the <b>pigeonhole principle</b> (Proposition 1.75) say?",
    back: "<b>Definition 1.74:</b> $|\\emptyset| = 0$; a set $X$ has <b>cardinality $n \\in \\mathbb{N}$</b> if a bijection $\\{1, \\dots, n\\} \\to X$ exists ($|X| = n$). $X$ is <b>finite</b> ($|X| < \\infty$) if $|X| = n$ for some $n \\in \\mathbb{N}_0$, otherwise <b>infinite</b> ($|X| = \\infty$).<br><br><b>Proposition 1.75 (pigeonhole principle):</b> If $X, Y$ are finite with $|X| = m > n = |Y|$, then there is <b>no injective</b> map $X \\to Y$.<br><br><i>In particular:</i> the cardinality is well-defined (unique), and for finite sets a bijection $X \\to Y$ exists exactly when $|X| = |Y|$.",
    meta: "Script: Definition 1.74 & Proposition 1.75, Section 1.7",
    explanation: "Intuitively: if you distribute $m > n$ apples into $n$ baskets, some basket contains at least two apples - however you distribute them. As intuitive as the statement is, the script's proof runs cleanly by induction on $n$. Only the pigeonhole principle justifies that 'number of elements' is a well-defined number at all!",
    example: "Among 13 people, two have a birthday in the same month ($13 > 12$). In any group of $n \\geq 2$ people, two have the same number of acquaintances within the group (Section 1.8.4).",
    counterexample: "<b>1.</b> For infinite sets the principle is FALSE: $n \\mapsto n + 1$ is an injective map from $\\mathbb{N}$ into the proper subset $\\mathbb{N}_{\\geq 2}$ ('Hilbert's hotel': a full hotel with infinitely many rooms still has space).<br><b>2.</b> The converse does not hold: from $m \\leq n$ an injection exists, but not every map is injective."
  },
  "k1_def_1_79": {
    title: "Definition 1.79 & Lemma 1.80: Countability",
    category: "1.7 Finite and countable sets",
    front: "When is a set <b>countably infinite</b> or <b>uncountable</b>, and what does Lemma 1.80 say about subsets?",
    back: "<b>Definition 1.79:</b> $X$ is called <b>countably infinite</b> (short: countable) if a bijection $X \\to \\mathbb{N}$ exists. A set that is neither finite nor countably infinite is called <b>uncountable</b>.<br><br><b>Lemma 1.80:</b> Every subset $Y \\subseteq X$ of a countably infinite set is <b>either finite or countably infinite itself</b>. ('Smaller than countable does not go on forever.')",
    meta: "Script: Definition 1.79 & Lemma 1.80, Section 1.7",
    explanation: "Countable = 'the elements can be listed as an infinite list $x_1, x_2, x_3, \\dots$'. <b>Proof idea of the lemma:</b> for $A \\subseteq \\mathbb{N}$, $g(a) = |A \\cap \\{1, \\dots, a\\}|$ counts the position of $a$ in $A$ - an injective 'renumbering' that maps $A$ bijectively onto either $\\{1,\\dots,|A|\\}$ or all of $\\mathbb{N}$. Later: $\\mathbb{Z}$ and even $\\mathbb{Q}$ are countable, but $\\mathbb{R}$ is uncountable (Corollary 2.81)!",
    example: "$\\mathbb{Z}$ is countable via the list $0, 1, -1, 2, -2, \\dots$ The even numbers are countable via $n \\mapsto 2n$ - an infinite set can be equinumerous with a proper subset.",
    counterexample: "<b>1.</b> $[0, 1]$ and $\\mathbb{R}$ are NOT countable (Corollary 2.81) - 'infinite' comes in different sizes.<br><b>2.</b> A surjective map $\\mathbb{N} \\to X$ alone does not make $X$ countably infinite - $X$ could be finite (a constant map); the definition requires a <i>bijection</i>."
  },

  "k1_beweismethoden": {
    title: "1.8: Proof methods (contradiction, contraposition, induction)",
    category: "1.8 Proofs",
    front: "Describe the three most important <b>proof methods</b>: proof by contradiction, contraposition and complete induction.",
    back: "&bull; <b>Proof by contradiction (1.8.1):</b> To show $A$, assume $\\neg A$ and derive a contradiction - so $A$ must be true.<br><br>&bull; <b>Contraposition (1.8.2):</b> Instead of $A \\implies B$, show the equivalent $\\neg B \\implies \\neg A$.<br><br>&bull; <b>Complete induction (1.8.3):</b> To show $A(n)$ for all $n \\in \\mathbb{N}$:<br>1. <b>Base case</b> (anchor): show $A(1)$.<br>2. <b>Induction step</b>: show $\\forall n \\in \\mathbb{N}: A(n) \\implies A(n+1)$.",
    meta: "Script: Sections 1.8.1-1.8.3",
    explanation: "Induction resembles a recursive algorithm: $A(10)$ holds because $A(9)$ holds, because ... until the anchor $A(1)$ carries the chain (in Chapter 2 the anchor is <i>proved</i> from the definition of $\\mathbb{N}$, Theorem 2.15). Contraposition and contradiction are related but not the same: contraposition gives a direct chain of implications, while a proof by contradiction may use <i>both</i> assumptions (the hypothesis $A$ and $\\neg B$) at once.",
    example: "Contradiction: irrationality of $\\sqrt{2}$ (Lemma 2.30). Contraposition: '$n^2$ even $\\implies n$ even' via 'n odd $\\implies n^2$ odd'. Induction: the Gauss sum $1 + \\dots + n = \\frac{n(n+1)}{2}$ (Exercise 1.85) and Lemma 1.3.",
    counterexample: "<b>1.</b> Without a base case the step is worthless: '$A(n): n = n+1$' satisfies the induction step perfectly ($n = n+1 \\Rightarrow n+1 = n+2$), yet is true for no $n$!<br><b>2.</b> The induction step must work for ALL $n$: in the famous fake proof 'all horses have the same colour' the step fails exactly at the passage $n = 1 \\to 2$ (the two sub-herds do not overlap)."
  }
};
