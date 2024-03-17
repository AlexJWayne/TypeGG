
/**
*/
declare class SkinReference extends RefCounted  {

  
/**
*/
  new(): SkinReference; 
  static "new"(): SkinReference 



/** No documentation provided. */
get_skeleton(): RID;

/** No documentation provided. */
get_skin(): Skin;

  connect<T extends SignalsOf<SkinReference>>(signal: T, method: SignalFunction<SkinReference[T]>): number;






}

