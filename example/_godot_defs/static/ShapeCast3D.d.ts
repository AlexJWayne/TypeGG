
/**
 * Shape casting allows to detect collision objects by sweeping its [member shape] along the cast direction determined by [member target_position]. This is similar to [RayCast3D], but it allows for sweeping a region of space, rather than just a straight line. [ShapeCast3D] can detect multiple collision objects. It is useful for things like wide laser beams or snapping a simple shape to a floor.
 *
 * Immediate collision overlaps can be done with the [member target_position] set to `Vector3(0, 0, 0)` and by calling [method force_shapecast_update] within the same physics frame. This helps to overcome some limitations of [Area3D] when used as an instantaneous detection area, as collision information isn't immediately available to it.
 *
 * **Note:** Shape casting is more computationally expensive than ray casting.
 *
*/
declare class ShapeCast3D extends Node3D  {

  
/**
 * Shape casting allows to detect collision objects by sweeping its [member shape] along the cast direction determined by [member target_position]. This is similar to [RayCast3D], but it allows for sweeping a region of space, rather than just a straight line. [ShapeCast3D] can detect multiple collision objects. It is useful for things like wide laser beams or snapping a simple shape to a floor.
 *
 * Immediate collision overlaps can be done with the [member target_position] set to `Vector3(0, 0, 0)` and by calling [method force_shapecast_update] within the same physics frame. This helps to overcome some limitations of [Area3D] when used as an instantaneous detection area, as collision information isn't immediately available to it.
 *
 * **Note:** Shape casting is more computationally expensive than ray casting.
 *
*/
  new(): ShapeCast3D; 
  static "new"(): ShapeCast3D 


/** If [code]true[/code], collisions with [Area3D]s will be reported. */
collide_with_areas: boolean;

/** If [code]true[/code], collisions with [PhysicsBody3D]s will be reported. */
collide_with_bodies: boolean;

/** The shape's collision mask. Only objects in at least one collision layer enabled in the mask will be detected. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
collision_mask: int;

/** Returns the complete collision information from the collision sweep. The data returned is the same as in the [method PhysicsDirectSpaceState3D.get_rest_info] method. */
collision_result: any[];

/**
 * The custom color to use to draw the shape in the editor and at run-time if **Visible Collision Shapes** is enabled in the **Debug** menu. This color will be highlighted at run-time if the [ShapeCast3D] is colliding with something.
 *
 * If set to `Color(0.0, 0.0, 0.0)` (by default), the color set in [member ProjectSettings.debug/shapes/collision/shape_color] is used.
 *
*/
debug_shape_custom_color: Color;

/** If [code]true[/code], collisions will be reported. */
enabled: boolean;

/** If [code]true[/code], the parent node will be excluded from collision detection. */
exclude_parent: boolean;

/** The collision margin for the shape. A larger margin helps detecting collisions more consistently, at the cost of precision. */
margin: float;

/** The number of intersections can be limited with this parameter, to reduce the processing time. */
max_results: int;

/** The [Shape3D]-derived shape to be used for collision queries. */
shape: Shape3D;

/** The shape's destination point, relative to this node's [code]position[/code]. */
target_position: Vector3;

/** Adds a collision exception so the shape does not report collisions with the specified [CollisionObject3D] node. */
add_exception(): void;

/** Adds a collision exception so the shape does not report collisions with the specified [RID]. */
add_exception_rid(): void;

/** Removes all collision exceptions for this [ShapeCast3D]. */
clear_exceptions(): void;

/**
 * Updates the collision information for the shape immediately, without waiting for the next `_physics_process` call. Use this method, for example, when the shape or its parent has changed state.
 *
 * **Note:** `enabled == true` is not required for this to work.
 *
*/
force_shapecast_update(): void;

/** The fraction from the [ShapeCast3D]'s origin to its [member target_position] (between 0 and 1) of how far the shape can move without triggering a collision. */
get_closest_collision_safe_fraction(): float;

/** The fraction from the [ShapeCast3D]'s origin to its [member target_position] (between 0 and 1) of how far the shape must move to trigger a collision. */
get_closest_collision_unsafe_fraction(): float;

/** Returns the collided [Object] of one of the multiple collisions at [param index], or [code]null[/code] if no object is intersecting the shape (i.e. [method is_colliding] returns [code]false[/code]). */
get_collider(): Object;

/** Returns the [RID] of the collided object of one of the multiple collisions at [param index]. */
get_collider_rid(): RID;

/** Returns the shape ID of the colliding shape of one of the multiple collisions at [param index], or [code]0[/code] if no object is intersecting the shape (i.e. [method is_colliding] returns [code]false[/code]). */
get_collider_shape(): int;

/** The number of collisions detected at the point of impact. Use this to iterate over multiple collisions as provided by [method get_collider], [method get_collider_shape], [method get_collision_point], and [method get_collision_normal] methods. */
get_collision_count(): int;

/** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
get_collision_mask_value(): boolean;

/** Returns the normal of one of the multiple collisions at [param index] of the intersecting object. */
get_collision_normal(): Vector3;

/**
 * Returns the collision point of one of the multiple collisions at [param index] where the shape intersects the colliding object.
 *
 * **Note:** this point is in the **global** coordinate system.
 *
*/
get_collision_point(): Vector3;

/** Returns whether any object is intersecting with the shape's vector (considering the vector length). */
is_colliding(): boolean;

/** Removes a collision exception so the shape does report collisions with the specified [CollisionObject3D] node. */
remove_exception(): void;

/** Removes a collision exception so the shape does report collisions with the specified [RID]. */
remove_exception_rid(): void;

/** [i]Obsoleted.[/i] Use [signal Resource.changed] instead. */
resource_changed(): void;

/** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
set_collision_mask_value(): void;

  connect<T extends SignalsOf<ShapeCast3D>>(signal: T, method: SignalFunction<ShapeCast3D[T]>): number;






}

