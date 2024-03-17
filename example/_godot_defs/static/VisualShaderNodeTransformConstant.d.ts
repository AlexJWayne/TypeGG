
/**
 * A constant [Transform3D], which can be used as an input node.
 *
*/
declare class VisualShaderNodeTransformConstant extends VisualShaderNodeConstant  {

  
/**
 * A constant [Transform3D], which can be used as an input node.
 *
*/
  new(): VisualShaderNodeTransformConstant; 
  static "new"(): VisualShaderNodeTransformConstant 


/** A [Transform3D] constant which represents the state of this node. */
constant: Transform3D;



  connect<T extends SignalsOf<VisualShaderNodeTransformConstant>>(signal: T, method: SignalFunction<VisualShaderNodeTransformConstant[T]>): number;






}

