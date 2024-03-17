
/**
 * [BaseButton] is an abstract base class for GUI buttons. It doesn't display anything by itself.
 *
*/
declare class BaseButton extends Control  {

  
/**
 * [BaseButton] is an abstract base class for GUI buttons. It doesn't display anything by itself.
 *
*/
  new(): BaseButton; 
  static "new"(): BaseButton 


/** Determines when the button is considered clicked, one of the [enum ActionMode] constants. */
action_mode: int;

/**
 * The [ButtonGroup] associated with the button. Not to be confused with node groups.
 *
 * **Note:** The button will be configured as a radio button if a [ButtonGroup] is assigned to it.
 *
*/
button_group: ButtonGroup;

/**
 * Binary mask to choose which mouse buttons this button will respond to.
 *
 * To allow both left-click and right-click, use `MOUSE_BUTTON_MASK_LEFT | MOUSE_BUTTON_MASK_RIGHT`.
 *
*/
button_mask: int;

/**
 * If `true`, the button's state is pressed. Means the button is pressed down or toggled (if [member toggle_mode] is active). Only works if [member toggle_mode] is `true`.
 *
 * **Note:** Setting [member button_pressed] will result in [signal toggled] to be emitted. If you want to change the pressed state without emitting that signal, use [method set_pressed_no_signal].
 *
*/
button_pressed: boolean;

/** If [code]true[/code], the button is in disabled state and can't be clicked or toggled. */
disabled: boolean;


/**
 * If `true`, the button stays pressed when moving the cursor outside the button while pressing it.
 *
 * **Note:** This property only affects the button's visual appearance. Signals will be emitted at the same moment regardless of this property's value.
 *
*/
keep_pressed_outside: boolean;

/** [Shortcut] associated to the button. */
shortcut: Shortcut;

/** If [code]true[/code], the button will highlight for a short amount of time when its shortcut is activated. If [code]false[/code] and [member toggle_mode] is [code]false[/code], the shortcut will activate without any visual feedback. */
shortcut_feedback: boolean;

/** If [code]true[/code], the button will add information about its shortcut in the tooltip. */
shortcut_in_tooltip: boolean;

/** If [code]true[/code], the button is in toggle mode. Makes the button flip state between pressed and unpressed each time its area is clicked. */
toggle_mode: boolean;

/** Called when the button is pressed. If you need to know the button's pressed state (and [member toggle_mode] is active), use [method _toggled] instead. */
protected _pressed(): void;

/** Called when the button is toggled (only if [member toggle_mode] is active). */
protected _toggled(): void;

/** Returns the visual state used to draw the button. This is useful mainly when implementing your own draw code by either overriding _draw() or connecting to "draw" signal. The visual state of the button is defined by the [enum DrawMode] enum. */
get_draw_mode(): int;

/** Returns [code]true[/code] if the mouse has entered the button and has not left it yet. */
is_hovered(): boolean;

/**
 * Changes the [member button_pressed] state of the button, without emitting [signal toggled]. Use when you just want to change the state of the button without sending the pressed event (e.g. when initializing scene). Only works if [member toggle_mode] is `true`.
 *
 * **Note:** This method doesn't unpress other buttons in [member button_group].
 *
*/
set_pressed_no_signal(): void;

  connect<T extends SignalsOf<BaseButton>>(signal: T, method: SignalFunction<BaseButton[T]>): number;



/**
 * The normal state (i.e. not pressed, not hovered, not toggled and enabled) of buttons.
 *
*/
static DRAW_NORMAL: any;

/**
 * The state of buttons are pressed.
 *
*/
static DRAW_PRESSED: any;

/**
 * The state of buttons are hovered.
 *
*/
static DRAW_HOVER: any;

/**
 * The state of buttons are disabled.
 *
*/
static DRAW_DISABLED: any;

/**
 * The state of buttons are both hovered and pressed.
 *
*/
static DRAW_HOVER_PRESSED: any;

/**
 * Require just a press to consider the button clicked.
 *
*/
static ACTION_MODE_BUTTON_PRESS: any;

/**
 * Require a press and a subsequent release before considering the button clicked.
 *
*/
static ACTION_MODE_BUTTON_RELEASE: any;


/**
 * Emitted when the button starts being held down.
 *
*/
$button_down: Signal<() => void>

/**
 * Emitted when the button stops being held down.
 *
*/
$button_up: Signal<() => void>

/**
 * Emitted when the button is toggled or pressed. This is on [signal button_down] if [member action_mode] is [constant ACTION_MODE_BUTTON_PRESS] and on [signal button_up] otherwise.
 *
 * If you need to know the button's pressed state (and [member toggle_mode] is active), use [signal toggled] instead.
 *
*/
$pressed: Signal<() => void>

/**
 * Emitted when the button was just toggled between pressed and normal states (only if [member toggle_mode] is active). The new state is contained in the [param toggled_on] argument.
 *
*/
$toggled: Signal<() => void>

}

