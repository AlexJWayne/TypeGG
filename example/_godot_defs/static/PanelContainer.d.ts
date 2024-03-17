
/**
 * A container that keeps its child controls within the area of a [StyleBox]. Useful for giving controls an outline.
 *
*/
declare class PanelContainer extends Container  {

  
/**
 * A container that keeps its child controls within the area of a [StyleBox]. Useful for giving controls an outline.
 *
*/
  new(): PanelContainer; 
  static "new"(): PanelContainer 





  connect<T extends SignalsOf<PanelContainer>>(signal: T, method: SignalFunction<PanelContainer[T]>): number;






}

