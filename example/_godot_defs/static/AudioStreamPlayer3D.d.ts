
/**
 * Plays audio with positional sound effects, based on the relative position of the audio listener. Positional effects include distance attenuation, directionality, and the Doppler effect. For greater realism, a low-pass filter is applied to distant sounds. This can be disabled by setting [member attenuation_filter_cutoff_hz] to `20500`.
 *
 * By default, audio is heard from the camera position. This can be changed by adding an [AudioListener3D] node to the scene and enabling it by calling [method AudioListener3D.make_current] on it.
 *
 * See also [AudioStreamPlayer] to play a sound non-positionally.
 *
 * **Note:** Hiding an [AudioStreamPlayer3D] node does not disable its audio output. To temporarily disable an [AudioStreamPlayer3D]'s audio output, set [member volume_db] to a very low value like `-100` (which isn't audible to human hearing).
 *
*/
declare class AudioStreamPlayer3D extends Node3D  {

  
/**
 * Plays audio with positional sound effects, based on the relative position of the audio listener. Positional effects include distance attenuation, directionality, and the Doppler effect. For greater realism, a low-pass filter is applied to distant sounds. This can be disabled by setting [member attenuation_filter_cutoff_hz] to `20500`.
 *
 * By default, audio is heard from the camera position. This can be changed by adding an [AudioListener3D] node to the scene and enabling it by calling [method AudioListener3D.make_current] on it.
 *
 * See also [AudioStreamPlayer] to play a sound non-positionally.
 *
 * **Note:** Hiding an [AudioStreamPlayer3D] node does not disable its audio output. To temporarily disable an [AudioStreamPlayer3D]'s audio output, set [member volume_db] to a very low value like `-100` (which isn't audible to human hearing).
 *
*/
  new(): AudioStreamPlayer3D; 
  static "new"(): AudioStreamPlayer3D 


/** Determines which [Area3D] layers affect the sound for reverb and audio bus effects. Areas can be used to redirect [AudioStream]s so that they play in a certain audio bus. An example of how you might use this is making a "water" area so that sounds played in the water are redirected through an audio bus to make them sound like they are being played underwater. */
area_mask: int;

/** The cutoff frequency of the attenuation low-pass filter, in Hz. A sound above this frequency is attenuated more than a sound below this frequency. To disable this effect, set this to [code]20500[/code] as this frequency is above the human hearing limit. */
attenuation_filter_cutoff_hz: float;

/** Amount how much the filter affects the loudness, in decibels. */
attenuation_filter_db: float;

/** Decides if audio should get quieter with distance linearly, quadratically, logarithmically, or not be affected by distance, effectively disabling attenuation. */
attenuation_model: int;

/** If [code]true[/code], audio plays when the AudioStreamPlayer3D node is added to scene tree. */
autoplay: boolean;

/**
 * The bus on which this audio is playing.
 *
 * **Note:** When setting this property, keep in mind that no validation is performed to see if the given name matches an existing bus. This is because audio bus layouts might be loaded after this property is set. If this given name can't be resolved at runtime, it will fall back to `"Master"`.
 *
*/
bus: StringName;

/** Decides in which step the Doppler effect should be calculated. */
doppler_tracking: int;

/** The angle in which the audio reaches a listener unattenuated. */
emission_angle_degrees: float;

/** If [code]true[/code], the audio should be attenuated according to the direction of the sound. */
emission_angle_enabled: boolean;

/** Attenuation factor used if listener is outside of [member emission_angle_degrees] and [member emission_angle_enabled] is set, in decibels. */
emission_angle_filter_attenuation_db: float;

/** Sets the absolute maximum of the sound level, in decibels. */
max_db: float;

/** The distance past which the sound can no longer be heard at all. Only has an effect if set to a value greater than [code]0.0[/code]. [member max_distance] works in tandem with [member unit_size]. However, unlike [member unit_size] whose behavior depends on the [member attenuation_model], [member max_distance] always works in a linear fashion. This can be used to prevent the [AudioStreamPlayer3D] from requiring audio mixing when the listener is far away, which saves CPU resources. */
max_distance: float;

/** The maximum number of sounds this node can play at the same time. Playing additional sounds after this value is reached will cut off the oldest sounds. */
max_polyphony: int;

/** Scales the panning strength for this node by multiplying the base [member ProjectSettings.audio/general/3d_panning_strength] with this factor. Higher values will pan audio from left to right more dramatically than lower values. */
panning_strength: float;

/** The pitch and the tempo of the audio, as a multiplier of the audio sample's sample rate. */
pitch_scale: float;

/** If [code]true[/code], audio is playing or is queued to be played (see [method play]). */
playing: boolean;

/** The [AudioStream] resource to be played. */
stream: AudioStream;

/** If [code]true[/code], the playback is paused. You can resume it by setting [member stream_paused] to [code]false[/code]. */
stream_paused: boolean;

/** The factor for the attenuation effect. Higher values make the sound audible over a larger distance. */
unit_size: float;

/** The base sound level before attenuation, in decibels. */
volume_db: float;

/** Returns the position in the [AudioStream]. */
get_playback_position(): float;

/** Returns the [AudioStreamPlayback] object associated with this [AudioStreamPlayer3D]. */
get_stream_playback(): AudioStreamPlayback;

/** Returns whether the [AudioStreamPlayer] can return the [AudioStreamPlayback] object or not. */
has_stream_playback(): boolean;

/** Queues the audio to play on the next physics frame, from the given position [param from_position], in seconds. */
play(): void;

/** Sets the position from which audio will be played, in seconds. */
seek(): void;

/** Stops the audio. */
stop(): void;

  connect<T extends SignalsOf<AudioStreamPlayer3D>>(signal: T, method: SignalFunction<AudioStreamPlayer3D[T]>): number;



/**
 * Attenuation of loudness according to linear distance.
 *
*/
static ATTENUATION_INVERSE_DISTANCE: any;

/**
 * Attenuation of loudness according to squared distance.
 *
*/
static ATTENUATION_INVERSE_SQUARE_DISTANCE: any;

/**
 * Attenuation of loudness according to logarithmic distance.
 *
*/
static ATTENUATION_LOGARITHMIC: any;

/**
 * No attenuation of loudness according to distance. The sound will still be heard positionally, unlike an [AudioStreamPlayer]. [constant ATTENUATION_DISABLED] can be combined with a [member max_distance] value greater than `0.0` to achieve linear attenuation clamped to a sphere of a defined size.
 *
*/
static ATTENUATION_DISABLED: any;

/**
 * Disables doppler tracking.
 *
*/
static DOPPLER_TRACKING_DISABLED: any;

/**
 * Executes doppler tracking during process frames (see [constant Node.NOTIFICATION_INTERNAL_PROCESS]).
 *
*/
static DOPPLER_TRACKING_IDLE_STEP: any;

/**
 * Executes doppler tracking during physics frames (see [constant Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS]).
 *
*/
static DOPPLER_TRACKING_PHYSICS_STEP: any;


/**
 * Emitted when the audio stops playing.
 *
*/
$finished: Signal<() => void>

}

