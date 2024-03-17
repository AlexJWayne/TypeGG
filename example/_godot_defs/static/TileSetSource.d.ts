
/**
 * Exposes a set of tiles for a [TileSet] resource.
 *
 * Tiles in a source are indexed with two IDs, coordinates ID (of type Vector2i) and an alternative ID (of type int), named according to their use in the [TileSetAtlasSource] class.
 *
 * Depending on the TileSet source type, those IDs might have restrictions on their values, this is why the base [TileSetSource] class only exposes getters for them.
 *
 * You can iterate over all tiles exposed by a TileSetSource by first iterating over coordinates IDs using [method get_tiles_count] and [method get_tile_id], then over alternative IDs using [method get_alternative_tiles_count] and [method get_alternative_tile_id].
 *
 * **Warning:** [TileSetSource] can only be added to one TileSet at the same time. Calling [method TileSet.add_source] on a second [TileSet] will remove the source from the first one.
 *
*/
declare class TileSetSource extends Resource  {

  
/**
 * Exposes a set of tiles for a [TileSet] resource.
 *
 * Tiles in a source are indexed with two IDs, coordinates ID (of type Vector2i) and an alternative ID (of type int), named according to their use in the [TileSetAtlasSource] class.
 *
 * Depending on the TileSet source type, those IDs might have restrictions on their values, this is why the base [TileSetSource] class only exposes getters for them.
 *
 * You can iterate over all tiles exposed by a TileSetSource by first iterating over coordinates IDs using [method get_tiles_count] and [method get_tile_id], then over alternative IDs using [method get_alternative_tiles_count] and [method get_alternative_tile_id].
 *
 * **Warning:** [TileSetSource] can only be added to one TileSet at the same time. Calling [method TileSet.add_source] on a second [TileSet] will remove the source from the first one.
 *
*/
  new(): TileSetSource; 
  static "new"(): TileSetSource 



/** Returns the alternative ID for the tile with coordinates ID [param atlas_coords] at index [param index]. */
get_alternative_tile_id(): int;

/**
 * Returns the number of alternatives tiles for the coordinates ID [param atlas_coords].
 *
 * For [TileSetAtlasSource], this always return at least 1, as the base tile with ID 0 is always part of the alternatives list.
 *
 * Returns -1 if there is not tile at the given coords.
 *
*/
get_alternative_tiles_count(): int;

/** Returns the tile coordinates ID of the tile with index [param index]. */
get_tile_id(): Vector2i;

/** Returns how many tiles this atlas source defines (not including alternative tiles). */
get_tiles_count(): int;

/** Returns if the base tile at coordinates [param atlas_coords] has an alternative with ID [param alternative_tile]. */
has_alternative_tile(): boolean;

/** Returns if this atlas has a tile with coordinates ID [param atlas_coords]. */
has_tile(): boolean;

  connect<T extends SignalsOf<TileSetSource>>(signal: T, method: SignalFunction<TileSetSource[T]>): number;






}

