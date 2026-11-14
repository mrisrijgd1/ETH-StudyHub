/* Data: classmate's script-chapter flashcards (Kapitel 1-5). */
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
    category: "1.3 Logik",
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
    category: "1.3 Logik",
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
    category: "1.3 Logik",
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
    category: "1.4 Mengenlehre",
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
    category: "1.4 Mengenlehre",
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
    category: "1.4 Mengenlehre",
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
    category: "1.4 Mengenlehre",
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
    category: "1.4 Abbildungen",
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
    category: "1.4 Abbildungen",
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
    category: "1.4 Abbildungen",
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
    category: "1.4 Abbildungen",
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
    category: "1.4 Abbildungen",
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
    category: "1.4 Abbildungen",
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
    category: "1.4 Abbildungen",
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
    category: "1.4 Abbildungen",
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
    category: "1.7 Kardinalität",
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
    category: "1.7 Kardinalität",
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

// --- DATA_KAPITEL2.JS (TEIL 1) ---
// Chronologisch geordnetes, vollständiges Deck inklusive Inline-SVG Grafiken!

window.FLASHCARDS_KAPITEL_2 = [
    // --- 2.1 DIE AXIOME DER REELLEN ZAHLEN ---
    {
        title: "Abschnitt 2.1.1: Körperaxiome (Addition)",
        front: "Nenne das Axiom (1) für das Nullelement und (2) für das Negative Element der Addition in $\\mathbb{R}$.",
        back: "Axiome (Addition):<br>(1) Nullelement: $\\exists 0 \\in \\mathbb{R} \\; \\forall x \\in \\mathbb{R} : x + 0 = 0 + x = x$<br>(2) Negatives Element: $\\forall x \\in \\mathbb{R} \\; \\exists y \\in \\mathbb{R} : x + y = y + x = 0$ (wobei wir später $y = -x$ schreiben).",
        meta: "Skript: Abschnitt 2.1.1, S. 71",
        explanation: "Diese Axiome definieren, dass $\\mathbb{R}$ bezüglich der Addition eine abelsche Gruppe ist. <br><br><svg height='60' width='300'><line x1='50' y1='30' x2='250' y2='30' style='stroke:black;stroke-width:2' /><circle cx='150' cy='30' r='5' fill='#1f407a' /><text x='145' y='50' fill='#1f407a'>0</text><circle cx='200' cy='30' r='5' fill='green' /><text x='195' y='50' fill='green'>x</text><circle cx='100' cy='30' r='5' fill='red' /><text x='90' y='50' fill='red'>-x</text><path d='M 200 20 Q 150 -10 100 20' stroke='black' fill='transparent' marker-end='url(#arrowhead)'/><text x='130' y='10'>+ (-x)</text></svg>",
        example: "Für $x=5$ ist $y=-5$, sodass $5 + (-5) = 0$.",
        counterexample: "Die Menge der natürlichen Zahlen $\\mathbb{N} = \\{1, 2, ...\\}$ erfüllt diese Axiome nicht, da weder die Null noch negative Zahlen existieren."
    },
    {
        title: "Abschnitt 2.1.1: Körperaxiome (Multiplikation)",
        front: "Nenne das Axiom (5) für das Einselement und (6) für das Inverse Element der Multiplikation in $\\mathbb{R}$.",
        back: "Axiome (Multiplikation):<br>(5) Einselement: $\\exists 1 \\in \\mathbb{R}\\setminus\\{0\\} \\; \\forall x \\in \\mathbb{R} : x \\cdot 1 = 1 \\cdot x = x$<br>(6) Inverses Element: $\\forall x \\in \\mathbb{R}\\setminus\\{0\\} \\; \\exists y \\in \\mathbb{R} : x \\cdot y = y \\cdot x = 1$ (wir schreiben $y = x^{-1}$)",
        meta: "Skript: Abschnitt 2.1.1, S. 72",
        explanation: "Analog zur Addition bilden die reellen Zahlen (ohne die Null) bezüglich der Multiplikation eine Gruppe. Die Null muss bei der Inversenbildung ausgeschlossen werden.",
        example: "Für $x=2$ ist $y = \\frac{1}{2}$, denn $2 \\cdot \\frac{1}{2} = 1$.",
        counterexample: "Die ganzen Zahlen $\\mathbb{Z}$ erfüllen Axiom (6) nicht, da z.B. $2$ in $\\mathbb{Z}$ kein multiplikatives Inverses hat ($\\frac{1}{2} \\notin \\mathbb{Z}$)."
    },
    {
        title: "Abschnitt 2.1.1: Distributivgesetz",
        front: "Was besagt das Distributivgesetz (Axiom 9), welches Addition und Multiplikation koppelt?",
        back: "(9) Distributivgesetz: $\\forall x, y, z \\in \\mathbb{R} : x \\cdot (y + z) = x \\cdot y + x \\cdot z$ <br>sowie $(x + y) \\cdot z = x \\cdot z + y \\cdot z$.",
        meta: "Skript: Abschnitt 2.1.1, S. 73",
        explanation: "Das Distributivgesetz ist das einzige Körperaxiom, das die beiden Verknüpfungen (Addition und Multiplikation) miteinander verbindet. Es ermöglicht das Ausmultiplizieren und Ausklammern.<br><br><div style='padding: 10px; background: #eef; border-radius: 5px; font-family: monospace;'>x * [ y | z ] = [x*y | x*z]</div>",
        example: "$2 \\cdot (3 + 4) = 2 \\cdot 3 + 2 \\cdot 4 = 6 + 8 = 14$.",
        counterexample: "Eine Operation wie die Potenzierung ist nicht distributiv bezüglich der Addition: $(x+y)^2 \\neq x^2 + y^2$."
    },
    {
        title: "Abschnitt 2.1.2: Angeordnete Körper (Ordnung)",
        front: "Welche vier Axiome (10-13) definieren die lineare (totale) Ordnung $\\leq$ auf den reellen Zahlen?",
        back: "(10) Reflexivität: $x \\leq x$<br>(11) Antisymmetrie: $(x \\leq y \\wedge y \\leq x) \\implies x = y$<br>(12) Transitivität: $(x \\leq y \\wedge y \\leq z) \\implies x \\leq z$<br>(13) Linearität: $x \\leq y \\vee y \\leq x$",
        meta: "Skript: Abschnitt 2.1.2, S. 77",
        explanation: "Diese Axiome garantieren, dass wir alle Elemente von $\\mathbb{R}$ wie auf einem Lineal vergleichen können. Kein Element liegt 'ausserhalb' des Vergleichs.",
        example: "Transitivität: Wenn $2 \\leq 3$ und $3 \\leq 5$, dann gilt $2 \\leq 5$.",
        counterexample: "Die komplexen Zahlen $\\mathbb{C}$ lassen sich nicht mit einer solchen linearen Ordnung versehen, die kompatibel mit den Körperaxiomen ist."
    },
    {
        title: "Abschnitt 2.1.2: Angeordnete Körper (Kompatibilität)",
        front: "Wie sind die Ordnungsaxiome mit den Körperaxiomen gekoppelt? Nenne die Axiome (14) und (15).",
        back: "(14) Additive Kompatibilität: $(x \\leq y) \\implies (x + z \\leq y + z)$ für alle $x,y,z$<br>(15) Multiplikative Kompatibilität: $(0 \\leq x \\wedge 0 \\leq y) \\implies 0 \\leq x \\cdot y$",
        meta: "Skript: Abschnitt 2.1.2, S. 78",
        explanation: "Diese Axiome erlauben es uns, Ungleichungen auf beiden Seiten zu addieren oder mit positiven Zahlen zu multiplizieren, ohne dass die Ungleichung ihre Gültigkeit verliert.",
        example: "Aus $2 \\leq 3$ folgt (mit $z=4$): $2+4 \\leq 3+4 \\implies 6 \\leq 7$.",
        counterexample: "Multipliziert man eine Ungleichung mit einer negativen Zahl (z.B. $-1$), dreht sich das Ungleichheitszeichen um. Das leitet sich aus diesen Axiomen ab."
    },
    {
        title: "Abschnitt 2.1.3: Das Vollständigkeitsaxiom",
        front: "Was besagt das Vollständigkeitsaxiom (Axiom 16) für die reellen Zahlen (in der geometrischen Trennungs-Formulierung)?",
        back: "Seien $X, Y \\subseteq \\mathbb{R}$ nicht-leer, sodass für alle $x \\in X$ und $y \\in Y$ gilt: $x \\leq y$. Dann existiert ein $z \\in \\mathbb{R}$, sodass $x \\leq z \\leq y$ für alle $x \\in X, y \\in Y$.",
        meta: "Skript: Abschnitt 2.1.3, S. 79",
        explanation: "Dieses Axiom füllt die 'Lücken' der Zahlengeraden. Es garantiert, dass es einen Punkt gibt, der zwei getrennte Mengen exakt voneinander trennt.<br><br><svg height='50' width='300'><line x1='10' y1='25' x2='290' y2='25' style='stroke:black;stroke-width:2' /><rect x='10' y='15' width='100' height='20' fill='rgba(255,0,0,0.3)'/><text x='40' y='12' fill='red'>Menge X</text><rect x='190' y='15' width='100' height='20' fill='rgba(0,0,255,0.3)'/><text x='210' y='12' fill='blue'>Menge Y</text><circle cx='150' cy='25' r='4' fill='#1f407a' /><text x='145' y='45' fill='#1f407a'>z</text></svg>",
        example: "Ist $X = \\{x \\in \\mathbb{Q} : x^2 < 2\\}$ und $Y = \\{y \\in \\mathbb{Q}_{>0} : y^2 > 2\\}$, so trennt die reelle Zahl $z = \\sqrt{2}$ diese Mengen.",
        counterexample: "In den rationalen Zahlen $\\mathbb{Q}$ gibt es für das obige Beispiel kein solches $z \\in \\mathbb{Q}$. $\\mathbb{Q}$ ist nicht vollständig."
    },
    {
        title: "Wichtige Übung 2.11: Existenz der Wurzelfunktion",
        front: "Wie wird das Vollständigkeitsaxiom genutzt, um die Existenz der Quadratwurzel $\\sqrt{a}$ für $a > 0$ zu beweisen (Wichtige Übung 2.11)?",
        back: "Man betrachtet die beiden Mengen<br>$$X = \\{x \\in \\mathbb{R}_{\\geq 0} \\mid x^2 < a\\}, \\qquad Y = \\{y \\in \\mathbb{R}_{\\geq 0} \\mid y^2 > a\\}.$$<br>Diese erfüllen die Voraussetzung des Vollständigkeitsaxioms ($x \\leq y$ für alle $x \\in X$, $y \\in Y$), also existiert ein $c \\in \\mathbb{R}$ mit $x \\leq c \\leq y$ für alle $x \\in X, y \\in Y$. Mit $c + \\varepsilon \\notin X$ folgt $c^2 \\geq a$, mit $c - \\varepsilon \\notin Y$ folgt $c^2 \\leq a$, also $c^2 = a$. Man schreibt $c = \\sqrt{a}$; die Wurzelfunktion $\\sqrt{\\cdot}: \\mathbb{R}_{\\geq 0} \\to \\mathbb{R}_{\\geq 0}$ ist bijektiv, wachsend und multiplikativ ($\\sqrt{xy} = \\sqrt{x}\\sqrt{y}$).",
        meta: "Skript: Abschnitt 2.1.4, Wichtige Übung 2.11, S. 81",
        explanation: "Dies beweist, dass die reellen Zahlen die 'Lücke' schließen, die in den rationalen Zahlen bei $\\sqrt{2}$ bestand.",
        example: "Analog lässt sich die Existenz der n-ten Wurzel für jede positive reelle Zahl beweisen.",
        counterexample: "In $\\mathbb{Q}$ hat die Menge $A = \\{x \\in \\mathbb{Q} \\mid x^2 < 2\\}$ kein Supremum."
    },

    // --- 2.2 DIE NATÜRLICHEN ZAHLEN ---
    {
        title: "Definition 2.12: Induktive Teilmengen",
        front: "Wann heisst eine Teilmenge $M \\subseteq \\mathbb{R}$ induktiv?",
        back: "Eine Teilmenge $M \\subseteq \\mathbb{R}$ ist induktiv, falls gilt:<br>1. $1 \\in M$<br>2. $\\forall x \\in M : x + 1 \\in M$",
        meta: "Skript: Abschnitt 2.2.1, S. 83",
        explanation: "Dies formalisiert das 'Weiterzählen'. Wenn man bei 1 startet und immer +1 rechnet, bleibt man innerhalb der Menge.",
        example: "Die Menge $\\mathbb{R}_{\\geq 0}$ ist induktiv.",
        counterexample: "Die Menge $\\{1, 2, 3\\}$ ist nicht induktiv, da $3 \\in M$, aber $3+1 = 4 \\notin M$."
    },
    {
        title: "Definition 2.13 & Lemma 2.14: Die natürlichen Zahlen",
        front: "Wie werden die natürlichen Zahlen $\\mathbb{N}$ ausgehend von den reellen Zahlen und induktiven Teilmengen exakt definiert?",
        back: "<b>Definition 2.13:</b> Die Menge der natürlichen Zahlen ist der Durchschnitt aller induktiven Teilmengen von $\\mathbb{R}$:<br>$$\\mathbb{N} = \\bigcap_{M \\subseteq \\mathbb{R} \\text{ induktiv}} M$$<br><b>Lemma 2.14:</b> $\\mathbb{N}$ ist selbst induktiv und somit die <i>kleinste</i> induktive Teilmenge von $\\mathbb{R}$.",
        meta: "Skript: Definition 2.13 & Lemma 2.14, S. 83",
        explanation: "Damit ist $\\mathbb{N}$ nach Konstruktion die 'kleinstmögliche' induktive Teilmenge: $\\mathbb{N}$ ist in jeder induktiven Menge enthalten. Daraus folgt sofort $n \\geq 1$ für alle $n \\in \\mathbb{N}$ (denn $\\{x \\in \\mathbb{R} \\mid x \\geq 1\\}$ ist induktiv).",
        example: "$\\mathbb{N} = \\{1, 2, 3, 4, ...\\}$",
        counterexample: "Die Menge $\\mathbb{Z}$ ist zwar induktiv, aber nicht die kleinste, da sie auch $\\le 0$ enthält."
    },
    {
        title: "Satz 2.15: Prinzip der vollständigen Induktion",
        front: "Wie lautet das Prinzip der vollständigen Induktion formal?",
        back: "Sei $A(n)$ eine Aussage für jedes $n \\in \\mathbb{N}$. Wenn gilt:<br>1. (Induktionsanfang): $A(1)$ ist wahr.<br>2. (Induktionsschritt): $\\forall n \\in \\mathbb{N}: A(n) \\implies A(n+1)$ ist wahr.<br>Dann ist $A(n)$ für alle $n \\in \\mathbb{N}$ wahr.",
        meta: "Skript: Abschnitt 2.2.1",
        explanation: "Dies folgt direkt aus der Eigenschaft, dass $\\mathbb{N}$ die kleinste induktive Teilmenge von $\\mathbb{R}$ ist.",
        example: "Gaußsche Summenformel: Beweis, dass $\\sum_{k=1}^n k = \\frac{n(n+1)}{2}$.",
        counterexample: "Wenn der Induktionsanfang fehlt, kann man absurde Dinge beweisen (z.B. 'Alle Zahlen sind gleich groß')."
    },
    {
        title: "Lemma 2.18: Anordnung von N",
        front: "Was besagt Lemma 2.18 über die Anordnung und Vorgänger in der Menge der natürlichen Zahlen $\\mathbb{N}$?",
        back: "1. Für jedes $n \\in \\mathbb{N}$ gilt entweder $n = 1$ oder $n - 1 \\in \\mathbb{N}$.<br>2. Für $m, n \\in \\mathbb{N}$ mit $m \\leq n \\leq m + 1$ gilt zwingend $n = m$ oder $n = m + 1$.",
        meta: "Skript: Abschnitt 2.2.1, Lemma 2.18",
        explanation: "Dieses Lemma beweist die 'Diskretheit' (Lückenhaftigkeit) der natürlichen Zahlen aus den Körper- und Ordnungsaxiomen.",
        example: "Wenn $3 \\leq n \\leq 4$ für ein $n \\in \\mathbb{N}$ gilt, dann muss $n=3$ oder $n=4$ sein.",
        counterexample: "In $\\mathbb{Q}$ oder $\\mathbb{R}$ ist diese Eigenschaft falsch, da zwischen 3 und 4 unendlich viele Zahlen liegen."
    },
    {
        title: "Satz 2.22: Wohlordnungsprinzip",
        front: "Was besagt das Wohlordnungsprinzip für die natürlichen Zahlen $\\mathbb{N}$?",
        back: "Jede nicht-leere Teilmenge $A \\subseteq \\mathbb{N}$ besitzt ein Minimum (ein kleinstes Element).",
        meta: "Skript: Abschnitt 2.2.1, Satz 2.22",
        explanation: "Das Wohlordnungsprinzip ist äquivalent zur vollständigen Induktion. Es verhindert, dass man in $\\mathbb{N}$ unendlich lange 'nach unten' absteigen kann.",
        example: "Die Menge der geraden Zahlen $\\{2, 4, 6, ...\\}$ hat das Minimum 2.",
        counterexample: "Für die reellen Zahlen $\\mathbb{R}$ gilt dies nicht: Die offene Menge $(0, 1)$ hat kein Minimum."
    },
    {
        title: "Lemma 2.25 & 2.27: Ganze und Rationale Zahlen",
        front: "Wie sind die ganzen Zahlen $\\mathbb{Z}$ und die rationalen Zahlen $\\mathbb{Q}$ als Teilmengen von $\\mathbb{R}$ definiert?",
        back: "$\\mathbb{Z} = \\mathbb{N}_0 \\cup \\{-n \\mid n \\in \\mathbb{N}\\}$<br><br>$\\mathbb{Q} = \\left\\{ \\frac{m}{n} \\mid m \\in \\mathbb{Z}, n \\in \\mathbb{N} \\right\\}$",
        meta: "Skript: Abschnitt 2.2.2 & 2.2.3",
        explanation: "Die ganzen Zahlen erweitern $\\mathbb{N}$ um die additiven Inversen. Die rationalen Zahlen erweitern $\\mathbb{Z}$ um die multiplikativen Inversen.",
        example: "$-5 \\in \\mathbb{Z}$ und $\\frac{-5}{3} \\in \\mathbb{Q}$.",
        counterexample: "$\\sqrt{2} \\notin \\mathbb{Q}$. $\\mathbb{Z}$ ist kein Körper, da Divisionen wie $1/2$ aus $\\mathbb{Z}$ hinausführen."
    },
    {
        title: "Lemma 2.30: Irrationalität von Wurzel 2",
        front: "Wie lautet die Aussage von Lemma 2.30 bezüglich $\\sqrt{2}$ und was folgert das Skript daraus für die Menge $\\mathbb{Q}$?",
        back: "Die reelle Zahl $\\sqrt{2}$ ist irrational ($\\sqrt{2} \\notin \\mathbb{Q}$). <br>Insbesondere erfüllen die rationalen Zahlen das Vollständigkeitsaxiom nicht.",
        meta: "Skript: Abschnitt 2.2.3, S. 88",
        explanation: "Weil $\\mathbb{Q}$ alle Körper- und Ordnungsaxiome (1-15) erfüllt, aber die Gleichung $x^2 = 2$ in $\\mathbb{Q}$ unlösbar ist, zeigt dies, dass das Vollständigkeitsaxiom (16) unabhängig von Axiom 1-15 ist.",
        example: "Man kann $\\sqrt{2}$ beliebig nahe durch Brüche annähern, trifft es aber in $\\mathbb{Q}$ nie exakt.",
        counterexample: "$\\mathbb{R}$ besitzt keine solche Lücke."
    },
    {
        title: "Satz 2.31: Division mit Rest",
        front: "Formuliere den Satz zur Division mit Rest für natürliche Zahlen.",
        back: "Für alle $n \\in \\mathbb{N}_0$ und $d \\in \\mathbb{N}$ gibt es ein $q \\in \\mathbb{N}_0$ und ein $r \\in \\mathbb{N}_0$ mit $r < d$, welches wir den Rest nennen, so dass $n = qd + r$.",
        meta: "Skript: Abschnitt 2.2.4, S. 89",
        explanation: "Wichtig ist die strikte Bedingung, dass der Rest kleiner als der Divisor sein muss ($r < d$).",
        example: "$n=23, d=5 \\implies 23 = 4 \\cdot 5 + 3$ (Rest $r=3 < 5$).",
        counterexample: "$23 = 3 \\cdot 5 + 8$ ist mathematisch gleichwertig, aber hier ist $8 > 5$ (keine Division mit Rest)."
    },

    // --- 2.3 DIE KOMPLEXEN ZAHLEN ---
    {
        title: "Proposition 2.33: Die komplexen Zahlen",
        front: "Wie ist die Menge der komplexen Zahlen $\\mathbb{C}$ sowie ihre Addition und Multiplikation definiert?",
        back: "$\\mathbb{C} = \\mathbb{R} \\times \\mathbb{R}$.<br>Addition: $(x_1, y_1) + (x_2, y_2) = (x_1+x_2, y_1+y_2)$<br>Multiplikation: $(x_1, y_1) \\cdot (x_2, y_2) = (x_1 x_2 - y_1 y_2, x_1 y_2 + x_2 y_1)$",
        meta: "Skript: Abschnitt 2.3, Proposition 2.33",
        explanation: "Mit der Definition $i := (0, 1)$ gilt $i^2 = -1$. Somit lässt sich jedes Element als $x + iy$ schreiben. $\\mathbb{C}$ bildet einen Körper, der algebraisch abgeschlossen ist.",
        example: "$(0, 1) \\cdot (0, 1) = (0\\cdot 0 - 1\\cdot 1, 0\\cdot 1 + 1\\cdot 0) = (-1, 0) = -1$.",
        counterexample: "$\\mathbb{C}$ ist KEIN angeordneter Körper! Man kann auf $\\mathbb{C}$ keine Ordnung $\\leq$ definieren, die mit den Axiomen (10)-(15) verträglich ist."
    },
    {
        title: "Definition 2.36 & Lemma 2.37: Komplexe Konjugation",
        front: "Wie ist die <b>komplexe Konjugation</b> definiert und welche Eigenschaften hat sie (Lemma 2.37)?",
        back: "<b>Definition 2.36:</b> $\\overline{\\cdot}: \\mathbb{C} \\to \\mathbb{C}, \\; z = x + yi \\mapsto \\bar{z} = x - yi$.<br><br><b>Lemma 2.37:</b><br>(i) Für alle $z \\in \\mathbb{C}$ ist $z\\bar{z} \\in \\mathbb{R}$ und $z\\bar{z} \\geq 0$; es gilt $z\\bar{z} = 0 \\iff z = 0$.<br>(ii) $\\overline{z + w} = \\bar{z} + \\bar{w}$<br>(iii) $\\overline{z \\cdot w} = \\bar{z} \\cdot \\bar{w}$<br><br>Weiter gilt (Übung 2.40): $\\operatorname{Re}(z) = \\frac{z + \\bar{z}}{2}$, $\\operatorname{Im}(z) = \\frac{z - \\bar{z}}{2i}$ und $\\mathbb{R} = \\{z \\in \\mathbb{C} \\mid \\bar{z} = z\\}$.",
        meta: "Skript: Definition 2.36, Lemma 2.37, Übung 2.40, S. 95-96",
        explanation: "Geometrisch ist die Konjugation die Spiegelung an der reellen Achse. Sie ist der Schlüssel zur multiplikativen Inversen: $(x+yi)^{-1} = \\frac{\\bar{z}}{z\\bar{z}} = \\frac{x - yi}{x^2+y^2}$ für $z \\neq 0$, und zum Absolutbetrag: $|z| = \\sqrt{z\\bar{z}}$ (Definition 2.51).",
        example: "$\\overline{3 + 4i} = 3 - 4i$ und $(3+4i)(3-4i) = 9 + 16 = 25 \\geq 0$. Inverse: $(3+4i)^{-1} = \\frac{3-4i}{25}$.",
        counterexample: "Die Konjugation ist mit $+$ und $\\cdot$ verträglich, aber sie ist NICHT die Identität: $\\bar{z} = z$ gilt nur für reelle $z$. Für $z = i$ ist $\\bar{z} = -i \\neq i$."
    },
    {
        title: "Definition 2.42 & 2.43: Unbeschränkte Intervalle und Umgebungen",
        front: "Wie sind <b>unbeschränkte Intervalle</b> und <b>Umgebungen</b> eines Punktes $x \\in \\mathbb{R}$ definiert?",
        back: "<b>Definition 2.42:</b> Für $a, b \\in \\mathbb{R}$:<br>$[a, \\infty) = \\mathbb{R}_{\\geq a} = \\{x \\mid a \\leq x\\}$, $\\; (-\\infty, b] = \\mathbb{R}_{\\leq b}$ (abgeschlossen),<br>$(a, \\infty) = \\mathbb{R}_{> a}$, $\\; (-\\infty, b)$, $\\; (-\\infty, \\infty) = \\mathbb{R}$ (offen).<br><br><b>Definition 2.43:</b> Eine Menge, die ein offenes Intervall um $x$ enthält, heisst <b>Umgebung</b> von $x$. Für $\\delta > 0$ ist die <b>$\\delta$-Umgebung</b> von $x$ das Intervall $(x - \\delta, x + \\delta) = \\{y \\in \\mathbb{R} \\mid |x - y| < \\delta\\}$.",
        meta: "Skript: Definition 2.42 & 2.43, S. 97-98",
        explanation: "Die Symbole $\\pm\\infty$ sind hier reine Notation (keine reellen Zahlen). Umgebungen sind der Grundbaustein für Konvergenz und Stetigkeit: '$y$ nahe bei $x$' heisst '$y$ in einer kleinen $\\delta$-Umgebung von $x$'. Umgebungen werden auch Nachbarschaften genannt.",
        example: "$(1{,}9,\\; 2{,}1)$ ist die $0{,}1$-Umgebung von $2$. Auch $[0, 5]$ ist eine Umgebung von $2$ (sie enthält z.B. $(1, 3)$) - Umgebungen müssen nicht offen sein!",
        counterexample: "$[2, 3]$ ist KEINE Umgebung von $2$: Kein offenes Intervall um $2$ passt hinein, da Punkte links von $2$ fehlen."
    },

    // --- 2.4 INTERVALLE UND DER ABSOLUTBETRAG ---
    {
        title: "Definition 2.41: Intervalle",
        front: "Wie ist ein Intervall $I \\subseteq \\mathbb{R}$ formal konvex definiert (Eigenschaft) und welche 4 Standardarten (abgeschlossen, offen, halboffen) gibt es?",
        back: "Definition: Eine Teilmenge $I \\subseteq \\mathbb{R}$ heißt Intervall, falls für alle $x < y \\in I$ und alle $x < z < y$ auch $z \\in I$ gilt.<br><br>Arten:<br>1. Abgeschlossen: $[a, b] = \\{x \\mid a \\leq x \\leq b\\}$<br>2. Offen: $(a, b) = \\{x \\mid a < x < b\\}$<br>3/4. Halboffen: $[a, b)$ und $(a, b]$",
        meta: "Skript: Abschnitt 2.4.1, Definition 2.41",
        explanation: "Ein Intervall darf keine 'Löcher' haben.<br><br><svg height='40' width='300'><line x1='10' y1='20' x2='290' y2='20' style='stroke:black;stroke-width:2'/><line x1='80' y1='10' x2='80' y2='30' style='stroke:#1f407a;stroke-width:3'/><line x1='220' y1='10' x2='220' y2='30' style='stroke:#1f407a;stroke-width:3'/><rect x='80' y='15' width='140' height='10' fill='#1f407a'/><text x='75' y='10'>a</text><text x='215' y='10'>b</text><text x='110' y='40'>[a, b] (abgeschlossen)</text></svg>",
        example: "Das offene Intervall $(0, 1)$ enthält nicht seine Randpunkte 0 und 1.",
        counterexample: "Die Menge $[0, 1] \\cup [2, 3]$ ist kein Intervall, da $1.5$ fehlt."
    },
    {
        title: "Definition 2.45: Absolutbetrag in R",
        front: "Wie ist der Absolutbetrag $|x|$ für eine reelle Zahl $x \\in \\mathbb{R}$ definiert?",
        back: "$|x| := \\begin{cases} x, & \\text{falls } x \\geq 0 \\\\ -x, & \\text{falls } x < 0 \\end{cases}$",
        meta: "Skript: Abschnitt 2.4.2, Definition 2.45, S. 99",
        explanation: "Der Absolutbetrag macht jede Zahl nicht-negativ. Er entspricht dem geometrischen Abstand der Zahl $x$ vom Nullpunkt auf der Zahlengeraden.",
        example: "$|5| = 5$, $|-5| = -(-5) = 5$.",
        counterexample: "$-|x|$ ist immer $\\le 0$."
    },
    {
        title: "Folgerungen (a)-(h) aus Definition 2.45: Eigenschaften des Betrags",
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
        title: "Dreiecksungleichung auf R und C (Folgerung (g) / Eigenschaft (iii))",
        front: "Wie lautet die klassische Dreiecksungleichung für reelle bzw. komplexe Zahlen, und wo steht sie im Skript?",
        back: "Für alle $x, y \\in \\mathbb{R}$ (Folgerung (g) zu Definition 2.45) bzw. $z, w \\in \\mathbb{C}$ (Eigenschaft (iii) des Absolutbetrags auf $\\mathbb{C}$) gilt:<br>$$|x + y| \\leq |x| + |y|$$<br>Auf $\\mathbb{C}$ beruht der Beweis auf der <b>Cauchy-Schwarz-Ungleichung</b> $x_1x_2 + y_1y_2 \\leq |z||w|$.",
        meta: "Skript: Abschnitt 2.4.2 (Folgerung (g)) & 2.4.3 (Eigenschaft (iii)), S. 99/101",
        explanation: "Geometrisch bedeutet das: Der direkte Weg (die Summe $x+y$) ist niemals länger als der Umweg über die beiden Einzelstrecken.<br><br><svg height='120' width='250'><polygon points='50,100 200,100 150,30' style='fill:rgba(31,64,122,0.1);stroke:#1f407a;stroke-width:2' /><text x='110' y='115'>|x + y|</text><text x='70' y='60'>|x|</text><text x='185' y='60'>|y|</text></svg>",
        example: "Für $x = 3$ und $y = -5$: $|3 + (-5)| = 2$. Einzeln: $|3| + |-5| = 8$. Es gilt $2 \\leq 8$.",
        counterexample: "Gleichheit $|x+y| = |x| + |y|$ gilt in $\\mathbb{R}$ nur, wenn $x$ und $y$ dasselbe Vorzeichen haben."
    },
    {
        title: "Umgekehrte Dreiecksungleichung (Folgerung (h) / Eigenschaft (iv))",
        front: "Wie lautet die umgekehrte Dreiecksungleichung für reelle bzw. komplexe Zahlen?",
        back: "Für alle $x, y \\in \\mathbb{R}$ (Folgerung (h)) bzw. $z, w \\in \\mathbb{C}$ (Eigenschaft (iv)) gilt:<br>$$|x| - |y| \\leq |x - y|$$<br>Durch Vertauschen von $x, y$ und Folgerung (e) erhält man die kombinierte Form $\\big||x| - |y|\\big| \\leq |x - y|$.",
        meta: "Skript: Abschnitt 2.4.2 (Folgerung (h)) & 2.4.3 (Eigenschaft (iv)), S. 99/101",
        explanation: "Diese Form wird extrem oft verwendet, um Differenzen von Beträgen nach oben abzuschätzen. Sie folgt direkt aus der normalen Dreiecksungleichung (indem man $x = (x-y)+y$ schreibt).",
        example: "Für $x=3, y=5$: $||3| - |5|| = |-2| = 2$. Und $|3 - 5| = 2$. Es gilt $2 \\leq 2$.",
        counterexample: "Der Ausdruck $|x| - |y|$ kann negativ sein, weshalb der äußere Betrag auf der linken Seite essenziell ist!"
    },
    {
        title: "Definition 2.48 & Übung 2.49: Offene und abgeschlossene Mengen in R",
        front: "Wann heisst eine Teilmenge $A \\subseteq \\mathbb{R}$ (1) offen und (2) abgeschlossen?",
        back: "1. **Offen**: Für jedes $x \\in A$ existiert ein $\\epsilon > 0$, sodass die $\\epsilon$-Umgebung $(x - \\epsilon, x + \\epsilon) \\subseteq A$ gilt.<br><br>2. **Abgeschlossen**: Eine Menge heisst abgeschlossen, wenn ihr Komplement $\\mathbb{R} \\setminus A$ offen ist.<br><br><i>Übung 2.49:</i> $U$ ist genau dann offen, wenn jeder Punkt $x \\in U$ in einem offenen Intervall $I$ mit $I \\subseteq U$ liegt.",
        meta: "Skript: Abschnitt 2.4.2, Definition 2.48 & Übung 2.49, S. 100",
        explanation: "Offene Mengen enthalten ihren 'Rand' nicht; um jeden Punkt lässt sich noch ein winziges Intervall legen, das komplett in der Menge liegt.",
        example: "Das offene Intervall $(0, 1)$ ist eine offene Menge. Das abgeschlossene Intervall $[0, 1]$ ist abgeschlossen (denn sein Komplement $(-\\infty, 0) \\cup (1, \\infty)$ ist offen).",
        counterexample: "Halboffene Intervalle wie $[0, 1)$ sind WEDER offen NOCH abgeschlossen!"
    },
    {
        title: "Definition 2.51: Absolutbetrag auf C",
        front: "Wie berechnet sich der Absolutbetrag $|z|$ für eine komplexe Zahl $z = x + iy \\in \\mathbb{C}$?",
        back: "$$|z| := \\sqrt{x^2 + y^2}$$<br>(Mit dem komplex konjugierten $\\bar{z} = x - iy$ gilt auch $|z|^2 = z \\cdot \\bar{z}$)",
        meta: "Skript: Abschnitt 2.4.3",
        explanation: "Der Absolutbetrag entspricht dem euklidischen Abstand der Zahl $z$ vom Ursprung $(0,0)$ in der komplexen Zahlenebene (Satz des Pythagoras).",
        example: "Für $z = 3 + 4i$ ist $|z| = \\sqrt{9 + 16} = \\sqrt{25} = 5$.",
        counterexample: "Vorsicht: Es gilt NICHT $|x + iy| = |x| + |y|$! (Das wäre $3+4=7$)."
    },
    {
        title: "Definition 2.52: Offene Bälle",
        front: "Wie ist der offene Ball $B_r(z_0)$ um einen Punkt $z_0 \\in \\mathbb{C}$ mit Radius $r > 0$ definiert?",
        back: "$$B_r(z_0) := \\{z \\in \\mathbb{C} \\mid |z - z_0| < r\\}$$",
        meta: "Skript: Abschnitt 2.4.3",
        explanation: "In $\\mathbb{C}$ ist dies das Innere eines Kreises (ohne den Kreisrand). In $\\mathbb{R}$ entspricht der offene Ball exakt dem offenen Intervall $(z_0 - r, z_0 + r)$.<br><br><svg height='120' width='120'><circle cx='60' cy='60' r='50' style='fill:rgba(31,64,122,0.2);stroke:#1f407a;stroke-width:2;stroke-dasharray:5,5' /><circle cx='60' cy='60' r='3' fill='black' /><line x1='60' y1='60' x2='110' y2='60' style='stroke:black;stroke-width:1' /><text x='80' y='55'>r</text><text x='40' y='75'>z₀</text></svg>",
        example: "$B_1(0)$ in $\\mathbb{C}$ ist die Einheitskreisscheibe (ohne Rand).",
        counterexample: "Die Gleichung $|z - z_0| \\leq r$ würde auch den Rand einschließen (abgeschlossener Ball)."
    },
    {
        title: "Definition 2.54: Offene/Abgeschlossene Mengen in C",
        front: "Wann heisst eine Teilmenge $U \\subseteq \\mathbb{C}$ offen und wann abgeschlossen?",
        back: "**Offen**: Für jedes $z \\in U$ existiert ein Radius $r > 0$, sodass $B_r(z) \\subseteq U$.<br><br>**Abgeschlossen**: Wenn das Komplement $\\mathbb{C} \\setminus U$ offen ist.",
        meta: "Skript: Abschnitt 2.4.3",
        explanation: "Die Definition ist exakt analog zu $\\mathbb{R}$, nur dass wir hier offene Bälle $B_r(z)$ (Kreise) statt offener Intervalle $(x-\\epsilon, x+\\epsilon)$ verwenden.",
        example: "Jeder offene Ball $B_r(z)$ ist selbst eine offene Menge in $\\mathbb{C}$.",
        counterexample: "Die Menge $\\{z \\in \\mathbb{C} \\mid |z| \\leq 1\\}$ ist nicht offen, da um Punkte auf dem Rand ($|z|=1$) kein Ball gezeichnet werden kann, der komplett in der Menge liegt."
    },
    
    // --- 2.5 MAXIMUM, MINIMUM, SUPREMUM, INFIMUM ---
    {
        title: "Abschnitt 2.5: Supremum und Infimum (Definition)",
        front: "Was ist das Supremum ($\\sup A$) und das Infimum ($\\inf A$) einer Menge $A \\subseteq \\mathbb{R}$?",
        back: "**Supremum**: Die *kleinste obere Schranke* der Menge $A$.<br>**Infimum**: Die *größte untere Schranke* der Menge $A$.",
        meta: "Skript: Abschnitt 2.5.2",
        explanation: "Während ein Maximum/Minimum zwingend Teil der Menge sein muss, können Supremum und Infimum auch außerhalb liegen (als 'Begrenzungen' des Intervalls).",
        example: "Für das offene Intervall $A = (0, 1)$ ist $\\sup(A) = 1$ und $\\inf(A) = 0$. Ein Maximum oder Minimum existiert hier aber nicht!",
        counterexample: "Die Zahl $2$ ist zwar eine obere Schranke von $(0,1)$, aber nicht die *kleinste* obere Schranke, also kein Supremum."
    },
    {
        title: "Abschnitt 2.5.3: Uneigentliche Suprema und Infima",
        front: "Wie werden Supremum und Infimum für unbeschränkte oder leere Mengen in $\\mathbb{R}$ konventionell definiert?",
        back: "- Ist $A$ nach oben unbeschränkt: $\\sup(A) = \\infty$<br>- Ist $A$ nach unten unbeschränkt: $\\inf(A) = -\\infty$<br>- Für die leere Menge gilt paradoxerweise: $\\sup(\\emptyset) = -\\infty$ und $\\inf(\\emptyset) = \\infty$",
        meta: "Skript: Abschnitt 2.5.3",
        explanation: "Dass $\\sup(\\emptyset) = -\\infty$ ist, liegt daran, dass *jede* reelle Zahl eine obere Schranke der leeren Menge ist. Die *kleinste* aller denkbaren Schranken ist somit $-\\infty$.",
        example: "Für $A = \\mathbb{Z}$ gilt $\\sup(\\mathbb{Z}) = \\infty$ und $\\inf(\\mathbb{Z}) = -\\infty$.",
        counterexample: "Mit $\\infty$ darf in Gleichungen nicht wie mit normalen Zahlen gerechnet werden."
    },
    {
        title: "Proposition 2.62: Supremum unter Streckung",
        front: "Sei $A \\subseteq \\mathbb{R}$ eine nicht-leere, von oben beschränkte Teilmenge und $c > 0$. Was gilt für das Supremum der gestreckten Menge $cA$?",
        back: "Die Menge $cA = \\{ca \\mid a \\in A\\}$ ist ebenfalls von oben beschränkt und es gilt:<br>$$\\sup(cA) = c \\cdot \\sup(A)$$",
        meta: "Skript: Abschnitt 2.5",
        explanation: "Das Supremum verhält sich linear gegenüber der Multiplikation mit strikt positiven Konstanten.",
        example: "Für das Intervall $A = (0, 2)$ ist $\\sup(A) = 2$. Multipliziert man die Menge mit $c = 3$, erhält man $3A = (0, 6)$ und $\\sup(3A) = 3 \\cdot 2 = 6$.",
        counterexample: "Für $c < 0$ (z.B. $c = -1$) gilt dies nicht: $\\sup(-A) = -\\inf(A)$."
    },
    {
        title: "Proposition 2.63: Supremum unter Summen",
        front: "Seien $A, B \\subseteq \\mathbb{R}$ zwei nicht-leere, von oben beschränkte Teilmengen. Was gilt für das Supremum der Summenmenge $A + B$?",
        back: "Die Summenmenge $A + B = \\{a + b \\mid a \\in A, b \\in B\\}$ ist von oben beschränkt und es gilt:<br>$$\\sup(A + B) = \\sup(A) + \\sup(B)$$",
        meta: "Skript: Abschnitt 2.5",
        explanation: "Das Supremum ist absolut kompatibel mit der elementweisen Addition von Mengen.",
        example: "Sei $A = (0, 1)$ mit $\\sup(A) = 1$ und $B = [1, 2]$ mit $\\sup(B) = 2$. Dann ist $A + B = (1, 3)$ und $\\sup(A+B) = 1 + 2 = 3$.",
        counterexample: "Dies gilt nur für Summen. Für die Differenzmenge gilt $\\sup(A - B) = \\sup(A) - \\inf(B)$."
    },

    // --- 2.6 ERSTE KONSEQUENZEN DER VOLLSTÄNDIGKEIT ---
    {
        title: "Satz 2.68: Archimedisches Prinzip",
        front: "Nenne die drei Aussagen des Archimedischen Prinzips (Satz 2.68).",
        back: "(i) Jede nicht-leere, von oben beschränkte Teilmenge von $\\mathbb{Z}$ hat ein <b>Maximum</b>.<br>(ii) Für jedes $x \\in \\mathbb{R}$ existiert <b>genau ein</b> $n \\in \\mathbb{Z}$ mit $n \\leq x < n + 1$.<br>(iii) Für jedes $\\epsilon > 0$ existiert ein $n \\in \\mathbb{N}$ mit $\\frac{1}{n} < \\epsilon$.",
        meta: "Skript: Abschnitt 2.6.1, Satz 2.68, S. 110",
        explanation: "Geometrisch: Es gibt keine 'unendlich grossen' reellen Zahlen und keine 'unendlich kleinen' positiven Zahlen. Insbesondere folgt aus (ii): Für jedes $x$ gibt es ein $n \\in \\mathbb{N}$ mit $x < n$. Teil (ii) ist auch die Grundlage für die Abrundungsfunktion $\\lfloor x \\rfloor$.",
        example: "Zu $\\epsilon = 0{,}003$ liefert (iii) z.B. $n = 334$, denn $\\frac{1}{334} < 0{,}003$. Dies ist der Standardschritt in fast jedem Konvergenzbeweis ($\\frac{1}{n} \\to 0$).",
        counterexample: "In 'Nichtstandard-Modellen' gibt es unendlich große Zahlen, für die das Prinzip versagt. In $\\mathbb{R}$ ist dies ausgeschlossen."
    },
    {
        title: "Korollar 2.70: Dichtheit von Q in R",
        front: "Was bedeutet es, dass die rationalen Zahlen $\\mathbb{Q}$ dicht in $\\mathbb{R}$ liegen?",
        back: "Zwischen je zwei verschiedenen reellen Zahlen $x < y$ liegt mindestens eine rationale Zahl $q \\in \\mathbb{Q}$ (sodass $x < q < y$).",
        meta: "Skript: Abschnitt 2.6.1",
        explanation: "Man kann jede reelle Zahl beliebig genau durch Brüche (rationale Zahlen) approximieren. (Das Gleiche gilt umgekehrt auch für irrationale Zahlen!).",
        example: "Zwischen $x = \\sqrt{2}$ und $y = \\sqrt{2} + 0.001$ findet sich z.B. der Bruch $q = 1.4145 = \\frac{2829}{2000}$.",
        counterexample: "Die ganzen Zahlen $\\mathbb{Z}$ sind nicht dicht in $\\mathbb{R}$. Zwischen $1.1$ und $1.9$ liegt keine ganze Zahl."
    },
    {
        title: "Definition 2.73: Häufungspunkt einer Menge",
        front: "Wann heißt ein Punkt $x \\in \\mathbb{R}$ Häufungspunkt einer Teilmenge $A \\subseteq \\mathbb{R}$?",
        back: "Ein Punkt $x \\in \\mathbb{R}$ ist ein Häufungspunkt von $A$, falls für *jedes* $\\epsilon > 0$ die Menge $(x - \\epsilon, x + \\epsilon) \\cap A$ unendlich viele Punkte enthält.",
        meta: "Skript: Abschnitt 2.6.2",
        explanation: "Man kann sich dem Häufungspunkt durch Elemente aus der Menge $A$ beliebig dicht annähern. Der Punkt $x$ selbst muss nicht in $A$ liegen.",
        example: "Die Menge $A = \\{\\frac{1}{n} \\mid n \\in \\mathbb{N}\\}$ hat $0$ als einzigen Häufungspunkt.",
        counterexample: "Die Menge der ganzen Zahlen $\\mathbb{Z}$ hat keinen einzigen Häufungspunkt, da die Punkte zu isoliert sind (Abstand 1)."
    },
    {
        title: "Korollar 2.81: Überabzählbarkeit von R",
        front: "Was besagt Korollar 2.81 über die Mächtigkeit (Kardinalität) der reellen Zahlen $\\mathbb{R}$?",
        back: "Die Menge der reellen Zahlen $\\mathbb{R}$ (und ebenso das Intervall $[0,1]$) ist **überabzählbar**.",
        meta: "Skript: Abschnitt 2.6.4",
        explanation: "Man kann die reellen Zahlen niemals in einer durchnummerierten Liste $(x_1, x_2, ...)$ aufschreiben, ohne unendlich viele auszulassen. Der Beweis im Skript ist ein Spiel zwischen Alice und Bob: Zu jeder von Bob aufgelisteten Zahl $x_n$ verkleinert Alice ihr abgeschlossenes Intervall $I_n$ so, dass $x_n \\notin I_n$; das Intervallschachtelungsprinzip (Satz 2.77) liefert dann einen Punkt, den Bob nie auflistet.",
        example: "Allein das winzige Intervall $[0, 1]$ enthält überabzählbar viele Zahlen (genauso viele wie ganz $\\mathbb{R}$).",
        counterexample: "Die Mengen $\\mathbb{N}$, $\\mathbb{Z}$ und $\\mathbb{Q}$ sind alle abzählbar (sie lassen sich als Liste anordnen)."
    },
    {
        title: "Definition 2.82: Die Cantor-Menge (Eigenschaften)",
        front: "Was ist die Cantor-Menge (Konstruktion und 3 wichtigste Eigenschaften)?",
        back: "Sie entsteht, indem man vom Intervall $[0,1]$ iterativ das offene mittlere Drittel entfernt.<br><br>**Eigenschaften:**<br>1. Sie ist überabzählbar.<br>2. Sie enthält keine Intervalle (leeres Inneres).<br>3. Sie hat die 'Gesamtlänge' (das Maß) 0.",
        meta: "Skript: Abschnitt 2.6.5",
        explanation: "Die Cantor-Menge ist ein Fraktal. Sie ist völlig 'durchlöchert', besitzt aber trotzdem genauso viele Punkte wie ganz $\\mathbb{R}$.",
        example: "Punkte wie $0, 1, \\frac{1}{3}, \\frac{2}{3}, \\frac{1}{9}$ sind in der Cantor-Menge enthalten (die Randpunkte der entfernten Drittel).",
        counterexample: "Die rationalen Zahlen in $[0,1]$ haben ebenfalls leeres Inneres und Maß 0, sind aber nur abzählbar."
    },
    {
        title: "Zusammenfassung: Äquivalenz der Vollständigkeit",
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
        title: "Definition 2.56 & 2.57: Maximum und Minimum (Eindeutigkeit)",
        front: "Was gilt bezüglich der eindeutigen Bestimmtheit für das Maximum und Minimum einer Menge (z.B. eines abgeschlossenen Intervalls in $\\mathbb{R}$)?",
        back: "Wenn eine Teilmenge $A \\subseteq \\mathbb{R}$ ein Maximum (oder Minimum) besitzt, dann ist dieses **eindeutig bestimmt**.",
        meta: "Skript: Abschnitt 2.5",
        explanation: "Es kann nicht zwei verschiedene Maxima in einer total geordneten Menge wie den reellen Zahlen geben. Wenn $m_1$ und $m_2$ beides Maxima sind, muss $m_1 \\leq m_2$ und $m_2 \\leq m_1$ gelten, woraus zwingend $m_1 = m_2$ folgt (Antisymmetrie).",
        example: "Das abgeschlossene Intervall $[0, 1]$ hat exakt ein Maximum (die $1$) und exakt ein Minimum (die $0$).",
        counterexample: "Offene Intervalle wie $(0, 1)$ besitzen *kein* Maximum und *kein* Minimum (wohl aber Supremum und Infimum)."
    },
    {
        title: "Definition 2.58: Schranken und Beschränktheit",
        front: "Wann heißt eine Teilmenge $X \\subseteq \\mathbb{R}$ nach oben / unten beschränkt und wann einfach nur 'beschränkt'?",
        back: "- **Nach oben beschränkt**: Es gibt ein $s \\in \\mathbb{R}$, sodass $x \\leq s$ für alle $x \\in X$. ($s$ heißt obere Schranke).<br>- **Nach unten beschränkt**: Es gibt ein $s \\in \\mathbb{R}$, sodass $s \\leq x$ für alle $x \\in X$. ($s$ heißt untere Schranke).<br>- **Beschränkt**: Die Menge ist sowohl nach oben als auch nach unten beschränkt.",
        meta: "Skript: Abschnitt 2.5",
        explanation: "Geometrisch bedeutet Beschränktheit, dass die gesamte Menge in ein (möglicherweise sehr großes) endliches Intervall $[-M, M]$ passt.",
        example: "Die Menge $\\{1, 2, 3\\}$ ist beschränkt. $\\mathbb{N}$ ist nach unten beschränkt (Schranke 0 oder 1), aber nicht nach oben beschränkt.",
        counterexample: "$\\mathbb{Z}$ ist weder nach oben noch nach unten beschränkt."
    },
    {
        title: "Beweis von Satz 2.59: Existenz des Supremums",
        front: "Wie beweist man die Existenz des Supremums (Satz 2.59) für eine nicht-leere, nach oben beschränkte Menge $X \\subseteq \\mathbb{R}$ unter Verwendung des Vollständigkeitsaxioms?",
        back: "1. Sei $Y$ die Menge *aller* oberen Schranken von $X$. Da $X$ nach oben beschränkt ist, ist $Y$ nicht leer.<br>2. Da für alle $x \\in X$ und $s \\in Y$ die Ungleichung $x \\leq s$ gilt, greift das **Vollständigkeitsaxiom**.<br>3. Es existiert also ein Element $c \\in \\mathbb{R}$ mit $x \\leq c \\leq s$ für alle $x \\in X$ und $s \\in Y$.<br>4. Da $x \\leq c$ für alle $x \\in X$, ist $c$ eine obere Schranke.<br>5. Da $c \\leq s$ für *jede* obere Schranke $s \\in Y$, ist $c$ die *kleinste* obere Schranke (also das Supremum).",
        meta: "Skript: Abschnitt 2.5.2, Beweis von Satz 2.59",
        explanation: "Das Vollständigkeitsaxiom (Axiom 16) liefert uns direkt das exakte Element $c$, welches als Trennelement zwischen der Menge $X$ und all ihren oberen Schranken liegt.",
        example: "Für $X = [0, 1)$ trennt $c=1$ die Menge $X$ von all ihren oberen Schranken $Y = [1, \\infty)$.",
        counterexample: "In $\\mathbb{Q}$ würde dieser Beweis scheitern, da das Vollständigkeitsaxiom für $\\mathbb{Q}$ nicht gilt."
    },
    {
        title: "Übung 2.65: Supremum unter Vereinigung",
        front: "Seien $X, Y \\subseteq \\mathbb{R}$ zwei nach oben beschränkte Teilmengen. Was gilt für das Supremum der Vereinigung $X \\cup Y$?",
        back: "$$\\sup(X \\cup Y) = \\max \\{\\sup(X), \\sup(Y)\\}$$",
        meta: "Skript: Abschnitt 2.5.3, Übung 2.65",
        explanation: "Wenn man zwei Mengen zusammenwirft, wird die höchste Grenze der kombinierten Menge einfach vom 'Gewinner' (dem größeren Supremum) der beiden Einzelmengen diktiert.",
        example: "Sei $X = [0, 2]$ (Supremum 2) und $Y = (1, 5)$ (Supremum 5). Dann ist $X \\cup Y = [0, 5)$ und das Supremum ist $\\max\\{2, 5\\} = 5$.",
        counterexample: "Achtung: Dies gilt für Vereinigungen. Für den Durchschnitt $X \\cap Y$ gilt i.A. *nicht* $\\min\\{\\sup X, \\sup Y\\}$ (z.B. wenn der Durchschnitt leer ist oder weit drunter liegt)."
    },
    {
        title: "Übung 2.67: Supremum vom Betrag einer Menge",
        front: "Sei $A \\subseteq \\mathbb{R}$ beschränkt. Was gilt für das Supremum der Bildmenge $|A|$ (also der Menge aller Beträge der Elemente von $A$)?",
        back: "$$\\sup(|A|) = \\max \\{\\sup(A), -\\inf(A)\\}$$",
        meta: "Skript: Abschnitt 2.5.3, Übung 2.67",
        explanation: "Da der Betrag negative Zahlen ins Positive klappt, muss man prüfen, was weiter vom Nullpunkt entfernt ist: das größte positive Element ($\\sup A$) oder das 'tiefste' negative Element ($\\inf A$), welches durch den Betrag zu $-\\inf(A)$ umgeklappt wird.",
        example: "Für $A = [-5, 2]$ ist $\\sup A = 2$ und $\\inf A = -5$. Die Betragsmenge $|A|$ ist $[0, 5]$. Das Supremum ist $\\max\\{2, -(-5)\\} = 5$.",
        counterexample: "Die Aussage nützt nichts bei Summenmengen wie $|A+B|$."
    },
    {
        title: "Satz 2.68: Definition Ganzzahliger Anteil",
        front: "Wie ist der **ganzzahlige Anteil** (Abrundungsfunktion) $\\lfloor x \\rfloor$ für $x \\in \\mathbb{R}$ definiert und woraus folgt seine Existenz?",
        back: "Der ganzzahlige Anteil $\\lfloor x \\rfloor$ ist die **eindeutig bestimmte ganze Zahl** $n \\in \\mathbb{Z}$, für die gilt:<br>$$n \\leq x < n + 1$$<br>Die Existenz folgt direkt aus dem Archimedischen Prinzip.",
        meta: "Skript: Abschnitt 2.6.1, Satz 2.68",
        explanation: "Das Archimedische Prinzip garantiert, dass man auf dem Zahlenstrahl durch Zählen jede reelle Zahl 'einklemmen' kann.",
        example: "$\\lfloor 3.7 \\rfloor = 3$. Achtung bei negativen Zahlen: $\\lfloor -3.7 \\rfloor = -4$ (und nicht -3, denn $-4 \\leq -3.7 < -3$).",
        counterexample: "Runden (auf den nächsten Nachbarn) ist *nicht* dasselbe wie die Abrundungsfunktion."
    },
    {
        title: "Satz 2.68: Definition Gebrochener Anteil",
        front: "Wie ist der **gebrochene Anteil** (Nachkommaanteil) $\\{x\\}$ einer reellen Zahl $x \\in \\mathbb{R}$ definiert?",
        back: "Der gebrochene Anteil ist definiert als:<br>$$\\{x\\} = x - \\lfloor x \\rfloor$$<br>Daraus folgt immer, dass $\\{x\\} \\in [0, 1)$.",
        meta: "Skript: Abschnitt 2.6.1, Satz 2.68",
        explanation: "Man zieht einfach den abgerundeten ganzen Teil von der ursprünglichen Zahl ab. Übrig bleibt immer ein positiver Rest kleiner als 1.",
        example: "Für $x = 3.7$ ist $\\{3.7\\} = 3.7 - 3 = 0.7$.<br>Für $x = -3.7$ ist $\\{-3.7\\} = -3.7 - (-4) = 0.3$.",
        counterexample: "Der gebrochene Anteil ist niemals negativ!"
    },
    {
        title: "Korollar 2.70 (Beweis): Dichtheit von Q in R",
        front: "Wie beweist man die Dichtheit von $\\mathbb{Q}$ in $\\mathbb{R}$ (also, dass zwischen $x < y \\in \\mathbb{R}$ stets ein $q \\in \\mathbb{Q}$ liegt)?",
        back: "1. Da $y - x > 0$, existiert nach dem Archimedischen Prinzip ein $n \\in \\mathbb{N}$ mit $\\frac{1}{n} < y - x$, woraus $nx < ny - 1$ folgt.<br>2. Wir betrachten die Zahl $nx$ und ihren ganzzahligen Anteil $m := \\lfloor nx \\rfloor \\in \\mathbb{Z}$. Es gilt $m \\leq nx < m + 1$.<br>3. Aus $nx < m + 1$ und $m \\leq nx < ny - 1 \\implies m+1 < ny$ folgt insgesamt: $nx < m + 1 < ny$.<br>4. Division durch $n$ liefert $x < \\frac{m+1}{n} < y$. Setze $q = \\frac{m+1}{n} \\in \\mathbb{Q}$.",
        meta: "Skript: Abschnitt 2.6.1, Beweis von Korollar 2.70",
        explanation: "Die Kernidee: Man vergrößert den Abstand $y-x$ durch Streckung (mit $n$) so lange, bis er größer als 1 ist. In einem Abstand $>1$ muss zwangsläufig eine ganze Zahl liegen.",
        example: "Zwischen $x=0.333$ und $y=0.334$ wählt man $n=1000$. Es entsteht eine 'Lücke' von $1$ ($333 < 334$), aber $n=2000$ liefert $666 < 667 < 668$, also $q = 667/2000$.",
        counterexample: "Dieser Beweis benötigt zwingend das Archimedische Prinzip."
    },
    {
        title: "Übung 2.71: Reelle Zahl als Supremum rationaler Zahlen",
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
        title: "Übung 2.74 & 2.76: Charakterisierung von Häufungspunkten",
        front: "Wie lässt sich ein Häufungspunkt $x_0$ einer Menge $A \\subseteq \\mathbb{R}$ alternativ charakterisieren (Übung 2.76)?",
        back: "Ein Punkt $x_0 \\in \\mathbb{R}$ ist genau dann ein Häufungspunkt von $A$, wenn für **jedes** $\\epsilon > 0$ der Durchschnitt der $\\epsilon$-Umgebung $(x_0 - \\epsilon, x_0 + \\epsilon)$ mit der Menge $A$ **unendlich viele Punkte** enthält.",
        meta: "Skript: Abschnitt 2.6.2, Übung 2.76",
        explanation: "Diese Formulierung verdeutlicht den Namen 'Häufungspunkt': Egal wie klein man das Intervall um $x_0$ wählt, es drängen sich immer unendlich viele Punkte der Menge $A$ darin. In der Analysis ist dies das Pendant zum Schubfachprinzip für unendliche Mengen.",
        example: "Für $A = \\{1/n \\mid n \\in \\mathbb{N}\\}$ enthält jedes noch so kleine Intervall $(-\\epsilon, \\epsilon)$ um $0$ unendlich viele Brüche. Also ist $0$ ein Häufungspunkt.",
        counterexample: "Die Menge $\\mathbb{Z}$ hat keinen Häufungspunkt, da man für $x_0 = 1$ z.B. $\\epsilon = 0.5$ wählen kann, und das Intervall $(0.5, 1.5)$ enthält nur *endlich viele* (nämlich genau einen) Punkt aus $\\mathbb{Z}$."
    },
    {
        title: "Satz 2.75: Existenz von Häufungspunkten",
        front: "Was besagt Satz 2.75 über die Existenz von Häufungspunkten (das 'Schubfachprinzip der Analysis', auch Bolzano-Weierstrass für Mengen genannt)?",
        back: "Jede **beschränkte, unendliche** Teilmenge $A \\subseteq \\mathbb{R}$ besitzt **mindestens einen Häufungspunkt** in $\\mathbb{R}$.",
        meta: "Skript: Abschnitt 2.6.2, Satz 2.75",
        explanation: "Anschaulich: Wenn unendlich viele Punkte in ein endliches, begrenztes Intervall 'eingesperrt' werden, müssen sie sich zwingend an mindestens einer Stelle unendlich dicht zusammendrängen (näherungsweise Übereinstimmung).<br><br><svg height='100' width='300'><line x1='20' y1='50' x2='280' y2='50' style='stroke:black;stroke-width:2'/><line x1='50' y1='40' x2='50' y2='60' style='stroke:black;stroke-width:2'/><line x1='250' y1='40' x2='250' y2='60' style='stroke:black;stroke-width:2'/><text x='35' y='30'>-D</text><text x='240' y='30'>+D</text><circle cx='180' cy='50' r='5' fill='red'/><text x='175' y='35' fill='red'>x₀</text><circle cx='182' cy='50' r='2' fill='green'/><circle cx='178' cy='50' r='2' fill='green'/><circle cx='184' cy='50' r='2' fill='green'/><circle cx='176' cy='50' r='2' fill='green'/><circle cx='179' cy='48' r='2' fill='green'/><circle cx='181' cy='52' r='2' fill='green'/><circle cx='100' cy='50' r='2' fill='green'/><circle cx='130' cy='50' r='2' fill='green'/><circle cx='210' cy='50' r='2' fill='green'/><text x='70' y='80' fill='green'>Unendlich viele Punkte</text></svg>",
        example: "Die Menge $A = \\mathbb{Q} \\cap [0, 1]$ ist unendlich und durch $[0, 1]$ beschränkt. Tatsächlich ist *jeder* Punkt in $[0, 1]$ ein Häufungspunkt dieser Menge.",
        counterexample: "Die Menge $\\mathbb{N}$ ist unendlich, hat aber keinen Häufungspunkt, da sie *nicht beschränkt* ist."
    },
    {
        title: "Beweis von Satz 2.75 (Bolzano-Weierstrass)",
        front: "Wie beweist man den Satz von Bolzano-Weierstrass (Satz 2.75) mit Hilfe des Supremums?",
        back: "1. Da $A$ beschränkt ist, existiert ein Intervall $[-D, D]$, das $A$ enthält.<br>2. Betrachte die Menge $X = \\{x \\in \\mathbb{R} \\mid A \\cap (-\\infty, x] \\text{ ist endlich}\\}$.<br>3. $X$ ist nicht leer ($-D \\in X$) und nach oben beschränkt ($D$ ist obere Schranke). Also existiert $x_0 = \\sup(X)$.<br>4. Schiebt man $x_0$ um $\\epsilon$ nach links auf $x_0 - \\epsilon$, so liegen dort nur endlich viele Punkte von $A$.<br>5. Schiebt man $x_0$ um $\\epsilon$ nach rechts auf $x_0 + \\epsilon$, liegen dort (da $x_0$ das Supremum ist) *unendlich* viele Punkte.<br>6. Folglich müssen sich im Intervall $(x_0 - \\epsilon, x_0 + \\epsilon]$ unendlich viele Punkte von $A$ befinden. $x_0$ ist der gesuchte Häufungspunkt!",
        meta: "Skript: Abschnitt 2.6.2, Beweis von Satz 2.75",
        explanation: "Das Supremum spaltet die Zahlengerade exakt an dem Punkt $x_0$, an dem die Anzahl der angesammelten Punkte von 'endlich' auf 'unendlich' umschlägt.",
        example: "Dies ist eine der elegantesten Anwendungen des Vollständigkeitsaxioms in der Topologie von $\\mathbb{R}$.",
        counterexample: "Ohne das Supremums-Axiom (z.B. in $\\mathbb{Q}$) würde der Punkt $x_0$ eventuell in eine 'Lücke' fallen und in der Menge der Zahlen gar nicht existieren."
    },
    {
        title: "Satz 2.77: Intervallschachtelungsprinzip",
        front: "Wie lautet das Intervallschachtelungsprinzip (Satz 2.77) und woraus besteht der Durchschnitt exakt?",
        back: "Sei $I_1 \\supseteq I_2 \\supseteq I_3 \\supseteq \\dots$ eine Folge von **abgeschlossenen, beschränkten** Intervallen $I_n = [a_n, b_n]$.<br><br>Dann ist der Durchschnitt $\\bigcap_{n \\in \\mathbb{N}} I_n$ nicht-leer und es gilt exakt:<br>$$\\bigcap_{n \\in \\mathbb{N}} I_n = \\left[ \\sup \\{a_n \\mid n \\in \\mathbb{N}\\}, \\inf \\{b_n \\mid n \\in \\mathbb{N}\\} \\right]$$",
        meta: "Skript: Abschnitt 2.6.3, Satz 2.77",
        explanation: "Die linken Intervallgrenzen $a_n$ rücken nach rechts (sind von oben durch jedes $b_n$ beschränkt), bilden also ein Supremum. Die rechten Grenzen $b_n$ rücken nach links und bilden ein Infimum. Das Vollständigkeitsaxiom garantiert, dass $\\sup \\{a_n\\} \\leq \\inf \\{b_n\\}$ gilt.",
        example: "Für $I_n = [0, 1/n]$ rücken die linken Grenzen gar nicht ($a_n=0 \\implies \\sup=0$), die rechten Grenzen konvergieren gegen $0$ ($b_n=1/n \\implies \\inf=0$). Der Durchschnitt ist das Punktintervall $[0, 0] = \\{0\\}$.",
        counterexample: "Für offene Intervalle $(0, 1/n)$ gilt das nicht, der Durchschnitt ist leer. Für unbeschränkte Intervalle $[n, \\infty)$ ist der Durchschnitt ebenfalls leer."
    },
    {
        title: "Übung 2.82 & Korollar 2.83: Die Cantor-Menge",
        front: "Wie verhält sich die Cantor-Menge $C$ bezüglich ihrer Konstruktion (Intervalle) und Überabzählbarkeit?",
        back: "1. Im Konstruktionsschritt $C_{n+1}$ besteht die Menge aus genau **doppelt so vielen disjunkten, abgeschlossenen Intervallen** wie $C_n$.<br>2. Die Länge jedes dieser Intervalle schrumpft im Schritt $n+1$ auf ein Drittel ($\\frac{1}{3^n}$).<br>3. Durch Zuweisung einer Adressfolge (z.B. 'Links', 'Rechts', 'Links', ...) lässt sich eine Bijektion $f: C \\to \\{L, R\\}^{\\mathbb{N}_0}$ definieren.<br>4. Da der Adressraum überabzählbar ist, ist auch die Cantor-Menge **überabzählbar**.",
        meta: "Skript: Abschnitt 2.6.5, Korollar 2.83",
        explanation: "Obwohl im Limes der Durchschnitt all dieser Intervalle die Gesamtlänge 0 hat und keine vollständigen Intervalle mehr enthält, bleiben überabzählbar viele 'isolierte' Punkte übrig. Jede unendliche Folge aus Links/Rechts-Abbiegungen führt dank dem Intervallschachtelungsprinzip zu exakt einem Punkt.",
        example: "Der Punkt $1/3$ hat die Adresse 'Links, Rechts, Rechts, Rechts, ...', da er immer am rechten Rand der verbleibenden linken Drittel liegt.",
        counterexample: "Obwohl die Menge überabzählbar ist, enthält sie im Gegensatz zu $\\mathbb{R}$ keine Teilintervalle (leeres Inneres)."
    }
);
/* ==========================================================================
   FLASHCARDS KAPITEL 3: Funktionen und die reellen Zahlen
   Analysis I - Prof. Dr. Manfred Einsiedler
   ========================================================================== */

window.FLASHCARDS_KAPITEL_3 = [
  {
    id: "k3_potenzsummen",
    title: "Proposition 3.32 & 3.33: Summen von Potenzen",
    category: "Reelle Funktionen & Summen",
    type: "proposition",
    front: "Wie lautet die allgemeine Formel für die Summe der $d$-ten Potenzen $\\sum_{k=1}^n k^d$ und welche Eigenschaft besitzen die Koeffizienten des resultierenden Polynoms?",
    back: "Für jedes $d \\in \\mathbb{N}_0$ existiert ein Polynom $p_{d+1} \\in \\mathbb{Q}[x]$ vom Grad $d+1$ mit Leitkoeffizient $\\frac{1}{d+1}$, sodass für alle $n \\in \\mathbb{N}$ gilt:\n$$\\sum_{k=1}^n k^d = \\frac{1}{d+1} n^{d+1} + c_d n^d + \\dots + c_1 n + c_0$$\nInsbesondere gilt unter Verwendung von Binomialkoeffizienten $p_d(n) = \\binom{n}{d}$ die Hockey-Stick-Identität:\n$$\\sum_{k=0}^n \\binom{k}{d} = \\binom{n+1}{d+1}$$",
    meta: "Skript: §3.3, Proposition 3.32 & 3.33",
    explanation: "<b>Beweis-Idee & Struktur:</b><br>1. Die Formel für Binomialkoeffizienten $\\sum_{k=0}^n \\binom{k}{d} = \\binom{n+1}{d+1}$ folgt direkt aus Pascals Dreieck durch Induktion über $n$.<br>2. Jede Potenz $k^d$ lässt sich als Linearcombination von Binomialkoeffizienten $\\binom{k}{j}$ mit $j \\le d$ darstellen (Stirling-Zahlen zweiter Art).<br>3. Die Summation dieser Binomialkoeffizienten ergibt ein Polynom in $n$ vom Grad $d+1$.",
    example: "<b>Klassische Fälle:</b><br>• $d=1$: $\\sum_{k=1}^n k = \\frac{n(n+1)}{2} = \\frac{1}{2}n^2 + \\frac{1}{2}n$<br>• $d=2$: $\\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6} = \\frac{1}{3}n^3 + \\frac{1}{2}n^2 + \\frac{1}{6}n$<br>• $d=3$: $\\sum_{k=1}^n k^3 = \\left(\\frac{n(n+1)}{2}\\right)^2 = \\frac{1}{4}n^4 + \\frac{1}{2}n^3 + \\frac{1}{4}n^2$",
    counterexample: "<b>Achtung:</b> Die Koeffizienten $c_k$ sind zwar immer rational ($\\mathbb{Q}$), aber im Allgemeinen keine ganzen Zahlen ($\\mathbb{Z}$)."
  },
  {
    id: "k3_beschraenkt_fkt",
    title: "Definition: Beschränktheit von Funktionen",
    category: "Reelle Funktionen & Summen",
    type: "definition",
    front: "Wann heißt eine Funktion $f: D \\to \\mathbb{R}$ (auf $D \\subseteq \\mathbb{R}$) <b>nach oben beschränkt</b>, <b>nach unten beschränkt</b> bzw. <b>beschränkt</b>?",
    back: "Sei $D \\neq \\emptyset$ eine Menge und $f: D \\to \\mathbb{R}$ eine Funktion.<br>• $f$ heißt <b>nach oben beschränkt</b>, falls die Bildmenge $f(D)$ nach oben beschränkt ist, d.h.: $\\exists C \\in \\mathbb{R} \\; \\forall x \\in D: f(x) \\le C$.<br>• $f$ heißt <b>nach unten beschränkt</b>, falls $\\exists c \\in \\mathbb{R} \\; \\forall x \\in D: f(x) \\ge c$.<br>• $f$ heißt <b>beschränkt</b>, falls $f$ sowohl nach oben als auch nach unten beschränkt ist, d.h.:<br>$$\\exists M \\ge 0 \\; \\forall x \\in D: |f(x)| \\le M$$",
    meta: "Skript: §3.4.1",
    explanation: "Die Beschränktheit einer Funktion bezieht sich stets auf ihre <i>Bildmenge</i> $f(D) \\subseteq \\mathbb{R}$. Sie darf nicht mit der Beschränktheit des Definitionsbereichs $D$ verwechselt werden.",
    example: "<b>Beispiel:</b> $f: [0, 1] \\to \\mathbb{R}, f(x) = x^2$ ist beschränkt durch $M = 1$, da $|f(x)| \\le 1$ für alle $x \\in [0, 1]$.<br>Auch $\\sin: \\mathbb{R} \\to \\mathbb{R}$ ist beschränkt durch $M = 1$.",
    counterexample: "<b>Gegenbeispiel:</b> $f: (0, 1] \\to \\mathbb{R}, f(x) = \\frac{1}{x}$ ist nach unten beschränkt durch $c = 1$, aber <i>nicht</i> nach oben beschränkt (und damit unbeschränkt)."
  },
  {
    id: "k3_monotonie_fkt",
    title: "Definition: Monotonie von Funktionen",
    category: "Reelle Funktionen & Summen",
    type: "definition",
    front: "Wann heißt eine Funktion $f: D \\to \\mathbb{R}$ <b>monoton wachsend</b> bzw. <b>streng monoton wachsend</b>?",
    back: "Sei $D \\subseteq \\mathbb{R}$. Eine Funktion $f: D \\to \\mathbb{R}$ heißt:<br>• <b>monoton wachsend</b>, falls für alle $x_1, x_2 \\in D$ gilt:<br>$$x_1 < x_2 \\implies f(x_1) \\le f(x_2)$$<br>• <b>streng monoton wachsend</b>, falls für alle $x_1, x_2 \\in D$ gilt:<br>$$x_1 < x_2 \\implies f(x_1) < f(x_2)$$<br><i>(Analog definieren sich (streng) monoton fallend mit $\\ge$ bzw. $>$.)</i>",
    meta: "Skript: §3.4.2",
    explanation: "Monotonie garantiert Injektivität im strengen Fall: Jede streng monotone Funktion ist injektiv auf ihrem Definitionsbereich $D$. Auf Intervallen impliziert Injektivität stetiger Funktionen stets strenge Monotonie.",
    example: "<b>Beispiel:</b> $f: [0, \\infty) \\to \\mathbb{R}, f(x) = x^n$ ($n \\in \\mathbb{N}$) ist streng monoton wachsend.",
    counterexample: "<b>Gegenbeispiel:</b> $f: \\mathbb{R} \\to \\mathbb{R}, f(x) = x^2$ ist auf ganz $\\mathbb{R}$ <i>nicht</i> monoton (fallend auf $(-\\infty, 0]$, wachsend auf $[0, \\infty)$)."
  },
  {
    id: "k3_def_stetigkeit",
    title: "Definition 3.45: Stetigkeit an einem Punkt und auf einer Menge",
    category: "Stetigkeit",
    type: "definition",
    front: "Formulieren Sie die präzise $\\varepsilon$-$\\delta$-Definition für die <b>Stetigkeit einer Funktion $f: D \\to \\mathbb{R}$ an einem Punkt $x_0 \\in D$</b> sowie auf ganz $D$.",
    back: "Sei $D \\subseteq \\mathbb{R}$ und $f: D \\to \\mathbb{R}$.<br>• $f$ heißt <b>stetig im Punkt $x_0 \\in D$</b>, falls:<br>$$\\forall \\varepsilon > 0 \\; \\exists \\delta > 0 \\; \\forall x \\in D: |x - x_0| < \\delta \\implies |f(x) - f(x_0)| < \\varepsilon$$<br>• $f$ heißt <b>stetig</b> (auf $D$), falls $f$ in jedem Punkt $x_0 \\in D$ stetig ist.",
    meta: "Skript: §3.5, Definition 3.45",
    explanation: "<b>Intuition & Quantoren-Reihenfolge:</b><br>1. Zuerst gibt der Herausforderer eine Toleranz $\\varepsilon > 0$ für den Ausgabewert vor.<br>2. Wir müssen ein $\\delta > 0$ finden, sodass alle Eingabewerte $x$ im $\\delta$-Intervall um $x_0$ in den $\\varepsilon$-Streifen um $f(x_0)$ abgebildet werden.<br>3. Bei punktweiser Stetigkeit darf $\\delta = \\delta(\\varepsilon, x_0)$ von $\\varepsilon$ UND vom Punkt $x_0$ abhängen.<br><br><svg viewBox='0 0 320 160' style='width:100%; max-width:320px; display:block; margin:10px auto;'><rect x='20' y='20' width='280' height='120' fill='#f8f9fa' stroke='#ccc'/><line x1='120' y1='20' x2='120' y2='140' stroke='#888' stroke-dasharray='4'/><line x1='20' y1='80' x2='280' y2='80' stroke='#888' stroke-dasharray='4'/><rect x='80' y='50' width='80' height='60' fill='rgba(0,123,255,0.15)' stroke='#007bff'/><path d='M 30 130 Q 120 80 270 30' fill='none' stroke='#d9534f' stroke-width='3'/><circle cx='120' cy='80' r='4' fill='#007bff'/><text x='125' y='95' font-size='11' fill='#333'>x₀</text><text x='200' y='75' font-size='11' fill='#333'>f(x₀)</text><text x='165' y='45' font-size='10' fill='#007bff'>f(x₀)+ε</text><text x='165' y='120' font-size='10' fill='#007bff'>f(x₀)-ε</text><text x='80' y='152' font-size='10' fill='#007bff'>x₀-δ</text><text x='150' y='152' font-size='10' fill='#007bff'>x₀+δ</text></svg>",
    example: "<b>Beispiel:</b> $f(x) = ax$ ist stetig auf $\\mathbb{R}$. Für beliebiges $x_0 \\in \\mathbb{R}$ und $\\varepsilon > 0$ wählt man $\\delta = \\frac{\\varepsilon}{|a|}$ (für $a \\neq 0$). Dann gilt $|ax - ax_0| = |a||x - x_0| < |a| \\cdot \\frac{\\varepsilon}{|a|} = \\varepsilon$.",
    counterexample: "<b>Gegenbeispiel:</b> Die Gaußklammer-Funktion $f(x) = \\lfloor x \\rfloor$ ist unsteig an jeder Ganzzahl $x_0 \\in \\mathbb{Z}$. Für $\\varepsilon = 1/2$ existiert kein $\\delta > 0$, da für $x = x_0 - \\delta/2$ gilt $|f(x) - f(x_0)| = 1 > \\varepsilon$."
  },
  {
    id: "k3_stetigkeits_beispiele",
    title: "Beispiele und Gegenbeispiele zur Stetigkeit",
    category: "Stetigkeit",
    type: "lemma",
    front: "Nennen Sie elementare Klassen stetiger Funktionen sowie klassische Unstetigkeitsbeispiele aus dem Skript.",
    back: "<b>Stetige Funktionen:</b><br>1. Konstante Funktion $x \\mapsto c$<br>2. Identität / lineare Funktion $x \\mapsto ax$<br>3. Betragsfunktion $x \\mapsto |x|$<br>4. Potenzfunktionen $x \\mapsto x^n$ und $x \\mapsto \\sqrt{x}$ auf $[0, \\infty)$<br><br><b>Unstetige Funktionen:</b><br>1. Gaußklammer $x \\mapsto \\lfloor x \\rfloor$ (Sprungstellen bei $\\mathbb{Z}$)<br>2. Signum-Funktion $\\text{sgn}(x)$ bei $x_0 = 0$<br>3. Dirichlet-Funktion $\\mathbb{1}_{\\mathbb{Q}}$ (in jedem Punkt von $\\mathbb{R}$ unstetig!)",
    meta: "Skript: §3.47 - §3.48",
    explanation: "Die Stetigkeit der Betragsfunktion folgt direkt aus der umgekehrten Dreiecksungleichung: $||x| - |x_0|| \\le |x - x_0|$. Daher reicht die Wahl $\\delta = \\varepsilon$.",
    example: "Die Verknüpfung und Summe stetiger Grundbausteine (z.B. Polynome $p(x) = \\sum a_k x^k$) ergibt wiederum stetige Funktionen.",
    counterexample: "Die Dirichlet-Funktion $\\mathbb{1}_{\\mathbb{Q}}(x) = \\begin{cases}1 & x \\in \\mathbb{Q}\\ 0 & x \\notin \\mathbb{Q}\\end{cases}$ ist nirgends stetig, da in jedem Intervall sowohl rationale als auch irrationale Zahlen dicht liegen."
  },
  {
    id: "k3_stetigkeit_algeb",
    title: "Proposition 3.50 & 3.52: Rechnen mit stetigen Funktionen & Komposition",
    category: "Stetigkeit",
    type: "proposition",
    front: "Was lässt sich über die Summe, das Produkt, den Quotienten und die Hintereinanderausführung (Komposition) stetiger Funktionen aussagen?",
    back: "Seien $f, g: D \\to \\mathbb{R}$ stetig bei $x_0 \\in D$. Dann sind auch stetig bei $x_0$:<br>1. <b>Summe/Differenz:</b> $f + g$ und $f - g$<br>2. <b>Produkt:</b> $f \\cdot g$<br>3. <b>Quotient:</b> $\\frac{f}{g}$ (vorausgesetzt $g(x_0) \\neq 0$ auf einer Umgebung)<br>4. <b>Komposition:</b> Ist $f: D_1 \\to D_2$ stetig bei $x_0$ und $g: D_2 \\to \\mathbb{R}$ stetig bei $y_0 = f(x_0)$, so ist $g \\circ f: D_1 \\to \\mathbb{R}$ stetig bei $x_0$.",
    meta: "Skript: §3.5.0 - §3.5.2, Übung 3.53",
    explanation: "<b>Beweis-Blueprint (Komposition $g \\circ f$):</b><br>1. Sei $\\varepsilon > 0$. Da $g$ stetig bei $y_0 = f(x_0)$ ist, existiert ein $\\eta > 0$ mit:<br>$$|y - y_0| < \\eta \\implies |g(y) - g(y_0)| < \\varepsilon$$<br>2. Da $f$ stetig bei $x_0$ ist, wähle zu diesem $\\eta > 0$ ein $\\delta > 0$ mit:<br>$$|x - x_0| < \\delta \\implies |f(x) - f(x_0)| < \\eta$$<br>3. Einsetzen liefert: $|x - x_0| < \\delta \\implies |g(f(x)) - g(f(x_0))| < \\varepsilon$.",
    example: "Da $f(x) = x$ und $g(y) = \\sin(y)$ stetig sind, ist auch $h(x) = \\sin(x^2 + 1)$ als Komposition stetiger Funktionen stetig.",
    counterexample: "Beim Quotienten $\\frac{f(x)}{g(x)}$ ist die Bedingung $g(x_0) \\neq 0$ essenziell. Für $f(x)=1, g(x)=x$ ist $\\frac{1}{x}$ bei $x_0 = 0$ gar nicht definiert."
  },
  {
    id: "k3_zwischenwertsatz",
    title: "Satz 3.58: Der Zwischenwertsatz (ZWS / Bolzano)",
    category: "Zwischenwertsatz & Umkehrsatz",
    type: "satz",
    front: "Formulieren Sie den <b>Zwischenwertsatz (ZWS)</b> für stetige reellwertige Funktionen.",
    back: "Sei $I \\subseteq \\mathbb{R}$ ein <b>Intervall</b> und $f: I \\to \\mathbb{R}$ eine <b>stetige Funktion</b>. Seien $a, b \\in I$ mit $a < b$.<br>Für jedes $c \\in \\mathbb{R}$, das zwischen $f(a)$ und $f(b)$ liegt (d.h. $f(a) \\le c \\le f(b)$ oder $f(b) \\le c \\le f(a)$), existiert mindestens ein $x_0 \\in [a, b]$ mit:<br>$$f(x_0) = c$$",
    meta: "Skript: §3.6, Satz 3.58",
    explanation: "<b>Geometrische Anschaulichkeit & Gehalt:</b><br>Der Graph einer stetigen Funktion auf einem Intervall weist keine Löcher oder Sprünge auf. Er muss jede waagerechte Linie $y = c$ zwischen $f(a)$ und $f(b)$ mindestens einmal schneiden.<br><i>Hinweis:</i> Der ZWS ist äquivalent zum Vollständigkeitsaxiom von $\\mathbb{R}$!<br><br><svg viewBox='0 0 300 140' style='width:100%; max-width:300px; display:block; margin:10px auto;'><line x1='30' y1='120' x2='270' y2='120' stroke='#333' stroke-width='1.5'/><line x1='30' y1='20' x2='30' y2='120' stroke='#333' stroke-width='1.5'/><line x1='30' y1='65' x2='270' y2='65' stroke='#d9534f' stroke-dasharray='4'/><path d='M 50 100 Q 120 10 160 70 T 250 30' fill='none' stroke='#007bff' stroke-width='2.5'/><circle cx='50' cy='100' r='4' fill='#333'/><circle cx='250' cy='30' r='4' fill='#333'/><circle cx='100' cy='65' r='4' fill='#d9534f'/><circle cx='165' cy='65' r='4' fill='#d9534f'/><line x1='100' y1='65' x2='100' y2='120' stroke='#d9534f' stroke-dasharray='2'/><text x='45' y='135' font-size='10'>a</text><text x='245' y='135' font-size='10'>b</text><text x='95' y='135' font-size='10' fill='#d9534f'>x₀</text><text x='15' y='70' font-size='10' fill='#d9534f'>c</text></svg>",
    example: "<b>Existenz von Wurzeln:</b> $f(x) = x^2 - 2$ auf $[1, 2]$. Da $f(1) = -1 < 0$ und $f(2) = 2 > 0$, existiert nach ZWS ein $x_0 \\in (1, 2)$ mit $f(x_0) = 0$, also $x_0 = \\sqrt{2}$.",
    counterexample: "<b>Wichtigkeit der Stetigkeit:</b> $f: [-1, 1] \\to \\mathbb{R}, f(x) = \\begin{cases} -1 & x < 0 \\\\ 1 & x \\ge 0 \\end{cases}$. Hier existiert kein $x$ mit $f(x) = 0$, obwohl $0$ zwischen $f(-1)=-1$ und $f(1)=1$ liegt!"
  },
  {
    id: "k3_beweis_zws",
    title: "Beweis-Blueprint: Zwischenwertsatz",
    category: "Zwischenwertsatz & Umkehrsatz",
    type: "beweis",
    front: "Skizzieren Sie den mathematischen Beweis des Zwischenwertsatzes (Satz 3.58) unter Verwendung des Supremumsprinzips.",
    back: "<b>Beweisschema (o.B.d.A. $f(a) < c < f(b)$):</b><br>1. Definierte die Menge $M = \\{t \\in [a, b] \\mid f(t) \\le c\\}$.<br>2. $M$ ist nicht-leer ($a \\in M$) und nach oben durch $b$ beschränkt.<br>3. Nach dem Vollständigkeitsaxiom existiert $x_0 = \\sup M \\in [a, b]$.<br>4. Zeige $f(x_0) = c$ durch Ausschluss der Fälle $f(x_0) < c$ und $f(x_0) > c$ via Stetigkeit:<br>&nbsp;&nbsp;• Wäre $f(x_0) < c$, wähle $\\varepsilon = c - f(x_0) > 0$. Wegen Stetigkeit gäbe es ein $\\delta > 0$ mit $f(x) < c$ für $x \\in (x_0, x_0+\\delta)$, im Widerspruch zu $x_0 = \\sup M$.<br>&nbsp;&nbsp;• Wäre $f(x_0) > c$, gäbe es analog ein $\\delta > 0$ mit $f(x) > c$ in $(x_0-\\delta, x_0]$, im Widerspruch dazu, dass $x_0$ kleinste obere Schranke ist.",
    meta: "Skript: §3.6, Beweis von Satz 3.58",
    explanation: "Der Beweis zeigt fundamentale Analysis-Technik: Eine gesuchte Stelle wird als Supremum/Infimum einer geeigneten Menge konstruiert, und die Gleichheit wird durch $\\varepsilon$-Umggebungen und Stetigkeit nachgewiesen.",
    example: "Vergleiche alternativ die Intervallschachtelung: $I_0 = [a,b]$, halbiere stets und wähle das Teilintervall, an dessen Endpunkten Vorzeichenwechsel von $f(x)-c$ vorliegt.",
    counterexample: "In $\\mathbb{Q}$ gilt der ZWS nicht: $f: \\mathbb{Q} \\cap [1, 2] \\to \\mathbb{Q}, f(x) = x^2 - 2$ hat keinen Nulldurchgang in $\\mathbb{Q}$, da $\\sqrt{2} \\notin \\mathbb{Q}$."
  },
  {
    id: "k3_nullstellen_polynome",
    title: "Übung 3.60: Nullstellen von Polynomen ungeraden Grades",
    category: "Zwischenwertsatz & Umkehrsatz",
    type: "proposition",
    front: "Zeigen Sie mit dem Zwischenwertsatz, dass jedes reelle Polynom <b>ungeraden Grades</b> mindestens eine reelle Nullstelle besitzt.",
    back: "Sei $p(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_0$ mit $a_n \\neq 0$ und $n$ ungerade.<br>O.B.d.A. sei $a_n > 0$. Ausklammern von $x^n$ zeigt:<br>$$\\lim_{x \\to +\\infty} p(x) = +\\infty \\quad \\text{und} \\quad \\lim_{x \\to -\\infty} p(x) = -\\infty$$\nSomit existieren $a < 0 < b$ mit $p(a) < 0$ und $p(b) > 0$.<br>Da $p$ als Polynom stetig ist, existiert nach dem Zwischenwertsatz ein $x_0 \\in (a, b)$ mit $p(x_0) = 0$.",
    meta: "Skript: §3.6, Übung 3.60",
    explanation: "Das Grenzverhalten wird dominiert durch den führenden Term $a_n x^n$. Da $n$ ungerade ist, wechselt $x^n$ das Vorzeichen zwischen $-\\infty$ und $+\\infty$.",
    example: "$p(x) = x^3 - x - 1$. Es gilt $p(1) = -1 < 0$ und $p(2) = 5 > 0$. Nach ZWS liegt mindestens eine Nullstelle in $(1, 2)$.",
    counterexample: "<b>Gerader Grad:</b> $p(x) = x^2 + 1$ ist stets $\\ge 1 > 0$ für alle $x \\in \\mathbb{R}$ und hat keine reelle Nullstelle."
  },
  {
    id: "k3_injektiv_monoton",
    title: "Übung 3.61: Injektivität und Monotonie stetiger Funktionen",
    category: "Zwischenwertsatz & Umkehrsatz",
    type: "lemma",
    front: "Welcher Zusammenhang besteht zwischen <b>Injektivität</b> und <b>Monotonie</b> für stetige Funktionen auf einem Intervall?",
    back: "Sei $I \\subseteq \\mathbb{R}$ ein Intervall und $f: I \\to \\mathbb{R}$ eine stetige Funktion.<br>Dann gilt:<br>$$f \\text{ ist injektiv} \\iff f \\text{ ist streng monoton (wachsend oder fallend)}$$",
    meta: "Skript: §3.6, Übung 3.61",
    explanation: "<b>Beweis-Idee:</b><br>• Streng monoton $\\implies$ injektiv ist trivial.<br>• Injektiv $\\implies$ streng monoton: Wären drei Punkte $x_1 < x_2 < x_3$ so gelegen, dass $f(x_2)$ nicht zwischen $f(x_1)$ und $f(x_3)$ liegt, würde nach dem Zwischenwertsatz ein Wert doppelt angenommen, im Widerspruch zur Injektivität.",
    example: "$f(x) = x^3$ auf $\\mathbb{R}$ ist stetig und injektiv, somit streng monoton wachsend.",
    counterexample: "Auf Nicht-Intervallen gilt diese Aussage nicht! $f: [0, 1] \\cup [2, 3] \\to \\mathbb{R}$ mit $f(x) = x$ auf $[0,1]$ und $f(x) = 5-x$ auf $[2,3]$ ist stetig und injektiv, aber weder monoton wachsend noch fallend."
  },
  {
    id: "k3_umkehrsatz",
    title: "Satz 3.62: Der Satz über die Umkehrabbildung (Umkehrsatz)",
    category: "Zwischenwertsatz & Umkehrsatz",
    type: "satz",
    front: "Formulieren Sie den <b>Satz über die Umkehrabbildung</b> für stetige, streng monotone Funktionen.",
    back: "Sei $I \\subseteq \\mathbb{R}$ ein Intervall und $f: I \\to \\mathbb{R}$ eine <b>stetige, streng monotone</b> Funktion.<br>Dann gilt:<br>1. Das Bild $J = f(I) \\subseteq \\mathbb{R}$ ist wiederum ein <b>Intervall</b>.<br>2. Die Umkehrfunktion $f^{-1}: J \\to I$ existiert, ist <b>bijektiv</b>, <b>streng monoton</b> (mit demselben Monotonieverhalten wie $f$) und <b>stetig</b>.<br>3. Ist $I = [a, b]$, so ist $J = [f(a), f(b)]$ (falls $f$ wachsend) bzw. $J = [f(b), f(a)]$ (falls $f$ fallend).",
    meta: "Skript: §3.7, Satz 3.62",
    explanation: "Der Umkehrsatz garantiert, dass beim Umkehren einer stetigen monotonen Funktion auf einem Intervall weder die Stetigkeit noch die Intervalleigenschaft verloren gehen.",
    example: "$f: [0, \\infty) \\to [0, \\infty), f(x) = x^n$ ist stetig und streng monoton wachsend. Die Umkehrfunktion $f^{-1}(y) = \\sqrt[n]{y}$ ist auf $[0, \\infty)$ stetig und streng monoton wachsend.",
    counterexample: "Ohne Intervall-Eigenschaft des Definitionsbereichs kann die Umkehrfunktion unstetig sein! Bsp: $f: [0, 1) \\cup [2, 3] \\to [0, 2]$, wo die Umkehrfunktion bei $f(2)$ einen Sprung macht."
  },
  {
    id: "k3_beweis_umkehrsatz",
    title: "Beweis-Blueprint: Stetigkeit der Umkehrfunktion",
    category: "Zwischenwertsatz & Umkehrsatz",
    type: "beweis",
    front: "Wie zeigt man im Umkehrsatz (Satz 3.62) die <b>Stetigkeit der Umkehrfunktion $f^{-1}$</b> an einem inneren Punkt $y_0 = f(x_0)$?",
    back: "<b>Beweis-Skizze (für $f$ streng monoton wachsend):</b><br>1. Wähle zu $\\varepsilon > 0$ Punkte $x_- = x_0 - \\varepsilon$ und $x_+ = x_0 + \\varepsilon$ in $I$.<br>2. Wegen der strengen Monotonie von $f$ gilt für die Bilder:<br>$$y_- = f(x_-) < y_0 < f(x_+) = y_+$$<br>3. Wähle $\\delta = \\min\\{y_0 - y_-, y_+ - y_0\\} > 0$.<br>4. Für alle $y \\in f(I)$ mit $|y - y_0| < \\delta$ gilt $y_- < y < y_+$.<br>5. Anwenden der streng monoton wachsenden Umkehrfunktion $f^{-1}$ liefert:<br>$$x_0 - \\varepsilon = x_- < f^{-1}(y) < x_+ = x_0 + \\varepsilon \\implies |f^{-1}(y) - f^{-1}(y_0)| < \\varepsilon$$",
    meta: "Skript: §3.7, Beweis von Satz 3.62",
    explanation: "Die Strenge Monotonie übersetzt ein $\\varepsilon$-Intervall um $x_0$ im Urbildraum direkt in ein offenes $\\delta$-Intervall um $y_0$ im Bildraum.",
    example: "Anwendung auf $y = x^2$: Ein $\\varepsilon$-Streifen um $x_0 = 2$ wird durch $f(2-\\varepsilon)$ und $f(2+\\varepsilon)$ eingegrenzt, was das $\\delta$ für $y_0 = 4$ liefert.",
    counterexample: "Wenn $f$ nicht streng monoton ist, ist $f$ nicht injektiv und $f^{-1}$ existiert gar nicht erst als Funktion."
  },
  {
    id: "k3_wurzeln_potenzen",
    title: "Anwendung: $n$-te Wurzeln und Rationale Potenzen",
    category: "Zwischenwertsatz & Umkehrsatz",
    type: "proposition",
    front: "Wie werden allgemeine rationale Potenzen $x^{m/n}$ auf $[0, \\infty)$ definiert und welche Eigenschaften besitzen sie?",
    back: "1. Nach dem Umkehrsatz existiert für jedes $n \\in \\mathbb{N}$ die stetige, streng monotone Umkehrabbildung der Potenzfunktion $x \\mapsto x^n$ auf $[0, \\infty)$:<br>$$x \\in [0, \\infty) \\mapsto \\sqrt[n]{x} \\in [0, \\infty)$$<br>2. Für $x \\in [0, \\infty)$ und $r = \\frac{m}{n} \\in \\mathbb{Q}_{>0}$ definiert man:<br>$$x^{m/n} := \\sqrt[n]{x^m} = (\\sqrt[n]{x})^m$$<br>3. Diese Potenzfunktionen sind stetig und erfüllen alle Potenzgesetze (z.B. $x^{r_1+r_2} = x^{r_1} x^{r_2}$).",
    meta: "Skript: §3.7, Wichtige Übung 3.64",
    explanation: "Der Umkehrsatz liefert die exakte mathematische Fundierung für Wurzelausdrücke und rationale Exponenten ohne algebraische Lücken.",
    example: "$f(x) = x^{2/3} = \\sqrt[3]{x^2}$ ist auf ganz $[0, \\infty)$ als Zusammensetzung stetiger Funktionen stetig.",
    counterexample: "Für negative Basen $x < 0$ sind gebrochene Potenzen im reellen nicht allgemein wohldefiniert (z.B. $(-1)^{1/2} = \\sqrt{-1} \\notin \\mathbb{R}$)."
  },
  {
    id: "k3_wurzeln_irrational",
    title: "Lemma 3.65: Irrationalität von Wurzeln aus natürlichen Zahlen",
    category: "Zwischenwertsatz & Umkehrsatz",
    type: "lemma",
    front: "Wann ist die $m$-te Wurzel $\\sqrt[m]{k}$ einer natürlichen Zahl $k \\in \\mathbb{N}$ rational?",
    back: "Seien $m, k \\in \\mathbb{N}$.<br>Die $m$-te Wurzel $\\sqrt[m]{k}$ ist genau dann rational, wenn sie eine <b>ganze Zahl</b> ist:<br>$$\\sqrt[m]{k} \\in \\mathbb{Q} \\iff \\sqrt[m]{k} \\in \\mathbb{N}$$<br><i>(Äquivalent: Jeder Primfaktor in der Primfaktorzerlegung von $k$ tritt mit einem Vielfachen des Exponenten $m$ auf.)</i>",
    meta: "Skript: §3.7.1, Lemma 3.65 & Übung 3.66",
    explanation: "<b>Beweis-Blueprint:</b><br>1. Nimm an $\\sqrt[m]{k} = \\frac{p}{q}$ mit gekürztem Bruch ($p, q \\in \\mathbb{N}$, $\\text{ggT}(p, q) = 1$).<br>2. Potenzieren ergibt $k \\cdot q^m = p^m$.<br>3. Ist $q > 1$, so teilt jeder Primfaktor von $q$ auch $p^m$ und damit $p$, im Widerspruch zu $\\text{ggT}(p,q)=1$.<br>4. Folglich muss $q = 1$ gelten, womit $\\sqrt[m]{k} = p \\in \\mathbb{N}$.",
    example: "• $\\sqrt{2} \\notin \\mathbb{Q}$, da $2$ keine Quadratzahl ist ($2 \\neq n^2$).<br>• $\\sqrt[3]{8} = 2 \\in \\mathbb{Q}$, da $8 = 2^3$.",
    counterexample: "$\\sqrt{3}$ ist nicht rational, obwohl $3$ eine natürliche Zahl ist, da $3$ nicht das Quadrat einer natürlichen Zahl ist."
  },
  {
    id: "k3_beschraenkt_kompakt",
    title: "Satz 3.67: Beschränktheit auf kompakten Intervallen",
    category: "Kompakte Intervalle & Gleichmäßige Stetigkeit",
    type: "satz",
    front: "Formulieren Sie den Satz über die <b>Beschränktheit stetiger Funktionen</b> auf kompakten Intervallen.",
    back: "Seien $a, b \\in \\mathbb{R}$ mit $a < b$ und sei $f: [a, b] \\to \\mathbb{R}$ (oder $\\mathbb{C}$) eine <b>stetige Funktion</b> auf dem kompakten Intervall $[a, b]$.<br>Dann ist $f$ <b>beschränkt</b>, d.h. es existiert ein $M \\in \\mathbb{R}$ mit:<br>$$\\forall x \\in [a, b]: |f(x)| \\le M$$",
    meta: "Skript: §3.8.1, Satz 3.67",
    explanation: "Ein Intervall $[a,b]$ ist <b>kompakt</b>, wenn es sowohl <i>beschränkt</i> als auch <i>abgeschlossen</i> ist. Beide Eigenschaften sind für die Gültigkeit des Satzes unentbehrlich!",
    example: "$f(x) = x^3 - 3x$ auf $[-2, 2]$ ist stetig und kompakt definiert, also beschränkt (z.B. durch $M = 10$).",
    counterexample: "<b>Verletzung der Abgeschlossenheit:</b> $f(x) = \\frac{1}{x}$ auf $(0, 1]$ ist stetig, aber unbeschränkt.<br><b>Verletzung der Beschränktheit des Intervalls:</b> $f(x) = x$ auf $[0, \\infty)$ ist stetig, aber unbeschränkt."
  },
  {
    id: "k3_beweis_beschraenkt_kompakt",
    title: "Beweis-Blueprint: Beschränktheit auf kompakten Intervallen",
    category: "Kompakte Intervalle & Gleichmäßige Stetigkeit",
    type: "beweis",
    front: "Skizzieren Sie den Widerspruchsbeweis für Satz 3.67 (Beschränktheit stetiger Funktionen auf $[a, b]$).",
    back: "<b>Beweis-Schema (via Intervallschachtelung / Bolzano-Weierstraß):</b><br>1. <b>Widerspruchsannahme:</b> $f$ ist unbeschränkt auf $I_0 = [a, b]$.<br>2. Halbiere $I_0$ in zwei Teilintervalle. Auf mindestens einer Hälfte muss $f$ unbeschränkt sein; nenne diese $I_1$.<br>3. Durch fortgesetzte Halbierung entsteht eine Intervallschachtelung $(I_n)_{n \\in \\mathbb{N}}$ mit Längen $|I_n| = \\frac{b-a}{2^n} \\to 0$.<br>4. Nach dem Intervallschachtelungsprinzip existiert ein eindeutiger gemeinsamer Punkt $x_0 \\in \\bigcap_{n=0}^\\infty I_n \\in [a, b]$.<br>5. Da $f$ stetig bei $x_0$ ist, existiert ein $\\delta > 0$ mit $|f(x)| \\le |f(x_0)| + 1$ für alle $x \\in (x_0-\\delta, x_0+\\delta)$.<br>6. Für ausreichend großes $n$ liegt jedoch $I_n \\subset (x_0-\\delta, x_0+\\delta)$, was der Unbeschränktheit von $f$ auf $I_n$ widerspricht!",
    meta: "Skript: §3.8.1, Beweis von Satz 3.67",
    explanation: "Die Abgeschlossenheit stellt sicher, dass der Grenzpunkt $x_0$ im Intervall $[a,b]$ liegt. Die Beschränktheit des Intervalls erzwingt, dass die Längen der geschachtelten Intervalle gegen 0 konvergieren.",
    example: "Dieselbe Technik (Intervallschachtelung) wird im Skript auch für den ZWS (Satz 3.58) und den Satz von Heine (Satz 3.75) verwendet.",
    counterexample: "Auf $(0,1]$ konvergiert die Schachtelung für $f(x)=1/x$ gegen $x_0 = 0 \\notin (0,1]$, wodurch der Stetigkeitsschluss fehlschlägt."
  },
  {
    id: "k3_satz_vom_maximum",
    title: "Korollar 3.69: Satz vom Maximum und Minimum (Weierstraß)",
    category: "Kompakte Intervalle & Gleichmäßige Stetigkeit",
    type: "satz",
    front: "Formulieren Sie den <b>Satz vom Maximum und Minimum</b> (Extremwertsatz von Weierstraß) auf kompakten Intervallen.",
    back: "Sei $f: [a, b] \\to \\mathbb{R}$ eine <b>stetige Funktion</b> auf einem kompakten Intervall $[a, b]$ ($a < b$).<br>Dann nimmt $f$ sowohl ihr <b>Maximum</b> als auch ihr <b>Minimum</b> an. D.h. es existieren $x_{\\min}, x_{\\max} \\in [a, b]$ mit:<br>$$f(x_{\\min}) \\le f(x) \\le f(x_{\\max}) \\quad \\text{für alle } x \\in [a, b]$$",
    meta: "Skript: §3.8.2, Korollar 3.69",
    explanation: "<b>Beweis-Blueprint:</b><br>1. Nach Satz 3.67 ist $f([a,b])$ beschränkt, somit existiert $S = \\sup f([a,b]) \\in \\mathbb{R}$.<br>2. Nimm widersprüchlich an, $f$ nehme das Maximum nicht an ($f(x) < S$ für alle $x \\in [a,b]$).<br>3. Betrachte $g(x) = \\frac{1}{S - f(x)}$. $g$ ist stetig auf $[a,b]$ und positiv.<br>4. Nach Satz 3.67 ist $g$ beschränkt durch ein $M > 0$, also $\\frac{1}{S - f(x)} \\le M \\implies f(x) \\le S - \\frac{1}{M}$ für alle $x$.<br>5. Dies widerspricht $S = \\sup f([a,b])$, da $S - \\frac{1}{M} < S$ eine kleinere obere Schranke wäre!",
    example: "$f(x) = x^2 - x$ auf $[0, 2]$. $f$ nimmt ihr Minimum $-1/4$ bei $x = 1/2$ und ihr Maximum $2$ bei $x = 2$ an.",
    counterexample: "<b>Offenes Intervall:</b> $f(x) = x$ auf $(0, 1)$ ist stetig, nimmt aber auf $(0,1)$ weder Minimum noch Maximum an (Supremum 1 und Infimum 0 liegen außerhalb)."
  },
  {
    id: "k3_def_gleichm_stetig",
    title: "Definition 3.71: Gleichmäßige Stetigkeit",
    category: "Kompakte Intervalle & Gleichmäßige Stetigkeit",
    type: "definition",
    front: "Definieren Sie den Begriff der <b>gleichmäßigen Stetigkeit</b> für eine Funktion $f: D \\to \\mathbb{R}$ ($D \\subseteq \\mathbb{R}$) und erläutern Sie den Unterschied zur gewöhnlichen Stetigkeit.",
    back: "Eine Funktion $f: D \\to \\mathbb{R}$ heißt <b>gleichmäßig stetig</b>, falls gilt:<br>$$\\forall \\varepsilon > 0 \\; \\exists \\delta > 0 \\; \\forall x, y \\in D: |x - y| < \\delta \\implies |f(x) - f(y)| < \\varepsilon$$<br><b>Unterschied zur punktweisen Stetigkeit:</b><br>• Punktweise Stetigkeit: $\\delta = \\delta(\\varepsilon, x_0)$ darf vom Punkt $x_0$ abhängen.<br>• Gleichmäßige Stetigkeit: $\\delta = \\delta(\\varepsilon)$ ist <b>universal</b> für das gesamte Gebiet $D$ gültig (hängt NUR von $\\varepsilon$ ab).",
    meta: "Skript: §3.8.3, Definition 3.71",
    explanation: "Bei gleichmäßiger Stetigkeit kann man ein 'universelles Fadenkreuz' der Breite $2\\delta$ und Höhe $2\\varepsilon$ über den gesamten Graphen schieben, ohne dass die Ausgaben stärker schwanken.<br><br><svg viewBox='0 0 300 130' style='width:100%; max-width:300px; display:block; margin:10px auto;'><rect x='20' y='15' width='260' height='100' fill='#f8f9fa' stroke='#ccc'/><path d='M 30 100 Q 150 20 270 90' fill='none' stroke='#007bff' stroke-width='2.5'/><rect x='80' y='45' width='50' height='50' fill='rgba(40,167,69,0.2)' stroke='#28a745' stroke-dasharray='3'/><rect x='190' y='50' width='50' height='50' fill='rgba(40,167,69,0.2)' stroke='#28a745' stroke-dasharray='3'/><text x='85' y='40' font-size='10' fill='#28a745'>δ konstant!</text><text x='195' y='45' font-size='10' fill='#28a745'>δ konstant!</text></svg>",
    example: "Linear-Funktion $f(x) = ax$ auf $\\mathbb{R}$ ist gleichmäßig stetig, wähle $\\delta = \\frac{\\varepsilon}{|a|}$ völlig unabhängig von $x$.",
    counterexample: "<b>Nicht gleichmäßig stetig:</b> $f(x) = x^2$ auf $\\mathbb{R}$. Je weiter man nach rechts geht, desto steiler wird die Funktion, weshalb $\\delta$ für festes $\\varepsilon$ belibig klein werden müsste."
  },
  {
    id: "k3_satz_von_heine",
    title: "Satz 3.75: Satz von Heine über die gleichmäßige Stetigkeit",
    category: "Kompakte Intervalle & Gleichmäßige Stetigkeit",
    type: "satz",
    front: "Formulieren Sie den <b>Satz von Heine</b> zur gleichmäßigen Stetigkeit.",
    back: "Sei $[a, b]$ ein <b>kompaktes Intervall</b> ($a < b$) und $f: [a, b] \\to \\mathbb{R}$ (oder $\\mathbb{C}$) eine <b>stetige Funktion</b>.<br>Dann ist $f$ auf $[a, b]$ <b>gleichmäßig stetig</b>.",
    meta: "Skript: §3.8.3, Satz 3.75",
    explanation: "Auf kompakten Intervallen schrumpft der Begriff der Stetigkeit und der gleichmäßigen Stetigkeit zusammen: Jede stetige Funktion ist automatisch gleichmäßig stetig!<br><b>Beweis-Idee:</b> Annahme das Gegenteil gelte $\\implies$ Konstruktion zweier Folgen $(x_n), (y_n)$ mit $|x_n - y_n| < 1/n$ aber $|f(x_n) - f(y_n)| \\ge \\varepsilon$ $\\implies$ Widerspruch über Intervallschachtelung/Bolzano-Weierstraß.",
    example: "$f(x) = \\sin(x^2)$ ist auf $[0, 100]$ nach dem Satz von Heine gleichmäßig stetig.",
    counterexample: "<b>Auf nicht-kompakten Mengen falsch:</b><br>• $f(x) = \\frac{1}{x}$ ist stetig auf $(0, 1)$, aber <i>nicht</i> gleichmäßig stetig.<br>• $f(x) = x^2$ ist stetig auf $\\mathbb{R}$, aber <i>nicht</i> gleichmäßig stetig."
  },
  {
    id: "k3_beispiele_gl_stetig",
    title: "Übung 3.73 & 3.76: Analyse von Gleichmäßiger Stetigkeit",
    category: "Kompakte Intervalle & Gleichmäßige Stetigkeit",
    type: "lemma",
    front: "Untersuchen Sie die Funktionen $f(x) = x^2$ und $g(x) = \\frac{1}{x}$ auf verschiedenen Definitionsbereichen bzgl. gleichmäßiger Stetigkeit.",
    back: "1. <b>$f(x) = x^2$:</b><br>&nbsp;&nbsp;• Auf $[0, 1]$ <b>gleichmäßig stetig</b> (da $[0, 1]$ kompakt, Satz von Heine).<br>&nbsp;&nbsp;• Auf $\\mathbb{R}$ <b>nicht gleichmäßig stetig</b>: Für $x_n = n + \\frac{1}{n}$ und $y_n = n$ gilt $|x_n - y_n| = \\frac{1}{n} \\to 0$, aber $|f(x_n) - f(y_n)| = 2 + \\frac{1}{n^2} \\ge 2$.<br><br>2. <b>$g(x) = \\frac{1}{x}$:</b><br>&nbsp;&nbsp;• Auf $[1, \\infty)$ <b>gleichmäßig stetig</b> (da $|g(x) - g(y)| = \\frac{|x-y|}{xy} \\le |x-y|$, wähle $\\delta = \\varepsilon$).<br>&nbsp;&nbsp;• Auf $(0, 1)$ <b>nicht gleichmäßig stetig</b>: nahe $0$ wächst die Steigung unbeschränkt.",
    meta: "Skript: §3.8.3, Übung 3.73 & 3.76",
    explanation: "Für gleichmäßige Stetigkeit auf unbeschränkten Intervallen darf die Ableitung/Steigung der Funktion nicht beliebig groß werden.",
    example: "Jede beschränkte stetige Funktion mit beschränkter Ableitung ist gleichmäßig stetig.",
    counterexample: "$f(x) = \\sin(x^2)$ auf $\\mathbb{R}$ ist beschränkt und stetig, aber <i>nicht</i> gleichmäßig stetig, da die Oszillationen für $x \\to \\infty$ beliebig schnell werden."
  },
  {
    id: "k3_lipschitz_stetig",
    title: "Übung 3.78: Lipschitz-Stetigkeit",
    category: "Kompakte Intervalle & Gleichmäßige Stetigkeit",
    type: "definition",
    front: "Definieren Sie den Begriff der <b>Lipschitz-Stetigkeit</b> und ordnen Sie ihn in die Stetigkeitshierarchie ein.",
    back: "Eine Funktion $f: D \\to \\mathbb{R}$ heißt <b>Lipschitz-stetig</b> auf $D \\subseteq \\mathbb{R}$, falls eine Konstante $L \\ge 0$ (Lipschitz-Konstante) existiert, sodass für alle $x, y \\in D$ gilt:<br>$$|f(x) - f(y)| \\le L |x - y|$$<br><b>Stetigkeits-Hierarchie:</b><br>$$\\text{Lipschitz-stetig} \\implies \\text{Gleichmäßig stetig} \\implies \\text{Stetig}$$",
    meta: "Skript: §3.8.3, Übung 3.78",
    explanation: "<b>Beweisskizze für Lipschitz $\\implies$ gleichmäßig stetig:</b><br>Sei $\\varepsilon > 0$. Wähle $\\delta = \\frac{\\varepsilon}{L}$ (für $L > 0$). Dann gilt für alle $|x-y| < \\delta$ sofort $|f(x) - f(y)| \\le L |x-y| < L \\cdot \\frac{\\varepsilon}{L} = \\varepsilon$.",
    example: "$f(x) = \\sin(x)$ auf $\\mathbb{R}$ ist Lipschitz-stetig mit $L = 1$, da $|\\sin(x) - \\sin(y)| \\le |x - y|$.",
    counterexample: "<b>Gleichmäßig stetig, aber NICHT Lipschitz-stetig:</b> $f(x) = \\sqrt{x}$ auf $[0, 1]$. Nach Satz von Heine ist $f$ gleichmäßig stetig. Aber $f$ ist nicht Lipschitz-stetig, da $\\frac{\\sqrt{x} - 0}{x - 0} = \\frac{1}{\\sqrt{x}} \\to \\infty$ für $x \\to 0^+$."
  },
  {
    id: "k3_bernoulli",
    title: "Lemma 3.5: Bernoulli'sche Ungleichung",
    category: "Summen und Produkte",
    type: "lemma",
    front: "Wie lautet die <b>Bernoulli'sche Ungleichung</b>?",
    back: "Für alle reellen Zahlen $a \\ge -1$ und $n \\in \\mathbb{N}_0$ gilt:\n$$(1 + a)^n \\ge 1 + na$$",
    meta: "Skript: §3.1.2, Lemma 3.5",
    explanation: "Diese Ungleichung ist ein fundamentales Hilfsmittel für Abschätzungen in der Analysis und wird typischerweise mittels vollständiger Induktion bewiesen.",
    example: "Für $a = 1$ und $n = 3$: $(1+1)^3 = 8 \\ge 1 + 3\\cdot 1 = 4$.",
    counterexample: "Für $a < -1$ gilt die Ungleichung im Allgemeinen nicht mehr. Beispiel: $a = -4, n = 3$: $(1-4)^3 = -27$, was <i>nicht</i> $\\ge 1 + 3(-4) = -11$ ist."
  },
  {
    id: "k3_geom_summe",
    title: "Proposition 3.8: Geometrische Summenformel",
    category: "Summen und Produkte",
    type: "proposition",
    front: "Wie lautet die <b>Geometrische Summenformel</b> für $q \\in \\mathbb{C}$?",
    back: "Sei $n \\in \\mathbb{N}_0$ und $q \\in \\mathbb{C}$. Dann gilt:\n$$\\sum_{k=0}^n q^k = \\begin{cases} n+1 & \\text{falls } q = 1 \\\\ \\frac{q^{n+1}-1}{q-1} & \\text{falls } q \\neq 1 \\end{cases}$$",
    meta: "Skript: §3.1, Proposition 3.8",
    explanation: "Der Beweis erfolgt per Induktion oder eleganter über eine Teleskopsumme: Multipliziert man die Summe $\\sum_{k=0}^n q^k$ mit $(1-q)$ bzw. $(q-1)$, heben sich bis auf zwei Terme alle gegenseitig auf.",
    example: "Für $q = 2$ und $n = 3$: $1 + 2 + 4 + 8 = 15$. Über die Formel: $\\frac{2^4 - 1}{2-1} = \\frac{15}{1} = 15$.",
    counterexample: "Achtung: Für $q=1$ ist der Nenner $q-1 = 0$. Deshalb muss dieser triviale Fall (Summe von $n+1$ Einsen) zwingend separat behandelt werden."
  },
  {
    id: "k3_def_polynom",
    title: "Definition 3.11 & 3.13: Polynom und Polynomfunktion",
    category: "Polynome",
    type: "definition",
    front: "Definieren Sie eine <b>Polynomfunktion</b> und erläutern Sie den Unterschied zu einem <b>Polynom</b>.",
    back: "• Eine <b>Polynomfunktion</b> auf $\\mathbb{C}$ ist eine Funktion $f: \\mathbb{C} \\to \\mathbb{C}, z \\mapsto \\sum_{k=0}^n a_k z^k$ (mit $n \\in \\mathbb{N}_0$ und Koeffizienten $a_k \\in \\mathbb{C}$).<br>• Ein <b>Polynom</b> über einem beliebigen Körper $K$ ist ein <i>formaler Ausdruck</i> $\\sum_{k=0}^n a_k T^k$ mit einer abstrakten Variablen $T$.<br>Das größte $k$ mit $a_k \\neq 0$ nennt man den <b>Grad (deg)</b>. Für das Nullpolynom ist der Grad als $-\\infty$ definiert.",
    meta: "Skript: §3.2, Definition 3.11 & 3.13",
    explanation: "Über unendlichen Körpern (wie $\\mathbb{R}$ oder $\\mathbb{C}$) ist die Zuordnung zwischen formalen Polynomen und Polynomfunktionen bijektiv (Proposition 3.15). Über endlichen Körpern ist dies jedoch nicht der Fall, weshalb man in der Algebra streng zwischen dem formalen Ausdruck und der Abbildung unterscheidet.",
    example: "$f(z) = z^2 - 1$ ist eine reelle (und komplexe) Polynomfunktion vom Grad 2.",
    counterexample: "Gegenbeispiel zur Eindeutigkeit auf endlichen Körpern: Die Funktion $f(a) = a^3 + a + 1$ über $\\mathbb{F}_2$ hat dieselben Funktionswerte wie $g(a) = 1$, obwohl die formalen Polynome $T^3 + T + 1$ und $1$ verschieden sind!"
  },
  {
    id: "k3_def_fakultaet",
    title: "Definition 3.24: Fakultät",
    category: "Kombinatorik & Binomialsatz",
    type: "definition",
    front: "Wie ist die <b>Fakultät</b> $n!$ definiert?",
    back: "Die Funktion $n \\mapsto n!$ auf $\\mathbb{N}_0$ ist definiert durch:<br>$$0! = 1$$<br>$$n! = \\prod_{k=1}^n k \\quad \\text{für } n \\in \\mathbb{N}$$<br>Insbesondere gilt die rekursive Formel: $(n+1)! = n! \\cdot (n+1)$.",
    meta: "Skript: §3.3.1, Definition 3.24",
    explanation: "Die Fakultät hat eine zentrale kombinatorische Bedeutung: Sie gibt die Anzahl der Möglichkeiten an, $n$ unterscheidbare Objekte in einer Reihe anzuordnen (Permutationen).",
    example: "$0! = 1$<br>$3! = 1 \\cdot 2 \\cdot 3 = 6$<br>$5! = 120$",
    counterexample: "Die Fakultät darf nicht mit der Gaußschen Summenformel verwechselt werden: $\\sum_{k=1}^n k$ addiert die Zahlen, während $n!$ sie multipliziert. $n!$ wächst sehr viel schneller."
  },
  {
    id: "k3_binomischer_lehrsatz",
    title: "Satz 3.28: Binomischer Lehrsatz",
    category: "Kombinatorik & Binomialsatz",
    type: "satz",
    front: "Formulieren Sie den <b>Binomischen Lehrsatz</b>.",
    back: "Für alle $w, z \\in \\mathbb{C}$ und $n \\in \\mathbb{N}_0$ gilt:\n$$(w + z)^n = \\sum_{k=0}^n \\binom{n}{k} w^{n-k} z^k$$",
    meta: "Skript: §3.3.3, Satz 3.28",
    explanation: "Der Satz verallgemeinert die bekannten binomischen Formeln für Quadrate und Kuben auf beliebige natürliche Potenzen $n$. Der Beweis erfolgt in der Regel durch vollständige Induktion und Ausnutzen der Additionsformel für Binomialkoeffizienten im Pascalschen Dreieck.",
    example: "Für $n=2$ ergibt sich: $(w+z)^2 = \\binom{2}{0}w^2 z^0 + \\binom{2}{1}w^1 z^1 + \\binom{2}{2}w^0 z^2 = w^2 + 2wz + z^2$.",
    counterexample: "Die Identität $(w+z)^n = w^n + z^n$ (der sogenannte \"Freshman's Dream\") ist über $\\mathbb{R}$ und $\\mathbb{C}$ im Allgemeinen falsch (außer für $n=1$), kann aber in Körpern mit Primzahlcharakteristik $p$ für $n=p$ durchaus gelten."
  },
  {
    id: "k3_uebung_3_4",
    title: "Wichtige Übung 3.4: Verallgemeinerte Dreiecksungleichung",
    category: "Summen und Produkte",
    type: "lemma",
    front: "Wie lautet die <b>verallgemeinerte Dreiecksungleichung</b> für endlich viele komplexe Zahlen, und wie beweist man sie?",
    back: "Für alle Zahlen $a_1, \\dots, a_n \\in \\mathbb{C}$ gilt:<br>$$\\left| \\sum_{i=1}^n a_i \\right| \\le \\sum_{i=1}^n |a_i|$$<br><b>Beweis:</b> Vollständige Induktion über $n$: Der Fall $n=1$ ist trivial, und der Induktionsschritt folgt aus der gewöhnlichen Dreiecksungleichung:<br>$$\\left|\\sum_{i=1}^{n+1} a_i\\right| \\le \\left|\\sum_{i=1}^{n} a_i\\right| + |a_{n+1}| \\le \\sum_{i=1}^{n} |a_i| + |a_{n+1}|.$$",
    meta: "Skript: §3.1.1, Wichtige Übung 3.4",
    explanation: "Das Muster 'Zweier-Aussage per Induktion auf $n$ Summanden heben' ist ein Standardverfahren. Die Ungleichung ist allgegenwärtig: Kapitel 4 nennt die Dreiecksungleichung des Integrals $|\\int f| \\le \\int |f|$ ihre 'kontinuierliche Version'.",
    example: "$|1 + i + (-2)| = |{-1} + i| = \\sqrt{2} \\le |1| + |i| + |-2| = 4$.",
    counterexample: "<b>1.</b> Gleichheit gilt i.A. nicht: Bei $a_1 = 1, a_2 = -1$ ist links $0$, rechts $2$ (Auslöschung!).<br><b>2.</b> Die 'umgekehrte' Variante $|\\sum a_i| \\ge \\sum |a_i|$ ist falsch - nach unten lässt sich eine Summe nur mit $\\big|\\,|a| - |b|\\,\\big| \\le |a+b|$ (zwei Summanden) abschätzen."
  },
  {
    id: "k3_prop_3_15",
    title: "Proposition 3.15: Wachstum von Polynomfunktionen",
    category: "Polynome",
    type: "proposition",
    front: "Was besagt <b>Proposition 3.15</b> über das Wachstum von Polynomfunktionen und die Eindeutigkeit der Koeffizienten?",
    back: "Sei $f(T) \\in \\mathbb{C}[T]$ ein <i>nicht-konstantes</i> Polynom. Dann gibt es zu jedem $M > 0$ ein $R \\ge 1$, so dass für alle $z \\in \\mathbb{C}$ mit $|z| \\ge R$ auch $|f(z)| \\ge M$ gilt.<br><br><b>Insbesondere:</b> Die Zuordnung Polynom $\\mapsto$ Polynomfunktion ist <b>bijektiv</b> (ebenso für $\\mathbb{R}[T]$). Deshalb unterscheidet die Analysis fortan nicht mehr zwischen Polynom und Polynomfunktion.",
    meta: "Skript: §3.2, Proposition 3.15",
    explanation: "<b>Beweisidee:</b> Schreibe $f(T) = a_nT^n + q(T)$ mit $\\deg(q) < n$. Für $|z| \\ge 1$ wächst $|q(z)|$ höchstens wie $C|z|^{n-1}$, der Leitterm dominiert also: $|f(z)| \\ge |a_n||z|^n - C|z|^{n-1} \\to \\infty$. Die Injektivität folgt daraus: Stimmen zwei Polynome als Funktionen überein, ist ihre Differenz eine beschränkte Polynomfunktion (konstant Null auf ganz $\\mathbb{C}$) - also das Nullpolynom.",
    example: "$f(z) = z^2$: Zu $M = 100$ wähle $R = 10$; für $|z| \\ge 10$ ist $|f(z)| = |z|^2 \\ge 100$. 'Nicht-konstante Polynome werden bei grossen $|z|$ gross.'",
    counterexample: "<b>1.</b> Für konstante Polynome ist die Wachstumsaussage falsch: $f = 5$ bleibt beschränkt.<br><b>2.</b> Über <i>endlichen</i> Körpern scheitert die Bijektivität: Über $\\mathbb{F}_2$ definieren $T^2 + T$ und $0$ dieselbe Funktion (Beispiel 3.14) - die Identifikation Polynom = Polynomfunktion ist ein Privileg unendlicher Körper."
  },
  {
    id: "k3_uebung_3_17",
    title: "Wichtige Übung 3.17: Polynomdivision (Division mit Rest)",
    category: "Polynome",
    type: "satz",
    front: "Wie lautet die <b>Division mit Rest</b> für Polynome, und was bedeutet sie für rationale Funktionen?",
    back: "Ist $d$ ein Polynom verschieden von Null, dann gibt es für jedes Polynom $f$ zwei <b>eindeutig bestimmte</b> Polynome $q, r$ mit<br>$$f = q \\cdot d + r \\quad \\text{und} \\quad \\deg(r) < \\deg(d).$$<br><b>Für rationale Funktionen:</b> $\\frac{f(z)}{d(z)} = q(z) + \\frac{r(z)}{d(z)}$ auf $\\mathbb{C} \\setminus \\{z \\mid d(z) = 0\\}$ - der 'ganze Teil' $q$ und ein Restbruch mit kleinem Zählergrad.",
    meta: "Skript: §3.2.1, Beispiel 3.16 & Wichtige Übung 3.17",
    explanation: "Das Verfahren ist der schriftlichen Division von Zahlen nachempfunden (Beispiel 3.16 rechnet $f(x) = 3x^4 - 2x^2 + 5$ geteilt durch $d(x) = x^2 + 1$ vor): Man eliminiert wiederholt den höchsten Term von $f$ durch ein passendes Vielfaches von $d$. Die Analogie zu Satz 2.31 (Division mit Rest in $\\mathbb{N}$) ist kein Zufall - der Grad übernimmt die Rolle des Absolutbetrags.",
    example: "$f(x) = 3x^4 - 2x^2 + 5$, $d(x) = x^2 + 1$: Division liefert $q(x) = 3x^2 - 5$ und $r(x) = 10$, also $3x^4 - 2x^2 + 5 = (3x^2 - 5)(x^2 + 1) + 10$.",
    counterexample: "<b>1.</b> $d = 0$ ist ausgeschlossen - sonst gäbe es kein $q$ mit $f = q \\cdot 0 + r$ für $f \\neq r$.<br><b>2.</b> Ohne die Gradbedingung $\\deg(r) < \\deg(d)$ wäre die Zerlegung nicht eindeutig: $x^2 = x \\cdot x + 0 = (x-1) \\cdot x + x$ wären beide 'zulässig'."
  },
  {
    id: "k3_uebung_3_19",
    title: "Wichtige Übung 3.19: Nullstellen und Vielfachheit",
    category: "Polynome",
    type: "satz",
    front: "Welcher Zusammenhang besteht zwischen <b>Nullstellen</b> und <b>Linearfaktoren</b>, und wie viele Nullstellen kann ein Polynom vom Grad $n$ haben?",
    back: "Für $f(T) \\in \\mathbb{C}[T]$ und $z \\in \\mathbb{C}$ gilt:<br>$$(T - z) \\text{ teilt } f \\iff f(z) = 0.$$<br><b>Folgerung:</b> Ein Polynom $f \\neq 0$ vom Grad $n$ besitzt <b>höchstens $n$ verschiedene Nullstellen</b> in $\\mathbb{C}$.<br><br><b>Vielfachheit:</b> Eine Nullstelle $z$ hat Vielfachheit $k \\in \\mathbb{N}$, falls $(T-z)^k$ das Polynom $f$ teilt, $(T-z)^{k+1}$ aber nicht.",
    meta: "Skript: §3.2.2, Wichtige Übung 3.19",
    explanation: "<b>Beweisidee:</b> Division mit Rest durch $d = T - z$ gibt $f = q \\cdot (T-z) + r$ mit $\\deg(r) < 1$, also $r$ konstant; Einsetzen von $z$ zeigt $r = f(z)$. Jede Nullstelle 'verbraucht' so einen Linearfaktor und senkt den Grad um 1 - mehr als $n$ Nullstellen sind unmöglich. (Übung 3.18: Mittels Wurzeln zeigt man, dass jedes quadratische Polynom über $\\mathbb{C}$ sogar in Linearfaktoren zerfällt - ein Spezialfall des Fundamentalsatzes der Algebra.)",
    example: "$f(T) = T^2 - 2T + 1 = (T-1)^2$: Die Nullstelle $z = 1$ hat Vielfachheit $2$. $f(T) = T^3 - T = T(T-1)(T+1)$ hat die maximal möglichen $3$ verschiedenen Nullstellen.",
    counterexample: "<b>1.</b> Für das Nullpolynom $f = 0$ ist die Nullstellen-Schranke sinnlos: <i>Jede</i> Zahl ist Nullstelle - deshalb die Voraussetzung $f \\neq 0$.<br><b>2.</b> 'Höchstens $n$' heisst nicht 'genau $n$' in $\\mathbb{R}$: $x^2 + 1$ hat Grad 2 und <i>keine</i> reelle Nullstelle (erst in $\\mathbb{C}$: $\\pm i$)."
  },
  {
    id: "k3_uebung_3_20",
    title: "Wichtige Übung 3.20: Koeffizientenvergleich & Interpolation",
    category: "Polynome",
    type: "satz",
    front: "Was besagt der <b>Koeffizientenvergleich</b> (Übung 3.20), und was folgt daraus für die <b>Lagrange-Interpolation</b>?",
    back: "<b>Koeffizientenvergleich:</b> Seien $f, g$ Polynome vom Grad $\\le n$. Stimmen $f$ und $g$ an <b>mehr als $n$ Punkten</b> überein, so gilt $f = g$ (gleiche Grade und gleiche Koeffizienten).<br><br><b>Lagrange-Interpolation:</b> Zu $n$ verschiedenen Stützstellen $z_1, \\dots, z_n \\in \\mathbb{C}$ und beliebigen Werten $w_1, \\dots, w_n$ gibt es <b>genau ein</b> Polynom $f$ vom Grad $< n$ mit $f(z_k) = w_k$ für alle $k$.",
    meta: "Skript: §3.2.2, Wichtige Übung 3.20 & Lagrange-Interpolation",
    explanation: "<b>Beweisidee:</b> $f - g$ hat Grad $\\le n$, aber mehr als $n$ Nullstellen - nach Übung 3.19 muss $f - g = 0$ sein. Die Interpolation konstruiert man explizit: $f(z) = \\sum_{k=1}^n w_k \\prod_{j \\neq k} \\frac{z - z_j}{z_k - z_j}$; die Eindeutigkeit liefert der Koeffizientenvergleich. Merksatz: <i>Ein Polynom vom Grad $n$ ist durch $n+1$ Funktionswerte vollständig bestimmt.</i>",
    example: "Durch die 2 Punkte $(0, 1)$ und $(1, 3)$ geht genau ein Polynom vom Grad $< 2$: die Gerade $f(z) = 1 + 2z$.",
    counterexample: "<b>1.</b> Mit nur $n$ Übereinstimmungspunkten ist die Folgerung falsch: $f(T) = T(T-1)$ und $g = 0$ (beide Grad $\\le 2$) stimmen an den 2 Punkten $0, 1$ überein, sind aber verschieden.<br><b>2.</b> Ohne Gradschranke gibt es unendlich viele Interpolationspolynome: Durch $(0,1), (1,3)$ gehen auch $1 + 2z + z(z-1)$, $1 + 2z + 7z(z-1)$, ..."
  },
  {
    id: "k3_binomialkoeffizienten",
    title: "Proposition 3.26 & Übung 3.27: Binomialkoeffizienten",
    category: "Kombinatorik & Binomialsatz",
    type: "proposition",
    front: "Definieren Sie den <b>Binomialkoeffizienten</b> $\\binom{n}{k}$ und nennen Sie die <b>Additionsformel</b> (Pascal) sowie die <b>kombinatorische Bedeutung</b>.",
    back: "<b>Definition:</b> Für $n, k \\in \\mathbb{N}_0$ mit $0 \\le k \\le n$:<br>$$\\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}, \\qquad \\text{insbesondere } \\binom{n}{k} = \\binom{n}{n-k}.$$<br><b>Proposition 3.26 (Additionsformel):</b> $\\binom{n}{0} = \\binom{n}{n} = 1$ und für $1 \\le k \\le n$:<br>$$\\binom{n}{k-1} + \\binom{n}{k} = \\binom{n+1}{k}$$<br>Insbesondere ist $\\binom{n}{k} \\in \\mathbb{N}$.<br><br><b>Übung 3.27:</b> $\\binom{n}{k}$ ist die Anzahl der $k$-elementigen Teilmengen von $\\{1, \\dots, n\\}$.",
    meta: "Skript: §3.3.2, Proposition 3.26 & Wichtige Übung 3.27 (vgl. Lemma 3.25: $|S_n| = n!$)",
    explanation: "Die Additionsformel ist genau die Konstruktionsregel des <b>Pascalschen Dreiecks</b>: Jeder Eintrag ist die Summe der zwei darüberliegenden. Sie beweist nebenbei die (aus der Formel nicht offensichtliche!) Ganzzahligkeit von $\\binom{n}{k}$ per Induktion. Kombinatorische Lesart der Formel: Eine $k$-elementige Teilmenge von $\\{1,\\dots,n+1\\}$ enthält das Element $n+1$ (dann $\\binom{n}{k-1}$ Möglichkeiten) oder nicht ($\\binom{n}{k}$ Möglichkeiten). Grundlage ist Lemma 3.25: Es gibt $n!$ Permutationen von $\\{1,\\dots,n\\}$.",
    example: "$\\binom{4}{2} = \\frac{24}{2 \\cdot 2} = 6$: die sechs 2-elementigen Teilmengen von $\\{1,2,3,4\\}$. Schweizer Lotto: $\\binom{42}{6} = 5'245'786$.",
    counterexample: "<b>1.</b> $\\binom{n}{k}$ ist <i>nicht</i> $\\frac{n^k}{k!}$ - der häufige Fehler ignoriert, dass ohne Zurücklegen gezogen wird: $\\binom{4}{2} = 6 \\neq \\frac{16}{2} = 8$.<br><b>2.</b> Für $k > n$ ist die Fakultätsformel nicht definiert; man setzt dann $\\binom{n}{k} = 0$ (keine $k$-elementige Teilmenge einer $n$-elementigen Menge) - vgl. die Konvention in Proposition 3.33."
  }
];
/* ==========================================================================
   FLASHCARDS KAPITEL 4: Das Riemann-Integral
   Analysis I - Prof. Dr. Manfred Einsiedler (Skript S. 177-209)
   Vollständig verifiziert gegen das offizielle Skript (Abschnitte 4.1-4.7)
   ========================================================================== */

window.FLASHCARDS_KAPITEL_4 = [
  // ========================================================================
  // 4.1 TREPPENFUNKTIONEN UND DEREN INTEGRAL
  // ========================================================================
  {
    id: "k4_def_4_1",
    title: "Definition 4.1: Zerlegung",
    category: "4.1 Treppenfunktionen",
    type: "definition",
    front: "Was ist formal eine <b>Zerlegung</b> (oder Unterteilung) $\\mathfrak{Z}$ eines kompakten Intervalls $[a,b]$?",
    back: "Eine Zerlegung $\\mathfrak{Z}$ von $[a,b]$ ist gegeben durch endlich viele Punkte $x_0, \\dots, x_n \\in [a,b]$ mit $n \\in \\mathbb{N}$ und<br>$$a = x_0 < x_1 < \\dots < x_{n-1} < x_n = b.$$<br>Die Punkte $x_0,\\dots,x_n$ heissen <b>Teilungspunkte</b>. Wir schreiben $\\mathfrak{Z} = \\{a = x_0 < x_1 < \\dots < x_n = b\\}$.<br><br>Jede Zerlegung induziert die Partition<br>$$\\mathcal{P}(\\mathfrak{Z}) = \\big\\{\\{a\\}, (x_0,x_1), \\{x_1\\}, \\dots, (x_{n-1},x_n), \\{b\\}\\big\\}$$<br>von $[a,b]$ in offene Intervalle und einzelne Punkte.",
    meta: "Skript: Definition 4.1, S. 178",
    explanation: "Die Zerlegung ist das Gitter auf der $x$-Achse, auf dem wir später die Rechtecke (Treppenstufen) aufbauen. Formal ist sie eine endliche Teilmenge von $[a,b]$, die $a$ und $b$ enthält &ndash; die strenge Monotonie $x_0 < x_1 < \\dots < x_n$ macht die Aufzählung eindeutig.",
    example: "Für $[0,1]$ ist $\\mathfrak{Z} = \\{0 < 0{,}3 < 0{,}8 < 1\\}$ eine gültige Zerlegung mit $n = 3$ Teilintervallen. Die induzierte Partition ist $\\{\\{0\\}, (0, 0{,}3), \\{0{,}3\\}, (0{,}3, 0{,}8), \\{0{,}8\\}, (0{,}8, 1), \\{1\\}\\}$.",
    counterexample: "<b>1.</b> $\\{0{,}3 < 0{,}8\\}$ ist <i>keine</i> Zerlegung von $[0,1]$: Die Randpunkte $a=0$ und $b=1$ müssen Teilungspunkte sein ($x_0 = a$, $x_n = b$).<br><b>2.</b> Eine unendliche Punktmenge wie $\\{0\\} \\cup \\{\\tfrac{1}{n} : n \\in \\mathbb{N}\\} \\cup \\{1\\}$ ist keine Zerlegung &ndash; es sind nur <i>endlich viele</i> Teilungspunkte erlaubt."
  },
  {
    id: "k4_def_4_2",
    title: "Definition 4.2: Treppenfunktion",
    category: "4.1 Treppenfunktionen",
    type: "definition",
    front: "Wann heisst eine Funktion $f: [a,b] \\to \\mathbb{R}$ eine <b>Treppenfunktion</b> ($\\mathcal{TF}$)? Definiere auch <b>Konstanzintervalle</b> und <b>Konstanzwerte</b>.",
    back: "$f$ ist eine <b>Treppenfunktion</b>, falls es eine Zerlegung $\\mathfrak{Z} = \\{a = x_0 < \\dots < x_n = b\\}$ gibt, so dass es für jedes $k \\in \\{1,\\dots,n\\}$ eine Zahl $c_k \\in \\mathbb{R}$ gibt mit<br>$$\\forall x \\in (x_{k-1}, x_k): f(x) = c_k.$$<br>Die offenen Intervalle $(x_{k-1}, x_k)$ heissen <b>Konstanzintervalle</b>, $\\mathfrak{Z}$ heisst <b>Zerlegung in Konstanzintervalle</b> von $f$, und $c_1,\\dots,c_n$ sind die <b>Konstanzwerte</b> von $f$ bezüglich $\\mathfrak{Z}$.",
    meta: "Skript: Definition 4.2, S. 178",
    explanation: "<b>Der entscheidende Punkt:</b> $f$ muss nur auf den <i>offenen</i> Intervallen konstant sein &ndash; die Werte an den Teilungspunkten $x_k$ selbst dürfen völlig beliebig sein. Da einzelne Punkte keine Breite haben, tragen sie später nichts zum Integral bei.",
    example: "Jede konstante Funktion $f(x) = c$ ist eine Treppenfunktion (mit der trivialen Zerlegung $\\mathfrak{Z} = \\{a < b\\}$). Auch $f$ mit $f(x) = 1$ auf $(0, \\tfrac12)$, $f(x) = -2$ auf $(\\tfrac12, 1)$ und beliebigen Werten bei $x \\in \\{0, \\tfrac12, 1\\}$ ist eine Treppenfunktion auf $[0,1]$.",
    counterexample: "<b>1.</b> $f(x) = x$ auf $[0,1]$ ist keine Treppenfunktion: Sie ist auf keinem noch so kleinen offenen Intervall konstant.<br><b>2.</b> Die Dirichlet-Funktion $\\mathbb{1}_{\\mathbb{Q} \\cap [0,1]}$ ist keine Treppenfunktion: In jedem offenen Intervall nimmt sie beide Werte $0$ und $1$ an (Dichtheit von $\\mathbb{Q}$ und $\\mathbb{R} \\setminus \\mathbb{Q}$), kann dort also nicht konstant sein."
  },
  {
    id: "k4_def_4_3_verfeinerung",
    title: "Definition 4.3: Verfeinerung",
    category: "4.1 Treppenfunktionen",
    type: "definition",
    front: "Wann ist eine Zerlegung $\\mathfrak{Z}'$ <b>feiner</b> als $\\mathfrak{Z}$, und was ist die <b>gemeinsame Verfeinerung</b> zweier Zerlegungen?",
    back: "Seien $\\mathfrak{Z}, \\mathfrak{Z}'$ zwei Zerlegungen von $[a,b]$.<br>&bull; $\\mathfrak{Z}'$ ist <b>feiner als</b> $\\mathfrak{Z}$, falls jeder Teilungspunkt von $\\mathfrak{Z}$ auch ein Teilungspunkt von $\\mathfrak{Z}'$ ist.<br>&bull; Die <b>gemeinsame Verfeinerung</b> von $\\mathfrak{Z}$ und $\\mathfrak{Z}'$ ist die Zerlegung, deren Menge von Teilungspunkten die <i>Vereinigung</i> der Teilungspunkte von $\\mathfrak{Z}$ und $\\mathfrak{Z}'$ ist.",
    meta: "Skript: Definition 4.3, S. 179",
    explanation: "Will man zwei Treppenfunktionen addieren, passen ihre Stufen meist nicht zusammen. Die gemeinsame Verfeinerung erzeugt ein Über-Gitter, auf dem <i>beide</i> gleichzeitig konstant auf allen Konstanzintervallen sind. Das ist das technische Fundament für die Linearität (Lemma 4.7).",
    example: "$\\mathfrak{Z}_1 = \\{0 < 1 < 2\\}$ und $\\mathfrak{Z}_2 = \\{0 < 1{,}5 < 2\\}$ haben die gemeinsame Verfeinerung $\\{0 < 1 < 1{,}5 < 2\\}$.",
    counterexample: "<b>1.</b> $\\{0 < 1{,}5 < 2\\}$ ist <i>nicht</i> feiner als $\\{0 < 1 < 2\\}$: Der Teilungspunkt $1$ fehlt. &bdquo;Mehr Punkte haben&ldquo; genügt nicht &ndash; es müssen <i>alle alten</i> Punkte enthalten sein.<br><b>2.</b> Eine Zerlegung in Konstanzintervalle ist nicht eindeutig: Jede feinere Zerlegung leistet dasselbe. Deshalb braucht es Lemma 4.5, damit das Integral wohldefiniert ist."
  },
  {
    id: "k4_def_4_4_integral",
    title: "Definition 4.4-4.6: Integral einer Treppenfunktion",
    category: "4.1 Treppenfunktionen",
    type: "definition",
    front: "Wie ist das <b>Integral einer Treppenfunktion</b> definiert, und was besagt <b>Lemma 4.5</b> zur Wohldefiniertheit?",
    back: "Sei $f \\in \\mathcal{TF}([a,b])$ mit Zerlegung $\\mathfrak{Z}$ in Konstanzintervalle und Konstanzwerten $c_1,\\dots,c_n$. Dann (Def. 4.4):<br>$$I(f, \\mathfrak{Z}) = \\sum_{k=1}^n c_k (x_k - x_{k-1}) = \\sum_{k=1}^n c_k \\Delta x_k$$<br><b>Lemma 4.5 (Unabhängigkeit):</b> $I(f,\\mathfrak{Z})$ hängt <i>weder</i> von den Funktionswerten $f(x_k)$ an den Teilungspunkten <i>noch</i> von der Wahl der Zerlegung $\\mathfrak{Z}$ in Konstanzintervalle ab.<br><br>Deshalb definieren wir (Def. 4.6): $\\int_a^b f(x)\\,\\mathrm{d}x = \\int_a^b f\\,\\mathrm{d}x = I(f, \\mathfrak{Z})$.",
    meta: "Skript: Definition 4.4, Lemma 4.5, Definition 4.6, S. 179-180",
    explanation: "<b>Beweisidee von Lemma 4.5:</b> Fügt man einen einzelnen neuen Teilungspunkt $y \\in (x_{\\ell-1}, x_\\ell)$ ein, zerschneidet man nur ein Rechteck in zwei kleinere: $c_\\ell(x_\\ell - x_{\\ell-1}) = c_\\ell(x_\\ell - y) + c_\\ell(y - x_{\\ell-1})$. Per Induktion folgt die Aussage für jede feinere Zerlegung, und für zwei beliebige Zerlegungen vergleicht man beide mit ihrer gemeinsamen Verfeinerung: $I(f,\\mathfrak{Z}) = I(f,\\mathfrak{Z}'') = I(f,\\mathfrak{Z}')$.<br><br>Für $f \\ge 0$ interpretieren wir $I(f,\\mathfrak{Z})$ als Flächeninhalt der <b>Ordinatenmenge</b> $\\{(x,y) \\in \\mathbb{R}^2 \\mid a \\le x \\le b,\\ 0 \\le y \\le f(x)\\}$, allgemein als vorzeichenbehafteten Nettoflächeninhalt.",
    example: "$f$ auf $[0,3]$ mit $f = 2$ auf $(0,1)$ und $f = -1$ auf $(1,3)$: $\\int_0^3 f\\,\\mathrm{d}x = 2 \\cdot 1 + (-1) \\cdot 2 = 0$. Positive und negative Flächen heben sich hier exakt auf.",
    counterexample: "<b>1.</b> Ändert man $f$ nur am Teilungspunkt $x_1$ (z.B. $f(x_1) = 1000$), ändert sich das Integral <i>nicht</i> &ndash; einzelne Punkte haben Breite null.<br><b>2.</b> Die Summe $\\sum c_k \\Delta x_k$ über eine Zerlegung, die <i>keine</i> Zerlegung in Konstanzintervalle ist, ist im Allgemeinen bedeutungslos: Ist $f$ auf $(x_{k-1},x_k)$ nicht konstant, gibt es dort gar keinen Konstanzwert $c_k$."
  },
  {
    id: "k4_lemma_4_7",
    title: "Lemma 4.7: Linearität (Treppenintegral)",
    category: "4.1 Treppenfunktionen",
    type: "lemma",
    front: "Was besagt <b>Lemma 4.7</b> über die Struktur von $\\mathcal{TF}([a,b])$ und die Linearität des Integrals?",
    back: "Die nicht-leere Menge $\\mathcal{TF}([a,b]) = \\{f \\in \\mathcal{F}([a,b]) \\mid f \\text{ ist Treppenfunktion}\\}$ ist ein <b>Unterraum</b> des Vektorraums $\\mathcal{F}([a,b])$ der reellwertigen Funktionen auf $[a,b]$, und $\\int : \\mathcal{TF}([a,b]) \\to \\mathbb{R}$ ist <b>linear</b>: Für alle $f, g \\in \\mathcal{TF}([a,b])$ und $s \\in \\mathbb{R}$ ist $f + g \\in \\mathcal{TF}([a,b])$, $sf \\in \\mathcal{TF}([a,b])$ und<br>$$\\int_a^b (f+g)\\,\\mathrm{d}x = \\int_a^b f\\,\\mathrm{d}x + \\int_a^b g\\,\\mathrm{d}x, \\qquad \\int_a^b (sf)\\,\\mathrm{d}x = s \\int_a^b f\\,\\mathrm{d}x.$$",
    meta: "Skript: Lemma 4.7, S. 181",
    explanation: "<b>Beweis-Trick:</b> Bilde die gemeinsame Verfeinerung $\\mathfrak{Z}$ der Zerlegungen $\\mathfrak{Z}_f$ und $\\mathfrak{Z}_g$. Auf ihr sind beide Funktionen konstant ($c_k$ bzw. $d_k$ auf $(x_{k-1},x_k)$), also ist $f + g$ dort konstant mit Wert $c_k + d_k$, und<br>$$\\sum_k (c_k + d_k)\\Delta x_k = \\sum_k c_k \\Delta x_k + \\sum_k d_k \\Delta x_k.$$",
    example: "$f = \\mathbb{1}$ auf $(0,1)$-Stufen und $g$ mit Stufe bei $\\tfrac12$: Erst nach gemeinsamer Verfeinerung $\\{0 < \\tfrac12 < 1\\}$ kann man beide stufenweise addieren. Konkret: $\\int_0^1 (f+g) = \\int_0^1 f + \\int_0^1 g$ rechnet man dann Stufe für Stufe nach.",
    counterexample: "<b>1.</b> Das <i>Produkt</i>-Integral ist nicht multiplikativ: Im Allgemeinen ist $\\int_a^b fg\\,\\mathrm{d}x \\neq \\big(\\int_a^b f\\,\\mathrm{d}x\\big)\\big(\\int_a^b g\\,\\mathrm{d}x\\big)$. Beispiel: $f = g = \\mathbb{1}$ auf $[0,2]$: links $2$, rechts $4$.<br><b>2.</b> Linearität gilt nur mit <i>konstanten</i> Skalaren $s$: Für eine Funktion $h$ ist $\\int h f\\,\\mathrm{d}x \\neq h \\int f\\,\\mathrm{d}x$ &ndash; letzteres ist nicht einmal eine reelle Zahl."
  },
  {
    id: "k4_lemma_4_8",
    title: "Lemma 4.8: Monotonie (Treppenintegral)",
    category: "4.1 Treppenfunktionen",
    type: "lemma",
    front: "Was besagt die <b>Monotonie des Integrals</b> von Treppenfunktionen (Lemma 4.8)?",
    back: "Sind $f, g \\in \\mathcal{TF}([a,b])$ zwei Treppenfunktionen mit $f \\le g$ (d.h. $f(x) \\le g(x)$ für alle $x \\in [a,b]$), dann gilt<br>$$\\int_a^b f\\,\\mathrm{d}x \\le \\int_a^b g\\,\\mathrm{d}x.$$<br><i>Insbesondere:</i> $f \\in \\mathcal{TF}([a,b])$ und $f \\ge 0$ implizieren $\\int_a^b f\\,\\mathrm{d}x \\ge 0$.",
    meta: "Skript: Lemma 4.8, S. 182",
    explanation: "<b>Beweis:</b> Auf einer gemeinsamen Zerlegung in Konstanzintervalle gilt $c_k \\le d_k$ für alle $k$; da $\\Delta x_k > 0$, überträgt sich dies auf die Summen. <br><br><b>Feinheit aus dem Skript:</b> Für die Konklusion genügt sogar, dass $f \\le g$ nur auf den <i>offenen</i> Konstanzintervallen einer Zerlegung gilt &ndash; die Werte an den endlich vielen Teilungspunkten sind egal.",
    example: "$f = 1$ und $g = 2$ (konstant) auf $[0,1]$: $\\int_0^1 f\\,\\mathrm{d}x = 1 \\le 2 = \\int_0^1 g\\,\\mathrm{d}x$.",
    counterexample: "<b>1.</b> Die Umkehrung ist falsch: Aus $\\int_a^b f\\,\\mathrm{d}x \\le \\int_a^b g\\,\\mathrm{d}x$ folgt <i>nicht</i> $f \\le g$. Beispiel auf $[0,2]$: $f = \\mathbb{1}_{(0,1)}$-Stufe mit Wert $1$ auf $(0,1)$, $0$ sonst, und $g = $ Stufe mit Wert $1$ auf $(1,2)$: beide Integrale sind $1$, aber weder $f \\le g$ noch $g \\le f$.<br><b>2.</b> Aus $\\int_a^b f\\,\\mathrm{d}x \\ge 0$ folgt nicht $f \\ge 0$: Die Treppenfunktion mit Wert $3$ auf $(0,1)$ und $-1$ auf $(1,2)$ hat Integral $2 \\ge 0$, ist aber nicht überall $\\ge 0$."
  },

  // ========================================================================
  // 4.2 DEFINITION DES RIEMANN-INTEGRALS
  // ========================================================================
  {
    id: "k4_def_4_10",
    title: "Definition 4.10: Unter- und Obersummen",
    category: "4.2 Riemann-Integral",
    type: "definition",
    front: "Wie sind für eine beschränkte Funktion $f \\in \\mathcal{F}([a,b])$ die Mengen der <b>Untersummen $\\mathcal{U}(f)$</b> und <b>Obersummen $\\mathcal{O}(f)$</b> definiert? Warum sind sie nicht-leer?",
    back: "$$\\mathcal{U}(f) = \\left\\{ \\int_a^b u\\,\\mathrm{d}x \\;\\middle|\\; u \\in \\mathcal{TF}([a,b]) \\text{ und } u \\le f \\right\\}$$<br>$$\\mathcal{O}(f) = \\left\\{ \\int_a^b o\\,\\mathrm{d}x \\;\\middle|\\; o \\in \\mathcal{TF}([a,b]) \\text{ und } f \\le o \\right\\}$$<br>Da $f$ beschränkt ist, existieren konstante Treppenfunktionen $u \\le f \\le o$ (z.B. $u = \\inf f([a,b])$, $o = \\sup f([a,b])$), also sind beide Mengen nicht-leer.<br><br>Mit Lemma 4.8 folgt die zentrale Ungleichung (4.2):<br>$$\\sup \\mathcal{U}(f) \\le \\inf \\mathcal{O}(f).$$",
    meta: "Skript: Definition 4.10 & Gl. (4.2), S. 183",
    explanation: "Man nähert die &bdquo;wahre&ldquo; Fläche durch bekannte Bausteine an: Untersummen = Integrale von Treppen, die <i>unter</i> dem Graphen liegen; Obersummen = Integrale von Treppen, die ihn <i>einschliessen</i>. Jede Untersumme ist $\\le$ jeder Obersumme, denn aus $u \\le f \\le o$ folgt $\\int u \\le \\int o$ (Lemma 4.8). Deshalb trennt die reelle Achse die beiden Mengen, und es gilt $\\sup\\mathcal{U}(f) \\le \\inf\\mathcal{O}(f)$.<br><br><b>Merke:</b> Beschränktheit ist äquivalent dazu, dass überhaupt Treppenfunktionen $u \\le f \\le o$ existieren.",
    example: "Für $f(x) = x^2$ auf $[0,1]$ gilt (Übung 4.15): $\\mathcal{U}(f) = \\big({-\\infty}, \\tfrac13\\big)$ und $\\mathcal{O}(f) = \\big(\\tfrac13, \\infty\\big)$ &ndash; beide Mengen sind offene Halbgeraden, die sich bei $\\tfrac13$ treffen, ohne $\\tfrac13$ zu enthalten.",
    counterexample: "<b>1.</b> Für <i>unbeschränktes</i> $f$ (z.B. $f(x) = \\tfrac1x$ auf $(0,1]$, $f(0) = 0$) ist $\\mathcal{O}(f) = \\emptyset$: Keine Treppenfunktion liegt oberhalb von $f$. Die Konstruktion bricht zusammen &ndash; deshalb verlangt die Definition Beschränktheit.<br><b>2.</b> $\\sup\\mathcal{U}(f) = \\inf\\mathcal{O}(f)$ gilt <i>nicht</i> immer: Für die Dirichlet-Funktion ist $\\sup\\mathcal{U}(f) = 0 < 1 = \\inf\\mathcal{O}(f)$ (Beispiel 4.17)."
  },
  {
    id: "k4_def_4_11",
    title: "Definition 4.11: Riemann-Integrierbarkeit",
    category: "4.2 Riemann-Integral",
    type: "definition",
    front: "Definiere das <b>untere und obere Integral</b> und die <b>Riemann-Integrierbarkeit</b> einer beschränkten Funktion $f \\in \\mathcal{F}([a,b])$.",
    back: "&bull; $\\underline{I}(f) = \\sup\\, \\mathcal{U}(f)$ heisst <b>unteres Integral</b> von $f$.<br>&bull; $\\overline{I}(f) = \\inf\\, \\mathcal{O}(f)$ heisst <b>oberes Integral</b> von $f$.<br><br>$f$ heisst <b>Riemann-integrierbar</b> (R-integrierbar), falls $\\underline{I}(f) = \\overline{I}(f)$. Der gemeinsame Wert ist das <b>Riemann-Integral</b><br>$$\\int_a^b f\\,\\mathrm{d}x = \\underline{I}(f) = \\overline{I}(f).$$<br>Weiter: $\\mathcal{R}([a,b]) = \\{f \\in \\mathcal{F}([a,b]) \\mid f \\text{ ist Riemann-integrierbar}\\}$; $a$ heisst <b>untere</b>, $b$ <b>obere Integrationsgrenze</b>, $f$ der <b>Integrand</b>.",
    meta: "Skript: Definition 4.11, S. 183-184",
    explanation: "Wegen (4.2) gilt immer $\\underline{I}(f) \\le \\overline{I}(f)$. Riemann-Integrierbarkeit bedeutet: Die &bdquo;Schere&ldquo; zwischen Approximation von unten und von oben geht komplett zu. <br><br><b>Historische Einordnung (Skript):</b> Dieser Zugang über Treppenfunktionen stammt von <i>Darboux</i>; die äquivalenten <i>Riemann-Summen</i> werden erst in Kapitel 6 besprochen. Für $f \\ge 0$ interpretiert man $\\int_a^b f\\,\\mathrm{d}x$ als Flächeninhalt von $\\{(x,y) \\mid a \\le x \\le b,\\ 0 \\le y \\le f(x)\\}$.",
    example: "Jede Treppenfunktion $t \\in \\mathcal{TF}([a,b])$ ist Riemann-integrierbar, und ihr Riemann-Integral stimmt mit dem Treppenintegral aus Definition 4.6 überein (Übung 4.14) &ndash; das Riemann-Integral ist also eine echte Verallgemeinerung. Ebenso: $\\int_0^1 x^2\\,\\mathrm{d}x = \\tfrac13$ (Übung 4.15).",
    counterexample: "<b>1.</b> Die Dirichlet-Funktion $\\mathbb{1}_{\\mathbb{Q} \\cap [0,1]}$ ist beschränkt, aber <i>nicht</i> R-integrierbar: $\\underline{I}(f) = 0 \\neq 1 = \\overline{I}(f)$ (Beispiel 4.17).<br><b>2.</b> Unbeschränkte Funktionen sind per Definition nie Riemann-integrierbar &ndash; $\\tfrac1x$ auf $(0,1]$ fällt nicht unter diesen Integralbegriff (dafür braucht es später uneigentliche Integrale)."
  },
  {
    id: "k4_prop_4_12",
    title: "Proposition 4.12: Charakterisierungen der R-Integrierbarkeit",
    category: "4.2 Riemann-Integral",
    type: "proposition",
    front: "Nenne die <b>drei äquivalenten Charakterisierungen</b> der Riemann-Integrierbarkeit (Proposition 4.12), insbesondere das <b>$\\varepsilon$-Kriterium</b>.",
    back: "Sei $f \\in \\mathcal{F}([a,b])$ beschränkt. Äquivalent sind:<br>(i) $f$ ist Riemann-integrierbar.<br>(ii) Es existiert <i>höchstens eine</i> (dann genau eine) reelle Zahl $I$ mit<br>$$\\int_a^b u\\,\\mathrm{d}x \\le I \\le \\int_a^b o\\,\\mathrm{d}x$$<br>für alle $u, o \\in \\mathcal{TF}([a,b])$ mit $u \\le f \\le o$.<br>(iii) <b>$\\varepsilon$-Kriterium:</b> Für alle $\\varepsilon > 0$ existieren $u, o \\in \\mathcal{TF}([a,b])$ mit $u \\le f \\le o$, so dass<br>$$\\int_a^b (o - u)\\,\\mathrm{d}x < \\varepsilon.$$",
    meta: "Skript: Proposition 4.12, S. 184-185",
    explanation: "Kriterium (iii) ist das wichtigste Beweiswerkzeug des Kapitels: $f$ lässt sich zwischen zwei Treppenfunktionen <b>einquetschen</b>, deren Flächendifferenz beliebig klein wird. Genau damit beweist das Skript die Integrierbarkeit monotoner (Satz 4.31) und stetiger (Satz 4.42) Funktionen.<br><br><b>Verschärfung (Wichtige Übung 4.16):</b> Es genügt sogar, spezielle Familien $T_U, T_O$ von Treppenfunktionen zu betrachten; dann ist $\\int_a^b f\\,\\mathrm{d}x = \\sup\\{\\int u \\mid u \\in T_U\\} = \\inf\\{\\int o \\mid o \\in T_O\\}$.",
    example: "Für $f(x) = x^2$ auf $[0,1]$ liefern äquidistante Zerlegungen Treppen mit $\\int_0^1 (o-u)\\,\\mathrm{d}x = \\tfrac{1}{n} \\to 0$; also ist $f$ R-integrierbar mit $\\int_0^1 x^2\\,\\mathrm{d}x = \\tfrac13$.",
    counterexample: "<b>1.</b> Dirichlet-Funktion: Für jede Wahl $u \\le f \\le o$ gilt $\\int_0^1 (o-u)\\,\\mathrm{d}x \\ge 1$ &ndash; das $\\varepsilon$-Kriterium scheitert für jedes $\\varepsilon < 1$.<br><b>2.</b> In (ii) ist die Eindeutigkeit entscheidend, nicht die Existenz: Ein $I$ mit $\\int u \\le I \\le \\int o$ existiert wegen (4.2) <i>immer</i> (z.B. $I = \\underline{I}(f)$). Bei der Dirichlet-Funktion erfüllt aber <i>jedes</i> $I \\in [0,1]$ die Ungleichungen &ndash; keine Eindeutigkeit, nicht integrierbar."
  },
  {
    id: "k4_bsp_4_17_dirichlet",
    title: "Beispiel 4.17: Die Dirichlet-Funktion",
    category: "4.2 Riemann-Integral",
    type: "beispiel",
    front: "Zeige anhand der <b>Dirichlet-Funktion</b>, dass nicht jede beschränkte Funktion Riemann-integrierbar ist.",
    back: "Betrachte die charakteristische Funktion<br>$$f = \\mathbb{1}_{\\mathbb{Q} \\cap [0,1]} : [0,1] \\to \\{0,1\\}, \\quad x \\mapsto \\begin{cases} 1 & x \\in \\mathbb{Q} \\\\ 0 & x \\notin \\mathbb{Q} \\end{cases}$$<br><b>Oberes Integral $= 1$:</b> Sei $o \\in \\mathcal{TF}([0,1])$ mit $f \\le o$ und Konstanzwerten $c_k$. Da $\\mathbb{Q}$ dicht in $\\mathbb{R}$ ist (Korollar 2.70), enthält jedes $(x_{k-1},x_k)$ ein rationales $x$, also $c_k = o(x) \\ge f(x) = 1$. Mit Teleskopsumme: $\\int_0^1 o\\,\\mathrm{d}x \\ge \\sum_k (x_k - x_{k-1}) = 1$.<br><b>Unteres Integral $= 0$:</b> Analog mit der Dichtheit der irrationalen Zahlen (Übung 4.18).<br>Da $0 \\neq 1$: $f \\notin \\mathcal{R}([0,1])$.",
    meta: "Skript: Beispiel 4.17 & Übung 4.18, S. 186-187",
    explanation: "Die Funktion springt &bdquo;überall dicht&ldquo; zwischen $0$ und $1$: In jedem noch so kleinen Intervall liegen sowohl rationale als auch irrationale Zahlen. Jede Treppe von oben muss daher auf Höhe $\\ge 1$, jede von unten auf Höhe $\\le 0$ bleiben &ndash; die Lücke der Fläche $1$ lässt sich nie schliessen.",
    example: "Dasselbe Argument zeigt: $\\mathbb{1}_{\\mathbb{Q} \\cap [a,b]}$ ist auf keinem Intervall $[a,b]$ mit $a < b$ Riemann-integrierbar &ndash; das obere Integral ist $b - a$, das untere $0$.",
    counterexample: "<b>1.</b> Beschränktheit allein garantiert also keine Integrierbarkeit &ndash; die Dirichlet-Funktion ist das Standard-Gegenbeispiel.<br><b>2.</b> Aber Vorsicht mit der Intuition &bdquo;zu viele Sprünge $\\Rightarrow$ nicht integrierbar&ldquo;: Die <i>modifizierte</i> Dirichlet-Funktion (Riemann-Funktion, Übung 4.25) mit $g(\\tfrac{p}{q}) = \\tfrac1q$ und $g(x) = 0$ für irrationale $x$ ist in jedem rationalen Punkt unstetig und trotzdem Riemann-integrierbar!"
  },
  {
    id: "k4_uebung_4_22",
    title: "Übung 4.22: Ändern an endlich vielen Punkten",
    category: "4.3 Erste Integrationsgesetze",
    type: "lemma",
    front: "Was passiert mit der Riemann-Integrierbarkeit und dem Integral, wenn man eine Funktion $f \\in \\mathcal{R}([a,b])$ an <b>einem Punkt</b> (oder endlich vielen Punkten) abändert?",
    back: "<b>Übung 4.22:</b> Entsteht $f^* \\in \\mathcal{F}([a,b])$ aus $f \\in \\mathcal{R}([a,b])$ durch Abändern des Wertes an <i>nur einem Punkt</i>, so ist $f^*$ Riemann-integrierbar mit demselben Integral:<br>$$\\int_a^b f^*\\,\\mathrm{d}x = \\int_a^b f\\,\\mathrm{d}x.$$<br>Per Induktion gilt dies auch für <b>endlich viele</b> Punktänderungen.",
    meta: "Skript: Übung 4.22, S. 190 (vgl. auch Übung in Abschnitt 4.8)",
    explanation: "Einzelne Punkte haben &bdquo;Breite null&ldquo; und tragen nichts zur Fläche bei &ndash; genau wie beim Treppenintegral die Werte an den Teilungspunkten irrelevant sind (Lemma 4.5). Das Integral &bdquo;sieht&ldquo; endlich viele Ausreisser nicht.",
    example: "Die Funktion $f$ auf $[0,1]$ mit $f(x) = x^2$ für $x \\neq \\tfrac12$ und $f(\\tfrac12) = 100$ ist Riemann-integrierbar mit $\\int_0^1 f\\,\\mathrm{d}x = \\tfrac13$.",
    counterexample: "<b>1.</b> Für <b>abzählbar unendlich viele</b> Punkte ist die Aussage <i>falsch</i>: Die Dirichlet-Funktion entsteht aus der Nullfunktion durch Abändern an den abzählbar vielen Punkten $\\mathbb{Q} \\cap [0,1]$ &ndash; und ist nicht mehr integrierbar (Abschnitt 4.8, Multiple-Choice).<br><b>2.</b> Auch der Wert kann sich bei unendlich vielen Änderungen ändern, selbst wenn Integrierbarkeit erhalten bleibt: Ändert man die Nullfunktion zur Riemann-Funktion (Übung 4.25) ab, bleibt das Integral zufällig $0$ &ndash; aber das muss man dann neu <i>beweisen</i>, es folgt nicht aus Übung 4.22."
  },

  // ========================================================================
  // 4.3 ERSTE INTEGRATIONSGESETZE
  // ========================================================================
  {
    id: "k4_satz_4_19",
    title: "Satz 4.19: Linearität des Riemann-Integrals",
    category: "4.3 Erste Integrationsgesetze",
    type: "satz",
    front: "Was besagt <b>Satz 4.19</b> über die Struktur von $\\mathcal{R}([a,b])$ und die Linearität des Riemann-Integrals?",
    back: "Die Menge $\\mathcal{R}([a,b])$ der Riemann-integrierbaren Funktionen bildet einen <b>Unterraum</b> von $\\mathcal{F}([a,b])$, und das Integral ist eine <b>lineare Funktion</b> auf $\\mathcal{R}([a,b])$: Für $f_1, f_2, f \\in \\mathcal{R}([a,b])$ und $s \\in \\mathbb{R}$ ist $f_1 + f_2 \\in \\mathcal{R}([a,b])$, $sf \\in \\mathcal{R}([a,b])$ und<br>$$\\int_a^b (f_1 + f_2)(x)\\,\\mathrm{d}x = \\int_a^b f_1(x)\\,\\mathrm{d}x + \\int_a^b f_2(x)\\,\\mathrm{d}x,$$<br>$$\\int_a^b (sf)(x)\\,\\mathrm{d}x = s \\int_a^b f(x)\\,\\mathrm{d}x.$$",
    meta: "Skript: Satz 4.19, S. 188-190",
    explanation: "<b>Beweis-Prinzip:</b> Alles wird auf die Treppenfunktions-Ebene zurückgespielt. Für $s \\ge 0$ gilt $s\\,\\mathcal{U}(f) \\subseteq \\mathcal{U}(sf)$ und $s\\,\\mathcal{O}(f) \\subseteq \\mathcal{O}(sf)$; mit den Rechenregeln für Suprema (Proposition 2.62/2.63) folgt $\\underline{I}(sf) = \\overline{I}(sf) = s\\int f$. Für die Summe nutzt man $\\mathcal{U}(f_1) + \\mathcal{U}(f_2) \\subseteq \\mathcal{U}(f_1 + f_2)$ und $\\mathcal{O}(f_1) + \\mathcal{O}(f_2) \\subseteq \\mathcal{O}(f_1+f_2)$ (Gl. 4.3); der Fall $s < 0$ geht analog, da sich alle Abschätzungen umkehren (Übung 4.20).",
    example: "$\\int_1^2 (x^4 + 5x^2 - x + 1)\\,\\mathrm{d}x = \\int_1^2 x^4\\,\\mathrm{d}x + 5\\int_1^2 x^2\\,\\mathrm{d}x - \\int_1^2 x\\,\\mathrm{d}x + 1 = \\tfrac{521}{30}$ (Beispiel 4.40) &ndash; Linearität zerlegt das Polynom in Monom-Integrale.",
    counterexample: "<b>1.</b> In den Inklusionen $\\mathcal{U}(f_1) + \\mathcal{U}(f_2) \\subseteq \\mathcal{U}(f_1+f_2)$ muss <i>keine Gleichheit</i> gelten (Übung 4.21): Es gibt Untersummen von $f_1 + f_2$, die sich nicht als Summe einzelner Untersummen schreiben lassen.<br><b>2.</b> $\\mathcal{R}([a,b])$ ist zwar ein Vektorraum, aber die Umkehrung der Summenregel ist falsch: Aus $f_1 + f_2 \\in \\mathcal{R}$ folgt nicht $f_1, f_2 \\in \\mathcal{R}$. Beispiel: $f_1 = \\mathbb{1}_{\\mathbb{Q} \\cap [0,1]}$ und $f_2 = -f_1$ sind beide nicht integrierbar, ihre Summe $0$ schon."
  },
  {
    id: "k4_uebung_4_23",
    title: "4.3.2 & Übung 4.23: Positivteil und Negativteil",
    category: "4.3 Erste Integrationsgesetze",
    type: "definition",
    front: "Definiere <b>Positivteil $f^+$</b>, <b>Negativteil $f^-$</b> und <b>Absolutbetrag $|f|$</b> einer Funktion $f \\in \\mathcal{F}([a,b])$ und nenne ihre Beziehungen (Übung 4.23).",
    back: "Für $x \\in [a,b]$:<br>$$f^+(x) = \\max\\{0, f(x)\\}, \\quad f^-(x) = \\max\\{0, -f(x)\\},$$<br>$$|f|(x) = \\max\\{f(x), -f(x)\\} = |f(x)|.$$<br><b>Beziehungen (Übung 4.23):</b><br>$$f = f^+ - f^-, \\quad |f| = f^+ + f^-, \\quad f^+ = \\frac{|f| + f}{2}, \\quad f^- = \\frac{|f| - f}{2}.$$",
    meta: "Skript: Abschnitt 4.3.2 & Übung 4.23, S. 190",
    explanation: "Diese Zerlegung ist ein Standard-Trick der Analysis: Beweise werden erst für nicht-negative Funktionen geführt und dann via $f = f^+ - f^-$ auf beliebige Funktionen übertragen. Im Beweis von Satz 4.24 (iii) zeigt man zuerst, dass $f^+$ integrierbar ist, und erhält daraus $|f| = 2f^+ - f$ mittels Linearität.<br><br><b>Achtung Vorzeichen:</b> $f^-$ ist als $\\max\\{0, -f\\}$ definiert und damit selbst $\\ge 0$ &ndash; der Negativteil ist eine <i>nicht-negative</i> Funktion!",
    example: "$f(x) = -3$: $f^+(x) = 0$, $f^-(x) = 3$. Probe: $f = 0 - 3 = -3$, $|f| = 0 + 3 = 3$. Für $f(x) = \\sin x$ schneidet $f^+$ die negativen Bögen ab und $f^-$ klappt sie nach oben.",
    counterexample: "<b>1.</b> Häufiger Fehler: $f^-(x) = \\min\\{0, f(x)\\}$ wäre <i>falsch</i> (das wäre $-f^-$). Mit dieser Variante würde $f^+ + f^- = f \\neq |f|$ gelten.<br><b>2.</b> Es gilt <i>nicht</i> $\\int_a^b |f|\\,\\mathrm{d}x = \\big|\\int_a^b f\\,\\mathrm{d}x\\big|$: Für $f$ mit $\\int_0^2 f = 0$, aber $f = 1$ auf $(0,1)$, $f = -1$ auf $(1,2)$ ist $\\int|f| = 2 \\neq 0$."
  },
  {
    id: "k4_satz_4_24",
    title: "Satz 4.24: Monotonie & Dreiecksungleichung",
    category: "4.3 Erste Integrationsgesetze",
    type: "satz",
    front: "Nenne die <b>drei Monotonie-Eigenschaften</b> des Riemann-Integrals aus Satz 4.24, insbesondere die <b>Dreiecksungleichung</b>.",
    back: "Für $f_1, f_2 \\in \\mathcal{R}([a,b])$ gilt:<br>(i) Falls $f_1 \\ge 0$, so ist $\\int_a^b f_1(x)\\,\\mathrm{d}x \\ge 0$.<br>(ii) Falls $f_1 \\le f_2$, so gilt $\\int_a^b f_1(x)\\,\\mathrm{d}x \\le \\int_a^b f_2(x)\\,\\mathrm{d}x$.<br>(iii) $|f_1|$ ist Riemann-integrierbar auf $[a,b]$ und es gilt die <b>Dreiecksungleichung</b><br>$$\\left| \\int_a^b f_1(x)\\,\\mathrm{d}x \\right| \\le \\int_a^b |f_1(x)|\\,\\mathrm{d}x.$$",
    meta: "Skript: Satz 4.24, S. 190-192",
    explanation: "<b>Warum &bdquo;Dreiecksungleichung&ldquo;?</b> (iii) ist die &bdquo;kontinuierliche Version&ldquo; der verallgemeinerten Dreiecksungleichung $|\\sum_i z_i| \\le \\sum_i |z_i|$: Das Integral ist ein Grenzfall von Summen. $\\int f$ misst <i>Netto</i>-Fläche (Vorzeichen löschen sich aus), $\\int |f|$ die <i>Gesamt</i>-Fläche.<br><br><b>Beweisskizze (iii):</b> $s \\le t \\Rightarrow t^+ - s^+ \\le t - s$, also $o^+ - u^+ \\le o - u$ für einquetschende Treppen; mit Prop. 4.12 (iii) ist $f^+$ integrierbar, dann $|f| = 2f^+ - f$ (Satz 4.19), und aus $\\pm f \\le |f|$ folgt die Ungleichung via (ii).",
    example: "$f(x) = \\sin x$ auf $[0, 2\\pi]$ (sobald verfügbar): $\\int_0^{2\\pi} \\sin x\\,\\mathrm{d}x = 0$, aber $\\int_0^{2\\pi} |\\sin x|\\,\\mathrm{d}x = 4$ &ndash; die Ungleichung $0 \\le 4$ ist strikt. Elementar: $f = 1$ auf $(0,1)$, $f = -1$ auf $(1,2)$ liefert $|0| \\le 2$.",
    counterexample: "<b>1.</b> Die Umkehrung von (i) ist falsch: $\\int_a^b f \\ge 0$ impliziert nicht $f \\ge 0$ (negative Dellen können kompensiert werden).<br><b>2.</b> Die Umkehrung von (iii) gilt nicht: Aus der Integrierbarkeit von $|f|$ folgt <i>nicht</i> die von $f$. Beispiel: $f = \\mathbb{1}_{\\mathbb{Q} \\cap [0,1]} - \\mathbb{1}_{[0,1] \\setminus \\mathbb{Q}}$ (Wert $1$ auf $\\mathbb{Q}$, $-1$ sonst) ist nicht integrierbar, aber $|f| = 1$ ist es."
  },
  {
    id: "k4_satz_4_26",
    title: "Satz 4.26: Additionseigenschaft bezüglich Intervallen",
    category: "4.3 Erste Integrationsgesetze",
    type: "satz",
    front: "Was besagt <b>Satz 4.26</b> (Additionseigenschaft bezüglich Intervallen) und welche <b>Konventionen</b> (Gl. 4.9) trifft man für Integrationsgrenzen?",
    back: "<b>Satz 4.26:</b> Seien $a < b < c$ und $f \\in \\mathcal{F}([a,c])$ mit $f_1 = f|_{[a,b]}$, $f_2 = f|_{[b,c]}$. Dann ist $f$ <i>genau dann</i> Riemann-integrierbar, wenn $f_1$ <i>und</i> $f_2$ Riemann-integrierbar sind, und in diesem Fall gilt<br>$$\\int_a^c f(x)\\,\\mathrm{d}x = \\int_a^b f_1(x)\\,\\mathrm{d}x + \\int_b^c f_2(x)\\,\\mathrm{d}x.$$<br><b>Konventionen (4.9):</b><br>$$\\int_b^a f\\,\\mathrm{d}x = -\\int_a^b f\\,\\mathrm{d}x \\quad \\text{und} \\quad \\int_a^a f\\,\\mathrm{d}x = 0.$$<br>Damit gilt die Intervalladditivität für <b>beliebige</b> $a, b, c \\in I$ (Wichtige Übung 4.27).",
    meta: "Skript: Satz 4.26, Gl. (4.9), Übung 4.27, S. 193-194",
    explanation: "Geometrisch: Flächen werden aneinandergeklebt. Wichtig ist, dass der Satz eine <i>Äquivalenz</i> ist &ndash; Integrierbarkeit auf dem grossen Intervall ist gleichwertig zur Integrierbarkeit auf beiden Teilen. Beweisidee: Für Treppenfunktionen zerschneidet man die Zerlegung bei $b$ (Gl. 4.4/4.5); allgemein überträgt sich das auf $\\mathcal{U}(f) = \\mathcal{U}(f_1) + \\mathcal{U}(f_2)$ und damit $\\underline{I}(f) = \\underline{I}(f_1) + \\underline{I}(f_2)$ sowie analog für $\\overline{I}$. Die Vorzeichenkonvention macht die $x$-Achse zum &bdquo;gerichteten Weg&ldquo;.",
    example: "$\\int_3^1 f\\,\\mathrm{d}x = -\\int_1^3 f\\,\\mathrm{d}x$ und z.B. $\\int_0^2 f = \\int_0^5 f + \\int_5^2 f$ &ndash; die Additivität $\\int_\\alpha^\\beta + \\int_\\beta^\\gamma = \\int_\\alpha^\\gamma$ gilt dank (4.9) für jede Reihenfolge der Punkte.",
    counterexample: "<b>1.</b> Ohne die Konvention (4.9) wäre $\\int_a^b + \\int_b^c = \\int_a^c$ für $b \\notin [a,c]$ schlicht falsch bzw. sinnlos &ndash; die Konvention ist genau so gemacht, dass keine Fallunterscheidung nötig ist.<br><b>2.</b> Stückweises Zusammensetzen erhält Integrierbarkeit, aber nicht Stetigkeit: $f = \\mathbb{1}$ auf $[0,1]$, $f = 0$ auf $(1,2]$ ist integrierbar mit $\\int_0^2 f = 1$, obwohl $f$ bei $x = 1$ springt &ndash; Integrierbarkeit ist eine viel schwächere Eigenschaft als Stetigkeit."
  },
  {
    id: "k4_uebung_4_28",
    title: "Übung 4.28: Stetigkeit des partikulären Integrals",
    category: "4.3 Erste Integrationsgesetze",
    type: "lemma",
    front: "Was besagt Übung 4.28 über das <b>partikuläre Integral</b> $x \\mapsto \\int_a^x f(t)\\,\\mathrm{d}t$ einer Riemann-integrierbaren Funktion?",
    back: "Sei $a < b$ und $f: [a,b] \\to \\mathbb{R}$ Riemann-integrierbar. Dann definiert das <b>partikuläre Integral</b><br>$$F: x \\in [a,b] \\mapsto \\int_a^x f(t)\\,\\mathrm{d}t$$<br>eine <b>stetige</b> reellwertige Funktion auf $[a,b]$. Die Übung fragt weiter: $F$ ist sogar <b>Lipschitz-stetig</b> (und damit gleichmässig stetig).",
    meta: "Skript: Übung 4.28, S. 194",
    explanation: "Da $f$ integrierbar ist, ist $f$ beschränkt, etwa $|f| \\le M$. Für $x < y$ gilt dann mit Intervalladditivität und Dreiecksungleichung:<br>$$|F(y) - F(x)| = \\left|\\int_x^y f(t)\\,\\mathrm{d}t\\right| \\le \\int_x^y |f(t)|\\,\\mathrm{d}t \\le M \\cdot |y - x|.$$<br>Die aufgesammelte Fläche kann bei kleiner Verschiebung von $x$ also keinen Sprung machen &ndash; <b>Integrieren glättet</b>.",
    example: "$f(x) = \\operatorname{sgn}(x)$ auf $[-1,1]$ ist unstetig bei $0$, aber $F(x) = \\int_{-1}^x \\operatorname{sgn}(t)\\,\\mathrm{d}t = |x| - 1$ ist stetig (sogar Lipschitz mit Konstante $1$). Der Sprung des Integranden wird zum Knick der Integralfunktion.",
    counterexample: "<b>1.</b> $F$ ist im Allgemeinen <i>nicht differenzierbar</i>: Beim obigen Beispiel hat $F(x) = |x| - 1$ bei $x = 0$ einen Knick &ndash; Stetigkeit von $F$ ja, Ableitung nein (das klärt erst der Fundamentalsatz in Kapitel 9 unter Stetigkeitsannahmen an $f$).<br><b>2.</b> Ohne Beschränktheit bricht das Argument zusammen: Für unbeschränkte Integranden (die hier gar nicht zugelassen sind) wäre keine Lipschitz-Schranke $M$ verfügbar."
  },

  // ========================================================================
  // 4.4 ANWENDUNGEN
  // ========================================================================
  {
    id: "k4_def_4_29",
    title: "Definition 4.29: Additive Intervallfunktion",
    category: "4.4 Anwendungen",
    type: "definition",
    front: "Wann heisst eine Funktion $\\mathcal{I}: (\\alpha,\\beta) \\in [a,b]^2 \\mapsto \\mathcal{I}(\\alpha,\\beta) \\in \\mathbb{R}$ eine <b>additive Intervallfunktion</b> auf $[a,b]$?",
    back: "$\\mathcal{I}$ heisst <b>additive Intervallfunktion</b> auf $[a,b]$, falls:<br>(i) Für alle $\\alpha \\in [a,b]$ gilt $\\mathcal{I}(\\alpha, \\alpha) = 0$.<br>(ii) Für alle $\\alpha, \\beta \\in [a,b]$ gilt $\\mathcal{I}(\\alpha, \\beta) = -\\mathcal{I}(\\beta, \\alpha)$.<br>(iii) Für alle $\\alpha, \\beta, \\gamma \\in [a,b]$ gilt $\\mathcal{I}(\\alpha,\\beta) + \\mathcal{I}(\\beta,\\gamma) = \\mathcal{I}(\\alpha,\\gamma)$.",
    meta: "Skript: Definition 4.29, S. 195",
    explanation: "Das abstrahiert genau die Eigenschaften, die das bestimmte Integral nach Satz 4.26 und den Konventionen (4.9) besitzt. Äquivalent kann man $\\mathcal{I}$ als Funktion $\\mathcal{J}$ auf den nicht-leeren Teilintervallen von $[a,b]$ auffassen mit $\\mathcal{J}([\\alpha,\\alpha]) = 0$ und $\\mathcal{J}([\\alpha,\\beta] \\cup [\\beta,\\gamma]) = \\mathcal{J}([\\alpha,\\beta]) + \\mathcal{J}([\\beta,\\gamma])$ (Gl. 4.10) &ndash; daher der Name &bdquo;additiv&ldquo;.",
    example: "Für jede Riemann-integrierbare Funktion $f: [a,b] \\to \\mathbb{R}$ ist $\\mathcal{I}(\\alpha,\\beta) = \\int_\\alpha^\\beta f(x)\\,\\mathrm{d}x$ eine additive Intervallfunktion (Gl. 4.11, via Satz 4.26 und Übung 4.27). Physikalisch: $\\mathcal{I}(\\alpha,\\beta)$ = Masse des Stababschnitts $[\\alpha,\\beta]$.",
    counterexample: "<b>1.</b> Nicht jede additive Intervallfunktion ist von der Form $\\int_\\alpha^\\beta f\\,\\mathrm{d}x$ &ndash; das Skript merkt dies explizit an; erst die Zusatzbedingung aus Proposition 4.30 erzwingt die Integraldarstellung.<br><b>2.</b> $\\mathcal{I}(\\alpha,\\beta) = (\\beta - \\alpha)^2$ ist <i>keine</i> additive Intervallfunktion: (iii) verlangt $(\\beta-\\alpha)^2 + (\\gamma-\\beta)^2 = (\\gamma-\\alpha)^2$, was z.B. für $\\alpha=0, \\beta=1, \\gamma=2$ falsch ist ($1 + 1 \\neq 4$); auch (ii) scheitert, da Quadrate nie negativ sind."
  },
  {
    id: "k4_prop_4_30",
    title: "Proposition 4.30: Charakterisierung via Einschliessung",
    category: "4.4 Anwendungen",
    type: "proposition",
    front: "Unter welcher Bedingung ist eine additive Intervallfunktion $\\mathcal{I}$ nach <b>Proposition 4.30</b> zwingend das Riemann-Integral einer Funktion $f$?",
    back: "Seien $a < b$, $f: [a,b] \\to \\mathbb{R}$ Riemann-integrierbar und $\\mathcal{I}$ eine additive Intervallfunktion auf $[a,b]$. Gilt<br>$$(\\beta - \\alpha) \\inf_{x \\in (\\alpha,\\beta)} f(x) \\;\\le\\; \\mathcal{I}(\\alpha,\\beta) \\;\\le\\; (\\beta - \\alpha) \\sup_{x \\in (\\alpha,\\beta)} f(x)$$<br>für alle $\\alpha < \\beta$ in $[a,b]$ (Gl. 4.12), dann ist<br>$$\\mathcal{I}(\\alpha,\\beta) = \\int_\\alpha^\\beta f(x)\\,\\mathrm{d}x \\quad \\text{für alle } \\alpha, \\beta \\in [a,b].$$",
    meta: "Skript: Proposition 4.30, S. 195-196",
    explanation: "<b>Beweisidee:</b> Für eine Treppenfunktion $u \\le f$ mit Konstanzwerten $c_k$ gilt $c_k \\le \\inf_{(x_{k-1},x_k)} f$; Additivität von $\\mathcal{I}$ liefert $\\int_\\alpha^\\beta u\\,\\mathrm{d}x \\le \\sum_k \\mathcal{I}(x_{k-1},x_k) = \\mathcal{I}(\\alpha,\\beta)$, analog von oben. Also $\\underline{I} \\le \\mathcal{I}(\\alpha,\\beta) \\le \\overline{I}$, und da $f$ Riemann-integrierbar ist, bleibt nur der eine Wert $\\int_\\alpha^\\beta f\\,\\mathrm{d}x$.<br><br><b>Bedeutung:</b> Die Proposition ist der <i>Wegweiser für Anwendungen</i> &ndash; jede Grösse, die intervallweise additiv ist und sich durch $\\inf$ und $\\sup$ der Dichte abschätzen lässt, <i>muss</i> das Integral der Dichte sein.",
    example: "<b>Masse eines Stabes</b> (4.4.3): Dichte $\\rho(x)$ in kg/m $\\Rightarrow$ $m = \\int_a^b \\rho(x)\\,\\mathrm{d}x$. <b>Weitere Anwendungen:</b> Flächeninhalt unter dem Graphen (4.4.2), Gesamtmoment $M(a,b) = \\int_a^b \\rho(x)\\,g\\,x\\,\\mathrm{d}x$ und Schwerpunkt $x_0 = \\frac{1}{m}\\int_a^b \\rho(x)\\,x\\,\\mathrm{d}x$ (4.4.3), geleistete Arbeit/Energie $\\int_a^b f(t)\\,\\mathrm{d}t$ aus der Leistung $f(t)$ (4.4.4).",
    counterexample: "<b>1.</b> Ohne (4.12) ist die Schlussfolgerung falsch: $\\mathcal{I}(\\alpha,\\beta) = 0$ für alle $\\alpha,\\beta$ ist additiv, erfüllt aber (4.12) für $f = 1$ nicht &ndash; und ist auch nicht $\\int_\\alpha^\\beta 1\\,\\mathrm{d}x = \\beta - \\alpha$.<br><b>2.</b> Die Momentfunktion $M(\\alpha,\\beta)$ aus 4.4.3 erfüllt (4.12) bezüglich $\\rho$ <i>nicht</i> direkt (sie hat die Form $g\\alpha\\inf\\{\\rho\\}(\\beta-\\alpha) \\le M \\le g\\beta\\sup\\{\\rho\\}(\\beta-\\alpha)$) &ndash; das Skript passt den Beweis mit der Stetigkeit von $x \\mapsto x$ an. Die Voraussetzungen muss man also wirklich prüfen, nicht nur die Additivität."
  },

  // ========================================================================
  // 4.5 INTEGRIERBARKEIT MONOTONER FUNKTIONEN
  // ========================================================================
  {
    id: "k4_satz_4_31",
    title: "Satz 4.31: Integrierbarkeit monotoner Funktionen",
    category: "4.5 Monotone Funktionen",
    type: "satz",
    front: "Was besagt <b>Satz 4.31</b> über monotone Funktionen, und wie funktioniert der Beweis?",
    back: "<b>Satz 4.31:</b> Jede monotone Funktion in $\\mathcal{F}([a,b])$ ist Riemann-integrierbar.<br><br><b>Beweis (für $f$ monoton wachsend):</b> Wähle die äquidistante Zerlegung $x_k = a + \\frac{b-a}{n}k$ und die Treppenfunktionen $u, o$ mit $u = f(x_{k-1})$ und $o = f(x_k)$ auf $(x_{k-1}, x_k)$ (links- bzw. rechtsseitiger Wert). Wegen Monotonie gilt $u \\le f \\le o$, und mit Teleskopsumme:<br>$$\\int_a^b (o-u)\\,\\mathrm{d}x = \\sum_{k=1}^n \\big(f(x_k) - f(x_{k-1})\\big)\\frac{b-a}{n} = \\frac{b-a}{n}\\big(f(b) - f(a)\\big).$$<br>Nach dem Archimedischen Prinzip wird dies $< \\varepsilon$ für grosses $n$; Prop. 4.12 (iii) schliesst den Beweis. (Monoton fallend: wende das Resultat auf $-f$ an, Satz 4.19.)",
    meta: "Skript: Satz 4.31, S. 199-200",
    explanation: "Die Differenz von Ober- und Untertreppe besteht aus $n$ Rechtecken, die man übereinandergestapelt in ein einziges Rechteck der Breite $\\frac{b-a}{n}$ und Höhe $f(b) - f(a)$ schieben kann &ndash; und dessen Fläche schrumpft mit $n \\to \\infty$ gegen null. Monotonie ersetzt hier jede Stetigkeitsannahme: Die Funktion darf beliebig viele Sprünge haben!",
    example: "<b>1.</b> $x \\mapsto \\sqrt{1 - x^2}$ auf $[0,1]$ ist monoton fallend, also Riemann-integrierbar (Übung 4.32, Kreisfunktion).<br><b>2.</b> Die Gauss-Abbildung $g(x) = \\{\\tfrac1x\\}$ (gebrochener Anteil) für $x \\in (0,1]$, $g(0) = 0$, ist Riemann-integrierbar, obwohl sie abzählbar unendlich viele Sprungstellen bei $\\tfrac1n$ hat (Übung 4.36) &ndash; sie ist auf jedem $(\\tfrac{1}{n+1}, \\tfrac{1}{n})$ monoton.",
    counterexample: "<b>1.</b> Monotonie ist hinreichend, aber nicht notwendig: $x^2$ auf $[-1,1]$ ist nicht monoton und trotzdem integrierbar.<br><b>2.</b> Beschränktheit allein (ohne Monotonie) genügt nicht &ndash; die Dirichlet-Funktion ist beschränkt, in keinem Teilintervall monoton und nicht integrierbar."
  },
  {
    id: "k4_def_4_33_korollar_4_34",
    title: "Definition 4.33 & Korollar 4.34: Stückweise Monotonie",
    category: "4.5 Monotone Funktionen",
    type: "definition",
    front: "Wann heisst $f \\in \\mathcal{F}([a,b])$ <b>stückweise monoton</b>, und was besagt <b>Korollar 4.34</b>?",
    back: "<b>Definition 4.33:</b> $f$ heisst <b>stückweise monoton</b>, falls es eine Zerlegung $\\mathfrak{Z} = \\{a = x_0 < \\dots < x_n = b\\}$ gibt, so dass $f|_{(x_{k-1},x_k)}$ für alle $k \\in \\{1,\\dots,n\\}$ monoton ist.<br><br><b>Korollar 4.34:</b> Jede stückweise monotone, <i>beschränkte</i> Funktion in $\\mathcal{F}([a,b])$ ist Riemann-integrierbar.<br><br>(Beweis via Satz 4.31 auf jedem Teilintervall, Satz 4.26 zum Zusammenkleben und Übung 4.22 für die Randpunkte &ndash; Übung 4.35.)",
    meta: "Skript: Definition 4.33, Korollar 4.34, Übung 4.35, S. 200",
    explanation: "Stückweise Monotonie deckt fast alle &bdquo;in der Praxis vorkommenden&ldquo; Funktionen ab. Insbesondere: Jedes Monom $x^d$ ist stückweise monoton (für $a < 0 < b$ zerlege bei $0$), also integrierbar &ndash; und mit Linearität (Satz 4.19) per Induktion <b>jedes Polynom</b>.",
    example: "$f(x) = x^2$ auf $[-1, 2]$: Mit $\\mathfrak{Z} = \\{-1 < 0 < 2\\}$ ist $f$ auf $(-1,0)$ monoton fallend und auf $(0,2)$ monoton wachsend $\\Rightarrow$ stückweise monoton $\\Rightarrow$ Riemann-integrierbar.",
    counterexample: "<b>1.</b> Die <i>Beschränktheit</i> in Korollar 4.34 ist wesentlich und folgt nicht aus stückweiser Monotonie: $f(x) = \\tfrac1x$ für $x \\in (0,1]$, $f(0) = 0$, ist auf $(0,1)$ monoton, aber unbeschränkt und damit nicht Riemann-integrierbar.<br><b>2.</b> Nicht jede integrierbare Funktion ist stückweise monoton: Die Riemann-Funktion (Übung 4.25) ist in keinem Teilintervall monoton, aber integrierbar. Auch $x \\mapsto x \\sin(\\tfrac1x)$ oszilliert nahe $0$ unendlich oft &ndash; keine endliche Zerlegung in Monotoniestücke, aber (als stetige Funktion, Satz 4.42) integrierbar."
  },

  // ========================================================================
  // 4.6 INTEGRATION VON POLYNOMEN
  // ========================================================================
  {
    id: "k4_satz_4_37",
    title: "Satz 4.37: Integration von Polynomen",
    category: "4.6 Polynome",
    type: "satz",
    front: "Was besagt <b>Satz 4.37</b> über die Riemann-Integrierbarkeit von Polynomen, und wie lautet die Formel für Monome $x^d$?",
    back: "Die Einschränkung einer reellen Polynomfunktion auf $[a,b]$ ist Riemann-integrierbar. Für alle Monome $x^d$ mit $d \\in \\mathbb{N}_0$ gilt<br>$$\\int_a^b x^d\\,\\mathrm{d}x = \\frac{1}{d+1}\\left(b^{d+1} - a^{d+1}\\right).$$",
    meta: "Skript: Satz 4.37, S. 202-203",
    explanation: "<b>Beweisidee (Fall $0 = a < b$):</b> $x^d$ ist auf $[0,b]$ monoton wachsend; mit äquidistanter Zerlegung $x_k = \\frac{k}{n}b$ erhält man (Gl. 4.13)<br>$$\\frac{b^{d+1}}{n^{d+1}} \\sum_{k=1}^{n-1} k^d \\le \\int_0^b x^d\\,\\mathrm{d}x \\le \\frac{b^{d+1}}{n^{d+1}} \\sum_{k=1}^{n} k^d.$$<br>Die Potenzsummenformel $\\sum_{k=1}^n k^d = \\frac{n^{d+1}}{d+1} + c_d n^d + \\dots + c_0$ (Proposition 3.32!) quetscht beide Seiten gegen $\\frac{b^{d+1}}{d+1}$; das Archimedische Prinzip schliesst den Beweis. Allgemeine Grenzen via Satz 4.26 (Übung 4.38).<br><br><b>Bemerkung (Skript):</b> Satz 4.37 ist das &bdquo;kontinuierliche Analog&ldquo; zu Proposition 3.32 &ndash; und bemerkenswerterweise <i>einfacher</i>: keine unbekannten Koeffizienten $c_k$, sondern eine geschlossene Formel.",
    example: "<b>Beispiel 4.40:</b> Mit der Notation $[f(x)]_a^b = f(b) - f(a)$:<br>$$\\int_1^2 (x^4 + 5x^2 - x + 1)\\,\\mathrm{d}x = \\left[\\tfrac{x^5}{5}\\right]_1^2 + 5\\left[\\tfrac{x^3}{3}\\right]_1^2 - \\left[\\tfrac{x^2}{2}\\right]_1^2 + 1 = \\tfrac{521}{30}.$$<br>Auch schön (Übung 4.41): $\\int_0^1 x^m\\,\\mathrm{d}x + \\int_0^1 x^{1/m}\\,\\mathrm{d}x = 1$ &ndash; die beiden Graphen sind Spiegelbilder an der Diagonale des Einheitsquadrats.",
    counterexample: "<b>1.</b> Die Formel gilt nur für $d \\in \\mathbb{N}_0$: Für $d = -1$ wäre $\\frac{1}{d+1}$ nicht definiert &ndash; $\\int_a^b \\tfrac1x\\,\\mathrm{d}x$ führt auf den Logarithmus (Kapitel 9), nicht auf eine Potenzfunktion.<br><b>2.</b> Vorsicht bei naiver Grenzwert-Argumentation: Das Skript betont, dass in diesem Kapitel bewusst <i>ohne</i> Grenzwerte gearbeitet wird (die gibt es erst in Kapitel 6) &ndash; der Abschluss des Beweises benutzt das Archimedische Prinzip (Satz 2.68), nicht &bdquo;$n \\to \\infty$&ldquo;."
  },

  // ========================================================================
  // 4.7 INTEGRIERBARKEIT STETIGER FUNKTIONEN
  // ========================================================================
  {
    id: "k4_satz_4_42",
    title: "Satz 4.42: Integrierbarkeit stetiger Funktionen",
    category: "4.7 Stetige Funktionen",
    type: "satz",
    front: "Was besagt <b>Satz 4.42</b>, und welche beiden grossen Sätze aus Kapitel 3 gehen in den Beweis ein?",
    back: "<b>Satz 4.42:</b> Eine stetige Funktion auf einem kompakten Intervall $[a,b]$ mit $a < b$ ist Riemann-integrierbar.<br><br><b>Beweis-Zutaten:</b><br>&bull; <b>Gleichmässige Stetigkeit</b> (Satz 3.75): Zu $\\varepsilon > 0$ gibt es $\\delta > 0$ mit $|x - y| < \\delta \\Rightarrow |f(x) - f(y)| < \\varepsilon$ für <i>alle</i> $x, y \\in [a,b]$.<br>&bull; <b>Min/Max-Annahme</b> (Korollar 3.69): Auf jedem $[x_{k-1}, x_k]$ existieren $m_k = \\min f([x_{k-1},x_k])$ und $M_k = \\max f([x_{k-1},x_k])$.<br><br>Wählt man die Zerlegung mit Maschenweite $< \\delta$, gilt $M_k - m_k < \\varepsilon$, und die Treppen $u = m_k$, $o = M_k$ liefern<br>$$\\int_a^b (o-u)\\,\\mathrm{d}x = \\sum_{k=1}^n (M_k - m_k)\\Delta x_k < \\varepsilon(b-a),$$<br>womit Prop. 4.12 (iii) greift.",
    meta: "Skript: Satz 4.42, S. 205-206",
    explanation: "Gleichmässige Stetigkeit ist der Schlüssel: Das <i>eine</i> $\\delta$ funktioniert überall auf $[a,b]$ gleichzeitig, sodass <i>alle</i> Stufen gleichzeitig niedrig ($< \\varepsilon$) werden. Auf einem kompakten Intervall ist Stetigkeit automatisch gleichmässig &ndash; genau hier geht die Kompaktheit ein. Selbst eine &bdquo;zittrige&ldquo; stetige Funktion (Figur 4.4) wird so eingequetscht.",
    example: "Jedes Polynom, $x \\mapsto |x|$, $x \\mapsto \\sqrt{x}$ auf $[0,1]$ &ndash; alle stetig auf kompakten Intervallen, also Riemann-integrierbar. Auch $x \\mapsto x\\sin(\\tfrac1x)$ (stetig fortgesetzt durch $0$ bei $x=0$) ist integrierbar, obwohl es in keine endlich vielen Monotoniestücke zerfällt.",
    counterexample: "<b>1.</b> Stetigkeit ist hinreichend, aber nicht notwendig: Treppenfunktionen und monotone Funktionen mit Sprüngen (Satz 4.31) sind integrierbar, ohne stetig zu sein.<br><b>2.</b> Die Kompaktheit des Intervalls ist wesentlich: $f(x) = \\tfrac1x$ ist auf $(0, 1]$ stetig, aber unbeschränkt &ndash; auf dem <i>nicht kompakten</i> Definitionsbereich existiert kein Riemann-Integral. Gleichmässige Stetigkeit (und damit der Beweis) versagt dort."
  },
  {
    id: "k4_prop_4_44",
    title: "Proposition 4.44: Sandwich-Kriterium mit stetigen Funktionen",
    category: "4.7 Stetige Funktionen",
    type: "proposition",
    front: "Wie charakterisiert <b>Proposition 4.44</b> die Riemann-Integrierbarkeit mittels <b>stetiger</b> Funktionen (Sandwich-Kriterium)?",
    back: "Eine Funktion $f \\in \\mathcal{F}([a,b])$ auf einem kompakten Intervall $[a,b]$ mit $a < b$ ist <b>genau dann</b> Riemann-integrierbar, wenn für alle $\\varepsilon > 0$ <i>stetige</i> Funktionen $f_+, f_-$ existieren mit $f_- \\le f \\le f_+$ und<br>$$\\int_a^b (f_+ - f_-)\\,\\mathrm{d}x < \\varepsilon.$$",
    meta: "Skript: Proposition 4.44, S. 206-208",
    explanation: "Bemerkenswert: Man kann Treppenfunktionen in Prop. 4.12 (iii) durch stetige Funktionen ersetzen &ndash; blockige und glatte Approximation sind gleich mächtig.<br><br><b>Beweisidee ($\\Leftarrow$):</b> Stetige $f_\\pm$ sind nach Satz 4.42 integrierbar und lassen sich selbst durch Treppen einquetschen; Kombination gibt $\\int(o - u) < 3\\varepsilon$.<br><b>($\\Rightarrow$):</b> Es genügt, eine Treppenfunktion $t$ stetig zu dominieren: Man ersetzt $t$ nahe der Teilungspunkte durch steile <i>stetige Spitzen</i> der halben Breite $\\delta$ (Figur 4.5) &ndash; stückweise linear &ndash; mit $\\int_a^b (t_+ - t)\\,\\mathrm{d}x \\le 2(M-m)\\delta n$, was mit $\\delta < \\frac{\\varepsilon}{2(M-m)n}$ beliebig klein wird.",
    example: "Die Signum-Funktion auf $[-1,1]$: Ersetze den Sprung bei $0$ durch eine steile lineare Rampe von $-1$ auf $1$ auf $[-\\delta, \\delta]$ (von oben) &ndash; die Differenzfläche $\\sim 2\\delta$ wird beliebig klein. So sieht man die Integrierbarkeit von $\\operatorname{sgn}$ auch über stetige Sandwiches.",
    counterexample: "<b>1.</b> Für die Dirichlet-Funktion scheitert auch dieses Kriterium: Jede stetige Funktion $f_+ \\ge \\mathbb{1}_{\\mathbb{Q}\\cap[0,1]}$ erfüllt $f_+ \\ge 1$ auf ganz $[0,1]$ (Stetigkeit + Dichtheit von $\\mathbb{Q}$), jede stetige $f_- \\le f$ erfüllt $f_- \\le 0$; also $\\int (f_+ - f_-) \\ge 1$.<br><b>2.</b> Die Richtung &bdquo;$f$ stetig einquetschbar $\\Rightarrow$ $f$ stetig&ldquo; ist falsch: Treppenfunktionen sind beliebig gut stetig einquetschbar, aber unstetig. Das Sandwich-Kriterium charakterisiert <i>Integrierbarkeit</i>, nicht Stetigkeit."
  },
  {
    id: "k4_uebung_4_25",
    title: "Übung 4.25: Die Riemann-Funktion (modifizierte Dirichlet-Funktion)",
    category: "4.7 Stetige Funktionen",
    type: "beispiel",
    front: "Was besagt Übung 4.25 über die <b>Riemann-Funktion</b> (modifizierte Dirichlet-Funktion), und warum ist das Resultat überraschend?",
    back: "Die Funktion<br>$$g: [0,1] \\to [0,1], \\quad x \\mapsto \\begin{cases} 0 & \\text{falls } x \\text{ irrational} \\\\ \\frac{1}{q} & \\text{falls } x = \\frac{p}{q} \\text{ mit } p, q \\text{ teilerfremd} \\end{cases}$$<br>ist <b>Riemann-integrierbar</b> (mit Integral $0$).",
    meta: "Skript: Übung 4.25, S. 192",
    explanation: "<b>Warum integrierbar, obwohl überall dicht gestört?</b> Der entscheidende Unterschied zur Dirichlet-Funktion: Zu jedem $\\varepsilon > 0$ gibt es nur <i>endlich viele</i> Punkte mit $g(x) \\ge \\varepsilon$ (nämlich Brüche mit Nenner $q \\le \\tfrac1\\varepsilon$). Man deckt diese endlich vielen &bdquo;hohen Spitzen&ldquo; mit sehr schmalen Stufen ab und bleibt sonst unterhalb von $\\varepsilon$ &ndash; so wird $\\int (o - u)$ beliebig klein. Die Untersumme bleibt $0$, da die Irrationalen dicht liegen.",
    example: "$g(\\tfrac12) = \\tfrac12$, $g(\\tfrac23) = \\tfrac13$, $g(\\sqrt{2}-1) = 0$. Nur $x$ mit kleinem Nenner haben grosse Werte &ndash; der Graph ist das berühmte &bdquo;Popcorn&ldquo;-Muster.",
    counterexample: "<b>1.</b> Die (unmodifizierte) Dirichlet-Funktion $\\mathbb{1}_{\\mathbb{Q}\\cap[0,1]}$ ist dagegen <i>nicht</i> integrierbar: Dort haben <i>alle</i> rationalen Punkte den vollen Wert $1$, es gibt unendlich viele &bdquo;hohe&ldquo; Spitzen.<br><b>2.</b> Intuition &bdquo;unendlich viele Unstetigkeitsstellen $\\Rightarrow$ nicht integrierbar&ldquo; ist falsch: $g$ ist in jedem rationalen Punkt unstetig (das sind abzählbar unendlich viele, dicht!) und trotzdem integrierbar. Riemann-Integrierbarkeit toleriert &bdquo;kleine&ldquo; Mengen von Unstetigkeiten."
  }
];

/* ==========================================================================
   FLASHCARDS KAPITEL 5: Metrische Räume, Folgen und Stetigkeit
   Analysis I - Prof. Dr. Manfred Einsiedler (Skript S. 225-252)
   Vollständig verifiziert gegen das offizielle Skript (Abschnitte 5.1-5.5)
   ========================================================================== */

window.FLASHCARDS_KAPITEL_5 = [
  // ========================================================================
  // 5.1 NORMIERTE VEKTORRÄUME
  // ========================================================================
  {
    id: "k5_def_5_1",
    title: "Definition 5.1: Normen",
    category: "5.1 Normierte Vektorräume",
    type: "definition",
    front: "Wie lautet die präzise Definition einer <b>Norm</b> $\\|\\cdot\\|$ auf einem Vektorraum $V$ über $\\mathbb{K} = \\mathbb{R}$ (oder $\\mathbb{K} = \\mathbb{C}$)?",
    back: "Eine <b>Norm</b> auf $V$ ist eine Abbildung $\\|\\cdot\\|: v \\in V \\mapsto \\|v\\| \\in \\mathbb{R}_{\\ge 0}$ mit folgenden drei Eigenschaften:<br><br>1. <b>Definitheit:</b> Für alle $v \\in V$ gilt<br>$$\\|v\\| = 0 \\iff v = 0$$<br>2. <b>Homogenität:</b> Für alle $v \\in V$ und $\\alpha \\in \\mathbb{K}$ gilt<br>$$\\|\\alpha v\\| = |\\alpha| \\cdot \\|v\\|$$<br>3. <b>Dreiecksungleichung:</b> Für alle $v_1, v_2 \\in V$ gilt<br>$$\\|v_1 + v_2\\| \\le \\|v_1\\| + \\|v_2\\|$$<br><br>$V$ gemeinsam mit $\\|\\cdot\\|$ heisst <b>normierter Vektorraum</b>.",
    meta: "Skript: Definition 5.1, S. 225",
    explanation: "<b>Intuition der Axiome:</b><br>&bull; <i>Definitheit:</i> Nur der Nullvektor hat Länge $0$; jeder andere Vektor hat strikt positive Länge.<br>&bull; <i>Homogenität:</i> Skaliert man einen Vektor um $\\alpha$, skaliert seine Länge um $|\\alpha|$.<br>&bull; <i>Dreiecksungleichung:</i> Der direkte Weg ($v_1 + v_2$) ist nie länger als der Umweg über die Einzelschritte.<br><br><svg width='100%' height='130' viewBox='0 0 320 130' style='max-width:100%; height:auto; background:#f8fafc; border-radius:8px; margin-top:8px;'><line x1='30' y1='100' x2='150' y2='30' stroke='#1f407a' stroke-width='2.5'/><line x1='150' y1='30' x2='270' y2='100' stroke='#10b981' stroke-width='2.5'/><line x1='30' y1='100' x2='270' y2='100' stroke='#ef4444' stroke-dasharray='4 4' stroke-width='2.5'/><text x='80' y='55' fill='#1f407a' font-weight='bold' font-size='12'>||v&#8321;||</text><text x='220' y='55' fill='#10b981' font-weight='bold' font-size='12'>||v&#8322;||</text><text x='130' y='120' fill='#ef4444' font-weight='bold' font-size='12'>||v&#8321;+v&#8322;|| &#8804; ||v&#8321;||+||v&#8322;||</text></svg>",
    example: "Das einfachste Beispiel: $\\mathbb{R}$ (als 1-dimensionaler Vektorraum über $\\mathbb{R}$) mit dem Absolutbetrag $|\\cdot|$ ist ein normierter Vektorraum. Genauso $\\mathbb{C}$ mit dem Absolutbetrag (als Vektorraum über $\\mathbb{R}$ oder $\\mathbb{C}$).",
    counterexample: "<b>1.</b> $f(x) = x^2$ auf $\\mathbb{R}$ ist <b>keine</b> Norm: Die Homogenität scheitert, denn $f(2x) = 4x^2 \\neq 2f(x) = |2| \\cdot f(x)$.<br><b>2.</b> $f(v) = |v_1|$ auf $\\mathbb{R}^2$ ist keine Norm: Die Definitheit scheitert, denn $f((0,1)^t) = 0$, obwohl $(0,1)^t \\neq 0$ (so etwas nennt man nur eine <i>Halbnorm</i>)."
  },
  {
    id: "k5_bsp_5_2",
    title: "Beispiel 5.2: Maximumsnorm und Einsnorm",
    category: "5.1 Normierte Vektorräume",
    type: "beispiel",
    front: "Wie sind die <b>Maximumsnorm $\\|v\\|_\\infty$</b> und die <b>1-Norm $\\|v\\|_1$</b> auf $\\mathbb{C}^d$ bzw. $\\mathbb{R}^d$ definiert?",
    back: "Für $j \\in \\{1,\\dots,d\\}$ sei $\\pi_j: v = (v_1,\\dots,v_d)^t \\in \\mathbb{C}^d \\mapsto v_j \\in \\mathbb{C}$ die <b>Projektion</b> auf die $j$-te Komponente. Dann:<br><br>&bull; <b>Maximumsnorm (Unendlichnorm):</b><br>$$\\|v\\|_\\infty = \\max_{j=1,\\dots,d} |\\pi_j(v)|$$<br>&bull; <b>1-Norm (Einsnorm):</b><br>$$\\|v\\|_1 = \\sum_{j=1}^d |\\pi_j(v)|$$<br><br>Auf $\\mathbb{R}^d$ sind beide durch dieselben Formeln definiert.",
    meta: "Skript: Beispiel 5.2, S. 226",
    explanation: "<b>Geometrischer Vergleich der Einheitsbälle in $\\mathbb{R}^2$:</b><br>&bull; <i>Maximumsnorm:</i> misst nur die betragsgrösste Komponente &rarr; Einheitsball ist ein achsenparalleles Quadrat.<br>&bull; <i>1-Norm:</i> summiert alle Komponentenbeträge &rarr; Einheitsball ist eine auf die Spitze gestellte Raute.<br><br><svg width='100%' height='150' viewBox='0 0 320 150' style='max-width:100%; height:auto; background:#f8fafc; border-radius:8px; margin-top:8px;'><rect x='30' y='25' width='90' height='90' fill='none' stroke='#ef4444' stroke-width='2'/><polygon points='230,25 275,70 230,115 185,70' fill='none' stroke='#10b981' stroke-width='2'/><circle cx='75' cy='70' r='45' fill='none' stroke='#1f407a' stroke-dasharray='3 3' stroke-width='1.5'/><circle cx='230' cy='70' r='45' fill='none' stroke='#1f407a' stroke-dasharray='3 3' stroke-width='1.5'/><text x='75' y='135' text-anchor='middle' font-size='11' fill='#444'>||v||&#8734; (Quadrat)</text><text x='230' y='135' text-anchor='middle' font-size='11' fill='#444'>||v||&#8321; (Raute)</text></svg>",
    example: "Für $v = (3, -4)^t \\in \\mathbb{R}^2$:<br>$$\\|v\\|_\\infty = \\max(|3|, |-4|) = 4, \\qquad \\|v\\|_1 = |3| + |-4| = 7, \\qquad \\|v\\|_2 = \\sqrt{9+16} = 5.$$",
    counterexample: "<b>1.</b> Im Allgemeinen gilt $\\|v\\|_1 \\neq \\|v\\|_\\infty$ &ndash; nur für $d = 1$ stimmen alle drei Normen überein (dann sind sie der Absolutbetrag).<br><b>2.</b> $v \\mapsto \\min_j |\\pi_j(v)|$ ist <i>keine</i> Norm auf $\\mathbb{R}^d$ ($d \\ge 2$): $(1, 0)^t$ hätte &bdquo;Länge&ldquo; $0$ &ndash; die Definitheit scheitert."
  },
  {
    id: "k5_euklid_skalarprodukt",
    title: "5.1.1 Das Euklidische innere Produkt",
    category: "5.1 Normierte Vektorräume",
    type: "definition",
    front: "Wie ist das <b>Euklidische innere Produkt (Skalarprodukt)</b> auf $\\mathbb{C}^d$ definiert und welche drei Eigenschaften erfüllt es?",
    back: "Für $v = (v_1,\\dots,v_d)^t,\\ w = (w_1,\\dots,w_d)^t \\in \\mathbb{C}^d$:<br>$$\\langle v, w \\rangle = \\sum_{k=1}^d v_k \\overline{w_k}$$<br><b>Eigenschaften:</b><br>1. <b>Sesquilinearität:</b> linear im 1. Argument, &bdquo;halblinear&ldquo; (konjugiert-linear) im 2. Argument: $\\langle v, \\alpha_1 w_1 + \\alpha_2 w_2 \\rangle = \\overline{\\alpha_1}\\langle v, w_1\\rangle + \\overline{\\alpha_2}\\langle v, w_2\\rangle$.<br>2. <b>Symmetrie:</b> $\\langle v, w \\rangle = \\overline{\\langle w, v \\rangle}$<br>3. <b>Definitheit:</b> $\\langle v, v \\rangle \\ge 0$, und $\\langle v, v \\rangle = 0$ genau dann, wenn $v = 0$.<br><br>Das <b>reelle innere Produkt</b> auf $\\mathbb{R}^d$ ist durch dieselbe Formel definiert und ist <b>bilinear</b> (linear in beiden Argumenten).",
    meta: "Skript: Abschnitt 5.1.1, S. 226-227",
    explanation: "<b>Warum die komplexe Konjugation $\\overline{w_k}$ nötig ist:</b> Ohne sie wäre $\\langle (i,0)^t, (i,0)^t \\rangle = i \\cdot i = -1 < 0$ &ndash; die Definitheit bräche zusammen. Mit Konjugation gilt dagegen $\\langle v, v \\rangle = \\sum_k |v_k|^2 \\ge 0$, und $\\sum_k |v_k|^2 = 0$ erzwingt $v_k = 0$ für alle $k$.<br><br>&bdquo;Sesqui&ldquo; steht für <i>eineinhalb</i>: einmal linear plus &bdquo;halb&ldquo; linear.",
    example: "In $\\mathbb{C}^2$: Für $v = (1, i)^t$ und $w = (2, 1-i)^t$:<br>$$\\langle v, w \\rangle = 1 \\cdot \\overline{2} + i \\cdot \\overline{(1-i)} = 2 + i(1+i) = 2 + i - 1 = 1 + i.$$",
    counterexample: "<b>1.</b> Die Formel $\\sum_k v_k w_k$ (ohne Konjugation) ist auf $\\mathbb{C}^d$ <i>kein</i> inneres Produkt: $\\langle (i,0)^t, (i,0)^t \\rangle = -1$ verletzt die Definitheit.<br><b>2.</b> Das innere Produkt ist im 2. Argument <i>nicht</i> linear: $\\langle v, i w \\rangle = \\overline{i}\\langle v, w\\rangle = -i\\langle v, w\\rangle \\neq i \\langle v, w \\rangle$ (ausser $\\langle v,w\\rangle = 0$)."
  },
  {
    id: "k5_prop_5_3",
    title: "Proposition 5.3: Cauchy-Schwarz-Ungleichung",
    category: "5.1 Normierte Vektorräume",
    type: "satz",
    front: "Wie lautet die <b>Cauchy-Schwarz-Ungleichung</b> auf $\\mathbb{C}^d$ (bzw. $\\mathbb{R}^d$), und wann gilt Gleichheit?",
    back: "Für alle $v, w \\in \\mathbb{C}^d$ gilt:<br>$$|\\langle v, w \\rangle| \\le \\|v\\| \\, \\|w\\|$$<br>Gleichheit gilt <b>genau dann</b>, wenn $v$ und $w$ <b>linear abhängig</b> sind (d.h. es existiert ein $\\alpha \\in \\mathbb{C}$ mit $\\alpha v = w$ oder $v = \\alpha w$).",
    meta: "Skript: Proposition 5.3, S. 227-228",
    explanation: "<b>Bedeutung:</b> Das innere Produkt zweier Vektoren lässt sich durch ihre Längen kontrollieren. Im Reellen erlaubt das die Definition des Zwischenwinkels $\\theta$ über $\\cos(\\theta) = \\frac{\\langle v, w \\rangle}{\\|v\\|_2 \\|w\\|_2} \\in [-1,1]$.<br><br><b>Bemerkung aus dem Skript:</b> Der Beweis verwendet <i>nur</i> die drei Axiome des inneren Produkts (Sesquilinearität, Symmetrie, Definitheit), nicht die konkrete Formel &ndash; die Ungleichung gilt also in jedem Vektorraum mit innerem Produkt.",
    example: "Für $v = (1, 2)^t$, $w = (2, 4)^t = 2v$ (linear abhängig): $|\\langle v, w \\rangle| = |2 + 8| = 10 = \\sqrt{5} \\cdot \\sqrt{20} = \\|v\\|\\|w\\|$ &ndash; Gleichheit.",
    counterexample: "<b>1.</b> Für linear unabhängige Vektoren ist die Ungleichung <i>strikt</i>: $v = (1,0)^t$, $w = (1,1)^t$ ergibt $|\\langle v, w\\rangle| = 1 < \\sqrt{2} = \\|v\\|\\|w\\|$.<br><b>2.</b> Ohne Betrag links wäre die Aussage schwächer bzw. falsch herum nutzlos: Im Reellen kann $\\langle v, w \\rangle$ negativ sein (z.B. $v = (1,0)^t$, $w = (-1,0)^t$: $\\langle v,w\\rangle = -1$), die Schranke gilt für den <i>Betrag</i>."
  },
  {
    id: "k5_beweis_5_3",
    title: "Beweis: Cauchy-Schwarz-Ungleichung",
    category: "5.1 Normierte Vektorräume",
    type: "beweis",
    front: "Skizziere den Beweis der <b>Cauchy-Schwarz-Ungleichung</b> (Proposition 5.3).",
    back: "<b>Ansatz (Orthogonalprojektion):</b> Für $v = 0$ oder $w = 0$ sind beide Seiten $0$. Sei also $w \\neq 0$ und $\\alpha = \\frac{\\langle v, w \\rangle}{\\|w\\|^2}$.<br><br>1. Ausmultiplizieren mit Sesquilinearität:<br>$$0 \\le \\|v - \\alpha w\\|^2 = \\|v\\|^2 - \\overline{\\alpha}\\langle v, w \\rangle - \\alpha\\overline{\\langle v, w \\rangle} + |\\alpha|^2 \\|w\\|^2$$<br>2. Einsetzen von $\\alpha$:<br>$$= \\|v\\|^2 - 2\\frac{|\\langle v,w \\rangle|^2}{\\|w\\|^2} + \\frac{|\\langle v,w \\rangle|^2}{\\|w\\|^2} = \\|v\\|^2 - \\frac{|\\langle v,w \\rangle|^2}{\\|w\\|^2}$$<br>3. Also $|\\langle v, w \\rangle|^2 \\le \\|v\\|^2 \\|w\\|^2$, Wurzelziehen liefert die Behauptung.<br><br><b>Gleichheitsfall:</b> Gleichheit gilt genau für $\\|v - \\alpha w\\| = 0$, also $v = \\alpha w$. $\\square$",
    meta: "Skript: Beweis von Proposition 5.3, S. 228",
    explanation: "<b>Geometrische Intuition:</b> $\\alpha w$ ist die Orthogonalprojektion von $v$ auf die von $w$ aufgespannte Gerade; $v - \\alpha w$ ist das &bdquo;Lot&ldquo;. Dass dessen Längenquadrat $\\ge 0$ ist, <i>ist</i> bereits die Ungleichung.<br><br><svg width='100%' height='130' viewBox='0 0 320 130' style='max-width:100%; height:auto; background:#f8fafc; border-radius:8px; margin-top:8px;'><line x1='30' y1='105' x2='280' y2='105' stroke='#94a3b8' stroke-width='2'/><line x1='30' y1='105' x2='230' y2='30' stroke='#1f407a' stroke-width='2.5'/><line x1='30' y1='105' x2='180' y2='105' stroke='#10b981' stroke-width='3'/><line x1='230' y1='30' x2='180' y2='105' stroke='#ef4444' stroke-dasharray='4 4' stroke-width='2'/><text x='115' y='60' fill='#1f407a' font-weight='bold' font-size='12'>v</text><text x='105' y='122' fill='#10b981' font-weight='bold' font-size='12'>&#945;w</text><text x='215' y='75' fill='#ef4444' font-weight='bold' font-size='12'>v &#8722; &#945;w</text></svg>",
    example: "Alternative (Übung 5.4): Die Cauchy-Ungleichung mit $\\varepsilon$ liefert einen zweiten Beweis, indem man $\\varepsilon$ optimal wählt.",
    counterexample: "<b>1.</b> Der Trick $\\|v - \\alpha w\\|^2 \\ge 0$ funktioniert nur mit der <i>optimalen</i> Projektion $\\alpha = \\frac{\\langle v,w\\rangle}{\\|w\\|^2}$ &ndash; mit z.B. $\\alpha = 1$ erhält man nur die (schwächere) Aussage $2\\operatorname{Re}\\langle v,w\\rangle \\le \\|v\\|^2 + \\|w\\|^2$.<br><b>2.</b> Für $w = 0$ darf man nicht durch $\\|w\\|^2$ teilen &ndash; dieser Fall muss (trivial) separat behandelt werden; ein häufiger Beweisfehler."
  },
  {
    id: "k5_uebung_5_4",
    title: "Übung 5.4: Cauchy-Ungleichung mit einem Epsilon",
    category: "5.1 Normierte Vektorräume",
    type: "lemma",
    front: "Wie lautet die <b>Cauchy-Ungleichung mit $\\varepsilon$</b> für $v, w \\in \\mathbb{R}^d$ und $\\varepsilon > 0$?",
    back: "Für jedes $\\varepsilon > 0$ und alle $v, w \\in \\mathbb{R}^d$ gilt:<br>$$|\\langle v, w \\rangle| \\le \\frac{\\varepsilon^2}{2} \\|v\\|^2 + \\frac{1}{2\\varepsilon^2} \\|w\\|^2$$<br>Daraus lässt sich die Cauchy-Schwarz-Ungleichung (5.1) folgern.",
    meta: "Skript: Übung 5.4, S. 228",
    explanation: "<b>Beweis-Trick:</b> Positivität der Norm für den Ausdruck $\\left\\|\\varepsilon v \\mp \\tfrac{1}{\\varepsilon} w\\right\\|^2 \\ge 0$; Ausmultiplizieren ergibt<br>$$\\varepsilon^2 \\|v\\|^2 \\mp 2\\langle v, w \\rangle + \\tfrac{1}{\\varepsilon^2}\\|w\\|^2 \\ge 0.$$<br><b>Rückweg zu Cauchy-Schwarz:</b> Für $v, w \\neq 0$ minimiere die rechte Seite über $\\varepsilon$: Mit $\\varepsilon^2 = \\frac{\\|w\\|}{\\|v\\|}$ wird sie exakt $\\|v\\|\\|w\\|$. Diese &bdquo;$\\varepsilon$-Form&ldquo; einer Ungleichung ist ein in der Analysis allgegenwärtiges Muster (Young-Ungleichung).",
    example: "Mit $\\varepsilon = 1$: $|\\langle v, w \\rangle| \\le \\tfrac12\\|v\\|^2 + \\tfrac12\\|w\\|^2$ &ndash; das arithmetische Mittel der Normquadrate; Spezialfall $ab \\le \\tfrac{a^2+b^2}{2}$ für reelle Zahlen.",
    counterexample: "<b>1.</b> Die Schranke ist für festes $\\varepsilon$ i.A. <i>nicht</i> scharf: Für $v = w = (1,0)^t$ und $\\varepsilon^2 = 2$ liefert sie $1 \\le 1 + \\tfrac14 = 1.25$.<br><b>2.</b> Ohne den Gegenterm $\\frac{1}{2\\varepsilon^2}\\|w\\|^2$ wäre die Aussage falsch: $|\\langle v,w\\rangle| \\le \\frac{\\varepsilon^2}{2}\\|v\\|^2$ scheitert für kleines $\\varepsilon$ (nimm $v = w \\neq 0$). Die beiden Terme balancieren sich."
  },
  {
    id: "k5_korollar_5_5",
    title: "Korollar 5.5: Die Euklidische Norm ist eine Norm",
    category: "5.1 Normierte Vektorräume",
    type: "satz",
    front: "Wie ist die <b>Euklidische Norm (2-Norm)</b> auf $\\mathbb{C}^d$ definiert, und wie beweist man ihre Dreiecksungleichung?",
    back: "$$\\|v\\| = \\|v\\|_2 = \\sqrt{\\langle v, v \\rangle} = \\sqrt{\\sum_{k=1}^d |v_k|^2}$$<br><b>Korollar 5.5:</b> Sie definiert eine Norm auf $\\mathbb{C}^d$.<br><br><b>Beweis der Dreiecksungleichung:</b><br>$$\\|v+w\\|^2 = \\langle v+w, v+w \\rangle = \\|v\\|^2 + 2\\operatorname{Re}(\\langle v,w \\rangle) + \\|w\\|^2$$<br>Mit $\\operatorname{Re}(\\langle v,w\\rangle) \\le |\\langle v,w \\rangle| \\le \\|v\\|\\|w\\|$ (Cauchy-Schwarz):<br>$$\\|v+w\\|^2 \\le \\|v\\|^2 + 2\\|v\\|\\|w\\| + \\|w\\|^2 = (\\|v\\| + \\|w\\|)^2,$$<br>Wurzelziehen liefert die Behauptung. $\\square$",
    meta: "Skript: Korollar 5.5, S. 228",
    explanation: "Definitheit und Homogenität folgen direkt aus den Eigenschaften des inneren Produkts ($\\langle \\alpha v, \\alpha v \\rangle = |\\alpha|^2 \\langle v,v\\rangle$). Die Dreiecksungleichung ist der nicht-triviale Teil &ndash; sie steht und fällt mit Cauchy-Schwarz. Durch Einschränkung auf $\\mathbb{R}^d \\subseteq \\mathbb{C}^d$ erhält man das Euklidische innere Produkt und die Euklidische Norm auf $\\mathbb{R}^d$; alle Aussagen gelten dort analog.",
    example: "$v = (3,4)^t \\in \\mathbb{R}^2$: $\\|v\\|_2 = \\sqrt{9 + 16} = 5$ &ndash; der klassische Satz des Pythagoras als Spezialfall.",
    counterexample: "<b>1.</b> Ohne den Umweg über $\\|v+w\\|^2$ geht es schief: Punktweises Wurzelziehen aus $\\sum|v_k + w_k|^2$ lässt sich nicht direkt abschätzen &ndash; der quadratische Trick mit $\\operatorname{Re}$ ist wesentlich.<br><b>2.</b> $\\sqrt{\\sum_k v_k^2}$ (ohne Beträge) ist auf $\\mathbb{C}^d$ keine Norm: Für $v = (i, 0)^t$ wäre $\\sum v_k^2 = -1$ und die Wurzel nicht einmal reell."
  },
  {
    id: "k5_raum_stetiger_fkt",
    title: "5.1.2 Normen auf dem Funktionenraum C([a,b])",
    category: "5.1 Normierte Vektorräume",
    type: "definition",
    front: "Wie sind die <b>Supremumsnorm $\\|f\\|_\\infty$</b> und die <b>1-Norm $\\|f\\|_1$</b> auf dem Vektorraum $C([a,b])$ der stetigen Funktionen definiert?",
    back: "Sei $K = [a,b]$ mit $a < b$ kompakt und $V = C([a,b])$ der Vektorraum der stetigen reellwertigen Funktionen auf $[a,b]$.<br><br>&bull; <b>Supremumsnorm (Beispiel 5.7):</b><br>$$\\|f\\|_\\infty = \\sup_{x \\in [a,b]} |f(x)| = \\max_{x \\in [a,b]} |f(x)|$$<br>(das Maximum wird nach Satz 3.67 angenommen)<br><br>&bull; <b>1-Norm (Beispiel 5.8):</b><br>$$\\|f\\|_1 = \\int_a^b |f(x)|\\,\\mathrm{d}x$$<br>(wohldefiniert, da $|f|$ stetig ist (Prop. 3.52) und stetige Funktionen Riemann-integrierbar sind (Satz 4.42))",
    meta: "Skript: Übung 5.6, Beispiele 5.7 & 5.8, Übung 5.9, S. 229",
    explanation: "<b>Warum Funktionenräume?</b> $C([a,b])$ ist <i>unendlich-dimensional</i> (Übung 5.6) &ndash; die Analysis braucht Normen auch jenseits von $\\mathbb{R}^d$, etwa für Differentialgleichungen.<br><b>Gegenüberstellung:</b> $\\|f\\|_\\infty$ kontrolliert den maximalen Ausschlag (&rarr; gleichmässige Konvergenz), $\\|f\\|_1$ die Fläche unter $|f|$ (&rarr; Konvergenz im Mittel).<br><br><svg width='100%' height='130' viewBox='0 0 320 130' style='max-width:100%; height:auto; background:#f8fafc; border-radius:8px; margin-top:8px;'><path d='M30,100 Q100,10 160,80 T290,100' fill='none' stroke='#1f407a' stroke-width='2.5'/><line x1='30' y1='100' x2='290' y2='100' stroke='#94a3b8' stroke-width='1.5'/><line x1='105' y1='32' x2='105' y2='100' stroke='#ef4444' stroke-dasharray='3 3' stroke-width='2'/><text x='112' y='45' fill='#ef4444' font-size='11' font-weight='bold'>||f||&#8734; (Peak)</text><path d='M30,100 Q100,10 160,80 T290,100 Z' fill='#10b981' fill-opacity='0.2'/><text x='200' y='85' fill='#10b981' font-size='11' font-weight='bold'>||f||&#8321; (Fläche)</text></svg>",
    example: "Für $f(x) = x$ auf $[0,1]$: $\\|f\\|_\\infty = 1$ und $\\|f\\|_1 = \\int_0^1 x\\,\\mathrm{d}x = \\tfrac12$. Dreiecksungleichung für $\\|\\cdot\\|_\\infty$: $\\max|f_1 + f_2| \\le \\max(|f_1| + |f_2|) \\le \\max|f_1| + \\max|f_2|$.",
    counterexample: "<b>1.</b> Auf dem grösseren Raum aller <i>Riemann-integrierbaren</i> Funktionen ist $\\|f\\|_1 = \\int_a^b |f|\\,\\mathrm{d}x$ keine Norm mehr: Die Funktion $f = \\mathbb{1}_{\\{a\\}}$ (Wert 1 nur am Punkt $a$) erfüllt $\\|f\\|_1 = 0$, ist aber nicht die Nullfunktion &ndash; die Definitheit braucht die Stetigkeit!<br><b>2.</b> Die beiden Normen sind wesentlich verschieden: Es gibt Folgen $(f_n)_n$ mit $\\|f_n\\|_1 \\to 0$, aber $\\|f_n\\|_\\infty = 1$ für alle $n$ (schmale, hohe Dreiecks-Zacken; Übung 5.47)."
  },

  // ========================================================================
  // 5.2 METRISCHE RÄUME
  // ========================================================================
  {
    id: "k5_def_5_10",
    title: "Definition 5.10: Metrik und metrischer Raum",
    category: "5.2 Metrische Räume",
    type: "definition",
    front: "Wie sind ein <b>metrischer Raum $(X, \\mathrm{d})$</b> und eine <b>Metrik</b> formal definiert?",
    back: "Ein <b>metrischer Raum</b> $(X, \\mathrm{d})$ ist eine Menge $X$ gemeinsam mit einer Abbildung $\\mathrm{d}: X \\times X \\to \\mathbb{R}_{\\ge 0}$ (der <b>Metrik</b>), die für alle $x_1, x_2, x_3 \\in X$ erfüllt:<br><br>1. <b>Definitheit:</b> $\\mathrm{d}(x_1, x_2) = 0 \\iff x_1 = x_2$<br>2. <b>Symmetrie:</b> $\\mathrm{d}(x_1, x_2) = \\mathrm{d}(x_2, x_1)$<br>3. <b>Dreiecksungleichung:</b> $\\mathrm{d}(x_1, x_3) \\le \\mathrm{d}(x_1, x_2) + \\mathrm{d}(x_2, x_3)$",
    meta: "Skript: Definition 5.10, S. 230",
    explanation: "Eine Metrik weist je zwei Punkten ihre <b>Distanz</b> zu &ndash; ganz ohne Vektorraumstruktur. Deshalb kann man auf beliebigen Mengen (Graphen, Funktionenräumen, Wörtern, ...) Abstände messen. Die Dreiecksungleichung sagt: Der kürzeste Weg von $x_1$ nach $x_3$ ist höchstens so lang wie der Umweg über $x_2$.<br><br>Für eine Teilmenge $Y \\subseteq X$ ist die Einschränkung $\\mathrm{d}|_{Y \\times Y}$ eine Metrik auf $Y$: $Y$ heisst dann <b>Teilraum</b> mit der <b>induzierten Metrik</b>.",
    example: "$X = \\mathbb{R}$ mit $\\mathrm{d}(x,y) = |x-y|$; $X = \\mathbb{C}$ mit $\\mathrm{d}(z_1,z_2) = |z_1 - z_2|$; $X = \\mathbb{C}^d$ mit $\\mathrm{d}_1, \\mathrm{d}_2$ oder $\\mathrm{d}_\\infty$ (von den Normen $\\|\\cdot\\|_1, \\|\\cdot\\|_2, \\|\\cdot\\|_\\infty$ induziert).",
    counterexample: "<b>1.</b> $\\mathrm{d}(x,y) = (x-y)^2$ auf $\\mathbb{R}$ ist <b>keine</b> Metrik: Die Dreiecksungleichung scheitert, denn $\\mathrm{d}(0,2) = 4 > \\mathrm{d}(0,1) + \\mathrm{d}(1,2) = 1 + 1 = 2$.<br><b>2.</b> $\\mathrm{d}(x,y) = |x^2 - y^2|$ auf $\\mathbb{R}$ ist keine Metrik: $\\mathrm{d}(1,-1) = 0$, obwohl $1 \\neq -1$ &ndash; die Definitheit scheitert."
  },
  {
    id: "k5_lemma_5_11",
    title: "Lemma 5.11: Eine Norm definiert eine Metrik",
    category: "5.2 Metrische Räume",
    type: "lemma",
    front: "Wie <b>induziert</b> eine Norm $\\|\\cdot\\|$ auf einem Vektorraum $V$ eine Metrik, und wie beweist man die Metrik-Axiome?",
    back: "Durch $$\\mathrm{d}_{\\|\\cdot\\|}(v_1, v_2) = \\|v_1 - v_2\\|$$ wird eine Metrik auf $V$ definiert, die <b>von der Norm induzierte Metrik</b>.<br><br><b>Beweis:</b><br>1. <i>Definitheit:</i> $\\|v_1 - v_2\\| = 0 \\iff v_1 - v_2 = 0 \\iff v_1 = v_2$ (Definitheit der Norm).<br>2. <i>Symmetrie:</i> $\\|v_1 - v_2\\| = \\|(-1)(v_2 - v_1)\\| = |-1|\\,\\|v_2 - v_1\\|$ (Homogenität mit $\\alpha = -1$).<br>3. <i>Dreiecksungleichung:</i> $\\|v_1 - v_3\\| = \\|(v_1 - v_2) + (v_2 - v_3)\\| \\le \\|v_1 - v_2\\| + \\|v_2 - v_3\\|$. $\\square$",
    meta: "Skript: Lemma 5.11, S. 231",
    explanation: "Jeder normierte Vektorraum ist automatisch ein metrischer Raum: Abstand = Länge des Differenzvektors. Damit vererben sich alle kommenden Begriffe (Bälle, Konvergenz, Stetigkeit) sofort auf $\\mathbb{R}^d$, $\\mathbb{C}^d$ und $C([a,b])$.<br><br><b>Hierarchie des Kapitels:</b> $(\\mathbb{C}^d, \\mathbb{R}^d \\text{ mit Normen}) \\subsetneq$ normierte Vektorräume $\\subsetneq$ metrische Räume.",
    example: "Die Euklidische Norm induziert die Euklidische Metrik $\\mathrm{d}_2(x,y) = \\sqrt{\\sum_i (x_i - y_i)^2}$ auf $\\mathbb{R}^d$.",
    counterexample: "<b>1.</b> Die Umkehrung gilt nicht: Die <i>diskrete Metrik</i> auf $\\mathbb{R}^d$ stammt von keiner Norm, denn eine Norm mit $\\|v_2 - v_1\\| = \\mathrm{d}_{\\text{diskret}}(v_1,v_2)$ würde die Homogenität verletzen ($\\mathrm{d}(0, 2v) = 1 \\neq 2 = 2\\,\\mathrm{d}(0,v)$ für $v \\neq 0$).<br><b>2.</b> Metriken existieren auch, wo gar kein Vektorraum ist (Graphen, SNCF-Metrik auf Halbgeraden) &ndash; dort ist &bdquo;induziert von einer Norm&ldquo; nicht einmal sinnvoll fragbar."
  },
  {
    id: "k5_bsp_5_12_metriken",
    title: "Beispiel 5.12: Diskrete, Manhattan- und SNCF-Metrik",
    category: "5.2 Metrische Räume",
    type: "beispiel",
    front: "Beschreibe die <b>diskrete Metrik</b>, die <b>Manhattanmetrik</b> und die <b>SNCF-Metrik</b> (Metrik der französischen Eisenbahn).",
    back: "&bull; <b>Diskrete Metrik</b> (auf einer beliebigen Menge $X$):<br>$$\\mathrm{d}_{\\text{diskret}}(x_1, x_2) = \\begin{cases} 1 & \\text{falls } x_1 \\neq x_2 \\\\ 0 & \\text{falls } x_1 = x_2 \\end{cases}$$<br>&bull; <b>Manhattanmetrik</b> auf $X = [0,1]^2$:<br>$$\\mathrm{d}_{\\text{NY}}((x_1,y_1),(x_2,y_2)) = |x_1-x_2| + |y_1-y_2|$$<br>(= Einschränkung der Einsmetrik $\\mathrm{d}_1$ von $\\mathbb{R}^2$)<br>&bull; <b>SNCF-Metrik</b> auf $X = \\mathbb{C}$:<br>$$\\mathrm{d}_{\\text{SNCF}}(z_1, z_2) = \\begin{cases} |z_1 - z_2| & \\text{falls } z_1, z_2 \\text{ linear abhängig über } \\mathbb{R} \\\\ |z_1| + |z_2| & \\text{falls linear unabhängig} \\end{cases}$$",
    meta: "Skript: Beispiel 5.12 & Übung 5.13, S. 231-233",
    explanation: "<b>Anschauung:</b> Manhattan: In einem Schachbrett-Strassennetz läuft man erst entlang der einen, dann der anderen Koordinate. SNCF: Jede Bahnreise von $z_1$ nach $z_2$ führt über den Ursprung (&bdquo;Paris&ldquo;), ausser beide liegen auf derselben von Paris ausgehenden Strecke &ndash; $\\mathbb{C}$ zerfällt in unendlich viele Halbgeraden, die sich nur in $0$ treffen.<br><br><svg width='100%' height='140' viewBox='0 0 320 140' style='max-width:100%; height:auto; background:#f8fafc; border-radius:8px;'><line x1='30' y1='110' x2='120' y2='110' stroke='#10b981' stroke-width='3'/><line x1='120' y1='110' x2='120' y2='30' stroke='#10b981' stroke-width='3'/><circle cx='30' cy='110' r='4' fill='#10b981'/><circle cx='120' cy='30' r='4' fill='#10b981'/><text x='75' y='130' text-anchor='middle' font-size='10' fill='#444'>Manhattan (Gitter)</text><line x1='180' y1='40' x2='230' y2='90' stroke='#ef4444' stroke-width='2'/><line x1='230' y1='90' x2='280' y2='30' stroke='#ef4444' stroke-width='2'/><circle cx='230' cy='90' r='5' fill='#1f407a'/><text x='230' y='105' text-anchor='middle' font-size='9' font-weight='bold' fill='#1f407a'>Paris (0)</text><text x='230' y='130' text-anchor='middle' font-size='10' fill='#444'>SNCF (über Paris)</text></svg><br>Auch <b>Graphen</b> (Beispiel 5.12 (iv)) tragen Metriken: Distanz zweier Ecken = minimale Kantenzahl eines Verbindungsweges (benötigt Zusammenhang des Graphen).",
    example: "SNCF: $z_1 = 3i$, $z_2 = 4i$ liegen auf derselben Ursprungsgeraden &rarr; $\\mathrm{d}(z_1,z_2) = |3i - 4i| = 1$. Dagegen $z_1 = 3$, $z_2 = 4i$ (linear unabhängig) &rarr; $\\mathrm{d}(z_1,z_2) = 3 + 4 = 7$. Diskret: $\\mathrm{d}(0{,}00001, 0) = 1$, egal wie nahe die Punkte liegen.",
    counterexample: "<b>1.</b> Die diskrete Metrik auf $\\mathbb{R}^d$ ist <i>nicht</i> von einer Norm induziert (Homogenität scheitert) &ndash; metrische Räume sind echt allgemeiner als normierte Vektorräume.<br><b>2.</b> Manhattan- und SNCF-Metrik auf $[0,1]^2 \\subseteq \\mathbb{C}$ sind wirklich verschieden: Es gibt Folgen, die bezüglich $\\mathrm{d}_{\\text{NY}}$ konvergieren, aber bezüglich $\\mathrm{d}_{\\text{SNCF}}$ divergieren (Übung 5.43)."
  },
  {
    id: "k5_uebung_5_14",
    title: "Wichtige Übung 5.14: Umgekehrte Dreiecksungleichung",
    category: "5.2 Metrische Räume",
    type: "lemma",
    front: "Wie lautet die <b>umgekehrte Dreiecksungleichung</b> in einem metrischen Raum $(X, \\mathrm{d})$, und wie beweist man sie?",
    back: "Für alle $x_1, x_2, y \\in X$ gilt:<br>$$|\\mathrm{d}(x_1, y) - \\mathrm{d}(x_2, y)| \\le \\mathrm{d}(x_1, x_2)$$<br><br><b>Beweis:</b><br>1. Dreiecksungleichung: $\\mathrm{d}(x_1, y) \\le \\mathrm{d}(x_1, x_2) + \\mathrm{d}(x_2, y)$, also $\\mathrm{d}(x_1,y) - \\mathrm{d}(x_2,y) \\le \\mathrm{d}(x_1,x_2)$.<br>2. Rollentausch $x_1 \\leftrightarrow x_2$: $\\mathrm{d}(x_2,y) - \\mathrm{d}(x_1,y) \\le \\mathrm{d}(x_1,x_2)$.<br>3. $A \\le C$ und $-A \\le C$ ergeben $|A| \\le C$. $\\square$",
    meta: "Skript: Wichtige Übung 5.14, S. 233",
    explanation: "<b>Bedeutung:</b> Die Abstandsfunktion $x \\mapsto \\mathrm{d}(x, y)$ zu einem festen Punkt $y$ ist 1-Lipschitz-stetig: Bewegt man den Messpunkt um $\\mathrm{d}(x_1,x_2)$, ändert sich der gemessene Abstand höchstens um ebendiese Grösse. Das ist das metrische Analogon zu $||a| - |b|| \\le |a - b|$ in $\\mathbb{R}$ (Satz 2.46).",
    example: "In $\\mathbb{R}$: $|\\,|x_1 - y| - |x_2 - y|\\,| \\le |x_1 - x_2|$. Konkret $x_1 = 5, x_2 = 3, y = 0$: $|5 - 3| = 2 \\le 2$. Allgemeiner ist $x \\mapsto \\mathrm{d}(x, A)$ für Teilmengen $A$ ebenfalls 1-Lipschitz (Wichtige Übung 5.54).",
    counterexample: "<b>1.</b> Die Schranke lässt sich nicht verbessern: Für $y$ auf der Strecke &bdquo;hinter&ldquo; $x_2$ (in $\\mathbb{R}$: $x_1 = 0, x_2 = 1, y = 2$) gilt Gleichheit $|2 - 1| = 1 = \\mathrm{d}(x_1,x_2)$.<br><b>2.</b> Ohne Betrag ist die Aussage $\\mathrm{d}(x_1,y) - \\mathrm{d}(x_2,y) \\le \\mathrm{d}(x_1,x_2)$ zwar richtig, aber schwächer &ndash; erst beide Richtungen zusammen kontrollieren die Differenz vollständig."
  },
  {
    id: "k5_uebung_5_15",
    title: "Übung 5.15: Deformation der Metrik",
    category: "5.2 Metrische Räume",
    type: "lemma",
    front: "Zeige: Für einen metrischen Raum $(X, \\mathrm{d})$ sind auch $\\mathrm{d}_{1/2}(x,y) = \\sqrt{\\mathrm{d}(x,y)}$ und $\\tilde{\\mathrm{d}}(x,y) = \\frac{\\mathrm{d}(x,y)}{1 + \\mathrm{d}(x,y)}$ Metriken auf $X$.",
    back: "<b>1. Wurzelmetrik $\\mathrm{d}_{1/2}$:</b> Definitheit und Symmetrie vererben sich direkt. Dreiecksungleichung: Aus $\\mathrm{d}(x,z) \\le \\mathrm{d}(x,y) + \\mathrm{d}(y,z)$ und $\\sqrt{a+b} \\le \\sqrt{a} + \\sqrt{b}$ (für $a, b \\ge 0$) folgt<br>$$\\sqrt{\\mathrm{d}(x,z)} \\le \\sqrt{\\mathrm{d}(x,y)} + \\sqrt{\\mathrm{d}(y,z)}.$$<br><b>2. Gestauchte Metrik $\\tilde{\\mathrm{d}}$:</b> Die Hilfsfunktion $f(t) = \\frac{t}{1+t} = 1 - \\frac{1}{1+t}$ ist monoton wachsend und subadditiv ($f(a+b) \\le f(a) + f(b)$), also<br>$$\\tilde{\\mathrm{d}}(x,z) = f(\\mathrm{d}(x,z)) \\le f(\\mathrm{d}(x,y) + \\mathrm{d}(y,z)) \\le \\tilde{\\mathrm{d}}(x,y) + \\tilde{\\mathrm{d}}(y,z). \\quad \\square$$",
    meta: "Skript: Übung 5.15, S. 233",
    explanation: "<b>Anwendung:</b> $\\tilde{\\mathrm{d}}$ staucht jede (auch unbeschränkte) Metrik in das Intervall $[0, 1)$, ohne den Konvergenzbegriff zu ändern &ndash; nützlich, wenn man beschränkte Abstände braucht. Beide Konstruktionen zeigen: Aus einer Metrik lassen sich viele weitere bauen, indem man eine konkave, monotone Funktion $f$ mit $f(0)=0$ nachschaltet.",
    example: "Für $\\mathrm{d}(x,y) = 999$: $\\tilde{\\mathrm{d}}(x,y) = \\frac{999}{1000} = 0{,}999 < 1$. Für $\\mathrm{d}(x,y) = \\tfrac14$: $\\mathrm{d}_{1/2}(x,y) = \\tfrac12$ &ndash; kleine Abstände werden von der Wurzel <i>vergrössert</i>.",
    counterexample: "<b>1.</b> Die Konstruktion funktioniert nicht mit konvexen Funktionen: $\\mathrm{d}(x,y)^2$ ist i.A. <i>keine</i> Metrik (auf $\\mathbb{R}$: $\\mathrm{d}(0,2)^2 = 4 > 1 + 1$) &ndash; Quadrieren zerstört die Dreiecksungleichung, Wurzelziehen bewahrt sie.<br><b>2.</b> $\\tilde{\\mathrm{d}}$ und $\\mathrm{d}$ sind i.A. <i>nicht</i> $C$-äquivalent (siehe Übung zu äquivalenten Metriken): $\\tilde{\\mathrm{d}} < 1$ ist beschränkt, $\\mathrm{d}$ auf $\\mathbb{R}$ nicht &ndash; gleiche Konvergenz trotz fehlender $C$-Äquivalenz."
  },
  {
    id: "k5_def_5_16",
    title: "Definition 5.16: Offene Bälle und offene Mengen",
    category: "5.2 Metrische Räume",
    type: "definition",
    front: "Wie sind ein <b>offener Ball $B_r(x_0)$</b> und eine <b>offene Teilmenge $O \\subseteq X$</b> in einem metrischen Raum $(X, \\mathrm{d})$ definiert?",
    back: "&bull; Für $r > 0$ und $x_0 \\in X$ heisst<br>$$B_r(x_0) = \\{x \\in X \\mid \\mathrm{d}(x, x_0) < r\\}$$<br>der <b>offene Ball</b> mit Radius $r$ um $x_0$.<br><br>&bull; Eine Teilmenge $O \\subseteq X$ ist <b>offen</b>, falls es zu jedem $x_0 \\in O$ ein $r > 0$ gibt mit<br>$$B_r(x_0) \\subseteq O.$$",
    meta: "Skript: Definition 5.16, S. 234 (vgl. Definition 2.52)",
    explanation: "Eine Menge ist offen, wenn jeder ihrer Punkte ein <i>innerer</i> Punkt ist: Um jeden Punkt passt noch ein kleiner Sicherheitsball, der ganz in der Menge liegt. Beachte die <i>strikte</i> Ungleichung $\\mathrm{d}(x,x_0) < r$ in der Ball-Definition.<br><br><svg width='100%' height='130' viewBox='0 0 320 130' style='max-width:100%; height:auto; background:#f8fafc; border-radius:8px; margin-top:6px;'><path d='M40,30 Q160,10 280,40 Q300,100 240,110 Q100,120 30,80 Z' fill='#10b981' fill-opacity='0.15' stroke='#10b981' stroke-width='2'/><circle cx='140' cy='70' r='30' fill='none' stroke='#1f407a' stroke-dasharray='3 3' stroke-width='1.5'/><circle cx='140' cy='70' r='3' fill='#1f407a'/><text x='140' y='63' font-size='10' text-anchor='middle' font-weight='bold' fill='#1f407a'>x&#8320;</text><text x='175' y='73' font-size='9' fill='#1f407a'>B&#7523;(x&#8320;) &#8838; O</text><text x='250' y='80' font-size='12' font-weight='bold' fill='#10b981'>O</text></svg>",
    example: "Jedes offene Intervall $(a,b) \\subseteq \\mathbb{R}$ ist offen bezüglich der Standardmetrik: Um $x_0 \\in (a,b)$ wähle $r = \\min\\{x_0 - a, b - x_0\\} > 0$. Auch jeder offene Ball selbst ist offen (das zeigt der Beweis von Lemma 5.17).",
    counterexample: "<b>1.</b> $[a,b]$ ist <i>nicht</i> offen in $\\mathbb{R}$: Jeder Ball $B_r(a) = (a-r, a+r)$ um den Randpunkt $a$ enthält Punkte ausserhalb von $[a,b]$.<br><b>2.</b> Offenheit hängt vom umgebenden Raum ab: $[0, 1)$ ist nicht offen in $\\mathbb{R}$, aber <i>offen im Teilraum</i> $X = [0, \\infty)$ mit induzierter Metrik, denn dort ist $B_1(0) = [0,1)$ &ndash; &bdquo;offen&ldquo; ist keine absolute Eigenschaft der Menge allein."
  },
  {
    id: "k5_lemma_5_17",
    title: "Lemma 5.17: Schnitte offener Bälle",
    category: "5.2 Metrische Räume",
    type: "lemma",
    front: "Was besagt <b>Lemma 5.17</b> über den Schnitt zweier offener Bälle, und wie beweist man es?",
    back: "Seien $x_1, x_2 \\in X$ und $r_1, r_2 > 0$. Dann ist $B_{r_1}(x_1) \\cap B_{r_2}(x_2)$ <b>offen</b>: Für jedes $x$ im Schnitt existiert ein $r > 0$ mit $B_r(x) \\subseteq B_{r_1}(x_1) \\cap B_{r_2}(x_2)$.<br><br><b>Beweis:</b><br>1. Setze $r = \\min\\{r_1 - \\mathrm{d}(x, x_1),\\ r_2 - \\mathrm{d}(x, x_2)\\}$; es gilt $r > 0$, da $\\mathrm{d}(x,x_i) < r_i$.<br>2. Für $y \\in B_r(x)$ liefert die Dreiecksungleichung:<br>$$\\mathrm{d}(y, x_1) \\le \\mathrm{d}(y, x) + \\mathrm{d}(x, x_1) < \\big(r_1 - \\mathrm{d}(x,x_1)\\big) + \\mathrm{d}(x,x_1) = r_1$$<br>3. Genauso $\\mathrm{d}(y, x_2) < r_2$, also $B_r(x) \\subseteq B_{r_1}(x_1) \\cap B_{r_2}(x_2)$. $\\square$",
    meta: "Skript: Lemma 5.17, S. 234-235",
    explanation: "<b>Idee:</b> $r$ ist der kleinere der beiden &bdquo;Restabstände zum Rand&ldquo;. So bleibt der neue Ball ganz im Schnittgebiet.<br><br><svg width='100%' height='135' viewBox='0 0 320 135' style='max-width:100%; height:auto; background:#f8fafc; border-radius:8px; margin-top:6px;'><circle cx='110' cy='68' r='55' fill='none' stroke='#1f407a' stroke-width='2'/><circle cx='190' cy='68' r='55' fill='none' stroke='#10b981' stroke-width='2'/><circle cx='150' cy='68' r='18' fill='#ef4444' fill-opacity='0.25' stroke='#ef4444' stroke-width='1.5'/><circle cx='150' cy='68' r='2.5' fill='#ef4444'/><text x='150' y='61' text-anchor='middle' font-size='9' font-weight='bold' fill='#ef4444'>x</text><text x='70' y='68' font-size='10' fill='#1f407a'>B&#7523;&#8321;(x&#8321;)</text><text x='205' y='68' font-size='10' fill='#10b981'>B&#7523;&#8322;(x&#8322;)</text></svg>",
    example: "In $\\mathbb{R}$: $B_2(0) \\cap B_2(3) = (-2,2) \\cap (1,5) = (1,2)$ &ndash; wieder offen. Für $x = 1{,}5$: $r = \\min\\{2 - 1{,}5,\\ 2 - 1{,}5\\} = 0{,}5$ und tatsächlich $(1, 2) \\supseteq B_{0{,}5}(1{,}5)$.",
    counterexample: "<b>1.</b> Für <i>unendliche</i> Schnitte wird die Aussage falsch: $\\bigcap_{n \\in \\mathbb{N}} B_{1/n}(0) = \\{0\\}$ in $\\mathbb{R}$ ist nicht offen &ndash; die Radien $r$ schrumpfen gegen $0$ weg.<br><b>2.</b> Der naive Radius $r = \\min\\{r_1, r_2\\}$ (statt der Restabstände) funktioniert nicht: Für $x$ nahe am Rand von $B_{r_1}(x_1)$ ragt $B_r(x)$ sonst über den Ball hinaus."
  },
  {
    id: "k5_uebung_5_18_baelle",
    title: "Wichtige Übung 5.18: Wie sehen offene Bälle aus?",
    category: "5.2 Metrische Räume",
    type: "beispiel",
    front: "Beschreibe die offenen Bälle $B_r(x_0)$ in folgenden metrischen Räumen:<br>1. diskrete Metrik, 2. Manhattanmetrik auf $[0,1]^2$, 3. Metrik $\\mathrm{d}_\\infty$ auf $\\mathbb{R}^2$, 4. SNCF-Metrik auf $\\mathbb{C}$, 5. $C([0,1])$ mit $\\|\\cdot\\|_\\infty$.",
    back: "1. <b>Diskret:</b> $B_r(x_0) = \\{x_0\\}$ für $r \\le 1$ und $B_r(x_0) = X$ für $r > 1$.<br>2. <b>Manhattan:</b> auf die Spitze gestellte Quadrate (Rauten) $\\{|x - x_0| + |y - y_0| < r\\}$, geschnitten mit $[0,1]^2$.<br>3. <b>$\\mathrm{d}_\\infty$:</b> achsenparallele offene Quadrate mit Seitenlänge $2r$ um $x_0$.<br>4. <b>SNCF:</b> Für $r \\le |x_0|$: ein offenes Segment auf der Ursprungsgeraden durch $x_0$ (Paris wird nicht erreicht). Für $r > |x_0|$: dieses Segment <i>plus</i> ein Stern aus Segmenten der Länge $r - |x_0|$ auf <i>allen</i> Halbgeraden ab dem Ursprung.<br>5. <b>$C([0,1])$, $\\|\\cdot\\|_\\infty$:</b> alle stetigen Funktionen, deren Graph im offenen &bdquo;$\\varepsilon$-Schlauch&ldquo; der Breite $2r$ um den Graphen von $x_0 = f$ verläuft.",
    meta: "Skript: Wichtige Übung 5.18 & Applet 5.19, S. 235",
    explanation: "<b>Fazit:</b> Die Anschauung vom &bdquo;runden Ball&ldquo; täuscht! Je nach Metrik sind Bälle Quadrate, Rauten, Einpunktmengen, Sterne aus Strecken oder Funktionenschläuche. Die <i>Form</i> der Bälle kodiert die Geometrie der Metrik &ndash; ihre Rolle für Konvergenz und Offenheit ist aber immer dieselbe.",
    example: "Diskrete Metrik mit $r = \\tfrac12$: $B_{1/2}(x_0) = \\{x_0\\}$ &ndash; jede Einpunktmenge ist offen, also ist <i>jede</i> Teilmenge offen (Vereinigung von Einpunktmengen).",
    counterexample: "<b>1.</b> Bälle müssen nicht &bdquo;zusammenhängend aussehen wie Kreise&ldquo;: Der SNCF-Ball mit $r > |x_0|$ ist ein Stern aus unendlich vielen Strecken.<br><b>2.</b> Bälle müssen nicht einmal unendlich sein: In der diskreten Metrik ist $B_1(x_0) = \\{x_0\\}$ endlich &ndash; die Intuition &bdquo;Ball = Umgebung mit vielen Punkten&ldquo; ist metrikabhängig."
  },

  // ========================================================================
  // 5.3 FOLGEN UND KONVERGENZ
  // ========================================================================
  {
    id: "k5_def_5_20",
    title: "Definition 5.20: Folgen",
    category: "5.3 Folgen und Konvergenz",
    type: "definition",
    front: "Was ist formal eine <b>Folge</b> in einer Menge $X$, und wann heisst sie <b>konstant</b> bzw. <b>schliesslich konstant</b>?",
    back: "Eine <b>Folge</b> in $X$ ist eine Abbildung $a: \\mathbb{N} \\to X$. Man schreibt $a_n = a(n)$ (das $n$-te <b>Folgenglied</b>) und notiert die Folge als $(a_1, a_2, \\dots)$, $(a_n)_{n \\in \\mathbb{N}}$, $(a_n)_{n=1}^\\infty$ oder kurz $(a_n)_n$. Die Menge aller Folgen in $X$ ist $X^{\\mathbb{N}}$.<br><br>&bull; <b>konstant:</b> $a_n = a_m$ für alle $m, n \\in \\mathbb{N}$<br>&bull; <b>schliesslich konstant:</b> es existiert $N \\in \\mathbb{N}$ mit $a_n = a_m$ für alle $m, n \\ge N$",
    meta: "Skript: Definition 5.20, S. 236",
    explanation: "Eine Folge ist eine unendliche, geordnete Liste. &bdquo;Schliesslich konstant&ldquo; heisst: ab einem Index erstarrt sie zu einem festen Wert &ndash; das ist das einfachste Konvergenzverhalten und der Ausgangspunkt für die allgemeine Konvergenzdefinition.<br><br>Ist $X = V$ ein Vektorraum, so bilden die Folgen mit $(a_n)_n + (b_n)_n = (a_n + b_n)_n$ und $\\alpha (a_n)_n = (\\alpha a_n)_n$ selbst einen Vektorraum.",
    example: "$a_n = 5$ für $n \\ge 10$ und $a_n = n$ für $n < 10$ ist schliesslich konstant (ab $N = 10$). Die Folge $(\\tfrac1n)_n = (1, \\tfrac12, \\tfrac13, \\dots)$ ist weder konstant noch schliesslich konstant &ndash; aber konvergent.",
    counterexample: "<b>1.</b> $a_n = (-1)^n$ ist nicht schliesslich konstant: Sie wechselt unendlich oft zwischen $-1$ und $1$.<br><b>2.</b> Eine Folge ist mehr als ihre Wertemenge: $(1, 2, 1, 2, \\dots)$ und $(1, 1, 2, 2, 1, 1, \\dots)$ haben dieselbe Wertemenge $\\{1,2\\}$, sind aber verschiedene Folgen &ndash; die Abbildung $n \\mapsto a_n$ zählt, nicht nur das Bild."
  },
  {
    id: "k5_def_5_21",
    title: "Definition 5.21: Konvergenz in metrischen Räumen",
    category: "5.3 Folgen und Konvergenz",
    type: "definition",
    front: "Wie ist die <b>Konvergenz</b> einer Folge $(a_n)_n$ in einem metrischen Raum $(X, \\mathrm{d})$ definiert? Was bedeuten <b>konvergent</b> und <b>divergent</b>?",
    back: "$(a_n)_n$ <b>konvergiert</b> (oder <b>strebt</b>) gegen $A \\in X$, falls es für jedes $\\varepsilon > 0$ ein $N \\in \\mathbb{N}$ gibt, so dass $\\mathrm{d}(a_n, A) < \\varepsilon$ für alle $n \\ge N$. In Prädikatenlogik:<br>$$\\forall \\varepsilon > 0\\ \\exists N \\in \\mathbb{N}\\ \\forall n \\ge N: \\mathrm{d}(a_n, A) < \\varepsilon$$<br>$A$ heisst dann <b>Grenzwert</b>, geschrieben $\\lim_{n \\to \\infty} a_n = A$.<br><br>Eine Folge heisst <b>konvergent</b>, falls sie einen Grenzwert besitzt, und <b>divergent</b>, falls nicht.<br><br><i>Äquivalent:</i> $(a_n)_n \\to A$ in $X$ $\\iff$ die reelle Folge $(\\mathrm{d}(a_n, A))_n$ konvergiert gegen $0$.",
    meta: "Skript: Definition 5.21, S. 236-237",
    explanation: "<b>$\\varepsilon$-Ball-Intuition:</b> Egal wie klein der Ball $B_\\varepsilon(A)$ gewählt wird &ndash; ab einem Index $N$ liegen <i>alle weiteren</i> Folgenglieder darin. Es reicht sogar, die Bedingung für alle kleinen $\\varepsilon \\in (0, \\varepsilon_0)$ zu prüfen (Übung 5.23).<br><br><svg width='100%' height='130' viewBox='0 0 320 130' style='max-width:100%; height:auto; background:#f8fafc; border-radius:8px;'><circle cx='210' cy='65' r='45' fill='#10b981' fill-opacity='0.15' stroke='#10b981' stroke-dasharray='3 3' stroke-width='2'/><circle cx='210' cy='65' r='3' fill='#1f407a'/><text x='210' y='55' text-anchor='middle' font-weight='bold' fill='#1f407a'>A</text><circle cx='30' cy='100' r='3' fill='#ef4444'/><circle cx='75' cy='30' r='3' fill='#ef4444'/><circle cx='130' cy='90' r='3' fill='#ef4444'/><circle cx='185' cy='75' r='3' fill='#10b981'/><circle cx='220' cy='60' r='3' fill='#10b981'/><circle cx='205' cy='68' r='3' fill='#10b981'/><text x='30' y='115' font-size='9' fill='#666'>a&#8321;</text><text x='185' y='90' font-size='9' font-weight='bold' fill='#10b981'>a&#8342;</text></svg>",
    example: "In $(\\mathbb{R}, |\\cdot|)$: $\\lim_{n\\to\\infty} \\tfrac1n = 0$, denn zu $\\varepsilon > 0$ existiert nach dem Archimedischen Prinzip (Satz 2.68) ein $N$ mit $\\tfrac1N < \\varepsilon$, und für $n \\ge N$ gilt $|\\tfrac1n - 0| \\le \\tfrac1N < \\varepsilon$ (Beispiel 5.28).",
    counterexample: "<b>1.</b> $a_n = (-1)^n$ ist divergent: Für jedes $A$ liegt unendlich oft ein Folgenglied im Abstand $\\ge 1$ von $A$ (Beispiel 5.28).<br><b>2.</b> Konvergenz hängt von der Metrik ab: $a_n = \\tfrac1n$ konvergiert in $(\\mathbb{R}, |\\cdot|)$ gegen $0$, aber bezüglich der <i>diskreten</i> Metrik divergiert dieselbe Folge, denn $\\mathrm{d}_{\\text{diskret}}(a_n, 0) = 1$ für alle $n$."
  },
  {
    id: "k5_lemma_5_22",
    title: "Lemma 5.22: Eindeutigkeit des Grenzwerts",
    category: "5.3 Folgen und Konvergenz",
    type: "lemma",
    front: "Zeige: Jede konvergente Folge in einem metrischen Raum besitzt einen <b>eindeutigen</b> Grenzwert.",
    back: "<b>Beweis (Widerspruch):</b><br>1. Angenommen $A_1 \\neq A_2$ sind zwei Grenzwerte von $(a_n)_n$. Dann ist $\\varepsilon = \\frac{\\mathrm{d}(A_1, A_2)}{2} > 0$.<br>2. Konvergenz gegen $A_1$: $\\exists N_1$ mit $\\mathrm{d}(a_n, A_1) < \\varepsilon$ für $n \\ge N_1$; gegen $A_2$: $\\exists N_2$ analog.<br>3. Für $N = \\max\\{N_1, N_2\\}$ liefert die Dreiecksungleichung:<br>$$\\mathrm{d}(A_1, A_2) \\le \\mathrm{d}(A_1, a_N) + \\mathrm{d}(a_N, A_2) < 2\\varepsilon = \\mathrm{d}(A_1, A_2),$$<br>ein Widerspruch. $\\square$<br><br>Deshalb spricht man von <b>dem</b> Grenzwert $\\lim_{n\\to\\infty} a_n$.",
    meta: "Skript: Lemma 5.22 & Übung 5.23, S. 237",
    explanation: "<b>Idee:</b> Zwei Punkte mit positivem Abstand lassen sich durch disjunkte $\\varepsilon$-Bälle trennen &ndash; eine Folge kann sich aber nicht gleichzeitig schliesslich in beiden Bällen aufhalten.<br><br><svg width='100%' height='110' viewBox='0 0 320 110' style='max-width:100%; height:auto; background:#f8fafc; border-radius:8px;'><circle cx='90' cy='55' r='35' fill='none' stroke='#1f407a' stroke-width='2'/><circle cx='230' cy='55' r='35' fill='none' stroke='#ef4444' stroke-width='2'/><circle cx='90' cy='55' r='3' fill='#1f407a'/><circle cx='230' cy='55' r='3' fill='#ef4444'/><text x='90' y='50' text-anchor='middle' font-size='10' font-weight='bold' fill='#1f407a'>A&#8321;</text><text x='230' y='50' text-anchor='middle' font-size='10' font-weight='bold' fill='#ef4444'>A&#8322;</text><line x1='90' y1='55' x2='230' y2='55' stroke='#666' stroke-dasharray='2 2'/><text x='160' y='45' text-anchor='middle' font-size='9' fill='#666'>d(A&#8321;, A&#8322;)</text></svg>",
    example: "Die Wahl $\\varepsilon = \\frac{\\mathrm{d}(A_1,A_2)}{2}$ ist der Standard-Trick: Halber Abstand garantiert disjunkte Bälle $B_\\varepsilon(A_1) \\cap B_\\varepsilon(A_2) = \\emptyset$.",
    counterexample: "<b>1.</b> Die Eindeutigkeit benutzt die <i>Definitheit</i> der Metrik: Mit einer &bdquo;Pseudometrik&ldquo; wie $\\mathrm{d}(x,y) = |x^2 - y^2|$ auf $\\mathbb{R}$ hätte die konstante Folge $a_n = 1$ die beiden &bdquo;Grenzwerte&ldquo; $1$ und $-1$.<br><b>2.</b> <i>Häufungspunkte</i> sind nicht eindeutig: $(-1)^n$ hat die beiden Häufungspunkte $\\pm 1$ &ndash; Eindeutigkeit ist eine Besonderheit des Grenzwerts, nicht jeder &bdquo;Annäherungsbegriff&ldquo; hat sie."
  },
  {
    id: "k5_def_5_24",
    title: "Definition 5.24: Umgebungen & Lemma 5.25: Indexverschiebung",
    category: "5.3 Folgen und Konvergenz",
    type: "definition",
    front: "Was ist eine <b>Umgebung</b> von $x_0 \\in X$? Wie charakterisiert man Konvergenz über Umgebungen, und was besagt die <b>Indexverschiebung</b> (Lemma 5.25)?",
    back: "&bull; <b>Umgebung (Def. 5.24):</b> Eine Teilmenge $U \\subseteq X$ heisst Umgebung von $x_0$, falls sie eine $\\varepsilon$-Umgebung $B_\\varepsilon(x_0)$ für ein $\\varepsilon > 0$ enthält.<br><br>&bull; <b>Umgebungs-Charakterisierung:</b> $(x_n)_n \\to x_0$ genau dann, wenn für <i>jede</i> Umgebung $U$ von $x_0$ <b>fast alle</b> (= alle bis auf endlich viele) Folgenglieder in $U$ liegen.<br><br>&bull; <b>Lemma 5.25 (Indexverschiebung):</b> Für $\\ell \\in \\mathbb{N}_0$ ist $(a_n)_n$ genau dann konvergent, wenn $(a_{n+\\ell})_n$ konvergent ist; in diesem Fall gilt $\\lim_{n\\to\\infty} a_n = \\lim_{n\\to\\infty} a_{n+\\ell}$.",
    meta: "Skript: Definition 5.24, Lemma 5.25, Übung 5.26, S. 238",
    explanation: "Die Umgebungsformulierung macht Konvergenz unabhängig von konkreten $\\varepsilon$-Werten und ebnet den Weg zur Topologie (2. Semester). &bdquo;Fast alle&ldquo; ist der Schlüsselbegriff: endlich viele Ausreisser am Anfang sind immer erlaubt &ndash; genau das formalisiert die Indexverschiebung: Konvergenz ist eine Eigenschaft des &bdquo;Folgenendes&ldquo;.",
    example: "$[0, 2]$ ist eine Umgebung von $1$ in $\\mathbb{R}$ (sie enthält $B_{1/2}(1)$), obwohl $[0,2]$ nicht offen ist. Indexverschiebung: $\\lim_n \\frac{1}{n+5} = \\lim_n \\frac1n = 0$.",
    counterexample: "<b>1.</b> $[1, 2]$ ist <i>keine</i> Umgebung von $1$: Kein Ball $B_\\varepsilon(1) = (1-\\varepsilon, 1+\\varepsilon)$ passt hinein.<br><b>2.</b> &bdquo;Unendlich viele Folgenglieder in jeder Umgebung&ldquo; genügt <i>nicht</i> für Konvergenz: $(-1)^n$ hat unendlich viele Glieder in jeder Umgebung von $1$, konvergiert aber nicht &ndash; es braucht <i>fast alle</i> (das ist der Unterschied zwischen Häufungspunkt und Grenzwert)."
  },
  {
    id: "k5_lemma_5_27",
    title: "Lemma 5.27: Konvergente Folgen sind beschränkt",
    category: "5.3 Folgen und Konvergenz",
    type: "lemma",
    front: "Wann heisst eine Folge in einem normierten Vektorraum <b>beschränkt</b>, und warum ist jede konvergente Folge beschränkt (Lemma 5.27)?",
    back: "Eine Folge $(a_n)_n$ in $(V, \\|\\cdot\\|)$ heisst <b>beschränkt</b>, falls es ein $M > 0$ gibt mit $\\|a_n\\| \\le M$ für alle $n \\in \\mathbb{N}$.<br><br><b>Lemma 5.27:</b> Jede konvergente Folge in $V$ ist beschränkt.<br><br><b>Beweis:</b><br>1. Sei $A = \\lim a_n$. Zu $\\varepsilon = 1$ existiert $N$ mit $\\|a_n - A\\| < 1$ für $n \\ge N$.<br>2. Dreiecksungleichung: $\\|a_n\\| = \\|a_n - A + A\\| \\le \\|a_n - A\\| + \\|A\\| < 1 + \\|A\\|$ für $n \\ge N$.<br>3. Insgesamt: $\\|a_n\\| \\le \\max\\{\\|a_1\\|, \\dots, \\|a_{N-1}\\|,\\ 1 + \\|A\\|\\}$ für alle $n$. $\\square$",
    meta: "Skript: Lemma 5.27, S. 238 (Verallgemeinerung: Übung in 5.5.2)",
    explanation: "<b>Prinzip:</b> Ab Index $N$ sitzen alle Glieder im Ball $B_1(A)$ &ndash; der ist beschränkt. Die endlich vielen Glieder davor können die Schranke nur um ein Maximum endlich vieler Werte vergrössern. &bdquo;Endlich viele Ausnahmen schaden der Beschränktheit nie.&ldquo; Die Kontraposition ist ein wichtiges Divergenzkriterium: <b>unbeschränkt $\\Rightarrow$ divergent</b>.",
    example: "$a_n = \\tfrac1n$: konvergent gegen $0$ und beschränkt durch $M = 1$. Kontraposition angewandt: $q^n$ mit $|q| > 1$ ist unbeschränkt (Bernoulli-Ungleichung), also divergent (Beispiel 5.34 (iv)).",
    counterexample: "<b>1.</b> Die Umkehrung ist falsch: $a_n = (-1)^n$ ist beschränkt ($M = 1$), aber divergent.<br><b>2.</b> $\\varepsilon = 1$ fest zu wählen ist hier erlaubt, weil Beschränktheit nur <i>irgendeine</i> Schranke braucht &ndash; aber Vorsicht: Für einen <i>Konvergenz</i>beweis darf man $\\varepsilon$ nie fest wählen, dort muss die Bedingung für <i>alle</i> $\\varepsilon > 0$ gelten."
  },
  {
    id: "k5_bsp_5_28",
    title: "Beispiel 5.28 & Übung 5.29: Erste konvergente und divergente Folgen",
    category: "5.3 Folgen und Konvergenz",
    type: "beispiel",
    front: "Diskutiere die Grundbeispiele aus dem Skript: konstante Folgen, $\\left(\\tfrac1n\\right)_n$ und $\\left((-1)^n\\right)_n$. Was besagt die <b>Wichtige Übung 5.29</b>?",
    back: "&bull; <b>Konstante Folge</b> $a_n = A$: konvergiert gegen $A$; ebenso konvergieren schliesslich konstante Folgen gegen ihren Endwert.<br><br>&bull; $\\lim_{n\\to\\infty} \\tfrac1n = 0$: Zu $\\varepsilon > 0$ liefert das <b>Archimedische Prinzip</b> (Satz 2.68) ein $N$ mit $\\tfrac1N < \\varepsilon$; für $n \\ge N$ folgt $0 \\le \\tfrac1n \\le \\tfrac1N < \\varepsilon$.<br><br>&bull; $a_n = (-1)^n$ ist <b>divergent</b>: Für $A \\neq 1$ setze $\\varepsilon = |A - 1| > 0$; es gibt beliebig späte gerade $n$ mit $|a_n - A| = |1 - A| = \\varepsilon \\not< \\varepsilon$. Für $A = 1$ liefern die ungeraden $n$ den Abstand $|1 - (-1)| = 2$.<br><br>&bull; <b>Wichtige Übung 5.29:</b> Ist $(a_n)_n$ eine konvergente Folge in $\\mathbb{C}$ mit $a_n \\in \\mathbb{R}$ für alle $n$, so ist auch $\\lim_{n\\to\\infty} a_n$ reell.",
    meta: "Skript: Beispiel 5.28, Wichtige Übung 5.29, S. 239",
    explanation: "Diese drei Beispiele sind die Prototypen: <i>stillstehend</i>, <i>gegen einen Punkt fallend</i>, <i>ewig oszillierend</i>. Der Beweis für $\\tfrac1n$ zeigt das typische Muster jedes $\\varepsilon$-$N$-Beweises: $\\varepsilon$ gegeben, $N$ konstruieren, Abschätzung für alle $n \\ge N$. Die Divergenz von $(-1)^n$ zeigt das Muster eines Negativ-Beweises: <i>jeden</i> Kandidaten $A$ ausschliessen.<br><br>Eine konvergente Folge mit Grenzwert $0$ heisst <b>Nullfolge</b>.",
    example: "Mit den Rechenregeln (Prop. 5.30) folgt sofort mehr: $\\frac{7n^4 + 15}{3n^4 + n^3 + n - 1} \\to \\frac73$ (kürze durch $n^4$; Übung 5.32).",
    counterexample: "<b>1.</b> $(-1)^n$: beschränkt, aber divergent &ndash; Beschränktheit genügt nicht für Konvergenz.<br><b>2.</b> Übung 5.33: Ist $(a_n)_n$ komplexwertig mit $a_n \\neq 0$ und $(a_n^{-1})_n \\to 0$, so ist $(a_n)_n$ <i>divergent</i> (sie ist unbeschränkt) &ndash; &bdquo;der Kehrwert wird klein&ldquo; bedeutet gerade nicht Konvergenz der Folge selbst."
  },
  {
    id: "k5_prop_5_30",
    title: "Proposition 5.30: Rechenregeln für Grenzwerte",
    category: "5.3 Folgen und Konvergenz",
    type: "proposition",
    front: "Welche <b>additiven und multiplikativen Eigenschaften</b> hat der Grenzwert konvergenter Folgen $(a_n)_n, (b_n)_n$ in $\\mathbb{C}$ (Proposition 5.30)?",
    back: "Seien $\\lim a_n = A$ und $\\lim b_n = B$. Dann gilt:<br><br>(i) <b>Summe:</b> $(a_n + b_n)_n$ konvergiert mit $\\lim (a_n + b_n) = A + B$.<br>(ii) <b>Produkt:</b> $(a_n b_n)_n$ konvergiert mit $\\lim (a_n b_n) = A \\cdot B$; insbesondere $\\lim (\\alpha a_n) = \\alpha A$ für $\\alpha \\in \\mathbb{C}$.<br>(iii) <b>Kehrwert:</b> Falls $a_n \\neq 0$ für alle $n$ und $A \\neq 0$, konvergiert $\\left(\\tfrac{1}{a_n}\\right)_n$ mit $\\lim \\tfrac{1}{a_n} = \\tfrac{1}{A}$.<br><br><i>Folgerung:</i> Die konvergenten Folgen bilden einen Unterraum von $\\mathbb{C}^{\\mathbb{N}}$, und $\\lim$ ist eine lineare Abbildung nach $\\mathbb{C}$.",
    meta: "Skript: Proposition 5.30, S. 239-241",
    explanation: "<b>Beweis-Kniffe:</b> Für die Summe: $|(a_n + b_n) - (A+B)| \\le |a_n - A| + |b_n - B| < \\tfrac\\varepsilon2 + \\tfrac\\varepsilon2$. Für das Produkt die <b>Mischterm-Zerlegung</b>:<br>$$|a_nb_n - AB| \\le |a_n - A||b_n| + |A||b_n - B|,$$<br>wobei $|b_n| \\le 1 + |B|$ für grosse $n$ (Beschränktheit, Lemma 5.27). Für den Kehrwert verhindert die umgekehrte Dreiecksungleichung, dass $a_n$ zu klein wird: $|a_n| > \\tfrac{|A|}{2}$ für grosse $n$.",
    example: "$$\\lim_{n \\to \\infty} \\frac{3n + 1}{2n - 5} = \\lim_{n \\to \\infty} \\frac{3 + \\tfrac1n}{2 - \\tfrac5n} = \\frac{3 + 0}{2 - 0} = \\frac{3}{2}$$ &ndash; Zähler und Nenner durch $n$ teilen und (i)&ndash;(iii) anwenden (vgl. Übung 5.32).",
    counterexample: "<b>1.</b> Die Umkehrung von (i) ist falsch: $a_n = (-1)^n$ und $b_n = (-1)^{n+1}$ divergieren beide, ihre Summe $a_n + b_n = 0$ konvergiert.<br><b>2.</b> In (iii) ist $A \\neq 0$ wesentlich: Für $a_n = \\tfrac1n \\to 0$ divergiert $\\tfrac{1}{a_n} = n$ (unbeschränkt). Auch $a_n \\neq 0$ für alle $n$ ist nötig, damit die Kehrwertfolge überhaupt definiert ist."
  },
  {
    id: "k5_bsp_5_34",
    title: "Beispiel 5.34: Geometrische Folgen",
    category: "5.3 Folgen und Konvergenz",
    type: "beispiel",
    front: "Untersuche das Konvergenzverhalten der <b>geometrischen Folge</b> $(q^n)_n$ für $q \\in \\mathbb{C}$ in allen Fällen.",
    back: "&bull; <b>$q = 1$:</b> $q^n = 1 \\to 1$.<br>&bull; <b>$|q| < 1$:</b> $\\lim_{n\\to\\infty} q^n = 0$ (Nullfolge).<br>&bull; <b>$|q| > 1$:</b> $(q^n)_n$ ist unbeschränkt und daher divergent.<br>&bull; <b>$|q| = 1$, $q \\neq 1$:</b> beschränkt, aber divergent (z.B. $q = -1$).",
    meta: "Skript: Beispiel 5.34 & Übung 5.35, S. 241-242",
    explanation: "<b>Beweis-Ideen aus dem Skript:</b><br>&bull; $|q| > 1$: Schreibe $|q| = 1 + x$ mit $x > 0$. Bernoulli (Lemma 3.5) + Archimedes: $|q|^N \\ge 1 + Nx > M$ &ndash; unbeschränkt, mit Lemma 5.27 divergent.<br>&bull; $|q| < 1$, $q \\neq 0$: $|q^{-1}| > 1$, also existiert $N$ mit $|q|^{-N} > \\tfrac1\\varepsilon$, d.h. $|q^n| \\le |q|^N < \\varepsilon$ für $n \\ge N$.<br>&bull; $|q| = 1$, $q \\neq 1$ (elegant!): Wäre $\\lim q^n = A$, so $A = \\lim q^{n+1} = q \\lim q^n = qA$ (Prop. 5.30 + Indexverschiebung Lemma 5.25), also $(q-1)A = 0$ und $A = 0$ &ndash; im Widerspruch zu $|q^n| = 1$ für alle $n$.",
    example: "$q = 0{,}5$: $\\lim (0{,}5)^n = 0$. Sogar $nq^n \\to 0$ für $|q| < 1$ (Übung 5.35) &ndash; die geometrische Abnahme schlägt das lineare Wachstum.",
    counterexample: "<b>1.</b> $q = -1$: Die Folge $(-1, 1, -1, \\dots)$ ist beschränkt, hat aber keinen Grenzwert.<br><b>2.</b> $q = i$ (mit $|q| = 1$): $(i, -1, -i, 1, i, \\dots)$ läuft periodisch über vier Werte auf dem Einheitskreis &ndash; beschränkt, divergent; der Fall $|q| = 1, q \\neq 1$ ist also auch mit komplexen $q$ echt divergent."
  },
  {
    id: "k5_uebung_5_36",
    title: "Übung 5.36: Cesàro-Mittel",
    category: "5.3 Folgen und Konvergenz",
    type: "lemma",
    front: "Was besagt Übung 5.36 über die <b>Cesàro-Mittel</b> (arithmetische Mittel) $b_n = \\frac{1}{n}\\sum_{k=1}^n a_k$ einer konvergenten Folge?",
    back: "Sei $(a_n)_n$ eine konvergente Folge in $\\mathbb{C}$. Dann konvergiert auch die Folge der <b>Cesàro-Mittel</b> (auch <b>arithmetische Mittel</b> oder <b>Cauchy-Mittel</b>)<br>$$b_n = \\frac{1}{n} \\sum_{k=1}^n a_k$$<br>und hat <b>denselben Grenzwert</b> wie $(a_n)_n$.<br><br><b>Die Umkehrung gilt nicht:</b> Konvergenz der Cesàro-Mittel impliziert nicht die Konvergenz der Folge selbst.",
    meta: "Skript: Übung 5.36, S. 242",
    explanation: "<b>Beweisidee:</b> Teile die Summe in einen &bdquo;frühen&ldquo; Teil (endlich viele Glieder, deren Beitrag $\\tfrac{1}{n}\\sum_{k \\le N}|a_k - A|$ mit wachsendem $n$ verschwindet) und einen &bdquo;späten&ldquo; Teil, in dem alle $a_k$ bereits $\\varepsilon$-nahe an $A$ liegen. Mitteln <i>glättet</i> also: Es erhält Grenzwerte, bügelt aber Oszillationen weg &ndash; der Einstieg in die Theorie der Summierbarkeit divergenter Folgen.",
    example: "$a_n = \\tfrac1n \\to 0$: Auch $b_n = \\tfrac1n\\left(1 + \\tfrac12 + \\dots + \\tfrac1n\\right) \\to 0$ (die harmonischen Partialsummen wachsen langsamer als $n$).",
    counterexample: "<b>1.</b> $a_n = (-1)^n$ divergiert, aber die Cesàro-Mittel $b_n \\in \\{0, -\\tfrac1n\\}$ konvergieren gegen $0$ &ndash; Cesàro-Konvergenz ist echt schwächer als Konvergenz.<br><b>2.</b> Cesàro rettet nicht alles: Für die unbeschränkte Folge $a_n = n$ divergieren auch die Mittel $b_n = \\frac{n+1}{2}$ &ndash; Mitteln hilft nur gegen Oszillation, nicht gegen Wachstum."
  },
  {
    id: "k5_def_5_38",
    title: "Definition 5.38 & Lemma 5.39: Teilfolgen",
    category: "5.3 Folgen und Konvergenz",
    type: "definition",
    front: "Was ist eine <b>Teilfolge</b>, und was besagt <b>Lemma 5.39</b> über Teilfolgen konvergenter Folgen?",
    back: "&bull; <b>Definition 5.38:</b> Ist $(a_n)_n$ eine Folge in $X$ und $(n_k)_k: k \\in \\mathbb{N} \\mapsto n_k \\in \\mathbb{N}$ eine <i>streng monoton wachsende</i> Folge, dann heisst $(a_{n_k})_k$ eine <b>Teilfolge</b> von $(a_n)_n$.<br><br>&bull; <b>Lemma 5.39:</b> Ist $(a_n)_n$ konvergent in einem metrischen Raum $(X,\\mathrm{d})$, so konvergiert <i>jede</i> Teilfolge $(a_{n_k})_k$ und hat denselben Grenzwert: $\\lim_{k\\to\\infty} a_{n_k} = \\lim_{n\\to\\infty} a_n$ (Beweis: Wichtige Übung 5.40).",
    meta: "Skript: Definition 5.38, Lemma 5.39, Übungen 5.40/5.41, S. 242-243",
    explanation: "<b>Beweis-Grundlage:</b> Aus strenger Monotonie folgt $n_k \\ge k$ &ndash; die Teilfolge eilt der Hauptfolge voraus und erbt jede $\\varepsilon$-$N$-Bedingung.<br><br><b>Divergenz-Werkzeug:</b> Zwei Teilfolgen mit <i>verschiedenen</i> Grenzwerten $\\Rightarrow$ Hauptfolge divergiert (eleganter Kurzbeweis für $(-1)^n$!).<br><br><b>Übung 5.41:</b> Umgekehrt konvergiert $(a_n)_n$ genau dann gegen $A$, wenn <i>jede</i> Teilfolge eine gegen $A$ konvergente Teil-Teilfolge besitzt.",
    example: "$a_n = \\tfrac1n$: Die Teilfolge der geraden Indizes $a_{2k} = \\tfrac{1}{2k}$ konvergiert ebenfalls gegen $0$. Streng monoton muss $(n_k)_k$ sein: $n_k = 2k$ ist erlaubt.",
    counterexample: "<b>1.</b> $a_n = (-1)^n$: $a_{2k} = 1 \\to 1$ und $a_{2k+1} = -1 \\to -1$ &ndash; zwei Teilfolgen-Grenzwerte, also divergiert die Hauptfolge.<br><b>2.</b> Konvergente Teilfolgen allein genügen nicht: $(0, 1, 0, 2, 0, 3, \\dots)$ hat die konvergente Teilfolge $(0,0,0,\\dots)$, ist aber divergent (sogar unbeschränkt)."
  },
  {
    id: "k5_prop_5_42",
    title: "Proposition 5.42: Häufungspunkte einer Folge",
    category: "5.3 Folgen und Konvergenz",
    type: "proposition",
    front: "Wie ist ein <b>Häufungspunkt</b> einer Folge definiert, und welche zwei Bedingungen sind äquivalent (Proposition 5.42)?",
    back: "Sei $(a_n)_n$ eine Folge im metrischen Raum $(X, \\mathrm{d})$. Ein Punkt $A \\in X$ heisst <b>Häufungspunkt</b> von $(a_n)_n$, falls die folgenden <i>äquivalenten</i> Bedingungen gelten:<br><br>(a) Es gibt eine Teilfolge $(a_{n_k})_k$ mit $\\lim_{k \\to \\infty} a_{n_k} = A$.<br><br>(b) Für alle $\\varepsilon > 0$ und alle $N \\in \\mathbb{N}$ gibt es ein $n \\ge N$ mit $\\mathrm{d}(a_n, A) < \\varepsilon$<br>(d.h. in jedem $\\varepsilon$-Ball um $A$ liegen unendlich viele Folgenglieder).",
    meta: "Skript: Proposition 5.42, S. 243-244",
    explanation: "<b>Grenzwert vs. Häufungspunkt:</b><br>&bull; <i>Grenzwert:</i> <b>fast alle</b> Glieder in jedem $\\varepsilon$-Ball.<br>&bull; <i>Häufungspunkt:</i> <b>unendlich viele</b> Glieder in jedem $\\varepsilon$-Ball (&bdquo;immer wieder Besuch&ldquo;).<br><br><b>Beweis (b) $\\Rightarrow$ (a):</b> Rekursiv wählt man $n_1 < n_2 < \\dots$ mit $\\mathrm{d}(a_{n_k}, A) < \\tfrac1k$. Das Skript merkt an, dass hier eine (schwache) Form des <b>Auswahlaxioms</b> eingeht &ndash; vermeidbar, indem man stets das minimale $n_{k+1}$ wählt.",
    example: "$a_n = (-1)^n$ hat genau die Häufungspunkte $1$ und $-1$. Konvergente Folgen haben genau einen Häufungspunkt: ihren Grenzwert.",
    counterexample: "<b>1.</b> Ein einziger Häufungspunkt garantiert keine Konvergenz: $(0, 1, 0, 2, 0, 3, \\dots)$ hat nur den Häufungspunkt $0$, divergiert aber (unbeschränkt).<br><b>2.</b> Verwechsle Häufungspunkte einer <i>Folge</i> nicht mit Häufungspunkten einer <i>Menge</i> (Def. 2.73): Die konstante Folge $(5, 5, 5, \\dots)$ hat den Folgen-Häufungspunkt $5$, aber ihre Wertemenge $\\{5\\}$ hat keinen Mengen-Häufungspunkt &ndash; dafür bräuchte es andere Punkte beliebig nahe."
  },
  {
    id: "k5_prop_5_44",
    title: "Proposition 5.44: Konvergenz in Cᵈ und Rᵈ",
    category: "5.3 Folgen und Konvergenz",
    type: "satz",
    front: "Was besagt <b>Proposition 5.44</b> über Konvergenz bezüglich $\\|\\cdot\\|_\\infty$, $\\|\\cdot\\|_1$, $\\|\\cdot\\|_2$ und komponentenweise Konvergenz in $\\mathbb{C}^d$?",
    back: "Für eine Folge $(v_n)_n$ in $\\mathbb{C}^d$ und $v \\in \\mathbb{C}^d$ sind äquivalent:<br><br>(i) $(v_n)_n \\to v$ bezüglich $\\|\\cdot\\|_\\infty$<br>(ii) $(v_n)_n \\to v$ bezüglich $\\|\\cdot\\|_1$<br>(iii) $(v_n)_n \\to v$ bezüglich $\\|\\cdot\\|_2$<br>(iv) Für alle $j = 1,\\dots,d$ konvergiert $(\\pi_j(v_n))_n$ gegen $\\pi_j(v)$ (<b>komponentenweise Konvergenz</b>).<br><br>Dasselbe gilt für Folgen in $\\mathbb{R}^d$.<br><br><b>Beweisbasis</b> sind die Normvergleiche (5.2), (5.3):<br>$$\\|w\\|_\\infty \\le \\|w\\|_1 \\le d\\,\\|w\\|_\\infty, \\qquad \\|w\\|_\\infty \\le \\|w\\|_2 \\le \\sqrt{d}\\,\\|w\\|_\\infty$$",
    meta: "Skript: Proposition 5.44, S. 244-245",
    explanation: "In endlich-dimensionalen Räumen hängt der Konvergenzbegriff <i>nicht</i> von der Wahl dieser Normen ab (später sogar: von gar keiner Norm) &ndash; deshalb spricht man einfach von &bdquo;Konvergenz in $\\mathbb{C}^d$&ldquo;. Konvergenz in $d$ Dimensionen = $d$ separate Konvergenzen in $\\mathbb{C}$.<br><br>Die Ungleichungen sind leicht einzusehen: Das Maximum der Beträge ist höchstens die Summe, und die Summe höchstens $d$-mal das Maximum.",
    example: "In $\\mathbb{R}^2$: $v_n = \\left(\\tfrac1n,\\ 2 + \\tfrac{1}{n^2}\\right)^t \\to (0, 2)^t$, da beide Komponenten konvergieren. <b>Korollar 5.45:</b> Eine komplexe Folge konvergiert genau dann, wenn Real- und Imaginärteil konvergieren (identifiziere $\\mathbb{C} \\cong \\mathbb{R}^2$).",
    counterexample: "<b>1.</b> Auf <i>allgemeinen</i> Mengen ist die Metrik-Unabhängigkeit falsch: Auf $[0,1]^2$ gibt es Folgen, die bezüglich der Manhattanmetrik konvergieren, bezüglich der SNCF-Metrik aber nicht (Übung 5.43) &ndash; z.B. Punkte, die sich dem Ziel von einer anderen Ursprungsgeraden her nähern.<br><b>2.</b> In <i>unendlich-dimensionalen</i> Räumen scheitert die Äquivalenz ebenfalls: In $C([a,b])$ definieren $\\|\\cdot\\|_\\infty$ und $\\|\\cdot\\|_1$ verschiedene Konvergenzbegriffe (Übung 5.47)."
  },
  {
    id: "k5_kor_5_45",
    title: "Korollar 5.45 & Übung 5.46: Reduktion auf Real- und Imaginärteil",
    category: "5.3 Folgen und Konvergenz",
    type: "satz",
    front: "Was besagt <b>Korollar 5.45 (Reduktion)</b> für komplexe Folgen, und was gilt für die Beträge $(|a_n|)_n$ (Übung 5.46)?",
    back: "<b>Korollar 5.45:</b> Eine komplexwertige Folge $(a_n)_n$ ist genau dann konvergent (mit Grenzwert $a \\in \\mathbb{C}$), wenn die beiden reellwertigen Folgen $(\\operatorname{Re}(a_n))_n$ und $(\\operatorname{Im}(a_n))_n$ konvergieren (mit Grenzwerten $\\operatorname{Re}(a)$ bzw. $\\operatorname{Im}(a)$).<br><br><b>Beweis:</b> Identifiziere $\\mathbb{C}$ mit $\\mathbb{R}^2$ via $\\phi: x \\mapsto (\\operatorname{Re}(x), \\operatorname{Im}(x))^t$; dann ist $|x - y| = \\|\\phi(x) - \\phi(y)\\|_2$, und die Aussage folgt aus Proposition 5.44 (iv). $\\square$<br><br><b>Übung 5.46:</b> Konvergiert $(a_n)_n$ in $\\mathbb{C}$ gegen $a$, so konvergiert $(|a_n|)_n$ gegen $|a|$.",
    meta: "Skript: Korollar 5.45 & Übung 5.46, S. 245-246",
    explanation: "Komplexe Konvergenz ist also nichts Neues: zwei reelle Konvergenzen gleichzeitig. Für die Betragsaussage sorgt die umgekehrte Dreiecksungleichung: $||a_n| - |a|| \\le |a_n - a|$ &ndash; der Betrag ist 1-Lipschitz und damit &bdquo;konvergenzerhaltend&ldquo;.",
    example: "$a_n = \\tfrac1n + i\\left(2 - \\tfrac1{n^2}\\right)$: $\\operatorname{Re}(a_n) \\to 0$, $\\operatorname{Im}(a_n) \\to 2$, also $a_n \\to 2i$ und $|a_n| \\to |2i| = 2$.",
    counterexample: "<b>1.</b> Die Umkehrung von Übung 5.46 ist falsch: $(|a_n|)_n$ kann konvergieren, ohne dass $(a_n)_n$ konvergiert &ndash; $a_n = (-1)^n$ liefert $|a_n| = 1 \\to 1$, aber $(a_n)_n$ divergiert.<br><b>2.</b> Nur ein konvergenter Teil genügt nicht: $a_n = (-1)^n + \\tfrac{i}{n}$ hat konvergenten Imaginärteil, divergenten Realteil &ndash; die Folge divergiert; es braucht wirklich <i>beide</i> Komponenten."
  },
  {
    id: "k5_uebung_5_47",
    title: "Übung 5.47: Gleichmässige Konvergenz vs. Konvergenz im Mittel",
    category: "5.3 Folgen und Konvergenz",
    type: "beispiel",
    front: "Vergleiche auf $V = C([a,b])$ die Konvergenz bezüglich $\\|\\cdot\\|_\\infty$ und bezüglich $\\|\\cdot\\|_1$ (Übung 5.47). Welche Implikation gilt, welche nicht?",
    back: "(i) <b>$\\|\\cdot\\|_\\infty$-Konvergenz $\\Rightarrow$ $\\|\\cdot\\|_1$-Konvergenz:</b> Aus $f_n \\to f$ bezüglich $\\|\\cdot\\|_\\infty$ folgt $f_n \\to f$ bezüglich $\\|\\cdot\\|_1$, denn<br>$$\\|f_n - f\\|_1 = \\int_a^b |f_n - f|\\,\\mathrm{d}x \\le (b-a)\\,\\|f_n - f\\|_\\infty.$$<br>(ii) <b>Die Umkehrung ist falsch:</b> Es gibt Folgen $(f_n)_n$ in $V$ mit $\\|f_n\\|_1 \\to 0$, aber $\\|f_n\\|_\\infty = 1$ für alle $n$.<br><br><b>Sprechweise:</b> $\\|\\cdot\\|_\\infty$-Konvergenz heisst <b>gleichmässige Konvergenz</b>, $\\|\\cdot\\|_1$-Konvergenz heisst <b>Konvergenz im Mittel</b> &ndash; zwei echt verschiedene Begriffe.",
    meta: "Skript: Übung 5.47, S. 246",
    explanation: "<b>Warum (ii) geht:</b> Baue immer schmalere &bdquo;Zacken&ldquo;: $f_n$ sei ein Dreieck der Höhe $1$ über einem Intervall der Breite $\\tfrac2n$ (sonst $0$). Dann ist $\\|f_n\\|_\\infty = 1$ konstant, aber die Fläche $\\|f_n\\|_1 = \\tfrac1n \\to 0$. Der maximale Ausschlag bleibt, die Fläche verschwindet. Das zeigt den fundamentalen Unterschied endlich- vs. unendlich-dimensional: In $\\mathbb{C}^d$ wäre so etwas unmöglich (Prop. 5.44).",
    example: "Positive Richtung konkret: $f_n(x) = \\tfrac1n \\sin(nx)$ auf $[0, 2\\pi]$ konvergiert gleichmässig gegen $0$ ($\\|f_n\\|_\\infty = \\tfrac1n$), also auch im Mittel.",
    counterexample: "<b>1.</b> Die Zacken-Folge: $\\|f_n\\|_1 = \\tfrac1n \\to 0$, aber $\\|f_n\\|_\\infty = 1$ &ndash; Konvergenz im Mittel ohne gleichmässige Konvergenz.<br><b>2.</b> Erst recht gilt punktweise $\\not\\Rightarrow$ gleichmässig: $f_n$ wie oben mit wandernder Zacke konvergiert für jedes feste $x$ gegen $0$, aber nicht gleichmässig &ndash; ein Vorgeschmack auf die Konvergenzbegriffe für Funktionenfolgen im weiteren Verlauf der Vorlesung."
  },

  // ========================================================================
  // 5.4 STETIGKEIT
  // ========================================================================
  {
    id: "k5_def_5_48",
    title: "Definition 5.48: ε-δ-Stetigkeit und Folgenstetigkeit",
    category: "5.4 Stetigkeit",
    type: "definition",
    front: "Definiere <b>$\\varepsilon$-$\\delta$-Stetigkeit</b> und <b>Folgenstetigkeit</b> einer Funktion $f: X \\to Y$ zwischen metrischen Räumen bei einem Punkt $x_0 \\in X$.",
    back: "Seien $(X, \\mathrm{d}_X)$, $(Y, \\mathrm{d}_Y)$ metrische Räume und $f: X \\to Y$.<br><br>&bull; $f$ ist <b>bei $x_0 \\in X$ $\\varepsilon$-$\\delta$-stetig</b>, falls für alle $\\varepsilon > 0$ ein $\\delta > 0$ existiert, so dass für alle $x \\in B_\\delta(x_0)$ auch $f(x) \\in B_\\varepsilon(f(x_0))$ gilt.<br><br>&bull; $f$ ist <b>bei $x_0$ folgenstetig</b>, falls für jede konvergente Folge $(x_n)_n$ in $X$ mit $\\lim_{n\\to\\infty} x_n = x_0$ die Bildfolge $(f(x_n))_n$ konvergiert mit $\\lim_{n\\to\\infty} f(x_n) = f(x_0)$.",
    meta: "Skript: Definition 5.48, S. 247",
    explanation: "<b>Kernaussage der Folgenstetigkeit:</b> Grenzwert und Funktion dürfen vertauscht werden: $\\lim f(x_n) = f(\\lim x_n)$. Die $\\varepsilon$-$\\delta$-Version verallgemeinert Definition 3.45 wortwörtlich von $\\mathbb{R}$ auf metrische Räume &ndash; Beträge werden zu Metriken, Intervalle zu Bällen.<br><br><svg width='100%' height='130' viewBox='0 0 320 130' style='max-width:100%; height:auto; background:#f8fafc; border-radius:8px;'><line x1='30' y1='100' x2='130' y2='100' stroke='#94a3b8' stroke-width='1.5'/><circle cx='80' cy='100' r='3' fill='#1f407a'/><line x1='50' y1='100' x2='110' y2='100' stroke='#10b981' stroke-width='4'/><text x='80' y='118' text-anchor='middle' font-size='10' font-weight='bold' fill='#1f407a'>x&#8320; (&#177;&#948;)</text><path d='M130,70 Q165,40 195,60' stroke='#94a3b8' stroke-width='1.5' fill='none'/><line x1='230' y1='100' x2='230' y2='20' stroke='#94a3b8' stroke-width='1.5'/><circle cx='230' cy='60' r='3' fill='#1f407a'/><line x1='230' y1='40' x2='230' y2='80' stroke='#ef4444' stroke-width='4'/><text x='268' y='64' text-anchor='middle' font-size='10' font-weight='bold' fill='#ef4444'>f(x&#8320;) (&#177;&#949;)</text></svg>",
    example: "Die Distanzfunktion $x \\mapsto \\mathrm{d}(x, y_0)$ zu einem festen Punkt $y_0$ ist in jedem $x_0$ stetig: Zu $\\varepsilon > 0$ wähle $\\delta = \\varepsilon$, dann folgt die Behauptung aus der umgekehrten Dreiecksungleichung (Übung 5.14).",
    counterexample: "<b>1.</b> $\\operatorname{sgn}: \\mathbb{R} \\to \\mathbb{R}$ ist bei $x_0 = 0$ nicht folgenstetig: $x_n = \\tfrac1n \\to 0$, aber $\\operatorname{sgn}(x_n) = 1 \\not\\to \\operatorname{sgn}(0) = 0$.<br><b>2.</b> Jede Funktion <i>aus</i> einem diskreten metrischen Raum ist stetig (wähle $\\delta = \\tfrac12$, dann ist $B_\\delta(x_0) = \\{x_0\\}$) &ndash; Stetigkeit hängt also wesentlich von den Metriken auf $X$ <i>und</i> $Y$ ab, nicht nur von der Abbildungsvorschrift."
  },
  {
    id: "k5_lemma_5_49",
    title: "Lemma 5.49: Äquivalenz der Stetigkeitsbegriffe",
    category: "5.4 Stetigkeit",
    type: "lemma",
    front: "Zeige, dass $\\varepsilon$-$\\delta$-Stetigkeit und Folgenstetigkeit bei einem Punkt $x_0$ <b>äquivalent</b> sind (Lemma 5.49).",
    back: "<b>($\\Rightarrow$):</b> Sei $f$ bei $x_0$ $\\varepsilon$-$\\delta$-stetig und $x_n \\to x_0$. Zu $\\varepsilon > 0$ wähle $\\delta > 0$ mit $f(B_\\delta(x_0)) \\subseteq B_\\varepsilon(f(x_0))$, und dazu $N$ mit $x_n \\in B_\\delta(x_0)$ für $n \\ge N$. Dann ist $f(x_n) \\in B_\\varepsilon(f(x_0))$ für $n \\ge N$, also $f(x_n) \\to f(x_0)$.<br><br><b>($\\Leftarrow$, Kontraposition):</b> Ist $f$ bei $x_0$ <i>nicht</i> $\\varepsilon$-$\\delta$-stetig, so existiert ein $\\varepsilon > 0$, zu dem <i>jedes</i> $\\delta$ versagt. Wähle für $\\delta = \\tfrac1n$ jeweils ein $x_n \\in B_{1/n}(x_0)$ mit $f(x_n) \\notin B_\\varepsilon(f(x_0))$. Dann gilt $x_n \\to x_0$, aber $(f(x_n))_n \\not\\to f(x_0)$ &ndash; $f$ ist nicht folgenstetig. $\\square$<br><br>Man sagt kurz: $f$ ist <b>bei $x_0$ stetig</b>; $f$ heisst <b>stetig</b>, wenn es bei jedem Punkt von $X$ stetig ist.",
    meta: "Skript: Lemma 5.49, S. 247",
    explanation: "<b>Nutzen:</b> Zwei Werkzeuge für denselben Begriff. Das $\\varepsilon$-$\\delta$-Spiel eignet sich für <i>positive</i> Stetigkeitsbeweise; die Folgencharakterisierung glänzt beim <i>Widerlegen</i>: Eine einzige Folge $x_n \\to x_0$ mit $f(x_n) \\not\\to f(x_0)$ genügt. Die &bdquo;Fallen-Folge&ldquo; mit $\\delta_n = \\tfrac1n$ ist das Standardrezept dafür.",
    example: "Nicht-Stetigkeit der Dirichlet-Funktion bei jedem $x_0$: Wähle rationale $x_n \\to x_0$ und irrationale $y_n \\to x_0$ &ndash; die Bildfolgen konvergieren gegen $1$ bzw. $0$, also kann $f$ bei $x_0$ nicht stetig sein.",
    counterexample: "<b>1.</b> Es genügt nicht, nur <i>spezielle</i> Folgen zu testen: Für $f(x,y) = \\frac{xy}{x^2+y^2}$ (mit $f(0,0) = 0$) konvergiert $f$ entlang beider Achsen gegen $0$, aber entlang der Diagonale $x_n = y_n = \\tfrac1n$ gegen $\\tfrac12$ &ndash; <i>jede</i> Folge zählt.<br><b>2.</b> In der Kontraposition muss das $\\varepsilon$ fest bleiben, während $\\delta = \\tfrac1n$ schrumpft &ndash; wer beide gleichzeitig schrumpfen lässt, beweist nichts."
  },
  {
    id: "k5_prop_5_50",
    title: "Proposition 5.50: Charakterisierungen der Stetigkeit",
    category: "5.4 Stetigkeit",
    type: "proposition",
    front: "Welche vier äquivalenten Charakterisierungen der (globalen) <b>Stetigkeit</b> einer Funktion $f: X \\to Y$ gibt Proposition 5.50?",
    back: "Für metrische Räume $X, Y$ und $f: X \\to Y$ sind äquivalent:<br><br>(i) $f$ ist stetig.<br>(ii) Für jedes $x \\in X$ ist $f$ bei $x$ $\\varepsilon$-$\\delta$-stetig.<br>(iii) Für jedes $x \\in X$ ist $f$ bei $x$ folgenstetig.<br>(iv) <b>Umgebungs-Charakterisierung:</b> Für jedes $x \\in X$ und jede Umgebung $U \\subseteq Y$ von $f(x)$ ist das Urbild $f^{-1}(U)$ eine Umgebung von $x$.",
    meta: "Skript: Proposition 5.50 & Übung 5.51, S. 247-248",
    explanation: "<b>Beweisskizze (i) $\\Leftrightarrow$ (iv):</b> Ist $U$ Umgebung von $f(x)$, so enthält sie ein $B_\\varepsilon(f(x))$; Stetigkeit liefert $\\delta$ mit $f(B_\\delta(x)) \\subseteq B_\\varepsilon(f(x)) \\subseteq U$, also $B_\\delta(x) \\subseteq f^{-1}(U)$. Umgekehrt wende (iv) auf $U = B_\\varepsilon(f(x_0))$ an.<br><br>(iv) ist die &bdquo;topologische&ldquo; Formulierung: Sie kommt ganz ohne Metrik-Werte aus und wird im 2. Semester zu &bdquo;Urbilder offener Mengen sind offen&ldquo; verallgemeinert.",
    example: "Mit (iii) folgt blitzschnell: Komposition stetiger Funktionen ist stetig &ndash; $\\lim g(f(x_n)) = g(f(\\lim x_n))$ durch zweifaches Anwenden (Beweis von Prop. 5.53 (i)).",
    counterexample: "<b>1.</b> Die <i>Bild</i>-Richtung wäre falsch: Stetige Funktionen müssen offene Mengen nicht auf Umgebungen abbilden &ndash; die konstante Funktion $f(x) = 0$ bildet jede Umgebung auf $\\{0\\}$ ab, das keine Umgebung in $\\mathbb{R}$ ist. Entscheidend ist das <i>Urbild</i>.<br><b>2.</b> Übung 5.51: Aus &bdquo;$(f(a_n))_n$ konvergiert&ldquo; folgt <i>nicht</i>, dass $(a_n)_n$ konvergiert: $f(x) = x^2$ und $a_n = (-1)^n$ geben $f(a_n) = 1 \\to 1$, aber $(a_n)_n$ divergiert &ndash; Stetigkeit transportiert Konvergenz nur <i>vorwärts</i>."
  },
  {
    id: "k5_def_5_52",
    title: "Definition 5.52: Gleichmässige und Lipschitz-Stetigkeit",
    category: "5.4 Stetigkeit",
    type: "definition",
    front: "Definiere <b>gleichmässige Stetigkeit</b> und <b>Lipschitz-Stetigkeit</b> für $f: X \\to Y$ zwischen metrischen Räumen. Wie hängen die Begriffe zusammen?",
    back: "&bull; $f$ heisst <b>gleichmässig stetig</b>, falls es zu jedem $\\varepsilon > 0$ ein $\\delta > 0$ gibt, so dass für <i>alle</i> $x_1, x_2 \\in X$ gilt:<br>$$\\mathrm{d}_X(x_1, x_2) < \\delta \\implies \\mathrm{d}_Y(f(x_1), f(x_2)) < \\varepsilon$$<br>&bull; $f$ heisst <b>Lipschitz-stetig</b>, falls es eine <b>Lipschitz-Konstante</b> $L \\ge 0$ gibt mit<br>$$\\mathrm{d}_Y(f(x_1), f(x_2)) \\le L \\cdot \\mathrm{d}_X(x_1, x_2) \\quad \\forall x_1, x_2 \\in X$$<br><br><b>Hierarchie:</b> Lipschitz-stetig $\\implies$ gleichmässig stetig $\\implies$ stetig (beide Umkehrungen sind falsch).",
    meta: "Skript: Definition 5.52, S. 248",
    explanation: "<b>Der entscheidende Quantorentausch:</b> Bei gewöhnlicher Stetigkeit darf $\\delta = \\delta(\\varepsilon, x_0)$ vom Punkt abhängen; bei gleichmässiger Stetigkeit muss <i>ein</i> $\\delta(\\varepsilon)$ überall funktionieren. Lipschitz ist noch stärker: $\\delta = \\tfrac{\\varepsilon}{L}$ leistet das explizit (für $L > 0$). Auf kompakten Intervallen ist jede stetige Funktion automatisch gleichmässig stetig (Satz 3.75, verallgemeinert im 2. Semester).",
    example: "$f(x) = 3x$ ist Lipschitz-stetig mit $L = 3$. Die Distanzfunktion $x \\mapsto \\mathrm{d}(x, A)$ ist 1-Lipschitz (Übung 5.54). $\\sqrt{x}$ auf $[0,1]$ ist gleichmässig stetig (kompaktes Intervall!), aber <i>nicht</i> Lipschitz (unendliche Steigung bei $0$).",
    counterexample: "<b>1.</b> $f(x) = x^2$ auf ganz $\\mathbb{R}$ ist stetig, aber <i>nicht</i> gleichmässig stetig: $|f(x + \\tfrac1x) - f(x)| = 2 + \\tfrac{1}{x^2} > 2$, obwohl der Eingabeabstand $\\tfrac1x \\to 0$ &ndash; für $\\varepsilon = 2$ überlebt kein festes $\\delta$.<br><b>2.</b> $\\sqrt{x}$ auf $[0,1]$: gleichmässig stetig, aber nicht Lipschitz &ndash; $\\frac{\\sqrt{x} - 0}{x - 0} = \\tfrac{1}{\\sqrt{x}} \\to \\infty$ sprengt jede Konstante $L$. Beide Inklusionen der Hierarchie sind also echt."
  },
  {
    id: "k5_prop_5_53",
    title: "Proposition 5.53: Konstruktion stetiger Funktionen",
    category: "5.4 Stetigkeit",
    type: "proposition",
    front: "Welche fünf Aussagen über die <b>Konstruktion stetiger Funktionen</b> macht Proposition 5.53?",
    back: "Seien $X, Y, Z$ metrische Räume.<br><br>(i) <b>Komposition:</b> Sind $f: X \\to Y$ und $g: Y \\to Z$ stetig, so ist $g \\circ f: X \\to Z$ stetig.<br>(ii) <b>Komponenten:</b> $f: X \\to \\mathbb{C}^d$ ist genau dann stetig, wenn alle Komponenten $f_j = \\pi_j \\circ f : X \\to \\mathbb{C}$ stetig sind.<br>(iii) Die <b>Addition</b> $+: \\mathbb{C}^2 \\to \\mathbb{C}$ ist stetig.<br>(iv) Die <b>Multiplikation</b> $\\cdot: \\mathbb{C}^2 \\to \\mathbb{C}$ ist stetig.<br>(v) Die <b>Kehrwertfunktion</b> $(\\cdot)^{-1}: z \\in \\mathbb{C}^\\times \\mapsto z^{-1} \\in \\mathbb{C}$ ist stetig.",
    meta: "Skript: Proposition 5.53, S. 249-250",
    explanation: "<b>Beweis-Highlights:</b> (i) via Folgenstetigkeit: $g(f(x_n)) \\to g(f(x_0))$ durch zweifaches Anwenden. (ii): Die Projektionen $\\pi_j$ sind 1-Lipschitz ($|\\pi_j(v - w)| \\le \\|v - w\\|_\\infty$); umgekehrt kombiniert man komponentenweise Konvergenz mit Prop. 5.44. (iii): Addition ist Lipschitz mit Konstante 2. (iv)/(v): $\\varepsilon$-$\\delta$ mit den Tricks aus Prop. 5.30 (Mischterm, &bdquo;$|z| \\ge |z_0| - |z - z_0| > \\tfrac{|z_0|}{2}$&ldquo;).<br><br><b>Konsequenz:</b> Zusammen mit (i), (ii) folgt: Summen, Produkte und Quotienten (bei nichtverschwindendem Nenner) stetiger $\\mathbb{C}$-wertiger Funktionen sind stetig.",
    example: "Polynome $p: \\mathbb{C} \\to \\mathbb{C}$ sind stetig (aufgebaut aus Addition, Multiplikation, Konstanten, Identität). Rationale Funktionen sind stetig auf $\\{z \\mid q(z) \\neq 0\\}$ &ndash; via (v) und (i).",
    counterexample: "<b>1.</b> In (v) ist die Einschränkung auf $\\mathbb{C}^\\times = \\mathbb{C}\\setminus\\{0\\}$ wesentlich: Bei $0$ ist der Kehrwert weder definiert noch stetig fortsetzbar ($\\tfrac{1}{1/n} = n$ explodiert).<br><b>2.</b> Die Umkehrung von (i) ist falsch: Aus der Stetigkeit von $g \\circ f$ folgt nichts über $f$ oder $g$ einzeln &ndash; z.B. ist $g \\circ f$ konstant (also stetig), wenn $g$ konstant ist, egal wie unstetig $f$ ist."
  },
  {
    id: "k5_uebung_5_54",
    title: "Wichtige Übung 5.54: Distanzfunktionen",
    category: "5.4 Stetigkeit",
    type: "lemma",
    front: "Sei $(X,\\mathrm{d})$ ein metrischer Raum und $A \\subseteq X$ nicht-leer. Zeige, dass $x \\mapsto \\mathrm{d}(x, A) = \\inf_{a \\in A} \\mathrm{d}(x, a)$ <b>Lipschitz-stetig mit Konstante 1</b> ist.",
    back: "<b>Beweis:</b><br>1. Für beliebige $x_1, x_2 \\in X$ und jedes $a \\in A$ gilt per Dreiecksungleichung:<br>$$\\mathrm{d}(x_1, a) \\le \\mathrm{d}(x_1, x_2) + \\mathrm{d}(x_2, a)$$<br>2. Links zum Infimum über $a$ übergehen (die rechte Seite ist je eine obere Schranke der Infima):<br>$$\\mathrm{d}(x_1, A) \\le \\mathrm{d}(x_1, x_2) + \\mathrm{d}(x_2, a) \\quad \\forall a \\implies \\mathrm{d}(x_1, A) \\le \\mathrm{d}(x_1, x_2) + \\mathrm{d}(x_2, A)$$<br>3. Also $\\mathrm{d}(x_1, A) - \\mathrm{d}(x_2, A) \\le \\mathrm{d}(x_1, x_2)$; Rollentausch liefert die Gegenrichtung und somit<br>$$|\\mathrm{d}(x_1, A) - \\mathrm{d}(x_2, A)| \\le \\mathrm{d}(x_1, x_2). \\quad \\square$$",
    meta: "Skript: Wichtige Übung 5.54, S. 250",
    explanation: "Der Abstand zu einer festen Menge kann sich höchstens so schnell ändern, wie man sich selbst bewegt &ndash; die direkte Verallgemeinerung der umgekehrten Dreiecksungleichung ($A = \\{y\\}$, Übung 5.14). Distanzfunktionen sind eine wichtige Quelle stetiger Funktionen auf beliebigen metrischen Räumen (z.B. für Trennungsargumente).",
    example: "$X = \\mathbb{R}$, $A = [0,1]$: $\\mathrm{d}(x, A) = 0$ für $x \\in [0,1]$, sonst $= |x|$ bzw. $|x - 1|$ &ndash; die &bdquo;Abstandsrampe&ldquo;, offensichtlich 1-Lipschitz (Steigung $\\pm 1$).",
    counterexample: "<b>1.</b> $\\mathrm{d}(x, A) = 0$ impliziert <i>nicht</i> $x \\in A$: Für $A = (0,1)$ und $x = 0$ ist $\\inf_{a \\in A} |x - a| = 0$, aber $0 \\notin A$ &ndash; das Infimum muss nicht angenommen werden.<br><b>2.</b> Die Konstante 1 ist optimal, besser geht es nicht: Für $A = \\{0\\}$ in $\\mathbb{R}$ ist $|\\mathrm{d}(x_1, A) - \\mathrm{d}(x_2, A)| = ||x_1| - |x_2||$, was für $x_1, x_2 > 0$ exakt $= |x_1 - x_2|$ ist &ndash; keine Konstante $L < 1$ funktioniert."
  },

  // ========================================================================
  // 5.5 WEITERE LERNMATERIALIEN
  // ========================================================================
  {
    id: "k5_uebung_ultrametrik",
    title: "Übung (5.5.2): Ultrametriken und p-adische Metrik",
    category: "5.5 Weitere Übungen",
    type: "lemma",
    front: "Was ist eine <b>Ultrametrik</b>, was ist die <b>$p$-adische Metrik</b> auf $\\mathbb{Z}$, und was ist das verblüffende Prinzip für Bälle in Ultrametriken?",
    back: "&bull; <b>Ultrametrik:</b> wie eine Metrik, aber mit der schärferen Ungleichung<br>$$\\mathrm{d}(x_1, x_3) \\le \\max\\{\\mathrm{d}(x_1, x_2),\\ \\mathrm{d}(x_2, x_3)\\}$$<br>Jede Ultrametrik ist insbesondere eine Metrik ($\\max \\le$ Summe).<br><br>&bull; <b>$p$-adische Metrik:</b> Für eine Primzahl $p$ und $\\nu_p(x) = \\max\\{k \\mid p^k \\text{ teilt } x\\}$:<br>$$\\mathrm{d}_p(x,y) = \\begin{cases} p^{-\\nu_p(x-y)} & x \\neq y \\\\ 0 & x = y \\end{cases}$$<br>Zwei Zahlen sind sich &bdquo;nahe&ldquo;, wenn ihre Differenz durch eine hohe $p$-Potenz teilbar ist.<br><br>&bull; <b>Ball-Prinzip:</b> In einer Ultrametrik ist <i>jeder Punkt eines Balls dessen Zentrum</i>: $x \\in B_r(x_0) \\implies B_r(x) = B_r(x_0)$.",
    meta: "Skript: Übung (Ultrametriken), Abschnitt 5.5.2, S. 252",
    explanation: "<b>Folgen des Prinzips:</b> Alle &bdquo;Dreiecke&ldquo; sind gleichschenklig (die zwei längsten Seiten gleich lang), und zwei Bälle sind entweder disjunkt oder ineinander enthalten &ndash; eine völlig andere Geometrie als in $\\mathbb{R}^d$. Die $p$-adische Welt ist die Grundlage grosser Teile der modernen Zahlentheorie.",
    example: "$p = 2$: $\\mathrm{d}_2(0, 8) = 2^{-3} = \\tfrac18$ (denn $8 = 2^3$), aber $\\mathrm{d}_2(0, 3) = 2^0 = 1$. Die Folge $a_n = 2^n$ konvergiert $2$-adisch gegen $0$!",
    counterexample: "<b>1.</b> Die Standardmetrik auf $\\mathbb{R}$ ist <i>keine</i> Ultrametrik: $\\mathrm{d}(0,2) = 2 > \\max\\{\\mathrm{d}(0,1), \\mathrm{d}(1,2)\\} = 1$.<br><b>2.</b> Intuitionen aus $\\mathbb{R}$ versagen: $2$-adisch ist $2^{10}$ &bdquo;winzig&ldquo; ($\\mathrm{d}_2(0, 2^{10}) = 2^{-10}$), während die nach Absolutbetrag kleine Zahl $1$ den $2$-adischen Abstand $1$ von $0$ hat &ndash; Grösse und $p$-adische Nähe sind völlig entkoppelt."
  },
  {
    id: "k5_uebung_rangmetrik",
    title: "Übung (5.5.2): Rangmetrik auf Matrizen",
    category: "5.5 Weitere Übungen",
    type: "lemma",
    front: "Wie ist die <b>Rangmetrik</b> auf der Menge $X$ der $m \\times n$-Matrizen über einem Körper $\\mathbb{K}$ definiert, und wie beweist man die Dreiecksungleichung?",
    back: "$$\\mathrm{d}(A, B) = \\operatorname{rang}(A - B)$$<br><b>Nachweis der Axiome:</b><br>&bull; <i>Definitheit:</i> $\\operatorname{rang}(A - B) = 0 \\iff A - B = 0 \\iff A = B$.<br>&bull; <i>Symmetrie:</i> $\\operatorname{rang}(B - A) = \\operatorname{rang}(-(A-B)) = \\operatorname{rang}(A - B)$.<br>&bull; <i>Dreiecksungleichung:</i> Mit $A - C = (A - B) + (B - C)$ und der Rang-Subadditivität $\\operatorname{rang}(X + Y) \\le \\operatorname{rang}(X) + \\operatorname{rang}(Y)$ aus der Linearen Algebra:<br>$$\\mathrm{d}(A,C) \\le \\mathrm{d}(A,B) + \\mathrm{d}(B,C). \\quad \\square$$",
    meta: "Skript: Übung (Rangmetrik), Abschnitt 5.5.2, S. 252",
    explanation: "Ein schönes Beispiel dafür, wie Resultate der Linearen Algebra (Subadditivität des Rangs: das Bild von $X + Y$ liegt im Summenraum der Bilder) direkt eine Metrik liefern. Die Rangmetrik nimmt nur die ganzzahligen Werte $0, 1, \\dots, \\min\\{m,n\\}$ an und wird u.a. in der Codierungstheorie verwendet.",
    example: "$A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$, $B = \\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}$: $\\mathrm{d}(A,B) = \\operatorname{rang}\\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix} = 1$.",
    counterexample: "<b>1.</b> $\\mathrm{d}(A,B) = |\\operatorname{rang}(A) - \\operatorname{rang}(B)|$ wäre <i>keine</i> Metrik: Zwei verschiedene Matrizen gleichen Rangs hätten Abstand $0$ (Definitheit verletzt).<br><b>2.</b> Konvergenz in der Rangmetrik ist drastisch: Da alle Abstände ganzzahlig sind, gilt wie bei der diskreten Metrik: Eine Folge konvergiert genau dann, wenn sie schliesslich konstant ist &ndash; &bdquo;immer näher kommen&ldquo; gibt es hier nicht."
  },
  {
    id: "k5_uebung_aequivalente_metriken",
    title: "Übung (5.5.2): Äquivalente Metriken",
    category: "5.5 Weitere Übungen",
    type: "lemma",
    front: "Wann heissen zwei Metriken $\\mathrm{d}_1, \\mathrm{d}_2$ auf $X$ (mit Konstante $C$) <b>äquivalent</b>, und was folgt daraus für die Konvergenz?",
    back: "&bull; <b>Definition (Gl. 5.4):</b> Es gibt eine Konstante $C > 0$ mit<br>$$\\frac{1}{C}\\, \\mathrm{d}_1(x, y) \\le \\mathrm{d}_2(x, y) \\le C\\, \\mathrm{d}_1(x, y) \\qquad \\forall x, y \\in X$$<br>&bull; <b>Konsequenz:</b> Eine Folge konvergiert genau dann bezüglich $\\mathrm{d}_1$, wenn sie bezüglich $\\mathrm{d}_2$ konvergiert &ndash; mit demselben Grenzwert. (Denn $\\mathrm{d}_2(x_n, x_0) \\le C\\,\\mathrm{d}_1(x_n, x_0) \\to 0$ und umgekehrt.)",
    meta: "Skript: Übung (5.4), Abschnitt 5.5.2, S. 252",
    explanation: "$C$-äquivalente Metriken verzerren Abstände nur um einen beschränkten Faktor &ndash; Konvergenz, Stetigkeit und Offenheit bleiben identisch. Prototyp: $\\mathrm{d}_\\infty, \\mathrm{d}_1, \\mathrm{d}_2$ auf $\\mathbb{R}^d$ sind paarweise äquivalent mit $C = d$ bzw. $C = \\sqrt{d}$ (Ungleichungen (5.2)/(5.3)) &ndash; genau das steckt hinter Proposition 5.44.",
    example: "$\\|w\\|_\\infty \\le \\|w\\|_1 \\le d\\,\\|w\\|_\\infty$: Die von $\\|\\cdot\\|_1$ und $\\|\\cdot\\|_\\infty$ induzierten Metriken sind $d$-äquivalent auf $\\mathbb{R}^d$.",
    counterexample: "<b>1.</b> Gleicher Konvergenzbegriff erzwingt <i>keine</i> $C$-Äquivalenz: $\\mathrm{d}_1(x,y) = |x-y|$ und $\\mathrm{d}_2(x,y) = \\frac{|x-y|}{1+|x-y|}$ auf $\\mathbb{R}$ haben dieselben konvergenten Folgen, aber $\\mathrm{d}_2 < 1$ ist beschränkt, $\\mathrm{d}_1$ nicht &ndash; kein $C$ leistet $\\mathrm{d}_1 \\le C\\,\\mathrm{d}_2$.<br><b>2.</b> Nicht-äquivalente Metriken mit verschiedener Konvergenz: Standardmetrik vs. diskrete Metrik auf $\\mathbb{R}$ &ndash; $\\tfrac1n \\to 0$ gilt nur für die erste."
  }
];

/* Script-chapter deck (German only for now): cards by a classmate, following the script's chapters.
   Data above (window.FLASHCARDS_KAPITEL_n) is copied from the flashcards repo (PR from sync/flashcards).
   Adds a deck switch on de/flashcards.html: "Nach Lektion" (StudyHub deck) | "Nach Skript-Kapitel". */
(function () {
  var ctl = document.querySelector('.fc-controls'); if (!ctl) return;
  var CH = [[1, 'Kapitel 1: Einführung'], [2, 'Kapitel 2: Die reellen Zahlen'], [3, 'Kapitel 3: Funktionen und die reellen Zahlen'], [4, 'Kapitel 4: Das Riemann-Integral'], [5, 'Kapitel 5: Metrische Räume, Folgen und Stetigkeit']]
    .filter(function (c) { return window['FLASHCARDS_KAPITEL_' + c[0]]; });
  var TYPE = { definition: 'Definition', satz: 'Satz', proposition: 'Proposition', lemma: 'Lemma', beispiel: 'Beispiel', beweis: 'Beweis' };
  var css = document.createElement('style');
  css.textContent = '.sd-switch{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center;margin:1rem 0}.sd-switch button{font:inherit;padding:.45rem 1rem;border-radius:999px;border:1px solid var(--accent,#5b5bd6);background:none;color:var(--accent,#5b5bd6);cursor:pointer}.sd-switch button[aria-pressed=true]{background:var(--accent,#5b5bd6);color:var(--on,#fff)}' +
    '#sd-panel select{font:inherit;padding:.4rem;border-radius:8px;border:1px solid var(--rule,#ccd);background:var(--surface,#fff);color:inherit;max-width:100%}#sd-panel .row{display:flex;flex-wrap:wrap;gap:.6rem;align-items:flex-end;margin:.6rem 0}#sd-panel label{display:flex;flex-direction:column;gap:.2rem;min-width:0;flex:1 1 14rem;max-width:100%}#sd-panel select{width:100%;box-sizing:border-box}#sd-panel button,#sd-btns button{font:inherit;padding:.45rem 1.1rem;border-radius:999px;border:1px solid var(--accent,#5b5bd6);background:none;color:var(--accent,#5b5bd6);cursor:pointer}#sd-panel button.primary{background:var(--accent,#5b5bd6);color:var(--on,#fff)}' +
    '#sd-stage{border:1px solid var(--rule,#ccd);border-radius:14px;padding:1.1rem;margin:.8rem 0;background:var(--surface);min-height:6rem;overflow-wrap:anywhere}#sd-stage .bd{display:inline-block;font-size:.75rem;padding:.1rem .5rem;border-radius:99px;border:1px solid var(--rule,#ccd);margin:0 .3rem .3rem 0;opacity:.85}' +
    '#sd-stage h3{margin:.3rem 0 .6rem;font-size:1.05rem}#sd-stage .blk{border-left:3px solid var(--accent,#5b5bd6);padding:.4rem .8rem;margin:.6rem 0;background:color-mix(in srgb,var(--accent,#5b5bd6) 6%,transparent);border-radius:0 8px 8px 0}#sd-stage .blk.ex{border-left-color:#2e9d5b}#sd-stage .blk.cex{border-left-color:#c0453a}' +
    '#sd-stage :not(mjx-container)>svg{max-width:100%;height:auto;background:#fff;color:#111;border-radius:6px;padding:4px}#sd-stage .meta{font-size:.85rem;opacity:.75}#sd-btns{display:flex;flex-wrap:wrap;gap:.5rem}';
  document.head.appendChild(css);
  var sw = document.createElement('div'); sw.className = 'sd-switch';
  sw.innerHTML = '<strong>Kartensatz:</strong> <button type="button" data-m="l" aria-pressed="true">Nach Lektion</button><button type="button" data-m="s" aria-pressed="false">Nach Skript-Kapitel (ausführlich)</button>';
  ctl.parentNode.insertBefore(sw, ctl);
  var panel = document.createElement('div'); panel.id = 'sd-panel'; panel.hidden = true;
  panel.innerHTML = '<p>Ausführliche Karten von Rachel, Kapitel für Kapitel wie im Skript (mit den Nummern des Skripts): Definitionen, Sätze, Beweis-Baupläne und Übungen, jeweils mit Erklärung, Beispiel und Gegenbeispiel. Bisher Kapitel 1–5.</p>' +
    '<div class="row"><label>Kapitel <select id="sd-ch">' + CH.map(function (c) { return '<option value="' + c[0] + '">' + c[1] + '</option>'; }).join('') + '</select></label>' +
    '<label>Abschnitt <select id="sd-cat"></select></label> <button type="button" class="primary" id="sd-start">Start</button></div>' +
    '<p class="fc-meta" id="sd-count" aria-live="polite"></p><div id="sd-stage"><p>Wähle ein Kapitel und drück auf Start. „Nochmal“ legt eine Karte ein paar Plätze weiter hinten wieder ein; „Gewusst“ nimmt sie aus dieser Runde heraus.</p></div>' +
    '<div id="sd-btns" hidden><button type="button" class="primary" id="sd-show">Antwort zeigen</button><button type="button" id="sd-again" hidden>Nochmal</button><button type="button" class="primary" id="sd-got" hidden>Gewusst</button></div>';
  ctl.parentNode.insertBefore(panel, ctl);
  var lessonEls = ['.fc-controls', '#fc-count', '#fc-stage', '#fc-btns', '.legend'].map(function (s) { return document.querySelector(s); }).filter(Boolean);
  var btnsL = document.getElementById('fc-btns');
  function mode(m) {
    sw.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.m === m); });
    panel.hidden = m !== 's';
    lessonEls.forEach(function (e) { if (e === btnsL) { if (m === 's') e.hidden = true; } else e.hidden = m === 's'; });
    try { localStorage.setItem('fc-deck', m); } catch (e) {}
  }
  sw.addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) mode(b.dataset.m); });
  var chSel = document.getElementById('sd-ch'), catSel = document.getElementById('sd-cat');
  function cards() { return window['FLASHCARDS_KAPITEL_' + chSel.value] || []; }
  function fillCats() {
    var cs = []; cards().forEach(function (c) { if (c.category && cs.indexOf(c.category) < 0) cs.push(c.category); });
    catSel.innerHTML = '<option value="">Alle Abschnitte</option>' + cs.map(function (c) { return '<option>' + c.replace(/</g, '&lt;') + '</option>'; }).join('');
  }
  chSel.onchange = fillCats; fillCats();
  var stage = document.getElementById('sd-stage'), cnt = document.getElementById('sd-count'), btns = document.getElementById('sd-btns');
  var bS = document.getElementById('sd-show'), bA = document.getElementById('sd-again'), bG = document.getElementById('sd-got');
  var q = [], cur = null, done = 0;
  function tex(el) { if (window.MathJax && MathJax.typesetPromise) { try { MathJax.typesetClear && MathJax.typesetClear([el]); } catch (e) {} MathJax.typesetPromise([el]).then(function () { window.__siteFit && window.__siteFit(el); }).catch(function () {}); } }
  function render(show) {
    if (!cur) { btns.hidden = true; cnt.textContent = ''; stage.innerHTML = done ? '<p><strong>Runde fertig: ' + done + ' Karten.</strong> Drück auf Start für eine neue Runde oder wähl ein anderes Kapitel.</p>' : '<p>Keine Karten für diese Auswahl.</p>'; return; }
    var h = '<div>' + (cur.type && TYPE[cur.type] ? '<span class="bd">' + TYPE[cur.type] + '</span>' : '') + (cur.category ? '<span class="bd">' + cur.category + '</span>' : '') + '</div>' +
      (cur.title ? '<h3>' + cur.title + '</h3>' : '') + '<div>' + (cur.front || '') + '</div>';
    if (show) {
      h += '<hr><div>' + (cur.back || '') + '</div>' +
        (cur.explanation ? '<div class="blk"><strong>Erklärung</strong><br>' + cur.explanation + '</div>' : '') +
        (cur.example ? '<div class="blk ex"><strong>Beispiel</strong><br>' + cur.example + '</div>' : '') +
        (cur.counterexample ? '<div class="blk cex"><strong>Gegenbeispiel</strong><br>' + cur.counterexample + '</div>' : '') +
        (cur.meta ? '<p class="meta">' + cur.meta + '</p>' : '');
    }
    stage.innerHTML = h; tex(stage);
    btns.hidden = false; bS.hidden = !!show; bA.hidden = !show; bG.hidden = !show;
    cnt.textContent = (q.length + 1) + ' Karten übrig in dieser Runde';
  }
  function next() { cur = q.shift() || null; render(false); }
  document.getElementById('sd-start').onclick = function () {
    var c = catSel.value; q = cards().filter(function (x) { return !c || x.category === c; });
    for (var i = q.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = q[i]; q[i] = q[j]; q[j] = t; }
    done = 0; next();
  };
  bS.onclick = function () { render(true); bG.focus({ preventScroll: true }); };
  bA.onclick = function () { q.splice(Math.min(3, q.length), 0, cur); next(); };
  bG.onclick = function () { done++; next(); };
  var m0 = 'l'; try { m0 = localStorage.getItem('fc-deck') || 'l'; } catch (e) {}
  if (/#skript/.test(location.hash)) m0 = 's';
  mode(m0);
})();
