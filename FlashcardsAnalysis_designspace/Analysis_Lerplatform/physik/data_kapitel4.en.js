/* ==========================================================================
   PHYSICS I – CHAPTER 4 (English): Work and energy
   Vector analysis (surface and volume elements, gradient, flux, divergence, curl, Gauss, Stokes),
   work, power, kinetic and potential energy, conservative forces, equilibrium, energy conservation, looping
   Script Physics I – Prof. K. Ensslin, ETH Zurich, HS 2025
   English translation of data_kapitel4.js. Formulas, HTML and ids are identical.
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_EN_KAPITEL_4 = {
  "ph4_flaechenelement": {
    title: R`Line element and oriented area element (with Jacobian determinants)`,
    category: R`4.1 A trip into vector analysis`,
    type: "definition",
    front: R`How are the <b>line element</b> $d\vec r$ and the <b>oriented area element</b> $d\vec A$ defined, in Cartesian coordinates and for a surface described by parameters $(u,v)$? What is a Jacobian determinant?`,
    back: R`<b>Line element</b> along a curve:
$$d\vec s\equiv d\vec r = \begin{pmatrix}dx\\dy\\dz\end{pmatrix}\qquad(4.1)$$
<b>Oriented area element</b> (differential area vector): stands <b>perpendicular</b> to the surface patch, magnitude = area. Cartesian:
$$d\vec A = \begin{pmatrix}dy\,dz\\dz\,dx\\dx\,dy\end{pmatrix}\qquad(4.2)$$
<b>Parametrised surface</b> $\vec r = \vec r(u,v)$ (4.3):
$$d\vec A = \begin{pmatrix}\dfrac{\partial(y,z)}{\partial(u,v)}\\[4pt]\dfrac{\partial(z,x)}{\partial(u,v)}\\[4pt]\dfrac{\partial(x,y)}{\partial(u,v)}\end{pmatrix}du\,dv,\qquad \frac{\partial(y,z)}{\partial(u,v)} = \begin{vmatrix}\partial_uy&\partial_vy\\\partial_uz&\partial_vz\end{vmatrix} = \frac{\partial y}{\partial u}\frac{\partial z}{\partial v}-\frac{\partial y}{\partial v}\frac{\partial z}{\partial u}\qquad(4.4,\,4.5)$$
This is the same as $d\vec A = \left(\dfrac{\partial\vec r}{\partial u}\times\dfrac{\partial\vec r}{\partial v}\right)du\,dv$.`,
    meta: R`Script: sections 4.1.1–4.1.2.1, Eqs. (4.1)–(4.5), Figs. 4.1–4.2, pp. 93–95`,
    explanation: R`<b>Intuition:</b> For flux calculations a surface is determined not only by its size but also by its <i>orientation</i>. How much rain falls through a window depends on how the window is held relative to the rain. That is why each small patch of surface gets a vector perpendicular to it.<br><br>
<b>Where do the Jacobian determinants come from?</b> If you change $u$ by $du$ and $v$ by $dv$, the vectors $\partial_u\vec r\,du$ and $\partial_v\vec r\,dv$ span a small parallelogram. Its area vector is their cross product, and the components of the cross product are exactly the three $2\times2$ determinants.<br><br>
<b>Orientation:</b> For closed surfaces $d\vec A$ points outward by convention. For open surfaces one chooses a direction linked to the sense of traversal of the boundary by the right-hand rule (important for Stokes, 4.1.8).<br><br>
<b>Connection:</b> $d\vec r$ is needed for work ($\int\vec F\cdot d\vec r$), $d\vec A$ for flux ($\int\vec F\cdot d\vec A$), and hence for the Gauss and Stokes theorems.`,
    derivation: R`Area vector of a parametrised surface via the cross product:
<ol class="fc-steps">
<li>$d\vec r_u = \dfrac{\partial\vec r}{\partial u}du,\quad d\vec r_v = \dfrac{\partial\vec r}{\partial v}dv$<em>Small steps along the parameter lines; they span a (nearly flat) parallelogram.</em></li>
<li>$d\vec A = d\vec r_u\times d\vec r_v$<em>Magnitude of the cross product = area of the parallelogram, direction perpendicular to it.</em></li>
<li>$(d\vec A)_x = \left(\dfrac{\partial y}{\partial u}\dfrac{\partial z}{\partial v}-\dfrac{\partial z}{\partial u}\dfrac{\partial y}{\partial v}\right)du\,dv = \dfrac{\partial(y,z)}{\partial(u,v)}du\,dv$<em>$x$-component of a cross product: $a_yb_z-a_zb_y$ (4.5).</em></li>
<li>$(d\vec A)_y = \dfrac{\partial(z,x)}{\partial(u,v)}du\,dv,\quad(d\vec A)_z = \dfrac{\partial(x,y)}{\partial(u,v)}du\,dv$<em>Continue cyclically; this gives (4.4).</em></li>
<li>$u = y,\ v = z,\ x = \text{const}:\ d\vec A = (dy\,dz,\,0,\,0)$<em>Check: for a patch parallel to the $yz$-plane one obtains the first component of (4.2).</em></li>
</ol>`,
    example: R`<b>Plane $z = 0$</b> with $u = x$, $v = y$: $\vec r = (u,v,0)$, $\partial_u\vec r = (1,0,0)$, $\partial_v\vec r = (0,1,0)$, so $d\vec A = (0,0,1)\,dx\,dy = \vec e_z\,dx\,dy$.<br><br>
<b>Cylinder surface</b> (radius $R$) with $u = \varphi$, $v = z$: $\vec r = (R\cos\varphi, R\sin\varphi, z)$, $\partial_\varphi\vec r\times\partial_z\vec r = (R\cos\varphi, R\sin\varphi, 0)$, so $d\vec A = \hat\rho\,R\,d\varphi\,dz$ (radially outward). Lateral area: $2\pi R\cdot h$ ✓.`,
    counterexample: R`<b>Order of the parameters:</b> Swapping $u$ and $v$ reverses $d\vec A$ (the cross product is antisymmetric). The magnitude stays the same, but a flux gets the wrong sign. For a closed surface you must check that $d\vec A$ points outward.`,
    pitfalls: R`<ul><li>Confusing $dA$ (magnitude) with $d\vec A$ (vector).</li>
<li>Assigning the components in (4.2) wrongly: the $x$-component belongs to the area $dy\,dz$, which is perpendicular to $x$.</li>
<li>Not checking the orientation (outward) for closed surfaces.</li></ul>`
  },
  "ph4_kugel_raumwinkel": {
    title: R`Area element of the sphere, sphere surface 4πr² and solid angle`,
    category: R`4.1 A trip into vector analysis`,
    type: "herleitung",
    front: R`Derive for a sphere (radius $r$, polar angle $\vartheta$, azimuth $\varphi$) the area element $d\vec A = \hat r\,r^2\sin\vartheta\,d\vartheta\,d\varphi$ and the surface $4\pi r^2$. What is the <b>solid angle</b>, and how large is it at most?`,
    back: R`Spherical coordinates with $r = R = \text{const}$, $u = \vartheta$, $v = \varphi$ (4.6–4.8):
$$\vec r = \begin{pmatrix}r\sin\vartheta\cos\varphi\\ r\sin\vartheta\sin\varphi\\ r\cos\vartheta\end{pmatrix}$$
Jacobian determinants (4.9–4.11): $r^2\sin^2\vartheta\cos\varphi$, $r^2\sin^2\vartheta\sin\varphi$, $r^2\sin\vartheta\cos\vartheta$, so
$$d\vec A = \hat r\;r^2\sin\vartheta\,d\vartheta\,d\varphi,\qquad dA = r^2\sin\vartheta\,d\vartheta\,d\varphi = -r^2\,d\cos\vartheta\,d\varphi\qquad(4.12\text{–}4.17)$$
The area vector points radially outward. Surface:
$$A = r^2\int_{-1}^{1}d\cos\vartheta\int_0^{2\pi}d\varphi = 4\pi r^2\qquad(4.18)$$
<b>Solid angle</b> (projection onto the unit sphere):
$$d\Omega := \frac{dA}{r^2} = d\cos\vartheta\,d\varphi,\qquad \Omega_\text{max} = 4\pi,\qquad[\Omega] = 1\,\text{sr}\qquad(4.19\text{–}4.21)$$`,
    meta: R`Script: section 4.1.2.2, Eqs. (4.6)–(4.24), Figs. 4.3–4.4, pp. 95–98`,
    explanation: R`<b>Intuition:</b> On the sphere a small "rectangle" is $r\,d\vartheta$ high (along the meridian) and $r\sin\vartheta\,d\varphi$ wide (along the circle of latitude with radius $\rho = r\sin\vartheta$, 4.22). Near the poles the circles of latitude become small, hence the factor $\sin\vartheta$.<br><br>
<b>Why $d\cos\vartheta$?</b> With $\mu = \cos\vartheta$ we have $dA = r^2\,d\mu\,d\varphi$, uniform in $\mu$. Strips of equal width in $\cos\vartheta$ have equal area (Archimedes: a spherical zone has the same area as the lateral surface of the circumscribed cylinder of the same height). The minus sign in (4.17) disappears when you integrate from $\mu = -1$ to $+1$.<br><br>
<b>Solid angle as the 3D analogue of the radian:</b> Plane angle = arc/radius (rad, full circle $2\pi$), solid angle = area/radius² (sr, full sphere $4\pi$).<br><br>
<b>Connection:</b> Because the sphere's surface grows $\propto r^2$, every "flux" from a point source spreads over $4\pi r^2$. This is the origin of the $1/r^2$ laws (Coulomb, gravitation, light intensity).`,
    derivation: R`<ol class="fc-steps">
<li>$\partial_\vartheta\vec r = r(\cos\vartheta\cos\varphi,\ \cos\vartheta\sin\varphi,\ -\sin\vartheta)$<em>Derivative of the spherical coordinates with respect to the polar angle.</em></li>
<li>$\partial_\varphi\vec r = r(-\sin\vartheta\sin\varphi,\ \sin\vartheta\cos\varphi,\ 0)$<em>Derivative with respect to the azimuth.</em></li>
<li>$\dfrac{\partial(y,z)}{\partial(\vartheta,\varphi)} = r\cos\vartheta\sin\varphi\cdot0 - r\sin\vartheta\cos\varphi\cdot(-r\sin\vartheta) = r^2\sin^2\vartheta\cos\varphi$<em>First Jacobian determinant (4.9); analogously (4.10), (4.11).</em></li>
<li>$d\vec A = r^2\sin\vartheta\,(\sin\vartheta\cos\varphi,\ \sin\vartheta\sin\varphi,\ \cos\vartheta)\,d\vartheta\,d\varphi = \hat r\,r^2\sin\vartheta\,d\vartheta\,d\varphi$<em>Factor out $r^2\sin\vartheta$; the remainder is the radial unit vector (4.12, 4.13).</em></li>
<li>$d\cos\vartheta = -\sin\vartheta\,d\vartheta$<em>Substitution (4.15, 4.16).</em></li>
<li>$A = r^2\int_{-1}^{1}d\mu\int_0^{2\pi}d\varphi = r^2\cdot2\cdot2\pi = 4\pi r^2$<em>Reverse the integration direction in $\mu = \cos\vartheta$ so the minus sign disappears (4.18).</em></li>
</ol>`,
    example: R`<b>Spherical cap</b> up to polar angle $\vartheta_0$: $A = 2\pi r^2(1-\cos\vartheta_0)$, solid angle $\Omega = 2\pi(1-\cos\vartheta_0)$.<br>
The northern hemisphere ($\vartheta_0 = 90^\circ$) has $\Omega = 2\pi$. The Moon in the sky (angular radius $0{,}26^\circ = 4{,}5\cdot10^{-3}\,\text{rad}$) occupies $\Omega\approx\pi\vartheta_0^2 = 6{,}4\cdot10^{-5}\,\text{sr}$.<br><br>
<b>Earth's surface:</b> $4\pi(6{,}371\cdot10^{6}\,\text{m})^2 = 5{,}1\cdot10^{14}\,\text{m}^2$.`,
    counterexample: R`<b>Wrong: $dA = r^2\,d\vartheta\,d\varphi$</b> (without $\sin\vartheta$). That would give the surface $r^2\cdot\pi\cdot2\pi = 2\pi^2r^2\approx19{,}7\,r^2$ instead of $4\pi r^2\approx12{,}6\,r^2$, because the narrow strips near the poles would be counted too wide.`,
    pitfalls: R`<ul><li>Forgetting the factor $\sin\vartheta$.</li>
<li>Mixing up the limits: $\vartheta\in[0,\pi]$, $\varphi\in[0,2\pi]$ (not both $2\pi$).</li>
<li>Confusing the polar angle $\vartheta$ (measured from the North Pole) with geographic latitude ($90^\circ-\vartheta$).</li>
<li>Not compensating the sign in the substitution $d\cos\vartheta$ by reversing the limits.</li></ul>`
  },
  "ph4_volumenelement": {
    title: R`Volume element: Cartesian and in spherical coordinates`,
    category: R`4.1 A trip into vector analysis`,
    type: "definition",
    front: R`How is the <b>volume element</b> $dV$ defined (scalar triple product), and what is it in spherical coordinates? Use it to derive the volume of a sphere.`,
    back: R`<b>Scalar triple product</b> of the area vector and the third edge vector:
$$dV := (d\vec x\times d\vec y)\cdot d\vec z\qquad(4.25)$$
Strictly speaking it is a trivector, but under rotations of the coordinate system it behaves like a scalar. Cartesian:
$$dV = dx\,dy\,dz\qquad(4.26)$$
<b>Spherical coordinates:</b> edge $dr$ radial, times the area element $r^2\sin\vartheta\,d\vartheta\,d\varphi$ of the spherical shell:
$$dV = r^2\sin\vartheta\,dr\,d\vartheta\,d\varphi = r^2\,dr\,d\Omega$$
Volume of a sphere: $V = \int_0^R r^2dr\int d\Omega = \frac{R^3}{3}\cdot4\pi = \frac43\pi R^3$.`,
    meta: R`Script: section 4.1.3, Eqs. (4.25)–(4.26), Fig. 4.5, p. 98; spherical coordinates Appendix 11.2.8`,
    explanation: R`<b>Intuition:</b> The scalar triple product of three vectors is the volume of the parallelepiped they span. For three perpendicular edges $dx$, $dy$, $dz$ it is simply the product.<br><br>
<b>Curvilinear coordinates:</b> In spherical coordinates a volume element is a "curved cube" with edges $dr$, $r\,d\vartheta$, $r\sin\vartheta\,d\varphi$. Their product gives $dV$. The factor $r^2\sin\vartheta$ is the Jacobian determinant of the transformation $(r,\vartheta,\varphi)\to(x,y,z)$.<br><br>
<b>Dependencies:</b> A spherical shell of thickness $dr$ has volume $4\pi r^2dr\propto r^2$: the outside holds much more volume than the inside. This matters for density distributions (Ch. 7.4: field of a homogeneous sphere, $M(r)\propto r^3$).<br><br>
<b>Connection:</b> Volume integrals give mass and centre of mass ($M = \int\rho\,dV$, Ch. 8), moments of inertia, and the Gauss theorem (4.1.6).`,
    derivation: R`<ol class="fc-steps">
<li>Edges: $d\vec r_r = \hat r\,dr$, $d\vec r_\vartheta = \hat\vartheta\,r\,d\vartheta$, $d\vec r_\varphi = \hat\varphi\,r\sin\vartheta\,d\varphi$<em>One step in each coordinate at a time; the unit vectors are pairwise perpendicular.</em></li>
<li>$dV = (d\vec r_r\times d\vec r_\vartheta)\cdot d\vec r_\varphi$<em>Triple product, analogous to (4.25).</em></li>
<li>$= dr\cdot r\,d\vartheta\cdot r\sin\vartheta\,d\varphi\,(\hat r\times\hat\vartheta)\cdot\hat\varphi = r^2\sin\vartheta\,dr\,d\vartheta\,d\varphi$<em>For a right-handed orthonormal system $(\hat r\times\hat\vartheta)\cdot\hat\varphi = 1$.</em></li>
<li>$V = \int_0^R r^2dr\int_{-1}^1d\cos\vartheta\int_0^{2\pi}d\varphi$<em>The integrals separate because the limits are constant.</em></li>
<li>$= \dfrac{R^3}{3}\cdot2\cdot2\pi = \dfrac43\pi R^3$<em>Volume of the sphere.</em></li>
</ol>`,
    example: R`<b>Mass of the Earth from the mean density</b> $\bar\rho = 5{,}51\cdot10^{3}\,\text{kg/m}^3$: $M = \frac43\pi R^3\bar\rho = \frac43\pi(6{,}371\cdot10^{6})^3\cdot5510\,\text{kg} = 5{,}97\cdot10^{24}\,\text{kg}$ ✓.<br><br>
<b>Spherical shell</b> between $r = 0{,}9R$ and $R$: $\frac{V}{V_\text{sphere}} = 1 - 0{,}9^3 = 27\,\%$. The outermost 10 % of the radius contains over a quarter of the volume.`,
    counterexample: R`<b>Naive volume element</b> $dV = dr\,d\vartheta\,d\varphi$ would give $R\cdot\pi\cdot2\pi = 2\pi^2R$ for the sphere, not even the right dimension (length instead of length³). The Jacobian factor $r^2\sin\vartheta$ is indispensable.`,
    pitfalls: R`<ul><li>Forgetting the Jacobian factor in curvilinear coordinates.</li>
<li>In cylindrical coordinates forgetting the factor $\rho$: $dV = \rho\,d\rho\,d\varphi\,dz$.</li>
<li>Confusing the triple product with the scalar product.</li></ul>`
  },
  "ph4_gradient": {
    title: R`Gradient of a scalar field and level surfaces`,
    category: R`4.1 A trip into vector analysis`,
    type: "definition",
    front: R`How is the <b>gradient</b> $\nabla u$ of a scalar field $u(\vec r)$ defined? Show that it is <b>perpendicular to the level surfaces</b> and points in the direction of greatest increase.`,
    back: R`The (direction-dependent) change of the field under a displacement $d\vec s = (dx,dy,dz)$:
$$du = \frac{\partial u}{\partial x}dx + \frac{\partial u}{\partial y}dy + \frac{\partial u}{\partial z}dz = d\vec s\cdot\nabla u\qquad(4.27\text{–}4.29)$$
$$\operatorname{grad}u\equiv\nabla u = \begin{pmatrix}\partial u/\partial x\\\partial u/\partial y\\\partial u/\partial z\end{pmatrix}\qquad(4.30)$$
<b>Level surfaces:</b> surfaces with $u = \text{const}$. For $d\vec s_0$ tangent to the level surface, $du = 0$:
$$0 = d\vec s_0\cdot\nabla u\;\Rightarrow\;\nabla u\perp d\vec s_0\qquad(4.31,\,4.32)$$
The gradient is perpendicular to the level surface and points in the direction of greatest change (increase) of $u$; its magnitude is the slope in that direction.<br><br>
Example: $u(x,y) = 2e^{-(x^2+y^2)}$ has $\nabla u = -2u(x,y)\,\vec r$, so it points to the maximum at the origin (Figs. 4.6, 4.7).`,
    meta: R`Script: sections 4.1.4.1–4.1.4.2, Eqs. (4.27)–(4.32), Figs. 4.6–4.8, pp. 98–102`,
    explanation: R`<b>Intuition (hiking map):</b> $u$ is the height above sea level, the level curves are contour lines. The gradient points uphill, exactly across the contour lines, and is large where the contour lines lie close together (steep terrain).<br><br>
<b>Directional derivative:</b> The change in an arbitrary direction $\hat e$ is $\frac{du}{ds} = \hat e\cdot\nabla u = |\nabla u|\cos\alpha$. It is maximal for $\alpha = 0$ (along $\nabla u$), zero for $\alpha = 90^\circ$ (along the level curve), and minimal against $\nabla u$.<br><br>
<b>Operator:</b> $\nabla = (\partial_x,\partial_y,\partial_z)$ ("nabla") is a vector of differential operators. Applied to scalars it gives the gradient, with $\cdot$ the divergence, with $\times$ the curl.<br><br>
<b>Connection:</b> Conservative forces are the (negative) gradients of a potential energy: $\vec F = -\nabla U$ (4.4). So the force points "downhill" in the potential and perpendicular to the equipotential surfaces.`,
    derivation: R`<ol class="fc-steps">
<li>$du = u(\vec r+d\vec s)-u(\vec r) = \partial_xu\,dx+\partial_yu\,dy+\partial_zu\,dz$<em>Total differential: linear approximation in all three directions (4.27).</em></li>
<li>$du = (dx,dy,dz)\cdot(\partial_xu,\partial_yu,\partial_zu) = d\vec s\cdot\nabla u$<em>Write as a scalar product (4.28, 4.29).</em></li>
<li>$du = |d\vec s|\,|\nabla u|\cos\alpha$<em>Scalar product via the angle $\alpha$ between displacement and gradient.</em></li>
<li>Maximum at $\alpha = 0$: greatest increase in direction $\nabla u$<em>For a fixed step length, $du$ is maximal when you walk along the gradient.</em></li>
<li>$d\vec s_0$ in the level surface: $du = 0\Rightarrow\cos\alpha = 0\Rightarrow\nabla u\perp d\vec s_0$<em>On the level surface $u$ does not change; the gradient is perpendicular to it (4.31, 4.32).</em></li>
</ol>`,
    example: R`$u(x,y) = 2e^{-(x^2+y^2)}$: $\partial_xu = -4xe^{-(x^2+y^2)} = -2x\,u$, analogously $\partial_yu = -2y\,u$, so $\nabla u = -2u\,(x,y)$: it points everywhere to the origin (to the peak). At the point $(1,0)$: $u = 2e^{-1} = 0{,}736$, $\nabla u = (-1{,}47;\,0)$.<br><br>
<b>Ellipses</b> $u = \sqrt{x^2/16+y^2/9}$ (Fig. 4.8): the level curves are ellipses, and the gradient is perpendicular to them everywhere.`,
    counterexample: R`<b>Not every vector field is a gradient:</b> $\vec v = (-y,\,x,\,0)$ (vortex field) cannot be written as $\nabla u$. That would require $\partial_y v_x = \partial_x v_y$, i.e. $-1 = 1$, a contradiction. Its line integral around the origin is not zero.`,
    pitfalls: R`<ul><li>Applying the gradient to a vector field; it is defined for <b>scalar</b> fields.</li>
<li>Assuming the gradient points to the nearest minimum; it points to the <i>increase</i>.</li>
<li>In spherical or cylindrical coordinates writing the components simply as partial derivatives (there factors such as $1/r$ appear).</li></ul>`
  },
  "ph4_gradientenfeld": {
    title: R`Line integral of a gradient field is path-independent`,
    category: R`4.1 A trip into vector analysis`,
    type: "gesetz",
    front: R`Show that for a gradient field $\vec v = \nabla u$ the <b>line integral</b> from $\vec r_1$ to $\vec r_2$ depends only on the end points, and that the <b>loop integral</b> vanishes.`,
    back: R`For $\vec v = \nabla u$ (4.33):
$$\int_{\vec r_1}^{\vec r_2}\vec v\cdot d\vec s = \int_{\vec r_1}^{\vec r_2}\nabla u\cdot d\vec s = \int_{\vec r_1}^{\vec r_2}du = u_2 - u_1\qquad(4.34)$$
The result <b>does not depend on the path</b>, only on $u$ at the end points. Reversing the direction changes the sign, so for every closed path
$$\oint\nabla u\cdot d\vec s = 0\qquad(4.35)$$
There are, however, vector fields that <b>cannot</b> be written as the gradient of a scalar field (e.g. vortex fields).`,
    meta: R`Script: section 4.1.4.3, Eqs. (4.33)–(4.35), p. 102`,
    explanation: R`<b>Intuition:</b> Whoever hikes from A to B in the mountains ends up with the same height difference, whatever path they take. The sum of all small height changes $du = \nabla u\cdot d\vec s$ is simply $u_B - u_A$. If you return to the starting point, the sum is zero.<br><br>
<b>This is the fundamental theorem of calculus in several dimensions:</b> integral of the derivative = difference of the function at the boundaries.<br><br>
<b>Physical meaning:</b> If a force is a gradient ($\vec F = -\nabla U$), the work done is path-independent, and a potential energy can be defined (conservative force, 4.4). Conversely, if the work along a closed path is nonzero (friction), there is no potential.<br><br>
<b>Test:</b> A field is (on simply connected regions) a gradient field exactly when $\nabla\times\vec v = \vec 0$ (with Stokes, 4.1.8).`,
    derivation: R`<ol class="fc-steps">
<li>$\nabla u\cdot d\vec s = du$<em>Definition of the gradient via the total differential (4.29).</em></li>
<li>$\int_{\vec r_1}^{\vec r_2}\nabla u\cdot d\vec s = \int_{\vec r_1}^{\vec r_2}du$<em>Sum along an arbitrary path $\Gamma$.</em></li>
<li>$= u(\vec r_2) - u(\vec r_1)$<em>Sum of all increments = final value minus initial value; $\Gamma$ no longer appears (4.34).</em></li>
<li>$\oint = \int_{\vec r_1}^{\vec r_2} + \int_{\vec r_2}^{\vec r_1} = (u_2-u_1)+(u_1-u_2) = 0$<em>Closed path: there and back along arbitrary paths (4.35).</em></li>
</ol>`,
    example: R`$u = x^2y$, $\nabla u = (2xy,\ x^2)$. From $(0,0)$ to $(1,1)$:<br>
Path 1 (first $x$, then $y$): $\int_0^1 2x\cdot0\,dx + \int_0^1 1^2\,dy = 0 + 1 = 1$.<br>
Path 2 (diagonal $x = y = t$): $\int_0^1(2t^2+t^2)\,dt = 1$.<br>
Both give $u(1,1)-u(0,0) = 1$ ✓.`,
    counterexample: R`<b>Vortex field</b> $\vec v = (-y,x,0)$ on the unit circle: $d\vec s = (-\sin\varphi,\cos\varphi,0)\,d\varphi$, $\vec v = (-\sin\varphi,\cos\varphi,0)$, so $\oint\vec v\cdot d\vec s = \int_0^{2\pi}d\varphi = 2\pi\neq0$. Not a gradient field; the integral depends on the path.`,
    pitfalls: R`<ul><li>Assuming path independence for arbitrary fields.</li>
<li>Forgetting the sign when the integration direction is reversed.</li>
<li>Overlooking fields with a singularity (e.g. $\vec v = \frac{1}{\rho}\hat\varphi$ around the $z$-axis): there $\nabla\times\vec v = 0$ almost everywhere, but the loop integral around the axis is $2\pi$.</li></ul>`
  },
  "ph4_fluss": {
    title: R`Flux of a vector field through a surface`,
    category: R`4.1 A trip into vector analysis`,
    type: "definition",
    front: R`How is the <b>flux</b> of a vector field $\vec F$ through a surface element and through a finite surface defined? When is it positive, zero or negative, and what is the orientation for closed surfaces?`,
    back: R`$$d\Phi = \vec F\cdot d\vec A = |\vec F|\,|d\vec A|\cos\vartheta\qquad(4.36)$$
$\vartheta$: angle between $\vec F$ and the area vector. The flux is a <b>scalar</b>: component of $\vec F$ perpendicular to the surface times the area.
<ul><li>$\vartheta\lt90^\circ$: $\Phi>0$ (field passes through in the direction of $d\vec A$)</li>
<li>$\vartheta = 90^\circ$: $\Phi = 0$ (field grazes along the surface)</li>
<li>$\vartheta>90^\circ$: $\Phi\lt0$</li></ul>
Finite surface:
$$\Phi = \iint_A\vec F\cdot d\vec A\qquad(4.37)$$
<b>Closed surface:</b> by definition $d\vec A$ points <b>outward</b> everywhere; $\oint\vec F\cdot d\vec A>0$ means a net outflow.`,
    meta: R`Script: section 4.1.5, Eqs. (4.36)–(4.37), Fig. 4.9, p. 103`,
    explanation: R`<b>Intuition:</b> Think of water flowing with velocity $\vec v$ and a ring you hold into it. How much water per time passes through the ring depends on the flow speed, the ring's area and the <i>tilt</i> of the ring: $\dot V = \vec v\cdot\vec A$. Held at an angle, less water flows through; parallel to the flow, none at all.<br><br>
<b>Dependencies:</b> $\Phi\propto|\vec F|$, $\propto A$, $\propto\cos\vartheta$.<br><br>
<b>Connection:</b> Flux is central in electrodynamics (Gauss: flux of $\vec E$ through a closed surface $\propto$ enclosed charge; magnetic flux in induction). In mechanics, via the Gauss theorem it yields the fields of extended masses (Ch. 7.4). For a point-source field $\propto\hat r/r^2$ the flux through every enclosing sphere is the same, because $r^2$ (area) and $1/r^2$ (field) cancel.`,
    derivation: R`Flux of a radial $1/r^2$ field through a sphere:
<ol class="fc-steps">
<li>$\vec F = \dfrac{k}{r^2}\hat r$, $d\vec A = \hat r\,r^2\,d\Omega$<em>Point source at the origin; area vector of the sphere from 4.1.2.2.</em></li>
<li>$d\Phi = \dfrac{k}{r^2}\hat r\cdot\hat r\,r^2\,d\Omega = k\,d\Omega$<em>$\hat r\cdot\hat r = 1$ ($\vartheta = 0$); $r^2$ cancels.</em></li>
<li>$\Phi = \oint k\,d\Omega = 4\pi k$<em>Over the full sphere: solid angle $4\pi$.</em></li>
<li>$\Phi$ independent of $r$<em>Every sphere around the source sees the same flux; this even holds for arbitrarily shaped enclosing surfaces (Gauss).</em></li>
</ol>`,
    example: R`<b>Water pipe:</b> flow $v = 2\,\text{m/s}$ in $x$-direction, cross-section $A = 0{,}01\,\text{m}^2$, surface perpendicular to the flow: $\Phi = vA = 0{,}02\,\text{m}^3/\text{s} = 20\,\text{L/s}$. Tilted by $60^\circ$: $\Phi = 0{,}02\cdot\cos60^\circ = 10\,\text{L/s}$.<br><br>
<b>Gravitational field of the Earth</b> through a sphere around the Earth: $\Phi = -4\pi G_NM$, independent of the radius (the minus sign because $\vec g$ points inward).`,
    counterexample: R`<b>Constant field through a closed surface:</b> A constant $\vec F$ has total flux zero through every closed surface: what flows in at the front flows out at the back. The field has no sources, even though the flux through partial surfaces can be large.`,
    pitfalls: R`<ul><li>Forgetting the $\cos\vartheta$ factor, i.e. using flux = $|\vec F|\cdot A$ also for an inclined surface.</li>
<li>Not fixing the orientation of the surface; the sign of the flux depends on it.</li>
<li>Confusing flux (scalar) with the field (vector).</li></ul>`
  },
  "ph4_divergenz_gauss": {
    title: R`Divergence and Gauss's theorem`,
    category: R`4.1 A trip into vector analysis`,
    type: "gesetz",
    front: R`How is the <b>divergence</b> of a vector field defined (as a limit and in components)? State and justify the <b>Gauss theorem</b>. What does "source-free" mean?`,
    back: R`Total flux out of a small volume $\Delta V$: $\Phi = \oint_{\partial\Delta V}\vec v\cdot d\vec A$ (4.38).
<b>Divergence:</b> flux per volume in the limit:
$$\operatorname{div}\vec v\equiv\nabla\cdot\vec v = \lim_{\Delta V\to0}\frac{1}{\Delta V}\oint_{\partial\Delta V}\vec v\cdot d\vec A = \frac{d\Phi}{dV}\qquad(4.39)$$
$$\nabla\cdot\vec v = \frac{\partial v_x}{\partial x}+\frac{\partial v_y}{\partial y}+\frac{\partial v_z}{\partial z}\qquad(4.40)$$
<b>Gauss theorem:</b> for a volume $V$ with surface $\partial V$:
$$\oint_{\partial V}\vec v\cdot d\vec A = \int_V\nabla\cdot\vec v\;dV\qquad(4.42)$$
A volume integral is replaced by a surface integral. Justification: for adjacent small cubes the fluxes through shared faces cancel (opposite $d\vec A$, 4.41); what remains is the flux through the outer surface.<br><br>
<b>Source-free:</b> $\nabla\cdot\vec v = 0$; then the total flux through every closed surface is zero.`,
    meta: R`Script: section 4.1.6, Eqs. (4.38)–(4.42), Figs. 4.10–4.11, pp. 104–105`,
    explanation: R`<b>Intuition:</b> The divergence measures the "source strength" at a point: if more flows out of a tiny volume than flows in (a tap), $\nabla\cdot\vec v>0$; if something disappears (a drain), it is negative.<br><br>
<b>Gauss in words:</b> What flows out net through the surface must have been generated inside. The sum of all sources inside = total flux through the enclosing surface.<br><br>
<b>Understanding the component formula:</b> $\partial v_x/\partial x>0$ means: at $x+dx$ more flows out than flows in at $x$. The difference per volume adds up over all three directions.<br><br>
<b>Connection:</b> In electrostatics $\nabla\cdot\vec E = \rho/\varepsilon_0$; for gravitation $\nabla\cdot\vec g = -4\pi G_N\rho$. This lets one compute fields of symmetric mass distributions (Ch. 7.4) in one line instead of multiple integrals. Incompressible fluids have $\nabla\cdot\vec v = 0$.`,
    derivation: R`Component form from the limit, for a cube $dx\,dy\,dz$:
<ol class="fc-steps">
<li>Flux through the faces at $x$ and $x+dx$: $\left[v_x(x+dx)-v_x(x)\right]dy\,dz$<em>At $x+dx$ the $d\vec A$ points in $+x$, at $x$ in $-x$: outflow minus inflow.</em></li>
<li>$= \dfrac{\partial v_x}{\partial x}dx\,dy\,dz$<em>First-order Taylor expansion: $v_x(x+dx)\approx v_x(x)+\partial_xv_x\,dx$.</em></li>
<li>$d\Phi = \left(\dfrac{\partial v_x}{\partial x}+\dfrac{\partial v_y}{\partial y}+\dfrac{\partial v_z}{\partial z}\right)dV$<em>Same for the $y$ and $z$ face pairs; add them.</em></li>
<li>$\nabla\cdot\vec v = d\Phi/dV$<em>With (4.39) this gives the component form (4.40).</em></li>
<li>$\oint_{\partial V}\vec v\cdot d\vec A = \sum_\text{cubes}d\Phi_i = \int_V\nabla\cdot\vec v\,dV$<em>Decompose the volume into small cubes; inner faces cancel pairwise (4.41), the outer surface remains (4.42).</em></li>
</ol>`,
    example: R`<b>Check with $\vec v = \vec r$</b> and a sphere of radius $R$:<br>
Volume side: $\nabla\cdot\vec r = 1+1+1 = 3$, so $\int_V3\,dV = 3\cdot\frac43\pi R^3 = 4\pi R^3$.<br>
Surface side: on the sphere $\vec r\cdot d\vec A = R\cdot dA$, so $\oint = R\cdot4\pi R^2 = 4\pi R^3$ ✓.<br><br>
<b>Source-free:</b> $\vec v = (y,-x,0)$ has $\nabla\cdot\vec v = 0+0+0 = 0$, so the total flux through every closed surface vanishes.`,
    counterexample: R`<b>Point source</b> $\vec F = \hat r/r^2$: For $r>0$, $\nabla\cdot\vec F = 0$, yet the flux through every sphere around the origin is $4\pi$, not zero. All the source strength sits at the singular point $r = 0$, where the component formula does not hold. Gauss applies only if the field is differentiable throughout the volume (or one writes the source as $4\pi\delta^3(\vec r)$).`,
    pitfalls: R`<ul><li>Confusing divergence (scalar) with gradient (vector).</li>
<li>Using $\nabla\cdot\vec v = \partial_xv_x+\dots$ unchanged in curvilinear coordinates.</li>
<li>Applying the Gauss theorem to open surfaces; it holds only for closed ones.</li>
<li>Overlooking singularities inside the volume.</li></ul>`
  },
  "ph4_rotation_stokes": {
    title: R`Circulation, curl and Stokes's theorem`,
    category: R`4.1 A trip into vector analysis`,
    type: "gesetz",
    front: R`What is the <b>circulation</b> of a vector field, how is the <b>curl</b> $\nabla\times\vec v$ defined (as a limit and in components), and what does <b>Stokes's theorem</b> state?`,
    back: R`<b>Circulation</b> around the boundary $\partial A$ of an open surface $A$:
$$Z := \oint_{\partial A}\vec v\cdot d\vec s\qquad(4.43)$$
<b>Curl:</b> a vector whose magnitude is the circulation of an infinitesimal surface per unit area, and whose direction is that of the area vector:
$$\operatorname{rot}\vec v\equiv\nabla\times\vec v = \lim_{\Delta A\to0}\frac{\oint_{\partial\Delta A}\vec v\cdot d\vec s}{\Delta A}\cdot\frac{\Delta\vec A}{|\Delta\vec A|}\qquad(4.44)$$
$$\nabla\times\vec v = \begin{pmatrix}\partial_yv_z-\partial_zv_y\\\partial_zv_x-\partial_xv_z\\\partial_xv_y-\partial_yv_x\end{pmatrix}\qquad(4.45)$$
<b>Stokes's theorem:</b>
$$\oint_{\partial A}\vec v\cdot d\vec s = \int_A(\nabla\times\vec v)\cdot d\vec A\qquad(4.47)$$
Reason: for adjacent surface patches the contributions of shared edges cancel (4.46); only the outer boundary remains.`,
    meta: R`Script: sections 4.1.7–4.1.8, Eqs. (4.43)–(4.47), Figs. 4.13–4.14, pp. 105–108`,
    explanation: R`<b>Intuition:</b> The curl measures the local "swirling". If you place a small paddle wheel in a flow and it turns, the field has curl there; the axis about which it turns fastest gives the direction of $\nabla\times\vec v$.<br><br>
<b>Stokes in words:</b> The circulation along the edge is the sum of all small swirls over the surface, because the loops at inner edges cancel each other.<br><br>
<b>Irrotational and conservative:</b> If $\nabla\times\vec v = \vec 0$ everywhere (on a simply connected region), every loop integral vanishes. Then $\vec v$ is a gradient field. This gives, in 4.4, the path independence of the work of conservative forces: $\nabla\times(\nabla U) = \vec 0$.<br><br>
<b>Physics:</b> For a rigid rotation $\vec v = \vec\omega\times\vec r$ one has $\nabla\times\vec v = 2\vec\omega$. The curl thus measures twice the local angular velocity. In electrodynamics: $\nabla\times\vec B = \mu_0\vec j$, $\nabla\times\vec E = -\dot{\vec B}$.`,
    derivation: R`$z$-component from the limit, with a small rectangle $dx\times dy$ in the $xy$-plane (circulation counterclockwise):
<ol class="fc-steps">
<li>Bottom and top: $v_x(y)\,dx - v_x(y+dy)\,dx = -\partial_yv_x\,dx\,dy$<em>At the bottom one walks in $+x$, at the top in $-x$; Taylor in $y$.</em></li>
<li>Right and left: $v_y(x+dx)\,dy - v_y(x)\,dy = \partial_xv_y\,dx\,dy$<em>On the right one walks in $+y$, on the left in $-y$; Taylor in $x$.</em></li>
<li>$dZ = (\partial_xv_y - \partial_yv_x)\,dx\,dy$<em>Sum of the four sides.</em></li>
<li>$(\nabla\times\vec v)_z = \dfrac{dZ}{dA} = \partial_xv_y - \partial_yv_x$<em>Divide by the area (4.44); analogously the other components (4.45).</em></li>
<li>$\oint_{\partial A}\vec v\cdot d\vec s = \sum dZ_i = \int_A(\nabla\times\vec v)\cdot d\vec A$<em>Decompose the surface into small rectangles; inner edges cancel (4.46, 4.47).</em></li>
</ol>`,
    example: R`<b>Rigid rotation</b> $\vec v = \vec\omega\times\vec r = (-\omega y,\ \omega x,\ 0)$:
$(\nabla\times\vec v)_z = \partial_x(\omega x)-\partial_y(-\omega y) = 2\omega$.<br>
Stokes check with a circle of radius $R$: left $\oint\vec v\cdot d\vec s = \omega R\cdot2\pi R = 2\pi\omega R^2$; right $\int2\omega\,dA = 2\omega\cdot\pi R^2$ ✓.<br><br>
<b>Gradient field:</b> $\vec v = \nabla(x^2y) = (2xy,x^2,0)$: $(\nabla\times\vec v)_z = 2x-2x = 0$ ✓.`,
    counterexample: R`<b>Curved flow without curl:</b> The "potential vortex" $\vec v = \frac{c}{\rho}\hat\varphi$ (water draining) runs in a circle, yet for $\rho>0$ it has $\nabla\times\vec v = \vec 0$ everywhere. A small paddle wheel would not turn there, although it is carried around in a circle. Circular flow therefore does not automatically mean curl.<br>
Conversely, the shear flow $\vec v = (y,0,0)$ has straight streamlines, but $\nabla\times\vec v = (0,0,-1)\neq\vec 0$.`,
    pitfalls: R`<ul><li>Mixing up signs in the components (cyclic order).</li>
<li>Not linking the sense of traversal and the orientation of the surface via the right-hand rule.</li>
<li>Equating "circular streamlines" with "curl not zero".</li>
<li>Applying Stokes to regions with holes (singularities).</li></ul>`
  },
  "ph4_arbeit": {
    title: R`Mechanical work W = ∫F·dr`,
    category: R`4.2 Work, power`,
    type: "definition",
    front: R`How is the <b>mechanical work</b> of a force defined, for a straight path and in general for a curved path $\Gamma$? Why do centripetal force and normal force do no work when sliding horizontally?`,
    back: R`<b>Straight path</b> $\vec s$, constant force:
$$W = \vec F\cdot\vec s = F_\parallel\,s = F\,s\cos\alpha\qquad(4.48)$$
$\vec F\parallel\vec s$: $W = Fs$; $\vec F\perp\vec s$: $W = 0$.<br><br>
<b>General</b> (position-dependent force, curved path $\Gamma$ from $\vec r_1$ to $\vec r_2$):
$$W = \int_{\vec r_1(\Gamma)}^{\vec r_2(\Gamma)}\vec F\cdot d\vec s = \int_{\vec r_1}^{\vec r_2}F_\parallel\,ds\qquad(4.49)$$
Unit: $1\,\text{N m} = 1\,\text{J} = 1\,\frac{\text{m}^2\text{kg}}{\text{s}^2} = 1\,\text{W s}$ (4.50).<br><br>
<b>No work:</b>
<ul><li>Uniform circular motion: $\vec F_{ZP}\propto-\hat r$, $d\vec s = \vec v\,dt\perp\hat r$, so $W = 0$ (4.51, 4.52).</li>
<li>Frictionless horizontal sliding: $(0,-mg)\cdot(dx,0) = 0$ (4.53).</li></ul>`,
    meta: R`Script: section 4.2.1, Eqs. (4.48)–(4.53), Figs. 4.15–4.17 (with footnote 5), pp. 108–111`,
    explanation: R`<b>Intuition:</b> Work counts only the part of the force that acts <i>along</i> the motion. A force perpendicular to the motion only redirects and transfers no energy. Work is a scalar and can be negative (force against the motion, e.g. braking, lifting against gravity).<br><br>
<b>Physical vs. everyday work</b> (footnote 5): Carrying a suitcase at constant height from A to B is physically no work done by the lifting force (it is perpendicular to the path). Your muscles still get tired, but that is internal biochemistry, not mechanical work on the suitcase. A removal firm carrying a grand piano down the stairs does negative work.<br><br>
<b>Dependencies:</b> $W\propto F$, $\propto s$, $\propto\cos\alpha$.<br><br>
<b>Connection:</b> Work is energy transfer. The total work of all forces changes the kinetic energy (4.3); for conservative forces it is path-independent and defines the potential energy (4.4).`,
    derivation: R`From the straight piece to the line integral:
<ol class="fc-steps">
<li>$W = |\vec F|\,|\vec s|\cos\alpha = F_\parallel\,s$<em>Only the component along the path counts (scalar product).</em></li>
<li>$\Delta W_i\approx\vec F(\vec r_i)\cdot\Delta\vec s_i$<em>Divide the curved path into small, almost straight pieces; on each the force is nearly constant (Fig. 4.17).</em></li>
<li>$W = \lim\sum_i\vec F(\vec r_i)\cdot\Delta\vec s_i = \int_\Gamma\vec F\cdot d\vec s$<em>Limit of the sum: line integral (4.49).</em></li>
<li>Circular motion: $\vec F\cdot d\vec s = -m\frac{v^2}{r}\hat r\cdot\vec v\,dt = 0$<em>$\vec v\perp\hat r$; every piece contributes zero (4.52).</em></li>
</ol>`,
    example: R`<b>Pulling a sled:</b> $F = 100\,\text{N}$ at $30^\circ$ to the horizontal, $s = 20\,\text{m}$: $W = 100\cdot20\cdot\cos30^\circ\,\text{J} = 1732\,\text{J}$.<br>
<b>Lifting a suitcase</b> ($15\,\text{kg}$, $1\,\text{m}$): the lifting force does $+147\,\text{J}$, gravity $-147\,\text{J}$.<br>
<b>Gravity during a throw</b> (Fig. 4.16): when rising $W\lt0$, when falling $W>0$, for horizontal displacement $W = 0$.`,
    counterexample: R`<b>Large force, no work:</b> The Sun pulls the Earth with about $3{,}5\cdot10^{22}\,\text{N}$. On the (nearly) circular orbit this force is perpendicular to the motion, and the work per revolution is (almost) zero. That is why the orbital speed stays constant.`,
    pitfalls: R`<ul><li>Using $W = Fs$ without $\cos\alpha$.</li>
<li>Forgetting that work can be negative.</li>
<li>Confusing the work of a single force with the total work of all forces.</li>
<li>For a position-dependent force (e.g. a spring) computing $W = F\cdot s$ with a single value of $F$ instead of integrating.</li></ul>`
  },
  "ph4_leistung": {
    title: R`Power P = dW/dt = F·v (car uphill, air drag ∝ v³)`,
    category: R`4.2 Work, power`,
    type: "gesetz",
    front: R`How is <b>power</b> defined, and why does $P = \vec F\cdot\vec v$ hold? Calculate the power of a car ($1000\,\text{kg}$, $20\,\text{m/s}$) on a 10 % incline, when accelerating additionally at $5\,\text{m/s}^2$, and against air resistance.`,
    back: R`$$P = \frac{dW}{dt}\qquad(4.54),\qquad 1\,\frac{\text{N m}}{\text{s}} = 1\,\frac{\text{m}^2\text{kg}}{\text{s}^3} = 1\,\frac{\text{J}}{\text{s}} = 1\,\text{W}\qquad(4.55)$$
(Obsolete unit: $1\,\text{PS} = 75\,\text{m kp/s} = 735\,\text{W}$, 4.56.) If the point of application is moved with $\vec v$:
$$P = \frac{\vec F\cdot d\vec s}{dt} = \vec F\cdot\vec v\qquad(4.57)$$
<b>Car</b> ($m = 1000\,\text{kg}$, $v = 20\,\text{m/s}$, $\tan\alpha = 10\,\%$):
$$P_1 = Gv\sin\alpha\approx mgv\alpha\approx20\,\text{kW},\qquad P_2 = mav = 100\,\text{kW}\ (a = 5\,\text{m/s}^2)\qquad(4.58,\,4.59)$$
$$P_3 = \frac{\rho}{2}c_WAv^2\cdot v\propto v^3\qquad(4.60)$$`,
    meta: R`Script: section 4.2.2, Eqs. (4.54)–(4.60), Fig. 4.18, pp. 111–112`,
    explanation: R`<b>Intuition:</b> Power is the <i>rate</i> of energy transfer. The same work (e.g. driving up a hill) can be done slowly with little power or quickly with a lot of power.<br><br>
<b>Dependencies:</b>
<ul><li>Incline: $P_1\propto m$, $\propto v$, $\propto\sin\alpha$.</li>
<li>Accelerating: $P_2 = mav$ grows with the instantaneous speed. At fixed engine power the achievable acceleration therefore decreases with $v$ ($a = P/(mv)$).</li>
<li>Air resistance: $F\propto v^2$ and $P = Fv\propto v^3$. Doubling the speed costs eight times the power; that is why fuel consumption rises sharply at motorway speeds.</li></ul>
<b>Connection:</b> $P = \vec F\cdot\vec v$ again shows: forces perpendicular to the velocity do nothing. The total power of all forces is $\frac{d}{dt}\left(\tfrac12mv^2\right)$ (kinetic energy, 4.3).`,
    derivation: R`<ol class="fc-steps">
<li>$dW = \vec F\cdot d\vec s$<em>Work on a small piece of path.</em></li>
<li>$P = \dfrac{dW}{dt} = \vec F\cdot\dfrac{d\vec s}{dt} = \vec F\cdot\vec v$<em>Divide by $dt$; $d\vec s/dt$ is the velocity of the point of application (4.57).</em></li>
<li>Incline: $F = mg\sin\alpha$, $P_1 = mgv\sin\alpha$<em>The downhill component of gravity must be overcome.</em></li>
<li>$\tan\alpha = 0{,}1\Rightarrow\alpha\approx0{,}1$, $\sin\alpha\approx\alpha$<em>Small-angle approximation (1.2.2): $\sin(5{,}71^\circ) = 0{,}0995$.</em></li>
<li>$P_1\approx1000\cdot9{,}81\cdot20\cdot0{,}1\,\text{W}\approx19{,}6\,\text{kW}\approx20\,\text{kW}$<em>Insert numbers (4.58).</em></li>
<li>$P_2 = (ma)\,v = 1000\cdot5\cdot20\,\text{W} = 100\,\text{kW}$<em>Additional force $ma$ for the acceleration (4.59).</em></li>
</ol>`,
    example: R`<b>Air resistance</b> ($c_W = 0{,}3$, $A = 2{,}2\,\text{m}^2$, $\rho = 1{,}2\,\text{kg/m}^3$):<br>
at $20\,\text{m/s}$: $P_3 = 0{,}6\cdot0{,}3\cdot2{,}2\cdot8000\,\text{W} = 3{,}2\,\text{kW}$;<br>
at $40\,\text{m/s}$ ($144\,\text{km/h}$): $25\,\text{kW}$, eight times as much.<br><br>
<b>Human:</b> Climbing stairs ($70\,\text{kg}$, $3\,\text{m}$ in $5\,\text{s}$): $P = \frac{70\cdot9{,}81\cdot3}{5}\,\text{W} = 412\,\text{W}\approx0{,}56\,\text{PS}$.`,
    counterexample: R`<b>Large force, zero power:</b> A weightlifter holding the barbell steady overhead exerts a large force, but $\vec v = 0$, so $P = 0$ at the barbell. The energy his muscles consume is not mechanical power delivered to the load.`,
    pitfalls: R`<ul><li>Confusing power (W) with work/energy (J, kWh): $1\,\text{kWh} = 3{,}6\cdot10^{6}\,\text{J}$.</li>
<li>Using $P = Fv$ without accounting for the angle between $\vec F$ and $\vec v$.</li>
<li>Scaling air resistance linearly instead of cubically in the power.</li>
<li>Equating $\sin\alpha$ and $\tan\alpha$ for steep roads (gradient in % is $\tan\alpha$).</li></ul>`
  },
  "ph4_kinetische_energie": {
    title: R`Kinetic energy and work–energy theorem W = T₂ − T₁`,
    category: R`4.3 Kinetic energy`,
    type: "herleitung",
    front: R`Derive the <b>work–energy theorem</b> $W = T_2 - T_1$ from Newton II and define the <b>kinetic energy</b>. For which forces does it hold, and what follows for uniform circular motion?`,
    back: R`For constant mass:
$$W = \int_{\vec r_1}^{\vec r_2}\vec F\cdot d\vec r = \int m\frac{d\vec v}{dt}\cdot\vec v\,dt = m\int_{\vec v_1}^{\vec v_2}\vec v\cdot d\vec v = \frac m2v_2^2 - \frac m2v_1^2\qquad(4.61\text{–}4.63)$$
<b>Kinetic energy</b> of a point mass:
$$T := \tfrac12mv^2 = \frac{p^2}{2m}\qquad(4.64)$$
(only for $v\ll c$). Thus
$$W = T(\vec r_2) - T(\vec r_1)\qquad(4.65)$$
<b>Note:</b>
<ul><li>Holds for <b>arbitrary</b> force fields, including non-conservative ones.</li>
<li>$\vec F$ is the <b>sum of all</b> forces acting on the point mass.</li>
<li>Uniform circular motion: $|\vec v| = \text{const}$, so $\Delta T = 0 = W$ (4.66).</li></ul>`,
    meta: R`Script: section 4.3, Eqs. (4.61)–(4.66), pp. 112–113`,
    explanation: R`<b>Intuition:</b> The total work done on a body ends up in its motion. Positive work makes it faster, negative work slower. The kinetic energy is the "stored work" of the motion.<br><br>
<b>Dependencies:</b> $T\propto m$, but $T\propto v^2$. Double the speed gives four times the energy and, with the same braking force, four times the braking distance ($Fs = \tfrac12mv^2$). At equal momentum $T = p^2/2m$: the lighter body has more energy (bullet vs. rifle in recoil).<br><br>
<b>Why for all forces?</b> The derivation uses only Newton II, no property of the force. Only the split into potential energy (4.4) needs conservative forces.<br><br>
<b>Connection:</b> Differentiating with respect to time gives $\frac{dT}{dt} = \vec F\cdot\vec v = P$ (4.2.2). For many-particle systems the kinetic energy of the motion relative to the centre of mass is added (Ch. 6.4.3); for rigid bodies the rotational energy $\tfrac12I\omega^2$ (Ch. 8).`,
    derivation: R`<ol class="fc-steps">
<li>$W = \int_{\vec r_1}^{\vec r_2}\vec F\cdot d\vec r$<em>Definition of the work of the total force (4.61).</em></li>
<li>$\vec F = m\dfrac{d\vec v}{dt},\quad d\vec r = \vec v\,dt$<em>Newton II (constant mass) and express the path element via velocity.</em></li>
<li>$W = m\int\dfrac{d\vec v}{dt}\cdot\vec v\,dt = m\int_{\vec v_1}^{\vec v_2}\vec v\cdot d\vec v$<em>Cancel $dt$: integration over velocity (4.62).</em></li>
<li>$\vec v\cdot d\vec v = \tfrac12d(\vec v\cdot\vec v) = \tfrac12d(v^2)$<em>Product rule backwards: $d(v^2) = 2\vec v\cdot d\vec v$.</em></li>
<li>$W = \dfrac m2\left[v^2\right]_{v_1}^{v_2} = \dfrac m2v_2^2-\dfrac m2v_1^2 = T_2 - T_1$<em>Carry out the integral (4.63–4.65).</em></li>
<li>$T = \dfrac m2v^2 = \dfrac{(mv)^2}{2m} = \dfrac{p^2}{2m}$<em>Rewrite with the momentum (4.64).</em></li>
</ol>`,
    example: R`<b>Car</b> $1200\,\text{kg}$ at $50\,\text{km/h}$ ($13{,}9\,\text{m/s}$): $T = 116\,\text{kJ}$; at $100\,\text{km/h}$: $463\,\text{kJ}$ (4 times as much).<br>
With braking force $8\,\text{kN}$: braking distance $s = T/F = 14{,}5\,\text{m}$ resp. $57{,}9\,\text{m}$.<br><br>
<b>Rifle and bullet</b> with equal momentum magnitude $p = 4\,\text{kg m/s}$: $T_\text{bullet} = \frac{16}{2\cdot0{,}01}\,\text{J} = 800\,\text{J}$, $T_\text{rifle} = \frac{16}{2\cdot4}\,\text{J} = 2\,\text{J}$.`,
    counterexample: R`<b>Considering only one force:</b> A skydiver at terminal velocity: gravity does positive work, yet $T$ does not change. The total work (gravity plus air resistance) is zero. The work–energy theorem holds only with the <b>sum</b> of all forces.<br>
<b>Relativistic:</b> For $v\to c$, $T\neq\tfrac12mv^2$ (e.g. electrons in accelerators).`,
    pitfalls: R`<ul><li>Assuming $T\propto v$ instead of $\propto v^2$.</li>
<li>Applying the work–energy theorem to a single force instead of the total force.</li>
<li>Treating $T$ as a vector; the direction of the velocity plays no role.</li>
<li>Using $\tfrac12mv^2$ unthinkingly when the mass varies.</li></ul>`
  },
  "ph4_konservativ": {
    title: R`Conservative forces, potential energy and path independence`,
    category: R`4.4 Potential energy and conservative forces`,
    type: "gesetz",
    front: R`When is a force field called <b>conservative</b>? How are work and <b>potential energy</b> related, and how does one prove path independence with Stokes's theorem? Which force fields are in general <b>not</b> conservative?`,
    back: R`$\vec F(\vec r)$ is called <b>conservative</b> if there is a continuous (piecewise differentiable) function $U(\vec r)$ with
$$\vec F(\vec r) = -\nabla U = -\operatorname{grad}U\qquad(4.67)$$
<b>Work done by the field</b> from $\vec r_1$ to $\vec r_2$:
$$W = \int_{\vec r_1}^{\vec r_2}\vec F\cdot d\vec r = -\int_{\vec r_1}^{\vec r_2}dU = U(\vec r_1) - U(\vec r_2)\qquad(4.68,\,4.69)$$
Potential energy of $\vec r_2$ relative to $\vec r_1$:
$$U_{2(1)} := U(\vec r_2)-U(\vec r_1) = -\int_{\vec r_1}^{\vec r_2}\vec F\cdot d\vec r\qquad(4.70)$$
Positive work of the field means a <b>decrease</b> in potential energy. An external force working against the field (lifting) does the same work with the opposite sign.<br><br>
<b>Path independence</b> (Stokes):
$$\oint\vec F\cdot d\vec r = -\oint\nabla U\cdot d\vec r = -\int_A\underbrace{\operatorname{rot}(\nabla U)}_{=\vec 0}\cdot d\vec A = 0\qquad(4.71)$$
Time-dependent $\vec F(\vec r,t)$ and velocity-dependent $\vec F(\vec r,\vec v)$ force fields are in general <b>not</b> conservative.`,
    meta: R`Script: sections 4.4.1–4.4.2, Eqs. (4.67)–(4.71), pp. 113–114`,
    explanation: R`<b>Intuition:</b> With a conservative force "no work is lost": what you invest when lifting something you get back completely when lowering it, whatever the path. The work is stored in the position (configuration) as potential energy.<br><br>
<b>Three equivalent criteria</b> (on a simply connected region):
<ul><li>$\vec F = -\nabla U$</li>
<li>$\oint\vec F\cdot d\vec r = 0$ for every closed path (work path-independent)</li>
<li>$\nabla\times\vec F = \vec 0$</li></ul>
<b>Advantage of the potential:</b> $U$ is a <b>scalar</b> field, i.e. one number per place instead of three. The force follows by differentiation.<br><br>
<b>Not conservative:</b> Friction ($\vec F\propto-\hat v$): on a closed path the work is always negative. Time-dependent fields: the outward and return trip "see" different fields.<br><br>
<b>Connection:</b> Only for conservative forces does the mechanical energy theorem $T + U = \text{const}$ (4.5) hold.`,
    derivation: R`<ol class="fc-steps">
<li>$\vec F\cdot d\vec r = -\nabla U\cdot d\vec r$<em>Insert the conservative field (4.67).</em></li>
<li>$\nabla U\cdot d\vec r = dU$<em>Total differential (4.29).</em></li>
<li>$W = -\int_{\vec r_1}^{\vec r_2}dU = U(\vec r_1)-U(\vec r_2)$<em>Integral of a total differential: only the end points count (4.69).</em></li>
<li>$\oint\vec F\cdot d\vec r = -\int_A(\nabla\times\nabla U)\cdot d\vec A$<em>Stokes's theorem (4.47) for an arbitrary surface whose boundary is the closed path.</em></li>
<li>$(\nabla\times\nabla U)_z = \partial_x\partial_yU - \partial_y\partial_xU = 0$<em>Mixed partial derivatives commute (Schwarz); analogously all components, so $\oint = 0$ (4.71).</em></li>
</ol>`,
    example: R`<b>Gravity near the Earth's surface</b> (Fig. 4.19): From $z_1$ to $z_2$ on path A (vertical) or path B (arbitrarily curved), the work of gravity is the same: $W_A = W_B = -mg(z_2-z_1)$.<br>
$2\,\text{kg}$ lifted by $5\,\text{m}$: $W_\text{field} = -98{,}1\,\text{J}$, $\Delta U = +98{,}1\,\text{J}$; lowering it regains exactly that.`,
    counterexample: R`<b>Sliding friction:</b> A crate is pushed $10\,\text{m}$ forward and $10\,\text{m}$ back, $F_R = 50\,\text{N}$: friction does $-1000\,\text{J}$ on the closed path, not zero. Friction has no potential.<br>
<b>Vortex field</b> $\vec F = (-y,x,0)$: $\nabla\times\vec F = (0,0,2)\neq\vec 0$, loop integral $\neq0$. Not conservative, although it depends only on position.`,
    pitfalls: R`<ul><li>Confusing the work of the field with the work against the field (signs!).</li>
<li>Writing $\vec F = +\nabla U$ instead of $-\nabla U$.</li>
<li>Believing every position-dependent force is conservative.</li>
<li>For fields with singularities ($\nabla\times\vec F = 0$ only almost everywhere) assuming path independence without checking.</li></ul>`
  },
  "ph4_potential_nullpunkt": {
    title: R`Zero point of the potential and specific potential`,
    category: R`4.4 Potential energy and conservative forces`,
    type: "konzept",
    front: R`Why is a potential determined only up to an additive <b>constant</b>, and what is then measurable at all? How is the zero point usually fixed? What is a <b>specific potential</b> $V(\vec r)$?`,
    back: R`With $U' := U + c$ (4.72):
$$-\nabla U' = -\nabla(U+c) = -\nabla U + 0 = \vec F\qquad(4.73,\,4.74)$$
Both potentials give the same force. The zero point is arbitrary and physically meaningless, since it is not measurable.<br><br>
<b>Measurable</b> are the force (or acceleration) and, via $\int\vec F\cdot d\vec s$, the <b>change</b> of the potential energy.<br><br>
<b>Convention:</b> For fields with infinite range (gravitation, Coulomb) one chooses $U(\infty) = 0$; near the Earth's surface often $U = 0$ at the ground.<br><br>
<b>Specific potential</b> (analogous to the specific field $\vec f = \vec F/\gamma$):
$$V(\vec r) = \frac1\gamma\,U(\vec r)\qquad(4.102)$$
The script calls $U$ the <b>energy potential</b> (or potential) and $V$ the <b>specific potential</b> (e.g. gravitation: $V = U/m$ in J/kg; electrostatics: $V = U/q$ in J/C = volt).`,
    meta: R`Script: sections 4.4.2 (Eqs. 4.72–4.74) and 4.4.5 (Eq. 4.102), pp. 114 and 122`,
    explanation: R`<b>Intuition:</b> Heights need a reference point (sea level, the living-room floor). Which one you choose does not matter, as long as you always take differences: a ball falling 2 m gains the same speed whether you measure from sea level or from the table top.<br><br>
<b>A negative potential is no problem:</b> With $U(\infty) = 0$ the gravitational potential is negative everywhere. A bound body has negative total energy, an unbound one positive. The sign has physical meaning only <i>relative</i> to the chosen convention.<br><br>
<b>Why a specific potential?</b> As with the field: you compute $V$ once for the sources and multiply only by the coupling of each test particle ($U = \gamma V$). In electrostatics $V$ is called the electric potential; differences of it are voltages.<br><br>
<b>Connection:</b> $\vec f = -\nabla V$ (specific field as gradient of the specific potential), e.g. $\vec g = -\nabla V_G$, $\vec E = -\nabla\phi$.`,
    derivation: R`Zero point at infinity for a $1/r$ potential:
<ol class="fc-steps">
<li>$U(r) = -\dfrac{k}{r} + U_0$<em>General form (e.g. gravitation with $k = G_Nm_1m_2$), $U_0$ arbitrary (4.85).</em></li>
<li>$\lim_{r\to\infty}U(r) = U_0$<em>The term $-k/r$ vanishes at infinity.</em></li>
<li>$U_0 := 0$<em>Convention: no potential at infinity (4.94).</em></li>
<li>$\Delta U = U(r_2)-U(r_1) = k\left(\dfrac1{r_1}-\dfrac1{r_2}\right)$<em>Every measurable quantity is a difference; $U_0$ always cancels.</em></li>
</ol>`,
    example: R`A ball ($0{,}5\,\text{kg}$) lies on a $0{,}8\,\text{m}$ high table on the 3rd floor ($10\,\text{m}$ above the street).<br>
Reference table: $U = 0$; reference room floor: $U = 3{,}9\,\text{J}$; reference street: $U = 53\,\text{J}$.<br>
If it falls to the floor: $\Delta U = -3{,}9\,\text{J}$ in <i>all</i> three conventions, so the same impact speed $\sqrt{2\cdot9{,}81\cdot0{,}8}\,\text{m/s} = 4{,}0\,\text{m/s}$.<br><br>
<b>Specific:</b> $V_G = -G_NM/R_E = -6{,}25\cdot10^{7}\,\text{J/kg}$ at the Earth's surface (relative to $\infty$).`,
    counterexample: R`<b>Absolute potential value as a measurable quantity:</b> "The stone has 53 J of potential energy" is meaningless without stating the reference point. An experiment can only show how much energy is released along a given path, i.e. a difference.`,
    pitfalls: R`<ul><li>Mixing different zero points within the same calculation.</li>
<li>Confusing potential (energy, J) and specific potential (J/kg or V).</li>
<li>Regarding a negative potential as "unphysical".</li></ul>`
  },
  "ph4_potential_beispiele": {
    title: R`Potential energy: near-Earth gravity field and stretched spring`,
    category: R`4.4 Potential energy and conservative forces`,
    type: "beispiel",
    front: R`Calculate the potential energy (a) in the homogeneous gravitational field near the Earth's surface, $U = mg(z_2-z_1)$, and (b) of a stretched spring, $U = \tfrac12kx^2$, directly from the definition $U_{2(1)} = -\int\vec F\cdot d\vec r$.`,
    back: R`<b>(a) Gravity field</b> ($z$ vertical, reference point $\vec r_1$ with $U_1 = 0$):
$$\vec F\cdot d\vec r = (0,-mg)\cdot(dx,dz) = -mg\,dz\qquad(4.75,\,4.76)$$
$$U_{2(1)} = -\int_{\vec r_1}^{\vec r_2}\vec F\cdot d\vec r = mg\int_{z_1}^{z_2}dz = mg\,(z_2-z_1)\qquad(4.77\text{–}4.79)$$
<b>(b) Spring</b> (restoring force $F_R = -k(x-x_0)$, reference rest position $x_0 = 0$, $U(0) = 0$):
$$U(x) = -\int_0^xF_R(x')\,dx' = k\int_0^xx'\,dx' = \tfrac12kx^2\qquad(4.80\text{–}4.83)$$
This is the potential of the harmonic oscillator, a parabola (Fig. 4.21). $F_R$ is here a 1D quantity with sign, not a magnitude.`,
    meta: R`Script: sections 4.4.2.1–4.4.2.2, Eqs. (4.75)–(4.83), Figs. 4.19–4.21, pp. 115–117`,
    explanation: R`<b>Intuition:</b> In a homogeneous field the energy grows linearly with height (every metre costs the same). For the spring it grows quadratically: the further it is stretched, the harder it pulls back, and each further centimetre costs more.<br><br>
<b>Dependencies:</b>
<ul><li>Gravity field: $U\propto m$, $\propto\Delta z$.</li>
<li>Spring: $U\propto k$, $\propto x^2$. Double the stretch gives four times the energy. And $U$ is positive also when compressed ($x\lt0$).</li></ul>
<b>Check via the force:</b> $F = -dU/dx$ returns $-mg$ resp. $-kx$; this is how you check any potential.<br><br>
<b>Connection:</b> Near a minimum, <i>every</i> smooth potential looks like $\tfrac12k_\text{eff}x^2$ (Taylor). That is why the spring is the model of all small oscillations (Ch. 9). The linear form $mgz$ is the approximation of $-G_NMm/r$ for small heights (4.4.2.4).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec F = (0,-mg)$, $d\vec r = (dx,dz)$<em>Homogeneous gravity field; second horizontal axis omitted.</em></li>
<li>$\vec F\cdot d\vec r = -mg\,dz$<em>Only the vertical displacement counts; horizontal paths cost nothing (4.76).</em></li>
<li>$U_2 - U_1 = -\int(-mg)\,dz = mg(z_2-z_1)$<em>Definition (4.70) with $U_1 = 0$ (4.77–4.79).</em></li>
<li>$F_R(x') = -kx'$<em>Spring force relative to the rest position (4.80).</em></li>
<li>$U(x) = -\int_0^x(-kx')\,dx' = k\left[\tfrac12x'^2\right]_0^x = \tfrac12kx^2$<em>Integrate (4.81–4.83).</em></li>
<li>$-\dfrac{dU}{dx} = -kx = F_R$ ✓<em>Check: differentiating gives back the force.</em></li>
</ol>`,
    example: R`<b>Bungee:</b> cord with $k = 100\,\text{N/m}$, stretched by $20\,\text{m}$: $U = \tfrac12\cdot100\cdot400\,\text{J} = 20\,\text{kJ}$. That corresponds to the height energy of an 80 kg person at $25{,}5\,\text{m}$.<br><br>
<b>Spring gun:</b> $k = 500\,\text{N/m}$, $x = 5\,\text{cm}$: $U = 0{,}625\,\text{J}$. A $10\,\text{g}$ ball reaches $v = \sqrt{2U/m} = 11{,}2\,\text{m/s}$; with double the compression, $22{,}4\,\text{m/s}$.`,
    counterexample: R`<b>$U = mgh$ for large heights:</b> For a rocket at $h = R_E$, $mgh$ would give $mgR_E$, but the correct value is $\Delta U = G_NMm\left(\frac1{R_E}-\frac1{2R_E}\right) = \tfrac12mgR_E$, only half as much. The linear formula holds only for $h\ll R_E$.`,
    pitfalls: R`<ul><li>$U = \tfrac12kx^2$ with $x$ = spring length instead of the displacement from the rest position.</li>
<li>$U = kx^2$ without the $\tfrac12$ (confusion with $F\cdot x$; the force grows from 0 to $kx$).</li>
<li>For a vertically hanging spring, combining gravity and spring energy inconsistently (the new rest position shifts by $mg/k$).</li></ul>`
  },
  "ph4_gravitationspotential": {
    title: R`Gravitational potential U = −G m₁m₂/r and ∇(1/r) = −r̂/r²`,
    category: R`4.4 Potential energy and conservative forces`,
    type: "herleitung",
    front: R`Show that the gravitational force $\vec F = -G_Nm_1m_2\,\hat r/r^2$ follows from the central potential $U(r) = -G_N\dfrac{m_1m_2}{r} + U_0$. To do this, compute $\nabla r$ and $\nabla(1/r)$. How is $U_0$ fixed?`,
    back: R`$$U(r) = -G_N\frac{m_1m_2}{r} + U_0\qquad(4.85)$$
$$\vec F = -\nabla U = G_N m_1m_2\,\nabla\!\left(\frac1r\right)\qquad(4.86)$$
With
$$\nabla r = \begin{pmatrix}x/r\\y/r\\z/r\end{pmatrix} = \frac{\vec r}{r} = \hat r,\qquad \nabla\frac1r = -\frac{\nabla r}{r^2} = -\frac{\hat r}{r^2}\qquad(4.87\text{–}4.92)$$
it follows that
$$\vec F(r) = -G_N\,m_1m_2\,\frac{\hat r}{r^2}\qquad(4.93)$$
The potential depends only on $r$: <b>central field</b>. Convention: $U_0 := \lim_{r\to\infty}U(r) = 0$ (4.94). Then $U$ is negative everywhere (Fig. 4.24), which is immaterial, since only differences count.`,
    meta: R`Script: section 4.4.2.4, Eqs. (4.85)–(4.94), Fig. 4.24, pp. 117–119`,
    explanation: R`<b>Intuition:</b> The gravitational potential is a "funnel" that becomes steeper and deeper towards the mass. The force points downhill (towards the centre) and is larger the steeper the funnel ($|dU/dr| = G_Nm_1m_2/r^2$).<br><br>
<b>Bound vs. unbound:</b> With $U(\infty) = 0$, a body with total energy $E\lt0$ is bound (elliptical orbit); with $E\ge0$ it can escape to infinity. The escape velocity follows from this.<br><br>
<b>Dependencies:</b> $U\propto1/r$, $F\propto1/r^2$. Half the distance gives a potential twice as deep, but four times the force.<br><br>
<b>Connection:</b> Near the surface ($r = R_E + h$, $h\ll R_E$) this becomes $U\approx\text{const} + mgh$ with $g = G_NM/R_E^2$. The Coulomb interaction has the same form with $G_Nm_1m_2\to-\frac{q_1q_2}{4\pi\varepsilon_0}$ (repulsive for like signs). Ch. 7 builds the effective potential and Kepler orbits on this.`,
    derivation: R`<ol class="fc-steps">
<li>$\dfrac{\partial r}{\partial x} = \dfrac{\partial}{\partial x}\sqrt{x^2+y^2+z^2} = \dfrac{2x}{2\sqrt{x^2+y^2+z^2}} = \dfrac xr$<em>Chain rule (4.89, 4.90); analogously for $y$ and $z$.</em></li>
<li>$\nabla r = \dfrac1r(x,y,z) = \dfrac{\vec r}{r} = \hat r$<em>The gradient of the distance is the radial unit vector (4.91): $r$ grows fastest radially.</em></li>
<li>$\nabla\dfrac1r = -\dfrac1{r^2}\nabla r = -\dfrac{\hat r}{r^2}$<em>Chain rule: $\frac{d}{dr}(1/r) = -1/r^2$ (4.87, 4.92).</em></li>
<li>$\vec F = -\nabla U = G_Nm_1m_2\nabla\dfrac1r$<em>The constant $U_0$ drops out under the gradient (4.86).</em></li>
<li>$\vec F = -G_Nm_1m_2\dfrac{\hat r}{r^2}$<em>Insert: attractive, $\propto1/r^2$ (4.93).</em></li>
</ol>`,
    example: R`<b>Escape velocity</b> from the Earth's surface: $\tfrac12mv_F^2 - G_N\frac{Mm}{R_E} = 0$ (just reaching $E = 0$), so $v_F = \sqrt{\frac{2G_NM}{R_E}} = \sqrt{2gR_E} = \sqrt{2\cdot9{,}81\cdot6{,}371\cdot10^{6}}\,\text{m/s} = 11{,}2\,\text{km/s}$, independent of the mass.<br><br>
<b>Potential difference ground–ISS</b> (400 km) per kg: $G_NM\left(\frac1{R_E}-\frac1{R_E+h}\right) = 3{,}7\,\text{MJ/kg}$, slightly less than $gh = 3{,}9\,\text{MJ/kg}$.`,
    counterexample: R`<b>Inside the Earth</b> $U\propto-1/r$ no longer holds. For a homogeneous sphere the force inside grows linearly with $r$ ($F\propto r$), and the potential there is a parabola (Ch. 7.4.2). The formula holds only outside the mass distribution.`,
    pitfalls: R`<ul><li>Sign: $U = -G_Nm_1m_2/r$ is negative, and the force points inward ($-\hat r$).</li>
<li>Writing $\nabla(1/r) = -\vec r/r^2$ instead of $-\hat r/r^2 = -\vec r/r^3$ (wrong dimension).</li>
<li>Mixing $mgh$ and $-G_NMm/r$ with different zero points.</li></ul>`
  },
  "ph4_gleichgewicht": {
    title: R`Gradient and equipotential surfaces, equilibrium positions (NaCl potential)`,
    category: R`4.4 Potential energy and conservative forces`,
    type: "konzept",
    front: R`How is the force geometrically related to the <b>equipotential surfaces</b>? When is a point mass in <b>equilibrium</b>, and how do stable, unstable and indifferent positions differ? Explain using the potential of the Cl⁻ ion in the NaCl crystal.`,
    back: R`<b>Change in potential energy</b> for a displacement $d\vec r$:
$$dE_\text{pot} = \nabla E_\text{pot}\cdot d\vec r\qquad(4.96\text{–}4.98)$$
<ul><li>$d\vec r\parallel\nabla E_\text{pot}$: maximal increase</li>
<li>$d\vec r\perp\nabla E_\text{pot}$: no change</li>
<li>$d\vec r$ antiparallel: decrease</li></ul>
Equipotential surfaces $E_\text{pot}(\vec r) = \text{const}$ (4.99); in 2D "contour lines". The force $\vec F = -\nabla E_\text{pot}$ points "downhill" and stands <b>perpendicular</b> to them (4.100, 4.101).<br><br>
<b>Equilibrium:</b> resulting force zero, i.e. a horizontal tangent of the potential. Depending on the curvature (Fig. 4.25):
<ul><li><b>stable:</b> minimum ($U''>0$), a small displacement leads back</li>
<li><b>unstable:</b> maximum ($U''\lt0$), a small displacement grows</li>
<li><b>indifferent:</b> constant $U$ ($U'' = 0$), every position is an equilibrium</li></ul>
<b>NaCl</b> (Fig. 4.23): $F_x = -dU/dx$; for small distances $dU/dx\lt0$, so repulsive; for large $dU/dx>0$, so attractive. In between lies a minimum at $x_0$: a stable bond.`,
    meta: R`Script: sections 4.4.2.3, 4.4.3, 4.4.4, Eqs. (4.84), (4.95)–(4.101), Figs. 4.22–4.25, pp. 117–122`,
    explanation: R`<b>Intuition (marble in a landscape):</b> In a valley (minimum) the marble rolls back after small disturbances; on a mountain peak it rolls away; on a plane it stays put everywhere.<br><br>
<b>Crystal bonding:</b> Two effects compete: the electric attraction between Na⁺ and Cl⁻ (long-range, $\propto-1/x$) and a strong repulsion when the electron shells overlap (short-range, very steep). Their sum has a minimum: the equilibrium distance in the crystal.<br><br>
<b>Small oscillations:</b> Around a stable minimum $U(x)\approx U(x_0)+\tfrac12U''(x_0)(x-x_0)^2$, like a spring with $k = U''(x_0)$. Atoms in the crystal therefore oscillate harmonically with $\omega = \sqrt{U''(x_0)/m}$ (Ch. 9, heat capacity Ch. 10).<br><br>
<b>Connection:</b> Statics of rigid bodies (Ch. 8.4) and the effective potential of planetary orbits (Ch. 7.3) use the same criteria.`,
    derivation: R`Stability criterion from the Taylor expansion about an equilibrium position $x_0$:
<ol class="fc-steps">
<li>$F(x_0) = -U'(x_0) = 0$<em>Equilibrium: horizontal tangent.</em></li>
<li>$U(x)\approx U(x_0) + \tfrac12U''(x_0)\,(x-x_0)^2$<em>Taylor to second order; the linear term is absent because of step 1.</em></li>
<li>$F(x) = -U'(x)\approx-U''(x_0)\,(x-x_0)$<em>Force for small displacement, linear in the displacement.</em></li>
<li>$U''>0$: restoring; $U''\lt0$: driving away; $U'' = 0$: no force (to second order)<em>The sign of the curvature decides: stable, unstable, indifferent.</em></li>
<li>$m\ddot x = -U''(x_0)(x-x_0)\;\Rightarrow\;\omega = \sqrt{U''(x_0)/m}$<em>In the stable case a harmonic oscillation (cf. spring force 3.9.3).</em></li>
</ol>`,
    example: R`<b>Pendulum:</b> $U(\varphi) = mg\ell(1-\cos\varphi)$. At $\varphi = 0$: $U'' = mg\ell>0$, stable. At $\varphi = \pi$ (pendulum standing upright): $U'' = -mg\ell\lt0$, unstable.<br>
<b>Ball on a flat table:</b> indifferent.<br>
<b>Model potential</b> $U(x) = \frac{a}{x^{12}}-\frac{b}{x^6}$ (Lennard-Jones): minimum at $x_0 = (2a/b)^{1/6}$; for $x\lt x_0$ repulsive, for $x>x_0$ attractive, analogous to NaCl.`,
    counterexample: R`<b>$U' = 0$ does not automatically mean stable:</b> $U = x^3$ has a horizontal tangent at $x = 0$ and $U'' = 0$, but it is not indifferent: for $x\lt0$ the marble rolls away (saddle point). Higher derivatives must be checked.`,
    pitfalls: R`<ul><li>Drawing the force in the direction $+\nabla U$; it points downhill ($-\nabla U$).</li>
<li>Equating equilibrium with "velocity zero"; it means force zero.</li>
<li>Assuming the force runs along the equipotential surfaces; it is perpendicular to them.</li>
<li>Using unstable equilibria as resting positions for oscillations.</li></ul>`
  },
  "ph4_energiesatz": {
    title: R`Energy conservation in mechanics and the general energy theorem`,
    category: R`4.5 Energy conservation`,
    type: "gesetz",
    front: R`Derive the <b>mechanical energy theorem</b> $T + U = \text{const}$. When does it hold, and what is the general energy theorem? What does it imply for a perpetual motion machine of the first kind?`,
    back: R`In a closed system with <b>conservative</b> forces, (4.63) and (4.69) give for the same work
$$W = \tfrac12mv_2^2 - \tfrac12mv_1^2 = U(\vec r_1) - U(\vec r_2)\qquad(4.103)$$
$$\Longleftrightarrow\quad\tfrac12mv_1^2 + U(\vec r_1) = \tfrac12mv_2^2 + U(\vec r_2)\equiv E_\text{ges}\qquad(4.104)$$
The sum of kinetic and potential energy stays constant for all times: a <b>conserved quantity of motion</b>.<br><br>
It holds <b>only</b> for conservative forces; with friction it gives nonsensical results. <b>General energy theorem</b> (closed system):
$$E = mc^2 + T + U + Q + \dots = \text{const}\qquad(4.105)$$
(rest energy, heat $Q$ = disordered kinetic energy of the molecules, …). Consequence: a <b>perpetual motion machine of the first kind</b> (delivering work continuously without energy input or any change in the system) is impossible. Whether energy forms can be converted into one another is governed only by the second law (Ch. 10).`,
    meta: R`Script: section 4.5.1, Eqs. (4.103)–(4.105), p. 123`,
    explanation: R`<b>Intuition:</b> Energy is only shuffled between forms. For a pendulum: at the top everything is potential, at the bottom everything is kinetic, in between a mixture. The sum stays the same.<br><br>
<b>Two calculations of the same work:</b> The work–energy theorem says $W = \Delta T$ (for any force), the definition of the potential $W = -\Delta U$ (only conservative). Equating gives $\Delta(T+U) = 0$.<br><br>
<b>Strength of the energy theorem:</b> One can compute speeds at different places without solving the equation of motion or knowing the path (roller coaster, loop 4.5.2). For times and path shapes Newton's laws are still needed.<br><br>
<b>Symmetry:</b> Energy conservation follows from the time-translation invariance of the laws of nature (Noether). Explicitly time-dependent forces violate the mechanical energy theorem.<br><br>
<b>Connection:</b> The 1st law of thermodynamics (Ch. 10.5) is the energy theorem including heat. For many-particle systems it holds for the sum of all energies, including interaction energy (Ch. 6.5.4).`,
    derivation: R`<ol class="fc-steps">
<li>$W_{1\to2} = T_2 - T_1$<em>Work–energy theorem (4.65), valid for the total force.</em></li>
<li>$W_{1\to2} = U_1 - U_2$<em>Work of a conservative force (4.69).</em></li>
<li>$T_2 - T_1 = U_1 - U_2$<em>Same work, two expressions (4.103).</em></li>
<li>$T_1 + U_1 = T_2 + U_2$<em>Rearranging: the sum is the same at both places (4.104).</em></li>
<li>$\dfrac{d}{dt}(T+U) = m\vec v\cdot\dot{\vec v} + \nabla U\cdot\vec v = \vec v\cdot(m\vec a - \vec F) = 0$<em>Time-derivative check: with $\vec F = -\nabla U$ and Newton II the derivative vanishes.</em></li>
</ol>`,
    example: R`<b>Roller coaster:</b> Starting at rest at $40\,\text{m}$ height, frictionless. At the valley point (height 0): $v = \sqrt{2g\cdot40}\,\text{m/s} = 28\,\text{m/s}$. On a $25\,\text{m}$ high hill: $v = \sqrt{2g\cdot15}\,\text{m/s} = 17{,}2\,\text{m/s}$, independent of the shape of the track.<br><br>
<b>Pendulum:</b> $\ell = 1\,\text{m}$, deflected by $60^\circ$: height difference $\ell(1-\cos60^\circ) = 0{,}5\,\text{m}$, so $v_\text{bottom} = 3{,}1\,\text{m/s}$.`,
    counterexample: R`<b>Braking cart:</b> $T$ decreases, $U$ stays the same (horizontal), so $T + U$ is <i>not</i> constant. The mechanical energy disappears into heat $Q$. The general energy theorem (4.105) still holds; the mechanical one does not.<br>
<b>Perpetual motion designs</b> (wheels with sliding weights etc.) always fail: one knows in advance that the error must be somewhere.`,
    pitfalls: R`<ul><li>Applying the mechanical energy theorem with friction or inelastic collisions.</li>
<li>Forgetting the work of external forces (e.g. a motor); then the system is not closed.</li>
<li>Changing the zero point of $U$ between start and end.</li>
<li>Trying to compute times from the energy theorem; for that one needs the equation of motion.</li></ul>`
  },
  "ph4_nichtkonservativ": {
    title: R`Non-conservative forces: W_NC = ΔT + ΔU`,
    category: R`4.5 Energy conservation`,
    type: "gesetz",
    front: R`What is the energy balance when both <b>conservative</b> forces $\vec F_K$ and <b>non-conservative</b> forces $\vec F_{NK}$ (e.g. friction) act? Derive $\int\vec F_{NK}\cdot d\vec r = \Delta E_\text{ges}$.`,
    back: R`$$W_\text{ges} = \int_{\vec r_1}^{\vec r_2}(\vec F_K+\vec F_{NK})\cdot d\vec r = \underbrace{\int\vec F_K\cdot d\vec r}_{=U_1-U_2 = -\Delta U} + \int\vec F_{NK}\cdot d\vec r = T_2-T_1 =: \Delta T\qquad(4.106)$$
$$\Rightarrow\quad\int_{\vec r_1}^{\vec r_2}\vec F_{NK}\cdot d\vec r = \Delta T + \Delta U = \Delta E_\text{ges}\qquad(4.107)$$
The work of the non-conservative forces changes the total mechanical energy. Friction does negative work and reduces $E_\text{ges}$ (the energy passes into heat); a motor does positive work and increases it.`,
    meta: R`Script: section 4.5.1, Eqs. (4.106)–(4.107), p. 124`,
    explanation: R`<b>Intuition:</b> The conservative forces are booked "in the account" of the potential energy; all others remain as work. What the non-conservative forces do is seen directly in the change of the total mechanical energy.<br><br>
<b>Practical recipe:</b> $E_\text{ges,end} = E_\text{ges,start} + W_{NK}$. For sliding friction $W_{NK} = -\mu F_N\cdot s$ (path length, not displacement!), since friction always opposes the motion.<br><br>
<b>Dependence on the path:</b> Unlike $\Delta U$, $W_{NK}$ depends on the path: a detour with friction costs more energy.<br><br>
<b>Connection:</b> The "loss" of mechanical energy appears in the general energy theorem (4.105) as heat $Q$. Thermodynamically (Ch. 10) this is the conversion of ordered into disordered motion, which cannot be fully reversed (2nd law).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec F = \vec F_K + \vec F_{NK}$<em>Split the total force.</em></li>
<li>$W_\text{ges} = \Delta T$<em>Work–energy theorem holds for the total force (4.65).</em></li>
<li>$\int\vec F_K\cdot d\vec r = -\Delta U$<em>Express the conservative part via the potential (4.69).</em></li>
<li>$-\Delta U + \int\vec F_{NK}\cdot d\vec r = \Delta T$<em>Insert (4.106).</em></li>
<li>$\int\vec F_{NK}\cdot d\vec r = \Delta T + \Delta U = \Delta E_\text{ges}$<em>Rearrange (4.107).</em></li>
</ol>`,
    example: R`<b>Sled</b> ($m = 20\,\text{kg}$) starts at rest on a $10\,\text{m}$ high slope and slides a total of $s = 60\,\text{m}$ (slope and flat ground), mean friction force $F_R = 25\,\text{N}$.<br>
$E_\text{start} = mgh = 1962\,\text{J}$, $W_{NK} = -25\cdot60\,\text{J} = -1500\,\text{J}$, so $T_\text{end} = 462\,\text{J}$ and $v_\text{end} = \sqrt{2\cdot462/20}\,\text{m/s} = 6{,}8\,\text{m/s}$ (without friction $14\,\text{m/s}$).`,
    counterexample: R`<b>Normal force is not conservative, yet does no work:</b> On a fixed surface it is perpendicular to the motion, so $W_{NK} = 0$, and the mechanical energy is conserved although not all forces are conservative. What matters is not "conservative or not" but whether the non-conservative forces do work.`,
    pitfalls: R`<ul><li>Calculating friction work with the displacement instead of the length of the path travelled.</li>
<li>Sign: friction does negative work, $\Delta E_\text{ges}\lt0$.</li>
<li>Counting conservative forces twice (as work and as $\Delta U$).</li></ul>`
  },
  "ph4_looping": {
    title: R`Ball in a circular loop (loop-the-loop): minimum height h = 5R/2`,
    category: R`4.5 Energy conservation`,
    type: "beispiel",
    front: R`A ball slides frictionlessly (without rolling) down a track into a circular loop of radius $R$. From what <b>minimum height</b> $h$ must it start to get round the loop? How large are the normal forces at the bottom, at the side and at the top?`,
    back: R`Forces: gravity $m\vec g$ (always downward) and normal force $\vec N$ (perpendicular to the track). Their sum must supply the centripetal force $F_{ZP} = mv^2/R$ (4.108):
<ul><li>bottom: $|N_1| - mg = m\frac{v_1^2}{R}\;\Rightarrow\;|N_1| = m\left(\frac{v_1^2}{R}+g\right)$</li>
<li>at the side (half height): $|N_2| = m\frac{v_2^2}{R}$</li>
<li>top (B): $|N_B| + mg = m\frac{v_B^2}{R}\;\Rightarrow\;|N_B| = m\left(\frac{v_B^2}{R}-g\right)$</li></ul>
Just in contact at the top: $N_B = 0$, so
$$v_B = \sqrt{gR}\qquad(4.109)$$
Energy conservation between start A ($v_A = 0$, height $h$) and B (height $2R$):
$$mgh = \tfrac12m(gR) + mg(2R) = \tfrac52mgR\quad\Rightarrow\quad h = \tfrac52R\qquad(4.110\text{–}4.112)$$
Independent of the mass and of the exact value of $g$.`,
    meta: R`Script: section 4.5.2, Eqs. (4.108)–(4.112), Figs. 4.26–4.27, pp. 124–127`,
    explanation: R`<b>Intuition:</b> At the top of the loop the ball must be fast enough not to fall down. Gravity alone must just suffice to hold it on the circular path. If it is slower, it leaves the track and falls (on a projectile parabola). This minimum speed must be brought along from the starting height.<br><br>
<b>Why not simply $h = 2R$?</b> With $h = 2R$ the ball would arrive at the top with $v = 0$, but then no centripetal force would be available: it would already fall before. The additional height $R/2$ supplies the kinetic energy $\tfrac12mgR$ for $v_B = \sqrt{gR}$.<br><br>
<b>Normal force at the bottom:</b> With $h = \tfrac52R$ we have $v_1^2 = 5gR$, so $N_1 = 6mg$. On a roller coaster you feel six times your weight in the valley (which is why real roller coasters use "teardrop" loops with a smaller radius at the top).<br><br>
<b>Connection:</b> Combination of the energy theorem (for speeds) and Newton II in the radial direction (for normal forces); neither alone is enough.`,
    derivation: R`<ol class="fc-steps">
<li>Top: $N_B + mg = m\dfrac{v_B^2}{R}$<em>Both forces point to the centre of the circle (downward); together they are the centripetal force.</em></li>
<li>$N_B\ge0\;\Rightarrow\;v_B^2\ge gR$<em>The track can only push, not pull; the limiting case $N_B = 0$ gives $v_B = \sqrt{gR}$ (4.109).</em></li>
<li>$E_A = mgh$<em>Start at rest, zero of height at the lowest point of the loop (4.110).</em></li>
<li>$E_B = \tfrac12mv_B^2 + mg\cdot2R = \tfrac12mgR + 2mgR = \tfrac52mgR$<em>The highest point lies at height $2R$ (4.111).</em></li>
<li>$E_A = E_B\;\Rightarrow\;h = \tfrac52R$<em>Frictionless: mechanical energy conserved; $m$ and $g$ cancel (4.112).</em></li>
<li>Bottom: $v_1^2 = 2gh = 5gR$, $N_1 = m(5g+g) = 6mg$<em>Energy theorem down to the lowest point and radial force balance.</em></li>
</ol>`,
    example: R`Loop with $R = 0{,}40\,\text{m}$: minimum starting height $h = 1{,}00\,\text{m}$, $v_B = \sqrt{9{,}81\cdot0{,}4}\,\text{m/s} = 1{,}98\,\text{m/s}$, $v_1 = \sqrt{5\cdot9{,}81\cdot0{,}4}\,\text{m/s} = 4{,}43\,\text{m/s}$.<br>
A $50\,\text{g}$ ball presses at the bottom with $6mg = 2{,}9\,\text{N}$ on the track, at the side with $\frac{mv_2^2}{R} = 3mg = 1{,}5\,\text{N}$ ($v_2^2 = 3gR$), at the top with $0$.`,
    counterexample: R`<b>Rolling ball:</b> If the ball rolls (instead of sliding), part of the energy goes into rotation ($\tfrac25\cdot\tfrac12mv^2$ for a solid sphere, Ch. 8). Then one needs $h = 2{,}7R$ instead of $2{,}5R$. The simplifying assumption "slides without rolling" is therefore essential.<br>
<b>With friction</b> $h = \tfrac52R$ is not enough either.`,
    pitfalls: R`<ul><li>Assuming $h = 2R$ (at the top $v = 0$ is too little).</li>
<li>Drawing the normal force at the top pointing upward; both forces point to the centre, i.e. downward.</li>
<li>Not combining the energy theorem and the force balance.</li>
<li>Measuring the height from the wrong zero point (the bottom of the loop).</li></ul>`
  }
};
})();
