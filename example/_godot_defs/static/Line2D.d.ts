
/**
 * This node draws a 2D polyline, i.e. a shape consisting of several points connected by segments. [Line2D] is not a mathematical polyline, i.e. the segments are not infinitely thin. It is intended for rendering and it can be colored and optionally textured.
 *
 * **Warning:** Certain configurations may be impossible to draw nicely, such as very sharp angles. In these situations, the node uses fallback drawing logic to look decent.
 *
 * **Note:** [Line2D] is drawn using a 2D mesh.
 *
*/
declare class Line2D extends Node2D  {

  
/**
 * This node draws a 2D polyline, i.e. a shape consisting of several points connected by segments. [Line2D] is not a mathematical polyline, i.e. the segments are not infinitely thin. It is intended for rendering and it can be colored and optionally textured.
 *
 * **Warning:** Certain configurations may be impossible to draw nicely, such as very sharp angles. In these situations, the node uses fallback drawing logic to look decent.
 *
 * **Note:** [Line2D] is drawn using a 2D mesh.
 *
*/
  new(): Line2D; 
  static "new"(): Line2D 


/**
 * If `true`, the polyline's border will be anti-aliased.
 *
 * **Note:** [Line2D] is not accelerated by batching when being anti-aliased.
 *
*/
antialiased: boolean;

/** The style of the beginning of the polyline, if [member closed] is [code]false[/code]. Use [enum LineCapMode] constants. */
begin_cap_mode: int;

/**
 * If `true` and the polyline has more than 2 points, the last point and the first one will be connected by a segment.
 *
 * **Note:** The shape of the closing segment is not guaranteed to be seamless if a [member width_curve] is provided.
 *
 * **Note:** The joint between the closing segment and the first segment is drawn first and it samples the [member gradient] and the [member width_curve] at the beginning. This is an implementation detail that might change in a future version.
 *
*/
closed: boolean;

/** The color of the polyline. Will not be used if a gradient is set. */
default_color: Color;

/** The style of the end of the polyline, if [member closed] is [code]false[/code]. Use [enum LineCapMode] constants. */
end_cap_mode: int;

/** The gradient is drawn through the whole line from start to finish. The [member default_color] will not be used if this property is set. */
gradient: Gradient;

/** The style of the connections between segments of the polyline. Use [enum LineJointMode] constants. */
joint_mode: int;

/** The points of the polyline, interpreted in local 2D coordinates. Segments are drawn between the adjacent points in this array. */
points: PackedVector2Array;

/** The smoothness used for rounded joints and caps. Higher values result in smoother corners, but are more demanding to render and update. */
round_precision: int;

/** Determines the miter limit of the polyline. Normally, when [member joint_mode] is set to [constant LINE_JOINT_SHARP], sharp angles fall back to using the logic of [constant LINE_JOINT_BEVEL] joints to prevent very long miters. Higher values of this property mean that the fallback to a bevel joint will happen at sharper angles. */
sharp_limit: float;

/** The texture used for the polyline. Uses [member texture_mode] for drawing style. */
texture: Texture2D;

/** The style to render the [member texture] of the polyline. Use [enum LineTextureMode] constants. */
texture_mode: int;

/** The polyline's width. */
width: float;

/** The polyline's width curve. The width of the polyline over its length will be equivalent to the value of the width curve over its domain. */
width_curve: Curve;

/**
 * Adds a point with the specified [param position] relative to the polyline's own position. If no [param index] is provided, the new point will be added to the end of the points array.
 *
 * If [param index] is given, the new point is inserted before the existing point identified by index [param index]. The indices of the points after the new point get increased by 1. The provided [param index] must not exceed the number of existing points in the polyline. See [method get_point_count].
 *
*/
add_point(): void;

/** Removes all points from the polyline, making it empty. */
clear_points(): void;

/** Returns the number of points in the polyline. */
get_point_count(): int;

/** Returns the position of the point at index [param index]. */
get_point_position(): Vector2;

/** Removes the point at index [param index] from the polyline. */
remove_point(): void;

/** Overwrites the position of the point at the given [param index] with the supplied [param position]. */
set_point_position(): void;

  connect<T extends SignalsOf<Line2D>>(signal: T, method: SignalFunction<Line2D[T]>): number;



/**
 * Makes the polyline's joints pointy, connecting the sides of the two segments by extending them until they intersect. If the rotation of a joint is too big (based on [member sharp_limit]), the joint falls back to [constant LINE_JOINT_BEVEL] to prevent very long miters.
 *
*/
static LINE_JOINT_SHARP: any;

/**
 * Makes the polyline's joints bevelled/chamfered, connecting the sides of the two segments with a simple line.
 *
*/
static LINE_JOINT_BEVEL: any;

/**
 * Makes the polyline's joints rounded, connecting the sides of the two segments with an arc. The detail of this arc depends on [member round_precision].
 *
*/
static LINE_JOINT_ROUND: any;

/**
 * Draws no line cap.
 *
*/
static LINE_CAP_NONE: any;

/**
 * Draws the line cap as a box, slightly extending the first/last segment.
 *
*/
static LINE_CAP_BOX: any;

/**
 * Draws the line cap as a semicircle attached to the first/last segment.
 *
*/
static LINE_CAP_ROUND: any;

/**
 * Takes the left pixels of the texture and renders them over the whole polyline.
 *
*/
static LINE_TEXTURE_NONE: any;

/**
 * Tiles the texture over the polyline. [member CanvasItem.texture_repeat] of the [Line2D] node must be [constant CanvasItem.TEXTURE_REPEAT_ENABLED] or [constant CanvasItem.TEXTURE_REPEAT_MIRROR] for it to work properly.
 *
*/
static LINE_TEXTURE_TILE: any;

/**
 * Stretches the texture across the polyline. [member CanvasItem.texture_repeat] of the [Line2D] node must be [constant CanvasItem.TEXTURE_REPEAT_DISABLED] for best results.
 *
*/
static LINE_TEXTURE_STRETCH: any;



}

