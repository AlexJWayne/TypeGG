
/**
 * A group of [BaseButton]-derived buttons. The buttons in a [ButtonGroup] are treated like radio buttons: No more than one button can be pressed at a time. Some types of buttons (such as [CheckBox]) may have a special appearance in this state.
 *
 * Every member of a [ButtonGroup] should have [member BaseButton.toggle_mode] set to `true`.
 *
*/
declare class ButtonGroup extends Resource  {

  
/**
 * A group of [BaseButton]-derived buttons. The buttons in a [ButtonGroup] are treated like radio buttons: No more than one button can be pressed at a time. Some types of buttons (such as [CheckBox]) may have a special appearance in this state.
 *
 * Every member of a [ButtonGroup] should have [member BaseButton.toggle_mode] set to `true`.
 *
*/
  new(): ButtonGroup; 
  static "new"(): ButtonGroup 


/** If [code]true[/code], it is possible to unpress all buttons in this [ButtonGroup]. */
allow_unpress: boolean;


/** Returns an [Array] of [Button]s who have this as their [ButtonGroup] (see [member BaseButton.button_group]). */
get_buttons(): BaseButton[];

/** Returns the current pressed button. */
get_pressed_button(): BaseButton;

  connect<T extends SignalsOf<ButtonGroup>>(signal: T, method: SignalFunction<ButtonGroup[T]>): number;





/**
 * Emitted when one of the buttons of the group is pressed.
 *
*/
$pressed: Signal<() => void>

}

