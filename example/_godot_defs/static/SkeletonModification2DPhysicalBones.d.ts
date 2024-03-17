
/**
 * This modification takes the transforms of [PhysicalBone2D] nodes and applies them to [Bone2D] nodes. This allows the [Bone2D] nodes to react to physics thanks to the linked [PhysicalBone2D] nodes.
 *
 * Experimental. Physical bones may be changed in the future to perform the position update of [Bone2D] on their own.
 *
*/
declare class SkeletonModification2DPhysicalBones extends SkeletonModification2D  {

  
/**
 * This modification takes the transforms of [PhysicalBone2D] nodes and applies them to [Bone2D] nodes. This allows the [Bone2D] nodes to react to physics thanks to the linked [PhysicalBone2D] nodes.
 *
 * Experimental. Physical bones may be changed in the future to perform the position update of [Bone2D] on their own.
 *
*/
  new(): SkeletonModification2DPhysicalBones; 
  static "new"(): SkeletonModification2DPhysicalBones 


/** The number of [PhysicalBone2D] nodes linked in this modification. */
physical_bone_chain_length: int;

/** Empties the list of [PhysicalBone2D] nodes and populates it with all [PhysicalBone2D] nodes that are children of the [Skeleton2D]. */
fetch_physical_bones(): void;

/** Returns the [PhysicalBone2D] node at [param joint_idx]. */
get_physical_bone_node(): NodePathType;

/**
 * Sets the [PhysicalBone2D] node at [param joint_idx].
 *
 * **Note:** This is just the index used for this modification, not the bone index used in the [Skeleton2D].
 *
*/
set_physical_bone_node(): void;

/**
 * Tell the [PhysicalBone2D] nodes to start simulating and interacting with the physics world.
 *
 * Optionally, an array of bone names can be passed to this function, and that will cause only [PhysicalBone2D] nodes with those names to start simulating.
 *
*/
start_simulation(): void;

/**
 * Tell the [PhysicalBone2D] nodes to stop simulating and interacting with the physics world.
 *
 * Optionally, an array of bone names can be passed to this function, and that will cause only [PhysicalBone2D] nodes with those names to stop simulating.
 *
*/
stop_simulation(): void;

  connect<T extends SignalsOf<SkeletonModification2DPhysicalBones>>(signal: T, method: SignalFunction<SkeletonModification2DPhysicalBones[T]>): number;






}

