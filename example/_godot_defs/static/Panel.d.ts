
/**
 * [Panel] is a GUI control that displays a [StyleBox]. See also [PanelContainer].
 *
*/
declare class Panel extends Control  {

  
/**
 * [Panel] is a GUI control that displays a [StyleBox]. See also [PanelContainer].
 *
*/
  new(): Panel; 
  static "new"(): Panel 





  connect<T extends SignalsOf<Panel>>(signal: T, method: SignalFunction<Panel[T]>): number;






}

