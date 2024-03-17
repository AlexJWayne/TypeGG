
/**
 * The WorldPositionFromDepth node reconstructs the depth position of the pixel in world space. This can be used to obtain world space UVs for projection mapping like Caustics.
 *
*/
declare class VisualShaderNodeWorldPositionFromDepth extends VisualShaderNode  {

  
/**
 * The WorldPositionFromDepth node reconstructs the depth position of the pixel in world space. This can be used to obtain world space UVs for projection mapping like Caustics.
 *
*/
  new(): VisualShaderNodeWorldPositionFromDepth; 
  static "new"(): VisualShaderNodeWorldPositionFromDepth 





  connect<T extends SignalsOf<VisualShaderNodeWorldPositionFromDepth>>(signal: T, method: SignalFunction<VisualShaderNodeWorldPositionFromDepth[T]>): number;






}

