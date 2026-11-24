/* ==========================================================================
   PHYSIK I – KAPITEL 3: Dynamik des Massenpunktes
   Masse, Impuls, Impulserhaltung, Newton I–III, Kraftstoss, Rakete, Kontaktkräfte,
   Reibung, Kraftfelder, Gravitation und Gewicht, beschleunigte Bezugssysteme
   Skript Physik I – Prof. K. Ensslin, ETH Zürich, HS 2025
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_KAPITEL_3 = [
  // ========================================================================
  // 3.1 DIE MASSE
  // ========================================================================
  {
    id: "ph3_masse",
    title: "Masse vs. Gewicht und die Definition der Masse durch den Rückstossversuch",
    category: "3.1 Die Masse",
    type: "definition",
    front: R`Was ist der Unterschied zwischen <b>Masse</b> und <b>Gewicht</b>? Wie wird die Masse mit dem <b>Rückstossversuch</b> operational definiert?`,
    back: R`<ul><li><b>Masse:</b> skalare Eigenschaft eines Körpers („wie viel Stoff“), überall gleich, Einheit kg.</li>
<li><b>Gewicht:</b> eine <b>Kraft</b> (Vektor, Einheit N), die ein Körper z. B. auf den Boden ausübt; hängt von der Situation ab (in der Umlaufbahn null).</li></ul>
<b>Rückstossversuch</b> (Abb. 3.1): Zwei Wagen A, B auf einer reibungsfreien Luftkissenbahn, eine Feder dazwischen, durch einen Faden zusammengehalten. Faden durchtrennen: Die Wagen fahren mit $v_A$ und $v_B$ auseinander. Experimentell gilt
$$\frac{m_A}{m_B} = \frac{v_B}{v_A}\qquad(3.1)$$
Man wählt $m_B$ als Normmasse ($[m] = 1\,\text{kg}$, 3.2) und definiert
$$m_A = m_B\,\frac{v_B}{v_A}\qquad(3.3)$$
Das Verhältnis hängt weder vom Gewicht (geht auch im Weltraum) noch von der Feder ab, nur von den Wagen. Massen reichen über etwa 80 Zehnerpotenzen (Elektron $9{,}1\cdot10^{-31}\,\text{kg}$ bis Universum $\approx10^{52}\,\text{kg}$).`,
    meta: "Skript: Abschnitt 3.1.1, Gl. (3.1)–(3.4), Abb. 3.1, Tab. 3.1, S. 31–34",
    explanation: R`<b>Intuition:</b> Masse misst, wie stark sich ein Körper einer Änderung seines Bewegungszustands widersetzt (Trägheit). Beim Rückstoss stossen sich beide Wagen gleich stark ab. Der „trägere“ Wagen wird weniger schnell: $v\propto1/m$.<br><br>
<b>Warum unabhängig von der Feder?</b> Eine stärkere Feder macht beide Geschwindigkeiten im gleichen Verhältnis grösser. Das Verhältnis $v_B/v_A$ bleibt, also ist es eine Eigenschaft der Wagen allein.<br><br>
<b>Masse vs. Gewicht im Alltag:</b> „Ich wiege 60 kg“ meint die Masse. Das Gewicht ist $60\,\text{kg}\cdot9{,}81\,\text{m/s}^2\approx589\,\text{N}$. Eine Astronautin in der Umlaufbahn ist <i>gewichtslos</i> (schwerelos), aber nicht <i>masselos</i>.<br><br>
<b>Zusammenhang:</b> Formel (3.1) umgeschrieben ergibt $m_Av_A = m_Bv_B$. Daraus entsteht unmittelbar der Impulsbegriff und die Impulserhaltung (3.2–3.3).`,
    derivation: R`Operationale Definition Schritt für Schritt:
<ol class="fc-steps">
<li>Vorher: beide Wagen in Ruhe<em>Anfangszustand mit gespannter Feder; das System ist isoliert (Luftkissen kompensiert die Schwerkraft, keine Reibung).</em></li>
<li>Messung: $v_A$, $v_B$ nach dem Durchtrennen<em>Die Wagen fahren in entgegengesetzte Richtungen; man misst die Beträge.</em></li>
<li>Variation der Feder: $v_A\to\lambda v_A$, $v_B\to\lambda v_B$<em>Experimentell skalieren beide gleich; das Verhältnis $v_B/v_A$ ist eine reine Wageneigenschaft.</em></li>
<li>$m_A := m_B\,\dfrac{v_B}{v_A}$ mit $m_B = 1\,\text{kg}$<em>Definition relativ zu einer Normmasse (3.3, 3.4).</em></li>
<li>Konsistenz: $\dfrac{m_A}{m_C} = \dfrac{m_A}{m_B}\cdot\dfrac{m_B}{m_C}$<em>Ein direkter Versuch A gegen C bestätigt das Produkt der Einzelverhältnisse. Erst diese Transitivität macht $m$ zu einer sinnvollen Zahl pro Körper.</em></li>
</ol>`,
    example: R`Wagen A fährt nach dem Rückstoss mit $0{,}20\,\text{m/s}$ weg, der Normwagen ($1\,\text{kg}$) mit $0{,}50\,\text{m/s}$. Also $m_A = 1\,\text{kg}\cdot\frac{0{,}50}{0{,}20} = 2{,}5\,\text{kg}$.<br><br>
<b>Astronautin:</b> Masse 60 kg auf der Erde, auf dem Mond und in der ISS. Das Gewicht ist 589 N auf der Erde, etwa 97 N auf dem Mond ($g/6$) und 0 N „gefühlt“ in der ISS, obwohl dort die Gravitation noch etwa 89 % ihres Erdwerts hat (3.10.3.2).`,
    counterexample: R`<b>Personenwaage auf dem Mond:</b> Eine Federwaage zeigt dort etwa ein Sechstel an. Sie misst das <i>Gewicht</i> (die Normalkraft) und rechnet es mit $g_\text{Erde}$ in „kg“ um. Die Masse hat sich nicht geändert. Eine Balkenwaage (Vergleich mit Normmassen) würde dagegen auch auf dem Mond die richtige Masse zeigen.`,
    pitfalls: R`<ul><li>Masse (kg, Skalar) und Gewicht (N, Vektor) gleichsetzen.</li>
<li>„Schwerelos“ als „keine Gravitation“ deuten.</li>
<li>Glauben, die Feder bestimme die Masse; sie bestimmt nur die Geschwindigkeiten, nicht deren Verhältnis.</li>
<li>Die Richtungen vergessen: $v_A$ und $v_B$ sind in (3.1) Beträge, die Geschwindigkeitsvektoren sind entgegengesetzt.</li></ul>`
  },
  {
    id: "ph3_traege_schwere_masse",
    title: "Träge und schwere Masse, Eötvös und das Äquivalenzprinzip",
    category: "3.1 Die Masse",
    type: "konzept",
    front: R`Was ist der Unterschied zwischen <b>träger</b> und <b>schwerer Masse</b>? Wie genau weiss man, dass sie gleich sind, und welche Konsequenzen hat das?`,
    back: R`<ul><li><b>Träge Masse</b> $m_t$: die Grösse, die man im Rückstossversuch misst; sie erscheint in $\vec F = m_t\,\vec a$ und parametrisiert den Widerstand gegen Beschleunigung.</li>
<li><b>Schwere Masse</b> $m_s$: die Grösse, die man mit der Waage misst; sie bestimmt die Gravitationskraft $\vec F_G = m_s\vec g$ (Kopplung an das Schwerefeld).</li></ul>
Experiment: Körper mit gleicher träger Masse erfahren gleiche Gravitationskräfte.
<ul><li><b>Eötvös</b> (1909): Gleichheit auf 1 Teil in $10^{9}$</li>
<li><b>Dicke</b>: auf 1 Teil in $10^{11}$</li></ul>
Die Mechanik erklärt die Gleichheit nicht. Erst die Allgemeine Relativitätstheorie begründet sie über das <b>Äquivalenzprinzip</b>: Man kann nicht feststellen, ob man sich in einem Gravitationsfeld oder in einem beschleunigten Bezugssystem befindet.`,
    meta: "Skript: Abschnitt 3.1.2, Abb. 3.2, S. 34–35; vgl. 3.10.3.1 (Gl. 3.118–3.119)",
    explanation: R`<b>Intuition:</b> Es ist <i>keineswegs offensichtlich</i>, dass die Eigenschaft „schwer“ (wie stark die Erde zieht) und die Eigenschaft „träge“ (wie schwer zu beschleunigen) dieselbe Zahl sind. Bei elektrischen Kräften ist die Kopplungsgrösse (Ladung $q$) ja auch völlig unabhängig von der Trägheit $m$.<br><br>
<b>Folge: universeller freier Fall.</b> Aus $m_t a = m_s g$ folgt $a = (m_s/m_t)\,g = g$ für alle Körper. Deshalb kürzt sich in jeder Gravitationsaufgabe die Masse heraus, deshalb sind Bahnen im Schwerefeld unabhängig von der Masse (Planeten, Würfe, Satelliten).<br><br>
<b>Äquivalenzprinzip konkret:</b> In einem geschlossenen Raum, der mit $g$ nach oben beschleunigt, verhält sich alles wie im Schwerefeld der Erde. In einem frei fallenden Aufzug ist alles schwerelos, als gäbe es kein Feld (3.11.4).<br><br>
<b>Zusammenhang:</b> Scheinkräfte sind deshalb immer $\propto m$ (3.11.3), genau wie die Gravitationskraft. Das ist der Grund, warum man die Gravitation lokal „wegtransformieren“ kann.`,
    derivation: R`Warum ein Unterschied messbar wäre:
<ol class="fc-steps">
<li>$m_t\,\vec a = m_s\,\vec g$<em>Newton II mit träger Masse links, Gravitationskraft mit schwerer Masse rechts.</em></li>
<li>$\vec a = \dfrac{m_s}{m_t}\,\vec g$<em>Nach der Beschleunigung auflösen.</em></li>
<li>$\eta := \dfrac{|a_1-a_2|}{\tfrac12(a_1+a_2)} = \left|\dfrac{m_{s1}}{m_{t1}}-\dfrac{m_{s2}}{m_{t2}}\right|\Big/\dots$<em>Hätten zwei Materialien verschiedene Verhältnisse $m_s/m_t$, fielen sie verschieden schnell. Die relative Differenz $\eta$ ist die Messgrösse.</em></li>
<li>Eötvös: $\eta\lt 10^{-9}$, Dicke: $\eta\lt 10^{-11}$<em>Torsionswaagen vergleichen die Gravitations- und die Trägheitswirkung (z. B. der Erdrotation) auf zwei verschiedene Materialien; es wurde nie ein Unterschied gefunden.</em></li>
<li>Konvention: $m_s = m_t =: m$<em>Mit passender Einheitenwahl setzt man die Verhältnisse exakt gleich 1 und spricht nur noch von „der Masse“.</em></li>
</ol>`,
    example: R`Hammer und Feder auf dem Mond (Apollo 15) fallen gleich schnell. Ohne Luftwiderstand gilt $a = g_\text{Mond}\approx1{,}6\,\text{m/s}^2$ für beide.<br><br>
<b>Grössenordnung der Präzision:</b> $\eta\lt 10^{-11}$ bedeutet bei $g = 9{,}81\,\text{m/s}^2$, dass sich die Fallbeschleunigungen zweier Materialien um weniger als $10^{-10}\,\text{m/s}^2$ unterscheiden.`,
    counterexample: R`<b>Elektrische Kraft:</b> Im elektrischen Feld $\vec E$ ist $\vec a = (q/m)\,\vec E$. Elektron und Proton haben gleich grosse Ladung, aber $m_p/m_e\approx1836$. Das Elektron wird also fast 2000-mal stärker beschleunigt. Hier gibt es <i>kein</i> Äquivalenzprinzip: Die „Kopplungskonstante“ $q$ hat nichts mit der Trägheit zu tun.`,
    pitfalls: R`<ul><li>Glauben, die Gleichheit von träger und schwerer Masse sei logisch zwingend. Sie ist ein experimenteller Befund.</li>
<li>Annehmen, schwere Körper fielen schneller.</li>
<li>Vergessen, dass sich $m$ nur in <b>Gravitations</b>aufgaben kürzt, nicht bei anderen Kräften (Reibung mit $\mu$ ist eine Ausnahme, weil $F_N\propto m$).</li></ul>`
  },

  // ========================================================================
  // 3.2–3.3 IMPULS UND IMPULSERHALTUNG
  // ========================================================================
  {
    id: "ph3_impuls",
    title: "Der lineare Impuls p = m v",
    category: "3.2 Der Impuls",
    type: "definition",
    front: R`Wie wird der <b>lineare Impuls</b> aus dem Rückstossversuch motiviert und definiert? Was bedeutet „$\vec p_\text{tot}(\text{vorher}) = \vec p_\text{tot}(\text{nachher})$“ im Rückstossversuch?`,
    back: R`Aus $\frac{m_A}{m_B} = \frac{v_B}{v_A}$ folgt $m_Av_A = m_Bv_B$ (3.5). Da sich die Wagen in entgegengesetzte Richtungen bewegen, gilt vektoriell
$$m_A\vec v_A = -m_B\vec v_B\quad\Longleftrightarrow\quad m_A\vec v_A + m_B\vec v_B = \vec 0\qquad(3.6,\,3.7)$$
<b>Definition:</b> Der lineare Impuls eines Teilchens ist
$$\vec p = m\,\vec v\qquad(3.8)$$
ein <b>Vektor</b> (Skalar mal Vektor), Einheit $\text{kg}\,\text{m/s}$. Mit dem <b>Gesamtimpuls</b> $\vec p_\text{tot} = \vec p_A + \vec p_B$ (3.12): Vorher ruhen beide ($\vec p_\text{tot} = \vec 0$, 3.10–3.11), nachher ist ebenfalls $\vec p_\text{tot} = \vec 0$ (3.9). Also
$$\vec p_\text{tot}(\text{vorher}) = \vec p_\text{tot}(\text{nachher})\qquad(3.13)$$`,
    meta: "Skript: Abschnitt 3.2.1, Gl. (3.5)–(3.13), S. 36–37",
    explanation: R`<b>Intuition:</b> Der Impuls ist die „Bewegungsmenge“ eines Körpers: Er kombiniert, wie viel Masse sich wie schnell und in welche Richtung bewegt. Ein langsamer Lastwagen und eine schnelle Gewehrkugel können vergleichbare Impulse haben.<br><br>
<b>Warum genau $m\vec v$?</b> Man sucht eine Grösse, die beim Durchtrennen des Fadens <i>unverändert</i> bleibt. $m_A\vec v_A + m_B\vec v_B$ leistet das, und jeder Summand gehört nur zu einem Wagen, ist also eine Eigenschaft des einzelnen Körpers.<br><br>
<b>Abhängigkeiten:</b> $p\propto m$ und $p\propto v$ (linear), im Gegensatz zur kinetischen Energie $E = \tfrac12mv^2 = \frac{p^2}{2m}$ (Kap. 4), die quadratisch in $v$ ist.<br><br>
<b>Zusammenhang:</b> Newton II lautet allgemein $\vec F = d\vec p/dt$ (3.4). Der Impuls ist also die Grösse, deren Änderung eine Kraft ist. Sein Analogon bei Drehungen ist der Drehimpuls $\vec L = \vec r\times\vec p$ (Kap. 5).`,
    derivation: R`Vom Messergebnis zur Erhaltungsgrösse:
<ol class="fc-steps">
<li>$\dfrac{m_A}{m_B} = \dfrac{v_B}{v_A}\;\Rightarrow\;m_A v_A = m_B v_B$<em>Kreuzweise multiplizieren (Beträge).</em></li>
<li>$\vec v_A\uparrow\downarrow\vec v_B\;\Rightarrow\;m_A\vec v_A = -m_B\vec v_B$<em>Die Wagen fahren in entgegengesetzte Richtungen; mit Vektoren kommt das Minuszeichen. Die Vektorform muss in jedem Bezugssystem gelten.</em></li>
<li>$m_A\vec v_A + m_B\vec v_B = \vec 0 = m_A\vec v_A^{\,*} + m_B\vec v_B^{\,*}$<em>Nachher ist die Summe null, vorher auch (beide ruhen, $\vec v^{\,*} = \vec 0$).</em></li>
<li>$\vec p := m\vec v$, $\vec p_\text{tot} := \vec p_A + \vec p_B = \text{const}$<em>Die Grösse $m\vec v$ jedes Körpers summiert sich zu einer Grösse, die der Vorgang nicht ändert (3.8, 3.12, 3.13).</em></li>
</ol>`,
    example: R`Auto: $m = 1000\,\text{kg}$, $v = 20\,\text{m/s}$, also $p = 2\cdot10^{4}\,\text{kg}\,\text{m/s}$.<br>
Gewehrkugel: $m = 10\,\text{g}$, $v = 400\,\text{m/s}$, also $p = 4\,\text{kg}\,\text{m/s}$.<br>
Rückstoss des Gewehrs ($4\,\text{kg}$): Gesamtimpuls null, also $v_\text{Gewehr} = -\frac{4\,\text{kg m/s}}{4\,\text{kg}} = -1\,\text{m/s}$.`,
    counterexample: R`<b>Gleicher Impuls, verschiedene Energie:</b> Die Kugel (10 g, 400 m/s) und ein Ball (4 kg, 1 m/s) haben beide $p = 4\,\text{kg m/s}$. Die Kugel trägt aber $E = \frac{p^2}{2m} = 800\,\text{J}$, der Ball nur $2\,\text{J}$. Der Impuls allein sagt nichts über die Zerstörungskraft aus.`,
    pitfalls: R`<ul><li>Den Impuls als Skalar behandeln; Richtungen (Vorzeichen) entscheiden alles.</li>
<li>Impuls und kinetische Energie verwechseln ($p\propto v$, $E\propto v^2$).</li>
<li>Gramm nicht in kg umrechnen.</li></ul>`
  },
  {
    id: "ph3_impulserhaltung",
    title: "Impulserhaltung im abgeschlossenen System",
    category: "3.3 Die Impulserhaltung",
    type: "gesetz",
    front: R`Formuliere den <b>Impulserhaltungssatz</b>. Was ist ein abgeschlossenes (isoliertes) System? Warum sind es eigentlich drei Erhaltungssätze, und was ist der tiefere Grund für die Impulserhaltung?`,
    back: R`<b>Isoliertes System:</b> spürt keine Wechselwirkung mit anderen Körpern, weil es weit entfernt ist oder weil sich die äusseren Wechselwirkungen kompensieren. Die Massenpunkte wechselwirken nur untereinander.<br><br>
<b>Satz:</b> Für $N$ Massenpunkte in einem abgeschlossenen System ist
$$\vec p_\text{tot} = \sum_{i=1}^{N}\vec p_i = \text{const}\quad(\text{Betrag und Richtung})\qquad(3.14)$$
<b>Komponentenweise</b> gibt das drei unabhängige Erhaltungssätze:
$$p_{\text{tot},x} = c_x,\quad p_{\text{tot},y} = c_y,\quad p_{\text{tot},z} = c_z\qquad(3.15\text{–}3.17)$$
Die Impulserhaltung ist ein <b>Axiom</b>: experimentell ohne bekannte Ausnahme, aber nicht beweisbar. Der tiefere Grund ist die <b>Invarianz gegenüber räumlicher Translation</b>: Ein Vorgang läuft gleich ab, wenn man ihn im Raum verschiebt (Homogenität des Raumes).`,
    meta: "Skript: Abschnitt 3.3.1, Gl. (3.14)–(3.17), S. 37–38",
    explanation: R`<b>Intuition:</b> Innerhalb eines abgeschlossenen Systems kann Impuls nur <i>umverteilt</i>, nicht erzeugt oder vernichtet werden. Was der eine Körper gewinnt, verliert der andere. Das gilt für Stösse, Explosionen, Rückstoss und Raketen, unabhängig davon, wie kompliziert die inneren Kräfte sind.<br><br>
<b>Komponentenweise Erhaltung ist mächtig:</b> Wirkt eine äussere Kraft nur in $z$-Richtung (Schwerkraft), bleiben $p_x$ und $p_y$ trotzdem erhalten. Deshalb bewegt sich z. B. beim Zerplatzen eines Feuerwerkskörpers der gemeinsame Schwerpunkt der Bruchstücke horizontal unverändert weiter.<br><br>
<b>Symmetrie und Erhaltung (Noether):</b> Translationssymmetrie führt zur Impulserhaltung, Rotationssymmetrie zur Drehimpulserhaltung (Kap. 5), Zeittranslationssymmetrie zur Energieerhaltung (Kap. 4).<br><br>
<b>Zusammenhang:</b> Aus der Impulserhaltung folgen Newton I (3.5) und Newton III (3.6). Für Vielteilchensysteme wird daraus der Schwerpunktsatz (Kap. 6).`,
    derivation: R`Warum eine Komponente erhalten bleibt, obwohl eine äussere Kraft wirkt:
<ol class="fc-steps">
<li>$\dfrac{d\vec p_\text{tot}}{dt} = \sum_i\vec F_i^\text{ext} + \sum_{i\neq j}\vec F_{ij}$<em>Newton II für jedes Teilchen, summiert: äussere Kräfte plus alle inneren Paarkräfte.</em></li>
<li>$\sum_{i\neq j}\vec F_{ij} = \sum_{i\lt j}\left(\vec F_{ij}+\vec F_{ji}\right) = \vec 0$<em>Die inneren Kräfte heben sich paarweise auf (actio = reactio).</em></li>
<li>$\dfrac{d\vec p_\text{tot}}{dt} = \vec F^\text{ext}_\text{tot}$<em>Nur äussere Kräfte ändern den Gesamtimpuls.</em></li>
<li>$F^\text{ext}_{\text{tot},x} = 0\;\Rightarrow\;\dfrac{dp_{\text{tot},x}}{dt} = 0\;\Rightarrow\;p_{\text{tot},x} = c_x$<em>Komponentenweise: Verschwindet die äussere Kraft in einer Richtung, ist diese Impulskomponente erhalten, auch wenn in anderen Richtungen Kräfte wirken.</em></li>
</ol>
(Im Skript ist die Impulserhaltung das Axiom und Newton III die Folgerung (3.6); die Rechnung oben zeigt die Konsistenz beider Sichtweisen.)`,
    example: R`<b>Zwei Eisläufer stossen sich ab:</b> $m_1 = 50\,\text{kg}$, $m_2 = 80\,\text{kg}$, vorher in Ruhe. Läufer 2 gleitet mit $1{,}0\,\text{m/s}$ weg, also $v_1 = -\frac{80}{50}\cdot1{,}0\,\text{m/s} = -1{,}6\,\text{m/s}$.<br><br>
<b>Feuerwerkskörper:</b> Er fliegt im Scheitel horizontal mit $20\,\text{m/s}$ und zerplatzt in zwei gleiche Teile; eines fällt senkrecht ($v_x = 0$). Erhaltung von $p_x$: $2m\cdot20 = m\cdot0 + m\,v_x'$, also hat das andere Teil $v_x' = 40\,\text{m/s}$.`,
    counterexample: R`<b>Nicht abgeschlossen:</b> Ein fallender Apfel gewinnt Impuls. Das verletzt die Impulserhaltung nicht, denn das System „Apfel“ ist nicht isoliert. Für „Apfel + Erde“ ist der Gesamtimpuls erhalten; die Erde gewinnt den entgegengesetzten Impuls (wegen ihrer riesigen Masse mit unmessbar kleiner Geschwindigkeit).<br>
<b>Bremsendes Auto:</b> Sein Impuls verschwindet scheinbar, er geht über die Reibungskraft auf die Erde über.`,
    pitfalls: R`<ul><li>Impulserhaltung auf ein System anwenden, auf das eine resultierende äussere Kraft wirkt.</li>
<li>Vergessen, dass die Erhaltung komponentenweise auch in nur einer Richtung gelten kann.</li>
<li>Impulserhaltung mit Energieerhaltung verwechseln: Bei inelastischen Stössen bleibt der Impuls erhalten, die kinetische Energie nicht.</li>
<li>Vorzeichen (Richtungen) bei der Summe der Impulse ignorieren.</li></ul>`
  },

  // ========================================================================
  // 3.4 DAS ZWEITE NEWTON'SCHE GESETZ
  // ========================================================================
  {
    id: "ph3_newton2_impuls",
    title: "Zweites Newton’sches Gesetz: F = dp/dt",
    category: "3.4 Das zweite Newton’sche Gesetz: Aktionsprinzip",
    type: "gesetz",
    front: R`Wie lautet das <b>zweite Newton’sche Gesetz</b> in Impulsform, und wie motiviert das Skript es mit der Kreisbewegung eines Balls am Faden? Wie addieren sich mehrere Kräfte?`,
    back: R`<b>Kreisbewegung am Faden</b> (3.18–3.21): $\vec r = r\cos\omega t\,\vec e_x + r\sin\omega t\,\vec e_y$ ergibt
$$\vec p = m\vec v = mr\omega(-\sin\omega t\,\vec e_x + \cos\omega t\,\vec e_y),\qquad \frac{d\vec p}{dt} = -m\omega^2\vec r$$
Die Impulsänderung zeigt zum Zentrum, also in Fadenrichtung. Der Faden übt die Kraft aus, die den Impuls ändert.<br><br>
<b>Aktionsprinzip:</b> Die resultierende Kraft auf einen Körper ist gleich der zeitlichen Änderung seines Impulses:
$$\vec F = \frac{d\vec p}{dt}\qquad(3.22)$$
Das ist <b>keine Definition</b> der Kraft, sondern eine heuristische, experimentell prüfbare Verknüpfung.<br><br>
<b>Superposition:</b> Kräfte sind Vektoren; am gleichen Punkt angreifende Kräfte addieren sich vektoriell (komponentenweise):
$$\vec F = \vec F_1 + \vec F_2,\qquad \vec F = \sum_i\vec F_i\qquad(3.23\text{–}3.25)$$
Der Impuls ändert sich nur, wenn sich die Kräfte nicht gegenseitig kompensieren.`,
    meta: "Skript: Abschnitt 3.4.1, Gl. (3.18)–(3.25), Abb. 3.3–3.5, S. 38–41",
    explanation: R`<b>Intuition:</b> Kräfte verursachen <i>Änderungen</i> der Bewegung, nicht die Bewegung selbst (Gegensatz zur Aristotelischen Vorstellung „ohne Kraft kommt alles zur Ruhe“). Grosse Kraft heisst schnelle Impulsänderung.<br><br>
<b>Die Impulsform ist allgemeiner als $F = ma$:</b> Sie gilt auch bei veränderlicher Masse (Rakete, Förderband) und bleibt in der Relativitätstheorie gültig (mit relativistischem Impuls), während $F = ma$ dort versagt.<br><br>
<b>Richtung:</b> $\vec F$ zeigt in Richtung der <i>Impulsänderung</i> $d\vec p$, nicht in Richtung von $\vec p$. Bei der Kreisbewegung ist $\vec p$ tangential, $d\vec p/dt$ radial nach innen.<br><br>
<b>Zusammenhang:</b> Integriert über die Zeit ergibt sich der Kraftstoss (3.4.2); für konstante Masse wird daraus $\vec F = m\vec a$ (3.4.4); für $\vec F = 0$ folgt Newton I (3.5).`,
    derivation: R`Kraft auf den Ball am Faden aus der Impulsänderung (3.18–3.21):
<ol class="fc-steps">
<li>$\vec r(t) = r(\cos\omega t,\ \sin\omega t)$<em>Gleichförmige Kreisbewegung (Kap. 2.5.3).</em></li>
<li>$\vec p = m\dot{\vec r} = mr\omega(-\sin\omega t,\ \cos\omega t)$<em>Impuls = Masse mal Geschwindigkeit; tangential.</em></li>
<li>$\dfrac{d\vec p}{dt} = mr\omega\cdot\omega(-\cos\omega t,\ -\sin\omega t)$<em>Komponenten ableiten (Kettenregel liefert nochmals $\omega$); $m$, $r$, $\omega$ sind konstant.</em></li>
<li>$= -m\omega^2\,r(\cos\omega t,\ \sin\omega t) = -m\omega^2\vec r$<em>Ausklammern: antiparallel zum Ortsvektor, also zum Zentrum.</em></li>
<li>$|\vec F| = m\omega^2 r = \dfrac{mv^2}{r}$<em>Betrag der nötigen Zentripetalkraft; geliefert vom Faden.</em></li>
</ol>`,
    example: R`Ball $m = 0{,}20\,\text{kg}$ am Faden, $r = 0{,}50\,\text{m}$, $\omega = 10\,\text{s}^{-1}$: $F = m\omega^2r = 0{,}2\cdot100\cdot0{,}5\,\text{N} = 10\,\text{N}$.<br>
Doppelte Winkelgeschwindigkeit ergibt $F = 40\,\text{N}$ (quadratisch!).<br><br>
<b>Kräfteaddition:</b> $\vec F_1 = (3,0)\,\text{N}$ und $\vec F_2 = (0,4)\,\text{N}$ am selben Punkt ergeben $\vec F = (3,4)\,\text{N}$ mit $|\vec F| = 5\,\text{N}$, nicht $7\,\text{N}$.`,
    counterexample: R`<b>„Bewegung braucht Kraft“ ist falsch:</b> Eine Raumsonde fliegt seit Jahrzehnten ohne Antrieb mit konstanter Geschwindigkeit. Keine Kraft bedeutet keine Impulsänderung, nicht „keine Bewegung“.<br>
<b>Ausgeglichene Kräfte:</b> Ein Buch auf dem Tisch: Gewicht und Normalkraft kompensieren sich, $\sum\vec F = \vec 0$, also $\dot{\vec p} = \vec 0$, obwohl zwei Kräfte wirken.`,
    pitfalls: R`<ul><li>Nur eine Kraft statt der <b>resultierenden</b> Kraft einsetzen.</li>
<li>Beträge statt Vektoren addieren.</li>
<li>$\vec F$ parallel zu $\vec p$ (bzw. $\vec v$) annehmen.</li>
<li>Die Zentripetalkraft als zusätzliche, eigene Kraft ins Kräftediagramm zeichnen. Sie ist die <i>Resultierende</i> der wirklichen Kräfte (Faden, Reibung, Gravitation).</li></ul>`
  },
  {
    id: "ph3_kraftstoss",
    title: "Kraftstoss: Δp = ∫F dt",
    category: "3.4 Das zweite Newton’sche Gesetz: Aktionsprinzip",
    type: "gesetz",
    front: R`Was ist der <b>Kraftstoss</b>, und warum ist er nützlich, wenn man den zeitlichen Verlauf einer Kraft nicht kennt? Berechne den Kraftstoss einer Kugel, die in einer Wand <b>stecken bleibt</b> bzw. <b>elastisch reflektiert</b> wird.`,
    back: R`Newton II über die Wirkungsdauer $[t_a,t_e]$ integriert:
$$\int_{t_a}^{t_e}\dot{\vec p}\,dt = \vec p_e - \vec p_a = \int_{t_a}^{t_e}\vec F_\text{ext}\,dt\qquad(3.26)$$
Das Integral $\int\vec F\,dt$ heisst <b>Kraftstoss</b>. Aus Anfangs- und Endimpuls kennt man nicht $\vec F(t)$, wohl aber dieses Integral, in 1D die <b>Fläche unter der $F(t)$-Kurve</b> (Abb. 3.6). Eine grosse, kurze Kraft kann dieselbe Impulsänderung bewirken wie eine kleine, lange.<br><br>
<b>Kugel bleibt stecken</b> ($\vec v_e = \vec 0$): Die Wand übt auf die Kugel $\int\vec F\,dt = -m\vec v_a$ aus. Nach Newton III erfährt die Wand
$$-\int\vec F\,dt = m\vec v_a\qquad(3.27)$$
<b>Elastische Reflexion</b> ($\vec v_e = -\vec v_a$): $\vec p_e - \vec p_a = -2m\vec v_a$, also ist der Kraftstoss <b>doppelt so gross</b>. Daraus berechnet man später den Gasdruck aus Molekülstössen.`,
    meta: "Skript: Abschnitt 3.4.2, Gl. (3.26)–(3.27), Abb. 3.6–3.7, S. 41–42",
    explanation: R`<b>Intuition:</b> Für die Impulsänderung zählt nur das Produkt „Kraft mal Dauer“ (genauer: das Integral). Das ist das Prinzip von Airbag, Knautschzone, Turnmatte und dem Abfedern beim Landen: Man verlängert die Bremszeit $\Delta t$ und senkt damit die mittlere Kraft $\bar F = \Delta p/\Delta t$.<br><br>
<b>Abhängigkeit:</b> Bei gegebenem $\Delta p$ gilt $\bar F\propto1/\Delta t$. Zehnfach längere Bremszeit bedeutet zehnfach kleinere mittlere Kraft.<br><br>
<b>Warum Reflexion doppelt zählt:</b> Die Wand muss den Impuls nicht nur auf null bringen, sondern ihn zusätzlich umkehren: $\Delta p = 2mv$ statt $mv$.<br><br>
<b>Zusammenhang:</b> Kinetische Gastheorie (Kap. 14.1.1): Druck = Kraftstoss pro Zeit und Fläche, mit $2mv_x$ pro Molekülstoss. Bei Strömungen (Wasserstrahl, Rakete) wird der Kraftstoss pro Zeit zu einer konstanten Kraft $F = \dot m\,v$.`,
    derivation: R`<ol class="fc-steps">
<li>$\vec F = \dfrac{d\vec p}{dt}$<em>Newton II in Impulsform.</em></li>
<li>$\int_{t_a}^{t_e}\vec F\,dt = \int_{t_a}^{t_e}\dfrac{d\vec p}{dt}dt = \vec p(t_e)-\vec p(t_a)$<em>Beide Seiten über die Wirkungsdauer integrieren; rechts Hauptsatz (3.26).</em></li>
<li>$\bar{\vec F} := \dfrac{1}{\Delta t}\int\vec F\,dt = \dfrac{\Delta\vec p}{\Delta t}$<em>Die zeitlich gemittelte Kraft folgt direkt, auch wenn $\vec F(t)$ unbekannt ist.</em></li>
<li>Stecken bleiben: $\Delta\vec p = \vec 0 - m\vec v_a = -m\vec v_a$<em>Kraftstoss der Wand auf die Kugel; die Wand erfährt nach actio = reactio $+m\vec v_a$ (3.27).</em></li>
<li>Reflexion: $\Delta\vec p = m(-\vec v_a) - m\vec v_a = -2m\vec v_a$<em>Doppelter Betrag, weil der Impuls umgekehrt wird.</em></li>
<li>Strahl: $\bar F = \dfrac{\Delta p}{\Delta t} = \dfrac{\Delta m}{\Delta t}\,v = \rho\,\dot V\,v$<em>Trifft pro Zeit die Masse $\dot m = \rho\dot V$ mit $v$ senkrecht auf eine Wand und fliesst seitlich ab, wird pro Zeit der Impuls $\dot m v$ vernichtet.</em></li>
</ol>`,
    example: R`<b>Airbag:</b> Kopf und Oberkörper ($m\approx70\,\text{kg}$) von $15\,\text{m/s}$ auf $0$: $\Delta p = 1050\,\text{kg m/s}$. Mit $\Delta t = 0{,}1\,\text{s}$ (Airbag) ist $\bar F = 10{,}5\,\text{kN}$; mit $\Delta t = 0{,}01\,\text{s}$ (Lenkrad) wären es $105\,\text{kN}$.<br><br>
<b>Wasserstrahl</b> senkrecht auf eine Wand: $\dot V = 10\,\text{L/s}$, $v = 10\,\text{m/s}$, Wasser fliesst seitlich ab: $F = 1000\,\tfrac{\text{kg}}{\text{m}^3}\cdot0{,}01\,\tfrac{\text{m}^3}{\text{s}}\cdot10\,\tfrac{\text{m}}{\text{s}} = 100\,\text{N}$.`,
    counterexample: R`<b>Gleicher Kraftstoss, verschiedene Wirkung:</b> Zwei Kraftverläufe mit gleicher Fläche (Abb. 3.6) ändern den Impuls gleich, aber der kurze, hohe Puls kann eine Struktur zerstören, die der lange, flache unbeschadet übersteht. Für Schäden zählt die <i>Spitzenkraft</i>, nicht nur der Kraftstoss.`,
    pitfalls: R`<ul><li>Bei Reflexion $\Delta p = 0$ rechnen, weil der Betrag der Geschwindigkeit gleich bleibt. Richtig: $\Delta\vec p = -2m\vec v_a$.</li>
<li>Kraft auf die Kugel und Kraft auf die Wand verwechseln (Vorzeichen).</li>
<li>Die mittlere Kraft mit der Spitzenkraft gleichsetzen.</li>
<li>Beim Strahl prüfen, wohin das Wasser abfliesst: Prallt es zurück, verdoppelt sich die Kraft.</li></ul>`
  },
  {
    id: "ph3_wechselwirkungen",
    title: "Die vier elementaren Wechselwirkungen",
    category: "3.4 Das zweite Newton’sche Gesetz: Aktionsprinzip",
    type: "konzept",
    front: R`Welche <b>vier elementaren Wechselwirkungen</b> kennt die Physik? Vergleiche ihre relative Stärke und Reichweite, und schätze das Verhältnis von Coulomb- zu Gravitationskraft zwischen zwei Protonen ab.`,
    back: R`<table><tr><th>Kraft</th><th>rel. Stärke</th><th>Reichweite</th><th>Austauschteilchen</th></tr>
<tr><td>Gravitation</td><td>$\approx10^{-40}$</td><td>$\infty$</td><td>Graviton (?)</td></tr>
<tr><td>Elektromagnetisch</td><td>$\approx1/137$</td><td>$\infty$</td><td>Photon</td></tr>
<tr><td>Schwach</td><td>$\approx10^{-12}$</td><td>$10^{-18}\,\text{m}$</td><td>$W^\pm$, $Z$</td></tr>
<tr><td>Stark</td><td>$1$</td><td>$10^{-15}\,\text{m}$</td><td>Gluonen</td></tr></table>
(Tabelle 3.2.) Gravitation und Elektromagnetismus wirken über beliebige Distanzen; die schwache und die starke Kraft nur subatomar (erst im 20. Jh. entdeckt).<br><br>
Alle makroskopischen Kräfte (Druck-, Feder-, Reibungs-, Kontaktkräfte) lassen sich auf diese zurückführen, praktisch alle auf die <b>elektromagnetische</b> Wechselwirkung.<br><br>
Zwei Protonen: $\dfrac{F_C}{F_G} = \dfrac{e^2}{4\pi\varepsilon_0 G_N m_p^2}\approx1{,}2\cdot10^{36}$, unabhängig vom Abstand.`,
    meta: "Skript: Abschnitt 3.4.3, Tab. 3.2, S. 42–44",
    explanation: R`<b>Intuition:</b> Die Natur kommt mit erstaunlich wenigen Grundkräften aus. Die Vielfalt der Alltagskräfte entsteht, weil die elektromagnetische Kraft zwischen den Atomen je nach Situation als Festkörperhärte, Elastizität, Reibung oder Druck erscheint.<br><br>
<b>Warum dominiert trotzdem die Gravitation im Kosmos?</b> Gravitation ist immer anziehend und addiert sich über alle Massen. Elektrische Ladungen gibt es mit beiden Vorzeichen; grosse Körper sind nahezu neutral, und die Kräfte heben sich auf. Starke und schwache Kraft haben eine zu kurze Reichweite.<br><br>
<b>Abstandsunabhängigkeit des Verhältnisses:</b> Coulomb- und Gravitationskraft fallen beide wie $1/r^2$ ab (3.10). Ihr Verhältnis ist deshalb eine reine Zahl, ein sinnvolles Mass der „relativen Stärke“.<br><br>
<b>Austauschteilchen:</b> In Quantenfeldtheorien wird eine Wechselwirkung als Austausch von Teilchen beschrieben. Alle ausser dem Graviton sind nachgewiesen; die Allgemeine Relativitätstheorie kommt ohne Austauschteilchen aus und ist noch nicht mit der Quantentheorie vereinigt.`,
    derivation: R`Coulomb gegen Gravitation für zwei Protonen im Abstand $r$:
<ol class="fc-steps">
<li>$F_C = \dfrac{1}{4\pi\varepsilon_0}\dfrac{e^2}{r^2},\qquad F_G = G_N\dfrac{m_p^2}{r^2}$<em>Beide Kraftgesetze (3.113, 3.117) mit Ladung $e$ bzw. Masse $m_p$.</em></li>
<li>$\dfrac{F_C}{F_G} = \dfrac{e^2}{4\pi\varepsilon_0\,G_N\,m_p^2}$<em>Das $1/r^2$ kürzt sich: Das Verhältnis ist abstandsunabhängig.</em></li>
<li>$= \dfrac{(1{,}60\cdot10^{-19})^2\cdot8{,}99\cdot10^{9}}{6{,}67\cdot10^{-11}\cdot(1{,}67\cdot10^{-27})^2}$<em>Zahlen einsetzen (SI): $\frac{1}{4\pi\varepsilon_0} = 8{,}99\cdot10^{9}\,\text{N m}^2/\text{C}^2$.</em></li>
<li>$= \dfrac{2{,}30\cdot10^{-28}}{1{,}86\cdot10^{-64}}\approx1{,}2\cdot10^{36}$<em>Zähler und Nenner ausrechnen. Die elektrische Abstossung ist $10^{36}$-mal stärker.</em></li>
</ol>`,
    example: R`<b>Ein Magnet hebt eine Büroklammer</b> gegen die Anziehung der <i>ganzen Erde</i>: ein Alltagsbeweis dafür, dass die Gravitation extrem schwach ist.<br><br>
<b>Atomkern:</b> Protonen im Kern ($r\approx10^{-15}\,\text{m}$) stossen sich elektrisch mit etwa $230\,\text{N}$ ab, eine riesige Kraft für zwei Teilchen. Zusammengehalten werden sie durch die starke Kraft, die nur auf diese kurze Distanz wirkt.`,
    counterexample: R`<b>„Reibungskraft“ und „Federkraft“ sind keine Grundkräfte:</b> Es sind effektive Beschreibungen der elektromagnetischen Wechselwirkung vieler Atome. Ihre einfachen Gesetze ($F = \mu F_N$, $F = -kx$) sind Näherungen mit begrenztem Gültigkeitsbereich, keine fundamentalen Naturgesetze.`,
    pitfalls: R`<ul><li>„Die starke Kraft ist die stärkste“ ohne die Reichweite zu erwähnen: Ausserhalb des Kerns spielt sie keine Rolle.</li>
<li>Relative Stärken als absolute Kräfte lesen; die Zahlen sind auf eine Referenzsituation normiert.</li>
<li>Gravitation für unwichtig halten, nur weil sie schwach ist: Auf grossen Skalen dominiert sie.</li></ul>`
  },
  {
    id: "ph3_aktionsprinzip",
    title: "Aktionsprinzip F = m a für konstante Masse",
    category: "3.4 Das zweite Newton’sche Gesetz: Aktionsprinzip",
    type: "gesetz",
    front: R`Wie folgt aus $\vec F = d\vec p/dt$ die Form $\vec F = m\vec a$? Unter welcher Voraussetzung gilt sie, und warum zeigen $\vec a$ und $\vec F$ immer in dieselbe Richtung? Was ist ein Newton?`,
    back: R`Für <b>konstante Masse</b>:
$$\vec F = \frac{d\vec p}{dt} = \frac{d}{dt}\{m\vec v(t)\} = m\frac{d\vec v}{dt} = m\,\vec a(t)\qquad(3.28)$$
<b>Aktionsprinzip:</b> Die Beschleunigung eines Körpers konstanter Masse ist direkt proportional zur resultierenden Kraft und umgekehrt proportional zur Masse:
$$\vec a(t) = \frac{1}{m}\vec F(t)\qquad(3.29)$$
Da $m$ ein positiver Skalar ist, zeigen $\vec a$ und $\vec F$ <b>immer in dieselbe Richtung</b>. Das gilt nicht mehr in der Speziellen Relativitätstheorie und i. A. nicht bei zeitlich veränderlicher Masse.<br><br>
<b>SI-Einheit:</b>
$$[F] = 1\,\text{N} = 1\,\text{kg}\,\text{m/s}^2\qquad(3.30)$$
die Kraft, die $1\,\text{kg}$ mit $1\,\text{m/s}^2$ beschleunigt.`,
    meta: "Skript: Abschnitt 3.4.4, Gl. (3.28)–(3.30) mit Fussnote 7, S. 44",
    explanation: R`<b>Intuition:</b> Doppelte Kraft ergibt doppelte Beschleunigung, doppelte Masse halbe Beschleunigung ($a\propto F$, $a\propto1/m$). Masse ist der „Widerstand“ gegen Beschleunigung.<br><br>
<b>Richtung:</b> $\vec a\parallel\vec F$, aber $\vec v$ kann in jede Richtung zeigen. Beim schiefen Wurf zeigt $\vec F = m\vec g$ nach unten, $\vec v$ schräg.<br><br>
<b>Wann gilt nur die Impulsform?</b> Ändert sich die Masse (Rakete, Förderband, Regentropfen, der Wasser aufsammelt), ist $\frac{d}{dt}(m\vec v) = \dot m\,\vec v + m\dot{\vec v}$, und der Zusatzterm $\dot m\vec v$ darf nicht fehlen (Skript-Fussnote 9).<br><br>
<b>Zusammenhang:</b> $m\ddot{\vec r} = \vec F(\vec r,\dot{\vec r},t)$ ist eine Differentialgleichung 2. Ordnung. Mit 6 Anfangsbedingungen ($\vec r_0$, $\vec v_0$) legt sie die Bahn eindeutig fest (Lösungsrezept 3.8.1).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec F = \dfrac{d}{dt}(m\vec v)$<em>Newton II in Impulsform mit $\vec p = m\vec v$.</em></li>
<li>$= \dot m\,\vec v + m\,\dot{\vec v}$<em>Produktregel: Masse und Geschwindigkeit können sich ändern.</em></li>
<li>$\dot m = 0\;\Rightarrow\;\vec F = m\dot{\vec v} = m\vec a$<em>Bei konstanter Masse fällt der erste Term weg (3.28).</em></li>
<li>$\vec a = \dfrac{1}{m}\vec F$, $m>0$<em>Division durch einen positiven Skalar ändert die Richtung nicht: $\vec a\parallel\vec F$ (3.29).</em></li>
<li>$[F] = \text{kg}\cdot\dfrac{\text{m}}{\text{s}^2} =: \text{N}$<em>Einheit aus der Gleichung abgelesen (3.30).</em></li>
</ol>`,
    example: R`Ein Auto ($1200\,\text{kg}$) wird mit einer resultierenden Kraft von $3600\,\text{N}$ beschleunigt: $a = 3{,}0\,\text{m/s}^2$, also von $0$ auf $100\,\text{km/h}$ ($27{,}8\,\text{m/s}$) in $9{,}3\,\text{s}$.<br>
Mit Anhänger ($m = 2400\,\text{kg}$) und gleicher Kraft halbiert sich $a$ auf $1{,}5\,\text{m/s}^2$.`,
    counterexample: R`<b>Förderband mit Sand:</b> Fällt Sand mit der Rate $\dot m$ auf ein Band, das sich mit konstanter Geschwindigkeit $v$ bewegt, ist $\vec a = \vec 0$. Trotzdem braucht der Motor die Kraft $F = \dot m\,v$, um den ankommenden Sand auf $v$ zu bringen. $F = ma$ würde fälschlich $F = 0$ liefern; korrekt ist $F = dp/dt = \dot m v$.`,
    pitfalls: R`<ul><li>$F = ma$ bei veränderlicher Masse verwenden.</li>
<li>$\vec v$ parallel zu $\vec F$ annehmen; nur $\vec a$ ist parallel.</li>
<li>Einzelkraft statt resultierender Kraft einsetzen.</li>
<li>Bei relativistischen Geschwindigkeiten $F = ma$ anwenden.</li></ul>`
  },

  // ========================================================================
  // 3.5 TRÄGHEIT, 3.6 ACTIO = REACTIO
  // ========================================================================
  {
    id: "ph3_traegheit",
    title: "Erstes Newton’sches Gesetz: Trägheitsprinzip und Inertialsysteme",
    category: "3.5 Das erste Newton’sche Gesetz: Trägheit",
    type: "gesetz",
    front: R`Wie folgt das <b>Trägheitsprinzip</b> aus der Impulserhaltung bzw. aus Newton II? Was ist ein <b>Inertialsystem</b>, und warum ist ein Körper, der in einem Inertialsystem ruht, in einem anderen gleichförmig bewegt?`,
    back: R`Isoliertes System: $\vec p_\text{tot} = \text{const}\iff \frac{d\vec p_\text{tot}}{dt} = \vec 0$ (3.31). Für einen einzelnen Körper konstanter Masse:
$$\frac{d\vec p}{dt} = m\frac{d\vec v}{dt} = \vec 0\quad\Longrightarrow\quad \vec v = \text{const}\qquad(3.32,\,3.33)$$
<b>Trägheitsprinzip:</b> Ein Körper bleibt in Ruhe oder bewegt sich geradlinig gleichförmig, wenn die Resultierende aller auf ihn wirkenden äusseren Kräfte verschwindet.<br><br>
<b>Inertialsystem</b> (pragmatische Definition): ein Bezugssystem, in dem das 1. Newton’sche Axiom gilt.<br><br>
„Ruhe“ und „konstante Geschwindigkeit“ hängen vom Bezugssystem ab: Bewegt sich $K'$ mit konstantem $\vec u$ relativ zu $K$, gilt $\vec r'(t) = \vec r(t) - \vec u\,t$ (Abb. 3.8). Beschleunigte (z. B. rotierende) Systeme sind <b>keine</b> Inertialsysteme.<br><br><b>Freier Körper</b> (3.7.1): weit weg von allen anderen Körpern oder mit sich kompensierenden Wechselwirkungen; dann $\vec p = m\vec v = \text{konst.}$ (3.38), geradlinig gleichförmige Bewegung.`,
    meta: "Skript: Abschnitte 3.5 und 3.7.1, Gl. (3.31)–(3.33), (3.38), Abb. 3.8, S. 45–49; Zusammenfassung 3.12",
    explanation: R`<b>Intuition:</b> Trägheit ist die Tendenz eines massiven Körpers, seinen Bewegungszustand beizubehalten. Ohne Kraft ändert sich nichts, weder Tempo noch Richtung.<br><br>
<b>Ist Newton I nur ein Spezialfall von Newton II?</b> Formal ja ($\vec F = 0$). Inhaltlich legt es aber fest, <i>in welchen Bezugssystemen</i> Newton II überhaupt in der einfachen Form gilt. Newton I ist damit zugleich die Definition der Inertialsysteme.<br><br>
<b>Galilei-Invarianz:</b> Alle Systeme, die sich gegenüber einem Inertialsystem gleichförmig bewegen, sind wieder Inertialsysteme. Beschleunigungen und damit Kräfte sind in ihnen gleich; nur Geschwindigkeiten unterscheiden sich um $\vec u$. Physik im gleichförmig fahrenden Zug ist dieselbe wie auf dem Bahnsteig.<br><br>
<b>Zusammenhang:</b> In nicht-inertialen Systemen treten Scheinkräfte auf (3.11). Die Erdoberfläche ist nur näherungsweise ein Inertialsystem (Zentripetalbeschleunigung $\le0{,}034\,\text{m/s}^2$, Coriolis-Effekte).`,
    derivation: R`Newton I gilt in jedem gleichförmig bewegten System (Galilei-Transformation):
<ol class="fc-steps">
<li>$\vec r'(t) = \vec r(t) - \vec u\,t$, $\vec u = \text{const}$<em>$K'$ bewegt sich mit konstanter Geschwindigkeit $\vec u$ relativ zu $K$; die Ursprünge fallen bei $t = 0$ zusammen (Abb. 3.8).</em></li>
<li>$\vec v' = \dot{\vec r}' = \vec v - \vec u$<em>Geschwindigkeiten unterscheiden sich um die Relativgeschwindigkeit (absolute Zeit vorausgesetzt).</em></li>
<li>$\vec a' = \dot{\vec v}' = \vec a$<em>Da $\vec u$ konstant ist, verschwindet $\dot{\vec u}$: Beschleunigungen sind in beiden Systemen gleich.</em></li>
<li>$\vec F = \vec 0\Rightarrow\vec a = \vec 0\Rightarrow\vec a' = \vec 0$<em>Ist $K$ inertial und wirkt keine Kraft, bewegt sich der Körper auch in $K'$ gleichförmig. $K'$ ist ebenfalls ein Inertialsystem.</em></li>
<li>$\dot{\vec u}\neq\vec 0\Rightarrow\vec a'\neq\vec a$<em>Beschleunigt $K'$, sieht man dort Beschleunigungen ohne Kraft; $K'$ ist kein Inertialsystem.</em></li>
</ol>`,
    example: R`<b>Münze im Zug:</b> Im mit konstant $30\,\text{m/s}$ fahrenden Zug fällt eine Münze senkrecht in die Hand, genau wie im stehenden Zug. Vom Bahnsteig aus beschreibt sie eine Wurfparabel mit horizontaler Geschwindigkeit $30\,\text{m/s}$.<br><br>
<b>Bremsender Bus</b> ($A = -3\,\text{m/s}^2$): Ein Ball auf dem Boden rollt nach vorne, ohne dass eine Kraft in Fahrtrichtung auf ihn wirkt. Im Bus gilt Newton I nicht, der Bus ist kein Inertialsystem.`,
    counterexample: R`<b>Karussell:</b> Ein reibungsfrei rollender Ball, auf den keine resultierende Kraft wirkt, beschreibt relativ zur drehenden Scheibe eine gekrümmte Bahn (3.11.4.1). Im rotierenden System ist Newton I verletzt, es ist kein Inertialsystem.`,
    pitfalls: R`<ul><li>„Ruhe“ absolut verstehen; Ruhe ist nur relativ zu einem Bezugssystem definiert.</li>
<li>Annehmen, ohne Kraft komme ein Körper zur Ruhe (im Alltag wirkt fast immer Reibung).</li>
<li>Die Erde ungeprüft als exaktes Inertialsystem verwenden: Für Foucault-Pendel und Wetter ist die Rotation entscheidend.</li></ul>`
  },
  {
    id: "ph3_actio_reactio",
    title: "Drittes Newton’sches Gesetz: actio = reactio",
    category: "3.6 Das dritte Newton’sche Gesetz: Aktion = Reaktion",
    type: "gesetz",
    front: R`Wie lautet das <b>Aktions-Reaktions-Prinzip</b>, und wie folgt es aus der Impulserhaltung? Auf welche Körper wirken Kraft und Gegenkraft, und warum heben sie sich trotzdem nicht in der Bewegungsgleichung eines Körpers auf?`,
    back: R`Jede Einzelkraft ist nur ein Aspekt einer <b>gegenseitigen</b> Wechselwirkung; es gibt keine isolierte Einzelkraft.<br><br>
<b>Prinzip:</b> Zu jeder Aktion gehört eine Reaktion mit gleichem Betrag und entgegengesetzter Richtung.<br><br>
<b>Herleitung:</b> Isoliertes System aus A und B:
$$\vec p_\text{tot} = \vec p_A + \vec p_B = \text{const}\;\Rightarrow\;\frac{d\vec p_A}{dt} + \frac{d\vec p_B}{dt} = \vec 0\;\Rightarrow\;\vec F_A + \vec F_B = \vec 0\qquad(3.34\text{–}3.36)$$
mit $\vec F_A$ = Kraft von B auf A und $\vec F_B$ = Kraft von A auf B:
$$\vec F_A = -\vec F_B\qquad(3.37)$$
<b>Beispiele:</b> Die Kugel drückt mit $\vec F_{21}$ auf den Tisch, der Tisch mit $\vec F_{12} = -\vec F_{21}$ auf die Kugel (3.6.1). Wasser übt Auftrieb $\vec F_{12}$ auf eine Kugel aus, die Kugel drückt mit $\vec F_{21}$ aufs Wasser; die Erde zieht die Kugel an ($\vec F_{13}$), die Kugel die Erde ($\vec F_{31} = -\vec F_{13}$) (3.6.2).`,
    meta: "Skript: Abschnitt 3.6, Gl. (3.34)–(3.37), Abb. 3.9–3.10, S. 46–48",
    explanation: R`<b>Intuition:</b> Wer schiebt, wird zurückgeschoben. Ein Ruderer drückt das Wasser nach hinten, das Wasser drückt das Boot nach vorn; eine Rakete stösst Gas aus, das Gas stösst die Rakete.<br><br>
<b>Der entscheidende Punkt:</b> Aktion und Reaktion wirken auf <b>verschiedene Körper</b>. In der Bewegungsgleichung eines einzelnen Körpers taucht immer nur eine der beiden auf. Deshalb können sie sich dort nicht aufheben, und deshalb kann sich überhaupt etwas bewegen.<br><br>
<b>Gleichgewicht ≠ actio = reactio:</b> Beim ruhenden Buch auf dem Tisch heben sich Gewichtskraft und Normalkraft auf. Das sind zwei verschiedene Wechselwirkungen (Erde–Buch, Tisch–Buch), die zufällig auf <i>denselben</i> Körper wirken. Das ist Newton I/II, nicht Newton III.<br><br>
<b>Gleiche Kraft, verschiedene Wirkung:</b> Erde und Apfel ziehen sich mit gleicher Kraft an, aber die Beschleunigungen verhalten sich umgekehrt wie die Massen: $a_\text{Erde}/a_\text{Apfel} = m/M\approx10^{-25}$ (vgl. 3.121).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec p_A + \vec p_B = \text{const}$<em>Impulserhaltung im isolierten Zwei-Körper-System (3.34).</em></li>
<li>$\dot{\vec p}_A + \dot{\vec p}_B = \vec 0$<em>Zeitableitung einer Konstanten ist null (3.35).</em></li>
<li>$\dot{\vec p}_A = \vec F_A$, $\dot{\vec p}_B = \vec F_B$<em>Newton II für jeden Körper einzeln; da das System isoliert ist, stammt $\vec F_A$ allein von B und $\vec F_B$ allein von A.</em></li>
<li>$\vec F_A + \vec F_B = \vec 0\;\Rightarrow\;\vec F_A = -\vec F_B$<em>Einsetzen ergibt actio = reactio (3.36, 3.37).</em></li>
</ol>`,
    example: R`<b>Kugel auf dem Tisch</b> (Abb. 3.9): Ohne die Gegenkraft $\vec F_{12}$ des Tisches würde die Kugel nach Newton II nach unten beschleunigt.<br><br>
<b>Apfel und Erde:</b> $m = 0{,}2\,\text{kg}$ erfährt $F\approx2\,\text{N}$. Die Erde ($6\cdot10^{24}\,\text{kg}$) erfährt ebenfalls $2\,\text{N}$, also $a_\text{Erde}\approx3\cdot10^{-25}\,\text{m/s}^2$, unmessbar klein, aber nicht null.`,
    counterexample: R`<b>Kein Aktions-Reaktions-Paar:</b> Gewicht des Buchs ($\vec F_G$, Erde auf Buch) und Normalkraft ($\vec F_N$, Tisch auf Buch) sind gleich gross und entgegengesetzt, aber <i>kein</i> Paar im Sinne von Newton III: Sie wirken auf denselben Körper und gehören zu verschiedenen Wechselwirkungen. Im Aufzug beim Anfahren sind sie auch nicht mehr gleich gross (3.10.3.2), ein Aktions-Reaktions-Paar dagegen ist <i>immer</i> exakt gleich gross.<br>
Die echten Partner: Das Buch zieht die Erde an ($-\vec F_G$), und das Buch drückt auf den Tisch ($-\vec F_N$).`,
    pitfalls: R`<ul><li>„Pferd-und-Wagen-Paradox“: „Wenn der Wagen gleich stark zurückzieht, kann sich nichts bewegen.“ Falsch: Die Kräfte wirken auf verschiedene Körper; das Pferd bewegt sich, weil der Boden es nach vorn schiebt.</li>
<li>Gleichgewichtskräfte und Aktions-Reaktions-Paare verwechseln.</li>
<li>Annehmen, die grössere Masse übe die grössere Kraft aus.</li>
<li>Scheinkräfte (3.11) haben <b>keinen</b> Reaktionspartner; das ist ein Kennzeichen dafür, dass sie keine echten Kräfte sind.</li></ul>`
  },

  // ========================================================================
  // 3.7 ANWENDUNGEN: IMPULS UND IMPULSERHALTUNG
  // ========================================================================
  {
    id: "ph3_zentraler_stoss",
    title: "Zentraler Stoss: Impulsaustausch Δp₁ = −Δp₂",
    category: "3.7 Anwendungen: Impuls und Impulserhaltung",
    type: "herleitung",
    front: R`Zwei Kugeln stossen zentral. Zeige mit der Impulserhaltung, dass $\Delta\vec p_1 = -\Delta\vec p_2$. Welche Endgeschwindigkeiten ergeben sich zusätzlich bei einem <b>elastischen</b> Stoss in einer Dimension?`,
    back: R`<b>Impulserhaltung</b> (3.39–3.43):
$$\vec p_1 + \vec p_2 = \vec p_1\,' + \vec p_2\,'\;\Longleftrightarrow\;\underbrace{(\vec p_1\,'-\vec p_1)}_{\Delta\vec p_1} = -\underbrace{(\vec p_2\,'-\vec p_2)}_{\Delta\vec p_2}\;\Longrightarrow\;\Delta\vec p_1 + \Delta\vec p_2 = \vec 0$$
Was die eine Kugel an Impuls gewinnt, verliert die andere. „Elastisch“ heisst: Innere Grössen (Masse, Form, innere Energie) ändern sich nicht, die kinetische Energie bleibt erhalten.<br><br>
<b>Elastisch, 1D</b> (mit zusätzlich $\tfrac12m_1v_1^2+\tfrac12m_2v_2^2 = \tfrac12m_1v_1'^2+\tfrac12m_2v_2'^2$):
$$v_1' = \frac{(m_1-m_2)v_1 + 2m_2v_2}{m_1+m_2},\qquad v_2' = \frac{(m_2-m_1)v_2 + 2m_1v_1}{m_1+m_2}$$`,
    meta: "Skript: Abschnitt 3.7.2, Gl. (3.39)–(3.43), Abb. 3.11, S. 49; ausführlich Kap. 6.8.2",
    explanation: R`<b>Intuition:</b> Während des Stosses wirken nur innere Kräfte zwischen den Kugeln (actio = reactio). Deshalb ist der übertragene Impuls exakt entgegengesetzt gleich. Das gilt für jeden Stoss, elastisch oder nicht.<br><br>
<b>Elastisch: zwei Erhaltungssätze, zwei Unbekannte.</b> Impuls und Energie legen $v_1'$ und $v_2'$ in 1D eindeutig fest. Eine elegante Folgerung: Die Relativgeschwindigkeit kehrt sich um, $v_2'-v_1' = -(v_2-v_1)$.<br><br>
<b>Grenzfälle (mit $v_2 = 0$):</b>
<ul><li>$m_1 = m_2$: $v_1' = 0$, $v_2' = v_1$. Die Geschwindigkeiten werden ausgetauscht (Kugelstosspendel).</li>
<li>$m_1\ll m_2$: $v_1'\approx-v_1$. Der leichte Körper prallt zurück wie von einer Wand.</li>
<li>$m_1\gg m_2$: $v_2'\approx2v_1$. Der schwere Körper stösst den leichten mit doppelter Geschwindigkeit weg.</li></ul>
<b>Zusammenhang:</b> Im Schwerpunktsystem (Kap. 6.8) wird der elastische Stoss besonders einfach: Beide Geschwindigkeiten kehren sich einfach um.`,
    derivation: R`Elastischer Stoss in 1D:
<ol class="fc-steps">
<li>$m_1(v_1-v_1') = m_2(v_2'-v_2)$<em>Impulserhaltung, nach Teilchen sortiert.</em></li>
<li>$m_1(v_1^2-v_1'^2) = m_2(v_2'^2-v_2^2)$<em>Energieerhaltung, mit 2 multipliziert und ebenso sortiert.</em></li>
<li>$m_1(v_1-v_1')(v_1+v_1') = m_2(v_2'-v_2)(v_2'+v_2)$<em>Dritte binomische Formel auf beiden Seiten.</em></li>
<li>$v_1+v_1' = v_2'+v_2$<em>Durch Gleichung 1 teilen (falls überhaupt ein Stoss stattfindet, $v_1\neq v_1'$).</em></li>
<li>$v_2' = v_1+v_1'-v_2$<em>Lineare Beziehung: Die Relativgeschwindigkeit kehrt sich um.</em></li>
<li>$m_1(v_1-v_1') = m_2(v_1+v_1'-2v_2)\;\Rightarrow\;v_1' = \dfrac{(m_1-m_2)v_1+2m_2v_2}{m_1+m_2}$<em>In die Impulsgleichung einsetzen und nach $v_1'$ auflösen; $v_2'$ analog (Indizes vertauschen).</em></li>
</ol>`,
    example: R`$m_1 = 1\,\text{kg}$ mit $v_1 = 3\,\text{m/s}$ trifft $m_2 = 2\,\text{kg}$ in Ruhe (elastisch):<br>
$v_1' = \frac{(1-2)\cdot3}{3}\,\text{m/s} = -1\,\text{m/s}$ (prallt zurück), $v_2' = \frac{2\cdot1\cdot3}{3}\,\text{m/s} = 2\,\text{m/s}$.<br>
Kontrolle: $p$: $3 = -1 + 4$ ✓; $E$: $4{,}5 = 0{,}5 + 4$ ✓; $\Delta p_1 = -4 = -\Delta p_2$ ✓.`,
    counterexample: R`<b>Vollständig inelastischer Stoss</b> (die Kugeln kleben zusammen): Der Impuls ist weiterhin erhalten, $v' = \frac{m_1v_1+m_2v_2}{m_1+m_2}$, und $\Delta p_1 = -\Delta p_2$ gilt weiter. Die kinetische Energie dagegen nicht: Im Beispiel oben wäre $v' = 1\,\text{m/s}$ und $E' = 1{,}5\,\text{J}$ statt $4{,}5\,\text{J}$; $3\,\text{J}$ gehen in Verformung und Wärme.`,
    pitfalls: R`<ul><li>Die Energieerhaltung auf inelastische Stösse anwenden.</li>
<li>Vorzeichen der Geschwindigkeiten (Richtung) in 1D vergessen.</li>
<li>Glauben, ein elastisch zurückprallender Ball habe $\Delta p = 0$.</li>
<li>Die Formeln für $v_1'$, $v_2'$ in 2D/3D verwenden; dort braucht man Winkel (Streuung, Kap. 6.8.3).</li></ul>`
  },
  {
    id: "ph3_rakete",
    title: "Raketenantrieb: Schub und Raketengleichung",
    category: "3.7 Anwendungen: Impuls und Impulserhaltung",
    type: "herleitung",
    front: R`Leite für eine Rakete (Masse $M(t)$, Ausstossgeschwindigkeit $u$ relativ zur Rakete, keine äusseren Kräfte) die <b>Schubkraft</b> und die <b>Raketengleichung</b> $v(t) - v_0 = u\ln\frac{M_0}{M}$ her. Wann bewegt sich das ausgestossene Gas für einen äusseren Beobachter vorwärts?`,
    back: R`Grössen: $v$ = Geschwindigkeit der Rakete (äusserer Beobachter), $u$ = Ausstossgeschwindigkeit relativ zur Rakete, $M(t)$ = Raketenmasse; in $dt$ wird die Gasmasse $dm>0$ ausgestossen.
$$p(t) = Mv,\qquad p(t+dt) = (M-dm)(v+dv) + dm\,(v-u)\qquad(3.44,\,3.45)$$
Impulserhaltung (ohne $dm\,dv$): $M\,dv - u\,dm = 0$ (3.48), also
$$M\frac{dv}{dt} = u\frac{dm}{dt}\quad\Rightarrow\quad\text{Schub } F = u\,\frac{dm}{dt}\qquad(3.49,\,3.50)$$
Integration mit $dm = -dM$ und $u = \text{const}$:
$$v(t) - v_0 = -u\int_{M_0}^{M}\frac{dM'}{M'} = u\,\ln\frac{M_0}{M_0-m}\qquad(3.53)$$
($m$ = gesamte ausgestossene Gasmasse). Für $\frac{M_0}{M_0-m}>e$ ist $v - v_0 > u$; startet die Rakete aus der Ruhe, ist dann $v>u$, und das Gas ($v - u > 0$) fliegt für den Beobachter in <b>dieselbe Richtung</b> wie die Rakete (3.54).`,
    meta: "Skript: Abschnitt 3.7.3, Gl. (3.44)–(3.54), Abb. 3.12, S. 50–52",
    explanation: R`<b>Intuition:</b> Die Rakete stösst sich am eigenen Gas ab, nicht an der Luft. Sie funktioniert deshalb im Vakuum, dort sogar besser (kein Luftwiderstand). Jedes ausgestossene Gaspaket nimmt Impuls nach hinten mit, die Rakete erhält gleich viel nach vorn.<br><br>
<b>Abhängigkeiten:</b>
<ul><li>Schub $F\propto u$ und $\propto\dot m$: schnellere Gase oder höherer Massendurchsatz.</li>
<li>Endgeschwindigkeit $\Delta v\propto u$, aber nur <b>logarithmisch</b> im Massenverhältnis $M_0/M$. Um $\Delta v$ zu verdoppeln, muss man $M_0/M$ <i>quadrieren</i>.</li></ul>
Darum baut man <b>Stufenraketen</b>: Leere Tanks werden abgeworfen, damit das Massenverhältnis jeder Stufe gross bleibt.<br><br>
<b>Zusammenhang:</b> Ein Musterbeispiel für veränderliche Masse. Hier gilt nur $F = dp/dt$ für das Gesamtsystem, nicht naiv $F = Ma$ für die Rakete allein. Mit Gravitation kommt beim senkrechten Start noch $-g\,t$ hinzu: $v = u\ln\frac{M_0}{M} - gt$.`,
    derivation: R`<ol class="fc-steps">
<li>$p(t) = M v$<em>Impuls von Rakete plus noch nicht ausgestossenem Treibstoff zur Zeit $t$ (3.44).</em></li>
<li>$p(t+dt) = (M-dm)(v+dv) + dm\,(v-u)$<em>Danach: Rakete mit Restmasse $M - dm$ und Geschwindigkeit $v + dv$, plus Gaspaket $dm$ mit Geschwindigkeit $v - u$ relativ zum Beobachter (3.45).</em></li>
<li>$= Mv + M\,dv - v\,dm - dm\,dv + v\,dm - u\,dm$<em>Ausmultiplizieren (3.46); $\pm v\,dm$ heben sich weg.</em></li>
<li>$\approx Mv + M\,dv - u\,dm$<em>$dm\,dv$ ist klein von zweiter Ordnung und wird vernachlässigt (3.47).</em></li>
<li>$p(t+dt) - p(t) = M\,dv - u\,dm = 0$<em>Keine äussere Kraft: Gesamtimpuls erhalten (3.48).</em></li>
<li>$M\dfrac{dv}{dt} = u\dfrac{dm}{dt} = F_\text{Schub}$<em>Durch $dt$ teilen; die rechte Seite wirkt wie eine Kraft auf die Rakete (3.49, 3.50).</em></li>
<li>$dv = u\dfrac{dm}{M} = -u\dfrac{dM}{M}$<em>Variablen trennen; die Gasmasse stammt aus der Raketenmasse: $dm = -dM$.</em></li>
<li>$v - v_0 = -u\left[\ln M'\right]_{M_0}^{M} = u\ln\dfrac{M_0}{M}$<em>Integrieren mit konstantem $u$; $M = M_0 - m$ (3.53).</em></li>
</ol>`,
    example: R`<b>Massenverhältnis 10:</b> $u = 2{,}5\,\text{km/s}$, $M_0/M = 10$: $\Delta v = 2{,}5\cdot\ln10\,\text{km/s} = 5{,}76\,\text{km/s}$. Für eine Erdumlaufbahn ($\approx7{,}8\,\text{km/s}$ plus Verluste) reicht das mit einer Stufe nicht, daher mehrere Stufen.<br><br>
<b>Schub:</b> $u = 3000\,\text{m/s}$, $\dot m = 100\,\text{kg/s}$: $F = 3\cdot10^{5}\,\text{N}$. Bei $M = 20\,\text{t}$ ergibt das $a = 15\,\text{m/s}^2$ (ohne Gravitation).`,
    counterexample: R`<b>Falsch: „Die Rakete drückt sich von der Luft ab.“</b> Im Vakuum gibt es keine Luft, und trotzdem funktioniert der Antrieb. Das Medium hat mit dem Antrieb nichts zu tun.<br>
<b>Falsch: $F = M\,a$ mit der Anfangsmasse:</b> Bei konstantem Schub wächst die Beschleunigung $a = F/M(t)$, weil die Masse abnimmt; die Rakete wird zum Brennschluss hin immer stärker beschleunigt.`,
    pitfalls: R`<ul><li>$u$ relativ zum Boden statt relativ zur Rakete einsetzen.</li>
<li>Vorzeichen von $dm$ und $dM$ vertauschen ($dm = -dM>0$).</li>
<li>$\Delta v$ linear statt logarithmisch im Massenverhältnis annehmen.</li>
<li>Beim Start von der Erde die Gravitation ($-gt$) vergessen.</li></ul>`
  },

  // ========================================================================
  // 3.8 ANWENDUNGEN DER NEWTON'SCHEN GESETZE
  // ========================================================================
  {
    id: "ph3_loesungsrezept",
    title: "Lösungsrezept für Bewegungsaufgaben (am Beispiel freier Fall)",
    category: "3.8 Anwendungen der Newton’schen Gesetze",
    type: "konzept",
    front: R`Nenne das <b>6-Schritte-Rezept</b> zur Lösung von Bewegungsaufgaben mit den Newton’schen Gesetzen und wende es auf den freien Fall aus der Höhe $h$ an. Welche Reibungsansätze $\vec R = -\kappa\hat v$ unterscheidet das Skript?`,
    back: R`<b>Rezept</b> (3.8.1):
<ol><li>Körper auswählen.</li>
<li>Alle Kräfte $\vec F_i$ auf ihn (in allgemeiner Lage) aufschreiben.</li>
<li>Koordinatensystem wählen: Inertialsystem, Achsen so, dass die Beschreibung einfach wird.</li>
<li>Newton für alle Komponenten: $m\ddot{\vec r} = \sum_i\vec F_i$, $m\ddot x = \sum_i F_{ix}$ usw. (3.55)</li>
<li>Differentialgleichungen lösen: allgemeine Lösung mit Integrationskonstanten $c_1,c_2,\dots$</li>
<li>Konstanten aus den Anfangsbedingungen ($\vec r_0$, $\vec v_0$) bestimmen: spezielle Lösung (3.56).</li></ol>
Notfalls numerisch lösen (Anfangsbedingungen als Startwerte).<br><br>
<b>Freier Fall</b> (3.8.2): Gewicht $\vec G = m\vec g$, Reibung $\vec R = -\kappa\hat v$ mit
α) trocken: $\kappa\le\kappa_0$ const, β) zähe Flüssigkeit: $\kappa = \kappa_1v$ (kleine $v$), γ) Flüssigkeiten/Gase: $\kappa = \kappa_2v^2$ (grosse $v$) (3.57).
Ohne Reibung, Start in $(0,0,h)$ aus der Ruhe:
$$x(t) = 0,\quad y(t) = 0,\quad z(t) = h - \tfrac12 g t^2,\quad \dot z(t) = -gt\qquad(3.62)$$`,
    meta: "Skript: Abschnitte 3.8.1–3.8.2, Gl. (3.55)–(3.62), Abb. 3.13, S. 52–55",
    explanation: R`<b>Intuition:</b> Das Rezept ersetzt „Tricks“ durch ein immer gleiches Verfahren. Für den freien Fall ist es übertrieben aufwendig, aber genau dieselben Schritte lösen auch Probleme mit Reibung, Federn, mehreren Körpern oder veränderlichen Kräften.<br><br>
<b>Der Kern ist Schritt 4:</b> Newton II ist eine Differentialgleichung 2. Ordnung. Man muss nicht die Bahn „kennen“, sondern nur die Kräfte. Die Bahn folgt durch Integration, eindeutig festgelegt durch 6 Anfangsbedingungen.<br><br>
<b>Häufigste Fehlerquelle</b> ist Schritt 2: vergessene Kräfte (Normalkraft, Reibung) oder Kräfte, die gar nicht auf diesen Körper wirken (Reaktionskräfte auf andere Körper).<br><br>
<b>Zusammenhang Reibung:</b> Die drei Ansätze α–γ werden in 3.9.4 (Festkörperreibung), 3.9.5 (Stokes, Newton’scher Widerstand) und 3.9.6 (Bremsen mit $F\propto v$) ausgearbeitet. Wann man die Reibung beim freien Fall vernachlässigen darf: wenn die Fallgeschwindigkeit klein gegen die Endgeschwindigkeit $v_\infty$ ist.`,
    derivation: R`Das Rezept für den freien Fall ohne Reibung:
<ol class="fc-steps">
<li>Körper: Massenpunkt $m$; Kräfte: $\vec G = m\vec g = (0,0,-mg)$<em>Schritte 1–2. Reibung vorerst vernachlässigt; $g$ konstant, solange $h\ll R_E$.</em></li>
<li>Erdfestes System, $z$-Achse nach oben<em>Schritt 3: näherungsweise inertial, Fall entlang $z$ aus Symmetriegründen.</em></li>
<li>$m\ddot x = 0,\quad m\ddot y = 0,\quad m\ddot z = -mg$<em>Schritt 4: Newton komponentenweise (3.58 mit $R = 0$).</em></li>
<li>$x = C_1t + C_2,\quad y = C_3t+C_4,\quad z = -\tfrac12gt^2 + C_5t + C_6$<em>Schritt 5: zweimal integrieren; allgemeine Lösung mit 6 Konstanten (3.59).</em></li>
<li>$\vec r(0) = (0,0,h)\Rightarrow C_2 = C_4 = 0,\ C_6 = h$<em>Schritt 6, Ortsbedingungen (3.60).</em></li>
<li>$\vec v(0) = \vec 0\Rightarrow C_1 = C_3 = C_5 = 0$<em>Schritt 6, Geschwindigkeitsbedingungen (3.61); Ergebnis (3.62).</em></li>
</ol>`,
    example: R`<b>Senkrechter Wurf nach oben</b> mit demselben Rezept: Nur Schritt 6 ändert sich, $\dot z(0) = v_0$ ergibt $C_5 = v_0$:
$z(t) = h + v_0t - \tfrac12gt^2$. Mit $v_0 = 15\,\text{m/s}$: Steigzeit $v_0/g = 1{,}53\,\text{s}$, Steighöhe $v_0^2/(2g) = 11{,}5\,\text{m}$ über dem Abwurf.<br>
Die allgemeine Lösung (Schritt 5) bleibt dieselbe; das zeigt den Wert der Trennung „allgemeine Lösung / Anfangsbedingungen“.`,
    counterexample: R`<b>Rezept im falschen Bezugssystem:</b> Wählt man in Schritt 3 ein beschleunigtes System (z. B. den bremsenden Bus) und vergisst die Scheinkräfte, liefert Schritt 4 falsche Bewegungsgleichungen (3.11).<br>
<b>Veränderliche Masse:</b> Bei einer Rakete muss in Schritt 4 $\frac{d}{dt}(m\vec v) = \dot m\vec v + m\dot{\vec v}$ verwendet werden (Skript-Fussnote 9), sonst fehlt der Schub.`,
    pitfalls: R`<ul><li>Kräfte vergessen oder Kräfte einzeichnen, die auf andere Körper wirken.</li>
<li>Vorzeichen der Kraftkomponenten nicht zur gewählten Achsenrichtung passend wählen.</li>
<li>Anfangsbedingungen zu früh einsetzen und dadurch die allgemeine Lösung verlieren.</li>
<li>Reibung vernachlässigen, ohne die Annahme zu prüfen.</li></ul>`
  },

  // ========================================================================
  // 3.9 KONTAKTKRÄFTE
  // ========================================================================
  {
    id: "ph3_kraeftediagramm",
    title: "Kräftediagramm: zwei aufeinanderliegende Blöcke",
    category: "3.9 Anwendungen: Kontaktkräfte",
    type: "beispiel",
    front: R`Block A (Masse $M_A$) liegt auf Block B ($M_B$), B liegt auf dem Boden. Zeichne die <b>Kräftediagramme</b> und bestimme die Normalkräfte $\vec N_A$ (B auf A) und $\vec N_B$ (Boden auf B). Was zeigt eine Waage unter einem Körper an?`,
    back: R`<b>Regeln:</b> System in Teile zerlegen, jeder Teil ein Punkt; pro Massenpunkt <b>nur die Kräfte, die auf ihn wirken</b>; jede Kraft mit Betrag und Richtung. Den Boden betrachtet man hier nicht.<br><br>
<b>Fünf Kräfte:</b>
<ul><li>auf A: Gewicht $\vec F_A = M_A\vec g$, Normalkraft $\vec N_A$ (von B)</li>
<li>auf B: Gewicht $\vec F_B = M_B\vec g$, Normalkraft $\vec N_B$ (vom Boden), Kraft $\vec F_{AB}$ (von A)</li></ul>
<b>Gleichgewicht:</b>
$$M_A\vec g + \vec N_A = \vec 0,\qquad M_B\vec g + \vec N_B + \vec F_{AB} = \vec 0\qquad(3.63\text{–}3.65)$$
actio = reactio: $\vec F_{AB} = -\vec N_A$ (3.66), also
$$\vec N_A = -M_A\vec g,\qquad \vec N_B = -(M_A+M_B)\,\vec g\qquad(3.70,\,3.71)$$
Eine Waage zeigt den Betrag der <b>Normalkraft</b>: Als „Gewicht“ empfindet man die Kraft, die die Gravitation kompensiert und den Körper in Ruhe hält.`,
    meta: "Skript: Abschnitt 3.9.1, Gl. (3.63)–(3.71), Abb. 3.14–3.15, S. 55–58",
    explanation: R`<b>Intuition:</b> Der Boden muss <i>alles</i> tragen, was auf ihm steht; Block B muss nur A tragen. Das sieht man sofort, aber das Kräftediagramm zeigt, <i>wie</i> die Last weitergereicht wird: A drückt mit seinem Gewicht auf B ($\vec F_{AB}$), B leitet diese Kraft plus sein eigenes Gewicht an den Boden weiter.<br><br>
<b>Methodik:</b> Jeder Körper bekommt sein eigenes Diagramm („Freikörperbild“). Aktions-Reaktions-Paare erscheinen immer in <i>zwei verschiedenen</i> Diagrammen ($\vec N_A$ bei A, $\vec F_{AB}$ bei B). Das ist die Kontrolle, ob man sauber getrennt hat.<br><br>
<b>Zusammenhang:</b> Die Normalkraft ist keine feste Grösse wie $mg$, sie stellt sich so ein, wie es die Bewegung verlangt. Im beschleunigten Aufzug (3.10.3.2) oder auf der schiefen Ebene ($F_N = mg\cos\varphi$) ist sie anders, und damit auch die Reibung $F_R = \mu F_N$.`,
    derivation: R`<ol class="fc-steps">
<li>A: $M_A\vec g + \vec N_A = \vec 0\;\Rightarrow\;\vec N_A = -M_A\vec g$<em>A ruht, also verschwindet die Summe der Kräfte auf A (3.63). $\vec N_A$ zeigt nach oben ($\vec g$ nach unten).</em></li>
<li>B: $M_B\vec g + \vec N_B + \vec F_{AB} = \vec 0$<em>B ruht ebenfalls; auf B wirken drei Kräfte (3.64).</em></li>
<li>$\vec F_{AB} = -\vec N_A = M_A\vec g$<em>Newton III: A drückt auf B genau so stark, wie B A trägt (3.66).</em></li>
<li>$M_B\vec g + \vec N_B + M_A\vec g = \vec 0$<em>Einsetzen (3.68).</em></li>
<li>$\vec N_B = -(M_A+M_B)\,\vec g$<em>Der Boden trägt beide Blöcke (3.70).</em></li>
</ol>`,
    example: R`$M_A = 2\,\text{kg}$, $M_B = 5\,\text{kg}$: $N_A = 19{,}6\,\text{N}$, $N_B = 68{,}7\,\text{N}$.<br>
Stellt man B auf eine Waage, zeigt sie $68{,}7\,\text{N}$, umgerechnet „$7\,\text{kg}$“: Die Waage sieht nur die Normalkraft vom Boden, nicht, wie die Masse darüber verteilt ist.`,
    counterexample: R`<b>Kein Aktions-Reaktions-Paar:</b> $\vec F_A$ (Gewicht von A) und $\vec N_A$ sind zwar entgegengesetzt gleich, wirken aber auf denselben Körper A. Ihre Gleichheit folgt aus dem Gleichgewicht, nicht aus Newton III, und gilt nicht mehr, wenn das Ganze beschleunigt wird (z. B. im anfahrenden Aufzug).`,
    pitfalls: R`<ul><li>Kräfte auf den Boden ins Diagramm von B zeichnen.</li>
<li>$\vec F_{AB}$ vergessen und glauben, B trage nur sich selbst.</li>
<li>$N = mg$ immer automatisch annehmen; das gilt nur ohne vertikale Beschleunigung und ohne weitere vertikale Kräfte.</li>
<li>Gewicht und Normalkraft für ein Aktions-Reaktions-Paar halten.</li></ul>`
  },
  {
    id: "ph3_haengendes_gewicht",
    title: "Hängendes Gewicht an drei Fäden (30° / 45°)",
    category: "3.9 Anwendungen: Kontaktkräfte",
    type: "beispiel",
    front: R`Ein Gewicht der Masse $M$ hängt an einem Knoten, der mit zwei Fäden unter $30^\circ$ (Faden A) und $45^\circ$ (Faden B) zur Horizontalen an der Decke befestigt ist. Bestimme die <b>Fadenkräfte</b> $F_A$ und $F_B$.`,
    back: R`Der <b>Knoten</b> ist der „Körper“; auf ihn wirken $\vec F_A$, $\vec F_B$ und $\vec F_C = M\vec g$. Gleichgewicht:
$$\vec F_A + \vec F_B + \vec F_C = \vec F_A + \vec F_B - Mg\,\vec e_y = \vec 0\qquad(3.72)$$
Komponenten (A zeigt nach links oben, B nach rechts oben):
$$x:\ -F_A\cos30^\circ + F_B\cos45^\circ = 0,\qquad y:\ F_A\sin30^\circ + F_B\sin45^\circ - Mg = 0\qquad(3.74)$$
Lösung:
$$F_A = \frac{2Mg}{1+\sqrt3},\qquad F_B = \sqrt{\tfrac32}\,F_A\qquad(3.76)$$
$F_B>F_A$: Der steilere Faden trägt mehr.`,
    meta: "Skript: Abschnitt 3.9.2, Gl. (3.72)–(3.76), Abb. 3.16, S. 58–59",
    explanation: R`<b>Intuition:</b> Die beiden schrägen Fäden müssen zusammen das Gewicht tragen (vertikal) und sich gleichzeitig horizontal gegenseitig ausbalancieren. Der steilere Faden zeigt mehr nach oben und übernimmt deshalb den grösseren Teil der Last.<br><br>
<b>Warum den Knoten betrachten?</b> Am Knoten treffen alle drei Kräfte zusammen; er ist masselos und ruht. Das liefert die einfachste Gleichgewichtsbedingung. Der Faden C zieht einfach mit $Mg$ nach unten.<br><br>
<b>Abhängigkeit vom Winkel:</b> Je flacher die Fäden, desto grösser die Kräfte. Im symmetrischen Fall (beide unter $\theta$) gilt $F = \frac{Mg}{2\sin\theta}$, was für $\theta\to0$ divergiert. Eine Wäscheleine lässt sich deshalb nie ganz straff spannen.<br><br>
<b>Zusammenhang:</b> Dasselbe Vorgehen (Kräfte komponentenweise, Summe null) ist die Grundlage der Statik starrer Körper (Kap. 8.4), dort ergänzt um die Bedingung für die Drehmomente.`,
    derivation: R`<ol class="fc-steps">
<li>$-F_A\tfrac{\sqrt3}{2} + F_B\tfrac{\sqrt2}{2} = 0$<em>$x$-Gleichgewicht mit $\cos30^\circ = \frac{\sqrt3}{2}$, $\cos45^\circ = \frac{\sqrt2}{2}$ (3.75).</em></li>
<li>$F_B = F_A\dfrac{\sqrt3}{\sqrt2} = \sqrt{\tfrac32}\,F_A$<em>Nach $F_B$ auflösen.</em></li>
<li>$\tfrac12F_A + \tfrac{\sqrt2}{2}F_B = Mg$<em>$y$-Gleichgewicht mit $\sin30^\circ = \frac12$, $\sin45^\circ = \frac{\sqrt2}{2}$.</em></li>
<li>$\tfrac12F_A + \tfrac{\sqrt2}{2}\sqrt{\tfrac32}F_A = \tfrac12F_A + \tfrac{\sqrt3}{2}F_A = Mg$<em>$F_B$ einsetzen; $\sqrt2\cdot\sqrt{3/2} = \sqrt3$.</em></li>
<li>$F_A = \dfrac{2Mg}{1+\sqrt3}$<em>Ausklammern und auflösen (3.76).</em></li>
</ol>`,
    example: R`$M = 10\,\text{kg}$, $Mg = 98{,}1\,\text{N}$:<br>
$F_A = \frac{196{,}2}{2{,}732}\,\text{N} = 71{,}8\,\text{N}$, $F_B = 1{,}225\cdot71{,}8\,\text{N} = 87{,}9\,\text{N}$.<br>
Kontrolle vertikal: $71{,}8\cdot0{,}5 + 87{,}9\cdot0{,}707 = 35{,}9 + 62{,}2 = 98{,}1\,\text{N}$ ✓. Die Summe der Fadenkräfte ($159{,}7\,\text{N}$) ist <i>grösser</i> als das Gewicht.`,
    counterexample: R`<b>Fast horizontale Seile:</b> Ein Seil, symmetrisch unter $\theta = 5^\circ$ gespannt, mit $10\,\text{kg}$ in der Mitte: $F = \frac{98{,}1}{2\sin5^\circ}\,\text{N} = 563\,\text{N}$, fast sechsmal das Gewicht. Intuitiv „kleine“ Lasten können bei flachen Winkeln enorme Kräfte verursachen.`,
    pitfalls: R`<ul><li>$\sin$ und $\cos$ vertauschen: Massgeblich ist, ob der Winkel zur Horizontalen oder zur Vertikalen gemessen wird.</li>
<li>Annehmen, die Fadenkräfte addierten sich betragsmässig zum Gewicht.</li>
<li>Vorzeichen der $x$-Komponenten (links/rechts) vergessen.</li>
<li>Den Knoten nicht als eigenen „Körper“ wählen und dadurch Kräfte doppelt zählen.</li></ul>`
  },
  {
    id: "ph3_federkraft",
    title: "Federkraft (Hooke) und die Bewegung eines Federpendels",
    category: "3.9 Anwendungen: Kontaktkräfte",
    type: "herleitung",
    front: R`Wie lautet das <b>Hooke’sche Gesetz</b>? Stelle die Bewegungsgleichung für eine Masse an einer Feder auf und löse sie für die Anfangsbedingungen $x(0) = x_1$, $\dot x(0) = 0$.`,
    back: R`Zum Dehnen nötige Kraft (innerhalb der Elastizitätsgrenze): $F = k(x-x_0)$ (3.77), $k$ = Federkonstante, $x_0$ = Ruhelage. Die <b>Rückstellkraft</b> der Feder ist entgegengesetzt: $F_R = -k(x-x_0)$. Damit
$$m\ddot x = -k(x-x_0)\qquad(3.78)$$
Mit $\xi = x - x_0$ ($d\xi = dx$):
$$\ddot\xi = -\frac{k}{m}\xi\qquad(3.80)$$
Allgemeine Lösung (Funktion, die bis auf eine Konstante gleich ihrer 2. Ableitung ist):
$$\xi(t) = A\sin\omega t + B\cos\omega t,\qquad \omega^2 = \frac{k}{m}\qquad(3.81\text{–}3.83)$$
Mit $x(0) = x_1$ und $\dot x(0) = 0$: $B = x_1 - x_0$, $A = 0$, also
$$x(t) = x_0 + (x_1-x_0)\cos\omega t\qquad(3.88)$$
Die Federkraft ist nicht elementar; sie geht auf elektromagnetische Kräfte zwischen Atomen zurück.`,
    meta: "Skript: Abschnitt 3.9.3, Gl. (3.77)–(3.88), Abb. 3.17, S. 59–61",
    explanation: R`<b>Intuition:</b> Die Feder zieht die Masse immer zur Ruhelage zurück, umso stärker, je weiter sie ausgelenkt ist. Wegen der Trägheit schiesst die Masse über die Ruhelage hinaus; es entsteht eine Schwingung.<br><br>
<b>Abhängigkeiten:</b> $\omega = \sqrt{k/m}$: steifere Feder ergibt schnellere Schwingung, grössere Masse eine langsamere. Die Periode $T = 2\pi\sqrt{m/k}$ ist <b>unabhängig von der Amplitude</b>. Das ist eine Besonderheit der linearen Kraft.<br><br>
<b>Warum ist Hooke so wichtig?</b> Fast jede Kraft um ein stabiles Gleichgewicht lässt sich für kleine Auslenkungen linear nähern (Taylor: $F(x)\approx F'(x_0)(x-x_0)$). Deshalb ist das Federpendel das Modell für <i>alle</i> kleinen Schwingungen (Kap. 9: harmonischer Oszillator).<br><br>
<b>Zusammenhang:</b> Die zugehörige potentielle Energie ist $V = \tfrac12k(x-x_0)^2$ (Kap. 4), eine Parabel.`,
    derivation: R`<ol class="fc-steps">
<li>$m\ddot x = -k(x-x_0)$<em>Newton II mit der Rückstellkraft als einziger horizontaler Kraft (3.78).</em></li>
<li>$\xi := x-x_0,\quad \ddot\xi = \ddot x$<em>Koordinate ab der Ruhelage; $x_0$ ist konstant und fällt beim Ableiten weg (3.79).</em></li>
<li>$\ddot\xi = -\dfrac{k}{m}\xi$<em>Lineare homogene DGL 2. Ordnung (3.80).</em></li>
<li>$\xi = A\sin\omega t + B\cos\omega t\;\Rightarrow\;\ddot\xi = -\omega^2\xi$<em>Ansatz: $\sin$ und $\cos$ reproduzieren sich nach zweimaligem Ableiten bis auf $-\omega^2$ (3.81, 3.82).</em></li>
<li>$\omega^2 = k/m$<em>Koeffizientenvergleich mit Schritt 3 (3.83).</em></li>
<li>$x(0) = x_0 + B = x_1\;\Rightarrow\;B = x_1-x_0$<em>Erste Anfangsbedingung (3.85).</em></li>
<li>$\dot x(0) = A\omega = 0\;\Rightarrow\;A = 0$<em>Zweite Anfangsbedingung: losgelassen aus der Ruhe (3.86, 3.87); Ergebnis (3.88).</em></li>
</ol>`,
    example: R`$k = 200\,\text{N/m}$, $m = 0{,}50\,\text{kg}$, um $5\,\text{cm}$ ausgelenkt und losgelassen:<br>
$\omega = \sqrt{400}\,\text{s}^{-1} = 20\,\text{s}^{-1}$, $T = 2\pi/\omega = 0{,}314\,\text{s}$, $x(t) - x_0 = 5\,\text{cm}\cdot\cos(20\,\text{s}^{-1}\,t)$.<br>
Maximale Geschwindigkeit beim Durchgang durch $x_0$: $v_\text{max} = \omega\cdot5\,\text{cm} = 1{,}0\,\text{m/s}$. Mit $4m$ (2 kg) wäre $T$ doppelt so lang.`,
    counterexample: R`<b>Jenseits der Elastizitätsgrenze</b> verformt sich die Feder plastisch; $F$ ist nicht mehr proportional zur Auslenkung, und die Periode hängt von der Amplitude ab.<br>
<b>Gummiband:</b> Es lässt sich ziehen, aber nicht drücken. Die Kraft ist für $x<x_0$ null, also gilt Hooke nur auf einer Seite, und die Bewegung ist keine reine Kosinusschwingung.`,
    pitfalls: R`<ul><li>Das Minuszeichen der Rückstellkraft vergessen; ohne es wächst die Lösung exponentiell statt zu schwingen.</li>
<li>$\omega$ (Kreisfrequenz) und $\nu = \omega/2\pi$ verwechseln.</li>
<li>$\xi$ und $x$ mischen: Die Ruhelage $x_0$ muss am Ende wieder addiert werden.</li>
<li>Die Konstanten $A$, $B$ vor dem Ableiten „festlegen“; erst die allgemeine Lösung ableiten, dann die Bedingungen einsetzen.</li></ul>`
  },
  {
    id: "ph3_haftreibung",
    title: "Haftreibung und die schiefe Ebene: tan φ ≤ μ₀",
    category: "3.9 Anwendungen: Kontaktkräfte",
    type: "gesetz",
    front: R`Wie lautet das Gesetz der <b>Haftreibung</b>? Zeige, dass ein Block auf einer schiefen Ebene (Neigung $\varphi$) genau so lange haftet, wie $\tan\varphi\le\mu_0$ gilt, unabhängig von seinem Gewicht.`,
    back: R`Reibungskräfte sind nicht elementar (elektromagnetische Wechselwirkung der Oberflächenatome) und wirken <b>parallel zur Berührungsfläche</b>.
$$F_R\le\mu_0F_N\qquad(3.89)$$
$\mu_0$: Haftreibungskoeffizient, in 1. Näherung unabhängig von der Grösse der Auflagefläche, abhängig von Materialpaarung und Oberfläche (nicht für Reifen, die sich eher wie eine hochviskose Flüssigkeit verhalten).<br><br>
<b>Schiefe Ebene</b> (Abb. 3.19), Gleichgewicht:
$$\text{horizontal: } F_R\cos\varphi - F_N\sin\varphi = 0,\qquad\text{vertikal: } F_R\sin\varphi + F_N\cos\varphi = F_G\qquad(3.91)$$
$$\Rightarrow\quad\frac{F_R}{F_N} = \frac{\sin\varphi}{\cos\varphi} = \tan\varphi = \frac{h}{\ell}\le\mu_0\qquad(3.92)$$
Der Körper haftet, solange die Ungleichung gilt. Das Ergebnis ist unabhängig von $F_G$, denn ein grösseres Gewicht erzeugt eine grössere Normalkraft.`,
    meta: "Skript: Abschnitt 3.9.4.1, Gl. (3.89)–(3.92), Abb. 3.18–3.19, S. 61–62",
    explanation: R`<b>Intuition:</b> Haftreibung ist eine „Reaktionskraft mit Obergrenze“. Sie ist genau so gross, wie nötig ist, um Gleiten zu verhindern, aber höchstens $\mu_0F_N$. Auf einer flachen Ebene ist sie null; beim Ziehen wächst sie mit, bis die Grenze erreicht ist.<br><br>
<b>Warum unabhängig vom Gewicht?</b> Hangabtrieb ($mg\sin\varphi$) und maximale Reibung ($\mu_0mg\cos\varphi$) sind beide proportional zu $m$. Die Masse kürzt sich: Ob ein Körper rutscht, hängt nur von $\varphi$ und $\mu_0$ ab.<br><br>
<b>Messmethode:</b> Ebene langsam kippen, bis der Block gerade rutscht: $\mu_0 = \tan\varphi_\text{grenz}$.<br><br>
<b>Zusammenhang:</b> Haftreibung ermöglicht Gehen, Autofahren und Kurvenfahrt (Zentripetalkraft durch Reibung: $v_\text{max} = \sqrt{\mu_0 g\rho}$) und das reine Rollen (Kap. 8.5.9).`,
    derivation: R`<ol class="fc-steps">
<li>$F_R\cos\varphi - F_N\sin\varphi = 0$<em>Horizontale Kräftebilanz: Reibung zeigt hangaufwärts, die Normalkraft senkrecht zur Ebene (3.91).</em></li>
<li>$F_R\sin\varphi + F_N\cos\varphi = F_G$<em>Vertikale Bilanz: Beide Kräfte zusammen tragen das Gewicht.</em></li>
<li>$\dfrac{F_R}{F_N} = \dfrac{\sin\varphi}{\cos\varphi} = \tan\varphi$<em>Aus Gleichung 1 direkt (3.92).</em></li>
<li>$F_N = F_G\cos\varphi,\quad F_R = F_G\sin\varphi$<em>Einsetzen in Gleichung 2 liefert die Einzelkräfte (äquivalent: Zerlegung parallel/senkrecht zur Ebene).</em></li>
<li>$F_R\le\mu_0F_N\iff\tan\varphi\le\mu_0$<em>Haftbedingung (3.89) einsetzen; $F_G$ kürzt sich.</em></li>
</ol>`,
    example: R`Holz auf Holz: $\mu_0 = 0{,}4\dots0{,}6$ (Tab. 3.3), also $\varphi_\text{grenz} = \arctan\mu_0 = 21{,}8^\circ\dots31{,}0^\circ$.<br>
Ein Block ($5\,\text{kg}$) auf $20^\circ$ mit $\mu_0 = 0{,}5$: benötigte Haftreibung $F_R = 49{,}1\cdot\sin20^\circ\,\text{N} = 16{,}8\,\text{N}$, verfügbar $\mu_0F_N = 0{,}5\cdot49{,}1\cdot\cos20^\circ\,\text{N} = 23{,}1\,\text{N}$: Er haftet.`,
    counterexample: R`<b>$F_R = \mu_0F_N$ gilt nicht immer:</b> Ein Buch auf einem waagrechten Tisch erfährt <i>keine</i> Reibungskraft ($F_R = 0$), obwohl $\mu_0F_N>0$. Haftreibung ist nur eine Obergrenze.<br>
<b>Reifen:</b> Gummi verhält sich eher wie eine hochviskose Flüssigkeit; die Flächenunabhängigkeit von $\mu_0$ gilt hier nicht (Fussnote 14), Profil, Breite und Temperatur spielen mit.`,
    pitfalls: R`<ul><li>$F_R = \mu_0F_N$ als Gleichung statt als Ungleichung verwenden.</li>
<li>$F_N = mg$ auf der schiefen Ebene einsetzen; richtig ist $F_N = mg\cos\varphi$.</li>
<li>Die Richtung der Reibung falsch wählen: Sie wirkt der (drohenden) Relativbewegung entgegen.</li>
<li>$\mu_0$ als „Kraft“ statt als dimensionslosen Koeffizienten behandeln.</li></ul>`
  },
  {
    id: "ph3_gleitreibung",
    title: "Gleitreibung F_R = μF_N und das Gleiten auf der schiefen Ebene",
    category: "3.9 Anwendungen: Kontaktkräfte",
    type: "gesetz",
    front: R`Wie lautet das Gesetz der <b>Gleitreibung</b>, und wie verhält sich $\mu$ zu $\mu_0$? Skizziere $F_R$ als Funktion der angewandten Kraft $F$. Welche Beschleunigung hat ein Block, der eine schiefe Ebene hinuntergleitet?`,
    back: R`$$F_R = \mu F_N\qquad(3.93)$$
$\mu$: Gleitreibungskoeffizient, in 1. Näherung unabhängig von Auflagefläche und Geschwindigkeit. Meist gilt
$$\mu_0>\mu\qquad(3.94)$$
<b>Verlauf</b> (Abb. 3.20): Solange der Körper haftet, wächst $F_R = F$ linear mit der Zugkraft bis $\mu_0F_N$. Beim Losreissen fällt die Reibung auf den kleineren, konstanten Wert $\mu F_N$.<br><br>
Tabelle 3.3: Stahl auf Stahl glatt $\mu_0 = 0{,}15$, $\mu = 0{,}15$; gefettet $\mu_0 = 0{,}10$, $\mu = 0{,}01$; Holz auf Holz $\mu_0 = 0{,}4\dots0{,}6$, $\mu = 0{,}2\dots0{,}4$.<br><br>
<b>Gleiten auf der schiefen Ebene</b> (Neigung $\varphi$):
$$a = g\,(\sin\varphi - \mu\cos\varphi)$$`,
    meta: "Skript: Abschnitt 3.9.4.2, Gl. (3.93)–(3.94), Abb. 3.20, Tab. 3.3, S. 62–63",
    explanation: R`<b>Intuition:</b> Ruhende Oberflächen „verzahnen“ sich mikroskopisch stärker (mehr Zeit, Kontaktstellen auszubilden). Ist der Körper einmal in Bewegung, reisst er diese Bindungen immer wieder, bevor sie sich ganz ausbilden. Deshalb ist $\mu<\mu_0$: Anschieben ist schwerer als Weiterschieben.<br><br>
<b>Abhängigkeiten:</b> $F_R\propto F_N$, aber (näherungsweise) unabhängig von Fläche und Geschwindigkeit. Die Gleitreibung ist immer <b>entgegengesetzt zur Relativgeschwindigkeit</b> gerichtet.<br><br>
<b>Ruckgleiten (Stick-Slip):</b> Der Wechsel zwischen $\mu_0$ und $\mu$ erklärt quietschende Türen, Kreide an der Tafel und den Geigenbogen.<br><br>
<b>Zusammenhang:</b> Gleitreibung wandelt mechanische Energie in Wärme um; sie ist eine <b>nichtkonservative</b> Kraft (Kap. 4.4). Für ABS: Ein rollender Reifen nutzt die Haftreibung ($\mu_0$), ein blockierter nur die Gleitreibung ($\mu$). Deshalb bremst ein nicht blockierendes Rad besser.`,
    derivation: R`Gleitender Block auf der schiefen Ebene, $x$-Achse hangabwärts:
<ol class="fc-steps">
<li>$F_N = mg\cos\varphi$<em>Senkrecht zur Ebene keine Beschleunigung: Die Normalkraft kompensiert die Normalkomponente des Gewichts.</em></li>
<li>$F_\parallel = mg\sin\varphi$<em>Hangabtriebskraft: Komponente des Gewichts entlang der Ebene.</em></li>
<li>$F_R = \mu F_N = \mu mg\cos\varphi$, hangaufwärts<em>Gleitreibung gegen die Bewegungsrichtung (3.93).</em></li>
<li>$ma = mg\sin\varphi - \mu mg\cos\varphi$<em>Newton II entlang der Ebene.</em></li>
<li>$a = g(\sin\varphi - \mu\cos\varphi)$<em>Masse kürzt sich. Für $\tan\varphi = \mu$ gleitet der Block mit konstanter Geschwindigkeit.</em></li>
</ol>`,
    example: R`$\varphi = 30^\circ$, $\mu = 0{,}30$: $a = 9{,}81\,(0{,}500 - 0{,}30\cdot0{,}866)\,\text{m/s}^2 = 2{,}36\,\text{m/s}^2$ (ohne Reibung $4{,}91\,\text{m/s}^2$).<br>
Nach $2\,\text{m}$ aus der Ruhe: $v = \sqrt{2\cdot2{,}36\cdot2}\,\text{m/s} = 3{,}07\,\text{m/s}$.<br><br>
<b>Konstanter Zug auf ebener Fläche:</b> Kiste $40\,\text{kg}$, $\mu = 0{,}3$: Man braucht $F = 0{,}3\cdot392\,\text{N} = 118\,\text{N}$, um sie gleichförmig zu ziehen; zum Losreissen mit $\mu_0 = 0{,}5$ dagegen $196\,\text{N}$.`,
    counterexample: R`<b>$\tan\varphi\lt\mu$:</b> Ein angestossener Block wird auf der flachen Ebene langsamer und bleibt stehen ($a\lt0$ hangabwärts). Die Formel liefert dann eine Verzögerung; einmal gestoppt, gilt wieder die Haftreibung, und der Block bleibt liegen (sofern $\tan\varphi\le\mu_0$).<br>
<b>Hohe Geschwindigkeiten:</b> Bei sehr schnellem Gleiten (z. B. Bremsscheiben) nimmt $\mu$ oft ab (Fading). Die Geschwindigkeitsunabhängigkeit ist nur eine Näherung.`,
    pitfalls: R`<ul><li>$\mu_0$ und $\mu$ verwechseln.</li>
<li>Die Reibung in Bewegungsrichtung statt dagegen einzeichnen.</li>
<li>$F_N = mg$ statt $mg\cos\varphi$ auf der Schräge.</li>
<li>Vergessen, dass ein stehengebliebener Block wieder der Haftreibung unterliegt.</li></ul>`
  },
  {
    id: "ph3_stroemungswiderstand",
    title: "Strömungswiderstand: Stokes (∝ v) und Newton (∝ v²), Endgeschwindigkeit",
    category: "3.9 Anwendungen: Kontaktkräfte",
    type: "gesetz",
    front: R`Wie beschreibt man die <b>Reibung in Fluiden</b>? Gib das Gesetz für kleine und für grosse Geschwindigkeiten sowie das <b>Stokes’sche Gesetz</b> an, und leite in beiden Fällen die <b>Endgeschwindigkeit</b> eines fallenden Körpers her.`,
    back: R`Potenzreihe in der Geschwindigkeit relativ zum Medium (3.95): $|\vec F_R| = \sum_i a_iv^i$ mit $a_0 = 0$ (ruhender Körper erfährt keine Reibung). Meist genügen zwei Terme:
$$|\vec F_R| = \begin{cases}\kappa v & \text{kleine } v\\[2pt] \dfrac{\rho}{2}c_WAv^2 & \text{grosse } v\end{cases}\qquad(3.96)$$
($c_W$ Widerstandsbeiwert, $A$ Querschnittsfläche, $\rho$ Dichte des Fluids.)<br>
<b>Stokes</b> (Kugel, Radius $r$, Viskosität $\eta$):
$$\vec F_R = -(6\pi\eta r)\,\vec v\qquad(3.97)$$
<b>Endgeschwindigkeit</b> (Gewicht = Widerstand, ohne Auftrieb):
$$v_\infty = \frac{mg}{6\pi\eta r}\ (\text{Stokes}),\qquad v_\infty = \sqrt{\frac{2mg}{\rho\,c_W A}}\ (\text{quadratisch})$$`,
    meta: "Skript: Abschnitt 3.9.5, Gl. (3.95)–(3.97), S. 64; Reibungsansätze β/γ in (3.57)",
    explanation: R`<b>Intuition:</b> Bei kleinen Geschwindigkeiten dominiert die innere Reibung (Viskosität): Das Fluid wird „zäh“ mitgeschleppt, $F\propto v$. Bei grossen Geschwindigkeiten muss der Körper ständig Fluid beschleunigen und verwirbeln. Die pro Zeit verdrängte Masse ($\propto\rho Av$) mal die übertragene Geschwindigkeit ($\propto v$) ergibt $F\propto\rho Av^2$.<br><br>
<b>Abhängigkeiten:</b>
<ul><li>Stokes: $v_\infty\propto m/r$. Für eine Kugel mit Dichte $\rho_K$ ist $m\propto r^3$, also $v_\infty\propto r^2$: Kleine Tröpfchen schweben fast (Nebel, Wolken).</li>
<li>Quadratisch: $v_\infty\propto\sqrt{m/A}$. Fallschirm: grosses $A$ ergibt kleines $v_\infty$.</li>
<li>Leistung gegen den Luftwiderstand: $P = Fv\propto v^3$. Doppelte Geschwindigkeit kostet achtfache Leistung.</li></ul>
<b>Zusammenhang:</b> Mit $F\propto v$ ist die Bewegungsgleichung linear und exakt lösbar (exponentielle Annäherung an $v_\infty$, vgl. 3.9.6); mit $v^2$ ist sie nichtlinear (Lösung mit $\tanh$).`,
    derivation: R`Endgeschwindigkeit: Sie ist erreicht, wenn die Beschleunigung verschwindet.
<ol class="fc-steps">
<li>$m\dot v = mg - F_R(v)$<em>Newton II beim Fall (Achse nach unten), Auftrieb vernachlässigt.</em></li>
<li>$\dot v = 0\;\Rightarrow\;F_R(v_\infty) = mg$<em>Im stationären Zustand gleichen sich Gewicht und Widerstand aus.</em></li>
<li>Stokes: $6\pi\eta r\,v_\infty = mg\;\Rightarrow\;v_\infty = \dfrac{mg}{6\pi\eta r}$<em>Lineares Gesetz einsetzen und auflösen.</em></li>
<li>Kugel: $m = \tfrac43\pi r^3\rho_K\;\Rightarrow\;v_\infty = \dfrac{2r^2\rho_Kg}{9\eta}$<em>Masse über die Dichte ausdrücken; $v_\infty\propto r^2$.</em></li>
<li>Quadratisch: $\tfrac12\rho c_WAv_\infty^2 = mg\;\Rightarrow\;v_\infty = \sqrt{\dfrac{2mg}{\rho c_WA}}$<em>Quadratisches Gesetz einsetzen; die positive Wurzel ist physikalisch.</em></li>
</ol>`,
    example: R`<b>Fallschirmspringer</b> ohne Schirm: $m = 80\,\text{kg}$, $c_W\approx1{,}0$, $A\approx0{,}7\,\text{m}^2$, $\rho_\text{Luft} = 1{,}2\,\text{kg/m}^3$: $v_\infty = \sqrt{\frac{2\cdot80\cdot9{,}81}{1{,}2\cdot1{,}0\cdot0{,}7}}\,\text{m/s}\approx43\,\text{m/s}\approx155\,\text{km/h}$.<br><br>
<b>Nebeltröpfchen</b> ($r = 10\,\mu\text{m}$, $\eta_\text{Luft} = 1{,}8\cdot10^{-5}\,\text{Pa s}$): $v_\infty = \frac{2\cdot10^{-10}\cdot1000\cdot9{,}81}{9\cdot1{,}8\cdot10^{-5}}\,\text{m/s}\approx1{,}2\,\text{cm/s}$. Deshalb bleiben Wolken in der Luft.`,
    counterexample: R`<b>Stokes ausserhalb seines Bereichs:</b> Für einen Regentropfen von $2\,\text{mm}$ Radius würde Stokes $v_\infty\approx480\,\text{m/s}$ liefern. Tatsächlich fallen solche Tropfen mit etwa $9\,\text{m/s}$. Bei grossen Tropfen ist die Strömung turbulent, und das quadratische Gesetz gilt.`,
    pitfalls: R`<ul><li>$v$ relativ zum Boden statt relativ zum Medium einsetzen (Gegenwind!).</li>
<li>Stokes auf grosse, schnelle Körper anwenden.</li>
<li>Den Auftrieb vergessen, wenn die Dichten von Körper und Fluid ähnlich sind (Kugel in Öl).</li>
<li>$\rho$ (Fluiddichte) mit der Dichte des Körpers verwechseln.</li></ul>`
  },
  {
    id: "ph3_bremsweg_nass",
    title: "Bremsen mit geschwindigkeitsproportionaler Reibung: v = v₀e^{−αt}",
    category: "3.9 Anwendungen: Kontaktkräfte",
    type: "herleitung",
    front: R`Ein Fahrzeug wird durch eine Reibungskraft $F_R = -\kappa\dot x$ gebremst („feuchte Reibung“). Löse die Bewegungsgleichung durch <b>Trennung der Variablen</b>. Wie lauten $v(t)$ und $x(t)$, und wie weit kommt es insgesamt?`,
    back: R`$$m\ddot x = -\kappa\dot x\quad\Rightarrow\quad\ddot x = -\alpha\dot x,\qquad \alpha = \frac{\kappa}{m}\qquad(3.99\text{–}3.101)$$
Da $x$ selbst nicht vorkommt, rechnet man mit $v = \dot x$: $\dot v + \alpha v = 0$ (3.102).<br>
Lösung (mit $v(0) = v_0$, $x(0) = 0$):
$$v(t) = v_0\,e^{-\alpha t}\qquad(3.108)$$
$$x(t) = \frac{v_0}{\alpha}\left(1-e^{-\alpha t}\right)\qquad(3.110)$$
Für $t\to\infty$: $v\to0$ und $x\to x_\infty = \dfrac{v_0}{\alpha} = \dfrac{mv_0}{\kappa}$. Der Bremsweg ist endlich, obwohl der Wagen nie ganz stillsteht.`,
    meta: "Skript: Abschnitt 3.9.6, Gl. (3.98)–(3.110), Abb. 3.21, S. 64–66",
    explanation: R`<b>Intuition:</b> Die Bremskraft ist proportional zur Geschwindigkeit. Je langsamer das Fahrzeug, desto schwächer wird es gebremst. Daraus entsteht ein exponentieller Abfall: In jedem Zeitintervall $1/\alpha$ sinkt $v$ um den Faktor $e$.<br><br>
<b>Abhängigkeiten:</b>
<ul><li>Zeitkonstante $\tau = 1/\alpha = m/\kappa$: schwerer heisst langsamer gebremst, grösseres $\kappa$ heisst schneller.</li>
<li>Gesamtweg $x_\infty = v_0\tau\propto v_0$, <b>linear</b> in der Anfangsgeschwindigkeit. Bei Festkörperreibung (konstante Kraft) wäre der Bremsweg dagegen $\propto v_0^2$.</li></ul>
<b>Methode:</b> „Trennung der Variablen“ ist das Standardverfahren für DGLs der Form $\dot v = f(v)\,g(t)$ (Anhang 12.3).<br><br>
<b>Zusammenhang:</b> Dieselbe DGL beschreibt radioaktiven Zerfall, die Entladung eines Kondensators und die Dämpfung beim gedämpften Oszillator (Kap. 9.3).`,
    derivation: R`<ol class="fc-steps">
<li>$\dfrac{dv}{dt} = -\alpha v$<em>Bewegungsgleichung für die Geschwindigkeit (3.103).</em></li>
<li>$\dfrac{dv}{v} = -\alpha\,dt$<em>Variablen trennen: alles mit $v$ links, alles mit $t$ rechts (3.104).</em></li>
<li>$\displaystyle\int_{v_0}^{v}\frac{dv'}{v'} = -\alpha\int_{t_0}^{t}dt'$<em>Beide Seiten zwischen zusammengehörigen Grenzen integrieren (3.105).</em></li>
<li>$\ln v - \ln v_0 = -\alpha(t-t_0)$<em>Stammfunktion von $1/v$ ist $\ln v$ (3.106).</em></li>
<li>$v(t) = v_0e^{-\alpha(t-t_0)}$<em>Exponentieren; mit $t_0 = 0$ folgt (3.108).</em></li>
<li>$x(t) = \displaystyle\int_0^tv_0e^{-\alpha t'}dt' = \frac{v_0}{\alpha}\left[-e^{-\alpha t'}\right]_0^t = \frac{v_0}{\alpha}\left(1-e^{-\alpha t}\right)$<em>Ort durch Integration der Geschwindigkeit mit $x(0) = 0$ (3.109, 3.110).</em></li>
</ol>`,
    example: R`$v_0 = 20\,\text{m/s}$, $\alpha = 0{,}5\,\text{s}^{-1}$ ($\tau = 2\,\text{s}$):<br>
nach $2\,\text{s}$: $v = 20e^{-1} = 7{,}4\,\text{m/s}$, $x = 40(1-e^{-1}) = 25{,}3\,\text{m}$;<br>
nach $6\,\text{s}$: $v = 1{,}0\,\text{m/s}$, $x = 38{,}0\,\text{m}$;<br>
Grenzwert: $x_\infty = 40\,\text{m}$. Nach $3\tau$ sind 95 % des Weges zurückgelegt.`,
    counterexample: R`<b>Reales Auto:</b> Es kommt in endlicher Zeit zum Stehen, weil bei kleinen Geschwindigkeiten die Festkörperreibung (konstante Kraft $\mu F_N$, unabhängig von $v$) dominiert. Das reine $\kappa v$-Modell, in dem man nie ganz stillsteht, ist dort ungültig.<br>
<b>Quadratischer Widerstand</b> ($F\propto v^2$): Hier ist $v(t) = \frac{v_0}{1+v_0\beta t}$, ein viel langsamerer Abfall, und $x(t)$ wächst logarithmisch <i>ohne Grenze</i>.`,
    pitfalls: R`<ul><li>Beim Trennen der Variablen die Integrationsgrenzen nicht zusammenpassend setzen ($v_0\leftrightarrow t_0$).</li>
<li>Logarithmengesetze: $\ln v - \ln v_0 = \ln(v/v_0)$.</li>
<li>Annehmen, das Fahrzeug stehe nach der Zeit $\tau$ still.</li>
<li>$F_R$ hier als 1D-Grösse mit Vorzeichen lesen, nicht als Betrag (Skript-Fussnote 16).</li></ul>`
  },

  // ========================================================================
  // 3.10 KRAFTFELDER
  // ========================================================================
  {
    id: "ph3_kraftfeld",
    title: "Kraftfelder, Kopplungskonstante und spezifisches Feld",
    category: "3.10 Kraftfelder",
    type: "definition",
    front: R`Was ist ein <b>Kraftfeld</b> $\vec F(\vec r,t)$, und warum führt man es ein? Was bedeuten <b>Kopplungskonstante</b> $\gamma$ und <b>spezifisches Feld</b> $\vec f(\vec r,t)$? Was ist ein statisches Feld?`,
    back: R`Viele-Teilchen-Probleme sind meist nicht lösbar (schon das Drei-Körper-Gravitationsproblem nicht analytisch). <b>Vereinfachung:</b> Man trennt $n$ Teilchen in $n-1$ plus 1. Die $n-1$ Teilchen erzeugen eine effektive Wechselwirkung auf das $n$-te; dessen Rückwirkung wird vernachlässigt.<br><br>
<b>Kraftfeld:</b> die Kraft auf ein Probeteilchen in Abhängigkeit von Ort (und Zeit): $\vec F(x,y,z,t) = \vec F(\vec r,t)$. <b>Statisch:</b> $\vec F(\vec r,t) = \vec F(\vec r)$ für alle $t$ (3.111).<br><br>
Zerlegung:
$$\vec F(\vec r,t) = \gamma\,\vec f(\vec r,t)\qquad(3.112)$$
<ul><li>$\gamma$: <b>Kopplungskonstante</b>, nur eine Eigenschaft des Probeteilchens (z. B. Masse $m$ oder Ladung $q$); $\gamma = 0$ heisst, das Teilchen spürt das Feld nicht.</li>
<li>$\vec f = \vec F/\gamma$: <b>spezifisches Feld</b>, beschreibt nur die Wirkung der übrigen $n-1$ Teilchen; ein Feld für alle Probeteilchen.</li></ul>
Beispiele: Gravitation $\gamma = m$, $\vec f = \vec g$; Coulomb $\gamma = q$, $\vec f = \vec E$.`,
    meta: "Skript: Abschnitt 3.10.1, Gl. (3.111)–(3.112), S. 66–67",
    explanation: R`<b>Intuition:</b> Statt jede Kraft zwischen allen Paaren einzeln zu berechnen, stellt man sich vor, die Quellen erfüllen den Raum mit einer Eigenschaft (dem Feld). Ein Probeteilchen „liest“ das Feld an seinem Ort ab und multipliziert mit seiner eigenen Kopplung.<br><br>
<b>Warum ist das praktisch?</b> Das Feld muss nur einmal berechnet werden und gilt für jedes Probeteilchen. Felder mehrerer Quellen addieren sich vektoriell (Superpositionsprinzip, 3.10.2).<br><br>
<b>Wann ist die Rückwirkung vernachlässigbar?</b> Wenn das Probeteilchen viel „schwächer“ ist als die Quelle: Die Erde beschleunigt einen Menschen viel stärker als der Mensch die Erde ($a_M/a_m = m/M$, 3.121).<br><br>
<b>Zusammenhang:</b> Konservative Kraftfelder lassen sich aus einem skalaren Potential ableiten, $\vec F = -\nabla V$ (Kap. 4.4). Die Feldlinien folgen der Feldrichtung, und die Äquipotentialflächen stehen senkrecht auf ihnen (Abb. 3.22, 3.24).`,
    derivation: R`Warum ein einziges spezifisches Feld für alle Probeteilchen reicht:
<ol class="fc-steps">
<li>$\vec F_1 = \gamma_1\vec f(\vec r),\quad\vec F_2 = \gamma_2\vec f(\vec r)$<em>Zwei verschiedene Probeteilchen am selben Ort.</em></li>
<li>$\dfrac{\vec F_1}{\gamma_1} = \dfrac{\vec F_2}{\gamma_2} = \vec f(\vec r)$<em>Die normierte Kraft hängt nicht vom Probeteilchen ab, nur von den Quellen und vom Ort.</em></li>
<li>Gravitation: $\vec F = m\left(-G_N\dfrac{M}{r^2}\hat r\right) = m\,\vec g(\vec r)$<em>$\gamma = m$ (schwere Masse), $\vec f = \vec g$ in $\text{N/kg} = \text{m/s}^2$ (3.117).</em></li>
<li>Coulomb: $\vec F = q\left(\dfrac{1}{4\pi\varepsilon_0}\dfrac{Q}{r^2}\hat r\right) = q\,\vec E(\vec r)$<em>$\gamma = q$, $\vec f = \vec E$ in N/C (3.113).</em></li>
<li>$\vec a = \dfrac{\gamma}{m}\vec f$<em>Mit Newton II. Bei der Gravitation ist $\gamma/m = 1$, alle fallen gleich; beim elektrischen Feld hängt $\vec a$ von $q/m$ ab.</em></li>
</ol>`,
    example: R`Am Erdboden ist $|\vec g| = 9{,}81\,\text{N/kg}$. Ein $70\text{-kg}$-Mensch erfährt $687\,\text{N}$, ein $5\text{-g}$-Spatz $0{,}049\,\text{N}$. Das Feld ist für beide dasselbe, nur die Kopplung $m$ ist verschieden.<br><br>
<b>Rückwirkung:</b> Mensch ($70\,\text{kg}$) und Erde ($6\cdot10^{24}\,\text{kg}$): Das Verhältnis der Beschleunigungen ist $a_\text{Erde}/a_\text{Mensch} = 1{,}2\cdot10^{-23}$, die Rückwirkung ist völlig vernachlässigbar.`,
    counterexample: R`<b>Erde–Mond:</b> Der Mond ist kein Probeteilchen. Seine Masse ist etwa $1/81$ der Erdmasse, und die Erde bewegt sich merklich um den gemeinsamen Schwerpunkt (etwa $4700\,\text{km}$ vom Erdmittelpunkt). Die Rückwirkung zu vernachlässigen, wäre hier falsch. Man muss das Zweikörperproblem lösen (Kap. 6.6, 7).`,
    pitfalls: R`<ul><li>Feld und Kraft verwechseln: $\vec E$ ist Kraft <i>pro Ladung</i>, $\vec g$ Kraft <i>pro Masse</i>.</li>
<li>Das Feld des Probeteilchens selbst zur Kraft auf es dazuzählen.</li>
<li>„Feld = Feldlinien“: Feldlinien sind nur eine Veranschaulichung der Richtung; die Stärke steckt in ihrer Dichte.</li></ul>`
  },
  {
    id: "ph3_coulomb",
    title: "Coulombkraft, elektrisches Feld und Superposition",
    category: "3.10 Kraftfelder",
    type: "gesetz",
    front: R`Wie lautet die <b>Coulombkraft</b> zwischen zwei Ladungen $Q$ und $q$, und wie ist das <b>elektrische Feld</b> definiert? Was ist ein Zentralkraftfeld, und wie sieht das Feld eines <b>Dipols</b> aus?`,
    back: R`Ladung $Q$ im Ursprung, Probeladung $q$ ($Q\gg q$, Rückwirkung vernachlässigt):
$$\vec F_E(\vec r) = \frac{1}{4\pi\varepsilon_0}\frac{qQ}{r^2}\hat r = q\cdot\underbrace{\frac{1}{4\pi\varepsilon_0}\frac{Q}{r^2}\hat r}_{\equiv\vec E}\qquad(3.113)$$
$$\vec E(\vec r) = \frac{\vec F_E(\vec r)}{q},\qquad \vec E = \frac{1}{4\pi\varepsilon_0}Q\frac{\vec r}{|\vec r|^3}\qquad(3.114,\,3.115)$$
Das Feld hängt nur von $r = |\vec r|$ ab und zeigt radial: <b>Zentralkraftfeld</b>.<br><br>
<b>Superpositionsprinzip:</b> Felder (wie Kräfte) addieren sich vektoriell. Dipol aus $+Q$ bei $\vec r_1$ und $-Q$ bei $\vec r_2$:
$$\vec E = \frac{Q}{4\pi\varepsilon_0}\left(\frac{\vec r-\vec r_1}{|\vec r-\vec r_1|^3} - \frac{\vec r-\vec r_2}{|\vec r-\vec r_2|^3}\right)\qquad(3.116)$$
Das ist kein Zentralkraftfeld mehr.`,
    meta: "Skript: Abschnitt 3.10.2, Gl. (3.113)–(3.116), Abb. 3.22–3.23, S. 67–68",
    explanation: R`<b>Intuition:</b> Gleichnamige Ladungen stossen sich ab, ungleichnamige ziehen sich an (Vorzeichen von $qQ$). Die Kraft fällt wie $1/r^2$, genau wie bei der Gravitation. Das ist geometrisch: Die „Wirkung“ verteilt sich auf eine Kugeloberfläche $4\pi r^2$.<br><br>
<b>Abhängigkeiten:</b> $F\propto q$, $F\propto Q$, $F\propto1/r^2$. Halber Abstand ergibt vierfache Kraft.<br><br>
<b>Vergleich mit der Gravitation</b> (3.10.3): gleiche Form, aber (i) Ladungen haben beide Vorzeichen, Massen nur positive; (ii) die Kopplung $q$ ist unabhängig von der Trägheit $m$; (iii) zwischen Elementarteilchen ist die Coulombkraft etwa $10^{36}$-mal stärker.<br><br>
<b>Dipol:</b> Von weitem sehen sich $+Q$ und $-Q$ fast am selben Ort, und ihre Felder heben sich weitgehend auf. Das Dipolfeld fällt deshalb schneller ab, wie $1/r^3$. Das ist der Grund, warum neutrale Moleküle nur schwach wechselwirken.`,
    derivation: R`Dipolfeld auf der Achse in grossem Abstand ($+Q$ bei $z = +d/2$, $-Q$ bei $z = -d/2$, Feldpunkt $z\gg d$):
<ol class="fc-steps">
<li>$E_z = \dfrac{Q}{4\pi\varepsilon_0}\left[\dfrac{1}{(z-d/2)^2} - \dfrac{1}{(z+d/2)^2}\right]$<em>Superposition (3.116) auf der Achse: Beide Beiträge zeigen entlang $z$, mit entgegengesetztem Vorzeichen.</em></li>
<li>$\dfrac{1}{(z\mp d/2)^2} = \dfrac{1}{z^2}\left(1\mp\dfrac{d}{2z}\right)^{-2}\approx\dfrac{1}{z^2}\left(1\pm\dfrac{d}{z}\right)$<em>Taylorentwicklung $(1+\varepsilon)^{-2}\approx1-2\varepsilon$ für kleines $\varepsilon = \mp d/(2z)$.</em></li>
<li>$E_z\approx\dfrac{Q}{4\pi\varepsilon_0 z^2}\cdot\dfrac{2d}{z} = \dfrac{1}{4\pi\varepsilon_0}\dfrac{2Qd}{z^3}$<em>Die $1/z^2$-Terme heben sich auf; übrig bleibt die Differenz erster Ordnung.</em></li>
<li>$E\propto\dfrac{p}{z^3}$ mit $p = Qd$<em>Das Dipolfeld fällt wie $1/r^3$; massgeblich ist das Dipolmoment $p = Qd$.</em></li>
</ol>`,
    example: R`Feld einer Ladung $Q = 1\,\mu\text{C}$ in $1\,\text{m}$ Abstand: $E = 8{,}99\cdot10^{9}\cdot10^{-6}\,\text{N/C} = 8{,}99\cdot10^{3}\,\text{N/C}$. Kraft auf ein Elektron dort: $F = eE = 1{,}44\cdot10^{-15}\,\text{N}$, Beschleunigung $F/m_e = 1{,}6\cdot10^{15}\,\text{m/s}^2$.<br>
In $2\,\text{m}$ Abstand ist das Feld nur noch ein Viertel ($2{,}25\cdot10^{3}\,\text{N/C}$).`,
    counterexample: R`<b>Dipol ist kein Zentralfeld:</b> Sein Feld hängt nicht nur vom Abstand, sondern auch von der Richtung ab (auf der Achse doppelt so stark wie in der Mittelebene im gleichen Abstand). Formeln, die Zentralsymmetrie voraussetzen (z. B. Drehimpulserhaltung um den Ursprung), gelten dort nicht.`,
    pitfalls: R`<ul><li>Vorzeichen der Ladungen ignorieren: Bei $qQ\lt0$ zeigt die Kraft nach innen.</li>
<li>$\hat r$ als Richtung <i>zur</i> Quelle verstehen; im Skript zeigt $\hat r$ von der Quelle zum Probeteilchen.</li>
<li>Bei Superposition die Beträge statt der Vektoren addieren.</li>
<li>$r$ und $r^2$ verwechseln, oder in (3.115) $\vec r/|\vec r|^3$ mit $\hat r/r^3$ verwechseln (das hätte die falsche Dimension).</li></ul>`
  },
  {
    id: "ph3_gravitation_gewicht",
    title: "Gravitationskraft, Gewicht und g(h) in der Höhe h",
    category: "3.10 Kraftfelder",
    type: "gesetz",
    front: R`Wie lautet das <b>Gravitationsgesetz</b>? Zeige, dass die Fallbeschleunigung unabhängig von $m$ ist, berechne das Verhältnis der Beschleunigungen von $m$ und $M$, und leite $g(h)\approx g(0)\left(1-\frac{2h}{R_E}\right)$ her.`,
    back: R`Kraft von $M$ (im Ursprung) auf $m$:
$$\vec F_m = -G_N\frac{mM}{r^2}\hat r = m\cdot\underbrace{\left(-G_N\frac{M}{r^2}\hat r\right)}_{\equiv\vec g(\vec r)}\qquad(3.117)$$
Immer anziehend (Massen sind positiv). $m$ ist hier die <b>schwere</b> Masse ($\gamma = m$, $\vec f = \vec g$).<br><br>
Mit $m_t = m_s$: $\vec a_m = -G_N\frac{M}{r^2}\hat r$, unabhängig von $m$ (3.118, 3.119). Nach Newton III:
$$\frac{|\vec a_M|}{|\vec a_m|} = \frac{m}{M}\ll1\quad(m\ll M)\qquad(3.120,\,3.121)$$
Erdoberfläche: $g = G_N\frac{M}{R_E^2} = 9{,}81\,\text{m/s}^2$ (3.123, 3.124). In der Höhe $h\ll R_E$:
$$g(h) = G_N\frac{M}{(R_E+h)^2} = \frac{g(0)}{(1+h/R_E)^2}\approx g(0)\left(1-\frac{2h}{R_E}\right)\qquad(3.125\text{–}3.127)$$
$g$ nimmt nahe der Oberfläche <b>linear</b> mit der Höhe ab.`,
    meta: "Skript: Abschnitt 3.10.3.1, Gl. (3.117)–(3.127), Abb. 3.24, S. 69–70",
    explanation: R`<b>Intuition:</b> Jede Masse zieht jede andere an, proportional zu beiden Massen und mit $1/r^2$ abnehmend. Die Kraft auf $m$ ist $\propto m$; deshalb kürzt sich $m$ in der Beschleunigung. Ein schwerer Körper wird stärker gezogen, ist aber genauso viel träger.<br><br>
<b>Abhängigkeiten:</b>
<ul><li>$g\propto M/r^2$: An der Oberfläche eines Planeten mit doppeltem Radius und gleicher Dichte ($M\propto R^3$) wäre $g\propto R$, also doppelt so gross.</li>
<li>Relative Abnahme mit der Höhe: $\Delta g/g\approx-2h/R_E$. Pro km Höhe etwa $-0{,}03\,\%$.</li></ul>
<b>Begriffe:</b> Die Kraft $m\vec g$ heisst oft „Gewichtskraft“. Was wir als „Gewicht“ <i>spüren</i>, ist aber die Gegenkraft (Normalkraft), siehe 3.10.3.2. Das ist die Quelle vieler Missverständnisse (Schwerelosigkeit).<br><br>
<b>Zusammenhang:</b> Kap. 7 behandelt die Himmelsmechanik (Kepler) und das Feld ausgedehnter Körper. Eine homogene Kugel wirkt nach aussen wie eine Punktmasse im Zentrum, deshalb darf man $r$ vom Erdmittelpunkt aus messen.`,
    derivation: R`<ol class="fc-steps">
<li>$m\,\vec a_m = -G_N\dfrac{mM}{r^2}\hat r$<em>Newton II für $m$ mit der Gravitationskraft; links träge, rechts schwere Masse, beide gleich (3.118).</em></li>
<li>$\vec a_m = -G_N\dfrac{M}{r^2}\hat r$<em>$m$ kürzt sich: Alle Körper fallen gleich (3.119).</em></li>
<li>$M\vec a_M = -\vec F_m\;\Rightarrow\;\dfrac{|\vec a_M|}{|\vec a_m|} = \dfrac{m}{M}$<em>Newton III: gleich grosse Gegenkraft auf $M$; die Beschleunigungen verhalten sich umgekehrt wie die Massen (3.120, 3.121).</em></li>
<li>$g(h) = G_N\dfrac{M}{(R_E+h)^2} = \underbrace{G_N\dfrac{M}{R_E^2}}_{g(0)}\cdot\dfrac{1}{(1+h/R_E)^2}$<em>$R_E^2$ ausklammern (3.125, 3.126).</em></li>
<li>$(1+\varepsilon)^{-2}\approx1-2\varepsilon$ für $\varepsilon = h/R_E\ll1$<em>Taylorentwicklung erster Ordnung (Anhang 11.1.2).</em></li>
<li>$g(h)\approx g(0)\left(1-\dfrac{2h}{R_E}\right)$<em>Lineare Abnahme mit der Höhe (3.127).</em></li>
</ol>`,
    example: R`<b>$g$ aus Erddaten:</b> $G_N = 6{,}674\cdot10^{-11}\,\text{N m}^2/\text{kg}^2$, $M = 5{,}97\cdot10^{24}\,\text{kg}$, $R_E = 6{,}371\cdot10^{6}\,\text{m}$: $g = 9{,}82\,\text{m/s}^2$ ✓.<br><br>
<b>Höhe der ISS</b> ($h = 400\,\text{km}$): exakt $g = 9{,}81\cdot(6371/6771)^2 = 8{,}69\,\text{m/s}^2$ (89 %); linear genähert $9{,}81(1-0{,}126) = 8{,}58\,\text{m/s}^2$. Die Näherung weicht bei $h/R_E = 6\,\%$ schon um gut 1 % ab.<br>
<b>Matterhorn</b> ($4{,}5\,\text{km}$): $\Delta g/g = -0{,}14\,\%$.`,
    counterexample: R`<b>„Im Weltraum gibt es keine Schwerkraft“:</b> In der ISS ist $g$ noch fast 90 % des Bodenwerts. Die Astronauten sind schwerelos, weil sie mit der Station frei fallen (3.10.3.2), nicht weil die Gravitation fehlt.<br>
<b>Grosse Höhen:</b> Für $h\sim R_E$ ist die lineare Näherung unbrauchbar: Bei $h = R_E$ gibt sie $g\approx-g(0)$ (negativ!), richtig ist $g(0)/4$.`,
    pitfalls: R`<ul><li>$G_N$ (Konstante) und $g$ (lokale Fallbeschleunigung) verwechseln.</li>
<li>$r$ von der Oberfläche statt vom Erdmittelpunkt messen.</li>
<li>Die Näherung $1 - 2h/R_E$ ausserhalb von $h\ll R_E$ verwenden.</li>
<li>Das Minuszeichen in (3.117) als „abstossend“ lesen: Es bedeutet „zum Zentrum hin“.</li></ul>`
  },
  {
    id: "ph3_aufzug",
    title: "Scheinbares Gewicht im beschleunigten Aufzug",
    category: "3.10 Kraftfelder",
    type: "beispiel",
    front: R`Was zeigt eine <b>Waage im Aufzug</b> an, wenn der Aufzug (a) nach oben anfährt, (b) mit konstanter Geschwindigkeit fährt, (c) bremst? Leite $F_N = m(g+a_A)$ her.`,
    back: R`Man bemerkt die Gewichtskraft nur über die <b>Gegenkraft</b> (Normalkraft der Unterlage). In Ruhe gilt $\vec F_G + \vec F_N = \vec 0$, also $|\vec F_N| = |\vec F_G|$ (3.128–3.130).<br><br>
Im Aufzug ruht die Person relativ zum Aufzug und hat dessen Beschleunigung $a_A$ ($y$-Achse nach oben):
$$-mg + F_N = m\,a_A\quad\Rightarrow\quad F_N = m(g+a_A)\qquad(3.131,\,3.132)$$
<ul><li>(a) Anfahren nach oben, $a_A>0$: $F_N>mg$, man fühlt sich schwerer.</li>
<li>(b) $v_A = \text{const}$, $a_A = 0$: $F_N = mg$, wie ausserhalb (3.133).</li>
<li>(c) Bremsen auf der Fahrt nach oben, $a_A\lt0$: $F_N\lt mg$, man fühlt sich leichter (3.134).</li></ul>
Die Waage zeigt den Betrag der Normalkraft, also das <b>scheinbare Gewicht</b>.`,
    meta: "Skript: Abschnitt 3.10.3.2, Beispiel 1, Gl. (3.128)–(3.134), Abb. 3.25, S. 71–73",
    explanation: R`<b>Intuition:</b> Der Aufzugboden muss zwei Dinge leisten: die Gravitation kompensieren <i>und</i> die Person mitbeschleunigen. Beschleunigt der Aufzug nach oben, muss der Boden stärker drücken. Bremst er auf der Fahrt nach oben, „hilft“ die Gravitation beim Bremsen der Person, und der Boden muss weniger drücken.<br><br>
<b>Entscheidend ist die Richtung von $\vec a$, nicht von $\vec v$:</b> Abwärtsfahrt mit Bremsen bedeutet $a_A>0$ (nach oben), also fühlt man sich schwerer, genau wie beim Anfahren nach oben.<br><br>
<b>Extremfälle:</b> $a_A = -g$ (freier Fall, Seil gerissen) ergibt $F_N = 0$: Schwerelosigkeit. $a_A\lt-g$: Die Person würde von der Decke gedrückt. Beim abrupten Halten nach schneller Aufwärtsfahrt kann der Kopf an die Decke stossen, weil $g$ nicht ausreicht, die Person rechtzeitig abzubremsen.<br><br>
<b>Zusammenhang:</b> Im Aufzugssystem (nicht inertial) erscheint $-m\vec A$ als Trägheitskraft (3.11.3); das Äquivalenzprinzip sagt, dass sich das lokal nicht von einem stärkeren Schwerefeld $g+a_A$ unterscheiden lässt.`,
    derivation: R`<ol class="fc-steps">
<li>Kräfte auf die Person: $-mg\,\vec e_y$ (Gravitation), $+F_N\,\vec e_y$ (Boden)<em>Nur diese zwei echten Kräfte; Achse nach oben.</em></li>
<li>Beschleunigung der Person = $a_A\,\vec e_y$<em>Sie ruht relativ zum Aufzug, bewegt sich also im Inertialsystem mit dessen Beschleunigung.</em></li>
<li>$-mg + F_N = ma_A$<em>Newton II im Inertialsystem (3.131).</em></li>
<li>$F_N = m(g+a_A)$<em>Nach der Normalkraft auflösen (3.132); die Waage zeigt $|F_N|$.</em></li>
<li>$m_\text{scheinbar} = \dfrac{F_N}{g} = m\left(1+\dfrac{a_A}{g}\right)$<em>Eine in kg geeichte Waage teilt durch $g$.</em></li>
</ol>`,
    example: R`Person mit $70\,\text{kg}$, Aufzug fährt mit $a_A = 2{,}0\,\text{m/s}^2$ nach oben an: $F_N = 70\cdot11{,}81\,\text{N} = 827\,\text{N}$, die Waage zeigt „$84\,\text{kg}$“.<br>
Bremsen mit $a_A = -2{,}0\,\text{m/s}^2$: $F_N = 70\cdot7{,}81\,\text{N} = 547\,\text{N}$, also „$56\,\text{kg}$“.<br>
Freier Fall: $0\,\text{N}$.`,
    counterexample: R`<b>„Im abwärts fahrenden Aufzug ist man immer leichter“ ist falsch:</b> Beim <i>Anhalten</i> am Ende der Abwärtsfahrt zeigt $\vec a$ nach oben, und die Waage zeigt <i>mehr</i>. Nur das Anfahren nach unten macht leichter. Bei konstanter Geschwindigkeit, egal in welche Richtung, zeigt die Waage genau $mg$.`,
    pitfalls: R`<ul><li>Aus der Fahrtrichtung statt aus der Beschleunigungsrichtung schliessen.</li>
<li>Glauben, die Gravitationskraft $mg$ ändere sich im Aufzug; sie bleibt gleich, nur $F_N$ ändert sich.</li>
<li>Vorzeichen von $a_A$ nicht zur Achsenwahl passend setzen.</li></ul>`
  },
  {
    id: "ph3_schwerelosigkeit",
    title: "Schwerelosigkeit der Astronautin im Raumschiff",
    category: "3.10 Kraftfelder",
    type: "herleitung",
    front: R`Eine Astronautin (Masse $m_A$) befindet sich in einem Raumschiff ($m_R$) auf einer Umlaufbahn. Zeige mit den Newton’schen Gleichungen für beide, dass die <b>Normalkraft verschwindet</b>, wenn sie relativ zum Schiff ruht. Was bedeutet „Schwerelosigkeit“ genau?`,
    back: R`Mit $\vec g_U$ = Gravitationsbeschleunigung auf der Bahn und $\vec F_N$ = Normalkraft des Bodens auf die Astronautin (Beschleunigungen relativ zu einem festen System, z. B. Erdmittelpunkt):
$$m_A\vec a_A = m_A\vec g_U + \vec F_N,\qquad m_R\vec a_R = m_R\vec g_U - \vec F_N\qquad(3.135,\,3.136)$$
(das Minus bei $m_R$ folgt aus Newton III). Ruht sie relativ zum Schiff, ist $\vec a_A = \vec a_R\equiv\vec a$ (3.138). Addition ergibt $\vec g_U = \vec a$ (3.139), also
$$m_A\vec a = m_A\vec g_U + \vec F_N\;\Rightarrow\;\vec F_N = \vec 0\qquad(3.140,\,3.141)$$
Beide fallen mit derselben Beschleunigung zur Erde. Auf der Kreisbahn ist das die Zentripetalbeschleunigung $a = v^2/R_U$ (3.142).<br><br>
<b>Schwerelosigkeit</b> heisst: Die gesamte Beschleunigung rührt von der Schwerkraft her, und <b>keine Normalkraft</b> wirkt ihr entgegen. Es heisst <b>nicht</b>, dass keine Gravitation wirkt. Dasselbe erlebt man im frei fallenden Aufzug, im Parabelflug oder auf der Achterbahn.`,
    meta: "Skript: Abschnitt 3.10.3.2, Beispiel 2, Gl. (3.135)–(3.142), S. 73–74; Zusammenfassung 3.12",
    explanation: R`<b>Intuition:</b> Die ISS „fällt“ ständig um die Erde herum: Sie fällt zur Erde, fliegt aber so schnell seitwärts, dass sie die Erde immer verfehlt. Die Astronautin fällt genau gleich. Es gibt nichts, wogegen sie gedrückt würde, also spürt sie kein Gewicht.<br><br>
<b>Warum genau gleich?</b> Wegen $m_t = m_s$ ist die Fallbeschleunigung $\vec g_U$ für Astronautin und Schiff identisch, unabhängig von ihren Massen (3.1.2). Wäre das nicht so, würde sie gegen eine Wand gedrückt.<br><br>
<b>Abhängigkeit:</b> Schwerelosigkeit hat nichts mit der Höhe zu tun, nur mit dem freien Fall. In 400 km Höhe ist $g_U\approx0{,}89\,g$, auf einem Turm in 400 m Höhe ist man nicht schwerelos, solange man steht.<br><br>
<b>Zusammenhang:</b> Im mitfallenden System (3.11.4) gilt $\vec a' = 0$, obwohl eine echte Kraft wirkt. Die Trägheitskraft $-m\vec A = -m\vec g$ kompensiert scheinbar die Gravitation (Einstein’scher Fahrstuhl, Äquivalenzprinzip).`,
    derivation: R`<ol class="fc-steps">
<li>$m_A\vec a_A = m_A\vec g_U + \vec F_N$<em>Astronautin: Gravitation plus Normalkraft vom Boden (3.135).</em></li>
<li>$m_R\vec a_R = m_R\vec g_U - \vec F_N$<em>Raumschiff: Gravitation plus Gegenkraft der Astronautin auf den Boden (Newton III, 3.136).</em></li>
<li>$(m_A+m_R)\vec g_U = m_A\vec a_A + m_R\vec a_R$<em>Addieren: Die inneren Kräfte $\pm\vec F_N$ heben sich auf (3.137).</em></li>
<li>$\vec a_A = \vec a_R = \vec a\;\Rightarrow\;\vec g_U = \vec a$<em>Relative Ruhe: gleiche Beschleunigung; dann ist die gemeinsame Beschleunigung gerade $\vec g_U$ (3.138, 3.139).</em></li>
<li>$m_A\vec g_U = m_A\vec g_U + \vec F_N\;\Rightarrow\;\vec F_N = \vec 0$<em>In Gleichung 1 einsetzen: Die Normalkraft verschwindet (3.140, 3.141).</em></li>
<li>$g_U = \dfrac{v^2}{R_U}\;\Rightarrow\;v = \sqrt{g_UR_U}$<em>Auf der Kreisbahn ist diese Fallbeschleunigung die Zentripetalbeschleunigung (3.142).</em></li>
</ol>`,
    example: R`<b>ISS:</b> $R_U = 6771\,\text{km}$, $g_U = 8{,}69\,\text{m/s}^2$: $v = \sqrt{8{,}69\cdot6{,}771\cdot10^{6}}\,\text{m/s} = 7{,}67\,\text{km/s}$, Umlaufzeit $T = 2\pi R_U/v = 5550\,\text{s}\approx92\,\text{min}$.<br>
<b>Parabelflug:</b> Ein Flugzeug fliegt etwa 20 s lang genau die Wurfparabel, die ein frei fallender Körper mit seiner Geschwindigkeit fliegen würde, und erzeugt so in der Kabine Schwerelosigkeit, mitten in der Erdatmosphäre.`,
    counterexample: R`<b>Geostationärer Satellit:</b> In $36\,000\,\text{km}$ Höhe ist $g$ nur noch etwa $0{,}22\,\text{m/s}^2$, also nicht null. Schwerelos ist man dort, weil der Satellit frei fällt, nicht wegen der Höhe. Ein Turm bis dorthin würde einen Menschen an der Spitze (mit der Erdrotation mitgeführt) ebenfalls schwerelos machen; an jedem tiefer gelegenen Stockwerk aber nicht.`,
    pitfalls: R`<ul><li>„Schwerelos = keine Gravitation“.</li>
<li>Das Vorzeichen der Reaktionskraft in der Gleichung des Raumschiffs vergessen.</li>
<li>Die Beschleunigungen im Raumschiff-System statt im festen (inertialen) System angeben.</li>
<li>Glauben, die Astronautin habe keine Masse mehr; Trägheit bleibt (schwere Gegenstände sind schwer anzuschieben).</li></ul>`
  },
  {
    id: "ph3_erdrotation_gewicht",
    title: "Gewicht auf der rotierenden Erde: Abhängigkeit von der Breite",
    category: "3.10 Kraftfelder",
    type: "herleitung",
    front: R`Warum ist die Normalkraft (das gemessene Gewicht) auf der rotierenden Erde etwas kleiner als $mg$, und wie hängt sie von der geografischen Breite $\varphi$ ab? Leite $a_{ZP}\approx0{,}034\cos\varphi\,\text{m/s}^2$ und $|\vec F_N|\approx mg\sqrt{1-2\frac{a_{ZP}}{g}\cos\varphi}$ her.`,
    back: R`Ein Körper auf der Erdoberfläche läuft mit der Erde auf einem Kreis um die Erdachse. Die nötige Zentripetalkraft liefert die Summe aus Gravitation und Normalkraft:
$$\vec F_G + \vec F_N = \vec F_{ZP} = -m\frac{v^2}{r}\hat x\qquad(3.143,\,3.144)$$
mit Kreisradius $r = R\cos\varphi$ und $v = 2\pi r/T$:
$$a_{ZP} = \frac{v^2}{r} = \frac{4\pi^2r}{T^2}\approx0{,}034\cos\varphi\ \frac{\text{m}}{\text{s}^2}\qquad(3.145\text{–}3.148)$$
($R = 6378\,\text{km}$, $T = 24\,\text{h}$.) Die Gewichtskraft zeigt zum Erdmittelpunkt (Kugelsymmetrie), die Zentripetalkraft zur <b>Drehachse</b> (Zylindersymmetrie). In Komponenten:
$$\vec F_N = m\begin{pmatrix}g\cos\varphi - a_{ZP}\\0\\g\sin\varphi\end{pmatrix},\quad|\vec F_N| = mg\sqrt{1-2\tfrac{a_{ZP}}{g}\cos\varphi+\left(\tfrac{a_{ZP}}{g}\right)^2}\approx mg\sqrt{1-2\tfrac{a_{ZP}}{g}\cos\varphi}$$
(3.149–3.152). Also $F_N\lt mg$ für $\varphi\lt\pi/2$ und $F_N = mg$ am Pol (3.153).`,
    meta: "Skript: Abschnitt 3.10.3.2, Beispiel 3, Gl. (3.143)–(3.153), Abb. 3.26, S. 74–75",
    explanation: R`<b>Intuition:</b> Ein Teil der Gravitation wird „verbraucht“, um den Körper auf seiner Kreisbahn um die Erdachse zu halten. Nur der Rest muss vom Boden getragen werden. Am Äquator ist der Kreis am grössten, am Pol schrumpft er auf einen Punkt.<br><br>
<b>Abhängigkeiten:</b> $a_{ZP}\propto r = R\cos\varphi$, maximal am Äquator ($0{,}034\,\text{m/s}^2$, etwa $0{,}35\,\%$ von $g$), null am Pol. Die relative Gewichtsreduktion ist $\approx\frac{a_{ZP}\cos\varphi}{g} = \frac{0{,}034\cos^2\varphi}{g}$.<br><br>
<b>Richtung:</b> Weil $\vec F_N$ nicht exakt radial ist, weicht auch das Lot leicht von der Richtung zum Erdmittelpunkt ab (maximal etwa $0{,}1^\circ$ bei $45^\circ$ Breite). Die Erde selbst hat sich über Jahrmillionen zu einem abgeplatteten Ellipsoid verformt, was am Äquator $g$ zusätzlich verringert (gemessen $9{,}78$ statt $9{,}83\,\text{m/s}^2$ am Pol).<br><br>
<b>Zusammenhang:</b> Im mitrotierenden System erscheint dieser Effekt als Zentrifugalkraft (3.11.3); zusammen mit der Gravitation ergibt sie die „effektive“ Schwerkraft.`,
    derivation: R`<ol class="fc-steps">
<li>$r = R\cos\varphi,\quad v = \dfrac{2\pi r}{T}$<em>Abstand zur Erdachse und Bahngeschwindigkeit eines Punktes auf der Breite $\varphi$ (3.145, 3.146).</em></li>
<li>$a_{ZP} = \dfrac{v^2}{r} = \dfrac{4\pi^2R\cos\varphi}{T^2}$<em>Zentripetalbeschleunigung (3.147).</em></li>
<li>$\dfrac{4\pi^2\cdot6{,}378\cdot10^{6}\,\text{m}}{(86\,400\,\text{s})^2} = 0{,}0337\,\text{m/s}^2$<em>Zahlen einsetzen: $a_{ZP}\approx0{,}034\cos\varphi\,\text{m/s}^2$ (3.148).</em></li>
<li>$\vec F_N = \vec F_{ZP} - \vec F_G$<em>Gleichung nach der Normalkraft auflösen (3.149); $\vec F_G = -mg(\cos\varphi,0,\sin\varphi)$ zeigt zum Erdmittelpunkt.</em></li>
<li>$F_{N,x} = m(g\cos\varphi - a_{ZP}),\quad F_{N,z} = mg\sin\varphi$<em>Komponenten in der $xz$-Ebene (3.150); $x$ zeigt von der Achse nach aussen.</em></li>
<li>$|\vec F_N|^2 = m^2\left(g^2 - 2ga_{ZP}\cos\varphi + a_{ZP}^2\right)$<em>Quadrieren und $\cos^2+\sin^2 = 1$ benutzen (3.151).</em></li>
<li>$|\vec F_N|\approx mg\sqrt{1-2\tfrac{a_{ZP}}{g}\cos\varphi}$<em>$(a_{ZP}/g)^2\approx10^{-5}$ vernachlässigen (3.152).</em></li>
</ol>`,
    example: R`<b>Äquator</b> ($\varphi = 0$): $F_N = m(g - a_{ZP}) = m(9{,}81 - 0{,}034)$, also $0{,}35\,\%$ leichter: Eine 70-kg-Person „wiegt“ etwa 240 g weniger.<br>
<b>Zürich</b> ($\varphi = 47{,}4^\circ$): $a_{ZP} = 0{,}023\,\text{m/s}^2$; relative Reduktion $\approx\frac{0{,}023\cdot0{,}677}{9{,}81} = 0{,}16\,\%$.<br>
<b>Pol</b>: keine Reduktion.`,
    counterexample: R`<b>Zentripetalkraft zeigt nicht zum Erdmittelpunkt:</b> Wer annimmt, $\vec F_{ZP}$ sei radial (wie $\vec F_G$), erhält $F_N = m(g - a_{ZP})$ für alle Breiten. Das ist nur am Äquator richtig. An anderen Breiten zeigt $\vec F_{ZP}$ zur Achse, und nur ihre Komponente entlang der Lotrichtung reduziert das Gewicht.`,
    pitfalls: R`<ul><li>$r = R$ statt $r = R\cos\varphi$ für den Bahnradius nehmen.</li>
<li>Sterntag (23 h 56 min) und Sonnentag (24 h) verwechseln; das Skript nimmt 24 h, der Unterschied ist hier unwesentlich.</li>
<li>$\varphi$ als Polabstand statt als geografische Breite deuten ($\cos$ und $\sin$ vertauscht).</li>
<li>Die Zentripetalkraft als zusätzliche Kraft zeichnen statt als Resultierende von $\vec F_G$ und $\vec F_N$.</li></ul>`
  },

  // ========================================================================
  // 3.11 BESCHLEUNIGTE BEZUGSSYSTEME – SCHEINKRÄFTE
  // ========================================================================
  {
    id: "ph3_trafo_beschleunigt",
    title: "Geschwindigkeit und Beschleunigung im beschleunigten, rotierenden System",
    category: "3.11 Beschleunigte Bezugssysteme - „Scheinkräfte“",
    type: "herleitung",
    front: R`Ein Bezugssystem $K'$ hat den Ursprung bei $\vec R(t)$ und rotiert mit konstantem $\vec\omega$ relativ zum Inertialsystem $K$. Leite her:
$$\vec v = \vec V + \vec v\,' + \vec\omega\times\vec r\,',\qquad \vec a = \vec a\,' + \vec A + 2\,\vec\omega\times\vec v\,' + \vec\omega\times(\vec\omega\times\vec r\,')$$`,
    back: R`In $K'$: $\vec r\,' = x'\vec e_{x'}+y'\vec e_{y'}+z'\vec e_{z'}$, $\vec v\,' = \dot x'\vec e_{x'}+\dots$, $\vec a\,' = \ddot x'\vec e_{x'}+\dots$ (3.154–3.156). In $K$ gilt $\vec r = \vec R + \vec r\,'$ (3.157). Von $K$ aus gesehen hängen auch die Basisvektoren $\vec e_{x'},\dots$ von der Zeit ab, mit $\dot{\vec e} = \vec\omega\times\vec e$ (2.69).
$$\vec v = \vec V + \vec v\,' + \vec\omega\times\vec r\,'\qquad(3.161)$$
<ul><li>$\vec V = \dot{\vec R}$: Geschwindigkeit von $O'$ bezüglich $O$</li><li>$\vec v\,'$: Geschwindigkeit in $K'$</li><li>$\vec\omega\times\vec r\,'$: Folge der Rotation von $K'$</li></ul>
$$\vec a = \vec a\,' + \vec A + 2\,\vec\omega\times\vec v\,' + \vec\omega\times(\vec\omega\times\vec r\,')\qquad(3.166)$$
<ul><li>$\vec A = \dot{\vec V}$: Beschleunigung von $O'$</li><li>$\vec a\,'$: Beschleunigung in $K'$</li><li>$\vec a_C := -2\,\vec\omega\times\vec v\,'$: Coriolis-Beschleunigung</li><li>$\vec\omega\times(\vec\omega\times\vec r\,')$: Zentripetal-Beschleunigung; für $\vec\omega\perp\vec r\,'$ gleich $-\omega^2\vec r\,'$ (3.167)</li></ul>`,
    meta: "Skript: Abschnitte 3.11.1–3.11.2, Gl. (3.154)–(3.167), Abb. 3.27, S. 76–79",
    explanation: R`<b>Intuition:</b> Wer auf einem Karussell steht, sieht die Welt aus einem bewegten, sich drehenden Blickwinkel. Um die „wahre“ Bewegung (im Inertialsystem) zu bekommen, muss man drei Dinge addieren: die Bewegung des Ursprungs ($\vec V$, $\vec A$), die eigene Bewegung relativ zum Karussell ($\vec v\,'$, $\vec a\,'$) und die Effekte der Drehung.<br><br>
<b>Woher kommt der Faktor 2 bei Coriolis?</b> Zwei Effekte tragen gleich viel bei. Erstens dreht sich der Geschwindigkeitsvektor $\vec v\,'$ mit dem System ($\vec\omega\times\vec v\,'$ aus $\dot{\vec v}\,'$). Zweitens ändert sich beim Bewegen in $K'$ der Abstand zur Achse und damit die Mitführgeschwindigkeit $\vec\omega\times\vec r\,'$ (nochmals $\vec\omega\times\vec v\,'$).<br><br>
<b>Abhängigkeiten:</b> Coriolis $\propto\omega v'$ (nur für bewegte Körper), Zentripetal $\propto\omega^2r'_\perp$ (auch für ruhende).<br><br>
<b>Zusammenhang:</b> Das ist die Grundlage aller Scheinkräfte (3.11.3) und der Kreiselbewegung (Kap. 13). Ist $\vec\omega$ nicht konstant, käme noch $\dot{\vec\omega}\times\vec r\,'$ hinzu (Euler-Term), den das Skript hier ausschliesst.`,
    derivation: R`<ol class="fc-steps">
<li>$\vec r = \vec R + \vec r\,'\;\Rightarrow\;\vec v = \vec V + \dot{\vec r}\,'$<em>Ortsvektoren addieren, nach der Zeit ableiten (3.157, 3.158).</em></li>
<li>$\dot{\vec r}\,' = \underbrace{\dot x'\vec e_{x'}+\dot y'\vec e_{y'}+\dot z'\vec e_{z'}}_{\vec v\,'} + \underbrace{x'\dot{\vec e}_{x'}+y'\dot{\vec e}_{y'}+z'\dot{\vec e}_{z'}}_{\vec u}$<em>Produktregel: Von $K$ aus ändern sich Komponenten <i>und</i> Basisvektoren (3.159).</em></li>
<li>$\vec u = x'(\vec\omega\times\vec e_{x'})+\dots = \vec\omega\times\vec r\,'$<em>Jeder mitrotierende Einheitsvektor erfüllt $\dot{\vec e} = \vec\omega\times\vec e$ (2.69); $\vec\omega$ ausklammern (3.160). Damit folgt (3.161).</em></li>
<li>$\vec a = \dot{\vec V} + \dot{\vec v}\,' + \vec\omega\times\dot{\vec r}\,'$<em>(3.161) ableiten, $\vec\omega$ konstant (3.162).</em></li>
<li>$\dot{\vec v}\,' = \vec a\,' + \vec\omega\times\vec v\,'$<em>Gleiches Argument wie in Schritt 2–3, angewendet auf $\vec v\,'$ (3.163, 3.164).</em></li>
<li>$\vec\omega\times\dot{\vec r}\,' = \vec\omega\times(\vec v\,'+\vec\omega\times\vec r\,') = \vec\omega\times\vec v\,' + \vec\omega\times(\vec\omega\times\vec r\,')$<em>$\dot{\vec r}\,'$ aus Schritt 2–3 einsetzen (3.165).</em></li>
<li>$\vec a = \vec a\,' + \vec A + 2\,\vec\omega\times\vec v\,' + \vec\omega\times(\vec\omega\times\vec r\,')$<em>Alles zusammenfassen; die beiden $\vec\omega\times\vec v\,'$ ergeben den Faktor 2 (3.166).</em></li>
<li>$\vec\omega\times(\vec\omega\times\vec r\,') = \vec\omega(\vec\omega\cdot\vec r\,') - \vec r\,'\omega^2 = -\omega^2\vec r\,'$ für $\vec\omega\perp\vec r\,'$<em>BAC-CAB; zeigt zur Achse, also zentripetal (3.167).</em></li>
</ol>`,
    example: R`<b>Ruhender Punkt auf dem Karussell</b> ($\vec v\,' = \vec a\,' = \vec 0$, $\vec A = \vec 0$): $\vec a = \vec\omega\times(\vec\omega\times\vec r\,') = -\omega^2\vec r\,'_\perp$, genau die Zentripetalbeschleunigung der Kreisbewegung aus Kap. 2.<br>
Mit $\omega = 1\,\text{s}^{-1}$, $r' = 3\,\text{m}$: $a = 3\,\text{m/s}^2$.<br><br>
<b>Laufen nach aussen</b> mit $v' = 1\,\text{m/s}$: Zusätzlich $|2\vec\omega\times\vec v\,'| = 2\,\text{m/s}^2$ quer zur Laufrichtung.`,
    counterexample: R`<b>Nur geradlinig gleichförmig bewegtes $K'$</b> ($\vec A = \vec 0$, $\vec\omega = \vec 0$): Alle Zusatzterme verschwinden, $\vec a = \vec a\,'$. Das ist die Galilei-Transformation (3.5); $K'$ ist dann selbst ein Inertialsystem.`,
    pitfalls: R`<ul><li>Den Faktor 2 im Coriolis-Term vergessen.</li>
<li>Die Reihenfolge im Kreuzprodukt vertauschen (Vorzeichenfehler).</li>
<li>$\vec\omega\times(\vec\omega\times\vec r\,')$ falsch auswerten; nur der zur Achse senkrechte Anteil von $\vec r\,'$ trägt bei.</li>
<li>Bei zeitabhängigem $\vec\omega$ den Euler-Term $\dot{\vec\omega}\times\vec r\,'$ vergessen.</li></ul>`
  },
  {
    id: "ph3_scheinkraefte",
    title: "Scheinkräfte: Trägheits-, Coriolis- und Zentrifugalterm",
    category: "3.11 Beschleunigte Bezugssysteme - „Scheinkräfte“",
    type: "gesetz",
    front: R`Wie entstehen <b>Scheinkräfte</b>, wenn man im beschleunigten System $K'$ an der Form $m\vec a\,' = \text{„Kräfte“}$ festhält? Gib $\vec F_T$, $\vec F_C$, $\vec F_{ZF}$ an und nenne ihre Eigenschaften, die sie von echten Kräften unterscheiden.`,
    back: R`Echte Kräfte hängen nicht vom Bezugssystem ab: $\vec F' = \vec F$ (nur Relativabstände und Relativgeschwindigkeiten zählen). Mit (3.166):
$$\vec F = m\vec a = m\{\vec a\,' + \vec A + 2\,\vec\omega\times\vec v\,' + \vec\omega\times(\vec\omega\times\vec r\,')\}\qquad(3.170)$$
$$\Rightarrow\quad m\vec a\,' = \vec F' + \vec F_T + \vec F_C + \vec F_{ZF}\qquad(3.171,\,3.172)$$
<ul><li>$\vec F_T = -m\vec A$: „Trägheitskraft“</li>
<li>$\vec F_C = -2m\,(\vec\omega\times\vec v\,')$: „Corioliskraft“</li>
<li>$\vec F_{ZF} = -m\,\vec\omega\times(\vec\omega\times\vec r\,')$: „Zentrifugalkraft“ (nach aussen)</li></ul>
<b>Eigenschaften:</b>
<ul><li>Keine Wechselwirkungen, sondern kinematische Terme, auf die Kraftseite verschoben.</li>
<li>Alle sind $\propto m$.</li>
<li>Sie verschwinden im Inertialsystem ($\vec A = \vec 0$, $\vec\omega = \vec 0$).</li>
<li>Sie haben keinen Reaktionspartner.</li></ul>
Folgen: (a) $\vec a\,' = 0$ trotz echter Kraft (scheinbares Gleichgewicht); (b) $\vec a\,'\neq0$ ohne echte Kraft.`,
    meta: "Skript: Abschnitt 3.11.3, Gl. (3.168)–(3.178), S. 79–81",
    explanation: R`<b>Intuition:</b> Im bremsenden Bus „wird man nach vorn geworfen“. Tatsächlich wirkt keine Kraft nach vorn; man bewegt sich wegen der Trägheit einfach weiter, während der Bus bremst. Wer den Bus als ruhend betrachten will, muss eine fiktive Kraft $-m\vec A$ erfinden, um seine Beobachtung mit Newton II zu erklären.<br><br>
<b>Warum $\propto m$?</b> Sie entstehen aus $m\cdot$(Beschleunigung des Bezugssystems). Darum sind sie von der Gravitation lokal nicht zu unterscheiden (Äquivalenzprinzip, 3.1.2).<br><br>
<b>Coriolis:</b> Wirkt nur auf in $K'$ bewegte Körper ($\propto v'$), steht senkrecht auf $\vec v\,'$ und leistet deshalb keine Arbeit. Er lenkt nur ab. <b>Zentrifugal:</b> wirkt auch auf ruhende Körper, $\propto\omega^2r'_\perp$, weg von der Achse.<br><br>
<b>Vorzeichenkonvention:</b> Im Skript gilt $\vec F_C = +m\vec a_C$ mit $\vec a_C = -2\vec\omega\times\vec v\,'$. In Teilen der Literatur ist das Vorzeichen der Coriolis<i>beschleunigung</i> anders definiert; die Kraft ist dieselbe.<br><br>
<b>Zusammenhang:</b> Beispiele: Rotation in der Ebene (3.11.4.1), Wetter (3.11.4.2), Foucault-Pendel (3.11.4.3).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec F = m\vec a$ (nur im Inertialsystem $K$)<em>Ausgangspunkt: echte Kraft und echte Beschleunigung.</em></li>
<li>$\vec F = m\{\vec a\,' + \vec A + 2\vec\omega\times\vec v\,' + \vec\omega\times(\vec\omega\times\vec r\,')\}$<em>Beschleunigung durch die Grössen in $K'$ ausdrücken (3.166, 3.170).</em></li>
<li>$m\vec a\,' = \vec F - m\vec A - 2m\vec\omega\times\vec v\,' - m\vec\omega\times(\vec\omega\times\vec r\,')$<em>Alles ausser $m\vec a\,'$ auf die rechte Seite bringen (3.171).</em></li>
<li>$m\vec a\,' = \vec F + \vec F_T + \vec F_C + \vec F_{ZF}$<em>Die verschobenen Terme bekommen Namen: Sie sehen aus wie Kräfte, sind aber keine (3.172).</em></li>
<li>$\vec\omega\perp\vec r\,':\ \vec F_{ZF} = +m\omega^2\vec r\,'$<em>Mit (3.167): Der Zentrifugalterm zeigt von der Achse weg.</em></li>
</ol>`,
    example: R`<b>Bremsender Bus</b> ($A = -3\,\text{m/s}^2$): Ein 70-kg-Fahrgast „spürt“ $F_T = 210\,\text{N}$ nach vorn.<br>
<b>Coriolis auf ein Auto</b> ($v' = 30\,\text{m/s}$, Breite $47{,}4^\circ$): horizontale Komponente $2v'\omega\sin\varphi = 2\cdot30\cdot7{,}29\cdot10^{-5}\cdot0{,}736\,\text{m/s}^2 = 3{,}2\cdot10^{-3}\,\text{m/s}^2$, für 1500 kg also etwa $4{,}8\,\text{N}$. Unmerklich, aber für Ozean- und Luftströmungen entscheidend.<br>
<b>Wäscheschleuder</b> ($\omega = 100\,\text{s}^{-1}$, $r = 0{,}25\,\text{m}$): Zentrifugalterm $2500\,\text{m/s}^2\approx250\,g$.`,
    counterexample: R`<b>Kein Reaktionspartner:</b> Zur „Zentrifugalkraft“ auf den Stein an der Schnur gibt es keinen Körper, der eine Gegenkraft erfährt. Die Schnurkraft auf den Stein hat ihren Partner in der Kraft des Steins auf die Hand, nicht in der Zentrifugalkraft. Das zeigt: Scheinkräfte sind keine Wechselwirkungen.<br>
<b>Coulombkraft $\not\propto m$:</b> Echte Kräfte müssen nicht proportional zur Masse sein; Scheinkräfte sind es immer.`,
    pitfalls: R`<ul><li>Scheinkräfte im Inertialsystem einzeichnen. Dort gibt es sie nicht.</li>
<li>Zentripetalkraft (Resultierende echter Kräfte, Inertialsystem) und Zentrifugalkraft (Scheinkraft im rotierenden System) gleichzeitig in dieselbe Gleichung schreiben.</li>
<li>Die Corioliskraft auf ruhende Körper anwenden ($v' = 0$ ergibt $F_C = 0$).</li>
<li>Vorzeichenkonventionen verschiedener Bücher mischen.</li></ul>`
  },
  {
    id: "ph3_echte_beschleunigung",
    title: "Echte Kräfte, echte Beschleunigung und der frei fallende Aufzug",
    category: "3.11 Beschleunigte Bezugssysteme - „Scheinkräfte“",
    type: "konzept",
    front: R`Was versteht das Skript unter der <b>echten Beschleunigung</b> $\vec a_e$, und in welcher Form gilt Newton II in <b>jedem</b> Bezugssystem? Erkläre damit, warum im <b>frei fallenden Aufzug</b> $\vec a\,' = 0$ gilt, obwohl eine Kraft wirkt.`,
    back: R`Das „Problem“ der Scheinkräfte entsteht aus der Forderung, die Beschleunigung müsse in <i>jedem</i> System die 2. Ableitung der Koordinaten sein. Lösung: Man definiert als <b>echte Beschleunigung</b> $\vec a_e$ den Ausdruck $\vec a$ auf der linken Seite von (3.166). Sie ist (in Betrag und Richtung) unabhängig vom Bezugssystem, wie echte Kräfte $\vec F_e$.
<ul><li>Nur in Inertialsystemen ist $\vec a_e = (\ddot x,\ddot y,\ddot z)$ (3.179).</li>
<li>In jedem Bezugssystem gilt $\vec F_e = m\,\vec a_e$ (3.180).</li></ul>
<b>Frei fallender Aufzug</b> ($\vec\omega = 0$, Person ruht im Aufzug, $\vec v\,' = 0$): echte Kraft $\vec F_e = m\vec g$; Aufzug fällt mit $\vec A = \vec g$:
$$m\vec g = m\vec a\,' + m\vec A = m\vec a\,' + m\vec g\;\Rightarrow\;\vec a\,' = \vec 0\qquad(3.186\text{–}3.189)$$
Umgekehrt: Ohne echte Kraft ist $\vec a\,' = \vec a_T + \vec a_C + \vec a_{ZF}\neq0$, also eine gekrümmte Bahn in $K'$ (3.190–3.192).`,
    meta: "Skript: Abschnitt 3.11.4, Gl. (3.179)–(3.192), S. 81–83",
    explanation: R`<b>Intuition:</b> Physikalisch real sind nur die Wechselwirkungen (echte Kräfte) und die Beschleunigung relativ zu einem Inertialsystem. Was man in einem beschleunigten System als „Beschleunigung“ abliest ($\ddot x'$), ist teilweise ein Artefakt der Bewegung des Beobachters.<br><br>
<b>Frei fallender Aufzug:</b> Die Gravitation wirkt voll, aber sie beschleunigt Person und Aufzug gleich. Relativ zum Aufzug bewegt sich nichts, alles schwebt. Das ist exakt die Situation in der ISS.<br><br>
<b>Zwei Sichtweisen, ein Ergebnis:</b>
<ul><li>Im Inertialsystem: echte Kraft $m\vec g$ gibt echte Beschleunigung $\vec g$, für Person und Aufzug gleich.</li>
<li>Im Aufzug: $m\vec g$ plus Trägheitsterm $-m\vec g$ ergibt null, also $\vec a\,' = 0$.</li></ul>
Beide sind korrekt, wenn man sauber bleibt; Fehler entstehen nur, wenn man die Sichtweisen vermischt.<br><br>
<b>Zusammenhang:</b> Das ist Einsteins Gedankenexperiment: Lokal lässt sich die Gravitation durch Wahl eines frei fallenden Systems „wegtransformieren“. Daraus entstand die Allgemeine Relativitätstheorie.`,
    derivation: R`<ol class="fc-steps">
<li>$\sum_i\vec F_i = m\vec a_e$<em>Nur echte Kräfte erzeugen echte Beschleunigungen (3.181).</em></li>
<li>$\sum_i\vec F_i = m\vec a\,' - m\vec a_T - m\vec a_C - m\vec a_{ZF}$<em>$\vec a_e$ durch Grössen in $K'$ ausdrücken (3.182), mit $\vec a_T = -\vec A$ usw.</em></li>
<li>Aufzug: $\vec\omega = 0$, $\vec A = \vec g$, $\vec F_e = m\vec g$<em>Linear beschleunigtes System ohne Rotation, das selbst frei fällt (3.186, 3.187).</em></li>
<li>$m\vec g = m\vec a\,' + m\vec g$<em>Einsetzen (3.188).</em></li>
<li>$\vec a\,' = \vec 0$<em>Die Person ruht im Aufzug bzw. bewegt sich gleichförmig, obwohl eine Kraft wirkt (3.189).</em></li>
</ol>`,
    example: R`Im frei fallenden Aufzug lässt die Person einen Apfel los: Er bleibt neben ihrer Hand „stehen“ ($\vec a\,' = 0$). Vom Gebäude aus fallen Person, Apfel und Aufzug gemeinsam mit $g$.<br>
Wirft sie den Apfel horizontal, fliegt er im Aufzug <i>geradlinig</i> zur Wand, vom Gebäude aus auf einer Wurfparabel.`,
    counterexample: R`<b>Grenze der Äquivalenz: Gezeiten.</b> In einem sehr grossen frei fallenden Aufzug fallen zwei Äpfel an entgegengesetzten Enden nicht exakt parallel; beide fallen Richtung Erdmittelpunkt, also leicht aufeinander zu, und der untere fällt etwas schneller. Das inhomogene Feld lässt sich nur <i>lokal</i> wegtransformieren.`,
    pitfalls: R`<ul><li>$\ddot x'$ in einem beschleunigten System als echte Beschleunigung interpretieren.</li>
<li>Aus $\vec a\,' = 0$ schliessen, dass keine Kraft wirkt.</li>
<li>Inertialsystem- und Aufzugsbeschreibung in einer Gleichung mischen (z. B. echte Kraft plus Trägheitsterm, aber im Inertialsystem gerechnet).</li></ul>`
  },
  {
    id: "ph3_rotierende_scheibe",
    title: "Kräftefreie Bewegung auf der rotierenden Scheibe",
    category: "3.11 Beschleunigte Bezugssysteme - „Scheinkräfte“",
    type: "herleitung",
    front: R`Ein Massenpunkt läuft kräftefrei vom Mittelpunkt einer mit $\vec\omega = \omega\vec e_z$ rotierenden Scheibe los ($\vec v\,'(0) = v_0\vec e_{y'}$, $\vec r\,'(0) = \vec 0$). Stelle die Bewegungsgleichungen in $K'$ auf und zeige durch teilweise Integration $v' = \sqrt{v_0^2+\omega^2r'^2}$.`,
    back: R`Coriolis- und Zentrifugalterm:
$$m\vec a_C = -2m\,\vec\omega\times\vec v\,' = 2m\omega\begin{pmatrix}\dot y'\\-\dot x'\\0\end{pmatrix},\qquad m\vec a_{ZF} = m\omega^2\begin{pmatrix}x'\\y'\\z'\end{pmatrix}\qquad(3.195\text{–}3.198)$$
Bewegungsgleichungen (3.199–3.202):
$$\ddot x' = 2\omega\dot y' + \omega^2x',\qquad \ddot y' = -2\omega\dot x' + \omega^2y',\qquad \ddot z' = 0$$
Mit $\dot x'$ bzw. $\dot y'$ multiplizieren und addieren: Die Coriolis-Terme fallen weg. Integration ergibt
$$\tfrac12\dot x'^2 + \tfrac12\dot y'^2 = \tfrac12\omega^2x'^2 + \tfrac12\omega^2y'^2 + c,\qquad c = \tfrac12v_0^2\qquad(3.206,\,3.207)$$
$$v'^2 - \omega^2r'^2 = v_0^2\quad\Rightarrow\quad v' = \sqrt{v_0^2+\omega^2r'^2}\qquad(3.208)$$
Im rotierenden System nimmt die Geschwindigkeit mit dem Abstand zu, obwohl keine echte Kraft wirkt.`,
    meta: "Skript: Abschnitt 3.11.4.1, Gl. (3.193)–(3.208), Abb. 3.28, S. 83–86",
    explanation: R`<b>Intuition:</b> Im Inertialsystem fliegt der Körper einfach geradeaus mit $v_0$. Die Scheibe dreht sich unter ihm weg. Vom Karussell aus sieht man eine Spiralbahn, die immer schneller wird, weil der Rand des Karussells sich gegenüber dem Körper immer schneller wegdreht.<br><br>
<b>Warum fällt Coriolis heraus?</b> Multipliziert man mit $\vec v\,'$, bildet man die „Leistung“ der Terme. Der Coriolis-Term steht immer senkrecht auf $\vec v\,'$ und leistet keine Arbeit, ändert also den Betrag $v'$ nicht. Nur der Zentrifugalterm, der wie eine nach aussen ziehende Feder mit „negativer“ Federkonstante wirkt, ändert $v'$.<br><br>
<b>Energieanalogie:</b> $\tfrac12v'^2 - \tfrac12\omega^2r'^2 = \text{const}$ sieht aus wie ein Energiesatz mit dem Zentrifugalpotential $V_{ZF} = -\tfrac12m\omega^2r'^2$ (Kap. 4).<br><br>
<b>Zusammenhang:</b> Dasselbe Muster (Coriolis lenkt nur ab) erklärt Wirbel in der Atmosphäre und die Drehung des Foucault-Pendels.`,
    derivation: R`<ol class="fc-steps">
<li>$-2\vec\omega\times\vec v\,' = -2\begin{pmatrix}0\\0\\\omega\end{pmatrix}\times\begin{pmatrix}\dot x'\\\dot y'\\0\end{pmatrix} = -2\begin{pmatrix}-\omega\dot y'\\\omega\dot x'\\0\end{pmatrix}$<em>Kreuzprodukt komponentenweise ($\vec e_z\times\vec e_x = \vec e_y$, $\vec e_z\times\vec e_y = -\vec e_x$) (3.196, 3.197).</em></li>
<li>$\ddot x' = 2\omega\dot y' + \omega^2x',\quad\ddot y' = -2\omega\dot x' + \omega^2y'$<em>Bewegungsgleichung in $K'$ ohne echte Kraft: $\vec a\,' = \vec a_C + \vec a_{ZF}$ (3.191, 3.200, 3.201).</em></li>
<li>$\ddot x'\dot x' + \ddot y'\dot y' = \omega^2(x'\dot x' + y'\dot y')$<em>Erste Gleichung mal $\dot x'$, zweite mal $\dot y'$, addieren: $2\omega\dot y'\dot x' - 2\omega\dot x'\dot y' = 0$ (3.203).</em></li>
<li>$\dot x'\,d\dot x' + \dot y'\,d\dot y' = \omega^2(x'\,dx' + y'\,dy')$<em>Mit $dt$ multiplizieren: $\ddot x'\,dt = d\dot x'$, $\dot x'\,dt = dx'$ (3.204, 3.205).</em></li>
<li>$\tfrac12(\dot x'^2+\dot y'^2) = \tfrac12\omega^2(x'^2+y'^2) + c$<em>Integrieren: $\int u\,du = \tfrac12u^2$ (3.206).</em></li>
<li>$t = 0$: $\tfrac12v_0^2 = 0 + c$<em>Anfangsbedingungen $\vec r\,'(0) = 0$, $\vec v\,'(0) = v_0\vec e_{y'}$ (3.207).</em></li>
<li>$v'^2 = v_0^2 + \omega^2r'^2$<em>Mit $v'^2 = \dot x'^2+\dot y'^2$, $r'^2 = x'^2+y'^2$ (3.208).</em></li>
</ol>`,
    example: R`$v_0 = 1{,}0\,\text{m/s}$, $\omega = 1{,}0\,\text{s}^{-1}$: Bei $r' = 2\,\text{m}$ ist $v' = \sqrt{1+4}\,\text{m/s} = 2{,}24\,\text{m/s}$.<br>
<b>Kontrolle im Inertialsystem:</b> Dort fliegt der Körper radial nach aussen mit $v_0$. Die Scheibe hat am Ort $r$ die Mitführgeschwindigkeit $\omega r$ tangential, senkrecht dazu. Relativ zur Scheibe ist die Geschwindigkeit also $\sqrt{v_0^2+(\omega r)^2}$ ✓, dasselbe Ergebnis ohne Rechnung.`,
    counterexample: R`<b>Kein echter Energiegewinn:</b> Im Inertialsystem bleibt die kinetische Energie $\tfrac12mv_0^2$ konstant. Die „wachsende“ Geschwindigkeit ist ein Effekt des Bezugssystems; man kann damit keine Arbeit gewinnen.`,
    pitfalls: R`<ul><li>Vorzeichenfehler im Kreuzprodukt $\vec\omega\times\vec v\,'$.</li>
<li>Den Coriolis-Term mit $\dot x'$ statt $\dot y'$ in der $x$-Gleichung schreiben.</li>
<li>Glauben, Coriolis ändere den Betrag der Geschwindigkeit.</li>
<li>Die Integrationskonstante $c$ nicht aus den Anfangsbedingungen bestimmen.</li></ul>`
  },
  {
    id: "ph3_coriolis_erde",
    title: "Corioliseffekt auf der Erdoberfläche: Winde und Tiefdruckwirbel",
    category: "3.11 Beschleunigte Bezugssysteme - „Scheinkräfte“",
    type: "konzept",
    front: R`Wie wirkt der <b>Corioliseffekt</b> auf Luftmassen, die sich über die Erdoberfläche bewegen? Warum drehen Tiefdruckgebiete auf der Nordhalbkugel <b>gegen</b> den Uhrzeigersinn, und was passiert am Äquator?`,
    back: R`Coriolis-Beschleunigung eines relativ zur Erde mit $\vec v\,'$ bewegten Massenelements:
$$\frac{\vec F_C}{m} = \vec a_C = -2\,\vec\omega\times\vec v\,' = 2\,\vec v\,'\times\vec\omega$$
<ul><li>Nordhalbkugel: Ein Südwind (von Süd nach Nord) wird nach <b>Osten</b>, ein Nordwind nach <b>Westen</b> abgelenkt, allgemein: Bewegungen werden nach <b>rechts</b> abgelenkt.</li>
<li>Vom Hoch zum Tief strömende Luft wird nach rechts abgelenkt; es entsteht ein Wirbel <b>gegen den Uhrzeigersinn</b> um das Tief (Abb. 3.30, Island).</li>
<li>Am Äquator ist ein nordwärts gerichtetes $\vec v\,'$ parallel zu $\vec\omega$: Die Coriolisbeschleunigung verschwindet. Beim Überschreiten des Äquators kehrt sich ihre (horizontale) Richtung um; auf der Südhalbkugel wird nach links abgelenkt.</li></ul>
Horizontale Ablenkung: $|a_{C,\text{hor}}| = 2v'\omega\sin\varphi$.`,
    meta: "Skript: Abschnitt 3.11.4.2, Abb. 3.29–3.30, S. 86–88",
    explanation: R`<b>Intuition:</b> Ein Punkt am Äquator bewegt sich mit der Erdrotation schneller nach Osten (465 m/s) als ein Punkt in Zürich (314 m/s). Eine Luftmasse, die nach Norden strömt, „bringt“ ihren grösseren Ostschwung mit und eilt dem Boden voraus, sie wird nach Osten (rechts) abgelenkt. Umgekehrt bleibt nach Süden strömende Luft zurück (Westablenkung, wieder nach rechts).<br><br>
<b>Breitenabhängigkeit:</b> Für horizontale Bewegungen zählt nur die vertikale Komponente von $\vec\omega$, $\omega_\perp = \omega\sin\varphi$: maximal an den Polen, null am Äquator. Darum entstehen tropische Wirbelstürme nicht direkt am Äquator.<br><br>
<b>Wirbel:</b> Luft strömt vom Hoch zum Tief, wird nach rechts abgelenkt und kreist schliesslich (fast) entlang der Isobaren um das Tief: gegen den Uhrzeigersinn (Nordhalbkugel). Um ein Hoch dreht sie im Uhrzeigersinn.<br><br>
<b>Zusammenhang:</b> Die Grösse des Effekts skaliert mit $v'\omega$. Bei Alltagsbewegungen (Bad, Auto) ist er winzig, bei grossräumigen, langsamen Strömungen über Stunden und Tage dominierend.`,
    derivation: R`Horizontale Komponente der Coriolisbeschleunigung auf der Breite $\varphi$:
<ol class="fc-steps">
<li>$\vec\omega = \vec\omega_\parallel + \vec\omega_\perp$, $|\vec\omega_\perp| = \omega\sin\varphi$<em>$\vec\omega$ in eine Komponente in der Horizontalebene (nach Norden, $\omega\cos\varphi$) und eine vertikale ($\omega\sin\varphi$) zerlegen.</em></li>
<li>$\vec a_C = 2\vec v\,'\times\vec\omega_\perp + 2\vec v\,'\times\vec\omega_\parallel$<em>Kreuzprodukt ist linear.</em></li>
<li>$\vec v\,'$ horizontal: $2\vec v\,'\times\vec\omega_\parallel$ ist vertikal<em>Zwei horizontale Vektoren ergeben ein vertikales Kreuzprodukt; es verändert nur minimal das scheinbare Gewicht.</em></li>
<li>$|\vec a_{C,\text{hor}}| = 2v'\omega\sin\varphi$, senkrecht zu $\vec v\,'$<em>Die horizontale Ablenkung kommt nur von $\vec\omega_\perp$; auf der Nordhalbkugel zeigt $\vec v\,'\times\vec\omega_\perp$ nach rechts von $\vec v\,'$.</em></li>
<li>$\varphi = 0$: $a_{C,\text{hor}} = 0$; $\varphi\lt0$: Vorzeichenwechsel<em>Am Äquator keine horizontale Ablenkung; auf der Südhalbkugel zeigt $\vec\omega_\perp$ nach unten, also Ablenkung nach links.</em></li>
</ol>`,
    example: R`<b>Wind</b> mit $v' = 10\,\text{m/s}$ in Zürich ($\varphi = 47{,}4^\circ$): $a = 2\cdot10\cdot7{,}29\cdot10^{-5}\cdot0{,}736\,\text{m/s}^2 = 1{,}07\cdot10^{-3}\,\text{m/s}^2$. Klein, aber über 3 Stunden ergibt das eine Querversetzung der Geschwindigkeit von etwa $11\,\text{m/s}$, so gross wie der Wind selbst. Deshalb dominiert Coriolis grossräumige Wettersysteme.`,
    counterexample: R`<b>Badewannenwirbel-Mythos:</b> Ob das Wasser im Abfluss links oder rechts herum dreht, entscheidet nicht der Corioliseffekt. Bei $v'\sim0{,}1\,\text{m/s}$ und Wannengrösse $\sim1\,\text{m}$ ist $a_C\sim10^{-5}\,\text{m/s}^2$, viel kleiner als die Effekte der Restströmung und der Wannenform. Nur in extrem ruhigen Laborversuchen ist der Effekt nachweisbar.`,
    pitfalls: R`<ul><li>$\cos\varphi$ statt $\sin\varphi$ für die horizontale Ablenkung verwenden.</li>
<li>Die Drehrichtung von Hoch und Tief verwechseln.</li>
<li>Annehmen, am Äquator gebe es gar keine Coriolisbeschleunigung; nur die horizontale verschwindet (z. B. für ost-westliche Bewegung gibt es eine vertikale).</li>
<li>Den Effekt bei kleinen, schnellen Bewegungen überschätzen.</li></ul>`
  },
  {
    id: "ph3_foucault",
    title: "Foucault-Pendel: Drehung der Schwingungsebene mit ω sin φ",
    category: "3.11 Beschleunigte Bezugssysteme - „Scheinkräfte“",
    type: "herleitung",
    front: R`Wie beweist das <b>Foucault-Pendel</b> die Erdrotation? Leite mit dem Coriolisterm die Drehgeschwindigkeit der Schwingungsebene $\dot\alpha = \omega\sin\varphi$ her. Nach wie vielen Schwingungen hat sich die Ebene einmal ganz gedreht?`,
    back: R`Auf der Breite $\varphi$ wirkt für die horizontale Pendelbewegung nur die vertikale Komponente $\omega_\perp$:
$$\vec a_C = 2\vec v\,'\times(\vec\omega_\perp+\vec\omega_\parallel)\to2\vec v\,'\times\vec\omega_\perp,\qquad|\vec a_C| = 2v'\omega_\perp = 2v'\omega\sin\varphi\qquad(3.209,\,3.210)$$
Das Pendel schwingt zunächst in der $y'z'$-Ebene: $y' = A\cos\Omega t$, $\dot y' = -A\Omega\sin\Omega t$ (3.211, 3.212). Querbeschleunigung:
$$\ddot x' = 2\dot y'\omega_\perp = -2A\Omega\omega_\perp\sin\Omega t\qquad(3.213)$$
Zweimal integriert über eine halbe Periode ($\omega\ll\Omega$, $\Delta x'\ll A$):
$$|\Delta x'| = A\,\omega_\perp T,\qquad \Delta\alpha = \frac{|\Delta x'|}{2A} = \omega_\perp\frac T2\qquad(3.215,\,3.216)$$
$$\dot\alpha = \frac{\Delta\alpha}{T/2} = \omega_\perp = \omega\sin\varphi\qquad(3.217)$$
Volle Umdrehung nach $N = \dfrac{2\pi}{\omega_\perp T}$ Schwingungen (3.218). Daraus kann man die geografische Breite bestimmen.`,
    meta: "Skript: Abschnitt 3.11.4.3, Gl. (3.209)–(3.218), Abb. 3.31–3.32, S. 86–90",
    explanation: R`<b>Intuition:</b> Im Inertialsystem behält das Pendel seine Schwingungsebene bei (keine Kraft dreht sie). Die Erde dreht sich darunter weg. Am Pol sieht man in einem Sterntag eine volle Drehung der Ebene. Am Äquator dreht sich der Boden nicht um die Lotrichtung, und es gibt keine Drehung. Dazwischen zählt nur die vertikale Komponente der Erddrehung: $\omega\sin\varphi$.<br><br>
<b>Im Erdsystem</b> sieht man denselben Effekt als Corioliskraft: Sie lenkt das Pendel bei jedem Hin- und Herschwingen ein kleines Stück nach rechts (Nordhalbkugel), und die Schwingungsebene wandert im Uhrzeigersinn.<br><br>
<b>Warum braucht man ein langes Pendel?</b> Die Ablenkung pro Schwingung ist winzig ($\omega_\perp T\ll1$). Ein langes, schweres Pendel schwingt lange ungestört, und die Drehung summiert sich über Stunden sichtbar auf.<br><br>
<b>Abhängigkeit:</b> Die Periode der Ebenendrehung ist $T_F = \frac{2\pi}{\omega\sin\varphi} = \frac{T_\text{Sterntag}}{\sin\varphi}$, unabhängig von der Pendellänge.`,
    derivation: R`<ol class="fc-steps">
<li>$\ddot x' = 2\dot y'\omega_\perp = -2A\Omega\omega_\perp\sin\Omega t$<em>Coriolis-Querbeschleunigung mit $\dot y' = -A\Omega\sin\Omega t$; Vorzeichen gemäss Achsenwahl in Abb. 3.32 (3.213).</em></li>
<li>$\dot x'(t) = -2A\Omega\omega_\perp\displaystyle\int_0^t\sin\Omega t'\,dt' = -2A\omega_\perp(1-\cos\Omega t)$<em>Einmal integrieren mit $\dot x'(0) = 0$ (3.214).</em></li>
<li>$\Delta x' = -2A\omega_\perp\left[t'-\tfrac1\Omega\sin\Omega t'\right]_0^{T/2} = -A\omega_\perp T$<em>Nochmals integrieren über eine halbe Periode; $\sin(\Omega T/2) = \sin\pi = 0$ (3.215).</em></li>
<li>$\Delta\alpha\approx\dfrac{|\Delta x'|}{2A} = \dfrac{\omega_\perp T}{2}$<em>Nach einer halben Periode liegt der Umkehrpunkt um $\Delta x'$ seitlich versetzt; bezogen auf die Strecke $2A$ von Umkehrpunkt zu Umkehrpunkt ist das der kleine Drehwinkel (3.216).</em></li>
<li>$\dot\alpha = \dfrac{\Delta\alpha}{T/2} = \omega_\perp = \omega\sin\varphi$<em>Winkelgeschwindigkeit der Ebenendrehung (3.217).</em></li>
<li>$N = \dfrac{2\pi}{2\Delta\alpha} = \dfrac{2\pi}{\omega_\perp T}$<em>Pro voller Periode $2\Delta\alpha = \omega_\perp T$; für eine Umdrehung braucht es $2\pi$ (3.218).</em></li>
</ol>`,
    example: R`<b>Zürich</b> ($\varphi = 47{,}4^\circ$): $T_F = \frac{23{,}93\,\text{h}}{\sin47{,}4^\circ} = \frac{23{,}93}{0{,}736}\,\text{h} = 32{,}5\,\text{h}$. Die Ebene dreht sich um etwa $11^\circ$ pro Stunde.<br>
Pendel mit $\ell = 67\,\text{m}$ (Panthéon), $T = 2\pi\sqrt{\ell/g} = 16{,}4\,\text{s}$: In Zürich wären das $N = \frac{32{,}5\cdot3600}{16{,}4}\approx7100$ Schwingungen für eine volle Umdrehung.<br>
<b>Pol:</b> $T_F = 23{,}93\,\text{h}$ (ein Sterntag).`,
    counterexample: R`<b>Am Äquator</b> dreht sich die Schwingungsebene überhaupt nicht ($\sin0 = 0$): Ein Foucault-Pendel in Quito würde nichts zeigen, obwohl sich die Erde dort mit 465 m/s dreht. Der Effekt misst nicht die Rotationsgeschwindigkeit des Bodens, sondern dessen Drehung um die Lotrichtung.`,
    pitfalls: R`<ul><li>$\cos\varphi$ statt $\sin\varphi$ verwenden.</li>
<li>Den Sonnentag (24 h) statt des Sterntags (23 h 56 min) für $2\pi/\omega$ nehmen.</li>
<li>Glauben, die Drehperiode hänge von der Pendellänge ab.</li>
<li>Den Drehsinn verwechseln: Auf der Nordhalbkugel dreht sich die Ebene (von oben gesehen) im Uhrzeigersinn.</li></ul>`
  },

  // ========================================================================
  // ERGÄNZUNGEN: typische Prüfungsaufgaben und Brücken zu Physik II
  // ========================================================================
  {
    id: "ph3_atwood_seilkraefte",
    title: "Seilkräfte: Atwood’sche Fallmaschine und Block auf dem Tisch mit hängender Masse",
    category: "3.9 Anwendungen: Kontaktkräfte",
    type: "beispiel",
    front: R`(a) Zwei Massen $m_1\gt m_2$ hängen an einem Seil über eine masselose, reibungsfreie Rolle (<b>Atwood</b>). Bestimme Beschleunigung und Seilkraft. (b) Ein Block $m_1$ liegt auf einem Tisch (Gleitreibung $\mu$) und ist über eine Rolle an der Tischkante mit einer hängenden Masse $m_2$ verbunden. Wie gross ist die Beschleunigung?`,
    back: R`Ideales Seil (masselos, undehnbar) über masselose Rolle: <b>gleiche Seilkraft $S$</b> an beiden Enden, <b>gleicher Betrag der Beschleunigung</b> $a$ (Zwangsbedingung).<br><br>
<b>(a) Atwood</b> ($m_1$ sinkt):
$$m_1a = m_1g-S,\qquad m_2a = S-m_2g\;\Rightarrow\;a = g\frac{m_1-m_2}{m_1+m_2},\qquad S = \frac{2m_1m_2}{m_1+m_2}g$$
<b>(b) Tisch:</b> $m_1a = S-\mu m_1g$, $m_2a = m_2g-S$:
$$a = g\frac{m_2-\mu m_1}{m_1+m_2},\qquad S = m_2(g-a)$$
Bewegung setzt nur ein, wenn $m_2g\gt\mu_0m_1g$ (Haftreibung).`,
    meta: "Ergänzung (typische Prüfungsaufgabe); baut auf Abschnitten 3.9.1 (Kräftediagramm), 3.9.4 (Reibung) und 8.5.9.2 (Laufrolle mit Masse) auf",
    explanation: R`<b>Intuition:</b> Die Schwerkraft auf die Massendifferenz $(m_1-m_2)g$ muss die <i>gesamte</i> Masse $m_1+m_2$ beschleunigen. Deshalb ist $a$ viel kleiner als $g$, wenn die Massen ähnlich sind – so mass Atwood $g$ mit langsamen, gut beobachtbaren Bewegungen.<br><br>
<b>Seilkraft:</b> Liegt zwischen $m_2g$ und $m_1g$: Das leichte Gewicht wird hochgezogen ($S\gt m_2g$), das schwere fällt gebremst ($S\lt m_1g$). Bei $m_1 = m_2$ ist $S = mg$, bei $m_2\to0$ geht $S\to0$.<br><br>
<b>Methode:</b> Für jeden Körper ein eigenes Freikörperbild und eine eigene Gleichung (in seiner Bewegungsrichtung positiv), dann Zwangsbedingung einsetzen. Alternativ das ganze System als „ein Körper entlang des Seils“: Antriebskraft minus Widerstände = Gesamtmasse mal $a$.<br><br>
<b>Zusammenhang:</b> Mit massiver Rolle kommt deren Trägheit $J/R^2$ in den Nenner (Laufrolle, 8.5.9.2). Freikörperbild wie bei den aufeinanderliegenden Blöcken (3.9.1).`,
    derivation: R`<ol class="fc-steps">
<li>$m_1$: $m_1a = m_1g-S$<em>Achse nach unten positiv für $m_1$.</em></li>
<li>$m_2$: $m_2a = S-m_2g$<em>Achse nach oben positiv für $m_2$; gleiches $a$ (Seil undehnbar).</em></li>
<li>$(m_1+m_2)a = (m_1-m_2)g$<em>Addieren: Die Seilkraft fällt heraus (innere Kraft des Systems).</em></li>
<li>$a = g\dfrac{m_1-m_2}{m_1+m_2}$<em>Auflösen.</em></li>
<li>$S = m_2(g+a) = m_2g\dfrac{2m_1}{m_1+m_2}$<em>In die Gleichung für $m_2$ einsetzen.</em></li>
</ol>`,
    example: R`Atwood mit $m_1 = 3\,\text{kg}$, $m_2 = 2\,\text{kg}$: $a = 1{,}96\,\text{m/s}^2$, $S = 23{,}5\,\text{N}$ (zwischen $19{,}6$ und $29{,}4\,\text{N}$ ✓).<br>
Tisch: $m_1 = 4\,\text{kg}$, $\mu = 0{,}2$, $m_2 = 1\,\text{kg}$: $a = \frac{1-0{,}8}{5}g = 0{,}39\,\text{m/s}^2$, $S = 9{,}4\,\text{N}$.`,
    counterexample: R`<b>„Die Seilkraft ist gleich dem Gewicht der hängenden Masse“:</b> stimmt nur, wenn nichts beschleunigt. Sobald sich das System bewegt, ist $S\neq m_2g$. Ebenso ist bei massiver Rolle die Seilkraft auf beiden Seiten verschieden; die Differenz liefert das Drehmoment für die Rolle.`,
    pitfalls: R`<ul><li>Für die beiden Massen verschiedene Beschleunigungsbeträge ansetzen.</li>
<li>Vorzeichenkonvention zwischen den Körpern nicht abstimmen.</li>
<li>Gleit- und Haftreibung verwechseln: Ob es losgeht, entscheidet $\mu_0$; wie schnell, $\mu$.</li></ul>`
  },
  {
    id: "ph3_kreisbewegung_dynamik",
    title: "Kreisbewegung als Dynamikaufgabe: Kurvenfahrt, überhöhte Kurve, Kegelpendel",
    category: "3.9 Anwendungen: Kontaktkräfte",
    type: "beispiel",
    front: R`Welche Kraft liefert jeweils die nötige <b>Zentripetalkraft</b> $m\frac{v^2}r$? Berechne (a) die Höchstgeschwindigkeit in einer flachen Kurve mit Haftreibung $\mu_0$, (b) den Überhöhungswinkel, bei dem eine Kurve ohne Reibung durchfahren werden kann, (c) die Winkelgeschwindigkeit eines <b>Kegelpendels</b> (Faden $\ell$, Winkel $\theta$ zur Vertikalen).`,
    back: R`Die Zentripetalkraft ist <b>keine eigene Kraft</b>, sondern die Summe der realen Kräfte in Richtung Kreismittelpunkt: $\sum F_\text{radial} = m\frac{v^2}r = m\omega^2r$ (vgl. 2.5.3, 3.4).<br><br>
<b>(a) Flache Kurve:</b> Haftreibung liefert sie: $m\frac{v^2}r\le\mu_0mg$
$$v_\text{max} = \sqrt{\mu_0gr}$$
<b>(b) Überhöhte Kurve ohne Reibung</b> (Winkel $\theta$): Normalkraft hat eine horizontale Komponente: $N\sin\theta = m\frac{v^2}r$, $N\cos\theta = mg$:
$$\tan\theta = \frac{v^2}{rg}$$
<b>(c) Kegelpendel:</b> Fadenkraft $F$: $F\cos\theta = mg$, $F\sin\theta = m\omega^2\ell\sin\theta$ (Radius $r = \ell\sin\theta$):
$$\omega^2 = \frac g{\ell\cos\theta},\qquad F = \frac{mg}{\cos\theta}$$`,
    meta: "Ergänzung (typische Prüfungsaufgabe); baut auf Abschnitten 2.5.3 (Zentripetalbeschleunigung), 3.4 (Newton II) und 3.9.4 (Haftreibung) auf",
    explanation: R`<b>Intuition:</b> Um auf einer Kreisbahn zu bleiben, braucht ein Körper eine dauernd zum Zentrum gerichtete Kraft. Je nach Situation übernimmt das die Reibung der Reifen, die schräge Fahrbahn, ein Faden oder die Gravitation. „Zentrifugalkraft“ gibt es nur im mitrotierenden (nichtinertialen) System (3.11).<br><br>
<b>Abhängigkeiten:</b> $v_\text{max}\propto\sqrt{r}$ und $\propto\sqrt{\mu_0}$ – unabhängig von der Masse. Halber Kurvenradius: nur $71\,\%$ der Geschwindigkeit. Bei Nässe ($\mu_0$ halb) ebenfalls nur $71\,\%$.<br><br>
<b>Überhöhung:</b> Für genau eine Geschwindigkeit braucht man gar keine Reibung; schneller rutscht man nach aussen, langsamer nach innen. Velodrome und Autobahnkurven sind so gebaut.<br><br>
<b>Kegelpendel:</b> Für $\theta\to0$ wird $\omega^2\to g/\ell$: dieselbe Frequenz wie beim ebenen Pendel (die Projektion ist eine harmonische Schwingung, 9.2.3).<br><br>
<b>Zusammenhang:</b> Looping (4.5.2): am höchsten Punkt $v\ge\sqrt{gR}$; Satellitenbahn (Gravitation als Zentripetalkraft, 7.2).`,
    derivation: R`Kegelpendel Schritt für Schritt:
<ol class="fc-steps">
<li>Kräfte: Gewicht $mg$ nach unten, Fadenkraft $F$ entlang des Fadens<em>Freikörperbild; keine „Zentrifugalkraft“ im Inertialsystem.</em></li>
<li>vertikal: $F\cos\theta-mg = 0$<em>Keine vertikale Beschleunigung.</em></li>
<li>horizontal: $F\sin\theta = m\omega^2r$, $r = \ell\sin\theta$<em>Horizontale Komponente ist die Zentripetalkraft.</em></li>
<li>$\dfrac{mg}{\cos\theta}\sin\theta = m\omega^2\ell\sin\theta$<em>$F$ eingesetzt.</em></li>
<li>$\omega^2 = \dfrac g{\ell\cos\theta}$, $T = 2\pi\sqrt{\dfrac{\ell\cos\theta}g}$<em>$\sin\theta$ kürzt sich; Umlaufzeit.</em></li>
</ol>`,
    example: R`(a) $r = 50\,\text{m}$, $\mu_0 = 0{,}8$: $v_\text{max} = 19{,}8\,\text{m/s} = 71\,\text{km/h}$.<br>
(b) $v = 25\,\text{m/s}$, $r = 100\,\text{m}$: $\tan\theta = 0{,}64$, $\theta = 32{,}5^\circ$.<br>
(c) $\ell = 1\,\text{m}$, $\theta = 30^\circ$: $\omega = 3{,}37\,\text{s}^{-1}$, $T = 1{,}87\,\text{s}$, Fadenkraft $1{,}15\,mg$.`,
    counterexample: R`<b>„In der Kurve wird man nach aussen gedrückt“:</b> Im Inertialsystem wirkt keine Kraft nach aussen; der Körper möchte geradeaus weiter (Trägheit), und der Sitz drückt ihn nach innen. Wer in der Inertialsystem-Rechnung zusätzlich eine Zentrifugalkraft einträgt, zählt doppelt und erhält null Nettokraft – also gar keine Kreisbewegung.`,
    pitfalls: R`<ul><li>Die Zentripetalkraft als zusätzliche Kraft ins Freikörperbild zeichnen.</li>
<li>Beim Kegelpendel die Fadenlänge $\ell$ statt Bahnradius $\ell\sin\theta$ verwenden.</li>
<li>Bei der überhöhten Kurve $N = mg\cos\theta$ setzen (das gilt auf der schiefen Ebene ohne Kreisbewegung, nicht hier).</li></ul>`
  },
  {
    id: "ph3_federn_kombination",
    title: "Federn in Reihe und parallel: effektive Federkonstante",
    category: "3.9 Anwendungen: Kontaktkräfte",
    type: "herleitung",
    front: R`Zwei Federn $k_1$, $k_2$ werden (a) <b>parallel</b> und (b) <b>in Reihe</b> geschaltet. Leite die effektiven Federkonstanten her. Wie ändert sich die Schwingungsfrequenz einer angehängten Masse? Was passiert, wenn man eine Feder halbiert?`,
    back: R`<b>(a) Parallel:</b> gleiche Auslenkung $x$, Kräfte addieren sich:
$$F = k_1x+k_2x\;\Rightarrow\;k_\parallel = k_1+k_2$$
<b>(b) Reihe:</b> gleiche Kraft $F$ in beiden Federn, Auslenkungen addieren sich:
$$x = \frac F{k_1}+\frac F{k_2}\;\Rightarrow\;\frac1{k_\text{R}} = \frac1{k_1}+\frac1{k_2},\qquad k_\text{R} = \frac{k_1k_2}{k_1+k_2}$$
Federpendel: $\omega = \sqrt{k_\text{eff}/m}$ (3.9.3).<br>
<b>Halbierte Feder:</b> Eine Feder $k$ ist eine Reihenschaltung zweier Hälften $k'$: $\frac1k = \frac2{k'}\Rightarrow k' = 2k$. Kürzere Federn sind steifer.`,
    meta: "Ergänzung (typische Prüfungsaufgabe); baut auf Abschnitt 3.9.3 (Hooke, Federpendel) auf",
    explanation: R`<b>Intuition:</b> Parallel geschaltete Federn teilen sich die Last – das System ist steifer. In Reihe geschaltete Federn dehnen sich beide – das System ist weicher. Merkregel: genau umgekehrt wie bei elektrischen Widerständen (parallel: Kehrwerte addieren), aber wie bei Kondensatoren.<br><br>
<b>Abhängigkeiten:</b> Zwei gleiche Federn parallel: $2k$, $\omega\times\sqrt2$. In Reihe: $k/2$, $\omega/\sqrt2$. Die schwächere Feder dominiert die Reihenschaltung ($k_\text{R}\lt\min(k_1,k_2)$).<br><br>
<b>Federkonstante und Länge:</b> $k\propto1/L$ für dasselbe Material und denselben Querschnitt. Das ist der Grund, warum in der Oszillatorkette (Wellen) die Grösse $ka$ (Federkonstante mal Abstand) eine Materialkonstante ist.<br><br>
<b>Zusammenhang:</b> Gekoppelte Pendel (9.7.1): Eine Feder zwischen zwei Pendeln wirkt wie zwei Federn je $2k$ von der Mitte aus – daher $\omega_1^2 = \omega_0^2+2k/m$. Analog im Schwingkreis: Kondensatoren in Reihe/parallel ($1/C\leftrightarrow k$, Tab. 9.1).`,
    derivation: R`Reihenschaltung Schritt für Schritt:
<ol class="fc-steps">
<li>Masselose Federn: Kraft in beiden gleich $F$<em>Freikörperbild des Verbindungspunkts: $F_1 = F_2$ (Newton III, masselos).</em></li>
<li>$x_1 = F/k_1$, $x_2 = F/k_2$<em>Hooke für jede Feder.</em></li>
<li>$x = x_1+x_2 = F\left(\dfrac1{k_1}+\dfrac1{k_2}\right)$<em>Gesamtdehnung.</em></li>
<li>$k_\text{R} = \dfrac Fx = \left(\dfrac1{k_1}+\dfrac1{k_2}\right)^{-1}$<em>Definition der effektiven Federkonstante.</em></li>
<li>Parallel: $x$ gleich, $F = F_1+F_2 = (k_1+k_2)x$<em>Gegenstück.</em></li>
</ol>`,
    example: R`$k_1 = 100\,\text{N/m}$, $k_2 = 300\,\text{N/m}$: parallel $400$, in Reihe $75\,\text{N/m}$. Mit $m = 1\,\text{kg}$: $\omega = 20$ bzw. $8{,}66\,\text{s}^{-1}$.<br>
Masse zwischen zwei Federn (links und rechts an Wänden befestigt): Beide wirken bei Auslenkung in dieselbe Richtung zurück – das ist eine <i>Parallel</i>schaltung, $k_\text{eff} = k_1+k_2$.`,
    counterexample: R`<b>Geometrie täuscht:</b> Eine Masse zwischen zwei Federn, die hintereinander an gegenüberliegenden Wänden hängen, sieht aus wie „in Reihe“, ist aber parallel (gleiche Auslenkung, Kräfte addieren sich). Entscheidend ist, ob die Federn dieselbe Auslenkung oder dieselbe Kraft haben – nicht, wie sie gezeichnet sind.`,
    pitfalls: R`<ul><li>Die Formeln mit denen für elektrische Widerstände verwechseln.</li>
<li>Die Schaltung nach dem Bild statt nach Kraft/Auslenkung beurteilen.</li>
<li>Bei Federn mit Masse die einfachen Formeln verwenden.</li></ul>`
  }
];
})();
