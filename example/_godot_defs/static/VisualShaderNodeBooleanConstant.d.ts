
/**
 * Has only one output port and no inputs.
 *
 * Translated to [code skip-lint]bool` in the shader language.
 *
*/
declare class VisualShaderNodeBooleanConstant extends VisualShaderNodeConstant  {

  
/**
 * Has only one output port and no inputs.
 *
 * Translated to [code skip-lint]bool` in the shader language.
 *
*/
  new(): VisualShaderNodeBooleanConstant; 
  static "new"(): VisualShaderNodeBooleanConstant 


/** A boolean constant which represents a state of this node. */
constant: boolean;



  connect<T extends SignalsOf<VisualShaderNodeBooleanConstant>>(signal: T, method: SignalFunction<VisualShaderNodeBooleanConstant[T]>): number;






}

