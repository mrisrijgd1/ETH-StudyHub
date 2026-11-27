(function () {
const R = String.raw;
window.FLASHCARDS_EN_KAPITEL_13 = {
  "ph13_traegheitstensor": {
    title: R`Inertia tensor: L = J·ω, and why L need not be parallel to ω`,
    category: R`13.1 Spinning top motion`,
    type: "herleitung",
    front: R`A rigid body rotates with $\vec\omega$ about a <b>non-fixed</b> axis through the centre of mass. Derive $\vec L = \mathsf J\vec\omega$ and give the components of the <b>inertia tensor</b>. Why is $\vec L$ in general not parallel to $\vec\omega$?`,
    back: R`Without a bearing there are no forces that compensate torques; one may not use only $r_\perp$. Intrinsic angular momentum about the centre of mass (stars omitted):
$$\vec L = \sum\Delta m_i\,\vec r_i\times(\vec\omega\times\vec r_i) = \sum\Delta m_i\left[r_i^2\vec\omega-(\vec r_i\cdot\vec\omega)\vec r_i\right]\;\to\;\int_M\left[r^2\vec\omega-(\vec r\cdot\vec\omega)\vec r\right]dm\qquad(13.1\text{–}13.5)$$
The second term has a component in the direction of $\vec r$, not $\vec\omega$. $x$ component:
$$L_x = \omega_x\int(y^2+z^2)dm-\omega_y\int xy\,dm-\omega_z\int xz\,dm\qquad(13.7\text{–}13.10)$$
$$J_{xx} = \int(y^2+z^2)\,dm,\qquad J_{xy} = -\int xy\,dm,\qquad J_{xz} = -\int xz\,dm\qquad(13.11\text{–}13.13)$$
$$\vec L = \mathsf J\cdot\vec\omega,\qquad\mathsf J = \begin{pmatrix}J_{xx}&J_{xy}&J_{xz}\\J_{yx}&J_{yy}&J_{yz}\\J_{zx}&J_{zy}&J_{zz}\end{pmatrix},\qquad J_{ik} = J_{ki}\qquad(13.14\text{–}13.19)$$
Diagonal elements: moments of inertia about the coordinate axes; off-diagonal elements: products of inertia. Two vectors in different directions cannot be linked by a scalar, only by a tensor (of rank 2).`,
    meta: R`Script: section 13.1.1, Eqs. (13.1)–(13.19), footnote 1, appendix pp. 41–43`,
    explanation: R`<b>Intuition:</b> For a dumbbell that is mounted asymmetrically and rotated about an oblique axis, the angular momentum does not point along the rotation axis. With a fixed axis one notices this as an "imbalance": the bearings must absorb a torque that keeps rotating (balancing car tyres).<br><br>
<b>Where do the off-diagonal terms come from?</b> They measure how asymmetrically the mass is distributed with respect to the axes ($\int xy\,dm$). For a symmetric body with the axes along its symmetry axes they vanish.<br><br>
<b>Dependencies:</b> The components of $\mathsf J$ depend on the coordinate system; but there is always a principal-axes system in which $\mathsf J$ is diagonal (13.1.4). Symmetry $J_{ik} = J_{ki}$ follows from $xy = yx$.<br><br>
<b>Connection:</b> For a fixed axis the bearings deliver an impulsive torque that eliminates the parts perpendicular to $\vec\omega$; what remains is $L_\parallel = J_A\omega$ (8.5.5, Eq. 8.83). The tensor is the generalisation.`,
    derivation: R`<ol class="fc-steps">
<li>$\vec v_i = \vec\omega\times\vec r_i$<em>Rigid body, rotation about the centre of mass.</em></li>
<li>$\vec r\times(\vec\omega\times\vec r) = \vec\omega(\vec r\cdot\vec r)-\vec r(\vec r\cdot\vec\omega)$<em>BAC-CAB rule (13.4).</em></li>
<li>$L_x = \int\left[r^2\omega_x-(x\omega_x+y\omega_y+z\omega_z)x\right]dm$<em>$x$ component (13.7).</em></li>
<li>$= \int\left[(r^2-x^2)\omega_x-xy\,\omega_y-xz\,\omega_z\right]dm$<em>Sort terms (13.8).</em></li>
<li>$r^2-x^2 = y^2+z^2$<em>The perpendicular distance to the $x$ axis appears (13.9, 13.10).</em></li>
<li>$L_x = J_{xx}\omega_x+J_{xy}\omega_y+J_{xz}\omega_z$<em>With the definitions (13.11–13.14).</em></li>
</ol>`,
    example: R`Two point masses $m = 1\,\text{kg}$ at $(1,0,1)\,\text{m}$ and $(-1,0,-1)\,\text{m}$ (oblique dumbbell): $J_{xx} = 2$, $J_{yy} = 4$, $J_{zz} = 2$, $J_{xz} = -2\,\text{kg m}^2$, otherwise zero.<br>
Rotation about $z$ ($\vec\omega = (0,0,\omega)$): $\vec L = (-2\omega,0,2\omega)$, so tilted $45^\circ$ against $\vec\omega$ and perpendicular to the dumbbell axis.`,
    counterexample: R`<b>Sphere or cube:</b> Here $\mathsf J = J\cdot\mathbb 1$ in every coordinate system through the centre of mass; $\vec L\parallel\vec\omega$ for every axis. The tensor character is present but invisible. Only asymmetric bodies show it.`,
    pitfalls: R`<ul><li>Forgetting the minus sign in the definition of the products of inertia.</li>
<li>Believing every $3\times3$ matrix is a tensor (a tensor has a defined transformation behaviour).</li>
<li>Using $\vec L = J\vec\omega$ with a scalar $J$ for arbitrary axes.</li></ul>`
  },
  "ph13_rotationsenergie_tensor": {
    title: R`Rotational energy with the inertia tensor: T* = ½ ωᵗ J ω`,
    category: R`13.1 Spinning top motion`,
    type: "herleitung",
    front: R`Derive the rotational energy of a rigid body about the centre of mass and show $T^* = \tfrac12\vec\omega^{\,t}\mathsf J\vec\omega$. Which vector identities are needed? Do the products of inertia contribute to the energy?`,
    back: R`$$T^* = \frac12\int_Mv^2\,dm = \frac12\int_M(\vec\omega\times\vec r)^2\,dm\qquad(13.20)$$
With the scalar triple product $(\vec a\times\vec b)\cdot\vec c = (\vec b\times\vec c)\cdot\vec a$ and BAC-CAB $\vec a\times(\vec b\times\vec c) = \vec b(\vec a\cdot\vec c)-\vec c(\vec a\cdot\vec b)$ (13.21, 13.22):
$$(\vec\omega\times\vec r)\cdot(\vec\omega\times\vec r) = \{\vec r\times(\vec\omega\times\vec r)\}\cdot\vec\omega = r^2\omega^2-(\vec r\cdot\vec\omega)^2\qquad(13.23\text{–}13.25)$$
$$T^* = \frac12\int\left[r^2\omega^2-(\vec r\cdot\vec\omega)^2\right]dm = \frac12\left(J_{xx}\omega_x^2+J_{yy}\omega_y^2+J_{zz}\omega_z^2+2J_{xy}\omega_x\omega_y+2J_{yz}\omega_y\omega_z+2J_{zx}\omega_z\omega_x\right)\qquad(13.26\text{–}13.28)$$
$$T^* = \tfrac12\,\vec\omega^{\,t}\cdot\mathsf J\cdot\vec\omega\qquad(13.29,\,13.30)$$
All components of the tensor, including the products of inertia, contribute to the energy. Equivalently: $T^* = \tfrac12\vec\omega\cdot\vec L$.`,
    meta: R`Script: section 13.1.2, Eqs. (13.20)–(13.30), appendix p. 44`,
    explanation: R`<b>Intuition:</b> The energy is a quadratic form in $\vec\omega$, like $\tfrac12mv^2$, except that the "mass" now depends on direction. Depending on the axis, the same angular velocity costs a different amount of energy.<br><br>
<b>Two notations:</b> $T^* = \tfrac12\vec\omega\cdot\vec L$ (because $\vec L = \mathsf J\vec\omega$). For a fixed axis with $\vec\omega = \omega\hat n$ one gets $T^* = \tfrac12J_\omega\omega^2$ with $J_\omega = \hat n^t\mathsf J\hat n$ – the moment of inertia about this axis (inertia ellipsoid, 13.1.3).<br><br>
<b>Dependencies:</b> $T^*\propto\omega^2$; in the principal-axes system $T^* = \tfrac12(J_a\omega_a^2+J_b\omega_b^2+J_c\omega_c^2) = \frac{L_a^2}{2J_a}+\frac{L_b^2}{2J_b}+\frac{L_c^2}{2J_c}$ (13.42).<br><br>
<b>Connection:</b> The form $\vec x^{\,t}\mathsf A\vec x$ is known from linear algebra (quadratic form, principal-axis transformation). For the force-free top both $T^*$ and $\vec L$ are conserved (13.1.6).`,
    derivation: R`<ol class="fc-steps">
<li>$(\vec\omega\times\vec r)\cdot\vec c$ with $\vec c = \vec\omega\times\vec r$: $= \{\vec r\times(\vec\omega\times\vec r)\}\cdot\vec\omega$<em>Scalar triple product cyclically permuted (13.21, 13.23).</em></li>
<li>$\vec r\times(\vec\omega\times\vec r) = \vec\omega r^2-\vec r(\vec r\cdot\vec\omega)$<em>BAC-CAB (13.22, 13.24).</em></li>
<li>$\cdot\vec\omega$: $r^2\omega^2-(\vec r\cdot\vec\omega)^2$<em>(13.25).</em></li>
<li>$r^2\omega^2-(x\omega_x+y\omega_y+z\omega_z)^2 = \omega_x^2(y^2+z^2)+\dots-2\omega_x\omega_yxy-\dots$<em>Multiply out: diagonal and cross terms (13.27).</em></li>
<li>$T^* = \tfrac12\sum_{i,k}J_{ik}\omega_i\omega_k$<em>With the tensor components; cross terms doubled because $J_{ik} = J_{ki}$ (13.28, 13.29).</em></li>
</ol>`,
    example: R`Oblique dumbbell seen from above ($J_{zz} = 2\,\text{kg m}^2$), rotation about $z$ with $\omega = 1\,\text{s}^{-1}$: $T^* = \tfrac12J_{zz}\omega^2 = 1\,\text{J}$. Directly: each mass runs at distance $1\,\text{m}$ around the $z$ axis, $T = 2\cdot\tfrac12\cdot1\cdot1^2 = 1\,\text{J}$ ✓. Check with $\tfrac12\vec\omega\cdot\vec L = \tfrac12(0,0,1)\cdot(-2,0,2) = 1\,\text{J}$ ✓.`,
    counterexample: R`<b>"The products of inertia play no role for the energy":</b> Wrong as soon as $\vec\omega$ has several components. For $\vec\omega = (1,0,1)/\sqrt2$ with the oblique dumbbell (rotation about the dumbbell axis) the diagonal terms give $\tfrac12(2\cdot\tfrac12+2\cdot\tfrac12) = 1$, the cross term $\tfrac12\cdot2J_{xz}\cdot\tfrac12 = -1$: sum $0$ – correct, because point masses do not move at all when rotating about their own axis.`,
    pitfalls: R`<ul><li>Forgetting the factor 2 in the cross terms.</li>
<li>Computing $T^* = \tfrac12J\omega^2$ with a diagonal element instead of $J_\omega$ for the actual axis.</li>
<li>Applying vector identities in the wrong order (sign).</li></ul>`
  },
  "ph13_traegheitsellipsoid": {
    title: R`Inertia ellipsoid: moment of inertia J_ω about an arbitrary axis`,
    category: R`13.1 Spinning top motion`,
    type: "konzept",
    front: R`How does one calculate the moment of inertia $J_\omega$ about an arbitrary axis through the centre of mass with direction cosines $\cos\alpha,\cos\beta,\cos\gamma$? What is the <b>inertia ellipsoid</b>, and how does one read $J_\omega$ from it?`,
    back: R`With $\vec\omega = \omega(\cos\alpha,\cos\beta,\cos\gamma)$ (13.31), $T^* = \tfrac12J_\omega\omega^2$ (13.32) with
$$J_\omega = J_{xx}\cos^2\alpha+J_{yy}\cos^2\beta+J_{zz}\cos^2\gamma+2J_{xy}\cos\alpha\cos\beta+2J_{yz}\cos\beta\cos\gamma+2J_{zx}\cos\gamma\cos\alpha\qquad(13.33)$$
Vector along the axis $\vec R = R(\cos\alpha,\cos\beta,\cos\gamma) = (x,y,z)$ (13.34):
$$R^2J_\omega = x^2J_{xx}+y^2J_{yy}+z^2J_{zz}+2xyJ_{xy}+2yzJ_{yz}+2zxJ_{zx}\qquad(13.35)$$
For $R^2J_\omega = k$ (constant, unit $\text{kg m}^4$) this is an <b>ellipsoid</b>:
$$J_\omega = \frac k{R^2}\qquad(13.36)$$
$J_\omega$ is inversely proportional to the square of the distance $R$ from the centre to the ellipsoid surface in the direction of the rotation axis. The inertia ellipsoid is fixed to the body.`,
    meta: R`Script: section 13.1.3, Eqs. (13.31)–(13.36), Fig. 13.1, appendix pp. 44–46`,
    explanation: R`<b>Intuition:</b> The inertia ellipsoid is a "map" of rotational inertia: in directions in which the body is easy to rotate (small $J$), the ellipsoid extends far out; in directions that are hard to rotate it is flat.<br><br>
<b>Watch the reciprocal:</b> The semi-axes are $\propto1/\sqrt J$. A long rod (small $J$ about its long axis) has an ellipsoid that is long along the rod axis – like the rod itself. A flat disc (largest $J$ about its symmetry axis) has an ellipsoid squashed in that direction.<br><br>
<b>Dependencies:</b> Sphere, cube and any body with three equal principal moments of inertia: the ellipsoid is a sphere, $J_\omega$ the same in all directions.<br><br>
<b>Connection:</b> The principal axes of the ellipsoid are the principal axes of inertia (13.1.4); the angular momentum is perpendicular to the tangent plane at the point where the rotation axis pierces the ellipsoid (13.1.4.3).`,
    derivation: R`Why $J_\omega = \hat n^t\mathsf J\hat n$:
<ol class="fc-steps">
<li>$T^* = \tfrac12\vec\omega^{\,t}\mathsf J\vec\omega$ with $\vec\omega = \omega\hat n$<em>(13.29) with unit vector $\hat n$ of the axis.</em></li>
<li>$T^* = \tfrac12\omega^2\,\hat n^t\mathsf J\hat n$<em>Factor out $\omega$.</em></li>
<li>Compare with $T^* = \tfrac12J_\omega\omega^2$: $J_\omega = \hat n^t\mathsf J\hat n$<em>(13.32, 13.33) written out.</em></li>
<li>$\vec R = R\hat n$: $\vec R^{\,t}\mathsf J\vec R = R^2J_\omega$<em>Quadratic form in $(x,y,z)$ (13.35).</em></li>
<li>$R^2J_\omega = k$ = const. $\Rightarrow$ second-degree surface, positive definite: ellipsoid<em>All $J_\omega\gt0$ (apart from degenerate cases such as point masses on a line).</em></li>
</ol>`,
    example: R`Oblique dumbbell from the tensor card, rotation about the $z$ axis: $J_\omega = J_{zz} = 2\,\text{kg m}^2$. About the axis $\hat n = (1,0,-1)/\sqrt2$ (perpendicular to the dumbbell): $J_\omega = \tfrac12(2+2)-J_{xz}\cdot1 = 2+2 = 4\,\text{kg m}^2 = 2m\ell^2$ with $\ell = \sqrt2\,\text{m}$ ✓.`,
    counterexample: R`<b>Degenerate ellipsoid:</b> For a dumbbell made of two point masses, $J = 0$ about the dumbbell axis; the "ellipsoid" degenerates into an infinitely long circular cylinder (13.1.4.4). The ellipsoid representation requires positive moments of inertia in all directions.`,
    pitfalls: R`<ul><li>Assuming the ellipsoid has the shape of the body (it is rather "inverse": semi-axes $\propto1/\sqrt J$).</li>
<li>Forgetting the cross terms in $J_\omega$.</li>
<li>Treating the ellipsoid as fixed in space (it rotates with the body).</li></ul>`
  },
  "ph13_hauptachsen": {
    title: R`Principal axes, principal moments of inertia and top types`,
    category: R`13.1 Spinning top motion`,
    type: "definition",
    front: R`What are <b>principal axes</b> and <b>principal moments of inertia</b>? What do $\vec L$ and $T^*$ look like in the principal-axes system? When is $\vec L\parallel\vec\omega$? Distinguish the asymmetric, symmetric (prolate/oblate) and spherical top.`,
    back: R`In the system of the three principal axes of the ellipsoid (principal-axis transformation) the tensor becomes diagonal:
$$R^2J_\omega = x'^2J_a+y'^2J_b+z'^2J_c,\qquad\mathsf J' = \text{diag}(J_a,J_b,J_c),\qquad J_a\ge J_b\ge J_c\qquad(13.37\text{–}13.39)$$
$J_\omega$ remains unchanged as a scalar; $J_a,J_b,J_c$ in general do not coincide with $J_{xx},J_{yy},J_{zz}$. With direction cosines to the principal axes: $J_\omega = J_a\cos^2\alpha+J_b\cos^2\beta+J_c\cos^2\gamma$ (13.40).
$$\vec L = (J_a\omega_a,\,J_b\omega_b,\,J_c\omega_c),\qquad T^* = \tfrac12(J_a\omega_a^2+J_b\omega_b^2+J_c\omega_c^2) = \frac{L_a^2}{2J_a}+\frac{L_b^2}{2J_b}+\frac{L_c^2}{2J_c}\qquad(13.41,\,13.42)$$
In general $\vec L\parallel\vec\omega$ only for $J_a = J_b = J_c$ (13.43) – or when $\vec\omega$ lies along a principal axis (13.44).
<ul><li><b>Asymmetric:</b> all three different (cuboid $a\neq b\neq c$, H₂O, NO₂).</li>
<li><b>Symmetric:</b> two equal (all bodies of rotational symmetry, linear molecules, cuboid with square cross-section); ellipsoid of rotational symmetry. <b>Prolate:</b> moment about the symmetry axis smallest (cigar, ellipsoid elongated); <b>oblate:</b> largest (disc, ellipsoid squashed).</li>
<li><b>Spherical:</b> all equal (sphere, cube).</li></ul>`,
    meta: R`Script: sections 13.1.4.1–13.1.4.2, Eqs. (13.37)–(13.45), Fig. 13.2, appendix pp. 46–49`,
    explanation: R`<b>Intuition:</b> Every rigid body, however irregular, has three mutually perpendicular "natural" rotation axes. If it rotates about one of them, the angular momentum points exactly along the axis, and there is no imbalance.<br><br>
<b>Mathematically:</b> Principal axes are the eigenvectors, principal moments of inertia the eigenvalues of the symmetric tensor $\mathsf J$ (spectral theorem of linear algebra: real eigenvalues, orthogonal eigenvectors).<br><br>
<b>Symmetry helps:</b> Every symmetry axis of a body is a principal axis. A square cuboid is a symmetric top, although it is not rotationally symmetric; its ellipsoid is rotationally symmetric all the same.<br><br>
<b>Connection:</b> The types of top determine molecular spectra (rotational spectroscopy) and the stability of free rotations (13.1.5).`,
    derivation: R`Principal axes of the oblique dumbbell (masses $1\,\text{kg}$ at $\pm(1,0,1)\,\text{m}$):
<ol class="fc-steps">
<li>$\mathsf J = \begin{pmatrix}2&0&-2\\0&4&0\\-2&0&2\end{pmatrix}\,\text{kg m}^2$<em>From the tensor card.</em></li>
<li>$y$ axis: $\mathsf J\vec e_y = 4\vec e_y$<em>Eigenvector with eigenvalue 4.</em></li>
<li>$xz$ block $\begin{pmatrix}2&-2\\-2&2\end{pmatrix}$: eigenvalues $4$ (vector $(1,-1)$) and $0$ (vector $(1,1)$)<em>Characteristic polynomial $(2-\lambda)^2-4 = 0$.</em></li>
<li>$J_a = J_b = 4\,\text{kg m}^2$, $J_c = 0$ along $(1,0,1)/\sqrt2$<em>The dumbbell axis is a principal axis with $J = 0$; every axis perpendicular to it has $2m\ell^2 = 4$.</em></li>
<li>Prolate symmetric top (limiting case)<em>Two equal large moments, one small moment about the symmetry axis.</em></li>
</ol>`,
    example: R`Cuboid $3\times2\times1\,\text{cm}$, $M = 0{,}1\,\text{kg}$: $J = \frac M{12}(b^2+c^2)$ etc.: about an axis parallel to the shortest edge $\frac{0{,}1}{12}(9+4) = 0{,}108$, parallel to the middle edge $\frac{0{,}1}{12}(9+1) = 0{,}083$, parallel to the longest edge $\frac{0{,}1}{12}(4+1) = 0{,}042\,\text{kg cm}^2$ – asymmetric top.<br>
Hydrogen molecule: symmetric (linear); benzene: oblate; methane: spherical.`,
    counterexample: R`<b>Notation in the script:</b> By (13.39) $J_a\ge J_b\ge J_c$. Later the script writes "$J_a\lt J_b = J_c$" for the prolate top and "$J_a = J_b\lt J_c$" for the top with symmetry axis $c$ – this does not fit the convention (13.39). The physics decides: prolate = smallest moment about the symmetry axis, oblate = largest.`,
    pitfalls: R`<ul><li>Equating principal moments of inertia with the diagonal elements of an arbitrary coordinate system.</li>
<li>Equating "symmetric top" with "rotationally symmetric body" (square cuboid).</li>
<li>Defining prolate and oblate by the shape of the body instead of by the moments of inertia.</li></ul>`
  },
  "ph13_L_tangentialebene": {
    title: R`Angular momentum is perpendicular to the tangent plane of the inertia ellipsoid`,
    category: R`13.1 Spinning top motion`,
    type: "herleitung",
    front: R`Show that the angular momentum $\vec L$ is perpendicular to the tangent plane to the inertia ellipsoid at the point where the rotation axis $\vec\omega$ pierces it. What is the distance $R$ of this point from the centre of mass? Apply this to the rotating dumbbell.`,
    back: R`In the principal-axes system: $k(x,y,z) = x^2J_a+y^2J_b+z^2J_c$ (13.46). Piercing point $\vec r_\omega = R\vec\omega/|\vec\omega|$ (13.47). The gradient is perpendicular to the level surface:
$$\nabla k\big|_{\vec r_\omega} = 2\begin{pmatrix}xJ_a\\yJ_b\\zJ_c\end{pmatrix} = \frac{2R}{|\vec\omega|}\begin{pmatrix}\omega_aJ_a\\\omega_bJ_b\\\omega_cJ_c\end{pmatrix} = \frac{2R}{|\vec\omega|}\vec L\qquad(13.48)$$
So $\vec L\parallel\nabla k$, i.e. $\vec L$ is perpendicular to the tangent plane.<br>
Via the normal form and the Hesse normal form of the tangent plane (13.49–13.60) it follows that:
$$R^2 = \frac{2kT^*}{L^2}\qquad(13.61)$$
$R$ is constant exactly when $T^*$ and $L$ are conserved.<br><br>
<b>Dumbbell</b> (two masses $m$, rod $2\ell$, Fig. 13.3): $J_c = 0$ (rod axis), $J_a = J_b = 2m\ell^2$; the ellipsoid degenerates into a circular cylinder about the rod axis with radius $\sqrt{k/(2m\ell^2)}$. $\vec L$ is perpendicular to the dumbbell axis, lies in the plane spanned by the axis and $\vec\omega$, and rotates with the dumbbell.`,
    meta: R`Script: sections 13.1.4.3–13.1.4.4, Eqs. (13.46)–(13.61), Fig. 13.3, appendix pp. 50–52`,
    explanation: R`<b>Intuition:</b> $\vec\omega$ points to a point on the ellipsoid surface; $\vec L$ points in the direction of the surface normal there. Only at the poles (principal axes) do direction and normal coincide – everywhere else $\vec L$ and $\vec\omega$ are tilted against each other.<br><br>
<b>Meaning for the force-free top:</b> $\vec L$ is fixed in space, so the tangent plane is also fixed in orientation, and because of (13.61) it has a fixed distance from the centre of mass. The ellipsoid therefore rolls on a fixed plane (Poinsot construction, 13.1.6).<br><br>
<b>Dumbbell:</b> Because the masses have no extent perpendicular to the rod, only the component of $\vec\omega$ perpendicular to the rod contributes to the angular momentum; $\vec L$ therefore always stands perpendicular to the rod. If the dumbbell rotates about an oblique fixed axis, $\vec L$ runs around with it: this needs a torque from the bearings (imbalance).<br><br>
<b>Connection:</b> Gradient as normal (11.1.3); conservation of energy and angular momentum (13.1.6).`,
    derivation: R`<ol class="fc-steps">
<li>$\nabla(x^2J_a+y^2J_b+z^2J_c) = (2xJ_a,2yJ_b,2zJ_c)$<em>Partial derivatives (13.48).</em></li>
<li>$(x,y,z) = \dfrac R{|\vec\omega|}(\omega_a,\omega_b,\omega_c)$<em>Piercing point lies in the direction of $\vec\omega$ (13.47).</em></li>
<li>$\nabla k = \dfrac{2R}{|\vec\omega|}(J_a\omega_a,J_b\omega_b,J_c\omega_c) = \dfrac{2R}{|\vec\omega|}\vec L$<em>With (13.41).</em></li>
<li>Gradient $\perp$ level surface $\Rightarrow$ $\vec L\perp$ tangent plane<em>Geometric property of the gradient.</em></li>
<li>$\cos\alpha = \dfrac{Rx_\omega}{A^2} = \dfrac{J_a\omega_a}{J_\omega\omega}$ etc.<em>Comparing coefficients of the tangent plane with its Hesse normal form, $A^2 = R^2J_\omega/J_a$ (13.50–13.56).</em></li>
<li>$\sum\cos^2 = 1\Rightarrow L^2 = J_\omega^2\omega^2$, and with $k = R^2J_\omega$, $2T^* = J_\omega\omega^2$: $R^2 = \dfrac{2kT^*}{L^2}$<em>(13.57–13.61).</em></li>
</ol>`,
    example: R`Oblique dumbbell rotating about $z$: $\vec\omega = (0,0,1)\,\text{s}^{-1}$, $\vec L = (-2,0,2)\,\text{kg m}^2/\text{s}$; $\vec L\cdot$ dumbbell direction $(1,0,1) = 0$ ✓. Angle between $\vec L$ and $\vec\omega$: $45^\circ$. During the rotation $\vec L$ runs on a cone about the $z$ axis: $|\dot{\vec L}| = \omega\cdot2 = 2\,\text{N m}$ must be supplied by the bearing.`,
    counterexample: R`<b>"$\vec L$ points in the direction of the rotation axis, only somewhat shortened":</b> No – $\vec L$ points in the direction of the normal of the ellipsoid, which for oblique axes deviates clearly from $\vec\omega$. For the dumbbell $\vec L$ even always stands perpendicular to the rod, however oblique $\vec\omega$ is.`,
    pitfalls: R`<ul><li>Identifying the gradient of the ellipsoid equation with $\vec\omega$ instead of $\vec L$.</li>
<li>Assuming $R$ is constant even under an external torque.</li>
<li>Treating the moment of inertia about the rod axis as finite for the dumbbell.</li></ul>`
  },
  "ph13_freie_achsen": {
    title: R`Free axes and stability of rotation (middle axis unstable)`,
    category: R`13.1 Spinning top motion`,
    type: "konzept",
    front: R`What are <b>free axes</b>? When do $\vec L$ and $\vec\omega$ point in the same direction, so that the rotation axis stays fixed in space without bearings? About which free axes is the rotation <b>stable</b>?`,
    back: R`$\vec L$ and $\vec\omega$ point in the same direction if
<ul><li>the body rotates about one of its <b>principal axes of inertia</b> (only one component of $\vec\omega$ non-zero), or</li>
<li>for a symmetric top about any axis through $S$ perpendicular to the symmetry axis (there the two moments are equal).</li></ul>
Without an external torque $\vec L$ is constant; then in these cases the rotation axis is also fixed in space, and the motion corresponds to a rotation about a rigid axis – without bearings. That is why the principal axes are called <b>free axes</b>.<br><br>
<b>Stability:</b> Stable only about the axes of the <b>largest</b> and the <b>smallest</b> moment of inertia. About the axis of the <b>middle</b> moment, small disturbances grow; the body begins to tumble.`,
    meta: R`Script: section 13.1.5, appendix pp. 52–53`,
    explanation: R`<b>Intuition (tennis-racket theorem):</b> If one tosses a racket, a book or a phone and lets it rotate about the axis of the middle moment of inertia, it inevitably also does half-flips. About the longest and the shortest axis it turns cleanly.<br><br>
<b>Explanation via energy and angular momentum:</b> With $L$ and $T^*$ fixed, $\vec L$ (in the body frame) lies on the intersection curve of the sphere $L^2$ = const. with the ellipsoid $\sum L_i^2/(2J_i) = T^*$. Near the axes of the largest and smallest $J$ these intersection curves are small closed loops around the axis (stable); at the middle axis they cross (saddle point), and small disturbances lead far away.<br><br>
<b>Dependencies:</b> The more different the three moments, the more pronounced the instability.<br><br>
<b>Connection:</b> Force-free top motion (13.1.6) describes what happens with small deviations from a stable axis: nutation. Spaceflight: satellites are spin-stabilised about a stable principal axis.`,
    derivation: R`Why a principal axis is a free axis:
<ol class="fc-steps">
<li>$\vec\omega = \omega_a\vec e_a$<em>Rotation exactly about one principal axis (13.44).</em></li>
<li>$\vec L = \mathsf J\vec\omega = J_a\omega_a\vec e_a\parallel\vec\omega$<em>Diagonal tensor in the principal-axes system.</em></li>
<li>$\vec M = 0\Rightarrow\vec L$ = const.<em>Force-free (torque-free).</em></li>
<li>$\vec\omega = \vec L/J_a$ constant, fixed in space<em>The axis needs no bearing.</em></li>
<li>$\vec\omega$ oblique to the principal axes: $\vec L\not\parallel\vec\omega$, $\vec L$ fixed $\Rightarrow\vec\omega$ moves<em>Tumbling or nutation (13.1.6).</em></li>
</ol>`,
    example: R`Book (e.g. $24\times17\times3\,\text{cm}$): rotated about the axis perpendicular to the cover (largest $J$) and about the axis parallel to the long edge (smallest $J$) it is stable; about the axis parallel to the short side of the cover (middle $J$) it flips over.<br>
Demonstrated spectacularly on the ISS with a wing nut (Dzhanibekov effect).`,
    counterexample: R`<b>With energy loss only the axis of the largest moment is stable:</b> The satellite Explorer 1 (1958) was meant to rotate about its long axis (smallest $J$), but tipped into a tumbling motion and finally into a rotation transverse to it, because flexible antennas dissipated energy. At fixed $L$, $T^* = L^2/(2J)$ is minimal for the largest $J$. The statement of the script holds for the rigid, loss-free body.`,
    pitfalls: R`<ul><li>Believing every principal axis is stable.</li>
<li>Equating a free axis with a symmetry axis (asymmetric bodies also have three free axes).</li>
<li>Ignoring dissipation when talking about long-term stability.</li></ul>`
  },
  "ph13_kraeftefreier_kreisel": {
    title: R`Force-free symmetric top: nutation, herpolhode and polhode cones`,
    category: R`13.1 Spinning top motion`,
    type: "konzept",
    front: R`A symmetric top is mounted frictionlessly at its centre of mass. Why is it called "force-free" (better: torque-free), which quantities are conserved, and which three axes must one distinguish? Describe the <b>nutation</b> with the space cone, body cone and nutation cone.`,
    back: R`Mounted at the centre of mass the moment of gravity vanishes:
$$\frac{d\vec L}{dt} = \vec M = \vec 0\;\Rightarrow\;\vec L = \text{const.}\qquad(13.62)$$
The kinetic energy $T^*$ is also constant (indifferent equilibrium, gravity does no work).<br>
<b>Three axes</b> (Fig. 13.4): spatially fixed angular momentum axis $\vec L$; instantaneous rotation axis $\vec\omega$ (not fixed in space); figure axis $c$ (fixed in space only if $\vec L$ lies along it).<br>
<b>Geometry:</b> Both hold at the same time:
$$L_x^2+L_y^2+L_z^2 = L^2\ \text{(sphere, fixed in space)},\qquad\frac{L_a^2}{J_a}+\frac{L_b^2}{J_b}+\frac{L_c^2}{J_c} = 2T^*\ \text{(ellipsoid, fixed to the body)}\qquad(13.63,\,13.64)$$
The tip of $\vec L$ lies on the intersection curve (Fig. 13.5); the body must rotate so that this is always satisfied. Result: $\vec\omega$ and the figure axis circle around the space-fixed $\vec L$ (nutation).
<ul><li><b>Herpolhode cone</b> (space-fixed, axis $\vec L$): path of $\vec\omega$.</li>
<li><b>Nutation cone</b>: path of the figure axis around $\vec L$ (angle $\alpha$ constant).</li>
<li><b>Polhode cone</b> (body-fixed, about the figure axis, angle $\beta$ between $\vec\omega$ and $c$ constant): rolls on the herpolhode cone – outside for the prolate, inside for the oblate top (Fig. 13.7).</li></ul>
$c$, $\vec L$ and $\vec\omega$ lie in one plane; the angle between $\vec L$ and $\vec\omega$ is $\beta-\alpha$.`,
    meta: R`Script: section 13.1.6, Eqs. (13.62)–(13.64), Figs. 13.4–13.7, footnote 3, appendix pp. 53–57`,
    explanation: R`<b>Intuition:</b> If one throws a plate into the air with a slight jolt, it "wobbles": its symmetry axis circles about a fixed direction while it spins fast. The fixed direction is $\vec L$, the wobbling is the nutation.<br><br>
<b>Poinsot picture:</b> The tangent plane to the inertia ellipsoid at the piercing point of $\vec\omega$ is fixed in space (perpendicular to $\vec L$, fixed distance because of 13.61). The ellipsoid rolls without slipping on this plane; the contact point is the instantaneous pivot.<br><br>
<b>Dependencies (supplement):</b> In space the figure axis moves with $\omega_\text{nut} = L/J_\perp$ around $\vec L$; in the body frame $\vec\omega$ moves with $\frac{J_\parallel-J_\perp}{J_\perp}\omega_c$ around the figure axis.<br><br>
<b>Connection:</b> Earth: the rotation axis wanders relative to the Earth's surface (Chandler wobble), because the Earth is a slightly oblate top.`,
    derivation: R`Why $c$, $\vec L$ and $\vec\omega$ lie in one plane:
<ol class="fc-steps">
<li>$\vec\omega = \vec\omega_\perp+\omega_c\hat c$<em>Decomposition into components perpendicular and parallel to the figure axis (Fig. 13.4a).</em></li>
<li>$\vec L = J_\perp\vec\omega_\perp+J_c\omega_c\hat c$<em>Symmetric top: both perpendicular moments equal ($J_\perp$).</em></li>
<li>$\vec L$ is a linear combination of $\vec\omega_\perp$ and $\hat c$<em>So $\vec L$ lies in the plane spanned by $\hat c$ and $\vec\omega$.</em></li>
<li>$\tan\angle(\hat c,\vec L) = \dfrac{J_\perp}{J_c}\tan\angle(\hat c,\vec\omega)$<em>Oblate ($J_c\gt J_\perp$): $\vec L$ closer to $c$ than $\vec\omega$; prolate the reverse.</em></li>
<li>$|\vec\omega_\perp|$, $\omega_c$ constant $\Rightarrow$ angles constant<em>From $L$ = const. and $T^*$ = const.: all three cones have fixed opening.</em></li>
</ol>`,
    example: R`<b>Earth</b> (oblate, $(J_c-J_\perp)/J_\perp\approx1/305$): Euler predicted a wandering of the rotation axis relative to the Earth's crust with a period of $\approx305$ days; the observed Chandler wobble has a period of $\approx433$ days (the Earth is not rigid), amplitude a few metres at the pole.`,
    counterexample: R`<b>"Force-free" does not mean without forces:</b> Gravity acts all the same, and the bearing carries the top. Only the <i>torque</i> about the centre of mass must vanish. If the top is supported away from the centre of mass, it additionally precesses (13.1.7).`,
    pitfalls: R`<ul><li>Interchanging the terms nutation and precession.</li>
<li>Believing the figure axis of the force-free top is fixed in space.</li>
<li>Confusing the herpolhode cone (space-fixed) and the polhode cone (body-fixed).</li></ul>`
  },
  "ph13_praezession": {
    title: R`Precession of the symmetric top: ω_P = M/L = mgr/(Jω)`,
    category: R`13.1 Spinning top motion`,
    type: "herleitung",
    front: R`A top rotating fast about its figure axis is supported not at its centre of mass but at a distance $r$. Why does it not tip over, but <b>precess</b>? Derive the precession frequency and show that it does not depend on the angle of inclination.`,
    back: R`For rotation about the figure axis, $\vec L$, $\vec\omega$ and $c$ coincide; no nutation (Fig. 13.8). Gravity produces
$$\vec M = \vec r\times m\vec g\qquad(13.65)$$
($\vec r$: from the support point to the centre of mass). $\vec M\perp\vec L$: only the direction of $\vec L$ changes, not its magnitude; $\vec L$ (and with it the top) turns horizontally in a circle.
$$|d\vec L| = L\,d\varphi\;\Rightarrow\;M = \frac{dL}{dt} = L\frac{d\varphi}{dt},\qquad\omega_P = \frac{d\varphi}{dt} = \frac ML = \frac M{J\omega}\qquad(13.66\text{–}13.68)$$
(assumption $\omega_P\ll\omega$.) For inclination $\alpha$ against the vertical:
$$M = mgr\sin\alpha,\qquad dL = L\sin\alpha\,d\varphi\;\Rightarrow\;\omega_P = \frac{mgr\sin\alpha}{J\omega\sin\alpha} = \frac{mgr}{J\omega}\qquad(13.69\text{–}13.71)$$
Independent of the orientation of the top's axis; only angular momentum and torque count.`,
    meta: R`Script: section 13.1.7, Eqs. (13.65)–(13.71), Fig. 13.8, appendix pp. 56–58`,
    explanation: R`<b>Intuition:</b> The torque wants to tip the top over, that is, turn $\vec L$ downwards. But $\dot{\vec L} = \vec M$ points <i>horizontally</i> (perpendicular to $\vec r$ and $\vec g$). Therefore the axis swings sideways instead of falling – like a wheel suspended on a string at one end of its axle.<br><br>
<b>Dependencies:</b> $\omega_P\propto\frac1\omega$: the faster the top, the slower the precession. If friction slows it down, it precesses faster and eventually begins to wobble and falls over. $\omega_P\propto r$ and $\propto m$.<br><br>
<b>Why independent of $\alpha$?</b> Both the torque and the radius of the circle described by the tip of $\vec L$ are $\propto\sin\alpha$; the two cancel.<br><br>
<b>Connection:</b> Precession of the Earth's axis (Moon and Sun exert a torque on the equatorial bulge): period about $25\,800$ years. Nuclear spin precession in a magnetic field (Larmor frequency) is the magnetic analogue (MRI).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec M = \vec r\times m\vec g$, $|\vec M| = mgr\sin\alpha$<em>Torque of gravity about the support point (13.65, 13.69).</em></li>
<li>$\vec M\perp\vec L\Rightarrow\dfrac{d}{dt}L^2 = 2\vec L\cdot\vec M = 0$<em>Magnitude of $\vec L$ stays (11.47).</em></li>
<li>$|d\vec L| = (L\sin\alpha)\,d\varphi$<em>The tip of $\vec L$ runs on a circle of radius $L\sin\alpha$ (13.70).</em></li>
<li>$M\,dt = L\sin\alpha\,d\varphi$<em>$d\vec L = \vec M\,dt$.</em></li>
<li>$\omega_P = \dfrac{d\varphi}{dt} = \dfrac{mgr\sin\alpha}{L\sin\alpha} = \dfrac{mgr}{J\omega}$<em>(13.71); valid for $\omega_P\ll\omega$ (then $L\approx J\omega$).</em></li>
</ol>`,
    example: R`Spinning disc $m = 1\,\text{kg}$, $R = 10\,\text{cm}$ ($J = \tfrac12mR^2 = 0{,}005\,\text{kg m}^2$), $50\,\text{rev/s}$ ($\omega = 314\,\text{s}^{-1}$, $L = 1{,}57\,\text{kg m}^2/\text{s}$), centre of mass $r = 10\,\text{cm}$ from the support point: $M = 0{,}98\,\text{N m}$, $\omega_P = 0{,}62\,\text{s}^{-1}$, precession period $10\,\text{s}$. At half the speed: $5\,\text{s}$.`,
    counterexample: R`<b>Slow top:</b> For $\omega\to0$, $\omega_P = M/(J\omega)\to\infty$ – the approximation $\omega_P\ll\omega$ breaks down. A non-rotating "top" simply falls over; between the two limiting cases precession and nutation occur together (heavy top).`,
    pitfalls: R`<ul><li>Expecting the top to "tip" in the direction of the torque instead of swinging sideways.</li>
<li>Assuming $\omega_P\propto\omega$ instead of $\propto1/\omega$.</li>
<li>Taking the factor $\sin\alpha$ into account only in the torque, not in the radius of the circle described by $\vec L$.</li></ul>`
  }
};
})();
