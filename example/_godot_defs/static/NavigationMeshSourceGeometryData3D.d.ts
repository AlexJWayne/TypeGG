
/**
 * Container for parsed source geometry data used in navigation mesh baking.
 *
*/
declare class NavigationMeshSourceGeometryData3D extends Resource  {

  
/**
 * Container for parsed source geometry data used in navigation mesh baking.
 *
*/
  new(): NavigationMeshSourceGeometryData3D; 
  static "new"(): NavigationMeshSourceGeometryData3D 



/** Adds an array of vertex positions to the geometry data for navigation mesh baking to form triangulated faces. For each face the array must have three vertex positions in clockwise winding order. Since [NavigationMesh] resources have no transform, all vertex positions need to be offset by the node's transform using [param xform]. */
add_faces(): void;

/** Adds the geometry data of a [Mesh] resource to the navigation mesh baking data. The mesh must have valid triangulated mesh data to be considered. Since [NavigationMesh] resources have no transform, all vertex positions need to be offset by the node's transform using [param xform]. */
add_mesh(): void;

/** Adds an [Array] the size of [constant Mesh.ARRAY_MAX] and with vertices at index [constant Mesh.ARRAY_VERTEX] and indices at index [constant Mesh.ARRAY_INDEX] to the navigation mesh baking data. The array must have valid triangulated mesh data to be considered. Since [NavigationMesh] resources have no transform, all vertex positions need to be offset by the node's transform using [param xform]. */
add_mesh_array(): void;

/** Clears the internal data. */
clear(): void;

/** Returns the parsed source geometry data indices array. */
get_indices(): PackedInt32Array;

/** Returns the parsed source geometry data vertices array. */
get_vertices(): PackedFloat32Array;

/** Returns [code]true[/code] when parsed source geometry data exists. */
has_data(): boolean;

/**
 * Sets the parsed source geometry data indices. The indices need to be matched with appropriated vertices.
 *
 * **Warning:** Inappropriate data can crash the baking process of the involved third-party libraries.
 *
*/
set_indices(): void;

/**
 * Sets the parsed source geometry data vertices. The vertices need to be matched with appropriated indices.
 *
 * **Warning:** Inappropriate data can crash the baking process of the involved third-party libraries.
 *
*/
set_vertices(): void;

  connect<T extends SignalsOf<NavigationMeshSourceGeometryData3D>>(signal: T, method: SignalFunction<NavigationMeshSourceGeometryData3D[T]>): number;






}

