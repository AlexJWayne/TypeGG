
/**
 * An instance of this object represents a device that is tracked, such as a controller or anchor point. HMDs aren't represented here as they are handled internally.
 *
 * As controllers are turned on and the [XRInterface] detects them, instances of this object are automatically added to this list of active tracking objects accessible through the [XRServer].
 *
 * The [XRController3D] and [XRAnchor3D] both consume objects of this type and should be used in your project. The positional trackers are just under-the-hood objects that make this all work. These are mostly exposed so that GDExtension-based interfaces can interact with them.
 *
*/
declare class XRPositionalTracker extends RefCounted  {

  
/**
 * An instance of this object represents a device that is tracked, such as a controller or anchor point. HMDs aren't represented here as they are handled internally.
 *
 * As controllers are turned on and the [XRInterface] detects them, instances of this object are automatically added to this list of active tracking objects accessible through the [XRServer].
 *
 * The [XRController3D] and [XRAnchor3D] both consume objects of this type and should be used in your project. The positional trackers are just under-the-hood objects that make this all work. These are mostly exposed so that GDExtension-based interfaces can interact with them.
 *
*/
  new(): XRPositionalTracker; 
  static "new"(): XRPositionalTracker 


/** The description of this tracker. */
description: string;

/** Defines which hand this tracker relates to. */
hand: int;

/**
 * The unique name of this tracker. The trackers that are available differ between various XR runtimes and can often be configured by the user. Godot maintains a number of reserved names that it expects the [XRInterface] to implement if applicable:
 *
 * - `left_hand` identifies the controller held in the players left hand
 *
 * - `right_hand` identifies the controller held in the players right hand
 *
*/
name: StringName;

/** The profile associated with this tracker, interface dependent but will indicate the type of controller being tracked. */
profile: string;

/** The type of tracker. */
type: int;

/** Returns an input for this tracker. It can return a boolean, float or [Vector2] value depending on whether the input is a button, trigger or thumbstick/thumbpad. */
get_input(): any;

/** Returns the current [XRPose] state object for the bound [param name] pose. */
get_pose(): XRPose;

/** Returns [code]true[/code] if the tracker is available and is currently tracking the bound [param name] pose. */
has_pose(): boolean;

/** Marks this pose as invalid, we don't clear the last reported state but it allows users to decide if trackers need to be hidden if we lose tracking or just remain at their last known position. */
invalidate_pose(): void;

/** Changes the value for the given input. This method is called by a [XRInterface] implementation and should not be used directly. */
set_input(): void;

/** Sets the transform, linear velocity, angular velocity and tracking confidence for the given pose. This method is called by a [XRInterface] implementation and should not be used directly. */
set_pose(): void;

  connect<T extends SignalsOf<XRPositionalTracker>>(signal: T, method: SignalFunction<XRPositionalTracker[T]>): number;



/**
 * The hand this tracker is held in is unknown or not applicable.
 *
*/
static TRACKER_HAND_UNKNOWN: any;

/**
 * This tracker is the left hand controller.
 *
*/
static TRACKER_HAND_LEFT: any;

/**
 * This tracker is the right hand controller.
 *
*/
static TRACKER_HAND_RIGHT: any;


/**
 * Emitted when a button on this tracker is pressed. Note that many XR runtimes allow other inputs to be mapped to buttons.
 *
*/
$button_pressed: Signal<() => void>

/**
 * Emitted when a button on this tracker is released.
 *
*/
$button_released: Signal<() => void>

/**
 * Emitted when a trigger or similar input on this tracker changes value.
 *
*/
$input_float_changed: Signal<() => void>

/**
 * Emitted when a thumbstick or thumbpad on this tracker moves.
 *
*/
$input_vector2_changed: Signal<() => void>

/**
 * Emitted when the state of a pose tracked by this tracker changes.
 *
*/
$pose_changed: Signal<() => void>

/**
 * Emitted when a pose tracked by this tracker stops getting updated tracking data.
 *
*/
$pose_lost_tracking: Signal<() => void>

/**
 * Emitted when the profile of our tracker changes.
 *
*/
$profile_changed: Signal<() => void>

}

