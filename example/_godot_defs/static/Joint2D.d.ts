
/**
 * Abstract base class for all joints in 2D physics. 2D joints bind together two physics bodies and apply a constraint.
 *
*/
declare class Joint2D extends Node2D  {

  
/**
 * Abstract base class for all joints in 2D physics. 2D joints bind together two physics bodies and apply a constraint.
 *
*/
  new(): Joint2D; 
  static "new"(): Joint2D 


/**
 * When [member node_a] and [member node_b] move in different directions the [member bias] controls how fast the joint pulls them back to their original position. The lower the [member bias] the more the two bodies can pull on the joint.
 *
 * When set to `0`, the default value from [member ProjectSettings.physics/2d/solver/default_constraint_bias] is used.
 *
*/
bias: float;

/** If [code]true[/code], [member node_a] and [member node_b] can not collide. */
disable_collision: boolean;

/** The first body attached to the joint. Must derive from [PhysicsBody2D]. */
node_a: NodePathType;

/** The second body attached to the joint. Must derive from [PhysicsBody2D]. */
node_b: NodePathType;

/** Returns the joint's [RID]. */
get_rid(): RID;

  connect<T extends SignalsOf<Joint2D>>(signal: T, method: SignalFunction<Joint2D[T]>): number;






}

