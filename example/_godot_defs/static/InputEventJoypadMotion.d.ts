
/**
 * Stores information about joystick motions. One [InputEventJoypadMotion] represents one axis at a time. For gamepad buttons, see [InputEventJoypadButton].
 *
*/
declare class InputEventJoypadMotion extends InputEvent  {

  
/**
 * Stores information about joystick motions. One [InputEventJoypadMotion] represents one axis at a time. For gamepad buttons, see [InputEventJoypadButton].
 *
*/
  new(): InputEventJoypadMotion; 
  static "new"(): InputEventJoypadMotion 


/** Axis identifier. Use one of the [enum JoyAxis] axis constants. */
axis: int;

/** Current position of the joystick on the given axis. The value ranges from [code]-1.0[/code] to [code]1.0[/code]. A value of [code]0[/code] means the axis is in its resting position. */
axis_value: float;



  connect<T extends SignalsOf<InputEventJoypadMotion>>(signal: T, method: SignalFunction<InputEventJoypadMotion[T]>): number;






}

