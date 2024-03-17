
/**
 * Stores information about screen drag events. See [method Node._input].
 *
*/
declare class InputEventScreenDrag extends InputEventFromWindow  {

  
/**
 * Stores information about screen drag events. See [method Node._input].
 *
*/
  new(): InputEventScreenDrag; 
  static "new"(): InputEventScreenDrag 


/** The drag event index in the case of a multi-drag event. */
index: int;

/** Returns [code]true[/code] when using the eraser end of a stylus pen. */
pen_inverted: boolean;

/** The drag position. */
position: Vector2;

/** Represents the pressure the user puts on the pen. Ranges from [code]0.0[/code] to [code]1.0[/code]. */
pressure: float;

/** The drag position relative to the previous position (position at the last frame). */
relative: Vector2;

/** Represents the angles of tilt of the pen. Positive X-coordinate value indicates a tilt to the right. Positive Y-coordinate value indicates a tilt toward the user. Ranges from [code]-1.0[/code] to [code]1.0[/code] for both axes. */
tilt: Vector2;

/** The drag velocity. */
velocity: Vector2;



  connect<T extends SignalsOf<InputEventScreenDrag>>(signal: T, method: SignalFunction<InputEventScreenDrag[T]>): number;






}

