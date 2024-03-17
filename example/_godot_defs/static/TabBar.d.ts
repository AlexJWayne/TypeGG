
/**
 * A control that provides a horizontal bar with tabs. Similar to [TabContainer] but is only in charge of drawing tabs, not interacting with children.
 *
*/
declare class TabBar extends Control  {

  
/**
 * A control that provides a horizontal bar with tabs. Similar to [TabContainer] but is only in charge of drawing tabs, not interacting with children.
 *
*/
  new(): TabBar; 
  static "new"(): TabBar 


/** If [code]true[/code], tabs overflowing this node's width will be hidden, displaying two navigation buttons instead. Otherwise, this node's minimum size is updated so that all tabs are visible. */
clip_tabs: boolean;

/** Select tab at index [code]tab_idx[/code]. */
current_tab: int;

/** If [code]true[/code], tabs can be rearranged with mouse drag. */
drag_to_rearrange_enabled: boolean;


/** Sets the maximum width which all tabs should be limited to. Unlimited if set to [code]0[/code]. */
max_tab_width: int;

/** If [code]true[/code], the tab offset will be changed to keep the currently selected tab visible. */
scroll_to_selected: boolean;

/** if [code]true[/code], the mouse's scroll wheel can be used to navigate the scroll view. */
scrolling_enabled: boolean;

/** If [code]true[/code], enables selecting a tab with the right mouse button. */
select_with_rmb: boolean;

/** Sets the position at which tabs will be placed. See [enum AlignmentMode] for details. */
tab_alignment: int;

/** Sets when the close button will appear on the tabs. See [enum CloseButtonDisplayPolicy] for details. */
tab_close_display_policy: int;

/** The number of tabs currently in the bar. */
tab_count: int;

/**
 * [TabBar]s with the same rearrange group ID will allow dragging the tabs between them. Enable drag with [member drag_to_rearrange_enabled].
 *
 * Setting this to `-1` will disable rearranging between [TabBar]s.
 *
*/
tabs_rearrange_group: int;

/** Adds a new tab. */
add_tab(): void;

/** Clears all tabs. */
clear_tabs(): void;

/** Moves the scroll view to make the tab visible. */
ensure_tab_visible(): void;

/** Returns [code]true[/code] if the offset buttons (the ones that appear when there's not enough space for all tabs) are visible. */
get_offset_buttons_visible(): boolean;

/** Returns the previously active tab index. */
get_previous_tab(): int;

/** Returns the icon for the right button of the tab at index [param tab_idx] or [code]null[/code] if the right button has no icon. */
get_tab_button_icon(): Texture2D;

/** Returns the icon for the tab at index [param tab_idx] or [code]null[/code] if the tab has no icon. */
get_tab_icon(): Texture2D;

/** Returns the maximum allowed width of the icon for the tab at index [param tab_idx]. */
get_tab_icon_max_width(): int;

/** Returns the index of the tab at local coordinates [param point]. Returns [code]-1[/code] if the point is outside the control boundaries or if there's no tab at the queried position. */
get_tab_idx_at_point(): int;

/** Returns tab title language code. */
get_tab_language(): string;

/** Returns the metadata value set to the tab at index [param tab_idx] using [method set_tab_metadata]. If no metadata was previously set, returns [code]null[/code] by default. */
get_tab_metadata(): any;

/** Returns the number of hidden tabs offsetted to the left. */
get_tab_offset(): int;

/** Returns tab [Rect2] with local position and size. */
get_tab_rect(): Rect2;

/** Returns tab title text base writing direction. */
get_tab_text_direction(): int;

/** Returns the title of the tab at index [param tab_idx]. */
get_tab_title(): string;

/** Returns [code]true[/code] if the tab at index [param tab_idx] is disabled. */
is_tab_disabled(): boolean;

/** Returns [code]true[/code] if the tab at index [param tab_idx] is hidden. */
is_tab_hidden(): boolean;

/** Moves a tab from [param from] to [param to]. */
move_tab(): void;

/** Removes the tab at index [param tab_idx]. */
remove_tab(): void;

/** Selects the first available tab with greater index than the currently selected. Returns [code]true[/code] if tab selection changed. */
select_next_available(): boolean;

/** Selects the first available tab with lower index than the currently selected. Returns [code]true[/code] if tab selection changed. */
select_previous_available(): boolean;

/** Sets an [param icon] for the button of the tab at index [param tab_idx] (located to the right, before the close button), making it visible and clickable (See [signal tab_button_pressed]). Giving it a [code]null[/code] value will hide the button. */
set_tab_button_icon(): void;

/** If [param disabled] is [code]true[/code], disables the tab at index [param tab_idx], making it non-interactable. */
set_tab_disabled(): void;

/** If [param hidden] is [code]true[/code], hides the tab at index [param tab_idx], making it disappear from the tab area. */
set_tab_hidden(): void;

/** Sets an [param icon] for the tab at index [param tab_idx]. */
set_tab_icon(): void;

/** Sets the maximum allowed width of the icon for the tab at index [param tab_idx]. This limit is applied on top of the default size of the icon and on top of [theme_item icon_max_width]. The height is adjusted according to the icon's ratio. */
set_tab_icon_max_width(): void;

/** Sets language code of tab title used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
set_tab_language(): void;

/** Sets the metadata value for the tab at index [param tab_idx], which can be retrieved later using [method get_tab_metadata]. */
set_tab_metadata(): void;

/** Sets tab title base writing direction. */
set_tab_text_direction(): void;

/** Sets a [param title] for the tab at index [param tab_idx]. */
set_tab_title(): void;

  connect<T extends SignalsOf<TabBar>>(signal: T, method: SignalFunction<TabBar[T]>): number;



/**
 * Places tabs to the left.
 *
*/
static ALIGNMENT_LEFT: any;

/**
 * Places tabs in the middle.
 *
*/
static ALIGNMENT_CENTER: any;

/**
 * Places tabs to the right.
 *
*/
static ALIGNMENT_RIGHT: any;

/**
 * Represents the size of the [enum AlignmentMode] enum.
 *
*/
static ALIGNMENT_MAX: any;

/**
 * Never show the close buttons.
 *
*/
static CLOSE_BUTTON_SHOW_NEVER: any;

/**
 * Only show the close button on the currently active tab.
 *
*/
static CLOSE_BUTTON_SHOW_ACTIVE_ONLY: any;

/**
 * Show the close button on all tabs.
 *
*/
static CLOSE_BUTTON_SHOW_ALWAYS: any;

/**
 * Represents the size of the [enum CloseButtonDisplayPolicy] enum.
 *
*/
static CLOSE_BUTTON_MAX: any;


/**
 * Emitted when the active tab is rearranged via mouse drag. See [member drag_to_rearrange_enabled].
 *
*/
$active_tab_rearranged: Signal<() => void>

/**
 * Emitted when a tab's right button is pressed. See [method set_tab_button_icon].
 *
*/
$tab_button_pressed: Signal<() => void>

/**
 * Emitted when switching to another tab.
 *
*/
$tab_changed: Signal<() => void>

/**
 * Emitted when a tab is clicked, even if it is the current tab.
 *
*/
$tab_clicked: Signal<() => void>

/**
 * Emitted when a tab's close button is pressed.
 *
 * **Note:** Tabs are not removed automatically once the close button is pressed, this behavior needs to be programmed manually. For example:
 *
 * @example 
 * 
 * 
 * $TabBar.tab_close_pressed.connect($TabBar.remove_tab)
 * 
 * 
 * GetNode<TabBar>("TabBar").TabClosePressed += GetNode<TabBar>("TabBar").RemoveTab;
 * 
 * @summary 
 * 
 *
*/
$tab_close_pressed: Signal<() => void>

/**
 * Emitted when a tab is hovered by the mouse.
 *
*/
$tab_hovered: Signal<() => void>

/**
 * Emitted when a tab is right-clicked. [member select_with_rmb] must be enabled.
 *
*/
$tab_rmb_clicked: Signal<() => void>

/**
 * Emitted when a tab is selected via click, directional input, or script, even if it is the current tab.
 *
*/
$tab_selected: Signal<() => void>

}

