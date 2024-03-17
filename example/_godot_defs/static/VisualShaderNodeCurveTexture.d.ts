
/**
 * Comes with a built-in editor for texture's curves.
 *
*/
declare class VisualShaderNodeCurveTexture extends VisualShaderNodeResizableBase  {

  
/**
 * Comes with a built-in editor for texture's curves.
 *
*/
  new(): VisualShaderNodeCurveTexture; 
  static "new"(): VisualShaderNodeCurveTexture 


/** The source texture. */
texture: CurveTexture;



  connect<T extends SignalsOf<VisualShaderNodeCurveTexture>>(signal: T, method: SignalFunction<VisualShaderNodeCurveTexture[T]>): number;






}

