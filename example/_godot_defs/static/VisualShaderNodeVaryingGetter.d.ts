
/**
 * Outputs a value of a varying defined in the shader. You need to first create a varying that can be used in the given function, e.g. varying getter in Fragment shader requires a varying with mode set to [constant VisualShader.VARYING_MODE_VERTEX_TO_FRAG_LIGHT].
 *
*/
declare class VisualShaderNodeVaryingGetter extends VisualShaderNodeVarying  {

  
/**
 * Outputs a value of a varying defined in the shader. You need to first create a varying that can be used in the given function, e.g. varying getter in Fragment shader requires a varying with mode set to [constant VisualShader.VARYING_MODE_VERTEX_TO_FRAG_LIGHT].
 *
*/
  new(): VisualShaderNodeVaryingGetter; 
  static "new"(): VisualShaderNodeVaryingGetter 





  connect<T extends SignalsOf<VisualShaderNodeVaryingGetter>>(signal: T, method: SignalFunction<VisualShaderNodeVaryingGetter[T]>): number;






}

