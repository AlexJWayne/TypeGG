
/**
 * [EditorUndoRedoManager] is a manager for [UndoRedo] objects associated with edited scenes. Each scene has its own undo history and [EditorUndoRedoManager] ensures that each action performed in the editor gets associated with a proper scene. For actions not related to scenes ([ProjectSettings] edits, external resources, etc.), a separate global history is used.
 *
 * The usage is mostly the same as [UndoRedo]. You create and commit actions and the manager automatically decides under-the-hood what scenes it belongs to. The scene is deduced based on the first operation in an action, using the object from the operation. The rules are as follows:
 *
 * - If the object is a [Node], use the currently edited scene;
 *
 * - If the object is a built-in resource, use the scene from its path;
 *
 * - If the object is external resource or anything else, use global history.
 *
 * This guessing can sometimes yield false results, so you can provide a custom context object when creating an action.
 *
 * [EditorUndoRedoManager] is intended to be used by Godot editor plugins. You can obtain it using [method EditorPlugin.get_undo_redo]. For non-editor uses or plugins that don't need to integrate with the editor's undo history, use [UndoRedo] instead.
 *
 * The manager's API is mostly the same as in [UndoRedo], so you can refer to its documentation for more examples. The main difference is that [EditorUndoRedoManager] uses object + method name for actions, instead of [Callable].
 *
*/
declare class EditorUndoRedoManager extends Object  {

  
/**
 * [EditorUndoRedoManager] is a manager for [UndoRedo] objects associated with edited scenes. Each scene has its own undo history and [EditorUndoRedoManager] ensures that each action performed in the editor gets associated with a proper scene. For actions not related to scenes ([ProjectSettings] edits, external resources, etc.), a separate global history is used.
 *
 * The usage is mostly the same as [UndoRedo]. You create and commit actions and the manager automatically decides under-the-hood what scenes it belongs to. The scene is deduced based on the first operation in an action, using the object from the operation. The rules are as follows:
 *
 * - If the object is a [Node], use the currently edited scene;
 *
 * - If the object is a built-in resource, use the scene from its path;
 *
 * - If the object is external resource or anything else, use global history.
 *
 * This guessing can sometimes yield false results, so you can provide a custom context object when creating an action.
 *
 * [EditorUndoRedoManager] is intended to be used by Godot editor plugins. You can obtain it using [method EditorPlugin.get_undo_redo]. For non-editor uses or plugins that don't need to integrate with the editor's undo history, use [UndoRedo] instead.
 *
 * The manager's API is mostly the same as in [UndoRedo], so you can refer to its documentation for more examples. The main difference is that [EditorUndoRedoManager] uses object + method name for actions, instead of [Callable].
 *
*/
  new(): EditorUndoRedoManager; 
  static "new"(): EditorUndoRedoManager 



/**
 * Register a method that will be called when the action is committed (i.e. the "do" action).
 *
 * If this is the first operation, the [param object] will be used to deduce target undo history.
 *
*/
add_do_method(...args: any[]): void;

/**
 * Register a property value change for "do".
 *
 * If this is the first operation, the [param object] will be used to deduce target undo history.
 *
*/
add_do_property(): void;

/** Register a reference for "do" that will be erased if the "do" history is lost. This is useful mostly for new nodes created for the "do" call. Do not use for resources. */
add_do_reference(): void;

/**
 * Register a method that will be called when the action is undone (i.e. the "undo" action).
 *
 * If this is the first operation, the [param object] will be used to deduce target undo history.
 *
*/
add_undo_method(...args: any[]): void;

/**
 * Register a property value change for "undo".
 *
 * If this is the first operation, the [param object] will be used to deduce target undo history.
 *
*/
add_undo_property(): void;

/** Register a reference for "undo" that will be erased if the "undo" history is lost. This is useful mostly for nodes removed with the "do" call (not the "undo" call!). */
add_undo_reference(): void;

/** Commit the action. If [param execute] is true (default), all "do" methods/properties are called/set when this function is called. */
commit_action(): void;

/**
 * Create a new action. After this is called, do all your calls to [method add_do_method], [method add_undo_method], [method add_do_property], and [method add_undo_property], then commit the action with [method commit_action].
 *
 * The way actions are merged is dictated by the [param merge_mode] argument. See [enum UndoRedo.MergeMode] for details.
 *
 * If [param custom_context] object is provided, it will be used for deducing target history (instead of using the first operation).
 *
 * The way undo operation are ordered in actions is dictated by [param backward_undo_ops]. When [param backward_undo_ops] is `false` undo option are ordered in the same order they were added. Which means the first operation to be added will be the first to be undone.
 *
*/
create_action(): void;

/**
 * Returns the [UndoRedo] object associated with the given history [param id].
 *
 * [param id] above `0` are mapped to the opened scene tabs (but it doesn't match their order). [param id] of `0` or lower have special meaning (see [enum SpecialHistory]).
 *
 * Best used with [method get_object_history_id]. This method is only provided in case you need some more advanced methods of [UndoRedo] (but keep in mind that directly operating on the [UndoRedo] object might affect editor's stability).
 *
*/
get_history_undo_redo(): UndoRedo;

/** Returns the history ID deduced from the given [param object]. It can be used with [method get_history_undo_redo]. */
get_object_history_id(): int;

/** Returns [code]true[/code] if the [EditorUndoRedoManager] is currently committing the action, i.e. running its "do" method or property change (see [method commit_action]). */
is_committing_action(): boolean;

  connect<T extends SignalsOf<EditorUndoRedoManager>>(signal: T, method: SignalFunction<EditorUndoRedoManager[T]>): number;



/**
 * Global history not associated with any scene, but with external resources etc.
 *
*/
static GLOBAL_HISTORY: any;

/**
 * History associated with remote inspector. Used when live editing a running project.
 *
*/
static REMOTE_HISTORY: any;

/**
 * Invalid "null" history. It's a special value, not associated with any object.
 *
*/
static INVALID_HISTORY: any;


/**
 * Emitted when the list of actions in any history has changed, either when an action is committed or a history is cleared.
 *
*/
$history_changed: Signal<() => void>

/**
 * Emitted when the version of any history has changed as a result of undo or redo call.
 *
*/
$version_changed: Signal<() => void>

}

