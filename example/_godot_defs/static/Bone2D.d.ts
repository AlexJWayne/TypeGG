
/**
 * A hierarchy of [Bone2D]s can be bound to a [Skeleton2D] to control and animate other [Node2D] nodes.
 *
 * You can use [Bone2D] and [Skeleton2D] nodes to animate 2D meshes created with the [Polygon2D] UV editor.
 *
 * Each bone has a [member rest] transform that you can reset to with [method apply_rest]. These rest poses are relative to the bone's parent.
 *
 * If in the editor, you can set the rest pose of an entire skeleton using a menu option, from the code, you need to iterate over the bones to set their individual rest poses.
 *
*/
declare class Bone2D extends Node2D  {

  
/**
 * A hierarchy of [Bone2D]s can be bound to a [Skeleton2D] to control and animate other [Node2D] nodes.
 *
 * You can use [Bone2D] and [Skeleton2D] nodes to animate 2D meshes created with the [Polygon2D] UV editor.
 *
 * Each bone has a [member rest] transform that you can reset to with [method apply_rest]. These rest poses are relative to the bone's parent.
 *
 * If in the editor, you can set the rest pose of an entire skeleton using a menu option, from the code, you need to iterate over the bones to set their individual rest poses.
 *
*/
  new(): Bone2D; 
  static "new"(): Bone2D 


/** Rest transform of the bone. You can reset the node's transforms to this value using [method apply_rest]. */
rest: Transform2D;

/** Stores the node's current transforms in [member rest]. */
apply_rest(): void;

/** Returns whether this [Bone2D] is going to autocalculate its length and bone angle using its first [Bone2D] child node, if one exists. If there are no [Bone2D] children, then it cannot autocalculate these values and will print a warning. */
get_autocalculate_length_and_angle(): boolean;

/**
 * Returns the angle of the bone in the [Bone2D].
 *
 * **Note:** This is different from the [Bone2D]'s rotation. The bone's angle is the rotation of the bone shown by the gizmo, which is unaffected by the [Bone2D]'s [member Node2D.transform].
 *
*/
get_bone_angle(): float;

/** Returns the node's index as part of the entire skeleton. See [Skeleton2D]. */
get_index_in_skeleton(): int;

/** Returns the length of the bone in the [Bone2D] node. */
get_length(): float;

/** Returns the node's [member rest] [Transform2D] if it doesn't have a parent, or its rest pose relative to its parent. */
get_skeleton_rest(): Transform2D;

/** When set to [code]true[/code], the [Bone2D] node will attempt to automatically calculate the bone angle and length using the first child [Bone2D] node, if one exists. If none exist, the [Bone2D] cannot automatically calculate these values and will print a warning. */
set_autocalculate_length_and_angle(): void;

/**
 * Sets the bone angle for the [Bone2D]. This is typically set to the rotation from the [Bone2D] to a child [Bone2D] node.
 *
 * **Note:** This is different from the [Bone2D]'s rotation. The bone's angle is the rotation of the bone shown by the gizmo, which is unaffected by the [Bone2D]'s [member Node2D.transform].
 *
*/
set_bone_angle(): void;

/** Sets the length of the bone in the [Bone2D]. */
set_length(): void;

  connect<T extends SignalsOf<Bone2D>>(signal: T, method: SignalFunction<Bone2D[T]>): number;






}

