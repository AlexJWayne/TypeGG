
/**
 * Counts down a specified interval and emits a signal on reaching 0. Can be set to repeat or "one-shot" mode.
 *
 * **Note:** Timers are affected by [member Engine.time_scale], a higher scale means quicker timeouts, and vice versa.
 *
 * **Note:** To create a one-shot timer without instantiating a node, use [method SceneTree.create_timer].
 *
*/
declare class Timer extends Node  {

  
/**
 * Counts down a specified interval and emits a signal on reaching 0. Can be set to repeat or "one-shot" mode.
 *
 * **Note:** Timers are affected by [member Engine.time_scale], a higher scale means quicker timeouts, and vice versa.
 *
 * **Note:** To create a one-shot timer without instantiating a node, use [method SceneTree.create_timer].
 *
*/
  new(): Timer; 
  static "new"(): Timer 


/**
 * If `true`, the timer will automatically start when entering the scene tree.
 *
 * **Note:** This property is automatically set to `false` after the timer enters the scene tree and starts.
 *
*/
autostart: boolean;

/** If [code]true[/code], the timer will stop when reaching 0. If [code]false[/code], it will restart. */
one_shot: boolean;

/** If [code]true[/code], the timer is paused and will not process until it is unpaused again, even if [method start] is called. */
paused: boolean;

/** Processing callback. See [enum TimerProcessCallback]. */
process_callback: int;

/**
 * The timer's remaining time in seconds. Returns 0 if the timer is inactive.
 *
 * **Note:** This value is read-only and cannot be set. It is based on [member wait_time], which can be set using [method start].
 *
*/
time_left: float;

/**
 * The wait time in seconds.
 *
 * **Note:** Timers can only emit once per rendered frame at most (or once per physics frame if [member process_callback] is [constant TIMER_PROCESS_PHYSICS]). This means very low wait times (lower than 0.05 seconds) will behave in significantly different ways depending on the rendered framerate. For very low wait times, it is recommended to use a process loop in a script instead of using a Timer node. Timers are affected by [member Engine.time_scale], a higher scale means quicker timeouts, and vice versa.
 *
*/
wait_time: float;

/** Returns [code]true[/code] if the timer is stopped. */
is_stopped(): boolean;

/**
 * Starts the timer. Sets [member wait_time] to [param time_sec] if `time_sec > 0`. This also resets the remaining time to [member wait_time].
 *
 * **Note:** This method will not resume a paused timer. See [member paused].
 *
*/
start(): void;

/** Stops the timer. */
stop(): void;

  connect<T extends SignalsOf<Timer>>(signal: T, method: SignalFunction<Timer[T]>): number;



/**
 * Update the timer during physics frames (see [constant Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS]).
 *
*/
static TIMER_PROCESS_PHYSICS: any;

/**
 * Update the timer during process frames (see [constant Node.NOTIFICATION_INTERNAL_PROCESS]).
 *
*/
static TIMER_PROCESS_IDLE: any;


/**
 * Emitted when the timer reaches 0.
 *
*/
$timeout: Signal<() => void>

}

