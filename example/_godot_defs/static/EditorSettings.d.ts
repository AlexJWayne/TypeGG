
/**
 * Object that holds the project-independent editor settings. These settings are generally visible in the **Editor > Editor Settings** menu.
 *
 * Property names use slash delimiters to distinguish sections. Setting values can be of any [Variant] type. It's recommended to use `snake_case` for editor settings to be consistent with the Godot editor itself.
 *
 * Accessing the settings can be done using the following methods, such as:
 *
 * @example 
 * 
 * 
 * var settings = EditorInterface.get_editor_settings()
 * # `settings.set("some/property", 10)` also works as this class overrides `_set()` internally.
 * settings.set_setting("some/property", 10)
 * # `settings.get("some/property")` also works as this class overrides `_get()` internally.
 * settings.get_setting("some/property")
 * var list_of_settings = settings.get_property_list()
 * 
 * 
 * EditorSettings settings = EditorInterface.Singleton.GetEditorSettings();
 * // `settings.set("some/property", value)` also works as this class overrides `_set()` internally.
 * settings.SetSetting("some/property", Value);
 * // `settings.get("some/property", value)` also works as this class overrides `_get()` internally.
 * settings.GetSetting("some/property");
 * Godot.Collections.Array<Godot.Collections.Dictionary> listOfSettings = settings.GetPropertyList();
 * 
 * @summary 
 * 
 *
 * **Note:** This class shouldn't be instantiated directly. Instead, access the singleton using [method EditorInterface.get_editor_settings].
 *
*/
declare class EditorSettings extends Resource  {

  
/**
 * Object that holds the project-independent editor settings. These settings are generally visible in the **Editor > Editor Settings** menu.
 *
 * Property names use slash delimiters to distinguish sections. Setting values can be of any [Variant] type. It's recommended to use `snake_case` for editor settings to be consistent with the Godot editor itself.
 *
 * Accessing the settings can be done using the following methods, such as:
 *
 * @example 
 * 
 * 
 * var settings = EditorInterface.get_editor_settings()
 * # `settings.set("some/property", 10)` also works as this class overrides `_set()` internally.
 * settings.set_setting("some/property", 10)
 * # `settings.get("some/property")` also works as this class overrides `_get()` internally.
 * settings.get_setting("some/property")
 * var list_of_settings = settings.get_property_list()
 * 
 * 
 * EditorSettings settings = EditorInterface.Singleton.GetEditorSettings();
 * // `settings.set("some/property", value)` also works as this class overrides `_set()` internally.
 * settings.SetSetting("some/property", Value);
 * // `settings.get("some/property", value)` also works as this class overrides `_get()` internally.
 * settings.GetSetting("some/property");
 * Godot.Collections.Array<Godot.Collections.Dictionary> listOfSettings = settings.GetPropertyList();
 * 
 * @summary 
 * 
 *
 * **Note:** This class shouldn't be instantiated directly. Instead, access the singleton using [method EditorInterface.get_editor_settings].
 *
*/
  new(): EditorSettings; 
  static "new"(): EditorSettings 


/** If [code]true[/code], automatically switches to the [b]Remote[/b] scene tree when running the project from the editor. If [code]false[/code], stays on the [b]Local[/b] scene tree when running the project from the editor. */
"debugger/auto_switch_to_remote_scene_tree": boolean;

/** The size of the profiler's frame history. The default value (3600) allows seeing up to 60 seconds of profiling if the project renders at a constant 60 FPS. Higher values allow viewing longer periods of profiling in the graphs, especially when the project is running at high framerates. */
"debugger/profiler_frame_history_size": int;

/**
 * The maximum number of script functions that can be displayed per frame in the profiler. If there are more script functions called in a given profiler frame, these functions will be discarded from the profiling results entirely.
 *
 * **Note:** This setting is only read when the profiler is first started, so changing it during profiling will have no effect.
 *
*/
"debugger/profiler_frame_max_functions": int;

/** The refresh interval for the remote inspector's properties (in seconds). Lower values are more reactive, but may cause stuttering while the project is running from the editor and the [b]Remote[/b] scene tree is selected in the Scene tree dock. */
"debugger/remote_inspect_refresh_interval": float;

/** The refresh interval for the remote scene tree (in seconds). Lower values are more reactive, but may cause stuttering while the project is running from the editor and the [b]Remote[/b] scene tree is selected in the Scene tree dock. */
"debugger/remote_scene_tree_refresh_interval": float;

/**
 * If `true`, displays folders in the FileSystem dock's bottom pane when split mode is enabled. If `false`, only files will be displayed in the bottom pane. Split mode can be toggled by pressing the icon next to the `res://` folder path.
 *
 * **Note:** This setting has no effect when split mode is disabled (which is the default).
 *
*/
"docks/filesystem/always_show_folders": boolean;

/** List of file extensions to consider as editable text files in the FileSystem dock (by double-clicking on the files). */
"docks/filesystem/textfile_extensions": string;

/** The thumbnail size to use in the FileSystem dock (in pixels). See also [member filesystem/file_dialog/thumbnail_size]. */
"docks/filesystem/thumbnail_size": int;

/** The refresh interval to use for the Inspector dock's properties. The effect of this setting is mainly noticeable when adjusting gizmos in the 2D/3D editor and looking at the inspector at the same time. Lower values make the inspector refresh more often, but take up more CPU time. */
"docks/property_editor/auto_refresh_interval": float;

/** The tint intensity to use for the subresources background in the Inspector dock. The tint is used to distinguish between different subresources in the inspector. Higher values result in a more noticeable background color difference. */
"docks/property_editor/subresource_hue_tint": float;

/** If [code]true[/code], the scene tree dock will automatically unfold nodes when a node that has folded parents is selected. */
"docks/scene_tree/auto_expand_to_selected": boolean;

/** If [code]true[/code], the Create dialog (Create New Node/Create New Resource) will start with all its sections expanded. Otherwise, sections will be collapsed until the user starts searching (which will automatically expand sections as needed). */
"docks/scene_tree/start_create_dialog_fully_expanded": boolean;

/** The "start" stop of the color gradient to use for bones in the 2D skeleton editor. */
"editors/2d/bone_color1": Color;

/** The "end" stop of the color gradient to use for bones in the 2D skeleton editor. */
"editors/2d/bone_color2": Color;

/** The color to use for inverse kinematics-enabled bones in the 2D skeleton editor. */
"editors/2d/bone_ik_color": Color;

/** The outline color to use for non-selected bones in the 2D skeleton editor. See also [member editors/2d/bone_selected_color]. */
"editors/2d/bone_outline_color": Color;

/**
 * The outline size in the 2D skeleton editor (in pixels). See also [member editors/2d/bone_width].
 *
 * **Note:** Changes to this value only apply after modifying a [Bone2D] node in any way, or closing and reopening the scene.
 *
*/
"editors/2d/bone_outline_size": float;

/** The color to use for selected bones in the 2D skeleton editor. See also [member editors/2d/bone_outline_color]. */
"editors/2d/bone_selected_color": Color;

/**
 * The bone width in the 2D skeleton editor (in pixels). See also [member editors/2d/bone_outline_size].
 *
 * **Note:** Changes to this value only apply after modifying a [Bone2D] node in any way, or closing and reopening the scene.
 *
*/
"editors/2d/bone_width": float;

/** The grid color to use in the 2D editor. */
"editors/2d/grid_color": Color;

/** The guides color to use in the 2D editor. Guides can be created by dragging the mouse cursor from the rulers. */
"editors/2d/guides_color": Color;

/** The color to use when drawing smart snapping lines in the 2D editor. The smart snapping lines will automatically display when moving 2D nodes if smart snapping is enabled in the Snapping Options menu at the top of the 2D editor viewport. */
"editors/2d/smart_snapping_line_color": Color;

/** If [code]true[/code], the 2D editor will snap to integer zoom values while not holding the [kbd]Alt[/kbd] key and powers of two while holding it. If [code]false[/code], this behavior is swapped. */
"editors/2d/use_integer_zoom_by_default": boolean;

/** The color of the viewport border in the 2D editor. This border represents the viewport's size at the base resolution defined in the Project Settings. Objects placed outside this border will not be visible unless a [Camera2D] node is used, or unless the window is resized and the stretch mode is set to [code]disabled[/code]. */
"editors/2d/viewport_border_color": Color;

/** The default camera field of view to use in the 3D editor (in degrees). The camera field of view can be adjusted on a per-scene basis using the [b]View[/b] menu at the top of the 3D editor. If a scene had its camera field of view adjusted using the [b]View[/b] menu, this setting is ignored in the scene in question. This setting is also ignored while a Camera3D node is being previewed in the editor. */
"editors/3d/default_fov": float;

/** The default camera far clip distance to use in the 3D editor (in degrees). Higher values make it possible to view objects placed further away from the camera, at the cost of lower precision in the depth buffer (which can result in visible Z-fighting in the distance). The camera far clip distance can be adjusted on a per-scene basis using the [b]View[/b] menu at the top of the 3D editor. If a scene had its camera far clip distance adjusted using the [b]View[/b] menu, this setting is ignored in the scene in question. This setting is also ignored while a Camera3D node is being previewed in the editor. */
"editors/3d/default_z_far": float;

/** The default camera near clip distance to use in the 3D editor (in degrees). Lower values make it possible to view objects placed closer to the camera, at the cost of lower precision in the depth buffer (which can result in visible Z-fighting in the distance). The camera near clip distance can be adjusted on a per-scene basis using the [b]View[/b] menu at the top of the 3D editor. If a scene had its camera near clip distance adjusted using the [b]View[/b] menu, this setting is ignored in the scene in question. This setting is also ignored while a Camera3D node is being previewed in the editor. */
"editors/3d/default_z_near": float;

/**
 * The modifier key to use to enable freelook in the 3D editor (on top of pressing the right mouse button).
 *
 * **Note:** Regardless of this setting, the freelook toggle keyboard shortcut ([kbd]Shift + F[/kbd] by default) is always available.
 *
 * **Note:** On certain window managers on Linux, the [kbd]Alt[/kbd] key will be intercepted by the window manager when clicking a mouse button at the same time. This means Godot will not see the modifier key as being pressed.
 *
*/
"editors/3d/freelook/freelook_activation_modifier": int;

/** The base 3D freelook speed in units per second. This can be adjusted by using the mouse wheel while in freelook mode, or by holding down the "fast" or "slow" modifier keys ([kbd]Shift[/kbd] and [kbd]Alt[/kbd] by default, respectively). */
"editors/3d/freelook/freelook_base_speed": float;

/** The inertia of the 3D freelook camera. Higher values make the camera start and stop slower, which looks smoother but adds latency. */
"editors/3d/freelook/freelook_inertia": float;

/**
 * The navigation scheme to use when freelook is enabled in the 3D editor. Some of the navigation schemes below may be more convenient when designing specific levels in the 3D editor.
 *
 * - **Default:** The "Freelook Forward", "Freelook Backward", "Freelook Up" and "Freelook Down" keys will move relative to the camera, taking its pitch angle into account for the movement.
 *
 * - **Partially Axis-Locked:** The "Freelook Forward" and "Freelook Backward" keys will move relative to the camera, taking its pitch angle into account for the movement. The "Freelook Up" and "Freelook Down" keys will move in an "absolute" manner, **not** taking the camera's pitch angle into account for the movement.
 *
 * - **Fully Axis-Locked:** The "Freelook Forward", "Freelook Backward", "Freelook Up" and "Freelook Down" keys will move in an "absolute" manner, **not** taking the camera's pitch angle into account for the movement.
 *
 * See also [member editors/3d/navigation/navigation_scheme].
 *
*/
"editors/3d/freelook/freelook_navigation_scheme": int;

/** The mouse sensitivity to use while freelook mode is active in the 3D editor. See also [member editors/3d/navigation_feel/orbit_sensitivity]. */
"editors/3d/freelook/freelook_sensitivity": float;

/** If [code]true[/code], freelook speed is linked to the zoom value used in the camera orbit mode in the 3D editor. */
"editors/3d/freelook/freelook_speed_zoom_link": boolean;

/** The grid division bias to use in the 3D editor. Negative values will cause small grid divisions to appear earlier, whereas positive values will cause small grid divisions to appear later. */
"editors/3d/grid_division_level_bias": float;

/** The largest grid division to use in the 3D editor. Together with [member editors/3d/primary_grid_steps], this determines how large the grid divisions can be. The grid divisions will not be able to get larger than [code]primary_grid_steps ^ grid_division_level_max[/code] units. By default, when [member editors/3d/primary_grid_steps] is [code]8[/code], this means grid divisions cannot get larger than [code]64[/code] units each (so primary grid lines are [code]512[/code] units apart), no matter how far away the camera is from the grid. */
"editors/3d/grid_division_level_max": int;

/** The smallest grid division to use in the 3D editor. Together with [member editors/3d/primary_grid_steps], this determines how small the grid divisions can be. The grid divisions will not be able to get smaller than [code]primary_grid_steps ^ grid_division_level_min[/code] units. By default, this means grid divisions cannot get smaller than 1 unit each, no matter how close the camera is from the grid. */
"editors/3d/grid_division_level_min": int;

/** The grid size in units. Higher values prevent the grid from appearing "cut off" at certain angles, but make the grid more demanding to render. Depending on the camera's position, the grid may not be fully visible since a shader is used to fade it progressively. */
"editors/3d/grid_size": int;

/** If [code]true[/code], render the grid on an XY plane. This can be useful for 3D side-scrolling games. */
"editors/3d/grid_xy_plane": boolean;

/** If [code]true[/code], render the grid on an XZ plane. */
"editors/3d/grid_xz_plane": boolean;

/** If [code]true[/code], render the grid on a YZ plane. This can be useful for 3D side-scrolling games. */
"editors/3d/grid_yz_plane": boolean;

/**
 * If `true`, enables 3-button mouse emulation mode. This is useful on laptops when using a trackpad.
 *
 * When 3-button mouse emulation mode is enabled, the pan, zoom and orbit modifiers can always be used in the 3D editor viewport, even when not holding down any mouse button.
 *
 * **Note:** No matter the orbit modifier configured in [member editors/3d/navigation/orbit_modifier], [kbd]Alt[/kbd] will always remain usable for orbiting in this mode to improve usability with graphics tablets.
 *
*/
"editors/3d/navigation/emulate_3_button_mouse": boolean;

/** If [code]true[/code], allows using the top row [kbd]0[/kbd]-[kbd]9[/kbd] keys to function as their equivalent numpad keys for 3D editor navigation. This should be enabled on keyboards that have no numeric keypad available. */
"editors/3d/navigation/emulate_numpad": boolean;

/** If [code]true[/code], invert the horizontal mouse axis when panning or orbiting in the 3D editor. This setting does [i]not[/i] apply to freelook mode. */
"editors/3d/navigation/invert_x_axis": boolean;

/** If [code]true[/code], invert the vertical mouse axis when panning, orbiting, or using freelook mode in the 3D editor. */
"editors/3d/navigation/invert_y_axis": boolean;

/**
 * The navigation scheme to use in the 3D editor. Changing this setting will affect the mouse buttons that must be held down to perform certain operations in the 3D editor viewport.
 *
 * - **Godot** Middle mouse button to orbit, [kbd]Shift + Middle mouse button[/kbd] to pan. [kbd]Mouse wheel[/kbd] to zoom.
 *
 * - **Maya:** [kbd]Alt + Left mouse button[/kbd] to orbit. [kbd]Middle mouse button[/kbd] to pan, [kbd]Shift + Middle mouse button[/kbd] to pan 10 times faster. [kbd]Mouse wheel[/kbd] to zoom.
 *
 * - **Modo:** [kbd]Alt + Left mouse button[/kbd] to orbit. [kbd]Alt + Shift + Left mouse button[/kbd] to pan. [kbd]Ctrl + Alt + Left mouse button[/kbd] to zoom.
 *
 * See also [member editors/3d/freelook/freelook_navigation_scheme].
 *
 * **Note:** On certain window managers on Linux, the [kbd]Alt[/kbd] key will be intercepted by the window manager when clicking a mouse button at the same time. This means Godot will not see the modifier key as being pressed.
 *
*/
"editors/3d/navigation/navigation_scheme": int;

/**
 * The modifier key that must be held to orbit in the 3D editor.
 *
 * **Note:** If [member editors/3d/navigation/emulate_3_button_mouse] is `true`, [kbd]Alt[/kbd] will always remain usable for orbiting to improve usability with graphics tablets.
 *
 * **Note:** On certain window managers on Linux, the [kbd]Alt[/kbd] key will be intercepted by the window manager when clicking a mouse button at the same time. This means Godot will not see the modifier key as being pressed.
 *
*/
"editors/3d/navigation/orbit_modifier": int;

/**
 * The modifier key that must be held to pan in the 3D editor.
 *
 * **Note:** On certain window managers on Linux, the [kbd]Alt[/kbd] key will be intercepted by the window manager when clicking a mouse button at the same time. This means Godot will not see the modifier key as being pressed.
 *
*/
"editors/3d/navigation/pan_modifier": int;

/** If [code]true[/code], warps the mouse around the 3D viewport while panning in the 3D editor. This makes it possible to pan over a large area without having to exit panning and adjust the mouse cursor. */
"editors/3d/navigation/warped_mouse_panning": boolean;

/**
 * The modifier key that must be held to zoom in the 3D editor.
 *
 * **Note:** On certain window managers on Linux, the [kbd]Alt[/kbd] key will be intercepted by the window manager when clicking a mouse button at the same time. This means Godot will not see the modifier key as being pressed.
 *
*/
"editors/3d/navigation/zoom_modifier": int;

/** The mouse cursor movement direction to use when zooming by moving the mouse. This does not affect zooming with the mouse wheel. */
"editors/3d/navigation/zoom_style": int;

/** The inertia to use when orbiting in the 3D editor. Higher values make the camera start and stop slower, which looks smoother but adds latency. */
"editors/3d/navigation_feel/orbit_inertia": float;

/** The mouse sensitivity to use when orbiting in the 3D editor. See also [member editors/3d/freelook/freelook_sensitivity]. */
"editors/3d/navigation_feel/orbit_sensitivity": float;

/** The inertia to use when panning in the 3D editor. Higher values make the camera start and stop slower, which looks smoother but adds latency. */
"editors/3d/navigation_feel/translation_inertia": float;

/** The inertia to use when zooming in the 3D editor. Higher values make the camera start and stop slower, which looks smoother but adds latency. */
"editors/3d/navigation_feel/zoom_inertia": float;

/** The color to use for the primary 3D grid. The color's alpha channel affects the grid's opacity. */
"editors/3d/primary_grid_color": Color;

/** If set above 0, where a primary grid line should be drawn. By default, primary lines are configured to be more visible than secondary lines. This helps with measurements in the 3D editor. See also [member editors/3d/primary_grid_color] and [member editors/3d/secondary_grid_color]. */
"editors/3d/primary_grid_steps": int;

/** The color to use for the secondary 3D grid. This is generally a less visible color than [member editors/3d/primary_grid_color]. The color's alpha channel affects the grid's opacity. */
"editors/3d/secondary_grid_color": Color;

/** The color to use for the selection box that surrounds selected nodes in the 3D editor viewport. The color's alpha channel influences the selection box's opacity. */
"editors/3d/selection_box_color": Color;

/** The color override to use for 3D editor gizmos if the [Node3D] in question is part of an instantiated scene file (from the perspective of the current scene). */
"editors/3d_gizmos/gizmo_colors/instantiated": Color;

/** The 3D editor gizmo color for [Joint3D]s and [PhysicalBone3D]s. */
"editors/3d_gizmos/gizmo_colors/joint": Color;

/** The 3D editor gizmo color for [CollisionShape3D]s, [VehicleWheel3D]s, [RayCast3D]s and [SpringArm3D]s. */
"editors/3d_gizmos/gizmo_colors/shape": Color;

/** If [code]true[/code], automatically updates animation tracks' target paths when renaming or reparenting nodes in the Scene tree dock. */
"editors/animation/autorename_animation_tracks": boolean;

/** If [code]true[/code], create a Bezier track instead of a standard track when pressing the "key" icon next to a property. Bezier tracks provide more control over animation curves, but are more difficult to adjust quickly. */
"editors/animation/default_create_bezier_tracks": boolean;

/** If [code]true[/code], create a [code]RESET[/code] track when creating a new animation track. This track can be used to restore the animation to a "default" state. */
"editors/animation/default_create_reset_tracks": boolean;

/** The modulate color to use for "future" frames displayed in the animation editor's onion skinning feature. */
"editors/animation/onion_layers_future_color": Color;

/** The modulate color to use for "past" frames displayed in the animation editor's onion skinning feature. */
"editors/animation/onion_layers_past_color": Color;

/** The maximum distance at which tiles can be placed on a GridMap, relative to the camera position (in 3D units). */
"editors/grid_map/pick_distance": float;

/** The panning speed when using the mouse wheel or touchscreen events in the 2D editor. This setting does not apply to panning by holding down the middle or right mouse buttons. */
"editors/panning/2d_editor_pan_speed": int;

/** Controls whether the mouse wheel scroll zooms or pans in the 2D editor. See also [member editors/panning/sub_editors_panning_scheme] and [member editors/panning/animation_editors_panning_scheme]. */
"editors/panning/2d_editor_panning_scheme": int;

/** Controls whether the mouse wheel scroll zooms or pans in the animation track and Bezier editors. See also [member editors/panning/2d_editor_panning_scheme] and [member editors/panning/sub_editors_panning_scheme] (which controls the animation blend tree editor's pan behavior). */
"editors/panning/animation_editors_panning_scheme": int;

/** If [code]true[/code], allows panning by holding down [kbd]Space[/kbd] in the 2D editor viewport (in addition to panning with the middle or right mouse buttons). If [code]false[/code], the left mouse button must be held down while holding down [kbd]Space[/kbd] to pan in the 2D editor viewport. */
"editors/panning/simple_panning": boolean;

/** Controls whether the mouse wheel scroll zooms or pans in subeditors. The list of affected subeditors is: animation blend tree editor, [Polygon2D] editor, tileset editor, texture region editor and visual shader editor. See also [member editors/panning/2d_editor_panning_scheme] and [member editors/panning/animation_editors_panning_scheme]. */
"editors/panning/sub_editors_panning_scheme": int;

/** If [code]true[/code], warps the mouse around the 2D viewport while panning in the 2D editor. This makes it possible to pan over a large area without having to exit panning and adjust the mouse cursor. */
"editors/panning/warped_mouse_panning": boolean;

/** The radius in which points can be selected in the [Polygon2D] and [CollisionPolygon2D] editors (in pixels). Higher values make it easier to select points quickly, but can make it more difficult to select the expected point when several points are located close to each other. */
"editors/polygon_editor/point_grab_radius": int;

/** If [code]true[/code], displays the polygon's previous shape in the 2D polygon editors with an opaque gray outline. This outline is displayed while dragging a point until the left mouse button is released. */
"editors/polygon_editor/show_previous_outline": boolean;

/** If [code]true[/code], reopens shader files that were open in the shader editor when the project was last closed. */
"editors/shader_editor/behavior/files/restore_shaders_on_load": boolean;

/** If [code]true[/code], displays a grid while the TileMap editor is active. See also [member editors/tiles_editor/grid_color]. */
"editors/tiles_editor/display_grid": boolean;

/**
 * The color to use for the TileMap editor's grid.
 *
 * **Note:** Only effective if [member editors/tiles_editor/display_grid] is `true`.
 *
*/
"editors/tiles_editor/grid_color": Color;

/** The curvature to use for connection lines in the visual shader editor. Higher values will make connection lines appear more curved, with values above [code]0.5[/code] resulting in more "angular" turns in the middle of connection lines. */
"editors/visual_editors/lines_curvature": float;

/** The opacity of the minimap displayed in the bottom-right corner of the visual shader editor. */
"editors/visual_editors/minimap_opacity": float;

/** The size to use for port previews in the visual shader uniforms (toggled by clicking the "eye" icon next to an output). The value is defined in pixels at 100% zoom, and will scale with zoom automatically. */
"editors/visual_editors/visual_shader/port_preview_size": int;

/**
 * The folder where projects should be scanned for (recursively), in a way similar to the project manager's **Scan** button. This can be set to the same value as [member filesystem/directories/default_project_path] for convenience.
 *
 * **Note:** Setting this path to a folder with very large amounts of files/folders can slow down the project manager startup significantly. To keep the project manager quick to start up, it is recommended to set this value to a folder as "specific" as possible.
 *
*/
"filesystem/directories/autoscan_project_path": string;

/** The folder where new projects should be created by default when clicking the project manager's [b]New Project[/b] button. This can be set to the same value as [member filesystem/directories/autoscan_project_path] for convenience. */
"filesystem/directories/default_project_path": string;

/** The program that opens 3D model scene files when clicking "Open in External Program" option in Filesystem Dock. If not specified, the file will be opened in the system's default program. */
"filesystem/external_programs/3d_model_editor": string;

/** The program that opens audio files when clicking "Open in External Program" option in Filesystem Dock. If not specified, the file will be opened in the system's default program. */
"filesystem/external_programs/audio_editor": string;

/** The program that opens raster image files when clicking "Open in External Program" option in Filesystem Dock. If not specified, the file will be opened in the system's default program. */
"filesystem/external_programs/raster_image_editor": string;

/** The program that opens vector image files when clicking "Open in External Program" option in Filesystem Dock. If not specified, the file will be opened in the system's default program. */
"filesystem/external_programs/vector_image_editor": string;

/**
 * The display mode to use in the editor's file dialogs.
 *
 * - **Thumbnails** takes more space, but displays dynamic resource thumbnails, making resources easier to preview without having to open them.
 *
 * - **List** is more compact but doesn't display dynamic resource thumbnails. Instead, it displays static icons based on the file extension.
 *
*/
"filesystem/file_dialog/display_mode": int;

/** If [code]true[/code], display hidden files in the editor's file dialogs. Files that have names starting with [code].[/code] are considered hidden (e.g. [code].hidden_file[/code]). */
"filesystem/file_dialog/show_hidden_files": boolean;

/** The thumbnail size to use in the editor's file dialogs (in pixels). See also [member docks/filesystem/thumbnail_size]. */
"filesystem/file_dialog/thumbnail_size": int;

/**
 * The path to the directory containing the Blender executable used for converting the Blender 3D scene files `.blend` to glTF 2.0 format during import. Blender 3.0 or later is required.
 *
 * To enable this feature for your specific project, use [member ProjectSettings.filesystem/import/blender/enabled].
 *
*/
"filesystem/import/blender/blender3_path": string;

/**
 * The port number used for Remote Procedure Call (RPC) communication with Godot's created process of the blender executable.
 *
 * Setting this to 0 effectively disables communication with Godot and the blender process, making performance slower.
 *
*/
"filesystem/import/blender/rpc_port": int;

/**
 * The maximum idle uptime (in seconds) of the Blender process.
 *
 * This prevents Godot from having to create a new process for each import within the given seconds.
 *
*/
"filesystem/import/blender/rpc_server_uptime": float;

/**
 * The path to the FBX2glTF executable used for converting Autodesk FBX 3D scene files `.fbx` to glTF 2.0 format during import.
 *
 * To enable this feature for your specific project, use [member ProjectSettings.filesystem/import/fbx/enabled].
 *
*/
"filesystem/import/fbx/fbx2gltf_path": string;

/** If [code]true[/code], uses lossless compression for binary resources. */
"filesystem/on_save/compress_binary_resources": boolean;

/**
 * If `true`, when saving a file, the editor will rename the old file to a different name, save a new file, then only remove the old file once the new file has been saved. This makes loss of data less likely to happen if the editor or operating system exits unexpectedly while saving (e.g. due to a crash or power outage).
 *
 * **Note:** On Windows, this feature can interact negatively with certain antivirus programs. In this case, you may have to set this to `false` to prevent file locking issues.
 *
*/
"filesystem/on_save/safe_save_on_backup_then_rename": boolean;

/**
 * The path to the directory containing the Open Image Denoise (OIDN) executable, used optionally for denoising lightmaps. It can be downloaded from [url=https://www.openimagedenoise.org/downloads.html]openimagedenoise.org[/url].
 *
 * To enable this feature for your specific project, use [member ProjectSettings.rendering/lightmapping/denoising/denoiser].
 *
*/
"filesystem/tools/oidn/oidn_denoise_path": string;

/**
 * How to position the Cancel and OK buttons in the editor's [AcceptDialog]s. Different platforms have different standard behaviors for this, which can be overridden using this setting. This is useful if you use Godot both on Windows and macOS/Linux and your Godot muscle memory is stronger than your OS specific one.
 *
 * - **Auto** follows the platform convention: Cancel first on macOS and Linux, OK first on Windows.
 *
 * - **Cancel First** forces the ordering Cancel/OK.
 *
 * - **OK First** forces the ordering OK/Cancel.
 *
*/
"interface/editor/accept_dialog_cancel_ok_buttons": int;

/** If [code]true[/code], automatically opens screenshots with the default program associated to [code].png[/code] files after a screenshot is taken using the [b]Editor > Take Screenshot[/b] action. */
"interface/editor/automatically_open_screenshots": boolean;

/** The font to use for the script editor. Must be a resource of a [Font] type such as a [code].ttf[/code] or [code].otf[/code] font file. */
"interface/editor/code_font": string;

/**
 * The font ligatures to enable for the currently configured code font. Not all fonts include support for ligatures.
 *
 * **Note:** The default editor code font ([url=https://www.jetbrains.com/lp/mono/]JetBrains Mono[/url]) has contextual ligatures in its font file.
 *
*/
"interface/editor/code_font_contextual_ligatures": int;

/**
 * List of custom OpenType features to use, if supported by the currently configured code font. Not all fonts include support for custom OpenType features. The string should follow the OpenType specification.
 *
 * **Note:** The default editor code font ([url=https://www.jetbrains.com/lp/mono/]JetBrains Mono[/url]) has custom OpenType features in its font file, but there is no documented list yet.
 *
*/
"interface/editor/code_font_custom_opentype_features": string;

/**
 * List of alternative characters to use, if supported by the currently configured code font. Not all fonts include support for custom variations. The string should follow the OpenType specification.
 *
 * **Note:** The default editor code font ([url=https://www.jetbrains.com/lp/mono/]JetBrains Mono[/url]) has alternate characters in its font file, but there is no documented list yet.
 *
*/
"interface/editor/code_font_custom_variations": string;

/** The size of the font in the script editor. This setting does not impact the font size of the Output panel (see [member run/output/font_size]). */
"interface/editor/code_font_size": int;

/**
 * The custom editor scale factor to use. This can be used for displays with very high DPI where a scale factor of 200% is not sufficient.
 *
 * **Note:** Only effective if [member interface/editor/display_scale] is set to **Custom**.
 *
*/
"interface/editor/custom_display_scale": float;

/**
 * If `true`, lengthens the editor's localizable strings and replaces their characters with accented variants. This allows spotting non-localizable strings easily, while also ensuring the UI layout doesn't break when strings are made longer (as many languages require strings to be longer).
 *
 * This is a debugging feature and should only be enabled when working on the editor itself.
 *
*/
"interface/editor/debug/enable_pseudolocalization": boolean;

/**
 * The display scale factor to use for the editor interface. Higher values are more suited to hiDPI/Retina displays.
 *
 * If set to **Auto**, the editor scale is automatically determined based on the screen resolution and reported display DPI. This heuristic is not always ideal, which means you can get better results by setting the editor scale manually.
 *
 * If set to **Custom**, the scaling value in [member interface/editor/custom_display_scale] will be used.
 *
*/
"interface/editor/display_scale": int;

/**
 * The language to use for the editor interface.
 *
 * Translations are provided by the community. If you spot a mistake, [url=$DOCS_URL/contributing/documentation/editor_and_docs_localization.html]contribute to editor translations on Weblate![/url]
 *
*/
"interface/editor/editor_language": string;

/** The preferred monitor to display the editor. */
"interface/editor/editor_screen": int;

/**
 * Expanding main editor window content to the title, if supported by [DisplayServer]. See [constant DisplayServer.WINDOW_FLAG_EXTEND_TO_TITLE].
 *
 * Specific to the macOS platform.
 *
*/
"interface/editor/expand_to_title": boolean;

/** FreeType's font anti-aliasing mode used to render the editor fonts. Most fonts are not designed to look good with anti-aliasing disabled, so it's recommended to leave this enabled unless you're using a pixel art font. */
"interface/editor/font_antialiasing": int;

/**
 * The font hinting mode to use for the editor fonts. FreeType supports the following font hinting modes:
 *
 * - **None:** Don't use font hinting when rasterizing the font. This results in a smooth font, but it can look blurry.
 *
 * - **Light:** Use hinting on the X axis only. This is a compromise between font sharpness and smoothness.
 *
 * - **Normal:** Use hinting on both X and Y axes. This results in a sharp font, but it doesn't look very smooth.
 *
 * If set to **Auto**, the font hinting mode will be set to match the current operating system in use. This means the **Light** hinting mode will be used on Windows and Linux, and the **None** hinting mode will be used on macOS.
 *
*/
"interface/editor/font_hinting": int;

/** The subpixel positioning mode to use when rendering editor font glyphs. This affects both the main and code fonts. [b]Disabled[/b] is the fastest to render and uses the least memory. [b]Auto[/b] only uses subpixel positioning for small font sizes (where the benefit is the most noticeable). [b]One Half of a Pixel[/b] and [b]One Quarter of a Pixel[/b] force the same subpixel positioning mode for all editor fonts, regardless of their size (with [b]One Quarter of a Pixel[/b] being the highest-quality option). */
"interface/editor/font_subpixel_positioning": int;

/** The amount of sleeping between frames when the low-processor usage mode is enabled (in microseconds). Higher values will result in lower CPU/GPU usage, which can improve battery life on laptops. However, higher values will result in a less responsive editor. The default value is set to allow for maximum smoothness on monitors up to 144 Hz. See also [member interface/editor/unfocused_low_processor_mode_sleep_usec]. */
"interface/editor/low_processor_mode_sleep_usec": float;

/** The font to use for the editor interface. Must be a resource of a [Font] type such as a [code].ttf[/code] or [code].otf[/code] font file. */
"interface/editor/main_font": string;

/** The font to use for bold text in the editor interface. Must be a resource of a [Font] type such as a [code].ttf[/code] or [code].otf[/code] font file. */
"interface/editor/main_font_bold": string;

/** The size of the font in the editor interface. */
"interface/editor/main_font_size": int;

/** If [code]true[/code], the mouse's additional side buttons will be usable to navigate in the script editor's file history. Set this to [code]false[/code] if you're using the side buttons for other purposes (such as a push-to-talk button in a VoIP program). */
"interface/editor/mouse_extra_buttons_navigate_history": boolean;

/** The preferred monitor to display the project manager. */
"interface/editor/project_manager_screen": int;

/** If [code]false[/code], the editor will save all scenes when confirming the [b]Save[/b] action when quitting the editor or quitting to the project list. If [code]true[/code], the editor will ask to save each scene individually. */
"interface/editor/save_each_scene_on_quit": boolean;

/** If [code]true[/code], the editor's Script tab will have a separate distraction mode setting from the 2D/3D/AssetLib tabs. If [code]false[/code], the distraction-free mode toggle is shared between all tabs. */
"interface/editor/separate_distraction_mode": boolean;

/**
 * If enabled, displays internal engine errors in toast notifications (toggleable by clicking the "bell" icon at the bottom of the editor). No matter the value of this setting, non-internal engine errors will always be visible in toast notifications.
 *
 * The default **Auto** value will only enable this if the editor was compiled with the `dev=yes` option (the default is `dev=no`).
 *
*/
"interface/editor/show_internal_errors_in_toast_notifications": int;

/** If [code]true[/code], embed modal windows such as docks inside the main editor window. When single-window mode is enabled, tooltips will also be embedded inside the main editor window, which means they can't be displayed outside of the editor window. */
"interface/editor/single_window_mode": boolean;

/** When the editor window is unfocused, the amount of sleeping between frames when the low-processor usage mode is enabled (in microseconds). Higher values will result in lower CPU/GPU usage, which can improve battery life on laptops (in addition to improving the running project's performance if the editor has to redraw continuously). However, higher values will result in a less responsive editor. The default value is set to limit the editor to 20 FPS when the editor window is unfocused. See also [member interface/editor/low_processor_mode_sleep_usec]. */
"interface/editor/unfocused_low_processor_mode_sleep_usec": float;

/**
 * If `true`, editor main menu is using embedded [MenuBar] instead of system global menu.
 *
 * Specific to the macOS platform.
 *
*/
"interface/editor/use_embedded_menu": boolean;

/** Base speed for increasing/decreasing float values by dragging them in the inspector. */
"interface/inspector/float_drag_speed": float;

/** The number of [Array] or [Dictionary] items to display on each "page" in the inspector. Higher values allow viewing more values per page, but take more time to load. This increased load time is noticeable when selecting nodes that have array or dictionary properties in the editor. */
"interface/inspector/max_array_dictionary_items_per_page": int;

/** If [code]true[/code], display OpenType features marked as [code]hidden[/code] by the font file in the [Font] editor. */
"interface/inspector/show_low_level_opentype_features": boolean;

/**
 * If `true`, the multi window support in editor is enabled. The following panels can become dedicated windows (made floating): Docks, Script editor, and Shader editor.
 *
 * **Note:** When [member interface/editor/single_window_mode] is `true`, the multi window support is always disabled.
 *
*/
"interface/multi_window/enable": boolean;

/**
 * If `true`, when panels are made floating they will be maximized.
 *
 * If `false`, when panels are made floating their position and size will match the ones when they are attached (excluding window border) to the editor window.
 *
*/
"interface/multi_window/maximize_window": boolean;

/** If [code]true[/code], the floating panel position, size, and screen will be saved on editor exit. On next launch the panels that were floating will be made floating in the saved positions, sizes and screens, if possible. */
"interface/multi_window/restore_windows_on_load": boolean;

/** Controls when the Close (X) button is displayed on scene tabs at the top of the editor. */
"interface/scene_tabs/display_close_button": int;

/** The maximum width of each scene tab at the top editor (in pixels). */
"interface/scene_tabs/maximum_width": int;

/** If [code]true[/code], show a button next to each scene tab that opens the scene's "dominant" script when clicked. The "dominant" script is the one that is at the highest level in the scene's hierarchy. */
"interface/scene_tabs/show_script_button": boolean;

/** If [code]true[/code], display an automatically-generated thumbnail when hovering scene tabs with the mouse. Scene thumbnails are generated when saving the scene. */
"interface/scene_tabs/show_thumbnail_on_hover": boolean;

/** The color to use for "highlighted" user interface elements in the editor (pressed and hovered items). */
"interface/theme/accent_color": Color;

/** The spacing to add for buttons and list items in the editor (in pixels). Increasing this value is useful to improve usability on touch screens, at the cost of reducing the amount of usable screen real estate. */
"interface/theme/additional_spacing": float;

/** The base color to use for user interface elements in the editor. Secondary colors (such as darker/lighter variants) are derived from this color. */
"interface/theme/base_color": Color;

/** The border size to use for interface elements (in pixels). */
"interface/theme/border_size": int;

/** The contrast factor to use when deriving the editor theme's base color (see [member interface/theme/base_color]). When using a positive values, the derived colors will be [i]darker[/i] than the base color. This contrast factor can be set to a negative value, which will make the derived colors [i]brighter[/i] than the base color. Negative contrast rates often look better for light themes. */
"interface/theme/contrast": float;

/** The corner radius to use for interface elements (in pixels). [code]0[/code] is square. */
"interface/theme/corner_radius": int;

/** The custom theme resource to use for the editor. Must be a Godot theme resource in [code].tres[/code] or [code].res[/code] format. */
"interface/theme/custom_theme": string;

/** If [code]true[/code], draws additional borders around interactive UI elements in the editor. This is automatically enabled when using the [b]Black (OLED)[/b] theme preset, as this theme preset uses a fully black background. */
"interface/theme/draw_extra_borders": boolean;

/**
 * The icon and font color scheme to use in the editor.
 *
 * - **Auto** determines the color scheme to use automatically based on [member interface/theme/base_color].
 *
 * - **Dark** makes fonts and icons dark (suitable for light themes). Icon colors are automatically converted by the editor following the set of rules defined in [url=https://github.com/godotengine/godot/blob/master/editor/editor_themes.cpp]this file[/url].
 *
 * - **Light** makes fonts and icons light (suitable for dark themes).
 *
*/
"interface/theme/icon_and_font_color": int;

/**
 * The saturation to use for editor icons. Higher values result in more vibrant colors.
 *
 * **Note:** The default editor icon saturation was increased by 30% in Godot 4.0 and later. To get Godot 3.x's icon saturation back, set [member interface/theme/icon_saturation] to `0.77`.
 *
*/
"interface/theme/icon_saturation": float;

/** The editor theme preset to use. */
"interface/theme/preset": string;

/** The opacity to use when drawing relationship lines in the editor's [Tree]-based GUIs (such as the Scene tree dock). */
"interface/theme/relationship_line_opacity": float;

/**
 * If `true`, long press on touchscreen is treated as right click.
 *
 * **Note:** Defaults to `true` on touchscreen devices.
 *
*/
"interface/touchscreen/enable_long_press_as_right_click": boolean;

/**
 * If `true`, enable two finger pan and scale gestures on touchscreen devices.
 *
 * **Note:** Defaults to `true` on touchscreen devices.
 *
*/
"interface/touchscreen/enable_pan_and_scale_gestures": boolean;

/**
 * If `true`, increases the scrollbar touch area to improve usability on touchscreen devices.
 *
 * **Note:** Defaults to `true` on touchscreen devices.
 *
*/
"interface/touchscreen/increase_scrollbar_touch_area": boolean;

/**
 * Specify the multiplier to apply to the scale for the editor gizmo handles to improve usability on touchscreen devices.
 *
 * **Note:** Defaults to `1` on non-touchscreen devices.
 *
*/
"interface/touchscreen/scale_gizmo_handles": float;

/** The address to listen to when starting the remote debugger. This can be set to [code]0.0.0.0[/code] to allow external clients to connect to the remote debugger (instead of restricting the remote debugger to connections from [code]localhost[/code]). */
"network/debug/remote_host": string;

/** The port to listen to when starting the remote debugger. Godot will try to use port numbers above the configured number if the configured number is already taken by another application. */
"network/debug/remote_port": int;

/**
 * The host to use to contact the HTTP and HTTPS proxy in the editor (for the asset library and export template downloads). See also [member network/http_proxy/port].
 *
 * **Note:** Godot currently doesn't automatically use system proxy settings, so you have to enter them manually here if needed.
 *
*/
"network/http_proxy/host": string;

/**
 * The port number to use to contact the HTTP and HTTPS proxy in the editor (for the asset library and export template downloads). See also [member network/http_proxy/host].
 *
 * **Note:** Godot currently doesn't automatically use system proxy settings, so you have to enter them manually here if needed.
 *
*/
"network/http_proxy/port": int;

/** The TLS certificate bundle to use for HTTP requests made within the editor (e.g. from the AssetLib tab). If left empty, the [url=https://github.com/godotengine/godot/blob/master/thirdparty/certs/ca-certificates.crt]included Mozilla certificate bundle[/url] will be used. */
"network/tls/editor_tls_certificates": string;

/** The renderer type that will be checked off by default when creating a new project. Accepted strings are "forward_plus", "mobile" or "gl_compatibility". */
"project_manager/default_renderer": string;

/** The sorting order to use in the project manager. When changing the sorting order in the project manager, this setting is set permanently in the editor settings. */
"project_manager/sorting_order": int;

/** If [code]true[/code], saves all scenes and scripts automatically before running the project. Setting this to [code]false[/code] prevents the editor from saving if there are no changes which can speed up the project startup slightly, but it makes it possible to run a project that has unsaved changes. (Unsaved changes will not be visible in the running project.) */
"run/auto_save/save_before_running": boolean;

/** If [code]true[/code], the editor will clear the Output panel when running the project. */
"run/output/always_clear_output_on_play": boolean;

/** If [code]true[/code], the editor will collapse the Output panel when stopping the project. */
"run/output/always_close_output_on_stop": boolean;

/** If [code]true[/code], the editor will expand the Output panel when running the project. */
"run/output/always_open_output_on_play": boolean;

/** The size of the font in the [b]Output[/b] panel at the bottom of the editor. This setting does not impact the font size of the script editor (see [member interface/editor/code_font_size]). */
"run/output/font_size": int;

/**
 * The Android window to display the project on when starting the project from the editor.
 *
 * **Note:** Only available in the Android editor.
 *
*/
"run/window_placement/android_window": int;

/** The window mode to use to display the project when starting the project from the editor. */
"run/window_placement/rect": int;

/** The custom position to use when starting the project from the editor (in pixels from the top-left corner). Only effective if [member run/window_placement/rect] is set to [b]Custom Position[/b]. */
"run/window_placement/rect_custom_position": Vector2;

/** The monitor to display the project on when starting the project from the editor. */
"run/window_placement/screen": int;

/** If [code]true[/code], makes the caret blink according to [member text_editor/appearance/caret/caret_blink_interval]. Disabling this setting can improve battery life on laptops if you spend long amounts of time in the script editor, since it will reduce the frequency at which the editor needs to be redrawn. */
"text_editor/appearance/caret/caret_blink": boolean;

/** The interval at which the caret will blink (in seconds). See also [member text_editor/appearance/caret/caret_blink]. */
"text_editor/appearance/caret/caret_blink_interval": float;

/** If [code]true[/code], highlights all occurrences of the currently selected text in the script editor. See also [member text_editor/theme/highlighting/word_highlighted_color]. */
"text_editor/appearance/caret/highlight_all_occurrences": boolean;

/** If [code]true[/code], colors the background of the line the caret is currently on with [member text_editor/theme/highlighting/current_line_color]. */
"text_editor/appearance/caret/highlight_current_line": boolean;

/** The shape of the caret to use in the script editor. [b]Line[/b] displays a vertical line to the left of the current character, whereas [b]Block[/b] displays an outline over the current character. */
"text_editor/appearance/caret/type": int;

/** The column at which to display a subtle line as a line length guideline for scripts. This should generally be greater than [member text_editor/appearance/guidelines/line_length_guideline_soft_column]. */
"text_editor/appearance/guidelines/line_length_guideline_hard_column": int;

/** The column at which to display a [i]very[/i] subtle line as a line length guideline for scripts. This should generally be lower than [member text_editor/appearance/guidelines/line_length_guideline_hard_column]. */
"text_editor/appearance/guidelines/line_length_guideline_soft_column": int;

/** If [code]true[/code], displays line length guidelines to help you keep line lengths in check. See also [member text_editor/appearance/guidelines/line_length_guideline_soft_column] and [member text_editor/appearance/guidelines/line_length_guideline_hard_column]. */
"text_editor/appearance/guidelines/show_line_length_guidelines": boolean;

/** If [code]true[/code], highlights type-safe lines by displaying their line number color with [member text_editor/theme/highlighting/safe_line_number_color] instead of [member text_editor/theme/highlighting/line_number_color]. Type-safe lines are lines of code where the type of all variables is known at compile-time. These type-safe lines may run faster thanks to typed instructions. */
"text_editor/appearance/gutters/highlight_type_safe_lines": boolean;

/** If [code]true[/code], displays line numbers with zero padding (e.g. [code]007[/code] instead of [code]7[/code]). */
"text_editor/appearance/gutters/line_numbers_zero_padded": boolean;

/** If [code]true[/code], displays a gutter at the left containing icons for methods with signal connections and for overridden methods. */
"text_editor/appearance/gutters/show_info_gutter": boolean;

/** If [code]true[/code], displays line numbers in a gutter at the left. */
"text_editor/appearance/gutters/show_line_numbers": boolean;

/** If [member text_editor/appearance/lines/word_wrap] is set to [code]1[/code], sets text wrapping mode. To see how each mode behaves, see [enum TextServer.AutowrapMode]. */
"text_editor/appearance/lines/autowrap_mode": int;

/** If [code]true[/code], displays the folding arrows next to indented code sections and allows code folding. If [code]false[/code], hides the folding arrows next to indented code sections and disallows code folding. */
"text_editor/appearance/lines/code_folding": boolean;

/** If [code]true[/code], wraps long lines over multiple lines to avoid horizontal scrolling. This is a display-only feature; it does not actually insert line breaks in your scripts. */
"text_editor/appearance/lines/word_wrap": int;

/** The width of the minimap in the script editor (in pixels). */
"text_editor/appearance/minimap/minimap_width": int;

/** If [code]true[/code], draws an overview of the script near the scroll bar. The minimap can be left-clicked to scroll directly to a location in an "absolute" manner. */
"text_editor/appearance/minimap/show_minimap": boolean;

/** If [code]true[/code], draws space characters as centered points. */
"text_editor/appearance/whitespace/draw_spaces": boolean;

/** If [code]true[/code], draws tab characters as chevrons. */
"text_editor/appearance/whitespace/draw_tabs": boolean;

/** The space to add between lines (in pixels). Greater line spacing can help improve readability at the cost of displaying fewer lines on screen. */
"text_editor/appearance/whitespace/line_spacing": int;

/** If [code]true[/code], automatically reloads scripts in the editor when they have been modified and saved by external editors. */
"text_editor/behavior/files/auto_reload_scripts_on_external_change": boolean;

/** If set to a value greater than [code]0[/code], automatically saves the current script following the specified interval (in seconds). This can be used to prevent data loss if the editor crashes. */
"text_editor/behavior/files/autosave_interval_secs": int;

/** If [code]true[/code], converts indentation to match the script editor's indentation settings when saving a script. See also [member text_editor/behavior/indent/type]. */
"text_editor/behavior/files/convert_indent_on_save": boolean;

/** If [code]true[/code], reopens scripts that were opened in the last session when the editor is reopened on a given project. */
"text_editor/behavior/files/restore_scripts_on_load": boolean;

/** If [code]true[/code], trims trailing whitespace when saving a script. Trailing whitespace refers to tab and space characters placed at the end of lines. Since these serve no practical purpose, they can and should be removed to make version control diffs less noisy. */
"text_editor/behavior/files/trim_trailing_whitespace_on_save": boolean;

/** If [code]true[/code], automatically indents code when pressing the [kbd]Enter[/kbd] key based on blocks above the new line. */
"text_editor/behavior/indent/auto_indent": boolean;

/** When using tab indentation, determines the length of each tab. When using space indentation, determines how many spaces are inserted when pressing [kbd]Tab[/kbd] and when automatic indentation is performed. */
"text_editor/behavior/indent/size": int;

/**
 * The indentation style to use (tabs or spaces).
 *
 * **Note:** The [url=$DOCS_URL/tutorials/scripting/gdscript/gdscript_styleguide.html]GDScript style guide[/url] recommends using tabs for indentation. It is advised to change this setting only if you need to work on a project that currently uses spaces for indentation.
 *
*/
"text_editor/behavior/indent/type": int;

/** If [code]true[/code], allows drag-and-dropping text in the script editor to move text. Disable this if you find yourself accidentally drag-and-dropping text in the script editor. */
"text_editor/behavior/navigation/drag_and_drop_selection": boolean;

/** If [code]true[/code], the caret will be moved when right-clicking somewhere in the script editor (like when left-clicking or middle-clicking). If [code]false[/code], the caret will only be moved when left-clicking or middle-clicking somewhere. */
"text_editor/behavior/navigation/move_caret_on_right_click": boolean;

/** If [code]true[/code], allows scrolling past the end of the file. */
"text_editor/behavior/navigation/scroll_past_end_of_file": boolean;

/**
 * If `true`, allows scrolling in sub-line intervals and enables a smooth scrolling animation when using the mouse wheel to scroll.
 *
 * **Note:** [member text_editor/behavior/navigation/smooth_scrolling] currently behaves poorly in projects where [member ProjectSettings.physics/common/physics_ticks_per_second] has been increased significantly from its default value (`60`). In this case, it is recommended to disable this setting.
 *
*/
"text_editor/behavior/navigation/smooth_scrolling": boolean;

/** If [code]true[/code], prevents automatically switching between the Script and 2D/3D screens when selecting a node in the Scene tree dock. */
"text_editor/behavior/navigation/stay_in_script_editor_on_node_selected": boolean;

/**
 * The number of pixels to scroll with every mouse wheel increment. Higher values make the script scroll by faster when using the mouse wheel.
 *
 * **Note:** You can hold down [kbd]Alt[/kbd] while using the mouse wheel to temporarily scroll 5 times faster.
 *
*/
"text_editor/behavior/navigation/v_scroll_speed": int;

/** If [code]true[/code], adds static typing hints such as [code]-> void[/code] and [code]: int[/code] when using code autocompletion or when creating onready variables by drag and dropping nodes into the script editor while pressing the [kbd]Ctrl[/kbd] key. */
"text_editor/completion/add_type_hints": boolean;

/** If [code]true[/code], automatically completes braces when making use of code completion. */
"text_editor/completion/auto_brace_complete": boolean;

/** The delay in seconds after which autocompletion suggestions should be displayed when the user stops typing. */
"text_editor/completion/code_complete_delay": float;

/** If [code]true[/code], code completion will be triggered automatically after [member text_editor/completion/code_complete_delay]. If [code]false[/code], you can still trigger completion manually by pressing [kbd]Ctrl + Space[/kbd] ([kbd]Cmd + Space[/kbd] on macOS). */
"text_editor/completion/code_complete_enabled": boolean;

/** If [code]true[/code] enables the coloring for some items in the autocompletion suggestions, like vector components. */
"text_editor/completion/colorize_suggestions": boolean;

/** If [code]true[/code], provides autocompletion suggestions for file paths in methods such as [code]load()[/code] and [code]preload()[/code]. */
"text_editor/completion/complete_file_paths": boolean;

/** The delay in seconds after which the script editor should check for errors when the user stops typing. */
"text_editor/completion/idle_parse_delay": float;

/** If [code]true[/code], the code completion tooltip will appear below the current line unless there is no space on screen below the current line. If [code]false[/code], the code completion tooltip will appear above the current line. */
"text_editor/completion/put_callhint_tooltip_below_current_line": boolean;

/** If [code]true[/code], performs string autocompletion with single quotes. If [code]false[/code], performs string autocompletion with double quotes (which matches the [url=$DOCS_URL/tutorials/scripting/gdscript/gdscript_styleguide.html]GDScript style guide[/url]). */
"text_editor/completion/use_single_quotes": boolean;

/** Controls which multi-line code blocks should be displayed in the editor help. This setting does not affect single-line code literals in the editor help. */
"text_editor/help/class_reference_examples": int;

/** The font size to use for the editor help (built-in class reference). */
"text_editor/help/help_font_size": int;

/** The font size to use for code samples in the editor help (built-in class reference). */
"text_editor/help/help_source_font_size": int;

/** The font size to use for headings in the editor help (built-in class reference). */
"text_editor/help/help_title_font_size": int;

/** If [code]true[/code], displays a table of contents at the left of the editor help (at the location where the members overview would appear when editing a script). */
"text_editor/help/show_help_index": boolean;

/** If [code]true[/code], displays an overview of the current script's member variables and functions at the left of the script editor. See also [member text_editor/script_list/sort_members_outline_alphabetically]. */
"text_editor/script_list/show_members_overview": boolean;

/**
 * If `true`, sorts the members outline (located at the left of the script editor) using alphabetical order. If `false`, sorts the members outline depending on the order in which members are found in the script.
 *
 * **Note:** Only effective if [member text_editor/script_list/show_members_overview] is `true`.
 *
*/
"text_editor/script_list/sort_members_outline_alphabetically": boolean;

/**
 * The syntax theme to use in the script editor.
 *
 * You can save your own syntax theme from your current settings by using **File > Theme > Save As...** at the top of the script editor. The syntax theme will then be available locally in the list of color themes.
 *
 * You can find additional syntax themes to install in the [url=https://github.com/godotengine/godot-syntax-themes]godot-syntax-themes[/url] repository.
 *
*/
"text_editor/theme/color_theme": string;

/** The script editor's background color. If set to a translucent color, the editor theme's base color will be visible behind. */
"text_editor/theme/highlighting/background_color": Color;

/** The script editor's base type color (used for types like [Vector2], [Vector3], [Color], ...). */
"text_editor/theme/highlighting/base_type_color": Color;

/** The script editor's bookmark icon color (displayed in the gutter). */
"text_editor/theme/highlighting/bookmark_color": Color;

/** The script editor's brace mismatch color. Used when the caret is currently on a mismatched brace, parenthesis or bracket character. */
"text_editor/theme/highlighting/brace_mismatch_color": Color;

/** The script editor's breakpoint icon color (displayed in the gutter). */
"text_editor/theme/highlighting/breakpoint_color": Color;

/**
 * The script editor's caret background color.
 *
 * **Note:** This setting has no effect as it's currently unused.
 *
*/
"text_editor/theme/highlighting/caret_background_color": Color;

/** The script editor's caret color. */
"text_editor/theme/highlighting/caret_color": Color;

/** The script editor's color for the code folding icon (displayed in the gutter). */
"text_editor/theme/highlighting/code_folding_color": Color;

/**
 * The script editor's comment color.
 *
 * **Note:** In GDScript, unlike Python, multiline strings are not considered to be comments, and will use the string highlighting color instead.
 *
*/
"text_editor/theme/highlighting/comment_color": Color;

/** The script editor's autocompletion box background color. */
"text_editor/theme/highlighting/completion_background_color": Color;

/** The script editor's autocompletion box background color to highlight existing characters in the completion results. This should be a translucent color so that [member text_editor/theme/highlighting/completion_selected_color] can be seen behind. */
"text_editor/theme/highlighting/completion_existing_color": Color;

/** The script editor's autocompletion box text color. */
"text_editor/theme/highlighting/completion_font_color": Color;

/** The script editor's autocompletion box scroll bar color. */
"text_editor/theme/highlighting/completion_scroll_color": Color;

/** The script editor's autocompletion box scroll bar color when hovered or pressed with the mouse. */
"text_editor/theme/highlighting/completion_scroll_hovered_color": Color;

/** The script editor's autocompletion box background color for the currently selected line. */
"text_editor/theme/highlighting/completion_selected_color": Color;

/** The script editor's control flow keyword color (used for keywords like [code]if[/code], [code]for[/code], [code]return[/code], ...). */
"text_editor/theme/highlighting/control_flow_keyword_color": Color;

/** The script editor's background color for the line the caret is currently on. This should be set to a translucent color so that it can display on top of other line color modifiers such as [member text_editor/theme/highlighting/mark_color]. */
"text_editor/theme/highlighting/current_line_color": Color;

/** The script editor's documentation comment color. In GDScript, this is used for comments starting with [code]##[/code]. In C#, this is used for comments starting with [code]///[/code] or [code]/**[/code]. */
"text_editor/theme/highlighting/doc_comment_color": Color;

/** The script editor's engine type color ([Vector2], [Vector3], [Color], ...). */
"text_editor/theme/highlighting/engine_type_color": Color;

/** The script editor's color for the debugger's executing line icon (displayed in the gutter). */
"text_editor/theme/highlighting/executing_line_color": Color;

/** The script editor's background line highlighting color for folded code region. */
"text_editor/theme/highlighting/folded_code_region_color": Color;

/**
 * The script editor's function call color.
 *
 * **Note:** When using the GDScript syntax highlighter, this is replaced by the function definition color configured in the syntax theme for function definitions (e.g. `func _ready():`).
 *
*/
"text_editor/theme/highlighting/function_color": Color;

/** The script editor's non-control flow keyword color (used for keywords like [code]var[/code], [code]func[/code], [code]extends[/code], ...). */
"text_editor/theme/highlighting/keyword_color": Color;

/** The script editor's color for the line length guideline. The "hard" line length guideline will be drawn with this color, whereas the "soft" line length guideline will be drawn with half of its opacity. */
"text_editor/theme/highlighting/line_length_guideline_color": Color;

/** The script editor's color for line numbers. See also [member text_editor/theme/highlighting/safe_line_number_color]. */
"text_editor/theme/highlighting/line_number_color": Color;

/** The script editor's background color for lines with errors. This should be set to a translucent color so that it can display on top of other line color modifiers such as [member text_editor/theme/highlighting/current_line_color]. */
"text_editor/theme/highlighting/mark_color": Color;

/**
 * The script editor's color for member variables on objects (e.g. `self.some_property`).
 *
 * **Note:** This color is not used for local variable declaration and access.
 *
*/
"text_editor/theme/highlighting/member_variable_color": Color;

/** The script editor's color for numbers (integer and floating-point). */
"text_editor/theme/highlighting/number_color": Color;

/**
 * The script editor's color for type-safe line numbers. See also [member text_editor/theme/highlighting/line_number_color].
 *
 * **Note:** Only displayed if [member text_editor/appearance/gutters/highlight_type_safe_lines] is `true`.
 *
*/
"text_editor/theme/highlighting/safe_line_number_color": Color;

/** The script editor's color for the border of search results. This border helps bring further attention to the search result. Set this color's opacity to 0 to disable the border. */
"text_editor/theme/highlighting/search_result_border_color": Color;

/** The script editor's background color for search results. */
"text_editor/theme/highlighting/search_result_color": Color;

/** The script editor's background color for the currently selected text. */
"text_editor/theme/highlighting/selection_color": Color;

/** The script editor's color for strings (single-line and multi-line). */
"text_editor/theme/highlighting/string_color": Color;

/** The script editor's color for operators ([code]( ) [ ] { } + - * /[/code], ...). */
"text_editor/theme/highlighting/symbol_color": Color;

/** The script editor's color for text not highlighted by any syntax highlighting rule. */
"text_editor/theme/highlighting/text_color": Color;

/** The script editor's background color for text. This should be set to a translucent color so that it can display on top of other line color modifiers such as [member text_editor/theme/highlighting/current_line_color]. */
"text_editor/theme/highlighting/text_selected_color": Color;

/** The script editor's color for user-defined types (using [code]class_name[/code]). */
"text_editor/theme/highlighting/user_type_color": Color;

/** The script editor's color for words highlighted by selecting them. Only visible if [member text_editor/appearance/caret/highlight_all_occurrences] is [code]true[/code]. */
"text_editor/theme/highlighting/word_highlighted_color": Color;

/**
 * Adds a custom property info to a property. The dictionary must contain:
 *
 * - `name`: [String] (the name of the property)
 *
 * - `type`: [int] (see [enum Variant.Type])
 *
 * - optionally `hint`: [int] (see [enum PropertyHint]) and `hint_string`: [String]
 *
 * **Example:**
 *
 * @example 
 * 
 * 
 * var settings = EditorInterface.get_editor_settings()
 * settings.set("category/property_name", 0)
 * var property_info = {
 *     "name": "category/property_name",
 *     "type": TYPE_INT,
 *     "hint": PROPERTY_HINT_ENUM,
 *     "hint_string": "one,two,three"
 * }
 * settings.add_property_info(property_info)
 * 
 * 
 * var settings = GetEditorInterface().GetEditorSettings();
 * settings.Set("category/property_name", 0);
 * var propertyInfo = new Godot.Collections.Dictionary
 * {
 *     {"name", "category/propertyName"},
 *     {"type", Variant.Type.Int},
 *     {"hint", PropertyHint.Enum},
 *     {"hint_string", "one,two,three"}
 * };
 * settings.AddPropertyInfo(propertyInfo);
 * 
 * @summary 
 * 
 *
*/
add_property_info(): void;

/** Checks if any settings with the prefix [param setting_prefix] exist in the set of changed settings. See also [method get_changed_settings]. */
check_changed_settings_in_group(): boolean;

/** Erases the setting whose name is specified by [param property]. */
erase(): void;

/** Gets an array of the settings which have been changed since the last save. Note that internally [code]changed_settings[/code] is cleared after a successful save, so generally the most appropriate place to use this method is when processing [constant NOTIFICATION_EDITOR_SETTINGS_CHANGED]. */
get_changed_settings(): PackedStringArray;

/** Returns the list of favorite files and directories for this project. */
get_favorites(): PackedStringArray;

/** Returns project-specific metadata for the [param section] and [param key] specified. If the metadata doesn't exist, [param default] will be returned instead. See also [method set_project_metadata]. */
get_project_metadata(): any;

/** Returns the list of recently visited folders in the file dialog for this project. */
get_recent_dirs(): PackedStringArray;

/** Returns the value of the setting specified by [param name]. This is equivalent to using [method Object.get] on the EditorSettings instance. */
get_setting(): any;

/** Returns [code]true[/code] if the setting specified by [param name] exists, [code]false[/code] otherwise. */
has_setting(): boolean;

/** Marks the passed editor setting as being changed, see [method get_changed_settings]. Only settings which exist (see [method has_setting]) will be accepted. */
mark_setting_changed(): void;

/** Overrides the built-in editor action [param name] with the input actions defined in [param actions_list]. */
set_builtin_action_override(): void;

/** Sets the list of favorite files and directories for this project. */
set_favorites(): void;

/** Sets the initial value of the setting specified by [param name] to [param value]. This is used to provide a value for the Revert button in the Editor Settings. If [param update_current] is true, the current value of the setting will be set to [param value] as well. */
set_initial_value(): void;

/** Sets project-specific metadata with the [param section], [param key] and [param data] specified. This metadata is stored outside the project folder and therefore won't be checked into version control. See also [method get_project_metadata]. */
set_project_metadata(): void;

/** Sets the list of recently visited folders in the file dialog for this project. */
set_recent_dirs(): void;

/** Sets the [param value] of the setting specified by [param name]. This is equivalent to using [method Object.set] on the EditorSettings instance. */
set_setting(): void;

  connect<T extends SignalsOf<EditorSettings>>(signal: T, method: SignalFunction<EditorSettings[T]>): number;



/**
 * Emitted after any editor setting has changed. It's used by various editor plugins to update their visuals on theme changes or logic on configuration changes.
 *
*/
static NOTIFICATION_EDITOR_SETTINGS_CHANGED: any;


/**
 * Emitted after any editor setting has changed.
 *
*/
$settings_changed: Signal<() => void>

}

