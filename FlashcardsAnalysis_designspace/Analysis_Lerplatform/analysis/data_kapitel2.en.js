/* ==========================================================================
   FLASHCARDS CHAPTER 2 (English): The real numbers
   Analysis I - Prof. Dr. Manfred Einsiedler
   English translation of data_kapitel2.js. Formulas, SVG, tags and ids are identical.
   ========================================================================== */

window.FLASHCARDS_EN_KAPITEL_2 = {
  "k2_koerperaxiome_addition": {
    title: "Section 2.1.1: Field axioms (addition)",
    category: "2.1 The axioms of the real numbers",
    front: "State axiom (1) for the zero element and axiom (2) for the additive inverse in $\\mathbb{R}$.",
    back: "Axioms (addition):<br>(1) Zero element: $\\exists 0 \\in \\mathbb{R} \\; \\forall x \\in \\mathbb{R} : x + 0 = 0 + x = x$<br>(2) Additive inverse: $\\forall x \\in \\mathbb{R} \\; \\exists y \\in \\mathbb{R} : x + y = y + x = 0$ (we later write $y = -x$).",
    meta: "Script: Section 2.1.1, p. 71",
    explanation: "These axioms state that $\\mathbb{R}$ is an abelian group under addition. <br><br><svg height='60' width='300'><line x1='50' y1='30' x2='250' y2='30' style='stroke:black;stroke-width:2' /><circle cx='150' cy='30' r='5' fill='#1f407a' /><text x='145' y='50' fill='#1f407a'>0</text><circle cx='200' cy='30' r='5' fill='green' /><text x='195' y='50' fill='green'>x</text><circle cx='100' cy='30' r='5' fill='red' /><text x='90' y='50' fill='red'>-x</text><path d='M 200 20 Q 150 -10 100 20' stroke='black' fill='transparent' marker-end='url(#arrowhead)'/><text x='130' y='10'>+ (-x)</text></svg>",
    example: "For $x=5$ we have $y=-5$, so that $5 + (-5) = 0$.",
    counterexample: "The natural numbers $\\mathbb{N} = \\{1, 2, ...\\}$ do not satisfy these axioms, because neither zero nor negative numbers exist there."
  },
  "k2_koerperaxiome_multiplikation": {
    title: "Section 2.1.1: Field axioms (multiplication)",
    category: "2.1 The axioms of the real numbers",
    front: "State axiom (5) for the identity element and axiom (6) for the multiplicative inverse in $\\mathbb{R}$.",
    back: "Axioms (multiplication):<br>(5) Identity element: $\\exists 1 \\in \\mathbb{R}\\setminus\\{0\\} \\; \\forall x \\in \\mathbb{R} : x \\cdot 1 = 1 \\cdot x = x$<br>(6) Multiplicative inverse: $\\forall x \\in \\mathbb{R}\\setminus\\{0\\} \\; \\exists y \\in \\mathbb{R} : x \\cdot y = y \\cdot x = 1$ (we write $y = x^{-1}$)",
    meta: "Script: Section 2.1.1, p. 72",
    explanation: "Analogously to addition, the real numbers (without zero) form a group under multiplication. Zero must be excluded when forming inverses.",
    example: "For $x=2$ we have $y = \\frac{1}{2}$, because $2 \\cdot \\frac{1}{2} = 1$.",
    counterexample: "The integers $\\mathbb{Z}$ do not satisfy axiom (6), since e.g. $2$ has no multiplicative inverse in $\\mathbb{Z}$ ($\\frac{1}{2} \\notin \\mathbb{Z}$)."
  },
  "k2_distributivgesetz": {
    title: "Section 2.1.1: Distributive law",
    category: "2.1 The axioms of the real numbers",
    front: "What does the distributive law (axiom 9) say? It links addition and multiplication.",
    back: "(9) Distributive law: $\\forall x, y, z \\in \\mathbb{R} : x \\cdot (y + z) = x \\cdot y + x \\cdot z$ <br>and $(x + y) \\cdot z = x \\cdot z + y \\cdot z$.",
    meta: "Script: Section 2.1.1, p. 73",
    explanation: "The distributive law is the only field axiom that links the two operations (addition and multiplication). It allows expanding and factoring out.<br><br><div style='padding: 10px; background: #eef; border-radius: 5px; font-family: monospace;'>x * [ y | z ] = [x*y | x*z]</div>",
    example: "$2 \\cdot (3 + 4) = 2 \\cdot 3 + 2 \\cdot 4 = 6 + 8 = 14$.",
    counterexample: "An operation such as exponentiation is not distributive over addition: $(x+y)^2 \\neq x^2 + y^2$."
  },
  "k2_angeordnete_koerper_ordnung": {
    title: "Section 2.1.2: Ordered fields (order)",
    category: "2.1 The axioms of the real numbers",
    front: "Which four axioms (10-13) define the linear (total) order $\\leq$ on the real numbers?",
    back: "(10) Reflexivity: $x \\leq x$<br>(11) Antisymmetry: $(x \\leq y \\wedge y \\leq x) \\implies x = y$<br>(12) Transitivity: $(x \\leq y \\wedge y \\leq z) \\implies x \\leq z$<br>(13) Linearity: $x \\leq y \\vee y \\leq x$",
    meta: "Script: Section 2.1.2, p. 77",
    explanation: "These axioms guarantee that we can compare all elements of $\\mathbb{R}$ as on a ruler. No element lies 'outside' the comparison.",
    example: "Transitivity: if $2 \\leq 3$ and $3 \\leq 5$, then $2 \\leq 5$.",
    counterexample: "The complex numbers $\\mathbb{C}$ cannot be equipped with such a linear order that is compatible with the field axioms."
  },
  "k2_angeordnete_koerper_kompatibilitaet": {
    title: "Section 2.1.2: Ordered fields (compatibility)",
    category: "2.1 The axioms of the real numbers",
    front: "How are the order axioms coupled with the field axioms? Name axioms (14) and (15).",
    back: "(14) Additive compatibility: $(x \\leq y) \\implies (x + z \\leq y + z)$ for all $x,y,z$<br>(15) Multiplicative compatibility: $(0 \\leq x \\wedge 0 \\leq y) \\implies 0 \\leq x \\cdot y$",
    meta: "Script: Section 2.1.2, p. 78",
    explanation: "These axioms allow us to add to both sides of an inequality, or multiply it by positive numbers, without the inequality losing its validity.",
    example: "From $2 \\leq 3$ it follows (with $z=4$): $2+4 \\leq 3+4 \\implies 6 \\leq 7$.",
    counterexample: "If you multiply an inequality by a negative number (e.g. $-1$), the inequality sign flips. This follows from these axioms."
  },
  "k2_vollstaendigkeitsaxiom": {
    title: "Section 2.1.3: The completeness axiom",
    category: "2.1 The axioms of the real numbers",
    front: "What does the completeness axiom (axiom 16) say for the real numbers (in the geometric separation formulation)?",
    back: "Let $X, Y \\subseteq \\mathbb{R}$ be non-empty such that $x \\leq y$ for all $x \\in X$ and $y \\in Y$. Then there is a $z \\in \\mathbb{R}$ such that $x \\leq z \\leq y$ for all $x \\in X, y \\in Y$.",
    meta: "Script: Section 2.1.3, p. 79",
    explanation: "This axiom fills the 'gaps' of the number line. It guarantees that there is a point that separates two disjoint sets exactly.<br><br><svg height='50' width='300'><line x1='10' y1='25' x2='290' y2='25' style='stroke:black;stroke-width:2' /><rect x='10' y='15' width='100' height='20' fill='rgba(255,0,0,0.3)'/><text x='40' y='12' fill='red'>Set X</text><rect x='190' y='15' width='100' height='20' fill='rgba(0,0,255,0.3)'/><text x='210' y='12' fill='blue'>Set Y</text><circle cx='150' cy='25' r='4' fill='#1f407a' /><text x='145' y='45' fill='#1f407a'>z</text></svg>",
    example: "If $X = \\{x \\in \\mathbb{Q} : x^2 < 2\\}$ and $Y = \\{y \\in \\mathbb{Q}_{>0} : y^2 > 2\\}$, then the real number $z = \\sqrt{2}$ separates these sets.",
    counterexample: "In the rational numbers $\\mathbb{Q}$ there is no such $z \\in \\mathbb{Q}$ for the example above. $\\mathbb{Q}$ is not complete."
  },
  "k2_lem_11_existenz_wurzelfunktion": {
    title: "Important Exercise 2.11: Existence of the square root function",
    category: "2.1 The axioms of the real numbers",
    front: "How is the completeness axiom used to prove the existence of the square root $\\sqrt{a}$ for $a > 0$ (Important Exercise 2.11)?",
    back: "Consider the two sets<br>$$X = \\{x \\in \\mathbb{R}_{\\geq 0} \\mid x^2 < a\\}, \\qquad Y = \\{y \\in \\mathbb{R}_{\\geq 0} \\mid y^2 > a\\}.$$<br>They satisfy the hypothesis of the completeness axiom ($x \\leq y$ for all $x \\in X$, $y \\in Y$), so there is a $c \\in \\mathbb{R}$ with $x \\leq c \\leq y$ for all $x \\in X, y \\in Y$. Since $c + \\varepsilon \\notin X$ we get $c^2 \\geq a$; since $c - \\varepsilon \\notin Y$ we get $c^2 \\leq a$; hence $c^2 = a$. One writes $c = \\sqrt{a}$; the root function $\\sqrt{\\cdot}: \\mathbb{R}_{\\geq 0} \\to \\mathbb{R}_{\\geq 0}$ is bijective, increasing and multiplicative ($\\sqrt{xy} = \\sqrt{x}\\sqrt{y}$).",
    meta: "Script: Section 2.1.4, Important Exercise 2.11, p. 81",
    explanation: "This proves that the real numbers close the 'gap' that existed in the rational numbers at $\\sqrt{2}$.",
    example: "Analogously, the existence of the n-th root can be proved for every positive real number.",
    counterexample: "In $\\mathbb{Q}$ the set $A = \\{x \\in \\mathbb{Q} \\mid x^2 < 2\\}$ has no supremum."
  },

  "k2_def_12_induktive_teilmengen": {
    title: "Definition 2.12: Inductive subsets",
    category: "2.2 The natural numbers",
    front: "When is a subset $M \\subseteq \\mathbb{R}$ called inductive?",
    back: "A subset $M \\subseteq \\mathbb{R}$ is inductive if:<br>1. $1 \\in M$<br>2. $\\forall x \\in M : x + 1 \\in M$",
    meta: "Script: Section 2.2.1, p. 83",
    explanation: "This formalises 'counting on'. If you start at 1 and always add 1, you stay inside the set.",
    example: "The set $\\mathbb{R}_{\\geq 0}$ is inductive.",
    counterexample: "The set $\\{1, 2, 3\\}$ is not inductive, because $3 \\in M$ but $3+1 = 4 \\notin M$."
  },
  "k2_def_13_lemma_2_14": {
    title: "Definition 2.13 & Lemma 2.14: The natural numbers",
    category: "2.2 The natural numbers",
    front: "How are the natural numbers $\\mathbb{N}$ defined exactly, starting from the real numbers and inductive subsets?",
    back: "<b>Definition 2.13:</b> The set of natural numbers is the intersection of all inductive subsets of $\\mathbb{R}$:<br>$$\\mathbb{N} = \\bigcap_{M \\subseteq \\mathbb{R} \\text{ inductive}} M$$<br><b>Lemma 2.14:</b> $\\mathbb{N}$ is itself inductive, and hence the <i>smallest</i> inductive subset of $\\mathbb{R}$.",
    meta: "Script: Definition 2.13 & Lemma 2.14, p. 83",
    explanation: "By construction, $\\mathbb{N}$ is the 'smallest possible' inductive subset: $\\mathbb{N}$ is contained in every inductive set. It follows immediately that $n \\geq 1$ for all $n \\in \\mathbb{N}$ (because $\\{x \\in \\mathbb{R} \\mid x \\geq 1\\}$ is inductive).",
    example: "$\\mathbb{N} = \\{1, 2, 3, 4, ...\\}$",
    counterexample: "The set $\\mathbb{Z}$ is inductive, but not the smallest, since it also contains values $\\le 0$."
  },
  "k2_satz_15_prinzip_vollstaendigen_induktion": {
    title: "Theorem 2.15: Principle of complete induction",
    category: "2.2 The natural numbers",
    front: "What is the principle of complete induction, stated formally?",
    back: "Let $A(n)$ be a statement for each $n \\in \\mathbb{N}$. If:<br>1. (Base case): $A(1)$ is true.<br>2. (Induction step): $\\forall n \\in \\mathbb{N}: A(n) \\implies A(n+1)$ is true.<br>then $A(n)$ is true for all $n \\in \\mathbb{N}$.",
    meta: "Script: Section 2.2.1",
    explanation: "This follows directly from the fact that $\\mathbb{N}$ is the smallest inductive subset of $\\mathbb{R}$.",
    example: "Gauss's sum formula: proof that $\\sum_{k=1}^n k = \\frac{n(n+1)}{2}$.",
    counterexample: "If the base case is missing, one can prove absurd things (e.g. 'all numbers are equal')."
  },
  "k2_lem_18_anordnung_n": {
    title: "Lemma 2.18: Ordering of N",
    category: "2.2 The natural numbers",
    front: "What does Lemma 2.18 say about the order and predecessors in the set of natural numbers $\\mathbb{N}$?",
    back: "1. For every $n \\in \\mathbb{N}$, either $n = 1$ or $n - 1 \\in \\mathbb{N}$.<br>2. For $m, n \\in \\mathbb{N}$ with $m \\leq n \\leq m + 1$ we necessarily have $n = m$ or $n = m + 1$.",
    meta: "Script: Section 2.2.1, Lemma 2.18",
    explanation: "This lemma proves the 'discreteness' (lack of gaps-in-between) of the natural numbers from the field and order axioms.",
    example: "If $3 \\leq n \\leq 4$ for some $n \\in \\mathbb{N}$, then $n=3$ or $n=4$.",
    counterexample: "In $\\mathbb{Q}$ or $\\mathbb{R}$ this property is false, because infinitely many numbers lie between 3 and 4."
  },
  "k2_satz_22_wohlordnungsprinzip": {
    title: "Theorem 2.22: Well-ordering principle",
    category: "2.2 The natural numbers",
    front: "What does the well-ordering principle say for the natural numbers $\\mathbb{N}$?",
    back: "Every non-empty subset $A \\subseteq \\mathbb{N}$ has a minimum (a smallest element).",
    meta: "Script: Section 2.2.1, Theorem 2.22",
    explanation: "The well-ordering principle is equivalent to complete induction. It prevents you from descending 'downwards' forever in $\\mathbb{N}$.",
    example: "The set of even numbers $\\{2, 4, 6, ...\\}$ has minimum 2.",
    counterexample: "This does not hold for the real numbers $\\mathbb{R}$: the open set $(0, 1)$ has no minimum."
  },
  "k2_lem_25_ganze_rationale_zahlen": {
    title: "Lemmas 2.25 & 2.27: Integers and rational numbers",
    category: "2.2 The natural numbers",
    front: "How are the integers $\\mathbb{Z}$ and the rational numbers $\\mathbb{Q}$ defined as subsets of $\\mathbb{R}$?",
    back: "$\\mathbb{Z} = \\mathbb{N}_0 \\cup \\{-n \\mid n \\in \\mathbb{N}\\}$<br><br>$\\mathbb{Q} = \\left\\{ \\frac{m}{n} \\mid m \\in \\mathbb{Z}, n \\in \\mathbb{N} \\right\\}$",
    meta: "Script: Sections 2.2.2 & 2.2.3",
    explanation: "The integers extend $\\mathbb{N}$ by the additive inverses. The rational numbers extend $\\mathbb{Z}$ by the multiplicative inverses.",
    example: "$-5 \\in \\mathbb{Z}$ and $\\frac{-5}{3} \\in \\mathbb{Q}$.",
    counterexample: "$\\sqrt{2} \\notin \\mathbb{Q}$. $\\mathbb{Z}$ is not a field, because divisions such as $1/2$ lead out of $\\mathbb{Z}$."
  },
  "k2_lem_30_irrationalitaet_wurzel_2": {
    title: "Lemma 2.30: Irrationality of the square root of 2",
    category: "2.2 The natural numbers",
    front: "What does Lemma 2.30 say about $\\sqrt{2}$, and what does the script conclude from it for the set $\\mathbb{Q}$?",
    back: "The real number $\\sqrt{2}$ is irrational ($\\sqrt{2} \\notin \\mathbb{Q}$). <br>In particular, the rational numbers do not satisfy the completeness axiom.",
    meta: "Script: Section 2.2.3, p. 88",
    explanation: "Because $\\mathbb{Q}$ satisfies all field and order axioms (1-15), but the equation $x^2 = 2$ has no solution in $\\mathbb{Q}$, this shows that the completeness axiom (16) is independent of axioms 1-15.",
    example: "One can approximate $\\sqrt{2}$ arbitrarily closely by fractions, but never hits it exactly in $\\mathbb{Q}$.",
    counterexample: "$\\mathbb{R}$ has no such gap."
  },
  "k2_satz_31_division_rest": {
    title: "Theorem 2.31: Division with remainder",
    category: "2.2 The natural numbers",
    front: "State the theorem on division with remainder for natural numbers.",
    back: "For all $n \\in \\mathbb{N}_0$ and $d \\in \\mathbb{N}$ there exist $q \\in \\mathbb{N}_0$ and $r \\in \\mathbb{N}_0$ with $r < d$, which we call the remainder, such that $n = qd + r$.",
    meta: "Script: Section 2.2.4, p. 89",
    explanation: "The strict condition that the remainder must be smaller than the divisor ($r < d$) is essential.",
    example: "$n=23, d=5 \\implies 23 = 4 \\cdot 5 + 3$ (remainder $r=3 < 5$).",
    counterexample: "$23 = 3 \\cdot 5 + 8$ is mathematically equivalent, but here $8 > 5$ (not division with remainder)."
  },

  "k2_prop_33_komplexen_zahlen": {
    title: "Proposition 2.33: The complex numbers",
    category: "2.3 The complex numbers",
    front: "How are the complex numbers $\\mathbb{C}$, together with their addition and multiplication, defined?",
    back: "$\\mathbb{C} = \\mathbb{R} \\times \\mathbb{R}$.<br>Addition: $(x_1, y_1) + (x_2, y_2) = (x_1+x_2, y_1+y_2)$<br>Multiplication: $(x_1, y_1) \\cdot (x_2, y_2) = (x_1 x_2 - y_1 y_2, x_1 y_2 + x_2 y_1)$",
    meta: "Script: Section 2.3, Proposition 2.33",
    explanation: "With the definition $i := (0, 1)$ we have $i^2 = -1$. Hence every element can be written as $x + iy$. $\\mathbb{C}$ forms a field that is algebraically closed.",
    example: "$(0, 1) \\cdot (0, 1) = (0\\cdot 0 - 1\\cdot 1, 0\\cdot 1 + 1\\cdot 0) = (-1, 0) = -1$.",
    counterexample: "$\\mathbb{C}$ is NOT an ordered field! One cannot define an order $\\leq$ on $\\mathbb{C}$ that is compatible with axioms (10)-(15)."
  },
  "k2_def_36_lemma_2_37": {
    title: "Definition 2.36 & Lemma 2.37: Complex conjugation",
    category: "2.3 The complex numbers",
    front: "How is <b>complex conjugation</b> defined, and what properties does it have (Lemma 2.37)?",
    back: "<b>Definition 2.36:</b> $\\overline{\\cdot}: \\mathbb{C} \\to \\mathbb{C}, \\; z = x + yi \\mapsto \\bar{z} = x - yi$.<br><br><b>Lemma 2.37:</b><br>(i) For all $z \\in \\mathbb{C}$, $z\\bar{z} \\in \\mathbb{R}$ and $z\\bar{z} \\geq 0$; moreover $z\\bar{z} = 0 \\iff z = 0$.<br>(ii) $\\overline{z + w} = \\bar{z} + \\bar{w}$<br>(iii) $\\overline{z \\cdot w} = \\bar{z} \\cdot \\bar{w}$<br><br>Furthermore (Exercise 2.40): $\\operatorname{Re}(z) = \\frac{z + \\bar{z}}{2}$, $\\operatorname{Im}(z) = \\frac{z - \\bar{z}}{2i}$ and $\\mathbb{R} = \\{z \\in \\mathbb{C} \\mid \\bar{z} = z\\}$.",
    meta: "Script: Definition 2.36, Lemma 2.37, Exercise 2.40, pp. 95-96",
    explanation: "Geometrically, conjugation is reflection in the real axis. It is the key to the multiplicative inverse: $(x+yi)^{-1} = \\frac{\\bar{z}}{z\\bar{z}} = \\frac{x - yi}{x^2+y^2}$ for $z \\neq 0$, and to the absolute value: $|z| = \\sqrt{z\\bar{z}}$ (Definition 2.51).",
    example: "$\\overline{3 + 4i} = 3 - 4i$ and $(3+4i)(3-4i) = 9 + 16 = 25 \\geq 0$. Inverse: $(3+4i)^{-1} = \\frac{3-4i}{25}$.",
    counterexample: "Conjugation is compatible with $+$ and $\\cdot$, but it is NOT the identity: $\\bar{z} = z$ holds only for real $z$. For $z = i$, $\\bar{z} = -i \\neq i$."
  },
  "k2_def_42_unbeschraenkte_intervalle_umgebungen": {
    title: "Definitions 2.42 & 2.43: Unbounded intervals and neighbourhoods",
    category: "2.4 Intervals and the absolute value",
    front: "How are <b>unbounded intervals</b> and <b>neighbourhoods</b> of a point $x \\in \\mathbb{R}$ defined?",
    back: "<b>Definition 2.42:</b> For $a, b \\in \\mathbb{R}$:<br>$[a, \\infty) = \\mathbb{R}_{\\geq a} = \\{x \\mid a \\leq x\\}$, $\\; (-\\infty, b] = \\mathbb{R}_{\\leq b}$ (closed),<br>$(a, \\infty) = \\mathbb{R}_{> a}$, $\\; (-\\infty, b)$, $\\; (-\\infty, \\infty) = \\mathbb{R}$ (open).<br><br><b>Definition 2.43:</b> A set containing an open interval around $x$ is called a <b>neighbourhood</b> of $x$. For $\\delta > 0$, the <b>$\\delta$-neighbourhood</b> of $x$ is the interval $(x - \\delta, x + \\delta) = \\{y \\in \\mathbb{R} \\mid |x - y| < \\delta\\}$.",
    meta: "Script: Definitions 2.42 & 2.43, pp. 97-98",
    explanation: "The symbols $\\pm\\infty$ are pure notation here (they are not real numbers). Neighbourhoods are the basic building block for convergence and continuity: '$y$ close to $x$' means '$y$ lies in a small $\\delta$-neighbourhood of $x$'. Neighbourhoods are also called vicinities.",
    example: "$(1{,}9,\\; 2{,}1)$ is the $0{,}1$-neighbourhood of $2$. Also $[0, 5]$ is a neighbourhood of $2$ (it contains e.g. $(1, 3)$) - neighbourhoods need not be open!",
    counterexample: "$[2, 3]$ is NOT a neighbourhood of $2$: no open interval around $2$ fits inside it, since points to the left of $2$ are missing."
  },

  "k2_def_41_intervalle": {
    title: "Definition 2.41: Intervals",
    category: "2.4 Intervals and the absolute value",
    front: "How is an interval $I \\subseteq \\mathbb{R}$ formally defined (property), and what are the 4 standard kinds (closed, open, half-open)?",
    back: "Definition: A subset $I \\subseteq \\mathbb{R}$ is called an interval if for all $x < y \\in I$ and all $x < z < y$ we also have $z \\in I$.<br><br>Kinds:<br>1. Closed: $[a, b] = \\{x \\mid a \\leq x \\leq b\\}$<br>2. Open: $(a, b) = \\{x \\mid a < x < b\\}$<br>3/4. Half-open: $[a, b)$ and $(a, b]$",
    meta: "Script: Section 2.4.1, Definition 2.41",
    explanation: "An interval must not have 'holes'.<br><br><svg height='40' width='300'><line x1='10' y1='20' x2='290' y2='20' style='stroke:black;stroke-width:2'/><line x1='80' y1='10' x2='80' y2='30' style='stroke:#1f407a;stroke-width:3'/><line x1='220' y1='10' x2='220' y2='30' style='stroke:#1f407a;stroke-width:3'/><rect x='80' y='15' width='140' height='10' fill='#1f407a'/><text x='75' y='10'>a</text><text x='215' y='10'>b</text><text x='110' y='40'>[a, b] (closed)</text></svg>",
    example: "The open interval $(0, 1)$ does not contain its endpoints 0 and 1.",
    counterexample: "The set $[0, 1] \\cup [2, 3]$ is not an interval, because $1.5$ is missing."
  },
  "k2_def_45_absolutbetrag": {
    title: "Definition 2.45: Absolute value in R",
    category: "2.4 Intervals and the absolute value",
    front: "How is the absolute value $|x|$ of a real number $x \\in \\mathbb{R}$ defined?",
    back: "$|x| := \\begin{cases} x, & \\text{if } x \\geq 0 \\\\ -x, & \\text{if } x < 0 \\end{cases}$",
    meta: "Script: Section 2.4.2, Definition 2.45, p. 99",
    explanation: "The absolute value makes every number non-negative. It equals the geometric distance of the number $x$ from zero on the number line.",
    example: "$|5| = 5$, $|-5| = -(-5) = 5$.",
    counterexample: "$-|x|$ is always $\\le 0$."
  },
  "k2_lem_45_folgerungen_a_h": {
    title: "Consequences (a)-(h) of Definition 2.45: Properties of the absolute value",
    category: "2.4 Intervals and the absolute value",
    front: "State the basic consequences (a)-(h) of the definition of the absolute value on $\\mathbb{R}$.",
    back: "(a) <b>Definiteness:</b> $|x| \\geq 0$ and $|x| = 0 \\iff x = 0$<br>(b) $|-x| = |x|$<br>(c) <b>Multiplicativity:</b> $|xy| = |x||y|$<br>(d) $\\left|\\frac{1}{x}\\right| = \\frac{1}{|x|}$ for $x \\neq 0$<br>(e) $|x| \\leq y \\iff -y \\leq x \\leq y$ (analogously (f) with $<$)<br>(g) <b>Triangle inequality:</b> $|x+y| \\leq |x| + |y|$<br>(h) <b>Reverse triangle inequality:</b> $|x| - |y| \\leq |x-y|$",
    meta: "Script: Section 2.4.2, consequences of Definition 2.45, p. 99",
    explanation: "In particular, property (iv) is the key to solving absolute-value inequalities, which often occur in limit proofs.",
    example: "$|x - 2| < 0.1 \\iff -0.1 < x - 2 < 0.1 \\iff 1.9 < x < 2.1$.",
    counterexample: "Addition is NOT absolutely compatible: $|x + y| \\neq |x| + |y|$ in general."
  },

  "k2_dreiecksungleichung_folgerung_g": {
    title: "Triangle inequality on R and C (consequence (g) / property (iii))",
    category: "2.4 Intervals and the absolute value",
    front: "What is the classical triangle inequality for real and complex numbers, and where does the script state it?",
    back: "For all $x, y \\in \\mathbb{R}$ (consequence (g) of Definition 2.45), and $z, w \\in \\mathbb{C}$ (property (iii) of the absolute value on $\\mathbb{C}$):<br>$$|x + y| \\leq |x| + |y|$$<br>On $\\mathbb{C}$ the proof rests on the <b>Cauchy-Schwarz inequality</b> $x_1x_2 + y_1y_2 \\leq |z||w|$.",
    meta: "Script: Section 2.4.2 (consequence (g)) & 2.4.3 (property (iii)), pp. 99/101",
    explanation: "Geometrically: the direct route (the sum $x+y$) is never longer than the detour via the two individual segments.<br><br><svg height='120' width='250'><polygon points='50,100 200,100 150,30' style='fill:rgba(31,64,122,0.1);stroke:#1f407a;stroke-width:2' /><text x='110' y='115'>|x + y|</text><text x='70' y='60'>|x|</text><text x='185' y='60'>|y|</text></svg>",
    example: "For $x = 3$ and $y = -5$: $|3 + (-5)| = 2$. Separately: $|3| + |-5| = 8$. We have $2 \\leq 8$.",
    counterexample: "Equality $|x+y| = |x| + |y|$ holds in $\\mathbb{R}$ only when $x$ and $y$ have the same sign."
  },
  "k2_umgekehrte_dreiecksungleichung_folgerung": {
    title: "Reverse triangle inequality (consequence (h) / property (iv))",
    category: "2.4 Intervals and the absolute value",
    front: "What is the reverse triangle inequality for real and complex numbers?",
    back: "For all $x, y \\in \\mathbb{R}$ (consequence (h)) and $z, w \\in \\mathbb{C}$ (property (iv)):<br>$$|x| - |y| \\leq |x - y|$$<br>Swapping $x, y$ and using consequence (e) gives the combined form $\\big||x| - |y|\\big| \\leq |x - y|$.",
    meta: "Script: Section 2.4.2 (consequence (h)) & 2.4.3 (property (iv)), pp. 99/101",
    explanation: "This form is used very often to bound differences of absolute values from above. It follows directly from the ordinary triangle inequality (by writing $x = (x-y)+y$).",
    example: "For $x=3, y=5$: $||3| - |5|| = |-2| = 2$. And $|3 - 5| = 2$. We have $2 \\leq 2$.",
    counterexample: "The expression $|x| - |y|$ can be negative, which is why the outer absolute value on the left is essential!"
  },
  "k2_def_48_uebung_2_49": {
    title: "Definition 2.48 & Exercise 2.49: Open and closed sets in R",
    category: "2.4 Intervals and the absolute value",
    front: "When is a subset $A \\subseteq \\mathbb{R}$ (1) open and (2) closed?",
    back: "1. **Open**: for every $x \\in A$ there is an $\\epsilon > 0$ such that the $\\epsilon$-neighbourhood $(x - \\epsilon, x + \\epsilon) \\subseteq A$.<br><br>2. **Closed**: a set is closed if its complement $\\mathbb{R} \\setminus A$ is open.<br><br><i>Exercise 2.49:</i> $U$ is open exactly when every point $x \\in U$ lies in an open interval $I$ with $I \\subseteq U$.",
    meta: "Script: Section 2.4.2, Definition 2.48 & Exercise 2.49, p. 100",
    explanation: "Open sets do not contain their 'boundary'; around each point you can fit a tiny interval that lies entirely inside the set.",
    example: "The open interval $(0, 1)$ is an open set. The closed interval $[0, 1]$ is closed (because its complement $(-\\infty, 0) \\cup (1, \\infty)$ is open).",
    counterexample: "Half-open intervals such as $[0, 1)$ are NEITHER open NOR closed!"
  },
  "k2_def_51_absolutbetrag": {
    title: "Definition 2.51: Absolute value on C",
    category: "2.4 Intervals and the absolute value",
    front: "How is the absolute value $|z|$ calculated for a complex number $z = x + iy \\in \\mathbb{C}$?",
    back: "$$|z| := \\sqrt{x^2 + y^2}$$<br>(With the complex conjugate $\\bar{z} = x - iy$ we also have $|z|^2 = z \\cdot \\bar{z}$.)",
    meta: "Script: Section 2.4.3",
    explanation: "The absolute value is the Euclidean distance of the number $z$ from the origin $(0,0)$ in the complex plane (Pythagoras).",
    example: "For $z = 3 + 4i$, $|z| = \\sqrt{9 + 16} = \\sqrt{25} = 5$.",
    counterexample: "Careful: it is NOT true that $|x + iy| = |x| + |y|$! (That would give $3+4=7$.)"
  },
  "k2_def_52_offene_baelle": {
    title: "Definition 2.52: Open balls",
    category: "2.4 Intervals and the absolute value",
    front: "How is the open ball $B_r(z_0)$ around a point $z_0 \\in \\mathbb{C}$ with radius $r > 0$ defined?",
    back: "$$B_r(z_0) := \\{z \\in \\mathbb{C} \\mid |z - z_0| < r\\}$$",
    meta: "Script: Section 2.4.3",
    explanation: "In $\\mathbb{C}$ this is the interior of a circle (without the circle's edge). In $\\mathbb{R}$ the open ball corresponds exactly to the open interval $(z_0 - r, z_0 + r)$.<br><br><svg height='120' width='120'><circle cx='60' cy='60' r='50' style='fill:rgba(31,64,122,0.2);stroke:#1f407a;stroke-width:2;stroke-dasharray:5,5' /><circle cx='60' cy='60' r='3' fill='black' /><line x1='60' y1='60' x2='110' y2='60' style='stroke:black;stroke-width:1' /><text x='80' y='55'>r</text><text x='40' y='75'>z₀</text></svg>",
    example: "$B_1(0)$ in $\\mathbb{C}$ is the unit disc (without its edge).",
    counterexample: "The equation $|z - z_0| \\leq r$ would also include the edge (a closed ball)."
  },
  "k2_def_54_offene_abgeschlossene_mengen": {
    title: "Definition 2.54: Open/closed sets in C",
    category: "2.4 Intervals and the absolute value",
    front: "When is a subset $U \\subseteq \\mathbb{C}$ open, and when is it closed?",
    back: "**Open**: for every $z \\in U$ there is a radius $r > 0$ such that $B_r(z) \\subseteq U$.<br><br>**Closed**: when the complement $\\mathbb{C} \\setminus U$ is open.",
    meta: "Script: Section 2.4.3",
    explanation: "The definition is exactly analogous to $\\mathbb{R}$, except that here we use open balls $B_r(z)$ (discs) instead of open intervals $(x-\\epsilon, x+\\epsilon)$.",
    example: "Every open ball $B_r(z)$ is itself an open set in $\\mathbb{C}$.",
    counterexample: "The set $\\{z \\in \\mathbb{C} \\mid |z| \\leq 1\\}$ is not open, because around points on the boundary ($|z|=1$) no ball can be drawn that lies entirely in the set."
  },

  "k2_supremum_infimum_definition": {
    title: "Section 2.5: Supremum and infimum (definition)",
    category: "2.5 Maximum and supremum",
    front: "What is the supremum ($\\sup A$) and the infimum ($\\inf A$) of a set $A \\subseteq \\mathbb{R}$?",
    back: "**Supremum**: the *least upper bound* of the set $A$.<br>**Infimum**: the *greatest lower bound* of the set $A$.",
    meta: "Script: Section 2.5.2",
    explanation: "While a maximum/minimum must belong to the set, the supremum and infimum can lie outside it (as the 'boundaries' of the interval).",
    example: "For the open interval $A = (0, 1)$, $\\sup(A) = 1$ and $\\inf(A) = 0$. But a maximum or minimum does not exist here!",
    counterexample: "The number $2$ is indeed an upper bound of $(0,1)$, but not the *least* upper bound, so it is not the supremum."
  },
  "k2_uneigentliche_suprema_infima": {
    title: "Section 2.5.3: Improper suprema and infima",
    category: "2.5 Maximum and supremum",
    front: "How are supremum and infimum conventionally defined for unbounded or empty sets in $\\mathbb{R}$?",
    back: "- If $A$ is unbounded above: $\\sup(A) = \\infty$<br>- If $A$ is unbounded below: $\\inf(A) = -\\infty$<br>- For the empty set, paradoxically: $\\sup(\\emptyset) = -\\infty$ and $\\inf(\\emptyset) = \\infty$",
    meta: "Script: Section 2.5.3",
    explanation: "$\\sup(\\emptyset) = -\\infty$ because *every* real number is an upper bound of the empty set. The *smallest* of all conceivable bounds is therefore $-\\infty$.",
    example: "For $A = \\mathbb{Z}$, $\\sup(\\mathbb{Z}) = \\infty$ and $\\inf(\\mathbb{Z}) = -\\infty$.",
    counterexample: "One must not calculate with $\\infty$ in equations as if it were an ordinary number."
  },
  "k2_prop_62_supremum_unter_streckung": {
    title: "Proposition 2.62: Supremum under scaling",
    category: "2.5 Maximum and supremum",
    front: "Let $A \\subseteq \\mathbb{R}$ be a non-empty set bounded above and $c > 0$. What holds for the supremum of the scaled set $cA$?",
    back: "The set $cA = \\{ca \\mid a \\in A\\}$ is also bounded above, and:<br>$$\\sup(cA) = c \\cdot \\sup(A)$$",
    meta: "Script: Section 2.5",
    explanation: "The supremum behaves linearly with respect to multiplication by strictly positive constants.",
    example: "For the interval $A = (0, 2)$, $\\sup(A) = 2$. Multiplying the set by $c = 3$ gives $3A = (0, 6)$ and $\\sup(3A) = 3 \\cdot 2 = 6$.",
    counterexample: "For $c < 0$ (e.g. $c = -1$) this does not hold: $\\sup(-A) = -\\inf(A)$."
  },
  "k2_prop_63_supremum_unter_summen": {
    title: "Proposition 2.63: Supremum under sums",
    category: "2.5 Maximum and supremum",
    front: "Let $A, B \\subseteq \\mathbb{R}$ be two non-empty sets bounded above. What holds for the supremum of the sum set $A + B$?",
    back: "The sum set $A + B = \\{a + b \\mid a \\in A, b \\in B\\}$ is bounded above, and:<br>$$\\sup(A + B) = \\sup(A) + \\sup(B)$$",
    meta: "Script: Section 2.5",
    explanation: "The supremum is fully compatible with elementwise addition of sets.",
    example: "Let $A = (0, 1)$ with $\\sup(A) = 1$ and $B = [1, 2]$ with $\\sup(B) = 2$. Then $A + B = (1, 3)$ and $\\sup(A+B) = 1 + 2 = 3$.",
    counterexample: "This holds only for sums. For the difference set, $\\sup(A - B) = \\sup(A) - \\inf(B)$."
  },

  "k2_satz_68_archimedisches_prinzip": {
    title: "Theorem 2.68: Archimedean principle",
    category: "2.6 First consequences of completeness",
    front: "Name the three statements of the Archimedean principle (Theorem 2.68).",
    back: "(i) Every non-empty subset of $\\mathbb{Z}$ that is bounded above has a <b>maximum</b>.<br>(ii) For every $x \\in \\mathbb{R}$ there is <b>exactly one</b> $n \\in \\mathbb{Z}$ with $n \\leq x < n + 1$.<br>(iii) For every $\\epsilon > 0$ there is an $n \\in \\mathbb{N}$ with $\\frac{1}{n} < \\epsilon$.",
    meta: "Script: Section 2.6.1, Theorem 2.68, p. 110",
    explanation: "Geometrically: there are no 'infinitely large' real numbers and no 'infinitely small' positive numbers. In particular, (ii) implies that for every $x$ there is an $n \\in \\mathbb{N}$ with $x < n$. Part (ii) is also the basis for the floor function $\\lfloor x \\rfloor$.",
    example: "For $\\epsilon = 0{,}003$, (iii) gives e.g. $n = 334$, because $\\frac{1}{334} < 0{,}003$. This is the standard step in almost every convergence proof ($\\frac{1}{n} \\to 0$).",
    counterexample: "In 'non-standard models' there are infinitely large numbers for which the principle fails. In $\\mathbb{R}$ this is excluded."
  },
  "k2_satz_70_dichtheit": {
    title: "Corollary 2.70: Density of Q in R",
    category: "2.6 First consequences of completeness",
    front: "What does it mean that the rational numbers $\\mathbb{Q}$ are dense in $\\mathbb{R}$?",
    back: "Between any two different real numbers $x < y$ there is at least one rational number $q \\in \\mathbb{Q}$ (with $x < q < y$).",
    meta: "Script: Section 2.6.1",
    explanation: "Every real number can be approximated arbitrarily closely by fractions (rational numbers). The same holds conversely for irrational numbers too!",
    example: "Between $x = \\sqrt{2}$ and $y = \\sqrt{2} + 0.001$ lies e.g. the fraction $q = 1.4145 = \\frac{2829}{2000}$.",
    counterexample: "The integers $\\mathbb{Z}$ are not dense in $\\mathbb{R}$. Between $1.1$ and $1.9$ there is no integer."
  },
  "k2_def_73_haeufungspunkt_menge": {
    title: "Definition 2.73: Accumulation point of a set",
    category: "2.6 First consequences of completeness",
    front: "When is a point $x \\in \\mathbb{R}$ called an accumulation point of a subset $A \\subseteq \\mathbb{R}$?",
    back: "A point $x \\in \\mathbb{R}$ is an accumulation point of $A$ if for *every* $\\epsilon > 0$ the set $(x - \\epsilon, x + \\epsilon) \\cap A$ contains infinitely many points.",
    meta: "Script: Section 2.6.2, p. 110",
    explanation: "One can approach the accumulation point arbitrarily closely by elements of the set $A$. The point $x$ itself need not lie in $A$.",
    example: "The set $A = \\{\\frac{1}{n} \\mid n \\in \\mathbb{N}\\}$ has $0$ as its only accumulation point.",
    counterexample: "The set of integers $\\mathbb{Z}$ has no accumulation point at all, because its points are too isolated (distance 1)."
  },
  "k2_satz_81_ueberabzaehlbarkeit": {
    title: "Corollary 2.81: Uncountability of R",
    category: "2.6 First consequences of completeness",
    front: "What does Corollary 2.81 say about the cardinality of the real numbers $\\mathbb{R}$?",
    back: "The set of real numbers $\\mathbb{R}$ (and likewise the interval $[0,1]$) is **uncountable**.",
    meta: "Script: Section 2.6.4",
    explanation: "One can never write the real numbers in a numbered list $(x_1, x_2, ...)$ without leaving out infinitely many. The proof in the script is a game between Alice and Bob: for each number $x_n$ Bob lists, Alice shrinks her closed interval $I_n$ so that $x_n \\notin I_n$; the nested intervals principle (Theorem 2.77) then gives a point that Bob never lists.",
    example: "The tiny interval $[0, 1]$ alone contains uncountably many numbers (as many as all of $\\mathbb{R}$).",
    counterexample: "The sets $\\mathbb{N}$, $\\mathbb{Z}$ and $\\mathbb{Q}$ are all countable (they can be arranged as a list)."
  },
  "k2_def_82_cantor_menge_eigenschaften": {
    title: "Definition 2.82: The Cantor set (properties)",
    category: "2.6 First consequences of completeness",
    front: "What is the Cantor set (construction and its 3 most important properties)?",
    back: "It arises by repeatedly removing the open middle third from the interval $[0,1]$.<br><br>**Properties:**<br>1. It is uncountable.<br>2. It contains no intervals (empty interior).<br>3. Its 'total length' (measure) is 0.",
    meta: "Script: Section 2.6.5",
    explanation: "The Cantor set is a fractal. It is completely 'full of holes', yet it has exactly as many points as all of $\\mathbb{R}$.",
    example: "Points such as $0, 1, \\frac{1}{3}, \\frac{2}{3}, \\frac{1}{9}$ belong to the Cantor set (the endpoints of the removed thirds).",
    counterexample: "The rational numbers in $[0,1]$ also have empty interior and measure 0, but they are only countable."
  },
  "k2_zusammenfassung_aequivalenz_vollstaendigkeit": {
    title: "Summary: Equivalent forms of completeness",
    category: "2.7 Further study material",
    front: "The completeness axiom (axiom 16) is equivalent to which two principles?",
    back: "Assuming the field and order axioms, completeness is equivalent to:<br>1. The existence of the **supremum** for non-empty sets bounded above.<br>2. The **nested intervals principle** (together with the Archimedean principle).",
    meta: "Script: Section 2.7",
    explanation: "These different viewpoints all describe the same phenomenon: the number line $\\mathbb{R}$ has absolutely no holes.",
    example: "If every bounded set has a supremum, then intervals cannot shrink into 'nothing' (there always exists a common point).",
    counterexample: "In $\\mathbb{Q}$ neither the supremum property nor the nested intervals principle holds."
  },
  "k2_def_56_maximum_minimum_eindeutigkeit": {
    title: "Definitions 2.56 & 2.57: Maximum and minimum (uniqueness)",
    category: "2.5 Maximum and supremum",
    front: "What holds regarding the unique determination of the maximum and minimum of a set (e.g. of a closed interval in $\\mathbb{R}$)?",
    back: "If a subset $A \\subseteq \\mathbb{R}$ has a maximum (or minimum), then it is **uniquely determined**.",
    meta: "Script: Section 2.5",
    explanation: "There cannot be two different maxima in a totally ordered set such as the real numbers. If $m_1$ and $m_2$ are both maxima, then $m_1 \\leq m_2$ and $m_2 \\leq m_1$ must hold, which forces $m_1 = m_2$ (antisymmetry).",
    example: "The closed interval $[0, 1]$ has exactly one maximum (the $1$) and exactly one minimum (the $0$).",
    counterexample: "Open intervals such as $(0, 1)$ have *no* maximum and *no* minimum (but they do have a supremum and infimum)."
  },
  "k2_def_58_schranken_beschraenktheit": {
    title: "Definition 2.58: Bounds and boundedness",
    category: "2.5 Maximum and supremum",
    front: "When is a subset $X \\subseteq \\mathbb{R}$ bounded above or below, and when simply 'bounded'?",
    back: "- **Bounded above**: there is an $s \\in \\mathbb{R}$ with $x \\leq s$ for all $x \\in X$. ($s$ is called an upper bound.)<br>- **Bounded below**: there is an $s \\in \\mathbb{R}$ with $s \\leq x$ for all $x \\in X$. ($s$ is called a lower bound.)<br>- **Bounded**: the set is bounded both above and below.",
    meta: "Script: Section 2.5",
    explanation: "Geometrically, boundedness means that the whole set fits into a (possibly very large) finite interval $[-M, M]$.",
    example: "The set $\\{1, 2, 3\\}$ is bounded. $\\mathbb{N}$ is bounded below (bound 0 or 1), but not bounded above.",
    counterexample: "$\\mathbb{Z}$ is neither bounded above nor bounded below."
  },
  "k2_bew_59_existenz_supremums": {
    title: "Proof of Theorem 2.59: Existence of the supremum",
    category: "2.5 Maximum and supremum",
    front: "How does one prove the existence of the supremum (Theorem 2.59) for a non-empty set $X \\subseteq \\mathbb{R}$ bounded above, using the completeness axiom?",
    back: "1. Let $Y$ be the set of *all* upper bounds of $X$. Since $X$ is bounded above, $Y$ is non-empty.<br>2. Since $x \\leq s$ holds for all $x \\in X$ and $s \\in Y$, the **completeness axiom** applies.<br>3. So there exists an element $c \\in \\mathbb{R}$ with $x \\leq c \\leq s$ for all $x \\in X$ and $s \\in Y$.<br>4. Since $x \\leq c$ for all $x \\in X$, $c$ is an upper bound.<br>5. Since $c \\leq s$ for *every* upper bound $s \\in Y$, $c$ is the *least* upper bound (that is, the supremum).",
    meta: "Script: Section 2.5.2, proof of Theorem 2.59",
    explanation: "The completeness axiom (axiom 16) gives us directly the exact element $c$, which lies as a separating element between the set $X$ and all its upper bounds.",
    example: "For $X = [0, 1)$, $c=1$ separates the set $X$ from all its upper bounds $Y = [1, \\infty)$.",
    counterexample: "In $\\mathbb{Q}$ this proof would fail, because the completeness axiom does not hold in $\\mathbb{Q}$."
  },
  "k2_lem_65_supremum_unter_vereinigung": {
    title: "Exercise 2.65: Supremum under union",
    category: "2.5 Maximum and supremum",
    front: "Let $X, Y \\subseteq \\mathbb{R}$ be two sets bounded above. What holds for the supremum of the union $X \\cup Y$?",
    back: "$$\\sup(X \\cup Y) = \\max \\{\\sup(X), \\sup(Y)\\}$$",
    meta: "Script: Section 2.5.3, Exercise 2.65",
    explanation: "When you combine two sets, the highest bound of the combined set is simply dictated by the 'winner' (the larger supremum) of the two individual sets.",
    example: "Let $X = [0, 2]$ (supremum 2) and $Y = (1, 5)$ (supremum 5). Then $X \\cup Y = [0, 5)$ and the supremum is $\\max\\{2, 5\\} = 5$.",
    counterexample: "Note: this holds for unions. For the intersection $X \\cap Y$, $\\min\\{\\sup X, \\sup Y\\}$ does in general *not* hold (e.g. when the intersection is empty or lies well below)."
  },
  "k2_lem_67_supremum_vom_betrag": {
    title: "Exercise 2.67: Supremum of the absolute values of a set",
    category: "2.5 Maximum and supremum",
    front: "Let $A \\subseteq \\mathbb{R}$ be bounded. What holds for the supremum of the image set $|A|$ (i.e. the set of all absolute values of elements of $A$)?",
    back: "$$\\sup(|A|) = \\max \\{\\sup(A), -\\inf(A)\\}$$",
    meta: "Script: Section 2.5.3, Exercise 2.67",
    explanation: "Because the absolute value turns negative numbers positive, one must check which is farther from zero: the largest positive element ($\\sup A$), or the 'lowest' negative element ($\\inf A$), which is flipped by the absolute value to $-\\inf(A)$.",
    example: "For $A = [-5, 2]$, $\\sup A = 2$ and $\\inf A = -5$. The absolute-value set $|A|$ is $[0, 5]$. The supremum is $\\max\\{2, -(-5)\\} = 5$.",
    counterexample: "The statement is of no help for sum sets such as $|A+B|$."
  },
  "k2_def_68_ganzzahliger_anteil": {
    title: "Theorem 2.68: Definition of the integer part",
    category: "2.6 First consequences of completeness",
    front: "How is the **integer part** (floor function) $\\lfloor x \\rfloor$ defined for $x \\in \\mathbb{R}$, and from what does its existence follow?",
    back: "The integer part $\\lfloor x \\rfloor$ is the **uniquely determined integer** $n \\in \\mathbb{Z}$ for which:<br>$$n \\leq x < n + 1$$<br>Its existence follows directly from the Archimedean principle.",
    meta: "Script: Section 2.6.1, Theorem 2.68",
    explanation: "The Archimedean principle guarantees that, by counting along the number line, every real number can be 'boxed in'.",
    example: "$\\lfloor 3.7 \\rfloor = 3$. Careful with negative numbers: $\\lfloor -3.7 \\rfloor = -4$ (and not -3, because $-4 \\leq -3.7 < -3$).",
    counterexample: "Rounding (to the nearest neighbour) is *not* the same as the floor function."
  },
  "k2_def_68_gebrochener_anteil": {
    title: "Theorem 2.68: Definition of the fractional part",
    category: "2.6 First consequences of completeness",
    front: "How is the **fractional part** $\\{x\\}$ of a real number $x \\in \\mathbb{R}$ defined?",
    back: "The fractional part is defined as:<br>$$\\{x\\} = x - \\lfloor x \\rfloor$$<br>It follows that $\\{x\\} \\in [0, 1)$ always.",
    meta: "Script: Section 2.6.1, Theorem 2.68",
    explanation: "You simply subtract the rounded-down integer part from the original number. What remains is always a non-negative remainder smaller than 1.",
    example: "For $x = 3.7$, $\\{3.7\\} = 3.7 - 3 = 0.7$.<br>For $x = -3.7$, $\\{-3.7\\} = -3.7 - (-4) = 0.3$.",
    counterexample: "The fractional part is never negative!"
  },
  "k2_bew_70_dichtheit": {
    title: "Corollary 2.70 (proof): Density of Q in R",
    category: "2.6 First consequences of completeness",
    front: "How does one prove the density of $\\mathbb{Q}$ in $\\mathbb{R}$ (that is, that for $x < y \\in \\mathbb{R}$ there is always a $q \\in \\mathbb{Q}$ between them)?",
    back: "1. Since $y - x > 0$, the Archimedean principle gives an $n \\in \\mathbb{N}$ with $\\frac{1}{n} < y - x$, which implies $nx < ny - 1$.<br>2. Consider the number $nx$ and its integer part $m := \\lfloor nx \\rfloor \\in \\mathbb{Z}$. We have $m \\leq nx < m + 1$.<br>3. From $nx < m + 1$ and $m \\leq nx < ny - 1 \\implies m+1 < ny$ it follows overall that $nx < m + 1 < ny$.<br>4. Dividing by $n$ gives $x < \\frac{m+1}{n} < y$. Set $q = \\frac{m+1}{n} \\in \\mathbb{Q}$.",
    meta: "Script: Section 2.6.1, proof of Corollary 2.70",
    explanation: "The core idea: stretch the distance $y-x$ (by multiplying with $n$) until it is larger than 1. In a gap $>1$ an integer must necessarily lie.",
    example: "Between $x=0.333$ and $y=0.334$ choose $n=1000$. This gives a 'gap' of $1$ ($333 < 334$), but $n=2000$ gives $666 < 667 < 668$, so $q = 667/2000$.",
    counterexample: "This proof necessarily requires the Archimedean principle."
  },
  "k2_lem_71_reelle_zahl_als": {
    title: "Exercise 2.71: A real number as supremum of rational numbers",
    category: "2.6 First consequences of completeness",
    front: "What is the supremum of the set $A_x = \\{r \\in \\mathbb{Q} \\mid r < x\\}$ for an arbitrary real number $x \\in \\mathbb{R}$?",
    back: "$$\\sup(\\{r \\in \\mathbb{Q} \\mid r < x\\}) = x$$",
    meta: "Script: Section 2.6.1, Exercise 2.71",
    explanation: "This statement follows directly from the density of $\\mathbb{Q}$ in $\\mathbb{R}$. If there were an upper bound smaller than $x$ (say $x - \\epsilon$), then by density we could immediately find a rational number between $x-\\epsilon$ and $x$.",
    example: "For $x = \\sqrt{2}$, the set $\\{r \\in \\mathbb{Q} \\mid r < \\sqrt{2}\\}$ is bounded above by $\\sqrt{2}$. Although $\\sqrt{2}$ itself is not rational, it is the *least* upper bound of this rational set.",
    counterexample: "Viewed inside the rational numbers, this set has no supremum (because $\\sqrt{2} \\notin \\mathbb{Q}$)."
  },
  "k2_lem_74_charakterisierung_haeufungspunkten": {
    title: "Exercises 2.74 & 2.76: Characterisation of accumulation points",
    category: "2.6 First consequences of completeness",
    front: "How can an accumulation point $x_0$ of a set $A \\subseteq \\mathbb{R}$ be characterised alternatively (Exercise 2.76)?",
    back: "A point $x_0 \\in \\mathbb{R}$ is an accumulation point of $A$ exactly when, for **every** $\\epsilon > 0$, the intersection of the $\\epsilon$-neighbourhood $(x_0 - \\epsilon, x_0 + \\epsilon)$ with the set $A$ contains **infinitely many points**.",
    meta: "Script: Section 2.6.2, Exercise 2.76",
    explanation: "This formulation explains the name 'accumulation point': however small you choose the interval around $x_0$, infinitely many points of the set $A$ always crowd into it. In analysis this is the counterpart of the pigeonhole principle for infinite sets.",
    example: "For $A = \\{1/n \\mid n \\in \\mathbb{N}\\}$, every tiny interval $(-\\epsilon, \\epsilon)$ around $0$ contains infinitely many fractions. So $0$ is an accumulation point.",
    counterexample: "The set $\\mathbb{Z}$ has no accumulation point, because for $x_0 = 1$ one can choose $\\epsilon = 0.5$, and the interval $(0.5, 1.5)$ contains only *finitely many* (namely exactly one) points of $\\mathbb{Z}$."
  },
  "k2_satz_75_existenz_haeufungspunkten": {
    title: "Theorem 2.75: Existence of accumulation points",
    category: "2.6 First consequences of completeness",
    front: "What does Theorem 2.75 say about the existence of accumulation points (the 'pigeonhole principle of analysis', also called Bolzano-Weierstrass for sets)?",
    back: "Every **bounded, infinite** subset $A \\subseteq \\mathbb{R}$ has **at least one accumulation point** in $\\mathbb{R}$.",
    meta: "Script: Section 2.6.2, Theorem 2.75",
    explanation: "Intuitively: if infinitely many points are 'confined' to a finite, bounded interval, they must crowd together arbitrarily densely at at least one place (approximate agreement).<br><br><svg height='100' width='300'><line x1='20' y1='50' x2='280' y2='50' style='stroke:black;stroke-width:2'/><line x1='50' y1='40' x2='50' y2='60' style='stroke:black;stroke-width:2'/><line x1='250' y1='40' x2='250' y2='60' style='stroke:black;stroke-width:2'/><text x='35' y='30'>-D</text><text x='240' y='30'>+D</text><circle cx='180' cy='50' r='5' fill='red'/><text x='175' y='35' fill='red'>x₀</text><circle cx='182' cy='50' r='2' fill='green'/><circle cx='178' cy='50' r='2' fill='green'/><circle cx='184' cy='50' r='2' fill='green'/><circle cx='176' cy='50' r='2' fill='green'/><circle cx='179' cy='48' r='2' fill='green'/><circle cx='181' cy='52' r='2' fill='green'/><circle cx='100' cy='50' r='2' fill='green'/><circle cx='130' cy='50' r='2' fill='green'/><circle cx='210' cy='50' r='2' fill='green'/><text x='70' y='80' fill='green'>Infinitely many points</text></svg>",
    example: "The set $A = \\mathbb{Q} \\cap [0, 1]$ is infinite and bounded by $[0, 1]$. In fact *every* point in $[0, 1]$ is an accumulation point of this set.",
    counterexample: "The set $\\mathbb{N}$ is infinite but has no accumulation point, because it is *not bounded*."
  },
  "k2_bew_75_bolzano_weierstrass": {
    title: "Proof of Theorem 2.75 (Bolzano-Weierstrass)",
    category: "2.6 First consequences of completeness",
    front: "How does one prove the Bolzano-Weierstrass theorem (Theorem 2.75) with the help of the supremum?",
    back: "1. Since $A$ is bounded, there is an interval $[-D, D]$ containing $A$.<br>2. Consider the set $X = \\{x \\in \\mathbb{R} \\mid A \\cap (-\\infty, x] \\text{ is finite}\\}$.<br>3. $X$ is non-empty ($-D \\in X$) and bounded above ($D$ is an upper bound). So $x_0 = \\sup(X)$ exists.<br>4. If you shift $x_0$ left by $\\epsilon$ to $x_0 - \\epsilon$, only finitely many points of $A$ lie there.<br>5. If you shift $x_0$ right by $\\epsilon$ to $x_0 + \\epsilon$, then (since $x_0$ is the supremum) *infinitely* many points lie there.<br>6. Consequently, the interval $(x_0 - \\epsilon, x_0 + \\epsilon]$ must contain infinitely many points of $A$. $x_0$ is the accumulation point we were looking for!",
    meta: "Script: Section 2.6.2, proof of Theorem 2.75",
    explanation: "The supremum splits the number line exactly at the point $x_0$ where the count of accumulated points switches from 'finite' to 'infinite'.",
    example: "This is one of the most elegant applications of the completeness axiom in the topology of $\\mathbb{R}$.",
    counterexample: "Without the supremum axiom (e.g. in $\\mathbb{Q}$) the point $x_0$ might fall into a 'gap' and not exist among the numbers at all."
  },
  "k2_satz_77_intervallschachtelungsprinzip": {
    title: "Theorem 2.77: Nested intervals principle",
    category: "2.6 First consequences of completeness",
    front: "State the nested intervals principle (Theorem 2.77). What exactly is the intersection made of?",
    back: "Let $I_1 \\supseteq I_2 \\supseteq I_3 \\supseteq \\dots$ be a sequence of **closed, bounded** intervals $I_n = [a_n, b_n]$.<br><br>Then the intersection $\\bigcap_{n \\in \\mathbb{N}} I_n$ is non-empty, and exactly:<br>$$\\bigcap_{n \\in \\mathbb{N}} I_n = \\left[ \\sup \\{a_n \\mid n \\in \\mathbb{N}\\}, \\inf \\{b_n \\mid n \\in \\mathbb{N}\\} \\right]$$",
    meta: "Script: Section 2.6.3, Theorem 2.77",
    explanation: "The left interval endpoints $a_n$ move to the right (they are bounded above by every $b_n$), so they have a supremum. The right endpoints $b_n$ move to the left and have an infimum. The completeness axiom guarantees that $\\sup \\{a_n\\} \\leq \\inf \\{b_n\\}$.",
    example: "For $I_n = [0, 1/n]$ the left endpoints do not move at all ($a_n=0 \\implies \\sup=0$), while the right endpoints converge to $0$ ($b_n=1/n \\implies \\inf=0$). The intersection is the point interval $[0, 0] = \\{0\\}$.",
    counterexample: "For open intervals $(0, 1/n)$ this does not hold: the intersection is empty. For unbounded intervals $[n, \\infty)$ the intersection is also empty."
  },
  "k2_lem_82_korollar_2_83": {
    title: "Exercise 2.82 & Corollary 2.83: The Cantor set",
    category: "2.6 First consequences of completeness",
    front: "How does the Cantor set $C$ behave with respect to its construction (intervals) and uncountability?",
    back: "1. In construction step $C_{n+1}$, the set consists of exactly **twice as many disjoint, closed intervals** as $C_n$.<br>2. The length of each of these intervals shrinks at step $n+1$ to a third ($\\frac{1}{3^n}$).<br>3. By assigning an address sequence (e.g. 'Left', 'Right', 'Left', ...) one can define a bijection $f: C \\to \\{L, R\\}^{\\mathbb{N}_0}$.<br>4. Since the address space is uncountable, the Cantor set is also **uncountable**.",
    meta: "Script: Section 2.6.5, Corollary 2.83",
    explanation: "Although in the limit the intersection of all these intervals has total length 0 and contains no complete intervals any more, uncountably many 'isolated' points remain. Each infinite sequence of left/right turns leads, thanks to the nested intervals principle, to exactly one point.",
    example: "The point $1/3$ has the address 'Left, Right, Right, Right, ...', since it always lies at the right-hand edge of the remaining left thirds.",
    counterexample: "Although the set is uncountable, unlike $\\mathbb{R}$ it contains no subintervals (empty interior)."
  }
};
