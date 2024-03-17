
/**
 * This [Control] node is used in the editor's Inspector dock to allow editing of [Resource] type properties. It provides options for creating, loading, saving and converting resources. Can be used with [EditorInspectorPlugin] to recreate the same behavior.
 *
 * **Note:** This [Control] does not include any editor for the resource, as editing is controlled by the Inspector dock itself or sub-Inspectors.
 *
*/
declare class EditorResourcePicker extends HBoxContainer  {

  
/**
 * This [Control] node is used in the editor's Inspector dock to allow editing of [Resource] type properties. It provides options for creating, loading, saving and converting resources. Can be used with [EditorInspectorPlugin] to recreate the same behavior.
 *
 * **Note:** This [Control] does not include any editor for the resource, as editing is controlled by the Inspector dock itself or sub-Inspectors.
 *
*/
  new(): EditorResourcePicker; 
  static "new"(): EditorResourcePicker 


/** The base type of allowed resource types. Can be a comma-separated list of several options. */
base_type: string;

/** If [code]true[/code], the value can be selected and edited. */
editable: boolean;

/** The edited resource value. */
edited_resource: Resource;

/** If [code]true[/code], the main button with the resource preview works in the toggle mode. Use [method set_toggle_pressed] to manually set the state. */
toggle_mode: boolean;

/** This virtual method can be implemented to handle context menu items not handled by default. See [method _set_create_options]. */
protected _handle_menu_selected(): boolean;

/**
 * This virtual method is called when updating the context menu of [EditorResourcePicker]. Implement this method to override the "New ..." items with your own options. [param menu_node] is a reference to the [PopupMenu] node.
 *
 * **Note:** Implement [method _handle_menu_selected] to handle these custom items.
 *
*/
protected _set_create_options(): void;

/** Returns a list of all allowed types and subtypes corresponding to the [member base_type]. If the [member base_type] is empty, an empty list is returned. */
get_allowed_types(): PackedStringArray;

/** Sets the toggle mode state for the main button. Works only if [member toggle_mode] is set to [code]true[/code]. */
set_toggle_pressed(): void;

  connect<T extends SignalsOf<EditorResourcePicker>>(signal: T, method: SignalFunction<EditorResourcePicker[T]>): number;





/**
 * Emitted when the value of the edited resource was changed.
 *
*/
$resource_changed: Signal<() => void>

/**
 * Emitted when the resource value was set and user clicked to edit it. When [param inspect] is `true`, the signal was caused by the context menu "Edit" or "Inspect" option.
 *
*/
$resource_selected: Signal<() => void>

}

