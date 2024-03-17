
/**
 * The [SurfaceTool] is used to construct a [Mesh] by specifying vertex attributes individually. It can be used to construct a [Mesh] from a script. All properties except indices need to be added before calling [method add_vertex]. For example, to add vertex colors and UVs:
 *
 * @example 
 * 
 * 
 * var st = SurfaceTool.new()
 * st.begin(Mesh.PRIMITIVE_TRIANGLES)
 * st.set_color(Color(1, 0, 0))
 * st.set_uv(Vector2(0, 0))
 * st.add_vertex(Vector3(0, 0, 0))
 * 
 * 
 * var st = new SurfaceTool();
 * st.Begin(Mesh.PrimitiveType.Triangles);
 * st.SetColor(new Color(1, 0, 0));
 * st.SetUV(new Vector2(0, 0));
 * st.AddVertex(new Vector3(0, 0, 0));
 * 
 * @summary 
 * 
 *
 * The above [SurfaceTool] now contains one vertex of a triangle which has a UV coordinate and a specified [Color]. If another vertex were added without calling [method set_uv] or [method set_color], then the last values would be used.
 *
 * Vertex attributes must be passed **before** calling [method add_vertex]. Failure to do so will result in an error when committing the vertex information to a mesh.
 *
 * Additionally, the attributes used before the first vertex is added determine the format of the mesh. For example, if you only add UVs to the first vertex, you cannot add color to any of the subsequent vertices.
 *
 * See also [ArrayMesh], [ImmediateMesh] and [MeshDataTool] for procedural geometry generation.
 *
 * **Note:** Godot uses clockwise [url=https://learnopengl.com/Advanced-OpenGL/Face-culling]winding order[/url] for front faces of triangle primitive modes.
 *
*/
declare class SurfaceTool extends RefCounted  {

  
/**
 * The [SurfaceTool] is used to construct a [Mesh] by specifying vertex attributes individually. It can be used to construct a [Mesh] from a script. All properties except indices need to be added before calling [method add_vertex]. For example, to add vertex colors and UVs:
 *
 * @example 
 * 
 * 
 * var st = SurfaceTool.new()
 * st.begin(Mesh.PRIMITIVE_TRIANGLES)
 * st.set_color(Color(1, 0, 0))
 * st.set_uv(Vector2(0, 0))
 * st.add_vertex(Vector3(0, 0, 0))
 * 
 * 
 * var st = new SurfaceTool();
 * st.Begin(Mesh.PrimitiveType.Triangles);
 * st.SetColor(new Color(1, 0, 0));
 * st.SetUV(new Vector2(0, 0));
 * st.AddVertex(new Vector3(0, 0, 0));
 * 
 * @summary 
 * 
 *
 * The above [SurfaceTool] now contains one vertex of a triangle which has a UV coordinate and a specified [Color]. If another vertex were added without calling [method set_uv] or [method set_color], then the last values would be used.
 *
 * Vertex attributes must be passed **before** calling [method add_vertex]. Failure to do so will result in an error when committing the vertex information to a mesh.
 *
 * Additionally, the attributes used before the first vertex is added determine the format of the mesh. For example, if you only add UVs to the first vertex, you cannot add color to any of the subsequent vertices.
 *
 * See also [ArrayMesh], [ImmediateMesh] and [MeshDataTool] for procedural geometry generation.
 *
 * **Note:** Godot uses clockwise [url=https://learnopengl.com/Advanced-OpenGL/Face-culling]winding order[/url] for front faces of triangle primitive modes.
 *
*/
  new(): SurfaceTool; 
  static "new"(): SurfaceTool 



/** Adds a vertex to index array if you are using indexed vertices. Does not need to be called before adding vertices. */
add_index(): void;

/**
 * Inserts a triangle fan made of array data into [Mesh] being constructed.
 *
 * Requires the primitive type be set to [constant Mesh.PRIMITIVE_TRIANGLES].
 *
*/
add_triangle_fan(): void;

/** Specifies the position of current vertex. Should be called after specifying other vertex properties (e.g. Color, UV). */
add_vertex(): void;

/** Append vertices from a given [Mesh] surface onto the current vertex array with specified [Transform3D]. */
append_from(): void;

/** Called before adding any vertices. Takes the primitive type as an argument (e.g. [constant Mesh.PRIMITIVE_TRIANGLES]). */
begin(): void;

/** Clear all information passed into the surface tool so far. */
clear(): void;

/**
 * Returns a constructed [ArrayMesh] from current information passed in. If an existing [ArrayMesh] is passed in as an argument, will add an extra surface to the existing [ArrayMesh].
 *
 * **FIXME:** Document possible values for [param flags], it changed in 4.0. Likely some combinations of [enum Mesh.ArrayFormat].
 *
*/
commit(): ArrayMesh;

/** Commits the data to the same format used by [method ArrayMesh.add_surface_from_arrays]. This way you can further process the mesh data using the [ArrayMesh] API. */
commit_to_arrays(): any[];

/** Creates a vertex array from an existing [Mesh]. */
create_from(): void;

/** Creates a vertex array from the specified blend shape of an existing [Mesh]. This can be used to extract a specific pose from a blend shape. */
create_from_blend_shape(): void;

/** Removes the index array by expanding the vertex array. */
deindex(): void;

/**
 * Generates a LOD for a given [param nd_threshold] in linear units (square root of quadric error metric), using at most [param target_index_count] indices.
 *
 * **Deprecated.** Unused internally and neglects to preserve normals or UVs. Consider using [method ImporterMesh.generate_lods] instead.
 *
*/
generate_lod(): PackedInt32Array;

/**
 * Generates normals from vertices so you do not have to do it manually. If [param flip] is `true`, the resulting normals will be inverted. [method generate_normals] should be called **after** generating geometry and **before** committing the mesh using [method commit] or [method commit_to_arrays]. For correct display of normal-mapped surfaces, you will also have to generate tangents using [method generate_tangents].
 *
 * **Note:** [method generate_normals] only works if the primitive type to be set to [constant Mesh.PRIMITIVE_TRIANGLES].
 *
 * **Note:** [method generate_normals] takes smooth groups into account. To generate smooth normals, set the smooth group to a value greater than or equal to `0` using [method set_smooth_group] or leave the smooth group at the default of `0`. To generate flat normals, set the smooth group to `-1` using [method set_smooth_group] prior to adding vertices.
 *
*/
generate_normals(): void;

/** Generates a tangent vector for each vertex. Requires that each vertex have UVs and normals set already (see [method generate_normals]). */
generate_tangents(): void;

/** Returns the axis-aligned bounding box of the vertex positions. */
get_aabb(): AABB;

/** Returns the format for custom [param channel_index] (currently up to 4). Returns [constant CUSTOM_MAX] if this custom channel is unused. */
get_custom_format(): int;

/** Returns the type of mesh geometry, such as [constant Mesh.PRIMITIVE_TRIANGLES]. */
get_primitive_type(): int;

/**
 * By default, returns [constant SKIN_4_WEIGHTS] to indicate only 4 bone influences per vertex are used.
 *
 * Returns [constant SKIN_8_WEIGHTS] if up to 8 influences are used.
 *
 * **Note:** This function returns an enum, not the exact number of weights.
 *
*/
get_skin_weight_count(): int;

/** Shrinks the vertex array by creating an index array. This can improve performance by avoiding vertex reuse. */
index(): void;

/** Optimizes triangle sorting for performance. Requires that [method get_primitive_type] is [constant Mesh.PRIMITIVE_TRIANGLES]. */
optimize_indices_for_cache(): void;

/** Specifies an array of bones to use for the [i]next[/i] vertex. [param bones] must contain 4 integers. */
set_bones(): void;

/**
 * Specifies a [Color] to use for the **next** vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all.
 *
 * **Note:** The material must have [member BaseMaterial3D.vertex_color_use_as_albedo] enabled for the vertex color to be visible.
 *
*/
set_color(): void;

/**
 * Sets the custom value on this vertex for [param channel_index].
 *
 * [method set_custom_format] must be called first for this [param channel_index]. Formats which are not RGBA will ignore other color channels.
 *
*/
set_custom(): void;

/**
 * Sets the color format for this custom [param channel_index]. Use [constant CUSTOM_MAX] to disable.
 *
 * Must be invoked after [method begin] and should be set before [method commit] or [method commit_to_arrays].
 *
*/
set_custom_format(): void;

/** Sets [Material] to be used by the [Mesh] you are constructing. */
set_material(): void;

/** Specifies a normal to use for the [i]next[/i] vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all. */
set_normal(): void;

/**
 * Set to [constant SKIN_8_WEIGHTS] to indicate that up to 8 bone influences per vertex may be used.
 *
 * By default, only 4 bone influences are used ([constant SKIN_4_WEIGHTS])
 *
 * **Note:** This function takes an enum, not the exact number of weights.
 *
*/
set_skin_weight_count(): void;

/**
 * Specifies the smooth group to use for the **next** vertex. If this is never called, all vertices will have the default smooth group of `0` and will be smoothed with adjacent vertices of the same group. To produce a mesh with flat normals, set the smooth group to `-1`.
 *
 * **Note:** This function actually takes a `uint32_t`, so C# users should use `uint32.MaxValue` instead of `-1` to produce a mesh with flat normals.
 *
*/
set_smooth_group(): void;

/** Specifies a tangent to use for the [i]next[/i] vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all. */
set_tangent(): void;

/** Specifies a set of UV coordinates to use for the [i]next[/i] vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all. */
set_uv(): void;

/** Specifies an optional second set of UV coordinates to use for the [i]next[/i] vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all. */
set_uv2(): void;

/** Specifies weight values to use for the [i]next[/i] vertex. [param weights] must contain 4 values. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all. */
set_weights(): void;

  connect<T extends SignalsOf<SurfaceTool>>(signal: T, method: SignalFunction<SurfaceTool[T]>): number;



/**
 * Limits range of data passed to [method set_custom] to unsigned normalized 0 to 1 stored in 8 bits per channel. See [constant Mesh.ARRAY_CUSTOM_RGBA8_UNORM].
 *
*/
static CUSTOM_RGBA8_UNORM: any;

/**
 * Limits range of data passed to [method set_custom] to signed normalized -1 to 1 stored in 8 bits per channel. See [constant Mesh.ARRAY_CUSTOM_RGBA8_SNORM].
 *
*/
static CUSTOM_RGBA8_SNORM: any;

/**
 * Stores data passed to [method set_custom] as half precision floats, and uses only red and green color channels. See [constant Mesh.ARRAY_CUSTOM_RG_HALF].
 *
*/
static CUSTOM_RG_HALF: any;

/**
 * Stores data passed to [method set_custom] as half precision floats and uses all color channels. See [constant Mesh.ARRAY_CUSTOM_RGBA_HALF].
 *
*/
static CUSTOM_RGBA_HALF: any;

/**
 * Stores data passed to [method set_custom] as full precision floats, and uses only red color channel. See [constant Mesh.ARRAY_CUSTOM_R_FLOAT].
 *
*/
static CUSTOM_R_FLOAT: any;

/**
 * Stores data passed to [method set_custom] as full precision floats, and uses only red and green color channels. See [constant Mesh.ARRAY_CUSTOM_RG_FLOAT].
 *
*/
static CUSTOM_RG_FLOAT: any;

/**
 * Stores data passed to [method set_custom] as full precision floats, and uses only red, green and blue color channels. See [constant Mesh.ARRAY_CUSTOM_RGB_FLOAT].
 *
*/
static CUSTOM_RGB_FLOAT: any;

/**
 * Stores data passed to [method set_custom] as full precision floats, and uses all color channels. See [constant Mesh.ARRAY_CUSTOM_RGBA_FLOAT].
 *
*/
static CUSTOM_RGBA_FLOAT: any;

/**
 * Used to indicate a disabled custom channel.
 *
*/
static CUSTOM_MAX: any;

/**
 * Each individual vertex can be influenced by only 4 bone weights.
 *
*/
static SKIN_4_WEIGHTS: any;

/**
 * Each individual vertex can be influenced by up to 8 bone weights.
 *
*/
static SKIN_8_WEIGHTS: any;



}

