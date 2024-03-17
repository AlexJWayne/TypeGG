
/**
 * [LineEdit] provides an input field for editing a single line of text. It features many built-in shortcuts that are always available ([kbd]Ctrl[/kbd] here maps to [kbd]Cmd[/kbd] on macOS):
 *
 * - [kbd]Ctrl + C[/kbd]: Copy
 *
 * - [kbd]Ctrl + X[/kbd]: Cut
 *
 * - [kbd]Ctrl + V[/kbd] or [kbd]Ctrl + Y[/kbd]: Paste/"yank"
 *
 * - [kbd]Ctrl + Z[/kbd]: Undo
 *
 * - [kbd]Ctrl + ~[/kbd]: Swap input direction.
 *
 * - [kbd]Ctrl + Shift + Z[/kbd]: Redo
 *
 * - [kbd]Ctrl + U[/kbd]: Delete text from the caret position to the beginning of the line
 *
 * - [kbd]Ctrl + K[/kbd]: Delete text from the caret position to the end of the line
 *
 * - [kbd]Ctrl + A[/kbd]: Select all text
 *
 * - [kbd]Up Arrow[/kbd]/[kbd]Down Arrow[/kbd]: Move the caret to the beginning/end of the line
 *
 * On macOS, some extra keyboard shortcuts are available:
 *
 * - [kbd]Cmd + F[/kbd]: Same as [kbd]Right Arrow[/kbd], move the caret one character right
 *
 * - [kbd]Cmd + B[/kbd]: Same as [kbd]Left Arrow[/kbd], move the caret one character left
 *
 * - [kbd]Cmd + P[/kbd]: Same as [kbd]Up Arrow[/kbd], move the caret to the previous line
 *
 * - [kbd]Cmd + N[/kbd]: Same as [kbd]Down Arrow[/kbd], move the caret to the next line
 *
 * - [kbd]Cmd + D[/kbd]: Same as [kbd]Delete[/kbd], delete the character on the right side of caret
 *
 * - [kbd]Cmd + H[/kbd]: Same as [kbd]Backspace[/kbd], delete the character on the left side of the caret
 *
 * - [kbd]Cmd + A[/kbd]: Same as [kbd]Home[/kbd], move the caret to the beginning of the line
 *
 * - [kbd]Cmd + E[/kbd]: Same as [kbd]End[/kbd], move the caret to the end of the line
 *
 * - [kbd]Cmd + Left Arrow[/kbd]: Same as [kbd]Home[/kbd], move the caret to the beginning of the line
 *
 * - [kbd]Cmd + Right Arrow[/kbd]: Same as [kbd]End[/kbd], move the caret to the end of the line
 *
*/
declare class LineEdit extends Control  {

  
/**
 * [LineEdit] provides an input field for editing a single line of text. It features many built-in shortcuts that are always available ([kbd]Ctrl[/kbd] here maps to [kbd]Cmd[/kbd] on macOS):
 *
 * - [kbd]Ctrl + C[/kbd]: Copy
 *
 * - [kbd]Ctrl + X[/kbd]: Cut
 *
 * - [kbd]Ctrl + V[/kbd] or [kbd]Ctrl + Y[/kbd]: Paste/"yank"
 *
 * - [kbd]Ctrl + Z[/kbd]: Undo
 *
 * - [kbd]Ctrl + ~[/kbd]: Swap input direction.
 *
 * - [kbd]Ctrl + Shift + Z[/kbd]: Redo
 *
 * - [kbd]Ctrl + U[/kbd]: Delete text from the caret position to the beginning of the line
 *
 * - [kbd]Ctrl + K[/kbd]: Delete text from the caret position to the end of the line
 *
 * - [kbd]Ctrl + A[/kbd]: Select all text
 *
 * - [kbd]Up Arrow[/kbd]/[kbd]Down Arrow[/kbd]: Move the caret to the beginning/end of the line
 *
 * On macOS, some extra keyboard shortcuts are available:
 *
 * - [kbd]Cmd + F[/kbd]: Same as [kbd]Right Arrow[/kbd], move the caret one character right
 *
 * - [kbd]Cmd + B[/kbd]: Same as [kbd]Left Arrow[/kbd], move the caret one character left
 *
 * - [kbd]Cmd + P[/kbd]: Same as [kbd]Up Arrow[/kbd], move the caret to the previous line
 *
 * - [kbd]Cmd + N[/kbd]: Same as [kbd]Down Arrow[/kbd], move the caret to the next line
 *
 * - [kbd]Cmd + D[/kbd]: Same as [kbd]Delete[/kbd], delete the character on the right side of caret
 *
 * - [kbd]Cmd + H[/kbd]: Same as [kbd]Backspace[/kbd], delete the character on the left side of the caret
 *
 * - [kbd]Cmd + A[/kbd]: Same as [kbd]Home[/kbd], move the caret to the beginning of the line
 *
 * - [kbd]Cmd + E[/kbd]: Same as [kbd]End[/kbd], move the caret to the end of the line
 *
 * - [kbd]Cmd + Left Arrow[/kbd]: Same as [kbd]Home[/kbd], move the caret to the beginning of the line
 *
 * - [kbd]Cmd + Right Arrow[/kbd]: Same as [kbd]End[/kbd], move the caret to the end of the line
 *
*/
  new(): LineEdit; 
  static "new"(): LineEdit 


/** Text alignment as defined in the [enum HorizontalAlignment] enum. */
alignment: int;

/** If [code]true[/code], makes the caret blink. */
caret_blink: boolean;

/** The interval at which the caret blinks (in seconds). */
caret_blink_interval: float;

/** The caret's column position inside the [LineEdit]. When set, the text may scroll to accommodate it. */
caret_column: int;

/** If [code]true[/code], the [LineEdit] will always show the caret, even if focus is lost. */
caret_force_displayed: boolean;

/**
 * Allow moving caret, selecting and removing the individual composite character components.
 *
 * **Note:** [kbd]Backspace[/kbd] is always removing individual composite character components.
 *
*/
caret_mid_grapheme: boolean;

/** If [code]true[/code], the [LineEdit] will show a clear button if [member text] is not empty, which can be used to clear the text quickly. */
clear_button_enabled: boolean;

/** If [code]true[/code], the context menu will appear when right-clicked. */
context_menu_enabled: boolean;

/** If [code]true[/code], the selected text will be deselected when focus is lost. */
deselect_on_focus_loss_enabled: boolean;

/** If [code]true[/code], allow drag and drop of selected text. */
drag_and_drop_selection_enabled: boolean;

/** If [code]true[/code], control characters are displayed. */
draw_control_chars: boolean;

/** If [code]false[/code], existing text cannot be modified and new text cannot be added. */
editable: boolean;

/** If [code]true[/code], the [LineEdit] width will increase to stay longer than the [member text]. It will [b]not[/b] compress if the [member text] is shortened. */
expand_to_text_length: boolean;

/** If [code]true[/code], the [LineEdit] doesn't display decoration. */
flat: boolean;


/** Language code used for line-breaking and text shaping algorithms. If left empty, current locale is used instead. */
language: string;

/**
 * Maximum number of characters that can be entered inside the [LineEdit]. If `0`, there is no limit.
 *
 * When a limit is defined, characters that would exceed [member max_length] are truncated. This happens both for existing [member text] contents when setting the max length, or for new text inserted in the [LineEdit], including pasting. If any input text is truncated, the [signal text_change_rejected] signal is emitted with the truncated substring as parameter.
 *
 * **Example:**
 *
 * @example 
 * 
 * 
 * text = "Hello world"
 * max_length = 5
 * # `text` becomes "Hello".
 * max_length = 10
 * text += " goodbye"
 * # `text` becomes "Hello good".
 * # `text_change_rejected` is emitted with "bye" as parameter.
 * 
 * 
 * Text = "Hello world";
 * MaxLength = 5;
 * // `Text` becomes "Hello".
 * MaxLength = 10;
 * Text += " goodbye";
 * // `Text` becomes "Hello good".
 * // `text_change_rejected` is emitted with "bye" as parameter.
 * 
 * @summary 
 * 
 *
*/
max_length: int;

/**
 * If `false`, using middle mouse button to paste clipboard will be disabled.
 *
 * **Note:** This method is only implemented on Linux.
 *
*/
middle_mouse_paste_enabled: boolean;


/** Text shown when the [LineEdit] is empty. It is [b]not[/b] the [LineEdit]'s default value (see [member text]). */
placeholder_text: string;

/** Sets the icon that will appear in the right end of the [LineEdit] if there's no [member text], or always, if [member clear_button_enabled] is set to [code]false[/code]. */
right_icon: Texture2D;

/** If [code]true[/code], every character is replaced with the secret character (see [member secret_character]). */
secret: boolean;

/** The character to use to mask secret input. Only a single character can be used as the secret character. If it is longer than one character, only the first one will be used. If it is empty, a space will be used instead. */
secret_character: string;

/** If [code]true[/code], the [LineEdit] will select the whole text when it gains focus. */
select_all_on_focus: boolean;

/** If [code]false[/code], it's impossible to select the text using mouse nor keyboard. */
selecting_enabled: boolean;

/** If [code]false[/code], using shortcuts will be disabled. */
shortcut_keys_enabled: boolean;

/** Set BiDi algorithm override for the structured text. */
structured_text_bidi_override: int;

/** Set additional options for BiDi override. */
structured_text_bidi_override_options: any[];

/**
 * String value of the [LineEdit].
 *
 * **Note:** Changing text using this property won't emit the [signal text_changed] signal.
 *
*/
text: string;

/** Base text writing direction. */
text_direction: int;

/** If [code]true[/code], the native virtual keyboard is shown when focused on platforms that support it. */
virtual_keyboard_enabled: boolean;

/** Specifies the type of virtual keyboard to show. */
virtual_keyboard_type: int;

/** Erases the [LineEdit]'s [member text]. */
clear(): void;

/** Deletes one character at the caret's current position (equivalent to pressing [kbd]Delete[/kbd]). */
delete_char_at_caret(): void;

/** Deletes a section of the [member text] going from position [param from_column] to [param to_column]. Both parameters should be within the text's length. */
delete_text(): void;

/** Clears the current selection. */
deselect(): void;

/**
 * Returns the [PopupMenu] of this [LineEdit]. By default, this menu is displayed when right-clicking on the [LineEdit].
 *
 * You can add custom menu items or remove standard ones. Make sure your IDs don't conflict with the standard ones (see [enum MenuItems]). For example:
 *
 * @example 
 * 
 * 
 * func _ready():
 *     var menu = get_menu()
 *     # Remove all items after "Redo".
 *     menu.item_count = menu.get_item_index(MENU_REDO) + 1
 *     # Add custom items.
 *     menu.add_separator()
 *     menu.add_item("Insert Date", MENU_MAX + 1)
 *     # Connect callback.
 *     menu.id_pressed.connect(_on_item_pressed)
 * func _on_item_pressed(id):
 *     if id == MENU_MAX + 1:
 *         insert_text_at_caret(Time.get_date_string_from_system())
 * 
 * 
 * public override void _Ready()
 * {
 *     var menu = GetMenu();
 *     // Remove all items after "Redo".
 *     menu.ItemCount = menu.GetItemIndex(LineEdit.MenuItems.Redo) + 1;
 *     // Add custom items.
 *     menu.AddSeparator();
 *     menu.AddItem("Insert Date", LineEdit.MenuItems.Max + 1);
 *     // Add event handler.
 *     menu.IdPressed += OnItemPressed;
 * }
 * public void OnItemPressed(int id)
 * {
 *     if (id == LineEdit.MenuItems.Max + 1)
 *     {
 *         InsertTextAtCaret(Time.GetDateStringFromSystem());
 *     }
 * }
 * 
 * @summary 
 * 
 *
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.
 *
*/
get_menu(): PopupMenu;

/** Returns the scroll offset due to [member caret_column], as a number of characters. */
get_scroll_offset(): float;

/** Returns the text inside the selection. */
get_selected_text(): string;

/** Returns the selection begin column. */
get_selection_from_column(): int;

/** Returns the selection end column. */
get_selection_to_column(): int;

/** Returns [code]true[/code] if the user has selected text. */
has_selection(): boolean;

/** Inserts [param text] at the caret. If the resulting value is longer than [member max_length], nothing happens. */
insert_text_at_caret(): void;

/** Returns whether the menu is visible. Use this instead of [code]get_menu().visible[/code] to improve performance (so the creation of the menu is avoided). */
is_menu_visible(): boolean;

/** Executes a given action as defined in the [enum MenuItems] enum. */
menu_option(): void;

/**
 * Selects characters inside [LineEdit] between [param from] and [param to]. By default, [param from] is at the beginning and [param to] at the end.
 *
 * @example 
 * 
 * 
 * text = "Welcome"
 * select() # Will select "Welcome".
 * select(4) # Will select "ome".
 * select(2, 5) # Will select "lco".
 * 
 * 
 * Text = "Welcome";
 * Select(); // Will select "Welcome".
 * Select(4); // Will select "ome".
 * Select(2, 5); // Will select "lco".
 * 
 * @summary 
 * 
 *
*/
select(): void;

/** Selects the whole [String]. */
select_all(): void;

  connect<T extends SignalsOf<LineEdit>>(signal: T, method: SignalFunction<LineEdit[T]>): number;



/**
 * Cuts (copies and clears) the selected text.
 *
*/
static MENU_CUT: any;

/**
 * Copies the selected text.
 *
*/
static MENU_COPY: any;

/**
 * Pastes the clipboard text over the selected text (or at the caret's position).
 *
 * Non-printable escape characters are automatically stripped from the OS clipboard via [method String.strip_escapes].
 *
*/
static MENU_PASTE: any;

/**
 * Erases the whole [LineEdit] text.
 *
*/
static MENU_CLEAR: any;

/**
 * Selects the whole [LineEdit] text.
 *
*/
static MENU_SELECT_ALL: any;

/**
 * Undoes the previous action.
 *
*/
static MENU_UNDO: any;

/**
 * Reverse the last undo action.
 *
*/
static MENU_REDO: any;

/**
 * ID of "Text Writing Direction" submenu.
 *
*/
static MENU_SUBMENU_TEXT_DIR: any;

/**
 * Sets text direction to inherited.
 *
*/
static MENU_DIR_INHERITED: any;

/**
 * Sets text direction to automatic.
 *
*/
static MENU_DIR_AUTO: any;

/**
 * Sets text direction to left-to-right.
 *
*/
static MENU_DIR_LTR: any;

/**
 * Sets text direction to right-to-left.
 *
*/
static MENU_DIR_RTL: any;

/**
 * Toggles control character display.
 *
*/
static MENU_DISPLAY_UCC: any;

/**
 * ID of "Insert Control Character" submenu.
 *
*/
static MENU_SUBMENU_INSERT_UCC: any;

/**
 * Inserts left-to-right mark (LRM) character.
 *
*/
static MENU_INSERT_LRM: any;

/**
 * Inserts right-to-left mark (RLM) character.
 *
*/
static MENU_INSERT_RLM: any;

/**
 * Inserts start of left-to-right embedding (LRE) character.
 *
*/
static MENU_INSERT_LRE: any;

/**
 * Inserts start of right-to-left embedding (RLE) character.
 *
*/
static MENU_INSERT_RLE: any;

/**
 * Inserts start of left-to-right override (LRO) character.
 *
*/
static MENU_INSERT_LRO: any;

/**
 * Inserts start of right-to-left override (RLO) character.
 *
*/
static MENU_INSERT_RLO: any;

/**
 * Inserts pop direction formatting (PDF) character.
 *
*/
static MENU_INSERT_PDF: any;

/**
 * Inserts Arabic letter mark (ALM) character.
 *
*/
static MENU_INSERT_ALM: any;

/**
 * Inserts left-to-right isolate (LRI) character.
 *
*/
static MENU_INSERT_LRI: any;

/**
 * Inserts right-to-left isolate (RLI) character.
 *
*/
static MENU_INSERT_RLI: any;

/**
 * Inserts first strong isolate (FSI) character.
 *
*/
static MENU_INSERT_FSI: any;

/**
 * Inserts pop direction isolate (PDI) character.
 *
*/
static MENU_INSERT_PDI: any;

/**
 * Inserts zero width joiner (ZWJ) character.
 *
*/
static MENU_INSERT_ZWJ: any;

/**
 * Inserts zero width non-joiner (ZWNJ) character.
 *
*/
static MENU_INSERT_ZWNJ: any;

/**
 * Inserts word joiner (WJ) character.
 *
*/
static MENU_INSERT_WJ: any;

/**
 * Inserts soft hyphen (SHY) character.
 *
*/
static MENU_INSERT_SHY: any;

/**
 * Represents the size of the [enum MenuItems] enum.
 *
*/
static MENU_MAX: any;

/**
 * Default text virtual keyboard.
 *
*/
static KEYBOARD_TYPE_DEFAULT: any;

/**
 * Multiline virtual keyboard.
 *
*/
static KEYBOARD_TYPE_MULTILINE: any;

/**
 * Virtual number keypad, useful for PIN entry.
 *
*/
static KEYBOARD_TYPE_NUMBER: any;

/**
 * Virtual number keypad, useful for entering fractional numbers.
 *
*/
static KEYBOARD_TYPE_NUMBER_DECIMAL: any;

/**
 * Virtual phone number keypad.
 *
*/
static KEYBOARD_TYPE_PHONE: any;

/**
 * Virtual keyboard with additional keys to assist with typing email addresses.
 *
*/
static KEYBOARD_TYPE_EMAIL_ADDRESS: any;

/**
 * Virtual keyboard for entering a password. On most platforms, this should disable autocomplete and autocapitalization.
 *
 * **Note:** This is not supported on Web. Instead, this behaves identically to [constant KEYBOARD_TYPE_DEFAULT].
 *
*/
static KEYBOARD_TYPE_PASSWORD: any;

/**
 * Virtual keyboard with additional keys to assist with typing URLs.
 *
*/
static KEYBOARD_TYPE_URL: any;


/**
 * Emitted when appending text that overflows the [member max_length]. The appended text is truncated to fit [member max_length], and the part that couldn't fit is passed as the [param rejected_substring] argument.
 *
*/
$text_change_rejected: Signal<() => void>

/**
 * Emitted when the text changes.
 *
*/
$text_changed: Signal<() => void>

/**
 * Emitted when the user presses [constant KEY_ENTER] on the [LineEdit].
 *
*/
$text_submitted: Signal<() => void>

}

