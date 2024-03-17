
/**
 * Node for 2D tile-based maps. Tilemaps use a [TileSet] which contain a list of tiles which are used to create grid-based maps. A TileMap may have several layers, layouting tiles on top of each other.
 *
 * For performance reasons, all TileMap updates are batched at the end of a frame. Notably, this means that scene tiles from a [TileSetScenesCollectionSource] may be initialized after their parent.
 *
 * To force an update earlier on, call [method update_internals].
 *
*/
declare class TileMap extends Node2D  {

  
/**
 * Node for 2D tile-based maps. Tilemaps use a [TileSet] which contain a list of tiles which are used to create grid-based maps. A TileMap may have several layers, layouting tiles on top of each other.
 *
 * For performance reasons, all TileMap updates are batched at the end of a frame. Notably, this means that scene tiles from a [TileSetScenesCollectionSource] may be initialized after their parent.
 *
 * To force an update earlier on, call [method update_internals].
 *
*/
  new(): TileMap; 
  static "new"(): TileMap 


/**
 * If enabled, the TileMap will see its collisions synced to the physics tick and change its collision type from static to kinematic. This is required to create TileMap-based moving platform.
 *
 * **Note:** Enabling [member collision_animatable] may have a small performance impact, only do it if the TileMap is moving and has colliding tiles.
 *
*/
collision_animatable: boolean;

/** Show or hide the TileMap's collision shapes. If set to [constant VISIBILITY_MODE_DEFAULT], this depends on the show collision debug settings. */
collision_visibility_mode: int;

/** Show or hide the TileMap's navigation meshes. If set to [constant VISIBILITY_MODE_DEFAULT], this depends on the show navigation debug settings. */
navigation_visibility_mode: int;

/**
 * The TileMap's quadrant size. A quadrant is a group of tiles to be drawn together on a single canvas item, for optimization purposes. [member rendering_quadrant_size] defines the length of a square's side, in the map's coordinate system, that forms the quadrant. Thus, the default quandrant size groups together `16 * 16 = 256` tiles.
 *
 * The quadrant size does not apply on Y-sorted layers, as tiles are be grouped by Y position instead in that case.
 *
 * **Note:** As quadrants are created according to the map's coordinate system, the quadrant's "square shape" might not look like square in the TileMap's local coordinate system.
 *
*/
rendering_quadrant_size: int;

/** The assigned [TileSet]. */
tile_set: TileSet;

/**
 * Called with a TileData object about to be used internally by the TileMap, allowing its modification at runtime.
 *
 * This method is only called if [method _use_tile_data_runtime_update] is implemented and returns `true` for the given tile [param coords] and [param layer].
 *
 * **Warning:** The [param tile_data] object's sub-resources are the same as the one in the TileSet. Modifying them might impact the whole TileSet. Instead, make sure to duplicate those resources.
 *
 * **Note:** If the properties of [param tile_data] object should change over time, use [method notify_runtime_tile_data_update] to notify the TileMap it needs an update.
 *
*/
protected _tile_data_runtime_update(): void;

/**
 * Should return `true` if the tile at coordinates [param coords] on layer [param layer] requires a runtime update.
 *
 * **Warning:** Make sure this function only return `true` when needed. Any tile processed at runtime without a need for it will imply a significant performance penalty.
 *
 * **Note:** If the result of this function should changed, use [method notify_runtime_tile_data_update] to notify the TileMap it needs an update.
 *
*/
protected _use_tile_data_runtime_update(): boolean;

/** Adds a layer at the given position [param to_position] in the array. If [param to_position] is negative, the position is counted from the end, with [code]-1[/code] adding the layer at the end of the array. */
add_layer(): void;

/** Clears all cells. */
clear(): void;

/**
 * Clears all cells on the given layer.
 *
 * If [param layer] is negative, the layers are accessed from the last one.
 *
*/
clear_layer(): void;

/**
 * Erases the cell on layer [param layer] at coordinates [param coords].
 *
 * If [param layer] is negative, the layers are accessed from the last one.
 *
*/
erase_cell(): void;

/** Clears cells that do not exist in the tileset. */
fix_invalid_tiles(): void;

/** [i]Deprecated.[/i] See [method notify_runtime_tile_data_update] and [method update_internals]. */
force_update(): void;

/**
 * Returns the tile alternative ID of the cell on layer [param layer] at [param coords]. If [param use_proxies] is `false`, ignores the [TileSet]'s tile proxies, returning the raw alternative identifier. See [method TileSet.map_tile_proxy].
 *
 * If [param layer] is negative, the layers are accessed from the last one.
 *
*/
get_cell_alternative_tile(): int;

/**
 * Returns the tile atlas coordinates ID of the cell on layer [param layer] at coordinates [param coords]. If [param use_proxies] is `false`, ignores the [TileSet]'s tile proxies, returning the raw alternative identifier. See [method TileSet.map_tile_proxy].
 *
 * If [param layer] is negative, the layers are accessed from the last one.
 *
*/
get_cell_atlas_coords(): Vector2i;

/**
 * Returns the tile source ID of the cell on layer [param layer] at coordinates [param coords]. Returns `-1` if the cell does not exist.
 *
 * If [param use_proxies] is `false`, ignores the [TileSet]'s tile proxies, returning the raw alternative identifier. See [method TileSet.map_tile_proxy].
 *
 * If [param layer] is negative, the layers are accessed from the last one.
 *
*/
get_cell_source_id(): int;

/**
 * Returns the [TileData] object associated with the given cell, or `null` if the cell does not exist or is not a [TileSetAtlasSource].
 *
 * If [param layer] is negative, the layers are accessed from the last one.
 *
 * If [param use_proxies] is `false`, ignores the [TileSet]'s tile proxies, returning the raw alternative identifier. See [method TileSet.map_tile_proxy].
 *
 * @example 
 * 
 * func get_clicked_tile_power():
 *     var clicked_cell = tile_map.local_to_map(tile_map.get_local_mouse_position())
 *     var data = tile_map.get_cell_tile_data(0, clicked_cell)
 *     if data:
 *         return data.get_custom_data("power")
 *     else:
 *         return 0
 * @summary 
 * 
 *
*/
get_cell_tile_data(): TileData;

/** Returns the coordinates of the tile for given physics body RID. Such RID can be retrieved from [method KinematicCollision2D.get_collider_rid], when colliding with a tile. */
get_coords_for_body_rid(): Vector2i;

/** Returns the tilemap layer of the tile for given physics body RID. Such RID can be retrieved from [method KinematicCollision2D.get_collider_rid], when colliding with a tile. */
get_layer_for_body_rid(): int;

/**
 * Returns a TileMap layer's modulate.
 *
 * If [param layer] is negative, the layers are accessed from the last one.
 *
*/
get_layer_modulate(): Color;

/**
 * Returns a TileMap layer's name.
 *
 * If [param layer] is negative, the layers are accessed from the last one.
 *
*/
get_layer_name(): string;

/**
 * Returns the [NavigationServer2D] navigation map [RID] currently assigned to the specified TileMap [param layer].
 *
 * By default the TileMap uses the default [World2D] navigation map for the first TileMap layer. For each additional TileMap layer a new navigation map is created for the additional layer.
 *
 * In order to make [NavigationAgent2D] switch between TileMap layer navigation maps use [method NavigationAgent2D.set_navigation_map] with the navigation map received from [method get_layer_navigation_map].
 *
 * If [param layer] is negative, the layers are accessed from the last one.
 *
*/
get_layer_navigation_map(): RID;

/**
 * Returns a TileMap layer's Y sort origin.
 *
 * If [param layer] is negative, the layers are accessed from the last one.
 *
*/
get_layer_y_sort_origin(): int;

/**
 * Returns a TileMap layer's Z-index value.
 *
 * If [param layer] is negative, the layers are accessed from the last one.
 *
*/
get_layer_z_index(): int;

/** Returns the number of layers in the TileMap. */
get_layers_count(): int;

/** See [method get_layer_navigation_map]. */
get_navigation_map(): RID;

/** Returns the neighboring cell to the one at coordinates [param coords], identified by the [param neighbor] direction. This method takes into account the different layouts a TileMap can take. */
get_neighbor_cell(): Vector2i;

/**
 * Creates a new [TileMapPattern] from the given layer and set of cells.
 *
 * If [param layer] is negative, the layers are accessed from the last one.
 *
*/
get_pattern(): TileMapPattern;

/** Returns the list of all neighbourings cells to the one at [param coords]. */
get_surrounding_cells(): Vector2i[];

/**
 * Returns a [Vector2i] array with the positions of all cells containing a tile in the given layer. A cell is considered empty if its source identifier equals -1, its atlas coordinates identifiers is `Vector2(-1, -1)` and its alternative identifier is -1.
 *
 * If [param layer] is negative, the layers are accessed from the last one.
 *
*/
get_used_cells(): Vector2i[];

/**
 * Returns a [Vector2i] array with the positions of all cells containing a tile in the given layer. Tiles may be filtered according to their source ([param source_id]), their atlas coordinates ([param atlas_coords]) or alternative id ([param alternative_tile]).
 *
 * If a parameter has its value set to the default one, this parameter is not used to filter a cell. Thus, if all parameters have their respective default value, this method returns the same result as [method get_used_cells].
 *
 * A cell is considered empty if its source identifier equals -1, its atlas coordinates identifiers is `Vector2(-1, -1)` and its alternative identifier is -1.
 *
 * If [param layer] is negative, the layers are accessed from the last one.
 *
*/
get_used_cells_by_id(): Vector2i[];

/** Returns a rectangle enclosing the used (non-empty) tiles of the map, including all layers. */
get_used_rect(): Rect2i;

/**
 * Returns if a layer is enabled.
 *
 * If [param layer] is negative, the layers are accessed from the last one.
 *
*/
is_layer_enabled(): boolean;

/** Returns if a layer's built-in navigation regions generation is enabled. */
is_layer_navigation_enabled(): boolean;

/**
 * Returns if a layer Y-sorts its tiles.
 *
 * If [param layer] is negative, the layers are accessed from the last one.
 *
*/
is_layer_y_sort_enabled(): boolean;

/** Returns the map coordinates of the cell containing the given [param local_position]. If [param local_position] is in global coordinates, consider using [method Node2D.to_local] before passing it to this method. See also [method map_to_local]. */
local_to_map(): Vector2i;

/** Returns for the given coordinate [param coords_in_pattern] in a [TileMapPattern] the corresponding cell coordinates if the pattern was pasted at the [param position_in_tilemap] coordinates (see [method set_pattern]). This mapping is required as in half-offset tile shapes, the mapping might not work by calculating [code]position_in_tile_map + coords_in_pattern[/code]. */
map_pattern(): Vector2i;

/**
 * Returns the centered position of a cell in the TileMap's local coordinate space. To convert the returned value into global coordinates, use [method Node2D.to_global]. See also [method local_to_map].
 *
 * **Note:** This may not correspond to the visual position of the tile, i.e. it ignores the [member TileData.texture_origin] property of individual tiles.
 *
*/
map_to_local(): Vector2;

/** Moves the layer at index [param layer] to the given position [param to_position] in the array. */
move_layer(): void;

/**
 * Notifies the TileMap node that calls to [method _use_tile_data_runtime_update] or [method _tile_data_runtime_update] will lead to different results. This will thus trigger a TileMap update.
 *
 * If [param layer] is provided, only notifies changes for the given layer. Providing the [param layer] argument (when applicable) is usually preferred for performance reasons.
 *
 * **Warning:** Updating the TileMap is computationally expensive and may impact performance. Try to limit the number of calls to this function to avoid unnecessary update.
 *
 * **Note:** This does not trigger a direct update of the TileMap, the update will be done at the end of the frame as usual (unless you call [method update_internals]).
 *
*/
notify_runtime_tile_data_update(): void;

/** Removes the layer at index [param layer]. */
remove_layer(): void;

/**
 * Sets the tile identifiers for the cell on layer [param layer] at coordinates [param coords]. Each tile of the [TileSet] is identified using three parts:
 *
 * - The source identifier [param source_id] identifies a [TileSetSource] identifier. See [method TileSet.set_source_id],
 *
 * - The atlas coordinates identifier [param atlas_coords] identifies a tile coordinates in the atlas (if the source is a [TileSetAtlasSource]). For [TileSetScenesCollectionSource] it should always be `Vector2i(0, 0)`),
 *
 * - The alternative tile identifier [param alternative_tile] identifies a tile alternative in the atlas (if the source is a [TileSetAtlasSource]), and the scene for a [TileSetScenesCollectionSource].
 *
 * If [param source_id] is set to `-1`, [param atlas_coords] to `Vector2i(-1, -1)` or [param alternative_tile] to `-1`, the cell will be erased. An erased cell gets **all** its identifiers automatically set to their respective invalid values, namely `-1`, `Vector2i(-1, -1)` and `-1`.
 *
 * If [param layer] is negative, the layers are accessed from the last one.
 *
*/
set_cell(): void;

/**
 * Update all the cells in the [param cells] coordinates array so that they use the given [param terrain] for the given [param terrain_set]. If an updated cell has the same terrain as one of its neighboring cells, this function tries to join the two. This function might update neighboring tiles if needed to create correct terrain transitions.
 *
 * If [param ignore_empty_terrains] is true, empty terrains will be ignored when trying to find the best fitting tile for the given terrain constraints.
 *
 * If [param layer] is negative, the layers are accessed from the last one.
 *
 * **Note:** To work correctly, this method requires the TileMap's TileSet to have terrains set up with all required terrain combinations. Otherwise, it may produce unexpected results.
 *
*/
set_cells_terrain_connect(): void;

/**
 * Update all the cells in the [param path] coordinates array so that they use the given [param terrain] for the given [param terrain_set]. The function will also connect two successive cell in the path with the same terrain. This function might update neighboring tiles if needed to create correct terrain transitions.
 *
 * If [param ignore_empty_terrains] is true, empty terrains will be ignored when trying to find the best fitting tile for the given terrain constraints.
 *
 * If [param layer] is negative, the layers are accessed from the last one.
 *
 * **Note:** To work correctly, this method requires the TileMap's TileSet to have terrains set up with all required terrain combinations. Otherwise, it may produce unexpected results.
 *
*/
set_cells_terrain_path(): void;

/**
 * Enables or disables the layer [param layer]. A disabled layer is not processed at all (no rendering, no physics, etc...).
 *
 * If [param layer] is negative, the layers are accessed from the last one.
 *
*/
set_layer_enabled(): void;

/**
 * Sets a layer's color. It will be multiplied by tile's color and TileMap's modulate.
 *
 * If [param layer] is negative, the layers are accessed from the last one.
 *
*/
set_layer_modulate(): void;

/**
 * Sets a layer's name. This is mostly useful in the editor.
 *
 * If [param layer] is negative, the layers are accessed from the last one.
 *
*/
set_layer_name(): void;

/** Enables or disables a layer's built-in navigation regions generation. Disable this if you need to bake navigation regions from a TileMap using a [NavigationRegion2D] node. */
set_layer_navigation_enabled(): void;

/**
 * Assigns a [NavigationServer2D] navigation map [RID] to the specified TileMap [param layer].
 *
 * By default the TileMap uses the default [World2D] navigation map for the first TileMap layer. For each additional TileMap layer a new navigation map is created for the additional layer.
 *
 * In order to make [NavigationAgent2D] switch between TileMap layer navigation maps use [method NavigationAgent2D.set_navigation_map] with the navigation map received from [method get_layer_navigation_map].
 *
 * If [param layer] is negative, the layers are accessed from the last one.
 *
*/
set_layer_navigation_map(): void;

/**
 * Enables or disables a layer's Y-sorting. If a layer is Y-sorted, the layer will behave as a CanvasItem node where each of its tile gets Y-sorted.
 *
 * Y-sorted layers should usually be on different Z-index values than not Y-sorted layers, otherwise, each of those layer will be Y-sorted as whole with the Y-sorted one. This is usually an undesired behavior.
 *
 * If [param layer] is negative, the layers are accessed from the last one.
 *
*/
set_layer_y_sort_enabled(): void;

/**
 * Sets a layer's Y-sort origin value. This Y-sort origin value is added to each tile's Y-sort origin value.
 *
 * This allows, for example, to fake a different height level on each layer. This can be useful for top-down view games.
 *
 * If [param layer] is negative, the layers are accessed from the last one.
 *
*/
set_layer_y_sort_origin(): void;

/**
 * Sets a layers Z-index value. This Z-index is added to each tile's Z-index value.
 *
 * If [param layer] is negative, the layers are accessed from the last one.
 *
*/
set_layer_z_index(): void;

/** See [method set_layer_navigation_map]. */
set_navigation_map(): void;

/**
 * Paste the given [TileMapPattern] at the given [param position] and [param layer] in the tile map.
 *
 * If [param layer] is negative, the layers are accessed from the last one.
 *
*/
set_pattern(): void;

/**
 * Triggers a direct update of the TileMap. Usually, calling this function is not needed, as TileMap node updates automatically when one of its properties or cells is modified.
 *
 * However, for performance reasons, those updates are batched and delayed to the end of the frame. Calling this function will force the TileMap to update right away instead.
 *
 * **Warning:** Updating the TileMap is computationally expensive and may impact performance. Try to limit the number of updates and how many tiles they impact.
 *
*/
update_internals(): void;

  connect<T extends SignalsOf<TileMap>>(signal: T, method: SignalFunction<TileMap[T]>): number;



/**
 * Use the debug settings to determine visibility.
 *
*/
static VISIBILITY_MODE_DEFAULT: any;

/**
 * Always hide.
 *
*/
static VISIBILITY_MODE_FORCE_HIDE: any;

/**
 * Always show.
 *
*/
static VISIBILITY_MODE_FORCE_SHOW: any;


/**
 * Emitted when the [TileSet] of this TileMap changes.
 *
*/
$changed: Signal<() => void>

}

