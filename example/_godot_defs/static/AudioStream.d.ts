
/**
 * Base class for audio streams. Audio streams are used for sound effects and music playback, and support WAV (via [AudioStreamWAV]) and Ogg (via [AudioStreamOggVorbis]) file formats.
 *
*/
declare class AudioStream extends Resource  {

  
/**
 * Base class for audio streams. Audio streams are used for sound effects and music playback, and support WAV (via [AudioStreamWAV]) and Ogg (via [AudioStreamOggVorbis]) file formats.
 *
*/
  new(): AudioStream; 
  static "new"(): AudioStream 



/** No documentation provided. */
protected _get_beat_count(): int;

/** No documentation provided. */
protected _get_bpm(): float;

/** No documentation provided. */
protected _get_length(): float;

/** No documentation provided. */
protected _get_stream_name(): string;

/** No documentation provided. */
protected _instantiate_playback(): AudioStreamPlayback;

/** No documentation provided. */
protected _is_monophonic(): boolean;

/** Returns the length of the audio stream in seconds. */
get_length(): float;

/** Returns an AudioStreamPlayback. Useful for when you want to extend [method _instantiate_playback] but call [method instantiate_playback] from an internally held AudioStream subresource. An example of this can be found in the source files for [code]AudioStreamRandomPitch::instantiate_playback[/code]. */
instantiate_playback(): AudioStreamPlayback;

/** Returns true if this audio stream only supports monophonic playback, or false if the audio stream supports polyphony. */
is_monophonic(): boolean;

  connect<T extends SignalsOf<AudioStream>>(signal: T, method: SignalFunction<AudioStream[T]>): number;






}

