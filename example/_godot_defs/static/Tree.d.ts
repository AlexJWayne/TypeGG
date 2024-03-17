
/**
 * A control used to show a set of internal [TreeItem]s in a hierarchical structure. The tree items can be selected, expanded and collapsed. The tree can have multiple columns with custom controls like [LineEdit]s, buttons and popups. It can be useful for structured displays and interactions.
 *
 * Trees are built via code, using [TreeItem] objects to create the structure. They have a single root, but multiple roots can be simulated with [member hide_root]:
 *
 * @example 
 * 
 * 
 * func _ready():
 *     var tree = Tree.new()
 *     var root = tree.create_item()
 *     tree.hide_root = true
 *     var child1 = tree.create_item(root)
 *     var child2 = tree.create_item(root)
 *     var subchild1 = tree.create_item(child1)
 *     subchild1.set_text(0, "Subchild1")
 * 
 * 
 * public override void _Ready()
 * {
 *     var tree = new Tree();
 *     TreeItem root = tree.CreateItem();
 *     tree.HideRoot = true;
 *     TreeItem child1 = tree.CreateItem(root);
 *     TreeItem child2 = tree.CreateItem(root);
 *     TreeItem subchild1 = tree.CreateItem(child1);
 *     subchild1.SetText(0, "Subchild1");
 * }
 * 
 * @summary 
 * 
 *
 * To iterate over all the [TreeItem] objects in a [Tree] object, use [method TreeItem.get_next] and [method TreeItem.get_first_child] after getting the root through [method get_root]. You can use [method Object.free] on a [TreeItem] to remove it from the [Tree].
 *
 * **Incremental search:** Like [ItemList] and [PopupMenu], [Tree] supports searching within the list while the control is focused. Press a key that matches the first letter of an item's name to select the first item starting with the given letter. After that point, there are two ways to perform incremental search: 1) Press the same key again before the timeout duration to select the next item starting with the same letter. 2) Press letter keys that match the rest of the word before the timeout duration to match to select the item in question directly. Both of these actions will be reset to the beginning of the list if the timeout duration has passed since the last keystroke was registered. You can adjust the timeout duration by changing [member ProjectSettings.gui/timers/incremental_search_max_interval_msec].
 *
*/
declare class Tree extends Control  {

  
/**
 * A control used to show a set of internal [TreeItem]s in a hierarchical structure. The tree items can be selected, expanded and collapsed. The tree can have multiple columns with custom controls like [LineEdit]s, buttons and popups. It can be useful for structured displays and interactions.
 *
 * Trees are built via code, using [TreeItem] objects to create the structure. They have a single root, but multiple roots can be simulated with [member hide_root]:
 *
 * @example 
 * 
 * 
 * func _ready():
 *     var tree = Tree.new()
 *     var root = tree.create_item()
 *     tree.hide_root = true
 *     var child1 = tree.create_item(root)
 *     var child2 = tree.create_item(root)
 *     var subchild1 = tree.create_item(child1)
 *     subchild1.set_text(0, "Subchild1")
 * 
 * 
 * public override void _Ready()
 * {
 *     var tree = new Tree();
 *     TreeItem root = tree.CreateItem();
 *     tree.HideRoot = true;
 *     TreeItem child1 = tree.CreateItem(root);
 *     TreeItem child2 = tree.CreateItem(root);
 *     TreeItem subchild1 = tree.CreateItem(child1);
 *     subchild1.SetText(0, "Subchild1");
 * }
 * 
 * @summary 
 * 
 *
 * To iterate over all the [TreeItem] objects in a [Tree] object, use [method TreeItem.get_next] and [method TreeItem.get_first_child] after getting the root through [method get_root]. You can use [method Object.free] on a [TreeItem] to remove it from the [Tree].
 *
 * **Incremental search:** Like [ItemList] and [PopupMenu], [Tree] supports searching within the list while the control is focused. Press a key that matches the first letter of an item's name to select the first item starting with the given letter. After that point, there are two ways to perform incremental search: 1) Press the same key again before the timeout duration to select the next item starting with the same letter. 2) Press letter keys that match the rest of the word before the timeout duration to match to select the item in question directly. Both of these actions will be reset to the beginning of the list if the timeout duration has passed since the last keystroke was registered. You can adjust the timeout duration by changing [member ProjectSettings.gui/timers/incremental_search_max_interval_msec].
 *
*/
  new(): Tree; 
  static "new"(): Tree 


/** If [code]true[/code], the currently selected cell may be selected again. */
allow_reselect: boolean;

/** If [code]true[/code], a right mouse button click can select items. */
allow_rmb_select: boolean;

/** If [code]true[/code], allows navigating the [Tree] with letter keys through incremental search. */
allow_search: boolean;


/** If [code]true[/code], column titles are visible. */
column_titles_visible: boolean;

/** The number of columns. */
columns: int;

/**
 * The drop mode as an OR combination of flags. See [enum DropModeFlags] constants. Once dropping is done, reverts to [constant DROP_MODE_DISABLED]. Setting this during [method Control._can_drop_data] is recommended.
 *
 * This controls the drop sections, i.e. the decision and drawing of possible drop locations based on the mouse position.
 *
*/
drop_mode_flags: int;

/** If [code]true[/code], recursive folding is enabled for this [Tree]. Holding down Shift while clicking the fold arrow collapses or uncollapses the [TreeItem] and all its descendants. */
enable_recursive_folding: boolean;


/** If [code]true[/code], the folding arrow is hidden. */
hide_folding: boolean;

/** If [code]true[/code], the tree's root is hidden. */
hide_root: boolean;

/** If [code]true[/code], enables horizontal scrolling. */
scroll_horizontal_enabled: boolean;

/** If [code]true[/code], enables vertical scrolling. */
scroll_vertical_enabled: boolean;

/** Allows single or multiple selection. See the [enum SelectMode] constants. */
select_mode: int;

/** Clears the tree. This removes all items. */
clear(): void;

/**
 * Creates an item in the tree and adds it as a child of [param parent], which can be either a valid [TreeItem] or `null`.
 *
 * If [param parent] is `null`, the root item will be the parent, or the new item will be the root itself if the tree is empty.
 *
 * The new item will be the [param index]-th child of parent, or it will be the last child if there are not enough siblings.
 *
*/
create_item(): TreeItem;

/** Deselects all tree items (rows and columns). In [constant SELECT_MULTI] mode also removes selection cursor. */
deselect_all(): void;

/**
 * Edits the selected tree item as if it was clicked.
 *
 * Either the item must be set editable with [method TreeItem.set_editable] or [param force_edit] must be `true`.
 *
 * Returns `true` if the item could be edited. Fails if no item is selected.
 *
*/
edit_selected(): boolean;

/**
 * Makes the currently focused cell visible.
 *
 * This will scroll the tree if necessary. In [constant SELECT_ROW] mode, this will not do horizontal scrolling, as all the cells in the selected row is focused logically.
 *
 * **Note:** Despite the name of this method, the focus cursor itself is only visible in [constant SELECT_MULTI] mode.
 *
*/
ensure_cursor_is_visible(): void;

/** Returns the button ID at [param position], or -1 if no button is there. */
get_button_id_at_position(): int;

/** Returns the column index at [param position], or -1 if no item is there. */
get_column_at_position(): int;

/** Returns the expand ratio assigned to the column. */
get_column_expand_ratio(): int;

/** Returns the column's title. */
get_column_title(): string;

/** Returns the column title alignment. */
get_column_title_alignment(): int;

/** Returns column title base writing direction. */
get_column_title_direction(): int;

/** Returns column title language code. */
get_column_title_language(): string;

/** Returns the column's width in pixels. */
get_column_width(): int;

/** Returns the rectangle for custom popups. Helper to create custom cell controls that display a popup. See [method TreeItem.set_cell_mode]. */
get_custom_popup_rect(): Rect2;

/**
 * Returns the drop section at [param position], or -100 if no item is there.
 *
 * Values -1, 0, or 1 will be returned for the "above item", "on item", and "below item" drop sections, respectively. See [enum DropModeFlags] for a description of each drop section.
 *
 * To get the item which the returned drop section is relative to, use [method get_item_at_position].
 *
*/
get_drop_section_at_position(): int;

/**
 * Returns the currently edited item. Can be used with [signal item_edited] to get the item that was modified.
 *
 * @example 
 * 
 * 
 * func _ready():
 *     $Tree.item_edited.connect(on_Tree_item_edited)
 * func on_Tree_item_edited():
 *     print($Tree.get_edited()) # This item just got edited (e.g. checked).
 * 
 * 
 * public override void _Ready()
 * {
 *     GetNode<Tree>("Tree").ItemEdited += OnTreeItemEdited;
 * }
 * public void OnTreeItemEdited()
 * {
 *     GD.Print(GetNode<Tree>("Tree").GetEdited()); // This item just got edited (e.g. checked).
 * }
 * 
 * @summary 
 * 
 *
*/
get_edited(): TreeItem;

/** Returns the column for the currently edited item. */
get_edited_column(): int;

/** Returns the rectangle area for the specified [TreeItem]. If [param column] is specified, only get the position and size of that column, otherwise get the rectangle containing all columns. If a button index is specified, the rectangle of that button will be returned. */
get_item_area_rect(): Rect2;

/** Returns the tree item at the specified position (relative to the tree origin position). */
get_item_at_position(): TreeItem;

/**
 * Returns the next selected [TreeItem] after the given one, or `null` if the end is reached.
 *
 * If [param from] is `null`, this returns the first selected item.
 *
*/
get_next_selected(): TreeItem;

/** Returns the last pressed button's index. */
get_pressed_button(): int;

/** Returns the tree's root item, or [code]null[/code] if the tree is empty. */
get_root(): TreeItem;

/** Returns the current scrolling position. */
get_scroll(): Vector2;

/**
 * Returns the currently focused item, or `null` if no item is focused.
 *
 * In [constant SELECT_ROW] and [constant SELECT_SINGLE] modes, the focused item is same as the selected item. In [constant SELECT_MULTI] mode, the focused item is the item under the focus cursor, not necessarily selected.
 *
 * To get the currently selected item(s), use [method get_next_selected].
 *
*/
get_selected(): TreeItem;

/**
 * Returns the currently focused column, or -1 if no column is focused.
 *
 * In [constant SELECT_SINGLE] mode, the focused column is the selected column. In [constant SELECT_ROW] mode, the focused column is always 0 if any item is selected. In [constant SELECT_MULTI] mode, the focused column is the column under the focus cursor, and there are not necessarily any column selected.
 *
 * To tell whether a column of an item is selected, use [method TreeItem.is_selected].
 *
*/
get_selected_column(): int;

/** Returns [code]true[/code] if the column has enabled clipping (see [method set_column_clip_content]). */
is_column_clipping_content(): boolean;

/** Returns [code]true[/code] if the column has enabled expanding (see [method set_column_expand]). */
is_column_expanding(): boolean;

/** Causes the [Tree] to jump to the specified [TreeItem]. */
scroll_to_item(): void;

/** Allows to enable clipping for column's content, making the content size ignored. */
set_column_clip_content(): void;

/** Overrides the calculated minimum width of a column. It can be set to [code]0[/code] to restore the default behavior. Columns that have the "Expand" flag will use their "min_width" in a similar fashion to [member Control.size_flags_stretch_ratio]. */
set_column_custom_minimum_width(): void;

/** If [code]true[/code], the column will have the "Expand" flag of [Control]. Columns that have the "Expand" flag will use their expand ratio in a similar fashion to [member Control.size_flags_stretch_ratio] (see [method set_column_expand_ratio]). */
set_column_expand(): void;

/** Sets the relative expand ratio for a column. See [method set_column_expand]. */
set_column_expand_ratio(): void;

/** Sets the title of a column. */
set_column_title(): void;

/** Sets the column title alignment. Note that [constant @GlobalScope.HORIZONTAL_ALIGNMENT_FILL] is not supported for column titles. */
set_column_title_alignment(): void;

/** Sets column title base writing direction. */
set_column_title_direction(): void;

/** Sets language code of column title used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
set_column_title_language(): void;

/** Selects the specified [TreeItem] and column. */
set_selected(): void;

  connect<T extends SignalsOf<Tree>>(signal: T, method: SignalFunction<Tree[T]>): number;



/**
 * Allows selection of a single cell at a time. From the perspective of items, only a single item is allowed to be selected. And there is only one column selected in the selected item.
 *
 * The focus cursor is always hidden in this mode, but it is positioned at the current selection, making the currently selected item the currently focused item.
 *
*/
static SELECT_SINGLE: any;

/**
 * Allows selection of a single row at a time. From the perspective of items, only a single items is allowed to be selected. And all the columns are selected in the selected item.
 *
 * The focus cursor is always hidden in this mode, but it is positioned at the first column of the current selection, making the currently selected item the currently focused item.
 *
*/
static SELECT_ROW: any;

/**
 * Allows selection of multiple cells at the same time. From the perspective of items, multiple items are allowed to be selected. And there can be multiple columns selected in each selected item.
 *
 * The focus cursor is visible in this mode, the item or column under the cursor is not necessarily selected.
 *
*/
static SELECT_MULTI: any;

/**
 * Disables all drop sections, but still allows to detect the "on item" drop section by [method get_drop_section_at_position].
 *
 * **Note:** This is the default flag, it has no effect when combined with other flags.
 *
*/
static DROP_MODE_DISABLED: any;

/**
 * Enables the "on item" drop section. This drop section covers the entire item.
 *
 * When combined with [constant DROP_MODE_INBETWEEN], this drop section halves the height and stays centered vertically.
 *
*/
static DROP_MODE_ON_ITEM: any;

/**
 * Enables "above item" and "below item" drop sections. The "above item" drop section covers the top half of the item, and the "below item" drop section covers the bottom half.
 *
 * When combined with [constant DROP_MODE_ON_ITEM], these drop sections halves the height and stays on top / bottom accordingly.
 *
*/
static DROP_MODE_INBETWEEN: any;


/**
 * Emitted when a button on the tree was pressed (see [method TreeItem.add_button]).
 *
*/
$button_clicked: Signal<() => void>

/**
 * Emitted when a cell is selected.
 *
*/
$cell_selected: Signal<() => void>

/**
 * Emitted when [method TreeItem.propagate_check] is called. Connect to this signal to process the items that are affected when [method TreeItem.propagate_check] is invoked. The order that the items affected will be processed is as follows: the item that invoked the method, children of that item, and finally parents of that item.
 *
*/
$check_propagated_to_item: Signal<() => void>

/**
 * Emitted when a column's title is clicked with either [constant MOUSE_BUTTON_LEFT] or [constant MOUSE_BUTTON_RIGHT].
 *
*/
$column_title_clicked: Signal<() => void>

/**
 * Emitted when an item with [constant TreeItem.CELL_MODE_CUSTOM] is clicked with a mouse button.
 *
*/
$custom_item_clicked: Signal<() => void>

/**
 * Emitted when a cell with the [constant TreeItem.CELL_MODE_CUSTOM] is clicked to be edited.
 *
*/
$custom_popup_edited: Signal<() => void>

/**
 * Emitted when a mouse button is clicked in the empty space of the tree.
 *
*/
$empty_clicked: Signal<() => void>

/**
 * Emitted when an item is double-clicked, or selected with a `ui_accept` input event (e.g. using [kbd]Enter[/kbd] or [kbd]Space[/kbd] on the keyboard).
 *
*/
$item_activated: Signal<() => void>

/**
 * Emitted when an item is collapsed by a click on the folding arrow.
 *
*/
$item_collapsed: Signal<() => void>

/**
 * Emitted when an item is edited.
 *
*/
$item_edited: Signal<() => void>

/**
 * Emitted when an item's icon is double-clicked. For a signal that emits when any part of the item is double-clicked, see [signal item_activated].
 *
*/
$item_icon_double_clicked: Signal<() => void>

/**
 * Emitted when an item is selected with a mouse button.
 *
*/
$item_mouse_selected: Signal<() => void>

/**
 * Emitted when an item is selected.
 *
*/
$item_selected: Signal<() => void>

/**
 * Emitted instead of [signal item_selected] if [member select_mode] is set to [constant SELECT_MULTI].
 *
*/
$multi_selected: Signal<() => void>

/**
 * Emitted when a left mouse button click does not select any item.
 *
*/
$nothing_selected: Signal<() => void>

}

