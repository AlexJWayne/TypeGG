
/**
 * A TileSet is a library of tiles for a [TileMap]. A TileSet handles a list of [TileSetSource], each of them storing a set of tiles.
 *
 * Tiles can either be from a [TileSetAtlasSource], which renders tiles out of a texture with support for physics, navigation, etc., or from a [TileSetScenesCollectionSource], which exposes scene-based tiles.
 *
 * Tiles are referenced by using three IDs: their source ID, their atlas coordinates ID, and their alternative tile ID.
 *
 * A TileSet can be configured so that its tiles expose more or fewer properties. To do so, the TileSet resources use property layers, which you can add or remove depending on your needs.
 *
 * For example, adding a physics layer allows giving collision shapes to your tiles. Each layer has dedicated properties (physics layer and mask), so you may add several TileSet physics layers for each type of collision you need.
 *
 * See the functions to add new layers for more information.
 *
*/
declare class TileSet extends Resource  {

  
/**
 * A TileSet is a library of tiles for a [TileMap]. A TileSet handles a list of [TileSetSource], each of them storing a set of tiles.
 *
 * Tiles can either be from a [TileSetAtlasSource], which renders tiles out of a texture with support for physics, navigation, etc., or from a [TileSetScenesCollectionSource], which exposes scene-based tiles.
 *
 * Tiles are referenced by using three IDs: their source ID, their atlas coordinates ID, and their alternative tile ID.
 *
 * A TileSet can be configured so that its tiles expose more or fewer properties. To do so, the TileSet resources use property layers, which you can add or remove depending on your needs.
 *
 * For example, adding a physics layer allows giving collision shapes to your tiles. Each layer has dedicated properties (physics layer and mask), so you may add several TileSet physics layers for each type of collision you need.
 *
 * See the functions to add new layers for more information.
 *
*/
  new(): TileSet; 
  static "new"(): TileSet 


/** For all half-offset shapes (Isometric, Hexagonal and Half-Offset square), changes the way tiles are indexed in the TileMap grid. */
tile_layout: int;

/** For all half-offset shapes (Isometric, Hexagonal and Half-Offset square), determines the offset axis. */
tile_offset_axis: int;

/** The tile shape. */
tile_shape: int;

/** The tile size, in pixels. For all tile shapes, this size corresponds to the encompassing rectangle of the tile shape. This is thus the minimal cell size required in an atlas. */
tile_size: Vector2i;

/** Enables/Disable uv clipping when rendering the tiles. */
uv_clipping: boolean;

/**
 * Adds a custom data layer to the TileSet at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array.
 *
 * Custom data layers allow assigning custom properties to atlas tiles.
 *
*/
add_custom_data_layer(): void;

/**
 * Adds a navigation layer to the TileSet at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array.
 *
 * Navigation layers allow assigning a navigable area to atlas tiles.
 *
*/
add_navigation_layer(): void;

/**
 * Adds an occlusion layer to the TileSet at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array.
 *
 * Occlusion layers allow assigning occlusion polygons to atlas tiles.
 *
*/
add_occlusion_layer(): void;

/** Adds a [TileMapPattern] to be stored in the TileSet resource. If provided, insert it at the given [param index]. */
add_pattern(): int;

/**
 * Adds a physics layer to the TileSet at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array.
 *
 * Physics layers allow assigning collision polygons to atlas tiles.
 *
*/
add_physics_layer(): void;

/**
 * Adds a [TileSetSource] to the TileSet. If [param atlas_source_id_override] is not -1, also set its source ID. Otherwise, a unique identifier is automatically generated.
 *
 * The function returns the added source ID or -1 if the source could not be added.
 *
 * **Warning:** A source cannot belong to two TileSets at the same time. If the added source was attached to another [TileSet], it will be removed from that one.
 *
*/
add_source(): int;

/** Adds a new terrain to the given terrain set [param terrain_set] at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array. */
add_terrain(): void;

/** Adds a new terrain set at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array. */
add_terrain_set(): void;

/** Clears tile proxies pointing to invalid tiles. */
cleanup_invalid_tile_proxies(): void;

/** Clears all tile proxies. */
clear_tile_proxies(): void;

/**
 * Returns the alternative-level proxy for the given identifiers. The returned array contains the three proxie's target identifiers (source ID, atlas coords ID and alternative tile ID).
 *
 * If the TileSet has no proxy for the given identifiers, returns an empty Array.
 *
*/
get_alternative_level_tile_proxy(): any[];

/**
 * Returns the coordinate-level proxy for the given identifiers. The returned array contains the two target identifiers of the proxy (source ID and atlas coordinates ID).
 *
 * If the TileSet has no proxy for the given identifiers, returns an empty Array.
 *
*/
get_coords_level_tile_proxy(): any[];

/** Returns the index of the custom data layer identified by the given name. */
get_custom_data_layer_by_name(): int;

/** Returns the name of the custom data layer identified by the given index. */
get_custom_data_layer_name(): string;

/** Returns the type of the custom data layer identified by the given index. */
get_custom_data_layer_type(): int;

/** Returns the custom data layers count. */
get_custom_data_layers_count(): int;

/** Returns whether or not the specified navigation layer of the TileSet navigation data layer identified by the given [param layer_index] is enabled, given a navigation_layers [param layer_number] between 1 and 32. */
get_navigation_layer_layer_value(): boolean;

/** Returns the navigation layers (as in the Navigation server) of the given TileSet navigation layer. */
get_navigation_layer_layers(): int;

/** Returns the navigation layers count. */
get_navigation_layers_count(): int;

/** Returns a new unused source ID. This generated ID is the same that a call to [method add_source] would return. */
get_next_source_id(): int;

/** Returns the light mask of the occlusion layer. */
get_occlusion_layer_light_mask(): int;

/** Returns if the occluders from this layer use [code]sdf_collision[/code]. */
get_occlusion_layer_sdf_collision(): boolean;

/** Returns the occlusion layers count. */
get_occlusion_layers_count(): int;

/** Returns the [TileMapPattern] at the given [param index]. */
get_pattern(): TileMapPattern;

/** Returns the number of [TileMapPattern] this tile set handles. */
get_patterns_count(): int;

/** Returns the collision layer (as in the physics server) bodies on the given TileSet's physics layer are in. */
get_physics_layer_collision_layer(): int;

/** Returns the collision mask of bodies on the given TileSet's physics layer. */
get_physics_layer_collision_mask(): int;

/** Returns the physics material of bodies on the given TileSet's physics layer. */
get_physics_layer_physics_material(): PhysicsMaterial;

/** Returns the physics layers count. */
get_physics_layers_count(): int;

/** Returns the [TileSetSource] with ID [param source_id]. */
get_source(): TileSetSource;

/** Returns the number of [TileSetSource] in this TileSet. */
get_source_count(): int;

/** Returns the source ID for source with index [param index]. */
get_source_id(): int;

/**
 * Returns the source-level proxy for the given source identifier.
 *
 * If the TileSet has no proxy for the given identifier, returns -1.
 *
*/
get_source_level_tile_proxy(): int;

/** Returns a terrain's color. */
get_terrain_color(): Color;

/** Returns a terrain's name. */
get_terrain_name(): string;

/** Returns a terrain set mode. */
get_terrain_set_mode(): int;

/** Returns the terrain sets count. */
get_terrain_sets_count(): int;

/** Returns the number of terrains in the given terrain set. */
get_terrains_count(): int;

/** Returns if there is an alternative-level proxy for the given identifiers. */
has_alternative_level_tile_proxy(): boolean;

/** Returns if there is a coodinates-level proxy for the given identifiers. */
has_coords_level_tile_proxy(): boolean;

/** Returns if this TileSet has a source for the given source ID. */
has_source(): boolean;

/** Returns if there is a source-level proxy for the given source ID. */
has_source_level_tile_proxy(): boolean;

/**
 * According to the configured proxies, maps the provided identifiers to a new set of identifiers. The source ID, atlas coordinates ID and alternative tile ID are returned as a 3 elements Array.
 *
 * This function first look for matching alternative-level proxies, then coordinates-level proxies, then source-level proxies.
 *
 * If no proxy corresponding to provided identifiers are found, returns the same values the ones used as arguments.
 *
*/
map_tile_proxy(): any[];

/** Moves the custom data layer at index [param layer_index] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
move_custom_data_layer(): void;

/** Moves the navigation layer at index [param layer_index] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
move_navigation_layer(): void;

/** Moves the occlusion layer at index [param layer_index] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
move_occlusion_layer(): void;

/** Moves the physics layer at index [param layer_index] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
move_physics_layer(): void;

/** Moves the terrain at index [param terrain_index] for terrain set [param terrain_set] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
move_terrain(): void;

/** Moves the terrain set at index [param terrain_set] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
move_terrain_set(): void;

/** Removes an alternative-level proxy for the given identifiers. */
remove_alternative_level_tile_proxy(): void;

/** Removes a coordinates-level proxy for the given identifiers. */
remove_coords_level_tile_proxy(): void;

/** Removes the custom data layer at index [param layer_index]. Also updates the atlas tiles accordingly. */
remove_custom_data_layer(): void;

/** Removes the navigation layer at index [param layer_index]. Also updates the atlas tiles accordingly. */
remove_navigation_layer(): void;

/** Removes the occlusion layer at index [param layer_index]. Also updates the atlas tiles accordingly. */
remove_occlusion_layer(): void;

/** Remove the [TileMapPattern] at the given index. */
remove_pattern(): void;

/** Removes the physics layer at index [param layer_index]. Also updates the atlas tiles accordingly. */
remove_physics_layer(): void;

/** Removes the source with the given source ID. */
remove_source(): void;

/** Removes a source-level tile proxy. */
remove_source_level_tile_proxy(): void;

/** Removes the terrain at index [param terrain_index] in the given terrain set [param terrain_set]. Also updates the atlas tiles accordingly. */
remove_terrain(): void;

/** Removes the terrain set at index [param terrain_set]. Also updates the atlas tiles accordingly. */
remove_terrain_set(): void;

/**
 * Create an alternative-level proxy for the given identifiers. A proxy will map set of tile identifiers to another set of identifiers.
 *
 * This can be used to replace a tile in all TileMaps using this TileSet, as TileMap nodes will find and use the proxy's target tile when one is available.
 *
 * Proxied tiles can be automatically replaced in TileMap nodes using the editor.
 *
*/
set_alternative_level_tile_proxy(): void;

/**
 * Creates a coordinates-level proxy for the given identifiers. A proxy will map set of tile identifiers to another set of identifiers. The alternative tile ID is kept the same when using coordinates-level proxies.
 *
 * This can be used to replace a tile in all TileMaps using this TileSet, as TileMap nodes will find and use the proxy's target tile when one is available.
 *
 * Proxied tiles can be automatically replaced in TileMap nodes using the editor.
 *
*/
set_coords_level_tile_proxy(): void;

/** Sets the name of the custom data layer identified by the given index. Names are identifiers of the layer therefore if the name is already taken it will fail and raise an error. */
set_custom_data_layer_name(): void;

/** Sets the type of the custom data layer identified by the given index. */
set_custom_data_layer_type(): void;

/** Based on [param value], enables or disables the specified navigation layer of the TileSet navigation data layer identified by the given [param layer_index], given a navigation_layers [param layer_number] between 1 and 32. */
set_navigation_layer_layer_value(): void;

/** Sets the navigation layers (as in the navigation server) for navigation regions in the given TileSet navigation layer. */
set_navigation_layer_layers(): void;

/** Sets the occlusion layer (as in the rendering server) for occluders in the given TileSet occlusion layer. */
set_occlusion_layer_light_mask(): void;

/** Enables or disables SDF collision for occluders in the given TileSet occlusion layer. */
set_occlusion_layer_sdf_collision(): void;

/** Sets the physics layer (as in the physics server) for bodies in the given TileSet physics layer. */
set_physics_layer_collision_layer(): void;

/** Sets the physics layer (as in the physics server) for bodies in the given TileSet physics layer. */
set_physics_layer_collision_mask(): void;

/** Sets the physics material for bodies in the given TileSet physics layer. */
set_physics_layer_physics_material(): void;

/** Changes a source's ID. */
set_source_id(): void;

/**
 * Creates a source-level proxy for the given source ID. A proxy will map set of tile identifiers to another set of identifiers. Both the atlas coordinates ID and the alternative tile ID are kept the same when using source-level proxies.
 *
 * This can be used to replace a source in all TileMaps using this TileSet, as TileMap nodes will find and use the proxy's target source when one is available.
 *
 * Proxied tiles can be automatically replaced in TileMap nodes using the editor.
 *
*/
set_source_level_tile_proxy(): void;

/** Sets a terrain's color. This color is used for identifying the different terrains in the TileSet editor. */
set_terrain_color(): void;

/** Sets a terrain's name. */
set_terrain_name(): void;

/** Sets a terrain mode. Each mode determines which bits of a tile shape is used to match the neighboring tiles' terrains. */
set_terrain_set_mode(): void;

  connect<T extends SignalsOf<TileSet>>(signal: T, method: SignalFunction<TileSet[T]>): number;



/**
 * Rectangular tile shape.
 *
*/
static TILE_SHAPE_SQUARE: any;

/**
 * Diamond tile shape (for isometric look).
 *
 * **Note:** Isometric [TileSet] works best if [TileMap] and all its layers have Y-sort enabled.
 *
*/
static TILE_SHAPE_ISOMETRIC: any;

/**
 * Rectangular tile shape with one row/column out of two offset by half a tile.
 *
*/
static TILE_SHAPE_HALF_OFFSET_SQUARE: any;

/**
 * Hexagonal tile shape.
 *
*/
static TILE_SHAPE_HEXAGON: any;

/**
 * Tile coordinates layout where both axis stay consistent with their respective local horizontal and vertical axis.
 *
*/
static TILE_LAYOUT_STACKED: any;

/**
 * Same as [constant TILE_LAYOUT_STACKED], but the first half-offset is negative instead of positive.
 *
*/
static TILE_LAYOUT_STACKED_OFFSET: any;

/**
 * Tile coordinates layout where the horizontal axis stay horizontal, and the vertical one goes down-right.
 *
*/
static TILE_LAYOUT_STAIRS_RIGHT: any;

/**
 * Tile coordinates layout where the vertical axis stay vertical, and the horizontal one goes down-right.
 *
*/
static TILE_LAYOUT_STAIRS_DOWN: any;

/**
 * Tile coordinates layout where the horizontal axis goes up-right, and the vertical one goes down-right.
 *
*/
static TILE_LAYOUT_DIAMOND_RIGHT: any;

/**
 * Tile coordinates layout where the horizontal axis goes down-right, and the vertical one goes down-left.
 *
*/
static TILE_LAYOUT_DIAMOND_DOWN: any;

/**
 * Horizontal half-offset.
 *
*/
static TILE_OFFSET_AXIS_HORIZONTAL: any;

/**
 * Vertical half-offset.
 *
*/
static TILE_OFFSET_AXIS_VERTICAL: any;

/**
 * Neighbor on the right side.
 *
*/
static CELL_NEIGHBOR_RIGHT_SIDE: any;

/**
 * Neighbor in the right corner.
 *
*/
static CELL_NEIGHBOR_RIGHT_CORNER: any;

/**
 * Neighbor on the bottom right side.
 *
*/
static CELL_NEIGHBOR_BOTTOM_RIGHT_SIDE: any;

/**
 * Neighbor in the bottom right corner.
 *
*/
static CELL_NEIGHBOR_BOTTOM_RIGHT_CORNER: any;

/**
 * Neighbor on the bottom side.
 *
*/
static CELL_NEIGHBOR_BOTTOM_SIDE: any;

/**
 * Neighbor in the bottom corner.
 *
*/
static CELL_NEIGHBOR_BOTTOM_CORNER: any;

/**
 * Neighbor on the bottom left side.
 *
*/
static CELL_NEIGHBOR_BOTTOM_LEFT_SIDE: any;

/**
 * Neighbor in the bottom left corner.
 *
*/
static CELL_NEIGHBOR_BOTTOM_LEFT_CORNER: any;

/**
 * Neighbor on the left side.
 *
*/
static CELL_NEIGHBOR_LEFT_SIDE: any;

/**
 * Neighbor in the left corner.
 *
*/
static CELL_NEIGHBOR_LEFT_CORNER: any;

/**
 * Neighbor on the top left side.
 *
*/
static CELL_NEIGHBOR_TOP_LEFT_SIDE: any;

/**
 * Neighbor in the top left corner.
 *
*/
static CELL_NEIGHBOR_TOP_LEFT_CORNER: any;

/**
 * Neighbor on the top side.
 *
*/
static CELL_NEIGHBOR_TOP_SIDE: any;

/**
 * Neighbor in the top corner.
 *
*/
static CELL_NEIGHBOR_TOP_CORNER: any;

/**
 * Neighbor on the top right side.
 *
*/
static CELL_NEIGHBOR_TOP_RIGHT_SIDE: any;

/**
 * Neighbor in the top right corner.
 *
*/
static CELL_NEIGHBOR_TOP_RIGHT_CORNER: any;

/**
 * Requires both corners and side to match with neighboring tiles' terrains.
 *
*/
static TERRAIN_MODE_MATCH_CORNERS_AND_SIDES: any;

/**
 * Requires corners to match with neighboring tiles' terrains.
 *
*/
static TERRAIN_MODE_MATCH_CORNERS: any;

/**
 * Requires sides to match with neighboring tiles' terrains.
 *
*/
static TERRAIN_MODE_MATCH_SIDES: any;



}

