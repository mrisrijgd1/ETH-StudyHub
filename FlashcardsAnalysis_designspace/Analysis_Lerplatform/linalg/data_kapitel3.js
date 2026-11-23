/* ==========================================================================
   LINEARE ALGEBRA I – KAPITEL 3: Definitionen und Beispiele (Vektorräume)
   (Definition 1, Lemma 3.0, Beispiele von Körpern und Vektorräumen) + Serie 2
   Lineare Algebra I – Prof. Dr. Lorenz Halbeisen, HS 2026
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_KAPITEL_3 = [
  // ========================================================================
  // 3a DEFINITION DES VEKTORRAUMS
  // ========================================================================
  {
    id: "la3_def1_vektorraum",
    title: "Definition 1: Vektorraum über einem Körper K",
    category: "3a Definition des Vektorraums",
    type: "definition",
    front: R`Wie ist ein <b>Vektorraum über dem Körper $K$</b> (ein $K$-Vektorraum) definiert? Nenne alle vier Axiome (a)–(d) der Skalarmultiplikation.`,
    back: R`Sei $(V,\circ)$ eine <b>abelsche Gruppe</b> und $(K,+,\cdot,0,1)$ ein <b>Körper</b>. Weiter sei
$$\ast: K\times V\longrightarrow V,\qquad(\lambda,x)\longmapsto\lambda\ast x$$
eine Verknüpfung mit folgenden Eigenschaften:
<ul><li><b>(a)</b> $\forall x\in V\;(1\ast x = x)$,</li>
<li><b>(b)</b> $\forall\lambda,\mu\in K\;\forall x\in V\;\big((\lambda+\mu)\ast x = (\lambda\ast x)\circ(\mu\ast x)\big)$,</li>
<li><b>(c)</b> $\forall\lambda,\mu\in K\;\forall x\in V\;\big((\lambda\cdot\mu)\ast x = \lambda\ast(\mu\ast x)\big)$,</li>
<li><b>(d)</b> $\forall\lambda\in K\;\forall x,y\in V\;\big(\lambda\ast(x\circ y) = (\lambda\ast x)\circ(\lambda\ast y)\big)$.</li></ul>
Dann ist $V$ ein <b>Vektorraum über dem Körper $K$</b>, auch <b>$K$-Vektorraum</b>; im Fall $K=\mathbb{R}$ ein <b>reeller Vektorraum</b>.<br>
Elemente von $V$: <b>Vektoren</b>; Elemente von $K$: <b>Skalare</b>. „$\circ$” schreibt man meist $+_V$ mit Neutralelement $0_V$, „$\ast$” meist $\cdot$.`,
    meta: "Skript: Kap. 3 (Teil II), Definition 1 und Bem.",
    explanation: R`<b>Bem. (Skript):</b> „Algebraisch ist ein Vektorraum ein Körper, der auf einer abelschen Gruppe operiert.” Man hat zwei Welten: die <b>Vektoren</b> (man kann sie nur addieren) und die <b>Skalare</b> (man kann sie addieren, multiplizieren, dividieren). Die Skalarmultiplikation verbindet die Welten, und (a)–(d) sagen, dass sie sich „wie gewohntes Strecken” verhält:<br>
• (a) Strecken mit $1$ ändert nichts;<br>
• (b) und (d) sind die beiden <b>Distributivgesetze</b> (einmal über $+$ in $K$, einmal über $+_V$ in $V$);<br>
• (c) zweimal Strecken = einmal mit dem Produkt strecken.<br><br>
<b>Zwei verschiedene Pluszeichen!</b> In (b) steht links $+$ in $K$, rechts $+_V$ in $V$. Am Anfang schreibt das Skript deshalb $+_V$, $0_V$. Ebenso bedeutet $\lambda\cdot\mu\cdot x$ stets $(\lambda\cdot\mu)\ast x = \lambda\ast(\mu\ast x)$.<br><br>
<b>Nachweis-Rezept:</b> (1) $(V,+_V)$ abelsche Gruppe; (2) $\ast$ ist eine Abbildung $K\times V\to V$ (Abgeschlossenheit!); (3) (a)–(d) nachrechnen – meist koordinaten-/gliedweise.`,
    example: R`<b>1.</b> $\mathbb{R}^2$ über $\mathbb{R}$: (b) für $\lambda=2,\mu=3$, $x=(1,-1)$: $(2+3)\cdot(1,-1) = (5,-5) = (2,-2)+(3,-3)$ ✓.<br>
<b>2.</b> $\mathbb{R}$ als Vektorraum über $\mathbb{Q}$ (Unterkörper, s.u.): $\tfrac12\cdot\pi$ ist ein „Vektor”.<br>
<b>3.</b> $\mathbb{F}_2^3$ über $\mathbb{F}_2$: $\bar 1\cdot(\bar 1,\bar 0,\bar 1) = (\bar 1,\bar 0,\bar 1)$ (Axiom (a)), $(\bar 1+\bar 1)\cdot x = \bar 0\cdot x = 0_V = x+x$ ✓.`,
    counterexample: R`<b>1. (b) verletzt</b> (Stammbach I.3.10, Aufg. 7): $\mathbb{R}^2$ mit gewöhnlicher Addition und $c\ast(x,y) := (cx,y)$. Dann ist $(1+1)\ast(0,1) = (0,1)$, aber $1\ast(0,1)+1\ast(0,1) = (0,2)$.<br>
<b>2. (b) verletzt:</b> $V=\mathbb{R}$, $\lambda\ast x := \lambda^2 x$: $(1+1)\ast 1 = 4\neq 2 = 1\ast 1+1\ast 1$.<br>
<b>3. (a) verletzt:</b> $\lambda\ast x := 0_V$ für alle $\lambda,x$ erfüllt (b)–(d), aber $1\ast x = 0_V\neq x$ für $x\neq 0_V$.<br>
<b>4. Kein Körper:</b> $\mathbb{Z}^2$ „über $\mathbb{Z}$” ist kein Vektorraum im Sinne von Definition 1, weil $\mathbb{Z}$ kein Körper ist.`
  },
  {
    id: "la3_lemma_3_0",
    title: "Lemma 3.0: Rechenregeln in Vektorräumen",
    category: "3a Definition des Vektorraums",
    type: "lemma",
    front: R`Formuliere <b>Lemma 3.0</b> (a)–(d) für einen Vektorraum $(V,+_V,0_V)$ über $(K,+,\cdot,0,1)$ und beweise es.`,
    back: R`<ul><li><b>(a)</b> $\forall x\in V\;(0\cdot x = 0_V)$,</li>
<li><b>(b)</b> $\forall\lambda\in K\;(\lambda\cdot 0_V = 0_V)$,</li>
<li><b>(c)</b> $\forall x\in V\;\big((-1)\cdot x = -x\big)$ [$-1$ Inverses von $1$ in $K$; $-x$ Inverses von $x$ in $V$],</li>
<li><b>(d)</b> $\forall\lambda\in K\;\forall x\in V\;\big(\lambda\cdot x = 0_V\to(\lambda = 0\vee x = 0_V)\big)$.</li></ul>
<b>Beweis (Aufgabe 10).</b> Hilfssatz: $u+_V u = u\Rightarrow u = 0_V$ (addiere $-u$).<br>
(a) $0\cdot x = (0+0)\cdot x\overset{\text{Ax. (b)}}{=}0\cdot x+_V 0\cdot x$ ⇒ Hilfssatz.<br>
(b) $\lambda\cdot 0_V = \lambda\cdot(0_V+_V 0_V)\overset{\text{Ax. (d)}}{=}\lambda\cdot 0_V+_V\lambda\cdot 0_V$ ⇒ Hilfssatz.<br>
(c) $x+_V(-1)\cdot x = 1\cdot x+_V(-1)\cdot x = (1+(-1))\cdot x = 0\cdot x\overset{(a)}{=}0_V$; Inverse sind eindeutig.<br>
(d) Ist $\lambda\neq 0$, so $x = 1\cdot x = (\lambda^{-1}\lambda)\cdot x = \lambda^{-1}\cdot(\lambda\cdot x) = \lambda^{-1}\cdot 0_V\overset{(b)}{=}0_V$.`,
    meta: "Skript: Kap. 3, Lemma 3.0 (Beweis: Aufgabe 10, Serie 2)",
    explanation: R`Das sind die Vektorraum-Versionen von Satz 2.2 (a),(b) und Satz 2.1 (b). Sie sehen „offensichtlich” aus, folgen aber <b>nur</b> aus den Axiomen – das ist der Sinn: In <i>jedem</i> Vektorraum (Polynome, Folgen, Funktionen, Matrizen, $\mathbb{F}_p^n$ …) gelten sie automatisch.<br><br>
<b>Vorsicht mit den zwei Nullen:</b> In (a) steht links die Null $0\in K$, rechts der Nullvektor $0_V$. In (d) gilt die Alternative „Skalar ist $0$ <b>oder</b> Vektor ist $0_V$”.<br><br>
<b>Wo braucht man den Körper?</b> Nur in (d): Man teilt durch $\lambda$. Über einem Ring mit Nullteilern ist (d) falsch – das ist ein Grund, warum lineare Algebra Körper verlangt. (d) ist auch der Grund, warum ein einzelner Vektor $x\neq 0_V$ linear unabhängig ist (Kap. 4).`,
    example: R`<b>In $\mathbb{R}^3$:</b> $0\cdot(4,-1,7) = (0,0,0)$; $\;(-1)\cdot(4,-1,7) = (-4,1,-7)$ ist das additive Inverse.<br>
<b>In $\mathbb{F}_3^2$:</b> $\bar 2\cdot(\bar 1,\bar 2) = (\bar 2,\bar 1)$ und $(\bar 1,\bar 2)+(\bar 2,\bar 1) = (\bar 0,\bar 0)$ – also ist $\bar 2 = -\bar 1$ mal $x$ gleich $-x$, wie (c) sagt.<br>
<b>(d):</b> $\lambda\cdot(3,0) = (0,0)$ in $\mathbb{Q}^2$ erzwingt $3\lambda = 0$, also $\lambda = 0$.`,
    counterexample: R`<b>(d) ohne Körper falsch:</b> In $\mathbb{Z}_6^2$ (mit $\mathbb{Z}_6$-„Skalaren”) ist $\bar 2\cdot(\bar 3,\bar 3) = (\bar 0,\bar 0)$, obwohl $\bar 2\neq\bar 0$ und $(\bar 3,\bar 3)\neq 0$.<br>
<b>(a) mit falscher Null:</b> „$0\cdot x = 0$” ist ohne Index missverständlich: In $V = M_{2\times 2}(\mathbb{R})$ ist $0\cdot\begin{pmatrix}1&2\\3&4\end{pmatrix}$ die <b>Nullmatrix</b>, nicht die Zahl $0$.`
  },
  // ========================================================================
  // 3b BEISPIELE VON KÖRPERN
  // ========================================================================
  {
    id: "la3_bsp_koerper_fp",
    title: "Beispiele von Körpern: ℚ, ℝ, ℂ, 𝔽ₚ, 𝔽₄",
    category: "3b Beispiele von Körpern",
    type: "beispiel",
    front: R`Welche Körper nennt das Skript als Beispiele? Was ist $\mathbb{F}_p$, und welche Grösse haben endliche Körper?`,
    back: R`<b>0.</b> $\mathbb{Q},\mathbb{R},\mathbb{C}$.<br>
<b>1.</b> Für alle Primzahlen $p$ ist $(\mathbb{Z}_p,+_p,\cdot_p,0,1)$ ein Körper (Aufgabe 8); diese Körper bezeichnen wir mit $\mathbb{F}_p$.<br>
<b>2.</b> In Aufgabe 9 wurde der Körper $\mathbb{F}_4$ mit 4 Elementen konstruiert.<br>
[Endliche Körper sind immer von der Form $\mathbb{F}_{p^n}$ für $p$ prim und $n\in\mathbb{N}_{>0}$.]<br>
<b>3.</b> Es gibt Körper zwischen $\mathbb{Q}$ und $\mathbb{R}$, z.B. $\mathbb{Q}(\sqrt 2)$ (nächste Karte); ähnlich $\mathbb{Q}(\sqrt n)$ für $n\in\mathbb{N}$.`,
    meta: "Skript: Kap. 3, Beispiele von Körpern 0.–3.; Serie 1, Aufgaben 8, 9",
    explanation: R`Lineare Algebra funktioniert über <b>jedem</b> Körper – nicht nur über $\mathbb{R}$. Endliche Körper sind besonders lehrreich, weil man alles von Hand nachzählen kann (z.B. hat $\mathbb{F}_p^n$ genau $p^n$ Vektoren, Serie 2).<br><br>
<b>Warum $p^n$?</b> Ein endlicher Körper $L$ enthält $\mathbb{F}_p$ (die Vielfachen von $1$) für ein primes $p$ und ist ein <b>Vektorraum über $\mathbb{F}_p$</b> (Unterkörper-Beispiel). Hat er die Dimension $n$, so hat er $p^n$ Elemente (jeder Vektor hat $n$ Koordinaten mit je $p$ Möglichkeiten). Deshalb gibt es keinen Körper mit 6 oder 10 Elementen.<br><br>
<b>Unterschied $\mathbb{Z}_4$ vs. $\mathbb{F}_4$:</b> Beide haben 4 Elemente, aber nur $\mathbb{F}_4$ ist ein Körper.`,
    example: R`<b>$\mathbb{F}_3$:</b> Tafel der Multiplikation: $\bar 1\cdot\bar 1 = \bar 1$, $\bar 1\cdot\bar 2 = \bar 2$, $\bar 2\cdot\bar 2 = \bar 4 = \bar 1$ – also $\bar 2^{-1} = \bar 2$.<br>
<b>$\mathbb{F}_4 = \{0,1,a,b\}$</b> als VR über $\mathbb{F}_2$ mit Basis $\{1,a\}$: $b = 1+a$, also $4 = 2^2$ Elemente.<br>
<b>$\mathbb{F}_{11}$:</b> $\bar 7^{-1} = \bar 8$, da $56 = 5\cdot 11+1$.`,
    counterexample: R`<b>1.</b> $\mathbb{Z}_4,\mathbb{Z}_6,\mathbb{Z}_9$ sind keine Körper ($\bar 3\cdot\bar 3 = \bar 0$ in $\mathbb{Z}_9$).<br>
<b>2.</b> Es gibt <b>keinen</b> Körper mit $6$ Elementen ($6$ ist keine Primzahlpotenz).<br>
<b>3.</b> $\mathbb{Z}$ und $\mathbb{N}$ sind keine Körper; $\{a+b\sqrt[3]{2}: a,b\in\mathbb{Q}\}$ ist nicht einmal abgeschlossen unter „$\cdot$”: $\sqrt[3]2\cdot\sqrt[3]2 = \sqrt[3]4$ liegt nicht darin.`
  },
  {
    id: "la3_q_wurzel2",
    title: "Behauptung: ℚ(√2) ist ein Körper",
    category: "3b Beispiele von Körpern",
    type: "proposition",
    front: R`Zeige: $\mathbb{Q}(\sqrt 2) := \{a+b\cdot\sqrt 2: a,b\in\mathbb{Q}\}$ ist mit der Addition und Multiplikation von $\mathbb{R}$ ein <b>Körper</b>. Wie lautet das multiplikative Inverse?`,
    back: R`Weil $(\mathbb{R},+,\cdot,0,1)$ ein Körper ist, genügt es zu zeigen, dass Addition und Multiplikation <b>Operationen auf $\mathbb{Q}(\sqrt 2)$</b> sind und die <b>Inversen</b> wieder in $\mathbb{Q}(\sqrt 2)$ liegen (Neutralelemente $0 = 0+0\sqrt 2$, $1 = 1+0\sqrt 2$).<br>
<b>Addition:</b> $(a_1+b_1\sqrt 2)+(a_2+b_2\sqrt 2) = (a_1+a_2)+(b_1+b_2)\sqrt 2$.<br>
<b>Multiplikation:</b> $(a_1+b_1\sqrt 2)(a_2+b_2\sqrt 2) = \underbrace{(a_1a_2+2b_1b_2)}_{\in\mathbb{Q}}+\underbrace{(a_1b_2+b_1a_2)}_{\in\mathbb{Q}}\sqrt 2$.<br>
<b>Additiv invers:</b> $(-a)+(-b)\sqrt 2$.<br>
<b>Multiplikativ invers</b> ($a\neq 0$ oder $b\neq 0$):
$$(a+b\sqrt 2)\cdot\Big(\frac{a}{a^2-2b^2}+\frac{-b}{a^2-2b^2}\sqrt 2\Big) = \frac{a^2-2b^2}{a^2-2b^2} = 1.$$
<b>Bem.:</b> $a^2-2b^2 = 0$ wäre nur möglich für $\tfrac ab = \pm\sqrt 2$ oder $a=b=0$; ersteres ist unmöglich, weil $\tfrac ab\in\mathbb{Q}$.`,
    meta: "Skript: Kap. 3, Beispiele von Körpern 3., Behauptung mit Beweis",
    explanation: R`<b>Idee des Inversen:</b> wie beim „Nenner rational machen”: $\dfrac{1}{a+b\sqrt 2} = \dfrac{a-b\sqrt 2}{(a+b\sqrt 2)(a-b\sqrt 2)} = \dfrac{a-b\sqrt 2}{a^2-2b^2}$. Der Nenner ist rational – und <b>nie $0$</b>, genau weil $\sqrt 2\notin\mathbb{Q}$ (Kapitel 1).<br><br>
<b>Unterkörper-Trick:</b> Man muss nicht alle Körperaxiome neu prüfen: Assoziativität, Kommutativität, Distributivität werden von $\mathbb{R}$ geerbt. Zu prüfen ist nur „bleibt drin” – dasselbe Muster wie Fib $\subseteq S$ (Serie 0) und später das Unterraumkriterium.<br><br>
$\mathbb{Q}(\sqrt 2)$ ist ein <b>2-dimensionaler Vektorraum über $\mathbb{Q}$</b> mit Basis $\{1,\sqrt 2\}$ – und Serie 3, Aufgabe 19 zeigt, wie die Wahl des Grundkörpers ($\mathbb{Q}$, $\mathbb{Q}(\sqrt 2)$, $\mathbb{Q}(\sqrt 3)$, $\mathbb{Q}(\sqrt 6)$) Basen und Dimension ändert.`,
    example: R`<b>1.</b> $(1+2\sqrt 2)^{-1}$: $a^2-2b^2 = 1-8 = -7$, also $(1+2\sqrt 2)^{-1} = -\tfrac17+\tfrac27\sqrt 2$. Probe: $(1+2\sqrt 2)(-\tfrac17+\tfrac27\sqrt 2) = -\tfrac17+\tfrac27\sqrt2-\tfrac27\sqrt 2+\tfrac87 = 1$ ✓.<br>
<b>2.</b> $(3+2\sqrt 2)^{-1} = 3-2\sqrt 2$, da $9-8 = 1$.<br>
<b>3.</b> $(1+\sqrt 2)(3-\sqrt 2) = (3-2)+(-1+3)\sqrt 2 = 1+2\sqrt 2$.`,
    counterexample: R`<b>1.</b> $\{a+b\sqrt[3]2: a,b\in\mathbb{Q}\}$ ist kein Körper (nicht abgeschlossen: $\sqrt[3]2^2 = \sqrt[3]4$).<br>
<b>2.</b> $\{a+b\sqrt 2: a,b\in\mathbb{Z}\}$ ist ein Ring, aber kein Körper: $2^{-1} = \tfrac12\notin$, während $(1+\sqrt 2)^{-1} = -1+\sqrt 2$ zufällig drin liegt.<br>
<b>3.</b> $\mathbb{Q}(\sqrt 4) = \mathbb{Q}$ – dort ist $a^2-4b^2 = 0$ für $(a,b) = (2,1)$ möglich; die Formel fürs Inverse ist dann nicht anwendbar, weil $\sqrt 4 = 2$ rational ist.`
  },
  // ========================================================================
  // 3c BEISPIELE VON VEKTORRÄUMEN
  // ========================================================================
  {
    id: "la3_bsp_nullraum_unterkoerper",
    title: "Vektorraum-Beispiele 0. und 1.: Nullraum und Unterkörper",
    category: "3c Beispiele von Vektorräumen",
    type: "beispiel",
    front: R`Warum ist der <b>Nullraum</b> ein Vektorraum über jedem Körper, und warum ist ein Körper $L$ ein Vektorraum über jedem <b>Unterkörper</b> $K\subseteq L$?`,
    back: R`<b>0.</b> $V = \{0_V\}$, der <b>Nullraum</b>, ist ein Vektorraum (VR) über jedem Körper ($\lambda\cdot 0_V := 0_V$; alle Axiome gelten trivial).<br>
<b>1.</b> Ist $K$ ein <b>Unterkörper</b> von $L$ (d.h. $K\subseteq L$ mit denselben Operationen), so ist $L$ ein VR über $K$: Für $\lambda\in K$ und $x\in L$ ist $\lambda\ast x := \lambda\cdot x$ (Multiplikation in $L$).<br>
Bsp.: $\mathbb{Q}(\sqrt 2)$ ist ein VR über $\mathbb{Q}$; $K$ ist ein VR über $K$.`,
    meta: "Skript: Kap. 3, Vektorräume 0. und 1.",
    explanation: R`<b>Nullraum:</b> Der kleinstmögliche Vektorraum. Er ist wichtig als „Randfall”: Seine Basis ist $\emptyset$ (Kap. 4), seine Dimension $0$, und er ist $K^0$. Er ist auch der kleinste Unterraum jedes VR ($\{0_V\}$, triviale Unterräume).<br><br>
<b>Unterkörper:</b> Die Vektorraumaxiome (a)–(d) sind hier einfach Körperaxiome von $L$ (Assoziativität, Distributivität, $1\cdot x = x$), eingeschränkt auf Skalare aus $K$. Man „vergisst”, dass man in $L$ auch durch Elemente von $L\setminus K$ teilen könnte. Dieselbe Menge kann so über verschiedenen Körpern verschiedene Dimensionen haben: $\mathbb{C}$ hat über $\mathbb{C}$ die Dimension $1$, über $\mathbb{R}$ die Dimension $2$ (Basis $\{1,i\}$), über $\mathbb{Q}$ unendliche Dimension.`,
    example: R`<b>1.</b> $\mathbb{Q}(\sqrt 2)$ über $\mathbb{Q}$: der „Vektor” $3-5\sqrt 2 = 3\cdot 1+(-5)\cdot\sqrt 2$ hat die „Koordinaten” $(3,-5)$ bzgl. $\{1,\sqrt 2\}$.<br>
<b>2.</b> $\mathbb{C}$ über $\mathbb{R}$: $2+3i = 2\cdot 1+3\cdot i$.<br>
<b>3.</b> $\mathbb{F}_4$ über $\mathbb{F}_2$: $b = 1\cdot 1+1\cdot a$.`,
    counterexample: R`<b>1. Kein Unterkörper:</b> $\mathbb{Q}$ ist <i>kein</i> VR über $\mathbb{R}$ mit der gewöhnlichen Multiplikation: $\sqrt 2\cdot 1 = \sqrt 2\notin\mathbb{Q}$ – die Skalarmultiplikation führt aus $V$ heraus.<br>
<b>2.</b> $\mathbb{Z}$ ist kein VR über $\mathbb{Q}$: $\tfrac12\cdot 1\notin\mathbb{Z}$.<br>
<b>3.</b> $\{0_V,x\}$ mit $x\neq 0_V$ ist in $\mathbb{R}^2$ kein VR: $2\cdot x\notin\{0_V,x\}$.`
  },
  {
    id: "la3_bsp_kn",
    title: "Vektorraum-Beispiel 2.: Der Koordinatenraum Kⁿ",
    category: "3c Beispiele von Vektorräumen",
    type: "beispiel",
    front: R`Wie ist der <b>Koordinatenraum $K^n$</b> definiert? Was sind $K^0$ und $K^1$?`,
    back: R`Sei $(K,+,\cdot,0,1)$ ein Körper und $n\in\mathbb{N}$. Dann ist
$$K^n := \underbrace{K\times\dots\times K}_{n\text{-mal}} = \{(a_1,\dots,a_n): a_i\in K\text{ für }1\le i\le n\}$$
(n-Tupel, als Zeilenvektor geschrieben). Mit
$$(a_1,\dots,a_n)+_{K^n}(b_1,\dots,b_n) := (a_1+b_1,\dots,a_n+b_n),\qquad\lambda\cdot(a_1,\dots,a_n) := (\lambda a_1,\dots,\lambda a_n)$$
ist $K^n$ ein VR über $K$, der <b>$n$-dimensionale Koordinatenraum</b>.<br>
<b>Bem.:</b> $K^0$ ist der Nullraum; $K^1$ ist der VR $K$ über $K$. Später schreiben wir die Vektoren von $K^n$ als <b>Spaltenvektoren</b> $\begin{pmatrix}a_1\\\vdots\\a_n\end{pmatrix}$.`,
    meta: "Skript: Kap. 3, Vektorräume 2.; Serie 0, Aufgabe 2",
    explanation: R`$K^n$ ist <b>der</b> Modell-Vektorraum: Satz 7.3 zeigt, dass jeder $n$-dimensionale VR über $K$ isomorph zu $K^n$ ist (Koordinaten bzgl. einer Basis). Alles wird <b>komponentenweise</b> erledigt, und alle Axiome werden komponentenweise aus dem Körper geerbt (genau wie in Serie 0, Aufgabe 2 für $\mathbb{Z}^4$).<br><br>
<b>Zeile oder Spalte?</b> Inhaltlich egal. Spaltenvektoren sind praktisch, sobald man Matrizen von links multipliziert: $A_\varphi\cdot x = \varphi(x)$ (Kap. 7). Funktionale werden dann zu Zeilenvektoren (Kap. 6/9).<br><br>
<b>Geometrie</b> (Stammbach I.2): $\mathbb{R}^3$ entspricht den Pfeilen im Anschauungsraum nach Wahl eines Koordinatensystems.`,
    example: R`<b>1.</b> In $\mathbb{R}^3$: $2\cdot(1,0,-3)+(4,1,1) = (6,1,-5)$.<br>
<b>2.</b> In $\mathbb{F}_5^2$: $\bar 3\cdot(\bar 2,\bar 4)+(\bar 1,\bar 1) = (\bar 6,\overline{12})+(\bar 1,\bar 1) = (\bar 2,\bar 3)$.<br>
<b>3.</b> $K^1 = K$: In $\mathbb{Q}^1$ ist „Vektor” $\tfrac34$, „Skalarmultiplikation” $2\cdot\tfrac34 = \tfrac32$.`,
    counterexample: R`<b>1.</b> Mit „komponentenweiser” Multiplikation $(a_1,a_2)\cdot(b_1,b_2) := (a_1b_1,a_2b_2)$ wird $\mathbb{R}^2$ <b>kein Körper</b>: $(1,0)\cdot(0,1) = (0,0)$ (Nullteiler) – Vektoren multipliziert man in der LA nicht miteinander.<br>
<b>2.</b> $\{(a_1,a_2)\in\mathbb{R}^2: a_1\ge 0\}$ mit den $\mathbb{R}^2$-Operationen ist kein VR: $(-1)\cdot(2,0) = (-2,0)$ liegt nicht darin.`
  },
  {
    id: "la3_bsp_matrizen",
    title: "Vektorraum-Beispiel 3.: Die m × n-Matrizen M_{m×n}(K) – Indexkonvention",
    category: "3c Beispiele von Vektorräumen",
    type: "beispiel",
    front: R`Wie notiert das Skript die Einträge einer $(m\times n)$-Matrix $A\in M_{m\times n}(K)$ (welcher Index ist oben, welcher unten)? Wie werden Matrizen addiert und mit Skalaren multipliziert?`,
    back: R`Ist $K$ ein Körper und $m,n\in\mathbb{N}_{>0}$, so ist $M_{m\times n}(K)$ die Menge aller $m\times n$-Matrizen mit Einträgen in $K$:
$$A = \begin{pmatrix}a_1^1&a_1^2&\cdots&a_1^n\\a_2^1&a_2^2&\cdots&a_2^n\\\vdots&&\ddots&\vdots\\a_m^1&\cdots&\cdots&a_m^n\end{pmatrix}\quad(m\text{ Zeilen},\;n\text{ Spalten}),$$
$$a_i^j\quad\text{mit}\quad j = \text{Spaltennummer (oben)},\quad i = \text{Zeilennummer (unten)}.$$
Eine Zeile ist ein Zeilenvektor aus $K^n$, eine Spalte ein Spaltenvektor aus $K^m$. (Andere Notation: $a_{ij}$, $i$ = Zeile, $j$ = Spalte.)<br>
Addition und Skalarmultiplikation <b>eintragsweise</b> wie in $K^n$: $\lambda\cdot A = (\lambda\cdot a_i^j)$.`,
    meta: "Skript: Kap. 3, Vektorräume 3.; Serie 7, Aufgabe 30",
    explanation: R`<b>Merkregel des Skripts:</b> Der <b>obere</b> Index zählt die <b>Spalten</b>, der <b>untere</b> die <b>Zeilen</b>. Das passt zur Darstellungsmatrix (Kap. 7): In der $j$-ten Spalte von $A_\varphi$ stehen die Koordinaten $\mu_1^j,\dots,\mu_m^j$ des Bildvektors $\varphi(x_j)$ – der obere Index $j$ sagt, <b>welcher</b> Basisvektor abgebildet wurde, der untere $i$, <b>welche</b> Koordinate.<br><br>
Später (Kap. 8) schreibt man kurz $(\alpha_i^j)_m^n$ für die $(m\times n)$-Matrix; ist $n=1$ bzw. $m=1$, lässt man $n,j$ bzw. $m,i$ weg: $(\lambda_i)_m$ = Spaltenvektor, $(\mu^j)^n$ = Zeilenvektor.<br><br>
Als Vektorraum ist $M_{m\times n}(K)$ „nur” $K^{mn}$ in rechteckiger Anordnung – die Dimension ist $m\cdot n$ (Satz 7.6). Die interessante Struktur (Matrixmultiplikation) kommt erst in Kap. 7.`,
    example: R`$A = \begin{pmatrix}1&2&3\\4&5&6\end{pmatrix}\in M_{2\times 3}(\mathbb{R})$: $m=2$ Zeilen, $n=3$ Spalten.<br>
$a_2^1 = 4$ (Zeile 2, Spalte 1), $a_1^3 = 3$ (Zeile 1, Spalte 3), $a_2^3 = 6$.<br>
$2\cdot A+\begin{pmatrix}0&-4&1\\0&0&-12\end{pmatrix} = \begin{pmatrix}2&0&7\\8&10&0\end{pmatrix}$.`,
    counterexample: R`<b>Indexverwechslung:</b> Im Beispiel ist $a_1^2 = 2$, aber $a_2^1 = 4$ – vertauscht man oben/unten, liest man die <b>transponierte</b> Matrix (Kap. 9).<br>
<b>Nicht addierbar:</b> Eine $2\times 3$- und eine $3\times 2$-Matrix kann man nicht addieren (verschiedene Vektorräume), obwohl beide 6 Einträge haben.`
  },
  {
    id: "la3_bsp_folgenraum",
    title: "Vektorraum-Beispiel 4.: Der Folgenraum S(K)",
    category: "3c Beispiele von Vektorräumen",
    type: "beispiel",
    front: R`Wie ist der <b>Folgenraum $S(K)$</b> definiert, und warum ist er ein Vektorraum?`,
    back: R`Sei $S(K)$ die Menge aller unendlichen Folgen $(a_0,\dots,a_n,\dots)$ (für $n\in\mathbb{N}$) mit Elementen aus $K$ und $+_S$ gliedweise definiert (wie in Aufgabe 3):
$$(a_0,a_1,\dots)+_S(b_0,b_1,\dots) := (a_0+b_0,a_1+b_1,\dots).$$
Mit $\lambda\cdot(a_0,a_1,\dots) := (\lambda\cdot a_0,\lambda\cdot a_1,\dots)$ für $\lambda\in K$ ist $S(K)$ ein VR über $K$ (vgl. Aufgabe 11). Alle Axiome gelten gliedweise.`,
    meta: "Skript: Kap. 3, Vektorräume 4.; Serie 0, Aufgabe 3; Serie 2, Aufgabe 11",
    explanation: R`$S(K)$ ist „$K^n$ mit $n=\infty$”: Eine Folge ist eine Funktion $\mathbb{N}\to K$, und mit punktweisen Operationen bilden alle Funktionen $M\to K$ einen VR (Serie 2, Bemerkung zu Aufgabe 14).<br><br>
<b>Wichtiger Unterschied zu $K^n$:</b> Die „Einheitsfolgen” $e_i = (0,\dots,0,1,0,\dots)$ sind linear unabhängig, aber <b>keine Basis</b> von $S(K)$: Linearkombinationen sind <b>immer endlich</b>, und $(1,1,1,\dots)$ ist keine endliche Linearkombination der $e_i$ (Kap. 4, Beispiel 3). Die $e_i$ spannen nur $c_{00}$ auf (Folgen mit endlich vielen Einträgen $\neq 0$, Serie 6).<br><br>
Viele interessante Unterräume: Fib (Fibonacci-Rekursion, Dimension 2), konvergente Folgen, Nullfolgen (Stammbach I.3.2).`,
    example: R`$(1,2,3,4,\dots)+(-1,0,1,2,\dots) = (0,2,4,6,\dots)$; $\;\tfrac12\cdot(2,4,8,16,\dots) = (1,2,4,8,\dots)$.<br>
Unterraum Fib $\subseteq S(\mathbb{R})$: $(0,1,1,2,3,\dots)$ und $(2,1,3,4,7,\dots)$ liegen darin, ihre Summe $(2,2,4,6,10,\dots)$ auch ($4 = 2+2$, $6 = 4+2$, $10 = 6+4$ ✓).`,
    counterexample: R`<b>1.</b> Folgen mit $a_0 = 1$: kein VR (die Nullfolge fehlt; $(1,0,\dots)+(1,0,\dots) = (2,0,\dots)$ fällt heraus).<br>
<b>2.</b> Folgen mit nur nichtnegativen Gliedern: kein VR, $(-1)\cdot(1,1,\dots)$ fällt heraus.<br>
<b>3.</b> „Basis aus $e_i$” scheitert: $(1,1,1,\dots)\neq\sum_{i=0}^{N}\lambda_i e_i$ für jedes endliche $N$, denn rechts ist das Glied $N+1$ gleich $0$.`
  },
  {
    id: "la3_s2_a11_a14",
    title: "Serie 2, Aufgaben 11 & 14: Fib und der Funktionenraum ℝ^ℝ",
    category: "3c Beispiele von Vektorräumen",
    type: "aufgabe",
    front: R`Zeige: (a) $\mathrm{Fib}$ ist ein Vektorraum über $\mathbb{R}$; (b) die Menge $V$ aller Funktionen $f:\mathbb{R}\to\mathbb{R}$ mit $(f+g)(x) := f(x)+g(x)$ ist ein Vektorraum über $\mathbb{R}$.`,
    back: R`<b>(a) Fib:</b> $(\mathrm{Fib},+)$ ist abelsche Gruppe (Aufgabe 3(b)). Skalarmultiplikation gliedweise $\lambda\cdot(f_n) := (\lambda f_n)$. Sie bleibt in Fib: $\lambda f_{i+2} = \lambda(f_{i+1}+f_i) = \lambda f_{i+1}+\lambda f_i$. Die Axiome (a)–(d) gelten gliedweise in $\mathbb{R}$.<br><br>
<b>(b) Funktionen:</b> $(\lambda\cdot f)(x) := \lambda\cdot f(x)$. Gruppe: Nullfunktion $0_V(x) = 0$ neutral, $(-f)(x) := -f(x)$ invers; Assoziativität und Kommutativität punktweise. Axiome punktweise:
$$\lambda(f(x)+g(x)) = \lambda f(x)+\lambda g(x),\;(\lambda+\mu)f(x) = \lambda f(x)+\mu f(x),\;(\lambda\mu)f(x) = \lambda(\mu f(x)),\;1\cdot f(x) = f(x).$$
Zwei Funktionen sind gleich, wenn sie an jeder Stelle übereinstimmen – also gelten die Axiome in $V$.`,
    meta: "Serie 2, Aufgaben 11 und 14 (Musterlösung mit Bemerkungen)",
    explanation: R`<b>Das Prinzip „punktweise erben”:</b> Ist $W$ ein VR und $M$ eine beliebige Menge, so ist die Menge aller Funktionen $M\to W$ mit punktweisen Operationen ein VR. Folgen ($M = \mathbb{N}$), Funktionen ($M = \mathbb{R}$), Tupel ($M = \{1,\dots,n\}$), Matrizen ($M = \{1,\dots,m\}\times\{1,\dots,n\}$) sind alles Spezialfälle!<br><br>
<b>Bei Fib</b> kommt nur ein Schritt dazu: Die Teilmenge muss unter den Operationen <b>abgeschlossen</b> sein. Das klappt, weil die Rekursion <b>linear und homogen</b> ist. (In Kap. 5: Fib ist ein Unterraum von $S(\mathbb{R})$.)<br><br>
<b>Ausblick:</b> Fib hat Dimension 2 (Serie 3, Aufgabe 17), weil eine Fibonacci-Folge durch $(f_0,f_1)$ festgelegt ist.`,
    example: R`<b>Fib:</b> $3\cdot(1,0,1,1,2,3,\dots) = (3,0,3,3,6,9,\dots)$ – wieder Fibonacci-artig ($6 = 3+3$, $9 = 6+3$).<br>
<b>Funktionen:</b> $f(x) = x^2$, $g(x) = \sin x$: $(2f+g)(\pi) = 2\pi^2+0 = 2\pi^2$; $\;(f+(-f))(3) = 9-9 = 0 = 0_V(3)$.`,
    counterexample: R`<b>1.</b> $\{f:\mathbb{R}\to\mathbb{R}: f(0) = 1\}$ ist kein VR: $0_V(0) = 0\neq 1$, und $(f+g)(0) = 2$.<br>
<b>2.</b> $\{f: f(x)\ge 0\;\forall x\}$ ist keine Gruppe: zu $f(x) = x^2$ fehlt $-f$.<br>
<b>3.</b> Folgen mit $f_{i+2} = f_{i+1}\cdot f_i$: $(1,2,2,4,8,\dots)$ erfüllt sie, aber $2\cdot$ davon $= (2,4,4,8,\dots)$ nicht: Das dritte Glied ist $4\neq 4\cdot 2 = 8$ – nicht abgeschlossen unter Skalarmultiplikation.`
  },
  {
    id: "la3_s2_a12_qx",
    title: "Serie 2, Aufgabe 12: ℚ[X] ist ein Vektorraum über ℚ",
    category: "3c Beispiele von Vektorräumen",
    type: "aufgabe",
    front: R`Zeige, dass $\mathbb{Q}[X]$ (Polynome mit rationalen Koeffizienten) mit der Polynomaddition und $\lambda\cdot p := \sum_{i\ge 0}(\lambda a_i)X^i$ ein Vektorraum über $\mathbb{Q}$ ist. Wie hängt das mit der Ringstruktur zusammen?`,
    back: R`Schreibe $p = \sum_{i\ge 0}a_iX^i$ mit $a_i\in\mathbb{Q}$ und $a_i = 0$ für fast alle $i$. $(\mathbb{Q}[X],+)$ ist eine abelsche Gruppe (Aufgabe 7(a)).<br>
<b>Skalarmultiplikation bleibt in $\mathbb{Q}[X]$:</b> Ist $a_i = 0$ für $i\gt n$, so auch $\lambda a_i = 0$; und $\lambda a_i\in\mathbb{Q}$.<br>
<b>Axiome koeffizientenweise:</b> $\lambda(a_k+b_k) = \lambda a_k+\lambda b_k$, $(\lambda+\mu)a_k = \lambda a_k+\mu a_k$, $(\lambda\mu)a_k = \lambda(\mu a_k)$, $1\cdot a_k = a_k$.<br><br>
<b>Bemerkung:</b> Fasst man $\lambda$ als konstantes Polynom auf, so ist $(\lambda\cdot p)_k = \sum_{i+j=k}e_ia_j = \lambda a_k$ – die Skalarmultiplikation ist die Ringmultiplikation mit Konstanten. Das macht $\mathbb{Q}[X]$ zu einer <b>Algebra über $\mathbb{Q}$</b>.`,
    meta: "Serie 2, Aufgabe 12; Skript: Kap. 4, Beispiel 2 (Basis {Xⁱ})",
    explanation: R`Als <b>Vektorraum</b> „vergisst” man, dass man Polynome auch miteinander multiplizieren kann – man benutzt nur Addition und Vielfache. Dann ist ein Polynom einfach seine <b>Koeffizientenliste</b> $(a_0,a_1,a_2,\dots)$ mit nur endlich vielen Einträgen $\neq 0$ – also ein Element von $c_{00}(\mathbb{Q})$.<br><br>
<b>Basis</b> (Kap. 4): $\{X^i: i\in\mathbb{N}\}$ mit $X^0 := 1$; $\mathbb{Q}[X]$ ist unendlich-dimensional. Andere Basen: die Polynome $x_n = 1+(n+1)\sum_{i=1}^n X^i$ aus Serie 3, Aufgabe 18, oder Lagrange-Polynome für Polynome vom Grad $\le n$ (Kap. 8).<br><br>
Der Unterraum der Polynome vom Grad $\le n$ hat die Dimension $n+1$ (Basis $1,X,\dots,X^n$).`,
    example: R`$p = 1-\tfrac12X+3X^3$, $q = 2+X-X^3$: $\;p+2q = 5+\tfrac32X+X^3$.<br>
Als Koeffizientenvektoren: $(1,-\tfrac12,0,3,0,\dots)+2\cdot(2,1,0,-1,0,\dots) = (5,\tfrac32,0,1,0,\dots)$.`,
    counterexample: R`<b>1.</b> Die Polynome vom Grad <b>genau</b> $2$ bilden keinen VR: $(X^2+X)+(-X^2) = X$ hat Grad 1; ausserdem fehlt das Nullpolynom.<br>
<b>2.</b> $\mathbb{Z}[X]$ ist kein VR über $\mathbb{Q}$: $\tfrac12\cdot X\notin\mathbb{Z}[X]$.<br>
<b>3.</b> „Polynom” vs. „Polynomfunktion” über $\mathbb{F}_2$: $X^2+X\neq 0$ als Polynom, aber als Funktion $\mathbb{F}_2\to\mathbb{F}_2$ ist $x^2+x = 0$ für $x = \bar 0,\bar 1$ – im Vektorraum $\mathbb{F}_2[X]$ zählen die Koeffizienten.`
  },
  {
    id: "la3_s2_a13_zpn",
    title: "Serie 2, Aufgabe 13: Der endliche Vektorraum ℤₚⁿ",
    category: "3c Beispiele von Vektorräumen",
    type: "aufgabe",
    front: R`(a) Wie viele Elemente hat der Vektorraum $\mathbb{Z}_p^n$ über $\mathbb{Z}_p$? (b) Berechne für $p = 11$, $n = 11$: $\bar 7\cdot(\bar 0,\bar 1,\bar 2,\dots,\overline{10})$.`,
    back: R`<b>(a)</b> $|\mathbb{Z}_p^n| = p^n$: Es ist $|\mathbb{Z}_p| = p$ (jedes Element hat genau einen Repräsentanten $0\le k\lt p$), und jede der $n$ Komponenten kann unabhängig einen der $p$ Werte annehmen: $p\cdot p\cdots p = p^n$.<br>
<b>(b)</b> Komponentenweise mit $\cdot_{11}$:
$$\bar 7\cdot(\bar 0,\bar 1,\bar 2,\bar 3,\bar 4,\bar 5,\bar 6,\bar 7,\bar 8,\bar 9,\overline{10}) = (\bar 0,\bar 7,\bar 3,\overline{10},\bar 6,\bar 2,\bar 9,\bar 5,\bar 1,\bar 8,\bar 4).$$`,
    meta: "Serie 2, Aufgabe 13",
    explanation: R`Für die Anzahl spielen die Operationen keine Rolle – es ist reines Abzählen von $n$-Tupeln. Spannender ist (b): Die Multiplikation mit $\bar 7\neq\bar 0$ <b>permutiert</b> die Elemente von $\mathbb{Z}_{11}$ – jedes kommt genau einmal vor. Das ist genau die Injektivität von $x\mapsto 7x$ in einem Körper (Schubfach-Argument aus Kap. 1 und Serie 1, 8(d)); insbesondere taucht $\bar 1$ auf (an Position $\bar 8$), also $\bar 7^{-1} = \bar 8$.<br><br>
<b>Ausblick:</b> $\mathbb{Z}_p^n$ hat Dimension $n$; ein $k$-dimensionaler Unterraum hat genau $p^k$ Elemente. So kann man Unterräume endlicher VR sogar zählen.`,
    example: R`<b>$\mathbb{Z}_2^3$</b> hat $2^3 = 8$ Vektoren: $(\bar 0,\bar 0,\bar 0),(\bar 1,\bar 0,\bar 0),\dots,(\bar 1,\bar 1,\bar 1)$.<br>
Probe zu (b): $7\cdot 3 = 21 = 11+10\Rightarrow\overline{10}$; $\;7\cdot 8 = 56 = 5\cdot 11+1\Rightarrow\bar 1$; $\;7\cdot 10 = 70 = 6\cdot 11+4\Rightarrow\bar 4$ ✓.`,
    counterexample: R`<b>Kein Körper, keine Permutation:</b> In $\mathbb{Z}_{12}$ liefert $\bar 4\cdot(\bar 0,\bar 1,\dots,\overline{11}) = (\bar 0,\bar 4,\bar 8,\bar 0,\bar 4,\bar 8,\dots)$ – nur 3 verschiedene Werte, $\bar 1$ kommt nie vor ($\bar 4$ hat kein Inverses). $\mathbb{Z}_{12}^n$ ist deshalb kein Vektorraum im Sinne von Definition 1.`
  }
];
})();
