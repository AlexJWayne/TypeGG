
/**
 * [PhysicsBody3D] is an abstract base class for 3D game objects affected by physics. All 3D physics bodies inherit from it.
 *
 * **Warning:** With a non-uniform scale, this node will likely not behave as expected. It is advised to keep its scale the same on all axes and adjust its collision shape(s) instead.
 *
*/
declare class PhysicsBody3D extends CollisionObject3D  {

  
/**
 * [PhysicsBody3D] is an abstract base class for 3D game objects affected by physics. All 3D physics bodies inherit from it.
 *
 * **Warning:** With a non-uniform scale, this node will likely not behave as expected. It is advised to keep its scale the same on all axes and adjust its collision shape(s) instead.
 *
*/
  new(): PhysicsBody3D; 
  static "new"(): PhysicsBody3D 


/** Lock the body's rotation in the X axis. */
axis_lock_angular_x: boolean;

/** Lock the body's rotation in the Y axis. */
axis_lock_angular_y: boolean;

/** Lock the body's rotation in the Z axis. */
axis_lock_angular_z: boolean;

/** Lock the body's linear movement in the X axis. */
axis_lock_linear_x: boolean;

/** Lock the body's linear movement in the Y axis. */
axis_lock_linear_y: boolean;

/** Lock the body's linear movement in the Z axis. */
axis_lock_linear_z: boolean;

/** Adds a body to the list of bodies that this body can't collide with. */
add_collision_exception_with(): void;

/** Returns [code]true[/code] if the specified linear or rotational [param axis] is locked. */
get_axis_lock(): boolean;

/** Returns an array of nodes that were added as collision exceptions for this body. */
get_collision_exceptions(): PhysicsBody3D[];

/**
 * Moves the body along the vector [param motion]. In order to be frame rate independent in [method Node._physics_process] or [method Node._process], [param motion] should be computed using `delta`.
 *
 * The body will stop if it collides. Returns a [KinematicCollision3D], which contains information about the collision when stopped, or when touching another body along the motion.
 *
 * If [param test_only] is `true`, the body does not move but the would-be collision information is given.
 *
 * [param safe_margin] is the extra margin used for collision recovery (see [member CharacterBody3D.safe_margin] for more details).
 *
 * If [param recovery_as_collision] is `true`, any depenetration from the recovery phase is also reported as a collision; this is used e.g. by [CharacterBody3D] for improving floor detection during floor snapping.
 *
 * [param max_collisions] allows to retrieve more than one collision result.
 *
*/
move_and_collide(): KinematicCollision3D;

/** Removes a body from the list of bodies that this body can't collide with. */
remove_collision_exception_with(): void;

/** Locks or unlocks the specified linear or rotational [param axis] depending on the value of [param lock]. */
set_axis_lock(): void;

/**
 * Checks for collisions without moving the body. In order to be frame rate independent in [method Node._physics_process] or [method Node._process], [param motion] should be computed using `delta`.
 *
 * Virtually sets the node's position, scale and rotation to that of the given [Transform3D], then tries to move the body along the vector [param motion]. Returns `true` if a collision would stop the body from moving along the whole path.
 *
 * [param collision] is an optional object of type [KinematicCollision3D], which contains additional information about the collision when stopped, or when touching another body along the motion.
 *
 * [param safe_margin] is the extra margin used for collision recovery (see [member CharacterBody3D.safe_margin] for more details).
 *
 * If [param recovery_as_collision] is `true`, any depenetration from the recovery phase is also reported as a collision; this is useful for checking whether the body would **touch** any other bodies.
 *
 * [param max_collisions] allows to retrieve more than one collision result.
 *
*/
test_move(): boolean;

  connect<T extends SignalsOf<PhysicsBody3D>>(signal: T, method: SignalFunction<PhysicsBody3D[T]>): number;






}

