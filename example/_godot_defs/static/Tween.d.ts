
/**
 * Tweens are mostly useful for animations requiring a numerical property to be interpolated over a range of values. The name **tween** comes from **in-betweening**, an animation technique where you specify **keyframes** and the computer interpolates the frames that appear between them. Animating something with a [Tween] is called tweening.
 *
 * [Tween] is more suited than [AnimationPlayer] for animations where you don't know the final values in advance. For example, interpolating a dynamically-chosen camera zoom value is best done with a [Tween]; it would be difficult to do the same thing with an [AnimationPlayer] node. Tweens are also more light-weight than [AnimationPlayer], so they are very much suited for simple animations or general tasks that don't require visual tweaking provided by the editor. They can be used in a fire-and-forget manner for some logic that normally would be done by code. You can e.g. make something shoot periodically by using a looped [CallbackTweener] with a delay.
 *
 * A [Tween] can be created by using either [method SceneTree.create_tween] or [method Node.create_tween]. [Tween]s created manually (i.e. by using `Tween.new()`) are invalid and can't be used for tweening values.
 *
 * A tween animation is created by adding [Tweener]s to the [Tween] object, using [method tween_property], [method tween_interval], [method tween_callback] or [method tween_method]:
 *
 * @example 
 * 
 * 
 * var tween = get_tree().create_tween()
 * tween.tween_property($Sprite, "modulate", Color.RED, 1)
 * tween.tween_property($Sprite, "scale", Vector2(), 1)
 * tween.tween_callback($Sprite.queue_free)
 * 
 * 
 * Tween tween = GetTree().CreateTween();
 * tween.TweenProperty(GetNode("Sprite"), "modulate", Colors.Red, 1.0f);
 * tween.TweenProperty(GetNode("Sprite"), "scale", Vector2.Zero, 1.0f);
 * tween.TweenCallback(Callable.From(GetNode("Sprite").QueueFree));
 * 
 * @summary 
 * 
 *
 * This sequence will make the `$Sprite` node turn red, then shrink, before finally calling [method Node.queue_free] to free the sprite. [Tweener]s are executed one after another by default. This behavior can be changed using [method parallel] and [method set_parallel].
 *
 * When a [Tweener] is created with one of the `tween_*` methods, a chained method call can be used to tweak the properties of this [Tweener]. For example, if you want to set a different transition type in the above example, you can use [method set_trans]:
 *
 * @example 
 * 
 * 
 * var tween = get_tree().create_tween()
 * tween.tween_property($Sprite, "modulate", Color.RED, 1).set_trans(Tween.TRANS_SINE)
 * tween.tween_property($Sprite, "scale", Vector2(), 1).set_trans(Tween.TRANS_BOUNCE)
 * tween.tween_callback($Sprite.queue_free)
 * 
 * 
 * Tween tween = GetTree().CreateTween();
 * tween.TweenProperty(GetNode("Sprite"), "modulate", Colors.Red, 1.0f).SetTrans(Tween.TransitionType.Sine);
 * tween.TweenProperty(GetNode("Sprite"), "scale", Vector2.Zero, 1.0f).SetTrans(Tween.TransitionType.Bounce);
 * tween.TweenCallback(Callable.From(GetNode("Sprite").QueueFree));
 * 
 * @summary 
 * 
 *
 * Most of the [Tween] methods can be chained this way too. In the following example the [Tween] is bound to the running script's node and a default transition is set for its [Tweener]s:
 *
 * @example 
 * 
 * 
 * var tween = get_tree().create_tween().bind_node(self).set_trans(Tween.TRANS_ELASTIC)
 * tween.tween_property($Sprite, "modulate", Color.RED, 1)
 * tween.tween_property($Sprite, "scale", Vector2(), 1)
 * tween.tween_callback($Sprite.queue_free)
 * 
 * 
 * var tween = GetTree().CreateTween().BindNode(this).SetTrans(Tween.TransitionType.Elastic);
 * tween.TweenProperty(GetNode("Sprite"), "modulate", Colors.Red, 1.0f);
 * tween.TweenProperty(GetNode("Sprite"), "scale", Vector2.Zero, 1.0f);
 * tween.TweenCallback(Callable.From(GetNode("Sprite").QueueFree));
 * 
 * @summary 
 * 
 *
 * Another interesting use for [Tween]s is animating arbitrary sets of objects:
 *
 * @example 
 * 
 * 
 * var tween = create_tween()
 * for sprite in get_children():
 *     tween.tween_property(sprite, "position", Vector2(0, 0), 1)
 * 
 * 
 * Tween tween = CreateTween();
 * foreach (Node sprite in GetChildren())
 *     tween.TweenProperty(sprite, "position", Vector2.Zero, 1.0f);
 * 
 * @summary 
 * 
 *
 * In the example above, all children of a node are moved one after another to position (0, 0).
 *
 * You should avoid using more than one [Tween] per object's property. If two or more tweens animate one property at the same time, the last one created will take priority and assign the final value. If you want to interrupt and restart an animation, consider assigning the [Tween] to a variable:
 *
 * @example 
 * 
 * 
 * var tween
 * func animate():
 *     if tween:
 *         tween.kill() # Abort the previous animation.
 *     tween = create_tween()
 * 
 * 
 * private Tween _tween;
 * public void Animate()
 * {
 *     if (_tween != null)
 *         _tween.Kill(); // Abort the previous animation
 *     _tween = CreateTween();
 * }
 * 
 * @summary 
 * 
 *
 * Some [Tweener]s use transitions and eases. The first accepts a [enum TransitionType] constant, and refers to the way the timing of the animation is handled (see [url=https://easings.net/]easings.net[/url] for some examples). The second accepts an [enum EaseType] constant, and controls where the `trans_type` is applied to the interpolation (in the beginning, the end, or both). If you don't know which transition and easing to pick, you can try different [enum TransitionType] constants with [constant EASE_IN_OUT], and use the one that looks best.
 *
 * [url=https://raw.githubusercontent.com/godotengine/godot-docs/master/img/tween_cheatsheet.webp]Tween easing and transition types cheatsheet[/url]
 *
 * **Note:** Tweens are not designed to be re-used and trying to do so results in an undefined behavior. Create a new Tween for each animation and every time you replay an animation from start. Keep in mind that Tweens start immediately, so only create a Tween when you want to start animating.
 *
 * **Note:** The tween is processed after all of the nodes in the current frame, i.e. node's [method Node._process] method would be called before the tween (or [method Node._physics_process] depending on the value passed to [method set_process_mode]).
 *
*/
declare class Tween extends RefCounted  {

  
/**
 * Tweens are mostly useful for animations requiring a numerical property to be interpolated over a range of values. The name **tween** comes from **in-betweening**, an animation technique where you specify **keyframes** and the computer interpolates the frames that appear between them. Animating something with a [Tween] is called tweening.
 *
 * [Tween] is more suited than [AnimationPlayer] for animations where you don't know the final values in advance. For example, interpolating a dynamically-chosen camera zoom value is best done with a [Tween]; it would be difficult to do the same thing with an [AnimationPlayer] node. Tweens are also more light-weight than [AnimationPlayer], so they are very much suited for simple animations or general tasks that don't require visual tweaking provided by the editor. They can be used in a fire-and-forget manner for some logic that normally would be done by code. You can e.g. make something shoot periodically by using a looped [CallbackTweener] with a delay.
 *
 * A [Tween] can be created by using either [method SceneTree.create_tween] or [method Node.create_tween]. [Tween]s created manually (i.e. by using `Tween.new()`) are invalid and can't be used for tweening values.
 *
 * A tween animation is created by adding [Tweener]s to the [Tween] object, using [method tween_property], [method tween_interval], [method tween_callback] or [method tween_method]:
 *
 * @example 
 * 
 * 
 * var tween = get_tree().create_tween()
 * tween.tween_property($Sprite, "modulate", Color.RED, 1)
 * tween.tween_property($Sprite, "scale", Vector2(), 1)
 * tween.tween_callback($Sprite.queue_free)
 * 
 * 
 * Tween tween = GetTree().CreateTween();
 * tween.TweenProperty(GetNode("Sprite"), "modulate", Colors.Red, 1.0f);
 * tween.TweenProperty(GetNode("Sprite"), "scale", Vector2.Zero, 1.0f);
 * tween.TweenCallback(Callable.From(GetNode("Sprite").QueueFree));
 * 
 * @summary 
 * 
 *
 * This sequence will make the `$Sprite` node turn red, then shrink, before finally calling [method Node.queue_free] to free the sprite. [Tweener]s are executed one after another by default. This behavior can be changed using [method parallel] and [method set_parallel].
 *
 * When a [Tweener] is created with one of the `tween_*` methods, a chained method call can be used to tweak the properties of this [Tweener]. For example, if you want to set a different transition type in the above example, you can use [method set_trans]:
 *
 * @example 
 * 
 * 
 * var tween = get_tree().create_tween()
 * tween.tween_property($Sprite, "modulate", Color.RED, 1).set_trans(Tween.TRANS_SINE)
 * tween.tween_property($Sprite, "scale", Vector2(), 1).set_trans(Tween.TRANS_BOUNCE)
 * tween.tween_callback($Sprite.queue_free)
 * 
 * 
 * Tween tween = GetTree().CreateTween();
 * tween.TweenProperty(GetNode("Sprite"), "modulate", Colors.Red, 1.0f).SetTrans(Tween.TransitionType.Sine);
 * tween.TweenProperty(GetNode("Sprite"), "scale", Vector2.Zero, 1.0f).SetTrans(Tween.TransitionType.Bounce);
 * tween.TweenCallback(Callable.From(GetNode("Sprite").QueueFree));
 * 
 * @summary 
 * 
 *
 * Most of the [Tween] methods can be chained this way too. In the following example the [Tween] is bound to the running script's node and a default transition is set for its [Tweener]s:
 *
 * @example 
 * 
 * 
 * var tween = get_tree().create_tween().bind_node(self).set_trans(Tween.TRANS_ELASTIC)
 * tween.tween_property($Sprite, "modulate", Color.RED, 1)
 * tween.tween_property($Sprite, "scale", Vector2(), 1)
 * tween.tween_callback($Sprite.queue_free)
 * 
 * 
 * var tween = GetTree().CreateTween().BindNode(this).SetTrans(Tween.TransitionType.Elastic);
 * tween.TweenProperty(GetNode("Sprite"), "modulate", Colors.Red, 1.0f);
 * tween.TweenProperty(GetNode("Sprite"), "scale", Vector2.Zero, 1.0f);
 * tween.TweenCallback(Callable.From(GetNode("Sprite").QueueFree));
 * 
 * @summary 
 * 
 *
 * Another interesting use for [Tween]s is animating arbitrary sets of objects:
 *
 * @example 
 * 
 * 
 * var tween = create_tween()
 * for sprite in get_children():
 *     tween.tween_property(sprite, "position", Vector2(0, 0), 1)
 * 
 * 
 * Tween tween = CreateTween();
 * foreach (Node sprite in GetChildren())
 *     tween.TweenProperty(sprite, "position", Vector2.Zero, 1.0f);
 * 
 * @summary 
 * 
 *
 * In the example above, all children of a node are moved one after another to position (0, 0).
 *
 * You should avoid using more than one [Tween] per object's property. If two or more tweens animate one property at the same time, the last one created will take priority and assign the final value. If you want to interrupt and restart an animation, consider assigning the [Tween] to a variable:
 *
 * @example 
 * 
 * 
 * var tween
 * func animate():
 *     if tween:
 *         tween.kill() # Abort the previous animation.
 *     tween = create_tween()
 * 
 * 
 * private Tween _tween;
 * public void Animate()
 * {
 *     if (_tween != null)
 *         _tween.Kill(); // Abort the previous animation
 *     _tween = CreateTween();
 * }
 * 
 * @summary 
 * 
 *
 * Some [Tweener]s use transitions and eases. The first accepts a [enum TransitionType] constant, and refers to the way the timing of the animation is handled (see [url=https://easings.net/]easings.net[/url] for some examples). The second accepts an [enum EaseType] constant, and controls where the `trans_type` is applied to the interpolation (in the beginning, the end, or both). If you don't know which transition and easing to pick, you can try different [enum TransitionType] constants with [constant EASE_IN_OUT], and use the one that looks best.
 *
 * [url=https://raw.githubusercontent.com/godotengine/godot-docs/master/img/tween_cheatsheet.webp]Tween easing and transition types cheatsheet[/url]
 *
 * **Note:** Tweens are not designed to be re-used and trying to do so results in an undefined behavior. Create a new Tween for each animation and every time you replay an animation from start. Keep in mind that Tweens start immediately, so only create a Tween when you want to start animating.
 *
 * **Note:** The tween is processed after all of the nodes in the current frame, i.e. node's [method Node._process] method would be called before the tween (or [method Node._physics_process] depending on the value passed to [method set_process_mode]).
 *
*/
  new(): Tween; 
  static "new"(): Tween 



/**
 * Binds this [Tween] with the given [param node]. [Tween]s are processed directly by the [SceneTree], so they run independently of the animated nodes. When you bind a [Node] with the [Tween], the [Tween] will halt the animation when the object is not inside tree and the [Tween] will be automatically killed when the bound object is freed. Also [constant TWEEN_PAUSE_BOUND] will make the pausing behavior dependent on the bound node.
 *
 * For a shorter way to create and bind a [Tween], you can use [method Node.create_tween].
 *
*/
bind_node(): Tween;

/**
 * Used to chain two [Tweener]s after [method set_parallel] is called with `true`.
 *
 * @example 
 * 
 * 
 * var tween = create_tween().set_parallel(true)
 * tween.tween_property(...)
 * tween.tween_property(...) # Will run parallelly with above.
 * tween.chain().tween_property(...) # Will run after two above are finished.
 * 
 * 
 * Tween tween = CreateTween().SetParallel(true);
 * tween.TweenProperty(...);
 * tween.TweenProperty(...); // Will run parallelly with above.
 * tween.Chain().TweenProperty(...); // Will run after two above are finished.
 * 
 * @summary 
 * 
 *
*/
chain(): Tween;

/**
 * Processes the [Tween] by the given [param delta] value, in seconds. This is mostly useful for manual control when the [Tween] is paused. It can also be used to end the [Tween] animation immediately, by setting [param delta] longer than the whole duration of the [Tween] animation.
 *
 * Returns `true` if the [Tween] still has [Tweener]s that haven't finished.
 *
*/
custom_step(): boolean;

/** Returns the number of remaining loops for this [Tween] (see [method set_loops]). A return value of [code]-1[/code] indicates an infinitely looping [Tween], and a return value of [code]0[/code] indicates that the [Tween] has already finished. */
get_loops_left(): int;

/**
 * Returns the total time in seconds the [Tween] has been animating (i.e. the time since it started, not counting pauses etc.). The time is affected by [method set_speed_scale], and [method stop] will reset it to `0`.
 *
 * **Note:** As it results from accumulating frame deltas, the time returned after the [Tween] has finished animating will be slightly greater than the actual [Tween] duration.
 *
*/
get_total_elapsed_time(): float;

/**
 * This method can be used for manual interpolation of a value, when you don't want [Tween] to do animating for you. It's similar to [method @GlobalScope.lerp], but with support for custom transition and easing.
 *
 * [param initial_value] is the starting value of the interpolation.
 *
 * [param delta_value] is the change of the value in the interpolation, i.e. it's equal to `final_value - initial_value`.
 *
 * [param elapsed_time] is the time in seconds that passed after the interpolation started and it's used to control the position of the interpolation. E.g. when it's equal to half of the [param duration], the interpolated value will be halfway between initial and final values. This value can also be greater than [param duration] or lower than 0, which will extrapolate the value.
 *
 * [param duration] is the total time of the interpolation.
 *
 * **Note:** If [param duration] is equal to `0`, the method will always return the final value, regardless of [param elapsed_time] provided.
 *
*/
interpolate_value(): any;

/** Returns whether the [Tween] is currently running, i.e. it wasn't paused and it's not finished. */
is_running(): boolean;

/** Returns whether the [Tween] is valid. A valid [Tween] is a [Tween] contained by the scene tree (i.e. the array from [method SceneTree.get_processed_tweens] will contain this [Tween]). A [Tween] might become invalid when it has finished tweening, is killed, or when created with [code]Tween.new()[/code]. Invalid [Tween]s can't have [Tweener]s appended. */
is_valid(): boolean;

/** Aborts all tweening operations and invalidates the [Tween]. */
kill(): void;

/**
 * Makes the next [Tweener] run parallelly to the previous one.
 *
 * **Example:**
 *
 * @example 
 * 
 * 
 * var tween = create_tween()
 * tween.tween_property(...)
 * tween.parallel().tween_property(...)
 * tween.parallel().tween_property(...)
 * 
 * 
 * Tween tween = CreateTween();
 * tween.TweenProperty(...);
 * tween.Parallel().TweenProperty(...);
 * tween.Parallel().TweenProperty(...);
 * 
 * @summary 
 * 
 *
 * All [Tweener]s in the example will run at the same time.
 *
 * You can make the [Tween] parallel by default by using [method set_parallel].
 *
*/
parallel(): Tween;

/**
 * Pauses the tweening. The animation can be resumed by using [method play].
 *
 * **Note:** If a Tween is paused and not bound to any node, it will exist indefinitely until manually started or invalidated. If you lose a reference to such Tween, you can retrieve it using [method SceneTree.get_processed_tweens].
 *
*/
pause(): void;

/** Resumes a paused or stopped [Tween]. */
play(): void;

/**
 * Sets the default ease type for [PropertyTweener]s and [MethodTweener]s animated by this [Tween].
 *
 * If not specified, the default value is [constant EASE_IN_OUT].
 *
*/
set_ease(): Tween;

/**
 * Sets the number of times the tweening sequence will be repeated, i.e. `set_loops(2)` will run the animation twice.
 *
 * Calling this method without arguments will make the [Tween] run infinitely, until either it is killed with [method kill], the [Tween]'s bound node is freed, or all the animated objects have been freed (which makes further animation impossible).
 *
 * **Warning:** Make sure to always add some duration/delay when using infinite loops. To prevent the game freezing, 0-duration looped animations (e.g. a single [CallbackTweener] with no delay) are stopped after a small number of loops, which may produce unexpected results. If a [Tween]'s lifetime depends on some node, always use [method bind_node].
 *
*/
set_loops(): Tween;

/** If [param parallel] is [code]true[/code], the [Tweener]s appended after this method will by default run simultaneously, as opposed to sequentially. */
set_parallel(): Tween;

/**
 * Determines the behavior of the [Tween] when the [SceneTree] is paused. Check [enum TweenPauseMode] for options.
 *
 * Default value is [constant TWEEN_PAUSE_BOUND].
 *
*/
set_pause_mode(): Tween;

/**
 * Determines whether the [Tween] should run after process frames (see [method Node._process]) or physics frames (see [method Node._physics_process]).
 *
 * Default value is [constant TWEEN_PROCESS_IDLE].
 *
*/
set_process_mode(): Tween;

/** Scales the speed of tweening. This affects all [Tweener]s and their delays. */
set_speed_scale(): Tween;

/**
 * Sets the default transition type for [PropertyTweener]s and [MethodTweener]s animated by this [Tween].
 *
 * If not specified, the default value is [constant TRANS_LINEAR].
 *
*/
set_trans(): Tween;

/**
 * Stops the tweening and resets the [Tween] to its initial state. This will not remove any appended [Tweener]s.
 *
 * **Note:** If a Tween is stopped and not bound to any node, it will exist indefinitely until manually started or invalidated. If you lose a reference to such Tween, you can retrieve it using [method SceneTree.get_processed_tweens].
 *
*/
stop(): void;

/**
 * Creates and appends a [CallbackTweener]. This method can be used to call an arbitrary method in any object. Use [method Callable.bind] to bind additional arguments for the call.
 *
 * **Example:** Object that keeps shooting every 1 second:
 *
 * @example 
 * 
 * 
 * var tween = get_tree().create_tween().set_loops()
 * tween.tween_callback(shoot).set_delay(1)
 * 
 * 
 * Tween tween = GetTree().CreateTween().SetLoops();
 * tween.TweenCallback(Callable.From(Shoot)).SetDelay(1.0f);
 * 
 * @summary 
 * 
 *
 * **Example:** Turning a sprite red and then blue, with 2 second delay:
 *
 * @example 
 * 
 * 
 * var tween = get_tree().create_tween()
 * tween.tween_callback($Sprite.set_modulate.bind(Color.RED)).set_delay(2)
 * tween.tween_callback($Sprite.set_modulate.bind(Color.BLUE)).set_delay(2)
 * 
 * 
 * Tween tween = GetTree().CreateTween();
 * Sprite2D sprite = GetNode<Sprite2D>("Sprite");
 * tween.TweenCallback(Callable.From(() => sprite.Modulate = Colors.Red)).SetDelay(2.0f);
 * tween.TweenCallback(Callable.From(() => sprite.Modulate = Colors.Blue)).SetDelay(2.0f);
 * 
 * @summary 
 * 
 *
*/
tween_callback(): CallbackTweener;

/**
 * Creates and appends an [IntervalTweener]. This method can be used to create delays in the tween animation, as an alternative to using the delay in other [Tweener]s, or when there's no animation (in which case the [Tween] acts as a timer). [param time] is the length of the interval, in seconds.
 *
 * **Example:** Creating an interval in code execution:
 *
 * @example 
 * 
 * 
 * # ... some code
 * await create_tween().tween_interval(2).finished
 * # ... more code
 * 
 * 
 * // ... some code
 * await ToSignal(CreateTween().TweenInterval(2.0f), Tween.SignalName.Finished);
 * // ... more code
 * 
 * @summary 
 * 
 *
 * **Example:** Creating an object that moves back and forth and jumps every few seconds:
 *
 * @example 
 * 
 * 
 * var tween = create_tween().set_loops()
 * tween.tween_property($Sprite, "position:x", 200.0, 1).as_relative()
 * tween.tween_callback(jump)
 * tween.tween_interval(2)
 * tween.tween_property($Sprite, "position:x", -200.0, 1).as_relative()
 * tween.tween_callback(jump)
 * tween.tween_interval(2)
 * 
 * 
 * Tween tween = CreateTween().SetLoops();
 * tween.TweenProperty(GetNode("Sprite"), "position:x", 200.0f, 1.0f).AsRelative();
 * tween.TweenCallback(Callable.From(Jump));
 * tween.TweenInterval(2.0f);
 * tween.TweenProperty(GetNode("Sprite"), "position:x", -200.0f, 1.0f).AsRelative();
 * tween.TweenCallback(Callable.From(Jump));
 * tween.TweenInterval(2.0f);
 * 
 * @summary 
 * 
 *
*/
tween_interval(): IntervalTweener;

/**
 * Creates and appends a [MethodTweener]. This method is similar to a combination of [method tween_callback] and [method tween_property]. It calls a method over time with a tweened value provided as an argument. The value is tweened between [param from] and [param to] over the time specified by [param duration], in seconds. Use [method Callable.bind] to bind additional arguments for the call. You can use [method MethodTweener.set_ease] and [method MethodTweener.set_trans] to tweak the easing and transition of the value or [method MethodTweener.set_delay] to delay the tweening.
 *
 * **Example:** Making a 3D object look from one point to another point:
 *
 * @example 
 * 
 * 
 * var tween = create_tween()
 * tween.tween_method(look_at.bind(Vector3.UP), Vector3(-1, 0, -1), Vector3(1, 0, -1), 1) # The look_at() method takes up vector as second argument.
 * 
 * 
 * Tween tween = CreateTween();
 * tween.TweenMethod(Callable.From((Vector3 target) => LookAt(target, Vector3.Up)), new Vector3(-1.0f, 0.0f, -1.0f), new Vector3(1.0f, 0.0f, -1.0f), 1.0f); // Use lambdas to bind additional arguments for the call.
 * 
 * @summary 
 * 
 *
 * **Example:** Setting the text of a [Label], using an intermediate method and after a delay:
 *
 * @example 
 * 
 * 
 * func _ready():
 *     var tween = create_tween()
 *     tween.tween_method(set_label_text, 0, 10, 1).set_delay(1)
 * func set_label_text(value: int):
 *     $Label.text = "Counting " + str(value)
 * 
 * 
 * public override void _Ready()
 * {
 *     base._Ready();
 *     Tween tween = CreateTween();
 *     tween.TweenMethod(Callable.From<int>(SetLabelText), 0.0f, 10.0f, 1.0f).SetDelay(1.0f);
 * }
 * private void SetLabelText(int value)
 * {
 *     GetNode<Label>("Label").Text = $"Counting {value}";
 * }
 * 
 * @summary 
 * 
 *
*/
tween_method(): MethodTweener;

/**
 * Creates and appends a [PropertyTweener]. This method tweens a [param property] of an [param object] between an initial value and [param final_val] in a span of time equal to [param duration], in seconds. The initial value by default is the property's value at the time the tweening of the [PropertyTweener] starts.
 *
 * **Example:**
 *
 * @example 
 * 
 * 
 * var tween = create_tween()
 * tween.tween_property($Sprite, "position", Vector2(100, 200), 1)
 * tween.tween_property($Sprite, "position", Vector2(200, 300), 1)
 * 
 * 
 * Tween tween = CreateTween();
 * tween.TweenProperty(GetNode("Sprite"), "position", new Vector2(100.0f, 200.0f), 1.0f);
 * tween.TweenProperty(GetNode("Sprite"), "position", new Vector2(200.0f, 300.0f), 1.0f);
 * 
 * @summary 
 * 
 *
 * will move the sprite to position (100, 200) and then to (200, 300). If you use [method PropertyTweener.from] or [method PropertyTweener.from_current], the starting position will be overwritten by the given value instead. See other methods in [PropertyTweener] to see how the tweening can be tweaked further.
 *
 * **Note:** You can find the correct property name by hovering over the property in the Inspector. You can also provide the components of a property directly by using `"property:component"` (eg. `position:x`), where it would only apply to that particular component.
 *
 * **Example:** Moving an object twice from the same position, with different transition types:
 *
 * @example 
 * 
 * 
 * var tween = create_tween()
 * tween.tween_property($Sprite, "position", Vector2.RIGHT * 300, 1).as_relative().set_trans(Tween.TRANS_SINE)
 * tween.tween_property($Sprite, "position", Vector2.RIGHT * 300, 1).as_relative().from_current().set_trans(Tween.TRANS_EXPO)
 * 
 * 
 * Tween tween = CreateTween();
 * tween.TweenProperty(GetNode("Sprite"), "position", Vector2.Right * 300.0f, 1.0f).AsRelative().SetTrans(Tween.TransitionType.Sine);
 * tween.TweenProperty(GetNode("Sprite"), "position", Vector2.Right * 300.0f, 1.0f).AsRelative().FromCurrent().SetTrans(Tween.TransitionType.Expo);
 * 
 * @summary 
 * 
 *
*/
tween_property(): PropertyTweener;

  connect<T extends SignalsOf<Tween>>(signal: T, method: SignalFunction<Tween[T]>): number;



/**
 * The [Tween] updates after each physics frame (see [method Node._physics_process]).
 *
*/
static TWEEN_PROCESS_PHYSICS: any;

/**
 * The [Tween] updates after each process frame (see [method Node._process]).
 *
*/
static TWEEN_PROCESS_IDLE: any;

/**
 * If the [Tween] has a bound node, it will process when that node can process (see [member Node.process_mode]). Otherwise it's the same as [constant TWEEN_PAUSE_STOP].
 *
*/
static TWEEN_PAUSE_BOUND: any;

/**
 * If [SceneTree] is paused, the [Tween] will also pause.
 *
*/
static TWEEN_PAUSE_STOP: any;

/**
 * The [Tween] will process regardless of whether [SceneTree] is paused.
 *
*/
static TWEEN_PAUSE_PROCESS: any;

/**
 * The animation is interpolated linearly.
 *
*/
static TRANS_LINEAR: any;

/**
 * The animation is interpolated using a sine function.
 *
*/
static TRANS_SINE: any;

/**
 * The animation is interpolated with a quintic (to the power of 5) function.
 *
*/
static TRANS_QUINT: any;

/**
 * The animation is interpolated with a quartic (to the power of 4) function.
 *
*/
static TRANS_QUART: any;

/**
 * The animation is interpolated with a quadratic (to the power of 2) function.
 *
*/
static TRANS_QUAD: any;

/**
 * The animation is interpolated with an exponential (to the power of x) function.
 *
*/
static TRANS_EXPO: any;

/**
 * The animation is interpolated with elasticity, wiggling around the edges.
 *
*/
static TRANS_ELASTIC: any;

/**
 * The animation is interpolated with a cubic (to the power of 3) function.
 *
*/
static TRANS_CUBIC: any;

/**
 * The animation is interpolated with a function using square roots.
 *
*/
static TRANS_CIRC: any;

/**
 * The animation is interpolated by bouncing at the end.
 *
*/
static TRANS_BOUNCE: any;

/**
 * The animation is interpolated backing out at ends.
 *
*/
static TRANS_BACK: any;

/**
 * The animation is interpolated like a spring towards the end.
 *
*/
static TRANS_SPRING: any;

/**
 * The interpolation starts slowly and speeds up towards the end.
 *
*/
static EASE_IN: any;

/**
 * The interpolation starts quickly and slows down towards the end.
 *
*/
static EASE_OUT: any;

/**
 * A combination of [constant EASE_IN] and [constant EASE_OUT]. The interpolation is slowest at both ends.
 *
*/
static EASE_IN_OUT: any;

/**
 * A combination of [constant EASE_IN] and [constant EASE_OUT]. The interpolation is fastest at both ends.
 *
*/
static EASE_OUT_IN: any;


/**
 * Emitted when the [Tween] has finished all tweening. Never emitted when the [Tween] is set to infinite looping (see [method set_loops]).
 *
*/
$finished: Signal<() => void>

/**
 * Emitted when a full loop is complete (see [method set_loops]), providing the loop index. This signal is not emitted after the final loop, use [signal finished] instead for this case.
 *
*/
$loop_finished: Signal<() => void>

/**
 * Emitted when one step of the [Tween] is complete, providing the step index. One step is either a single [Tweener] or a group of [Tweener]s running in parallel.
 *
*/
$step_finished: Signal<() => void>

}

