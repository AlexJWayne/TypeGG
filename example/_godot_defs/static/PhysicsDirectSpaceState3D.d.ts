
/**
 * Provides direct access to a physics space in the [PhysicsServer3D]. It's used mainly to do queries against objects and areas residing in a given space.
 *
*/
declare class PhysicsDirectSpaceState3D extends Object  {

  
/**
 * Provides direct access to a physics space in the [PhysicsServer3D]. It's used mainly to do queries against objects and areas residing in a given space.
 *
*/
  new(): PhysicsDirectSpaceState3D; 
  static "new"(): PhysicsDirectSpaceState3D 



/**
 * Checks how far a [Shape3D] can move without colliding. All the parameters for the query, including the shape, are supplied through a [PhysicsShapeQueryParameters3D] object.
 *
 * Returns an array with the safe and unsafe proportions (between 0 and 1) of the motion. The safe proportion is the maximum fraction of the motion that can be made without a collision. The unsafe proportion is the minimum fraction of the distance that must be moved for a collision. If no collision is detected a result of `[1.0, 1.0]` will be returned.
 *
 * **Note:** Any [Shape3D]s that the shape is already colliding with e.g. inside of, will be ignored. Use [method collide_shape] to determine the [Shape3D]s that the shape is already colliding with.
 *
*/
cast_motion(): PackedFloat32Array;

/**
 * Checks the intersections of a shape, given through a [PhysicsShapeQueryParameters3D] object, against the space. The resulting array contains a list of points where the shape intersects another. Like with [method intersect_shape], the number of returned results can be limited to save processing time.
 *
 * Returned points are a list of pairs of contact points. For each pair the first one is in the shape passed in [PhysicsShapeQueryParameters3D] object, second one is in the collided shape from the physics space.
 *
 * **Note:** This method does not take into account the `motion` property of the object.
 *
*/
collide_shape(): Vector3[];

/**
 * Checks the intersections of a shape, given through a [PhysicsShapeQueryParameters3D] object, against the space. If it collides with more than one shape, the nearest one is selected. The returned object is a dictionary containing the following fields:
 *
 * `collider_id`: The colliding object's ID.
 *
 * `linear_velocity`: The colliding object's velocity [Vector3]. If the object is an [Area3D], the result is `(0, 0, 0)`.
 *
 * `normal`: The object's surface normal at the intersection point.
 *
 * `point`: The intersection point.
 *
 * `rid`: The intersecting object's [RID].
 *
 * `shape`: The shape index of the colliding shape.
 *
 * If the shape did not intersect anything, then an empty dictionary is returned instead.
 *
 * **Note:** This method does not take into account the `motion` property of the object.
 *
*/
get_rest_info(): Dictionary<any, any>;

/**
 * Checks whether a point is inside any solid shape. Position and other parameters are defined through [PhysicsPointQueryParameters3D]. The shapes the point is inside of are returned in an array containing dictionaries with the following fields:
 *
 * `collider`: The colliding object.
 *
 * `collider_id`: The colliding object's ID.
 *
 * `rid`: The intersecting object's [RID].
 *
 * `shape`: The shape index of the colliding shape.
 *
 * The number of intersections can be limited with the [param max_results] parameter, to reduce the processing time.
 *
*/
intersect_point(): Dictionary[];

/**
 * Intersects a ray in a given space. Ray position and other parameters are defined through [PhysicsRayQueryParameters3D]. The returned object is a dictionary with the following fields:
 *
 * `collider`: The colliding object.
 *
 * `collider_id`: The colliding object's ID.
 *
 * `normal`: The object's surface normal at the intersection point, or `Vector3(0, 0, 0)` if the ray starts inside the shape and [member PhysicsRayQueryParameters3D.hit_from_inside] is `true`.
 *
 * `position`: The intersection point.
 *
 * `face_index`: The face index at the intersection point.
 *
 * **Note:** Returns a valid number only if the intersected shape is a [ConcavePolygonShape3D]. Otherwise, `-1` is returned.
 *
 * `rid`: The intersecting object's [RID].
 *
 * `shape`: The shape index of the colliding shape.
 *
 * If the ray did not intersect anything, then an empty dictionary is returned instead.
 *
*/
intersect_ray(): Dictionary<any, any>;

/**
 * Checks the intersections of a shape, given through a [PhysicsShapeQueryParameters3D] object, against the space. The intersected shapes are returned in an array containing dictionaries with the following fields:
 *
 * `collider`: The colliding object.
 *
 * `collider_id`: The colliding object's ID.
 *
 * `rid`: The intersecting object's [RID].
 *
 * `shape`: The shape index of the colliding shape.
 *
 * The number of intersections can be limited with the [param max_results] parameter, to reduce the processing time.
 *
 * **Note:** This method does not take into account the `motion` property of the object.
 *
*/
intersect_shape(): Dictionary[];

  connect<T extends SignalsOf<PhysicsDirectSpaceState3D>>(signal: T, method: SignalFunction<PhysicsDirectSpaceState3D[T]>): number;






}

