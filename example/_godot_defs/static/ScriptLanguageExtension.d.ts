
/**
*/
declare class ScriptLanguageExtension extends ScriptLanguage  {

  
/**
*/
  new(): ScriptLanguageExtension; 
  static "new"(): ScriptLanguageExtension 



/** No documentation provided. */
protected _add_global_constant(): void;

/** No documentation provided. */
protected _add_named_global_constant(): void;

/** No documentation provided. */
protected _auto_indent_code(): string;

/** No documentation provided. */
protected _can_inherit_from_file(): boolean;

/** No documentation provided. */
protected _complete_code(): Dictionary<any, any>;

/** No documentation provided. */
protected _create_script(): Object;

/** No documentation provided. */
protected _debug_get_current_stack_info(): Dictionary[];

/** No documentation provided. */
protected _debug_get_error(): string;

/** No documentation provided. */
protected _debug_get_globals(): Dictionary<any, any>;

/** No documentation provided. */
protected _debug_get_stack_level_count(): int;

/** No documentation provided. */
protected _debug_get_stack_level_function(): string;

/** No documentation provided. */
protected _debug_get_stack_level_instance(): void*;

/** No documentation provided. */
protected _debug_get_stack_level_line(): int;

/** No documentation provided. */
protected _debug_get_stack_level_locals(): Dictionary<any, any>;

/** No documentation provided. */
protected _debug_get_stack_level_members(): Dictionary<any, any>;

/** No documentation provided. */
protected _debug_parse_stack_level_expression(): string;

/** No documentation provided. */
protected _find_function(): int;

/** No documentation provided. */
protected _finish(): void;

/** No documentation provided. */
protected _frame(): void;

/** No documentation provided. */
protected _get_built_in_templates(): Dictionary[];

/** No documentation provided. */
protected _get_comment_delimiters(): PackedStringArray;

/** No documentation provided. */
protected _get_doc_comment_delimiters(): PackedStringArray;

/** No documentation provided. */
protected _get_extension(): string;

/** No documentation provided. */
protected _get_global_class_name(): Dictionary<any, any>;

/** No documentation provided. */
protected _get_name(): string;

/** No documentation provided. */
protected _get_public_annotations(): Dictionary[];

/** No documentation provided. */
protected _get_public_constants(): Dictionary<any, any>;

/** No documentation provided. */
protected _get_public_functions(): Dictionary[];

/** No documentation provided. */
protected _get_recognized_extensions(): PackedStringArray;

/** No documentation provided. */
protected _get_reserved_words(): PackedStringArray;

/** No documentation provided. */
protected _get_string_delimiters(): PackedStringArray;

/** No documentation provided. */
protected _get_type(): string;

/** No documentation provided. */
protected _handles_global_class_type(): boolean;

/** [i]Deprecated.[/i] This method is not called by the engine. */
protected _has_named_classes(): boolean;

/** No documentation provided. */
protected _init(): void;

/** No documentation provided. */
protected _is_control_flow_keyword(): boolean;

/** No documentation provided. */
protected _is_using_templates(): boolean;

/** No documentation provided. */
protected _lookup_code(): Dictionary<any, any>;

/** No documentation provided. */
protected _make_function(): string;

/** No documentation provided. */
protected _make_template(): Script;

/** No documentation provided. */
protected _open_in_external_editor(): int;

/** No documentation provided. */
protected _overrides_external_editor(): boolean;

/** No documentation provided. */
protected _profiling_get_accumulated_data(): int;

/** No documentation provided. */
protected _profiling_get_frame_data(): int;

/** No documentation provided. */
protected _profiling_start(): void;

/** No documentation provided. */
protected _profiling_stop(): void;

/** No documentation provided. */
protected _reload_all_scripts(): void;

/** No documentation provided. */
protected _reload_tool_script(): void;

/** No documentation provided. */
protected _remove_named_global_constant(): void;

/** No documentation provided. */
protected _supports_builtin_mode(): boolean;

/** No documentation provided. */
protected _supports_documentation(): boolean;

/** No documentation provided. */
protected _thread_enter(): void;

/** No documentation provided. */
protected _thread_exit(): void;

/** No documentation provided. */
protected _validate(): Dictionary<any, any>;

/** No documentation provided. */
protected _validate_path(): string;

  connect<T extends SignalsOf<ScriptLanguageExtension>>(signal: T, method: SignalFunction<ScriptLanguageExtension[T]>): number;



/** No documentation provided. */
static LOOKUP_RESULT_SCRIPT_LOCATION: any;

/** No documentation provided. */
static LOOKUP_RESULT_CLASS: any;

/** No documentation provided. */
static LOOKUP_RESULT_CLASS_CONSTANT: any;

/** No documentation provided. */
static LOOKUP_RESULT_CLASS_PROPERTY: any;

/** No documentation provided. */
static LOOKUP_RESULT_CLASS_METHOD: any;

/** No documentation provided. */
static LOOKUP_RESULT_CLASS_SIGNAL: any;

/** No documentation provided. */
static LOOKUP_RESULT_CLASS_ENUM: any;

/** No documentation provided. */
static LOOKUP_RESULT_CLASS_TBD_GLOBALSCOPE: any;

/** No documentation provided. */
static LOOKUP_RESULT_CLASS_ANNOTATION: any;

/** No documentation provided. */
static LOOKUP_RESULT_MAX: any;

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

/** No documentation provided. */
static CODE_COMPLETION_KIND_CLASS: any;

/** No documentation provided. */
static CODE_COMPLETION_KIND_FUNCTION: any;

/** No documentation provided. */
static CODE_COMPLETION_KIND_SIGNAL: any;

/** No documentation provided. */
static CODE_COMPLETION_KIND_VARIABLE: any;

/** No documentation provided. */
static CODE_COMPLETION_KIND_MEMBER: any;

/** No documentation provided. */
static CODE_COMPLETION_KIND_ENUM: any;

/** No documentation provided. */
static CODE_COMPLETION_KIND_CONSTANT: any;

/** No documentation provided. */
static CODE_COMPLETION_KIND_NODE_PATH: any;

/** No documentation provided. */
static CODE_COMPLETION_KIND_FILE_PATH: any;

/** No documentation provided. */
static CODE_COMPLETION_KIND_PLAIN_TEXT: any;

/** No documentation provided. */
static CODE_COMPLETION_KIND_MAX: any;



}

