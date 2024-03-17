
/**
 * A vertical scrollbar, typically used to navigate through content that extends beyond the visible height of a control. It is a [Range]-based control and goes from top (min) to bottom (max). Note that this direction is the opposite of [VSlider]'s.
 *
*/
declare class VScrollBar extends ScrollBar  {

  
/**
 * A vertical scrollbar, typically used to navigate through content that extends beyond the visible height of a control. It is a [Range]-based control and goes from top (min) to bottom (max). Note that this direction is the opposite of [VSlider]'s.
 *
*/
  new(): VScrollBar; 
  static "new"(): VScrollBar 






  connect<T extends SignalsOf<VScrollBar>>(signal: T, method: SignalFunction<VScrollBar[T]>): number;






}

