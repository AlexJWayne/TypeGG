
/**
 * Plays audio that is attenuated with distance to the listener.
 *
 * By default, audio is heard from the screen center. This can be changed by adding an [AudioListener2D] node to the scene and enabling it by calling [method AudioListener2D.make_current] on it.
 *
 * See also [AudioStreamPlayer] to play a sound non-positionally.
 *
 * **Note:** Hiding an [AudioStreamPlayer2D] node does not disable its audio output. To temporarily disable an [AudioStreamPlayer2D]'s audio output, set [member volume_db] to a very low value like `-100` (which isn't audible to human hearing).
 *
*/
declare class AudioStreamPlayer2D extends Node2D  {

  
/**
 * Plays audio that is attenuated with distance to the listener.
 *
 * By default, audio is heard from the screen center. This can be changed by adding an [AudioListener2D] node to the scene and enabling it by calling [method AudioListener2D.make_current] on it.
 *
 * See also [AudioStreamPlayer] to play a sound non-positionally.
 *
 * **Note:** Hiding an [AudioStreamPlayer2D] node does not disable its audio output. To temporarily disable an [AudioStreamPlayer2D]'s audio output, set [member volume_db] to a very low value like `-100` (which isn't audible to human hearing).
 *
*/
  new(): AudioStreamPlayer2D; 
  static "new"(): AudioStreamPlayer2D 


/** Determines which [Area2D] layers affect the sound for reverb and audio bus effects. Areas can be used to redirect [AudioStream]s so that they play in a certain audio bus. An example of how you might use this is making a "water" area so that sounds played in the water are redirected through an audio bus to make them sound like they are being played underwater. */
area_mask: int;

/** The volume is attenuated over distance with this as an exponent. */
attenuation: float;

/** If [code]true[/code], audio plays when added to scene tree. */
autoplay: boolean;

/**
 * Bus on which this audio is playing.
 *
 * **Note:** When setting this property, keep in mind that no validation is performed to see if the given name matches an existing bus. This is because audio bus layouts might be loaded after this property is set. If this given name can't be resolved at runtime, it will fall back to `"Master"`.
 *
*/
bus: StringName;

/** Maximum distance from which audio is still hearable. */
max_distance: float;

/** The maximum number of sounds this node can play at the same time. Playing additional sounds after this value is reached will cut off the oldest sounds. */
max_polyphony: int;

/** Scales the panning strength for this node by multiplying the base [member ProjectSettings.audio/general/2d_panning_strength] with this factor. Higher values will pan audio from left to right more dramatically than lower values. */
panning_strength: float;

/** The pitch and the tempo of the audio, as a multiplier of the audio sample's sample rate. */
pitch_scale: float;

/** If [code]true[/code], audio is playing or is queued to be played (see [method play]). */
playing: boolean;

/** The [AudioStream] object to be played. */
stream: AudioStream;

/** If [code]true[/code], the playback is paused. You can resume it by setting [member stream_paused] to [code]false[/code]. */
stream_paused: boolean;

/** Base volume before attenuation. */
volume_db: float;

/** Returns the position in the [AudioStream]. */
get_playback_position(): float;

/** Returns the [AudioStreamPlayback] object associated with this [AudioStreamPlayer2D]. */
get_stream_playback(): AudioStreamPlayback;

/** Returns whether the [AudioStreamPlayer] can return the [AudioStreamPlayback] object or not. */
has_stream_playback(): boolean;

/** Queues the audio to play on the next physics frame, from the given position [param from_position], in seconds. */
play(): void;

/** Sets the position from which audio will be played, in seconds. */
seek(): void;

/** Stops the audio. */
stop(): void;

  connect<T extends SignalsOf<AudioStreamPlayer2D>>(signal: T, method: SignalFunction<AudioStreamPlayer2D[T]>): number;





/**
 * Emitted when the audio stops playing.
 *
*/
$finished: Signal<() => void>

}

