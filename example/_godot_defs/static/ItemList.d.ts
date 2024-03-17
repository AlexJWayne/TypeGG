
/**
 * This control provides a vertical list of selectable items that may be in a single or in multiple columns, with each item having options for text and an icon. Tooltips are supported and may be different for every item in the list.
 *
 * Selectable items in the list may be selected or deselected and multiple selection may be enabled. Selection with right mouse button may also be enabled to allow use of popup context menus. Items may also be "activated" by double-clicking them or by pressing [kbd]Enter[/kbd].
 *
 * Item text only supports single-line strings. Newline characters (e.g. `\n`) in the string won't produce a newline. Text wrapping is enabled in [constant ICON_MODE_TOP] mode, but the column's width is adjusted to fully fit its content by default. You need to set [member fixed_column_width] greater than zero to wrap the text.
 *
 * All `set_*` methods allow negative item indices, i.e. `-1` to access the last item, `-2` to select the second-to-last item, and so on.
 *
 * **Incremental search:** Like [PopupMenu] and [Tree], [ItemList] supports searching within the list while the control is focused. Press a key that matches the first letter of an item's name to select the first item starting with the given letter. After that point, there are two ways to perform incremental search: 1) Press the same key again before the timeout duration to select the next item starting with the same letter. 2) Press letter keys that match the rest of the word before the timeout duration to match to select the item in question directly. Both of these actions will be reset to the beginning of the list if the timeout duration has passed since the last keystroke was registered. You can adjust the timeout duration by changing [member ProjectSettings.gui/timers/incremental_search_max_interval_msec].
 *
*/
declare class ItemList extends Control  {

  
/**
 * This control provides a vertical list of selectable items that may be in a single or in multiple columns, with each item having options for text and an icon. Tooltips are supported and may be different for every item in the list.
 *
 * Selectable items in the list may be selected or deselected and multiple selection may be enabled. Selection with right mouse button may also be enabled to allow use of popup context menus. Items may also be "activated" by double-clicking them or by pressing [kbd]Enter[/kbd].
 *
 * Item text only supports single-line strings. Newline characters (e.g. `\n`) in the string won't produce a newline. Text wrapping is enabled in [constant ICON_MODE_TOP] mode, but the column's width is adjusted to fully fit its content by default. You need to set [member fixed_column_width] greater than zero to wrap the text.
 *
 * All `set_*` methods allow negative item indices, i.e. `-1` to access the last item, `-2` to select the second-to-last item, and so on.
 *
 * **Incremental search:** Like [PopupMenu] and [Tree], [ItemList] supports searching within the list while the control is focused. Press a key that matches the first letter of an item's name to select the first item starting with the given letter. After that point, there are two ways to perform incremental search: 1) Press the same key again before the timeout duration to select the next item starting with the same letter. 2) Press letter keys that match the rest of the word before the timeout duration to match to select the item in question directly. Both of these actions will be reset to the beginning of the list if the timeout duration has passed since the last keystroke was registered. You can adjust the timeout duration by changing [member ProjectSettings.gui/timers/incremental_search_max_interval_msec].
 *
*/
  new(): ItemList; 
  static "new"(): ItemList 


/** If [code]true[/code], the currently selected item can be selected again. */
allow_reselect: boolean;

/** If [code]true[/code], right mouse button click can select items. */
allow_rmb_select: boolean;

/** If [code]true[/code], allows navigating the [ItemList] with letter keys through incremental search. */
allow_search: boolean;

/** If [code]true[/code], the control will automatically resize the height to fit its content. */
auto_height: boolean;


/**
 * The width all columns will be adjusted to.
 *
 * A value of zero disables the adjustment, each item will have a width equal to the width of its content and the columns will have an uneven width.
 *
*/
fixed_column_width: int;

/**
 * The size all icons will be adjusted to.
 *
 * If either X or Y component is not greater than zero, icon size won't be affected.
 *
*/
fixed_icon_size: Vector2i;


/** The icon position, whether above or to the left of the text. See the [enum IconMode] constants. */
icon_mode: int;

/** The scale of icon applied after [member fixed_icon_size] and transposing takes effect. */
icon_scale: float;

/** The number of items currently in the list. */
item_count: int;

/**
 * Maximum columns the list will have.
 *
 * If greater than zero, the content will be split among the specified columns.
 *
 * A value of zero means unlimited columns, i.e. all items will be put in the same row.
 *
*/
max_columns: int;

/**
 * Maximum lines of text allowed in each item. Space will be reserved even when there is not enough lines of text to display.
 *
 * **Note:** This property takes effect only when [member icon_mode] is [constant ICON_MODE_TOP]. To make the text wrap, [member fixed_column_width] should be greater than zero.
 *
*/
max_text_lines: int;

/**
 * Whether all columns will have the same width.
 *
 * If `true`, the width is equal to the largest column width of all columns.
 *
*/
same_column_width: boolean;

/** Allows single or multiple item selection. See the [enum SelectMode] constants. */
select_mode: int;

/** Sets the clipping behavior when the text exceeds an item's bounding rectangle. See [enum TextServer.OverrunBehavior] for a description of all modes. */
text_overrun_behavior: int;

/** Adds an item to the item list with no text, only an icon. Returns the index of an added item. */
add_icon_item(): int;

/**
 * Adds an item to the item list with specified text. Returns the index of an added item.
 *
 * Specify an [param icon], or use `null` as the [param icon] for a list item with no icon.
 *
 * If selectable is `true`, the list item will be selectable.
 *
*/
add_item(): int;

/** Removes all items from the list. */
clear(): void;

/** Ensures the item associated with the specified index is not selected. */
deselect(): void;

/** Ensures there are no items selected. */
deselect_all(): void;

/** Ensure current selection is visible, adjusting the scroll position as necessary. */
ensure_current_is_visible(): void;

/** Forces an update to the list size based on its items. This happens automatically whenever size of the items, or other relevant settings like [member auto_height], change. The method can be used to trigger the update ahead of next drawing pass. */
force_update_list_size(): void;

/**
 * Returns the item index at the given [param position].
 *
 * When there is no item at that point, -1 will be returned if [param exact] is `true`, and the closest item index will be returned otherwise.
 *
 * **Note:** The returned value is unreliable if called right after modifying the [ItemList], before it redraws in the next frame.
 *
*/
get_item_at_position(): int;

/** Returns the custom background color of the item specified by [param idx] index. */
get_item_custom_bg_color(): Color;

/** Returns the custom foreground color of the item specified by [param idx] index. */
get_item_custom_fg_color(): Color;

/** Returns the icon associated with the specified index. */
get_item_icon(): Texture2D;

/** Returns a [Color] modulating item's icon at the specified index. */
get_item_icon_modulate(): Color;

/** Returns the region of item's icon used. The whole icon will be used if the region has no area. */
get_item_icon_region(): Rect2;

/** Returns item's text language code. */
get_item_language(): string;

/** Returns the metadata value of the specified index. */
get_item_metadata(): any;

/**
 * Returns the position and size of the item with the specified index, in the coordinate system of the [ItemList] node. If [param expand] is `true` the last column expands to fill the rest of the row.
 *
 * **Note:** The returned value is unreliable if called right after modifying the [ItemList], before it redraws in the next frame.
 *
*/
get_item_rect(): Rect2;

/** Returns the text associated with the specified index. */
get_item_text(): string;

/** Returns item's text base writing direction. */
get_item_text_direction(): int;

/** Returns the tooltip hint associated with the specified index. */
get_item_tooltip(): string;

/** Returns an array with the indexes of the selected items. */
get_selected_items(): PackedInt32Array;

/**
 * Returns the vertical scrollbar.
 *
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.
 *
*/
get_v_scroll_bar(): VScrollBar;

/** Returns [code]true[/code] if one or more items are selected. */
is_anything_selected(): boolean;

/** Returns [code]true[/code] if the item at the specified index is disabled. */
is_item_disabled(): boolean;

/** Returns [code]true[/code] if the item icon will be drawn transposed, i.e. the X and Y axes are swapped. */
is_item_icon_transposed(): boolean;

/** Returns [code]true[/code] if the item at the specified index is selectable. */
is_item_selectable(): boolean;

/** Returns [code]true[/code] if the tooltip is enabled for specified item index. */
is_item_tooltip_enabled(): boolean;

/** Returns [code]true[/code] if the item at the specified index is currently selected. */
is_selected(): boolean;

/** Moves item from index [param from_idx] to [param to_idx]. */
move_item(): void;

/** Removes the item specified by [param idx] index from the list. */
remove_item(): void;

/**
 * Select the item at the specified index.
 *
 * **Note:** This method does not trigger the item selection signal.
 *
*/
select(): void;

/** Sets the background color of the item specified by [param idx] index to the specified [Color]. */
set_item_custom_bg_color(): void;

/** Sets the foreground color of the item specified by [param idx] index to the specified [Color]. */
set_item_custom_fg_color(): void;

/**
 * Disables (or enables) the item at the specified index.
 *
 * Disabled items cannot be selected and do not trigger activation signals (when double-clicking or pressing [kbd]Enter[/kbd]).
 *
*/
set_item_disabled(): void;

/** Sets (or replaces) the icon's [Texture2D] associated with the specified index. */
set_item_icon(): void;

/** Sets a modulating [Color] of the item associated with the specified index. */
set_item_icon_modulate(): void;

/** Sets the region of item's icon used. The whole icon will be used if the region has no area. */
set_item_icon_region(): void;

/** Sets whether the item icon will be drawn transposed. */
set_item_icon_transposed(): void;

/** Sets language code of item's text used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
set_item_language(): void;

/** Sets a value (of any type) to be stored with the item associated with the specified index. */
set_item_metadata(): void;

/** Allows or disallows selection of the item associated with the specified index. */
set_item_selectable(): void;

/** Sets text of the item associated with the specified index. */
set_item_text(): void;

/** Sets item's text base writing direction. */
set_item_text_direction(): void;

/** Sets the tooltip hint for the item associated with the specified index. */
set_item_tooltip(): void;

/** Sets whether the tooltip hint is enabled for specified item index. */
set_item_tooltip_enabled(): void;

/** Sorts items in the list by their text. */
sort_items_by_text(): void;

  connect<T extends SignalsOf<ItemList>>(signal: T, method: SignalFunction<ItemList[T]>): number;



/**
 * Icon is drawn above the text.
 *
*/
static ICON_MODE_TOP: any;

/**
 * Icon is drawn to the left of the text.
 *
*/
static ICON_MODE_LEFT: any;

/**
 * Only allow selecting a single item.
 *
*/
static SELECT_SINGLE: any;

/**
 * Allows selecting multiple items by holding [kbd]Ctrl[/kbd] or [kbd]Shift[/kbd].
 *
*/
static SELECT_MULTI: any;


/**
 * Triggered when any mouse click is issued within the rect of the list but on empty space.
 *
*/
$empty_clicked: Signal<() => void>

/**
 * Triggered when specified list item is activated via double-clicking or by pressing [kbd]Enter[/kbd].
 *
*/
$item_activated: Signal<() => void>

/**
 * Triggered when specified list item has been clicked with any mouse button.
 *
 * The click position is also provided to allow appropriate popup of context menus at the correct location.
 *
*/
$item_clicked: Signal<() => void>

/**
 * Triggered when specified item has been selected.
 *
 * [member allow_reselect] must be enabled to reselect an item.
 *
*/
$item_selected: Signal<() => void>

/**
 * Triggered when a multiple selection is altered on a list allowing multiple selection.
 *
*/
$multi_selected: Signal<() => void>

}

