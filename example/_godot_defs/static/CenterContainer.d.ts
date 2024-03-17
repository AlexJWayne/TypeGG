
/**
 * [CenterContainer] is a container that keeps all of its child controls in its center at their minimum size.
 *
*/
declare class CenterContainer extends Container  {

  
/**
 * [CenterContainer] is a container that keeps all of its child controls in its center at their minimum size.
 *
*/
  new(): CenterContainer; 
  static "new"(): CenterContainer 


/** If [code]true[/code], centers children relative to the [CenterContainer]'s top left corner. */
use_top_left: boolean;



  connect<T extends SignalsOf<CenterContainer>>(signal: T, method: SignalFunction<CenterContainer[T]>): number;






}

