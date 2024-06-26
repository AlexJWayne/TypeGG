
/**
 * [AnimatedSprite2D] is similar to the [Sprite2D] node, except it carries multiple textures as animation frames. Animations are created using a [SpriteFrames] resource, which allows you to import image files (or a folder containing said files) to provide the animation frames for the sprite. The [SpriteFrames] resource can be configured in the editor via the SpriteFrames bottom panel.
 *
*/
declare class AnimatedSprite2D extends Node2D  {

  
/**
 * [AnimatedSprite2D] is similar to the [Sprite2D] node, except it carries multiple textures as animation frames. Animations are created using a [SpriteFrames] resource, which allows you to import image files (or a folder containing said files) to provide the animation frames for the sprite. The [SpriteFrames] resource can be configured in the editor via the SpriteFrames bottom panel.
 *
*/
  new(): AnimatedSprite2D; 
  static "new"(): AnimatedSprite2D 


/** The current animation from the [member sprite_frames] resource. If this value is changed, the [member frame] counter and the [member frame_progress] are reset. */
animation: StringName;

/** The key of the animation to play when the scene loads. */
autoplay: string;

/** If [code]true[/code], texture will be centered. */
centered: boolean;

/** If [code]true[/code], texture is flipped horizontally. */
flip_h: boolean;

/** If [code]true[/code], texture is flipped vertically. */
flip_v: boolean;

/** The displayed animation frame's index. Setting this property also resets [member frame_progress]. If this is not desired, use [method set_frame_and_progress]. */
frame: int;

/** The progress value between [code]0.0[/code] and [code]1.0[/code] until the current frame transitions to the next frame. If the animation is playing backwards, the value transitions from [code]1.0[/code] to [code]0.0[/code]. */
frame_progress: float;

/** The texture's drawing offset. */
offset: Vector2;

/**
 * The speed scaling ratio. For example, if this value is `1`, then the animation plays at normal speed. If it's `0.5`, then it plays at half speed. If it's `2`, then it plays at double speed.
 *
 * If set to a negative value, the animation is played in reverse. If set to `0`, the animation will not advance.
 *
*/
speed_scale: float;

/** The [SpriteFrames] resource containing the animation(s). Allows you the option to load, edit, clear, make unique and save the states of the [SpriteFrames] resource. */
sprite_frames: SpriteFrames;

/**
 * Returns the actual playing speed of current animation or `0` if not playing. This speed is the [member speed_scale] property multiplied by `custom_speed` argument specified when calling the [method play] method.
 *
 * Returns a negative value if the current animation is playing backwards.
 *
*/
get_playing_speed(): float;

/** Returns [code]true[/code] if an animation is currently playing (even if [member speed_scale] and/or [code]custom_speed[/code] are [code]0[/code]). */
is_playing(): boolean;

/**
 * Pauses the currently playing animation. The [member frame] and [member frame_progress] will be kept and calling [method play] or [method play_backwards] without arguments will resume the animation from the current playback position.
 *
 * See also [method stop].
 *
*/
pause(): void;

/**
 * Plays the animation with key [param name]. If [param custom_speed] is negative and [param from_end] is `true`, the animation will play backwards (which is equivalent to calling [method play_backwards]).
 *
 * If this method is called with that same animation [param name], or with no [param name] parameter, the assigned animation will resume playing if it was paused.
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
 * The setter of [member frame] resets the [member frame_progress] to `0.0` implicitly, but this method avoids that.
 *
 * This is useful when you want to carry over the current [member frame_progress] to another [member frame].
 *
 * **Example:**
 *
 * @example 
 * 
 * 
 * # Change the animation with keeping the frame index and progress.
 * var current_frame = animated_sprite.get_frame()
 * var current_progress = animated_sprite.get_frame_progress()
 * animated_sprite.play("walk_another_skin")
 * animated_sprite.set_frame_and_progress(current_frame, current_progress)
 * 
 * @summary 
 * 
 *
*/
set_frame_and_progress(): void;

/** Stops the currently playing animation. The animation position is reset to [code]0[/code] and the [code]custom_speed[/code] is reset to [code]1.0[/code]. See also [method pause]. */
stop(): void;

  connect<T extends SignalsOf<AnimatedSprite2D>>(signal: T, method: SignalFunction<AnimatedSprite2D[T]>): number;





/**
 * Emitted when [member animation] changes.
 *
*/
$animation_changed: Signal<() => void>

/**
 * Emitted when the animation reaches the end, or the start if it is played in reverse. When the animation finishes, it pauses the playback.
 *
*/
$animation_finished: Signal<() => void>

/**
 * Emitted when the animation loops.
 *
*/
$animation_looped: Signal<() => void>

/**
 * Emitted when [member frame] changes.
 *
*/
$frame_changed: Signal<() => void>

/**
 * Emitted when [member sprite_frames] changes.
 *
*/
$sprite_frames_changed: Signal<() => void>

}

