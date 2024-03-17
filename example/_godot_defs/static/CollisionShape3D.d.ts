
/**
 * A node that provides a [Shape3D] to a [CollisionObject3D] parent and allows to edit it. This can give a detection shape to an [Area3D] or turn a [PhysicsBody3D] into a solid object.
 *
 * **Warning:** A non-uniformly scaled [CollisionShape3D] will likely not behave as expected. Make sure to keep its scale the same on all axes and adjust its [member shape] resource instead.
 *
*/
declare class CollisionShape3D extends Node3D  {

  
/**
 * A node that provides a [Shape3D] to a [CollisionObject3D] parent and allows to edit it. This can give a detection shape to an [Area3D] or turn a [PhysicsBody3D] into a solid object.
 *
 * **Warning:** A non-uniformly scaled [CollisionShape3D] will likely not behave as expected. Make sure to keep its scale the same on all axes and adjust its [member shape] resource instead.
 *
*/
  new(): CollisionShape3D; 
  static "new"(): CollisionShape3D 


/** A disabled collision shape has no effect in the world. */
disabled: boolean;

/** The actual shape owned by this collision shape. */
shape: Shape3D;

/** Sets the collision shape's shape to the addition of all its convexed [MeshInstance3D] siblings geometry. */
make_convex_from_siblings(): void;

/** [i]Obsoleted.[/i] Use [signal Resource.changed] instead. */
resource_changed(): void;

  connect<T extends SignalsOf<CollisionShape3D>>(signal: T, method: SignalFunction<CollisionShape3D[T]>): number;






}

