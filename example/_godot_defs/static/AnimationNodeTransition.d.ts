
/**
 * Simple state machine for cases which don't require a more advanced [AnimationNodeStateMachine]. Animations can be connected to the inputs and transition times can be specified.
 *
 * After setting the request and changing the animation playback, the transition node automatically clears the request on the next process frame by setting its `transition_request` value to empty.
 *
 * **Note:** When using a cross-fade, `current_state` and `current_index` change to the next state immediately after the cross-fade begins.
 *
 * @example 
 * 
 * 
 * # Play child animation connected to "state_2" port.
 * animation_tree.set("parameters/Transition/transition_request", "state_2")
 * # Alternative syntax (same result as above).
 * animation_tree["parameters/Transition/transition_request"] = "state_2"
 * # Get current state name (read-only).
 * animation_tree.get("parameters/Transition/current_state")
 * # Alternative syntax (same result as above).
 * animation_tree["parameters/Transition/current_state"]
 * # Get current state index (read-only).
 * animation_tree.get("parameters/Transition/current_index")
 * # Alternative syntax (same result as above).
 * animation_tree["parameters/Transition/current_index"]
 * 
 * 
 * // Play child animation connected to "state_2" port.
 * animationTree.Set("parameters/Transition/transition_request", "state_2");
 * // Get current state name (read-only).
 * animationTree.Get("parameters/Transition/current_state");
 * // Get current state index (read-only).
 * animationTree.Get("parameters/Transition/current_index");
 * 
 * @summary 
 * 
 *
*/
declare class AnimationNodeTransition extends AnimationNodeSync  {

  
/**
 * Simple state machine for cases which don't require a more advanced [AnimationNodeStateMachine]. Animations can be connected to the inputs and transition times can be specified.
 *
 * After setting the request and changing the animation playback, the transition node automatically clears the request on the next process frame by setting its `transition_request` value to empty.
 *
 * **Note:** When using a cross-fade, `current_state` and `current_index` change to the next state immediately after the cross-fade begins.
 *
 * @example 
 * 
 * 
 * # Play child animation connected to "state_2" port.
 * animation_tree.set("parameters/Transition/transition_request", "state_2")
 * # Alternative syntax (same result as above).
 * animation_tree["parameters/Transition/transition_request"] = "state_2"
 * # Get current state name (read-only).
 * animation_tree.get("parameters/Transition/current_state")
 * # Alternative syntax (same result as above).
 * animation_tree["parameters/Transition/current_state"]
 * # Get current state index (read-only).
 * animation_tree.get("parameters/Transition/current_index")
 * # Alternative syntax (same result as above).
 * animation_tree["parameters/Transition/current_index"]
 * 
 * 
 * // Play child animation connected to "state_2" port.
 * animationTree.Set("parameters/Transition/transition_request", "state_2");
 * // Get current state name (read-only).
 * animationTree.Get("parameters/Transition/current_state");
 * // Get current state index (read-only).
 * animationTree.Get("parameters/Transition/current_index");
 * 
 * @summary 
 * 
 *
*/
  new(): AnimationNodeTransition; 
  static "new"(): AnimationNodeTransition 


/** If [code]true[/code], allows transition to the self state. When the reset option is enabled in input, the animation is restarted. If [code]false[/code], nothing happens on the transition to the self state. */
allow_transition_to_self: boolean;

/** The number of enabled input ports for this animation node. */
input_count: int;

/** Determines how cross-fading between animations is eased. If empty, the transition will be linear. */
xfade_curve: Curve;

/** Cross-fading time (in seconds) between each animation connected to the inputs. */
xfade_time: float;

/** Returns whether the animation restarts when the animation transitions from the other animation. */
is_input_reset(): boolean;

/** Returns [code]true[/code] if auto-advance is enabled for the given [param input] index. */
is_input_set_as_auto_advance(): boolean;

/** Enables or disables auto-advance for the given [param input] index. If enabled, state changes to the next input after playing the animation once. If enabled for the last input state, it loops to the first. */
set_input_as_auto_advance(): void;

/** If [code]true[/code], the destination animation is restarted when the animation transitions. */
set_input_reset(): void;

  connect<T extends SignalsOf<AnimationNodeTransition>>(signal: T, method: SignalFunction<AnimationNodeTransition[T]>): number;






}

