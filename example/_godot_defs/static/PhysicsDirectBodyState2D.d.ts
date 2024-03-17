
/**
 * Provides direct access to a physics body in the [PhysicsServer2D], allowing safe changes to physics properties. This object is passed via the direct state callback of [RigidBody2D], and is intended for changing the direct state of that body. See [method RigidBody2D._integrate_forces].
 *
*/
declare class PhysicsDirectBodyState2D extends Object  {

  
/**
 * Provides direct access to a physics body in the [PhysicsServer2D], allowing safe changes to physics properties. This object is passed via the direct state callback of [RigidBody2D], and is intended for changing the direct state of that body. See [method RigidBody2D._integrate_forces].
 *
*/
  new(): PhysicsDirectBodyState2D; 
  static "new"(): PhysicsDirectBodyState2D 


/** The body's rotational velocity in [i]radians[/i] per second. */
angular_velocity: float;

/** The body's center of mass position relative to the body's center in the global coordinate system. */
center_of_mass: Vector2;

/** The body's center of mass position in the body's local coordinate system. */
center_of_mass_local: Vector2;

/** The inverse of the inertia of the body. */
inverse_inertia: float;

/** The inverse of the mass of the body. */
inverse_mass: float;

/** The body's linear velocity in pixels per second. */
linear_velocity: Vector2;

/** If [code]true[/code], this body is currently sleeping (not active). */
sleeping: boolean;

/** The timestep (delta) used for the simulation. */
step: float;

/** The rate at which the body stops rotating, if there are not any other forces moving it. */
total_angular_damp: float;

/** The total gravity vector being currently applied to this body. */
total_gravity: Vector2;

/** The rate at which the body stops moving, if there are not any other forces moving it. */
total_linear_damp: float;

/** The body's transformation matrix. */
transform: Transform2D;

/**
 * Adds a constant directional force without affecting rotation that keeps being applied over time until cleared with `constant_force = Vector2(0, 0)`.
 *
 * This is equivalent to using [method add_constant_force] at the body's center of mass.
 *
*/
add_constant_central_force(): void;

/**
 * Adds a constant positioned force to the body that keeps being applied over time until cleared with `constant_force = Vector2(0, 0)`.
 *
 * [param position] is the offset from the body origin in global coordinates.
 *
*/
add_constant_force(): void;

/** Adds a constant rotational force without affecting position that keeps being applied over time until cleared with [code]constant_torque = 0[/code]. */
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
 * **Note:** [member inverse_inertia] is required for this to work. To have [member inverse_inertia], an active [CollisionShape2D] must be a child of the node, or you can manually set [member inverse_inertia].
 *
*/
apply_torque(): void;

/**
 * Applies a rotational impulse to the body without affecting the position.
 *
 * An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).
 *
 * **Note:** [member inverse_inertia] is required for this to work. To have [member inverse_inertia], an active [CollisionShape2D] must be a child of the node, or you can manually set [member inverse_inertia].
 *
*/
apply_torque_impulse(): void;

/**
 * Returns the body's total constant positional forces applied during each physics update.
 *
 * See [method add_constant_force] and [method add_constant_central_force].
 *
*/
get_constant_force(): Vector2;

/**
 * Returns the body's total constant rotational forces applied during each physics update.
 *
 * See [method add_constant_torque].
 *
*/
get_constant_torque(): float;

/** Returns the collider's [RID]. */
get_contact_collider(): RID;

/** Returns the collider's object id. */
get_contact_collider_id(): int;

/** Returns the collider object. This depends on how it was created (will return a scene node if such was used to create it). */
get_contact_collider_object(): Object;

/** Returns the position of the contact point on the collider in the global coordinate system. */
get_contact_collider_position(): Vector2;

/** Returns the collider's shape index. */
get_contact_collider_shape(): int;

/** Returns the velocity vector at the collider's contact point. */
get_contact_collider_velocity_at_position(): Vector2;

/**
 * Returns the number of contacts this body has with other bodies.
 *
 * **Note:** By default, this returns 0 unless bodies are configured to monitor contacts. See [member RigidBody2D.contact_monitor].
 *
*/
get_contact_count(): int;

/** Returns the impulse created by the contact. */
get_contact_impulse(): Vector2;

/** Returns the local normal at the contact point. */
get_contact_local_normal(): Vector2;

/** Returns the position of the contact point on the body in the global coordinate system. */
get_contact_local_position(): Vector2;

/** Returns the local shape index of the collision. */
get_contact_local_shape(): int;

/** Returns the velocity vector at the body's contact point. */
get_contact_local_velocity_at_position(): Vector2;

/** Returns the current state of the space, useful for queries. */
get_space_state(): PhysicsDirectSpaceState2D;

/** Returns the body's velocity at the given relative position, including both translation and rotation. */
get_velocity_at_local_position(): Vector2;

/** Calls the built-in force integration code. */
integrate_forces(): void;

/**
 * Sets the body's total constant positional forces applied during each physics update.
 *
 * See [method add_constant_force] and [method add_constant_central_force].
 *
*/
set_constant_force(): void;

/**
 * Sets the body's total constant rotational forces applied during each physics update.
 *
 * See [method add_constant_torque].
 *
*/
set_constant_torque(): void;

  connect<T extends SignalsOf<PhysicsDirectBodyState2D>>(signal: T, method: SignalFunction<PhysicsDirectBodyState2D[T]>): number;






}

