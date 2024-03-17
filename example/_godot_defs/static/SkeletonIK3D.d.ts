
/**
 * SkeletonIK3D is used to rotate all bones of a [Skeleton3D] bone chain a way that places the end bone at a desired 3D position. A typical scenario for IK in games is to place a character's feet on the ground or a character's hands on a currently held object. SkeletonIK uses FabrikInverseKinematic internally to solve the bone chain and applies the results to the [Skeleton3D] `bones_global_pose_override` property for all affected bones in the chain. If fully applied, this overwrites any bone transform from [Animation]s or bone custom poses set by users. The applied amount can be controlled with the [member interpolation] property.
 *
 * @example 
 * 
 * # Apply IK effect automatically on every new frame (not the current)
 * skeleton_ik_node.start()
 * # Apply IK effect only on the current frame
 * skeleton_ik_node.start(true)
 * # Stop IK effect and reset bones_global_pose_override on Skeleton
 * skeleton_ik_node.stop()
 * # Apply full IK effect
 * skeleton_ik_node.set_interpolation(1.0)
 * # Apply half IK effect
 * skeleton_ik_node.set_interpolation(0.5)
 * # Apply zero IK effect (a value at or below 0.01 also removes bones_global_pose_override on Skeleton)
 * skeleton_ik_node.set_interpolation(0.0)
 * @summary 
 * 
 *
 * **Deprecated.** This class is deprecated, and might be removed in a future release.
 *
*/
declare class SkeletonIK3D extends Node  {

  
/**
 * SkeletonIK3D is used to rotate all bones of a [Skeleton3D] bone chain a way that places the end bone at a desired 3D position. A typical scenario for IK in games is to place a character's feet on the ground or a character's hands on a currently held object. SkeletonIK uses FabrikInverseKinematic internally to solve the bone chain and applies the results to the [Skeleton3D] `bones_global_pose_override` property for all affected bones in the chain. If fully applied, this overwrites any bone transform from [Animation]s or bone custom poses set by users. The applied amount can be controlled with the [member interpolation] property.
 *
 * @example 
 * 
 * # Apply IK effect automatically on every new frame (not the current)
 * skeleton_ik_node.start()
 * # Apply IK effect only on the current frame
 * skeleton_ik_node.start(true)
 * # Stop IK effect and reset bones_global_pose_override on Skeleton
 * skeleton_ik_node.stop()
 * # Apply full IK effect
 * skeleton_ik_node.set_interpolation(1.0)
 * # Apply half IK effect
 * skeleton_ik_node.set_interpolation(0.5)
 * # Apply zero IK effect (a value at or below 0.01 also removes bones_global_pose_override on Skeleton)
 * skeleton_ik_node.set_interpolation(0.0)
 * @summary 
 * 
 *
 * **Deprecated.** This class is deprecated, and might be removed in a future release.
 *
*/
  new(): SkeletonIK3D; 
  static "new"(): SkeletonIK3D 


/** Interpolation value for how much the IK results are applied to the current skeleton bone chain. A value of [code]1.0[/code] will overwrite all skeleton bone transforms completely while a value of [code]0.0[/code] will visually disable the SkeletonIK. A value at or below [code]0.01[/code] also calls [method Skeleton3D.clear_bones_global_pose_override]. */
interpolation: float;

/** Secondary target position (first is [member target] property or [member target_node]) for the IK chain. Use magnet position (pole target) to control the bending of the IK chain. Only works if the bone chain has more than 2 bones. The middle chain bone position will be linearly interpolated with the magnet position. */
magnet: Vector3;

/** Number of iteration loops used by the IK solver to produce more accurate (and elegant) bone chain results. */
max_iterations: int;

/** The minimum distance between bone and goal target. If the distance is below this value, the IK solver stops further iterations. */
min_distance: float;

/** If [code]true[/code] overwrites the rotation of the tip bone with the rotation of the [member target] (or [member target_node] if defined). */
override_tip_basis: boolean;

/** The name of the current root bone, the first bone in the IK chain. */
root_bone: StringName;

/** First target of the IK chain where the tip bone is placed and, if [member override_tip_basis] is [code]true[/code], how the tip bone is rotated. If a [member target_node] path is available the nodes transform is used instead and this property is ignored. */
target: Transform3D;

/** Target node [NodePath] for the IK chain. If available, the node's current [Transform3D] is used instead of the [member target] property. */
target_node: NodePathType;

/** The name of the current tip bone, the last bone in the IK chain placed at the [member target] transform (or [member target_node] if defined). */
tip_bone: StringName;

/** If [code]true[/code], instructs the IK solver to consider the secondary magnet target (pole target) when calculating the bone chain. Use the magnet position (pole target) to control the bending of the IK chain. */
use_magnet: boolean;

/** Returns the parent [Skeleton3D] Node that was present when SkeletonIK entered the [SceneTree]. Returns null if the parent node was not a [Skeleton3D] Node when SkeletonIK3D entered the [SceneTree]. */
get_parent_skeleton(): Skeleton3D;

/** Returns [code]true[/code] if SkeletonIK is applying IK effects on continues frames to the [Skeleton3D] bones. Returns [code]false[/code] if SkeletonIK is stopped or [method start] was used with the [code]one_time[/code] parameter set to [code]true[/code]. */
is_running(): boolean;

/** Starts applying IK effects on each frame to the [Skeleton3D] bones but will only take effect starting on the next frame. If [param one_time] is [code]true[/code], this will take effect immediately but also reset on the next frame. */
start(): void;

/** Stops applying IK effects on each frame to the [Skeleton3D] bones and also calls [method Skeleton3D.clear_bones_global_pose_override] to remove existing overrides on all bones. */
stop(): void;

  connect<T extends SignalsOf<SkeletonIK3D>>(signal: T, method: SignalFunction<SkeletonIK3D[T]>): number;






}

