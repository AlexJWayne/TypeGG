
/**
 * This resource is used by the Skeleton and holds a stack of [SkeletonModification2D]s.
 *
 * This controls the order of the modifications and how they are applied. Modification order is especially important for full-body IK setups, as you need to execute the modifications in the correct order to get the desired results. For example, you want to execute a modification on the spine **before** the arms on a humanoid skeleton.
 *
 * This resource also controls how strongly all of the modifications are applied to the [Skeleton2D].
 *
*/
declare class SkeletonModificationStack2D extends Resource  {

  
/**
 * This resource is used by the Skeleton and holds a stack of [SkeletonModification2D]s.
 *
 * This controls the order of the modifications and how they are applied. Modification order is especially important for full-body IK setups, as you need to execute the modifications in the correct order to get the desired results. For example, you want to execute a modification on the spine **before** the arms on a humanoid skeleton.
 *
 * This resource also controls how strongly all of the modifications are applied to the [Skeleton2D].
 *
*/
  new(): SkeletonModificationStack2D; 
  static "new"(): SkeletonModificationStack2D 


/** If [code]true[/code], the modification's in the stack will be called. This is handled automatically through the [Skeleton2D] node. */
enabled: boolean;

/** The number of modifications in the stack. */
modification_count: int;

/** The interpolation strength of the modifications in stack. A value of [code]0[/code] will make it where the modifications are not applied, a strength of [code]0.5[/code] will be half applied, and a strength of [code]1[/code] will allow the modifications to be fully applied and override the [Skeleton2D] [Bone2D] poses. */
strength: float;

/** Adds the passed-in [SkeletonModification2D] to the stack. */
add_modification(): void;

/** Deletes the [SkeletonModification2D] at the index position [param mod_idx], if it exists. */
delete_modification(): void;

/** Enables all [SkeletonModification2D]s in the stack. */
enable_all_modifications(): void;

/**
 * Executes all of the [SkeletonModification2D]s in the stack that use the same execution mode as the passed-in [param execution_mode], starting from index `0` to [member modification_count].
 *
 * **Note:** The order of the modifications can matter depending on the modifications. For example, modifications on a spine should operate before modifications on the arms in order to get proper results.
 *
*/
execute(): void;

/** Returns a boolean that indicates whether the modification stack is setup and can execute. */
get_is_setup(): boolean;

/** Returns the [SkeletonModification2D] at the passed-in index, [param mod_idx]. */
get_modification(): SkeletonModification2D;

/** Returns the [Skeleton2D] node that the SkeletonModificationStack2D is bound to. */
get_skeleton(): Skeleton2D;

/** Sets the modification at [param mod_idx] to the passed-in modification, [param modification]. */
set_modification(): void;

/** Sets up the modification stack so it can execute. This function should be called by [Skeleton2D] and shouldn't be manually called unless you know what you are doing. */
setup(): void;

  connect<T extends SignalsOf<SkeletonModificationStack2D>>(signal: T, method: SignalFunction<SkeletonModificationStack2D[T]>): number;






}

