
/**
 * ImporterMesh is a type of [Resource] analogous to [ArrayMesh]. It contains vertex array-based geometry, divided in **surfaces**. Each surface contains a completely separate array and a material used to draw it. Design wise, a mesh with multiple surfaces is preferred to a single surface, because objects created in 3D editing software commonly contain multiple materials.
 *
 * Unlike its runtime counterpart, [ImporterMesh] contains mesh data before various import steps, such as lod and shadow mesh generation, have taken place. Modify surface data by calling [method clear], followed by [method add_surface] for each surface.
 *
*/
declare class ImporterMesh extends Resource  {

  
/**
 * ImporterMesh is a type of [Resource] analogous to [ArrayMesh]. It contains vertex array-based geometry, divided in **surfaces**. Each surface contains a completely separate array and a material used to draw it. Design wise, a mesh with multiple surfaces is preferred to a single surface, because objects created in 3D editing software commonly contain multiple materials.
 *
 * Unlike its runtime counterpart, [ImporterMesh] contains mesh data before various import steps, such as lod and shadow mesh generation, have taken place. Modify surface data by calling [method clear], followed by [method add_surface] for each surface.
 *
*/
  new(): ImporterMesh; 
  static "new"(): ImporterMesh 



/** Adds name for a blend shape that will be added with [method add_surface]. Must be called before surface is added. */
add_blend_shape(): void;

/**
 * Creates a new surface. [method Mesh.get_surface_count] will become the `surf_idx` for this new surface.
 *
 * Surfaces are created to be rendered using a [param primitive], which may be any of the values defined in [enum Mesh.PrimitiveType].
 *
 * The [param arrays] argument is an array of arrays. Each of the [constant Mesh.ARRAY_MAX] elements contains an array with some of the mesh data for this surface as described by the corresponding member of [enum Mesh.ArrayType] or `null` if it is not used by the surface. For example, `arrays[0]` is the array of vertices. That first vertex sub-array is always required; the others are optional. Adding an index array puts this surface into "index mode" where the vertex and other arrays become the sources of data and the index array defines the vertex order. All sub-arrays must have the same length as the vertex array (or be an exact multiple of the vertex array's length, when multiple elements of a sub-array correspond to a single vertex) or be empty, except for [constant Mesh.ARRAY_INDEX] if it is used.
 *
 * The [param blend_shapes] argument is an array of vertex data for each blend shape. Each element is an array of the same structure as [param arrays], but [constant Mesh.ARRAY_VERTEX], [constant Mesh.ARRAY_NORMAL], and [constant Mesh.ARRAY_TANGENT] are set if and only if they are set in [param arrays] and all other entries are `null`.
 *
 * The [param lods] argument is a dictionary with [float] keys and [PackedInt32Array] values. Each entry in the dictionary represents a LOD level of the surface, where the value is the [constant Mesh.ARRAY_INDEX] array to use for the LOD level and the key is roughly proportional to the distance at which the LOD stats being used. I.e., increasing the key of a LOD also increases the distance that the objects has to be from the camera before the LOD is used.
 *
 * The [param flags] argument is the bitwise or of, as required: One value of [enum Mesh.ArrayCustomFormat] left shifted by `ARRAY_FORMAT_CUSTOMn_SHIFT` for each custom channel in use, [constant Mesh.ARRAY_FLAG_USE_DYNAMIC_UPDATE], [constant Mesh.ARRAY_FLAG_USE_8_BONE_WEIGHTS], or [constant Mesh.ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY].
 *
 * **Note:** When using indices, it is recommended to only use points, lines, or triangles.
 *
*/
add_surface(): void;

/** Removes all surfaces and blend shapes from this [ImporterMesh]. */
clear(): void;

/**
 * Generates all lods for this ImporterMesh.
 *
 * [param normal_merge_angle] and [param normal_split_angle] are in degrees and used in the same way as the importer settings in `lods`. As a good default, use 25 and 60 respectively.
 *
 * The number of generated lods can be accessed using [method get_surface_lod_count], and each LOD is available in [method get_surface_lod_size] and [method get_surface_lod_indices].
 *
 * [param bone_transform_array] is an [Array] which can be either empty or contain [Transform3D]s which, for each of the mesh's bone IDs, will apply mesh skinning when generating the LOD mesh variations. This is usually used to account for discrepancies in scale between the mesh itself and its skinning data.
 *
*/
generate_lods(): void;

/** Returns the number of blend shapes that the mesh holds. */
get_blend_shape_count(): int;

/** Returns the blend shape mode for this Mesh. */
get_blend_shape_mode(): int;

/** Returns the name of the blend shape at this index. */
get_blend_shape_name(): string;

/** Returns the size hint of this mesh for lightmap-unwrapping in UV-space. */
get_lightmap_size_hint(): Vector2i;

/**
 * Returns the mesh data represented by this [ImporterMesh] as a usable [ArrayMesh].
 *
 * This method caches the returned mesh, and subsequent calls will return the cached data until [method clear] is called.
 *
 * If not yet cached and [param base_mesh] is provided, [param base_mesh] will be used and mutated.
 *
*/
get_mesh(): ArrayMesh;

/** Returns the arrays for the vertices, normals, UVs, etc. that make up the requested surface. See [method add_surface]. */
get_surface_arrays(): any[];

/** Returns a single set of blend shape arrays for the requested blend shape index for a surface. */
get_surface_blend_shape_arrays(): any[];

/** Returns the number of surfaces that the mesh holds. */
get_surface_count(): int;

/** Returns the format of the surface that the mesh holds. */
get_surface_format(): int;

/** Returns the number of lods that the mesh holds on a given surface. */
get_surface_lod_count(): int;

/** Returns the index buffer of a lod for a surface. */
get_surface_lod_indices(): PackedInt32Array;

/** Returns the screen ratio which activates a lod for a surface. */
get_surface_lod_size(): float;

/** Returns a [Material] in a given surface. Surface is rendered using this material. */
get_surface_material(): Material;

/** Gets the name assigned to this surface. */
get_surface_name(): string;

/** Returns the primitive type of the requested surface (see [method add_surface]). */
get_surface_primitive_type(): int;

/** Sets the blend shape mode to one of [enum Mesh.BlendShapeMode]. */
set_blend_shape_mode(): void;

/** Sets the size hint of this mesh for lightmap-unwrapping in UV-space. */
set_lightmap_size_hint(): void;

/** Sets a [Material] for a given surface. Surface will be rendered using this material. */
set_surface_material(): void;

/** Sets a name for a given surface. */
set_surface_name(): void;

  connect<T extends SignalsOf<ImporterMesh>>(signal: T, method: SignalFunction<ImporterMesh[T]>): number;






}

