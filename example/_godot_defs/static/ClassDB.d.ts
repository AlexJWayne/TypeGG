
/**
 * Provides access to metadata stored for every available class.
 *
*/
declare class ClassDBClass extends Object  {

  
/**
 * Provides access to metadata stored for every available class.
 *
*/
  new(): ClassDBClass; 
  static "new"(): ClassDBClass 



/** Returns [code]true[/code] if objects can be instantiated from the specified [param class], otherwise returns [code]false[/code]. */
can_instantiate(): boolean;

/** Returns whether the specified [param class] is available or not. */
class_exists(): boolean;

/** Returns an array with all the keys in [param enum] of [param class] or its ancestry. */
class_get_enum_constants(): PackedStringArray;

/** Returns an array with all the enums of [param class] or its ancestry. */
class_get_enum_list(): PackedStringArray;

/** Returns the value of the integer constant [param name] of [param class] or its ancestry. Always returns 0 when the constant could not be found. */
class_get_integer_constant(): int;

/** Returns which enum the integer constant [param name] of [param class] or its ancestry belongs to. */
class_get_integer_constant_enum(): StringName;

/** Returns an array with the names all the integer constants of [param class] or its ancestry. */
class_get_integer_constant_list(): PackedStringArray;

/**
 * Returns an array with all the methods of [param class] or its ancestry if [param no_inheritance] is `false`. Every element of the array is a [Dictionary] with the following keys: `args`, `default_args`, `flags`, `id`, `name`, `return: (class_name, hint, hint_string, name, type, usage)`.
 *
 * **Note:** In exported release builds the debug info is not available, so the returned dictionaries will contain only method names.
 *
*/
class_get_method_list(): Dictionary[];

/** Returns the value of [param property] of [param object] or its ancestry. */
class_get_property(): any;

/** Returns an array with all the properties of [param class] or its ancestry if [param no_inheritance] is [code]false[/code]. */
class_get_property_list(): Dictionary[];

/** Returns the [param signal] data of [param class] or its ancestry. The returned value is a [Dictionary] with the following keys: [code]args[/code], [code]default_args[/code], [code]flags[/code], [code]id[/code], [code]name[/code], [code]return: (class_name, hint, hint_string, name, type, usage)[/code]. */
class_get_signal(): Dictionary<any, any>;

/** Returns an array with all the signals of [param class] or its ancestry if [param no_inheritance] is [code]false[/code]. Every element of the array is a [Dictionary] as described in [method class_get_signal]. */
class_get_signal_list(): Dictionary[];

/** Returns whether [param class] or its ancestry has an enum called [param name] or not. */
class_has_enum(): boolean;

/** Returns whether [param class] or its ancestry has an integer constant called [param name] or not. */
class_has_integer_constant(): boolean;

/** Returns whether [param class] (or its ancestry if [param no_inheritance] is [code]false[/code]) has a method called [param method] or not. */
class_has_method(): boolean;

/** Returns whether [param class] or its ancestry has a signal called [param signal] or not. */
class_has_signal(): boolean;

/** Sets [param property] value of [param object] to [param value]. */
class_set_property(): int;

/** Returns the names of all the classes available. */
get_class_list(): PackedStringArray;

/** Returns the names of all the classes that directly or indirectly inherit from [param class]. */
get_inheriters_from_class(): PackedStringArray;

/** Returns the parent class of [param class]. */
get_parent_class(): StringName;

/** Creates an instance of [param class]. */
instantiate(): any;

/** Returns whether this [param class] is enabled or not. */
is_class_enabled(): boolean;

/** Returns whether [param inherits] is an ancestor of [param class] or not. */
is_parent_class(): boolean;

  connect<T extends SignalsOf<ClassDBClass>>(signal: T, method: SignalFunction<ClassDBClass[T]>): number;






}

