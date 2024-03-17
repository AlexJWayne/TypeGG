
/**
 * Shape casting allows to detect collision objects by sweeping its [member shape] along the cast direction determined by [member target_position]. This is similar to [RayCast2D], but it allows for sweeping a region of space, rather than just a straight line. [ShapeCast2D] can detect multiple collision objects. It is useful for things like wide laser beams or snapping a simple shape to a floor.
 *
 * Immediate collision overlaps can be done with the [member target_position] set to `Vector2(0, 0)` and by calling [method force_shapecast_update] within the same physics frame. This helps to overcome some limitations of [Area2D] when used as an instantaneous detection area, as collision information isn't immediately available to it.
 *
 * **Note:** Shape casting is more computationally expensive than ray casting.
 *
*/
declare class ShapeCast2D extends Node2D  {

  
/**
 * Shape casting allows to detect collision objects by sweeping its [member shape] along the cast direction determined by [member target_position]. This is similar to [RayCast2D], but it allows for sweeping a region of space, rather than just a straight line. [ShapeCast2D] can detect multiple collision objects. It is useful for things like wide laser beams or snapping a simple shape to a floor.
 *
 * Immediate collision overlaps can be done with the [member target_position] set to `Vector2(0, 0)` and by calling [method force_shapecast_update] within the same physics frame. This helps to overcome some limitations of [Area2D] when used as an instantaneous detection area, as collision information isn't immediately available to it.
 *
 * **Note:** Shape casting is more computationally expensive than ray casting.
 *
*/
  new(): ShapeCast2D; 
  static "new"(): ShapeCast2D 


/** If [code]true[/code], collisions with [Area2D]s will be reported. */
collide_with_areas: boolean;

/** If [code]true[/code], collisions with [PhysicsBody2D]s will be reported. */
collide_with_bodies: boolean;

/** The shape's collision mask. Only objects in at least one collision layer enabled in the mask will be detected. */
collision_mask: int;

/** Returns the complete collision information from the collision sweep. The data returned is the same as in the [method PhysicsDirectSpaceState2D.get_rest_info] method. */
collision_result: any[];

/** If [code]true[/code], collisions will be reported. */
enabled: boolean;

/** If [code]true[/code], the parent node will be excluded from collision detection. */
exclude_parent: boolean;

/** The collision margin for the shape. A larger margin helps detecting collisions more consistently, at the cost of precision. */
margin: float;

/** The number of intersections can be limited with this parameter, to reduce the processing time. */
max_results: int;

/** The [Shape2D]-derived shape to be used for collision queries. */
shape: Shape2D;

/** The shape's destination point, relative to this node's [code]position[/code]. */
target_position: Vector2;

/** Adds a collision exception so the shape does not report collisions with the specified [CollisionObject2D] node. */
add_exception(): void;

/** Adds a collision exception so the shape does not report collisions with the specified [RID]. */
add_exception_rid(): void;

/** Removes all collision exceptions for this shape. */
clear_exceptions(): void;

/**
 * Updates the collision information for the shape immediately, without waiting for the next `_physics_process` call. Use this method, for example, when the shape or its parent has changed state.
 *
 * **Note:** `enabled == true` is not required for this to work.
 *
*/
force_shapecast_update(): void;

/** The fraction from the [ShapeCast2D]'s origin to its [member target_position] (between 0 and 1) of how far the shape can move without triggering a collision. */
get_closest_collision_safe_fraction(): float;

/** The fraction from the [ShapeCast2D]'s origin to its [member target_position] (between 0 and 1) of how far the shape must move to trigger a collision. */
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
get_collision_normal(): Vector2;

/**
 * Returns the collision point of one of the multiple collisions at [param index] where the shape intersects the colliding object.
 *
 * **Note:** this point is in the **global** coordinate system.
 *
*/
get_collision_point(): Vector2;

/** Returns whether any object is intersecting with the shape's vector (considering the vector length). */
is_colliding(): boolean;

/** Removes a collision exception so the shape does report collisions with the specified [CollisionObject2D] node. */
remove_exception(): void;

/** Removes a collision exception so the shape does report collisions with the specified [RID]. */
remove_exception_rid(): void;

/** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
set_collision_mask_value(): void;

  connect<T extends SignalsOf<ShapeCast2D>>(signal: T, method: SignalFunction<ShapeCast2D[T]>): number;






}

