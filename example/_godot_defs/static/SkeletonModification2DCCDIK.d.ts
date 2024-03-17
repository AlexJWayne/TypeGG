
/**
 * This [SkeletonModification2D] uses an algorithm called Cyclic Coordinate Descent Inverse Kinematics, or CCDIK, to manipulate a chain of bones in a [Skeleton2D] so it reaches a defined target.
 *
 * CCDIK works by rotating a set of bones, typically called a "bone chain", on a single axis. Each bone is rotated to face the target from the tip (by default), which over a chain of bones allow it to rotate properly to reach the target. Because the bones only rotate on a single axis, CCDIK **can** look more robotic than other IK solvers.
 *
 * **Note:** The CCDIK modifier has `ccdik_joints`, which are the data objects that hold the data for each joint in the CCDIK chain. This is different from a bone! CCDIK joints hold the data needed for each bone in the bone chain used by CCDIK.
 *
 * CCDIK also fully supports angle constraints, allowing for more control over how a solution is met.
 *
*/
declare class SkeletonModification2DCCDIK extends SkeletonModification2D  {

  
/**
 * This [SkeletonModification2D] uses an algorithm called Cyclic Coordinate Descent Inverse Kinematics, or CCDIK, to manipulate a chain of bones in a [Skeleton2D] so it reaches a defined target.
 *
 * CCDIK works by rotating a set of bones, typically called a "bone chain", on a single axis. Each bone is rotated to face the target from the tip (by default), which over a chain of bones allow it to rotate properly to reach the target. Because the bones only rotate on a single axis, CCDIK **can** look more robotic than other IK solvers.
 *
 * **Note:** The CCDIK modifier has `ccdik_joints`, which are the data objects that hold the data for each joint in the CCDIK chain. This is different from a bone! CCDIK joints hold the data needed for each bone in the bone chain used by CCDIK.
 *
 * CCDIK also fully supports angle constraints, allowing for more control over how a solution is met.
 *
*/
  new(): SkeletonModification2DCCDIK; 
  static "new"(): SkeletonModification2DCCDIK 


/** The number of CCDIK joints in the CCDIK modification. */
ccdik_data_chain_length: int;

/** The NodePath to the node that is the target for the CCDIK modification. This node is what the CCDIK chain will attempt to rotate the bone chain to. */
target_nodepath: NodePathType;

/** The end position of the CCDIK chain. Typically, this should be a child of a [Bone2D] node attached to the final [Bone2D] in the CCDIK chain. */
tip_nodepath: NodePathType;

/** Returns the [Bone2D] node assigned to the CCDIK joint at [param joint_idx]. */
get_ccdik_joint_bone2d_node(): NodePathType;

/** Returns the index of the [Bone2D] node assigned to the CCDIK joint at [param joint_idx]. */
get_ccdik_joint_bone_index(): int;

/** Returns whether the CCDIK joint at [param joint_idx] uses an inverted joint constraint. See [method set_ccdik_joint_constraint_angle_invert] for details. */
get_ccdik_joint_constraint_angle_invert(): boolean;

/** Returns the maximum angle constraint for the joint at [param joint_idx]. */
get_ccdik_joint_constraint_angle_max(): float;

/** Returns the minimum angle constraint for the joint at [param joint_idx]. */
get_ccdik_joint_constraint_angle_min(): float;

/** Returns whether angle constraints on the CCDIK joint at [param joint_idx] are enabled. */
get_ccdik_joint_enable_constraint(): boolean;

/** Returns whether the joint at [param joint_idx] is set to rotate from the joint, [code]true[/code], or to rotate from the tip, [code]false[/code]. The default is to rotate from the tip. */
get_ccdik_joint_rotate_from_joint(): boolean;

/** Sets the [Bone2D] node assigned to the CCDIK joint at [param joint_idx]. */
set_ccdik_joint_bone2d_node(): void;

/** Sets the bone index, [param bone_idx], of the CCDIK joint at [param joint_idx]. When possible, this will also update the [code]bone2d_node[/code] of the CCDIK joint based on data provided by the linked skeleton. */
set_ccdik_joint_bone_index(): void;

/**
 * Sets whether the CCDIK joint at [param joint_idx] uses an inverted joint constraint.
 *
 * An inverted joint constraint only constraints the CCDIK joint to the angles **outside of** the inputted minimum and maximum angles. For this reason, it is referred to as an inverted joint constraint, as it constraints the joint to the outside of the inputted values.
 *
*/
set_ccdik_joint_constraint_angle_invert(): void;

/** Sets the maximum angle constraint for the joint at [param joint_idx]. */
set_ccdik_joint_constraint_angle_max(): void;

/** Sets the minimum angle constraint for the joint at [param joint_idx]. */
set_ccdik_joint_constraint_angle_min(): void;

/** Determines whether angle constraints on the CCDIK joint at [param joint_idx] are enabled. When [code]true[/code], constraints will be enabled and taken into account when solving. */
set_ccdik_joint_enable_constraint(): void;

/** Sets whether the joint at [param joint_idx] is set to rotate from the joint, [code]true[/code], or to rotate from the tip, [code]false[/code]. */
set_ccdik_joint_rotate_from_joint(): void;

  connect<T extends SignalsOf<SkeletonModification2DCCDIK>>(signal: T, method: SignalFunction<SkeletonModification2DCCDIK[T]>): number;






}

