
/**
 * This class is intended to be overridden by video decoder extensions with custom implementations of [VideoStream].
 *
*/
declare class VideoStreamPlayback extends Resource  {

  
/**
 * This class is intended to be overridden by video decoder extensions with custom implementations of [VideoStream].
 *
*/
  new(): VideoStreamPlayback; 
  static "new"(): VideoStreamPlayback 



/** Returns the number of audio channels. */
protected _get_channels(): int;

/** Returns the video duration in seconds, if known, or 0 if unknown. */
protected _get_length(): float;

/** Returns the audio sample rate used for mixing. */
protected _get_mix_rate(): int;

/** Return the current playback timestamp. Called in response to the [member VideoStreamPlayer.stream_position] getter. */
protected _get_playback_position(): float;

/** Allocates a [Texture2D] in which decoded video frames will be drawn. */
protected _get_texture(): Texture2D;

/** Returns the paused status, as set by [method _set_paused]. */
protected _is_paused(): boolean;

/** Returns the playback state, as determined by calls to [method _play] and [method _stop]. */
protected _is_playing(): boolean;

/** Called in response to [member VideoStreamPlayer.autoplay] or [method VideoStreamPlayer.play]. Note that manual playback may also invoke [method _stop] multiple times before this method is called. [method _is_playing] should return true once playing. */
protected _play(): void;

/** Seeks to [param time] seconds. Called in response to the [member VideoStreamPlayer.stream_position] setter. */
protected _seek(): void;

/** Select the audio track [param idx]. Called when playback starts, and in response to the [member VideoStreamPlayer.audio_track] setter. */
protected _set_audio_track(): void;

/** Set the paused status of video playback. [method _is_paused] must return [param paused]. Called in response to the [member VideoStreamPlayer.paused] setter. */
protected _set_paused(): void;

/** Stops playback. May be called multiple times before [method _play], or in response to [method VideoStreamPlayer.stop]. [method _is_playing] should return false once stopped. */
protected _stop(): void;

/** Ticks video playback for [param delta] seconds. Called every frame as long as [method _is_paused] and [method _is_playing] return true. */
protected _update(): void;

/** Render [param num_frames] audio frames (of [method _get_channels] floats each) from [param buffer], starting from index [param offset] in the array. Returns the number of audio frames rendered, or -1 on error. */
mix_audio(): int;

  connect<T extends SignalsOf<VideoStreamPlayback>>(signal: T, method: SignalFunction<VideoStreamPlayback[T]>): number;






}

