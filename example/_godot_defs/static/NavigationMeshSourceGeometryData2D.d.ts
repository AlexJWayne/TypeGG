
/**
 * Container for parsed source geometry data used in navigation mesh baking.
 *
*/
declare class NavigationMeshSourceGeometryData2D extends Resource  {

  
/**
 * Container for parsed source geometry data used in navigation mesh baking.
 *
*/
  new(): NavigationMeshSourceGeometryData2D; 
  static "new"(): NavigationMeshSourceGeometryData2D 



/** Adds the outline points of a shape as obstructed area. */
add_obstruction_outline(): void;

/** Adds the outline points of a shape as traversable area. */
add_traversable_outline(): void;

/** Clears the internal data. */
clear(): void;

/** Returns all the obstructed area outlines arrays. */
get_obstruction_outlines(): PackedVector2Array[];

/** Returns all the traversable area outlines arrays. */
get_traversable_outlines(): PackedVector2Array[];

/** Returns [code]true[/code] when parsed source geometry data exists. */
has_data(): boolean;

/** Sets all the obstructed area outlines arrays. */
set_obstruction_outlines(): void;

/** Sets all the traversable area outlines arrays. */
set_traversable_outlines(): void;

  connect<T extends SignalsOf<NavigationMeshSourceGeometryData2D>>(signal: T, method: SignalFunction<NavigationMeshSourceGeometryData2D[T]>): number;






}

