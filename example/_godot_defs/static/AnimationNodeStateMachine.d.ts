
/**
 * Contains multiple [AnimationRootNode]s representing animation states, connected in a graph. State transitions can be configured to happen automatically or via code, using a shortest-path algorithm. Retrieve the [AnimationNodeStateMachinePlayback] object from the [AnimationTree] node to control it programmatically.
 *
 * **Example:**
 *
 * @example 
 * 
 * 
 * var state_machine = $AnimationTree.get("parameters/playback")
 * state_machine.travel("some_state")
 * 
 * 
 * var stateMachine = GetNode<AnimationTree>("AnimationTree").Get("parameters/playback") as AnimationNodeStateMachinePlayback;
 * stateMachine.Travel("some_state");
 * 
 * @summary 
 * 
 *
*/
declare class AnimationNodeStateMachine extends AnimationRootNode  {

  
/**
 * Contains multiple [AnimationRootNode]s representing animation states, connected in a graph. State transitions can be configured to happen automatically or via code, using a shortest-path algorithm. Retrieve the [AnimationNodeStateMachinePlayback] object from the [AnimationTree] node to control it programmatically.
 *
 * **Example:**
 *
 * @example 
 * 
 * 
 * var state_machine = $AnimationTree.get("parameters/playback")
 * state_machine.travel("some_state")
 * 
 * 
 * var stateMachine = GetNode<AnimationTree>("AnimationTree").Get("parameters/playback") as AnimationNodeStateMachinePlayback;
 * stateMachine.Travel("some_state");
 * 
 * @summary 
 * 
 *
*/
  new(): AnimationNodeStateMachine; 
  static "new"(): AnimationNodeStateMachine 


/** If [code]true[/code], allows teleport to the self state with [method AnimationNodeStateMachinePlayback.travel]. When the reset option is enabled in [method AnimationNodeStateMachinePlayback.travel], the animation is restarted. If [code]false[/code], nothing happens on the teleportation to the self state. */
allow_transition_to_self: boolean;

/**
 * If `true`, treat the cross-fade to the start and end nodes as a blend with the RESET animation.
 *
 * In most cases, when additional cross-fades are performed in the parent [AnimationNode] of the state machine, setting this property to `false` and matching the cross-fade time of the parent [AnimationNode] and the state machine's start node and end node gives good results.
 *
*/
reset_ends: boolean;

/** This property can define the process of transitions for different use cases. See also [enum AnimationNodeStateMachine.StateMachineType]. */
state_machine_type: int;

/** Adds a new animation node to the graph. The [param position] is used for display in the editor. */
add_node(): void;

/** Adds a transition between the given animation nodes. */
add_transition(): void;

/** Returns the draw offset of the graph. Used for display in the editor. */
get_graph_offset(): Vector2;

/** Returns the animation node with the given name. */
get_node(path: NodePathType): Node;

/** Returns the animation node with the given name. */
get_node_unsafe<T extends Node>(path: NodePathType): T;


/** Returns the given animation node's name. */
get_node_name(): StringName;

/** Returns the given animation node's coordinates. Used for display in the editor. */
get_node_position(): Vector2;

/** Returns the given transition. */
get_transition(): AnimationNodeStateMachineTransition;

/** Returns the number of connections in the graph. */
get_transition_count(): int;

/** Returns the given transition's start node. */
get_transition_from(): StringName;

/** Returns the given transition's end node. */
get_transition_to(): StringName;

/** Returns [code]true[/code] if the graph contains the given animation node. */
has_node(): boolean;

/** Returns [code]true[/code] if there is a transition between the given animation nodes. */
has_transition(): boolean;

/** Deletes the given animation node from the graph. */
remove_node(): void;

/** Deletes the transition between the two specified animation nodes. */
remove_transition(): void;

/** Deletes the given transition by index. */
remove_transition_by_index(): void;

/** Renames the given animation node. */
rename_node(): void;

/** No documentation provided. */
replace_node(): void;

/** Sets the draw offset of the graph. Used for display in the editor. */
set_graph_offset(): void;

/** Sets the animation node's coordinates. Used for display in the editor. */
set_node_position(): void;

  connect<T extends SignalsOf<AnimationNodeStateMachine>>(signal: T, method: SignalFunction<AnimationNodeStateMachine[T]>): number;



/**
 * Seeking to the beginning is treated as playing from the start state. Transition to the end state is treated as exiting the state machine.
 *
*/
static STATE_MACHINE_TYPE_ROOT: any;

/**
 * Seeking to the beginning is treated as seeking to the beginning of the animation in the current state. Transition to the end state, or the absence of transitions in each state, is treated as exiting the state machine.
 *
*/
static STATE_MACHINE_TYPE_NESTED: any;

/**
 * This is a grouped state machine that can be controlled from a parent state machine. It does not work on standalone. There must be a state machine with [member state_machine_type] of [constant STATE_MACHINE_TYPE_ROOT] or [constant STATE_MACHINE_TYPE_NESTED] in the parent or ancestor.
 *
*/
static STATE_MACHINE_TYPE_GROUPED: any;



}

