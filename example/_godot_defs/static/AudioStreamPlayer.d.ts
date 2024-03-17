
/**
 * Plays an audio stream non-positionally.
 *
 * To play audio positionally, use [AudioStreamPlayer2D] or [AudioStreamPlayer3D] instead of [AudioStreamPlayer].
 *
*/
declare class AudioStreamPlayer extends Node  {

  
/**
 * Plays an audio stream non-positionally.
 *
 * To play audio positionally, use [AudioStreamPlayer2D] or [AudioStreamPlayer3D] instead of [AudioStreamPlayer].
 *
*/
  new(): AudioStreamPlayer; 
  static "new"(): AudioStreamPlayer 


/** If [code]true[/code], audio plays when added to scene tree. */
autoplay: boolean;

/**
 * Bus on which this audio is playing.
 *
 * **Note:** When setting this property, keep in mind that no validation is performed to see if the given name matches an existing bus. This is because audio bus layouts might be loaded after this property is set. If this given name can't be resolved at runtime, it will fall back to `"Master"`.
 *
*/
bus: StringName;

/** The maximum number of sounds this node can play at the same time. Playing additional sounds after this value is reached will cut off the oldest sounds. */
max_polyphony: int;

/** If the audio configuration has more than two speakers, this sets the target channels. See [enum MixTarget] constants. */
mix_target: int;

/** The pitch and the tempo of the audio, as a multiplier of the audio sample's sample rate. */
pitch_scale: float;

/** If [code]true[/code], audio is playing. */
playing: boolean;

/** The [AudioStream] object to be played. */
stream: AudioStream;

/** If [code]true[/code], the playback is paused. You can resume it by setting [member stream_paused] to [code]false[/code]. */
stream_paused: boolean;

/** Volume of sound, in dB. */
volume_db: float;

/** Returns the position in the [AudioStream] in seconds. */
get_playback_position(): float;

/** Returns the [AudioStreamPlayback] object associated with this [AudioStreamPlayer]. */
get_stream_playback(): AudioStreamPlayback;

/** Returns whether the [AudioStreamPlayer] can return the [AudioStreamPlayback] object or not. */
has_stream_playback(): boolean;

/** Plays the audio from the given [param from_position], in seconds. */
play(): void;

/** Sets the position from which audio will be played, in seconds. */
seek(): void;

/** Stops the audio. */
stop(): void;

  connect<T extends SignalsOf<AudioStreamPlayer>>(signal: T, method: SignalFunction<AudioStreamPlayer[T]>): number;



/**
 * The audio will be played only on the first channel.
 *
*/
static MIX_TARGET_STEREO: any;

/**
 * The audio will be played on all surround channels.
 *
*/
static MIX_TARGET_SURROUND: any;

/**
 * The audio will be played on the second channel, which is usually the center.
 *
*/
static MIX_TARGET_CENTER: any;


/**
 * Emitted when the audio stops playing.
 *
*/
$finished: Signal<() => void>

}

