
/**
 * Defines the API that the editor uses to extract information from the underlying VCS. The implementation of this API is included in VCS plugins, which are GDExtension plugins that inherit [EditorVCSInterface] and are attached (on demand) to the singleton instance of [EditorVCSInterface]. Instead of performing the task themselves, all the virtual functions listed below are calling the internally overridden functions in the VCS plugins to provide a plug-n-play experience. A custom VCS plugin is supposed to inherit from [EditorVCSInterface] and override each of these virtual functions.
 *
*/
declare class EditorVCSInterface extends Object  {

  
/**
 * Defines the API that the editor uses to extract information from the underlying VCS. The implementation of this API is included in VCS plugins, which are GDExtension plugins that inherit [EditorVCSInterface] and are attached (on demand) to the singleton instance of [EditorVCSInterface]. Instead of performing the task themselves, all the virtual functions listed below are calling the internally overridden functions in the VCS plugins to provide a plug-n-play experience. A custom VCS plugin is supposed to inherit from [EditorVCSInterface] and override each of these virtual functions.
 *
*/
  new(): EditorVCSInterface; 
  static "new"(): EditorVCSInterface 



/** Checks out a [param branch_name] in the VCS. */
protected _checkout_branch(): boolean;

/** Commits the currently staged changes and applies the commit [param msg] to the resulting commit. */
protected _commit(): void;

/** Creates a new branch named [param branch_name] in the VCS. */
protected _create_branch(): void;

/** Creates a new remote destination with name [param remote_name] and points it to [param remote_url]. This can be an HTTPS remote or an SSH remote. */
protected _create_remote(): void;

/** Discards the changes made in a file present at [param file_path]. */
protected _discard_file(): void;

/** Fetches new changes from the [param remote], but doesn't write changes to the current working directory. Equivalent to [code]git fetch[/code]. */
protected _fetch(): void;

/** Gets an instance of an [Array] of [String]s containing available branch names in the VCS. */
protected _get_branch_list(): String[];

/** Gets the current branch name defined in the VCS. */
protected _get_current_branch_name(): string;

/** Returns an array of [Dictionary] items (see [method create_diff_file], [method create_diff_hunk], [method create_diff_line], [method add_line_diffs_into_diff_hunk] and [method add_diff_hunks_into_diff_file]), each containing information about a diff. If [param identifier] is a file path, returns a file diff, and if it is a commit identifier, then returns a commit diff. */
protected _get_diff(): Dictionary[];

/** Returns an [Array] of [Dictionary] items (see [method create_diff_hunk]), each containing a line diff between a file at [param file_path] and the [param text] which is passed in. */
protected _get_line_diff(): Dictionary[];

/** Returns an [Array] of [Dictionary] items (see [method create_status_file]), each containing the status data of every modified file in the project folder. */
protected _get_modified_files_data(): Dictionary[];

/** Returns an [Array] of [Dictionary] items (see [method create_commit]), each containing the data for a past commit. */
protected _get_previous_commits(): Dictionary[];

/** Returns an [Array] of [String]s, each containing the name of a remote configured in the VCS. */
protected _get_remotes(): String[];

/** Returns the name of the underlying VCS provider. */
protected _get_vcs_name(): string;

/** Initializes the VCS plugin when called from the editor. Returns whether or not the plugin was successfully initialized. A VCS project is initialized at [param project_path]. */
protected _initialize(): boolean;

/** Pulls changes from the remote. This can give rise to merge conflicts. */
protected _pull(): void;

/** Pushes changes to the [param remote]. If [param force] is [code]true[/code], a force push will override the change history already present on the remote. */
protected _push(): void;

/** Remove a branch from the local VCS. */
protected _remove_branch(): void;

/** Remove a remote from the local VCS. */
protected _remove_remote(): void;

/** Set user credentials in the underlying VCS. [param username] and [param password] are used only during HTTPS authentication unless not already mentioned in the remote URL. [param ssh_public_key_path], [param ssh_private_key_path], and [param ssh_passphrase] are only used during SSH authentication. */
protected _set_credentials(): void;

/** Shuts down VCS plugin instance. Called when the user either closes the editor or shuts down the VCS plugin through the editor UI. */
protected _shut_down(): boolean;

/** Stages the file present at [param file_path] to the staged area. */
protected _stage_file(): void;

/** Unstages the file present at [param file_path] from the staged area to the unstaged area. */
protected _unstage_file(): void;

/** Helper function to add an array of [param diff_hunks] into a [param diff_file]. */
add_diff_hunks_into_diff_file(): Dictionary<any, any>;

/** Helper function to add an array of [param line_diffs] into a [param diff_hunk]. */
add_line_diffs_into_diff_hunk(): Dictionary<any, any>;

/** Helper function to create a commit [Dictionary] item. [param msg] is the commit message of the commit. [param author] is a single human-readable string containing all the author's details, e.g. the email and name configured in the VCS. [param id] is the identifier of the commit, in whichever format your VCS may provide an identifier to commits. [param unix_timestamp] is the UTC Unix timestamp of when the commit was created. [param offset_minutes] is the timezone offset in minutes, recorded from the system timezone where the commit was created. */
create_commit(): Dictionary<any, any>;

/** Helper function to create a [Dictionary] for storing old and new diff file paths. */
create_diff_file(): Dictionary<any, any>;

/** Helper function to create a [Dictionary] for storing diff hunk data. [param old_start] is the starting line number in old file. [param new_start] is the starting line number in new file. [param old_lines] is the number of lines in the old file. [param new_lines] is the number of lines in the new file. */
create_diff_hunk(): Dictionary<any, any>;

/** Helper function to create a [Dictionary] for storing a line diff. [param new_line_no] is the line number in the new file (can be [code]-1[/code] if the line is deleted). [param old_line_no] is the line number in the old file (can be [code]-1[/code] if the line is added). [param content] is the diff text. [param status] is a single character string which stores the line origin. */
create_diff_line(): Dictionary<any, any>;

/** Helper function to create a [Dictionary] used by editor to read the status of a file. */
create_status_file(): Dictionary<any, any>;

/** Pops up an error message in the editor which is shown as coming from the underlying VCS. Use this to show VCS specific error messages. */
popup_error(): void;

  connect<T extends SignalsOf<EditorVCSInterface>>(signal: T, method: SignalFunction<EditorVCSInterface[T]>): number;



/**
 * A new file has been added.
 *
*/
static CHANGE_TYPE_NEW: any;

/**
 * An earlier added file has been modified.
 *
*/
static CHANGE_TYPE_MODIFIED: any;

/**
 * An earlier added file has been renamed.
 *
*/
static CHANGE_TYPE_RENAMED: any;

/**
 * An earlier added file has been deleted.
 *
*/
static CHANGE_TYPE_DELETED: any;

/**
 * An earlier added file has been typechanged.
 *
*/
static CHANGE_TYPE_TYPECHANGE: any;

/**
 * A file is left unmerged.
 *
*/
static CHANGE_TYPE_UNMERGED: any;

/**
 * A commit is encountered from the commit area.
 *
*/
static TREE_AREA_COMMIT: any;

/**
 * A file is encountered from the staged area.
 *
*/
static TREE_AREA_STAGED: any;

/**
 * A file is encountered from the unstaged area.
 *
*/
static TREE_AREA_UNSTAGED: any;



}

