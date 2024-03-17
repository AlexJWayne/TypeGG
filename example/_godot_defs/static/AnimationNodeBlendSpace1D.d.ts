
/**
 * A resource used by [AnimationNodeBlendTree].
 *
 * [AnimationNodeBlendSpace1D] represents a virtual axis on which any type of [AnimationRootNode]s can be added using [method add_blend_point]. Outputs the linear blend of the two [AnimationRootNode]s adjacent to the current value.
 *
 * You can set the extents of the axis with [member min_space] and [member max_space].
 *
*/
declare class AnimationNodeBlendSpace1D extends AnimationRootNode  {

  
/**
 * A resource used by [AnimationNodeBlendTree].
 *
 * [AnimationNodeBlendSpace1D] represents a virtual axis on which any type of [AnimationRootNode]s can be added using [method add_blend_point]. Outputs the linear blend of the two [AnimationRootNode]s adjacent to the current value.
 *
 * You can set the extents of the axis with [member min_space] and [member max_space].
 *
*/
  new(): AnimationNodeBlendSpace1D; 
  static "new"(): AnimationNodeBlendSpace1D 


/** Controls the interpolation between animations. See [enum BlendMode] constants. */
blend_mode: int;

/** The blend space's axis's upper limit for the points' position. See [method add_blend_point]. */
max_space: float;

/** The blend space's axis's lower limit for the points' position. See [method add_blend_point]. */
min_space: float;

/** Position increment to snap to when moving a point on the axis. */
snap: float;

/**
 * If `false`, the blended animations' frame are stopped when the blend value is `0`.
 *
 * If `true`, forcing the blended animations to advance frame.
 *
*/
sync: boolean;

/** Label of the virtual axis of the blend space. */
value_label: string;

/** Adds a new point that represents a [param node] on the virtual axis at a given position set by [param pos]. You can insert it at a specific index using the [param at_index] argument. If you use the default value for [param at_index], the point is inserted at the end of the blend points array. */
add_blend_point(): void;

/** Returns the number of points on the blend axis. */
get_blend_point_count(): int;

/** Returns the [AnimationNode] referenced by the point at index [param point]. */
get_blend_point_node(): AnimationRootNode;

/** Returns the position of the point at index [param point]. */
get_blend_point_position(): float;

/** Removes the point at index [param point] from the blend axis. */
remove_blend_point(): void;

/** Changes the [AnimationNode] referenced by the point at index [param point]. */
set_blend_point_node(): void;

/** Updates the position of the point at index [param point] on the blend axis. */
set_blend_point_position(): void;

  connect<T extends SignalsOf<AnimationNodeBlendSpace1D>>(signal: T, method: SignalFunction<AnimationNodeBlendSpace1D[T]>): number;



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



}

