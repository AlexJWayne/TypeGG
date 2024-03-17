
/**
 * A constant 4D vector, which can be used as an input node.
 *
*/
declare class VisualShaderNodeVec4Constant extends VisualShaderNodeConstant  {

  
/**
 * A constant 4D vector, which can be used as an input node.
 *
*/
  new(): VisualShaderNodeVec4Constant; 
  static "new"(): VisualShaderNodeVec4Constant 


/** A 4D vector (represented as a [Quaternion]) constant which represents the state of this node. */
constant: Quaternion;



  connect<T extends SignalsOf<VisualShaderNodeVec4Constant>>(signal: T, method: SignalFunction<VisualShaderNodeVec4Constant[T]>): number;






}

