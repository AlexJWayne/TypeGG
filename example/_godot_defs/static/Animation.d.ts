
/**
 * This resource holds data that can be used to animate anything in the engine. Animations are divided into tracks and each track must be linked to a node. The state of that node can be changed through time, by adding timed keys (events) to the track.
 *
 * @example 
 * 
 * 
 * # This creates an animation that makes the node "Enemy" move to the right by
 * # 100 pixels in 0.5 seconds.
 * var animation = Animation.new()
 * var track_index = animation.add_track(Animation.TYPE_VALUE)
 * animation.track_set_path(track_index, "Enemy:position:x")
 * animation.track_insert_key(track_index, 0.0, 0)
 * animation.track_insert_key(track_index, 0.5, 100)
 * 
 * 
 * // This creates an animation that makes the node "Enemy" move to the right by
 * // 100 pixels in 0.5 seconds.
 * var animation = new Animation();
 * int trackIndex = animation.AddTrack(Animation.TrackType.Value);
 * animation.TrackSetPath(trackIndex, "Enemy:position:x");
 * animation.TrackInsertKey(trackIndex, 0.0f, 0);
 * animation.TrackInsertKey(trackIndex, 0.5f, 100);
 * 
 * @summary 
 * 
 *
 * Animations are just data containers, and must be added to nodes such as an [AnimationPlayer] to be played back. Animation tracks have different types, each with its own set of dedicated methods. Check [enum TrackType] to see available types.
 *
 * **Note:** For 3D position/rotation/scale, using the dedicated [constant TYPE_POSITION_3D], [constant TYPE_ROTATION_3D] and [constant TYPE_SCALE_3D] track types instead of [constant TYPE_VALUE] is recommended for performance reasons.
 *
*/
declare class Animation extends Resource  {

  
/**
 * This resource holds data that can be used to animate anything in the engine. Animations are divided into tracks and each track must be linked to a node. The state of that node can be changed through time, by adding timed keys (events) to the track.
 *
 * @example 
 * 
 * 
 * # This creates an animation that makes the node "Enemy" move to the right by
 * # 100 pixels in 0.5 seconds.
 * var animation = Animation.new()
 * var track_index = animation.add_track(Animation.TYPE_VALUE)
 * animation.track_set_path(track_index, "Enemy:position:x")
 * animation.track_insert_key(track_index, 0.0, 0)
 * animation.track_insert_key(track_index, 0.5, 100)
 * 
 * 
 * // This creates an animation that makes the node "Enemy" move to the right by
 * // 100 pixels in 0.5 seconds.
 * var animation = new Animation();
 * int trackIndex = animation.AddTrack(Animation.TrackType.Value);
 * animation.TrackSetPath(trackIndex, "Enemy:position:x");
 * animation.TrackInsertKey(trackIndex, 0.0f, 0);
 * animation.TrackInsertKey(trackIndex, 0.5f, 100);
 * 
 * @summary 
 * 
 *
 * Animations are just data containers, and must be added to nodes such as an [AnimationPlayer] to be played back. Animation tracks have different types, each with its own set of dedicated methods. Check [enum TrackType] to see available types.
 *
 * **Note:** For 3D position/rotation/scale, using the dedicated [constant TYPE_POSITION_3D], [constant TYPE_ROTATION_3D] and [constant TYPE_SCALE_3D] track types instead of [constant TYPE_VALUE] is recommended for performance reasons.
 *
*/
  new(): Animation; 
  static "new"(): Animation 


/**
 * The total length of the animation (in seconds).
 *
 * **Note:** Length is not delimited by the last key, as this one may be before or after the end to ensure correct interpolation and looping.
 *
*/
length: float;

/** Determines the behavior of both ends of the animation timeline during animation playback. This is used for correct interpolation of animation cycles, and for hinting the player that it must restart the animation. */
loop_mode: int;

/** The animation step value. */
step: float;

/** Adds a track to the Animation. */
add_track(): int;

/** Returns the animation name at the key identified by [param key_idx]. The [param track_idx] must be the index of an Animation Track. */
animation_track_get_key_animation(): StringName;

/** Inserts a key with value [param animation] at the given [param time] (in seconds). The [param track_idx] must be the index of an Animation Track. */
animation_track_insert_key(): int;

/** Sets the key identified by [param key_idx] to value [param animation]. The [param track_idx] must be the index of an Animation Track. */
animation_track_set_key_animation(): void;

/**
 * Returns the end offset of the key identified by [param key_idx]. The [param track_idx] must be the index of an Audio Track.
 *
 * End offset is the number of seconds cut off at the ending of the audio stream.
 *
*/
audio_track_get_key_end_offset(): float;

/**
 * Returns the start offset of the key identified by [param key_idx]. The [param track_idx] must be the index of an Audio Track.
 *
 * Start offset is the number of seconds cut off at the beginning of the audio stream.
 *
*/
audio_track_get_key_start_offset(): float;

/** Returns the audio stream of the key identified by [param key_idx]. The [param track_idx] must be the index of an Audio Track. */
audio_track_get_key_stream(): Resource;

/**
 * Inserts an Audio Track key at the given [param time] in seconds. The [param track_idx] must be the index of an Audio Track.
 *
 * [param stream] is the [AudioStream] resource to play. [param start_offset] is the number of seconds cut off at the beginning of the audio stream, while [param end_offset] is at the ending.
 *
*/
audio_track_insert_key(): int;

/** Returns [code]true[/code] if the track at [param track_idx] will be blended with other animations. */
audio_track_is_use_blend(): boolean;

/** Sets the end offset of the key identified by [param key_idx] to value [param offset]. The [param track_idx] must be the index of an Audio Track. */
audio_track_set_key_end_offset(): void;

/** Sets the start offset of the key identified by [param key_idx] to value [param offset]. The [param track_idx] must be the index of an Audio Track. */
audio_track_set_key_start_offset(): void;

/** Sets the stream of the key identified by [param key_idx] to value [param stream]. The [param track_idx] must be the index of an Audio Track. */
audio_track_set_key_stream(): void;

/** Sets whether the track will be blended with other animations. If [code]true[/code], the audio playback volume changes depending on the blend value. */
audio_track_set_use_blend(): void;

/** Returns the in handle of the key identified by [param key_idx]. The [param track_idx] must be the index of a Bezier Track. */
bezier_track_get_key_in_handle(): Vector2;

/** Returns the out handle of the key identified by [param key_idx]. The [param track_idx] must be the index of a Bezier Track. */
bezier_track_get_key_out_handle(): Vector2;

/** Returns the value of the key identified by [param key_idx]. The [param track_idx] must be the index of a Bezier Track. */
bezier_track_get_key_value(): float;

/**
 * Inserts a Bezier Track key at the given [param time] in seconds. The [param track_idx] must be the index of a Bezier Track.
 *
 * [param in_handle] is the left-side weight of the added Bezier curve point, [param out_handle] is the right-side one, while [param value] is the actual value at this point.
 *
*/
bezier_track_insert_key(): int;

/** Returns the interpolated value at the given [param time] (in seconds). The [param track_idx] must be the index of a Bezier Track. */
bezier_track_interpolate(): float;

/** Sets the in handle of the key identified by [param key_idx] to value [param in_handle]. The [param track_idx] must be the index of a Bezier Track. */
bezier_track_set_key_in_handle(): void;

/** Sets the out handle of the key identified by [param key_idx] to value [param out_handle]. The [param track_idx] must be the index of a Bezier Track. */
bezier_track_set_key_out_handle(): void;

/** Sets the value of the key identified by [param key_idx] to the given value. The [param track_idx] must be the index of a Bezier Track. */
bezier_track_set_key_value(): void;

/** Inserts a key in a given blend shape track. Returns the key index. */
blend_shape_track_insert_key(): int;

/** Returns the interpolated blend shape value at the given time (in seconds). The [param track_idx] must be the index of a blend shape track. */
blend_shape_track_interpolate(): float;

/** Clear the animation (clear all tracks and reset all). */
clear(): void;

/**
 * Compress the animation and all its tracks in-place. This will make [method track_is_compressed] return `true` once called on this [Animation]. Compressed tracks require less memory to be played, and are designed to be used for complex 3D animations (such as cutscenes) imported from external 3D software. Compression is lossy, but the difference is usually not noticeable in real world conditions.
 *
 * **Note:** Compressed tracks have various limitations (such as not being editable from the editor), so only use compressed animations if you actually need them.
 *
*/
compress(): void;

/** Adds a new track to [param to_animation] that is a copy of the given track from this animation. */
copy_track(): void;

/** Returns the index of the specified track. If the track is not found, return -1. */
find_track(): int;

/** Returns the amount of tracks in the animation. */
get_track_count(): int;

/** Returns the method name of a method track. */
method_track_get_name(): StringName;

/** Returns the arguments values to be called on a method track for a given key in a given track. */
method_track_get_params(): any[];

/** Inserts a key in a given 3D position track. Returns the key index. */
position_track_insert_key(): int;

/** Returns the interpolated position value at the given time (in seconds). The [param track_idx] must be the index of a 3D position track. */
position_track_interpolate(): Vector3;

/** Removes a track by specifying the track index. */
remove_track(): void;

/** Inserts a key in a given 3D rotation track. Returns the key index. */
rotation_track_insert_key(): int;

/** Returns the interpolated rotation value at the given time (in seconds). The [param track_idx] must be the index of a 3D rotation track. */
rotation_track_interpolate(): Quaternion;

/** Inserts a key in a given 3D scale track. Returns the key index. */
scale_track_insert_key(): int;

/** Returns the interpolated scale value at the given time (in seconds). The [param track_idx] must be the index of a 3D scale track. */
scale_track_interpolate(): Vector3;

/** Finds the key index by time in a given track. Optionally, only find it if the approx/exact time is given. */
track_find_key(): int;

/** Returns [code]true[/code] if the track at [param track_idx] wraps the interpolation loop. New tracks wrap the interpolation loop by default. */
track_get_interpolation_loop_wrap(): boolean;

/** Returns the interpolation type of a given track. */
track_get_interpolation_type(): int;

/** Returns the number of keys in a given track. */
track_get_key_count(): int;

/** Returns the time at which the key is located. */
track_get_key_time(): float;

/** Returns the transition curve (easing) for a specific key (see the built-in math function [method @GlobalScope.ease]). */
track_get_key_transition(): float;

/** Returns the value of a given key in a given track. */
track_get_key_value(): any;

/** Gets the path of a track. For more information on the path format, see [method track_set_path]. */
track_get_path(): NodePathType;

/** Gets the type of a track. */
track_get_type(): int;

/** Inserts a generic key in a given track. Returns the key index. */
track_insert_key(): int;

/** Returns [code]true[/code] if the track is compressed, [code]false[/code] otherwise. See also [method compress]. */
track_is_compressed(): boolean;

/** Returns [code]true[/code] if the track at index [param track_idx] is enabled. */
track_is_enabled(): boolean;

/** Returns [code]true[/code] if the given track is imported. Else, return [code]false[/code]. */
track_is_imported(): boolean;

/** Moves a track down. */
track_move_down(): void;

/** Changes the index position of track [param track_idx] to the one defined in [param to_idx]. */
track_move_to(): void;

/** Moves a track up. */
track_move_up(): void;

/** Removes a key by index in a given track. */
track_remove_key(): void;

/** Removes a key at [param time] in a given track. */
track_remove_key_at_time(): void;

/** Enables/disables the given track. Tracks are enabled by default. */
track_set_enabled(): void;

/** Sets the given track as imported or not. */
track_set_imported(): void;

/** If [code]true[/code], the track at [param track_idx] wraps the interpolation loop. */
track_set_interpolation_loop_wrap(): void;

/** Sets the interpolation type of a given track. */
track_set_interpolation_type(): void;

/** Sets the time of an existing key. */
track_set_key_time(): void;

/** Sets the transition curve (easing) for a specific key (see the built-in math function [method @GlobalScope.ease]). */
track_set_key_transition(): void;

/** Sets the value of an existing key. */
track_set_key_value(): void;

/**
 * Sets the path of a track. Paths must be valid scene-tree paths to a node and must be specified starting from the parent node of the node that will reproduce the animation. Tracks that control properties or bones must append their name after the path, separated by `":"`.
 *
 * For example, `"character/skeleton:ankle"` or `"character/mesh:transform/local"`.
 *
*/
track_set_path(): void;

/** Swaps the track [param track_idx]'s index position with the track [param with_idx]. */
track_swap(): void;

/** Returns the update mode of a value track. */
value_track_get_update_mode(): int;

/** Returns the interpolated value at the given time (in seconds). The [param track_idx] must be the index of a value track. */
value_track_interpolate(): any;

/** Sets the update mode (see [enum UpdateMode]) of a value track. */
value_track_set_update_mode(): void;

  connect<T extends SignalsOf<Animation>>(signal: T, method: SignalFunction<Animation[T]>): number;



/**
 * Value tracks set values in node properties, but only those which can be interpolated. For 3D position/rotation/scale, using the dedicated [constant TYPE_POSITION_3D], [constant TYPE_ROTATION_3D] and [constant TYPE_SCALE_3D] track types instead of [constant TYPE_VALUE] is recommended for performance reasons.
 *
*/
static TYPE_VALUE: any;

/**
 * 3D position track (values are stored in [Vector3]s).
 *
*/
static TYPE_POSITION_3D: any;

/**
 * 3D rotation track (values are stored in [Quaternion]s).
 *
*/
static TYPE_ROTATION_3D: any;

/**
 * 3D scale track (values are stored in [Vector3]s).
 *
*/
static TYPE_SCALE_3D: any;

/**
 * Blend shape track.
 *
*/
static TYPE_BLEND_SHAPE: any;

/**
 * Method tracks call functions with given arguments per key.
 *
*/
static TYPE_METHOD: any;

/**
 * Bezier tracks are used to interpolate a value using custom curves. They can also be used to animate sub-properties of vectors and colors (e.g. alpha value of a [Color]).
 *
*/
static TYPE_BEZIER: any;

/**
 * Audio tracks are used to play an audio stream with either type of [AudioStreamPlayer]. The stream can be trimmed and previewed in the animation.
 *
*/
static TYPE_AUDIO: any;

/**
 * Animation tracks play animations in other [AnimationPlayer] nodes.
 *
*/
static TYPE_ANIMATION: any;

/**
 * No interpolation (nearest value).
 *
*/
static INTERPOLATION_NEAREST: any;

/**
 * Linear interpolation.
 *
*/
static INTERPOLATION_LINEAR: any;

/**
 * Cubic interpolation. This looks smoother than linear interpolation, but is more expensive to interpolate. Stick to [constant INTERPOLATION_LINEAR] for complex 3D animations imported from external software, even if it requires using a higher animation framerate in return.
 *
*/
static INTERPOLATION_CUBIC: any;

/**
 * Linear interpolation with shortest path rotation.
 *
 * **Note:** The result value is always normalized and may not match the key value.
 *
*/
static INTERPOLATION_LINEAR_ANGLE: any;

/**
 * Cubic interpolation with shortest path rotation.
 *
 * **Note:** The result value is always normalized and may not match the key value.
 *
*/
static INTERPOLATION_CUBIC_ANGLE: any;

/**
 * Update between keyframes and hold the value.
 *
*/
static UPDATE_CONTINUOUS: any;

/**
 * Update at the keyframes.
 *
*/
static UPDATE_DISCRETE: any;

/**
 * Same as linear interpolation, but also interpolates from the current value (i.e. dynamically at runtime) if the first key isn't at 0 seconds.
 *
*/
static UPDATE_CAPTURE: any;

/**
 * At both ends of the animation, the animation will stop playing.
 *
*/
static LOOP_NONE: any;

/**
 * At both ends of the animation, the animation will be repeated without changing the playback direction.
 *
*/
static LOOP_LINEAR: any;

/**
 * Repeats playback and reverse playback at both ends of the animation.
 *
*/
static LOOP_PINGPONG: any;

/**
 * This flag indicates that the animation proceeds without any looping.
 *
*/
static LOOPED_FLAG_NONE: any;

/**
 * This flag indicates that the animation has reached the end of the animation and just after loop processed.
 *
*/
static LOOPED_FLAG_END: any;

/**
 * This flag indicates that the animation has reached the start of the animation and just after loop processed.
 *
*/
static LOOPED_FLAG_START: any;

/**
 * Finds the nearest time key.
 *
*/
static FIND_MODE_NEAREST: any;

/**
 * Finds only the key with approximating the time.
 *
*/
static FIND_MODE_APPROX: any;

/**
 * Finds only the key with matching the time.
 *
*/
static FIND_MODE_EXACT: any;



}

