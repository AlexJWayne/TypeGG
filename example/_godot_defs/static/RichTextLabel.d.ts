
/**
 * A control for displaying text that can contain custom fonts, images, and basic formatting. [RichTextLabel] manages these as an internal tag stack. It also adapts itself to given width/heights.
 *
 * **Note:** Assignments to [member text] clear the tag stack and reconstruct it from the property's contents. Any edits made to [member text] will erase previous edits made from other manual sources such as [method append_text] and the `push_*` / [method pop] methods.
 *
 * **Note:** RichTextLabel doesn't support entangled BBCode tags. For example, instead of using [code skip-lint]**bold**bold italic**italic**`, use [code skip-lint]**bold**bold italic******italic**`.
 *
 * **Note:** `push_pop_*` functions won't affect BBCode.
 *
 * **Note:** Unlike [Label], [RichTextLabel] doesn't have a **property** to horizontally align text to the center. Instead, enable [member bbcode_enabled] and surround the text in a [code skip-lint][center]` tag as follows: [code skip-lint][center]Example[/center]`. There is currently no built-in way to vertically align text either, but this can be emulated by relying on anchors/containers and the [member fit_content] property.
 *
*/
declare class RichTextLabel extends Control  {

  
/**
 * A control for displaying text that can contain custom fonts, images, and basic formatting. [RichTextLabel] manages these as an internal tag stack. It also adapts itself to given width/heights.
 *
 * **Note:** Assignments to [member text] clear the tag stack and reconstruct it from the property's contents. Any edits made to [member text] will erase previous edits made from other manual sources such as [method append_text] and the `push_*` / [method pop] methods.
 *
 * **Note:** RichTextLabel doesn't support entangled BBCode tags. For example, instead of using [code skip-lint]**bold**bold italic**italic**`, use [code skip-lint]**bold**bold italic******italic**`.
 *
 * **Note:** `push_pop_*` functions won't affect BBCode.
 *
 * **Note:** Unlike [Label], [RichTextLabel] doesn't have a **property** to horizontally align text to the center. Instead, enable [member bbcode_enabled] and surround the text in a [code skip-lint][center]` tag as follows: [code skip-lint][center]Example[/center]`. There is currently no built-in way to vertically align text either, but this can be emulated by relying on anchors/containers and the [member fit_content] property.
 *
*/
  new(): RichTextLabel; 
  static "new"(): RichTextLabel 


/** If set to something other than [constant TextServer.AUTOWRAP_OFF], the text gets wrapped inside the node's bounding rectangle. To see how each mode behaves, see [enum TextServer.AutowrapMode]. */
autowrap_mode: int;

/** If [code]true[/code], the label uses BBCode formatting. */
bbcode_enabled: boolean;


/** If [code]true[/code], a right-click displays the context menu. */
context_menu_enabled: boolean;

/**
 * The currently installed custom effects. This is an array of [RichTextEffect]s.
 *
 * To add a custom effect, it's more convenient to use [method install_effect].
 *
*/
custom_effects: any[];

/** If [code]true[/code], the selected text will be deselected when focus is lost. */
deselect_on_focus_loss_enabled: boolean;

/** If [code]true[/code], allow drag and drop of selected text. */
drag_and_drop_selection_enabled: boolean;

/** If [code]true[/code], the label's minimum size will be automatically updated to fit its content, matching the behavior of [Label]. */
fit_content: boolean;

/** If [code]true[/code], the label underlines hint tags such as [code skip-lint][hint=description]{text}[/hint][/code]. */
hint_underlined: boolean;

/** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
language: string;

/** If [code]true[/code], the label underlines meta tags such as [code skip-lint][url]{text}[/url][/code]. */
meta_underlined: boolean;

/**
 * The delay after which the loading progress bar is displayed, in milliseconds. Set to `-1` to disable progress bar entirely.
 *
 * **Note:** Progress bar is displayed only if [member threaded] is enabled.
 *
*/
progress_bar_delay: int;

/** If [code]true[/code], the scrollbar is visible. Setting this to [code]false[/code] does not block scrolling completely. See [method scroll_to_line]. */
scroll_active: boolean;

/** If [code]true[/code], the window scrolls down to display new content automatically. */
scroll_following: boolean;

/** If [code]true[/code], the label allows text selection. */
selection_enabled: boolean;

/** If [code]true[/code], shortcut keys for context menu items are enabled, even if the context menu is disabled. */
shortcut_keys_enabled: boolean;

/** Set BiDi algorithm override for the structured text. */
structured_text_bidi_override: int;

/** Set additional options for BiDi override. */
structured_text_bidi_override_options: any[];

/** The number of spaces associated with a single tab length. Does not affect [code]\t[/code] in text tags, only indent tags. */
tab_size: int;

/**
 * The label's text in BBCode format. Is not representative of manual modifications to the internal tag stack. Erases changes made by other methods when edited.
 *
 * **Note:** If [member bbcode_enabled] is `true`, it is unadvised to use the `+=` operator with [member text] (e.g. `text += "some string"`) as it replaces the whole text and can cause slowdowns. It will also erase all BBCode that was added to stack using `push_*` methods. Use [method append_text] for adding text instead, unless you absolutely need to close a tag that was opened in an earlier method call.
 *
*/
text: string;

/** Base text writing direction. */
text_direction: int;

/** If [code]true[/code], text processing is done in a background thread. */
threaded: boolean;

/**
 * The number of characters to display. If set to `-1`, all characters are displayed. This can be useful when animating the text appearing in a dialog box.
 *
 * **Note:** Setting this property updates [member visible_ratio] accordingly.
 *
*/
visible_characters: int;

/** Sets the clipping behavior when [member visible_characters] or [member visible_ratio] is set. See [enum TextServer.VisibleCharactersBehavior] for more info. */
visible_characters_behavior: int;

/**
 * The fraction of characters to display, relative to the total number of characters (see [method get_total_character_count]). If set to `1.0`, all characters are displayed. If set to `0.5`, only half of the characters will be displayed. This can be useful when animating the text appearing in a dialog box.
 *
 * **Note:** Setting this property updates [member visible_characters] accordingly.
 *
*/
visible_ratio: float;

/**
 * Adds an image's opening and closing tags to the tag stack, optionally providing a [param width] and [param height] to resize the image, a [param color] to tint the image and a [param region] to only use parts of the image.
 *
 * If [param width] or [param height] is set to 0, the image size will be adjusted in order to keep the original aspect ratio.
 *
 * If [param width] and [param height] are not set, but [param region] is, the region's rect will be used.
 *
 * [param key] is an optional identifier, that can be used to modify the image via [method update_image].
 *
 * If [param pad] is set, and the image is smaller than the size specified by [param width] and [param height], the image padding is added to match the size instead of upscaling.
 *
 * If [param size_in_percent] is set, [param width] and [param height] values are percentages of the control width instead of pixels.
 *
*/
add_image(): void;

/** Adds raw non-BBCode-parsed text to the tag stack. */
add_text(): void;

/**
 * Parses [param bbcode] and adds tags to the tag stack as needed.
 *
 * **Note:** Using this method, you can't close a tag that was opened in a previous [method append_text] call. This is done to improve performance, especially when updating large RichTextLabels since rebuilding the whole BBCode every time would be slower. If you absolutely need to close a tag in a future method call, append the [member text] instead of using [method append_text].
 *
*/
append_text(): void;

/**
 * Clears the tag stack.
 *
 * **Note:** This method will not modify [member text], but setting [member text] to an empty string also clears the stack.
 *
*/
clear(): void;

/** Clears the current selection. */
deselect(): void;

/**
 * Returns the line number of the character position provided.
 *
 * **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.
 *
*/
get_character_line(): int;

/**
 * Returns the paragraph number of the character position provided.
 *
 * **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.
 *
*/
get_character_paragraph(): int;

/**
 * Returns the height of the content.
 *
 * **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.
 *
*/
get_content_height(): int;

/**
 * Returns the width of the content.
 *
 * **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.
 *
*/
get_content_width(): int;

/**
 * Returns the total number of lines in the text. Wrapped text is counted as multiple lines.
 *
 * **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.
 *
*/
get_line_count(): int;

/**
 * Returns the vertical offset of the line found at the provided index.
 *
 * **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.
 *
*/
get_line_offset(): float;

/**
 * Returns the [PopupMenu] of this [RichTextLabel]. By default, this menu is displayed when right-clicking on the [RichTextLabel].
 *
 * You can add custom menu items or remove standard ones. Make sure your IDs don't conflict with the standard ones (see [enum MenuItems]). For example:
 *
 * @example 
 * 
 * 
 * func _ready():
 *     var menu = get_menu()
 *     # Remove "Select All" item.
 *     menu.remove_item(MENU_SELECT_ALL)
 *     # Add custom items.
 *     menu.add_separator()
 *     menu.add_item("Duplicate Text", MENU_MAX + 1)
 *     # Connect callback.
 *     menu.id_pressed.connect(_on_item_pressed)
 * func _on_item_pressed(id):
 *     if id == MENU_MAX + 1:
 *         add_text("\n" + get_parsed_text())
 * 
 * 
 * public override void _Ready()
 * {
 *     var menu = GetMenu();
 *     // Remove "Select All" item.
 *     menu.RemoveItem(RichTextLabel.MenuItems.SelectAll);
 *     // Add custom items.
 *     menu.AddSeparator();
 *     menu.AddItem("Duplicate Text", RichTextLabel.MenuItems.Max + 1);
 *     // Add event handler.
 *     menu.IdPressed += OnItemPressed;
 * }
 * public void OnItemPressed(int id)
 * {
 *     if (id == TextEdit.MenuItems.Max + 1)
 *     {
 *         AddText("\n" + GetParsedText());
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

/** Returns the total number of paragraphs (newlines or [code]p[/code] tags in the tag stack's text tags). Considers wrapped text as one paragraph. */
get_paragraph_count(): int;

/**
 * Returns the vertical offset of the paragraph found at the provided index.
 *
 * **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.
 *
*/
get_paragraph_offset(): float;

/** Returns the text without BBCode mark-up. */
get_parsed_text(): string;

/** Returns the current selection text. Does not include BBCodes. */
get_selected_text(): string;

/** Returns the current selection first character index if a selection is active, [code]-1[/code] otherwise. Does not include BBCodes. */
get_selection_from(): int;

/** Returns the current selection last character index if a selection is active, [code]-1[/code] otherwise. Does not include BBCodes. */
get_selection_to(): int;

/** Returns the total number of characters from text tags. Does not include BBCodes. */
get_total_character_count(): int;

/**
 * Returns the vertical scrollbar.
 *
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.
 *
*/
get_v_scroll_bar(): VScrollBar;

/**
 * Returns the number of visible lines.
 *
 * **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.
 *
*/
get_visible_line_count(): int;

/**
 * Returns the number of visible paragraphs. A paragraph is considered visible if at least one of its lines is visible.
 *
 * **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_ready] or [signal finished] to determine whether document is fully loaded.
 *
*/
get_visible_paragraph_count(): int;

/** Installs a custom effect. [param effect] should be a valid [RichTextEffect]. */
install_effect(): void;

/** Returns whether the menu is visible. Use this instead of [code]get_menu().visible[/code] to improve performance (so the creation of the menu is avoided). */
is_menu_visible(): boolean;

/** If [member threaded] is enabled, returns [code]true[/code] if the background thread has finished text processing, otherwise always return [code]true[/code]. */
is_ready(): boolean;

/** Executes a given action as defined in the [enum MenuItems] enum. */
menu_option(): void;

/** Adds a newline tag to the tag stack. */
newline(): void;

/** The assignment version of [method append_text]. Clears the tag stack and inserts the new content. */
parse_bbcode(): void;

/** Parses BBCode parameter [param expressions] into a dictionary. */
parse_expressions_for_values(): Dictionary<any, any>;

/** Terminates the current tag. Use after [code]push_*[/code] methods to close BBCodes manually. Does not need to follow [code]add_*[/code] methods. */
pop(): void;

/** Terminates all tags opened by [code]push_*[/code] methods. */
pop_all(): void;

/** Terminates tags opened after the last [method push_context] call (including context marker), or all tags if there's no context marker on the stack. */
pop_context(): void;

/** Adds a [code skip-lint][bgcolor][/code] tag to the tag stack. */
push_bgcolor(): void;

/** Adds a [code skip-lint][font][/code] tag with a bold font to the tag stack. This is the same as adding a [code skip-lint][b][/code] tag if not currently in a [code skip-lint][i][/code] tag. */
push_bold(): void;

/** Adds a [code skip-lint][font][/code] tag with a bold italics font to the tag stack. */
push_bold_italics(): void;

/** Adds a [code skip-lint][cell][/code] tag to the tag stack. Must be inside a [code skip-lint][table][/code] tag. See [method push_table] for details. */
push_cell(): void;

/** Adds a [code skip-lint][color][/code] tag to the tag stack. */
push_color(): void;

/** Adds a context marker to the tag stack. See [method pop_context]. */
push_context(): void;

/** Adds a custom effect tag to the tag stack. The effect does not need to be in [member custom_effects]. The environment is directly passed to the effect. */
push_customfx(): void;

/** Adds a [code skip-lint][dropcap][/code] tag to the tag stack. Drop cap (dropped capital) is a decorative element at the beginning of a paragraph that is larger than the rest of the text. */
push_dropcap(): void;

/** Adds a [code skip-lint][fgcolor][/code] tag to the tag stack. */
push_fgcolor(): void;

/**
 * Adds a [code skip-lint][font]` tag to the tag stack. Overrides default fonts for its duration.
 *
 * Passing `0` to [param font_size] will use the existing default font size.
 *
*/
push_font(): void;

/** Adds a [code skip-lint][font_size][/code] tag to the tag stack. Overrides default font size for its duration. */
push_font_size(): void;

/** Adds a [code skip-lint][hint][/code] tag to the tag stack. Same as BBCode [code skip-lint][hint=something]{text}[/hint][/code]. */
push_hint(): void;

/** Adds an [code skip-lint][indent][/code] tag to the tag stack. Multiplies [param level] by current [member tab_size] to determine new margin length. */
push_indent(): void;

/** Adds a [code skip-lint][font][/code] tag with an italics font to the tag stack. This is the same as adding an [code skip-lint][i][/code] tag if not currently in a [code skip-lint][b][/code] tag. */
push_italics(): void;

/** Adds language code used for text shaping algorithm and Open-Type font features. */
push_language(): void;

/** Adds [code skip-lint][ol][/code] or [code skip-lint][ul][/code] tag to the tag stack. Multiplies [param level] by current [member tab_size] to determine new margin length. */
push_list(): void;

/** Adds a meta tag to the tag stack. Similar to the BBCode [code skip-lint][url=something]{text}[/url][/code], but supports non-[String] metadata types. */
push_meta(): void;

/** Adds a [code skip-lint][font][/code] tag with a monospace font to the tag stack. */
push_mono(): void;

/** Adds a [code skip-lint][font][/code] tag with a normal font to the tag stack. */
push_normal(): void;

/** Adds a [code skip-lint][outline_color][/code] tag to the tag stack. Adds text outline for its duration. */
push_outline_color(): void;

/** Adds a [code skip-lint][outline_size][/code] tag to the tag stack. Overrides default text outline size for its duration. */
push_outline_size(): void;

/** Adds a [code skip-lint][p][/code] tag to the tag stack. */
push_paragraph(): void;

/** Adds a [code skip-lint][s][/code] tag to the tag stack. */
push_strikethrough(): void;

/** Adds a [code skip-lint][table=columns,inline_align][/code] tag to the tag stack. */
push_table(): void;

/** Adds a [code skip-lint][u][/code] tag to the tag stack. */
push_underline(): void;

/**
 * Removes a paragraph of content from the label. Returns `true` if the paragraph exists.
 *
 * The [param paragraph] argument is the index of the paragraph to remove, it can take values in the interval `[0, get_paragraph_count() - 1]`.
 *
*/
remove_paragraph(): boolean;

/** Scrolls the window's top line to match [param line]. */
scroll_to_line(): void;

/** Scrolls the window's top line to match first line of the [param paragraph]. */
scroll_to_paragraph(): void;

/** Scrolls to the beginning of the current selection. */
scroll_to_selection(): void;

/**
 * Select all the text.
 *
 * If [member selection_enabled] is `false`, no selection will occur.
 *
*/
select_all(): void;

/** Sets color of a table cell border. */
set_cell_border_color(): void;

/** Sets inner padding of a table cell. */
set_cell_padding(): void;

/** Sets color of a table cell. Separate colors for alternating rows can be specified. */
set_cell_row_background_color(): void;

/** Sets minimum and maximum size overrides for a table cell. */
set_cell_size_override(): void;

/**
 * Edits the selected column's expansion options. If [param expand] is `true`, the column expands in proportion to its expansion ratio versus the other columns' ratios.
 *
 * For example, 2 columns with ratios 3 and 4 plus 70 pixels in available width would expand 30 and 40 pixels, respectively.
 *
 * If [param expand] is `false`, the column will not contribute to the total ratio.
 *
*/
set_table_column_expand(): void;

/** Updates the existing images with the key [param key]. Only properties specified by [param mask] bits are updated. See [method add_image]. */
update_image(): void;

  connect<T extends SignalsOf<RichTextLabel>>(signal: T, method: SignalFunction<RichTextLabel[T]>): number;



/**
 * Each list item has a number marker.
 *
*/
static LIST_NUMBERS: any;

/**
 * Each list item has a letter marker.
 *
*/
static LIST_LETTERS: any;

/**
 * Each list item has a roman number marker.
 *
*/
static LIST_ROMAN: any;

/**
 * Each list item has a filled circle marker.
 *
*/
static LIST_DOTS: any;

/**
 * Copies the selected text.
 *
*/
static MENU_COPY: any;

/**
 * Selects the whole [RichTextLabel] text.
 *
*/
static MENU_SELECT_ALL: any;

/**
 * Represents the size of the [enum MenuItems] enum.
 *
*/
static MENU_MAX: any;

/**
 * If this bit is set, [method update_image] changes image texture.
 *
*/
static UPDATE_TEXTURE: any;

/**
 * If this bit is set, [method update_image] changes image size.
 *
*/
static UPDATE_SIZE: any;

/**
 * If this bit is set, [method update_image] changes image color.
 *
*/
static UPDATE_COLOR: any;

/**
 * If this bit is set, [method update_image] changes image inline alignment.
 *
*/
static UPDATE_ALIGNMENT: any;

/**
 * If this bit is set, [method update_image] changes image texture region.
 *
*/
static UPDATE_REGION: any;

/**
 * If this bit is set, [method update_image] changes image padding.
 *
*/
static UPDATE_PAD: any;

/**
 * If this bit is set, [method update_image] changes image tooltip.
 *
*/
static UPDATE_TOOLTIP: any;

/**
 * If this bit is set, [method update_image] changes image width from/to percents.
 *
*/
static UPDATE_WIDTH_IN_PERCENT: any;


/**
 * Triggered when the document is fully loaded.
 *
*/
$finished: Signal<() => void>

/**
 * Triggered when the user clicks on content between meta tags. If the meta is defined in text, e.g. [code skip-lint][url={"data"="hi"}]hi[/url]`, then the parameter for this signal will be a [String] type. If a particular type or an object is desired, the [method push_meta] method must be used to manually insert the data into the tag stack.
 *
*/
$meta_clicked: Signal<() => void>

/**
 * Triggers when the mouse exits a meta tag.
 *
*/
$meta_hover_ended: Signal<() => void>

/**
 * Triggers when the mouse enters a meta tag.
 *
*/
$meta_hover_started: Signal<() => void>

}

