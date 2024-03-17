
/**
 * [RigidBody3D] implements full 3D physics. It cannot be controlled directly, instead, you must apply forces to it (gravity, impulses, etc.), and the physics simulation will calculate the resulting movement, rotation, react to collisions, and affect other physics bodies in its path.
 *
 * The body's behavior can be adjusted via [member lock_rotation], [member freeze], and [member freeze_mode]. By changing various properties of the object, such as [member mass], you can control how the physics simulation acts on it.
 *
 * A rigid body will always maintain its shape and size, even when forces are applied to it. It is useful for objects that can be interacted with in an environment, such as a tree that can be knocked over or a stack of crates that can be pushed around.
 *
 * If you need to override the default physics behavior, you can write a custom force integration function. See [member custom_integrator].
 *
 * **Note:** Changing the 3D transform or [member linear_velocity] of a [RigidBody3D] very often may lead to some unpredictable behaviors. If you need to directly affect the body, prefer [method _integrate_forces] as it allows you to directly access the physics state.
 *
*/
declare class RigidBody3D extends PhysicsBody3D  {

  
/**
 * [RigidBody3D] implements full 3D physics. It cannot be controlled directly, instead, you must apply forces to it (gravity, impulses, etc.), and the physics simulation will calculate the resulting movement, rotation, react to collisions, and affect other physics bodies in its path.
 *
 * The body's behavior can be adjusted via [member lock_rotation], [member freeze], and [member freeze_mode]. By changing various properties of the object, such as [member mass], you can control how the physics simulation acts on it.
 *
 * A rigid body will always maintain its shape and size, even when forces are applied to it. It is useful for objects that can be interacted with in an environment, such as a tree that can be knocked over or a stack of crates that can be pushed around.
 *
 * If you need to override the default physics behavior, you can write a custom force integration function. See [member custom_integrator].
 *
 * **Note:** Changing the 3D transform or [member linear_velocity] of a [RigidBody3D] very often may lead to some unpredictable behaviors. If you need to directly affect the body, prefer [method _integrate_forces] as it allows you to directly access the physics state.
 *
*/
  new(): RigidBody3D; 
  static "new"(): RigidBody3D 


/**
 * Damps the body's rotation. By default, the body will use the **Default Angular Damp** in **Project > Project Settings > Physics > 3d** or any value override set by an [Area3D] the body is in. Depending on [member angular_damp_mode], you can set [member angular_damp] to be added to or to replace the body's damping value.
 *
 * See [member ProjectSettings.physics/3d/default_angular_damp] for more details about damping.
 *
*/
angular_damp: float;

/** Defines how [member angular_damp] is applied. See [enum DampMode] for possible values. */
angular_damp_mode: int;

/** The RigidBody3D's rotational velocity in [i]radians[/i] per second. */
angular_velocity: Vector3;

/** If [code]true[/code], the body can enter sleep mode when there is no movement. See [member sleeping]. */
can_sleep: boolean;

/**
 * The body's custom center of mass, relative to the body's origin position, when [member center_of_mass_mode] is set to [constant CENTER_OF_MASS_MODE_CUSTOM]. This is the balanced point of the body, where applied forces only cause linear acceleration. Applying forces outside of the center of mass causes angular acceleration.
 *
 * When [member center_of_mass_mode] is set to [constant CENTER_OF_MASS_MODE_AUTO] (default value), the center of mass is automatically computed.
 *
*/
center_of_mass: Vector3;

/** Defines the way the body's center of mass is set. See [enum CenterOfMassMode] for possible values. */
center_of_mass_mode: int;

/**
 * The body's total constant positional forces applied during each physics update.
 *
 * See [method add_constant_force] and [method add_constant_central_force].
 *
*/
constant_force: Vector3;

/**
 * The body's total constant rotational forces applied during each physics update.
 *
 * See [method add_constant_torque].
 *
*/
constant_torque: Vector3;

/**
 * If `true`, the RigidBody3D will emit signals when it collides with another body.
 *
 * **Note:** By default the maximum contacts reported is set to 0, meaning nothing will be recorded, see [member max_contacts_reported].
 *
*/
contact_monitor: boolean;

/**
 * If `true`, continuous collision detection is used.
 *
 * Continuous collision detection tries to predict where a moving body will collide, instead of moving it and correcting its movement if it collided. Continuous collision detection is more precise, and misses fewer impacts by small, fast-moving objects. Not using continuous collision detection is faster to compute, but can miss small, fast-moving objects.
 *
*/
continuous_cd: boolean;

/** If [code]true[/code], internal force integration will be disabled (like gravity or air friction) for this body. Other than collision response, the body will only move as determined by the [method _integrate_forces] function, if defined. */
custom_integrator: boolean;

/**
 * If `true`, the body is frozen. Gravity and forces are not applied anymore.
 *
 * See [member freeze_mode] to set the body's behavior when frozen.
 *
 * For a body that is always frozen, use [StaticBody3D] or [AnimatableBody3D] instead.
 *
*/
freeze: boolean;

/**
 * The body's freeze mode. Can be used to set the body's behavior when [member freeze] is enabled. See [enum FreezeMode] for possible values.
 *
 * For a body that is always frozen, use [StaticBody3D] or [AnimatableBody3D] instead.
 *
*/
freeze_mode: int;

/** This is multiplied by the global 3D gravity setting found in [b]Project > Project Settings > Physics > 3d[/b] to produce RigidBody3D's gravity. For example, a value of 1 will be normal gravity, 2 will apply double gravity, and 0.5 will apply half gravity to this object. */
gravity_scale: float;

/**
 * The body's moment of inertia. This is like mass, but for rotation: it determines how much torque it takes to rotate the body on each axis. The moment of inertia is usually computed automatically from the mass and the shapes, but this property allows you to set a custom value.
 *
 * If set to [constant Vector3.ZERO], inertia is automatically computed (default value).
 *
 * **Note:** This value does not change when inertia is automatically computed. Use [PhysicsServer3D] to get the computed inertia.
 *
 * @example 
 * 
 * 
 * @onready var ball = $Ball
 * func get_ball_inertia():
 *     return PhysicsServer3D.body_get_direct_state(ball.get_rid()).inverse_inertia.inverse()
 * 
 * 
 * private RigidBody3D _ball;
 * public override void _Ready()
 * {
 *     _ball = GetNode<RigidBody3D>("Ball");
 * }
 * private Vector3 GetBallInertia()
 * {
 *     return PhysicsServer3D.BodyGetDirectState(_ball.GetRid()).InverseInertia.Inverse();
 * }
 * 
 * @summary 
 * 
 *
*/
inertia: Vector3;

/**
 * Damps the body's movement. By default, the body will use the **Default Linear Damp** in **Project > Project Settings > Physics > 3d** or any value override set by an [Area3D] the body is in. Depending on [member linear_damp_mode], you can set [member linear_damp] to be added to or to replace the body's damping value.
 *
 * See [member ProjectSettings.physics/3d/default_linear_damp] for more details about damping.
 *
*/
linear_damp: float;

/** Defines how [member linear_damp] is applied. See [enum DampMode] for possible values. */
linear_damp_mode: int;

/** The body's linear velocity in units per second. Can be used sporadically, but [b]don't set this every frame[/b], because physics may run in another thread and runs at a different granularity. Use [method _integrate_forces] as your process loop for precise control of the body state. */
linear_velocity: Vector3;

/** If [code]true[/code], the body cannot rotate. Gravity and forces only apply linear movement. */
lock_rotation: boolean;

/** The body's mass. */
mass: float;

/**
 * The maximum number of contacts that will be recorded. Requires a value greater than 0 and [member contact_monitor] to be set to `true` to start to register contacts. Use [method get_contact_count] to retrieve the count or [method get_colliding_bodies] to retrieve bodies that have been collided with.
 *
 * **Note:** The number of contacts is different from the number of collisions. Collisions between parallel edges will result in two contacts (one at each end), and collisions between parallel faces will result in four contacts (one at each corner).
 *
*/
max_contacts_reported: int;

/**
 * The physics material override for the body.
 *
 * If a material is assigned to this property, it will be used instead of any other physics material, such as an inherited one.
 *
*/
physics_material_override: PhysicsMaterial;

/** If [code]true[/code], the body will not move and will not calculate forces until woken up by another body through, for example, a collision, or by using the [method apply_impulse] or [method apply_force] methods. */
sleeping: boolean;

/** Called during physics processing, allowing you to read and safely modify the simulation state for the object. By default, it works in addition to the usual physics behavior, but the [member custom_integrator] property allows you to disable the default behavior and do fully custom force integration for a body. */
protected _integrate_forces(): void;

/**
 * Adds a constant directional force without affecting rotation that keeps being applied over time until cleared with `constant_force = Vector3(0, 0, 0)`.
 *
 * This is equivalent to using [method add_constant_force] at the body's center of mass.
 *
*/
add_constant_central_force(): void;

/**
 * Adds a constant positioned force to the body that keeps being applied over time until cleared with `constant_force = Vector3(0, 0, 0)`.
 *
 * [param position] is the offset from the body origin in global coordinates.
 *
*/
add_constant_force(): void;

/** Adds a constant rotational force without affecting position that keeps being applied over time until cleared with [code]constant_torque = Vector3(0, 0, 0)[/code]. */
add_constant_torque(): void;

/**
 * Applies a directional force without affecting rotation. A force is time dependent and meant to be applied every physics update.
 *
 * This is equivalent to using [method apply_force] at the body's center of mass.
 *
*/
apply_central_force(): void;

/**
 * Applies a directional impulse without affecting rotation.
 *
 * An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).
 *
 * This is equivalent to using [method apply_impulse] at the body's center of mass.
 *
*/
apply_central_impulse(): void;

/**
 * Applies a positioned force to the body. A force is time dependent and meant to be applied every physics update.
 *
 * [param position] is the offset from the body origin in global coordinates.
 *
*/
apply_force(): void;

/**
 * Applies a positioned impulse to the body.
 *
 * An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).
 *
 * [param position] is the offset from the body origin in global coordinates.
 *
*/
apply_impulse(): void;

/**
 * Applies a rotational force without affecting position. A force is time dependent and meant to be applied every physics update.
 *
 * **Note:** [member inertia] is required for this to work. To have [member inertia], an active [CollisionShape3D] must be a child of the node, or you can manually set [member inertia].
 *
*/
apply_torque(): void;

/**
 * Applies a rotational impulse to the body without affecting the position.
 *
 * An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).
 *
 * **Note:** [member inertia] is required for this to work. To have [member inertia], an active [CollisionShape3D] must be a child of the node, or you can manually set [member inertia].
 *
*/
apply_torque_impulse(): void;

/**
 * Returns a list of the bodies colliding with this one. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions.
 *
 * **Note:** The result of this test is not immediate after moving objects. For performance, list of collisions is updated once per frame and before the physics step. Consider using signals instead.
 *
*/
get_colliding_bodies(): Node3D[];

/**
 * Returns the number of contacts this body has with other bodies. By default, this returns 0 unless bodies are configured to monitor contacts (see [member contact_monitor]).
 *
 * **Note:** To retrieve the colliding bodies, use [method get_colliding_bodies].
 *
*/
get_contact_count(): int;

/** Returns the inverse inertia tensor basis. This is used to calculate the angular acceleration resulting from a torque applied to the [RigidBody3D]. */
get_inverse_inertia_tensor(): Basis;

/** Sets an axis velocity. The velocity in the given vector axis will be set as the given vector length. This is useful for jumping behavior. */
set_axis_velocity(): void;

  connect<T extends SignalsOf<RigidBody3D>>(signal: T, method: SignalFunction<RigidBody3D[T]>): number;



/**
 * Static body freeze mode (default). The body is not affected by gravity and forces. It can be only moved by user code and doesn't collide with other bodies along its path.
 *
*/
static FREEZE_MODE_STATIC: any;

/**
 * Kinematic body freeze mode. Similar to [constant FREEZE_MODE_STATIC], but collides with other bodies along its path when moved. Useful for a frozen body that needs to be animated.
 *
*/
static FREEZE_MODE_KINEMATIC: any;

/**
 * In this mode, the body's center of mass is calculated automatically based on its shapes. This assumes that the shapes' origins are also their center of mass.
 *
*/
static CENTER_OF_MASS_MODE_AUTO: any;

/**
 * In this mode, the body's center of mass is set through [member center_of_mass]. Defaults to the body's origin position.
 *
*/
static CENTER_OF_MASS_MODE_CUSTOM: any;

/**
 * In this mode, the body's damping value is added to any value set in areas or the default value.
 *
*/
static DAMP_MODE_COMBINE: any;

/**
 * In this mode, the body's damping value replaces any value set in areas or the default value.
 *
*/
static DAMP_MODE_REPLACE: any;


/**
 * Emitted when a collision with another [PhysicsBody3D] or [GridMap] occurs. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [GridMap]s are detected if the [MeshLibrary] has Collision [Shape3D]s.
 *
 * [param body] the [Node], if it exists in the tree, of the other [PhysicsBody3D] or [GridMap].
 *
*/
$body_entered: Signal<() => void>

/**
 * Emitted when the collision with another [PhysicsBody3D] or [GridMap] ends. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [GridMap]s are detected if the [MeshLibrary] has Collision [Shape3D]s.
 *
 * [param body] the [Node], if it exists in the tree, of the other [PhysicsBody3D] or [GridMap].
 *
*/
$body_exited: Signal<() => void>

/**
 * Emitted when one of this RigidBody3D's [Shape3D]s collides with another [PhysicsBody3D] or [GridMap]'s [Shape3D]s. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [GridMap]s are detected if the [MeshLibrary] has Collision [Shape3D]s.
 *
 * [param body_rid] the [RID] of the other [PhysicsBody3D] or [MeshLibrary]'s [CollisionObject3D] used by the [PhysicsServer3D].
 *
 * [param body] the [Node], if it exists in the tree, of the other [PhysicsBody3D] or [GridMap].
 *
 * [param body_shape_index] the index of the [Shape3D] of the other [PhysicsBody3D] or [GridMap] used by the [PhysicsServer3D]. Get the [CollisionShape3D] node with `body.shape_owner_get_owner(body.shape_find_owner(body_shape_index))`.
 *
 * [param local_shape_index] the index of the [Shape3D] of this RigidBody3D used by the [PhysicsServer3D]. Get the [CollisionShape3D] node with `self.shape_owner_get_owner(self.shape_find_owner(local_shape_index))`.
 *
*/
$body_shape_entered: Signal<() => void>

/**
 * Emitted when the collision between one of this RigidBody3D's [Shape3D]s and another [PhysicsBody3D] or [GridMap]'s [Shape3D]s ends. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [GridMap]s are detected if the [MeshLibrary] has Collision [Shape3D]s.
 *
 * [param body_rid] the [RID] of the other [PhysicsBody3D] or [MeshLibrary]'s [CollisionObject3D] used by the [PhysicsServer3D]. [GridMap]s are detected if the Meshes have [Shape3D]s.
 *
 * [param body] the [Node], if it exists in the tree, of the other [PhysicsBody3D] or [GridMap].
 *
 * [param body_shape_index] the index of the [Shape3D] of the other [PhysicsBody3D] or [GridMap] used by the [PhysicsServer3D]. Get the [CollisionShape3D] node with `body.shape_owner_get_owner(body.shape_find_owner(body_shape_index))`.
 *
 * [param local_shape_index] the index of the [Shape3D] of this RigidBody3D used by the [PhysicsServer3D]. Get the [CollisionShape3D] node with `self.shape_owner_get_owner(self.shape_find_owner(local_shape_index))`.
 *
*/
$body_shape_exited: Signal<() => void>

/**
 * Emitted when the physics engine changes the body's sleeping state.
 *
 * **Note:** Changing the value [member sleeping] will not trigger this signal. It is only emitted if the sleeping state is changed by the physics engine or `emit_signal("sleeping_state_changed")` is used.
 *
*/
$sleeping_state_changed: Signal<() => void>

}

