
/**
 * [IntervalTweener] is used to make delays in a tweening sequence. See [method Tween.tween_interval] for more usage information.
 *
 * **Note:** [method Tween.tween_interval] is the only correct way to create [IntervalTweener]. Any [IntervalTweener] created manually will not function correctly.
 *
*/
declare class IntervalTweener extends Tweener  {

  
/**
 * [IntervalTweener] is used to make delays in a tweening sequence. See [method Tween.tween_interval] for more usage information.
 *
 * **Note:** [method Tween.tween_interval] is the only correct way to create [IntervalTweener]. Any [IntervalTweener] created manually will not function correctly.
 *
*/
  new(): IntervalTweener; 
  static "new"(): IntervalTweener 





  connect<T extends SignalsOf<IntervalTweener>>(signal: T, method: SignalFunction<IntervalTweener[T]>): number;






}

