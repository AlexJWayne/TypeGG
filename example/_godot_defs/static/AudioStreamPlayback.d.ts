
/**
 * Can play, loop, pause a scroll through audio. See [AudioStream] and [AudioStreamOggVorbis] for usage.
 *
*/
declare class AudioStreamPlayback extends RefCounted  {

  
/**
 * Can play, loop, pause a scroll through audio. See [AudioStream] and [AudioStreamOggVorbis] for usage.
 *
*/
  new(): AudioStreamPlayback; 
  static "new"(): AudioStreamPlayback 



/** No documentation provided. */
protected _get_loop_count(): int;

/** No documentation provided. */
protected _get_playback_position(): float;

/** No documentation provided. */
protected _is_playing(): boolean;

/** No documentation provided. */
protected _mix(): int;

/** No documentation provided. */
protected _seek(): void;

/** No documentation provided. */
protected _start(): void;

/** No documentation provided. */
protected _stop(): void;

/** No documentation provided. */
protected _tag_used_streams(): void;

  connect<T extends SignalsOf<AudioStreamPlayback>>(signal: T, method: SignalFunction<AudioStreamPlayback[T]>): number;






}

