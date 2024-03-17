
/**
 * An atlas is a grid of tiles laid out on a texture. Each tile in the grid must be exposed using [method create_tile]. Those tiles are then indexed using their coordinates in the grid.
 *
 * Each tile can also have a size in the grid coordinates, making it more or less cells in the atlas.
 *
 * Alternatives version of a tile can be created using [method create_alternative_tile], which are then indexed using an alternative ID. The main tile (the one in the grid), is accessed with an alternative ID equal to 0.
 *
 * Each tile alternate has a set of properties that is defined by the source's [TileSet] layers. Those properties are stored in a TileData object that can be accessed and modified using [method get_tile_data].
 *
 * As TileData properties are stored directly in the TileSetAtlasSource resource, their properties might also be set using `TileSetAtlasSource.set("<coords_x>:<coords_y>/<alternative_id>/<tile_data_property>")`.
 *
*/
declare class TileSetAtlasSource extends TileSetSource  {

  
/**
 * An atlas is a grid of tiles laid out on a texture. Each tile in the grid must be exposed using [method create_tile]. Those tiles are then indexed using their coordinates in the grid.
 *
 * Each tile can also have a size in the grid coordinates, making it more or less cells in the atlas.
 *
 * Alternatives version of a tile can be created using [method create_alternative_tile], which are then indexed using an alternative ID. The main tile (the one in the grid), is accessed with an alternative ID equal to 0.
 *
 * Each tile alternate has a set of properties that is defined by the source's [TileSet] layers. Those properties are stored in a TileData object that can be accessed and modified using [method get_tile_data].
 *
 * As TileData properties are stored directly in the TileSetAtlasSource resource, their properties might also be set using `TileSetAtlasSource.set("<coords_x>:<coords_y>/<alternative_id>/<tile_data_property>")`.
 *
*/
  new(): TileSetAtlasSource; 
  static "new"(): TileSetAtlasSource 


/** Margins, in pixels, to offset the origin of the grid in the texture. */
margins: Vector2i;

/** Separation, in pixels, between each tile texture region of the grid. */
separation: Vector2i;

/** The atlas texture. */
texture: Texture2D;

/** The base tile size in the texture (in pixel). This size must be bigger than the TileSet's [code]tile_size[/code] value. */
texture_region_size: Vector2i;

/**
 * If `true`, generates an internal texture with an additional one pixel padding around each tile. Texture padding avoids a common artifact where lines appear between tiles.
 *
 * Disabling this setting might lead a small performance improvement, as generating the internal texture requires both memory and processing time when the TileSetAtlasSource resource is modified.
 *
*/
use_texture_padding: boolean;

/** Removes all tiles that don't fit the available texture area. This method iterates over all the source's tiles, so it's advised to use [method has_tiles_outside_texture] beforehand. */
clear_tiles_outside_texture(): void;

/**
 * Creates an alternative tile for the tile at coordinates [param atlas_coords]. If [param alternative_id_override] is -1, give it an automatically generated unique ID, or assigns it the given ID otherwise.
 *
 * Returns the new alternative identifier, or -1 if the alternative could not be created with a provided [param alternative_id_override].
 *
*/
create_alternative_tile(): int;

/** Creates a new tile at coordinates [param atlas_coords] with the given [param size]. */
create_tile(): void;

/** Returns the atlas grid size, which depends on how many tiles can fit in the texture. It thus depends on the [member texture]'s size, the atlas [member margins], and the tiles' [member texture_region_size]. */
get_atlas_grid_size(): Vector2i;

/** Returns the alternative ID a following call to [method create_alternative_tile] would return. */
get_next_alternative_tile_id(): int;

/** If [member use_texture_padding] is [code]false[/code], returns [member texture]. Otherwise, returns and internal [ImageTexture] created that includes the padding. */
get_runtime_texture(): Texture2D;

/**
 * Returns the region of the tile at coordinates [param atlas_coords] for the given [param frame] inside the texture returned by [method get_runtime_texture].
 *
 * **Note:** If [member use_texture_padding] is `false`, returns the same as [method get_tile_texture_region].
 *
*/
get_runtime_tile_texture_region(): Rect2i;

/** Returns how many columns the tile at [param atlas_coords] has in its animation layout. */
get_tile_animation_columns(): int;

/** Returns the animation frame duration of frame [param frame_index] for the tile at coordinates [param atlas_coords]. */
get_tile_animation_frame_duration(): float;

/** Returns how many animation frames has the tile at coordinates [param atlas_coords]. */
get_tile_animation_frames_count(): int;

/** Returns the [enum TileAnimationMode] of the tile at [param atlas_coords]. See also [method set_tile_animation_mode]. */
get_tile_animation_mode(): int;

/** Returns the separation (as in the atlas grid) between each frame of an animated tile at coordinates [param atlas_coords]. */
get_tile_animation_separation(): Vector2i;

/** Returns the animation speed of the tile at coordinates [param atlas_coords]. */
get_tile_animation_speed(): float;

/** Returns the sum of the sum of the frame durations of the tile at coordinates [param atlas_coords]. This value needs to be divided by the animation speed to get the actual animation loop duration. */
get_tile_animation_total_duration(): float;

/** If there is a tile covering the [param atlas_coords] coordinates, returns the top-left coordinates of the tile (thus its coordinate ID). Returns [code]Vector2i(-1, -1)[/code] otherwise. */
get_tile_at_coords(): Vector2i;

/** Returns the [TileData] object for the given atlas coordinates and alternative ID. */
get_tile_data(): TileData;

/** Returns the size of the tile (in the grid coordinates system) at coordinates [param atlas_coords]. */
get_tile_size_in_atlas(): Vector2i;

/** Returns a tile's texture region in the atlas texture. For animated tiles, a [param frame] argument might be provided for the different frames of the animation. */
get_tile_texture_region(): Rect2i;

/** Returns an array of tiles coordinates ID that will be automatically removed when modifying one or several of those properties: [param texture], [param margins], [param separation] or [param texture_region_size]. This can be used to undo changes that would have caused tiles data loss. */
get_tiles_to_be_removed_on_change(): PackedVector2Array;

/** Returns whether there is enough room in an atlas to create/modify a tile with the given properties. If [param ignored_tile] is provided, act as is the given tile was not present in the atlas. This may be used when you want to modify a tile's properties. */
has_room_for_tile(): boolean;

/** Checks if the source has any tiles that don't fit the texture area (either partially or completely). */
has_tiles_outside_texture(): boolean;

/**
 * Move the tile and its alternatives at the [param atlas_coords] coordinates to the [param new_atlas_coords] coordinates with the [param new_size] size. This functions will fail if a tile is already present in the given area.
 *
 * If [param new_atlas_coords] is `Vector2i(-1, -1)`, keeps the tile's coordinates. If [param new_size] is `Vector2i(-1, -1)`, keeps the tile's size.
 *
 * To avoid an error, first check if a move is possible using [method has_room_for_tile].
 *
*/
move_tile_in_atlas(): void;

/**
 * Remove a tile's alternative with alternative ID [param alternative_tile].
 *
 * Calling this function with [param alternative_tile] equals to 0 will fail, as the base tile alternative cannot be removed.
 *
*/
remove_alternative_tile(): void;

/** Remove a tile and its alternative at coordinates [param atlas_coords]. */
remove_tile(): void;

/**
 * Change a tile's alternative ID from [param alternative_tile] to [param new_id].
 *
 * Calling this function with [param new_id] of 0 will fail, as the base tile alternative cannot be moved.
 *
*/
set_alternative_tile_id(): void;

/** Sets the number of columns in the animation layout of the tile at coordinates [param atlas_coords]. If set to 0, then the different frames of the animation are laid out as a single horizontal line in the atlas. */
set_tile_animation_columns(): void;

/** Sets the animation frame [param duration] of frame [param frame_index] for the tile at coordinates [param atlas_coords]. */
set_tile_animation_frame_duration(): void;

/** Sets how many animation frames the tile at coordinates [param atlas_coords] has. */
set_tile_animation_frames_count(): void;

/** Sets the [enum TileAnimationMode] of the tile at [param atlas_coords] to [param mode]. See also [method get_tile_animation_mode]. */
set_tile_animation_mode(): void;

/** Sets the margin (in grid tiles) between each tile in the animation layout of the tile at coordinates [param atlas_coords] has. */
set_tile_animation_separation(): void;

/** Sets the animation speed of the tile at coordinates [param atlas_coords] has. */
set_tile_animation_speed(): void;

  connect<T extends SignalsOf<TileSetAtlasSource>>(signal: T, method: SignalFunction<TileSetAtlasSource[T]>): number;



/**
 * Tile animations start at same time, looking identical.
 *
*/
static TILE_ANIMATION_MODE_DEFAULT: any;

/**
 * Tile animations start at random times, looking varied.
 *
*/
static TILE_ANIMATION_MODE_RANDOM_START_TIMES: any;

/**
 * Represents the size of the [enum TileAnimationMode] enum.
 *
*/
static TILE_ANIMATION_MODE_MAX: any;

/**
 * Represents cell's horizontal flip flag. Should be used directly with [TileMap] to flip placed tiles by altering their alternative IDs.
 *
 * @example 
 * 
 * var alternate_id = $TileMap.get_cell_alternative_tile(0, Vector2i(2, 2))
 * if not alternate_id & TileSetAtlasSource.TRANSFORM_FLIP_H:
 *     # If tile is not already flipped, flip it.
 *     $TileMap.set_cell(0, Vector2i(2, 2), source_id, atlas_coords, alternate_id | TileSetAtlasSource.TRANSFORM_FLIP_H)
 * @summary 
 * 
 *
*/
static TRANSFORM_FLIP_H: any;

/**
 * Represents cell's vertical flip flag. See [constant TRANSFORM_FLIP_H] for usage.
 *
*/
static TRANSFORM_FLIP_V: any;

/**
 * Represents cell's transposed flag. See [constant TRANSFORM_FLIP_H] for usage.
 *
*/
static TRANSFORM_TRANSPOSE: any;



}

