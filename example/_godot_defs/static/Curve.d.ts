
/**
 * This resource describes a mathematical curve by defining a set of points and tangents at each point. By default, it ranges between `0` and `1` on the Y axis and positions points relative to the `0.5` Y position.
 *
 * See also [Gradient] which is designed for color interpolation. See also [Curve2D] and [Curve3D].
 *
*/
declare class Curve extends Resource  {

  
/**
 * This resource describes a mathematical curve by defining a set of points and tangents at each point. By default, it ranges between `0` and `1` on the Y axis and positions points relative to the `0.5` Y position.
 *
 * See also [Gradient] which is designed for color interpolation. See also [Curve2D] and [Curve3D].
 *
*/
  new(): Curve; 
  static "new"(): Curve 


/** The number of points to include in the baked (i.e. cached) curve data. */
bake_resolution: int;

/** The maximum value the curve can reach. */
max_value: float;

/** The minimum value the curve can reach. */
min_value: float;

/** The number of points describing the curve. */
point_count: int;

/** Adds a point to the curve. For each side, if the [code]*_mode[/code] is [constant TANGENT_LINEAR], the [code]*_tangent[/code] angle (in degrees) uses the slope of the curve halfway to the adjacent point. Allows custom assignments to the [code]*_tangent[/code] angle if [code]*_mode[/code] is set to [constant TANGENT_FREE]. */
add_point(): int;

/** Recomputes the baked cache of points for the curve. */
bake(): void;

/** Removes duplicate points, i.e. points that are less than 0.00001 units (engine epsilon value) away from their neighbor on the curve. */
clean_dupes(): void;

/** Removes all points from the curve. */
clear_points(): void;

/** Returns the left [enum TangentMode] for the point at [param index]. */
get_point_left_mode(): int;

/** Returns the left tangent angle (in degrees) for the point at [param index]. */
get_point_left_tangent(): float;

/** Returns the curve coordinates for the point at [param index]. */
get_point_position(): Vector2;

/** Returns the right [enum TangentMode] for the point at [param index]. */
get_point_right_mode(): int;

/** Returns the right tangent angle (in degrees) for the point at [param index]. */
get_point_right_tangent(): float;

/** Removes the point at [param index] from the curve. */
remove_point(): void;

/** Returns the Y value for the point that would exist at the X position [param offset] along the curve. */
sample(): float;

/** Returns the Y value for the point that would exist at the X position [param offset] along the curve using the baked cache. Bakes the curve's points if not already baked. */
sample_baked(): float;

/** Sets the left [enum TangentMode] for the point at [param index] to [param mode]. */
set_point_left_mode(): void;

/** Sets the left tangent angle for the point at [param index] to [param tangent]. */
set_point_left_tangent(): void;

/** Sets the offset from [code]0.5[/code]. */
set_point_offset(): int;

/** Sets the right [enum TangentMode] for the point at [param index] to [param mode]. */
set_point_right_mode(): void;

/** Sets the right tangent angle for the point at [param index] to [param tangent]. */
set_point_right_tangent(): void;

/** Assigns the vertical position [param y] to the point at [param index]. */
set_point_value(): void;

  connect<T extends SignalsOf<Curve>>(signal: T, method: SignalFunction<Curve[T]>): number;



/**
 * The tangent on this side of the point is user-defined.
 *
*/
static TANGENT_FREE: any;

/**
 * The curve calculates the tangent on this side of the point as the slope halfway towards the adjacent point.
 *
*/
static TANGENT_LINEAR: any;

/**
 * The total number of available tangent modes.
 *
*/
static TANGENT_MODE_COUNT: any;


/**
 * Emitted when [member max_value] or [member min_value] is changed.
 *
*/
$range_changed: Signal<() => void>

}

