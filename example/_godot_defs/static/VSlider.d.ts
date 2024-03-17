
/**
 * A vertical slider, used to adjust a value by moving a grabber along a vertical axis. It is a [Range]-based control and goes from bottom (min) to top (max). Note that this direction is the opposite of [VScrollBar]'s.
 *
*/
declare class VSlider extends Slider  {

  
/**
 * A vertical slider, used to adjust a value by moving a grabber along a vertical axis. It is a [Range]-based control and goes from bottom (min) to top (max). Note that this direction is the opposite of [VScrollBar]'s.
 *
*/
  new(): VSlider; 
  static "new"(): VSlider 






  connect<T extends SignalsOf<VSlider>>(signal: T, method: SignalFunction<VSlider[T]>): number;






}

