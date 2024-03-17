
/**
 * Adds a chorus audio effect. The effect applies a filter with voices to duplicate the audio source and manipulate it through the filter.
 *
*/
declare class AudioEffectChorus extends AudioEffect  {

  
/**
 * Adds a chorus audio effect. The effect applies a filter with voices to duplicate the audio source and manipulate it through the filter.
 *
*/
  new(): AudioEffectChorus; 
  static "new"(): AudioEffectChorus 


/** The effect's raw signal. */
dry: float;

/** The voice's cutoff frequency. */
"voice/1/cutoff_hz": float;

/** The voice's signal delay. */
"voice/1/delay_ms": float;

/** The voice filter's depth. */
"voice/1/depth_ms": float;

/** The voice's volume. */
"voice/1/level_db": float;

/** The voice's pan level. */
"voice/1/pan": float;

/** The voice's filter rate. */
"voice/1/rate_hz": float;

/** The voice's cutoff frequency. */
"voice/2/cutoff_hz": float;

/** The voice's signal delay. */
"voice/2/delay_ms": float;

/** The voice filter's depth. */
"voice/2/depth_ms": float;

/** The voice's volume. */
"voice/2/level_db": float;

/** The voice's pan level. */
"voice/2/pan": float;

/** The voice's filter rate. */
"voice/2/rate_hz": float;

/** The voice's cutoff frequency. */
"voice/3/cutoff_hz": float;

/** The voice's signal delay. */
"voice/3/delay_ms": float;

/** The voice filter's depth. */
"voice/3/depth_ms": float;

/** The voice's volume. */
"voice/3/level_db": float;

/** The voice's pan level. */
"voice/3/pan": float;

/** The voice's filter rate. */
"voice/3/rate_hz": float;

/** The voice's cutoff frequency. */
"voice/4/cutoff_hz": float;

/** The voice's signal delay. */
"voice/4/delay_ms": float;

/** The voice filter's depth. */
"voice/4/depth_ms": float;

/** The voice's volume. */
"voice/4/level_db": float;

/** The voice's pan level. */
"voice/4/pan": float;

/** The voice's filter rate. */
"voice/4/rate_hz": float;

/** The number of voices in the effect. */
voice_count: int;

/** The effect's processed signal. */
wet: float;

/** No documentation provided. */
get_voice_cutoff_hz(): float;

/** No documentation provided. */
get_voice_delay_ms(): float;

/** No documentation provided. */
get_voice_depth_ms(): float;

/** No documentation provided. */
get_voice_level_db(): float;

/** No documentation provided. */
get_voice_pan(): float;

/** No documentation provided. */
get_voice_rate_hz(): float;

/** No documentation provided. */
set_voice_cutoff_hz(): void;

/** No documentation provided. */
set_voice_delay_ms(): void;

/** No documentation provided. */
set_voice_depth_ms(): void;

/** No documentation provided. */
set_voice_level_db(): void;

/** No documentation provided. */
set_voice_pan(): void;

/** No documentation provided. */
set_voice_rate_hz(): void;

  connect<T extends SignalsOf<AudioEffectChorus>>(signal: T, method: SignalFunction<AudioEffectChorus[T]>): number;






}

