
/**
 * A Viewport creates a different view into the screen, or a sub-view inside another viewport. Children 2D Nodes will display on it, and children Camera3D 3D nodes will render on it too.
 *
 * Optionally, a viewport can have its own 2D or 3D world, so it doesn't share what it draws with other viewports.
 *
 * Viewports can also choose to be audio listeners, so they generate positional audio depending on a 2D or 3D camera child of it.
 *
 * Also, viewports can be assigned to different screens in case the devices have multiple screens.
 *
 * Finally, viewports can also behave as render targets, in which case they will not be visible unless the associated texture is used to draw.
 *
*/
declare class Viewport extends Node  {

  
/**
 * A Viewport creates a different view into the screen, or a sub-view inside another viewport. Children 2D Nodes will display on it, and children Camera3D 3D nodes will render on it too.
 *
 * Optionally, a viewport can have its own 2D or 3D world, so it doesn't share what it draws with other viewports.
 *
 * Viewports can also choose to be audio listeners, so they generate positional audio depending on a 2D or 3D camera child of it.
 *
 * Also, viewports can be assigned to different screens in case the devices have multiple screens.
 *
 * Finally, viewports can also behave as render targets, in which case they will not be visible unless the associated texture is used to draw.
 *
*/
  new(): Viewport; 
  static "new"(): Viewport 


/** If [code]true[/code], the viewport will process 2D audio streams. */
audio_listener_enable_2d: boolean;

/** If [code]true[/code], the viewport will process 3D audio streams. */
audio_listener_enable_3d: boolean;

/** The rendering layers in which this [Viewport] renders [CanvasItem] nodes. */
canvas_cull_mask: int;

/** Sets the default filter mode used by [CanvasItem]s in this Viewport. See [enum DefaultCanvasItemTextureFilter] for options. */
canvas_item_default_texture_filter: int;

/** Sets the default repeat mode used by [CanvasItem]s in this Viewport. See [enum DefaultCanvasItemTextureRepeat] for options. */
canvas_item_default_texture_repeat: int;

/** The canvas transform of the viewport, useful for changing the on-screen positions of all child [CanvasItem]s. This is relative to the global canvas transform of the viewport. */
canvas_transform: Transform2D;

/** The overlay mode for test rendered geometry in debug purposes. */
debug_draw: int;

/** Disable 3D rendering (but keep 2D rendering). */
disable_3d: boolean;

/**
 * Determines how sharp the upscaled image will be when using the FSR upscaling mode. Sharpness halves with every whole number. Values go from 0.0 (sharpest) to 2.0. Values above 2.0 won't make a visible difference.
 *
 * To control this property on the root viewport, set the [member ProjectSettings.rendering/scaling_3d/fsr_sharpness] project setting.
 *
*/
fsr_sharpness: float;

/** The global canvas transform of the viewport. The canvas transform is relative to this. */
global_canvas_transform: Transform2D;

/** If [code]true[/code], the viewport will not receive input events. */
gui_disable_input: boolean;

/** If [code]true[/code], sub-windows (popups and dialogs) will be embedded inside application window as control-like nodes. If [code]false[/code], they will appear as separate windows handled by the operating system. */
gui_embed_subwindows: boolean;

/** If [code]true[/code], the GUI controls on the viewport will lay pixel perfectly. */
gui_snap_controls_to_pixels: boolean;

/**
 * If `true`, this viewport will mark incoming input events as handled by itself. If `false`, this is instead done by the first parent viewport that is set to handle input locally.
 *
 * A [SubViewportContainer] will automatically set this property to `false` for the [Viewport] contained inside of it.
 *
 * See also [method set_input_as_handled] and [method is_input_handled].
 *
*/
handle_input_locally: boolean;

/**
 * The automatic LOD bias to use for meshes rendered within the [Viewport] (this is analogous to [member ReflectionProbe.mesh_lod_threshold]). Higher values will use less detailed versions of meshes that have LOD variations generated. If set to `0.0`, automatic LOD is disabled. Increase [member mesh_lod_threshold] to improve performance at the cost of geometry detail.
 *
 * To control this property on the root viewport, set the [member ProjectSettings.rendering/mesh_lod/lod_change/threshold_pixels] project setting.
 *
 * **Note:** [member mesh_lod_threshold] does not affect [GeometryInstance3D] visibility ranges (also known as "manual" LOD or hierarchical LOD).
 *
*/
mesh_lod_threshold: float;

/** The multisample anti-aliasing mode for 2D/Canvas rendering. A higher number results in smoother edges at the cost of significantly worse performance. A value of 2 or 4 is best unless targeting very high-end systems. This has no effect on shader-induced aliasing or texture aliasing. */
msaa_2d: int;

/** The multisample anti-aliasing mode for 3D rendering. A higher number results in smoother edges at the cost of significantly worse performance. A value of 2 or 4 is best unless targeting very high-end systems. See also bilinear scaling 3d [member scaling_3d_mode] for supersampling, which provides higher quality but is much more expensive. This has no effect on shader-induced aliasing or texture aliasing. */
msaa_3d: int;

/** If [code]true[/code], the viewport will use a unique copy of the [World3D] defined in [member world_3d]. */
own_world_3d: boolean;

/**
 * If `true`, the objects rendered by viewport become subjects of mouse picking process.
 *
 * **Note:** The number of simultaneously pickable objects is limited to 64 and they are selected in a non-deterministic order, which can be different in each picking process.
 *
*/
physics_object_picking: boolean;

/**
 * If `true`, objects receive mouse picking events sorted primarily by their [member CanvasItem.z_index] and secondarily by their position in the scene tree. If `false`, the order is undetermined.
 *
 * **Note:** This setting is disabled by default because of its potential expensive computational cost.
 *
 * **Note:** Sorting happens after selecting the pickable objects. Because of the limitation of 64 simultaneously pickable objects, it is not guaranteed that the object with the highest [member CanvasItem.z_index] receives the picking event.
 *
*/
physics_object_picking_sort: boolean;

/** Use 16 bits for the omni/spot shadow depth map. Enabling this results in shadows having less precision and may result in shadow acne, but can lead to performance improvements on some devices. */
positional_shadow_atlas_16_bits: boolean;

/** The subdivision amount of the first quadrant on the shadow atlas. */
positional_shadow_atlas_quad_0: int;

/** The subdivision amount of the second quadrant on the shadow atlas. */
positional_shadow_atlas_quad_1: int;

/** The subdivision amount of the third quadrant on the shadow atlas. */
positional_shadow_atlas_quad_2: int;

/** The subdivision amount of the fourth quadrant on the shadow atlas. */
positional_shadow_atlas_quad_3: int;

/**
 * The shadow atlas' resolution (used for omni and spot lights). The value is rounded up to the nearest power of 2.
 *
 * **Note:** If this is set to `0`, no positional shadows will be visible at all. This can improve performance significantly on low-end systems by reducing both the CPU and GPU load (as fewer draw calls are needed to draw the scene without shadows).
 *
*/
positional_shadow_atlas_size: int;

/**
 * Sets scaling 3d mode. Bilinear scaling renders at different resolution to either undersample or supersample the viewport. FidelityFX Super Resolution 1.0, abbreviated to FSR, is an upscaling technology that produces high quality images at fast framerates by using a spatially aware upscaling algorithm. FSR is slightly more expensive than bilinear, but it produces significantly higher image quality. FSR should be used where possible.
 *
 * To control this property on the root viewport, set the [member ProjectSettings.rendering/scaling_3d/mode] project setting.
 *
*/
scaling_3d_mode: int;

/**
 * Scales the 3D render buffer based on the viewport size uses an image filter specified in [member ProjectSettings.rendering/scaling_3d/mode] to scale the output image to the full viewport size. Values lower than `1.0` can be used to speed up 3D rendering at the cost of quality (undersampling). Values greater than `1.0` are only valid for bilinear mode and can be used to improve 3D rendering quality at a high performance cost (supersampling). See also [member ProjectSettings.rendering/anti_aliasing/quality/msaa_3d] for multi-sample antialiasing, which is significantly cheaper but only smooths the edges of polygons.
 *
 * When using FSR upscaling, AMD recommends exposing the following values as preset options to users "Ultra Quality: 0.77", "Quality: 0.67", "Balanced: 0.59", "Performance: 0.5" instead of exposing the entire scale.
 *
 * To control this property on the root viewport, set the [member ProjectSettings.rendering/scaling_3d/scale] project setting.
 *
*/
scaling_3d_scale: float;

/** Sets the screen-space antialiasing method used. Screen-space antialiasing works by selectively blurring edges in a post-process shader. It differs from MSAA which takes multiple coverage samples while rendering objects. Screen-space AA methods are typically faster than MSAA and will smooth out specular aliasing, but tend to make scenes appear blurry. */
screen_space_aa: int;





/**
 * Affects the final texture sharpness by reading from a lower or higher mipmap (also called "texture LOD bias"). Negative values make mipmapped textures sharper but grainier when viewed at a distance, while positive values make mipmapped textures blurrier (even when up close).
 *
 * Enabling temporal antialiasing ([member use_taa]) will automatically apply a `-0.5` offset to this value, while enabling FXAA ([member screen_space_aa]) will automatically apply a `-0.25` offset to this value. If both TAA and FXAA are enabled at the same time, an offset of `-0.75` is applied to this value.
 *
 * **Note:** If [member scaling_3d_scale] is lower than `1.0` (exclusive), [member texture_mipmap_bias] is used to adjust the automatic mipmap bias which is calculated internally based on the scale factor. The formula for this is `log2(scaling_3d_scale) + mipmap_bias`.
 *
 * To control this property on the root viewport, set the [member ProjectSettings.rendering/textures/default_filters/texture_mipmap_bias] project setting.
 *
*/
texture_mipmap_bias: float;

/** If [code]true[/code], the viewport should render its background as transparent. */
transparent_bg: boolean;

/**
 * If `true`, uses a fast post-processing filter to make banding significantly less visible in 3D. 2D rendering is **not** affected by debanding unless the [member Environment.background_mode] is [constant Environment.BG_CANVAS]. See also [member ProjectSettings.rendering/anti_aliasing/quality/use_debanding].
 *
 * In some cases, debanding may introduce a slightly noticeable dithering pattern. It's recommended to enable debanding only when actually needed since the dithering pattern will make lossless-compressed screenshots larger.
 *
*/
use_debanding: boolean;

/**
 * If `true`, 2D rendering will use an high dynamic range (HDR) format framebuffer matching the bit depth of the 3D framebuffer. When using the Forward+ renderer this will be a `RGBA16` framebuffer, while when using the Mobile renderer it will be a `RGB10_A2` framebuffer. Additionally, 2D rendering will take place in linear color space and will be converted to sRGB space immediately before blitting to the screen (if the Viewport is attached to the screen). Practically speaking, this means that the end result of the Viewport will not be clamped into the `0-1` range and can be used in 3D rendering without color space adjustments. This allows 2D rendering to take advantage of effects requiring high dynamic range (e.g. 2D glow) as well as substantially improves the appearance of effects requiring highly detailed gradients.
 *
 * **Note:** This setting will have no effect when using the GL Compatibility renderer as the GL Compatibility renderer always renders in low dynamic range for performance reasons.
 *
*/
use_hdr_2d: boolean;

/**
 * If `true`, [OccluderInstance3D] nodes will be usable for occlusion culling in 3D for this viewport. For the root viewport, [member ProjectSettings.rendering/occlusion_culling/use_occlusion_culling] must be set to `true` instead.
 *
 * **Note:** Enabling occlusion culling has a cost on the CPU. Only enable occlusion culling if you actually plan to use it, and think whether your scene can actually benefit from occlusion culling. Large, open scenes with few or no objects blocking the view will generally not benefit much from occlusion culling. Large open scenes generally benefit more from mesh LOD and visibility ranges ([member GeometryInstance3D.visibility_range_begin] and [member GeometryInstance3D.visibility_range_end]) compared to occlusion culling.
 *
 * **Note:** Due to memory constraints, occlusion culling is not supported by default in Web export templates. It can be enabled by compiling custom Web export templates with `module_raycast_enabled=yes`.
 *
*/
use_occlusion_culling: boolean;

/**
 * Enables Temporal Anti-Aliasing for this viewport. TAA works by jittering the camera and accumulating the images of the last rendered frames, motion vector rendering is used to account for camera and object motion.
 *
 * **Note:** The implementation is not complete yet, some visual instances such as particles and skinned meshes may show artifacts.
 *
*/
use_taa: boolean;

/** If [code]true[/code], the viewport will use the primary XR interface to render XR output. When applicable this can result in a stereoscopic image and the resulting render being output to a headset. */
use_xr: boolean;

/** The Variable Rate Shading (VRS) mode that is used for this viewport. Note, if hardware does not support VRS this property is ignored. */
vrs_mode: int;

/**
 * Texture to use when [member vrs_mode] is set to [constant Viewport.VRS_TEXTURE].
 *
 * The texture **must** use a lossless compression format so that colors can be matched precisely. The following VRS densities are mapped to various colors, with brighter colors representing a lower level of shading precision:
 *
 * @example 
 * 
 * - 1x1 = rgb(0, 0, 0)     - #000000
 * - 1x2 = rgb(0, 85, 0)    - #005500
 * - 2x1 = rgb(85, 0, 0)    - #550000
 * - 2x2 = rgb(85, 85, 0)   - #555500
 * - 2x4 = rgb(85, 170, 0)  - #55aa00
 * - 4x2 = rgb(170, 85, 0)  - #aa5500
 * - 4x4 = rgb(170, 170, 0) - #aaaa00
 * - 4x8 = rgb(170, 255, 0) - #aaff00 - Not supported on most hardware
 * - 8x4 = rgb(255, 170, 0) - #ffaa00 - Not supported on most hardware
 * - 8x8 = rgb(255, 255, 0) - #ffff00 - Not supported on most hardware
 * @summary 
 * 
 *
*/
vrs_texture: Texture2D;

/** The custom [World2D] which can be used as 2D environment source. */
world_2d: World2D;

/** The custom [World3D] which can be used as 3D environment source. */
world_3d: World3D;

/** Returns the first valid [World2D] for this viewport, searching the [member world_2d] property of itself and any Viewport ancestor. */
find_world_2d(): World2D;

/** Returns the first valid [World3D] for this viewport, searching the [member world_3d] property of itself and any Viewport ancestor. */
find_world_3d(): World3D;

/** Returns the currently active 2D camera. Returns null if there are no active cameras. */
get_camera_2d(): Camera2D;

/** Returns the currently active 3D camera. */
get_camera_3d(): Camera3D;

/** Returns an individual bit on the rendering layer mask. */
get_canvas_cull_mask_bit(): boolean;

/**
 * Returns a list of the visible embedded [Window]s inside the viewport.
 *
 * **Note:** [Window]s inside other viewports will not be listed.
 *
*/
get_embedded_subwindows(): Window[];

/** Returns the transform from the viewport's coordinate system to the embedder's coordinate system. */
get_final_transform(): Transform2D;

/** Returns the mouse's position in this [Viewport] using the coordinate system of this [Viewport]. */
get_mouse_position(): Vector2;

/** Returns the [enum PositionalShadowAtlasQuadrantSubdiv] of the specified quadrant. */
get_positional_shadow_atlas_quadrant_subdiv(): int;

/** Returns rendering statistics of the given type. See [enum RenderInfoType] and [enum RenderInfo] for options. */
get_render_info(): int;

/** Returns the transform from the Viewport's coordinates to the screen coordinates of the containing window manager window. */
get_screen_transform(): Transform2D;

/**
 * Returns the viewport's texture.
 *
 * **Note:** When trying to store the current texture (e.g. in a file), it might be completely black or outdated if used too early, especially when used in e.g. [method Node._ready]. To make sure the texture you get is correct, you can await [signal RenderingServer.frame_post_draw] signal.
 *
 * @example 
 * 
 * func _ready():
 *     await RenderingServer.frame_post_draw
 *     $Viewport.get_texture().get_image().save_png("user://Screenshot.png")
 * @summary 
 * 
 *
*/
get_texture(): ViewportTexture;

/** Returns the viewport's RID from the [RenderingServer]. */
get_viewport_rid(): RID;

/** Returns the visible rectangle in global screen coordinates. */
get_visible_rect(): Rect2;

/** Returns the drag data from the GUI, that was previously returned by [method Control._get_drag_data]. */
gui_get_drag_data(): any;

/** Returns the [Control] having the focus within this viewport. If no [Control] has the focus, returns null. */
gui_get_focus_owner(): Control;

/** Returns [code]true[/code] if the drag operation is successful. */
gui_is_drag_successful(): boolean;

/**
 * Returns `true` if the viewport is currently performing a drag operation.
 *
 * Alternative to [constant Node.NOTIFICATION_DRAG_BEGIN] and [constant Node.NOTIFICATION_DRAG_END] when you prefer polling the value.
 *
*/
gui_is_dragging(): boolean;

/** Removes the focus from the currently focused [Control] within this viewport. If no [Control] has the focus, does nothing. */
gui_release_focus(): void;

/**
 * Returns whether the current [InputEvent] has been handled. Input events are not handled until [method set_input_as_handled] has been called during the lifetime of an [InputEvent].
 *
 * This is usually done as part of input handling methods like [method Node._input], [method Control._gui_input] or others, as well as in corresponding signal handlers.
 *
 * If [member handle_input_locally] is set to `false`, this method will try finding the first parent viewport that is set to handle input locally, and return its value for [method is_input_handled] instead.
 *
*/
is_input_handled(): boolean;

/**
 * Triggers the given [param event] in this [Viewport]. This can be used to pass an [InputEvent] between viewports, or to locally apply inputs that were sent over the network or saved to a file.
 *
 * If [param in_local_coords] is `false`, the event's position is in the embedder's coordinates and will be converted to viewport coordinates. If [param in_local_coords] is `true`, the event's position is in viewport coordinates.
 *
 * While this method serves a similar purpose as [method Input.parse_input_event], it does not remap the specified [param event] based on project settings like [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse].
 *
 * Calling this method will propagate calls to child nodes for following methods in the given order:
 *
 * - [method Node._input]
 *
 * - [method Control._gui_input] for [Control] nodes
 *
 * - [method Node._shortcut_input]
 *
 * - [method Node._unhandled_key_input]
 *
 * - [method Node._unhandled_input]
 *
 * If an earlier method marks the input as handled via [method set_input_as_handled], any later method in this list will not be called.
 *
 * If none of the methods handle the event and [member physics_object_picking] is `true`, the event is used for physics object picking.
 *
*/
push_input(): void;

/** Helper method which calls the [code]set_text()[/code] method on the currently focused [Control], provided that it is defined (e.g. if the focused Control is [Button] or [LineEdit]). */
push_text_input(): void;

/**
 * Triggers the given [InputEvent] in this [Viewport]. This can be used to pass input events between viewports, or to locally apply inputs that were sent over the network or saved to a file.
 *
 * If [param in_local_coords] is `false`, the event's position is in the embedder's coordinates and will be converted to viewport coordinates. If [param in_local_coords] is `true`, the event's position is in viewport coordinates.
 *
 * While this method serves a similar purpose as [method Input.parse_input_event], it does not remap the specified [param event] based on project settings like [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse].
 *
 * Calling this method will propagate calls to child nodes for following methods in the given order:
 *
 * - [method Node._shortcut_input]
 *
 * - [method Node._unhandled_key_input]
 *
 * - [method Node._unhandled_input]
 *
 * If an earlier method marks the input as handled via [method set_input_as_handled], any later method in this list will not be called.
 *
 * If none of the methods handle the event and [member physics_object_picking] is `true`, the event is used for physics object picking.
 *
 * **Note:** This method doesn't propagate input events to embedded [Window]s or [SubViewport]s.
 *
 * **Deprecated.** Use [method push_input] instead.
 *
*/
push_unhandled_input(): void;

/** Set/clear individual bits on the rendering layer mask. This simplifies editing this [Viewport]'s layers. */
set_canvas_cull_mask_bit(): void;

/**
 * Stops the input from propagating further down the [SceneTree].
 *
 * **Note:** This does not affect the methods in [Input], only the way events are propagated.
 *
*/
set_input_as_handled(): void;

/** Sets the number of subdivisions to use in the specified quadrant. A higher number of subdivisions allows you to have more shadows in the scene at once, but reduces the quality of the shadows. A good practice is to have quadrants with a varying number of subdivisions and to have as few subdivisions as possible. */
set_positional_shadow_atlas_quadrant_subdiv(): void;

/** Force instantly updating the display based on the current mouse cursor position. This includes updating the mouse cursor shape and sending necessary [signal Control.mouse_entered], [signal CollisionObject2D.mouse_entered], [signal CollisionObject3D.mouse_entered] and [signal Window.mouse_entered] signals and their respective [code]mouse_exited[/code] counterparts. */
update_mouse_cursor_state(): void;

/**
 * Moves the mouse pointer to the specified position in this [Viewport] using the coordinate system of this [Viewport].
 *
 * **Note:** [method warp_mouse] is only supported on Windows, macOS and Linux. It has no effect on Android, iOS and Web.
 *
*/
warp_mouse(): void;

  connect<T extends SignalsOf<Viewport>>(signal: T, method: SignalFunction<Viewport[T]>): number;



/**
 * This quadrant will not be used.
 *
*/
static SHADOW_ATLAS_QUADRANT_SUBDIV_DISABLED: any;

/**
 * This quadrant will only be used by one shadow map.
 *
*/
static SHADOW_ATLAS_QUADRANT_SUBDIV_1: any;

/**
 * This quadrant will be split in 4 and used by up to 4 shadow maps.
 *
*/
static SHADOW_ATLAS_QUADRANT_SUBDIV_4: any;

/**
 * This quadrant will be split 16 ways and used by up to 16 shadow maps.
 *
*/
static SHADOW_ATLAS_QUADRANT_SUBDIV_16: any;

/**
 * This quadrant will be split 64 ways and used by up to 64 shadow maps.
 *
*/
static SHADOW_ATLAS_QUADRANT_SUBDIV_64: any;

/**
 * This quadrant will be split 256 ways and used by up to 256 shadow maps. Unless the [member positional_shadow_atlas_size] is very high, the shadows in this quadrant will be very low resolution.
 *
*/
static SHADOW_ATLAS_QUADRANT_SUBDIV_256: any;

/**
 * This quadrant will be split 1024 ways and used by up to 1024 shadow maps. Unless the [member positional_shadow_atlas_size] is very high, the shadows in this quadrant will be very low resolution.
 *
*/
static SHADOW_ATLAS_QUADRANT_SUBDIV_1024: any;

/**
 * Represents the size of the [enum PositionalShadowAtlasQuadrantSubdiv] enum.
 *
*/
static SHADOW_ATLAS_QUADRANT_SUBDIV_MAX: any;

/**
 * Use bilinear scaling for the viewport's 3D buffer. The amount of scaling can be set using [member scaling_3d_scale]. Values less than `1.0` will result in undersampling while values greater than `1.0` will result in supersampling. A value of `1.0` disables scaling.
 *
*/
static SCALING_3D_MODE_BILINEAR: any;

/**
 * Use AMD FidelityFX Super Resolution 1.0 upscaling for the viewport's 3D buffer. The amount of scaling can be set using [member scaling_3d_scale]. Values less than `1.0` will be result in the viewport being upscaled using FSR. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` disables scaling.
 *
*/
static SCALING_3D_MODE_FSR: any;

/**
 * Use AMD FidelityFX Super Resolution 2.2 upscaling for the viewport's 3D buffer. The amount of scaling can be set using [member Viewport.scaling_3d_scale]. Values less than `1.0` will be result in the viewport being upscaled using FSR2. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` will use FSR2 at native resolution as a TAA solution.
 *
*/
static SCALING_3D_MODE_FSR2: any;

/**
 * Represents the size of the [enum Scaling3DMode] enum.
 *
*/
static SCALING_3D_MODE_MAX: any;

/**
 * Multisample antialiasing mode disabled. This is the default value, and is also the fastest setting.
 *
*/
static MSAA_DISABLED: any;

/**
 * Use 2× Multisample Antialiasing. This has a moderate performance cost. It helps reduce aliasing noticeably, but 4× MSAA still looks substantially better.
 *
*/
static MSAA_2X: any;

/**
 * Use 4× Multisample Antialiasing. This has a significant performance cost, and is generally a good compromise between performance and quality.
 *
*/
static MSAA_4X: any;

/**
 * Use 8× Multisample Antialiasing. This has a very high performance cost. The difference between 4× and 8× MSAA may not always be visible in real gameplay conditions. Likely unsupported on low-end and older hardware.
 *
*/
static MSAA_8X: any;

/**
 * Represents the size of the [enum MSAA] enum.
 *
*/
static MSAA_MAX: any;

/**
 * Do not perform any antialiasing in the full screen post-process.
 *
*/
static SCREEN_SPACE_AA_DISABLED: any;

/**
 * Use fast approximate antialiasing. FXAA is a popular screen-space antialiasing method, which is fast but will make the image look blurry, especially at lower resolutions. It can still work relatively well at large resolutions such as 1440p and 4K.
 *
*/
static SCREEN_SPACE_AA_FXAA: any;

/**
 * Represents the size of the [enum ScreenSpaceAA] enum.
 *
*/
static SCREEN_SPACE_AA_MAX: any;

/**
 * Amount of objects in frame.
 *
*/
static RENDER_INFO_OBJECTS_IN_FRAME: any;

/**
 * Amount of vertices in frame.
 *
*/
static RENDER_INFO_PRIMITIVES_IN_FRAME: any;

/**
 * Amount of draw calls in frame.
 *
*/
static RENDER_INFO_DRAW_CALLS_IN_FRAME: any;

/**
 * Represents the size of the [enum RenderInfo] enum.
 *
*/
static RENDER_INFO_MAX: any;

/** No documentation provided. */
static RENDER_INFO_TYPE_VISIBLE: any;

/** No documentation provided. */
static RENDER_INFO_TYPE_SHADOW: any;

/** No documentation provided. */
static RENDER_INFO_TYPE_MAX: any;

/**
 * Objects are displayed normally.
 *
*/
static DEBUG_DRAW_DISABLED: any;

/**
 * Objects are displayed without light information.
 *
*/
static DEBUG_DRAW_UNSHADED: any;

/** No documentation provided. */
static DEBUG_DRAW_LIGHTING: any;

/**
 * Objects are displayed semi-transparent with additive blending so you can see where they are drawing over top of one another. A higher overdraw means you are wasting performance on drawing pixels that are being hidden behind others.
 *
*/
static DEBUG_DRAW_OVERDRAW: any;

/**
 * Objects are displayed in wireframe style.
 *
*/
static DEBUG_DRAW_WIREFRAME: any;

/** No documentation provided. */
static DEBUG_DRAW_NORMAL_BUFFER: any;

/**
 * Objects are displayed with only the albedo value from [VoxelGI]s.
 *
*/
static DEBUG_DRAW_VOXEL_GI_ALBEDO: any;

/**
 * Objects are displayed with only the lighting value from [VoxelGI]s.
 *
*/
static DEBUG_DRAW_VOXEL_GI_LIGHTING: any;

/**
 * Objects are displayed with only the emission color from [VoxelGI]s.
 *
*/
static DEBUG_DRAW_VOXEL_GI_EMISSION: any;

/**
 * Draws the shadow atlas that stores shadows from [OmniLight3D]s and [SpotLight3D]s in the upper left quadrant of the [Viewport].
 *
*/
static DEBUG_DRAW_SHADOW_ATLAS: any;

/**
 * Draws the shadow atlas that stores shadows from [DirectionalLight3D]s in the upper left quadrant of the [Viewport].
 *
*/
static DEBUG_DRAW_DIRECTIONAL_SHADOW_ATLAS: any;

/** No documentation provided. */
static DEBUG_DRAW_SCENE_LUMINANCE: any;

/**
 * Draws the screen-space ambient occlusion texture instead of the scene so that you can clearly see how it is affecting objects. In order for this display mode to work, you must have [member Environment.ssao_enabled] set in your [WorldEnvironment].
 *
*/
static DEBUG_DRAW_SSAO: any;

/**
 * Draws the screen-space indirect lighting texture instead of the scene so that you can clearly see how it is affecting objects. In order for this display mode to work, you must have [member Environment.ssil_enabled] set in your [WorldEnvironment].
 *
*/
static DEBUG_DRAW_SSIL: any;

/**
 * Colors each PSSM split for the [DirectionalLight3D]s in the scene a different color so you can see where the splits are. In order, they will be colored red, green, blue, and yellow.
 *
*/
static DEBUG_DRAW_PSSM_SPLITS: any;

/**
 * Draws the decal atlas used by [Decal]s and light projector textures in the upper left quadrant of the [Viewport].
 *
*/
static DEBUG_DRAW_DECAL_ATLAS: any;

/** No documentation provided. */
static DEBUG_DRAW_SDFGI: any;

/** No documentation provided. */
static DEBUG_DRAW_SDFGI_PROBES: any;

/** No documentation provided. */
static DEBUG_DRAW_GI_BUFFER: any;

/** No documentation provided. */
static DEBUG_DRAW_DISABLE_LOD: any;

/** No documentation provided. */
static DEBUG_DRAW_CLUSTER_OMNI_LIGHTS: any;

/** No documentation provided. */
static DEBUG_DRAW_CLUSTER_SPOT_LIGHTS: any;

/** No documentation provided. */
static DEBUG_DRAW_CLUSTER_DECALS: any;

/** No documentation provided. */
static DEBUG_DRAW_CLUSTER_REFLECTION_PROBES: any;

/** No documentation provided. */
static DEBUG_DRAW_OCCLUDERS: any;

/** No documentation provided. */
static DEBUG_DRAW_MOTION_VECTORS: any;

/**
 * Draws the internal resolution buffer of the scene before post-processing is applied.
 *
*/
static DEBUG_DRAW_INTERNAL_BUFFER: any;

/**
 * The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled).
 *
*/
static DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_NEAREST: any;

/**
 * The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled).
 *
*/
static DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_LINEAR: any;

/**
 * The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look smooth from up close, and smooth from a distance.
 *
 * Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.
 *
*/
static DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS: any;

/**
 * The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look pixelated from up close, and smooth from a distance.
 *
 * Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.
 *
*/
static DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS: any;

/**
 * Max value for [enum DefaultCanvasItemTextureFilter] enum.
 *
*/
static DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_MAX: any;

/**
 * Disables textures repeating. Instead, when reading UVs outside the 0-1 range, the value will be clamped to the edge of the texture, resulting in a stretched out look at the borders of the texture.
 *
*/
static DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_DISABLED: any;

/**
 * Enables the texture to repeat when UV coordinates are outside the 0-1 range. If using one of the linear filtering modes, this can result in artifacts at the edges of a texture when the sampler filters across the edges of the texture.
 *
*/
static DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_ENABLED: any;

/**
 * Flip the texture when repeating so that the edge lines up instead of abruptly changing.
 *
*/
static DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_MIRROR: any;

/**
 * Max value for [enum DefaultCanvasItemTextureRepeat] enum.
 *
*/
static DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_MAX: any;

/** No documentation provided. */
static SDF_OVERSIZE_100_PERCENT: any;

/** No documentation provided. */
static SDF_OVERSIZE_120_PERCENT: any;

/** No documentation provided. */
static SDF_OVERSIZE_150_PERCENT: any;

/** No documentation provided. */
static SDF_OVERSIZE_200_PERCENT: any;

/** No documentation provided. */
static SDF_OVERSIZE_MAX: any;

/** No documentation provided. */
static SDF_SCALE_100_PERCENT: any;

/** No documentation provided. */
static SDF_SCALE_50_PERCENT: any;

/** No documentation provided. */
static SDF_SCALE_25_PERCENT: any;

/** No documentation provided. */
static SDF_SCALE_MAX: any;

/**
 * VRS is disabled.
 *
*/
static VRS_DISABLED: any;

/**
 * VRS uses a texture. Note, for stereoscopic use a texture atlas with a texture for each view.
 *
*/
static VRS_TEXTURE: any;

/**
 * VRS texture is supplied by the primary [XRInterface].
 *
*/
static VRS_XR: any;

/**
 * Represents the size of the [enum VRSMode] enum.
 *
*/
static VRS_MAX: any;


/**
 * Emitted when a Control node grabs keyboard focus.
 *
*/
$gui_focus_changed: Signal<() => void>

/**
 * Emitted when the size of the viewport is changed, whether by resizing of window, or some other means.
 *
*/
$size_changed: Signal<() => void>

}

