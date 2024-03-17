
/**
 * Shortcuts are commonly used for interacting with a [Control] element from an [InputEvent] (also known as hotkeys).
 *
 * One shortcut can contain multiple [InputEvent]'s, allowing the possibility of triggering one action with multiple different inputs.
 *
*/
declare class Shortcut extends Resource  {

  
/**
 * Shortcuts are commonly used for interacting with a [Control] element from an [InputEvent] (also known as hotkeys).
 *
 * One shortcut can contain multiple [InputEvent]'s, allowing the possibility of triggering one action with multiple different inputs.
 *
*/
  new(): Shortcut; 
  static "new"(): Shortcut 


/**
 * The shortcut's [InputEvent] array.
 *
 * Generally the [InputEvent] used is an [InputEventKey], though it can be any [InputEvent], including an [InputEventAction].
 *
*/
events: any[];

/** Returns the shortcut's first valid [InputEvent] as a [String]. */
get_as_text(): string;

/** Returns whether [member events] contains an [InputEvent] which is valid. */
has_valid_event(): boolean;

/** Returns whether any [InputEvent] in [member events] equals [param event]. */
matches_event(): boolean;

  connect<T extends SignalsOf<Shortcut>>(signal: T, method: SignalFunction<Shortcut[T]>): number;






}

