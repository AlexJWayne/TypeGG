
/**
 * A variant of [FlowContainer] that can only arrange its child controls horizontally, wrapping them around at the borders. This is similar to how text in a book wraps around when no more words can fit on a line.
 *
*/
declare class HFlowContainer extends FlowContainer  {

  
/**
 * A variant of [FlowContainer] that can only arrange its child controls horizontally, wrapping them around at the borders. This is similar to how text in a book wraps around when no more words can fit on a line.
 *
*/
  new(): HFlowContainer; 
  static "new"(): HFlowContainer 





  connect<T extends SignalsOf<HFlowContainer>>(signal: T, method: SignalFunction<HFlowContainer[T]>): number;






}

