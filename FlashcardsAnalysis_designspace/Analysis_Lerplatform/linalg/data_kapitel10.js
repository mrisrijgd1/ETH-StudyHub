/* ==========================================================================
   LINEARE ALGEBRA I – KAPITEL 10: Kern, Bild und Rang einer linearen Abbildung
   (Stand des Skripts: bis KW 47, Tag 2 – Definition des Rangs)
   Lineare Algebra I – Prof. Dr. Lorenz Halbeisen, HS 2026
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_KAPITEL_10 = [
  {
    id: "la10_bild_satz_10_1",
    title: "Definition Bild & Satz 10.1: φ[V] ist ein Unterraum von W",
    category: "10a Kern, Bild und Rang",
    type: "satz",
    front: R`Was ist das <b>Bild</b> $\varphi[V]$ von $\varphi\in\mathrm{Hom}(V,W)$? Beweise <b>Satz 10.1</b>: $\varphi[V]$ ist ein Unterraum von $W$.`,
    back: R`Im Folgenden seien $V,W$ endl.-dim. VR über $K$.<br>
<b>Definition:</b> Ist $\varphi\in\mathrm{Hom}(V,W)$, so heisst
$$\varphi[V] := \{\varphi(x): x\in V\}\subseteq W$$
das <b>Bild</b> von $\varphi$, bezeichnet mit $\mathrm{Bild}(\varphi)$.<br><br>
<b>Satz 10.1:</b> $\varphi[V]\subseteq W$ ist ein Unterraum von $W$.<br>
<b>Beweis:</b> Da $\varphi(0_V) = 0_W$, ist $0_W\in\varphi[V]$. Sind $y_1,y_2\in\varphi[V]$, so existieren $x_1,x_2\in V$ mit $\varphi(x_1) = y_1$, $\varphi(x_2) = y_2$, und weil $\varphi$ linear ist:
$$\varphi(\lambda x_1+\mu x_2) = \lambda\varphi(x_1)+\mu\varphi(x_2) = \lambda y_1+\mu y_2\in\varphi[V].$$
Somit ist $\langle\varphi[V]\rangle = \varphi[V]$, und $\varphi[V]$ ist ein UR von $W$ (Lemma 5.0).`,
    meta: "Skript: Kap. 10, Definition Bild, Satz 10.1 mit Beweis",
    explanation: R`<b>Das Bild = alles, was $\varphi$ „erreicht”.</b> Es wird von den Bildern einer Basis aufgespannt: $\varphi[V] = \langle\{\varphi(x_1),\dots,\varphi(x_n)\}\rangle$ – in Matrixsprache der <b>Spaltenraum</b> von $A_\varphi$ (Stammbach III.2.14, III.4.2).<br><br>
<b>Beweismuster</b> wie in Kap. 5: $0$ liegt drin, und Linearkombinationen bleiben drin ⇒ Lemma 5.0. Der Schlüssel ist, dass man zu Bildpunkten <b>Urbilder</b> wählen, diese kombinieren und dann die Linearität nutzen kann.<br><br>
<b>Bedeutung für Gleichungssysteme:</b> $A x = b$ ist genau dann lösbar, wenn $b$ im Bild (Spaltenraum) liegt. $\varphi$ ist <b>surjektiv</b> genau dann, wenn $\varphi[V] = W$.`,
    example: R`<b>1.</b> $\varphi(x,y,z) = (x+y,y-z)$: $\varphi[\mathbb{R}^3] = \mathbb{R}^2$ (z.B. $(1,0) = \varphi(1,0,0)$ und $(0,1) = \varphi(0,1,0)-\varphi(1,0,0) = \varphi(-1,1,0)$).<br>
<b>2.</b> Mathematica-Beispiel $B_\varphi = \mathrm{diag}(-2,2,0)$: $\varphi[\mathbb{R}^3] = \langle\{x_1,x_2\}\rangle = \langle\{(0,1,1),(1,1,0)\}\rangle$, eine Ebene.<br>
<b>3.</b> Ableitung $V_{\le 3}\to W_{\le 2}$: Bild = ganz $W$ (jedes $a+bx+cx^2$ ist Ableitung von $ax+\tfrac b2x^2+\tfrac c3x^3$).`,
    counterexample: R`<b>1. Bild einer nicht-linearen Abbildung:</b> $x\mapsto(x,x^2)$ hat als Bild die Parabel – kein UR.<br>
<b>2. Urbild ist kein UR:</b> $\{x: \varphi(x) = (1,0)\}$ für $\varphi(x,y,z) = (x+y,y-z)$ enthält $0$ nicht – ein affiner Raum, kein Unterraum.<br>
<b>3.</b> Das Bild von $\mathrm{diag}(-2,2,0)$ ist nicht $\mathbb{R}^3$: $x_3 = (1,0,1)$ wird nie getroffen.`
  },
  {
    id: "la10_kern_satz_10_2",
    title: "Definition Kern & Satz 10.2: Ker(φ) ist ein Unterraum von V",
    category: "10a Kern, Bild und Rang",
    type: "satz",
    front: R`Was ist der <b>Kern</b> $\mathrm{Ker}(\varphi)$ von $\varphi\in\mathrm{Hom}(V,W)$? Beweise <b>Satz 10.2</b>: $\mathrm{Ker}(\varphi)$ ist ein Unterraum von $V$.`,
    back: R`<b>Definition:</b> Ist $\varphi\in\mathrm{Hom}(V,W)$, so heisst
$$\{x\in V: \varphi(x) = 0_W\}\subseteq V$$
der <b>Kern</b> von $\varphi$, bezeichnet mit $\mathrm{Ker}(\varphi)$.<br><br>
<b>Satz 10.2:</b> $\mathrm{Ker}(\varphi)\subseteq V$ ist ein Unterraum von $V$.<br>
<b>Beweis:</b> Da $\varphi(0_V) = 0_W$, ist $0_V\in\mathrm{Ker}(\varphi)$. Sind $x_1,x_2\in\mathrm{Ker}(\varphi)$, d.h. $\varphi(x_1) = \varphi(x_2) = 0_W$, so ist
$$\varphi(\lambda x_1+\mu x_2) = \lambda\underbrace{\varphi(x_1)}_{=0_W}+\mu\underbrace{\varphi(x_2)}_{=0_W} = 0_W,$$
also $\lambda x_1+\mu x_2\in\mathrm{Ker}(\varphi)$. Somit ist $\langle\mathrm{Ker}(\varphi)\rangle = \mathrm{Ker}(\varphi)$ – ein UR von $V$.`,
    meta: "Skript: Kap. 10, Definition Kern, Satz 10.2 mit Beweis; vgl. Kap. 7 Bem. und Serie 5, Aufgabe 25(d)",
    explanation: R`<b>Der Kern = alles, was $\varphi$ „vernichtet”</b> – die Lösungsmenge des <b>homogenen</b> Systems $A_\varphi x = 0$. Er misst, wie viel Information $\varphi$ verliert.<br><br>
<b>Ausblick (Stammbach III.2.9, noch nicht im Skript):</b> $\varphi$ ist genau dann <b>injektiv</b>, wenn $\mathrm{Ker}(\varphi) = \{0_V\}$. Denn $\varphi(u) = \varphi(v)\iff\varphi(u-v) = 0_W\iff u-v\in\mathrm{Ker}(\varphi)$. Die Urbildmengen $\{x:\varphi(x) = y\}$ sind genau die affinen Räume $x_0+\mathrm{Ker}(\varphi)$ – also Elemente von $V/\mathrm{Ker}(\varphi)$ (Kap. 5).<br><br>
<b>Ausblick Dimensionsformel</b> (Stammbach III.2.15): $\dim(\mathrm{Ker}(\varphi))+\mathrm{Rang}(\varphi) = \dim(V)$.`,
    example: R`<b>1.</b> (Stammbach III.2.17) $\varphi(x_1,\dots,x_4) = (x_1+2x_2-2x_4,\;-x_1+x_2-x_3,\;x_2+x_3+x_4)$: $\mathrm{Ker}(\varphi) = \langle\{(6,1,-5,4)\}\rangle$. Probe: $(6+2-8,\,-6+1+5,\,1-5+4) = (0,0,0)$ ✓.<br>
<b>2.</b> $\varphi(x,y,z) = (x+y,y-z)$: $\mathrm{Ker}(\varphi) = \langle\{(-1,1,1)\}\rangle$.<br>
<b>3.</b> Kap. 7: $\mathrm{Ker}(\varphi)\ni 1-\sqrt 2+\sqrt 3$ im Wurzel-Beispiel; Serie 5: $N_f = \mathrm{Ker}(f)$.`,
    counterexample: R`<b>1.</b> $\{x: \varphi(x) = y_0\}$ für $y_0\neq 0_W$ ist kein UR ($0_V$ fehlt).<br>
<b>2. Kern ≠ „was auf kleine Werte geht”:</b> Für $\varphi(a,b) = (a,0)$ ist $\mathrm{Ker}(\varphi) = \{(0,b)\}$; $(0.001,5)$ liegt <b>nicht</b> im Kern, obwohl $\varphi(0.001,5)$ „klein” ist.<br>
<b>3.</b> Ableitung auf Polynomen: $\mathrm{Ker} = $ Konstanten $\neq\{0\}$ – also nicht injektiv ($x^2+1$ und $x^2+7$ haben dieselbe Ableitung).`
  },
  {
    id: "la10_def_rang",
    title: "Definition: Rang einer linearen Abbildung",
    category: "10a Kern, Bild und Rang",
    type: "definition",
    front: R`Wie ist der <b>Rang</b> von $\varphi\in\mathrm{Hom}(V,W)$ definiert, und welche Schranke gilt sofort?`,
    back: R`<b>Definition:</b> Ist $\varphi\in\mathrm{Hom}(V,W)$, so heisst
$$\dim(\varphi[V])\le\dim(W)$$
der <b>Rang</b> von $\varphi$, bezeichnet mit $\mathrm{Rang}(\varphi)$.<br><br>
Die Ungleichung folgt aus Satz 10.1 ($\varphi[V]$ ist UR von $W$) und Lemma 5.1 (i). Ebenso gilt $\mathrm{Rang}(\varphi)\le\dim(V)$, da $\varphi[V]$ von den $n$ Vektoren $\varphi(x_1),\dots,\varphi(x_n)$ erzeugt wird.`,
    meta: "Skript: Kap. 10, Definition Rang (Stand: Ende des Skripts, KW 47)",
    explanation: R`<b>Rang = „wie viele Dimensionen überleben”</b> die Abbildung. Er ist <b>basisunabhängig</b> (Bild ist ein Unterraum, egal welche Basis man nimmt) – deshalb haben alle Darstellungsmatrizen derselben Abbildung denselben Rang (Stammbach III.4.3).<br><br>
<b>In Matrixsprache</b> (Ausblick, Stammbach III.4.2): Rang = maximale Anzahl l.u. <b>Spalten</b> von $A_\varphi$ = Dimension des Spaltenraums. Später: Zeilenrang = Spaltenrang (denn $\mathrm{Rang}(\varphi^*) = \mathrm{Rang}(\varphi)$, und $A_{\varphi^*} = A_\varphi^t$, Kap. 9).<br><br>
<b>Ausblick Dimensionsformel:</b> $\mathrm{Rang}(\varphi)+\dim(\mathrm{Ker}(\varphi)) = \dim(V)$ – was nicht im Kern verschwindet, landet im Bild. Für $\dim(V) = \dim(W)$: injektiv ⟺ surjektiv ⟺ Isomorphismus (Stammbach III.4.6).`,
    example: R`<b>1.</b> $\mathrm{diag}(-2,2,0)$ (Mathematica-Beispiel): Rang $2$; Kern $\langle x_3\rangle$ hat Dimension $1$; $2+1 = 3 = \dim(V)$.<br>
<b>2.</b> Ableitung $V_{\le 3}\to W_{\le 2}$: $A_\varphi = \begin{pmatrix}0&1&0&0\\0&0&2&0\\0&0&0&3\end{pmatrix}$, Rang $3 = \dim(W)$ (surjektiv), Kern = Konstanten (Dim. 1), $3+1 = 4$.<br>
<b>3.</b> Mathematica $4\times 5$-Beispiel: $\tilde A_\varphi$ hat 3 l.u. Spalten ⇒ Rang $3$.`,
    counterexample: R`<b>1. Rang ≠ Anzahl Spalten ≠ 0:</b> $\begin{pmatrix}1&2\\2&4\end{pmatrix}$ hat 2 Spalten, aber Rang $1$ (zweite Spalte $= 2\cdot$ erste).<br>
<b>2. Rang ≤ min(dim V, dim W):</b> Eine Abbildung $\mathbb{R}^5\to\mathbb{R}^2$ hat höchstens Rang 2 – kann also nie injektiv sein (Kern hat Dimension $\ge 3$).<br>
<b>3.</b> Nullabbildung: Rang $0$.`
  },
  {
    id: "la10_bsp_kern_bild",
    title: "Beispiel: Kern und Bild konkret bestimmen",
    category: "10a Kern, Bild und Rang",
    type: "beispiel",
    front: R`Bestimme Kern, Bild und Rang von $\varphi:\mathbb{R}^3\to\mathbb{R}^3$ mit $A_\varphi = \begin{pmatrix}1&2&3\\2&4&6\\1&0&1\end{pmatrix}$ (Standardbasis).`,
    back: R`<b>Kern:</b> $A_\varphi x = 0$: Zeile 2 = $2\cdot$ Zeile 1, also bleiben $x_1+2x_2+3x_3 = 0$ und $x_1+x_3 = 0$. Mit $x_3 = t$: $x_1 = -t$, $2x_2 = -x_1-3x_3 = -2t$, $x_2 = -t$:
$$\mathrm{Ker}(\varphi) = \langle\{(-1,-1,1)\}\rangle.$$
<b>Bild</b> = Spann der Spalten $(1,2,1),(2,4,0),(3,6,1)$. Es gilt $(3,6,1) = (1,2,1)+(2,4,0)$, und $(1,2,1),(2,4,0)$ sind l.u. (Lemma 4.2):
$$\varphi[\mathbb{R}^3] = \langle\{(1,2,1),(2,4,0)\}\rangle,\qquad\mathrm{Rang}(\varphi) = 2.$$
Kontrolle: $\dim(\mathrm{Ker}(\varphi))+\mathrm{Rang}(\varphi) = 1+2 = 3 = \dim(\mathbb{R}^3)$.`,
    meta: "Übungsbeispiel zu Kap. 10 (Rechenweg wie Stammbach III.2.17; Bild = Spann der Spalten)",
    explanation: R`<b>Rezept:</b><br>
• <b>Kern</b> = Lösungsmenge von $A_\varphi x = 0$ (homogenes LGS lösen, freie Variablen als Parameter, Basisvektoren ablesen – wie in Serie 5, Aufgabe 25(e)).<br>
• <b>Bild</b> = $\langle$Spalten von $A_\varphi\rangle$ (Bilder der Basisvektoren); mit Lemma 4.2 / Satz 4.4 überflüssige Spalten streichen ⇒ Basis des Bildes.<br>
• <b>Rang</b> = Anzahl der übrig gebliebenen Spalten.<br><br>
<b>Die Abhängigkeit der Spalten und der Kern hängen zusammen:</b> Die Relation $1\cdot s_1+1\cdot s_2-1\cdot s_3 = 0$ zwischen den Spalten ist genau der Kernvektor $(1,1,-1) = -(-1,-1,1)$. Jede lineare Abhängigkeit der Spalten ist ein Kernvektor.`,
    example: R`Probe Kern: $A_\varphi(-1,-1,1)^t = (-1-2+3,\,-2-4+6,\,-1+0+1)^t = (0,0,0)^t$ ✓.<br>
$(5,10,1)$ liegt im Bild? Ansatz $a(1,2,1)+b(2,4,0) = (5,10,1)$ ⇒ $a = 1$, $b = 2$ ✓ (Urbild z.B. $(1,2,0)$: $A_\varphi(1,2,0)^t = (5,10,1)^t$).`,
    counterexample: R`$(1,0,0)$ liegt <b>nicht</b> im Bild: $a+2b = 1$, $2a+4b = 0$ widersprechen sich ($2\cdot 1\neq 0$). Also ist $A_\varphi x = (1,0,0)^t$ unlösbar – $\varphi$ ist nicht surjektiv (und wegen Kern $\neq\{0\}$ auch nicht injektiv).`
  }
];
})();
