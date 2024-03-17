
/**
 * A physics joint that connects two 3D physics bodies in a way that simulates a ball-and-socket joint. The twist axis is initiated as the X axis of the [ConeTwistJoint3D]. Once the physics bodies swing, the twist axis is calculated as the middle of the X axes of the joint in the local space of the two physics bodies. Useful for limbs like shoulders and hips, lamps hanging off a ceiling, etc.
 *
*/
declare class ConeTwistJoint3D extends Joint3D  {

  
/**
 * A physics joint that connects two 3D physics bodies in a way that simulates a ball-and-socket joint. The twist axis is initiated as the X axis of the [ConeTwistJoint3D]. Once the physics bodies swing, the twist axis is calculated as the middle of the X axes of the joint in the local space of the two physics bodies. Useful for limbs like shoulders and hips, lamps hanging off a ceiling, etc.
 *
*/
  new(): ConeTwistJoint3D; 
  static "new"(): ConeTwistJoint3D 


/**
 * The speed with which the swing or twist will take place.
 *
 * The higher, the faster.
 *
*/
bias: float;

/** Defines, how fast the swing- and twist-speed-difference on both sides gets synced. */
relaxation: float;

/** The ease with which the joint starts to twist. If it's too low, it takes more force to start twisting the joint. */
softness: float;

/**
 * Swing is rotation from side to side, around the axis perpendicular to the twist axis.
 *
 * The swing span defines, how much rotation will not get corrected along the swing axis.
 *
 * Could be defined as looseness in the [ConeTwistJoint3D].
 *
 * If below 0.05, this behavior is locked.
 *
*/
swing_span: float;

/**
 * Twist is the rotation around the twist axis, this value defined how far the joint can twist.
 *
 * Twist is locked if below 0.05.
 *
*/
twist_span: float;

/** Returns the value of the specified parameter. */
get_param(): float;

/** Sets the value of the specified parameter. */
set_param(): void;

  connect<T extends SignalsOf<ConeTwistJoint3D>>(signal: T, method: SignalFunction<ConeTwistJoint3D[T]>): number;



/**
 * Swing is rotation from side to side, around the axis perpendicular to the twist axis.
 *
 * The swing span defines, how much rotation will not get corrected along the swing axis.
 *
 * Could be defined as looseness in the [ConeTwistJoint3D].
 *
 * If below 0.05, this behavior is locked.
 *
*/
static PARAM_SWING_SPAN: any;

/**
 * Twist is the rotation around the twist axis, this value defined how far the joint can twist.
 *
 * Twist is locked if below 0.05.
 *
*/
static PARAM_TWIST_SPAN: any;

/**
 * The speed with which the swing or twist will take place.
 *
 * The higher, the faster.
 *
*/
static PARAM_BIAS: any;

/**
 * The ease with which the joint starts to twist. If it's too low, it takes more force to start twisting the joint.
 *
*/
static PARAM_SOFTNESS: any;

/**
 * Defines, how fast the swing- and twist-speed-difference on both sides gets synced.
 *
*/
static PARAM_RELAXATION: any;

/**
 * Represents the size of the [enum Param] enum.
 *
*/
static PARAM_MAX: any;



}

