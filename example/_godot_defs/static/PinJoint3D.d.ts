
/**
 * A physics joint that attaches two 3D physics bodies at a single point, allowing them to freely rotate. For example, a [RigidBody3D] can be attached to a [StaticBody3D] to create a pendulum or a seesaw.
 *
*/
declare class PinJoint3D extends Joint3D  {

  
/**
 * A physics joint that attaches two 3D physics bodies at a single point, allowing them to freely rotate. For example, a [RigidBody3D] can be attached to a [StaticBody3D] to create a pendulum or a seesaw.
 *
*/
  new(): PinJoint3D; 
  static "new"(): PinJoint3D 


/** The force with which the pinned objects stay in positional relation to each other. The higher, the stronger. */
"params/bias": float;

/** The force with which the pinned objects stay in velocity relation to each other. The higher, the stronger. */
"params/damping": float;

/** If above 0, this value is the maximum value for an impulse that this Joint3D produces. */
"params/impulse_clamp": float;

/** Returns the value of the specified parameter. */
get_param(): float;

/** Sets the value of the specified parameter. */
set_param(): void;

  connect<T extends SignalsOf<PinJoint3D>>(signal: T, method: SignalFunction<PinJoint3D[T]>): number;



/**
 * The force with which the pinned objects stay in positional relation to each other. The higher, the stronger.
 *
*/
static PARAM_BIAS: any;

/**
 * The force with which the pinned objects stay in velocity relation to each other. The higher, the stronger.
 *
*/
static PARAM_DAMPING: any;

/**
 * If above 0, this value is the maximum value for an impulse that this Joint3D produces.
 *
*/
static PARAM_IMPULSE_CLAMP: any;



}

