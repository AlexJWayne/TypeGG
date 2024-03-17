
/**
 * A constant [Vector3], which can be used as an input node.
 *
*/
declare class VisualShaderNodeVec3Constant extends VisualShaderNodeConstant  {

  
/**
 * A constant [Vector3], which can be used as an input node.
 *
*/
  new(): VisualShaderNodeVec3Constant; 
  static "new"(): VisualShaderNodeVec3Constant 


/** A [Vector3] constant which represents the state of this node. */
constant: Vector3;



  connect<T extends SignalsOf<VisualShaderNodeVec3Constant>>(signal: T, method: SignalFunction<VisualShaderNodeVec3Constant[T]>): number;






}

