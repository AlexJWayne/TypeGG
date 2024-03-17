
/**
 * Comes with a built-in editor for texture's curves.
 *
*/
declare class VisualShaderNodeCurveXYZTexture extends VisualShaderNodeResizableBase  {

  
/**
 * Comes with a built-in editor for texture's curves.
 *
*/
  new(): VisualShaderNodeCurveXYZTexture; 
  static "new"(): VisualShaderNodeCurveXYZTexture 


/** The source texture. */
texture: CurveXYZTexture;



  connect<T extends SignalsOf<VisualShaderNodeCurveXYZTexture>>(signal: T, method: SignalFunction<VisualShaderNodeCurveXYZTexture[T]>): number;






}

