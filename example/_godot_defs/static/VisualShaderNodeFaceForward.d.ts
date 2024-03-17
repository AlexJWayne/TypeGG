
/**
 * Translates to `faceforward(N, I, Nref)` in the shader language. The function has three vector parameters: `N`, the vector to orient, `I`, the incident vector, and `Nref`, the reference vector. If the dot product of `I` and `Nref` is smaller than zero the return value is `N`. Otherwise, `-N` is returned.
 *
*/
declare class VisualShaderNodeFaceForward extends VisualShaderNodeVectorBase  {

  
/**
 * Translates to `faceforward(N, I, Nref)` in the shader language. The function has three vector parameters: `N`, the vector to orient, `I`, the incident vector, and `Nref`, the reference vector. If the dot product of `I` and `Nref` is smaller than zero the return value is `N`. Otherwise, `-N` is returned.
 *
*/
  new(): VisualShaderNodeFaceForward; 
  static "new"(): VisualShaderNodeFaceForward 





  connect<T extends SignalsOf<VisualShaderNodeFaceForward>>(signal: T, method: SignalFunction<VisualShaderNodeFaceForward[T]>): number;






}

