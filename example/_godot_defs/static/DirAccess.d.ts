
/**
 * This class is used to manage directories and their content, even outside of the project folder.
 *
 * [DirAccess] can't be instantiated directly. Instead it is created with a static method that takes a path for which it will be opened.
 *
 * Most of the methods have a static alternative that can be used without creating a [DirAccess]. Static methods only support absolute paths (including `res://` and `user://`).
 *
 * @example 
 * 
 * # Standard
 * var dir = DirAccess.open("user://levels")
 * dir.make_dir("world1")
 * # Static
 * DirAccess.make_dir_absolute("user://levels/world1")
 * @summary 
 * 
 *
 * **Note:** Many resources types are imported (e.g. textures or sound files), and their source asset will not be included in the exported game, as only the imported version is used. Use [ResourceLoader] to access imported resources.
 *
 * Here is an example on how to iterate through the files of a directory:
 *
 * @example 
 * 
 * 
 * func dir_contents(path):
 *     var dir = DirAccess.open(path)
 *     if dir:
 *         dir.list_dir_begin()
 *         var file_name = dir.get_next()
 *         while file_name != "":
 *             if dir.current_is_dir():
 *                 print("Found directory: " + file_name)
 *             else:
 *                 print("Found file: " + file_name)
 *             file_name = dir.get_next()
 *     else:
 *         print("An error occurred when trying to access the path.")
 * 
 * 
 * public void DirContents(string path)
 * {
 *     using var dir = DirAccess.Open(path);
 *     if (dir != null)
 *     {
 *         dir.ListDirBegin();
 *         string fileName = dir.GetNext();
 *         while (fileName != "")
 *         {
 *             if (dir.CurrentIsDir())
 *             {
 *                 GD.Print($"Found directory: {fileName}");
 *             }
 *             else
 *             {
 *                 GD.Print($"Found file: {fileName}");
 *             }
 *             fileName = dir.GetNext();
 *         }
 *     }
 *     else
 *     {
 *         GD.Print("An error occurred when trying to access the path.");
 *     }
 * }
 * 
 * @summary 
 * 
 *
*/
declare class DirAccess extends RefCounted  {

  
/**
 * This class is used to manage directories and their content, even outside of the project folder.
 *
 * [DirAccess] can't be instantiated directly. Instead it is created with a static method that takes a path for which it will be opened.
 *
 * Most of the methods have a static alternative that can be used without creating a [DirAccess]. Static methods only support absolute paths (including `res://` and `user://`).
 *
 * @example 
 * 
 * # Standard
 * var dir = DirAccess.open("user://levels")
 * dir.make_dir("world1")
 * # Static
 * DirAccess.make_dir_absolute("user://levels/world1")
 * @summary 
 * 
 *
 * **Note:** Many resources types are imported (e.g. textures or sound files), and their source asset will not be included in the exported game, as only the imported version is used. Use [ResourceLoader] to access imported resources.
 *
 * Here is an example on how to iterate through the files of a directory:
 *
 * @example 
 * 
 * 
 * func dir_contents(path):
 *     var dir = DirAccess.open(path)
 *     if dir:
 *         dir.list_dir_begin()
 *         var file_name = dir.get_next()
 *         while file_name != "":
 *             if dir.current_is_dir():
 *                 print("Found directory: " + file_name)
 *             else:
 *                 print("Found file: " + file_name)
 *             file_name = dir.get_next()
 *     else:
 *         print("An error occurred when trying to access the path.")
 * 
 * 
 * public void DirContents(string path)
 * {
 *     using var dir = DirAccess.Open(path);
 *     if (dir != null)
 *     {
 *         dir.ListDirBegin();
 *         string fileName = dir.GetNext();
 *         while (fileName != "")
 *         {
 *             if (dir.CurrentIsDir())
 *             {
 *                 GD.Print($"Found directory: {fileName}");
 *             }
 *             else
 *             {
 *                 GD.Print($"Found file: {fileName}");
 *             }
 *             fileName = dir.GetNext();
 *         }
 *     }
 *     else
 *     {
 *         GD.Print("An error occurred when trying to access the path.");
 *     }
 * }
 * 
 * @summary 
 * 
 *
*/
  new(): DirAccess; 
  static "new"(): DirAccess 


/**
 * If `true`, hidden files are included when navigating the directory.
 *
 * Affects [method list_dir_begin], [method get_directories] and [method get_files].
 *
*/
include_hidden: boolean;

/**
 * If `true`, `.` and `..` are included when navigating the directory.
 *
 * Affects [method list_dir_begin] and [method get_directories].
 *
*/
include_navigational: boolean;

/**
 * Changes the currently opened directory to the one passed as an argument. The argument can be relative to the current directory (e.g. `newdir` or `../newdir`), or an absolute path (e.g. `/tmp/newdir` or `res://somedir/newdir`).
 *
 * Returns one of the [enum Error] code constants ([constant OK] on success).
 *
 * **Note:** The new directory must be within the same scope, e.g. when you had opened a directory inside `res://`, you can't change it to `user://` directory. If you need to open a directory in another access scope, use [method open] to create a new instance instead.
 *
*/
change_dir(): int;

/**
 * Copies the [param from] file to the [param to] destination. Both arguments should be paths to files, either relative or absolute. If the destination file exists and is not access-protected, it will be overwritten.
 *
 * If [param chmod_flags] is different than `-1`, the Unix permissions for the destination path will be set to the provided value, if available on the current operating system.
 *
 * Returns one of the [enum Error] code constants ([constant OK] on success).
 *
*/
copy(): int;

/** Static version of [method copy]. Supports only absolute paths. */
copy_absolute(): int;

/** Returns whether the current item processed with the last [method get_next] call is a directory ([code].[/code] and [code]..[/code] are considered directories). */
current_is_dir(): boolean;

/** Returns whether the target directory exists. The argument can be relative to the current directory, or an absolute path. */
dir_exists(): boolean;

/** Static version of [method dir_exists]. Supports only absolute paths. */
dir_exists_absolute(): boolean;

/**
 * Returns whether the target file exists. The argument can be relative to the current directory, or an absolute path.
 *
 * For a static equivalent, use [method FileAccess.file_exists].
 *
*/
file_exists(): boolean;

/** Returns the absolute path to the currently opened directory (e.g. [code]res://folder[/code] or [code]C:\tmp\folder[/code]). */
get_current_dir(): string;

/** Returns the currently opened directory's drive index. See [method get_drive_name] to convert returned index to the name of the drive. */
get_current_drive(): int;

/**
 * Returns a [PackedStringArray] containing filenames of the directory contents, excluding files. The array is sorted alphabetically.
 *
 * Affected by [member include_hidden] and [member include_navigational].
 *
*/
get_directories(): PackedStringArray;

/**
 * Returns a [PackedStringArray] containing filenames of the directory contents, excluding files, at the given [param path]. The array is sorted alphabetically.
 *
 * Use [method get_directories] if you want more control of what gets included.
 *
*/
get_directories_at(): PackedStringArray;

/**
 * On Windows, returns the number of drives (partitions) mounted on the current filesystem.
 *
 * On macOS, returns the number of mounted volumes.
 *
 * On Linux, returns the number of mounted volumes and GTK 3 bookmarks.
 *
 * On other platforms, the method returns 0.
 *
*/
get_drive_count(): int;

/**
 * On Windows, returns the name of the drive (partition) passed as an argument (e.g. `C:`).
 *
 * On macOS, returns the path to the mounted volume passed as an argument.
 *
 * On Linux, returns the path to the mounted volume or GTK 3 bookmark passed as an argument.
 *
 * On other platforms, or if the requested drive does not exist, the method returns an empty String.
 *
*/
get_drive_name(): string;

/**
 * Returns a [PackedStringArray] containing filenames of the directory contents, excluding directories. The array is sorted alphabetically.
 *
 * Affected by [member include_hidden].
 *
 * **Note:** When used on a `res://` path in an exported project, only the files actually included in the PCK at the given folder level are returned. In practice, this means that since imported resources are stored in a top-level `.godot/` folder, only paths to `*.gd` and `*.import` files are returned (plus a few files such as `project.godot` or `project.binary` and the project icon). In an exported project, the list of returned files will also vary depending on whether [member ProjectSettings.editor/export/convert_text_resources_to_binary] is `true`.
 *
*/
get_files(): PackedStringArray;

/**
 * Returns a [PackedStringArray] containing filenames of the directory contents, excluding directories, at the given [param path]. The array is sorted alphabetically.
 *
 * Use [method get_files] if you want more control of what gets included.
 *
*/
get_files_at(): PackedStringArray;

/**
 * Returns the next element (file or directory) in the current directory.
 *
 * The name of the file or directory is returned (and not its full path). Once the stream has been fully processed, the method returns an empty [String] and closes the stream automatically (i.e. [method list_dir_end] would not be mandatory in such a case).
 *
*/
get_next(): string;

/** Returns the result of the last [method open] call in the current thread. */
get_open_error(): int;

/** Returns the available space on the current directory's disk, in bytes. Returns [code]0[/code] if the platform-specific method to query the available space fails. */
get_space_left(): int;

/**
 * Returns `true` if the file system or directory use case sensitive file names.
 *
 * **Note:** This method is implemented on macOS, Linux (for EXT4 and F2FS filesystems only) and Windows. On other platforms, it always returns `true`.
 *
*/
is_case_sensitive(): boolean;

/**
 * Initializes the stream used to list all files and directories using the [method get_next] function, closing the currently opened stream if needed. Once the stream has been processed, it should typically be closed with [method list_dir_end].
 *
 * Affected by [member include_hidden] and [member include_navigational].
 *
 * **Note:** The order of files and directories returned by this method is not deterministic, and can vary between operating systems. If you want a list of all files or folders sorted alphabetically, use [method get_files] or [method get_directories].
 *
*/
list_dir_begin(): int;

/** Closes the current stream opened with [method list_dir_begin] (whether it has been fully processed with [method get_next] does not matter). */
list_dir_end(): void;

/**
 * Creates a directory. The argument can be relative to the current directory, or an absolute path. The target directory should be placed in an already existing directory (to create the full path recursively, see [method make_dir_recursive]).
 *
 * Returns one of the [enum Error] code constants ([constant OK] on success).
 *
*/
make_dir(): int;

/** Static version of [method make_dir]. Supports only absolute paths. */
make_dir_absolute(): int;

/**
 * Creates a target directory and all necessary intermediate directories in its path, by calling [method make_dir] recursively. The argument can be relative to the current directory, or an absolute path.
 *
 * Returns one of the [enum Error] code constants ([constant OK] on success).
 *
*/
make_dir_recursive(): int;

/** Static version of [method make_dir_recursive]. Supports only absolute paths. */
make_dir_recursive_absolute(): int;

/**
 * Creates a new [DirAccess] object and opens an existing directory of the filesystem. The [param path] argument can be within the project tree (`res://folder`), the user directory (`user://folder`) or an absolute path of the user filesystem (e.g. `/tmp/folder` or `C:\tmp\folder`).
 *
 * Returns `null` if opening the directory failed. You can use [method get_open_error] to check the error that occurred.
 *
*/
open(): DirAccess;

/**
 * Permanently deletes the target file or an empty directory. The argument can be relative to the current directory, or an absolute path. If the target directory is not empty, the operation will fail.
 *
 * If you don't want to delete the file/directory permanently, use [method OS.move_to_trash] instead.
 *
 * Returns one of the [enum Error] code constants ([constant OK] on success).
 *
*/
remove(): int;

/** Static version of [method remove]. Supports only absolute paths. */
remove_absolute(): int;

/**
 * Renames (move) the [param from] file or directory to the [param to] destination. Both arguments should be paths to files or directories, either relative or absolute. If the destination file or directory exists and is not access-protected, it will be overwritten.
 *
 * Returns one of the [enum Error] code constants ([constant OK] on success).
 *
*/
rename(): int;

/** Static version of [method rename]. Supports only absolute paths. */
rename_absolute(): int;

  connect<T extends SignalsOf<DirAccess>>(signal: T, method: SignalFunction<DirAccess[T]>): number;






}

