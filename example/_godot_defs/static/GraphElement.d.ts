
/**
 * [GraphElement] allows to create custom elements for a [GraphEdit] graph. By default such elements can be selected, resized, and repositioned, but they cannot be connected. For a graph element that allows for connections see [GraphNode].
 *
*/
declare class GraphElement extends Container  {

  
/**
 * [GraphElement] allows to create custom elements for a [GraphEdit] graph. By default such elements can be selected, resized, and repositioned, but they cannot be connected. For a graph element that allows for connections see [GraphNode].
 *
*/
  new(): GraphElement; 
  static "new"(): GraphElement 


/** If [code]true[/code], the user can drag the GraphElement. */
draggable: boolean;

/** The offset of the GraphElement, relative to the scroll offset of the [GraphEdit]. */
position_offset: Vector2;

/**
 * If `true`, the user can resize the GraphElement.
 *
 * **Note:** Dragging the handle will only emit the [signal resize_request] signal, the GraphElement needs to be resized manually.
 *
*/
resizable: boolean;

/** If [code]true[/code], the user can select the GraphElement. */
selectable: boolean;

/** If [code]true[/code], the GraphElement is selected. */
selected: boolean;



  connect<T extends SignalsOf<GraphElement>>(signal: T, method: SignalFunction<GraphElement[T]>): number;





/**
 * Emitted when removing the GraphElement is requested.
 *
*/
$delete_request: Signal<() => void>

/**
 * Emitted when the GraphElement is dragged.
 *
*/
$dragged: Signal<() => void>

/**
 * Emitted when the GraphElement is deselected.
 *
*/
$node_deselected: Signal<() => void>

/**
 * Emitted when the GraphElement is selected.
 *
*/
$node_selected: Signal<() => void>

/**
 * Emitted when the GraphElement is moved.
 *
*/
$position_offset_changed: Signal<() => void>

/**
 * Emitted when displaying the GraphElement over other ones is requested. Happens on focusing (clicking into) the GraphElement.
 *
*/
$raise_request: Signal<() => void>

/**
 * Emitted when resizing the GraphElement is requested. Happens on dragging the resizer handle (see [member resizable]).
 *
*/
$resize_request: Signal<() => void>

}

