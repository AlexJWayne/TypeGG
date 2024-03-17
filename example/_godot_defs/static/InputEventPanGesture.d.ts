
/**
 * Stores information about pan gestures. A pan gesture is performed when the user swipes the touch screen with two fingers. It's typically used for panning/scrolling.
 *
 * **Note:** On Android, this requires the [member ProjectSettings.input_devices/pointing/android/enable_pan_and_scale_gestures] project setting to be enabled.
 *
*/
declare class InputEventPanGesture extends InputEventGesture  {

  
/**
 * Stores information about pan gestures. A pan gesture is performed when the user swipes the touch screen with two fingers. It's typically used for panning/scrolling.
 *
 * **Note:** On Android, this requires the [member ProjectSettings.input_devices/pointing/android/enable_pan_and_scale_gestures] project setting to be enabled.
 *
*/
  new(): InputEventPanGesture; 
  static "new"(): InputEventPanGesture 


/** Panning amount since last pan event. */
delta: Vector2;



  connect<T extends SignalsOf<InputEventPanGesture>>(signal: T, method: SignalFunction<InputEventPanGesture[T]>): number;






}

