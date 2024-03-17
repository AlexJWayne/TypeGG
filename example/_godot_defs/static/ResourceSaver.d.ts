
/**
 * A singleton for saving resource types to the filesystem.
 *
 * It uses the many [ResourceFormatSaver] classes registered in the engine (either built-in or from a plugin) to save resource data to text-based (e.g. `.tres` or `.tscn`) or binary files (e.g. `.res` or `.scn`).
 *
*/
declare class ResourceSaverClass extends Object  {

  
/**
 * A singleton for saving resource types to the filesystem.
 *
 * It uses the many [ResourceFormatSaver] classes registered in the engine (either built-in or from a plugin) to save resource data to text-based (e.g. `.tres` or `.tscn`) or binary files (e.g. `.res` or `.scn`).
 *
*/
  new(): ResourceSaverClass; 
  static "new"(): ResourceSaverClass 



/**
 * Registers a new [ResourceFormatSaver]. The ResourceSaver will use the ResourceFormatSaver as described in [method save].
 *
 * This method is performed implicitly for ResourceFormatSavers written in GDScript (see [ResourceFormatSaver] for more information).
 *
*/
add_resource_format_saver(): void;

/** Returns the list of extensions available for saving a resource of a given type. */
get_recognized_extensions(): PackedStringArray;

/** Unregisters the given [ResourceFormatSaver]. */
remove_resource_format_saver(): void;

/**
 * Saves a resource to disk to the given path, using a [ResourceFormatSaver] that recognizes the resource object. If [param path] is empty, [ResourceSaver] will try to use [member Resource.resource_path].
 *
 * The [param flags] bitmask can be specified to customize the save behavior using [enum SaverFlags] flags.
 *
 * Returns [constant OK] on success.
 *
 * **Note:** When the project is running, any generated UID associated with the resource will not be saved as the required code is only executed in editor mode.
 *
*/
save(): int;

  connect<T extends SignalsOf<ResourceSaverClass>>(signal: T, method: SignalFunction<ResourceSaverClass[T]>): number;



/**
 * No resource saving option.
 *
*/
static FLAG_NONE: any;

/**
 * Save the resource with a path relative to the scene which uses it.
 *
*/
static FLAG_RELATIVE_PATHS: any;

/**
 * Bundles external resources.
 *
*/
static FLAG_BUNDLE_RESOURCES: any;

/**
 * Changes the [member Resource.resource_path] of the saved resource to match its new location.
 *
*/
static FLAG_CHANGE_PATH: any;

/**
 * Do not save editor-specific metadata (identified by their `__editor` prefix).
 *
*/
static FLAG_OMIT_EDITOR_PROPERTIES: any;

/**
 * Save as big endian (see [member FileAccess.big_endian]).
 *
*/
static FLAG_SAVE_BIG_ENDIAN: any;

/**
 * Compress the resource on save using [constant FileAccess.COMPRESSION_ZSTD]. Only available for binary resource types.
 *
*/
static FLAG_COMPRESS: any;

/**
 * Take over the paths of the saved subresources (see [method Resource.take_over_path]).
 *
*/
static FLAG_REPLACE_SUBRESOURCE_PATHS: any;



}

