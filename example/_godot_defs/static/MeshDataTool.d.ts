
/**
 * MeshDataTool provides access to individual vertices in a [Mesh]. It allows users to read and edit vertex data of meshes. It also creates an array of faces and edges.
 *
 * To use MeshDataTool, load a mesh with [method create_from_surface]. When you are finished editing the data commit the data to a mesh with [method commit_to_surface].
 *
 * Below is an example of how MeshDataTool may be used.
 *
 * @example 
 * 
 * 
 * var mesh = ArrayMesh.new()
 * mesh.add_surface_from_arrays(Mesh.PRIMITIVE_TRIANGLES, BoxMesh.new().get_mesh_arrays())
 * var mdt = MeshDataTool.new()
 * mdt.create_from_surface(mesh, 0)
 * for i in range(mdt.get_vertex_count()):
 *     var vertex = mdt.get_vertex(i)
 *     # In this example we extend the mesh by one unit, which results in separated faces as it is flat shaded.
 *     vertex += mdt.get_vertex_normal(i)
 *     # Save your change.
 *     mdt.set_vertex(i, vertex)
 * mesh.clear_surfaces()
 * mdt.commit_to_surface(mesh)
 * var mi = MeshInstance.new()
 * mi.mesh = mesh
 * add_child(mi)
 * 
 * 
 * var mesh = new ArrayMesh();
 * mesh.AddSurfaceFromArrays(Mesh.PrimitiveType.Triangles, new BoxMesh().GetMeshArrays());
 * var mdt = new MeshDataTool();
 * mdt.CreateFromSurface(mesh, 0);
 * for (var i = 0; i < mdt.GetVertexCount(); i++)
 * {
 *     Vector3 vertex = mdt.GetVertex(i);
 *     // In this example we extend the mesh by one unit, which results in separated faces as it is flat shaded.
 *     vertex += mdt.GetVertexNormal(i);
 *     // Save your change.
 *     mdt.SetVertex(i, vertex);
 * }
 * mesh.ClearSurfaces();
 * mdt.CommitToSurface(mesh);
 * var mi = new MeshInstance();
 * mi.Mesh = mesh;
 * AddChild(mi);
 * 
 * @summary 
 * 
 *
 * See also [ArrayMesh], [ImmediateMesh] and [SurfaceTool] for procedural geometry generation.
 *
 * **Note:** Godot uses clockwise [url=https://learnopengl.com/Advanced-OpenGL/Face-culling]winding order[/url] for front faces of triangle primitive modes.
 *
*/
declare class MeshDataTool extends RefCounted  {

  
/**
 * MeshDataTool provides access to individual vertices in a [Mesh]. It allows users to read and edit vertex data of meshes. It also creates an array of faces and edges.
 *
 * To use MeshDataTool, load a mesh with [method create_from_surface]. When you are finished editing the data commit the data to a mesh with [method commit_to_surface].
 *
 * Below is an example of how MeshDataTool may be used.
 *
 * @example 
 * 
 * 
 * var mesh = ArrayMesh.new()
 * mesh.add_surface_from_arrays(Mesh.PRIMITIVE_TRIANGLES, BoxMesh.new().get_mesh_arrays())
 * var mdt = MeshDataTool.new()
 * mdt.create_from_surface(mesh, 0)
 * for i in range(mdt.get_vertex_count()):
 *     var vertex = mdt.get_vertex(i)
 *     # In this example we extend the mesh by one unit, which results in separated faces as it is flat shaded.
 *     vertex += mdt.get_vertex_normal(i)
 *     # Save your change.
 *     mdt.set_vertex(i, vertex)
 * mesh.clear_surfaces()
 * mdt.commit_to_surface(mesh)
 * var mi = MeshInstance.new()
 * mi.mesh = mesh
 * add_child(mi)
 * 
 * 
 * var mesh = new ArrayMesh();
 * mesh.AddSurfaceFromArrays(Mesh.PrimitiveType.Triangles, new BoxMesh().GetMeshArrays());
 * var mdt = new MeshDataTool();
 * mdt.CreateFromSurface(mesh, 0);
 * for (var i = 0; i < mdt.GetVertexCount(); i++)
 * {
 *     Vector3 vertex = mdt.GetVertex(i);
 *     // In this example we extend the mesh by one unit, which results in separated faces as it is flat shaded.
 *     vertex += mdt.GetVertexNormal(i);
 *     // Save your change.
 *     mdt.SetVertex(i, vertex);
 * }
 * mesh.ClearSurfaces();
 * mdt.CommitToSurface(mesh);
 * var mi = new MeshInstance();
 * mi.Mesh = mesh;
 * AddChild(mi);
 * 
 * @summary 
 * 
 *
 * See also [ArrayMesh], [ImmediateMesh] and [SurfaceTool] for procedural geometry generation.
 *
 * **Note:** Godot uses clockwise [url=https://learnopengl.com/Advanced-OpenGL/Face-culling]winding order[/url] for front faces of triangle primitive modes.
 *
*/
  new(): MeshDataTool; 
  static "new"(): MeshDataTool 



/** Clears all data currently in MeshDataTool. */
clear(): void;

/** Adds a new surface to specified [Mesh] with edited data. */
commit_to_surface(): int;

/**
 * Uses specified surface of given [Mesh] to populate data for MeshDataTool.
 *
 * Requires [Mesh] with primitive type [constant Mesh.PRIMITIVE_TRIANGLES].
 *
*/
create_from_surface(): int;

/** Returns the number of edges in this [Mesh]. */
get_edge_count(): int;

/** Returns array of faces that touch given edge. */
get_edge_faces(): PackedInt32Array;

/** Returns meta information assigned to given edge. */
get_edge_meta(): any;

/**
 * Returns index of specified vertex connected to given edge.
 *
 * Vertex argument can only be 0 or 1 because edges are comprised of two vertices.
 *
*/
get_edge_vertex(): int;

/** Returns the number of faces in this [Mesh]. */
get_face_count(): int;

/**
 * Returns specified edge associated with given face.
 *
 * Edge argument must be either 0, 1, or 2 because a face only has three edges.
 *
*/
get_face_edge(): int;

/** Returns the metadata associated with the given face. */
get_face_meta(): any;

/** Calculates and returns the face normal of the given face. */
get_face_normal(): Vector3;

/**
 * Returns the specified vertex index of the given face.
 *
 * Vertex argument must be either 0, 1, or 2 because faces contain three vertices.
 *
 * **Example:**
 *
 * @example 
 * 
 * 
 * var index = mesh_data_tool.get_face_vertex(0, 1) # Gets the index of the second vertex of the first face.
 * var position = mesh_data_tool.get_vertex(index)
 * var normal = mesh_data_tool.get_vertex_normal(index)
 * 
 * 
 * int index = meshDataTool.GetFaceVertex(0, 1); // Gets the index of the second vertex of the first face.
 * Vector3 position = meshDataTool.GetVertex(index);
 * Vector3 normal = meshDataTool.GetVertexNormal(index);
 * 
 * @summary 
 * 
 *
*/
get_face_vertex(): int;

/**
 * Returns the [Mesh]'s format. Format is an integer made up of [Mesh] format flags combined together. For example, a mesh containing both vertices and normals would return a format of `3` because [constant Mesh.ARRAY_FORMAT_VERTEX] is `1` and [constant Mesh.ARRAY_FORMAT_NORMAL] is `2`.
 *
 * See [enum Mesh.ArrayFormat] for a list of format flags.
 *
*/
get_format(): int;

/** Returns the material assigned to the [Mesh]. */
get_material(): Material;

/** Returns the position of the given vertex. */
get_vertex(): Vector3;

/** Returns the bones of the given vertex. */
get_vertex_bones(): PackedInt32Array;

/** Returns the color of the given vertex. */
get_vertex_color(): Color;

/** Returns the total number of vertices in [Mesh]. */
get_vertex_count(): int;

/** Returns an array of edges that share the given vertex. */
get_vertex_edges(): PackedInt32Array;

/** Returns an array of faces that share the given vertex. */
get_vertex_faces(): PackedInt32Array;

/** Returns the metadata associated with the given vertex. */
get_vertex_meta(): any;

/** Returns the normal of the given vertex. */
get_vertex_normal(): Vector3;

/** Returns the tangent of the given vertex. */
get_vertex_tangent(): Plane;

/** Returns the UV of the given vertex. */
get_vertex_uv(): Vector2;

/** Returns the UV2 of the given vertex. */
get_vertex_uv2(): Vector2;

/** Returns bone weights of the given vertex. */
get_vertex_weights(): PackedFloat32Array;

/** Sets the metadata of the given edge. */
set_edge_meta(): void;

/** Sets the metadata of the given face. */
set_face_meta(): void;

/** Sets the material to be used by newly-constructed [Mesh]. */
set_material(): void;

/** Sets the position of the given vertex. */
set_vertex(): void;

/** Sets the bones of the given vertex. */
set_vertex_bones(): void;

/** Sets the color of the given vertex. */
set_vertex_color(): void;

/** Sets the metadata associated with the given vertex. */
set_vertex_meta(): void;

/** Sets the normal of the given vertex. */
set_vertex_normal(): void;

/** Sets the tangent of the given vertex. */
set_vertex_tangent(): void;

/** Sets the UV of the given vertex. */
set_vertex_uv(): void;

/** Sets the UV2 of the given vertex. */
set_vertex_uv2(): void;

/** Sets the bone weights of the given vertex. */
set_vertex_weights(): void;

  connect<T extends SignalsOf<MeshDataTool>>(signal: T, method: SignalFunction<MeshDataTool[T]>): number;






}

