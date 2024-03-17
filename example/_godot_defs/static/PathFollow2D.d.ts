
/**
 * This node takes its parent [Path2D], and returns the coordinates of a point within it, given a distance from the first vertex.
 *
 * It is useful for making other nodes follow a path, without coding the movement pattern. For that, the nodes must be children of this node. The descendant nodes will then move accordingly when setting the [member progress] in this node.
 *
*/
declare class PathFollow2D extends Node2D  {

  
/**
 * This node takes its parent [Path2D], and returns the coordinates of a point within it, given a distance from the first vertex.
 *
 * It is useful for making other nodes follow a path, without coding the movement pattern. For that, the nodes must be children of this node. The descendant nodes will then move accordingly when setting the [member progress] in this node.
 *
*/
  new(): PathFollow2D; 
  static "new"(): PathFollow2D 


/**
 * If `true`, the position between two cached points is interpolated cubically, and linearly otherwise.
 *
 * The points along the [Curve2D] of the [Path2D] are precomputed before use, for faster calculations. The point at the requested offset is then calculated interpolating between two adjacent cached points. This may present a problem if the curve makes sharp turns, as the cached points may not follow the curve closely enough.
 *
 * There are two answers to this problem: either increase the number of cached points and increase memory consumption, or make a cubic interpolation between two points at the cost of (slightly) slower calculations.
 *
*/
cubic_interp: boolean;

/** The node's offset along the curve. */
h_offset: float;

/** If [code]true[/code], any offset outside the path's length will wrap around, instead of stopping at the ends. Use it for cyclic paths. */
loop: boolean;

/** The distance along the path, in pixels. Changing this value sets this node's position to a point within the path. */
progress: float;

/** The distance along the path as a number in the range 0.0 (for the first vertex) to 1.0 (for the last). This is just another way of expressing the progress within the path, as the offset supplied is multiplied internally by the path's length. */
progress_ratio: float;

/** If [code]true[/code], this node rotates to follow the path, with the +X direction facing forward on the path. */
rotates: boolean;

/** The node's offset perpendicular to the curve. */
v_offset: float;



  connect<T extends SignalsOf<PathFollow2D>>(signal: T, method: SignalFunction<PathFollow2D[T]>): number;






}

