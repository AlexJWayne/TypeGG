
/**
 * [Area3D] is a region of 3D space defined by one or multiple [CollisionShape3D] or [CollisionPolygon3D] child nodes. It detects when other [CollisionObject3D]s enter or exit it, and it also keeps track of which collision objects haven't exited it yet (i.e. which one are overlapping it).
 *
 * This node can also locally alter or override physics parameters (gravity, damping) and route audio to custom audio buses.
 *
 * **Warning:** Using a [ConcavePolygonShape3D] inside a [CollisionShape3D] child of this node (created e.g. by using the **Create Trimesh Collision Sibling** option in the **Mesh** menu that appears when selecting a [MeshInstance3D] node) may give unexpected results, since this collision shape is hollow. If this is not desired, it has to be split into multiple [ConvexPolygonShape3D]s or primitive shapes like [BoxShape3D], or in some cases it may be replaceable by a [CollisionPolygon3D].
 *
*/
declare class Area3D extends CollisionObject3D  {

  
/**
 * [Area3D] is a region of 3D space defined by one or multiple [CollisionShape3D] or [CollisionPolygon3D] child nodes. It detects when other [CollisionObject3D]s enter or exit it, and it also keeps track of which collision objects haven't exited it yet (i.e. which one are overlapping it).
 *
 * This node can also locally alter or override physics parameters (gravity, damping) and route audio to custom audio buses.
 *
 * **Warning:** Using a [ConcavePolygonShape3D] inside a [CollisionShape3D] child of this node (created e.g. by using the **Create Trimesh Collision Sibling** option in the **Mesh** menu that appears when selecting a [MeshInstance3D] node) may give unexpected results, since this collision shape is hollow. If this is not desired, it has to be split into multiple [ConvexPolygonShape3D]s or primitive shapes like [BoxShape3D], or in some cases it may be replaceable by a [CollisionPolygon3D].
 *
*/
  new(): Area3D; 
  static "new"(): Area3D 


/**
 * The rate at which objects stop spinning in this area. Represents the angular velocity lost per second.
 *
 * See [member ProjectSettings.physics/3d/default_angular_damp] for more details about damping.
 *
*/
angular_damp: float;

/** Override mode for angular damping calculations within this area. See [enum SpaceOverride] for possible values. */
angular_damp_space_override: int;

/** The name of the area's audio bus. */
audio_bus_name: StringName;

/** If [code]true[/code], the area's audio bus overrides the default audio bus. */
audio_bus_override: boolean;

/** The area's gravity intensity (in meters per second squared). This value multiplies the gravity direction. This is useful to alter the force of gravity without altering its direction. */
gravity: float;

/** The area's gravity vector (not normalized). */
gravity_direction: Vector3;

/** If [code]true[/code], gravity is calculated from a point (set via [member gravity_point_center]). See also [member gravity_space_override]. */
gravity_point: boolean;

/** If gravity is a point (see [member gravity_point]), this will be the point of attraction. */
gravity_point_center: Vector3;

/**
 * The distance at which the gravity strength is equal to [member gravity]. For example, on a planet 100 meters in radius with a surface gravity of 4.0 m/s², set the [member gravity] to 4.0 and the unit distance to 100.0. The gravity will have falloff according to the inverse square law, so in the example, at 200 meters from the center the gravity will be 1.0 m/s² (twice the distance, 1/4th the gravity), at 50 meters it will be 16.0 m/s² (half the distance, 4x the gravity), and so on.
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
 * See [member ProjectSettings.physics/3d/default_linear_damp] for more details about damping.
 *
*/
linear_damp: float;

/** Override mode for linear damping calculations within this area. See [enum SpaceOverride] for possible values. */
linear_damp_space_override: int;

/** If [code]true[/code], other monitoring areas can detect this area. */
monitorable: boolean;

/** If [code]true[/code], the area detects bodies or areas entering and exiting it. */
monitoring: boolean;

/** The area's priority. Higher priority areas are processed first. The [World3D]'s physics is always processed last, after all areas. */
priority: int;

/** The degree to which this area applies reverb to its associated audio. Ranges from [code]0[/code] to [code]1[/code] with [code]0.1[/code] precision. */
reverb_bus_amount: float;

/** If [code]true[/code], the area applies reverb to its associated audio. */
reverb_bus_enabled: boolean;

/** The name of the reverb bus to use for this area's associated audio. */
reverb_bus_name: StringName;

/** The degree to which this area's reverb is a uniform effect. Ranges from [code]0[/code] to [code]1[/code] with [code]0.1[/code] precision. */
reverb_bus_uniformity: float;

/** The exponential rate at which wind force decreases with distance from its origin. */
wind_attenuation_factor: float;

/** The magnitude of area-specific wind force. */
wind_force_magnitude: float;

/** The [Node3D] which is used to specify the direction and origin of an area-specific wind force. The direction is opposite to the z-axis of the [Node3D]'s local transform, and its origin is the origin of the [Node3D]'s local transform. */
wind_source_path: NodePathType;

/**
 * Returns a list of intersecting [Area3D]s. The overlapping area's [member CollisionObject3D.collision_layer] must be part of this area's [member CollisionObject3D.collision_mask] in order to be detected.
 *
 * For performance reasons (collisions are all processed at the same time) this list is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.
 *
*/
get_overlapping_areas(): Area3D[];

/**
 * Returns a list of intersecting [PhysicsBody3D]s and [GridMap]s. The overlapping body's [member CollisionObject3D.collision_layer] must be part of this area's [member CollisionObject3D.collision_mask] in order to be detected.
 *
 * For performance reasons (collisions are all processed at the same time) this list is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.
 *
*/
get_overlapping_bodies(): PhysicsBody2D[];

/**
 * Returns `true` if intersecting any [Area3D]s, otherwise returns `false`. The overlapping area's [member CollisionObject3D.collision_layer] must be part of this area's [member CollisionObject3D.collision_mask] in order to be detected.
 *
 * For performance reasons (collisions are all processed at the same time) the list of overlapping areas is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.
 *
*/
has_overlapping_areas(): boolean;

/**
 * Returns `true` if intersecting any [PhysicsBody3D]s or [GridMap]s, otherwise returns `false`. The overlapping body's [member CollisionObject3D.collision_layer] must be part of this area's [member CollisionObject3D.collision_mask] in order to be detected.
 *
 * For performance reasons (collisions are all processed at the same time) the list of overlapping bodies is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.
 *
*/
has_overlapping_bodies(): boolean;

/**
 * Returns `true` if the given [Area3D] intersects or overlaps this [Area3D], `false` otherwise.
 *
 * **Note:** The result of this test is not immediate after moving objects. For performance, list of overlaps is updated once per frame and before the physics step. Consider using signals instead.
 *
*/
overlaps_area(): boolean;

/**
 * Returns `true` if the given physics body intersects or overlaps this [Area3D], `false` otherwise.
 *
 * **Note:** The result of this test is not immediate after moving objects. For performance, list of overlaps is updated once per frame and before the physics step. Consider using signals instead.
 *
 * The [param body] argument can either be a [PhysicsBody3D] or a [GridMap] instance. While GridMaps are not physics body themselves, they register their tiles with collision shapes as a virtual physics body.
 *
*/
overlaps_body(): boolean;

  connect<T extends SignalsOf<Area3D>>(signal: T, method: SignalFunction<Area3D[T]>): number;



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
 * Emitted when a [Shape3D] of the received [param area] enters a shape of this area. Requires [member monitoring] to be set to `true`.
 *
 * [param local_shape_index] and [param area_shape_index] contain indices of the interacting shapes from this area and the other area, respectively. [param area_rid] contains the [RID] of the other area. These values can be used with the [PhysicsServer3D].
 *
 * **Example of getting the** [CollisionShape3D] **node from the shape index:**
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
 * Emitted when a [Shape3D] of the received [param area] exits a shape of this area. Requires [member monitoring] to be set to `true`.
 *
 * See also [signal area_shape_entered].
 *
*/
$area_shape_exited: Signal<() => void>

/**
 * Emitted when the received [param body] enters this area. [param body] can be a [PhysicsBody3D] or a [GridMap]. [GridMap]s are detected if their [MeshLibrary] has collision shapes configured. Requires [member monitoring] to be set to `true`.
 *
*/
$body_entered: Signal<() => void>

/**
 * Emitted when the received [param body] exits this area. [param body] can be a [PhysicsBody3D] or a [GridMap]. [GridMap]s are detected if their [MeshLibrary] has collision shapes configured. Requires [member monitoring] to be set to `true`.
 *
*/
$body_exited: Signal<() => void>

/**
 * Emitted when a [Shape3D] of the received [param body] enters a shape of this area. [param body] can be a [PhysicsBody3D] or a [GridMap]. [GridMap]s are detected if their [MeshLibrary] has collision shapes configured. Requires [member monitoring] to be set to `true`.
 *
 * [param local_shape_index] and [param body_shape_index] contain indices of the interacting shapes from this area and the interacting body, respectively. [param body_rid] contains the [RID] of the body. These values can be used with the [PhysicsServer3D].
 *
 * **Example of getting the** [CollisionShape3D] **node from the shape index:**
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
 * Emitted when a [Shape3D] of the received [param body] exits a shape of this area. [param body] can be a [PhysicsBody3D] or a [GridMap]. [GridMap]s are detected if their [MeshLibrary] has collision shapes configured. Requires [member monitoring] to be set to `true`.
 *
 * See also [signal body_shape_entered].
 *
*/
$body_shape_exited: Signal<() => void>

}

