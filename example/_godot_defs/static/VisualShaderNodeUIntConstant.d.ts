
/**
 * Translated to `uint` in the shader language.
 *
*/
declare class VisualShaderNodeUIntConstant extends VisualShaderNodeConstant  {

  
/**
 * Translated to `uint` in the shader language.
 *
*/
  new(): VisualShaderNodeUIntConstant; 
  static "new"(): VisualShaderNodeUIntConstant 


/** An unsigned integer constant which represents a state of this node. */
constant: int;



  connect<T extends SignalsOf<VisualShaderNodeUIntConstant>>(signal: T, method: SignalFunction<VisualShaderNodeUIntConstant[T]>): number;






}

