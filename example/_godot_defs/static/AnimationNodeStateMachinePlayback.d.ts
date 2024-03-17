
/**
 * Allows control of [AnimationTree] state machines created with [AnimationNodeStateMachine]. Retrieve with `$AnimationTree.get("parameters/playback")`.
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
 * var stateMachine = GetNode<AnimationTree>("AnimationTree").Get("parameters/playback").As<AnimationNodeStateMachinePlayback>();
 * stateMachine.Travel("some_state");
 * 
 * @summary 
 * 
 *
*/
declare class AnimationNodeStateMachinePlayback extends Resource  {

  
/**
 * Allows control of [AnimationTree] state machines created with [AnimationNodeStateMachine]. Retrieve with `$AnimationTree.get("parameters/playback")`.
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
 * var stateMachine = GetNode<AnimationTree>("AnimationTree").Get("parameters/playback").As<AnimationNodeStateMachinePlayback>();
 * stateMachine.Travel("some_state");
 * 
 * @summary 
 * 
 *
*/
  new(): AnimationNodeStateMachinePlayback; 
  static "new"(): AnimationNodeStateMachinePlayback 



/**
 * Returns the current state length.
 *
 * **Note:** It is possible that any [AnimationRootNode] can be nodes as well as animations. This means that there can be multiple animations within a single state. Which animation length has priority depends on the nodes connected inside it. Also, if a transition does not reset, the remaining length at that point will be returned.
 *
*/
get_current_length(): float;

/**
 * Returns the currently playing animation state.
 *
 * **Note:** When using a cross-fade, the current state changes to the next state immediately after the cross-fade begins.
 *
*/
get_current_node(): StringName;

/** Returns the playback position within the current animation state. */
get_current_play_position(): float;

/** Returns the starting state of currently fading animation. */
get_fading_from_node(): StringName;

/** Returns the current travel path as computed internally by the A* algorithm. */
get_travel_path(): StringName[];

/** Returns [code]true[/code] if an animation is playing. */
is_playing(): boolean;

/** If there is a next path by travel or auto advance, immediately transitions from the current state to the next state. */
next(): void;

/**
 * Starts playing the given animation.
 *
 * If [param reset] is `true`, the animation is played from the beginning.
 *
*/
start(): void;

/** Stops the currently playing animation. */
stop(): void;

/**
 * Transitions from the current state to another one, following the shortest path.
 *
 * If the path does not connect from the current state, the animation will play after the state teleports.
 *
 * If [param reset_on_teleport] is `true`, the animation is played from the beginning when the travel cause a teleportation.
 *
*/
travel(): void;

  connect<T extends SignalsOf<AnimationNodeStateMachinePlayback>>(signal: T, method: SignalFunction<AnimationNodeStateMachinePlayback[T]>): number;






}

