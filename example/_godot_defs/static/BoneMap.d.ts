
/**
 * This class contains a dictionary that uses a list of bone names in [SkeletonProfile] as key names.
 *
 * By assigning the actual [Skeleton3D] bone name as the key value, it maps the [Skeleton3D] to the [SkeletonProfile].
 *
*/
declare class BoneMap extends Resource  {

  
/**
 * This class contains a dictionary that uses a list of bone names in [SkeletonProfile] as key names.
 *
 * By assigning the actual [Skeleton3D] bone name as the key value, it maps the [Skeleton3D] to the [SkeletonProfile].
 *
*/
  new(): BoneMap; 
  static "new"(): BoneMap 


/** A [SkeletonProfile] of the mapping target. Key names in the [BoneMap] are synchronized with it. */
profile: SkeletonProfile;

/**
 * Returns a profile bone name having [param skeleton_bone_name]. If not found, an empty [StringName] will be returned.
 *
 * In the retargeting process, the returned bone name is the bone name of the target skeleton.
 *
*/
find_profile_bone_name(): StringName;

/**
 * Returns a skeleton bone name is mapped to [param profile_bone_name].
 *
 * In the retargeting process, the returned bone name is the bone name of the source skeleton.
 *
*/
get_skeleton_bone_name(): StringName;

/**
 * Maps a skeleton bone name to [param profile_bone_name].
 *
 * In the retargeting process, the setting bone name is the bone name of the source skeleton.
 *
*/
set_skeleton_bone_name(): void;

  connect<T extends SignalsOf<BoneMap>>(signal: T, method: SignalFunction<BoneMap[T]>): number;





/**
 * This signal is emitted when change the key value in the [BoneMap]. This is used to validate mapping and to update [BoneMap] editor.
 *
*/
$bone_map_updated: Signal<() => void>

/**
 * This signal is emitted when change the value in profile or change the reference of profile. This is used to update key names in the [BoneMap] and to redraw the [BoneMap] editor.
 *
*/
$profile_updated: Signal<() => void>

}

