
/**
 * [MethodTweener] is similar to a combination of [CallbackTweener] and [PropertyTweener]. It calls a method providing an interpolated value as a parameter. See [method Tween.tween_method] for more usage information.
 *
 * The tweener will finish automatically if the callback's target object is freed.
 *
 * **Note:** [method Tween.tween_method] is the only correct way to create [MethodTweener]. Any [MethodTweener] created manually will not function correctly.
 *
*/
declare class MethodTweener extends Tweener  {

  
/**
 * [MethodTweener] is similar to a combination of [CallbackTweener] and [PropertyTweener]. It calls a method providing an interpolated value as a parameter. See [method Tween.tween_method] for more usage information.
 *
 * The tweener will finish automatically if the callback's target object is freed.
 *
 * **Note:** [method Tween.tween_method] is the only correct way to create [MethodTweener]. Any [MethodTweener] created manually will not function correctly.
 *
*/
  new(): MethodTweener; 
  static "new"(): MethodTweener 



/** Sets the time in seconds after which the [MethodTweener] will start interpolating. By default there's no delay. */
set_delay(): MethodTweener;

/** Sets the type of used easing from [enum Tween.EaseType]. If not set, the default easing is used from the [Tween] that contains this Tweener. */
set_ease(): MethodTweener;

/** Sets the type of used transition from [enum Tween.TransitionType]. If not set, the default transition is used from the [Tween] that contains this Tweener. */
set_trans(): MethodTweener;

  connect<T extends SignalsOf<MethodTweener>>(signal: T, method: SignalFunction<MethodTweener[T]>): number;






}

