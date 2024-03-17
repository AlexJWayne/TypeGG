
/**
 * This [SkeletonModification2D] rotates a bone to look a target. This is extremely helpful for moving character's head to look at the player, rotating a turret to look at a target, or any other case where you want to make a bone rotate towards something quickly and easily.
 *
*/
declare class SkeletonModification2DLookAt extends SkeletonModification2D  {

  
/**
 * This [SkeletonModification2D] rotates a bone to look a target. This is extremely helpful for moving character's head to look at the player, rotating a turret to look at a target, or any other case where you want to make a bone rotate towards something quickly and easily.
 *
*/
  new(): SkeletonModification2DLookAt; 
  static "new"(): SkeletonModification2DLookAt 


/** The [Bone2D] node that the modification will operate on. */
bone2d_node: NodePathType;

/** The index of the [Bone2D] node that the modification will operate on. */
bone_index: int;

/** The NodePath to the node that is the target for the LookAt modification. This node is what the modification will rotate the [Bone2D] to. */
target_nodepath: NodePathType;

/** Returns the amount of additional rotation that is applied after the LookAt modification executes. */
get_additional_rotation(): float;

/** Returns whether the constraints to this modification are inverted or not. */
get_constraint_angle_invert(): boolean;

/** Returns the constraint's maximum allowed angle. */
get_constraint_angle_max(): float;

/** Returns the constraint's minimum allowed angle. */
get_constraint_angle_min(): float;

/** Returns [code]true[/code] if the LookAt modification is using constraints. */
get_enable_constraint(): boolean;

/** Sets the amount of additional rotation that is to be applied after executing the modification. This allows for offsetting the results by the inputted rotation amount. */
set_additional_rotation(): void;

/**
 * When `true`, the modification will use an inverted joint constraint.
 *
 * An inverted joint constraint only constraints the [Bone2D] to the angles **outside of** the inputted minimum and maximum angles. For this reason, it is referred to as an inverted joint constraint, as it constraints the joint to the outside of the inputted values.
 *
*/
set_constraint_angle_invert(): void;

/** Sets the constraint's maximum allowed angle. */
set_constraint_angle_max(): void;

/** Sets the constraint's minimum allowed angle. */
set_constraint_angle_min(): void;

/** Sets whether this modification will use constraints or not. When [code]true[/code], constraints will be applied when solving the LookAt modification. */
set_enable_constraint(): void;

  connect<T extends SignalsOf<SkeletonModification2DLookAt>>(signal: T, method: SignalFunction<SkeletonModification2DLookAt[T]>): number;






}

