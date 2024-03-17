
/**
 * [EditorInspectorPlugin] allows adding custom property editors to [EditorInspector].
 *
 * When an object is edited, the [method _can_handle] function is called and must return `true` if the object type is supported.
 *
 * If supported, the function [method _parse_begin] will be called, allowing to place custom controls at the beginning of the class.
 *
 * Subsequently, the [method _parse_category] and [method _parse_property] are called for every category and property. They offer the ability to add custom controls to the inspector too.
 *
 * Finally, [method _parse_end] will be called.
 *
 * On each of these calls, the "add" functions can be called.
 *
 * To use [EditorInspectorPlugin], register it using the [method EditorPlugin.add_inspector_plugin] method first.
 *
*/
declare class EditorInspectorPlugin extends RefCounted  {

  
/**
 * [EditorInspectorPlugin] allows adding custom property editors to [EditorInspector].
 *
 * When an object is edited, the [method _can_handle] function is called and must return `true` if the object type is supported.
 *
 * If supported, the function [method _parse_begin] will be called, allowing to place custom controls at the beginning of the class.
 *
 * Subsequently, the [method _parse_category] and [method _parse_property] are called for every category and property. They offer the ability to add custom controls to the inspector too.
 *
 * Finally, [method _parse_end] will be called.
 *
 * On each of these calls, the "add" functions can be called.
 *
 * To use [EditorInspectorPlugin], register it using the [method EditorPlugin.add_inspector_plugin] method first.
 *
*/
  new(): EditorInspectorPlugin; 
  static "new"(): EditorInspectorPlugin 



/** Returns [code]true[/code] if this object can be handled by this plugin. */
protected _can_handle(): boolean;

/** Called to allow adding controls at the beginning of the property list for [param object]. */
protected _parse_begin(): void;

/** Called to allow adding controls at the beginning of a category in the property list for [param object]. */
protected _parse_category(): void;

/** Called to allow adding controls at the end of the property list for [param object]. */
protected _parse_end(): void;

/** Called to allow adding controls at the beginning of a group or a sub-group in the property list for [param object]. */
protected _parse_group(): void;

/** Called to allow adding property-specific editors to the property list for [param object]. The added editor control must extend [EditorProperty]. Returning [code]true[/code] removes the built-in editor for this property, otherwise allows to insert a custom editor before the built-in one. */
protected _parse_property(): boolean;

/** Adds a custom control, which is not necessarily a property editor. */
add_custom_control(): void;

/** Adds a property editor for an individual property. The [param editor] control must extend [EditorProperty]. */
add_property_editor(): void;

/** Adds an editor that allows modifying multiple properties. The [param editor] control must extend [EditorProperty]. */
add_property_editor_for_multiple_properties(): void;

  connect<T extends SignalsOf<EditorInspectorPlugin>>(signal: T, method: SignalFunction<EditorInspectorPlugin[T]>): number;






}

