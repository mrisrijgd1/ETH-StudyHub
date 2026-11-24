/* ==========================================================================
   PHYSIK I – KAPITEL 10: Wärmelehre und Thermodynamik
   Temperatur, Gasthermometer, Kelvin-Skala, Wärmekapazität, Dulong-Petit,
   0. und 1. Hauptsatz, ideales Gas, Cp − Cv, Äquipartition,
   Zustandsänderungen, Rüchardt, 2. Hauptsatz, Kreisprozesse, Carnot,
   Wärmepumpe, Entropie, van der Waals, Dampfdruck, Clausius-Clapeyron,
   Hygrometrie, Enthalpie, Joule-Thomson, 3. Hauptsatz
   Skript Physik I – Prof. K. Ensslin, ETH Zürich, HS 2025
   Vorzeichenkonvention wie im Skript: ↙ = dem System zugeführt,
   ↗ = vom System abgegeben.
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_KAPITEL_10 = [
  // ========================================================================
  // 10.1–10.2 TEMPERATUR, GASTHERMOMETER, KELVIN-SKALA
  // ========================================================================
  {
    id: "ph10_druck_gay_lussac",
    title: "Thermometrische Eigenschaften, Druck und Gesetz von Gay-Lussac",
    category: "10.1 Die Temperatur und das Gasthermometer",
    type: "gesetz",
    front: R`Was ist eine <b>thermometrische Eigenschaft</b>? Wie ist der <b>Druck</b> definiert, und welche Einheiten sind gebräuchlich? Was sagen die <b>Gesetze von Gay-Lussac</b> über ein Gas bei konstantem Druck bzw. konstantem Volumen aus?`,
    back: R`<b>Thermometrische Eigenschaft:</b> eine messbare Grösse, die sich mit der Temperatur ändert und nach Kalibration die Temperatur liefert: thermische Ausdehnung (Quecksilber), elektrischer Widerstand von Metallen, Volumen eines Gases bei konstantem Druck, Druck eines Gases bei konstantem Volumen.<br><br>
<b>Druck</b> (Gasthermometer, Abb. 10.1: Quecksilbersäule mit $F = mg = \rho A\ell g$, 10.1):
$$p = \frac FA,\qquad[p] = 1\,\text{Pa} = 1\,\text{N/m}^2\qquad(10.2,\,10.3)$$
$F$: Normalkomponente der Kraft. $1\,\text{atm} = 1{,}01325\cdot10^5\,\text{Pa}$, $1\,\text{bar} = 10^5\,\text{Pa}$ (10.4, 10.5).<br><br>
<b>Gay-Lussac</b> (für alle Gase bei niedriger Dichte, unabhängig von der Zusammensetzung):
$$V = C_1T\quad(p = \text{konst.}),\qquad p = C_2T\quad(V = \text{konst.})\qquad(10.6,\,10.7)$$`,
    meta: "Skript: Abschnitte 10.1–10.1.2, Gl. (10.1)–(10.7), Abb. 10.1–10.2, S. 279–281",
    explanation: R`<b>Intuition:</b> Temperatur selbst kann man nicht direkt „sehen“; man misst etwas anderes, das sich zuverlässig mit ihr ändert. Gase sind dafür ideal, weil sich alle Gase bei geringer Dichte gleich verhalten, unabhängig von ihrer Chemie.<br><br>
<b>Mikroskopisch:</b> Der Druck eines Gases entsteht durch die Stösse der Moleküle auf die Wand. Wärmer heisst schnellere Moleküle, also mehr und härtere Stösse: höherer Druck (bei festem Volumen) oder grösseres Volumen (bei festem Druck).<br><br>
<b>Abhängigkeiten:</b> $V\propto T$ und $p\propto T$ gelten nur mit der <i>absoluten</i> Temperatur $T$ (Kelvin). In Celsius wären es affine Beziehungen mit Achsenabschnitt.<br><br>
<b>Zusammenhang:</b> Zusammen mit Boyle-Mariotte ($pV = $ konst. bei festem $T$) ergeben die Gay-Lussac-Gesetze die ideale Gasgleichung $pV = NkT$ (10.6.1). Demonstration: Ein Luftballon auf flüssigem Stickstoff schrumpft stark (Abb. 10.2).`,
    derivation: R`Druck einer Flüssigkeitssäule (Prinzip des Gasthermometers mit konstantem Druck):
<ol class="fc-steps">
<li>$F = mg = \rho V_\text{Hg}g = \rho A\ell g$<em>Gewicht der Quecksilbersäule der Länge $\ell$ und Querschnitt $A$ (10.1).</em></li>
<li>$p_\text{Hg} = \dfrac FA = \rho g\ell$<em>Druck = Kraft pro Fläche (10.2); unabhängig vom Querschnitt.</em></li>
<li>$p_\text{Gas} = p_\text{Hg}$ (über der Säule Vakuum)<em>Gleichgewicht am Quecksilberpfropfen: Das Gas steht unter konstantem Druck.</em></li>
<li>$V = Ah = C_1T\Rightarrow h\propto T$<em>Gay-Lussac: Die Höhe $h$ der Gassäule zeigt die Temperatur an.</em></li>
</ol>`,
    example: R`<b>Quecksilbersäule</b> $\ell = 76\,\text{cm}$: $p = 13\,600\cdot9{,}81\cdot0{,}76\,\text{Pa} = 1{,}01\cdot10^5\,\text{Pa}$, genau $1\,\text{atm}$ (darum „760 mm Hg“).<br>
<b>Ballon</b> von $20\,^\circ\text{C}$ ($293\,\text{K}$) in flüssigem Stickstoff ($77\,\text{K}$) bei konstantem Druck: $V_2/V_1 = 77/293 = 0{,}26$, also schrumpft er auf ein Viertel (real noch mehr, weil Teile der Luft kondensieren).`,
    counterexample: R`<b>Quecksilberthermometer und Gasthermometer stimmen nicht überall überein:</b> Kalibriert man beide bei $0$ und $100\,^\circ\text{C}$, zeigen sie dazwischen leicht verschiedene Werte, weil die Ausdehnung von Quecksilber nicht exakt linear in $T$ ist. Nur das Gasthermometer (bei geringer Dichte) liefert eine stoffunabhängige Skala.`,
    pitfalls: R`<ul><li>Gay-Lussac mit Celsius-Temperaturen verwenden.</li>
<li>Die Gesetze bei hoher Dichte oder nahe der Verflüssigung anwenden.</li>
<li>bar und atm gleichsetzen (Unterschied 1,3 %).</li></ul>`
  },
  {
    id: "ph10_kelvin_skala",
    title: "Absoluter Nullpunkt und Kelvin-Skala (Tripelpunkt 273,16 K)",
    category: "10.2 Die absolute Temperatur und die Kelvin-Skala",
    type: "definition",
    front: R`Wie folgt aus dem Gasthermometer die Existenz eines <b>absoluten Nullpunkts</b>? Wie ist die <b>Kelvin-Skala</b> über den Tripelpunkt des Wassers definiert, und wie misst man damit eine Temperatur?`,
    back: R`<b>Celsius über Fixpunkte</b> (konstanter Druck, $T\propto h$, 10.8, 10.9):
$$T(h) = \frac{h-h_0}{h_{100}-h_0}\cdot100^\circ\qquad(10.10)$$
<b>Absoluter Nullpunkt:</b> Misst man $p(T)$ eines Gases bei konstantem Volumen (Eiswasser, kochendes Wasser, flüssiger Stickstoff $77\,\text{K}$) und extrapoliert, wird $p = 0$ bei $-273\,^\circ\text{C}$ (Abb. 10.3). Darunter wäre der Druck negativ: Es gibt eine minimale Temperatur.<br><br>
<b>Kelvin-Skala:</b> Fixpunkt ist der <b>Tripelpunkt des Wassers</b> (Dampf, Wasser und Eis im Gleichgewicht; eindeutiger Druck $610{,}7\,\text{Pa}$):
$$T_3 = 273{,}16\,\text{K} = 0{,}01\,^\circ\text{C}\qquad(10.11)$$
Nullpunkt der Skala = absoluter Nullpunkt; $T\lt0\,\text{K}$ ist unmöglich. Messung mit dem Gasthermometer bei konstantem Volumen:
$$T = \frac{273{,}16\,\text{K}}{p_3}\,p\qquad(10.12)$$
Bei geringer Dichte unabhängig von der Gasart.`,
    meta: "Skript: Abschnitte 10.2–10.2.1, Gl. (10.8)–(10.12), Abb. 10.3, S. 282–284",
    explanation: R`<b>Intuition:</b> Wenn der Gasdruck proportional zur thermischen Bewegung der Moleküle ist, dann ist „Druck null“ der Zustand, in dem die Moleküle (klassisch) ruhen. Kälter geht nicht.<br><br>
<b>Warum der Tripelpunkt?</b> Der Gefrierpunkt hängt vom Druck ab, der Tripelpunkt nicht: Er existiert nur bei genau einem Druck und einer Temperatur. Deshalb ist er ein reproduzierbarer Fixpunkt (zugeschmolzene Tripelpunktzelle).<br><br>
<b>Abhängigkeiten:</b> Eine Kelvin-Stufe ist gleich gross wie eine Celsius-Stufe: $T/\text{K} = \vartheta/^\circ\text{C}+273{,}15$. Temperatur*differenzen* sind in beiden Skalen gleich.<br><br>
<b>Hinweis:</b> Seit 2019 ist das Kelvin im SI über einen festen Wert der Boltzmann-Konstante $k = 1{,}380649\cdot10^{-23}\,\text{J/K}$ definiert; der Tripelpunkt liegt dann nur noch sehr genau (nicht per Definition) bei $273{,}16\,\text{K}$.<br><br>
<b>Zusammenhang:</b> Thermodynamisch ist die absolute Temperatur auch über den Carnot-Wirkungsgrad $\eta = 1-T_k/T_w$ definiert (10.7.2) – unabhängig von jeder Substanz.`,
    derivation: R`Extrapolation auf den absoluten Nullpunkt:
<ol class="fc-steps">
<li>$p(\vartheta) = p_0\left(1+\beta\vartheta\right)$<em>Messung bei konstantem Volumen: linear in der Celsius-Temperatur $\vartheta$.</em></li>
<li>$\beta\approx\dfrac1{273{,}15\,^\circ\text{C}}$<em>Steigung aus den Messpunkten; für alle verdünnten Gase gleich.</em></li>
<li>$p = 0\Leftrightarrow\vartheta = -\dfrac1\beta = -273{,}15\,^\circ\text{C}$<em>Schnittpunkt mit der Temperaturachse (Abb. 10.3).</em></li>
<li>$T := \vartheta+273{,}15\Rightarrow p = p_0\beta T\propto T$<em>Mit verschobenem Nullpunkt wird die Beziehung proportional (10.7).</em></li>
<li>$\dfrac{T}{T_3} = \dfrac{p}{p_3}$<em>Ein Fixpunkt genügt; daraus (10.12).</em></li>
</ol>`,
    example: R`Gasthermometer: $p_3 = 50{,}0\,\text{kPa}$ am Tripelpunkt, im siedenden Wasser $p = 68{,}3\,\text{kPa}$: $T = 273{,}16\cdot68{,}3/50{,}0\,\text{K} = 373{,}1\,\text{K}$.<br>
Flüssiger Stickstoff: $77\,\text{K} = -196\,^\circ\text{C}$; Zimmertemperatur $20\,^\circ\text{C} = 293{,}15\,\text{K}$.`,
    counterexample: R`<b>„Doppelt so warm“ in Celsius:</b> $20\,^\circ\text{C}$ ist nicht doppelt so warm wie $10\,^\circ\text{C}$; das Verhältnis der absoluten Temperaturen ist $293/283 = 1{,}035$. Verhältnisse von Temperaturen (Gasgesetze, Wirkungsgrade) ergeben nur in Kelvin Sinn.`,
    pitfalls: R`<ul><li>Tripelpunkt ($0{,}01\,^\circ\text{C}$) und Gefrierpunkt bei Normaldruck ($0\,^\circ\text{C}$) verwechseln.</li>
<li>In Formeln mit $T$ Celsius-Werte einsetzen.</li>
<li>$273{,}16$ und $273{,}15$ verwechseln (Tripelpunkt vs. Nullpunkt-Verschiebung).</li></ul>`
  },

  // ========================================================================
  // 10.3 WÄRMEENERGIE UND WÄRMEKAPAZITÄT
  // ========================================================================
  {
    id: "ph10_waermekapazitaet",
    title: "Wärme als Energie, Wärmekapazität, spezifische und molare Wärme",
    category: "10.3 Wärmeenergie und Wärmekapazität",
    type: "definition",
    front: R`Wie wurde erkannt, dass Wärme eine Form von <b>Energie</b> ist? Definiere Wärmekapazität $C$, spezifische Wärmekapazität $c_m$ und molare Wärmekapazität $c_M$. Wie berechnet man die Wärme bei temperaturabhängigem $C$?`,
    back: R`Früher: „Wärmestoff“ (Caloricum). Thompson (Ende 18. Jh.): Wärme ist Energie; Mayer mass das mechanische Wärmeäquivalent (Wasser durch Schütteln erwärmen) und formulierte als Erster die Energieerhaltung. Die <b>Kalorie</b> (Wärme, die $1\,\text{g}$ Wasser von $287{,}65$ auf $288{,}65\,\text{K}$ erwärmt):
$$1\,\text{cal} = 4{,}1868\,\text{J}\qquad(10.13)$$
<b>Definitionen:</b>
$$C = \frac{\Delta Q}{\Delta T}\ [\text{J/K}],\qquad c_m = \frac1m\frac{\Delta Q}{\Delta T}\ [\text{J/(kg K)}],\qquad c_M = \frac1\nu\frac{\Delta Q}{\Delta T}\ [\text{J/(mol K)}]\qquad(10.14\text{–}10.16)$$
$C$ gehört zu einem Gegenstand, $c$ zu einem Stoff. Allgemein, mit temperaturabhängigem $C$:
$$Q^\swarrow = \int\delta Q^\swarrow = \int_{T_a}^{T_e}C(T)\,dT\;\approx\;C\,(T_e-T_a)\qquad(10.17,\,10.18)$$
($\swarrow$: dem Körper zugeführt.)`,
    meta: "Skript: Abschnitte 10.3–10.3.1, Gl. (10.13)–(10.18), S. 284–285",
    explanation: R`<b>Intuition:</b> Die Wärmekapazität sagt, wie viel Energie man „hineinstecken“ muss, damit die Temperatur um ein Kelvin steigt. Ein Körper mit grossem $C$ ist ein thermisches Schwergewicht: Er erwärmt sich langsam und speichert viel Energie.<br><br>
<b>Abhängigkeiten:</b> $C = mc_m = \nu c_M$, also proportional zur Stoffmenge. Wasser hat eine aussergewöhnlich hohe spezifische Wärme ($4182\,\text{J/(kg K)}$), etwa zehnmal so viel wie Kupfer; deshalb dämpfen Meere das Klima.<br><br>
<b>Das Symbol $\delta$:</b> Wärme ist keine Zustandsgrösse. Ein Körper „hat“ keine Wärme, er hat innere Energie. Deshalb schreibt man $\delta Q$ für eine kleine Wärmemenge statt $dQ$ (10.5).<br><br>
<b>Zusammenhang:</b> Bei Gasen hängt die Wärmekapazität davon ab, ob Volumen oder Druck konstant gehalten wird ($C_V$ vs. $C_p$, 10.6.2). Bei Phasenübergängen ist $C$ formal unendlich (Wärmezufuhr ohne Temperaturänderung, latente Wärme, 10.8.2.2).`,
    derivation: R`Mischungstemperatur zweier Körper ohne Verluste:
<ol class="fc-steps">
<li>$Q^\nearrow_1 = C_1(T_1-T_m)$<em>Wärme, die der heisse Körper beim Abkühlen auf $T_m$ abgibt.</em></li>
<li>$Q^\swarrow_2 = C_2(T_m-T_2)$<em>Wärme, die der kalte Körper aufnimmt.</em></li>
<li>$C_1(T_1-T_m) = C_2(T_m-T_2)$<em>Energieerhaltung, keine Verluste an die Umgebung.</em></li>
<li>$T_m = \dfrac{C_1T_1+C_2T_2}{C_1+C_2}$<em>Wärmekapazitätsgewichtetes Mittel (vgl. 10.21).</em></li>
</ol>`,
    example: R`$1\,\text{kg}$ Wasser von $20$ auf $100\,^\circ\text{C}$: $Q = 4182\cdot80\,\text{J} = 335\,\text{kJ}$; ein Wasserkocher mit $2\,\text{kW}$ braucht dafür $2{,}8\,\text{min}$.<br>
$200\,\text{g}$ Kupfer ($c = 386\,\text{J/(kg K)}$, $C = 77\,\text{J/K}$) bei $100\,^\circ\text{C}$ in $500\,\text{g}$ Wasser ($C = 2091\,\text{J/K}$) bei $20\,^\circ\text{C}$: $T_m = 22{,}8\,^\circ\text{C}$.`,
    counterexample: R`<b>Wärme ist nicht im Körper gespeichert:</b> Ein Glas warmes Wasser kann durch Wärmezufuhr oder durch Umrühren (Arbeit) erwärmt worden sein; man kann ihm nicht ansehen, welcher Anteil „Wärme“ war. Gespeichert ist nur die innere Energie $U$. „Wärmeinhalt“ ist deshalb ein irreführendes Wort.`,
    pitfalls: R`<ul><li>$C$, $c_m$ und $c_M$ verwechseln (an der Einheit erkennbar).</li>
<li>$C$ bei grossen Temperaturdifferenzen als konstant annehmen.</li>
<li>Bei Phasenübergängen $Q = C\Delta T$ verwenden.</li></ul>`
  },
  {
    id: "ph10_dulong_petit",
    title: "Wärmekapazität von Festkörpern: Regel von Dulong-Petit (≈ 3R)",
    category: "10.3 Wärmeenergie und Wärmekapazität",
    type: "gesetz",
    front: R`Warum unterscheiden sich die spezifischen Wärmekapazitäten von Festkörpern stark, die molaren aber kaum? Wie lautet die <b>Regel von Dulong-Petit</b>, wie erklärt man sie, und welche Ausnahmen gibt es? Beschreibe das Demonstrationsexperiment mit Al und Pb.`,
    back: R`Tab. 10.1: $c_m$ von Al $900$, Cu $386$, Pb $128\,\text{J/(kg K)}$ – sehr verschieden. Pro Mol: Al $24{,}4$, Cu $24{,}5$, Pb $26{,}5\,\text{J/(mol K)}$ – fast gleich.<br>
<b>Dulong-Petit:</b>
$$c_M\approx25\,\frac{\text{J}}{\text{mol K}}\qquad(10.19)$$
<b>Erklärung:</b> Die Atome schwingen um ihre Ruhelagen; bei festem Volumen geht die zugeführte Energie nur in diese Schwingungen. Bezogen auf ein Mol vergleicht man immer gleich viele Atome; die Energie pro Atom und Kelvin ist stoffunabhängig ($6\times\tfrac12k$, Äquipartition: $c_M = 3R = 24{,}9\,\text{J/(mol K)}$).<br>
<b>Ausnahmen („anomal“):</b> Be ($11$), B ($13$), Diamant ($6\,\text{J/(mol K)}$).<br><br>
<b>Demo:</b> je $14\,\text{mol}$ Pb ($2{,}9\,\text{kg}$) und Al ($380\,\text{g}$), beide $\nu c\approx350\,\text{J/K}$, bei $\approx100\,^\circ\text{C}$ in je $500\,\text{g}$ Wasser ($C^W = 2090\,\text{J/K}$, $20\,^\circ\text{C}$):
$$C^W(T_e-T_a^W) = \nu c(T_a-T_e)\;\Rightarrow\;T_e = \frac{\nu cT_a+C^WT_a^W}{C^W+\nu c}\approx304\,\text{K}\qquad(10.20,\,10.21)$$
Beide Behälter erreichen dieselbe Endtemperatur ($\approx30\,^\circ\text{C}$).`,
    meta: "Skript: Abschnitt 10.3.2, Gl. (10.19)–(10.21), Tab. 10.1, S. 285–287",
    explanation: R`<b>Intuition:</b> Wärme verteilt sich auf Atome, nicht auf Kilogramm. Ein Kilogramm Blei enthält nur ein Siebtel so viele Atome wie ein Kilogramm Aluminium; deshalb braucht es für dieselbe Erwärmung etwa ein Siebtel der Energie.<br><br>
<b>Abhängigkeiten:</b> $c_m\approx\dfrac{3R}{M}$: Die spezifische Wärme ist umgekehrt proportional zur molaren Masse. Schwere Atome, kleine spezifische Wärme.<br><br>
<b>Warum Ausnahmen?</b> Bei leichten, stark gebundenen Atomen (hohe Schwingungsfrequenzen) sind die Schwingungen bei Zimmertemperatur teilweise „eingefroren“: Die Quantenenergie $h\nu$ ist grösser als $kT$. Bei tiefen Temperaturen sinkt $c_M$ für alle Festkörper gegen null (Einstein- und Debye-Modell, Quantenphysik).<br><br>
<b>Zusammenhang:</b> Wasser hat mit $75{,}4\,\text{J/(mol K)}$ eine deutlich höhere molare Wärme (Wasserstoffbrücken, viele Freiheitsgrade pro Molekül). Eis bei $-10\,^\circ\text{C}$ hat etwa die Hälfte davon.`,
    derivation: R`Warum $3R$ (Vorgriff auf das Äquipartitionsgesetz, 10.6.3):
<ol class="fc-steps">
<li>Jedes Atom: 3 kinetische + 3 potentielle quadratische Freiheitsgrade<em>Harmonischer Oszillator in 3 Raumrichtungen: $\tfrac12mv_i^2$ und $\tfrac12kx_i^2$.</em></li>
<li>$\bar E = 6\cdot\tfrac12kT = 3kT$ pro Atom<em>Jeder quadratische Freiheitsgrad trägt im Mittel $\tfrac12kT$ (vgl. $\langle E_\text{kin}\rangle = \langle E_\text{pot}\rangle$, 9.2.8).</em></li>
<li>$U = 3N_AkT\cdot\nu = 3\nu RT$<em>Für $\nu$ Mol.</em></li>
<li>$c_M = \dfrac1\nu\dfrac{dU}{dT} = 3R = 24{,}9\,\dfrac{\text{J}}{\text{mol K}}$<em>Dulong-Petit (10.19, Tab. 10.2).</em></li>
</ol>`,
    example: R`Demo nachgerechnet: $T_e = \frac{350\cdot373+2090\cdot293}{2440}\,\text{K} = 304\,\text{K}\approx31\,^\circ\text{C}$ (Skript gerundet: $300\,\text{K}$).<br>
Kupfer: $c_m\approx3R/M = 24{,}9/0{,}0635 = 393\,\text{J/(kg K)}$; gemessen $386$.`,
    counterexample: R`<b>Diamant</b> bei Zimmertemperatur: $c_M\approx6\,\text{J/(mol K)}$, nur ein Viertel von $3R$. Die klassische Erklärung versagt hier; erst die Quantisierung der Gitterschwingungen erklärt das. Dulong-Petit ist ein Hochtemperaturgrenzwert.`,
    pitfalls: R`<ul><li>Dulong-Petit auf die spezifische (massenbezogene) Wärme anwenden.</li>
<li>Die Regel bei tiefen Temperaturen oder für leichte, harte Stoffe verwenden.</li>
<li>Bei der Mischungsrechnung die Wärmekapazität des Gefässes vergessen.</li></ul>`
  },

  // ========================================================================
  // 10.4–10.5 NULLTER UND ERSTER HAUPTSATZ
  // ========================================================================
  {
    id: "ph10_nullter_hauptsatz_innere_energie",
    title: "Nullter Hauptsatz, thermisches Gleichgewicht und innere Energie als Zustandsfunktion",
    category: "10.4 Der Nullte Hauptsatz der Thermodynamik",
    type: "konzept",
    front: R`Was besagt der <b>Nullte Hauptsatz</b>? Was ist die <b>innere Energie</b> $U$, und was bedeutet es, dass sie eine <b>Zustandsfunktion</b> ist, Wärme und Arbeit dagegen nicht?`,
    back: R`<b>Nullter Hauptsatz:</b> Bringt man zwei Körper in Kontakt, so erreichen sie nach einer gewissen Zeit überall dieselbe Temperatur: <b>thermisches Gleichgewicht</b>. Makroskopisch ist die Temperatur die Grösse, die in Kontakt stehenden Systemen schliesslich gemeinsam ist; mikroskopisch ein Mass für die thermische Bewegung der Atome. (Zentrale Aussage: Die Temperatur existiert.)<br><br>
<b>Innere Energie:</b> Energie der (ungeordneten) Bewegung und Wechselwirkung aller Teilchen. Zustandsfunktion:
$$U = U(p,V,T,\dots),\qquad\Delta U = U_E-U_A\qquad(10.22\text{–}10.24)$$
hängt nur vom Anfangs- und Endzustand ab, nicht vom Weg.<br><br>
<b>Wärme $Q$:</b> Energie, die allein aufgrund eines Temperaturunterschieds ausgetauscht wird. Wärme und Arbeit sind <b>wegabhängig</b> (Prozessgrössen); deshalb schreibt man $\delta Q$, $\delta W$, aber $dU$.`,
    meta: "Skript: Abschnitte 10.4–10.5.1, Gl. (10.22)–(10.24), Fussnoten 7–9, S. 287–289",
    explanation: R`<b>Intuition:</b> Die innere Energie ist wie ein Kontostand: Er hängt nur davon ab, wie viel drauf ist, nicht ob das Geld als Bargeld (Arbeit) oder Überweisung (Wärme) kam. Wärme und Arbeit sind die Buchungen, nicht der Kontostand.<br><br>
<b>Transitivität:</b> Die übliche Formulierung des 0. Hauptsatzes: Sind A und C im Gleichgewicht und B und C im Gleichgewicht, dann auch A und B. Genau das macht ein Thermometer (C) brauchbar.<br><br>
<b>Zustandsfunktion mathematisch:</b> $dU$ ist ein totales Differential; $\oint dU = 0$ für jeden Kreisprozess. Für $\delta Q$ und $\delta W$ gilt das nicht: Ein Kreisprozess kann netto Arbeit liefern (Wärmekraftmaschine), obwohl $U$ am Ende gleich ist.<br><br>
<b>Zusammenhang:</b> Analog zum konservativen Kraftfeld in der Mechanik (Kap. 4): Die potentielle Energie ist eine Zustandsfunktion, die Arbeit einer nichtkonservativen Kraft (Reibung) ist wegabhängig.`,
    derivation: R`Warum Wärme keine Zustandsfunktion ist (Beispiel ideales Gas, Weg von $(V_1,T)$ nach $(V_2,T)$):
<ol class="fc-steps">
<li>Weg 1: isotherm, reversibel: $Q_1^\swarrow = \nu RT\ln\dfrac{V_2}{V_1}$<em>Gas leistet Arbeit, gleich viel Wärme strömt ein (10.49).</em></li>
<li>Weg 2: freie Expansion ins Vakuum: $Q_2^\swarrow = 0$, $W_2 = 0$<em>Keine Arbeit, keine Wärme, $T$ bleibt (10.7.4, Abb. 10.26).</em></li>
<li>$\Delta U_1 = \Delta U_2 = 0$<em>Gleicher Anfangs- und Endzustand: gleiche Änderung der Zustandsfunktion.</em></li>
<li>$Q_1\neq Q_2$<em>Die Wärme hängt vom Weg ab, also gibt es keine Funktion „$Q$ des Zustands“.</em></li>
</ol>`,
    example: R`<b>Thermometer</b> in heissem Tee: Es zeigt erst die richtige Temperatur, wenn es mit dem Tee im Gleichgewicht ist. Hat es eine grosse Wärmekapazität, kühlt es den Tee dabei merklich ab.<br>
<b>Kreisprozess:</b> Ein Automotor durchläuft pro Umdrehung einen Kreis: $\Delta U = 0$, aber netto $W^\nearrow\gt0$ und $Q^\swarrow_\text{netto}\gt0$.`,
    counterexample: R`<b>„Gleich warm anfühlen“ ist kein Gleichgewicht im physikalischen Sinn:</b> Metall und Holz bei derselben Temperatur fühlen sich verschieden warm an, weil Metall die Wärme der Hand schneller ableitet. Der Tastsinn misst Wärmeströme, nicht Temperaturen.`,
    pitfalls: R`<ul><li>Von der „Wärme in einem Körper“ sprechen.</li>
<li>$\oint\delta Q = 0$ für einen Kreisprozess annehmen.</li>
<li>Temperatur (Zustandsgrösse, intensiv) und Wärme (übertragene Energie, Prozessgrösse) verwechseln.</li></ul>`
  },
  {
    id: "ph10_erster_hauptsatz",
    title: "Erster Hauptsatz: dU = δW↙ + δQ↙",
    category: "10.5 Der Erste Hauptsatz der Thermodynamik",
    type: "gesetz",
    front: R`Formuliere den <b>Ersten Hauptsatz</b> der Thermodynamik mit der Vorzeichenkonvention des Skripts ($\swarrow$ zugeführt, $\nearrow$ abgegeben). Was gilt für ein abgeschlossenes System? Welche Demonstrationsexperimente zeigen die Umwandlung von Arbeit in innere Energie?`,
    back: R`Die innere Energie eines Systems kann durch zugeführte Arbeit <i>und</i> durch zugeführte Wärme verändert werden:
$$dU = \delta W^\swarrow+\delta Q^\swarrow\qquad(10.25)$$
Für Volumenarbeit am Gas: $\delta W^\swarrow = -p\,dV$ (Kompression, $dV\lt0$, führt Arbeit zu). In einem abgeschlossenen System: $dU = 0$.<br><br>
Der Erste Hauptsatz ist der <b>Energieerhaltungssatz</b> mit Wärme als zusätzlicher Energieform. Folgerung: Es gibt kein Perpetuum mobile erster Art (eine Maschine, die Arbeit aus nichts erzeugt).<br><br>
<b>Demonstrationen:</b> Ein Bleistab wird gehämmert, seine Temperatur steigt drastisch (Abb. 10.4). Eine fallende Kugel trifft einen Körper und erwärmt ihn (Abb. 10.5): mechanische Energie wird innere Energie und dann als Wärme an das Thermometer weitergegeben.`,
    meta: "Skript: Abschnitt 10.5.1, Gl. (10.25), Abb. 10.4–10.5, Fussnoten 7–9, S. 288–290",
    explanation: R`<b>Intuition:</b> Es gibt zwei Türen, durch die Energie in ein System kommt: geordnet (Arbeit: Kolben schieben, rühren, hämmern) und ungeordnet (Wärme: Kontakt mit etwas Heisserem). Was durch beide Türen hereinkommt, ist die Änderung des Energieinhalts.<br><br>
<b>Vorzeichen:</b> Mit $\swarrow$ zählt alles positiv, was hineingeht. Andere Bücher (Ingenieurwesen) schreiben $dU = \delta Q-\delta W$ mit $W$ = vom System geleistete Arbeit. Physikalisch identisch, nur andere Buchhaltung. Immer prüfen, welche Konvention gilt!<br><br>
<b>Abhängigkeiten:</b> Beim idealen Gas hängt $U$ nur von $T$ ab ($U = \tfrac f2\nu RT$). Deshalb gilt bei isothermen Prozessen $Q^\swarrow = -W^\swarrow$ und bei adiabatischen $dU = \delta W^\swarrow$ (10.6.4).<br><br>
<b>Zusammenhang:</b> Erweiterung des mechanischen Energiesatzes (Kap. 4): Reibung „vernichtet“ keine Energie, sondern wandelt sie in innere Energie um. Was der Erste Hauptsatz nicht sagt: in welche Richtung Prozesse laufen. Das regelt der Zweite.`,
    derivation: R`Volumenarbeit am Gas (Vorzeichen):
<ol class="fc-steps">
<li>$\delta W^\nearrow = F\,dx = pA\,dx = p\,dV$<em>Das expandierende Gas schiebt den Kolben um $dx$ (10.38, Abb. 10.9).</em></li>
<li>$\delta W^\swarrow = -\delta W^\nearrow = -p\,dV$<em>Am Gas geleistete Arbeit: Bei Expansion negativ, bei Kompression positiv (10.44).</em></li>
<li>$dU = \delta Q^\swarrow - p\,dV$<em>Erster Hauptsatz für ein Gas mit reiner Volumenarbeit.</em></li>
<li>Abgeschlossen: $\delta Q^\swarrow = 0$, $\delta W^\swarrow = 0\Rightarrow dU = 0$<em>Energieerhaltung.</em></li>
</ol>`,
    example: R`<b>Bleihammer:</b> $20$ Schläge mit je $30\,\text{J}$ auf $200\,\text{g}$ Blei ($c = 128\,\text{J/(kg K)}$, $C = 25{,}6\,\text{J/K}$): $\Delta T = 600/25{,}6 = 23\,\text{K}$, sofern keine Wärme abfliesst.<br>
<b>Fahrradpumpe:</b> Schnelles Pumpen (Kompression, fast adiabatisch) erwärmt die Pumpe spürbar: $\delta W^\swarrow\gt0$, $\delta Q\approx0$, also $dU\gt0$.`,
    counterexample: R`<b>Erster Hauptsatz erlaubt mehr als die Natur:</b> Dass ein warmer Teller spontan abkühlt und dabei ein Gewicht hebt (Wärme vollständig in Arbeit, aus einem einzigen Reservoir), verletzt die Energieerhaltung nicht. Es passiert trotzdem nie – verboten durch den Zweiten Hauptsatz (Perpetuum mobile zweiter Art).`,
    pitfalls: R`<ul><li>Vorzeichenkonventionen verschiedener Bücher mischen.</li>
<li>$\delta W^\swarrow = +p\,dV$ schreiben (falsches Vorzeichen).</li>
<li>Glauben, isotherm heisse „keine Wärme“ (beim idealen Gas heisst es $dU = 0$, nicht $\delta Q = 0$).</li></ul>`
  },

  // ========================================================================
  // 10.6 IDEALE GASE
  // ========================================================================
  {
    id: "ph10_ideale_gasgleichung",
    title: "Ideales Gas und Zustandsgleichung pV = NkT = νRT",
    category: "10.6 Ideale Gase",
    type: "gesetz",
    front: R`Was ist ein <b>ideales Gas</b>? Wie folgt aus Boyle-Mariotte und Gay-Lussac die Zustandsgleichung? Gib $k$, $N_A$ und $R$ mit Einheiten an und berechne das Molvolumen sowie die Dichte eines Gases.`,
    back: R`<b>Ideales Gas:</b> sehr viele neutrale Atome oder Moleküle, deren Wechselwirkung untereinander und deren Eigenvolumen vernachlässigt werden. Es kann nicht verflüssigt werden.<br><br>
Boyle-Mariotte ($pV = $ konst. bei $T = $ konst.), Gay-Lussac ($V\propto T$, $p\propto T$) und $pV\propto$ Gasmenge ergeben:
$$pV = NkT\qquad(10.26)$$
$$k = 1{,}381\cdot10^{-23}\,\frac{\text{J}}K\qquad(10.27,\,10.28)$$
$kT$ ist eine Energie: $T = 300\,\text{K}\Rightarrow kT = 4{,}1\cdot10^{-21}\,\text{J}$ (10.29). Pro Stoffmenge, $N = \nu N_A$:
$$pV = \nu RT,\qquad N_A = 6{,}022\cdot10^{23}\,\text{mol}^{-1},\qquad R = N_Ak = 8{,}314\,\frac{\text{J}}{\text{mol K}}\qquad(10.30\text{–}10.32)$$
Molvolumen bei $0\,^\circ\text{C}$: $V_M = RT/p$; Dichte:
$$\rho = \frac{M}{V_M} = \frac{Mp}{RT}\qquad(10.33)$$`,
    meta: "Skript: Abschnitte 10.6–10.6.1, Gl. (10.26)–(10.33), Abb. 10.6, S. 289–293",
    explanation: R`<b>Intuition:</b> Bei geringer Dichte „sehen“ sich die Moleküle kaum. Dann zählt nur, wie viele Teilchen wie schnell gegen die Wand fliegen. Die Art des Gases ist egal: Ein Mol Helium und ein Mol Xenon nehmen bei gleichem $p$ und $T$ dasselbe Volumen ein (Avogadro).<br><br>
<b>Abhängigkeiten:</b> $p\propto N$, $p\propto T$, $p\propto1/V$. Die Dichte ist $\propto M$ (schweres Gas sinkt: CO₂ sammelt sich in Senken) und $\propto p/T$ (warme Luft steigt auf: Heissluftballon).<br><br>
<b>$kT$ als Energieskala:</b> Bei Zimmertemperatur ist $kT\approx\frac1{40}\,\text{eV}$. Prozesse mit Energien $\gg kT$ (chemische Bindungen, $\sim\text{eV}$) laufen thermisch kaum ab; solche mit $\ll kT$ sind voll angeregt.<br><br>
<b>Zusammenhang:</b> Mikroskopische Herleitung über Stösse an der Wand: $pV = \tfrac23N\langle E_\text{kin}\rangle$; verglichen mit $pV = NkT$ folgt $\langle E_\text{kin}\rangle = \tfrac32kT$ (Äquipartition, 10.6.3; Kap. 14).`,
    derivation: R`Zusammensetzen der Einzelgesetze:
<ol class="fc-steps">
<li>$pV = f(T)$ bei fester Gasmenge<em>Boyle-Mariotte: Bei konstantem $T$ ist $pV$ konstant.</em></li>
<li>$V\propto T$ bei festem $p$ $\Rightarrow f(T)\propto T$<em>Gay-Lussac (10.6).</em></li>
<li>$pV\propto N$ bei festem $p$, $T$<em>Zwei gleiche Behälter zusammengefügt: doppeltes Volumen bei gleichem $p$, $T$.</em></li>
<li>$pV = NkT$<em>Proportionalitätskonstante $k$ experimentell für alle Gase gleich (10.26).</em></li>
<li>$pV = \nu N_AkT = \nu RT$<em>Pro Mol: $R = N_Ak$ (10.31, 10.32).</em></li>
</ol>`,
    example: R`<b>Molvolumen</b> bei $273{,}15\,\text{K}$: bei $1\,\text{atm}$ $22{,}4\,\text{L/mol}$, bei $1\,\text{bar}$ $22{,}7\,\text{L/mol}$. (Das Skript nennt $22{,}4\,\text{m}^3/\text{kmol}$ bei $1\,\text{bar}$; dieser Wert gehört zu $1\,\text{atm}$.)<br>
<b>Luftdichte</b> ($M = 29\,\text{g/mol}$) bei $1\,\text{bar}$: $0\,^\circ\text{C}$: $1{,}28\,\text{kg/m}^3$; $20\,^\circ\text{C}$: $1{,}19\,\text{kg/m}^3$.<br>
<b>Teilchenzahl</b> in $1\,\text{cm}^3$ Luft: $N = pV/(kT) = 2{,}5\cdot10^{19}$.`,
    counterexample: R`<b>CO₂ bei 6 MPa und 290 K:</b> Das Molvolumen liegt weit unter dem idealen Wert, und bei weiterer Kompression wird das Gas flüssig (Abb. 10.28). Ein ideales Gas kann nicht kondensieren. Für hohe Dichten oder tiefe Temperaturen braucht man die van-der-Waals-Gleichung (10.8.1).`,
    pitfalls: R`<ul><li>$T$ in Celsius oder $p$ in bar einsetzen, ohne umzurechnen.</li>
<li>$N$ (Teilchenzahl) und $\nu$ (Stoffmenge) bzw. $k$ und $R$ verwechseln.</li>
<li>$M$ in g/mol statt kg/mol in $\rho = Mp/(RT)$ einsetzen.</li></ul>`
  },
  {
    id: "ph10_cp_minus_cv",
    title: "Molare Wärmen C_V und C_p des idealen Gases: C_p − C_V = R",
    category: "10.6 Ideale Gase",
    type: "herleitung",
    front: R`Warum braucht man, um ein Gas bei <b>konstantem Druck</b> um $\Delta T$ zu erwärmen, mehr Wärme als bei <b>konstantem Volumen</b>? Leite $C_p = C_V+R$ mit dem Ersten Hauptsatz her.`,
    back: R`$$\Delta Q_1 = \nu C_V\Delta T\ (V = \text{konst.}),\qquad\Delta Q_2 = \nu C_p\Delta T\ (p = \text{konst.})\qquad(10.34,\,10.35)$$
Bei konstantem Druck dehnt sich das Gas aus und hebt das Gewicht auf dem Kolben (Abb. 10.8): Ein Teil der Wärme wird zu Arbeit.<br><br>
<b>Konstantes Volumen</b> (keine Arbeit):
$$C_V = \frac1\nu\left(\frac{\delta Q^\swarrow}{\delta T}\right)_V = \frac1\nu\left\{\frac{dU}{dT}-\frac{\delta W^\swarrow}{\delta T}\right\}_V = \frac1\nu\frac{dU}{dT}\qquad(10.37)$$
<b>Konstanter Druck:</b> $\delta W^\nearrow = p\,dV$ (10.38), und aus $pV = \nu RT$: $p\,dV = \nu R\,dT$ (10.39, 10.40):
$$C_p = \frac1\nu\left\{\frac{dU}{dT}+\frac{\delta W^\nearrow}{\delta T}\right\}_p = C_V+R\qquad(10.36,\,10.41)$$`,
    meta: "Skript: Abschnitt 10.6.2, Gl. (10.34)–(10.41), Abb. 10.7–10.9, S. 293–295",
    explanation: R`<b>Intuition:</b> Bei festem Volumen geht alle Wärme in die Bewegung der Moleküle. Bei festem Druck muss das Gas zusätzlich „Platz schaffen“, also gegen den äusseren Druck Arbeit leisten; diese Energie fehlt der Temperaturerhöhung.<br><br>
<b>Warum genau $R$?</b> Beim idealen Gas hängt $U$ nur von $T$ ab (keine Wechselwirkungen), also ist $dU/dT$ in beiden Fällen gleich. Der Unterschied ist nur die Ausdehnungsarbeit $p\,dV = \nu R\,dT$, pro Mol und Kelvin genau $R$, für jedes ideale Gas.<br><br>
<b>Abhängigkeiten:</b> $\kappa = C_p/C_V\gt1$ hängt von der Zahl der Freiheitsgrade ab (10.6.3): $\kappa = 1 + \frac2f$. Je mehr Freiheitsgrade, desto kleiner der relative Unterschied.<br><br>
<b>Zusammenhang:</b> Für Festkörper und Flüssigkeiten ist die Ausdehnung klein, also $C_p\approx C_V$ (Tab. 10.2: feste Körper $3R$, kein $\kappa$). $C_p$ ist die Ableitung der Enthalpie (10.105).`,
    derivation: R`<ol class="fc-steps">
<li>$\delta Q^\swarrow = dU-\delta W^\swarrow = dU+p\,dV$<em>Erster Hauptsatz mit $\delta W^\swarrow = -p\,dV$.</em></li>
<li>$V = $ konst.: $\delta Q^\swarrow = dU\Rightarrow\nu C_V = dU/dT$<em>Keine Volumenarbeit (10.37); $dT = \delta T$, da $T$ Zustandsgrösse.</em></li>
<li>$p = $ konst.: $p\,dV = d(pV) = \nu R\,dT$<em>Ideale Gasgleichung differenziert bei festem $p$ (10.39).</em></li>
<li>$\delta Q^\swarrow = dU+\nu R\,dT$<em>$dU$ ist wie bei $V = $ konst., da $U = U(T)$ beim idealen Gas.</em></li>
<li>$\nu C_p = \nu C_V+\nu R\Rightarrow C_p = C_V+R$<em>Durch $\nu\,dT$ teilen (10.41).</em></li>
</ol>`,
    example: R`Luft (zweiatomig, $C_V = \tfrac52R = 20{,}8$, $C_p = \tfrac72R = 29{,}1\,\text{J/(mol K)}$): $1\,\text{mol}$ um $10\,\text{K}$ erwärmen: isochor $208\,\text{J}$, isobar $291\,\text{J}$. Die Differenz $83\,\text{J} = \nu R\Delta T$ ist die Ausdehnungsarbeit.`,
    counterexample: R`<b>Wasser bei 4 °C:</b> Es dehnt sich bei Erwärmung gar nicht aus (Dichtemaximum), also ist dort $C_p = C_V$ exakt. Und für reale Gase nahe der Kondensation ist $C_p-C_V\neq R$, weil $U$ auch vom Volumen abhängt (Wechselwirkungsenergie, 10.9.2).`,
    pitfalls: R`<ul><li>$C_p\lt C_V$ annehmen.</li>
<li>$C_p-C_V = R$ für Festkörper oder reale Gase verwenden.</li>
<li>Bei isobaren Prozessen mit $C_V$ rechnen.</li>
<li>$C_V$ und $C_p$ pro Mol mit spezifischen Werten pro kg verwechseln; $R$ gilt nur molar.</li></ul>`
  },
  {
    id: "ph10_aequipartition",
    title: "Äquipartitionsgesetz: ½kT pro Freiheitsgrad, C_V = f R/2, κ = (f+2)/f",
    category: "10.6 Ideale Gase",
    type: "gesetz",
    front: R`Was besagt das <b>Äquipartitionsgesetz</b>? Berechne damit $U$, $C_V$, $C_p$ und $\kappa = C_p/C_V$ für ein-, zwei- und dreiatomige Gase sowie für Festkörper. Warum hängt die Wärmekapazität von H₂ von der Temperatur ab?`,
    back: R`Mittlere Energie eines Moleküls mit $f$ Freiheitsgraden:
$$\bar E = \frac f2kT\qquad(10.42)$$
Innere Energie des idealen Gases (nur kinetische Energie, keine Wechselwirkung):
$$U = \frac f2\nu N_AkT = \frac f2\nu RT,\qquad C_V = \frac f2R,\qquad C_p = \frac{f+2}2R,\qquad\kappa = \frac{f+2}f\qquad(10.43)$$
<b>Tab. 10.2:</b>
<ul><li>1-atomig: 3 Transl. → $C_V = \tfrac32R$, $C_p = \tfrac52R$, $\kappa = \tfrac53$</li>
<li>2-atomig: 3 Transl. + 2 Rot. → $\tfrac52R$, $\tfrac72R$, $\kappa = \tfrac75$</li>
<li>3-atomig (gewinkelt): 3 + 3 → $3R$, $4R$, $\kappa = \tfrac43$</li>
<li>Festkörper: 3 kin. + 3 pot. → $C_V = 3R$</li></ul>
<b>Einfrieren:</b> Bei tiefen Temperaturen können Freiheitsgrade nicht angeregt werden. H₂: unter $\sim100\,\text{K}$ nur Translation ($\tfrac32R$), dann Rotation ($\tfrac52R$), erst über $\sim1000\,\text{K}$ Vibration ($\tfrac72R$) (Abb. 10.10). Erklärung erst durch Quantisierung der Energie.`,
    meta: "Skript: Abschnitt 10.6.3, Gl. (10.42)–(10.43), Tab. 10.2, Abb. 10.10, S. 296–297",
    explanation: R`<b>Intuition:</b> Bei Stössen wird Energie zufällig hin und her geschoben. Im Gleichgewicht hat jede „Speichermöglichkeit“ (jeder quadratische Term in der Energie) im Mittel gleich viel: $\tfrac12kT$. Mehr Speichermöglichkeiten heisst: mehr Energie nötig für dieselbe Temperaturerhöhung, also grössere Wärmekapazität.<br><br>
<b>Freiheitsgrade zählen:</b> Translation 3. Rotation: lineares Molekül 2 (die Drehung um die Verbindungsachse hat ein verschwindendes Trägheitsmoment), gewinkeltes 3. Schwingung: je Mode 2 (kinetisch + potentiell). Festkörper: 3 kinetische + 3 potentielle.<br><br>
<b>Abhängigkeiten:</b> $\kappa = 1+\frac2f$ sinkt mit $f$. Messung von $\kappa$ (Schallgeschwindigkeit, Rüchardt) verrät also die Molekülstruktur.<br><br>
<b>Zusammenhang:</b> Brown’sche Bewegung: Auch ein sichtbares Teilchen in einer Flüssigkeit hat $\tfrac32kT$ kinetische Energie und zappelt deshalb sichtbar. Die statistische Begründung folgt in Kap. 14 (Boltzmann-Verteilung).`,
    derivation: R`<ol class="fc-steps">
<li>$U = N\cdot\dfrac f2kT = \nu N_A\dfrac f2kT = \dfrac f2\nu RT$<em>Summe über alle Moleküle (10.43).</em></li>
<li>$C_V = \dfrac1\nu\dfrac{dU}{dT} = \dfrac f2R$<em>Definition (10.37).</em></li>
<li>$C_p = C_V+R = \dfrac{f+2}2R$<em>Mit (10.41).</em></li>
<li>$\kappa = \dfrac{C_p}{C_V} = \dfrac{f+2}f$<em>Adiabatenexponent.</em></li>
<li>$f = 5$: $\kappa = 1{,}4$; $f = 3$: $\kappa = 1{,}67$<em>Werte für Luft bzw. Edelgase.</em></li>
</ol>`,
    example: R`$1\,\text{mol}$ Helium bei $300\,\text{K}$: $U = \tfrac32\cdot8{,}314\cdot300\,\text{J} = 3{,}7\,\text{kJ}$; Stickstoff: $\tfrac52\nu RT = 6{,}2\,\text{kJ}$.<br>
Gemessen: Ar $\kappa = 1{,}67$, N₂ $1{,}40$, CO₂ $1{,}29$ (linear, mit teilweise angeregten Biegeschwingungen; zwischen $\tfrac75$ und $\tfrac43$ liegend).`,
    counterexample: R`<b>CO₂ als „3-atomiges Gas“ mit $f = 6$:</b> CO₂ ist linear, hat also nur 2 Rotationsfreiheitsgrade; nach dem einfachen Abzählen wäre $f = 5$. Gemessen $\kappa = 1{,}29$, weil die weichen Biegeschwingungen schon bei Zimmertemperatur teilweise angeregt sind. Die Tabellenwerte gelten für gewinkelte Moleküle (H₂O) und ohne Schwingungen.`,
    pitfalls: R`<ul><li>Für ein zweiatomiges Molekül 3 Rotationsfreiheitsgrade zählen.</li>
<li>Schwingungen mit nur einem Freiheitsgrad (statt kinetisch + potentiell) zählen.</li>
<li>Das Gesetz bei tiefen Temperaturen anwenden, wo Freiheitsgrade eingefroren sind.</li></ul>`
  },
  {
    id: "ph10_isobar_isochor",
    title: "Volumenarbeit und isobare/isochore Zustandsänderungen im pV-Diagramm",
    category: "10.6 Ideale Gase",
    type: "konzept",
    front: R`Wie berechnet man die an einem Gas geleistete <b>Volumenarbeit</b>, und wie liest man sie im <b>pV-Diagramm</b> ab? Bestimme Arbeit, Wärme und $\Delta U$ für eine <b>isobare</b> und eine <b>isochore</b> Zustandsänderung eines idealen Gases.`,
    back: R`Am Gas geleistete Arbeit:
$$W^\swarrow = \int_{V_a}^{V_e}\delta W^\swarrow = -\int_{V_a}^{V_e}p\,dV\qquad(10.44)$$
Im pV-Diagramm ist jeder Punkt ein Gleichgewichtszustand; der <b>Betrag der Arbeit ist die Fläche unter der Kurve</b> (10.50). Bei einem Kreisprozess ist die Nettoarbeit die umschlossene Fläche.<br><br>
<b>Isobar</b> ($p = $ konst.):
$$W^\swarrow = -p(V_e-V_a)\qquad(10.45)$$
$Q^\swarrow = \nu C_p\Delta T$, $\Delta U = \nu C_V\Delta T$.<br><br>
<b>Isochor</b> ($V = $ konst.): $W^\swarrow = 0$, also $Q^\swarrow = \Delta U = \nu C_V\Delta T$ (vgl. 10.34, 10.51); der Druck steigt mit $T$.`,
    meta: "Skript: Abschnitt 10.6.4.1, Gl. (10.44)–(10.45), (10.50); Abschnitt 10.6.2, S. 297–299",
    explanation: R`<b>Intuition:</b> Arbeit am Gas ist „Kolben hineinschieben gegen den Gasdruck“. Je höher der Druck und je weiter man schiebt, desto mehr Arbeit; im Diagramm ist das genau die Fläche $p\times\Delta V$.<br><br>
<b>Vorzeichen:</b> Expansion ($dV\gt0$): Das Gas leistet Arbeit, $W^\swarrow\lt0$. Kompression: $W^\swarrow\gt0$. Bei einem Kreisprozess im Uhrzeigersinn im pV-Diagramm leistet das Gas netto Arbeit (Wärmekraftmaschine), gegen den Uhrzeigersinn wird Arbeit hineingesteckt (Wärmepumpe).<br><br>
<b>Wegabhängigkeit sichtbar:</b> Zwischen zwei Zuständen gibt es viele Wege mit verschiedenen Flächen, also verschiedenen Arbeiten (und Wärmen), aber derselben Änderung $\Delta U$.<br><br>
<b>Zusammenhang:</b> Die vier Standardprozesse (isochor, isobar, isotherm, adiabatisch) sind die Bausteine aller Kreisprozesse (Otto, Diesel, Carnot, Stirling; 10.7.2).`,
    derivation: R`Energiebilanz isobar, ideales Gas:
<ol class="fc-steps">
<li>$W^\swarrow = -p\Delta V = -\nu R\Delta T$<em>$p\Delta V = \Delta(pV) = \nu R\Delta T$ bei konstantem $p$.</em></li>
<li>$\Delta U = \nu C_V\Delta T$<em>$U$ hängt nur von $T$ ab.</em></li>
<li>$Q^\swarrow = \Delta U-W^\swarrow = \nu(C_V+R)\Delta T = \nu C_p\Delta T$<em>Erster Hauptsatz.</em></li>
<li>Anteil der Wärme, der zu Arbeit wird: $\dfrac{|W|}{Q} = \dfrac R{C_p} = \dfrac2{f+2}$<em>Für Luft $\tfrac27$, für Edelgase $\tfrac25$.</em></li>
</ol>`,
    example: R`$1\,\text{mol}$ Luft bei $1\,\text{bar}$ von $300$ auf $400\,\text{K}$ isobar: $\Delta V = \nu R\Delta T/p = 8{,}3\,\text{L}$, $W^\swarrow = -831\,\text{J}$, $\Delta U = 2079\,\text{J}$, $Q^\swarrow = 2910\,\text{J}$.<br>
Isochor dasselbe $\Delta T$: $Q^\swarrow = \Delta U = 2079\,\text{J}$, Druck steigt auf $1{,}33\,\text{bar}$.`,
    counterexample: R`<b>Schnelle (nicht quasistatische) Expansion:</b> Ein Gas, das ins Vakuum strömt, hat keinen wohldefinierten Druck während des Vorgangs, und $-\int p\,dV$ ist nicht anwendbar; tatsächlich leistet es gar keine Arbeit ($p_\text{aussen} = 0$). Die Flächenregel gilt nur für Wege durch Gleichgewichtszustände.`,
    pitfalls: R`<ul><li>Vorzeichen der Arbeit verwechseln (am Gas vs. vom Gas).</li>
<li>Bei isobaren Prozessen $Q = \nu C_V\Delta T$ setzen.</li>
<li>$-\int p\,dV$ bei irreversiblen Prozessen mit dem Gasdruck statt dem äusseren Druck auswerten.</li></ul>`
  },
  {
    id: "ph10_isotherm",
    title: "Isotherme Expansion: Q = W = νRT ln(V₂/V₁)",
    category: "10.6 Ideale Gase",
    type: "herleitung",
    front: R`Ein ideales Gas expandiert isotherm von $V_1$ auf $V_2$. Warum muss Wärme zugeführt werden, und warum wird diese <b>vollständig in Arbeit</b> umgewandelt? Berechne die Arbeit. Widerspricht das dem Zweiten Hauptsatz?`,
    back: R`Bei $T = $ konst. gilt $pV = $ konst. Für eine kleine Expansion leistet das Gas
$$\delta W^\nearrow = p\,dV = \frac{\nu RT}V\,dV\qquad(10.46)$$
Ohne Wärmezufuhr käme diese Energie aus $U$, und das Gas würde abkühlen. Beim idealen Gas ist $U = U(T)$:
$$T = \text{konst.}\Rightarrow dU = 0\Rightarrow\delta Q^\swarrow = -\delta W^\swarrow\qquad(10.47,\,10.48)$$
Die gesamte zugeführte Wärme wird in Arbeit umgewandelt:
$$Q^\swarrow = W^\nearrow = \int_{V_1}^{V_2}p\,dV = \nu RT\int_{V_1}^{V_2}\frac{dV}V = \nu RT\ln\frac{V_2}{V_1}\qquad(10.49)$$
Im pV-Diagramm: Hyperbel $pV = $ konst.; die Fläche darunter ist die Arbeit (Abb. 10.12).`,
    meta: "Skript: Abschnitt 10.6.4.2, Gl. (10.46)–(10.50), Abb. 10.11–10.12, Fussnote 13, S. 298–300",
    explanation: R`<b>Intuition:</b> Das Gas ist ein Durchlauferhitzer für Energie: Was es als Wärme vom Reservoir bekommt, gibt es sofort als Arbeit an den Kolben weiter, und sein eigener Energieinhalt bleibt gleich.<br><br>
<b>Kein Widerspruch zum Zweiten Hauptsatz:</b> Der Zweite Hauptsatz verbietet die vollständige Umwandlung in einem <i>periodischen</i> Prozess ohne bleibende Veränderung. Hier bleibt eine Veränderung zurück: Das Gas ist expandiert. Um es wieder zu komprimieren, muss man Arbeit aufwenden, und ein Teil davon geht als Wärme ab.<br><br>
<b>Abhängigkeiten:</b> $W\propto T$ und $\propto\ln(V_2/V_1)$: Jede Verdopplung des Volumens liefert dieselbe Arbeit $\nu RT\ln2$. Die Arbeit hängt vom Volumen<i>verhältnis</i> ab, nicht von der Differenz.<br><br>
<b>Zusammenhang:</b> Erster Schritt des Carnot-Prozesses (10.7.2); mit $\Delta S = Q/T = \nu R\ln(V_2/V_1)$ auch das Standardbeispiel für Entropie (10.7.4).`,
    derivation: R`<ol class="fc-steps">
<li>$p = \dfrac{\nu RT}V$<em>Zustandsgleichung bei festem $T$.</em></li>
<li>$W^\nearrow = \displaystyle\int_{V_1}^{V_2}\frac{\nu RT}V\,dV$<em>$T$ ist konstant und kommt vor das Integral.</em></li>
<li>$= \nu RT\left[\ln V\right]_{V_1}^{V_2} = \nu RT\ln\dfrac{V_2}{V_1}$<em>Stammfunktion von $1/V$.</em></li>
<li>$\Delta U = 0\Rightarrow Q^\swarrow = W^\nearrow$<em>Erster Hauptsatz; $U$ hängt nur von $T$ ab (Fussnote 13).</em></li>
<li>$= \nu RT\ln\dfrac{p_1}{p_2}$<em>Gleichwertig mit dem Druckverhältnis, da $p_1V_1 = p_2V_2$.</em></li>
</ol>`,
    example: R`$1\,\text{mol}$ bei $300\,\text{K}$, Volumen verdoppelt: $W^\nearrow = Q^\swarrow = 8{,}314\cdot300\cdot\ln2\,\text{J} = 1{,}73\,\text{kJ}$.<br>
Verzehnfacht: $5{,}74\,\text{kJ}$. Druck sinkt dabei von $1\,\text{bar}$ auf $0{,}1\,\text{bar}$.`,
    counterexample: R`<b>Isotherm heisst nicht „ohne Wärme“:</b> Gerade bei der isothermen Expansion fliesst viel Wärme ($Q = W$). Ohne Wärme (adiabatisch) würde das Gas abkühlen (10.6.4.3). Umgekehrt ist bei realen Gasen $\Delta U\neq0$ auch bei konstantem $T$, weil $U$ vom Volumen abhängt.`,
    pitfalls: R`<ul><li>„Isotherm“ mit „adiabatisch“ verwechseln.</li>
<li>$W = p\Delta V$ verwenden, obwohl sich $p$ ändert.</li>
<li>$\ln(V_1/V_2)$ statt $\ln(V_2/V_1)$ (Vorzeichen).</li>
<li>Die Formel ohne Wärmereservoir anwenden.</li></ul>`
  },
  {
    id: "ph10_adiabatisch",
    title: "Adiabatische Zustandsänderung: Poisson’sche Gleichungen pV^κ = konst.",
    category: "10.6 Ideale Gase",
    type: "herleitung",
    front: R`Leite für eine <b>adiabatische</b> Zustandsänderung eines idealen Gases die <b>Poisson’schen Gleichungen</b> her. Warum ist die Adiabate im pV-Diagramm steiler als die Isotherme? Wie ändern sich Druck und Temperatur, wenn Luft adiabatisch auf $1/10$ komprimiert wird?`,
    back: R`Adiabatisch: kein Wärmeaustausch ($\delta Q^\swarrow = 0$), z. B. bei Wärmeisolation oder sehr schnellen Prozessen.
$$dU = \nu C_V\,dT\quad(10.51),\qquad dU = \delta W^\swarrow = -p\,dV = -\frac{\nu RT}V\,dV\quad(10.52)$$
$$\frac{dT}T = -\frac R{C_V}\frac{dV}V,\qquad\frac R{C_V} = \frac{C_p-C_V}{C_V} = \kappa-1\qquad(10.53)$$
$$\ln T = -(\kappa-1)\ln V+\text{konst.}\qquad(10.54)$$
<b>Poisson’sche Gleichungen:</b>
$$TV^{\kappa-1} = \text{konst.},\qquad pV^\kappa = \text{konst.},\qquad T^\kappa p^{1-\kappa} = \text{konst.}\qquad(10.55)$$
<b>Beispiel</b> ($p_a = 1\,\text{bar}$, $T_a = 300\,\text{K}$, $\kappa = 1{,}4$, $V_e = V_a/10$):
$$p_e = p_a\left(\frac{V_a}{V_e}\right)^\kappa = 25{,}1\,\text{bar},\qquad T_e = T_a\left(\frac{V_a}{V_e}\right)^{\kappa-1} = 753\,\text{K} = 480\,^\circ\text{C}\qquad(10.56)$$
Die Zustandsgleichung gilt weiterhin: $\frac{T_e}{T_a} = \frac{p_eV_e}{p_aV_a}$ (10.57).`,
    meta: "Skript: Abschnitt 10.6.4.3, Gl. (10.51)–(10.57), Abb. 10.13–10.14, S. 300–302",
    explanation: R`<b>Intuition:</b> Ohne Wärmezufuhr bezahlt das Gas die Expansionsarbeit aus seiner eigenen inneren Energie und kühlt ab. Bei Kompression bleibt die hineingesteckte Arbeit im Gas und heizt es auf. Deshalb fällt der Druck bei adiabatischer Expansion stärker als bei isothermer: Er sinkt wegen des grösseren Volumens <i>und</i> wegen der tieferen Temperatur.<br><br>
<b>Steigung:</b> Isotherme $\frac{dp}{dV} = -\frac pV$; Adiabate $\frac{dp}{dV} = -\kappa\frac pV$, also um den Faktor $\kappa$ steiler (Abb. 10.14).<br><br>
<b>Abhängigkeiten:</b> $T\propto V^{-(\kappa-1)}$: Bei Luft ($\kappa-1 = 0{,}4$) ergibt Kompression um den Faktor 10 eine Temperaturerhöhung um den Faktor $10^{0{,}4} = 2{,}5$.<br><br>
<b>Anwendungen:</b> Dieselmotor (Selbstzündung durch Kompressionswärme), Föhnwind (absinkende Luft erwärmt sich adiabatisch), Wolkenbildung (aufsteigende Luft kühlt ab), Schallwellen (adiabatisch: Schallgeschwindigkeit $\sqrt{\kappa p/\rho}$).`,
    derivation: R`<ol class="fc-steps">
<li>$\nu C_V\,dT = -\dfrac{\nu RT}V\,dV$<em>Beide Ausdrücke für $dU$ gleichsetzen (10.51, 10.52).</em></li>
<li>$\dfrac{dT}T = -(\kappa-1)\dfrac{dV}V$<em>Trennung der Variablen; $R/C_V = \kappa-1$ (10.53).</em></li>
<li>$\ln T+(\kappa-1)\ln V = \text{konst.}\Rightarrow TV^{\kappa-1} = \text{konst.}$<em>Integration bei konstantem $\kappa$ (10.54).</em></li>
<li>$T = \dfrac{pV}{\nu R}\Rightarrow pV\cdot V^{\kappa-1} = pV^\kappa = \text{konst.}$<em>Zustandsgleichung einsetzen (10.55).</em></li>
<li>$V = \dfrac{\nu RT}p\Rightarrow T\left(\dfrac Tp\right)^{\kappa-1}\propto T^\kappa p^{1-\kappa} = \text{konst.}$<em>Dritte Form (10.55).</em></li>
</ol>`,
    example: R`<b>Dieselmotor</b> (Verdichtung $1:20$, Luft $300\,\text{K}$): $T_e = 300\cdot20^{0{,}4} = 994\,\text{K}$ – genug, um Diesel zu entzünden.<br>
<b>Adiabatische Expansion</b> von $1\,\text{mol}$ Luft auf das doppelte Volumen bei $300\,\text{K}$: $T_e = 300\cdot2^{-0{,}4} = 227\,\text{K}$, geleistete Arbeit $\tfrac52R\cdot73\,\text{K} = 1{,}51\,\text{kJ}$ (isotherm wären es $1{,}73\,\text{kJ}$).`,
    counterexample: R`<b>Adiabatisch ≠ isotherm, auch wenn $Q = 0$ „schön“ klingt:</b> Die freie Expansion ins Vakuum ist ebenfalls adiabatisch ($Q = 0$), aber die Temperatur des idealen Gases bleibt konstant, weil keine Arbeit geleistet wird. Die Poisson-Gleichungen gelten nur für <i>reversible</i> (quasistatische) adiabatische Prozesse.`,
    pitfalls: R`<ul><li>$pV^\kappa$ mit $TV^\kappa$ verwechseln (richtig: $TV^{\kappa-1}$).</li>
<li>Die Poisson-Gleichungen für irreversible Prozesse verwenden.</li>
<li>Glauben, bei adiabatischen Prozessen gelte die Zustandsgleichung nicht mehr.</li></ul>`
  },
  {
    id: "ph10_ruechardt",
    title: "Messung von κ = C_p/C_V (nach Rüchardt): dT/T = −(2/f) dV/V",
    category: "10.6 Ideale Gase",
    type: "experiment",
    front: R`Wie kann man durch periodische adiabatische Kompression und Expansion den Adiabatenexponenten $\kappa$ bzw. die Zahl der Freiheitsgrade $f$ eines Gases bestimmen? Welche Beziehung zwischen $dT/T$ und $dV/V$ wird ausgenutzt, und wie misst man die Temperaturänderung?`,
    back: R`Aus der Adiabatengleichung (10.53):
$$C_V\,dT = -RT\frac{dV}V\;\Rightarrow\;\frac{dT}T = -\frac R{C_V}\frac{dV}V = -\frac{R}{Rf/2}\frac{dV}V\qquad(10.58,\,10.59)$$
$$\frac{dT}T = -\frac2f\frac{dV}V\qquad(10.60)$$
Die relative Temperaturänderung bei einer kleinen, schnellen (adiabatischen) Volumenänderung hängt nur von $f$ ab, und $\kappa = 1+\frac2f$.<br><br>
<b>Messung:</b> mit einem feinen Kupferdraht, dessen elektrischer Widerstand temperaturabhängig ist und der so dünn ist, dass seine Wärmekapazität vernachlässigbar ist (er folgt der Gastemperatur schnell).`,
    meta: "Skript: Abschnitt 10.6.4.4, Gl. (10.58)–(10.60), S. 302–303",
    explanation: R`<b>Intuition:</b> Drückt man ein Gas schnell um 1 % zusammen, erwärmt es sich um $\frac2f$ Prozent. Einatomige Gase ($f = 3$) erwärmen sich stärker als zweiatomige ($f = 5$), weil sich die Kompressionsarbeit auf weniger Freiheitsgrade verteilt.<br><br>
<b>Warum schnell?</b> Damit während der Kompression keine Wärme an die Wände abfliesst (adiabatisch). Andererseits langsam genug, dass das Gas im Gleichgewicht bleibt. Periodisches Pumpen mit einigen Hz erfüllt beides.<br><br>
<b>Klassische Rüchardt-Methode (Ergänzung):</b> Eine Kugel schwingt in einem Rohr auf einem Gaspolster. Die Rückstellkraft kommt aus der adiabatischen Druckänderung $dp = -\kappa p\,dV/V$; aus der Schwingungsdauer $T = 2\pi\sqrt{mV/(\kappa pA^2)}$ folgt $\kappa$.<br><br>
<b>Zusammenhang:</b> Schallwellen sind ebenfalls adiabatisch; die Schallgeschwindigkeit $c = \sqrt{\kappa RT/M}$ liefert $\kappa$. Newton rechnete isotherm und lag 15 % daneben; Laplace korrigierte mit $\kappa$.`,
    derivation: R`Klassische Rüchardt-Schwingung (Ergänzung; Kugel Masse $m$ in Rohr mit Querschnitt $A$ auf Gasvolumen $V$):
<ol class="fc-steps">
<li>$pV^\kappa = \text{konst.}\Rightarrow dp = -\kappa p\dfrac{dV}V$<em>Adiabatisch differenziert.</em></li>
<li>$dV = Ax$, $F = A\,dp = -\dfrac{\kappa pA^2}Vx$<em>Auslenkung $x$ der Kugel ändert das Volumen; Druckänderung mal Fläche.</em></li>
<li>$m\ddot x = -\dfrac{\kappa pA^2}Vx$<em>Harmonischer Oszillator mit „Federkonstante“ $\kappa pA^2/V$.</em></li>
<li>$\omega^2 = \dfrac{\kappa pA^2}{mV}\Rightarrow\kappa = \dfrac{4\pi^2mV}{pA^2T^2}$<em>Aus der gemessenen Periode $T$.</em></li>
</ol>`,
    example: R`Volumen um $1\,\%$ verkleinert, $T = 300\,\text{K}$: Argon ($f = 3$): $\Delta T = \frac23\cdot0{,}01\cdot300 = 2{,}0\,\text{K}$; Luft ($f = 5$): $1{,}2\,\text{K}$.<br>
Schall in Luft bei $20\,^\circ\text{C}$: $c = \sqrt{1{,}4\cdot8{,}314\cdot293/0{,}029} = 343\,\text{m/s}$.`,
    counterexample: R`<b>Langsame Kompression:</b> Pumpt man so langsam, dass die Wände Wärme austauschen, wird der Prozess isotherm, und $dT\to0$ – man würde fälschlich $f\to\infty$ bzw. $\kappa\to1$ messen. Die Methode verlangt adiabatische Bedingungen.`,
    pitfalls: R`<ul><li>Die Masse des Messfühlers vernachlässigen, obwohl er träge ist.</li>
<li>Die Beziehung mit dem Exponenten $\kappa$ statt $\kappa-1$ aufschreiben.</li>
<li>Bei der Schallgeschwindigkeit die isotherme Formel $\sqrt{p/\rho}$ verwenden.</li></ul>`
  },

  // ========================================================================
  // 10.7 ZWEITER HAUPTSATZ
  // ========================================================================
  {
    id: "ph10_zweiter_hauptsatz",
    title: "Zweiter Hauptsatz: Formulierungen nach Thomson (Kelvin) und Clausius",
    category: "10.7 Der Zweite Hauptsatz der Wärmelehre",
    type: "gesetz",
    front: R`Formuliere den <b>Zweiten Hauptsatz</b> nach <b>Thomson</b> und nach <b>Clausius</b>. Was ist jeweils verboten, was erlaubt? Warum ist das kein Widerspruch zum Ersten Hauptsatz?`,
    back: R`Der Zweite Hauptsatz trägt der Tatsache Rechnung, dass sich Energieformen nicht beliebig ineinander umwandeln lassen.
<ul><li><b>Thomson (Kelvin):</b> Es gibt keine periodisch wirkende Maschine, die einem Wärmereservoir Wärme $\delta Q$ entzieht und vollständig in Arbeit verwandelt, ohne dass im System oder in der Umgebung Veränderungen zurückbleiben. Die vollständige Umwandlung von Arbeit in Wärme ist dagegen ohne Weiteres möglich (Abb. 10.15).</li>
<li><b>Clausius:</b> Es gibt keine periodisch wirkende Maschine, die Wärme von einem kälteren Reservoir ($T_K$) zu einem wärmeren ($T_W\gt T_K$) transportiert, ohne dass Arbeit geleistet oder sonst Energie von aussen zugeführt wird. Umgekehrt fliesst Wärme „von selbst“ vom Wärmeren zum Kälteren (Abb. 10.16).</li></ul>
Beide Formulierungen sind gleichwertig: Eine Maschine, die die eine verletzt, liesse sich zu einer kombinieren, die die andere verletzt (vgl. Super-Carnot-Argument, 10.7.2).`,
    meta: "Skript: Abschnitt 10.7.1, Abb. 10.15–10.16, S. 303–304",
    explanation: R`<b>Intuition:</b> Energie ist zwar erhalten, aber nicht gleichwertig. Geordnete Energie (Arbeit) lässt sich vollständig „verschmieren“ (Reibung), ungeordnete (Wärme) aber nicht vollständig „ordnen“. Wie beim Mischen von Kaffee und Milch: leicht zu mischen, unmöglich zu entmischen.<br><br>
<b>Schlüsselwort „periodisch“:</b> Einmalig kann Wärme vollständig in Arbeit übergehen (isotherme Expansion, 10.6.4.2), aber dann bleibt eine Veränderung (expandiertes Gas). Eine Maschine, die immer wieder in den Anfangszustand zurückkehrt, muss einen Teil der Wärme an ein kälteres Reservoir abgeben.<br><br>
<b>Kein Widerspruch zum 1. Hauptsatz:</b> Der Erste sagt, was energetisch erlaubt ist; der Zweite, welche Richtung Prozesse nehmen. Ein Perpetuum mobile zweiter Art (Schiff, das dem Meer Wärme entzieht und fährt) verletzt den Ersten nicht, aber den Zweiten.<br><br>
<b>Zusammenhang:</b> Quantitativ wird der Zweite Hauptsatz über die Entropie: $\Delta S\ge0$ im abgeschlossenen System (10.7.3, 10.7.4). Kühlschrank und Wärmepumpe verletzen Clausius nicht: Sie brauchen Arbeit.`,
    derivation: R`Thomson verletzt $\Rightarrow$ Clausius verletzt:
<ol class="fc-steps">
<li>Annahme: Maschine M entzieht $T_W$ die Wärme $Q$ und liefert $W = Q$<em>Verletzung der Thomson-Formulierung.</em></li>
<li>$W$ treibt eine Wärmepumpe P: Sie nimmt $Q_K$ aus $T_K$ und gibt $Q_K+W$ an $T_W$ ab<em>Erlaubt nach dem 1. Hauptsatz; braucht Arbeit $W$.</em></li>
<li>Bilanz für $T_W$: $-Q+(Q_K+Q) = +Q_K$<em>Das warme Reservoir gewinnt netto $Q_K$.</em></li>
<li>Bilanz für $T_K$: $-Q_K$; keine Arbeit von aussen<em>Die Kombination M+P transportiert Wärme von kalt nach warm, ohne Arbeit: Verletzung von Clausius.</em></li>
</ol>`,
    example: R`<b>Erlaubt:</b> Bremsen eines Autos ($W\to Q$ vollständig), Wärmeleitung von der heissen Herdplatte in den Topf, Kühlschrank mit Stromanschluss.<br>
<b>Verboten:</b> Ein Ozeandampfer, der dem Meerwasser ($15\,^\circ\text{C}$) Wärme entzieht und damit fährt, ohne ein kälteres Reservoir zu benutzen; ein Kühlschrank ohne Stromanschluss.`,
    counterexample: R`<b>Lokale Ordnung entsteht durchaus:</b> Wasser gefriert zu geordneten Kristallen, Lebewesen bauen komplexe Strukturen auf. Das widerspricht dem Zweiten Hauptsatz nicht, weil diese Systeme nicht abgeschlossen sind: Sie geben Wärme (und damit Entropie) an die Umgebung ab, deren Entropie stärker zunimmt.`,
    pitfalls: R`<ul><li>Das Wort „periodisch“ weglassen und die isotherme Expansion für eine Verletzung halten.</li>
<li>Glauben, ein Kühlschrank verletze Clausius.</li>
<li>Den Zweiten Hauptsatz als Folge des Ersten ansehen.</li></ul>`
  },
  {
    id: "ph10_kreisprozesse_motoren",
    title: "Kreisprozesse im pV-Diagramm: Ottomotor, Dieselmotor, Stirlingmotor",
    category: "10.7 Der Zweite Hauptsatz der Wärmelehre",
    type: "konzept",
    front: R`Beschreibe die Schritte des <b>Otto</b>-, des <b>Diesel</b>- und des <b>Stirling</b>-Kreisprozesses im pV-Diagramm. Was ist die vom Gas geleistete Nettoarbeit, und wovon hängt der Umlaufsinn ab?`,
    back: R`Nettoarbeit eines Kreisprozesses = umschlossene Fläche im pV-Diagramm.<br><br>
<b>Ottomotor</b> (Abb. 10.17): A ($0\to1$) Ansaugen bei konstantem Druck; B ($1\to2$) adiabatische Kompression; C ($2\to3$) Wärmezufuhr durch Explosion (isochor); D ($3\to4$) Arbeitshub (adiabatische Expansion); E ($4\to1$) Ausströmen der heissen Gase (isochore Druckabnahme); F ($1\to0$) Kolben wird geleert.<br><br>
<b>Dieselmotor</b> (Abb. 10.18): ähnlich, aber der Brennstoff wird erst bei C eingespritzt, sodass der Druck während der Verbrennung annähernd konstant bleibt (isobar). Höhere Kompression möglich, besserer Wirkungsgrad.<br><br>
<b>Stirlingmotor</b> (Heissluftmotor ohne Ventile, Abb. 10.23, 10.24): A isotherme Expansion bei $T_1$ (Arbeitsabgabe); B isochore Abkühlung (Verdrängerkolben schiebt Gas in den Kaltraum); C isotherme Kompression bei $T_3$; D isochore Erwärmung. Verdränger- und Arbeitskolben sind um $90^\circ$ phasenverschoben.`,
    meta: "Skript: Abschnitt 10.7.2, Abb. 10.17–10.18, 10.23–10.24, S. 305–313",
    explanation: R`<b>Intuition:</b> Jede Wärmekraftmaschine expandiert ein heisses Gas (viel Druck, viel Arbeit) und komprimiert es kalt (wenig Druck, wenig Arbeit). Die Differenz ist der Gewinn. Im Diagramm verläuft die Expansion oben, die Kompression unten: Umlauf im Uhrzeigersinn = Maschine liefert Arbeit.<br><br>
<b>Umkehrbarkeit:</b> Läuft der Stirlingmotor andersherum (Schwungrad von Hand angetrieben), wird er zur Wärmepumpe oder Kältemaschine. Im Hörsaalversuch: Im Uhrzeigersinn angeworfen läuft er frei, im Gegenuhrzeigersinn nicht; mit flüssigem Stickstoff statt Flamme läuft er umgekehrt.<br><br>
<b>Abhängigkeiten (Ergänzung):</b> Der ideale Otto-Wirkungsgrad hängt nur vom Verdichtungsverhältnis $\varepsilon = V_1/V_2$ ab: $\eta = 1-\varepsilon^{1-\kappa}$. Diesel erreicht höhere $\varepsilon$, weil nur Luft verdichtet wird (kein vorzeitiges Klopfen).<br><br>
<b>Zusammenhang:</b> Keiner dieser Prozesse übertrifft den Carnot-Wirkungsgrad zwischen ihren Extremtemperaturen (10.7.2).`,
    derivation: R`Idealer Otto-Wirkungsgrad (Ergänzung; Luft als ideales Gas, Verdichtung $\varepsilon = V_1/V_2$):
<ol class="fc-steps">
<li>$Q^\swarrow_{23} = \nu C_V(T_3-T_2)$, $Q^\nearrow_{41} = \nu C_V(T_4-T_1)$<em>Wärme fliesst nur bei den isochoren Schritten.</em></li>
<li>$T_2 = T_1\varepsilon^{\kappa-1}$, $T_3 = T_4\varepsilon^{\kappa-1}$<em>Poisson (10.55) für die beiden Adiabaten.</em></li>
<li>$T_3-T_2 = (T_4-T_1)\varepsilon^{\kappa-1}$<em>Differenz der beiden Gleichungen.</em></li>
<li>$\eta = 1-\dfrac{Q^\nearrow_{41}}{Q^\swarrow_{23}} = 1-\varepsilon^{1-\kappa}$<em>Nettoarbeit/zugeführte Wärme.</em></li>
</ol>`,
    example: R`Otto mit $\varepsilon = 10$, $\kappa = 1{,}4$: $\eta_\text{ideal} = 1-10^{-0{,}4} = 60\,\%$; reale Benzinmotoren erreichen etwa $25$–$35\,\%$, Dieselmotoren bis über $40\,\%$.<br>
Stirling im Hörsaal: Heissraum $\approx400\,^\circ\text{C}$, Kühlwasser $20\,^\circ\text{C}$: Carnot-Grenze $1-293/673 = 56\,\%$.`,
    counterexample: R`<b>Fläche ≠ Wirkungsgrad:</b> Ein Kreisprozess mit grosser Fläche (viel Arbeit pro Zyklus) kann trotzdem einen schlechten Wirkungsgrad haben, wenn er dafür sehr viel Wärme braucht. Der Wirkungsgrad ist das Verhältnis Fläche/zugeführte Wärme, nicht die Fläche allein.`,
    pitfalls: R`<ul><li>Die Fläche unter einer einzelnen Kurve statt der umschlossenen Fläche nehmen.</li>
<li>Den Umlaufsinn ignorieren (Maschine vs. Wärmepumpe).</li>
<li>Ansaugen und Ausstossen (A, F) als Beitrag zur Nettoarbeit zählen; sie heben sich auf.</li></ul>`
  },
  {
    id: "ph10_carnot_prozess",
    title: "Carnot-Prozess und Carnot-Wirkungsgrad η_C = 1 − T_k/T_w",
    category: "10.7 Der Zweite Hauptsatz der Wärmelehre",
    type: "herleitung",
    front: R`Beschreibe die vier Schritte des <b>Carnot-Prozesses</b> mit einem idealen Gas und berechne für jeden Schritt Arbeit und Wärme. Leite die Schliessungsbedingung $V_1V_3 = V_2V_4$ und den <b>Carnot-Wirkungsgrad</b> her.`,
    back: R`Zwischen $T_w\equiv T_1$ und $T_k\equiv T_3$ (Abb. 10.19, 10.20, Tab. 10.3):
<ul><li><b>A</b> ($1\to2$) isotherme Expansion bei $T_w$: $W_1^\nearrow = Q_1^\swarrow = \nu RT_w\ln\frac{V_2}{V_1}$ (10.61)</li>
<li><b>B</b> ($2\to3$) adiabatische Expansion $T_w\to T_k$: $W_2^\nearrow = \nu C_V(T_w-T_k)$, $Q = 0$ (10.62)</li>
<li><b>C</b> ($3\to4$) isotherme Kompression bei $T_k$: $W_3^\swarrow = Q_2^\nearrow = \nu RT_k\ln\frac{V_3}{V_4}$</li>
<li><b>D</b> ($4\to1$) adiabatische Kompression $T_k\to T_w$: $W_4^\swarrow = \nu C_V(T_w-T_k)$, $Q = 0$</li></ul>
Adiabaten (10.55): $T_wV_2^{\kappa-1} = T_kV_3^{\kappa-1}$, $T_wV_1^{\kappa-1} = T_kV_4^{\kappa-1}$; Division:
$$V_1V_3 = V_2V_4\;\Leftrightarrow\;\frac{V_2}{V_1} = \frac{V_3}{V_4}\qquad(10.63\text{–}10.65)$$
$$\eta_C = \frac{W_1^\nearrow+W_2^\nearrow-W_3^\swarrow-W_4^\swarrow}{Q_1^\swarrow} = \frac{T_w-T_k}{T_w}\lt1\qquad(10.66)$$`,
    meta: "Skript: Abschnitt 10.7.2, Gl. (10.61)–(10.66), Tab. 10.3–10.4, Abb. 10.19–10.20, S. 306–309",
    explanation: R`<b>Intuition:</b> Wärme wird nur bei den beiden extremen Temperaturen ausgetauscht, und zwar ohne Temperaturdifferenz zwischen Gas und Reservoir (reversibel). Die Adiabaten bringen das Gas ohne Wärmeaustausch von einer Temperatur zur anderen. Das ist der verlustfreieste denkbare Weg.<br><br>
<b>Abhängigkeiten:</b> $\eta_C$ hängt nur von den beiden Temperaturen ab, nicht vom Arbeitsgas, nicht von den Volumina. Je heisser die Quelle und je kälter die Senke, desto besser. $\eta_C\to1$ nur für $T_k\to0$ (unerreichbar) oder $T_w\to\infty$.<br><br>
<b>Warum heben sich die Adiabaten auf?</b> $W_2^\nearrow = W_4^\swarrow$: Beide überbrücken dieselbe Temperaturdifferenz, und beim idealen Gas hängt $\Delta U$ nur von $\Delta T$ ab. Die Nettoarbeit ist also $Q_1-Q_2 = \nu R(T_w-T_k)\ln\frac{V_2}{V_1}$.<br><br>
<b>Zusammenhang:</b> Aus $\frac{Q_2}{Q_1} = \frac{T_k}{T_w}$ folgt $\frac{Q_1}{T_w} = \frac{Q_2}{T_k}$: Die Grösse $Q/T$ bleibt erhalten – der Ursprung des Entropiebegriffs (10.7.4).`,
    derivation: R`<ol class="fc-steps">
<li>$\dfrac{T_wV_2^{\kappa-1}}{T_wV_1^{\kappa-1}} = \dfrac{T_kV_3^{\kappa-1}}{T_kV_4^{\kappa-1}}\Rightarrow\dfrac{V_2}{V_1} = \dfrac{V_3}{V_4}$<em>Division der Adiabatengleichungen (10.63)/(10.64), Wurzel ziehen (10.65).</em></li>
<li>$W_\text{netto} = \nu RT_w\ln\dfrac{V_2}{V_1}-\nu RT_k\ln\dfrac{V_3}{V_4}+\underbrace{\nu C_V(T_w-T_k)-\nu C_V(T_w-T_k)}_{=0}$<em>Summe aller Arbeiten mit Vorzeichen; die Adiabatenbeiträge heben sich weg.</em></li>
<li>$W_\text{netto} = \nu R(T_w-T_k)\ln\dfrac{V_2}{V_1}$<em>Mit (10.65).</em></li>
<li>$\eta_C = \dfrac{W_\text{netto}}{Q_1^\swarrow} = \dfrac{\nu R(T_w-T_k)\ln(V_2/V_1)}{\nu RT_w\ln(V_2/V_1)} = \dfrac{T_w-T_k}{T_w}$<em>Nur die Wärme bei $T_w$ wird „bezahlt“ (10.66).</em></li>
</ol>`,
    example: R`Abb. 10.20: $T_w = 1200\,\text{K}$, $T_k = 800\,\text{K}$: $\eta_C = \tfrac13$.<br>
Dampfkraftwerk ($550\,^\circ\text{C}$ Frischdampf, $27\,^\circ\text{C}$ Kühlwasser): $\eta_C = 1-300/823 = 64\,\%$; real erreicht man etwa $45\,\%$.<br>
Mit $1\,\text{mol}$, $V_2/V_1 = 2$: $Q_1 = 6{,}9\,\text{kJ}$, $W_\text{netto} = 2{,}3\,\text{kJ}$.`,
    counterexample: R`<b>Celsius-Temperaturen einsetzen:</b> Dieselben Reservoirs in °C ($927$ und $527\,^\circ\text{C}$) ergäben $(927-527)/927 = 43\,\%$ statt richtig $(1200-800)/1200 = 33\,\%$. Und eine Maschine zwischen $100\,^\circ\text{C}$ und $0\,^\circ\text{C}$ hätte „$100\,\%$“ – absurd. Der Carnot-Wirkungsgrad verlangt absolute Temperaturen.`,
    pitfalls: R`<ul><li>Temperaturen in °C einsetzen.</li>
<li>Den Wirkungsgrad auf die Gesamtwärme statt nur auf die bei $T_w$ zugeführte Wärme beziehen.</li>
<li>Annehmen, ein anderes Arbeitsgas ergebe einen anderen Carnot-Wirkungsgrad.</li></ul>`
  },
  {
    id: "ph10_carnot_optimal_waermepumpe",
    title: "Carnot ist optimal; Wärmepumpe und Kältemaschine",
    category: "10.7 Der Zweite Hauptsatz der Wärmelehre",
    type: "herleitung",
    front: R`Zeige, dass keine Wärmekraftmaschine zwischen $T_w$ und $T_k$ einen grösseren Wirkungsgrad als $\eta_C$ haben kann (Super-Carnot-Argument). Wie gross sind die Leistungszahlen einer idealen <b>Wärmepumpe</b> und einer idealen <b>Kältemaschine</b>?`,
    back: R`Jede reale Maschine: $\eta_\text{real}\lt\eta_C = \dfrac{T_w-T_k}{T_w}$ (10.67).<br><br>
<b>Rückwärts laufende Carnot-Maschine:</b>
$$\eta_W = \frac{\delta Q_1^\nearrow}{\delta W^\swarrow} = \frac{T_w}{T_w-T_k} = \frac1{\eta_C}\gt1\quad\text{(Wärmepumpe)},\qquad\eta_K = \frac{\delta Q_2^\swarrow}{\delta W^\swarrow} = \frac{T_k}{T_w-T_k}\quad\text{(Kältemaschine)}\qquad(10.68,\,10.69)$$
$\eta_K\to0$ für $T_k\to0$: Je kälter es schon ist, desto schwieriger wird weiteres Kühlen.<br><br>
<b>Beweis</b> (Abb. 10.22): Angenommen, es gäbe eine Super-Maschine S mit $\eta_S\gt\eta_C$. Sie entnimmt $\delta Q_1$ und liefert $\delta W = \eta_S\delta Q_1$ (10.70). Damit treibt man eine Carnot-Wärmepumpe C, die ins warme Reservoir
$$\delta Q_1' = \eta_W\delta W = \frac{\eta_S}{\eta_C}\delta Q_1\gt\delta Q_1\qquad(10.71)$$
zurückpumpt. Netto fliesst Wärme ohne Arbeit von kalt nach warm (Clausius verletzt), oder man könnte Arbeit auskoppeln und nur ein Reservoir abkühlen (Thomson verletzt). Widerspruch.`,
    meta: "Skript: Abschnitt 10.7.2, Gl. (10.67)–(10.71), Abb. 10.21–10.22, S. 309–311",
    explanation: R`<b>Intuition:</b> Eine Wärmepumpe „verschiebt“ Wärme bergauf, statt sie zu erzeugen. Deshalb kann sie mehr Wärme ins Haus bringen, als sie an elektrischer Arbeit verbraucht: Die Umgebungswärme ist gratis, nur das Hochpumpen kostet.<br><br>
<b>Abhängigkeiten:</b> $\eta_W = \frac{T_w}{T_w-T_k}$ ist umso grösser, je kleiner der Temperaturhub. Deshalb arbeiten Wärmepumpen mit Fussbodenheizung (tiefe Vorlauftemperatur) besser als mit Radiatoren, und Erdsonden (konstant $\sim10\,^\circ\text{C}$) besser als Luft im Winter.<br><br>
<b>Kühlen bei tiefen Temperaturen:</b> $\eta_K = \frac{T_k}{T_w-T_k}$: Um bei $T_k = 1\,\text{K}$ ein Joule zu entziehen, braucht man bei $T_w = 300\,\text{K}$ mindestens $299\,\text{J}$ Arbeit. Das ist der thermodynamische Grund für den Aufwand der Tieftemperaturphysik (10.9) und eine Vorstufe des Dritten Hauptsatzes.<br><br>
<b>Zusammenhang:</b> Das Argument zeigt auch, dass alle reversiblen Maschinen zwischen denselben Temperaturen denselben Wirkungsgrad haben – unabhängig vom Arbeitsmedium. Damit kann man die absolute Temperatur substanzunabhängig definieren.`,
    derivation: R`Leistungszahl der Wärmepumpe:
<ol class="fc-steps">
<li>$\dfrac{Q_2}{Q_1} = \dfrac{T_k}{T_w}$<em>Aus dem Carnot-Prozess: $Q_1 = \nu RT_w\ln\frac{V_2}{V_1}$, $Q_2 = \nu RT_k\ln\frac{V_3}{V_4}$ und $\frac{V_2}{V_1} = \frac{V_3}{V_4}$.</em></li>
<li>$W^\swarrow = Q_1^\nearrow-Q_2^\swarrow$<em>Energiebilanz der rückwärts laufenden Maschine.</em></li>
<li>$\eta_W = \dfrac{Q_1}{Q_1-Q_2} = \dfrac{1}{1-T_k/T_w} = \dfrac{T_w}{T_w-T_k}$<em>(10.68).</em></li>
<li>$\eta_K = \dfrac{Q_2}{Q_1-Q_2} = \dfrac{T_k}{T_w-T_k} = \eta_W-1$<em>(10.69).</em></li>
</ol>`,
    example: R`<b>Wärmepumpe</b> (Aussenluft $0\,^\circ\text{C}$, Heizwasser $35\,^\circ\text{C}$): $\eta_W = 308/35 = 8{,}8$; reale Geräte erreichen etwa 3–4. Mit $1\,\text{kWh}$ Strom bekommt man also $3$–$4\,\text{kWh}$ Wärme.<br>
<b>Kühlschrank</b> ($5\,^\circ\text{C}$ innen, $25\,^\circ\text{C}$ Küche): $\eta_K = 278/20 = 13{,}9$ ideal.`,
    counterexample: R`<b>Elektroheizung</b> wandelt $1\,\text{kWh}$ Strom in genau $1\,\text{kWh}$ Wärme um ($\eta = 1$). Das ist energetisch „verlustfrei“, aber thermodynamisch verschwenderisch: Eine Wärmepumpe würde mit demselben Strom das Mehrfache liefern. Ein Wirkungsgrad von 100 % ist hier nicht das Optimum.`,
    pitfalls: R`<ul><li>Leistungszahlen $\gt1$ für einen Verstoss gegen die Energieerhaltung halten.</li>
<li>$\eta_W$ und $\eta_K$ verwechseln ($\eta_W = \eta_K+1$).</li>
<li>Den Carnot-Wirkungsgrad für erreichbar halten.</li></ul>`
  },
  {
    id: "ph10_entropie_statistisch",
    title: "Entropie und Wahrscheinlichkeit: S = k ln W",
    category: "10.7 Der Zweite Hauptsatz der Wärmelehre",
    type: "konzept",
    front: R`Was bedeutet Boltzmanns Formel $S = k\ln W$? Berechne die Wahrscheinlichkeit, dass sich alle Moleküle eines idealen Gases zufällig im Teilvolumen $V_1$ des Behälters $V_0$ befinden, und die zugehörige Entropieänderung. Warum strebt ein abgeschlossenes System dem wahrscheinlichsten Zustand zu?`,
    back: R`$$S = k\ln W\qquad(10.72)$$
$k = R/N_A$: Boltzmann-Konstante; $W$: Wahrscheinlichkeit (bzw. Anzahl der Realisierungsmöglichkeiten) des Zustands (10.73).<br><br>
<b>Beispiel</b> (Abb. 10.25): Für ein Molekül ist $w = V_1/V_0$ (10.74); für $N_A\nu$ unabhängige Moleküle:
$$W = w^{N_A\nu} = \left(\frac{V_1}{V_0}\right)^{N_A\nu}\qquad(10.75)$$
$$\Delta S = k\ln W = -kN_A\nu\ln\frac{V_0}{V_1} = -R\nu\ln\frac{V_0}{V_1}\qquad(10.76)$$
Je kleiner $V_1$, desto unwahrscheinlicher und desto kleiner die Entropie. Da solche extrem unwahrscheinlichen Zustände nie beobachtet werden:
$$\Delta S\ge0\qquad(10.77)$$
Jedes abgeschlossene System strebt seinem wahrscheinlichsten (ungeordnetsten) Zustand zu (abgesehen von kleinen Fluktuationen).`,
    meta: "Skript: Abschnitt 10.7.3, Gl. (10.72)–(10.77), Abb. 10.25, S. 314–315",
    explanation: R`<b>Intuition:</b> Es gibt unvorstellbar viel mehr Möglichkeiten, $10^{23}$ Moleküle gleichmässig im Raum zu verteilen, als sie alle in eine Ecke zu packen. Ein System, das zufällig zwischen seinen Möglichkeiten herumspringt, findet sich praktisch immer in der riesigen Mehrheit der „ungeordneten“ Zustände wieder. Der Zweite Hauptsatz ist also ein statistisches Gesetz – aber bei $10^{23}$ Teilchen absolut zuverlässig.<br><br>
<b>Warum der Logarithmus?</b> Wahrscheinlichkeiten unabhängiger Teilsysteme multiplizieren sich; der Logarithmus macht daraus eine Summe. So wird die Entropie additiv (extensiv) wie Energie oder Masse.<br><br>
<b>Abhängigkeiten:</b> $\Delta S\propto\nu$ (doppelte Gasmenge, doppelte Entropieänderung) und $\propto\ln(V_0/V_1)$.<br><br>
<b>Zusammenhang:</b> Die rein thermodynamische Rechnung mit $dS = \delta Q_\text{rev}/T$ liefert exakt dasselbe Ergebnis (10.79). Kap. 14 vertieft die statistische Begründung (Boltzmann-Verteilung).`,
    derivation: R`Warum wir es nie beobachten (kleines und grosses $N$):
<ol class="fc-steps">
<li>$W = (1/2)^N$ für $V_1 = V_0/2$<em>Jedes Molekül unabhängig mit Wahrscheinlichkeit $\tfrac12$ links.</em></li>
<li>$N = 4$: $W = 1/16$<em>Bei wenigen Teilchen kommt das oft vor (Fluktuation).</em></li>
<li>$N = 100$: $W = 7{,}9\cdot10^{-31}$<em>Schon praktisch nie.</em></li>
<li>$N = 6\cdot10^{23}$: $\ln W = -4{,}2\cdot10^{23}$<em>Unvorstellbar klein; $W\approx10^{-1{,}8\cdot10^{23}}$.</em></li>
<li>$\Delta S = k\ln W = -kN\ln2 = -R\ln2 = -5{,}76\,\text{J/K}$ (für 1 mol)<em>Endliche, gut messbare Entropieänderung (10.76).</em></li>
</ol>`,
    example: R`<b>Kartenstapel:</b> Es gibt $52!\approx8\cdot10^{67}$ Reihenfolgen, aber nur eine „sortierte“. Mischen führt praktisch nie zur Ordnung zurück.<br>
$1\,\text{mol}$ Gas auf ein Zehntel des Behälters: $\Delta S = -R\ln10 = -19{,}1\,\text{J/K}$.`,
    counterexample: R`<b>Kleine Systeme:</b> Bei 4 Molekülen findet man alle in der linken Hälfte in $\tfrac1{16}$ der Zeit; die Entropie „nimmt“ dann kurzfristig ab. Der Zweite Hauptsatz gilt für makroskopische Systeme; in der Nanowelt sind solche Fluktuationen messbar (Fluktuationstheoreme).`,
    pitfalls: R`<ul><li>$W$ als „Wahrscheinlichkeit $\le1$“ und als „Anzahl der Mikrozustände“ verwechseln: Beide unterscheiden sich um einen konstanten Faktor, der sich in Entropie<i>differenzen</i> heraushebt.</li>
<li>Entropie mit Unordnung im alltäglichen Sinn (Unaufgeräumtheit) gleichsetzen.</li>
<li>Den Zweiten Hauptsatz auf offene Systeme anwenden.</li></ul>`
  },
  {
    id: "ph10_entropie_thermodynamisch",
    title: "Thermodynamische Entropie dS = δQ_rev/T, reversible und irreversible Prozesse",
    category: "10.7 Der Zweite Hauptsatz der Wärmelehre",
    type: "herleitung",
    front: R`Wie ist die Entropie thermodynamisch definiert? Was ist ein <b>reversibler</b> Prozess, welche Prozesse sind irreversibel? Berechne $\Delta S$ für die reversible isotherme Kompression eines idealen Gases von $V_0$ auf $V_1$ und vergleiche mit der statistischen Rechnung. Formuliere den Zweiten Hauptsatz mit $S$.`,
    back: R`<b>Reversibel:</b> Kette von Gleichgewichtszuständen (unendlich langsam, quasistatisch); der ganze Vorgang lässt sich so umkehren, dass weder im System noch in der Umgebung Änderungen zurückbleiben. <b>Irreversibel:</b> Wärmeleitung, Mischen von Gasen, Reibung, Ausströmen ins Vakuum (Abb. 10.26).<br><br>
<b>Entropie</b> (Zustandsgrösse; reine Stoffe: $S(T = 0) = 0$):
$$dS = \frac{\delta Q^\swarrow_\text{rev}}T\qquad(10.78)$$
<b>Isotherme Kompression</b> (Abb. 10.27): $dU = 0\Rightarrow\delta Q^\swarrow_\text{rev} = -\delta W^\swarrow = p\,dV$:
$$\Delta S = \int\frac{p\,dV}T = R\nu\int_{V_0}^{V_1}\frac{dV}V = -R\nu\ln\frac{V_0}{V_1}\qquad(10.79)$$
Gleich wie statistisch (10.76). <b>Zweiter Hauptsatz:</b>
$$\Delta S\ge0\ \text{(abgeschlossenes System)},\qquad\oint dS = \oint\frac{\delta Q^\swarrow_\text{rev}}T = 0\ \text{(reversibler Kreisprozess)}\qquad(10.80,\,10.81)$$
Bei realen (irreversiblen) Vorgängen nimmt $S$ zu; damit ist eine Zeitrichtung ausgezeichnet.`,
    meta: "Skript: Abschnitt 10.7.4, Gl. (10.78)–(10.81), Abb. 10.26–10.27, S. 315–317",
    explanation: R`<b>Intuition:</b> $Q/T$ misst, wie viel „Unordnung“ mit einer Wärmemenge übertragen wird. Dieselbe Wärme bedeutet bei tiefer Temperatur viel mehr Unordnungszuwachs (ein kaltes, geordnetes System wird stark durcheinandergebracht) als bei hoher.<br><br>
<b>Wichtig: „rev“.</b> Die Formel gilt nur für reversible Wärmezufuhr. Für einen irreversiblen Prozess berechnet man $\Delta S$, indem man einen <i>beliebigen</i> reversiblen Ersatzweg zwischen denselben Zuständen wählt; da $S$ eine Zustandsgrösse ist, ist das Ergebnis dasselbe.<br><br>
<b>Abhängigkeiten:</b> $dS\propto1/T$. Wärmefluss von heiss ($T_1$) nach kalt ($T_2$): $\Delta S = Q\left(\frac1{T_2}-\frac1{T_1}\right)\gt0$. Daher fliesst Wärme nur in diese Richtung (Clausius).<br><br>
<b>Zusammenhang:</b> $\oint\delta Q_\text{rev}/T = 0$ ist die Verallgemeinerung von $Q_1/T_w = Q_2/T_k$ beim Carnot-Prozess. Mit $dU = T\,dS-p\,dV$ (Fundamentalgleichung) verbindet die Entropie den Ersten und Zweiten Hauptsatz.`,
    derivation: R`Freie Expansion (irreversibel, $Q = 0$, $W = 0$) von $V_1$ auf $V_2$:
<ol class="fc-steps">
<li>$\Delta U = 0$, $T_\text{Ende} = T_\text{Anfang}$<em>Ideales Gas: keine Arbeit, keine Wärme, also gleiche Temperatur (Abb. 10.26).</em></li>
<li>$\displaystyle\int\frac{\delta Q}T = 0$ entlang des wirklichen Wegs<em>Darf nicht für $\Delta S$ verwendet werden: Der Prozess ist irreversibel.</em></li>
<li>Ersatzweg: reversible isotherme Expansion zwischen denselben Zuständen<em>$S$ ist Zustandsgrösse, jeder Weg liefert dasselbe $\Delta S$.</em></li>
<li>$\Delta S = \nu R\ln\dfrac{V_2}{V_1}\gt0$<em>Mit (10.79) in umgekehrter Richtung.</em></li>
<li>Abgeschlossenes System: $\Delta S_\text{gesamt}\gt0$<em>Entropie wurde erzeugt; der Prozess läuft nicht von selbst zurück.</em></li>
</ol>`,
    example: R`$1\,\text{mol}$ frei auf das doppelte Volumen: $\Delta S = R\ln2 = +5{,}76\,\text{J/K}$, obwohl $Q = 0$.<br>
$1000\,\text{J}$ fliessen von einem Körper bei $400\,\text{K}$ zu einem bei $300\,\text{K}$: $\Delta S = \frac{1000}{300}-\frac{1000}{400} = +0{,}83\,\text{J/K}$.<br>
$1\,\text{kg}$ Eis schmilzt bei $273\,\text{K}$: $\Delta S = 333\,\text{kJ}/273\,\text{K} = 1{,}22\,\text{kJ/K}$.`,
    counterexample: R`<b>„Adiabatisch, also $\Delta S = 0$“:</b> stimmt nur für reversible adiabatische Prozesse (isentrop). Die freie Expansion ist adiabatisch ($Q = 0$), aber $\Delta S\gt0$. Ebenso erzeugt Reibung in einem wärmeisolierten Gefäss Entropie.`,
    pitfalls: R`<ul><li>$\Delta S = \int\delta Q/T$ entlang eines irreversiblen Wegs berechnen.</li>
<li>$\Delta S\ge0$ auf ein Teilsystem anwenden (es kann abnehmen, wenn die Umgebung mehr zunimmt).</li>
<li>Bei veränderlicher Temperatur $\Delta S = Q/T$ statt $\int\delta Q/T$ rechnen.</li></ul>`
  },
  {
    id: "ph10_wirkungsgrad_entropie",
    title: "Wirkungsgrad aus dem Entropiesatz: η ≤ 1 − T_k/T_w",
    category: "10.7 Der Zweite Hauptsatz der Wärmelehre",
    type: "herleitung",
    front: R`Leite den maximalen Wirkungsgrad einer Wärmekraftmaschine allein aus $\Delta S\ge0$ und dem Ersten Hauptsatz her, ohne den inneren Mechanismus der Maschine zu kennen.`,
    back: R`Die Maschine entnimmt dem Reservoir $T_w$ die Wärme $\delta Q_1$ und gibt $\delta Q_2$ an das Reservoir $T_k$ ab. Nach einem Zyklus ist das Arbeitsmedium im Anfangszustand ($\Delta S_\text{Maschine} = 0$); die Entropieänderung der Reservoirs:
$$\Delta S = \frac{\delta Q_2}{T_k}-\frac{\delta Q_1}{T_w}\ge0\;\Rightarrow\;\frac{\delta Q_2}{\delta Q_1}\ge\frac{T_k}{T_w}\qquad(10.82,\,10.83)$$
Mit dem Ersten Hauptsatz $\delta Q_1 = \delta W+\delta Q_2$:
$$\eta = \frac{\delta W}{\delta Q_1} = \frac{\delta Q_1-\delta Q_2}{\delta Q_1} = 1-\frac{\delta Q_2}{\delta Q_1}\le1-\frac{T_k}{T_w} = \frac{T_w-T_k}{T_w}\qquad(10.84)$$
Gleichheit genau im reversiblen Fall (Carnot). Dasselbe Ergebnis wie in 10.7.2, aber ohne jede Annahme über das Arbeitsmedium.`,
    meta: "Skript: Abschnitt 10.7.5.1, Gl. (10.82)–(10.84), Fussnote 20, S. 317–318",
    explanation: R`<b>Intuition:</b> Wärme, die das heisse Reservoir verlässt, nimmt Entropie $Q_1/T_w$ mit. Die Arbeit trägt keine Entropie. Damit die Gesamtentropie nicht sinkt, muss mindestens die Entropie $Q_1/T_w$ irgendwo wieder abgegeben werden – als Wärme $Q_2$ an das kalte Reservoir, und dafür reicht wegen $1/T_k\gt1/T_w$ schon ein Teil der Wärme. Der Rest kann Arbeit werden.<br><br>
<b>Abhängigkeiten:</b> Die Mindestabwärme ist $Q_2^\text{min} = Q_1\frac{T_k}{T_w}$. Je kälter die Senke, desto weniger Abwärme ist nötig.<br><br>
<b>Stärke des Arguments:</b> Es gilt für jede Maschine (Dampfturbine, Thermoelement, Lebewesen…), solange sie zyklisch zwischen zwei Temperaturen arbeitet. Man braucht nur die beiden Hauptsätze.<br><br>
<b>Zusammenhang:</b> Irreversibilitäten (Reibung, Wärmeleitung über endliche Temperaturdifferenzen) erzeugen zusätzliche Entropie, die zusätzliche Abwärme erzwingt: $\eta_\text{real}\lt\eta_C$.`,
    derivation: R`<ol class="fc-steps">
<li>$\Delta S_\text{warm} = -\dfrac{\delta Q_1}{T_w}$, $\Delta S_\text{kalt} = +\dfrac{\delta Q_2}{T_k}$<em>Reservoirs bleiben auf konstanter Temperatur; Wärmeaustausch reversibel aus ihrer Sicht.</em></li>
<li>$\Delta S_\text{Maschine} = 0$<em>Zyklischer Prozess: Zustandsgrösse kehrt zum Anfangswert zurück.</em></li>
<li>$\dfrac{\delta Q_2}{T_k}-\dfrac{\delta Q_1}{T_w}\ge0$<em>Zweiter Hauptsatz für das abgeschlossene Gesamtsystem (10.82).</em></li>
<li>$\dfrac{\delta Q_2}{\delta Q_1}\ge\dfrac{T_k}{T_w}$<em>Umformen (10.83).</em></li>
<li>$\eta = 1-\dfrac{\delta Q_2}{\delta Q_1}\le1-\dfrac{T_k}{T_w}$<em>Erster Hauptsatz einsetzen (10.84).</em></li>
</ol>`,
    example: R`Maschine zwischen $600\,\text{K}$ und $300\,\text{K}$ nimmt $Q_1 = 1000\,\text{J}$ auf. Mindestens $Q_2 = 500\,\text{J}$ Abwärme, höchstens $W = 500\,\text{J}$.<br>
Gibt sie $700\,\text{J}$ ab ($\eta = 30\,\%$): erzeugte Entropie $\frac{700}{300}-\frac{1000}{600} = 0{,}67\,\text{J/K}$ pro Zyklus.`,
    counterexample: R`<b>Behauptete Maschine</b> mit $Q_1 = 1000\,\text{J}$ bei $600\,\text{K}$, $W = 600\,\text{J}$, $Q_2 = 400\,\text{J}$ bei $300\,\text{K}$: Energie stimmt (1. HS), aber $\Delta S = \frac{400}{300}-\frac{1000}{600} = -0{,}33\,\text{J/K}\lt0$. Verboten durch den Zweiten Hauptsatz – ein typischer „Erfinder-Check“.`,
    pitfalls: R`<ul><li>Die Entropieänderung der Maschine selbst über einen Zyklus nicht null setzen.</li>
<li>Vorzeichen der Reservoir-Entropien vertauschen.</li>
<li>Glauben, Arbeit transportiere Entropie.</li></ul>`
  },

  // ========================================================================
  // 10.8 REALE GASE UND FLÜSSIGKEITEN
  // ========================================================================
  {
    id: "ph10_van_der_waals",
    title: "Van-der-Waals-Gleichung: Binnendruck und Kovolumen",
    category: "10.8 Reale Gase und Flüssigkeiten",
    type: "gesetz",
    front: R`Wie lautet die <b>van-der-Waals-Gleichung</b>, und welche physikalischen Effekte beschreiben die beiden Korrekturen $a$ und $b$? Wie sehen die Isothermen von CO₂ im $pV_M$-Diagramm aus, und was passiert im Koexistenzgebiet?`,
    back: R`$$\left(p+\frac{a\nu^2}{V^2}\right)(V-\nu b) = \nu RT,\qquad\left(p+\frac a{V_M^2}\right)(V_M-b) = RT\qquad(10.85,\,10.86)$$
<ul><li><b>Binnendruck</b> $p_i = a/V_M^2$: Die gegenseitige Anziehung der Moleküle vermindert den Impulsübertrag auf die Wand; der „wirksame“ Druck ist grösser als der gemessene.</li>
<li><b>Kovolumen</b> $b\approx4N_A\Omega$ ($\Omega$: Eigenvolumen eines Moleküls): Das frei verfügbare Volumen ist kleiner als $V$.</li></ul>
<b>CO₂-Isothermen</b> (Abb. 10.28): Für $T\gtrsim340\,\text{K}$ fast ideal. Unterhalb der kritischen Temperatur ($304\,\text{K}$): Bei Verkleinerung von $V_M$ steigt $p$, bis das Koexistenzgebiet flüssig/gasförmig erreicht ist; dann verflüssigt sich ein wachsender Teil bei <b>konstantem Druck</b> (horizontale Gerade statt der theoretischen Kurve, 0 % → 100 % flüssig). Danach steigt $p$ steil an (Flüssigkeit kaum kompressibel). Oberhalb $T_K$ lässt sich das Gas auch bei höchstem Druck nicht verflüssigen.`,
    meta: "Skript: Abschnitt 10.8.1, Gl. (10.85)–(10.86), Abb. 10.28, S. 318–320",
    explanation: R`<b>Intuition:</b> Echte Moleküle sind kleine, „klebrige“ Kugeln. Weil sie Platz brauchen, steht weniger Volumen zur Verfügung ($b$); weil sie sich anziehen, werden Moleküle an der Wand von den übrigen zurückgezogen und stossen schwächer ($a$).<br><br>
<b>Warum $a/V_M^2$?</b> Die Anziehung auf ein Wandmolekül ist $\propto$ Dichte, und die Zahl der Wandstösse auch $\propto$ Dichte; zusammen $\propto(1/V_M)^2$.<br><br>
<b>Abhängigkeiten:</b> Bei grossem $V_M$ (geringe Dichte) werden beide Korrekturen klein, und man erhält das ideale Gas. Bei hohen Temperaturen dominiert der $b$-Term (Druck grösser als ideal), bei tiefen der $a$-Term (Druck kleiner als ideal).<br><br>
<b>Zusammenhang:</b> Erst die Wechselwirkung ($a\ne0$) macht Verflüssigung möglich; das ideale Gas kondensiert nie. Die Maxwell-Konstruktion (gleiche Flächen) legt die Höhe der Koexistenzgeraden fest. $a$ bestimmt auch den Joule-Thomson-Effekt (10.9.2).`,
    derivation: R`Vergleich mit dem idealen Gas (CO₂, $a = 3{,}66\cdot10^5\,\text{Pa m}^6/\text{kmol}^2$, $b = 0{,}0442\,\text{m}^3/\text{kmol}$, $T = 300\,\text{K}$):
<ol class="fc-steps">
<li>$p = \dfrac{RT}{V_M-b}-\dfrac a{V_M^2}$<em>Van der Waals nach $p$ aufgelöst (10.87).</em></li>
<li>$V_M = 0{,}5\,\text{m}^3/\text{kmol}$: $p_\text{id} = 4{,}99\,\text{MPa}$, $p_\text{vdW} = 5{,}47-1{,}46 = 4{,}01\,\text{MPa}$<em>Anziehung senkt den Druck um 20 %.</em></li>
<li>$V_M = 0{,}2\,\text{m}^3/\text{kmol}$: $p_\text{id} = 12{,}5\,\text{MPa}$, $p_\text{vdW} = 6{,}9\,\text{MPa}$<em>Formal; real liegt dieser Zustand im Koexistenzgebiet bei konstantem Dampfdruck ($\approx6{,}7\,\text{MPa}$).</em></li>
<li>$V_M\to\infty$: $p\to RT/V_M$<em>Grenzfall ideales Gas.</em></li>
</ol>`,
    example: R`Tab. 10.5: He: $a = 3450$, $10^3b = 24{,}8$; N₂: $140\,800$, $39{,}8$; CO₂: $365\,600\,\text{Pa m}^6/\text{kmol}^2$, $44{,}2\,\text{m}^3/\text{kmol}$.<br>
Kovolumen CO₂: $b/(4N_A) = 1{,}8\cdot10^{-29}\,\text{m}^3$ pro Molekül, also Radius $\approx0{,}16\,\text{nm}$ – richtige Grössenordnung.`,
    counterexample: R`<b>Van der Waals ist nur qualitativ:</b> Das kritische Verhältnis $\frac{p_KV_{MK}}{RT_K}$ ist nach van der Waals $\frac38 = 0{,}375$, gemessen für CO₂ etwa $0{,}27$ (für die meisten Gase $0{,}27$–$0{,}29$). Im Koexistenzgebiet liefert die Gleichung sogar Bereiche mit $\partial p/\partial V\gt0$ (mechanisch instabil), die real nicht auftreten.`,
    pitfalls: R`<ul><li>Die van-der-Waals-Schleife im Koexistenzgebiet für die reale Isotherme halten.</li>
<li>$a/V^2$ statt $a\nu^2/V^2$ bei Gesamtvolumen verwenden.</li>
<li>Einheiten von $a$ und $b$ (pro kmol vs. pro mol) mischen.</li></ul>`
  },
  {
    id: "ph10_kritischer_punkt",
    title: "Kritischer Punkt: V_MK = 3b, T_K = 8a/(27bR), p_K = a/(27b²)",
    category: "10.8 Reale Gase und Flüssigkeiten",
    type: "herleitung",
    front: R`Am <b>kritischen Punkt</b> hat die Isotherme eine horizontale Wendetangente. Bestimme daraus $V_{MK}$, $T_K$ und $p_K$ aus der van-der-Waals-Gleichung, und berechne das Verhältnis $\frac{p_KV_{MK}}{RT_K}$. Was passiert oberhalb von $T_K$?`,
    back: R`$$p = \frac{RT}{V_M-b}-\frac a{V_M^2}\qquad(10.87)$$
Horizontale Tangente:
$$\frac{\partial p}{\partial V_M} = -\frac{RT}{(V_M-b)^2}+\frac{2a}{V_M^3} = 0\;\Rightarrow\;RTV_M^3 = 2a(V_M-b)^2\qquad(10.88,\,10.89)$$
Wendepunkt:
$$\frac{\partial^2p}{\partial V_M^2} = \frac{2RT}{(V_M-b)^3}-\frac{6a}{V_M^4} = 0\;\Rightarrow\;2RTV_M^4 = 6a(V_M-b)^3\qquad(10.90,\,10.91)$$
Division (10.91)/(10.89) und Einsetzen:
$$V_{MK} = 3b,\qquad T_K = \frac8{27}\frac a{bR},\qquad p_K = \frac1{27}\frac a{b^2},\qquad\frac{p_KV_{MK}}{RT_K} = \frac38\qquad(10.92,\,10.93)$$
Oberhalb $T_K$ gibt es keinen Phasenübergang flüssig/gasförmig mehr: keine Verflüssigung durch Druck allein.`,
    meta: "Skript: Abschnitt 10.8.1, Gl. (10.87)–(10.93), Tab. 10.5, S. 320–321",
    explanation: R`<b>Intuition:</b> Je heisser, desto kürzer wird das horizontale Koexistenzstück der Isotherme; am kritischen Punkt schrumpft es auf einen Punkt. Flüssigkeit und Gas haben dort dieselbe Dichte und sind nicht mehr unterscheidbar. Darüber gibt es nur noch ein „überkritisches Fluid“.<br><br>
<b>Abhängigkeiten:</b> $T_K\propto a/b$: starke Anziehung (grosses $a$) hebt die kritische Temperatur (CO₂ $304\,\text{K}$, Wasser $647\,\text{K}$); kleine Anziehung ergibt tiefes $T_K$ (He $5{,}2\,\text{K}$). Deshalb ist Helium so schwer zu verflüssigen.<br><br>
<b>Umkehrung:</b> Aus gemessenen $T_K$ und $p_K$ bestimmt man $a = \frac{27R^2T_K^2}{64p_K}$ und $b = \frac{RT_K}{8p_K}$.<br><br>
<b>Zusammenhang:</b> Überkritisches CO₂ (über $31\,^\circ\text{C}$, $7{,}4\,\text{MPa}$) dient als Lösungsmittel (Entkoffeinierung). Am kritischen Punkt zeigt sich kritische Opaleszenz (starke Dichtefluktuationen streuen Licht).`,
    derivation: R`<ol class="fc-steps">
<li>$\dfrac{2RTV_M^4}{RTV_M^3} = \dfrac{6a(V_M-b)^3}{2a(V_M-b)^2}\Rightarrow2V_M = 3(V_M-b)$<em>(10.91) durch (10.89) teilen.</em></li>
<li>$V_{MK} = 3b$<em>Auflösen (10.92).</em></li>
<li>$RT_K\cdot27b^3 = 2a\cdot4b^2\Rightarrow T_K = \dfrac{8a}{27bR}$<em>In (10.89) einsetzen: $V_M-b = 2b$.</em></li>
<li>$p_K = \dfrac{RT_K}{2b}-\dfrac a{9b^2} = \dfrac{4a}{27b^2}-\dfrac{3a}{27b^2} = \dfrac{a}{27b^2}$<em>In (10.87) einsetzen.</em></li>
<li>$\dfrac{p_KV_{MK}}{RT_K} = \dfrac{a}{27b^2}\cdot3b\cdot\dfrac{27b}{8a} = \dfrac38$<em>Universell für alle van-der-Waals-Gase (10.93).</em></li>
</ol>`,
    example: R`N₂ aus Tab. 10.5 ($a = 140\,800$, $b = 0{,}0398$, $R = 8314\,\text{J/(kmol K)}$): $T_K = \frac{8\cdot140800}{27\cdot0{,}0398\cdot8314} = 126\,\text{K}$ ✓, $p_K = \frac{140800}{27\cdot0{,}0398^2} = 3{,}29\,\text{MPa}$ ✓, $V_{MK} = 0{,}119\,\text{m}^3/\text{kmol}$ ✓.<br>
Für CO₂ ergibt die Formel $295\,\text{K}$ statt gemessen $304\,\text{K}$.`,
    counterexample: R`<b>Kritischer Punkt ≠ Tripelpunkt:</b> Am Tripelpunkt koexistieren drei Phasen (fest, flüssig, gasförmig), am kritischen Punkt endet die Dampfdruckkurve, und Flüssigkeit und Gas werden identisch. Für Wasser: Tripelpunkt $0{,}01\,^\circ\text{C}$/$612\,\text{Pa}$, kritischer Punkt $374\,^\circ\text{C}$/$22{,}1\,\text{MPa}$ (Tab. 10.7).`,
    pitfalls: R`<ul><li>Nur die erste Ableitung null setzen (dann hat man irgendein Extremum, nicht den kritischen Punkt).</li>
<li>Algebrafehler bei $V_M-b = 2b$.</li>
<li>Annehmen, über $T_K$ könne man durch genug Druck verflüssigen.</li></ul>`
  },
  {
    id: "ph10_dampfdruck_latente_waerme",
    title: "Dampfdruckkurve, Phasendiagramm und latente Wärme",
    category: "10.8 Reale Gase und Flüssigkeiten",
    type: "konzept",
    front: R`Was ist die <b>Dampfdruckkurve</b>, und wo beginnt und endet sie? Was ist <b>latente Wärme</b>? Wie viel Energie braucht man, um $1\,\text{kg}$ Eis von $0\,^\circ\text{C}$ in Dampf von $100\,^\circ\text{C}$ zu verwandeln, und welcher Schritt dominiert?`,
    back: R`Im Koexistenzgebiet hängt der Druck nur von $T$ ab, nicht vom Volumen:
$$p = p(V,T)\;\to\;p_d = p_d(T)\qquad(10.94,\,10.95)$$
<b>Dampfdruckkurve:</b> Druck, bei dem Gas und Flüssigkeit im Gleichgewicht sind; begrenzt durch den <b>Tripelpunkt</b> (fest, flüssig, gasförmig koexistieren) und den <b>kritischen Punkt</b>. Zusammen mit Schmelz- und Sublimationskurve bildet sie das <b>Phasendiagramm</b> (Abb. 10.30).<br><br>
<b>Latente Wärme:</b> Bei einem Phasenübergang führt Wärmezufuhr zu keiner Temperaturerhöhung. Für die gesamte Masse $m$:
$$Q = mL_m\qquad(10.96)$$
Tab. 10.6 (bei $100\,\text{kPa}$): Wasser $L_\text{Schmelz} = 333\,\text{kJ/kg}$, $L_\text{Verd} = 2260\,\text{kJ/kg}$; Stickstoff $26$ / $200\,\text{kJ/kg}$ (Siedepunkt $77{,}35\,\text{K}$); Helium $L_\text{Verd} = 20\,\text{kJ/kg}$ ($4{,}2\,\text{K}$).`,
    meta: "Skript: Abschnitte 10.8.2.1–10.8.2.2, Gl. (10.94)–(10.96), Tab. 10.6–10.7, Abb. 10.30, S. 321–325",
    explanation: R`<b>Intuition:</b> Beim Schmelzen und Verdampfen geht die zugeführte Energie nicht in schnellere Bewegung (Temperatur), sondern in das Aufbrechen von Bindungen zwischen den Molekülen. Erst wenn alles umgewandelt ist, steigt die Temperatur wieder.<br><br>
<b>Abhängigkeiten:</b> Verdampfen kostet viel mehr als Schmelzen (Wasser: Faktor 7), weil beim Verdampfen alle Bindungen gelöst werden, beim Schmelzen nur ein Teil. $L_\text{Verd}$ hängt etwas von $T$ ab und verschwindet am kritischen Punkt (Wasser: $2503\,\text{kJ/kg}$ bei $0\,^\circ\text{C}$, $2256$ bei $100\,^\circ\text{C}$).<br><br>
<b>Siedepunkt:</b> Eine Flüssigkeit siedet, wenn ihr Dampfdruck den Umgebungsdruck erreicht. In der Höhe (tieferer Luftdruck) siedet Wasser früher; im Dampfkochtopf (höherer Druck) später.<br><br>
<b>Zusammenhang:</b> Die Steigung der Dampfdruckkurve folgt aus der latenten Wärme (Clausius-Clapeyron, 10.8.2.3). Schwitzen kühlt über die Verdunstungswärme (Hygrometrie, 10.8.2.4).`,
    derivation: R`Eis bei $0\,^\circ\text{C}$ zu Dampf bei $100\,^\circ\text{C}$ (pro kg):
<ol class="fc-steps">
<li>$Q_1 = mL_\text{Schmelz} = 333\,\text{kJ}$<em>Schmelzen bei konstanten $0\,^\circ\text{C}$.</em></li>
<li>$Q_2 = mc\Delta T = 4{,}182\cdot100\,\text{kJ} = 418\,\text{kJ}$<em>Wasser von $0$ auf $100\,^\circ\text{C}$ erwärmen.</em></li>
<li>$Q_3 = mL_\text{Verd} = 2260\,\text{kJ}$<em>Verdampfen bei konstanten $100\,^\circ\text{C}$.</em></li>
<li>$Q = 3011\,\text{kJ}$; Verdampfen $75\,\%$<em>Der Phasenübergang flüssig→gasförmig dominiert.</em></li>
</ol>`,
    example: R`<b>Flüssigstickstoff:</b> $1\,\text{L}$ ($0{,}81\,\text{kg}$) verdampft mit $0{,}81\cdot200 = 162\,\text{kJ}$. Ein Wärmeeintrag von $10\,\text{W}$ verdampft ihn in $4{,}5\,\text{h}$.<br>
<b>Helium</b>: nur $20\,\text{kJ/kg}$; $1\,\text{L}$ ($0{,}125\,\text{kg}$) braucht $2{,}5\,\text{kJ}$ – deshalb müssen Heliumkryostaten extrem gut isoliert sein.`,
    counterexample: R`<b>Überhitzen und Unterkühlen:</b> Sehr reines Wasser kann ohne Keime über $100\,^\circ\text{C}$ erhitzt werden (Siedeverzug in der Mikrowelle) oder unter $0\,^\circ\text{C}$ flüssig bleiben. Die Phasengrenzen geben das Gleichgewicht an; ob es erreicht wird, hängt von Keimbildung ab.`,
    pitfalls: R`<ul><li>Während des Phasenübergangs $Q = mc\Delta T$ verwenden.</li>
<li>Schmelz- und Verdampfungswärme verwechseln.</li>
<li>Den Tripelpunkt für den Endpunkt der Dampfdruckkurve bei hohen Temperaturen halten.</li></ul>`
  },
  {
    id: "ph10_clausius_clapeyron",
    title: "Gleichung von Clausius-Clapeyron und die Schmelzkurve des Wassers",
    category: "10.8 Reale Gase und Flüssigkeiten",
    type: "herleitung",
    front: R`Leite die <b>Clausius-Clapeyron-Gleichung</b> für die Steigung der Dampfdruckkurve über einen kleinen Carnot-Kreisprozess im Koexistenzgebiet her. Was folgt für die Schmelzkurve von Wasser, und bei welcher Temperatur siedet Wasser bei $890\,\text{hPa}$?`,
    back: R`Reversibler Kreisprozess im Koexistenzgebiet zwischen $T_1$ und $T_2 = T_1-\Delta T$ (Abb. 10.29): Verdampfen bei $T_1$ (Wärme $L$), Kondensieren bei $T_2$. Nettoarbeit = Fläche $\Delta p\,(V_d-V_\text{fl})$:
$$\eta_C = \frac{T_1-T_2}{T_1} = \frac{\Delta T}{T_1} = \frac{\delta W}{\delta Q_1} = \frac{\Delta p\,(V_d-V_\text{fl})}{L(T_1)}\qquad(10.97)$$
$$\frac{dp_d}{dT} = \frac{L_m}{T\,(V_{m,d}-V_{m,\text{fl}})},\qquad\frac{dp_d}{dT} = \frac{L_M}{T\,(V_{M,d}-V_{M,\text{fl}})}\qquad(10.98,\,10.99)$$
($V_m = 1/\rho$ spezifisches Volumen, $V_M$ molar.) Ebenso für die Schmelzkurve:
$$\frac{dp_s}{dT} = \frac{L_{m,\text{fest}\to\text{fl}}}{T\,(V_{m,\text{fl}}-V_{m,\text{fest}})}\qquad(10.102)$$
Wasser: $V_{m,\text{fl}}\lt V_{m,\text{fest}}$ (Eis schwimmt), also $\frac{dp_s}{dT}\lt0$: <b>Eis schmilzt bei erhöhtem Druck</b>.<br>
Übungsaufgabe: bei $890\,\text{hPa}$ siedet Wasser bei $\approx96\,^\circ\text{C}$.`,
    meta: "Skript: Abschnitte 10.8.2.3, 10.8.3, Gl. (10.97)–(10.99), (10.102), Abb. 10.29–10.30, Fussnoten 21–23, S. 322–324",
    explanation: R`<b>Intuition:</b> Je grösser die Verdampfungswärme, desto stärker reagiert der Dampfdruck auf die Temperatur. Und je grösser die Volumenzunahme beim Verdampfen, desto weniger muss der Druck steigen, um das Gleichgewicht zu halten.<br><br>
<b>Eleganz der Herleitung:</b> Man braucht weder ein Molekülmodell noch eine Zustandsgleichung – nur den Carnot-Wirkungsgrad, also den Zweiten Hauptsatz.<br><br>
<b>Abhängigkeiten (integrierte Form, Ergänzung):</b> Mit $V_d\gg V_\text{fl}$ und idealem Dampf $V_{M,d} = RT/p$: $\frac{d\ln p}{dT} = \frac{L_M}{RT^2}$, also $p_d\propto e^{-L_M/(RT)}$. Der Dampfdruck wächst exponentiell mit der Temperatur.<br><br>
<b>Zum Schlittschuhlaufen:</b> Das Skript nennt das Druckschmelzen als Grund. Quantitativ reicht es aber nicht: Die Schmelzkurve hat $\frac{dp}{dT}\approx-13{,}4\,\text{MPa/K}$; selbst $2$–$7\,\text{MPa}$ unter der Kufe senken den Schmelzpunkt nur um wenige Zehntel Kelvin. Bei $-10\,^\circ\text{C}$ entscheiden Reibungswärme und eine dünne, quasi-flüssige Oberflächenschicht des Eises.`,
    derivation: R`Siedepunkt bei $890\,\text{hPa}$ (integrierte Form, $L_M = 2256\,\text{kJ/kg}\cdot18{,}0\,\text{g/mol} = 40{,}6\,\text{kJ/mol}$):
<ol class="fc-steps">
<li>$\dfrac{dp}{dT}\approx\dfrac{L_Mp}{RT^2}$<em>(10.99) mit $V_{M,d}\gg V_{M,\text{fl}}$ und $V_{M,d} = RT/p$.</em></li>
<li>$\ln\dfrac{p}{p_0} = -\dfrac{L_M}R\left(\dfrac1T-\dfrac1{T_0}\right)$<em>Trennung der Variablen, $L_M$ als konstant angenommen.</em></li>
<li>$\dfrac1T = \dfrac1{373{,}15\,\text{K}}-\dfrac{8{,}314}{40\,640}\ln\dfrac{890}{1013}$<em>Bezug: $100\,^\circ\text{C}$ bei $1013\,\text{hPa}$.</em></li>
<li>$T = 369{,}5\,\text{K} = 96{,}3\,^\circ\text{C}$<em>Etwa $3{,}6\,\text{kPa}$ pro Kelvin in der Nähe von $100\,^\circ\text{C}$.</em></li>
</ol>`,
    example: R`Mount Everest ($p\approx337\,\text{hPa}$): Siedepunkt $\approx71\,^\circ\text{C}$ – Teigwaren werden kaum gar.<br>
Dampfkochtopf ($2\,\text{bar}$): Siedepunkt $\approx120\,^\circ\text{C}$.<br>
Eis: Druckerhöhung um $10\,\text{MPa}$ ($100\,\text{bar}$) senkt den Schmelzpunkt nur um $0{,}74\,\text{K}$.`,
    counterexample: R`<b>Die meisten Stoffe sind anders als Wasser:</b> Bei fast allen Stoffen ist der Festkörper dichter als die Flüssigkeit; dann ist $\frac{dp_s}{dT}\gt0$, und Druck <i>erhöht</i> den Schmelzpunkt. Die negative Steigung ist eine Anomalie des Wassers (und weniger anderer Stoffe wie Bismut, Silizium).`,
    pitfalls: R`<ul><li>Spezifische und molare Grössen in (10.98)/(10.99) mischen.</li>
<li>Bei der Schmelzkurve das Vorzeichen von $V_\text{fl}-V_\text{fest}$ übersehen.</li>
<li>Die integrierte Form über grosse Temperaturbereiche mit konstantem $L$ verwenden.</li></ul>`
  },
  {
    id: "ph10_hygrometrie",
    title: "Relative Luftfeuchtigkeit und Taupunkt",
    category: "10.8 Reale Gase und Flüssigkeiten",
    type: "beispiel",
    front: R`Wie ist die <b>relative Feuchtigkeit</b> $\varphi$ definiert? Kalte Luft bei $0\,^\circ\text{C}$ und $\varphi = 100\,\%$ wird ohne Wasserzufuhr auf $20\,^\circ\text{C}$ erwärmt. Wie gross ist $\varphi$ danach? Warum beschlägt eine Brille, und warum kann man in den Tropen schlecht schwitzen?`,
    back: R`Direkt über einer Flüssigkeit ist der Partialdruck des Dampfes gleich dem Dampfdruck $p_d$; in der freien Luft herrscht ein effektiver Partialdruck $p_\text{eff}$ (Diffusion langsam):
$$\varphi\,[\%] = 100\,\frac{p_\text{eff}}{p_d(T)}\qquad(10.100)$$
$\varphi\gt100\,\%$: übersättigt, Nebel; $\varphi = 100\,\%$: gesättigt; $\varphi\lt100\,\%$: mehr oder weniger trocken.<br><br>
<b>Erwärmen:</b> $p_\text{eff}$ bleibt, aber $p_d$ steigt ($p_d(0\,^\circ\text{C}) = 6{,}0\,\text{hPa}$, $p_d(20\,^\circ\text{C}) = 23{,}4\,\text{hPa}$):
$$\varphi(\text{warm}) = \varphi(\text{kalt})\frac{p_d(\text{kalt})}{p_d(\text{warm})} = \frac{6{,}0}{23{,}4}\cdot100\,\% = 26\,\%\qquad(10.101)$$
Bei $\varphi\approx100\,\%$ (Tropen) verdunstet kein Schweiss, also keine Kühlung. Umgekehrt kondensiert Wasser auf Gegenständen, die kälter als der <b>Taupunkt</b> sind (Brille, Kühlwasserrohre).`,
    meta: "Skript: Abschnitt 10.8.2.4, Gl. (10.100)–(10.101), S. 323",
    explanation: R`<b>Intuition:</b> Luft „fasst“ umso mehr Wasserdampf, je wärmer sie ist, weil der Sättigungsdampfdruck exponentiell mit $T$ steigt (Clausius-Clapeyron). Die relative Feuchtigkeit sagt, wie voll dieses „Fass“ ist. Wird Luft erwärmt, wird das Fass grösser, der Inhalt bleibt: $\varphi$ sinkt. Wird sie abgekühlt, läuft es über: Tau, Nebel, Wolken.<br><br>
<b>Taupunkt:</b> die Temperatur, bei der $p_d(T_\text{Tau}) = p_\text{eff}$ ist. Eine kalte Brille, die in einen warmen Raum kommt, liegt unter dem Taupunkt der Raumluft und beschlägt.<br><br>
<b>Abhängigkeiten:</b> $p_d$ verdoppelt sich etwa alle $10$–$11\,\text{K}$ in der Nähe der Zimmertemperatur. Deshalb ist geheizte Winterluft so trocken.<br><br>
<b>Zusammenhang:</b> Verdunstungskühlung nutzt die Verdampfungswärme (10.8.2.2): Schwitzen, Kühltürme, Tonkrüge.`,
    derivation: R`Taupunkt für Raumluft bei $20\,^\circ\text{C}$ und $\varphi = 50\,\%$:
<ol class="fc-steps">
<li>$p_\text{eff} = 0{,}5\cdot p_d(20\,^\circ\text{C}) = 11{,}7\,\text{hPa}$<em>Definition (10.100).</em></li>
<li>$p_d(T_\text{Tau}) = 11{,}7\,\text{hPa}$<em>Beim Abkühlen bleibt $p_\text{eff}$; Sättigung, wenn $p_d$ darauf gesunken ist.</em></li>
<li>$T_\text{Tau}\approx9\,^\circ\text{C}$<em>Aus einer Dampfdrucktabelle bzw. Clausius-Clapeyron/Magnus-Formel.</em></li>
<li>Fensterscheibe unter $9\,^\circ\text{C}$: Kondenswasser<em>Typisch bei Einfachverglasung im Winter.</em></li>
</ol>`,
    example: R`Winter: Aussenluft $0\,^\circ\text{C}$, $100\,\%$, auf $20\,^\circ\text{C}$ geheizt: $26\,\%$ – unangenehm trocken (Skript).<br>
Sommerabend: Luft $25\,^\circ\text{C}$, $60\,\%$ ($p_\text{eff}\approx19\,\text{hPa}$) kühlt nachts auf $15\,^\circ\text{C}$ ($p_d = 17\,\text{hPa}$) ab: übersättigt, Tau und Nebel.`,
    counterexample: R`<b>Absolute vs. relative Feuchtigkeit:</b> Wüstenluft bei $40\,^\circ\text{C}$ und $20\,\%$ enthält mehr Wasser pro m³ ($p_\text{eff}\approx15\,\text{hPa}$) als nebelige Winterluft bei $0\,^\circ\text{C}$ und $100\,\%$ ($6\,\text{hPa}$). „Trocken“ und „feucht“ beziehen sich auf die Sättigung, nicht auf den Wassergehalt.`,
    pitfalls: R`<ul><li>Annehmen, beim Erwärmen bleibe $\varphi$ konstant.</li>
<li>Relative und absolute Feuchtigkeit verwechseln.</li>
<li>Den Dampfdruck linear statt exponentiell in $T$ annehmen.</li></ul>`
  },

  // ========================================================================
  // 10.9 TIEFE TEMPERATUREN, DRITTER HAUPTSATZ
  // ========================================================================
  {
    id: "ph10_enthalpie",
    title: "Enthalpie H = U + pV",
    category: "10.9 Tiefe Temperaturen und Dritter Hauptsatz",
    type: "definition",
    front: R`Wie ist die <b>Enthalpie</b> definiert, und warum ist sie bei Prozessen unter <b>konstantem Druck</b> die natürliche Energiegrösse? Wie hängen $H$ und $C_p$ zusammen?`,
    back: R`$$H = U+pV\qquad(10.103)$$
(gilt, wenn nur Volumenverdrängungsarbeit wichtig ist; bei magnetischen Systemen usw. zu erweitern). $H$ ist eine Zustandsfunktion.<br><br>
<b>Isobar</b> ($dp = 0$):
$$dH = \delta Q^\swarrow\qquad(p = \text{konst.})\qquad(10.104)$$
Daher werden Schmelz- und Verdampfungs<b>enthalpien</b> $\Delta H_M$ (meist kJ/mol) und Reaktionsenthalpien tabelliert – Chemie läuft meist bei Atmosphärendruck ab.
$$C_p = \frac1\nu\left(\frac{\partial H}{\partial T}\right)_p\qquad(10.105)$$`,
    meta: "Skript: Abschnitt 10.9.1, Gl. (10.103)–(10.105), S. 325",
    explanation: R`<b>Intuition:</b> Bei konstantem Druck muss ein System, das sich ausdehnt, zusätzlich „Platz schaffen“ (Arbeit $p\,dV$ gegen die Atmosphäre). Die Enthalpie bucht diese Verdrängungsarbeit gleich mit ein. Deshalb ist die zugeführte Wärme bei konstantem Druck genau die Enthalpieänderung – ohne dass man die Arbeit separat verrechnen muss.<br><br>
<b>Analogie:</b> $U$ ist zu isochoren Prozessen das, was $H$ zu isobaren ist: $dU = \delta Q$ bei $V = $ konst., $dH = \delta Q$ bei $p = $ konst. Entsprechend $C_V = \frac1\nu\partial U/\partial T$ und $C_p = \frac1\nu\partial H/\partial T$.<br><br>
<b>Ideales Gas:</b> $H = U+\nu RT = \frac{f+2}2\nu RT$, hängt wie $U$ nur von $T$ ab.<br><br>
<b>Zusammenhang:</b> Beim Joule-Thomson-Prozess bleibt die Enthalpie konstant (10.9.2). Weitere thermodynamische Potentiale (freie Energie, freie Enthalpie) folgen demselben Muster (Physik II, Thermodynamik-Vorlesungen).`,
    derivation: R`<ol class="fc-steps">
<li>$dH = dU+p\,dV+V\,dp$<em>Produktregel auf $H = U+pV$.</em></li>
<li>$dU = \delta Q^\swarrow-p\,dV$<em>Erster Hauptsatz mit reiner Volumenarbeit.</em></li>
<li>$dH = \delta Q^\swarrow+V\,dp$<em>Die $p\,dV$-Terme heben sich auf.</em></li>
<li>$dp = 0\Rightarrow dH = \delta Q^\swarrow$<em>(10.104).</em></li>
<li>$\nu C_p\,dT = \delta Q^\swarrow_p = dH\Rightarrow C_p = \dfrac1\nu\left(\dfrac{\partial H}{\partial T}\right)_p$<em>(10.105).</em></li>
</ol>`,
    example: R`Verdampfungsenthalpie von Wasser bei $100\,^\circ\text{C}$: $\Delta H_M = 2256\,\text{kJ/kg}\cdot0{,}018\,\text{kg/mol} = 40{,}6\,\text{kJ/mol}$. Davon ist $p\Delta V\approx RT = 3{,}1\,\text{kJ/mol}$ Verdrängungsarbeit gegen die Atmosphäre; der Rest ($37{,}5\,\text{kJ/mol}$) erhöht die innere Energie.`,
    counterexample: R`<b>Isochore Prozesse:</b> In einem geschlossenen, starren Gefäss (Bombenkalorimeter) misst man $\Delta U$, nicht $\Delta H$. Für Reaktionen mit Gasen unterscheiden sich beide um $\Delta(pV) = \Delta\nu_\text{Gas}RT$. $dH = \delta Q$ gilt eben nur bei konstantem Druck.`,
    pitfalls: R`<ul><li>$dH = \delta Q$ bei nicht konstantem Druck verwenden.</li>
<li>$H$ und $U$ für dasselbe halten.</li>
<li>Bei Festkörpern und Flüssigkeiten den (kleinen) Unterschied zwischen $\Delta H$ und $\Delta U$ überbewerten.</li></ul>`
  },
  {
    id: "ph10_joule_thomson",
    title: "Joule-Thomson-Effekt und Inversionstemperatur T_inv = 2a/(Rb)",
    category: "10.9 Tiefe Temperaturen und Dritter Hauptsatz",
    type: "herleitung",
    front: R`Ein Gas strömt langsam durch eine poröse Wand (Watte) von $p_1$ nach $p_2\lt p_1$, ohne Wärme- oder Arbeitszufuhr von aussen. Zeige, dass die <b>Enthalpie konstant</b> bleibt. Warum ändert sich die Temperatur eines idealen Gases nicht, die eines van-der-Waals-Gases aber schon? Wann kühlt es ab?`,
    back: R`<b>Energiebilanz</b> (Abb. 10.31): Der linke Kolben schiebt $V_1$ mit der Arbeit $p_1V_1$ hinein, rechts leistet das Gas $p_2V_2$:
$$p_1V_1-p_2V_2 = U_2-U_1\;\Rightarrow\;U_1+p_1V_1 = U_2+p_2V_2,\quad H = \text{konst.}\qquad(10.106)$$
<b>Innere Energie</b> des van-der-Waals-Gases (Arbeit gegen den Binnendruck):
$$U = \frac f2\nu RT-\frac{\nu^2a}V\qquad(10.107,\,10.108)$$
$$H = U+pV = \nu RT\left(\frac f2+\frac V{V-\nu b}\right)-\frac{2\nu^2a}V\qquad(10.109)$$
Aus $dH = \frac{\partial H}{\partial V}dV+\frac{\partial H}{\partial T}dT = 0$ (10.110, 10.111) für $V\gg\nu b$:
$$dT\approx\nu\frac{dV}{V^2}\cdot\frac{bRT-2a}{C_p}\qquad(10.112)$$
Ideales Gas ($a = b = 0$): $dT = 0$. Bei Expansion ($dV\gt0$) <b>Abkühlung</b> unterhalb der Inversionstemperatur:
$$T_\text{Inv} = \frac{2a}{Rb} = \frac{27}4T_\text{krit}\qquad(10.113)$$
darüber Erwärmung.`,
    meta: "Skript: Abschnitt 10.9.2, Gl. (10.106)–(10.113), Abb. 10.31, Fussnoten 24–25, S. 326–328",
    explanation: R`<b>Intuition:</b> Bei der Expansion entfernen sich die Moleküle voneinander. Gegen ihre gegenseitige Anziehung ($a$) müssen sie Arbeit leisten, die aus der kinetischen Energie kommt: Das Gas kühlt ab. Der Eigenvolumen-Effekt ($b$) wirkt umgekehrt (abstossende Kräfte setzen Energie frei). Welcher gewinnt, hängt von $T$ ab: Bei tiefen Temperaturen die Anziehung.<br><br>
<b>Abhängigkeiten:</b> Joule-Thomson-Koeffizient (für $V\gg\nu b$) $\mu_{JT} = \left(\frac{\partial T}{\partial p}\right)_H\approx\frac{2a/(RT)-b}{C_p}$: Für Luft bei $300\,\text{K}$ etwa $0{,}25\,\text{K/bar}$, also $\approx50\,\text{K}$ Abkühlung bei $200\,\text{bar}$ Druckabfall (Skript, Fussnote 25).<br><br>
<b>Wasserstoff und Helium:</b> sehr kleines $a$, also tiefe Inversionstemperaturen (H₂ etwa $200\,\text{K}$, He etwa $40\,\text{K}$). Bei Zimmertemperatur erwärmen sie sich bei der Entspannung – bei H₂ Explosionsgefahr beim Öffnen der Flasche (Fussnote 24).<br><br>
<b>Zusammenhang:</b> Linde-Verfahren zur Luftverflüssigung mit Gegenstromvorkühlung; nach Vorkühlung unter $T_\text{Inv}$ auch H₂ ($20\,\text{K}$) und He ($4{,}2\,\text{K}$).`,
    derivation: R`Näherung (10.112) im Detail:
<ol class="fc-steps">
<li>$\dfrac{\partial H}{\partial T} = \nu R\left(\dfrac f2+\dfrac V{V-\nu b}\right)\approx\nu R\left(\dfrac f2+1\right) = \nu C_p$<em>Für $V\gg\nu b$ (Nenner in 10.111).</em></li>
<li>$\dfrac{\partial H}{\partial V} = -\dfrac{\nu^2RTb}{(V-\nu b)^2}+\dfrac{2\nu^2a}{V^2}\approx\dfrac{\nu^2}{V^2}(2a-bRT)$<em>Ableitung von (10.109) nach $V$, dann $V\gg\nu b$.</em></li>
<li>$dT = -\dfrac{\partial H/\partial V}{\partial H/\partial T}dV = \nu\dfrac{dV}{V^2}\dfrac{bRT-2a}{C_p}$<em>Aus $dH = 0$ (10.110–10.112).</em></li>
<li>$dV\gt0$, $bRT\lt2a\Rightarrow dT\lt0$<em>Abkühlung bei Expansion.</em></li>
<li>$T_\text{Inv} = \dfrac{2a}{Rb} = \dfrac{27}4\cdot\dfrac{8a}{27Rb} = \dfrac{27}4T_\text{krit}$<em>Vorzeichenwechsel (10.113).</em></li>
</ol>`,
    example: R`Van-der-Waals-Abschätzung $T_\text{Inv} = 2a/(Rb)$: N₂ $\approx850\,\text{K}$ (gemessen ca. $620\,\text{K}$), H₂ $\approx220\,\text{K}$ (gemessen ca. $200\,\text{K}$), He $\approx35\,\text{K}$ (gemessen ca. $40\,\text{K}$).<br>
Luft, $\Delta p = 20\,\text{MPa}$: $\Delta T\approx-50\,\text{K}$ (Skript).`,
    counterexample: R`<b>Freie Expansion ≠ Joule-Thomson:</b> Bei der freien Expansion ins Vakuum bleibt $U$ konstant (nicht $H$); auch dort kühlt ein reales Gas wegen $a$ leicht ab, aber anders. Und für ein ideales Gas ergeben beide Prozesse keine Temperaturänderung – die Abkühlung ist ein reiner Effekt der Wechselwirkung.`,
    pitfalls: R`<ul><li>Annehmen, jede Gasentspannung kühle ab (oberhalb $T_\text{Inv}$ erwärmt sie).</li>
<li>Joule-Thomson mit adiabatischer Expansion gegen einen Kolben verwechseln (dort leistet das Gas Arbeit und kühlt auch als ideales Gas ab).</li>
<li>$U$ statt $H$ als Erhaltungsgrösse ansetzen.</li></ul>`
  },
  {
    id: "ph10_dritter_hauptsatz",
    title: "Wege zu tiefen Temperaturen und Dritter Hauptsatz (Nernst)",
    category: "10.9 Tiefe Temperaturen und Dritter Hauptsatz",
    type: "konzept",
    front: R`Mit welchen Methoden erreicht man tiefe Temperaturen (bis etwa $10^{-3}\,\text{K}$)? Wie lautet der <b>Dritte Hauptsatz</b> nach Nernst, und welche Verbindung besteht zur Leistungszahl der Kältemaschine und zur Normierung der Entropie?`,
    back: R`<b>Methoden</b> (Skript):
<ul><li>Wärmepumpe/Kältemaschine (10.7.2)</li>
<li>Joule-Thomson-Entspannung mit Gegenstromvorkühlung (Linde): flüssige Luft; nach Vorkühlung auch H₂ ($T_s = 20\,\text{K}$) und He ($4{,}2\,\text{K}$)</li>
<li>Abdampfen (Entzug der Verdampfungswärme): mit ³He bis $0{,}3\,\text{K}$</li>
<li>Adiabatisches Entmagnetisieren: bis $10^{-3}\,\text{K}$</li></ul>
Je näher man dem absoluten Nullpunkt kommt, desto aufwendiger werden die Prozesse.<br><br>
<b>Dritter Hauptsatz</b> (Nernst):<br>Es ist unmöglich, in endlich vielen Schritten den absoluten Nullpunkt zu erreichen.<br><br>
Verwandt: Die Entropie reiner Stoffe wird bei $T = 0$ zu null normiert (10.7.4), und die Leistungszahl einer idealen Kältemaschine $\eta_K = \frac{T_k}{T_w-T_k}\to0$ für $T_k\to0$ (10.69).`,
    meta: "Skript: Abschnitt 10.9.2 (Schluss), Gl. (10.69); Abschnitt 10.7.4, S. 310, 315, 328",
    explanation: R`<b>Intuition:</b> Jeder Kühlschritt entzieht einen Bruchteil der verbleibenden Wärme. Wie bei Zenons Paradoxon kommt man dem Ziel immer näher, ohne es je zu erreichen. Zudem sinken bei tiefen Temperaturen alle Wärmekapazitäten gegen null; es gibt also immer weniger „Hebel“, an denen ein Kühlverfahren ansetzen kann.<br><br>
<b>Thermodynamischer Preis:</b> Um bei $T_k$ eine Wärme $Q$ zu entziehen und bei $T_w$ abzugeben, braucht man mindestens $W = Q\frac{T_w-T_k}{T_k}$. Bei $T_k = 1\,\text{mK}$ und $T_w = 300\,\text{K}$ ist das das $3\cdot10^5$-Fache der entzogenen Wärme.<br><br>
<b>Adiabatische Entmagnetisierung:</b> Ein paramagnetisches Salz wird im Magnetfeld isotherm magnetisiert (Spins ausgerichtet, Entropie abgegeben), dann thermisch isoliert und das Feld langsam abgeschaltet: Die Spins nehmen Entropie aus den Gitterschwingungen auf, die Temperatur sinkt.<br><br>
<b>Zusammenhang:</b> Tiefe Temperaturen machen Quanteneffekte sichtbar: Supraleitung, Suprafluidität von Helium, Quantencomputer (Millikelvin-Kryostaten).`,
    derivation: R`Mindestarbeit zum Kühlen (Kältemaschine als Carnot rückwärts):
<ol class="fc-steps">
<li>$\eta_K = \dfrac{Q_k}{W} = \dfrac{T_k}{T_w-T_k}$<em>Ideale Kältemaschine (10.69).</em></li>
<li>$W_\text{min} = Q_k\dfrac{T_w-T_k}{T_k}$<em>Arbeit pro entzogener Wärme.</em></li>
<li>$T_k = 4\,\text{K}$, $T_w = 300\,\text{K}$: $W_\text{min} = 74\,Q_k$<em>Für flüssiges Helium.</em></li>
<li>$T_k\to0$: $W_\text{min}\to\infty$<em>Pro entzogenem Joule wächst der Aufwand unbegrenzt: Vorstufe der Unerreichbarkeit.</em></li>
</ol>`,
    example: R`<b>Heliumverflüssiger:</b> $1\,\text{W}$ Kälteleistung bei $4{,}2\,\text{K}$ kostet ideal $70\,\text{W}$, real eher $500$–$1000\,\text{W}$ Kompressorleistung.<br>
<b>Rekordtemperaturen</b> (Ergänzung): Kernspin-Entmagnetisierung erreicht Mikro- bis Nanokelvin, aber nie $0\,\text{K}$.`,
    counterexample: R`<b>„Negative absolute Temperaturen“</b> in Spinsystemen (Laborexperimente) widersprechen dem Dritten Hauptsatz nicht: Man gelangt dorthin nicht durch Abkühlen über $0\,\text{K}$ hinweg, sondern durch Besetzungsinversion; formal sind solche Systeme „heisser als unendlich heiss“. Die Aussage „$T\lt0$ unmöglich“ (10.2.1) bezieht sich auf gewöhnliche Systeme mit unbegrenztem Energiespektrum.`,
    pitfalls: R`<ul><li>Den Dritten Hauptsatz als „$T = 0$ ist verboten, aber beliebig nah möglich“ missverstehen: Beides stimmt, aber der Aufwand wächst unbegrenzt.</li>
<li>Joule-Thomson-Kühlung oberhalb der Inversionstemperatur versuchen.</li>
<li>Glauben, bei $T\to0$ blieben die Wärmekapazitäten konstant.</li></ul>`
  },

  // ========================================================================
  // ERGÄNZUNGEN: typische Prüfungsaufgaben und Brücken zu Physik II
  // ========================================================================
  {
    id: "ph10_prozesstabelle",
    title: "Übersicht: ΔU, W, Q und ΔS für die vier Standardprozesse des idealen Gases",
    category: "10.6 Ideale Gase",
    type: "konzept",
    front: R`Stelle für ein ideales Gas ($\nu$ Mol, $C_V$, $C_p$, $\kappa$) die Änderung der inneren Energie, die vom Gas geleistete Arbeit, die zugeführte Wärme und die Entropieänderung für die <b>isochore</b>, <b>isobare</b>, <b>isotherme</b> und <b>adiabatische</b> (reversible) Zustandsänderung zusammen.`,
    back: R`Immer: $\Delta U = \nu C_V\Delta T$ (nur $T$ zählt), $Q^\swarrow = \Delta U+W^\nearrow$, $W^\nearrow = \int p\,dV$.
<ul><li><b>Isochor</b> ($V$ = konst.): $W^\nearrow = 0$, $Q^\swarrow = \nu C_V\Delta T$, $\Delta S = \nu C_V\ln\frac{T_2}{T_1}$.</li>
<li><b>Isobar</b> ($p$ = konst.): $W^\nearrow = p\Delta V = \nu R\Delta T$, $Q^\swarrow = \nu C_p\Delta T$, $\Delta S = \nu C_p\ln\frac{T_2}{T_1}$.</li>
<li><b>Isotherm</b> ($T$ = konst.): $\Delta U = 0$, $W^\nearrow = Q^\swarrow = \nu RT\ln\frac{V_2}{V_1}$, $\Delta S = \nu R\ln\frac{V_2}{V_1}$.</li>
<li><b>Adiabatisch</b> ($Q = 0$, $pV^\kappa$ = konst.): $W^\nearrow = -\Delta U = \nu C_V(T_1-T_2) = \frac{p_1V_1-p_2V_2}{\kappa-1}$, $\Delta S = 0$.</li></ul>
<b>Allgemein</b> (Zustandsgrösse, wegunabhängig):
$$\Delta S = \nu C_V\ln\frac{T_2}{T_1}+\nu R\ln\frac{V_2}{V_1}$$`,
    meta: "Ergänzung (Prüfungsübersicht); fasst Abschnitte 10.6.2 (Gl. 10.34–10.41), 10.6.4 (Gl. 10.44–10.57) und 10.7.4 (Gl. 10.78–10.79) zusammen",
    explanation: R`<b>Intuition:</b> Die innere Energie des idealen Gases ist ein reines „Temperaturkonto“. Die Arbeit ist die Fläche unter der Kurve im pV-Diagramm. Die Wärme ergibt sich immer aus dem Ersten Hauptsatz als Rest. Mit diesen drei Regeln kann man jede Zeile der Tabelle selbst herleiten – Auswendiglernen ist unnötig.<br><br>
<b>Entropie als Kontrolle:</b> $\Delta S$ hängt nur von Anfangs- und Endzustand ab. Für einen Kreisprozess muss die Summe der $\Delta S$ über alle Schritte null sein – ein schneller Rechenfehler-Test.<br><br>
<b>Abhängigkeiten:</b> Isobar braucht pro Kelvin mehr Wärme als isochor ($C_p\gt C_V$). Bei gleicher Volumenverdopplung leistet die isobare Expansion am meisten Arbeit, die adiabatische am wenigsten (Druck fällt am stärksten).<br><br>
<b>Zusammenhang:</b> Polytrope Prozesse $pV^n$ = konst. umfassen alle vier als Spezialfälle: $n = 0$ (isobar), $n = 1$ (isotherm), $n = \kappa$ (adiabatisch), $n\to\infty$ (isochor). Kreisprozesse (10.7.2) sind Ketten dieser Bausteine.`,
    derivation: R`Allgemeine Entropieformel über einen Ersatzweg (isochor, dann isotherm):
<ol class="fc-steps">
<li>$dS = \dfrac{\delta Q_\text{rev}^\swarrow}T = \dfrac{dU+p\,dV}T$<em>Definition (10.78) und Erster Hauptsatz.</em></li>
<li>$= \nu C_V\dfrac{dT}T+\nu R\dfrac{dV}V$<em>$dU = \nu C_VdT$, $p/T = \nu R/V$.</em></li>
<li>$\Delta S = \nu C_V\ln\dfrac{T_2}{T_1}+\nu R\ln\dfrac{V_2}{V_1}$<em>Integrieren; jeder Term für sich.</em></li>
<li>Isobar: $\dfrac{V_2}{V_1} = \dfrac{T_2}{T_1}\Rightarrow\Delta S = \nu(C_V+R)\ln\dfrac{T_2}{T_1} = \nu C_p\ln\dfrac{T_2}{T_1}$<em>Konsistenz mit der Tabellenzeile.</em></li>
<li>Adiabatisch: $TV^{\kappa-1}$ = konst. $\Rightarrow C_V\ln\dfrac{T_2}{T_1} = -R\ln\dfrac{V_2}{V_1}\Rightarrow\Delta S = 0$<em>Reversibel adiabatisch = isentrop.</em></li>
</ol>`,
    example: R`$1\,\text{mol}$ einatomiges Gas ($C_V = \tfrac32R$), $300\,\text{K}$, Volumen verdoppelt:<br>
isobar: $T_2 = 600\,\text{K}$, $W = 2494\,\text{J}$, $\Delta U = 3741\,\text{J}$, $Q = 6236\,\text{J}$, $\Delta S = 14{,}4\,\text{J/K}$;<br>
isotherm: $W = Q = 1729\,\text{J}$, $\Delta S = 5{,}76\,\text{J/K}$;<br>
adiabatisch: $T_2 = 189\,\text{K}$, $W = 1384\,\text{J}$, $Q = 0$, $\Delta S = 0$.`,
    counterexample: R`<b>Irreversible Prozesse:</b> Für die freie Expansion ins Vakuum gilt keine der Zeilen für $W$ und $Q$ ($W = Q = 0$), aber die allgemeine Formel für $\Delta S$ gilt trotzdem ($\Delta S = \nu R\ln2\gt0$ bei Verdopplung), weil $S$ eine Zustandsgrösse ist. Die Tabelle für $W$ und $Q$ setzt reversible Prozesse voraus.`,
    pitfalls: R`<ul><li>$\Delta U = \nu C_p\Delta T$ bei isobaren Prozessen schreiben ($\Delta U$ ist immer $\nu C_V\Delta T$).</li>
<li>Bei „isotherm“ $Q = 0$ annehmen.</li>
<li>Vorzeichenkonventionen (vom Gas geleistet vs. am Gas geleistet) mischen.</li></ul>`
  },
  {
    id: "ph10_entropie_erwaermen_mischen",
    title: "Entropieänderung beim Erwärmen und beim Mischen: ΔS = mc ln(T₂/T₁)",
    category: "10.7 Der Zweite Hauptsatz der Wärmelehre",
    type: "beispiel",
    front: R`Berechne die Entropieänderung, wenn (a) $1\,\text{kg}$ Wasser von $20\,^\circ\text{C}$ auf $80\,^\circ\text{C}$ erwärmt wird und (b) $1\,\text{kg}$ Wasser von $80\,^\circ\text{C}$ mit $1\,\text{kg}$ Wasser von $20\,^\circ\text{C}$ in einem isolierten Gefäss gemischt wird. Warum ist das Ergebnis in (b) positiv, obwohl keine Wärme von aussen zugeführt wird?`,
    back: R`Bei veränderlicher Temperatur muss man $dS = \delta Q_\text{rev}/T$ integrieren (nicht $Q/T$):
$$\Delta S = \int_{T_1}^{T_2}\frac{mc\,dT}T = mc\ln\frac{T_2}{T_1}$$
<b>(a)</b> $\Delta S = 4182\cdot\ln\frac{353{,}15}{293{,}15}\,\frac{\text J}{\text K} = 779\,\frac{\text J}{\text K}$.<br><br>
<b>(b)</b> Mischtemperatur $50\,^\circ\text{C}$ (gleiche Massen, 10.3). Jede Portion einzeln:
$$\Delta S = mc\left[\ln\frac{323{,}15}{353{,}15}+\ln\frac{323{,}15}{293{,}15}\right] = 4182\,(-0{,}0888+0{,}0974)\,\frac{\text J}{\text K} = +36\,\frac{\text J}{\text K}$$
Das heisse Wasser verliert Entropie, das kalte gewinnt mehr, weil dieselbe Wärme bei tieferer Temperatur einen grösseren Beitrag $\delta Q/T$ liefert. Der Ausgleich ist irreversibel: $\Delta S_\text{gesamt}\gt0$.`,
    meta: "Ergänzung (typische Prüfungsaufgabe); baut auf Abschnitten 10.3 (Wärmekapazität, Mischung), 10.7.4 (Gl. 10.78, 10.80) auf",
    explanation: R`<b>Intuition:</b> Ein Wärmestrom von heiss nach kalt erzeugt immer Entropie, weil $\frac1{T_\text{kalt}}\gt\frac1{T_\text{heiss}}$. Mischen ist nichts anderes als ein Wärmestrom zwischen zwei Portionen bis zum Temperaturausgleich – also irreversibel, und es läuft nie von selbst rückwärts (das Wasser entmischt sich nicht in heiss und kalt).<br><br>
<b>Warum $\ln$?</b> Jedes kleine Wärmepaket $mc\,dT$ wird durch die momentane Temperatur geteilt. Bei hohen Temperaturen trägt dieselbe Erwärmung weniger Entropie bei: $\Delta S$ wächst logarithmisch.<br><br>
<b>Abhängigkeiten:</b> Für kleine Temperaturänderungen $\ln\frac{T_2}{T_1}\approx\frac{\Delta T}{T}$, also $\Delta S\approx\frac{Q}{T}$ mit mittlerer Temperatur – die einfache Formel ist ein Grenzfall.<br><br>
<b>Zusammenhang:</b> Dasselbe Argument zeigt, dass Wärmeleitung über eine endliche Temperaturdifferenz den Wirkungsgrad einer Maschine unter den Carnot-Wert drückt (10.7.5). Für ideale Gase: $\Delta S = \nu C_V\ln\frac{T_2}{T_1}+\nu R\ln\frac{V_2}{V_1}$ (Prozesstabelle).`,
    derivation: R`<ol class="fc-steps">
<li>$\delta Q^\swarrow = mc\,dT$<em>Erwärmung um $dT$ (konstante spezifische Wärme).</em></li>
<li>Reversibler Ersatzweg: Kontakt mit einer Folge von Reservoiren, jeweils nur $dT$ wärmer<em>Der reale Prozess darf irreversibel sein; $S$ ist eine Zustandsgrösse.</em></li>
<li>$\Delta S = \displaystyle\int_{T_1}^{T_2}\frac{mc}T\,dT = mc\ln\frac{T_2}{T_1}$<em>Integration.</em></li>
<li>Mischung: $T_m = \dfrac{T_1+T_2}2$ (gleiche Massen)<em>Energieerhaltung (10.21).</em></li>
<li>$\Delta S = mc\ln\dfrac{T_m^2}{T_1T_2}\ge0$<em>Weil das arithmetische Mittel $\ge$ das geometrische ist: $T_m\ge\sqrt{T_1T_2}$.</em></li>
</ol>`,
    example: R`(a) $779\,\text{J/K}$; Näherung $Q/T_\text{mittel} = 250{,}9\,\text{kJ}/323\,\text{K} = 777\,\text{J/K}$ – gut, weil $\Delta T/T$ klein ist.<br>
<b>Eis schmilzt in Wasser:</b> Schmelzen bei konstanten $273\,\text{K}$: $\Delta S = mL/T = 1{,}22\,\text{kJ/K}$ pro kg; die Abkühlung des Wassers liefert weniger negative Entropie – insgesamt positiv.`,
    counterexample: R`<b>$\Delta S = Q/T$ mit einer einzigen Temperatur:</b> Für (a) gäbe $Q/T_1 = 250{,}9\,\text{kJ}/293\,\text{K} = 856\,\text{J/K}$ und $Q/T_2 = 711\,\text{J/K}$ – beide falsch. Die Formel $Q/T$ gilt nur bei konstanter Temperatur (Reservoir, Phasenübergang).`,
    pitfalls: R`<ul><li>Celsius-Temperaturen in den Logarithmus einsetzen ($\ln(80/20)$ ist sinnlos).</li>
<li>Bei Mischung nur die Entropie einer Portion berechnen.</li>
<li>Glauben, ein isolierter Prozess ohne Wärmezufuhr habe $\Delta S = 0$.</li></ul>`
  },
  {
    id: "ph10_kreisprozess_beispiel",
    title: "Kreisprozess durchrechnen: Rechteck im pV-Diagramm (zwei Isobaren, zwei Isochoren)",
    category: "10.7 Der Zweite Hauptsatz der Wärmelehre",
    type: "beispiel",
    front: R`Ein einatomiges ideales Gas durchläuft im Uhrzeigersinn das Rechteck A $(p_1,V_1)$ → B $(p_1,V_2)$ → C $(p_2,V_2)$ → D $(p_2,V_1)$ → A mit $p_1 = 2\,\text{bar}$, $p_2 = 1\,\text{bar}$, $V_1 = 10\,\text{L}$, $V_2 = 20\,\text{L}$. Berechne die Nettoarbeit, die zugeführte Wärme, den Wirkungsgrad und vergleiche mit einer Carnot-Maschine zwischen der höchsten und der tiefsten Temperatur.`,
    back: R`<b>Nettoarbeit</b> = umschlossene Fläche:
$$W_\text{netto} = (p_1-p_2)(V_2-V_1) = 10^5\,\text{Pa}\cdot0{,}01\,\text{m}^3 = 1000\,\text{J}$$
<b>Wärme</b> (mit $\nu C_V\Delta T = \tfrac32\Delta(pV)$, $\nu C_p\Delta T = \tfrac52\Delta(pV)$):
<ul><li>A→B isobar, Expansion: $Q = \tfrac52p_1(V_2-V_1) = 5000\,\text{J}$ zugeführt</li>
<li>B→C isochor, Druck sinkt: $Q = \tfrac32V_2(p_2-p_1) = -3000\,\text{J}$ abgegeben</li>
<li>C→D isobar, Kompression: $Q = \tfrac52p_2(V_1-V_2) = -2500\,\text{J}$ abgegeben</li>
<li>D→A isochor, Druck steigt: $Q = \tfrac32V_1(p_1-p_2) = 1500\,\text{J}$ zugeführt</li></ul>
Kontrolle: $5000-3000-2500+1500 = 1000\,\text{J} = W_\text{netto}$ ✓.
$$\eta = \frac{W_\text{netto}}{Q_\text{zu}} = \frac{1000}{6500} = 15{,}4\,\%$$
Temperaturen $\propto pV$: höchste in B ($pV = 40$), tiefste in D ($pV = 10$, je in $\text{bar}\cdot\text{L}$): $T_B/T_D = 4$, also $\eta_C = 1-\tfrac14 = 75\,\%$.`,
    meta: "Ergänzung (typische Prüfungsaufgabe); baut auf Abschnitten 10.6.2, 10.6.4, 10.7.2 (Gl. 10.66) und 10.7.5 auf",
    explanation: R`<b>Intuition:</b> Für jeden Schritt fragt man: Ändert sich $T$ (dann $\Delta U$)? Ändert sich $V$ (dann $W$)? Der Rest ist Wärme. Wärme fliesst dort hinein, wo die Temperatur steigt oder das Gas bei hohem Druck expandiert.<br><br>
<b>Warum so viel schlechter als Carnot?</b> Wärme wird hier bei vielen verschiedenen Temperaturen ausgetauscht, auch bei tiefen (D→A beginnt bei $T_D$). Carnot tauscht Wärme nur bei den beiden Extremtemperaturen. Jede Wärmeaufnahme unterhalb von $T_\text{max}$ (und Abgabe oberhalb von $T_\text{min}$) kostet Wirkungsgrad.<br><br>
<b>Abhängigkeiten:</b> Der Wirkungsgrad hängt hier nur von den Verhältnissen $p_1/p_2$ und $V_2/V_1$ ab, nicht von der Gasmenge. Mit zweiatomigem Gas ($\tfrac52$, $\tfrac72$ statt $\tfrac32$, $\tfrac52$) wird er noch kleiner, weil mehr Wärme für dieselbe Arbeit nötig ist.<br><br>
<b>Zusammenhang:</b> Prozesstabelle (Ergänzungskarte), Stirling-Prozess (zwei Isothermen, zwei Isochoren, 10.7.2), Carnot als Obergrenze (10.7.5).`,
    derivation: R`Wärme in A→B Schritt für Schritt:
<ol class="fc-steps">
<li>$\Delta U_{AB} = \tfrac32\nu R(T_B-T_A) = \tfrac32p_1(V_2-V_1) = 3000\,\text{J}$<em>$\nu RT = pV$; einatomig $C_V = \tfrac32R$.</em></li>
<li>$W^\nearrow_{AB} = p_1(V_2-V_1) = 2000\,\text{J}$<em>Isobar: Fläche unter der Kurve.</em></li>
<li>$Q^\swarrow_{AB} = \Delta U+W^\nearrow = 5000\,\text{J}$<em>Erster Hauptsatz; $= \tfrac52p_1\Delta V$.</em></li>
<li>$Q_\text{zu} = Q_{AB}+Q_{DA} = 6500\,\text{J}$<em>Nur positive Wärmen zählen für den Wirkungsgrad.</em></li>
<li>$\Delta S$: $\nu C_p\ln2-\nu C_V\ln2-\nu C_p\ln2+\nu C_V\ln2 = 0$<em>Kontrolle: Temperaturverhältnisse $T_B/T_A = 2$, $T_C/T_B = \tfrac12$, $T_D/T_C = \tfrac12$, $T_A/T_D = 2$; die Entropie kehrt zum Anfangswert zurück.</em></li>
</ol>`,
    example: R`Temperaturen bei $\nu = 0{,}4\,\text{mol}$ (gewählt): $T_A = \frac{2000}{0{,}4\cdot8{,}314} = 601\,\text{K}$, $T_B = 1203\,\text{K}$, $T_C = 601\,\text{K}$, $T_D = 301\,\text{K}$.<br>
Leistung bei $20$ Zyklen pro Sekunde: $20\,\text{kW}$; zugeführte Wärmeleistung $130\,\text{kW}$.`,
    counterexample: R`<b>Wirkungsgrad mit der Netto-Wärme:</b> $\eta = W/(Q_\text{zu}-Q_\text{ab}) = 1000/1000 = 100\,\%$ ist offensichtlich Unsinn: Im Nenner steht nur die <i>zugeführte</i> Wärme. Und wer den Umlauf gegen den Uhrzeigersinn rechnet, erhält eine Wärmepumpe mit negativer Nettoarbeit des Gases.`,
    pitfalls: R`<ul><li>Abgegebene Wärme in den Nenner des Wirkungsgrads mitnehmen.</li>
<li>Bei isochoren Schritten Arbeit ansetzen.</li>
<li>Einatomige ($\tfrac32R$) und zweiatomige ($\tfrac52R$) Wärmekapazitäten verwechseln.</li></ul>`
  }
];
})();
