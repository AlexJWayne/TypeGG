
/**
 * This resource is used in [EditorScenePostImport]. Some parameters are referring to bones in [Skeleton3D], [Skin], [Animation], and some other nodes are rewritten based on the parameters of [SkeletonProfile].
 *
 * **Note:** These parameters need to be set only when creating a custom profile. In [SkeletonProfileHumanoid], they are defined internally as read-only values.
 *
*/
declare class SkeletonProfile extends Resource  {

  
/**
 * This resource is used in [EditorScenePostImport]. Some parameters are referring to bones in [Skeleton3D], [Skin], [Animation], and some other nodes are rewritten based on the parameters of [SkeletonProfile].
 *
 * **Note:** These parameters need to be set only when creating a custom profile. In [SkeletonProfileHumanoid], they are defined internally as read-only values.
 *
*/
  new(): SkeletonProfile; 
  static "new"(): SkeletonProfile 


/**
 * The amount of bones in retargeting section's [BoneMap] editor. For example, [SkeletonProfileHumanoid] has 56 bones.
 *
 * The size of elements in [BoneMap] updates when changing this property in it's assigned [SkeletonProfile].
 *
*/
bone_size: int;

/**
 * The amount of groups of bones in retargeting section's [BoneMap] editor. For example, [SkeletonProfileHumanoid] has 4 groups.
 *
 * This property exists to separate the bone list into several sections in the editor.
 *
*/
group_size: int;

/** A bone name that will be used as the root bone in [AnimationTree]. This should be the bone of the parent of hips that exists at the world origin. */
root_bone: StringName;

/** A bone name which will use model's height as the coefficient for normalization. For example, [SkeletonProfileHumanoid] defines it as [code]Hips[/code]. */
scale_base_bone: StringName;

/** Returns the bone index that matches [param bone_name] as its name. */
find_bone(): int;

/**
 * Returns the name of the bone at [param bone_idx] that will be the key name in the [BoneMap].
 *
 * In the retargeting process, the returned bone name is the bone name of the target skeleton.
 *
*/
get_bone_name(): StringName;

/** Returns the name of the bone which is the parent to the bone at [param bone_idx]. The result is empty if the bone has no parent. */
get_bone_parent(): StringName;

/** Returns the name of the bone which is the tail of the bone at [param bone_idx]. */
get_bone_tail(): StringName;

/** Returns the group of the bone at [param bone_idx]. */
get_group(): StringName;

/** Returns the name of the group at [param group_idx] that will be the drawing group in the [BoneMap] editor. */
get_group_name(): StringName;

/**
 * Returns the offset of the bone at [param bone_idx] that will be the button position in the [BoneMap] editor.
 *
 * This is the offset with origin at the top left corner of the square.
 *
*/
get_handle_offset(): Vector2;

/** Returns the reference pose transform for bone [param bone_idx]. */
get_reference_pose(): Transform3D;

/** Returns the tail direction of the bone at [param bone_idx]. */
get_tail_direction(): int;

/** Returns the texture of the group at [param group_idx] that will be the drawing group background image in the [BoneMap] editor. */
get_texture(): Texture2D;

/**
 * Sets the name of the bone at [param bone_idx] that will be the key name in the [BoneMap].
 *
 * In the retargeting process, the setting bone name is the bone name of the target skeleton.
 *
*/
set_bone_name(): void;

/** Sets the bone with name [param bone_parent] as the parent of the bone at [param bone_idx]. If an empty string is passed, then the bone has no parent. */
set_bone_parent(): void;

/** Sets the bone with name [param bone_tail] as the tail of the bone at [param bone_idx]. */
set_bone_tail(): void;

/** Sets the group of the bone at [param bone_idx]. */
set_group(): void;

/** Sets the name of the group at [param group_idx] that will be the drawing group in the [BoneMap] editor. */
set_group_name(): void;

/**
 * Sets the offset of the bone at [param bone_idx] that will be the button position in the [BoneMap] editor.
 *
 * This is the offset with origin at the top left corner of the square.
 *
*/
set_handle_offset(): void;

/** Sets the reference pose transform for bone [param bone_idx]. */
set_reference_pose(): void;

/**
 * Sets the tail direction of the bone at [param bone_idx].
 *
 * **Note:** This only specifies the method of calculation. The actual coordinates required should be stored in an external skeleton, so the calculation itself needs to be done externally.
 *
*/
set_tail_direction(): void;

/** Sets the texture of the group at [param group_idx] that will be the drawing group background image in the [BoneMap] editor. */
set_texture(): void;

  connect<T extends SignalsOf<SkeletonProfile>>(signal: T, method: SignalFunction<SkeletonProfile[T]>): number;



/**
 * Direction to the average coordinates of bone children.
 *
*/
static TAIL_DIRECTION_AVERAGE_CHILDREN: any;

/**
 * Direction to the coordinates of specified bone child.
 *
*/
static TAIL_DIRECTION_SPECIFIC_CHILD: any;

/**
 * Direction is not calculated.
 *
*/
static TAIL_DIRECTION_END: any;


/**
 * This signal is emitted when change the value in profile. This is used to update key name in the [BoneMap] and to redraw the [BoneMap] editor.
 *
 * **Note:** This signal is not connected directly to editor to simplify the reference, instead it is passed on to editor through the [BoneMap].
 *
*/
$profile_updated: Signal<() => void>

}

