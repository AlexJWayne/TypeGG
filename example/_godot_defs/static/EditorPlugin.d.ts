
/**
 * Plugins are used by the editor to extend functionality. The most common types of plugins are those which edit a given node or resource type, import plugins and export plugins. See also [EditorScript] to add functions to the editor.
 *
 * **Note:** Some names in this class contain "left" or "right" (e.g. [constant DOCK_SLOT_LEFT_UL]). These APIs assume left-to-right layout, and would be backwards when using right-to-left layout. These names are kept for compatibility reasons.
 *
*/
declare class EditorPlugin extends Node  {

  
/**
 * Plugins are used by the editor to extend functionality. The most common types of plugins are those which edit a given node or resource type, import plugins and export plugins. See also [EditorScript] to add functions to the editor.
 *
 * **Note:** Some names in this class contain "left" or "right" (e.g. [constant DOCK_SLOT_LEFT_UL]). These APIs assume left-to-right layout, and would be backwards when using right-to-left layout. These names are kept for compatibility reasons.
 *
*/
  new(): EditorPlugin; 
  static "new"(): EditorPlugin 



/**
 * This method is called when the editor is about to save the project, switch to another tab, etc. It asks the plugin to apply any pending state changes to ensure consistency.
 *
 * This is used, for example, in shader editors to let the plugin know that it must apply the shader code being written by the user to the object.
 *
*/
protected _apply_changes(): void;

/**
 * This method is called when the editor is about to run the project. The plugin can then perform required operations before the project runs.
 *
 * This method must return a boolean. If this method returns `false`, the project will not run. The run is aborted immediately, so this also prevents all other plugins' [method _build] methods from running.
 *
*/
protected _build(): boolean;

/** Clear all the state and reset the object being edited to zero. This ensures your plugin does not keep editing a currently existing node, or a node from the wrong scene. */
protected _clear(): void;

/** Called by the engine when the user disables the [EditorPlugin] in the Plugin tab of the project settings window. */
protected _disable_plugin(): void;

/**
 * This function is used for plugins that edit specific object types (nodes or resources). It requests the editor to edit the given object.
 *
 * [param object] can be `null` if the plugin was editing an object, but there is no longer any selected object handled by this plugin. It can be used to cleanup editing state.
 *
*/
protected _edit(): void;

/** Called by the engine when the user enables the [EditorPlugin] in the Plugin tab of the project settings window. */
protected _enable_plugin(): void;

/**
 * Called by the engine when the 3D editor's viewport is updated. Use the `overlay` [Control] for drawing. You can update the viewport manually by calling [method update_overlays].
 *
 * @example 
 * 
 * 
 * func _forward_3d_draw_over_viewport(overlay):
 *     # Draw a circle at cursor position.
 *     overlay.draw_circle(overlay.get_local_mouse_position(), 64)
 * func _forward_3d_gui_input(camera, event):
 *     if event is InputEventMouseMotion:
 *         # Redraw viewport when cursor is moved.
 *         update_overlays()
 *         return EditorPlugin.AFTER_GUI_INPUT_STOP
 *     return EditorPlugin.AFTER_GUI_INPUT_PASS
 * 
 * 
 * public override void _Forward3DDrawOverViewport(Control viewportControl)
 * {
 *     // Draw a circle at cursor position.
 *     viewportControl.DrawCircle(viewportControl.GetLocalMousePosition(), 64, Colors.White);
 * }
 * public override EditorPlugin.AfterGuiInput _Forward3DGuiInput(Camera3D viewportCamera, InputEvent @event)
 * {
 *     if (@event is InputEventMouseMotion)
 *     {
 *         // Redraw viewport when cursor is moved.
 *         UpdateOverlays();
 *         return EditorPlugin.AfterGuiInput.Stop;
 *     }
 *     return EditorPlugin.AfterGuiInput.Pass;
 * }
 * 
 * @summary 
 * 
 *
*/
protected _forward_3d_draw_over_viewport(): void;

/**
 * This method is the same as [method _forward_3d_draw_over_viewport], except it draws on top of everything. Useful when you need an extra layer that shows over anything else.
 *
 * You need to enable calling of this method by using [method set_force_draw_over_forwarding_enabled].
 *
*/
protected _forward_3d_force_draw_over_viewport(): void;

/**
 * Called when there is a root node in the current edited scene, [method _handles] is implemented, and an [InputEvent] happens in the 3D viewport. The return value decides whether the [InputEvent] is consumed or forwarded to other [EditorPlugin]s. See [enum AfterGUIInput] for options.
 *
 * **Example:**
 *
 * @example 
 * 
 * 
 * # Prevents the InputEvent from reaching other Editor classes.
 * func _forward_3d_gui_input(camera, event):
 *     return EditorPlugin.AFTER_GUI_INPUT_STOP
 * 
 * 
 * // Prevents the InputEvent from reaching other Editor classes.
 * public override EditorPlugin.AfterGuiInput _Forward3DGuiInput(Camera3D camera, InputEvent @event)
 * {
 *     return EditorPlugin.AfterGuiInput.Stop;
 * }
 * 
 * @summary 
 * 
 *
 * Must `return EditorPlugin.AFTER_GUI_INPUT_PASS` in order to forward the [InputEvent] to other Editor classes.
 *
 * **Example:**
 *
 * @example 
 * 
 * 
 * # Consumes InputEventMouseMotion and forwards other InputEvent types.
 * func _forward_3d_gui_input(camera, event):
 *     return EditorPlugin.AFTER_GUI_INPUT_STOP if event is InputEventMouseMotion else EditorPlugin.AFTER_GUI_INPUT_PASS
 * 
 * 
 * // Consumes InputEventMouseMotion and forwards other InputEvent types.
 * public override EditorPlugin.AfterGuiInput _Forward3DGuiInput(Camera3D camera, InputEvent @event)
 * {
 *     return @event is InputEventMouseMotion ? EditorPlugin.AfterGuiInput.Stop : EditorPlugin.AfterGuiInput.Pass;
 * }
 * 
 * @summary 
 * 
 *
*/
protected _forward_3d_gui_input(): int;

/**
 * Called by the engine when the 2D editor's viewport is updated. Use the `overlay` [Control] for drawing. You can update the viewport manually by calling [method update_overlays].
 *
 * @example 
 * 
 * 
 * func _forward_canvas_draw_over_viewport(overlay):
 *     # Draw a circle at cursor position.
 *     overlay.draw_circle(overlay.get_local_mouse_position(), 64, Color.WHITE)
 * func _forward_canvas_gui_input(event):
 *     if event is InputEventMouseMotion:
 *         # Redraw viewport when cursor is moved.
 *         update_overlays()
 *         return true
 *     return false
 * 
 * 
 * public override void _ForwardCanvasDrawOverViewport(Control viewportControl)
 * {
 *     // Draw a circle at cursor position.
 *     viewportControl.DrawCircle(viewportControl.GetLocalMousePosition(), 64, Colors.White);
 * }
 * public override bool _ForwardCanvasGuiInput(InputEvent @event)
 * {
 *     if (@event is InputEventMouseMotion)
 *     {
 *         // Redraw viewport when cursor is moved.
 *         UpdateOverlays();
 *         return true;
 *     }
 *     return false;
 * }
 * 
 * @summary 
 * 
 *
*/
protected _forward_canvas_draw_over_viewport(): void;

/**
 * This method is the same as [method _forward_canvas_draw_over_viewport], except it draws on top of everything. Useful when you need an extra layer that shows over anything else.
 *
 * You need to enable calling of this method by using [method set_force_draw_over_forwarding_enabled].
 *
*/
protected _forward_canvas_force_draw_over_viewport(): void;

/**
 * Called when there is a root node in the current edited scene, [method _handles] is implemented and an [InputEvent] happens in the 2D viewport. Intercepts the [InputEvent], if `return true` [EditorPlugin] consumes the [param event], otherwise forwards [param event] to other Editor classes.
 *
 * **Example:**
 *
 * @example 
 * 
 * 
 * # Prevents the InputEvent from reaching other Editor classes.
 * func _forward_canvas_gui_input(event):
 *     return true
 * 
 * 
 * // Prevents the InputEvent from reaching other Editor classes.
 * public override bool ForwardCanvasGuiInput(InputEvent @event)
 * {
 *     return true;
 * }
 * 
 * @summary 
 * 
 *
 * Must `return false` in order to forward the [InputEvent] to other Editor classes.
 *
 * **Example:**
 *
 * @example 
 * 
 * 
 * # Consumes InputEventMouseMotion and forwards other InputEvent types.
 * func _forward_canvas_gui_input(event):
 *     if (event is InputEventMouseMotion):
 *         return true
 *     return false
 * 
 * 
 * // Consumes InputEventMouseMotion and forwards other InputEvent types.
 * public override bool _ForwardCanvasGuiInput(InputEvent @event)
 * {
 *     if (@event is InputEventMouseMotion)
 *     {
 *         return true;
 *     }
 *     return false;
 * }
 * 
 * @summary 
 * 
 *
*/
protected _forward_canvas_gui_input(): boolean;

/** This is for editors that edit script-based objects. You can return a list of breakpoints in the format ([code]script:line[/code]), for example: [code]res://path_to_script.gd:25[/code]. */
protected _get_breakpoints(): PackedStringArray;

/**
 * Override this method in your plugin to return a [Texture2D] in order to give it an icon.
 *
 * For main screen plugins, this appears at the top of the screen, to the right of the "2D", "3D", "Script", and "AssetLib" buttons.
 *
 * Ideally, the plugin icon should be white with a transparent background and 16x16 pixels in size.
 *
 * @example 
 * 
 * 
 * func _get_plugin_icon():
 *     # You can use a custom icon:
 *     return preload("res://addons/my_plugin/my_plugin_icon.svg")
 *     # Or use a built-in icon:
 *     return EditorInterface.get_editor_theme().get_icon("Node", "EditorIcons")
 * 
 * 
 * public override Texture2D _GetPluginIcon()
 * {
 *     // You can use a custom icon:
 *     return ResourceLoader.Load<Texture2D>("res://addons/my_plugin/my_plugin_icon.svg");
 *     // Or use a built-in icon:
 *     return EditorInterface.Singleton.GetEditorTheme().GetIcon("Node", "EditorIcons");
 * }
 * 
 * @summary 
 * 
 *
*/
protected _get_plugin_icon(): Texture2D;

/**
 * Override this method in your plugin to provide the name of the plugin when displayed in the Godot editor.
 *
 * For main screen plugins, this appears at the top of the screen, to the right of the "2D", "3D", "Script", and "AssetLib" buttons.
 *
*/
protected _get_plugin_name(): string;

/**
 * Override this method to provide a state data you want to be saved, like view position, grid settings, folding, etc. This is used when saving the scene (so state is kept when opening it again) and for switching tabs (so state can be restored when the tab returns). This data is automatically saved for each scene in an `editstate` file in the editor metadata folder. If you want to store global (scene-independent) editor data for your plugin, you can use [method _get_window_layout] instead.
 *
 * Use [method _set_state] to restore your saved state.
 *
 * **Note:** This method should not be used to save important settings that should persist with the project.
 *
 * **Note:** You must implement [method _get_plugin_name] for the state to be stored and restored correctly.
 *
 * @example 
 * 
 * func _get_state():
 *     var state = {"zoom": zoom, "preferred_color": my_color}
 *     return state
 * @summary 
 * 
 *
*/
protected _get_state(): Dictionary<any, any>;

/**
 * Override this method to provide a custom message that lists unsaved changes. The editor will call this method when exiting or when closing a scene, and display the returned string in a confirmation dialog. Return empty string if the plugin has no unsaved changes.
 *
 * When closing a scene, [param for_scene] is the path to the scene being closed. You can use it to handle built-in resources in that scene.
 *
 * If the user confirms saving, [method _save_external_data] will be called, before closing the editor.
 *
 * @example 
 * 
 * func _get_unsaved_status(for_scene):
 *     if not unsaved:
 *         return ""
 *     if for_scene.is_empty():
 *         return "Save changes in MyCustomPlugin before closing?"
 *     else:
 *         return "Scene %s has changes from MyCustomPlugin. Save before closing?" % for_scene.get_file()
 * func _save_external_data():
 *     unsaved = false
 * @summary 
 * 
 *
 * If the plugin has no scene-specific changes, you can ignore the calls when closing scenes:
 *
 * @example 
 * 
 * func _get_unsaved_status(for_scene):
 *     if not for_scene.is_empty():
 *         return ""
 * @summary 
 * 
 *
*/
protected _get_unsaved_status(): string;

/**
 * Override this method to provide the GUI layout of the plugin or any other data you want to be stored. This is used to save the project's editor layout when [method queue_save_layout] is called or the editor layout was changed (for example changing the position of a dock). The data is stored in the `editor_layout.cfg` file in the editor metadata directory.
 *
 * Use [method _set_window_layout] to restore your saved layout.
 *
 * @example 
 * 
 * func _get_window_layout(configuration):
 *     configuration.set_value("MyPlugin", "window_position", $Window.position)
 *     configuration.set_value("MyPlugin", "icon_color", $Icon.modulate)
 * @summary 
 * 
 *
*/
protected _get_window_layout(): void;

/**
 * Implement this function if your plugin edits a specific type of object (Resource or Node). If you return `true`, then you will get the functions [method _edit] and [method _make_visible] called when the editor requests them. If you have declared the methods [method _forward_canvas_gui_input] and [method _forward_3d_gui_input] these will be called too.
 *
 * **Note:** Each plugin should handle only one type of objects at a time. If a plugin handes more types of objects and they are edited at the same time, it will result in errors.
 *
*/
protected _handles(): boolean;

/**
 * Returns `true` if this is a main screen editor plugin (it goes in the workspace selector together with **2D**, **3D**, **Script** and **AssetLib**).
 *
 * When the plugin's workspace is selected, other main screen plugins will be hidden, but your plugin will not appear automatically. It needs to be added as a child of [method EditorInterface.get_base_control] and made visible inside [method _make_visible].
 *
 * Use [method _get_plugin_name] and [method _get_plugin_icon] to customize the plugin button's appearance.
 *
 * @example 
 * 
 * var plugin_control
 * func _enter_tree():
 *     plugin_control = preload("my_plugin_control.tscn").instantiate()
 *     EditorInterface.get_editor_main_screen().add_child(plugin_control)
 *     plugin_control.hide()
 * func _has_main_screen():
 *     return true
 * func _make_visible(visible):
 *     plugin_control.visible = visible
 * func _get_plugin_name():
 *     return "My Super Cool Plugin 3000"
 * func _get_plugin_icon():
 *     return EditorInterface.get_editor_theme().get_icon("Node", "EditorIcons")
 * @summary 
 * 
 *
*/
protected _has_main_screen(): boolean;

/**
 * This function will be called when the editor is requested to become visible. It is used for plugins that edit a specific object type.
 *
 * Remember that you have to manage the visibility of all your editor controls manually.
 *
*/
protected _make_visible(): void;

/** This method is called after the editor saves the project or when it's closed. It asks the plugin to save edited external scenes/resources. */
protected _save_external_data(): void;

/**
 * Restore the state saved by [method _get_state]. This method is called when the current scene tab is changed in the editor.
 *
 * **Note:** Your plugin must implement [method _get_plugin_name], otherwise it will not be recognized and this method will not be called.
 *
 * @example 
 * 
 * func _set_state(data):
 *     zoom = data.get("zoom", 1.0)
 *     preferred_color = data.get("my_color", Color.WHITE)
 * @summary 
 * 
 *
*/
protected _set_state(): void;

/**
 * Restore the plugin GUI layout and data saved by [method _get_window_layout]. This method is called for every plugin on editor startup. Use the provided [param configuration] file to read your saved data.
 *
 * @example 
 * 
 * func _set_window_layout(configuration):
 *     $Window.position = configuration.get_value("MyPlugin", "window_position", Vector2())
 *     $Icon.modulate = configuration.get_value("MyPlugin", "icon_color", Color.WHITE)
 * @summary 
 * 
 *
*/
protected _set_window_layout(): void;

/** Adds a script at [param path] to the Autoload list as [param name]. */
add_autoload_singleton(): void;

/** Adds a control to the bottom panel (together with Output, Debug, Animation, etc). Returns a reference to the button added. It's up to you to hide/show the button when needed. When your plugin is deactivated, make sure to remove your custom control with [method remove_control_from_bottom_panel] and free it with [method Node.queue_free]. */
add_control_to_bottom_panel(): Button;

/**
 * Adds a custom control to a container (see [enum CustomControlContainer]). There are many locations where custom controls can be added in the editor UI.
 *
 * Please remember that you have to manage the visibility of your custom controls yourself (and likely hide it after adding it).
 *
 * When your plugin is deactivated, make sure to remove your custom control with [method remove_control_from_container] and free it with [method Node.queue_free].
 *
*/
add_control_to_container(): void;

/**
 * Adds the control to a specific dock slot (see [enum DockSlot] for options).
 *
 * If the dock is repositioned and as long as the plugin is active, the editor will save the dock position on further sessions.
 *
 * When your plugin is deactivated, make sure to remove your custom control with [method remove_control_from_docks] and free it with [method Node.queue_free].
 *
*/
add_control_to_dock(): void;

/**
 * Adds a custom type, which will appear in the list of nodes or resources. An icon can be optionally passed.
 *
 * When a given node or resource is selected, the base type will be instantiated (e.g. "Node3D", "Control", "Resource"), then the script will be loaded and set to this object.
 *
 * **Note:** The base type is the base engine class which this type's class hierarchy inherits, not any custom type parent classes.
 *
 * You can use the virtual method [method _handles] to check if your custom object is being edited by checking the script or using the `is` keyword.
 *
 * During run-time, this will be a simple object with a script so this function does not need to be called then.
 *
 * **Note:** Custom types added this way are not true classes. They are just a helper to create a node with specific script.
 *
*/
add_custom_type(): void;

/** Adds a [Script] as debugger plugin to the Debugger. The script must extend [EditorDebuggerPlugin]. */
add_debugger_plugin(): void;

/**
 * Registers a new [EditorExportPlugin]. Export plugins are used to perform tasks when the project is being exported.
 *
 * See [method add_inspector_plugin] for an example of how to register a plugin.
 *
*/
add_export_plugin(): void;

/**
 * Registers a new [EditorImportPlugin]. Import plugins are used to import custom and unsupported assets as a custom [Resource] type.
 *
 * If [param first_priority] is `true`, the new import plugin is inserted first in the list and takes precedence over pre-existing plugins.
 *
 * **Note:** If you want to import custom 3D asset formats use [method add_scene_format_importer_plugin] instead.
 *
 * See [method add_inspector_plugin] for an example of how to register a plugin.
 *
*/
add_import_plugin(): void;

/**
 * Registers a new [EditorInspectorPlugin]. Inspector plugins are used to extend [EditorInspector] and provide custom configuration tools for your object's properties.
 *
 * **Note:** Always use [method remove_inspector_plugin] to remove the registered [EditorInspectorPlugin] when your [EditorPlugin] is disabled to prevent leaks and an unexpected behavior.
 *
 * @example 
 * 
 * 
 * const MyInspectorPlugin = preload("res://addons/your_addon/path/to/your/script.gd")
 * var inspector_plugin = MyInspectorPlugin.new()
 * func _enter_tree():
 *     add_inspector_plugin(inspector_plugin)
 * func _exit_tree():
 *     remove_inspector_plugin(inspector_plugin)
 * 
 * @summary 
 * 
 *
*/
add_inspector_plugin(): void;

/**
 * Registers a new [EditorNode3DGizmoPlugin]. Gizmo plugins are used to add custom gizmos to the 3D preview viewport for a [Node3D].
 *
 * See [method add_inspector_plugin] for an example of how to register a plugin.
 *
*/
add_node_3d_gizmo_plugin(): void;

/**
 * Registers a new [EditorResourceConversionPlugin]. Resource conversion plugins are used to add custom resource converters to the editor inspector.
 *
 * See [EditorResourceConversionPlugin] for an example of how to create a resource conversion plugin.
 *
*/
add_resource_conversion_plugin(): void;

/**
 * Registers a new [EditorSceneFormatImporter]. Scene importers are used to import custom 3D asset formats as scenes.
 *
 * If [param first_priority] is `true`, the new import plugin is inserted first in the list and takes precedence over pre-existing plugins.
 *
*/
add_scene_format_importer_plugin(): void;

/**
 * Add a [EditorScenePostImportPlugin]. These plugins allow customizing the import process of 3D assets by adding new options to the import dialogs.
 *
 * If [param first_priority] is `true`, the new import plugin is inserted first in the list and takes precedence over pre-existing plugins.
 *
*/
add_scene_post_import_plugin(): void;

/** Adds a custom menu item to [b]Project > Tools[/b] named [param name]. When clicked, the provided [param callable] will be called. */
add_tool_menu_item(): void;

/** Adds a custom [PopupMenu] submenu under [b]Project > Tools >[/b] [param name]. Use [method remove_tool_menu_item] on plugin clean up to remove the menu. */
add_tool_submenu_item(): void;

/** Registers a custom translation parser plugin for extracting translatable strings from custom files. */
add_translation_parser_plugin(): void;

/**
 * Hooks a callback into the undo/redo action creation when a property is modified in the inspector. This allows, for example, to save other properties that may be lost when a given property is modified.
 *
 * The callback should have 4 arguments: [Object] `undo_redo`, [Object] `modified_object`, [String] `property` and [Variant] `new_value`. They are, respectively, the [UndoRedo] object used by the inspector, the currently modified object, the name of the modified property and the new value the property is about to take.
 *
*/
add_undo_redo_inspector_hook_callback(): void;

/**
 * Returns the [EditorInterface] singleton instance.
 *
 * **Deprecated.** [EditorInterface] is a global singleton and can be accessed directly by its name.
 *
*/
get_editor_interface(): EditorInterface;

/** Returns the [PopupMenu] under [b]Scene > Export As...[/b]. */
get_export_as_menu(): PopupMenu;

/** Provide the version of the plugin declared in the [code]plugin.cfg[/code] config file. */
get_plugin_version(): string;

/**
 * Gets the Editor's dialog used for making scripts.
 *
 * **Note:** Users can configure it before use.
 *
 * **Warning:** Removing and freeing this node will render a part of the editor useless and may cause a crash.
 *
*/
get_script_create_dialog(): ScriptCreateDialog;

/** Gets the undo/redo object. Most actions in the editor can be undoable, so use this object to make sure this happens when it's worth it. */
get_undo_redo(): EditorUndoRedoManager;

/** Minimizes the bottom panel. */
hide_bottom_panel(): void;

/** Makes a specific item in the bottom panel visible. */
make_bottom_panel_item_visible(): void;

/** Queue save the project's editor layout. */
queue_save_layout(): void;

/** Removes an Autoload [param name] from the list. */
remove_autoload_singleton(): void;

/** Removes the control from the bottom panel. You have to manually [method Node.queue_free] the control. */
remove_control_from_bottom_panel(): void;

/** Removes the control from the specified container. You have to manually [method Node.queue_free] the control. */
remove_control_from_container(): void;

/** Removes the control from the dock. You have to manually [method Node.queue_free] the control. */
remove_control_from_docks(): void;

/** Removes a custom type added by [method add_custom_type]. */
remove_custom_type(): void;

/** Removes the debugger plugin with given script from the Debugger. */
remove_debugger_plugin(): void;

/** Removes an export plugin registered by [method add_export_plugin]. */
remove_export_plugin(): void;

/** Removes an import plugin registered by [method add_import_plugin]. */
remove_import_plugin(): void;

/** Removes an inspector plugin registered by [method add_import_plugin] */
remove_inspector_plugin(): void;

/** Removes a gizmo plugin registered by [method add_node_3d_gizmo_plugin]. */
remove_node_3d_gizmo_plugin(): void;

/** Removes a resource conversion plugin registered by [method add_resource_conversion_plugin]. */
remove_resource_conversion_plugin(): void;

/** Removes a scene format importer registered by [method add_scene_format_importer_plugin]. */
remove_scene_format_importer_plugin(): void;

/** Remove the [EditorScenePostImportPlugin], added with [method add_scene_post_import_plugin]. */
remove_scene_post_import_plugin(): void;

/** Removes a menu [param name] from [b]Project > Tools[/b]. */
remove_tool_menu_item(): void;

/** Removes a custom translation parser plugin registered by [method add_translation_parser_plugin]. */
remove_translation_parser_plugin(): void;

/** Removes a callback previously added by [method add_undo_redo_inspector_hook_callback]. */
remove_undo_redo_inspector_hook_callback(): void;

/** Enables calling of [method _forward_canvas_force_draw_over_viewport] for the 2D editor and [method _forward_3d_force_draw_over_viewport] for the 3D editor when their viewports are updated. You need to call this method only once and it will work permanently for this plugin. */
set_force_draw_over_forwarding_enabled(): void;

/** Use this method if you always want to receive inputs from 3D view screen inside [method _forward_3d_gui_input]. It might be especially usable if your plugin will want to use raycast in the scene. */
set_input_event_forwarding_always_enabled(): void;

/** Updates the overlays of the 2D and 3D editor viewport. Causes methods [method _forward_canvas_draw_over_viewport], [method _forward_canvas_force_draw_over_viewport], [method _forward_3d_draw_over_viewport] and [method _forward_3d_force_draw_over_viewport] to be called. */
update_overlays(): int;

  connect<T extends SignalsOf<EditorPlugin>>(signal: T, method: SignalFunction<EditorPlugin[T]>): number;



/**
 * Main editor toolbar, next to play buttons.
 *
*/
static CONTAINER_TOOLBAR: any;

/**
 * The toolbar that appears when 3D editor is active.
 *
*/
static CONTAINER_SPATIAL_EDITOR_MENU: any;

/**
 * Left sidebar of the 3D editor.
 *
*/
static CONTAINER_SPATIAL_EDITOR_SIDE_LEFT: any;

/**
 * Right sidebar of the 3D editor.
 *
*/
static CONTAINER_SPATIAL_EDITOR_SIDE_RIGHT: any;

/**
 * Bottom panel of the 3D editor.
 *
*/
static CONTAINER_SPATIAL_EDITOR_BOTTOM: any;

/**
 * The toolbar that appears when 2D editor is active.
 *
*/
static CONTAINER_CANVAS_EDITOR_MENU: any;

/**
 * Left sidebar of the 2D editor.
 *
*/
static CONTAINER_CANVAS_EDITOR_SIDE_LEFT: any;

/**
 * Right sidebar of the 2D editor.
 *
*/
static CONTAINER_CANVAS_EDITOR_SIDE_RIGHT: any;

/**
 * Bottom panel of the 2D editor.
 *
*/
static CONTAINER_CANVAS_EDITOR_BOTTOM: any;

/**
 * Bottom section of the inspector.
 *
*/
static CONTAINER_INSPECTOR_BOTTOM: any;

/**
 * Tab of Project Settings dialog, to the left of other tabs.
 *
*/
static CONTAINER_PROJECT_SETTING_TAB_LEFT: any;

/**
 * Tab of Project Settings dialog, to the right of other tabs.
 *
*/
static CONTAINER_PROJECT_SETTING_TAB_RIGHT: any;

/**
 * Dock slot, left side, upper-left (empty in default layout).
 *
*/
static DOCK_SLOT_LEFT_UL: any;

/**
 * Dock slot, left side, bottom-left (empty in default layout).
 *
*/
static DOCK_SLOT_LEFT_BL: any;

/**
 * Dock slot, left side, upper-right (in default layout includes Scene and Import docks).
 *
*/
static DOCK_SLOT_LEFT_UR: any;

/**
 * Dock slot, left side, bottom-right (in default layout includes FileSystem dock).
 *
*/
static DOCK_SLOT_LEFT_BR: any;

/**
 * Dock slot, right side, upper-left (in default layout includes Inspector, Node, and History docks).
 *
*/
static DOCK_SLOT_RIGHT_UL: any;

/**
 * Dock slot, right side, bottom-left (empty in default layout).
 *
*/
static DOCK_SLOT_RIGHT_BL: any;

/**
 * Dock slot, right side, upper-right (empty in default layout).
 *
*/
static DOCK_SLOT_RIGHT_UR: any;

/**
 * Dock slot, right side, bottom-right (empty in default layout).
 *
*/
static DOCK_SLOT_RIGHT_BR: any;

/**
 * Represents the size of the [enum DockSlot] enum.
 *
*/
static DOCK_SLOT_MAX: any;

/**
 * Forwards the [InputEvent] to other EditorPlugins.
 *
*/
static AFTER_GUI_INPUT_PASS: any;

/**
 * Prevents the [InputEvent] from reaching other Editor classes.
 *
*/
static AFTER_GUI_INPUT_STOP: any;

/**
 * Pass the [InputEvent] to other editor plugins except the main [Node3D] one. This can be used to prevent node selection changes and work with sub-gizmos instead.
 *
*/
static AFTER_GUI_INPUT_CUSTOM: any;


/**
 * Emitted when user changes the workspace (**2D**, **3D**, **Script**, **AssetLib**). Also works with custom screens defined by plugins.
 *
*/
$main_screen_changed: Signal<() => void>

/**
 * Emitted when any project setting has changed.
 *
 * **Deprecated.** Use [signal ProjectSettings.settings_changed] instead.
 *
*/
$project_settings_changed: Signal<() => void>

/**
 * Emitted when the given [param resource] was saved on disc.
 *
*/
$resource_saved: Signal<() => void>

/**
 * Emitted when the scene is changed in the editor. The argument will return the root node of the scene that has just become active. If this scene is new and empty, the argument will be `null`.
 *
*/
$scene_changed: Signal<() => void>

/**
 * Emitted when user closes a scene. The argument is file path to a closed scene.
 *
*/
$scene_closed: Signal<() => void>

}

