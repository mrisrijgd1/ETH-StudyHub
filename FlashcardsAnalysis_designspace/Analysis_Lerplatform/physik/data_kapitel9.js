/* ==========================================================================
   PHYSIK I – KAPITEL 9: Schwingungen
   Harmonischer Oszillator, Anfangsbedingungen, Energie, Dämpfung,
   Analogien, Güte, erzwungene Schwingung, Resonanz, Leistung,
   Überlagerung, Schwebung, Modulation, Lissajous, Fourier,
   Deltafunktion, gekoppelte Oszillatoren
   Skript Physik I – Prof. K. Ensslin, ETH Zürich, HS 2025
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_KAPITEL_9 = [
  // ========================================================================
  // 9.1–9.2 HARMONISCHE SCHWINGUNGEN
  // ========================================================================
  {
    id: "ph9_harmonische_naeherung",
    title: "Schwingungsfähiges System und harmonische Näherung eines Potentials",
    category: "9.2 Harmonische Schwingungen",
    type: "herleitung",
    front: R`Was braucht ein <b>schwingungsfähiges System</b>? Zeige mit einer Taylor-Entwicklung, warum fast jedes System in der Nähe eines Potentialminimums $r_0$ <b>harmonisch</b> schwingt, und gib die Kreisfrequenz $\omega_0$ für ein zweiatomiges Molekül an.`,
    back: R`<b>Schwingungsfähiges System:</b> stabile Gleichgewichtslage; kann Energie aufnehmen, ohne zerstört zu werden; die Energie pendelt periodisch zwischen zwei Formen (z. B. kinetisch und potentiell). Die Energie darf eine Schwelle nicht überschreiten (Kugel in der Schale springt sonst heraus, Abb. 9.1).<br><br>
<b>Taylor-Entwicklung</b> um das Minimum $r_0$:
$$U(r_0+\Delta r)\approx U(r_0) + \frac{dU}{dr}\Big|_{r_0}\Delta r + \frac12\frac{d^2U}{dr^2}\Big|_{r_0}\Delta r^2\qquad(9.1)$$
Mit $U_0 := U(r_0)$, $k := U''(r_0)$, $x := \Delta r$ und $U'(r_0) = 0$ (9.2, 9.3):
$$U\approx U_0 + \tfrac12kx^2,\qquad F = -\frac{dU}{dx} = -kx\qquad(9.4,\,9.5)$$
Bewegungsgleichung mit reduzierter Masse $\mu$:
$$\mu\ddot x = -kx\;\Rightarrow\;\ddot x + \omega_0^2x = 0,\qquad\omega_0 := \sqrt{\frac k\mu}\qquad(9.6\text{–}9.9)$$`,
    meta: "Skript: Abschnitte 9.1–9.2.2, Gl. (9.1)–(9.9), Abb. 9.1–9.3, S. 223–226",
    explanation: R`<b>Intuition:</b> Jede glatte Mulde sieht von nahem wie eine Parabel aus. Die Parabel bedeutet eine Rückstellkraft proportional zur Auslenkung (Hooke). Darum ist der harmonische Oszillator das universelle Modell für kleine Schwingungen: Moleküle, Pendel, Brücken, Schwingkreise, Atome im Kristall.<br><br>
<b>Die entscheidende Grösse</b> ist die Krümmung $k = U''(r_0)$: Steile, enge Mulde bedeutet grosses $k$ und hohe Frequenz. $\omega_0\propto\sqrt{k}$ und $\propto1/\sqrt{\mu}$; leichte Teilchen schwingen schneller (H₂ schneller als D₂, Faktor $\sqrt2$).<br><br>
<b>Warum fehlt der lineare Term?</b> Im Minimum verschwindet die Kraft $-U'(r_0)$; sonst wäre $r_0$ keine Gleichgewichtslage. Die Konstante $U_0$ spielt für die Bewegung keine Rolle (nur Energiedifferenzen zählen).<br><br>
<b>Zusammenhang:</b> Der Lösungsweg der DGL steht in Kap. 12.4.1. Dasselbe Argument liefert das mathematische Pendel ($\sin\varphi\approx\varphi$, Kap. 3) und die Drehschwingung ($M = -\kappa\varphi$).`,
    derivation: R`Krümmung des Lennard-Jones-Potentials $U = 4\varepsilon[(\sigma/r)^{12}-(\sigma/r)^6]$:
<ol class="fc-steps">
<li>$U'(r) = 4\varepsilon\left[-12\dfrac{\sigma^{12}}{r^{13}} + 6\dfrac{\sigma^6}{r^7}\right] = 0\Rightarrow r_0 = 2^{1/6}\sigma$<em>Gleichgewichtsabstand aus $U' = 0$; dort ist $(\sigma/r_0)^6 = \tfrac12$.</em></li>
<li>$U''(r) = \dfrac{4\varepsilon}{r^2}\left[156\left(\dfrac\sigma r\right)^{12} - 42\left(\dfrac\sigma r\right)^{6}\right]$<em>Zweimal ableiten.</em></li>
<li>$k = U''(r_0) = \dfrac{4\varepsilon}{r_0^2}\left[\dfrac{156}{4} - \dfrac{42}{2}\right] = \dfrac{72\,\varepsilon}{r_0^2}$<em>$(\sigma/r_0)^{12} = \tfrac14$ einsetzen; $k>0$, also stabil.</em></li>
<li>$k = \dfrac{72}{2^{1/3}}\dfrac{\varepsilon}{\sigma^2}\approx57{,}1\,\dfrac{\varepsilon}{\sigma^2}$<em>Federkonstante der Bindung (9.2).</em></li>
<li>$\omega_0 = \sqrt{k/\mu}$<em>Mit der reduzierten Masse des Paars (9.8).</em></li>
</ol>`,
    example: R`<b>Mathematisches Pendel:</b> $U = mg\ell(1-\cos\varphi)\approx\tfrac12mg\ell\varphi^2$, also „$k$“ $= mg\ell$, Trägheit $m\ell^2$: $\omega_0 = \sqrt{g/\ell}$. Für $\ell = 1\,\text{m}$: $\omega_0 = 3{,}13\,\text{s}^{-1}$, $T = 2{,}01\,\text{s}$.<br>
<b>Feder:</b> $m = 0{,}5\,\text{kg}$, $k = 200\,\text{N/m}$: $\omega_0 = 20\,\text{s}^{-1}$, $T = 0{,}314\,\text{s}$, $\nu = 3{,}18\,\text{Hz}$.`,
    counterexample: R`<b>Kein harmonischer Anteil:</b> $U = ax^4$ hat in $x = 0$ ein Minimum, aber $U''(0) = 0$. Es schwingt trotzdem, aber anharmonisch: Die Periode hängt von der Amplitude ab ($T\propto1/A$). Ebenso ist das Pendel bei grossen Ausschlägen nicht mehr isochron. Und bei $U''(r_0)\lt0$ (Maximum) gibt es gar keine Schwingung, sondern exponentielles Weglaufen.`,
    pitfalls: R`<ul><li>Um einen Punkt entwickeln, der kein Minimum ist ($U'\ne0$ oder $U''\lt0$).</li>
<li>Die Masse statt der reduzierten Masse beim Zweikörperproblem verwenden.</li>
<li>Die harmonische Näherung bei grossen Amplituden weiterverwenden.</li></ul>`
  },
  {
    id: "ph9_loesung_harmonisch",
    title: "Lösung des harmonischen Oszillators: komplexer Ansatz und reelle Form",
    category: "9.2 Harmonische Schwingungen",
    type: "herleitung",
    front: R`Löse $\ddot x + \omega_0^2x = 0$ mit dem Exponentialansatz. Wie folgt aus der Forderung „$x(t)$ reell“ die Form $x(t) = A\cos(\omega_0t+\delta')$, und warum ist $x = A\sin(\omega_0t+\delta)$ gleichwertig?`,
    back: R`Charakteristische Gleichung ($a_1 = 0$, $a_0 = \omega_0^2$ in $\ddot x + a_1\dot x + a_0x = 0$):
$$\lambda^2+\omega_0^2 = 0\;\Rightarrow\;\lambda_{1,2} = \pm i\omega_0,\qquad x(t) = C_1e^{i\omega_0t}+C_2e^{-i\omega_0t}\qquad(9.10\text{–}9.13)$$
<b>Realität</b> $x = x^*$ für alle $t$:
$$(C_1-C_2^*)e^{i\omega_0t} + (C_2-C_1^*)e^{-i\omega_0t} = 0\;\Rightarrow\;C_1 = C_2^* =: C\qquad(9.14\text{–}9.17)$$
Mit $C = |C|e^{i\delta'}$ (Phasenfaktor, 9.18):
$$x(t) = |C|\left\{e^{i(\omega_0t+\delta')}+e^{-i(\omega_0t+\delta')}\right\} = \underbrace{2|C|}_{=:A}\cos(\omega_0t+\delta')\qquad(9.19\text{–}9.23)$$
Mit $\delta' = \delta-\pi/2$ und $e^{\pm i\pi/2} = \pm i$ (9.24–9.28):
$$x(t) = A\sin(\omega_0t+\delta)\qquad(9.29)$$
Gleichwertig: $x(t) = B\sin\omega t + C\cos\omega t$ mit $B = A\cos\delta$, $C = A\sin\delta$ (9.34, 9.35). Immer zwei reelle Konstanten.`,
    meta: "Skript: Abschnitte 9.2.2–9.2.3, Gl. (9.10)–(9.35), Abb. 9.4–9.6, S. 226–230",
    explanation: R`<b>Intuition:</b> $e^{i\omega_0t}$ ist ein Zeiger, der in der komplexen Ebene mit $\omega_0$ umläuft. Eine reelle Schwingung entsteht, wenn man zwei entgegengesetzt laufende Zeiger mit konjugierten Amplituden addiert (der Imaginärteil hebt sich weg) oder einfach den Realteil eines einzigen Zeigers nimmt.<br><br>
<b>Zwei Konstanten:</b> Eine DGL 2. Ordnung braucht zwei Anfangsbedingungen. Die komplexen $C_1$, $C_2$ wären vier reelle Zahlen; die Realitätsbedingung halbiert das auf zwei ($A$, $\delta$).<br><br>
<b>Frequenz versus Amplitude:</b> $\omega_0$ kommt aus der DGL (Systemeigenschaft); $A$ und $\delta$ kommen aus den Anfangsbedingungen. Die Periode hängt nicht von der Amplitude ab (Isochronie) – genau das ist die Linearität.<br><br>
<b>Kreispendel-Experiment (9.2.3):</b> Die Projektion einer gleichförmigen Kreisbewegung auf eine Achse ist eine harmonische Schwingung: $y = R\sin\omega t$. Pendel und projizierter Schatten laufen synchron.`,
    derivation: R`Übergang von der Kosinus- zur Sinusform:
<ol class="fc-steps">
<li>$\delta' = \delta - \tfrac\pi2$<em>Phase umbenennen (9.24).</em></li>
<li>$x = |C|\left\{e^{i(\omega_0t+\delta)}e^{-i\pi/2} + e^{-i(\omega_0t+\delta)}e^{+i\pi/2}\right\}$<em>In (9.19) einsetzen (9.25).</em></li>
<li>$= |C|\left\{-ie^{i(\omega_0t+\delta)} + ie^{-i(\omega_0t+\delta)}\right\}$<em>$e^{\pm i\pi/2} = \pm i$ (9.26).</em></li>
<li>$= -i|C|\cdot2i\sin(\omega_0t+\delta)$<em>$e^{i\varphi}-e^{-i\varphi} = 2i\sin\varphi$ (9.27).</em></li>
<li>$= 2|C|\sin(\omega_0t+\delta) = A\sin(\omega_0t+\delta)$<em>$-i\cdot i = 1$ (9.28, 9.29).</em></li>
</ol>`,
    example: R`<b>Zahlen:</b> $C = 0{,}025\,e^{i\pi/3}\,\text{m}$ ergibt $A = 0{,}05\,\text{m}$, $\delta' = 60^\circ$, also $x = 0{,}05\cos(\omega_0t+60^\circ) = 0{,}05\sin(\omega_0t+150^\circ)$.<br>
<b>Umrechnung:</b> $x = 3\sin\omega t + 4\cos\omega t$ (in cm): $A = \sqrt{9+16} = 5\,\text{cm}$, $\tan\delta = C/B = 4/3$, $\delta = 53{,}1^\circ$.`,
    counterexample: R`<b>$C_1$ und $C_2$ unabhängig wählen:</b> Z. B. $C_1 = 1$, $C_2 = 0$ ergibt $x = e^{i\omega_0t}$, eine komplexe Lösung ohne physikalische Bedeutung als Auslenkung. Erst $C_2 = C_1^*$ oder das Nehmen des Realteils macht daraus eine messbare Schwingung.`,
    pitfalls: R`<ul><li>Vergessen, dass nur der Realteil (oder die Kombination mit $C_2 = C_1^*$) physikalisch ist.</li>
<li>$A = |C|$ statt $A = 2|C|$ setzen.</li>
<li>Sinus- und Kosinusphase ($\delta$ vs. $\delta'$) mischen; sie unterscheiden sich um $\pi/2$.</li></ul>`
  },
  {
    id: "ph9_x_v_a_periode",
    title: "Periode, Frequenz und Phasenbeziehung von x, v und a",
    category: "9.2 Harmonische Schwingungen",
    type: "gesetz",
    front: R`Leite $T = 2\pi/\omega$ und $\nu = 1/T$ her. Wie verhalten sich Auslenkung, Geschwindigkeit und Beschleunigung einer harmonischen Schwingung zueinander (Amplituden, Phasen)? Was gilt an den Umkehrpunkten und beim Nulldurchgang?`,
    back: R`<b>Periode:</b> Nach einer Periode wächst die Phase um $2\pi$:
$$\omega(t+T)+\delta = \omega t+\delta+2\pi\;\Rightarrow\;T = \frac{2\pi}\omega,\qquad\nu = \frac1T = \frac{\omega}{2\pi}\ \ [\text{Hz}]\qquad(9.36\text{–}9.40)$$
<b>Ableitungen:</b>
$$x = A\sin(\omega t+\delta),\quad v = A\omega\cos(\omega t+\delta),\quad a = -A\omega^2\sin(\omega t+\delta)\qquad(9.41\text{–}9.46)$$
Amplituden $A$, $A\omega$, $A\omega^2$. $v$ eilt $x$ um $\pi/2$ voraus; $a$ ist gegenphasig zu $x$ ($a = -\omega^2x$).
<ul><li><b>Umkehrpunkt</b> ($x = \pm A$): $v = 0$, $a = \mp A\omega^2$ maximal (9.49).</li>
<li><b>Nulldurchgang</b> ($x = 0$): $v = \pm A\omega$ maximal, $a = 0$ (9.50).</li></ul>`,
    meta: "Skript: Abschnitte 9.2.4–9.2.5, Gl. (9.36)–(9.50), Abb. 9.7, S. 230–233",
    explanation: R`<b>Intuition:</b> Die Beschleunigung zeigt immer zur Ruhelage zurück und ist am stärksten, wo die Feder am stärksten gespannt ist (Umkehrpunkt). Dort steht der Körper kurz still. In der Mitte ist die Feder entspannt, keine Kraft, aber maximale Geschwindigkeit.<br><br>
<b>Abhängigkeiten:</b> Bei fester Amplitude wachsen $v_{\max}\propto\omega$ und $a_{\max}\propto\omega^2$. Deshalb sind hochfrequente Vibrationen gefährlich: Schon kleine Amplituden geben grosse Beschleunigungen (z. B. Ultraschallreiniger, Maschinenfundamente).<br><br>
<b>$\omega$ vs. $\nu$:</b> $\omega$ (Kreisfrequenz, rad/s bzw. $\text{s}^{-1}$) zählt die Phase; $\nu$ (Hz) zählt ganze Schwingungen. Faktor $2\pi$.<br><br>
<b>Zusammenhang:</b> Die Beziehung $a = -\omega^2x$ ist die DGL selbst. Jede Bewegung mit $a\propto-x$ ist harmonisch, mit $\omega^2$ als Proportionalitätskonstante.`,
    derivation: R`<ol class="fc-steps">
<li>$\varphi(t+T) = \varphi(t)+2\pi$<em>Sinus wiederholt sich, wenn die Phase um $2\pi$ wächst (9.36).</em></li>
<li>$\omega T = 2\pi\Rightarrow T = 2\pi/\omega$<em>$\omega t$ und $\delta$ kürzen sich (9.37–9.39).</em></li>
<li>$v = \dot x = A\omega\cos(\omega t+\delta) = A\omega\sin(\omega t+\delta+\tfrac\pi2)$<em>Kettenregel; Kosinus = Sinus mit Phase $+\pi/2$ (9.42).</em></li>
<li>$a = \dot v = -A\omega^2\sin(\omega t+\delta) = -\omega^2x$<em>Nochmals ableiten (9.44); Phase $+\pi$ gegenüber $x$.</em></li>
<li>$\sin(\omega t+\delta) = \pm1\Rightarrow\cos = 0$: $v = 0$, $|a| = A\omega^2$<em>Umkehrpunkt (9.49).</em></li>
</ol>`,
    example: R`Feder mit $\omega = 20\,\text{s}^{-1}$ und $A = 5\,\text{cm}$: $T = 0{,}314\,\text{s}$, $v_{\max} = 1\,\text{m/s}$, $a_{\max} = 20\,\text{m/s}^2\approx2g$.<br>
<b>Lautsprechermembran</b> bei $1\,\text{kHz}$ mit $A = 0{,}1\,\text{mm}$: $\omega = 6283\,\text{s}^{-1}$, $a_{\max} = 10^{-4}\cdot6283^2 = 3950\,\text{m/s}^2\approx400g$.`,
    counterexample: R`<b>Gleichförmige Hin-und-her-Bewegung</b> (Dreiecksverlauf, konstante Geschwindigkeit, abrupte Umkehr) ist periodisch, aber nicht harmonisch: An den Umkehrpunkten wäre die Beschleunigung unendlich, sonst null. Periodisch heisst noch lange nicht sinusförmig.`,
    pitfalls: R`<ul><li>$\omega$ und $\nu$ verwechseln (Faktor $2\pi$).</li>
<li>Annehmen, die Beschleunigung sei bei maximaler Geschwindigkeit maximal.</li>
<li>Vergessen, dass $a$ der Auslenkung immer entgegengerichtet ist.</li></ul>`
  },
  {
    id: "ph9_komplexe_darstellung",
    title: "Komplexe Darstellung: Zeiger und Ableitung als Drehung um π/2",
    category: "9.2 Harmonische Schwingungen",
    type: "konzept",
    front: R`Warum stellt man Schwingungen gern als $z(t) = Ae^{i\omega t}$ dar? Was bedeutet geometrisch die Ableitung nach $\varphi = \omega t$ (Multiplikation mit $i$), und wie erhält man daraus die physikalische Grösse?`,
    back: R`Die Projektion einer Kreisbewegung ergibt eine harmonische Schwingung. Deshalb liegt die Darstellung in der komplexen Ebene nahe:
$$z(t) = Ae^{i\omega t} = Ae^{i\varphi}\qquad(9.51)$$
Ableitungen nach dem Winkel $\varphi = \omega t$ (unterscheiden sich von der Zeitableitung nur um den Faktor $\omega$):
$$\frac{dz}{d\varphi} = iAe^{i\varphi} = iz,\qquad\frac{d^2z}{d\varphi^2} = i^2z = -z,\qquad\frac{d^3z}{d\varphi^3} = -iz\qquad(9.52\text{–}9.54)$$
Jede Ableitung multipliziert mit $i$, einem <b>Rotator</b>, der den Zeiger um $\pi/2$ dreht, ohne den Betrag zu ändern (Abb. 9.8). Man rechnet komplex (Exponentialfunktionen sind einfacher) und nimmt am Ende den Real- oder Imaginärteil als physikalisches Resultat.`,
    meta: "Skript: Abschnitt 9.2.6, Gl. (9.51)–(9.54), Abb. 9.8, S. 233–234",
    explanation: R`<b>Intuition:</b> Ein Zeiger der Länge $A$ dreht sich mit $\omega$; sein Schatten auf der reellen Achse ist die Schwingung. Die Geschwindigkeit ist ein zweiter Zeiger, $\pi/2$ voraus und $\omega$-mal länger; die Beschleunigung ist $\pi$ voraus (entgegengesetzt) und $\omega^2$-mal länger. Alle drei drehen starr miteinander.<br><br>
<b>Warum einfacher?</b> Ableiten wird zur Multiplikation ($\frac{d}{dt}\to i\omega$), Differentialgleichungen werden zu algebraischen Gleichungen. Phasenverschiebungen sind Faktoren $e^{i\delta}$, Überlagerungen sind Vektoradditionen (9.5.2).<br><br>
<b>Vorsicht bei Produkten:</b> Für lineare Operationen (Addition, Ableitung, Multiplikation mit reellen Konstanten) darf man den Realteil am Ende nehmen. Für nichtlineare Grössen wie Energie oder Leistung ($x^2$, $F\dot x$) nicht: $\text{Re}(z)^2\neq\text{Re}(z^2)$.<br><br>
<b>Zusammenhang:</b> Dieselbe Methode wird bei der erzwungenen Schwingung (Ansatz $x_p = x_0e^{i\Omega t}$) und in der Elektrotechnik (komplexe Impedanzen) verwendet.`,
    derivation: R`<ol class="fc-steps">
<li>$z = Ae^{i\varphi} = A(\cos\varphi + i\sin\varphi)$<em>Euler-Formel (9.20).</em></li>
<li>$\dfrac{dz}{d\varphi} = iAe^{i\varphi}$<em>Ableitung der Exponentialfunktion (9.52).</em></li>
<li>$i = e^{i\pi/2}\Rightarrow\dfrac{dz}{d\varphi} = Ae^{i(\varphi+\pi/2)}$<em>Multiplikation mit $i$ = Drehung um $\pi/2$, Betrag 1.</em></li>
<li>$\dfrac{dz}{dt} = \omega\dfrac{dz}{d\varphi} = i\omega z$<em>Kettenregel mit $\varphi = \omega t$.</em></li>
<li>$\dfrac{d^2z}{dt^2} = -\omega^2z\Rightarrow\ddot z+\omega^2z = 0$<em>Der Zeiger löst die Schwingungsgleichung; Real- und Imaginärteil einzeln ebenso.</em></li>
</ol>`,
    example: R`$z = 0{,}05\,e^{i20t}\,\text{m}$: $\dot z = i\cdot20\cdot z$, Betrag $1\,\text{m/s}$, Phase $+90^\circ$. $\ddot z = -400z$, Betrag $20\,\text{m/s}^2$, Phase $180^\circ$.<br>
Physikalisch: $x = \text{Re}\,z = 0{,}05\cos20t$, $v = -\sin20t\,\text{m/s}$, $a = -20\cos20t\,\text{m/s}^2$.`,
    counterexample: R`<b>Energie aus komplexen Grössen:</b> $\tfrac12k\,\text{Re}(z^2) = \tfrac12kA^2\cos2\omega t$ schwankt um null und wird sogar negativ – unsinnig für eine potentielle Energie. Richtig ist $\tfrac12k(\text{Re}\,z)^2 = \tfrac12kA^2\cos^2\omega t$. Bei quadratischen Grössen erst den Realteil nehmen, dann quadrieren (oder $\tfrac12\text{Re}(z\,w^*)$ für Mittelwerte).`,
    pitfalls: R`<ul><li>Bei nichtlinearen Grössen (Energie, Leistung) mit komplexen Ausdrücken rechnen.</li>
<li>Den Faktor $\omega$ beim Übergang von $d/d\varphi$ zu $d/dt$ vergessen.</li>
<li>Den Imaginärteil für physikalisch bedeutungslos halten; auch er löst die DGL.</li></ul>`
  },
  {
    id: "ph9_anfangsbedingungen",
    title: "Anfangsbedingungen: Amplitude A und Phase δ aus x₀ und v₀",
    category: "9.2 Harmonische Schwingungen",
    type: "herleitung",
    front: R`Bestimme für $x(t) = A\sin(\omega t+\delta)$ die Amplitude $A$ und die Phase $\delta$ aus der Anfangsauslenkung $x_0$ und der Anfangsgeschwindigkeit $v_0$. Hängt die Amplitude von der Periode ab?`,
    back: R`$$x(0) = A\sin\delta\equiv x_0,\qquad v(0) = A\omega\cos\delta\equiv v_0\qquad(9.55,\,9.56)$$
Division:
$$\tan\delta = \frac{x_0\,\omega}{v_0}\;\Rightarrow\;\delta = \arctan\frac{x_0\,\omega}{v_0}\qquad(9.57,\,9.58)$$
Mit $\cos^2\delta+\sin^2\delta = 1$:
$$\left(\frac{v_0}{A\omega}\right)^2+\left(\frac{x_0}{A}\right)^2 = 1\;\Rightarrow\;A = \sqrt{x_0^2+\frac{v_0^2}{\omega^2}}\qquad(9.59\text{–}9.61)$$
<b>Vorsicht:</b> Es scheint, als hänge $A$ von $T = 2\pi/\omega$ ab. Das ist nicht der Fall: Bei gegebenem $A$ und $\omega$ sind $x_0$ und $v_0$ nicht unabhängig, sondern liegen auf einer Ellipse mit Halbachsen $A$ und $A\omega$ (Abb. 9.9).`,
    meta: "Skript: Abschnitt 9.2.7, Gl. (9.55)–(9.61), Abb. 9.9, S. 235–236",
    explanation: R`<b>Intuition:</b> Die Amplitude ist die maximale Auslenkung, die der Oszillator mit seiner Energie erreicht. Startet er bei $x_0$ mit Geschwindigkeit $v_0$, kommt zur Auslenkung noch der „Schwung“ $v_0/\omega$ hinzu, quadratisch addiert wie zwei senkrechte Zeiger.<br><br>
<b>Energieargument:</b> $\tfrac12kA^2 = \tfrac12kx_0^2+\tfrac12mv_0^2$ ergibt mit $k = m\omega^2$ genau dieselbe Formel. Die Amplitude ist also eine Energiegrösse.<br><br>
<b>Abhängigkeiten:</b> Bei gegebenem Stoss $v_0$ (aus $x_0 = 0$) ist $A = v_0/\omega$: Eine steife Feder (grosses $\omega$) wird weniger weit ausgelenkt.<br><br>
<b>Phasenraum:</b> Die Ellipse in Abb. 9.9 ist die Bahn im $(x,v)$-Raum. Jeder Punkt der Ellipse ist ein möglicher Anfangszustand derselben Schwingung, nur zu einem anderen Zeitpunkt (andere Phase).`,
    derivation: R`<ol class="fc-steps">
<li>$x_0 = A\sin\delta$, $v_0 = A\omega\cos\delta$<em>Lösung und Ableitung bei $t = 0$ (9.55, 9.56).</em></li>
<li>$\dfrac{x_0}{v_0} = \dfrac{\tan\delta}{\omega}\Rightarrow\tan\delta = \dfrac{x_0\omega}{v_0}$<em>Dividieren; $A$ fällt heraus (9.57).</em></li>
<li>$\sin\delta = \dfrac{x_0}{A}$, $\cos\delta = \dfrac{v_0}{A\omega}$<em>Nach den Winkelfunktionen auflösen.</em></li>
<li>$\dfrac{x_0^2}{A^2}+\dfrac{v_0^2}{A^2\omega^2} = 1$<em>$\sin^2+\cos^2 = 1$; Ellipsengleichung in $(x_0,v_0)$ (9.60).</em></li>
<li>$A = \sqrt{x_0^2+v_0^2/\omega^2}$<em>Nach $A$ auflösen (9.61).</em></li>
<li>Quadrant von $\delta$ aus den Vorzeichen von $\sin\delta$ ($\text{sgn}\,x_0$) und $\cos\delta$ ($\text{sgn}\,v_0$)<em>Der Arkustangens allein liefert nur Werte in $(-\pi/2,\pi/2)$.</em></li>
</ol>`,
    example: R`$\omega = 20\,\text{s}^{-1}$, $x_0 = 3\,\text{cm}$, $v_0 = 0{,}8\,\text{m/s}$: $A = \sqrt{0{,}03^2+0{,}04^2}\,\text{m} = 5\,\text{cm}$; $\tan\delta = 0{,}03\cdot20/0{,}8 = 0{,}75$, $\delta = 36{,}9^\circ$.<br>
Mit $v_0 = -0{,}8\,\text{m/s}$ (gleicher Betrag, nach innen): $A$ gleich, aber $\delta = 180^\circ-36{,}9^\circ = 143{,}1^\circ$.`,
    counterexample: R`<b>Start aus der Ruhe am Umkehrpunkt</b> ($v_0 = 0$): $\tan\delta\to\infty$, also $\delta = \pi/2$ und $A = |x_0|$. Die Formel $\delta = \arctan(x_0\omega/v_0)$ ist hier nicht direkt auswertbar; man liest $\delta$ besser aus $\sin\delta$ und $\cos\delta$ ab.`,
    pitfalls: R`<ul><li>Den Arkustangens ohne Quadrantenkorrektur verwenden.</li>
<li>$A = x_0 + v_0/\omega$ (linear statt quadratisch addiert).</li>
<li>Glauben, $A$ hänge bei gegebenem Energieinhalt von $T$ ab.</li></ul>`
  },
  {
    id: "ph9_energie_harmonisch",
    title: "Energie des harmonischen Oszillators: E = ½ m ω² A² und Mittelwerte",
    category: "9.2 Harmonische Schwingungen",
    type: "herleitung",
    front: R`Leite durch Multiplikation der Bewegungsgleichung mit $m\dot x$ den Energiesatz des harmonischen Oszillators her. Wie gross ist die Gesamtenergie, und wie verteilt sie sich im Zeitmittel auf kinetische und potentielle Energie?`,
    back: R`$$\ddot x+\omega^2x = 0\;\Big|\cdot m\dot x\;\Rightarrow\;\frac{d}{dt}\left(\tfrac12m\dot x^2+\tfrac12m\omega^2x^2\right) = 0\qquad(9.62\text{–}9.65)$$
$$\underbrace{\tfrac12m\dot x^2}_{E_\text{kin}}+\underbrace{\tfrac12m\omega^2x^2}_{E_\text{pot}} = \text{const} =: E_\text{tot}\qquad(9.66)$$
Mit $x = A\sin(\omega t+\delta)$:
$$E_\text{tot} = \tfrac12m\omega^2A^2\left[\cos^2(\omega t+\delta)+\sin^2(\omega t+\delta)\right] = \tfrac12m\omega^2A^2 = \tfrac12kA^2\qquad(9.67\text{–}9.70)$$
Zeitmittel über eine Periode:
$$\langle E_\text{kin}\rangle = \tfrac12m\omega^2A^2\frac{\int_0^T\cos^2(\omega t+\delta)\,dt}{T} = \tfrac12E_\text{tot},\qquad\langle E_\text{kin}\rangle = \langle E_\text{pot}\rangle = \tfrac12E_\text{tot}\qquad(9.71\text{–}9.73)$$`,
    meta: "Skript: Abschnitt 9.2.8, Gl. (9.62)–(9.73), Abb. 9.10, S. 235–237",
    explanation: R`<b>Intuition:</b> Die Energie pendelt zwischen Feder und Bewegung hin und her: am Umkehrpunkt alles potentiell, in der Ruhelage alles kinetisch. Weil Sinus² und Kosinus² im Mittel gleich gross sind ($\tfrac12$), bekommt jede Form im Mittel die Hälfte.<br><br>
<b>Abhängigkeiten:</b> $E\propto A^2$ und $E\propto\omega^2$ (bei fester Masse). Doppelte Amplitude ergibt vierfache Energie. Bei gleicher Energie hat ein hochfrequenter Oszillator eine kleinere Amplitude.<br><br>
<b>Grafisch (Abb. 9.10):</b> In der Parabel $E_\text{pot} = \tfrac12kx^2$ legt der horizontale Schnitt bei $E_\text{tot}$ die Umkehrpunkte $\pm A$ fest; an jeder Stelle $x$ ist der Abstand zwischen Parabel und Linie die kinetische Energie.<br><br>
<b>Zusammenhang:</b> Dieselbe Integrationsmethode wie in Kap. 3.11.4.1. Die Gleichverteilung $\langle E_\text{kin}\rangle = \langle E_\text{pot}\rangle$ ist ein Spezialfall des Virialsatzes und taucht beim Gleichverteilungssatz der Thermodynamik wieder auf ($\tfrac12k_BT$ pro quadratischem Term, Kap. 10).`,
    derivation: R`<ol class="fc-steps">
<li>$m\dot x\ddot x + m\omega^2x\dot x = 0$<em>DGL mit $m\dot x$ multiplizieren (9.62, 9.63).</em></li>
<li>$\dot x\ddot x = \dfrac{d}{dt}\dfrac{\dot x^2}{2}$, $x\dot x = \dfrac{d}{dt}\dfrac{x^2}{2}$<em>Kettenregel rückwärts (9.64).</em></li>
<li>$\dfrac{d}{dt}\left(\tfrac12m\dot x^2+\tfrac12m\omega^2x^2\right) = 0$<em>Die Summe ist eine Erhaltungsgrösse (9.65, 9.66).</em></li>
<li>$E_\text{tot} = \tfrac12mA^2\omega^2\cos^2(\cdot) + \tfrac12m\omega^2A^2\sin^2(\cdot) = \tfrac12m\omega^2A^2$<em>Lösung einsetzen (9.69, 9.70).</em></li>
<li>$\dfrac1T\displaystyle\int_0^T\cos^2(\omega t+\delta)\,dt = \dfrac12$<em>$\cos^2 = \tfrac12(1+\cos2\varphi)$; der Kosinusanteil mittelt sich über eine Periode weg (9.71, 9.72).</em></li>
</ol>`,
    example: R`$k = 200\,\text{N/m}$, $A = 5\,\text{cm}$: $E = \tfrac12\cdot200\cdot0{,}0025 = 0{,}25\,\text{J}$. Bei $x = A/2$: $E_\text{pot} = \tfrac14E = 0{,}0625\,\text{J}$, $E_\text{kin} = 0{,}1875\,\text{J}$, also $v = \sqrt{2\cdot0{,}1875/0{,}5} = 0{,}87\,\text{m/s}$ ($= \tfrac{\sqrt3}2v_{\max}$).`,
    counterexample: R`<b>Mittelwert am Ort statt in der Zeit:</b> Mittelt man $E_\text{pot}$ gleichmässig über die <i>Orte</i> $-A\le x\le A$, erhält man $\tfrac13E_\text{tot}$, nicht $\tfrac12$. Der Oszillator verweilt länger an den Umkehrpunkten (dort ist er langsam); der Zeitmittelwert gewichtet diese Orte stärker.`,
    pitfalls: R`<ul><li>$E = \tfrac12mA^2\omega$ (Exponent von $\omega$ falsch).</li>
<li>Über eine Nicht-Periode mitteln und $\tfrac12$ erwarten.</li>
<li>Den Energiesatz mit Dämpfung weiterverwenden (9.3.3).</li></ul>`
  },

  // ========================================================================
  // 9.3 GEDÄMPFTE SCHWINGUNGEN
  // ========================================================================
  {
    id: "ph9_gedaempft_schwach",
    title: "Gedämpfter Oszillator: ẍ + 2ρẋ + ω₀²x = 0 und schwache Dämpfung",
    category: "9.3 Gedämpfte Schwingungen",
    type: "herleitung",
    front: R`Stelle die Bewegungsgleichung für einen Federschwinger mit Reibungskraft $F_R = -\kappa\dot x$ auf und definiere $\omega_0$ und $\rho$. Löse sie für <b>schwache Dämpfung</b> $\rho\lt\omega_0$. Wie gross ist die Frequenz der gedämpften Schwingung?`,
    back: R`$$m\ddot x = -kx-\kappa\dot x\;\Rightarrow\;\ddot x+\frac\kappa m\dot x+\frac kmx = 0\qquad(9.74,\,9.75)$$
$$\omega_0 := \sqrt{\frac km},\qquad\rho := \frac{\kappa}{2m}\qquad(9.76)$$
$$\ddot x+2\rho\dot x+\omega_0^2x = 0\qquad(9.77)$$
Charakteristische Gleichung und Diskriminante:
$$\lambda^2+2\rho\lambda+\omega_0^2 = 0,\qquad\Delta = 4(\rho^2-\omega_0^2)\qquad(9.78,\,9.79)$$
<b>Schwache Dämpfung</b> ($\rho\lt\omega_0$, $\Delta\lt0$):
$$x(t) = (C_1\cos\omega t+C_2\sin\omega t)\,e^{-\rho t} = A\,e^{-\rho t}\sin(\omega t+\delta),\qquad\omega = \sqrt{\omega_0^2-\rho^2}\qquad(9.80\text{–}9.82)$$
mit $A = \sqrt{C_1^2+C_2^2}$, $\sin\delta = C_1/A$, $\cos\delta = C_2/A$ (9.83–9.85). Es gilt $\omega\lt\omega_0$; die Schwingung hat eine exponentiell abfallende Amplitude $\tilde A = Ae^{-\rho t}$.`,
    meta: "Skript: Abschnitt 9.3.1, Gl. (9.74)–(9.85), Abb. 9.11, S. 238–240",
    explanation: R`<b>Intuition:</b> Die Reibung entzieht bei jeder Schwingung etwas Energie. Die Amplitude schrumpft geometrisch (gleicher Faktor pro Periode), also exponentiell. Gleichzeitig bremst die Reibung die Bewegung, sodass jede Schwingung etwas länger dauert: $\omega\lt\omega_0$.<br><br>
<b>Bedeutung von $\rho$:</b> Abklingrate der <i>Amplitude</i> (Einheit $\text{s}^{-1}$); nach $1/\rho$ ist die Amplitude auf $1/e$ gefallen. Die Energie fällt doppelt so schnell ($e^{-2\rho t}$, 9.3.3).<br><br>
<b>Abhängigkeiten:</b> $\omega = \omega_0\sqrt{1-(\rho/\omega_0)^2}\approx\omega_0\left(1-\frac{\rho^2}{2\omega_0^2}\right)$. Die Frequenzverschiebung ist quadratisch in der Dämpfung, also bei schwacher Dämpfung winzig.<br><br>
<b>Zusammenhang:</b> Lösungstheorie der linearen DGL mit konstanten Koeffizienten (Kap. 12.4.1); die drei Fälle entsprechen dem Vorzeichen der Diskriminante. Das Logarithmische Dekrement $\Lambda = \ln\frac{x(t)}{x(t+T)} = \rho T$ wird im Labor zur Messung von $\rho$ benutzt.`,
    derivation: R`<ol class="fc-steps">
<li>$\lambda_{1,2} = -\rho\pm\sqrt{\rho^2-\omega_0^2}$<em>Lösungen der quadratischen Gleichung (9.78).</em></li>
<li>$\rho\lt\omega_0$: $\lambda_{1,2} = -\rho\pm i\omega$, $\omega = \sqrt{\omega_0^2-\rho^2}$<em>Negative Diskriminante, komplex konjugierte Wurzeln (9.81).</em></li>
<li>$x = e^{-\rho t}\left(\tilde C_1e^{i\omega t}+\tilde C_2e^{-i\omega t}\right)$<em>Überlagerung beider Exponentiallösungen; gemeinsamer Faktor $e^{-\rho t}$.</em></li>
<li>$x = e^{-\rho t}(C_1\cos\omega t+C_2\sin\omega t)$<em>Reelle Form wie beim ungedämpften Oszillator (9.80).</em></li>
<li>$C_1\cos\omega t + C_2\sin\omega t = A\sin(\omega t+\delta)$<em>Additionstheorem mit $C_1 = A\sin\delta$, $C_2 = A\cos\delta$ (9.82–9.85).</em></li>
</ol>`,
    example: R`$m = 0{,}5\,\text{kg}$, $k = 200\,\text{N/m}$, $\kappa = 2\,\text{kg/s}$: $\omega_0 = 20\,\text{s}^{-1}$, $\rho = 2\,\text{s}^{-1}$, $\omega = \sqrt{396} = 19{,}90\,\text{s}^{-1}$ (nur 0,5 % kleiner). Pro Periode ($T = 0{,}316\,\text{s}$) fällt die Amplitude auf $e^{-\rho T} = 0{,}53$; nach 5 Perioden auf 4 %.`,
    counterexample: R`<b>Coulomb-Reibung</b> (trockene Gleitreibung, $F_R = -\mu mg\,\text{sgn}\,\dot x$): nicht geschwindigkeitsproportional. Die Amplitude nimmt dann pro halber Periode um einen <i>festen Betrag</i> $2\mu mg/k$ ab, also linear statt exponentiell, und die Bewegung stoppt nach endlich vielen Schwingungen. Die Formeln dieses Abschnitts gelten nur für $F_R\propto-\dot x$.`,
    pitfalls: R`<ul><li>$\rho = \kappa/m$ statt $\kappa/(2m)$ setzen.</li>
<li>Annehmen, die gedämpfte Frequenz sei gleich $\omega_0$.</li>
<li>Die Abklingrate der Amplitude ($\rho$) mit der der Energie ($2\rho$) verwechseln.</li></ul>`
  },
  {
    id: "ph9_aperiodisch",
    title: "Aperiodischer Grenzfall und Kriechfall (ρ = ω₀ und ρ > ω₀)",
    category: "9.3 Gedämpfte Schwingungen",
    type: "konzept",
    front: R`Wie sehen die Lösungen des gedämpften Oszillators für <b>kritische Dämpfung</b> $\rho = \omega_0$ und <b>überkritische Dämpfung</b> $\rho\gt\omega_0$ aus? Warum kann der Körper höchstens einmal die Richtung wechseln? Wofür nutzt man den aperiodischen Grenzfall?`,
    back: R`<b>Kritische Dämpfung</b> ($\rho = \omega_0$, $\Delta = 0$, doppelte Nullstelle $\lambda = -\rho$):
$$x(t) = (C_1+C_2t)\,e^{-\rho t}\qquad(9.86)$$
„Asymptotischer Grenzfall“: $\omega\to0$, $T\to\infty$ (Abb. 9.12). $x\to0$; $\dot x$ wird höchstens einmal null.<br><br>
<b>Überkritische Dämpfung, Kriechfall</b> ($\rho\gt\omega_0$, $\Delta\gt0$):
$$x(t) = C_1e^{\lambda_1t}+C_2e^{\lambda_2t},\qquad\lambda_{1,2} = -\rho\pm\sqrt{\rho^2-\omega_0^2}\lt0\qquad(9.87,\,9.88)$$
$\lim_{t\to\infty}x = 0$ (9.89). Richtungswechsel nur, wenn $\dot x = C_1\lambda_1e^{\lambda_1t}+C_2\lambda_2e^{\lambda_2t} = 0$, also
$$e^{(\lambda_1-\lambda_2)t} = -\frac{\lambda_2C_2}{\lambda_1C_1}\qquad(9.90,\,9.91)$$
Diese Gleichung hat höchstens eine Lösung: Der Wagen ändert höchstens einmal die Richtung und kriecht dann auf den Nullpunkt zu (Abb. 9.13).`,
    meta: "Skript: Abschnitt 9.3.1, Fälle 2–3, Gl. (9.86)–(9.91), Abb. 9.12–9.13, S. 240–241",
    explanation: R`<b>Intuition:</b> Bei starker Reibung „sirupt“ das System in die Ruhelage zurück, ohne überzuschwingen. Die Feder schafft es nicht mehr, den Körper über die Ruhelage hinaus zu werfen.<br><br>
<b>Warum ist der Grenzfall der schnellste?</b> Im Kriechfall dominiert für grosse Zeiten der langsam abklingende Term mit $\lambda_1 = -\rho+\sqrt{\rho^2-\omega_0^2}$; dessen Betrag wird mit wachsender Dämpfung <i>kleiner</i> (für $\rho\gg\omega_0$: $\lambda_1\approx-\omega_0^2/(2\rho)$). Zu viel Reibung macht das System also träge. Bei $\rho = \omega_0$ erreicht die Abklingrate ihr Maximum $\omega_0$ ohne Überschwingen.<br><br>
<b>Abhängigkeiten:</b> Kritische Reibungskonstante $\kappa_c = 2m\omega_0 = 2\sqrt{km}$.<br><br>
<b>Anwendungen:</b> Stossdämpfer im Auto (etwas unterkritisch, für Komfort), Zeigermessinstrumente, Türschliesser, Regelkreise: Man will schnell in die Ruhe, ohne zu pendeln.`,
    derivation: R`Warum $(C_1 + C_2t)e^{-\rho t}$ im Grenzfall die DGL löst:
<ol class="fc-steps">
<li>$x = te^{-\rho t}$: $\dot x = (1-\rho t)e^{-\rho t}$<em>Produktregel.</em></li>
<li>$\ddot x = (-2\rho+\rho^2t)e^{-\rho t}$<em>Nochmals ableiten.</em></li>
<li>$\ddot x+2\rho\dot x+\rho^2x = e^{-\rho t}\left[-2\rho+\rho^2t+2\rho-2\rho^2t+\rho^2t\right] = 0$<em>Mit $\omega_0 = \rho$ einsetzen: Alles hebt sich weg.</em></li>
<li>$x = (C_1+C_2t)e^{-\rho t}$<em>Zusammen mit $e^{-\rho t}$ zwei unabhängige Lösungen (9.86).</em></li>
<li>$\dot x = 0\Leftrightarrow C_2 - \rho(C_1+C_2t) = 0$<em>Lineare Gleichung in $t$: höchstens ein Richtungswechsel.</em></li>
</ol>`,
    example: R`Für $m = 0{,}5\,\text{kg}$, $k = 200\,\text{N/m}$: $\kappa_c = 2\sqrt{200\cdot0{,}5} = 20\,\text{kg/s}$.<br>
Start bei $x_0 = 5\,\text{cm}$ aus der Ruhe, kritisch gedämpft: $C_1 = x_0$, $C_2 = \rho x_0$, also $x = x_0(1+20t)e^{-20t}$. Nach $0{,}25\,\text{s}$: $x = 0{,}05\cdot6\cdot e^{-5}\,\text{m} = 2{,}0\,\text{mm}$; ungedämpft wäre er nach dieser Zeit schon fast einmal hin und zurück geschwungen.`,
    counterexample: R`<b>Richtungswechsel ist möglich:</b> „Kriechfall heisst monoton“ stimmt nicht. Stösst man den Körper aus der Ruhelage kräftig an ($x_0 = 0$, $v_0\ne0$), läuft er zuerst weg, kehrt einmal um und kriecht dann zurück. Nur ein <i>zweiter</i> Richtungswechsel (also ein echtes Überschwingen und Zurückkommen) ist unmöglich.`,
    pitfalls: R`<ul><li>Im Grenzfall nur $Ce^{-\rho t}$ ansetzen (eine Konstante zu wenig).</li>
<li>Glauben, mehr Dämpfung bringe das System immer schneller zur Ruhe.</li>
<li>Die Fallunterscheidung über $\rho$ vs. $\omega$ statt $\rho$ vs. $\omega_0$ machen.</li></ul>`
  },
  {
    id: "ph9_analogien_tab91",
    title: "Analogie: lineare Schwingung, Drehschwingung, elektrischer Schwingkreis (Tab. 9.1)",
    category: "9.3 Gedämpfte Schwingungen",
    type: "konzept",
    front: R`Stelle die Bewegungsgleichungen des gedämpften Federschwingers, der gedämpften <b>Drehschwingung</b> und des <b>RLC-Schwingkreises</b> nebeneinander. Welche Grössen entsprechen sich, und wie lauten jeweils $\omega_0$ und $\rho$?`,
    back: R`Alle drei führen auf denselben DGL-Typ (Tab. 9.1):
<ul><li><b>Linear:</b> $m\ddot x = F+F_R+F_\text{ext}$, $F = -kx$, $F_R = -2m\rho\dot x$:<br>$\ddot x+2\rho\dot x+\omega_0^2x = F_\text{ext}/m$, $\omega_0 = \sqrt{k/m}$</li>
<li><b>Drehschwingung:</b> $J\ddot\varphi = M+M_R+M_\text{ext}$, $M = -\kappa\varphi$ (Richtmoment $\kappa$), $M_R = -2J\rho\dot\varphi$:<br>$\ddot\varphi+2\rho\dot\varphi+\omega_0^2\varphi = M_\text{ext}/J$, $\omega_0 = \sqrt{\kappa/J}$</li>
<li><b>Schwingkreis:</b> $U_\text{ext} = U_L+U_R+U_C$, $U_L = L\dot I$, $U_R = RI$, $U_C = Q/C$, $I = \dot Q$:<br>$\ddot Q+2\rho\dot Q+\omega_0^2Q = U_\text{ext}/L$, $\omega_0 = 1/\sqrt{LC}$, $2\rho = R/L$</li></ul>
Entsprechungen: $x\leftrightarrow\varphi\leftrightarrow Q$; $m\leftrightarrow J\leftrightarrow L$; $k\leftrightarrow\kappa\leftrightarrow1/C$; $2m\rho\leftrightarrow2J\rho\leftrightarrow R$; $F_\text{ext}\leftrightarrow M_\text{ext}\leftrightarrow U_\text{ext}$.`,
    meta: "Skript: Abschnitt 9.3.2, Tab. 9.1, Abb. 9.14–9.16, S. 241–243",
    explanation: R`<b>Intuition:</b> Physikalisch völlig verschiedene Systeme haben dieselbe Mathematik: eine Trägheit (die Änderung behindert), eine Rückstellung (die zur Ruhelage zieht) und eine Dissipation (die Energie in Wärme verwandelt). Wer einen Oszillator verstanden hat, kennt alle.<br><br>
<b>Energieformen:</b> kinetische Energie $\tfrac12mv^2$ ↔ Rotationsenergie $\tfrac12J\omega^2$ ↔ magnetische Feldenergie $\tfrac12LI^2$; Federenergie $\tfrac12kx^2$ ↔ Torsionsenergie $\tfrac12\kappa\varphi^2$ ↔ elektrische Feldenergie $\tfrac{Q^2}{2C}$; Reibungswärme ↔ Joule’sche Wärme $RI^2$.<br><br>
<b>Abhängigkeiten:</b> Mehr Trägheit senkt die Frequenz ($\omega_0\propto1/\sqrt{m},\,1/\sqrt{J},\,1/\sqrt{L}$); mehr Steifigkeit hebt sie ($\sqrt{k},\,\sqrt\kappa,\,1/\sqrt{C}$). Achtung: Beim Kondensator entspricht eine <i>kleine</i> Kapazität einer steifen Feder.<br><br>
<b>Zusammenhang:</b> Torsionspendel (Cavendish, Kap. 7) und Unruh in mechanischen Uhren sind Drehschwinger; der Schwingkreis ist der Kern jedes Radioempfängers (Resonanz, 9.4).`,
    derivation: R`Schwingkreis Schritt für Schritt (ohne äussere Spannung):
<ol class="fc-steps">
<li>$L\dot I + RI + \dfrac QC = 0$<em>Maschenregel: Die Spannungen über Spule, Widerstand und Kondensator summieren sich zu null.</em></li>
<li>$L\ddot Q + R\dot Q + \dfrac1CQ = 0$<em>$I = \dot Q$ einsetzen.</em></li>
<li>$\ddot Q + \dfrac RL\dot Q + \dfrac1{LC}Q = 0$<em>Durch $L$ teilen.</em></li>
<li>$2\rho = \dfrac RL$, $\omega_0^2 = \dfrac1{LC}$<em>Koeffizientenvergleich mit (9.77).</em></li>
<li>Kritisch für $\rho = \omega_0$: $R_c = 2\sqrt{L/C}$<em>Analog zu $\kappa_c = 2\sqrt{km}$.</em></li>
</ol>`,
    example: R`<b>Schwingkreis:</b> $L = 1\,\text{mH}$, $C = 1\,\text{nF}$: $\omega_0 = 10^6\,\text{s}^{-1}$, $\nu_0 = 159\,\text{kHz}$. Mit $R = 10\,\Omega$: $\rho = 5000\,\text{s}^{-1}$, $\rho/\omega_0 = 0{,}005$ (schwach gedämpft). $R_c = 2\sqrt{10^{-3}/10^{-9}} = 2\,\text{k}\Omega$.<br>
<b>Torsionspendel:</b> $\kappa = 10^{-3}\,\text{N m/rad}$, $J = 10^{-4}\,\text{kg m}^2$: $\omega_0 = 3{,}16\,\text{s}^{-1}$, $T = 2\,\text{s}$.`,
    counterexample: R`<b>Nicht jede Analogie trägt:</b> Ein Pendel ist nur für kleine Winkel ein harmonischer Drehschwinger ($M = -mg\ell\sin\varphi$). Ein Schwingkreis mit Eisenkernspule (Sättigung, $L$ hängt von $I$ ab) ist nichtlinear. Die Analogie gilt für die linearisierten Gleichungen.`,
    pitfalls: R`<ul><li>$C$ statt $1/C$ der Federkonstante zuordnen.</li>
<li>Den Faktor 2 in $2\rho = R/L$ vergessen.</li>
<li>Richtmoment $\kappa$ (Drehfeder) mit der Reibungskonstante $\kappa$ aus (9.75) verwechseln; das Skript nutzt dasselbe Symbol.</li></ul>`
  },
  {
    id: "ph9_energie_gedaempft_guete",
    title: "Energiebilanz der gedämpften Schwingung und Gütefaktor Q",
    category: "9.3 Gedämpfte Schwingungen",
    type: "herleitung",
    front: R`Zeige, dass bei Dämpfung $\frac{d}{dt}(E_\text{kin}+E_\text{pot}) = P_R$ gilt. Leite für schwache Dämpfung $E(t) = E_0e^{-2\rho t}$ und den <b>Gütefaktor</b> $Q = 2\pi\tau/T$ her.`,
    back: R`Multiplikation von (9.77) mit $m\dot x$:
$$\frac{d}{dt}\left(\tfrac12m\dot x^2+\tfrac12m\omega_0^2x^2\right) = -2\rho m\dot x^2 = F_R\cdot\dot x = P_R\qquad(9.92\text{–}9.95)$$
Die Energie nimmt mit der Reibungsleistung $P_R\le0$ ab.<br><br>
<b>Schwache Dämpfung</b> $\rho\ll1/T$ (9.96): Über eine Periode ist $e^{-\rho t}\approx$ konstant, also $\langle E_\text{kin}\rangle_T = \tfrac12E_\text{tot} = \tfrac12m\langle\dot x^2\rangle_T$ (9.97):
$$\bar P_R = -2\rho m\langle\dot x^2\rangle_T = -2\rho E_\text{tot}\;\Rightarrow\;\dot E_\text{tot} = -2\rho E_\text{tot}\;\Rightarrow\;E_\text{tot} = E_0e^{-2\rho t} = E_0e^{-t/\tau},\quad\tau = \frac1{2\rho}\qquad(9.98\text{–}9.102)$$
<b>Gütefaktor:</b>
$$Q := 2\pi\frac{E_\text{tot}}{E_\text{tot}(t)-E_\text{tot}(t+T)} = \frac{2\pi}{1-e^{-T/\tau}}\approx2\pi\frac\tau T\qquad(9.103\text{–}9.106)$$
$Q = 2\pi\times$ (gespeicherte Energie)/(Energieverlust pro Periode) $= \omega\tau\approx\omega_0/(2\rho)$.`,
    meta: "Skript: Abschnitt 9.3.3, Gl. (9.92)–(9.106), S. 243–245",
    explanation: R`<b>Intuition:</b> $Q$ zählt, wie viele Schwingungen (mal $2\pi$) der Oszillator ausführt, bevor seine Energie auf $1/e$ gefallen ist. Eine Stimmgabel ($Q\sim10^3$) klingt lange nach, ein Stossdämpfer ($Q\lt1$) gar nicht.<br><br>
<b>Abhängigkeiten:</b> $\tau = 1/(2\rho)$ ist die Lebensdauer der <i>Energie</i>; die Amplitude lebt doppelt so lange ($1/\rho$). $Q\propto1/\rho$: halbe Dämpfung, doppelte Güte.<br><br>
<b>Zusammenhang mit Resonanz:</b> Dasselbe $Q$ bestimmt beim getriebenen Oszillator die Überhöhung $|x_0|_\text{res}/|x_0|_{\Omega\to0}\approx Q$ und die Breite der Leistungsresonanz $\Delta\Omega\approx\omega_0/Q$ (9.4). Hohe Güte heisst: scharfe, hohe Resonanz, aber lange Einschwingzeit.<br><br>
<b>Beispiele für $Q$:</b> Quarzuhr $\sim10^4$–$10^6$, Mikrowellenresonatoren bis $10^{10}$, Atome (optische Übergänge) $\sim10^{7}$–$10^{15}$.`,
    derivation: R`<ol class="fc-steps">
<li>$m\dot x\ddot x+2\rho m\dot x^2+m\omega_0^2x\dot x = 0$<em>(9.77) mal $m\dot x$ (9.92).</em></li>
<li>$\dfrac{d}{dt}E_\text{tot} = -2\rho m\dot x^2$<em>Wie beim ungedämpften Fall; der Reibungsterm bleibt übrig (9.93).</em></li>
<li>$\overline{\dot E} = -2\rho\cdot m\langle\dot x^2\rangle = -2\rho\cdot2\langle E_\text{kin}\rangle = -2\rho E_\text{tot}$<em>Periodenmittel mit $\langle E_\text{kin}\rangle = \tfrac12E_\text{tot}$ (9.97–9.99).</em></li>
<li>$E_\text{tot}(t) = E_0e^{-2\rho t}$<em>Lösung von $\dot E = -2\rho E$ (9.101).</em></li>
<li>$1-e^{-T/\tau}\approx\dfrac T\tau$<em>Taylor erster Ordnung, da $\tau\gg T$ (9.105).</em></li>
<li>$Q = 2\pi\dfrac{\tau}{T} = \omega\tau = \dfrac{\omega}{2\rho}$<em>Einsetzen (9.106).</em></li>
</ol>`,
    example: R`Federschwinger mit $\omega_0 = 20\,\text{s}^{-1}$, $\rho = 2\,\text{s}^{-1}$: $\tau = 0{,}25\,\text{s}$, $Q\approx5$. Pro Periode bleiben $e^{-2\rho T} = 28\,\%$ der Energie.<br>
<b>Stimmgabel</b> $440\,\text{Hz}$, Energie fällt in $\tau = 2\,\text{s}$ auf $1/e$: $Q = 2\pi\cdot440\cdot2\approx5500$.`,
    counterexample: R`<b>Starke Dämpfung:</b> Für $\rho\to\omega_0$ ist die Näherung $\tau\gg T$ falsch, und die Gleichverteilung über eine Periode gilt nicht mehr. „$Q = \omega_0/(2\rho) = 0{,}5$“ im aperiodischen Grenzfall ist nur noch eine formale Kennzahl, kein „Energieverlust pro Schwingung“.`,
    pitfalls: R`<ul><li>$\tau = 1/\rho$ (Amplitude) und $\tau = 1/(2\rho)$ (Energie) verwechseln.</li>
<li>$Q$ ohne den Faktor $2\pi$ definieren (dann ist $Q$ die Zahl der Perioden bis $1/e$).</li>
<li>Annehmen, $P_R$ sei positiv (es ist eine Verlustleistung, $\le0$).</li></ul>`
  },

  // ========================================================================
  // 9.4 ERZWUNGENE SCHWINGUNGEN, RESONANZ
  // ========================================================================
  {
    id: "ph9_erzwungen_ansatz",
    title: "Erzwungene Schwingung: Einschwingvorgang und stationäre Lösung",
    category: "9.4 Erzwungene Schwingungen, Resonanz",
    type: "konzept",
    front: R`Ein gedämpfter Oszillator wird mit $F_\text{ext} = F_0\cos\Omega t$ angetrieben. Wie ist die allgemeine Lösung aufgebaut, was passiert mit der Eigenschwingung, und mit welcher Frequenz schwingt der Oszillator nach dem <b>Einschwingvorgang</b>?`,
    back: R`$$\ddot x+2\rho\dot x+\omega_0^2x = \frac{F_0}m\cos\Omega t\qquad(9.107,\,9.108)$$
Allgemeine Lösung der inhomogenen DGL = allgemeine homogene Lösung + eine partikuläre Lösung (Kap. 12.4.2):
$$x(t) = x_h(t)+x_p(t)\qquad(9.109)$$
Homogener Teil (gedämpfte Eigenschwingung):
$$x_h(t) = A_0e^{-\rho t}\cos(\omega t+\delta)\;\xrightarrow{t\gg1/\rho}\;0\qquad(9.110\text{–}9.112)$$
Nach dem <b>Einschwingvorgang</b> bleibt nur $x(t)\to x_p(t)$ (9.113): Der Oszillator schwingt mit der <b>Erregerfrequenz</b> $\Omega$, nicht mit seiner Eigenfrequenz. Ansatz:
$$x_p = x_0e^{i\Omega t},\quad x_0\in\mathbb C,\qquad F_\text{ext} = \text{Re}\{F_0e^{i\Omega t}\}\qquad(9.114,\,9.116)$$
Am Ende nimmt man $\text{Re}(x_p)$.`,
    meta: "Skript: Abschnitt 9.4.1, Gl. (9.107)–(9.114), S. 245–246",
    explanation: R`<b>Intuition:</b> Beim Einschalten der Kraft reagiert der Oszillator zuerst mit einer Mischung aus Eigenschwingung und erzwungener Bewegung (oft sieht man eine Schwebung). Die Eigenschwingung stirbt mit der Dämpfung aus; übrig bleibt, was die Kraft aufzwingt. Ein Kind auf der Schaukel, das von aussen im eigenen Takt angestossen wird, folgt am Ende diesem Takt.<br><br>
<b>Warum Periodizität keine Einschränkung ist:</b> Jede Kraft lässt sich in harmonische Anteile zerlegen (Fourier, 9.6). Wegen der Linearität antwortet der Oszillator auf jeden Anteil unabhängig, und die Antworten addieren sich.<br><br>
<b>Abhängigkeiten:</b> Die Einschwingzeit ist $\sim1/\rho = 2\tau$; bei hoher Güte dauert es entsprechend lange, bis der stationäre Zustand erreicht ist.<br><br>
<b>Zusammenhang:</b> Die Struktur „homogen + partikulär“ kennt man aus der linearen Algebra (Lösungsmenge = affiner Raum, Linalg) und aus Kap. 12.`,
    derivation: R`Warum die partikuläre Lösung genügt:
<ol class="fc-steps">
<li>$\mathcal L[x] := \ddot x+2\rho\dot x+\omega_0^2x$ ist linear<em>$\mathcal L[x_h+x_p] = \mathcal L[x_h]+\mathcal L[x_p]$.</em></li>
<li>$\mathcal L[x_h] = 0$, $\mathcal L[x_p] = \dfrac{F_0}m\cos\Omega t$<em>Also löst $x_h+x_p$ die volle Gleichung (9.109).</em></li>
<li>$|x_h|\le A_0e^{-\rho t}$<em>Die homogene Lösung klingt für $\rho\gt0$ exponentiell ab (9.111).</em></li>
<li>$t\gg1/\rho\Rightarrow x\approx x_p$<em>Anfangsbedingungen bestimmen nur $x_h$ und werden „vergessen“ (9.112, 9.113).</em></li>
<li>$\mathcal L[x_0e^{i\Omega t}] = (-\Omega^2+2i\rho\Omega+\omega_0^2)x_0e^{i\Omega t}$<em>Mit dem Exponentialansatz wird $\mathcal L$ zur Multiplikation (9.115).</em></li>
</ol>`,
    example: R`Oszillator mit $\rho = 2\,\text{s}^{-1}$: Nach $t = 5/\rho = 2{,}5\,\text{s}$ ist die Eigenschwingung auf $e^{-5} = 0{,}7\,\%$ abgeklungen.<br>
Stimmgabel als Erreger einer zweiten ($\rho\approx0{,}25\,\text{s}^{-1}$): Einschwingen dauert etwa $20\,\text{s}$.`,
    counterexample: R`<b>Ohne Dämpfung</b> ($\rho = 0$) klingt die Eigenschwingung nie ab. Es gibt keinen stationären Zustand im strengen Sinn; die Bewegung bleibt eine Überlagerung zweier Frequenzen (Schwebung), und bei $\Omega = \omega_0$ wächst die Amplitude sogar linear mit der Zeit ($x\propto t\sin\omega_0t$).`,
    pitfalls: R`<ul><li>Annehmen, der Oszillator schwinge stationär mit $\omega_0$ oder $\omega$.</li>
<li>Die homogene Lösung bei kurzen Zeiten vergessen.</li>
<li>Den Realteil am Ende nicht nehmen.</li></ul>`
  },
  {
    id: "ph9_resonanzkurve",
    title: "Resonanz: Vergrösserungsfunktion V(η, ξ), Phase δ₀ und Ω_res = ω₀√(1−2ξ²)",
    category: "9.4 Erzwungene Schwingungen, Resonanz",
    type: "herleitung",
    front: R`Berechne mit $x_p = x_0e^{i\Omega t}$ die komplexe Amplitude $x_0$ des getriebenen Oszillators. Wie lauten Betrag (Vergrösserungsfunktion) und Phase in den dimensionslosen Variablen $\eta = \Omega/\omega_0$, $\xi = \rho/\omega_0$? Wo liegt das Maximum der Amplitude?`,
    back: R`Einsetzen in (9.108):
$$x_0\left(-\Omega^2+2i\rho\Omega+\omega_0^2\right) = \frac{F_0}m\;\Rightarrow\;x_0 = \frac{F_0/m}{(\omega_0^2-\Omega^2)+2i\rho\Omega}\qquad(9.115\text{–}9.117)$$
Mit $x_0 = |x_0|e^{i\delta_0}$ und $a_0 = F_0/m$ (9.118):
$$V := \frac{|x_0|}{a_0} = \frac1{\sqrt{(\omega_0^2-\Omega^2)^2+4\rho^2\Omega^2}},\qquad\delta_0 = \arctan\frac{-2\rho\Omega}{\omega_0^2-\Omega^2}\qquad(9.119)$$
$$V(\eta,\xi) = \frac{1}{\omega_0^2\sqrt{(1-\eta^2)^2+4\xi^2\eta^2}},\qquad\delta_0 = \arctan\frac{-2\xi\eta}{1-\eta^2}\qquad(9.120\text{–}9.122)$$
<b>Amplitudenresonanz:</b> $\partial V/\partial\eta = 0$ ergibt
$$\eta_\text{res} = \sqrt{1-2\xi^2},\qquad\Omega_\text{res} = \omega_0\sqrt{1-2\xi^2}\qquad(9.123\text{–}9.125)$$
immer kleiner als $\omega_0$. Die Dämpfung begrenzt die Amplitude (Abb. 9.17).`,
    meta: "Skript: Abschnitte 9.4.2–9.4.3, Gl. (9.115)–(9.125), Abb. 9.17, S. 246–248",
    explanation: R`<b>Intuition:</b> Treibt man im Takt der Eigenfrequenz, addieren sich die Anstösse Periode für Periode, bis die Reibung so viel verbraucht, wie zugeführt wird. Je kleiner die Dämpfung, desto höher und schmaler die Spitze.<br><br>
<b>Abhängigkeiten:</b> $|x_0|\propto F_0$ (linear). Die Höhe der Resonanzspitze relativ zur statischen Auslenkung ist $\approx\frac1{2\xi} = Q$. Die Resonanzfrequenz verschiebt sich nach unten, aber nur quadratisch in $\xi$; für $\xi\ge1/\sqrt2$ gibt es gar kein Maximum mehr (die Kurve fällt monoton).<br><br>
<b>Phase:</b> $\delta_0$ läuft von $0$ (weit unterhalb) über $-\pi/2$ (bei $\eta = 1$, unabhängig von $\xi$) nach $-\pi$ (weit oberhalb). Der Oszillator hinkt dem Erreger immer hinterher.<br><br>
<b>Drei Resonanzfrequenzen:</b> $\omega_0$ (ungedämpft, Leistungsresonanz), $\omega = \sqrt{\omega_0^2-\rho^2}$ (freie gedämpfte Schwingung), $\Omega_\text{res} = \sqrt{\omega_0^2-2\rho^2}$ (Amplitudenmaximum). Bei schwacher Dämpfung fallen alle praktisch zusammen.`,
    derivation: R`<ol class="fc-steps">
<li>$x_0 = \dfrac{a_0\left[(\omega_0^2-\Omega^2)-2i\rho\Omega\right]}{(\omega_0^2-\Omega^2)^2+4\rho^2\Omega^2}$<em>Mit dem konjugiert Komplexen des Nenners erweitern.</em></li>
<li>$|x_0| = \dfrac{a_0}{\sqrt{(\omega_0^2-\Omega^2)^2+4\rho^2\Omega^2}}$<em>Betrag eines Quotienten = Quotient der Beträge (9.119).</em></li>
<li>$\tan\delta_0 = \dfrac{\text{Im}\,x_0}{\text{Re}\,x_0} = \dfrac{-2\rho\Omega}{\omega_0^2-\Omega^2}$<em>Phase; $\text{Im}\,x_0\lt0$, also $-\pi\lt\delta_0\lt0$.</em></li>
<li>$V$ maximal $\Leftrightarrow g(\eta) = (1-\eta^2)^2+4\xi^2\eta^2$ minimal<em>Nenner minimieren (9.123).</em></li>
<li>$g'(\eta) = -4\eta(1-\eta^2)+8\xi^2\eta = 4\eta(\eta^2-1+2\xi^2) = 0$<em>Ableiten.</em></li>
<li>$\eta_\text{res}^2 = 1-2\xi^2$<em>Nichttriviale Nullstelle; existiert nur für $\xi\lt1/\sqrt2$ (9.124, 9.125).</em></li>
</ol>`,
    example: R`$\xi = 0{,}1$: $\eta_\text{res} = \sqrt{0{,}98} = 0{,}990$; $\omega_0^2V_{\max} = 5{,}03$ (bei $\eta = 1$: genau $5{,}00$). Die Spitze ist also 5-mal höher als die statische Auslenkung $a_0/\omega_0^2 = F_0/k$.<br>
Phase bei $\eta = 0{,}5$: $-7{,}6^\circ$; bei $\eta = 1$: $-90^\circ$; bei $\eta = 2$: $-172{,}4^\circ$.`,
    counterexample: R`<b>„Resonanz bei $\omega_0$“ für die Amplitude:</b> Für $\xi = 0{,}5$ liegt das Amplitudenmaximum bei $\eta = 0{,}71$, also fast 30 % unter $\omega_0$. Und für $\xi\ge0{,}707$ gibt es gar keine Amplitudenüberhöhung mehr. Die Gleichsetzung „Resonanz = Eigenfrequenz“ gilt nur für die Leistung oder bei schwacher Dämpfung.`,
    pitfalls: R`<ul><li>$\arctan$ ohne Quadrantenbeachtung: Für $\eta\gt1$ ist $\delta_0$ zwischen $-\pi/2$ und $-\pi$, nicht positiv.</li>
<li>$V$ mit $|x_0|$ verwechseln (Faktor $a_0$).</li>
<li>Die Resonanzüberhöhung für unendlich halten, sobald Dämpfung da ist.</li></ul>`
  },
  {
    id: "ph9_resonanz_grenzfaelle",
    title: "Resonanz: drei Grenzfälle (Feder-, Dämpfungs-, Trägheitsbereich)",
    category: "9.4 Erzwungene Schwingungen, Resonanz",
    type: "konzept",
    front: R`Diskutiere Amplitude und Phase des getriebenen Oszillators in den drei Fällen $\Omega\ll\omega_0$, $\Omega\approx\omega_0$ und $\Omega\gg\omega_0$. Welche physikalische Grösse bestimmt jeweils die Amplitude?`,
    back: R`<b>1) Resonanzfern unten</b> ($\eta\to0$):
$$|x_0| = \frac{a_0}{\omega_0^2} = \frac{F_0}{k},\qquad\delta_0 = 0\qquad(9.126,\,9.127)$$
Dämpfung spielt keine Rolle; die Rückstellkraft bestimmt die (kleine) Amplitude; der Oszillator schwingt <b>in Phase</b> mit dem Erreger. Bei $\Omega = 0$: statische Auslenkung.<br><br>
<b>2) Resonanznah</b> ($\eta\to1$):
$$|x_0| = \frac{a_0}{2\rho\omega_0},\qquad\delta_0 = -\frac\pi2,\qquad\text{Re}(x) = |x_0|\sin\Omega t\qquad(9.128\text{–}9.130)$$
Die Dämpfung begrenzt die Amplitude. Geschwindigkeit und Kraft sind in Phase: Dem Oszillator wird in jeder Lage Energie zugeführt.<br><br>
<b>3) Resonanzfern oben</b> ($\eta\gg1$):
$$|x_0| = \frac{a_0}{\Omega^2},\qquad\delta_0 = -\pi\qquad(9.131,\,9.132)$$
Nur die Trägheit bestimmt die (kleine) Amplitude, $\to0$ für $\Omega\to\infty$; der Oszillator schwingt <b>gegenphasig</b>.`,
    meta: "Skript: Abschnitt 9.4.3, Gl. (9.126)–(9.132), Abb. 9.17, S. 248–249",
    explanation: R`<b>Intuition:</b> Bewegt man ein Gewicht an einem Gummiband langsam auf und ab, folgt es brav (Feder dominiert). Schnell geschüttelt, bleibt es fast in Ruhe und bewegt sich, wenn überhaupt, entgegengesetzt zur Hand (Masse dominiert). Im passenden Takt schaukelt es sich auf (nur die Reibung begrenzt).<br><br>
<b>Welcher Term dominiert?</b> Im Nenner $\omega_0^2-\Omega^2+2i\rho\Omega$: Für kleine $\Omega$ der Federterm $\omega_0^2$, für grosse $\Omega$ der Trägheitsterm $-\Omega^2$ (negativ: Phase $-\pi$), bei $\Omega = \omega_0$ heben sich beide auf, und es bleibt der rein imaginäre Dämpfungsterm (Phase $-\pi/2$).<br><br>
<b>Abhängigkeiten:</b> Unterhalb: $|x_0|$ unabhängig von $\Omega$ und $m$. Bei Resonanz: $|x_0|\propto1/\rho$. Oberhalb: $|x_0|\propto1/(m\Omega^2)$.<br><br>
<b>Anwendungen:</b> Schwingungsisolation (Maschinen auf weichen Federn, $\Omega\gg\omega_0$), Seismometer (schwere Masse an weicher Feder bleibt in Ruhe, $\Omega\gg\omega_0$), Beschleunigungssensoren (steife Feder, $\Omega\ll\omega_0$).`,
    derivation: R`<ol class="fc-steps">
<li>$x_0 = \dfrac{a_0}{\omega_0^2-\Omega^2+2i\rho\Omega}$<em>Ausgangspunkt (9.117).</em></li>
<li>$\Omega\to0$: $x_0\to\dfrac{a_0}{\omega_0^2}$, reell positiv<em>Phase $0$ (9.126, 9.127).</em></li>
<li>$\Omega = \omega_0$: $x_0 = \dfrac{a_0}{2i\rho\omega_0} = \dfrac{a_0}{2\rho\omega_0}e^{-i\pi/2}$<em>$1/i = -i = e^{-i\pi/2}$ (9.128, 9.129).</em></li>
<li>$\text{Re}\left(x_0e^{i\Omega t}\right) = \dfrac{a_0}{2\rho\omega_0}\cos(\Omega t-\tfrac\pi2) = |x_0|\sin\Omega t$<em>Bei Resonanz: $\dot x\propto\cos\Omega t$, also in Phase mit $F$ (9.130).</em></li>
<li>$\Omega\gg\omega_0$: $x_0\approx\dfrac{a_0}{-\Omega^2} = \dfrac{a_0}{\Omega^2}e^{-i\pi}$<em>Negativ reell: Gegenphase (9.131, 9.132).</em></li>
</ol>`,
    example: R`Oszillator $m = 0{,}5\,\text{kg}$, $k = 200\,\text{N/m}$, $\rho = 2\,\text{s}^{-1}$, $F_0 = 1\,\text{N}$:<br>
$\Omega\to0$: $|x_0| = F_0/k = 5\,\text{mm}$; $\Omega = \omega_0$: $\frac{2}{2\cdot2\cdot20}\,\text{m} = 2{,}5\,\text{cm}$ (5-fach); $\Omega = 100\,\text{s}^{-1}$: $\approx\frac{2}{10^4}\,\text{m} = 0{,}2\,\text{mm}$.`,
    counterexample: R`<b>„Bei Resonanz sind Auslenkung und Kraft in Phase“:</b> Falsch – bei Resonanz ist die <i>Geschwindigkeit</i> in Phase mit der Kraft, die Auslenkung hinkt um $90^\circ$ hinterher. Das ist genau der Grund für maximale Energiezufuhr: $P = F\dot x$ ist dann immer positiv.`,
    pitfalls: R`<ul><li>Die Phase der Auslenkung mit der der Geschwindigkeit verwechseln.</li>
<li>Glauben, oberhalb der Resonanz verschwinde die Bewegung ganz (sie wird klein, $\propto\Omega^{-2}$).</li>
<li>Im Dämpfungsbereich mit $F_0/k$ rechnen.</li></ul>`
  },
  {
    id: "ph9_leistungsresonanz",
    title: "Energiebilanz der erzwungenen Schwingung und Leistungsresonanz bei Ω = ω₀",
    category: "9.4 Erzwungene Schwingungen, Resonanz",
    type: "herleitung",
    front: R`Wie gross ist die im stationären Zustand über eine Periode gemittelte zugeführte Leistung $\langle P\rangle$? Zeige, dass das Maximum (<b>Leistungsresonanz</b>) genau bei $\Omega = \omega_0$ liegt, im Gegensatz zur Amplitudenresonanz.`,
    back: R`Energiebilanz (DGL mal $\dot x$):
$$\frac{d}{dt}\underbrace{\left(\tfrac12m\dot x^2+\tfrac12m\omega_0^2x^2\right)}_{E_\text{Osz}} = -2m\rho\dot x^2+F_\text{ext}\dot x\qquad(9.133,\,9.134)$$
Stationär: $\dot E_\text{Osz} = 0\Rightarrow F_\text{ext}\dot x = 2m\rho\dot x^2$ – zugeführte Leistung wird in Reibung umgesetzt (9.135, 9.136).<br>
Mittlere Leistung mit $x = |x_0|\cos(\Omega t+\delta_0)$:
$$\langle P\rangle_{T_\Omega} = \frac1{T_\Omega}\int_0^{T_\Omega}F_\text{ext}\dot x\,dt = -\tfrac12F_0\Omega|x_0|\sin\delta_0\qquad(9.137\text{–}9.140)$$
Mit $|x_0|\sin\delta_0 = \text{Im}\,x_0$ (9.141, 9.142):
$$\langle P\rangle_{T_\Omega} = \frac{ma_0^2}{4\rho}\cdot\frac1{1+\left(\dfrac{\omega_0^2-\Omega^2}{2\rho\Omega}\right)^2} = \frac{ma_0^2}{4\omega_0\xi}\cdot\frac1{1+\left(\dfrac{1-\eta^2}{2\xi\eta}\right)^2}\qquad(9.143,\,9.144)$$
Maximum, wenn der Klammerterm verschwindet: $\Omega = \omega_0$ exakt, mit $\langle P\rangle_{\max} = \frac{F_0^2}{4m\rho}$.`,
    meta: "Skript: Abschnitt 9.4.4, Gl. (9.133)–(9.144), Abb. 9.18, S. 249–250",
    explanation: R`<b>Intuition:</b> Leistung ist Kraft mal Geschwindigkeit. Sie ist maximal, wenn die Geschwindigkeit in Phase mit der Kraft ist, und das ist exakt bei $\Omega = \omega_0$ der Fall (Phase der Auslenkung $-\pi/2$). Die Amplitude ist dagegen kurz vorher maximal, weil dort die Auslenkung grösser, aber die Geschwindigkeit nicht ganz in Phase ist.<br><br>
<b>Abhängigkeiten:</b> $\langle P\rangle_{\max}\propto F_0^2/(m\rho)$: Weniger Dämpfung heisst mehr absorbierte Leistung bei Resonanz, aber ein schmaleres Band. Die Halbwertsbreite der Leistungskurve ist (Ergänzung) $\Delta\Omega\approx2\rho = \omega_0/Q$.<br><br>
<b>Bilanz:</b> Im stationären Zustand ändert sich die Oszillatorenergie im Mittel nicht; die gesamte zugeführte Arbeit wird zu Wärme. Ohne Dämpfung gäbe es keinen stationären Zustand.<br><br>
<b>Zusammenhang:</b> Absorptionslinien in der Spektroskopie haben genau diese Form (Lorentzkurve); Mikrowellenofen und Kernspinresonanz (MRI) nutzen Leistungsresonanz.`,
    derivation: R`Mittelung der Leistung:
<ol class="fc-steps">
<li>$F_\text{ext}\dot x = F_0\cos\Omega t\cdot\left(-|x_0|\Omega\sin(\Omega t+\delta_0)\right)$<em>Mit (9.138, 9.139).</em></li>
<li>$\sin(\Omega t+\delta_0) = \sin\Omega t\cos\delta_0+\cos\Omega t\sin\delta_0$<em>Additionstheorem.</em></li>
<li>$\langle\cos\Omega t\sin\Omega t\rangle = 0$, $\langle\cos^2\Omega t\rangle = \tfrac12$<em>Periodenmittel.</em></li>
<li>$\langle P\rangle = -\tfrac12F_0\Omega|x_0|\sin\delta_0$<em>(9.140); positiv, weil $\delta_0\lt0$.</em></li>
<li>$\text{Im}\,x_0 = \dfrac{-2\rho\Omega\,a_0}{(\omega_0^2-\Omega^2)^2+4\rho^2\Omega^2}$<em>Aus (9.117) nach Erweitern mit dem konjugierten Nenner.</em></li>
<li>$\langle P\rangle = \dfrac{ma_0^2\rho\Omega^2}{(\omega_0^2-\Omega^2)^2+4\rho^2\Omega^2} = \dfrac{ma_0^2}{4\rho}\dfrac{1}{1+\left(\frac{\omega_0^2-\Omega^2}{2\rho\Omega}\right)^2}$<em>$F_0 = ma_0$; Zähler und Nenner durch $4\rho^2\Omega^2$ teilen (9.143).</em></li>
</ol>`,
    example: R`$F_0 = 1\,\text{N}$, $m = 0{,}5\,\text{kg}$, $\rho = 2\,\text{s}^{-1}$: $\langle P\rangle_{\max} = \frac{1}{4\cdot0{,}5\cdot2}\,\text{W} = 0{,}25\,\text{W}$. Kontrolle über Reibung: $2m\rho\langle\dot x^2\rangle = 2\cdot0{,}5\cdot2\cdot\tfrac12(0{,}025\cdot20)^2 = 0{,}25\,\text{W}$ ✓.`,
    counterexample: R`<b>Amplituden- und Leistungsmaximum gleichsetzen:</b> Für $\xi = 0{,}5$ liegt das Amplitudenmaximum bei $0{,}71\,\omega_0$, das Leistungsmaximum aber exakt bei $\omega_0$. Ein Gerät, das auf maximale Auslenkung abgestimmt ist, nimmt nicht maximale Leistung auf.`,
    pitfalls: R`<ul><li>Die Leistung aus komplexen Grössen ohne Realteil berechnen ($\langle P\rangle\neq F_0\Omega|x_0|$).</li>
<li>Das Vorzeichen von $\sin\delta_0$ übersehen.</li>
<li>Annehmen, ohne Dämpfung sei die stationäre Leistung unendlich; es gibt dann keinen stationären Zustand.</li></ul>`
  },

  // ========================================================================
  // 9.5 ÜBERLAGERUNG VON SCHWINGUNGEN
  // ========================================================================
  {
    id: "ph9_ueberlagerung_gleiche_frequenz",
    title: "Überlagerung zweier Schwingungen gleicher Frequenz (Zeigeraddition)",
    category: "9.5 Überlagerung von Schwingungen",
    type: "herleitung",
    front: R`Zwei Schwingungen $x_1 = A_1\cos(\omega t+\delta_1)$ und $x_2 = A_2\cos(\omega t+\delta_2)$ werden addiert. Zeige mit komplexen Zeigern, dass wieder eine harmonische Schwingung derselben Frequenz entsteht, und berechne Amplitude und Phase. Was ergibt sich bei Phasendifferenz $0$, $\pi$ und $\pi/2$?`,
    back: R`Zeiger $z_k = A_ke^{i\delta_k}e^{i\omega t}$, $x_k = \text{Re}\,z_k$ (9.148–9.150):
$$z = z_1+z_2 = \left(A_1e^{i\delta_1}+A_2e^{i\delta_2}\right)e^{i\omega t} =: Ae^{i\delta}e^{i\omega t}\qquad(9.151\text{–}9.155)$$
Die Addition entspricht der Addition zweier 2D-Vektoren (Abb. 9.19):
$$A^2 = |z|^2 = z\cdot z^* = A_1^2+A_2^2+2A_1A_2\cos(\delta_1-\delta_2)\qquad(9.156\text{–}9.160)$$
$$\tan\delta = \frac{A_1\sin\delta_1+A_2\sin\delta_2}{A_1\cos\delta_1+A_2\cos\delta_2},\qquad x = A\cos(\omega t+\delta)\qquad(9.161\text{–}9.163)$$
<b>Spezialfälle:</b>
<ul><li>gleichphasig $\delta_1 = \delta_2$: $A = A_1+A_2$, $\delta = \delta_1$ (9.164–9.166)</li>
<li>gegenphasig $\delta_1 = \delta_2+\pi$: $A = |A_1-A_2|$ (Phase der grösseren) (9.167–9.169)</li>
<li>um $\pi/2$ verschoben: $A = \sqrt{A_1^2+A_2^2}$ (9.170–9.172)</li></ul>`,
    meta: "Skript: Abschnitt 9.5.2, Gl. (9.145)–(9.172), Abb. 9.19–9.22, S. 250–255",
    explanation: R`<b>Intuition:</b> Jede Schwingung ist ein rotierender Pfeil. Haben beide dieselbe Frequenz, drehen sie starr miteinander, und ihr Summenpfeil ist ein dritter, ebenso schnell rotierender Pfeil. Seine Länge folgt aus dem Kosinussatz.<br><br>
<b>Interferenz:</b> Der Term $2A_1A_2\cos(\delta_1-\delta_2)$ entscheidet über Verstärkung (konstruktiv) oder Abschwächung (destruktiv). Bei gleichen Amplituden reicht die Spanne von $2A_1$ bis $0$ (Auslöschung). Bei $\pi/2$ addieren sich die Energien ($A^2 = A_1^2+A_2^2$), ohne Interferenzterm.<br><br>
<b>Abhängigkeiten:</b> Die Intensität (Energie) ist $\propto A^2$, nicht $\propto A_1^2 + A_2^2$: Zwei gleichphasige Quellen liefern die vierfache, nicht die doppelte Intensität einer einzelnen; im Mittel über alle Phasenlagen (inkohärent) erhält man die doppelte.<br><br>
<b>Zusammenhang:</b> Grundlage der Wellenoptik (Interferenz, Physik II), der Wechselstromrechnung (Zeigerdiagramme) und der Lärmschutz-Kopfhörer (Gegenschall).`,
    derivation: R`<ol class="fc-steps">
<li>$A^2 = \left(A_1e^{i\delta_1}+A_2e^{i\delta_2}\right)\left(A_1e^{-i\delta_1}+A_2e^{-i\delta_2}\right)$<em>Betragsquadrat; $e^{i\omega t}$ kürzt sich mit $e^{-i\omega t}$ (9.157).</em></li>
<li>$= A_1^2+A_2^2+A_1A_2\left(e^{i(\delta_1-\delta_2)}+e^{-i(\delta_1-\delta_2)}\right)$<em>Ausmultiplizieren (9.158).</em></li>
<li>$= A_1^2+A_2^2+2A_1A_2\cos(\delta_1-\delta_2)$<em>$e^{i\alpha}+e^{-i\alpha} = 2\cos\alpha$ (9.160).</em></li>
<li>$\tan\delta = \dfrac{\text{Im}(Ae^{i\delta})}{\text{Re}(Ae^{i\delta})}$<em>Phase des Summenzeigers aus Komponenten (9.161, 9.162).</em></li>
<li>$\delta_1-\delta_2 = \pi$: $A^2 = A_1^2+A_2^2-2A_1A_2 = (A_1-A_2)^2$<em>Gegenphasig (9.168).</em></li>
</ol>`,
    example: R`$A_1 = 3\,\text{cm}$, $A_2 = 4\,\text{cm}$:<br>
gleichphasig $7\,\text{cm}$; gegenphasig $1\,\text{cm}$; $\Delta\delta = 90^\circ$: $5\,\text{cm}$; $\Delta\delta = 60^\circ$: $\sqrt{9+16+12} = 6{,}08\,\text{cm}$.<br>
Mit $\delta_1 = 0$, $\delta_2 = 90^\circ$: $\tan\delta = 4/3$, $\delta = 53{,}1^\circ$.`,
    counterexample: R`<b>Verschiedene Frequenzen:</b> $\cos\omega_1t+\cos\omega_2t$ mit $\omega_1\neq\omega_2$ ist keine harmonische Schwingung mit fester Amplitude; die Zeiger drehen relativ zueinander, und die Summenamplitude schwankt (Schwebung, 9.5.3). Die Formel $A^2 = A_1^2+A_2^2+2A_1A_2\cos\Delta\delta$ gilt dann nur momentan, mit $\Delta\delta(t)$.`,
    pitfalls: R`<ul><li>Amplituden einfach addieren, ohne die Phasen zu beachten.</li>
<li>Bei $\arctan$ den Quadranten vergessen.</li>
<li>Bei Gegenphase ein negatives $A$ angeben; die Amplitude ist $|A_1-A_2|$, die Phase gehört zur grösseren Teilschwingung.</li></ul>`
  },
  {
    id: "ph9_schwebung",
    title: "Schwebung: zwei Schwingungen leicht verschiedener Frequenz",
    category: "9.5 Überlagerung von Schwingungen",
    type: "herleitung",
    front: R`Addiere $x_1 = A\cos\omega_1t$ und $x_2 = A\cos\omega_2t$ mit $\omega_1\approx\omega_2$. Welche schnelle und welche langsame Frequenz treten auf? Wie lang ist die Zeit zwischen zwei Stillständen, und wie nutzt man Schwebungen beim Stimmen eines Instruments?`,
    back: R`$$x = A\{\cos\omega_1t+\cos\omega_2t\} = 2A\cos\left(\frac{\omega_1-\omega_2}2t\right)\cos\left(\frac{\omega_1+\omega_2}2t\right)\qquad(9.173\text{–}9.176)$$
$$x(t) = \tilde A(t)\cos\frac{\omega_1+\omega_2}2t,\qquad\tilde A(t) = 2A\cos\frac{\omega_1-\omega_2}2t\qquad(9.177,\,9.178)$$
Rasche Oszillation mit dem Mittelwert $(\omega_1+\omega_2)/2$; die Amplitude ändert sich langsam mit der halben Differenzfrequenz (Abb. 9.23, 9.24).
$$\nu_S = \frac{\omega_S}{2\pi} = \frac1{2\pi}\frac{|\omega_1-\omega_2|}2,\qquad\tau := \frac T2 = \frac{2\pi}{|\omega_1-\omega_2|}\qquad(9.179,\,9.180)$$
$\tau$ ist die Zeit zwischen zwei „Stillständen“ ($\tilde A = 0$).<br>
<b>Stimmen:</b> Referenzton $\omega_2$ und Instrument $\omega_1$ gleichzeitig spielen und $\omega_1$ so verändern, dass die Schwebung langsamer wird, bis sie verschwindet.<br>
Umgekehrt: $C\cos\tilde\omega_2t\cos\tilde\omega_1t = \frac C2\cos(\tilde\omega_1-\tilde\omega_2)t+\frac C2\cos(\tilde\omega_1+\tilde\omega_2)t$ (9.181, 9.182): Das <b>Amplitudenspektrum</b> besteht aus zwei diskreten Linien (Abb. 9.25).`,
    meta: "Skript: Abschnitte 9.5.3.1–9.5.3.2, Gl. (9.173)–(9.182), Abb. 9.23–9.25, S. 255–257",
    explanation: R`<b>Intuition:</b> Zwei Zeiger mit leicht verschiedener Drehzahl: Mal zeigen sie in dieselbe Richtung (laut), mal entgegengesetzt (still). Wie oft das passiert, hängt nur vom Unterschied ihrer Drehzahlen ab.<br><br>
<b>Hörbare Schwebungsfrequenz:</b> Das Ohr hört die Lautstärke, also $|\tilde A|$. Weil $|\cos|$ die halbe Periode von $\cos$ hat, pulsiert der Ton mit $|\nu_1-\nu_2|$, der vollen Differenzfrequenz. Die im Skript definierte $\nu_S$ ist die Frequenz der Einhüllenden $\tilde A$ selbst (mit Vorzeichenwechsel), also halb so gross.<br><br>
<b>Abhängigkeiten:</b> Je ähnlicher die Frequenzen, desto langsamer die Schwebung; bei Gleichheit verschwindet sie. Bei einem Stillstand wechselt die schnelle Schwingung ihr Vorzeichen (Phasensprung um $\pi$).<br><br>
<b>Zusammenhang:</b> Gekoppelte Pendel zeigen genau diese Schwebung (9.7), ebenso der Einschwingvorgang einer erzwungenen Schwingung. In der Funktechnik nutzt man die Differenzfrequenz beim Überlagerungsempfänger.`,
    derivation: R`<ol class="fc-steps">
<li>$\cos\alpha+\cos\beta = 2\cos\dfrac{\alpha-\beta}2\cos\dfrac{\alpha+\beta}2$<em>Summe-zu-Produkt-Formel (aus $\cos(u\pm v) = \cos u\cos v\mp\sin u\sin v$ mit $u = \frac{\alpha+\beta}2$, $v = \frac{\alpha-\beta}2$).</em></li>
<li>$x = 2A\cos\dfrac{(\omega_1-\omega_2)t}2\cos\dfrac{(\omega_1+\omega_2)t}2$<em>Mit $\alpha = \omega_1t$, $\beta = \omega_2t$ (9.176).</em></li>
<li>$\tilde A = 0\Leftrightarrow\dfrac{|\omega_1-\omega_2|}2t = \dfrac\pi2+n\pi$<em>Stillstände der Einhüllenden.</em></li>
<li>$\Delta t = \dfrac{2\pi}{|\omega_1-\omega_2|} = \dfrac1{|\nu_1-\nu_2|}$<em>Abstand zweier Stillstände (9.180) = Periode des hörbaren Pulsierens.</em></li>
</ol>`,
    example: R`Stimmgabeln mit $440\,\text{Hz}$ und $442\,\text{Hz}$: Man hört einen $441\text{-Hz}$-Ton, dessen Lautstärke 2-mal pro Sekunde an- und abschwillt (Stillstände alle $0{,}5\,\text{s}$). Die Einhüllende $\tilde A$ selbst hat die Frequenz $\nu_S = 1\,\text{Hz}$.`,
    counterexample: R`<b>Stark verschiedene Frequenzen</b> (z. B. $440$ und $660\,\text{Hz}$): Formal gilt die Produktformel immer noch, aber „langsame Einhüllende mal schnelle Trägerschwingung“ ist keine sinnvolle Beschreibung mehr; man hört zwei Töne (eine Quinte), keine Schwebung. Die Schwebung als Phänomen setzt $|\omega_1-\omega_2|\ll\omega_1+\omega_2$ voraus.`,
    pitfalls: R`<ul><li>Hörbare Schwebungsfrequenz $|\nu_1-\nu_2|$ mit der Frequenz der Einhüllenden $|\nu_1-\nu_2|/2$ verwechseln.</li>
<li>$\omega$ und $\nu$ mischen.</li>
<li>Annehmen, die Trägerfrequenz sei $\omega_1$ (sie ist der Mittelwert).</li></ul>`
  },
  {
    id: "ph9_amplitudenmodulation",
    title: "Amplitudenmodulation und Seitenbänder",
    category: "9.5 Überlagerung von Schwingungen",
    type: "beispiel",
    front: R`Bei der Mittelwellen-Übertragung wird die Amplitude einer Trägerwelle $\tilde\omega_1$ mit einem Tonsignal $\tilde\omega_2$ moduliert: $x = (A_0+a\cos\tilde\omega_2t)\cos\tilde\omega_1t$. Welche Frequenzen enthält das Signal? Wie breit muss ein Sender-Kanal sein?`,
    back: R`$$x(t) = \underbrace{(A_0+a\cos\tilde\omega_2t)}_\text{Modulation}\cdot\underbrace{\cos\tilde\omega_1t}_\text{Träger}\qquad(9.183)$$
$$= A_0\cos\tilde\omega_1t+\frac a2\cos\{(\tilde\omega_1-\tilde\omega_2)t\}+\frac a2\cos\{(\tilde\omega_1+\tilde\omega_2)t\},\qquad a\lt A_0\qquad(9.184,\,9.185)$$
Drei Frequenzen: der Träger $\tilde\omega_1$ und symmetrisch dazu zwei <b>Seitenbänder</b> (Satelliten) im Abstand der Modulationsfrequenz $\tilde\omega_2$ (Abb. 9.26, 9.27).<br>
Mittelwelle: Träger $\nu = 300\,\text{kHz}\dots3\,\text{MHz}$, Tonsignal $30\,\text{Hz}\dots\text{ca. }10\,\text{kHz}$. Ein ganzes Tonspektrum belegt also $\nu_\text{Träger}\pm10\,\text{kHz}$, eine Bandbreite von etwa $20\,\text{kHz}$.`,
    meta: "Skript: Abschnitt 9.5.3.3, Gl. (9.183)–(9.185), Abb. 9.26–9.27, S. 258",
    explanation: R`<b>Intuition:</b> Wer die Lautstärke eines Tons periodisch verändert, erzeugt neue Frequenzen. Das ist dieselbe Mathematik wie die Schwebung, nur rückwärts gelesen: Ein Produkt zweier Kosinus ist eine Summe zweier Kosinus bei Summen- und Differenzfrequenz.<br><br>
<b>Warum $a\lt A_0$?</b> Dann bleibt die Einhüllende $A_0+a\cos\tilde\omega_2t$ immer positiv, und ein einfacher Gleichrichter (Diode) kann das Tonsignal zurückgewinnen. Für $a\gt A_0$ (Übermodulation) wird das Signal verzerrt.<br><br>
<b>Abhängigkeiten:</b> Die Bandbreite ist $2\times$ höchste Modulationsfrequenz, unabhängig von der Trägerfrequenz. Höhere Tonqualität (grössere $\tilde\omega_2$) kostet mehr Bandbreite, also weniger Sender pro Frequenzband.<br><br>
<b>Zusammenhang:</b> Grundprinzip der Fourieranalyse (9.6): Jede zeitliche Veränderung eines Signals verbreitert sein Spektrum. Je schneller die Änderung, desto breiter (vgl. Knall, 9.6.2).`,
    derivation: R`<ol class="fc-steps">
<li>$x = A_0\cos\tilde\omega_1t + a\cos\tilde\omega_2t\cos\tilde\omega_1t$<em>Ausmultiplizieren.</em></li>
<li>$\cos u\cos v = \tfrac12[\cos(u-v)+\cos(u+v)]$<em>Produkt-zu-Summe (Addition von $\cos(u\pm v)$).</em></li>
<li>$a\cos\tilde\omega_2t\cos\tilde\omega_1t = \dfrac a2\cos(\tilde\omega_1-\tilde\omega_2)t+\dfrac a2\cos(\tilde\omega_1+\tilde\omega_2)t$<em>Mit $u = \tilde\omega_1t$, $v = \tilde\omega_2t$.</em></li>
<li>Spektrum: Linien bei $\tilde\omega_1$ (Höhe $A_0$) und $\tilde\omega_1\pm\tilde\omega_2$ (Höhe $a/2$)<em>(9.184), Abb. 9.27.</em></li>
</ol>`,
    example: R`Sender bei $1\,\text{MHz}$, Ton $1\,\text{kHz}$, $A_0 = 3$, $a = 1$: Linien bei $999\,\text{kHz}$ ($0{,}5$), $1000\,\text{kHz}$ ($3$), $1001\,\text{kHz}$ ($0{,}5$). Bei Musik bis $10\,\text{kHz}$ belegt der Sender $990$–$1010\,\text{kHz}$. Im Band $0{,}5$–$1{,}6\,\text{MHz}$ haben so nur etwa 55 Sender nebeneinander Platz.`,
    counterexample: R`<b>Frequenzmodulation (UKW):</b> Dort wird nicht die Amplitude, sondern die Frequenz des Trägers verändert. Das Spektrum hat dann viele Seitenbänder (nicht nur zwei) und braucht etwa $200\,\text{kHz}$ Bandbreite, ist aber unempfindlicher gegen Amplitudenstörungen. Die einfache Drei-Linien-Struktur ist eine Eigenschaft der AM.`,
    pitfalls: R`<ul><li>Bandbreite = Modulationsfrequenz statt doppelt so gross.</li>
<li>Den Faktor $\tfrac12$ bei den Seitenbändern vergessen.</li>
<li>Glauben, das Spektrum enthalte die Tonfrequenz $\tilde\omega_2$ selbst.</li></ul>`
  },
  {
    id: "ph9_lissajous",
    title: "Orthogonale Schwingungen: Ellipse und Lissajous-Figuren",
    category: "9.5 Überlagerung von Schwingungen",
    type: "konzept",
    front: R`Ein Massenpunkt schwingt gleichzeitig in $x$- und $y$-Richtung. Welche Bahn ergibt sich bei <b>gleicher Frequenz</b> und Phasendifferenz $\delta$? Was sind <b>Lissajous-Figuren</b>, und was passiert bei irrationalem Frequenzverhältnis?`,
    back: R`<b>Gleiche Frequenz:</b>
$$\begin{pmatrix}x\\y\end{pmatrix} = \begin{pmatrix}x_0\cos\omega t\\y_0\cos(\omega t+\delta)\end{pmatrix}\qquad(9.186)$$
ist die Parameterdarstellung einer Ellipse:
$$\frac{x^2}{x_0^2}-\frac{2\cos\delta}{x_0y_0}xy+\frac{y^2}{y_0^2} = \sin^2\delta\qquad(9.187)$$
$\delta = 0$ oder $\pi$: Gerade (Diagonale); $\delta = \pm\pi/2$: Ellipse mit Achsen entlang $x$ und $y$ (Kreis für $x_0 = y_0$).<br><br>
<b>Verschiedene Frequenzen</b> (Lissajous-Figuren):
$$\begin{pmatrix}x\\y\end{pmatrix} = \begin{pmatrix}x_0\cos(\omega_1t+\delta_1)\\y_0\cos(\omega_2t+\delta_2)\end{pmatrix}\qquad(9.188)$$
Rationales $\omega_1/\omega_2$: geschlossene (bzw. offene) endliche Kurven (Abb. 9.28). Irrationales Verhältnis: Die Kurve füllt das Rechteck $2x_0\times2y_0$ dicht aus.`,
    meta: "Skript: Abschnitt 9.5.4, Gl. (9.186)–(9.188), Abb. 9.28, S. 259–260",
    explanation: R`<b>Intuition:</b> Ein Pendel, das man schräg anstösst, schwingt nicht in einer Ebene, sondern beschreibt eine Ellipse. Die Form verrät die Phasenbeziehung der beiden Komponenten: gleichphasig eine Linie, um $90^\circ$ versetzt ein Kreis bzw. eine achsenparallele Ellipse.<br><br>
<b>Lissajous als Messinstrument:</b> Auf einem Oszilloskop (x-y-Modus) zeigt eine stehende Figur ein rationales Frequenzverhältnis an. Die Anzahl der Berührpunkte am Rand in $x$- und $y$-Richtung gibt das Verhältnis $\omega_2:\omega_1$. So hat man früher Frequenzen verglichen.<br><br>
<b>Abhängigkeiten:</b> Das Verhältnis $\omega_1/\omega_2$ bestimmt die Topologie der Figur, die Phase ihre Gestalt (Abb. 9.28: Zeilen $0^\circ$ bis $180^\circ$).<br><br>
<b>Zusammenhang:</b> Zirkular und elliptisch polarisiertes Licht ist genau diese Überlagerung zweier senkrechter Schwingungen gleicher Frequenz (Physik II). Der isotrope 2D-Oszillator hat Ellipsenbahnen, ähnlich (aber mit Zentrum statt Brennpunkt) wie die Keplerbahnen.`,
    derivation: R`Herleitung der Ellipsengleichung:
<ol class="fc-steps">
<li>$\dfrac{x}{x_0} = \cos\omega t$, $\dfrac y{y_0} = \cos\omega t\cos\delta-\sin\omega t\sin\delta$<em>Additionstheorem für $y$.</em></li>
<li>$\dfrac y{y_0}-\dfrac x{x_0}\cos\delta = -\sin\omega t\sin\delta$<em>Den $\cos\omega t$-Anteil abziehen.</em></li>
<li>$\left(\dfrac y{y_0}-\dfrac x{x_0}\cos\delta\right)^2 = \left(1-\dfrac{x^2}{x_0^2}\right)\sin^2\delta$<em>Quadrieren; $\sin^2\omega t = 1-\cos^2\omega t$.</em></li>
<li>$\dfrac{y^2}{y_0^2}-\dfrac{2xy\cos\delta}{x_0y_0}+\dfrac{x^2}{x_0^2}(\cos^2\delta+\sin^2\delta) = \sin^2\delta$<em>Ausmultiplizieren, $x^2$-Terme zusammenfassen: (9.187).</em></li>
</ol>`,
    example: R`$x_0 = y_0$, $\delta = 90^\circ$: $x^2+y^2 = x_0^2$, ein Kreis (Umlauf im Uhrzeigersinn für $\delta = +90^\circ$: $y = -x_0\sin\omega t$).<br>
$\delta = 0$: $(x/x_0-y/y_0)^2 = 0$, die Gerade $y = \frac{y_0}{x_0}x$.<br>
$\omega_1:\omega_2 = 1:2$, $\delta = 90^\circ$: eine liegende Acht.`,
    counterexample: R`<b>Nichtlineares Pendel:</b> Bei grossen Ausschlägen ist das sphärische Pendel nicht mehr harmonisch; die Ellipse ist nicht geschlossen, sondern ihre Achse dreht sich langsam (Präzession der Apsiden). Die geschlossene Ellipse ist eine Eigenschaft des linearen Oszillators.`,
    pitfalls: R`<ul><li>Bei gleicher Frequenz immer einen Kreis erwarten (nur für $x_0 = y_0$ und $\delta = \pm\pi/2$).</li>
<li>Den Mischterm $xy$ in der Ellipsengleichung vergessen.</li>
<li>Frequenzverhältnis aus einer Lissajous-Figur falsch herum ablesen.</li></ul>`
  },

  // ========================================================================
  // 9.6 FOURIERANALYSE
  // ========================================================================
  {
    id: "ph9_fourierreihe",
    title: "Fourierreihe: Basisfunktionen, Koeffizienten als Projektionen, komplexe Form",
    category: "9.6 Fourieranalyse",
    type: "definition",
    front: R`Wie lässt sich eine periodische Funktion $f(t+T) = f(t)$ als <b>Fourierreihe</b> schreiben? Wie berechnet man die Koeffizienten $a_k$, $b_k$ (bzw. $c_n$), und warum ist das eine „Projektion auf Basisvektoren“? Was gilt für gerade und ungerade Funktionen?`,
    back: R`$$f(t) = \frac{a_0}2+\sum_{n=1}^\infty\{a_n\cos(n\omega_0t)+b_n\sin(n\omega_0t)\},\qquad\omega_0 = \frac{2\pi}T\qquad(9.189\text{–}9.192,\,9.221)$$
$\omega_n = n\omega_0$: Oberschwingungen; $\omega_0$: Grundschwingung. $\cos\omega_nt$ und $\sin\omega_nt$ bilden eine Basis eines unendlichdimensionalen Vektorraums.<br><br>
<b>Koeffizienten</b> = Projektion (analog $a_n = \vec r\cdot\hat x_n$, 9.198):
$$a_k = \frac2T\int_0^Tf(t)\cos(\omega_kt)\,dt,\qquad b_k = \frac2T\int_0^Tf(t)\sin(\omega_kt)\,dt\qquad(9.199)$$
<b>Symmetrie:</b> gerade $f(t) = f(-t)$: nur Kosinusterme; ungerade $f(t) = -f(-t)$: nur Sinusterme (9.193–9.197). $b_0\equiv0$.<br><br>
<b>Komplexe Form</b> (negative Frequenzen nötig):
$$f(t) = \sum_{n=-\infty}^\infty c_ne^{in\omega_0t},\quad c_n = \frac1T\int_0^Tf(t)e^{-in\omega_0t}dt,\quad c_0 = \frac{a_0}2,\quad c_{\pm n} = \tfrac12(a_n\mp ib_n)\qquad(9.216\text{–}9.222)$$
$f$ reell $\Leftrightarrow c_n = c_{-n}^*$.`,
    meta: "Skript: Abschnitte 9.6.1.1, 9.6.1.4–9.6.1.5, Gl. (9.189)–(9.199), (9.216)–(9.222), S. 259–266",
    explanation: R`<b>Intuition:</b> Jedes periodische Signal (ein Geigenton, ein Herzschlag-EKG) ist ein Akkord aus der Grundfrequenz und ihren ganzzahligen Vielfachen. Die Koeffizienten sagen, wie laut jede Oberschwingung ist; das bestimmt die Klangfarbe.<br><br>
<b>Warum Integrale?</b> Die Basisfunktionen sind orthogonal: $\frac2T\int_0^T\cos(\omega_kt)\cos(\omega_nt)dt = \delta_{kn}$ (für $k,n\ge1$). Multipliziert man $f$ mit einer Basisfunktion und integriert, überlebt nur deren Koeffizient, genau wie beim Skalarprodukt mit einem Einheitsvektor.<br><br>
<b>Analyse vs. Synthese:</b> Analyse bestimmt die Amplituden der Vielfachen von $\omega_0$; Synthese baut eine Funktion aus Schwingungen zusammen (9.6.1.5).<br><br>
<b>Zusammenhang:</b> Lineare Algebra (Orthonormalbasis, Projektion), Signalverarbeitung (MP3, JPEG), Quantenmechanik (Zustände als Überlagerung von Eigenfunktionen). Wegen der Linearität des Oszillators kann man die Antwort auf jede periodische Kraft aus den Resonanzkurven der einzelnen Fourierkomponenten zusammensetzen.`,
    derivation: R`Warum $a_k = \frac2T\int f\cos\omega_kt\,dt$:
<ol class="fc-steps">
<li>$f(t) = \dfrac{a_0}2+\sum_n(a_n\cos\omega_nt+b_n\sin\omega_nt)$<em>Ansatz.</em></li>
<li>$\displaystyle\int_0^T\cos\omega_nt\cos\omega_kt\,dt = \tfrac T2\delta_{nk}$, $\displaystyle\int_0^T\sin\omega_nt\cos\omega_kt\,dt = 0$<em>Orthogonalität ($k\ge1$): Produkt-zu-Summe, jede volle Periode integriert sich zu null.</em></li>
<li>$\displaystyle\int_0^Tf\cos\omega_kt\,dt = a_k\frac T2$<em>Nur der Term $n = k$ überlebt; auch der konstante Term fällt weg.</em></li>
<li>$a_k = \dfrac2T\displaystyle\int_0^Tf\cos\omega_kt\,dt$<em>(9.199).</em></li>
<li>$k = 0$: $a_0 = \dfrac2T\displaystyle\int_0^Tf\,dt = 2\langle f\rangle$<em>Deshalb steht in der Reihe $a_0/2$ = Mittelwert.</em></li>
</ol>`,
    example: R`$f(t) = 3+2\cos\omega_0t-\sin3\omega_0t$: $a_0 = 6$, $a_1 = 2$, $b_3 = -1$, alle anderen null.<br>
Komplex: $c_0 = 3$, $c_{\pm1} = 1$, $c_{\pm3} = \pm\tfrac i2$.<br>
<b>Sägezahn</b> $f = t$ auf $(-\pi,\pi)$, $\omega_0 = 1$: ungerade, also nur $b_n = 2(-1)^{n+1}/n$.`,
    counterexample: R`<b>Nicht periodische Funktionen</b> (ein einzelner Knall, $e^{-t^2}$) haben keine Fourierreihe mit diskreten Frequenzen; man braucht das Fourierintegral mit kontinuierlichem Spektrum (9.6.2). Eine Fourierreihe auf einem Intervall stellt dagegen die <i>periodische Fortsetzung</i> dar, mit Sprüngen an den Rändern.`,
    pitfalls: R`<ul><li>$a_0$ statt $a_0/2$ als konstanten Term verwenden. (Das Skript schreibt in (9.190) die Summe ab $n = 0$ mit $a_0$; mit der Normierung (9.199) ist der konstante Term $a_0/2$, wie in (9.221).)</li>
<li>Den Vorfaktor $2/T$ (reell) bzw. $1/T$ (komplex) verwechseln.</li>
<li>Bei der komplexen Reihe die negativen Frequenzen weglassen.</li></ul>`
  },
  {
    id: "ph9_maeander_gibbs",
    title: "Fourierreihe der Rechteckschwingung (Mäander) und Gibbs-Phänomen",
    category: "9.6 Fourieranalyse",
    type: "beispiel",
    front: R`Berechne die Fourierkoeffizienten der Rechteckschwingung $f = +A$ für $0\le t\lt T/2$ und $f = -A$ für $T/2\le t\le T$. Welche Oberschwingungen treten auf, wie schnell fallen sie ab, und was ist das <b>Gibbs’sche Phänomen</b>?`,
    back: R`$f$ ist ungerade (9.201), also nur Sinusterme:
$$b_k = \frac2T\int_0^Tf\sin\omega_kt\,dt = \frac{2A}T\left\{\int_0^{T/2}\sin\omega_kt\,dt-\int_{T/2}^T\sin\omega_kt\,dt\right\}\qquad(9.202\text{–}9.204)$$
Mit $\int_0^{T/2}\sin\omega_kt\,dt = \frac{1-(-1)^k}{k\omega_0}$ und $\int_{T/2}^T\sin\omega_kt\,dt = \frac{(-1)^k-1}{k\omega_0}$ (9.210–9.212):
$$b_k = \frac{2A}{k\pi}\left[1-(-1)^k\right] = \begin{cases}\dfrac{4A}{k\pi},&k\text{ ungerade}\\0,&k\text{ gerade}\end{cases}\qquad(9.213,\,9.214)$$
$$f(t) = \sum_{k = 1,3,5,\dots}\frac{4A}{k\pi}\sin(k\omega_0t)\qquad(9.215)$$
Nur ungerade Harmonische, Amplituden $\propto1/k$ (Abb. 9.30).<br><br>
<b>Gibbs-Phänomen:</b> An Sprungstellen entstehen Überschwinger, die auch mit mehr Termen nicht verschwinden; sie werden nur schmaler (Abb. 9.29). Ergänzung: Sie betragen etwa 9 % der Sprunghöhe.`,
    meta: "Skript: Abschnitte 9.6.1.2–9.6.1.3, Gl. (9.200)–(9.215), Abb. 9.29–9.30, S. 262–265",
    explanation: R`<b>Intuition:</b> Um eine scharfe Kante zu bauen, braucht man beliebig hohe Frequenzen. Die Rechteckschwingung ist zudem halbwellensymmetrisch ($f(t+T/2) = -f(t)$); deshalb heben sich alle geraden Harmonischen weg.<br><br>
<b>Abfall $\propto1/k$:</b> Funktionen mit Sprüngen haben Koeffizienten $\propto1/k$; stetige Funktionen mit Knick (Dreieck) $\propto1/k^2$; glatte Funktionen fallen noch schneller ab. Je glatter die Funktion, desto weniger Oberschwingungen braucht man.<br><br>
<b>Gibbs:</b> Die Teilsummen konvergieren an jeder Stelle (ausser am Sprung, wo sie den Mittelwert $0$ liefern), aber nicht gleichmässig: Das Maximum der Teilsumme bleibt bei $\approx1{,}18A$. Der Überschwinger wandert nur näher an den Sprung.<br><br>
<b>Zusammenhang:</b> Digitale Signale (Rechteckpulse) brauchen grosse Bandbreite; begrenzt man die Bandbreite (Filter), werden die Flanken verschliffen, und es entstehen Überschwinger („Ringing“) – Gibbs in der Praxis.`,
    derivation: R`<ol class="fc-steps">
<li>$\displaystyle\int_a^b\sin(k\omega_0t)dt = -\dfrac1{k\omega_0}\left[\cos k\omega_0b-\cos k\omega_0a\right]$<em>Stammfunktion, hergeleitet über $e^{ik\omega_0t}$ (9.205–9.209).</em></li>
<li>$\displaystyle\int_0^{T/2}\sin\omega_kt\,dt = \dfrac{1-\cos k\pi}{k\omega_0} = \dfrac{1-(-1)^k}{k\omega_0}$<em>$k\omega_0T/2 = k\pi$ (9.210, 9.211).</em></li>
<li>$\displaystyle\int_{T/2}^T\sin\omega_kt\,dt = \dfrac{(-1)^k-1}{k\omega_0}$<em>$\cos2k\pi = 1$ (9.212).</em></li>
<li>$b_k = \dfrac{2A}{Tk\omega_0}\left\{2\left[1-(-1)^k\right]\right\} = \dfrac{2A}{k\pi}\left[1-(-1)^k\right]$<em>Differenz der beiden Integrale; $T\omega_0 = 2\pi$ (9.213, 9.214).</em></li>
<li>$k$ ungerade: $1-(-1)^k = 2\Rightarrow b_k = \dfrac{4A}{k\pi}$<em>Gerade $k$: $b_k = 0$.</em></li>
</ol>`,
    example: R`$A = 1$: $b_1 = 1{,}273$, $b_3 = 0{,}424$, $b_5 = 0{,}255$, $b_7 = 0{,}182$.<br>
Die Grundschwingung allein ist schon um 27 % höher als das Rechteck. Mit vielen Termen bleibt am Sprung der Gipfel bei $\approx1{,}179$.<br>
Bei $t = T/4$: $\frac4\pi(1-\frac13+\frac15-\dots) = \frac4\pi\cdot\frac\pi4 = 1$ ✓ (Leibniz-Reihe).`,
    counterexample: R`<b>Dreieckschwingung</b> (stetig, nur Knicke): ebenfalls nur ungerade Harmonische, aber Amplituden $\propto1/k^2$, und kein Gibbs-Überschwinger, weil es keinen Sprung gibt. Die Reihe konvergiert gleichmässig. Das Gibbs-Phänomen ist an Unstetigkeiten gebunden.`,
    pitfalls: R`<ul><li>Gerade Harmonische mitnehmen.</li>
<li>$\frac{4A}{\pi k}$ mit $\frac{4A}{\pi k^2}$ (Dreieck) verwechseln.</li>
<li>Glauben, mit genügend Termen verschwinde der Überschwinger.</li></ul>`
  },
  {
    id: "ph9_fourierintegral_knall",
    title: "Fourierintegral und Spektrum eines Knalls: Δω · τ = π",
    category: "9.6 Fourieranalyse",
    type: "herleitung",
    front: R`Wie gelangt man von der Fourierreihe zum <b>Fourierintegral</b>? Berechne das Spektrum $A(\omega)$ eines rechteckigen Knalls ($f = f_0$ für $|t|\le\tau$, sonst $0$) und zeige, dass die Breite des Spektrums umgekehrt proportional zur Dauer ist.`,
    back: R`$T\to\infty$: $f$ ist nicht mehr periodisch, $\omega_0 = 2\pi/T\to0$, die Spektrallinien rücken zusammen zu einer kontinuierlichen Verteilung. Statt $c_n$ eine Amplitudenfunktion (Spektrum) $A(\omega)$:
$$f(t) = \frac1{\sqrt{2\pi}}\int_{-\infty}^\infty A(\omega)e^{i\omega t}d\omega,\qquad A(\omega) = \frac1{\sqrt{2\pi}}\int_{-\infty}^\infty f(t)e^{-i\omega t}dt\qquad(9.223,\,9.224)$$
(Vorfaktor frei wählbar; $1/\sqrt{2\pi}$ macht beide Richtungen symmetrisch.)<br><br>
<b>Knall</b> (9.225):
$$A(\omega) = \frac{f_0}{\sqrt{2\pi}}\int_{-\tau}^{\tau}e^{-i\omega t}dt = \frac{f_0}{\sqrt{2\pi}}\frac{e^{i\omega\tau}-e^{-i\omega\tau}}{i\omega} = \frac{2f_0}{\sqrt{2\pi}}\frac{\sin\omega\tau}{\omega}\qquad(9.226\text{–}9.228)$$
Breite bis zur ersten Nullstelle: $\sin(\Delta\omega\,\tau) = 0\Rightarrow\Delta\omega = \pi/\tau$ (9.229). Die Breite des Spektrums ist umgekehrt proportional zur Dauer.`,
    meta: "Skript: Abschnitte 9.6.2.1–9.6.2.3 (Anfang), Gl. (9.223)–(9.229), Abb. 9.31, S. 266–268",
    explanation: R`<b>Intuition:</b> Ein kurzes Ereignis lässt sich nur mit sehr vielen Frequenzen „zusammensetzen“, die sich ausserhalb des Ereignisses gegenseitig auslöschen. Je kürzer das Ereignis, desto breiter das benötigte Frequenzband. Ein langer, reiner Ton hat dagegen ein scharfes Spektrum.<br><br>
<b>Abhängigkeit:</b> $\Delta\omega\cdot\tau = \pi$ (für dieses Breitenmass). Halbe Dauer ergibt doppelte Breite. Das gilt für alle Pulsformen bis auf einen Faktor der Ordnung 1: $\Delta\omega\,\Delta t\gtrsim1$.<br><br>
<b>Höhe:</b> $A(0) = \frac{2f_0\tau}{\sqrt{2\pi}}$ ist proportional zur Fläche $2f_0\tau$ des Pulses: Der Gleichanteil misst das Integral des Signals.<br><br>
<b>Zusammenhang:</b> In der Quantenmechanik wird daraus die Heisenberg’sche Unschärferelation ($\Delta E\,\Delta t\gtrsim\hbar$, $\Delta p\,\Delta x\gtrsim\hbar$). In der Technik: Kurze Laserpulse (Femtosekunden) haben breite Spektren; schnelle Datenübertragung braucht grosse Bandbreite.`,
    derivation: R`<ol class="fc-steps">
<li>$A(\omega) = \dfrac{f_0}{\sqrt{2\pi}}\displaystyle\int_{-\tau}^{\tau}e^{-i\omega t}dt$<em>Ausserhalb $[-\tau,\tau]$ ist $f = 0$ (9.226).</em></li>
<li>$= \dfrac{f_0}{\sqrt{2\pi}}\left[\dfrac{e^{-i\omega t}}{-i\omega}\right]_{-\tau}^{\tau} = \dfrac{f_0}{\sqrt{2\pi}}\dfrac{e^{i\omega\tau}-e^{-i\omega\tau}}{i\omega}$<em>Stammfunktion; Vorzeichen beim Vertauschen (9.227).</em></li>
<li>$e^{i\omega\tau}-e^{-i\omega\tau} = 2i\sin\omega\tau$<em>Euler.</em></li>
<li>$A(\omega) = \dfrac{2f_0}{\sqrt{2\pi}}\dfrac{\sin\omega\tau}\omega$<em>Reell, da $f$ gerade ist (9.228).</em></li>
<li>$\lim_{\omega\to0}A = \dfrac{2f_0\tau}{\sqrt{2\pi}}$; erste Nullstelle bei $\omega\tau = \pi$<em>$\sin x/x\to1$; Breite $\Delta\omega = \pi/\tau$ (9.229).</em></li>
</ol>`,
    example: R`Knall mit $2\tau = 2\,\text{ms}$ ($\tau = 1\,\text{ms}$): $\Delta\omega = \pi/\tau = 3142\,\text{s}^{-1}$, also $\Delta\nu = 500\,\text{Hz}$. Ein Klick von $2\,\mu\text{s}$ Dauer hätte $\Delta\nu = 500\,\text{kHz}$, weit über dem Hörbereich – man hört ihn trotzdem, weil der Anteil unter $20\,\text{kHz}$ nicht null ist.`,
    counterexample: R`<b>Unendlich langer Sinuston</b> $f = \cos\omega_1t$: Er hat kein „breites“ Spektrum, sondern zwei scharfe Linien bei $\pm\omega_1$ (formal Deltafunktionen). Ein reales, endlich langes Tonsignal der Dauer $2\tau$ hat dagegen Linien der Breite $\sim\pi/\tau$. Absolut scharfe Frequenzen gibt es nur für unendlich lange Signale.`,
    pitfalls: R`<ul><li>Die Vorfaktoren ($1/\sqrt{2\pi}$ oder $1$ und $1/2\pi$) zwischen Hin- und Rücktransformation mischen.</li>
<li>Glauben, ein kurzer Puls habe eine bestimmte „Frequenz“.</li>
<li>Bei der Grenzwertbildung $\omega\to0$ durch null teilen.</li></ul>`
  },
  {
    id: "ph9_deltafunktion",
    title: "Deltafunktion als unendlich kurzer Knall und ihr Spektrum",
    category: "9.6 Fourieranalyse",
    type: "definition",
    front: R`Was ist die <b>Deltafunktion</b> $\delta(x-a)$, wie ist sie definiert, und welche Eigenschaft hat sie unter einem Integral? Wie sieht ihr Fourierspektrum aus, und welcher Zusammenhang besteht zur Unschärferelation?`,
    back: R`Grenzfall eines Knalls, der immer kürzer und höher wird, bei konstanter Fläche $f_0\cdot2\tau = 1$ (Abb. 9.32):
$$\delta(x-a) = \begin{cases}0,&x\ne a\\\infty,&x = a\end{cases},\qquad\int_{-\infty}^\infty\delta(x-a)\,dx = 1\qquad(9.230,\,9.231)$$
Keine Funktion im üblichen Sinn, sondern eine <b>Distribution</b>, definiert über Integrale. Integrale, die $a$ nicht enthalten, verschwinden (9.232). <b>Siebeigenschaft:</b>
$$\int_{-\infty}^\infty f(x)\,\delta(x-a)\,dx = f(a)\qquad(9.233)$$
<b>Spektrum</b> von $\delta(t-t_0)$:
$$A(\omega) = \frac1{\sqrt{2\pi}}\int\delta(t-t_0)e^{-i\omega t}dt = \frac1{\sqrt{2\pi}}e^{-i\omega t_0},\quad\text{Re}\,A = \tfrac{\cos\omega t_0}{\sqrt{2\pi}},\ \text{Im}\,A = -\tfrac{\sin\omega t_0}{\sqrt{2\pi}}\qquad(9.234\text{–}9.236)$$
$|A(\omega)| = 1/\sqrt{2\pi}$ für alle $\omega$: Alle Frequenzen von $-\infty$ bis $\infty$ sind gleich stark vertreten.`,
    meta: "Skript: Abschnitt 9.6.2.3, Gl. (9.230)–(9.236), Abb. 9.32, S. 268–269",
    explanation: R`<b>Intuition:</b> Die Deltafunktion ist ein idealisierter Schlag: unendlich kurz, aber mit endlichem „Gesamtimpuls“ (Fläche 1). Im Frequenzraum ist sie das Gegenteil eines reinen Tons: perfekt lokalisiert in der Zeit, völlig unbestimmt in der Frequenz.<br><br>
<b>Siebeigenschaft:</b> Unter dem Integral „pickt“ $\delta$ den Wert der Funktion an einer Stelle heraus. Das macht sie zum Werkzeug, um Punktladungen, Punktmassen oder kurze Kraftstösse zu beschreiben (Kraftstoss $F(t) = \Delta p\,\delta(t-t_0)$).<br><br>
<b>Phase:</b> Die Lage $t_0$ steckt nur in der Phase $e^{-i\omega t_0}$, nicht im Betrag. Eine Verschiebung in der Zeit ist eine frequenzabhängige Phasendrehung im Spektrum.<br><br>
<b>Zusammenhang:</b> Unschärferelation (Quantenmechanik): Ein Teilchen mit scharfem Ort hat völlig unbestimmten Impuls. Systemtheorie: Die Antwort eines linearen Systems (z. B. Oszillator) auf einen Deltastoss heisst Impulsantwort; ihre Fouriertransformierte ist die Resonanzkurve.`,
    derivation: R`Deltafunktion als Grenzwert des Knalls (Fläche 1, also $f_0 = 1/(2\tau)$):
<ol class="fc-steps">
<li>$A_\tau(\omega) = \dfrac{2f_0}{\sqrt{2\pi}}\dfrac{\sin\omega\tau}\omega = \dfrac1{\sqrt{2\pi}}\dfrac{\sin\omega\tau}{\omega\tau}$<em>Knall-Spektrum (9.228) mit $2f_0\tau = 1$.</em></li>
<li>$\tau\to0$: $\dfrac{\sin\omega\tau}{\omega\tau}\to1$ für jedes feste $\omega$<em>Die erste Nullstelle $\pi/\tau$ wandert nach unendlich.</em></li>
<li>$A(\omega)\to\dfrac1{\sqrt{2\pi}}$<em>Flaches Spektrum = Deltafunktion bei $t_0 = 0$ (9.234).</em></li>
<li>$\displaystyle\int f(x)\delta_\tau(x-a)dx = \dfrac1{2\tau}\int_{a-\tau}^{a+\tau}f\,dx\to f(a)$<em>Mittelwert über ein schrumpfendes Intervall: Siebeigenschaft (9.233).</em></li>
</ol>`,
    example: R`$\int_{-\infty}^\infty x^2\delta(x-3)\,dx = 9$; $\int_0^\infty\cos x\,\delta(x-\pi)\,dx = -1$; $\int_{-1}^{1}e^x\delta(x-2)\,dx = 0$ (die Stelle $2$ liegt ausserhalb).<br>
<b>Hammerschlag</b> auf ein Glas: Der kurze Stoss regt alle Frequenzen an; das Glas „antwortet“ mit seinen Eigenfrequenzen (Klang).`,
    counterexample: R`<b>„$\delta(0) = \infty$, also ist $\int\delta = \infty$“:</b> falsch. Eine Funktion, die nur an einem Punkt unendlich und sonst null ist, hätte im Riemann-Sinn das Integral 0, nicht 1. Darum ist $\delta$ keine Funktion; ihre Bedeutung liegt allein in der Definition über Integrale (9.231, 9.233).`,
    pitfalls: R`<ul><li>$\delta$ wie eine gewöhnliche Funktion punktweise auswerten oder quadrieren.</li>
<li>Die Integrationsgrenzen nicht prüfen (liegt $a$ im Intervall?).</li>
<li>Glauben, der Betrag des Spektrums hänge von $t_0$ ab.</li></ul>`
  },

  // ========================================================================
  // 9.7 GEKOPPELTE SCHWINGUNGEN
  // ========================================================================
  {
    id: "ph9_gekoppelte_pendel_normalmoden",
    title: "Zwei gekoppelte Pendel: Normalkoordinaten und Eigenschwingungen",
    category: "9.7 Gekoppelte Schwingungen",
    type: "herleitung",
    front: R`Zwei identische Pendel (Masse $m$, $\omega_0 = \sqrt{g/\ell}$) sind durch eine Feder $k$ gekoppelt. Stelle die Bewegungsgleichungen auf, entkopple sie mit <b>Normalkoordinaten</b> und bestimme die beiden Eigenfrequenzen. Wie sehen die zugehörigen Schwingungsformen aus?`,
    back: R`Für kleine Auslenkungen (rein horizontal):
$$\ddot x_1+\omega_0^2x_1+\frac km(x_1-x_2) = 0,\qquad\ddot x_2+\omega_0^2x_2-\frac km(x_1-x_2) = 0\qquad(9.237,\,9.238)$$
<b>Normalkoordinaten:</b> $z_1 := x_1-x_2$, $z_2 := x_1+x_2$ (9.239, 9.240). Summe bzw. Differenz der Gleichungen:
$$\ddot z_2+\omega_0^2z_2 = 0,\qquad\ddot z_1+\left(\omega_0^2+2\frac km\right)z_1 = 0\qquad(9.241,\,9.242)$$
Entkoppelt, mit
$$\omega_2 = \omega_0,\qquad\omega_1 = \sqrt{\omega_0^2+2\frac km}\qquad(9.243,\,9.244)$$
Rücktransformation $x_1 = \tfrac12(z_1+z_2)$, $x_2 = \tfrac12(z_2-z_1)$ (9.245, 9.246).
<ul><li><b>Gleichläufig</b> $x_1 = x_2$: $z_1\equiv0$, nur $\omega_2 = \omega_0$; Feder bleibt entspannt (9.247, Abb. 9.34).</li>
<li><b>Gegenläufig</b> $x_1 = -x_2$: $z_2\equiv0$, nur $\omega_1\gt\omega_0$; Feder arbeitet mit (9.248, Abb. 9.35).</li></ul>`,
    meta: "Skript: Abschnitt 9.7.1 (Teil 1), Gl. (9.237)–(9.248), Abb. 9.33–9.35, S. 270–272",
    explanation: R`<b>Intuition:</b> Schwingen beide Pendel gleich, merkt die Feder nichts; jedes schwingt wie allein mit $\omega_0$. Schwingen sie gegeneinander, wird die Feder auf beiden Seiten gedehnt bzw. gestaucht, und die zusätzliche Rückstellkraft erhöht die Frequenz.<br><br>
<b>Warum $2k/m$?</b> Bei Gegenschwingung ist die Federdehnung $x_1-x_2 = 2x_1$, also doppelt so gross wie die Auslenkung eines Pendels. Jedes Pendel spürt deshalb die effektive Federkonstante $2k$.<br><br>
<b>Normalkoordinaten:</b> Sie sind die „natürlichen“ Koordinaten, in denen jede Bewegung eine einfache harmonische Schwingung ist. Mathematisch: die Eigenvektoren der Kopplungsmatrix (9.7.2). Jede mögliche Bewegung ist eine Überlagerung der beiden Eigenschwingungen.<br><br>
<b>Zusammenhang:</b> Gekoppelte Oszillatoren beschreiben Moleküle (Schwingungsmoden), Kristallgitter (Phononen), gekoppelte Schwingkreise (Bandfilter) und – im Grenzfall unendlich vieler – Wellen auf einer Saite.`,
    derivation: R`<ol class="fc-steps">
<li>$m\ddot x_1 = -\dfrac{mg}\ell x_1 - k(x_1-x_2)$<em>Rückstellkraft des Pendels (kleine Winkel) plus Federkraft; gedehnt um $x_1-x_2$.</em></li>
<li>$(9.237)+(9.238)$: $\ddot z_2+\omega_0^2z_2 = 0$<em>Die Kopplungsterme heben sich auf (9.241).</em></li>
<li>$(9.237)-(9.238)$: $\ddot z_1+\omega_0^2z_1+2\dfrac km z_1 = 0$<em>Die Kopplungsterme addieren sich (9.242).</em></li>
<li>$\omega_1^2 = \omega_0^2+2k/m$<em>Eigenfrequenz der gegenläufigen Mode (9.244).</em></li>
<li>$x_1 = x_2\Rightarrow z_1 = 0$ für alle $t$<em>Nur die Mode $z_2$ ist angeregt (9.247).</em></li>
</ol>`,
    example: R`$\ell = 1\,\text{m}$, $m = 0{,}5\,\text{kg}$, $k = 0{,}5\,\text{N/m}$: $\omega_0 = 3{,}132\,\text{s}^{-1}$ ($T = 2{,}006\,\text{s}$), $\omega_1 = \sqrt{9{,}81+2} = 3{,}437\,\text{s}^{-1}$ ($T = 1{,}828\,\text{s}$). Gegenläufig schwingen die Pendel also merklich schneller.`,
    counterexample: R`<b>Ungleiche Pendel</b> (verschiedene Längen oder Massen): Dann sind $x_1\pm x_2$ keine Normalkoordinaten mehr; die Moden sind andere Linearkombinationen, und die Energie wird bei schwacher Kopplung nicht mehr vollständig übertragen. Die einfache Summe/Differenz funktioniert nur wegen der Symmetrie.`,
    pitfalls: R`<ul><li>$\omega_1 = \sqrt{\omega_0^2+k/m}$ (Faktor 2 vergessen).</li>
<li>Die Vorzeichen der Kopplungsterme in (9.238) falsch setzen.</li>
<li>Glauben, die Pendel schwängen im allgemeinen Fall mit einer einzigen Frequenz.</li></ul>`
  },
  {
    id: "ph9_gekoppelte_pendel_schwebung",
    title: "Gekoppelte Pendel: Schwebung und vollständiger Energieaustausch",
    category: "9.7 Gekoppelte Schwingungen",
    type: "beispiel",
    front: R`Pendel 1 wird um $A$ ausgelenkt, Pendel 2 bleibt in Ruhe; beide werden bei $t = 0$ losgelassen. Bestimme $x_1(t)$, $x_2(t)$. Wie lange dauert es bei schwacher Kopplung ($k/m\ll\omega_0^2$), bis die gesamte Energie bei Pendel 2 ist?`,
    back: R`Anfangsbedingungen: $x_1 = A$, $x_2 = 0$, $\dot x_1 = \dot x_2 = 0$, also $z_1 = z_2 = A$, $\dot z_1 = \dot z_2 = 0$ (9.249–9.252):
$$z_1 = A\cos\omega_1t,\qquad z_2 = A\cos\omega_2t\qquad(9.253,\,9.254)$$
Beide Normalschwingungen mit gleicher Amplitude und Phase. Zurück in die Pendelkoordinaten:
$$x_1 = A\cos\frac{\omega_1+\omega_2}2t\,\cos\frac{\omega_1-\omega_2}2t,\qquad x_2 = A\sin\frac{\omega_1+\omega_2}2t\,\sin\frac{\omega_1-\omega_2}2t\qquad(9.255,\,9.256)$$
Schwache Kopplung $k/m\ll\omega_0^2$: $\omega_1\approx\omega_2$, Schwebung (Abb. 9.36). Periode der Modulation:
$$T = \frac{4\pi}{\omega_1-\omega_2}\approx\frac{4\pi m\omega_0}k\qquad(9.257\text{–}9.261)$$
Nach $\Delta t = T/4$ ruht Pendel 1, und Pendel 2 hat die gesamte Energie; nach $T/2$ ist es umgekehrt. Kopplung erlaubt <b>vollständige Energieübertragung</b>.`,
    meta: "Skript: Abschnitt 9.7.1, Fall 3, Gl. (9.249)–(9.261), Abb. 9.36, S. 272–274",
    explanation: R`<b>Intuition:</b> Pendel 1 zieht über die Feder bei jeder Schwingung ein wenig an Pendel 2, und zwar im richtigen Takt (beide haben fast dieselbe Frequenz): Pendel 2 wird resonant angeregt, Pendel 1 verliert dabei Energie. Ist Pendel 1 zur Ruhe gekommen, kehrt sich das Spiel um.<br><br>
<b>Abhängigkeiten:</b> $T\propto m\omega_0/k$: schwächere Kopplung bedeutet langsameren Austausch. Die Zeit für den vollständigen Übergang $T/4 = \pi m\omega_0/k$ ist umgekehrt proportional zur Kopplungsstärke.<br><br>
<b>Phasensprung:</b> Wenn die Einhüllende durch null geht, wechselt sie ihr Vorzeichen; die schnelle Schwingung springt dann um $\pi$ (wie bei jeder Schwebung).<br><br>
<b>Zusammenhang:</b> Genau so tauschen gekoppelte Atome, Spins oder Qubits ihre Anregung aus (Rabi-Oszillationen, Resonanzübertragung). Gekoppelte Schwingkreise in Radios nutzen es für Bandfilter.`,
    derivation: R`<ol class="fc-steps">
<li>$x_1 = \tfrac12(z_1+z_2) = \tfrac A2(\cos\omega_1t+\cos\omega_2t)$<em>Rücktransformation (9.245).</em></li>
<li>$x_1 = A\cos\dfrac{(\omega_1+\omega_2)t}2\cos\dfrac{(\omega_1-\omega_2)t}2$<em>Summe-zu-Produkt (9.255).</em></li>
<li>$x_2 = \tfrac A2(\cos\omega_2t-\cos\omega_1t) = A\sin\dfrac{(\omega_1+\omega_2)t}2\sin\dfrac{(\omega_1-\omega_2)t}2$<em>$\cos\beta-\cos\alpha = 2\sin\frac{\alpha+\beta}2\sin\frac{\alpha-\beta}2$ (9.256).</em></li>
<li>$\omega_1 = \omega_0\sqrt{1+\dfrac{2k}{m\omega_0^2}}\approx\omega_0\left(1+\dfrac k{m\omega_0^2}\right)$<em>Taylor $\sqrt{1+\varepsilon}\approx1+\varepsilon/2$ (9.260).</em></li>
<li>$\omega_1-\omega_2\approx\dfrac{k}{m\omega_0}\Rightarrow T = \dfrac{4\pi}{\omega_1-\omega_2}\approx\dfrac{4\pi m\omega_0}k$<em>(9.261).</em></li>
<li>$x_1$-Einhüllende $= 0$ bei $\dfrac{(\omega_1-\omega_2)t}2 = \dfrac\pi2\Rightarrow t = \dfrac T4$<em>Erster vollständiger Energieübertrag.</em></li>
</ol>`,
    example: R`Pendel wie oben ($\omega_0 = 3{,}132\,\text{s}^{-1}$, $m = 0{,}5\,\text{kg}$, $k = 0{,}5\,\text{N/m}$, $k/(m\omega_0^2) = 0{,}10$): exakt $T = 41{,}3\,\text{s}$, Näherung $39{,}4\,\text{s}$ (5 % Abweichung, da die Kopplung nicht sehr schwach ist). Pendel 1 steht nach $T/4 = 10{,}3\,\text{s}$ still.`,
    counterexample: R`<b>Nur eine Mode angeregt:</b> Startet man mit $x_1 = x_2 = A$ (oder $x_1 = -x_2$), gibt es keine Schwebung und keinen Energieaustausch; beide Pendel schwingen dauerhaft mit gleicher Amplitude. Der Austausch entsteht erst durch die Überlagerung zweier Moden mit verschiedenen Frequenzen.`,
    pitfalls: R`<ul><li>$T$ mit der Zeit für den Energieübertrag ($T/4$) verwechseln.</li>
<li>Die Näherung (9.261) bei starker Kopplung verwenden.</li>
<li>Glauben, die Kopplungsfeder speichere im Mittel einen grossen Teil der Energie (bei schwacher Kopplung ist er klein).</li></ul>`
  },
  {
    id: "ph9_drei_oszillatoren",
    title: "Drei gekoppelte Massen: Eigenwertproblem und Eigenschwingungen",
    category: "9.7 Gekoppelte Schwingungen",
    type: "herleitung",
    front: R`Drei gleiche Massen $m$ sind durch zwei Federn $k$ verbunden (ohne Verbindung zur Wand). Stelle die Bewegungsgleichungen in Matrixform auf, bestimme die Eigenfrequenzen und Eigenvektoren und beschreibe die drei Eigenschwingungen. Welche gemeinsamen Eigenschaften haben Eigenschwingungen?`,
    back: R`$$m\ddot x_1 = k(x_2-x_1),\quad m\ddot x_2 = -k(x_2-x_1)+k(x_3-x_2),\quad m\ddot x_3 = -k(x_3-x_2)\qquad(9.262\text{–}9.264)$$
$$\ddot{\vec x} = -\omega_0^2M\vec x,\qquad M = \begin{pmatrix}1&-1&0\\-1&2&-1\\0&-1&1\end{pmatrix},\quad\omega_0^2 = \frac km\qquad(9.265,\,9.268)$$
Ansatz $x_k = A_ke^{i(\omega t+\delta)}$ (9.266): $(\omega_0^2M-\omega^21)\vec A = \vec 0$ (9.270). Nichttriviale Lösung nur für
$$\det(\omega_0^2M-\omega^21) = \omega_0^6\,\xi(1-\xi)(\xi-3) = 0,\qquad\xi = \frac{\omega^2}{\omega_0^2}\qquad(9.271,\,9.272)$$
$$\omega^2\in\{0,\ \omega_0^2,\ 3\omega_0^2\},\qquad\vec A^{(1)} = \begin{pmatrix}1\\1\\1\end{pmatrix},\ \vec A^{(2)} = \begin{pmatrix}1\\0\\-1\end{pmatrix},\ \vec A^{(3)} = \begin{pmatrix}1\\-2\\1\end{pmatrix}\qquad(9.273\text{–}9.281)$$
$$\vec x = (C_0+C_1t)\vec A^{(1)}+C_2\vec A^{(2)}\cos(\omega_0t+\delta_2)+C_3\vec A^{(3)}\cos(\sqrt3\,\omega_0t+\delta_3)\qquad(9.282)$$
Bei Eigenschwingungen: kein Energieaustausch zwischen den Oszillatoren, alle mit derselben Frequenz, alle gleichzeitig durch null.`,
    meta: "Skript: Abschnitt 9.7.2, Gl. (9.262)–(9.282), Abb. 9.37, S. 274–276",
    explanation: R`<b>Die drei Moden:</b> (1) $\omega = 0$: Alle drei verschieben sich gemeinsam (Ruhe oder gleichförmige Bewegung) – möglich, weil keine Feder an einer Wand hängt; bei den Pendeln gab es das nicht. (2) $\omega_0$: Die äusseren Massen schwingen gegeneinander, die mittlere ruht. (3) $\sqrt3\,\omega_0$: Die äusseren schwingen gleichphasig, die mittlere gegenphasig mit doppelter Amplitude (Schwerpunkt bleibt in Ruhe).<br><br>
<b>Methode:</b> Gekoppelte lineare Schwingungen sind ein Eigenwertproblem: Eigenwerte der Kopplungsmatrix = Quadrate der Eigenfrequenzen, Eigenvektoren = Schwingungsformen. Weil $M$ symmetrisch ist, sind die Eigenvektoren orthogonal (vgl. Linalg: Spektralsatz).<br><br>
<b>Abhängigkeiten:</b> Alle Frequenzen skalieren mit $\sqrt{k/m}$; ihr Verhältnis $0:1:\sqrt3$ ist rein geometrisch (Anordnung der Kopplungen).<br><br>
<b>Zusammenhang:</b> Modell für lineare dreiatomige Moleküle wie CO₂ (dort mit ungleichen Massen: symmetrische Streckschwingung $\sqrt{k/m_\text{O}}$, asymmetrische $\sqrt{k/m_\text{O}}\sqrt{1+2m_\text{O}/m_\text{C}}$). Für $N\to\infty$ Massen entstehen Gitterwellen (Phononen).`,
    derivation: R`Determinante und Eigenvektor für $\xi = 3$:
<ol class="fc-steps">
<li>$\det\begin{pmatrix}1-\xi&-1&0\\-1&2-\xi&-1\\0&-1&1-\xi\end{pmatrix} = (1-\xi)\left[(2-\xi)(1-\xi)-1\right]-(1-\xi)$<em>Entwicklung nach der ersten Zeile.</em></li>
<li>$= (1-\xi)\left[\xi^2-3\xi+2-1-1\right] = (1-\xi)\,\xi(\xi-3)$<em>Ausklammern und vereinfachen (9.272).</em></li>
<li>$\xi = 3$: $\begin{pmatrix}-2&-1&0\\-1&-1&-1\\0&-1&-2\end{pmatrix}\vec A = \vec 0$<em>In (9.270) einsetzen (geteilt durch $\omega_0^2$).</em></li>
<li>$A_2 = -2A_1$, $A_2 = -2A_3\Rightarrow\vec A^{(3)} = (1,-2,1)^t$<em>Erste und dritte Zeile; die zweite ist dann automatisch erfüllt (9.281).</em></li>
<li>$\xi = 0$: $A_1 = A_2 = A_3$<em>Starre Verschiebung; die zugehörige „Lösung“ ist $(C_0+C_1t)\vec A^{(1)}$ (9.275–9.279).</em></li>
</ol>`,
    example: R`$k = 100\,\text{N/m}$, $m = 1\,\text{kg}$: $\omega_0 = 10\,\text{s}^{-1}$, Eigenfrequenzen $0$, $10$ und $17{,}3\,\text{s}^{-1}$.<br>
Mit gleichen Massen ist das Frequenzverhältnis der beiden Streckschwingungen $\sqrt3 = 1{,}73$; für CO₂ liefert das Modell $\sqrt{1+32/12} = 1{,}91$ (gemessen ca. $1{,}69$, Abweichung durch Anharmonizität und Fermi-Resonanz).`,
    counterexample: R`<b>Massen zusätzlich an Wände gebunden</b> (Feder $k$ zwischen Wand und Masse 1 bzw. 3): Dann gibt es keine Mode mit $\omega = 0$ mehr, die Matrix ändert sich zu $\begin{pmatrix}2&-1&0\\-1&2&-1\\0&-1&2\end{pmatrix}$, und die Eigenfrequenzen werden $\omega_0\sqrt{2-\sqrt2}$, $\omega_0\sqrt2$, $\omega_0\sqrt{2+\sqrt2}$. Randbedingungen bestimmen das Spektrum.`,
    pitfalls: R`<ul><li>Die Mode $\omega = 0$ als „keine Lösung“ verwerfen; sie beschreibt die freie Translation.</li>
<li>Eigenvektoren als feste Amplituden lesen; sie sind nur bis auf einen Faktor bestimmt.</li>
<li>Eigenwerte $\xi$ mit Frequenzen statt mit Frequenzquadraten gleichsetzen.</li></ul>`
  },

  // ========================================================================
  // ERGÄNZUNGEN: typische Prüfungsaufgaben und Brücken zu Physik II
  // ========================================================================
  {
    id: "ph9_physikalisches_pendel",
    title: "Physikalisches Pendel: T = 2π√(J_A/(m g s)) und reduzierte Pendellänge",
    category: "9.2 Harmonische Schwingungen",
    type: "herleitung",
    front: R`Ein starrer Körper (Masse $m$) schwingt um eine feste Achse $A$, die im Abstand $s$ vom Schwerpunkt liegt. Leite die Schwingungsdauer für kleine Ausschläge her. Was ist die <b>reduzierte Pendellänge</b>? Berechne $T$ für einen Stab der Länge $\ell$, der an einem Ende aufgehängt ist, und finde den Aufhängepunkt mit minimaler Periode.`,
    back: R`Drehmoment der Schwerkraft um $A$ (Schwerpunkt im Abstand $s$): $M = -mgs\sin\varphi$. Bewegungsgleichung (8.93):
$$J_A\ddot\varphi = -mgs\sin\varphi\;\approx\;-mgs\,\varphi\;\Rightarrow\;\ddot\varphi+\frac{mgs}{J_A}\varphi = 0$$
$$\omega_0 = \sqrt{\frac{mgs}{J_A}},\qquad T = 2\pi\sqrt{\frac{J_A}{mgs}},\qquad\ell_r = \frac{J_A}{ms}$$
Das physikalische Pendel schwingt wie ein mathematisches Pendel der Länge $\ell_r$. Mit Steiner $J_A = J_S+ms^2$:
$$\ell_r = s+\frac{J_S}{ms}\ \ge\ s$$
<b>Stab am Ende:</b> $J_A = \tfrac13m\ell^2$, $s = \ell/2$: $\ell_r = \tfrac23\ell$, $T = 2\pi\sqrt{\frac{2\ell}{3g}}$.<br>
<b>Minimale Periode:</b> $\frac{d\ell_r}{ds} = 1-\frac{J_S}{ms^2} = 0\Rightarrow s = \sqrt{J_S/m}$ (Trägheitsradius), $\ell_r^\text{min} = 2\sqrt{J_S/m}$.`,
    meta: "Ergänzung (typische Prüfungsaufgabe); verbindet Abschnitte 8.5.5–8.5.8 (Drallsatz, Steiner) mit 9.2.2 (harmonische Näherung) und 12.4.3 (mathematisches Pendel)",
    explanation: R`<b>Intuition:</b> Beim mathematischen Pendel sitzt die ganze Masse am Ende; beim physikalischen Pendel ist sie verteilt. Massenteile nahe der Achse tragen zur Trägheit wenig bei, aber auch wenig zum Drehmoment. Das Verhältnis $J_A/(ms)$ bestimmt, wie „lang“ das Pendel effektiv ist.<br><br>
<b>Abhängigkeiten:</b> $T\propto\sqrt{J_A/(ms)}$; die Masse kürzt sich, die Form nicht. Ein Stab am Ende schwingt wie ein Fadenpendel mit $\tfrac23$ seiner Länge – also schneller als ein Fadenpendel gleicher Länge.<br><br>
<b>Minimum:</b> Hängt man zu nahe am Schwerpunkt auf ($s\to0$), wird das Drehmoment klein und $T\to\infty$; weit weg wird $J_A$ gross. Dazwischen liegt ein Minimum. Uhrenbauer nutzen die Umgebung dieses Minimums, weil dort kleine Fehler in $s$ die Periode kaum ändern.<br><br>
<b>Zusammenhang:</b> Reversionspendel (Kater): Zwei Aufhängepunkte mit gleicher Periode liegen genau $\ell_r$ auseinander – damit misst man $g$ präzise, ohne $J_S$ zu kennen. Torsionspendel (Tab. 9.1): $\omega_0 = \sqrt{\kappa/J}$.`,
    derivation: R`<ol class="fc-steps">
<li>$\vec M = \vec s\times m\vec g$, $M = -mgs\sin\varphi$<em>Schwerkraft greift im Schwerpunkt an (8.3.3, Punkt 6); rücktreibend.</em></li>
<li>$J_A\ddot\varphi = M$<em>Drallsatz um die feste Achse (8.93).</em></li>
<li>$\sin\varphi\approx\varphi$<em>Kleine Ausschläge (Taylor, 11.1.2).</em></li>
<li>$\ddot\varphi+\omega_0^2\varphi = 0$, $\omega_0^2 = \dfrac{mgs}{J_A}$<em>Harmonischer Oszillator (9.9).</em></li>
<li>Vergleich mit $\omega_0^2 = g/\ell$: $\ell_r = \dfrac{J_A}{ms}$<em>Reduzierte Pendellänge.</em></li>
</ol>`,
    example: R`Stab $\ell = 1\,\text{m}$ am Ende: $T = 2\pi\sqrt{2/(3\cdot9{,}81)} = 1{,}64\,\text{s}$ (Fadenpendel $1\,\text{m}$: $2{,}01\,\text{s}$).<br>
Minimale Periode des Stabs: Aufhängung im Abstand $s = \ell/\sqrt{12} = 0{,}289\,\text{m}$ vom Schwerpunkt, $T_\text{min} = 1{,}52\,\text{s}$.<br>
Ring (Radius $R$) an einem Nagel: $J_A = 2mR^2$, $s = R$, $\ell_r = 2R$.`,
    counterexample: R`<b>„Masse im Schwerpunkt konzentrieren“:</b> Ersetzt man den Stab durch eine Punktmasse im Schwerpunkt ($\ell = s = 0{,}5\,\text{m}$), erhält man $T = 1{,}42\,\text{s}$ statt $1{,}64\,\text{s}$. Die Verteilung der Masse (das $J_S$) verlängert die Periode – das physikalische Pendel ist kein Fadenpendel der Länge $s$.`,
    pitfalls: R`<ul><li>$J_S$ statt $J_A$ (ohne Steiner) einsetzen.</li>
<li>Für $s$ die Stablänge statt des Abstands Achse–Schwerpunkt nehmen.</li>
<li>Die Kleinwinkelnäherung vergessen zu erwähnen.</li></ul>`
  },
  {
    id: "ph9_wellen_ausblick",
    title: "Ausblick: Von der Oszillatorkette zur Wellengleichung",
    category: "9.7 Gekoppelte Schwingungen",
    type: "konzept",
    front: R`Viele gleiche Massen $m$ im Abstand $a$ sind durch Federn $k$ zu einer Kette verbunden. Stelle die Bewegungsgleichung der $n$-ten Masse auf und zeige, dass im Grenzfall $a\to0$ die <b>Wellengleichung</b> entsteht. Wie gross ist die Ausbreitungsgeschwindigkeit, und was bedeutet das für Physik II?`,
    back: R`Bewegungsgleichung (Verallgemeinerung von 9.7.2 auf $N$ Massen):
$$m\ddot x_n = k(x_{n+1}-x_n)-k(x_n-x_{n-1}) = k(x_{n+1}-2x_n+x_{n-1})$$
Kontinuumsgrenze: $x_n(t)\to u(z,t)$ mit $z = na$; die zweite Differenz wird zur zweiten Ableitung:
$$x_{n+1}-2x_n+x_{n-1}\approx a^2\frac{\partial^2u}{\partial z^2}\;\Rightarrow\;\frac{\partial^2u}{\partial t^2} = c^2\frac{\partial^2u}{\partial z^2},\qquad c = a\sqrt{\frac km}$$
Lösungen: beliebige Formen $f(z-ct)$ und $g(z+ct)$, die unverändert mit $c$ nach rechts bzw. links laufen; harmonisch: $u = A\cos(qz-\omega t)$ mit $\omega = cq$.<br>
Für endliches $a$ (Ergänzung): $\omega(q) = 2\sqrt{k/m}\,|\sin(qa/2)|$ – die Eigenfrequenzen von 9.7.2 sind Spezialfälle dieser Dispersionsrelation.`,
    meta: "Ergänzung (Brücke zu Physik II); verallgemeinert Abschnitt 9.7 (gekoppelte Oszillatoren, Gl. 9.262–9.282) und nutzt Taylorreihen (11.1.2)",
    explanation: R`<b>Intuition:</b> Eine Welle ist eine Kette gekoppelter Oszillatoren, die die Schwingung jeweils an den Nachbarn weitergeben. Jeder einzelne schwingt nur um seine Ruhelage; was sich ausbreitet, ist der Zustand (und die Energie), nicht die Masse.<br><br>
<b>Abhängigkeiten:</b> $c = a\sqrt{k/m}$: steifere Kopplung oder leichtere Massen ergeben schnellere Wellen. Für eine Saite ergibt dieselbe Rechnung $c = \sqrt{F/\mu}$ (Spannkraft durch Massenbelag), für Schall im Festkörper $c = \sqrt{E/\rho}$ (Elastizitätsmodul durch Dichte).<br><br>
<b>Was man aus Physik I mitnimmt:</b> Normalmoden (9.7), Überlagerung und Schwebung (9.5), Fourierzerlegung (9.6: jede Welle ist eine Summe harmonischer Wellen), Energie im Oszillator (9.2.8), Resonanz (9.4: stehende Wellen auf einer eingespannten Saite sind Resonanzen).<br><br>
<b>Zusammenhang (Physik II):</b> Dieselbe Gleichung beschreibt Schall, Saiten, elektromagnetische Wellen ($c = 1/\sqrt{\mu_0\varepsilon_0}$) und – als Schrödingergleichung abgewandelt – Materiewellen. Gitterschwingungen (Phononen) in Festkörpern sind genau diese Kette mit endlichem $a$.`,
    derivation: R`Kontinuumsgrenze mit Taylorreihe:
<ol class="fc-steps">
<li>$x_{n\pm1} = u(z\pm a)$<em>Nachbarn als Funktionswerte an verschobenen Orten.</em></li>
<li>$u(z\pm a) = u\pm a\,u'+\tfrac12a^2u''\pm\dots$<em>Taylor um $z$ (11.3).</em></li>
<li>$u(z+a)-2u(z)+u(z-a) = a^2u''+O(a^4)$<em>Ungerade Terme heben sich auf.</em></li>
<li>$m\ddot u = ka^2u''\Rightarrow\ddot u = \dfrac{ka^2}m\,u''$<em>Einsetzen in die Bewegungsgleichung.</em></li>
<li>$f(z-ct)$: $\ddot f = c^2f''$, $f'' = f''$ ✓<em>Jede Form $f(z-ct)$ löst die Gleichung (Kettenregel).</em></li>
</ol>`,
    example: R`Saite mit $F = 100\,\text{N}$, $\mu = 0{,}01\,\text{kg/m}$: $c = 100\,\text{m/s}$. Eingespannt auf $L = 0{,}5\,\text{m}$: Grundton $\nu = c/(2L) = 100\,\text{Hz}$.<br>
Stahl ($E = 2\cdot10^{11}\,\text{Pa}$, $\rho = 7800\,\text{kg/m}^3$): $c = \sqrt{E/\rho}\approx5\,\text{km/s}$.`,
    counterexample: R`<b>Kurze Wellenlängen:</b> Für $qa\to\pi$ (Wellenlänge vergleichbar mit dem Atomabstand) gilt $\omega = cq$ nicht mehr; die Welle wird dispersiv, und bei $q = \pi/a$ steht sie (benachbarte Massen schwingen gegenphasig, Gruppengeschwindigkeit null). Die Wellengleichung ist eine Näherung für Wellenlängen $\gg a$.`,
    pitfalls: R`<ul><li>Glauben, bei einer Welle bewege sich Materie mit $c$ mit.</li>
<li>Vorzeichen in der zweiten Differenz $x_{n+1}-2x_n+x_{n-1}$ falsch setzen.</li>
<li>Phasengeschwindigkeit $\omega/q$ und Gruppengeschwindigkeit $d\omega/dq$ ausserhalb des linearen Bereichs gleichsetzen.</li></ul>`
  }
];
})();
