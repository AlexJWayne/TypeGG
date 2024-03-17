
/**
 * Provides a set of helper functions to create geometric shapes, compute intersections between shapes, and process various other geometric operations in 3D.
 *
*/
declare class Geometry3DClass extends Object  {

  
/**
 * Provides a set of helper functions to create geometric shapes, compute intersections between shapes, and process various other geometric operations in 3D.
 *
*/
  new(): Geometry3DClass; 
  static "new"(): Geometry3DClass 



/** Returns an array with 6 [Plane]s that describe the sides of a box centered at the origin. The box size is defined by [param extents], which represents one (positive) corner of the box (i.e. half its actual size). */
build_box_planes(): Plane[];

/** Returns an array of [Plane]s closely bounding a faceted capsule centered at the origin with radius [param radius] and height [param height]. The parameter [param sides] defines how many planes will be generated for the side part of the capsule, whereas [param lats] gives the number of latitudinal steps at the bottom and top of the capsule. The parameter [param axis] describes the axis along which the capsule is oriented (0 for X, 1 for Y, 2 for Z). */
build_capsule_planes(): Plane[];

/** Returns an array of [Plane]s closely bounding a faceted cylinder centered at the origin with radius [param radius] and height [param height]. The parameter [param sides] defines how many planes will be generated for the round part of the cylinder. The parameter [param axis] describes the axis along which the cylinder is oriented (0 for X, 1 for Y, 2 for Z). */
build_cylinder_planes(): Plane[];

/** Clips the polygon defined by the points in [param points] against the [param plane] and returns the points of the clipped polygon. */
clip_polygon(): PackedVector3Array;

/** Calculates and returns all the vertex points of a convex shape defined by an array of [param planes]. */
compute_convex_mesh_points(): PackedVector3Array;

/** Returns the 3D point on the 3D segment ([param s1], [param s2]) that is closest to [param point]. The returned point will always be inside the specified segment. */
get_closest_point_to_segment(): Vector3;

/** Returns the 3D point on the 3D line defined by ([param s1], [param s2]) that is closest to [param point]. The returned point can be inside the segment ([param s1], [param s2]) or outside of it, i.e. somewhere on the line extending from the segment. */
get_closest_point_to_segment_uncapped(): Vector3;

/** Given the two 3D segments ([param p1], [param p2]) and ([param q1], [param q2]), finds those two points on the two segments that are closest to each other. Returns a [PackedVector3Array] that contains this point on ([param p1], [param p2]) as well the accompanying point on ([param q1], [param q2]). */
get_closest_points_between_segments(): PackedVector3Array;

/**
 * Returns a [Vector3] containing weights based on how close a 3D position ([param point]) is to a triangle's different vertices ([param a], [param b] and [param c]). This is useful for interpolating between the data of different vertices in a triangle. One example use case is using this to smoothly rotate over a mesh instead of relying solely on face normals.
 *
 * [url=https://en.wikipedia.org/wiki/Barycentric_coordinate_system]Here is a more detailed explanation of barycentric coordinates.[/url]
 *
*/
get_triangle_barycentric_coords(): Vector3;

/** Tests if the 3D ray starting at [param from] with the direction of [param dir] intersects the triangle specified by [param a], [param b] and [param c]. If yes, returns the point of intersection as [Vector3]. If no intersection takes place, returns [code]null[/code]. */
ray_intersects_triangle(): any;

/** Given a convex hull defined though the [Plane]s in the array [param planes], tests if the segment ([param from], [param to]) intersects with that hull. If an intersection is found, returns a [PackedVector3Array] containing the point the intersection and the hull's normal. Otherwise, returns an empty array. */
segment_intersects_convex(): PackedVector3Array;

/** Checks if the segment ([param from], [param to]) intersects the cylinder with height [param height] that is centered at the origin and has radius [param radius]. If no, returns an empty [PackedVector3Array]. If an intersection takes place, the returned array contains the point of intersection and the cylinder's normal at the point of intersection. */
segment_intersects_cylinder(): PackedVector3Array;

/** Checks if the segment ([param from], [param to]) intersects the sphere that is located at [param sphere_position] and has radius [param sphere_radius]. If no, returns an empty [PackedVector3Array]. If yes, returns a [PackedVector3Array] containing the point of intersection and the sphere's normal at the point of intersection. */
segment_intersects_sphere(): PackedVector3Array;

/** Tests if the segment ([param from], [param to]) intersects the triangle [param a], [param b], [param c]. If yes, returns the point of intersection as [Vector3]. If no intersection takes place, returns [code]null[/code]. */
segment_intersects_triangle(): any;

  connect<T extends SignalsOf<Geometry3DClass>>(signal: T, method: SignalFunction<Geometry3DClass[T]>): number;






}

