
/**
 * [CanvasModulate] applies a color tint to all nodes on a canvas. Only one can be used to tint a canvas, but [CanvasLayer]s can be used to render things independently.
 *
*/
declare class CanvasModulate extends Node2D  {

  
/**
 * [CanvasModulate] applies a color tint to all nodes on a canvas. Only one can be used to tint a canvas, but [CanvasLayer]s can be used to render things independently.
 *
*/
  new(): CanvasModulate; 
  static "new"(): CanvasModulate 


/** The tint color to apply. */
color: Color;



  connect<T extends SignalsOf<CanvasModulate>>(signal: T, method: SignalFunction<CanvasModulate[T]>): number;






}

