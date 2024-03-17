
/**
 * [EditorFileDialog] is an enhanced version of [FileDialog] available only to editor plugins. Additional features include list of favorited/recent files and the ability to see files as thumbnails grid instead of list.
 *
*/
declare class EditorFileDialog extends ConfirmationDialog  {

  
/**
 * [EditorFileDialog] is an enhanced version of [FileDialog] available only to editor plugins. Additional features include list of favorited/recent files and the ability to see files as thumbnails grid instead of list.
 *
*/
  new(): EditorFileDialog; 
  static "new"(): EditorFileDialog 


/** The location from which the user may select a file, including [code]res://[/code], [code]user://[/code], and the local file system. */
access: int;

/** The currently occupied directory. */
current_dir: string;

/** The currently selected file. */
current_file: string;

/** The file system path in the address bar. */
current_path: string;


/** If [code]true[/code], the [EditorFileDialog] will not warn the user before overwriting files. */
disable_overwrite_warning: boolean;

/** The view format in which the [EditorFileDialog] displays resources to the user. */
display_mode: int;

/** The dialog's open or save mode, which affects the selection behavior. See [enum FileMode]. */
file_mode: int;

/** The available file type filters. For example, this shows only [code].png[/code] and [code].gd[/code] files: [code]set_filters(PackedStringArray(["*.png ; PNG Images","*.gd ; GDScript Files"]))[/code]. Multiple file types can also be specified in a single filter. [code]"*.png, *.jpg, *.jpeg ; Supported Images"[/code] will show both PNG and JPEG files when selected. */
filters: PackedStringArray;

/** If [code]true[/code], hidden files and directories will be visible in the [EditorFileDialog]. This property is synchronized with [member EditorSettings.filesystem/file_dialog/show_hidden_files]. */
show_hidden_files: boolean;


/**
 * Adds a comma-delimited file name [param filter] option to the [EditorFileDialog] with an optional [param description], which restricts what files can be picked.
 *
 * A [param filter] should be of the form `"filename.extension"`, where filename and extension can be `*` to match any string. Filters starting with `.` (i.e. empty filenames) are not allowed.
 *
 * For example, a [param filter] of `"*.tscn, *.scn"` and a [param description] of `"Scenes"` results in filter text "Scenes (*.tscn, *.scn)".
 *
*/
add_filter(): void;

/** Adds the given [param menu] to the side of the file dialog with the given [param title] text on top. Only one side menu is allowed. */
add_side_menu(): void;

/** Removes all filters except for "All Files (*)". */
clear_filters(): void;

/**
 * Returns the LineEdit for the selected file.
 *
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.
 *
*/
get_line_edit(): LineEdit;

/**
 * Returns the [VBoxContainer] used to display the file system.
 *
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.
 *
*/
get_vbox(): VBoxContainer;

/** Notify the [EditorFileDialog] that its view of the data is no longer accurate. Updates the view contents on next view update. */
invalidate(): void;

  connect<T extends SignalsOf<EditorFileDialog>>(signal: T, method: SignalFunction<EditorFileDialog[T]>): number;



/**
 * The [EditorFileDialog] can select only one file. Accepting the window will open the file.
 *
*/
static FILE_MODE_OPEN_FILE: any;

/**
 * The [EditorFileDialog] can select multiple files. Accepting the window will open all files.
 *
*/
static FILE_MODE_OPEN_FILES: any;

/**
 * The [EditorFileDialog] can select only one directory. Accepting the window will open the directory.
 *
*/
static FILE_MODE_OPEN_DIR: any;

/**
 * The [EditorFileDialog] can select a file or directory. Accepting the window will open it.
 *
*/
static FILE_MODE_OPEN_ANY: any;

/**
 * The [EditorFileDialog] can select only one file. Accepting the window will save the file.
 *
*/
static FILE_MODE_SAVE_FILE: any;

/**
 * The [EditorFileDialog] can only view `res://` directory contents.
 *
*/
static ACCESS_RESOURCES: any;

/**
 * The [EditorFileDialog] can only view `user://` directory contents.
 *
*/
static ACCESS_USERDATA: any;

/**
 * The [EditorFileDialog] can view the entire local file system.
 *
*/
static ACCESS_FILESYSTEM: any;

/**
 * The [EditorFileDialog] displays resources as thumbnails.
 *
*/
static DISPLAY_THUMBNAILS: any;

/**
 * The [EditorFileDialog] displays resources as a list of filenames.
 *
*/
static DISPLAY_LIST: any;


/**
 * Emitted when a directory is selected.
 *
*/
$dir_selected: Signal<() => void>

/**
 * Emitted when a file is selected.
 *
*/
$file_selected: Signal<() => void>

/**
 * Emitted when multiple files are selected.
 *
*/
$files_selected: Signal<() => void>

}

