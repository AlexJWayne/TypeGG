
/**
 * A rectangle box that displays only a colored border around its rectangle. It is used to visualize the extents of a [Control].
 *
*/
declare class ReferenceRect extends Control  {

  
/**
 * A rectangle box that displays only a colored border around its rectangle. It is used to visualize the extents of a [Control].
 *
*/
  new(): ReferenceRect; 
  static "new"(): ReferenceRect 


/** Sets the border color of the [ReferenceRect]. */
border_color: Color;

/** Sets the border width of the [ReferenceRect]. The border grows both inwards and outwards with respect to the rectangle box. */
border_width: float;

/** If [code]true[/code], the [ReferenceRect] will only be visible while in editor. Otherwise, [ReferenceRect] will be visible in the running project. */
editor_only: boolean;



  connect<T extends SignalsOf<ReferenceRect>>(signal: T, method: SignalFunction<ReferenceRect[T]>): number;






}

