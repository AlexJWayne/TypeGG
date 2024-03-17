
/**
 * Abstract base class of all types of input events. See [method Node._input].
 *
*/
declare class InputEvent extends Resource  {

  
/**
 * Abstract base class of all types of input events. See [method Node._input].
 *
*/
  new(): InputEvent; 
  static "new"(): InputEvent 


/**
 * The event's device ID.
 *
 * **Note:** This device ID will always be `-1` for emulated mouse input from a touchscreen. This can be used to distinguish emulated mouse input from physical mouse input.
 *
*/
device: int;

/**
 * Returns `true` if the given input event and this input event can be added together (only for events of type [InputEventMouseMotion]).
 *
 * The given input event's position, global position and speed will be copied. The resulting `relative` is a sum of both events. Both events' modifiers have to be identical.
 *
*/
accumulate(): boolean;

/** Returns a [String] representation of the event. */
as_text(): string;

/**
 * Returns a value between 0.0 and 1.0 depending on the given actions' state. Useful for getting the value of events of type [InputEventJoypadMotion].
 *
 * If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.
 *
*/
get_action_strength(): float;

/**
 * Returns `true` if this input event matches a pre-defined action of any type.
 *
 * If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.
 *
*/
is_action(): boolean;

/**
 * Returns `true` if the given action is being pressed (and is not an echo event for [InputEventKey] events, unless [param allow_echo] is `true`). Not relevant for events of type [InputEventMouseMotion] or [InputEventScreenDrag].
 *
 * If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.
 *
 * **Note:** Due to keyboard ghosting, [method is_action_pressed] may return `false` even if one of the action's keys is pressed. See [url=$DOCS_URL/tutorials/inputs/input_examples.html#keyboard-events]Input examples[/url] in the documentation for more information.
 *
*/
is_action_pressed(action: Action): boolean;
      

/**
 * Returns `true` if the given action is released (i.e. not pressed). Not relevant for events of type [InputEventMouseMotion] or [InputEventScreenDrag].
 *
 * If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.
 *
*/
is_action_released(): boolean;

/** Returns [code]true[/code] if this input event's type is one that can be assigned to an input action. */
is_action_type(): boolean;

/** Returns [code]true[/code] if this input event has been canceled. */
is_canceled(): boolean;

/** Returns [code]true[/code] if this input event is an echo event (only for events of type [InputEventKey]). Any other event type returns [code]false[/code]. */
is_echo(): boolean;

/**
 * Returns `true` if the specified [param event] matches this event. Only valid for action events i.e key ([InputEventKey]), button ([InputEventMouseButton] or [InputEventJoypadButton]), axis [InputEventJoypadMotion] or action ([InputEventAction]) events.
 *
 * If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.
 *
*/
is_match(): boolean;

/**
 * Returns `true` if this input event is pressed. Not relevant for events of type [InputEventMouseMotion] or [InputEventScreenDrag].
 *
 * **Note:** Due to keyboard ghosting, [method is_pressed] may return `false` even if one of the action's keys is pressed. See [url=$DOCS_URL/tutorials/inputs/input_examples.html#keyboard-events]Input examples[/url] in the documentation for more information.
 *
*/
is_pressed(): boolean;

/** Returns [code]true[/code] if this input event is released. Not relevant for events of type [InputEventMouseMotion] or [InputEventScreenDrag]. */
is_released(): boolean;

/** Returns a copy of the given input event which has been offset by [param local_ofs] and transformed by [param xform]. Relevant for events of type [InputEventMouseButton], [InputEventMouseMotion], [InputEventScreenTouch], [InputEventScreenDrag], [InputEventMagnifyGesture] and [InputEventPanGesture]. */
xformed_by(): InputEvent;

  connect<T extends SignalsOf<InputEvent>>(signal: T, method: SignalFunction<InputEvent[T]>): number;






}

