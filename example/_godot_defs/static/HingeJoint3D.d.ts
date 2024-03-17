
/**
 * A physics joint that restricts the rotation of a 3D physics body around an axis relative to another physics body. For example, Body A can be a [StaticBody3D] representing a door hinge that a [RigidBody3D] rotates around.
 *
*/
declare class HingeJoint3D extends Joint3D  {

  
/**
 * A physics joint that restricts the rotation of a 3D physics body around an axis relative to another physics body. For example, Body A can be a [StaticBody3D] representing a door hinge that a [RigidBody3D] rotates around.
 *
*/
  new(): HingeJoint3D; 
  static "new"(): HingeJoint3D 


/** The speed with which the rotation across the axis perpendicular to the hinge gets corrected. */
"angular_limit/bias": float;

/** If [code]true[/code], the hinges maximum and minimum rotation, defined by [member angular_limit/lower] and [member angular_limit/upper] has effects. */
"angular_limit/enable": boolean;

/** The minimum rotation. Only active if [member angular_limit/enable] is [code]true[/code]. */
"angular_limit/lower": float;

/** The lower this value, the more the rotation gets slowed down. */
"angular_limit/relaxation": float;


/** The maximum rotation. Only active if [member angular_limit/enable] is [code]true[/code]. */
"angular_limit/upper": float;

/** When activated, a motor turns the hinge. */
"motor/enable": boolean;

/** Maximum acceleration for the motor. */
"motor/max_impulse": float;

/** Target speed for the motor. */
"motor/target_velocity": float;

/** The speed with which the two bodies get pulled together when they move in different directions. */
"params/bias": float;

/** Returns the value of the specified flag. */
get_flag(): boolean;

/** Returns the value of the specified parameter. */
get_param(): float;

/** If [code]true[/code], enables the specified flag. */
set_flag(): void;

/** Sets the value of the specified parameter. */
set_param(): void;

  connect<T extends SignalsOf<HingeJoint3D>>(signal: T, method: SignalFunction<HingeJoint3D[T]>): number;



/**
 * The speed with which the two bodies get pulled together when they move in different directions.
 *
*/
static PARAM_BIAS: any;

/**
 * The maximum rotation. Only active if [member angular_limit/enable] is `true`.
 *
*/
static PARAM_LIMIT_UPPER: any;

/**
 * The minimum rotation. Only active if [member angular_limit/enable] is `true`.
 *
*/
static PARAM_LIMIT_LOWER: any;

/**
 * The speed with which the rotation across the axis perpendicular to the hinge gets corrected.
 *
*/
static PARAM_LIMIT_BIAS: any;

/** No documentation provided. */
static PARAM_LIMIT_SOFTNESS: any;

/**
 * The lower this value, the more the rotation gets slowed down.
 *
*/
static PARAM_LIMIT_RELAXATION: any;

/**
 * Target speed for the motor.
 *
*/
static PARAM_MOTOR_TARGET_VELOCITY: any;

/**
 * Maximum acceleration for the motor.
 *
*/
static PARAM_MOTOR_MAX_IMPULSE: any;

/**
 * Represents the size of the [enum Param] enum.
 *
*/
static PARAM_MAX: any;

/**
 * If `true`, the hinges maximum and minimum rotation, defined by [member angular_limit/lower] and [member angular_limit/upper] has effects.
 *
*/
static FLAG_USE_LIMIT: any;

/**
 * When activated, a motor turns the hinge.
 *
*/
static FLAG_ENABLE_MOTOR: any;

/**
 * Represents the size of the [enum Flag] enum.
 *
*/
static FLAG_MAX: any;



}

