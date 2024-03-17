
/**
 * Resizable nodes have a handle that allows the user to adjust their size as needed.
 *
*/
declare class VisualShaderNodeResizableBase extends VisualShaderNode  {

  
/**
 * Resizable nodes have a handle that allows the user to adjust their size as needed.
 *
*/
  new(): VisualShaderNodeResizableBase; 
  static "new"(): VisualShaderNodeResizableBase 


/** The size of the node in the visual shader graph. */
size: Vector2;



  connect<T extends SignalsOf<VisualShaderNodeResizableBase>>(signal: T, method: SignalFunction<VisualShaderNodeResizableBase[T]>): number;






}

