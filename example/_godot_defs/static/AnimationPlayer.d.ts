
/**
 * An animation player is used for general-purpose playback of animations. It contains a dictionary of [AnimationLibrary] resources and custom blend times between animation transitions.
 *
 * Some methods and properties use a single key to reference an animation directly. These keys are formatted as the key for the library, followed by a forward slash, then the key for the animation within the library, for example `"movement/run"`. If the library's key is an empty string (known as the default library), the forward slash is omitted, being the same key used by the library.
 *
 * [AnimationPlayer] is better-suited than [Tween] for more complex animations, for example ones with non-trivial timings. It can also be used over [Tween] if the animation track editor is more convenient than doing it in code.
 *
 * Updating the target properties of animations occurs at the process frame.
 *
*/
declare class AnimationPlayer extends AnimationMixer  {

  
/**
 * An animation player is used for general-purpose playback of animations. It contains a dictionary of [AnimationLibrary] resources and custom blend times between animation transitions.
 *
 * Some methods and properties use a single key to reference an animation directly. These keys are formatted as the key for the library, followed by a forward slash, then the key for the animation within the library, for example `"movement/run"`. If the library's key is an empty string (known as the default library), the forward slash is omitted, being the same key used by the library.
 *
 * [AnimationPlayer] is better-suited than [Tween] for more complex animations, for example ones with non-trivial timings. It can also be used over [Tween] if the animation track editor is more convenient than doing it in code.
 *
 * Updating the target properties of animations occurs at the process frame.
 *
*/
  new(): AnimationPlayer; 
  static "new"(): AnimationPlayer 


/** If playing, the current animation's key, otherwise, the animation last played. When set, this changes the animation, but will not play it unless already playing. See also [member current_animation]. */
assigned_animation: string;

/** The key of the animation to play when the scene loads. */
autoplay: string;

/**
 * The key of the currently playing animation. If no animation is playing, the property's value is an empty string. Changing this value does not restart the animation. See [method play] for more information on playing animations.
 *
 * **Note:** While this property appears in the Inspector, it's not meant to be edited, and it's not saved in the scene. This property is mainly used to get the currently playing animation, and internally for animation playback tracks. For more information, see [Animation].
 *
*/
current_animation: string;

/** The length (in seconds) of the currently playing animation. */
current_animation_length: float;

/** The position (in seconds) of the currently playing animation. */
current_animation_position: float;

/**
 * If `true` and the engine is running in Movie Maker mode (see [MovieWriter]), exits the engine with [method SceneTree.quit] as soon as an animation is done playing in this [AnimationPlayer]. A message is printed when the engine quits for this reason.
 *
 * **Note:** This obeys the same logic as the [signal AnimationMixer.animation_finished] signal, so it will not quit the engine if the animation is set to be looping.
 *
*/
movie_quit_on_finish: boolean;

/** The default time in which to blend animations. Ranges from 0 to 4096 with 0.01 precision. */
playback_default_blend_time: float;

/**
 * The speed scaling ratio. For example, if this value is `1`, then the animation plays at normal speed. If it's `0.5`, then it plays at half speed. If it's `2`, then it plays at double speed.
 *
 * If set to a negative value, the animation is played in reverse. If set to `0`, the animation will not advance.
 *
*/
speed_scale: float;

/** Returns the key of the animation which is queued to play after the [param animation_from] animation. */
animation_get_next(): StringName;

/** Triggers the [param animation_to] animation when the [param animation_from] animation completes. */
animation_set_next(): void;

/** Clears all queued, unplayed animations. */
clear_queue(): void;

/** Returns the blend time (in seconds) between two animations, referenced by their keys. */
get_blend_time(): float;

/** For backward compatibility. See [enum AnimationMixer.AnimationCallbackModeMethod]. */
get_method_call_mode(): int;

/**
 * Returns the actual playing speed of current animation or `0` if not playing. This speed is the [member speed_scale] property multiplied by `custom_speed` argument specified when calling the [method play] method.
 *
 * Returns a negative value if the current animation is playing backwards.
 *
*/
get_playing_speed(): float;

/** For backward compatibility. See [enum AnimationMixer.AnimationCallbackModeProcess]. */
get_process_callback(): int;

/** Returns a list of the animation keys that are currently queued to play. */
get_queue(): PackedStringArray;

/** For backward compatibility. See [member AnimationMixer.root_node]. */
get_root(): NodePathType;

/** Returns [code]true[/code] if an animation is currently playing (even if [member speed_scale] and/or [code]custom_speed[/code] are [code]0[/code]). */
is_playing(): boolean;

/**
 * Pauses the currently playing animation. The [member current_animation_position] will be kept and calling [method play] or [method play_backwards] without arguments or with the same animation name as [member assigned_animation] will resume the animation.
 *
 * See also [method stop].
 *
*/
pause(): void;

/**
 * Plays the animation with key [param name]. Custom blend times and speed can be set.
 *
 * The [param from_end] option only affects when switching to a new animation track, or if the same track but at the start or end. It does not affect resuming playback that was paused in the middle of an animation. If [param custom_speed] is negative and [param from_end] is `true`, the animation will play backwards (which is equivalent to calling [method play_backwards]).
 *
 * The [AnimationPlayer] keeps track of its current or last played animation with [member assigned_animation]. If this method is called with that same animation [param name], or with no [param name] parameter, the assigned animation will resume playing if it was paused.
 *
 * **Note:** The animation will be updated the next time the [AnimationPlayer] is processed. If other variables are updated at the same time this is called, they may be updated too early. To perform the update immediately, call `advance(0)`.
 *
*/
play(): void;

/**
 * Plays the animation with key [param name] in reverse.
 *
 * This method is a shorthand for [method play] with `custom_speed = -1.0` and `from_end = true`, so see its description for more information.
 *
*/
play_backwards(): void;

/**
 * Queues an animation for playback once the current one is done.
 *
 * **Note:** If a looped animation is currently playing, the queued animation will never play unless the looped animation is stopped somehow.
 *
*/
queue(): void;

/**
 * Seeks the animation to the [param seconds] point in time (in seconds). If [param update] is `true`, the animation updates too, otherwise it updates at process time. Events between the current frame and [param seconds] are skipped.
 *
 * If [param update_only] is true, the method / audio / animation playback tracks will not be processed.
 *
 * **Note:** Seeking to the end of the animation doesn't emit [signal AnimationMixer.animation_finished]. If you want to skip animation and emit the signal, use [method AnimationMixer.advance].
 *
*/
seek(): void;

/** Specifies a blend time (in seconds) between two animations, referenced by their keys. */
set_blend_time(): void;

/** For backward compatibility. See [enum AnimationMixer.AnimationCallbackModeMethod]. */
set_method_call_mode(): void;

/** For backward compatibility. See [enum AnimationMixer.AnimationCallbackModeProcess]. */
set_process_callback(): void;

/** For backward compatibility. See [member AnimationMixer.root_node]. */
set_root(): void;

/**
 * Stops the currently playing animation. The animation position is reset to `0` and the `custom_speed` is reset to `1.0`. See also [method pause].
 *
 * If [param keep_state] is `true`, the animation state is not updated visually.
 *
 * **Note:** The method / audio / animation playback tracks will not be processed by this method.
 *
*/
stop(): void;

  connect<T extends SignalsOf<AnimationPlayer>>(signal: T, method: SignalFunction<AnimationPlayer[T]>): number;



/**
 * For backward compatibility. See [constant AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_PHYSICS].
 *
*/
static ANIMATION_PROCESS_PHYSICS: any;

/**
 * For backward compatibility. See [constant AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_IDLE].
 *
*/
static ANIMATION_PROCESS_IDLE: any;

/**
 * For backward compatibility. See [constant AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_MANUAL].
 *
*/
static ANIMATION_PROCESS_MANUAL: any;

/**
 * For backward compatibility. See [constant AnimationMixer.ANIMATION_CALLBACK_MODE_METHOD_DEFERRED].
 *
*/
static ANIMATION_METHOD_CALL_DEFERRED: any;

/**
 * For backward compatibility. See [constant AnimationMixer.ANIMATION_CALLBACK_MODE_METHOD_IMMEDIATE].
 *
*/
static ANIMATION_METHOD_CALL_IMMEDIATE: any;


/**
 * Emitted when a queued animation plays after the previous animation finished. See also [method AnimationPlayer.queue].
 *
 * **Note:** The signal is not emitted when the animation is changed via [method AnimationPlayer.play] or by an [AnimationTree].
 *
*/
$animation_changed: Signal<() => void>

/**
 * Emitted when [member current_animation] changes.
 *
*/
$current_animation_changed: Signal<() => void>

}

