
/**
 * Plays input signal back after a period of time. The delayed signal may be played back multiple times to create the sound of a repeating, decaying echo. Delay effects range from a subtle echo effect to a pronounced blending of previous sounds with new sounds.
 *
*/
declare class AudioEffectDelay extends AudioEffect  {

  
/**
 * Plays input signal back after a period of time. The delayed signal may be played back multiple times to create the sound of a repeating, decaying echo. Delay effects range from a subtle echo effect to a pronounced blending of previous sounds with new sounds.
 *
*/
  new(): AudioEffectDelay; 
  static "new"(): AudioEffectDelay 


/** Output percent of original sound. At 0, only delayed sounds are output. Value can range from 0 to 1. */
dry: float;

/** If [code]true[/code], feedback is enabled. */
feedback_active: boolean;

/** Feedback delay time in milliseconds. */
feedback_delay_ms: float;

/** Sound level for feedback. */
feedback_level_db: float;

/** Low-pass filter for feedback, in Hz. Frequencies below this value are filtered out of the source signal. */
feedback_lowpass: float;

/** If [code]true[/code], the first tap will be enabled. */
tap1_active: boolean;

/** First tap delay time in milliseconds. */
tap1_delay_ms: float;

/** Sound level for the first tap. */
tap1_level_db: float;

/** Pan position for the first tap. Value can range from -1 (fully left) to 1 (fully right). */
tap1_pan: float;

/** If [code]true[/code], the second tap will be enabled. */
tap2_active: boolean;

/** Second tap delay time in milliseconds. */
tap2_delay_ms: float;

/** Sound level for the second tap. */
tap2_level_db: float;

/** Pan position for the second tap. Value can range from -1 (fully left) to 1 (fully right). */
tap2_pan: float;



  connect<T extends SignalsOf<AudioEffectDelay>>(signal: T, method: SignalFunction<AudioEffectDelay[T]>): number;






}

