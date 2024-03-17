
/**
 * This class is meant to be used with [AudioStreamGenerator] to play back the generated audio in real-time.
 *
*/
declare class AudioStreamGeneratorPlayback extends AudioStreamPlaybackResampled  {

  
/**
 * This class is meant to be used with [AudioStreamGenerator] to play back the generated audio in real-time.
 *
*/
  new(): AudioStreamGeneratorPlayback; 
  static "new"(): AudioStreamGeneratorPlayback 



/** Returns [code]true[/code] if a buffer of the size [param amount] can be pushed to the audio sample data buffer without overflowing it, [code]false[/code] otherwise. */
can_push_buffer(): boolean;

/** Clears the audio sample data buffer. */
clear_buffer(): void;

/** Returns the number of frames that can be pushed to the audio sample data buffer without overflowing it. If the result is [code]0[/code], the buffer is full. */
get_frames_available(): int;

/** Returns the number of times the playback skipped due to a buffer underrun in the audio sample data. This value is reset at the start of the playback. */
get_skips(): int;

/** Pushes several audio data frames to the buffer. This is usually more efficient than [method push_frame] in C# and compiled languages via GDExtension, but [method push_buffer] may be [i]less[/i] efficient in GDScript. */
push_buffer(): boolean;

/** Pushes a single audio data frame to the buffer. This is usually less efficient than [method push_buffer] in C# and compiled languages via GDExtension, but [method push_frame] may be [i]more[/i] efficient in GDScript. */
push_frame(): boolean;

  connect<T extends SignalsOf<AudioStreamGeneratorPlayback>>(signal: T, method: SignalFunction<AudioStreamGeneratorPlayback[T]>): number;






}

