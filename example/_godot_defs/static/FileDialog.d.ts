
/**
 * [FileDialog] is a preset dialog used to choose files and directories in the filesystem. It supports filter masks. [FileDialog] automatically sets its window title according to the [member file_mode]. If you want to use a custom title, disable this by setting [member mode_overrides_title] to `false`.
 *
*/
declare class FileDialog extends ConfirmationDialog  {

  
/**
 * [FileDialog] is a preset dialog used to choose files and directories in the filesystem. It supports filter masks. [FileDialog] automatically sets its window title according to the [member file_mode]. If you want to use a custom title, disable this by setting [member mode_overrides_title] to `false`.
 *
*/
  new(): FileDialog; 
  static "new"(): FileDialog 


/**
 * The file system access scope. See [enum Access] constants.
 *
 * **Warning:** Currently, in sandboxed environments such as Web builds or sandboxed macOS apps, FileDialog cannot access the host file system. See [url=https://github.com/godotengine/godot-proposals/issues/1123]godot-proposals#1123[/url].
 *
*/
access: int;

/** The current working directory of the file dialog. */
current_dir: string;

/** The currently selected file of the file dialog. */
current_file: string;

/** The currently selected file path of the file dialog. */
current_path: string;


/** The dialog's open or save mode, which affects the selection behavior. See [enum FileMode]. */
file_mode: int;

/** The available file type filters. For example, this shows only [code].png[/code] and [code].gd[/code] files: [code]set_filters(PackedStringArray(["*.png ; PNG Images","*.gd ; GDScript Files"]))[/code]. Multiple file types can also be specified in a single filter. [code]"*.png, *.jpg, *.jpeg ; Supported Images"[/code] will show both PNG and JPEG files when selected. */
filters: PackedStringArray;

/** If [code]true[/code], changing the [member file_mode] property will set the window title accordingly (e.g. setting [member file_mode] to [constant FILE_MODE_OPEN_FILE] will change the window title to "Open a File"). */
mode_overrides_title: boolean;

/** If non-empty, the given sub-folder will be "root" of this [FileDialog], i.e. user won't be able to go to its parent directory. */
root_subfolder: string;

/** If [code]true[/code], the dialog will show hidden files. */
show_hidden_files: boolean;


/**
 * If `true`, [member access] is set to [constant ACCESS_FILESYSTEM], and it is supported by the current [DisplayServer], OS native dialog will be used instead of custom one.
 *
 * **Note:** On macOS, sandboxed apps always use native dialogs to access host filesystem.
 *
*/
use_native_dialog: boolean;

/**
 * Adds a comma-delimited file name [param filter] option to the [FileDialog] with an optional [param description], which restricts what files can be picked.
 *
 * A [param filter] should be of the form `"filename.extension"`, where filename and extension can be `*` to match any string. Filters starting with `.` (i.e. empty filenames) are not allowed.
 *
 * For example, a [param filter] of `"*.png, *.jpg"` and a [param description] of `"Images"` results in filter text "Images (*.png, *.jpg)".
 *
*/
add_filter(): void;

/** Clear all the added filters in the dialog. */
clear_filters(): void;

/** Clear all currently selected items in the dialog. */
deselect_all(): void;

/**
 * Returns the LineEdit for the selected file.
 *
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.
 *
*/
get_line_edit(): LineEdit;

/**
 * Returns the vertical box container of the dialog, custom controls can be added to it.
 *
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.
 *
*/
get_vbox(): VBoxContainer;

/** Invalidate and update the current dialog content list. */
invalidate(): void;

  connect<T extends SignalsOf<FileDialog>>(signal: T, method: SignalFunction<FileDialog[T]>): number;



/**
 * The dialog allows selecting one, and only one file.
 *
*/
static FILE_MODE_OPEN_FILE: any;

/**
 * The dialog allows selecting multiple files.
 *
*/
static FILE_MODE_OPEN_FILES: any;

/**
 * The dialog only allows selecting a directory, disallowing the selection of any file.
 *
*/
static FILE_MODE_OPEN_DIR: any;

/**
 * The dialog allows selecting one file or directory.
 *
*/
static FILE_MODE_OPEN_ANY: any;

/**
 * The dialog will warn when a file exists.
 *
*/
static FILE_MODE_SAVE_FILE: any;

/**
 * The dialog only allows accessing files under the [Resource] path (`res://`).
 *
*/
static ACCESS_RESOURCES: any;

/**
 * The dialog only allows accessing files under user data path (`user://`).
 *
*/
static ACCESS_USERDATA: any;

/**
 * The dialog allows accessing files on the whole file system.
 *
*/
static ACCESS_FILESYSTEM: any;


/**
 * Emitted when the user selects a directory.
 *
*/
$dir_selected: Signal<() => void>

/**
 * Emitted when the user selects a file by double-clicking it or pressing the **OK** button.
 *
*/
$file_selected: Signal<() => void>

/**
 * Emitted when the user selects multiple files.
 *
*/
$files_selected: Signal<() => void>

}

