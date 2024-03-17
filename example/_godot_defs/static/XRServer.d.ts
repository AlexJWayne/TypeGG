
/**
 * The AR/VR server is the heart of our Advanced and Virtual Reality solution and handles all the processing.
 *
*/
declare class XRServerClass extends Object  {

  
/**
 * The AR/VR server is the heart of our Advanced and Virtual Reality solution and handles all the processing.
 *
*/
  new(): XRServerClass; 
  static "new"(): XRServerClass 


/** The primary [XRInterface] currently bound to the [XRServer]. */
primary_interface: XRInterface;

/**
 * The current origin of our tracking space in the virtual world. This is used by the renderer to properly position the camera with new tracking data.
 *
 * **Note:** This property is managed by the current [XROrigin3D] node. It is exposed for access from GDExtensions.
 *
*/
world_origin: Transform3D;

/** Allows you to adjust the scale to your game's units. Most AR/VR platforms assume a scale of 1 game world unit = 1 real world meter. */
world_scale: float;

/** Registers an [XRInterface] object. */
add_interface(): void;

/** Registers a new [XRPositionalTracker] that tracks a spatial location in real space. */
add_tracker(): void;

/**
 * This is an important function to understand correctly. AR and VR platforms all handle positioning slightly differently.
 *
 * For platforms that do not offer spatial tracking, our origin point (0, 0, 0) is the location of our HMD, but you have little control over the direction the player is facing in the real world.
 *
 * For platforms that do offer spatial tracking, our origin point depends very much on the system. For OpenVR, our origin point is usually the center of the tracking space, on the ground. For other platforms, it's often the location of the tracking camera.
 *
 * This method allows you to center your tracker on the location of the HMD. It will take the current location of the HMD and use that to adjust all your tracking data; in essence, realigning the real world to your player's current position in the game world.
 *
 * For this method to produce usable results, tracking information must be available. This often takes a few frames after starting your game.
 *
 * You should call this method after a few seconds have passed. For example, when the user requests a realignment of the display holding a designated button on a controller for a short period of time, or when implementing a teleport mechanism.
 *
*/
center_on_hmd(): void;

/** Finds an interface by its [param name]. For example, if your project uses capabilities of an AR/VR platform, you can find the interface for that platform by name and initialize it. */
find_interface(): XRInterface;

/** Returns the primary interface's transformation. */
get_hmd_transform(): Transform3D;

/** Returns the interface registered at the given [param idx] index in the list of interfaces. */
get_interface(): XRInterface;

/** Returns the number of interfaces currently registered with the AR/VR server. If your project supports multiple AR/VR platforms, you can look through the available interface, and either present the user with a selection or simply try to initialize each interface and use the first one that returns [code]true[/code]. */
get_interface_count(): int;

/** Returns a list of available interfaces the ID and name of each interface. */
get_interfaces(): Dictionary[];

/** Returns the reference frame transform. Mostly used internally and exposed for GDExtension build interfaces. */
get_reference_frame(): Transform3D;

/** Returns the positional tracker with the given [param tracker_name]. */
get_tracker(): XRPositionalTracker;

/** Returns a dictionary of trackers for [param tracker_types]. */
get_trackers(): Dictionary<any, any>;

/** Removes this [param interface]. */
remove_interface(): void;

/** Removes this positional [param tracker]. */
remove_tracker(): void;

  connect<T extends SignalsOf<XRServerClass>>(signal: T, method: SignalFunction<XRServerClass[T]>): number;



/**
 * The tracker tracks the location of the players head. This is usually a location centered between the players eyes. Note that for handheld AR devices this can be the current location of the device.
 *
*/
static TRACKER_HEAD: any;

/**
 * The tracker tracks the location of a controller.
 *
*/
static TRACKER_CONTROLLER: any;

/**
 * The tracker tracks the location of a base station.
 *
*/
static TRACKER_BASESTATION: any;

/**
 * The tracker tracks the location and size of an AR anchor.
 *
*/
static TRACKER_ANCHOR: any;

/**
 * Used internally to filter trackers of any known type.
 *
*/
static TRACKER_ANY_KNOWN: any;

/**
 * Used internally if we haven't set the tracker type yet.
 *
*/
static TRACKER_UNKNOWN: any;

/**
 * Used internally to select all trackers.
 *
*/
static TRACKER_ANY: any;

/**
 * Fully reset the orientation of the HMD. Regardless of what direction the user is looking to in the real world. The user will look dead ahead in the virtual world.
 *
*/
static RESET_FULL_ROTATION: any;

/**
 * Resets the orientation but keeps the tilt of the device. So if we're looking down, we keep looking down but heading will be reset.
 *
*/
static RESET_BUT_KEEP_TILT: any;

/**
 * Does not reset the orientation of the HMD, only the position of the player gets centered.
 *
*/
static DONT_RESET_ROTATION: any;


/**
 * Emitted when a new interface has been added.
 *
*/
$interface_added: Signal<() => void>

/**
 * Emitted when an interface is removed.
 *
*/
$interface_removed: Signal<() => void>

/**
 * Emitted when a new tracker has been added. If you don't use a fixed number of controllers or if you're using [XRAnchor3D]s for an AR solution, it is important to react to this signal to add the appropriate [XRController3D] or [XRAnchor3D] nodes related to this new tracker.
 *
*/
$tracker_added: Signal<() => void>

/**
 * Emitted when a tracker is removed. You should remove any [XRController3D] or [XRAnchor3D] points if applicable. This is not mandatory, the nodes simply become inactive and will be made active again when a new tracker becomes available (i.e. a new controller is switched on that takes the place of the previous one).
 *
*/
$tracker_removed: Signal<() => void>

/**
 * Emitted when an existing tracker has been updated. This can happen if the user switches controllers.
 *
*/
$tracker_updated: Signal<() => void>

}

