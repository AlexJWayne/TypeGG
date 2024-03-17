
/**
 * [PhysicsBody2D] is an abstract base class for 2D game objects affected by physics. All 2D physics bodies inherit from it.
 *
*/
declare class PhysicsBody2D extends CollisionObject2D  {

  
/**
 * [PhysicsBody2D] is an abstract base class for 2D game objects affected by physics. All 2D physics bodies inherit from it.
 *
*/
  new(): PhysicsBody2D; 
  static "new"(): PhysicsBody2D 



/** Adds a body to the list of bodies that this body can't collide with. */
add_collision_exception_with(): void;

/** Returns an array of nodes that were added as collision exceptions for this body. */
get_collision_exceptions(): PhysicsBody2D[];

/**
 * Moves the body along the vector [param motion]. In order to be frame rate independent in [method Node._physics_process] or [method Node._process], [param motion] should be computed using `delta`.
 *
 * Returns a [KinematicCollision2D], which contains information about the collision when stopped, or when touching another body along the motion.
 *
 * If [param test_only] is `true`, the body does not move but the would-be collision information is given.
 *
 * [param safe_margin] is the extra margin used for collision recovery (see [member CharacterBody2D.safe_margin] for more details).
 *
 * If [param recovery_as_collision] is `true`, any depenetration from the recovery phase is also reported as a collision; this is used e.g. by [CharacterBody2D] for improving floor detection during floor snapping.
 *
*/
move_and_collide(): KinematicCollision2D;

/** Removes a body from the list of bodies that this body can't collide with. */
remove_collision_exception_with(): void;

/**
 * Checks for collisions without moving the body. In order to be frame rate independent in [method Node._physics_process] or [method Node._process], [param motion] should be computed using `delta`.
 *
 * Virtually sets the node's position, scale and rotation to that of the given [Transform2D], then tries to move the body along the vector [param motion]. Returns `true` if a collision would stop the body from moving along the whole path.
 *
 * [param collision] is an optional object of type [KinematicCollision2D], which contains additional information about the collision when stopped, or when touching another body along the motion.
 *
 * [param safe_margin] is the extra margin used for collision recovery (see [member CharacterBody2D.safe_margin] for more details).
 *
 * If [param recovery_as_collision] is `true`, any depenetration from the recovery phase is also reported as a collision; this is useful for checking whether the body would **touch** any other bodies.
 *
*/
test_move(): boolean;

  connect<T extends SignalsOf<PhysicsBody2D>>(signal: T, method: SignalFunction<PhysicsBody2D[T]>): number;






}

