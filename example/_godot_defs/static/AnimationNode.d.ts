
/**
 * Base resource for [AnimationTree] nodes. In general, it's not used directly, but you can create custom ones with custom blending formulas.
 *
 * Inherit this when creating animation nodes mainly for use in [AnimationNodeBlendTree], otherwise [AnimationRootNode] should be used instead.
 *
*/
declare class AnimationNode extends Resource  {

  
/**
 * Base resource for [AnimationTree] nodes. In general, it's not used directly, but you can create custom ones with custom blending formulas.
 *
 * Inherit this when creating animation nodes mainly for use in [AnimationNodeBlendTree], otherwise [AnimationRootNode] should be used instead.
 *
*/
  new(): AnimationNode; 
  static "new"(): AnimationNode 


/** If [code]true[/code], filtering is enabled. */
filter_enabled: boolean;

/** When inheriting from [AnimationRootNode], implement this virtual method to override the text caption for this animation node. */
protected _get_caption(): string;

/** When inheriting from [AnimationRootNode], implement this virtual method to return a child animation node by its [param name]. */
protected _get_child_by_name(): AnimationNode;

/** When inheriting from [AnimationRootNode], implement this virtual method to return all children animation nodes in order as a [code]name: node[/code] dictionary. */
protected _get_child_nodes(): Dictionary<any, any>;

/** When inheriting from [AnimationRootNode], implement this virtual method to return the default value of a [param parameter]. Parameters are custom local memory used for your animation nodes, given a resource can be reused in multiple trees. */
protected _get_parameter_default_value(): any;

/** When inheriting from [AnimationRootNode], implement this virtual method to return a list of the properties on this animation node. Parameters are custom local memory used for your animation nodes, given a resource can be reused in multiple trees. Format is similar to [method Object.get_property_list]. */
protected _get_parameter_list(): any[];

/** When inheriting from [AnimationRootNode], implement this virtual method to return whether the blend tree editor should display filter editing on this animation node. */
protected _has_filter(): boolean;

/** When inheriting from [AnimationRootNode], implement this virtual method to return whether the [param parameter] is read-only. Parameters are custom local memory used for your animation nodes, given a resource can be reused in multiple trees. */
protected _is_parameter_read_only(): boolean;

/**
 * When inheriting from [AnimationRootNode], implement this virtual method to run some code when this animation node is processed. The [param time] parameter is a relative delta, unless [param seek] is `true`, in which case it is absolute.
 *
 * Here, call the [method blend_input], [method blend_node] or [method blend_animation] functions. You can also use [method get_parameter] and [method set_parameter] to modify local memory.
 *
 * This function should return the time left for the current animation to finish (if unsure, pass the value from the main blend being called).
 *
*/
protected _process(): float;

/** Adds an input to the animation node. This is only useful for animation nodes created for use in an [AnimationNodeBlendTree]. If the addition fails, returns [code]false[/code]. */
add_input(): boolean;

/**
 * Blend an animation by [param blend] amount (name must be valid in the linked [AnimationPlayer]). A [param time] and [param delta] may be passed, as well as whether [param seeked] happened.
 *
 * A [param looped_flag] is used by internal processing immediately after the loop. See also [enum Animation.LoopedFlag].
 *
*/
blend_animation(): void;

/** Blend an input. This is only useful for animation nodes created for an [AnimationNodeBlendTree]. The [param time] parameter is a relative delta, unless [param seek] is [code]true[/code], in which case it is absolute. A filter mode may be optionally passed (see [enum FilterAction] for options). */
blend_input(): float;

/** Blend another animation node (in case this animation node contains children animation nodes). This function is only useful if you inherit from [AnimationRootNode] instead, else editors will not display your animation node for addition. */
blend_node(): float;

/** Returns the input index which corresponds to [param name]. If not found, returns [code]-1[/code]. */
find_input(): int;

/** Amount of inputs in this animation node, only useful for animation nodes that go into [AnimationNodeBlendTree]. */
get_input_count(): int;

/** Gets the name of an input by index. */
get_input_name(): string;

/** Gets the value of a parameter. Parameters are custom local memory used for your animation nodes, given a resource can be reused in multiple trees. */
get_parameter(): any;

/** Returns whether the given path is filtered. */
is_path_filtered(): boolean;

/** Removes an input, call this only when inactive. */
remove_input(): void;

/** Adds or removes a path for the filter. */
set_filter_path(): void;

/** Sets the name of the input at the given [param input] index. If the setting fails, returns [code]false[/code]. */
set_input_name(): boolean;

/** Sets a custom parameter. These are used as local memory, because resources can be reused across the tree or scenes. */
set_parameter(): void;

  connect<T extends SignalsOf<AnimationNode>>(signal: T, method: SignalFunction<AnimationNode[T]>): number;



/**
 * Do not use filtering.
 *
*/
static FILTER_IGNORE: any;

/**
 * Paths matching the filter will be allowed to pass.
 *
*/
static FILTER_PASS: any;

/**
 * Paths matching the filter will be discarded.
 *
*/
static FILTER_STOP: any;

/**
 * Paths matching the filter will be blended (by the blend value).
 *
*/
static FILTER_BLEND: any;


/**
 * Emitted by nodes that inherit from this class and that have an internal tree when one of their animation nodes removes. The animation nodes that emit this signal are [AnimationNodeBlendSpace1D], [AnimationNodeBlendSpace2D], [AnimationNodeStateMachine], and [AnimationNodeBlendTree].
 *
*/
$animation_node_removed: Signal<() => void>

/**
 * Emitted by nodes that inherit from this class and that have an internal tree when one of their animation node names changes. The animation nodes that emit this signal are [AnimationNodeBlendSpace1D], [AnimationNodeBlendSpace2D], [AnimationNodeStateMachine], and [AnimationNodeBlendTree].
 *
*/
$animation_node_renamed: Signal<() => void>

/**
 * Emitted by nodes that inherit from this class and that have an internal tree when one of their animation nodes changes. The animation nodes that emit this signal are [AnimationNodeBlendSpace1D], [AnimationNodeBlendSpace2D], [AnimationNodeStateMachine], [AnimationNodeBlendTree] and [AnimationNodeTransition].
 *
*/
$tree_changed: Signal<() => void>

}

