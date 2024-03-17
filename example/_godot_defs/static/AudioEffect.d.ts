
/**
 * Base resource for audio bus. Applies an audio effect on the bus that the resource is applied on.
 *
*/
declare class AudioEffect extends Resource  {

  
/**
 * Base resource for audio bus. Applies an audio effect on the bus that the resource is applied on.
 *
*/
  new(): AudioEffect; 
  static "new"(): AudioEffect 



/** No documentation provided. */
protected _instantiate(): AudioEffectInstance;

  connect<T extends SignalsOf<AudioEffect>>(signal: T, method: SignalFunction<AudioEffect[T]>): number;






}

