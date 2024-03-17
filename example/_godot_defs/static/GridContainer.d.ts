
/**
 * [GridContainer] arranges its child controls in a grid layout. The number of columns is specified by the [member columns] property, whereas the number of rows depends on how many are needed for the child controls. The number of rows and columns is preserved for every size of the container.
 *
 * **Note:** [GridContainer] only works with child nodes inheriting from [Control]. It won't rearrange child nodes inheriting from [Node2D].
 *
*/
declare class GridContainer extends Container  {

  
/**
 * [GridContainer] arranges its child controls in a grid layout. The number of columns is specified by the [member columns] property, whereas the number of rows depends on how many are needed for the child controls. The number of rows and columns is preserved for every size of the container.
 *
 * **Note:** [GridContainer] only works with child nodes inheriting from [Control]. It won't rearrange child nodes inheriting from [Node2D].
 *
*/
  new(): GridContainer; 
  static "new"(): GridContainer 


/** The number of columns in the [GridContainer]. If modified, [GridContainer] reorders its Control-derived children to accommodate the new layout. */
columns: int;



  connect<T extends SignalsOf<GridContainer>>(signal: T, method: SignalFunction<GridContainer[T]>): number;






}

