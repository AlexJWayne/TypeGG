
/**
 * [Skeleton3D] provides an interface for managing a hierarchy of bones, including pose, rest and animation (see [Animation]). It can also use ragdoll physics.
 *
 * The overall transform of a bone with respect to the skeleton is determined by bone pose. Bone rest defines the initial transform of the bone pose.
 *
 * Note that "global pose" below refers to the overall transform of the bone with respect to skeleton, so it is not the actual global/world transform of the bone.
 *
 * To setup different types of inverse kinematics, consider using [SkeletonIK3D], or add a custom IK implementation in [method Node._process] as a child node.
 *
*/
declare class Skeleton3D extends Node3D  {

  
/**
 * [Skeleton3D] provides an interface for managing a hierarchy of bones, including pose, rest and animation (see [Animation]). It can also use ragdoll physics.
 *
 * The overall transform of a bone with respect to the skeleton is determined by bone pose. Bone rest defines the initial transform of the bone pose.
 *
 * Note that "global pose" below refers to the overall transform of the bone with respect to skeleton, so it is not the actual global/world transform of the bone.
 *
 * To setup different types of inverse kinematics, consider using [SkeletonIK3D], or add a custom IK implementation in [method Node._process] as a child node.
 *
*/
  new(): Skeleton3D; 
  static "new"(): Skeleton3D 



/**
 * Multiplies the 3D position track animation.
 *
 * **Note:** Unless this value is `1.0`, the key value in animation will not match the actual position value.
 *
*/
motion_scale: float;


/** Adds a bone, with name [param name]. [method get_bone_count] will become the bone index. */
add_bone(): void;

/** Clear all the bones in this skeleton. */
clear_bones(): void;

/** Removes the global pose override on all bones in the skeleton. */
clear_bones_global_pose_override(): void;

/** No documentation provided. */
create_skin_from_rest_transforms(): Skin;

/** Returns the bone index that matches [param name] as its name. */
find_bone(): int;

/**
 * Force updates the bone transforms/poses for all bones in the skeleton.
 *
 * **Deprecated.** Do not use.
 *
*/
force_update_all_bone_transforms(): void;

/** Force updates the bone transform for the bone at [param bone_idx] and all of its children. */
force_update_bone_child_transform(): void;

/** Returns an array containing the bone indexes of all the children node of the passed in bone, [param bone_idx]. */
get_bone_children(): PackedInt32Array;

/** Returns the number of bones in the skeleton. */
get_bone_count(): int;

/** Returns the overall transform of the specified bone, with respect to the skeleton. Being relative to the skeleton frame, this is not the actual "global" transform of the bone. */
get_bone_global_pose(): Transform3D;

/** Returns the overall transform of the specified bone, with respect to the skeleton, but without any global pose overrides. Being relative to the skeleton frame, this is not the actual "global" transform of the bone. */
get_bone_global_pose_no_override(): Transform3D;

/** Returns the global pose override transform for [param bone_idx]. */
get_bone_global_pose_override(): Transform3D;

/** Returns the global rest transform for [param bone_idx]. */
get_bone_global_rest(): Transform3D;

/** Returns the name of the bone at index [param bone_idx]. */
get_bone_name(): string;

/**
 * Returns the bone index which is the parent of the bone at [param bone_idx]. If -1, then bone has no parent.
 *
 * **Note:** The parent bone returned will always be less than [param bone_idx].
 *
*/
get_bone_parent(): int;

/** Returns the pose transform of the specified bone. */
get_bone_pose(): Transform3D;

/** Returns the pose position of the bone at [param bone_idx]. The returned [Vector3] is in the local coordinate space of the [Skeleton3D] node. */
get_bone_pose_position(): Vector3;

/** Returns the pose rotation of the bone at [param bone_idx]. The returned [Quaternion] is local to the bone with respect to the rotation of any parent bones. */
get_bone_pose_rotation(): Quaternion;

/** Returns the pose scale of the bone at [param bone_idx]. */
get_bone_pose_scale(): Vector3;

/** Returns the rest transform for a bone [param bone_idx]. */
get_bone_rest(): Transform3D;

/** Returns an array with all of the bones that are parentless. Another way to look at this is that it returns the indexes of all the bones that are not dependent or modified by other bones in the Skeleton. */
get_parentless_bones(): PackedInt32Array;

/**
 * Returns the number of times the bone hierarchy has changed within this skeleton, including renames.
 *
 * The Skeleton version is not serialized: only use within a single instance of Skeleton3D.
 *
 * Use for invalidating caches in IK solvers and other nodes which process bones.
 *
*/
get_version(): int;

/** Returns whether the bone pose for the bone at [param bone_idx] is enabled. */
is_bone_enabled(): boolean;

/** Returns all bones in the skeleton to their rest poses. */
localize_rests(): void;

/**
 * Adds a collision exception to the physical bone.
 *
 * Works just like the [RigidBody3D] node.
 *
*/
physical_bones_add_collision_exception(): void;

/**
 * Removes a collision exception to the physical bone.
 *
 * Works just like the [RigidBody3D] node.
 *
*/
physical_bones_remove_collision_exception(): void;

/**
 * Tells the [PhysicalBone3D] nodes in the Skeleton to start simulating and reacting to the physics world.
 *
 * Optionally, a list of bone names can be passed-in, allowing only the passed-in bones to be simulated.
 *
*/
physical_bones_start_simulation(): void;

/** Tells the [PhysicalBone3D] nodes in the Skeleton to stop simulating. */
physical_bones_stop_simulation(): void;

/** Binds the given Skin to the Skeleton. */
register_skin(): SkinReference;

/** Sets the bone pose to rest for [param bone_idx]. */
reset_bone_pose(): void;

/** Sets all bone poses to rests. */
reset_bone_poses(): void;

/** Disables the pose for the bone at [param bone_idx] if [code]false[/code], enables the bone pose if [code]true[/code]. */
set_bone_enabled(): void;

/**
 * Sets the global pose transform, [param pose], for the bone at [param bone_idx].
 *
 * [param amount] is the interpolation strength that will be used when applying the pose, and [param persistent] determines if the applied pose will remain.
 *
 * **Note:** The pose transform needs to be a global pose! To convert a world transform from a [Node3D] to a global bone pose, multiply the [method Transform3D.affine_inverse] of the node's [member Node3D.global_transform] by the desired world transform.
 *
*/
set_bone_global_pose_override(): void;

/** No documentation provided. */
set_bone_name(): void;

/**
 * Sets the bone index [param parent_idx] as the parent of the bone at [param bone_idx]. If -1, then bone has no parent.
 *
 * **Note:** [param parent_idx] must be less than [param bone_idx].
 *
*/
set_bone_parent(): void;

/** Sets the pose position of the bone at [param bone_idx] to [param position]. [param position] is a [Vector3] describing a position local to the [Skeleton3D] node. */
set_bone_pose_position(): void;

/** Sets the pose rotation of the bone at [param bone_idx] to [param rotation]. [param rotation] is a [Quaternion] describing a rotation in the bone's local coordinate space with respect to the rotation of any parent bones. */
set_bone_pose_rotation(): void;

/** Sets the pose scale of the bone at [param bone_idx] to [param scale]. */
set_bone_pose_scale(): void;

/** Sets the rest transform for bone [param bone_idx]. */
set_bone_rest(): void;

/** Unparents the bone at [param bone_idx] and sets its rest position to that of its parent prior to being reset. */
unparent_bone_and_rest(): void;

  connect<T extends SignalsOf<Skeleton3D>>(signal: T, method: SignalFunction<Skeleton3D[T]>): number;



/** No documentation provided. */
static NOTIFICATION_UPDATE_SKELETON: any;


/**
*/
$bone_enabled_changed: Signal<() => void>

/**
 * This signal is emitted when one of the bones in the Skeleton3D node have changed their pose. This is used to inform nodes that rely on bone positions that one of the bones in the Skeleton3D have changed their transform/pose.
 *
*/
$bone_pose_changed: Signal<() => void>

/**
*/
$pose_updated: Signal<() => void>

/**
*/
$show_rest_only_changed: Signal<() => void>

}

