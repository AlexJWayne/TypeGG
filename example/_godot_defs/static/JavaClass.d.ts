
/**
*/
declare class JavaClass extends RefCounted  {

  
/**
*/
  new(): JavaClass; 
  static "new"(): JavaClass 





  connect<T extends SignalsOf<JavaClass>>(signal: T, method: SignalFunction<JavaClass[T]>): number;






}

