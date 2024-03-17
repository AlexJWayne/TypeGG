
/**
 * This object manages the SceneTree selection in the editor.
 *
 * **Note:** This class shouldn't be instantiated directly. Instead, access the singleton using [method EditorInterface.get_selection].
 *
*/
declare class EditorSelection extends Object  {

  
/**
 * This object manages the SceneTree selection in the editor.
 *
 * **Note:** This class shouldn't be instantiated directly. Instead, access the singleton using [method EditorInterface.get_selection].
 *
*/
  new(): EditorSelection; 
  static "new"(): EditorSelection 



/**
 * Adds a node to the selection.
 *
 * **Note:** The newly selected node will not be automatically edited in the inspector. If you want to edit a node, use [method EditorInterface.edit_node].
 *
*/
add_node(): void;

/** Clear the selection. */
clear(): void;

/** Gets the list of selected nodes. */
get_selected_nodes(): Node[];

/** Gets the list of selected nodes, optimized for transform operations (i.e. moving them, rotating, etc). This list avoids situations where a node is selected and also child/grandchild. */
get_transformable_selected_nodes(): Node[];

/** Removes a node from the selection. */
remove_node(): void;

  connect<T extends SignalsOf<EditorSelection>>(signal: T, method: SignalFunction<EditorSelection[T]>): number;





/**
 * Emitted when the selection changes.
 *
*/
$selection_changed: Signal<() => void>

}

