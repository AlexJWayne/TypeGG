
/**
 * An input event for keys on a keyboard. Supports key presses, key releases and [member echo] events. It can also be received in [method Node._unhandled_key_input].
 *
 * **Note:** Events received from the keyboard usually have all properties set. Event mappings should have only one of the [member keycode], [member physical_keycode] or [member unicode] set.
 *
 * When events are compared, properties are checked in the following priority - [member keycode], [member physical_keycode] and [member unicode]. Events with the first matching value will be considered equal.
 *
*/
declare class InputEventKey extends InputEventWithModifiers  {

  
/**
 * An input event for keys on a keyboard. Supports key presses, key releases and [member echo] events. It can also be received in [method Node._unhandled_key_input].
 *
 * **Note:** Events received from the keyboard usually have all properties set. Event mappings should have only one of the [member keycode], [member physical_keycode] or [member unicode] set.
 *
 * When events are compared, properties are checked in the following priority - [member keycode], [member physical_keycode] and [member unicode]. Events with the first matching value will be considered equal.
 *
*/
  new(): InputEventKey; 
  static "new"(): InputEventKey 


/** If [code]true[/code], the key was already pressed before this event. It means the user is holding the key down. */
echo: boolean;

/**
 * Represents the localized label printed on the key in the current keyboard layout, which corresponds to one of the [enum Key] constants or any valid Unicode character.
 *
 * For keyboard layouts with a single label on the key, it is equivalent to [member keycode].
 *
 * To get a human-readable representation of the [InputEventKey], use `OS.get_keycode_string(event.key_label)` where `event` is the [InputEventKey].
 *
 * @example 
 * 
 *     +-----+ +-----+
 *     | Q   | | Q   | - "Q" - keycode
 *     |   Й | |  ض | - "Й" and "ض" - key_label
 *     +-----+ +-----+
 * @summary 
 * 
 *
*/
key_label: int;

/**
 * Latin label printed on the key in the current keyboard layout, which corresponds to one of the [enum Key] constants.
 *
 * To get a human-readable representation of the [InputEventKey], use `OS.get_keycode_string(event.keycode)` where `event` is the [InputEventKey].
 *
 * @example 
 * 
 *     +-----+ +-----+
 *     | Q   | | Q   | - "Q" - keycode
 *     |   Й | |  ض | - "Й" and "ض" - key_label
 *     +-----+ +-----+
 * @summary 
 * 
 *
*/
keycode: int;

/**
 * Represents the physical location of a key on the 101/102-key US QWERTY keyboard, which corresponds to one of the [enum Key] constants.
 *
 * To get a human-readable representation of the [InputEventKey], use [method OS.get_keycode_string] in combination with [method DisplayServer.keyboard_get_keycode_from_physical]:
 *
 * @example 
 * 
 * 
 * func _input(event):
 *     if event is InputEventKey:
 *         var keycode = DisplayServer.keyboard_get_keycode_from_physical(event.physical_keycode)
 *         print(OS.get_keycode_string(keycode))
 * 
 * 
 * public override void _Input(InputEvent @event)
 * {
 *     if (@event is InputEventKey inputEventKey)
 *     {
 *         var keycode = DisplayServer.KeyboardGetKeycodeFromPhysical(inputEventKey.PhysicalKeycode);
 *         GD.Print(OS.GetKeycodeString(keycode));
 *     }
 * }
 * 
 * @summary 
 * 
 *
*/
physical_keycode: int;

/** If [code]true[/code], the key's state is pressed. If [code]false[/code], the key's state is released. */
pressed: boolean;

/** The key Unicode character code (when relevant), shifted by modifier keys. Unicode character codes for composite characters and complex scripts may not be available unless IME input mode is active. See [method Window.set_ime_active] for more information. */
unicode: int;

/** Returns a [String] representation of the event's [member key_label] and modifiers. */
as_text_key_label(): string;

/** Returns a [String] representation of the event's [member keycode] and modifiers. */
as_text_keycode(): string;

/** Returns a [String] representation of the event's [member physical_keycode] and modifiers. */
as_text_physical_keycode(): string;

/**
 * Returns the localized key label combined with modifier keys such as [kbd]Shift[/kbd] or [kbd]Alt[/kbd]. See also [InputEventWithModifiers].
 *
 * To get a human-readable representation of the [InputEventKey] with modifiers, use `OS.get_keycode_string(event.get_key_label_with_modifiers())` where `event` is the [InputEventKey].
 *
*/
get_key_label_with_modifiers(): int;

/**
 * Returns the Latin keycode combined with modifier keys such as [kbd]Shift[/kbd] or [kbd]Alt[/kbd]. See also [InputEventWithModifiers].
 *
 * To get a human-readable representation of the [InputEventKey] with modifiers, use `OS.get_keycode_string(event.get_keycode_with_modifiers())` where `event` is the [InputEventKey].
 *
*/
get_keycode_with_modifiers(): int;

/**
 * Returns the physical keycode combined with modifier keys such as [kbd]Shift[/kbd] or [kbd]Alt[/kbd]. See also [InputEventWithModifiers].
 *
 * To get a human-readable representation of the [InputEventKey] with modifiers, use `OS.get_keycode_string(event.get_physical_keycode_with_modifiers())` where `event` is the [InputEventKey].
 *
*/
get_physical_keycode_with_modifiers(): int;

  connect<T extends SignalsOf<InputEventKey>>(signal: T, method: SignalFunction<InputEventKey[T]>): number;






}

