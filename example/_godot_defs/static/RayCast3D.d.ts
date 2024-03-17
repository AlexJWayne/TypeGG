
/**
 * A raycast represents a ray from its origin to its [member target_position] that finds the closest [CollisionObject3D] along its path, if it intersects any. This is useful for a lot of things, such as
 *
 * [RayCast3D] can ignore some objects by adding them to an exception list, by making its detection reporting ignore [Area3D]s ([member collide_with_areas]) or [PhysicsBody3D]s ([member collide_with_bodies]), or by configuring physics layers.
 *
 * [RayCast3D] calculates intersection every physics frame, and it holds the result until the next physics frame. For an immediate raycast, or if you want to configure a [RayCast3D] multiple times within the same physics frame, use [method force_raycast_update].
 *
 * To sweep over a region of 3D space, you can approximate the region with multiple [RayCast3D]s or use [ShapeCast3D].
 *
*/
declare class RayCast3D extends Node3D  {

  
/**
 * A raycast represents a ray from its origin to its [member target_position] that finds the closest [CollisionObject3D] along its path, if it intersects any. This is useful for a lot of things, such as
 *
 * [RayCast3D] can ignore some objects by adding them to an exception list, by making its detection reporting ignore [Area3D]s ([member collide_with_areas]) or [PhysicsBody3D]s ([member collide_with_bodies]), or by configuring physics layers.
 *
 * [RayCast3D] calculates intersection every physics frame, and it holds the result until the next physics frame. For an immediate raycast, or if you want to configure a [RayCast3D] multiple times within the same physics frame, use [method force_raycast_update].
 *
 * To sweep over a region of 3D space, you can approximate the region with multiple [RayCast3D]s or use [ShapeCast3D].
 *
*/
  new(): RayCast3D; 
  static "new"(): RayCast3D 


/** If [code]true[/code], collisions with [Area3D]s will be reported. */
collide_with_areas: boolean;

/** If [code]true[/code], collisions with [PhysicsBody3D]s will be reported. */
collide_with_bodies: boolean;

/** The ray's collision mask. Only objects in at least one collision layer enabled in the mask will be detected. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
collision_mask: int;

/**
 * The custom color to use to draw the shape in the editor and at run-time if **Visible Collision Shapes** is enabled in the **Debug** menu. This color will be highlighted at run-time if the [RayCast3D] is colliding with something.
 *
 * If set to `Color(0.0, 0.0, 0.0)` (by default), the color set in [member ProjectSettings.debug/shapes/collision/shape_color] is used.
 *
*/
debug_shape_custom_color: Color;

/** If set to [code]1[/code], a line is used as the debug shape. Otherwise, a truncated pyramid is drawn to represent the [RayCast3D]. Requires [b]Visible Collision Shapes[/b] to be enabled in the [b]Debug[/b] menu for the debug shape to be visible at run-time. */
debug_shape_thickness: int;

/** If [code]true[/code], collisions will be reported. */
enabled: boolean;

/** If [code]true[/code], collisions will be ignored for this RayCast3D's immediate parent. */
exclude_parent: boolean;

/** If [code]true[/code], the ray will hit back faces with concave polygon shapes with back face enabled or heightmap shapes. */
hit_back_faces: boolean;

/** If [code]true[/code], the ray will detect a hit when starting inside shapes. In this case the collision normal will be [code]Vector3(0, 0, 0)[/code]. Does not affect shapes with no volume like concave polygon or heightmap. */
hit_from_inside: boolean;

/** The ray's destination point, relative to the RayCast's [code]position[/code]. */
target_position: Vector3;

/** Adds a collision exception so the ray does not report collisions with the specified [CollisionObject3D] node. */
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

/** Returns the collision object's face index at the collision point, or [code]-1[/code] if the shape intersecting the ray is not a [ConcavePolygonShape3D]. */
get_collision_face_index(): int;

/** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
get_collision_mask_value(): boolean;

/** Returns the normal of the intersecting object's shape at the collision point, or [code]Vector3(0, 0, 0)[/code] if the ray starts inside the shape and [member hit_from_inside] is [code]true[/code]. */
get_collision_normal(): Vector3;

/**
 * Returns the collision point at which the ray intersects the closest object.
 *
 * **Note:** This point is in the **global** coordinate system.
 *
*/
get_collision_point(): Vector3;

/** Returns whether any object is intersecting with the ray's vector (considering the vector length). */
is_colliding(): boolean;

/** Removes a collision exception so the ray does report collisions with the specified [CollisionObject3D] node. */
remove_exception(): void;

/** Removes a collision exception so the ray does report collisions with the specified [RID]. */
remove_exception_rid(): void;

/** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
set_collision_mask_value(): void;

  connect<T extends SignalsOf<RayCast3D>>(signal: T, method: SignalFunction<RayCast3D[T]>): number;






}

