
/**
 * This resource holds a set of cells to help bulk manipulations of [TileMap].
 *
 * A pattern always start at the `(0,0)` coordinates and cannot have cells with negative coordinates.
 *
*/
declare class TileMapPattern extends Resource  {

  
/**
 * This resource holds a set of cells to help bulk manipulations of [TileMap].
 *
 * A pattern always start at the `(0,0)` coordinates and cannot have cells with negative coordinates.
 *
*/
  new(): TileMapPattern; 
  static "new"(): TileMapPattern 



/** Returns the tile alternative ID of the cell at [param coords]. */
get_cell_alternative_tile(): int;

/** Returns the tile atlas coordinates ID of the cell at [param coords]. */
get_cell_atlas_coords(): Vector2i;

/** Returns the tile source ID of the cell at [param coords]. */
get_cell_source_id(): int;

/** Returns the size, in cells, of the pattern. */
get_size(): Vector2i;

/** Returns the list of used cell coordinates in the pattern. */
get_used_cells(): Vector2i[];

/** Returns whether the pattern has a tile at the given coordinates. */
has_cell(): boolean;

/** Returns whether the pattern is empty or not. */
is_empty(): boolean;

/** Remove the cell at the given coordinates. */
remove_cell(): void;

/** Sets the tile identifiers for the cell at coordinates [param coords]. See [method TileMap.set_cell]. */
set_cell(): void;

/** Sets the size of the pattern. */
set_size(): void;

  connect<T extends SignalsOf<TileMapPattern>>(signal: T, method: SignalFunction<TileMapPattern[T]>): number;






}

