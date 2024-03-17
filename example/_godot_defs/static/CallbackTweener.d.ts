
/**
 * [CallbackTweener] is used to call a method in a tweening sequence. See [method Tween.tween_callback] for more usage information.
 *
 * The tweener will finish automatically if the callback's target object is freed.
 *
 * **Note:** [method Tween.tween_callback] is the only correct way to create [CallbackTweener]. Any [CallbackTweener] created manually will not function correctly.
 *
*/
declare class CallbackTweener extends Tweener  {

  
/**
 * [CallbackTweener] is used to call a method in a tweening sequence. See [method Tween.tween_callback] for more usage information.
 *
 * The tweener will finish automatically if the callback's target object is freed.
 *
 * **Note:** [method Tween.tween_callback] is the only correct way to create [CallbackTweener]. Any [CallbackTweener] created manually will not function correctly.
 *
*/
  new(): CallbackTweener; 
  static "new"(): CallbackTweener 



/**
 * Makes the callback call delayed by given time in seconds.
 *
 * **Example:**
 *
 * @example 
 * 
 * var tween = get_tree().create_tween()
 * tween.tween_callback(queue_free).set_delay(2) #this will call queue_free() after 2 seconds
 * @summary 
 * 
 *
*/
set_delay(): CallbackTweener;

  connect<T extends SignalsOf<CallbackTweener>>(signal: T, method: SignalFunction<CallbackTweener[T]>): number;






}

