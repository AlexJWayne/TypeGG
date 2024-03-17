
/**
 * A node used as a child of a [VehicleBody3D] parent to simulate the behavior of one of its wheels. This node also acts as a collider to detect if the wheel is touching a surface.
 *
 * **Note:** This class has known issues and isn't designed to provide realistic 3D vehicle physics. If you want advanced vehicle physics, you may need to write your own physics integration using another [PhysicsBody3D] class.
 *
*/
declare class VehicleWheel3D extends Node3D  {

  
/**
 * A node used as a child of a [VehicleBody3D] parent to simulate the behavior of one of its wheels. This node also acts as a collider to detect if the wheel is touching a surface.
 *
 * **Note:** This class has known issues and isn't designed to provide realistic 3D vehicle physics. If you want advanced vehicle physics, you may need to write your own physics integration using another [PhysicsBody3D] class.
 *
*/
  new(): VehicleWheel3D; 
  static "new"(): VehicleWheel3D 


/** Slows down the wheel by applying a braking force. The wheel is only slowed down if it is in contact with a surface. The force you need to apply to adequately slow down your vehicle depends on the [member RigidBody3D.mass] of the vehicle. For a vehicle with a mass set to 1000, try a value in the 25 - 30 range for hard braking. */
brake: float;

/** The damping applied to the spring when the spring is being compressed. This value should be between 0.0 (no damping) and 1.0. A value of 0.0 means the car will keep bouncing as the spring keeps its energy. A good value for this is around 0.3 for a normal car, 0.5 for a race car. */
damping_compression: float;

/** The damping applied to the spring when relaxing. This value should be between 0.0 (no damping) and 1.0. This value should always be slightly higher than the [member damping_compression] property. For a [member damping_compression] value of 0.3, try a relaxation value of 0.5. */
damping_relaxation: float;

/**
 * Accelerates the wheel by applying an engine force. The wheel is only sped up if it is in contact with a surface. The [member RigidBody3D.mass] of the vehicle has an effect on the acceleration of the vehicle. For a vehicle with a mass set to 1000, try a value in the 25 - 50 range for acceleration.
 *
 * **Note:** The simulation does not take the effect of gears into account, you will need to add logic for this if you wish to simulate gears.
 *
 * A negative value will result in the wheel reversing.
 *
*/
engine_force: float;

/** The steering angle for the wheel, in radians. Setting this to a non-zero value will result in the vehicle turning when it's moving. */
steering: float;

/** The maximum force the spring can resist. This value should be higher than a quarter of the [member RigidBody3D.mass] of the [VehicleBody3D] or the spring will not carry the weight of the vehicle. Good results are often obtained by a value that is about 3× to 4× this number. */
suspension_max_force: float;

/** This value defines the stiffness of the suspension. Use a value lower than 50 for an off-road car, a value between 50 and 100 for a race car and try something around 200 for something like a Formula 1 car. */
suspension_stiffness: float;

/** This is the distance the suspension can travel. As Godot units are equivalent to meters, keep this setting relatively low. Try a value between 0.1 and 0.3 depending on the type of car. */
suspension_travel: float;

/** If [code]true[/code], this wheel will be turned when the car steers. This value is used in conjunction with [member VehicleBody3D.steering] and ignored if you are using the per-wheel [member steering] value instead. */
use_as_steering: boolean;

/** If [code]true[/code], this wheel transfers engine force to the ground to propel the vehicle forward. This value is used in conjunction with [member VehicleBody3D.engine_force] and ignored if you are using the per-wheel [member engine_force] value instead. */
use_as_traction: boolean;

/**
 * This determines how much grip this wheel has. It is combined with the friction setting of the surface the wheel is in contact with. 0.0 means no grip, 1.0 is normal grip. For a drift car setup, try setting the grip of the rear wheels slightly lower than the front wheels, or use a lower value to simulate tire wear.
 *
 * It's best to set this to 1.0 when starting out.
 *
*/
wheel_friction_slip: float;

/** The radius of the wheel in meters. */
wheel_radius: float;

/** This is the distance in meters the wheel is lowered from its origin point. Don't set this to 0.0 and move the wheel into position, instead move the origin point of your wheel (the gizmo in Godot) to the position the wheel will take when bottoming out, then use the rest length to move the wheel down to the position it should be in when the car is in rest. */
wheel_rest_length: float;

/** This value affects the roll of your vehicle. If set to 1.0 for all wheels, your vehicle will be prone to rolling over, while a value of 0.0 will resist body roll. */
wheel_roll_influence: float;

/**
 * Returns the contacting body node if valid in the tree, as [Node3D]. At the moment, [GridMap] is not supported so the node will be always of type [PhysicsBody3D].
 *
 * Returns `null` if the wheel is not in contact with a surface, or the contact body is not a [PhysicsBody3D].
 *
*/
get_contact_body(): Node3D;

/** Returns the rotational speed of the wheel in revolutions per minute. */
get_rpm(): float;

/** Returns a value between 0.0 and 1.0 that indicates whether this wheel is skidding. 0.0 is skidding (the wheel has lost grip, e.g. icy terrain), 1.0 means not skidding (the wheel has full grip, e.g. dry asphalt road). */
get_skidinfo(): float;

/** Returns [code]true[/code] if this wheel is in contact with a surface. */
is_in_contact(): boolean;

  connect<T extends SignalsOf<VehicleWheel3D>>(signal: T, method: SignalFunction<VehicleWheel3D[T]>): number;






}

