
/**
 * CodeEdit is a specialized [TextEdit] designed for editing plain text code files. It has many features commonly found in code editors such as line numbers, line folding, code completion, indent management, and string/comment management.
 *
 * **Note:** Regardless of locale, [CodeEdit] will by default always use left-to-right text direction to correctly display source code.
 *
*/
declare class CodeEdit extends TextEdit  {

  
/**
 * CodeEdit is a specialized [TextEdit] designed for editing plain text code files. It has many features commonly found in code editors such as line numbers, line folding, code completion, indent management, and string/comment management.
 *
 * **Note:** Regardless of locale, [CodeEdit] will by default always use left-to-right text direction to correctly display source code.
 *
*/
  new(): CodeEdit; 
  static "new"(): CodeEdit 


/** Sets whether brace pairs should be autocompleted. */
auto_brace_completion_enabled: boolean;

/** Highlight mismatching brace pairs. */
auto_brace_completion_highlight_matching: boolean;

/** Sets the brace pairs to be autocompleted. */
auto_brace_completion_pairs: Dictionary<any, any>;

/** Sets whether code completion is allowed. */
code_completion_enabled: boolean;

/** Sets prefixes that will trigger code completion. */
code_completion_prefixes: String[];

/** Sets the comment delimiters. All existing comment delimiters will be removed. */
delimiter_comments: String[];

/** Sets the string delimiters. All existing string delimiters will be removed. */
delimiter_strings: String[];

/** Sets if bookmarked should be drawn in the gutter. This gutter is shared with breakpoints and executing lines. */
gutters_draw_bookmarks: boolean;

/** Sets if breakpoints should be drawn in the gutter. This gutter is shared with bookmarks and executing lines. */
gutters_draw_breakpoints_gutter: boolean;

/** Sets if executing lines should be marked in the gutter. This gutter is shared with breakpoints and bookmarks lines. */
gutters_draw_executing_lines: boolean;

/** Sets if foldable lines icons should be drawn in the gutter. */
gutters_draw_fold_gutter: boolean;

/** Sets if line numbers should be drawn in the gutter. */
gutters_draw_line_numbers: boolean;

/** Sets if line numbers drawn in the gutter are zero padded. */
gutters_zero_pad_line_numbers: boolean;

/** Sets whether automatic indent are enabled, this will add an extra indent if a prefix or brace is found. */
indent_automatic: boolean;

/** Prefixes to trigger an automatic indent. */
indent_automatic_prefixes: String[];

/** Size of the tabulation indent (one [kbd]Tab[/kbd] press) in characters. If [member indent_use_spaces] is enabled the number of spaces to use. */
indent_size: int;

/** Use spaces instead of tabs for indentation. */
indent_use_spaces: boolean;


/** Sets whether line folding is allowed. */
line_folding: boolean;

/** Draws vertical lines at the provided columns. The first entry is considered a main hard guideline and is draw more prominently. */
line_length_guidelines: int[];

/** Set when a validated word from [signal symbol_validate] is clicked, the [signal symbol_lookup] should be emitted. */
symbol_lookup_on_click: boolean;


/** Override this method to define how the selected entry should be inserted. If [param replace] is true, any existing text should be replaced. */
protected _confirm_code_completion(): void;

/**
 * Override this method to define what items in [param candidates] should be displayed.
 *
 * Both [param candidates] and the return is a [Array] of [Dictionary], see [method get_code_completion_option] for [Dictionary] content.
 *
*/
protected _filter_code_completion_candidates(): Dictionary[];

/** Override this method to define what happens when the user requests code completion. If [param force] is true, any checks should be bypassed. */
protected _request_code_completion(): void;

/**
 * Adds a brace pair.
 *
 * Both the start and end keys must be symbols. Only the start key has to be unique.
 *
*/
add_auto_brace_completion_pair(): void;

/**
 * Submits an item to the queue of potential candidates for the autocomplete menu. Call [method update_code_completion_options] to update the list.
 *
 * [param location] indicates location of the option relative to the location of the code completion query. See [enum CodeEdit.CodeCompletionLocation] for how to set this value.
 *
 * **Note:** This list will replace all current candidates.
 *
*/
add_code_completion_option(): void;

/**
 * Adds a comment delimiter.
 *
 * Both the start and end keys must be symbols. Only the start key has to be unique.
 *
 * [param line_only] denotes if the region should continue until the end of the line or carry over on to the next line. If the end key is blank this is automatically set to `true`.
 *
*/
add_comment_delimiter(): void;

/**
 * Adds a string delimiter.
 *
 * Both the start and end keys must be symbols. Only the start key has to be unique.
 *
 * [param line_only] denotes if the region should continue until the end of the line or carry over on to the next line. If the end key is blank this is automatically set to `true`.
 *
*/
add_string_delimiter(): void;

/** Returns if the given line is foldable, that is, it has indented lines right below it or a comment / string block. */
can_fold_line(): boolean;

/** Cancels the autocomplete menu. */
cancel_code_completion(): void;

/** Clears all bookmarked lines. */
clear_bookmarked_lines(): void;

/** Clears all breakpointed lines. */
clear_breakpointed_lines(): void;

/** Removes all comment delimiters. */
clear_comment_delimiters(): void;

/** Clears all executed lines. */
clear_executing_lines(): void;

/** Removes all string delimiters. */
clear_string_delimiters(): void;

/** Inserts the selected entry into the text. If [param replace] is true, any existing text is replaced rather than merged. */
confirm_code_completion(): void;

/**
 * Converts the indents of lines between [param from_line] and [param to_line] to tabs or spaces as set by [member indent_use_spaces].
 *
 * Values of `-1` convert the entire text.
 *
*/
convert_indent(): void;

/**
 * Creates a new code region with the selection. At least one single line comment delimiter have to be defined (see [method add_comment_delimiter]).
 *
 * A code region is a part of code that is highlighted when folded and can help organize your script.
 *
 * Code region start and end tags can be customized (see [method set_code_region_tags]).
 *
 * Code regions are delimited using start and end tags (respectively `region` and `endregion` by default) preceded by one line comment delimiter. (eg. `#region` and `#endregion`)
 *
*/
create_code_region(): void;

/** Perform an indent as if the user activated the "ui_text_indent" action. */
do_indent(): void;

/** Duplicates all lines currently selected with any caret. Duplicates the entire line beneath the current one no matter where the caret is within the line. */
duplicate_lines(): void;

/** Folds all lines that are possible to be folded (see [method can_fold_line]). */
fold_all_lines(): void;

/** Folds the given line, if possible (see [method can_fold_line]). */
fold_line(): void;

/** Gets the matching auto brace close key for [param open_key]. */
get_auto_brace_completion_close_key(): string;

/** Gets all bookmarked lines. */
get_bookmarked_lines(): PackedInt32Array;

/** Gets all breakpointed lines. */
get_breakpointed_lines(): PackedInt32Array;

/**
 * Gets the completion option at [param index]. The return [Dictionary] has the following key-values:
 *
 * `kind`: [enum CodeCompletionKind]
 *
 * `display_text`: Text that is shown on the autocomplete menu.
 *
 * `insert_text`: Text that is to be inserted when this item is selected.
 *
 * `font_color`: Color of the text on the autocomplete menu.
 *
 * `icon`: Icon to draw on the autocomplete menu.
 *
 * `default_value`: Value of the symbol.
 *
*/
get_code_completion_option(): Dictionary<any, any>;

/** Gets all completion options, see [method get_code_completion_option] for return content. */
get_code_completion_options(): Dictionary[];

/** Gets the index of the current selected completion option. */
get_code_completion_selected_index(): int;

/** Returns the code region end tag (without comment delimiter). */
get_code_region_end_tag(): string;

/** Returns the code region start tag (without comment delimiter). */
get_code_region_start_tag(): string;

/** Gets the end key for a string or comment region index. */
get_delimiter_end_key(): string;

/** If [param line] [param column] is in a string or comment, returns the end position of the region. If not or no end could be found, both [Vector2] values will be [code]-1[/code]. */
get_delimiter_end_position(): Vector2;

/** Gets the start key for a string or comment region index. */
get_delimiter_start_key(): string;

/** If [param line] [param column] is in a string or comment, returns the start position of the region. If not or no start could be found, both [Vector2] values will be [code]-1[/code]. */
get_delimiter_start_position(): Vector2;

/** Gets all executing lines. */
get_executing_lines(): PackedInt32Array;

/** Returns all lines that are current folded. */
get_folded_lines(): int[];

/** Returns the full text with char [code]0xFFFF[/code] at the caret location. */
get_text_for_code_completion(): string;

/** Returns the full text with char [code]0xFFFF[/code] at the cursor location. */
get_text_for_symbol_lookup(): string;

/** Returns the full text with char [code]0xFFFF[/code] at the specified location. */
get_text_with_cursor_char(): string;

/** Returns [code]true[/code] if close key [param close_key] exists. */
has_auto_brace_completion_close_key(): boolean;

/** Returns [code]true[/code] if open key [param open_key] exists. */
has_auto_brace_completion_open_key(): boolean;

/** Returns [code]true[/code] if comment [param start_key] exists. */
has_comment_delimiter(): boolean;

/** Returns [code]true[/code] if string [param start_key] exists. */
has_string_delimiter(): boolean;

/** Indents selected lines, or in the case of no selection the caret line by one. */
indent_lines(): void;

/** Returns delimiter index if [param line] [param column] is in a comment. If [param column] is not provided, will return delimiter index if the entire [param line] is a comment. Otherwise [code]-1[/code]. */
is_in_comment(): int;

/** Returns the delimiter index if [param line] [param column] is in a string. If [param column] is not provided, will return the delimiter index if the entire [param line] is a string. Otherwise [code]-1[/code]. */
is_in_string(): int;

/** Returns whether the line at the specified index is bookmarked or not. */
is_line_bookmarked(): boolean;

/** Returns whether the line at the specified index is breakpointed or not. */
is_line_breakpointed(): boolean;

/** Returns whether the line at the specified index is a code region end. */
is_line_code_region_end(): boolean;

/** Returns whether the line at the specified index is a code region start. */
is_line_code_region_start(): boolean;

/** Returns whether the line at the specified index is marked as executing or not. */
is_line_executing(): boolean;

/** Returns whether the line at the specified index is folded or not. */
is_line_folded(): boolean;

/** Removes the comment delimiter with [param start_key]. */
remove_comment_delimiter(): void;

/** Removes the string delimiter with [param start_key]. */
remove_string_delimiter(): void;

/** Emits [signal code_completion_requested], if [param force] is true will bypass all checks. Otherwise will check that the caret is in a word or in front of a prefix. Will ignore the request if all current options are of type file path, node path or signal. */
request_code_completion(): void;

/** Sets the current selected completion option. */
set_code_completion_selected_index(): void;

/** Sets the code hint text. Pass an empty string to clear. */
set_code_hint(): void;

/** Sets if the code hint should draw below the text. */
set_code_hint_draw_below(): void;

/** Sets the code region start and end tags (without comment delimiter). */
set_code_region_tags(): void;

/** Sets the line as bookmarked. */
set_line_as_bookmarked(): void;

/** Sets the line as breakpointed. */
set_line_as_breakpoint(): void;

/** Sets the line as executing. */
set_line_as_executing(): void;

/** Sets the symbol emitted by [signal symbol_validate] as a valid lookup. */
set_symbol_lookup_word_as_valid(): void;

/** Toggle the folding of the code block at the given line. */
toggle_foldable_line(): void;

/** Unfolds all lines, folded or not. */
unfold_all_lines(): void;

/** Unfolds all lines that were previously folded. */
unfold_line(): void;

/** Unindents selected lines, or in the case of no selection the caret line by one. Same as performing "ui_text_unindent" action. */
unindent_lines(): void;

/**
 * Submits all completion options added with [method add_code_completion_option]. Will try to force the autocomplete menu to popup, if [param force] is `true`.
 *
 * **Note:** This will replace all current candidates.
 *
*/
update_code_completion_options(): void;

  connect<T extends SignalsOf<CodeEdit>>(signal: T, method: SignalFunction<CodeEdit[T]>): number;



/**
 * Marks the option as a class.
 *
*/
static KIND_CLASS: any;

/**
 * Marks the option as a function.
 *
*/
static KIND_FUNCTION: any;

/**
 * Marks the option as a Godot signal.
 *
*/
static KIND_SIGNAL: any;

/**
 * Marks the option as a variable.
 *
*/
static KIND_VARIABLE: any;

/**
 * Marks the option as a member.
 *
*/
static KIND_MEMBER: any;

/**
 * Marks the option as an enum entry.
 *
*/
static KIND_ENUM: any;

/**
 * Marks the option as a constant.
 *
*/
static KIND_CONSTANT: any;

/**
 * Marks the option as a Godot node path.
 *
*/
static KIND_NODE_PATH: any;

/**
 * Marks the option as a file path.
 *
*/
static KIND_FILE_PATH: any;

/**
 * Marks the option as unclassified or plain text.
 *
*/
static KIND_PLAIN_TEXT: any;

/**
 * The option is local to the location of the code completion query - e.g. a local variable. Subsequent value of location represent options from the outer class, the exact value represent how far they are (in terms of inner classes).
 *
*/
static LOCATION_LOCAL: any;

/**
 * The option is from the containing class or a parent class, relative to the location of the code completion query. Perform a bitwise OR with the class depth (e.g. 0 for the local class, 1 for the parent, 2 for the grandparent, etc) to store the depth of an option in the class or a parent class.
 *
*/
static LOCATION_PARENT_MASK: any;

/**
 * The option is from user code which is not local and not in a derived class (e.g. Autoload Singletons).
 *
*/
static LOCATION_OTHER_USER_CODE: any;

/**
 * The option is from other engine code, not covered by the other enum constants - e.g. built-in classes.
 *
*/
static LOCATION_OTHER: any;


/**
 * Emitted when a breakpoint is added or removed from a line. If the line is moved via backspace a removed is emitted at the old line.
 *
*/
$breakpoint_toggled: Signal<() => void>

/**
 * Emitted when the user requests code completion.
 *
*/
$code_completion_requested: Signal<() => void>

/**
 * Emitted when the user has clicked on a valid symbol.
 *
*/
$symbol_lookup: Signal<() => void>

/**
 * Emitted when the user hovers over a symbol. The symbol should be validated and responded to, by calling [method set_symbol_lookup_word_as_valid].
 *
*/
$symbol_validate: Signal<() => void>

}

