
/**
 * Tweeners are objects that perform a specific animating task, e.g. interpolating a property or calling a method at a given time. A [Tweener] can't be created manually, you need to use a dedicated method from [Tween].
 *
*/
declare class Tweener extends RefCounted  {

  
/**
 * Tweeners are objects that perform a specific animating task, e.g. interpolating a property or calling a method at a given time. A [Tweener] can't be created manually, you need to use a dedicated method from [Tween].
 *
*/
  new(): Tweener; 
  static "new"(): Tweener 





  connect<T extends SignalsOf<Tweener>>(signal: T, method: SignalFunction<Tweener[T]>): number;





/**
 * Emitted when the [Tweener] has just finished its job.
 *
*/
$finished: Signal<() => void>

}

