
/**
 * The path generated when using [method AnimationNodeStateMachinePlayback.travel] is limited to the nodes connected by [AnimationNodeStateMachineTransition].
 *
 * You can set the timing and conditions of the transition in detail.
 *
*/
declare class AnimationNodeStateMachineTransition extends Resource  {

  
/**
 * The path generated when using [method AnimationNodeStateMachinePlayback.travel] is limited to the nodes connected by [AnimationNodeStateMachineTransition].
 *
 * You can set the timing and conditions of the transition in detail.
 *
*/
  new(): AnimationNodeStateMachineTransition; 
  static "new"(): AnimationNodeStateMachineTransition 


/**
 * Turn on auto advance when this condition is set. The provided name will become a boolean parameter on the [AnimationTree] that can be controlled from code (see [url=$DOCS_URL/tutorials/animation/animation_tree.html#controlling-from-code]Using AnimationTree[/url]). For example, if [member AnimationTree.tree_root] is an [AnimationNodeStateMachine] and [member advance_condition] is set to `"idle"`:
 *
 * @example 
 * 
 * 
 * $animation_tree.set("parameters/conditions/idle", is_on_floor and (linear_velocity.x == 0))
 * 
 * 
 * GetNode<AnimationTree>("animation_tree").Set("parameters/conditions/idle", IsOnFloor && (LinearVelocity.X == 0));
 * 
 * @summary 
 * 
 *
*/
advance_condition: StringName;

/** Use an expression as a condition for state machine transitions. It is possible to create complex animation advance conditions for switching between states and gives much greater flexibility for creating complex state machines by directly interfacing with the script code. */
advance_expression: string;

/** Determines whether the transition should disabled, enabled when using [method AnimationNodeStateMachinePlayback.travel], or traversed automatically if the [member advance_condition] and [member advance_expression] checks are true (if assigned). */
advance_mode: int;

/** Lower priority transitions are preferred when travelling through the tree via [method AnimationNodeStateMachinePlayback.travel] or [member advance_mode] is set to [constant ADVANCE_MODE_AUTO]. */
priority: int;

/** If [code]true[/code], the destination animation is played back from the beginning when switched. */
reset: boolean;

/** The transition type. */
switch_mode: int;

/** Ease curve for better control over cross-fade between this state and the next. */
xfade_curve: Curve;

/** The time to cross-fade between this state and the next. */
xfade_time: float;



  connect<T extends SignalsOf<AnimationNodeStateMachineTransition>>(signal: T, method: SignalFunction<AnimationNodeStateMachineTransition[T]>): number;



/**
 * Switch to the next state immediately. The current state will end and blend into the beginning of the new one.
 *
*/
static SWITCH_MODE_IMMEDIATE: any;

/**
 * Switch to the next state immediately, but will seek the new state to the playback position of the old state.
 *
*/
static SWITCH_MODE_SYNC: any;

/**
 * Wait for the current state playback to end, then switch to the beginning of the next state animation.
 *
*/
static SWITCH_MODE_AT_END: any;

/**
 * Don't use this transition.
 *
*/
static ADVANCE_MODE_DISABLED: any;

/**
 * Only use this transition during [method AnimationNodeStateMachinePlayback.travel].
 *
*/
static ADVANCE_MODE_ENABLED: any;

/**
 * Automatically use this transition if the [member advance_condition] and [member advance_expression] checks are true (if assigned).
 *
*/
static ADVANCE_MODE_AUTO: any;


/**
 * Emitted when [member advance_condition] is changed.
 *
*/
$advance_condition_changed: Signal<() => void>

}

