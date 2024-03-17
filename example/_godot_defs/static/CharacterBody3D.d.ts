
/**
 * [CharacterBody3D] is a specialized class for physics bodies that are meant to be user-controlled. They are not affected by physics at all, but they affect other physics bodies in their path. They are mainly used to provide high-level API to move objects with wall and slope detection ([method move_and_slide] method) in addition to the general collision detection provided by [method PhysicsBody3D.move_and_collide]. This makes it useful for highly configurable physics bodies that must move in specific ways and collide with the world, as is often the case with user-controlled characters.
 *
 * For game objects that don't require complex movement or collision detection, such as moving platforms, [AnimatableBody3D] is simpler to configure.
 *
*/
declare class CharacterBody3D extends PhysicsBody3D  {

  
/**
 * [CharacterBody3D] is a specialized class for physics bodies that are meant to be user-controlled. They are not affected by physics at all, but they affect other physics bodies in their path. They are mainly used to provide high-level API to move objects with wall and slope detection ([method move_and_slide] method) in addition to the general collision detection provided by [method PhysicsBody3D.move_and_collide]. This makes it useful for highly configurable physics bodies that must move in specific ways and collide with the world, as is often the case with user-controlled characters.
 *
 * For game objects that don't require complex movement or collision detection, such as moving platforms, [AnimatableBody3D] is simpler to configure.
 *
*/
  new(): CharacterBody3D; 
  static "new"(): CharacterBody3D 


/** If [code]true[/code], the body will be able to move on the floor only. This option avoids to be able to walk on walls, it will however allow to slide down along them. */
floor_block_on_wall: boolean;

/**
 * If `false` (by default), the body will move faster on downward slopes and slower on upward slopes.
 *
 * If `true`, the body will always move at the same speed on the ground no matter the slope. Note that you need to use [member floor_snap_length] to stick along a downward slope at constant speed.
 *
*/
floor_constant_speed: boolean;

/** Maximum angle (in radians) where a slope is still considered a floor (or a ceiling), rather than a wall, when calling [method move_and_slide]. The default value equals 45 degrees. */
floor_max_angle: float;

/**
 * Sets a snapping distance. When set to a value different from `0.0`, the body is kept attached to slopes when calling [method move_and_slide]. The snapping vector is determined by the given distance along the opposite direction of the [member up_direction].
 *
 * As long as the snapping vector is in contact with the ground and the body moves against [member up_direction], the body will remain attached to the surface. Snapping is not applied if the body moves along [member up_direction], meaning it contains vertical rising velocity, so it will be able to detach from the ground when jumping or when the body is pushed up by something. If you want to apply a snap without taking into account the velocity, use [method apply_floor_snap].
 *
*/
floor_snap_length: float;

/**
 * If `true`, the body will not slide on slopes when calling [method move_and_slide] when the body is standing still.
 *
 * If `false`, the body will slide on floor's slopes when [member velocity] applies a downward force.
 *
*/
floor_stop_on_slope: boolean;

/** Maximum number of times the body can change direction before it stops when calling [method move_and_slide]. */
max_slides: int;

/** Sets the motion mode which defines the behavior of [method move_and_slide]. See [enum MotionMode] constants for available modes. */
motion_mode: int;

/** Collision layers that will be included for detecting floor bodies that will act as moving platforms to be followed by the [CharacterBody3D]. By default, all floor bodies are detected and propagate their velocity. */
platform_floor_layers: int;

/** Sets the behavior to apply when you leave a moving platform. By default, to be physically accurate, when you leave the last platform velocity is applied. See [enum PlatformOnLeave] constants for available behavior. */
platform_on_leave: int;

/** Collision layers that will be included for detecting wall bodies that will act as moving platforms to be followed by the [CharacterBody3D]. By default, all wall bodies are ignored. */
platform_wall_layers: int;

/**
 * Extra margin used for collision recovery when calling [method move_and_slide].
 *
 * If the body is at least this close to another body, it will consider them to be colliding and will be pushed away before performing the actual motion.
 *
 * A higher value means it's more flexible for detecting collision, which helps with consistently detecting walls and floors.
 *
 * A lower value forces the collision algorithm to use more exact detection, so it can be used in cases that specifically require precision, e.g at very low scale to avoid visible jittering, or for stability with a stack of character bodies.
 *
*/
safe_margin: float;

/** If [code]true[/code], during a jump against the ceiling, the body will slide, if [code]false[/code] it will be stopped and will fall vertically. */
slide_on_ceiling: boolean;

/** Vector pointing upwards, used to determine what is a wall and what is a floor (or a ceiling) when calling [method move_and_slide]. Defaults to [constant Vector3.UP]. As the vector will be normalized it can't be equal to [constant Vector3.ZERO], if you want all collisions to be reported as walls, consider using [constant MOTION_MODE_FLOATING] as [member motion_mode]. */
up_direction: Vector3;

/** Current velocity vector (typically meters per second), used and modified during calls to [method move_and_slide]. */
velocity: Vector3;

/** Minimum angle (in radians) where the body is allowed to slide when it encounters a slope. The default value equals 15 degrees. When [member motion_mode] is [constant MOTION_MODE_GROUNDED], it only affects movement if [member floor_block_on_wall] is [code]true[/code]. */
wall_min_slide_angle: float;

/** Allows to manually apply a snap to the floor regardless of the body's velocity. This function does nothing when [method is_on_floor] returns [code]true[/code]. */
apply_floor_snap(): void;

/** Returns the floor's collision angle at the last collision point according to [param up_direction], which is [constant Vector3.UP] by default. This value is always positive and only valid after calling [method move_and_slide] and when [method is_on_floor] returns [code]true[/code]. */
get_floor_angle(): float;

/** Returns the surface normal of the floor at the last collision point. Only valid after calling [method move_and_slide] and when [method is_on_floor] returns [code]true[/code]. */
get_floor_normal(): Vector3;

/** Returns the last motion applied to the [CharacterBody3D] during the last call to [method move_and_slide]. The movement can be split into multiple motions when sliding occurs, and this method return the last one, which is useful to retrieve the current direction of the movement. */
get_last_motion(): Vector3;

/** Returns a [KinematicCollision3D], which contains information about the latest collision that occurred during the last call to [method move_and_slide]. */
get_last_slide_collision(): KinematicCollision3D;

/** Returns the angular velocity of the platform at the last collision point. Only valid after calling [method move_and_slide]. */
get_platform_angular_velocity(): Vector3;

/** Returns the linear velocity of the platform at the last collision point. Only valid after calling [method move_and_slide]. */
get_platform_velocity(): Vector3;

/** Returns the travel (position delta) that occurred during the last call to [method move_and_slide]. */
get_position_delta(): Vector3;

/** Returns the current real velocity since the last call to [method move_and_slide]. For example, when you climb a slope, you will move diagonally even though the velocity is horizontal. This method returns the diagonal movement, as opposed to [member velocity] which returns the requested velocity. */
get_real_velocity(): Vector3;

/** Returns a [KinematicCollision3D], which contains information about a collision that occurred during the last call to [method move_and_slide]. Since the body can collide several times in a single call to [method move_and_slide], you must specify the index of the collision in the range 0 to ([method get_slide_collision_count] - 1). */
get_slide_collision(): KinematicCollision3D;

/** Returns the number of times the body collided and changed direction during the last call to [method move_and_slide]. */
get_slide_collision_count(): int;

/** Returns the surface normal of the wall at the last collision point. Only valid after calling [method move_and_slide] and when [method is_on_wall] returns [code]true[/code]. */
get_wall_normal(): Vector3;

/** Returns [code]true[/code] if the body collided with the ceiling on the last call of [method move_and_slide]. Otherwise, returns [code]false[/code]. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "ceiling" or not. */
is_on_ceiling(): boolean;

/** Returns [code]true[/code] if the body collided only with the ceiling on the last call of [method move_and_slide]. Otherwise, returns [code]false[/code]. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "ceiling" or not. */
is_on_ceiling_only(): boolean;

/** Returns [code]true[/code] if the body collided with the floor on the last call of [method move_and_slide]. Otherwise, returns [code]false[/code]. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "floor" or not. */
is_on_floor(): boolean;

/** Returns [code]true[/code] if the body collided only with the floor on the last call of [method move_and_slide]. Otherwise, returns [code]false[/code]. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "floor" or not. */
is_on_floor_only(): boolean;

/** Returns [code]true[/code] if the body collided with a wall on the last call of [method move_and_slide]. Otherwise, returns [code]false[/code]. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "wall" or not. */
is_on_wall(): boolean;

/** Returns [code]true[/code] if the body collided only with a wall on the last call of [method move_and_slide]. Otherwise, returns [code]false[/code]. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "wall" or not. */
is_on_wall_only(): boolean;

/**
 * Moves the body based on [member velocity]. If the body collides with another, it will slide along the other body rather than stop immediately. If the other body is a [CharacterBody3D] or [RigidBody3D], it will also be affected by the motion of the other body. You can use this to make moving and rotating platforms, or to make nodes push other nodes.
 *
 * Modifies [member velocity] if a slide collision occurred. To get the latest collision call [method get_last_slide_collision], for more detailed information about collisions that occurred, use [method get_slide_collision].
 *
 * When the body touches a moving platform, the platform's velocity is automatically added to the body motion. If a collision occurs due to the platform's motion, it will always be first in the slide collisions.
 *
 * Returns `true` if the body collided, otherwise, returns `false`.
 *
*/
move_and_slide(): boolean;

  connect<T extends SignalsOf<CharacterBody3D>>(signal: T, method: SignalFunction<CharacterBody3D[T]>): number;



/**
 * Apply when notions of walls, ceiling and floor are relevant. In this mode the body motion will react to slopes (acceleration/slowdown). This mode is suitable for grounded games like platformers.
 *
*/
static MOTION_MODE_GROUNDED: any;

/**
 * Apply when there is no notion of floor or ceiling. All collisions will be reported as `on_wall`. In this mode, when you slide, the speed will always be constant. This mode is suitable for games without ground like space games.
 *
*/
static MOTION_MODE_FLOATING: any;

/**
 * Add the last platform velocity to the [member velocity] when you leave a moving platform.
 *
*/
static PLATFORM_ON_LEAVE_ADD_VELOCITY: any;

/**
 * Add the last platform velocity to the [member velocity] when you leave a moving platform, but any downward motion is ignored. It's useful to keep full jump height even when the platform is moving down.
 *
*/
static PLATFORM_ON_LEAVE_ADD_UPWARD_VELOCITY: any;

/**
 * Do nothing when leaving a platform.
 *
*/
static PLATFORM_ON_LEAVE_DO_NOTHING: any;



}

