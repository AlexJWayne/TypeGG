
/**
 * This node can be bound to a specific pose of a [XRPositionalTracker] and will automatically have its [member Node3D.transform] updated by the [XRServer]. Nodes of this type must be added as children of the [XROrigin3D] node.
 *
*/
declare class XRNode3D extends Node3D  {

  
/**
 * This node can be bound to a specific pose of a [XRPositionalTracker] and will automatically have its [member Node3D.transform] updated by the [XRServer]. Nodes of this type must be added as children of the [XROrigin3D] node.
 *
*/
  new(): XRNode3D; 
  static "new"(): XRNode3D 


/**
 * The name of the pose we're bound to. Which poses a tracker supports is not known during design time.
 *
 * Godot defines number of standard pose names such as `aim` and `grip` but other may be configured within a given [XRInterface].
 *
*/
pose: StringName;

/**
 * The name of the tracker we're bound to. Which trackers are available is not known during design time.
 *
 * Godot defines a number of standard trackers such as `left_hand` and `right_hand` but others may be configured within a given [XRInterface].
 *
*/
tracker: StringName;

/** Returns [code]true[/code] if the [member tracker] has current tracking data for the [member pose] being tracked. */
get_has_tracking_data(): boolean;

/** Returns [code]true[/code] if the [member tracker] has been registered and the [member pose] is being tracked. */
get_is_active(): boolean;

/** Returns the [XRPose] containing the current state of the pose being tracked. This gives access to additional properties of this pose. */
get_pose(): XRPose;

/**
 * Triggers a haptic pulse on a device associated with this interface.
 *
 * [param action_name] is the name of the action for this pulse.
 *
*/
trigger_haptic_pulse(): void;

  connect<T extends SignalsOf<XRNode3D>>(signal: T, method: SignalFunction<XRNode3D[T]>): number;





/**
 * Emitted when the [member tracker] starts or stops receiving updated tracking data for the [member pose] being tracked. The [param tracking] argument indicates whether the tracker is getting updated tracking data.
 *
*/
$tracking_changed: Signal<() => void>

}

