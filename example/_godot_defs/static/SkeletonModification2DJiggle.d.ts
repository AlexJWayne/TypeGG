
/**
 * This modification moves a series of bones, typically called a bone chain, towards a target. What makes this modification special is that it calculates the velocity and acceleration for each bone in the bone chain, and runs a very light physics-like calculation using the inputted values. This allows the bones to overshoot the target and "jiggle" around. It can be configured to act more like a spring, or sway around like cloth might.
 *
 * This modification is useful for adding additional motion to things like hair, the edges of clothing, and more. It has several settings to that allow control over how the joint moves when the target moves.
 *
 * **Note:** The Jiggle modifier has `jiggle_joints`, which are the data objects that hold the data for each joint in the Jiggle chain. This is different from than [Bone2D] nodes! Jiggle joints hold the data needed for each [Bone2D] in the bone chain used by the Jiggle modification.
 *
*/
declare class SkeletonModification2DJiggle extends SkeletonModification2D  {

  
/**
 * This modification moves a series of bones, typically called a bone chain, towards a target. What makes this modification special is that it calculates the velocity and acceleration for each bone in the bone chain, and runs a very light physics-like calculation using the inputted values. This allows the bones to overshoot the target and "jiggle" around. It can be configured to act more like a spring, or sway around like cloth might.
 *
 * This modification is useful for adding additional motion to things like hair, the edges of clothing, and more. It has several settings to that allow control over how the joint moves when the target moves.
 *
 * **Note:** The Jiggle modifier has `jiggle_joints`, which are the data objects that hold the data for each joint in the Jiggle chain. This is different from than [Bone2D] nodes! Jiggle joints hold the data needed for each [Bone2D] in the bone chain used by the Jiggle modification.
 *
*/
  new(): SkeletonModification2DJiggle; 
  static "new"(): SkeletonModification2DJiggle 


/** The default amount of damping applied to the Jiggle joints, if they are not overridden. Higher values lead to more of the calculated velocity being applied. */
damping: float;

/** The default amount of gravity applied to the Jiggle joints, if they are not overridden. */
gravity: Vector2;

/** The amount of Jiggle joints in the Jiggle modification. */
jiggle_data_chain_length: int;

/** The default amount of mass assigned to the Jiggle joints, if they are not overridden. Higher values lead to faster movements and more overshooting. */
mass: float;

/** The default amount of stiffness assigned to the Jiggle joints, if they are not overridden. Higher values act more like springs, quickly moving into the correct position. */
stiffness: float;

/** The NodePath to the node that is the target for the Jiggle modification. This node is what the Jiggle chain will attempt to rotate the bone chain to. */
target_nodepath: NodePathType;

/** Whether the gravity vector, [member gravity], should be applied to the Jiggle joints, assuming they are not overriding the default settings. */
use_gravity: boolean;

/** Returns the collision mask used by the Jiggle modifier when collisions are enabled. */
get_collision_mask(): int;

/** Returns the [Bone2D] node assigned to the Jiggle joint at [param joint_idx]. */
get_jiggle_joint_bone2d_node(): NodePathType;

/** Returns the index of the [Bone2D] node assigned to the Jiggle joint at [param joint_idx]. */
get_jiggle_joint_bone_index(): int;

/** Returns the amount of damping of the Jiggle joint at [param joint_idx]. */
get_jiggle_joint_damping(): float;

/** Returns a [Vector2] representing the amount of gravity the Jiggle joint at [param joint_idx] is influenced by. */
get_jiggle_joint_gravity(): Vector2;

/** Returns the amount of mass of the jiggle joint at [param joint_idx]. */
get_jiggle_joint_mass(): float;

/** Returns a boolean that indicates whether the joint at [param joint_idx] is overriding the default Jiggle joint data defined in the modification. */
get_jiggle_joint_override(): boolean;

/** Returns the stiffness of the Jiggle joint at [param joint_idx]. */
get_jiggle_joint_stiffness(): float;

/** Returns a boolean that indicates whether the joint at [param joint_idx] is using gravity or not. */
get_jiggle_joint_use_gravity(): boolean;

/** Returns whether the jiggle modifier is taking physics colliders into account when solving. */
get_use_colliders(): boolean;

/** Sets the collision mask that the Jiggle modifier will use when reacting to colliders, if the Jiggle modifier is set to take colliders into account. */
set_collision_mask(): void;

/** Sets the [Bone2D] node assigned to the Jiggle joint at [param joint_idx]. */
set_jiggle_joint_bone2d_node(): void;

/** Sets the bone index, [param bone_idx], of the Jiggle joint at [param joint_idx]. When possible, this will also update the [code]bone2d_node[/code] of the Jiggle joint based on data provided by the linked skeleton. */
set_jiggle_joint_bone_index(): void;

/** Sets the amount of damping of the Jiggle joint at [param joint_idx]. */
set_jiggle_joint_damping(): void;

/** Sets the gravity vector of the Jiggle joint at [param joint_idx]. */
set_jiggle_joint_gravity(): void;

/** Sets the of mass of the Jiggle joint at [param joint_idx]. */
set_jiggle_joint_mass(): void;

/** Sets whether the Jiggle joint at [param joint_idx] should override the default Jiggle joint settings. Setting this to [code]true[/code] will make the joint use its own settings rather than the default ones attached to the modification. */
set_jiggle_joint_override(): void;

/** Sets the of stiffness of the Jiggle joint at [param joint_idx]. */
set_jiggle_joint_stiffness(): void;

/** Sets whether the Jiggle joint at [param joint_idx] should use gravity. */
set_jiggle_joint_use_gravity(): void;

/** If [code]true[/code], the Jiggle modifier will take colliders into account, keeping them from entering into these collision objects. */
set_use_colliders(): void;

  connect<T extends SignalsOf<SkeletonModification2DJiggle>>(signal: T, method: SignalFunction<SkeletonModification2DJiggle[T]>): number;






}

