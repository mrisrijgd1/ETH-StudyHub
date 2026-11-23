/* ==========================================================================
   FLASHCARDS KAPITEL 1: Einführung
   Analysis I - Prof. Dr. Manfred Einsiedler
   Logik, Mengenlehre, Abbildungen, Äquivalenzrelationen, Kardinalität, Beweise
   ========================================================================== */

window.FLASHCARDS_KAPITEL_1 = [
  // ========================================================================
  // 1.1 QUADRATUR DER PARABEL
  // ========================================================================
  {
    id: "k1_prop_1_1",
    title: "Proposition 1.1 & Lemma 1.3: Quadratur der Parabel",
    category: "1.1 Quadratur der Parabel",
    type: "beispiel",
    front: "Was besagt <b>Proposition 1.1</b> über den Flächeninhalt unter der Parabel, und welche <b>Summenformel</b> (Lemma 1.3) braucht ihr Beweis?",
    back: "<b>Proposition 1.1:</b> Angenommen es gibt einen Flächeninhaltsbegriff für Bereiche in $\\mathbb{R}^2$, der (i) Rechtecken $[a,b] \\times [c,d]$ den Inhalt $(b-a)(d-c)$ gibt, (ii) monoton ist ($F \\subseteq G \\Rightarrow$ Inhalt $F \\le$ Inhalt $G$) und (iii) additiv auf disjunkten Bereichen ist. Dann ist der Flächeninhalt unter der Parabel $y = x^2$ über $[0,1]$ (falls definiert) <b>zwingend $\\frac{1}{3}$</b>.<br><br><b>Lemma 1.3 (per Induktion):</b> Für $n \\geq 1$:<br>$$1^2 + 2^2 + \\dots + n^2 = \\frac{n^3}{3} + \\frac{n^2}{2} + \\frac{n}{6}$$",
    meta: "Skript: Proposition 1.1 & Lemma 1.3, Abschnitt 1.1",
    explanation: "Der Beweis quetscht die Fläche zwischen Unter- und Obersummen von $n$ Rechtecken der Breite $\\frac1n$: Mit Lemma 1.3 liegen beide Schranken um höchstens $\\frac1n$ auseinander und zwingen den Wert gegen $\\frac13$. Das ist der Prototyp des Riemann-Integrals (Kapitel 4) - und zugleich die erste Vorführung der vollständigen Induktion.",
    example: "Für $n = 3$: $1 + 4 + 9 = 14 = \\frac{27}{3} + \\frac{9}{2} + \\frac{3}{6} = 9 + 4{,}5 + 0{,}5$. Mit 1000 Rechtecken (Applet 1.2) liegt der Flächeninhalt bereits zwischen $0{,}3328$ und $0{,}3338$.",
    counterexample: "<b>1.</b> Die Proposition beweist <i>nicht</i>, dass der Flächeninhalt existiert - nur dass $\\frac13$ der einzig mögliche Wert ist. Die Existenzfrage klärt erst die Integrationstheorie.<br><b>2.</b> Ohne die Monotonie-Annahme (ii) bricht das Einquetschen zusammen: Aus Unter- und Oberschranken liesse sich nichts mehr folgern."
  },

  // ========================================================================
  // 1.3 LOGISCHE BEGRIFFE
  // ========================================================================
  {
    id: "k1_aussagenlogik",
    title: "1.3.1 Aussagenlogik: Junktoren und ihre Negation",
    category: "1.3 Logische Begriffe",
    type: "definition",
    front: "Welche <b>logischen Verknüpfungen (Junktoren)</b> verwendet die Aussagenlogik, und wie negiert man sie (De Morgan, Implikation)?",
    back: "Für Aussagen $A, B$ (jede ist wahr oder falsch, nie beides):<br>&bull; $\\neg A$ (nicht), $A \\wedge B$ (und), $A \\vee B$ (oder, einschliessend), $A \\implies B$ (wenn-dann), $A \\iff B$ (genau dann, wenn).<br><br><b>Wichtige Äquivalenzen:</b><br>&bull; $A \\implies B \\iff (\\neg A) \\vee B \\iff (\\neg B \\implies \\neg A)$ (<b>Kontraposition</b>)<br>&bull; $\\neg(A \\wedge B) \\iff (\\neg A) \\vee (\\neg B)$, $\\quad \\neg(A \\vee B) \\iff (\\neg A) \\wedge (\\neg B)$ (<b>De Morgan</b>)<br>&bull; $\\neg(A \\implies B) \\iff A \\wedge (\\neg B)$<br>&bull; $\\neg(\\neg A) \\iff A$",
    meta: "Skript: Abschnitt 1.3.1 (Aussagenlogik und Boolesche Algebra)",
    explanation: "Eine Implikation $A \\implies B$ ist nur dann falsch, wenn $A$ wahr und $B$ falsch ist - insbesondere ist sie <i>wahr, wann immer $A$ falsch ist</i> ('ex falso quodlibet'). Die Negation der Implikation ist keine Implikation, sondern ein 'Und': Es gibt einen Fall, wo die Voraussetzung gilt und die Folgerung scheitert.",
    example: "Die Aussage 'Wenn $n > 2$ gerade und prim ist, dann ist $n$ ungerade' ist wahr - weil die Voraussetzung nie eintritt. Kontraposition: 'Ist $n^2$ gerade, so ist $n$ gerade' beweist man als 'ist $n$ ungerade, so ist $n^2$ ungerade'.",
    counterexample: "<b>1.</b> $A \\implies B$ ist NICHT äquivalent zu $B \\implies A$ (Umkehrung!): '$x > 2 \\implies x > 0$' ist wahr, '$x > 0 \\implies x > 2$' falsch.<br><b>2.</b> Das mathematische 'oder' ist nicht ausschliessend: '$2$ ist gerade $\\vee$ $2$ ist prim' ist wahr, obwohl beides gilt (ausschliessend wäre XOR)."
  },
  {
    id: "k1_quantoren",
    title: "1.3.2 Prädikatenlogik: Quantoren",
    category: "1.3 Logische Begriffe",
    type: "definition",
    front: "Was bedeuten die Quantoren $\\forall$, $\\exists$ und $\\exists!$, und wie verhalten sie sich über der <b>leeren Menge</b>?",
    back: "Für eine Aussage $A(x)$ über Elemente $x$ einer Menge $X$:<br>&bull; $\\forall x \\in X: A(x)$ - für <b>alle</b> $x$ gilt $A(x)$.<br>&bull; $\\exists x \\in X: A(x)$ - es <b>gibt</b> (mindestens) ein $x$ mit $A(x)$.<br>&bull; $\\exists! x \\in X: A(x)$ - <b>eindeutige Existenz</b>, definiert als<br>$$(\\exists x \\in X: A(x)) \\wedge (\\forall x, y \\in X: (A(x) \\wedge A(y)) \\implies x = y)$$<br><b>Eigenheit der leeren Menge:</b> $\\forall x \\in \\emptyset: A(x)$ ist <i>immer wahr</i>; $\\exists x \\in \\emptyset: A(x)$ ist <i>immer falsch</i>.<br><br><i>Kurzformen:</i> $\\forall \\varepsilon > 0: A(\\varepsilon)$ steht für $\\forall \\varepsilon \\in \\mathbb{R}: (\\varepsilon > 0 \\implies A(\\varepsilon))$; $\\exists \\varepsilon > 0: A(\\varepsilon)$ für $\\exists \\varepsilon \\in \\mathbb{R}: \\varepsilon > 0 \\wedge A(\\varepsilon)$.",
    meta: "Skript: Abschnitt 1.3.2",
    explanation: "Die 'leere Wahrheit' des Allquantors ist Konvention mit System: Nur so bleiben die Negationsregeln (nächste Karte) ausnahmslos gültig. Aussagen wie 'Alle Einhörner sind grün' sind mathematisch wahr - es gibt kein Gegenbeispiel.",
    example: "'$\\exists! x \\in \\mathbb{R}: x + 3 = 5$' ist wahr ($x = 2$ existiert und ist eindeutig). '$\\exists! x \\in \\mathbb{R}: x^2 = 4$' ist falsch - es gibt zwei Lösungen $\\pm 2$ (Existenz ja, Eindeutigkeit nein).",
    counterexample: "<b>1.</b> Aus $\\exists x: A(x)$ und $\\exists x: B(x)$ folgt NICHT $\\exists x: (A(x) \\wedge B(x))$: Es gibt gerade und es gibt ungerade Zahlen, aber keine, die beides ist (Übung 1.11).<br><b>2.</b> $\\forall x: (A(x) \\vee B(x))$ impliziert NICHT $(\\forall x: A(x)) \\vee (\\forall x: B(x))$: Jede ganze Zahl ist gerade oder ungerade, aber weder sind alle gerade noch alle ungerade."
  },
  {
    id: "k1_uebung_1_9_10",
    title: "Wichtige Übungen 1.9 & 1.10: Vertauschen und Negieren von Quantoren",
    category: "1.3 Logische Begriffe",
    type: "lemma",
    front: "Welche Quantoren darf man <b>vertauschen</b> (Übung 1.9)? Wie <b>negiert</b> man quantifizierte Aussagen (Gl. 1.7, Übung 1.10)?",
    back: "<b>Vertauschbarkeit (Übung 1.9):</b> Gleichartige Quantoren dürfen vertauscht werden:<br>$$\\forall x \\forall y: A(x,y) \\iff \\forall y \\forall x: A(x,y), \\qquad \\exists x \\exists y: A(x,y) \\iff \\exists y \\exists x: A(x,y)$$<br>(deshalb die Kurzschreibweise $\\forall x, y \\in X$).<br><br><b>Negation (1.7):</b> Die Negation wandert wie ein Minuszeichen nach innen und <i>kippt jeden Quantor</i>:<br>$$\\neg(\\forall x \\in X: A(x)) \\iff \\exists x \\in X: \\neg A(x)$$<br>$$\\neg(\\exists x \\in X: A(x)) \\iff \\forall x \\in X: \\neg A(x)$$",
    meta: "Skript: Wichtige Übungen 1.9 & 1.10, Gleichung (1.7)",
    explanation: "Das mechanische Negieren verschachtelter Quantoren ist DAS Handwerkszeug der Analysis: Wer zeigen will, dass eine Funktion <i>nicht</i> stetig oder eine Folge <i>nicht</i> konvergent ist, braucht die sauber negierte Definition. Faustregel: Alle Quantoren kippen ($\\forall \\leftrightarrow \\exists$), die innerste Aussage wird negiert ($<$ wird zu $\\geq$, $\\implies$ wird zu $\\wedge\\neg$).",
    example: "Aus Übung 1.10: $\\neg(\\forall y \\in \\mathbb{R}\\ \\forall \\varepsilon > 0\\ \\exists x \\in X: |x-y| < \\varepsilon)$ ist äquivalent zu $\\exists y \\in \\mathbb{R}\\ \\exists \\varepsilon > 0\\ \\forall x \\in X: |x - y| \\geq \\varepsilon$.",
    counterexample: "<b>1.</b> VERSCHIEDENE Quantoren sind nicht vertauschbar! '$\\forall x \\in \\mathbb{R}\\ \\exists y \\in \\mathbb{R}: y > x$' ist wahr (zu jedem $x$ gibt es Grösseres), aber '$\\exists y\\ \\forall x: y > x$' ist falsch (kein $y$ übertrifft alle $x$).<br><b>2.</b> Beim Negieren einer Implikation entsteht KEINE Implikation: $\\neg(|x-y| < \\varepsilon \\implies x = y)$ ist $|x-y| < \\varepsilon \\wedge x \\neq y$ - ein häufiger Anfängerfehler."
  },

  // ========================================================================
  // 1.4 MENGENLEHRE UND ABBILDUNGEN
  // ========================================================================
  {
    id: "k1_def_1_14",
    title: "Definition 1.14: Teilmengen und Gleichheit von Mengen",
    category: "1.4 Mengenlehre und Abbildungen",
    type: "definition",
    front: "Wann ist $P$ eine <b>Teilmenge</b> bzw. <b>echte Teilmenge</b> von $Q$, und wie zeigt man die <b>Gleichheit</b> zweier Mengen?",
    back: "&bull; $P \\subseteq Q$ (<b>Teilmenge</b>): $\\forall x \\in P: x \\in Q$.<br>&bull; $P \\subsetneq Q$ (<b>echte Teilmenge</b>): $P \\subseteq Q$ und $P \\neq Q$.<br>&bull; $Q \\supseteq P$: '$Q$ ist Obermenge von $P$'.<br><br><b>Gleichheit:</b> Zwei Mengen sind genau dann gleich, wenn<br>$$P \\subseteq Q \\;\\wedge\\; Q \\subseteq P.$$<br><i>Aussonderung:</i> $\\{x \\in X \\mid A(x)\\}$ ist die Teilmenge aller $x \\in X$, die $A(x)$ erfüllen.",
    meta: "Skript: Definition 1.14, Abschnitt 1.4.1",
    explanation: "Der Beweis einer Mengengleichheit zerfällt fast immer in zwei getrennte Inklusionsbeweise ('$\\subseteq$' und '$\\supseteq$') - ein Grundmuster für unzählige Übungsaufgaben. Elemente haben keine Vielfachheit und keine Reihenfolge: $\\{1, 2, 2\\} = \\{2, 1\\}$.",
    example: "$\\mathbb{N} \\subsetneq \\mathbb{Z} \\subsetneq \\mathbb{Q} \\subsetneq \\mathbb{R}$; $\\{x \\in \\mathbb{R} \\mid x^2 = 1\\} = \\{-1, 1\\}$.",
    counterexample: "<b>1.</b> $\\in$ und $\\subseteq$ nicht verwechseln: $1 \\in \\{1, 2\\}$, aber $1 \\not\\subseteq \\{1,2\\}$; dagegen $\\{1\\} \\subseteq \\{1,2\\}$ und $\\{1\\} \\notin \\{1,2\\}$.<br><b>2.</b> $P \\subseteq Q$ schliesst $P = Q$ NICHT aus - wer 'echt kleiner' meint, muss $\\subsetneq$ schreiben. Auch gilt stets $\\emptyset \\subseteq Q$ (leere Wahrheit!)."
  },
  {
    id: "k1_def_1_16",
    title: "Definition 1.16: Mengenoperationen",
    category: "1.4 Mengenlehre und Abbildungen",
    type: "definition",
    front: "Definiere <b>Durchschnitt, Vereinigung, relatives Komplement, symmetrische Differenz</b> und das <b>Komplement</b> bezüglich einer Grundmenge.",
    back: "Für Mengen $P, Q$:<br>$$P \\cap Q = \\{x \\mid x \\in P \\wedge x \\in Q\\}$$<br>$$P \\cup Q = \\{x \\mid x \\in P \\vee x \\in Q\\}$$<br>$$P \\setminus Q = \\{x \\mid x \\in P \\wedge x \\notin Q\\}$$<br>$$P \\triangle Q = (P \\setminus Q) \\cup (Q \\setminus P) \\quad (\\text{symmetrische Differenz, XOR})$$<br>Sind alle Mengen Teilmengen einer Grundmenge $X$: <b>Komplement</b> $P^c = X \\setminus P$.<br><br><i>Priorität:</i> Komplementbildung bindet am stärksten, Vereinigung am schwächsten: $A^c \\cup B \\setminus C \\cup D \\cap E = (A^c) \\cup (B \\setminus C) \\cup (D \\cap E)$.",
    meta: "Skript: Definition 1.16, Abschnitt 1.4.1",
    explanation: "Die Mengenoperationen sind die direkten Übersetzungen der Junktoren: $\\cap \\leftrightarrow \\wedge$, $\\cup \\leftrightarrow \\vee$, $^c \\leftrightarrow \\neg$, $\\triangle \\leftrightarrow$ XOR. Jede aussagenlogische Äquivalenz wird so zu einer Mengenidentität - etwa Distributivgesetze $P \\cap (Q \\cup R) = (P \\cap Q) \\cup (P \\cap R)$.",
    example: "$P = \\{1,2,3\\}$, $Q = \\{3,4\\}$: $P \\cap Q = \\{3\\}$, $P \\cup Q = \\{1,2,3,4\\}$, $P \\setminus Q = \\{1,2\\}$, $P \\triangle Q = \\{1,2,4\\}$.",
    counterexample: "<b>1.</b> $P \\setminus Q \\neq Q \\setminus P$ im Allgemeinen - die Differenz ist nicht symmetrisch (daher der eigene Begriff $\\triangle$).<br><b>2.</b> Das Komplement $P^c$ ist ohne Angabe der Grundmenge $X$ sinnlos: $\\{1\\}^c$ in $\\mathbb{N}$ ist etwas völlig anderes als in $\\mathbb{R}$."
  },
  {
    id: "k1_def_1_19_demorgan",
    title: "Definition 1.19 & Übung 1.20: Beliebige Vereinigungen und De Morgan",
    category: "1.4 Mengenlehre und Abbildungen",
    type: "satz",
    front: "Wie sind <b>Vereinigung und Durchschnitt über beliebige Kollektionen</b> definiert, und wie lauten die <b>allgemeinen De Morganschen Gesetze</b>?",
    back: "Für eine Kollektion $\\mathcal{A}$ von Mengen:<br>$$\\bigcup_{A \\in \\mathcal{A}} A = \\{x \\mid \\exists A \\in \\mathcal{A}: x \\in A\\}, \\qquad \\bigcap_{A \\in \\mathcal{A}} A = \\{x \\mid \\forall A \\in \\mathcal{A}: x \\in A\\} \\;\\; (\\mathcal{A} \\neq \\emptyset)$$<br><b>De Morgan (Wichtige Übung 1.20):</b> Für Teilmengen einer Grundmenge $X$:<br>$$\\Big(\\bigcup_{A \\in \\mathcal{A}} A\\Big)^c = \\bigcap_{A \\in \\mathcal{A}} A^c, \\qquad \\Big(\\bigcap_{A \\in \\mathcal{A}} A\\Big)^c = \\bigcup_{A \\in \\mathcal{A}} A^c$$",
    meta: "Skript: Definition 1.19 & Wichtige Übung 1.20",
    explanation: "Komplementieren vertauscht $\\cup$ und $\\cap$ - das mengentheoretische Echo der Quantoren-Negation ($\\neg\\exists = \\forall\\neg$). Der Durchschnitt über die <i>leere</i> Kollektion bleibt bewusst undefiniert (er wäre die 'Menge aller Objekte'); nur relativ zu einer Grundmenge $X$ setzt man $\\bigcap_{A \\in \\emptyset} A = X$.",
    example: "$\\bigcap_{n=1}^{\\infty} \\left[-\\tfrac1n, \\tfrac1n\\right] = \\{0\\}$ (Übung 1.21): Genau $0$ liegt in jedem der Intervalle.",
    counterexample: "<b>1.</b> Unendliche Durchschnitte offener Intervalle müssen nicht offen sein - $\\bigcap_n \\left(-\\tfrac1n, \\tfrac1n\\right) = \\{0\\}$: 'endliche' Rechenregeln übertragen sich nicht blind auf unendliche Kollektionen.<br><b>2.</b> Ohne Grundmenge gilt De Morgan nicht einmal der Form nach: $A^c$ ist dann gar nicht definiert (die 'Menge aller Nicht-Elemente' führt in die Russell-Paradoxie)."
  },
  {
    id: "k1_def_1_22_27",
    title: "Definitionen 1.22, 1.23 & 1.27: Disjunktheit, Produkt, Potenzmenge",
    category: "1.4 Mengenlehre und Abbildungen",
    type: "definition",
    front: "Definiere <b>disjunkte Mengen</b>, das <b>kartesische Produkt</b> und die <b>Potenzmenge</b>. Warum heisst die Mengenlehre des Skripts 'naiv'?",
    back: "&bull; <b>Disjunktheit (1.22):</b> $A, B$ heissen disjunkt, falls $A \\cap B = \\emptyset$; ihre Vereinigung heisst dann disjunkte Vereinigung $A \\sqcup B$. Eine Kollektion ist <i>paarweise disjunkt</i>, wenn je zwei verschiedene ihrer Mengen disjunkt sind.<br>&bull; <b>Kartesisches Produkt (1.23):</b> $X \\times Y = \\{(x,y) \\mid x \\in X, y \\in Y\\}$ (geordnete Paare!).<br>&bull; <b>Potenzmenge (1.27):</b> $\\mathcal{P}(X) = \\{Q \\mid Q \\subseteq X\\}$, die Menge aller Teilmengen.<br><br><b>'Naiv':</b> Uneingeschränkte Mengenbildung führt zu Widersprüchen - <b>Russell-Paradoxon</b> (Beispiel 1.29): $R = \\{M \\mid M \\notin M\\}$ liefert $R \\in R \\iff R \\notin R$. Die moderne Grundlage ist die axiomatische ZF(C)-Mengenlehre.",
    meta: "Skript: Definitionen 1.22, 1.23, 1.27 & Beispiel 1.29",
    explanation: "Beim kartesischen Produkt zählt die Reihenfolge: $(1,2) \\neq (2,1)$, obwohl $\\{1,2\\} = \\{2,1\\}$. Die Potenzmenge einer $n$-elementigen Menge hat $2^n$ Elemente (jedes Element: drin oder nicht drin) - daher der Name und die Notation $2^X$.",
    example: "$\\mathcal{P}(\\emptyset) = \\{\\emptyset\\}$ und $\\mathcal{P}(\\mathcal{P}(\\emptyset)) = \\{\\emptyset, \\{\\emptyset\\}\\}$ (Übung 1.28). $\\mathbb{R} \\times \\mathbb{R} = \\mathbb{R}^2$ ist die Ebene.",
    counterexample: "<b>1.</b> $X \\times Y \\neq Y \\times X$ für $X \\neq Y$: $\\{1\\} \\times \\{2\\} = \\{(1,2)\\} \\neq \\{(2,1)\\}$.<br><b>2.</b> $\\mathcal{P}(\\emptyset) \\neq \\emptyset$! Die Potenzmenge der leeren Menge hat ein Element (nämlich $\\emptyset$ selbst) - leere Menge und 'Menge, die die leere Menge enthält' sind verschieden."
  },
  {
    id: "k1_def_1_31",
    title: "Definition 1.31: Funktionen",
    category: "1.4 Mengenlehre und Abbildungen",
    type: "definition",
    front: "Was ist eine <b>Funktion</b> $f: X \\to Y$? Definiere <b>Definitionsbereich, Wertebereich, Bild</b> und <b>Einschränkung</b>. Wann sind zwei Funktionen gleich?",
    back: "Eine <b>Funktion</b> $f: X \\to Y$ ist eine Zuordnung, die jedem $x \\in X$ ein <i>eindeutig bestimmtes</i> $y = f(x) \\in Y$ zuweist. $X$ heisst <b>Definitionsbereich</b>, $Y$ <b>Wertebereich</b> (Zielbereich).<br><br>&bull; <b>Bild:</b> $f(X) = \\{y \\in Y \\mid \\exists x \\in X: y = f(x)\\}$; allgemeiner $f(A) = \\{f(x) \\mid x \\in A\\}$ für $A \\subseteq X$.<br>&bull; <b>Einschränkung:</b> $f|_A: A \\to Y$, $f|_A(x) = f(x)$; umgekehrt heisst $f$ Fortsetzung von $f|_A$.<br><br><b>Gleichheit:</b> $f_1 = f_2$ verlangt $X_1 = X_2$, $Y_1 = Y_2$ <i>und</i> $f_1(x) = f_2(x)$ für alle $x$.",
    meta: "Skript: Definition 1.31, Abschnitt 1.4.2",
    explanation: "Eine 'Formel' allein ist keine Funktion - erst mit Definitions- und Wertebereich ist die Definition vollständig (Schreibweisen: $f: X \\to Y,\\ x \\mapsto f(x)$ oder $x \\in X \\mapsto f(x) \\in Y$). 'Wohldefiniert' heisst: Die angegebene Zuordnung liefert wirklich für jedes $x$ genau einen Wert in $Y$.",
    example: "$f: \\mathbb{R} \\to \\mathbb{R},\\ x \\mapsto x^2$ ist vollständig definiert; ihr Bild ist $f(\\mathbb{R}) = \\mathbb{R}_{\\geq 0} \\neq \\mathbb{R}$ - Bild und Wertebereich sind verschiedene Dinge!",
    counterexample: "<b>1.</b> $f: \\mathbb{R} \\to \\mathbb{R},\\ x \\mapsto x^2$ und $g: \\mathbb{R} \\to \\mathbb{R}_{\\geq 0},\\ x \\mapsto x^2$ sind NICHT dieselbe Funktion (verschiedene Wertebereiche - $g$ ist surjektiv, $f$ nicht).<br><b>2.</b> '$f(x) = \\pm\\sqrt{x}$' definiert keine Funktion: Einem $x > 0$ würden <i>zwei</i> Werte zugewiesen - die Eindeutigkeit ist verletzt."
  },
  {
    id: "k1_def_1_33",
    title: "Definition 1.33: Injektiv, surjektiv, bijektiv",
    category: "1.4 Mengenlehre und Abbildungen",
    type: "definition",
    front: "Definiere <b>injektiv</b>, <b>surjektiv</b> und <b>bijektiv</b> für eine Funktion $f: X \\to Y$.",
    back: "&bull; <b>injektiv</b> (Injektion): $\\forall x_1, x_2 \\in X: f(x_1) = f(x_2) \\implies x_1 = x_2$<br>(verschiedene Argumente haben verschiedene Werte).<br>&bull; <b>surjektiv</b> (Surjektion, 'Funktion von $X$ <i>auf</i> $Y$'): Zu jedem $y \\in Y$ gibt es ein $x \\in X$ mit $f(x) = y$ - äquivalent: $f(X) = Y$.<br>&bull; <b>bijektiv</b> (Bijektion, 'eineindeutig'): injektiv <i>und</i> surjektiv.",
    meta: "Skript: Definition 1.33 & Beispiel 1.35",
    explanation: "<b>Beispiel 1.35 (Quadrieren) zeigt: Die Eigenschaften hängen von Definitions- UND Wertebereich ab:</b><br>(a) $f: \\mathbb{R}_{\\geq 0} \\to \\mathbb{R},\\ x \\mapsto x^2$: injektiv, nicht surjektiv.<br>(b) $f: \\mathbb{R} \\to \\mathbb{R}_{\\geq 0}$: surjektiv, nicht injektiv ($f(1) = f(-1)$).<br>(c) $f: \\mathbb{R} \\to \\mathbb{R}$: weder noch.<br>(d) $f: \\mathbb{R}_{\\geq 0} \\to \\mathbb{R}_{\\geq 0}$: bijektiv.<br>Die Frage 'Ist Quadrieren bijektiv?' ist ohne diese Angaben sinnlos!",
    example: "$x \\mapsto x + 1$ auf $\\mathbb{Z}$ ist bijektiv; $x \\mapsto 2x$ ist auf $\\mathbb{R}$ bijektiv, auf $\\mathbb{Z}$ nur injektiv (ungerade Zahlen werden nicht getroffen).",
    counterexample: "<b>1.</b> Injektivität heisst NICHT '$x_1 = x_2 \\implies f(x_1) = f(x_2)$' - das gilt für jede Funktion! Die Implikationsrichtung ist entscheidend.<br><b>2.</b> 'Nicht injektiv' erfordert einen konkreten Kollisionsnachweis: $\\sin$ ist auf $\\mathbb{R}$ nicht injektiv wegen $\\sin(0) = \\sin(\\pi) = 0$, auf $[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}]$ aber sehr wohl injektiv."
  },
  {
    id: "k1_def_1_36_37",
    title: "Definitionen 1.36 & 1.37: Umkehrabbildung und Verknüpfung",
    category: "1.4 Mengenlehre und Abbildungen",
    type: "definition",
    front: "Wie sind die <b>Umkehrabbildung</b> $f^{-1}$ und die <b>Verknüpfung</b> $g \\circ f$ definiert, und welche Identitäten verbinden sie?",
    back: "&bull; <b>Umkehrabbildung (1.36):</b> Ist $f: X \\to Y$ <i>bijektiv</i>, so weist $f^{-1}: Y \\to X$ jedem $y \\in Y$ das eindeutige $x \\in X$ mit $f(x) = y$ zu.<br>&bull; <b>Verknüpfung (1.37):</b> Für $f: X \\to Y$, $g: Y \\to Z$ ist $g \\circ f: X \\to Z$ ('$g$ nach $f$') definiert durch $(g \\circ f)(x) = g(f(x))$.<br><br><b>Identitäten:</b> $f \\circ f^{-1} = \\operatorname{id}_Y$ und $f^{-1} \\circ f = \\operatorname{id}_X$.<br><br><b>Übung 1.42 (Umkehrung):</b> Existiert ein $g: Y \\to X$ mit $g \\circ f = \\operatorname{id}_X$ und $f \\circ g = \\operatorname{id}_Y$, so ist $f$ bijektiv und $g = f^{-1}$ - die Existenz einer beidseitigen Inversen <i>charakterisiert</i> Bijektivität.",
    meta: "Skript: Definitionen 1.36 & 1.37, Wichtige Übung 1.42",
    explanation: "Für nur <i>injektives</i> $f$ gibt es immerhin $f^{-1}: f(X) \\to X$ mit eingeschränktem Definitionsbereich. Achtung Notationsfalle: $f^{-1}(B)$ bezeichnet auch das Urbild einer Menge (Definition 1.48) - das existiert für <i>jede</i> Funktion, ganz ohne Bijektivität!",
    example: "$f: \\mathbb{R}_{\\geq 0} \\to \\mathbb{R}_{\\geq 0},\\ x \\mapsto x^2$ hat die Umkehrabbildung $f^{-1}(y) = \\sqrt{y}$. Verknüpfung: $x \\mapsto \\sqrt{x^2+1}$ ist $g \\circ f$ mit $f(x) = x^2 + 1$, $g(y) = \\sqrt{y}$.",
    counterexample: "<b>1.</b> $g \\circ f \\neq f \\circ g$ im Allgemeinen: Mit $f(x) = x + 1$, $g(x) = x^2$ ist $g(f(x)) = (x+1)^2$, aber $f(g(x)) = x^2 + 1$.<br><b>2.</b> EINE einseitige Inverse genügt nicht: Für $f: \\mathbb{N} \\to \\mathbb{N},\\ n \\mapsto n+1$ gibt es $g$ mit $g \\circ f = \\operatorname{id}$ (ziehe 1 ab, bilde $1 \\mapsto 1$), aber $f$ ist nicht surjektiv, also nicht bijektiv."
  },
  {
    id: "k1_lemma_1_40",
    title: "Lemma 1.40 & Übung 1.41: Eigenschaften von Verknüpfungen",
    category: "1.4 Mengenlehre und Abbildungen",
    type: "lemma",
    front: "Welche Eigenschaften vererben sich auf die Verknüpfung $g \\circ f$ (Lemma 1.40), und welche <b>Rückschlüsse</b> erlaubt $g \\circ f$ auf $f$ und $g$ (Übung 1.41)?",
    back: "<b>Lemma 1.40:</b> Seien $f: X \\to Y$, $g: Y \\to Z$.<br>(i) $f, g$ injektiv $\\implies g \\circ f$ injektiv.<br>(ii) $f, g$ surjektiv $\\implies g \\circ f$ surjektiv.<br>(iii) $f, g$ bijektiv $\\implies g \\circ f$ bijektiv mit $$(g \\circ f)^{-1} = f^{-1} \\circ g^{-1}.$$<br><b>Übung 1.41 (Rückschlüsse):</b><br>&bull; $g \\circ f$ surjektiv $\\implies g$ surjektiv (aber $f$ nicht unbedingt!).<br>&bull; $g \\circ f$ injektiv $\\implies f$ injektiv (aber $g$ nicht unbedingt!).<br>&bull; $g \\circ f$ surjektiv und $g$ injektiv $\\implies f$ surjektiv.<br>&bull; $g \\circ f$ injektiv und $f$ surjektiv $\\implies g$ injektiv.",
    meta: "Skript: Lemma 1.40 & Wichtige Übung 1.41",
    explanation: "Die Reihenfolge in $(g \\circ f)^{-1} = f^{-1} \\circ g^{-1}$ dreht sich um - wie beim Anziehen und Ausziehen von Socken und Schuhen: Zuerst das zuletzt Angezogene ausziehen. Merkhilfe für die Rückschlüsse: Die <i>äussere</i> Funktion erbt Surjektivität, die <i>innere</i> Injektivität.",
    example: "$f: \\mathbb{N} \\to \\mathbb{Z},\\ n \\mapsto n$ und $g: \\mathbb{Z} \\to \\mathbb{N},\\ k \\mapsto |k| + 1$: Beide Kompositionen lassen sich mit dem Lemma analysieren, z.B. ist $g \\circ f$ injektiv, also $f$ injektiv.",
    counterexample: "<b>1.</b> $g \\circ f$ surjektiv erzwingt NICHT $f$ surjektiv: $f: \\{1\\} \\to \\{a, b\\},\\ 1 \\mapsto a$ und $g: \\{a,b\\} \\to \\{c\\}$ - $g \\circ f$ ist surjektiv, $f$ nicht.<br><b>2.</b> $g \\circ f$ injektiv erzwingt NICHT $g$ injektiv: gleiche Mengen, $f: \\{1\\} \\to \\{a,b\\}$, $g(a) = g(b) = c$ - $g \\circ f$ injektiv (nur ein Element!), $g$ nicht."
  },
  {
    id: "k1_def_1_44",
    title: "Definition 1.44: Der Graph einer Funktion",
    category: "1.4 Mengenlehre und Abbildungen",
    type: "definition",
    front: "Wie ist der <b>Graph</b> einer Funktion $f: X \\to Y$ definiert, und welche Teilmengen von $X \\times Y$ sind Graphen?",
    back: "$$\\operatorname{graph}(f) = \\{(x, y) \\in X \\times Y \\mid y = f(x)\\} \\subseteq X \\times Y$$<br>Eine Teilmenge $G \\subseteq X \\times Y$ ist genau dann der Graph einer Funktion, wenn es zu <b>jedem</b> $x \\in X$ <b>genau ein</b> $y \\in Y$ mit $(x, y) \\in G$ gibt ('Vertikalen-Test': jede vertikale Gerade trifft $G$ exakt einmal).",
    meta: "Skript: Definition 1.44 & Figur 1.7, Abschnitt 1.4.3",
    explanation: "Der Graph enthält die volle Information über die Funktion (bei bekanntem $X$ und $Y$) - in der axiomatischen Mengenlehre <i>definiert</i> man Funktionen sogar als ihre Graphen. Aus dem Graphen liest man auch Injektivität (jede horizontale Gerade höchstens einmal getroffen) und Surjektivität (jede horizontale Gerade mindestens einmal getroffen) ab.",
    example: "$\\operatorname{graph}(x \\mapsto x^2)$ auf $\\mathbb{R}$ ist die Parabel $\\{(x, x^2) \\mid x \\in \\mathbb{R}\\} \\subseteq \\mathbb{R}^2$.",
    counterexample: "<b>1.</b> Der Einheitskreis $\\{(x,y) \\mid x^2 + y^2 = 1\\}$ ist KEIN Graph einer Funktion von $x$: Bei $x = 0$ gibt es zwei Punkte $(0, \\pm 1)$, bei $x = 2$ keinen.<br><b>2.</b> Auch $\\{(x, y) \\in \\mathbb{R}^2 \\mid x = y^2\\}$ ('liegende Parabel') scheitert: $x = -1$ hat keinen Partner, $x = 1$ hat zwei ($y = \\pm 1$)."
  },
  {
    id: "k1_def_1_48",
    title: "Definition 1.48 & Übung 1.49: Urbilder",
    category: "1.4 Mengenlehre und Abbildungen",
    type: "definition",
    front: "Wie ist das <b>Urbild</b> $f^{-1}(B)$ definiert, und wie verhalten sich Bilder und Urbilder unter Mengenoperationen (Übung 1.49)?",
    back: "Für $f: X \\to Y$ und $B \\subseteq Y$:<br>$$f^{-1}(B) = \\{x \\in X \\mid f(x) \\in B\\}$$<br>(definiert für JEDE Funktion, keine Bijektivität nötig; $f^{-1}(\\emptyset) = \\emptyset$, $f^{-1}(Y) = X$).<br><br><b>Übung 1.49:</b><br>&bull; $f(f^{-1}(B)) \\subseteq B$ (Gleichheit, falls $f$ surjektiv)<br>&bull; $f^{-1}(f(A)) \\supseteq A$ (Gleichheit, falls $f$ injektiv)<br>&bull; $f(A \\cup A') = f(A) \\cup f(A')$ und $f^{-1}(B \\cup B') = f^{-1}(B) \\cup f^{-1}(B')$<br>&bull; Urbilder respektieren auch $\\cap$ und Komplemente - <b>Bilder im Allgemeinen nicht!</b>",
    meta: "Skript: Definition 1.48 & Wichtige Übung 1.49",
    explanation: "Urbilder sind die 'braveren' Objekte: Sie vertauschen mit allen Mengenoperationen. Bilder nur mit Vereinigungen. Diese Asymmetrie ist der Grund, warum spätere Begriffe (Stetigkeit!) über <i>Urbilder</i> definiert werden ('Urbilder offener Mengen sind offen', vgl. Proposition 5.50).",
    example: "$f(x) = x^2$ auf $\\mathbb{R}$: $f^{-1}(\\{4\\}) = \\{-2, 2\\}$, $f^{-1}([1, 4]) = [-2,-1] \\cup [1,2]$, $f^{-1}(\\{-1\\}) = \\emptyset$.",
    counterexample: "<b>1.</b> $f(A \\cap A') \\neq f(A) \\cap f(A')$ im Allgemeinen: $f(x) = x^2$, $A = \\{-1\\}$, $A' = \\{1\\}$: links $f(\\emptyset) = \\emptyset$, rechts $\\{1\\} \\cap \\{1\\} = \\{1\\}$.<br><b>2.</b> $f^{-1}(f(A)) = A$ kann ohne Injektivität scheitern: $f(x) = x^2$, $A = \\{2\\}$: $f^{-1}(f(\\{2\\})) = f^{-1}(\\{4\\}) = \\{-2, 2\\} \\supsetneq \\{2\\}$."
  },
  {
    id: "k1_def_1_51",
    title: "Definition 1.51 & Lemma 1.52: Partitionen und Fallunterscheidungen",
    category: "1.4 Mengenlehre und Abbildungen",
    type: "lemma",
    front: "Was ist eine <b>Partition</b> einer Menge $X$, und was besagt das Lemma über <b>Funktionen durch Fallunterscheidungen</b>?",
    back: "<b>Definition 1.51:</b> Eine Partition von $X$ ist eine Familie $\\mathcal{P}$ von <i>nicht-leeren, paarweise disjunkten</i> Teilmengen von $X$ mit<br>$$X = \\bigsqcup_{P \\in \\mathcal{P}} P.$$<br><b>Lemma 1.52:</b> Ist $\\mathcal{P}$ eine Partition von $X$ und für jedes $P \\in \\mathcal{P}$ eine Funktion $f_P: P \\to Y$ gegeben, dann existiert <b>genau eine</b> Funktion $f: X \\to Y$ mit $f|_P = f_P$ für alle $P \\in \\mathcal{P}$.",
    meta: "Skript: Definition 1.51 & Lemma 1.52, Abschnitt 1.4.5",
    explanation: "Das Lemma rechtfertigt alle Definitionen 'durch Fallunterscheidung' (wie den Absolutbetrag!): Jedes $x$ liegt in genau einem Partitionsstück, also ist $f(x) = f_P(x)$ wohldefiniert. Beide Partitionseigenschaften sind dafür nötig: Überdeckung (jedes $x$ bekommt einen Wert) und Disjunktheit (keines bekommt zwei).",
    example: "$\\mathcal{P} = \\{\\mathbb{R}_{<0}, \\{0\\}, \\mathbb{R}_{>0}\\}$ partitioniert $\\mathbb{R}$; darauf ist die Signum-Funktion ($-1$, $0$, $1$) stückweise definiert und nach Lemma 1.52 wohldefiniert.",
    counterexample: "<b>1.</b> Überlappende Stücke zerstören die Wohldefiniertheit: 'Setze $f = 0$ auf $[0, 2]$ und $f = 1$ auf $[1, 3]$' weist den Punkten in $[1,2]$ zwei Werte zu - keine Funktion.<br><b>2.</b> Fehlende Überdeckung lässt Löcher: $\\{\\mathbb{R}_{<0}, \\mathbb{R}_{>0}\\}$ ist keine Partition von $\\mathbb{R}$ (die $0$ fehlt) - eine darauf stückweise definierte 'Funktion' wäre bei $0$ undefiniert."
  },
  {
    id: "k1_def_1_54",
    title: "Definition 1.54: Iterationen einer Funktion",
    category: "1.4 Mengenlehre und Abbildungen",
    type: "definition",
    front: "Wie sind die <b>Iterationen</b> $f^{\\circ n}$ einer Funktion $f: X \\to X$ definiert?",
    back: "Für $f: X \\to X$ definiert man rekursiv:<br>$$f^{\\circ 1} = f, \\qquad f^{\\circ (n+1)} = f \\circ f^{\\circ n} \\quad (n \\in \\mathbb{N}), \\qquad f^{\\circ 0} = \\operatorname{id}_X.$$<br>Also $f^{\\circ 2} = f \\circ f$, $f^{\\circ 3} = f \\circ f \\circ f$, usw. (oft auch kurz $f^n$ geschrieben).",
    meta: "Skript: Definition 1.54, Abschnitt 1.4.6",
    explanation: "Iteration verlangt zwingend $X = Y$: Nur dann kann der Output wieder als Input dienen. Rekursive Definitionen wie diese sind das funktionale Gegenstück zur vollständigen Induktion. Die Dynamik von Iterationen ($n \\to \\infty$) ist später eine reiche Quelle von Folgen - z.B. erzeugt $f(x) = \\tfrac{x}{2}$ die Folge $x, \\tfrac{x}{2}, \\tfrac{x}{4}, \\dots$",
    example: "Übung 1.55: $f$ auf $X = \\{a, b, c\\}$ mit $f(a) = b, f(b) = c, f(c) = a$ (zyklisch) ist bijektiv mit $f^{\\circ 3} = \\operatorname{id}_X$ und $f^{-1} = f^{\\circ 2}$. Für $f(x) = 3x$ auf $\\mathbb{R}$ ist $f^{\\circ n}(x) = 3^n x$.",
    counterexample: "<b>1.</b> $f^{\\circ 2}$ ist NICHT $f \\cdot f$ (Produkt der Werte) und NICHT $f(x)^2$: Für $f(x) = x + 1$ ist $f^{\\circ 2}(x) = x + 2$, aber $f(x)^2 = (x+1)^2$.<br><b>2.</b> Für $f: \\mathbb{N} \\to \\mathbb{R},\\ n \\mapsto \\sqrt{n}$ ist $f \\circ f$ gar nicht definiert - der Wertebereich $\\mathbb{R}$ passt nicht in den Definitionsbereich $\\mathbb{N}$."
  },

  // ========================================================================
  // 1.6 ÄQUIVALENZRELATIONEN
  // ========================================================================
  {
    id: "k1_def_1_58",
    title: "Definition 1.58: Relationen",
    category: "1.6 Äquivalenzrelationen",
    type: "definition",
    front: "Was ist formal eine <b>Relation</b> auf $X \\times Y$ bzw. auf $X$?",
    back: "Eine <b>Relation</b> auf $X \\times Y$ ist eine <i>Teilmenge</i> $R \\subseteq X \\times Y$. Man schreibt $xRy$ für $(x, y) \\in R$ und verwendet Symbole wie $<, \\leq, \\cong, \\equiv, \\sim$. Für $X = Y$ spricht man von einer Relation <b>auf $X$</b>. Weiter steht $x \\not\\sim y$ für $\\neg(x \\sim y)$.",
    meta: "Skript: Definition 1.58 & Beispiel 1.59",
    explanation: "Die Abstraktion 'Relation = Teilmenge des Produkts' macht vertraute Zeichen zu mathematischen Objekten: $\\leq$ auf $\\mathbb{R}$ IST die Halbebene $\\{(x,y) \\mid x \\leq y\\} \\subseteq \\mathbb{R}^2$ (Figur 1.13). So lassen sich Eigenschaften von Relationen geometrisch lesen: Reflexivität = Diagonale enthalten, Symmetrie = spiegelsymmetrisch zur Diagonale.",
    example: "Beispiel 1.59: $m < n$ auf $\\mathbb{N}$ ($\\exists k \\in \\mathbb{N}: m + k = n$); die 'Ungefähr-gleich'-Relation $x \\approx_\\delta y \\iff |x - y| \\leq \\delta$ für festes $\\delta > 0$; der Graph jeder Funktion ist eine Relation.",
    counterexample: "<b>1.</b> Nicht jede Relation ist eine Funktion: $\\leq$ auf $\\mathbb{R}$ ordnet jedem $x$ unendlich viele $y$ zu - Funktionsgraphen sind genau die Relationen mit 'genau ein $y$ pro $x$'.<br><b>2.</b> $\\approx_\\delta$ ist NICHT transitiv: $0 \\approx_1 1$ und $1 \\approx_1 2$, aber $0 \\not\\approx_1 2$ - kleine Fehler summieren sich; deshalb ist 'ungefähr gleich' keine Äquivalenzrelation."
  },
  {
    id: "k1_def_1_61",
    title: "Definition 1.61: Äquivalenzrelationen",
    category: "1.6 Äquivalenzrelationen",
    type: "definition",
    front: "Welche drei Eigenschaften machen eine Relation $\\sim$ auf $X$ zur <b>Äquivalenzrelation</b>?",
    back: "Eine Relation $\\sim$ auf $X$ ist eine <b>Äquivalenzrelation</b>, falls:<br><br>1. <b>Reflexivität:</b> $\\forall x \\in X: x \\sim x$<br>2. <b>Symmetrie:</b> $\\forall x, y \\in X: x \\sim y \\implies y \\sim x$<br>3. <b>Transitivität:</b> $\\forall x, y, z \\in X: ((x \\sim y) \\wedge (y \\sim z)) \\implies x \\sim z$",
    meta: "Skript: Definition 1.61 & Beispiel 1.62",
    explanation: "Äquivalenzrelationen formalisieren 'Gleichheit in gewissen Aspekten' - sprachlich der Unterschied zwischen 'das Gleiche' (äquivalent) und 'dasselbe' (identisch). Beispiele 1.62: die Gleichheit selbst (feinste ÄR), die triviale Relation $R = X^2$ (gröbste), Parallelität von Geraden, 'gleicher Rest bei Division durch $m$'.",
    example: "Auf $\\mathbb{Z}$: $a \\sim b \\iff m \\mid (a - b)$ (Kongruenz modulo $m$) ist eine Äquivalenzrelation - die Grundlage des 'Uhrenrechnens'.",
    counterexample: "<b>1.</b> $\\leq$ auf $\\mathbb{R}$ ist KEINE Äquivalenzrelation: reflexiv und transitiv, aber nicht symmetrisch ($2 \\leq 3$, aber $3 \\not\\leq 2$).<br><b>2.</b> $\\approx_\\delta$ ('Abstand $\\leq \\delta$') ist reflexiv und symmetrisch, aber nicht transitiv - alle drei Eigenschaften sind unabhängig voneinander zu prüfen!"
  },
  {
    id: "k1_def_1_66",
    title: "Definition 1.66: Äquivalenzklassen und Quotientenmenge",
    category: "1.6 Äquivalenzrelationen",
    type: "definition",
    front: "Definiere <b>Äquivalenzklasse</b>, <b>Repräsentant</b> und <b>Quotientenmenge</b> $X/\\!\\sim$.",
    back: "Sei $\\sim$ eine Äquivalenzrelation auf $X$. Für $x \\in X$ heisst<br>$$[x]_\\sim = \\{y \\in X \\mid y \\sim x\\}$$<br>die <b>Äquivalenzklasse</b> von $x$; jedes $x \\in X$ heisst <b>Repräsentant</b> seiner Klasse $[x]_\\sim$. Die Menge aller Klassen<br>$$X/\\!\\sim \\;= \\{[x]_\\sim \\mid x \\in X\\}$$<br>heisst <b>Quotient</b> (Quotientenmenge) von $X$ modulo $\\sim$.",
    meta: "Skript: Definition 1.66, Abschnitt 1.6",
    explanation: "<b>Topf-Bild aus dem Skript:</b> Äquivalente Elemente kommen in denselben Topf; $[x]_\\sim$ = Inhalt des Topfes von $x$; $X/\\!\\sim$ = die Menge der Töpfe. Dabei gilt: $x \\sim y \\iff [x]_\\sim = [y]_\\sim$ - zwei Klassen sind entweder gleich oder disjunkt. Der Quotient ist ein <i>neuer Raum</i>, entstanden durch 'Verkleben' äquivalenter Punkte.",
    example: "Kongruenz modulo 3 auf $\\mathbb{Z}$: Drei Klassen $[0] = \\{\\dots, -3, 0, 3, \\dots\\}$, $[1]$, $[2]$; der Quotient $\\mathbb{Z}/\\!\\sim$ hat genau 3 Elemente. Im Beispiel 1.62 (iv): $[1] = \\{1,2,3\\}$, $[4] = \\{4,5\\}$, $[6] = \\{6\\}$.",
    counterexample: "<b>1.</b> Repräsentanten sind nicht eindeutig: $[0] = [3] = [-3]$ modulo 3 - eine Definition über Repräsentanten ('wähle $x \\in [x]$ und setze ...') muss stets auf <b>Wohldefiniertheit</b> (Unabhängigkeit von der Wahl) geprüft werden!<br><b>2.</b> $X/\\!\\sim$ ist eine Menge von <i>Mengen</i>, nicht von Elementen: $[1]_\\sim \\in X/\\!\\sim$, aber $1 \\notin X/\\!\\sim$."
  },
  {
    id: "k1_prop_1_67",
    title: "Proposition 1.67: Äquivalenzrelationen = Partitionen",
    category: "1.6 Äquivalenzrelationen",
    type: "proposition",
    front: "Wie entsprechen sich <b>Äquivalenzrelationen</b> und <b>Partitionen</b> (Proposition 1.67)?",
    back: "Sei $X$ eine Menge. Dann entsprechen sich Äquivalenzrelationen auf $X$ und Partitionen von $X$:<br><br>&bull; Zu einer Äquivalenzrelation $\\sim$ ist $\\mathcal{P}_\\sim = \\{[x]_\\sim \\mid x \\in X\\}$ eine <b>Partition</b> von $X$.<br>&bull; Zu einer Partition $\\mathcal{P}$ definiert $$x \\sim_{\\mathcal{P}} y \\iff \\exists P \\in \\mathcal{P}: x \\in P \\wedge y \\in P$$ eine <b>Äquivalenzrelation</b>.<br>&bull; Die Konstruktionen sind <b>zueinander invers</b>: $\\mathcal{P}_{\\sim_\\mathcal{P}} = \\mathcal{P}$ und $\\sim_{\\mathcal{P}_\\sim} = \\sim$.",
    meta: "Skript: Proposition 1.67",
    explanation: "Äquivalenzrelation und Partition sind zwei Sprachen für dieselbe Struktur: 'Wer ist mit wem äquivalent?' $\\leftrightarrow$ 'Wer liegt im selben Topf?'. Beweiskern: Reflexivität stellt sicher, dass jedes $x$ in seiner Klasse liegt (Überdeckung, Klassen nicht leer); Symmetrie + Transitivität erzwingen, dass sich zwei Klassen mit gemeinsamem Element ganz überlappen (Disjunktheit verschiedener Klassen).",
    example: "Die Partition $\\{\\{1,2,3\\}, \\{4,5\\}, \\{6\\}\\}$ von $\\{1,\\dots,6\\}$ entspricht genau der Äquivalenzrelation aus Beispiel 1.62 (iv).",
    counterexample: "<b>1.</b> Lässt man die Reflexivität weg, bricht die Korrespondenz: Die leere Relation $R = \\emptyset$ auf $X \\neq \\emptyset$ ist symmetrisch und transitiv, aber ihre 'Klassen' $[x] = \\emptyset$ bilden keine Partition.<br><b>2.</b> Eine Familie mit leeren oder überlappenden Mengen definiert über $\\sim_{\\mathcal{P}}$ keine Äquivalenzrelation auf ganz $X$ - die Partitionseigenschaften sind wirklich nötig."
  },

  // ========================================================================
  // 1.7 ENDLICHE UND ABZÄHLBARE MENGEN
  // ========================================================================
  {
    id: "k1_def_1_74_prop_1_75",
    title: "Definition 1.74 & Proposition 1.75: Kardinalität und Schubfachprinzip",
    category: "1.7 Endliche und abzählbare Mengen",
    type: "satz",
    front: "Wann hat eine Menge <b>Kardinalität $n$</b>, und was besagt das <b>Schubfachprinzip</b> (Proposition 1.75)?",
    back: "<b>Definition 1.74:</b> $|\\emptyset| = 0$; eine Menge $X$ hat <b>Kardinalität $n \\in \\mathbb{N}$</b>, falls eine Bijektion $\\{1, \\dots, n\\} \\to X$ existiert ($|X| = n$). $X$ ist <b>endlich</b> ($|X| < \\infty$), falls $|X| = n$ für ein $n \\in \\mathbb{N}_0$, sonst <b>unendlich</b> ($|X| = \\infty$).<br><br><b>Proposition 1.75 (Schubfachprinzip):</b> Sind $X, Y$ endlich mit $|X| = m > n = |Y|$, dann gibt es <b>keine injektive</b> Abbildung $X \\to Y$.<br><br><i>Insbesondere:</i> Die Kardinalität ist wohldefiniert (eindeutig), und für endliche Mengen existiert eine Bijektion $X \\to Y$ genau dann, wenn $|X| = |Y|$.",
    meta: "Skript: Definition 1.74 & Proposition 1.75, Abschnitt 1.7",
    explanation: "Anschaulich: Verteilt man $m > n$ Äpfel auf $n$ Körbe, enthält ein Korb mindestens zwei Äpfel - egal wie man verteilt. So anschaulich die Aussage ist: Der Skript-Beweis läuft sauber per Induktion nach $n$. Erst das Schubfachprinzip rechtfertigt, dass 'Anzahl der Elemente' überhaupt eine wohldefinierte Zahl ist!",
    example: "Unter 13 Personen haben zwei im selben Monat Geburtstag ($13 > 12$). In jeder Gruppe von $n \\geq 2$ Personen haben zwei gleich viele Bekannte in der Gruppe (Abschnitt 1.8.4).",
    counterexample: "<b>1.</b> Für unendliche Mengen ist das Prinzip FALSCH: $n \\mapsto n + 1$ ist eine injektive Abbildung von $\\mathbb{N}$ in die echte Teilmenge $\\mathbb{N}_{\\geq 2}$ ('Hilbert Hotel': ein volles Hotel mit unendlich vielen Zimmern hat immer noch Platz).<br><b>2.</b> Die Umkehrung gilt nicht: Aus $m \\leq n$ folgt zwar die Existenz einer Injektion, aber nicht, dass jede Abbildung injektiv ist."
  },
  {
    id: "k1_def_1_79",
    title: "Definition 1.79 & Lemma 1.80: Abzählbarkeit",
    category: "1.7 Endliche und abzählbare Mengen",
    type: "definition",
    front: "Wann heisst eine Menge <b>abzählbar unendlich</b> bzw. <b>überabzählbar</b>, und was besagt Lemma 1.80 über Teilmengen?",
    back: "<b>Definition 1.79:</b> $X$ heisst <b>abzählbar unendlich</b> (kurz: abzählbar), falls eine Bijektion $X \\to \\mathbb{N}$ existiert. Eine Menge, die weder endlich noch abzählbar unendlich ist, heisst <b>überabzählbar</b>.<br><br><b>Lemma 1.80:</b> Jede Teilmenge $Y \\subseteq X$ einer abzählbar unendlichen Menge ist <b>endlich oder selbst abzählbar unendlich</b>. ('Kleiner als abzählbar geht nicht ins Unendliche.')",
    meta: "Skript: Definition 1.79 & Lemma 1.80, Abschnitt 1.7",
    explanation: "Abzählbar = 'die Elemente lassen sich als unendliche Liste $x_1, x_2, x_3, \\dots$ durchnummerieren'. <b>Beweisidee des Lemmas:</b> Für $A \\subseteq \\mathbb{N}$ zählt $g(a) = |A \\cap \\{1, \\dots, a\\}|$ die Position von $a$ in $A$ - eine injektive 'Umnummerierung', die $A$ entweder auf $\\{1,\\dots,|A|\\}$ oder auf ganz $\\mathbb{N}$ bijektiv abbildet. Später: $\\mathbb{Z}$ und sogar $\\mathbb{Q}$ sind abzählbar, aber $\\mathbb{R}$ ist überabzählbar (Korollar 2.81)!",
    example: "$\\mathbb{Z}$ ist abzählbar via der Liste $0, 1, -1, 2, -2, \\dots$ Die geraden Zahlen sind abzählbar via $n \\mapsto 2n$ - eine unendliche Menge kann gleichmächtig zu einer echten Teilmenge sein.",
    counterexample: "<b>1.</b> $[0, 1]$ und $\\mathbb{R}$ sind NICHT abzählbar (Korollar 2.81) - 'unendlich' hat verschiedene Grössen.<br><b>2.</b> Eine surjektive Abbildung $\\mathbb{N} \\to X$ allein macht $X$ nicht abzählbar unendlich - $X$ könnte endlich sein (konstante Abbildung); die Definition verlangt eine <i>Bijektion</i>."
  },

  // ========================================================================
  // 1.8 BEWEISE
  // ========================================================================
  {
    id: "k1_beweismethoden",
    title: "1.8: Beweismethoden (Widerspruch, Kontraposition, Induktion)",
    category: "1.8 Beweise",
    type: "satz",
    front: "Beschreibe die drei wichtigsten <b>Beweismethoden</b>: Widerspruchsbeweis, Kontraposition und vollständige Induktion.",
    back: "&bull; <b>Widerspruchsbeweis (1.8.1):</b> Um $A$ zu zeigen, nimmt man $\\neg A$ an und leitet einen Widerspruch her - also muss $A$ wahr sein.<br><br>&bull; <b>Kontraposition (1.8.2):</b> Statt $A \\implies B$ zeigt man das äquivalente $\\neg B \\implies \\neg A$.<br><br>&bull; <b>Vollständige Induktion (1.8.3):</b> Um $A(n)$ für alle $n \\in \\mathbb{N}$ zu zeigen:<br>1. <b>Induktionsanfang</b> (Verankerung): Zeige $A(1)$.<br>2. <b>Induktionsschritt</b>: Zeige $\\forall n \\in \\mathbb{N}: A(n) \\implies A(n+1)$.",
    meta: "Skript: Abschnitte 1.8.1-1.8.3",
    explanation: "Die Induktion gleicht einem rekursiven Algorithmus: $A(10)$ gilt, weil $A(9)$ gilt, weil ... bis die Verankerung $A(1)$ die Kette trägt (in Kapitel 2 wird sie aus der Definition von $\\mathbb{N}$ <i>bewiesen</i>, Satz 2.15). Kontraposition und Widerspruch sind verwandt, aber nicht gleich: Die Kontraposition liefert eine direkte Implikationskette, der Widerspruchsbeweis darf <i>beide</i> Annahmen ($A$-Voraussetzungen und $\\neg B$) gleichzeitig verwenden.",
    example: "Widerspruch: Irrationalität von $\\sqrt{2}$ (Lemma 2.30). Kontraposition: '$n^2$ gerade $\\implies n$ gerade' via 'n ungerade $\\implies n^2$ ungerade'. Induktion: Gauss-Summe $1 + \\dots + n = \\frac{n(n+1)}{2}$ (Übung 1.85) und Lemma 1.3.",
    counterexample: "<b>1.</b> Ohne Induktionsanfang ist der Schritt wertlos: '$A(n): n = n+1$' erfüllt den Induktionsschritt perfekt ($n = n+1 \\Rightarrow n+1 = n+2$), ist aber für kein $n$ wahr!<br><b>2.</b> Der Induktionsschritt muss für ALLE $n$ funktionieren: Beim berühmten Fehlbeweis 'alle Pferde haben dieselbe Farbe' scheitert der Schritt genau beim Übergang $n = 1 \\to 2$ (die beiden Teilherden überlappen nicht)."
  }
];
