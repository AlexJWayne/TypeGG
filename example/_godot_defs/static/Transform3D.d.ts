
/**
 * A 3×4 matrix (3 rows, 4 columns) used for 3D linear transformations. It can represent transformations such as translation, rotation, and scaling. It consists of a [member basis] (first 3 columns) and a [Vector3] for the [member origin] (last column).
 *
 * For more information, read the "Matrices and transforms" documentation article.
 *
*/
declare class Transform3D {

  
/**
 * A 3×4 matrix (3 rows, 4 columns) used for 3D linear transformations. It can represent transformations such as translation, rotation, and scaling. It consists of a [member basis] (first 3 columns) and a [Vector3] for the [member origin] (last column).
 *
 * For more information, read the "Matrices and transforms" documentation article.
 *
*/
  new(): Transform3D; 
  static "new"(): Transform3D 


/** The basis is a matrix containing 3 [Vector3] as its columns: X axis, Y axis, and Z axis. These vectors can be interpreted as the basis vectors of local coordinate system traveling with the object. */
basis: Basis;

/** The translation offset of the transform (column 3, the fourth column). Equivalent to array index [code]3[/code]. */
origin: Vector3;

/** Returns the inverse of the transform, under the assumption that the basis is invertible (must have non-zero determinant). */
affine_inverse(): Transform3D;

/** Returns a transform interpolated between this transform and another by a given [param weight] (on the range of 0.0 to 1.0). */
interpolate_with(): Transform3D;

/** Returns the inverse of the transform, under the assumption that the transformation basis is orthonormal (i.e. rotation/reflection is fine, scaling/skew is not). Use [method affine_inverse] for non-orthonormal transforms (e.g. with scaling). */
inverse(): Transform3D;

/** Returns [code]true[/code] if this transform and [param xform] are approximately equal, by running [method @GlobalScope.is_equal_approx] on each component. */
is_equal_approx(): boolean;

/** Returns [code]true[/code] if this transform is finite, by calling [method @GlobalScope.is_finite] on each component. */
is_finite(): boolean;

/**
 * Returns a copy of the transform rotated such that the forward axis (-Z) points towards the [param target] position.
 *
 * The up axis (+Y) points as close to the [param up] vector as possible while staying perpendicular to the forward axis. The resulting transform is orthonormalized. The existing rotation, scale, and skew information from the original transform is discarded. The [param target] and [param up] vectors cannot be zero, cannot be parallel to each other, and are defined in global/parent space.
 *
 * If [param use_model_front] is `true`, the +Z axis (asset front) is treated as forward (implies +X is left) and points toward the [param target] position. By default, the -Z axis (camera forward) is treated as forward (implies +X is right).
 *
*/
looking_at(): Transform3D;

/** Returns the transform with the basis orthogonal (90 degrees), and normalized axis vectors (scale of 1 or -1). */
orthonormalized(): Transform3D;

/**
 * Returns a copy of the transform rotated around the given [param axis] by the given [param angle] (in radians).
 *
 * The [param axis] must be a normalized vector.
 *
 * This method is an optimized version of multiplying the given transform `X` with a corresponding rotation transform `R` from the left, i.e., `R * X`.
 *
 * This can be seen as transforming with respect to the global/parent frame.
 *
*/
rotated(): Transform3D;

/**
 * Returns a copy of the transform rotated around the given [param axis] by the given [param angle] (in radians).
 *
 * The [param axis] must be a normalized vector.
 *
 * This method is an optimized version of multiplying the given transform `X` with a corresponding rotation transform `R` from the right, i.e., `X * R`.
 *
 * This can be seen as transforming with respect to the local frame.
 *
*/
rotated_local(): Transform3D;

/**
 * Returns a copy of the transform scaled by the given [param scale] factor.
 *
 * This method is an optimized version of multiplying the given transform `X` with a corresponding scaling transform `S` from the left, i.e., `S * X`.
 *
 * This can be seen as transforming with respect to the global/parent frame.
 *
*/
scaled(): Transform3D;

/**
 * Returns a copy of the transform scaled by the given [param scale] factor.
 *
 * This method is an optimized version of multiplying the given transform `X` with a corresponding scaling transform `S` from the right, i.e., `X * S`.
 *
 * This can be seen as transforming with respect to the local frame.
 *
*/
scaled_local(): Transform3D;

/**
 * Returns a copy of the transform translated by the given [param offset].
 *
 * This method is an optimized version of multiplying the given transform `X` with a corresponding translation transform `T` from the left, i.e., `T * X`.
 *
 * This can be seen as transforming with respect to the global/parent frame.
 *
*/
translated(): Transform3D;

/**
 * Returns a copy of the transform translated by the given [param offset].
 *
 * This method is an optimized version of multiplying the given transform `X` with a corresponding translation transform `T` from the right, i.e., `X * T`.
 *
 * This can be seen as transforming with respect to the local frame.
 *
*/
translated_local(): Transform3D;

  connect<T extends SignalsOf<Transform3D>>(signal: T, method: SignalFunction<Transform3D[T]>): number;



/**
 * [Transform3D] with no translation, rotation or scaling applied. When applied to other data structures, [constant IDENTITY] performs no transformation.
 *
*/
static IDENTITY: Transform3D;

/**
 * [Transform3D] with mirroring applied perpendicular to the YZ plane.
 *
*/
static FLIP_X: Transform3D;

/**
 * [Transform3D] with mirroring applied perpendicular to the XZ plane.
 *
*/
static FLIP_Y: Transform3D;

/**
 * [Transform3D] with mirroring applied perpendicular to the XY plane.
 *
*/
static FLIP_Z: Transform3D;



}

