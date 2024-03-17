
/**
 * The default use of [AcceptDialog] is to allow it to only be accepted or closed, with the same result. However, the [signal confirmed] and [signal canceled] signals allow to make the two actions different, and the [method add_button] method allows to add custom buttons and actions.
 *
*/
declare class AcceptDialog extends Window  {

  
/**
 * The default use of [AcceptDialog] is to allow it to only be accepted or closed, with the same result. However, the [signal confirmed] and [signal canceled] signals allow to make the two actions different, and the [method add_button] method allows to add custom buttons and actions.
 *
*/
  new(): AcceptDialog; 
  static "new"(): AcceptDialog 


/** Sets autowrapping for the text in the dialog. */
dialog_autowrap: boolean;

/** If [code]true[/code], the dialog will be hidden when the escape key ([constant KEY_ESCAPE]) is pressed. */
dialog_close_on_escape: boolean;

/**
 * If `true`, the dialog is hidden when the OK button is pressed. You can set it to `false` if you want to do e.g. input validation when receiving the [signal confirmed] signal, and handle hiding the dialog in your own logic.
 *
 * **Note:** Some nodes derived from this class can have a different default value, and potentially their own built-in logic overriding this setting. For example [FileDialog] defaults to `false`, and has its own input validation code that is called when you press OK, which eventually hides the dialog if the input is valid. As such, this property can't be used in [FileDialog] to disable hiding the dialog when pressing OK.
 *
*/
dialog_hide_on_ok: boolean;

/** The text displayed by the dialog. */
dialog_text: string;



/** The text displayed by the OK button (see [method get_ok_button]). */
ok_button_text: string;





/**
 * Adds a button with label [param text] and a custom [param action] to the dialog and returns the created button. [param action] will be passed to the [signal custom_action] signal when pressed.
 *
 * If `true`, [param right] will place the button to the right of any sibling buttons.
 *
 * You can use [method remove_button] method to remove a button created with this method from the dialog.
 *
*/
add_button(): Button;

/**
 * Adds a button with label [param name] and a cancel action to the dialog and returns the created button.
 *
 * You can use [method remove_button] method to remove a button created with this method from the dialog.
 *
*/
add_cancel_button(): Button;

/**
 * Returns the label used for built-in text.
 *
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.
 *
*/
get_label(): Label;

/**
 * Returns the OK [Button] instance.
 *
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.
 *
*/
get_ok_button(): Button;

/** Registers a [LineEdit] in the dialog. When the enter key is pressed, the dialog will be accepted. */
register_text_enter(): void;

/** Removes the [param button] from the dialog. Does NOT free the [param button]. The [param button] must be a [Button] added with [method add_button] or [method add_cancel_button] method. After removal, pressing the [param button] will no longer emit this dialog's [signal custom_action] or [signal canceled] signals. */
remove_button(): void;

  connect<T extends SignalsOf<AcceptDialog>>(signal: T, method: SignalFunction<AcceptDialog[T]>): number;





/**
 * Emitted when the dialog is closed or the button created with [method add_cancel_button] is pressed.
 *
*/
$canceled: Signal<() => void>

/**
 * Emitted when the dialog is accepted, i.e. the OK button is pressed.
 *
*/
$confirmed: Signal<() => void>

/**
 * Emitted when a custom button is pressed. See [method add_button].
 *
*/
$custom_action: Signal<() => void>

}

