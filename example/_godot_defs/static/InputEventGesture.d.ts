
/**
 * InputEventGestures are sent when a user performs a supported gesture on a touch screen. Gestures can't be emulated using mouse, because they typically require multi-touch.
 *
*/
declare class InputEventGesture extends InputEventWithModifiers  {

  
/**
 * InputEventGestures are sent when a user performs a supported gesture on a touch screen. Gestures can't be emulated using mouse, because they typically require multi-touch.
 *
*/
  new(): InputEventGesture; 
  static "new"(): InputEventGesture 


/** The local gesture position relative to the [Viewport]. If used in [method Control._gui_input], the position is relative to the current [Control] that received this gesture. */
position: Vector2;



  connect<T extends SignalsOf<InputEventGesture>>(signal: T, method: SignalFunction<InputEventGesture[T]>): number;






}

