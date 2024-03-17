
/**
 * A single item of a [Tree] control. It can contain other [TreeItem]s as children, which allows it to create a hierarchy. It can also contain text and buttons. [TreeItem] is not a [Node], it is internal to the [Tree].
 *
 * To create a [TreeItem], use [method Tree.create_item] or [method TreeItem.create_child]. To remove a [TreeItem], use [method Object.free].
 *
 * **Note:** The ID values used for buttons are 32-bit, unlike [int] which is always 64-bit. They go from `-2147483648` to `2147483647`.
 *
*/
declare class TreeItem extends Object  {

  
/**
 * A single item of a [Tree] control. It can contain other [TreeItem]s as children, which allows it to create a hierarchy. It can also contain text and buttons. [TreeItem] is not a [Node], it is internal to the [Tree].
 *
 * To create a [TreeItem], use [method Tree.create_item] or [method TreeItem.create_child]. To remove a [TreeItem], use [method Object.free].
 *
 * **Note:** The ID values used for buttons are 32-bit, unlike [int] which is always 64-bit. They go from `-2147483648` to `2147483647`.
 *
*/
  new(): TreeItem; 
  static "new"(): TreeItem 


/** If [code]true[/code], the TreeItem is collapsed. */
collapsed: boolean;

/** The custom minimum height. */
custom_minimum_height: int;

/** If [code]true[/code], folding is disabled for this TreeItem. */
disable_folding: boolean;

/**
 * If `true`, the [TreeItem] is visible (default).
 *
 * Note that if a [TreeItem] is set to not be visible, none of its children will be visible either.
 *
*/
visible: boolean;

/** Adds a button with [Texture2D] [param button] at column [param column]. The [param id] is used to identify the button in the according [signal Tree.button_clicked] signal and can be different from the buttons index. If not specified, the next available index is used, which may be retrieved by calling [method get_button_count] immediately before this method. Optionally, the button can be [param disabled] and have a [param tooltip_text]. */
add_button(): void;

/** Adds a previously unparented [TreeItem] as a direct child of this one. The [param child] item must not be a part of any [Tree] or parented to any [TreeItem]. See also [method remove_child]. */
add_child(): void;

/** Calls the [param method] on the actual TreeItem and its children recursively. Pass parameters as a comma separated list. */
call_recursive(...args: any[]): void;

/** Resets the background color for the given column to default. */
clear_custom_bg_color(): void;

/** Resets the color for the given column to default. */
clear_custom_color(): void;

/**
 * Creates an item and adds it as a child.
 *
 * The new item will be inserted as position [param index] (the default value `-1` means the last position), or it will be the last child if [param index] is higher than the child count.
 *
*/
create_child(): TreeItem;

/** Deselects the given column. */
deselect(): void;

/** Removes the button at index [param button_index] in column [param column]. */
erase_button(): void;

/** Returns the text autowrap mode in the given [param column]. By default it is [constant TextServer.AUTOWRAP_OFF]. */
get_autowrap_mode(): int;

/** Returns the [Texture2D] of the button at index [param button_index] in column [param column]. */
get_button(): Texture2D;

/** Returns the button index if there is a button with ID [param id] in column [param column], otherwise returns -1. */
get_button_by_id(): int;

/** Returns the number of buttons in column [param column]. */
get_button_count(): int;

/** Returns the ID for the button at index [param button_index] in column [param column]. */
get_button_id(): int;

/** Returns the tooltip text for the button at index [param button_index] in column [param column]. */
get_button_tooltip_text(): string;

/** Returns the column's cell mode. */
get_cell_mode(): int;

/**
 * Returns a child item by its [param index] (see [method get_child_count]). This method is often used for iterating all children of an item.
 *
 * Negative indices access the children from the last one.
 *
*/
get_child(): TreeItem;

/** Returns the number of child items. */
get_child_count(): int;

/** Returns an array of references to the item's children. */
get_children(): Node[];

/** Returns the custom background color of column [param column]. */
get_custom_bg_color(): Color;

/** Returns the custom color of column [param column]. */
get_custom_color(): Color;

/** Returns custom font used to draw text in the column [param column]. */
get_custom_font(): Font;

/** Returns custom font size used to draw text in the column [param column]. */
get_custom_font_size(): int;

/** Returns [code]true[/code] if [code]expand_right[/code] is set. */
get_expand_right(): boolean;

/** Returns the TreeItem's first child. */
get_first_child(): TreeItem;

/** Returns the given column's icon [Texture2D]. Error if no icon is set. */
get_icon(): Texture2D;

/** Returns the maximum allowed width of the icon in the given [param column]. */
get_icon_max_width(): int;

/** Returns the [Color] modulating the column's icon. */
get_icon_modulate(): Color;

/** Returns the icon [Texture2D] region as [Rect2]. */
get_icon_region(): Rect2;

/** Returns the node's order in the tree. For example, if called on the first child item the position is [code]0[/code]. */
get_index(): int;

/** Returns item's text language code. */
get_language(): string;

/** Returns the metadata value that was set for the given column using [method set_metadata]. */
get_metadata(): any;

/** Returns the next sibling TreeItem in the tree or a null object if there is none. */
get_next(): TreeItem;

/**
 * Returns the next TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.
 *
 * If [param wrap] is enabled, the method will wrap around to the first element in the tree when called on the last element, otherwise it returns `null`.
 *
*/
get_next_in_tree(): TreeItem;

/**
 * Returns the next visible TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.
 *
 * If [param wrap] is enabled, the method will wrap around to the first visible element in the tree when called on the last visible element, otherwise it returns `null`.
 *
*/
get_next_visible(): TreeItem;

/** Returns the parent TreeItem or a null object if there is none. */
get_parent(): TreeItem;

/** Returns the previous sibling TreeItem in the tree or a null object if there is none. */
get_prev(): TreeItem;

/**
 * Returns the previous TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.
 *
 * If [param wrap] is enabled, the method will wrap around to the last element in the tree when called on the first visible element, otherwise it returns `null`.
 *
*/
get_prev_in_tree(): TreeItem;

/**
 * Returns the previous visible sibling TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.
 *
 * If [param wrap] is enabled, the method will wrap around to the last visible element in the tree when called on the first visible element, otherwise it returns `null`.
 *
*/
get_prev_visible(): TreeItem;

/** Returns the value of a [constant CELL_MODE_RANGE] column. */
get_range(): float;

/** Returns a dictionary containing the range parameters for a given column. The keys are "min", "max", "step", and "expr". */
get_range_config(): Dictionary<any, any>;

/** No documentation provided. */
get_structured_text_bidi_override(): int;

/** No documentation provided. */
get_structured_text_bidi_override_options(): any[];

/** Gets the suffix string shown after the column value. */
get_suffix(): string;

/** Returns the given column's text. */
get_text(): string;

/** Returns the given column's text alignment. */
get_text_alignment(): int;

/** Returns item's text base writing direction. */
get_text_direction(): int;

/** Returns the clipping behavior when the text exceeds the item's bounding rectangle in the given [param column]. By default it is [constant TextServer.OVERRUN_TRIM_ELLIPSIS]. */
get_text_overrun_behavior(): int;

/** Returns the given column's tooltip text. */
get_tooltip_text(): string;

/** Returns the [Tree] that owns this TreeItem. */
get_tree(): Tree;

/**
 * Returns `true` if this [TreeItem], or any of its descendants, is collapsed.
 *
 * If [param only_visible] is `true` it ignores non-visible [TreeItem]s.
 *
*/
is_any_collapsed(): boolean;

/** Returns [code]true[/code] if the button at index [param button_index] for the given [param column] is disabled. */
is_button_disabled(): boolean;

/** Returns [code]true[/code] if the given [param column] is checked. */
is_checked(): boolean;

/** No documentation provided. */
is_custom_set_as_button(): boolean;

/** Returns [code]true[/code] if the given [param column] is multiline editable. */
is_edit_multiline(): boolean;

/** Returns [code]true[/code] if the given [param column] is editable. */
is_editable(): boolean;

/** Returns [code]true[/code] if the given [param column] is indeterminate. */
is_indeterminate(): boolean;

/** Returns [code]true[/code] if the given [param column] is selectable. */
is_selectable(): boolean;

/** Returns [code]true[/code] if the given [param column] is selected. */
is_selected(): boolean;

/**
 * Moves this TreeItem right after the given [param item].
 *
 * **Note:** You can't move to the root or move the root.
 *
*/
move_after(): void;

/**
 * Moves this TreeItem right before the given [param item].
 *
 * **Note:** You can't move to the root or move the root.
 *
*/
move_before(): void;

/** Propagates this item's checked status to its children and parents for the given [param column]. It is possible to process the items affected by this method call by connecting to [signal Tree.check_propagated_to_item]. The order that the items affected will be processed is as follows: the item invoking this method, children of that item, and finally parents of that item. If [param emit_signal] is [code]false[/code], then [signal Tree.check_propagated_to_item] will not be emitted. */
propagate_check(): void;

/**
 * Removes the given child [TreeItem] and all its children from the [Tree]. Note that it doesn't free the item from memory, so it can be reused later (see [method add_child]). To completely remove a [TreeItem] use [method Object.free].
 *
 * **Note:** If you want to move a child from one [Tree] to another, then instead of removing and adding it manually you can use [method move_before] or [method move_after].
 *
*/
remove_child(): void;

/** Selects the given [param column]. */
select(): void;

/** Sets the autowrap mode in the given [param column]. If set to something other than [constant TextServer.AUTOWRAP_OFF], the text gets wrapped inside the cell's bounding rectangle. */
set_autowrap_mode(): void;

/** Sets the given column's button [Texture2D] at index [param button_index] to [param button]. */
set_button(): void;

/** Sets the given column's button color at index [param button_index] to [param color]. */
set_button_color(): void;

/** If [code]true[/code], disables the button at index [param button_index] in the given [param column]. */
set_button_disabled(): void;

/** Sets the tooltip text for the button at index [param button_index] in the given [param column]. */
set_button_tooltip_text(): void;

/** Sets the given column's cell mode to [param mode]. See [enum TreeCellMode] constants. */
set_cell_mode(): void;

/** If [param checked] is [code]true[/code], the given [param column] is checked. Clears column's indeterminate status. */
set_checked(): void;

/** Collapses or uncollapses this [TreeItem] and all the descendants of this item. */
set_collapsed_recursive(): void;

/** No documentation provided. */
set_custom_as_button(): void;

/** Sets the given column's custom background color and whether to just use it as an outline. */
set_custom_bg_color(): void;

/** Sets the given column's custom color. */
set_custom_color(): void;

/**
 * Sets the given column's custom draw callback to [param callback] method on [param object].
 *
 * The [param callback] should accept two arguments: the [TreeItem] that is drawn and its position and size as a [Rect2].
 *
*/
set_custom_draw(): void;

/** Sets custom font used to draw text in the given [param column]. */
set_custom_font(): void;

/** Sets custom font size used to draw text in the given [param column]. */
set_custom_font_size(): void;

/**
 * If [param multiline] is `true`, the given [param column] is multiline editable.
 *
 * **Note:** This option only affects the type of control ([LineEdit] or [TextEdit]) that appears when editing the column. You can set multiline values with [method set_text] even if the column is not multiline editable.
 *
*/
set_edit_multiline(): void;

/** If [param enabled] is [code]true[/code], the given [param column] is editable. */
set_editable(): void;

/** If [param enable] is [code]true[/code], the given [param column] is expanded to the right. */
set_expand_right(): void;

/** Sets the given column's icon [Texture2D]. */
set_icon(): void;

/** Sets the maximum allowed width of the icon in the given [param column]. This limit is applied on top of the default size of the icon and on top of [theme_item Tree.icon_max_width]. The height is adjusted according to the icon's ratio. */
set_icon_max_width(): void;

/** Modulates the given column's icon with [param modulate]. */
set_icon_modulate(): void;

/** Sets the given column's icon's texture region. */
set_icon_region(): void;

/**
 * If [param indeterminate] is `true`, the given [param column] is marked indeterminate.
 *
 * **Note:** If set `true` from `false`, then column is cleared of checked status.
 *
*/
set_indeterminate(): void;

/** Sets language code of item's text used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
set_language(): void;

/** Sets the metadata value for the given column, which can be retrieved later using [method get_metadata]. This can be used, for example, to store a reference to the original data. */
set_metadata(): void;

/** Sets the value of a [constant CELL_MODE_RANGE] column. */
set_range(): void;

/**
 * Sets the range of accepted values for a column. The column must be in the [constant CELL_MODE_RANGE] mode.
 *
 * If [param expr] is `true`, the edit mode slider will use an exponential scale as with [member Range.exp_edit].
 *
*/
set_range_config(): void;

/** If [param selectable] is [code]true[/code], the given [param column] is selectable. */
set_selectable(): void;

/** No documentation provided. */
set_structured_text_bidi_override(): void;

/** No documentation provided. */
set_structured_text_bidi_override_options(): void;

/** Sets a string to be shown after a column's value (for example, a unit abbreviation). */
set_suffix(): void;

/** Sets the given column's text value. */
set_text(): void;

/** Sets the given column's text alignment. See [enum HorizontalAlignment] for possible values. */
set_text_alignment(): void;

/** Sets item's text base writing direction. */
set_text_direction(): void;

/** Sets the clipping behavior when the text exceeds the item's bounding rectangle in the given [param column]. */
set_text_overrun_behavior(): void;

/** Sets the given column's tooltip text. */
set_tooltip_text(): void;

/** No documentation provided. */
uncollapse_tree(): void;

  connect<T extends SignalsOf<TreeItem>>(signal: T, method: SignalFunction<TreeItem[T]>): number;



/**
 * Cell contains a string.
 *
*/
static CELL_MODE_STRING: any;

/**
 * Cell contains a checkbox.
 *
*/
static CELL_MODE_CHECK: any;

/**
 * Cell contains a range.
 *
*/
static CELL_MODE_RANGE: any;

/**
 * Cell contains an icon.
 *
*/
static CELL_MODE_ICON: any;

/** No documentation provided. */
static CELL_MODE_CUSTOM: any;



}

