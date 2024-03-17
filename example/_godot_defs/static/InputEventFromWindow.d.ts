
/**
 * InputEventFromWindow represents events specifically received by windows. This includes mouse events, keyboard events in focused windows or touch screen actions.
 *
*/
declare class InputEventFromWindow extends InputEvent  {

  
/**
 * InputEventFromWindow represents events specifically received by windows. This includes mouse events, keyboard events in focused windows or touch screen actions.
 *
*/
  new(): InputEventFromWindow; 
  static "new"(): InputEventFromWindow 


/** The ID of a [Window] that received this event. */
window_id: int;



  connect<T extends SignalsOf<InputEventFromWindow>>(signal: T, method: SignalFunction<InputEventFromWindow[T]>): number;






}

