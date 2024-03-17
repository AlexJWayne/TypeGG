
/**
 * Reduces all frequencies above the [member AudioEffectFilter.cutoff_hz].
 *
*/
declare class AudioEffectHighShelfFilter extends AudioEffectFilter  {

  
/**
 * Reduces all frequencies above the [member AudioEffectFilter.cutoff_hz].
 *
*/
  new(): AudioEffectHighShelfFilter; 
  static "new"(): AudioEffectHighShelfFilter 





  connect<T extends SignalsOf<AudioEffectHighShelfFilter>>(signal: T, method: SignalFunction<AudioEffectHighShelfFilter[T]>): number;






}

