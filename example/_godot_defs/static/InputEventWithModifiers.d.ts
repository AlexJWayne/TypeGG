
/**
 * Stores information about mouse, keyboard, and touch gesture input events. This includes information about which modifier keys are pressed, such as [kbd]Shift[/kbd] or [kbd]Alt[/kbd]. See [method Node._input].
 *
*/
declare class InputEventWithModifiers extends InputEventFromWindow  {

  
/**
 * Stores information about mouse, keyboard, and touch gesture input events. This includes information about which modifier keys are pressed, such as [kbd]Shift[/kbd] or [kbd]Alt[/kbd]. See [method Node._input].
 *
*/
  new(): InputEventWithModifiers; 
  static "new"(): InputEventWithModifiers 


/** State of the [kbd]Alt[/kbd] modifier. */
alt_pressed: boolean;

/** Automatically use [kbd]Meta[/kbd] ([kbd]Cmd[/kbd]) on macOS and [kbd]Ctrl[/kbd] on other platforms. If [code]true[/code], [member ctrl_pressed] and [member meta_pressed] cannot be set. */
command_or_control_autoremap: boolean;

/** State of the [kbd]Ctrl[/kbd] modifier. */
ctrl_pressed: boolean;

/** State of the [kbd]Meta[/kbd] modifier. On Windows and Linux, this represents the Windows key (sometimes called "meta" or "super" on Linux). On macOS, this represents the Command key. */
meta_pressed: boolean;

/** State of the [kbd]Shift[/kbd] modifier. */
shift_pressed: boolean;

/** Returns the keycode combination of modifier keys. */
get_modifiers_mask(): int;

/**
 * On macOS, returns `true` if [kbd]Meta[/kbd] ([kbd]Cmd[/kbd]) is pressed.
 *
 * On other platforms, returns `true` if [kbd]Ctrl[/kbd] is pressed.
 *
*/
is_command_or_control_pressed(): boolean;

  connect<T extends SignalsOf<InputEventWithModifiers>>(signal: T, method: SignalFunction<InputEventWithModifiers[T]>): number;






}

