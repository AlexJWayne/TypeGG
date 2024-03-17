
/**
 * Abstract base class for all joints in 3D physics. 3D joints bind together two physics bodies and apply a constraint.
 *
*/
declare class Joint3D extends Node3D  {

  
/**
 * Abstract base class for all joints in 3D physics. 3D joints bind together two physics bodies and apply a constraint.
 *
*/
  new(): Joint3D; 
  static "new"(): Joint3D 


/** If [code]true[/code], the two bodies of the nodes are not able to collide with each other. */
exclude_nodes_from_collision: boolean;

/** The node attached to the first side (A) of the joint. */
node_a: NodePathType;

/** The node attached to the second side (B) of the joint. */
node_b: NodePathType;

/** The priority used to define which solver is executed first for multiple joints. The lower the value, the higher the priority. */
solver_priority: int;

/** Returns the joint's [RID]. */
get_rid(): RID;

  connect<T extends SignalsOf<Joint3D>>(signal: T, method: SignalFunction<Joint3D[T]>): number;






}

