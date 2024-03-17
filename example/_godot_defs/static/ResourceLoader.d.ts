
/**
 * A singleton used to load resource files from the filesystem.
 *
 * It uses the many [ResourceFormatLoader] classes registered in the engine (either built-in or from a plugin) to load files into memory and convert them to a format that can be used by the engine.
 *
 * **Note:** You have to import the files into the engine first to load them using [method load]. If you want to load [Image]s at run-time, you may use [method Image.load]. If you want to import audio files, you can use the snippet described in [member AudioStreamMP3.data].
 *
*/
declare class ResourceLoaderClass extends Object  {

  
/**
 * A singleton used to load resource files from the filesystem.
 *
 * It uses the many [ResourceFormatLoader] classes registered in the engine (either built-in or from a plugin) to load files into memory and convert them to a format that can be used by the engine.
 *
 * **Note:** You have to import the files into the engine first to load them using [method load]. If you want to load [Image]s at run-time, you may use [method Image.load]. If you want to import audio files, you can use the snippet described in [member AudioStreamMP3.data].
 *
*/
  new(): ResourceLoaderClass; 
  static "new"(): ResourceLoaderClass 



/**
 * Registers a new [ResourceFormatLoader]. The ResourceLoader will use the ResourceFormatLoader as described in [method load].
 *
 * This method is performed implicitly for ResourceFormatLoaders written in GDScript (see [ResourceFormatLoader] for more information).
 *
*/
add_resource_format_loader(): void;

/**
 * Returns whether a recognized resource exists for the given [param path].
 *
 * An optional [param type_hint] can be used to further specify the [Resource] type that should be handled by the [ResourceFormatLoader]. Anything that inherits from [Resource] can be used as a type hint, for example [Image].
 *
*/
exists(): boolean;

/**
 * Returns the dependencies for the resource at the given [param path].
 *
 * **Note:** The dependencies are returned with slices separated by `::`. You can use [method String.get_slice] to get their components.
 *
 * @example 
 * 
 * for dep in ResourceLoader.get_dependencies(path):
 *     print(dep.get_slice("::", 0)) # Prints UID.
 *     print(dep.get_slice("::", 2)) # Prints path.
 * @summary 
 * 
 *
*/
get_dependencies(): PackedStringArray;

/** Returns the list of recognized extensions for a resource type. */
get_recognized_extensions_for_type(): PackedStringArray;

/** Returns the ID associated with a given resource path, or [code]-1[/code] when no such ID exists. */
get_resource_uid(): int;

/**
 * Returns whether a cached resource is available for the given [param path].
 *
 * Once a resource has been loaded by the engine, it is cached in memory for faster access, and future calls to the [method load] method will use the cached version. The cached resource can be overridden by using [method Resource.take_over_path] on a new resource for that same path.
 *
*/
has_cached(): boolean;

/**
 * Loads a resource at the given [param path], caching the result for further access.
 *
 * The registered [ResourceFormatLoader]s are queried sequentially to find the first one which can handle the file's extension, and then attempt loading. If loading fails, the remaining ResourceFormatLoaders are also attempted.
 *
 * An optional [param type_hint] can be used to further specify the [Resource] type that should be handled by the [ResourceFormatLoader]. Anything that inherits from [Resource] can be used as a type hint, for example [Image].
 *
 * The [param cache_mode] property defines whether and how the cache should be used or updated when loading the resource. See [enum CacheMode] for details.
 *
 * Returns an empty resource if no [ResourceFormatLoader] could handle the file.
 *
 * GDScript has a simplified [method @GDScript.load] built-in method which can be used in most situations, leaving the use of [ResourceLoader] for more advanced scenarios.
 *
 * **Note:** If [member ProjectSettings.editor/export/convert_text_resources_to_binary] is `true`, [method @GDScript.load] will not be able to read converted files in an exported project. If you rely on run-time loading of files present within the PCK, set [member ProjectSettings.editor/export/convert_text_resources_to_binary] to `false`.
 *
*/
load(): Resource;

/**
 * Returns the resource loaded by [method load_threaded_request].
 *
 * If this is called before the loading thread is done (i.e. [method load_threaded_get_status] is not [constant THREAD_LOAD_LOADED]), the calling thread will be blocked until the resource has finished loading.
 *
*/
load_threaded_get(): Resource;

/**
 * Returns the status of a threaded loading operation started with [method load_threaded_request] for the resource at [param path]. See [enum ThreadLoadStatus] for possible return values.
 *
 * An array variable can optionally be passed via [param progress], and will return a one-element array containing the percentage of completion of the threaded loading.
 *
*/
load_threaded_get_status(): int;

/**
 * Loads the resource using threads. If [param use_sub_threads] is `true`, multiple threads will be used to load the resource, which makes loading faster, but may affect the main thread (and thus cause game slowdowns).
 *
 * The [param cache_mode] property defines whether and how the cache should be used or updated when loading the resource. See [enum CacheMode] for details.
 *
*/
load_threaded_request(): int;

/** Unregisters the given [ResourceFormatLoader]. */
remove_resource_format_loader(): void;

/** Changes the behavior on missing sub-resources. The default behavior is to abort loading. */
set_abort_on_missing_resources(): void;

  connect<T extends SignalsOf<ResourceLoaderClass>>(signal: T, method: SignalFunction<ResourceLoaderClass[T]>): number;



/**
 * The resource is invalid, or has not been loaded with [method load_threaded_request].
 *
*/
static THREAD_LOAD_INVALID_RESOURCE: any;

/**
 * The resource is still being loaded.
 *
*/
static THREAD_LOAD_IN_PROGRESS: any;

/**
 * Some error occurred during loading and it failed.
 *
*/
static THREAD_LOAD_FAILED: any;

/**
 * The resource was loaded successfully and can be accessed via [method load_threaded_get].
 *
*/
static THREAD_LOAD_LOADED: any;

/** No documentation provided. */
static CACHE_MODE_IGNORE: any;

/** No documentation provided. */
static CACHE_MODE_REUSE: any;

/** No documentation provided. */
static CACHE_MODE_REPLACE: any;



}

