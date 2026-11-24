/* ==========================================================================
   PHYSIK I – KAPITEL 14 (Zusatzabschnitt): Statistische Mechanik
   Kinetische Gastheorie (Druck aus Stössen), Maxwell’sche
   Geschwindigkeitsverteilung (Herleitung, Betragsverteilung),
   Erwartungswerte, Messung mit Schlitzrädern
   Skript Physik I – Prof. K. Ensslin, ETH Zürich, HS 2025
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_KAPITEL_14 = [
  {
    id: "ph14_kinetische_gastheorie",
    title: "Kinetische Gastheorie: Druck aus Molekülstössen und ½m⟨v²⟩ = 3/2 kT",
    category: "14.1 Statistische Mechanik",
    type: "herleitung",
    front: R`Leite mit einem einfachen Modell (Moleküle in einem Würfel, Geschwindigkeitskomponenten $\pm v_0$) den Druck eines idealen Gases aus den Stössen der Moleküle mit der Wand her. Was folgt aus dem Vergleich mit $pV = \nu RT$ für die mittlere kinetische Energie eines Moleküls?`,
    back: R`Modell: Stoffmenge $\nu$ im Würfel der Kante $\ell$; je die Hälfte der Moleküle hat $v_x = +v_0$ bzw. $-v_0$ (ebenso $y$, $z$), also $v = v_0\sqrt3$ (14.1).<br>
Moleküle, die in $dt$ auf die Fläche $A$ treffen, und Teilchenstromdichte:
$$dn_x^+ = \frac12(\nu N_A)\frac{A\,dt\,v_0}{\ell^3},\qquad j_x = \frac{dn_x^+}{A\,dt} = \frac12\frac{dn}{dV}v_0\qquad(14.2\text{–}14.5)$$
Elastische Reflexion überträgt $\Delta k_x = 2mv_0$ (14.6). Kraft und Druck:
$$F_x = \frac{\nu N_AA\,v_0}{2V}\cdot2mv_0 = \nu N_A\frac{mv_0^2A}V,\qquad p = \frac{F_x}A = \nu N_A\frac{m\,v^2}{3V} = \frac13\rho v^2\qquad(14.7,\,14.8)$$
Mit dem Mittelwert $\langle v^2\rangle$:
$$pV = \frac23\nu N_A\frac{m\langle v^2\rangle}2 = \nu RT\;\Rightarrow\;\frac12m\langle v^2\rangle = \frac32kT\qquad(14.9)$$
Die Temperatur ist ein Mass für die mittlere kinetische Translationsenergie der Moleküle; für einatomige Gase $U = \tfrac32\nu RT$.`,
    meta: "Skript: Abschnitte 14.1–14.1.1, Gl. (14.1)–(14.9), Abb. 14.1, Fussnoten 1–5, Anhang S. 61–63",
    explanation: R`<b>Intuition:</b> Gasdruck ist der gemittelte „Hagel“ der Molekülstösse auf die Wand. Doppelt so schnelle Moleküle treffen doppelt so oft <i>und</i> übertragen doppelt so viel Impuls pro Stoss: Der Druck wächst mit $v^2$.<br><br>
<b>Abhängigkeiten:</b> $p = \tfrac13\rho\langle v^2\rangle$: proportional zur Dichte und zur mittleren quadratischen Geschwindigkeit. Bei gleicher Temperatur haben alle Gase dieselbe mittlere kinetische Energie $\tfrac32kT$; leichte Moleküle sind daher schneller ($v\propto1/\sqrt m$).<br><br>
<b>Warum elastisch?</b> Im thermischen Gleichgewicht müssen die Stösse im Mittel elastisch sein, sonst würde sich das Gas erwärmen oder abkühlen (Fussnote 4).<br><br>
<b>Zusammenhang:</b> Brücke zwischen Mikro- und Makrowelt: Die ideale Gasgleichung (10.6.1) und das Äquipartitionsgesetz (10.6.3) bekommen eine mechanische Begründung. Das Modell mit festen $\pm v_0$ ist stark vereinfacht; die Maxwell-Verteilung (14.1.2) liefert dasselbe Ergebnis, weil nur $\langle v^2\rangle$ eingeht.`,
    derivation: R`<ol class="fc-steps">
<li>$\Delta n = \dfrac12\cdot\dfrac{\nu N_A}V\cdot A\,v_0\,\Delta t$<em>Halbe Teilchendichte (nur die zur Wand fliegenden) mal Volumen des Zylinders $A\cdot v_0\Delta t$ (14.2).</em></li>
<li>$\Delta K_x = \Delta n\cdot2mv_0$<em>Jedes Molekül kehrt $v_x$ um (14.6).</em></li>
<li>$F_x = \dfrac{\Delta K_x}{\Delta t} = \dfrac{\nu N_A}VAmv_0^2$<em>Kraft = Impulsübertrag pro Zeit (14.7).</em></li>
<li>$v_0^2 = \tfrac13v^2\Rightarrow p = \dfrac{\nu N_Am}{3V}v^2$<em>Aus (14.1); Druck = Kraft pro Fläche (14.8).</em></li>
<li>$pV = \tfrac23N\cdot\tfrac12m\langle v^2\rangle = NkT\Rightarrow\tfrac12m\langle v^2\rangle = \tfrac32kT$<em>Vergleich mit der Zustandsgleichung (14.9).</em></li>
</ol>`,
    example: R`<b>Luft</b> bei $0\,^\circ\text{C}$: $\rho = 1{,}29\,\text{kg/m}^3$, $\sqrt{\langle v^2\rangle} = 487\,\text{m/s}$: $p = \tfrac13\cdot1{,}29\cdot487^2\,\text{Pa} = 1{,}02\cdot10^5\,\text{Pa}$ ✓.<br>
Mittlere kinetische Energie bei $300\,\text{K}$: $\tfrac32kT = 6{,}2\cdot10^{-21}\,\text{J}\approx0{,}039\,\text{eV}$, für jedes Gas.`,
    counterexample: R`<b>Reale Wandstossrate:</b> Das Modell mit festen $\pm v_0$ liefert $j = \frac{n}{2}v_0 = \frac{n\,v}{2\sqrt3}\approx0{,}29\,nv$. Mit der Maxwell-Verteilung ist die Rate exakt $j = \tfrac14n\langle v\rangle$. Für den Druck stimmt das einfache Modell trotzdem, weil dort nur $\langle v_x^2\rangle = \tfrac13\langle v^2\rangle$ eingeht – nicht jede Grösse ist modellunabhängig.`,
    pitfalls: R`<ul><li>Den Faktor $\tfrac12$ (nur die zur Wand fliegenden Moleküle) vergessen.</li>
<li>Impulsübertrag $mv_0$ statt $2mv_0$ ansetzen.</li>
<li>$\tfrac32kT$ für mehratomige Moleküle als gesamte (statt nur translatorische) Energie verwenden.</li></ul>`
  },
  {
    id: "ph14_maxwell_ansatz",
    title: "Maxwell-Verteilung: Faktorisierungsansatz und Breite σ² = kT/m",
    category: "14.1 Statistische Mechanik",
    type: "herleitung",
    front: R`Begründe den Ansatz $\frac{d^3\mathcal W}{d\xi\,d\eta\,d\zeta} = f(\xi)f(\eta)f(\zeta) = F(\xi^2+\eta^2+\zeta^2)$ für die Geschwindigkeitsverteilung. Warum führt er auf eine Gaussverteilung, und wie folgt deren Breite $\sigma^2 = kT/m$ aus dem Äquipartitionsgesetz?`,
    back: R`Komponenten $\vec v = (\xi,\eta,\zeta)$ (14.10). Gesucht: Wahrscheinlichkeitsdichte $\frac{d^3\mathcal W}{d\xi\,d\eta\,d\zeta}$ (Einheit $\text{s}^3/\text{m}^3$; erst mal ein Volumen im Geschwindigkeitsraum ergibt eine Wahrscheinlichkeit; Integral über alles = 1) (14.11, 14.12).<br>
<b>Ansatz</b> (14.13): Faktorisierung wegen der Unabhängigkeit der Komponenten, gleiche $f$ wegen Isotropie, und nur Abhängigkeit vom Betrag $v^2$ (keine Vorzugsrichtung). Erfüllt durch die Gaussverteilung:
$$f(\xi) = \frac1{\sigma\sqrt{2\pi}}e^{-\xi^2/(2\sigma^2)},\quad\int f\,d\xi = 1,\qquad\frac{d^3\mathcal W}{d\xi\,d\eta\,d\zeta} = \frac1{\sigma^3(2\pi)^{3/2}}e^{-v^2/(2\sigma^2)}\qquad(14.14\text{–}14.17)$$
<b>Breite</b> aus der Energie pro Freiheitsgrad:
$$\langle E_\text{kin}\rangle_{f = 1} = \frac m2\int\xi^2f(\xi)\,d\xi = \frac m2\sigma^2 = \frac12kT\;\Rightarrow\;\sigma^2 = \frac{kT}m\qquad(14.19\text{–}14.23)$$
mit partieller Integration $\int\xi^2f\,d\xi = -\sigma^2\int\xi\,df = \sigma^2$ (14.22).`,
    meta: "Skript: Abschnitt 14.1.2.1, Gl. (14.10)–(14.23), Anhang S. 63–65",
    explanation: R`<b>Intuition:</b> Jede Geschwindigkeitskomponente ist das Ergebnis unzähliger zufälliger Stösse – ein Paradebeispiel für eine Glockenkurve. Die Breite der Glocke wächst mit der Temperatur und sinkt mit der Masse: Heisse, leichte Moleküle sind „unruhiger“.<br><br>
<b>Warum genau Gauss?</b> $f(\xi)f(\eta)f(\zeta) = F(\xi^2+\eta^2+\zeta^2)$ verlangt, dass $\ln f$ eine Funktion von $\xi^2$ ist, die sich bei Summen additiv verhält: $\ln f = a-b\xi^2$. Das ist (mit Normierung) genau die Gaussfunktion – die einzige stetige Lösung.<br><br>
<b>Abhängigkeiten:</b> $\sigma = \sqrt{kT/m}$: Vierfache Temperatur ergibt doppelte Breite; Wasserstoff ($m$ klein) hat bei gleicher Temperatur eine viel breitere Verteilung als Chlor.<br><br>
<b>Zusammenhang:</b> $e^{-mv^2/(2kT)} = e^{-E_\text{kin}/(kT)}$ ist ein Boltzmann-Faktor. Allgemein ist die Wahrscheinlichkeit eines Zustands der Energie $E$ proportional zu $e^{-E/(kT)}$ – Grundlage der statistischen Physik (barometrische Höhenformel, Besetzung von Energieniveaus).`,
    derivation: R`Partielle Integration für $\langle\xi^2\rangle$:
<ol class="fc-steps">
<li>$df = -\dfrac1{\sigma^2}\xi f(\xi)\,d\xi$<em>Ableitung der Gaussfunktion.</em></li>
<li>$\displaystyle\int\xi^2f\,d\xi = \int\xi\cdot(\xi f\,d\xi) = -\sigma^2\int\xi\,df$<em>Einen Faktor $\xi f\,d\xi$ durch $-\sigma^2df$ ersetzen (14.22).</em></li>
<li>$= -\sigma^2\left[\xi f\right]_{-\infty}^{\infty}+\sigma^2\displaystyle\int f\,d\xi$<em>Partielle Integration.</em></li>
<li>$= 0+\sigma^2\cdot1$<em>Randterm null (Gauss fällt schneller als $\xi$ wächst), Normierung (14.15).</em></li>
<li>$\dfrac m2\sigma^2 = \dfrac12kT\Rightarrow\sigma^2 = \dfrac{kT}m$<em>Äquipartition für einen Freiheitsgrad (14.20–14.23).</em></li>
</ol>`,
    example: R`N₂ bei $300\,\text{K}$ ($m = 4{,}65\cdot10^{-26}\,\text{kg}$): $\sigma = \sqrt{kT/m} = 298\,\text{m/s}$ für jede Komponente. Etwa $68\,\%$ der Moleküle haben $|v_x|\lt298\,\text{m/s}$, $95\,\%$ haben $|v_x|\lt596\,\text{m/s}$.`,
    counterexample: R`<b>„Alle Moleküle haben die gleiche Geschwindigkeit“</b> (Modell aus 14.1.1) ist mit dem Ansatz unverträglich: Feste Komponenten $\pm v_0$ sind nicht isotrop (Vorzugsrichtungen entlang der Würfelachsen) und keine stetige Verteilung. Und eine Gleichverteilung der Komponenten auf $[-a,a]$ würde nicht nur von $v^2$ abhängen. Nur die Gaussverteilung erfüllt Unabhängigkeit <i>und</i> Isotropie.`,
    pitfalls: R`<ul><li>Die Dichte $\frac{d^3\mathcal W}{d\xi\,d\eta\,d\zeta}$ mit einer Wahrscheinlichkeit verwechseln (sie hat eine Einheit).</li>
<li>$\sigma^2 = 3kT/m$ setzen (das ist $\langle v^2\rangle$, nicht die Varianz einer Komponente).</li>
<li>Die Normierung der Gaussfunktion vergessen.</li></ul>`
  },
  {
    id: "ph14_maxwell_betrag",
    title: "Maxwell’sche Geschwindigkeitsverteilung des Betrags dW/dv ∝ v² e^{−mv²/2kT}",
    category: "14.1 Statistische Mechanik",
    type: "herleitung",
    front: R`Leite aus der dreidimensionalen Verteilung die Verteilung des <b>Geschwindigkeitsbetrags</b> $\frac{d\mathcal W}{dv}$ her. Woher kommt der Faktor $4\pi v^2$, und wie ändert sich die Verteilung mit der Temperatur und mit der Molekülmasse?`,
    back: R`Wahrscheinlichkeit, dass $|\vec v|$ zwischen $v$ und $v+dv$ liegt: Integral über die Kugelschale (K) mit Radius $v$ und Dicke $dv$ im Geschwindigkeitsraum:
$$d\mathcal W(v) = \left(\frac m{2\pi kT}\right)^{3/2}\iiint_Ke^{-m(\xi^2+\eta^2+\zeta^2)/(2kT)}\,d\xi\,d\eta\,d\zeta\qquad(14.24)$$
Kugelkoordinaten: $d\xi\,d\eta\,d\zeta = v^2\,dv\,d\varphi\,d\cos\vartheta$ (14.25):
$$d\mathcal W(v) = \left(\frac m{2\pi kT}\right)^{3/2}e^{-\frac{mv^2}{2kT}}v^2dv\int_{-1}^1d\cos\vartheta\int_0^{2\pi}d\varphi = \left(\frac m{2\pi kT}\right)^{3/2}e^{-\frac{mv^2}{2kT}}v^2dv\cdot2\cdot2\pi\qquad(14.26,\,14.27)$$
$$\frac{d\mathcal W}{dv} = 4\pi v^2\left(\frac m{2\pi kT}\right)^{3/2}e^{-\frac{mv^2}{2kT}}\qquad(14.28)$$
Höhere Temperatur: breiter, Maximum nach rechts und tiefer (Abb. 14.2, N₂ bei 100, 300, 1000 K). Leichtere Gase (bei gleicher $T$): breiter und schneller (Abb. 14.3: Cl₂, N₂, Ne, He, H₂ bei 300 K).`,
    meta: "Skript: Abschnitt 14.1.2.1, Gl. (14.24)–(14.28), Abb. 14.2–14.3, Anhang S. 65–67",
    explanation: R`<b>Intuition:</b> Die wahrscheinlichste <i>Geschwindigkeitskomponente</i> ist null (Gauss um 0), aber der wahrscheinlichste <i>Betrag</i> ist nicht null: Es gibt nur einen Punkt mit $\vec v = \vec 0$, aber eine ganze Kugelschale mit Fläche $4\pi v^2$ für jeden Betrag $v$. Der Faktor $v^2$ (mehr Möglichkeiten) kämpft gegen den Boltzmann-Faktor (weniger wahrscheinlich bei hoher Energie); dazwischen liegt ein Maximum.<br><br>
<b>Abhängigkeiten:</b> Alle charakteristischen Geschwindigkeiten skalieren mit $\sqrt{T/m}$. Die Verteilung ist asymmetrisch mit einem langen Ausläufer zu hohen Geschwindigkeiten.<br><br>
<b>Bedeutung des Ausläufers:</b> Wenige sehr schnelle Moleküle bestimmen Verdunstung, chemische Reaktionsraten (Arrhenius) und das Entweichen leichter Gase aus Planetenatmosphären (H₂ und He entweichen von der Erde, schwerere Gase nicht).<br><br>
<b>Zusammenhang:</b> Jacobi-Faktor $v^2$ der Kugelkoordinaten (11.2.8); gleiche Idee wie bei Zustandsdichten in der Festkörperphysik.`,
    derivation: R`<ol class="fc-steps">
<li>$\dfrac{d^3\mathcal W}{d\xi\,d\eta\,d\zeta} = \left(\dfrac m{2\pi kT}\right)^{3/2}e^{-mv^2/(2kT)}$<em>(14.17) mit $\sigma^2 = kT/m$: $\frac1{\sigma^3(2\pi)^{3/2}} = \left(\frac m{2\pi kT}\right)^{3/2}$.</em></li>
<li>$d\xi\,d\eta\,d\zeta = v^2\,dv\,d\varphi\,d\cos\vartheta$<em>Volumenelement in Kugelkoordinaten (14.25).</em></li>
<li>Integrand hängt nicht von $\vartheta$, $\varphi$ ab<em>Isotropie: Die Winkelintegrale sind trivial.</em></li>
<li>$\displaystyle\int_{-1}^1d\cos\vartheta\int_0^{2\pi}d\varphi = 4\pi$<em>Volle Raumwinkel (14.27).</em></li>
<li>$\dfrac{d\mathcal W}{dv} = 4\pi v^2\left(\dfrac m{2\pi kT}\right)^{3/2}e^{-mv^2/(2kT)}$<em>(14.28); normiert: $\int_0^\infty\frac{d\mathcal W}{dv}dv = 1$.</em></li>
</ol>`,
    example: R`N₂ bei $300\,\text{K}$: wahrscheinlichster Betrag $422\,\text{m/s}$; bei $1000\,\text{K}$: $771\,\text{m/s}$ ($\times\sqrt{10/3}$).<br>
H₂ bei $300\,\text{K}$: $\sqrt{\langle v^2\rangle} = 1930\,\text{m/s}$ – nur ein Sechstel der Fluchtgeschwindigkeit ($11{,}2\,\text{km/s}$), aber der Ausläufer reicht über geologische Zeiten, damit Wasserstoff aus der Hochatmosphäre entweicht.`,
    counterexample: R`<b>Den Faktor $v^2$ vergessen:</b> Dann wäre die Betragsverteilung eine halbe Gausskurve mit Maximum bei $v = 0$ – als wären die meisten Moleküle in Ruhe. Das widerspricht $\tfrac12m\langle v^2\rangle = \tfrac32kT$ und den Messungen (Abb. 14.4). Die Verteilung einer Komponente und die Verteilung des Betrags sind verschiedene Funktionen.`,
    pitfalls: R`<ul><li>Komponenten- und Betragsverteilung verwechseln.</li>
<li>Den Jacobi-Faktor $v^2$ oder den Raumwinkel $4\pi$ vergessen.</li>
<li>Die Masse eines Moleküls ($m$) mit der molaren Masse ($M$) mischen ($k$ gehört zu $m$, $R$ zu $M$).</li></ul>`
  },
  {
    id: "ph14_erwartungswerte",
    title: "Charakteristische Geschwindigkeiten: v_h, ⟨v⟩, √⟨v²⟩ und Schallgeschwindigkeit",
    category: "14.1 Statistische Mechanik",
    type: "gesetz",
    front: R`Gib die <b>wahrscheinlichste</b> Geschwindigkeit $v_h$, den <b>Mittelwert</b> $\langle v\rangle$ und die <b>Wurzel aus dem mittleren Geschwindigkeitsquadrat</b> der Maxwell-Verteilung an. Wie verhalten sie sich zueinander und zur Schallgeschwindigkeit? Warum ist $\langle\vec v\rangle = \vec 0$?`,
    back: R`$$v_h = \sqrt{\frac{2kT}m}\qquad(14.29)$$
(aus $\frac{d}{dv}\frac{d\mathcal W}{dv} = 0$).
$$\langle\vec v\rangle = \vec 0,\quad\langle v\rangle = \int_0^\infty v\,d\mathcal W = \sqrt{\frac{8kT}{\pi m}},\quad\langle v^2\rangle = \int_0^\infty v^2d\mathcal W = \frac{3kT}m,\quad\langle\xi^2\rangle = \langle\eta^2\rangle = \langle\zeta^2\rangle = \tfrac13\langle v^2\rangle = \frac{kT}m\qquad(14.30)$$
Schallgeschwindigkeit (ohne Beweis):
$$v_S = \sqrt{\kappa\frac{RT}M} = \sqrt{\kappa\frac{kT}m}\qquad(14.31)$$
Luft ($M\approx28{,}8\,\text{kg/kmol}$, $\kappa = 1{,}4$, $T = 273\,\text{K}$):
$$v_S = 332,\quad v_h = 397,\quad\langle v\rangle = 448,\quad\sqrt{\langle v^2\rangle} = 487\ \text{m/s}\qquad(14.32)$$
Ordnung: $v_S\lt v_h\lt\langle v\rangle\lt\sqrt{\langle v^2\rangle}$, Verhältnisse $\sqrt\kappa:\sqrt2:\sqrt{8/\pi}:\sqrt3$.`,
    meta: "Skript: Abschnitt 14.1.2.2, Gl. (14.29)–(14.32), Fussnote 6, Anhang S. 66–68",
    explanation: R`<b>Intuition:</b> Wegen des langen Ausläufers zu hohen Geschwindigkeiten liegen die Mittelwerte rechts vom Maximum: Ein paar sehr schnelle Moleküle ziehen den Mittelwert hoch, und beim Quadrieren werden sie noch stärker gewichtet.<br><br>
<b>Vektor vs. Betrag:</b> Der mittlere Geschwindigkeits<i>vektor</i> ist null (das Gas als Ganzes ruht), der mittlere Betrag nicht.<br><br>
<b>Abhängigkeiten:</b> Alle $\propto\sqrt{T/m}$. Vervierfachen der Temperatur verdoppelt jede charakteristische Geschwindigkeit; Helium ist bei gleicher Temperatur $\sqrt{28/4} = 2{,}6$-mal schneller als Stickstoff.<br><br>
<b>Schall:</b> Schall wird durch Molekülbewegung übertragen und ist deshalb von derselben Grössenordnung, aber etwas langsamer als die Moleküle selbst ($\sqrt\kappa\lt\sqrt2$).<br><br>
<b>Zusammenhang (Fussnote 6):</b> Der Mittelwert allein sagt wenig; erst die Verteilung enthält die volle Information – wie beim Einkommen in einer Gemeinde.`,
    derivation: R`Wahrscheinlichste Geschwindigkeit:
<ol class="fc-steps">
<li>$\dfrac{d\mathcal W}{dv}\propto v^2e^{-mv^2/(2kT)}$<em>Vorfaktoren spielen für die Lage des Maximums keine Rolle.</em></li>
<li>$\dfrac{d}{dv}\left(v^2e^{-av^2}\right) = (2v-2av^3)e^{-av^2}$, $a = \dfrac m{2kT}$<em>Produktregel.</em></li>
<li>$2v(1-av^2) = 0\Rightarrow v_h^2 = \dfrac1a = \dfrac{2kT}m$<em>Nichttriviale Nullstelle (14.29).</em></li>
<li>$\langle v^2\rangle = 3\langle\xi^2\rangle = 3\sigma^2 = \dfrac{3kT}m$<em>Drei unabhängige Komponenten mit Varianz $\sigma^2$ (14.30).</em></li>
<li>$\dfrac{\sqrt{\langle v^2\rangle}}{v_h} = \sqrt{\tfrac32} = 1{,}22$, $\dfrac{\langle v\rangle}{v_h} = \dfrac2{\sqrt\pi} = 1{,}13$<em>Feste Verhältnisse, unabhängig von Gas und Temperatur.</em></li>
</ol>`,
    example: R`N₂ bei $300\,\text{K}$: $v_h = 422$, $\langle v\rangle = 476$, $\sqrt{\langle v^2\rangle} = 517\,\text{m/s}$.<br>
Teilchendichte bei $1\,\text{bar}$, $300\,\text{K}$: $n = p/(kT) = 2{,}4\cdot10^{25}\,\text{m}^{-3}$; Wandstossrate $\tfrac14n\langle v\rangle = 2{,}9\cdot10^{27}\,\text{m}^{-2}\text{s}^{-1}$ – eine Oberfläche (etwa $10^{19}$ Plätze pro m²) wird so alle paar Nanosekunden von einer ganzen Monolage Moleküle getroffen – deshalb braucht man für saubere Oberflächen Ultrahochvakuum.`,
    counterexample: R`<b>$\langle v\rangle^2\neq\langle v^2\rangle$:</b> $\langle v\rangle^2 = \frac{8}{\pi}\frac{kT}m = 2{,}55\frac{kT}m$, aber $\langle v^2\rangle = 3\frac{kT}m$. Wer die kinetische Energie mit $\tfrac12m\langle v\rangle^2$ berechnet, unterschätzt sie um 15 %. Der Mittelwert eines Quadrats ist nicht das Quadrat des Mittelwerts.`,
    pitfalls: R`<ul><li>$v_h$, $\langle v\rangle$ und $\sqrt{\langle v^2\rangle}$ verwechseln.</li>
<li>$\langle\vec v\rangle = \vec 0$ mit $\langle v\rangle = 0$ verwechseln.</li>
<li>$M$ in kg/kmol mit $R = 8{,}314\,\text{J/(mol K)}$ kombinieren (Faktor 1000).</li></ul>`
  },
  {
    id: "ph14_messung_maxwell",
    title: "Messung der Maxwell-Verteilung mit Atomofen und Schlitzrädern",
    category: "14.1 Statistische Mechanik",
    type: "experiment",
    front: R`Wie misst man die Maxwell’sche Geschwindigkeitsverteilung mit einem <b>Atomofen</b> und zwei rotierenden <b>Schlitzrädern</b>? Welche Geschwindigkeiten werden durchgelassen, wie verbessert man die Auflösung, und woher kommt die Mehrdeutigkeit?`,
    back: R`Aufbau im Vakuum (Abb. 14.4): Gas im Ofen bei konstanter Temperatur; einzelne Moleküle entweichen durch eine kleine Öffnung. Zwei Schlitzräder $R_1$, $R_2$ auf gemeinsamer Achse im Abstand $\ell$, dahinter ein Teilchendetektor $D$.<br>
$R_1$ „zerhackt“ den Strahl und legt den Startzeitpunkt fest. Moleküle mit Geschwindigkeit $v$ passieren $R_2$ nur, wenn ihre Flugzeit gerade eine Lücke weiterdreht:
$$\Delta t = \frac\ell v = N\frac\alpha\omega,\qquad N = 1,2,\dots\qquad(14.33)$$
($\alpha$: Winkelabstand benachbarter Lücken, $\omega$: Winkelgeschwindigkeit.)
<ul><li>Variation von $\omega$ wählt verschiedene Geschwindigkeiten aus; man misst zu jedem $v$ die Zählrate.</li>
<li>Höheres $\omega$ verkleinert die Breite des durchgelassenen Geschwindigkeitsbereichs.</li>
<li>Weitere Schlitzräder reduzieren bzw. eliminieren die Mehrdeutigkeit $N = 1,2,3,\dots$</li></ul>`,
    meta: "Skript: Abschnitt 14.1.2.3, Gl. (14.33), Abb. 14.4, Anhang S. 68–69",
    explanation: R`<b>Intuition:</b> Wie eine „grüne Welle“ im Strassenverkehr: Nur wer genau mit der richtigen Geschwindigkeit fährt, kommt bei beiden Ampeln bei Grün an. Die Drehzahl der Räder stellt die Geschwindigkeit der grünen Welle ein.<br><br>
<b>Mehrdeutigkeit:</b> Auch Moleküle, die doppelt so lange brauchen ($N = 2$), treffen auf eine (die übernächste) Lücke. Ein drittes Rad mit anderem Abstand blockiert diese „Nebenwellen“.<br><br>
<b>Abhängigkeiten:</b> $v = \frac{\ell\omega}{N\alpha}$: Durchgelassene Geschwindigkeit $\propto\omega$ und $\propto\ell$. Die Auflösung $\Delta v/v$ hängt von der Lückenbreite relativ zu $\alpha$ ab.<br><br>
<b>Achtung bei der Auswertung (Ergänzung):</b> Aus einer kleinen Ofenöffnung treten schnelle Moleküle häufiger aus (sie treffen öfter auf die Öffnung): Die Strahlverteilung ist $\propto v^3e^{-mv^2/(2kT)}$, nicht $\propto v^2e^{\dots}$. Das muss man beim Vergleich mit (14.28) berücksichtigen.<br><br>
<b>Zusammenhang:</b> Dasselbe Prinzip nutzen Neutronen-Chopper und Flugzeitspektrometer; historisch bestätigten Stern (1920) und Miller–Kusch (1955) so die Maxwell-Verteilung.`,
    derivation: R`Durchgelassene Geschwindigkeiten für ein konkretes Gerät ($\ell = 0{,}1\,\text{m}$, 100 Lücken, $50\,\text{U/s}$):
<ol class="fc-steps">
<li>$\alpha = \dfrac{2\pi}{100}$, $\omega = 2\pi\cdot50\,\text{s}^{-1}$<em>Lückenabstand und Winkelgeschwindigkeit.</em></li>
<li>$\dfrac\alpha\omega = \dfrac1{5000}\,\text{s} = 0{,}2\,\text{ms}$<em>Zeit, bis die nächste Lücke an derselben Stelle steht.</em></li>
<li>$v_N = \dfrac{\ell}{N\alpha/\omega} = \dfrac{500\,\text{m/s}}N$<em>Bedingung (14.33) nach $v$ aufgelöst.</em></li>
<li>$N = 1$: $500\,\text{m/s}$, $N = 2$: $250\,\text{m/s}$, $N = 3$: $167\,\text{m/s}$<em>Mehrdeutigkeit, die ein drittes Rad beseitigen muss.</em></li>
<li>Drehzahl verdoppeln: $v_1 = 1000\,\text{m/s}$<em>So fährt man die Verteilung ab.</em></li>
</ol>`,
    example: R`Für N₂ bei $300\,\text{K}$ liegt das Maximum der Verteilung bei $422\,\text{m/s}$; mit obigem Gerät ($v_1 = 500\,\text{m/s}$ bei $50\,\text{U/s}$) entspräche das etwa $42\,\text{U/s}$.<br>
Für Kalium-Atome aus einem Ofen bei $500\,\text{K}$ ($m = 39\,\text{u}$): $v_h = \sqrt{2kT/m} = 460\,\text{m/s}$.`,
    counterexample: R`<b>Ein einziges Schlitzrad</b> genügt nicht: Es zerhackt den Strahl zwar in Pakete, aber ohne zweite Blende (oder Flugzeitmessung) weiss man nicht, wie schnell die Moleküle waren. Die Geschwindigkeitsauswahl entsteht erst durch die Kombination aus Startzeit ($R_1$) und Ankunftsfenster ($R_2$).`,
    pitfalls: R`<ul><li>Die Mehrdeutigkeit ($N\gt1$) übersehen.</li>
<li>Die gemessene Strahlverteilung direkt mit der Volumenverteilung (14.28) gleichsetzen.</li>
<li>Drehfrequenz (U/s) und Winkelgeschwindigkeit (rad/s) verwechseln.</li></ul>`
  }
];
})();
