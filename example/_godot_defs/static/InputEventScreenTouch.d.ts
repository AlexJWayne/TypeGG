
/**
 * Stores information about multi-touch press/release input events. Supports touch press, touch release and [member index] for multi-touch count and order.
 *
*/
declare class InputEventScreenTouch extends InputEventFromWindow  {

  
/**
 * Stores information about multi-touch press/release input events. Supports touch press, touch release and [member index] for multi-touch count and order.
 *
*/
  new(): InputEventScreenTouch; 
  static "new"(): InputEventScreenTouch 


/** If [code]true[/code], the touch event has been canceled. */
canceled: boolean;

/** If [code]true[/code], the touch's state is a double tap. */
double_tap: boolean;

/** The touch index in the case of a multi-touch event. One index = one finger. */
index: int;

/** The touch position, in screen (global) coordinates. */
position: Vector2;

/** If [code]true[/code], the touch's state is pressed. If [code]false[/code], the touch's state is released. */
pressed: boolean;



  connect<T extends SignalsOf<InputEventScreenTouch>>(signal: T, method: SignalFunction<InputEventScreenTouch[T]>): number;






}

