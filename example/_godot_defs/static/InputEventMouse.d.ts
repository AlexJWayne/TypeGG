
/**
 * Stores general information about mouse events.
 *
*/
declare class InputEventMouse extends InputEventWithModifiers  {

  
/**
 * Stores general information about mouse events.
 *
*/
  new(): InputEventMouse; 
  static "new"(): InputEventMouse 


/** The mouse button mask identifier, one of or a bitwise combination of the [enum MouseButton] button masks. */
button_mask: int;

/**
 * When received in [method Node._input] or [method Node._unhandled_input], returns the mouse's position in the root [Viewport] using the coordinate system of the root [Viewport].
 *
 * When received in [method Control._gui_input], returns the mouse's position in the [CanvasLayer] that the [Control] is in using the coordinate system of the [CanvasLayer].
 *
*/
global_position: Vector2;

/**
 * When received in [method Node._input] or [method Node._unhandled_input], returns the mouse's position in the [Viewport] this [Node] is in using the coordinate system of this [Viewport].
 *
 * When received in [method Control._gui_input], returns the mouse's position in the [Control] using the local coordinate system of the [Control].
 *
*/
position: Vector2;



  connect<T extends SignalsOf<InputEventMouse>>(signal: T, method: SignalFunction<InputEventMouse[T]>): number;






}

