
/**
 * A physics joint that restricts the movement of two 2D physics bodies to a fixed axis. For example, a [StaticBody2D] representing a piston base can be attached to a [RigidBody2D] representing the piston head, moving up and down.
 *
*/
declare class GrooveJoint2D extends Joint2D  {

  
/**
 * A physics joint that restricts the movement of two 2D physics bodies to a fixed axis. For example, a [StaticBody2D] representing a piston base can be attached to a [RigidBody2D] representing the piston head, moving up and down.
 *
*/
  new(): GrooveJoint2D; 
  static "new"(): GrooveJoint2D 


/** The body B's initial anchor position defined by the joint's origin and a local offset [member initial_offset] along the joint's Y axis (along the groove). */
initial_offset: float;

/** The groove's length. The groove is from the joint's origin towards [member length] along the joint's local Y axis. */
length: float;



  connect<T extends SignalsOf<GrooveJoint2D>>(signal: T, method: SignalFunction<GrooveJoint2D[T]>): number;






}

