
/**
 * Abstract base class for separators, used for separating other controls. [Separator]s are purely visual and normally drawn as a [StyleBoxLine].
 *
*/
declare class Separator extends Control  {

  
/**
 * Abstract base class for separators, used for separating other controls. [Separator]s are purely visual and normally drawn as a [StyleBoxLine].
 *
*/
  new(): Separator; 
  static "new"(): Separator 





  connect<T extends SignalsOf<Separator>>(signal: T, method: SignalFunction<Separator[T]>): number;






}

