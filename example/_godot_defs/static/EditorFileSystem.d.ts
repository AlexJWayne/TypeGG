
/**
 * This object holds information of all resources in the filesystem, their types, etc.
 *
 * **Note:** This class shouldn't be instantiated directly. Instead, access the singleton using [method EditorInterface.get_resource_filesystem].
 *
*/
declare class EditorFileSystem extends Node  {

  
/**
 * This object holds information of all resources in the filesystem, their types, etc.
 *
 * **Note:** This class shouldn't be instantiated directly. Instead, access the singleton using [method EditorInterface.get_resource_filesystem].
 *
*/
  new(): EditorFileSystem; 
  static "new"(): EditorFileSystem 



/** Returns the resource type of the file, given the full path. This returns a string such as [code]"Resource"[/code] or [code]"GDScript"[/code], [i]not[/i] a file extension such as [code]".gd"[/code]. */
get_file_type(): string;

/** Gets the root directory object. */
get_filesystem(): EditorFileSystemDirectory;

/** Returns a view into the filesystem at [param path]. */
get_filesystem_path(): EditorFileSystemDirectory;

/** Returns the scan progress for 0 to 1 if the FS is being scanned. */
get_scanning_progress(): float;

/** Returns [code]true[/code] if the filesystem is being scanned. */
is_scanning(): boolean;

/**
 * Reimports a set of files. Call this if these files or their `.import` files were directly edited by script or an external program.
 *
 * If the file type changed or the file was newly created, use [method update_file] or [method scan].
 *
 * **Note:** This function blocks until the import is finished. However, the main loop iteration, including timers and [method Node._process], will occur during the import process due to progress bar updates. Avoid calls to [method reimport_files] or [method scan] while an import is in progress.
 *
*/
reimport_files(): void;

/** Scan the filesystem for changes. */
scan(): void;

/** Check if the source of any imported resource changed. */
scan_sources(): void;

/**
 * Add a file in an existing directory, or schedule file information to be updated on editor restart. Can be used to update text files saved by an external program.
 *
 * This will not import the file. To reimport, call [method reimport_files] or [method scan] methods.
 *
*/
update_file(): void;

  connect<T extends SignalsOf<EditorFileSystem>>(signal: T, method: SignalFunction<EditorFileSystem[T]>): number;





/**
 * Emitted if the filesystem changed.
 *
*/
$filesystem_changed: Signal<() => void>

/**
 * Emitted if a resource is reimported.
 *
*/
$resources_reimported: Signal<() => void>

/**
 * Emitted if at least one resource is reloaded when the filesystem is scanned.
 *
*/
$resources_reload: Signal<() => void>

/**
 * Emitted when the list of global script classes gets updated.
 *
*/
$script_classes_updated: Signal<() => void>

/**
 * Emitted if the source of any imported file changed.
 *
*/
$sources_changed: Signal<() => void>

}

