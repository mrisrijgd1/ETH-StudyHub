/* ==========================================================================
   PHYSIK I – KAPITEL 1: Einleitung
   Physik als Wissenschaft, physikalische Grössen, Einheiten, Winkel, Grössenordnungen
   Skript Physik I – Prof. K. Ensslin, ETH Zürich, HS 2025 (Originalskript Prof. W. Fetscher)
   Felder: front/back (Frage/Antwort), explanation (Intuition, Zusammenhänge, Proportionalitäten),
   derivation (kommentierte Schritte), example, counterexample, pitfalls (typische Fehler)
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_KAPITEL_1 = [
  // ========================================================================
  // 1.1 DIE PHYSIK ALS WISSENSCHAFT
  // ========================================================================
  {
    id: "ph1_wissenschaft",
    title: "Physik als Wissenschaft: Experiment, Modell, Falsifikation",
    category: "1.1 Die Physik als Wissenschaft",
    type: "konzept",
    front: R`Wie gewinnt die Physik Erkenntnis? Welche Rolle spielen <b>Experiment</b> und <b>Theorie</b>, und warum kann eine physikalische Theorie nie endgültig <b>bewiesen</b> werden?`,
    back: R`<b>Gegenstand:</b> Die Physik beschreibt die Bausteine der Materie, deren Wechselwirkungen und die daraus resultierenden Phänomene – quantitativ, in mathematischer Sprache.<br><br>
<b>Einziges Qualitätskriterium:</b> Eine gültige Theorie muss mit <i>allen</i> Experimenten und Beobachtungen übereinstimmen.<br><br>
<b>Erkenntniskreislauf:</b>
<ul><li>Beobachtung / Experiment (gezielte Frage an die Natur, Störeffekte möglichst ausschalten)</li>
<li>Modell bzw. Theorie (Regeln in mathematischer Form)</li>
<li>Vorhersage neuer, prüfbarer Messwerte</li>
<li>neues Experiment → Bestätigung <i>oder</i> Widerspruch</li></ul>
<b>Kernaussage:</b> Ein Modell kann <b>nie als absolut richtig bewiesen</b>, sondern nur <b>falsifiziert</b> (oder als unvollständig erkannt) werden. Ergänzend: Computersimulationen („Computational Science“) helfen, analytisch unlösbare Probleme zu behandeln und Modelle zu entwickeln.`,
    meta: "Skript: Abschnitt 1.1, Abb. 1.1–1.3, Zusammenfassung 1.3, S. 1–5 und 9",
    explanation: R`<b>Intuition:</b> Eine Theorie macht eine <i>Allaussage</i> („für jede Situation gilt …“). Jedes Experiment prüft aber nur <i>einen</i> Fall. Endlich viele Bestätigungen können eine Allaussage nie erzwingen, ein einziger reproduzierbarer Widerspruch kann sie dagegen widerlegen. Diese Asymmetrie ist der Kern der Falsifikation.<br><br>
<b>Gültigkeitsbereich statt „wahr/falsch“:</b> Eine falsifizierte Theorie wird nicht wertlos. Die Newton’sche Mechanik ist für $v\ll c$ und makroskopische Körper hervorragend bestätigt. Ausserhalb (hohe Geschwindigkeiten, atomare Skalen, starke Gravitation) wird sie durch Relativitätstheorie bzw. Quantenmechanik ersetzt, die sie als <b>Grenzfall</b> enthalten. Physik ist also eine Hierarchie von Modellen mit bekannten Gültigkeitsbereichen.<br><br>
<b>Verbindung zum Rest der Vorlesung:</b> Schon der „Massenpunkt“ (Kap. 2) ist ein solches idealisiertes Modell. Man muss immer fragen, ob die Idealisierung für die konkrete Frage zulässig ist.<br><br>
<b>Zum Inhalt des Universums (Abb. 1.3):</b> Nur etwa 4 % sind bekannte („normale“) Materie, etwa 23 % „Dunkle Materie“ (noch nicht direkt nachgewiesen) und etwa 73 % „Dunkle Energie“ (Natur unbekannt). Das zeigt, wie viel noch offen ist: Hier entstehen gerade neue Modelle, die erst experimentell geprüft werden müssen.`,
    derivation: R`Logische Struktur von Bestätigung und Widerlegung (Modus tollens):
<ol class="fc-steps">
<li>$T \Rightarrow V$<em>Die Theorie $T$ impliziert eine Vorhersage $V$ (z. B. einen bestimmten Messwert).</em></li>
<li>$V$ beobachtet $\;\not\Rightarrow\; T$ wahr<em>Ein bestätigter Messwert macht $T$ nur glaubwürdiger: Auch eine andere Theorie $T'$ könnte dasselbe $V$ vorhersagen.</em></li>
<li>$\neg V$ beobachtet $\;\Rightarrow\; \neg T$<em>Kontraposition: Liegt die Messung reproduzierbar und signifikant (ausserhalb der Messunsicherheit) neben $V$, ist $T$ in dieser Form falsch oder zumindest unvollständig.</em></li>
<li>Signifikanz: $|x_\text{gemessen} - x_\text{Theorie}| \gg \sigma$<em>Ein „Widerspruch“ zählt erst, wenn die Abweichung deutlich grösser als die Messunsicherheit $\sigma$ ist; sonst ist er statistisch nicht von Zufall zu unterscheiden.</em></li>
</ol>`,
    example: R`<b>Periheldrehung des Merkur:</b> Die Newton’sche Gravitation (inkl. Störungen durch die anderen Planeten) sagt eine Drehung der Merkurbahn von etwa $532''$ pro Jahrhundert voraus, beobachtet werden etwa $575''$. Die Differenz von rund $43''$ pro Jahrhundert liegt weit ausserhalb der Messunsicherheit. Die Newton’sche Theorie ist damit <i>falsifiziert</i>, die Allgemeine Relativitätstheorie erklärt genau diese $43''$.<br>
Trotzdem rechnet man Satellitenbahnen weiterhin mit Newton: Im Gültigkeitsbereich sind die Abweichungen vernachlässigbar.`,
    counterexample: R`<b>1. Keine physikalische Aussage:</b> „Es gibt eine Kraft, die sich grundsätzlich jeder Messung entzieht.“ Sie ist durch kein Experiment widerlegbar, also nicht falsifizierbar und damit keine physikalische Theorie.<br>
<b>2. Bestätigung ist kein Beweis:</b> Tausende Fallexperimente bestätigen $s=\tfrac12 g t^2$. Sie „beweisen“ aber nicht, dass das auch bei Luftwiderstand oder bei sehr grossen Höhen gilt. Dort weicht die Natur tatsächlich ab.`,
    pitfalls: R`<ul><li>„Bestätigt“ mit „bewiesen“ verwechseln. Physik beweist nicht wie die Mathematik.</li>
<li>Eine Abweichung als Widerlegung werten, ohne die Messunsicherheit zu betrachten. Nur signifikante, reproduzierbare Abweichungen zählen.</li>
<li>Den Gültigkeitsbereich eines Modells vergessen (z. B. Massenpunkt bei rotierenden Körpern, Newton bei $v\to c$).</li>
<li>Modell und Realität gleichsetzen: Ein Modell ist eine bewusste Vereinfachung.</li></ul>`
  },

  // ========================================================================
  // 1.2.1 PHYSIKALISCHE GRÖSSEN
  // ========================================================================
  {
    id: "ph1_groesse",
    title: "Physikalische Grösse: G = {G}·[G] und Dimensionsanalyse",
    category: "1.2 Physikalische Grössen",
    type: "definition",
    front: R`Woraus besteht eine <b>physikalische Grösse</b> $G$? Was bedeuten $\{G\}$ und $[G]$? Und wie kann man mit <b>Dimensionsüberlegungen</b> Formeln herleiten und überprüfen?`,
    back: R`Eine physikalische Grösse kennzeichnet Eigenschaften und Zustände (bzw. Zustandsänderungen) von Objekten. Sie ist immer das <b>Produkt</b> aus Zahlenwert und Einheit:
$$G = \{G\}\cdot[G] \qquad (1.1)$$
<ul><li>$\{G\}$: <b>Zahlenwert</b>, die quantitative Aussage: wie oft der Vergleichsmassstab passt.</li>
<li>$[G]$: <b>Einheit</b>, die qualitative Aussage: womit verglichen wird.</li></ul>
Beispiel: $\ell = 2{,}3\,\text{m}$, also $\{\ell\}=2{,}3$ und $[\ell]=\text{m}$ (Gl. 1.2–1.5).<br><br>
Weil multipliziert wird, steht die Einheit <b>nie im Plural</b> und kürzt sich wie ein algebraischer Faktor.<br><br>
<b>Dimensionsanalyse:</b> Beide Seiten einer physikalischen Gleichung müssen dieselbe Dimension haben. Das dient zur <i>Kontrolle</i> von Formeln und zur <i>Herleitung</i> bis auf dimensionslose Konstanten.`,
    meta: "Skript: Abschnitt 1.2.1, Gl. (1.1)–(1.5), S. 6; Dimensionsüberlegungen: Zusammenfassung 1.3",
    explanation: R`<b>Intuition:</b> Die Grösse $G$ selbst ist unabhängig von der gewählten Einheit, nur die Aufteilung in Zahl mal Einheit ändert sich. Wählt man eine 1000-mal kleinere Einheit, wird der Zahlenwert 1000-mal grösser: $\{G\}\propto 1/[G]$.<br><br>
<b>Rechnen mit Einheiten:</b> Einheiten werden behandelt wie Variablen: Sie multiplizieren, dividieren und kürzen sich. Addieren darf man nur Grössen gleicher Dimension: $2\,\text{m}+3\,\text{s}$ ist sinnlos.<br><br>
<b>Argumente von Funktionen:</b> In $\sin(x)$, $e^{x}$, $\ln(x)$ muss $x$ dimensionslos sein. Deshalb steht in einer Schwingung immer $\omega t$ (mit $[\omega]=1/\text{s}$) oder $x/\lambda$, in einer Dämpfung $e^{-t/\tau}$.<br><br>
<b>Zusammenhang:</b> Die Dimensionsanalyse ist das schnellste Werkzeug, um eine Endformel zu prüfen. Sie findet Faktorfehler wie $v^2$ statt $v$ oder $g$ statt $1/g$. Konstanten wie $2\pi$ oder $\tfrac12$ findet sie dagegen nicht.`,
    derivation: R`Beispiel: Schwingungsdauer $T$ eines Fadenpendels aus Dimensionen. Mögliche Einflussgrössen: Länge $\ell$, Masse $m$, Fallbeschleunigung $g$.
<ol class="fc-steps">
<li>$T = C\,\ell^{a}\,m^{b}\,g^{c}$<em>Ansatz als Potenzprodukt, $C$ ist eine dimensionslose Konstante.</em></li>
<li>$\text{s}^1 = \text{m}^{a}\,\text{kg}^{b}\,(\text{m}\,\text{s}^{-2})^{c} = \text{m}^{a+c}\,\text{kg}^{b}\,\text{s}^{-2c}$<em>Einheiten einsetzen und nach Basiseinheiten sortieren.</em></li>
<li>$\text{m}:\ a+c=0,\quad \text{kg}:\ b=0,\quad \text{s}:\ -2c=1$<em>Exponentenvergleich: Jede Basiseinheit muss links und rechts gleich oft vorkommen.</em></li>
<li>$c=-\tfrac12,\quad a=\tfrac12,\quad b=0$<em>Lineares Gleichungssystem lösen. Bemerkenswert: Die Masse fällt heraus, $T$ hängt nicht von $m$ ab.</em></li>
<li>$T = C\sqrt{\ell/g}$<em>Ergebnis bis auf $C$. Die volle Rechnung (Kap. 9) liefert $C=2\pi$ (für kleine Ausschläge).</em></li>
</ol>`,
    example: R`<b>Einheitenwechsel:</b> $v = 72\,\tfrac{\text{km}}{\text{h}} = 72\cdot\tfrac{1000\,\text{m}}{3600\,\text{s}} = 20\,\tfrac{\text{m}}{\text{s}}$. Die Geschwindigkeit $v$ bleibt dieselbe, nur $\{v\}$ wechselt von 72 auf 20, weil $[v]$ von km/h auf m/s wechselt.<br><br>
<b>Formelkontrolle:</b> Ist $s = v^2/(2a)$ (Bremsweg) dimensionsrichtig? $\frac{(\text{m/s})^2}{\text{m/s}^2} = \frac{\text{m}^2/\text{s}^2}{\text{m}/\text{s}^2}=\text{m}$ ✓.`,
    counterexample: R`<b>1. Dimensionsrichtig, aber falsch:</b> $T=\sqrt{\ell/g}$ hat die richtige Dimension, es fehlt aber der Faktor $2\pi$. Die Dimensionsanalyse erkennt dimensionslose Faktoren nie.<br>
<b>2. Grenze der Methode:</b> Gibt es eine zusätzliche dimensionslose Grösse (z. B. die Amplitude $\varphi_0$ des Pendels), so ist $T = \sqrt{\ell/g}\,f(\varphi_0)$ mit einer beliebigen Funktion $f$. Die Analyse allein kann $f$ nicht bestimmen.`,
    pitfalls: R`<ul><li>Grössen unterschiedlicher Dimension addieren oder vergleichen.</li>
<li>Einheiten beim Einsetzen weglassen und am Ende raten. Einheiten immer mitrechnen.</li>
<li>Prefixe falsch umrechnen: $1\,\text{cm}^2 = 10^{-4}\,\text{m}^2$, nicht $10^{-2}\,\text{m}^2$.</li>
<li>Dimensionsbehaftete Argumente in $\sin$, $\exp$, $\ln$.</li>
<li>Einheiten im Plural schreiben oder Einheit und Symbol vermischen (z. B. „m“ für Masse und Meter in derselben Rechnung).</li></ul>`
  },

  // ========================================================================
  // 1.2.2 EINHEITEN
  // ========================================================================
  {
    id: "ph1_si_einheiten",
    title: "SI-Einheiten der Mechanik: Sekunde, Meter, Kilogramm",
    category: "1.2 Physikalische Grössen",
    type: "definition",
    front: R`Wie sind im <b>SI-System</b> (MKS) die Sekunde, der Meter und das Kilogramm heute definiert, und warum hat man die alten Definitionen aufgegeben?`,
    back: R`In der Vorlesung wird konsequent in <b>SI-/MKS-Einheiten</b> (Meter, Kilogramm, Sekunde) gerechnet.
<ul><li><b>Sekunde:</b> $1\,\text{s}$ = Dauer von $9\,192\,631\,770$ Perioden der Strahlung eines $^{133}\text{Cs}$-Übergangs (Cäsium-Atomuhr). Früher wurde sie astronomisch aus der Tageslänge definiert.</li>
<li><b>Meter:</b> Strecke, die Licht im Vakuum in $\tfrac{1}{299\,792\,458}\,\text{s}$ zurücklegt. Damit ist $c = 299\,792\,458\,\text{m/s}$ <i>exakt</i>. Früher: der $40\,000\,000$-ste Teil des Meridians durch Paris, dann das Pt-Ir-Urmeter.</li>
<li><b>Kilogramm:</b> seit 20. Mai 2019 über das Plancksche Wirkungsquantum $h$ definiert. Früher: der Pt-Ir-Prototyp in Sèvres (BIPM).</li></ul>
Abgeleitete Einheiten: Geschwindigkeit in m/s, Beschleunigung in m/s², Kraft $1\,\text{N}=1\,\text{kg}\,\text{m}/\text{s}^2$.`,
    meta: "Skript: Abschnitt 1.2.2, S. 6–7 (inkl. Fussnoten 1 und 2)",
    explanation: R`<b>Leitidee der modernen Definitionen:</b> Einheiten sollen nicht an ein veränderliches Objekt (Erde, Metallstab, Metallzylinder) gebunden sein, sondern an <b>Naturkonstanten</b>, die überall und jederzeit gleich sind. Dann kann jedes ausreichend gute Labor die Einheit selbst realisieren.<br><br>
<b>Warum nicht mehr die Tageslänge?</b> Die Erde dreht sich nicht gleichförmig. Die Tageslänge schwankt saisonal um etwa $3\,\text{ms}$ (relativ etwa $3\cdot10^{-8}$; sogar das Laub der Bäume ändert das Trägheitsmoment der Erde und damit über die Drehimpulserhaltung die Tagesdauer). Atomuhren sind dagegen auf etwa $10^{-15}$ genau.<br><br>
<b>Zusammenhang:</b> Weil $c$ per Definition exakt ist, ist eine Längenmessung heute eigentlich eine <b>Zeitmessung</b> ($\ell = c\,t$). Die Mechanik braucht genau diese drei Basiseinheiten, alle anderen (N, J, W, Pa …) sind daraus abgeleitet.`,
    derivation: R`Wie aus den Basiseinheiten die abgeleiteten werden:
<ol class="fc-steps">
<li>$\ell = c\cdot t \;\Rightarrow\; 1\,\text{m} = c\cdot\frac{1}{299\,792\,458}\,\text{s}$<em>Mit dem exakt festgelegten $c$ ist der Meter durch die Sekunde bestimmt.</em></li>
<li>$[v] = \frac{[\ell]}{[t]} = \frac{\text{m}}{\text{s}},\qquad [a] = \frac{[v]}{[t]} = \frac{\text{m}}{\text{s}^2}$<em>Geschwindigkeit und Beschleunigung als Ableitungen nach der Zeit übernehmen den Faktor $1/\text{s}$ pro Ableitung.</em></li>
<li>$[F] = [m][a] = \text{kg}\,\frac{\text{m}}{\text{s}^2} =: \text{N}$<em>Aus Newton II ($F=ma$, Kap. 3) folgt die Krafteinheit Newton.</em></li>
<li>$[W] = [F][\ell] = \text{N}\,\text{m} = \text{kg}\,\frac{\text{m}^2}{\text{s}^2} =: \text{J}$<em>Arbeit = Kraft mal Weg (Kap. 4) ergibt Joule.</em></li>
</ol>`,
    example: R`<b>Licht-Nanosekunde:</b> In $1\,\text{ns}$ legt Licht $c\cdot 10^{-9}\,\text{s}\approx 0{,}30\,\text{m}$ zurück. Deshalb braucht GPS Uhren mit Nanosekunden-Genauigkeit: $1\,\text{ns}$ Zeitfehler bedeutet etwa $30\,\text{cm}$ Positionsfehler.<br><br>
<b>Umrechnung:</b> $1\,\text{N} = 1\,\text{kg}\cdot 1\,\text{m/s}^2$. Eine Tafel Schokolade ($100\,\text{g}$) wiegt auf der Erde etwa $0{,}1\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\approx 1\,\text{N}$.`,
    counterexample: R`<b>Instabile Referenzen:</b> Der Kilogramm-Prototyp und seine offiziellen Kopien drifteten über ein Jahrhundert um einige zehn Mikrogramm gegeneinander. Man konnte nicht einmal sagen, welcher Zylinder sich verändert hatte. Ein Massstab, der sich selbst verändert, taugt nicht als Definition; genau deshalb wechselte man 2019 zu $h$.`,
    pitfalls: R`<ul><li>Gramm statt Kilogramm einsetzen: Die SI-Basiseinheit der Masse ist <b>kg</b>.</li>
<li>km/h ohne Umrechnung in Formeln mit m und s verwenden (Faktor $3{,}6$).</li>
<li>Glauben, $c$ sei „gemessen“: Seit 1983 ist $c$ <i>definiert</i>, gemessen wird die Länge.</li></ul>`
  },
  {
    id: "ph1_winkel",
    title: "Ebener Winkel im Bogenmass und Kleinwinkelnäherung",
    category: "1.2 Physikalische Grössen",
    type: "definition",
    front: R`Wie ist der <b>ebene Winkel</b> im Bogenmass definiert? Wie hängen rad und Grad zusammen, und welche <b>Näherungen für kleine Winkel</b> gelten (mit Abschätzung)?`,
    back: R`<b>Definition:</b> Winkel = Bogenlänge durch Radius:
$$\varphi = \frac{S}{R},\qquad \text{Einheit: } 1\,\text{rad} \;(\text{dimensionslos: m/m})$$
<b>Umrechnung (1.6):</b>
$$2\pi\,\text{rad} = 360^\circ,\qquad 1^\circ \approx 0{,}01745\,\text{rad},\qquad 1\,\text{rad} = \frac{180^\circ}{\pi}\approx 57{,}296^\circ$$
<b>Kleine Winkel</b> (Abb. 1.4, $H$ = Tangentenabschnitt, $h$ = Lot auf den Radius):
$$\varphi \approx \frac{H}{R} = \tan\varphi \approx \sin\varphi = \frac{h}{R},\qquad \frac{h}{R}\le \varphi \le \frac{H}{R}$$`,
    meta: "Skript: Abschnitt 1.2.2, Gl. (1.6), Abb. 1.4, S. 7",
    explanation: R`<b>Intuition:</b> Im Bogenmass misst der Winkel direkt, „wie viele Radien“ man auf dem Kreis entlangläuft. Deshalb gilt ohne Umrechnungsfaktor $S = R\varphi$ und für die Kreisbewegung $v = R\omega$ (Kap. 2).<br><br>
<b>Warum rad und nicht Grad?</b> Nur im Bogenmass gilt $\frac{d}{d\varphi}\sin\varphi=\cos\varphi$ und $\sin\varphi\approx\varphi$. In Grad würden überall Faktoren $\pi/180$ auftauchen.<br><br>
<b>Geometrisch (Abb. 1.4):</b> Der Bogen $S$ liegt zwischen dem Lot $h=R\sin\varphi$ (kürzer) und dem Tangentenabschnitt $H=R\tan\varphi$ (länger). Daraus folgt $\sin\varphi\le\varphi\le\tan\varphi$ für $0\le\varphi<\pi/2$. Für $\varphi\to0$ rücken alle drei zusammen.<br><br>
<b>Zusammenhang:</b> Die Kleinwinkelnäherung macht das Fadenpendel zum harmonischen Oszillator ($\sin\varphi\approx\varphi$, Kap. 9) und begegnet in der Optik und bei Gleichgewichtsbetrachtungen.`,
    derivation: R`Wie gut ist $\sin\varphi\approx\tan\varphi\approx\varphi$? Taylorentwicklung um $\varphi=0$ (Anhang 11.1.2):
<ol class="fc-steps">
<li>$\sin\varphi = \varphi - \frac{\varphi^3}{6} + \mathcal{O}(\varphi^5)$<em>Ungerade Funktion, nur ungerade Potenzen; Koeffizient aus $\sin'''(0) = -1$, geteilt durch $3!$.</em></li>
<li>$\tan\varphi = \varphi + \frac{\varphi^3}{3} + \mathcal{O}(\varphi^5)$<em>Ebenfalls ungerade, die Korrektur hat aber das entgegengesetzte Vorzeichen: $\tan$ liegt über $\varphi$.</em></li>
<li>$\frac{\varphi-\sin\varphi}{\varphi}\approx\frac{\varphi^2}{6},\qquad \frac{\tan\varphi-\varphi}{\varphi}\approx\frac{\varphi^2}{3}$<em>Relativer Fehler der Näherung: wächst <b>quadratisch</b> mit dem Winkel.</em></li>
<li>$\frac{\varphi^2}{6} < 1\,\% \iff \varphi < 0{,}245\,\text{rad}\approx 14^\circ$<em>Faustregel: Bis etwa $14^\circ$ ist $\sin\varphi\approx\varphi$ auf 1 % genau, $\tan\varphi\approx\varphi$ auf 1 % nur bis etwa $10^\circ$.</em></li>
</ol>`,
    example: R`$\varphi = 10^\circ = 0{,}1745\,\text{rad}$: $\sin\varphi = 0{,}1736$ (Abweichung $0{,}5\,\%$), $\tan\varphi = 0{,}1763$ ($1{,}0\,\%$). Das passt zu $\varphi^2/6 = 0{,}51\,\%$ und $\varphi^2/3 = 1{,}0\,\%$.<br><br>
<b>Winkeldurchmesser des Mondes:</b> $D\approx 3{,}5\cdot10^{6}\,\text{m}$, Abstand $R\approx 3{,}8\cdot10^{8}\,\text{m}$, also $\varphi\approx D/R\approx 9{,}2\cdot10^{-3}\,\text{rad}\approx 0{,}53^\circ$. Bei so kleinen Winkeln ist die Näherung praktisch exakt.`,
    counterexample: R`<b>Grosse Winkel:</b> Bei $\varphi = 30^\circ = 0{,}524\,\text{rad}$ ist $\sin\varphi = 0{,}5$, also $4{,}5\,\%$ Abweichung. Bei $60^\circ$: $\sin\varphi = 0{,}866$ gegen $\varphi = 1{,}047$, also $17\,\%$ zu gross. Ein mit $60^\circ$ ausgelenktes Pendel ist deshalb deutlich <i>nicht</i> harmonisch: Seine Periode ist etwa $7\,\%$ länger als $2\pi\sqrt{\ell/g}$.`,
    pitfalls: R`<ul><li>Die Näherung $\sin\varphi\approx\varphi$ mit $\varphi$ in <b>Grad</b> anwenden: $\sin 10^\circ\neq 10$!</li>
<li>Den Taschenrechner im falschen Modus (DEG/RAD) benutzen.</li>
<li>$\omega$ (rad/s) und Frequenz $\nu$ (Hz) verwechseln: $\omega = 2\pi\nu$.</li>
<li>Die Näherung ungeprüft bei grossen Winkeln einsetzen. Der Fehler wächst wie $\varphi^2$.</li></ul>`
  },
  {
    id: "ph1_groessenordnungen",
    title: "Zeit- und Längenskalen, Grössenordnungen und Abschätzungen",
    category: "1.2 Physikalische Grössen",
    type: "konzept",
    front: R`Über wie viele <b>Zehnerpotenzen</b> erstrecken sich die Zeit- und Längenskalen der Natur? Nenne typische Werte und erkläre, wie man mit <b>Grössenordnungen</b> schnell abschätzt.`,
    back: R`<b>Zeiten</b> (Skript S. 7–8):
<ul><li>Licht durchquert ein Proton: $10^{-24}\,\text{s}$; kürzeste direkt messbare Zeit: $10^{-20}\,\text{s}$</li>
<li>Lichtschwingung: $10^{-15}\,\text{s}$; Schallschwingung: $10^{-3}\,\text{s}$</li>
<li>Tag: $8{,}64\cdot10^{4}\,\text{s}$; Jahr: $\approx\pi\cdot10^{7}\,\text{s}$</li>
<li>Alter der Erde: $1{,}4\cdot10^{17}\,\text{s}$; Alter des Universums: $4\cdot10^{17}\,\text{s}$; Lebensdauer des Protons: $>5\cdot10^{32}\,\text{s}$</li></ul>
<b>Längen</b> (etwa 40 Zehnerpotenzen):
<ul><li>Proton $10^{-15}\,\text{m}$, Atom $10^{-10}\,\text{m}$, sichtbares Licht $(4\text{–}7)\cdot10^{-7}\,\text{m}$</li>
<li>Mensch $\sim1{,}7\,\text{m}$, Erde $1{,}3\cdot10^{7}\,\text{m}$, Sonnensystem $10^{13}\,\text{m}$</li>
<li>Galaxie $10^{21}\,\text{m}$, Universum $10^{26}\,\text{m}$</li></ul>
<b>Messgenauigkeit:</b> Quarzuhr relativ $\approx10^{-7}$, Wasserstoffmaser $\approx10^{-15}$ (1 s in $3\cdot10^{7}$ Jahren).`,
    meta: "Skript: Abschnitt 1.2.2, S. 7–8",
    explanation: R`<b>Intuition:</b> Physik umfasst Phänomene, deren Skalen sich um Faktoren wie $10^{40}$ unterscheiden. Deshalb denkt man in <b>Grössenordnungen</b> (Exponenten) statt in genauen Ziffern. Für eine erste Einschätzung zählt oft nur, ob etwas $10^{-3}$ oder $10^{3}$ ist.<br><br>
<b>Abschätzen („Fermi-Rechnung“):</b> Man zerlegt eine unbekannte Grösse in Faktoren, deren Grössenordnung man kennt, multipliziert und rundet grob. Die Fehler der Faktoren mitteln sich oft teilweise heraus.<br><br>
<b>Relative Genauigkeit:</b> Entscheidend ist der Fehler <i>im Verhältnis</i> zur Grösse: $\Delta T/T$. Eine Quarzuhr mit „wenigen Sekunden pro Jahr“ hat $\Delta T/T\approx 3\,\text{s}/(3\cdot10^7\,\text{s})\approx 10^{-7}$.<br><br>
<b>Zusammenhang:</b> Kenntnis typischer Grössenordnungen hilft, Endergebnisse auf Plausibilität zu prüfen: Eine Fallgeschwindigkeit von $10^{5}\,\text{m/s}$ aus 10 m Höhe ist offensichtlich falsch.`,
    derivation: R`Zwei nützliche Faustwerte, Schritt für Schritt:
<ol class="fc-steps">
<li>$1\,\text{Tag} = 24\cdot 3600\,\text{s} = 86\,400\,\text{s} = 8{,}64\cdot 10^{4}\,\text{s}$<em>Stunden mal Sekunden pro Stunde.</em></li>
<li>$1\,\text{Jahr} = 365{,}25\cdot 8{,}64\cdot10^{4}\,\text{s} = 3{,}156\cdot10^{7}\,\text{s}$<em>Mittleres Kalenderjahr mit Schaltjahren.</em></li>
<li>$\pi\cdot10^{7}\,\text{s} = 3{,}142\cdot10^{7}\,\text{s}\;\Rightarrow\;$ Abweichung $0{,}45\,\%$<em>Daher die Merkregel „ein Jahr ≈ π·10⁷ s“.</em></li>
<li>$\frac{\Delta T}{T} = \frac{1\,\text{s}}{3\cdot10^{7}\cdot\pi\cdot10^{7}\,\text{s}}\approx 10^{-15}$<em>Relative Genauigkeit des Wasserstoffmasers (1 s Fehler in 3·10⁷ Jahren).</em></li>
</ol>`,
    example: R`<b>Herzschläge in einem Leben:</b> $80\,\text{a}\cdot\pi\cdot10^{7}\,\tfrac{\text{s}}{\text{a}}\cdot 1{,}2\,\tfrac{1}{\text{s}}\approx 3\cdot10^{9}$. Die Grössenordnung „einige Milliarden“ stimmt, auch wenn jeder Faktor nur grob bekannt ist.<br><br>
<b>Alter des Universums:</b> $4\cdot10^{17}\,\text{s}\,/\,(\pi\cdot10^{7}\,\text{s/a})\approx 1{,}3\cdot10^{10}\,\text{a}$, also etwa 13 Milliarden Jahre.`,
    counterexample: R`<b>Scheingenauigkeit:</b> „Durchmesser des Universums $= 10^{26}\,\text{m}$“ ist eine Grössenordnungsangabe, keine präzise Zahl. Daraus etwa „$1{,}000\cdot10^{26}\,\text{m}$“ zu machen, täuscht eine Genauigkeit vor, die nicht existiert. Die Zahl der gültigen Ziffern muss zur Genauigkeit passen.`,
    pitfalls: R`<ul><li>Zehnerpotenzen beim Multiplizieren/Dividieren falsch addieren/subtrahieren.</li>
<li>Absolute und relative Genauigkeit verwechseln.</li>
<li>Bei Abschätzungen zu viele Nachkommastellen angeben.</li>
<li>Ergebnisse nicht auf Plausibilität prüfen („Ist diese Grössenordnung realistisch?“).</li></ul>`
  },

  // ========================================================================
  // ERGÄNZUNGEN: typische Prüfungsaufgaben und Brücken zu Physik II
  // ========================================================================
  {
    id: "ph1_aufgabenstrategie",
    title: "Strategie für Prüfungsaufgaben: vom Problem zur kontrollierten Lösung",
    category: "1.2 Physikalische Grössen",
    type: "konzept",
    front: R`Nach welchem Schema löst man eine Physik-Prüfungsaufgabe systematisch? Welche <b>Kontrollen</b> (Einheiten, Grenzfälle, Grössenordnung, Symmetrie) sollte man am Ende immer durchführen? Zeige sie an $a = g\frac{m_1-m_2}{m_1+m_2}$ (Atwood).`,
    back: R`<b>Lösungsschema:</b>
<ol><li><b>Situation skizzieren</b>, gegebene und gesuchte Grössen notieren (mit Einheiten).</li>
<li><b>Modell wählen:</b> Massenpunkt oder starrer Körper? Reibung? Kleinwinkelnäherung? Ideales Gas? Annahmen hinschreiben.</li>
<li><b>Physikalisches Prinzip wählen:</b> Newton II (Kräfte, Freikörperbild), Energiesatz, Impulssatz, Drehimpulssatz, Hauptsätze (vgl. Karte „Welcher Erhaltungssatz wann?“).</li>
<li><b>Koordinatensystem</b> geschickt legen (z. B. entlang der schiefen Ebene), Vorzeichen festlegen.</li>
<li><b>Gleichungen aufstellen</b>, Unbekannte zählen = Zahl der Gleichungen (Zwangsbedingungen wie Seillänge oder Rollbedingung nicht vergessen).</li>
<li><b>Allgemein (symbolisch) lösen</b>, erst am Schluss Zahlen einsetzen.</li>
<li><b>Kontrollieren:</b> Einheit, Grenzfälle, Grössenordnung, Symmetrie, Vorzeichen.</li></ol>
<b>Beispiel Atwood:</b> Einheit von $g\frac{m_1-m_2}{m_1+m_2}$: $\text{m/s}^2$ ✓. $m_2 = 0$: $a = g$ (freier Fall) ✓. $m_1 = m_2$: $a = 0$ ✓. $m_1\leftrightarrow m_2$: Vorzeichen kehrt sich um ✓. $|a|\le g$ ✓.`,
    meta: "Ergänzung (Prüfungsstrategie); baut auf Abschnitt 1.2.1 (Dimensionsanalyse) und 3.8.1–3.8.2 (Lösungsrezept) auf",
    explanation: R`<b>Intuition:</b> Die meisten Punkte gehen in Prüfungen nicht durch fehlendes Wissen verloren, sondern durch falsch gewählte Prinzipien, vergessene Kräfte, Vorzeichenfehler und Zahlen, die zu früh eingesetzt werden. Ein festes Schema verhindert das.<br><br>
<b>Warum symbolisch?</b> Eine Formel lässt sich auf Einheiten und Grenzfälle prüfen, eine Zahl nicht. Ausserdem sieht man Abhängigkeiten (z. B. dass sich die Masse herauskürzt) und bekommt Teilpunkte für den Lösungsweg.<br><br>
<b>Grenzfälle als Detektor:</b> Jede physikalische Formel muss in bekannten Spezialfällen das Bekannte liefern: ohne Reibung, Masse null, Winkel $0^\circ$ oder $90^\circ$, $t\to\infty$ (stationärer Zustand). Ein falsches Vorzeichen oder ein vertauschter Bruch fällt hier fast immer auf.<br><br>
<b>Grössenordnung:</b> Ergebnis mit Alltagswissen vergleichen: Ein Auto beschleunigt mit einigen $\text{m/s}^2$, nicht mit $10^4$; ein Mensch leistet etwa $100\,\text{W}$ dauerhaft.<br><br>
<b>Zusammenhang:</b> Dimensionsanalyse (1.2.1), Lösungsrezept für Bewegungsaufgaben (3.8), Taylor-Näherungen (11.1.2) für Grenzfälle.`,
    derivation: R`Kontrolle der Pendelformel durch Dimensionsanalyse (ohne die DGL zu lösen):
<ol class="fc-steps">
<li>Mögliche Grössen: $\ell$ [m], $m$ [kg], $g$ [m/s²]<em>Wovon kann die Periode abhängen?</em></li>
<li>$T = C\,\ell^\alpha m^\beta g^\gamma$<em>Potenzansatz.</em></li>
<li>$[\text s] = [\text m]^{\alpha+\gamma}[\text{kg}]^\beta[\text s]^{-2\gamma}$<em>Einheiten vergleichen.</em></li>
<li>$\beta = 0$, $\gamma = -\tfrac12$, $\alpha = \tfrac12$<em>Exponenten bestimmen.</em></li>
<li>$T = C\sqrt{\ell/g}$, die Masse kann gar nicht eingehen<em>Bis auf die Zahl $C = 2\pi$ ist das Ergebnis erzwungen.</em></li>
</ol>`,
    example: R`<b>Fehler entlarvt:</b> Jemand erhält für die Wurfweite $w = \frac{v_0\sin2\alpha}{g}$. Einheit: $\frac{\text{m/s}}{\text{m/s}^2} = \text{s}$ – falsch. Richtig: $w = \frac{v_0^2\sin2\alpha}{g}$ (m) ✓, Grenzfälle $\alpha = 0$ und $90^\circ$: $w = 0$ ✓.<br>
<b>Grössenordnung:</b> Ergebnis „Bremsweg $3\,\text{km}$ bei $50\,\text{km/h}$“ ist offensichtlich falsch (realistisch etwa $15\,\text{m}$).`,
    counterexample: R`<b>Einheit stimmt, Ergebnis trotzdem falsch:</b> $T = \sqrt{\ell/g}$ hat die richtige Einheit, aber den Faktor $2\pi$ vergessen. Und $a = g\frac{m_1-m_2}{m_1}$ besteht den Grenzfall $m_2 = 0$, scheitert aber an $|a|\le g$ für $m_1\ll m_2$. Kontrollen finden viele, aber nicht alle Fehler – sie ersetzen keine saubere Herleitung.`,
    pitfalls: R`<ul><li>Zahlen sofort einsetzen und so Einheitenkontrolle und Teilpunkte verlieren.</li>
<li>Weniger Gleichungen als Unbekannte aufstellen (Zwangsbedingung vergessen).</li>
<li>Annahmen (keine Reibung, kleine Winkel) nicht nennen.</li>
<li>Vorzeichenkonvention unterwegs wechseln.</li></ul>`
  }
];
})();
