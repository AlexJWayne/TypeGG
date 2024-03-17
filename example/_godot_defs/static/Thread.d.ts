
/**
 * A unit of execution in a process. Can run methods on [Object]s simultaneously. The use of synchronization via [Mutex] or [Semaphore] is advised if working with shared objects.
 *
 * **Warning:**
 *
 * To ensure proper cleanup without crashes or deadlocks, when a [Thread]'s reference count reaches zero and it is therefore destroyed, the following conditions must be met:
 *
 * - It must not have any [Mutex] objects locked.
 *
 * - It must not be waiting on any [Semaphore] objects.
 *
 * - [method wait_to_finish] should have been called on it.
 *
*/
declare class Thread extends RefCounted  {

  
/**
 * A unit of execution in a process. Can run methods on [Object]s simultaneously. The use of synchronization via [Mutex] or [Semaphore] is advised if working with shared objects.
 *
 * **Warning:**
 *
 * To ensure proper cleanup without crashes or deadlocks, when a [Thread]'s reference count reaches zero and it is therefore destroyed, the following conditions must be met:
 *
 * - It must not have any [Mutex] objects locked.
 *
 * - It must not be waiting on any [Semaphore] objects.
 *
 * - [method wait_to_finish] should have been called on it.
 *
*/
  new(): Thread; 
  static "new"(): Thread 



/** Returns the current [Thread]'s ID, uniquely identifying it among all threads. If the [Thread] has not started running or if [method wait_to_finish] has been called, this returns an empty string. */
get_id(): string;

/**
 * Returns `true` if this [Thread] is currently running the provided function. This is useful for determining if [method wait_to_finish] can be called without blocking the calling thread.
 *
 * To check if a [Thread] is joinable, use [method is_started].
 *
*/
is_alive(): boolean;

/** Returns [code]true[/code] if this [Thread] has been started. Once started, this will return [code]true[/code] until it is joined using [method wait_to_finish]. For checking if a [Thread] is still executing its task, use [method is_alive]. */
is_started(): boolean;

/**
 * Sets whether the thread safety checks the engine normally performs in methods of certain classes (e.g., [Node]) should happen **on the current thread**.
 *
 * The default, for every thread, is that they are enabled (as if called with [param enabled] being `true`).
 *
 * Those checks are conservative. That means that they will only succeed in considering a call thread-safe (and therefore allow it to happen) if the engine can guarantee such safety.
 *
 * Because of that, there may be cases where the user may want to disable them ([param enabled] being `false`) to make certain operations allowed again. By doing so, it becomes the user's responsibility to ensure thread safety (e.g., by using [Mutex]) for those objects that are otherwise protected by the engine.
 *
 * **Note:** This is an advanced usage of the engine. You are advised to use it only if you know what you are doing and there is no safer way.
 *
 * **Note:** This is useful for scripts running on either arbitrary [Thread] objects or tasks submitted to the [WorkerThreadPool]. It doesn't apply to code running during [Node] group processing, where the checks will be always performed.
 *
 * **Note:** Even in the case of having disabled the checks in a [WorkerThreadPool] task, there's no need to re-enable them at the end. The engine will do so.
 *
*/
set_thread_safety_checks_enabled(): void;

/**
 * Starts a new [Thread] that calls [param callable].
 *
 * If the method takes some arguments, you can pass them using [method Callable.bind].
 *
 * The [param priority] of the [Thread] can be changed by passing a value from the [enum Priority] enum.
 *
 * Returns [constant OK] on success, or [constant ERR_CANT_CREATE] on failure.
 *
*/
start(): int;

/**
 * Joins the [Thread] and waits for it to finish. Returns the output of the [Callable] passed to [method start].
 *
 * Should either be used when you want to retrieve the value returned from the method called by the [Thread] or before freeing the instance that contains the [Thread].
 *
 * To determine if this can be called without blocking the calling thread, check if [method is_alive] is `false`.
 *
*/
wait_to_finish(): any;

  connect<T extends SignalsOf<Thread>>(signal: T, method: SignalFunction<Thread[T]>): number;



/**
 * A thread running with lower priority than normally.
 *
*/
static PRIORITY_LOW: any;

/**
 * A thread with a standard priority.
 *
*/
static PRIORITY_NORMAL: any;

/**
 * A thread running with higher priority than normally.
 *
*/
static PRIORITY_HIGH: any;



}

