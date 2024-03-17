
/**
 * Maintains a list of resources, nodes, exported and overridden properties, and built-in scripts associated with a scene. They cannot be modified from a [SceneState], only accessed. Useful for peeking into what a [PackedScene] contains without instantiating it.
 *
 * This class cannot be instantiated directly, it is retrieved for a given scene as the result of [method PackedScene.get_state].
 *
*/
declare class SceneState extends RefCounted  {

  
/**
 * Maintains a list of resources, nodes, exported and overridden properties, and built-in scripts associated with a scene. They cannot be modified from a [SceneState], only accessed. Useful for peeking into what a [PackedScene] contains without instantiating it.
 *
 * This class cannot be instantiated directly, it is retrieved for a given scene as the result of [method PackedScene.get_state].
 *
*/
  new(): SceneState; 
  static "new"(): SceneState 



/** Returns the list of bound parameters for the signal at [param idx]. */
get_connection_binds(): any[];

/**
 * Returns the number of signal connections in the scene.
 *
 * The `idx` argument used to query connection metadata in other `get_connection_*` methods in the interval `[0, get_connection_count() - 1]`.
 *
*/
get_connection_count(): int;

/** Returns the connection flags for the signal at [param idx]. See [enum Object.ConnectFlags] constants. */
get_connection_flags(): int;

/** Returns the method connected to the signal at [param idx]. */
get_connection_method(): StringName;

/** Returns the name of the signal at [param idx]. */
get_connection_signal(): StringName;

/** Returns the path to the node that owns the signal at [param idx], relative to the root node. */
get_connection_source(): NodePathType;

/** Returns the path to the node that owns the method connected to the signal at [param idx], relative to the root node. */
get_connection_target(): NodePathType;

/** Returns the number of unbound parameters for the signal at [param idx]. */
get_connection_unbinds(): int;

/**
 * Returns the number of nodes in the scene.
 *
 * The `idx` argument used to query node data in other `get_node_*` methods in the interval `[0, get_node_count() - 1]`.
 *
*/
get_node_count(): int;

/** Returns the list of group names associated with the node at [param idx]. */
get_node_groups(): PackedStringArray;

/** Returns the node's index, which is its position relative to its siblings. This is only relevant and saved in scenes for cases where new nodes are added to an instantiated or inherited scene among siblings from the base scene. Despite the name, this index is not related to the [param idx] argument used here and in other methods. */
get_node_index(): int;

/** Returns a [PackedScene] for the node at [param idx] (i.e. the whole branch starting at this node, with its child nodes and resources), or [code]null[/code] if the node is not an instance. */
get_node_instance(): PackedScene<any>;

/** Returns the path to the represented scene file if the node at [param idx] is an [InstancePlaceholder]. */
get_node_instance_placeholder(): string;

/** Returns the name of the node at [param idx]. */
get_node_name(): StringName;

/** Returns the path to the owner of the node at [param idx], relative to the root node. */
get_node_owner_path(): NodePathType;

/**
 * Returns the path to the node at [param idx].
 *
 * If [param for_parent] is `true`, returns the path of the [param idx] node's parent instead.
 *
*/
get_node_path(): NodePathType;

/**
 * Returns the number of exported or overridden properties for the node at [param idx].
 *
 * The `prop_idx` argument used to query node property data in other `get_node_property_*` methods in the interval `[0, get_node_property_count() - 1]`.
 *
*/
get_node_property_count(): int;

/** Returns the name of the property at [param prop_idx] for the node at [param idx]. */
get_node_property_name(): StringName;

/** Returns the value of the property at [param prop_idx] for the node at [param idx]. */
get_node_property_value(): any;

/** Returns the type of the node at [param idx]. */
get_node_type(): StringName;

/** Returns [code]true[/code] if the node at [param idx] is an [InstancePlaceholder]. */
is_node_instance_placeholder(): boolean;

  connect<T extends SignalsOf<SceneState>>(signal: T, method: SignalFunction<SceneState[T]>): number;



/**
 * If passed to [method PackedScene.instantiate], blocks edits to the scene state.
 *
*/
static GEN_EDIT_STATE_DISABLED: any;

/**
 * If passed to [method PackedScene.instantiate], provides inherited scene resources to the local scene.
 *
 * **Note:** Only available in editor builds.
 *
*/
static GEN_EDIT_STATE_INSTANCE: any;

/**
 * If passed to [method PackedScene.instantiate], provides local scene resources to the local scene. Only the main scene should receive the main edit state.
 *
 * **Note:** Only available in editor builds.
 *
*/
static GEN_EDIT_STATE_MAIN: any;

/**
 * If passed to [method PackedScene.instantiate], it's similar to [constant GEN_EDIT_STATE_MAIN], but for the case where the scene is being instantiated to be the base of another one.
 *
 * **Note:** Only available in editor builds.
 *
*/
static GEN_EDIT_STATE_MAIN_INHERITED: any;



}

