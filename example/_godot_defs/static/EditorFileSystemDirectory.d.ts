
/**
 * A more generalized, low-level variation of the directory concept.
 *
*/
declare class EditorFileSystemDirectory extends Object  {

  
/**
 * A more generalized, low-level variation of the directory concept.
 *
*/
  new(): EditorFileSystemDirectory; 
  static "new"(): EditorFileSystemDirectory 



/** Returns the index of the directory with name [param name] or [code]-1[/code] if not found. */
find_dir_index(): int;

/** Returns the index of the file with name [param name] or [code]-1[/code] if not found. */
find_file_index(): int;

/** Returns the name of the file at index [param idx]. */
get_file(): string;

/** Returns the number of files in this directory. */
get_file_count(): int;

/** Returns [code]true[/code] if the file at index [param idx] imported properly. */
get_file_import_is_valid(): boolean;

/** Returns the path to the file at index [param idx]. */
get_file_path(): string;

/** Returns the base class of the script class defined in the file at index [param idx]. If the file doesn't define a script class using the [code]class_name[/code] syntax, this will return an empty string. */
get_file_script_class_extends(): string;

/** Returns the name of the script class defined in the file at index [param idx]. If the file doesn't define a script class using the [code]class_name[/code] syntax, this will return an empty string. */
get_file_script_class_name(): string;

/** Returns the resource type of the file at index [param idx]. This returns a string such as [code]"Resource"[/code] or [code]"GDScript"[/code], [i]not[/i] a file extension such as [code]".gd"[/code]. */
get_file_type(): StringName;

/** Returns the name of this directory. */
get_name(): string;

/** Returns the parent directory for this directory or [code]null[/code] if called on a directory at [code]res://[/code] or [code]user://[/code]. */
get_parent(): EditorFileSystemDirectory;

/** Returns the path to this directory. */
get_path(): string;

/** Returns the subdirectory at index [param idx]. */
get_subdir(): EditorFileSystemDirectory;

/** Returns the number of subdirectories in this directory. */
get_subdir_count(): int;

  connect<T extends SignalsOf<EditorFileSystemDirectory>>(signal: T, method: SignalFunction<EditorFileSystemDirectory[T]>): number;






}

