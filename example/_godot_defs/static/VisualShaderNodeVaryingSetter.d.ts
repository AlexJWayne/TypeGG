
/**
 * Inputs a value to a varying defined in the shader. You need to first create a varying that can be used in the given function, e.g. varying setter in Fragment shader requires a varying with mode set to [constant VisualShader.VARYING_MODE_FRAG_TO_LIGHT].
 *
*/
declare class VisualShaderNodeVaryingSetter extends VisualShaderNodeVarying  {

  
/**
 * Inputs a value to a varying defined in the shader. You need to first create a varying that can be used in the given function, e.g. varying setter in Fragment shader requires a varying with mode set to [constant VisualShader.VARYING_MODE_FRAG_TO_LIGHT].
 *
*/
  new(): VisualShaderNodeVaryingSetter; 
  static "new"(): VisualShaderNodeVaryingSetter 





  connect<T extends SignalsOf<VisualShaderNodeVaryingSetter>>(signal: T, method: SignalFunction<VisualShaderNodeVaryingSetter[T]>): number;






}

