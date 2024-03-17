
/**
 * Stores information about a mouse or a pen motion. This includes relative position, absolute position, and velocity. See [method Node._input].
 *
 * **Note:** By default, this event is only emitted once per frame rendered at most. If you need more precise input reporting, set [member Input.use_accumulated_input] to `false` to make events emitted as often as possible. If you use InputEventMouseMotion to draw lines, consider implementing [url=https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm]Bresenham's line algorithm[/url] as well to avoid visible gaps in lines if the user is moving the mouse quickly.
 *
*/
declare class InputEventMouseMotion extends InputEventMouse  {

  
/**
 * Stores information about a mouse or a pen motion. This includes relative position, absolute position, and velocity. See [method Node._input].
 *
 * **Note:** By default, this event is only emitted once per frame rendered at most. If you need more precise input reporting, set [member Input.use_accumulated_input] to `false` to make events emitted as often as possible. If you use InputEventMouseMotion to draw lines, consider implementing [url=https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm]Bresenham's line algorithm[/url] as well to avoid visible gaps in lines if the user is moving the mouse quickly.
 *
*/
  new(): InputEventMouseMotion; 
  static "new"(): InputEventMouseMotion 


/**
 * Returns `true` when using the eraser end of a stylus pen.
 *
 * **Note:** This property is implemented on Linux, macOS and Windows.
 *
*/
pen_inverted: boolean;

/** Represents the pressure the user puts on the pen. Ranges from [code]0.0[/code] to [code]1.0[/code]. */
pressure: float;

/**
 * The mouse position relative to the previous position (position at the last frame).
 *
 * **Note:** Since [InputEventMouseMotion] is only emitted when the mouse moves, the last event won't have a relative position of `Vector2(0, 0)` when the user stops moving the mouse.
 *
*/
relative: Vector2;

/** Represents the angles of tilt of the pen. Positive X-coordinate value indicates a tilt to the right. Positive Y-coordinate value indicates a tilt toward the user. Ranges from [code]-1.0[/code] to [code]1.0[/code] for both axes. */
tilt: Vector2;

/** The mouse velocity in pixels per second. */
velocity: Vector2;



  connect<T extends SignalsOf<InputEventMouseMotion>>(signal: T, method: SignalFunction<InputEventMouseMotion[T]>): number;






}

