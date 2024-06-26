
/**
 * Turning on the option **Load As Placeholder** for an instantiated scene in the editor causes it to be replaced by an [InstancePlaceholder] when running the game, this will not replace the node in the editor. This makes it possible to delay actually loading the scene until calling [method create_instance]. This is useful to avoid loading large scenes all at once by loading parts of it selectively.
 *
 * The [InstancePlaceholder] does not have a transform. This causes any child nodes to be positioned relatively to the [Viewport] from point (0,0), rather than their parent as displayed in the editor. Replacing the placeholder with a scene with a transform will transform children relatively to their parent again.
 *
*/
declare class InstancePlaceholder extends Node  {

  
/**
 * Turning on the option **Load As Placeholder** for an instantiated scene in the editor causes it to be replaced by an [InstancePlaceholder] when running the game, this will not replace the node in the editor. This makes it possible to delay actually loading the scene until calling [method create_instance]. This is useful to avoid loading large scenes all at once by loading parts of it selectively.
 *
 * The [InstancePlaceholder] does not have a transform. This causes any child nodes to be positioned relatively to the [Viewport] from point (0,0), rather than their parent as displayed in the editor. Replacing the placeholder with a scene with a transform will transform children relatively to their parent again.
 *
*/
  new(): InstancePlaceholder; 
  static "new"(): InstancePlaceholder 



/**
 * Call this method to actually load in the node. The created node will be placed as a sibling **above** the [InstancePlaceholder] in the scene tree. The [Node]'s reference is also returned for convenience.
 *
 * **Note:** [method create_instance] is not thread-safe. Use [method Object.call_deferred] if calling from a thread.
 *
*/
create_instance(): Node;

/** Gets the path to the [PackedScene] resource file that is loaded by default when calling [method create_instance]. Not thread-safe. Use [method Object.call_deferred] if calling from a thread. */
get_instance_path(): string;

/**
 * Returns the list of properties that will be applied to the node when [method create_instance] is called.
 *
 * If [param with_order] is `true`, a key named `.order` (note the leading period) is added to the dictionary. This `.order` key is an [Array] of [String] property names specifying the order in which properties will be applied (with index 0 being the first).
 *
*/
get_stored_values(): Dictionary<any, any>;

  connect<T extends SignalsOf<InstancePlaceholder>>(signal: T, method: SignalFunction<InstancePlaceholder[T]>): number;






}

