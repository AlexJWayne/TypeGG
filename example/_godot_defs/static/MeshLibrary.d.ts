
/**
 * A library of meshes. Contains a list of [Mesh] resources, each with a name and ID. Each item can also include collision and navigation shapes. This resource is used in [GridMap].
 *
*/
declare class MeshLibrary extends Resource  {

  
/**
 * A library of meshes. Contains a list of [Mesh] resources, each with a name and ID. Each item can also include collision and navigation shapes. This resource is used in [GridMap].
 *
*/
  new(): MeshLibrary; 
  static "new"(): MeshLibrary 



/** Clears the library. */
clear(): void;

/**
 * Creates a new item in the library with the given ID.
 *
 * You can get an unused ID from [method get_last_unused_item_id].
 *
*/
create_item(): void;

/** Returns the first item with the given name. */
find_item_by_name(): int;

/** Returns the list of item IDs in use. */
get_item_list(): PackedInt32Array;

/** Returns the item's mesh. */
get_item_mesh(): Mesh;

/** Returns the transform applied to the item's mesh. */
get_item_mesh_transform(): Transform3D;

/** Returns the item's name. */
get_item_name(): string;

/** Returns the item's navigation layers bitmask. */
get_item_navigation_layers(): int;

/** Returns the item's navigation mesh. */
get_item_navigation_mesh(): NavigationMesh;

/** Returns the transform applied to the item's navigation mesh. */
get_item_navigation_mesh_transform(): Transform3D;

/** When running in the editor, returns a generated item preview (a 3D rendering in isometric perspective). When used in a running project, returns the manually-defined item preview which can be set using [method set_item_preview]. Returns an empty [Texture2D] if no preview was manually set in a running project. */
get_item_preview(): Texture2D;

/**
 * Returns an item's collision shapes.
 *
 * The array consists of each [Shape3D] followed by its [Transform3D].
 *
*/
get_item_shapes(): any[];

/** Gets an unused ID for a new item. */
get_last_unused_item_id(): int;

/** Removes the item. */
remove_item(): void;

/** Sets the item's mesh. */
set_item_mesh(): void;

/** Sets the transform to apply to the item's mesh. */
set_item_mesh_transform(): void;

/**
 * Sets the item's name.
 *
 * This name is shown in the editor. It can also be used to look up the item later using [method find_item_by_name].
 *
*/
set_item_name(): void;

/** Sets the item's navigation layers bitmask. */
set_item_navigation_layers(): void;

/** Sets the item's navigation mesh. */
set_item_navigation_mesh(): void;

/** Sets the transform to apply to the item's navigation mesh. */
set_item_navigation_mesh_transform(): void;

/** Sets a texture to use as the item's preview icon in the editor. */
set_item_preview(): void;

/**
 * Sets an item's collision shapes.
 *
 * The array should consist of [Shape3D] objects, each followed by a [Transform3D] that will be applied to it. For shapes that should not have a transform, use [constant Transform3D.IDENTITY].
 *
*/
set_item_shapes(): void;

  connect<T extends SignalsOf<MeshLibrary>>(signal: T, method: SignalFunction<MeshLibrary[T]>): number;






}

