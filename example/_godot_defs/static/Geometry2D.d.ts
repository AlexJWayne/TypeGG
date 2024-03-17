
/**
 * Provides a set of helper functions to create geometric shapes, compute intersections between shapes, and process various other geometric operations in 2D.
 *
*/
declare class Geometry2DClass extends Object  {

  
/**
 * Provides a set of helper functions to create geometric shapes, compute intersections between shapes, and process various other geometric operations in 2D.
 *
*/
  new(): Geometry2DClass; 
  static "new"(): Geometry2DClass 



/**
 * Clips [param polygon_a] against [param polygon_b] and returns an array of clipped polygons. This performs [constant OPERATION_DIFFERENCE] between polygons. Returns an empty array if [param polygon_b] completely overlaps [param polygon_a].
 *
 * If [param polygon_b] is enclosed by [param polygon_a], returns an outer polygon (boundary) and inner polygon (hole) which could be distinguished by calling [method is_polygon_clockwise].
 *
*/
clip_polygons(): PackedVector2Array[];

/** Clips [param polyline] against [param polygon] and returns an array of clipped polylines. This performs [constant OPERATION_DIFFERENCE] between the polyline and the polygon. This operation can be thought of as cutting a line with a closed shape. */
clip_polyline_with_polygon(): PackedVector2Array[];

/** Given an array of [Vector2]s, returns the convex hull as a list of points in counterclockwise order. The last point is the same as the first one. */
convex_hull(): PackedVector2Array;

/** Decomposes the [param polygon] into multiple convex hulls and returns an array of [PackedVector2Array]. */
decompose_polygon_in_convex(): PackedVector2Array[];

/**
 * Mutually excludes common area defined by intersection of [param polygon_a] and [param polygon_b] (see [method intersect_polygons]) and returns an array of excluded polygons. This performs [constant OPERATION_XOR] between polygons. In other words, returns all but common area between polygons.
 *
 * The operation may result in an outer polygon (boundary) and inner polygon (hole) produced which could be distinguished by calling [method is_polygon_clockwise].
 *
*/
exclude_polygons(): PackedVector2Array[];

/** Returns the 2D point on the 2D segment ([param s1], [param s2]) that is closest to [param point]. The returned point will always be inside the specified segment. */
get_closest_point_to_segment(): Vector2;

/** Returns the 2D point on the 2D line defined by ([param s1], [param s2]) that is closest to [param point]. The returned point can be inside the segment ([param s1], [param s2]) or outside of it, i.e. somewhere on the line extending from the segment. */
get_closest_point_to_segment_uncapped(): Vector2;

/** Given the two 2D segments ([param p1], [param q1]) and ([param p2], [param q2]), finds those two points on the two segments that are closest to each other. Returns a [PackedVector2Array] that contains this point on ([param p1], [param q1]) as well the accompanying point on ([param p2], [param q2]). */
get_closest_points_between_segments(): PackedVector2Array;

/**
 * Intersects [param polygon_a] with [param polygon_b] and returns an array of intersected polygons. This performs [constant OPERATION_INTERSECTION] between polygons. In other words, returns common area shared by polygons. Returns an empty array if no intersection occurs.
 *
 * The operation may result in an outer polygon (boundary) and inner polygon (hole) produced which could be distinguished by calling [method is_polygon_clockwise].
 *
*/
intersect_polygons(): PackedVector2Array[];

/** Intersects [param polyline] with [param polygon] and returns an array of intersected polylines. This performs [constant OPERATION_INTERSECTION] between the polyline and the polygon. This operation can be thought of as chopping a line with a closed shape. */
intersect_polyline_with_polygon(): PackedVector2Array[];

/** Returns [code]true[/code] if [param point] is inside the circle or if it's located exactly [i]on[/i] the circle's boundary, otherwise returns [code]false[/code]. */
is_point_in_circle(): boolean;

/** Returns [code]true[/code] if [param point] is inside [param polygon] or if it's located exactly [i]on[/i] polygon's boundary, otherwise returns [code]false[/code]. */
is_point_in_polygon(): boolean;

/** Returns [code]true[/code] if [param polygon]'s vertices are ordered in clockwise order, otherwise returns [code]false[/code]. */
is_polygon_clockwise(): boolean;

/**
 * Checks if the two lines ([param from_a], [param dir_a]) and ([param from_b], [param dir_b]) intersect. If yes, return the point of intersection as [Vector2]. If no intersection takes place, returns `null`.
 *
 * **Note:** The lines are specified using direction vectors, not end points.
 *
*/
line_intersects_line(): any;

/** Given an array of [Vector2]s representing tiles, builds an atlas. The returned dictionary has two keys: [code]points[/code] is a [PackedVector2Array] that specifies the positions of each tile, [code]size[/code] contains the overall size of the whole atlas as [Vector2i]. */
make_atlas(): Dictionary<any, any>;

/**
 * Merges (combines) [param polygon_a] and [param polygon_b] and returns an array of merged polygons. This performs [constant OPERATION_UNION] between polygons.
 *
 * The operation may result in an outer polygon (boundary) and multiple inner polygons (holes) produced which could be distinguished by calling [method is_polygon_clockwise].
 *
*/
merge_polygons(): PackedVector2Array[];

/**
 * Inflates or deflates [param polygon] by [param delta] units (pixels). If [param delta] is positive, makes the polygon grow outward. If [param delta] is negative, shrinks the polygon inward. Returns an array of polygons because inflating/deflating may result in multiple discrete polygons. Returns an empty array if [param delta] is negative and the absolute value of it approximately exceeds the minimum bounding rectangle dimensions of the polygon.
 *
 * Each polygon's vertices will be rounded as determined by [param join_type], see [enum PolyJoinType].
 *
 * The operation may result in an outer polygon (boundary) and inner polygon (hole) produced which could be distinguished by calling [method is_polygon_clockwise].
 *
 * **Note:** To translate the polygon's vertices specifically, multiply them to a [Transform2D]:
 *
 * @example 
 * 
 * 
 * var polygon = PackedVector2Array([Vector2(0, 0), Vector2(100, 0), Vector2(100, 100), Vector2(0, 100)])
 * var offset = Vector2(50, 50)
 * polygon = Transform2D(0, offset) * polygon
 * print(polygon) # prints [(50, 50), (150, 50), (150, 150), (50, 150)]
 * 
 * 
 * var polygon = new Vector2[] { new Vector2(0, 0), new Vector2(100, 0), new Vector2(100, 100), new Vector2(0, 100) };
 * var offset = new Vector2(50, 50);
 * polygon = new Transform2D(0, offset) * polygon;
 * GD.Print((Variant)polygon); // prints [(50, 50), (150, 50), (150, 150), (50, 150)]
 * 
 * @summary 
 * 
 *
*/
offset_polygon(): PackedVector2Array[];

/**
 * Inflates or deflates [param polyline] by [param delta] units (pixels), producing polygons. If [param delta] is positive, makes the polyline grow outward. Returns an array of polygons because inflating/deflating may result in multiple discrete polygons. If [param delta] is negative, returns an empty array.
 *
 * Each polygon's vertices will be rounded as determined by [param join_type], see [enum PolyJoinType].
 *
 * Each polygon's endpoints will be rounded as determined by [param end_type], see [enum PolyEndType].
 *
 * The operation may result in an outer polygon (boundary) and inner polygon (hole) produced which could be distinguished by calling [method is_polygon_clockwise].
 *
*/
offset_polyline(): PackedVector2Array[];

/** Returns if [param point] is inside the triangle specified by [param a], [param b] and [param c]. */
point_is_inside_triangle(): boolean;

/** Given the 2D segment ([param segment_from], [param segment_to]), returns the position on the segment (as a number between 0 and 1) at which the segment hits the circle that is located at position [param circle_position] and has radius [param circle_radius]. If the segment does not intersect the circle, -1 is returned (this is also the case if the line extending the segment would intersect the circle, but the segment does not). */
segment_intersects_circle(): float;

/** Checks if the two segments ([param from_a], [param to_a]) and ([param from_b], [param to_b]) intersect. If yes, return the point of intersection as [Vector2]. If no intersection takes place, returns [code]null[/code]. */
segment_intersects_segment(): any;

/** Triangulates the area specified by discrete set of [param points] such that no point is inside the circumcircle of any resulting triangle. Returns a [PackedInt32Array] where each triangle consists of three consecutive point indices into [param points] (i.e. the returned array will have [code]n * 3[/code] elements, with [code]n[/code] being the number of found triangles). If the triangulation did not succeed, an empty [PackedInt32Array] is returned. */
triangulate_delaunay(): PackedInt32Array;

/** Triangulates the polygon specified by the points in [param polygon]. Returns a [PackedInt32Array] where each triangle consists of three consecutive point indices into [param polygon] (i.e. the returned array will have [code]n * 3[/code] elements, with [code]n[/code] being the number of found triangles). Output triangles will always be counter clockwise, and the contour will be flipped if it's clockwise. If the triangulation did not succeed, an empty [PackedInt32Array] is returned. */
triangulate_polygon(): PackedInt32Array;

  connect<T extends SignalsOf<Geometry2DClass>>(signal: T, method: SignalFunction<Geometry2DClass[T]>): number;



/**
 * Create regions where either subject or clip polygons (or both) are filled.
 *
*/
static OPERATION_UNION: any;

/**
 * Create regions where subject polygons are filled except where clip polygons are filled.
 *
*/
static OPERATION_DIFFERENCE: any;

/**
 * Create regions where both subject and clip polygons are filled.
 *
*/
static OPERATION_INTERSECTION: any;

/**
 * Create regions where either subject or clip polygons are filled but not where both are filled.
 *
*/
static OPERATION_XOR: any;

/**
 * Squaring is applied uniformally at all convex edge joins at `1 * delta`.
 *
*/
static JOIN_SQUARE: any;

/**
 * While flattened paths can never perfectly trace an arc, they are approximated by a series of arc chords.
 *
*/
static JOIN_ROUND: any;

/**
 * There's a necessary limit to mitered joins since offsetting edges that join at very acute angles will produce excessively long and narrow "spikes". For any given edge join, when miter offsetting would exceed that maximum distance, "square" joining is applied.
 *
*/
static JOIN_MITER: any;

/**
 * Endpoints are joined using the [enum PolyJoinType] value and the path filled as a polygon.
 *
*/
static END_POLYGON: any;

/**
 * Endpoints are joined using the [enum PolyJoinType] value and the path filled as a polyline.
 *
*/
static END_JOINED: any;

/**
 * Endpoints are squared off with no extension.
 *
*/
static END_BUTT: any;

/**
 * Endpoints are squared off and extended by `delta` units.
 *
*/
static END_SQUARE: any;

/**
 * Endpoints are rounded off and extended by `delta` units.
 *
*/
static END_ROUND: any;



}

