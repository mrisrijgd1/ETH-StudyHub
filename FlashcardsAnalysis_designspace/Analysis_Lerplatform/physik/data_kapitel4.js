/* ==========================================================================
   PHYSIK I – KAPITEL 4: Arbeit und Energie
   Vektoranalysis (Flächen-/Volumenelement, Gradient, Fluss, Divergenz, Rotation,
   Gauss, Stokes), Arbeit, Leistung, kinetische und potentielle Energie,
   konservative Kräfte, Gleichgewicht, Energiesatz, Looping
   Skript Physik I – Prof. K. Ensslin, ETH Zürich, HS 2025
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_KAPITEL_4 = [
  // ========================================================================
  // 4.1 EIN AUSFLUG IN DIE VEKTORANALYSIS
  // ========================================================================
  {
    id: "ph4_flaechenelement",
    title: "Linienelement und orientiertes Flächenelement (mit Jacobideterminanten)",
    category: "4.1 Ein Ausflug in die Vektoranalysis",
    type: "definition",
    front: R`Wie sind das <b>Linienelement</b> $d\vec r$ und das <b>orientierte Flächenelement</b> $d\vec A$ definiert, kartesisch und für eine durch Parameter $(u,v)$ beschriebene Fläche? Was ist eine Jacobideterminante?`,
    back: R`<b>Linienelement</b> längs einer Kurve:
$$d\vec s\equiv d\vec r = \begin{pmatrix}dx\\dy\\dz\end{pmatrix}\qquad(4.1)$$
<b>Orientiertes Flächenelement</b> (differentieller Flächenvektor): steht <b>senkrecht</b> auf dem Flächenstück, Betrag = Flächeninhalt. Kartesisch:
$$d\vec A = \begin{pmatrix}dy\,dz\\dz\,dx\\dx\,dy\end{pmatrix}\qquad(4.2)$$
<b>Parametrisierte Fläche</b> $\vec r = \vec r(u,v)$ (4.3):
$$d\vec A = \begin{pmatrix}\dfrac{\partial(y,z)}{\partial(u,v)}\\[4pt]\dfrac{\partial(z,x)}{\partial(u,v)}\\[4pt]\dfrac{\partial(x,y)}{\partial(u,v)}\end{pmatrix}du\,dv,\qquad \frac{\partial(y,z)}{\partial(u,v)} = \begin{vmatrix}\partial_uy&\partial_vy\\\partial_uz&\partial_vz\end{vmatrix} = \frac{\partial y}{\partial u}\frac{\partial z}{\partial v}-\frac{\partial y}{\partial v}\frac{\partial z}{\partial u}\qquad(4.4,\,4.5)$$
Das ist dasselbe wie $d\vec A = \left(\dfrac{\partial\vec r}{\partial u}\times\dfrac{\partial\vec r}{\partial v}\right)du\,dv$.`,
    meta: "Skript: Abschnitte 4.1.1–4.1.2.1, Gl. (4.1)–(4.5), Abb. 4.1–4.2, S. 93–95",
    explanation: R`<b>Intuition:</b> Eine Fläche ist für Flussrechnungen nicht nur durch ihre Grösse, sondern auch durch ihre <i>Ausrichtung</i> bestimmt. Wie viel Regen durch ein Fenster fällt, hängt davon ab, wie das Fenster zur Regenrichtung steht. Deshalb ordnet man jedem kleinen Flächenstück einen Vektor senkrecht dazu zu.<br><br>
<b>Woher die Jacobideterminanten?</b> Ändert man $u$ um $du$ und $v$ um $dv$, spannen die Vektoren $\partial_u\vec r\,du$ und $\partial_v\vec r\,dv$ ein kleines Parallelogramm auf. Dessen Flächenvektor ist ihr Kreuzprodukt, und die Komponenten des Kreuzprodukts sind genau die drei $2\times2$-Determinanten.<br><br>
<b>Orientierung:</b> Für geschlossene Flächen zeigt $d\vec A$ per Konvention nach aussen. Für offene Flächen wählt man eine Richtung, die mit dem Umlaufsinn des Randes über die Rechte-Hand-Regel verknüpft ist (wichtig für Stokes, 4.1.8).<br><br>
<b>Zusammenhang:</b> $d\vec r$ braucht man für Arbeit ($\int\vec F\cdot d\vec r$), $d\vec A$ für Fluss ($\int\vec F\cdot d\vec A$) und damit für den Gauss’schen und Stokes’schen Satz.`,
    derivation: R`Flächenvektor einer parametrisierten Fläche über das Kreuzprodukt:
<ol class="fc-steps">
<li>$d\vec r_u = \dfrac{\partial\vec r}{\partial u}du,\quad d\vec r_v = \dfrac{\partial\vec r}{\partial v}dv$<em>Kleine Schritte entlang der Parameterlinien; sie spannen ein (fast ebenes) Parallelogramm auf.</em></li>
<li>$d\vec A = d\vec r_u\times d\vec r_v$<em>Betrag des Kreuzprodukts = Parallelogrammfläche, Richtung senkrecht dazu.</em></li>
<li>$(d\vec A)_x = \left(\dfrac{\partial y}{\partial u}\dfrac{\partial z}{\partial v}-\dfrac{\partial z}{\partial u}\dfrac{\partial y}{\partial v}\right)du\,dv = \dfrac{\partial(y,z)}{\partial(u,v)}du\,dv$<em>$x$-Komponente eines Kreuzprodukts: $a_yb_z-a_zb_y$ (4.5).</em></li>
<li>$(d\vec A)_y = \dfrac{\partial(z,x)}{\partial(u,v)}du\,dv,\quad(d\vec A)_z = \dfrac{\partial(x,y)}{\partial(u,v)}du\,dv$<em>Zyklisch weiter; ergibt (4.4).</em></li>
<li>$u = y,\ v = z,\ x = \text{const}:\ d\vec A = (dy\,dz,\,0,\,0)$<em>Kontrolle: Für ein Flächenstück parallel zur $yz$-Ebene erhält man die erste Komponente von (4.2).</em></li>
</ol>`,
    example: R`<b>Ebene $z = 0$</b> mit $u = x$, $v = y$: $\vec r = (u,v,0)$, $\partial_u\vec r = (1,0,0)$, $\partial_v\vec r = (0,1,0)$, also $d\vec A = (0,0,1)\,dx\,dy = \vec e_z\,dx\,dy$.<br><br>
<b>Zylindermantel</b> (Radius $R$) mit $u = \varphi$, $v = z$: $\vec r = (R\cos\varphi, R\sin\varphi, z)$, $\partial_\varphi\vec r\times\partial_z\vec r = (R\cos\varphi, R\sin\varphi, 0)$, also $d\vec A = \hat\rho\,R\,d\varphi\,dz$ (radial nach aussen). Mantelfläche: $2\pi R\cdot h$ ✓.`,
    counterexample: R`<b>Reihenfolge der Parameter:</b> Vertauscht man $u$ und $v$, kehrt sich $d\vec A$ um (Kreuzprodukt antisymmetrisch). Der Betrag bleibt, aber ein Fluss bekommt das falsche Vorzeichen. Für eine geschlossene Fläche muss man prüfen, dass $d\vec A$ nach aussen zeigt.`,
    pitfalls: R`<ul><li>$dA$ (Betrag) und $d\vec A$ (Vektor) verwechseln.</li>
<li>In (4.2) die Komponenten falsch zuordnen: Die $x$-Komponente gehört zur Fläche $dy\,dz$, die senkrecht auf $x$ steht.</li>
<li>Die Orientierung (nach aussen) bei geschlossenen Flächen nicht prüfen.</li></ul>`
  },
  {
    id: "ph4_kugel_raumwinkel",
    title: "Flächenelement der Kugel, Kugeloberfläche 4πr² und Raumwinkel",
    category: "4.1 Ein Ausflug in die Vektoranalysis",
    type: "herleitung",
    front: R`Leite für eine Kugel (Radius $r$, Polarwinkel $\vartheta$, Azimut $\varphi$) das Flächenelement $d\vec A = \hat r\,r^2\sin\vartheta\,d\vartheta\,d\varphi$ und die Oberfläche $4\pi r^2$ her. Was ist der <b>Raumwinkel</b>, und wie gross ist er maximal?`,
    back: R`Kugelkoordinaten mit $r = R = \text{const}$, $u = \vartheta$, $v = \varphi$ (4.6–4.8):
$$\vec r = \begin{pmatrix}r\sin\vartheta\cos\varphi\\ r\sin\vartheta\sin\varphi\\ r\cos\vartheta\end{pmatrix}$$
Jacobideterminanten (4.9–4.11): $r^2\sin^2\vartheta\cos\varphi$, $r^2\sin^2\vartheta\sin\varphi$, $r^2\sin\vartheta\cos\vartheta$, also
$$d\vec A = \hat r\;r^2\sin\vartheta\,d\vartheta\,d\varphi,\qquad dA = r^2\sin\vartheta\,d\vartheta\,d\varphi = -r^2\,d\cos\vartheta\,d\varphi\qquad(4.12\text{–}4.17)$$
Der Flächenvektor zeigt radial nach aussen. Oberfläche:
$$A = r^2\int_{-1}^{1}d\cos\vartheta\int_0^{2\pi}d\varphi = 4\pi r^2\qquad(4.18)$$
<b>Raumwinkel</b> (Projektion auf die Einheitskugel):
$$d\Omega := \frac{dA}{r^2} = d\cos\vartheta\,d\varphi,\qquad \Omega_\text{max} = 4\pi,\qquad[\Omega] = 1\,\text{sr}\qquad(4.19\text{–}4.21)$$`,
    meta: "Skript: Abschnitt 4.1.2.2, Gl. (4.6)–(4.24), Abb. 4.3–4.4, S. 95–98",
    explanation: R`<b>Intuition:</b> Auf der Kugel ist ein kleines „Rechteck“ $r\,d\vartheta$ hoch (entlang des Meridians) und $r\sin\vartheta\,d\varphi$ breit (entlang des Breitenkreises mit Radius $\rho = r\sin\vartheta$, 4.22). Nahe den Polen werden die Breitenkreise klein, daher der Faktor $\sin\vartheta$.<br><br>
<b>Warum $d\cos\vartheta$?</b> Mit $\mu = \cos\vartheta$ ist $dA = r^2\,d\mu\,d\varphi$ gleichmässig in $\mu$. Gleich breite Streifen in $\cos\vartheta$ haben gleiche Fläche (Archimedes: Die Kugelzone hat dieselbe Fläche wie die Mantelfläche des umschriebenen Zylinders gleicher Höhe). Das Minuszeichen in (4.17) verschwindet, wenn man von $\mu = -1$ bis $+1$ integriert.<br><br>
<b>Raumwinkel als 3D-Analogon zum Bogenmass:</b> Ebener Winkel = Bogen/Radius (rad, voller Kreis $2\pi$), Raumwinkel = Fläche/Radius² (sr, volle Kugel $4\pi$).<br><br>
<b>Zusammenhang:</b> Weil die Kugeloberfläche $\propto r^2$ wächst, verteilt sich jeder „Fluss“ aus einer Punktquelle auf $4\pi r^2$. Das ist der Ursprung der $1/r^2$-Gesetze (Coulomb, Gravitation, Lichtintensität).`,
    derivation: R`<ol class="fc-steps">
<li>$\partial_\vartheta\vec r = r(\cos\vartheta\cos\varphi,\ \cos\vartheta\sin\varphi,\ -\sin\vartheta)$<em>Ableitung der Kugelkoordinaten nach dem Polarwinkel.</em></li>
<li>$\partial_\varphi\vec r = r(-\sin\vartheta\sin\varphi,\ \sin\vartheta\cos\varphi,\ 0)$<em>Ableitung nach dem Azimut.</em></li>
<li>$\dfrac{\partial(y,z)}{\partial(\vartheta,\varphi)} = r\cos\vartheta\sin\varphi\cdot0 - r\sin\vartheta\cos\varphi\cdot(-r\sin\vartheta) = r^2\sin^2\vartheta\cos\varphi$<em>Erste Jacobideterminante (4.9); analog (4.10), (4.11).</em></li>
<li>$d\vec A = r^2\sin\vartheta\,(\sin\vartheta\cos\varphi,\ \sin\vartheta\sin\varphi,\ \cos\vartheta)\,d\vartheta\,d\varphi = \hat r\,r^2\sin\vartheta\,d\vartheta\,d\varphi$<em>$r^2\sin\vartheta$ ausklammern; der Rest ist der radiale Einheitsvektor (4.12, 4.13).</em></li>
<li>$d\cos\vartheta = -\sin\vartheta\,d\vartheta$<em>Substitution (4.15, 4.16).</em></li>
<li>$A = r^2\int_{-1}^{1}d\mu\int_0^{2\pi}d\varphi = r^2\cdot2\cdot2\pi = 4\pi r^2$<em>Integrationsrichtung in $\mu = \cos\vartheta$ umgedreht, damit das Minus verschwindet (4.18).</em></li>
</ol>`,
    example: R`<b>Kugelkappe</b> bis zum Polarwinkel $\vartheta_0$: $A = 2\pi r^2(1-\cos\vartheta_0)$, Raumwinkel $\Omega = 2\pi(1-\cos\vartheta_0)$.<br>
Die Nordhalbkugel ($\vartheta_0 = 90^\circ$) hat $\Omega = 2\pi$. Der Mond am Himmel (Winkelradius $0{,}26^\circ = 4{,}5\cdot10^{-3}\,\text{rad}$) nimmt $\Omega\approx\pi\vartheta_0^2 = 6{,}4\cdot10^{-5}\,\text{sr}$ ein.<br><br>
<b>Erdoberfläche:</b> $4\pi(6{,}371\cdot10^{6}\,\text{m})^2 = 5{,}1\cdot10^{14}\,\text{m}^2$.`,
    counterexample: R`<b>Falsch: $dA = r^2\,d\vartheta\,d\varphi$</b> (ohne $\sin\vartheta$). Das ergäbe die Oberfläche $r^2\cdot\pi\cdot2\pi = 2\pi^2r^2\approx19{,}7\,r^2$ statt $4\pi r^2\approx12{,}6\,r^2$, weil die schmalen Streifen nahe den Polen zu breit gezählt würden.`,
    pitfalls: R`<ul><li>Den Faktor $\sin\vartheta$ vergessen.</li>
<li>Grenzen verwechseln: $\vartheta\in[0,\pi]$, $\varphi\in[0,2\pi]$ (nicht beide $2\pi$).</li>
<li>Polarwinkel $\vartheta$ (vom Nordpol aus) und geografische Breite ($90^\circ-\vartheta$) verwechseln.</li>
<li>Das Vorzeichen bei der Substitution $d\cos\vartheta$ nicht durch Umdrehen der Grenzen ausgleichen.</li></ul>`
  },
  {
    id: "ph4_volumenelement",
    title: "Volumenelement: kartesisch und in Kugelkoordinaten",
    category: "4.1 Ein Ausflug in die Vektoranalysis",
    type: "definition",
    front: R`Wie ist das <b>Volumenelement</b> $dV$ definiert (Spatprodukt), und wie lautet es in Kugelkoordinaten? Leite damit das Kugelvolumen her.`,
    back: R`<b>Spatprodukt</b> aus Flächenvektor und drittem Kantenvektor:
$$dV := (d\vec x\times d\vec y)\cdot d\vec z\qquad(4.25)$$
Es ist eigentlich ein Trivektor, verhält sich bei Drehungen des Koordinatensystems aber wie ein Skalar. Kartesisch:
$$dV = dx\,dy\,dz\qquad(4.26)$$
<b>Kugelkoordinaten:</b> Kante $dr$ radial mal Flächenelement $r^2\sin\vartheta\,d\vartheta\,d\varphi$ der Kugelschale:
$$dV = r^2\sin\vartheta\,dr\,d\vartheta\,d\varphi = r^2\,dr\,d\Omega$$
Kugelvolumen: $V = \int_0^R r^2dr\int d\Omega = \frac{R^3}{3}\cdot4\pi = \frac43\pi R^3$.`,
    meta: "Skript: Abschnitt 4.1.3, Gl. (4.25)–(4.26), Abb. 4.5, S. 98; Kugelkoordinaten Anhang 11.2.8",
    explanation: R`<b>Intuition:</b> Das Spatprodukt dreier Vektoren ist das Volumen des von ihnen aufgespannten Parallelepipeds. Für drei senkrechte Kanten $dx$, $dy$, $dz$ ist das einfach das Produkt.<br><br>
<b>Krummlinige Koordinaten:</b> In Kugelkoordinaten ist ein Volumenstück ein „gebogener Würfel“ mit Kanten $dr$, $r\,d\vartheta$, $r\sin\vartheta\,d\varphi$. Ihr Produkt ergibt $dV$. Der Faktor $r^2\sin\vartheta$ ist die Jacobideterminante der Transformation $(r,\vartheta,\varphi)\to(x,y,z)$.<br><br>
<b>Abhängigkeiten:</b> Eine Kugelschale der Dicke $dr$ hat das Volumen $4\pi r^2dr\propto r^2$: Aussen liegt viel mehr Volumen als innen. Das ist wichtig für Dichteverteilungen (Kap. 7.4: Feld einer homogenen Kugel, $M(r)\propto r^3$).<br><br>
<b>Zusammenhang:</b> Volumenintegrale braucht man für Masse und Schwerpunkt ($M = \int\rho\,dV$, Kap. 8), Trägheitsmomente und den Gauss’schen Satz (4.1.6).`,
    derivation: R`<ol class="fc-steps">
<li>Kanten: $d\vec r_r = \hat r\,dr$, $d\vec r_\vartheta = \hat\vartheta\,r\,d\vartheta$, $d\vec r_\varphi = \hat\varphi\,r\sin\vartheta\,d\varphi$<em>Schritt in jeweils einer Koordinate; die Einheitsvektoren stehen paarweise senkrecht.</em></li>
<li>$dV = (d\vec r_r\times d\vec r_\vartheta)\cdot d\vec r_\varphi$<em>Spatprodukt analog (4.25).</em></li>
<li>$= dr\cdot r\,d\vartheta\cdot r\sin\vartheta\,d\varphi\,(\hat r\times\hat\vartheta)\cdot\hat\varphi = r^2\sin\vartheta\,dr\,d\vartheta\,d\varphi$<em>Für ein rechtshändiges Orthonormalsystem ist $(\hat r\times\hat\vartheta)\cdot\hat\varphi = 1$.</em></li>
<li>$V = \int_0^R r^2dr\int_{-1}^1d\cos\vartheta\int_0^{2\pi}d\varphi$<em>Integrale separieren, da die Grenzen konstant sind.</em></li>
<li>$= \dfrac{R^3}{3}\cdot2\cdot2\pi = \dfrac43\pi R^3$<em>Kugelvolumen.</em></li>
</ol>`,
    example: R`<b>Masse der Erde aus der mittleren Dichte</b> $\bar\rho = 5{,}51\cdot10^{3}\,\text{kg/m}^3$: $M = \frac43\pi R^3\bar\rho = \frac43\pi(6{,}371\cdot10^{6})^3\cdot5510\,\text{kg} = 5{,}97\cdot10^{24}\,\text{kg}$ ✓.<br><br>
<b>Kugelschale</b> zwischen $r = 0{,}9R$ und $R$: $\frac{V}{V_\text{Kugel}} = 1 - 0{,}9^3 = 27\,\%$. Die äussersten 10 % des Radius enthalten über ein Viertel des Volumens.`,
    counterexample: R`<b>Naives Volumenelement</b> $dV = dr\,d\vartheta\,d\varphi$ ergäbe für die Kugel $R\cdot\pi\cdot2\pi = 2\pi^2R$, nicht einmal die richtige Dimension (Länge statt Länge³). Der Jacobi-Faktor $r^2\sin\vartheta$ ist unverzichtbar.`,
    pitfalls: R`<ul><li>Den Jacobi-Faktor in krummlinigen Koordinaten vergessen.</li>
<li>Bei Zylinderkoordinaten den Faktor $\rho$ vergessen: $dV = \rho\,d\rho\,d\varphi\,dz$.</li>
<li>Das Spatprodukt mit dem Skalarprodukt verwechseln.</li></ul>`
  },
  {
    id: "ph4_gradient",
    title: "Gradient eines skalaren Feldes und Niveauflächen",
    category: "4.1 Ein Ausflug in die Vektoranalysis",
    type: "definition",
    front: R`Wie ist der <b>Gradient</b> $\nabla u$ eines skalaren Feldes $u(\vec r)$ definiert? Zeige, dass er <b>senkrecht auf den Niveauflächen</b> steht und in Richtung der grössten Zunahme zeigt.`,
    back: R`Die (richtungsabhängige) Änderung des Feldes bei einer Verschiebung $d\vec s = (dx,dy,dz)$:
$$du = \frac{\partial u}{\partial x}dx + \frac{\partial u}{\partial y}dy + \frac{\partial u}{\partial z}dz = d\vec s\cdot\nabla u\qquad(4.27\text{–}4.29)$$
$$\operatorname{grad}u\equiv\nabla u = \begin{pmatrix}\partial u/\partial x\\\partial u/\partial y\\\partial u/\partial z\end{pmatrix}\qquad(4.30)$$
<b>Niveauflächen:</b> Flächen mit $u = \text{const}$. Für $d\vec s_0$ tangential zur Niveaufläche ist $du = 0$:
$$0 = d\vec s_0\cdot\nabla u\;\Rightarrow\;\nabla u\perp d\vec s_0\qquad(4.31,\,4.32)$$
Der Gradient steht senkrecht auf der Niveaufläche und zeigt in Richtung der grössten Änderung (Zunahme) von $u$; sein Betrag ist die Steigung in dieser Richtung.<br><br>
Beispiel: $u(x,y) = 2e^{-(x^2+y^2)}$ hat $\nabla u = -2u(x,y)\,\vec r$, zeigt also zum Maximum im Ursprung (Abb. 4.6, 4.7).`,
    meta: "Skript: Abschnitte 4.1.4.1–4.1.4.2, Gl. (4.27)–(4.32), Abb. 4.6–4.8, S. 98–102",
    explanation: R`<b>Intuition (Wanderkarte):</b> $u$ ist die Höhe über Meer, die Niveaulinien sind Höhenlinien. Der Gradient zeigt bergauf, genau quer zu den Höhenlinien, und ist dort gross, wo die Höhenlinien eng beieinanderliegen (steiles Gelände).<br><br>
<b>Richtungsableitung:</b> Die Änderung in einer beliebigen Richtung $\hat e$ ist $\frac{du}{ds} = \hat e\cdot\nabla u = |\nabla u|\cos\alpha$. Sie ist maximal für $\alpha = 0$ (entlang $\nabla u$), null für $\alpha = 90^\circ$ (entlang der Niveaulinie) und minimal entgegen $\nabla u$.<br><br>
<b>Operator:</b> $\nabla = (\partial_x,\partial_y,\partial_z)$ („Nabla“) ist ein Vektor aus Ableitungsoperatoren. Auf Skalare angewendet gibt er den Gradienten, mit $\cdot$ die Divergenz, mit $\times$ die Rotation.<br><br>
<b>Zusammenhang:</b> Konservative Kräfte sind (negative) Gradienten einer potentiellen Energie: $\vec F = -\nabla U$ (4.4). Die Kraft zeigt also „bergab“ im Potential und senkrecht zu den Äquipotentialflächen.`,
    derivation: R`<ol class="fc-steps">
<li>$du = u(\vec r+d\vec s)-u(\vec r) = \partial_xu\,dx+\partial_yu\,dy+\partial_zu\,dz$<em>Totales Differential: lineare Näherung in allen drei Richtungen (4.27).</em></li>
<li>$du = (dx,dy,dz)\cdot(\partial_xu,\partial_yu,\partial_zu) = d\vec s\cdot\nabla u$<em>Als Skalarprodukt schreiben (4.28, 4.29).</em></li>
<li>$du = |d\vec s|\,|\nabla u|\cos\alpha$<em>Skalarprodukt über den Winkel $\alpha$ zwischen Verschiebung und Gradient.</em></li>
<li>Maximum bei $\alpha = 0$: grösste Zunahme in Richtung $\nabla u$<em>Bei fester Schrittlänge wird $du$ maximal, wenn man entlang des Gradienten geht.</em></li>
<li>$d\vec s_0$ in der Niveaufläche: $du = 0\Rightarrow\cos\alpha = 0\Rightarrow\nabla u\perp d\vec s_0$<em>Auf der Niveaufläche ändert sich $u$ nicht; der Gradient steht senkrecht darauf (4.31, 4.32).</em></li>
</ol>`,
    example: R`$u(x,y) = 2e^{-(x^2+y^2)}$: $\partial_xu = -4xe^{-(x^2+y^2)} = -2x\,u$, analog $\partial_yu = -2y\,u$, also $\nabla u = -2u\,(x,y)$: Er zeigt überall zum Ursprung (zum Gipfel). Am Punkt $(1,0)$: $u = 2e^{-1} = 0{,}736$, $\nabla u = (-1{,}47;\,0)$.<br><br>
<b>Ellipsen</b> $u = \sqrt{x^2/16+y^2/9}$ (Abb. 4.8): Die Niveaulinien sind Ellipsen, der Gradient steht überall senkrecht auf ihnen.`,
    counterexample: R`<b>Nicht jedes Vektorfeld ist ein Gradient:</b> $\vec v = (-y,\,x,\,0)$ (Wirbelfeld) lässt sich nicht als $\nabla u$ schreiben. Dafür müsste $\partial_y v_x = \partial_x v_y$ gelten, also $-1 = 1$, ein Widerspruch. Sein Linienintegral um den Ursprung ist nicht null.`,
    pitfalls: R`<ul><li>Den Gradienten auf ein Vektorfeld anwenden; er ist für <b>skalare</b> Felder definiert.</li>
<li>Annehmen, der Gradient zeige zum nächsten Minimum; er zeigt zur <i>Zunahme</i>.</li>
<li>In Kugel- oder Zylinderkoordinaten die Komponenten einfach als partielle Ableitungen schreiben (dort gibt es Faktoren wie $1/r$).</li></ul>`
  },
  {
    id: "ph4_gradientenfeld",
    title: "Linienintegral eines Gradientenfeldes ist wegunabhängig",
    category: "4.1 Ein Ausflug in die Vektoranalysis",
    type: "gesetz",
    front: R`Zeige, dass für ein Gradientenfeld $\vec v = \nabla u$ das <b>Linienintegral</b> von $\vec r_1$ nach $\vec r_2$ nur von den Endpunkten abhängt und dass das <b>Ringintegral</b> verschwindet.`,
    back: R`Für $\vec v = \nabla u$ (4.33):
$$\int_{\vec r_1}^{\vec r_2}\vec v\cdot d\vec s = \int_{\vec r_1}^{\vec r_2}\nabla u\cdot d\vec s = \int_{\vec r_1}^{\vec r_2}du = u_2 - u_1\qquad(4.34)$$
Das Ergebnis hängt <b>nicht vom Weg</b> ab, nur von $u$ an den Endpunkten. Bei umgekehrter Richtung wechselt das Vorzeichen, also gilt für jeden geschlossenen Weg
$$\oint\nabla u\cdot d\vec s = 0\qquad(4.35)$$
Es gibt aber Vektorfelder, die <b>nicht</b> als Gradient eines skalaren Feldes darstellbar sind (z. B. Wirbelfelder).`,
    meta: "Skript: Abschnitt 4.1.4.3, Gl. (4.33)–(4.35), S. 102",
    explanation: R`<b>Intuition:</b> Wer in den Bergen von A nach B wandert, hat am Ende denselben Höhenunterschied, egal welchen Weg er nimmt. Die Summe aller kleinen Höhenänderungen $du = \nabla u\cdot d\vec s$ ist einfach $u_B - u_A$. Kehrt man zum Ausgangspunkt zurück, ist die Summe null.<br><br>
<b>Das ist der Hauptsatz der Analysis in mehreren Dimensionen:</b> Integral der Ableitung = Differenz der Funktion an den Grenzen.<br><br>
<b>Physikalische Bedeutung:</b> Ist eine Kraft ein Gradient ($\vec F = -\nabla U$), so ist die geleistete Arbeit wegunabhängig, und man kann eine potentielle Energie definieren (konservative Kraft, 4.4). Umgekehrt: Ist die Arbeit entlang eines geschlossenen Weges ungleich null (Reibung), gibt es kein Potential.<br><br>
<b>Test:</b> Ein Feld ist (auf einfach zusammenhängenden Gebieten) genau dann ein Gradientenfeld, wenn $\nabla\times\vec v = \vec 0$ (mit Stokes, 4.1.8).`,
    derivation: R`<ol class="fc-steps">
<li>$\nabla u\cdot d\vec s = du$<em>Definition des Gradienten über das totale Differential (4.29).</em></li>
<li>$\int_{\vec r_1}^{\vec r_2}\nabla u\cdot d\vec s = \int_{\vec r_1}^{\vec r_2}du$<em>Entlang eines beliebigen Weges $\Gamma$ aufsummieren.</em></li>
<li>$= u(\vec r_2) - u(\vec r_1)$<em>Summe aller Zuwächse = Endwert minus Anfangswert; $\Gamma$ taucht nicht mehr auf (4.34).</em></li>
<li>$\oint = \int_{\vec r_1}^{\vec r_2} + \int_{\vec r_2}^{\vec r_1} = (u_2-u_1)+(u_1-u_2) = 0$<em>Geschlossener Weg: hin und zurück auf beliebigen Wegen (4.35).</em></li>
</ol>`,
    example: R`$u = x^2y$, $\nabla u = (2xy,\ x^2)$. Von $(0,0)$ nach $(1,1)$:<br>
Weg 1 (erst $x$, dann $y$): $\int_0^1 2x\cdot0\,dx + \int_0^1 1^2\,dy = 0 + 1 = 1$.<br>
Weg 2 (Diagonale $x = y = t$): $\int_0^1(2t^2+t^2)\,dt = 1$.<br>
Beide ergeben $u(1,1)-u(0,0) = 1$ ✓.`,
    counterexample: R`<b>Wirbelfeld</b> $\vec v = (-y,x,0)$ auf dem Einheitskreis: $d\vec s = (-\sin\varphi,\cos\varphi,0)\,d\varphi$, $\vec v = (-\sin\varphi,\cos\varphi,0)$, also $\oint\vec v\cdot d\vec s = \int_0^{2\pi}d\varphi = 2\pi\neq0$. Kein Gradientenfeld; das Integral hängt vom Weg ab.`,
    pitfalls: R`<ul><li>Wegunabhängigkeit für beliebige Felder annehmen.</li>
<li>Vorzeichen bei umgekehrter Integrationsrichtung vergessen.</li>
<li>Felder mit Singularität (z. B. $\vec v = \frac{1}{\rho}\hat\varphi$ um die $z$-Achse) übersehen: Dort ist $\nabla\times\vec v = 0$ fast überall, aber das Ringintegral um die Achse ist $2\pi$.</li></ul>`
  },
  {
    id: "ph4_fluss",
    title: "Fluss eines Vektorfeldes durch eine Fläche",
    category: "4.1 Ein Ausflug in die Vektoranalysis",
    type: "definition",
    front: R`Wie ist der <b>Fluss</b> eines Vektorfeldes $\vec F$ durch ein Flächenelement und durch eine endliche Fläche definiert? Wann ist er positiv, null oder negativ, und wie ist die Orientierung bei geschlossenen Flächen?`,
    back: R`$$d\Phi = \vec F\cdot d\vec A = |\vec F|\,|d\vec A|\cos\vartheta\qquad(4.36)$$
$\vartheta$: Winkel zwischen $\vec F$ und dem Flächenvektor. Der Fluss ist ein <b>Skalar</b>: Komponente von $\vec F$ senkrecht zur Fläche mal Flächeninhalt.
<ul><li>$\vartheta\lt90^\circ$: $\Phi>0$ (Feld tritt in Richtung von $d\vec A$ durch)</li>
<li>$\vartheta = 90^\circ$: $\Phi = 0$ (Feld streift entlang der Fläche)</li>
<li>$\vartheta>90^\circ$: $\Phi\lt0$</li></ul>
Endliche Fläche:
$$\Phi = \iint_A\vec F\cdot d\vec A\qquad(4.37)$$
<b>Geschlossene Fläche:</b> $d\vec A$ zeigt definitionsgemäss überall <b>nach aussen</b>; $\oint\vec F\cdot d\vec A>0$ heisst netto Ausfluss.`,
    meta: "Skript: Abschnitt 4.1.5, Gl. (4.36)–(4.37), Abb. 4.9, S. 103",
    explanation: R`<b>Intuition:</b> Denk an Wasser, das mit Geschwindigkeit $\vec v$ strömt, und an einen Ring, den man hineinhält. Wie viel Wasser pro Zeit durch den Ring fliesst, hängt von der Strömungsgeschwindigkeit, der Ringfläche und der <i>Neigung</i> des Rings ab: $\dot V = \vec v\cdot\vec A$. Schräg gehalten fliesst weniger hindurch, parallel zur Strömung gar nichts.<br><br>
<b>Abhängigkeiten:</b> $\Phi\propto|\vec F|$, $\propto A$, $\propto\cos\vartheta$.<br><br>
<b>Zusammenhang:</b> Fluss ist zentral in der Elektrodynamik (Gauss: Fluss von $\vec E$ durch eine geschlossene Fläche $\propto$ eingeschlossene Ladung; magnetischer Fluss bei Induktion). In der Mechanik liefert er über den Gauss’schen Satz die Felder ausgedehnter Massen (Kap. 7.4). Für ein Punktquellenfeld $\propto\hat r/r^2$ ist der Fluss durch jede umschliessende Kugel gleich, weil $r^2$ (Fläche) und $1/r^2$ (Feld) sich aufheben.`,
    derivation: R`Fluss eines radialen $1/r^2$-Feldes durch eine Kugel:
<ol class="fc-steps">
<li>$\vec F = \dfrac{k}{r^2}\hat r$, $d\vec A = \hat r\,r^2\,d\Omega$<em>Punktquelle im Ursprung; Flächenvektor der Kugel aus 4.1.2.2.</em></li>
<li>$d\Phi = \dfrac{k}{r^2}\hat r\cdot\hat r\,r^2\,d\Omega = k\,d\Omega$<em>$\hat r\cdot\hat r = 1$ ($\vartheta = 0$); $r^2$ kürzt sich.</em></li>
<li>$\Phi = \oint k\,d\Omega = 4\pi k$<em>Über die volle Kugel: Raumwinkel $4\pi$.</em></li>
<li>$\Phi$ unabhängig von $r$<em>Jede Kugel um die Quelle sieht denselben Fluss; das gilt sogar für beliebig geformte umschliessende Flächen (Gauss).</em></li>
</ol>`,
    example: R`<b>Wasserrohr:</b> Strömung $v = 2\,\text{m/s}$ in $x$-Richtung, Querschnitt $A = 0{,}01\,\text{m}^2$, Fläche senkrecht zur Strömung: $\Phi = vA = 0{,}02\,\text{m}^3/\text{s} = 20\,\text{L/s}$. Um $60^\circ$ geneigt: $\Phi = 0{,}02\cdot\cos60^\circ = 10\,\text{L/s}$.<br><br>
<b>Gravitationsfeld der Erde</b> durch eine Kugel um die Erde: $\Phi = -4\pi G_NM$, unabhängig vom Radius (das Minus, weil $\vec g$ nach innen zeigt).`,
    counterexample: R`<b>Homogenes Feld durch eine geschlossene Fläche:</b> Ein konstantes $\vec F$ hat durch jede geschlossene Fläche den Gesamtfluss null: Was vorne hineinfliesst, fliesst hinten hinaus. Das Feld hat keine Quellen, obwohl der Fluss durch Teilflächen gross ist.`,
    pitfalls: R`<ul><li>Den $\cos\vartheta$-Faktor vergessen, also Fluss = $|\vec F|\cdot A$ auch bei schräger Fläche.</li>
<li>Die Orientierung der Fläche nicht festlegen; das Vorzeichen des Flusses hängt davon ab.</li>
<li>Fluss (Skalar) mit dem Feld (Vektor) verwechseln.</li></ul>`
  },
  {
    id: "ph4_divergenz_gauss",
    title: "Divergenz und der Gauss’sche Satz",
    category: "4.1 Ein Ausflug in die Vektoranalysis",
    type: "gesetz",
    front: R`Wie ist die <b>Divergenz</b> eines Vektorfeldes definiert (als Grenzwert und in Komponenten)? Formuliere und begründe den <b>Gauss’schen Satz</b>. Was heisst „quellenfrei“?`,
    back: R`Gesamtfluss aus einem kleinen Volumen $\Delta V$: $\Phi = \oint_{\partial\Delta V}\vec v\cdot d\vec A$ (4.38).
<b>Divergenz:</b> Fluss pro Volumen im Grenzfall:
$$\operatorname{div}\vec v\equiv\nabla\cdot\vec v = \lim_{\Delta V\to0}\frac{1}{\Delta V}\oint_{\partial\Delta V}\vec v\cdot d\vec A = \frac{d\Phi}{dV}\qquad(4.39)$$
$$\nabla\cdot\vec v = \frac{\partial v_x}{\partial x}+\frac{\partial v_y}{\partial y}+\frac{\partial v_z}{\partial z}\qquad(4.40)$$
<b>Gauss’scher Satz:</b> Für ein Volumen $V$ mit Oberfläche $\partial V$:
$$\oint_{\partial V}\vec v\cdot d\vec A = \int_V\nabla\cdot\vec v\;dV\qquad(4.42)$$
Ein Volumenintegral wird durch ein Oberflächenintegral ersetzt. Begründung: Bei aneinandergrenzenden Würfelchen heben sich die Flüsse durch gemeinsame Flächen auf (entgegengesetzte $d\vec A$, 4.41); übrig bleibt der Fluss durch die Aussenfläche.<br><br>
<b>Quellenfrei:</b> $\nabla\cdot\vec v = 0$; dann ist der Gesamtfluss durch jede geschlossene Fläche null.`,
    meta: "Skript: Abschnitt 4.1.6, Gl. (4.38)–(4.42), Abb. 4.10–4.11, S. 104–105",
    explanation: R`<b>Intuition:</b> Die Divergenz misst die „Ergiebigkeit“ oder Quellstärke an einem Punkt: Strömt aus einem winzigen Volumen mehr heraus als hinein (Wasserhahn), ist $\nabla\cdot\vec v>0$; verschwindet etwas (Abfluss), ist sie negativ.<br><br>
<b>Gauss in Worten:</b> Was netto durch die Oberfläche hinausströmt, muss im Inneren erzeugt worden sein. Die Summe aller Quellen innen = Gesamtfluss durch die Hülle.<br><br>
<b>Komponentenformel verstehen:</b> $\partial v_x/\partial x>0$ heisst: Bei $x+dx$ fliesst mehr hinaus, als bei $x$ hereinkommt. Die Differenz pro Volumen addiert sich über alle drei Richtungen.<br><br>
<b>Zusammenhang:</b> In der Elektrostatik $\nabla\cdot\vec E = \rho/\varepsilon_0$; für die Gravitation $\nabla\cdot\vec g = -4\pi G_N\rho$. Damit berechnet man Felder symmetrischer Massenverteilungen (Kap. 7.4) mit einer Zeile statt mit Mehrfachintegralen. Inkompressible Flüssigkeiten haben $\nabla\cdot\vec v = 0$.`,
    derivation: R`Komponentenform aus dem Grenzwert, für einen Würfel $dx\,dy\,dz$:
<ol class="fc-steps">
<li>Fluss durch die Flächen bei $x$ und $x+dx$: $\left[v_x(x+dx)-v_x(x)\right]dy\,dz$<em>Bei $x+dx$ zeigt $d\vec A$ in $+x$, bei $x$ in $-x$: Austritt minus Eintritt.</em></li>
<li>$= \dfrac{\partial v_x}{\partial x}dx\,dy\,dz$<em>Taylorentwicklung erster Ordnung: $v_x(x+dx)\approx v_x(x)+\partial_xv_x\,dx$.</em></li>
<li>$d\Phi = \left(\dfrac{\partial v_x}{\partial x}+\dfrac{\partial v_y}{\partial y}+\dfrac{\partial v_z}{\partial z}\right)dV$<em>Gleiches für die $y$- und $z$-Flächenpaare und addieren.</em></li>
<li>$\nabla\cdot\vec v = d\Phi/dV$<em>Mit (4.39) folgt die Komponentenform (4.40).</em></li>
<li>$\oint_{\partial V}\vec v\cdot d\vec A = \sum_\text{Würfel}d\Phi_i = \int_V\nabla\cdot\vec v\,dV$<em>Volumen in Würfelchen zerlegen; innere Flächen heben sich paarweise auf (4.41), es bleibt die Aussenfläche (4.42).</em></li>
</ol>`,
    example: R`<b>Kontrolle mit $\vec v = \vec r$</b> und einer Kugel vom Radius $R$:<br>
Volumenseite: $\nabla\cdot\vec r = 1+1+1 = 3$, also $\int_V3\,dV = 3\cdot\frac43\pi R^3 = 4\pi R^3$.<br>
Oberflächenseite: Auf der Kugel ist $\vec r\cdot d\vec A = R\cdot dA$, also $\oint = R\cdot4\pi R^2 = 4\pi R^3$ ✓.<br><br>
<b>Quellenfrei:</b> $\vec v = (y,-x,0)$ hat $\nabla\cdot\vec v = 0+0+0 = 0$, also verschwindet der Gesamtfluss durch jede geschlossene Fläche.`,
    counterexample: R`<b>Punktquelle</b> $\vec F = \hat r/r^2$: Für $r>0$ ist $\nabla\cdot\vec F = 0$, und trotzdem ist der Fluss durch jede Kugel um den Ursprung $4\pi$, nicht null. Die ganze Quellstärke sitzt im singulären Punkt $r = 0$, wo die Komponentenformel nicht gilt. Gauss gilt nur, wenn das Feld im ganzen Volumen differenzierbar ist (oder man die Quelle als $4\pi\delta^3(\vec r)$ schreibt).`,
    pitfalls: R`<ul><li>Divergenz (Skalar) und Gradient (Vektor) verwechseln.</li>
<li>$\nabla\cdot\vec v = \partial_xv_x+\dots$ in krummlinigen Koordinaten unverändert verwenden.</li>
<li>Den Gauss’schen Satz auf offene Flächen anwenden; er gilt nur für geschlossene.</li>
<li>Singularitäten im Volumen übersehen.</li></ul>`
  },
  {
    id: "ph4_rotation_stokes",
    title: "Zirkulation, Rotation und der Stokes’sche Satz",
    category: "4.1 Ein Ausflug in die Vektoranalysis",
    type: "gesetz",
    front: R`Was ist die <b>Zirkulation</b> eines Vektorfeldes, wie ist die <b>Rotation</b> $\nabla\times\vec v$ definiert (Grenzwert und Komponenten), und was besagt der <b>Stokes’sche Satz</b>?`,
    back: R`<b>Zirkulation</b> um den Rand $\partial A$ einer offenen Fläche $A$:
$$Z := \oint_{\partial A}\vec v\cdot d\vec s\qquad(4.43)$$
<b>Rotation:</b> Vektor, dessen Betrag die Zirkulation einer infinitesimalen Fläche pro Flächeninhalt ist und dessen Richtung die des Flächenvektors ist:
$$\operatorname{rot}\vec v\equiv\nabla\times\vec v = \lim_{\Delta A\to0}\frac{\oint_{\partial\Delta A}\vec v\cdot d\vec s}{\Delta A}\cdot\frac{\Delta\vec A}{|\Delta\vec A|}\qquad(4.44)$$
$$\nabla\times\vec v = \begin{pmatrix}\partial_yv_z-\partial_zv_y\\\partial_zv_x-\partial_xv_z\\\partial_xv_y-\partial_yv_x\end{pmatrix}\qquad(4.45)$$
<b>Stokes’scher Satz:</b>
$$\oint_{\partial A}\vec v\cdot d\vec s = \int_A(\nabla\times\vec v)\cdot d\vec A\qquad(4.47)$$
Begründung: Bei aneinandergrenzenden Flächenstücken heben sich die Beiträge der gemeinsamen Kanten auf (4.46); es bleibt der äussere Rand.`,
    meta: "Skript: Abschnitte 4.1.7–4.1.8, Gl. (4.43)–(4.47), Abb. 4.13–4.14, S. 105–108",
    explanation: R`<b>Intuition:</b> Die Rotation misst die lokale „Verwirbelung“. Setzt man ein kleines Schaufelrad in eine Strömung und es dreht sich, hat das Feld dort eine Rotation; die Achse, um die es sich am schnellsten dreht, gibt die Richtung von $\nabla\times\vec v$.<br><br>
<b>Stokes in Worten:</b> Die Zirkulation entlang des Randes ist die Summe aller kleinen Wirbel auf der Fläche, weil sich die Umläufe an inneren Kanten gegenseitig wegheben.<br><br>
<b>Wirbelfrei und konservativ:</b> Ist $\nabla\times\vec v = \vec 0$ überall (auf einem einfach zusammenhängenden Gebiet), verschwindet jedes Ringintegral. Dann ist $\vec v$ ein Gradientenfeld. Daraus folgt in 4.4 die Wegunabhängigkeit der Arbeit konservativer Kräfte: $\nabla\times(\nabla U) = \vec 0$.<br><br>
<b>Physik:</b> Für eine starre Rotation $\vec v = \vec\omega\times\vec r$ ist $\nabla\times\vec v = 2\vec\omega$. Die Rotation misst also die doppelte lokale Winkelgeschwindigkeit. In der Elektrodynamik: $\nabla\times\vec B = \mu_0\vec j$, $\nabla\times\vec E = -\dot{\vec B}$.`,
    derivation: R`$z$-Komponente aus dem Grenzwert, mit einem kleinen Rechteck $dx\times dy$ in der $xy$-Ebene (Umlauf gegen den Uhrzeigersinn):
<ol class="fc-steps">
<li>Unten und oben: $v_x(y)\,dx - v_x(y+dy)\,dx = -\partial_yv_x\,dx\,dy$<em>Unten läuft man in $+x$, oben in $-x$; Taylor in $y$.</em></li>
<li>Rechts und links: $v_y(x+dx)\,dy - v_y(x)\,dy = \partial_xv_y\,dx\,dy$<em>Rechts läuft man in $+y$, links in $-y$; Taylor in $x$.</em></li>
<li>$dZ = (\partial_xv_y - \partial_yv_x)\,dx\,dy$<em>Summe der vier Seiten.</em></li>
<li>$(\nabla\times\vec v)_z = \dfrac{dZ}{dA} = \partial_xv_y - \partial_yv_x$<em>Durch die Fläche teilen (4.44); analog die anderen Komponenten (4.45).</em></li>
<li>$\oint_{\partial A}\vec v\cdot d\vec s = \sum dZ_i = \int_A(\nabla\times\vec v)\cdot d\vec A$<em>Fläche in kleine Rechtecke zerlegen; innere Kanten heben sich auf (4.46, 4.47).</em></li>
</ol>`,
    example: R`<b>Starre Rotation</b> $\vec v = \vec\omega\times\vec r = (-\omega y,\ \omega x,\ 0)$:
$(\nabla\times\vec v)_z = \partial_x(\omega x)-\partial_y(-\omega y) = 2\omega$.<br>
Stokes-Kontrolle mit einem Kreis vom Radius $R$: links $\oint\vec v\cdot d\vec s = \omega R\cdot2\pi R = 2\pi\omega R^2$; rechts $\int2\omega\,dA = 2\omega\cdot\pi R^2$ ✓.<br><br>
<b>Gradientenfeld:</b> $\vec v = \nabla(x^2y) = (2xy,x^2,0)$: $(\nabla\times\vec v)_z = 2x-2x = 0$ ✓.`,
    counterexample: R`<b>Gekrümmte Strömung ohne Rotation:</b> Der „Potentialwirbel“ $\vec v = \frac{c}{\rho}\hat\varphi$ (Wasser beim Abfluss) läuft im Kreis, hat aber für $\rho>0$ überall $\nabla\times\vec v = \vec 0$. Ein kleines Schaufelrad würde sich dort nicht drehen, obwohl es im Kreis herumgetragen wird. Kreisende Strömung bedeutet also nicht automatisch Rotation.<br>
Umgekehrt hat die Scherströmung $\vec v = (y,0,0)$ gerade Stromlinien, aber $\nabla\times\vec v = (0,0,-1)\neq\vec 0$.`,
    pitfalls: R`<ul><li>Vorzeichen in den Komponenten (zyklische Reihenfolge) vertauschen.</li>
<li>Umlaufsinn und Flächenorientierung nicht über die Rechte-Hand-Regel verknüpfen.</li>
<li>„Kreisende Stromlinien“ mit „Rotation ungleich null“ gleichsetzen.</li>
<li>Stokes auf Gebiete mit Löchern (Singularitäten) anwenden.</li></ul>`
  },

  // ========================================================================
  // 4.2 ARBEIT, LEISTUNG
  // ========================================================================
  {
    id: "ph4_arbeit",
    title: "Mechanische Arbeit W = ∫F·dr",
    category: "4.2 Arbeit, Leistung",
    type: "definition",
    front: R`Wie ist die <b>mechanische Arbeit</b> einer Kraft definiert, für einen geraden Weg und allgemein für einen gekrümmten Weg $\Gamma$? Warum leisten Zentripetalkraft und Normalkraft beim horizontalen Gleiten keine Arbeit?`,
    back: R`<b>Gerader Weg</b> $\vec s$, konstante Kraft:
$$W = \vec F\cdot\vec s = F_\parallel\,s = F\,s\cos\alpha\qquad(4.48)$$
$\vec F\parallel\vec s$: $W = Fs$; $\vec F\perp\vec s$: $W = 0$.<br><br>
<b>Allgemein</b> (ortsabhängige Kraft, gekrümmter Weg $\Gamma$ von $\vec r_1$ nach $\vec r_2$):
$$W = \int_{\vec r_1(\Gamma)}^{\vec r_2(\Gamma)}\vec F\cdot d\vec s = \int_{\vec r_1}^{\vec r_2}F_\parallel\,ds\qquad(4.49)$$
Einheit: $1\,\text{N m} = 1\,\text{J} = 1\,\frac{\text{m}^2\text{kg}}{\text{s}^2} = 1\,\text{W s}$ (4.50).<br><br>
<b>Ohne Arbeit:</b>
<ul><li>Gleichförmige Kreisbewegung: $\vec F_{ZP}\propto-\hat r$, $d\vec s = \vec v\,dt\perp\hat r$, also $W = 0$ (4.51, 4.52).</li>
<li>Reibungsfreies horizontales Gleiten: $(0,-mg)\cdot(dx,0) = 0$ (4.53).</li></ul>`,
    meta: "Skript: Abschnitt 4.2.1, Gl. (4.48)–(4.53), Abb. 4.15–4.17 (mit Fussnote 5), S. 108–111",
    explanation: R`<b>Intuition:</b> Arbeit zählt nur den Teil der Kraft, der <i>entlang</i> der Bewegung wirkt. Eine Kraft senkrecht zur Bewegung lenkt nur um und überträgt keine Energie. Arbeit ist ein Skalar und kann negativ sein (Kraft gegen die Bewegung, z. B. Bremsen, Hochheben gegen die Gravitation).<br><br>
<b>Physikalische vs. Alltagsarbeit</b> (Fussnote 5): Einen Koffer auf gleicher Höhe von A nach B zu tragen, ist physikalisch keine Arbeit der Hebekraft (sie steht senkrecht zum Weg). Der Muskel wird trotzdem müde, aber das ist innere Biochemie, keine mechanische Arbeit am Koffer. Eine Umzugsfirma, die einen Flügel die Treppe hinunterträgt, leistet negative Arbeit.<br><br>
<b>Abhängigkeiten:</b> $W\propto F$, $\propto s$, $\propto\cos\alpha$.<br><br>
<b>Zusammenhang:</b> Arbeit ist Energieübertrag. Die Gesamtarbeit aller Kräfte ändert die kinetische Energie (4.3); für konservative Kräfte ist sie wegunabhängig und definiert die potentielle Energie (4.4).`,
    derivation: R`Vom geraden Stück zum Linienintegral:
<ol class="fc-steps">
<li>$W = |\vec F|\,|\vec s|\cos\alpha = F_\parallel\,s$<em>Nur die Komponente entlang des Weges zählt (Skalarprodukt).</em></li>
<li>$\Delta W_i\approx\vec F(\vec r_i)\cdot\Delta\vec s_i$<em>Gekrümmten Weg in kleine, fast gerade Stücke zerlegen; auf jedem ist die Kraft fast konstant (Abb. 4.17).</em></li>
<li>$W = \lim\sum_i\vec F(\vec r_i)\cdot\Delta\vec s_i = \int_\Gamma\vec F\cdot d\vec s$<em>Grenzwert der Summe: Linienintegral (4.49).</em></li>
<li>Kreisbewegung: $\vec F\cdot d\vec s = -m\frac{v^2}{r}\hat r\cdot\vec v\,dt = 0$<em>$\vec v\perp\hat r$; jedes Teilstück liefert null (4.52).</em></li>
</ol>`,
    example: R`<b>Schlitten ziehen:</b> $F = 100\,\text{N}$ unter $30^\circ$ zur Horizontalen, $s = 20\,\text{m}$: $W = 100\cdot20\cdot\cos30^\circ\,\text{J} = 1732\,\text{J}$.<br>
<b>Koffer hochheben</b> ($15\,\text{kg}$, $1\,\text{m}$): Hebekraft leistet $+147\,\text{J}$, die Gravitation $-147\,\text{J}$.<br>
<b>Gravitation beim Wurf</b> (Abb. 4.16): Beim Steigen $W\lt0$, beim Fallen $W>0$, bei horizontaler Verschiebung $W = 0$.`,
    counterexample: R`<b>Grosse Kraft, keine Arbeit:</b> Die Sonne zieht die Erde mit etwa $3{,}5\cdot10^{22}\,\text{N}$ an. Auf der (fast) kreisförmigen Bahn steht diese Kraft senkrecht zur Bewegung, und die Arbeit pro Umlauf ist (nahezu) null. Deshalb bleibt die Bahngeschwindigkeit konstant.`,
    pitfalls: R`<ul><li>$W = Fs$ ohne $\cos\alpha$ verwenden.</li>
<li>Vergessen, dass Arbeit negativ sein kann.</li>
<li>Arbeit einer einzelnen Kraft und Gesamtarbeit aller Kräfte verwechseln.</li>
<li>Bei ortsabhängiger Kraft (z. B. Feder) $W = F\cdot s$ mit einem einzigen $F$-Wert rechnen statt zu integrieren.</li></ul>`
  },
  {
    id: "ph4_leistung",
    title: "Leistung P = dW/dt = F·v (Auto am Berg, Luftwiderstand ∝ v³)",
    category: "4.2 Arbeit, Leistung",
    type: "gesetz",
    front: R`Wie ist die <b>Leistung</b> definiert, und warum gilt $P = \vec F\cdot\vec v$? Berechne die Leistung eines Autos ($1000\,\text{kg}$, $20\,\text{m/s}$) an einer 10-%-Steigung, beim zusätzlichen Beschleunigen mit $5\,\text{m/s}^2$ und gegen den Luftwiderstand.`,
    back: R`$$P = \frac{dW}{dt}\qquad(4.54),\qquad 1\,\frac{\text{N m}}{\text{s}} = 1\,\frac{\text{m}^2\text{kg}}{\text{s}^3} = 1\,\frac{\text{J}}{\text{s}} = 1\,\text{W}\qquad(4.55)$$
(Veraltet: $1\,\text{PS} = 75\,\text{m kp/s} = 735\,\text{W}$, 4.56.) Wird der Angriffspunkt mit $\vec v$ verschoben:
$$P = \frac{\vec F\cdot d\vec s}{dt} = \vec F\cdot\vec v\qquad(4.57)$$
<b>Auto</b> ($m = 1000\,\text{kg}$, $v = 20\,\text{m/s}$, $\tan\alpha = 10\,\%$):
$$P_1 = Gv\sin\alpha\approx mgv\alpha\approx20\,\text{kW},\qquad P_2 = mav = 100\,\text{kW}\ (a = 5\,\text{m/s}^2)\qquad(4.58,\,4.59)$$
$$P_3 = \frac{\rho}{2}c_WAv^2\cdot v\propto v^3\qquad(4.60)$$`,
    meta: "Skript: Abschnitt 4.2.2, Gl. (4.54)–(4.60), Abb. 4.18, S. 111–112",
    explanation: R`<b>Intuition:</b> Leistung ist das <i>Tempo</i> der Energieübertragung. Dieselbe Arbeit (z. B. einen Berg hinauffahren) kann man langsam mit kleiner Leistung oder schnell mit grosser Leistung erbringen.<br><br>
<b>Abhängigkeiten:</b>
<ul><li>Steigung: $P_1\propto m$, $\propto v$, $\propto\sin\alpha$.</li>
<li>Beschleunigen: $P_2 = mav$ wächst mit der momentanen Geschwindigkeit. Bei fester Motorleistung nimmt die mögliche Beschleunigung deshalb mit $v$ ab ($a = P/(mv)$).</li>
<li>Luftwiderstand: $F\propto v^2$ und $P = Fv\propto v^3$. Doppelte Geschwindigkeit kostet die 8-fache Leistung; deshalb steigt der Verbrauch bei Autobahntempo stark.</li></ul>
<b>Zusammenhang:</b> $P = \vec F\cdot\vec v$ zeigt wieder: Kräfte senkrecht zur Geschwindigkeit leisten nichts. Die Gesamtleistung aller Kräfte ist $\frac{d}{dt}\left(\tfrac12mv^2\right)$ (kinetische Energie, 4.3).`,
    derivation: R`<ol class="fc-steps">
<li>$dW = \vec F\cdot d\vec s$<em>Arbeit auf einem kleinen Wegstück.</em></li>
<li>$P = \dfrac{dW}{dt} = \vec F\cdot\dfrac{d\vec s}{dt} = \vec F\cdot\vec v$<em>Durch $dt$ teilen; $d\vec s/dt$ ist die Geschwindigkeit des Angriffspunkts (4.57).</em></li>
<li>Steigung: $F = mg\sin\alpha$, $P_1 = mgv\sin\alpha$<em>Hangabtriebskraft muss überwunden werden.</em></li>
<li>$\tan\alpha = 0{,}1\Rightarrow\alpha\approx0{,}1$, $\sin\alpha\approx\alpha$<em>Kleinwinkelnäherung (1.2.2): $\sin(5{,}71^\circ) = 0{,}0995$.</em></li>
<li>$P_1\approx1000\cdot9{,}81\cdot20\cdot0{,}1\,\text{W}\approx19{,}6\,\text{kW}\approx20\,\text{kW}$<em>Zahlen einsetzen (4.58).</em></li>
<li>$P_2 = (ma)\,v = 1000\cdot5\cdot20\,\text{W} = 100\,\text{kW}$<em>Zusätzliche Kraft $ma$ für die Beschleunigung (4.59).</em></li>
</ol>`,
    example: R`<b>Luftwiderstand</b> ($c_W = 0{,}3$, $A = 2{,}2\,\text{m}^2$, $\rho = 1{,}2\,\text{kg/m}^3$):<br>
bei $20\,\text{m/s}$: $P_3 = 0{,}6\cdot0{,}3\cdot2{,}2\cdot8000\,\text{W} = 3{,}2\,\text{kW}$;<br>
bei $40\,\text{m/s}$ ($144\,\text{km/h}$): $25\,\text{kW}$, achtmal so viel.<br><br>
<b>Mensch:</b> Treppensteigen ($70\,\text{kg}$, $3\,\text{m}$ in $5\,\text{s}$): $P = \frac{70\cdot9{,}81\cdot3}{5}\,\text{W} = 412\,\text{W}\approx0{,}56\,\text{PS}$.`,
    counterexample: R`<b>Grosse Kraft, null Leistung:</b> Ein Gewichtheber, der die Hantel ruhig über dem Kopf hält, übt eine grosse Kraft aus, aber $\vec v = 0$, also $P = 0$ an der Hantel. Der Energieverbrauch seiner Muskeln ist keine mechanische Leistung an der Last.`,
    pitfalls: R`<ul><li>Leistung (W) und Arbeit/Energie (J, kWh) verwechseln: $1\,\text{kWh} = 3{,}6\cdot10^{6}\,\text{J}$.</li>
<li>$P = Fv$ ohne Berücksichtigung des Winkels zwischen $\vec F$ und $\vec v$.</li>
<li>Den Luftwiderstand linear statt kubisch in der Leistung skalieren.</li>
<li>$\sin\alpha$ und $\tan\alpha$ bei steilen Strassen gleichsetzen (Steigung in % ist $\tan\alpha$).</li></ul>`
  },

  // ========================================================================
  // 4.3 KINETISCHE ENERGIE
  // ========================================================================
  {
    id: "ph4_kinetische_energie",
    title: "Kinetische Energie und Arbeitssatz W = T₂ − T₁",
    category: "4.3 Kinetische Energie",
    type: "herleitung",
    front: R`Leite aus Newton II den <b>Arbeitssatz</b> $W = T_2 - T_1$ her und definiere die <b>kinetische Energie</b>. Für welche Kräfte gilt er, und was folgt für die gleichförmige Kreisbewegung?`,
    back: R`Für konstante Masse:
$$W = \int_{\vec r_1}^{\vec r_2}\vec F\cdot d\vec r = \int m\frac{d\vec v}{dt}\cdot\vec v\,dt = m\int_{\vec v_1}^{\vec v_2}\vec v\cdot d\vec v = \frac m2v_2^2 - \frac m2v_1^2\qquad(4.61\text{–}4.63)$$
<b>Kinetische Energie</b> eines Massenpunktes:
$$T := \tfrac12mv^2 = \frac{p^2}{2m}\qquad(4.64)$$
(nur für $v\ll c$). Damit
$$W = T(\vec r_2) - T(\vec r_1)\qquad(4.65)$$
<b>Beachte:</b>
<ul><li>Gilt für <b>beliebige</b> Kraftfelder, auch nichtkonservative.</li>
<li>$\vec F$ ist die <b>Summe aller</b> am Massenpunkt angreifenden Kräfte.</li>
<li>Gleichförmige Kreisbewegung: $|\vec v| = \text{const}$, also $\Delta T = 0 = W$ (4.66).</li></ul>`,
    meta: "Skript: Abschnitt 4.3, Gl. (4.61)–(4.66), S. 112–113",
    explanation: R`<b>Intuition:</b> Die Gesamtarbeit, die an einem Körper verrichtet wird, steckt danach in seiner Bewegung. Positive Arbeit macht ihn schneller, negative langsamer. Die kinetische Energie ist die „gespeicherte Arbeit“ der Bewegung.<br><br>
<b>Abhängigkeiten:</b> $T\propto m$, aber $T\propto v^2$. Doppelte Geschwindigkeit ergibt vierfache Energie und damit (bei gleicher Bremskraft) vierfachen Bremsweg ($Fs = \tfrac12mv^2$). Bei gleichem Impuls gilt $T = p^2/2m$: Der leichtere Körper hat mehr Energie (Gewehrkugel vs. Gewehr beim Rückstoss).<br><br>
<b>Warum für alle Kräfte?</b> Die Herleitung benutzt nur Newton II, keine Eigenschaft der Kraft. Erst die Aufteilung in potentielle Energie (4.4) braucht konservative Kräfte.<br><br>
<b>Zusammenhang:</b> Ableiten nach der Zeit ergibt $\frac{dT}{dt} = \vec F\cdot\vec v = P$ (4.2.2). Für Vielteilchensysteme kommt die kinetische Energie der Relativbewegung um den Schwerpunkt hinzu (Kap. 6.4.3), für starre Körper die Rotationsenergie $\tfrac12I\omega^2$ (Kap. 8).`,
    derivation: R`<ol class="fc-steps">
<li>$W = \int_{\vec r_1}^{\vec r_2}\vec F\cdot d\vec r$<em>Definition der Arbeit der Gesamtkraft (4.61).</em></li>
<li>$\vec F = m\dfrac{d\vec v}{dt},\quad d\vec r = \vec v\,dt$<em>Newton II (konstante Masse) und Wegelement über die Geschwindigkeit ausdrücken.</em></li>
<li>$W = m\int\dfrac{d\vec v}{dt}\cdot\vec v\,dt = m\int_{\vec v_1}^{\vec v_2}\vec v\cdot d\vec v$<em>$dt$ kürzen: Integration über die Geschwindigkeit (4.62).</em></li>
<li>$\vec v\cdot d\vec v = \tfrac12d(\vec v\cdot\vec v) = \tfrac12d(v^2)$<em>Produktregel rückwärts: $d(v^2) = 2\vec v\cdot d\vec v$.</em></li>
<li>$W = \dfrac m2\left[v^2\right]_{v_1}^{v_2} = \dfrac m2v_2^2-\dfrac m2v_1^2 = T_2 - T_1$<em>Integral ausführen (4.63–4.65).</em></li>
<li>$T = \dfrac m2v^2 = \dfrac{(mv)^2}{2m} = \dfrac{p^2}{2m}$<em>Umschreiben mit dem Impuls (4.64).</em></li>
</ol>`,
    example: R`<b>Auto</b> $1200\,\text{kg}$ bei $50\,\text{km/h}$ ($13{,}9\,\text{m/s}$): $T = 116\,\text{kJ}$; bei $100\,\text{km/h}$: $463\,\text{kJ}$ (4-mal so viel).<br>
Mit Bremskraft $8\,\text{kN}$: Bremsweg $s = T/F = 14{,}5\,\text{m}$ bzw. $57{,}9\,\text{m}$.<br><br>
<b>Gewehr und Kugel</b> mit gleichem Impulsbetrag $p = 4\,\text{kg m/s}$: $T_\text{Kugel} = \frac{16}{2\cdot0{,}01}\,\text{J} = 800\,\text{J}$, $T_\text{Gewehr} = \frac{16}{2\cdot4}\,\text{J} = 2\,\text{J}$.`,
    counterexample: R`<b>Nur eine Kraft betrachten:</b> Ein Fallschirmspringer mit Endgeschwindigkeit: Die Gravitation leistet positive Arbeit, trotzdem ändert sich $T$ nicht. Die Gesamtarbeit (Gravitation plus Luftwiderstand) ist null. Der Arbeitssatz gilt nur mit der <b>Summe</b> aller Kräfte.<br>
<b>Relativistisch:</b> Für $v\to c$ ist $T\neq\tfrac12mv^2$ (z. B. Elektronen in Beschleunigern).`,
    pitfalls: R`<ul><li>$T\propto v$ statt $\propto v^2$ annehmen.</li>
<li>Den Arbeitssatz mit einer Einzelkraft statt der Gesamtkraft anwenden.</li>
<li>$T$ als Vektor behandeln; die Richtung der Geschwindigkeit spielt keine Rolle.</li>
<li>Bei veränderlicher Masse unbesehen $\tfrac12mv^2$ verwenden.</li></ul>`
  },

  // ========================================================================
  // 4.4 POTENTIELLE ENERGIE UND KONSERVATIVE KRÄFTE
  // ========================================================================
  {
    id: "ph4_konservativ",
    title: "Konservative Kräfte, potentielle Energie und Wegunabhängigkeit",
    category: "4.4 Potentielle Energie und konservative Kräfte",
    type: "gesetz",
    front: R`Wann heisst ein Kraftfeld <b>konservativ</b>? Wie hängen Arbeit und <b>potentielle Energie</b> zusammen, und wie beweist man mit dem Stokes’schen Satz die Wegunabhängigkeit? Welche Kraftfelder sind im Allgemeinen <b>nicht</b> konservativ?`,
    back: R`$\vec F(\vec r)$ heisst <b>konservativ</b>, wenn es eine stetige (stückweise differenzierbare) Funktion $U(\vec r)$ gibt mit
$$\vec F(\vec r) = -\nabla U = -\operatorname{grad}U\qquad(4.67)$$
<b>Vom Feld verrichtete Arbeit</b> von $\vec r_1$ nach $\vec r_2$:
$$W = \int_{\vec r_1}^{\vec r_2}\vec F\cdot d\vec r = -\int_{\vec r_1}^{\vec r_2}dU = U(\vec r_1) - U(\vec r_2)\qquad(4.68,\,4.69)$$
Potentielle Energie von $\vec r_2$ bezüglich $\vec r_1$:
$$U_{2(1)} := U(\vec r_2)-U(\vec r_1) = -\int_{\vec r_1}^{\vec r_2}\vec F\cdot d\vec r\qquad(4.70)$$
Positive Arbeit des Feldes bedeutet eine <b>Abnahme</b> der potentiellen Energie. Eine äussere Kraft, die gegen das Feld arbeitet (Hochheben), verrichtet dieselbe Arbeit mit umgekehrtem Vorzeichen.<br><br>
<b>Wegunabhängigkeit</b> (Stokes):
$$\oint\vec F\cdot d\vec r = -\oint\nabla U\cdot d\vec r = -\int_A\underbrace{\operatorname{rot}(\nabla U)}_{=\vec 0}\cdot d\vec A = 0\qquad(4.71)$$
Zeitabhängige $\vec F(\vec r,t)$ und geschwindigkeitsabhängige $\vec F(\vec r,\vec v)$ Kraftfelder sind im Allgemeinen <b>nicht</b> konservativ.`,
    meta: "Skript: Abschnitte 4.4.1–4.4.2, Gl. (4.67)–(4.71), S. 113–114",
    explanation: R`<b>Intuition:</b> Bei einer konservativen Kraft „geht keine Arbeit verloren“: Was man beim Hochheben investiert, bekommt man beim Herunterlassen vollständig zurück, unabhängig vom Weg. Die Arbeit wird in der Lage (Konfiguration) gespeichert, eben als potentielle Energie.<br><br>
<b>Drei gleichwertige Kriterien</b> (auf einfach zusammenhängendem Gebiet):
<ul><li>$\vec F = -\nabla U$</li>
<li>$\oint\vec F\cdot d\vec r = 0$ für jeden geschlossenen Weg (Arbeit wegunabhängig)</li>
<li>$\nabla\times\vec F = \vec 0$</li></ul>
<b>Vorteil des Potentials:</b> $U$ ist ein <b>skalares</b> Feld, also eine Zahl pro Ort statt drei. Die Kraft folgt durch Ableiten.<br><br>
<b>Nicht konservativ:</b> Reibung ($\vec F\propto-\hat v$): Auf einem geschlossenen Weg ist die Arbeit immer negativ. Zeitabhängige Felder: Hin- und Rückweg „sehen“ verschiedene Felder.<br><br>
<b>Zusammenhang:</b> Nur für konservative Kräfte gilt der mechanische Energiesatz $T + U = \text{const}$ (4.5).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec F\cdot d\vec r = -\nabla U\cdot d\vec r$<em>Konservatives Feld einsetzen (4.67).</em></li>
<li>$\nabla U\cdot d\vec r = dU$<em>Totales Differential (4.29).</em></li>
<li>$W = -\int_{\vec r_1}^{\vec r_2}dU = U(\vec r_1)-U(\vec r_2)$<em>Integral eines totalen Differentials: nur Endpunkte zählen (4.69).</em></li>
<li>$\oint\vec F\cdot d\vec r = -\int_A(\nabla\times\nabla U)\cdot d\vec A$<em>Stokes’scher Satz (4.47) für eine beliebige Fläche mit dem geschlossenen Weg als Rand.</em></li>
<li>$(\nabla\times\nabla U)_z = \partial_x\partial_yU - \partial_y\partial_xU = 0$<em>Gemischte partielle Ableitungen sind vertauschbar (Schwarz); analog alle Komponenten, also $\oint = 0$ (4.71).</em></li>
</ol>`,
    example: R`<b>Gravitation nahe der Erdoberfläche</b> (Abb. 4.19): Von $z_1$ nach $z_2$ auf Weg A (senkrecht) oder Weg B (beliebig gekrümmt) ist die Arbeit der Gravitation dieselbe: $W_A = W_B = -mg(z_2-z_1)$.<br>
$2\,\text{kg}$ um $5\,\text{m}$ gehoben: $W_\text{Feld} = -98{,}1\,\text{J}$, $\Delta U = +98{,}1\,\text{J}$; beim Herunterlassen gewinnt man genau das zurück.`,
    counterexample: R`<b>Gleitreibung:</b> Eine Kiste wird $10\,\text{m}$ hin und $10\,\text{m}$ zurück geschoben, $F_R = 50\,\text{N}$: Die Reibung leistet auf dem geschlossenen Weg $-1000\,\text{J}$, nicht null. Es gibt kein Potential für Reibung.<br>
<b>Wirbelfeld</b> $\vec F = (-y,x,0)$: $\nabla\times\vec F = (0,0,2)\neq\vec 0$, Ringintegral $\neq0$. Nicht konservativ, obwohl es nur vom Ort abhängt.`,
    pitfalls: R`<ul><li>Arbeit des Feldes und Arbeit gegen das Feld verwechseln (Vorzeichen!).</li>
<li>$\vec F = +\nabla U$ statt $-\nabla U$ schreiben.</li>
<li>Glauben, jede ortsabhängige Kraft sei konservativ.</li>
<li>Bei Feldern mit Singularitäten ($\nabla\times\vec F = 0$ nur fast überall) Wegunabhängigkeit ungeprüft annehmen.</li></ul>`
  },
  {
    id: "ph4_potential_nullpunkt",
    title: "Nullpunkt des Potentials und spezifisches Potential",
    category: "4.4 Potentielle Energie und konservative Kräfte",
    type: "konzept",
    front: R`Warum ist ein Potential nur bis auf eine <b>additive Konstante</b> bestimmt, und was ist dann überhaupt messbar? Wie legt man den Nullpunkt üblicherweise fest? Was ist ein <b>spezifisches Potential</b> $V(\vec r)$?`,
    back: R`Mit $U' := U + c$ (4.72):
$$-\nabla U' = -\nabla(U+c) = -\nabla U + 0 = \vec F\qquad(4.73,\,4.74)$$
Beide Potentiale liefern dieselbe Kraft. Der Nullpunkt ist willkürlich und physikalisch bedeutungslos, da nicht messbar.<br><br>
<b>Messbar</b> sind die Kraft (bzw. die Beschleunigung) und über $\int\vec F\cdot d\vec s$ die <b>Änderung</b> der potentiellen Energie.<br><br>
<b>Konvention:</b> Bei Feldern mit unendlicher Reichweite (Gravitation, Coulomb) wählt man $U(\infty) = 0$; nahe der Erdoberfläche oft $U = 0$ am Boden.<br><br>
<b>Spezifisches Potential</b> (analog zum spezifischen Feld $\vec f = \vec F/\gamma$):
$$V(\vec r) = \frac1\gamma\,U(\vec r)\qquad(4.102)$$
Das Skript nennt $U$ <b>Energiepotential</b> (oder Potential) und $V$ <b>spezifisches Potential</b> (z. B. Gravitation: $V = U/m$ in J/kg; Elektrostatik: $V = U/q$ in J/C = Volt).`,
    meta: "Skript: Abschnitte 4.4.2 (Gl. 4.72–4.74) und 4.4.5 (Gl. 4.102), S. 114 und 122",
    explanation: R`<b>Intuition:</b> Höhenangaben brauchen einen Bezugspunkt (Meeresspiegel, Zimmerboden). Welchen man wählt, ist egal, solange man immer Differenzen bildet: Ein Ball, der 2 m fällt, gewinnt dieselbe Geschwindigkeit, ob man ab Meer oder ab Tischplatte misst.<br><br>
<b>Negatives Potential ist kein Problem:</b> Mit $U(\infty) = 0$ ist das Gravitationspotential überall negativ. Ein gebundener Körper hat negative Gesamtenergie, ein ungebundener positive. Das Vorzeichen hat physikalische Bedeutung erst <i>relativ</i> zur gewählten Konvention.<br><br>
<b>Warum ein spezifisches Potential?</b> Wie beim Feld: Man berechnet $V$ einmal für die Quellen und multipliziert für jedes Probeteilchen nur mit seiner Kopplung ($U = \gamma V$). In der Elektrostatik heisst $V$ elektrisches Potential, Differenzen davon sind Spannungen.<br><br>
<b>Zusammenhang:</b> $\vec f = -\nabla V$ (spezifisches Feld als Gradient des spezifischen Potentials), z. B. $\vec g = -\nabla V_G$, $\vec E = -\nabla\phi$.`,
    derivation: R`Nullpunkt im Unendlichen für ein $1/r$-Potential:
<ol class="fc-steps">
<li>$U(r) = -\dfrac{k}{r} + U_0$<em>Allgemeine Form (z. B. Gravitation mit $k = G_Nm_1m_2$), $U_0$ beliebig (4.85).</em></li>
<li>$\lim_{r\to\infty}U(r) = U_0$<em>Der Term $-k/r$ verschwindet im Unendlichen.</em></li>
<li>$U_0 := 0$<em>Konvention: kein Potential im Unendlichen (4.94).</em></li>
<li>$\Delta U = U(r_2)-U(r_1) = k\left(\dfrac1{r_1}-\dfrac1{r_2}\right)$<em>Jede messbare Grösse ist eine Differenz; $U_0$ fällt immer heraus.</em></li>
</ol>`,
    example: R`Ein Ball ($0{,}5\,\text{kg}$) liegt auf einem $0{,}8\,\text{m}$ hohen Tisch im 3. Stock ($10\,\text{m}$ über der Strasse).<br>
Bezug Tisch: $U = 0$; Bezug Zimmerboden: $U = 3{,}9\,\text{J}$; Bezug Strasse: $U = 53\,\text{J}$.<br>
Fällt er auf den Boden: $\Delta U = -3{,}9\,\text{J}$ in <i>allen</i> drei Konventionen, also gleiche Aufprallgeschwindigkeit $\sqrt{2\cdot9{,}81\cdot0{,}8}\,\text{m/s} = 4{,}0\,\text{m/s}$.<br><br>
<b>Spezifisch:</b> $V_G = -G_NM/R_E = -6{,}25\cdot10^{7}\,\text{J/kg}$ an der Erdoberfläche (bezüglich $\infty$).`,
    counterexample: R`<b>Absoluter Potentialwert als Messgrösse:</b> „Der Stein hat 53 J potentielle Energie“ ist ohne Angabe des Bezugspunkts sinnlos. Ein Experiment kann nur zeigen, wie viel Energie bei einem bestimmten Weg frei wird, also eine Differenz.`,
    pitfalls: R`<ul><li>Verschiedene Nullpunkte innerhalb derselben Rechnung mischen.</li>
<li>Potential (Energie, J) und spezifisches Potential (J/kg bzw. V) verwechseln.</li>
<li>Negatives Potential als „unphysikalisch“ betrachten.</li></ul>`
  },
  {
    id: "ph4_potential_beispiele",
    title: "Potentielle Energie: Schwerefeld nahe der Erde und gespannte Feder",
    category: "4.4 Potentielle Energie und konservative Kräfte",
    type: "beispiel",
    front: R`Berechne die potentielle Energie (a) im homogenen Schwerefeld nahe der Erdoberfläche, $U = mg(z_2-z_1)$, und (b) einer gespannten Feder, $U = \tfrac12kx^2$, direkt aus der Definition $U_{2(1)} = -\int\vec F\cdot d\vec r$.`,
    back: R`<b>(a) Schwerefeld</b> ($z$ vertikal, Bezugspunkt $\vec r_1$ mit $U_1 = 0$):
$$\vec F\cdot d\vec r = (0,-mg)\cdot(dx,dz) = -mg\,dz\qquad(4.75,\,4.76)$$
$$U_{2(1)} = -\int_{\vec r_1}^{\vec r_2}\vec F\cdot d\vec r = mg\int_{z_1}^{z_2}dz = mg\,(z_2-z_1)\qquad(4.77\text{–}4.79)$$
<b>(b) Feder</b> (Rückstellkraft $F_R = -k(x-x_0)$, Bezug Ruhelage $x_0 = 0$, $U(0) = 0$):
$$U(x) = -\int_0^xF_R(x')\,dx' = k\int_0^xx'\,dx' = \tfrac12kx^2\qquad(4.80\text{–}4.83)$$
Das ist das Potential des harmonischen Oszillators, eine Parabel (Abb. 4.21). $F_R$ ist hier eine 1D-Grösse mit Vorzeichen, kein Betrag.`,
    meta: "Skript: Abschnitte 4.4.2.1–4.4.2.2, Gl. (4.75)–(4.83), Abb. 4.19–4.21, S. 115–117",
    explanation: R`<b>Intuition:</b> Im homogenen Feld wächst die Energie linear mit der Höhe (jeder Meter kostet gleich viel). Bei der Feder wächst sie quadratisch: Je weiter gedehnt, desto stärker zieht die Feder zurück, und jeder weitere Zentimeter kostet mehr.<br><br>
<b>Abhängigkeiten:</b>
<ul><li>Schwerefeld: $U\propto m$, $\propto\Delta z$.</li>
<li>Feder: $U\propto k$, $\propto x^2$. Doppelte Dehnung ergibt vierfache Energie. Und $U$ ist auch bei Stauchung ($x\lt0$) positiv.</li></ul>
<b>Kontrolle über die Kraft:</b> $F = -dU/dx$ liefert $-mg$ bzw. $-kx$ zurück; so prüft man jedes Potential.<br><br>
<b>Zusammenhang:</b> Nahe einem Minimum sieht <i>jedes</i> glatte Potential aus wie $\tfrac12k_\text{eff}x^2$ (Taylor). Deshalb ist die Feder das Modell aller kleinen Schwingungen (Kap. 9). Die lineare Form $mgz$ ist die Näherung von $-G_NMm/r$ für kleine Höhen (4.4.2.4).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec F = (0,-mg)$, $d\vec r = (dx,dz)$<em>Homogenes Schwerefeld, zweite horizontale Achse weggelassen.</em></li>
<li>$\vec F\cdot d\vec r = -mg\,dz$<em>Nur die vertikale Verschiebung zählt; horizontale Wege kosten nichts (4.76).</em></li>
<li>$U_2 - U_1 = -\int(-mg)\,dz = mg(z_2-z_1)$<em>Definition (4.70) mit $U_1 = 0$ (4.77–4.79).</em></li>
<li>$F_R(x') = -kx'$<em>Federkraft bezüglich der Ruhelage (4.80).</em></li>
<li>$U(x) = -\int_0^x(-kx')\,dx' = k\left[\tfrac12x'^2\right]_0^x = \tfrac12kx^2$<em>Integrieren (4.81–4.83).</em></li>
<li>$-\dfrac{dU}{dx} = -kx = F_R$ ✓<em>Kontrolle: Ableiten liefert die Kraft zurück.</em></li>
</ol>`,
    example: R`<b>Bungee:</b> Seil mit $k = 100\,\text{N/m}$, um $20\,\text{m}$ gedehnt: $U = \tfrac12\cdot100\cdot400\,\text{J} = 20\,\text{kJ}$. Das entspricht der Höhenenergie einer 80-kg-Person über $25{,}5\,\text{m}$.<br><br>
<b>Federpistole:</b> $k = 500\,\text{N/m}$, $x = 5\,\text{cm}$: $U = 0{,}625\,\text{J}$. Eine Kugel von $10\,\text{g}$ erreicht $v = \sqrt{2U/m} = 11{,}2\,\text{m/s}$, mit doppelter Spannung $22{,}4\,\text{m/s}$.`,
    counterexample: R`<b>$U = mgh$ für grosse Höhen:</b> Für eine Rakete auf $h = R_E$ ergäbe $mgh$ den Wert $mgR_E$, korrekt ist aber $\Delta U = G_NMm\left(\frac1{R_E}-\frac1{2R_E}\right) = \tfrac12mgR_E$, nur halb so viel. Die lineare Formel gilt nur für $h\ll R_E$.`,
    pitfalls: R`<ul><li>$U = \tfrac12kx^2$ mit $x$ = Federlänge statt Auslenkung aus der Ruhelage.</li>
<li>$U = kx^2$ ohne $\tfrac12$ (Verwechslung mit $F\cdot x$; die Kraft wächst ja erst von 0 auf $kx$).</li>
<li>Bei der vertikal hängenden Feder Gravitation und Federenergie inkonsistent kombinieren (die neue Ruhelage verschiebt sich um $mg/k$).</li></ul>`
  },
  {
    id: "ph4_gravitationspotential",
    title: "Gravitationspotential U = −G m₁m₂/r und ∇(1/r) = −r̂/r²",
    category: "4.4 Potentielle Energie und konservative Kräfte",
    type: "herleitung",
    front: R`Zeige, dass aus dem Zentralpotential $U(r) = -G_N\dfrac{m_1m_2}{r} + U_0$ die Gravitationskraft $\vec F = -G_Nm_1m_2\,\hat r/r^2$ folgt. Berechne dazu $\nabla r$ und $\nabla(1/r)$. Wie wird $U_0$ festgelegt?`,
    back: R`$$U(r) = -G_N\frac{m_1m_2}{r} + U_0\qquad(4.85)$$
$$\vec F = -\nabla U = G_N m_1m_2\,\nabla\!\left(\frac1r\right)\qquad(4.86)$$
Mit
$$\nabla r = \begin{pmatrix}x/r\\y/r\\z/r\end{pmatrix} = \frac{\vec r}{r} = \hat r,\qquad \nabla\frac1r = -\frac{\nabla r}{r^2} = -\frac{\hat r}{r^2}\qquad(4.87\text{–}4.92)$$
folgt
$$\vec F(r) = -G_N\,m_1m_2\,\frac{\hat r}{r^2}\qquad(4.93)$$
Das Potential hängt nur von $r$ ab: <b>Zentralfeld</b>. Konvention: $U_0 := \lim_{r\to\infty}U(r) = 0$ (4.94). Dann ist $U$ überall negativ (Abb. 4.24), was unwesentlich ist, da nur Differenzen zählen.`,
    meta: "Skript: Abschnitt 4.4.2.4, Gl. (4.85)–(4.94), Abb. 4.24, S. 117–119",
    explanation: R`<b>Intuition:</b> Das Gravitationspotential ist ein „Trichter“, der zur Masse hin immer steiler und tiefer wird. Die Kraft zeigt bergab (zum Zentrum) und ist umso grösser, je steiler der Trichter ($|dU/dr| = G_Nm_1m_2/r^2$).<br><br>
<b>Gebunden vs. ungebunden:</b> Mit $U(\infty) = 0$ ist ein Körper mit Gesamtenergie $E\lt0$ gebunden (Ellipsenbahn), mit $E\ge0$ kann er ins Unendliche entkommen. Daraus folgt die Fluchtgeschwindigkeit.<br><br>
<b>Abhängigkeiten:</b> $U\propto1/r$, $F\propto1/r^2$. Halber Abstand ergibt doppelt so tiefes Potential, aber vierfache Kraft.<br><br>
<b>Zusammenhang:</b> Nahe der Oberfläche ($r = R_E + h$, $h\ll R_E$) wird daraus $U\approx\text{const} + mgh$ mit $g = G_NM/R_E^2$. Die Coulomb-Wechselwirkung hat dieselbe Form mit $G_Nm_1m_2\to-\frac{q_1q_2}{4\pi\varepsilon_0}$ (abstossend bei gleichen Vorzeichen). Kap. 7 baut darauf das effektive Potential und die Kepler-Bahnen auf.`,
    derivation: R`<ol class="fc-steps">
<li>$\dfrac{\partial r}{\partial x} = \dfrac{\partial}{\partial x}\sqrt{x^2+y^2+z^2} = \dfrac{2x}{2\sqrt{x^2+y^2+z^2}} = \dfrac xr$<em>Kettenregel (4.89, 4.90); analog für $y$ und $z$.</em></li>
<li>$\nabla r = \dfrac1r(x,y,z) = \dfrac{\vec r}{r} = \hat r$<em>Der Gradient des Abstands ist der radiale Einheitsvektor (4.91): $r$ wächst am schnellsten radial.</em></li>
<li>$\nabla\dfrac1r = -\dfrac1{r^2}\nabla r = -\dfrac{\hat r}{r^2}$<em>Kettenregel: $\frac{d}{dr}(1/r) = -1/r^2$ (4.87, 4.92).</em></li>
<li>$\vec F = -\nabla U = G_Nm_1m_2\nabla\dfrac1r$<em>Konstante $U_0$ fällt beim Gradienten weg (4.86).</em></li>
<li>$\vec F = -G_Nm_1m_2\dfrac{\hat r}{r^2}$<em>Einsetzen: anziehend, $\propto1/r^2$ (4.93).</em></li>
</ol>`,
    example: R`<b>Fluchtgeschwindigkeit</b> von der Erdoberfläche: $\tfrac12mv_F^2 - G_N\frac{Mm}{R_E} = 0$ (gerade noch $E = 0$), also $v_F = \sqrt{\frac{2G_NM}{R_E}} = \sqrt{2gR_E} = \sqrt{2\cdot9{,}81\cdot6{,}371\cdot10^{6}}\,\text{m/s} = 11{,}2\,\text{km/s}$, unabhängig von der Masse.<br><br>
<b>Potentialdifferenz Boden–ISS</b> (400 km) pro kg: $G_NM\left(\frac1{R_E}-\frac1{R_E+h}\right) = 3{,}7\,\text{MJ/kg}$, etwas weniger als $gh = 3{,}9\,\text{MJ/kg}$.`,
    counterexample: R`<b>Innerhalb der Erde</b> gilt $U\propto-1/r$ nicht mehr. Für eine homogene Kugel wächst die Kraft im Inneren linear mit $r$ ($F\propto r$), und das Potential ist dort eine Parabel (Kap. 7.4.2). Die Formel gilt nur ausserhalb der Massenverteilung.`,
    pitfalls: R`<ul><li>Vorzeichen: $U = -G_Nm_1m_2/r$ ist negativ, die Kraft zeigt nach innen ($-\hat r$).</li>
<li>$\nabla(1/r) = -\vec r/r^2$ statt $-\hat r/r^2 = -\vec r/r^3$ schreiben (falsche Dimension).</li>
<li>$mgh$ und $-G_NMm/r$ mit verschiedenen Nullpunkten mischen.</li></ul>`
  },
  {
    id: "ph4_gleichgewicht",
    title: "Gradient und Äquipotentialflächen, Gleichgewichtslagen (NaCl-Potential)",
    category: "4.4 Potentielle Energie und konservative Kräfte",
    type: "konzept",
    front: R`Wie hängt die Kraft geometrisch mit den <b>Äquipotentialflächen</b> zusammen? Wann ist ein Massenpunkt im <b>Gleichgewicht</b>, und wie unterscheiden sich stabile, labile und indifferente Lagen? Erkläre am Potential des Cl⁻-Ions im NaCl-Kristall.`,
    back: R`<b>Änderung der potentiellen Energie</b> bei Verschiebung $d\vec r$:
$$dE_\text{pot} = \nabla E_\text{pot}\cdot d\vec r\qquad(4.96\text{–}4.98)$$
<ul><li>$d\vec r\parallel\nabla E_\text{pot}$: maximale Zunahme</li>
<li>$d\vec r\perp\nabla E_\text{pot}$: keine Änderung</li>
<li>$d\vec r$ antiparallel: Abnahme</li></ul>
Äquipotentialflächen $E_\text{pot}(\vec r) = \text{const}$ (4.99); in 2D „Höhenlinien“. Die Kraft $\vec F = -\nabla E_\text{pot}$ zeigt „abwärts“ und steht <b>senkrecht</b> auf ihnen (4.100, 4.101).<br><br>
<b>Gleichgewicht:</b> resultierende Kraft null, also waagrechte Tangente des Potentials. Je nach Krümmung (Abb. 4.25):
<ul><li><b>stabil:</b> Minimum ($U''>0$), kleine Auslenkung führt zurück</li>
<li><b>labil:</b> Maximum ($U''\lt0$), kleine Auslenkung wächst</li>
<li><b>indifferent:</b> konstantes $U$ ($U'' = 0$), jede Lage ist Gleichgewicht</li></ul>
<b>NaCl</b> (Abb. 4.23): $F_x = -dU/dx$; für kleine Abstände ist $dU/dx\lt0$, also abstossend, für grosse $dU/dx>0$, also anziehend. Dazwischen liegt ein Minimum bei $x_0$: eine stabile Bindung.`,
    meta: "Skript: Abschnitte 4.4.2.3, 4.4.3, 4.4.4, Gl. (4.84), (4.95)–(4.101), Abb. 4.22–4.25, S. 117–122",
    explanation: R`<b>Intuition (Murmel in einer Landschaft):</b> Im Tal (Minimum) rollt die Murmel nach kleinen Störungen zurück, auf der Bergspitze rollt sie weg, auf einer Ebene bleibt sie überall liegen.<br><br>
<b>Kristallbindung:</b> Zwei Effekte konkurrieren: die elektrische Anziehung zwischen Na⁺ und Cl⁻ (langreichweitig, $\propto-1/x$) und eine starke Abstossung bei Überlappung der Elektronenhüllen (kurzreichweitig, sehr steil). Ihre Summe hat ein Minimum: den Gleichgewichtsabstand im Kristall.<br><br>
<b>Kleine Schwingungen:</b> Um ein stabiles Minimum ist $U(x)\approx U(x_0)+\tfrac12U''(x_0)(x-x_0)^2$, wie bei einer Feder mit $k = U''(x_0)$. Atome im Kristall schwingen deshalb harmonisch mit $\omega = \sqrt{U''(x_0)/m}$ (Kap. 9, Wärmekapazität Kap. 10).<br><br>
<b>Zusammenhang:</b> Statik starrer Körper (Kap. 8.4) und das effektive Potential der Planetenbahnen (Kap. 7.3) benutzen dieselben Kriterien.`,
    derivation: R`Stabilitätskriterium aus der Taylorentwicklung um eine Gleichgewichtslage $x_0$:
<ol class="fc-steps">
<li>$F(x_0) = -U'(x_0) = 0$<em>Gleichgewicht: waagrechte Tangente.</em></li>
<li>$U(x)\approx U(x_0) + \tfrac12U''(x_0)\,(x-x_0)^2$<em>Taylor bis zur 2. Ordnung; der lineare Term fehlt wegen Schritt 1.</em></li>
<li>$F(x) = -U'(x)\approx-U''(x_0)\,(x-x_0)$<em>Kraft bei kleiner Auslenkung, linear in der Auslenkung.</em></li>
<li>$U''>0$: rücktreibend; $U''\lt0$: wegtreibend; $U'' = 0$: keine Kraft (in 2. Ordnung)<em>Vorzeichen der Krümmung entscheidet: stabil, labil, indifferent.</em></li>
<li>$m\ddot x = -U''(x_0)(x-x_0)\;\Rightarrow\;\omega = \sqrt{U''(x_0)/m}$<em>Im stabilen Fall harmonische Schwingung (vgl. Federkraft 3.9.3).</em></li>
</ol>`,
    example: R`<b>Pendel:</b> $U(\varphi) = mg\ell(1-\cos\varphi)$. Bei $\varphi = 0$: $U'' = mg\ell>0$, stabil. Bei $\varphi = \pi$ (Pendel steht senkrecht oben): $U'' = -mg\ell\lt0$, labil.<br>
<b>Kugel auf ebenem Tisch:</b> indifferent.<br>
<b>Modellpotential</b> $U(x) = \frac{a}{x^{12}}-\frac{b}{x^6}$ (Lennard-Jones): Minimum bei $x_0 = (2a/b)^{1/6}$; für $x\lt x_0$ abstossend, für $x>x_0$ anziehend, analog zu NaCl.`,
    counterexample: R`<b>$U' = 0$ heisst nicht automatisch stabil:</b> $U = x^3$ hat bei $x = 0$ eine waagrechte Tangente und $U'' = 0$, ist aber nicht indifferent: Für $x\lt0$ rollt die Murmel weg (Sattelpunkt). Man muss höhere Ableitungen prüfen.`,
    pitfalls: R`<ul><li>Die Kraft in Richtung $+\nabla U$ zeichnen; sie zeigt bergab ($-\nabla U$).</li>
<li>Gleichgewicht mit „Geschwindigkeit null“ gleichsetzen; es heisst Kraft null.</li>
<li>Annehmen, die Kraft verlaufe entlang der Äquipotentialflächen; sie steht senkrecht darauf.</li>
<li>Labile Gleichgewichtslagen als „Ruhelagen“ für Schwingungen verwenden.</li></ul>`
  },

  // ========================================================================
  // 4.5 ENERGIEERHALTUNG
  // ========================================================================
  {
    id: "ph4_energiesatz",
    title: "Energiesatz der Mechanik und allgemeiner Energiesatz",
    category: "4.5 Energieerhaltung",
    type: "gesetz",
    front: R`Leite den <b>mechanischen Energiesatz</b> $T + U = \text{const}$ her. Wann gilt er, und wie lautet der allgemeine Energiesatz? Was folgt daraus für ein Perpetuum mobile 1. Art?`,
    back: R`Im abgeschlossenen System mit <b>konservativen</b> Kräften gilt nach (4.63) und (4.69) für dieselbe Arbeit
$$W = \tfrac12mv_2^2 - \tfrac12mv_1^2 = U(\vec r_1) - U(\vec r_2)\qquad(4.103)$$
$$\Longleftrightarrow\quad\tfrac12mv_1^2 + U(\vec r_1) = \tfrac12mv_2^2 + U(\vec r_2)\equiv E_\text{ges}\qquad(4.104)$$
Die Summe aus kinetischer und potentieller Energie bleibt für alle Zeiten konstant: eine <b>Erhaltungsgrösse der Bewegung</b>.<br><br>
Gilt <b>nur</b> für konservative Kräfte; mit Reibung liefert er unsinnige Resultate. <b>Allgemeiner Energiesatz</b> (abgeschlossenes System):
$$E = mc^2 + T + U + Q + \dots = \text{const}\qquad(4.105)$$
(Ruheenergie, Wärme $Q$ = ungeordnete kinetische Energie der Moleküle, …). Folge: Ein <b>Perpetuum mobile 1. Art</b> (liefert ununterbrochen Arbeit ohne Energiezufuhr oder Veränderung im System) ist unmöglich. Ob sich Energieformen ineinander umwandeln lassen, regelt erst der 2. Hauptsatz (Kap. 10).`,
    meta: "Skript: Abschnitt 4.5.1, Gl. (4.103)–(4.105), S. 123",
    explanation: R`<b>Intuition:</b> Energie wird nur zwischen Formen hin- und hergeschoben. Beim Pendel: oben alles potentiell, unten alles kinetisch, dazwischen gemischt. Die Summe bleibt.<br><br>
<b>Zwei Rechnungen für dieselbe Arbeit:</b> Der Arbeitssatz sagt $W = \Delta T$ (für jede Kraft), die Definition des Potentials $W = -\Delta U$ (nur konservativ). Gleichsetzen ergibt $\Delta(T+U) = 0$.<br><br>
<b>Stärke des Energiesatzes:</b> Man kann Geschwindigkeiten an verschiedenen Orten berechnen, ohne die Bewegungsgleichung zu lösen oder den Weg zu kennen (Achterbahn, Looping 4.5.2). Für Zeiten und Bahnformen braucht man aber weiterhin Newton.<br><br>
<b>Symmetrie:</b> Energieerhaltung folgt aus der Zeittranslationsinvarianz der Naturgesetze (Noether). Explizit zeitabhängige Kräfte verletzen den mechanischen Energiesatz.<br><br>
<b>Zusammenhang:</b> Der 1. Hauptsatz der Thermodynamik (Kap. 10.5) ist der Energiesatz mit Wärme. Bei Vielteilchensystemen gilt er für die Summe aller Energien inklusive Wechselwirkungsenergie (Kap. 6.5.4).`,
    derivation: R`<ol class="fc-steps">
<li>$W_{1\to2} = T_2 - T_1$<em>Arbeitssatz (4.65), gilt für die Gesamtkraft.</em></li>
<li>$W_{1\to2} = U_1 - U_2$<em>Arbeit einer konservativen Kraft (4.69).</em></li>
<li>$T_2 - T_1 = U_1 - U_2$<em>Dieselbe Arbeit, zwei Ausdrücke (4.103).</em></li>
<li>$T_1 + U_1 = T_2 + U_2$<em>Sortieren: Die Summe ist an beiden Orten gleich (4.104).</em></li>
<li>$\dfrac{d}{dt}(T+U) = m\vec v\cdot\dot{\vec v} + \nabla U\cdot\vec v = \vec v\cdot(m\vec a - \vec F) = 0$<em>Zeitliche Kontrolle: Mit $\vec F = -\nabla U$ und Newton II verschwindet die Ableitung.</em></li>
</ol>`,
    example: R`<b>Achterbahn:</b> Start in Ruhe auf $40\,\text{m}$ Höhe, reibungsfrei. Am Talpunkt (Höhe 0): $v = \sqrt{2g\cdot40}\,\text{m/s} = 28\,\text{m/s}$. Auf einem $25\,\text{m}$ hohen Hügel: $v = \sqrt{2g\cdot15}\,\text{m/s} = 17{,}2\,\text{m/s}$, unabhängig von der Form der Strecke.<br><br>
<b>Pendel:</b> $\ell = 1\,\text{m}$, ausgelenkt um $60^\circ$: Höhenunterschied $\ell(1-\cos60^\circ) = 0{,}5\,\text{m}$, also $v_\text{unten} = 3{,}1\,\text{m/s}$.`,
    counterexample: R`<b>Bremsender Wagen:</b> $T$ nimmt ab, $U$ bleibt (horizontal) gleich, also ist $T + U$ <i>nicht</i> konstant. Die mechanische Energie verschwindet in Wärme $Q$. Der allgemeine Energiesatz (4.105) gilt weiter, der mechanische nicht.<br>
<b>Perpetuum-mobile-Entwürfe</b> (Räder mit verschiebbaren Gewichten usw.) scheitern immer: Man weiss von vornherein, dass der Fehler irgendwo stecken muss.`,
    pitfalls: R`<ul><li>Den mechanischen Energiesatz bei Reibung oder inelastischen Stössen anwenden.</li>
<li>Arbeit äusserer Kräfte (z. B. ein Motor) vergessen; dann ist das System nicht abgeschlossen.</li>
<li>Den Nullpunkt von $U$ zwischen Anfang und Ende wechseln.</li>
<li>Aus dem Energiesatz Zeiten berechnen wollen; dafür braucht man die Bewegungsgleichung.</li></ul>`
  },
  {
    id: "ph4_nichtkonservativ",
    title: "Nichtkonservative Kräfte: W_NK = ΔT + ΔU",
    category: "4.5 Energieerhaltung",
    type: "gesetz",
    front: R`Wie lautet die Energiebilanz, wenn sowohl <b>konservative</b> Kräfte $\vec F_K$ als auch <b>nichtkonservative</b> Kräfte $\vec F_{NK}$ (z. B. Reibung) wirken? Leite $\int\vec F_{NK}\cdot d\vec r = \Delta E_\text{ges}$ her.`,
    back: R`$$W_\text{ges} = \int_{\vec r_1}^{\vec r_2}(\vec F_K+\vec F_{NK})\cdot d\vec r = \underbrace{\int\vec F_K\cdot d\vec r}_{=U_1-U_2 = -\Delta U} + \int\vec F_{NK}\cdot d\vec r = T_2-T_1 =: \Delta T\qquad(4.106)$$
$$\Rightarrow\quad\int_{\vec r_1}^{\vec r_2}\vec F_{NK}\cdot d\vec r = \Delta T + \Delta U = \Delta E_\text{ges}\qquad(4.107)$$
Die Arbeit der nichtkonservativen Kräfte ändert die mechanische Gesamtenergie. Reibung leistet negative Arbeit und verringert $E_\text{ges}$ (die Energie geht in Wärme über); ein Motor leistet positive Arbeit und erhöht sie.`,
    meta: "Skript: Abschnitt 4.5.1, Gl. (4.106)–(4.107), S. 124",
    explanation: R`<b>Intuition:</b> Die konservativen Kräfte werden „ins Konto“ der potentiellen Energie gebucht, alle anderen bleiben als Arbeit stehen. Was die nichtkonservativen Kräfte tun, sieht man direkt an der Änderung der mechanischen Gesamtenergie.<br><br>
<b>Praktisches Rezept:</b> $E_\text{ges,Ende} = E_\text{ges,Anfang} + W_{NK}$. Bei Gleitreibung ist $W_{NK} = -\mu F_N\cdot s$ (Weglänge, nicht Verschiebung!), da die Reibung immer gegen die Bewegung zeigt.<br><br>
<b>Abhängigkeit vom Weg:</b> Im Gegensatz zu $\Delta U$ hängt $W_{NK}$ vom Weg ab: Ein Umweg mit Reibung kostet mehr Energie.<br><br>
<b>Zusammenhang:</b> Der „Verlust“ an mechanischer Energie erscheint im allgemeinen Energiesatz (4.105) als Wärme $Q$. Thermodynamisch (Kap. 10) ist das die Umwandlung geordneter in ungeordnete Bewegung, die sich nicht vollständig rückgängig machen lässt (2. Hauptsatz).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec F = \vec F_K + \vec F_{NK}$<em>Gesamtkraft zerlegen.</em></li>
<li>$W_\text{ges} = \Delta T$<em>Arbeitssatz gilt für die Gesamtkraft (4.65).</em></li>
<li>$\int\vec F_K\cdot d\vec r = -\Delta U$<em>Konservativer Anteil durch das Potential ausdrücken (4.69).</em></li>
<li>$-\Delta U + \int\vec F_{NK}\cdot d\vec r = \Delta T$<em>Einsetzen (4.106).</em></li>
<li>$\int\vec F_{NK}\cdot d\vec r = \Delta T + \Delta U = \Delta E_\text{ges}$<em>Umstellen (4.107).</em></li>
</ol>`,
    example: R`<b>Schlitten</b> ($m = 20\,\text{kg}$) startet in Ruhe auf einem $10\,\text{m}$ hohen Hang, rutscht insgesamt $s = 60\,\text{m}$ (Hang und Ebene), mittlere Reibungskraft $F_R = 25\,\text{N}$.<br>
$E_\text{Anfang} = mgh = 1962\,\text{J}$, $W_{NK} = -25\cdot60\,\text{J} = -1500\,\text{J}$, also $T_\text{Ende} = 462\,\text{J}$ und $v_\text{Ende} = \sqrt{2\cdot462/20}\,\text{m/s} = 6{,}8\,\text{m/s}$ (ohne Reibung $14\,\text{m/s}$).`,
    counterexample: R`<b>Normalkraft ist nicht konservativ, leistet aber keine Arbeit:</b> Auf einer festen Unterlage steht sie senkrecht zur Bewegung, also $W_{NK} = 0$, und die mechanische Energie bleibt erhalten, obwohl nicht alle Kräfte konservativ sind. Entscheidend ist nicht „konservativ oder nicht“, sondern ob die nichtkonservativen Kräfte Arbeit leisten.`,
    pitfalls: R`<ul><li>Die Reibungsarbeit mit der Verschiebung statt mit der zurückgelegten Weglänge berechnen.</li>
<li>Vorzeichen: Reibung leistet negative Arbeit, $\Delta E_\text{ges}\lt0$.</li>
<li>Konservative Kräfte doppelt zählen (als Arbeit und als $\Delta U$).</li></ul>`
  },
  {
    id: "ph4_looping",
    title: "Ball in der Kreisschleife (Looping): Mindesthöhe h = 5R/2",
    category: "4.5 Energieerhaltung",
    type: "beispiel",
    front: R`Ein Ball gleitet reibungsfrei (ohne zu rollen) eine Bahn hinab in eine Kreisschleife mit Radius $R$. Aus welcher <b>Mindesthöhe</b> $h$ muss er starten, um die Schleife zu durchlaufen? Wie gross sind die Normalkräfte unten, seitlich und oben?`,
    back: R`Kräfte: Gravitation $m\vec g$ (immer nach unten) und Normalkraft $\vec N$ (senkrecht zur Bahn). Ihre Summe muss die Zentripetalkraft $F_{ZP} = mv^2/R$ (4.108) liefern:
<ul><li>unten: $|N_1| - mg = m\frac{v_1^2}{R}\;\Rightarrow\;|N_1| = m\left(\frac{v_1^2}{R}+g\right)$</li>
<li>seitlich (halbe Höhe): $|N_2| = m\frac{v_2^2}{R}$</li>
<li>oben (B): $|N_B| + mg = m\frac{v_B^2}{R}\;\Rightarrow\;|N_B| = m\left(\frac{v_B^2}{R}-g\right)$</li></ul>
Gerade noch Kontakt oben: $N_B = 0$, also
$$v_B = \sqrt{gR}\qquad(4.109)$$
Energieerhaltung zwischen Start A ($v_A = 0$, Höhe $h$) und B (Höhe $2R$):
$$mgh = \tfrac12m(gR) + mg(2R) = \tfrac52mgR\quad\Rightarrow\quad h = \tfrac52R\qquad(4.110\text{–}4.112)$$
Unabhängig von der Masse und vom genauen Wert von $g$.`,
    meta: "Skript: Abschnitt 4.5.2, Gl. (4.108)–(4.112), Abb. 4.26–4.27, S. 124–127",
    explanation: R`<b>Intuition:</b> Oben in der Schleife muss der Ball so schnell sein, dass er nicht herunterfällt. Die Schwerkraft allein muss gerade ausreichen, ihn auf der Kreisbahn zu halten. Ist er langsamer, löst er sich von der Bahn und fällt (auf einer Wurfparabel). Diese Mindestgeschwindigkeit muss er aus der Starthöhe mitbringen.<br><br>
<b>Warum nicht einfach $h = 2R$?</b> Mit $h = 2R$ käme der Ball oben mit $v = 0$ an, aber dann wäre keine Zentripetalkraft nötig, er würde vorher schon herunterfallen. Die zusätzliche Höhe $R/2$ liefert die kinetische Energie $\tfrac12mgR$ für $v_B = \sqrt{gR}$.<br><br>
<b>Normalkraft unten:</b> Mit $h = \tfrac52R$ ist $v_1^2 = 5gR$, also $N_1 = 6mg$. In einer Achterbahn spürt man im Tal das Sechsfache des Gewichts (deshalb bauen echte Achterbahnen „Tropfenschleifen“ mit kleinerem Radius oben).<br><br>
<b>Zusammenhang:</b> Kombination von Energiesatz (für Geschwindigkeiten) und Newton II in radialer Richtung (für Normalkräfte); keiner allein reicht.`,
    derivation: R`<ol class="fc-steps">
<li>Oben: $N_B + mg = m\dfrac{v_B^2}{R}$<em>Beide Kräfte zeigen zum Kreismittelpunkt (nach unten); zusammen sind sie die Zentripetalkraft.</em></li>
<li>$N_B\ge0\;\Rightarrow\;v_B^2\ge gR$<em>Die Bahn kann nur drücken, nicht ziehen; Grenzfall $N_B = 0$ ergibt $v_B = \sqrt{gR}$ (4.109).</em></li>
<li>$E_A = mgh$<em>Start in Ruhe, Nullpunkt der Höhe am tiefsten Punkt der Schleife (4.110).</em></li>
<li>$E_B = \tfrac12mv_B^2 + mg\cdot2R = \tfrac12mgR + 2mgR = \tfrac52mgR$<em>Oberster Punkt liegt auf Höhe $2R$ (4.111).</em></li>
<li>$E_A = E_B\;\Rightarrow\;h = \tfrac52R$<em>Reibungsfrei: mechanische Energie erhalten; $m$ und $g$ kürzen sich (4.112).</em></li>
<li>Unten: $v_1^2 = 2gh = 5gR$, $N_1 = m(5g+g) = 6mg$<em>Energiesatz bis zum tiefsten Punkt und radiale Kräftebilanz.</em></li>
</ol>`,
    example: R`Schleife mit $R = 0{,}40\,\text{m}$: Mindeststarthöhe $h = 1{,}00\,\text{m}$, $v_B = \sqrt{9{,}81\cdot0{,}4}\,\text{m/s} = 1{,}98\,\text{m/s}$, $v_1 = \sqrt{5\cdot9{,}81\cdot0{,}4}\,\text{m/s} = 4{,}43\,\text{m/s}$.<br>
Ein Ball von $50\,\text{g}$ drückt unten mit $6mg = 2{,}9\,\text{N}$ auf die Bahn, seitlich mit $\frac{mv_2^2}{R} = 3mg = 1{,}5\,\text{N}$ ($v_2^2 = 3gR$), oben mit $0$.`,
    counterexample: R`<b>Rollende Kugel:</b> Rollt der Ball (statt zu gleiten), steckt ein Teil der Energie in der Rotation ($\tfrac25\cdot\tfrac12mv^2$ bei einer Vollkugel, Kap. 8). Dann braucht man $h = 2{,}7R$ statt $2{,}5R$. Die vereinfachende Annahme „gleitet ohne zu rollen“ ist also wesentlich.<br>
<b>Mit Reibung</b> reicht $h = \tfrac52R$ ebenfalls nicht.`,
    pitfalls: R`<ul><li>$h = 2R$ annehmen (oben $v = 0$ ist zu wenig).</li>
<li>Oben die Normalkraft nach oben zeichnen; beide Kräfte zeigen zum Zentrum, also nach unten.</li>
<li>Energiesatz und Kräftebilanz nicht kombinieren.</li>
<li>Die Höhe vom falschen Nullpunkt aus messen (vom Boden der Schleife aus).</li></ul>`
  }
];
})();
