
/**
 * A horizontal menu bar that creates a [MenuButton] for each [PopupMenu] child. New items are created by adding [PopupMenu]s to this node.
 *
*/
declare class MenuBar extends Control  {

  
/**
 * A horizontal menu bar that creates a [MenuButton] for each [PopupMenu] child. New items are created by adding [PopupMenu]s to this node.
 *
*/
  new(): MenuBar; 
  static "new"(): MenuBar 


/** Flat [MenuBar] don't display item decoration. */
flat: boolean;

/** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
language: string;

/** If [code]true[/code], [MenuBar] will use system global menu when supported. */
prefer_global_menu: boolean;

/** Position in the global menu to insert first [MenuBar] item at. */
start_index: int;

/** If [code]true[/code], when the cursor hovers above menu item, it will close the current [PopupMenu] and open the other one. */
switch_on_hover: boolean;

/** Base text writing direction. */
text_direction: int;

/** Returns number of menu items. */
get_menu_count(): int;

/** Returns [PopupMenu] associated with menu item. */
get_menu_popup(): PopupMenu;

/** Returns menu item title. */
get_menu_title(): string;

/** Returns menu item tooltip. */
get_menu_tooltip(): string;

/** Returns [code]true[/code], if menu item is disabled. */
is_menu_disabled(): boolean;

/** Returns [code]true[/code], if menu item is hidden. */
is_menu_hidden(): boolean;

/** Returns [code]true[/code], if system global menu is supported and used by this [MenuBar]. */
is_native_menu(): boolean;

/** If [code]true[/code], shortcuts are disabled and cannot be used to trigger the button. */
set_disable_shortcuts(): void;

/** If [code]true[/code], menu item is disabled. */
set_menu_disabled(): void;

/** If [code]true[/code], menu item is hidden. */
set_menu_hidden(): void;

/** Sets menu item title. */
set_menu_title(): void;

/** Sets menu item tooltip. */
set_menu_tooltip(): void;

  connect<T extends SignalsOf<MenuBar>>(signal: T, method: SignalFunction<MenuBar[T]>): number;






}

