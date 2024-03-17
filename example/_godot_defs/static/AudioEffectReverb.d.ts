
/**
 * Simulates the sound of acoustic environments such as rooms, concert halls, caverns, or an open spaces.
 *
*/
declare class AudioEffectReverb extends AudioEffect  {

  
/**
 * Simulates the sound of acoustic environments such as rooms, concert halls, caverns, or an open spaces.
 *
*/
  new(): AudioEffectReverb; 
  static "new"(): AudioEffectReverb 


/** Defines how reflective the imaginary room's walls are. Value can range from 0 to 1. */
damping: float;

/** Output percent of original sound. At 0, only modified sound is outputted. Value can range from 0 to 1. */
dry: float;

/** High-pass filter passes signals with a frequency higher than a certain cutoff frequency and attenuates signals with frequencies lower than the cutoff frequency. Value can range from 0 to 1. */
hipass: float;

/** Output percent of predelay. Value can range from 0 to 1. */
predelay_feedback: float;

/** Time between the original signal and the early reflections of the reverb signal, in milliseconds. */
predelay_msec: float;

/** Dimensions of simulated room. Bigger means more echoes. Value can range from 0 to 1. */
room_size: float;

/** Widens or narrows the stereo image of the reverb tail. 1 means fully widens. Value can range from 0 to 1. */
spread: float;

/** Output percent of modified sound. At 0, only original sound is outputted. Value can range from 0 to 1. */
wet: float;



  connect<T extends SignalsOf<AudioEffectReverb>>(signal: T, method: SignalFunction<AudioEffectReverb[T]>): number;






}

