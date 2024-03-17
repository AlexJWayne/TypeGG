
/**
 * Displays a rectangle filled with a solid [member color]. If you need to display the border alone, consider using a [Panel] instead.
 *
*/
declare class ColorRect extends Control  {

  
/**
 * Displays a rectangle filled with a solid [member color]. If you need to display the border alone, consider using a [Panel] instead.
 *
*/
  new(): ColorRect; 
  static "new"(): ColorRect 


/** The fill color of the rectangle. */
color: Color;



  connect<T extends SignalsOf<ColorRect>>(signal: T, method: SignalFunction<ColorRect[T]>): number;






}

