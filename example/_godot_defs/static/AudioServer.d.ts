
/**
 * [AudioServer] is a low-level server interface for audio access. It is in charge of creating sample data (playable audio) as well as its playback via a voice interface.
 *
*/
declare class AudioServerClass extends Object  {

  
/**
 * [AudioServer] is a low-level server interface for audio access. It is in charge of creating sample data (playable audio) as well as its playback via a voice interface.
 *
*/
  new(): AudioServerClass; 
  static "new"(): AudioServerClass 


/** Number of available audio buses. */
bus_count: int;

/**
 * Name of the current device for audio input (see [method get_input_device_list]). On systems with multiple audio inputs (such as analog, USB and HDMI audio), this can be used to select the audio input device. The value `"Default"` will record audio on the system-wide default audio input. If an invalid device name is set, the value will be reverted back to `"Default"`.
 *
 * **Note:** [member ProjectSettings.audio/driver/enable_input] must be `true` for audio input to work. See also that setting's description for caveats related to permissions and operating system privacy settings.
 *
*/
input_device: string;

/** Name of the current device for audio output (see [method get_output_device_list]). On systems with multiple audio outputs (such as analog, USB and HDMI audio), this can be used to select the audio output device. The value [code]"Default"[/code] will play audio on the system-wide default audio output. If an invalid device name is set, the value will be reverted back to [code]"Default"[/code]. */
output_device: string;

/** Scales the rate at which audio is played (i.e. setting it to [code]0.5[/code] will make the audio be played at half its speed). */
playback_speed_scale: float;

/** Adds a bus at [param at_position]. */
add_bus(): void;

/** Adds an [AudioEffect] effect to the bus [param bus_idx] at [param at_position]. */
add_bus_effect(): void;

/** Generates an [AudioBusLayout] using the available buses and effects. */
generate_bus_layout(): AudioBusLayout;

/** Returns the number of channels of the bus at index [param bus_idx]. */
get_bus_channels(): int;

/** Returns the [AudioEffect] at position [param effect_idx] in bus [param bus_idx]. */
get_bus_effect(): AudioEffect;

/** Returns the number of effects on the bus at [param bus_idx]. */
get_bus_effect_count(): int;

/** Returns the [AudioEffectInstance] assigned to the given bus and effect indices (and optionally channel). */
get_bus_effect_instance(): AudioEffectInstance;

/** Returns the index of the bus with the name [param bus_name]. Returns [code]-1[/code] if no bus with the specified name exist. */
get_bus_index(): int;

/** Returns the name of the bus with the index [param bus_idx]. */
get_bus_name(): string;

/** Returns the peak volume of the left speaker at bus index [param bus_idx] and channel index [param channel]. */
get_bus_peak_volume_left_db(): float;

/** Returns the peak volume of the right speaker at bus index [param bus_idx] and channel index [param channel]. */
get_bus_peak_volume_right_db(): float;

/** Returns the name of the bus that the bus at index [param bus_idx] sends to. */
get_bus_send(): StringName;

/** Returns the volume of the bus at index [param bus_idx] in dB. */
get_bus_volume_db(): float;

/**
 * Returns the names of all audio input devices detected on the system.
 *
 * **Note:** [member ProjectSettings.audio/driver/enable_input] must be `true` for audio input to work. See also that setting's description for caveats related to permissions and operating system privacy settings.
 *
*/
get_input_device_list(): PackedStringArray;

/** Returns the sample rate at the output of the [AudioServer]. */
get_mix_rate(): float;

/** Returns the names of all audio output devices detected on the system. */
get_output_device_list(): PackedStringArray;

/**
 * Returns the audio driver's effective output latency. This is based on [member ProjectSettings.audio/driver/output_latency], but the exact returned value will differ depending on the operating system and audio driver.
 *
 * **Note:** This can be expensive; it is not recommended to call [method get_output_latency] every frame.
 *
*/
get_output_latency(): float;

/** Returns the speaker configuration. */
get_speaker_mode(): int;

/** Returns the relative time since the last mix occurred. */
get_time_since_last_mix(): float;

/** Returns the relative time until the next mix occurs. */
get_time_to_next_mix(): float;

/** If [code]true[/code], the bus at index [param bus_idx] is bypassing effects. */
is_bus_bypassing_effects(): boolean;

/** If [code]true[/code], the effect at index [param effect_idx] on the bus at index [param bus_idx] is enabled. */
is_bus_effect_enabled(): boolean;

/** If [code]true[/code], the bus at index [param bus_idx] is muted. */
is_bus_mute(): boolean;

/** If [code]true[/code], the bus at index [param bus_idx] is in solo mode. */
is_bus_solo(): boolean;

/**
 * Locks the audio driver's main loop.
 *
 * **Note:** Remember to unlock it afterwards.
 *
*/
lock(): void;

/** Moves the bus from index [param index] to index [param to_index]. */
move_bus(): void;

/** Removes the bus at index [param index]. */
remove_bus(): void;

/** Removes the effect at index [param effect_idx] from the bus at index [param bus_idx]. */
remove_bus_effect(): void;

/** If [code]true[/code], the bus at index [param bus_idx] is bypassing effects. */
set_bus_bypass_effects(): void;

/** If [code]true[/code], the effect at index [param effect_idx] on the bus at index [param bus_idx] is enabled. */
set_bus_effect_enabled(): void;

/** Overwrites the currently used [AudioBusLayout]. */
set_bus_layout(): void;

/** If [code]true[/code], the bus at index [param bus_idx] is muted. */
set_bus_mute(): void;

/** Sets the name of the bus at index [param bus_idx] to [param name]. */
set_bus_name(): void;

/** Connects the output of the bus at [param bus_idx] to the bus named [param send]. */
set_bus_send(): void;

/** If [code]true[/code], the bus at index [param bus_idx] is in solo mode. */
set_bus_solo(): void;

/** Sets the volume of the bus at index [param bus_idx] to [param volume_db]. */
set_bus_volume_db(): void;

/** No documentation provided. */
set_enable_tagging_used_audio_streams(): void;

/** Swaps the position of two effects in bus [param bus_idx]. */
swap_bus_effects(): void;

/** Unlocks the audio driver's main loop. (After locking it, you should always unlock it.) */
unlock(): void;

  connect<T extends SignalsOf<AudioServerClass>>(signal: T, method: SignalFunction<AudioServerClass[T]>): number;



/**
 * Two or fewer speakers were detected.
 *
*/
static SPEAKER_MODE_STEREO: any;

/**
 * A 3.1 channel surround setup was detected.
 *
*/
static SPEAKER_SURROUND_31: any;

/**
 * A 5.1 channel surround setup was detected.
 *
*/
static SPEAKER_SURROUND_51: any;

/**
 * A 7.1 channel surround setup was detected.
 *
*/
static SPEAKER_SURROUND_71: any;


/**
 * Emitted when an audio bus is added, deleted, or moved.
 *
*/
$bus_layout_changed: Signal<() => void>

/**
 * Emitted when the audio bus at [param bus_index] is renamed from [param old_name] to [param new_name].
 *
*/
$bus_renamed: Signal<() => void>

}

