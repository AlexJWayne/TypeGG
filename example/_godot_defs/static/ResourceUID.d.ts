
/**
 * Resource UIDs (Unique IDentifiers) allow the engine to keep references between resources intact, even if files can renamed or moved. They can be accessed with `uid://`.
 *
 * [ResourceUID] keeps track of all registered resource UIDs in a project, generates new UIDs, and converts between their string and integer representations.
 *
*/
declare class ResourceUIDClass extends Object  {

  
/**
 * Resource UIDs (Unique IDentifiers) allow the engine to keep references between resources intact, even if files can renamed or moved. They can be accessed with `uid://`.
 *
 * [ResourceUID] keeps track of all registered resource UIDs in a project, generates new UIDs, and converts between their string and integer representations.
 *
*/
  new(): ResourceUIDClass; 
  static "new"(): ResourceUIDClass 



/**
 * Adds a new UID value which is mapped to the given resource path.
 *
 * Fails with an error if the UID already exists, so be sure to check [method has_id] beforehand, or use [method set_id] instead.
 *
*/
add_id(): void;

/**
 * Generates a random resource UID which is guaranteed to be unique within the list of currently loaded UIDs.
 *
 * In order for this UID to be registered, you must call [method add_id] or [method set_id].
 *
*/
create_id(): int;

/**
 * Returns the path that the given UID value refers to.
 *
 * Fails with an error if the UID does not exist, so be sure to check [method has_id] beforehand.
 *
*/
get_id_path(): string;

/** Returns whether the given UID value is known to the cache. */
has_id(): boolean;

/** Converts the given UID to a [code]uid://[/code] string value. */
id_to_text(): string;

/**
 * Removes a loaded UID value from the cache.
 *
 * Fails with an error if the UID does not exist, so be sure to check [method has_id] beforehand.
 *
*/
remove_id(): void;

/**
 * Updates the resource path of an existing UID.
 *
 * Fails with an error if the UID does not exist, so be sure to check [method has_id] beforehand, or use [method add_id] instead.
 *
*/
set_id(): void;

/** Extracts the UID value from the given [code]uid://[/code] string. */
text_to_id(): int;

  connect<T extends SignalsOf<ResourceUIDClass>>(signal: T, method: SignalFunction<ResourceUIDClass[T]>): number;



/**
 * The value to use for an invalid UID, for example if the resource could not be loaded.
 *
 * Its text representation is `uid://<invalid>`.
 *
*/
static INVALID_ID: any;



}

