
/**
 * [Skeleton2D] parents a hierarchy of [Bone2D] nodes. It holds a reference to each [Bone2D]'s rest pose and acts as a single point of access to its bones.
 *
 * To set up different types of inverse kinematics for the given Skeleton2D, a [SkeletonModificationStack2D] should be created. The inverse kinematics be applied by increasing [member SkeletonModificationStack2D.modification_count] and creating the desired number of modifications.
 *
*/
declare class Skeleton2D extends Node2D  {

  
/**
 * [Skeleton2D] parents a hierarchy of [Bone2D] nodes. It holds a reference to each [Bone2D]'s rest pose and acts as a single point of access to its bones.
 *
 * To set up different types of inverse kinematics for the given Skeleton2D, a [SkeletonModificationStack2D] should be created. The inverse kinematics be applied by increasing [member SkeletonModificationStack2D.modification_count] and creating the desired number of modifications.
 *
*/
  new(): Skeleton2D; 
  static "new"(): Skeleton2D 



/** Executes all the modifications on the [SkeletonModificationStack2D], if the Skeleton2D has one assigned. */
execute_modifications(): void;

/** Returns a [Bone2D] from the node hierarchy parented by Skeleton2D. The object to return is identified by the parameter [param idx]. Bones are indexed by descending the node hierarchy from top to bottom, adding the children of each branch before moving to the next sibling. */
get_bone(): Bone2D;

/** Returns the number of [Bone2D] nodes in the node hierarchy parented by Skeleton2D. */
get_bone_count(): int;

/** Returns the local pose override transform for [param bone_idx]. */
get_bone_local_pose_override(): Transform2D;

/** Returns the [SkeletonModificationStack2D] attached to this skeleton, if one exists. */
get_modification_stack(): SkeletonModificationStack2D;

/** Returns the [RID] of a Skeleton2D instance. */
get_skeleton(): RID;

/**
 * Sets the local pose transform, [param override_pose], for the bone at [param bone_idx].
 *
 * [param strength] is the interpolation strength that will be used when applying the pose, and [param persistent] determines if the applied pose will remain.
 *
 * **Note:** The pose transform needs to be a local transform relative to the [Bone2D] node at [param bone_idx]!
 *
*/
set_bone_local_pose_override(): void;

/** Sets the [SkeletonModificationStack2D] attached to this skeleton. */
set_modification_stack(): void;

  connect<T extends SignalsOf<Skeleton2D>>(signal: T, method: SignalFunction<Skeleton2D[T]>): number;





/**
 * Emitted when the [Bone2D] setup attached to this skeletons changes. This is primarily used internally within the skeleton.
 *
*/
$bone_setup_changed: Signal<() => void>

}

