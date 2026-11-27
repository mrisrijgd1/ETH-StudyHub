/* ==========================================================================
   PHYSICS I – CHAPTER 3 (English): Dynamics of the point mass
   Mass, momentum, conservation of momentum, Newton I–III, impulse, rocket, contact forces,
   friction, force fields, gravitation and weight, accelerated reference frames
   Script Physics I – Prof. K. Ensslin, ETH Zurich, HS 2025
   English translation of data_kapitel3.js. Formulas, HTML and ids are identical.
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_EN_KAPITEL_3 = {
  "ph3_masse": {
    title: R`Mass vs. weight and the definition of mass by the recoil experiment`,
    category: R`3.1 Mass`,
    type: "definition",
    front: R`What is the difference between <b>mass</b> and <b>weight</b>? How is mass defined operationally by the <b>recoil experiment</b>?`,
    back: R`<ul><li><b>Mass:</b> scalar property of a body (“how much matter”), the same everywhere, unit kg.</li>
<li><b>Weight:</b> a <b>force</b> (vector, unit N) that a body exerts, e.g. on the floor; depends on the situation (zero in orbit).</li></ul>
<b>Recoil experiment</b> (Fig. 3.1): two carts A, B on a frictionless air track, with a spring between them held together by a thread. Cut the thread: the carts move apart with $v_A$ and $v_B$. Experimentally,
$$\frac{m_A}{m_B} = \frac{v_B}{v_A}\qquad(3.1)$$
One chooses $m_B$ as the standard mass ($[m] = 1\,\text{kg}$, 3.2) and defines
$$m_A = m_B\,\frac{v_B}{v_A}\qquad(3.3)$$
The ratio depends neither on weight (it also works in space) nor on the spring, only on the carts. Masses span about 80 powers of ten (electron $9{,}1\cdot10^{-31}\,\text{kg}$ to the universe $\approx10^{52}\,\text{kg}$).`,
    meta: "Script: Section 3.1.1, Eqs. (3.1)–(3.4), Fig. 3.1, Table 3.1, pp. 31–34",
    explanation: R`<b>Intuition:</b> Mass measures how strongly a body resists a change in its state of motion (inertia). In the recoil, both carts push each other apart with equal force. The “heavier” cart speeds up less: $v\propto1/m$.<br><br>
<b>Why independent of the spring?</b> A stronger spring makes both speeds larger in the same ratio. The ratio $v_B/v_A$ stays the same, so it is a property of the carts alone.<br><br>
<b>Mass vs. weight in everyday life:</b> “I weigh 60 kg” refers to the mass. The weight is $60\,\text{kg}\cdot9{,}81\,\text{m/s}^2\approx589\,\text{N}$. An astronaut in orbit is <i>weightless</i>, but not <i>massless</i>.<br><br>
<b>Connection:</b> Rewriting (3.1) gives $m_Av_A = m_Bv_B$. From this the concept of momentum and momentum conservation (3.2–3.3) follow directly.`,
    derivation: R`Operational definition step by step:
<ol class="fc-steps">
<li>Before: both carts at rest<em>Initial state with the spring compressed; the system is isolated (the air cushion compensates gravity, no friction).</em></li>
<li>Measurement: $v_A$, $v_B$ after the thread is cut<em>The carts move in opposite directions; one measures the magnitudes.</em></li>
<li>Varying the spring: $v_A\to\lambda v_A$, $v_B\to\lambda v_B$<em>Experimentally both are scaled equally; the ratio $v_B/v_A$ is a pure property of the carts.</em></li>
<li>$m_A := m_B\,\dfrac{v_B}{v_A}$ with $m_B = 1\,\text{kg}$<em>Definition relative to a standard mass (3.3, 3.4).</em></li>
<li>Consistency: $\dfrac{m_A}{m_C} = \dfrac{m_A}{m_B}\cdot\dfrac{m_B}{m_C}$<em>A direct experiment A against C confirms the product of the individual ratios. Only this transitivity makes $m$ a meaningful number per body.</em></li>
</ol>`,
    example: R`Cart A moves away after the recoil at $0{,}20\,\text{m/s}$, the standard cart ($1\,\text{kg}$) at $0{,}50\,\text{m/s}$. So $m_A = 1\,\text{kg}\cdot\frac{0{,}50}{0{,}20} = 2{,}5\,\text{kg}$.<br><br>
<b>Astronaut:</b> mass 60 kg on Earth, on the Moon and on the ISS. The weight is 589 N on Earth, about 97 N on the Moon ($g/6$), and “felt” as 0 N on the ISS, although gravity there is still about 89 % of its Earth value (3.10.3.2).`,
    counterexample: R`<b>Bathroom scale on the Moon:</b> a spring scale there shows about one sixth. It measures the <i>weight</i> (the normal force) and converts it into “kg” using $g_\text{Erde}$. The mass has not changed. A balance (comparison with standard masses), by contrast, would show the correct mass on the Moon as well.`,
    pitfalls: R`<ul><li>Equating mass (kg, scalar) with weight (N, vector).</li>
<li>Interpreting “weightless” as “no gravity”.</li>
<li>Believing the spring determines the mass; it determines only the speeds, not their ratio.</li>
<li>Forgetting the directions: $v_A$ and $v_B$ in (3.1) are magnitudes, the velocity vectors are opposite.</li></ul>`
  },
  "ph3_traege_schwere_masse": {
    title: R`Inertial and gravitational mass, Eötvös and the equivalence principle`,
    category: R`3.1 Mass`,
    type: "konzept",
    front: R`What is the difference between <b>inertial</b> and <b>gravitational mass</b>? How precisely do we know that they are equal, and what follows from this?`,
    back: R`<ul><li><b>Inertial mass</b> $m_t$: the quantity measured in the recoil experiment; it appears in $\vec F = m_t\,\vec a$ and parametrises the resistance to acceleration.</li>
<li><b>Gravitational mass</b> $m_s$: the quantity measured with a balance; it determines the gravitational force $\vec F_G = m_s\vec g$ (coupling to the gravitational field).</li></ul>
Experiment: bodies with the same inertial mass experience the same gravitational forces.
<ul><li><b>Eötvös</b> (1909): equality to 1 part in $10^{9}$</li>
<li><b>Dicke</b>: to 1 part in $10^{11}$</li></ul>
Mechanics does not explain the equality. Only general relativity justifies it through the <b>equivalence principle</b>: one cannot determine whether one is in a gravitational field or in an accelerated frame of reference.`,
    meta: "Script: Section 3.1.2, Fig. 3.2, pp. 34–35; cf. 3.10.3.1 (Eqs. 3.118–3.119)",
    explanation: R`<b>Intuition:</b> It is <i>by no means obvious</i> that the property “heavy” (how strongly the Earth pulls) and the property “inert” (how hard it is to accelerate) are the same number. For electric forces the coupling quantity (charge $q$) is, after all, completely independent of inertia $m$.<br><br>
<b>Consequence: universal free fall.</b> From $m_t a = m_s g$ it follows that $a = (m_s/m_t)\,g = g$ for all bodies. That is why the mass cancels in every gravitational problem, and why orbits in a gravitational field are independent of mass (planets, throws, satellites).<br><br>
<b>The equivalence principle concretely:</b> in a closed box accelerating upwards with $g$, everything behaves as in the Earth’s gravitational field. In a freely falling lift everything is weightless, as if there were no field (3.11.4).<br><br>
<b>Connection:</b> Fictitious forces are therefore always $\propto m$ (3.11.3), just like the gravitational force. This is why gravity can be “transformed away” locally.`,
    derivation: R`Why a difference would be measurable:
<ol class="fc-steps">
<li>$m_t\,\vec a = m_s\,\vec g$<em>Newton II with inertial mass on the left, gravitational force with gravitational mass on the right.</em></li>
<li>$\vec a = \dfrac{m_s}{m_t}\,\vec g$<em>Solve for the acceleration.</em></li>
<li>$\eta := \dfrac{|a_1-a_2|}{\tfrac12(a_1+a_2)} = \left|\dfrac{m_{s1}}{m_{t1}}-\dfrac{m_{s2}}{m_{t2}}\right|\Big/\dots$<em>If two materials had different ratios $m_s/m_t$, they would fall at different rates. The relative difference $\eta$ is the measured quantity.</em></li>
<li>Eötvös: $\eta\lt 10^{-9}$, Dicke: $\eta\lt 10^{-11}$<em>Torsion balances compare the gravitational and inertial effects (e.g. of the Earth’s rotation) on two different materials; no difference has ever been found.</em></li>
<li>Convention: $m_s = m_t =: m$<em>With a suitable choice of units one sets the ratios exactly equal to 1 and speaks simply of “the mass”.</em></li>
</ol>`,
    example: R`A hammer and a feather on the Moon (Apollo 15) fall at the same rate. Without air resistance $a = g_\text{Mond}\approx1{,}6\,\text{m/s}^2$ for both.<br><br>
<b>Scale of precision:</b> $\eta\lt 10^{-11}$ means, at $g = 9{,}81\,\text{m/s}^2$, that the free-fall accelerations of two materials differ by less than $10^{-10}\,\text{m/s}^2$.`,
    counterexample: R`<b>Electric force:</b> in an electric field $\vec E$, $\vec a = (q/m)\,\vec E$. Electron and proton have equal but opposite charges, yet $m_p/m_e\approx1836$. The electron is therefore accelerated almost 2000 times more strongly. Here there is <i>no</i> equivalence principle: the “coupling constant” $q$ has nothing to do with inertia.`,
    pitfalls: R`<ul><li>Believing that the equality of inertial and gravitational mass is logically compelling. It is an experimental finding.</li>
<li>Assuming heavy bodies fall faster.</li>
<li>Forgetting that $m$ cancels only in <b>gravitational</b> problems, not for other forces (friction with $\mu$ is an exception, because $F_N\propto m$).</li></ul>`
  },

  "ph3_impuls": {
    title: R`The linear momentum p = m v`,
    category: R`3.2 Momentum`,
    type: "definition",
    front: R`How is the <b>linear momentum</b> motivated and defined from the recoil experiment? What does “$\vec p_\text{tot}(\text{before}) = \vec p_\text{tot}(\text{after})$” mean in the recoil experiment?`,
    back: R`From $\frac{m_A}{m_B} = \frac{v_B}{v_A}$ it follows that $m_Av_A = m_Bv_B$ (3.5). Since the carts move in opposite directions, vectorially
$$m_A\vec v_A = -m_B\vec v_B\quad\Longleftrightarrow\quad m_A\vec v_A + m_B\vec v_B = \vec 0\qquad(3.6,\,3.7)$$
<b>Definition:</b> the linear momentum of a particle is
$$\vec p = m\,\vec v\qquad(3.8)$$
a <b>vector</b> (scalar times vector), unit $\text{kg}\,\text{m/s}$. With the <b>total momentum</b> $\vec p_\text{tot} = \vec p_A + \vec p_B$ (3.12): before, both are at rest ($\vec p_\text{tot} = \vec 0$, 3.10–3.11); afterwards $\vec p_\text{tot} = \vec 0$ too (3.9). Hence
$$\vec p_\text{tot}(\text{before}) = \vec p_\text{tot}(\text{after})\qquad(3.13)$$`,
    meta: "Script: Section 3.2.1, Eqs. (3.5)–(3.13), pp. 36–37",
    explanation: R`<b>Intuition:</b> Momentum is the “quantity of motion” of a body: it combines how much mass moves how fast and in which direction. A slow lorry and a fast bullet can have comparable momenta.<br><br>
<b>Why exactly $m\vec v$?</b> One looks for a quantity that remains <i>unchanged</i> when the thread is cut. $m_A\vec v_A + m_B\vec v_B$ does this, and each summand belongs to only one cart, so it is a property of the individual body.<br><br>
<b>Dependencies:</b> $p\propto m$ and $p\propto v$ (linear), in contrast to the kinetic energy $E = \tfrac12mv^2 = \frac{p^2}{2m}$ (Ch. 4), which is quadratic in $v$.<br><br>
<b>Connection:</b> Newton II reads in general $\vec F = d\vec p/dt$ (3.4). Momentum is therefore the quantity whose change is a force. Its analogue for rotations is the angular momentum $\vec L = \vec r\times\vec p$ (Ch. 5).`,
    derivation: R`From the measurement result to the conserved quantity:
<ol class="fc-steps">
<li>$\dfrac{m_A}{m_B} = \dfrac{v_B}{v_A}\;\Rightarrow\;m_A v_A = m_B v_B$<em>Cross-multiply (magnitudes).</em></li>
<li>$\vec v_A\uparrow\downarrow\vec v_B\;\Rightarrow\;m_A\vec v_A = -m_B\vec v_B$<em>The carts move in opposite directions; with vectors the minus sign appears. The vector form must hold in every frame of reference.</em></li>
<li>$m_A\vec v_A + m_B\vec v_B = \vec 0 = m_A\vec v_A^{\,*} + m_B\vec v_B^{\,*}$<em>Afterwards the sum is zero, and before too (both at rest, $\vec v^{\,*} = \vec 0$).</em></li>
<li>$\vec p := m\vec v$, $\vec p_\text{tot} := \vec p_A + \vec p_B = \text{const}$<em>The quantity $m\vec v$ of each body adds up to a quantity that the process does not change (3.8, 3.12, 3.13).</em></li>
</ol>`,
    example: R`Car: $m = 1000\,\text{kg}$, $v = 20\,\text{m/s}$, so $p = 2\cdot10^{4}\,\text{kg}\,\text{m/s}$.<br>
Bullet: $m = 10\,\text{g}$, $v = 400\,\text{m/s}$, so $p = 4\,\text{kg}\,\text{m/s}$.<br>
Recoil of the rifle ($4\,\text{kg}$): total momentum zero, so $v_\text{rifle} = -\frac{4\,\text{kg m/s}}{4\,\text{kg}} = -1\,\text{m/s}$.`,
    counterexample: R`<b>Same momentum, different energy:</b> the bullet (10 g, 400 m/s) and a ball (4 kg, 1 m/s) both have $p = 4\,\text{kg m/s}$. The bullet, however, carries $E = \frac{p^2}{2m} = 800\,\text{J}$, the ball only $2\,\text{J}$. Momentum alone says nothing about destructive power.`,
    pitfalls: R`<ul><li>Treating momentum as a scalar; directions (signs) decide everything.</li>
<li>Confusing momentum and kinetic energy ($p\propto v$, $E\propto v^2$).</li>
<li>Not converting grams into kg.</li></ul>`
  },
  "ph3_impulserhaltung": {
    title: R`Conservation of momentum in a closed system`,
    category: R`3.3 Conservation of momentum`,
    type: "gesetz",
    front: R`State the <b>law of conservation of momentum</b>. What is a closed (isolated) system? Why are there actually three conservation laws, and what is the deeper reason for momentum conservation?`,
    back: R`<b>Isolated system:</b> experiences no interaction with other bodies, either because it is far away or because the external interactions compensate each other. The point masses interact only among themselves.<br><br>
<b>Law:</b> for $N$ point masses in a closed system
$$\vec p_\text{tot} = \sum_{i=1}^{N}\vec p_i = \text{const}\quad(\text{magnitude and direction})\qquad(3.14)$$
<b>Component by component</b> this gives three independent conservation laws:
$$p_{\text{tot},x} = c_x,\quad p_{\text{tot},y} = c_y,\quad p_{\text{tot},z} = c_z\qquad(3.15\text{–}3.17)$$
Momentum conservation is an <b>axiom</b>: experimentally without any known exception, but not provable. The deeper reason is <b>invariance under spatial translation</b>: a process runs the same way if one shifts it in space (homogeneity of space).`,
    meta: "Script: Section 3.3.1, Eqs. (3.14)–(3.17), pp. 37–38",
    explanation: R`<b>Intuition:</b> Within a closed system momentum can only be <i>redistributed</i>, not created or destroyed. What one body gains, the other loses. This holds for collisions, explosions, recoil and rockets, regardless of how complicated the internal forces are.<br><br>
<b>Component-wise conservation is powerful:</b> if an external force acts only in the $z$-direction (gravity), $p_x$ and $p_y$ are still conserved. That is why, for example, when a firework bursts the centre of mass of the fragments continues horizontally unchanged.<br><br>
<b>Symmetry and conservation (Noether):</b> translation symmetry leads to momentum conservation, rotation symmetry to angular momentum conservation (Ch. 5), time-translation symmetry to energy conservation (Ch. 4).<br><br>
<b>Connection:</b> Newton I (3.5) and Newton III (3.6) follow from momentum conservation. For many-particle systems this leads to the centre-of-mass theorem (Ch. 6).`,
    derivation: R`Why a component is conserved although an external force acts:
<ol class="fc-steps">
<li>$\dfrac{d\vec p_\text{tot}}{dt} = \sum_i\vec F_i^\text{ext} + \sum_{i\neq j}\vec F_{ij}$<em>Newton II for each particle, summed: external forces plus all internal pair forces.</em></li>
<li>$\sum_{i\neq j}\vec F_{ij} = \sum_{i\lt j}\left(\vec F_{ij}+\vec F_{ji}\right) = \vec 0$<em>The internal forces cancel pairwise (actio = reactio).</em></li>
<li>$\dfrac{d\vec p_\text{tot}}{dt} = \vec F^\text{ext}_\text{tot}$<em>Only external forces change the total momentum.</em></li>
<li>$F^\text{ext}_{\text{tot},x} = 0\;\Rightarrow\;\dfrac{dp_{\text{tot},x}}{dt} = 0\;\Rightarrow\;p_{\text{tot},x} = c_x$<em>Component by component: if the external force vanishes in one direction, that momentum component is conserved, even if forces act in other directions.</em></li>
</ol>
(In the script momentum conservation is the axiom and Newton III the consequence (3.6); the calculation above shows that both views are consistent.)`,
    example: R`<b>Two ice skaters push off from each other:</b> $m_1 = 50\,\text{kg}$, $m_2 = 80\,\text{kg}$, initially at rest. Skater 2 glides away at $1{,}0\,\text{m/s}$, so $v_1 = -\frac{80}{50}\cdot1{,}0\,\text{m/s} = -1{,}6\,\text{m/s}$.<br><br>
<b>Firework:</b> at the apex it flies horizontally at $20\,\text{m/s}$ and bursts into two equal parts; one falls vertically ($v_x = 0$). Conservation of $p_x$: $2m\cdot20 = m\cdot0 + m\,v_x'$, so the other part has $v_x' = 40\,\text{m/s}$.`,
    counterexample: R`<b>Not closed:</b> a falling apple gains momentum. This does not violate momentum conservation, because the system “apple” is not isolated. For “apple + Earth” the total momentum is conserved; the Earth gains the opposite momentum (because of its enormous mass, with an immeasurably small velocity).<br>
<b>A braking car:</b> its momentum apparently vanishes; it is transferred to the Earth through the friction force.`,
    pitfalls: R`<ul><li>Applying momentum conservation to a system on which a resultant external force acts.</li>
<li>Forgetting that conservation can hold in only one direction, component by component.</li>
<li>Confusing momentum conservation with energy conservation: in inelastic collisions momentum is conserved, kinetic energy is not.</li>
<li>Ignoring signs (directions) when summing momenta.</li></ul>`
  },

  "ph3_newton2_impuls": {
    title: R`Second Newton law: F = dp/dt`,
    category: R`3.4 Second Newton law: action principle`,
    type: "gesetz",
    front: R`What is the <b>second Newton law</b> in momentum form, and how does the script motivate it with the circular motion of a ball on a string? How do several forces add?`,
    back: R`<b>Circular motion on a string</b> (3.18–3.21): $\vec r = r\cos\omega t\,\vec e_x + r\sin\omega t\,\vec e_y$ gives
$$\vec p = m\vec v = mr\omega(-\sin\omega t\,\vec e_x + \cos\omega t\,\vec e_y),\qquad \frac{d\vec p}{dt} = -m\omega^2\vec r$$
The change in momentum points towards the centre, i.e. along the string. The string exerts the force that changes the momentum.<br><br>
<b>Action principle:</b> the resultant force on a body equals the rate of change of its momentum:
$$\vec F = \frac{d\vec p}{dt}\qquad(3.22)$$
This is <b>not a definition</b> of force, but a heuristic, experimentally testable connection.<br><br>
<b>Superposition:</b> forces are vectors; forces acting at the same point add vectorially (component by component):
$$\vec F = \vec F_1 + \vec F_2,\qquad \vec F = \sum_i\vec F_i\qquad(3.23\text{–}3.25)$$
The momentum changes only if the forces do not cancel each other.`,
    meta: "Script: Section 3.4.1, Eqs. (3.18)–(3.25), Figs. 3.3–3.5, pp. 38–41",
    explanation: R`<b>Intuition:</b> Forces cause <i>changes</i> in motion, not motion itself (in contrast to the Aristotelian idea that “without force everything comes to rest”). A large force means a rapid change in momentum.<br><br>
<b>The momentum form is more general than $F = ma$:</b> it also holds for variable mass (rocket, conveyor belt) and remains valid in relativity theory (with relativistic momentum), whereas $F = ma$ fails there.<br><br>
<b>Direction:</b> $\vec F$ points in the direction of the <i>change in momentum</i> $d\vec p$, not in the direction of $\vec p$. In circular motion $\vec p$ is tangential, $d\vec p/dt$ is radial inwards.<br><br>
<b>Connection:</b> Integrated over time this gives the impulse (3.4.2); for constant mass it becomes $\vec F = m\vec a$ (3.4.4); for $\vec F = 0$ one obtains Newton I (3.5).`,
    derivation: R`Force on the ball on the string from the change in momentum (3.18–3.21):
<ol class="fc-steps">
<li>$\vec r(t) = r(\cos\omega t,\ \sin\omega t)$<em>Uniform circular motion (Ch. 2.5.3).</em></li>
<li>$\vec p = m\dot{\vec r} = mr\omega(-\sin\omega t,\ \cos\omega t)$<em>Momentum = mass times velocity; tangential.</em></li>
<li>$\dfrac{d\vec p}{dt} = mr\omega\cdot\omega(-\cos\omega t,\ -\sin\omega t)$<em>Differentiate the components (the chain rule gives another $\omega$); $m$, $r$, $\omega$ are constant.</em></li>
<li>$= -m\omega^2\,r(\cos\omega t,\ \sin\omega t) = -m\omega^2\vec r$<em>Factor out: antiparallel to the position vector, i.e. towards the centre.</em></li>
<li>$|\vec F| = m\omega^2 r = \dfrac{mv^2}{r}$<em>Magnitude of the required centripetal force; supplied by the string.</em></li>
</ol>`,
    example: R`Ball $m = 0{,}20\,\text{kg}$ on a string, $r = 0{,}50\,\text{m}$, $\omega = 10\,\text{s}^{-1}$: $F = m\omega^2r = 0{,}2\cdot100\cdot0{,}5\,\text{N} = 10\,\text{N}$.<br>
Doubling the angular velocity gives $F = 40\,\text{N}$ (quadratic!).<br><br>
<b>Adding forces:</b> $\vec F_1 = (3,0)\,\text{N}$ and $\vec F_2 = (0,4)\,\text{N}$ at the same point give $\vec F = (3,4)\,\text{N}$ with $|\vec F| = 5\,\text{N}$, not $7\,\text{N}$.`,
    counterexample: R`<b>“Motion requires force” is false:</b> a space probe has been flying for decades without propulsion at constant velocity. No force means no change in momentum, not “no motion”.<br>
<b>Balanced forces:</b> a book on a table: weight and normal force cancel, $\sum\vec F = \vec 0$, so $\dot{\vec p} = \vec 0$, although two forces act.`,
    pitfalls: R`<ul><li>Inserting just one force instead of the <b>resultant</b> force.</li>
<li>Adding magnitudes instead of vectors.</li>
<li>Assuming $\vec F$ is parallel to $\vec p$ (or $\vec v$).</li>
<li>Drawing the centripetal force as an additional, separate force in the force diagram. It is the <i>resultant</i> of the real forces (string, friction, gravitation).</li></ul>`
  },
  "ph3_kraftstoss": {
    title: R`Impulse: Δp = ∫F dt`,
    category: R`3.4 Second Newton law: action principle`,
    type: "gesetz",
    front: R`What is the <b>impulse</b> of a force, and why is it useful when the time course of a force is not known? Calculate the impulse of a ball that <b>sticks</b> in a wall, compared with one that is <b>elastically reflected</b>.`,
    back: R`Newton II integrated over the duration $[t_a,t_e]$ of the action:
$$\int_{t_a}^{t_e}\dot{\vec p}\,dt = \vec p_e - \vec p_a = \int_{t_a}^{t_e}\vec F_\text{ext}\,dt\qquad(3.26)$$
The integral $\int\vec F\,dt$ is called the <b>impulse</b>. From the initial and final momenta one does not know $\vec F(t)$, but one knows this integral; in 1D it is the <b>area under the $F(t)$ curve</b> (Fig. 3.6). A large, short force can produce the same change in momentum as a small, long one.<br><br>
<b>Ball sticks</b> ($\vec v_e = \vec 0$): the wall exerts on the ball $\int\vec F\,dt = -m\vec v_a$. By actio = reactio the wall experiences
$$-\int\vec F\,dt = m\vec v_a\qquad(3.27)$$
<b>Elastic reflection</b> ($\vec v_e = -\vec v_a$): $\vec p_e - \vec p_a = -2m\vec v_a$, so the impulse is <b>twice as large</b>. From this one later calculates the gas pressure from molecular collisions.`,
    meta: "Script: Section 3.4.2, Eqs. (3.26)–(3.27), Figs. 3.6–3.7, pp. 41–42",
    explanation: R`<b>Intuition:</b> For the change in momentum only the product “force times duration” counts (more precisely: the integral). This is the principle behind airbags, crumple zones, landing mats and bending the knees when landing: one lengthens the braking time $\Delta t$ and thereby lowers the mean force $\bar F = \Delta p/\Delta t$.<br><br>
<b>Dependence:</b> for a given $\Delta p$, $\bar F\propto1/\Delta t$. Ten times longer braking time means ten times smaller mean force.<br><br>
<b>Why reflection counts double:</b> the wall must not only bring the momentum to zero, but also reverse it: $\Delta p = 2mv$ instead of $mv$.<br><br>
<b>Connection:</b> Kinetic gas theory (Ch. 14.1.1): pressure = impulse per time and area, with $2mv_x$ per molecular collision. For flows (water jet, rocket) the impulse per time becomes a constant force $F = \dot m\,v$.`,
    derivation: R`<ol class="fc-steps">
<li>$\vec F = \dfrac{d\vec p}{dt}$<em>Newton II in momentum form.</em></li>
<li>$\int_{t_a}^{t_e}\vec F\,dt = \int_{t_a}^{t_e}\dfrac{d\vec p}{dt}dt = \vec p(t_e)-\vec p(t_a)$<em>Integrate both sides over the duration of the action; on the right the fundamental theorem (3.26).</em></li>
<li>$\bar{\vec F} := \dfrac{1}{\Delta t}\int\vec F\,dt = \dfrac{\Delta\vec p}{\Delta t}$<em>The time-averaged force follows directly, even if $\vec F(t)$ is unknown.</em></li>
<li>Sticking: $\Delta\vec p = \vec 0 - m\vec v_a = -m\vec v_a$<em>Impulse of the wall on the ball; by actio = reactio the wall experiences $+m\vec v_a$ (3.27).</em></li>
<li>Reflection: $\Delta\vec p = m(-\vec v_a) - m\vec v_a = -2m\vec v_a$<em>Double the magnitude, because the momentum is reversed.</em></li>
<li>Jet: $\bar F = \dfrac{\Delta p}{\Delta t} = \dfrac{\Delta m}{\Delta t}\,v = \rho\,\dot V\,v$<em>If mass $\dot m = \rho\dot V$ hits a wall per time with speed $v$ perpendicular to it and flows off sideways, the momentum $\dot m v$ is destroyed per time.</em></li>
</ol>`,
    example: R`<b>Airbag:</b> head and upper body ($m\approx70\,\text{kg}$) from $15\,\text{m/s}$ to $0$: $\Delta p = 1050\,\text{kg m/s}$. With $\Delta t = 0{,}1\,\text{s}$ (airbag) the mean force is $\bar F = 10{,}5\,\text{kN}$; with $\Delta t = 0{,}01\,\text{s}$ (steering wheel) it would be $105\,\text{kN}$.<br><br>
<b>Water jet</b> perpendicular to a wall: $\dot V = 10\,\text{L/s}$, $v = 10\,\text{m/s}$, water flows off sideways: $F = 1000\,\tfrac{\text{kg}}{\text{m}^3}\cdot0{,}01\,\tfrac{\text{m}^3}{\text{s}}\cdot10\,\tfrac{\text{m}}{\text{s}} = 100\,\text{N}$.`,
    counterexample: R`<b>Same impulse, different effect:</b> two force curves with the same area (Fig. 3.6) change the momentum equally, but the short, high pulse can destroy a structure that the long, flat one leaves unharmed. For damage, the <i>peak force</i> counts, not just the impulse.`,
    pitfalls: R`<ul><li>Calculating $\Delta p = 0$ for reflection because the magnitude of the velocity stays the same. Correct: $\Delta\vec p = -2m\vec v_a$.</li>
<li>Confusing the force on the ball with the force on the wall (signs).</li>
<li>Equating the mean force with the peak force.</li>
<li>For the jet, checking where the water flows: if it rebounds, the force doubles.</li></ul>`
  },
  "ph3_wechselwirkungen": {
    title: R`The four elementary interactions`,
    category: R`3.4 Second Newton law: action principle`,
    type: "konzept",
    front: R`Which <b>four elementary interactions</b> does physics know? Compare their relative strength and range, and estimate the ratio of Coulomb to gravitational force between two protons.`,
    back: R`<table><tr><th>Force</th><th>rel. strength</th><th>Range</th><th>Exchange particle</th></tr>
<tr><td>Gravitation</td><td>$\approx10^{-40}$</td><td>$\infty$</td><td>Graviton (?)</td></tr>
<tr><td>Electromagnetic</td><td>$\approx1/137$</td><td>$\infty$</td><td>Photon</td></tr>
<tr><td>Weak</td><td>$\approx10^{-12}$</td><td>$10^{-18}\,\text{m}$</td><td>$W^\pm$, $Z$</td></tr>
<tr><td>Strong</td><td>$1$</td><td>$10^{-15}\,\text{m}$</td><td>Gluons</td></tr></table>
(Table 3.2.) Gravitation and electromagnetism act over arbitrary distances; the weak and the strong force only at the subatomic level (discovered in the 20th century).<br><br>
All macroscopic forces (pressure, spring, friction, contact forces) can be traced back to these, practically all to the <b>electromagnetic</b> interaction.<br><br>
Two protons: $\dfrac{F_C}{F_G} = \dfrac{e^2}{4\pi\varepsilon_0 G_N m_p^2}\approx1{,}2\cdot10^{36}$, independent of the distance.`,
    meta: "Script: Section 3.4.3, Table 3.2, pp. 42–44",
    explanation: R`<b>Intuition:</b> Nature gets by with astonishingly few basic forces. The variety of everyday forces arises because the electromagnetic force between atoms appears, depending on the situation, as solid hardness, elasticity, friction or pressure.<br><br>
<b>Why does gravitation nevertheless dominate in the cosmos?</b> Gravitation is always attractive and adds up over all masses. Electric charges come with both signs; large bodies are almost neutral, and the forces cancel. The strong and weak forces have too short a range.<br><br>
<b>Distance independence of the ratio:</b> Coulomb and gravitational forces both fall off as $1/r^2$ (3.10). Their ratio is therefore a pure number, a meaningful measure of “relative strength”.<br><br>
<b>Exchange particles:</b> in quantum field theories an interaction is described as the exchange of particles. All except the graviton have been detected; general relativity manages without exchange particles and has not yet been unified with quantum theory.`,
    derivation: R`Coulomb against gravitation for two protons at distance $r$:
<ol class="fc-steps">
<li>$F_C = \dfrac{1}{4\pi\varepsilon_0}\dfrac{e^2}{r^2},\qquad F_G = G_N\dfrac{m_p^2}{r^2}$<em>Both force laws (3.113, 3.117) with charge $e$ and mass $m_p$ respectively.</em></li>
<li>$\dfrac{F_C}{F_G} = \dfrac{e^2}{4\pi\varepsilon_0\,G_N\,m_p^2}$<em>The $1/r^2$ cancels: the ratio is independent of distance.</em></li>
<li>$= \dfrac{(1{,}60\cdot10^{-19})^2\cdot8{,}99\cdot10^{9}}{6{,}67\cdot10^{-11}\cdot(1{,}67\cdot10^{-27})^2}$<em>Insert numbers (SI): $\frac{1}{4\pi\varepsilon_0} = 8{,}99\cdot10^{9}\,\text{N m}^2/\text{C}^2$.</em></li>
<li>$= \dfrac{2{,}30\cdot10^{-28}}{1{,}86\cdot10^{-64}}\approx1{,}2\cdot10^{36}$<em>Calculate numerator and denominator. The electric repulsion is $10^{36}$ times stronger.</em></li>
</ol>`,
    example: R`<b>A magnet lifts a paper clip</b> against the attraction of the <i>entire Earth</i>: an everyday proof that gravitation is extremely weak.<br><br>
<b>Atomic nucleus:</b> protons in the nucleus ($r\approx10^{-15}\,\text{m}$) repel each other electrically with about $230\,\text{N}$, a huge force for two particles. They are held together by the strong force, which acts only over this short distance.`,
    counterexample: R`<b>“Friction force” and “spring force” are not basic forces:</b> they are effective descriptions of the electromagnetic interaction of many atoms. Their simple laws ($F = \mu F_N$, $F = -kx$) are approximations with limited validity, not fundamental laws of nature.`,
    pitfalls: R`<ul><li>“The strong force is the strongest” without mentioning its range: outside the nucleus it plays no role.</li>
<li>Reading relative strengths as absolute forces; the numbers are normalised to a reference situation.</li>
<li>Considering gravitation unimportant just because it is weak: on large scales it dominates.</li></ul>`
  },
  "ph3_aktionsprinzip": {
    title: R`Action principle F = m a for constant mass`,
    category: R`3.4 Second Newton law: action principle`,
    type: "gesetz",
    front: R`How does the form $\vec F = m\vec a$ follow from $\vec F = d\vec p/dt$? Under which assumption does it hold, and why do $\vec a$ and $\vec F$ always point in the same direction? What is a newton?`,
    back: R`For <b>constant mass</b>:
$$\vec F = \frac{d\vec p}{dt} = \frac{d}{dt}\{m\vec v(t)\} = m\frac{d\vec v}{dt} = m\,\vec a(t)\qquad(3.28)$$
<b>Action principle:</b> the acceleration of a body of constant mass is directly proportional to the resultant force and inversely proportional to the mass:
$$\vec a(t) = \frac{1}{m}\vec F(t)\qquad(3.29)$$
Since $m$ is a positive scalar, $\vec a$ and $\vec F$ point <b>always in the same direction</b>. This no longer holds in special relativity, and in general not for time-varying mass.<br><br>
<b>SI unit:</b>
$$[F] = 1\,\text{N} = 1\,\text{kg}\,\text{m/s}^2\qquad(3.30)$$
the force that accelerates $1\,\text{kg}$ by $1\,\text{m/s}^2$.`,
    meta: "Script: Section 3.4.4, Eqs. (3.28)–(3.30) with footnote 7, p. 44",
    explanation: R`<b>Intuition:</b> Doubling the force doubles the acceleration; doubling the mass halves it ($a\propto F$, $a\propto1/m$). Mass is the “resistance” to acceleration.<br><br>
<b>Direction:</b> $\vec a\parallel\vec F$, but $\vec v$ can point in any direction. In projectile motion $\vec F = m\vec g$ points downwards, while $\vec v$ is oblique.<br><br>
<b>When does only the momentum form hold?</b> If the mass changes (rocket, conveyor belt, raindrops collecting water), $\frac{d}{dt}(m\vec v) = \dot m\,\vec v + m\dot{\vec v}$, and the extra term $\dot m\vec v$ must not be left out (script footnote 9).<br><br>
<b>Connection:</b> $m\ddot{\vec r} = \vec F(\vec r,\dot{\vec r},t)$ is a second-order differential equation. With 6 initial conditions ($\vec r_0$, $\vec v_0$) it fixes the trajectory uniquely (solution recipe 3.8.1).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec F = \dfrac{d}{dt}(m\vec v)$<em>Newton II in momentum form with $\vec p = m\vec v$.</em></li>
<li>$= \dot m\,\vec v + m\,\dot{\vec v}$<em>Product rule: mass and velocity may both change.</em></li>
<li>$\dot m = 0\;\Rightarrow\;\vec F = m\dot{\vec v} = m\vec a$<em>For constant mass the first term drops out (3.28).</em></li>
<li>$\vec a = \dfrac{1}{m}\vec F$, $m>0$<em>Dividing by a positive scalar does not change the direction: $\vec a\parallel\vec F$ (3.29).</em></li>
<li>$[F] = \text{kg}\cdot\dfrac{\text{m}}{\text{s}^2} =: \text{N}$<em>Unit read off from the equation (3.30).</em></li>
</ol>`,
    example: R`A car ($1200\,\text{kg}$) is accelerated by a resultant force of $3600\,\text{N}$: $a = 3{,}0\,\text{m/s}^2$, so from $0$ to $100\,\text{km/h}$ ($27{,}8\,\text{m/s}$) in $9{,}3\,\text{s}$.<br>
With a trailer ($m = 2400\,\text{kg}$) and the same force, $a$ halves to $1{,}5\,\text{m/s}^2$.`,
    counterexample: R`<b>Conveyor belt with sand:</b> if sand falls onto a belt moving at constant speed $v$ at rate $\dot m$, then $\vec a = \vec 0$. Nevertheless the motor must supply the force $F = \dot m\,v$ to bring the incoming sand up to $v$. $F = ma$ would wrongly give $F = 0$; the correct result is $F = dp/dt = \dot m v$.`,
    pitfalls: R`<ul><li>Using $F = ma$ for variable mass.</li>
<li>Assuming $\vec v$ is parallel to $\vec F$; only $\vec a$ is parallel.</li>
<li>Inserting a single force instead of the resultant force.</li>
<li>Applying $F = ma$ at relativistic speeds.</li></ul>`
  },

  // ========================================================================
  // 3.5 TRÄGHEIT, 3.6 ACTIO = REACTIO
  // ========================================================================
  "ph3_traegheit": {
    title: "First Newton law: law of inertia and inertial frames",
    category: R`3.5 First Newton law: inertia`,
    type: "gesetz",
    front: R`How does the <b>law of inertia</b> follow from conservation of momentum or from Newton II? What is an <b>inertial frame</b>, and why is a body at rest in one inertial frame moving uniformly in another?`,
    back: R`Isolated system: $\vec p_\text{tot} = \text{const}\iff \frac{d\vec p_\text{tot}}{dt} = \vec 0$ (3.31). For a single body of constant mass:
$$\frac{d\vec p}{dt} = m\frac{d\vec v}{dt} = \vec 0\quad\Longrightarrow\quad \vec v = \text{const}\qquad(3.32,\,3.33)$$
<b>Law of inertia:</b> a body remains at rest or moves in a straight line at constant speed if the resultant of all external forces acting on it vanishes.<br><br>
<b>Inertial frame</b> (pragmatic definition): a reference frame in which the first Newton axiom holds.<br><br>
“Rest” and “constant velocity” depend on the reference frame: if $K'$ moves with constant $\vec u$ relative to $K$, then $\vec r'(t) = \vec r(t) - \vec u\,t$ (Fig. 3.8). Accelerated (e.g. rotating) systems are <b>not</b> inertial frames.<br><br><b>Free body</b> (3.7.1): far away from all other bodies, or with interactions that cancel each other; then $\vec p = m\vec v = \text{const.}$ (3.38), straight-line uniform motion.`,
    meta: "Script: Sections 3.5 and 3.7.1, Eqs. (3.31)–(3.33), (3.38), Fig. 3.8, pp. 45–49; summary 3.12",
    explanation: R`<b>Intuition:</b> Inertia is the tendency of a massive body to keep its state of motion. Without a force nothing changes, neither speed nor direction.<br><br>
<b>Is the first law merely a special case of the second?</b> Formally yes ($\vec F = 0$). In content, however, it determines <i>in which reference frames</i> Newton II holds in its simple form at all. The first law is therefore at the same time the definition of inertial frames.<br><br>
<b>Galilean invariance:</b> all systems that move uniformly relative to an inertial frame are again inertial frames. Accelerations, and hence forces, are the same in them; only velocities differ by $\vec u$. Physics on a train moving at constant speed is the same as on the platform.<br><br>
<b>Connection:</b> in non-inertial systems fictitious forces appear (3.11). The Earth’s surface is only approximately an inertial frame (centripetal acceleration $\le0{,}034\,\text{m/s}^2$, Coriolis effects).`,
    derivation: R`The first law holds in every uniformly moving system (Galilean transformation):
<ol class="fc-steps">
<li>$\vec r'(t) = \vec r(t) - \vec u\,t$, $\vec u = \text{const}$<em>$K'$ moves with constant velocity $\vec u$ relative to $K$; the origins coincide at $t = 0$ (Fig. 3.8).</em></li>
<li>$\vec v' = \dot{\vec r}' = \vec v - \vec u$<em>Velocities differ by the relative velocity (absolute time assumed).</em></li>
<li>$\vec a' = \dot{\vec v}' = \vec a$<em>Since $\vec u$ is constant, $\dot{\vec u}$ vanishes: accelerations are the same in both systems.</em></li>
<li>$\vec F = \vec 0\Rightarrow\vec a = \vec 0\Rightarrow\vec a' = \vec 0$<em>If $K$ is inertial and no force acts, the body also moves uniformly in $K'$. $K'$ is then also an inertial frame.</em></li>
<li>$\dot{\vec u}\neq\vec 0\Rightarrow\vec a'\neq\vec a$<em>If $K'$ accelerates, one sees accelerations there without a force; $K'$ is not an inertial frame.</em></li>
</ol>`,
    example: R`<b>Coin on a train:</b> on a train moving at a constant $30\,\text{m/s}$, a coin dropped vertically falls into your hand, exactly as on a stationary train. Seen from the platform, it describes a parabolic trajectory with horizontal speed $30\,\text{m/s}$.<br><br>
<b>Braking bus</b> ($A = -3\,\text{m/s}^2$): a ball on the floor rolls forward without any force acting on it in the direction of travel. In the bus the first law does not hold; the bus is not an inertial frame.`,
    counterexample: R`<b>Merry-go-round:</b> a frictionless ball on which no resultant force acts describes a curved path relative to the rotating disc (3.11.4.1). In the rotating system the first law is violated; it is not an inertial frame.`,
    pitfalls: R`<ul><li>Understanding “rest” in an absolute sense; rest is defined only relative to a reference frame.</li>
<li>Assuming that a body without a force comes to rest (in everyday life friction almost always acts).</li>
<li>Using the Earth as an exact inertial frame without checking: for the Foucault pendulum and the weather, the rotation is decisive.</li></ul>`
  },
  "ph3_actio_reactio": {
    title: "Third Newton law: actio = reactio",
    category: R`3.6 Third Newton law: action = reaction`,
    type: "gesetz",
    front: R`What is the <b>action–reaction principle</b>, and how does it follow from conservation of momentum? On which bodies do force and counterforce act, and why do they still not cancel in the equation of motion of one body?`,
    back: R`Every single force is only one aspect of a <b>mutual</b> interaction; there is no isolated single force.<br><br>
<b>Principle:</b> to every action there corresponds a reaction of equal magnitude and opposite direction.<br><br>
<b>Derivation:</b> isolated system of A and B:
$$\vec p_\text{tot} = \vec p_A + \vec p_B = \text{const}\;\Rightarrow\;\frac{d\vec p_A}{dt} + \frac{d\vec p_B}{dt} = \vec 0\;\Rightarrow\;\vec F_A + \vec F_B = \vec 0\qquad(3.34\text{–}3.36)$$
with $\vec F_A$ = force of B on A and $\vec F_B$ = force of A on B:
$$\vec F_A = -\vec F_B\qquad(3.37)$$
<b>Examples:</b> the ball presses with $\vec F_{21}$ on the table, the table with $\vec F_{12} = -\vec F_{21}$ on the ball (3.6.1). Water exerts buoyancy $\vec F_{12}$ on a ball, the ball presses with $\vec F_{21}$ on the water; the Earth attracts the ball ($\vec F_{13}$), the ball attracts the Earth ($\vec F_{31} = -\vec F_{13}$) (3.6.2).`,
    meta: "Script: Section 3.6, Eqs. (3.34)–(3.37), Figs. 3.9–3.10, pp. 46–48",
    explanation: R`<b>Intuition:</b> Whoever pushes is pushed back. A rower pushes the water backwards, the water pushes the boat forwards; a rocket expels gas, the gas pushes the rocket.<br><br>
<b>The decisive point:</b> action and reaction act on <b>different bodies</b>. Only one of the two appears in the equation of motion of a single body. They therefore cannot cancel there, and that is why anything can move at all.<br><br>
<b>Equilibrium ≠ actio = reactio:</b> for a book resting on a table, weight and normal force cancel. These are two different interactions (Earth–book, table–book) that happen to act on <i>the same</i> body. This is Newton I/II, not Newton III.<br><br>
<b>Same force, different effect:</b> Earth and apple attract each other with the same force, but the accelerations are in the inverse ratio of the masses: $a_\text{Erde}/a_\text{Apfel} = m/M\approx10^{-25}$ (cf. 3.121).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec p_A + \vec p_B = \text{const}$<em>Momentum conservation in the isolated two-body system (3.34).</em></li>
<li>$\dot{\vec p}_A + \dot{\vec p}_B = \vec 0$<em>The time derivative of a constant is zero (3.35).</em></li>
<li>$\dot{\vec p}_A = \vec F_A$, $\dot{\vec p}_B = \vec F_B$<em>Newton II for each body separately; since the system is isolated, $\vec F_A$ comes solely from B and $\vec F_B$ solely from A.</em></li>
<li>$\vec F_A + \vec F_B = \vec 0\;\Rightarrow\;\vec F_A = -\vec F_B$<em>Substituting gives actio = reactio (3.36, 3.37).</em></li>
</ol>`,
    example: R`<b>Ball on the table</b> (Fig. 3.9): without the counterforce $\vec F_{12}$ of the table, the ball would accelerate downwards according to Newton II.<br><br>
<b>Apple and Earth:</b> $m = 0{,}2\,\text{kg}$ experiences $F\approx2\,\text{N}$. The Earth ($6\cdot10^{24}\,\text{kg}$) experiences the same $2\,\text{N}$, so $a_\text{Erde}\approx3\cdot10^{-25}\,\text{m/s}^2$: immeasurably small, but not zero.`,
    counterexample: R`<b>Not an action–reaction pair:</b> the weight of the book ($\vec F_G$, Earth on book) and the normal force ($\vec F_N$, table on book) are equal in magnitude and opposite, but are <i>not</i> a pair in the sense of Newton III: they act on the same body and belong to different interactions. In a lift that is starting to move they are no longer equal either (3.10.3.2); an action–reaction pair, by contrast, is <i>always</i> exactly equal in magnitude.<br>
The true partners: the book pulls the Earth ($-\vec F_G$), and the book presses on the table ($-\vec F_N$).`,
    pitfalls: R`<ul><li>The “horse-and-cart paradox”: “If the cart pulls back just as hard, nothing can move.” False: the forces act on different bodies; the horse moves because the ground pushes it forward.</li>
<li>Confusing equilibrium forces with action–reaction pairs.</li>
<li>Assuming the larger mass exerts the larger force.</li>
<li>Fictitious forces (3.11) have <b>no</b> reaction partner; this is a sign that they are not real forces.</li></ul>`
  },

  // ========================================================================
  // 3.7 ANWENDUNGEN: IMPULS UND IMPULSERHALTUNG
  // ========================================================================
  "ph3_zentraler_stoss": {
    title: "Central collision: exchange of momentum Δp₁ = −Δp₂",
    category: R`3.7 Applications: momentum and momentum conservation`,
    type: "herleitung",
    front: R`Two balls collide centrally. Show with momentum conservation that $\Delta\vec p_1 = -\Delta\vec p_2$. What final velocities follow in addition for an <b>elastic</b> collision in one dimension?`,
    back: R`<b>Momentum conservation</b> (3.39–3.43):
$$\vec p_1 + \vec p_2 = \vec p_1\,' + \vec p_2\,'\;\Longleftrightarrow\;\underbrace{(\vec p_1\,'-\vec p_1)}_{\Delta\vec p_1} = -\underbrace{(\vec p_2\,'-\vec p_2)}_{\Delta\vec p_2}\;\Longrightarrow\;\Delta\vec p_1 + \Delta\vec p_2 = \vec 0$$
What one ball gains in momentum, the other loses. “Elastic” means: internal quantities (mass, shape, internal energy) do not change, and the kinetic energy is conserved.<br><br>
<b>Elastic, 1D</b> (with additionally $\tfrac12m_1v_1^2+\tfrac12m_2v_2^2 = \tfrac12m_1v_1'^2+\tfrac12m_2v_2'^2$):
$$v_1' = \frac{(m_1-m_2)v_1 + 2m_2v_2}{m_1+m_2},\qquad v_2' = \frac{(m_2-m_1)v_2 + 2m_1v_1}{m_1+m_2}$$`,
    meta: "Script: Section 3.7.2, Eqs. (3.39)–(3.43), Fig. 3.11, p. 49; in detail Ch. 6.8.2",
    explanation: R`<b>Intuition:</b> During the collision only internal forces act between the balls (actio = reactio). The transferred momentum is therefore exactly equal and opposite. This holds for every collision, elastic or not.<br><br>
<b>Elastic: two conservation laws, two unknowns.</b> Momentum and energy fix $v_1'$ and $v_2'$ uniquely in 1D. An elegant consequence: the relative velocity reverses, $v_2'-v_1' = -(v_2-v_1)$.<br><br>
<b>Limiting cases (with $v_2 = 0$):</b>
<ul><li>$m_1 = m_2$: $v_1' = 0$, $v_2' = v_1$. The velocities are exchanged (Newton’s cradle).</li>
<li>$m_1\ll m_2$: $v_1'\approx-v_1$. The light body bounces back as if from a wall.</li>
<li>$m_1\gg m_2$: $v_2'\approx2v_1$. The heavy body pushes the light one away at twice the speed.</li></ul>
<b>Connection:</b> in the centre-of-mass frame (Ch. 6.8) the elastic collision becomes particularly simple: both velocities simply reverse.`,
    derivation: R`Elastic collision in 1D:
<ol class="fc-steps">
<li>$m_1(v_1-v_1') = m_2(v_2'-v_2)$<em>Momentum conservation, sorted by particle.</em></li>
<li>$m_1(v_1^2-v_1'^2) = m_2(v_2'^2-v_2^2)$<em>Energy conservation, multiplied by 2 and sorted in the same way.</em></li>
<li>$m_1(v_1-v_1')(v_1+v_1') = m_2(v_2'-v_2)(v_2'+v_2)$<em>Third binomial formula on both sides.</em></li>
<li>$v_1+v_1' = v_2'+v_2$<em>Divide by equation 1 (provided a collision takes place at all, $v_1\neq v_1'$).</em></li>
<li>$v_2' = v_1+v_1'-v_2$<em>Linear relation: the relative velocity reverses.</em></li>
<li>$m_1(v_1-v_1') = m_2(v_1+v_1'-2v_2)\;\Rightarrow\;v_1' = \dfrac{(m_1-m_2)v_1+2m_2v_2}{m_1+m_2}$<em>Substitute into the momentum equation and solve for $v_1'$; $v_2'$ analogously (swap indices).</em></li>
</ol>`,
    example: R`$m_1 = 1\,\text{kg}$ with $v_1 = 3\,\text{m/s}$ hits $m_2 = 2\,\text{kg}$ at rest (elastic):<br>
$v_1' = \frac{(1-2)\cdot3}{3}\,\text{m/s} = -1\,\text{m/s}$ (bounces back), $v_2' = \frac{2\cdot1\cdot3}{3}\,\text{m/s} = 2\,\text{m/s}$.<br>
Check: $p$: $3 = -1 + 4$ ✓; $E$: $4{,}5 = 0{,}5 + 4$ ✓; $\Delta p_1 = -4 = -\Delta p_2$ ✓.`,
    counterexample: R`<b>Completely inelastic collision</b> (the balls stick together): momentum is still conserved, $v' = \frac{m_1v_1+m_2v_2}{m_1+m_2}$, and $\Delta p_1 = -\Delta p_2$ still holds. The kinetic energy, however, is not: in the example above $v' = 1\,\text{m/s}$ and $E' = 1{,}5\,\text{J}$ instead of $4{,}5\,\text{J}$; $3\,\text{J}$ goes into deformation and heat.`,
    pitfalls: R`<ul><li>Applying energy conservation to inelastic collisions.</li>
<li>Forgetting the signs (directions) of the velocities in 1D.</li>
<li>Believing an elastically rebounding ball has $\Delta p = 0$.</li>
<li>Using the formulas for $v_1'$, $v_2'$ in 2D/3D; there one needs angles (scattering, Ch. 6.8.3).</li></ul>`
  },
  "ph3_rakete": {
    title: "Rocket propulsion: thrust and the rocket equation",
    category: R`3.7 Applications: momentum and momentum conservation`,
    type: "herleitung",
    front: R`For a rocket (mass $M(t)$, exhaust speed $u$ relative to the rocket, no external forces) derive the <b>thrust</b> and the <b>rocket equation</b> $v(t) - v_0 = u\ln\frac{M_0}{M}$. When does the expelled gas move forwards for an external observer?`,
    back: R`Quantities: $v$ = speed of the rocket (external observer), $u$ = exhaust speed relative to the rocket, $M(t)$ = rocket mass; in $dt$ the gas mass $dm>0$ is expelled.
$$p(t) = Mv,\qquad p(t+dt) = (M-dm)(v+dv) + dm\,(v-u)\qquad(3.44,\,3.45)$$
Momentum conservation (without $dm\,dv$): $M\,dv - u\,dm = 0$ (3.48), so
$$M\frac{dv}{dt} = u\frac{dm}{dt}\quad\Rightarrow\quad\text{thrust } F = u\,\frac{dm}{dt}\qquad(3.49,\,3.50)$$
Integration with $dm = -dM$ and $u = \text{const}$:
$$v(t) - v_0 = -u\int_{M_0}^{M}\frac{dM'}{M'} = u\,\ln\frac{M_0}{M_0-m}\qquad(3.53)$$
($m$ = total expelled gas mass). For $\frac{M_0}{M_0-m}>e$ we have $v - v_0 > u$; if the rocket starts from rest, $v>u$ then, and the gas ($v - u > 0$) flies in the <b>same direction</b> as the rocket for the observer (3.54).`,
    meta: "Script: Section 3.7.3, Eqs. (3.44)–(3.54), Fig. 3.12, pp. 50–52",
    explanation: R`<b>Intuition:</b> The rocket pushes off against its own gas, not against the air. It therefore works in a vacuum, where it works even better (no air resistance). Each expelled gas packet carries momentum backwards, and the rocket receives the same amount forwards.<br><br>
<b>Dependencies:</b>
<ul><li>Thrust $F\propto u$ and $\propto\dot m$: faster gases or a higher mass flow rate.</li>
<li>Final speed change $\Delta v\propto u$, but only <b>logarithmically</b> in the mass ratio $M_0/M$. To double $\Delta v$ one must <i>square</i> $M_0/M$.</li></ul>
That is why one builds <b>multi-stage rockets</b>: empty tanks are jettisoned so that the mass ratio of each stage stays large.<br><br>
<b>Connection:</b> a classic example of variable mass. Here only $F = dp/dt$ holds for the whole system, not naively $F = Ma$ for the rocket alone. With gravity, a vertical launch adds $-g\,t$: $v = u\ln\frac{M_0}{M} - gt$.`,
    derivation: R`<ol class="fc-steps">
<li>$p(t) = M v$<em>Momentum of the rocket plus the fuel not yet expelled at time $t$ (3.44).</em></li>
<li>$p(t+dt) = (M-dm)(v+dv) + dm\,(v-u)$<em>Afterwards: the rocket with residual mass $M - dm$ and velocity $v + dv$, plus the gas packet $dm$ with velocity $v - u$ relative to the observer (3.45).</em></li>
<li>$= Mv + M\,dv - v\,dm - dm\,dv + v\,dm - u\,dm$<em>Multiply out (3.46); the $\pm v\,dm$ cancel.</em></li>
<li>$\approx Mv + M\,dv - u\,dm$<em>$dm\,dv$ is small of second order and is neglected (3.47).</em></li>
<li>$p(t+dt) - p(t) = M\,dv - u\,dm = 0$<em>No external force: total momentum conserved (3.48).</em></li>
<li>$M\dfrac{dv}{dt} = u\dfrac{dm}{dt} = F_\text{Schub}$<em>Divide by $dt$; the right-hand side acts like a force on the rocket (3.49, 3.50).</em></li>
<li>$dv = u\dfrac{dm}{M} = -u\dfrac{dM}{M}$<em>Separate variables; the gas mass comes from the rocket mass: $dm = -dM$.</em></li>
<li>$v - v_0 = -u\left[\ln M'\right]_{M_0}^{M} = u\ln\dfrac{M_0}{M}$<em>Integrate with constant $u$; $M = M_0 - m$ (3.53).</em></li>
</ol>`,
    example: R`<b>Mass ratio 10:</b> $u = 2{,}5\,\text{km/s}$, $M_0/M = 10$: $\Delta v = 2{,}5\cdot\ln10\,\text{km/s} = 5{,}76\,\text{km/s}$. For an Earth orbit ($\approx7{,}8\,\text{km/s}$ plus losses) a single stage is not enough, hence several stages.<br><br>
<b>Thrust:</b> $u = 3000\,\text{m/s}$, $\dot m = 100\,\text{kg/s}$: $F = 3\cdot10^{5}\,\text{N}$. At $M = 20\,\text{t}$ this gives $a = 15\,\text{m/s}^2$ (without gravity).`,
    counterexample: R`<b>Wrong: “The rocket pushes off the air.”</b> In a vacuum there is no air, and the drive still works. The medium has nothing to do with the propulsion.<br>
<b>Wrong: $F = M\,a$ with the initial mass:</b> at constant thrust the acceleration grows, $a = F/M(t)$, because the mass decreases; the rocket is accelerated more and more strongly towards burnout.`,
    pitfalls: R`<ul><li>Inserting $u$ relative to the ground instead of relative to the rocket.</li>
<li>Swapping the signs of $dm$ and $dM$ ($dm = -dM>0$).</li>
<li>Assuming $\Delta v$ is linear rather than logarithmic in the mass ratio.</li>
<li>Forgetting gravity ($-gt$) for a launch from Earth.</li></ul>`
  },

  // ========================================================================
  // 3.8 ANWENDUNGEN DER NEWTON'SCHEN GESETZE
  // ========================================================================
  "ph3_loesungsrezept": {
    title: "Solution recipe for motion problems (example: free fall)",
    category: R`3.8 Applications of Newton’s laws`,
    type: "konzept",
    front: R`State the <b>six-step recipe</b> for solving motion problems with Newton’s laws, and apply it to free fall from height $h$. Which friction models $\vec R = -\kappa\hat v$ does the script distinguish?`,
    back: R`<b>Recipe</b> (3.8.1):
<ol><li>Choose the body.</li>
<li>Write down all forces $\vec F_i$ acting on it (in general position).</li>
<li>Choose a coordinate system: inertial frame, axes such that the description becomes simple.</li>
<li>Newton for all components: $m\ddot{\vec r} = \sum_i\vec F_i$, $m\ddot x = \sum_i F_{ix}$ etc. (3.55)</li>
<li>Solve the differential equations: general solution with integration constants $c_1,c_2,\dots$</li>
<li>Determine the constants from the initial conditions ($\vec r_0$, $\vec v_0$): particular solution (3.56).</li></ol>
If necessary solve numerically (initial conditions as starting values).<br><br>
<b>Free fall</b> (3.8.2): weight $\vec G = m\vec g$, friction $\vec R = -\kappa\hat v$ with
α) dry: $\kappa\le\kappa_0$ const, β) viscous fluid: $\kappa = \kappa_1v$ (small $v$), γ) liquids/gases: $\kappa = \kappa_2v^2$ (large $v$) (3.57).
Without friction, starting from rest at $(0,0,h)$:
$$x(t) = 0,\quad y(t) = 0,\quad z(t) = h - \tfrac12 g t^2,\quad \dot z(t) = -gt\qquad(3.62)$$`,
    meta: "Script: Sections 3.8.1–3.8.2, Eqs. (3.55)–(3.62), Fig. 3.13, pp. 52–55",
    explanation: R`<b>Intuition:</b> The recipe replaces “tricks” with one procedure that is always the same. For free fall it is excessively elaborate, but exactly the same steps also solve problems with friction, springs, several bodies or variable forces.<br><br>
<b>The core is step 4:</b> Newton II is a second-order differential equation. One does not need to “know” the trajectory, only the forces. The trajectory follows by integration, fixed uniquely by 6 initial conditions.<br><br>
<b>The most frequent source of error</b> is step 2: forgotten forces (normal force, friction) or forces that do not act on this body at all (reaction forces on other bodies).<br><br>
<b>Connection to friction:</b> the three models α–γ are worked out in 3.9.4 (solid-body friction), 3.9.5 (Stokes, Newtonian resistance) and 3.9.6 (braking with $F\propto v$). When one may neglect friction in free fall: when the falling speed is small compared with the terminal velocity $v_\infty$.`,
    derivation: R`The recipe for free fall without friction:
<ol class="fc-steps">
<li>Body: point mass $m$; forces: $\vec G = m\vec g = (0,0,-mg)$<em>Steps 1–2. Friction neglected for now; $g$ constant as long as $h\ll R_E$.</em></li>
<li>Earth-fixed system, $z$-axis upwards<em>Step 3: approximately inertial; fall along $z$ for reasons of symmetry.</em></li>
<li>$m\ddot x = 0,\quad m\ddot y = 0,\quad m\ddot z = -mg$<em>Step 4: Newton component by component (3.58 with $R = 0$).</em></li>
<li>$x = C_1t + C_2,\quad y = C_3t+C_4,\quad z = -\tfrac12gt^2 + C_5t + C_6$<em>Step 5: integrate twice; general solution with 6 constants (3.59).</em></li>
<li>$\vec r(0) = (0,0,h)\Rightarrow C_2 = C_4 = 0,\ C_6 = h$<em>Step 6, position conditions (3.60).</em></li>
<li>$\vec v(0) = \vec 0\Rightarrow C_1 = C_3 = C_5 = 0$<em>Step 6, velocity conditions (3.61); result (3.62).</em></li>
</ol>`,
    example: R`<b>Vertical throw upwards</b> with the same recipe: only step 6 changes, $\dot z(0) = v_0$ gives $C_5 = v_0$:
$z(t) = h + v_0t - \tfrac12gt^2$. With $v_0 = 15\,\text{m/s}$: rise time $v_0/g = 1{,}53\,\text{s}$, rise height $v_0^2/(2g) = 11{,}5\,\text{m}$ above the launch point.<br>
The general solution (step 5) stays the same; this shows the value of the separation “general solution / initial conditions”.`,
    counterexample: R`<b>Recipe in the wrong frame of reference:</b> if one chooses an accelerated system in step 3 (e.g. the braking bus) and forgets the fictitious forces, step 4 yields wrong equations of motion (3.11).<br>
<b>Variable mass:</b> for a rocket, step 4 must use $\frac{d}{dt}(m\vec v) = \dot m\vec v + m\dot{\vec v}$ (script footnote 9); otherwise the thrust is missing.`,
    pitfalls: R`<ul><li>Forgetting forces, or drawing in forces that act on other bodies.</li>
<li>Choosing signs of the force components that do not match the chosen axis direction.</li>
<li>Inserting initial conditions too early and thereby losing the general solution.</li>
<li>Neglecting friction without checking the assumption.</li></ul>`
  },

  // ========================================================================
  // 3.9 KONTAKTKRÄFTE
  // ========================================================================
  "ph3_kraeftediagramm": {
    title: "Force diagram: two blocks stacked on each other",
    category: R`3.9 Applications: contact forces`,
    type: "beispiel",
    front: R`Block A (mass $M_A$) lies on block B ($M_B$), and B lies on the floor. Draw the <b>force diagrams</b> and determine the normal forces $\vec N_A$ (B on A) and $\vec N_B$ (floor on B). What does a scale under a body read?`,
    back: R`<b>Rules:</b> divide the system into parts, each part a point; for each point mass <b>only the forces that act on it</b>; each force with magnitude and direction. The floor is not considered here.<br><br>
<b>Five forces:</b>
<ul><li>on A: weight $\vec F_A = M_A\vec g$, normal force $\vec N_A$ (from B)</li>
<li>on B: weight $\vec F_B = M_B\vec g$, normal force $\vec N_B$ (from the floor), force $\vec F_{AB}$ (from A)</li></ul>
<b>Equilibrium:</b>
$$M_A\vec g + \vec N_A = \vec 0,\qquad M_B\vec g + \vec N_B + \vec F_{AB} = \vec 0\qquad(3.63\text{–}3.65)$$
actio = reactio: $\vec F_{AB} = -\vec N_A$ (3.66), hence
$$\vec N_A = -M_A\vec g,\qquad \vec N_B = -(M_A+M_B)\,\vec g\qquad(3.70,\,3.71)$$
A scale shows the magnitude of the <b>normal force</b>: one perceives as “weight” the force that compensates gravity and keeps the body at rest.`,
    meta: "Script: Section 3.9.1, Eqs. (3.63)–(3.71), Figs. 3.14–3.15, pp. 55–58",
    explanation: R`<b>Intuition:</b> The floor must carry <i>everything</i> that stands on it; block B must carry only A. One sees this immediately, but the force diagram shows <i>how</i> the load is passed on: A presses with its weight on B ($\vec F_{AB}$), and B passes this force on, together with its own weight, to the floor.<br><br>
<b>Method:</b> each body gets its own diagram (“free-body diagram”). Action–reaction pairs always appear in <i>two different</i> diagrams ($\vec N_A$ at A, $\vec F_{AB}$ at B). This is the check that one has separated cleanly.<br><br>
<b>Connection:</b> the normal force is not a fixed quantity like $mg$; it adjusts itself to what the motion requires. In an accelerating lift (3.10.3.2) or on an inclined plane ($F_N = mg\cos\varphi$) it is different, and so is the friction $F_R = \mu F_N$.`,
    derivation: R`<ol class="fc-steps">
<li>A: $M_A\vec g + \vec N_A = \vec 0\;\Rightarrow\;\vec N_A = -M_A\vec g$<em>A is at rest, so the sum of the forces on A vanishes (3.63). $\vec N_A$ points upwards ($\vec g$ downwards).</em></li>
<li>B: $M_B\vec g + \vec N_B + \vec F_{AB} = \vec 0$<em>B is also at rest; three forces act on B (3.64).</em></li>
<li>$\vec F_{AB} = -\vec N_A = M_A\vec g$<em>Newton III: A presses on B exactly as strongly as B carries A (3.66).</em></li>
<li>$M_B\vec g + \vec N_B + M_A\vec g = \vec 0$<em>Substitute (3.68).</em></li>
<li>$\vec N_B = -(M_A+M_B)\,\vec g$<em>The floor carries both blocks (3.70).</em></li>
</ol>`,
    example: R`$M_A = 2\,\text{kg}$, $M_B = 5\,\text{kg}$: $N_A = 19{,}6\,\text{N}$, $N_B = 68{,}7\,\text{N}$.<br>
If you stand B on a scale, it shows $68{,}7\,\text{N}$, converted to “$7\,\text{kg}$”: the scale sees only the normal force from the floor, not how the mass above is distributed.`,
    counterexample: R`<b>Not an action–reaction pair:</b> $\vec F_A$ (weight of A) and $\vec N_A$ are indeed opposite and equal, but they act on the same body A. Their equality follows from equilibrium, not from Newton III, and no longer holds when the whole system accelerates (e.g. in a lift that is starting to move).`,
    pitfalls: R`<ul><li>Drawing forces on the floor into the diagram of B.</li>
<li>Forgetting $\vec F_{AB}$ and believing B carries only itself.</li>
<li>Always assuming $N = mg$; this holds only without vertical acceleration and without further vertical forces.</li>
<li>Treating weight and normal force as an action–reaction pair.</li></ul>`
  },
  "ph3_haengendes_gewicht": {
    title: "Hanging weight on three cords (30° / 45°)",
    category: R`3.9 Applications: contact forces`,
    type: "beispiel",
    front: R`A weight of mass $M$ hangs from a knot, which is attached to the ceiling by two cords at $30^\circ$ (cord A) and $45^\circ$ (cord B) to the horizontal. Determine the <b>cord forces</b> $F_A$ and $F_B$.`,
    back: R`The <b>knot</b> is the “body”; the forces $\vec F_A$, $\vec F_B$ and $\vec F_C = M\vec g$ act on it. Equilibrium:
$$\vec F_A + \vec F_B + \vec F_C = \vec F_A + \vec F_B - Mg\,\vec e_y = \vec 0\qquad(3.72)$$
Components (A points left and up, B points right and up):
$$x:\ -F_A\cos30^\circ + F_B\cos45^\circ = 0,\qquad y:\ F_A\sin30^\circ + F_B\sin45^\circ - Mg = 0\qquad(3.74)$$
Solution:
$$F_A = \frac{2Mg}{1+\sqrt3},\qquad F_B = \sqrt{\tfrac32}\,F_A\qquad(3.76)$$
$F_B>F_A$: the steeper cord carries more.`,
    meta: "Script: Section 3.9.2, Eqs. (3.72)–(3.76), Fig. 3.16, pp. 58–59",
    explanation: R`<b>Intuition:</b> The two oblique cords must together carry the weight (vertically) and at the same time balance each other horizontally. The steeper cord points more upwards and therefore takes over the larger share of the load.<br><br>
<b>Why consider the knot?</b> At the knot all three forces meet; it is massless and at rest. That gives the simplest equilibrium condition. Cord C simply pulls down with $Mg$.<br><br>
<b>Dependence on the angle:</b> the flatter the cords, the larger the forces. In the symmetric case (both at angle $\theta$) $F = \frac{Mg}{2\sin\theta}$, which diverges as $\theta\to0$. A washing line can therefore never be stretched completely taut.<br><br>
<b>Connection:</b> the same procedure (forces component by component, sum zero) is the basis of the statics of rigid bodies (Ch. 8.4), where a condition for the torques is added.`,
    derivation: R`<ol class="fc-steps">
<li>$-F_A\tfrac{\sqrt3}{2} + F_B\tfrac{\sqrt2}{2} = 0$<em>$x$-equilibrium with $\cos30^\circ = \frac{\sqrt3}{2}$, $\cos45^\circ = \frac{\sqrt2}{2}$ (3.75).</em></li>
<li>$F_B = F_A\dfrac{\sqrt3}{\sqrt2} = \sqrt{\tfrac32}\,F_A$<em>Solve for $F_B$.</em></li>
<li>$\tfrac12F_A + \tfrac{\sqrt2}{2}F_B = Mg$<em>$y$-equilibrium with $\sin30^\circ = \frac12$, $\sin45^\circ = \frac{\sqrt2}{2}$.</em></li>
<li>$\tfrac12F_A + \tfrac{\sqrt2}{2}\sqrt{\tfrac32}F_A = \tfrac12F_A + \tfrac{\sqrt3}{2}F_A = Mg$<em>Substitute $F_B$; $\sqrt2\cdot\sqrt{3/2} = \sqrt3$.</em></li>
<li>$F_A = \dfrac{2Mg}{1+\sqrt3}$<em>Factor out and solve (3.76).</em></li>
</ol>`,
    example: R`$M = 10\,\text{kg}$, $Mg = 98{,}1\,\text{N}$:<br>
$F_A = \frac{196{,}2}{2{,}732}\,\text{N} = 71{,}8\,\text{N}$, $F_B = 1{,}225\cdot71{,}8\,\text{N} = 87{,}9\,\text{N}$.<br>
Vertical check: $71{,}8\cdot0{,}5 + 87{,}9\cdot0{,}707 = 35{,}9 + 62{,}2 = 98{,}1\,\text{N}$ ✓. The sum of the cord forces ($159{,}7\,\text{N}$) is <i>larger</i> than the weight.`,
    counterexample: R`<b>Nearly horizontal ropes:</b> a rope tensioned symmetrically at $\theta = 5^\circ$, with $10\,\text{kg}$ in the middle: $F = \frac{98{,}1}{2\sin5^\circ}\,\text{N} = 563\,\text{N}$, almost six times the weight. Intuitively “small” loads can produce enormous forces at shallow angles.`,
    pitfalls: R`<ul><li>Swapping $\sin$ and $\cos$: what matters is whether the angle is measured to the horizontal or to the vertical.</li>
<li>Assuming the cord forces add in magnitude to the weight.</li>
<li>Forgetting the signs of the $x$-components (left/right).</li>
<li>Not choosing the knot as its own “body”, and thereby counting forces twice.</li></ul>`
  },
  "ph3_federkraft": {
    title: R`Spring force (Hooke) and the motion of a spring pendulum`,
    category: R`3.9 Applications: contact forces`,
    type: "herleitung",
    front: R`What is <b>Hooke’s law</b>? Set up the equation of motion for a mass on a spring and solve it for the initial conditions $x(0) = x_1$, $\dot x(0) = 0$.`,
    back: R`Force needed to stretch the spring (within the elastic limit): $F = k(x-x_0)$ (3.77), $k$ = spring constant, $x_0$ = rest position. The <b>restoring force</b> of the spring is opposite: $F_R = -k(x-x_0)$. Thus
$$m\ddot x = -k(x-x_0)\qquad(3.78)$$
With $\xi = x - x_0$ ($d\xi = dx$):
$$\ddot\xi = -\frac{k}{m}\xi\qquad(3.80)$$
General solution (a function that equals its second derivative up to a constant):
$$\xi(t) = A\sin\omega t + B\cos\omega t,\qquad \omega^2 = \frac{k}{m}\qquad(3.81\text{–}3.83)$$
With $x(0) = x_1$ and $\dot x(0) = 0$: $B = x_1 - x_0$, $A = 0$, so
$$x(t) = x_0 + (x_1-x_0)\cos\omega t\qquad(3.88)$$
The spring force is not elementary; it goes back to electromagnetic forces between atoms.`,
    meta: "Script: Section 3.9.3, Eqs. (3.77)–(3.88), Fig. 3.17, pp. 59–61",
    explanation: R`<b>Intuition:</b> The spring always pulls the mass back towards the rest position, the more strongly the further it is displaced. Because of inertia the mass overshoots the rest position; an oscillation results.<br><br>
<b>Dependencies:</b> $\omega = \sqrt{k/m}$: a stiffer spring gives faster oscillation, a larger mass a slower one. The period $T = 2\pi\sqrt{m/k}$ is <b>independent of the amplitude</b>. This is a special property of the linear force.<br><br>
<b>Why is Hooke so important?</b> Almost every force around a stable equilibrium can be approximated linearly for small displacements (Taylor: $F(x)\approx F'(x_0)(x-x_0)$). That is why the spring pendulum is the model for <i>all</i> small oscillations (Ch. 9: harmonic oscillator).<br><br>
<b>Connection:</b> The associated potential energy is $V = \tfrac12k(x-x_0)^2$ (Ch. 4), a parabola.`,
    derivation: R`<ol class="fc-steps">
<li>$m\ddot x = -k(x-x_0)$<em>Newton II with the restoring force as the only horizontal force (3.78).</em></li>
<li>$\xi := x-x_0,\quad \ddot\xi = \ddot x$<em>Coordinate measured from the rest position; $x_0$ is constant and drops out on differentiating (3.79).</em></li>
<li>$\ddot\xi = -\dfrac{k}{m}\xi$<em>Linear homogeneous second-order ODE (3.80).</em></li>
<li>$\xi = A\sin\omega t + B\cos\omega t\;\Rightarrow\;\ddot\xi = -\omega^2\xi$<em>Ansatz: after differentiating twice, $\sin$ and $\cos$ reproduce themselves up to $-\omega^2$ (3.81, 3.82).</em></li>
<li>$\omega^2 = k/m$<em>Comparing coefficients with step 3 (3.83).</em></li>
<li>$x(0) = x_0 + B = x_1\;\Rightarrow\;B = x_1-x_0$<em>First initial condition (3.85).</em></li>
<li>$\dot x(0) = A\omega = 0\;\Rightarrow\;A = 0$<em>Second initial condition: released from rest (3.86, 3.87); result (3.88).</em></li>
</ol>`,
    example: R`$k = 200\,\text{N/m}$, $m = 0{,}50\,\text{kg}$, displaced by $5\,\text{cm}$ and released:<br>
$\omega = \sqrt{400}\,\text{s}^{-1} = 20\,\text{s}^{-1}$, $T = 2\pi/\omega = 0{,}314\,\text{s}$, $x(t) - x_0 = 5\,\text{cm}\cdot\cos(20\,\text{s}^{-1}\,t)$.<br>
Maximum speed on passing through $x_0$: $v_\text{max} = \omega\cdot5\,\text{cm} = 1{,}0\,\text{m/s}$. With $4m$ (2 kg) the period $T$ would be twice as long.`,
    counterexample: R`<b>Beyond the elastic limit</b> the spring deforms permanently; $F$ is no longer proportional to the displacement, and the period depends on the amplitude.<br>
<b>Rubber band:</b> it can be stretched, but not compressed. The force is zero for $x<x_0$, so Hooke holds only on one side, and the motion is not a pure cosine oscillation.`,
    pitfalls: R`<ul><li>Forgetting the minus sign of the restoring force; without it the solution grows exponentially instead of oscillating.</li>
<li>Confusing $\omega$ (angular frequency) with $\nu = \omega/2\pi$.</li>
<li>Mixing up $\xi$ and $x$: the rest position $x_0$ must be added again at the end.</li>
<li>“Fixing” the constants $A$, $B$ before differentiating; first differentiate the general solution, then insert the conditions.</li></ul>`
  },
  "ph3_haftreibung": {
    title: "Static friction and the inclined plane: tan φ ≤ μ₀",
    category: R`3.9 Applications: contact forces`,
    type: "gesetz",
    front: R`What is the law of <b>static friction</b>? Show that a block on an inclined plane (slope $\varphi$) stays at rest exactly as long as $\tan\varphi\le\mu_0$ holds, independently of its weight.`,
    back: R`Friction forces are not elementary (electromagnetic interaction of the surface atoms) and act <b>parallel to the contact surface</b>.
$$F_R\le\mu_0F_N\qquad(3.89)$$
$\mu_0$: coefficient of static friction, to first approximation independent of the size of the contact area, dependent on the material pairing and the surface (not for tyres, which behave more like a highly viscous fluid).<br><br>
<b>Inclined plane</b> (Fig. 3.19), equilibrium:
$$\text{horizontal: } F_R\cos\varphi - F_N\sin\varphi = 0,\qquad\text{vertical: } F_R\sin\varphi + F_N\cos\varphi = F_G\qquad(3.91)$$
$$\Rightarrow\quad\frac{F_R}{F_N} = \frac{\sin\varphi}{\cos\varphi} = \tan\varphi = \frac{h}{\ell}\le\mu_0\qquad(3.92)$$
The body sticks as long as the inequality holds. The result is independent of $F_G$, because a larger weight produces a larger normal force.`,
    meta: "Script: Section 3.9.4.1, Eqs. (3.89)–(3.92), Figs. 3.18–3.19, pp. 61–62",
    explanation: R`<b>Intuition:</b> Static friction is a “reaction force with an upper limit”. It is exactly as large as needed to prevent sliding, but at most $\mu_0F_N$. On a flat surface it is zero; when pulling, it grows along until the limit is reached.<br><br>
<b>Why independent of weight?</b> The downhill component ($mg\sin\varphi$) and the maximum friction ($\mu_0mg\cos\varphi$) are both proportional to $m$. The mass cancels: whether a body slides depends only on $\varphi$ and $\mu_0$.<br><br>
<b>Measuring method:</b> tilt the plane slowly until the block just begins to slide: $\mu_0 = \tan\varphi_\text{grenz}$.<br><br>
<b>Connection:</b> static friction makes walking, driving and cornering possible (centripetal force provided by friction: $v_\text{max} = \sqrt{\mu_0 g\rho}$) and pure rolling (Ch. 8.5.9).`,
    derivation: R`<ol class="fc-steps">
<li>$F_R\cos\varphi - F_N\sin\varphi = 0$<em>Horizontal force balance: friction points up the slope, the normal force perpendicular to the plane (3.91).</em></li>
<li>$F_R\sin\varphi + F_N\cos\varphi = F_G$<em>Vertical balance: both forces together carry the weight.</em></li>
<li>$\dfrac{F_R}{F_N} = \dfrac{\sin\varphi}{\cos\varphi} = \tan\varphi$<em>Directly from equation 1 (3.92).</em></li>
<li>$F_N = F_G\cos\varphi,\quad F_R = F_G\sin\varphi$<em>Substituting into equation 2 gives the individual forces (equivalently: decomposition parallel/perpendicular to the plane).</em></li>
<li>$F_R\le\mu_0F_N\iff\tan\varphi\le\mu_0$<em>Insert into the sticking condition (3.89); $F_G$ cancels.</em></li>
</ol>`,
    example: R`Wood on wood: $\mu_0 = 0{,}4\dots0{,}6$ (Table 3.3), so $\varphi_\text{grenz} = \arctan\mu_0 = 21{,}8^\circ\dots31{,}0^\circ$.<br>
A block ($5\,\text{kg}$) on $20^\circ$ with $\mu_0 = 0{,}5$: required static friction $F_R = 49{,}1\cdot\sin20^\circ\,\text{N} = 16{,}8\,\text{N}$, available $\mu_0F_N = 0{,}5\cdot49{,}1\cdot\cos20^\circ\,\text{N} = 23{,}1\,\text{N}$: it sticks.`,
    counterexample: R`<b>$F_R = \mu_0F_N$ does not always hold:</b> a book on a horizontal table experiences <i>no</i> friction force ($F_R = 0$), although $\mu_0F_N>0$. Static friction is only an upper limit.<br>
<b>Tyres:</b> rubber behaves more like a highly viscous fluid; the independence of $\mu_0$ from the area does not hold here (footnote 14), and tread, width and temperature play a role.`,
    pitfalls: R`<ul><li>Using $F_R = \mu_0F_N$ as an equation instead of an inequality.</li>
<li>Inserting $F_N = mg$ on the inclined plane; the correct value is $F_N = mg\cos\varphi$.</li>
<li>Choosing the direction of friction wrongly: it opposes the (impending) relative motion.</li>
<li>Treating $\mu_0$ as a “force” instead of a dimensionless coefficient.</li></ul>`
  },
  "ph3_gleitreibung": {
    title: "Sliding friction F_R = μF_N and sliding on an inclined plane",
    category: R`3.9 Applications: contact forces`,
    type: "gesetz",
    front: R`What is the law of <b>sliding friction</b>, and how does $\mu$ relate to $\mu_0$? Sketch $F_R$ as a function of the applied force $F$. What acceleration does a block have when it slides down an inclined plane?`,
    back: R`$$F_R = \mu F_N\qquad(3.93)$$
$\mu$: coefficient of sliding friction, to first approximation independent of the contact area and the velocity. Usually
$$\mu_0>\mu\qquad(3.94)$$
<b>Curve</b> (Fig. 3.20): as long as the body sticks, $F_R = F$ grows linearly with the pulling force up to $\mu_0F_N$. When it breaks loose, the friction drops to the smaller, constant value $\mu F_N$.<br><br>
Table 3.3: smooth steel on steel $\mu_0 = 0{,}15$, $\mu = 0{,}15$; greased $\mu_0 = 0{,}10$, $\mu = 0{,}01$; wood on wood $\mu_0 = 0{,}4\dots0{,}6$, $\mu = 0{,}2\dots0{,}4$.<br><br>
<b>Sliding on an inclined plane</b> (slope $\varphi$):
$$a = g\,(\sin\varphi - \mu\cos\varphi)$$`,
    meta: "Script: Section 3.9.4.2, Eqs. (3.93)–(3.94), Fig. 3.20, Table 3.3, pp. 62–63",
    explanation: R`<b>Intuition:</b> Resting surfaces “interlock” microscopically more strongly (more time to form contact points). Once the body is moving, it repeatedly tears these bonds before they are fully formed. That is why $\mu<\mu_0$: pushing something to start is harder than keeping it moving.<br><br>
<b>Dependencies:</b> $F_R\propto F_N$, but (approximately) independent of area and speed. Sliding friction always points <b>opposite to the relative velocity</b>.<br><br>
<b>Stick-slip:</b> the alternation between $\mu_0$ and $\mu$ explains squeaking doors, chalk on a blackboard and the violin bow.<br><br>
<b>Connection:</b> sliding friction converts mechanical energy into heat; it is a <b>non-conservative</b> force (Ch. 4.4). For ABS: a rolling tyre uses static friction ($\mu_0$), a locked one only sliding friction ($\mu$). That is why a non-locking wheel brakes better.`,
    derivation: R`Sliding block on the inclined plane, $x$-axis down the slope:
<ol class="fc-steps">
<li>$F_N = mg\cos\varphi$<em>No acceleration perpendicular to the plane: the normal force compensates the normal component of the weight.</em></li>
<li>$F_\parallel = mg\sin\varphi$<em>Downhill force: component of the weight along the plane.</em></li>
<li>$F_R = \mu F_N = \mu mg\cos\varphi$, up the slope<em>Sliding friction opposes the direction of motion (3.93).</em></li>
<li>$ma = mg\sin\varphi - \mu mg\cos\varphi$<em>Newton II along the plane.</em></li>
<li>$a = g(\sin\varphi - \mu\cos\varphi)$<em>The mass cancels. For $\tan\varphi = \mu$ the block slides at constant velocity.</em></li>
</ol>`,
    example: R`$\varphi = 30^\circ$, $\mu = 0{,}30$: $a = 9{,}81\,(0{,}500 - 0{,}30\cdot0{,}866)\,\text{m/s}^2 = 2{,}36\,\text{m/s}^2$ (without friction $4{,}91\,\text{m/s}^2$).<br>
After $2\,\text{m}$ from rest: $v = \sqrt{2\cdot2{,}36\cdot2}\,\text{m/s} = 3{,}07\,\text{m/s}$.<br><br>
<b>Constant pull on a level surface:</b> crate $40\,\text{kg}$, $\mu = 0{,}3$: one needs $F = 0{,}3\cdot392\,\text{N} = 118\,\text{N}$ to drag it at constant velocity; to break it loose with $\mu_0 = 0{,}5$, however, $196\,\text{N}$.`,
    counterexample: R`<b>$\tan\varphi\lt\mu$:</b> a block given a push on the level surface slows down and comes to rest ($a\lt0$ downhill). The formula then gives a deceleration; once stopped, static friction applies again, and the block stays put (provided $\tan\varphi\le\mu_0$).<br>
<b>High speeds:</b> at very fast sliding (e.g. brake discs) $\mu$ often decreases (fading). The independence of velocity is only an approximation.`,
    pitfalls: R`<ul><li>Confusing $\mu_0$ and $\mu$.</li>
<li>Drawing friction in the direction of motion instead of opposite to it.</li>
<li>Inserting $F_N = mg$ instead of $mg\cos\varphi$ on the slope.</li>
<li>Forgetting that a block that has come to rest is again subject to static friction.</li></ul>`
  },
  "ph3_stroemungswiderstand": {
    title: "Fluid drag: Stokes (∝ v) and Newton (∝ v²), terminal velocity",
    category: R`3.9 Applications: contact forces`,
    type: "gesetz",
    front: R`How does one describe <b>friction in fluids</b>? State the law for small and for large velocities, as well as <b>Stokes’ law</b>, and derive the <b>terminal velocity</b> of a falling body in both cases.`,
    back: R`Power series in the velocity relative to the medium (3.95): $|\vec F_R| = \sum_i a_iv^i$ with $a_0 = 0$ (a body at rest experiences no friction). Usually two terms suffice:
$$|\vec F_R| = \begin{cases}\kappa v & \text{small } v\\[2pt] \dfrac{\rho}{2}c_WAv^2 & \text{large } v\end{cases}\qquad(3.96)$$
($c_W$ drag coefficient, $A$ cross-sectional area, $\rho$ density of the fluid.)<br>
<b>Stokes</b> (sphere, radius $r$, viscosity $\eta$):
$$\vec F_R = -(6\pi\eta r)\,\vec v\qquad(3.97)$$
<b>Terminal velocity</b> (weight = resistance, without buoyancy):
$$v_\infty = \frac{mg}{6\pi\eta r}\ (\text{Stokes}),\qquad v_\infty = \sqrt{\frac{2mg}{\rho\,c_W A}}\ (\text{quadratic})$$`,
    meta: "Script: Section 3.9.5, Eqs. (3.95)–(3.97), p. 64; friction models β/γ in (3.57)",
    explanation: R`<b>Intuition:</b> At small velocities internal friction (viscosity) dominates: the fluid is dragged along “viscously”, $F\propto v$. At large velocities the body must constantly accelerate fluid and set it swirling. The mass displaced per time ($\propto\rho Av$) times the velocity transferred ($\propto v$) gives $F\propto\rho Av^2$.<br><br>
<b>Dependencies:</b>
<ul><li>Stokes: $v_\infty\propto m/r$. For a sphere of density $\rho_K$, $m\propto r^3$, so $v_\infty\propto r^2$: small droplets almost float (fog, clouds).</li>
<li>Quadratic: $v_\infty\propto\sqrt{m/A}$. Parachute: large $A$ gives small $v_\infty$.</li>
<li>Power against air resistance: $P = Fv\propto v^3$. Double the speed costs eight times the power.</li></ul>
<b>Connection:</b> with $F\propto v$ the equation of motion is linear and exactly solvable (exponential approach to $v_\infty$, cf. 3.9.6); with $v^2$ it is nonlinear (solution with $\tanh$).`,
    derivation: R`Terminal velocity: it is reached when the acceleration vanishes.
<ol class="fc-steps">
<li>$m\dot v = mg - F_R(v)$<em>Newton II during the fall (axis pointing down), buoyancy neglected.</em></li>
<li>$\dot v = 0\;\Rightarrow\;F_R(v_\infty) = mg$<em>In the steady state weight and resistance balance.</em></li>
<li>Stokes: $6\pi\eta r\,v_\infty = mg\;\Rightarrow\;v_\infty = \dfrac{mg}{6\pi\eta r}$<em>Insert the linear law and solve.</em></li>
<li>Sphere: $m = \tfrac43\pi r^3\rho_K\;\Rightarrow\;v_\infty = \dfrac{2r^2\rho_Kg}{9\eta}$<em>Express the mass through the density; $v_\infty\propto r^2$.</em></li>
<li>Quadratic: $\tfrac12\rho c_WAv_\infty^2 = mg\;\Rightarrow\;v_\infty = \sqrt{\dfrac{2mg}{\rho c_WA}}$<em>Insert the quadratic law; the positive root is the physical one.</em></li>
</ol>`,
    example: R`<b>Skydiver</b> without a parachute: $m = 80\,\text{kg}$, $c_W\approx1{,}0$, $A\approx0{,}7\,\text{m}^2$, $\rho_\text{Luft} = 1{,}2\,\text{kg/m}^3$: $v_\infty = \sqrt{\frac{2\cdot80\cdot9{,}81}{1{,}2\cdot1{,}0\cdot0{,}7}}\,\text{m/s}\approx43\,\text{m/s}\approx155\,\text{km/h}$.<br><br>
<b>Fog droplet</b> ($r = 10\,\mu\text{m}$, $\eta_\text{Luft} = 1{,}8\cdot10^{-5}\,\text{Pa s}$): $v_\infty = \frac{2\cdot10^{-10}\cdot1000\cdot9{,}81}{9\cdot1{,}8\cdot10^{-5}}\,\text{m/s}\approx1{,}2\,\text{cm/s}$. That is why clouds stay in the air.`,
    counterexample: R`<b>Stokes outside its range:</b> for a raindrop of $2\,\text{mm}$ radius, Stokes would give $v_\infty\approx480\,\text{m/s}$. In reality such drops fall at about $9\,\text{m/s}$. For large drops the flow is turbulent, and the quadratic law applies.`,
    pitfalls: R`<ul><li>Inserting $v$ relative to the ground instead of relative to the medium (headwind!).</li>
<li>Applying Stokes to large, fast bodies.</li>
<li>Forgetting buoyancy when the densities of body and fluid are similar (a sphere in oil).</li>
<li>Confusing $\rho$ (fluid density) with the density of the body.</li></ul>`
  },
  "ph3_bremsweg_nass": {
    title: "Braking with velocity-proportional friction: v = v₀e^{−αt}",
    category: R`3.9 Applications: contact forces`,
    type: "herleitung",
    front: R`A vehicle is braked by a friction force $F_R = -\kappa\dot x$ (“wet friction”). Solve the equation of motion by <b>separation of variables</b>. What are $v(t)$ and $x(t)$, and how far does the vehicle go in total?`,
    back: R`$$m\ddot x = -\kappa\dot x\quad\Rightarrow\quad\ddot x = -\alpha\dot x,\qquad \alpha = \frac{\kappa}{m}\qquad(3.99\text{–}3.101)$$
Since $x$ itself does not appear, one works with $v = \dot x$: $\dot v + \alpha v = 0$ (3.102).<br>
Solution (with $v(0) = v_0$, $x(0) = 0$):
$$v(t) = v_0\,e^{-\alpha t}\qquad(3.108)$$
$$x(t) = \frac{v_0}{\alpha}\left(1-e^{-\alpha t}\right)\qquad(3.110)$$
For $t\to\infty$: $v\to0$ and $x\to x_\infty = \dfrac{v_0}{\alpha} = \dfrac{mv_0}{\kappa}$. The braking distance is finite, although the car never comes completely to a stop.`,
    meta: "Script: Section 3.9.6, Eqs. (3.98)–(3.110), Fig. 3.21, pp. 64–66",
    explanation: R`<b>Intuition:</b> The braking force is proportional to the velocity. The slower the vehicle, the more weakly it is braked. This gives an exponential decay: in each time interval $1/\alpha$, $v$ falls by the factor $e$.<br><br>
<b>Dependencies:</b>
<ul><li>Time constant $\tau = 1/\alpha = m/\kappa$: heavier means braked more slowly; larger $\kappa$ means faster.</li>
<li>Total distance $x_\infty = v_0\tau\propto v_0$, <b>linear</b> in the initial speed. With solid friction (constant force) the braking distance would instead be $\propto v_0^2$.</li></ul>
<b>Method:</b> “separation of variables” is the standard procedure for ODEs of the form $\dot v = f(v)\,g(t)$ (Appendix 12.3).<br><br>
<b>Connection:</b> the same ODE describes radioactive decay, the discharge of a capacitor and damping in the damped oscillator (Ch. 9.3).`,
    derivation: R`<ol class="fc-steps">
<li>$\dfrac{dv}{dt} = -\alpha v$<em>Equation of motion for the velocity (3.103).</em></li>
<li>$\dfrac{dv}{v} = -\alpha\,dt$<em>Separate variables: everything with $v$ on the left, everything with $t$ on the right (3.104).</em></li>
<li>$\displaystyle\int_{v_0}^{v}\frac{dv'}{v'} = -\alpha\int_{t_0}^{t}dt'$<em>Integrate both sides between corresponding limits (3.105).</em></li>
<li>$\ln v - \ln v_0 = -\alpha(t-t_0)$<em>Antiderivative of $1/v$ is $\ln v$ (3.106).</em></li>
<li>$v(t) = v_0e^{-\alpha(t-t_0)}$<em>Exponentiate; with $t_0 = 0$ we get (3.108).</em></li>
<li>$x(t) = \displaystyle\int_0^tv_0e^{-\alpha t'}dt' = \frac{v_0}{\alpha}\left[-e^{-\alpha t'}\right]_0^t = \frac{v_0}{\alpha}\left(1-e^{-\alpha t}\right)$<em>Position by integrating the velocity with $x(0) = 0$ (3.109, 3.110).</em></li>
</ol>`,
    example: R`$v_0 = 20\,\text{m/s}$, $\alpha = 0{,}5\,\text{s}^{-1}$ ($\tau = 2\,\text{s}$):<br>
after $2\,\text{s}$: $v = 20e^{-1} = 7{,}4\,\text{m/s}$, $x = 40(1-e^{-1}) = 25{,}3\,\text{m}$;<br>
after $6\,\text{s}$: $v = 1{,}0\,\text{m/s}$, $x = 38{,}0\,\text{m}$;<br>
limit: $x_\infty = 40\,\text{m}$. After $3\tau$, 95 % of the distance has been covered.`,
    counterexample: R`<b>Real car:</b> it comes to a stop in finite time, because at small velocities solid friction (constant force $\mu F_N$, independent of $v$) dominates. The pure $\kappa v$ model, in which one never comes to a complete stop, is invalid there.<br>
<b>Quadratic resistance</b> ($F\propto v^2$): here $v(t) = \frac{v_0}{1+v_0\beta t}$, a much slower decay, and $x(t)$ grows logarithmically <i>without limit</i>.`,
    pitfalls: R`<ul><li>When separating variables, choosing integration limits that do not correspond ($v_0\leftrightarrow t_0$).</li>
<li>Logarithm laws: $\ln v - \ln v_0 = \ln(v/v_0)$.</li>
<li>Assuming the vehicle stops after the time $\tau$.</li>
<li>Reading $F_R$ here as a 1D quantity with sign rather than as a magnitude (script footnote 16).</li></ul>`
  },
  "ph3_kraftfeld": {
    title: "Force fields, coupling constant and specific field",
    category: R`3.10 Force fields`,
    type: "definition",
    front: R`What is a <b>force field</b> $\vec F(\vec r,t)$, and why is it introduced? What do the <b>coupling constant</b> $\gamma$ and the <b>specific field</b> $\vec f(\vec r,t)$ mean? What is a static field?`,
    back: R`Many-particle problems are usually not solvable (even the three-body gravitational problem is not solvable analytically). <b>Simplification:</b> one separates $n$ particles into $n-1$ plus 1. The $n-1$ particles produce an effective interaction on the $n$-th; its reaction on them is neglected.<br><br>
<b>Force field:</b> the force on a test particle as a function of position (and time): $\vec F(x,y,z,t) = \vec F(\vec r,t)$. <b>Static:</b> $\vec F(\vec r,t) = \vec F(\vec r)$ for all $t$ (3.111).<br><br>
Decomposition:
$$\vec F(\vec r,t) = \gamma\,\vec f(\vec r,t)\qquad(3.112)$$
<ul><li>$\gamma$: <b>coupling constant</b>, only a property of the test particle (e.g. mass $m$ or charge $q$); $\gamma = 0$ means the particle does not feel the field.</li>
<li>$\vec f = \vec F/\gamma$: <b>specific field</b>, describes only the effect of the remaining $n-1$ particles; one field for all test particles.</li></ul>
Examples: gravitation $\gamma = m$, $\vec f = \vec g$; Coulomb $\gamma = q$, $\vec f = \vec E$.`,
    meta: "Script: Section 3.10.1, Eqs. (3.111)–(3.112), pp. 66–67",
    explanation: R`<b>Intuition:</b> Instead of calculating each force between all pairs individually, one imagines that the sources fill space with a property (the field). A test particle “reads” the field at its location and multiplies by its own coupling.<br><br>
<b>Why is this practical?</b> The field needs to be calculated only once and holds for every test particle. Fields of several sources add vectorially (superposition principle, 3.10.2).<br><br>
<b>When is the back-reaction negligible?</b> When the test particle is much “weaker” than the source: the Earth accelerates a human much more strongly than the human accelerates the Earth ($a_M/a_m = m/M$, 3.121).<br><br>
<b>Connection:</b> conservative force fields can be derived from a scalar potential, $\vec F = -\nabla V$ (Ch. 4.4). The field lines follow the field direction, and the equipotential surfaces stand perpendicular to them (Figs. 3.22, 3.24).`,
    derivation: R`Why a single specific field suffices for all test particles:
<ol class="fc-steps">
<li>$\vec F_1 = \gamma_1\vec f(\vec r),\quad\vec F_2 = \gamma_2\vec f(\vec r)$<em>Two different test particles at the same location.</em></li>
<li>$\dfrac{\vec F_1}{\gamma_1} = \dfrac{\vec F_2}{\gamma_2} = \vec f(\vec r)$<em>The normalised force does not depend on the test particle, only on the sources and the location.</em></li>
<li>Gravitation: $\vec F = m\left(-G_N\dfrac{M}{r^2}\hat r\right) = m\,\vec g(\vec r)$<em>$\gamma = m$ (gravitational mass), $\vec f = \vec g$ in $\text{N/kg} = \text{m/s}^2$ (3.117).</em></li>
<li>Coulomb: $\vec F = q\left(\dfrac{1}{4\pi\varepsilon_0}\dfrac{Q}{r^2}\hat r\right) = q\,\vec E(\vec r)$<em>$\gamma = q$, $\vec f = \vec E$ in N/C (3.113).</em></li>
<li>$\vec a = \dfrac{\gamma}{m}\vec f$<em>With Newton II. For gravitation $\gamma/m = 1$, so everything falls equally; in an electric field $\vec a$ depends on $q/m$.</em></li>
</ol>`,
    example: R`At the Earth’s surface $|\vec g| = 9{,}81\,\text{N/kg}$. A $70\text{-kg}$ human experiences $687\,\text{N}$, a $5\text{-g}$ sparrow $0{,}049\,\text{N}$. The field is the same for both; only the coupling $m$ differs.<br><br>
<b>Back-reaction:</b> human ($70\,\text{kg}$) and Earth ($6\cdot10^{24}\,\text{kg}$): the ratio of the accelerations is $a_\text{Erde}/a_\text{Mensch} = 1{,}2\cdot10^{-23}$; the back-reaction is completely negligible.`,
    counterexample: R`<b>Earth–Moon:</b> the Moon is not a test particle. Its mass is about $1/81$ of the Earth’s, and the Earth moves noticeably around the common centre of mass (about $4700\,\text{km}$ from the Earth’s centre). Neglecting the back-reaction would be wrong here. One must solve the two-body problem (Ch. 6.6, 7).`,
    pitfalls: R`<ul><li>Confusing field and force: $\vec E$ is force <i>per charge</i>, $\vec g$ is force <i>per mass</i>.</li>
<li>Adding the test particle’s own field to the force on it.</li>
<li>“Field = field lines”: field lines are only a visualisation of the direction; the strength is in their density.</li></ul>`
  },
  "ph3_coulomb": {
    title: R`Coulomb force, electric field and superposition`,
    category: R`3.10 Force fields`,
    type: "gesetz",
    front: R`What is the <b>Coulomb force</b> between two charges $Q$ and $q$, and how is the <b>electric field</b> defined? What is a central force field, and what does the field of a <b>dipole</b> look like?`,
    back: R`Charge $Q$ at the origin, test charge $q$ ($Q\gg q$, back-reaction neglected):
$$\vec F_E(\vec r) = \frac{1}{4\pi\varepsilon_0}\frac{qQ}{r^2}\hat r = q\cdot\underbrace{\frac{1}{4\pi\varepsilon_0}\frac{Q}{r^2}\hat r}_{\equiv\vec E}\qquad(3.113)$$
$$\vec E(\vec r) = \frac{\vec F_E(\vec r)}{q},\qquad \vec E = \frac{1}{4\pi\varepsilon_0}Q\frac{\vec r}{|\vec r|^3}\qquad(3.114,\,3.115)$$
The field depends only on $r = |\vec r|$ and points radially: <b>central force field</b>.<br><br>
<b>Superposition principle:</b> fields (like forces) add vectorially. Dipole from $+Q$ at $\vec r_1$ and $-Q$ at $\vec r_2$:
$$\vec E = \frac{Q}{4\pi\varepsilon_0}\left(\frac{\vec r-\vec r_1}{|\vec r-\vec r_1|^3} - \frac{\vec r-\vec r_2}{|\vec r-\vec r_2|^3}\right)\qquad(3.116)$$
This is no longer a central force field.`,
    meta: "Script: Section 3.10.2, Eqs. (3.113)–(3.116), Figs. 3.22–3.23, pp. 67–68",
    explanation: R`<b>Intuition:</b> Like charges repel, unlike charges attract (the sign of $qQ$). The force falls off as $1/r^2$, just as with gravitation. Geometrically: the “effect” spreads over a sphere surface $4\pi r^2$.<br><br>
<b>Dependencies:</b> $F\propto q$, $F\propto Q$, $F\propto1/r^2$. Half the distance gives four times the force.<br><br>
<b>Comparison with gravitation</b> (3.10.3): same form, but (i) charges have both signs, masses only positive; (ii) the coupling $q$ is independent of inertia $m$; (iii) between elementary particles the Coulomb force is about $10^{36}$ times stronger.<br><br>
<b>Dipole:</b> seen from afar, $+Q$ and $-Q$ sit almost at the same place, and their fields largely cancel. The dipole field therefore falls off faster, as $1/r^3$. This is why neutral molecules interact only weakly.`,
    derivation: R`Dipole field on the axis at large distance ($+Q$ at $z = +d/2$, $-Q$ at $z = -d/2$, field point $z\gg d$):
<ol class="fc-steps">
<li>$E_z = \dfrac{Q}{4\pi\varepsilon_0}\left[\dfrac{1}{(z-d/2)^2} - \dfrac{1}{(z+d/2)^2}\right]$<em>Superposition (3.116) on the axis: both contributions point along $z$, with opposite signs.</em></li>
<li>$\dfrac{1}{(z\mp d/2)^2} = \dfrac{1}{z^2}\left(1\mp\dfrac{d}{2z}\right)^{-2}\approx\dfrac{1}{z^2}\left(1\pm\dfrac{d}{z}\right)$<em>Taylor expansion $(1+\varepsilon)^{-2}\approx1-2\varepsilon$ for small $\varepsilon = \mp d/(2z)$.</em></li>
<li>$E_z\approx\dfrac{Q}{4\pi\varepsilon_0 z^2}\cdot\dfrac{2d}{z} = \dfrac{1}{4\pi\varepsilon_0}\dfrac{2Qd}{z^3}$<em>The $1/z^2$ terms cancel; the first-order difference remains.</em></li>
<li>$E\propto\dfrac{p}{z^3}$ with $p = Qd$<em>The dipole field falls off as $1/r^3$; the relevant quantity is the dipole moment $p = Qd$.</em></li>
</ol>`,
    example: R`Field of a charge $Q = 1\,\mu\text{C}$ at a distance of $1\,\text{m}$: $E = 8{,}99\cdot10^{9}\cdot10^{-6}\,\text{N/C} = 8{,}99\cdot10^{3}\,\text{N/C}$. Force on an electron there: $F = eE = 1{,}44\cdot10^{-15}\,\text{N}$, acceleration $F/m_e = 1{,}6\cdot10^{15}\,\text{m/s}^2$.<br>
At $2\,\text{m}$ distance the field is only a quarter ($2{,}25\cdot10^{3}\,\text{N/C}$).`,
    counterexample: R`<b>A dipole is not a central field:</b> its field depends not only on the distance but also on the direction (on the axis twice as strong as in the equatorial plane at the same distance). Formulas that assume central symmetry (e.g. conservation of angular momentum about the origin) do not hold there.`,
    pitfalls: R`<ul><li>Ignoring the signs of the charges: for $qQ\lt0$ the force points inwards.</li>
<li>Understanding $\hat r$ as the direction <i>towards</i> the source; in the script $\hat r$ points from the source to the test particle.</li>
<li>Adding magnitudes instead of vectors in superposition.</li>
<li>Confusing $r$ and $r^2$, or $\vec r/|\vec r|^3$ with $\hat r/r^3$ in (3.115) (the latter has the wrong dimension).</li></ul>`
  },
  "ph3_gravitation_gewicht": {
    title: "Gravitational force, weight and g(h) at height h",
    category: R`3.10 Force fields`,
    type: "gesetz",
    front: R`What is the <b>law of gravitation</b>? Show that the free-fall acceleration is independent of $m$, calculate the ratio of the accelerations of $m$ and $M$, and derive $g(h)\approx g(0)\left(1-\frac{2h}{R_E}\right)$.`,
    back: R`Force of $M$ (at the origin) on $m$:
$$\vec F_m = -G_N\frac{mM}{r^2}\hat r = m\cdot\underbrace{\left(-G_N\frac{M}{r^2}\hat r\right)}_{\equiv\vec g(\vec r)}\qquad(3.117)$$
Always attractive (masses are positive). Here $m$ is the <b>gravitational</b> mass ($\gamma = m$, $\vec f = \vec g$).<br><br>
With $m_t = m_s$: $\vec a_m = -G_N\frac{M}{r^2}\hat r$, independent of $m$ (3.118, 3.119). By Newton III:
$$\frac{|\vec a_M|}{|\vec a_m|} = \frac{m}{M}\ll1\quad(m\ll M)\qquad(3.120,\,3.121)$$
Earth’s surface: $g = G_N\frac{M}{R_E^2} = 9{,}81\,\text{m/s}^2$ (3.123, 3.124). At height $h\ll R_E$:
$$g(h) = G_N\frac{M}{(R_E+h)^2} = \frac{g(0)}{(1+h/R_E)^2}\approx g(0)\left(1-\frac{2h}{R_E}\right)\qquad(3.125\text{–}3.127)$$
Near the surface $g$ decreases <b>linearly</b> with height.`,
    meta: "Script: Section 3.10.3.1, Eqs. (3.117)–(3.127), Fig. 3.24, pp. 69–70",
    explanation: R`<b>Intuition:</b> Every mass attracts every other, proportionally to both masses and decreasing with $1/r^2$. The force on $m$ is $\propto m$; that is why $m$ cancels in the acceleration. A heavy body is pulled more strongly, but is equally more inert.<br><br>
<b>Dependencies:</b>
<ul><li>$g\propto M/r^2$: on the surface of a planet with twice the radius and the same density ($M\propto R^3$), $g\propto R$, i.e. twice as large.</li>
<li>Relative decrease with height: $\Delta g/g\approx-2h/R_E$. About $-0{,}03\,\%$ per km of height.</li></ul>
<b>Terms:</b> the force $m\vec g$ is often called the “weight force”. What we <i>feel</i> as “weight” is, however, the counterforce (normal force), see 3.10.3.2. This is the source of many misunderstandings (weightlessness).<br><br>
<b>Connection:</b> Ch. 7 treats celestial mechanics (Kepler) and the field of extended bodies. A homogeneous sphere acts outside like a point mass at the centre, which is why $r$ may be measured from the Earth’s centre.`,
    derivation: R`<ol class="fc-steps">
<li>$m\,\vec a_m = -G_N\dfrac{mM}{r^2}\hat r$<em>Newton II for $m$ with the gravitational force; on the left inertial, on the right gravitational mass, both equal (3.118).</em></li>
<li>$\vec a_m = -G_N\dfrac{M}{r^2}\hat r$<em>$m$ cancels: all bodies fall equally (3.119).</em></li>
<li>$M\vec a_M = -\vec F_m\;\Rightarrow\;\dfrac{|\vec a_M|}{|\vec a_m|} = \dfrac{m}{M}$<em>Newton III: equal counterforce on $M$; the accelerations are in the inverse ratio of the masses (3.120, 3.121).</em></li>
<li>$g(h) = G_N\dfrac{M}{(R_E+h)^2} = \underbrace{G_N\dfrac{M}{R_E^2}}_{g(0)}\cdot\dfrac{1}{(1+h/R_E)^2}$<em>Factor out $R_E^2$ (3.125, 3.126).</em></li>
<li>$(1+\varepsilon)^{-2}\approx1-2\varepsilon$ for $\varepsilon = h/R_E\ll1$<em>First-order Taylor expansion (Appendix 11.1.2).</em></li>
<li>$g(h)\approx g(0)\left(1-\dfrac{2h}{R_E}\right)$<em>Linear decrease with height (3.127).</em></li>
</ol>`,
    example: R`<b>$g$ from Earth data:</b> $G_N = 6{,}674\cdot10^{-11}\,\text{N m}^2/\text{kg}^2$, $M = 5{,}97\cdot10^{24}\,\text{kg}$, $R_E = 6{,}371\cdot10^{6}\,\text{m}$: $g = 9{,}82\,\text{m/s}^2$ ✓.<br><br>
<b>Height of the ISS</b> ($h = 400\,\text{km}$): exactly $g = 9{,}81\cdot(6371/6771)^2 = 8{,}69\,\text{m/s}^2$ (89 %); linearly approximated $9{,}81(1-0{,}126) = 8{,}58\,\text{m/s}^2$. The approximation already deviates by a good 1 % at $h/R_E = 6\,\%$.<br>
<b>Matterhorn</b> ($4{,}5\,\text{km}$): $\Delta g/g = -0{,}14\,\%$.`,
    counterexample: R`<b>“There is no gravity in space”:</b> in the ISS $g$ is still nearly 90 % of its surface value. Astronauts are weightless because they fall freely with the station (3.10.3.2), not because gravity is absent.<br>
<b>Great heights:</b> for $h\sim R_E$ the linear approximation is useless: at $h = R_E$ it gives $g\approx-g(0)$ (negative!), whereas the correct value is $g(0)/4$.`,
    pitfalls: R`<ul><li>Confusing $G_N$ (constant) and $g$ (local free-fall acceleration).</li>
<li>Measuring $r$ from the surface instead of from the Earth’s centre.</li>
<li>Using the approximation $1 - 2h/R_E$ outside $h\ll R_E$.</li>
<li>Reading the minus sign in (3.117) as “repulsive”: it means “towards the centre”.</li></ul>`
  },
  "ph3_aufzug": {
    title: "Apparent weight in an accelerating lift",
    category: R`3.10 Force fields`,
    type: "beispiel",
    front: R`What does a <b>scale in a lift</b> read when the lift (a) starts moving upwards, (b) moves at constant velocity, (c) brakes? Derive $F_N = m(g+a_A)$.`,
    back: R`One notices the weight force only through the <b>counterforce</b> (normal force of the support). At rest $\vec F_G + \vec F_N = \vec 0$, so $|\vec F_N| = |\vec F_G|$ (3.128–3.130).<br><br>
In the lift the person is at rest relative to the lift and has its acceleration $a_A$ ($y$-axis upwards):
$$-mg + F_N = m\,a_A\quad\Rightarrow\quad F_N = m(g+a_A)\qquad(3.131,\,3.132)$$
<ul><li>(a) starting upwards, $a_A>0$: $F_N>mg$, one feels heavier.</li>
<li>(b) $v_A = \text{const}$, $a_A = 0$: $F_N = mg$, as outside (3.133).</li>
<li>(c) braking on the way up, $a_A\lt0$: $F_N\lt mg$, one feels lighter (3.134).</li></ul>
The scale shows the magnitude of the normal force, i.e. the <b>apparent weight</b>.`,
    meta: "Script: Section 3.10.3.2, Example 1, Eqs. (3.128)–(3.134), Fig. 3.25, pp. 71–73",
    explanation: R`<b>Intuition:</b> The lift floor has to do two things: compensate gravity <i>and</i> accelerate the person along with it. If the lift accelerates upwards, the floor must push harder. If it brakes while moving upwards, gravity “helps” to slow the person, and the floor has to push less.<br><br>
<b>What matters is the direction of $\vec a$, not of $\vec v$:</b> travelling downwards while braking means $a_A>0$ (upwards), so one feels heavier, just as when starting upwards.<br><br>
<b>Extreme cases:</b> $a_A = -g$ (free fall, cable snapped) gives $F_N = 0$: weightlessness. $a_A\lt-g$: the person would be pressed against the ceiling. On an abrupt stop after rapid upward travel the head can hit the ceiling, because $g$ is not enough to brake the person in time.<br><br>
<b>Connection:</b> in the lift system (not inertial) $-m\vec A$ appears as an inertial force (3.11.3); the equivalence principle says that locally this cannot be distinguished from a stronger gravitational field $g+a_A$.`,
    derivation: R`<ol class="fc-steps">
<li>Forces on the person: $-mg\,\vec e_y$ (gravitation), $+F_N\,\vec e_y$ (floor)<em>Only these two real forces; axis upwards.</em></li>
<li>Acceleration of the person = $a_A\,\vec e_y$<em>It is at rest relative to the lift, so in the inertial frame it moves with the lift’s acceleration.</em></li>
<li>$-mg + F_N = ma_A$<em>Newton II in the inertial frame (3.131).</em></li>
<li>$F_N = m(g+a_A)$<em>Solve for the normal force (3.132); the scale shows $|F_N|$.</em></li>
<li>$m_\text{apparent} = \dfrac{F_N}{g} = m\left(1+\dfrac{a_A}{g}\right)$<em>A scale calibrated in kg divides by $g$.</em></li>
</ol>`,
    example: R`Person of $70\,\text{kg}$, lift starts upwards with $a_A = 2{,}0\,\text{m/s}^2$: $F_N = 70\cdot11{,}81\,\text{N} = 827\,\text{N}$, the scale shows “$84\,\text{kg}$”.<br>
Braking with $a_A = -2{,}0\,\text{m/s}^2$: $F_N = 70\cdot7{,}81\,\text{N} = 547\,\text{N}$, i.e. “$56\,\text{kg}$”.<br>
Free fall: $0\,\text{N}$.`,
    counterexample: R`<b>“In a lift going down you always feel lighter” is false:</b> when <i>stopping</i> at the end of a downward trip, $\vec a$ points upwards, and the scale shows <i>more</i>. Only starting to move downwards makes you lighter. At constant velocity, in either direction, the scale shows exactly $mg$.`,
    pitfalls: R`<ul><li>Inferring from the direction of travel instead of the direction of acceleration.</li>
<li>Believing the gravitational force $mg$ changes in the lift; it stays the same, only $F_N$ changes.</li>
<li>Choosing the sign of $a_A$ inconsistently with the choice of axis.</li></ul>`
  },
  "ph3_schwerelosigkeit": {
    title: "Weightlessness of an astronaut in a spacecraft",
    category: R`3.10 Force fields`,
    type: "herleitung",
    front: R`An astronaut (mass $m_A$) is in a spacecraft ($m_R$) in orbit. Using Newton’s equations for both, show that the <b>normal force vanishes</b> when she is at rest relative to the craft. What exactly does “weightlessness” mean?`,
    back: R`With $\vec g_U$ = gravitational acceleration on the orbit and $\vec F_N$ = normal force of the floor on the astronaut (accelerations relative to a fixed system, e.g. the Earth’s centre):
$$m_A\vec a_A = m_A\vec g_U + \vec F_N,\qquad m_R\vec a_R = m_R\vec g_U - \vec F_N\qquad(3.135,\,3.136)$$
(the minus sign for $m_R$ follows from Newton III). If she is at rest relative to the craft, $\vec a_A = \vec a_R\equiv\vec a$ (3.138). Adding gives $\vec g_U = \vec a$ (3.139), hence
$$m_A\vec a = m_A\vec g_U + \vec F_N\;\Rightarrow\;\vec F_N = \vec 0\qquad(3.140,\,3.141)$$
Both fall towards the Earth with the same acceleration. On the circular orbit this is the centripetal acceleration $a = v^2/R_U$ (3.142).<br><br>
<b>Weightlessness</b> means: the entire acceleration comes from gravity, and <b>no normal force</b> opposes it. It does <b>not</b> mean that no gravity acts. One experiences the same in a freely falling lift, in parabolic flight or on a roller coaster.`,
    meta: "Script: Section 3.10.3.2, Example 2, Eqs. (3.135)–(3.142), pp. 73–74; summary 3.12",
    explanation: R`<b>Intuition:</b> The ISS is constantly “falling” around the Earth: it falls towards the Earth, but moves sideways so fast that it always misses the Earth. The astronaut falls exactly the same way. There is nothing she is pressed against, so she feels no weight.<br><br>
<b>Why exactly the same?</b> Because of $m_t = m_s$, the free-fall acceleration $\vec g_U$ is identical for astronaut and craft, regardless of their masses (3.1.2). If that were not the case, she would be pressed against a wall.<br><br>
<b>Dependence:</b> weightlessness has nothing to do with height, only with free fall. At 400 km height $g_U\approx0{,}89\,g$; on a tower 400 m high you are not weightless, as long as you stand.<br><br>
<b>Connection:</b> in the co-falling system (3.11.4) $\vec a' = 0$ although a real force acts. The inertial force $-m\vec A = -m\vec g$ apparently compensates gravity (Einstein’s lift, equivalence principle).`,
    derivation: R`<ol class="fc-steps">
<li>$m_A\vec a_A = m_A\vec g_U + \vec F_N$<em>Astronaut: gravity plus normal force from the floor (3.135).</em></li>
<li>$m_R\vec a_R = m_R\vec g_U - \vec F_N$<em>Spacecraft: gravity plus the counterforce of the astronaut on the floor (Newton III, 3.136).</em></li>
<li>$(m_A+m_R)\vec g_U = m_A\vec a_A + m_R\vec a_R$<em>Adding: the internal forces $\pm\vec F_N$ cancel (3.137).</em></li>
<li>$\vec a_A = \vec a_R = \vec a\;\Rightarrow\;\vec g_U = \vec a$<em>Relative rest: same acceleration; then the common acceleration is exactly $\vec g_U$ (3.138, 3.139).</em></li>
<li>$m_A\vec g_U = m_A\vec g_U + \vec F_N\;\Rightarrow\;\vec F_N = \vec 0$<em>Substitute into equation 1: the normal force vanishes (3.140, 3.141).</em></li>
<li>$g_U = \dfrac{v^2}{R_U}\;\Rightarrow\;v = \sqrt{g_UR_U}$<em>On the circular orbit this free-fall acceleration is the centripetal acceleration (3.142).</em></li>
</ol>`,
    example: R`<b>ISS:</b> $R_U = 6771\,\text{km}$, $g_U = 8{,}69\,\text{m/s}^2$: $v = \sqrt{8{,}69\cdot6{,}771\cdot10^{6}}\,\text{m/s} = 7{,}67\,\text{km/s}$, orbital period $T = 2\pi R_U/v = 5550\,\text{s}\approx92\,\text{min}$.<br>
<b>Parabolic flight:</b> an aircraft flies for about 20 s exactly the trajectory a freely falling body would follow at its speed, thereby creating weightlessness in the cabin, in the middle of the atmosphere.`,
    counterexample: R`<b>Geostationary satellite:</b> at $36\,000\,\text{km}$ height $g$ is only about $0{,}22\,\text{m/s}^2$, i.e. not zero. One is weightless there because the satellite falls freely, not because of the height. A tower reaching that far would also make a person at its top (carried along with the Earth’s rotation) weightless; but not at any lower floor.`,
    pitfalls: R`<ul><li>“Weightless = no gravity”.</li>
<li>Forgetting the sign of the reaction force in the spacecraft equation.</li>
<li>Giving the accelerations in the spacecraft system instead of in the fixed (inertial) system.</li>
<li>Believing the astronaut has lost her mass; inertia remains (heavy objects are still hard to push).</li></ul>`
  },
  "ph3_erdrotation_gewicht": {
    title: "Weight on the rotating Earth: dependence on latitude",
    category: R`3.10 Force fields`,
    type: "herleitung",
    front: R`Why is the normal force (the measured weight) on the rotating Earth slightly smaller than $mg$, and how does it depend on the geographic latitude $\varphi$? Derive $a_{ZP}\approx0{,}034\cos\varphi\,\text{m/s}^2$ and $|\vec F_N|\approx mg\sqrt{1-2\frac{a_{ZP}}{g}\cos\varphi}$.`,
    back: R`A body on the Earth’s surface moves with the Earth on a circle around the Earth’s axis. The required centripetal force is supplied by the sum of gravitation and normal force:
$$\vec F_G + \vec F_N = \vec F_{ZP} = -m\frac{v^2}{r}\hat x\qquad(3.143,\,3.144)$$
with circle radius $r = R\cos\varphi$ and $v = 2\pi r/T$:
$$a_{ZP} = \frac{v^2}{r} = \frac{4\pi^2r}{T^2}\approx0{,}034\cos\varphi\ \frac{\text{m}}{\text{s}^2}\qquad(3.145\text{–}3.148)$$
($R = 6378\,\text{km}$, $T = 24\,\text{h}$.) The weight force points to the Earth’s centre (spherical symmetry), the centripetal force to the <b>rotation axis</b> (cylindrical symmetry). In components:
$$\vec F_N = m\begin{pmatrix}g\cos\varphi - a_{ZP}\\0\\g\sin\varphi\end{pmatrix},\quad|\vec F_N| = mg\sqrt{1-2\tfrac{a_{ZP}}{g}\cos\varphi+\left(\tfrac{a_{ZP}}{g}\right)^2}\approx mg\sqrt{1-2\tfrac{a_{ZP}}{g}\cos\varphi}$$
(3.149–3.152). Thus $F_N\lt mg$ for $\varphi\lt\pi/2$ and $F_N = mg$ at the pole (3.153).`,
    meta: "Script: Section 3.10.3.2, Example 3, Eqs. (3.143)–(3.153), Fig. 3.26, pp. 74–75",
    explanation: R`<b>Intuition:</b> Part of gravity is “used up” to keep the body on its circle around the Earth’s axis. Only the remainder has to be carried by the floor. At the equator the circle is largest; at the pole it shrinks to a point.<br><br>
<b>Dependencies:</b> $a_{ZP}\propto r = R\cos\varphi$, maximal at the equator ($0{,}034\,\text{m/s}^2$, about $0{,}35\,\%$ of $g$), zero at the pole. The relative weight reduction is $\approx\frac{a_{ZP}\cos\varphi}{g} = \frac{0{,}034\cos^2\varphi}{g}$.<br><br>
<b>Direction:</b> because $\vec F_N$ is not exactly radial, the plumb line also deviates slightly from the direction to the Earth’s centre (at most about $0{,}1^\circ$ at $45^\circ$ latitude). The Earth itself has, over millions of years, deformed into a flattened ellipsoid, which additionally reduces $g$ at the equator (measured $9{,}78$ instead of $9{,}83\,\text{m/s}^2$ at the pole).<br><br>
<b>Connection:</b> in the co-rotating system this effect appears as the centrifugal force (3.11.3); together with gravitation it gives the “effective” gravity.`,
    derivation: R`<ol class="fc-steps">
<li>$r = R\cos\varphi,\quad v = \dfrac{2\pi r}{T}$<em>Distance from the Earth’s axis and orbital speed of a point at latitude $\varphi$ (3.145, 3.146).</em></li>
<li>$a_{ZP} = \dfrac{v^2}{r} = \dfrac{4\pi^2R\cos\varphi}{T^2}$<em>Centripetal acceleration (3.147).</em></li>
<li>$\dfrac{4\pi^2\cdot6{,}378\cdot10^{6}\,\text{m}}{(86\,400\,\text{s})^2} = 0{,}0337\,\text{m/s}^2$<em>Insert numbers: $a_{ZP}\approx0{,}034\cos\varphi\,\text{m/s}^2$ (3.148).</em></li>
<li>$\vec F_N = \vec F_{ZP} - \vec F_G$<em>Solve the equation for the normal force (3.149); $\vec F_G = -mg(\cos\varphi,0,\sin\varphi)$ points to the Earth’s centre.</em></li>
<li>$F_{N,x} = m(g\cos\varphi - a_{ZP}),\quad F_{N,z} = mg\sin\varphi$<em>Components in the $xz$-plane (3.150); $x$ points outward from the axis.</em></li>
<li>$|\vec F_N|^2 = m^2\left(g^2 - 2ga_{ZP}\cos\varphi + a_{ZP}^2\right)$<em>Square and use $\cos^2+\sin^2 = 1$ (3.151).</em></li>
<li>$|\vec F_N|\approx mg\sqrt{1-2\tfrac{a_{ZP}}{g}\cos\varphi}$<em>Neglect $(a_{ZP}/g)^2\approx10^{-5}$ (3.152).</em></li>
</ol>`,
    example: R`<b>Equator</b> ($\varphi = 0$): $F_N = m(g - a_{ZP}) = m(9{,}81 - 0{,}034)$, i.e. $0{,}35\,\%$ lighter: a 70-kg person “weighs” about 240 g less.<br>
<b>Zurich</b> ($\varphi = 47{,}4^\circ$): $a_{ZP} = 0{,}023\,\text{m/s}^2$; relative reduction $\approx\frac{0{,}023\cdot0{,}677}{9{,}81} = 0{,}16\,\%$.<br>
<b>Pole</b>: no reduction.`,
    counterexample: R`<b>The centripetal force does not point to the Earth’s centre:</b> whoever assumes $\vec F_{ZP}$ is radial (like $\vec F_G$) gets $F_N = m(g - a_{ZP})$ for all latitudes. That is correct only at the equator. At other latitudes $\vec F_{ZP}$ points to the axis, and only its component along the plumb line reduces the weight.`,
    pitfalls: R`<ul><li>Using $r = R$ instead of $r = R\cos\varphi$ for the orbital radius.</li>
<li>Confusing the sidereal day (23 h 56 min) and the solar day (24 h); the script uses 24 h, the difference is immaterial here.</li>
<li>Reading $\varphi$ as the polar distance instead of the geographic latitude ($\cos$ and $\sin$ swapped).</li>
<li>Drawing the centripetal force as an additional force instead of as the resultant of $\vec F_G$ and $\vec F_N$.</li></ul>`
  },

  // ========================================================================
  // 3.11 BESCHLEUNIGTE BEZUGSSYSTEME – SCHEINKRÄFTE
  // ========================================================================
  "ph3_trafo_beschleunigt": {
    title: "Velocity and acceleration in an accelerated, rotating system",
    category: R`3.11 Accelerated frames of reference – “fictitious forces”`,
    type: "herleitung",
    front: R`A reference frame $K'$ has its origin at $\vec R(t)$ and rotates with constant $\vec\omega$ relative to the inertial frame $K$. Derive:
$$\vec v = \vec V + \vec v\,' + \vec\omega\times\vec r\,',\qquad \vec a = \vec a\,' + \vec A + 2\,\vec\omega\times\vec v\,' + \vec\omega\times(\vec\omega\times\vec r\,')$$`,
    back: R`In $K'$: $\vec r\,' = x'\vec e_{x'}+y'\vec e_{y'}+z'\vec e_{z'}$, $\vec v\,' = \dot x'\vec e_{x'}+\dots$, $\vec a\,' = \ddot x'\vec e_{x'}+\dots$ (3.154–3.156). In $K$ it holds that $\vec r = \vec R + \vec r\,'$ (3.157). Seen from $K$, the basis vectors $\vec e_{x'},\dots$ also depend on time, with $\dot{\vec e} = \vec\omega\times\vec e$ (2.69).
$$\vec v = \vec V + \vec v\,' + \vec\omega\times\vec r\,'\qquad(3.161)$$
<ul><li>$\vec V = \dot{\vec R}$: velocity of $O'$ relative to $O$</li><li>$\vec v\,'$: velocity in $K'$</li><li>$\vec\omega\times\vec r\,'$: consequence of the rotation of $K'$</li></ul>
$$\vec a = \vec a\,' + \vec A + 2\,\vec\omega\times\vec v\,' + \vec\omega\times(\vec\omega\times\vec r\,')\qquad(3.166)$$
<ul><li>$\vec A = \dot{\vec V}$: acceleration of $O'$</li><li>$\vec a\,'$: acceleration in $K'$</li><li>$\vec a_C := -2\,\vec\omega\times\vec v\,'$: Coriolis acceleration</li><li>$\vec\omega\times(\vec\omega\times\vec r\,')$: centripetal acceleration; for $\vec\omega\perp\vec r\,'$ equal to $-\omega^2\vec r\,'$ (3.167)</li></ul>`,
    meta: "Script: Sections 3.11.1–3.11.2, Eqs. (3.154)–(3.167), Fig. 3.27, pp. 76–79",
    explanation: R`<b>Intuition:</b> Anyone standing on a merry-go-round sees the world from a moving, rotating viewpoint. To obtain the “true” motion (in the inertial frame) one must add three things: the motion of the origin ($\vec V$, $\vec A$), one’s own motion relative to the merry-go-round ($\vec v\,'$, $\vec a\,'$) and the effects of the rotation.<br><br>
<b>Where does the factor 2 in Coriolis come from?</b> Two effects contribute equally. First, the velocity vector $\vec v\,'$ rotates with the system ($\vec\omega\times\vec v\,'$ from $\dot{\vec v}\,'$). Second, when moving in $K'$ the distance from the axis changes, and with it the carrying velocity $\vec\omega\times\vec r\,'$ (again $\vec\omega\times\vec v\,'$).<br><br>
<b>Dependencies:</b> Coriolis $\propto\omega v'$ (only for moving bodies), centripetal $\propto\omega^2r'_\perp$ (also for resting ones).<br><br>
<b>Connection:</b> this is the basis of all fictitious forces (3.11.3) and of gyroscopic motion (Ch. 13). If $\vec\omega$ is not constant, an additional term $\dot{\vec\omega}\times\vec r\,'$ would appear (Euler term), which the script excludes here.`,
    derivation: R`<ol class="fc-steps">
<li>$\vec r = \vec R + \vec r\,'\;\Rightarrow\;\vec v = \vec V + \dot{\vec r}\,'$<em>Add position vectors, differentiate with respect to time (3.157, 3.158).</em></li>
<li>$\dot{\vec r}\,' = \underbrace{\dot x'\vec e_{x'}+\dot y'\vec e_{y'}+\dot z'\vec e_{z'}}_{\vec v\,'} + \underbrace{x'\dot{\vec e}_{x'}+y'\dot{\vec e}_{y'}+z'\dot{\vec e}_{z'}}_{\vec u}$<em>Product rule: seen from $K$, the components <i>and</i> the basis vectors change (3.159).</em></li>
<li>$\vec u = x'(\vec\omega\times\vec e_{x'})+\dots = \vec\omega\times\vec r\,'$<em>Each co-rotating unit vector satisfies $\dot{\vec e} = \vec\omega\times\vec e$ (2.69); factor out $\vec\omega$ (3.160). This gives (3.161).</em></li>
<li>$\vec a = \dot{\vec V} + \dot{\vec v}\,' + \vec\omega\times\dot{\vec r}\,'$<em>Differentiate (3.161), with $\vec\omega$ constant (3.162).</em></li>
<li>$\dot{\vec v}\,' = \vec a\,' + \vec\omega\times\vec v\,'$<em>Same argument as in steps 2–3, applied to $\vec v\,'$ (3.163, 3.164).</em></li>
<li>$\vec\omega\times\dot{\vec r}\,' = \vec\omega\times(\vec v\,'+\vec\omega\times\vec r\,') = \vec\omega\times\vec v\,' + \vec\omega\times(\vec\omega\times\vec r\,')$<em>Insert $\dot{\vec r}\,'$ from steps 2–3 (3.165).</em></li>
<li>$\vec a = \vec a\,' + \vec A + 2\,\vec\omega\times\vec v\,' + \vec\omega\times(\vec\omega\times\vec r\,')$<em>Collect everything; the two $\vec\omega\times\vec v\,'$ give the factor 2 (3.166).</em></li>
<li>$\vec\omega\times(\vec\omega\times\vec r\,') = \vec\omega(\vec\omega\cdot\vec r\,') - \vec r\,'\omega^2 = -\omega^2\vec r\,'$ for $\vec\omega\perp\vec r\,'$<em>BAC-CAB; points to the axis, i.e. centripetal (3.167).</em></li>
</ol>`,
    example: R`<b>Resting point on the merry-go-round</b> ($\vec v\,' = \vec a\,' = \vec 0$, $\vec A = \vec 0$): $\vec a = \vec\omega\times(\vec\omega\times\vec r\,') = -\omega^2\vec r\,'_\perp$, exactly the centripetal acceleration of circular motion from Ch. 2.<br>
With $\omega = 1\,\text{s}^{-1}$, $r' = 3\,\text{m}$: $a = 3\,\text{m/s}^2$.<br><br>
<b>Walking outwards</b> with $v' = 1\,\text{m/s}$: additionally $|2\vec\omega\times\vec v\,'| = 2\,\text{m/s}^2$ perpendicular to the direction of walking.`,
    counterexample: R`<b>Only a $K'$ moving uniformly in a straight line</b> ($\vec A = \vec 0$, $\vec\omega = \vec 0$): all additional terms vanish, $\vec a = \vec a\,'$. This is the Galilean transformation (3.5); $K'$ is then itself an inertial frame.`,
    pitfalls: R`<ul><li>Forgetting the factor 2 in the Coriolis term.</li>
<li>Swapping the order in the cross product (sign error).</li>
<li>Evaluating $\vec\omega\times(\vec\omega\times\vec r\,')$ incorrectly; only the component of $\vec r\,'$ perpendicular to the axis contributes.</li>
<li>Forgetting the Euler term $\dot{\vec\omega}\times\vec r\,'$ when $\vec\omega$ is time-dependent.</li></ul>`
  },
  "ph3_scheinkraefte": {
    title: "Fictitious forces: inertial, Coriolis and centrifugal terms",
    category: R`3.11 Accelerated frames of reference – “fictitious forces”`,
    type: "gesetz",
    front: R`How do <b>fictitious forces</b> arise when, in the accelerated system $K'$, one insists on the form $m\vec a\,' = \text{“forces”}$? Give $\vec F_T$, $\vec F_C$, $\vec F_{ZF}$ and name the properties that distinguish them from real forces.`,
    back: R`Real forces do not depend on the reference frame: $\vec F' = \vec F$ (only relative distances and relative velocities count). With (3.166):
$$\vec F = m\vec a = m\{\vec a\,' + \vec A + 2\,\vec\omega\times\vec v\,' + \vec\omega\times(\vec\omega\times\vec r\,')\}\qquad(3.170)$$
$$\Rightarrow\quad m\vec a\,' = \vec F' + \vec F_T + \vec F_C + \vec F_{ZF}\qquad(3.171,\,3.172)$$
<ul><li>$\vec F_T = -m\vec A$: “inertial force”</li>
<li>$\vec F_C = -2m\,(\vec\omega\times\vec v\,')$: “Coriolis force”</li>
<li>$\vec F_{ZF} = -m\,\vec\omega\times(\vec\omega\times\vec r\,')$: “centrifugal force” (outward)</li></ul>
<b>Properties:</b>
<ul><li>No interactions, but kinematic terms moved to the force side.</li>
<li>All are $\propto m$.</li>
<li>They vanish in the inertial frame ($\vec A = \vec 0$, $\vec\omega = \vec 0$).</li>
<li>They have no reaction partner.</li></ul>
Consequences: (a) $\vec a\,' = 0$ despite a real force (apparent equilibrium); (b) $\vec a\,'\neq0$ without a real force.`,
    meta: "Script: Section 3.11.3, Eqs. (3.168)–(3.178), pp. 79–81",
    explanation: R`<b>Intuition:</b> On a braking bus one is “thrown forwards”. In fact no force acts forwards; one simply continues moving because of inertia while the bus slows down. Whoever wants to regard the bus as at rest must invent a fictitious force $-m\vec A$ to explain the observation with Newton II.<br><br>
<b>Why $\propto m$?</b> They arise from $m\cdot$(acceleration of the reference frame). That is why they cannot be locally distinguished from gravity (equivalence principle, 3.1.2).<br><br>
<b>Coriolis:</b> acts only on bodies moving in $K'$ ($\propto v'$), is perpendicular to $\vec v\,'$ and therefore does no work. It only deflects. <b>Centrifugal:</b> acts also on resting bodies, $\propto\omega^2r'_\perp$, away from the axis.<br><br>
<b>Sign convention:</b> in the script $\vec F_C = +m\vec a_C$ with $\vec a_C = -2\vec\omega\times\vec v\,'$. In parts of the literature the sign of the Coriolis <i>acceleration</i> is defined differently; the force is the same.<br><br>
<b>Connection:</b> examples: rotation in the plane (3.11.4.1), weather (3.11.4.2), Foucault pendulum (3.11.4.3).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec F = m\vec a$ (only in the inertial frame $K$)<em>Starting point: real force and real acceleration.</em></li>
<li>$\vec F = m\{\vec a\,' + \vec A + 2\vec\omega\times\vec v\,' + \vec\omega\times(\vec\omega\times\vec r\,')\}$<em>Express the acceleration through the quantities in $K'$ (3.166, 3.170).</em></li>
<li>$m\vec a\,' = \vec F - m\vec A - 2m\vec\omega\times\vec v\,' - m\vec\omega\times(\vec\omega\times\vec r\,')$<em>Bring everything except $m\vec a\,'$ to the right-hand side (3.171).</em></li>
<li>$m\vec a\,' = \vec F + \vec F_T + \vec F_C + \vec F_{ZF}$<em>The shifted terms get names: they look like forces, but are not (3.172).</em></li>
<li>$\vec\omega\perp\vec r\,':\ \vec F_{ZF} = +m\omega^2\vec r\,'$<em>With (3.167): the centrifugal term points away from the axis.</em></li>
</ol>`,
    example: R`<b>Braking bus</b> ($A = -3\,\text{m/s}^2$): a 70-kg passenger “feels” $F_T = 210\,\text{N}$ forwards.<br>
<b>Coriolis on a car</b> ($v' = 30\,\text{m/s}$, latitude $47{,}4^\circ$): horizontal component $2v'\omega\sin\varphi = 2\cdot30\cdot7{,}29\cdot10^{-5}\cdot0{,}736\,\text{m/s}^2 = 3{,}2\cdot10^{-3}\,\text{m/s}^2$, for 1500 kg about $4{,}8\,\text{N}$. Imperceptible, but decisive for ocean and air currents.<br>
<b>Spin dryer</b> ($\omega = 100\,\text{s}^{-1}$, $r = 0{,}25\,\text{m}$): centrifugal term $2500\,\text{m/s}^2\approx250\,g$.`,
    counterexample: R`<b>No reaction partner:</b> for the “centrifugal force” on the stone on the string there is no body that experiences a counterforce. The string force on the stone has its partner in the force of the stone on the hand, not in a centrifugal force. This shows that fictitious forces are not interactions.<br>
<b>Coulomb force $\not\propto m$:</b> real forces need not be proportional to mass; fictitious forces always are.`,
    pitfalls: R`<ul><li>Drawing fictitious forces in the inertial frame. They do not exist there.</li>
<li>Writing the centripetal force (resultant of real forces, inertial frame) and the centrifugal force (fictitious force in the rotating frame) into the same equation simultaneously.</li>
<li>Applying the Coriolis force to resting bodies ($v' = 0$ gives $F_C = 0$).</li>
<li>Mixing the sign conventions of different textbooks.</li></ul>`
  },
  "ph3_echte_beschleunigung": {
    title: R`Real forces, real acceleration and the freely falling lift`,
    category: R`3.11 Accelerated frames of reference – “fictitious forces”`,
    type: "konzept",
    front: R`What does the script understand by the <b>real acceleration</b> $\vec a_e$, and in what form does Newton II hold in <b>every</b> reference frame? Use this to explain why $\vec a\,' = 0$ holds in the <b>freely falling lift</b>, although a force acts.`,
    back: R`The “problem” of fictitious forces arises from the demand that the acceleration must in <i>every</i> system be the second derivative of the coordinates. Solution: one defines as the <b>real acceleration</b> $\vec a_e$ the expression $\vec a$ on the left-hand side of (3.166). It is (in magnitude and direction) independent of the reference frame, like real forces $\vec F_e$.
<ul><li>Only in inertial frames is $\vec a_e = (\ddot x,\ddot y,\ddot z)$ (3.179).</li>
<li>In every reference frame $\vec F_e = m\,\vec a_e$ (3.180).</li></ul>
<b>Freely falling lift</b> ($\vec\omega = 0$, person at rest in the lift, $\vec v\,' = 0$): real force $\vec F_e = m\vec g$; the lift falls with $\vec A = \vec g$:
$$m\vec g = m\vec a\,' + m\vec A = m\vec a\,' + m\vec g\;\Rightarrow\;\vec a\,' = \vec 0\qquad(3.186\text{–}3.189)$$
Conversely: without a real force, $\vec a\,' = \vec a_T + \vec a_C + \vec a_{ZF}\neq0$, so a curved path in $K'$ (3.190–3.192).`,
    meta: "Script: Section 3.11.4, Eqs. (3.179)–(3.192), pp. 81–83",
    explanation: R`<b>Intuition:</b> Physically real are only the interactions (real forces) and the acceleration relative to an inertial frame. What one reads off as “acceleration” in an accelerated system ($\ddot x'$) is partly an artefact of the observer’s motion.<br><br>
<b>Freely falling lift:</b> gravity acts fully, but it accelerates person and lift equally. Nothing moves relative to the lift; everything floats. This is exactly the situation in the ISS.<br><br>
<b>Two views, one result:</b>
<ul><li>In the inertial frame: real force $m\vec g$ gives real acceleration $\vec g$, the same for person and lift.</li>
<li>In the lift: $m\vec g$ plus the inertial term $-m\vec g$ gives zero, so $\vec a\,' = 0$.</li></ul>
Both are correct if one stays clean; errors arise only when the two views are mixed.<br><br>
<b>Connection:</b> this is Einstein’s thought experiment: locally, gravity can be “transformed away” by choosing a freely falling system. From this grew general relativity.`,
    derivation: R`<ol class="fc-steps">
<li>$\sum_i\vec F_i = m\vec a_e$<em>Only real forces produce real accelerations (3.181).</em></li>
<li>$\sum_i\vec F_i = m\vec a\,' - m\vec a_T - m\vec a_C - m\vec a_{ZF}$<em>Express $\vec a_e$ through quantities in $K'$ (3.182), with $\vec a_T = -\vec A$ etc.</em></li>
<li>Lift: $\vec\omega = 0$, $\vec A = \vec g$, $\vec F_e = m\vec g$<em>Linearly accelerated system without rotation, which itself falls freely (3.186, 3.187).</em></li>
<li>$m\vec g = m\vec a\,' + m\vec g$<em>Substitute (3.188).</em></li>
<li>$\vec a\,' = \vec 0$<em>The person is at rest in the lift, or moves uniformly, although a force acts (3.189).</em></li>
</ol>`,
    example: R`In the freely falling lift the person lets go of an apple: it stays “floating” beside her hand ($\vec a\,' = 0$). Seen from the building, the person, the apple and the lift all fall together with $g$.<br>
If she throws the apple horizontally, in the lift it flies <i>in a straight line</i> to the wall; seen from the building, on a projectile parabola.`,
    counterexample: R`<b>Limit of the equivalence: tides.</b> In a very large freely falling lift, two apples at opposite ends do not fall exactly parallel; both fall towards the Earth’s centre, so they move slightly towards each other, and the lower one falls a little faster. The inhomogeneous field can be transformed away only <i>locally</i>.`,
    pitfalls: R`<ul><li>Interpreting $\ddot x'$ in an accelerated system as a real acceleration.</li>
<li>Concluding from $\vec a\,' = 0$ that no force acts.</li>
<li>Mixing the inertial-frame and lift descriptions in one equation (e.g. a real force plus an inertial term, but calculated in the inertial frame).</li></ul>`
  },
  "ph3_rotierende_scheibe": {
    title: "Force-free motion on the rotating disc",
    category: R`3.11 Accelerated frames of reference – “fictitious forces”`,
    type: "herleitung",
    front: R`A point mass starts force-free from the centre of a disc rotating with $\vec\omega = \omega\vec e_z$ ($\vec v\,'(0) = v_0\vec e_{y'}$, $\vec r\,'(0) = \vec 0$). Set up the equations of motion in $K'$ and show by partial integration that $v' = \sqrt{v_0^2+\omega^2r'^2}$.`,
    back: R`Coriolis and centrifugal terms:
$$m\vec a_C = -2m\,\vec\omega\times\vec v\,' = 2m\omega\begin{pmatrix}\dot y'\\-\dot x'\\0\end{pmatrix},\qquad m\vec a_{ZF} = m\omega^2\begin{pmatrix}x'\\y'\\z'\end{pmatrix}\qquad(3.195\text{–}3.198)$$
Equations of motion (3.199–3.202):
$$\ddot x' = 2\omega\dot y' + \omega^2x',\qquad \ddot y' = -2\omega\dot x' + \omega^2y',\qquad \ddot z' = 0$$
Multiply by $\dot x'$ and $\dot y'$ respectively and add: the Coriolis terms drop out. Integration gives
$$\tfrac12\dot x'^2 + \tfrac12\dot y'^2 = \tfrac12\omega^2x'^2 + \tfrac12\omega^2y'^2 + c,\qquad c = \tfrac12v_0^2\qquad(3.206,\,3.207)$$
$$v'^2 - \omega^2r'^2 = v_0^2\quad\Rightarrow\quad v' = \sqrt{v_0^2+\omega^2r'^2}\qquad(3.208)$$
In the rotating system the speed increases with distance, although no real force acts.`,
    meta: "Script: Section 3.11.4.1, Eqs. (3.193)–(3.208), Fig. 3.28, pp. 83–86",
    explanation: R`<b>Intuition:</b> In the inertial frame the body simply flies straight on with $v_0$. The disc turns away beneath it. Seen from the merry-go-round one sees a spiral path that becomes ever faster, because the rim of the merry-go-round turns away from the body ever more quickly.<br><br>
<b>Why does Coriolis drop out?</b> Multiplying by $\vec v\,'$ forms the “power” of the terms. The Coriolis term is always perpendicular to $\vec v\,'$ and does no work, so it does not change the magnitude $v'$. Only the centrifugal term, which acts like an outward-pulling spring with a “negative” spring constant, changes $v'$.<br><br>
<b>Energy analogy:</b> $\tfrac12v'^2 - \tfrac12\omega^2r'^2 = \text{const}$ looks like an energy conservation law with the centrifugal potential $V_{ZF} = -\tfrac12m\omega^2r'^2$ (Ch. 4).<br><br>
<b>Connection:</b> the same pattern (Coriolis only deflects) explains vortices in the atmosphere and the rotation of the Foucault pendulum.`,
    derivation: R`<ol class="fc-steps">
<li>$-2\vec\omega\times\vec v\,' = -2\begin{pmatrix}0\\0\\\omega\end{pmatrix}\times\begin{pmatrix}\dot x'\\\dot y'\\0\end{pmatrix} = -2\begin{pmatrix}-\omega\dot y'\\\omega\dot x'\\0\end{pmatrix}$<em>Cross product component by component ($\vec e_z\times\vec e_x = \vec e_y$, $\vec e_z\times\vec e_y = -\vec e_x$) (3.196, 3.197).</em></li>
<li>$\ddot x' = 2\omega\dot y' + \omega^2x',\quad\ddot y' = -2\omega\dot x' + \omega^2y'$<em>Equation of motion in $K'$ without a real force: $\vec a\,' = \vec a_C + \vec a_{ZF}$ (3.191, 3.200, 3.201).</em></li>
<li>$\ddot x'\dot x' + \ddot y'\dot y' = \omega^2(x'\dot x' + y'\dot y')$<em>First equation times $\dot x'$, second times $\dot y'$, added: $2\omega\dot y'\dot x' - 2\omega\dot x'\dot y' = 0$ (3.203).</em></li>
<li>$\dot x'\,d\dot x' + \dot y'\,d\dot y' = \omega^2(x'\,dx' + y'\,dy')$<em>Multiply by $dt$: $\ddot x'\,dt = d\dot x'$, $\dot x'\,dt = dx'$ (3.204, 3.205).</em></li>
<li>$\tfrac12(\dot x'^2+\dot y'^2) = \tfrac12\omega^2(x'^2+y'^2) + c$<em>Integrate: $\int u\,du = \tfrac12u^2$ (3.206).</em></li>
<li>$t = 0$: $\tfrac12v_0^2 = 0 + c$<em>Initial conditions $\vec r\,'(0) = 0$, $\vec v\,'(0) = v_0\vec e_{y'}$ (3.207).</em></li>
<li>$v'^2 = v_0^2 + \omega^2r'^2$<em>With $v'^2 = \dot x'^2+\dot y'^2$, $r'^2 = x'^2+y'^2$ (3.208).</em></li>
</ol>`,
    example: R`$v_0 = 1{,}0\,\text{m/s}$, $\omega = 1{,}0\,\text{s}^{-1}$: at $r' = 2\,\text{m}$, $v' = \sqrt{1+4}\,\text{m/s} = 2{,}24\,\text{m/s}$.<br>
<b>Check in the inertial frame:</b> there the body flies radially outwards with $v_0$. At the location $r$ the disc has the carrying velocity $\omega r$, perpendicular to that. Relative to the disc the speed is therefore $\sqrt{v_0^2+(\omega r)^2}$ ✓, the same result without calculation.`,
    counterexample: R`<b>No real energy gain:</b> in the inertial frame the kinetic energy $\tfrac12mv_0^2$ stays constant. The “growing” speed is an effect of the reference frame; one cannot gain work from it.`,
    pitfalls: R`<ul><li>Sign errors in the cross product $\vec\omega\times\vec v\,'$.</li>
<li>Writing the Coriolis term with $\dot x'$ instead of $\dot y'$ in the $x$ equation.</li>
<li>Believing Coriolis changes the magnitude of the velocity.</li>
<li>Not determining the integration constant $c$ from the initial conditions.</li></ul>`
  },
  "ph3_coriolis_erde": {
    title: "Coriolis effect on the Earth’s surface: winds and low-pressure systems",
    category: R`3.11 Accelerated frames of reference – “fictitious forces”`,
    type: "konzept",
    front: R`How does the <b>Coriolis effect</b> act on air masses moving over the Earth’s surface? Why do low-pressure areas in the northern hemisphere rotate <b>anticlockwise</b>, and what happens at the equator?`,
    back: R`Coriolis acceleration of a mass element moving with $\vec v\,'$ relative to the Earth:
$$\frac{\vec F_C}{m} = \vec a_C = -2\,\vec\omega\times\vec v\,' = 2\,\vec v\,'\times\vec\omega$$
<ul><li>Northern hemisphere: a southerly wind (from south to north) is deflected to the <b>east</b>, a northerly wind to the <b>west</b>; in general, motions are deflected to the <b>right</b>.</li>
<li>Air flowing from a high to a low is deflected to the right; a vortex <b>anticlockwise</b> around the low arises (Fig. 3.30, Iceland).</li>
<li>At the equator a northward $\vec v\,'$ is parallel to $\vec\omega$: the Coriolis acceleration vanishes. On crossing the equator its (horizontal) direction reverses; in the southern hemisphere deflection is to the left.</li></ul>
Horizontal deflection: $|a_{C,\text{hor}}| = 2v'\omega\sin\varphi$.`,
    meta: "Script: Section 3.11.4.2, Figs. 3.29–3.30, pp. 86–88",
    explanation: R`<b>Intuition:</b> A point on the equator moves eastwards faster with the Earth’s rotation (465 m/s) than a point in Zurich (314 m/s). An air mass flowing northwards “brings along” its larger eastward momentum and runs ahead of the ground; it is deflected to the east (right). Conversely, air flowing southwards lags behind (westward deflection, again to the right).<br><br>
<b>Latitude dependence:</b> for horizontal motions only the vertical component of $\vec\omega$, $\omega_\perp = \omega\sin\varphi$, counts: maximal at the poles, zero at the equator. That is why tropical cyclones do not form directly at the equator.<br><br>
<b>Vortices:</b> air flows from high to low, is deflected to the right and finally circles (almost) along the isobars around the low: anticlockwise (northern hemisphere). Around a high it turns clockwise.<br><br>
<b>Connection:</b> the size of the effect scales with $v'\omega$. For everyday motions (bath, car) it is tiny; for large-scale, slow currents over hours and days it dominates.`,
    derivation: R`Horizontal component of the Coriolis acceleration at latitude $\varphi$:
<ol class="fc-steps">
<li>$\vec\omega = \vec\omega_\parallel + \vec\omega_\perp$, $|\vec\omega_\perp| = \omega\sin\varphi$<em>Decompose $\vec\omega$ into a component in the horizontal plane (northwards, $\omega\cos\varphi$) and a vertical one ($\omega\sin\varphi$).</em></li>
<li>$\vec a_C = 2\vec v\,'\times\vec\omega_\perp + 2\vec v\,'\times\vec\omega_\parallel$<em>The cross product is linear.</em></li>
<li>$\vec v\,'$ horizontal: $2\vec v\,'\times\vec\omega_\parallel$ is vertical<em>Two horizontal vectors give a vertical cross product; it changes the apparent weight only minimally.</em></li>
<li>$|\vec a_{C,\text{hor}}| = 2v'\omega\sin\varphi$, perpendicular to $\vec v\,'$<em>The horizontal deflection comes only from $\vec\omega_\perp$; in the northern hemisphere $\vec v\,'\times\vec\omega_\perp$ points to the right of $\vec v\,'$.</em></li>
<li>$\varphi = 0$: $a_{C,\text{hor}} = 0$; $\varphi\lt0$: sign reversal<em>No horizontal deflection at the equator; in the southern hemisphere $\vec\omega_\perp$ points downwards, so deflection is to the left.</em></li>
</ol>`,
    example: R`<b>Wind</b> with $v' = 10\,\text{m/s}$ in Zurich ($\varphi = 47{,}4^\circ$): $a = 2\cdot10\cdot7{,}29\cdot10^{-5}\cdot0{,}736\,\text{m/s}^2 = 1{,}07\cdot10^{-3}\,\text{m/s}^2$. Small, but over 3 hours this gives a lateral change of velocity of about $11\,\text{m/s}$, as large as the wind itself. That is why Coriolis dominates large-scale weather systems.`,
    counterexample: R`<b>Bathtub-vortex myth:</b> whether water in the plughole turns left or right is not decided by the Coriolis effect. At $v'\sim0{,}1\,\text{m/s}$ and a tub size of $\sim1\,\text{m}$, $a_C\sim10^{-5}\,\text{m/s}^2$, far smaller than the effects of the residual flow and the shape of the tub. The effect is detectable only in extremely calm laboratory experiments.`,
    pitfalls: R`<ul><li>Using $\cos\varphi$ instead of $\sin\varphi$ for the horizontal deflection.</li>
<li>Confusing the direction of rotation of highs and lows.</li>
<li>Assuming there is no Coriolis acceleration at all at the equator; only the horizontal one vanishes (for east–west motion there is a vertical one).</li>
<li>Overestimating the effect for small, fast motions.</li></ul>`
  },
  "ph3_foucault": {
    title: "Foucault pendulum: rotation of the swing plane at ω sin φ",
    category: R`3.11 Accelerated frames of reference – “fictitious forces”`,
    type: "herleitung",
    front: R`How does the <b>Foucault pendulum</b> demonstrate the Earth’s rotation? Using the Coriolis term, derive the rate of rotation of the swing plane $\dot\alpha = \omega\sin\varphi$. After how many oscillations has the plane rotated fully once?`,
    back: R`At latitude $\varphi$ only the vertical component $\omega_\perp$ acts on the horizontal pendulum motion:
$$\vec a_C = 2\vec v\,'\times(\vec\omega_\perp+\vec\omega_\parallel)\to2\vec v\,'\times\vec\omega_\perp,\qquad|\vec a_C| = 2v'\omega_\perp = 2v'\omega\sin\varphi\qquad(3.209,\,3.210)$$
The pendulum initially swings in the $y'z'$-plane: $y' = A\cos\Omega t$, $\dot y' = -A\Omega\sin\Omega t$ (3.211, 3.212). Lateral acceleration:
$$\ddot x' = 2\dot y'\omega_\perp = -2A\Omega\omega_\perp\sin\Omega t\qquad(3.213)$$
Integrated twice over half a period ($\omega\ll\Omega$, $\Delta x'\ll A$):
$$|\Delta x'| = A\,\omega_\perp T,\qquad \Delta\alpha = \frac{|\Delta x'|}{2A} = \omega_\perp\frac T2\qquad(3.215,\,3.216)$$
$$\dot\alpha = \frac{\Delta\alpha}{T/2} = \omega_\perp = \omega\sin\varphi\qquad(3.217)$$
A full revolution after $N = \dfrac{2\pi}{\omega_\perp T}$ oscillations (3.218). From this one can determine the geographic latitude.`,
    meta: "Script: Section 3.11.4.3, Eqs. (3.209)–(3.218), Figs. 3.31–3.32, pp. 86–90",
    explanation: R`<b>Intuition:</b> In the inertial frame the pendulum keeps its plane of swing (no force turns it). The Earth turns away beneath it. At the pole one sees a full rotation of the plane in one sidereal day. At the equator the ground does not rotate about the plumb line, and there is no rotation. In between, only the vertical component of the Earth’s rotation counts: $\omega\sin\varphi$.<br><br>
<b>In the Earth’s frame</b> one sees the same effect as the Coriolis force: it deflects the pendulum a little to the right at each swing (northern hemisphere), and the swing plane wanders clockwise.<br><br>
<b>Why does one need a long pendulum?</b> The deflection per swing is tiny ($\omega_\perp T\ll1$). A long, heavy pendulum swings undisturbed for a long time, and the rotation accumulates visibly over hours.<br><br>
<b>Dependence:</b> the period of the plane’s rotation is $T_F = \frac{2\pi}{\omega\sin\varphi} = \frac{T_\text{Sterntag}}{\sin\varphi}$, independent of the pendulum length.`,
    derivation: R`<ol class="fc-steps">
<li>$\ddot x' = 2\dot y'\omega_\perp = -2A\Omega\omega_\perp\sin\Omega t$<em>Coriolis lateral acceleration with $\dot y' = -A\Omega\sin\Omega t$; sign according to the choice of axes in Fig. 3.32 (3.213).</em></li>
<li>$\dot x'(t) = -2A\Omega\omega_\perp\displaystyle\int_0^t\sin\Omega t'\,dt' = -2A\omega_\perp(1-\cos\Omega t)$<em>Integrate once with $\dot x'(0) = 0$ (3.214).</em></li>
<li>$\Delta x' = -2A\omega_\perp\left[t'-\tfrac1\Omega\sin\Omega t'\right]_0^{T/2} = -A\omega_\perp T$<em>Integrate again over half a period; $\sin(\Omega T/2) = \sin\pi = 0$ (3.215).</em></li>
<li>$\Delta\alpha\approx\dfrac{|\Delta x'|}{2A} = \dfrac{\omega_\perp T}{2}$<em>After half a period the turning point is displaced sideways by $\Delta x'$; relative to the distance $2A$ from turning point to turning point this is the small rotation angle (3.216).</em></li>
<li>$\dot\alpha = \dfrac{\Delta\alpha}{T/2} = \omega_\perp = \omega\sin\varphi$<em>Angular velocity of the rotation of the plane (3.217).</em></li>
<li>$N = \dfrac{2\pi}{2\Delta\alpha} = \dfrac{2\pi}{\omega_\perp T}$<em>Per full period $2\Delta\alpha = \omega_\perp T$; a full revolution requires $2\pi$ (3.218).</em></li>
</ol>`,
    example: R`<b>Zurich</b> ($\varphi = 47{,}4^\circ$): $T_F = \frac{23{,}93\,\text{h}}{\sin47{,}4^\circ} = \frac{23{,}93}{0{,}736}\,\text{h} = 32{,}5\,\text{h}$. The plane rotates by about $11^\circ$ per hour.<br>
A pendulum with $\ell = 67\,\text{m}$ (Panthéon), $T = 2\pi\sqrt{\ell/g} = 16{,}4\,\text{s}$: in Zurich a full revolution would take $N = \frac{32{,}5\cdot3600}{16{,}4}\approx7100$ oscillations.<br>
<b>Pole:</b> $T_F = 23{,}93\,\text{h}$ (one sidereal day).`,
    counterexample: R`<b>At the equator</b> the swing plane does not rotate at all ($\sin0 = 0$): a Foucault pendulum in Quito would show nothing, although the Earth rotates there at 465 m/s. The effect measures not the rotation speed of the ground, but its rotation about the plumb line.`,
    pitfalls: R`<ul><li>Using $\cos\varphi$ instead of $\sin\varphi$.</li>
<li>Taking the solar day (24 h) instead of the sidereal day (23 h 56 min) for $2\pi/\omega$.</li>
<li>Believing the period of rotation depends on the pendulum length.</li>
<li>Confusing the sense of rotation: in the northern hemisphere the plane turns clockwise (seen from above).</li></ul>`
  },

  // ========================================================================
  // ERGÄNZUNGEN: typische Prüfungsaufgaben und Brücken zu Physik II
  // ========================================================================
  "ph3_atwood_seilkraefte": {
    title: "Rope forces: Atwood machine and a block on a table with a hanging mass",
    category: R`3.9 Applications: contact forces`,
    type: "beispiel",
    front: R`(a) Two masses $m_1\gt m_2$ hang from a rope over a massless, frictionless pulley (<b>Atwood</b>). Determine the acceleration and the rope force. (b) A block $m_1$ lies on a table (sliding friction $\mu$) and is connected over a pulley at the table edge to a hanging mass $m_2$. What is the acceleration?`,
    back: R`Ideal rope (massless, inextensible) over a massless pulley: <b>equal rope force $S$</b> at both ends, <b>equal magnitude of acceleration</b> $a$ (constraint).<br><br>
<b>(a) Atwood</b> ($m_1$ sinks):
$$m_1a = m_1g-S,\qquad m_2a = S-m_2g\;\Rightarrow\;a = g\frac{m_1-m_2}{m_1+m_2},\qquad S = \frac{2m_1m_2}{m_1+m_2}g$$
<b>(b) Table:</b> $m_1a = S-\mu m_1g$, $m_2a = m_2g-S$:
$$a = g\frac{m_2-\mu m_1}{m_1+m_2},\qquad S = m_2(g-a)$$
Motion starts only if $m_2g\gt\mu_0m_1g$ (static friction).`,
    meta: "Supplement (typical exam problem); builds on Sections 3.9.1 (force diagram), 3.9.4 (friction) and 8.5.9.2 (pulley with mass)",
    explanation: R`<b>Intuition:</b> The gravitational force on the mass difference $(m_1-m_2)g$ must accelerate the <i>entire</i> mass $m_1+m_2$. That is why $a$ is much smaller than $g$ when the masses are similar – so Atwood measured $g$ with slow, easily observed motions.<br><br>
<b>Rope force:</b> it lies between $m_2g$ and $m_1g$: the light weight is pulled up ($S\gt m_2g$), the heavy one falls braked ($S\lt m_1g$). For $m_1 = m_2$, $S = mg$; as $m_2\to0$, $S\to0$.<br><br>
<b>Method:</b> for each body a separate free-body diagram and its own equation (positive in its direction of motion), then insert the constraint. Alternatively treat the whole system as “one body along the rope”: driving force minus resistances = total mass times $a$.<br><br>
<b>Connection:</b> with a massive pulley its inertia $J/R^2$ enters the denominator (running pulley, 8.5.9.2). Free-body diagram as for the stacked blocks (3.9.1).`,
    derivation: R`<ol class="fc-steps">
<li>$m_1$: $m_1a = m_1g-S$<em>Axis positive downwards for $m_1$.</em></li>
<li>$m_2$: $m_2a = S-m_2g$<em>Axis positive upwards for $m_2$; same $a$ (rope inextensible).</em></li>
<li>$(m_1+m_2)a = (m_1-m_2)g$<em>Adding: the rope force cancels (internal force of the system).</em></li>
<li>$a = g\dfrac{m_1-m_2}{m_1+m_2}$<em>Solve.</em></li>
<li>$S = m_2(g+a) = m_2g\dfrac{2m_1}{m_1+m_2}$<em>Substitute into the equation for $m_2$.</em></li>
</ol>`,
    example: R`Atwood with $m_1 = 3\,\text{kg}$, $m_2 = 2\,\text{kg}$: $a = 1{,}96\,\text{m/s}^2$, $S = 23{,}5\,\text{N}$ (between $19{,}6$ and $29{,}4\,\text{N}$ ✓).<br>
Table: $m_1 = 4\,\text{kg}$, $\mu = 0{,}2$, $m_2 = 1\,\text{kg}$: $a = \frac{1-0{,}8}{5}g = 0{,}39\,\text{m/s}^2$, $S = 9{,}4\,\text{N}$.`,
    counterexample: R`<b>“The rope force equals the weight of the hanging mass”:</b> this holds only if nothing accelerates. As soon as the system moves, $S\neq m_2g$. Likewise, with a massive pulley the rope force differs on the two sides; the difference supplies the torque for the pulley.`,
    pitfalls: R`<ul><li>Assuming different magnitudes of acceleration for the two masses.</li>
<li>Not agreeing the sign convention between the bodies.</li>
<li>Confusing sliding and static friction: whether motion starts is decided by $\mu_0$; how fast it moves by $\mu$.</li></ul>`
  },
  "ph3_kreisbewegung_dynamik": {
    title: "Circular motion as a dynamics problem: cornering, banked curve, conical pendulum",
    category: R`3.9 Applications: contact forces`,
    type: "beispiel",
    front: R`Which force supplies the required <b>centripetal force</b> $m\frac{v^2}r$ in each case? Calculate (a) the maximum speed on a flat curve with static friction $\mu_0$, (b) the banking angle at which a curve can be taken without friction, (c) the angular velocity of a <b>conical pendulum</b> (string $\ell$, angle $\theta$ to the vertical).`,
    back: R`The centripetal force is <b>not a force of its own</b>, but the sum of the real forces in the direction of the centre of the circle: $\sum F_\text{radial} = m\frac{v^2}r = m\omega^2r$ (cf. 2.5.3, 3.4).<br><br>
<b>(a) Flat curve:</b> static friction supplies it: $m\frac{v^2}r\le\mu_0mg$
$$v_\text{max} = \sqrt{\mu_0gr}$$
<b>(b) Banked curve without friction</b> (angle $\theta$): the normal force has a horizontal component: $N\sin\theta = m\frac{v^2}r$, $N\cos\theta = mg$:
$$\tan\theta = \frac{v^2}{rg}$$
<b>(c) Conical pendulum:</b> string force $F$: $F\cos\theta = mg$, $F\sin\theta = m\omega^2\ell\sin\theta$ (radius $r = \ell\sin\theta$):
$$\omega^2 = \frac g{\ell\cos\theta},\qquad F = \frac{mg}{\cos\theta}$$`,
    meta: "Supplement (typical exam problem); builds on Sections 2.5.3 (centripetal acceleration), 3.4 (Newton II) and 3.9.4 (static friction)",
    explanation: R`<b>Intuition:</b> To stay on a circular path a body needs a force that is continually directed towards the centre. Depending on the situation this is supplied by the friction of the tyres, the banked road, a string or gravitation. A “centrifugal force” exists only in the co-rotating (non-inertial) system (3.11).<br><br>
<b>Dependencies:</b> $v_\text{max}\propto\sqrt{r}$ and $\propto\sqrt{\mu_0}$ – independent of the mass. Half the curve radius: only $71\,\%$ of the speed. On wet roads ($\mu_0$ halved) likewise only $71\,\%$.<br><br>
<b>Banking:</b> for exactly one speed no friction at all is needed; faster, one slides outwards, slower, inwards. Velodromes and motorway bends are built this way.<br><br>
<b>Conical pendulum:</b> for $\theta\to0$, $\omega^2\to g/\ell$: the same frequency as the plane pendulum (the projection is a harmonic oscillation, 9.2.3).<br><br>
<b>Connection:</b> loop-the-loop (4.5.2): at the highest point $v\ge\sqrt{gR}$; satellite orbit (gravitation as centripetal force, 7.2).`,
    derivation: R`Conical pendulum step by step:
<ol class="fc-steps">
<li>Forces: weight $mg$ downwards, string force $F$ along the string<em>Free-body diagram; no “centrifugal force” in the inertial frame.</em></li>
<li>vertical: $F\cos\theta-mg = 0$<em>No vertical acceleration.</em></li>
<li>horizontal: $F\sin\theta = m\omega^2r$, $r = \ell\sin\theta$<em>The horizontal component is the centripetal force.</em></li>
<li>$\dfrac{mg}{\cos\theta}\sin\theta = m\omega^2\ell\sin\theta$<em>$F$ substituted.</em></li>
<li>$\omega^2 = \dfrac g{\ell\cos\theta}$, $T = 2\pi\sqrt{\dfrac{\ell\cos\theta}g}$<em>$\sin\theta$ cancels; period of revolution.</em></li>
</ol>`,
    example: R`(a) $r = 50\,\text{m}$, $\mu_0 = 0{,}8$: $v_\text{max} = 19{,}8\,\text{m/s} = 71\,\text{km/h}$.<br>
(b) $v = 25\,\text{m/s}$, $r = 100\,\text{m}$: $\tan\theta = 0{,}64$, $\theta = 32{,}5^\circ$.<br>
(c) $\ell = 1\,\text{m}$, $\theta = 30^\circ$: $\omega = 3{,}37\,\text{s}^{-1}$, $T = 1{,}87\,\text{s}$, string force $1{,}15\,mg$.`,
    counterexample: R`<b>“In a curve you are pressed outwards”:</b> in the inertial frame no force acts outwards; the body wants to continue straight on (inertia), and the seat pushes it inwards. Whoever adds a centrifugal force in the inertial-frame calculation counts twice and gets zero net force – that is, no circular motion at all.`,
    pitfalls: R`<ul><li>Drawing the centripetal force as an additional force in the free-body diagram.</li>
<li>In the conical pendulum using the string length $\ell$ instead of the orbit radius $\ell\sin\theta$.</li>
<li>Setting $N = mg\cos\theta$ for the banked curve (this holds for the inclined plane without circular motion, not here).</li></ul>`
  },
  "ph3_federn_kombination": {
    title: "Springs in series and in parallel: effective spring constant",
    category: R`3.9 Applications: contact forces`,
    type: "herleitung",
    front: R`Two springs $k_1$, $k_2$ are connected (a) in <b>parallel</b> and (b) in <b>series</b>. Derive the effective spring constants. How does the oscillation frequency of an attached mass change? What happens when a spring is halved?`,
    back: R`<b>(a) Parallel:</b> same extension $x$, forces add:
$$F = k_1x+k_2x\;\Rightarrow\;k_\parallel = k_1+k_2$$
<b>(b) Series:</b> same force $F$ in both springs, extensions add:
$$x = \frac F{k_1}+\frac F{k_2}\;\Rightarrow\;\frac1{k_\text{R}} = \frac1{k_1}+\frac1{k_2},\qquad k_\text{R} = \frac{k_1k_2}{k_1+k_2}$$
Spring pendulum: $\omega = \sqrt{k_\text{eff}/m}$ (3.9.3).<br>
<b>Halved spring:</b> a spring $k$ is a series connection of two halves $k'$: $\frac1k = \frac2{k'}\Rightarrow k' = 2k$. Shorter springs are stiffer.`,
    meta: "Supplement (typical exam problem); builds on Section 3.9.3 (Hooke, spring pendulum)",
    explanation: R`<b>Intuition:</b> Springs connected in parallel share the load – the system is stiffer. Springs connected in series both stretch – the system is softer. Mnemonic: exactly the reverse of electrical resistors (parallel: add reciprocals), but like capacitors.<br><br>
<b>Dependencies:</b> two identical springs in parallel: $2k$, $\omega\times\sqrt2$. In series: $k/2$, $\omega/\sqrt2$. The weaker spring dominates the series connection ($k_\text{R}\lt\min(k_1,k_2)$).<br><br>
<b>Spring constant and length:</b> $k\propto1/L$ for the same material and cross-section. This is why in the oscillator chain (waves) the quantity $ka$ (spring constant times spacing) is a material constant.<br><br>
<b>Connection:</b> coupled pendulums (9.7.1): a spring between two pendulums acts like two springs of $2k$ each from the middle – hence $\omega_1^2 = \omega_0^2+2k/m$. Analogously in the LC circuit: capacitors in series/parallel ($1/C\leftrightarrow k$, Tab. 9.1).`,
    derivation: R`Series connection step by step:
<ol class="fc-steps">
<li>Massless springs: force in both equal to $F$<em>Free-body diagram of the connection point: $F_1 = F_2$ (Newton III, massless).</em></li>
<li>$x_1 = F/k_1$, $x_2 = F/k_2$<em>Hooke for each spring.</em></li>
<li>$x = x_1+x_2 = F\left(\dfrac1{k_1}+\dfrac1{k_2}\right)$<em>Total extension.</em></li>
<li>$k_\text{R} = \dfrac Fx = \left(\dfrac1{k_1}+\dfrac1{k_2}\right)^{-1}$<em>Definition of the effective spring constant.</em></li>
<li>Parallel: $x$ the same, $F = F_1+F_2 = (k_1+k_2)x$<em>The counterpart.</em></li>
</ol>`,
    example: R`$k_1 = 100\,\text{N/m}$, $k_2 = 300\,\text{N/m}$: parallel $400$, in series $75\,\text{N/m}$. With $m = 1\,\text{kg}$: $\omega = 20$ and $8{,}66\,\text{s}^{-1}$ respectively.<br>
A mass between two springs (fixed to walls on the left and right): both pull back in the same direction on displacement – that is a <i>parallel</i> connection, $k_\text{eff} = k_1+k_2$.`,
    counterexample: R`<b>Geometry deceives:</b> a mass between two springs hanging one behind the other from opposite walls looks like “in series”, but is parallel (same displacement, forces add). What matters is whether the springs have the same extension or the same force – not how they are drawn.`,
    pitfalls: R`<ul><li>Confusing the formulas with those for electrical resistors.</li>
<li>Judging the circuit by its picture rather than by force/extension.</li>
<li>Using the simple formulas for springs with mass.</li></ul>`
  }
};
})();
