
/**
 * External XR interface plugins should inherit from this class.
 *
*/
declare class XRInterfaceExtension extends XRInterface  {

  
/**
 * External XR interface plugins should inherit from this class.
 *
*/
  new(): XRInterfaceExtension; 
  static "new"(): XRInterfaceExtension 



/** Called if interface is active and queues have been submitted. */
protected _end_frame(): void;

/** Return [code]true[/code] if anchor detection is enabled for this interface. */
protected _get_anchor_detection_is_enabled(): boolean;

/** Returns the camera feed ID for the [CameraFeed] registered with the [CameraServer] that should be presented as the background on an AR capable device (if applicable). */
protected _get_camera_feed_id(): int;

/** Returns the [Transform3D] that positions the [XRCamera3D] in the world. */
protected _get_camera_transform(): Transform3D;

/** Returns the capabilities of this interface. */
protected _get_capabilities(): int;

/** Return color texture into which to render (if applicable). */
protected _get_color_texture(): RID;

/** Return depth texture into which to render (if applicable). */
protected _get_depth_texture(): RID;

/** Returns the name of this interface. */
protected _get_name(): StringName;

/** Returns an [PackedVector3Array] that denotes the play areas boundaries (if applicable). */
protected _get_play_area(): PackedVector3Array;

/** Returns the [enum XRInterface.PlayAreaMode] that sets up our play area. */
protected _get_play_area_mode(): int;

/** Returns the projection matrix for the given view as a [PackedFloat64Array]. */
protected _get_projection_for_view(): PackedFloat64Array;

/** Returns the size of our render target for this interface, this overrides the size of the [Viewport] marked as the xr viewport. */
protected _get_render_target_size(): Vector2;

/** Returns a [PackedStringArray] with pose names configured by this interface. Note that user configuration can override this list. */
protected _get_suggested_pose_names(): PackedStringArray;

/** Returns a [PackedStringArray] with tracker names configured by this interface. Note that user configuration can override this list. */
protected _get_suggested_tracker_names(): PackedStringArray;

/** Returns a [Dictionary] with system information related to this interface. */
protected _get_system_info(): Dictionary<any, any>;

/** Returns a [enum XRInterface.TrackingStatus] specifying the current status of our tracking. */
protected _get_tracking_status(): int;

/** Returns a [Transform3D] for a given view. */
protected _get_transform_for_view(): Transform3D;

/** Return velocity texture into which to render (if applicable). */
protected _get_velocity_texture(): RID;

/** Returns the number of views this interface requires, 1 for mono, 2 for stereoscopic. */
protected _get_view_count(): int;

/** No documentation provided. */
protected _get_vrs_texture(): RID;

/** Initializes the interface, returns [code]true[/code] on success. */
protected _initialize(): boolean;

/** Returns [code]true[/code] if this interface has been initialized. */
protected _is_initialized(): boolean;

/** Called after the XR [Viewport] draw logic has completed. */
protected _post_draw_viewport(): void;

/** Called if this is our primary [XRInterfaceExtension] before we start processing a [Viewport] for every active XR [Viewport], returns [code]true[/code] if that viewport should be rendered. An XR interface may return [code]false[/code] if the user has taken off their headset and we can pause rendering. */
protected _pre_draw_viewport(): boolean;

/** Called if this [XRInterfaceExtension] is active before rendering starts. Most XR interfaces will sync tracking at this point in time. */
protected _pre_render(): void;

/** Called if this [XRInterfaceExtension] is active before our physics and game process is called. Most XR interfaces will update its [XRPositionalTracker]s at this point in time. */
protected _process(): void;

/** Enables anchor detection on this interface if supported. */
protected _set_anchor_detection_is_enabled(): void;

/** Set the play area mode for this interface. */
protected _set_play_area_mode(): boolean;

/** Returns [code]true[/code] if this interface supports this play area mode. */
protected _supports_play_area_mode(): boolean;

/** Triggers a haptic pulse to be emitted on the specified tracker. */
protected _trigger_haptic_pulse(): void;

/** Uninitialize the interface. */
protected _uninitialize(): void;

/** Blits our render results to screen optionally applying lens distortion. This can only be called while processing [code]_commit_views[/code]. */
add_blit(): void;

/** No documentation provided. */
get_color_texture(): RID;

/** No documentation provided. */
get_depth_texture(): RID;

/** Returns a valid [RID] for a texture to which we should render the current frame if supported by the interface. */
get_render_target_texture(): RID;

/** No documentation provided. */
get_velocity_texture(): RID;

  connect<T extends SignalsOf<XRInterfaceExtension>>(signal: T, method: SignalFunction<XRInterfaceExtension[T]>): number;






}

