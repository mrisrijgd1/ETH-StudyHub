/* ==========================================================================
   LINEARE ALGEBRA I – KAPITEL 9: Der Bidualraum und die duale Abbildung
   (V**, Satz 9.0, φ*, Satz 9.1, Transponierte, Satz 9.1 A_φ* = (A_φ)ᵗ)
   Lineare Algebra I – Prof. Dr. Lorenz Halbeisen, HS 2026
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_KAPITEL_9 = [
  // ========================================================================
  // 9a DER BIDUALRAUM
  // ========================================================================
  {
    id: "la9_def_bidual",
    title: "Definition: Bidualraum V**",
    category: "9a Der Bidualraum",
    type: "definition",
    front: R`Was ist der <b>Bidualraum</b> $V^{**}$ eines VR $V$ über $K$, und welches Element $x^{**}\in V^{**}$ gehört in natürlicher Weise zu $x\in V$?`,
    back: R`Ist $V$ ein VR über $K$, so ist auch $V^* = \mathrm{Hom}(V,K)$ ein VR über $K$, und somit ist auch $\mathrm{Hom}(V^*,K)$ ein VR über $K$.<br><br>
<b>Definition:</b> Der Vektorraum $\mathrm{Hom}(V^*,K)$ heisst <b>Bidualraum</b> von $V$ und wird mit $V^{**}$ bezeichnet.<br><br>
Zu $x\in V$ gehört das Funktional auf Funktionalen
$$x^{**}: V^*\to K,\qquad x^{**}(y^*) := y^*(x),$$
„<b>Auswerten an der Stelle $x$</b>”.`,
    meta: "Skript: Kap. 9, Einleitung und Definition Bidualraum",
    explanation: R`<b>Rollentausch:</b> Normalerweise ist das Funktional $y^*$ das Werkzeug und $x$ das Objekt: $y^*(x)$. Beim Bidual dreht man das um: <b>$x$ wird zum Werkzeug</b>, das jedes Funktional „an sich” auswertet. Der Ausdruck $y^*(x)$ ist symmetrisch in der Rolle – man kann ihn als Funktion von $x$ (bei festem $y^*$) oder als Funktion von $y^*$ (bei festem $x$) lesen.<br><br>
<b>Zu.Inf. (Skript):</b> Die Paarung $V^*\times V\to K$, $(y^*,x)\mapsto y^*(x)$ ist in beiden Argumenten linear (<b>bilinear</b>). Linear in $y^*$ liefert $x^{**}\in V^{**}$, linear in $x$ liefert die Linearität von $x\mapsto x^{**}$.<br><br>
<b>In Koordinaten</b> ($V\cong K^n$): Vektoren sind Spalten, Funktionale Zeilen, $y^*(x)$ = Zeile mal Spalte. $x^{**}$ ist dann „die Spalte $x$, die von rechts an Zeilen multipliziert wird”.`,
    example: R`$V = \mathbb{R}^2$, $x = (2,5)$, $\{e_1^*,e_2^*\}$ duale Basis. Für $y^* = 3e_1^*-e_2^*$ ist $x^{**}(y^*) = y^*(x) = 3\cdot 2-5 = 1$; für $y^* = e_2^*$ ist $x^{**}(e_2^*) = 5$.<br>
$V$ = Polynome, $p = 1+x^2$: $p^{**}(\mathrm{ev}_3) = \mathrm{ev}_3(p) = 10$, $p^{**}(\int_0^1) = \tfrac43$.`,
    counterexample: R`<b>Nicht jedes Element von $V^{**}$ hat diese Form, wenn $V$ unendlich-dimensional ist:</b> Für $c_{00}(\mathbb{F}_2)$ ist $x\mapsto x^{**}$ zwar injektiv, aber nicht surjektiv (Bem. nach Satz 9.0) – $V^{**}$ ist dort noch grösser als $V^*$.<br>
<b>$x^{**}$ ist nicht $x^*$:</b> $x^*$ (Element einer dualen Basis) braucht eine ganze Basis und liegt in $V^*$; $x^{**}$ braucht keine Basis und liegt in $V^{**}$.`
  },
  {
    id: "la9_satz_9_0",
    title: "Satz 9.0: V → V**, x ↦ x** ist ein (kanonischer) Isomorphismus",
    category: "9a Der Bidualraum",
    type: "satz",
    front: R`Formuliere <b>Satz 9.0</b>. Was ist das Besondere an diesem Isomorphismus im Vergleich zu $V\cong V^*$?`,
    back: R`<b>Satz 9.0:</b> Ist $V$ ein endl.-dim. VR über $K$, so ist die Abbildung
$$\varphi: V\to V^{**},\qquad x\mapsto x^{**},\qquad\text{definiert durch}\quad x^{**}(y^*) := y^*(x),$$
ein <b>Isomorphismus</b> von $V$ in den Bidualraum $V^{**}$.<br><br>
Die Vektoren aus $V$ können also in natürlicher Weise als Vektoren aus $V^{**}$ aufgefasst werden; $\varphi$ ist ein <b>kanonischer Isomorphismus</b> zwischen $V$ und $V^{**}$.<br>
<b>Bem.:</b> Für unendlich-dim. VR ist $\varphi$ immer noch injektiv, aber nicht mehr surjektiv.`,
    meta: "Skript: Kap. 9, Satz 9.0 und Bem.",
    explanation: R`<b>„Kanonisch” = ohne Wahl.</b> $V\cong V^*$ gilt zwar (gleiche Dimension, Satz 6.2), aber jeder Isomorphismus $V\to V^*$ hängt von einer gewählten Basis ab (z.B. $x_i\mapsto x_i^*$, und $x_i^*$ hängt von der ganzen Basis ab). $x\mapsto x^{**}$ dagegen ist für jeden VR gleich definiert – es gibt nichts zu wählen.<br><br>
<b>Konsequenz:</b> Man darf $V$ und $V^{**}$ <b>identifizieren</b>. Damit wird z.B. $\varphi^{**} = \varphi$ und $(A^t)^t = A$ (Bem. nach der Transponierten): Zweimal dualisieren führt zurück.<br><br>
<b>Beweisstruktur</b> (nächste Karte): (1) $x^{**}\in V^{**}$, (2) $\varphi$ linear, (3) surjektiv, (4) injektiv – (3),(4) mit einem Paar dualer Basen; dort braucht man endliche Dimension.`,
    example: R`$V = \mathbb{R}^2$: Mit der dualen Basis $\{e_1^*,e_2^*\}$ und deren dualer Basis $\{e_1^{**},e_2^{**}\}\subseteq V^{**}$ gilt $e_i^{**}(e_j^*) = e_j^*(e_i) = \delta_j^i$ – also ist $e_i^{**}$ genau das Bild von $e_i$ unter $\varphi$. Z.B. $(2,5)^{**} = 2e_1^{**}+5e_2^{**}$.`,
    counterexample: R`<b>$V\to V^*$ ist nicht kanonisch:</b> Die „natürlich wirkende” Zuordnung $x\mapsto x^*$ hängt von der Basis ab: In $\{(1,0),(0,1)\}$ ist $(1,0)^*(a,b) = a$, in $\{(1,0),(1,1)\}$ ist $(1,0)^*(a,b) = a-b$ – derselbe Vektor, zwei verschiedene Bilder.<br>
<b>Unendlich:</b> Für $c_{00}(\mathbb{F}_2)$ ist $\dim(V)\lt\dim(V^*)\le\dim(V^{**})$, also kann $\varphi$ nicht surjektiv sein.`
  },
  {
    id: "la9_beweis_9_0",
    title: "Beweis von Satz 9.0",
    category: "9a Der Bidualraum",
    type: "beweis",
    front: R`Beweise <b>Satz 9.0</b>: $x^{**}\in V^{**}$, $\varphi: x\mapsto x^{**}$ ist linear, surjektiv und injektiv (für endl.-dim. $V$).`,
    back: R`<b>• $x^{**}\in\mathrm{Hom}(V^*,K)$:</b>
$$x^{**}(\lambda y_1^*+y_2^*) = (\lambda y_1^*+y_2^*)(x) = \lambda y_1^*(x)+y_2^*(x) = \lambda x^{**}(y_1^*)+x^{**}(y_2^*)$$
(Def. von $x^{**}$; Def. der VR-Operationen in $V^*$, punktweise; Def. von $x^{**}$), und $x^{**}(y^*) = y^*(x)\in K$.<br>
<b>• $\varphi$ linear:</b> $\varphi(\lambda x_1+x_2)(y^*) = y^*(\lambda x_1+x_2) = \lambda y^*(x_1)+y^*(x_2) = (\lambda\varphi(x_1)+\varphi(x_2))(y^*)$ ($y^*$ linear). [Gilt auch unendlich-dim.]<br>
Wähle ein Paar dualer Basen $\{x_1,\dots,x_n\}$, $\{x_1^*,\dots,x_n^*\}$.<br>
<b>• surjektiv:</b> Sei $f\in V^{**}$ mit $f(x_j^*) = \lambda_j$. Dann
$$\varphi\Big(\sum_i\lambda_ix_i\Big)(x_j^*) = \sum_i\lambda_i\,x_i^{**}(x_j^*) = \sum_i\lambda_i\underbrace{x_j^*(x_i)}_{=\delta_j^i} = \lambda_j,$$
also stimmt $\varphi(\sum\lambda_ix_i)$ auf der Basis $\{x_j^*\}$ mit $f$ überein ⇒ $\varphi(\sum\lambda_ix_i) = f$.<br>
<b>• injektiv:</b> $u = \sum\lambda_ix_i\neq v = \sum\mu_ix_i$ ⇒ $\lambda_j\neq\mu_j$ für ein $j$ ⇒ $u^{**}(x_j^*) = \lambda_j\neq\mu_j = v^{**}(x_j^*)$ ⇒ $\varphi(u)\neq\varphi(v)$.`,
    meta: "Skript: Kap. 9, Beweis von Satz 9.0 mit Zu.Inf. (Begründung der Gleichheitszeichen)",
    explanation: R`<b>Jedes Gleichheitszeichen hat eine von drei Begründungen:</b> (1) Definition von $x^{**}$, (2) Linearität eines Funktionals, (3) punktweise Definition der VR-Operationen in $V^*$ bzw. $V^{**}$. Wer diese drei Werkzeuge sicher unterscheidet, kann alle Beweise in Kap. 9 selbst führen.<br><br>
<b>Surjektivität – Idee:</b> Ein Element $f\in V^{**}$ ist durch seine Werte auf der Basis $\{x_j^*\}$ von $V^*$ bestimmt. Diese Werte $\lambda_j$ sind die Koordinaten des gesuchten Urbilds $\sum\lambda_jx_j$ – weil $x_j^*$ genau die $j$-te Koordinate abliest.<br><br>
<b>Injektivität – Idee:</b> Verschiedene Vektoren unterscheiden sich in einer Koordinate, und das passende Koordinatenfunktional „sieht” den Unterschied. (Alternativ: injektiv + $\dim(V) = \dim(V^{**})$ ⇒ bijektiv.)`,
    example: R`$V = \mathbb{R}^2$, $f\in V^{**}$ mit $f(e_1^*) = 4$, $f(e_2^*) = -1$. Urbild: $x = 4e_1-e_2 = (4,-1)$. Probe für $y^* = 2e_1^*+3e_2^*$: $f(y^*) = 2\cdot 4+3\cdot(-1) = 5$ und $y^*(x) = 8-3 = 5$ ✓.`,
    counterexample: R`<b>Wo endliche Dimension gebraucht wird:</b> Im Surjektivitätsbeweis bildet man $\sum_i\lambda_ix_i$ – bei einer unendlichen Basis wäre das eine unendliche Summe, also keine LK. Für $c_{00}(\mathbb{F}_2)$ und $f\in V^{**}$ mit $f(e_j^*) = 1$ für alle $j$ müsste das Urbild $(1,1,1,\dots)$ sein, das nicht in $c_{00}$ liegt.`
  },
  // ========================================================================
  // 9b DIE DUALE ABBILDUNG
  // ========================================================================
  {
    id: "la9_def_duale_abbildung",
    title: "Definition: Die duale Abbildung φ*",
    category: "9b Die duale Abbildung und die Transponierte",
    type: "definition",
    front: R`Wie ist zu $\varphi\in\mathrm{Hom}(V,W)$ die <b>duale Abbildung</b> $\varphi^*$ definiert? In welchen Räumen liegen die beteiligten Objekte?`,
    back: R`Sind $V$ und $W$ VR über demselben Körper $K$ und $\varphi\in\mathrm{Hom}(V,W)$, so ist
$$\varphi^*: W^*\to V^*,\qquad y^*\mapsto\varphi^*(y^*),\qquad\text{definiert durch}\quad\big(\varphi^*(y^*)\big)(x) := y^*\big(\varphi(x)\big),$$
die zu $\varphi$ <b>duale Abbildung</b>.<br><br>
<b>Zu.Inf.:</b> $\underbrace{(\underbrace{\varphi^*(\underbrace{y^*}_{\in W^*})}_{\in V^*})(\underbrace{x}_{\in V})}_{\in K} = \underbrace{y^*(\underbrace{\varphi(x)}_{\in W})}_{\in K}$.<br>
Kurz: $\varphi^*(y^*) = y^*\circ\varphi$ – „<b>erst $\varphi$, dann messen</b>”.`,
    meta: "Skript: Kap. 9, Definition duale Abbildung mit Zu.Inf.",
    explanation: R`<b>Die Richtung dreht sich um!</b> $\varphi$ geht von $V$ nach $W$, aber $\varphi^*$ geht von $W^*$ nach $V^*$. Grund: Ein Messgerät $y^*$ auf $W$ wird zu einem Messgerät auf $V$, indem man einen Vektor $x\in V$ zuerst mit $\varphi$ nach $W$ transportiert und dann misst. Man „zieht” Funktionale <b>zurück</b> (pull-back).<br><br>
<b>Bild (Stammbach III.6.13):</b>
$V\xrightarrow{\varphi}W\xrightarrow{y^*}K$ – die Verknüpfung $y^*\circ\varphi$ ist ein Funktional auf $V$.<br><br>
<b>Konsequenzen:</b> $(\psi\circ\varphi)^* = \varphi^*\circ\psi^*$ (Reihenfolge dreht sich), und in Matrizen: $A_{\varphi^*} = (A_\varphi)^t$ (Satz 9.1) – das erklärt $(AB)^t = B^tA^t$.`,
    example: R`$\varphi:\mathbb{R}^2\to\mathbb{R}^2$, $\varphi(a,b) = (a+b,2b)$; $y^* = f_{3,1}$, d.h. $y^*(u,v) = 3u+v$. Dann
$$(\varphi^*(y^*))(a,b) = y^*(a+b,2b) = 3a+3b+2b = 3a+5b,$$
also $\varphi^*(f_{3,1}) = f_{3,5}$.`,
    counterexample: R`<b>Falsche Richtung:</b> $\varphi^*(x^*) := x^*\circ\varphi$ für $x^*\in V^*$ ergibt keinen Sinn, wenn $V\neq W$: $\varphi(x)\in W$, aber $x^*$ ist nur auf $V$ definiert. Für $\varphi:\mathbb{R}^3\to\mathbb{R}^2$ ist $\varphi^*:\mathbb{R}^{2*}\to\mathbb{R}^{3*}$ – von Zeilen der Länge 2 zu Zeilen der Länge 3.<br>
<b>Nicht „$\varphi$ angewendet auf das Funktional”:</b> $\varphi(y^*)$ ist sinnlos ($y^*\notin V$).`
  },
  {
    id: "la9_satz_9_1_hom",
    title: "Satz 9.1: φ* ∈ Hom(W*, V*)",
    category: "9b Die duale Abbildung und die Transponierte",
    type: "satz",
    front: R`Beweise <b>Satz 9.1</b>: Ist $\varphi\in\mathrm{Hom}(V,W)$, so ist $\varphi^*\in\mathrm{Hom}(W^*,V^*)$. Was ist die duale Abbildung der Nullabbildung?`,
    back: R`<b>1. $\varphi^*$ ist wohldefiniert</b> (d.h. $\varphi^*(y^*)\in V^*$):
$$\begin{aligned}(\varphi^*(y^*))(\lambda x_1+x_2) &= y^*(\varphi(\lambda x_1+x_2)) &&\text{Def. von }\varphi^*\\&= y^*(\lambda\varphi(x_1)+\varphi(x_2)) &&\varphi\text{ ist linear}\\&= \lambda y^*(\varphi(x_1))+y^*(\varphi(x_2)) &&y^*\text{ ist linear}\\&= \lambda(\varphi^*(y^*))(x_1)+(\varphi^*(y^*))(x_2) &&\text{Def. von }\varphi^*\end{aligned}$$
und $(\varphi^*(y^*))(x) = y^*(\varphi(x))\in K$.<br>
<b>2. $\varphi^*$ ist linear:</b>
$$(\varphi^*(\lambda y_1^*+y_2^*))(x) = (\lambda y_1^*+y_2^*)(\varphi(x)) = \lambda y_1^*(\varphi(x))+y_2^*(\varphi(x)) = \lambda(\varphi^*(y_1^*))(x)+(\varphi^*(y_2^*))(x)$$
(Def. von $\varphi^*$; Def. von $+$ in $W^*$; Def. von $\varphi^*$).<br>
<b>Bem.:</b> Ist $\varphi$ die Nullabbildung, so ist auch $\varphi^*$ die Nullabbildung: $(\varphi^*(y^*))(x) = y^*(0_W) = 0_K$ für alle $x$.`,
    meta: "Skript: Kap. 9, Satz 9.1 (erster Teil) mit Beweis und Bem.",
    explanation: R`<b>Zwei Linearitäten, zwei Ebenen:</b><br>
1. Für <b>festes</b> $y^*$ ist $\varphi^*(y^*) = y^*\circ\varphi$ eine Verknüpfung linearer Abbildungen – linear nach Satz 7.2. (Das ist Teil 1.)<br>
2. Als Funktion von $y^*$ ist $y^*\mapsto y^*\circ\varphi$ linear, weil die Operationen in $W^*$ punktweise sind. (Das ist Teil 2.)<br><br>
Man muss stets wissen, <b>wo</b> man gerade ist: Teil 1 prüft Linearität in $x\in V$, Teil 2 in $y^*\in W^*$. Diese Doppelstruktur ist dieselbe wie beim Bidual (Satz 9.0).`,
    example: R`Mit $\varphi(a,b) = (a+b,2b)$: $\varphi^*(f_{3,1}) = f_{3,5}$ und $\varphi^*(f_{1,0}) = f_{1,1}$ (denn $(a+b)$). Linearität: $\varphi^*(f_{3,1}+2f_{1,0}) = \varphi^*(f_{5,1})$; $5(a+b)+2b = 5a+7b$, also $f_{5,7} = f_{3,5}+2f_{1,1}$ ✓.`,
    counterexample: R`<b>Nicht-lineares $\varphi$:</b> Für $\varphi(a) = a^2$ auf $\mathbb{R}$ und $y^* = \mathrm{id}$ ist $y^*\circ\varphi: a\mapsto a^2$ kein Funktional – Teil 1 scheitert ($\varphi$ linear wird gebraucht).<br>
<b>Nicht-lineares „Funktional”:</b> Für $g(u) = u+1$ statt $y^*$ wäre $g\circ\varphi$ nicht linear ($g\circ\varphi(0) = 1$).`
  },
  {
    id: "la9_satz_9_1_matrix",
    title: "Satz 9.1: A_φ* = (A_φ)ᵗ – die Matrix der dualen Abbildung ist die Transponierte",
    category: "9b Die duale Abbildung und die Transponierte",
    type: "satz",
    front: R`Wie sieht die Darstellungsmatrix von $\varphi^*$ bzgl. der dualen Basen aus? Leite $\eta_j^i = \mu_i^j$ her und definiere die <b>transponierte Matrix</b>.`,
    back: R`Seien $\{x_j\}$, $\{x_j^*\}$ und $\{y_i\}$, $\{y_i^*\}$ Paare dualer Basen, $A_\varphi = (\mu_i^j)_m^n$ (also $\varphi(x_j) = \sum_i\mu_i^jy_i$), und $A_{\varphi^*} = (\eta_j^i)_n^m$ die $(n\times m)$-Matrix von $\varphi^*$ bzgl. $\{y_i^*\}$, $\{x_j^*\}$, d.h. $\varphi^*(y_{i_0}^*) = \sum_j\eta_j^{i_0}x_j^*$.<br>
Einerseits: $(\varphi^*(y_{i_0}^*))(x_{j_0}) = \sum_j\eta_j^{i_0}x_j^*(x_{j_0}) = \eta_{j_0}^{i_0}$.<br>
Andererseits: $(\varphi^*(y_{i_0}^*))(x_{j_0}) = y_{i_0}^*(\varphi(x_{j_0})) = y_{i_0}^*\big(\sum_i\mu_i^{j_0}y_i\big) = \mu_{i_0}^{j_0}$.<br>
Also $\boxed{\eta_j^i = \mu_i^j}$ für alle $i,j$.<br><br>
<b>Definition:</b> Die Matrizen $(\mu_i^j)_m^n$ und $(\eta_j^i)_n^m$ sind zueinander <b>transponiert</b> (Spiegelung an der Diagonale).<br>
<b>Satz 9.1:</b> Für endl.-dim. $V,W$ und Darstellungsmatrizen bzgl. zweier Paare dualer Basen gilt
$$A_{\varphi^*} = (A_\varphi)^t.$$
<b>Bem.:</b> Mit Satz 9.0 ($x\leftrightarrow x^{**}$) ist $\varphi^{**} = \varphi$ und somit $(A^t)^t = A$.`,
    meta: "Skript: Kap. 9, Die Matrix der dualen Abbildung, Definition transponiert, Bsp., Bem., Satz 9.1 (zweiter Teil)",
    explanation: R`<b>Merkbild (Zu.Inf.):</b> In $A_\varphi$ steht in Spalte $j$ das Bild $\varphi(x_j)$ (Koordinaten bzgl. $y_i$). In $A_{\varphi^*}$ steht in Spalte $i$ das Bild $\varphi^*(y_i^*)$ (Koordinaten bzgl. $x_j^*$). Beide Male ist der Eintrag dieselbe Zahl $y_i^*(\varphi(x_j))$ (Serie 8, 33) – nur einmal an Position (Zeile $i$, Spalte $j$), einmal an (Zeile $j$, Spalte $i$).<br><br>
<b>Zeilen ↔ Spalten intuitiv:</b> Ein Funktional $y^*$ ist eine <b>Zeile</b> $c$; $\varphi^*(y^*) = y^*\circ\varphi$ ist die Zeile $c\cdot A_\varphi$. Schreibt man Funktionale als Spalten (Koordinaten bzgl. der dualen Basis), wird daraus $A_\varphi^t\cdot c^t$.<br><br>
<b>Folgen:</b> $(AB)^t = B^tA^t$ (aus $(\psi\circ\varphi)^* = \varphi^*\circ\psi^*$), $(A^t)^t = A$, $(A+B)^t = A^t+B^t$. (Im Skript tragen beide Sätze die Nummer 9.1.)`,
    example: R`<b>Skript:</b> $A = \begin{pmatrix}1&4\\2&5\\3&6\end{pmatrix}$ ⇒ $A^t = \begin{pmatrix}1&2&3\\4&5&6\end{pmatrix}$ („$A$-transponiert”).<br>
<b>Duale Abbildung:</b> $\varphi(a,b) = (a+b,2b)$: $A_\varphi = \begin{pmatrix}1&1\\0&2\end{pmatrix}$, $A_{\varphi^*} = \begin{pmatrix}1&0\\1&2\end{pmatrix}$; $A_{\varphi^*}\begin{pmatrix}3\\1\end{pmatrix} = \begin{pmatrix}3\\5\end{pmatrix}$ ↔ $\varphi^*(f_{3,1}) = f_{3,5}$ ✓.`,
    counterexample: R`<b>$(AB)^t\neq A^tB^t$:</b> $A = \begin{pmatrix}1&1\\0&1\end{pmatrix}$, $B = \begin{pmatrix}1&0\\1&1\end{pmatrix}$: $(AB)^t = \begin{pmatrix}2&1\\1&1\end{pmatrix}^t = \begin{pmatrix}2&1\\1&1\end{pmatrix} = B^tA^t$, aber $A^tB^t = \begin{pmatrix}1&1\\1&2\end{pmatrix}$.<br>
<b>Ohne duale Basen:</b> Nimmt man für $V^*$, $W^*$ beliebige (nicht duale) Basen, ist $A_{\varphi^*}$ im Allgemeinen nicht $(A_\varphi)^t$.`
  },
  {
    id: "la9_bsp_ableitung",
    title: "Beispiel: Ableitung, ihre duale Abbildung und das Integral ∫₀¹",
    category: "9b Die duale Abbildung und die Transponierte",
    type: "beispiel",
    front: R`$V$ = reelle Polynomfunktionen vom Grad $\le 3$ ($\mathcal{B}_V = \{p_0,\dots,p_3\} = \{1,x,x^2,x^3\}$), $W$ = Grad $\le 2$ ($\mathcal{B}_W = \{q_0,q_1,q_2\}$), $\varphi(f) = f'$. Bestimme $A_\varphi$, $A_{\varphi^*}$ und $\varphi^*(\mathrm{int}_0^1)$ für $\mathrm{int}_0^1(f) := \int_0^1f(x)\,dx$.`,
    back: R`$\varphi(p_0) = 0$, $\varphi(p_1) = q_0$, $\varphi(p_2) = 2q_1$, $\varphi(p_3) = 3q_2$:
$$A_\varphi = \begin{pmatrix}0&1&0&0\\0&0&2&0\\0&0&0&3\end{pmatrix},\qquad A_{\varphi^*} = (A_\varphi)^t = \begin{pmatrix}0&0&0\\1&0&0\\0&2&0\\0&0&3\end{pmatrix}.$$
$\mathrm{int}_0^1\in W^*$ (linear), und wegen $\mathrm{int}_0^1(q_j) = \lambda_j$: $\lambda_0 = \int_0^11 = 1$, $\lambda_1 = \int_0^1x = \tfrac12$, $\lambda_2 = \int_0^1x^2 = \tfrac13$, also
$$\mathrm{int}_0^1 = 1\cdot q_0^*+\tfrac12q_1^*+\tfrac13q_2^*,\qquad A_{\varphi^*}\begin{pmatrix}1\\\frac12\\\frac13\end{pmatrix} = \begin{pmatrix}0\\1\\1\\1\end{pmatrix},$$
d.h. $\varphi^*(\mathrm{int}_0^1) = 0\cdot p_0^*+1\cdot p_1^*+1\cdot p_2^*+1\cdot p_3^*$.<br>
Allgemein: $\big(\varphi^*(\mathrm{int}_0^1)\big)(f) = \mathrm{int}_0^1(f') = \int_0^1f'(x)\,dx$.`,
    meta: "Skript: Kap. 9, Zu.Inf. (18.11.2026), begleitendes Beispiel zu Satz 9.1",
    explanation: R`<b>Was ist $\varphi^*(\mathrm{int}_0^1)$ inhaltlich?</b> Das Funktional „erst ableiten, dann von $0$ bis $1$ integrieren”, also nach dem Hauptsatz $f\mapsto f(1)-f(0)$. Und tatsächlich: $p_1^*+p_2^*+p_3^*$ summiert die Koeffizienten von $x,x^2,x^3$, und $f(1)-f(0) = a_1+a_2+a_3$ ✓.<br><br>
<b>Dualbasis-Funktionale</b> lesen Koeffizienten ab: $p_2^*(2+3x^2+5x^3) = 3$; $(2p_1^*+7p_2^*)(1+x+2x^2) = 2\cdot 1+7\cdot 2 = 16$.<br><br>
Das Beispiel zeigt alle Konzepte von Kapitel 6–9 gleichzeitig: Funktional als Zeile, duale Basis, duale Abbildung, Transponierte.`,
    example: R`$\big(\varphi^*(\mathrm{int}_0^1)\big)(2+3x+x^3) = 3+0+1 = 4$ (Koeffizienten von $x,x^2,x^3$). Kontrolle: $\int_0^1(2+3x+x^3)'\,dx = \int_0^1(3+3x^2)\,dx = 3+1 = 4$ ✓; und $f(1)-f(0) = 6-2 = 4$ ✓.`,
    counterexample: R`<b>$A_\varphi$ statt $A_{\varphi^*}$ benutzen:</b> $A_\varphi$ ist $3\times 4$ und erwartet Vektoren der Länge $4$ – mit dem Koordinatenvektor $(1,\tfrac12,\tfrac13)^t$ (Länge 3) von $\mathrm{int}_0^1\in W^*$ lässt es sich gar nicht multiplizieren. Nur $A_{\varphi^*}$ ($4\times 3$) bildet $W^*$-Koordinaten (Länge 3) auf $V^*$-Koordinaten (Länge 4) ab.<br>
<b>$\varphi^*(\mathrm{int}_0^1)\neq\mathrm{int}_0^1$ auf $V$:</b> $\int_0^1x^3dx = \tfrac14$, aber $\varphi^*(\mathrm{int}_0^1)(x^3) = 1$.`
  }
];
})();
