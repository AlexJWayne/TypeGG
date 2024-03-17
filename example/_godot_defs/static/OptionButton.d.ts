
/**
 * [OptionButton] is a type of button that brings up a dropdown with selectable items when pressed. The item selected becomes the "current" item and is displayed as the button text.
 *
 * See also [BaseButton] which contains common properties and methods associated with this node.
 *
 * **Note:** The ID values used for items are limited to 32 bits, not full 64 bits of [int]. This has a range of `-2^32` to `2^32 - 1`, i.e. `-2147483648` to `2147483647`.
 *
 * **Note:** The [member Button.text] and [member Button.icon] properties are set automatically based on the selected item. They shouldn't be changed manually.
 *
*/
declare class OptionButton extends Button  {

  
/**
 * [OptionButton] is a type of button that brings up a dropdown with selectable items when pressed. The item selected becomes the "current" item and is displayed as the button text.
 *
 * See also [BaseButton] which contains common properties and methods associated with this node.
 *
 * **Note:** The ID values used for items are limited to 32 bits, not full 64 bits of [int]. This has a range of `-2^32` to `2^32 - 1`, i.e. `-2147483648` to `2147483647`.
 *
 * **Note:** The [member Button.text] and [member Button.icon] properties are set automatically based on the selected item. They shouldn't be changed manually.
 *
*/
  new(): OptionButton; 
  static "new"(): OptionButton 




/** If [code]true[/code], the currently selected item can be selected again. */
allow_reselect: boolean;

/**
 * If `true`, minimum size will be determined by the longest item's text, instead of the currently selected one's.
 *
 * **Note:** For performance reasons, the minimum size doesn't update immediately when adding, removing or modifying items.
 *
*/
fit_to_longest_item: boolean;

/** The number of items to select from. */
item_count: int;

/** The index of the currently selected item, or [code]-1[/code] if no item is selected. */
selected: int;


/** Adds an item, with a [param texture] icon, text [param label] and (optionally) [param id]. If no [param id] is passed, the item index will be used as the item's ID. New items are appended at the end. */
add_icon_item(): void;

/** Adds an item, with text [param label] and (optionally) [param id]. If no [param id] is passed, the item index will be used as the item's ID. New items are appended at the end. */
add_item(): void;

/** Adds a separator to the list of items. Separators help to group items, and can optionally be given a [param text] header. A separator also gets an index assigned, and is appended at the end of the item list. */
add_separator(): void;

/** Clears all the items in the [OptionButton]. */
clear(): void;

/** Returns the icon of the item at index [param idx]. */
get_item_icon(): Texture2D;

/** Returns the ID of the item at index [param idx]. */
get_item_id(): int;

/** Returns the index of the item with the given [param id]. */
get_item_index(): int;

/** Retrieves the metadata of an item. Metadata may be any type and can be used to store extra information about an item, such as an external string ID. */
get_item_metadata(): any;

/** Returns the text of the item at index [param idx]. */
get_item_text(): string;

/** Returns the tooltip of the item at index [param idx]. */
get_item_tooltip(): string;

/**
 * Returns the [PopupMenu] contained in this button.
 *
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.
 *
*/
get_popup(): PopupMenu;

/**
 * Returns the index of the first item which is not disabled, or marked as a separator. If [param from_last] is `true`, the items will be searched in reverse order.
 *
 * Returns `-1` if no item is found.
 *
*/
get_selectable_item(): int;

/** Returns the ID of the selected item, or [code]-1[/code] if no item is selected. */
get_selected_id(): int;

/** Gets the metadata of the selected item. Metadata for items can be set using [method set_item_metadata]. */
get_selected_metadata(): any;

/** Returns [code]true[/code] if this button contains at least one item which is not disabled, or marked as a separator. */
has_selectable_items(): boolean;

/** Returns [code]true[/code] if the item at index [param idx] is disabled. */
is_item_disabled(): boolean;

/** Returns [code]true[/code] if the item at index [param idx] is marked as a separator. */
is_item_separator(): boolean;

/** Removes the item at index [param idx]. */
remove_item(): void;

/**
 * Selects an item by index and makes it the current item. This will work even if the item is disabled.
 *
 * Passing `-1` as the index deselects any currently selected item.
 *
*/
select(): void;

/** If [code]true[/code], shortcuts are disabled and cannot be used to trigger the button. */
set_disable_shortcuts(): void;

/**
 * Sets whether the item at index [param idx] is disabled.
 *
 * Disabled items are drawn differently in the dropdown and are not selectable by the user. If the current selected item is set as disabled, it will remain selected.
 *
*/
set_item_disabled(): void;

/** Sets the icon of the item at index [param idx]. */
set_item_icon(): void;

/** Sets the ID of the item at index [param idx]. */
set_item_id(): void;

/** Sets the metadata of an item. Metadata may be of any type and can be used to store extra information about an item, such as an external string ID. */
set_item_metadata(): void;

/** Sets the text of the item at index [param idx]. */
set_item_text(): void;

/** Sets the tooltip of the item at index [param idx]. */
set_item_tooltip(): void;

/** Adjusts popup position and sizing for the [OptionButton], then shows the [PopupMenu]. Prefer this over using [code]get_popup().popup()[/code]. */
show_popup(): void;

  connect<T extends SignalsOf<OptionButton>>(signal: T, method: SignalFunction<OptionButton[T]>): number;





/**
 * Emitted when the user navigates to an item using the [member ProjectSettings.input/ui_up] or [member ProjectSettings.input/ui_down] input actions. The index of the item selected is passed as argument.
 *
*/
$item_focused: Signal<() => void>

/**
 * Emitted when the current item has been changed by the user. The index of the item selected is passed as argument.
 *
 * [member allow_reselect] must be enabled to reselect an item.
 *
*/
$item_selected: Signal<() => void>

}

