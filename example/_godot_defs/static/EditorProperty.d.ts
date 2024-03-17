
/**
 * A custom control for editing properties that can be added to the [EditorInspector]. It is added via [EditorInspectorPlugin].
 *
*/
declare class EditorProperty extends Container  {

  
/**
 * A custom control for editing properties that can be added to the [EditorInspector]. It is added via [EditorInspectorPlugin].
 *
*/
  new(): EditorProperty; 
  static "new"(): EditorProperty 


/** Used by the inspector, set to [code]true[/code] when the property is checkable. */
checkable: boolean;

/** Used by the inspector, set to [code]true[/code] when the property is checked. */
checked: boolean;

/** Used by the inspector, set to [code]true[/code] when the property can be deleted by the user. */
deletable: boolean;

/** Used by the inspector, set to [code]true[/code] when the property is drawn with the editor theme's warning color. This is used for editable children's properties. */
draw_warning: boolean;

/** Used by the inspector, set to [code]true[/code] when the property can add keys for animation. */
keying: boolean;

/** Set this property to change the label (if you want to show one). */
label: string;

/** Used by the inspector, set to [code]true[/code] when the property is read-only. */
read_only: boolean;

/** Called when the read-only status of the property is changed. It may be used to change custom controls into a read-only or modifiable state. */
protected _set_read_only(): void;

/** When this virtual function is called, you must update your editor. */
protected _update_property(): void;

/** If any of the controls added can gain keyboard focus, add it here. This ensures that focus will be restored if the inspector is refreshed. */
add_focusable(): void;

/** If one or several properties have changed, this must be called. [param field] is used in case your editor can modify fields separately (as an example, Vector3.x). The [param changing] argument avoids the editor requesting this property to be refreshed (leave as [code]false[/code] if unsure). */
emit_changed(): void;

/** Gets the edited object. */
get_edited_object(): Object;

/** Gets the edited property. If your editor is for a single property (added via [method EditorInspectorPlugin._parse_property]), then this will return the property. */
get_edited_property(): StringName;

/** Puts the [param editor] control below the property label. The control must be previously added using [method Node.add_child]. */
set_bottom_editor(): void;

/** Forces refresh of the property display. */
update_property(): void;

  connect<T extends SignalsOf<EditorProperty>>(signal: T, method: SignalFunction<EditorProperty[T]>): number;





/**
 * Emit it if you want multiple properties modified at the same time. Do not use if added via [method EditorInspectorPlugin._parse_property].
 *
*/
$multiple_properties_changed: Signal<() => void>

/**
 * Used by sub-inspectors. Emit it if what was selected was an Object ID.
 *
*/
$object_id_selected: Signal<() => void>

/**
 * Emitted when the revertability (i.e., whether it has a non-default value and thus is displayed with a revert icon) of a property has changed.
 *
*/
$property_can_revert_changed: Signal<() => void>

/**
 * Do not emit this manually, use the [method emit_changed] method instead.
 *
*/
$property_changed: Signal<() => void>

/**
 * Emitted when a property was checked. Used internally.
 *
*/
$property_checked: Signal<() => void>

/**
 * Emitted when a property was deleted. Used internally.
 *
*/
$property_deleted: Signal<() => void>

/**
 * Emit it if you want to add this value as an animation key (check for keying being enabled first).
 *
*/
$property_keyed: Signal<() => void>

/**
 * Emit it if you want to key a property with a single value.
 *
*/
$property_keyed_with_value: Signal<() => void>

/**
 * Emit it if you want to mark (or unmark) the value of a property for being saved regardless of being equal to the default value.
 *
 * The default value is the one the property will get when the node is just instantiated and can come from an ancestor scene in the inheritance/instantiation chain, a script or a builtin class.
 *
*/
$property_pinned: Signal<() => void>

/**
 * If you want a sub-resource to be edited, emit this signal with the resource.
 *
*/
$resource_selected: Signal<() => void>

/**
 * Emitted when selected. Used internally.
 *
*/
$selected: Signal<() => void>

}

