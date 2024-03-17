
/**
 * [PropertyTweener] is used to interpolate a property in an object. See [method Tween.tween_property] for more usage information.
 *
 * **Note:** [method Tween.tween_property] is the only correct way to create [PropertyTweener]. Any [PropertyTweener] created manually will not function correctly.
 *
*/
declare class PropertyTweener extends Tweener  {

  
/**
 * [PropertyTweener] is used to interpolate a property in an object. See [method Tween.tween_property] for more usage information.
 *
 * **Note:** [method Tween.tween_property] is the only correct way to create [PropertyTweener]. Any [PropertyTweener] created manually will not function correctly.
 *
*/
  new(): PropertyTweener; 
  static "new"(): PropertyTweener 



/**
 * When called, the final value will be used as a relative value instead.
 *
 * **Example:**
 *
 * @example 
 * 
 * var tween = get_tree().create_tween()
 * tween.tween_property(self, "position", Vector2.RIGHT * 100, 1).as_relative() #the node will move by 100 pixels to the right
 * @summary 
 * 
 *
*/
as_relative(): PropertyTweener;

/**
 * Sets a custom initial value to the [PropertyTweener].
 *
 * **Example:**
 *
 * @example 
 * 
 * var tween = get_tree().create_tween()
 * tween.tween_property(self, "position", Vector2(200, 100), 1).from(Vector2(100, 100)) #this will move the node from position (100, 100) to (200, 100)
 * @summary 
 * 
 *
*/
from(): PropertyTweener;

/**
 * Makes the [PropertyTweener] use the current property value (i.e. at the time of creating this [PropertyTweener]) as a starting point. This is equivalent of using [method from] with the current value. These two calls will do the same:
 *
 * @example 
 * 
 * tween.tween_property(self, "position", Vector2(200, 100), 1).from(position)
 * tween.tween_property(self, "position", Vector2(200, 100), 1).from_current()
 * @summary 
 * 
 *
*/
from_current(): PropertyTweener;

/** Sets the time in seconds after which the [PropertyTweener] will start interpolating. By default there's no delay. */
set_delay(): PropertyTweener;

/** Sets the type of used easing from [enum Tween.EaseType]. If not set, the default easing is used from the [Tween] that contains this Tweener. */
set_ease(): PropertyTweener;

/** Sets the type of used transition from [enum Tween.TransitionType]. If not set, the default transition is used from the [Tween] that contains this Tweener. */
set_trans(): PropertyTweener;

  connect<T extends SignalsOf<PropertyTweener>>(signal: T, method: SignalFunction<PropertyTweener[T]>): number;






}

