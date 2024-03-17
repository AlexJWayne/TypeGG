
/**
 * [AnimatedTexture] is a resource format for frame-based animations, where multiple textures can be chained automatically with a predefined delay for each frame. Unlike [AnimationPlayer] or [AnimatedSprite2D], it isn't a [Node], but has the advantage of being usable anywhere a [Texture2D] resource can be used, e.g. in a [TileSet].
 *
 * The playback of the animation is controlled by the [member speed_scale] property, as well as each frame's duration (see [method set_frame_duration]). The animation loops, i.e. it will restart at frame 0 automatically after playing the last frame.
 *
 * [AnimatedTexture] currently requires all frame textures to have the same size, otherwise the bigger ones will be cropped to match the smallest one.
 *
 * **Note:** AnimatedTexture doesn't support using [AtlasTexture]s. Each frame needs to be a separate [Texture2D].
 *
 * **Warning:** The current implementation is not efficient for the modern renderers.
 *
 * **Deprecated.** This class is deprecated, and might be removed in a future release.
 *
*/
declare class AnimatedTexture extends Texture2D  {

  
/**
 * [AnimatedTexture] is a resource format for frame-based animations, where multiple textures can be chained automatically with a predefined delay for each frame. Unlike [AnimationPlayer] or [AnimatedSprite2D], it isn't a [Node], but has the advantage of being usable anywhere a [Texture2D] resource can be used, e.g. in a [TileSet].
 *
 * The playback of the animation is controlled by the [member speed_scale] property, as well as each frame's duration (see [method set_frame_duration]). The animation loops, i.e. it will restart at frame 0 automatically after playing the last frame.
 *
 * [AnimatedTexture] currently requires all frame textures to have the same size, otherwise the bigger ones will be cropped to match the smallest one.
 *
 * **Note:** AnimatedTexture doesn't support using [AtlasTexture]s. Each frame needs to be a separate [Texture2D].
 *
 * **Warning:** The current implementation is not efficient for the modern renderers.
 *
 * **Deprecated.** This class is deprecated, and might be removed in a future release.
 *
*/
  new(): AnimatedTexture; 
  static "new"(): AnimatedTexture 


/** Sets the currently visible frame of the texture. Setting this frame while playing resets the current frame time, so the newly selected frame plays for its whole configured frame duration. */
current_frame: int;

/** Number of frames to use in the animation. While you can create the frames independently with [method set_frame_texture], you need to set this value for the animation to take new frames into account. The maximum number of frames is [constant MAX_FRAMES]. */
frames: int;

/** If [code]true[/code], the animation will only play once and will not loop back to the first frame after reaching the end. Note that reaching the end will not set [member pause] to [code]true[/code]. */
one_shot: boolean;

/** If [code]true[/code], the animation will pause where it currently is (i.e. at [member current_frame]). The animation will continue from where it was paused when changing this property to [code]false[/code]. */
pause: boolean;


/** The animation speed is multiplied by this value. If set to a negative value, the animation is played in reverse. */
speed_scale: float;

/** Returns the given [param frame]'s duration, in seconds. */
get_frame_duration(): float;

/** Returns the given frame's [Texture2D]. */
get_frame_texture(): Texture2D;

/** Sets the duration of any given [param frame]. The final duration is affected by the [member speed_scale]. If set to [code]0[/code], the frame is skipped during playback. */
set_frame_duration(): void;

/**
 * Assigns a [Texture2D] to the given frame. Frame IDs start at 0, so the first frame has ID 0, and the last frame of the animation has ID [member frames] - 1.
 *
 * You can define any number of textures up to [constant MAX_FRAMES], but keep in mind that only frames from 0 to [member frames] - 1 will be part of the animation.
 *
*/
set_frame_texture(): void;

  connect<T extends SignalsOf<AnimatedTexture>>(signal: T, method: SignalFunction<AnimatedTexture[T]>): number;



/**
 * The maximum number of frames supported by [AnimatedTexture]. If you need more frames in your animation, use [AnimationPlayer] or [AnimatedSprite2D].
 *
*/
static MAX_FRAMES: any;



}

