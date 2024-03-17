
/**
 * A physics joint that attaches two 2D physics bodies at a single point, allowing them to freely rotate. For example, a [RigidBody2D] can be attached to a [StaticBody2D] to create a pendulum or a seesaw.
 *
*/
declare class PinJoint2D extends Joint2D  {

  
/**
 * A physics joint that attaches two 2D physics bodies at a single point, allowing them to freely rotate. For example, a [RigidBody2D] can be attached to a [StaticBody2D] to create a pendulum or a seesaw.
 *
*/
  new(): PinJoint2D; 
  static "new"(): PinJoint2D 


/** If [code]true[/code], the pin maximum and minimum rotation, defined by [member angular_limit_lower] and [member angular_limit_upper] are applied. */
angular_limit_enabled: boolean;

/** The minimum rotation. Only active if [member angular_limit_enabled] is [code]true[/code]. */
angular_limit_lower: float;

/** The maximum rotation. Only active if [member angular_limit_enabled] is [code]true[/code]. */
angular_limit_upper: float;

/** When activated, a motor turns the pin. */
motor_enabled: boolean;

/** Target speed for the motor. In radians per second. */
motor_target_velocity: float;

/** The higher this value, the more the bond to the pinned partner can flex. */
softness: float;



  connect<T extends SignalsOf<PinJoint2D>>(signal: T, method: SignalFunction<PinJoint2D[T]>): number;






}

