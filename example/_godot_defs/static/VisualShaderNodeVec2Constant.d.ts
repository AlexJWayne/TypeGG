
/**
 * A constant [Vector2], which can be used as an input node.
 *
*/
declare class VisualShaderNodeVec2Constant extends VisualShaderNodeConstant  {

  
/**
 * A constant [Vector2], which can be used as an input node.
 *
*/
  new(): VisualShaderNodeVec2Constant; 
  static "new"(): VisualShaderNodeVec2Constant 


/** A [Vector2] constant which represents the state of this node. */
constant: Vector2;



  connect<T extends SignalsOf<VisualShaderNodeVec2Constant>>(signal: T, method: SignalFunction<VisualShaderNodeVec2Constant[T]>): number;






}

