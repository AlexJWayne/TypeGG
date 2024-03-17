
/**
 * [Area2D] is a region of 2D space defined by one or multiple [CollisionShape2D] or [CollisionPolygon2D] child nodes. It detects when other [CollisionObject2D]s enter or exit it, and it also keeps track of which collision objects haven't exited it yet (i.e. which one are overlapping it).
 *
 * This node can also locally alter or override physics parameters (gravity, damping) and route audio to custom audio buses.
 *
*/
declare class Area2D extends CollisionObject2D  {

  
/**
 * [Area2D] is a region of 2D space defined by one or multiple [CollisionShape2D] or [CollisionPolygon2D] child nodes. It detects when other [CollisionObject2D]s enter or exit it, and it also keeps track of which collision objects haven't exited it yet (i.e. which one are overlapping it).
 *
 * This node can also locally alter or override physics parameters (gravity, damping) and route audio to custom audio buses.
 *
*/
  new(): Area2D; 
  static "new"(): Area2D 


/**
 * The rate at which objects stop spinning in this area. Represents the angular velocity lost per second.
 *
 * See [member ProjectSettings.physics/2d/default_angular_damp] for more details about damping.
 *
*/
angular_damp: float;

/** Override mode for angular damping calculations within this area. See [enum SpaceOverride] for possible values. */
angular_damp_space_override: int;

/** The name of the area's audio bus. */
audio_bus_name: StringName;

/** If [code]true[/code], the area's audio bus overrides the default audio bus. */
audio_bus_override: boolean;

/** The area's gravity intensity (in pixels per second squared). This value multiplies the gravity direction. This is useful to alter the force of gravity without altering its direction. */
gravity: float;

/** The area's gravity vector (not normalized). */
gravity_direction: Vector2;

/** If [code]true[/code], gravity is calculated from a point (set via [member gravity_point_center]). See also [member gravity_space_override]. */
gravity_point: boolean;

/** If gravity is a point (see [member gravity_point]), this will be the point of attraction. */
gravity_point_center: Vector2;

/**
 * The distance at which the gravity strength is equal to [member gravity]. For example, on a planet 100 pixels in radius with a surface gravity of 4.0 px/s², set the [member gravity] to 4.0 and the unit distance to 100.0. The gravity will have falloff according to the inverse square law, so in the example, at 200 pixels from the center the gravity will be 1.0 px/s² (twice the distance, 1/4th the gravity), at 50 pixels it will be 16.0 px/s² (half the distance, 4x the gravity), and so on.
 *
 * The above is true only when the unit distance is a positive number. When this is set to 0.0, the gravity will be constant regardless of distance.
 *
*/
gravity_point_unit_distance: float;

/** Override mode for gravity calculations within this area. See [enum SpaceOverride] for possible values. */
gravity_space_override: int;

/**
 * The rate at which objects stop moving in this area. Represents the linear velocity lost per second.
 *
 * See [member ProjectSettings.physics/2d/default_linear_damp] for more details about damping.
 *
*/
linear_damp: float;

/** Override mode for linear damping calculations within this area. See [enum SpaceOverride] for possible values. */
linear_damp_space_override: int;

/** If [code]true[/code], other monitoring areas can detect this area. */
monitorable: boolean;

/** If [code]true[/code], the area detects bodies or areas entering and exiting it. */
monitoring: boolean;

/** The area's priority. Higher priority areas are processed first. The [World2D]'s physics is always processed last, after all areas. */
priority: int;

/**
 * Returns a list of intersecting [Area2D]s. The overlapping area's [member CollisionObject2D.collision_layer] must be part of this area's [member CollisionObject2D.collision_mask] in order to be detected.
 *
 * For performance reasons (collisions are all processed at the same time) this list is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.
 *
*/
get_overlapping_areas(): Area2D[];

/**
 * Returns a list of intersecting [PhysicsBody2D]s and [TileMap]s. The overlapping body's [member CollisionObject2D.collision_layer] must be part of this area's [member CollisionObject2D.collision_mask] in order to be detected.
 *
 * For performance reasons (collisions are all processed at the same time) this list is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.
 *
*/
get_overlapping_bodies(): PhysicsBody2D[];

/**
 * Returns `true` if intersecting any [Area2D]s, otherwise returns `false`. The overlapping area's [member CollisionObject2D.collision_layer] must be part of this area's [member CollisionObject2D.collision_mask] in order to be detected.
 *
 * For performance reasons (collisions are all processed at the same time) the list of overlapping areas is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.
 *
*/
has_overlapping_areas(): boolean;

/**
 * Returns `true` if intersecting any [PhysicsBody2D]s or [TileMap]s, otherwise returns `false`. The overlapping body's [member CollisionObject2D.collision_layer] must be part of this area's [member CollisionObject2D.collision_mask] in order to be detected.
 *
 * For performance reasons (collisions are all processed at the same time) the list of overlapping bodies is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.
 *
*/
has_overlapping_bodies(): boolean;

/**
 * Returns `true` if the given [Area2D] intersects or overlaps this [Area2D], `false` otherwise.
 *
 * **Note:** The result of this test is not immediate after moving objects. For performance, the list of overlaps is updated once per frame and before the physics step. Consider using signals instead.
 *
*/
overlaps_area(): boolean;

/**
 * Returns `true` if the given physics body intersects or overlaps this [Area2D], `false` otherwise.
 *
 * **Note:** The result of this test is not immediate after moving objects. For performance, list of overlaps is updated once per frame and before the physics step. Consider using signals instead.
 *
 * The [param body] argument can either be a [PhysicsBody2D] or a [TileMap] instance. While TileMaps are not physics bodies themselves, they register their tiles with collision shapes as a virtual physics body.
 *
*/
overlaps_body(): boolean;

  connect<T extends SignalsOf<Area2D>>(signal: T, method: SignalFunction<Area2D[T]>): number;



/**
 * This area does not affect gravity/damping.
 *
*/
static SPACE_OVERRIDE_DISABLED: any;

/**
 * This area adds its gravity/damping values to whatever has been calculated so far (in [member priority] order).
 *
*/
static SPACE_OVERRIDE_COMBINE: any;

/**
 * This area adds its gravity/damping values to whatever has been calculated so far (in [member priority] order), ignoring any lower priority areas.
 *
*/
static SPACE_OVERRIDE_COMBINE_REPLACE: any;

/**
 * This area replaces any gravity/damping, even the defaults, ignoring any lower priority areas.
 *
*/
static SPACE_OVERRIDE_REPLACE: any;

/**
 * This area replaces any gravity/damping calculated so far (in [member priority] order), but keeps calculating the rest of the areas.
 *
*/
static SPACE_OVERRIDE_REPLACE_COMBINE: any;


/**
 * Emitted when the received [param area] enters this area. Requires [member monitoring] to be set to `true`.
 *
*/
$area_entered: Signal<() => void>

/**
 * Emitted when the received [param area] exits this area. Requires [member monitoring] to be set to `true`.
 *
*/
$area_exited: Signal<() => void>

/**
 * Emitted when a [Shape2D] of the received [param area] enters a shape of this area. Requires [member monitoring] to be set to `true`.
 *
 * [param local_shape_index] and [param area_shape_index] contain indices of the interacting shapes from this area and the other area, respectively. [param area_rid] contains the [RID] of the other area. These values can be used with the [PhysicsServer2D].
 *
 * **Example of getting the** [CollisionShape2D] **node from the shape index:**
 *
 * @example 
 * 
 * 
 * var other_shape_owner = area.shape_find_owner(area_shape_index)
 * var other_shape_node = area.shape_owner_get_owner(other_shape_owner)
 * var local_shape_owner = shape_find_owner(local_shape_index)
 * var local_shape_node = shape_owner_get_owner(local_shape_owner)
 * 
 * @summary 
 * 
 *
*/
$area_shape_entered: Signal<() => void>

/**
 * Emitted when a [Shape2D] of the received [param area] exits a shape of this area. Requires [member monitoring] to be set to `true`.
 *
 * See also [signal area_shape_entered].
 *
*/
$area_shape_exited: Signal<() => void>

/**
 * Emitted when the received [param body] enters this area. [param body] can be a [PhysicsBody2D] or a [TileMap]. [TileMap]s are detected if their [TileSet] has collision shapes configured. Requires [member monitoring] to be set to `true`.
 *
*/
$body_entered: Signal<() => void>

/**
 * Emitted when the received [param body] exits this area. [param body] can be a [PhysicsBody2D] or a [TileMap]. [TileMap]s are detected if their [TileSet] has collision shapes configured. Requires [member monitoring] to be set to `true`.
 *
*/
$body_exited: Signal<() => void>

/**
 * Emitted when a [Shape2D] of the received [param body] enters a shape of this area. [param body] can be a [PhysicsBody2D] or a [TileMap]. [TileMap]s are detected if their [TileSet] has collision shapes configured. Requires [member monitoring] to be set to `true`.
 *
 * [param local_shape_index] and [param body_shape_index] contain indices of the interacting shapes from this area and the interacting body, respectively. [param body_rid] contains the [RID] of the body. These values can be used with the [PhysicsServer2D].
 *
 * **Example of getting the** [CollisionShape2D] **node from the shape index:**
 *
 * @example 
 * 
 * 
 * var body_shape_owner = body.shape_find_owner(body_shape_index)
 * var body_shape_node = body.shape_owner_get_owner(body_shape_owner)
 * var local_shape_owner = shape_find_owner(local_shape_index)
 * var local_shape_node = shape_owner_get_owner(local_shape_owner)
 * 
 * @summary 
 * 
 *
*/
$body_shape_entered: Signal<() => void>

/**
 * Emitted when a [Shape2D] of the received [param body] exits a shape of this area. [param body] can be a [PhysicsBody2D] or a [TileMap]. [TileMap]s are detected if their [TileSet] has collision shapes configured. Requires [member monitoring] to be set to `true`.
 *
 * See also [signal body_shape_entered].
 *
*/
$body_shape_exited: Signal<() => void>

}

