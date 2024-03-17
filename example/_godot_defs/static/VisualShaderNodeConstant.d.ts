
/**
 * This is an abstract class. See the derived types for descriptions of the possible values.
 *
*/
declare class VisualShaderNodeConstant extends VisualShaderNode  {

  
/**
 * This is an abstract class. See the derived types for descriptions of the possible values.
 *
*/
  new(): VisualShaderNodeConstant; 
  static "new"(): VisualShaderNodeConstant 





  connect<T extends SignalsOf<VisualShaderNodeConstant>>(signal: T, method: SignalFunction<VisualShaderNodeConstant[T]>): number;






}

