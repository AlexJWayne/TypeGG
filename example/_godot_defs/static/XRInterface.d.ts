
/**
 * This class needs to be implemented to make an AR or VR platform available to Godot and these should be implemented as C++ modules or GDExtension modules. Part of the interface is exposed to GDScript so you can detect, enable and configure an AR or VR platform.
 *
 * Interfaces should be written in such a way that simply enabling them will give us a working setup. You can query the available interfaces through [XRServer].
 *
*/
declare class XRInterface extends RefCounted  {

  
/**
 * This class needs to be implemented to make an AR or VR platform available to Godot and these should be implemented as C++ modules or GDExtension modules. Part of the interface is exposed to GDScript so you can detect, enable and configure an AR or VR platform.
 *
 * Interfaces should be written in such a way that simply enabling them will give us a working setup. You can query the available interfaces through [XRServer].
 *
*/
  new(): XRInterface; 
  static "new"(): XRInterface 


/** On an AR interface, [code]true[/code] if anchor detection is enabled. */
ar_is_anchor_detection_enabled: boolean;

/** Specify how XR should blend in the environment. This is specific to certain AR and passthrough devices where camera images are blended in by the XR compositor. */
environment_blend_mode: int;

/** [code]true[/code] if this is the primary interface. */
interface_is_primary: boolean;

/** The play area mode for this interface. */
xr_play_area_mode: int;

/** If this is an AR interface that requires displaying a camera feed as the background, this method returns the feed ID in the [CameraServer] for this interface. */
get_camera_feed_id(): int;

/** Returns a combination of [enum Capabilities] flags providing information about the capabilities of this interface. */
get_capabilities(): int;

/** Returns the name of this interface (OpenXR, OpenVR, OpenHMD, ARKit, etc). */
get_name(): StringName;

/** Returns an array of vectors that denotes the physical play area mapped to the virtual space around the [XROrigin3D] point. The points form a convex polygon that can be used to react to or visualize the play area. This returns an empty array if this feature is not supported or if the information is not yet available. */
get_play_area(): PackedVector3Array;

/** Returns the projection matrix for a view/eye. */
get_projection_for_view(): Projection;

/** Returns the resolution at which we should render our intermediate results before things like lens distortion are applied by the VR platform. */
get_render_target_size(): Vector2;

/** Returns the an array of supported environment blend modes, see [enum XRInterface.EnvironmentBlendMode]. */
get_supported_environment_blend_modes(): any[];

/**
 * Returns a [Dictionary] with extra system info. Interfaces are expected to return `XRRuntimeName` and `XRRuntimeVersion` providing info about the used XR runtime. Additional entries may be provided specific to an interface.
 *
 * **Note:**This information may only be available after [method initialize] was successfully called.
 *
*/
get_system_info(): Dictionary<any, any>;

/** If supported, returns the status of our tracking. This will allow you to provide feedback to the user whether there are issues with positional tracking. */
get_tracking_status(): int;

/**
 * Returns the transform for a view/eye.
 *
 * [param view] is the view/eye index.
 *
 * [param cam_transform] is the transform that maps device coordinates to scene coordinates, typically the [member Node3D.global_transform] of the current XROrigin3D.
 *
*/
get_transform_for_view(): Transform3D;

/** Returns the number of views that need to be rendered for this device. 1 for Monoscopic, 2 for Stereoscopic. */
get_view_count(): int;

/**
 * Call this to initialize this interface. The first interface that is initialized is identified as the primary interface and it will be used for rendering output.
 *
 * After initializing the interface you want to use you then need to enable the AR/VR mode of a viewport and rendering should commence.
 *
 * **Note:** You must enable the XR mode on the main viewport for any device that uses the main output of Godot, such as for mobile VR.
 *
 * If you do this for a platform that handles its own output (such as OpenVR) Godot will show just one eye without distortion on screen. Alternatively, you can add a separate viewport node to your scene and enable AR/VR on that viewport. It will be used to output to the HMD, leaving you free to do anything you like in the main window, such as using a separate camera as a spectator camera or rendering something completely different.
 *
 * While currently not used, you can activate additional interfaces. You may wish to do this if you want to track controllers from other platforms. However, at this point in time only one interface can render to an HMD.
 *
*/
initialize(): boolean;

/** Is [code]true[/code] if this interface has been initialized. */
is_initialized(): boolean;

/** Is [code]true[/code] if passthrough is enabled. */
is_passthrough_enabled(): boolean;

/** Is [code]true[/code] if this interface supports passthrough. */
is_passthrough_supported(): boolean;

/**
 * Sets the active environment blend mode.
 *
 * [param mode] is the [enum XRInterface.EnvironmentBlendMode] starting with the next frame.
 *
 * **Note:** Not all runtimes support all environment blend modes, so it is important to check this at startup. For example:
 *
 * @example 
 * 
 *                 func _ready():
 *                     var xr_interface: XRInterface = XRServer.find_interface("OpenXR")
 *                     if xr_interface and xr_interface.is_initialized():
 *                         var vp: Viewport = get_viewport()
 *                         vp.use_xr = true
 *                         var acceptable_modes = [ XRInterface.XR_ENV_BLEND_MODE_OPAQUE, XRInterface.XR_ENV_BLEND_MODE_ADDITIVE ]
 *                         var modes = xr_interface.get_supported_environment_blend_modes()
 *                         for mode in acceptable_modes:
 *                             if mode in modes:
 *                                 xr_interface.set_environment_blend_mode(mode)
 *                                 break
 * @summary 
 * 
 *
*/
set_environment_blend_mode(): boolean;

/** Sets the active play area mode, will return [code]false[/code] if the mode can't be used with this interface. */
set_play_area_mode(): boolean;

/**
 * Starts passthrough, will return `false` if passthrough couldn't be started.
 *
 * **Note:** The viewport used for XR must have a transparent background, otherwise passthrough may not properly render.
 *
*/
start_passthrough(): boolean;

/** Stops passthrough. */
stop_passthrough(): void;

/** Call this to find out if a given play area mode is supported by this interface. */
supports_play_area_mode(): boolean;

/**
 * Triggers a haptic pulse on a device associated with this interface.
 *
 * [param action_name] is the name of the action for this pulse.
 *
 * [param tracker_name] is optional and can be used to direct the pulse to a specific device provided that device is bound to this haptic.
 *
*/
trigger_haptic_pulse(): void;

/** Turns the interface off. */
uninitialize(): void;

  connect<T extends SignalsOf<XRInterface>>(signal: T, method: SignalFunction<XRInterface[T]>): number;



/**
 * No XR capabilities.
 *
*/
static XR_NONE: any;

/**
 * This interface can work with normal rendering output (non-HMD based AR).
 *
*/
static XR_MONO: any;

/**
 * This interface supports stereoscopic rendering.
 *
*/
static XR_STEREO: any;

/**
 * This interface supports quad rendering (not yet supported by Godot).
 *
*/
static XR_QUAD: any;

/**
 * This interface supports VR.
 *
*/
static XR_VR: any;

/**
 * This interface supports AR (video background and real world tracking).
 *
*/
static XR_AR: any;

/**
 * This interface outputs to an external device. If the main viewport is used, the on screen output is an unmodified buffer of either the left or right eye (stretched if the viewport size is not changed to the same aspect ratio of [method get_render_target_size]). Using a separate viewport node frees up the main viewport for other purposes.
 *
*/
static XR_EXTERNAL: any;

/**
 * Tracking is behaving as expected.
 *
*/
static XR_NORMAL_TRACKING: any;

/**
 * Tracking is hindered by excessive motion (the player is moving faster than tracking can keep up).
 *
*/
static XR_EXCESSIVE_MOTION: any;

/**
 * Tracking is hindered by insufficient features, it's too dark (for camera-based tracking), player is blocked, etc.
 *
*/
static XR_INSUFFICIENT_FEATURES: any;

/**
 * We don't know the status of the tracking or this interface does not provide feedback.
 *
*/
static XR_UNKNOWN_TRACKING: any;

/**
 * Tracking is not functional (camera not plugged in or obscured, lighthouses turned off, etc.).
 *
*/
static XR_NOT_TRACKING: any;

/**
 * Play area mode not set or not available.
 *
*/
static XR_PLAY_AREA_UNKNOWN: any;

/**
 * Play area only supports orientation tracking, no positional tracking, area will center around player.
 *
*/
static XR_PLAY_AREA_3DOF: any;

/**
 * Player is in seated position, limited positional tracking, fixed guardian around player.
 *
*/
static XR_PLAY_AREA_SITTING: any;

/**
 * Player is free to move around, full positional tracking.
 *
*/
static XR_PLAY_AREA_ROOMSCALE: any;

/**
 * Same as [constant XR_PLAY_AREA_ROOMSCALE] but origin point is fixed to the center of the physical space, [method XRServer.center_on_hmd] disabled.
 *
*/
static XR_PLAY_AREA_STAGE: any;

/**
 * Opaque blend mode. This is typically used for VR devices.
 *
*/
static XR_ENV_BLEND_MODE_OPAQUE: any;

/**
 * Additive blend mode. This is typically used for AR devices or VR devices with passthrough.
 *
*/
static XR_ENV_BLEND_MODE_ADDITIVE: any;

/**
 * Alpha blend mode. This is typically used for AR or VR devices with passthrough capabilities. The alpha channel controls how much of the passthrough is visible. Alpha of 0.0 means the passthrough is visible and this pixel works in ADDITIVE mode. Alpha of 1.0 means that the passthrough is not visible and this pixel works in OPAQUE mode.
 *
*/
static XR_ENV_BLEND_MODE_ALPHA_BLEND: any;


/**
 * Emitted when the play area is changed. This can be a result of the player resetting the boundary or entering a new play area, the player changing the play area mode, the world scale changing or the player resetting their headset orientation.
 *
*/
$play_area_changed: Signal<() => void>

}

