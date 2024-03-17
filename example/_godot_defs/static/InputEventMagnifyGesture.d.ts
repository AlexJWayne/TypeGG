
/**
 * Stores the factor of a magnifying touch gesture. This is usually performed when the user pinches the touch screen and used for zooming in/out.
 *
 * **Note:** On Android, this requires the [member ProjectSettings.input_devices/pointing/android/enable_pan_and_scale_gestures] project setting to be enabled.
 *
*/
declare class InputEventMagnifyGesture extends InputEventGesture  {

  
/**
 * Stores the factor of a magnifying touch gesture. This is usually performed when the user pinches the touch screen and used for zooming in/out.
 *
 * **Note:** On Android, this requires the [member ProjectSettings.input_devices/pointing/android/enable_pan_and_scale_gestures] project setting to be enabled.
 *
*/
  new(): InputEventMagnifyGesture; 
  static "new"(): InputEventMagnifyGesture 


/** The amount (or delta) of the event. This value is closer to [code]1.0[/code] the slower the gesture is performed. */
factor: float;



  connect<T extends SignalsOf<InputEventMagnifyGesture>>(signal: T, method: SignalFunction<InputEventMagnifyGesture[T]>): number;






}

