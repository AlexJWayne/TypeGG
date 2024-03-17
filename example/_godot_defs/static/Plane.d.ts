
/**
 * Represents a normalized plane equation. [member normal] is the normal of the plane (a, b, c normalized), and [member d] is the distance from the origin to the plane (in the direction of "normal"). "Over" or "Above" the plane is considered the side of the plane towards where the normal is pointing.
 *
*/
declare class Plane {

  
/**
 * Represents a normalized plane equation. [member normal] is the normal of the plane (a, b, c normalized), and [member d] is the distance from the origin to the plane (in the direction of "normal"). "Over" or "Above" the plane is considered the side of the plane towards where the normal is pointing.
 *
*/
  new(): Plane; 
  static "new"(): Plane 


/**
 * The distance from the origin to the plane, expressed in terms of [member normal] (according to its direction and magnitude). Actual absolute distance from the origin to the plane can be calculated as `abs(d) / normal.length()` (if [member normal] has zero length then this [Plane] does not represent a valid plane).
 *
 * In the scalar equation of the plane `ax + by + cz = d`, this is [code skip-lint]d`, while the `(a, b, c)` coordinates are represented by the [member normal] property.
 *
*/
d: float;

/**
 * The normal of the plane, typically a unit vector. Shouldn't be a zero vector as [Plane] with such [member normal] does not represent a valid plane.
 *
 * In the scalar equation of the plane `ax + by + cz = d`, this is the vector `(a, b, c)`, where [code skip-lint]d` is the [member d] property.
 *
*/
normal: Vector3;

/** The X component of the plane's [member normal] vector. */
x: float;

/** The Y component of the plane's [member normal] vector. */
y: float;

/** The Z component of the plane's [member normal] vector. */
z: float;

/** Returns the shortest distance from the plane to the position [param point]. If the point is above the plane, the distance will be positive. If below, the distance will be negative. */
distance_to(): float;

/** Returns the center of the plane. */
get_center(): Vector3;

/** Returns [code]true[/code] if [param point] is inside the plane. Comparison uses a custom minimum [param tolerance] threshold. */
has_point(): boolean;

/** Returns the intersection point of the three planes [param b], [param c] and this plane. If no intersection is found, [code]null[/code] is returned. */
intersect_3(): any;

/** Returns the intersection point of a ray consisting of the position [param from] and the direction normal [param dir] with this plane. If no intersection is found, [code]null[/code] is returned. */
intersects_ray(): any;

/** Returns the intersection point of a segment from position [param from] to position [param to] with this plane. If no intersection is found, [code]null[/code] is returned. */
intersects_segment(): any;

/** Returns [code]true[/code] if this plane and [param to_plane] are approximately equal, by running [method @GlobalScope.is_equal_approx] on each component. */
is_equal_approx(): boolean;

/** Returns [code]true[/code] if this plane is finite, by calling [method @GlobalScope.is_finite] on each component. */
is_finite(): boolean;

/** Returns [code]true[/code] if [param point] is located above the plane. */
is_point_over(): boolean;

/** Returns a copy of the plane, with normalized [member normal] (so it's a unit vector). Returns [code]Plane(0, 0, 0, 0)[/code] if [member normal] can't be normalized (it has zero length). */
normalized(): Plane;

/** Returns the orthogonal projection of [param point] into a point in the plane. */
project(): Vector3;

  connect<T extends SignalsOf<Plane>>(signal: T, method: SignalFunction<Plane[T]>): number;



/**
 * A plane that extends in the Y and Z axes (normal vector points +X).
 *
*/
static PLANE_YZ: Plane;

/**
 * A plane that extends in the X and Z axes (normal vector points +Y).
 *
*/
static PLANE_XZ: Plane;

/**
 * A plane that extends in the X and Y axes (normal vector points +Z).
 *
*/
static PLANE_XY: Plane;



}

