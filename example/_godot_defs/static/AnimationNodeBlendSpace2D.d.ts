
/**
 * A resource used by [AnimationNodeBlendTree].
 *
 * [AnimationNodeBlendSpace1D] represents a virtual 2D space on which [AnimationRootNode]s are placed. Outputs the linear blend of the three adjacent animations using a [Vector2] weight. Adjacent in this context means the three [AnimationRootNode]s making up the triangle that contains the current value.
 *
 * You can add vertices to the blend space with [method add_blend_point] and automatically triangulate it by setting [member auto_triangles] to `true`. Otherwise, use [method add_triangle] and [method remove_triangle] to triangulate the blend space by hand.
 *
*/
declare class AnimationNodeBlendSpace2D extends AnimationRootNode  {

  
/**
 * A resource used by [AnimationNodeBlendTree].
 *
 * [AnimationNodeBlendSpace1D] represents a virtual 2D space on which [AnimationRootNode]s are placed. Outputs the linear blend of the three adjacent animations using a [Vector2] weight. Adjacent in this context means the three [AnimationRootNode]s making up the triangle that contains the current value.
 *
 * You can add vertices to the blend space with [method add_blend_point] and automatically triangulate it by setting [member auto_triangles] to `true`. Otherwise, use [method add_triangle] and [method remove_triangle] to triangulate the blend space by hand.
 *
*/
  new(): AnimationNodeBlendSpace2D; 
  static "new"(): AnimationNodeBlendSpace2D 


/** If [code]true[/code], the blend space is triangulated automatically. The mesh updates every time you add or remove points with [method add_blend_point] and [method remove_blend_point]. */
auto_triangles: boolean;

/** Controls the interpolation between animations. See [enum BlendMode] constants. */
blend_mode: int;

/** The blend space's X and Y axes' upper limit for the points' position. See [method add_blend_point]. */
max_space: Vector2;

/** The blend space's X and Y axes' lower limit for the points' position. See [method add_blend_point]. */
min_space: Vector2;

/** Position increment to snap to when moving a point. */
snap: Vector2;

/**
 * If `false`, the blended animations' frame are stopped when the blend value is `0`.
 *
 * If `true`, forcing the blended animations to advance frame.
 *
*/
sync: boolean;

/** Name of the blend space's X axis. */
x_label: string;

/** Name of the blend space's Y axis. */
y_label: string;

/** Adds a new point that represents a [param node] at the position set by [param pos]. You can insert it at a specific index using the [param at_index] argument. If you use the default value for [param at_index], the point is inserted at the end of the blend points array. */
add_blend_point(): void;

/** Creates a new triangle using three points [param x], [param y], and [param z]. Triangles can overlap. You can insert the triangle at a specific index using the [param at_index] argument. If you use the default value for [param at_index], the point is inserted at the end of the blend points array. */
add_triangle(): void;

/** Returns the number of points in the blend space. */
get_blend_point_count(): int;

/** Returns the [AnimationRootNode] referenced by the point at index [param point]. */
get_blend_point_node(): AnimationRootNode;

/** Returns the position of the point at index [param point]. */
get_blend_point_position(): Vector2;

/** Returns the number of triangles in the blend space. */
get_triangle_count(): int;

/** Returns the position of the point at index [param point] in the triangle of index [param triangle]. */
get_triangle_point(): int;

/** Removes the point at index [param point] from the blend space. */
remove_blend_point(): void;

/** Removes the triangle at index [param triangle] from the blend space. */
remove_triangle(): void;

/** Changes the [AnimationNode] referenced by the point at index [param point]. */
set_blend_point_node(): void;

/** Updates the position of the point at index [param point] on the blend axis. */
set_blend_point_position(): void;

  connect<T extends SignalsOf<AnimationNodeBlendSpace2D>>(signal: T, method: SignalFunction<AnimationNodeBlendSpace2D[T]>): number;



/**
 * The interpolation between animations is linear.
 *
*/
static BLEND_MODE_INTERPOLATED: any;

/**
 * The blend space plays the animation of the animation node which blending position is closest to. Useful for frame-by-frame 2D animations.
 *
*/
static BLEND_MODE_DISCRETE: any;

/**
 * Similar to [constant BLEND_MODE_DISCRETE], but starts the new animation at the last animation's playback position.
 *
*/
static BLEND_MODE_DISCRETE_CARRY: any;


/**
 * Emitted every time the blend space's triangles are created, removed, or when one of their vertices changes position.
 *
*/
$triangles_updated: Signal<() => void>

}

