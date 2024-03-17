
/**
 * An audio effect that can be used to adjust the intensity of stereo panning.
 *
*/
declare class AudioEffectStereoEnhance extends AudioEffect  {

  
/**
 * An audio effect that can be used to adjust the intensity of stereo panning.
 *
*/
  new(): AudioEffectStereoEnhance; 
  static "new"(): AudioEffectStereoEnhance 


/** Values greater than 1.0 increase intensity of any panning on audio passing through this effect, whereas values less than 1.0 will decrease the panning intensity. A value of 0.0 will downmix audio to mono. */
pan_pullout: float;





  connect<T extends SignalsOf<AudioEffectStereoEnhance>>(signal: T, method: SignalFunction<AudioEffectStereoEnhance[T]>): number;






}

