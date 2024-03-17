
/**
 * A one-shot timer managed by the scene tree, which emits [signal timeout] on completion. See also [method SceneTree.create_timer].
 *
 * As opposed to [Timer], it does not require the instantiation of a node. Commonly used to create a one-shot delay timer as in the following example:
 *
 * @example 
 * 
 * 
 * func some_function():
 *     print("Timer started.")
 *     await get_tree().create_timer(1.0).timeout
 *     print("Timer ended.")
 * 
 * 
 * public async Task SomeFunction()
 * {
 *     GD.Print("Timer started.");
 *     await ToSignal(GetTree().CreateTimer(1.0f), SceneTreeTimer.SignalName.Timeout);
 *     GD.Print("Timer ended.");
 * }
 * 
 * @summary 
 * 
 *
 * The timer will be dereferenced after its time elapses. To preserve the timer, you can keep a reference to it. See [RefCounted].
 *
 * **Note:** The timer is processed after all of the nodes in the current frame, i.e. node's [method Node._process] method would be called before the timer (or [method Node._physics_process] if `process_in_physics` in [method SceneTree.create_timer] has been set to `true`).
 *
*/
declare class SceneTreeTimer extends RefCounted  {

  
/**
 * A one-shot timer managed by the scene tree, which emits [signal timeout] on completion. See also [method SceneTree.create_timer].
 *
 * As opposed to [Timer], it does not require the instantiation of a node. Commonly used to create a one-shot delay timer as in the following example:
 *
 * @example 
 * 
 * 
 * func some_function():
 *     print("Timer started.")
 *     await get_tree().create_timer(1.0).timeout
 *     print("Timer ended.")
 * 
 * 
 * public async Task SomeFunction()
 * {
 *     GD.Print("Timer started.");
 *     await ToSignal(GetTree().CreateTimer(1.0f), SceneTreeTimer.SignalName.Timeout);
 *     GD.Print("Timer ended.");
 * }
 * 
 * @summary 
 * 
 *
 * The timer will be dereferenced after its time elapses. To preserve the timer, you can keep a reference to it. See [RefCounted].
 *
 * **Note:** The timer is processed after all of the nodes in the current frame, i.e. node's [method Node._process] method would be called before the timer (or [method Node._physics_process] if `process_in_physics` in [method SceneTree.create_timer] has been set to `true`).
 *
*/
  new(): SceneTreeTimer; 
  static "new"(): SceneTreeTimer 


/** The time remaining (in seconds). */
time_left: float;



  connect<T extends SignalsOf<SceneTreeTimer>>(signal: T, method: SignalFunction<SceneTreeTimer[T]>): number;





/**
 * Emitted when the timer reaches 0.
 *
*/
$timeout: Signal<() => void>

}

