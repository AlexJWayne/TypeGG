
/**
 * A multiline text editor. It also has limited facilities for editing code, such as syntax highlighting support. For more advanced facilities for editing code, see [CodeEdit].
 *
 * **Note:** Most viewport, caret and edit methods contain a `caret_index` argument for [member caret_multiple] support. The argument should be one of the following: `-1` for all carets, `0` for the main caret, or greater than `0` for secondary carets.
 *
 * **Note:** When holding down [kbd]Alt[/kbd], the vertical scroll wheel will scroll 5 times as fast as it would normally do. This also works in the Godot script editor.
 *
*/
declare class TextEdit extends Control  {

  
/**
 * A multiline text editor. It also has limited facilities for editing code, such as syntax highlighting support. For more advanced facilities for editing code, see [CodeEdit].
 *
 * **Note:** Most viewport, caret and edit methods contain a `caret_index` argument for [member caret_multiple] support. The argument should be one of the following: `-1` for all carets, `0` for the main caret, or greater than `0` for secondary carets.
 *
 * **Note:** When holding down [kbd]Alt[/kbd], the vertical scroll wheel will scroll 5 times as fast as it would normally do. This also works in the Godot script editor.
 *
*/
  new(): TextEdit; 
  static "new"(): TextEdit 


/** If [member wrap_mode] is set to [constant LINE_WRAPPING_BOUNDARY], sets text wrapping mode. To see how each mode behaves, see [enum TextServer.AutowrapMode]. */
autowrap_mode: int;

/** If [code]true[/code], makes the caret blink. */
caret_blink: boolean;

/** The interval at which the caret blinks (in seconds). */
caret_blink_interval: float;

/** If [code]true[/code], caret will be visible when [member editable] is disabled. */
caret_draw_when_editable_disabled: boolean;

/**
 * Allow moving caret, selecting and removing the individual composite character components.
 *
 * **Note:** [kbd]Backspace[/kbd] is always removing individual composite character components.
 *
*/
caret_mid_grapheme: boolean;

/**
 * If `true`, a right-click moves the caret at the mouse position before displaying the context menu.
 *
 * If `false`, the context menu disregards mouse location.
 *
*/
caret_move_on_right_click: boolean;

/** Sets if multiple carets are allowed. */
caret_multiple: boolean;

/** Set the type of caret to draw. */
caret_type: int;

/** If [code]true[/code], a right-click displays the context menu. */
context_menu_enabled: boolean;

/** If [code]true[/code], the selected text will be deselected when focus is lost. */
deselect_on_focus_loss_enabled: boolean;

/** If [code]true[/code], allow drag and drop of selected text. */
drag_and_drop_selection_enabled: boolean;

/** If [code]true[/code], control characters are displayed. */
draw_control_chars: boolean;

/** If [code]true[/code], the "space" character will have a visible representation. */
draw_spaces: boolean;

/** If [code]true[/code], the "tab" character will have a visible representation. */
draw_tabs: boolean;

/** If [code]false[/code], existing text cannot be modified and new text cannot be added. */
editable: boolean;


/** If [code]true[/code], all occurrences of the selected text will be highlighted. */
highlight_all_occurrences: boolean;

/** If [code]true[/code], the line containing the cursor is highlighted. */
highlight_current_line: boolean;

/** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
language: string;

/**
 * If `false`, using middle mouse button to paste clipboard will be disabled.
 *
 * **Note:** This method is only implemented on Linux.
 *
*/
middle_mouse_paste_enabled: boolean;

/** If [code]true[/code], a minimap is shown, providing an outline of your source code. */
minimap_draw: boolean;

/** The width, in pixels, of the minimap. */
minimap_width: int;


/** Text shown when the [TextEdit] is empty. It is [b]not[/b] the [TextEdit]'s default value (see [member text]). */
placeholder_text: string;

/** If [code]true[/code], [TextEdit] will disable vertical scroll and fit minimum height to the number of visible lines. */
scroll_fit_content_height: boolean;

/** If there is a horizontal scrollbar, this determines the current horizontal scroll value in pixels. */
scroll_horizontal: int;

/** Allow scrolling past the last line into "virtual" space. */
scroll_past_end_of_file: boolean;

/** Scroll smoothly over the text rather than jumping to the next location. */
scroll_smooth: boolean;

/** Sets the scroll speed with the minimap or when [member scroll_smooth] is enabled. */
scroll_v_scroll_speed: float;

/** If there is a vertical scrollbar, this determines the current vertical scroll value in line numbers, starting at 0 for the top line. */
scroll_vertical: float;

/**
 * If `true`, text can be selected.
 *
 * If `false`, text can not be selected by the user or by the [method select] or [method select_all] methods.
 *
*/
selecting_enabled: boolean;

/** If [code]true[/code], shortcut keys for context menu items are enabled, even if the context menu is disabled. */
shortcut_keys_enabled: boolean;

/** Set BiDi algorithm override for the structured text. */
structured_text_bidi_override: int;

/** Set additional options for BiDi override. */
structured_text_bidi_override_options: any[];

/** Sets the [SyntaxHighlighter] to use. */
syntax_highlighter: SyntaxHighlighter;

/** String value of the [TextEdit]. */
text: string;

/** Base text writing direction. */
text_direction: int;

/** If [code]true[/code], the native virtual keyboard is shown when focused on platforms that support it. */
virtual_keyboard_enabled: boolean;

/** Sets the line wrapping mode to use. */
wrap_mode: int;

/** Override this method to define what happens when the user presses the backspace key. */
protected _backspace(): void;

/** Override this method to define what happens when the user performs a copy operation. */
protected _copy(): void;

/** Override this method to define what happens when the user performs a cut operation. */
protected _cut(): void;

/** Override this method to define what happens when the user types in the provided key [param unicode_char]. */
protected _handle_unicode_input(): void;

/** Override this method to define what happens when the user performs a paste operation. */
protected _paste(): void;

/**
 * Override this method to define what happens when the user performs a paste operation with middle mouse button.
 *
 * **Note:** This method is only implemented on Linux.
 *
*/
protected _paste_primary_clipboard(): void;

/** Adds a new caret at the given location. Returns the index of the new caret, or [code]-1[/code] if the location is invalid. */
add_caret(): int;

/** Adds an additional caret above or below every caret. If [param below] is true the new caret will be added below and above otherwise. */
add_caret_at_carets(): void;

/** Register a new gutter to this [TextEdit]. Use [param at] to have a specific gutter order. A value of [code]-1[/code] appends the gutter to the right. */
add_gutter(): void;

/** Adds a selection and a caret for the next occurrence of the current selection. If there is no active selection, selects word under caret. */
add_selection_for_next_occurrence(): void;

/** Reposition the carets affected by the edit. This assumes edits are applied in edit order, see [method get_caret_index_edit_order]. */
adjust_carets_after_edit(): void;

/** Adjust the viewport so the caret is visible. */
adjust_viewport_to_caret(): void;

/** Called when the user presses the backspace key. Can be overridden with [method _backspace]. */
backspace(): void;

/** Starts a multipart edit. All edits will be treated as one action until [method end_complex_operation] is called. */
begin_complex_operation(): void;

/** Centers the viewport on the line the editing caret is at. This also resets the [member scroll_horizontal] value to [code]0[/code]. */
center_viewport_to_caret(): void;

/** Performs a full reset of [TextEdit], including undo history. */
clear(): void;

/** Clears the undo history. */
clear_undo_history(): void;

/** Copies the current text selection. Can be overridden with [method _copy]. */
copy(): void;

/** Cut's the current selection. Can be overridden with [method _cut]. */
cut(): void;

/** Deletes the selected text. */
delete_selection(): void;

/** Deselects the current selection. */
deselect(): void;

/** Marks the end of steps in the current action started with [method start_action]. */
end_action(): void;

/** Ends a multipart edit, started with [method begin_complex_operation]. If called outside a complex operation, the current operation is pushed onto the undo/redo stack. */
end_complex_operation(): void;

/** Returns the column the editing caret is at. */
get_caret_column(): int;

/** Returns the number of carets in this [TextEdit]. */
get_caret_count(): int;

/** Returns the caret pixel draw position. */
get_caret_draw_pos(): Vector2;

/** Returns a list of caret indexes in their edit order, this done from bottom to top. Edit order refers to the way actions such as [method insert_text_at_caret] are applied. */
get_caret_index_edit_order(): PackedInt32Array;

/** Returns the line the editing caret is on. */
get_caret_line(): int;

/** Returns the wrap index the editing caret is on. */
get_caret_wrap_index(): int;

/** Returns the first column containing a non-whitespace character. */
get_first_non_whitespace_column(): int;

/** Returns the first visible line. */
get_first_visible_line(): int;

/** Returns the number of gutters registered. */
get_gutter_count(): int;

/** Returns the name of the gutter at the given index. */
get_gutter_name(): string;

/** Returns the type of the gutter at the given index. */
get_gutter_type(): int;

/** Returns the width of the gutter at the given index. */
get_gutter_width(): int;

/** Returns the [HScrollBar] used by [TextEdit]. */
get_h_scroll_bar(): HScrollBar;

/** Returns the number of spaces and [code]tab * tab_size[/code] before the first char. */
get_indent_level(): int;

/** Returns the last visible line. Use [method get_last_full_visible_line_wrap_index] for the wrap index. */
get_last_full_visible_line(): int;

/** Returns the last visible wrap index of the last visible line. */
get_last_full_visible_line_wrap_index(): int;

/** Returns the last unhidden line in the entire [TextEdit]. */
get_last_unhidden_line(): int;

/** Returns the text of a specific line. */
get_line(): string;

/** Returns the current background color of the line. [code]Color(0, 0, 0, 0)[/code] is returned if no color is set. */
get_line_background_color(): Color;

/** Returns the line and column at the given position. In the returned vector, [code]x[/code] is the column, [code]y[/code] is the line. If [param allow_out_of_bounds] is [code]false[/code] and the position is not over the text, both vector values will be set to [code]-1[/code]. */
get_line_column_at_pos(): Vector2i;

/** Returns the number of lines in the text. */
get_line_count(): int;

/** Returns the icon currently in [param gutter] at [param line]. */
get_line_gutter_icon(): Texture2D;

/** Returns the color currently in [param gutter] at [param line]. */
get_line_gutter_item_color(): Color;

/** Returns the metadata currently in [param gutter] at [param line]. */
get_line_gutter_metadata(): any;

/** Returns the text currently in [param gutter] at [param line]. */
get_line_gutter_text(): string;

/**
 * Returns the maximum value of the line height among all lines.
 *
 * **Note:** The return value is influenced by [theme_item line_spacing] and [theme_item font_size]. And it will not be less than `1`.
 *
*/
get_line_height(): int;

/** Returns the width in pixels of the [param wrap_index] on [param line]. */
get_line_width(): int;

/** Returns the number of times the given line is wrapped. */
get_line_wrap_count(): int;

/** Returns the wrap index of the given line column. */
get_line_wrap_index_at_column(): int;

/** Returns an array of [String]s representing each wrapped index. */
get_line_wrapped_text(): PackedStringArray;

/** Returns the local mouse position adjusted for the text direction. */
get_local_mouse_pos(): Vector2;

/**
 * Returns the [PopupMenu] of this [TextEdit]. By default, this menu is displayed when right-clicking on the [TextEdit].
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
 *     menu.ItemCount = menu.GetItemIndex(TextEdit.MenuItems.Redo) + 1;
 *     // Add custom items.
 *     menu.AddSeparator();
 *     menu.AddItem("Insert Date", TextEdit.MenuItems.Max + 1);
 *     // Add event handler.
 *     menu.IdPressed += OnItemPressed;
 * }
 * public void OnItemPressed(int id)
 * {
 *     if (id == TextEdit.MenuItems.Max + 1)
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

/** Returns the equivalent minimap line at [param position]. */
get_minimap_line_at_pos(): int;

/** Returns the number of lines that may be drawn on the minimap. */
get_minimap_visible_lines(): int;

/** Similar to [method get_next_visible_line_offset_from], but takes into account the line wrap indexes. In the returned vector, [code]x[/code] is the line, [code]y[/code] is the wrap index. */
get_next_visible_line_index_offset_from(): Vector2i;

/** Returns the count to the next visible line from [param line] to [code]line + visible_amount[/code]. Can also count backwards. For example if a [TextEdit] has 5 lines with lines 2 and 3 hidden, calling this with [code]line = 1, visible_amount = 1[/code] would return 3. */
get_next_visible_line_offset_from(): int;

/**
 * Returns the local position for the given [param line] and [param column]. If `x` or `y` of the returned vector equal `-1`, the position is outside of the viewable area of the control.
 *
 * **Note:** The Y position corresponds to the bottom side of the line. Use [method get_rect_at_line_column] to get the top side position.
 *
*/
get_pos_at_line_column(): Vector2i;

/**
 * Returns the local position and size for the grapheme at the given [param line] and [param column]. If `x` or `y` position of the returned rect equal `-1`, the position is outside of the viewable area of the control.
 *
 * **Note:** The Y position of the returned rect corresponds to the top side of the line, unlike [method get_pos_at_line_column] which returns the bottom side.
 *
*/
get_rect_at_line_column(): Rect2i;

/** Returns the last tagged saved version from [method tag_saved_version]. */
get_saved_version(): int;

/** Returns the scroll position for [param wrap_index] of [param line]. */
get_scroll_pos_for_line(): float;

/** Returns the text inside the selection of a caret, or all the carets if [param caret_index] is its default value [code]-1[/code]. */
get_selected_text(): string;

/** Returns the original start column of the selection. */
get_selection_column(): int;

/** Returns the selection begin column. */
get_selection_from_column(): int;

/** Returns the selection begin line. */
get_selection_from_line(): int;

/** Returns the original start line of the selection. */
get_selection_line(): int;

/** Returns the current selection mode. */
get_selection_mode(): int;

/** Returns the selection end column. */
get_selection_to_column(): int;

/** Returns the selection end line. */
get_selection_to_line(): int;

/** Returns the [TextEdit]'s' tab size. */
get_tab_size(): int;

/** Returns the total width of all gutters and internal padding. */
get_total_gutter_width(): int;

/** Returns the number of lines that may be drawn. */
get_total_visible_line_count(): int;

/** Returns the [VScrollBar] of the [TextEdit]. */
get_v_scroll_bar(): VScrollBar;

/** Returns the current version of the [TextEdit]. The version is a count of recorded operations by the undo/redo history. */
get_version(): int;

/** Returns the number of visible lines, including wrapped text. */
get_visible_line_count(): int;

/** Returns the total number of visible + wrapped lines between the two lines. */
get_visible_line_count_in_range(): int;

/** Returns the word at [param position]. */
get_word_at_pos(): string;

/** Returns a [String] text with the word under the caret's location. */
get_word_under_caret(): string;

/** Returns if the user has IME text. */
has_ime_text(): boolean;

/** Returns [code]true[/code] if a "redo" action is available. */
has_redo(): boolean;

/** Returns [code]true[/code] if the user has selected text. */
has_selection(): boolean;

/** Returns [code]true[/code] if an "undo" action is available. */
has_undo(): boolean;

/** Inserts a new line with [param text] at [param line]. */
insert_line_at(): void;

/** Insert the specified text at the caret position. */
insert_text_at_caret(): void;

/** Returns [code]true[/code] if the caret is visible on the screen. */
is_caret_visible(): boolean;

/** Returns [code]true[/code] if the user is dragging their mouse for scrolling or selecting. */
is_dragging_cursor(): boolean;

/** Returns whether the gutter is clickable. */
is_gutter_clickable(): boolean;

/** Returns whether the gutter is currently drawn. */
is_gutter_drawn(): boolean;

/** Returns whether the gutter is overwritable. */
is_gutter_overwritable(): boolean;

/** Returns whether the gutter on the given line is clickable. */
is_line_gutter_clickable(): boolean;

/** Returns if the given line is wrapped. */
is_line_wrapped(): boolean;

/** Returns whether the menu is visible. Use this instead of [code]get_menu().visible[/code] to improve performance (so the creation of the menu is avoided). */
is_menu_visible(): boolean;

/** Returns whether the mouse is over selection. If [param edges] is [code]true[/code], the edges are considered part of the selection. */
is_mouse_over_selection(): boolean;

/** Returns whether the user is in overtype mode. */
is_overtype_mode_enabled(): boolean;

/** Executes a given action as defined in the [enum MenuItems] enum. */
menu_option(): void;

/** Merge the gutters from [param from_line] into [param to_line]. Only overwritable gutters will be copied. */
merge_gutters(): void;

/**
 * Merges any overlapping carets. Will favor the newest caret, or the caret with a selection.
 *
 * **Note:** This is not called when a caret changes position but after certain actions, so it is possible to get into a state where carets overlap.
 *
*/
merge_overlapping_carets(): void;

/** Paste at the current location. Can be overridden with [method _paste]. */
paste(): void;

/** Pastes the primary clipboard. */
paste_primary_clipboard(): void;

/** Perform redo operation. */
redo(): void;

/**
 * Removes the given caret index.
 *
 * **Note:** This can result in adjustment of all other caret indices.
 *
*/
remove_caret(): void;

/** Removes the gutter from this [TextEdit]. */
remove_gutter(): void;

/** Removes all additional carets. */
remove_secondary_carets(): void;

/**
 * Removes text between the given positions.
 *
 * **Note:** This does not adjust the caret or selection, which as a result it can end up in an invalid position.
 *
*/
remove_text(): void;

/**
 * Perform a search inside the text. Search flags can be specified in the [enum SearchFlags] enum.
 *
 * In the returned vector, `x` is the column, `y` is the line. If no results are found, both are equal to `-1`.
 *
 * @example 
 * 
 * 
 * var result = search("print", SEARCH_WHOLE_WORDS, 0, 0)
 * if result.x != -1:
 *     # Result found.
 *     var line_number = result.y
 *     var column_number = result.x
 * 
 * 
 * Vector2I result = Search("print", (uint)TextEdit.SearchFlags.WholeWords, 0, 0);
 * if (result.X != -1)
 * {
 *     // Result found.
 *     int lineNumber = result.Y;
 *     int columnNumber = result.X;
 * }
 * 
 * @summary 
 * 
 *
*/
search(): Vector2i;

/**
 * Perform selection, from line/column to line/column.
 *
 * If [member selecting_enabled] is `false`, no selection will occur.
 *
*/
select(): void;

/**
 * Select all the text.
 *
 * If [member selecting_enabled] is `false`, no selection will occur.
 *
*/
select_all(): void;

/** Selects the word under the caret. */
select_word_under_caret(): void;

/**
 * Moves the caret to the specified [param column] index.
 *
 * If [param adjust_viewport] is `true`, the viewport will center at the caret position after the move occurs.
 *
 * **Note:** If supporting multiple carets this will not check for any overlap. See [method merge_overlapping_carets].
 *
*/
set_caret_column(): void;

/**
 * Moves the caret to the specified [param line] index.
 *
 * If [param adjust_viewport] is `true`, the viewport will center at the caret position after the move occurs.
 *
 * If [param can_be_hidden] is `true`, the specified [param line] can be hidden.
 *
 * **Note:** If supporting multiple carets this will not check for any overlap. See [method merge_overlapping_carets].
 *
*/
set_caret_line(): void;

/** Sets the gutter as clickable. This will change the mouse cursor to a pointing hand when hovering over the gutter. */
set_gutter_clickable(): void;

/** Set a custom draw method for the gutter. The callback method must take the following args: [code]line: int, gutter: int, Area: Rect2[/code]. */
set_gutter_custom_draw(): void;

/** Sets whether the gutter should be drawn. */
set_gutter_draw(): void;

/** Sets the name of the gutter. */
set_gutter_name(): void;

/** Sets the gutter to overwritable. See [method merge_gutters]. */
set_gutter_overwritable(): void;

/** Sets the type of gutter. */
set_gutter_type(): void;

/** Set the width of the gutter. */
set_gutter_width(): void;

/** Sets the text for a specific line. */
set_line(): void;

/** Positions the [param wrap_index] of [param line] at the center of the viewport. */
set_line_as_center_visible(): void;

/** Positions the [param wrap_index] of [param line] at the top of the viewport. */
set_line_as_first_visible(): void;

/** Positions the [param wrap_index] of [param line] at the bottom of the viewport. */
set_line_as_last_visible(): void;

/** Sets the current background color of the line. Set to [code]Color(0, 0, 0, 0)[/code] for no color. */
set_line_background_color(): void;

/** If [param clickable] is [code]true[/code], makes the [param gutter] on [param line] clickable. See [signal gutter_clicked]. */
set_line_gutter_clickable(): void;

/** Sets the icon for [param gutter] on [param line] to [param icon]. */
set_line_gutter_icon(): void;

/** Sets the color for [param gutter] on [param line] to [param color]. */
set_line_gutter_item_color(): void;

/** Sets the metadata for [param gutter] on [param line] to [param metadata]. */
set_line_gutter_metadata(): void;

/** Sets the text for [param gutter] on [param line] to [param text]. */
set_line_gutter_text(): void;

/** If [code]true[/code], sets the user into overtype mode. When the user types in this mode, it will override existing text. */
set_overtype_mode_enabled(): void;

/** Sets the search [param flags]. This is used with [method set_search_text] to highlight occurrences of the searched text. Search flags can be specified from the [enum SearchFlags] enum. */
set_search_flags(): void;

/** Sets the search text. See [method set_search_flags]. */
set_search_text(): void;

/** Sets the current selection mode. */
set_selection_mode(): void;

/** Sets the tab size for the [TextEdit] to use. */
set_tab_size(): void;

/** Provide custom tooltip text. The callback method must take the following args: [code]hovered_word: String[/code]. */
set_tooltip_request_func(): void;

/**
 * Starts an action, will end the current action if [param action] is different.
 *
 * An action will also end after a call to [method end_action], after [member ProjectSettings.gui/timers/text_edit_idle_detect_sec] is triggered or a new undoable step outside the [method start_action] and [method end_action] calls.
 *
*/
start_action(): void;

/** Swaps the two lines. */
swap_lines(): void;

/** Tag the current version as saved. */
tag_saved_version(): void;

/** Perform undo operation. */
undo(): void;

  connect<T extends SignalsOf<TextEdit>>(signal: T, method: SignalFunction<TextEdit[T]>): number;



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
 * Pastes the clipboard text over the selected text (or at the cursor's position).
 *
*/
static MENU_PASTE: any;

/**
 * Erases the whole [TextEdit] text.
 *
*/
static MENU_CLEAR: any;

/**
 * Selects the whole [TextEdit] text.
 *
*/
static MENU_SELECT_ALL: any;

/**
 * Undoes the previous action.
 *
*/
static MENU_UNDO: any;

/**
 * Redoes the previous action.
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
 * No current action.
 *
*/
static ACTION_NONE: any;

/**
 * A typing action.
 *
*/
static ACTION_TYPING: any;

/**
 * A backwards delete action.
 *
*/
static ACTION_BACKSPACE: any;

/**
 * A forward delete action.
 *
*/
static ACTION_DELETE: any;

/**
 * Match case when searching.
 *
*/
static SEARCH_MATCH_CASE: any;

/**
 * Match whole words when searching.
 *
*/
static SEARCH_WHOLE_WORDS: any;

/**
 * Search from end to beginning.
 *
*/
static SEARCH_BACKWARDS: any;

/**
 * Vertical line caret.
 *
*/
static CARET_TYPE_LINE: any;

/**
 * Block caret.
 *
*/
static CARET_TYPE_BLOCK: any;

/**
 * Not selecting.
 *
*/
static SELECTION_MODE_NONE: any;

/**
 * Select as if `shift` is pressed.
 *
*/
static SELECTION_MODE_SHIFT: any;

/**
 * Select single characters as if the user single clicked.
 *
*/
static SELECTION_MODE_POINTER: any;

/**
 * Select whole words as if the user double clicked.
 *
*/
static SELECTION_MODE_WORD: any;

/**
 * Select whole lines as if the user triple clicked.
 *
*/
static SELECTION_MODE_LINE: any;

/**
 * Line wrapping is disabled.
 *
*/
static LINE_WRAPPING_NONE: any;

/**
 * Line wrapping occurs at the control boundary, beyond what would normally be visible.
 *
*/
static LINE_WRAPPING_BOUNDARY: any;

/**
 * Draw a string.
 *
*/
static GUTTER_TYPE_STRING: any;

/**
 * Draw an icon.
 *
*/
static GUTTER_TYPE_ICON: any;

/**
 * Custom draw.
 *
*/
static GUTTER_TYPE_CUSTOM: any;


/**
 * Emitted when the caret changes position.
 *
*/
$caret_changed: Signal<() => void>

/**
 * Emitted when a gutter is added.
 *
*/
$gutter_added: Signal<() => void>

/**
 * Emitted when a gutter is clicked.
 *
*/
$gutter_clicked: Signal<() => void>

/**
 * Emitted when a gutter is removed.
 *
*/
$gutter_removed: Signal<() => void>

/**
 * Emitted immediately when the text changes.
 *
 * When text is added [param from_line] will be less than [param to_line]. On a remove [param to_line] will be less than [param from_line].
 *
*/
$lines_edited_from: Signal<() => void>

/**
 * Emitted when the text changes.
 *
*/
$text_changed: Signal<() => void>

/**
 * Emitted when [method clear] is called or [member text] is set.
 *
*/
$text_set: Signal<() => void>

}

