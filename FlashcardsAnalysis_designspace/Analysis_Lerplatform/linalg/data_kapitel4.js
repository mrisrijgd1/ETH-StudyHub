/* ==========================================================================
   LINEARE ALGEBRA I – KAPITEL 4: Basen und Dimension
   (Lineare Hülle, l.u., Basis, Dimension, Sätze 4.0–4.6, Lemma 4.2) + Serie 3
   Lineare Algebra I – Prof. Dr. Lorenz Halbeisen, HS 2026
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_KAPITEL_4 = [
  // ========================================================================
  // 4a LINEARKOMBINATIONEN UND LINEARE UNABHÄNGIGKEIT
  // ========================================================================
  {
    id: "la4_def_huelle",
    title: "Definition: Linearkombination und lineare Hülle ⟨M⟩",
    category: "4a Linearkombinationen und lineare Unabhängigkeit",
    type: "definition",
    front: R`Was ist eine <b>Linearkombination</b> von Vektoren $x_1,\dots,x_n$, und wie ist die <b>lineare Hülle</b> $\langle M\rangle$ einer Menge $M\subseteq V$ definiert? Was ist $\langle\emptyset\rangle$?`,
    back: R`Sei $V$ ein VR über $K$, $x_1,\dots,x_n\in V$ (paarweise verschieden) und $\lambda_1,\dots,\lambda_n\in K$. Dann ist
$$\lambda_1\cdot x_1+\dots+\lambda_n\cdot x_n = \sum_{i=1}^n\lambda_i\cdot x_i\in V$$
eine <b>Linearkombination</b> der Vektoren $x_1,\dots,x_n$; die <b>leere Summe</b> ($n=0$) bezeichnet den Nullvektor $0_V$ [leere Summen sind 0, leere Produkte sind 1].<br><br>
<b>Definition:</b> Für $M\subseteq V$ heisst
$$\langle M\rangle := \Big\{\sum_{i=1}^n\lambda_i\cdot x_i:\;n\in\mathbb{N}\wedge\forall 1\le i\le n\,(\lambda_i\in K\wedge x_i\in M)\Big\}\subseteq V$$
die <b>lineare Hülle</b> von $M$: die Menge aller Vektoren, die sich als (endliche!) Linearkombinationen von Vektoren aus $M$ schreiben lassen. Insbesondere $\langle\emptyset\rangle = \{0_V\}$.`,
    meta: "Skript: Kap. 4, Linearkombination, Definition lineare Hülle, Bem.",
    explanation: R`<b>Geometrisch</b> (Stammbach I.4.1): Die Vielfachen $\lambda x$ eines Vektors $x\neq 0$ bilden eine Gerade durch $0$; die Kombinationen $\lambda x+\mu y$ zweier nicht paralleler Vektoren eine Ebene durch $0$. $\langle M\rangle$ ist allgemein „alles, was man aus $M$ durch Strecken und Addieren bauen kann”.<br><br>
<b>Zentrale Eigenschaften:</b><br>
• $M\subseteq\langle M\rangle$ (nimm $1\cdot x$), und $0_V\in\langle M\rangle$ immer (leere Summe).<br>
• $\langle M\rangle$ ist der <b>kleinste Unterraum</b>, der $M$ enthält; $W$ ist genau dann ein Unterraum, wenn $\langle W\rangle = W$ (Lemma 5.0).<br>
• $\langle\langle M\rangle\rangle = \langle M\rangle$ (Linearkombinationen von Linearkombinationen sind Linearkombinationen).<br><br>
<b>Endlichkeit ist zentral:</b> Auch wenn $M$ unendlich ist, benutzt jede Linearkombination nur <b>endlich viele</b> Vektoren. Das unterscheidet Algebra von Analysis (Reihen).`,
    example: R`<b>1.</b> (Stammbach I.4.5) $M = \{(1,1,0),(1,0,1)\}\subseteq\mathbb{R}^3$: $\langle M\rangle = \{(a+b,a,b): a,b\in\mathbb{R}\} = \{(x,y,z): x-y-z = 0\}$ – eine Ebene durch $0$. Z.B. $2\cdot(1,1,0)-3\cdot(1,0,1) = (-1,2,-3)$, und $-1-2-(-3) = 0$ ✓.<br>
<b>2.</b> $\langle\{X^0,X^2,X^4,\dots\}\rangle\subseteq\mathbb{Q}[X]$ sind genau die geraden Polynome $p(-X) = p(X)$, z.B. $3-X^2+\tfrac12X^4$.`,
    counterexample: R`<b>1. Nur endliche Summen:</b> $(1,1,1,\dots)\notin\langle\{e_i: i\in\mathbb{N}\}\rangle\subseteq S(K)$, obwohl „$\sum_{i=0}^\infty e_i$” formal so aussieht (Kap. 4, Beispiel 3 zur Basis).<br>
<b>2.</b> $(1,0,0)\notin\langle\{(1,1,0),(1,0,1)\}\rangle$, denn $1-0-0 = 1\neq 0$.<br>
<b>3.</b> $\langle\emptyset\rangle\neq\emptyset$: Die lineare Hülle enthält immer $0_V$.`
  },
  {
    id: "la4_def_lu",
    title: "Definition: Linear unabhängig / linear abhängig",
    category: "4a Linearkombinationen und lineare Unabhängigkeit",
    type: "definition",
    front: R`Wie definiert das Skript, dass die Vektoren einer Menge $M\subseteq V$ <b>linear unabhängig</b> (l.u.) sind? Ist $\{0_V\}$ l.u.?`,
    back: R`Ist $V$ ein VR über $K$ und $M\subseteq V$, dann heissen die Vektoren aus $M$ <b>linear unabhängig (l.u.)</b>, wenn gilt:
$$\forall x\in M\;\big(x\notin\langle M\setminus\{x\}\rangle\big).$$
Andernfalls heissen die Vektoren aus $M$ <b>linear abhängig (l.a.)</b>.<br><br>
<b>Bsp.:</b><br>
• $M = \{0\}$: $M\setminus\{0\} = \emptyset$ und $0\in\langle\emptyset\rangle = \{0\}$ – also ist $0$ ein l.a. Vektor.<br>
• $V = K^2$, $M = \{(1,0),(0,1)\}$: $(1,0)\notin\langle\{(0,1)\}\rangle$ und $(0,1)\notin\langle\{(1,0)\}\rangle$ – l.u.`,
    meta: "Skript: Kap. 4, Definition l.u./l.a. mit Bsp.",
    explanation: R`<b>Intuition:</b> Linear unabhängig heisst <b>„keiner ist überflüssig”</b>: Kein Vektor aus $M$ lässt sich aus den anderen bauen. Jeder bringt eine neue Richtung mit. Entfernt man aus einer l.u. Menge einen Vektor, wird die Hülle echt kleiner.<br><br>
<b>Zwei äquivalente Sichtweisen:</b><br>
• <b>Skript-Definition</b> („kein Vektor ist LK der anderen”) – anschaulich.<br>
• <b>Satz 4.0</b> („$0$ lässt sich nur trivial darstellen”) – rechnerisch: man löst ein homogenes Gleichungssystem.<br><br>
<b>Konsequenzen:</b> Jede Menge, die $0_V$ enthält, ist l.a. Jede Teilmenge einer l.u. Menge ist l.u.; jede Obermenge einer l.a. Menge ist l.a. $\emptyset$ ist l.u. (die Bedingung „$\forall x\in\emptyset$” ist leer erfüllt). Ein einzelner Vektor $x\neq 0_V$ ist l.u. (Lemma 3.0 (d)).`,
    example: R`<b>1.</b> $(1,2)$ und $(3,1)$ in $\mathbb{R}^2$ sind l.u.: $(1,2) = \lambda(3,1)$ hiesse $\lambda = \tfrac13$ und $\lambda = 2$ – unmöglich (und symmetrisch).<br>
<b>2.</b> (Stammbach II.1.6) $\beta_1 = (2,-1,1)$, $\beta_2 = (1,0,0)$, $\beta_3 = (0,2,1)$ sind l.u.: Das System $2x_1+x_2 = 0$, $-x_1+2x_3 = 0$, $x_1+x_3 = 0$ hat nur die triviale Lösung.`,
    counterexample: R`<b>1.</b> (Stammbach II.1.6) $\alpha_1 = (1,-1,0)$, $\alpha_2 = (3,2,1)$, $\alpha_3 = (1,4,1)$ sind <b>l.a.</b>: $2\alpha_1-\alpha_2+\alpha_3 = (2-3+1,-2-2+4,0-1+1) = 0$, also $\alpha_3 = \alpha_2-2\alpha_1\in\langle\{\alpha_1,\alpha_2\}\rangle$.<br>
<b>2.</b> Paarweise l.u. reicht nicht: $(1,0),(0,1),(1,1)$ sind paarweise l.u., aber zusammen l.a.: $(1,1) = (1,0)+(0,1)$.<br>
<b>3.</b> Abhängig vom Körper: $1$ und $\sqrt 2$ sind l.u. über $\mathbb{Q}$, aber l.a. über $\mathbb{R}$: $\sqrt 2 = \sqrt 2\cdot 1$.`
  },
  {
    id: "la4_satz_4_0",
    title: "Satz 4.0: l.u. ⟺ der Nullvektor nur trivial darstellbar",
    category: "4a Linearkombinationen und lineare Unabhängigkeit",
    type: "satz",
    front: R`Formuliere <b>Satz 4.0</b>: Wann ist eine Menge $M\subseteq V$ genau dann l.u.? Wie benutzt man das zum Rechnen?`,
    back: R`Sei $V$ ein VR über $K$. Eine Menge $M\subseteq V$ von Vektoren ist <b>genau dann l.u.</b>, wenn gilt:
$$\sum_{i=1}^n\lambda_i\cdot x_i = 0\;\longrightarrow\;\forall 1\le i\le n\,(\lambda_i = 0)\qquad(\ast)$$
wobei $n\in\mathbb{N}^+$ und $\forall 1\le i\le n\,(\lambda_i\in K\wedge x_i\in M)$ (mit paarweise verschiedenen $x_i$).<br><br>
In Worten: Die <b>einzige</b> Linearkombination von Vektoren aus $M$, die den Nullvektor ergibt, ist die <b>triviale</b> (alle Koeffizienten $0$).`,
    meta: "Skript: Kap. 4, Satz 4.0",
    explanation: R`<b>Rechenrezept:</b> Um $x_1,\dots,x_n\in K^m$ auf l.u. zu prüfen, setzt man $\lambda_1x_1+\dots+\lambda_nx_n = 0$ an. Das ist ein <b>homogenes lineares Gleichungssystem</b> in $\lambda_1,\dots,\lambda_n$. Nur triviale Lösung ⟺ l.u.<br><br>
<b>Warum äquivalent zur Definition?</b> Eine nicht-triviale Darstellung $\sum\lambda_ix_i = 0$ mit $\lambda_1\neq 0$ kann man nach $x_1$ auflösen (Division durch $\lambda_1$ – hier braucht man den Körper!): $x_1 = \sum_{i\ge 2}(-\lambda_1^{-1}\lambda_i)x_i\in\langle M\setminus\{x_1\}\rangle$. Umgekehrt liefert $y = \sum\lambda_ix_i$ mit $x_i\neq y$ die nicht-triviale Darstellung $\sum\lambda_ix_i+(-1)\cdot y = 0$.<br><br>
<b>Vorteil von (∗):</b> Alle Vektoren werden gleich behandelt – man muss nicht für jedes $x$ einzeln prüfen, ob es in der Hülle der anderen liegt. (∗) ist die in fast allen Beweisen benutzte Form (Sätze 4.1, 6.2, Lemma 5.6, Serien).`,
    example: R`<b>1.</b> $(1,1,0),(0,1,1),(1,0,1)\in\mathbb{R}^3$: $\lambda_1+\lambda_3 = 0$, $\lambda_1+\lambda_2 = 0$, $\lambda_2+\lambda_3 = 0$ ⇒ $\lambda_3 = -\lambda_1$, $\lambda_2 = -\lambda_1$, $-2\lambda_1 = 0$ ⇒ alle $0$: <b>l.u.</b><br>
<b>2.</b> Serie 3, Aufgabe 19: $q_0+q_1\sqrt 2+q_2\sqrt 3+q_3\sqrt 6 = 0$ mit $q_i\in\mathbb{Q}$ ⇒ alle $q_i = 0$ – also sind $1,\sqrt 2,\sqrt 3,\sqrt 6$ l.u. über $\mathbb{Q}$.`,
    counterexample: R`<b>1.</b> Über $\mathbb{F}_2$: $(\bar 1,\bar 1,\bar 0),(\bar 0,\bar 1,\bar 1),(\bar 1,\bar 0,\bar 1)$ sind <b>l.a.</b>: Ihre Summe ist $(\bar 2,\bar 2,\bar 2) = (\bar 0,\bar 0,\bar 0)$ mit allen $\lambda_i = \bar 1\neq\bar 0$. (Über $\mathbb{R}$ waren dieselben Muster l.u. – der Körper zählt!)<br>
<b>2.</b> $\{(1,2),(3,6)\}$: $3\cdot(1,2)+(-1)\cdot(3,6) = (0,0)$ – nicht-trivial, also l.a.`
  },
  {
    id: "la4_beweis_4_0",
    title: "Beweis von Satz 4.0 (zweimal Kontraposition)",
    category: "4a Linearkombinationen und lineare Unabhängigkeit",
    type: "beweis",
    front: R`Beweise beide Richtungen von <b>Satz 4.0</b> mit Kontraposition.`,
    back: R`<b>(⇒) Kontraposition:</b> Schreibt man (∗) als $A\to B$, so ist $\neg(\ast)\iff A\wedge\neg B$: $\sum_{i=1}^n\lambda_ix_i = 0\wedge\exists i\,(\lambda_i\neq 0)$. O.B.d.A. $\lambda_1\neq 0$ (sonst umnummerieren). Dann
$$0 = (-\lambda_1^{-1})\cdot\sum_{i=1}^n\lambda_ix_i = -x_1+\sum_{i=2}^n(-\lambda_1^{-1}\lambda_i)x_i\;\Rightarrow\;x_1 = \sum_{i=2}^n\underbrace{(-\lambda_1^{-1}\lambda_i)}_{=:\lambda_i'}\cdot x_i$$
mit $x_i\in M\setminus\{x_1\}$. Also $x_1\in\langle M\setminus\{x_1\}\rangle$: $M$ ist nicht l.u.<br>
<b>(⇐) Kontraposition:</b> Sind die Vektoren aus $M$ nicht l.u., so gibt es $y\in M$ mit $y\in\langle M\setminus\{y\}\rangle$, d.h. $y = \sum_{i=1}^n\lambda_ix_i$ mit $x_i\in M\setminus\{y\}$. Dann
$$0 = y-y = \sum_{i=1}^n\lambda_ix_i-y = \sum_{i=1}^{n+1}\lambda_ix_i\quad\text{mit }\lambda_{n+1} := -1,\;x_{n+1} := y.$$
Wegen $\lambda_{n+1}\neq 0$ ist das $\neg(\ast)$.`,
    meta: "Skript: Kap. 4, Beweis von Satz 4.0",
    explanation: R`<b>Schlüsselschritt (⇒):</b> Ein nicht-verschwindender Koeffizient wird durch <b>Multiplikation mit $-\lambda_1^{-1}$</b> auf $-1$ normiert; dann steht $x_1$ „allein” und ist als LK der anderen ausgedrückt. Ohne Körper (ohne $\lambda_1^{-1}$) geht das nicht.<br><br>
<b>Schlüsselschritt (⇐):</b> Eine Darstellung $y = \dots$ wird durch Hinüberbringen von $y$ zu einer Darstellung der Null, in der $y$ den Koeffizienten $-1\neq 0$ hat. Wichtig: $y$ kommt rechts nicht vor (die $x_i$ sind aus $M\setminus\{y\}$), sonst könnte sich $-1$ wegheben.<br><br>
<b>Logik:</b> Die Negation einer Implikation ist $\neg(A\to B)\iff\neg(\neg A\vee B)\iff A\wedge\neg B$ – das ist das Werkzeug aus Kapitel 1. „O.B.d.A.” = ohne Beschränkung der Allgemeinheit.`,
    example: R`$M = \{(1,2),(2,5),(1,1)\}\subseteq\mathbb{Q}^2$: $3\cdot(1,2)-1\cdot(2,5)-1\cdot(1,1) = (0,0)$ mit $\lambda_1 = 3\neq 0$. Mult. mit $-\tfrac13$: $(1,2) = \tfrac13(2,5)+\tfrac13(1,1)$. Probe: $\tfrac13(3,6) = (1,2)$ ✓.`,
    counterexample: R`<b>Fehlerquelle:</b> In der Darstellung $0 = \sum\lambda_ix_i$ kann man nicht nach einem $x_k$ mit $\lambda_k = 0$ auflösen. Bei $0\cdot(1,0)+2\cdot(0,1)-1\cdot(0,2) = 0$ ist zwar $\lambda_1 = 0$, aber $(0,1) = \tfrac12(0,2)$ – man muss den Index mit $\lambda\neq 0$ wählen; $(1,0)$ liegt <i>nicht</i> in $\langle\{(0,1),(0,2)\}\rangle$.`
  },
  {
    id: "la4_lemma_4_2",
    title: "Lemma 4.2: Ein Vektor ist LK der vorhergehenden",
    category: "4a Linearkombinationen und lineare Unabhängigkeit",
    type: "lemma",
    front: R`Formuliere und beweise <b>Lemma 4.2</b> über endliche Sequenzen $x_1,\dots,x_n$ von Vektoren $\neq 0$.`,
    back: R`<b>Lemma 4.2:</b> Eine endliche Sequenz (d.h. Folge) $x_1,\dots,x_n$ von Vektoren ungleich $0$ ist <b>l.a. genau dann</b>, wenn ein Vektor $x_k$ für $2\le k\le n$ eine Linearkombination der <b>vorhergehenden</b> Vektoren ist, d.h. $x_k = \sum_{i=1}^{k-1}\lambda_i\cdot x_i$.<br><br>
<b>Beweis (⇐):</b> klar – ist $x_k$ LK der vorhergehenden, so sind $x_1,\dots,x_n$ nicht l.u.<br>
<b>(⇒):</b> Sind $x_1,\dots,x_n$ l.a., so existiert ein <b>kleinstes</b> $k$ mit $2\le k\le n$, sodass bereits $x_1,\dots,x_k$ l.a. sind. Also gibt es $\lambda_1,\dots,\lambda_k$, nicht alle $0$, mit $\sum_{i=1}^k\lambda_ix_i = 0$. Aus der Definition (Minimalität) von $k$ folgt $\lambda_k\neq 0$ – sonst wären schon $x_1,\dots,x_{k-1}$ l.a. Daraus
$$x_k = \sum_{i=1}^{k-1}(-\lambda_k^{-1}\cdot\lambda_i)\cdot x_i.$$`,
    meta: "Skript: Kap. 4, Lemma 4.2 mit Beweis",
    explanation: R`<b>Idee:</b> Man geht die Liste von vorne durch und fragt bei jedem neuen Vektor: „Bringst du etwas Neues, oder bist du aus deinen Vorgängern baubar?” Ist die Liste l.a., so gibt es einen <b>ersten</b> Vektor, der nichts Neues bringt.<br><br>
<b>Warum $k\ge 2$?</b> $x_1\neq 0$ allein ist l.u. (Lemma 3.0 (d)); die erste Abhängigkeit kann also frühestens beim zweiten Vektor auftreten. Darum die Voraussetzung „Vektoren ungleich $0$”.<br><br>
<b>Bedeutung:</b> Lemma 4.2 ist der Motor der Sätze 4.3, 4.4 und des Austauschsatzes von Steinitz (4.5): Man <b>streicht</b> in einer Erzeugenden-Sequenz immer den ersten überflüssigen Vektor, ohne dass sich die Hülle ändert – das ist „Ausdünnen” zu einer Basis.`,
    example: R`Sequenz $(1,0),(0,1),(2,3)$ in $\mathbb{R}^2$: $(1,0)$ und $(0,1)$ sind l.u.; $(2,3) = 2\cdot(1,0)+3\cdot(0,1)$ – also $k = 3$, $\lambda_1 = 2$, $\lambda_2 = 3$.<br>
Sequenz $(1,1,0),(2,2,0),(0,0,1)$: schon $k=2$: $(2,2,0) = 2\cdot(1,1,0)$.`,
    counterexample: R`<b>1. „Vorhergehend” ist wichtig, aber nicht „jeder”:</b> In $(1,0),(0,1),(1,1)$ ist $(1,0)$ <b>keine</b> LK der vorhergehenden (es gibt keine), obwohl $(1,0) = (1,1)-(0,1)$ – das Lemma garantiert nur <i>einen</i> Index $k$, hier $k=3$.<br>
<b>2. Nullvektor:</b> Ohne „$\neq 0$” würde das Lemma für die Sequenz $0,(1,0)$ scheitern: Sie ist l.a., aber $(1,0)$ ist keine LK von $0$ – die Abhängigkeit sitzt im ersten Vektor ($k = 1$).`
  },
  // ========================================================================
  // 4b BASIS UND DIMENSION
  // ========================================================================
  {
    id: "la4_def_basis",
    title: "Definition: Basis (mit den Beispielen 0.–3.)",
    category: "4b Basis und Dimension",
    type: "definition",
    front: R`Wann ist $B\subseteq V$ eine <b>Basis</b> von $V$? Nenne die Beispiele des Skripts – warum ist $\{e_i: i\in\mathbb{N}\}$ <b>keine</b> Basis von $S(K)$?`,
    back: R`Ist $V$ ein VR über $K$ und $B\subseteq V$, dann ist $B$ eine <b>Basis</b> von $V$, wenn gilt:
$$B\text{ ist eine Menge l.u. Vektoren mit }\langle B\rangle = V.$$
<b>Beispiele:</b><br>
<b>0.</b> $\emptyset$ ist eine Basis des Nullraums $\{0_V\}$.<br>
<b>1.</b> $B_4 = \{(1,0,0,0),(0,1,0,0),(0,0,1,0),(0,0,0,1)\}$ ist eine Basis von $\mathbb{R}^4$ (z.B. $\langle B_4\setminus\{x_3\}\rangle = \{(\lambda_1,\lambda_2,0,\lambda_4)\}\not\ni x_3$, und $(\lambda_1,\dots,\lambda_4) = \sum\lambda_ix_i$).<br>
<b>2.</b> $B = \{X^i: i\in\mathbb{N}\}$ (mit $X^0 := 1$) ist eine Basis von $\mathbb{Q}[X]$.<br>
<b>3.</b> $M = \{e_i: i\in\mathbb{N}\}\subseteq S(K)$ ist l.u., aber $\langle M\rangle\neq S(K)$: $(1,1,1,\dots)$ ist keine LK von Vektoren aus $M$ – <b>Linearkombinationen sind immer endlich</b>. Also keine Basis.<br>
<b>Bem.:</b> Jeder VR besitzt eine Basis; dafür braucht man aber das Auswahlaxiom.`,
    meta: "Skript: Kap. 4, Definition Basis, Beispiele 0.–3., Bem.",
    explanation: R`<b>Basis = minimale Bauanleitung:</b> „l.u.” heisst <i>kein Vektor ist überflüssig</i>, „$\langle B\rangle = V$” heisst <i>alles lässt sich bauen</i>. Gleichwertig (Stammbach II.2.7/2.9): Eine Basis ist eine <b>maximale</b> l.u. Menge und ein <b>minimales</b> Erzeugendensystem.<br><br>
<b>Koordinaten:</b> Jeder Vektor hat bzgl. einer Basis eine <b>eindeutige</b> Darstellung (Satz 4.1) – die Koeffizienten sind seine Koordinaten. So wird ein abstrakter VR zu $K^n$ (Satz 7.3).<br><br>
<b>Beispiel 3 ist subtil:</b> In $S(K)$ gibt es eine Basis (Auswahlaxiom), aber niemand kann sie explizit hinschreiben. Die $e_i$ bilden eine Basis des kleineren Raums $c_{00}$ der „fast-Null-Folgen” (Serie 6, Aufgabe 27).`,
    example: R`<b>1.</b> $\{(1,1),(1,-1)\}$ ist eine Basis von $\mathbb{R}^2$: $(a,b) = \tfrac{a+b}{2}(1,1)+\tfrac{a-b}{2}(1,-1)$, z.B. $(5,1) = 3(1,1)+2(1,-1)$.<br>
<b>2.</b> (Stammbach II.2.5) $\alpha = (1,1,0)$, $\beta = (1,0,1)$, $\gamma = (1,1,1)$ ist eine Basis von $\mathbb{R}^3$: $e_1 = \alpha+\beta-\gamma$, $e_2 = \gamma-\beta$, $e_3 = \gamma-\alpha$.<br>
<b>3.</b> $\{1,\sqrt 2\}$ ist eine Basis von $\mathbb{Q}(\sqrt 2)$ über $\mathbb{Q}$.`,
    counterexample: R`<b>1. Erzeugt, aber nicht l.u.:</b> $\{(1,0),(0,1),(1,1)\}$ erzeugt $\mathbb{R}^2$, ist aber l.a. – keine Basis.<br>
<b>2. l.u., aber erzeugt nicht:</b> $\{(1,0,0),(0,1,0)\}$ in $\mathbb{R}^3$: $(0,0,1)$ fehlt.<br>
<b>3. Unendlicher Fall:</b> $\{e_i\}$ in $S(K)$ (Beispiel 3): $(1,1,1,\dots)\notin\langle\{e_i\}\rangle$.`
  },
  {
    id: "la4_satz_4_1",
    title: "Satz 4.1: Eindeutige Darstellung bzgl. einer Basis",
    category: "4b Basis und Dimension",
    type: "satz",
    front: R`Was besagt <b>Satz 4.1</b>, und wie beweist man ihn (Aufgabe 15)?`,
    back: R`<b>Satz 4.1:</b> Ist $B\subseteq V$ eine Basis des VR $V$ (über einem Körper $K$), so lässt sich jeder Vektor aus $V$ in – bis auf die Reihenfolge – <b>eindeutiger Weise</b> schreiben als Linearkombination von Vektoren aus $B$ mit <b>nicht-verschwindenden Koeffizienten</b>.<br><br>
<b>Beweis (Aufgabe 15):</b> <i>Existenz:</i> $V = \langle B\rangle$. <i>Eindeutigkeit:</i> Für $x = 0_V$ ist die leere LK die einzige. Sei $x\neq 0_V$ und
$$x = \sum_{i=1}^n\lambda_ix_i = \sum_{j=1}^m\mu_jy_j,\qquad x_i,y_j\in B,\;\lambda_i,\mu_j\in K\setminus\{0\}.$$
Sammle alle beteiligten Vektoren in $\{z_1,\dots,z_k\}$ und ergänze fehlende Koeffizienten durch $0$: $x = \sum_l\alpha_lz_l = \sum_l\beta_lz_l$. Dann $0_V = \sum_l(\alpha_l-\beta_l)z_l$; da die $z_l\in B$ l.u. sind (Satz 4.0), ist $\alpha_l = \beta_l$ für alle $l$. Weil alle $\lambda_i,\mu_j\neq 0$, kommt jedes $x_i$ auch als ein $y_j$ vor und umgekehrt, mit gleichem Koeffizienten; insbesondere $n = m$.`,
    meta: "Skript: Kap. 4, Satz 4.1; Serie 3, Aufgabe 15",
    explanation: R`<b>Basis = Koordinatensystem:</b> Existenz der Darstellung kommt vom „Erzeugen”, Eindeutigkeit vom „l.u.”. Zusammen bekommt jeder Vektor eine eindeutige Koordinatenliste – die Grundlage für Satz 7.3 ($V\cong K^n$), Darstellungsmatrizen und Basiswechsel.<br><br>
<b>Warum „nicht-verschwindende Koeffizienten” und „bis auf die Reihenfolge”?</b> Man könnte sonst beliebige Summanden $0\cdot b$ hinzufügen oder umsortieren – das ändert den Vektor nicht. Bei einer <b>endlichen, geordneten</b> Basis $\{x_1,\dots,x_n\}$ sagt man einfacher: Die Koeffizienten $\lambda_1,\dots,\lambda_n$ (mit Nullen) sind eindeutig.<br><br>
Die Umkehrung gilt auch (Stammbach II.2.3): Lässt sich jeder Vektor eindeutig darstellen, so ist die Familie eine Basis (eindeutige Darstellung der $0$ ⇒ l.u.).`,
    example: R`Basis $\{(1,1,0),(1,0,1),(1,1,1)\}$ von $\mathbb{R}^3$ (Stammbach II.4.2): $\xi = (2,4,1) = 1\cdot(1,1,0)-2\cdot(1,0,1)+3\cdot(1,1,1)$. Probe: $(1-2+3,\,1+0+3,\,0-2+3) = (2,4,1)$ ✓. Die Koordinaten $(1,-2,3)$ sind eindeutig.`,
    counterexample: R`<b>Ohne l.u. keine Eindeutigkeit:</b> Mit dem Erzeugendensystem $\{(1,0),(0,1),(1,1)\}$ gilt $(2,3) = 2(1,0)+3(0,1) = 1(1,0)+2(0,1)+1(1,1) = -1(1,0)+0(0,1)+3(1,1)$ – unendlich viele Darstellungen.`
  },
  {
    id: "la4_def_dimension",
    title: "Definition: Dimension und endlich-dimensional",
    category: "4b Basis und Dimension",
    type: "definition",
    front: R`Wie ist die <b>Dimension</b> eines VR definiert, wann heisst $V$ <b>endlich-dimensional</b>? Warum ist die Definition sinnvoll?`,
    back: R`<b>Definition:</b> Ist $V$ ein VR über $K$ und $B\subseteq V$ eine Basis von $V$, so heisst $|B|$ die <b>Dimension</b> von $V$, $\dim(V)$, wobei $|B|$ die Anzahl der Elemente in $B$ bezeichnet (für unendliche $B$ die Kardinalität).<br>
<b>Bem.:</b> Wir zeigen später, dass die Dimension eindeutig bestimmt ist (Satz 4.6).<br><br>
<b>Definition:</b> Ein VR $V$ heisst <b>endlich-dimensional</b>, wenn $V$ eine endliche Basis besitzt; andernfalls <b>unendlich-dimensional</b>.`,
    meta: "Skript: Kap. 4, Definitionen Dimension und endlich-dimensional",
    explanation: R`Die Dimension zählt die <b>„Freiheitsgrade”</b>: Wie viele unabhängige Zahlen braucht man, um einen Vektor festzulegen? Eine Gerade durch $0$ hat Dimension 1, eine Ebene 2, $K^n$ hat $n$.<br><br>
<b>Wohldefiniertheit</b> ist nicht selbstverständlich: Verschiedene Basen könnten a priori verschieden viele Elemente haben. Erst der Austauschsatz von Steinitz (4.5) zeigt, dass alle Basen gleich gross sind (Satz 4.6). Bis dahin ist „$\dim(V) := |B|$” nur unter diesem Vorbehalt eine Definition.<br><br>
<b>Dimension hängt vom Körper ab:</b> $\dim_{\mathbb{C}}(\mathbb{C}) = 1$, $\dim_{\mathbb{R}}(\mathbb{C}) = 2$; $V = \mathbb{Q}(\sqrt 2,\sqrt 3)$ hat über $\mathbb{Q}$ Dimension 4, über $\mathbb{Q}(\sqrt 2)$ Dimension 2 (Serie 3, Aufgabe 19).`,
    example: R`$\dim(K^n) = n$; $\dim(\{0_V\}) = 0$ (Basis $\emptyset$); $\dim(M_{m\times n}(K)) = m\cdot n$ (z.B. $\dim(M_{2\times 3}) = 6$); $\dim(\mathrm{Fib}) = 2$ (Serie 3, 17); Polynome vom Grad $\le 4$: Dimension $5$ (Basis $1,x,x^2,x^3,x^4$).`,
    counterexample: R`<b>Unendlich-dimensional:</b> $\mathbb{Q}[X]$ (Basis $\{X^i: i\in\mathbb{N}\}$), $S(K)$, $c_{00}$, der Raum aller Funktionen $\mathbb{R}\to\mathbb{R}$. Für $\mathbb{Q}[X]$: Endlich viele Polynome haben einen maximalen Grad $d$, also liegt $X^{d+1}$ nicht in ihrer Hülle – keine endliche Basis.<br>
<b>„Anzahl Koordinaten” ≠ Dimension:</b> Die Ebene $\{(x,y,z): x-y-z = 0\}\subseteq\mathbb{R}^3$ besteht aus Tripeln, hat aber Dimension 2.`
  },
  // ========================================================================
  // 4c BASISERGÄNZUNG UND AUSTAUSCHSATZ
  // ========================================================================
  {
    id: "la4_satz_4_3",
    title: "Satz 4.3: Basisergänzungssatz",
    category: "4c Basisergänzung und Austauschsatz",
    type: "satz",
    front: R`Formuliere und beweise <b>Satz 4.3</b>: Jede endliche l.u. Menge lässt sich zu einer Basis erweitern.`,
    back: R`<b>Satz 4.3:</b> Ist $V$ ein endlich-dimensionaler VR und $M\subseteq V$ eine endliche Menge l.u. Vektoren, dann lässt sich $M$ zu einer Basis von $V$ erweitern, d.h. es existiert eine Basis $B$ von $V$ mit $M\subseteq B$.<br><br>
<b>Beweis:</b> Sei $\{x_1,\dots,x_n\}$ eine endliche Basis und $M = \{y_1,\dots,y_m\}$ l.u. Ist $\langle M\rangle = V$, fertig (für $M = \emptyset$: $M\subseteq\{x_1,\dots,x_n\}$). Sonst betrachte die Sequenz
$$S = (y_1,\dots,y_m,x_1,\dots,x_n).$$
Da die $y_i$ LK der $x_i$ sind, ist $S$ l.a. (für $m\ge 1$). Nach Lemma 4.2 ist ein $z\in S$ LK der vorhergehenden; weil die $y_i$ l.u. sind, ist $z = x_i$. Streiche $x_i$: $S' = (y_1,\dots,y_m,x_1,\dots,x_{i-1},x_{i+1},\dots,x_n)$ mit $\langle S'\rangle = \langle S\rangle = V$. Wiederhole, bis die Sequenz $\tilde S$ l.u. ist. Dann ist $\tilde S$ eine Basis mit $M\subseteq\tilde S$.`,
    meta: "Skript: Kap. 4, Definition endlich-dimensional, Satz 4.3 mit Beweis",
    explanation: R`<b>Bild:</b> Man stellt die gegebenen Vektoren $y_1,\dots,y_m$ <b>vorne</b> in die Liste (sie sollen auf jeden Fall bleiben) und hängt eine bekannte Basis an. Diese Liste erzeugt sicher alles, ist aber zu lang. Dann geht man sie von vorne durch und wirft jeden Vektor raus, der aus seinen Vorgängern baubar ist. Da die $y$’s vorne stehen und l.u. sind, fliegen <b>nur $x$’s raus</b>.<br><br>
<b>Warum bleibt die Hülle gleich?</b> Ein gestrichener Vektor ist LK der übrigen – man kann ihn jederzeit „nachbauen”.<br><br>
<b>Anwendung:</b> Lemma 5.1 (i) ($\dim(U)\le\dim(V)$), Lemma 5.6 ($\dim(V/W) = n-m$), Basen von Unterräumen erweitern (Stammbach III.2.15 Dimensionsformel).`,
    example: R`$M = \{(1,1,0)\}$ in $\mathbb{R}^3$, Basis $e_1,e_2,e_3$. Sequenz $((1,1,0),e_1,e_2,e_3)$: $e_1$ ist keine LK von $(1,1,0)$; $e_2 = (1,1,0)-e_1$ ⇒ streiche $e_2$. Rest $((1,1,0),e_1,e_3)$ ist l.u. ⇒ Basis $\{(1,1,0),(1,0,0),(0,0,1)\}\supseteq M$.`,
    counterexample: R`<b>1. l.a. Menge nicht erweiterbar:</b> $M = \{(1,0),(2,0)\}$ ist in keiner Basis enthalten (jede Obermenge bleibt l.a.).<br>
<b>2. Ergänzung nicht eindeutig:</b> $\{(1,1,0)\}$ lässt sich auch durch $\{(0,1,0),(0,0,1)\}$ ergänzen – das Verfahren hängt von der Reihenfolge der $x_i$ ab.<br>
<b>3.</b> Im unendlich-dim. Fall braucht man das Auswahlaxiom (z.B. $\{e_i^*\}$ zu einer Basis von $c_{00}(\mathbb{F}_2)^*$ erweitern, Serie 6).`
  },
  {
    id: "la4_satz_4_4",
    title: "Satz 4.4: Jedes endliche Erzeugendensystem enthält eine Basis",
    category: "4c Basisergänzung und Austauschsatz",
    type: "satz",
    front: R`Was besagt <b>Satz 4.4</b>, und wie folgt er aus dem Verfahren von Satz 4.3?`,
    back: R`<b>Satz 4.4:</b> Ist $V$ ein endlich-dimensionaler VR und $M\subseteq V$ eine endliche Menge mit $\langle M\rangle = V$, so <b>enthält $M$ eine Basis</b> von $V$.<br><br>
<b>Beweis:</b> Sei $M = \{x_1,\dots,x_n\}$. Sind $x_1,\dots,x_n$ l.u., so ist $M$ eine Basis. Andernfalls betrachte die Sequenz $(x_1,\dots,x_n)$ und gehe vor wie im Beweis von Satz 4.3: Mit Lemma 4.2 streicht man einen Vektor, der LK der vorhergehenden ist (die Hülle bleibt $V$), und wiederholt, bis die Sequenz l.u. ist.`,
    meta: "Skript: Kap. 4, Satz 4.4 mit Beweis; Stammbach II.3.2",
    explanation: R`Satz 4.3 und 4.4 sind die zwei Seiten derselben Medaille:<br>
• <b>4.3 (Ergänzen):</b> l.u. Menge $\to$ durch Hinzufügen zur Basis machen.<br>
• <b>4.4 (Ausdünnen):</b> Erzeugendensystem $\to$ durch Weglassen zur Basis machen.<br>
Eine Basis liegt immer „zwischen” l.u. Mengen und Erzeugendensystemen: Jede l.u. Menge hat höchstens $\dim(V)$ Elemente, jedes Erzeugendensystem mindestens $\dim(V)$ (Folgerung aus Steinitz, Stammbach II.3.6).<br><br>
<b>Praktisch:</b> Um eine Basis von $\langle\{v_1,\dots,v_k\}\rangle$ zu finden, streicht man von links nach rechts jeden Vektor, der LK der vorherigen ist.`,
    example: R`$M = \{(1,2),(2,4),(0,1),(3,3)\}$ erzeugt $\mathbb{R}^2$. Sequenz durchgehen: $(1,2)$ bleibt; $(2,4) = 2(1,2)$ streichen; $(0,1)$ bleibt; $(3,3) = 3(1,2)-3(0,1)$ streichen. Basis $\{(1,2),(0,1)\}\subseteq M$.`,
    counterexample: R`<b>1. Kein Erzeugendensystem:</b> $\{(1,2),(2,4)\}$ enthält keine Basis von $\mathbb{R}^2$ (Hülle ist nur eine Gerade).<br>
<b>2. Unendlicher Fall:</b> $S(K)$ wird von sich selbst erzeugt; dass diese (unendliche) Menge eine Basis enthält, folgt nur mit dem Auswahlaxiom – explizit angeben kann man keine (Bem. nach den Basis-Beispielen).`
  },
  {
    id: "la4_satz_4_5",
    title: "Satz 4.5: Austauschsatz von Steinitz",
    category: "4c Basisergänzung und Austauschsatz",
    type: "satz",
    front: R`Formuliere den <b>Austauschsatz von Steinitz</b> (Satz 4.5).`,
    back: R`Sei $V$ ein VR und seien $\{x_1,\dots,x_n\}\subseteq V$ und $\{y_1,\dots,y_m\}\subseteq V$ zwei Teilmengen mit $m,n\in\mathbb{N}^+$, sodass gilt:
<ul><li><b>(i)</b> die Vektoren $y_1,\dots,y_m$ sind <b>l.u.</b>, und</li>
<li><b>(ii)</b> $\langle\{x_1,\dots,x_n\}\rangle = V$;</li></ul>
dann ist $\boxed{n\ge m}$ und es existiert eine Teilmenge $X\subseteq\{x_1,\dots,x_n\}$ mit $|X| = n-m$ und
$$\langle\{y_1,\dots,y_m\}\cup X\rangle = V.$$`,
    meta: "Skript: Kap. 4, Satz 4.5 (Austauschsatz von Steinitz)",
    explanation: R`<b>Kernaussage:</b> <i>„Eine l.u. Menge ist nie grösser als ein Erzeugendensystem.”</i> Und mehr noch: Man kann die $m$ unabhängigen Vektoren $y_j$ einzeln in das Erzeugendensystem <b>hineintauschen</b>, wobei jedes Mal genau ein $x_i$ hinausfliegt, ohne dass die Hülle schrumpft.<br><br>
<b>Intuition:</b> Jeder neue unabhängige Vektor $y_j$ „besetzt” eine Richtung, die vorher ein $x_i$ abgedeckt hat. Gäbe es mehr $y$’s als $x$’s, so gingen die $x$’s aus, bevor alle $y$’s untergebracht wären – dann wären die übrigen $y$’s LK der schon eingetauschten, Widerspruch zu l.u.<br><br>
<b>Folgerungen:</b> Satz 4.6 (alle Basen gleich gross), Lemma 5.1 (i), „mehr als $n$ Vektoren in einem $n$-dim. Raum sind l.a.”, „weniger als $n$ erzeugen nicht”.`,
    example: R`Serie 3, Aufgabe 16 in $\mathbb{Q}^4$: $x_1,\dots,x_4$ Standardbasis, $y_1 = (1,1,1,0)$, $y_2 = (0,1,1,0)$ l.u. ($m=2$, $n=4$). Austausch liefert $X = \{x_2,x_4\}$ mit $|X| = 4-2$ und $\langle\{y_1,y_2,x_2,x_4\}\rangle = \mathbb{Q}^4$.`,
    counterexample: R`<b>1. (i) verletzt:</b> $y_1 = (1,0)$, $y_2 = (2,0)$, $y_3 = (3,0)$ sind l.a.; $m = 3\gt n = 2$ für das Erzeugendensystem $\{(1,0),(0,1)\}$ – kein Widerspruch zum Satz.<br>
<b>2. (ii) verletzt:</b> $\{x_1\} = \{(1,0,0)\}$ erzeugt nicht $\mathbb{R}^3$; die drei l.u. Vektoren $e_1,e_2,e_3$ sind mehr als $n = 1$.<br>
<b>3.</b> Mehr als $n$ Vektoren im $n$-dim. Raum sind immer l.a.: $(1,2),(3,4),(5,6)$ in $\mathbb{R}^2$: $(5,6) = -1\cdot(1,2)+2\cdot(3,4)$.`
  },
  {
    id: "la4_beweis_4_5",
    title: "Beweis des Austauschsatzes von Steinitz",
    category: "4c Basisergänzung und Austauschsatz",
    type: "beweis",
    front: R`Beweise den <b>Austauschsatz von Steinitz</b> (Satz 4.5) mit Lemma 4.2.`,
    back: R`Betrachte $S_m := (y_m,x_1,\dots,x_n)$. Wegen $\langle\{x_1,\dots,x_n\}\rangle = V$ ist $S_m$ l.a. und $\langle S_m\rangle = V$.<br>
• Nach Lemma 4.2 ist ein $x_i$ LK von $y_m,x_1,\dots,x_{i-1}$ (nicht $y_m$, der steht vorne).<br>
• $S_m' := (y_m,x_1,\dots,x_{i-1},x_{i+1},\dots,x_n)$: $\langle S_m'\rangle = V$, $|S_m'| = n$.<br>
• $S_{m-1} := (y_{m-1},y_m,x_1,\dots,\widehat{x_i},\dots,x_n)$ ist wieder l.a. (weil $y_{m-1}\in\langle S_m'\rangle = V$); mit Lemma 4.2 streicht man wieder ein $x$ (nicht $y_m$, denn $y_{m-1},y_m$ sind l.u.). Es gilt $|S_{m-1}'| = n$, $\langle S_{m-1}'\rangle = V$; und so fort.<br>
• Jedes Mal, wenn wir ein $y_j$ vorne anhängen, streichen wir ein $x_i$ – bis alle $y_1,\dots,y_m$ eingefügt sind. Dass dies geht, zeigt $n\ge m$.<br>
• Ergebnis: $S_1' = (y_1,\dots,y_m,x_{i_1},\dots,x_{i_k})$ mit $\langle S_1'\rangle = V$, $|S_1'| = n$. Also $m+k = n$; mit $X := \{x_{i_1},\dots,x_{i_k}\}$: $|X| = n-m$, $\langle\{y_1,\dots,y_m\}\cup X\rangle = V$.`,
    meta: "Skript: Kap. 4, Beweis von Satz 4.5",
    explanation: R`<b>Invariante des Verfahrens:</b> Nach jedem Schritt hat die Sequenz genau <b>$n$ Vektoren</b> und erzeugt $V$. Ein $y$ kommt rein, ein $x$ geht raus.<br><br>
<b>Warum wird immer ein $x$ gestrichen, nie ein $y$?</b> Lemma 4.2 liefert den <b>ersten</b> Vektor, der LK seiner Vorgänger ist. Die $y$’s stehen alle vorne und sind untereinander l.u. – keiner von ihnen ist LK seiner Vorgänger. Also ist der gefundene Vektor ein $x$.<br><br>
<b>Warum $n\ge m$?</b> Wären die $x$’s aufgebraucht, bevor alle $y$’s eingefügt sind, so bestünde die Sequenz nur aus $y$’s, die $V$ erzeugen – das nächste $y_j$ wäre dann LK der eingefügten $y$’s, Widerspruch zu (i). (Stammbach beweist dasselbe per Induktion, Lemma II.3.8.)`,
    example: R`$V = \mathbb{R}^2$, $x_1 = (1,0)$, $x_2 = (0,1)$, $y_1 = (1,1)$, $y_2 = (1,-1)$.<br>
$S_2 = ((1,-1),(1,0),(0,1))$: $(0,1) = (1,0)-(1,-1)$ ⇒ streiche $x_2$: $S_2' = ((1,-1),(1,0))$.<br>
$S_1 = ((1,1),(1,-1),(1,0))$: $(1,0) = \tfrac12(1,1)+\tfrac12(1,-1)$ ⇒ streiche $x_1$: $S_1' = ((1,1),(1,-1))$, $X = \emptyset$, $|X| = 2-2 = 0$ ✓.`,
    counterexample: R`<b>Falsche Reihenfolge der Prüfung:</b> Würde man in $S_2 = ((1,-1),(1,0),(0,1))$ statt des <i>ersten</i> abhängigen Vektors irgendeinen streichen, etwa $(1,-1)$ selbst (es gilt ja $(1,-1) = (1,0)-(0,1)$), so wäre $y_2$ verloren – genau das verhindert „vorhergehende” in Lemma 4.2.`
  },
  {
    id: "la4_satz_4_6",
    title: "Satz 4.6: Alle Basen haben gleich viele Elemente",
    category: "4c Basisergänzung und Austauschsatz",
    type: "satz",
    front: R`Was besagt <b>Satz 4.6</b>, wie folgt er aus Steinitz, und was gilt im unendlich-dimensionalen Fall?`,
    back: R`<b>Satz 4.6:</b> Ist $V$ ein endlich-dimensionaler VR und sind $B_1$ und $B_2$ Basen von $V$, dann ist $|B_1| = |B_2|$.<br><br>
<b>Beweis:</b> Basen erfüllen sowohl (i) (l.u.) wie auch (ii) (erzeugend) von Satz 4.5. Wendet man Steinitz mit $B_2$ als l.u. Menge und $B_1$ als Erzeugendensystem an, folgt $|B_1|\ge|B_2|$; umgekehrt $|B_2|\ge|B_1|$. Also $|B_1| = |B_2|$.<br><br>
<b>Bem.:</b> Satz 4.6 gilt auch für unendlich-dimensionale VR; dann bezeichnet $|B|$ die Kardinalität, und $|B_1| = |B_2|$ bedeutet, dass es eine Bijektion zwischen $B_1$ und $B_2$ gibt.`,
    meta: "Skript: Kap. 4, Satz 4.6 mit Beweis und Bem.",
    explanation: R`Damit ist die <b>Dimension wohldefiniert</b> – sie hängt nicht von der gewählten Basis ab. Das ist eine der wichtigsten Invarianten der linearen Algebra: Zwei endlich-dimensionale VR über $K$ sind genau dann isomorph, wenn sie gleiche Dimension haben (Satz 7.3, Stammbach II.4.13).<br><br>
<b>Nützliche Folgerungen</b> (Stammbach II.3.6) in einem $n$-dimensionalen Raum:<br>
• weniger als $n$ Vektoren erzeugen nie;<br>
• mehr als $n$ Vektoren sind immer l.a.;<br>
• $n$ l.u. Vektoren bilden schon eine Basis;<br>
• $n$ erzeugende Vektoren bilden schon eine Basis.<br>
Die letzten zwei sparen Arbeit: Man muss nur <i>eine</i> der beiden Basis-Bedingungen prüfen, wenn die Anzahl stimmt.`,
    example: R`$\mathrm{Fib}$: Die Basen $B_1 = \{F_{1,0},F_{0,1}\}$, $B_2 = \{F_{1,1},F_{2,1}\}$, $B_3 = \{F_{1,\varphi},F_{1,\psi}\}$ haben alle 2 Elemente ⇒ $\dim(\mathrm{Fib}) = 2$ (Serie 3, Aufgabe 17).<br>
$\mathbb{R}^2$: $\{(1,0),(0,1)\}$ und $\{(1,1),(1,-1)\}$ – beide 2 Elemente.`,
    counterexample: R`<b>1. Minimal erzeugend vs. irgendein Erzeugendensystem:</b> $\{(1,0),(0,1),(1,1)\}$ hat 3 Elemente und erzeugt $\mathbb{R}^2$ – aber es ist keine Basis; Satz 4.6 betrifft nur Basen.<br>
<b>2. Andere Körper, andere Zahl:</b> $\{1\}$ ist Basis von $\mathbb{C}$ über $\mathbb{C}$, $\{1,i\}$ Basis von $\mathbb{C}$ über $\mathbb{R}$ – kein Widerspruch, es sind verschiedene Vektorräume.`
  },
  // ========================================================================
  // SERIE 3
  // ========================================================================
  {
    id: "la4_s3_a16_steinitz",
    title: "Serie 3, Aufgabe 16: Steinitz konkret in ℚ⁴",
    category: "4c Basisergänzung und Austauschsatz",
    type: "aufgabe",
    front: R`In $V = \mathbb{Q}^4$ sei $\{x_1,x_2,x_3,x_4\}$ die Standardbasis, $y_1 = (1,1,1,0)$, $y_2 = (0,1,1,0)$. Ersetze mit dem <b>Austauschsatz von Steinitz</b> zwei der $x_i$ durch $y_1,y_2$. (Start: $S_2 = (y_2,x_1,x_2,x_3,x_4)$.)`,
    back: R`<b>1. Schritt:</b> $S_2 = (y_2,x_1,x_2,x_3,x_4)$. $\{y_2,x_1\}$ l.u., $\{y_2,x_1,x_2\}$ l.u., aber $\{y_2,x_1,x_2,x_3\}$ l.a., denn
$$x_3 = y_2-x_2\quad\big((0,0,1,0) = (0,1,1,0)-(0,1,0,0)\big).$$
Streiche $x_3$: $S_2' = (y_2,x_1,x_2,x_4)$, $\langle S_2'\rangle = V$.<br>
<b>2. Schritt:</b> $S_1 = (y_1,y_2,x_1,x_2,x_4)$. Schon $\{y_1,y_2,x_1\}$ ist l.a., denn
$$x_1 = y_1-y_2\quad\big((1,0,0,0) = (1,1,1,0)-(0,1,1,0)\big).$$
Streiche $x_1$: $S_1' = (y_1,y_2,x_2,x_4)$.<br>
<b>Ergebnis:</b> $\{y_1,y_2,x_2,x_4\}$ ist eine Basis von $\mathbb{Q}^4$.`,
    meta: "Serie 3, Aufgabe 16 (Musterlösung; dort Tippfehler „x₃ = y₂ − x₃”, richtig: x₃ = y₂ − x₂)",
    explanation: R`<b>Vorgehen wie im Beweis:</b> $y$’s einzeln von vorne anhängen; jeweils den <b>ersten</b> Vektor finden, der LK seiner Vorgänger ist, und streichen. Die Hülle bleibt dabei immer ganz $\mathbb{Q}^4$.<br><br>
<b>Probe, dass das Ergebnis eine Basis ist:</b> 4 Vektoren im 4-dimensionalen Raum, die $\mathbb{Q}^4$ erzeugen, sind nach Satz 4.6 automatisch eine Basis. Explizit: $x_1 = y_1-y_2$, $x_3 = y_2-x_2$ – also liegen alle Standardbasisvektoren in der Hülle.<br><br>
<b>Bemerkung zur Musterlösung:</b> Dort steht „$x_3 = y_2-x_3$” – ein Tippfehler; korrekt ist $x_3 = y_2-x_2$.`,
    example: R`Koordinaten eines Vektors in der neuen Basis: $(a,b,c,d) = a\cdot x_1+b\cdot x_2+c\cdot x_3+d\cdot x_4 = a(y_1-y_2)+bx_2+c(y_2-x_2)+dx_4 = a\,y_1+(c-a)\,y_2+(b-c)\,x_2+d\,x_4$. Z.B. $(2,5,3,1) = 2y_1+1\cdot y_2+2x_2+x_4$; Probe: $(2,2,2,0)+(0,1,1,0)+(0,2,0,0)+(0,0,0,1) = (2,5,3,1)$ ✓.`,
    counterexample: R`<b>Falsche Wahl:</b> $\{y_1,y_2,x_2,x_3\}$ ist <b>keine</b> Basis: Alle vier Vektoren haben 4. Koordinate $0$, also fehlt $x_4$. Man darf nicht beliebige zwei $x_i$ streichen – nur die, die das Verfahren liefert (oder die man anderweitig als entbehrlich nachweist).`
  },
  {
    id: "la4_s3_a17_fib",
    title: "Serie 3, Aufgabe 17: Drei Basen von Fib und die Formel von Binet",
    category: "4b Basis und Dimension",
    type: "aufgabe",
    front: R`Finde drei verschiedene Basen des Vektorraums $\mathrm{Fib}$. Warum hat Fib Dimension 2, und wie folgt die <b>Formel von Binet</b>?`,
    back: R`<b>Hilfssatz:</b> Zu $a,b\in\mathbb{R}$ gibt es genau eine Folge $F_{a,b}\in\mathrm{Fib}$ mit $f_0 = a$, $f_1 = b$: $F_{a,b} = (a,b,a+b,a+2b,2a+3b,\dots)$ (Existenz rekursiv, Eindeutigkeit per Induktion).<br>
<b>Folgesatz:</b> Sind $(a,b),(c,d)$ l.u. in $\mathbb{R}^2$, so ist $\{F_{a,b},F_{c,d}\}$ eine Basis von Fib.<br><br>
<b>Drei Basen:</b> $B_1 = \{F_{1,0},F_{0,1}\}$, $\;B_2 = \{F_{1,1},F_{2,1}\}$, $\;B_3 = \{F_{1,\varphi},F_{1,\psi}\}$ mit
$$\varphi = \tfrac{1+\sqrt 5}{2},\quad\psi = \tfrac{1-\sqrt 5}{2}\quad(\text{Lösungen von }t^2 = t+1),\qquad F_{1,t} = (1,t,t^2,t^3,\dots).$$
<b>Binet:</b> $F_{0,1} = \tfrac{1}{\sqrt 5}F_{1,\varphi}-\tfrac{1}{\sqrt 5}F_{1,\psi}$, gliedweise:
$$f_n = \frac{1}{\sqrt 5}\Big(\Big(\tfrac{1+\sqrt 5}{2}\Big)^n-\Big(\tfrac{1-\sqrt 5}{2}\Big)^n\Big).$$`,
    meta: "Serie 3, Aufgabe 17; vgl. Serie 6, Aufgabe 29 (Eigenvektoren von M_Fib)",
    explanation: R`<b>Warum Dimension 2?</b> Eine Fibonacci-Folge ist durch ihre <b>zwei Anfangswerte</b> eindeutig bestimmt – die Abbildung $\mathrm{Fib}\to\mathbb{R}^2$, $(f_n)\mapsto(f_0,f_1)$ ist ein Isomorphismus. Bzgl. $B_1$ sind die Koordinaten gerade die Anfangswerte: $f = f_0F_{1,0}+f_1F_{0,1}$.<br><br>
<b>Warum ist $B_3$ so nützlich?</b> Die Folgen $(1,t,t^2,\dots)$ sind <b>geometrisch</b> – man kann ihr $n$-tes Glied sofort hinschreiben. Sie liegen in Fib genau dann, wenn $t^{i+2} = t^{i+1}+t^i$, d.h. $t^2 = t+1$. In dieser Basis wird die Rekursion „diagonal” (Serie 6, Aufgabe 29: Eigenvektoren von $M_{\mathrm{Fib}}$). Jede Fibonacci-Folge zerfällt in zwei geometrische Folgen – so entsteht Binet.<br><br>
<b>Basiswechsel-Denken</b> (Kap. 8): Dieselbe Folge hat in $B_1$ die Koordinaten $(0,1)$, in $B_3$ die Koordinaten $(\tfrac1{\sqrt 5},-\tfrac1{\sqrt 5})$.`,
    example: R`$B_2$: $F_{1,1} = (1,1,2,3,5,8,\dots)$, $F_{2,1} = (2,1,3,4,7,11,\dots)$ (Lucas-artig). Da $(1,1),(2,1)$ l.u. sind, ist $B_2$ eine Basis. Koordinaten von $F_{0,1}$ bzgl. $B_2$: Ansatz $\lambda(1,1)+\mu(2,1) = (0,1)$ ⇒ $\lambda+2\mu = 0$, $\lambda+\mu = 1$ ⇒ $\mu = -1$, $\lambda = 2$: $F_{0,1} = 2F_{1,1}-F_{2,1} = (0,1,1,2,3,5,\dots)$ ✓.<br>
Binet für $n=5$: $\varphi^5\approx 11.0902$, $\psi^5\approx -0.0902$, $\tfrac{11.1803}{2.2361} = 5 = f_5$ ✓.`,
    counterexample: R`<b>1.</b> $\{F_{1,2},F_{2,4}\}$ ist <b>keine</b> Basis: $(1,2),(2,4)$ sind l.a., und $F_{2,4} = 2F_{1,2}$.<br>
<b>2.</b> $\{F_{1,0}\}$ allein erzeugt nicht: $F_{0,1}$ ist kein Vielfaches ($f_0 = 0$ erzwänge $\lambda = 0$).<br>
<b>3.</b> $(1,2,4,8,\dots) = F_{1,2}$? Nein – $F_{1,2} = (1,2,3,5,\dots)$; die geometrische Folge mit $t = 2$ liegt <b>nicht</b> in Fib, da $4\neq 2+1$.`
  },
  {
    id: "la4_s3_a18_qx_basis",
    title: "Serie 3, Aufgabe 18: Eine ungewöhnliche Basis von ℚ[X]",
    category: "4b Basis und Dimension",
    type: "aufgabe",
    front: R`Sei $x_n := 1+(n+1)\sum_{i=1}^nX^i$ in $\mathbb{Q}[X]$, also $x_0 = 1$, $x_1 = 1+2X$, $x_2 = 1+3X+3X^2$, … Zeige: (a) $\{x_n: n\in\mathbb{N}\}$ ist l.u.; (b) $\langle\{x_n\}\rangle = \mathbb{Q}[X]$.`,
    back: R`<b>(a)</b> $x_{n+1}$ hat Grad $n+1$, alle $x_0,\dots,x_n$ haben Grad $\le n$; also $x_{n+1}\notin\langle\{x_i: 0\le i\le n\}\rangle$. Mit <b>Lemma 4.2</b> sind $x_0,\dots,x_n$ für jedes $n$ l.u., also ist die ganze Menge l.u. (l.u. ist eine Eigenschaft endlicher Teilmengen).<br>
<b>(b)</b> Da $\{X^i\}$ eine Basis ist, genügt $X^k\in\langle\{x_0,\dots,x_k\}\rangle$ für alle $k$. <b>Induktion:</b> $X^0 = x_0$. Ist $X^k = \sum_{i=0}^k\lambda_i^kx_i$ für alle $k\le n$, so ist
$$(n+2)X^{n+1} = x_{n+1}-1-(n+2)\big(X+X^2+\dots+X^n\big),$$
und rechts stehen nur Vektoren aus $\langle\{x_0,\dots,x_{n+1}\}\rangle$. Also auch $X^{n+1}$.`,
    meta: "Serie 3, Aufgabe 18",
    explanation: R`<b>Gradargument</b> = Lemma 4.2 in Aktion: In einer Liste, in der jeder Vektor einen <b>neuen höchsten Grad</b> hat, kann kein Vektor LK seiner Vorgänger sein (die Vorgänger erreichen diesen Grad nicht). Das ist die „Treppenform” – sie garantiert lineare Unabhängigkeit.<br><br>
<b>Erzeugen per Induktion:</b> Man „schält” den höchsten Term ab: $x_{n+1}$ enthält $(n+2)X^{n+1}$ plus Terme kleineren Grades, und die sind nach Induktionsvoraussetzung schon baubar. Da $n+2\neq 0$ in $\mathbb{Q}$, kann man durch $n+2$ teilen.<br><br>
Dasselbe Argument zeigt allgemein: Jede Folge von Polynomen $p_0,p_1,\dots$ mit $\deg p_n = n$ ist eine Basis von $K[X]$ (z.B. $1, X-c, (X-c)^2,\dots$ – die Taylor-Basis, Stammbach II.8.2.2).`,
    example: R`$X = \tfrac12(x_1-x_0)$. Für $X^2$: $x_2 = 1+3X+3X^2$ ⇒ $X^2 = \tfrac13(x_2-x_0-3X) = \tfrac13x_2-\tfrac12x_1+\tfrac16x_0$.<br>
Probe: $\tfrac13(1+3X+3X^2)-\tfrac12(1+2X)+\tfrac16 = (\tfrac13-\tfrac12+\tfrac16)+(X-X)+X^2 = X^2$ ✓.`,
    counterexample: R`<b>Gleicher Grad ⇒ Argument versagt:</b> $p_0 = 1+X$, $p_1 = 2+2X$ haben beide Grad 1 und sind l.a. ($p_1 = 2p_0$).<br>
<b>Fehlender Grad ⇒ erzeugt nicht:</b> $\{1,X^2,X^3,X^4,\dots\}$ ist l.u., aber $X\notin$ Hülle (jede LK hat Koeffizient $0$ bei $X$).<br>
<b>Charakteristik:</b> Über $\mathbb{F}_2$ ist $x_1 = 1+2X = 1 = x_0$ – die Konstruktion bricht zusammen, weil man durch $2 = 0$ nicht teilen kann.`
  },
  {
    id: "la4_s3_a19_koerperwahl",
    title: "Serie 3, Aufgabe 19: Die Basis hängt vom Grundkörper ab",
    category: "4b Basis und Dimension",
    type: "aufgabe",
    front: R`$V = \{q_0+q_1\sqrt 2+q_2\sqrt 3+q_3\sqrt 6: q_i\in\mathbb{Q}\}$ wird als VR über $K_0 = \mathbb{Q}$, $K_1 = \mathbb{Q}(\sqrt 2)$, $K_2 = \mathbb{Q}(\sqrt 3)$, $K_3 = \mathbb{Q}(\sqrt 6)$ betrachtet ($V_i$ über $K_i$). Gib Basen an und erkläre, warum z.B. $\{1,\sqrt 3\}$ Basis von $V_1$, aber nicht von $V_2$ ist.`,
    back: R`<b>Lösungen:</b> (a) $B_0 = \{1,\sqrt 2,\sqrt 3,\sqrt 6\}$ für $V_0$; (b) $B_1 = \{1,\sqrt 3\}$ für $V_1$; (c) $B_3 = \{\sqrt 2,\sqrt 6\}$ für $V_3$; (d) $B_{2,3} = \{\sqrt 2,\sqrt 3\}$ ist Basis von $V_1$ und $V_2$, nicht von $V_3$.<br><br>
<b>Schlüssel (Hilfssatz 2):</b> $q_0+q_1\sqrt 2+q_2\sqrt 3+q_3\sqrt 6 = 0$ mit $q_i\in\mathbb{Q}$ ⇒ alle $q_i = 0$ (Beweisidee: $\sqrt 3\notin\mathbb{Q}(\sqrt 2)$ durch Quadrieren).<br>
<b>$B_1$ über $K_1$:</b> $(a+b\sqrt 2)\cdot 1+(c+d\sqrt 2)\cdot\sqrt 3 = a+b\sqrt 2+c\sqrt 3+d\sqrt 6$ – erzeugt alles, und $=0$ nur für $a=b=c=d=0$.<br>
<b>$B_1$ nicht über $K_2$:</b> $\sqrt 3\in K_2$ ist ein <b>Skalar</b>, also $\sqrt 3 = \sqrt 3\cdot 1$ – l.a.<br>
<b>$B_{2,3}$ nicht über $K_3$:</b> $\tfrac12\sqrt 6\in K_3$ und $\tfrac12\sqrt 6\cdot\sqrt 2 = \sqrt 3$ – l.a.`,
    meta: "Serie 3, Aufgabe 19",
    explanation: R`<b>Lektion:</b> „Linear unabhängig” und „Basis” sind <b>keine Eigenschaften von Mengen allein</b>, sondern hängen davon ab, <b>welche Skalare erlaubt sind</b>. Je grösser der Körper, desto mehr kann man „mit einem Faktor überbrücken”, desto kleiner die Dimension: $\dim_{\mathbb{Q}}(V) = 4$, $\dim_{K_i}(V) = 2$ für $i = 1,2,3$.<br><br>
<b>Faustregel:</b> Zwei Vektoren $u,v\neq 0$ sind über $K$ genau dann l.a., wenn der Quotient $\tfrac vu$ in $K$ liegt. $\tfrac{\sqrt 3}{1} = \sqrt 3$ liegt in $K_2$, nicht in $K_1$; $\tfrac{\sqrt 3}{\sqrt 2} = \tfrac{\sqrt 6}{2}$ liegt in $K_3$, aber weder in $K_1$ noch in $K_2$.<br><br>
<b>Gradformel (Ausblick):</b> $4 = [V:\mathbb{Q}] = [V:K_1]\cdot[K_1:\mathbb{Q}] = 2\cdot 2$.`,
    example: R`Koordinaten von $v = 5+\sqrt 2-3\sqrt 3+4\sqrt 6$:<br>
bzgl. $B_0$: $(5,1,-3,4)$;<br>
bzgl. $B_1$ über $K_1$: $v = (5+\sqrt 2)\cdot 1+(-3+4\sqrt 2)\cdot\sqrt 3$ – zwei Koordinaten aus $K_1$.<br>
bzgl. $B_{2,3}$ über $K_1$: $v = (1+\tfrac52\sqrt 2)\sqrt 2+(-3+4\sqrt 2)\sqrt 3$; Probe: $\sqrt 2+5-3\sqrt 3+4\sqrt 6$ ✓.`,
    counterexample: R`<b>$B_0$ über $K_1$:</b> $\{1,\sqrt 2,\sqrt 3,\sqrt 6\}$ ist über $\mathbb{Q}(\sqrt 2)$ l.a.: $\sqrt 2 = \sqrt 2\cdot 1$ und $\sqrt 6 = \sqrt 2\cdot\sqrt 3$.<br>
<b>$\{1,\sqrt 6\}$ über $K_3$:</b> $\sqrt 6 = \sqrt 6\cdot 1$ – l.a.; und $\{1\}$ allein erzeugt $V_3$ nicht ($\sqrt 2\notin\mathbb{Q}(\sqrt 6)$).`
  }
];
})();
