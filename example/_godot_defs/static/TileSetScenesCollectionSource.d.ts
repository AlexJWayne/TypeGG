
/**
 * When placed on a [TileMap], tiles from [TileSetScenesCollectionSource] will automatically instantiate an associated scene at the cell's position in the TileMap.
 *
 * Scenes are instantiated as children of the [TileMap] when it enters the tree. If you add/remove a scene tile in the [TileMap] that is already inside the tree, the [TileMap] will automatically instantiate/free the scene accordingly.
 *
*/
declare class TileSetScenesCollectionSource extends TileSetSource  {

  
/**
 * When placed on a [TileMap], tiles from [TileSetScenesCollectionSource] will automatically instantiate an associated scene at the cell's position in the TileMap.
 *
 * Scenes are instantiated as children of the [TileMap] when it enters the tree. If you add/remove a scene tile in the [TileMap] that is already inside the tree, the [TileMap] will automatically instantiate/free the scene accordingly.
 *
*/
  new(): TileSetScenesCollectionSource; 
  static "new"(): TileSetScenesCollectionSource 



/**
 * Creates a scene-based tile out of the given scene.
 *
 * Returns a newly generated unique ID.
 *
*/
create_scene_tile(): int;

/** Returns the scene ID a following call to [method create_scene_tile] would return. */
get_next_scene_tile_id(): int;

/** Returns whether the scene tile with [param id] displays a placeholder in the editor. */
get_scene_tile_display_placeholder(): boolean;

/** Returns the scene tile ID of the scene tile at [param index]. */
get_scene_tile_id(): int;

/** Returns the [PackedScene] resource of scene tile with [param id]. */
get_scene_tile_scene(): PackedScene<any>;

/** Returns the number or scene tiles this TileSet source has. */
get_scene_tiles_count(): int;

/** Returns whether this TileSet source has a scene tile with [param id]. */
has_scene_tile_id(): boolean;

/** Remove the scene tile with [param id]. */
remove_scene_tile(): void;

/** Sets whether or not the scene tile with [param id] should display a placeholder in the editor. This might be useful for scenes that are not visible. */
set_scene_tile_display_placeholder(): void;

/** Changes a scene tile's ID from [param id] to [param new_id]. This will fail if there is already a tile with an ID equal to [param new_id]. */
set_scene_tile_id(): void;

/** Assigns a [PackedScene] resource to the scene tile with [param id]. This will fail if the scene does not extend CanvasItem, as positioning properties are needed to place the scene on the TileMap. */
set_scene_tile_scene(): void;

  connect<T extends SignalsOf<TileSetScenesCollectionSource>>(signal: T, method: SignalFunction<TileSetScenesCollectionSource[T]>): number;






}

