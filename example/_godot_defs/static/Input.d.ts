
/**
 * The [Input] singleton handles key presses, mouse buttons and movement, gamepads, and input actions. Actions and their events can be set in the **Input Map** tab in **Project > Project Settings**, or with the [InputMap] class.
 *
 * **Note:** [Input]'s methods reflect the global input state and are not affected by [method Control.accept_event] or [method Viewport.set_input_as_handled], as those methods only deal with the way input is propagated in the [SceneTree].
 *
*/
declare class InputClass extends Object  {

  
/**
 * The [Input] singleton handles key presses, mouse buttons and movement, gamepads, and input actions. Actions and their events can be set in the **Input Map** tab in **Project > Project Settings**, or with the [InputMap] class.
 *
 * **Note:** [Input]'s methods reflect the global input state and are not affected by [method Control.accept_event] or [method Viewport.set_input_as_handled], as those methods only deal with the way input is propagated in the [SceneTree].
 *
*/
  new(): InputClass; 
  static "new"(): InputClass 


/** Controls the mouse mode. See [enum MouseMode] for more information. */
mouse_mode: int;

/**
 * If `true`, similar input events sent by the operating system are accumulated. When input accumulation is enabled, all input events generated during a frame will be merged and emitted when the frame is done rendering. Therefore, this limits the number of input method calls per second to the rendering FPS.
 *
 * Input accumulation can be disabled to get slightly more precise/reactive input at the cost of increased CPU usage. In applications where drawing freehand lines is required, input accumulation should generally be disabled while the user is drawing the line to get results that closely follow the actual input.
 *
 * **Note:** Input accumulation is **enabled** by default.
 *
*/
use_accumulated_input: boolean;

/**
 * This will simulate pressing the specified action.
 *
 * The strength can be used for non-boolean actions, it's ranged between 0 and 1 representing the intensity of the given action.
 *
 * **Note:** This method will not cause any [method Node._input] calls. It is intended to be used with [method is_action_pressed] and [method is_action_just_pressed]. If you want to simulate `_input`, use [method parse_input_event] instead.
 *
*/
action_press(): void;

/** If the specified action is already pressed, this will release it. */
action_release(): void;

/** Adds a new mapping entry (in SDL2 format) to the mapping database. Optionally update already connected devices. */
add_joy_mapping(): void;

/**
 * Sends all input events which are in the current buffer to the game loop. These events may have been buffered as a result of accumulated input ([member use_accumulated_input]) or agile input flushing ([member ProjectSettings.input_devices/buffering/agile_event_flushing]).
 *
 * The engine will already do this itself at key execution points (at least once per frame). However, this can be useful in advanced cases where you want precise control over the timing of event handling.
 *
*/
flush_buffered_events(): void;

/**
 * Returns the acceleration in m/s² of the device's accelerometer sensor, if the device has one. Otherwise, the method returns [constant Vector3.ZERO].
 *
 * Note this method returns an empty [Vector3] when running from the editor even when your device has an accelerometer. You must export your project to a supported device to read values from the accelerometer.
 *
 * **Note:** This method only works on Android and iOS. On other platforms, it always returns [constant Vector3.ZERO].
 *
*/
get_accelerometer(): Vector3;

/**
 * Returns a value between 0 and 1 representing the raw intensity of the given action, ignoring the action's deadzone. In most cases, you should use [method get_action_strength] instead.
 *
 * If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.
 *
*/
get_action_raw_strength(): float;

/**
 * Returns a value between 0 and 1 representing the intensity of the given action. In a joypad, for example, the further away the axis (analog sticks or L2, R2 triggers) is from the dead zone, the closer the value will be to 1. If the action is mapped to a control that has no axis such as the keyboard, the value returned will be 0 or 1.
 *
 * If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.
 *
*/
get_action_strength(): float;

/**
 * Get axis input by specifying two actions, one negative and one positive.
 *
 * This is a shorthand for writing `Input.get_action_strength("positive_action") - Input.get_action_strength("negative_action")`.
 *
*/
get_axis(): float;

/** Returns an [Array] containing the device IDs of all currently connected joypads. */
get_connected_joypads(): int[];

/** Returns the currently assigned cursor shape (see [enum CursorShape]). */
get_current_cursor_shape(): int;

/**
 * Returns the gravity in m/s² of the device's accelerometer sensor, if the device has one. Otherwise, the method returns [constant Vector3.ZERO].
 *
 * **Note:** This method only works on Android and iOS. On other platforms, it always returns [constant Vector3.ZERO].
 *
*/
get_gravity(): Vector3;

/**
 * Returns the rotation rate in rad/s around a device's X, Y, and Z axes of the gyroscope sensor, if the device has one. Otherwise, the method returns [constant Vector3.ZERO].
 *
 * **Note:** This method only works on Android and iOS. On other platforms, it always returns [constant Vector3.ZERO].
 *
*/
get_gyroscope(): Vector3;

/** Returns the current value of the joypad axis at given index (see [enum JoyAxis]). */
get_joy_axis(): float;

/** Returns a SDL2-compatible device GUID on platforms that use gamepad remapping, e.g. [code]030000004c050000c405000000010000[/code]. Returns [code]"Default Gamepad"[/code] otherwise. Godot uses the [url=https://github.com/gabomdq/SDL_GameControllerDB]SDL2 game controller database[/url] to determine gamepad names and mappings based on this GUID. */
get_joy_guid(): string;

/**
 * Returns a dictionary with extra platform-specific information about the device, e.g. the raw gamepad name from the OS or the Steam Input index.
 *
 * On Windows the dictionary contains the following fields:
 *
 * `xinput_index`: The index of the controller in the XInput system.
 *
 * On Linux:
 *
 * `raw_name`: The name of the controller as it came from the OS, before getting renamed by the godot controller database.
 *
 * `vendor_id`: The USB vendor ID of the device.
 *
 * `product_id`: The USB product ID of the device.
 *
 * `steam_input_index`: The Steam Input gamepad index, if the device is not a Steam Input device this key won't be present.
 *
*/
get_joy_info(): Dictionary<any, any>;

/** Returns the name of the joypad at the specified device index, e.g. [code]PS4 Controller[/code]. Godot uses the [url=https://github.com/gabomdq/SDL_GameControllerDB]SDL2 game controller database[/url] to determine gamepad names. */
get_joy_name(): string;

/** Returns the duration of the current vibration effect in seconds. */
get_joy_vibration_duration(): float;

/** Returns the strength of the joypad vibration: x is the strength of the weak motor, and y is the strength of the strong motor. */
get_joy_vibration_strength(): Vector2;

/** Returns the last mouse velocity. To provide a precise and jitter-free velocity, mouse velocity is only calculated every 0.1s. Therefore, mouse velocity will lag mouse movements. */
get_last_mouse_velocity(): Vector2;

/**
 * Returns the magnetic field strength in micro-Tesla for all axes of the device's magnetometer sensor, if the device has one. Otherwise, the method returns [constant Vector3.ZERO].
 *
 * **Note:** This method only works on Android and iOS. On other platforms, it always returns [constant Vector3.ZERO].
 *
*/
get_magnetometer(): Vector3;

/** Returns mouse buttons as a bitmask. If multiple mouse buttons are pressed at the same time, the bits are added together. Equivalent to [method DisplayServer.mouse_get_button_state]. */
get_mouse_button_mask(): int;

/**
 * Gets an input vector by specifying four actions for the positive and negative X and Y axes.
 *
 * This method is useful when getting vector input, such as from a joystick, directional pad, arrows, or WASD. The vector has its length limited to 1 and has a circular deadzone, which is useful for using vector input as movement.
 *
 * By default, the deadzone is automatically calculated from the average of the action deadzones. However, you can override the deadzone to be whatever you want (on the range of 0 to 1).
 *
*/
get_vector(): Vector2;

/**
 * Returns `true` when the user has **started** pressing the action event in the current frame or physics tick. It will only return `true` on the frame or tick that the user pressed down the button.
 *
 * This is useful for code that needs to run only once when an action is pressed, instead of every frame while it's pressed.
 *
 * If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.
 *
 * **Note:** Returning `true` does not imply that the action is **still** pressed. An action can be pressed and released again rapidly, and `true` will still be returned so as not to miss input.
 *
 * **Note:** Due to keyboard ghosting, [method is_action_just_pressed] may return `false` even if one of the action's keys is pressed. See [url=$DOCS_URL/tutorials/inputs/input_examples.html#keyboard-events]Input examples[/url] in the documentation for more information.
 *
 * **Note:** During input handling (e.g. [method Node._input]), use [method InputEvent.is_action_pressed] instead to query the action state of the current event.
 *
*/
is_action_just_pressed(action: Action): boolean;
      

/**
 * Returns `true` when the user **stops** pressing the action event in the current frame or physics tick. It will only return `true` on the frame or tick that the user releases the button.
 *
 * **Note:** Returning `true` does not imply that the action is **still** not pressed. An action can be released and pressed again rapidly, and `true` will still be returned so as not to miss input.
 *
 * If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.
 *
 * **Note:** During input handling (e.g. [method Node._input]), use [method InputEvent.is_action_released] instead to query the action state of the current event.
 *
*/
is_action_just_released(action: Action): boolean;
      

/**
 * Returns `true` if you are pressing the action event.
 *
 * If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.
 *
 * **Note:** Due to keyboard ghosting, [method is_action_pressed] may return `false` even if one of the action's keys is pressed. See [url=$DOCS_URL/tutorials/inputs/input_examples.html#keyboard-events]Input examples[/url] in the documentation for more information.
 *
*/
is_action_pressed(action: Action): boolean;
      

/** Returns [code]true[/code] if any action, key, joypad button, or mouse button is being pressed. This will also return [code]true[/code] if any action is simulated via code by calling [method action_press]. */
is_anything_pressed(): boolean;

/** Returns [code]true[/code] if you are pressing the joypad button (see [enum JoyButton]). */
is_joy_button_pressed(): boolean;

/** Returns [code]true[/code] if the system knows the specified device. This means that it sets all button and axis indices. Unknown joypads are not expected to match these constants, but you can still retrieve events from them. */
is_joy_known(): boolean;

/** Returns [code]true[/code] if you are pressing the key with the [param keycode] printed on it. You can pass a [enum Key] constant or any Unicode character code. */
is_key_label_pressed(): boolean;

/**
 * Returns `true` if you are pressing the Latin key in the current keyboard layout. You can pass a [enum Key] constant.
 *
 * [method is_key_pressed] is only recommended over [method is_physical_key_pressed] in non-game applications. This ensures that shortcut keys behave as expected depending on the user's keyboard layout, as keyboard shortcuts are generally dependent on the keyboard layout in non-game applications. If in doubt, use [method is_physical_key_pressed].
 *
 * **Note:** Due to keyboard ghosting, [method is_key_pressed] may return `false` even if one of the action's keys is pressed. See [url=$DOCS_URL/tutorials/inputs/input_examples.html#keyboard-events]Input examples[/url] in the documentation for more information.
 *
*/
is_key_pressed(): boolean;

/** Returns [code]true[/code] if you are pressing the mouse button specified with [enum MouseButton]. */
is_mouse_button_pressed(): boolean;

/**
 * Returns `true` if you are pressing the key in the physical location on the 101/102-key US QWERTY keyboard. You can pass a [enum Key] constant.
 *
 * [method is_physical_key_pressed] is recommended over [method is_key_pressed] for in-game actions, as it will make [kbd]W[/kbd]/[kbd]A[/kbd]/[kbd]S[/kbd]/[kbd]D[/kbd] layouts work regardless of the user's keyboard layout. [method is_physical_key_pressed] will also ensure that the top row number keys work on any keyboard layout. If in doubt, use [method is_physical_key_pressed].
 *
 * **Note:** Due to keyboard ghosting, [method is_physical_key_pressed] may return `false` even if one of the action's keys is pressed. See [url=$DOCS_URL/tutorials/inputs/input_examples.html#keyboard-events]Input examples[/url] in the documentation for more information.
 *
*/
is_physical_key_pressed(): boolean;

/**
 * Feeds an [InputEvent] to the game. Can be used to artificially trigger input events from code. Also generates [method Node._input] calls.
 *
 * **Example:**
 *
 * @example 
 * 
 * 
 * var cancel_event = InputEventAction.new()
 * cancel_event.action = "ui_cancel"
 * cancel_event.pressed = true
 * Input.parse_input_event(cancel_event)
 * 
 * 
 * var cancelEvent = new InputEventAction();
 * cancelEvent.Action = "ui_cancel";
 * cancelEvent.Pressed = true;
 * Input.ParseInputEvent(cancelEvent);
 * 
 * @summary 
 * 
 *
*/
parse_input_event(): void;

/** Removes all mappings from the internal database that match the given GUID. */
remove_joy_mapping(): void;

/**
 * Sets the acceleration value of the accelerometer sensor. Can be used for debugging on devices without a hardware sensor, for example in an editor on a PC.
 *
 * **Note:** This value can be immediately overwritten by the hardware sensor value on Android and iOS.
 *
*/
set_accelerometer(): void;

/**
 * Sets a custom mouse cursor image, which is only visible inside the game window. The hotspot can also be specified. Passing `null` to the image parameter resets to the system cursor. See [enum CursorShape] for the list of shapes.
 *
 * [param image]'s size must be lower than or equal to 256×256. To avoid rendering issues, sizes lower than or equal to 128×128 are recommended.
 *
 * [param hotspot] must be within [param image]'s size.
 *
 * **Note:** [AnimatedTexture]s aren't supported as custom mouse cursors. If using an [AnimatedTexture], only the first frame will be displayed.
 *
 * **Note:** The **Lossless**, **Lossy** or **Uncompressed** compression modes are recommended. The **Video RAM** compression mode can be used, but it will be decompressed on the CPU, which means loading times are slowed down and no memory is saved compared to lossless modes.
 *
 * **Note:** On the web platform, the maximum allowed cursor image size is 128×128. Cursor images larger than 32×32 will also only be displayed if the mouse cursor image is entirely located within the page for [url=https://chromestatus.com/feature/5825971391299584]security reasons[/url].
 *
*/
set_custom_mouse_cursor(): void;

/**
 * Sets the default cursor shape to be used in the viewport instead of [constant CURSOR_ARROW].
 *
 * **Note:** If you want to change the default cursor shape for [Control]'s nodes, use [member Control.mouse_default_cursor_shape] instead.
 *
 * **Note:** This method generates an [InputEventMouseMotion] to update cursor immediately.
 *
*/
set_default_cursor_shape(): void;

/**
 * Sets the gravity value of the accelerometer sensor. Can be used for debugging on devices without a hardware sensor, for example in an editor on a PC.
 *
 * **Note:** This value can be immediately overwritten by the hardware sensor value on Android and iOS.
 *
*/
set_gravity(): void;

/**
 * Sets the value of the rotation rate of the gyroscope sensor. Can be used for debugging on devices without a hardware sensor, for example in an editor on a PC.
 *
 * **Note:** This value can be immediately overwritten by the hardware sensor value on Android and iOS.
 *
*/
set_gyroscope(): void;

/**
 * Sets the value of the magnetic field of the magnetometer sensor. Can be used for debugging on devices without a hardware sensor, for example in an editor on a PC.
 *
 * **Note:** This value can be immediately overwritten by the hardware sensor value on Android and iOS.
 *
*/
set_magnetometer(): void;

/**
 * Queries whether an input device should be ignored or not. Devices can be ignored by setting the environment variable `SDL_GAMECONTROLLER_IGNORE_DEVICES`. Read the [url=https://wiki.libsdl.org/SDL2]SDL documentation[/url] for more information.
 *
 * **Note:** Some 3rd party tools can contribute to the list of ignored devices. For example, **SteamInput** creates virtual devices from physical devices for remapping purposes. To avoid handling the same input device twice, the original device is added to the ignore list.
 *
*/
should_ignore_device(): boolean;

/**
 * Starts to vibrate the joypad. Joypads usually come with two rumble motors, a strong and a weak one. [param weak_magnitude] is the strength of the weak motor (between 0 and 1) and [param strong_magnitude] is the strength of the strong motor (between 0 and 1). [param duration] is the duration of the effect in seconds (a duration of 0 will try to play the vibration indefinitely). The vibration can be stopped early by calling [method stop_joy_vibration].
 *
 * **Note:** Not every hardware is compatible with long effect durations; it is recommended to restart an effect if it has to be played for more than a few seconds.
 *
*/
start_joy_vibration(): void;

/** Stops the vibration of the joypad started with [method start_joy_vibration]. */
stop_joy_vibration(): void;

/**
 * Vibrate the handheld device for the specified duration in milliseconds.
 *
 * **Note:** This method is implemented on Android, iOS, and Web. It has no effect on other platforms.
 *
 * **Note:** For Android, [method vibrate_handheld] requires enabling the `VIBRATE` permission in the export preset. Otherwise, [method vibrate_handheld] will have no effect.
 *
 * **Note:** For iOS, specifying the duration is only supported in iOS 13 and later.
 *
 * **Note:** Some web browsers such as Safari and Firefox for Android do not support [method vibrate_handheld].
 *
*/
vibrate_handheld(): void;

/**
 * Sets the mouse position to the specified vector, provided in pixels and relative to an origin at the upper left corner of the currently focused Window Manager game window.
 *
 * Mouse position is clipped to the limits of the screen resolution, or to the limits of the game window if [enum MouseMode] is set to [constant MOUSE_MODE_CONFINED] or [constant MOUSE_MODE_CONFINED_HIDDEN].
 *
 * **Note:** [method warp_mouse] is only supported on Windows, macOS and Linux. It has no effect on Android, iOS and Web.
 *
*/
warp_mouse(): void;

  connect<T extends SignalsOf<InputClass>>(signal: T, method: SignalFunction<InputClass[T]>): number;



/**
 * Makes the mouse cursor visible if it is hidden.
 *
*/
static MOUSE_MODE_VISIBLE: any;

/**
 * Makes the mouse cursor hidden if it is visible.
 *
*/
static MOUSE_MODE_HIDDEN: any;

/**
 * Captures the mouse. The mouse will be hidden and its position locked at the center of the window manager's window.
 *
 * **Note:** If you want to process the mouse's movement in this mode, you need to use [member InputEventMouseMotion.relative].
 *
*/
static MOUSE_MODE_CAPTURED: any;

/**
 * Confines the mouse cursor to the game window, and make it visible.
 *
*/
static MOUSE_MODE_CONFINED: any;

/**
 * Confines the mouse cursor to the game window, and make it hidden.
 *
*/
static MOUSE_MODE_CONFINED_HIDDEN: any;

/**
 * Arrow cursor. Standard, default pointing cursor.
 *
*/
static CURSOR_ARROW: any;

/**
 * I-beam cursor. Usually used to show where the text cursor will appear when the mouse is clicked.
 *
*/
static CURSOR_IBEAM: any;

/**
 * Pointing hand cursor. Usually used to indicate the pointer is over a link or other interactable item.
 *
*/
static CURSOR_POINTING_HAND: any;

/**
 * Cross cursor. Typically appears over regions in which a drawing operation can be performed or for selections.
 *
*/
static CURSOR_CROSS: any;

/**
 * Wait cursor. Indicates that the application is busy performing an operation. This cursor shape denotes that the application isn't usable during the operation (e.g. something is blocking its main thread).
 *
*/
static CURSOR_WAIT: any;

/**
 * Busy cursor. Indicates that the application is busy performing an operation. This cursor shape denotes that the application is still usable during the operation.
 *
*/
static CURSOR_BUSY: any;

/**
 * Drag cursor. Usually displayed when dragging something.
 *
 * **Note:** Windows lacks a dragging cursor, so [constant CURSOR_DRAG] is the same as [constant CURSOR_MOVE] for this platform.
 *
*/
static CURSOR_DRAG: any;

/**
 * Can drop cursor. Usually displayed when dragging something to indicate that it can be dropped at the current position.
 *
*/
static CURSOR_CAN_DROP: any;

/**
 * Forbidden cursor. Indicates that the current action is forbidden (for example, when dragging something) or that the control at a position is disabled.
 *
*/
static CURSOR_FORBIDDEN: any;

/**
 * Vertical resize mouse cursor. A double-headed vertical arrow. It tells the user they can resize the window or the panel vertically.
 *
*/
static CURSOR_VSIZE: any;

/**
 * Horizontal resize mouse cursor. A double-headed horizontal arrow. It tells the user they can resize the window or the panel horizontally.
 *
*/
static CURSOR_HSIZE: any;

/**
 * Window resize mouse cursor. The cursor is a double-headed arrow that goes from the bottom left to the top right. It tells the user they can resize the window or the panel both horizontally and vertically.
 *
*/
static CURSOR_BDIAGSIZE: any;

/**
 * Window resize mouse cursor. The cursor is a double-headed arrow that goes from the top left to the bottom right, the opposite of [constant CURSOR_BDIAGSIZE]. It tells the user they can resize the window or the panel both horizontally and vertically.
 *
*/
static CURSOR_FDIAGSIZE: any;

/**
 * Move cursor. Indicates that something can be moved.
 *
*/
static CURSOR_MOVE: any;

/**
 * Vertical split mouse cursor. On Windows, it's the same as [constant CURSOR_VSIZE].
 *
*/
static CURSOR_VSPLIT: any;

/**
 * Horizontal split mouse cursor. On Windows, it's the same as [constant CURSOR_HSIZE].
 *
*/
static CURSOR_HSPLIT: any;

/**
 * Help cursor. Usually a question mark.
 *
*/
static CURSOR_HELP: any;


/**
 * Emitted when a joypad device has been connected or disconnected.
 *
*/
$joy_connection_changed: Signal<() => void>

}

