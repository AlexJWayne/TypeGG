
/**
 * Varying values are shader variables that can be passed between shader functions, e.g. from Vertex shader to Fragment shader.
 *
*/
declare class VisualShaderNodeVarying extends VisualShaderNode  {

  
/**
 * Varying values are shader variables that can be passed between shader functions, e.g. from Vertex shader to Fragment shader.
 *
*/
  new(): VisualShaderNodeVarying; 
  static "new"(): VisualShaderNodeVarying 


/** Name of the variable. Must be unique. */
varying_name: string;

/** Type of the variable. Determines where the variable can be accessed. */
varying_type: int;



  connect<T extends SignalsOf<VisualShaderNodeVarying>>(signal: T, method: SignalFunction<VisualShaderNodeVarying[T]>): number;






}

