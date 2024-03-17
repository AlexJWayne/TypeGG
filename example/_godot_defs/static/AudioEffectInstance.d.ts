
/**
*/
declare class AudioEffectInstance extends RefCounted  {

  
/**
*/
  new(): AudioEffectInstance; 
  static "new"(): AudioEffectInstance 



/** No documentation provided. */
protected _process(): void;

/** No documentation provided. */
protected _process_silence(): boolean;

  connect<T extends SignalsOf<AudioEffectInstance>>(signal: T, method: SignalFunction<AudioEffectInstance[T]>): number;






}

