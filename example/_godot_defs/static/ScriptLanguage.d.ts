
/**
*/
declare class ScriptLanguage extends Object  {

  
/**
*/
  new(): ScriptLanguage; 
  static "new"(): ScriptLanguage 





  connect<T extends SignalsOf<ScriptLanguage>>(signal: T, method: SignalFunction<ScriptLanguage[T]>): number;






}

