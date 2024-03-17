
/**
 * The [ArrayMesh] is used to construct a [Mesh] by specifying the attributes as arrays.
 *
 * The most basic example is the creation of a single triangle:
 *
 * @example 
 * 
 * 
 * var vertices = PackedVector3Array()
 * vertices.push_back(Vector3(0, 1, 0))
 * vertices.push_back(Vector3(1, 0, 0))
 * vertices.push_back(Vector3(0, 0, 1))
 * # Initialize the ArrayMesh.
 * var arr_mesh = ArrayMesh.new()
 * var arrays = []
 * arrays.resize(Mesh.ARRAY_MAX)
 * arrays[Mesh.ARRAY_VERTEX] = vertices
 * # Create the Mesh.
 * arr_mesh.add_surface_from_arrays(Mesh.PRIMITIVE_TRIANGLES, arrays)
 * var m = MeshInstance3D.new()
 * m.mesh = arr_mesh
 * 
 * 
 * var vertices = new Vector3[]
 * {
 *     new Vector3(0, 1, 0),
 *     new Vector3(1, 0, 0),
 *     new Vector3(0, 0, 1),
 * };
 * // Initialize the ArrayMesh.
 * var arrMesh = new ArrayMesh();
 * var arrays = new Godot.Collections.Array();
 * arrays.Resize((int)Mesh.ArrayType.Max);
 * arrays[(int)Mesh.ArrayType.Vertex] = vertices;
 * // Create the Mesh.
 * arrMesh.AddSurfaceFromArrays(Mesh.PrimitiveType.Triangles, arrays);
 * var m = new MeshInstance3D();
 * m.Mesh = arrMesh;
 * 
 * @summary 
 * 
 *
 * The [MeshInstance3D] is ready to be added to the [SceneTree] to be shown.
 *
 * See also [ImmediateMesh], [MeshDataTool] and [SurfaceTool] for procedural geometry generation.
 *
 * **Note:** Godot uses clockwise [url=https://learnopengl.com/Advanced-OpenGL/Face-culling]winding order[/url] for front faces of triangle primitive modes.
 *
*/
declare class ArrayMesh extends Mesh  {

  
/**
 * The [ArrayMesh] is used to construct a [Mesh] by specifying the attributes as arrays.
 *
 * The most basic example is the creation of a single triangle:
 *
 * @example 
 * 
 * 
 * var vertices = PackedVector3Array()
 * vertices.push_back(Vector3(0, 1, 0))
 * vertices.push_back(Vector3(1, 0, 0))
 * vertices.push_back(Vector3(0, 0, 1))
 * # Initialize the ArrayMesh.
 * var arr_mesh = ArrayMesh.new()
 * var arrays = []
 * arrays.resize(Mesh.ARRAY_MAX)
 * arrays[Mesh.ARRAY_VERTEX] = vertices
 * # Create the Mesh.
 * arr_mesh.add_surface_from_arrays(Mesh.PRIMITIVE_TRIANGLES, arrays)
 * var m = MeshInstance3D.new()
 * m.mesh = arr_mesh
 * 
 * 
 * var vertices = new Vector3[]
 * {
 *     new Vector3(0, 1, 0),
 *     new Vector3(1, 0, 0),
 *     new Vector3(0, 0, 1),
 * };
 * // Initialize the ArrayMesh.
 * var arrMesh = new ArrayMesh();
 * var arrays = new Godot.Collections.Array();
 * arrays.Resize((int)Mesh.ArrayType.Max);
 * arrays[(int)Mesh.ArrayType.Vertex] = vertices;
 * // Create the Mesh.
 * arrMesh.AddSurfaceFromArrays(Mesh.PrimitiveType.Triangles, arrays);
 * var m = new MeshInstance3D();
 * m.Mesh = arrMesh;
 * 
 * @summary 
 * 
 *
 * The [MeshInstance3D] is ready to be added to the [SceneTree] to be shown.
 *
 * See also [ImmediateMesh], [MeshDataTool] and [SurfaceTool] for procedural geometry generation.
 *
 * **Note:** Godot uses clockwise [url=https://learnopengl.com/Advanced-OpenGL/Face-culling]winding order[/url] for front faces of triangle primitive modes.
 *
*/
  new(): ArrayMesh; 
  static "new"(): ArrayMesh 


/** Sets the blend shape mode to one of [enum Mesh.BlendShapeMode]. */
blend_shape_mode: int;

/** Overrides the [AABB] with one defined by user for use with frustum culling. Especially useful to avoid unexpected culling when using a shader to offset vertices. */
custom_aabb: AABB;

/** An optional mesh which is used for rendering shadows and can be used for the depth prepass. Can be used to increase performance of shadow rendering by using a mesh that only contains vertex position data (without normals, UVs, colors, etc.). */
shadow_mesh: ArrayMesh;

/** Adds name for a blend shape that will be added with [method add_surface_from_arrays]. Must be called before surface is added. */
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
add_surface_from_arrays(): void;

/** Removes all blend shapes from this [ArrayMesh]. */
clear_blend_shapes(): void;

/** Removes all surfaces from this [ArrayMesh]. */
clear_surfaces(): void;

/** Returns the number of blend shapes that the [ArrayMesh] holds. */
get_blend_shape_count(): int;

/** Returns the name of the blend shape at this index. */
get_blend_shape_name(): StringName;

/** Performs a UV unwrap on the [ArrayMesh] to prepare the mesh for lightmapping. */
lightmap_unwrap(): int;

/** Regenerates tangents for each of the [ArrayMesh]'s surfaces. */
regen_normal_maps(): void;

/** Sets the name of the blend shape at this index. */
set_blend_shape_name(): void;

/** Returns the index of the first surface with this name held within this [ArrayMesh]. If none are found, -1 is returned. */
surface_find_by_name(): int;

/** Returns the length in indices of the index array in the requested surface (see [method add_surface_from_arrays]). */
surface_get_array_index_len(): int;

/** Returns the length in vertices of the vertex array in the requested surface (see [method add_surface_from_arrays]). */
surface_get_array_len(): int;

/** Returns the format mask of the requested surface (see [method add_surface_from_arrays]). */
surface_get_format(): int;

/** Gets the name assigned to this surface. */
surface_get_name(): string;

/** Returns the primitive type of the requested surface (see [method add_surface_from_arrays]). */
surface_get_primitive_type(): int;

/** Sets a name for a given surface. */
surface_set_name(): void;

/** No documentation provided. */
surface_update_attribute_region(): void;

/** No documentation provided. */
surface_update_skin_region(): void;

/** No documentation provided. */
surface_update_vertex_region(): void;

  connect<T extends SignalsOf<ArrayMesh>>(signal: T, method: SignalFunction<ArrayMesh[T]>): number;






}

