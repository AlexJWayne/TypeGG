
/**
 * This node selects a bone in a [Skeleton3D] and attaches to it. This means that the [BoneAttachment3D] node will either dynamically copy or override the 3D transform of the selected bone.
 *
*/
declare class BoneAttachment3D extends Node3D  {

  
/**
 * This node selects a bone in a [Skeleton3D] and attaches to it. This means that the [BoneAttachment3D] node will either dynamically copy or override the 3D transform of the selected bone.
 *
*/
  new(): BoneAttachment3D; 
  static "new"(): BoneAttachment3D 


/** The index of the attached bone. */
bone_idx: int;

/** The name of the attached bone. */
bone_name: string;

/** Whether the BoneAttachment3D node will override the bone pose of the bone it is attached to. When set to [code]true[/code], the BoneAttachment3D node can change the pose of the bone. When set to [code]false[/code], the BoneAttachment3D will always be set to the bone's transform. */
override_pose: boolean;

/** Returns the [NodePath] to the external [Skeleton3D] node, if one has been set. */
get_external_skeleton(): NodePathType;

/** Returns whether the BoneAttachment3D node is using an external [Skeleton3D] rather than attempting to use its parent node as the [Skeleton3D]. */
get_use_external_skeleton(): boolean;

/** A function that is called automatically when the [Skeleton3D] the BoneAttachment3D node is using has a bone that has changed its pose. This function is where the BoneAttachment3D node updates its position so it is correctly bound when it is [i]not[/i] set to override the bone pose. */
on_bone_pose_update(): void;

/** Sets the [NodePath] to the external skeleton that the BoneAttachment3D node should use. See [method set_use_external_skeleton] to enable the external [Skeleton3D] node. */
set_external_skeleton(): void;

/** Sets whether the BoneAttachment3D node will use an external [Skeleton3D] node rather than attempting to use its parent node as the [Skeleton3D]. When set to [code]true[/code], the BoneAttachment3D node will use the external [Skeleton3D] node set in [method set_external_skeleton]. */
set_use_external_skeleton(): void;

  connect<T extends SignalsOf<BoneAttachment3D>>(signal: T, method: SignalFunction<BoneAttachment3D[T]>): number;






}

