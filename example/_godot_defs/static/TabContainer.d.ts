
/**
 * Arranges child controls into a tabbed view, creating a tab for each one. The active tab's corresponding control is made visible, while all other child controls are hidden. Ignores non-control children.
 *
 * **Note:** The drawing of the clickable tabs is handled by this node; [TabBar] is not needed.
 *
*/
declare class TabContainer extends Container  {

  
/**
 * Arranges child controls into a tabbed view, creating a tab for each one. The active tab's corresponding control is made visible, while all other child controls are hidden. Ignores non-control children.
 *
 * **Note:** The drawing of the clickable tabs is handled by this node; [TabBar] is not needed.
 *
*/
  new(): TabContainer; 
  static "new"(): TabContainer 


/** If [code]true[/code], all tabs are drawn in front of the panel. If [code]false[/code], inactive tabs are drawn behind the panel. */
all_tabs_in_front: boolean;

/** If [code]true[/code], tabs overflowing this node's width will be hidden, displaying two navigation buttons instead. Otherwise, this node's minimum size is updated so that all tabs are visible. */
clip_tabs: boolean;

/** The current tab index. When set, this index's [Control] node's [code]visible[/code] property is set to [code]true[/code] and all others are set to [code]false[/code]. */
current_tab: int;

/** If [code]true[/code], tabs can be rearranged with mouse drag. */
drag_to_rearrange_enabled: boolean;

/** Sets the position at which tabs will be placed. See [enum TabBar.AlignmentMode] for details. */
tab_alignment: int;

/** The focus access mode for the internal [TabBar] node. */
tab_focus_mode: int;

/**
 * [TabContainer]s with the same rearrange group ID will allow dragging the tabs between them. Enable drag with [member drag_to_rearrange_enabled].
 *
 * Setting this to `-1` will disable rearranging between [TabContainer]s.
 *
*/
tabs_rearrange_group: int;

/** If [code]true[/code], tabs are visible. If [code]false[/code], tabs' content and titles are hidden. */
tabs_visible: boolean;

/** If [code]true[/code], children [Control] nodes that are hidden have their minimum size take into account in the total, instead of only the currently visible one. */
use_hidden_tabs_for_min_size: boolean;

/** Returns the child [Control] node located at the active tab index. */
get_current_tab_control(): Control;

/**
 * Returns the [Popup] node instance if one has been set already with [method set_popup].
 *
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.
 *
*/
get_popup(): Popup;

/** Returns the previously active tab index. */
get_previous_tab(): int;

/**
 * Returns the [TabBar] contained in this container.
 *
 * **Warning:** This is a required internal node, removing and freeing it or editing its tabs may cause a crash. If you wish to edit the tabs, use the methods provided in [TabContainer].
 *
*/
get_tab_bar(): TabBar;

/** Returns the button icon from the tab at index [param tab_idx]. */
get_tab_button_icon(): Texture2D;

/** Returns the [Control] node from the tab at index [param tab_idx]. */
get_tab_control(): Control;

/** Returns the number of tabs. */
get_tab_count(): int;

/** Returns the [Texture2D] for the tab at index [param tab_idx] or [code]null[/code] if the tab has no [Texture2D]. */
get_tab_icon(): Texture2D;

/** Returns the index of the tab at local coordinates [param point]. Returns [code]-1[/code] if the point is outside the control boundaries or if there's no tab at the queried position. */
get_tab_idx_at_point(): int;

/** Returns the index of the tab tied to the given [param control]. The control must be a child of the [TabContainer]. */
get_tab_idx_from_control(): int;

/** Returns the metadata value set to the tab at index [param tab_idx] using [method set_tab_metadata]. If no metadata was previously set, returns [code]null[/code] by default. */
get_tab_metadata(): any;

/** Returns the title of the tab at index [param tab_idx]. Tab titles default to the name of the indexed child node, but this can be overridden with [method set_tab_title]. */
get_tab_title(): string;

/** Returns [code]true[/code] if the tab at index [param tab_idx] is disabled. */
is_tab_disabled(): boolean;

/** Returns [code]true[/code] if the tab at index [param tab_idx] is hidden. */
is_tab_hidden(): boolean;

/** Selects the first available tab with greater index than the currently selected. Returns [code]true[/code] if tab selection changed. */
select_next_available(): boolean;

/** Selects the first available tab with lower index than the currently selected. Returns [code]true[/code] if tab selection changed. */
select_previous_available(): boolean;

/** If set on a [Popup] node instance, a popup menu icon appears in the top-right corner of the [TabContainer] (setting it to [code]null[/code] will make it go away). Clicking it will expand the [Popup] node. */
set_popup(): void;

/** Sets the button icon from the tab at index [param tab_idx]. */
set_tab_button_icon(): void;

/** If [param disabled] is [code]true[/code], disables the tab at index [param tab_idx], making it non-interactable. */
set_tab_disabled(): void;

/** If [param hidden] is [code]true[/code], hides the tab at index [param tab_idx], making it disappear from the tab area. */
set_tab_hidden(): void;

/** Sets an icon for the tab at index [param tab_idx]. */
set_tab_icon(): void;

/** Sets the metadata value for the tab at index [param tab_idx], which can be retrieved later using [method get_tab_metadata]. */
set_tab_metadata(): void;

/** Sets a custom title for the tab at index [param tab_idx] (tab titles default to the name of the indexed child node). Set it back to the child's name to make the tab default to it again. */
set_tab_title(): void;

  connect<T extends SignalsOf<TabContainer>>(signal: T, method: SignalFunction<TabContainer[T]>): number;





/**
 * Emitted when the active tab is rearranged via mouse drag. See [member drag_to_rearrange_enabled].
 *
*/
$active_tab_rearranged: Signal<() => void>

/**
 * Emitted when the [TabContainer]'s [Popup] button is clicked. See [method set_popup] for details.
 *
*/
$pre_popup_pressed: Signal<() => void>

/**
 * Emitted when the user clicks on the button icon on this tab.
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
 * Emitted when a tab is hovered by the mouse.
 *
*/
$tab_hovered: Signal<() => void>

/**
 * Emitted when a tab is selected via click, directional input, or script, even if it is the current tab.
 *
*/
$tab_selected: Signal<() => void>

}

