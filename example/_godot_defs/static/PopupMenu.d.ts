
/**
 * [PopupMenu] is a modal window used to display a list of options. Useful for toolbars and context menus.
 *
 * The size of a [PopupMenu] can be limited by using [member Window.max_size]. If the height of the list of items is larger than the maximum height of the [PopupMenu], a [ScrollContainer] within the popup will allow the user to scroll the contents. If no maximum size is set, or if it is set to `0`, the [PopupMenu] height will be limited by its parent rect.
 *
 * All `set_*` methods allow negative item indices, i.e. `-1` to access the last item, `-2` to select the second-to-last item, and so on.
 *
 * **Incremental search:** Like [ItemList] and [Tree], [PopupMenu] supports searching within the list while the control is focused. Press a key that matches the first letter of an item's name to select the first item starting with the given letter. After that point, there are two ways to perform incremental search: 1) Press the same key again before the timeout duration to select the next item starting with the same letter. 2) Press letter keys that match the rest of the word before the timeout duration to match to select the item in question directly. Both of these actions will be reset to the beginning of the list if the timeout duration has passed since the last keystroke was registered. You can adjust the timeout duration by changing [member ProjectSettings.gui/timers/incremental_search_max_interval_msec].
 *
 * **Note:** The ID values used for items are limited to 32 bits, not full 64 bits of [int]. This has a range of `-2^32` to `2^32 - 1`, i.e. `-2147483648` to `2147483647`.
 *
*/
declare class PopupMenu extends Popup  {

  
/**
 * [PopupMenu] is a modal window used to display a list of options. Useful for toolbars and context menus.
 *
 * The size of a [PopupMenu] can be limited by using [member Window.max_size]. If the height of the list of items is larger than the maximum height of the [PopupMenu], a [ScrollContainer] within the popup will allow the user to scroll the contents. If no maximum size is set, or if it is set to `0`, the [PopupMenu] height will be limited by its parent rect.
 *
 * All `set_*` methods allow negative item indices, i.e. `-1` to access the last item, `-2` to select the second-to-last item, and so on.
 *
 * **Incremental search:** Like [ItemList] and [Tree], [PopupMenu] supports searching within the list while the control is focused. Press a key that matches the first letter of an item's name to select the first item starting with the given letter. After that point, there are two ways to perform incremental search: 1) Press the same key again before the timeout duration to select the next item starting with the same letter. 2) Press letter keys that match the rest of the word before the timeout duration to match to select the item in question directly. Both of these actions will be reset to the beginning of the list if the timeout duration has passed since the last keystroke was registered. You can adjust the timeout duration by changing [member ProjectSettings.gui/timers/incremental_search_max_interval_msec].
 *
 * **Note:** The ID values used for items are limited to 32 bits, not full 64 bits of [int]. This has a range of `-2^32` to `2^32 - 1`, i.e. `-2147483648` to `2147483647`.
 *
*/
  new(): PopupMenu; 
  static "new"(): PopupMenu 


/** If [code]true[/code], allows navigating [PopupMenu] with letter keys. */
allow_search: boolean;

/** If [code]true[/code], hides the [PopupMenu] when a checkbox or radio button is selected. */
hide_on_checkable_item_selection: boolean;

/** If [code]true[/code], hides the [PopupMenu] when an item is selected. */
hide_on_item_selection: boolean;

/** If [code]true[/code], hides the [PopupMenu] when a state item is selected. */
hide_on_state_item_selection: boolean;

/** The number of items currently in the list. */
item_count: int;

/** Sets the delay time in seconds for the submenu item to popup on mouse hovering. If the popup menu is added as a child of another (acting as a submenu), it will inherit the delay time of the parent menu item. */
submenu_popup_delay: float;

/**
 * Checks the provided [param event] against the [PopupMenu]'s shortcuts and accelerators, and activates the first item with matching events. If [param for_global_only] is `true`, only shortcuts and accelerators with `global` set to `true` will be called.
 *
 * Returns `true` if an item was successfully activated.
 *
 * **Note:** Certain [Control]s, such as [MenuButton], will call this method automatically.
 *
*/
activate_item_by_event(): boolean;

/**
 * Adds a new checkable item with text [param label].
 *
 * An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.
 *
 * **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.
 *
*/
add_check_item(): void;

/**
 * Adds a new checkable item and assigns the specified [Shortcut] to it. Sets the label of the checkbox to the [Shortcut]'s name.
 *
 * An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.
 *
 * **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.
 *
*/
add_check_shortcut(): void;

/**
 * Adds a new checkable item with text [param label] and icon [param texture].
 *
 * An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.
 *
 * **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.
 *
*/
add_icon_check_item(): void;

/**
 * Adds a new checkable item and assigns the specified [Shortcut] and icon [param texture] to it. Sets the label of the checkbox to the [Shortcut]'s name.
 *
 * An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.
 *
 * **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.
 *
*/
add_icon_check_shortcut(): void;

/**
 * Adds a new item with text [param label] and icon [param texture].
 *
 * An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.
 *
*/
add_icon_item(): void;

/** Same as [method add_icon_check_item], but uses a radio check button. */
add_icon_radio_check_item(): void;

/** Same as [method add_icon_check_shortcut], but uses a radio check button. */
add_icon_radio_check_shortcut(): void;

/**
 * Adds a new item and assigns the specified [Shortcut] and icon [param texture] to it. Sets the label of the checkbox to the [Shortcut]'s name.
 *
 * An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.
 *
 * If [param allow_echo] is `true`, the shortcut can be activated with echo events.
 *
*/
add_icon_shortcut(): void;

/**
 * Adds a new item with text [param label].
 *
 * An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.
 *
 * **Note:** The provided [param id] is used only in [signal id_pressed] and [signal id_focused] signals. It's not related to the `index` arguments in e.g. [method set_item_checked].
 *
*/
add_item(): void;

/**
 * Adds a new multistate item with text [param label].
 *
 * Contrarily to normal binary items, multistate items can have more than two states, as defined by [param max_states]. Each press or activate of the item will increase the state by one. The default value is defined by [param default_state].
 *
 * An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.
 *
*/
add_multistate_item(): void;

/**
 * Adds a new radio check button with text [param label].
 *
 * An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.
 *
 * **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.
 *
*/
add_radio_check_item(): void;

/**
 * Adds a new radio check button and assigns a [Shortcut] to it. Sets the label of the checkbox to the [Shortcut]'s name.
 *
 * An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.
 *
 * **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.
 *
*/
add_radio_check_shortcut(): void;

/**
 * Adds a separator between items. Separators also occupy an index, which you can set by using the [param id] parameter.
 *
 * A [param label] can optionally be provided, which will appear at the center of the separator.
 *
*/
add_separator(): void;

/**
 * Adds a [Shortcut].
 *
 * An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.
 *
 * If [param allow_echo] is `true`, the shortcut can be activated with echo events.
 *
*/
add_shortcut(): void;

/**
 * Adds an item that will act as a submenu of the parent [PopupMenu] node when clicked. The [param submenu] argument must be the name of an existing [PopupMenu] that has been added as a child to this node. This submenu will be shown when the item is clicked, hovered for long enough, or activated using the `ui_select` or `ui_right` input actions.
 *
 * An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.
 *
*/
add_submenu_item(): void;

/** Removes all items from the [PopupMenu]. If [param free_submenus] is [code]true[/code], the submenu nodes are automatically freed. */
clear(): void;

/** Returns the index of the currently focused item. Returns [code]-1[/code] if no item is focused. */
get_focused_item(): int;

/** Returns the accelerator of the item at the given [param index]. An accelerator is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The return value is an integer which is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as [code]KEY_MASK_CTRL | KEY_A[/code] ([kbd]Ctrl + A[/kbd]). If no accelerator is defined for the specified [param index], [method get_item_accelerator] returns [code]0[/code] (corresponding to [constant @GlobalScope.KEY_NONE]). */
get_item_accelerator(): int;

/** Returns the icon of the item at the given [param index]. */
get_item_icon(): Texture2D;

/** Returns the maximum allowed width of the icon for the item at the given [param index]. */
get_item_icon_max_width(): int;

/** Returns a [Color] modulating the item's icon at the given [param index]. */
get_item_icon_modulate(): Color;

/** Returns the ID of the item at the given [param index]. [code]id[/code] can be manually assigned, while index can not. */
get_item_id(): int;

/** Returns the horizontal offset of the item at the given [param index]. */
get_item_indent(): int;

/** Returns the index of the item containing the specified [param id]. Index is automatically assigned to each item by the engine and can not be set manually. */
get_item_index(): int;

/** Returns item's text language code. */
get_item_language(): string;

/** Returns the metadata of the specified item, which might be of any type. You can set it with [method set_item_metadata], which provides a simple way of assigning context data to items. */
get_item_metadata(): any;

/** Returns the [Shortcut] associated with the item at the given [param index]. */
get_item_shortcut(): Shortcut;

/** Returns the submenu name of the item at the given [param index]. See [method add_submenu_item] for more info on how to add a submenu. */
get_item_submenu(): string;

/** Returns the text of the item at the given [param index]. */
get_item_text(): string;

/** Returns item's text base writing direction. */
get_item_text_direction(): int;

/** Returns the tooltip associated with the item at the given [param index]. */
get_item_tooltip(): string;

/**
 * Returns `true` if the item at the given [param index] is checkable in some way, i.e. if it has a checkbox or radio button.
 *
 * **Note:** Checkable items just display a checkmark or radio button, but don't have any built-in checking behavior and must be checked/unchecked manually.
 *
*/
is_item_checkable(): boolean;

/** Returns [code]true[/code] if the item at the given [param index] is checked. */
is_item_checked(): boolean;

/**
 * Returns `true` if the item at the given [param index] is disabled. When it is disabled it can't be selected, or its action invoked.
 *
 * See [method set_item_disabled] for more info on how to disable an item.
 *
*/
is_item_disabled(): boolean;

/**
 * Returns `true` if the item at the given [param index] has radio button-style checkability.
 *
 * **Note:** This is purely cosmetic; you must add the logic for checking/unchecking items in radio groups.
 *
*/
is_item_radio_checkable(): boolean;

/** Returns [code]true[/code] if the item is a separator. If it is, it will be displayed as a line. See [method add_separator] for more info on how to add a separator. */
is_item_separator(): boolean;

/** Returns [code]true[/code] if the specified item's shortcut is disabled. */
is_item_shortcut_disabled(): boolean;

/**
 * Removes the item at the given [param index] from the menu.
 *
 * **Note:** The indices of items after the removed item will be shifted by one.
 *
*/
remove_item(): void;

/** Moves the scroll view to make the item at the given [param index] visible. */
scroll_to_item(): void;

/**
 * Sets the currently focused item as the given [param index].
 *
 * Passing `-1` as the index makes so that no item is focused.
 *
*/
set_focused_item(): void;

/** Sets the accelerator of the item at the given [param index]. An accelerator is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. [param accel] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as [code]KEY_MASK_CTRL | KEY_A[/code] ([kbd]Ctrl + A[/kbd]). */
set_item_accelerator(): void;

/**
 * Sets whether the item at the given [param index] has a checkbox. If `false`, sets the type of the item to plain text.
 *
 * **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually.
 *
*/
set_item_as_checkable(): void;

/** Sets the type of the item at the given [param index] to radio button. If [code]false[/code], sets the type of the item to plain text. */
set_item_as_radio_checkable(): void;

/** Mark the item at the given [param index] as a separator, which means that it would be displayed as a line. If [code]false[/code], sets the type of the item to plain text. */
set_item_as_separator(): void;

/** Sets the checkstate status of the item at the given [param index]. */
set_item_checked(): void;

/** Enables/disables the item at the given [param index]. When it is disabled, it can't be selected and its action can't be invoked. */
set_item_disabled(): void;

/** Replaces the [Texture2D] icon of the item at the given [param index]. */
set_item_icon(): void;

/** Sets the maximum allowed width of the icon for the item at the given [param index]. This limit is applied on top of the default size of the icon and on top of [theme_item icon_max_width]. The height is adjusted according to the icon's ratio. */
set_item_icon_max_width(): void;

/** Sets a modulating [Color] of the item's icon at the given [param index]. */
set_item_icon_modulate(): void;

/**
 * Sets the [param id] of the item at the given [param index].
 *
 * The [param id] is used in [signal id_pressed] and [signal id_focused] signals.
 *
*/
set_item_id(): void;

/** Sets the horizontal offset of the item at the given [param index]. */
set_item_indent(): void;

/** Sets language code of item's text used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
set_item_language(): void;

/** Sets the metadata of an item, which may be of any type. You can later get it with [method get_item_metadata], which provides a simple way of assigning context data to items. */
set_item_metadata(): void;

/** Sets the state of a multistate item. See [method add_multistate_item] for details. */
set_item_multistate(): void;

/** Sets a [Shortcut] for the item at the given [param index]. */
set_item_shortcut(): void;

/** Disables the [Shortcut] of the item at the given [param index]. */
set_item_shortcut_disabled(): void;

/** Sets the submenu of the item at the given [param index]. The submenu is the name of a child [PopupMenu] node that would be shown when the item is clicked. */
set_item_submenu(): void;

/** Sets the text of the item at the given [param index]. */
set_item_text(): void;

/** Sets item's text base writing direction. */
set_item_text_direction(): void;

/** Sets the [String] tooltip of the item at the given [param index]. */
set_item_tooltip(): void;

/** Toggles the check state of the item at the given [param index]. */
toggle_item_checked(): void;

/** Cycle to the next state of a multistate item. See [method add_multistate_item] for details. */
toggle_item_multistate(): void;

  connect<T extends SignalsOf<PopupMenu>>(signal: T, method: SignalFunction<PopupMenu[T]>): number;





/**
 * Emitted when the user navigated to an item of some [param id] using the [member ProjectSettings.input/ui_up] or [member ProjectSettings.input/ui_down] input action.
 *
*/
$id_focused: Signal<() => void>

/**
 * Emitted when an item of some [param id] is pressed or its accelerator is activated.
 *
 * **Note:** If [param id] is negative (either explicitly or due to overflow), this will return the corresponding index instead.
 *
*/
$id_pressed: Signal<() => void>

/**
 * Emitted when an item of some [param index] is pressed or its accelerator is activated.
 *
*/
$index_pressed: Signal<() => void>

/**
 * Emitted when any item is added, modified or removed.
 *
*/
$menu_changed: Signal<() => void>

}

