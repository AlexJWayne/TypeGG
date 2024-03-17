
/**
 * The engine can save resources when you do it from the editor, or when you use the [ResourceSaver] singleton. This is accomplished thanks to multiple [ResourceFormatSaver]s, each handling its own format and called automatically by the engine.
 *
 * By default, Godot saves resources as `.tres` (text-based), `.res` (binary) or another built-in format, but you can choose to create your own format by extending this class. Be sure to respect the documented return types and values. You should give it a global class name with `class_name` for it to be registered. Like built-in ResourceFormatSavers, it will be called automatically when saving resources of its recognized type(s). You may also implement a [ResourceFormatLoader].
 *
*/
declare class ResourceFormatSaver extends RefCounted  {

  
/**
 * The engine can save resources when you do it from the editor, or when you use the [ResourceSaver] singleton. This is accomplished thanks to multiple [ResourceFormatSaver]s, each handling its own format and called automatically by the engine.
 *
 * By default, Godot saves resources as `.tres` (text-based), `.res` (binary) or another built-in format, but you can choose to create your own format by extending this class. Be sure to respect the documented return types and values. You should give it a global class name with `class_name` for it to be registered. Like built-in ResourceFormatSavers, it will be called automatically when saving resources of its recognized type(s). You may also implement a [ResourceFormatLoader].
 *
*/
  new(): ResourceFormatSaver; 
  static "new"(): ResourceFormatSaver 



/** Returns the list of extensions available for saving the resource object, provided it is recognized (see [method _recognize]). */
protected _get_recognized_extensions(): PackedStringArray;

/** Returns whether the given resource object can be saved by this saver. */
protected _recognize(): boolean;

/**
 * Returns `true` if this saver handles a given save path and `false` otherwise.
 *
 * If this method is not implemented, the default behavior returns whether the path's extension is within the ones provided by [method _get_recognized_extensions].
 *
*/
protected _recognize_path(): boolean;

/**
 * Saves the given resource object to a file at the target [param path]. [param flags] is a bitmask composed with [enum ResourceSaver.SaverFlags] constants.
 *
 * Returns [constant OK] on success, or an [enum Error] constant in case of failure.
 *
*/
protected _save(): int;

/** Sets a new UID for the resource at the given [param path]. Returns [constant OK] on success, or an [enum Error] constant in case of failure. */
protected _set_uid(): int;

  connect<T extends SignalsOf<ResourceFormatSaver>>(signal: T, method: SignalFunction<ResourceFormatSaver[T]>): number;






}

