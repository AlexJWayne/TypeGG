
/**
 * A button that brings up a [PopupMenu] when clicked. To create new items inside this [PopupMenu], use `get_popup().add_item("My Item Name")`. You can also create them directly from Godot editor's inspector.
 *
 * See also [BaseButton] which contains common properties and methods associated with this node.
 *
*/
declare class MenuButton extends Button  {

  
/**
 * A button that brings up a [PopupMenu] when clicked. To create new items inside this [PopupMenu], use `get_popup().add_item("My Item Name")`. You can also create them directly from Godot editor's inspector.
 *
 * See also [BaseButton] which contains common properties and methods associated with this node.
 *
*/
  new(): MenuButton; 
  static "new"(): MenuButton 





/** The number of items currently in the list. */
item_count: int;

/** If [code]true[/code], when the cursor hovers above another [MenuButton] within the same parent which also has [member switch_on_hover] enabled, it will close the current [MenuButton] and open the other one. */
switch_on_hover: boolean;


/**
 * Returns the [PopupMenu] contained in this button.
 *
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.
 *
*/
get_popup(): PopupMenu;

/** If [code]true[/code], shortcuts are disabled and cannot be used to trigger the button. */
set_disable_shortcuts(): void;

/** Adjusts popup position and sizing for the [MenuButton], then shows the [PopupMenu]. Prefer this over using [code]get_popup().popup()[/code]. */
show_popup(): void;

  connect<T extends SignalsOf<MenuButton>>(signal: T, method: SignalFunction<MenuButton[T]>): number;





/**
 * Emitted when the [PopupMenu] of this MenuButton is about to show.
 *
*/
$about_to_popup: Signal<() => void>

}

