
/**
 * A 3×3 matrix used for representing 3D rotation and scale. Usually used as an orthogonal basis for a [Transform3D].
 *
 * Contains 3 vector fields X, Y and Z as its columns, which are typically interpreted as the local basis vectors of a transformation. For such use, it is composed of a scaling and a rotation matrix, in that order (M = R.S).
 *
 * Basis can also be accessed as an array of 3D vectors. These vectors are usually orthogonal to each other, but are not necessarily normalized (due to scaling).
 *
 * For more information, read the "Matrices and transforms" documentation article.
 *
*/
declare class Basis {

  
/**
 * A 3×3 matrix used for representing 3D rotation and scale. Usually used as an orthogonal basis for a [Transform3D].
 *
 * Contains 3 vector fields X, Y and Z as its columns, which are typically interpreted as the local basis vectors of a transformation. For such use, it is composed of a scaling and a rotation matrix, in that order (M = R.S).
 *
 * Basis can also be accessed as an array of 3D vectors. These vectors are usually orthogonal to each other, but are not necessarily normalized (due to scaling).
 *
 * For more information, read the "Matrices and transforms" documentation article.
 *
*/
  new(): Basis; 
  static "new"(): Basis 


/** The basis matrix's X vector (column 0). Equivalent to array index [code]0[/code]. */
x: Vector3;

/** The basis matrix's Y vector (column 1). Equivalent to array index [code]1[/code]. */
y: Vector3;

/** The basis matrix's Z vector (column 2). Equivalent to array index [code]2[/code]. */
z: Vector3;

/**
 * Returns the determinant of the basis matrix. If the basis is uniformly scaled, its determinant is the square of the scale.
 *
 * A negative determinant means the basis has a negative scale. A zero determinant means the basis isn't invertible, and is usually considered invalid.
 *
*/
determinant(): float;

/** Constructs a pure rotation Basis matrix from Euler angles in the specified Euler rotation order. By default, use YXZ order (most common). See the [enum EulerOrder] enum for possible values. */
from_euler(): Basis;

/** Constructs a pure scale basis matrix with no rotation or shearing. The scale values are set as the diagonal of the matrix, and the other parts of the matrix are zero. */
from_scale(): Basis;

/**
 * Returns the basis's rotation in the form of Euler angles. The Euler order depends on the [param order] parameter, by default it uses the YXZ convention: when decomposing, first Z, then X, and Y last. The returned vector contains the rotation angles in the format (X angle, Y angle, Z angle).
 *
 * Consider using the [method get_rotation_quaternion] method instead, which returns a [Quaternion] quaternion instead of Euler angles.
 *
*/
get_euler(): Vector3;

/** Returns the basis's rotation in the form of a quaternion. See [method get_euler] if you need Euler angles, but keep in mind quaternions should generally be preferred to Euler angles. */
get_rotation_quaternion(): Quaternion;

/** Assuming that the matrix is the combination of a rotation and scaling, return the absolute value of scaling factors along each axis. */
get_scale(): Vector3;

/** Returns the inverse of the matrix. */
inverse(): Basis;

/** Returns [code]true[/code] if the basis is conformal, meaning it preserves angles and distance ratios, and may only be composed of rotation and uniform scale. Returns [code]false[/code] if the basis has non-uniform scale or shear/skew. This can be used to validate if the basis is non-distorted, which is important for physics and other use cases. */
is_conformal(): boolean;

/** Returns [code]true[/code] if this basis and [param b] are approximately equal, by calling [method @GlobalScope.is_equal_approx] on all vector components. */
is_equal_approx(): boolean;

/** Returns [code]true[/code] if this basis is finite, by calling [method @GlobalScope.is_finite] on all vector components. */
is_finite(): boolean;

/**
 * Creates a Basis with a rotation such that the forward axis (-Z) points towards the [param target] position.
 *
 * The up axis (+Y) points as close to the [param up] vector as possible while staying perpendicular to the forward axis. The resulting Basis is orthonormalized. The [param target] and [param up] vectors cannot be zero, and cannot be parallel to each other.
 *
 * If [param use_model_front] is `true`, the +Z axis (asset front) is treated as forward (implies +X is left) and points toward the [param target] position. By default, the -Z axis (camera forward) is treated as forward (implies +X is right).
 *
*/
looking_at(): Basis;

/** Returns the orthonormalized version of the matrix (useful to call from time to time to avoid rounding error for orthogonal matrices). This performs a Gram-Schmidt orthonormalization on the basis of the matrix. */
orthonormalized(): Basis;

/** Introduce an additional rotation around the given axis by [param angle] (in radians). The axis must be a normalized vector. */
rotated(): Basis;

/** Introduce an additional scaling specified by the given 3D scaling factor. */
scaled(): Basis;

/** Assuming that the matrix is a proper rotation matrix, slerp performs a spherical-linear interpolation with another rotation matrix. */
slerp(): Basis;

/** Transposed dot product with the X axis of the matrix. */
tdotx(): float;

/** Transposed dot product with the Y axis of the matrix. */
tdoty(): float;

/** Transposed dot product with the Z axis of the matrix. */
tdotz(): float;

/** Returns the transposed version of the matrix. */
transposed(): Basis;

  connect<T extends SignalsOf<Basis>>(signal: T, method: SignalFunction<Basis[T]>): number;



/**
 * The identity basis, with no rotation or scaling applied.
 *
 * This is identical to creating [constructor Basis] without any parameters. This constant can be used to make your code clearer, and for consistency with C#.
 *
*/
static IDENTITY: Basis;

/**
 * The basis that will flip something along the X axis when used in a transformation.
 *
*/
static FLIP_X: Basis;

/**
 * The basis that will flip something along the Y axis when used in a transformation.
 *
*/
static FLIP_Y: Basis;

/**
 * The basis that will flip something along the Z axis when used in a transformation.
 *
*/
static FLIP_Z: Basis;



}

