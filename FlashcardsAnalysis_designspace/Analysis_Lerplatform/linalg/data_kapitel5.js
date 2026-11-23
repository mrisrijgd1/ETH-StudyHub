/* ==========================================================================
   LINEARE ALGEBRA I – KAPITEL 5: Unterräume, affine Räume, und Quotientenräume
   (Lemma 5.0–5.6) + Serie 5 (Aufgaben 24, 25)
   Lineare Algebra I – Prof. Dr. Lorenz Halbeisen, HS 2026
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_KAPITEL_5 = [
  // ========================================================================
  // 5a UNTERRÄUME
  // ========================================================================
  {
    id: "la5_def_unterraum",
    title: "Definition: Unterraum (linearer Unterraum, Untervektorraum)",
    category: "5a Unterräume",
    type: "definition",
    front: R`Wann ist eine Teilmenge $W\subseteq V$ eines VR $(V,+_V)$ über $K$ ein <b>Unterraum</b>? Was sind die trivialen Unterräume?`,
    back: R`Sei $(V,+_V)$ ein VR über $K$ mit Skalarmultiplikation $\ast$ und $W\subseteq V$ eine Teilmenge. Dann ist $W$ ein <b>Unterraum</b> von $V$ [genauer: linearer Unterraum oder Untervektorraum], wenn gilt:
<ul><li><b>(i)</b> $+_V$ ist eine binäre Operation auf $W$,</li>
<li><b>(ii)</b> $(W,+_V)$ ist ein VR über $K$ mit Skalarmultiplikation $\ast$.</li></ul>
<b>Bsp. 0:</b> Für jeden VR $V$ sind $\{0_V\}\subseteq V$ und $V\subseteq V$ Unterräume – die <b>trivialen</b> Unterräume.`,
    meta: "Skript: Kap. 5, Definition Unterraum, Bsp. 0",
    explanation: R`Ein Unterraum ist ein VR, der <b>in einem grösseren VR lebt</b> und dessen Operationen benutzt. Geometrisch: Geraden und Ebenen <b>durch den Ursprung</b>.<br><br>
<b>Was muss man wirklich prüfen?</b> Die „Für-alle”-Axiome (Assoziativität, Distributivität, …) werden von $V$ geerbt. Zu prüfen bleibt nur, dass man beim Rechnen <b>in $W$ bleibt</b>: Summen, Vielfache – und damit auch $0_V = 0\cdot x$ und $-x = (-1)\cdot x$ (Lemma 3.0). Das fasst Lemma 5.0 elegant zusammen: $W$ ist UR ⟺ $\langle W\rangle = W$ (Aufgabe 20(a)).<br><br>
<b>Schnelltest:</b> Liegt $0_V$ nicht in $W$, ist $W$ sicher kein Unterraum. (Das ist notwendig, aber nicht hinreichend!)`,
    example: R`<b>1.</b> $\{(x,y,z)\in\mathbb{R}^3: x-y-z = 0\}$ (Ebene durch $0$): $(2,1,1)+(1,1,0) = (3,2,1)$, und $3-2-1 = 0$ ✓; $5\cdot(2,1,1) = (10,5,5)$, $10-5-5 = 0$ ✓.<br>
<b>2.</b> Fib ist ein Unterraum von $S(\mathbb{R})$; die Polynome vom Grad $\le 2$ sind ein Unterraum von $\mathbb{Q}[X]$.<br>
<b>3.</b> Lösungsmenge eines homogenen LGS, z.B. $\{x\in\mathbb{R}^3: x_1+2x_2 = 0\}$.`,
    counterexample: R`<b>1.</b> $\{(x,y): x+y = 1\}$: $(0,0)$ fehlt (affiner Raum, kein UR).<br>
<b>2.</b> $\{(x,y): xy\ge 0\}$ (1. und 3. Quadrant samt Achsen): enthält $0$ und alle Vielfachen, aber $(2,1)+(-1,-2) = (1,-1)$ hat $xy = -1\lt 0$ – nicht abgeschlossen unter $+$.<br>
<b>3.</b> (Stammbach I.4.18) $\{a\in\mathbb{R}^4: a_1\in\mathbb{Q}\}$ ist unter $+$ abgeschlossen, aber $\sqrt 2\cdot(1,0,0,0)$ fällt heraus.`
  },
  {
    id: "la5_lemma_5_0",
    title: "Lemma 5.0: W ist Unterraum ⟺ ⟨W⟩ = W",
    category: "5a Unterräume",
    type: "lemma",
    front: R`Formuliere <b>Lemma 5.0</b> und erkläre, wie man es in der Praxis als Unterraumkriterium benutzt.`,
    back: R`<b>Lemma 5.0:</b> Sei $V$ ein VR über $K$. Dann ist $W\subseteq V$ <b>genau dann ein Unterraum</b> von $V$, wenn gilt:
$$\langle W\rangle = W.$$
(Beweis: Aufgabe 20(a).)<br><br>
<b>Praktisch:</b> Da $W\subseteq\langle W\rangle$ immer gilt, ist nur $\langle W\rangle\subseteq W$ zu zeigen, d.h. $W$ ist unter Linearkombinationen abgeschlossen. Dafür genügt:
$$0_V\in W\quad\text{und}\quad\forall x_1,x_2\in W\;\forall\lambda,\mu\in K:\;\lambda x_1+\mu x_2\in W$$
(per Induktion folgt dann die Abgeschlossenheit unter beliebigen endlichen LK; $0_V$ deckt die leere Summe ab).`,
    meta: "Skript: Kap. 5, Lemma 5.0 (Aufgabe 20(a)); benutzt in Lemma 5.1, Satz 10.1, 10.2",
    explanation: R`<b>Warum gilt (⇒)?</b> Ist $W$ ein VR, so ist jede LK von Vektoren aus $W$ wieder in $W$ (Abgeschlossenheit unter $+$ und $\cdot$, induktiv). Also $\langle W\rangle\subseteq W$.<br>
<b>Warum (⇐)?</b> Ist $W$ unter LK abgeschlossen, so ist $+_V$ eine Operation auf $W$, $0_V\in W$ (leere Summe), $-x = (-1)x\in W$, und alle Axiome werden von $V$ geerbt.<br><br>
<b>Die Formulierung „$\langle W\rangle = W$” ist typisch für das Skript:</b> In Lemma 5.1 (ii),(iii), Satz 10.1 (Bild) und Satz 10.2 (Kern) endet jeder Unterraumbeweis mit „Somit ist $\langle\dots\rangle = \dots$, und mit Lemma 5.0 ist … ein UR”.<br><br>
Folgerung: $\langle M\rangle$ ist für jedes $M$ ein Unterraum (da $\langle\langle M\rangle\rangle = \langle M\rangle$) – der kleinste, der $M$ enthält.`,
    example: R`$W = \{p\in\mathbb{Q}[X]: p(1) = 0\}$: $0(1) = 0$, und $(\lambda p+\mu q)(1) = \lambda\cdot 0+\mu\cdot 0 = 0$ ⇒ UR. Z.B. $X-1$ und $X^2-1$ liegen drin, ebenso $3(X-1)-2(X^2-1) = -2X^2+3X-1$, und $-2+3-1 = 0$ ✓.`,
    counterexample: R`<b>1.</b> $W = \{(x,y): y = x^2\}$: $(1,1),(2,4)\in W$, aber $(1,1)+(2,4) = (3,5)$ und $5\neq 9$ ⇒ $\langle W\rangle\neq W$.<br>
<b>2.</b> $W = \mathbb{Z}^2\subseteq\mathbb{R}^2$: unter $+$ abgeschlossen, aber $\tfrac12(1,0)\notin W$ ⇒ kein UR (bei den Skalaren muss ganz $K$ erlaubt sein).`
  },
  {
    id: "la5_bsp_ulambda",
    title: "Bsp. 1: U_λ = {x₁ + x₂ + x₃ = λ} ist UR ⟺ λ = 0",
    category: "5a Unterräume",
    type: "beispiel",
    front: R`Sei $\lambda\in K$ fest und $U_\lambda := \{(x_1,x_2,x_3)\in K^3: x_1+x_2+x_3 = \lambda\}$. Zeige: $U_\lambda$ ist <b>genau dann</b> ein Unterraum von $K^3$, wenn $\lambda = 0$.`,
    back: R`<b>(⇒)</b> Ist $U_\lambda$ ein UR, so ist $0_{K^3} = (0,0,0)\in U_\lambda$, d.h. $0+0+0 = \lambda$, also $\lambda = 0$.<br>
<b>(⇐)</b> Seien $(x_1,x_2,x_3),(y_1,y_2,y_3)\in U_0$, d.h. $x_1+x_2+x_3 = 0 = y_1+y_2+y_3$. Dann ist
$$(x_1+y_1)+(x_2+y_2)+(x_3+y_3) = 0,$$
also liegt die Summe in $U_0$. Analog $\mu\cdot(x_1,x_2,x_3) = (\mu x_1,\mu x_2,\mu x_3)\in U_0$ für alle $\mu\in K$.<br><br>
Für $\lambda\neq 0$ ist $U_\lambda$ ein <b>affiner Raum</b> von $U_0$ (Kap. 5, Bsp. zu affinen Räumen).`,
    meta: "Skript: Kap. 5, Bsp. 1 mit Beweis; vgl. Aufgabe 21",
    explanation: R`<b>Homogen vs. inhomogen:</b> Die Lösungsmenge einer linearen Gleichung „$\dots = 0$” ist ein Unterraum, die von „$\dots = \lambda\neq 0$” nicht – sie ist eine <b>parallel verschobene Kopie</b>. Genau das ist die Struktur jedes linearen Gleichungssystems (Stammbach I.1.3): <i>alle Lösungen = eine spezielle Lösung + Lösungen des homogenen Systems</i>.<br><br>
<b>Geometrisch in $\mathbb{R}^3$:</b> $U_0$ ist die Ebene durch $0$ mit Normale $(1,1,1)$; $U_1$ ist die dazu parallele Ebene durch $(1,0,0)$.<br><br>
$\dim(U_0) = 2$: Basis z.B. $\{(1,-1,0),(1,0,-1)\}$.`,
    example: R`$U_0\subseteq\mathbb{R}^3$: $(1,2,-3)$ und $(4,-1,-3)$ liegen drin; Summe $(5,1,-6)$: $5+1-6 = 0$ ✓; $-2\cdot(1,2,-3) = (-2,-4,6)$: $-2-4+6 = 0$ ✓.<br>
Über $\mathbb{F}_2$: $U_0 = \{(\bar 0,\bar 0,\bar 0),(\bar 1,\bar 1,\bar 0),(\bar 1,\bar 0,\bar 1),(\bar 0,\bar 1,\bar 1)\}$ – $4 = 2^2$ Elemente, Dimension 2.`,
    counterexample: R`$U_1\subseteq\mathbb{R}^3$: $(1,0,0),(0,1,0)\in U_1$, aber $(1,0,0)+(0,1,0) = (1,1,0)$ mit Summe $2\neq 1$; und $0\cdot(1,0,0) = (0,0,0)\notin U_1$.`
  },
  {
    id: "la5_bsp_ur_r2",
    title: "Bsp. 2: Die nicht-trivialen Unterräume von ℝ²",
    category: "5a Unterräume",
    type: "beispiel",
    front: R`Wie sehen die <b>nicht-trivialen Unterräume</b> von $\mathbb{R}^2$ aus, und warum?`,
    back: R`Die nicht-trivialen UR $U\subseteq\mathbb{R}^2$ sind von der Form
$$U = \{(x,y)\in\mathbb{R}^2: y = m\cdot x\}\;\text{ für ein }m\in\mathbb{R}\qquad\text{oder}\qquad U = \{(x,y)\in\mathbb{R}^2: x = 0\}.$$
<b>Bew.:</b> Nicht-triviale UR von $\mathbb{R}^2$ sind 1-dimensional und werden von einem Vektor $(x_0,y_0)\neq(0,0)$ aufgespannt.<br>
• Ist $x_0\neq 0$: $\langle\{(x_0,y_0)\}\rangle = \langle\{(1,\tfrac{y_0}{x_0})\}\rangle$; mit $m := \tfrac{y_0}{x_0}$ ist das $\{x\cdot(1,m)\} = \{(x,y): y = m\cdot x\}$.<br>
• Ist $x_0 = 0$, so $y_0\neq 0$ und $\langle\{(0,y_0)\}\rangle = \{(x,y): x = 0\}$ (die $y$-Achse).<br>
<b>Bem.:</b> Das analoge Resultat gilt für $K^2$ über beliebigen Körpern $K$.`,
    meta: "Skript: Kap. 5, Bsp. 2 mit Beweis",
    explanation: R`<b>Dimensionsargument:</b> Ein UR $U$ von $\mathbb{R}^2$ hat nach Lemma 5.1 (i) Dimension $0$, $1$ oder $2$; Dimension $0$ ist $\{0\}$, Dimension $2$ ist $\mathbb{R}^2$ selbst. Bleibt Dimension 1: eine <b>Gerade durch den Ursprung</b>.<br><br>
<b>Zwei Fälle</b> nur wegen der Beschreibung: „$y = mx$” erfasst alle Geraden ausser der senkrechten ($m = \infty$). Einheitlich: $U_{0;\alpha,\beta} = \{(x,y): \alpha x+\beta y = 0\}$ mit $(\alpha,\beta)\neq(0,0)$ (Beispiel zu affinen Räumen).<br><br>
Analog in $\mathbb{R}^3$: $\{0\}$, Geraden durch $0$, Ebenen durch $0$, $\mathbb{R}^3$.`,
    example: R`$\langle\{(2,6)\}\rangle$: $x_0 = 2\neq 0$, $m = \tfrac62 = 3$ ⇒ die Gerade $y = 3x$; z.B. $(-1,-3) = -\tfrac12\cdot(2,6)$ ✓.<br>
$\langle\{(0,-5)\}\rangle$ = $y$-Achse.<br>
Über $\mathbb{F}_3$: $K^2$ hat genau 4 Geraden durch $0$: $m\in\{\bar 0,\bar 1,\bar 2\}$ und $x=0$ – jede mit 3 Punkten.`,
    counterexample: R`<b>1.</b> Die Gerade $y = 3x+1$ ist kein UR ($(0,0)$ fehlt) – sie ist ein affiner Raum $(0,1)+\langle\{(1,3)\}\rangle$.<br>
<b>2.</b> Die Parabel $y = x^2$ und der Kreis $x^2+y^2 = 1$ sind keine UR (nicht abgeschlossen; der Kreis enthält $0$ nicht einmal).`
  },
  {
    id: "la5_lemma_5_1",
    title: "Lemma 5.1: Dimension, Durchschnitt und Vereinigung von Unterräumen",
    category: "5a Unterräume",
    type: "lemma",
    front: R`Formuliere <b>Lemma 5.1</b> (i)–(iv) für Unterräume $U,U_1,U_2$ eines endlich-dimensionalen VR $V$ und skizziere die Beweise.`,
    back: R`<ul><li><b>(i)</b> $\dim(U)\le\dim(V)$, und $\dim(U) = \dim(V)\Rightarrow U = V$. [Aufgabe 20(b): $U$ ist endlich-dim.]</li>
<li><b>(ii)</b> $U_1\cap U_2$ ist ein UR von $V$ (auch von $U_1$ und $U_2$); das gilt auch für den Durchschnitt beliebig vieler UR.</li>
<li><b>(iii)</b> $\langle U_1\cup U_2\rangle$ ist ein UR von $V$.</li>
<li><b>(iv)</b> Im Allgemeinen ist $U_1\cup U_2$ <b>kein</b> UR von $V$.</li></ul>
<b>Beweis:</b> (i) Basis $\mathcal{B}_U = \{y_1,\dots,y_m\}$ mit Steinitz zu einer Basis $\mathcal{B}_U\cup X$ ($X\subseteq\mathcal{B}_V$) erweitern ⇒ $m\le n$, und $m = n$ nur, wenn $\mathcal{B}_U$ schon Basis von $V$ ist.<br>
(ii) Ist $W\subseteq U_1\cap U_2$, so $\langle W\rangle\subseteq U_1\cap U_2$; insbesondere $\langle U_1\cap U_2\rangle = U_1\cap U_2$ ⇒ Lemma 5.0.<br>
(iii) $\langle\langle U_1\cup U_2\rangle\rangle = \langle U_1\cup U_2\rangle$ ⇒ Lemma 5.0.<br>
(iv) $V = \mathbb{R}^2$, $U_1 = \{(r,0)\}$, $U_2 = \{(0,s)\}$: $(1,1)\in\langle U_1\cup U_2\rangle$, aber $(1,1)\notin U_1\cup U_2$.`,
    meta: "Skript: Kap. 5, Lemma 5.1 mit Beweis",
    explanation: R`<b>(i)</b> ist intuitiv: Ein Unterraum kann nicht „mehr Richtungen” haben als der ganze Raum. Und wenn er gleich viele hat, füllt er alles aus – eine Ebene in $\mathbb{R}^2$ <i>ist</i> $\mathbb{R}^2$.<br><br>
<b>(ii) vs. (iv):</b> Der <b>Durchschnitt</b> ist gutartig („gemeinsame Bedingungen bleiben erfüllt”), die <b>Vereinigung</b> nicht: Addiert man einen Vektor aus $U_1$ und einen aus $U_2$, landet man typischerweise ausserhalb beider. Die Reparatur ist (iii): $\langle U_1\cup U_2\rangle$ – der kleinste UR, der beide enthält (die <b>Summe</b> $U_1+U_2 = \{u_1+u_2\}$, Stammbach I.4.16).<br><br>
<b>Wann ist $U_1\cup U_2$ doch ein UR?</b> Genau dann, wenn $U_1\subseteq U_2$ oder $U_2\subseteq U_1$.`,
    example: R`<b>(ii)</b> In $\mathbb{R}^3$: $U_1 = \{z = 0\}$ ($xy$-Ebene), $U_2 = \{x = 0\}$ ($yz$-Ebene): $U_1\cap U_2 = \{(0,y,0)\}$ = $y$-Achse, Dimension 1.<br>
<b>(iii)</b> $\langle U_1\cup U_2\rangle = \mathbb{R}^3$, z.B. $(1,2,3) = (1,2,0)+(0,0,3)$.<br>
<b>(i)</b> $U = \langle\{(1,1,0),(0,1,1)\}\rangle$: $\dim(U) = 2\lt 3$ ⇒ $U\neq\mathbb{R}^3$, z.B. $(1,0,0)\notin U$? $a(1,1,0)+b(0,1,1) = (a,a+b,b) = (1,0,0)$ ⇒ $a=1,b=0$, aber $a+b = 1\neq 0$ ✓.`,
    counterexample: R`<b>(iv)</b> Skript: $U_1\cup U_2$ = beide Achsen in $\mathbb{R}^2$: $(1,0)+(0,1) = (1,1)$ liegt auf keiner Achse.<br>
<b>(i) im Unendlichen falsch:</b> $U = \{(0,a_1,a_2,\dots)\}\subsetneq S(K)$, aber $U\cong S(K)$ (Verschiebung) – „gleiche Dimension ⇒ gleich” gilt nur endlich-dimensional.`
  },
  // ========================================================================
  // 5b AFFINE RÄUME
  // ========================================================================
  {
    id: "la5_def_affin",
    title: "Definition: Affiner Raum a + W (mit Beispielen in ℝ²)",
    category: "5b Affine Räume",
    type: "definition",
    front: R`Was ist ein <b>affiner Raum</b> eines Unterraums $W\subseteq V$? Wie sehen affine Räume in $\mathbb{R}^2$ aus?`,
    back: R`<b>Definition:</b> Sei $W\subseteq V$ ein Unterraum von $V$ und $a\in V$. Dann ist
$$a+W := \{a+y: y\in W\}\subseteq V$$
ein <b>affiner Raum</b> von $W$.<br><br>
<b>Bsp.:</b><br>
1. Für $\lambda\neq 0$ ist $U_\lambda\subseteq K^3$ ein affiner Raum von $U_{\lambda=0}$.<br>
2. In $\mathbb{R}^2$ sind alle nicht-trivialen UR von der Form $U_{0;\alpha,\beta} = \{(x,y): \alpha x+\beta y = 0\}$ mit $(\alpha,\beta)\neq(0,0)$, d.h. Geraden $G$ durch den Ursprung.<br>
• Ist $a\notin G$, so ist $a+G$ eine zu $G$ <b>parallele Gerade</b>.<br>
• Sind $G_1\neq G_2$ nicht-triviale UR und $a,b\in\mathbb{R}^2$, so schneiden sich $a+G_1$ und $b+G_2$ in <b>genau einem Punkt</b>.<br>
• Dies gilt allgemein in $K^2$.`,
    meta: "Skript: Kap. 5, Definition affiner Raum, Bsp. 1, 2",
    explanation: R`Ein affiner Raum ist ein <b>verschobener Unterraum</b>: dieselbe „Form” (Gerade, Ebene, …) und Richtung wie $W$, aber im Allgemeinen <b>nicht durch $0$</b>. $a$ heisst <i>Aufpunkt</i>; er ist nicht eindeutig: $a+W = b+W$ genau dann, wenn $a-b\in W$ (Lemma 5.3 (ii)) – jeder Punkt des affinen Raums kann als Aufpunkt dienen.<br><br>
<b>Lineare Gleichungssysteme:</b> Die Lösungsmenge von $Ax = b$ ist entweder leer oder ein affiner Raum $z+\mathrm{Ker}$ ($z$ eine spezielle Lösung, Kern = Lösungen von $Ax = 0$).<br><br>
<b>Wichtigster Zweck im Skript:</b> Die affinen Räume von $W$ sind genau die Äquivalenzklassen von $x\sim y:\iff x-y\in W$ (Lemma 5.5) und damit die <b>Elemente des Quotientenraums $V/W$</b>.`,
    example: R`<b>1.</b> $W = \langle\{(1,2)\}\rangle$ (Gerade $y = 2x$), $a = (0,3)$: $a+W = \{(t,3+2t)\}$ = Gerade $y = 2x+3$.<br>
<b>2.</b> Schnittpunkt: $(0,3)+\langle\{(1,2)\}\rangle$ und $(1,0)+\langle\{(1,-1)\}\rangle$: $(t,3+2t) = (1+s,-s)$ ⇒ $t = 1+s$, $3+2+2s = -s$ ⇒ $s = -\tfrac53$, $t = -\tfrac23$: Punkt $(-\tfrac23,\tfrac53)$.<br>
<b>3.</b> $U_1 = (1,0,0)+U_0$ in $K^3$.`,
    counterexample: R`<b>1.</b> $a+W$ ist i.A. <b>kein</b> UR (Lemma 5.2): $(0,3)+W$ enthält $(0,0)$ nicht.<br>
<b>2.</b> Ein Kreis ist kein affiner Raum (kein verschobener Unterraum).<br>
<b>3.</b> Parallele Geraden $a+G$ und $b+G$ mit $a-b\notin G$ schneiden sich <b>nie</b> – „genau ein Schnittpunkt” gilt nur für $G_1\neq G_2$: $(0,0)+\langle(1,2)\rangle$ und $(0,3)+\langle(1,2)\rangle$ sind disjunkt.`
  },
  {
    id: "la5_lemma_5_2",
    title: "Lemma 5.2: a + W ist Unterraum ⟺ a ∈ W",
    category: "5b Affine Räume",
    type: "lemma",
    front: R`Formuliere und beweise <b>Lemma 5.2</b>: Wann ist ein affiner Raum $a+W$ selbst ein Unterraum?`,
    back: R`<b>Lemma 5.2:</b> Sei $W\subseteq V$ ein UR von $V$. Dann ist $a+W$ <b>genau dann</b> ein UR von $V$, wenn $a\in W$. [Im Allgemeinen ist also $a+W$ kein UR von $V$.]<br><br>
<b>Beweis (⇐):</b> Ist $a\in W$, so ist $a+W = W$ (denn $a+y\in W$ für $y\in W$, und $y = a+(y-a)$ mit $y-a\in W$), also ein UR.<br>
<b>(⇒):</b> Ist $a+W$ ein UR, so ist $0_V\in a+W$. D.h. es existiert $y\in W$ mit $0_V = a+y$. Daraus folgt
$$y = -a\;\Rightarrow\;-a\in W\;(\text{weil }y\in W)\;\Rightarrow\;a\in W.$$`,
    meta: "Skript: Kap. 5, Lemma 5.2 mit Beweis",
    explanation: R`<b>Kurz:</b> Ein verschobener Unterraum ist genau dann wieder ein Unterraum, wenn die Verschiebung ihn <b>auf sich selbst</b> abbildet – d.h. wenn man ihn um einen eigenen Vektor verschiebt. Der Ursprung muss drin bleiben.<br><br>
<b>Beweisidee:</b> Der Test „$0_V\in a+W$?” entscheidet alles. $0_V\in a+W$ heisst $-a\in W$, und weil $W$ ein UR ist, ist das gleichbedeutend mit $a\in W$.<br><br>
Das ist der Spezialfall $b = 0_V$ von Lemma 5.3 (ii): $a+W = 0_V+W\iff a-0_V\in W$.`,
    example: R`$W = \langle\{(1,1)\}\rangle\subseteq\mathbb{R}^2$:<br>
$a = (3,3)\in W$: $(3,3)+W = W$ (die Gerade $y = x$ selbst), ein UR ✓.<br>
$a = (3,0)\notin W$: $(3,0)+W$ ist die Gerade $y = x-3$ – enthält $(0,0)$ nicht, kein UR.`,
    counterexample: R`$U_1 = (1,0,0)+U_0$ (Ebene $x_1+x_2+x_3 = 1$): $(1,0,0)\notin U_0$, also kein UR – konsistent mit Bsp. 1 ($U_\lambda$ UR ⟺ $\lambda = 0$).`
  },
  {
    id: "la5_lemma_5_3",
    title: "Lemma 5.3: Wann liegen Vektoren im selben affinen Raum?",
    category: "5b Affine Räume",
    type: "lemma",
    front: R`Formuliere <b>Lemma 5.3</b> (i)–(iii) für einen UR $W\subseteq V$ und $a,b,x,y\in V$ und beweise (ii) und (iii).`,
    back: R`<ul><li><b>(i)</b> $x$ und $y$ sind genau dann im selben affinen Raum von $W$, wenn $x-y\in W$.</li>
<li><b>(ii)</b> $a+W = b+W\iff a-b\in W$.</li>
<li><b>(iii)</b> $a+W\neq b+W\Rightarrow(a+W)\cap(b+W) = \emptyset$.</li></ul>
<b>Beweis (i) (⇒):</b> $x = a+w_1$, $y = a+w_2$ ⇒ $x-y = w_1-w_2\in W$. (⇐): $x-y = w_0\in W$, $x = a+w_1$ ⇒ $y = a+(w_1-w_0)\in a+W$.<br>
<b>(ii) (⇒):</b> $a = a+0_V\in a+W = b+W$, also $a = b+w_0$, d.h. $a-b = w_0\in W$. (⇐): $a = b+w_0$ ⇒ $a+W = b+\underbrace{(w_0+W)}_{=W} = b+W$.<br>
<b>(iii) Kontraposition:</b> $x\in(a+W)\cap(b+W)$ ⇒ $x = a+w_1 = b+w_2$ ⇒ $a-b = w_2-w_1\in W$ $\overset{(ii)}{\Rightarrow}$ $a+W = b+W$.`,
    meta: "Skript: Kap. 5, Lemma 5.3 mit Beweis",
    explanation: R`<b>Kernidee:</b> „Im selben affinen Raum” heisst „<b>Differenz liegt in $W$</b>” – man kann von $x$ nach $y$ laufen, ohne die Richtung von $W$ zu verlassen.<br><br>
<b>(ii)</b> sagt: Der Aufpunkt ist nicht eindeutig – jeder Punkt des affinen Raums taugt. <b>(iii)</b> sagt: Zwei affine Räume desselben $W$ sind entweder <b>identisch oder disjunkt</b> – sie überlappen nie teilweise. Parallele Geraden sind gleich oder schneiden sich nicht.<br><br>
<b>Zusammen</b> ergeben (i)–(iii): Die affinen Räume von $W$ <b>zerlegen $V$</b> in disjunkte Stücke – genau die Äquivalenzklassen von $\sim$ (Lemmas 5.4, 5.5). Diese Stücke werden die Vektoren des Quotientenraums.`,
    example: R`$W = \langle\{(1,2)\}\rangle\subseteq\mathbb{R}^2$:<br>
(ii): $(1,5)+W = (3,9)+W$, da $(1,5)-(3,9) = (-2,-4) = -2\cdot(1,2)\in W$.<br>
(i): $(0,3)$ und $(2,7)$ liegen im selben affinen Raum ($(2,4)\in W$); $(0,3)$ und $(1,4)$ nicht ($(1,1)\notin W$).<br>
(iii): $(0,3)+W$ (Gerade $y = 2x+3$) und $(0,0)+W$ ($y = 2x$) sind disjunkt.`,
    counterexample: R`<b>Verschiedene Unterräume:</b> Für $W_1\neq W_2$ gilt (iii) nicht: $(0,0)+\langle(1,0)\rangle$ und $(0,0)+\langle(0,1)\rangle$ sind verschieden, schneiden sich aber in $(0,0)$. Die Disjunktheit betrifft nur affine Räume <b>desselben</b> $W$.`
  },
  // ========================================================================
  // 5c QUOTIENTENRÄUME
  // ========================================================================
  {
    id: "la5_lemma_5_4",
    title: "Lemma 5.4: x ∼ y :⟺ x − y ∈ W ist eine Äquivalenzrelation",
    category: "5c Quotientenräume",
    type: "lemma",
    front: R`Sei $W\subseteq V$ ein UR. Auf $V$ definiere $x\sim y:\iff x-y\in W$. Zeige (<b>Lemma 5.4</b>): $\sim$ ist eine Äquivalenzrelation.`,
    back: R`<b>Reflexiv:</b> $x-x = 0_V\in W$, also $x\sim x$.<br>
<b>Symmetrisch:</b> $x-y = w_0\in W$ ⇒ $y-x = -w_0\in W$, also $x\sim y\Rightarrow y\sim x$.<br>
<b>Transitiv:</b> $x-y = w_1\in W$ ($x\sim y$) und $y-z = w_2\in W$ ($y\sim z$) ⇒
$$x-z = (x-y)+(y-z) = w_1+w_2\in W\;\Rightarrow\;x\sim z.$$
Mit $\sim$ zerfällt $V$ in paarweise disjunkte, nicht-leere Äquivalenzklassen $\{[a]_\sim: a\in V\}$, wobei $[a]_\sim := \{x\in V: a\sim x\}$.`,
    meta: "Skript: Kap. 5, Quotientenräume, Lemma 5.4 mit Beweis",
    explanation: R`$x\sim y$ heisst „$x$ und $y$ sind <b>gleich bis auf einen Fehler in $W$</b>”. Man „ignoriert” alles, was in Richtung $W$ passiert.<br><br>
<b>Jede Unterraum-Eigenschaft wird genau einmal gebraucht:</b> $0_V\in W$ für Reflexivität, Abgeschlossenheit unter $-$ (Inverse) für Symmetrie, Abgeschlossenheit unter $+$ für Transitivität. Darum funktioniert die Konstruktion nur für Unterräume, nicht für beliebige Teilmengen.<br><br>
<b>Analogie:</b> $\mathbb{Z}_m$ entsteht aus $\mathbb{Z}$ durch $k\sim l:\iff k-l\in m\mathbb{Z}$ – „gleich bis auf Vielfache von $m$”. $V/W$ ist dasselbe Prinzip für Vektorräume.`,
    example: R`$V = \mathbb{R}^2$, $W = x$-Achse: $(3,5)\sim(-1,5)$, da $(4,0)\in W$; $(3,5)\not\sim(3,4)$, da $(0,1)\notin W$. Die Klasse von $(3,5)$ ist die waagrechte Gerade $y = 5$.<br>
$V = \mathbb{Q}[X]$, $W = \langle\{1,X\}\rangle$: $X^2+3X-1\sim X^2$, da die Differenz $3X-1\in W$.`,
    counterexample: R`<b>Keine UR, keine Äquivalenzrelation:</b> $T = \{(t,0): t\ge 0\}$ (Halbachse), $x\sim y:\iff x-y\in T$: nicht symmetrisch, $(1,0)-(0,0)\in T$, aber $(0,0)-(1,0) = (-1,0)\notin T$.<br>
$T = \{(0,0),(1,0)\}$: nicht transitiv, $(2,0)\sim(1,0)\sim(0,0)$, aber $(2,0)-(0,0)\notin T$.`
  },
  {
    id: "la5_lemma_5_5",
    title: "Lemma 5.5: Äquivalenzklassen = affine Räume, [a]∼ = a + W",
    category: "5c Quotientenräume",
    type: "lemma",
    front: R`Formuliere und beweise <b>Lemma 5.5</b> über die Äquivalenzklassen der Relation $\sim$.`,
    back: R`<b>Lemma 5.5:</b> $\{[a]_\sim: a\in V\} = \{a+W: a\in V\}$; es gilt sogar
$$[a]_\sim = a+W\quad\text{für alle }a\in V.$$
<b>Beweis:</b> Mit Lemma 5.3 (i) ist $x-y\in W\iff x,y\in a+W$ für ein $a\in V$, d.h.
$$\underbrace{x\sim y}_{x,y\text{ in derselben Äquivalenzklasse}}\iff\underbrace{x,y\in a+W\text{ (für ein }a\in V)}_{x,y\text{ im selben affinen Raum}}.$$
Damit sind die affinen Räume $a+W$ genau die Äquivalenzklassen von $\sim$, und $[a]_\sim = a+W$.<br>
<b>Bem.:</b> Lemma 5.3 (iii) zeigt, dass die affinen Räume paarweise disjunkt sind – was allgemein für Äquivalenzklassen gilt.<br>
Die Quotientenmenge $V/{\sim} = \{[a]_\sim: a\in V\}$ ist also die Menge der affinen Räume von $W$; man schreibt $V/W := \{a+W: a\in V\}$.`,
    meta: "Skript: Kap. 5, Lemma 5.5 mit Beweis und Bem.",
    explanation: R`<b>Bild:</b> $V$ wird in <b>parallele Kopien von $W$</b> zerschnitten (in $\mathbb{R}^2$ mit $W$ = Gerade: in alle dazu parallelen Geraden). Jede Kopie ist eine Äquivalenzklasse; jeder Punkt liegt in genau einer.<br><br>
Das verbindet zwei Sichtweisen: die <b>algebraische</b> (Äquivalenzklassen, „gleich bis auf $W$”) und die <b>geometrische</b> (verschobene Unterräume). Beim Rechnen in $V/W$ benutzt man die geometrische Schreibweise $a+W$, beim Argumentieren über Wohldefiniertheit die algebraische ($a\sim a'\iff a-a'\in W$).`,
    example: R`$V = \mathbb{R}^3$, $W = \langle\{(1,1,1)\}\rangle$ (Raumdiagonale): $[(2,0,1)]_\sim = (2,0,1)+W = \{(2+t,t,1+t)\}$ – eine zur Diagonale parallele Gerade. $(5,3,4)$ liegt darin ($t = 3$), also $[(5,3,4)]_\sim = [(2,0,1)]_\sim$.`,
    counterexample: R`<b>Falsch:</b> „$[a]_\sim = \{a\}+$ irgendwas Beliebiges”. Z.B. ist $[(2,0,1)]_\sim\neq(2,0,1)+\langle\{(1,0,0)\}\rangle$: $(3,0,1)$ liegt rechts, aber $(3,0,1)-(2,0,1) = (1,0,0)\notin W$. Die Klassen haben immer die Richtung von $W$, nicht eine andere.`
  },
  {
    id: "la5_wohldefiniert",
    title: "Die Operationen +_Q und ·_Q auf V/W und ihre Wohldefiniertheit",
    category: "5c Quotientenräume",
    type: "proposition",
    front: R`Wie sind Addition $+_Q$ und Skalarmultiplikation $\cdot_Q$ auf $V/W$ definiert, und warum sind sie <b>wohldefiniert</b>?`,
    back: R`<b>Addition:</b> $(a+W)+_Q(b+W) := \{(a+w_1)+(b+w_2): w_1,w_2\in W\}$. Es gilt
$$(a+W)+_Q(b+W) = \{(a+b)+\underbrace{(w_1+w_2)}_{=w_0}\} = (a+b)+W.$$
<b>Wohldefiniert:</b> Seien $a+W = a'+W$ ($\iff a-a'\in W$) und $b+W = b'+W$ ($\iff b-b'\in W$, Lemma 5.3 (ii)). Dann
$$(a+b)-(a'+b') = \underbrace{(a-a')}_{\in W}+\underbrace{(b-b')}_{\in W}\in W\;\Rightarrow\;(a+b)+W = (a'+b')+W.$$
<b>Skalarmultiplikation:</b> $\cdot_Q: K\times V/W\to V/W$, $(\lambda,a+W)\mapsto(\lambda\cdot a)+W$. Wohldefiniert: $a-a'\in W\Rightarrow\lambda a-\lambda a' = \lambda(a-a')\in W$ ⇒ $(\lambda a)+W = (\lambda a')+W$.`,
    meta: "Skript: Kap. 5, Definition +_Q, ·_Q und Wohldefiniertheit",
    explanation: R`<b>Was heisst „wohldefiniert”?</b> Die Operation ist über <b>Vertreter</b> erklärt: Um $(a+W)+_Q(b+W)$ zu berechnen, wählt man Aufpunkte $a,b$ und nimmt $(a+b)+W$. Ein Element von $V/W$ hat aber <b>viele</b> Aufpunkte. Wohldefiniert heisst: <b>Das Ergebnis hängt nicht von der Wahl der Vertreter ab.</b> Sonst wäre $+_Q$ gar keine Funktion.<br><br>
<b>Warum klappt es hier?</b> Weil $W$ unter $+$ und Skalarmultiplikation abgeschlossen ist: Die „Fehler” $a-a'$ und $b-b'$ in $W$ addieren sich zu einem Fehler in $W$. Das scheitert bei Relationen, die nicht von einem Unterraum kommen (Serie 5, Aufgabe 24).<br><br>
<b>Rechenregel zum Merken:</b> In $V/W$ rechnet man mit den Aufpunkten wie in $V$ und „vergisst” am Ende alles in $W$.`,
    example: R`$V = \mathbb{R}^2$, $W$ = $x$-Achse: $((3,5)+W)+_Q((1,2)+W) = (4,7)+W$. Andere Vertreter: $(-10,5)$ und $(7,2)$ liefern $(-3,7)+W$ – und $(4,7)-(-3,7) = (7,0)\in W$ ✓, dieselbe Klasse (die Gerade $y = 7$).<br>
$3\cdot_Q((3,5)+W) = (9,15)+W = (0,15)+W$.`,
    counterexample: R`<b>Nicht wohldefiniert</b> (Serie 5, Aufgabe 24): Für $x\sim y:\iff\exists\lambda\neq 0\,(\lambda x = y)$ auf $\mathbb{R}^2$ liefert $[a]+[b] := [a+b]$ mit $a = b = (1,0)$ die Klasse $[(2,0)]$, mit dem Vertreter $b' = (-1,0)\sim b$ aber $[(0,0)]\neq[(2,0)]$.`
  },
  {
    id: "la5_def_quotientenraum",
    title: "Definition: Quotientenraum V/W",
    category: "5c Quotientenräume",
    type: "definition",
    front: R`Was ist der <b>Quotientenraum</b> $V/W$? Was ist sein Nullvektor, und was ist das Inverse von $a+W$?`,
    back: R`$V/W := \{a+W: a\in V\}$, die Menge aller affinen Räume von $W$, mit
$$(a+W)+_Q(b+W) = (a+b)+W,\qquad\lambda\cdot_Q(a+W) = (\lambda\cdot a)+W.$$
• $+_Q$ ist eine binäre Operation auf $V/W$, und weil $+$ auf $V$ komm. und assoz. ist, ist $(V/W,+_Q)$ eine komm. Halbgruppe.<br>
• $0_V+W = W$ ist das <b>Neutralelement</b>, und das <b>Inverse</b> von $a+W$ ist $(-a)+W$ ⇒ $(V/W,+_Q)$ ist eine abelsche Gruppe.<br>
• Mit $\cdot_Q$ wird $V/W$ zu einem VR über $K$.<br><br>
<b>Definition:</b> Der Vektorraum $V/W$ (über $K$) heisst <b>Quotientenraum von $V$ nach $W$</b> [auch Faktorraum].`,
    meta: "Skript: Kap. 5, Definition Quotientenraum; Mathematica-Beispiel Quotientenräume",
    explanation: R`<b>Idee:</b> $V/W$ ist „$V$, in dem man $W$ zu null erklärt”. Alle Vektoren, die sich nur um etwas aus $W$ unterscheiden, werden <b>identifiziert</b>. Der Nullvektor von $V/W$ ist $W$ selbst (die Klasse von $0_V$); $a+W$ ist genau dann „null”, wenn $a\in W$.<br><br>
<b>Dimension</b> (Lemma 5.6): $\dim(V/W) = \dim(V)-\dim(W)$ – man verliert genau die Richtungen von $W$.<br><br>
<b>Vorstellung in $\mathbb{R}^2$:</b> $W$ = $x$-Achse; die Vektoren von $V/W$ sind die waagrechten Geraden, und jede ist durch ihre Höhe $y$ eindeutig bestimmt. $V/W$ „ist” also die $y$-Achse, $\cong\mathbb{R}$.<br><br>
<b>Mathematica-Beispiel des Skripts:</b> $V$ = Polynomfunktionen vom Grad $\le 4$, $U = \langle\{p_0,p_1\}\rangle = \langle\{1,x\}\rangle$: $V/U$ ist 3-dimensional mit Basis $\{x^2+U,x^3+U,x^4+U\}$ – man ignoriert den linearen Anteil.`,
    example: R`<b>1.</b> $V = \mathbb{R}^3$, $W = \langle\{(1,1,1)\}\rangle$: $(3,5,2)+W = (1,3,0)+W$ (subtrahiere $2\cdot(1,1,1)$) $= 1\cdot_Q(e_1+W)+_Q 3\cdot_Q(e_2+W)$.<br>
<b>2.</b> $V/U$ (Polynome Grad $\le 4$ modulo $\langle 1,x\rangle$): $(5+2x-x^2+7x^4)+U = (-1)(x^2+U)+7(x^4+U)$ – Koordinaten $(-1,0,7)$.`,
    counterexample: R`<b>1. Nullvektor ist nicht „$\{0_V\}$”:</b> In $V/W$ ist der Nullvektor die ganze Menge $W$; z.B. ist $(1,1,1)+W = W = 0_{V/W}$, obwohl $(1,1,1)\neq 0_V$.<br>
<b>2.</b> $V/W$ ist <b>kein</b> Unterraum von $V$: seine Elemente sind Teilmengen von $V$, keine Vektoren von $V$.<br>
<b>3.</b> Für $W = V$ ist $V/V = \{V\}$ der Nullraum; für $W = \{0_V\}$ ist $V/\{0_V\}\cong V$ (Klassen sind einzelne Punkte $\{a\}$).`
  },
  {
    id: "la5_lemma_5_6",
    title: "Lemma 5.6: dim(V/W) = dim(V) − dim(W)",
    category: "5c Quotientenräume",
    type: "lemma",
    front: R`Formuliere und beweise <b>Lemma 5.6</b> über die Dimension des Quotientenraums.`,
    back: R`<b>Lemma 5.6:</b> Ist $V$ ein endlich-dim. VR der Dimension $n$ und $W\subseteq V$ ein UR der Dimension $m\le n$, so hat $V/W$ die Dimension $n-m$.<br><br>
<b>Beweis:</b> Sei $\{y_1,\dots,y_m\}$ Basis von $W$. Mit Satz 4.3 erweitere zu einer Basis $\{y_1,\dots,y_m,x_{m+1},\dots,x_n\}$ von $V$.<br>
<b>Beh. 1:</b> $\{x_k+W: m+1\le k\le n\}$ ist l.u. Aus $\sum_{k=m+1}^n\lambda_k(x_k+W) = 0_V+W$ folgt $\sum\lambda_kx_k\in W$, also $\sum_{k=m+1}^n\lambda_kx_k = \sum_{j=1}^m\lambda_jy_j$, d.h. $\sum_j\lambda_jy_j+\sum_k(-\lambda_k)x_k = 0_V$. Da $y_1,\dots,x_n$ l.u. sind, sind alle $\lambda_i = 0$.<br>
<b>Beh. 2:</b> $\langle\{x_{m+1}+W,\dots,x_n+W\}\rangle = V/W$. Für $a = \sum_j\lambda_jy_j+\sum_k\lambda_kx_k$ ist $b := \sum_k\lambda_kx_k\sim a$ (Differenz in $W$), also
$$a+W = b+W = \sum_{k=m+1}^n\lambda_k\cdot_Q(x_k+W).$$
Somit ist $\{x_{m+1}+W,\dots,x_n+W\}$ eine Basis von $V/W$, und $\dim(V/W) = n-m$.`,
    meta: "Skript: Kap. 5, Lemma 5.6 mit Beweis (dort „Lemma 4.3” = Satz 4.3)",
    explanation: R`<b>Intuition:</b> Man zerlegt eine Basis von $V$ in „Richtungen von $W$” ($y_j$) und „Rest” ($x_k$). In $V/W$ werden die $y_j$ zu null – übrig bleiben die $n-m$ Rest-Richtungen, und die bleiben unabhängig.<br><br>
<b>Warum Basisergänzung?</b> Man braucht eine Basis von $V$, die eine Basis von $W$ <b>enthält</b>; sonst kann man die Anteile in $W$ nicht sauber abtrennen.<br><br>
<b>Ausblick:</b> Das ist der Prototyp der <b>Dimensionsformel</b> $\dim(\mathrm{Ker}(\varphi))+\mathrm{Rang}(\varphi) = \dim(V)$ (Stammbach III.2.15): $V/\mathrm{Ker}(\varphi)\cong\varphi[V]$.`,
    example: R`<b>1.</b> $V = \mathbb{R}^3$, $W = \langle\{(1,1,1)\}\rangle$: ergänze zu $\{(1,1,1),e_1,e_2\}$; dann ist $\{e_1+W,e_2+W\}$ Basis von $V/W$, $\dim(V/W) = 3-1 = 2$.<br>
<b>2.</b> Polynome vom Grad $\le 4$ ($n = 5$) modulo $\langle 1,x\rangle$ ($m = 2$): $\dim(V/U) = 3$.<br>
<b>3.</b> $\mathbb{F}_2^3/U_0$ mit $U_0 = \{x_1+x_2+x_3 = \bar 0\}$ ($4$ Elemente): $V/W$ hat $8/4 = 2 = 2^{3-2}$ Elemente.`,
    counterexample: R`<b>1. Falsche Ergänzung:</b> Die Klassen der Standardbasis $\{e_1+W,e_2+W,e_3+W\}$ sind in $\mathbb{R}^3/\langle(1,1,1)\rangle$ <b>l.a.</b>: $(e_1+W)+(e_2+W)+(e_3+W) = (1,1,1)+W = 0_{V/W}$.<br>
<b>2. Unendlich-dim.:</b> $\dim(V) = \infty$, $\dim(W) = \infty$ sagt nichts über $\dim(V/W)$ (z.B. $S(K)/\{(0,a_1,a_2,\dots)\}\cong K$).`
  },
  // ========================================================================
  // SERIE 5
  // ========================================================================
  {
    id: "la5_s5_a24",
    title: "Serie 5, Aufgabe 24: Eine nicht wohldefinierte Addition",
    category: "5c Quotientenräume",
    type: "aufgabe",
    front: R`Auf $V = \mathbb{R}^2$ sei $x\sim y:\iff\exists\lambda\in\mathbb{R}\setminus\{0\}\,(\lambda x = y)$ und $[a]_\sim+_\sim[b]_\sim := [a+b]_\sim$. Zeige: (a) $\sim$ ist eine Äquivalenzrelation; (b) $+_\sim$ ist <b>nicht wohldefiniert</b>.`,
    back: R`<b>(a)</b> Reflexiv: $1\cdot x = x$. Symmetrisch: $\lambda x = y$, $\lambda\neq 0$ ⇒ $\lambda^{-1}y = x$. Transitiv: $\lambda x = y$, $\mu y = z$ ⇒ $(\mu\lambda)x = z$ mit $\mu\lambda\neq 0$.<br>
Klassen: $[(0,0)] = \{(0,0)\}$; für $x\neq 0$ ist $[x] = \{\lambda x:\lambda\neq 0\}$ = Gerade durch $0$ und $x$ <b>ohne den Nullpunkt</b>.<br>
<b>(b)</b> $a = (1,0)$, $b = (1,0)$, $b' = (-1,0)$. Dann $b\sim b'$ (via $\lambda = -1$), also $[b] = [b']$, aber
$$[a+b] = [(2,0)]\neq[(0,0)] = [a+b'],$$
denn $\lambda\cdot(2,0)\neq(0,0)$ für alle $\lambda\neq 0$. Je nach Vertreter ergäbe $[(1,0)]+_\sim[(1,0)]$ zwei verschiedene Werte.`,
    meta: "Serie 5, Aufgabe 24",
    explanation: R`<b>Lektion:</b> Eine Operation auf Äquivalenzklassen „über Vertreter” ist nur dann eine Funktion, wenn das Ergebnis <b>nicht von der Vertreterwahl abhängt</b>. Bei $V/W$ klappt das, weil die Relation von einem <b>Unterraum</b> kommt ($a\sim a'\iff a-a'\in W$, Fehler addieren sich in $W$).<br><br>
Hier ist die Relation „liegen auf derselben Geraden durch $0$” – sie ist mit der <b>Multiplikation</b> verträglich (deshalb ist die Menge der Geraden der „projektive Raum”), aber nicht mit der <b>Addition</b>: Zwei Vektoren auf derselben Geraden können sich zu null addieren oder nicht.<br><br>
<b>Test-Rezept für Wohldefiniertheit:</b> Nimm $a\sim a'$, $b\sim b'$ und prüfe, ob $a+b\sim a'+b'$. Ein einziges Gegenbeispiel genügt zum Widerlegen.`,
    example: R`Weitere Vertreterpaare: $a = (1,1)$, $b = (2,0)$ ⇒ $[(3,1)]$; mit $a' = (2,2)\sim a$: $[a'+b] = [(4,2)]$. Da $(4,2)$ kein Vielfaches von $(3,1)$ ist ($\tfrac43\neq\tfrac21$), ist auch hier $[a+b]\neq[a'+b]$.`,
    counterexample: R`<b>Doch wohldefiniert:</b> Die Skalarmultiplikation $\mu\cdot[a] := [\mu a]$ für $\mu\neq 0$ ist mit $\sim$ verträglich: $a' = \lambda a$ ⇒ $\mu a' = \lambda(\mu a)\sim\mu a$. Z.B. $3\cdot[(1,2)] = [(3,6)] = [(1,2)]$ – egal welcher Vertreter.`
  },
  {
    id: "la5_s5_a25",
    title: "Serie 5, Aufgabe 25: Graph U_f und Nullstellenmenge N_f eines Funktionals",
    category: "5a Unterräume",
    type: "aufgabe",
    front: R`Sei $f:\mathbb{R}^n\to\mathbb{R}$ ein Funktional $\neq 0$. Zeige: (a) $U_f := \{(x,f(x)): x\in\mathbb{R}^n\}\subseteq\mathbb{R}^{n+1}$ ist ein nicht-trivialer UR; (b),(c) Dimension und Basis; (d) $N_f := \{x: f(x) = 0\}$ ist für $n\ge 2$ ein nicht-trivialer UR; (e) Basis von $N_f$ für $f(x_1,x_2,x_3) = x_1-x_2+2x_3$.`,
    back: R`Mit $c_i := f(e_i)$ gilt $f(\alpha_1,\dots,\alpha_n) = c_1\alpha_1+\dots+c_n\alpha_n$ (∗).<br>
<b>(a)</b> $(0,f(0)) = (0,0)\in U_f$; $(x,f(x))+(y,f(y)) = (x+y,f(x+y))$; $\lambda(x,f(x)) = (\lambda x,f(\lambda x))$. Nicht-trivial: $(e_1,c_1)\neq 0$ und $(0,\dots,0,1)\notin U_f$.<br>
<b>(b),(c)</b> Basis $\{(e_1,c_1),\dots,(e_n,c_n)\}$: erzeugt, da $\sum\alpha_i(e_i,c_i) = (x,f(x))$; l.u., da die ersten $n$ Koordinaten $(\lambda_1,\dots,\lambda_n)$ sind. $\dim(U_f) = n$.<br>
<b>(d)</b> $f(0) = 0$, $f(x+y) = 0+0$, $f(\lambda x) = 0$ ⇒ UR. $N_f\neq\mathbb{R}^n$ (da $f\neq 0$). $N_f\neq\{0\}$ für $n\ge 2$: mit $c_j\neq 0$, $i\neq j$ ist $z := c_je_i-c_ie_j\neq 0$ und $f(z) = c_jc_i-c_ic_j = 0$.<br>
<b>(e)</b> $x_1 = x_2-2x_3$ ⇒ $(x_1,x_2,x_3) = x_2(1,1,0)+x_3(-2,0,1)$; Basis $\{(1,1,0),(-2,0,1)\}$.`,
    meta: "Serie 5, Aufgabe 25 (N_f ist der Kern von f, Kap. 10)",
    explanation: R`<b>$U_f$ = Graph</b> der linearen Funktion $f$: Für $n = 1$ eine Gerade $y = c_1x$ durch $0$ in $\mathbb{R}^2$, für $n = 2$ eine Ebene $z = c_1x+c_2y$ in $\mathbb{R}^3$. Graphen linearer Abbildungen sind immer Unterräume (der Graph „sieht aus wie” der Definitionsbereich, daher $\dim(U_f) = n$).<br><br>
<b>$N_f$ = Kern</b> (Kap. 10): eine „Hyperebene” der Dimension $n-1$ (Stammbach III.6.10). In (e): eine Ebene durch $0$ mit Normalenvektor $(1,-1,2)$.<br><br>
<b>Rezept für (e):</b> Gleichung nach einer Variablen auflösen, die übrigen als freie Parameter nehmen, und den Vektor nach den Parametern „auseinanderziehen”.`,
    example: R`$n = 2$, $f(x_1,x_2) = 3x_1-x_2$: $U_f = \langle\{(1,0,3),(0,1,-1)\}\rangle$; z.B. $(2,5,f(2,5)) = (2,5,1) = 2(1,0,3)+5(0,1,-1)$ ✓.<br>
(e) Probe: $f(1,1,0) = 1-1+0 = 0$, $f(-2,0,1) = -2-0+2 = 0$ ✓; $(4,6,1)\in N_f$ ($4-6+2 = 0$) $= 6(1,1,0)+1\cdot(-2,0,1)$ ✓.`,
    counterexample: R`<b>$n = 1$:</b> Für $f(x) = 3x$ auf $\mathbb{R}$ ist $N_f = \{0\}$ – trivial. Deshalb braucht (d) $n\ge 2$.<br>
<b>Nicht linear:</b> Für $g(x) = x_1^2$ ist $\{(x,g(x))\}$ kein UR: $(1,0,1)+(1,0,1) = (2,0,2)$, aber $g(2,0) = 4\neq 2$.<br>
<b>Inhomogen:</b> $\{x: f(x) = 1\}$ ist ein affiner Raum, kein UR.`
  }
];
})();
