
/**
 * A raycast represents a ray from its origin to its [member target_position] that finds the closest [CollisionObject2D] along its path, if it intersects any. This is useful for a lot of things, such as
 *
 * [RayCast2D] can ignore some objects by adding them to an exception list, by making its detection reporting ignore [Area2D]s ([member collide_with_areas]) or [PhysicsBody2D]s ([member collide_with_bodies]), or by configuring physics layers.
 *
 * [RayCast2D] calculates intersection every physics frame, and it holds the result until the next physics frame. For an immediate raycast, or if you want to configure a [RayCast2D] multiple times within the same physics frame, use [method force_raycast_update].
 *
 * To sweep over a region of 2D space, you can approximate the region with multiple [RayCast2D]s or use [ShapeCast2D].
 *
*/
declare class RayCast2D extends Node2D  {

  
/**
 * A raycast represents a ray from its origin to its [member target_position] that finds the closest [CollisionObject2D] along its path, if it intersects any. This is useful for a lot of things, such as
 *
 * [RayCast2D] can ignore some objects by adding them to an exception list, by making its detection reporting ignore [Area2D]s ([member collide_with_areas]) or [PhysicsBody2D]s ([member collide_with_bodies]), or by configuring physics layers.
 *
 * [RayCast2D] calculates intersection every physics frame, and it holds the result until the next physics frame. For an immediate raycast, or if you want to configure a [RayCast2D] multiple times within the same physics frame, use [method force_raycast_update].
 *
 * To sweep over a region of 2D space, you can approximate the region with multiple [RayCast2D]s or use [ShapeCast2D].
 *
*/
  new(): RayCast2D; 
  static "new"(): RayCast2D 


/** If [code]true[/code], collisions with [Area2D]s will be reported. */
collide_with_areas: boolean;

/** If [code]true[/code], collisions with [PhysicsBody2D]s will be reported. */
collide_with_bodies: boolean;

/** The ray's collision mask. Only objects in at least one collision layer enabled in the mask will be detected. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
collision_mask: int;

/** If [code]true[/code], collisions will be reported. */
enabled: boolean;

/** If [code]true[/code], the parent node will be excluded from collision detection. */
exclude_parent: boolean;

/** If [code]true[/code], the ray will detect a hit when starting inside shapes. In this case the collision normal will be [code]Vector2(0, 0)[/code]. Does not affect concave polygon shapes. */
hit_from_inside: boolean;

/** The ray's destination point, relative to the RayCast's [code]position[/code]. */
target_position: Vector2;

/** Adds a collision exception so the ray does not report collisions with the specified [CollisionObject2D] node. */
add_exception(): void;

/** Adds a collision exception so the ray does not report collisions with the specified [RID]. */
add_exception_rid(): void;

/** Removes all collision exceptions for this ray. */
clear_exceptions(): void;

/**
 * Updates the collision information for the ray immediately, without waiting for the next `_physics_process` call. Use this method, for example, when the ray or its parent has changed state.
 *
 * **Note:** [member enabled] does not need to be `true` for this to work.
 *
*/
force_raycast_update(): void;

/** Returns the first object that the ray intersects, or [code]null[/code] if no object is intersecting the ray (i.e. [method is_colliding] returns [code]false[/code]). */
get_collider(): Object;

/** Returns the [RID] of the first object that the ray intersects, or an empty [RID] if no object is intersecting the ray (i.e. [method is_colliding] returns [code]false[/code]). */
get_collider_rid(): RID;

/** Returns the shape ID of the first object that the ray intersects, or [code]0[/code] if no object is intersecting the ray (i.e. [method is_colliding] returns [code]false[/code]). */
get_collider_shape(): int;

/** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
get_collision_mask_value(): boolean;

/** Returns the normal of the intersecting object's shape at the collision point, or [code]Vector2(0, 0)[/code] if the ray starts inside the shape and [member hit_from_inside] is [code]true[/code]. */
get_collision_normal(): Vector2;

/**
 * Returns the collision point at which the ray intersects the closest object.
 *
 * **Note:** This point is in the **global** coordinate system.
 *
*/
get_collision_point(): Vector2;

/** Returns whether any object is intersecting with the ray's vector (considering the vector length). */
is_colliding(): boolean;

/** Removes a collision exception so the ray does report collisions with the specified [CollisionObject2D] node. */
remove_exception(): void;

/** Removes a collision exception so the ray does report collisions with the specified [RID]. */
remove_exception_rid(): void;

/** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
set_collision_mask_value(): void;

  connect<T extends SignalsOf<RayCast2D>>(signal: T, method: SignalFunction<RayCast2D[T]>): number;






}

