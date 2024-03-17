
/**
*/
declare class ScriptExtension extends Script  {

  
/**
*/
  new(): ScriptExtension; 
  static "new"(): ScriptExtension 



/** No documentation provided. */
protected _can_instantiate(): boolean;

/** No documentation provided. */
protected _editor_can_reload_from_file(): boolean;

/** No documentation provided. */
protected _get_base_script(): Script;

/** No documentation provided. */
protected _get_class_icon_path(): string;

/** No documentation provided. */
protected _get_constants(): Dictionary<any, any>;

/** No documentation provided. */
protected _get_documentation(): Dictionary[];

/** No documentation provided. */
protected _get_global_name(): StringName;

/** No documentation provided. */
protected _get_instance_base_type(): StringName;

/** No documentation provided. */
protected _get_language(): ScriptLanguage;

/** No documentation provided. */
protected _get_member_line(): int;

/** No documentation provided. */
protected _get_members(): StringName[];

/** No documentation provided. */
protected _get_method_info(): Dictionary<any, any>;

/** No documentation provided. */
protected _get_property_default_value(): any;

/** No documentation provided. */
protected _get_rpc_config(): any;

/** No documentation provided. */
protected _get_script_method_list(): Dictionary[];

/** No documentation provided. */
protected _get_script_property_list(): Dictionary[];

/** No documentation provided. */
protected _get_script_signal_list(): Dictionary[];

/** No documentation provided. */
protected _get_source_code(): string;

/** No documentation provided. */
protected _has_method(): boolean;

/** No documentation provided. */
protected _has_property_default_value(): boolean;

/** No documentation provided. */
protected _has_script_signal(): boolean;

/** No documentation provided. */
protected _has_source_code(): boolean;

/** No documentation provided. */
protected _has_static_method(): boolean;

/** No documentation provided. */
protected _inherits_script(): boolean;

/** No documentation provided. */
protected _instance_create(): void*;

/** No documentation provided. */
protected _instance_has(): boolean;

/** Returns [code]true[/code] if the script is an abstract script. An abstract script does not have a constructor and cannot be instantiated. */
protected _is_abstract(): boolean;

/** No documentation provided. */
protected _is_placeholder_fallback_enabled(): boolean;

/** No documentation provided. */
protected _is_tool(): boolean;

/** No documentation provided. */
protected _is_valid(): boolean;

/** No documentation provided. */
protected _placeholder_erased(): void;

/** No documentation provided. */
protected _placeholder_instance_create(): void*;

/** No documentation provided. */
protected _reload(): int;

/** No documentation provided. */
protected _set_source_code(): void;

/** No documentation provided. */
protected _update_exports(): void;

  connect<T extends SignalsOf<ScriptExtension>>(signal: T, method: SignalFunction<ScriptExtension[T]>): number;






}

