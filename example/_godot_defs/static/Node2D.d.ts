
/**
 * A 2D game object, with a transform (position, rotation, and scale). All 2D nodes, including physics objects and sprites, inherit from Node2D. Use Node2D as a parent node to move, scale and rotate children in a 2D project. Also gives control of the node's render order.
 *
*/
declare class Node2D extends CanvasItem  {

  
/**
 * A 2D game object, with a transform (position, rotation, and scale). All 2D nodes, including physics objects and sprites, inherit from Node2D. Use Node2D as a parent node to move, scale and rotate children in a 2D project. Also gives control of the node's render order.
 *
*/
  new(): Node2D; 
  static "new"(): Node2D 


/** Global position. */
global_position: Vector2;

/** Global rotation in radians. */
global_rotation: float;

/** Helper property to access [member global_rotation] in degrees instead of radians. */
global_rotation_degrees: float;

/** Global scale. */
global_scale: Vector2;

/** Global skew in radians. */
global_skew: float;

/** Global [Transform2D]. */
global_transform: Transform2D;

/** Position, relative to the node's parent. */
position: Vector2;

/**
 * Rotation in radians, relative to the node's parent.
 *
 * **Note:** This property is edited in the inspector in degrees. If you want to use degrees in a script, use [member rotation_degrees].
 *
*/
rotation: float;

/** Helper property to access [member rotation] in degrees instead of radians. */
rotation_degrees: float;

/**
 * The node's scale. Unscaled value: `(1, 1)`.
 *
 * **Note:** Negative X scales in 2D are not decomposable from the transformation matrix. Due to the way scale is represented with transformation matrices in Godot, negative scales on the X axis will be changed to negative scales on the Y axis and a rotation of 180 degrees when decomposed.
 *
*/
scale: Vector2;

/**
 * Slants the node.
 *
 * **Note:** Skew is X axis only.
 *
*/
skew: float;

/** Local [Transform2D]. */
transform: Transform2D;

/** Multiplies the current scale by the [param ratio] vector. */
apply_scale(): void;

/**
 * Returns the angle between the node and the [param point] in radians.
 *
 * [url=https://raw.githubusercontent.com/godotengine/godot-docs/master/img/node2d_get_angle_to.png]Illustration of the returned angle.[/url]
 *
*/
get_angle_to(): float;

/** Returns the [Transform2D] relative to this node's parent. */
get_relative_transform_to_parent(): Transform2D;

/** Adds the [param offset] vector to the node's global position. */
global_translate(): void;

/** Rotates the node so it points towards the [param point], which is expected to use global coordinates. */
look_at(): void;

/** Applies a local translation on the node's X axis based on the [method Node._process]'s [param delta]. If [param scaled] is [code]false[/code], normalizes the movement. */
move_local_x(): void;

/** Applies a local translation on the node's Y axis based on the [method Node._process]'s [param delta]. If [param scaled] is [code]false[/code], normalizes the movement. */
move_local_y(): void;

/** Applies a rotation to the node, in radians, starting from its current rotation. */
rotate(): void;

/** Transforms the provided local position into a position in global coordinate space. The input is expected to be local relative to the [Node2D] it is called on. e.g. Applying this method to the positions of child nodes will correctly transform their positions into the global coordinate space, but applying it to a node's own position will give an incorrect result, as it will incorporate the node's own transformation into its global position. */
to_global(): Vector2;

/** Transforms the provided global position into a position in local coordinate space. The output will be local relative to the [Node2D] it is called on. e.g. It is appropriate for determining the positions of child nodes, but it is not appropriate for determining its own position relative to its parent. */
to_local(): Vector2;

/** Translates the node by the given [param offset] in local coordinates. */
translate(): void;

  connect<T extends SignalsOf<Node2D>>(signal: T, method: SignalFunction<Node2D[T]>): number;






}

