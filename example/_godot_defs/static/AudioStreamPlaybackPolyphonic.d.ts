
/**
 * Playback instance for [AudioStreamPolyphonic]. After setting the `stream` property of [AudioStreamPlayer], [AudioStreamPlayer2D], or [AudioStreamPlayer3D], the playback instance can be obtained by calling [method AudioStreamPlayer.get_stream_playback], [method AudioStreamPlayer2D.get_stream_playback] or [method AudioStreamPlayer3D.get_stream_playback] methods.
 *
*/
declare class AudioStreamPlaybackPolyphonic extends AudioStreamPlayback  {

  
/**
 * Playback instance for [AudioStreamPolyphonic]. After setting the `stream` property of [AudioStreamPlayer], [AudioStreamPlayer2D], or [AudioStreamPlayer3D], the playback instance can be obtained by calling [method AudioStreamPlayer.get_stream_playback], [method AudioStreamPlayer2D.get_stream_playback] or [method AudioStreamPlayer3D.get_stream_playback] methods.
 *
*/
  new(): AudioStreamPlaybackPolyphonic; 
  static "new"(): AudioStreamPlaybackPolyphonic 



/** Return true whether the stream associated with an integer ID is still playing. Check [method play_stream] for information on when this ID becomes invalid. */
is_stream_playing(): boolean;

/**
 * Play an [AudioStream] at a given offset, volume and pitch scale. Playback starts immediately.
 *
 * The return value is a unique integer ID that is associated to this playback stream and which can be used to control it.
 *
 * This ID becomes invalid when the stream ends (if it does not loop), when the [AudioStreamPlaybackPolyphonic] is stopped, or when [method stop_stream] is called.
 *
 * This function returns [constant INVALID_ID] if the amount of streams currently playing equals [member AudioStreamPolyphonic.polyphony]. If you need a higher amount of maximum polyphony, raise this value.
 *
*/
play_stream(): int;

/** Change the stream pitch scale. The [param stream] argument is an integer ID returned by [method play_stream]. */
set_stream_pitch_scale(): void;

/** Change the stream volume (in db). The [param stream] argument is an integer ID returned by [method play_stream]. */
set_stream_volume(): void;

/** Stop a stream. The [param stream] argument is an integer ID returned by [method play_stream], which becomes invalid after calling this function. */
stop_stream(): void;

  connect<T extends SignalsOf<AudioStreamPlaybackPolyphonic>>(signal: T, method: SignalFunction<AudioStreamPlaybackPolyphonic[T]>): number;



/**
 * Returned by [method play_stream] in case it could not allocate a stream for playback.
 *
*/
static INVALID_ID: any;



}

