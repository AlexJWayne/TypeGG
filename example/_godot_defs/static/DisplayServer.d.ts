
/**
 * [DisplayServer] handles everything related to window management. It is separated from [OS] as a single operating system may support multiple display servers.
 *
 * **Headless mode:** Starting the engine with the `--headless` [url=$DOCS_URL/tutorials/editor/command_line_tutorial.html]command line argument[/url] disables all rendering and window management functions. Most functions from [DisplayServer] will return dummy values in this case.
 *
*/
declare class DisplayServerClass extends Object  {

  
/**
 * [DisplayServer] handles everything related to window management. It is separated from [OS] as a single operating system may support multiple display servers.
 *
 * **Headless mode:** Starting the engine with the `--headless` [url=$DOCS_URL/tutorials/editor/command_line_tutorial.html]command line argument[/url] disables all rendering and window management functions. Most functions from [DisplayServer] will return dummy values in this case.
 *
*/
  new(): DisplayServerClass; 
  static "new"(): DisplayServerClass 



/** Returns the user's clipboard as a string if possible. */
clipboard_get(): string;

/** Returns the user's clipboard as an image if possible. */
clipboard_get_image(): Image;

/**
 * Returns the user's [url=https://unix.stackexchange.com/questions/139191/whats-the-difference-between-primary-selection-and-clipboard-buffer]primary[/url] clipboard as a string if possible. This is the clipboard that is set when the user selects text in any application, rather than when pressing [kbd]Ctrl + C[/kbd]. The clipboard data can then be pasted by clicking the middle mouse button in any application that supports the primary clipboard mechanism.
 *
 * **Note:** This method is only implemented on Linux (X11).
 *
*/
clipboard_get_primary(): string;

/** Returns [code]true[/code] if there is a text content on the user's clipboard. */
clipboard_has(): boolean;

/** Returns [code]true[/code] if there is an image content on the user's clipboard. */
clipboard_has_image(): boolean;

/** Sets the user's clipboard content to the given string. */
clipboard_set(): void;

/**
 * Sets the user's [url=https://unix.stackexchange.com/questions/139191/whats-the-difference-between-primary-selection-and-clipboard-buffer]primary[/url] clipboard content to the given string. This is the clipboard that is set when the user selects text in any application, rather than when pressing [kbd]Ctrl + C[/kbd]. The clipboard data can then be pasted by clicking the middle mouse button in any application that supports the primary clipboard mechanism.
 *
 * **Note:** This method is only implemented on Linux (X11).
 *
*/
clipboard_set_primary(): void;

/** Returns the default mouse cursor shape set by [method cursor_set_shape]. */
cursor_get_shape(): int;

/** Sets a custom mouse cursor image for the defined [param shape]. This means the user's operating system and mouse cursor theme will no longer influence the mouse cursor's appearance. The image must be [code]256x256[/code] or smaller for correct appearance. [param hotspot] can optionally be set to define the area where the cursor will click. By default, [param hotspot] is set to [code]Vector2(0, 0)[/code], which is the top-left corner of the image. See also [method cursor_set_shape]. */
cursor_set_custom_image(): void;

/** Sets the default mouse cursor shape. The cursor's appearance will vary depending on the user's operating system and mouse cursor theme. See also [method cursor_get_shape] and [method cursor_set_custom_image]. */
cursor_set_shape(): void;

/**
 * Shows a text input dialog which uses the operating system's native look-and-feel. [param callback] will be called with a [String] argument equal to the text field's contents when the dialog is closed for any reason.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
dialog_input_text(): int;

/**
 * Shows a text dialog which uses the operating system's native look-and-feel. [param callback] will be called when the dialog is closed for any reason.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
dialog_show(): int;

/**
 * Allows the [param process_id] PID to steal focus from this window. In other words, this disables the operating system's focus stealing protection for the specified PID.
 *
 * **Note:** This method is implemented only on Windows.
 *
*/
enable_for_stealing_focus(): void;

/**
 * Displays OS native dialog for selecting files or directories in the file system.
 *
 * Callbacks have the following arguments: `bool status, PackedStringArray selected_paths, int selected_filter_index`.
 *
 * **Note:** This method is implemented if the display server has the [constant FEATURE_NATIVE_DIALOG] feature.
 *
 * **Note:** This method is implemented on Linux, Windows and macOS.
 *
 * **Note:** [param current_directory] might be ignored.
 *
 * **Note:** On Linux, [param show_hidden] is ignored.
 *
 * **Note:** On macOS, native file dialogs have no title.
 *
 * **Note:** On macOS, sandboxed apps will save security-scoped bookmarks to retain access to the opened folders across multiple sessions. Use [method OS.get_granted_permissions] to get a list of saved bookmarks.
 *
*/
file_dialog_show(): int;

/**
 * Forces window manager processing while ignoring all [InputEvent]s. See also [method process_events].
 *
 * **Note:** This method is implemented on Windows and macOS.
 *
*/
force_process_and_drop_events(): void;

/**
 * Returns OS theme accent color. Returns `Color(0, 0, 0, 0)`, if accent color is unknown.
 *
 * **Note:** This method is implemented on macOS and Windows.
 *
*/
get_accent_color(): Color;

/**
 * Returns an [Array] of [Rect2], each of which is the bounding rectangle for a display cutout or notch. These are non-functional areas on edge-to-edge screens used by cameras and sensors. Returns an empty array if the device does not have cutouts. See also [method get_display_safe_area].
 *
 * **Note:** Currently only implemented on Android. Other platforms will return an empty array even if they do have display cutouts or notches.
 *
*/
get_display_cutouts(): Rect2[];

/** Returns the unobscured area of the display where interactive controls should be rendered. See also [method get_display_cutouts]. */
get_display_safe_area(): Rect2i;

/** Returns the index of the screen containing the window with the keyboard focus, or the primary screen if there's no focused window. */
get_keyboard_focus_screen(): int;

/**
 * Returns the name of the [DisplayServer] currently in use. Most operating systems only have a single [DisplayServer], but Linux has access to more than one [DisplayServer] (although only X11 is currently implemented in Godot).
 *
 * The names of built-in display servers are `Windows`, `macOS`, `X11` (Linux), `Android`, `iOS`, `web` (HTML5) and `headless` (when started with the `--headless` [url=$DOCS_URL/tutorials/editor/command_line_tutorial.html]command line argument[/url]).
 *
*/
get_name(): string;

/** Returns index of the primary screen. */
get_primary_screen(): int;

/** Returns the number of displays available. */
get_screen_count(): int;

/** Returns index of the screen which contains specified rectangle. */
get_screen_from_rect(): int;

/**
 * Returns `true` if positions of **OK** and **Cancel** buttons are swapped in dialogs. This is enabled by default on Windows to follow interface conventions, and be toggled by changing [member ProjectSettings.gui/common/swap_cancel_ok].
 *
 * **Note:** This doesn't affect native dialogs such as the ones spawned by [method DisplayServer.dialog_show].
 *
*/
get_swap_cancel_ok(): boolean;

/**
 * Returns the ID of the window at the specified screen [param position] (in pixels). On multi-monitor setups, the screen position is relative to the virtual desktop area. On multi-monitor setups with different screen resolutions or orientations, the origin may be located outside any display like this:
 *
 * @example 
 * 
 * * (0, 0)        +-------+
 *                 |       |
 * +-------------+ |       |
 * |             | |       |
 * |             | |       |
 * +-------------+ +-------+
 * @summary 
 * 
 *
*/
get_window_at_screen_position(): int;

/**
 * Returns the list of Godot window IDs belonging to this process.
 *
 * **Note:** Native dialogs are not included in this list.
 *
*/
get_window_list(): PackedInt32Array;

/**
 * Adds a new checkable item with text [param label] to the global menu with ID [param menu_root].
 *
 * Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.
 *
 * An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).
 *
 * **Note:** The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].
 *
 * **Note:** This method is implemented only on macOS.
 *
 * **Supported system menu IDs:**
 *
 * @example 
 * 
 * "_main" - Main menu (macOS).
 * "_dock" - Dock popup menu (macOS).
 * @summary 
 * 
 *
*/
global_menu_add_check_item(): int;

/**
 * Adds a new checkable item with text [param label] and icon [param icon] to the global menu with ID [param menu_root].
 *
 * Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.
 *
 * An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).
 *
 * **Note:** The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].
 *
 * **Note:** This method is implemented only on macOS.
 *
 * **Supported system menu IDs:**
 *
 * @example 
 * 
 * "_main" - Main menu (macOS).
 * "_dock" - Dock popup menu (macOS).
 * @summary 
 * 
 *
*/
global_menu_add_icon_check_item(): int;

/**
 * Adds a new item with text [param label] and icon [param icon] to the global menu with ID [param menu_root].
 *
 * Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.
 *
 * An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).
 *
 * **Note:** The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].
 *
 * **Note:** This method is implemented only on macOS.
 *
 * **Supported system menu IDs:**
 *
 * @example 
 * 
 * "_main" - Main menu (macOS).
 * "_dock" - Dock popup menu (macOS).
 * @summary 
 * 
 *
*/
global_menu_add_icon_item(): int;

/**
 * Adds a new radio-checkable item with text [param label] and icon [param icon] to the global menu with ID [param menu_root].
 *
 * Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.
 *
 * An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).
 *
 * **Note:** Radio-checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method global_menu_set_item_checked] for more info on how to control it.
 *
 * **Note:** The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].
 *
 * **Note:** This method is implemented only on macOS.
 *
 * **Supported system menu IDs:**
 *
 * @example 
 * 
 * "_main" - Main menu (macOS).
 * "_dock" - Dock popup menu (macOS).
 * @summary 
 * 
 *
*/
global_menu_add_icon_radio_check_item(): int;

/**
 * Adds a new item with text [param label] to the global menu with ID [param menu_root].
 *
 * Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.
 *
 * An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).
 *
 * **Note:** The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].
 *
 * **Note:** This method is implemented only on macOS.
 *
 * **Supported system menu IDs:**
 *
 * @example 
 * 
 * "_main" - Main menu (macOS).
 * "_dock" - Dock popup menu (macOS).
 * @summary 
 * 
 *
*/
global_menu_add_item(): int;

/**
 * Adds a new item with text [param label] to the global menu with ID [param menu_root].
 *
 * Contrarily to normal binary items, multistate items can have more than two states, as defined by [param max_states]. Each press or activate of the item will increase the state by one. The default value is defined by [param default_state].
 *
 * Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.
 *
 * An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).
 *
 * **Note:** By default, there's no indication of the current item state, it should be changed manually.
 *
 * **Note:** The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].
 *
 * **Note:** This method is implemented only on macOS.
 *
 * **Supported system menu IDs:**
 *
 * @example 
 * 
 * "_main" - Main menu (macOS).
 * "_dock" - Dock popup menu (macOS).
 * @summary 
 * 
 *
*/
global_menu_add_multistate_item(): int;

/**
 * Adds a new radio-checkable item with text [param label] to the global menu with ID [param menu_root].
 *
 * Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.
 *
 * An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).
 *
 * **Note:** Radio-checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method global_menu_set_item_checked] for more info on how to control it.
 *
 * **Note:** The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].
 *
 * **Note:** This method is implemented only on macOS.
 *
 * **Supported system menu IDs:**
 *
 * @example 
 * 
 * "_main" - Main menu (macOS).
 * "_dock" - Dock popup menu (macOS).
 * @summary 
 * 
 *
*/
global_menu_add_radio_check_item(): int;

/**
 * Adds a separator between items to the global menu with ID [param menu_root]. Separators also occupy an index.
 *
 * Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.
 *
 * **Note:** This method is implemented only on macOS.
 *
 * **Supported system menu IDs:**
 *
 * @example 
 * 
 * "_main" - Main menu (macOS).
 * "_dock" - Dock popup menu (macOS).
 * @summary 
 * 
 *
*/
global_menu_add_separator(): int;

/**
 * Adds an item that will act as a submenu of the global menu [param menu_root]. The [param submenu] argument is the ID of the global menu root that will be shown when the item is clicked.
 *
 * Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.
 *
 * **Note:** This method is implemented only on macOS.
 *
 * **Supported system menu IDs:**
 *
 * @example 
 * 
 * "_main" - Main menu (macOS).
 * "_dock" - Dock popup menu (macOS).
 * @summary 
 * 
 *
*/
global_menu_add_submenu_item(): int;

/**
 * Removes all items from the global menu with ID [param menu_root].
 *
 * **Note:** This method is implemented only on macOS.
 *
 * **Supported system menu IDs:**
 *
 * @example 
 * 
 * "_main" - Main menu (macOS).
 * "_dock" - Dock popup menu (macOS).
 * @summary 
 * 
 *
*/
global_menu_clear(): void;

/**
 * Returns the accelerator of the item at index [param idx]. Accelerators are special combinations of keys that activate the item, no matter which control is focused.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_get_item_accelerator(): int;

/**
 * Returns the callback of the item at index [param idx].
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_get_item_callback(): Callable;

/**
 * Returns number of items in the global menu with ID [param menu_root].
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_get_item_count(): int;

/**
 * Returns the icon of the item at index [param idx].
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_get_item_icon(): Texture2D;

/**
 * Returns the horizontal offset of the item at the given [param idx].
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_get_item_indentation_level(): int;

/**
 * Returns the index of the item with the specified [param tag]. Index is automatically assigned to each item by the engine. Index can not be set manually.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_get_item_index_from_tag(): int;

/**
 * Returns the index of the item with the specified [param text]. Index is automatically assigned to each item by the engine. Index can not be set manually.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_get_item_index_from_text(): int;

/**
 * Returns the callback of the item accelerator at index [param idx].
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_get_item_key_callback(): Callable;

/**
 * Returns number of states of a multistate item. See [method global_menu_add_multistate_item] for details.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_get_item_max_states(): int;

/**
 * Returns the state of a multistate item. See [method global_menu_add_multistate_item] for details.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_get_item_state(): int;

/**
 * Returns the submenu ID of the item at index [param idx]. See [method global_menu_add_submenu_item] for more info on how to add a submenu.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_get_item_submenu(): string;

/**
 * Returns the metadata of the specified item, which might be of any type. You can set it with [method global_menu_set_item_tag], which provides a simple way of assigning context data to items.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_get_item_tag(): any;

/**
 * Returns the text of the item at index [param idx].
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_get_item_text(): string;

/**
 * Returns the tooltip associated with the specified index [param idx].
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_get_item_tooltip(): string;

/**
 * Returns `true` if the item at index [param idx] is checkable in some way, i.e. if it has a checkbox or radio button.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_is_item_checkable(): boolean;

/**
 * Returns `true` if the item at index [param idx] is checked.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_is_item_checked(): boolean;

/**
 * Returns `true` if the item at index [param idx] is disabled. When it is disabled it can't be selected, or its action invoked.
 *
 * See [method global_menu_set_item_disabled] for more info on how to disable an item.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_is_item_disabled(): boolean;

/**
 * Returns `true` if the item at index [param idx] is hidden.
 *
 * See [method global_menu_set_item_hidden] for more info on how to hide an item.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_is_item_hidden(): boolean;

/**
 * Returns `true` if the item at index [param idx] has radio button-style checkability.
 *
 * **Note:** This is purely cosmetic; you must add the logic for checking/unchecking items in radio groups.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_is_item_radio_checkable(): boolean;

/**
 * Removes the item at index [param idx] from the global menu [param menu_root].
 *
 * **Note:** The indices of items after the removed item will be shifted by one.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_remove_item(): void;

/**
 * Sets the accelerator of the item at index [param idx]. [param keycode] can be a single [enum Key], or a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_set_item_accelerator(): void;

/**
 * Sets the callback of the item at index [param idx]. Callback is emitted when an item is pressed.
 *
 * **Note:** The [param callback] Callable needs to accept exactly one Variant parameter, the parameter passed to the Callable will be the value passed to the `tag` parameter when the menu item was created.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_set_item_callback(): void;

/**
 * Sets whether the item at index [param idx] has a checkbox. If `false`, sets the type of the item to plain text.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_set_item_checkable(): void;

/**
 * Sets the checkstate status of the item at index [param idx].
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_set_item_checked(): void;

/**
 * Enables/disables the item at index [param idx]. When it is disabled, it can't be selected and its action can't be invoked.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_set_item_disabled(): void;

/**
 * Hides/shows the item at index [param idx]. When it is hidden, an item does not appear in a menu and its action cannot be invoked.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_set_item_hidden(): void;

/**
 * Sets the callback of the item at index [param idx]. The callback is emitted when an item is hovered.
 *
 * **Note:** The [param callback] Callable needs to accept exactly one Variant parameter, the parameter passed to the Callable will be the value passed to the `tag` parameter when the menu item was created.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_set_item_hover_callbacks(): void;

/**
 * Replaces the [Texture2D] icon of the specified [param idx].
 *
 * **Note:** This method is implemented only on macOS.
 *
 * **Note:** This method is not supported by macOS "_dock" menu items.
 *
*/
global_menu_set_item_icon(): void;

/**
 * Sets the horizontal offset of the item at the given [param idx].
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_set_item_indentation_level(): void;

/**
 * Sets the callback of the item at index [param idx]. Callback is emitted when its accelerator is activated.
 *
 * **Note:** The [param key_callback] Callable needs to accept exactly one Variant parameter, the parameter passed to the Callable will be the value passed to the `tag` parameter when the menu item was created.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_set_item_key_callback(): void;

/**
 * Sets number of state of a multistate item. See [method global_menu_add_multistate_item] for details.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_set_item_max_states(): void;

/**
 * Sets the type of the item at the specified index [param idx] to radio button. If `false`, sets the type of the item to plain text.
 *
 * **Note:** This is purely cosmetic; you must add the logic for checking/unchecking items in radio groups.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_set_item_radio_checkable(): void;

/**
 * Sets the state of a multistate item. See [method global_menu_add_multistate_item] for details.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_set_item_state(): void;

/**
 * Sets the submenu of the item at index [param idx]. The submenu is the ID of a global menu root that would be shown when the item is clicked.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_set_item_submenu(): void;

/**
 * Sets the metadata of an item, which may be of any type. You can later get it with [method global_menu_get_item_tag], which provides a simple way of assigning context data to items.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_set_item_tag(): void;

/**
 * Sets the text of the item at index [param idx].
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_set_item_text(): void;

/**
 * Sets the [String] tooltip of the item at the specified index [param idx].
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
global_menu_set_item_tooltip(): void;

/** Registers callables to emit when the menu is respectively about to show or closed. */
global_menu_set_popup_callbacks(): void;

/** Returns [code]true[/code] if the specified [param feature] is supported by the current [DisplayServer], [code]false[/code] otherwise. */
has_feature(): boolean;

/**
 * Returns the text selection in the [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url] composition string, with the [Vector2i]'s `x` component being the caret position and `y` being the length of the selection.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
ime_get_selection(): Vector2i;

/**
 * Returns the composition string contained within the [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url] window.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
ime_get_text(): string;

/**
 * Returns `true` if OS is using dark mode.
 *
 * **Note:** This method is implemented on Android, iOS, macOS, Windows, and Linux (X11).
 *
*/
is_dark_mode(): boolean;

/**
 * Returns `true` if OS supports dark mode.
 *
 * **Note:** This method is implemented on Android, iOS, macOS, Windows, and Linux (X11).
 *
*/
is_dark_mode_supported(): boolean;

/** Returns [code]true[/code] if touch events are available (Android or iOS), the capability is detected on the Web platform or if [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse] is [code]true[/code]. */
is_touchscreen_available(): boolean;

/**
 * Returns active keyboard layout index.
 *
 * **Note:** This method is implemented on Linux (X11), macOS and Windows.
 *
*/
keyboard_get_current_layout(): int;

/**
 * Converts a physical (US QWERTY) [param keycode] to one in the active keyboard layout.
 *
 * **Note:** This method is implemented on Linux (X11), macOS and Windows.
 *
*/
keyboard_get_keycode_from_physical(): int;

/**
 * Converts a physical (US QWERTY) [param keycode] to localized label printed on the key in the active keyboard layout.
 *
 * **Note:** This method is implemented on Linux (X11), macOS and Windows.
 *
*/
keyboard_get_label_from_physical(): int;

/**
 * Returns the number of keyboard layouts.
 *
 * **Note:** This method is implemented on Linux (X11), macOS and Windows.
 *
*/
keyboard_get_layout_count(): int;

/**
 * Returns the ISO-639/BCP-47 language code of the keyboard layout at position [param index].
 *
 * **Note:** This method is implemented on Linux (X11), macOS and Windows.
 *
*/
keyboard_get_layout_language(): string;

/**
 * Returns the localized name of the keyboard layout at position [param index].
 *
 * **Note:** This method is implemented on Linux (X11), macOS and Windows.
 *
*/
keyboard_get_layout_name(): string;

/**
 * Sets the active keyboard layout.
 *
 * **Note:** This method is implemented on Linux (X11), macOS and Windows.
 *
*/
keyboard_set_current_layout(): void;

/** Returns the current state of mouse buttons (whether each button is pressed) as a bitmask. If multiple mouse buttons are pressed at the same time, the bits are added together. Equivalent to [method Input.get_mouse_button_mask]. */
mouse_get_button_state(): int;

/** Returns the current mouse mode. See also [method mouse_set_mode]. */
mouse_get_mode(): int;

/** Returns the mouse cursor's current position in screen coordinates. */
mouse_get_position(): Vector2i;

/** Sets the current mouse mode. See also [method mouse_get_mode]. */
mouse_set_mode(): void;

/** Perform window manager processing, including input flushing. See also [method force_process_and_drop_events], [method Input.flush_buffered_events] and [member Input.use_accumulated_input]. */
process_events(): void;

/**
 * Returns the dots per inch density of the specified screen. If [param screen] is [constant SCREEN_OF_MAIN_WINDOW] (the default value), a screen with the main window will be used.
 *
 * **Note:** On macOS, returned value is inaccurate if fractional display scaling mode is used.
 *
 * **Note:** On Android devices, the actual screen densities are grouped into six generalized densities:
 *
 * @example 
 * 
 *    ldpi - 120 dpi
 *    mdpi - 160 dpi
 *    hdpi - 240 dpi
 *   xhdpi - 320 dpi
 *  xxhdpi - 480 dpi
 * xxxhdpi - 640 dpi
 * @summary 
 * 
 *
 * **Note:** This method is implemented on Android, Linux (X11), macOS and Windows. Returns `72` on unsupported platforms.
 *
*/
screen_get_dpi(): int;

/**
 * Returns screenshot of the [param screen].
 *
 * **Note:** This method is implemented on Linux (X11), macOS, and Windows.
 *
 * **Note:** On macOS, this method requires "Screen Recording" permission, if permission is not granted it will return desktop wallpaper color.
 *
*/
screen_get_image(): Image;

/**
 * Returns the greatest scale factor of all screens.
 *
 * **Note:** On macOS returned value is `2.0` if there is at least one hiDPI (Retina) screen in the system, and `1.0` in all other cases.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
screen_get_max_scale(): float;

/**
 * Returns the [param screen]'s current orientation. See also [method screen_set_orientation].
 *
 * **Note:** This method is implemented on Android and iOS.
 *
*/
screen_get_orientation(): int;

/**
 * Returns color of the display pixel at the [param position].
 *
 * **Note:** This method is implemented on Linux (X11), macOS, and Windows.
 *
 * **Note:** On macOS, this method requires "Screen Recording" permission, if permission is not granted it will return desktop wallpaper color.
 *
*/
screen_get_pixel(): Color;

/**
 * Returns the screen's top-left corner position in pixels. On multi-monitor setups, the screen position is relative to the virtual desktop area. On multi-monitor setups with different screen resolutions or orientations, the origin may be located outside any display like this:
 *
 * @example 
 * 
 * * (0, 0)        +-------+
 *                 |       |
 * +-------------+ |       |
 * |             | |       |
 * |             | |       |
 * +-------------+ +-------+
 * @summary 
 * 
 *
 * See also [method screen_get_size].
 *
*/
screen_get_position(): Vector2i;

/**
 * Returns the current refresh rate of the specified screen. If [param screen] is [constant SCREEN_OF_MAIN_WINDOW] (the default value), a screen with the main window will be used.
 *
 * **Note:** Returns `-1.0` if the DisplayServer fails to find the refresh rate for the specified screen. On Web, [method screen_get_refresh_rate] will always return `-1.0` as there is no way to retrieve the refresh rate on that platform.
 *
 * To fallback to a default refresh rate if the method fails, try:
 *
 * @example 
 * 
 * var refresh_rate = DisplayServer.screen_get_refresh_rate()
 * if refresh_rate < 0:
 *     refresh_rate = 60.0
 * @summary 
 * 
 *
*/
screen_get_refresh_rate(): float;

/**
 * Returns the scale factor of the specified screen by index.
 *
 * **Note:** On macOS returned value is `2.0` for hiDPI (Retina) screen, and `1.0` for all other cases.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
screen_get_scale(): float;

/** Returns the screen's size in pixels. See also [method screen_get_position] and [method screen_get_usable_rect]. */
screen_get_size(): Vector2i;

/** Returns the portion of the screen that is not obstructed by a status bar in pixels. See also [method screen_get_size]. */
screen_get_usable_rect(): Rect2i;

/** Returns [code]true[/code] if the screen should never be turned off by the operating system's power-saving measures. See also [method screen_set_keep_on]. */
screen_is_kept_on(): boolean;

/** Sets whether the screen should never be turned off by the operating system's power-saving measures. See also [method screen_is_kept_on]. */
screen_set_keep_on(): void;

/**
 * Sets the [param screen]'s [param orientation]. See also [method screen_get_orientation].
 *
 * **Note:** On iOS, this method has no effect if [member ProjectSettings.display/window/handheld/orientation] is not set to [constant SCREEN_SENSOR].
 *
*/
screen_set_orientation(): void;

/** Sets the window icon (usually displayed in the top-left corner) with an [Image]. To use icons in the operating system's native format, use [method set_native_icon] instead. */
set_icon(): void;

/** Sets the window icon (usually displayed in the top-left corner) in the operating system's [i]native[/i] format. The file at [param filename] must be in [code].ico[/code] format on Windows or [code].icns[/code] on macOS. By using specially crafted [code].ico[/code] or [code].icns[/code] icons, [method set_native_icon] allows specifying different icons depending on the size the icon is displayed at. This size is determined by the operating system and user preferences (including the display scale factor). To use icons in other formats, use [method set_icon] instead. */
set_native_icon(): void;

/**
 * Returns current active tablet driver name.
 *
 * **Note:** This method is implemented only on Windows.
 *
*/
tablet_get_current_driver(): string;

/**
 * Returns the total number of available tablet drivers.
 *
 * **Note:** This method is implemented only on Windows.
 *
*/
tablet_get_driver_count(): int;

/**
 * Returns the tablet driver name for the given index.
 *
 * **Note:** This method is implemented only on Windows.
 *
*/
tablet_get_driver_name(): string;

/**
 * Set active tablet driver name.
 *
 * **Note:** This method is implemented only on Windows.
 *
*/
tablet_set_current_driver(): void;

/**
 * Returns an [Array] of voice information dictionaries.
 *
 * Each [Dictionary] contains two [String] entries:
 *
 * - `name` is voice name.
 *
 * - `id` is voice identifier.
 *
 * - `language` is language code in `lang_Variant` format. The `lang` part is a 2 or 3-letter code based on the ISO-639 standard, in lowercase. The [code skip-lint]Variant` part is an engine-dependent string describing country, region or/and dialect.
 *
 * Note that Godot depends on system libraries for text-to-speech functionality. These libraries are installed by default on Windows and macOS, but not on all Linux distributions. If they are not present, this method will return an empty list. This applies to both Godot users on Linux, as well as end-users on Linux running Godot games that use text-to-speech.
 *
 * **Note:** This method is implemented on Android, iOS, Web, Linux (X11), macOS, and Windows.
 *
 * **Note:** [member ProjectSettings.audio/general/text_to_speech] should be `true` to use text-to-speech.
 *
*/
tts_get_voices(): Dictionary[];

/**
 * Returns an [PackedStringArray] of voice identifiers for the [param language].
 *
 * **Note:** This method is implemented on Android, iOS, Web, Linux (X11), macOS, and Windows.
 *
 * **Note:** [member ProjectSettings.audio/general/text_to_speech] should be `true` to use text-to-speech.
 *
*/
tts_get_voices_for_language(): PackedStringArray;

/**
 * Returns `true` if the synthesizer is in a paused state.
 *
 * **Note:** This method is implemented on Android, iOS, Web, Linux (X11), macOS, and Windows.
 *
 * **Note:** [member ProjectSettings.audio/general/text_to_speech] should be `true` to use text-to-speech.
 *
*/
tts_is_paused(): boolean;

/**
 * Returns `true` if the synthesizer is generating speech, or have utterance waiting in the queue.
 *
 * **Note:** This method is implemented on Android, iOS, Web, Linux (X11), macOS, and Windows.
 *
 * **Note:** [member ProjectSettings.audio/general/text_to_speech] should be `true` to use text-to-speech.
 *
*/
tts_is_speaking(): boolean;

/**
 * Puts the synthesizer into a paused state.
 *
 * **Note:** This method is implemented on Android, iOS, Web, Linux (X11), macOS, and Windows.
 *
 * **Note:** [member ProjectSettings.audio/general/text_to_speech] should be `true` to use text-to-speech.
 *
*/
tts_pause(): void;

/**
 * Resumes the synthesizer if it was paused.
 *
 * **Note:** This method is implemented on Android, iOS, Web, Linux (X11), macOS, and Windows.
 *
 * **Note:** [member ProjectSettings.audio/general/text_to_speech] should be `true` to use text-to-speech.
 *
*/
tts_resume(): void;

/**
 * Adds a callback, which is called when the utterance has started, finished, canceled or reached a text boundary.
 *
 * - [constant TTS_UTTERANCE_STARTED], [constant TTS_UTTERANCE_ENDED], and [constant TTS_UTTERANCE_CANCELED] callable's method should take one [int] parameter, the utterance ID.
 *
 * - [constant TTS_UTTERANCE_BOUNDARY] callable's method should take two [int] parameters, the index of the character and the utterance ID.
 *
 * **Note:** The granularity of the boundary callbacks is engine dependent.
 *
 * **Note:** This method is implemented on Android, iOS, Web, Linux (X11), macOS, and Windows.
 *
 * **Note:** [member ProjectSettings.audio/general/text_to_speech] should be `true` to use text-to-speech.
 *
*/
tts_set_utterance_callback(): void;

/**
 * Adds an utterance to the queue. If [param interrupt] is `true`, the queue is cleared first.
 *
 * - [param voice] identifier is one of the `"id"` values returned by [method tts_get_voices] or one of the values returned by [method tts_get_voices_for_language].
 *
 * - [param volume] ranges from `0` (lowest) to `100` (highest).
 *
 * - [param pitch] ranges from `0.0` (lowest) to `2.0` (highest), `1.0` is default pitch for the current voice.
 *
 * - [param rate] ranges from `0.1` (lowest) to `10.0` (highest), `1.0` is a normal speaking rate. Other values act as a percentage relative.
 *
 * - [param utterance_id] is passed as a parameter to the callback functions.
 *
 * **Note:** On Windows and Linux (X11), utterance [param text] can use SSML markup. SSML support is engine and voice dependent. If the engine does not support SSML, you should strip out all XML markup before calling [method tts_speak].
 *
 * **Note:** The granularity of pitch, rate, and volume is engine and voice dependent. Values may be truncated.
 *
 * **Note:** This method is implemented on Android, iOS, Web, Linux (X11), macOS, and Windows.
 *
 * **Note:** [member ProjectSettings.audio/general/text_to_speech] should be `true` to use text-to-speech.
 *
*/
tts_speak(): void;

/**
 * Stops synthesis in progress and removes all utterances from the queue.
 *
 * **Note:** This method is implemented on Android, iOS, Web, Linux (X11), macOS, and Windows.
 *
 * **Note:** [member ProjectSettings.audio/general/text_to_speech] should be `true` to use text-to-speech.
 *
*/
tts_stop(): void;

/** Returns the on-screen keyboard's height in pixels. Returns 0 if there is no keyboard or if it is currently hidden. */
virtual_keyboard_get_height(): int;

/** Hides the virtual keyboard if it is shown, does nothing otherwise. */
virtual_keyboard_hide(): void;

/**
 * Shows the virtual keyboard if the platform has one.
 *
 * [param existing_text] parameter is useful for implementing your own [LineEdit] or [TextEdit], as it tells the virtual keyboard what text has already been typed (the virtual keyboard uses it for auto-correct and predictions).
 *
 * [param position] parameter is the screen space [Rect2] of the edited text.
 *
 * [param type] parameter allows configuring which type of virtual keyboard to show.
 *
 * [param max_length] limits the number of characters that can be entered if different from `-1`.
 *
 * [param cursor_start] can optionally define the current text cursor position if [param cursor_end] is not set.
 *
 * [param cursor_start] and [param cursor_end] can optionally define the current text selection.
 *
 * **Note:** This method is implemented on Android, iOS and Web.
 *
*/
virtual_keyboard_show(): void;

/**
 * Sets the mouse cursor position to the given [param position] relative to an origin at the upper left corner of the currently focused game Window Manager window.
 *
 * **Note:** [method warp_mouse] is only supported on Windows, macOS and Linux. It has no effect on Android, iOS and Web.
 *
*/
warp_mouse(): void;

/** Returns [code]true[/code] if anything can be drawn in the window specified by [param window_id], [code]false[/code] otherwise. Using the [code]--disable-render-loop[/code] command line argument or a headless build will return [code]false[/code]. */
window_can_draw(): boolean;

/** Returns ID of the active popup window, or [constant INVALID_WINDOW_ID] if there is none. */
window_get_active_popup(): int;

/** Returns the [method Object.get_instance_id] of the [Window] the [param window_id] is attached to. */
window_get_attached_instance_id(): int;

/** Returns the screen the window specified by [param window_id] is currently positioned on. If the screen overlaps multiple displays, the screen where the window's center is located is returned. See also [method window_set_current_screen]. */
window_get_current_screen(): int;

/** Returns the current value of the given window's [param flag]. */
window_get_flag(): boolean;

/** Returns the window's maximum size (in pixels). See also [method window_set_max_size]. */
window_get_max_size(): Vector2i;

/** Returns the window's minimum size (in pixels). See also [method window_set_min_size]. */
window_get_min_size(): Vector2i;

/** Returns the mode of the given window. */
window_get_mode(): int;

/**
 * Returns internal structure pointers for use in plugins.
 *
 * **Note:** This method is implemented on Android, Linux (X11), macOS and Windows.
 *
*/
window_get_native_handle(): int;

/** Returns the bounding box of control, or menu item that was used to open the popup window, in the screen coordinate system. */
window_get_popup_safe_rect(): Rect2i;

/** Returns the position of the client area of the given window on the screen. */
window_get_position(): Vector2i;

/** Returns the position of the given window on the screen including the borders drawn by the operating system. See also [method window_get_position]. */
window_get_position_with_decorations(): Vector2i;

/** Returns left margins ([code]x[/code]), right margins ([code]y[/code]) and height ([code]z[/code]) of the title that are safe to use (contains no buttons or other elements) when [constant WINDOW_FLAG_EXTEND_TO_TITLE] flag is set. */
window_get_safe_title_margins(): Vector3i;

/** Returns the size of the window specified by [param window_id] (in pixels), excluding the borders drawn by the operating system. This is also called the "client area". See also [method window_get_size_with_decorations], [method window_set_size] and [method window_get_position]. */
window_get_size(): Vector2i;

/** Returns the size of the window specified by [param window_id] (in pixels), including the borders drawn by the operating system. See also [method window_get_size]. */
window_get_size_with_decorations(): Vector2i;

/**
 * Returns the estimated window title bar size (including text and window buttons) for the window specified by [param window_id] (in pixels). This method does not change the window title.
 *
 * **Note:** This method is implemented on macOS and Windows.
 *
*/
window_get_title_size(): Vector2i;

/** Returns the V-Sync mode of the given window. */
window_get_vsync_mode(): int;

/** Returns [code]true[/code] if the window specified by [param window_id] is focused. */
window_is_focused(): boolean;

/** Returns [code]true[/code] if the given window can be maximized (the maximize button is enabled). */
window_is_maximize_allowed(): boolean;

/**
 * Returns `true`, if double-click on a window title should maximize it.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
window_maximize_on_title_dbl_click(): boolean;

/**
 * Returns `true`, if double-click on a window title should minimize it.
 *
 * **Note:** This method is implemented only on macOS.
 *
*/
window_minimize_on_title_dbl_click(): boolean;

/** Moves the window specified by [param window_id] to the foreground, so that it is visible over other windows. */
window_move_to_foreground(): void;

/** Makes the window specified by [param window_id] request attention, which is materialized by the window title and taskbar entry blinking until the window is focused. This usually has no visible effect if the window is currently focused. The exact behavior varies depending on the operating system. */
window_request_attention(): void;

/** Moves the window specified by [param window_id] to the specified [param screen]. See also [method window_get_current_screen]. */
window_set_current_screen(): void;

/**
 * Sets the [param callback] that should be called when files are dropped from the operating system's file manager to the window specified by [param window_id].
 *
 * **Warning:** Advanced users only! Adding such a callback to a [Window] node will override its default implementation, which can introduce bugs.
 *
 * **Note:** This method is implemented on Windows, macOS, Linux (X11) and Web.
 *
*/
window_set_drop_files_callback(): void;

/**
 * If set to `true`, this window will always stay on top of its parent window, parent window will ignore input while this window is opened.
 *
 * **Note:** On macOS, exclusive windows are confined to the same space (virtual desktop or screen) as the parent window.
 *
 * **Note:** This method is implemented on macOS and Windows.
 *
*/
window_set_exclusive(): void;

/** Enables or disables the given window's given [param flag]. See [enum WindowFlags] for possible values and their behavior. */
window_set_flag(): void;

/** Sets whether [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url] should be enabled for the window specified by [param window_id]. See also [method window_set_ime_position]. */
window_set_ime_active(): void;

/** Sets the position of the [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url] popup for the specified [param window_id]. Only effective if [method window_set_ime_active] was set to [code]true[/code] for the specified [param window_id]. */
window_set_ime_position(): void;

/**
 * Sets the [param callback] that should be called when any [InputEvent] is sent to the window specified by [param window_id].
 *
 * **Warning:** Advanced users only! Adding such a callback to a [Window] node will override its default implementation, which can introduce bugs.
 *
*/
window_set_input_event_callback(): void;

/**
 * Sets the [param callback] that should be called when text is entered using the virtual keyboard to the window specified by [param window_id].
 *
 * **Warning:** Advanced users only! Adding such a callback to a [Window] node will override its default implementation, which can introduce bugs.
 *
*/
window_set_input_text_callback(): void;

/**
 * Sets the maximum size of the window specified by [param window_id] in pixels. Normally, the user will not be able to drag the window to make it smaller than the specified size. See also [method window_get_max_size].
 *
 * **Note:** It's recommended to change this value using [member Window.max_size] instead.
 *
 * **Note:** Using third-party tools, it is possible for users to disable window geometry restrictions and therefore bypass this limit.
 *
*/
window_set_max_size(): void;

/**
 * Sets the minimum size for the given window to [param min_size] (in pixels). Normally, the user will not be able to drag the window to make it larger than the specified size. See also [method window_get_min_size].
 *
 * **Note:** It's recommended to change this value using [member Window.min_size] instead.
 *
 * **Note:** By default, the main window has a minimum size of `Vector2i(64, 64)`. This prevents issues that can arise when the window is resized to a near-zero size.
 *
 * **Note:** Using third-party tools, it is possible for users to disable window geometry restrictions and therefore bypass this limit.
 *
*/
window_set_min_size(): void;

/**
 * Sets window mode for the given window to [param mode]. See [enum WindowMode] for possible values and how each mode behaves.
 *
 * **Note:** Setting the window to full screen forcibly sets the borderless flag to `true`, so make sure to set it back to `false` when not wanted.
 *
*/
window_set_mode(): void;

/**
 * Sets a polygonal region of the window which accepts mouse events. Mouse events outside the region will be passed through.
 *
 * Passing an empty array will disable passthrough support (all mouse events will be intercepted by the window, which is the default behavior).
 *
 * @example 
 * 
 * 
 * # Set region, using Path2D node.
 * DisplayServer.window_set_mouse_passthrough($Path2D.curve.get_baked_points())
 * # Set region, using Polygon2D node.
 * DisplayServer.window_set_mouse_passthrough($Polygon2D.polygon)
 * # Reset region to default.
 * DisplayServer.window_set_mouse_passthrough([])
 * 
 * 
 * // Set region, using Path2D node.
 * DisplayServer.WindowSetMousePassthrough(GetNode<Path2D>("Path2D").Curve.GetBakedPoints());
 * // Set region, using Polygon2D node.
 * DisplayServer.WindowSetMousePassthrough(GetNode<Polygon2D>("Polygon2D").Polygon);
 * // Reset region to default.
 * DisplayServer.WindowSetMousePassthrough(new Vector2[] {});
 * 
 * @summary 
 * 
 *
 * **Note:** On Windows, the portion of a window that lies outside the region is not drawn, while on Linux (X11) and macOS it is.
 *
 * **Note:** This method is implemented on Linux (X11), macOS and Windows.
 *
*/
window_set_mouse_passthrough(): void;

/** Sets the bounding box of control, or menu item that was used to open the popup window, in the screen coordinate system. Clicking this area will not auto-close this popup. */
window_set_popup_safe_rect(): void;

/**
 * Sets the position of the given window to [param position]. On multi-monitor setups, the screen position is relative to the virtual desktop area. On multi-monitor setups with different screen resolutions or orientations, the origin may be located outside any display like this:
 *
 * @example 
 * 
 * * (0, 0)        +-------+
 *                 |       |
 * +-------------+ |       |
 * |             | |       |
 * |             | |       |
 * +-------------+ +-------+
 * @summary 
 * 
 *
 * See also [method window_get_position] and [method window_set_size].
 *
 * **Note:** It's recommended to change this value using [member Window.position] instead.
 *
*/
window_set_position(): void;

/**
 * Sets the [param callback] that will be called when the window specified by [param window_id] is moved or resized.
 *
 * **Warning:** Advanced users only! Adding such a callback to a [Window] node will override its default implementation, which can introduce bugs.
 *
*/
window_set_rect_changed_callback(): void;

/**
 * Sets the size of the given window to [param size] (in pixels). See also [method window_get_size] and [method window_get_position].
 *
 * **Note:** It's recommended to change this value using [member Window.size] instead.
 *
*/
window_set_size(): void;

/**
 * Sets the title of the given window to [param title].
 *
 * **Note:** It's recommended to change this value using [member Window.title] instead.
 *
 * **Note:** Avoid changing the window title every frame, as this can cause performance issues on certain window managers. Try to change the window title only a few times per second at most.
 *
*/
window_set_title(): void;

/**
 * Sets window transient parent. Transient window is will be destroyed with its transient parent and will return focus to their parent when closed. The transient window is displayed on top of a non-exclusive full-screen parent window. Transient windows can't enter full-screen mode.
 *
 * **Note:** It's recommended to change this value using [member Window.transient] instead.
 *
 * **Note:** The behavior might be different depending on the platform.
 *
*/
window_set_transient(): void;

/**
 * Sets the V-Sync mode of the given window. See also [member ProjectSettings.display/window/vsync/vsync_mode].
 *
 * See [enum DisplayServer.VSyncMode] for possible values and how they affect the behavior of your application.
 *
 * Depending on the platform and used renderer, the engine will fall back to [constant VSYNC_ENABLED] if the desired mode is not supported.
 *
 * **Note:** V-Sync modes other than [constant VSYNC_ENABLED] are only supported in the Forward+ and Mobile rendering methods, not Compatibility.
 *
*/
window_set_vsync_mode(): void;

/**
 * When [constant WINDOW_FLAG_EXTEND_TO_TITLE] flag is set, set offset to the center of the first titlebar button.
 *
 * **Note:** This flag is implemented only on macOS.
 *
*/
window_set_window_buttons_offset(): void;

/**
 * Sets the [param callback] that will be called when an event occurs in the window specified by [param window_id].
 *
 * **Warning:** Advanced users only! Adding such a callback to a [Window] node will override its default implementation, which can introduce bugs.
 *
*/
window_set_window_event_callback(): void;

  connect<T extends SignalsOf<DisplayServerClass>>(signal: T, method: SignalFunction<DisplayServerClass[T]>): number;



/**
 * Display server supports global menu. This allows the application to display its menu items in the operating system's top bar. **macOS**
 *
*/
static FEATURE_GLOBAL_MENU: any;

/**
 * Display server supports multiple windows that can be moved outside of the main window. **Windows, macOS, Linux (X11)**
 *
*/
static FEATURE_SUBWINDOWS: any;

/**
 * Display server supports touchscreen input. **Windows, Linux (X11), Android, iOS, Web**
 *
*/
static FEATURE_TOUCHSCREEN: any;

/**
 * Display server supports mouse input. **Windows, macOS, Linux (X11), Android, Web**
 *
*/
static FEATURE_MOUSE: any;

/**
 * Display server supports warping mouse coordinates to keep the mouse cursor constrained within an area, but looping when one of the edges is reached. **Windows, macOS, Linux (X11)**
 *
*/
static FEATURE_MOUSE_WARP: any;

/**
 * Display server supports setting and getting clipboard data. See also [constant FEATURE_CLIPBOARD_PRIMARY]. **Windows, macOS, Linux (X11), Android, iOS, Web**
 *
*/
static FEATURE_CLIPBOARD: any;

/**
 * Display server supports popping up a virtual keyboard when requested to input text without a physical keyboard. **Android, iOS, Web**
 *
*/
static FEATURE_VIRTUAL_KEYBOARD: any;

/**
 * Display server supports setting the mouse cursor shape to be different from the default. **Windows, macOS, Linux (X11), Android, Web**
 *
*/
static FEATURE_CURSOR_SHAPE: any;

/**
 * Display server supports setting the mouse cursor shape to a custom image. **Windows, macOS, Linux (X11), Web**
 *
*/
static FEATURE_CUSTOM_CURSOR_SHAPE: any;

/**
 * Display server supports spawning dialogs using the operating system's native look-and-feel. **macOS**
 *
*/
static FEATURE_NATIVE_DIALOG: any;

/**
 * Display server supports [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url], which is commonly used for inputting Chinese/Japanese/Korean text. This is handled by the operating system, rather than by Godot. **Windows, macOS, Linux (X11)**
 *
*/
static FEATURE_IME: any;

/**
 * Display server supports windows can use per-pixel transparency to make windows behind them partially or fully visible. **Windows, macOS, Linux (X11)**
 *
*/
static FEATURE_WINDOW_TRANSPARENCY: any;

/**
 * Display server supports querying the operating system's display scale factor. This allows for **reliable** automatic hiDPI display detection, as opposed to guessing based on the screen resolution and reported display DPI (which can be unreliable due to broken monitor EDID). **Windows, macOS**
 *
*/
static FEATURE_HIDPI: any;

/**
 * Display server supports changing the window icon (usually displayed in the top-left corner). **Windows, macOS, Linux (X11)**
 *
*/
static FEATURE_ICON: any;

/**
 * Display server supports changing the window icon (usually displayed in the top-left corner). **Windows, macOS**
 *
*/
static FEATURE_NATIVE_ICON: any;

/**
 * Display server supports changing the screen orientation. **Android, iOS**
 *
*/
static FEATURE_ORIENTATION: any;

/**
 * Display server supports V-Sync status can be changed from the default (which is forced to be enabled platforms not supporting this feature). **Windows, macOS, Linux (X11)**
 *
*/
static FEATURE_SWAP_BUFFERS: any;

/**
 * Display server supports Primary clipboard can be used. This is a different clipboard from [constant FEATURE_CLIPBOARD]. **Linux (X11)**
 *
*/
static FEATURE_CLIPBOARD_PRIMARY: any;

/**
 * Display server supports text-to-speech. See `tts_*` methods. **Windows, macOS, Linux (X11), Android, iOS, Web**
 *
*/
static FEATURE_TEXT_TO_SPEECH: any;

/**
 * Display server supports expanding window content to the title. See [constant WINDOW_FLAG_EXTEND_TO_TITLE]. **macOS**
 *
*/
static FEATURE_EXTEND_TO_TITLE: any;

/**
 * Display server supports reading screen pixels. See [method screen_get_pixel].
 *
*/
static FEATURE_SCREEN_CAPTURE: any;

/**
 * Makes the mouse cursor visible if it is hidden.
 *
*/
static MOUSE_MODE_VISIBLE: any;

/**
 * Makes the mouse cursor hidden if it is visible.
 *
*/
static MOUSE_MODE_HIDDEN: any;

/**
 * Captures the mouse. The mouse will be hidden and its position locked at the center of the window manager's window.
 *
 * **Note:** If you want to process the mouse's movement in this mode, you need to use [member InputEventMouseMotion.relative].
 *
*/
static MOUSE_MODE_CAPTURED: any;

/**
 * Confines the mouse cursor to the game window, and make it visible.
 *
*/
static MOUSE_MODE_CONFINED: any;

/**
 * Confines the mouse cursor to the game window, and make it hidden.
 *
*/
static MOUSE_MODE_CONFINED_HIDDEN: any;

/**
 * Represents the screen containing the mouse pointer.
 *
*/
static SCREEN_WITH_MOUSE_FOCUS: any;

/**
 * Represents the screen containing the window with the keyboard focus.
 *
*/
static SCREEN_WITH_KEYBOARD_FOCUS: any;

/**
 * Represents the primary screen.
 *
*/
static SCREEN_PRIMARY: any;

/**
 * Represents the screen where the main window is located. This is usually the default value in functions that allow specifying one of several screens.
 *
*/
static SCREEN_OF_MAIN_WINDOW: any;

/**
 * The ID of the main window spawned by the engine, which can be passed to methods expecting a `window_id`.
 *
*/
static MAIN_WINDOW_ID: any;

/**
 * The ID that refers to a nonexisting window. This is be returned by some [DisplayServer] methods if no window matches the requested result.
 *
*/
static INVALID_WINDOW_ID: any;

/**
 * Default landscape orientation.
 *
*/
static SCREEN_LANDSCAPE: any;

/**
 * Default portrait orientation.
 *
*/
static SCREEN_PORTRAIT: any;

/**
 * Reverse landscape orientation (upside down).
 *
*/
static SCREEN_REVERSE_LANDSCAPE: any;

/**
 * Reverse portrait orientation (upside down).
 *
*/
static SCREEN_REVERSE_PORTRAIT: any;

/**
 * Automatic landscape orientation (default or reverse depending on sensor).
 *
*/
static SCREEN_SENSOR_LANDSCAPE: any;

/**
 * Automatic portrait orientation (default or reverse depending on sensor).
 *
*/
static SCREEN_SENSOR_PORTRAIT: any;

/**
 * Automatic landscape or portrait orientation (default or reverse depending on sensor).
 *
*/
static SCREEN_SENSOR: any;

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
 * Arrow cursor shape. This is the default when not pointing anything that overrides the mouse cursor, such as a [LineEdit] or [TextEdit].
 *
*/
static CURSOR_ARROW: any;

/**
 * I-beam cursor shape. This is used by default when hovering a control that accepts text input, such as [LineEdit] or [TextEdit].
 *
*/
static CURSOR_IBEAM: any;

/**
 * Pointing hand cursor shape. This is used by default when hovering a [LinkButton] or a URL tag in a [RichTextLabel].
 *
*/
static CURSOR_POINTING_HAND: any;

/**
 * Crosshair cursor. This is intended to be displayed when the user needs precise aim over an element, such as a rectangle selection tool or a color picker.
 *
*/
static CURSOR_CROSS: any;

/**
 * Wait cursor. On most cursor themes, this displays a spinning icon **besides** the arrow. Intended to be used for non-blocking operations (when the user can do something else at the moment). See also [constant CURSOR_BUSY].
 *
*/
static CURSOR_WAIT: any;

/**
 * Wait cursor. On most cursor themes, this **replaces** the arrow with a spinning icon. Intended to be used for blocking operations (when the user can't do anything else at the moment). See also [constant CURSOR_WAIT].
 *
*/
static CURSOR_BUSY: any;

/**
 * Dragging hand cursor. This is displayed during drag-and-drop operations. See also [constant CURSOR_CAN_DROP].
 *
*/
static CURSOR_DRAG: any;

/**
 * "Can drop" cursor. This is displayed during drag-and-drop operations if hovering over a [Control] that can accept the drag-and-drop event. On most cursor themes, this displays a dragging hand with an arrow symbol besides it. See also [constant CURSOR_DRAG].
 *
*/
static CURSOR_CAN_DROP: any;

/**
 * Forbidden cursor. This is displayed during drag-and-drop operations if the hovered [Control] can't accept the drag-and-drop event.
 *
*/
static CURSOR_FORBIDDEN: any;

/**
 * Vertical resize cursor. Intended to be displayed when the hovered [Control] can be vertically resized using the mouse. See also [constant CURSOR_VSPLIT].
 *
*/
static CURSOR_VSIZE: any;

/**
 * Horizontal resize cursor. Intended to be displayed when the hovered [Control] can be horizontally resized using the mouse. See also [constant CURSOR_HSPLIT].
 *
*/
static CURSOR_HSIZE: any;

/**
 * Secondary diagonal resize cursor (top-right/bottom-left). Intended to be displayed when the hovered [Control] can be resized on both axes at once using the mouse.
 *
*/
static CURSOR_BDIAGSIZE: any;

/**
 * Main diagonal resize cursor (top-left/bottom-right). Intended to be displayed when the hovered [Control] can be resized on both axes at once using the mouse.
 *
*/
static CURSOR_FDIAGSIZE: any;

/**
 * Move cursor. Intended to be displayed when the hovered [Control] can be moved using the mouse.
 *
*/
static CURSOR_MOVE: any;

/**
 * Vertical split cursor. This is displayed when hovering a [Control] with splits that can be vertically resized using the mouse, such as [VSplitContainer]. On some cursor themes, this cursor may have the same appearance as [constant CURSOR_VSIZE].
 *
*/
static CURSOR_VSPLIT: any;

/**
 * Horizontal split cursor. This is displayed when hovering a [Control] with splits that can be horizontally resized using the mouse, such as [HSplitContainer]. On some cursor themes, this cursor may have the same appearance as [constant CURSOR_HSIZE].
 *
*/
static CURSOR_HSPLIT: any;

/**
 * Help cursor. On most cursor themes, this displays a question mark icon instead of the mouse cursor. Intended to be used when the user has requested help on the next element that will be clicked.
 *
*/
static CURSOR_HELP: any;

/**
 * Represents the size of the [enum CursorShape] enum.
 *
*/
static CURSOR_MAX: any;

/**
 * The native file dialog allows selecting one, and only one file.
 *
*/
static FILE_DIALOG_MODE_OPEN_FILE: any;

/**
 * The native file dialog allows selecting multiple files.
 *
*/
static FILE_DIALOG_MODE_OPEN_FILES: any;

/**
 * The native file dialog only allows selecting a directory, disallowing the selection of any file.
 *
*/
static FILE_DIALOG_MODE_OPEN_DIR: any;

/**
 * The native file dialog allows selecting one file or directory.
 *
*/
static FILE_DIALOG_MODE_OPEN_ANY: any;

/**
 * The native file dialog will warn when a file exists.
 *
*/
static FILE_DIALOG_MODE_SAVE_FILE: any;

/**
 * Windowed mode, i.e. [Window] doesn't occupy the whole screen (unless set to the size of the screen).
 *
*/
static WINDOW_MODE_WINDOWED: any;

/**
 * Minimized window mode, i.e. [Window] is not visible and available on window manager's window list. Normally happens when the minimize button is pressed.
 *
*/
static WINDOW_MODE_MINIMIZED: any;

/**
 * Maximized window mode, i.e. [Window] will occupy whole screen area except task bar and still display its borders. Normally happens when the maximize button is pressed.
 *
*/
static WINDOW_MODE_MAXIMIZED: any;

/**
 * Full screen mode with full multi-window support.
 *
 * Full screen window covers the entire display area of a screen and has no decorations. The display's video mode is not changed.
 *
 * **On Windows:** Multi-window full-screen mode has a 1px border of the [member ProjectSettings.rendering/environment/defaults/default_clear_color] color.
 *
 * **On macOS:** A new desktop is used to display the running project.
 *
 * **Note:** Regardless of the platform, enabling full screen will change the window size to match the monitor's size. Therefore, make sure your project supports [url=$DOCS_URL/tutorials/rendering/multiple_resolutions.html]multiple resolutions[/url] when enabling full screen mode.
 *
*/
static WINDOW_MODE_FULLSCREEN: any;

/**
 * A single window full screen mode. This mode has less overhead, but only one window can be open on a given screen at a time (opening a child window or application switching will trigger a full screen transition).
 *
 * Full screen window covers the entire display area of a screen and has no border or decorations. The display's video mode is not changed.
 *
 * **On Windows:** Depending on video driver, full screen transition might cause screens to go black for a moment.
 *
 * **On macOS:** A new desktop is used to display the running project. Exclusive full screen mode prevents Dock and Menu from showing up when the mouse pointer is hovering the edge of the screen.
 *
 * **On Linux (X11):** Exclusive full screen mode bypasses compositor.
 *
 * **Note:** Regardless of the platform, enabling full screen will change the window size to match the monitor's size. Therefore, make sure your project supports [url=$DOCS_URL/tutorials/rendering/multiple_resolutions.html]multiple resolutions[/url] when enabling full screen mode.
 *
*/
static WINDOW_MODE_EXCLUSIVE_FULLSCREEN: any;

/**
 * The window can't be resized by dragging its resize grip. It's still possible to resize the window using [method window_set_size]. This flag is ignored for full screen windows.
 *
*/
static WINDOW_FLAG_RESIZE_DISABLED: any;

/**
 * The window do not have native title bar and other decorations. This flag is ignored for full-screen windows.
 *
*/
static WINDOW_FLAG_BORDERLESS: any;

/**
 * The window is floating on top of all other windows. This flag is ignored for full-screen windows.
 *
*/
static WINDOW_FLAG_ALWAYS_ON_TOP: any;

/**
 * The window background can be transparent.
 *
 * **Note:** This flag has no effect if [member ProjectSettings.display/window/per_pixel_transparency/allowed] is set to `false`.
 *
 * **Note:** Transparency support is implemented on Linux (X11), macOS and Windows, but availability might vary depending on GPU driver, display manager, and compositor capabilities.
 *
*/
static WINDOW_FLAG_TRANSPARENT: any;

/**
 * The window can't be focused. No-focus window will ignore all input, except mouse clicks.
 *
*/
static WINDOW_FLAG_NO_FOCUS: any;

/**
 * Window is part of menu or [OptionButton] dropdown. This flag can't be changed when the window is visible. An active popup window will exclusively receive all input, without stealing focus from its parent. Popup windows are automatically closed when uses click outside it, or when an application is switched. Popup window must have transient parent set (see [method window_set_transient]).
 *
*/
static WINDOW_FLAG_POPUP: any;

/**
 * Window content is expanded to the full size of the window. Unlike borderless window, the frame is left intact and can be used to resize the window, title bar is transparent, but have minimize/maximize/close buttons.
 *
 * Use [method window_set_window_buttons_offset] to adjust minimize/maximize/close buttons offset.
 *
 * Use [method window_get_safe_title_margins] to determine area under the title bar that is not covered by decorations.
 *
 * **Note:** This flag is implemented only on macOS.
 *
*/
static WINDOW_FLAG_EXTEND_TO_TITLE: any;

/**
 * All mouse events are passed to the underlying window of the same application.
 *
*/
static WINDOW_FLAG_MOUSE_PASSTHROUGH: any;

/**
 * Max value of the [enum WindowFlags].
 *
*/
static WINDOW_FLAG_MAX: any;

/**
 * Sent when the mouse pointer enters the window.
 *
*/
static WINDOW_EVENT_MOUSE_ENTER: any;

/**
 * Sent when the mouse pointer exits the window.
 *
*/
static WINDOW_EVENT_MOUSE_EXIT: any;

/**
 * Sent when the window grabs focus.
 *
*/
static WINDOW_EVENT_FOCUS_IN: any;

/**
 * Sent when the window loses focus.
 *
*/
static WINDOW_EVENT_FOCUS_OUT: any;

/**
 * Sent when the user has attempted to close the window (e.g. close button is pressed).
 *
*/
static WINDOW_EVENT_CLOSE_REQUEST: any;

/**
 * Sent when the device "Back" button is pressed.
 *
 * **Note:** This event is implemented only on Android.
 *
*/
static WINDOW_EVENT_GO_BACK_REQUEST: any;

/**
 * Sent when the window is moved to the display with different DPI, or display DPI is changed.
 *
 * **Note:** This flag is implemented only on macOS.
 *
*/
static WINDOW_EVENT_DPI_CHANGE: any;

/**
 * Sent when the window title bar decoration is changed (e.g. [constant WINDOW_FLAG_EXTEND_TO_TITLE] is set or window entered/exited full screen mode).
 *
 * **Note:** This flag is implemented only on macOS.
 *
*/
static WINDOW_EVENT_TITLEBAR_CHANGE: any;

/**
 * No vertical synchronization, which means the engine will display frames as fast as possible (tearing may be visible). Framerate is unlimited (notwithstanding [member Engine.max_fps]).
 *
*/
static VSYNC_DISABLED: any;

/**
 * Default vertical synchronization mode, the image is displayed only on vertical blanking intervals (no tearing is visible). Framerate is limited by the monitor refresh rate (notwithstanding [member Engine.max_fps]).
 *
*/
static VSYNC_ENABLED: any;

/**
 * Behaves like [constant VSYNC_DISABLED] when the framerate drops below the screen's refresh rate to reduce stuttering (tearing may be visible). Otherwise, vertical synchronization is enabled to avoid tearing. Framerate is limited by the monitor refresh rate (notwithstanding [member Engine.max_fps]). Behaves like [constant VSYNC_ENABLED] when using the Compatibility rendering method.
 *
*/
static VSYNC_ADAPTIVE: any;

/**
 * Displays the most recent image in the queue on vertical blanking intervals, while rendering to the other images (no tearing is visible). Framerate is unlimited (notwithstanding [member Engine.max_fps]).
 *
 * Although not guaranteed, the images can be rendered as fast as possible, which may reduce input lag (also called "Fast" V-Sync mode). [constant VSYNC_MAILBOX] works best when at least twice as many frames as the display refresh rate are rendered. Behaves like [constant VSYNC_ENABLED] when using the Compatibility rendering method.
 *
*/
static VSYNC_MAILBOX: any;

/**
 * Display handle:
 *
 * - Linux (X11): `X11::Display*` for the display.
 *
 * - Android: `EGLDisplay` for the display.
 *
*/
static DISPLAY_HANDLE: any;

/**
 * Window handle:
 *
 * - Windows: `HWND` for the window.
 *
 * - Linux (X11): `X11::Window*` for the window.
 *
 * - macOS: `NSWindow*` for the window.
 *
 * - iOS: `UIViewController*` for the view controller.
 *
 * - Android: `jObject` for the activity.
 *
*/
static WINDOW_HANDLE: any;

/**
 * Window view:
 *
 * - Windows: `HDC` for the window (only with the GL Compatibility renderer).
 *
 * - macOS: `NSView*` for the window main view.
 *
 * - iOS: `UIView*` for the window main view.
 *
*/
static WINDOW_VIEW: any;

/**
 * OpenGL context (only with the GL Compatibility renderer):
 *
 * - Windows: `HGLRC` for the window (native GL), or `EGLContext` for the window (ANGLE).
 *
 * - Linux: `GLXContext*` for the window.
 *
 * - macOS: `NSOpenGLContext*` for the window (native GL), or `EGLContext` for the window (ANGLE).
 *
 * - Android: `EGLContext` for the window.
 *
*/
static OPENGL_CONTEXT: any;

/**
 * Utterance has begun to be spoken.
 *
*/
static TTS_UTTERANCE_STARTED: any;

/**
 * Utterance was successfully finished.
 *
*/
static TTS_UTTERANCE_ENDED: any;

/**
 * Utterance was canceled, or TTS service was unable to process it.
 *
*/
static TTS_UTTERANCE_CANCELED: any;

/**
 * Utterance reached a word or sentence boundary.
 *
*/
static TTS_UTTERANCE_BOUNDARY: any;



}

