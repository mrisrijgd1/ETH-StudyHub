/* ==========================================================================
   PHYSICS I – CHAPTER 6 (English): Many-particle systems
   Centre-of-mass theorem, laboratory and centre-of-mass frames, decomposition of momentum, energy,
   angular momentum, conservation laws, two-particle system (reduced mass), particle collisions
   Script Physics I – Prof. K. Ensslin, ETH Zurich, HS 2025
   English translation of data_kapitel6.js. Formulas, HTML and ids are identical.
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_EN_KAPITEL_6 = {
  "ph6_schwerpunktsatz": {
    title: R`Centre-of-mass theorem: M r̈_S = F_ext`,
    category: R`6.2 Centre-of-mass theorem`,
    type: "herleitung",
    front: R`Derive the <b>centre-of-mass theorem</b> $m_\text{tot}\ddot{\vec r}_S = \vec F_\text{ext}$ for a system of $N$ point masses. Why do the internal forces drop out?`,
    back: R`Equation of motion of the $i$-th particle: internal forces of the other $N-1$ particles plus the external force:
$$m_i\ddot{\vec r}_i = \sum_{k\neq i}\vec F_{ik} + \vec F_{\text{ext},i}\qquad(6.1)$$
Sum over all particles:
$$\sum_i m_i\ddot{\vec r}_i = \underbrace{\sum_i\sum_{k\neq i}\vec F_{ik}}_{=\vec 0} + \underbrace{\sum_i\vec F_{\text{ext},i}}_{=:\vec F_\text{ext}}\qquad(6.2)$$
The double sum vanishes because, by Newton III, every force $\vec F_{ik}$ comes with a counterforce $\vec F_{ki} = -\vec F_{ik}$. With $m_\text{tot} = \sum m_i$ (6.5) and the <b>centre of mass</b>
$$\vec r_S := \frac{\sum_i m_i\vec r_i}{\sum_i m_i}\qquad(6.7)$$
it follows that
$$m_\text{tot}\frac{d^2\vec r_S}{dt^2} = \vec F_\text{ext}\qquad(6.9)$$
The centre of mass moves like a point mass with the total mass, on which the sum of all external forces acts.`,
    meta: R`Script: section 6.2, Eqs. (6.1)–(6.9), Figs. 6.1–6.2, pp. 135–137`,
    explanation: R`<b>Intuition:</b> However complicated the parts of a system interact (explosion, collisions, springs, muscles), the internal forces cannot move the centre of mass. Only external forces can.<br><br>
<b>Consequences:</b>
<ul><li>A firework explodes in the air: the centre of mass of the fragments continues on the original trajectory (until the first piece lands).</li>
<li>A person cannot move from the spot in weightlessness by "flailing"; their centre of mass stays put.</li>
<li>For $\vec F_\text{ext} = \vec 0$, $\vec v_S$ is constant: total momentum is conserved.</li></ul>
<b>Justification of the point-mass model:</b> The theorem explains why one may treat extended bodies as a point mass for translation (Ch. 2.2). It says nothing about rotation or deformation.<br><br>
<b>Connection:</b> With $\vec p_\text{tot} = m_\text{tot}\vec v_S$ it reads $\dot{\vec p}_\text{tot} = \vec F_\text{ext}$ (6.39), the generalisation of Newton II.`,
    derivation: R`<ol class="fc-steps">
<li>$m_i\ddot{\vec r}_i = \sum_{k\neq i}\vec F_{ik} + \vec F_{\text{ext},i}$<em>Newton II for particle $i$ (6.1).</em></li>
<li>$\sum_i\sum_{k\neq i}\vec F_{ik} = \sum_{i\lt k}(\vec F_{ik}+\vec F_{ki}) = \vec 0$<em>Combine the double sum pairwise; Newton III (6.2).</em></li>
<li>$\sum_im_i\ddot{\vec r}_i = \dfrac{d^2}{dt^2}\sum_im_i\vec r_i$<em>Constant masses: derivative and sum can be interchanged (6.3, 6.4).</em></li>
<li>$\sum_im_i\vec r_i = m_\text{tot}\vec r_S$<em>Insert the definition of the centre of mass (6.7).</em></li>
<li>$m_\text{tot}\ddot{\vec r}_S = \vec F_\text{ext}$<em>Result (6.6, 6.9).</em></li>
</ol>`,
    example: R`<b>Boat and person:</b> A person ($70\,\text{kg}$) walks $3\,\text{m}$ forward in a boat at rest ($140\,\text{kg}$, frictionless on the water). The centre of mass stays at rest: $70\cdot\Delta x_P + 140\cdot\Delta x_B = 0$ and $\Delta x_P - \Delta x_B = 3\,\text{m}$, so $\Delta x_B = -1\,\text{m}$ and $\Delta x_P = +2\,\text{m}$ relative to the shore.`,
    counterexample: R`<b>Internal forces certainly move the parts:</b> The centre-of-mass theorem says nothing about how the individual particles move relative to each other. A cat that turns over while falling does not violate the theorem: its centre of mass falls on the parabola, while it changes its orientation with internal forces (and no external torque, with $L = 0$).`,
    pitfalls: R`<ul><li>Counting internal forces in $\vec F_\text{ext}$.</li>
<li>Assuming the centre of mass always lies inside a particle (for a ring it lies in the empty centre).</li>
<li>Using the centre-of-mass theorem for rotation; that needs the angular momentum theorem.</li></ul>`
  },
  "ph6_schwerpunkt_def": {
    title: R`Centre-of-mass system, Σ mᵢrᵢ* = 0 and the centre of mass in a gravity field`,
    category: R`6.2 Centre-of-mass theorem`,
    type: "definition",
    front: R`What is the <b>centre-of-mass system</b>? Show $\sum_im_i\vec r_i^{\,*} = \vec 0$, and deduce that gravity exerts <b>no torque</b> about the centre of mass. When are the centre of mass and the centre of gravity identical?`,
    back: R`$\vec r_S$ is the mass-weighted mean of the position vectors; the weight of particle $k$ is $\frac{m_k}{m_\text{tot}}$ (6.8). <b>Centre-of-mass system</b>: a reference frame with its origin at the centre of mass:
$$\vec r_i = \vec r_S + \vec r_i^{\,*}\qquad(6.10)$$
Insert into the definition:
$$\vec r_S = \frac1{m_\text{tot}}\sum m_i(\vec r_S+\vec r_i^{\,*}) = \vec r_S + \frac1{m_\text{tot}}\sum m_i\vec r_i^{\,*}\;\Rightarrow\;\sum_im_i\vec r_i^{\,*} = \vec 0\qquad(6.11\text{–}6.14)$$
<b>Torque of gravity</b> about $S$ (homogeneous $\vec g$):
$$\sum_i\vec M_i = \sum_i\vec r_i^{\,*}\times m_i\vec g = \Big(\sum_im_i\vec r_i^{\,*}\Big)\times\vec g = \vec 0\qquad(6.15\text{–}6.17)$$
So one finds the centre of gravity by changing the suspension point until gravity exerts no torque any more. The centre of mass and the centre of gravity are identical if $\vec g$ is the same for all mass points.`,
    meta: R`Script: sections 6.2–6.3, Eqs. (6.7)–(6.17), Fig. 6.3, pp. 137–139 (footnote 1)`,
    explanation: R`<b>Intuition:</b> The centre of mass is the "balance point". If you support a body exactly there, it tips in no direction, because the torques of all parts about this point cancel ($\sum m_i\vec r_i^{\,*} = \vec 0$ means: on average just as much mass lies to the left as to the right).<br><br>
<b>Experimental determination:</b> Hang a body from two points in turn and draw the plumb line each time. The intersection is the centre of gravity, because in equilibrium it always lies vertically below the suspension point.<br><br>
<b>Centre of mass vs. centre of gravity:</b> Conceptually the centre of mass is defined purely by the mass distribution, the centre of gravity by gravity. In a homogeneous field they coincide; for very large bodies (e.g. a long satellite in the Earth's field) not exactly, which is why tidal forces arise.<br><br>
<b>Connection:</b> Statics (Ch. 8.4): one may let the weight of a rigid body act at its centre of mass. For continuous bodies: $\vec r_S = \frac1M\int\vec r\,dm$ (Ch. 8.2).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec r_i = \vec r_S + \vec r_i^{\,*}$<em>Split the position vector into the position of the centre of mass plus the position relative to it (6.10).</em></li>
<li>$m_\text{tot}\vec r_S = \sum m_i\vec r_i = \sum m_i\vec r_S + \sum m_i\vec r_i^{\,*}$<em>Insert into the definition (6.7) (6.11, 6.12).</em></li>
<li>$\sum m_i\vec r_S = m_\text{tot}\vec r_S$<em>$\vec r_S$ does not depend on $i$.</em></li>
<li>$\sum m_i\vec r_i^{\,*} = \vec 0$<em>Compare both sides (6.14): in the centre-of-mass system the centre of mass lies at the origin.</em></li>
<li>$\sum\vec r_i^{\,*}\times m_i\vec g = \left(\sum m_i\vec r_i^{\,*}\right)\times\vec g = \vec 0$<em>Factor out the constant $\vec g$ (6.16, 6.17).</em></li>
</ol>`,
    example: R`<b>Three masses</b> (Fig. 6.3): $2m$ at $(0,2)$, $m$ at $(-1,0)$, $m$ at $(1,0)$: $\vec r_S = \frac{2m(0,2)+m(-1,0)+m(1,0)}{4m} = (0;\ 1)$.<br>
Check: $\vec r^{\,*}$: $(0,1)$, $(-1,-1)$, $(1,-1)$; $2m(0,1)+m(-1,-1)+m(1,-1) = (0,0)$ ✓.<br><br>
<b>Dumbbell</b> $m_1 = 1\,\text{kg}$, $m_2 = 3\,\text{kg}$, distance $1\,\text{m}$: the centre of mass is $0{,}75\,\text{m}$ from $m_1$, i.e. closer to the heavy mass.`,
    counterexample: R`<b>Inhomogeneous field:</b> A long, vertically aligned satellite in Earth orbit: the lower end is attracted more strongly than the upper one. The point of application of the resulting gravitational force (the centre of gravity) lies slightly below the centre of mass, and a torque arises as soon as the satellite is tilted (gravity-gradient stabilisation).`,
    pitfalls: R`<ul><li>Averaging without weights (geometric middle instead of the mass-weighted mean).</li>
<li>Writing $\sum\vec r_i^{\,*} = \vec 0$ instead of $\sum m_i\vec r_i^{\,*} = \vec 0$.</li>
<li>Assuming the centre of mass must lie inside the body (horseshoe, ring, high jumper).</li></ul>`
  },

  // ========================================================================
  // 6.4 LINEAR AND ROTATIONAL MOTION
  // ========================================================================
  "ph6_impuls_zerlegung": {
    title: R`Velocity and momentum in the laboratory and centre-of-mass frames: Σ pᵢ* = 0`,
    category: R`6.4 Linear and rotational motion`,
    type: "gesetz",
    front: R`How are the velocity and momentum of a particle in the <b>laboratory frame</b> related to those in the <b>centre-of-mass frame</b>? Show that the sum of the momenta vanishes in the centre-of-mass frame.`,
    back: R`$$\vec v_i = \frac{d\vec r_i}{dt} = \frac{d\vec r_S}{dt}+\frac{d\vec r_i^{\,*}}{dt} = \vec v_S + \vec v_i^{\,*}\qquad(6.18,\,6.19)$$
$$\vec p_i = m_i\vec v_i = m_i\vec v_S + \vec p_i^{\,*}\qquad(6.20,\,6.21)$$
Differentiating $\sum m_i\vec r_i^{\,*} = \vec 0$ (6.14):
$$\vec 0 = \frac{d}{dt}\sum m_i\vec r_i^{\,*} = \sum m_i\vec v_i^{\,*}\quad\Rightarrow\quad\sum_i\vec p_i^{\,*} = \vec 0\qquad(6.22,\,6.23)$$
This is often used as the <b>definition of the centre-of-mass system</b>: the system in which the total momentum is zero. In the laboratory frame $\vec p_\text{tot} = \sum\vec p_i = m_\text{tot}\vec v_S$.`,
    meta: R`Script: sections 6.4.1–6.4.2, Eqs. (6.18)–(6.23), pp. 139–140`,
    explanation: R`<b>Intuition:</b> Any motion of a system of particles is made up of two parts: the common "travelling along" with the centre of mass ($\vec v_S$) and the motion relative to the centre of mass ($\vec v_i^{\,*}$). In the centre-of-mass frame you see only the latter, and there all momenta cancel.<br><br>
<b>Why is this so useful?</b> In collisions and decays everything is symmetric in the centre-of-mass frame: two particles always have equal and opposite momenta. One calculates there and transforms back at the end (6.8).<br><br>
<b>Is the centre-of-mass frame an inertial frame?</b> Yes, if no external forces act ($\vec v_S = \text{const}$). With external forces it is accelerated, and in principle one needs inertial forces. For the angular momentum theorem one may nevertheless always take the centre of mass as reference point (6.4.5).<br><br>
<b>Connection:</b> The decomposition $\vec v_i = \vec v_S + \vec v_i^{\,*}$ is a Galilean transformation with $\vec u = \vec v_S$ (Ch. 3.5).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec r_i = \vec r_S + \vec r_i^{\,*}$<em>Decomposition of the position vector (6.10).</em></li>
<li>$\vec v_i = \vec v_S + \vec v_i^{\,*}$<em>Differentiate with respect to time (6.18).</em></li>
<li>$\vec p_i = m_i\vec v_S + m_i\vec v_i^{\,*} = m_i\vec v_S + \vec p_i^{\,*}$<em>Multiply by $m_i$ (6.20, 6.21).</em></li>
<li>$\sum m_i\vec r_i^{\,*} = \vec 0$ for all $t$ $\Rightarrow$ $\sum m_i\vec v_i^{\,*} = \vec 0$<em>A quantity that is always zero has zero time derivative (6.22).</em></li>
<li>$\sum\vec p_i = m_\text{tot}\vec v_S + \sum\vec p_i^{\,*} = m_\text{tot}\vec v_S$<em>Sum of the laboratory momenta: the relative part drops out.</em></li>
</ol>`,
    example: R`Two particles: $m_1 = 1\,\text{kg}$ with $v_1 = 4\,\text{m/s}$, $m_2 = 3\,\text{kg}$ at rest (1D).<br>
$v_S = \frac{4}{4}\,\text{m/s} = 1\,\text{m/s}$; $v_1^* = 3\,\text{m/s}$, $v_2^* = -1\,\text{m/s}$; $p_1^* = 3$, $p_2^* = -3\,\text{kg m/s}$, sum zero ✓.<br>
In the centre-of-mass frame the two approach each other with equal and opposite momenta, like two equally strong opponents.`,
    counterexample: R`<b>Velocities do not sum to zero:</b> In the example $v_1^*+v_2^* = 2\,\text{m/s}\neq0$. Only the <i>mass-weighted</i> sum vanishes. Whoever expects equal speeds in the centre-of-mass frame is right only for equal masses.`,
    pitfalls: R`<ul><li>Assuming $\sum\vec v_i^{\,*} = \vec 0$ instead of $\sum m_i\vec v_i^{\,*} = \vec 0$.</li>
<li>Forgetting $\vec v_S$ when transforming back.</li>
<li>Mixing momenta from the laboratory frame and the centre-of-mass frame in the same balance.</li></ul>`
  },
  "ph6_energie_zerlegung": {
    title: R`Kinetic energy: T = Σ pᵢ*²/2mᵢ + ½ M v_S²`,
    category: R`6.4 Linear and rotational motion`,
    type: "herleitung",
    front: R`Show that the kinetic energy of an $N$-particle system in the laboratory frame splits into the <b>internal</b> kinetic energy (in the centre-of-mass frame) and the kinetic energy of the <b>centre of mass</b>. Why does the cross term vanish?`,
    back: R`$$T = \sum_i\frac{p_i^2}{2m_i} = \sum_i\frac{1}{2m_i}\{\vec p_i^{\,*}+m_i\vec v_S\}^2\qquad(6.24,\,6.25)$$
$$= \sum_i\frac{p_i^{*2}}{2m_i} + \underbrace{\Big(\sum_i\vec p_i^{\,*}\Big)}_{=\vec 0}\cdot\vec v_S + \tfrac12v_S^2\underbrace{\sum_im_i}_{=m_\text{tot}}\qquad(6.26,\,6.27)$$
$$T = \sum_i\frac{p_i^{*2}}{2m_i} + \tfrac12m_\text{tot}v_S^2\qquad(6.28)$$
The total kinetic energy is the sum of the individual energies in the centre-of-mass frame plus the kinetic energy of the centre of mass (measured in the laboratory frame). Even a system whose centre of mass is at rest can have kinetic energy; for an ideal gas this internal kinetic energy is related to the <b>temperature</b>.`,
    meta: R`Script: section 6.4.3, Eqs. (6.24)–(6.28), p. 140`,
    explanation: R`<b>Intuition:</b> A ball that flies and spins at the same time has two "energy accounts": the motion as a whole ($\tfrac12Mv_S^2$) and the motion of the parts relative to the centre of mass (here: the rotation). There are no mixed terms, because the relative momenta sum to zero in the centre-of-mass frame.<br><br>
<b>Important consequences:</b>
<ul><li>In a collision at most the internal energy $T^*$ can be turned into heat or deformation. $\tfrac12Mv_S^2$ remains necessarily conserved by conservation of momentum. So in a completely inelastic collision not all of the energy can be lost.</li>
<li>Particle accelerators: when a target at rest is bombarded, only $T^*$ is available for creating new particles. That is why one builds colliders with beams running towards each other ($v_S = 0$).</li></ul>
<b>Connection:</b> For rigid bodies $T^* = \tfrac12I_S\omega^2$ (rotational energy about the centre of mass, Ch. 8/13), for gases $T^* = \tfrac32Nk_BT$ (Ch. 10, 14).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec p_i = \vec p_i^{\,*}+m_i\vec v_S$<em>Laboratory momentum from (6.21).</em></li>
<li>$\dfrac{p_i^2}{2m_i} = \dfrac{p_i^{*2}}{2m_i} + \vec p_i^{\,*}\cdot\vec v_S + \tfrac12m_iv_S^2$<em>Expand the square and divide by $2m_i$ (6.26).</em></li>
<li>$\sum_i\vec p_i^{\,*}\cdot\vec v_S = \left(\sum_i\vec p_i^{\,*}\right)\cdot\vec v_S = 0$<em>$\vec v_S$ is the same for all particles; the sum of the centre-of-mass momenta is zero (6.23).</em></li>
<li>$\sum_i\tfrac12m_iv_S^2 = \tfrac12m_\text{tot}v_S^2$<em>Total mass.</em></li>
<li>$T = T^* + \tfrac12m_\text{tot}v_S^2$<em>Result (6.28).</em></li>
</ol>`,
    example: R`As above: $m_1 = 1\,\text{kg}$ with $4\,\text{m/s}$ hits $m_2 = 3\,\text{kg}$ (at rest).<br>
Laboratory: $T = \tfrac12\cdot1\cdot16 = 8\,\text{J}$.<br>
Split: $T^* = \frac{3^2}{2\cdot1}+\frac{3^2}{2\cdot3} = 4{,}5+1{,}5 = 6\,\text{J}$, centre of mass: $\tfrac12\cdot4\cdot1^2 = 2\,\text{J}$. Sum $8\,\text{J}$ ✓.<br>
If they stick together, at most the $6\,\text{J}$ is lost; $2\,\text{J}$ remains as the motion of the combined body.`,
    counterexample: R`<b>Choosing the reference point freely:</b> If you split with respect to a point that is not the centre of mass, the cross term in general does <i>not</i> vanish. The clean split into "internal" and "external" energy exists only with respect to the centre of mass.`,
    pitfalls: R`<ul><li>Assuming in inelastic collisions that all the kinetic energy can be lost.</li>
<li>Mishandling the cross term $\sum\vec p_i^{\,*}\cdot\vec v_S$.</li>
<li>Adding $T$ as a vector, like momentum.</li></ul>`
  },
  "ph6_drehimpuls_zerlegung": {
    title: R`Angular momentum: L = L* + L_S (spin and orbital angular momentum)`,
    category: R`6.4 Linear and rotational motion`,
    type: "herleitung",
    front: R`Decompose the total angular momentum of a particle system (laboratory frame) into an <b>orbital angular momentum</b> of the centre of mass and an <b>intrinsic angular momentum</b> (spin). Which cross terms vanish, and why?`,
    back: R`$$\vec L = \sum_i\vec r_i\times\vec p_i = \sum_i(\vec r_S+\vec r_i^{\,*})\times(m_i\vec v_S+\vec p_i^{\,*})\qquad(6.29,\,6.30)$$
$$= \underbrace{\vec r_S\times(m_\text{tot}\vec v_S)}_{=:\vec L_S} + \vec r_S\times\underbrace{\sum_i\vec p_i^{\,*}}_{=\vec 0} + \underbrace{\Big(\sum_im_i\vec r_i^{\,*}\Big)}_{=\vec 0}\times\vec v_S + \underbrace{\sum_i\vec r_i^{\,*}\times\vec p_i^{\,*}}_{=:\vec L^*}\qquad(6.31,\,6.32)$$
$$\vec L = \vec L^* + \vec L_S\qquad(6.33)$$
<ul><li>$\vec L^*$: <b>intrinsic angular momentum</b> or spin, the angular momentum about the centre of mass, independent of the origin.</li>
<li>$\vec L_S$: <b>orbital angular momentum</b> of the centre of mass in the laboratory frame, depends on the origin.</li></ul>`,
    meta: R`Script: section 6.4.4, Eqs. (6.29)–(6.33), p. 141`,
    explanation: R`<b>Intuition:</b> The Earth has two angular momenta: one because it orbits the Sun (orbit), and one because it rotates about its own axis (spin). The decomposition shows that these separate cleanly, just like the kinetic energy in 6.4.3.<br><br>
<b>Why do the cross terms vanish?</b> Each contains one of the two centre-of-mass conditions: $\sum\vec p_i^{\,*} = \vec 0$ or $\sum m_i\vec r_i^{\,*} = \vec 0$.<br><br>
<b>Independence of the origin:</b> If you shift the laboratory origin, only $\vec L_S$ changes. $\vec L^*$ is a genuine property of the system (like its mass), hence the name intrinsic angular momentum.<br><br>
<b>Connection:</b> In quantum mechanics "spin" is an intrinsic angular momentum of elementary particles with no classical counterpart, but the split into orbit plus spin is the same idea. For rigid bodies $\vec L^* = I_S\vec\omega$ (or with the inertia tensor, Ch. 8, 13).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec r_i\times\vec p_i = (\vec r_S+\vec r_i^{\,*})\times(m_i\vec v_S+\vec p_i^{\,*})$<em>Insert the decompositions (6.10) and (6.21) (6.30).</em></li>
<li>$= m_i\,\vec r_S\times\vec v_S + \vec r_S\times\vec p_i^{\,*} + m_i\,\vec r_i^{\,*}\times\vec v_S + \vec r_i^{\,*}\times\vec p_i^{\,*}$<em>Expand; four terms (6.31).</em></li>
<li>$\sum_im_i\,\vec r_S\times\vec v_S = \vec r_S\times(m_\text{tot}\vec v_S) = \vec L_S$<em>The first term summed: orbital angular momentum of a point mass $m_\text{tot}$ at the centre of mass.</em></li>
<li>$\sum_i\vec r_S\times\vec p_i^{\,*} = \vec r_S\times\sum_i\vec p_i^{\,*} = \vec 0$<em>Second term: the centre-of-mass momenta sum to zero (6.23).</em></li>
<li>$\sum_im_i\vec r_i^{\,*}\times\vec v_S = \Big(\sum_im_i\vec r_i^{\,*}\Big)\times\vec v_S = \vec 0$<em>Third term: (6.14).</em></li>
<li>$\vec L = \vec L_S + \vec L^*$<em>The fourth term remains as the intrinsic angular momentum (6.32, 6.33).</em></li>
</ol>`,
    example: R`<b>Earth:</b> orbital angular momentum about the Sun $L_S\approx2{,}7\cdot10^{40}\,\text{kg m}^2/\text{s}$; spin $L^* = I\omega\approx8{,}0\cdot10^{37}\,\text{kg}\,\text{m}^2\cdot7{,}29\cdot10^{-5}\,\text{s}^{-1}\approx5{,}9\cdot10^{33}\,\text{kg m}^2/\text{s}$, so about 4.6 million times smaller.<br><br>
<b>Rolling wheel</b> (radius $R$, mass $M$, origin on the ground): orbital part $L_S = MRv_S$, spin $L^* = I_S\,v_S/R$.`,
    counterexample: R`<b>Spin is not always "rotation about oneself" in the everyday sense:</b> Two masses that oscillate radially on a spring (without rotating) have $\vec L^* = \vec 0$, although their parts move relative to the centre of mass. Only the tangential part of the relative motion contributes to the intrinsic angular momentum.`,
    pitfalls: R`<ul><li>Assuming the total angular momentum does not depend on the origin; only $\vec L^*$ is independent of the origin.</li>
<li>Confusing the centre-of-mass conditions that remove the cross terms.</li>
<li>Calculating $\vec L_S$ about a different point from the orbit.</li></ul>`
  },
  "ph6_drallsatz_system": {
    title: R`Internal torques cancel: dL/dt = M_ext`,
    category: R`6.4 Linear and rotational motion`,
    type: "gesetz",
    front: R`Show that the <b>internal torques</b> of a particle system cancel in pairs. What is the angular momentum theorem for systems, and about which points may it be applied?`,
    back: R`Pair of forces $\vec F_{ik} = -\vec F_{ki}$; torques about the centre of mass:
$$\vec M_i^* = \vec r_i^{\,*}\times\vec F_{ik},\qquad\vec M_k^* = \vec r_k^{\,*}\times\vec F_{ki}\qquad(6.34,\,6.35)$$
$$\vec M^* = \vec M_i^*+\vec M_k^* = (\vec r_i^{\,*}-\vec r_k^{\,*})\times\vec F_{ik} = \vec 0\qquad(6.36)$$
because the force acts along the line joining the particles: $\vec F_{ik}\parallel(\vec r_i^{\,*}-\vec r_k^{\,*})$.<br><br>
<b>Angular momentum theorem for arbitrary systems:</b>
$$\dot{\vec L} = \vec M_\text{ext}\qquad(6.37),\qquad\vec M_\text{ext} = \vec 0\;\Rightarrow\;\vec L = \text{const}\qquad(6.38)$$
<b>Prerequisites:</b> $\vec L$ and $\vec M_\text{ext}$ must refer to the <b>same</b> point $O$; $O$ must be either a <b>point at rest in an inertial frame</b> or the <b>centre of mass</b>.`,
    meta: R`Script: section 6.4.5, Eqs. (6.34)–(6.38), Fig. 6.4, pp. 141–142`,
    explanation: R`<b>Intuition:</b> Two particles that attract or repel each other along their line of joining cannot "twist" each other: force and counterforce lie on the same line, their lever arms are equal, and their torques are opposite. So a system cannot change its total angular momentum through internal forces.<br><br>
<b>Examples:</b> A figure skater changes her angular velocity by moving her arms, but not her angular momentum. A helicopter needs a tail rotor, because otherwise the engine would turn the body against the main rotor (conservation of angular momentum of the whole system).<br><br>
<b>Why is the centre of mass allowed?</b> Even when it accelerates, the torque of the inertial force $-m_i\vec A$ about the centre of mass vanishes, for the same reason as that of gravity (6.17): $\sum m_i\vec r_i^{\,*}\times\vec A = \vec 0$.<br><br>
<b>Assumption:</b> "Strong" Newton III, i.e. the forces act along the line joining the particles (central forces). This holds for gravitation and electrostatics.`,
    derivation: R`<ol class="fc-steps">
<li>$\vec F_{ki} = -\vec F_{ik}$<em>Newton III.</em></li>
<li>$\vec M^* = \vec r_i^{\,*}\times\vec F_{ik} + \vec r_k^{\,*}\times(-\vec F_{ik}) = (\vec r_i^{\,*}-\vec r_k^{\,*})\times\vec F_{ik}$<em>Factor out the common $\vec F_{ik}$ (6.36).</em></li>
<li>$\vec F_{ik}\parallel(\vec r_i^{\,*}-\vec r_k^{\,*})\;\Rightarrow\;\vec M^* = \vec 0$<em>The force acts along the line of joining; the cross product of parallel vectors vanishes.</em></li>
<li>$\dot{\vec L} = \sum_i\vec r_i\times\vec F_i = \sum_i\vec r_i\times\vec F_{\text{ext},i} + \underbrace{\sum_{\text{Paare}}\vec M_{ik}}_{=\vec 0}$<em>Sum the angular momentum theorem over all particles; internal pairs drop out.</em></li>
<li>$\dot{\vec L} = \vec M_\text{ext}$<em>Only external torques change the total angular momentum (6.37, 6.41).</em></li>
</ol>`,
    example: R`<b>Swivel chair with dumbbells:</b> A person ($I = 2\,\text{kg m}^2$ without dumbbells) holds two dumbbells (each $2\,\text{kg}$) at $0{,}8\,\text{m}$ from the axis and rotates at $1\,\text{rev/s}$. $I_1 = 2+2\cdot2\cdot0{,}64 = 4{,}56\,\text{kg m}^2$. If she pulls the dumbbells in to $0{,}2\,\text{m}$: $I_2 = 2+2\cdot2\cdot0{,}04 = 2{,}16\,\text{kg m}^2$, so $\omega_2 = \omega_1I_1/I_2 = 2{,}1\,\text{rev/s}$.`,
    counterexample: R`<b>Arbitrary accelerated reference point:</b> If you take as reference point the hub of the wheel of a braking car (neither the centre of mass nor inertial), the inertial forces in general produce a torque, and $\dot{\vec L} = \vec M_\text{ext}$ does not hold there without correction.`,
    pitfalls: R`<ul><li>Computing $\vec L$ and $\vec M$ about different points.</li>
<li>Choosing as reference point an accelerated point that is not the centre of mass.</li>
<li>Stating internal torques (e.g. muscle force) as the cause of changes in $\vec L$.</li></ul>`
  },
  // 6.5 CONSERVATION LAWS FOR N-PARTICLE SYSTEMS
  "ph6_erhaltungssaetze": {
    title: R`The four conservation laws for N-particle systems`,
    category: R`6.5 Conservation laws for N-particle systems`,
    type: "gesetz",
    front: R`For an $N$-particle system, formulate the <b>centre-of-mass theorem</b>, the <b>momentum theorem</b> (also when the number of particles changes), the <b>angular momentum theorem</b> and the <b>mechanical energy theorem</b>. What epistemological status do they have?`,
    back: R`<b>Centre-of-mass theorem:</b> the centre of mass moves with constant momentum if the sum of the external forces vanishes:
$$\frac{d\vec p_S}{dt} = \sum_i\vec F_{\text{ext},i}\qquad(6.39)$$
<b>Momentum theorem:</b> in an interaction the sum of the momenta stays constant, even if the number of particles changes ($N_1$ before, $N_2$ after):
$$\sum_{i=1}^{N_1}\vec p_i = \sum_{i=1}^{N_2}\vec p_i\,'\qquad(6.40)$$
<b>Angular momentum theorem:</b> internal torques cancel; only external ones change $\vec L$:
$$\frac{d\vec L}{dt} = \sum_i\vec r_i\times\vec F_{\text{ext},i} = \vec M_\text{ext}\qquad(6.41)$$
<b>Mechanical energy theorem</b> (external and internal forces conservative):
$$E_\text{tot} = \sum_i\tfrac12m_iv_i^2 + U_\text{int} + U_\text{ext} = \sum_i\tfrac12m_iv_i'^2 + U'_\text{int} + U'_\text{ext}\qquad(6.42)$$
Status: conservation laws are <b>not provable</b>, but refutable by a single experiment. That has never happened.`,
    meta: R`Script: section 6.5, Eqs. (6.39)–(6.42), pp. 143–144`,
    explanation: R`<b>Intuition:</b> The conservation laws are the most powerful tools of mechanics: they make statements about the initial and final states without requiring knowledge of the (often unknown) forces during a process. Typical cases: collisions, explosions, decays.<br><br>
<b>Number of particles:</b> In the momentum theorem particles may be created or destroyed (decay, fusion, rocket), as long as you count <i>all</i> the particles involved.<br><br>
<b>Internal energy:</b> The energy theorem now also contains $U_\text{int}$, the interaction energy of the particles among themselves (a compressed spring between two carts, chemical bonds). If it is released, kinetic energy can arise (recoil experiment, explosion).<br><br>
<b>Symmetries:</b> momentum from homogeneity of space, angular momentum from isotropy, energy from homogeneity of time.<br><br>
<b>Connection:</b> Particle collisions (6.8) are the classic application: momentum and energy theorems together fix the kinematics.`,
    derivation: R`How to combine the theorems, using the recoil experiment (Ch. 3.1) with a compressed spring:
<ol class="fc-steps">
<li>$\vec p_A + \vec p_B = \vec 0$ (before and after)<em>Momentum theorem (6.40): both are at rest beforehand.</em></li>
<li>$U_\text{int} = \tfrac12kx^2 = \tfrac12m_Av_A^2 + \tfrac12m_Bv_B^2$<em>Energy theorem (6.42): the spring energy is fully converted into kinetic energy.</em></li>
<li>$v_B = \dfrac{m_A}{m_B}v_A$<em>From step 1 (magnitudes).</em></li>
<li>$\tfrac12kx^2 = \tfrac12m_Av_A^2\left(1+\dfrac{m_A}{m_B}\right)$<em>Insert into step 2.</em></li>
<li>$v_A = x\sqrt{\dfrac{k\,m_B}{m_A(m_A+m_B)}}$<em>Solve: both speeds are fixed by the conservation laws, without knowing how the relaxation proceeds.</em></li>
</ol>`,
    example: R`Recoil experiment: $k = 400\,\text{N/m}$, $x = 5\,\text{cm}$ ($U_\text{int} = 0{,}5\,\text{J}$), $m_A = 1\,\text{kg}$, $m_B = 2\,\text{kg}$:
$v_A = 0{,}05\sqrt{\frac{400\cdot2}{1\cdot3}}\,\text{m/s} = 0{,}816\,\text{m/s}$, $v_B = 0{,}408\,\text{m/s}$.<br>
Check: $\tfrac12\cdot1\cdot0{,}667+\tfrac12\cdot2\cdot0{,}167 = 0{,}333+0{,}167 = 0{,}5\,\text{J}$ ✓.`,
    counterexample: R`<b>Energy theorem with friction:</b> If the carts slide with friction, the momentum (system carts + Earth) stays conserved, but the mechanical energy does not. The mechanical energy theorem (6.42) presupposes conservative forces.`,
    pitfalls: R`<ul><li>Forgetting $U_\text{int}$ when springs, bonds or explosives are involved.</li>
<li>In the momentum theorem not counting newly created particles (e.g. the gas of a rocket).</li>
<li>Presenting the conservation laws as proven mathematical theorems; they are experimentally supported axioms.</li></ul>`
  },

  // ========================================================================
  // 6.6–6.7 TWO-PARTICLE SYSTEM, THREE-PARTICLE SYSTEM
  // ========================================================================
  "ph6_reduzierte_masse": {
    title: R`Two-particle system: relative coordinate and reduced mass μ`,
    category: R`6.6 Special case: two-particle system`,
    type: "herleitung",
    front: R`For two particles, express the positions, velocities and momenta in the centre-of-mass frame through the <b>relative coordinate</b> $\vec r_{12} = \vec r_1-\vec r_2$, and define the <b>reduced mass</b> $\mu$. Show $\vec p_1^{\,*} = \mu\vec v_{12} = -\vec p_2^{\,*}$.`,
    back: R`$$\vec r_S = \frac{m_1\vec r_1+m_2\vec r_2}{m_1+m_2},\qquad\vec r_1^{\,*} = \vec r_1-\vec r_S = \frac{m_2}{m_1+m_2}\underbrace{(\vec r_1-\vec r_2)}_{=:\vec r_{12}}\qquad(6.43\text{–}6.46)$$
$$\vec r_1^{\,*} = +\frac{m_2}{m_1+m_2}\vec r_{12},\qquad\vec r_2^{\,*} = -\frac{m_1}{m_1+m_2}\vec r_{12},\qquad m_1\vec r_1^{\,*}+m_2\vec r_2^{\,*} = \vec 0\qquad(6.47,\,6.48)$$
Differentiate with $\vec v_{12} := \dot{\vec r}_{12}$: $\vec v_1^{\,*} = +\frac{m_2}{m_1+m_2}\vec v_{12}$, $\vec v_2^{\,*} = -\frac{m_1}{m_1+m_2}\vec v_{12}$ (6.49, 6.50).<br><br>
<b>Reduced mass:</b>
$$\mu := \frac{m_1m_2}{m_1+m_2},\qquad\frac1\mu = \frac1{m_1}+\frac1{m_2}\qquad(6.52)$$
$$\vec p_1^{\,*} = +\mu\vec v_{12},\qquad\vec p_2^{\,*} = -\mu\vec v_{12},\qquad\vec p_1^{\,*}+\vec p_2^{\,*} = \vec 0\qquad(6.51\text{–}6.55)$$
(6.55) is precisely the definition of the centre-of-mass system.`,
    meta: R`Script: sections 6.6.1–6.6.3, Eqs. (6.43)–(6.55), pp. 144–145`,
    explanation: R`<b>Intuition:</b> In the centre-of-mass frame the two particles always lie on opposite sides of the centre of mass, on a straight line through it. Their distances are inversely proportional to the masses ($r_1^*/r_2^* = m_2/m_1$): the heavy mass stays close to the centre of mass, the light one makes the large movements. That is why a single vector quantity, $\vec r_{12}$, suffices to describe both.<br><br>
<b>Reduced mass:</b> $\mu$ is always smaller than the smaller of the two masses. If $m_2\gg m_1$, then $\mu\approx m_1$: the heavy particle is practically at rest, and one describes only the light one. For equal masses $\mu = m/2$.<br><br>
<b>Dependence:</b> $\frac1\mu = \frac1{m_1}+\frac1{m_2}$ is like the "parallel connection" of masses: the smaller one dominates.<br><br>
<b>Connection:</b> This is the basis for reducing the Kepler problem (Ch. 7) and the hydrogen atom to a one-particle problem (6.6.5–6.6.6).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec r_1^{\,*} = \vec r_1 - \dfrac{m_1\vec r_1+m_2\vec r_2}{m_1+m_2}$<em>Insert the definition of the centre of mass (6.45).</em></li>
<li>$= \dfrac{(m_1+m_2)\vec r_1 - m_1\vec r_1 - m_2\vec r_2}{m_1+m_2} = \dfrac{m_2(\vec r_1-\vec r_2)}{m_1+m_2}$<em>Common denominator; $m_1\vec r_1$ cancels (6.46).</em></li>
<li>$\vec r_2^{\,*} = -\dfrac{m_1}{m_1+m_2}\vec r_{12}$<em>Analogously with the roles swapped; the sign because $\vec r_2-\vec r_1 = -\vec r_{12}$ (6.47).</em></li>
<li>$\vec v_1^{\,*} = \dfrac{m_2}{m_1+m_2}\vec v_{12}$<em>Time derivative with constant masses (6.49).</em></li>
<li>$\vec p_1^{\,*} = m_1\vec v_1^{\,*} = \dfrac{m_1m_2}{m_1+m_2}\vec v_{12} = \mu\,\vec v_{12}$<em>Multiply by $m_1$; the combination is the reduced mass (6.51–6.53).</em></li>
<li>$\vec p_2^{\,*} = -\mu\vec v_{12}\;\Rightarrow\;\vec p_1^{\,*}+\vec p_2^{\,*} = \vec 0$<em>Analogously; sum zero (6.54, 6.55).</em></li>
</ol>`,
    example: R`<b>Earth–Moon:</b> $m_\text{Mo}\approx0{,}0123\,m_E$, so $\mu = \frac{m_Em_\text{Mo}}{m_E+m_\text{Mo}}\approx0{,}988\,m_\text{Mo}$. The Earth moves around the common centre of mass on a circle of $r_E = \frac{m_\text{Mo}}{m_E+m_\text{Mo}}R\approx0{,}012\cdot384\,400\,\text{km}\approx4700\,\text{km}$ (so still inside the Earth).<br><br>
<b>Equal masses</b> (binary star with two equal stars): $\mu = m/2$, both orbit the centre on circles of equal size.`,
    counterexample: R`<b>Three particles</b> (6.7): $m_i\ddot{\vec r}_i = \sum_{k\neq i}\vec F_{ik}+\vec F_{\text{ext},i}$ (6.69–6.71) form a coupled system that in general can <i>not</i> be reduced to a one-particle problem. The forces depend on all relative distances; usually only numerical solutions exist (three-body problem). The reduction with $\mu$ is a special feature of exactly two bodies.`,
    pitfalls: R`<ul><li>Writing $\mu = m_1+m_2$ or $\mu = \frac{m_1+m_2}{m_1m_2}$.</li>
<li>Confusing the signs of $\vec r_1^{\,*}$ and $\vec r_2^{\,*}$.</li>
<li>Believing the heavy particle is exactly at rest; it moves (a little) about the centre of mass.</li></ul>`
  },
  "ph6_relativbewegung": {
    title: R`Equation of motion of the relative motion: μ v̇₁₂ = F₁₂`,
    category: R`6.6 Special case: two-particle system`,
    type: "herleitung",
    front: R`From the equations of motion of both particles, derive $\mu\,\dot{\vec v}_{12} = \vec F_{12}$. Describe the four-step solution procedure for a two-particle system, and give $\vec L^*$ and $T^*$.`,
    back: R`$$m_1\frac{d\vec v_1}{dt} = \vec F_{12},\qquad m_2\frac{d\vec v_2}{dt} = \vec F_{21} = -\vec F_{12}\qquad(6.59,\,6.60)$$
Divide by the masses and subtract:
$$\frac{d}{dt}(\vec v_1-\vec v_2) = \left(\frac1{m_1}+\frac1{m_2}\right)\vec F_{12}\quad\Rightarrow\quad\mu\frac{d\vec v_{12}}{dt} = \vec F_{12}\qquad(6.61,\,6.62)$$
<b>Solution procedure:</b>
<ol><li>Centre of mass from the external forces: $(m_1+m_2)\dot{\vec v}_S = \vec F_\text{ext}$ (6.63).</li>
<li>Reduced system: $\vec r_{12}(t)$, $\vec v_{12}(t)$ from $\mu\dot{\vec v}_{12} = \vec F_{12}$.</li>
<li>From these compute $\vec r_i^{\,*}(t)$ and $\vec r_i(t)$.</li>
<li>Intrinsic angular momentum and internal kinetic energy:</li></ol>
$$\vec L^* = \vec r_{12}\times\mu\vec v_{12},\qquad T^* = \tfrac12\mu v_{12}^2 = \frac{p^{*2}}{2\mu}\qquad(6.64,\,6.65)$$
Transformation laboratory → centre-of-mass frame: $\vec p_1^{\,*} = -\vec p_2^{\,*} = \frac{m_2\vec p_1-m_1\vec p_2}{m_1+m_2}$ (6.56–6.58).`,
    meta: R`Script: sections 6.6.4–6.6.5, Eqs. (6.56)–(6.65), pp. 145–146`,
    explanation: R`<b>Intuition:</b> Two coupled equations become two <i>decoupled</i> ones: one for the centre of mass (a free point mass with $M = m_1+m_2$), and one for the relative motion (a fictitious particle of mass $\mu$ in the force field $\vec F_{12}(\vec r_{12})$). The two-body problem becomes two one-body problems.<br><br>
<b>Why $\mu$ rather than $m_1$?</b> The "centre" ($m_2$) is also accelerated. The relative acceleration is therefore larger than if $m_2$ were held fixed, as if the particle had the smaller mass $\mu$.<br><br>
<b>Energy and angular momentum:</b> $T^*$ and $\vec L^*$ have exactly the form of a one-particle system with mass $\mu$. All conservation laws of the one-particle problem (energy, angular momentum for a central force) hold for the relative motion.<br><br>
<b>Connection:</b> Ch. 7 solves the Kepler problem with this ($\vec F_{12} = -G_Nm_1m_2\hat r_{12}/r_{12}^2$); in atomic physics $\mu$ instead of $m_e$ makes the spectral lines measurably different (isotope effect hydrogen/deuterium).`,
    derivation: R`<ol class="fc-steps">
<li>$\dot{\vec v}_1 = \dfrac{\vec F_{12}}{m_1},\quad\dot{\vec v}_2 = -\dfrac{\vec F_{12}}{m_2}$<em>Newton II for both; Newton III for the counterforce.</em></li>
<li>$\dot{\vec v}_1-\dot{\vec v}_2 = \left(\dfrac1{m_1}+\dfrac1{m_2}\right)\vec F_{12}$<em>Subtract (6.61).</em></li>
<li>$\dfrac1{m_1}+\dfrac1{m_2} = \dfrac1\mu$<em>Definition of the reduced mass (6.52).</em></li>
<li>$\mu\dot{\vec v}_{12} = \vec F_{12}$<em>Multiply by $\mu$ (6.62).</em></li>
<li>$T^* = \dfrac{p_1^{*2}}{2m_1}+\dfrac{p_2^{*2}}{2m_2} = \dfrac{\mu^2v_{12}^2}{2}\left(\dfrac1{m_1}+\dfrac1{m_2}\right) = \tfrac12\mu v_{12}^2$<em>With $p_1^* = p_2^* = \mu v_{12}$ (6.65).</em></li>
</ol>`,
    example: R`<b>Two carts on a spring</b> ($m_1 = 1\,\text{kg}$, $m_2 = 2\,\text{kg}$, $k = 300\,\text{N/m}$): the relative coordinate oscillates with $\omega = \sqrt{k/\mu}$, $\mu = \frac23\,\text{kg}$, so $\omega = 21{,}2\,\text{s}^{-1}$, faster than $\sqrt{k/m_1} = 17{,}3\,\text{s}^{-1}$ (as if $m_2$ were fixed to the wall).<br><br>
<b>Transformation:</b> $\vec p_1 = (6,0)$, $\vec p_2 = (0,0)\,\text{kg m/s}$: $\vec p_1^{\,*} = \frac{2\cdot(6,0)-1\cdot0}{3} = (4,0)$, $\vec p_2^{\,*} = (-4,0)$.`,
    counterexample: R`<b>External forces that depend on the relative position</b> (e.g. a binary star in the inhomogeneous field of a galaxy): then centre-of-mass and relative motion couple again. The clean separation requires that $\vec F_\text{ext}$ acts on both particles such that $\vec F_\text{ext,1}/m_1 = \vec F_\text{ext,2}/m_2$ (e.g. a homogeneous gravitational field).`,
    pitfalls: R`<ul><li>Inserting $m_1$ instead of $\mu$ into the relative motion.</li>
<li>Confusing the transformation to the centre-of-mass frame for momenta and for velocities (for $\vec v_S$ one needs velocities, for conservation laws in the centre-of-mass frame momenta).</li>
<li>Forgetting to add the motion of the centre of mass again at the end.</li></ul>`
  },
  "ph6_beispiele_2teilchen": {
    title: R`Examples: Earth–Moon centre of mass and the hydrogen atom`,
    category: R`6.6 Special case: two-particle system`,
    type: "beispiel",
    front: R`Where is the <b>centre of mass of the Earth–Moon system</b>, and on what orbits do the two bodies move? How large is the reduced mass in the <b>hydrogen atom</b>, and how is its kinetic energy divided?`,
    back: R`<b>Earth–Moon:</b> the relative motion is a one-particle problem with $\mu = \frac{m_Em_\text{Mo}}{m_E+m_\text{Mo}}\approx0{,}99\,m_\text{Mo}$ in the central gravitational field. Because $m_\text{Mo}\approx0{,}01\,m_E$, the centre of mass lies about $4600\,\text{km}$ from the Earth's centre (script: 4552 km), i.e. still inside the Earth. Both move on almost circular ellipses around $S$, with
$$r_E = \frac{m_\text{Mo}}{m_E+m_\text{Mo}}R\approx0{,}01\,R,\qquad r_\text{Mo} = \frac{m_E}{m_E+m_\text{Mo}}R\approx0{,}99\,R\qquad(6.66,\,6.67)$$
($R$ = distance Earth–Moon).<br><br>
<b>Hydrogen atom:</b> $m_p = 1836\,m_e$, so $\mu = 0{,}99946\,m_e$. $S$ lies $r_{pe}/1837$ from the proton's centre.
$$T = \tfrac12(m_p+m_e)v_S^2 + \tfrac12\mu v_{pe}^2\qquad(6.68)$$
At thermal velocities the translational energy ($\approx0{,}03\,\text{eV}$) is very small compared with the internal kinetic energy ($\approx10\,\text{eV}$).`,
    meta: R`Script: section 6.6.6, Eqs. (6.66)–(6.68), Fig. 6.5, pp. 147–148`,
    explanation: R`<b>Intuition:</b> Every month the Earth too "wobbles" once around the common centre of mass with the Moon, on a circle of about 4600–4700 km radius. This point (the barycentre) runs along the actual ellipse around the Sun.<br><br>
<b>Proportionality:</b> The orbital radii about the centre of mass are inversely proportional to the masses: $r_E/r_\text{Mo} = m_\text{Mo}/m_E$. The same holds for the speeds (same orbital period).<br><br>
<b>Hydrogen:</b> Because the proton is 1836 times heavier, $\mu$ is only 0.054 % smaller than $m_e$. That is enough to make the spectral lines of hydrogen and deuterium (different $\mu$) distinguishable. That is how deuterium was discovered.<br><br>
<b>Energy scales:</b> The motion of the atom as a whole (thermal, $\sim\tfrac32k_BT\approx0{,}04\,\text{eV}$ at room temperature) and the internal motion (electron, eV range) differ by orders of magnitude. Therefore collisions at room temperature hardly change the internal state of the atoms.`,
    derivation: R`Position of the Earth–Moon centre of mass:
<ol class="fc-steps">
<li>$r_E = \dfrac{m_\text{Mo}}{m_E+m_\text{Mo}}R$<em>Magnitude of $\vec r_1^{\,*}$ from (6.47) with $m_1 = m_E$, $m_2 = m_\text{Mo}$ (6.66).</em></li>
<li>$\dfrac{m_\text{Mo}}{m_E} = \dfrac{7{,}35\cdot10^{22}}{5{,}97\cdot10^{24}} = 0{,}0123$<em>Mass ratio.</em></li>
<li>$r_E = \dfrac{0{,}0123}{1{,}0123}\cdot384\,400\,\text{km}\approx4670\,\text{km}$<em>With the mean distance $R$; depending on the values used, 4550–4700 km.</em></li>
<li>$r_E\lt R_E = 6371\,\text{km}$<em>The centre of mass lies inside the Earth, about 1700 km below the surface.</em></li>
<li>$\mu_H = \dfrac{m_e\cdot1836m_e}{1837m_e} = \dfrac{1836}{1837}m_e = 0{,}99946\,m_e$<em>Reduced mass of the hydrogen atom.</em></li>
</ol>`,
    example: R`<b>Speed of the Earth around the Earth–Moon centre of mass:</b> $v_E = \frac{2\pi r_E}{T} = \frac{2\pi\cdot4{,}67\cdot10^{6}\,\text{m}}{27{,}3\cdot86\,400\,\text{s}}\approx12\,\text{m/s}$, compared with about $1{,}0\,\text{km/s}$ for the Moon.<br>
<b>Binary star</b> with $m_1 = 2m_2$: the heavier star moves on a circle half the size, at half the speed.`,
    counterexample: R`<b>Sun–Jupiter:</b> Jupiter has about $1/1047$ of the Sun's mass, but lies $5{,}2\,\text{AU}$ away. The centre of mass lies $\approx\frac{5{,}2\cdot1{,}5\cdot10^{8}\,\text{km}}{1048}\approx7{,}4\cdot10^{5}\,\text{km}$ from the Sun's centre, i.e. just <i>outside</i> the Sun ($R_\odot = 6{,}96\cdot10^{5}\,\text{km}$). So "the heavy body is at rest" is not a good picture here; exoplanets are discovered precisely through this wobble of the star.`,
    pitfalls: R`<ul><li>Assuming the Earth is at rest and only the Moon orbits.</li>
<li>Placing the centre of mass on the Earth's surface or outside it.</li>
<li>Setting $\mu = m_e$ exactly when precision matters (spectroscopy).</li></ul>`
  },

  // ========================================================================
  // 6.8 PARTICLE COLLISIONS
  // ========================================================================
  "ph6_zentraler_stoss": {
    title: R`Central elastic collision with a particle at rest: three cases`,
    category: R`6.8 Particle collisions`,
    type: "herleitung",
    front: R`Particle 1 ($m_1$, velocity $v_1$) hits the particle at rest, 2 ($m_2$), centrally and elastically. Derive $u_1$ and $u_2$ by elimination. What does the second (trivial) solution mean, and which three cases are distinguished?`,
    back: R`<b>Elastic:</b> momentum and kinetic energy are exchanged, the internal energy does not change (no deformation, no heating). 1D with signed components $v_i$, $u_i$:
$$m_1v_1 = m_1u_1 + m_2u_2,\qquad\tfrac12m_1v_1^2 = \tfrac12m_1u_1^2 + \tfrac12m_2u_2^2\qquad(6.73,\,6.74)$$
Eliminating $u_1$ gives
$$u_2^2(m_1+m_2) - 2m_1v_1u_2 = 0\qquad(6.77)$$
Two solutions:
$$u_2 = \frac{2m_1}{m_1+m_2}v_1,\quad u_1 = \frac{m_1-m_2}{m_1+m_2}v_1\qquad(6.78)$$
$$u_2 = 0,\quad u_1 = v_1\quad(\text{particle 1 passes through without interaction})\qquad(6.79)$$
<b>Cases</b> (6.80):
<ul><li>$m_1>m_2$: $0\lt u_1\lt v_1$, $u_2>v_1$</li>
<li>$m_1 = m_2$: $u_1 = 0$, $u_2 = v_1$ (exchange of velocities)</li>
<li>$m_1\lt m_2$: $u_1\lt0$ (rebound), $0\lt u_2\lt v_1$</li></ul>`,
    meta: R`Script: sections 6.8.1–6.8.2, Eqs. (6.72)–(6.80), Fig. 6.6, pp. 148–150`,
    explanation: R`<b>Intuition:</b> As in billiards: a ball that strikes an equally heavy ball at rest head-on stops and hands over all its motion. A light ball rebounds from a heavy one; a heavy one pushes a light one ahead of it (up to twice as fast).<br><br>
<b>Energy transfer:</b> The fraction of the energy that particle 2 receives is
$\frac{T_2'}{T_1} = \frac{4m_1m_2}{(m_1+m_2)^2}$, maximal (= 1) for equal masses. That is why neutrons are slowed in nuclear reactors by light nuclei (hydrogen in water): at nearly equal mass the neutron loses the most energy per collision.<br><br>
<b>The trivial solution</b> is mathematically also compatible with both conservation laws: "nothing happens". The conservation laws therefore say <i>what</i> is possible, not <i>whether</i> a collision takes place.<br><br>
<b>Connection:</b> In the centre-of-mass frame an elastic central collision simply reverses both velocities (6.8.4); the three cases follow from transforming back.`,
    derivation: R`<ol class="fc-steps">
<li>$m_1u_1 = m_1v_1 - m_2u_2$<em>Momentum theorem solved for $m_1u_1$ (6.75).</em></li>
<li>$m_1m_2u_2^2 = m_1^2v_1^2 - m_1^2u_1^2$<em>Energy theorem multiplied by $2m_1$ and rearranged.</em></li>
<li>$m_1m_2u_2^2 = m_1^2v_1^2 - (m_1v_1-m_2u_2)^2$<em>Insert $m_1u_1$ from step 1 (6.76).</em></li>
<li>$m_1m_2u_2^2 = 2m_1m_2v_1u_2 - m_2^2u_2^2$<em>Expand the square; $m_1^2v_1^2$ cancels.</em></li>
<li>$u_2\left[u_2(m_1+m_2) - 2m_1v_1\right] = 0$<em>Divide by $m_2$ and factor out $u_2$ (6.77).</em></li>
<li>$u_2 = \dfrac{2m_1v_1}{m_1+m_2}$, $u_1 = v_1 - \dfrac{m_2}{m_1}u_2 = \dfrac{m_1-m_2}{m_1+m_2}v_1$<em>Non-trivial solution and back-substitution (6.78).</em></li>
</ol>`,
    example: R`<b>Neutron on proton</b> (masses approximately equal): $u_1\approx0$; in a central collision the neutron gives up practically its whole energy.<br>
<b>Neutron on carbon</b> ($m_2 = 12m_1$): $u_1 = -\frac{11}{13}v_1$, energy transfer $\frac{4\cdot12}{169} = 28\,\%$.<br>
<b>Tennis ball on wall</b> ($m_2\to\infty$): $u_1 = -v_1$, $u_2 = 0$.`,
    counterexample: R`<b>Inelastic:</b> Two clay balls of equal mass stick together: $u = v_1/2$ for both; half of the kinetic energy goes into deformation. The formulas (6.78) then do not apply; the kinetic energy is not conserved (Q-value $\lt0$, 6.8.3).`,
    pitfalls: R`<ul><li>Treating $u_i$ as magnitudes instead of signed components (the script stresses that here they can become negative).</li>
<li>Presenting the trivial solution as the physical result of a collision.</li>
<li>Using the formulas unchanged for a moving particle 2; then the more general formulas apply (Ch. 3.7.2).</li></ul>`
  },
  "ph6_streuung_q_wert": {
    title: R`General scattering: kinematics vs. dynamics, probability density, Q-value`,
    category: R`6.8 Particle collisions`,
    type: "konzept",
    front: R`What distinguishes the <b>kinematic</b> from the <b>dynamic</b> part of a scattering process? What is a probability density $d\Gamma/dp$? How is the <b>Q-value</b> of a collision defined, and which three kinds of collision are distinguished with it?`,
    back: R`In the general case both particles are moving and the collision is not central (transverse momentum transfer, Fig. 6.7).
<ul><li><b>Kinematics:</b> dependence $p_i(\vartheta)$ or $E_i(\vartheta)$ on the scattering angle, from the conservation laws alone. Used for planning (angular range, detectors); does not ask about the causes.</li>
<li><b>Dynamics:</b> frequency distributions $dN/dp_i$, $dN/dE_i$: how many particles end up where? They depend on the interaction; their analysis tells us about the force (e.g. Rutherford: atomic nucleus).</li></ul>
<b>Normalised probability density:</b>
$$\int\frac{d\Gamma}{dp}\,dp = 1\qquad(6.81),\qquad\left[\frac{d\Gamma}{dE}\right] = \frac1{\text{J}}\qquad(6.82)$$
Only the integral gives a (dimensionless) probability.<br><br>
<b>Process</b> $1+2\to3+4\,(+5+\dots)$ (6.83) in the centre-of-mass frame: $\vec p_1^{\,*}+\vec p_2^{\,*} = \vec p_3^{\,*}+\vec p_4^{\,*}$ (6.84) and
$$T_1^*+T_2^* = T_3^*+T_4^* - Q\qquad(6.86,\,6.87)$$
<ul><li>$Q = 0$: elastic</li>
<li>$Q\lt0$: inelastic (endoergic), kinetic energy is turned into internal energy</li>
<li>$Q>0$: superelastic (exoergic), internal energy is released</li></ul>`,
    meta: R`Script: sections 6.8.3.1–6.8.3.2, Eqs. (6.81)–(6.87), Fig. 6.7, pp. 150–153`,
    explanation: R`<b>Intuition:</b> The conservation laws say which final states are <i>allowed</i> (kinematics). How <i>often</i> each allowed final state occurs is decided by the interaction (dynamics). That is the basic principle of all scattering experiments: from measured distributions one infers the force.<br><br>
<b>Historical example:</b> Rutherford bombarded gold foil with α-particles. Kinematically, backscattering would also have been allowed for a uniformly distributed charge, but it should be extremely rare. That it occurred often showed the dynamics: the positive charge is concentrated in a tiny nucleus.<br><br>
<b>Q-value:</b> It measures how much kinetic energy is converted into internal energy or vice versa. Inelastic collisions excite atoms or nuclei (Franck–Hertz experiment), superelastic ones release stored energy (nuclear reactions, chemical explosions).<br><br>
<b>Densities:</b> A probability density has the inverse unit of its variable. $d\Gamma/dE = 10^{19}\,\text{J}^{-1}$ is not a "probability of $10^{19}$", but a density.`,
    derivation: R`Counting the degrees of freedom in the final state ($1+2\to3+4$):
<ol class="fc-steps">
<li>Unknowns: $\vec p_3^{\,*}$, $\vec p_4^{\,*}$, i.e. 6 components<em>After the collision both momenta are unknown.</em></li>
<li>Equations: momentum conservation (3) and energy conservation (1), i.e. 4<em>With the known Q-value (6.84, 6.86).</em></li>
<li>Degrees of freedom: $6 - 4 = 2$<em>Kinematics leaves two quantities free, e.g. the angles $\vartheta^*$ and $\varphi^*$.</em></li>
<li>Dynamics determines $\dfrac{d\Gamma}{d\Omega^*}(\vartheta^*,\varphi^*)$<em>The interaction determines how events are distributed over the allowed angles.</em></li>
<li>Without spin: rotational symmetry about the collision axis, so only $\vartheta^*$<em>Then $\varphi^*$ is uniformly distributed, and one can restrict oneself to a plane (6.108).</em></li>
</ol>`,
    example: R`<b>Q-values:</b> billiard balls: $Q\approx0$ (almost elastic). Car crash: $Q\ll0$ (deformation). Nuclear fusion $\text{D}+\text{T}\to{}^4\text{He}+n$: $Q = +17{,}6\,\text{MeV}$ (superelastic: the mass defect becomes kinetic energy).<br><br>
<b>Density:</b> If $d\Gamma/dE = \frac1{E_0}$ in the range $0\le E\le E_0$ (uniform), then the probability for $E\in[0,E_0/4]$ is $\frac14$.`,
    counterexample: R`<b>"Kinematically allowed" does not mean "observed":</b> some energy ranges are allowed by the conservation laws, but hardly occur because the interaction suppresses them (6.8.3.1). Conversely, one cannot infer the force from a measured distribution without theory.`,
    pitfalls: R`<ul><li>Confusing probability and probability density.</li>
<li>Getting the sign of the Q-value the wrong way round (script: $T_\text{before} = T_\text{after}-Q$, so $Q\lt0$ for energy loss).</li>
<li>Assuming masses change in ordinary collisions; this happens only at energies comparable with $mc^2$.</li></ul>`
  },
  "ph6_stoss_schwerpunktsystem": {
    title: R`Elastic collision in the centre-of-mass frame: momentum magnitudes stay the same`,
    category: R`6.8 Particle collisions`,
    type: "herleitung",
    front: R`A particle $m_1$ (momentum $\vec p_1$) collides elastically with a particle $m_2$ at rest. Calculate $\vec v_S$ and $p^*$, and show that in the centre-of-mass frame only the <b>direction</b>, not the <b>magnitude</b> of the momenta changes. Which parameters remain free?`,
    back: R`The whole system as one particle with $m = m_1+m_2$, $\vec p = \vec p_1$ (6.91, 6.92):
$$\vec v_S = \frac{\vec p_1+\vec p_2}{m_1+m_2} = \frac{m_1}{m_1+m_2}\vec v_1\qquad(6.93,\,6.94)$$
Before the collision in the centre-of-mass frame:
$$\vec v_1^{\,*} = \frac{m_2}{m_1+m_2}\vec v_1,\quad\vec v_2^{\,*} = -\vec v_S,\quad|\vec p_1^{\,*}| = |\vec p_2^{\,*}| = p^* = \frac{m_2}{m_1+m_2}p_1\qquad(6.95\text{–}6.99)$$
After the collision $\vec p_3^{\,*}+\vec p_4^{\,*} = \vec 0$ (6.100). Energy conservation:
$$T_i^* = \frac{m_1+m_2}{2m_1m_2}p_1^{*2} = T_f^* = \frac{m_1+m_2}{2m_1m_2}p_3^{*2}\;\Rightarrow\;|\vec p_3^{\,*}| = |\vec p_1^{\,*}| = p^*\qquad(6.102\text{–}6.106)$$
In an elastic collision neither the momentum magnitudes nor the kinetic energies change in the centre-of-mass frame. Remaining free: $2$ parameters, $\vartheta^*$ and $\varphi^*$:
$$\vec p_3^{\,*} = p^*(\sin\vartheta^*\cos\varphi^*,\ \sin\vartheta^*\sin\varphi^*,\ \cos\vartheta^*),\qquad\vec p_4^{\,*} = -\vec p_3^{\,*}\qquad(6.107)$$`,
    meta: R`Script: sections 6.8.4.1–6.8.4.2, Eqs. (6.88)–(6.108), Fig. 6.8, pp. 153–156`,
    explanation: R`<b>Intuition:</b> In the centre-of-mass frame the two particles approach each other with equal and opposite momenta and fly apart afterwards with equal and opposite momenta. In an elastic collision even the magnitude is the same; the collision only <b>turns</b> the pair of momenta through the angle $\vartheta^*$. It cannot be simpler.<br><br>
<b>Recipe for any elastic collision:</b> (1) Transform into the centre-of-mass frame (using $\vec v_S$). (2) Turn the momenta. (3) Transform back ($\vec v = \vec v^{\,*}+\vec v_S$). The script stresses that for the transformation one needs velocities, and for the conservation laws in the centre-of-mass frame momenta.<br><br>
<b>Momentum space:</b> In the space of momenta $(p_x,p_y,p_z)$ all possible $\vec p_3^{\,*}$ lie on a sphere of radius $p^*$. That suggests spherical coordinates.<br><br>
<b>Connection:</b> The central collision (6.8.2) is the special case $\vartheta^* = \pi$ (full reversal); $\vartheta^* = 0$ corresponds to the trivial solution "no collision".`,
    derivation: R`<ol class="fc-steps">
<li>$\vec v_S = \dfrac{m_1\vec v_1 + m_2\cdot\vec 0}{m_1+m_2} = \dfrac{m_1}{m_1+m_2}\vec v_1$<em>Velocity of the centre of mass (6.94).</em></li>
<li>$\vec v_1^{\,*} = \vec v_1-\vec v_S = \dfrac{m_2}{m_1+m_2}\vec v_1$, so $p^* = m_1v_1^* = \dfrac{m_2}{m_1+m_2}p_1$<em>Relative velocity and momentum in the centre-of-mass frame (6.95, 6.99).</em></li>
<li>$T^* = \dfrac{p^{*2}}{2m_1}+\dfrac{p^{*2}}{2m_2} = \dfrac{m_1+m_2}{2m_1m_2}p^{*2}$<em>Both particles have the same momentum magnitude in the centre-of-mass frame (6.102).</em></li>
<li>Afterwards: $|\vec p_3^{\,*}| = |\vec p_4^{\,*}|$, $T_f^* = \dfrac{m_1+m_2}{2m_1m_2}p_3^{*2}$<em>Momentum conservation in the centre-of-mass frame; the masses are unchanged (6.100–6.103).</em></li>
<li>$T_i^* = T_f^*\Rightarrow p_3^* = p^*$<em>Elastic: equal energy means equal momentum magnitude (6.104–6.106).</em></li>
<li>6 unknowns − 4 equations = 2 free angles<em>Polar and azimuthal angle; without spin rotationally symmetric, then only $\vartheta^*$ (6.107, 6.108).</em></li>
</ol>`,
    example: R`$m_1 = 2\,\text{kg}$ with $v_1 = 3\,\text{m/s}$ on $m_2 = 1\,\text{kg}$ (at rest): $v_S = 2\,\text{m/s}$, $v_1^* = 1\,\text{m/s}$, $v_2^* = -2\,\text{m/s}$, $p^* = 2\,\text{kg m/s}$.<br>
Scattering through $\vartheta^* = 90^\circ$: $\vec v_3^{\,*} = (1,0)\,\text{m/s}$ (perpendicular), $\vec v_4^{\,*} = (-2,0)$; in the laboratory: $\vec v_3 = (1;\,2)$, $\vec v_4 = (-2;\,2)\,\text{m/s}$ (z-axis as second component).<br>
Energy check: $\tfrac12\cdot2\cdot5+\tfrac12\cdot1\cdot8 = 9\,\text{J} = \tfrac12\cdot2\cdot9$ ✓.`,
    counterexample: R`<b>Inelastic collision</b> ($Q\lt0$): in the centre-of-mass frame the momenta remain equal and opposite, but their magnitude becomes smaller ($p_3^*\lt p^*$). In the completely inelastic collision $p_3^* = 0$: both are at rest in the centre-of-mass frame and move together in the laboratory with $\vec v_S$.`,
    pitfalls: R`<ul><li>Using momenta instead of velocities for the transformation.</li>
<li>Setting $\vec p_4^{\,*}$ with the same sign as $\vec p_3^{\,*}$.</li>
<li>Setting $p^* = p_1$ (it is $\frac{m_2}{m_1+m_2}p_1$).</li></ul>`
  },
  "ph6_stoss_labor_energie": {
    title: R`Elastic scattering in the laboratory frame: momenta and energies as functions of ϑ*`,
    category: R`6.8 Particle collisions`,
    type: "herleitung",
    front: R`Transform the final momenta of the elastic collision (target at rest) back into the <b>laboratory frame</b>, with $\xi = m_1/m_2$. Derive $T_3(\vartheta^*)$ and $T_4(\vartheta^*)$. How much energy can be transferred at most?`,
    back: R`With $\vec v_3 = \vec v_3^{\,*}+\vec v_S$, $\vec v_4 = \vec v_4^{\,*}+\vec v_S$ (6.109, 6.110), scattering in the $xz$-plane, $\vec p_1\parallel\vec e_z$:
$$\vec p_3 = \frac{p_1}{1+\xi}\begin{pmatrix}\sin\vartheta^*\\0\\\xi+\cos\vartheta^*\end{pmatrix},\qquad\vec p_4 = \frac{p_1}{1+\xi}\begin{pmatrix}-\sin\vartheta^*\\0\\1-\cos\vartheta^*\end{pmatrix}\qquad(6.111\text{–}6.117)$$
Energies in the laboratory:
$$T_3(\vartheta^*) = T_1\frac{1+2\xi\cos\vartheta^*+\xi^2}{(1+\xi)^2},\qquad T_4(\vartheta^*) = T_1\frac{2\xi(1-\cos\vartheta^*)}{(1+\xi)^2}\qquad(6.118\text{–}6.122)$$
Maximum transfer for backscattering in the centre-of-mass frame ($\vartheta^* = \pi$):
$$\frac{T_{4,\max}}{T_1} = \frac{4\xi}{(1+\xi)^2}$$
equal to 1 only for $\xi = 1$ (equal masses).`,
    meta: R`Script: sections 6.8.4.3–6.8.4.4, Eqs. (6.109)–(6.122), Fig. 6.9, pp. 156–158`,
    explanation: R`<b>Intuition:</b> How much energy the particle at rest receives depends on how "hard" it is hit. Grazing shots ($\vartheta^*\approx0$) transfer almost nothing, head-on collisions ($\vartheta^* = \pi$) the most. The mass determines how much is possible at all.<br><br>
<b>Dependence on the mass ratio:</b> $\frac{4\xi}{(1+\xi)^2}$ is symmetric under $\xi\to1/\xi$ and maximal at $\xi = 1$. An electron (light) gives almost no energy to an atomic nucleus (heavy) ($\xi\approx10^{-4}$, transfer $\lesssim4\cdot10^{-4}$). That is why electrons in gas discharges barely heat the ions.<br><br>
<b>Energy sum:</b> $T_3+T_4 = T_1$ for every angle, as it must be for an elastic collision.<br><br>
<b>Connection:</b> The expression for $T_4$ is the basis of neutron moderation and of recoil spectroscopy (Rutherford backscattering for materials analysis).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec p_3 = m_1(\vec v_3^{\,*}+\vec v_S) = \vec p_3^{\,*}+m_1\vec v_S$<em>Transform back (6.111).</em></li>
<li>$\vec p_3^{\,*} = \dfrac{m_2p_1}{m_1+m_2}(\sin\vartheta^*,0,\cos\vartheta^*)$, $m_1\vec v_S = \dfrac{m_1p_1}{m_1+m_2}(0,0,1)$<em>With $p^*$ from (6.106) and $\vec v_S$ from (6.94) (6.112).</em></li>
<li>$\vec p_3 = \dfrac{p_1}{1+\xi}(\sin\vartheta^*,\,0,\,\xi+\cos\vartheta^*)$<em>Cancel $m_2$, $m_1 = \xi m_2$ (6.113, 6.117).</em></li>
<li>$p_3^2 = \dfrac{p_1^2}{(1+\xi)^2}\left(\sin^2\vartheta^*+\xi^2+2\xi\cos\vartheta^*+\cos^2\vartheta^*\right)$<em>Square of the magnitude; $\sin^2+\cos^2 = 1$.</em></li>
<li>$T_3 = \dfrac{p_3^2}{2m_1} = T_1\dfrac{1+2\xi\cos\vartheta^*+\xi^2}{(1+\xi)^2}$<em>With $T_1 = p_1^2/2m_1$ (6.118, 6.119).</em></li>
<li>$p_4^2 = \dfrac{p_1^2}{(1+\xi)^2}\cdot2(1-\cos\vartheta^*)$, $T_4 = \dfrac{p_4^2}{2m_2} = T_1\dfrac{2\xi(1-\cos\vartheta^*)}{(1+\xi)^2}$<em>Analogously; $\frac{1}{2m_2} = \frac{\xi}{2m_1}$ (6.120, 6.121).</em></li>
</ol>`,
    example: R`<b>Neutron</b> ($T_1 = 2\,\text{MeV}$) on resting nuclei, maximum transfer ($\vartheta^* = \pi$):<br>
Hydrogen ($\xi\approx1$): $T_{4,\max} = 2\,\text{MeV}$ (100 %).<br>
Deuterium ($\xi = \frac12$): $\frac{4\cdot0{,}5}{2{,}25} = 89\,\%$.<br>
Carbon ($\xi = \frac1{12}$): $28\,\%$.<br>
Lead ($\xi\approx\frac1{207}$): $1{,}9\,\%$. Heavy nuclei hardly slow neutrons.`,
    counterexample: R`<b>$T_3$ as a function of the laboratory angle is not unique:</b> For $\xi>1$, every laboratory angle $\vartheta_3\lt\vartheta_3^\text{max}$ corresponds to <i>two</i> centre-of-mass angles and hence two energies (Fig. 6.9). That is why one prefers to work with $\vartheta^*$, where the assignment is unique.`,
    pitfalls: R`<ul><li>Inserting $\xi = m_2/m_1$ instead of $m_1/m_2$.</li>
<li>Confusing the laboratory angle $\vartheta_3$ with the centre-of-mass angle $\vartheta^*$.</li>
<li>Forgetting that $T_3+T_4 = T_1$ can serve as a check.</li></ul>`
  },
  "ph6_streuwinkel": {
    title: R`Scattering angle in the laboratory: 90° for equal masses, maximum angle for m₁ > m₂`,
    category: R`6.8 Particle collisions`,
    type: "herleitung",
    front: R`For elastic scattering off a target at rest, derive the laboratory angles $\cos\vartheta_3$, $\cos\vartheta_4$ and the opening angle $\vartheta_{34}$. Show: for equal masses the particles fly apart at <b>90°</b>, and for $m_1>m_2$ there is a <b>maximum scattering angle</b>.`,
    back: R`From (6.117):
$$\cos\vartheta_3 = \frac{\cos\vartheta^*+\xi}{\sqrt{1+2\xi\cos\vartheta^*+\xi^2}},\qquad\cos\vartheta_4 = \sqrt{\frac{1-\cos\vartheta^*}{2}}\qquad(6.123\text{–}6.125)$$
Opening angle:
$$\cos\vartheta_{34} = \frac{\vec p_3\cdot\vec p_4}{|\vec p_3||\vec p_4|} = \sqrt{\frac{1-\cos\vartheta^*}{2}}\;\frac{\xi-1}{\sqrt{1+2\xi\cos\vartheta^*+\xi^2}}\qquad(6.126\text{–}6.128)$$
<b>Equal masses</b> ($\xi = 1$): $\cos\vartheta_{34} = 0$, so $\vartheta_{34} = \pi/2$ always.<br><br>
<b>$\xi>1$:</b> $\frac{d\cos\vartheta_3}{d\cos\vartheta^*} = \frac{1+\xi\cos\vartheta^*}{(1+2\xi\cos\vartheta^*+\xi^2)^{3/2}} = 0$ at $\cos\vartheta^* = -\frac1\xi$:
$$\cos\vartheta_3^\text{max} = \sqrt{1-\frac1{\xi^2}}\qquad(6.129\text{–}6.132)$$
At every angle $\vartheta_3\lt\vartheta_3^\text{max}$ two energies occur. The heavy incoming particle is scattered <b>only forward</b> (for $\xi\ge1$, because $v_S\ge\frac12v_1$, 6.133–6.138).`,
    meta: R`Script: section 6.8.4.4, Eqs. (6.123)–(6.144), Figs. 6.8–6.11, pp. 158–161 (summary of the laboratory angles in 6.142–6.144, T₃/T₁ against ϑ₃ in Fig. 6.11)`,
    explanation: R`<b>Intuition (equal masses):</b> Billiard players know this: if the cue ball strikes a resting ball of equal mass at an angle, both afterwards travel at right angles. Reason: momentum and energy conservation together give $\vec p_1 = \vec p_3+\vec p_4$ and $p_1^2 = p_3^2+p_4^2$, that is Pythagoras, hence a right angle.<br><br>
<b>Intuition (heavy projectile):</b> A bowling ball that hits a table-tennis ball is hardly deflected. Geometrically: in the laboratory $\vec v_3 = \vec v_3^{\,*}+\vec v_S$; if $|\vec v_S|>|\vec v_3^{\,*}|$, the tip of $\vec v_3$ lies on a circle that does not enclose the origin. Then there is a maximum angle (tangent to the circle, Fig. 6.10), and for each smaller angle two intersection points.<br><br>
<b>Dependence:</b> $\sin\vartheta_3^\text{max} = 1/\xi$. For an α-particle ($\xi\approx4$) on a proton: $\vartheta_3^\text{max} = 14{,}5^\circ$.<br><br>
<b>Connection:</b> The recoil particle 4 always moves forward ($\vartheta_4\le90^\circ$), because it is set in motion from rest.`,
    derivation: R`The right angle for equal masses without the centre-of-mass frame:
<ol class="fc-steps">
<li>$\vec p_1 = \vec p_3+\vec p_4$<em>Momentum conservation in the laboratory (particle 2 at rest).</em></li>
<li>$\dfrac{p_1^2}{2m} = \dfrac{p_3^2}{2m}+\dfrac{p_4^2}{2m}\;\Rightarrow\;p_1^2 = p_3^2+p_4^2$<em>Energy conservation with equal masses $m$.</em></li>
<li>$p_1^2 = (\vec p_3+\vec p_4)^2 = p_3^2+p_4^2+2\,\vec p_3\cdot\vec p_4$<em>Square of step 1.</em></li>
<li>$\vec p_3\cdot\vec p_4 = 0$<em>Compare steps 2 and 3.</em></li>
<li>$\vartheta_{34} = 90^\circ$ (provided $\vec p_3,\vec p_4\neq\vec 0$)<em>The scalar product vanishes: perpendicular; consistent with (6.128) for $\xi = 1$.</em></li>
</ol>`,
    example: R`<b>$\xi = 2$</b> (e.g. deuteron on proton): $\cos\vartheta_3^\text{max} = \sqrt{1-\frac14} = 0{,}866$, so $\vartheta_3^\text{max} = 30^\circ$; reached at $\cos\vartheta^* = -\frac12$ ($\vartheta^* = 120^\circ$).<br>
<b>$\xi = 1$, $\vartheta^* = 90^\circ$:</b> $\cos\vartheta_3 = \frac{1}{\sqrt2}$, so $\vartheta_3 = 45^\circ$; $\vartheta_4 = 45^\circ$; sum $90^\circ$ ✓.`,
    counterexample: R`<b>Light projectile</b> ($\xi\lt1$): there is no maximum angle. An electron can be scattered off a heavy nucleus at any angle up to $180^\circ$ (backscattering). The statement "only forward scattering" holds only for $\xi\ge1$.<br>
<b>Inelastic:</b> The 90° rule for equal masses does not hold; e.g. in a completely inelastic collision the two stay together ($\vartheta_{34} = 0$).`,
    pitfalls: R`<ul><li>Applying the 90° rule to unequal masses or inelastic collisions.</li>
<li>Confusing $\vartheta_3^\text{max}$ with $\vartheta^*$.</li>
<li>Expecting only one energy at a given laboratory angle.</li></ul>`
  },

  // ========================================================================
  // SUPPLEMENTS: typical exam tasks and bridges to Physics II
  // ========================================================================
  "ph6_erhaltungssatz_strategie": {
    title: R`Which conservation law when? Momentum, energy, angular momentum in exercises`,
    category: R`6.5 Conservation laws for N-particle systems`,
    type: "konzept",
    front: R`Under which conditions may one use the <b>momentum</b>, the <b>energy</b> or the <b>angular momentum</b> theorem in a problem? How does one split a problem such as the ballistic pendulum into phases with different conservation laws?`,
    back: R`<ul><li><b>Momentum</b> $\vec P = \sum m_i\vec v_i$ is conserved if $\vec F_\text{ext} = \vec 0$ – or component by component, if one component of the external force vanishes. Short collisions: external forces (weight, friction) deliver no significant impulse while $\Delta t\to0$, so momentum is conserved <i>during the collision</i>. Exception: bearing or suspension forces that become large during the collision itself.</li>
<li><b>Mechanical energy</b> $T+U$ is conserved if only conservative forces do work. Not in inelastic collisions, sliding friction, deformation. Constraint forces that are perpendicular to the motion (normal force, string tension of a pendulum, static friction in rolling) do no work.</li>
<li><b>Angular momentum</b> about a point $O$ is conserved if the external torque about $O$ vanishes: central forces, forces through $O$ (e.g. the bearing force at the pivot), short collisions about a fixed axis.</li></ul>
<b>Separating phases:</b> Ballistic pendulum: (1) collision: momentum theorem (energy <i>not</i> conserved). (2) upswing: energy theorem (momentum <i>not</i> conserved, string tension and weight act).`,
    meta: R`Supplement (exam strategy); summarises sections 3.3, 4.5, 5.2, 6.5 (Eqs. 6.39–6.42) and 8.5`,
    explanation: R`<b>Intuition:</b> Conservation laws are shortcuts: they connect the initial and the final state without requiring the forces in detail. But each holds only under its own condition – and most mistakes arise because one applies a law across a phase in which it is violated.<br><br>
<b>Checklist before every problem:</b> (1) Which system am I considering (which bodies belong to it)? (2) Which external forces and torques act, and in which phase? (3) Is energy dissipated (friction, plastic collision)?<br><br>
<b>Reference point for angular momentum:</b> Choose it so that unknown forces (bearing, suspension) have no torque about it – then $L$ about this point is conserved, even though momentum is not (ball hits a rod that is pivoted at one end).<br><br>
<b>Connection:</b> By Noether's theorem (outlook) the conservation laws belong to symmetries: momentum to translational invariance, energy to time invariance, angular momentum to rotational invariance. The conservation laws for $N$-particle systems: 6.5.`,
    derivation: R`Ballistic pendulum in two phases (projectile $m$, speed $v$; block $M$ on a string):
<ol class="fc-steps">
<li>Collision (brief): $mv = (m+M)u$<em>Momentum theorem; the string is vertical, weight and string tension have no horizontal component.</em></li>
<li>$u = \dfrac{m}{m+M}v$<em>Common velocity after the completely inelastic collision.</em></li>
<li>Upswing: $\tfrac12(m+M)u^2 = (m+M)gh$<em>Energy theorem; string tension is perpendicular to the motion.</em></li>
<li>$v = \dfrac{m+M}m\sqrt{2gh}$<em>Back-calculate the projectile speed from the height reached.</em></li>
<li>Wrong would be: $\tfrac12mv^2 = (m+M)gh$<em>Assuming energy is conserved across the collision overestimates $h$ by the factor $(m+M)/m$.</em></li>
</ol>`,
    example: R`$m = 10\,\text{g}$, $v = 400\,\text{m/s}$, $M = 2\,\text{kg}$: $u = 1{,}99\,\text{m/s}$, $h = 20{,}2\,\text{cm}$. Of the $800\,\text{J}$ of projectile energy only $4{,}0\,\text{J}$ ($0{,}5\,\%$) remains mechanical; the rest becomes deformation and heat.<br>
A planet on an elliptical orbit: angular momentum about the Sun conserved (central force), energy conserved, momentum not (the force acts all the time).`,
    counterexample: R`<b>Momentum with a bearing:</b> If a ball hits a rod pivoted at one end, the bearing exerts a large force during the collision – the momentum of ball plus rod is <i>not</i> conserved. Only the angular momentum about the bearing axis is conserved (card "Angular momentum in collisions with rigid bodies").`,
    pitfalls: R`<ul><li>Applying energy conservation across an inelastic collision.</li>
<li>Using momentum conservation despite external bearing forces.</li>
<li>Comparing angular momentum about different points.</li>
<li>Not clearly delimiting the system (what is inside, what is outside?).</li></ul>`
  },
  "ph6_stoesse_1d": {
    title: R`Head-on collisions: elastic (general case) and completely inelastic, energy loss ½μv²_rel`,
    category: R`6.8 Particle collisions`,
    type: "herleitung",
    front: R`Two bodies $m_1$, $m_2$ with $v_1$, $v_2$ collide head-on (one-dimensionally). Determine the velocities after (a) an <b>elastic</b> and (b) a <b>completely inelastic</b> collision. How much kinetic energy is lost in the inelastic case?`,
    back: R`<b>(a) Elastic</b> (momentum and kinetic energy conserved):
$$u_1 = \frac{(m_1-m_2)v_1+2m_2v_2}{m_1+m_2},\qquad u_2 = \frac{(m_2-m_1)v_2+2m_1v_1}{m_1+m_2}$$
Equivalently: the relative velocity reverses, $u_1-u_2 = -(v_1-v_2)$. In the centre-of-mass frame both velocities simply change sign: $u_i = 2v_S-v_i$ with $v_S = \frac{m_1v_1+m_2v_2}{m_1+m_2}$.<br><br>
<b>(b) Completely inelastic</b> (bodies stick together, only momentum conserved):
$$u = \frac{m_1v_1+m_2v_2}{m_1+m_2} = v_S$$
Energy loss = the entire kinetic energy in the centre-of-mass frame:
$$\Delta T = \frac12\frac{m_1m_2}{m_1+m_2}(v_1-v_2)^2 = \tfrac12\mu v_\text{rel}^2$$`,
    meta: R`Supplement (typical exam task); generalises sections 6.8.1–6.8.2 (Eqs. 6.72–6.80) and uses 6.4.3 (T = T* + ½Mv_S²), 6.6 (reduced mass)`,
    explanation: R`<b>Intuition:</b> Every collision is easiest to understand in the centre-of-mass frame: there the total momentum is zero. In an elastic collision both bounce back with unchanged magnitudes; in a completely inelastic one both come to rest. Back in the laboratory one gets there by adding $v_S$.<br><br>
<b>Energy:</b> By (6.4.3), $T = \tfrac12Mv_S^2+T^*$. The centre-of-mass part cannot change without an external force; so a collision can lose at most $T^* = \tfrac12\mu v_\text{rel}^2$. The completely inelastic collision loses exactly that maximum.<br><br>
<b>Dependencies:</b> Light body on a resting heavy one ($m_1\ll m_2$, $v_2 = 0$): almost all energy stays kinetic (reflection, $u_1\approx-v_1$); in the inelastic case almost everything is lost ($\Delta T/T\approx1$). Heavy on light: $u_2\approx2v_1$ (golf club).<br><br>
<b>Connection:</b> Partially elastic collisions are described with the coefficient of restitution $e = -\frac{u_1-u_2}{v_1-v_2}$ ($0\le e\le1$, supplement). The three cases of the script (6.8.2) are the special case $v_2 = 0$.`,
    derivation: R`Elastic, via the relative velocity:
<ol class="fc-steps">
<li>$m_1(v_1-u_1) = m_2(u_2-v_2)$<em>Momentum conservation rearranged.</em></li>
<li>$m_1(v_1^2-u_1^2) = m_2(u_2^2-v_2^2)$<em>Energy conservation (factor $\tfrac12$ cancelled).</em></li>
<li>$v_1+u_1 = u_2+v_2$<em>Divide the second by the first equation ($a^2-b^2 = (a-b)(a+b)$), for $v_1\neq u_1$.</em></li>
<li>$u_1-u_2 = -(v_1-v_2)$<em>The relative velocity reverses.</em></li>
<li>$u_2 = u_1+v_1-v_2$ in the momentum equation $\Rightarrow u_1 = \dfrac{(m_1-m_2)v_1+2m_2v_2}{m_1+m_2}$<em>Solve the linear system.</em></li>
</ol>`,
    example: R`Elastic: $m_1 = 1\,\text{kg}$, $v_1 = 3\,\text{m/s}$; $m_2 = 2\,\text{kg}$, $v_2 = -1\,\text{m/s}$: $u_1 = -\tfrac73$, $u_2 = \tfrac53\,\text{m/s}$. Check: momentum $1 = 1$ ✓, energy $5{,}5 = 5{,}5\,\text{J}$ ✓, $u_1-u_2 = -4$ ✓.<br>
Inelastic, same data: $u = \tfrac13\,\text{m/s}$, $\Delta T = \tfrac12\cdot\tfrac23\cdot16 = 5{,}33\,\text{J}$ out of $5{,}5\,\text{J}$.`,
    counterexample: R`<b>"In inelastic collisions momentum is lost":</b> Wrong – momentum is conserved in every collision (without external forces); only kinetic energy is turned into internal energy. And even in the completely inelastic collision not all the energy is lost, only the centre-of-mass part $T^*$ is not available.`,
    pitfalls: R`<ul><li>Forgetting the signs of the velocities (directions).</li>
<li>Applying energy conservation to inelastic collisions.</li>
<li>Transferring the special case $v_2 = 0$ to moving targets without checking.</li></ul>`
  }
};
})();
