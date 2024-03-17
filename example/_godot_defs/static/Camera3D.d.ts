
/**
 * [Camera3D] is a special node that displays what is visible from its current location. Cameras register themselves in the nearest [Viewport] node (when ascending the tree). Only one camera can be active per viewport. If no viewport is available ascending the tree, the camera will register in the global viewport. In other words, a camera just provides 3D display capabilities to a [Viewport], and, without one, a scene registered in that [Viewport] (or higher viewports) can't be displayed.
 *
*/
declare class Camera3D extends Node3D  {

  
/**
 * [Camera3D] is a special node that displays what is visible from its current location. Cameras register themselves in the nearest [Viewport] node (when ascending the tree). Only one camera can be active per viewport. If no viewport is available ascending the tree, the camera will register in the global viewport. In other words, a camera just provides 3D display capabilities to a [Viewport], and, without one, a scene registered in that [Viewport] (or higher viewports) can't be displayed.
 *
*/
  new(): Camera3D; 
  static "new"(): Camera3D 


/** The [CameraAttributes] to use for this camera. */
attributes: CameraAttributes;

/**
 * The culling mask that describes which [member VisualInstance3D.layers] are rendered by this camera. By default, all 20 user-visible layers are rendered.
 *
 * **Note:** Since the [member cull_mask] allows for 32 layers to be stored in total, there are an additional 12 layers that are only used internally by the engine and aren't exposed in the editor. Setting [member cull_mask] using a script allows you to toggle those reserved layers, which can be useful for editor plugins.
 *
 * To adjust [member cull_mask] more easily using a script, use [method get_cull_mask_value] and [method set_cull_mask_value].
 *
 * **Note:** [VoxelGI], SDFGI and [LightmapGI] will always take all layers into account to determine what contributes to global illumination. If this is an issue, set [member GeometryInstance3D.gi_mode] to [constant GeometryInstance3D.GI_MODE_DISABLED] for meshes and [member Light3D.light_bake_mode] to [constant Light3D.BAKE_DISABLED] for lights to exclude them from global illumination.
 *
*/
cull_mask: int;

/**
 * If `true`, the ancestor [Viewport] is currently using this camera.
 *
 * If multiple cameras are in the scene, one will always be made current. For example, if two [Camera3D] nodes are present in the scene and only one is current, setting one camera's [member current] to `false` will cause the other camera to be made current.
 *
*/
current: boolean;

/** If not [constant DOPPLER_TRACKING_DISABLED], this camera will simulate the [url=https://en.wikipedia.org/wiki/Doppler_effect]Doppler effect[/url] for objects changed in particular [code]_process[/code] methods. See [enum DopplerTracking] for possible values. */
doppler_tracking: int;

/** The [Environment] to use for this camera. */
environment: Environment;

/** The distance to the far culling boundary for this camera relative to its local Z axis. Higher values allow the camera to see further away, while decreasing [member far] can improve performance if it results in objects being partially or fully culled. */
far: float;

/**
 * The camera's field of view angle (in degrees). Only applicable in perspective mode. Since [member keep_aspect] locks one axis, [member fov] sets the other axis' field of view angle.
 *
 * For reference, the default vertical field of view value (`75.0`) is equivalent to a horizontal FOV of:
 *
 * - ~91.31 degrees in a 4:3 viewport
 *
 * - ~101.67 degrees in a 16:10 viewport
 *
 * - ~107.51 degrees in a 16:9 viewport
 *
 * - ~121.63 degrees in a 21:9 viewport
 *
*/
fov: float;

/**
 * The camera's frustum offset. This can be changed from the default to create "tilted frustum" effects such as [url=https://zdoom.org/wiki/Y-shearing]Y-shearing[/url].
 *
 * **Note:** Only effective if [member projection] is [constant PROJECTION_FRUSTUM].
 *
*/
frustum_offset: Vector2;

/** The horizontal (X) offset of the camera viewport. */
h_offset: float;

/** The axis to lock during [member fov]/[member size] adjustments. Can be either [constant KEEP_WIDTH] or [constant KEEP_HEIGHT]. */
keep_aspect: int;

/** The distance to the near culling boundary for this camera relative to its local Z axis. Lower values allow the camera to see objects more up close to its origin, at the cost of lower precision across the [i]entire[/i] range. Values lower than the default can lead to increased Z-fighting. */
near: float;

/** The camera's projection mode. In [constant PROJECTION_PERSPECTIVE] mode, objects' Z distance from the camera's local space scales their perceived size. */
projection: int;

/** The camera's size in meters measured as the diameter of the width or height, depending on [member keep_aspect]. Only applicable in orthogonal and frustum modes. */
size: float;

/** The vertical (Y) offset of the camera viewport. */
v_offset: float;

/** If this is the current camera, remove it from being current. If [param enable_next] is [code]true[/code], request to make the next camera current, if any. */
clear_current(): void;

/** Returns the projection matrix that this camera uses to render to its associated viewport. The camera must be part of the scene tree to function. */
get_camera_projection(): Projection;

/** Returns the camera's RID from the [RenderingServer]. */
get_camera_rid(): RID;

/** Returns the transform of the camera plus the vertical ([member v_offset]) and horizontal ([member h_offset]) offsets; and any other adjustments made to the position and orientation of the camera by subclassed cameras such as [XRCamera3D]. */
get_camera_transform(): Transform3D;

/** Returns whether or not the specified layer of the [member cull_mask] is enabled, given a [param layer_number] between 1 and 20. */
get_cull_mask_value(): boolean;

/** Returns the camera's frustum planes in world space units as an array of [Plane]s in the following order: near, far, left, top, right, bottom. Not to be confused with [member frustum_offset]. */
get_frustum(): Plane[];

/** Returns the RID of a pyramid shape encompassing the camera's view frustum, ignoring the camera's near plane. The tip of the pyramid represents the position of the camera. */
get_pyramid_shape_rid(): RID;

/**
 * Returns `true` if the given position is behind the camera (the blue part of the linked diagram). [url=https://raw.githubusercontent.com/godotengine/godot-docs/master/img/camera3d_position_frustum.png]See this diagram[/url] for an overview of position query methods.
 *
 * **Note:** A position which returns `false` may still be outside the camera's field of view.
 *
*/
is_position_behind(): boolean;

/** Returns [code]true[/code] if the given position is inside the camera's frustum (the green part of the linked diagram). [url=https://raw.githubusercontent.com/godotengine/godot-docs/master/img/camera3d_position_frustum.png]See this diagram[/url] for an overview of position query methods. */
is_position_in_frustum(): boolean;

/** Makes this camera the current camera for the [Viewport] (see class description). If the camera node is outside the scene tree, it will attempt to become current once it's added. */
make_current(): void;

/** Returns a normal vector from the screen point location directed along the camera. Orthogonal cameras are normalized. Perspective cameras account for perspective, screen width/height, etc. */
project_local_ray_normal(): Vector3;

/** Returns the 3D point in world space that maps to the given 2D coordinate in the [Viewport] rectangle on a plane that is the given [param z_depth] distance into the scene away from the camera. */
project_position(): Vector3;

/** Returns a normal vector in world space, that is the result of projecting a point on the [Viewport] rectangle by the inverse camera projection. This is useful for casting rays in the form of (origin, normal) for object intersection or picking. */
project_ray_normal(): Vector3;

/** Returns a 3D position in world space, that is the result of projecting a point on the [Viewport] rectangle by the inverse camera projection. This is useful for casting rays in the form of (origin, normal) for object intersection or picking. */
project_ray_origin(): Vector3;

/** Based on [param value], enables or disables the specified layer in the [member cull_mask], given a [param layer_number] between 1 and 20. */
set_cull_mask_value(): void;

/** Sets the camera projection to frustum mode (see [constant PROJECTION_FRUSTUM]), by specifying a [param size], an [param offset], and the [param z_near] and [param z_far] clip planes in world space units. See also [member frustum_offset]. */
set_frustum(): void;

/** Sets the camera projection to orthogonal mode (see [constant PROJECTION_ORTHOGONAL]), by specifying a [param size], and the [param z_near] and [param z_far] clip planes in world space units. (As a hint, 2D games often use this projection, with values specified in pixels.) */
set_orthogonal(): void;

/** Sets the camera projection to perspective mode (see [constant PROJECTION_PERSPECTIVE]), by specifying a [param fov] (field of view) angle in degrees, and the [param z_near] and [param z_far] clip planes in world space units. */
set_perspective(): void;

/**
 * Returns the 2D coordinate in the [Viewport] rectangle that maps to the given 3D point in world space.
 *
 * **Note:** When using this to position GUI elements over a 3D viewport, use [method is_position_behind] to prevent them from appearing if the 3D point is behind the camera:
 *
 * @example 
 * 
 * # This code block is part of a script that inherits from Node3D.
 * # `control` is a reference to a node inheriting from Control.
 * control.visible = not get_viewport().get_camera_3d().is_position_behind(global_transform.origin)
 * control.position = get_viewport().get_camera_3d().unproject_position(global_transform.origin)
 * @summary 
 * 
 *
*/
unproject_position(): Vector2;

  connect<T extends SignalsOf<Camera3D>>(signal: T, method: SignalFunction<Camera3D[T]>): number;



/**
 * Perspective projection. Objects on the screen becomes smaller when they are far away.
 *
*/
static PROJECTION_PERSPECTIVE: any;

/**
 * Orthogonal projection, also known as orthographic projection. Objects remain the same size on the screen no matter how far away they are.
 *
*/
static PROJECTION_ORTHOGONAL: any;

/**
 * Frustum projection. This mode allows adjusting [member frustum_offset] to create "tilted frustum" effects.
 *
*/
static PROJECTION_FRUSTUM: any;

/**
 * Preserves the horizontal aspect ratio; also known as Vert- scaling. This is usually the best option for projects running in portrait mode, as taller aspect ratios will benefit from a wider vertical FOV.
 *
*/
static KEEP_WIDTH: any;

/**
 * Preserves the vertical aspect ratio; also known as Hor+ scaling. This is usually the best option for projects running in landscape mode, as wider aspect ratios will automatically benefit from a wider horizontal FOV.
 *
*/
static KEEP_HEIGHT: any;

/**
 * Disables [url=https://en.wikipedia.org/wiki/Doppler_effect]Doppler effect[/url] simulation (default).
 *
*/
static DOPPLER_TRACKING_DISABLED: any;

/**
 * Simulate [url=https://en.wikipedia.org/wiki/Doppler_effect]Doppler effect[/url] by tracking positions of objects that are changed in `_process`. Changes in the relative velocity of this camera compared to those objects affect how audio is perceived (changing the audio's [member AudioStreamPlayer3D.pitch_scale]).
 *
*/
static DOPPLER_TRACKING_IDLE_STEP: any;

/**
 * Simulate [url=https://en.wikipedia.org/wiki/Doppler_effect]Doppler effect[/url] by tracking positions of objects that are changed in `_physics_process`. Changes in the relative velocity of this camera compared to those objects affect how audio is perceived (changing the audio's [member AudioStreamPlayer3D.pitch_scale]).
 *
*/
static DOPPLER_TRACKING_PHYSICS_STEP: any;



}

