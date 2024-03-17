
/**
 * Quaternions are similar to [Basis], which implements the matrix representation of rotations. Unlike [Basis], which stores rotation, scale, and shearing, quaternions only store rotation.
 *
 * Quaternions can be parametrized using both an axis-angle pair or Euler angles. Due to their compactness and the way they are stored in memory, certain operations (obtaining axis-angle and performing SLERP, in particular) are more efficient and robust against floating-point errors.
 *
 * **Note:** Quaternions need to be normalized before being used for rotation.
 *
*/
declare class Quaternion {

  
/**
 * Quaternions are similar to [Basis], which implements the matrix representation of rotations. Unlike [Basis], which stores rotation, scale, and shearing, quaternions only store rotation.
 *
 * Quaternions can be parametrized using both an axis-angle pair or Euler angles. Due to their compactness and the way they are stored in memory, certain operations (obtaining axis-angle and performing SLERP, in particular) are more efficient and robust against floating-point errors.
 *
 * **Note:** Quaternions need to be normalized before being used for rotation.
 *
*/
  new(): Quaternion; 
  static "new"(): Quaternion 


/**
 * W component of the quaternion (real part).
 *
 * Quaternion components should usually not be manipulated directly.
 *
*/
w: float;

/**
 * X component of the quaternion (imaginary `i` axis part).
 *
 * Quaternion components should usually not be manipulated directly.
 *
*/
x: float;

/**
 * Y component of the quaternion (imaginary `j` axis part).
 *
 * Quaternion components should usually not be manipulated directly.
 *
*/
y: float;

/**
 * Z component of the quaternion (imaginary `k` axis part).
 *
 * Quaternion components should usually not be manipulated directly.
 *
*/
z: float;

/**
 * Returns the angle between this quaternion and [param to]. This is the magnitude of the angle you would need to rotate by to get from one to the other.
 *
 * **Note:** The magnitude of the floating-point error for this method is abnormally high, so methods such as `is_zero_approx` will not work reliably.
 *
*/
angle_to(): float;

/** Returns the dot product of two quaternions. */
dot(): float;

/** No documentation provided. */
exp(): Quaternion;

/** Constructs a Quaternion from Euler angles in YXZ rotation order. */
from_euler(): Quaternion;

/** No documentation provided. */
get_angle(): float;

/** No documentation provided. */
get_axis(): Vector3;

/** Returns the quaternion's rotation in the form of Euler angles. The Euler order depends on the [param order] parameter, for example using the YXZ convention: since this method decomposes, first Z, then X, and Y last. See the [enum EulerOrder] enum for possible values. The returned vector contains the rotation angles in the format (X angle, Y angle, Z angle). */
get_euler(): Vector3;

/** Returns the inverse of the quaternion. */
inverse(): Quaternion;

/** Returns [code]true[/code] if this quaternion and [param to] are approximately equal, by running [method @GlobalScope.is_equal_approx] on each component. */
is_equal_approx(): boolean;

/** Returns [code]true[/code] if this quaternion is finite, by calling [method @GlobalScope.is_finite] on each component. */
is_finite(): boolean;

/** Returns whether the quaternion is normalized or not. */
is_normalized(): boolean;

/** Returns the length of the quaternion. */
length(): float;

/** Returns the length of the quaternion, squared. */
length_squared(): float;

/** No documentation provided. */
log(): Quaternion;

/** Returns a copy of the quaternion, normalized to unit length. */
normalized(): Quaternion;

/**
 * Returns the result of the spherical linear interpolation between this quaternion and [param to] by amount [param weight].
 *
 * **Note:** Both quaternions must be normalized.
 *
*/
slerp(): Quaternion;

/** Returns the result of the spherical linear interpolation between this quaternion and [param to] by amount [param weight], but without checking if the rotation path is not bigger than 90 degrees. */
slerpni(): Quaternion;

/** Performs a spherical cubic interpolation between quaternions [param pre_a], this vector, [param b], and [param post_b], by the given amount [param weight]. */
spherical_cubic_interpolate(): Quaternion;

/**
 * Performs a spherical cubic interpolation between quaternions [param pre_a], this vector, [param b], and [param post_b], by the given amount [param weight].
 *
 * It can perform smoother interpolation than [method spherical_cubic_interpolate] by the time values.
 *
*/
spherical_cubic_interpolate_in_time(): Quaternion;

  connect<T extends SignalsOf<Quaternion>>(signal: T, method: SignalFunction<Quaternion[T]>): number;



/**
 * The identity quaternion, representing no rotation. Equivalent to an identity [Basis] matrix. If a vector is transformed by an identity quaternion, it will not change.
 *
*/
static IDENTITY: Quaternion;



}

