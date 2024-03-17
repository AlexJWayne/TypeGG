
/**
 * A 2×3 matrix (2 rows, 3 columns) used for 2D linear transformations. It can represent transformations such as translation, rotation, and scaling. It consists of three [Vector2] values: [member x], [member y], and the [member origin].
 *
 * For more information, read the "Matrices and transforms" documentation article.
 *
*/
declare class Transform2D {

  
/**
 * A 2×3 matrix (2 rows, 3 columns) used for 2D linear transformations. It can represent transformations such as translation, rotation, and scaling. It consists of three [Vector2] values: [member x], [member y], and the [member origin].
 *
 * For more information, read the "Matrices and transforms" documentation article.
 *
*/
  new(): Transform2D; 
  static "new"(): Transform2D 


/** The origin vector (column 2, the third column). Equivalent to array index [code]2[/code]. The origin vector represents translation. */
origin: Vector2;

/** The basis matrix's X vector (column 0). Equivalent to array index [code]0[/code]. */
x: Vector2;

/** The basis matrix's Y vector (column 1). Equivalent to array index [code]1[/code]. */
y: Vector2;

/** Returns the inverse of the transform, under the assumption that the basis is invertible (must have non-zero determinant). */
affine_inverse(): Transform2D;

/**
 * Returns a vector transformed (multiplied) by the basis matrix.
 *
 * This method does not account for translation (the [member origin] vector).
 *
*/
basis_xform(): Vector2;

/**
 * Returns a vector transformed (multiplied) by the inverse basis matrix, under the assumption that the basis is orthonormal (i.e. rotation/reflection is fine, scaling/skew is not).
 *
 * This method does not account for translation (the [member origin] vector).
 *
 * `transform.basis_xform_inv(vector)` is equivalent to `transform.inverse().basis_xform(vector)`. See [method inverse].
 *
 * For non-orthonormal transforms (e.g. with scaling) `transform.affine_inverse().basis_xform(vector)` can be used instead. See [method affine_inverse].
 *
*/
basis_xform_inv(): Vector2;

/**
 * Returns the determinant of the basis matrix. If the basis is uniformly scaled, then its determinant equals the square of the scale factor.
 *
 * A negative determinant means the basis was flipped, so one part of the scale is negative. A zero determinant means the basis isn't invertible, and is usually considered invalid.
 *
*/
determinant(): float;

/** Returns the transform's origin (translation). */
get_origin(): Vector2;

/** Returns the transform's rotation (in radians). */
get_rotation(): float;

/** Returns the scale. */
get_scale(): Vector2;

/** Returns the transform's skew (in radians). */
get_skew(): float;

/** Returns a transform interpolated between this transform and another by a given [param weight] (on the range of 0.0 to 1.0). */
interpolate_with(): Transform2D;

/** Returns the inverse of the transform, under the assumption that the transformation basis is orthonormal (i.e. rotation/reflection is fine, scaling/skew is not). Use [method affine_inverse] for non-orthonormal transforms (e.g. with scaling). */
inverse(): Transform2D;

/** Returns [code]true[/code] if the transform's basis is conformal, meaning it preserves angles and distance ratios, and may only be composed of rotation and uniform scale. Returns [code]false[/code] if the transform's basis has non-uniform scale or shear/skew. This can be used to validate if the transform is non-distorted, which is important for physics and other use cases. */
is_conformal(): boolean;

/** Returns [code]true[/code] if this transform and [param xform] are approximately equal, by running [method @GlobalScope.is_equal_approx] on each component. */
is_equal_approx(): boolean;

/** Returns [code]true[/code] if this transform is finite, by calling [method @GlobalScope.is_finite] on each component. */
is_finite(): boolean;

/**
 * Returns a copy of the transform rotated such that the rotated X-axis points towards the [param target] position.
 *
 * Operations take place in global space.
 *
*/
looking_at(): Transform2D;

/** Returns the transform with the basis orthogonal (90 degrees), and normalized axis vectors (scale of 1 or -1). */
orthonormalized(): Transform2D;

/**
 * Returns a copy of the transform rotated by the given [param angle] (in radians).
 *
 * This method is an optimized version of multiplying the given transform `X` with a corresponding rotation transform `R` from the left, i.e., `R * X`.
 *
 * This can be seen as transforming with respect to the global/parent frame.
 *
*/
rotated(): Transform2D;

/**
 * Returns a copy of the transform rotated by the given [param angle] (in radians).
 *
 * This method is an optimized version of multiplying the given transform `X` with a corresponding rotation transform `R` from the right, i.e., `X * R`.
 *
 * This can be seen as transforming with respect to the local frame.
 *
*/
rotated_local(): Transform2D;

/**
 * Returns a copy of the transform scaled by the given [param scale] factor.
 *
 * This method is an optimized version of multiplying the given transform `X` with a corresponding scaling transform `S` from the left, i.e., `S * X`.
 *
 * This can be seen as transforming with respect to the global/parent frame.
 *
*/
scaled(): Transform2D;

/**
 * Returns a copy of the transform scaled by the given [param scale] factor.
 *
 * This method is an optimized version of multiplying the given transform `X` with a corresponding scaling transform `S` from the right, i.e., `X * S`.
 *
 * This can be seen as transforming with respect to the local frame.
 *
*/
scaled_local(): Transform2D;

/**
 * Returns a copy of the transform translated by the given [param offset].
 *
 * This method is an optimized version of multiplying the given transform `X` with a corresponding translation transform `T` from the left, i.e., `T * X`.
 *
 * This can be seen as transforming with respect to the global/parent frame.
 *
*/
translated(): Transform2D;

/**
 * Returns a copy of the transform translated by the given [param offset].
 *
 * This method is an optimized version of multiplying the given transform `X` with a corresponding translation transform `T` from the right, i.e., `X * T`.
 *
 * This can be seen as transforming with respect to the local frame.
 *
*/
translated_local(): Transform2D;

  connect<T extends SignalsOf<Transform2D>>(signal: T, method: SignalFunction<Transform2D[T]>): number;



/**
 * The identity [Transform2D] with no translation, rotation or scaling applied. When applied to other data structures, [constant IDENTITY] performs no transformation.
 *
*/
static IDENTITY: Transform2D;

/**
 * The [Transform2D] that will flip something along the X axis.
 *
*/
static FLIP_X: Transform2D;

/**
 * The [Transform2D] that will flip something along the Y axis.
 *
*/
static FLIP_Y: Transform2D;



}

