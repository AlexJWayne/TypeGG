
/**
 * Godot loads resources in the editor or in exported games using ResourceFormatLoaders. They are queried automatically via the [ResourceLoader] singleton, or when a resource with internal dependencies is loaded. Each file type may load as a different resource type, so multiple ResourceFormatLoaders are registered in the engine.
 *
 * Extending this class allows you to define your own loader. Be sure to respect the documented return types and values. You should give it a global class name with `class_name` for it to be registered. Like built-in ResourceFormatLoaders, it will be called automatically when loading resources of its handled type(s). You may also implement a [ResourceFormatSaver].
 *
 * **Note:** You can also extend [EditorImportPlugin] if the resource type you need exists but Godot is unable to load its format. Choosing one way over another depends on if the format is suitable or not for the final exported game. For example, it's better to import `.png` textures as `.ctex` ([CompressedTexture2D]) first, so they can be loaded with better efficiency on the graphics card.
 *
*/
declare class ResourceFormatLoader extends RefCounted  {

  
/**
 * Godot loads resources in the editor or in exported games using ResourceFormatLoaders. They are queried automatically via the [ResourceLoader] singleton, or when a resource with internal dependencies is loaded. Each file type may load as a different resource type, so multiple ResourceFormatLoaders are registered in the engine.
 *
 * Extending this class allows you to define your own loader. Be sure to respect the documented return types and values. You should give it a global class name with `class_name` for it to be registered. Like built-in ResourceFormatLoaders, it will be called automatically when loading resources of its handled type(s). You may also implement a [ResourceFormatSaver].
 *
 * **Note:** You can also extend [EditorImportPlugin] if the resource type you need exists but Godot is unable to load its format. Choosing one way over another depends on if the format is suitable or not for the final exported game. For example, it's better to import `.png` textures as `.ctex` ([CompressedTexture2D]) first, so they can be loaded with better efficiency on the graphics card.
 *
*/
  new(): ResourceFormatLoader; 
  static "new"(): ResourceFormatLoader 



/** No documentation provided. */
protected _exists(): boolean;

/** No documentation provided. */
protected _get_classes_used(): PackedStringArray;

/**
 * If implemented, gets the dependencies of a given resource. If [param add_types] is `true`, paths should be appended `::TypeName`, where `TypeName` is the class name of the dependency.
 *
 * **Note:** Custom resource types defined by scripts aren't known by the [ClassDB], so you might just return `"Resource"` for them.
 *
*/
protected _get_dependencies(): PackedStringArray;

/** Gets the list of extensions for files this loader is able to read. */
protected _get_recognized_extensions(): PackedStringArray;

/** Returns the script class name associated with the [Resource] under the given [param path]. If the resource has no script or the script isn't a named class, it should return [code]""[/code]. */
protected _get_resource_script_class(): string;

/**
 * Gets the class name of the resource associated with the given path. If the loader cannot handle it, it should return `""`.
 *
 * **Note:** Custom resource types defined by scripts aren't known by the [ClassDB], so you might just return `"Resource"` for them.
 *
*/
protected _get_resource_type(): string;

/** No documentation provided. */
protected _get_resource_uid(): int;

/**
 * Tells which resource class this loader can load.
 *
 * **Note:** Custom resource types defined by scripts aren't known by the [ClassDB], so you might just handle `"Resource"` for them.
 *
*/
protected _handles_type(): boolean;

/**
 * Loads a resource when the engine finds this loader to be compatible. If the loaded resource is the result of an import, [param original_path] will target the source file. Returns a [Resource] object on success, or an [enum Error] constant in case of failure.
 *
 * The [param cache_mode] property defines whether and how the cache should be used or updated when loading the resource. See [enum CacheMode] for details.
 *
*/
protected _load(): any;

/**
 * Tells whether or not this loader should load a resource from its resource path for a given type.
 *
 * If it is not implemented, the default behavior returns whether the path's extension is within the ones provided by [method _get_recognized_extensions], and if the type is within the ones provided by [method _get_resource_type].
 *
*/
protected _recognize_path(): boolean;

/**
 * If implemented, renames dependencies within the given resource and saves it. [param renames] is a dictionary `{ String => String }` mapping old dependency paths to new paths.
 *
 * Returns [constant OK] on success, or an [enum Error] constant in case of failure.
 *
*/
protected _rename_dependencies(): int;

  connect<T extends SignalsOf<ResourceFormatLoader>>(signal: T, method: SignalFunction<ResourceFormatLoader[T]>): number;



/** No documentation provided. */
static CACHE_MODE_IGNORE: any;

/** No documentation provided. */
static CACHE_MODE_REUSE: any;

/** No documentation provided. */
static CACHE_MODE_REPLACE: any;



}

