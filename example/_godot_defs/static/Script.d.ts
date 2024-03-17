
/**
 * A class stored as a resource. A script extends the functionality of all objects that instantiate it.
 *
 * This is the base class for all scripts and should not be used directly. Trying to create a new script with this class will result in an error.
 *
 * The `new` method of a script subclass creates a new instance. [method Object.set_script] extends an existing object, if that object's class matches one of the script's base classes.
 *
*/
declare class Script extends Resource  {

  
/**
 * A class stored as a resource. A script extends the functionality of all objects that instantiate it.
 *
 * This is the base class for all scripts and should not be used directly. Trying to create a new script with this class will result in an error.
 *
 * The `new` method of a script subclass creates a new instance. [method Object.set_script] extends an existing object, if that object's class matches one of the script's base classes.
 *
*/
  new(): Script; 
  static "new"(): Script 


/** The script source code or an empty string if source code is not available. When set, does not reload the class implementation automatically. */
source_code: string;

/** Returns [code]true[/code] if the script can be instantiated. */
can_instantiate(): boolean;

/** Returns the script directly inherited by this script. */
get_base_script(): Script;

/** Returns the script's base type. */
get_instance_base_type(): StringName;

/** Returns the default value of the specified property. */
get_property_default_value(): any;

/** Returns a dictionary containing constant names and their values. */
get_script_constant_map(): Dictionary<any, any>;

/** Returns the list of methods in this [Script]. */
get_script_method_list(): Dictionary[];

/** Returns the list of properties in this [Script]. */
get_script_property_list(): Dictionary[];

/** Returns the list of user signals defined in this [Script]. */
get_script_signal_list(): Dictionary[];

/** Returns [code]true[/code] if the script, or a base class, defines a signal with the given name. */
has_script_signal(): boolean;

/** Returns [code]true[/code] if the script contains non-empty source code. */
has_source_code(): boolean;

/** Returns [code]true[/code] if [param base_object] is an instance of this script. */
instance_has(): boolean;

/** Returns [code]true[/code] if the script is an abstract script. An abstract script does not have a constructor and cannot be instantiated. */
is_abstract(): boolean;

/** Returns [code]true[/code] if the script is a tool script. A tool script can run in the editor. */
is_tool(): boolean;

/** Reloads the script's class implementation. Returns an error code. */
reload(): int;

  connect<T extends SignalsOf<Script>>(signal: T, method: SignalFunction<Script[T]>): number;






}

