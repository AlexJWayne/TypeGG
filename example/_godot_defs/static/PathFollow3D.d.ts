
/**
 * This node takes its parent [Path3D], and returns the coordinates of a point within it, given a distance from the first vertex.
 *
 * It is useful for making other nodes follow a path, without coding the movement pattern. For that, the nodes must be children of this node. The descendant nodes will then move accordingly when setting the [member progress] in this node.
 *
*/
declare class PathFollow3D extends Node3D  {

  
/**
 * This node takes its parent [Path3D], and returns the coordinates of a point within it, given a distance from the first vertex.
 *
 * It is useful for making other nodes follow a path, without coding the movement pattern. For that, the nodes must be children of this node. The descendant nodes will then move accordingly when setting the [member progress] in this node.
 *
*/
  new(): PathFollow3D; 
  static "new"(): PathFollow3D 


/**
 * If `true`, the position between two cached points is interpolated cubically, and linearly otherwise.
 *
 * The points along the [Curve3D] of the [Path3D] are precomputed before use, for faster calculations. The point at the requested offset is then calculated interpolating between two adjacent cached points. This may present a problem if the curve makes sharp turns, as the cached points may not follow the curve closely enough.
 *
 * There are two answers to this problem: either increase the number of cached points and increase memory consumption, or make a cubic interpolation between two points at the cost of (slightly) slower calculations.
 *
*/
cubic_interp: boolean;

/** The node's offset along the curve. */
h_offset: float;

/** If [code]true[/code], any offset outside the path's length will wrap around, instead of stopping at the ends. Use it for cyclic paths. */
loop: boolean;

/** The distance from the first vertex, measured in 3D units along the path. Changing this value sets this node's position to a point within the path. */
progress: float;

/** The distance from the first vertex, considering 0.0 as the first vertex and 1.0 as the last. This is just another way of expressing the progress within the path, as the progress supplied is multiplied internally by the path's length. */
progress_ratio: float;

/** Allows or forbids rotation on one or more axes, depending on the [enum RotationMode] constants being used. */
rotation_mode: int;

/** If [code]true[/code], the tilt property of [Curve3D] takes effect. */
tilt_enabled: boolean;

/** If [code]true[/code], the node moves on the travel path with orienting the +Z axis as forward. See also [constant Vector3.FORWARD] and [constant Vector3.MODEL_FRONT]. */
use_model_front: boolean;

/** The node's offset perpendicular to the curve. */
v_offset: float;

/** Correct the [param transform]. [param rotation_mode] implicitly specifies how posture (forward, up and sideway direction) is calculated. */
correct_posture(): Transform3D;

  connect<T extends SignalsOf<PathFollow3D>>(signal: T, method: SignalFunction<PathFollow3D[T]>): number;



/**
 * Forbids the PathFollow3D to rotate.
 *
*/
static ROTATION_NONE: any;

/**
 * Allows the PathFollow3D to rotate in the Y axis only.
 *
*/
static ROTATION_Y: any;

/**
 * Allows the PathFollow3D to rotate in both the X, and Y axes.
 *
*/
static ROTATION_XY: any;

/**
 * Allows the PathFollow3D to rotate in any axis.
 *
*/
static ROTATION_XYZ: any;

/**
 * Uses the up vector information in a [Curve3D] to enforce orientation. This rotation mode requires the [Path3D]'s [member Curve3D.up_vector_enabled] property to be set to `true`.
 *
*/
static ROTATION_ORIENTED: any;



}

