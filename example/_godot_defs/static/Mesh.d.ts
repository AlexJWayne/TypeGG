
/**
 * Mesh is a type of [Resource] that contains vertex array-based geometry, divided in **surfaces**. Each surface contains a completely separate array and a material used to draw it. Design wise, a mesh with multiple surfaces is preferred to a single surface, because objects created in 3D editing software commonly contain multiple materials.
 *
*/
declare class Mesh extends Resource  {

  
/**
 * Mesh is a type of [Resource] that contains vertex array-based geometry, divided in **surfaces**. Each surface contains a completely separate array and a material used to draw it. Design wise, a mesh with multiple surfaces is preferred to a single surface, because objects created in 3D editing software commonly contain multiple materials.
 *
*/
  new(): Mesh; 
  static "new"(): Mesh 


/** Sets a hint to be used for lightmap resolution. */
lightmap_size_hint: Vector2i;

/** Virtual method to override the [AABB] for a custom class extending [Mesh]. */
protected _get_aabb(): AABB;

/** Virtual method to override the number of blend shapes for a custom class extending [Mesh]. */
protected _get_blend_shape_count(): int;

/** Virtual method to override the retrieval of blend shape names for a custom class extending [Mesh]. */
protected _get_blend_shape_name(): StringName;

/** Virtual method to override the surface count for a custom class extending [Mesh]. */
protected _get_surface_count(): int;

/** Virtual method to override the names of blend shapes for a custom class extending [Mesh]. */
protected _set_blend_shape_name(): void;

/** Virtual method to override the surface array index length for a custom class extending [Mesh]. */
protected _surface_get_array_index_len(): int;

/** Virtual method to override the surface array length for a custom class extending [Mesh]. */
protected _surface_get_array_len(): int;

/** Virtual method to override the surface arrays for a custom class extending [Mesh]. */
protected _surface_get_arrays(): any[];

/** Virtual method to override the blend shape arrays for a custom class extending [Mesh]. */
protected _surface_get_blend_shape_arrays(): Array[];

/** Virtual method to override the surface format for a custom class extending [Mesh]. */
protected _surface_get_format(): int;

/** Virtual method to override the surface LODs for a custom class extending [Mesh]. */
protected _surface_get_lods(): Dictionary<any, any>;

/** Virtual method to override the surface material for a custom class extending [Mesh]. */
protected _surface_get_material(): Material;

/** Virtual method to override the surface primitive type for a custom class extending [Mesh]. */
protected _surface_get_primitive_type(): int;

/** Virtual method to override the setting of a [param material] at the given [param index] for a custom class extending [Mesh]. */
protected _surface_set_material(): void;

/**
 * Calculate a [ConvexPolygonShape3D] from the mesh.
 *
 * If [param clean] is `true` (default), duplicate and interior vertices are removed automatically. You can set it to `false` to make the process faster if not needed.
 *
 * If [param simplify] is `true`, the geometry can be further simplified to reduce the number of vertices. Disabled by default.
 *
*/
create_convex_shape(): ConvexPolygonShape3D;

/**
 * Calculate an outline mesh at a defined offset (margin) from the original mesh.
 *
 * **Note:** This method typically returns the vertices in reverse order (e.g. clockwise to counterclockwise).
 *
*/
create_outline(): Mesh;

/** Creates a placeholder version of this resource ([PlaceholderMesh]). */
create_placeholder(): Resource;

/** Calculate a [ConcavePolygonShape3D] from the mesh. */
create_trimesh_shape(): ConcavePolygonShape3D;

/** Generate a [TriangleMesh] from the mesh. Considers only surfaces using one of these primitive types: [constant PRIMITIVE_TRIANGLES], [constant PRIMITIVE_TRIANGLE_STRIP]. */
generate_triangle_mesh(): TriangleMesh;

/**
 * Returns the smallest [AABB] enclosing this mesh in local space. Not affected by `custom_aabb`.
 *
 * **Note:** This is only implemented for [ArrayMesh] and [PrimitiveMesh].
 *
*/
get_aabb(): AABB;

/** Returns all the vertices that make up the faces of the mesh. Each three vertices represent one triangle. */
get_faces(): PackedVector3Array;

/** Returns the number of surfaces that the [Mesh] holds. This is equivalent to [method MeshInstance3D.get_surface_override_material_count]. */
get_surface_count(): int;

/** Returns the arrays for the vertices, normals, UVs, etc. that make up the requested surface (see [method ArrayMesh.add_surface_from_arrays]). */
surface_get_arrays(): any[];

/** Returns the blend shape arrays for the requested surface. */
surface_get_blend_shape_arrays(): Array[];

/**
 * Returns a [Material] in a given surface. Surface is rendered using this material.
 *
 * **Note:** This returns the material within the [Mesh] resource, not the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties. To get the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties, use [method MeshInstance3D.get_surface_override_material] instead.
 *
*/
surface_get_material(): Material;

/**
 * Sets a [Material] for a given surface. Surface will be rendered using this material.
 *
 * **Note:** This assigns the material within the [Mesh] resource, not the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties. To set the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties, use [method MeshInstance3D.set_surface_override_material] instead.
 *
*/
surface_set_material(): void;

  connect<T extends SignalsOf<Mesh>>(signal: T, method: SignalFunction<Mesh[T]>): number;



/**
 * Render array as points (one vertex equals one point).
 *
*/
static PRIMITIVE_POINTS: any;

/**
 * Render array as lines (every two vertices a line is created).
 *
*/
static PRIMITIVE_LINES: any;

/**
 * Render array as line strip.
 *
*/
static PRIMITIVE_LINE_STRIP: any;

/**
 * Render array as triangles (every three vertices a triangle is created).
 *
*/
static PRIMITIVE_TRIANGLES: any;

/**
 * Render array as triangle strips.
 *
*/
static PRIMITIVE_TRIANGLE_STRIP: any;

/**
 * [PackedVector3Array], [PackedVector2Array], or [Array] of vertex positions.
 *
*/
static ARRAY_VERTEX: any;

/**
 * [PackedVector3Array] of vertex normals.
 *
*/
static ARRAY_NORMAL: any;

/**
 * [PackedFloat32Array] of vertex tangents. Each element in groups of 4 floats, first 3 floats determine the tangent, and the last the binormal direction as -1 or 1.
 *
*/
static ARRAY_TANGENT: any;

/**
 * [PackedColorArray] of vertex colors.
 *
*/
static ARRAY_COLOR: any;

/**
 * [PackedVector2Array] for UV coordinates.
 *
*/
static ARRAY_TEX_UV: any;

/**
 * [PackedVector2Array] for second UV coordinates.
 *
*/
static ARRAY_TEX_UV2: any;

/**
 * Contains custom color channel 0. [PackedByteArray] if `(format >> Mesh.ARRAY_FORMAT_CUSTOM0_SHIFT) & Mesh.ARRAY_FORMAT_CUSTOM_MASK` is [constant ARRAY_CUSTOM_RGBA8_UNORM], [constant ARRAY_CUSTOM_RGBA8_UNORM], [constant ARRAY_CUSTOM_RG_HALF] or [constant ARRAY_CUSTOM_RGBA_HALF]. [PackedFloat32Array] otherwise.
 *
*/
static ARRAY_CUSTOM0: any;

/**
 * Contains custom color channel 1. [PackedByteArray] if `(format >> Mesh.ARRAY_FORMAT_CUSTOM1_SHIFT) & Mesh.ARRAY_FORMAT_CUSTOM_MASK` is [constant ARRAY_CUSTOM_RGBA8_UNORM], [constant ARRAY_CUSTOM_RGBA8_UNORM], [constant ARRAY_CUSTOM_RG_HALF] or [constant ARRAY_CUSTOM_RGBA_HALF]. [PackedFloat32Array] otherwise.
 *
*/
static ARRAY_CUSTOM1: any;

/**
 * Contains custom color channel 2. [PackedByteArray] if `(format >> Mesh.ARRAY_FORMAT_CUSTOM2_SHIFT) & Mesh.ARRAY_FORMAT_CUSTOM_MASK` is [constant ARRAY_CUSTOM_RGBA8_UNORM], [constant ARRAY_CUSTOM_RGBA8_UNORM], [constant ARRAY_CUSTOM_RG_HALF] or [constant ARRAY_CUSTOM_RGBA_HALF]. [PackedFloat32Array] otherwise.
 *
*/
static ARRAY_CUSTOM2: any;

/**
 * Contains custom color channel 3. [PackedByteArray] if `(format >> Mesh.ARRAY_FORMAT_CUSTOM3_SHIFT) & Mesh.ARRAY_FORMAT_CUSTOM_MASK` is [constant ARRAY_CUSTOM_RGBA8_UNORM], [constant ARRAY_CUSTOM_RGBA8_UNORM], [constant ARRAY_CUSTOM_RG_HALF] or [constant ARRAY_CUSTOM_RGBA_HALF]. [PackedFloat32Array] otherwise.
 *
*/
static ARRAY_CUSTOM3: any;

/**
 * [PackedFloat32Array] or [PackedInt32Array] of bone indices. Contains either 4 or 8 numbers per vertex depending on the presence of the [constant ARRAY_FLAG_USE_8_BONE_WEIGHTS] flag.
 *
*/
static ARRAY_BONES: any;

/**
 * [PackedFloat32Array] or [PackedFloat64Array] of bone weights in the range `0.0` to `1.0` (inclusive). Contains either 4 or 8 numbers per vertex depending on the presence of the [constant ARRAY_FLAG_USE_8_BONE_WEIGHTS] flag.
 *
*/
static ARRAY_WEIGHTS: any;

/**
 * [PackedInt32Array] of integers used as indices referencing vertices, colors, normals, tangents, and textures. All of those arrays must have the same number of elements as the vertex array. No index can be beyond the vertex array size. When this index array is present, it puts the function into "index mode," where the index selects the **i**'th vertex, normal, tangent, color, UV, etc. This means if you want to have different normals or colors along an edge, you have to duplicate the vertices.
 *
 * For triangles, the index array is interpreted as triples, referring to the vertices of each triangle. For lines, the index array is in pairs indicating the start and end of each line.
 *
*/
static ARRAY_INDEX: any;

/**
 * Represents the size of the [enum ArrayType] enum.
 *
*/
static ARRAY_MAX: any;

/**
 * Indicates this custom channel contains unsigned normalized byte colors from 0 to 1, encoded as [PackedByteArray].
 *
*/
static ARRAY_CUSTOM_RGBA8_UNORM: any;

/**
 * Indicates this custom channel contains signed normalized byte colors from -1 to 1, encoded as [PackedByteArray].
 *
*/
static ARRAY_CUSTOM_RGBA8_SNORM: any;

/**
 * Indicates this custom channel contains half precision float colors, encoded as [PackedByteArray]. Only red and green channels are used.
 *
*/
static ARRAY_CUSTOM_RG_HALF: any;

/**
 * Indicates this custom channel contains half precision float colors, encoded as [PackedByteArray].
 *
*/
static ARRAY_CUSTOM_RGBA_HALF: any;

/**
 * Indicates this custom channel contains full float colors, in a [PackedFloat32Array]. Only the red channel is used.
 *
*/
static ARRAY_CUSTOM_R_FLOAT: any;

/**
 * Indicates this custom channel contains full float colors, in a [PackedFloat32Array]. Only red and green channels are used.
 *
*/
static ARRAY_CUSTOM_RG_FLOAT: any;

/**
 * Indicates this custom channel contains full float colors, in a [PackedFloat32Array]. Only red, green and blue channels are used.
 *
*/
static ARRAY_CUSTOM_RGB_FLOAT: any;

/**
 * Indicates this custom channel contains full float colors, in a [PackedFloat32Array].
 *
*/
static ARRAY_CUSTOM_RGBA_FLOAT: any;

/**
 * Represents the size of the [enum ArrayCustomFormat] enum.
 *
*/
static ARRAY_CUSTOM_MAX: any;

/**
 * Mesh array contains vertices. All meshes require a vertex array so this should always be present.
 *
*/
static ARRAY_FORMAT_VERTEX: any;

/**
 * Mesh array contains normals.
 *
*/
static ARRAY_FORMAT_NORMAL: any;

/**
 * Mesh array contains tangents.
 *
*/
static ARRAY_FORMAT_TANGENT: any;

/**
 * Mesh array contains colors.
 *
*/
static ARRAY_FORMAT_COLOR: any;

/**
 * Mesh array contains UVs.
 *
*/
static ARRAY_FORMAT_TEX_UV: any;

/**
 * Mesh array contains second UV.
 *
*/
static ARRAY_FORMAT_TEX_UV2: any;

/**
 * Mesh array contains custom channel index 0.
 *
*/
static ARRAY_FORMAT_CUSTOM0: any;

/**
 * Mesh array contains custom channel index 1.
 *
*/
static ARRAY_FORMAT_CUSTOM1: any;

/**
 * Mesh array contains custom channel index 2.
 *
*/
static ARRAY_FORMAT_CUSTOM2: any;

/**
 * Mesh array contains custom channel index 3.
 *
*/
static ARRAY_FORMAT_CUSTOM3: any;

/**
 * Mesh array contains bones.
 *
*/
static ARRAY_FORMAT_BONES: any;

/**
 * Mesh array contains bone weights.
 *
*/
static ARRAY_FORMAT_WEIGHTS: any;

/**
 * Mesh array uses indices.
 *
*/
static ARRAY_FORMAT_INDEX: any;

/**
 * Mask of mesh channels permitted in blend shapes.
 *
*/
static ARRAY_FORMAT_BLEND_SHAPE_MASK: any;

/**
 * Shift of first custom channel.
 *
*/
static ARRAY_FORMAT_CUSTOM_BASE: any;

/**
 * Number of format bits per custom channel. See [enum ArrayCustomFormat].
 *
*/
static ARRAY_FORMAT_CUSTOM_BITS: any;

/**
 * Amount to shift [enum ArrayCustomFormat] for custom channel index 0.
 *
*/
static ARRAY_FORMAT_CUSTOM0_SHIFT: any;

/**
 * Amount to shift [enum ArrayCustomFormat] for custom channel index 1.
 *
*/
static ARRAY_FORMAT_CUSTOM1_SHIFT: any;

/**
 * Amount to shift [enum ArrayCustomFormat] for custom channel index 2.
 *
*/
static ARRAY_FORMAT_CUSTOM2_SHIFT: any;

/**
 * Amount to shift [enum ArrayCustomFormat] for custom channel index 3.
 *
*/
static ARRAY_FORMAT_CUSTOM3_SHIFT: any;

/**
 * Mask of custom format bits per custom channel. Must be shifted by one of the SHIFT constants. See [enum ArrayCustomFormat].
 *
*/
static ARRAY_FORMAT_CUSTOM_MASK: any;

/**
 * Shift of first compress flag. Compress flags should be passed to [method ArrayMesh.add_surface_from_arrays] and [method SurfaceTool.commit].
 *
*/
static ARRAY_COMPRESS_FLAGS_BASE: any;

/**
 * Flag used to mark that the array contains 2D vertices.
 *
*/
static ARRAY_FLAG_USE_2D_VERTICES: any;

/**
 * Flag indices that the mesh data will use `GL_DYNAMIC_DRAW` on GLES. Unused on Vulkan.
 *
*/
static ARRAY_FLAG_USE_DYNAMIC_UPDATE: any;

/**
 * Flag used to mark that the mesh contains up to 8 bone influences per vertex. This flag indicates that [constant ARRAY_BONES] and [constant ARRAY_WEIGHTS] elements will have double length.
 *
*/
static ARRAY_FLAG_USE_8_BONE_WEIGHTS: any;

/**
 * Flag used to mark that the mesh intentionally contains no vertex array.
 *
*/
static ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY: any;

/**
 * Flag used to mark that a mesh is using compressed attributes (vertices, normals, tangents, UVs). When this form of compression is enabled, vertex positions will be packed into an RGBA16UNORM attribute and scaled in the vertex shader. The normal and tangent will be packed into an RG16UNORM representing an axis, and a 16-bit float stored in the A-channel of the vertex. UVs will use 16-bit normalized floats instead of full 32-bit signed floats. When using this compression mode you must use either vertices, normals, and tangents or only vertices. You cannot use normals without tangents. Importers will automatically enable this compression if they can.
 *
*/
static ARRAY_FLAG_COMPRESS_ATTRIBUTES: any;

/**
 * Blend shapes are normalized.
 *
*/
static BLEND_SHAPE_MODE_NORMALIZED: any;

/**
 * Blend shapes are relative to base weight.
 *
*/
static BLEND_SHAPE_MODE_RELATIVE: any;



}

