// --- DATA_KAPITEL2.JS (TEIL 1) ---
// Chronologisch geordnetes, vollständiges Deck inklusive Inline-SVG Grafiken!

window.FLASHCARDS_KAPITEL_2 = [
    // --- 2.1 DIE AXIOME DER REELLEN ZAHLEN ---
    {
        id: "k2_koerperaxiome_addition",
        title: "Abschnitt 2.1.1: Körperaxiome (Addition)",
        category: "2.1 Die Axiome der reellen Zahlen",
        type: "definition",
        front: "Nenne das Axiom (1) für das Nullelement und (2) für das Negative Element der Addition in $\\mathbb{R}$.",
        back: "Axiome (Addition):<br>(1) Nullelement: $\\exists 0 \\in \\mathbb{R} \\; \\forall x \\in \\mathbb{R} : x + 0 = 0 + x = x$<br>(2) Negatives Element: $\\forall x \\in \\mathbb{R} \\; \\exists y \\in \\mathbb{R} : x + y = y + x = 0$ (wobei wir später $y = -x$ schreiben).",
        meta: "Skript: Abschnitt 2.1.1, S. 71",
        explanation: "Diese Axiome definieren, dass $\\mathbb{R}$ bezüglich der Addition eine abelsche Gruppe ist. <br><br><svg height='60' width='300'><line x1='50' y1='30' x2='250' y2='30' style='stroke:black;stroke-width:2' /><circle cx='150' cy='30' r='5' fill='#1f407a' /><text x='145' y='50' fill='#1f407a'>0</text><circle cx='200' cy='30' r='5' fill='green' /><text x='195' y='50' fill='green'>x</text><circle cx='100' cy='30' r='5' fill='red' /><text x='90' y='50' fill='red'>-x</text><path d='M 200 20 Q 150 -10 100 20' stroke='black' fill='transparent' marker-end='url(#arrowhead)'/><text x='130' y='10'>+ (-x)</text></svg>",
        example: "Für $x=5$ ist $y=-5$, sodass $5 + (-5) = 0$.",
        counterexample: "Die Menge der natürlichen Zahlen $\\mathbb{N} = \\{1, 2, ...\\}$ erfüllt diese Axiome nicht, da weder die Null noch negative Zahlen existieren."
    },
    {
        id: "k2_koerperaxiome_multiplikation",
        title: "Abschnitt 2.1.1: Körperaxiome (Multiplikation)",
        category: "2.1 Die Axiome der reellen Zahlen",
        type: "definition",
        front: "Nenne das Axiom (5) für das Einselement und (6) für das Inverse Element der Multiplikation in $\\mathbb{R}$.",
        back: "Axiome (Multiplikation):<br>(5) Einselement: $\\exists 1 \\in \\mathbb{R}\\setminus\\{0\\} \\; \\forall x \\in \\mathbb{R} : x \\cdot 1 = 1 \\cdot x = x$<br>(6) Inverses Element: $\\forall x \\in \\mathbb{R}\\setminus\\{0\\} \\; \\exists y \\in \\mathbb{R} : x \\cdot y = y \\cdot x = 1$ (wir schreiben $y = x^{-1}$)",
        meta: "Skript: Abschnitt 2.1.1, S. 72",
        explanation: "Analog zur Addition bilden die reellen Zahlen (ohne die Null) bezüglich der Multiplikation eine Gruppe. Die Null muss bei der Inversenbildung ausgeschlossen werden.",
        example: "Für $x=2$ ist $y = \\frac{1}{2}$, denn $2 \\cdot \\frac{1}{2} = 1$.",
        counterexample: "Die ganzen Zahlen $\\mathbb{Z}$ erfüllen Axiom (6) nicht, da z.B. $2$ in $\\mathbb{Z}$ kein multiplikatives Inverses hat ($\\frac{1}{2} \\notin \\mathbb{Z}$)."
    },
    {
        id: "k2_distributivgesetz",
        title: "Abschnitt 2.1.1: Distributivgesetz",
        category: "2.1 Die Axiome der reellen Zahlen",
        type: "definition",
        front: "Was besagt das Distributivgesetz (Axiom 9), welches Addition und Multiplikation koppelt?",
        back: "(9) Distributivgesetz: $\\forall x, y, z \\in \\mathbb{R} : x \\cdot (y + z) = x \\cdot y + x \\cdot z$ <br>sowie $(x + y) \\cdot z = x \\cdot z + y \\cdot z$.",
        meta: "Skript: Abschnitt 2.1.1, S. 73",
        explanation: "Das Distributivgesetz ist das einzige Körperaxiom, das die beiden Verknüpfungen (Addition und Multiplikation) miteinander verbindet. Es ermöglicht das Ausmultiplizieren und Ausklammern.<br><br><div style='padding: 10px; background: #eef; border-radius: 5px; font-family: monospace;'>x * [ y | z ] = [x*y | x*z]</div>",
        example: "$2 \\cdot (3 + 4) = 2 \\cdot 3 + 2 \\cdot 4 = 6 + 8 = 14$.",
        counterexample: "Eine Operation wie die Potenzierung ist nicht distributiv bezüglich der Addition: $(x+y)^2 \\neq x^2 + y^2$."
    },
    {
        id: "k2_angeordnete_koerper_ordnung",
        title: "Abschnitt 2.1.2: Angeordnete Körper (Ordnung)",
        category: "2.1 Die Axiome der reellen Zahlen",
        type: "definition",
        front: "Welche vier Axiome (10-13) definieren die lineare (totale) Ordnung $\\leq$ auf den reellen Zahlen?",
        back: "(10) Reflexivität: $x \\leq x$<br>(11) Antisymmetrie: $(x \\leq y \\wedge y \\leq x) \\implies x = y$<br>(12) Transitivität: $(x \\leq y \\wedge y \\leq z) \\implies x \\leq z$<br>(13) Linearität: $x \\leq y \\vee y \\leq x$",
        meta: "Skript: Abschnitt 2.1.2, S. 77",
        explanation: "Diese Axiome garantieren, dass wir alle Elemente von $\\mathbb{R}$ wie auf einem Lineal vergleichen können. Kein Element liegt 'ausserhalb' des Vergleichs.",
        example: "Transitivität: Wenn $2 \\leq 3$ und $3 \\leq 5$, dann gilt $2 \\leq 5$.",
        counterexample: "Die komplexen Zahlen $\\mathbb{C}$ lassen sich nicht mit einer solchen linearen Ordnung versehen, die kompatibel mit den Körperaxiomen ist."
    },
    {
        id: "k2_angeordnete_koerper_kompatibilitaet",
        title: "Abschnitt 2.1.2: Angeordnete Körper (Kompatibilität)",
        category: "2.1 Die Axiome der reellen Zahlen",
        type: "definition",
        front: "Wie sind die Ordnungsaxiome mit den Körperaxiomen gekoppelt? Nenne die Axiome (14) und (15).",
        back: "(14) Additive Kompatibilität: $(x \\leq y) \\implies (x + z \\leq y + z)$ für alle $x,y,z$<br>(15) Multiplikative Kompatibilität: $(0 \\leq x \\wedge 0 \\leq y) \\implies 0 \\leq x \\cdot y$",
        meta: "Skript: Abschnitt 2.1.2, S. 78",
        explanation: "Diese Axiome erlauben es uns, Ungleichungen auf beiden Seiten zu addieren oder mit positiven Zahlen zu multiplizieren, ohne dass die Ungleichung ihre Gültigkeit verliert.",
        example: "Aus $2 \\leq 3$ folgt (mit $z=4$): $2+4 \\leq 3+4 \\implies 6 \\leq 7$.",
        counterexample: "Multipliziert man eine Ungleichung mit einer negativen Zahl (z.B. $-1$), dreht sich das Ungleichheitszeichen um. Das leitet sich aus diesen Axiomen ab."
    },
    {
        id: "k2_vollstaendigkeitsaxiom",
        title: "Abschnitt 2.1.3: Das Vollständigkeitsaxiom",
        category: "2.1 Die Axiome der reellen Zahlen",
        type: "definition",
        front: "Was besagt das Vollständigkeitsaxiom (Axiom 16) für die reellen Zahlen (in der geometrischen Trennungs-Formulierung)?",
        back: "Seien $X, Y \\subseteq \\mathbb{R}$ nicht-leer, sodass für alle $x \\in X$ und $y \\in Y$ gilt: $x \\leq y$. Dann existiert ein $z \\in \\mathbb{R}$, sodass $x \\leq z \\leq y$ für alle $x \\in X, y \\in Y$.",
        meta: "Skript: Abschnitt 2.1.3, S. 79",
        explanation: "Dieses Axiom füllt die 'Lücken' der Zahlengeraden. Es garantiert, dass es einen Punkt gibt, der zwei getrennte Mengen exakt voneinander trennt.<br><br><svg height='50' width='300'><line x1='10' y1='25' x2='290' y2='25' style='stroke:black;stroke-width:2' /><rect x='10' y='15' width='100' height='20' fill='rgba(255,0,0,0.3)'/><text x='40' y='12' fill='red'>Menge X</text><rect x='190' y='15' width='100' height='20' fill='rgba(0,0,255,0.3)'/><text x='210' y='12' fill='blue'>Menge Y</text><circle cx='150' cy='25' r='4' fill='#1f407a' /><text x='145' y='45' fill='#1f407a'>z</text></svg>",
        example: "Ist $X = \\{x \\in \\mathbb{Q} : x^2 < 2\\}$ und $Y = \\{y \\in \\mathbb{Q}_{>0} : y^2 > 2\\}$, so trennt die reelle Zahl $z = \\sqrt{2}$ diese Mengen.",
        counterexample: "In den rationalen Zahlen $\\mathbb{Q}$ gibt es für das obige Beispiel kein solches $z \\in \\mathbb{Q}$. $\\mathbb{Q}$ ist nicht vollständig."
    },
    {
        id: "k2_lem_11_existenz_wurzelfunktion",
        title: "Wichtige Übung 2.11: Existenz der Wurzelfunktion",
        category: "2.1 Die Axiome der reellen Zahlen",
        type: "lemma",
        front: "Wie wird das Vollständigkeitsaxiom genutzt, um die Existenz der Quadratwurzel $\\sqrt{a}$ für $a > 0$ zu beweisen (Wichtige Übung 2.11)?",
        back: "Man betrachtet die beiden Mengen<br>$$X = \\{x \\in \\mathbb{R}_{\\geq 0} \\mid x^2 < a\\}, \\qquad Y = \\{y \\in \\mathbb{R}_{\\geq 0} \\mid y^2 > a\\}.$$<br>Diese erfüllen die Voraussetzung des Vollständigkeitsaxioms ($x \\leq y$ für alle $x \\in X$, $y \\in Y$), also existiert ein $c \\in \\mathbb{R}$ mit $x \\leq c \\leq y$ für alle $x \\in X, y \\in Y$. Mit $c + \\varepsilon \\notin X$ folgt $c^2 \\geq a$, mit $c - \\varepsilon \\notin Y$ folgt $c^2 \\leq a$, also $c^2 = a$. Man schreibt $c = \\sqrt{a}$; die Wurzelfunktion $\\sqrt{\\cdot}: \\mathbb{R}_{\\geq 0} \\to \\mathbb{R}_{\\geq 0}$ ist bijektiv, wachsend und multiplikativ ($\\sqrt{xy} = \\sqrt{x}\\sqrt{y}$).",
        meta: "Skript: Abschnitt 2.1.4, Wichtige Übung 2.11, S. 81",
        explanation: "Dies beweist, dass die reellen Zahlen die 'Lücke' schließen, die in den rationalen Zahlen bei $\\sqrt{2}$ bestand.",
        example: "Analog lässt sich die Existenz der n-ten Wurzel für jede positive reelle Zahl beweisen.",
        counterexample: "In $\\mathbb{Q}$ hat die Menge $A = \\{x \\in \\mathbb{Q} \\mid x^2 < 2\\}$ kein Supremum."
    },

    // --- 2.2 DIE NATÜRLICHEN ZAHLEN ---
    {
        id: "k2_def_12_induktive_teilmengen",
        title: "Definition 2.12: Induktive Teilmengen",
        category: "2.2 Die natürlichen Zahlen",
        type: "definition",
        front: "Wann heisst eine Teilmenge $M \\subseteq \\mathbb{R}$ induktiv?",
        back: "Eine Teilmenge $M \\subseteq \\mathbb{R}$ ist induktiv, falls gilt:<br>1. $1 \\in M$<br>2. $\\forall x \\in M : x + 1 \\in M$",
        meta: "Skript: Abschnitt 2.2.1, S. 83",
        explanation: "Dies formalisiert das 'Weiterzählen'. Wenn man bei 1 startet und immer +1 rechnet, bleibt man innerhalb der Menge.",
        example: "Die Menge $\\mathbb{R}_{\\geq 0}$ ist induktiv.",
        counterexample: "Die Menge $\\{1, 2, 3\\}$ ist nicht induktiv, da $3 \\in M$, aber $3+1 = 4 \\notin M$."
    },
    {
        id: "k2_def_13_lemma_2_14",
        title: "Definition 2.13 & Lemma 2.14: Die natürlichen Zahlen",
        category: "2.2 Die natürlichen Zahlen",
        type: "definition",
        front: "Wie werden die natürlichen Zahlen $\\mathbb{N}$ ausgehend von den reellen Zahlen und induktiven Teilmengen exakt definiert?",
        back: "<b>Definition 2.13:</b> Die Menge der natürlichen Zahlen ist der Durchschnitt aller induktiven Teilmengen von $\\mathbb{R}$:<br>$$\\mathbb{N} = \\bigcap_{M \\subseteq \\mathbb{R} \\text{ induktiv}} M$$<br><b>Lemma 2.14:</b> $\\mathbb{N}$ ist selbst induktiv und somit die <i>kleinste</i> induktive Teilmenge von $\\mathbb{R}$.",
        meta: "Skript: Definition 2.13 & Lemma 2.14, S. 83",
        explanation: "Damit ist $\\mathbb{N}$ nach Konstruktion die 'kleinstmögliche' induktive Teilmenge: $\\mathbb{N}$ ist in jeder induktiven Menge enthalten. Daraus folgt sofort $n \\geq 1$ für alle $n \\in \\mathbb{N}$ (denn $\\{x \\in \\mathbb{R} \\mid x \\geq 1\\}$ ist induktiv).",
        example: "$\\mathbb{N} = \\{1, 2, 3, 4, ...\\}$",
        counterexample: "Die Menge $\\mathbb{Z}$ ist zwar induktiv, aber nicht die kleinste, da sie auch $\\le 0$ enthält."
    },
    {
        id: "k2_satz_15_prinzip_vollstaendigen_induktion",
        title: "Satz 2.15: Prinzip der vollständigen Induktion",
        category: "2.2 Die natürlichen Zahlen",
        type: "satz",
        front: "Wie lautet das Prinzip der vollständigen Induktion formal?",
        back: "Sei $A(n)$ eine Aussage für jedes $n \\in \\mathbb{N}$. Wenn gilt:<br>1. (Induktionsanfang): $A(1)$ ist wahr.<br>2. (Induktionsschritt): $\\forall n \\in \\mathbb{N}: A(n) \\implies A(n+1)$ ist wahr.<br>Dann ist $A(n)$ für alle $n \\in \\mathbb{N}$ wahr.",
        meta: "Skript: Abschnitt 2.2.1",
        explanation: "Dies folgt direkt aus der Eigenschaft, dass $\\mathbb{N}$ die kleinste induktive Teilmenge von $\\mathbb{R}$ ist.",
        example: "Gaußsche Summenformel: Beweis, dass $\\sum_{k=1}^n k = \\frac{n(n+1)}{2}$.",
        counterexample: "Wenn der Induktionsanfang fehlt, kann man absurde Dinge beweisen (z.B. 'Alle Zahlen sind gleich groß')."
    },
    {
        id: "k2_lem_18_anordnung_n",
        title: "Lemma 2.18: Anordnung von N",
        category: "2.2 Die natürlichen Zahlen",
        type: "lemma",
        front: "Was besagt Lemma 2.18 über die Anordnung und Vorgänger in der Menge der natürlichen Zahlen $\\mathbb{N}$?",
        back: "1. Für jedes $n \\in \\mathbb{N}$ gilt entweder $n = 1$ oder $n - 1 \\in \\mathbb{N}$.<br>2. Für $m, n \\in \\mathbb{N}$ mit $m \\leq n \\leq m + 1$ gilt zwingend $n = m$ oder $n = m + 1$.",
        meta: "Skript: Abschnitt 2.2.1, Lemma 2.18",
        explanation: "Dieses Lemma beweist die 'Diskretheit' (Lückenhaftigkeit) der natürlichen Zahlen aus den Körper- und Ordnungsaxiomen.",
        example: "Wenn $3 \\leq n \\leq 4$ für ein $n \\in \\mathbb{N}$ gilt, dann muss $n=3$ oder $n=4$ sein.",
        counterexample: "In $\\mathbb{Q}$ oder $\\mathbb{R}$ ist diese Eigenschaft falsch, da zwischen 3 und 4 unendlich viele Zahlen liegen."
    },
    {
        id: "k2_satz_22_wohlordnungsprinzip",
        title: "Satz 2.22: Wohlordnungsprinzip",
        category: "2.2 Die natürlichen Zahlen",
        type: "satz",
        front: "Was besagt das Wohlordnungsprinzip für die natürlichen Zahlen $\\mathbb{N}$?",
        back: "Jede nicht-leere Teilmenge $A \\subseteq \\mathbb{N}$ besitzt ein Minimum (ein kleinstes Element).",
        meta: "Skript: Abschnitt 2.2.1, Satz 2.22",
        explanation: "Das Wohlordnungsprinzip ist äquivalent zur vollständigen Induktion. Es verhindert, dass man in $\\mathbb{N}$ unendlich lange 'nach unten' absteigen kann.",
        example: "Die Menge der geraden Zahlen $\\{2, 4, 6, ...\\}$ hat das Minimum 2.",
        counterexample: "Für die reellen Zahlen $\\mathbb{R}$ gilt dies nicht: Die offene Menge $(0, 1)$ hat kein Minimum."
    },
    {
        id: "k2_lem_25_ganze_rationale_zahlen",
        title: "Lemma 2.25 & 2.27: Ganze und Rationale Zahlen",
        category: "2.2 Die natürlichen Zahlen",
        type: "lemma",
        front: "Wie sind die ganzen Zahlen $\\mathbb{Z}$ und die rationalen Zahlen $\\mathbb{Q}$ als Teilmengen von $\\mathbb{R}$ definiert?",
        back: "$\\mathbb{Z} = \\mathbb{N}_0 \\cup \\{-n \\mid n \\in \\mathbb{N}\\}$<br><br>$\\mathbb{Q} = \\left\\{ \\frac{m}{n} \\mid m \\in \\mathbb{Z}, n \\in \\mathbb{N} \\right\\}$",
        meta: "Skript: Abschnitt 2.2.2 & 2.2.3",
        explanation: "Die ganzen Zahlen erweitern $\\mathbb{N}$ um die additiven Inversen. Die rationalen Zahlen erweitern $\\mathbb{Z}$ um die multiplikativen Inversen.",
        example: "$-5 \\in \\mathbb{Z}$ und $\\frac{-5}{3} \\in \\mathbb{Q}$.",
        counterexample: "$\\sqrt{2} \\notin \\mathbb{Q}$. $\\mathbb{Z}$ ist kein Körper, da Divisionen wie $1/2$ aus $\\mathbb{Z}$ hinausführen."
    },
    {
        id: "k2_lem_30_irrationalitaet_wurzel_2",
        title: "Lemma 2.30: Irrationalität von Wurzel 2",
        category: "2.2 Die natürlichen Zahlen",
        type: "lemma",
        front: "Wie lautet die Aussage von Lemma 2.30 bezüglich $\\sqrt{2}$ und was folgert das Skript daraus für die Menge $\\mathbb{Q}$?",
        back: "Die reelle Zahl $\\sqrt{2}$ ist irrational ($\\sqrt{2} \\notin \\mathbb{Q}$). <br>Insbesondere erfüllen die rationalen Zahlen das Vollständigkeitsaxiom nicht.",
        meta: "Skript: Abschnitt 2.2.3, S. 88",
        explanation: "Weil $\\mathbb{Q}$ alle Körper- und Ordnungsaxiome (1-15) erfüllt, aber die Gleichung $x^2 = 2$ in $\\mathbb{Q}$ unlösbar ist, zeigt dies, dass das Vollständigkeitsaxiom (16) unabhängig von Axiom 1-15 ist.",
        example: "Man kann $\\sqrt{2}$ beliebig nahe durch Brüche annähern, trifft es aber in $\\mathbb{Q}$ nie exakt.",
        counterexample: "$\\mathbb{R}$ besitzt keine solche Lücke."
    },
    {
        id: "k2_satz_31_division_rest",
        title: "Satz 2.31: Division mit Rest",
        category: "2.2 Die natürlichen Zahlen",
        type: "satz",
        front: "Formuliere den Satz zur Division mit Rest für natürliche Zahlen.",
        back: "Für alle $n \\in \\mathbb{N}_0$ und $d \\in \\mathbb{N}$ gibt es ein $q \\in \\mathbb{N}_0$ und ein $r \\in \\mathbb{N}_0$ mit $r < d$, welches wir den Rest nennen, so dass $n = qd + r$.",
        meta: "Skript: Abschnitt 2.2.4, S. 89",
        explanation: "Wichtig ist die strikte Bedingung, dass der Rest kleiner als der Divisor sein muss ($r < d$).",
        example: "$n=23, d=5 \\implies 23 = 4 \\cdot 5 + 3$ (Rest $r=3 < 5$).",
        counterexample: "$23 = 3 \\cdot 5 + 8$ ist mathematisch gleichwertig, aber hier ist $8 > 5$ (keine Division mit Rest)."
    },

    // --- 2.3 DIE KOMPLEXEN ZAHLEN ---
    {
        id: "k2_prop_33_komplexen_zahlen",
        title: "Proposition 2.33: Die komplexen Zahlen",
        category: "2.3 Die komplexen Zahlen",
        type: "proposition",
        front: "Wie ist die Menge der komplexen Zahlen $\\mathbb{C}$ sowie ihre Addition und Multiplikation definiert?",
        back: "$\\mathbb{C} = \\mathbb{R} \\times \\mathbb{R}$.<br>Addition: $(x_1, y_1) + (x_2, y_2) = (x_1+x_2, y_1+y_2)$<br>Multiplikation: $(x_1, y_1) \\cdot (x_2, y_2) = (x_1 x_2 - y_1 y_2, x_1 y_2 + x_2 y_1)$",
        meta: "Skript: Abschnitt 2.3, Proposition 2.33",
        explanation: "Mit der Definition $i := (0, 1)$ gilt $i^2 = -1$. Somit lässt sich jedes Element als $x + iy$ schreiben. $\\mathbb{C}$ bildet einen Körper, der algebraisch abgeschlossen ist.",
        example: "$(0, 1) \\cdot (0, 1) = (0\\cdot 0 - 1\\cdot 1, 0\\cdot 1 + 1\\cdot 0) = (-1, 0) = -1$.",
        counterexample: "$\\mathbb{C}$ ist KEIN angeordneter Körper! Man kann auf $\\mathbb{C}$ keine Ordnung $\\leq$ definieren, die mit den Axiomen (10)-(15) verträglich ist."
    },
    {
        id: "k2_def_36_lemma_2_37",
        title: "Definition 2.36 & Lemma 2.37: Komplexe Konjugation",
        category: "2.3 Die komplexen Zahlen",
        type: "definition",
        front: "Wie ist die <b>komplexe Konjugation</b> definiert und welche Eigenschaften hat sie (Lemma 2.37)?",
        back: "<b>Definition 2.36:</b> $\\overline{\\cdot}: \\mathbb{C} \\to \\mathbb{C}, \\; z = x + yi \\mapsto \\bar{z} = x - yi$.<br><br><b>Lemma 2.37:</b><br>(i) Für alle $z \\in \\mathbb{C}$ ist $z\\bar{z} \\in \\mathbb{R}$ und $z\\bar{z} \\geq 0$; es gilt $z\\bar{z} = 0 \\iff z = 0$.<br>(ii) $\\overline{z + w} = \\bar{z} + \\bar{w}$<br>(iii) $\\overline{z \\cdot w} = \\bar{z} \\cdot \\bar{w}$<br><br>Weiter gilt (Übung 2.40): $\\operatorname{Re}(z) = \\frac{z + \\bar{z}}{2}$, $\\operatorname{Im}(z) = \\frac{z - \\bar{z}}{2i}$ und $\\mathbb{R} = \\{z \\in \\mathbb{C} \\mid \\bar{z} = z\\}$.",
        meta: "Skript: Definition 2.36, Lemma 2.37, Übung 2.40, S. 95-96",
        explanation: "Geometrisch ist die Konjugation die Spiegelung an der reellen Achse. Sie ist der Schlüssel zur multiplikativen Inversen: $(x+yi)^{-1} = \\frac{\\bar{z}}{z\\bar{z}} = \\frac{x - yi}{x^2+y^2}$ für $z \\neq 0$, und zum Absolutbetrag: $|z| = \\sqrt{z\\bar{z}}$ (Definition 2.51).",
        example: "$\\overline{3 + 4i} = 3 - 4i$ und $(3+4i)(3-4i) = 9 + 16 = 25 \\geq 0$. Inverse: $(3+4i)^{-1} = \\frac{3-4i}{25}$.",
        counterexample: "Die Konjugation ist mit $+$ und $\\cdot$ verträglich, aber sie ist NICHT die Identität: $\\bar{z} = z$ gilt nur für reelle $z$. Für $z = i$ ist $\\bar{z} = -i \\neq i$."
    },
    {
        id: "k2_def_42_unbeschraenkte_intervalle_umgebungen",
        title: "Definition 2.42 & 2.43: Unbeschränkte Intervalle und Umgebungen",
        category: "2.4 Intervalle und der Absolutbetrag",
        type: "definition",
        front: "Wie sind <b>unbeschränkte Intervalle</b> und <b>Umgebungen</b> eines Punktes $x \\in \\mathbb{R}$ definiert?",
        back: "<b>Definition 2.42:</b> Für $a, b \\in \\mathbb{R}$:<br>$[a, \\infty) = \\mathbb{R}_{\\geq a} = \\{x \\mid a \\leq x\\}$, $\\; (-\\infty, b] = \\mathbb{R}_{\\leq b}$ (abgeschlossen),<br>$(a, \\infty) = \\mathbb{R}_{> a}$, $\\; (-\\infty, b)$, $\\; (-\\infty, \\infty) = \\mathbb{R}$ (offen).<br><br><b>Definition 2.43:</b> Eine Menge, die ein offenes Intervall um $x$ enthält, heisst <b>Umgebung</b> von $x$. Für $\\delta > 0$ ist die <b>$\\delta$-Umgebung</b> von $x$ das Intervall $(x - \\delta, x + \\delta) = \\{y \\in \\mathbb{R} \\mid |x - y| < \\delta\\}$.",
        meta: "Skript: Definition 2.42 & 2.43, S. 97-98",
        explanation: "Die Symbole $\\pm\\infty$ sind hier reine Notation (keine reellen Zahlen). Umgebungen sind der Grundbaustein für Konvergenz und Stetigkeit: '$y$ nahe bei $x$' heisst '$y$ in einer kleinen $\\delta$-Umgebung von $x$'. Umgebungen werden auch Nachbarschaften genannt.",
        example: "$(1{,}9,\\; 2{,}1)$ ist die $0{,}1$-Umgebung von $2$. Auch $[0, 5]$ ist eine Umgebung von $2$ (sie enthält z.B. $(1, 3)$) - Umgebungen müssen nicht offen sein!",
        counterexample: "$[2, 3]$ ist KEINE Umgebung von $2$: Kein offenes Intervall um $2$ passt hinein, da Punkte links von $2$ fehlen."
    },

    // --- 2.4 INTERVALLE UND DER ABSOLUTBETRAG ---
    {
        id: "k2_def_41_intervalle",
        title: "Definition 2.41: Intervalle",
        category: "2.4 Intervalle und der Absolutbetrag",
        type: "definition",
        front: "Wie ist ein Intervall $I \\subseteq \\mathbb{R}$ formal konvex definiert (Eigenschaft) und welche 4 Standardarten (abgeschlossen, offen, halboffen) gibt es?",
        back: "Definition: Eine Teilmenge $I \\subseteq \\mathbb{R}$ heißt Intervall, falls für alle $x < y \\in I$ und alle $x < z < y$ auch $z \\in I$ gilt.<br><br>Arten:<br>1. Abgeschlossen: $[a, b] = \\{x \\mid a \\leq x \\leq b\\}$<br>2. Offen: $(a, b) = \\{x \\mid a < x < b\\}$<br>3/4. Halboffen: $[a, b)$ und $(a, b]$",
        meta: "Skript: Abschnitt 2.4.1, Definition 2.41",
        explanation: "Ein Intervall darf keine 'Löcher' haben.<br><br><svg height='40' width='300'><line x1='10' y1='20' x2='290' y2='20' style='stroke:black;stroke-width:2'/><line x1='80' y1='10' x2='80' y2='30' style='stroke:#1f407a;stroke-width:3'/><line x1='220' y1='10' x2='220' y2='30' style='stroke:#1f407a;stroke-width:3'/><rect x='80' y='15' width='140' height='10' fill='#1f407a'/><text x='75' y='10'>a</text><text x='215' y='10'>b</text><text x='110' y='40'>[a, b] (abgeschlossen)</text></svg>",
        example: "Das offene Intervall $(0, 1)$ enthält nicht seine Randpunkte 0 und 1.",
        counterexample: "Die Menge $[0, 1] \\cup [2, 3]$ ist kein Intervall, da $1.5$ fehlt."
    },
    {
        id: "k2_def_45_absolutbetrag",
        title: "Definition 2.45: Absolutbetrag in R",
        category: "2.4 Intervalle und der Absolutbetrag",
        type: "definition",
        front: "Wie ist der Absolutbetrag $|x|$ für eine reelle Zahl $x \\in \\mathbb{R}$ definiert?",
        back: "$|x| := \\begin{cases} x, & \\text{falls } x \\geq 0 \\\\ -x, & \\text{falls } x < 0 \\end{cases}$",
        meta: "Skript: Abschnitt 2.4.2, Definition 2.45, S. 99",
        explanation: "Der Absolutbetrag macht jede Zahl nicht-negativ. Er entspricht dem geometrischen Abstand der Zahl $x$ vom Nullpunkt auf der Zahlengeraden.",
        example: "$|5| = 5$, $|-5| = -(-5) = 5$.",
        counterexample: "$-|x|$ ist immer $\\le 0$."
    },
    {
        id: "k2_lem_45_folgerungen_a_h",
        title: "Folgerungen (a)-(h) aus Definition 2.45: Eigenschaften des Betrags",
        category: "2.4 Intervalle und der Absolutbetrag",
        type: "lemma",
        front: "Nenne die grundlegenden Folgerungen (a)-(h) aus der Definition des Absolutbetrags auf $\\mathbb{R}$.",
        back: "(a) <b>Definitheit:</b> $|x| \\geq 0$ und $|x| = 0 \\iff x = 0$<br>(b) $|-x| = |x|$<br>(c) <b>Multiplikativität:</b> $|xy| = |x||y|$<br>(d) $\\left|\\frac{1}{x}\\right| = \\frac{1}{|x|}$ für $x \\neq 0$<br>(e) $|x| \\leq y \\iff -y \\leq x \\leq y$ (analog (f) mit $<$)<br>(g) <b>Dreiecksungleichung:</b> $|x+y| \\leq |x| + |y|$<br>(h) <b>Umgekehrte Dreiecksungleichung:</b> $|x| - |y| \\leq |x-y|$",
        meta: "Skript: Abschnitt 2.4.2, Folgerungen zu Definition 2.45, S. 99",
        explanation: "Insbesondere Eigenschaft (iv) ist der Schlüssel zum Auflösen von Betragsungleichungen, wie sie oft bei Grenzwertbeweisen vorkommen.",
        example: "$|x - 2| < 0.1 \\iff -0.1 < x - 2 < 0.1 \\iff 1.9 < x < 2.1$.",
        counterexample: "Die Addition ist NICHT absolut kompatibel: $|x + y| \\neq |x| + |y|$ im Allgemeinen."
    }
];

// --- DATA_KAPITEL2.JS (TEIL 2) ---
// Einfach ganz unten an die Datei anhängen!

// Hänge die neuen Karten an das bestehende Array an
window.FLASHCARDS_KAPITEL_2.push(
    {
        id: "k2_dreiecksungleichung_folgerung_g",
        title: "Dreiecksungleichung auf R und C (Folgerung (g) / Eigenschaft (iii))",
        category: "2.4 Intervalle und der Absolutbetrag",
        type: "lemma",
        front: "Wie lautet die klassische Dreiecksungleichung für reelle bzw. komplexe Zahlen, und wo steht sie im Skript?",
        back: "Für alle $x, y \\in \\mathbb{R}$ (Folgerung (g) zu Definition 2.45) bzw. $z, w \\in \\mathbb{C}$ (Eigenschaft (iii) des Absolutbetrags auf $\\mathbb{C}$) gilt:<br>$$|x + y| \\leq |x| + |y|$$<br>Auf $\\mathbb{C}$ beruht der Beweis auf der <b>Cauchy-Schwarz-Ungleichung</b> $x_1x_2 + y_1y_2 \\leq |z||w|$.",
        meta: "Skript: Abschnitt 2.4.2 (Folgerung (g)) & 2.4.3 (Eigenschaft (iii)), S. 99/101",
        explanation: "Geometrisch bedeutet das: Der direkte Weg (die Summe $x+y$) ist niemals länger als der Umweg über die beiden Einzelstrecken.<br><br><svg height='120' width='250'><polygon points='50,100 200,100 150,30' style='fill:rgba(31,64,122,0.1);stroke:#1f407a;stroke-width:2' /><text x='110' y='115'>|x + y|</text><text x='70' y='60'>|x|</text><text x='185' y='60'>|y|</text></svg>",
        example: "Für $x = 3$ und $y = -5$: $|3 + (-5)| = 2$. Einzeln: $|3| + |-5| = 8$. Es gilt $2 \\leq 8$.",
        counterexample: "Gleichheit $|x+y| = |x| + |y|$ gilt in $\\mathbb{R}$ nur, wenn $x$ und $y$ dasselbe Vorzeichen haben."
    },
    {
        id: "k2_umgekehrte_dreiecksungleichung_folgerung",
        title: "Umgekehrte Dreiecksungleichung (Folgerung (h) / Eigenschaft (iv))",
        category: "2.4 Intervalle und der Absolutbetrag",
        type: "lemma",
        front: "Wie lautet die umgekehrte Dreiecksungleichung für reelle bzw. komplexe Zahlen?",
        back: "Für alle $x, y \\in \\mathbb{R}$ (Folgerung (h)) bzw. $z, w \\in \\mathbb{C}$ (Eigenschaft (iv)) gilt:<br>$$|x| - |y| \\leq |x - y|$$<br>Durch Vertauschen von $x, y$ und Folgerung (e) erhält man die kombinierte Form $\\big||x| - |y|\\big| \\leq |x - y|$.",
        meta: "Skript: Abschnitt 2.4.2 (Folgerung (h)) & 2.4.3 (Eigenschaft (iv)), S. 99/101",
        explanation: "Diese Form wird extrem oft verwendet, um Differenzen von Beträgen nach oben abzuschätzen. Sie folgt direkt aus der normalen Dreiecksungleichung (indem man $x = (x-y)+y$ schreibt).",
        example: "Für $x=3, y=5$: $||3| - |5|| = |-2| = 2$. Und $|3 - 5| = 2$. Es gilt $2 \\leq 2$.",
        counterexample: "Der Ausdruck $|x| - |y|$ kann negativ sein, weshalb der äußere Betrag auf der linken Seite essenziell ist!"
    },
    {
        id: "k2_def_48_uebung_2_49",
        title: "Definition 2.48 & Übung 2.49: Offene und abgeschlossene Mengen in R",
        category: "2.4 Intervalle und der Absolutbetrag",
        type: "definition",
        front: "Wann heisst eine Teilmenge $A \\subseteq \\mathbb{R}$ (1) offen und (2) abgeschlossen?",
        back: "1. **Offen**: Für jedes $x \\in A$ existiert ein $\\epsilon > 0$, sodass die $\\epsilon$-Umgebung $(x - \\epsilon, x + \\epsilon) \\subseteq A$ gilt.<br><br>2. **Abgeschlossen**: Eine Menge heisst abgeschlossen, wenn ihr Komplement $\\mathbb{R} \\setminus A$ offen ist.<br><br><i>Übung 2.49:</i> $U$ ist genau dann offen, wenn jeder Punkt $x \\in U$ in einem offenen Intervall $I$ mit $I \\subseteq U$ liegt.",
        meta: "Skript: Abschnitt 2.4.2, Definition 2.48 & Übung 2.49, S. 100",
        explanation: "Offene Mengen enthalten ihren 'Rand' nicht; um jeden Punkt lässt sich noch ein winziges Intervall legen, das komplett in der Menge liegt.",
        example: "Das offene Intervall $(0, 1)$ ist eine offene Menge. Das abgeschlossene Intervall $[0, 1]$ ist abgeschlossen (denn sein Komplement $(-\\infty, 0) \\cup (1, \\infty)$ ist offen).",
        counterexample: "Halboffene Intervalle wie $[0, 1)$ sind WEDER offen NOCH abgeschlossen!"
    },
    {
        id: "k2_def_51_absolutbetrag",
        title: "Definition 2.51: Absolutbetrag auf C",
        category: "2.4 Intervalle und der Absolutbetrag",
        type: "definition",
        front: "Wie berechnet sich der Absolutbetrag $|z|$ für eine komplexe Zahl $z = x + iy \\in \\mathbb{C}$?",
        back: "$$|z| := \\sqrt{x^2 + y^2}$$<br>(Mit dem komplex konjugierten $\\bar{z} = x - iy$ gilt auch $|z|^2 = z \\cdot \\bar{z}$)",
        meta: "Skript: Abschnitt 2.4.3",
        explanation: "Der Absolutbetrag entspricht dem euklidischen Abstand der Zahl $z$ vom Ursprung $(0,0)$ in der komplexen Zahlenebene (Satz des Pythagoras).",
        example: "Für $z = 3 + 4i$ ist $|z| = \\sqrt{9 + 16} = \\sqrt{25} = 5$.",
        counterexample: "Vorsicht: Es gilt NICHT $|x + iy| = |x| + |y|$! (Das wäre $3+4=7$)."
    },
    {
        id: "k2_def_52_offene_baelle",
        title: "Definition 2.52: Offene Bälle",
        category: "2.4 Intervalle und der Absolutbetrag",
        type: "definition",
        front: "Wie ist der offene Ball $B_r(z_0)$ um einen Punkt $z_0 \\in \\mathbb{C}$ mit Radius $r > 0$ definiert?",
        back: "$$B_r(z_0) := \\{z \\in \\mathbb{C} \\mid |z - z_0| < r\\}$$",
        meta: "Skript: Abschnitt 2.4.3",
        explanation: "In $\\mathbb{C}$ ist dies das Innere eines Kreises (ohne den Kreisrand). In $\\mathbb{R}$ entspricht der offene Ball exakt dem offenen Intervall $(z_0 - r, z_0 + r)$.<br><br><svg height='120' width='120'><circle cx='60' cy='60' r='50' style='fill:rgba(31,64,122,0.2);stroke:#1f407a;stroke-width:2;stroke-dasharray:5,5' /><circle cx='60' cy='60' r='3' fill='black' /><line x1='60' y1='60' x2='110' y2='60' style='stroke:black;stroke-width:1' /><text x='80' y='55'>r</text><text x='40' y='75'>z₀</text></svg>",
        example: "$B_1(0)$ in $\\mathbb{C}$ ist die Einheitskreisscheibe (ohne Rand).",
        counterexample: "Die Gleichung $|z - z_0| \\leq r$ würde auch den Rand einschließen (abgeschlossener Ball)."
    },
    {
        id: "k2_def_54_offene_abgeschlossene_mengen",
        title: "Definition 2.54: Offene/Abgeschlossene Mengen in C",
        category: "2.4 Intervalle und der Absolutbetrag",
        type: "definition",
        front: "Wann heisst eine Teilmenge $U \\subseteq \\mathbb{C}$ offen und wann abgeschlossen?",
        back: "**Offen**: Für jedes $z \\in U$ existiert ein Radius $r > 0$, sodass $B_r(z) \\subseteq U$.<br><br>**Abgeschlossen**: Wenn das Komplement $\\mathbb{C} \\setminus U$ offen ist.",
        meta: "Skript: Abschnitt 2.4.3",
        explanation: "Die Definition ist exakt analog zu $\\mathbb{R}$, nur dass wir hier offene Bälle $B_r(z)$ (Kreise) statt offener Intervalle $(x-\\epsilon, x+\\epsilon)$ verwenden.",
        example: "Jeder offene Ball $B_r(z)$ ist selbst eine offene Menge in $\\mathbb{C}$.",
        counterexample: "Die Menge $\\{z \\in \\mathbb{C} \\mid |z| \\leq 1\\}$ ist nicht offen, da um Punkte auf dem Rand ($|z|=1$) kein Ball gezeichnet werden kann, der komplett in der Menge liegt."
    },
    
    // --- 2.5 MAXIMUM, MINIMUM, SUPREMUM, INFIMUM ---
    {
        id: "k2_supremum_infimum_definition",
        title: "Abschnitt 2.5: Supremum und Infimum (Definition)",
        category: "2.5 Maximum und Supremum",
        type: "definition",
        front: "Was ist das Supremum ($\\sup A$) und das Infimum ($\\inf A$) einer Menge $A \\subseteq \\mathbb{R}$?",
        back: "**Supremum**: Die *kleinste obere Schranke* der Menge $A$.<br>**Infimum**: Die *größte untere Schranke* der Menge $A$.",
        meta: "Skript: Abschnitt 2.5.2",
        explanation: "Während ein Maximum/Minimum zwingend Teil der Menge sein muss, können Supremum und Infimum auch außerhalb liegen (als 'Begrenzungen' des Intervalls).",
        example: "Für das offene Intervall $A = (0, 1)$ ist $\\sup(A) = 1$ und $\\inf(A) = 0$. Ein Maximum oder Minimum existiert hier aber nicht!",
        counterexample: "Die Zahl $2$ ist zwar eine obere Schranke von $(0,1)$, aber nicht die *kleinste* obere Schranke, also kein Supremum."
    },
    {
        id: "k2_uneigentliche_suprema_infima",
        title: "Abschnitt 2.5.3: Uneigentliche Suprema und Infima",
        category: "2.5 Maximum und Supremum",
        type: "definition",
        front: "Wie werden Supremum und Infimum für unbeschränkte oder leere Mengen in $\\mathbb{R}$ konventionell definiert?",
        back: "- Ist $A$ nach oben unbeschränkt: $\\sup(A) = \\infty$<br>- Ist $A$ nach unten unbeschränkt: $\\inf(A) = -\\infty$<br>- Für die leere Menge gilt paradoxerweise: $\\sup(\\emptyset) = -\\infty$ und $\\inf(\\emptyset) = \\infty$",
        meta: "Skript: Abschnitt 2.5.3",
        explanation: "Dass $\\sup(\\emptyset) = -\\infty$ ist, liegt daran, dass *jede* reelle Zahl eine obere Schranke der leeren Menge ist. Die *kleinste* aller denkbaren Schranken ist somit $-\\infty$.",
        example: "Für $A = \\mathbb{Z}$ gilt $\\sup(\\mathbb{Z}) = \\infty$ und $\\inf(\\mathbb{Z}) = -\\infty$.",
        counterexample: "Mit $\\infty$ darf in Gleichungen nicht wie mit normalen Zahlen gerechnet werden."
    },
    {
        id: "k2_prop_62_supremum_unter_streckung",
        title: "Proposition 2.62: Supremum unter Streckung",
        category: "2.5 Maximum und Supremum",
        type: "proposition",
        front: "Sei $A \\subseteq \\mathbb{R}$ eine nicht-leere, von oben beschränkte Teilmenge und $c > 0$. Was gilt für das Supremum der gestreckten Menge $cA$?",
        back: "Die Menge $cA = \\{ca \\mid a \\in A\\}$ ist ebenfalls von oben beschränkt und es gilt:<br>$$\\sup(cA) = c \\cdot \\sup(A)$$",
        meta: "Skript: Abschnitt 2.5",
        explanation: "Das Supremum verhält sich linear gegenüber der Multiplikation mit strikt positiven Konstanten.",
        example: "Für das Intervall $A = (0, 2)$ ist $\\sup(A) = 2$. Multipliziert man die Menge mit $c = 3$, erhält man $3A = (0, 6)$ und $\\sup(3A) = 3 \\cdot 2 = 6$.",
        counterexample: "Für $c < 0$ (z.B. $c = -1$) gilt dies nicht: $\\sup(-A) = -\\inf(A)$."
    },
    {
        id: "k2_prop_63_supremum_unter_summen",
        title: "Proposition 2.63: Supremum unter Summen",
        category: "2.5 Maximum und Supremum",
        type: "proposition",
        front: "Seien $A, B \\subseteq \\mathbb{R}$ zwei nicht-leere, von oben beschränkte Teilmengen. Was gilt für das Supremum der Summenmenge $A + B$?",
        back: "Die Summenmenge $A + B = \\{a + b \\mid a \\in A, b \\in B\\}$ ist von oben beschränkt und es gilt:<br>$$\\sup(A + B) = \\sup(A) + \\sup(B)$$",
        meta: "Skript: Abschnitt 2.5",
        explanation: "Das Supremum ist absolut kompatibel mit der elementweisen Addition von Mengen.",
        example: "Sei $A = (0, 1)$ mit $\\sup(A) = 1$ und $B = [1, 2]$ mit $\\sup(B) = 2$. Dann ist $A + B = (1, 3)$ und $\\sup(A+B) = 1 + 2 = 3$.",
        counterexample: "Dies gilt nur für Summen. Für die Differenzmenge gilt $\\sup(A - B) = \\sup(A) - \\inf(B)$."
    },

    // --- 2.6 ERSTE KONSEQUENZEN DER VOLLSTÄNDIGKEIT ---
    {
        id: "k2_satz_68_archimedisches_prinzip",
        title: "Satz 2.68: Archimedisches Prinzip",
        category: "2.6 Erste Konsequenzen der Vollständigkeit",
        type: "satz",
        front: "Nenne die drei Aussagen des Archimedischen Prinzips (Satz 2.68).",
        back: "(i) Jede nicht-leere, von oben beschränkte Teilmenge von $\\mathbb{Z}$ hat ein <b>Maximum</b>.<br>(ii) Für jedes $x \\in \\mathbb{R}$ existiert <b>genau ein</b> $n \\in \\mathbb{Z}$ mit $n \\leq x < n + 1$.<br>(iii) Für jedes $\\epsilon > 0$ existiert ein $n \\in \\mathbb{N}$ mit $\\frac{1}{n} < \\epsilon$.",
        meta: "Skript: Abschnitt 2.6.1, Satz 2.68, S. 110",
        explanation: "Geometrisch: Es gibt keine 'unendlich grossen' reellen Zahlen und keine 'unendlich kleinen' positiven Zahlen. Insbesondere folgt aus (ii): Für jedes $x$ gibt es ein $n \\in \\mathbb{N}$ mit $x < n$. Teil (ii) ist auch die Grundlage für die Abrundungsfunktion $\\lfloor x \\rfloor$.",
        example: "Zu $\\epsilon = 0{,}003$ liefert (iii) z.B. $n = 334$, denn $\\frac{1}{334} < 0{,}003$. Dies ist der Standardschritt in fast jedem Konvergenzbeweis ($\\frac{1}{n} \\to 0$).",
        counterexample: "In 'Nichtstandard-Modellen' gibt es unendlich große Zahlen, für die das Prinzip versagt. In $\\mathbb{R}$ ist dies ausgeschlossen."
    },
    {
        id: "k2_satz_70_dichtheit",
        title: "Korollar 2.70: Dichtheit von Q in R",
        category: "2.6 Erste Konsequenzen der Vollständigkeit",
        type: "satz",
        front: "Was bedeutet es, dass die rationalen Zahlen $\\mathbb{Q}$ dicht in $\\mathbb{R}$ liegen?",
        back: "Zwischen je zwei verschiedenen reellen Zahlen $x < y$ liegt mindestens eine rationale Zahl $q \\in \\mathbb{Q}$ (sodass $x < q < y$).",
        meta: "Skript: Abschnitt 2.6.1",
        explanation: "Man kann jede reelle Zahl beliebig genau durch Brüche (rationale Zahlen) approximieren. (Das Gleiche gilt umgekehrt auch für irrationale Zahlen!).",
        example: "Zwischen $x = \\sqrt{2}$ und $y = \\sqrt{2} + 0.001$ findet sich z.B. der Bruch $q = 1.4145 = \\frac{2829}{2000}$.",
        counterexample: "Die ganzen Zahlen $\\mathbb{Z}$ sind nicht dicht in $\\mathbb{R}$. Zwischen $1.1$ und $1.9$ liegt keine ganze Zahl."
    },
    {
        id: "k2_def_73_haeufungspunkt_menge",
        title: "Definition 2.73: Häufungspunkt einer Menge",
        category: "2.6 Erste Konsequenzen der Vollständigkeit",
        type: "definition",
        front: "Wann heißt ein Punkt $x \\in \\mathbb{R}$ Häufungspunkt einer Teilmenge $A \\subseteq \\mathbb{R}$?",
        back: "Ein Punkt $x \\in \\mathbb{R}$ ist ein Häufungspunkt von $A$, falls für *jedes* $\\epsilon > 0$ die Menge $(x - \\epsilon, x + \\epsilon) \\cap A$ unendlich viele Punkte enthält.",
        meta: "Skript: Abschnitt 2.6.2",
        explanation: "Man kann sich dem Häufungspunkt durch Elemente aus der Menge $A$ beliebig dicht annähern. Der Punkt $x$ selbst muss nicht in $A$ liegen.",
        example: "Die Menge $A = \\{\\frac{1}{n} \\mid n \\in \\mathbb{N}\\}$ hat $0$ als einzigen Häufungspunkt.",
        counterexample: "Die Menge der ganzen Zahlen $\\mathbb{Z}$ hat keinen einzigen Häufungspunkt, da die Punkte zu isoliert sind (Abstand 1)."
    },
    {
        id: "k2_satz_81_ueberabzaehlbarkeit",
        title: "Korollar 2.81: Überabzählbarkeit von R",
        category: "2.6 Erste Konsequenzen der Vollständigkeit",
        type: "satz",
        front: "Was besagt Korollar 2.81 über die Mächtigkeit (Kardinalität) der reellen Zahlen $\\mathbb{R}$?",
        back: "Die Menge der reellen Zahlen $\\mathbb{R}$ (und ebenso das Intervall $[0,1]$) ist **überabzählbar**.",
        meta: "Skript: Abschnitt 2.6.4",
        explanation: "Man kann die reellen Zahlen niemals in einer durchnummerierten Liste $(x_1, x_2, ...)$ aufschreiben, ohne unendlich viele auszulassen. Der Beweis im Skript ist ein Spiel zwischen Alice und Bob: Zu jeder von Bob aufgelisteten Zahl $x_n$ verkleinert Alice ihr abgeschlossenes Intervall $I_n$ so, dass $x_n \\notin I_n$; das Intervallschachtelungsprinzip (Satz 2.77) liefert dann einen Punkt, den Bob nie auflistet.",
        example: "Allein das winzige Intervall $[0, 1]$ enthält überabzählbar viele Zahlen (genauso viele wie ganz $\\mathbb{R}$).",
        counterexample: "Die Mengen $\\mathbb{N}$, $\\mathbb{Z}$ und $\\mathbb{Q}$ sind alle abzählbar (sie lassen sich als Liste anordnen)."
    },
    {
        id: "k2_def_82_cantor_menge_eigenschaften",
        title: "Definition 2.82: Die Cantor-Menge (Eigenschaften)",
        category: "2.6 Erste Konsequenzen der Vollständigkeit",
        type: "definition",
        front: "Was ist die Cantor-Menge (Konstruktion und 3 wichtigste Eigenschaften)?",
        back: "Sie entsteht, indem man vom Intervall $[0,1]$ iterativ das offene mittlere Drittel entfernt.<br><br>**Eigenschaften:**<br>1. Sie ist überabzählbar.<br>2. Sie enthält keine Intervalle (leeres Inneres).<br>3. Sie hat die 'Gesamtlänge' (das Maß) 0.",
        meta: "Skript: Abschnitt 2.6.5",
        explanation: "Die Cantor-Menge ist ein Fraktal. Sie ist völlig 'durchlöchert', besitzt aber trotzdem genauso viele Punkte wie ganz $\\mathbb{R}$.",
        example: "Punkte wie $0, 1, \\frac{1}{3}, \\frac{2}{3}, \\frac{1}{9}$ sind in der Cantor-Menge enthalten (die Randpunkte der entfernten Drittel).",
        counterexample: "Die rationalen Zahlen in $[0,1]$ haben ebenfalls leeres Inneres und Maß 0, sind aber nur abzählbar."
    },
    {
        id: "k2_zusammenfassung_aequivalenz_vollstaendigkeit",
        title: "Zusammenfassung: Äquivalenz der Vollständigkeit",
        category: "2.7 Weitere Lernmaterialien",
        type: "satz",
        front: "Das Vollständigkeitsaxiom (Axiom 16) ist äquivalent zu welchen zwei Prinzipien?",
        back: "Unter Annahme der Körper- und Ordnungsaxiome ist Vollständigkeit äquivalent zu:<br>1. Der Existenz des **Supremums** für nach oben beschränkte, nicht-leere Mengen.<br>2. Dem **Intervallschachtelungsprinzip** (zusammen mit dem Archimedischen Prinzip).",
        meta: "Skript: Abschnitt 2.7",
        explanation: "Diese verschiedenen Blickwinkel beschreiben alle dasselbe Phänomen: Die Zahlengerade $\\mathbb{R}$ hat absolut keine Löcher.",
        example: "Wenn jede beschränkte Menge ein Supremum hat, können sich Intervalle nicht ins 'Nichts' zusammenziehen (es existiert immer ein Schnittpunkt).",
        counterexample: "In $\\mathbb{Q}$ gelten weder die Supremumseigenschaft noch das Intervallschachtelungsprinzip."
    }
);

// --- DATA_KAPITEL2.JS (ERWEITERUNGEN TEIL 1) ---

window.FLASHCARDS_KAPITEL_2.push(
    {
        id: "k2_def_56_maximum_minimum_eindeutigkeit",
        title: "Definition 2.56 & 2.57: Maximum und Minimum (Eindeutigkeit)",
        category: "2.5 Maximum und Supremum",
        type: "definition",
        front: "Was gilt bezüglich der eindeutigen Bestimmtheit für das Maximum und Minimum einer Menge (z.B. eines abgeschlossenen Intervalls in $\\mathbb{R}$)?",
        back: "Wenn eine Teilmenge $A \\subseteq \\mathbb{R}$ ein Maximum (oder Minimum) besitzt, dann ist dieses **eindeutig bestimmt**.",
        meta: "Skript: Abschnitt 2.5",
        explanation: "Es kann nicht zwei verschiedene Maxima in einer total geordneten Menge wie den reellen Zahlen geben. Wenn $m_1$ und $m_2$ beides Maxima sind, muss $m_1 \\leq m_2$ und $m_2 \\leq m_1$ gelten, woraus zwingend $m_1 = m_2$ folgt (Antisymmetrie).",
        example: "Das abgeschlossene Intervall $[0, 1]$ hat exakt ein Maximum (die $1$) und exakt ein Minimum (die $0$).",
        counterexample: "Offene Intervalle wie $(0, 1)$ besitzen *kein* Maximum und *kein* Minimum (wohl aber Supremum und Infimum)."
    },
    {
        id: "k2_def_58_schranken_beschraenktheit",
        title: "Definition 2.58: Schranken und Beschränktheit",
        category: "2.5 Maximum und Supremum",
        type: "definition",
        front: "Wann heißt eine Teilmenge $X \\subseteq \\mathbb{R}$ nach oben / unten beschränkt und wann einfach nur 'beschränkt'?",
        back: "- **Nach oben beschränkt**: Es gibt ein $s \\in \\mathbb{R}$, sodass $x \\leq s$ für alle $x \\in X$. ($s$ heißt obere Schranke).<br>- **Nach unten beschränkt**: Es gibt ein $s \\in \\mathbb{R}$, sodass $s \\leq x$ für alle $x \\in X$. ($s$ heißt untere Schranke).<br>- **Beschränkt**: Die Menge ist sowohl nach oben als auch nach unten beschränkt.",
        meta: "Skript: Abschnitt 2.5",
        explanation: "Geometrisch bedeutet Beschränktheit, dass die gesamte Menge in ein (möglicherweise sehr großes) endliches Intervall $[-M, M]$ passt.",
        example: "Die Menge $\\{1, 2, 3\\}$ ist beschränkt. $\\mathbb{N}$ ist nach unten beschränkt (Schranke 0 oder 1), aber nicht nach oben beschränkt.",
        counterexample: "$\\mathbb{Z}$ ist weder nach oben noch nach unten beschränkt."
    },
    {
        id: "k2_bew_59_existenz_supremums",
        title: "Beweis von Satz 2.59: Existenz des Supremums",
        category: "2.5 Maximum und Supremum",
        type: "beweis",
        front: "Wie beweist man die Existenz des Supremums (Satz 2.59) für eine nicht-leere, nach oben beschränkte Menge $X \\subseteq \\mathbb{R}$ unter Verwendung des Vollständigkeitsaxioms?",
        back: "1. Sei $Y$ die Menge *aller* oberen Schranken von $X$. Da $X$ nach oben beschränkt ist, ist $Y$ nicht leer.<br>2. Da für alle $x \\in X$ und $s \\in Y$ die Ungleichung $x \\leq s$ gilt, greift das **Vollständigkeitsaxiom**.<br>3. Es existiert also ein Element $c \\in \\mathbb{R}$ mit $x \\leq c \\leq s$ für alle $x \\in X$ und $s \\in Y$.<br>4. Da $x \\leq c$ für alle $x \\in X$, ist $c$ eine obere Schranke.<br>5. Da $c \\leq s$ für *jede* obere Schranke $s \\in Y$, ist $c$ die *kleinste* obere Schranke (also das Supremum).",
        meta: "Skript: Abschnitt 2.5.2, Beweis von Satz 2.59",
        explanation: "Das Vollständigkeitsaxiom (Axiom 16) liefert uns direkt das exakte Element $c$, welches als Trennelement zwischen der Menge $X$ und all ihren oberen Schranken liegt.",
        example: "Für $X = [0, 1)$ trennt $c=1$ die Menge $X$ von all ihren oberen Schranken $Y = [1, \\infty)$.",
        counterexample: "In $\\mathbb{Q}$ würde dieser Beweis scheitern, da das Vollständigkeitsaxiom für $\\mathbb{Q}$ nicht gilt."
    },
    {
        id: "k2_lem_65_supremum_unter_vereinigung",
        title: "Übung 2.65: Supremum unter Vereinigung",
        category: "2.5 Maximum und Supremum",
        type: "lemma",
        front: "Seien $X, Y \\subseteq \\mathbb{R}$ zwei nach oben beschränkte Teilmengen. Was gilt für das Supremum der Vereinigung $X \\cup Y$?",
        back: "$$\\sup(X \\cup Y) = \\max \\{\\sup(X), \\sup(Y)\\}$$",
        meta: "Skript: Abschnitt 2.5.3, Übung 2.65",
        explanation: "Wenn man zwei Mengen zusammenwirft, wird die höchste Grenze der kombinierten Menge einfach vom 'Gewinner' (dem größeren Supremum) der beiden Einzelmengen diktiert.",
        example: "Sei $X = [0, 2]$ (Supremum 2) und $Y = (1, 5)$ (Supremum 5). Dann ist $X \\cup Y = [0, 5)$ und das Supremum ist $\\max\\{2, 5\\} = 5$.",
        counterexample: "Achtung: Dies gilt für Vereinigungen. Für den Durchschnitt $X \\cap Y$ gilt i.A. *nicht* $\\min\\{\\sup X, \\sup Y\\}$ (z.B. wenn der Durchschnitt leer ist oder weit drunter liegt)."
    },
    {
        id: "k2_lem_67_supremum_vom_betrag",
        title: "Übung 2.67: Supremum vom Betrag einer Menge",
        category: "2.5 Maximum und Supremum",
        type: "lemma",
        front: "Sei $A \\subseteq \\mathbb{R}$ beschränkt. Was gilt für das Supremum der Bildmenge $|A|$ (also der Menge aller Beträge der Elemente von $A$)?",
        back: "$$\\sup(|A|) = \\max \\{\\sup(A), -\\inf(A)\\}$$",
        meta: "Skript: Abschnitt 2.5.3, Übung 2.67",
        explanation: "Da der Betrag negative Zahlen ins Positive klappt, muss man prüfen, was weiter vom Nullpunkt entfernt ist: das größte positive Element ($\\sup A$) oder das 'tiefste' negative Element ($\\inf A$), welches durch den Betrag zu $-\\inf(A)$ umgeklappt wird.",
        example: "Für $A = [-5, 2]$ ist $\\sup A = 2$ und $\\inf A = -5$. Die Betragsmenge $|A|$ ist $[0, 5]$. Das Supremum ist $\\max\\{2, -(-5)\\} = 5$.",
        counterexample: "Die Aussage nützt nichts bei Summenmengen wie $|A+B|$."
    },
    {
        id: "k2_def_68_ganzzahliger_anteil",
        title: "Satz 2.68: Definition Ganzzahliger Anteil",
        category: "2.6 Erste Konsequenzen der Vollständigkeit",
        type: "definition",
        front: "Wie ist der **ganzzahlige Anteil** (Abrundungsfunktion) $\\lfloor x \\rfloor$ für $x \\in \\mathbb{R}$ definiert und woraus folgt seine Existenz?",
        back: "Der ganzzahlige Anteil $\\lfloor x \\rfloor$ ist die **eindeutig bestimmte ganze Zahl** $n \\in \\mathbb{Z}$, für die gilt:<br>$$n \\leq x < n + 1$$<br>Die Existenz folgt direkt aus dem Archimedischen Prinzip.",
        meta: "Skript: Abschnitt 2.6.1, Satz 2.68",
        explanation: "Das Archimedische Prinzip garantiert, dass man auf dem Zahlenstrahl durch Zählen jede reelle Zahl 'einklemmen' kann.",
        example: "$\\lfloor 3.7 \\rfloor = 3$. Achtung bei negativen Zahlen: $\\lfloor -3.7 \\rfloor = -4$ (und nicht -3, denn $-4 \\leq -3.7 < -3$).",
        counterexample: "Runden (auf den nächsten Nachbarn) ist *nicht* dasselbe wie die Abrundungsfunktion."
    },
    {
        id: "k2_def_68_gebrochener_anteil",
        title: "Satz 2.68: Definition Gebrochener Anteil",
        category: "2.6 Erste Konsequenzen der Vollständigkeit",
        type: "definition",
        front: "Wie ist der **gebrochene Anteil** (Nachkommaanteil) $\\{x\\}$ einer reellen Zahl $x \\in \\mathbb{R}$ definiert?",
        back: "Der gebrochene Anteil ist definiert als:<br>$$\\{x\\} = x - \\lfloor x \\rfloor$$<br>Daraus folgt immer, dass $\\{x\\} \\in [0, 1)$.",
        meta: "Skript: Abschnitt 2.6.1, Satz 2.68",
        explanation: "Man zieht einfach den abgerundeten ganzen Teil von der ursprünglichen Zahl ab. Übrig bleibt immer ein positiver Rest kleiner als 1.",
        example: "Für $x = 3.7$ ist $\\{3.7\\} = 3.7 - 3 = 0.7$.<br>Für $x = -3.7$ ist $\\{-3.7\\} = -3.7 - (-4) = 0.3$.",
        counterexample: "Der gebrochene Anteil ist niemals negativ!"
    },
    {
        id: "k2_bew_70_dichtheit",
        title: "Korollar 2.70 (Beweis): Dichtheit von Q in R",
        category: "2.6 Erste Konsequenzen der Vollständigkeit",
        type: "beweis",
        front: "Wie beweist man die Dichtheit von $\\mathbb{Q}$ in $\\mathbb{R}$ (also, dass zwischen $x < y \\in \\mathbb{R}$ stets ein $q \\in \\mathbb{Q}$ liegt)?",
        back: "1. Da $y - x > 0$, existiert nach dem Archimedischen Prinzip ein $n \\in \\mathbb{N}$ mit $\\frac{1}{n} < y - x$, woraus $nx < ny - 1$ folgt.<br>2. Wir betrachten die Zahl $nx$ und ihren ganzzahligen Anteil $m := \\lfloor nx \\rfloor \\in \\mathbb{Z}$. Es gilt $m \\leq nx < m + 1$.<br>3. Aus $nx < m + 1$ und $m \\leq nx < ny - 1 \\implies m+1 < ny$ folgt insgesamt: $nx < m + 1 < ny$.<br>4. Division durch $n$ liefert $x < \\frac{m+1}{n} < y$. Setze $q = \\frac{m+1}{n} \\in \\mathbb{Q}$.",
        meta: "Skript: Abschnitt 2.6.1, Beweis von Korollar 2.70",
        explanation: "Die Kernidee: Man vergrößert den Abstand $y-x$ durch Streckung (mit $n$) so lange, bis er größer als 1 ist. In einem Abstand $>1$ muss zwangsläufig eine ganze Zahl liegen.",
        example: "Zwischen $x=0.333$ und $y=0.334$ wählt man $n=1000$. Es entsteht eine 'Lücke' von $1$ ($333 < 334$), aber $n=2000$ liefert $666 < 667 < 668$, also $q = 667/2000$.",
        counterexample: "Dieser Beweis benötigt zwingend das Archimedische Prinzip."
    },
    {
        id: "k2_lem_71_reelle_zahl_als",
        title: "Übung 2.71: Reelle Zahl als Supremum rationaler Zahlen",
        category: "2.6 Erste Konsequenzen der Vollständigkeit",
        type: "lemma",
        front: "Was ist das Supremum der Menge $A_x = \\{r \\in \\mathbb{Q} \\mid r < x\\}$ für eine beliebige reelle Zahl $x \\in \\mathbb{R}$?",
        back: "$$\\sup(\\{r \\in \\mathbb{Q} \\mid r < x\\}) = x$$",
        meta: "Skript: Abschnitt 2.6.1, Übung 2.71",
        explanation: "Diese Aussage folgt direkt aus der Dichtheit von $\\mathbb{Q}$ in $\\mathbb{R}$. Gäbe es eine obere Schranke, die kleiner als $x$ wäre (sagen wir $x - \\epsilon$), könnte man wegen der Dichtheit sofort wieder eine rationale Zahl zwischen $x-\\epsilon$ und $x$ finden.",
        example: "Für $x = \\sqrt{2}$ ist die Menge $\\{r \\in \\mathbb{Q} \\mid r < \\sqrt{2}\\}$ nach oben durch $\\sqrt{2}$ beschränkt. Obwohl $\\sqrt{2}$ selbst nicht rational ist, ist sie die *kleinste* obere Schranke dieser rationalen Menge.",
        counterexample: "In den rationalen Zahlen betrachtet, hat diese Menge kein Supremum (denn $\\sqrt{2} \\notin \\mathbb{Q}$)."
    }
);

// --- DATA_KAPITEL2.JS (ERWEITERUNGEN TEIL 2) ---

window.FLASHCARDS_KAPITEL_2.push(
    {
        id: "k2_lem_74_charakterisierung_haeufungspunkten",
        title: "Übung 2.74 & 2.76: Charakterisierung von Häufungspunkten",
        category: "2.6 Erste Konsequenzen der Vollständigkeit",
        type: "lemma",
        front: "Wie lässt sich ein Häufungspunkt $x_0$ einer Menge $A \\subseteq \\mathbb{R}$ alternativ charakterisieren (Übung 2.76)?",
        back: "Ein Punkt $x_0 \\in \\mathbb{R}$ ist genau dann ein Häufungspunkt von $A$, wenn für **jedes** $\\epsilon > 0$ der Durchschnitt der $\\epsilon$-Umgebung $(x_0 - \\epsilon, x_0 + \\epsilon)$ mit der Menge $A$ **unendlich viele Punkte** enthält.",
        meta: "Skript: Abschnitt 2.6.2, Übung 2.76",
        explanation: "Diese Formulierung verdeutlicht den Namen 'Häufungspunkt': Egal wie klein man das Intervall um $x_0$ wählt, es drängen sich immer unendlich viele Punkte der Menge $A$ darin. In der Analysis ist dies das Pendant zum Schubfachprinzip für unendliche Mengen.",
        example: "Für $A = \\{1/n \\mid n \\in \\mathbb{N}\\}$ enthält jedes noch so kleine Intervall $(-\\epsilon, \\epsilon)$ um $0$ unendlich viele Brüche. Also ist $0$ ein Häufungspunkt.",
        counterexample: "Die Menge $\\mathbb{Z}$ hat keinen Häufungspunkt, da man für $x_0 = 1$ z.B. $\\epsilon = 0.5$ wählen kann, und das Intervall $(0.5, 1.5)$ enthält nur *endlich viele* (nämlich genau einen) Punkt aus $\\mathbb{Z}$."
    },
    {
        id: "k2_satz_75_existenz_haeufungspunkten",
        title: "Satz 2.75: Existenz von Häufungspunkten",
        category: "2.6 Erste Konsequenzen der Vollständigkeit",
        type: "satz",
        front: "Was besagt Satz 2.75 über die Existenz von Häufungspunkten (das 'Schubfachprinzip der Analysis', auch Bolzano-Weierstrass für Mengen genannt)?",
        back: "Jede **beschränkte, unendliche** Teilmenge $A \\subseteq \\mathbb{R}$ besitzt **mindestens einen Häufungspunkt** in $\\mathbb{R}$.",
        meta: "Skript: Abschnitt 2.6.2, Satz 2.75",
        explanation: "Anschaulich: Wenn unendlich viele Punkte in ein endliches, begrenztes Intervall 'eingesperrt' werden, müssen sie sich zwingend an mindestens einer Stelle unendlich dicht zusammendrängen (näherungsweise Übereinstimmung).<br><br><svg height='100' width='300'><line x1='20' y1='50' x2='280' y2='50' style='stroke:black;stroke-width:2'/><line x1='50' y1='40' x2='50' y2='60' style='stroke:black;stroke-width:2'/><line x1='250' y1='40' x2='250' y2='60' style='stroke:black;stroke-width:2'/><text x='35' y='30'>-D</text><text x='240' y='30'>+D</text><circle cx='180' cy='50' r='5' fill='red'/><text x='175' y='35' fill='red'>x₀</text><circle cx='182' cy='50' r='2' fill='green'/><circle cx='178' cy='50' r='2' fill='green'/><circle cx='184' cy='50' r='2' fill='green'/><circle cx='176' cy='50' r='2' fill='green'/><circle cx='179' cy='48' r='2' fill='green'/><circle cx='181' cy='52' r='2' fill='green'/><circle cx='100' cy='50' r='2' fill='green'/><circle cx='130' cy='50' r='2' fill='green'/><circle cx='210' cy='50' r='2' fill='green'/><text x='70' y='80' fill='green'>Unendlich viele Punkte</text></svg>",
        example: "Die Menge $A = \\mathbb{Q} \\cap [0, 1]$ ist unendlich und durch $[0, 1]$ beschränkt. Tatsächlich ist *jeder* Punkt in $[0, 1]$ ein Häufungspunkt dieser Menge.",
        counterexample: "Die Menge $\\mathbb{N}$ ist unendlich, hat aber keinen Häufungspunkt, da sie *nicht beschränkt* ist."
    },
    {
        id: "k2_bew_75_bolzano_weierstrass",
        title: "Beweis von Satz 2.75 (Bolzano-Weierstrass)",
        category: "2.6 Erste Konsequenzen der Vollständigkeit",
        type: "beweis",
        front: "Wie beweist man den Satz von Bolzano-Weierstrass (Satz 2.75) mit Hilfe des Supremums?",
        back: "1. Da $A$ beschränkt ist, existiert ein Intervall $[-D, D]$, das $A$ enthält.<br>2. Betrachte die Menge $X = \\{x \\in \\mathbb{R} \\mid A \\cap (-\\infty, x] \\text{ ist endlich}\\}$.<br>3. $X$ ist nicht leer ($-D \\in X$) und nach oben beschränkt ($D$ ist obere Schranke). Also existiert $x_0 = \\sup(X)$.<br>4. Schiebt man $x_0$ um $\\epsilon$ nach links auf $x_0 - \\epsilon$, so liegen dort nur endlich viele Punkte von $A$.<br>5. Schiebt man $x_0$ um $\\epsilon$ nach rechts auf $x_0 + \\epsilon$, liegen dort (da $x_0$ das Supremum ist) *unendlich* viele Punkte.<br>6. Folglich müssen sich im Intervall $(x_0 - \\epsilon, x_0 + \\epsilon]$ unendlich viele Punkte von $A$ befinden. $x_0$ ist der gesuchte Häufungspunkt!",
        meta: "Skript: Abschnitt 2.6.2, Beweis von Satz 2.75",
        explanation: "Das Supremum spaltet die Zahlengerade exakt an dem Punkt $x_0$, an dem die Anzahl der angesammelten Punkte von 'endlich' auf 'unendlich' umschlägt.",
        example: "Dies ist eine der elegantesten Anwendungen des Vollständigkeitsaxioms in der Topologie von $\\mathbb{R}$.",
        counterexample: "Ohne das Supremums-Axiom (z.B. in $\\mathbb{Q}$) würde der Punkt $x_0$ eventuell in eine 'Lücke' fallen und in der Menge der Zahlen gar nicht existieren."
    },
    {
        id: "k2_satz_77_intervallschachtelungsprinzip",
        title: "Satz 2.77: Intervallschachtelungsprinzip",
        category: "2.6 Erste Konsequenzen der Vollständigkeit",
        type: "satz",
        front: "Wie lautet das Intervallschachtelungsprinzip (Satz 2.77) und woraus besteht der Durchschnitt exakt?",
        back: "Sei $I_1 \\supseteq I_2 \\supseteq I_3 \\supseteq \\dots$ eine Folge von **abgeschlossenen, beschränkten** Intervallen $I_n = [a_n, b_n]$.<br><br>Dann ist der Durchschnitt $\\bigcap_{n \\in \\mathbb{N}} I_n$ nicht-leer und es gilt exakt:<br>$$\\bigcap_{n \\in \\mathbb{N}} I_n = \\left[ \\sup \\{a_n \\mid n \\in \\mathbb{N}\\}, \\inf \\{b_n \\mid n \\in \\mathbb{N}\\} \\right]$$",
        meta: "Skript: Abschnitt 2.6.3, Satz 2.77",
        explanation: "Die linken Intervallgrenzen $a_n$ rücken nach rechts (sind von oben durch jedes $b_n$ beschränkt), bilden also ein Supremum. Die rechten Grenzen $b_n$ rücken nach links und bilden ein Infimum. Das Vollständigkeitsaxiom garantiert, dass $\\sup \\{a_n\\} \\leq \\inf \\{b_n\\}$ gilt.",
        example: "Für $I_n = [0, 1/n]$ rücken die linken Grenzen gar nicht ($a_n=0 \\implies \\sup=0$), die rechten Grenzen konvergieren gegen $0$ ($b_n=1/n \\implies \\inf=0$). Der Durchschnitt ist das Punktintervall $[0, 0] = \\{0\\}$.",
        counterexample: "Für offene Intervalle $(0, 1/n)$ gilt das nicht, der Durchschnitt ist leer. Für unbeschränkte Intervalle $[n, \\infty)$ ist der Durchschnitt ebenfalls leer."
    },
    {
        id: "k2_lem_82_korollar_2_83",
        title: "Übung 2.82 & Korollar 2.83: Die Cantor-Menge",
        category: "2.6 Erste Konsequenzen der Vollständigkeit",
        type: "lemma",
        front: "Wie verhält sich die Cantor-Menge $C$ bezüglich ihrer Konstruktion (Intervalle) und Überabzählbarkeit?",
        back: "1. Im Konstruktionsschritt $C_{n+1}$ besteht die Menge aus genau **doppelt so vielen disjunkten, abgeschlossenen Intervallen** wie $C_n$.<br>2. Die Länge jedes dieser Intervalle schrumpft im Schritt $n+1$ auf ein Drittel ($\\frac{1}{3^n}$).<br>3. Durch Zuweisung einer Adressfolge (z.B. 'Links', 'Rechts', 'Links', ...) lässt sich eine Bijektion $f: C \\to \\{L, R\\}^{\\mathbb{N}_0}$ definieren.<br>4. Da der Adressraum überabzählbar ist, ist auch die Cantor-Menge **überabzählbar**.",
        meta: "Skript: Abschnitt 2.6.5, Korollar 2.83",
        explanation: "Obwohl im Limes der Durchschnitt all dieser Intervalle die Gesamtlänge 0 hat und keine vollständigen Intervalle mehr enthält, bleiben überabzählbar viele 'isolierte' Punkte übrig. Jede unendliche Folge aus Links/Rechts-Abbiegungen führt dank dem Intervallschachtelungsprinzip zu exakt einem Punkt.",
        example: "Der Punkt $1/3$ hat die Adresse 'Links, Rechts, Rechts, Rechts, ...', da er immer am rechten Rand der verbleibenden linken Drittel liegt.",
        counterexample: "Obwohl die Menge überabzählbar ist, enthält sie im Gegensatz zu $\\mathbb{R}$ keine Teilintervalle (leeres Inneres)."
    }
);