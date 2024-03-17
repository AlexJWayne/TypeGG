
/**
 * Picks a random AudioStream from the pool, depending on the playback mode, and applies random pitch shifting and volume shifting during playback.
 *
*/
declare class AudioStreamRandomizer extends AudioStream  {

  
/**
 * Picks a random AudioStream from the pool, depending on the playback mode, and applies random pitch shifting and volume shifting during playback.
 *
*/
  new(): AudioStreamRandomizer; 
  static "new"(): AudioStreamRandomizer 


/** Controls how this AudioStreamRandomizer picks which AudioStream to play next. */
playback_mode: int;

/** The intensity of random pitch variation. A value of 1 means no variation. */
random_pitch: float;

/** The intensity of random volume variation. A value of 0 means no variation. */
random_volume_offset_db: float;

/** The number of streams in the stream pool. */
streams_count: int;

/** Insert a stream at the specified index. If the index is less than zero, the insertion occurs at the end of the underlying pool. */
add_stream(): void;

/** Returns the stream at the specified index. */
get_stream(): AudioStream;

/** Returns the probability weight associated with the stream at the given index. */
get_stream_probability_weight(): float;

/** Move a stream from one index to another. */
move_stream(): void;

/** Remove the stream at the specified index. */
remove_stream(): void;

/** Set the AudioStream at the specified index. */
set_stream(): void;

/** Set the probability weight of the stream at the specified index. The higher this value, the more likely that the randomizer will choose this stream during random playback modes. */
set_stream_probability_weight(): void;

  connect<T extends SignalsOf<AudioStreamRandomizer>>(signal: T, method: SignalFunction<AudioStreamRandomizer[T]>): number;



/**
 * Pick a stream at random according to the probability weights chosen for each stream, but avoid playing the same stream twice in a row whenever possible. If only 1 sound is present in the pool, the same sound will always play, effectively allowing repeats to occur.
 *
*/
static PLAYBACK_RANDOM_NO_REPEATS: any;

/**
 * Pick a stream at random according to the probability weights chosen for each stream. If only 1 sound is present in the pool, the same sound will always play.
 *
*/
static PLAYBACK_RANDOM: any;

/**
 * Play streams in the order they appear in the stream pool. If only 1 sound is present in the pool, the same sound will always play.
 *
*/
static PLAYBACK_SEQUENTIAL: any;



}

