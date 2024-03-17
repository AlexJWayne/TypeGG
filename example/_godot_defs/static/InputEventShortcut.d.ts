
/**
 * InputEventShortcut is a special event that can be received in [method Node._unhandled_key_input]. It is typically sent by the editor's Command Palette to trigger actions, but can also be sent manually using [method Viewport.push_input].
 *
*/
declare class InputEventShortcut extends InputEvent  {

  
/**
 * InputEventShortcut is a special event that can be received in [method Node._unhandled_key_input]. It is typically sent by the editor's Command Palette to trigger actions, but can also be sent manually using [method Viewport.push_input].
 *
*/
  new(): InputEventShortcut; 
  static "new"(): InputEventShortcut 


/** The [Shortcut] represented by this event. Its [method Shortcut.matches_event] method will always return [code]true[/code] for this event. */
shortcut: Shortcut;



  connect<T extends SignalsOf<InputEventShortcut>>(signal: T, method: SignalFunction<InputEventShortcut[T]>): number;






}

