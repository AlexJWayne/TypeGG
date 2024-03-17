
/**
 * Reduces all frequencies below the [member AudioEffectFilter.cutoff_hz].
 *
*/
declare class AudioEffectLowShelfFilter extends AudioEffectFilter  {

  
/**
 * Reduces all frequencies below the [member AudioEffectFilter.cutoff_hz].
 *
*/
  new(): AudioEffectLowShelfFilter; 
  static "new"(): AudioEffectLowShelfFilter 





  connect<T extends SignalsOf<AudioEffectLowShelfFilter>>(signal: T, method: SignalFunction<AudioEffectLowShelfFilter[T]>): number;






}

