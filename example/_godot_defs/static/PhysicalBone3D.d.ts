
/**
 * The [PhysicalBone3D] node is a physics body that can be used to make bones in a [Skeleton3D] react to physics.
 *
*/
declare class PhysicalBone3D extends PhysicsBody3D  {

  
/**
 * The [PhysicalBone3D] node is a physics body that can be used to make bones in a [Skeleton3D] react to physics.
 *
*/
  new(): PhysicalBone3D; 
  static "new"(): PhysicalBone3D 


/**
 * Damps the body's rotation. By default, the body will use the **Default Angular Damp** in **Project > Project Settings > Physics > 3d** or any value override set by an [Area3D] the body is in. Depending on [member angular_damp_mode], you can set [member angular_damp] to be added to or to replace the body's damping value.
 *
 * See [member ProjectSettings.physics/3d/default_angular_damp] for more details about damping.
 *
*/
angular_damp: float;

/** Defines how [member angular_damp] is applied. See [enum DampMode] for possible values. */
angular_damp_mode: int;

/** The PhysicalBone3D's rotational velocity in [i]radians[/i] per second. */
angular_velocity: Vector3;

/** Sets the body's transform. */
body_offset: Transform3D;

/** The body's bounciness. Values range from [code]0[/code] (no bounce) to [code]1[/code] (full bounciness). */
bounce: float;

/** If [code]true[/code], the body is deactivated when there is no movement, so it will not take part in the simulation until it is awakened by an external force. */
can_sleep: boolean;

/** If [code]true[/code], internal force integration will be disabled (like gravity or air friction) for this body. Other than collision response, the body will only move as determined by the [method _integrate_forces] function, if defined. */
custom_integrator: boolean;

/** The body's friction, from [code]0[/code] (frictionless) to [code]1[/code] (max friction). */
friction: float;

/** This is multiplied by the global 3D gravity setting found in [b]Project > Project Settings > Physics > 3d[/b] to produce the body's gravity. For example, a value of 1 will be normal gravity, 2 will apply double gravity, and 0.5 will apply half gravity to this object. */
gravity_scale: float;

/** Sets the joint's transform. */
joint_offset: Transform3D;

/** Sets the joint's rotation in radians. */
joint_rotation: Vector3;

/** Sets the joint type. See [enum JointType] for possible values. */
joint_type: int;

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

/** The body's mass. */
mass: float;

/** Called during physics processing, allowing you to read and safely modify the simulation state for the object. By default, it works in addition to the usual physics behavior, but the [member custom_integrator] property allows you to disable the default behavior and do fully custom force integration for a body. */
protected _integrate_forces(): void;

/** No documentation provided. */
apply_central_impulse(): void;

/** No documentation provided. */
apply_impulse(): void;

/** No documentation provided. */
get_bone_id(): int;

/** No documentation provided. */
get_simulate_physics(): boolean;

/** No documentation provided. */
is_simulating_physics(): boolean;

  connect<T extends SignalsOf<PhysicalBone3D>>(signal: T, method: SignalFunction<PhysicalBone3D[T]>): number;



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

/** No documentation provided. */
static JOINT_TYPE_NONE: any;

/** No documentation provided. */
static JOINT_TYPE_PIN: any;

/** No documentation provided. */
static JOINT_TYPE_CONE: any;

/** No documentation provided. */
static JOINT_TYPE_HINGE: any;

/** No documentation provided. */
static JOINT_TYPE_SLIDER: any;

/** No documentation provided. */
static JOINT_TYPE_6DOF: any;



}

