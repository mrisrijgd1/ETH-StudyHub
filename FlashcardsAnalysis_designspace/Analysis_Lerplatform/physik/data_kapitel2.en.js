/* ==========================================================================
   PHYSICS I – CHAPTER 2 (English): Kinematics of the point mass
   Point mass, position, velocity, acceleration, projectile motion, circular motion,
   angular velocity as a vector, tangential/normal acceleration
   Script Physics I – Prof. K. Ensslin, ETH Zurich, HS 2025
   English translation of data_kapitel2.js. Formulas, HTML and ids are identical.
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_EN_KAPITEL_2 = {
  "ph2_massenpunkt": {
    title: R`Kinematics vs. dynamics and the point-mass model`,
    category: R`2.2 Point mass`,
    type: "definition",
    front: R`What distinguishes <b>kinematics</b> from <b>dynamics</b>? What is a <b>point mass</b>, and when may an extended body be treated this way?`,
    back: R`<ul><li><b>Kinematics:</b> describes <i>how</i> a body moves (position, velocity, acceleration), purely geometrically, without asking for causes.</li>
<li><b>Dynamics:</b> asks <i>why</i>, i.e. the causes of the motion (forces, Ch. 3).</li></ul>
<b>Point mass (particle):</b> an idealised body whose entire mass is concentrated at a point and whose extent <b>plays no role</b> for the given problem. Its location is fixed by the three coordinates of a point.<br><br>
For an extended body, these three coordinates describe its <b>centre of mass</b>. To describe its orientation in space one would need three further coordinates (Ch. 8).<br><br>
An additional assumption of classical kinematics: there is an <b>absolute time</b> that is the same for all observers (only relativity theory abandons this).`,
    meta: "Script: Sections 2.1–2.3 (footnotes 1–3), pp. 11–12",
    explanation: R`<b>Intuition:</b> Whether a point mass is a good approximation depends not on the body but on the <b>question</b>. For its orbit around the Sun the Earth is a point mass; for tides or the alternation of day and night it is not.<br><br>
<b>Rule of thumb:</b> The extent $d$ can be neglected if it is small compared with the relevant lengths $L$ of the motion ($d\ll L$) <i>and</i> rotations of the body are unimportant for the question (no significant rotational energy, no angular momentum that has an effect).<br><br>
<b>Connection:</b> The centre-of-mass theorem (Ch. 6) gives the deeper justification: the centre of mass of any body moves as if the whole mass were concentrated there and all external forces acted there. The point-mass model is therefore exact for the <i>translation</i> of the centre of mass, but ignores rotation and deformation.`,
    derivation: R`Count degrees of freedom and estimate the approximation:
<ol class="fc-steps">
<li>Point mass: $(x,y,z)$, so 3 degrees of freedom<em>The position of a point in space is fixed by three numbers.</em></li>
<li>Rigid body: $(x_S,y_S,z_S)$ and 3 angles, so 6 degrees of freedom<em>In addition to the position of the centre of mass one needs the orientation (e.g. Euler angles, Ch. 8.5.2).</em></li>
<li>$\frac{R_\text{Erde}}{r_\text{Bahn}} = \frac{6{,}4\cdot10^{6}\,\text{m}}{1{,}5\cdot10^{11}\,\text{m}}\approx 4\cdot10^{-5}$<em>For the Earth’s orbit the extent is $10^{-5}$ times smaller than the orbit: the point mass is an excellent approximation here.</em></li>
<li>Criterion: $d/L\ll1$ and rotation irrelevant<em>Only when both hold may the 3 orientation degrees of freedom be dropped.</em></li>
</ol>`,
    example: R`<b>Good approximation:</b> a tennis ball on a trajectory of 20 m (diameter about 7 cm, so $d/L\approx 3\cdot10^{-3}$), as long as spin and air resistance are ignored. Likewise the Earth on its orbit around the Sun.<br><br>
<b>Centre of mass as a point mass:</b> a high jumper rotates over the bar. Nevertheless his centre of mass follows exactly a parabolic trajectory, as if he were a point mass.`,
    counterexample: R`<b>Rolling ball on an inclined plane:</b> as a frictionless sliding point mass it would have $a = g\sin\alpha$. In fact it rolls with $a = \tfrac57 g\sin\alpha$, because part of the energy goes into rotation (Ch. 8.5.9). The extent (moment of inertia) is decisive here, even though the ball is small.<br>
<b>Gyroscope:</b> precession and nutation (Ch. 13) cannot be described in principle without extent.`,
    pitfalls: R`<ul><li>Understanding the point mass as a property of the object rather than of the question.</li>
<li>Judging “small” in absolute rather than relative terms ($d\ll L$).</li>
<li>Forgetting that the position vector of an extended body refers to its <b>centre of mass</b>.</li>
<li>Mixing up kinematics and dynamics: kinematic equations say nothing about forces.</li></ul>`
  },

  "ph2_ortsvektor": {
    title: R`Position vector, unit vector, displacement vector and path length`,
    category: R`2.3 Position vector`,
    type: "definition",
    front: R`How are the <b>position vector</b> $\vec r(t)$, its magnitude $r$ and its direction $\hat r$ defined? What is the difference between the <b>displacement vector</b> $\Delta\vec r$ and the <b>distance travelled along the path</b> $\Delta s$?`,
    back: R`In a right-handed Cartesian coordinate system $\Sigma$:
$$\vec r(t) \stackrel{\text{def}}{=} \begin{pmatrix} x(t)\\ y(t)\\ z(t)\end{pmatrix}\qquad(2.1)$$
<ul><li>Magnitude: $r = |\vec r| = \sqrt{x^2+y^2+z^2}$ (2.2)</li>
<li>Direction: $\vec e_r \equiv \hat r = \vec r/r$, always of length 1 (2.3)</li>
<li>Displacement vector: $\Delta\vec r = \vec r(t_2)-\vec r(t_1)$ (2.4), direction and distance between the initial and final points</li>
<li>Path length along the trajectory $\Gamma$: $\Delta s = \int_\Gamma |d\vec r| = \int_\Gamma\sqrt{(dx)^2+(dy)^2+(dz)^2}$ (2.5)</li></ul>
The position vector always refers to the <b>origin</b> and is <b>not freely displaceable</b>. The displacement vector is a difference of two position vectors and therefore does not depend on the origin.`,
    meta: "Script: Section 2.3, Eqs. (2.1)–(2.5), Fig. 2.1, pp. 11–13",
    explanation: R`<b>Intuition:</b> The position vector is an “arrow from the origin to the particle”. Its tip traces out the <b>trajectory</b> $\Gamma$ over time. Time $t$ serves as the curve parameter.<br><br>
<b>Path vs. displacement:</b> The displacement $\Delta\vec r$ only cares about the start and end points (like the straight-line distance), whereas the path length $\Delta s$ adds up all the small pieces $|d\vec r|$ along the curve (like an odometer). Always $\Delta s\ge|\Delta\vec r|$, with equality only for straight-line motion without reversal.<br><br>
<b>Dependence on the origin:</b> If the origin is shifted by $\vec b$, then $\vec r\to\vec r-\vec b$, but $\Delta\vec r$ stays the same. Physically measurable quantities such as velocity therefore do not depend on the choice of origin, but they do depend on the chosen <b>frame of reference</b> (moving or at rest, Ch. 3.11).<br><br>
<b>Connection:</b> The unit vector $\hat r$ appears wherever something acts radially, for example in gravitational and Coulomb forces $\vec F\propto -\hat r/r^2$ (Ch. 3.10).`,
    derivation: R`Why $\Delta s\ge |\Delta\vec r|$, and how to calculate the path length:
<ol class="fc-steps">
<li>$d\vec r = (dx,dy,dz)\;\Rightarrow\;|d\vec r| = \sqrt{(dx)^2+(dy)^2+(dz)^2}$<em>An infinitesimal piece of the trajectory is approximately straight; its length follows from Pythagoras in 3D.</em></li>
<li>$\Delta\vec r = \int_\Gamma d\vec r$<em>The displacement is the (vector) sum of all the small displacement pieces.</em></li>
<li>$|\Delta\vec r| = \left|\int_\Gamma d\vec r\right| \le \int_\Gamma |d\vec r| = \Delta s$<em>Triangle inequality for integrals: the magnitude of a sum is at most the sum of the magnitudes.</em></li>
<li>Equality $\iff$ all $d\vec r$ point in the same direction<em>So only for straight-line motion without reversal of direction.</em></li>
</ol>`,
    example: R`<b>Semicircle of radius $R$:</b> start at $(R,0,0)$, end at $(-R,0,0)$. Then $\Delta\vec r = (-2R,0,0)$, so $|\Delta\vec r| = 2R$, but the path length is $\Delta s = \pi R\approx 1{,}57\cdot 2R$.<br><br>
<b>Full circle:</b> $\Delta\vec r = \vec 0$, but $\Delta s = 2\pi R$.<br><br>
<b>Unit vector:</b> $\vec r = (3,4,0)\,\text{m}$ gives $r = 5\,\text{m}$ and $\hat r = (0{,}6;\,0{,}8;\,0)$, dimensionless with length 1.`,
    counterexample: R`<b>The position vector cannot be shifted:</b> if you draw $\vec r$ at a different place, it describes a different location, unlike a velocity or force arrow, which may be freely displaced.<br>
<b>At the origin</b> $\hat r = \vec r/r$ is not defined ($r=0$). Radial force laws have a singularity there.`,
    pitfalls: R`<ul><li>Confusing path length and displacement (e.g. “average velocity after one lap = 0” is correct as a vector, but wrong as a speed).</li>
<li>Forgetting that $\hat r$ is dimensionless; the unit is contained in $r$.</li>
<li>Using a left-handed coordinate system: the script assumes right-handed ($x,y,z$ in this order), otherwise cross products change sign.</li></ul>`
  },

  "ph2_geschwindigkeit": {
    title: R`Average and instantaneous velocity`,
    category: R`2.4 Velocity`,
    type: "definition",
    front: R`How are the <b>average</b> and the <b>instantaneous velocity</b> defined? How does one obtain the components, and why does $\vec v$ always point tangentially to the trajectory?`,
    back: R`<b>Average velocity</b> in the interval $[t,t+\Delta t]$:
$$\langle\vec v\rangle = \frac{\Delta\vec r}{\Delta t} = \frac{\vec r(t+\Delta t)-\vec r(t)}{\Delta t}\qquad(2.6)$$
<b>Instantaneous velocity</b> (limit $\Delta t\to0$):
$$\vec v(t) = \lim_{\Delta t\to0}\frac{\vec r(t+\Delta t)-\vec r(t)}{\Delta t} = \frac{d\vec r}{dt} \stackrel{\text{def}}{=} \dot{\vec r}(t)\qquad(2.7)$$
<b>Components</b> (only this simple in Cartesian coordinates!):
$$\vec v(t) = \begin{pmatrix}\dot x(t)\\ \dot y(t)\\ \dot z(t)\end{pmatrix}\qquad(2.8)$$
$\vec v$ is a vector: both the magnitude $v$ (speed) <i>and</i> the direction $\hat v$ matter. In the position–time diagram $x(t)$, $v(t_0)$ is the <b>slope of the tangent</b> at $t_0$.`,
    meta: "Script: Section 2.4.1, Eqs. (2.6)–(2.8), Figs. 2.2–2.3, pp. 13–14",
    explanation: R`<b>Intuition:</b> The average velocity connects two points of the trajectory by a chord. The smaller $\Delta t$, the more the chord turns into the tangent (Fig. 2.2). That is why $\vec v$ always points <b>tangentially</b> to the trajectory, in the direction of motion.<br><br>
<b>Speed vs. velocity:</b> $|\vec v| = ds/dt$ is the derivative of the path length (path speed), while $\vec v$ additionally carries the direction. On average $\langle|\vec v|\rangle = \Delta s/\Delta t\ge|\langle\vec v\rangle|$.<br><br>
<b>Why “only in Cartesian coordinates”?</b> In curvilinear coordinates the basis vectors themselves depend on position and change with the motion. In polar coordinates, for example, $\vec v = \dot\rho\,\vec e_\rho + \rho\dot\varphi\,\vec e_\varphi$ and not simply $(\dot\rho,\dot\varphi)$ (Appendix 11.2.8).<br><br>
<b>Connection:</b> Velocity depends on the frame of reference: in a moving train the passenger is at rest, seen from the platform he moves (Galilean transformation $\vec v = \vec v' + \vec u$, Ch. 3.11).`,
    derivation: R`Why does $\vec v$ point tangentially? Derivative along the parametrised trajectory:
<ol class="fc-steps">
<li>$\vec r(t+\Delta t) = \vec r(t) + \dot{\vec r}(t)\,\Delta t + \mathcal O(\Delta t^2)$<em>Taylor expansion of each component about $t$.</em></li>
<li>$\Delta\vec r = \dot{\vec r}\,\Delta t + \mathcal O(\Delta t^2)$<em>To first order the chord is parallel to $\dot{\vec r}$.</em></li>
<li>$\frac{\Delta\vec r}{\Delta t} \to \dot{\vec r}$ for $\Delta t\to 0$<em>The quadratic correction vanishes after division by $\Delta t$: the chord direction becomes the tangent direction.</em></li>
<li>$|\vec v| = \lim\frac{|\Delta\vec r|}{\Delta t} = \lim\frac{\Delta s}{\Delta t} = \frac{ds}{dt}$<em>For $\Delta t\to0$ the chord and the arc become equal in length: the magnitude of the velocity is the path speed.</em></li>
</ol>`,
    example: R`$x(t) = 3\,\tfrac{\text{m}}{\text{s}^2}\,t^2$ (one-dimensional).<br>
Instantaneous: $v(t) = \dot x = 6\,\tfrac{\text{m}}{\text{s}^2}\,t$, so $v(2\,\text{s}) = 12\,\text{m/s}$.<br>
Average over $[0,2\,\text{s}]$: $\langle v\rangle = \frac{x(2)-x(0)}{2\,\text{s}} = \frac{12\,\text{m}}{2\,\text{s}} = 6\,\text{m/s}$. For a linearly increasing velocity the mean equals the value at the midpoint of the interval, $v(1\,\text{s}) = 6\,\text{m/s}$.`,
    counterexample: R`<b>There and back:</b> 10 km to the university and back in 1 h: $\langle\vec v\rangle = \vec 0$ (start = end), but the average path speed is $20\,\text{km/h}$.<br>
<b>Polar coordinates:</b> in uniform circular motion $\dot\rho = 0$. Nevertheless $\vec v\neq\vec 0$, because $\vec v = \rho\dot\varphi\,\vec e_\varphi$. Differentiating the coordinates $(\rho,\varphi)$ component by component alone would be wrong here.`,
    pitfalls: R`<ul><li>Confusing $\langle|\vec v|\rangle$ (mean speed) with $|\langle\vec v\rangle|$.</li>
<li>Calculating the average velocity as the arithmetic mean of the initial and final velocities. This is only correct if $v(t)$ is linear.</li>
<li>Applying component formula (2.8) without thought in polar or spherical coordinates.</li>
<li>Confusing the dot $\dot{}$ (time derivative) with the prime $'$ (spatial derivative).</li></ul>`
  },
  "ph2_gleichfoermig": {
    title: R`Uniform motion in a straight line`,
    category: R`2.4 Velocity`,
    type: "beispiel",
    front: R`A body moves with <b>constant velocity</b> $v_0$ along a straight line in the $xz$-plane, at angle $\alpha$ to the $x$-axis. What is $\vec r(t)$, and what role do the integration constants play?`,
    back: R`Velocity (2.9):
$$\vec v = \begin{pmatrix}v_0\cos\alpha\\ 0\\ v_0\sin\alpha\end{pmatrix} = \text{const}$$
We seek three functions whose time derivatives give these constants (2.10):
$$\vec r(t) = \begin{pmatrix}x_0 + v_0 t\cos\alpha\\ y_0\\ z_0 + v_0 t\sin\alpha\end{pmatrix}$$
The <b>integration constants</b> $x_0,y_0,z_0$ fix where the body is at $t=0$. With the start at the origin (2.11) it follows that
$$\vec r(t) = v_0 t\begin{pmatrix}\cos\alpha\\0\\ \sin\alpha\end{pmatrix} = \vec v\,t\qquad(2.12)$$
The first differential equation $\dot{\vec r} = \vec v_0$ is thus solved. In general $\vec r(t) = \vec r_0 + \vec v_0 t$.`,
    meta: "Script: Section 2.4.2, Eqs. (2.9)–(2.12), Fig. 2.4, pp. 14–15",
    explanation: R`<b>Intuition:</b> Constant velocity means: equal displacements in equal times, in the same direction. The path is a straight line, and the position grows <b>linearly</b> with time ($\vec r - \vec r_0\propto t$).<br><br>
<b>Choice of coordinates:</b> One chooses the coordinate system conveniently (here motion in the $xz$-plane), so that as many components as possible are zero. This is pure convenience; the physics does not change as a result.<br><br>
<b>ODE view:</b> $\dot{\vec r} = \vec v_0$ is a first-order differential equation in $\mathbb R^3$. Its general solution contains 3 free constants, which are fixed only by the initial condition $\vec r(0)$. This pattern (“general solution + initial conditions”) runs through all of mechanics.<br><br>
<b>Connection:</b> By Newton I (Ch. 3.5) this is exactly the motion of a force-free body in an inertial frame.`,
    derivation: R`Solution by integration (rather than by guessing):
<ol class="fc-steps">
<li>$\dot x(t) = v_0\cos\alpha$<em>$x$-component of the equation of motion; the right-hand side is constant in time.</em></li>
<li>$\int_0^t \dot x(t')\,dt' = \int_0^t v_0\cos\alpha\,dt'$<em>Integrate both sides from $0$ to $t$.</em></li>
<li>$x(t) - x(0) = v_0 t\cos\alpha$<em>On the left: fundamental theorem of calculus; on the right: integral of a constant.</em></li>
<li>$x(t) = x_0 + v_0 t\cos\alpha$<em>With $x_0 := x(0)$; analogously $y(t)=y_0$ (since $v_y=0$) and $z(t)=z_0+v_0t\sin\alpha$.</em></li>
<li>$x_0=y_0=z_0=0\;\Rightarrow\;\vec r(t) = \vec v\,t$<em>The initial condition “start at the origin” sets all constants to zero.</em></li>
</ol>`,
    example: R`$v_0 = 10\,\text{m/s}$, $\alpha = 30^\circ$, start at the origin. After $t = 4\,\text{s}$:
$x = 10\cdot4\cdot\cos30^\circ\,\text{m} = 34{,}6\,\text{m}$, $z = 10\cdot4\cdot\sin30^\circ\,\text{m} = 20\,\text{m}$, so $|\vec r| = 40\,\text{m} = v_0 t$ ✓.<br>
The path $z = x\tan\alpha$ is a straight line through the origin with slope $\tan30^\circ\approx0{,}577$.`,
    counterexample: R`<b>Constant speed $\neq$ constant velocity:</b> in uniform circular motion $|\vec v|$ is constant, but the direction changes continuously. The motion is accelerated (Ch. 2.5.3), and $\vec r(t) = \vec r_0 + \vec v_0 t$ does not hold there.`,
    pitfalls: R`<ul><li>Leaving out the integration constants. Without an initial condition the solution is not unique.</li>
<li>Swapping $\sin$ and $\cos$ in the decomposition: the component <i>adjacent</i> to the angle gets the $\cos$.</li>
<li>Believing the motion can only happen in one plane because one chose $y=0$. That was a choice of coordinate system.</li></ul>`
  },
  "ph2_integration_ort": {
    title: R`Position from velocity: integration and initial conditions`,
    category: R`2.4 Velocity`,
    type: "gesetz",
    front: R`How does one recover the position $\vec r(t)$ from an <b>arbitrary</b> velocity $\vec v(t)$? How many <b>initial conditions</b> are needed, and how is the <b>distance travelled</b> calculated?`,
    back: R`In one dimension, with $v_x = dx/dt$ (2.13):
$$x(t) = x(t_0) + \int_{t_0}^{t} v_x(t')\,dt'\qquad(2.15)$$
In three dimensions, component by component:
$$\vec r(t) = \vec r(t_0) + \int_{t_0}^{t}\vec v(t')\,dt'\qquad(2.17)$$
<b>Initial conditions:</b> a first-order ODE, i.e. 1 condition per dimension: $x(t_0)$ in 1D, the vector $\vec r(t_0)$ (3 numbers) in 3D.<br><br>
<b>Distance travelled</b> = arc length of the trajectory:
$$\Delta s(t) = \int_{t_0}^{t}|\vec v(t')|\,dt' = \int\sqrt{(dx)^2+(dy)^2+(dz)^2}\qquad(2.18)$$`,
    meta: "Script: Section 2.4.3, Eqs. (2.13)–(2.18), p. 17",
    explanation: R`<b>Intuition:</b> Integration is “summing small steps”: in each short time interval $dt'$ the particle is displaced by $\vec v(t')\,dt'$. Adding all these displacements to the starting position gives today’s position. Graphically, $x(t)-x(t_0)$ is the <b>area under the $v(t)$ curve</b> (with sign!).<br><br>
<b>Sign vs. magnitude:</b> In the position integral, outward and return journeys cancel (negative area), while in the path length (2.18) they do not, because there $|\vec v|$ is integrated.<br><br>
<b>Connection:</b> This is the same logic as $\vec v(t) = \vec v(t_0) + \int\vec a\,dt'$ (Ch. 2.5.2). If $\vec a(t)$ is known, one integrates twice and needs $2\times3 = 6$ initial conditions. This is exactly how one later solves Newton’s equation of motion $m\ddot{\vec r} = \vec F$.`,
    derivation: R`Derivation of (2.15) from the definition of velocity:
<ol class="fc-steps">
<li>$v_x(t') = \frac{dx(t')}{dt'}$<em>Definition of velocity, with integration variable $t'$ (to distinguish it from the upper limit $t$).</em></li>
<li>$\int_{t_0}^{t}v_x(t')\,dt' = \int_{t_0}^{t}\frac{dx(t')}{dt'}\,dt'$<em>Integrate both sides over the interval $[t_0,t]$.</em></li>
<li>$\int_{t_0}^{t}\frac{dx}{dt'}\,dt' = \int_{x(t_0)}^{x(t)}dx = x(t)-x(t_0)$<em>Fundamental theorem: the integral of a derivative is the difference of the antiderivative at the limits (2.14).</em></li>
<li>$x(t) = x(t_0) + \int_{t_0}^{t}v_x(t')\,dt'$<em>Solve for $x(t)$. The starting value $x(t_0)$ is the required initial condition.</em></li>
<li>$\vec r(t) = \vec r(t_0) + \int_{t_0}^{t}\vec v(t')\,dt'$<em>The same for $y$ and $z$: vector integrals are carried out component by component (2.17).</em></li>
</ol>`,
    example: R`<b>Exponentially decaying velocity</b> (e.g. a boat after the engine is switched off): $v(t) = v_0 e^{-t/\tau}$, $x(0)=0$.
$$x(t) = \int_0^t v_0 e^{-t'/\tau}dt' = v_0\tau\left(1-e^{-t/\tau}\right)$$
As $t\to\infty$, $x\to v_0\tau$: despite infinite time, the boat travels only a finite distance. With $v_0 = 5\,\text{m/s}$ and $\tau = 4\,\text{s}$ this is $20\,\text{m}$.`,
    counterexample: R`<b>Displacement ≠ distance:</b> $v(t) = v_0\cos(\omega t)$ (back-and-forth motion). Over one period $T = 2\pi/\omega$, $\int_0^T v\,dt = 0$ (back at the start), but the distance is $\int_0^T|v|\,dt = 4v_0/\omega\neq0$.`,
    pitfalls: R`<ul><li>Forgetting the initial condition (integration constant). Without it the starting position is missing.</li>
<li>Giving the integration variable and the upper limit the same name ($\int_0^t v(t)\,dt$ is misleading).</li>
<li>Integrating $\vec v$ instead of $|\vec v|$ for the distance.</li>
<li>Believing one can simply write $x = v\,t$ without integrating. This holds only for <b>constant</b> velocity.</li></ul>`
  },

  "ph2_beschleunigung": {
    title: R`Acceleration as a vector: magnitude and direction can both change`,
    category: R`2.5 Acceleration`,
    type: "definition",
    front: R`How is the <b>acceleration</b> $\vec a$ defined? Why can a motion with <b>constant speed</b> still be accelerated, and when does the speed actually change?`,
    back: R`Average and instantaneous acceleration:
$$\langle\vec a\rangle = \frac{\Delta\vec v}{\Delta t},\qquad \vec a(t) = \lim_{\Delta t\to 0}\frac{\vec v(t+\Delta t)-\vec v(t)}{\Delta t} = \dot{\vec v}(t)\qquad(2.19,\,2.20)$$
$$\vec a = \frac{d\vec v}{dt} = \frac{d^2\vec r}{dt^2} = \ddot{\vec r},\qquad \vec a = \begin{pmatrix}\ddot x\\ \ddot y\\ \ddot z\end{pmatrix}\qquad(2.21,\,2.22)$$
A change of the velocity <b>vector</b> can arise from a change of
<ul><li>its <b>magnitude</b> (faster/slower),</li>
<li>its <b>direction</b> (a curve),</li>
<li>or both.</li></ul>
For example, circular motion at constant speed is therefore an <b>accelerated</b> motion.`,
    meta: "Script: Section 2.5.1, Eqs. (2.19)–(2.22), p. 18",
    explanation: R`<b>Intuition:</b> Acceleration is anything that changes the velocity <i>arrow</i>, whether it becomes longer, shorter or turned. In a car you feel it when accelerating, braking <i>and</i> in a bend.<br><br>
<b>The central decomposition:</b> the part of $\vec a$ <b>parallel</b> to $\vec v$ changes the speed, the part <b>perpendicular</b> to $\vec v$ only changes the direction (more precisely in 2.5.6). If $\vec a$ is always perpendicular to $\vec v$, the speed stays constant.<br><br>
<b>Connection:</b> Newton II, $\vec F = m\vec a$ (Ch. 3), says that forces cause accelerations, not velocities. A force perpendicular to the motion (centripetal force, Lorentz force) therefore does no work and does not change the kinetic energy (Ch. 4).`,
    derivation: R`When does the speed change? Differentiating $v^2 = \vec v\cdot\vec v$:
<ol class="fc-steps">
<li>$v^2 = \vec v\cdot\vec v$<em>The square of the speed is the scalar product of the velocity with itself.</em></li>
<li>$\frac{d}{dt}(v^2) = \dot{\vec v}\cdot\vec v + \vec v\cdot\dot{\vec v} = 2\,\vec v\cdot\vec a$<em>Product rule for the scalar product; both terms are equal, since the scalar product is symmetric.</em></li>
<li>$2v\,\dot v = 2\,\vec v\cdot\vec a\;\Rightarrow\;\dot v = \frac{\vec v\cdot\vec a}{v} = \vec a\cdot\hat v$<em>On the left the chain rule; divide by $2v$ ($v\neq0$). The change in speed is the projection of $\vec a$ onto the direction of motion.</em></li>
<li>$\vec a\perp\vec v\;\Rightarrow\;\dot v = 0$<em>If the acceleration is perpendicular to the velocity, the magnitude stays constant: only the direction changes.</em></li>
</ol>`,
    example: R`A car drives at a constant $20\,\text{m/s}$ through a bend of radius $50\,\text{m}$. The speed is constant, yet $|\vec a| = v^2/r = 8\,\text{m/s}^2$ (centripetal acceleration, Ch. 2.5.3). That is almost as much as the gravitational acceleration, and the occupants feel it clearly.`,
    counterexample: R`<b>“Velocity zero ⇒ acceleration zero” is false:</b> at the highest point of a vertical throw $v = 0$, but $\vec a = -g\,\vec e_z\neq\vec 0$. If $a=0$ there, the ball would hang motionless at the top.<br>
<b>Conversely:</b> high velocity does not mean high acceleration. An aircraft in cruise has $v\approx250\,\text{m/s}$, but $\vec a\approx\vec 0$.`,
    pitfalls: R`<ul><li>Understanding “acceleration” only as an increase in speed; braking and bends are also accelerations.</li>
<li>Assuming $\vec a$ is automatically parallel to $\vec v$. In general they have different directions.</li>
<li>Signs when braking: “deceleration $6\,\text{m/s}^2$” means $a = -6\,\text{m/s}^2$ along the direction of motion.</li>
<li>Confusing $\dot v$ (derivative of the magnitude) with $|\dot{\vec v}|$ (magnitude of the derivative). In circular motion $\dot v = 0$, but $|\dot{\vec v}|\neq0$.</li></ul>`
  },
  "ph2_konst_beschleunigung": {
    title: R`Uniformly accelerated motion: general solution`,
    category: R`2.5 Acceleration`,
    type: "gesetz",
    front: R`What are $\vec v(t)$ and $\vec r(t)$ for <b>constant acceleration</b> $\vec a_0$? How many initial conditions are needed, and which time-free relation between $v$ and the distance follows?`,
    back: R`For $\vec a(t) = \vec a_0 = \text{const}$ (magnitude <i>and</i> direction constant):
$$\vec v(t) = \vec v(t_0) + \vec a_0\,(t-t_0)\qquad(2.25)$$
$$\vec r(t) = \vec r(t_0) + \vec v(t_0)\,(t-t_0) + \tfrac12\vec a_0\,(t-t_0)^2\qquad(2.26)$$
Component by component with $t_0 = 0$ (2.27): $x(t) = x(0) + v_x(0)\,t + \tfrac12 a_{0x}t^2$, and so on.<br><br>
<b>Initial conditions:</b> a second-order ODE in $\mathbb R^3$, so $2\times3 = 6$: the initial position $\vec r(t_0)$ and the initial velocity $\vec v(t_0)$.<br><br>
<b>Time-free form</b> (in one direction, $t$ eliminated):
$$v^2 = v_0^2 + 2a\,(x-x_0)$$
Free fall and projectile motion are special cases that differ <b>only in their initial conditions</b>.`,
    meta: "Script: Section 2.5.2, Eqs. (2.23)–(2.27), p. 19",
    explanation: R`<b>Intuition:</b> Constant acceleration means: the velocity grows <b>linearly</b> with time, and the position therefore <b>quadratically</b>. The factor $\tfrac12$ arises because the average velocity over the interval is exactly the mean of the initial and final velocities.<br><br>
<b>Dependencies:</b> Starting from rest, $s\propto t^2$ and $v\propto t$, but $v\propto\sqrt s$. Twice the distance is therefore not reached with twice the final speed, but with $\sqrt2$ times it. Conversely: double the initial speed means <b>four times</b> the braking distance ($s = v_0^2/(2|a|)$).<br><br>
<b>Independence of the components:</b> The three coordinates evolve completely independently of one another. They are linked only through the common parameter $t$. This is what makes projectile motion so simple.<br><br>
<b>Connection:</b> Constant acceleration arises from a constant force ($\vec a = \vec F/m$), for example gravity close to the Earth’s surface.`,
    derivation: R`Integrate twice, then eliminate time:
<ol class="fc-steps">
<li>$\vec v(t) = \vec v(t_0) + \int_{t_0}^{t}\vec a_0\,dt' = \vec v(t_0) + \vec a_0(t-t_0)$<em>First integration as in (2.17), one level higher (2.24–2.25). Since $\vec a_0$ is constant, it stands in front of the integral.</em></li>
<li>$\vec r(t) = \vec r(t_0) + \int_{t_0}^{t}\left[\vec v(t_0)+\vec a_0(t'-t_0)\right]dt'$<em>Second integration: insert the result of step 1 as the velocity.</em></li>
<li>$\int_{t_0}^{t}(t'-t_0)\,dt' = \tfrac12(t-t_0)^2$<em>The antiderivative of $(t'-t_0)$ is $\tfrac12(t'-t_0)^2$; zero at the lower limit.</em></li>
<li>$\vec r(t) = \vec r(t_0) + \vec v(t_0)(t-t_0) + \tfrac12\vec a_0(t-t_0)^2$<em>Result (2.26). Two integrations bring two vector constants: $\vec r(t_0)$ and $\vec v(t_0)$.</em></li>
<li>1D, $t_0=0$: insert $t = \frac{v-v_0}{a}$ into $x - x_0 = v_0t+\tfrac12at^2$<em>Time-free form: eliminate $t$ from the velocity equation and substitute into the position equation.</em></li>
<li>$x-x_0 = \frac{v_0(v-v_0)}{a}+\frac{(v-v_0)^2}{2a} = \frac{v^2-v_0^2}{2a}$<em>Bring to the common denominator $2a$: $2v_0v-2v_0^2+v^2-2v_0v+v_0^2 = v^2-v_0^2$. Hence $v^2 = v_0^2+2a(x-x_0)$.</em></li>
</ol>`,
    example: R`<b>Braking distance:</b> car with $v_0 = 30\,\text{m/s}$ ($108\,\text{km/h}$), braking deceleration $|a| = 6\,\text{m/s}^2$.<br>
Braking time: $t = v_0/|a| = 5\,\text{s}$. Braking distance: $s = v_0^2/(2|a|) = 900/12\,\text{m} = 75\,\text{m}$.<br>
Check with (2.26): $s = 30\cdot5 - \tfrac12\cdot6\cdot25 = 150-75 = 75\,\text{m}$ ✓.<br>
At $v_0 = 15\,\text{m/s}$ (half the speed) the braking distance is only $18{,}75\,\text{m}$, i.e. a quarter.`,
    counterexample: R`<b>Acceleration not constant:</b> a skydiver with air resistance ($F\propto v^2$) has an acceleration that decreases from $g$ to $0$ (terminal velocity, Ch. 3.9.5). $s = \tfrac12gt^2$ would give a speed of $589\,\text{m/s}$ after 60 s of falling. In reality it is about $55\,\text{m/s}$.<br>
<b>Only the magnitude constant:</b> in circular motion $|\vec a|$ is constant, but not the direction. (2.26) does not hold there.`,
    pitfalls: R`<ul><li>Applying the formulas to non-constant accelerations.</li>
<li>Calculating with $t$ instead of $(t-t_0)$ when the clock does not start at $t_0=0$.</li>
<li>Signs: if the $z$-axis points upward, $a_{0z} = -g$; if it points downward, $+g$. Fix this once and stay consistent.</li>
<li>Forgetting the factor $\tfrac12$, or scaling the braking distance linearly instead of quadratically with $v_0$.</li></ul>`
  },
  "ph2_freier_fall": {
    title: R`Free fall in a uniform gravitational field`,
    category: R`2.5 Acceleration`,
    type: "beispiel",
    front: R`A body is released from rest at height $z_0$ ($z$-axis pointing upward). What are $\vec r(t)$, the <b>fall time</b> and the <b>impact speed</b>? What do they depend on, and what do they not depend on?`,
    back: R`Acceleration and initial conditions (2.28–2.29):
$$\vec a_0 = \vec g = \begin{pmatrix}0\\0\\-g\end{pmatrix},\quad g = 9{,}81\,\tfrac{\text{m}}{\text{s}^2},\qquad \vec r(0) = \begin{pmatrix}x_0\\y_0\\z_0\end{pmatrix},\quad \vec v(0) = \vec 0$$
Substituting into (2.27):
$$\vec r(t) = \begin{pmatrix}x_0\\ y_0\\ z_0-\tfrac12 g t^2\end{pmatrix}\qquad(2.30)$$
Fall height $h$ (impact at $z = z_0-h$):
$$t_F = \sqrt{\frac{2h}{g}},\qquad v_F = g\,t_F = \sqrt{2gh}$$
Both are <b>independent of the mass</b>; we have $t_F\propto\sqrt h$ and $v_F\propto\sqrt h$.`,
    meta: "Script: Section 2.5.2, 1st example, Eqs. (2.28)–(2.30), pp. 19–20",
    explanation: R`<b>Intuition:</b> Without air resistance all bodies fall equally fast (Galileo). Free fall is a pure property of the gravitational field: $g$ does not depend on the falling body. The reason (Ch. 3.1.2): inertial and gravitational mass are equal, so $m$ cancels in $m\ddot z = -mg$.<br><br>
<b>Proportionalities:</b> Four times the height gives twice the fall time and twice the impact speed. The distances covered in the first $n$ equal time intervals are in the ratio $1:3:5:7\dots$ (Galileo’s law of odd numbers), because $s\propto t^2$.<br><br>
<b>Range of validity:</b> $g = 9{,}81\,\text{m/s}^2$ holds “on and near the Earth’s surface”. At great heights $g\propto1/r^2$ decreases (Ch. 3.10.3, Ch. 7), and in air the drag limits the speed.<br><br>
<b>Connection to energy:</b> $v_F = \sqrt{2gh}$ also follows from energy conservation $mgh = \tfrac12mv^2$ (Ch. 4): a first example of two independent routes giving the same result.`,
    derivation: R`Fall time and impact speed step by step:
<ol class="fc-steps">
<li>$z(t) = z_0 + v_z(0)\,t - \tfrac12 g t^2$ with $v_z(0) = 0$<em>$z$-component of (2.27) with $a_{0z} = -g$ (axis pointing upward).</em></li>
<li>$z(t_F) = z_0 - h \;\Rightarrow\; -\tfrac12 g t_F^2 = -h$<em>Impact condition: the body has fallen by $h$.</em></li>
<li>$t_F = \sqrt{2h/g}$<em>Solve for $t_F$; the negative root is physically irrelevant (before release).</em></li>
<li>$v_z(t_F) = -g\,t_F = -g\sqrt{2h/g} = -\sqrt{2gh}$<em>Speed from $v_z(t) = -gt$. The minus sign means “downward”; the magnitude is $\sqrt{2gh}$.</em></li>
<li>Check: $v^2 = 0 + 2(-g)(z-z_0) = 2gh$<em>The time-free formula $v^2 = v_0^2+2a\,\Delta z$ gives the same result.</em></li>
</ol>`,
    example: R`A stone falls from a $20\,\text{m}$ high bridge:<br>
$t_F = \sqrt{2\cdot20/9{,}81}\,\text{s} = 2{,}02\,\text{s}$, $v_F = \sqrt{2\cdot9{,}81\cdot20}\,\text{m/s} = 19{,}8\,\text{m/s}\approx71\,\text{km/h}$.<br>
<b>Reverse (height from fall time):</b> if you hear the impact after $3\,\text{s}$ (sound travel time neglected), $h = \tfrac12 g t^2\approx44\,\text{m}$.`,
    counterexample: R`<b>A feather and a ball in air</b> fall at different speeds. This is not due to $g$, but to air resistance, which for the feather is huge relative to its weight. In an evacuated fall tube both fall equally (the classic lecture-hall experiment).<br>
<b>Great heights:</b> from $h = 1000\,\text{km}$, $g$ is already about 25 % smaller, and $t_F = \sqrt{2h/g}$ is only a rough estimate.`,
    pitfalls: R`<ul><li>Sign chaos: axis upward means $a_z = -g$, and the impact velocity is negative.</li>
<li>Assuming $v_F\propto h$ instead of $v_F\propto\sqrt h$.</li>
<li>“Heavy bodies fall faster”: false without air resistance.</li>
<li>In echo-sounding or stone-throw problems, forgetting the sound travel time when it is not negligible.</li></ul>`
  },
  "ph2_schiefer_wurf": {
    title: R`Projectile motion: trajectory parabola, range and maximum height`,
    category: R`2.5 Acceleration`,
    type: "herleitung",
    front: R`A body is thrown from height $z_0$ with speed $v$ at angle $\alpha$. Derive the <b>trajectory</b> $z(x)$. For $z_0 = 0$: what follow for the <b>range</b>, the <b>maximum height</b> and the optimal angle?`,
    back: R`Initial conditions (2.31): $\vec r(0) = (0,0,z_0)$, $\vec v(0) = (v\cos\alpha,\,0,\,v\sin\alpha)$; in addition $\vec a = (0,0,-g)$.
$$\vec r(t) = \begin{pmatrix}v t\cos\alpha\\ 0\\ z_0 + v t\sin\alpha - \tfrac12 g t^2\end{pmatrix}\qquad(2.32)$$
Eliminate time with $t = \dfrac{x}{v\cos\alpha}$ (2.33):
$$z(x) = z_0 + x\tan\alpha - \frac{g\,x^2}{2v^2\cos^2\alpha}\qquad(2.34)$$
This is the <b>trajectory parabola</b>. For $z_0 = 0$:
$$t_\text{Flug} = \frac{2v\sin\alpha}{g},\qquad W = \frac{v^2\sin 2\alpha}{g},\qquad H = \frac{v^2\sin^2\alpha}{2g}$$
Maximum range at $\alpha = 45^\circ$: $W_\text{max} = v^2/g$.`,
    meta: "Script: Section 2.5.2, 2nd example, Eqs. (2.31)–(2.34), p. 20",
    explanation: R`<b>Intuition:</b> The components are <b>completely independent</b> and linked only through time. Horizontally the body flies uniformly (no force in the $x$-direction); vertically it performs a vertical throw. Superimposed, this gives a parabola.<br><br>
<b>Dependencies:</b>
<ul><li>$W\propto v^2$: double the launch speed gives four times the range.</li>
<li>$W\propto1/g$: on the Moon ($g/6$) everything goes six times as far.</li>
<li>$\sin2\alpha$ is symmetric about $45^\circ$: $30^\circ$ and $60^\circ$ give the same range, but different heights and flight times.</li></ul>
<b>Connection:</b> At the apex $v_z = 0$, the velocity is purely horizontal ($v\cos\alpha$), and $\vec a = \vec g$ is perpendicular to $\vec v$. Here the normal acceleration is maximal and the radius of curvature $\rho = v^2\cos^2\alpha/g$ is smallest (cf. 2.5.6).`,
    derivation: R`<ol class="fc-steps">
<li>$x(t) = v t\cos\alpha$<em>Horizontal: no acceleration, so uniform motion with $v_x = v\cos\alpha$.</em></li>
<li>$z(t) = z_0 + v t\sin\alpha - \tfrac12 g t^2$<em>Vertical: constant acceleration $-g$, initial velocity $v\sin\alpha$ (from (2.27)).</em></li>
<li>$t = \dfrac{x}{v\cos\alpha}$<em>Solve equation 1 for $t$ (for $\alpha\neq90^\circ$), to eliminate $t$ as a parameter.</em></li>
<li>$z = z_0 + \dfrac{x\sin\alpha}{\cos\alpha} - \dfrac{g}{2}\dfrac{x^2}{v^2\cos^2\alpha}$<em>Insert into equation 2: linear in $x$ plus a negative quadratic term in $x$, i.e. a downward-opening parabola.</em></li>
<li>$z_0=0,\ z=0:\; x\left(\tan\alpha - \dfrac{g x}{2v^2\cos^2\alpha}\right)=0$<em>Landing point: zeros of the parabola. $x=0$ is the launch.</em></li>
<li>$W = \dfrac{2v^2\sin\alpha\cos\alpha}{g} = \dfrac{v^2\sin2\alpha}{g}$<em>Set the bracket to zero and use $2\sin\alpha\cos\alpha = \sin2\alpha$.</em></li>
<li>$\dfrac{dW}{d\alpha} = \dfrac{2v^2\cos2\alpha}{g} = 0\;\Rightarrow\;\alpha = 45^\circ$<em>Maximum of the range: $\sin2\alpha = 1$.</em></li>
<li>$v_z(t_S) = v\sin\alpha - g t_S = 0\;\Rightarrow\;t_S = \dfrac{v\sin\alpha}{g},\quad H = z(t_S) = \dfrac{v^2\sin^2\alpha}{2g}$<em>Apex: the vertical velocity vanishes; the flight time is $2t_S$ (symmetry for $z_0=0$).</em></li>
</ol>`,
    example: R`Ball with $v = 20\,\text{m/s}$, $\alpha = 30^\circ$, $z_0 = 0$, $g = 9{,}81\,\text{m/s}^2$:<br>
$W = \frac{400\cdot\sin60^\circ}{9{,}81}\,\text{m} = 35{,}3\,\text{m}$, $H = \frac{400\cdot0{,}25}{2\cdot9{,}81}\,\text{m} = 5{,}10\,\text{m}$, $t_\text{Flug} = \frac{2\cdot20\cdot0{,}5}{9{,}81}\,\text{s} = 2{,}04\,\text{s}$.<br>
With $\alpha = 60^\circ$: the same range $35{,}3\,\text{m}$, but $H = 15{,}3\,\text{m}$ and $t_\text{Flug} = 3{,}53\,\text{s}$.<br>
With $\alpha = 45^\circ$: $W_\text{max} = 40{,}8\,\text{m}$.`,
    counterexample: R`<b>45° is not always optimal:</b>
<ul><li>When thrown from an elevated position ($z_0>0$, e.g. shot put from about 2 m height), the optimal angle lies <i>below</i> $45^\circ$ (typically $38^\circ$–$42^\circ$), because the body flies longer anyway.</li>
<li>With air resistance the path is no longer a parabola: it is asymmetric (a steeper descent), and the optimal angle is smaller.</li></ul>
<b>$\alpha = 90^\circ$:</b> vertical throw, $\cos\alpha = 0$; the elimination $t = x/(v\cos\alpha)$ is then impossible, and the “parabola” degenerates into a vertical line segment.`,
    pitfalls: R`<ul><li>Forgetting the $\cos^2\alpha$ in the denominator, or writing $\cos\alpha$ instead of $\cos^2\alpha$.</li>
<li>Using $W = v^2\sin2\alpha/g$ also for $z_0\neq0$. This formula holds only for launch and landing at the same height.</li>
<li>Assuming the horizontal velocity changes (without air resistance it stays $v\cos\alpha$).</li>
<li>Assuming $\vec v = \vec 0$ at the apex: only $v_z = 0$; $v_x$ remains.</li></ul>`
  },
  "ph2_kreisbewegung": {
    title: R`Uniform circular motion and centripetal acceleration`,
    category: R`2.5 Acceleration`,
    type: "herleitung",
    front: R`A point mass moves with constant angular velocity $\omega$ on a circle of radius $r$. Derive $\vec r(t)$, $\vec v(t)$ and $\vec a(t)$. How large is the <b>centripetal acceleration</b>, and where does it point?`,
    back: R`With $\varphi(t) = \omega t + \varphi_0$ (2.36) in the $xy$-plane, origin at the centre of the circle:
$$\vec r(t) = r\begin{pmatrix}\cos(\omega t+\varphi_0)\\ \sin(\omega t+\varphi_0)\\ 0\end{pmatrix}\qquad(2.37)$$
$$\vec v(t) = r\omega\begin{pmatrix}-\sin(\omega t+\varphi_0)\\ \cos(\omega t+\varphi_0)\\ 0\end{pmatrix},\qquad |\vec v| = r\omega\qquad(2.38,\,2.39)$$
$$\vec a(t) = -r\omega^2\begin{pmatrix}\cos(\omega t+\varphi_0)\\ \sin(\omega t+\varphi_0)\\0\end{pmatrix} = -\omega^2\,\vec r(t)\qquad(2.40)$$
<ul><li>$\vec v\perp\vec r$: tangential, constant magnitude, direction rotating.</li>
<li>$\vec a$ always points to the <b>centre</b> (centripetal acceleration):</li></ul>
$$a = r\omega^2 = \frac{v^2}{r}\qquad(2.41)$$`,
    meta: "Script: Section 2.5.3, Eqs. (2.35)–(2.41), Fig. 2.5, pp. 20–22",
    explanation: R`<b>Intuition:</b> So that the body does not continue in a straight line (inertia), its velocity must be constantly “deflected” towards the centre of the circle. This deflection is the centripetal acceleration. It changes only the direction, not the magnitude ($\vec a\perp\vec v$).<br><br>
<b>Dependencies (note: depends on what is held fixed!):</b>
<ul><li>at fixed $\omega$: $a = r\omega^2\propto r$ (merry-go-round: larger acceleration on the outside);</li>
<li>at fixed $v$: $a = v^2/r\propto 1/r$ (car: a tight bend gives a larger acceleration);</li>
<li>at fixed $r$: $a\propto v^2$ or $\propto\omega^2$ (twice as fast gives four times the acceleration).</li></ul>
<b>Connection:</b> By Newton II one needs a <b>centripetal force</b> $F = mv^2/r$ (rope tension, friction, gravitation). In the co-rotating frame it appears as the fictitious “centrifugal force” (Ch. 3.11). The harmonic oscillator is also contained here: each component satisfies $\ddot x = -\omega^2 x$ (Ch. 9).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec r(t) = r\,(\cos\varphi,\ \sin\varphi,\ 0)$ with $\varphi = \omega t+\varphi_0$<em>Polar coordinates with fixed radius $\rho = r$ (2.35), converted into Cartesian components.</em></li>
<li>$\dot{\vec r} = r\dot\varphi\,(-\sin\varphi,\ \cos\varphi,\ 0)$, $\dot\varphi = \omega$<em>Chain rule: $\frac{d}{dt}\cos\varphi(t) = -\sin\varphi\cdot\dot\varphi$.</em></li>
<li>$\vec v\cdot\vec r = r^2\omega(-\sin\varphi\cos\varphi + \cos\varphi\sin\varphi) = 0$<em>Scalar product zero: $\vec v$ is perpendicular to $\vec r$, hence tangential to the circle.</em></li>
<li>$|\vec v| = r\omega\sqrt{\sin^2\varphi+\cos^2\varphi} = r\omega$<em>Magnitude of the velocity, constant in time (2.39).</em></li>
<li>$\ddot{\vec r} = r\omega\cdot\omega\,(-\cos\varphi,\ -\sin\varphi,\ 0) = -\omega^2\vec r$<em>Differentiate once more (with $\dot\omega = 0$): the vector is antiparallel to the position vector, so it points to the centre (2.40).</em></li>
<li>$|\vec a| = \omega^2 r = \frac{(r\omega)^2}{r} = \frac{v^2}{r}$<em>With $\omega = v/r$ the second form (2.41).</em></li>
</ol>`,
    example: R`<b>Earth’s rotation at the equator:</b> $\omega = 2\pi/(86\,164\,\text{s}) = 7{,}29\cdot10^{-5}\,\text{s}^{-1}$ (sidereal day), $r = 6{,}38\cdot10^{6}\,\text{m}$.
$v = r\omega = 465\,\text{m/s}$, $a = r\omega^2 = 0{,}034\,\text{m/s}^2$, i.e. about $0{,}3\,\%$ of $g$. That is why one weighs slightly less at the equator (Ch. 3.10.3.2).<br><br>
<b>Centrifuge:</b> $r = 0{,}10\,\text{m}$, $6000\,\text{rpm}$, so $\omega = 628\,\text{s}^{-1}$: $a = 0{,}1\cdot628^2\,\text{m/s}^2\approx 3{,}9\cdot10^{4}\,\text{m/s}^2\approx 4000\,g$.`,
    counterexample: R`<b>Non-uniform circular motion</b> ($\omega$ changes): then a <b>tangential</b> component $a_\parallel = r\dot\omega$ is added, and $\vec a$ no longer points exactly to the centre (Ch. 2.5.5).<br>
<b>“Outward centrifugal acceleration”</b> does not exist in an inertial frame. If you let go of the rope, you see the stone fly off <i>tangentially</i>, not radially outward.`,
    pitfalls: R`<ul><li>Confusing centripetal (towards the centre, real) and centrifugal (outward, fictitious force in the rotating frame).</li>
<li>Seeing $a\propto r$ and $a\propto1/r$ as a contradiction: it depends on whether $\omega$ or $v$ is constant.</li>
<li>Inserting $\omega$ in rpm instead of rad/s ($\omega = 2\pi n/60\,\text{s}$).</li>
<li>Not placing the origin at the centre of the circle; then $\vec a = -\omega^2\vec r$ does not hold in this form.</li></ul>`
  },
  "ph2_periode_frequenz": {
    title: R`Period, frequency (rotational speed) and angular velocity`,
    category: R`2.5 Acceleration`,
    type: "definition",
    front: R`For uniform rotation, how are the <b>period</b> $T$, the <b>frequency/rotational speed</b> $\nu$, the <b>angular velocity</b> $\omega$ and the path speed $v$ related? What units do they have?`,
    back: R`$$T = \frac{2\pi}{\omega} = \frac{2\pi r}{v}\qquad(2.42)$$
$$\nu \stackrel{\text{def}}{=} \frac1T = \frac{\omega}{2\pi} = \frac{v}{2\pi r}\qquad(2.43)$$
$$\omega = \frac{v}{r} = 2\pi\nu\qquad(2.44)$$
Units:
<ul><li>$[T] = \text{s}$</li>
<li>$[\nu] = 1/\text{s} = \text{Hz}$ (revolutions per second)</li>
<li>$[\omega] = \text{rad/s} = 1/\text{s}$</li></ul>
For a rigid body $\omega$ is the <b>same for all points</b>; the path speed $v = \omega r$, however, depends on the distance $r$ from the axis of rotation.`,
    meta: "Script: Section 2.5.3, Eqs. (2.42)–(2.44) and footnote 9, pp. 21–22",
    explanation: R`<b>Intuition:</b> $\omega$ measures how much <i>angle</i> is swept per unit time, $\nu$ how many <i>whole revolutions</i> per unit time. Since one revolution is $2\pi$ rad, the two differ by exactly $2\pi$.<br><br>
<b>Why use $\omega$ for calculations?</b> In derivatives such as $\frac{d}{dt}\cos(\omega t) = -\omega\sin(\omega t)$, $\omega$ appears without a factor $2\pi$. That is why one almost always calculates with $\omega$ and quotes only measured values in Hz or rpm.<br><br>
<b>Proportionalities:</b> $T\propto1/\omega$; at fixed path speed $T\propto r$; at fixed $\omega$, $v\propto r$ grows, which is why the outer horses on a carousel go fastest.<br><br>
<b>Connection:</b> The same quantities later describe every periodic motion (oscillations, Ch. 9: $\omega_0 = 2\pi/T$), even when nothing rotates in a circle there.`,
    derivation: R`<ol class="fc-steps">
<li>$\varphi(t+T) = \varphi(t) + 2\pi$<em>Definition of the period: after $T$ exactly one full revolution has been covered.</em></li>
<li>$\omega(t+T) + \varphi_0 = \omega t + \varphi_0 + 2\pi\;\Rightarrow\;\omega T = 2\pi$<em>Insert $\varphi = \omega t + \varphi_0$; $\omega t$ and $\varphi_0$ cancel out.</em></li>
<li>$T = \frac{2\pi}{\omega}$<em>Solve for $T$ (2.42).</em></li>
<li>$v\,T = 2\pi r\;\Rightarrow\;T = \frac{2\pi r}{v}$<em>Alternatively: in one period the circumference is traversed at constant speed.</em></li>
<li>$\omega = \frac{2\pi}{T} = \frac{v}{r}$, $\nu = \frac1T = \frac{\omega}{2\pi}$<em>Equate the two expressions for $T$; $\nu$ is the number of revolutions per unit time.</em></li>
</ol>`,
    example: R`<b>Orbital speed of the Earth around the Sun:</b> $r = 1{,}50\cdot10^{11}\,\text{m}$, $T = 1\,\text{a} = 3{,}16\cdot10^{7}\,\text{s}$:
$v = \frac{2\pi r}{T} = \frac{2\pi\cdot1{,}5\cdot10^{11}}{3{,}16\cdot10^{7}}\,\text{m/s}\approx 3{,}0\cdot10^{4}\,\text{m/s} = 30\,\text{km/s}$.<br><br>
<b>Hard disk:</b> $7200\,\text{rpm}$, so $\nu = 120\,\text{Hz}$, $\omega = 754\,\text{rad/s}$, $T = 8{,}3\,\text{ms}$.`,
    counterexample: R`<b>$\omega$ is not an ordinary frequency value:</b> anyone who writes $\omega = 50\,\text{Hz}$ for the mains supply makes an error by a factor of $2\pi$: the mains frequency is $\nu = 50\,\text{Hz}$, the angular frequency $\omega = 314\,\text{s}^{-1}$.`,
    pitfalls: R`<ul><li>Forgetting the factor $2\pi$ between $\omega$ and $\nu$.</li>
<li>Not dividing rpm by 60.</li>
<li>Believing different points of a rigid body have different $\omega$. Only $v = \omega r$ differs.</li></ul>`
  },
  "ph2_omega_vektor": {
    title: R`Angular velocity as a vector: v = ω × ρ`,
    category: R`2.5 Acceleration`,
    type: "gesetz",
    front: R`How does one define the <b>angular velocity as a vector</b> $\vec\omega$? Derive $\vec v = \vec\omega\times\vec\rho$ and the inverse $\vec\omega = \frac{1}{\rho^2}(\vec\rho\times\vec v)$.`,
    back: R`$\vec\omega$ is <b>perpendicular to the plane of the circle</b> (along the axis of rotation) with magnitude $\omega$; the direction follows the <b>right-hand rule</b> (fingers in the direction of rotation, thumb points along $\vec\omega$).<br><br>
With $\vec\rho$ = vector from the centre of the circle (on the axis) to the point mass, we have (2.45, 2.46):
$$v = \omega\rho,\qquad \vec v = \vec\omega\times\vec\rho$$
Inverse, using $\vec a\times(\vec b\times\vec c) = \vec b\,(\vec a\cdot\vec c) - \vec c\,(\vec a\cdot\vec b)$ (2.47):
$$\vec\rho\times\vec v = \rho^2\vec\omega\qquad\Rightarrow\qquad \vec\omega = \frac{1}{\rho^2}(\vec\rho\times\vec v)\qquad(2.48,\,2.49)$$
$\vec\rho,\vec v,\vec\omega$ form a right-handed orthogonal system: $\vec e_v = \vec e_\omega\times\vec e_\rho$ (2.50).`,
    meta: "Script: Section 2.5.4, Eqs. (2.45)–(2.50), Fig. 2.6, pp. 22–24",
    explanation: R`<b>Intuition:</b> A rotation is determined by its <i>axis</i>, its <i>sense of rotation</i> and its <i>rate</i>. A vector along the axis encodes exactly this: the direction gives axis and sense of rotation, the magnitude gives the rate.<br><br>
<b>Independent of the origin on the axis:</b> If the origin lies anywhere on the rotation axis, then $\vec r = \vec\rho + z\,\hat\omega$ and $\vec\omega\times\vec r = \vec\omega\times\vec\rho$, because $\vec\omega\times\hat\omega = \vec 0$. Hence $\vec v = \vec\omega\times\vec r$ also holds for every point of a rigid body (Ch. 8).<br><br>
<b>Magnitude:</b> $|\vec\omega\times\vec r| = \omega r\sin\alpha = \omega\rho$, where $\alpha$ is the angle between the axis and $\vec r$, and $\rho = r\sin\alpha$ is the <b>perpendicular distance from the axis</b>.<br><br>
<b>Connection:</b> The same cross-product pattern recurs in angular momentum $\vec L = \vec r\times\vec p$ (Ch. 5), in torque $\vec M = \vec r\times\vec F$, and in the Coriolis force $-2m\,\vec\omega\times\vec v'$ (Ch. 3.11).`,
    derivation: R`<ol class="fc-steps">
<li>$|\vec\omega\times\vec\rho| = \omega\rho\sin90^\circ = \omega\rho = v$<em>$\vec\omega$ is perpendicular to the plane of the circle and $\vec\rho$ lies in it: the magnitude agrees with (2.45).</em></li>
<li>$\vec\omega\times\vec\rho\perp\vec\rho$ and $\perp\vec\omega$, hence tangential<em>The cross product is perpendicular to both factors and therefore lies in the plane of the circle, tangential to it. The right-hand rule gives the correct sense of rotation. So $\vec v = \vec\omega\times\vec\rho$ (2.46).</em></li>
<li>$\vec\rho\times\vec v = \vec\rho\times(\vec\omega\times\vec\rho)$<em>Cross from the left with $\vec\rho$ in order to isolate $\vec\omega$.</em></li>
<li>$= \vec\omega\,(\vec\rho\cdot\vec\rho) - \vec\rho\,(\vec\rho\cdot\vec\omega)$<em>“BAC-CAB” rule (2.47) with $\vec a = \vec\rho$, $\vec b = \vec\omega$, $\vec c = \vec\rho$.</em></li>
<li>$= \rho^2\,\vec\omega - \vec\rho\cdot 0$<em>$\vec\rho\cdot\vec\rho = \rho^2$; $\vec\rho\perp\vec\omega$, so $\vec\rho\cdot\vec\omega = 0$.</em></li>
<li>$\vec\omega = \frac{1}{\rho^2}(\vec\rho\times\vec v)$<em>Divide by $\rho^2$ (2.49).</em></li>
</ol>`,
    example: R`<b>Earth’s rotation in Zurich</b> (geographic latitude $\lambda\approx47{,}4^\circ$): $\vec\omega$ points from the south to the north pole, $\omega = 7{,}29\cdot10^{-5}\,\text{s}^{-1}$. The distance from the Earth’s axis is $\rho = R\cos\lambda = 6{,}37\cdot10^{6}\cdot0{,}677\,\text{m} = 4{,}31\cdot10^{6}\,\text{m}$, so
$v = \omega\rho\approx 314\,\text{m/s}$, compared with $465\,\text{m/s}$ at the equator and $0$ at the poles.`,
    counterexample: R`<b>Finite rotation angles are not vectors:</b> rotate a book first by $90^\circ$ about the $x$-axis, then by $90^\circ$ about the $y$-axis, and compare with the reverse order. The result differs, so finite rotations do not add commutatively like vectors. Only <i>infinitesimal</i> rotations, and hence $\vec\omega = d\vec\varphi/dt$, behave like vectors.<br>
<b>Reflection:</b> $\vec\omega$ is an <i>axial</i> vector (pseudovector). Under a reflection the sense of rotation reverses, so $\vec\omega$ behaves differently from a “true” vector such as $\vec v$.`,
    pitfalls: R`<ul><li>Swapping the order in the cross product: $\vec\rho\times\vec\omega = -\vec v$.</li>
<li>Confusing $\vec r$ (from the origin) with $\vec\rho$ (perpendicular distance from the axis). For the magnitude, the perpendicular distance always counts.</li>
<li>Using the left hand instead of the right.</li>
<li>Assuming $\vec\omega$ points in the direction of motion; it points along the axis.</li></ul>`
  },
  "ph2_winkelbeschleunigung": {
    title: R`Angular acceleration: tangential and centripetal components`,
    category: R`2.5 Acceleration`,
    type: "herleitung",
    front: R`A point mass moves on a circle (radius $r$) with <b>variable</b> angular velocity $\omega(t)$. What is the <b>angular acceleration</b>? Derive the decomposition $\vec a = \vec a_\parallel + \vec a_\perp$ and $|\vec a| = r\sqrt{\alpha^2+\omega^4}$.`,
    back: R`Angular acceleration:
$$\alpha := \dot\omega = \ddot\varphi\qquad(2.51)$$
With $\vec r = r(\cos\varphi(t),\,\sin\varphi(t))$ (2.52):
$$\vec v = r\dot\varphi\begin{pmatrix}-\sin\varphi\\ \cos\varphi\end{pmatrix},\qquad v = r\omega(t)\qquad(2.53,\,2.54)$$
$$\vec a = \underbrace{r\ddot\varphi\begin{pmatrix}-\sin\varphi\\ \cos\varphi\end{pmatrix}}_{\vec a_\parallel} \underbrace{-\,r\dot\varphi^2\begin{pmatrix}\cos\varphi\\ \sin\varphi\end{pmatrix}}_{\vec a_\perp}\qquad(2.55)$$
$$a_\parallel = r\ddot\varphi = r\alpha,\qquad |a_\perp| = r\dot\varphi^2 = r\omega^2,\qquad |\vec a| = r\sqrt{\alpha^2+\omega^4}\qquad(2.56\text{–}2.58)$$
$\vec a_\parallel$ is tangential and changes the speed; $\vec a_\perp$ is centripetal and changes the direction.`,
    meta: "Script: Section 2.5.5, Eqs. (2.51)–(2.58), pp. 24–25",
    explanation: R`<b>Intuition:</b> Now two things happen at the same time. The body becomes faster or slower along its path (tangential, as on a straight stretch), and it must still be forced onto the circle (centripetal). The two parts are perpendicular to each other, so they add like the legs of a right triangle.<br><br>
<b>Dependencies:</b> $a_\parallel\propto\alpha$ (linear in the angular acceleration), but $a_\perp\propto\omega^2$ (quadratic). When starting from rest, $a_\parallel$ dominates at first; as $\omega$ grows, the centripetal component overtakes it, once $\omega^2>\alpha$.<br><br>
<b>Translation ↔ rotation analogy:</b> $\varphi\leftrightarrow x$, $\omega\leftrightarrow v$, $\alpha\leftrightarrow a$. For constant $\alpha$ the analogue is therefore $\omega = \omega_0 + \alpha t$ and $\varphi = \varphi_0 + \omega_0t + \tfrac12\alpha t^2$.<br><br>
<b>Connection:</b> This is the special case of the general decomposition into tangential and normal acceleration (2.5.6) with radius of curvature $\rho = r$.`,
    derivation: R`<ol class="fc-steps">
<li>$\vec r = r\,(\cos\varphi,\ \sin\varphi)$, $\varphi = \varphi(t)$<em>Circular path with fixed $r$, but arbitrary angular history (2.52, $\varphi_0 = 0$).</em></li>
<li>$\vec v = r\dot\varphi\,(-\sin\varphi,\ \cos\varphi)$<em>Chain rule as for uniform circular motion; now $\dot\varphi = \omega(t)$ is time-dependent (2.53).</em></li>
<li>$\vec a = \frac{d}{dt}\left[r\dot\varphi\right]\,(-\sin\varphi,\ \cos\varphi) + r\dot\varphi\,\frac{d}{dt}(-\sin\varphi,\ \cos\varphi)$<em>Product rule: both the prefactor $r\dot\varphi$ and the direction vector depend on $t$.</em></li>
<li>$= r\ddot\varphi\,(-\sin\varphi,\ \cos\varphi) + r\dot\varphi\cdot\dot\varphi\,(-\cos\varphi,\ -\sin\varphi)$<em>First term: derivative of the magnitude (tangential). Second term: derivative of the direction; the chain rule gives another $\dot\varphi$ (2.55).</em></li>
<li>$\vec a_\parallel\cdot\vec a_\perp \propto \sin\varphi\cos\varphi - \cos\varphi\sin\varphi = 0$<em>The two parts are perpendicular to each other.</em></li>
<li>$|\vec a| = \sqrt{(r\ddot\varphi)^2+(r\dot\varphi^2)^2} = r\sqrt{\alpha^2+\omega^4}$<em>Pythagoras for orthogonal components (2.58).</em></li>
</ol>`,
    example: R`A wheel of radius $r = 0{,}30\,\text{m}$ is accelerated from rest with $\alpha = 2\,\text{rad/s}^2$. After $t = 2\,\text{s}$, $\omega = \alpha t = 4\,\text{rad/s}$:<br>
$a_\parallel = r\alpha = 0{,}6\,\text{m/s}^2$, $a_\perp = r\omega^2 = 4{,}8\,\text{m/s}^2$, $|\vec a| = 0{,}3\sqrt{4+256}\,\text{m/s}^2 = 4{,}84\,\text{m/s}^2$.<br>
At the start ($t = 0$, $\omega = 0$), by contrast, $\vec a = \vec a_\parallel$ is purely tangential.`,
    counterexample: R`<b>“Zero tangential acceleration means no acceleration” is false:</b> at constant $\omega$, $a_\parallel = 0$, but $a_\perp = r\omega^2\neq0$.<br>
<b>“Zero centripetal acceleration means no circular motion”:</b> at the moment of starting ($\omega = 0$), $a_\perp = 0$, although the body stays on the circle; it just is not yet moving at that instant.`,
    pitfalls: R`<ul><li>Confusing the symbol $\alpha$ for angular acceleration with an angle $\alpha$ (e.g. the launch angle).</li>
<li>Adding $|\vec a| = r(\alpha + \omega^2)$ instead of combining quadratically (Pythagoras).</li>
<li>Units: $[\alpha] = \text{rad/s}^2$, $[a] = \text{m/s}^2$. The factor $r$ makes the difference.</li>
<li>Forgetting the $\omega^4$ under the root: $a_\perp = r\omega^2$, so its square is $r^2\omega^4$.</li></ul>`
  },
  "ph2_allg_beschleunigung": {
    title: R`General path: tangential and normal acceleration, radius of curvature`,
    category: R`2.5 Acceleration`,
    type: "herleitung",
    front: R`Decompose the acceleration on an <b>arbitrary curved path</b> into a component parallel and a component perpendicular to the velocity. Show that $\vec a = \dot v\,\vec e_\parallel + \frac{v^2}{\rho}\vec e_\perp$. What is $\rho$?`,
    back: R`With the local unit vector $\vec e_\parallel(t)$ in the direction of motion, $\vec v = v\,\vec e_\parallel$ (2.59) and
$$\vec a = \frac{dv}{dt}\vec e_\parallel + v\frac{d\vec e_\parallel}{dt}\qquad(2.60)$$
Since $\vec e_\parallel$ is a unit vector, $\dot{\vec e}_\parallel\perp\vec e_\parallel$ (2.61, 2.62). With $|\dot{\vec e}_\parallel| = \frac{d\varphi}{dt} = \frac{v}{\rho}$ (2.67, 2.68):
$$\boxed{\vec a(t) = \dot v\,\vec e_\parallel + \frac{v^2}{\rho}\,\vec e_\perp}\qquad(2.71)$$
<ul><li><b>Tangential acceleration</b> $|a_\parallel| = |dv/dt|$ (2.66): changes the speed.</li>
<li><b>Normal acceleration</b> $a_\perp = v^2/\rho$ (2.70): changes the direction; $\vec e_\perp$ points to the centre of curvature.</li>
<li>$\rho$: <b>instantaneous radius of curvature</b>, the radius of the <b>osculating circle</b> (Fig. 2.9). In vector form $\dot{\vec e}_\parallel = \vec\omega\times\vec e_\parallel$ (2.69).</li></ul>
An acceleration is present whenever the magnitude, the direction, or both change.`,
    meta: "Script: Section 2.5.6, Eqs. (2.59)–(2.71), Figs. 2.7–2.9, pp. 25–28",
    explanation: R`<b>Intuition:</b> Every short piece of an arbitrary curve looks like a piece of a circle, the <b>osculating circle</b>. On this circle the formulas of circular motion hold locally: the change of direction costs $v^2/\rho$, as in circular motion with radius $\rho$, and the change of speed costs $\dot v$, as on a straight line.<br><br>
<b>Limiting cases:</b> straight path: $\rho\to\infty$, so $a_\perp = 0$. Circular path: $\rho = r$ and $\dot v = r\alpha$; this is exactly Section 2.5.5.<br><br>
<b>Dependencies:</b> $a_\perp\propto v^2$ and $\propto1/\rho$. That is why speed in a bend is so critical: the maximum lateral acceleration (static friction, Ch. 3.9.4) limits $v_\text{max} = \sqrt{a_\text{max}\rho}$.<br><br>
<b>Connection:</b> The decomposition is purely kinematic. Dynamically it means: only the force component along the path does work and changes the kinetic energy (Ch. 4), while the normal component only steers.`,
    derivation: R`<ol class="fc-steps">
<li>$\vec v = v\,\vec e_\parallel$<em>Velocity as magnitude times direction; both may be time-dependent.</em></li>
<li>$\vec a = \dot v\,\vec e_\parallel + v\,\dot{\vec e}_\parallel$<em>Product rule (2.60).</em></li>
<li>$\vec e_\parallel\cdot\vec e_\parallel = 1\;\Rightarrow\;2\,\vec e_\parallel\cdot\dot{\vec e}_\parallel = 0$<em>A unit vector has constant length; differentiating gives zero (2.61). Hence $\dot{\vec e}_\parallel$ is perpendicular to $\vec e_\parallel$ (2.62).</em></li>
<li>$|d\vec e_\parallel| = |\vec e_\parallel|\,d\varphi = d\varphi$<em>The unit vector rotates by the small angle $d\varphi$ in the time $dt$; its tip moves by $1\cdot d\varphi$ (Figs. 2.8, 2.67).</em></li>
<li>$ds = \rho\,d\varphi\;\Rightarrow\;\frac{d\varphi}{dt} = \frac{1}{\rho}\frac{ds}{dt} = \frac{v}{\rho}$<em>On the osculating circle of radius $\rho$, the arc $ds$ corresponds to the angle $d\varphi = ds/\rho$ (2.68).</em></li>
<li>$v\,\dot{\vec e}_\parallel = v\cdot\frac{v}{\rho}\,\vec e_\perp = \frac{v^2}{\rho}\vec e_\perp$<em>Magnitude and direction (perpendicular, towards the centre of curvature) of the second term (2.70). Together this gives (2.71).</em></li>
</ol>`,
    example: R`<b>Radius of curvature at the apex of a projectile parabola:</b> there $\vec v = (v\cos\alpha, 0)$ is horizontal, and $\vec a = \vec g$ is perpendicular to it. So $\dot v = 0$ and $g = a_\perp = \frac{v^2\cos^2\alpha}{\rho}$, hence $\rho = \frac{v^2\cos^2\alpha}{g}$.<br>
With $v = 20\,\text{m/s}$, $\alpha = 30^\circ$: $\rho = \frac{400\cdot0{,}75}{9{,}81}\,\text{m} = 30{,}6\,\text{m}$.<br><br>
<b>Limit in a bend:</b> with maximum $a_\perp = 8\,\text{m/s}^2$ (dry road) and $\rho = 50\,\text{m}$: $v_\text{max} = \sqrt{8\cdot50}\,\text{m/s} = 20\,\text{m/s} = 72\,\text{km/h}$.`,
    counterexample: R`<b>$\rho$ is not the distance to the origin:</b> for an elliptical orbit around a focus, the radius of curvature at perihelion is not equal to the distance $r$ from the focus. $\rho$ is a local property of the curve; $r$ depends on the choice of origin.<br>
<b>Inflection point of a curve</b> (e.g. an S-bend): there $\rho\to\infty$, so $a_\perp = 0$, although the path as a whole is curved.`,
    pitfalls: R`<ul><li>Assuming $\vec a$ is parallel to $\vec v$ just because the speed changes. There is almost always also a normal component.</li>
<li>Choosing the direction of $\vec e_\perp$ wrongly: it points to the <b>concave</b> side, to the centre of curvature.</li>
<li>Equating $\dot v$ (derivative of the magnitude) with $|\vec a|$.</li>
<li>Confusing $\rho$ with $r$ (length of the position vector).</li></ul>`
  },

  "ph2_relativbewegung": {
    title: R`Relative motion: adding velocities (boat on a river, rain)`,
    category: R`2.4 Velocity`,
    type: "beispiel",
    front: R`A boat travels at $v' = 2\,\text{m/s}$ relative to the water across a $60\,\text{m}$ wide river that flows at $u = 1\,\text{m/s}$. (a) In which direction must it steer to arrive exactly opposite, and how long does it take? (b) How does it cross the river fastest? What is the general law?`,
    back: R`<b>Galilean addition</b> of velocities (frame $K'$ moves with $\vec u$ relative to $K$, cf. $\vec r' = \vec r-\vec u t$, Fig. 3.8):
$$\vec v = \vec v\,'+\vec u,\qquad\vec v_{A\,\text{rel}\,B} = \vec v_A-\vec v_B$$
<b>(a) Straight across:</b> the current must be compensated: $v'\sin\alpha = u$ (bow tilted upstream):
$$\sin\alpha = \frac u{v'} = 0{,}5\Rightarrow\alpha = 30^\circ,\qquad t = \frac{b}{v'\cos\alpha} = \frac{60}{1{,}73}\,\text{s} = 34{,}6\,\text{s}$$
<b>(b) Fastest crossing:</b> bow perpendicular to the bank, $t = b/v' = 30\,\text{s}$; the boat is then carried downstream by $u\,t = 30\,\text{m}$.<br>
Without $v'\gt u$, (a) is impossible.`,
    meta: "Supplement (typical exam problem); builds on Section 2.4 and Section 3.5 (Fig. 3.8, inertial frames)",
    explanation: R`<b>Intuition:</b> Motions in two frames of reference add like vectors: the boat moves relative to the water, the water relative to the bank. The transverse motion determines the crossing time, the longitudinal motion the drift; the components are independent (as in projectile motion).<br><br>
<b>Dependencies:</b> The crossing time depends only on the velocity component transverse to the river: $t = b/(v'\cos\alpha)$. Any tilt against the current lengthens the trip.<br><br>
<b>Relative velocity:</b> $\vec v_A-\vec v_B$ is the velocity with which B sees body A. Meeting and overtaking problems often become trivial in the frame of one of the bodies.<br><br>
<b>Connection:</b> Galilean transformation between inertial frames (3.5): accelerations and forces are the same in all of them. In the centre-of-mass frame (6.4) collisions simplify. For speeds close to the speed of light the addition no longer holds (relativity theory).`,
    derivation: R`Rain on a moving car (rain falls vertically at $8\,\text{m/s}$, the car drives at $20\,\text{m/s}$):
<ol class="fc-steps">
<li>$\vec v_\text{Regen} = (0,-8)\,\text{m/s}$, $\vec v_\text{Auto} = (20,0)\,\text{m/s}$<em>Both in the ground frame.</em></li>
<li>$\vec v_\text{Regen rel Auto} = \vec v_\text{Regen}-\vec v_\text{Auto} = (-20,-8)\,\text{m/s}$<em>Relative velocity.</em></li>
<li>$|\vec v_\text{rel}| = \sqrt{400+64} = 21{,}5\,\text{m/s}$<em>Magnitude.</em></li>
<li>$\tan\beta = 20/8\Rightarrow\beta = 68^\circ$ from the vertical<em>The rain appears to come obliquely from the front.</em></li>
</ol>`,
    example: R`<b>Meeting point:</b> two trains start $10\,\text{km}$ apart and head towards each other at $25$ and $15\,\text{m/s}$. In the frame of one, the other approaches at $40\,\text{m/s}$: they meet after $250\,\text{s}$, $6{,}25\,\text{km}$ from the starting point of the faster one.<br>
<b>Aircraft in a crosswind:</b> airspeed $250\,\text{m/s}$, crosswind $30\,\text{m/s}$: crab angle $\arcsin(0{,}12) = 6{,}9^\circ$.`,
    counterexample: R`<b>Accelerated frames of reference:</b> on a merry-go-round the simple addition does not hold for accelerations any more; centrifugal and Coriolis terms are added (3.11). And for light, velocities do not simply add: $c+u$ is never observed.`,
    pitfalls: R`<ul><li>Forming the relative velocity with the wrong sign ($\vec v_B-\vec v_A$ instead of $\vec v_A-\vec v_B$).</li>
<li>Adding magnitudes instead of vectors.</li>
<li>Using the full boat speed instead of its transverse component when computing the crossing time.</li></ul>`
  }
};
})();
