
/**
 * A Polygon2D is defined by a set of points. Each point is connected to the next, with the final point being connected to the first, resulting in a closed polygon. Polygon2Ds can be filled with color (solid or gradient) or filled with a given texture.
 *
*/
declare class Polygon2D extends Node2D  {

  
/**
 * A Polygon2D is defined by a set of points. Each point is connected to the next, with the final point being connected to the first, resulting in a closed polygon. Polygon2Ds can be filled with color (solid or gradient) or filled with a given texture.
 *
*/
  new(): Polygon2D; 
  static "new"(): Polygon2D 


/** If [code]true[/code], polygon edges will be anti-aliased. */
antialiased: boolean;

/** Internal list of [Bone2D] nodes used by the assigned [member skeleton]. Edited using the Polygon2D editor ("UV" button on the top toolbar). */
bones: any[];

/** The polygon's fill color. If [member texture] is set, it will be multiplied by this color. It will also be the default color for vertices not set in [member vertex_colors]. */
color: Color;

/** Number of internal vertices, used for UV mapping. */
internal_vertex_count: int;

/** Added padding applied to the bounding box when [member invert_enabled] is set to [code]true[/code]. Setting this value too small may result in a "Bad Polygon" error. */
invert_border: float;

/** If [code]true[/code], the polygon will be inverted, containing the area outside the defined points and extending to the [member invert_border]. */
invert_enabled: boolean;

/** The offset applied to each vertex. */
offset: Vector2;

/**
 * The polygon's list of vertices. The final point will be connected to the first.
 *
 * **Note:** This returns a copy of the [PackedVector2Array] rather than a reference.
 *
*/
polygon: PackedVector2Array;

/** The list of polygons, in case more than one is being represented. Every individual polygon is stored as a [PackedInt32Array] where each [int] is an index to a point in [member polygon]. If empty, this property will be ignored, and the resulting single polygon will be composed of all points in [member polygon], using the order they are stored in. */
polygons: any[];

/** Path to a [Skeleton2D] node used for skeleton-based deformations of this polygon. If empty or invalid, skeletal deformations will not be used. */
skeleton: NodePathType;

/** The polygon's fill texture. Use [member uv] to set texture coordinates. */
texture: Texture2D;

/** Amount to offset the polygon's [member texture]. If set to [code]Vector2(0, 0)[/code], the texture's origin (its top-left corner) will be placed at the polygon's position. */
texture_offset: Vector2;

/** The texture's rotation in radians. */
texture_rotation: float;

/** Amount to multiply the [member uv] coordinates when using [member texture]. Larger values make the texture smaller, and vice versa. */
texture_scale: Vector2;

/** Texture coordinates for each vertex of the polygon. There should be one UV value per polygon vertex. If there are fewer, undefined vertices will use [code]Vector2(0, 0)[/code]. */
uv: PackedVector2Array;

/** Color for each vertex. Colors are interpolated between vertices, resulting in smooth gradients. There should be one per polygon vertex. If there are fewer, undefined vertices will use [member color]. */
vertex_colors: PackedColorArray;

/** Adds a bone with the specified [param path] and [param weights]. */
add_bone(): void;

/** Removes all bones from this [Polygon2D]. */
clear_bones(): void;

/** Removes the specified bone from this [Polygon2D]. */
erase_bone(): void;

/** Returns the number of bones in this [Polygon2D]. */
get_bone_count(): int;

/** Returns the path to the node associated with the specified bone. */
get_bone_path(): NodePathType;

/** Returns the weight values of the specified bone. */
get_bone_weights(): PackedFloat32Array;

/** Sets the path to the node associated with the specified bone. */
set_bone_path(): void;

/** Sets the weight values for the specified bone. */
set_bone_weights(): void;

  connect<T extends SignalsOf<Polygon2D>>(signal: T, method: SignalFunction<Polygon2D[T]>): number;






}

