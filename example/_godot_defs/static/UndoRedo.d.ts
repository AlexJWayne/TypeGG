
/**
 * UndoRedo works by registering methods and property changes inside "actions". You can create an action, then provide ways to do and undo this action using function calls and property changes, then commit the action.
 *
 * When an action is committed, all of the `do_*` methods will run. If the [method undo] method is used, the `undo_*` methods will run. If the [method redo] method is used, once again, all of the `do_*` methods will run.
 *
 * Here's an example on how to add an action:
 *
 * @example 
 * 
 * 
 * var undo_redo = UndoRedo.new()
 * func do_something():
 *     pass # Put your code here.
 * func undo_something():
 *     pass # Put here the code that reverts what's done by "do_something()".
 * func _on_my_button_pressed():
 *     var node = get_node("MyNode2D")
 *     undo_redo.create_action("Move the node")
 *     undo_redo.add_do_method(do_something)
 *     undo_redo.add_undo_method(undo_something)
 *     undo_redo.add_do_property(node, "position", Vector2(100,100))
 *     undo_redo.add_undo_property(node, "position", node.position)
 *     undo_redo.commit_action()
 * 
 * 
 * private UndoRedo _undoRedo;
 * public override void _Ready()
 * {
 *     _undoRedo = new UndoRedo();
 * }
 * public void DoSomething()
 * {
 *     // Put your code here.
 * }
 * public void UndoSomething()
 * {
 *     // Put here the code that reverts what's done by "DoSomething()".
 * }
 * private void OnMyButtonPressed()
 * {
 *     var node = GetNode<Node2D>("MyNode2D");
 *     _undoRedo.CreateAction("Move the node");
 *     _undoRedo.AddDoMethod(new Callable(this, MethodName.DoSomething));
 *     _undoRedo.AddUndoMethod(new Callable(this, MethodName.UndoSomething));
 *     _undoRedo.AddDoProperty(node, "position", new Vector2(100, 100));
 *     _undoRedo.AddUndoProperty(node, "position", node.Position);
 *     _undoRedo.CommitAction();
 * }
 * 
 * @summary 
 * 
 *
 * Before calling any of the `add_(un)do_*` methods, you need to first call [method create_action]. Afterwards you need to call [method commit_action].
 *
 * If you don't need to register a method, you can leave [method add_do_method] and [method add_undo_method] out; the same goes for properties. You can also register more than one method/property.
 *
 * If you are making an [EditorPlugin] and want to integrate into the editor's undo history, use [EditorUndoRedoManager] instead.
 *
 * If you are registering multiple properties/method which depend on one another, be aware that by default undo operation are called in the same order they have been added. Therefore instead of grouping do operation with their undo operations it is better to group do on one side and undo on the other as shown below.
 *
 * @example 
 * 
 * 
 * undo_redo.create_action("Add object")
 * # DO
 * undo_redo.add_do_method(_create_object)
 * undo_redo.add_do_method(_add_object_to_singleton)
 * # UNDO
 * undo_redo.add_undo_method(_remove_object_from_singleton)
 * undo_redo.add_undo_method(_destroy_that_object)
 * undo_redo.commit_action()
 * 
 * 
 * _undo_redo.CreateAction("Add object");
 * // DO
 * _undo_redo.AddDoMethod(new Callable(this, MethodName.CreateObject));
 * _undo_redo.AddDoMethod(new Callable(this, MethodName.AddObjectToSingleton));
 * // UNDO
 * _undo_redo.AddUndoMethod(new Callable(this, MethodName.RemoveObjectFromSingleton));
 * _undo_redo.AddUndoMethod(new Callable(this, MethodName.DestroyThatObject));
 * _undo_redo.CommitAction();
 * 
 * @summary 
 * 
 *
*/
declare class UndoRedo extends Object  {

  
/**
 * UndoRedo works by registering methods and property changes inside "actions". You can create an action, then provide ways to do and undo this action using function calls and property changes, then commit the action.
 *
 * When an action is committed, all of the `do_*` methods will run. If the [method undo] method is used, the `undo_*` methods will run. If the [method redo] method is used, once again, all of the `do_*` methods will run.
 *
 * Here's an example on how to add an action:
 *
 * @example 
 * 
 * 
 * var undo_redo = UndoRedo.new()
 * func do_something():
 *     pass # Put your code here.
 * func undo_something():
 *     pass # Put here the code that reverts what's done by "do_something()".
 * func _on_my_button_pressed():
 *     var node = get_node("MyNode2D")
 *     undo_redo.create_action("Move the node")
 *     undo_redo.add_do_method(do_something)
 *     undo_redo.add_undo_method(undo_something)
 *     undo_redo.add_do_property(node, "position", Vector2(100,100))
 *     undo_redo.add_undo_property(node, "position", node.position)
 *     undo_redo.commit_action()
 * 
 * 
 * private UndoRedo _undoRedo;
 * public override void _Ready()
 * {
 *     _undoRedo = new UndoRedo();
 * }
 * public void DoSomething()
 * {
 *     // Put your code here.
 * }
 * public void UndoSomething()
 * {
 *     // Put here the code that reverts what's done by "DoSomething()".
 * }
 * private void OnMyButtonPressed()
 * {
 *     var node = GetNode<Node2D>("MyNode2D");
 *     _undoRedo.CreateAction("Move the node");
 *     _undoRedo.AddDoMethod(new Callable(this, MethodName.DoSomething));
 *     _undoRedo.AddUndoMethod(new Callable(this, MethodName.UndoSomething));
 *     _undoRedo.AddDoProperty(node, "position", new Vector2(100, 100));
 *     _undoRedo.AddUndoProperty(node, "position", node.Position);
 *     _undoRedo.CommitAction();
 * }
 * 
 * @summary 
 * 
 *
 * Before calling any of the `add_(un)do_*` methods, you need to first call [method create_action]. Afterwards you need to call [method commit_action].
 *
 * If you don't need to register a method, you can leave [method add_do_method] and [method add_undo_method] out; the same goes for properties. You can also register more than one method/property.
 *
 * If you are making an [EditorPlugin] and want to integrate into the editor's undo history, use [EditorUndoRedoManager] instead.
 *
 * If you are registering multiple properties/method which depend on one another, be aware that by default undo operation are called in the same order they have been added. Therefore instead of grouping do operation with their undo operations it is better to group do on one side and undo on the other as shown below.
 *
 * @example 
 * 
 * 
 * undo_redo.create_action("Add object")
 * # DO
 * undo_redo.add_do_method(_create_object)
 * undo_redo.add_do_method(_add_object_to_singleton)
 * # UNDO
 * undo_redo.add_undo_method(_remove_object_from_singleton)
 * undo_redo.add_undo_method(_destroy_that_object)
 * undo_redo.commit_action()
 * 
 * 
 * _undo_redo.CreateAction("Add object");
 * // DO
 * _undo_redo.AddDoMethod(new Callable(this, MethodName.CreateObject));
 * _undo_redo.AddDoMethod(new Callable(this, MethodName.AddObjectToSingleton));
 * // UNDO
 * _undo_redo.AddUndoMethod(new Callable(this, MethodName.RemoveObjectFromSingleton));
 * _undo_redo.AddUndoMethod(new Callable(this, MethodName.DestroyThatObject));
 * _undo_redo.CommitAction();
 * 
 * @summary 
 * 
 *
*/
  new(): UndoRedo; 
  static "new"(): UndoRedo 



/** Register a [Callable] that will be called when the action is committed. */
add_do_method(): void;

/** Register a [param property] that would change its value to [param value] when the action is committed. */
add_do_property(): void;

/**
 * Register a reference for "do" that will be erased if the "do" history is lost. This is useful mostly for new nodes created for the "do" call. Do not use for resources.
 *
 * @example 
 * 
 * var node = Node2D.new()
 * undo_redo.create_action("Add node")
 * undo_redo.add_do_method(add_child.bind(node))
 * undo_redo.add_do_reference(node)
 * undo_redo.add_undo_method(remove_child.bind(node))
 * undo_redo.commit_action()
 * @summary 
 * 
 *
*/
add_do_reference(): void;

/** Register a [Callable] that will be called when the action is undone. */
add_undo_method(): void;

/** Register a [param property] that would change its value to [param value] when the action is undone. */
add_undo_property(): void;

/**
 * Register a reference for "undo" that will be erased if the "undo" history is lost. This is useful mostly for nodes removed with the "do" call (not the "undo" call!).
 *
 * @example 
 * 
 * var node = $Node2D
 * undo_redo.create_action("Remove node")
 * undo_redo.add_do_method(remove_child.bind(node))
 * undo_redo.add_undo_method(add_child.bind(node))
 * undo_redo.add_undo_reference(node)
 * undo_redo.commit_action()
 * @summary 
 * 
 *
*/
add_undo_reference(): void;

/**
 * Clear the undo/redo history and associated references.
 *
 * Passing `false` to [param increase_version] will prevent the version number from increasing when the history is cleared.
 *
*/
clear_history(): void;

/** Commit the action. If [param execute] is [code]true[/code] (which it is by default), all "do" methods/properties are called/set when this function is called. */
commit_action(): void;

/**
 * Create a new action. After this is called, do all your calls to [method add_do_method], [method add_undo_method], [method add_do_property], and [method add_undo_property], then commit the action with [method commit_action].
 *
 * The way actions are merged is dictated by [param merge_mode]. See [enum MergeMode] for details.
 *
 * The way undo operation are ordered in actions is dictated by [param backward_undo_ops]. When [param backward_undo_ops] is `false` undo option are ordered in the same order they were added. Which means the first operation to be added will be the first to be undone.
 *
*/
create_action(): void;

/** Stops marking operations as to be processed even if the action gets merged with another in the [constant MERGE_ENDS] mode. See [method start_force_keep_in_merge_ends]. */
end_force_keep_in_merge_ends(): void;

/** Gets the action name from its index. */
get_action_name(): string;

/** Gets the index of the current action. */
get_current_action(): int;

/** Gets the name of the current action, equivalent to [code]get_action_name(get_current_action())[/code]. */
get_current_action_name(): string;

/** Returns how many elements are in the history. */
get_history_count(): int;

/**
 * Gets the version. Every time a new action is committed, the [UndoRedo]'s version number is increased automatically.
 *
 * This is useful mostly to check if something changed from a saved version.
 *
*/
get_version(): int;

/** Returns [code]true[/code] if a "redo" action is available. */
has_redo(): boolean;

/** Returns [code]true[/code] if an "undo" action is available. */
has_undo(): boolean;

/** Returns [code]true[/code] if the [UndoRedo] is currently committing the action, i.e. running its "do" method or property change (see [method commit_action]). */
is_committing_action(): boolean;

/** Redo the last action. */
redo(): boolean;

/** Marks the next "do" and "undo" operations to be processed even if the action gets merged with another in the [constant MERGE_ENDS] mode. Return to normal operation using [method end_force_keep_in_merge_ends]. */
start_force_keep_in_merge_ends(): void;

/** Undo the last action. */
undo(): boolean;

  connect<T extends SignalsOf<UndoRedo>>(signal: T, method: SignalFunction<UndoRedo[T]>): number;



/**
 * Makes "do"/"undo" operations stay in separate actions.
 *
*/
static MERGE_DISABLE: any;

/**
 * Makes so that the action's "undo" operations are from the first action created and the "do" operations are from the last subsequent action with the same name.
 *
*/
static MERGE_ENDS: any;

/**
 * Makes subsequent actions with the same name be merged into one.
 *
*/
static MERGE_ALL: any;


/**
 * Called when [method undo] or [method redo] was called.
 *
*/
$version_changed: Signal<() => void>

}

