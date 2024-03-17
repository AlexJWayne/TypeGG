
/**
 * Translates to `screen_uv_to_sdf(uv)` in the shader language. If the UV port isn't connected, `SCREEN_UV` is used instead.
 *
*/
declare class VisualShaderNodeScreenUVToSDF extends VisualShaderNode  {

  
/**
 * Translates to `screen_uv_to_sdf(uv)` in the shader language. If the UV port isn't connected, `SCREEN_UV` is used instead.
 *
*/
  new(): VisualShaderNodeScreenUVToSDF; 
  static "new"(): VisualShaderNodeScreenUVToSDF 





  connect<T extends SignalsOf<VisualShaderNodeScreenUVToSDF>>(signal: T, method: SignalFunction<VisualShaderNodeScreenUVToSDF[T]>): number;






}

