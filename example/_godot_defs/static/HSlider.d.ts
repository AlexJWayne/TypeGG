
/**
 * A horizontal slider, used to adjust a value by moving a grabber along a horizontal axis. It is a [Range]-based control and goes from left (min) to right (max).
 *
*/
declare class HSlider extends Slider  {

  
/**
 * A horizontal slider, used to adjust a value by moving a grabber along a horizontal axis. It is a [Range]-based control and goes from left (min) to right (max).
 *
*/
  new(): HSlider; 
  static "new"(): HSlider 





  connect<T extends SignalsOf<HSlider>>(signal: T, method: SignalFunction<HSlider[T]>): number;






}

