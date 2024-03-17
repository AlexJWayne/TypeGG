
/**
 * A variant of [FlowContainer] that can only arrange its child controls vertically, wrapping them around at the borders. This is similar to how text in a book wraps around when no more words can fit on a line, except vertically.
 *
*/
declare class VFlowContainer extends FlowContainer  {

  
/**
 * A variant of [FlowContainer] that can only arrange its child controls vertically, wrapping them around at the borders. This is similar to how text in a book wraps around when no more words can fit on a line, except vertically.
 *
*/
  new(): VFlowContainer; 
  static "new"(): VFlowContainer 





  connect<T extends SignalsOf<VFlowContainer>>(signal: T, method: SignalFunction<VFlowContainer[T]>): number;






}

