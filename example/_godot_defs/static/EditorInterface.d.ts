
/**
 * [EditorInterface] gives you control over Godot editor's window. It allows customizing the window, saving and (re-)loading scenes, rendering mesh previews, inspecting and editing resources and objects, and provides access to [EditorSettings], [EditorFileSystem], [EditorResourcePreview], [ScriptEditor], the editor viewport, and information about scenes.
 *
 * **Note:** This class shouldn't be instantiated directly. Instead, access the singleton directly by its name.
 *
 * @example 
 * 
 * 
 * var editor_settings = EditorInterface.get_editor_settings()
 * 
 * 
 * // In C# you can access it via the static Singleton property.
 * EditorSettings settings = EditorInterface.Singleton.GetEditorSettings();
 * 
 * @summary 
 * 
 *
*/
declare class EditorInterfaceClass extends Object  {

  
/**
 * [EditorInterface] gives you control over Godot editor's window. It allows customizing the window, saving and (re-)loading scenes, rendering mesh previews, inspecting and editing resources and objects, and provides access to [EditorSettings], [EditorFileSystem], [EditorResourcePreview], [ScriptEditor], the editor viewport, and information about scenes.
 *
 * **Note:** This class shouldn't be instantiated directly. Instead, access the singleton directly by its name.
 *
 * @example 
 * 
 * 
 * var editor_settings = EditorInterface.get_editor_settings()
 * 
 * 
 * // In C# you can access it via the static Singleton property.
 * EditorSettings settings = EditorInterface.Singleton.GetEditorSettings();
 * 
 * @summary 
 * 
 *
*/
  new(): EditorInterfaceClass; 
  static "new"(): EditorInterfaceClass 


/** If [code]true[/code], enables distraction-free mode which hides side docks to increase the space available for the main view. */
distraction_free_mode: boolean;

/** If [code]true[/code], the Movie Maker mode is enabled in the editor. See [MovieWriter] for more information. */
movie_maker_enabled: boolean;

/** Edits the given [Node]. The node will be also selected if it's inside the scene tree. */
edit_node(): void;

/** Edits the given [Resource]. If the resource is a [Script] you can also edit it with [method edit_script] to specify the line and column position. */
edit_resource(): void;

/** Edits the given [Script]. The line and column on which to open the script can also be specified. The script will be open with the user-configured editor for the script's language which may be an external editor. */
edit_script(): void;

/**
 * Returns the main container of Godot editor's window. For example, you can use it to retrieve the size of the container and place your controls accordingly.
 *
 * **Warning:** Removing and freeing this node will render the editor useless and may cause a crash.
 *
*/
get_base_control(): Control;

/**
 * Returns the editor's [EditorCommandPalette] instance.
 *
 * **Warning:** Removing and freeing this node will render a part of the editor useless and may cause a crash.
 *
*/
get_command_palette(): EditorCommandPalette;

/** Returns the current directory being viewed in the [FileSystemDock]. If a file is selected, its base directory will be returned using [method String.get_base_dir] instead. */
get_current_directory(): string;

/**
 * Returns the name of the currently activated feature profile. If the default profile is currently active, an empty string is returned instead.
 *
 * In order to get a reference to the [EditorFeatureProfile], you must load the feature profile using [method EditorFeatureProfile.load_from_file].
 *
 * **Note:** Feature profiles created via the user interface are loaded from the `feature_profiles` directory, as a file with the `.profile` extension. The editor configuration folder can be found by using [method EditorPaths.get_config_dir].
 *
*/
get_current_feature_profile(): string;

/** Returns the current path being viewed in the [FileSystemDock]. */
get_current_path(): string;

/** Returns the edited (current) scene's root [Node]. */
get_edited_scene_root(): Node;

/**
 * Returns the editor control responsible for main screen plugins and tools. Use it with plugins that implement [method EditorPlugin._has_main_screen].
 *
 * **Warning:** Removing and freeing this node will render a part of the editor useless and may cause a crash.
 *
*/
get_editor_main_screen(): VBoxContainer;

/** Returns the [EditorPaths] singleton. */
get_editor_paths(): EditorPaths;

/**
 * Returns the actual scale of the editor UI (`1.0` being 100% scale). This can be used to adjust position and dimensions of the UI added by plugins.
 *
 * **Note:** This value is set via the `interface/editor/display_scale` and `interface/editor/custom_display_scale` editor settings. Editor must be restarted for changes to be properly applied.
 *
*/
get_editor_scale(): float;

/** Returns the editor's [EditorSettings] instance. */
get_editor_settings(): EditorSettings;

/**
 * Returns the editor's [Theme].
 *
 * **Note:** When creating custom editor UI, prefer accessing theme items directly from your GUI nodes using the `get_theme_*` methods.
 *
*/
get_editor_theme(): Theme;

/** Returns the 2D editor [SubViewport]. It does not have a camera. Instead, the view transforms are done directly and can be accessed with [member Viewport.global_canvas_transform]. */
get_editor_viewport_2d(): SubViewport;

/** Returns the specified 3D editor [SubViewport], from [code]0[/code] to [code]3[/code]. The viewport can be used to access the active editor cameras with [method Viewport.get_camera_3d]. */
get_editor_viewport_3d(): SubViewport;

/**
 * Returns the editor's [FileSystemDock] instance.
 *
 * **Warning:** Removing and freeing this node will render a part of the editor useless and may cause a crash.
 *
*/
get_file_system_dock(): FileSystemDock;

/**
 * Returns the editor's [EditorInspector] instance.
 *
 * **Warning:** Removing and freeing this node will render a part of the editor useless and may cause a crash.
 *
*/
get_inspector(): EditorInspector;

/** Returns an [Array] with the file paths of the currently opened scenes. */
get_open_scenes(): PackedStringArray;

/** Returns the name of the scene that is being played. If no scene is currently being played, returns an empty string. */
get_playing_scene(): string;

/** Returns the editor's [EditorFileSystem] instance. */
get_resource_filesystem(): EditorFileSystem;

/** Returns the editor's [EditorResourcePreview] instance. */
get_resource_previewer(): EditorResourcePreview;

/**
 * Returns the editor's [ScriptEditor] instance.
 *
 * **Warning:** Removing and freeing this node will render a part of the editor useless and may cause a crash.
 *
*/
get_script_editor(): ScriptEditor;

/** Returns an array containing the paths of the currently selected files (and directories) in the [FileSystemDock]. */
get_selected_paths(): PackedStringArray;

/** Returns the editor's [EditorSelection] instance. */
get_selection(): EditorSelection;

/** Shows the given property on the given [param object] in the editor's Inspector dock. If [param inspector_only] is [code]true[/code], plugins will not attempt to edit [param object]. */
inspect_object(): void;

/** Returns [code]true[/code] if a scene is currently being played, [code]false[/code] otherwise. Paused scenes are considered as being played. */
is_playing_scene(): boolean;

/** Returns [code]true[/code] if the specified [param plugin] is enabled. The plugin name is the same as its directory name. */
is_plugin_enabled(): boolean;

/** Returns mesh previews rendered at the given size as an [Array] of [Texture2D]s. */
make_mesh_previews(): Texture2D[];

/** Marks the current scene tab as unsaved. */
mark_scene_as_unsaved(): void;

/** Opens the scene at the given path. */
open_scene_from_path(): void;

/** Plays the currently active scene. */
play_current_scene(): void;

/** Plays the scene specified by its filepath. */
play_custom_scene(): void;

/** Plays the main scene. */
play_main_scene(): void;

/**
 * Pops up the [param dialog] in the editor UI with [method Window.popup_exclusive]. The dialog must have no current parent, otherwise the method fails.
 *
 * See also [method Window.set_unparent_when_invisible].
 *
*/
popup_dialog(): void;

/**
 * Pops up the [param dialog] in the editor UI with [method Window.popup_exclusive_centered]. The dialog must have no current parent, otherwise the method fails.
 *
 * See also [method Window.set_unparent_when_invisible].
 *
*/
popup_dialog_centered(): void;

/**
 * Pops up the [param dialog] in the editor UI with [method Window.popup_exclusive_centered_clamped]. The dialog must have no current parent, otherwise the method fails.
 *
 * See also [method Window.set_unparent_when_invisible].
 *
*/
popup_dialog_centered_clamped(): void;

/**
 * Pops up the [param dialog] in the editor UI with [method Window.popup_exclusive_centered_ratio]. The dialog must have no current parent, otherwise the method fails.
 *
 * See also [method Window.set_unparent_when_invisible].
 *
*/
popup_dialog_centered_ratio(): void;

/** Reloads the scene at the given path. */
reload_scene_from_path(): void;

/** Restarts the editor. This closes the editor and then opens the same project. If [param save] is [code]true[/code], the project will be saved before restarting. */
restart_editor(): void;

/** Saves all opened scenes in the editor. */
save_all_scenes(): void;

/** Saves the currently active scene. Returns either [constant OK] or [constant ERR_CANT_CREATE]. */
save_scene(): int;

/** Saves the currently active scene as a file at [param path]. */
save_scene_as(): void;

/** Selects the file, with the path provided by [param file], in the FileSystem dock. */
select_file(): void;

/**
 * Selects and activates the specified feature profile with the given [param profile_name]. Set [param profile_name] to an empty string to reset to the default feature profile.
 *
 * A feature profile can be created programmatically using the [EditorFeatureProfile] class.
 *
 * **Note:** The feature profile that gets activated must be located in the `feature_profiles` directory, as a file with the `.profile` extension. If a profile could not be found, an error occurs. The editor configuration folder can be found by using [method EditorPaths.get_config_dir].
 *
*/
set_current_feature_profile(): void;

/** Sets the editor's current main screen to the one specified in [param name]. [param name] must match the title of the tab in question exactly (e.g. [code]2D[/code], [code]3D[/code], [code skip-lint]Script[/code], or [code]AssetLib[/code] for default tabs). */
set_main_screen_editor(): void;

/** Sets the enabled status of a plugin. The plugin name is the same as its directory name. */
set_plugin_enabled(): void;

/** Stops the scene that is currently playing. */
stop_playing_scene(): void;

  connect<T extends SignalsOf<EditorInterfaceClass>>(signal: T, method: SignalFunction<EditorInterfaceClass[T]>): number;






}

