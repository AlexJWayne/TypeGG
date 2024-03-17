
/**
 * Nodes are Godot's building blocks. They can be assigned as the child of another node, resulting in a tree arrangement. A given node can contain any number of nodes as children with the requirement that all siblings (direct children of a node) should have unique names.
 *
 * A tree of nodes is called a **scene**. Scenes can be saved to the disk and then instantiated into other scenes. This allows for very high flexibility in the architecture and data model of Godot projects.
 *
 * **Scene tree:** The [SceneTree] contains the active tree of nodes. When a node is added to the scene tree, it receives the [constant NOTIFICATION_ENTER_TREE] notification and its [method _enter_tree] callback is triggered. Child nodes are always added **after** their parent node, i.e. the [method _enter_tree] callback of a parent node will be triggered before its child's.
 *
 * Once all nodes have been added in the scene tree, they receive the [constant NOTIFICATION_READY] notification and their respective [method _ready] callbacks are triggered. For groups of nodes, the [method _ready] callback is called in reverse order, starting with the children and moving up to the parent nodes.
 *
 * This means that when adding a node to the scene tree, the following order will be used for the callbacks: [method _enter_tree] of the parent, [method _enter_tree] of the children, [method _ready] of the children and finally [method _ready] of the parent (recursively for the entire scene tree).
 *
 * **Processing:** Nodes can override the "process" state, so that they receive a callback on each frame requesting them to process (do something). Normal processing (callback [method _process], toggled with [method set_process]) happens as fast as possible and is dependent on the frame rate, so the processing time **delta** (in seconds) is passed as an argument. Physics processing (callback [method _physics_process], toggled with [method set_physics_process]) happens a fixed number of times per second (60 by default) and is useful for code related to the physics engine.
 *
 * Nodes can also process input events. When present, the [method _input] function will be called for each input that the program receives. In many cases, this can be overkill (unless used for simple projects), and the [method _unhandled_input] function might be preferred; it is called when the input event was not handled by anyone else (typically, GUI [Control] nodes), ensuring that the node only receives the events that were meant for it.
 *
 * To keep track of the scene hierarchy (especially when instancing scenes into other scenes), an "owner" can be set for the node with the [member owner] property. This keeps track of who instantiated what. This is mostly useful when writing editors and tools, though.
 *
 * Finally, when a node is freed with [method Object.free] or [method queue_free], it will also free all its children.
 *
 * **Groups:** Nodes can be added to as many groups as you want to be easy to manage, you could create groups like "enemies" or "collectables" for example, depending on your game. See [method add_to_group], [method is_in_group] and [method remove_from_group]. You can then retrieve all nodes in these groups, iterate them and even call methods on groups via the methods on [SceneTree].
 *
 * **Networking with nodes:** After connecting to a server (or making one, see [ENetMultiplayerPeer]), it is possible to use the built-in RPC (remote procedure call) system to communicate over the network. By calling [method rpc] with a method name, it will be called locally and in all connected peers (peers = clients and the server that accepts connections). To identify which node receives the RPC call, Godot will use its [NodePath] (make sure node names are the same on all peers). Also, take a look at the high-level networking tutorial and corresponding demos.
 *
 * **Note:** The `script` property is part of the [Object] class, not [Node]. It isn't exposed like most properties but does have a setter and getter (`set_script()` and `get_script()`).
 *
*/
declare class Node extends Object  {

  
/**
 * Nodes are Godot's building blocks. They can be assigned as the child of another node, resulting in a tree arrangement. A given node can contain any number of nodes as children with the requirement that all siblings (direct children of a node) should have unique names.
 *
 * A tree of nodes is called a **scene**. Scenes can be saved to the disk and then instantiated into other scenes. This allows for very high flexibility in the architecture and data model of Godot projects.
 *
 * **Scene tree:** The [SceneTree] contains the active tree of nodes. When a node is added to the scene tree, it receives the [constant NOTIFICATION_ENTER_TREE] notification and its [method _enter_tree] callback is triggered. Child nodes are always added **after** their parent node, i.e. the [method _enter_tree] callback of a parent node will be triggered before its child's.
 *
 * Once all nodes have been added in the scene tree, they receive the [constant NOTIFICATION_READY] notification and their respective [method _ready] callbacks are triggered. For groups of nodes, the [method _ready] callback is called in reverse order, starting with the children and moving up to the parent nodes.
 *
 * This means that when adding a node to the scene tree, the following order will be used for the callbacks: [method _enter_tree] of the parent, [method _enter_tree] of the children, [method _ready] of the children and finally [method _ready] of the parent (recursively for the entire scene tree).
 *
 * **Processing:** Nodes can override the "process" state, so that they receive a callback on each frame requesting them to process (do something). Normal processing (callback [method _process], toggled with [method set_process]) happens as fast as possible and is dependent on the frame rate, so the processing time **delta** (in seconds) is passed as an argument. Physics processing (callback [method _physics_process], toggled with [method set_physics_process]) happens a fixed number of times per second (60 by default) and is useful for code related to the physics engine.
 *
 * Nodes can also process input events. When present, the [method _input] function will be called for each input that the program receives. In many cases, this can be overkill (unless used for simple projects), and the [method _unhandled_input] function might be preferred; it is called when the input event was not handled by anyone else (typically, GUI [Control] nodes), ensuring that the node only receives the events that were meant for it.
 *
 * To keep track of the scene hierarchy (especially when instancing scenes into other scenes), an "owner" can be set for the node with the [member owner] property. This keeps track of who instantiated what. This is mostly useful when writing editors and tools, though.
 *
 * Finally, when a node is freed with [method Object.free] or [method queue_free], it will also free all its children.
 *
 * **Groups:** Nodes can be added to as many groups as you want to be easy to manage, you could create groups like "enemies" or "collectables" for example, depending on your game. See [method add_to_group], [method is_in_group] and [method remove_from_group]. You can then retrieve all nodes in these groups, iterate them and even call methods on groups via the methods on [SceneTree].
 *
 * **Networking with nodes:** After connecting to a server (or making one, see [ENetMultiplayerPeer]), it is possible to use the built-in RPC (remote procedure call) system to communicate over the network. By calling [method rpc] with a method name, it will be called locally and in all connected peers (peers = clients and the server that accepts connections). To identify which node receives the RPC call, Godot will use its [NodePath] (make sure node names are the same on all peers). Also, take a look at the high-level networking tutorial and corresponding demos.
 *
 * **Note:** The `script` property is part of the [Object] class, not [Node]. It isn't exposed like most properties but does have a setter and getter (`set_script()` and `get_script()`).
 *
*/
  new(): Node; 
  static "new"(): Node 


/** Add a custom description to a node. It will be displayed in a tooltip when hovered in editor's scene tree. */
editor_description: string;

/**
 * The [MultiplayerAPI] instance associated with this node. See [method SceneTree.get_multiplayer].
 *
 * **Note:** Renaming the node, or moving it in the tree, will not move the [MultiplayerAPI] to the new path, you will have to update this manually.
 *
*/
multiplayer: MultiplayerAPI;

/**
 * The name of the node. This name is unique among the siblings (other child nodes from the same parent). When set to an existing name, the node will be automatically renamed.
 *
 * **Note:** Auto-generated names might include the `@` character, which is reserved for unique names when using [method add_child]. When setting the name manually, any `@` will be removed.
 *
*/
name: StringName;

/**
 * The node owner. A node can have any ancestor node as owner (i.e. a parent, grandparent, etc. node ascending in the tree). This implies that [method add_child] should be called before setting the owner, so that this relationship of parenting exists. When saving a node (using [PackedScene]), all the nodes it owns will be saved with it. This allows for the creation of complex scene trees, with instancing and subinstancing.
 *
 * **Note:** If you want a child to be persisted to a [PackedScene], you must set [member owner] in addition to calling [method add_child]. This is typically relevant for [url=$DOCS_URL/tutorials/plugins/running_code_in_the_editor.html]tool scripts[/url] and [url=$DOCS_URL/tutorials/plugins/editor/index.html]editor plugins[/url]. If a new node is added to the tree without setting its owner as an ancestor in that tree, it will be visible in the 2D/3D view, but not in the scene tree (and not persisted when packing or saving).
 *
*/
owner: Node;

/** Can be used to pause or unpause the node, or make the node paused based on the [SceneTree], or make it inherit the process mode from its parent (default). */
process_mode: int;

/** Similar to [member process_priority] but for [constant NOTIFICATION_PHYSICS_PROCESS], [method _physics_process] or the internal version. */
process_physics_priority: int;

/** The node's priority in the execution order of the enabled processing callbacks (i.e. [constant NOTIFICATION_PROCESS], [constant NOTIFICATION_PHYSICS_PROCESS] and their internal counterparts). Nodes whose process priority value is [i]lower[/i] will have their processing callbacks executed first. */
process_priority: int;

/**
 * Set the process thread group for this node (basically, whether it receives [constant NOTIFICATION_PROCESS], [constant NOTIFICATION_PHYSICS_PROCESS], [method _process] or [method _physics_process] (and the internal versions) on the main thread or in a sub-thread.
 *
 * By default, the thread group is [constant PROCESS_THREAD_GROUP_INHERIT], which means that this node belongs to the same thread group as the parent node. The thread groups means that nodes in a specific thread group will process together, separate to other thread groups (depending on [member process_thread_group_order]). If the value is set is [constant PROCESS_THREAD_GROUP_SUB_THREAD], this thread group will occur on a sub thread (not the main thread), otherwise if set to [constant PROCESS_THREAD_GROUP_MAIN_THREAD] it will process on the main thread. If there is not a parent or grandparent node set to something other than inherit, the node will belong to the **default thread group**. This default group will process on the main thread and its group order is 0.
 *
 * During processing in a sub-thread, accessing most functions in nodes outside the thread group is forbidden (and it will result in an error in debug mode). Use [method Object.call_deferred], [method call_thread_safe], [method call_deferred_thread_group] and the likes in order to communicate from the thread groups to the main thread (or to other thread groups).
 *
 * To better understand process thread groups, the idea is that any node set to any other value than [constant PROCESS_THREAD_GROUP_INHERIT] will include any children (and grandchildren) nodes set to inherit into its process thread group. this means that the processing of all the nodes in the group will happen together, at the same time as the node including them.
 *
*/
process_thread_group: int;

/** Change the process thread group order. Groups with a lesser order will process before groups with a greater order. This is useful when a large amount of nodes process in sub thread and, afterwards, another group wants to collect their result in the main thread, as an example. */
process_thread_group_order: int;

/** Set whether the current thread group will process messages (calls to [method call_deferred_thread_group] on threads, and whether it wants to receive them during regular process or physics process callbacks. */
process_thread_messages: int;

/** If a scene is instantiated from a file, its topmost node contains the absolute file path from which it was loaded in [member scene_file_path] (e.g. [code]res://levels/1.tscn[/code]). Otherwise, [member scene_file_path] is set to an empty string. */
scene_file_path: string;

/**
 * Sets this node's name as a unique name in its [member owner]. This allows the node to be accessed as `%Name` instead of the full path, from any node within that scene.
 *
 * If another node with the same owner already had that name declared as unique, that other node's name will no longer be set as having a unique name.
 *
*/
unique_name_in_owner: boolean;

/**
 * Called when the node enters the [SceneTree] (e.g. upon instancing, scene changing, or after calling [method add_child] in a script). If the node has children, its [method _enter_tree] callback will be called first, and then that of the children.
 *
 * Corresponds to the [constant NOTIFICATION_ENTER_TREE] notification in [method Object._notification].
 *
*/
protected _enter_tree(): void;

/**
 * Called when the node is about to leave the [SceneTree] (e.g. upon freeing, scene changing, or after calling [method remove_child] in a script). If the node has children, its [method _exit_tree] callback will be called last, after all its children have left the tree.
 *
 * Corresponds to the [constant NOTIFICATION_EXIT_TREE] notification in [method Object._notification] and signal [signal tree_exiting]. To get notified when the node has already left the active tree, connect to the [signal tree_exited].
 *
*/
protected _exit_tree(): void;

/**
 * The elements in the array returned from this method are displayed as warnings in the Scene dock if the script that overrides it is a `tool` script.
 *
 * Returning an empty array produces no warnings.
 *
 * Call [method update_configuration_warnings] when the warnings need to be updated for this node.
 *
 * @example 
 * 
 * @export var energy = 0:
 *     set(value):
 *         energy = value
 *         update_configuration_warnings()
 * func _get_configuration_warnings():
 *     if energy < 0:
 *         return ["Energy must be 0 or greater."]
 *     else:
 *         return []
 * @summary 
 * 
 *
*/
protected _get_configuration_warnings(): PackedStringArray;

/**
 * Called when there is an input event. The input event propagates up through the node tree until a node consumes it.
 *
 * It is only called if input processing is enabled, which is done automatically if this method is overridden, and can be toggled with [method set_process_input].
 *
 * To consume the input event and stop it propagating further to other nodes, [method Viewport.set_input_as_handled] can be called.
 *
 * For gameplay input, [method _unhandled_input] and [method _unhandled_key_input] are usually a better fit as they allow the GUI to intercept the events first.
 *
 * **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not an orphan).
 *
*/
protected _input(): void;

/**
 * Called during the physics processing step of the main loop. Physics processing means that the frame rate is synced to the physics, i.e. the [param delta] variable should be constant. [param delta] is in seconds.
 *
 * It is only called if physics processing is enabled, which is done automatically if this method is overridden, and can be toggled with [method set_physics_process].
 *
 * Corresponds to the [constant NOTIFICATION_PHYSICS_PROCESS] notification in [method Object._notification].
 *
 * **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not an orphan).
 *
*/
protected _physics_process(): void;

/**
 * Called during the processing step of the main loop. Processing happens at every frame and as fast as possible, so the [param delta] time since the previous frame is not constant. [param delta] is in seconds.
 *
 * It is only called if processing is enabled, which is done automatically if this method is overridden, and can be toggled with [method set_process].
 *
 * Corresponds to the [constant NOTIFICATION_PROCESS] notification in [method Object._notification].
 *
 * **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not an orphan).
 *
*/
protected _process(): void;

/**
 * Called when the node is "ready", i.e. when both the node and its children have entered the scene tree. If the node has children, their [method _ready] callbacks get triggered first, and the parent node will receive the ready notification afterwards.
 *
 * Corresponds to the [constant NOTIFICATION_READY] notification in [method Object._notification]. See also the `@onready` annotation for variables.
 *
 * Usually used for initialization. For even earlier initialization, [method Object._init] may be used. See also [method _enter_tree].
 *
 * **Note:** [method _ready] may be called only once for each node. After removing a node from the scene tree and adding it again, [method _ready] will not be called a second time. This can be bypassed by requesting another call with [method request_ready], which may be called anywhere before adding the node again.
 *
*/
protected _ready(): void;

/**
 * Called when an [InputEventKey] or [InputEventShortcut] hasn't been consumed by [method _input] or any GUI [Control] item. It is called before [method _unhandled_key_input] and [method _unhandled_input]. The input event propagates up through the node tree until a node consumes it.
 *
 * It is only called if shortcut processing is enabled, which is done automatically if this method is overridden, and can be toggled with [method set_process_shortcut_input].
 *
 * To consume the input event and stop it propagating further to other nodes, [method Viewport.set_input_as_handled] can be called.
 *
 * This method can be used to handle shortcuts. For generic GUI events, use [method _input] instead. Gameplay events should usually be handled with either [method _unhandled_input] or [method _unhandled_key_input].
 *
 * **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not orphan).
 *
*/
protected _shortcut_input(): void;

/**
 * Called when an [InputEvent] hasn't been consumed by [method _input] or any GUI [Control] item. It is called after [method _shortcut_input] and after [method _unhandled_key_input]. The input event propagates up through the node tree until a node consumes it.
 *
 * It is only called if unhandled input processing is enabled, which is done automatically if this method is overridden, and can be toggled with [method set_process_unhandled_input].
 *
 * To consume the input event and stop it propagating further to other nodes, [method Viewport.set_input_as_handled] can be called.
 *
 * For gameplay input, this method is usually a better fit than [method _input], as GUI events need a higher priority. For keyboard shortcuts, consider using [method _shortcut_input] instead, as it is called before this method. Finally, to handle keyboard events, consider using [method _unhandled_key_input] for performance reasons.
 *
 * **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not an orphan).
 *
*/
protected _unhandled_input(): void;

/**
 * Called when an [InputEventKey] hasn't been consumed by [method _input] or any GUI [Control] item. It is called after [method _shortcut_input] but before [method _unhandled_input]. The input event propagates up through the node tree until a node consumes it.
 *
 * It is only called if unhandled key input processing is enabled, which is done automatically if this method is overridden, and can be toggled with [method set_process_unhandled_key_input].
 *
 * To consume the input event and stop it propagating further to other nodes, [method Viewport.set_input_as_handled] can be called.
 *
 * This method can be used to handle Unicode character input with [kbd]Alt[/kbd], [kbd]Alt + Ctrl[/kbd], and [kbd]Alt + Shift[/kbd] modifiers, after shortcuts were handled.
 *
 * For gameplay input, this and [method _unhandled_input] are usually a better fit than [method _input], as GUI events should be handled first. This method also performs better than [method _unhandled_input], since unrelated events such as [InputEventMouseMotion] are automatically filtered. For shortcuts, consider using [method _shortcut_input] instead.
 *
 * **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not an orphan).
 *
*/
protected _unhandled_key_input(): void;

/**
 * Adds a child [param node]. Nodes can have any number of children, but every child must have a unique name. Child nodes are automatically deleted when the parent node is deleted, so an entire scene can be removed by deleting its topmost node.
 *
 * If [param force_readable_name] is `true`, improves the readability of the added [param node]. If not named, the [param node] is renamed to its type, and if it shares [member name] with a sibling, a number is suffixed more appropriately. This operation is very slow. As such, it is recommended leaving this to `false`, which assigns a dummy name featuring `@` in both situations.
 *
 * If [param internal] is different than [constant INTERNAL_MODE_DISABLED], the child will be added as internal node. Such nodes are ignored by methods like [method get_children], unless their parameter `include_internal` is `true`. The intended usage is to hide the internal nodes from the user, so the user won't accidentally delete or modify them. Used by some GUI nodes, e.g. [ColorPicker]. See [enum InternalMode] for available modes.
 *
 * **Note:** If the child node already has a parent, the function will fail. Use [method remove_child] first to remove the node from its current parent. For example:
 *
 * @example 
 * 
 * 
 * var child_node = get_child(0)
 * if child_node.get_parent():
 *     child_node.get_parent().remove_child(child_node)
 * add_child(child_node)
 * 
 * 
 * Node childNode = GetChild(0);
 * if (childNode.GetParent() != null)
 * {
 *     childNode.GetParent().RemoveChild(childNode);
 * }
 * AddChild(childNode);
 * 
 * @summary 
 * 
 *
 * If you need the child node to be added below a specific node in the list of children, use [method add_sibling] instead of this method.
 *
 * **Note:** If you want a child to be persisted to a [PackedScene], you must set [member owner] in addition to calling [method add_child]. This is typically relevant for [url=$DOCS_URL/tutorials/plugins/running_code_in_the_editor.html]tool scripts[/url] and [url=$DOCS_URL/tutorials/plugins/editor/index.html]editor plugins[/url]. If [method add_child] is called without setting [member owner], the newly added [Node] will not be visible in the scene tree, though it will be visible in the 2D/3D view.
 *
*/
add_child(): void;

/**
 * Adds a [param sibling] node to current's node parent, at the same level as that node, right below it.
 *
 * If [param force_readable_name] is `true`, improves the readability of the added [param sibling]. If not named, the [param sibling] is renamed to its type, and if it shares [member name] with a sibling, a number is suffixed more appropriately. This operation is very slow. As such, it is recommended leaving this to `false`, which assigns a dummy name featuring `@` in both situations.
 *
 * Use [method add_child] instead of this method if you don't need the child node to be added below a specific node in the list of children.
 *
 * **Note:** If this node is internal, the new sibling will be internal too (see `internal` parameter in [method add_child]).
 *
*/
add_sibling(): void;

/**
 * Adds the node to a group. Groups are helpers to name and organize a subset of nodes, for example "enemies" or "collectables". A node can be in any number of groups. Nodes can be assigned a group at any time, but will not be added until they are inside the scene tree (see [method is_inside_tree]). See notes in the description, and the group methods in [SceneTree].
 *
 * The [param persistent] option is used when packing node to [PackedScene] and saving to file. Non-persistent groups aren't stored.
 *
 * **Note:** For performance reasons, the order of node groups is **not** guaranteed. The order of node groups should not be relied upon as it can vary across project runs.
 *
*/
add_to_group(): void;

/** This function is similar to [method Object.call_deferred] except that the call will take place when the node thread group is processed. If the node thread group processes in sub-threads, then the call will be done on that thread, right before [constant NOTIFICATION_PROCESS] or [constant NOTIFICATION_PHYSICS_PROCESS], the [method _process] or [method _physics_process] or their internal versions are called. */
call_deferred_thread_group(...args: any[]): any;

/** This function ensures that the calling of this function will succeed, no matter whether it's being done from a thread or not. If called from a thread that is not allowed to call the function, the call will become deferred. Otherwise, the call will go through directly. */
call_thread_safe(...args: any[]): any;

/** Returns [code]true[/code] if the node can process while the scene tree is paused (see [member process_mode]). Always returns [code]true[/code] if the scene tree is not paused, and [code]false[/code] if the node is not in the tree. */
can_process(): boolean;

/**
 * Creates a new [Tween] and binds it to this node. This is equivalent of doing:
 *
 * @example 
 * 
 * 
 * get_tree().create_tween().bind_node(self)
 * 
 * 
 * GetTree().CreateTween().BindNode(this);
 * 
 * @summary 
 * 
 *
 * The Tween will start automatically on the next process frame or physics frame (depending on [enum Tween.TweenProcessMode]).
 *
*/
create_tween(): Tween;

/**
 * Duplicates the node, returning a new node.
 *
 * You can fine-tune the behavior using the [param flags] (see [enum DuplicateFlags]).
 *
 * **Note:** It will not work properly if the node contains a script with constructor arguments (i.e. needs to supply arguments to [method Object._init] method). In that case, the node will be duplicated without a script.
 *
*/
duplicate(): Node;

/**
 * Finds the first descendant of this node whose name matches [param pattern] as in [method String.match]. Internal children are also searched over (see `internal` parameter in [method add_child]).
 *
 * [param pattern] does not match against the full path, just against individual node names. It is case-sensitive, with `"*"` matching zero or more characters and `"?"` matching any single character except `"."`).
 *
 * If [param recursive] is `true`, all child nodes are included, even if deeply nested. Nodes are checked in tree order, so this node's first direct child is checked first, then its own direct children, etc., before moving to the second direct child, and so on. If [param recursive] is `false`, only this node's direct children are matched.
 *
 * If [param owned] is `true`, this method only finds nodes who have an assigned [member Node.owner]. This is especially important for scenes instantiated through a script, because those scenes don't have an owner.
 *
 * Returns `null` if no matching [Node] is found.
 *
 * **Note:** As this method walks through all the descendants of the node, it is the slowest way to get a reference to another node. Whenever possible, consider using [method get_node] with unique names instead (see [member unique_name_in_owner]), or caching the node references into variable.
 *
 * **Note:** To find all descendant nodes matching a pattern or a class type, see [method find_children].
 *
*/
find_child(): Node;

/**
 * Finds descendants of this node whose name matches [param pattern] as in [method String.match], and/or type matches [param type] as in [method Object.is_class]. Internal children are also searched over (see `internal` parameter in [method add_child]).
 *
 * [param pattern] does not match against the full path, just against individual node names. It is case-sensitive, with `"*"` matching zero or more characters and `"?"` matching any single character except `"."`).
 *
 * [param type] will check equality or inheritance, and is case-sensitive. `"Object"` will match a node whose type is `"Node"` but not the other way around.
 *
 * If [param recursive] is `true`, all child nodes are included, even if deeply nested. Nodes are checked in tree order, so this node's first direct child is checked first, then its own direct children, etc., before moving to the second direct child, and so on. If [param recursive] is `false`, only this node's direct children are matched.
 *
 * If [param owned] is `true`, this method only finds nodes who have an assigned [member Node.owner]. This is especially important for scenes instantiated through a script, because those scenes don't have an owner.
 *
 * Returns an empty array if no matching nodes are found.
 *
 * **Note:** As this method walks through all the descendants of the node, it is the slowest way to get references to other nodes. Whenever possible, consider caching the node references into variables.
 *
 * **Note:** If you only want to find the first descendant node that matches a pattern, see [method find_child].
 *
*/
find_children(): Node[];

/**
 * Finds the first parent of the current node whose name matches [param pattern] as in [method String.match].
 *
 * [param pattern] does not match against the full path, just against individual node names. It is case-sensitive, with `"*"` matching zero or more characters and `"?"` matching any single character except `"."`).
 *
 * **Note:** As this method walks upwards in the scene tree, it can be slow in large, deeply nested scene trees. Whenever possible, consider using [method get_node] with unique names instead (see [member unique_name_in_owner]), or caching the node references into variable.
 *
*/
find_parent(): Node;

/**
 * Returns a child node by its index (see [method get_child_count]). This method is often used for iterating all children of a node.
 *
 * Negative indices access the children from the last one.
 *
 * If [param include_internal] is `false`, internal children are skipped (see `internal` parameter in [method add_child]).
 *
 * To access a child node via its name, use [method get_node].
 *
*/
get_child(): Node;

/**
 * Returns the number of child nodes.
 *
 * If [param include_internal] is `false`, internal children aren't counted (see `internal` parameter in [method add_child]).
 *
*/
get_child_count(): int;

/**
 * Returns an array of references to node's children.
 *
 * If [param include_internal] is `false`, the returned array won't include internal children (see `internal` parameter in [method add_child]).
 *
*/
get_children(): Node[];

/**
 * Returns an array listing the groups that the node is a member of.
 *
 * **Note:** For performance reasons, the order of node groups is **not** guaranteed. The order of node groups should not be relied upon as it can vary across project runs.
 *
 * **Note:** The engine uses some group names internally (all starting with an underscore). To avoid conflicts with internal groups, do not add custom groups whose name starts with an underscore. To exclude internal groups while looping over [method get_groups], use the following snippet:
 *
 * @example 
 * 
 * 
 * # Stores the node's non-internal groups only (as an array of Strings).
 * var non_internal_groups = []
 * for group in get_groups():
 *     if not group.begins_with("_"):
 *         non_internal_groups.push_back(group)
 * 
 * 
 * // Stores the node's non-internal groups only (as a List of strings).
 * List<string> nonInternalGroups = new List<string>();
 * foreach (string group in GetGroups())
 * {
 *     if (!group.BeginsWith("_"))
 *         nonInternalGroups.Add(group);
 * }
 * 
 * @summary 
 * 
 *
*/
get_groups(): StringName[];

/**
 * Returns the node's order in the scene tree branch. For example, if called on the first child node the position is `0`.
 *
 * If [param include_internal] is `false`, the index won't take internal children into account, i.e. first non-internal child will have index of 0 (see `internal` parameter in [method add_child]).
 *
*/
get_index(): int;

/** Returns the [Window] that contains this node, or the last exclusive child in a chain of windows starting with the one that contains this node. */
get_last_exclusive_window(): Window;

/** Returns the peer ID of the multiplayer authority for this node. See [method set_multiplayer_authority]. */
get_multiplayer_authority(): int;

/**
 * Fetches a node. The [NodePath] can be either a relative path (from the current node) or an absolute path (in the scene tree) to a node. If the path does not exist, `null` is returned and an error is logged. Attempts to access methods on the return value will result in an "Attempt to call <method> on a null instance." error.
 *
 * **Note:** Fetching absolute paths only works when the node is inside the scene tree (see [method is_inside_tree]).
 *
 * **Example:** Assume your current node is Character and the following tree:
 *
 * @example 
 * 
 * /root
 * /root/Character
 * /root/Character/Sword
 * /root/Character/Backpack/Dagger
 * /root/MyGame
 * /root/Swamp/Alligator
 * /root/Swamp/Mosquito
 * /root/Swamp/Goblin
 * @summary 
 * 
 *
 * Possible paths are:
 *
 * @example 
 * 
 * 
 * get_node("Sword")
 * get_node("Backpack/Dagger")
 * get_node("../Swamp/Alligator")
 * get_node("/root/MyGame")
 * 
 * 
 * GetNode("Sword");
 * GetNode("Backpack/Dagger");
 * GetNode("../Swamp/Alligator");
 * GetNode("/root/MyGame");
 * 
 * @summary 
 * 
 *
*/
get_node(path: NodePathType): Node;

/**
 * Fetches a node. The [NodePath] can be either a relative path (from the current node) or an absolute path (in the scene tree) to a node. If the path does not exist, `null` is returned and an error is logged. Attempts to access methods on the return value will result in an "Attempt to call <method> on a null instance." error.
 *
 * **Note:** Fetching absolute paths only works when the node is inside the scene tree (see [method is_inside_tree]).
 *
 * **Example:** Assume your current node is Character and the following tree:
 *
 * @example 
 * 
 * /root
 * /root/Character
 * /root/Character/Sword
 * /root/Character/Backpack/Dagger
 * /root/MyGame
 * /root/Swamp/Alligator
 * /root/Swamp/Mosquito
 * /root/Swamp/Goblin
 * @summary 
 * 
 *
 * Possible paths are:
 *
 * @example 
 * 
 * 
 * get_node("Sword")
 * get_node("Backpack/Dagger")
 * get_node("../Swamp/Alligator")
 * get_node("/root/MyGame")
 * 
 * 
 * GetNode("Sword");
 * GetNode("Backpack/Dagger");
 * GetNode("../Swamp/Alligator");
 * GetNode("/root/MyGame");
 * 
 * @summary 
 * 
 *
*/
get_node_unsafe<T extends Node>(path: NodePathType): T;


/**
 * Fetches a node and one of its resources as specified by the [NodePath]'s subname (e.g. `Area2D/CollisionShape2D:shape`). If several nested resources are specified in the [NodePath], the last one will be fetched.
 *
 * The return value is an array of size 3: the first index points to the [Node] (or `null` if not found), the second index points to the [Resource] (or `null` if not found), and the third index is the remaining [NodePath], if any.
 *
 * For example, assuming that `Area2D/CollisionShape2D` is a valid node and that its `shape` property has been assigned a [RectangleShape2D] resource, one could have this kind of output:
 *
 * @example 
 * 
 * 
 * print(get_node_and_resource("Area2D/CollisionShape2D")) # [[CollisionShape2D:1161], Null, ]
 * print(get_node_and_resource("Area2D/CollisionShape2D:shape")) # [[CollisionShape2D:1161], [RectangleShape2D:1156], ]
 * print(get_node_and_resource("Area2D/CollisionShape2D:shape:extents")) # [[CollisionShape2D:1161], [RectangleShape2D:1156], :extents]
 * 
 * 
 * GD.Print(GetNodeAndResource("Area2D/CollisionShape2D")); // [[CollisionShape2D:1161], Null, ]
 * GD.Print(GetNodeAndResource("Area2D/CollisionShape2D:shape")); // [[CollisionShape2D:1161], [RectangleShape2D:1156], ]
 * GD.Print(GetNodeAndResource("Area2D/CollisionShape2D:shape:extents")); // [[CollisionShape2D:1161], [RectangleShape2D:1156], :extents]
 * 
 * @summary 
 * 
 *
*/
get_node_and_resource(): any[];

/** Similar to [method get_node], but does not log an error if [param path] does not point to a valid [Node]. */
get_node_or_null(): Node;

/** Returns the parent node of the current node, or [code]null[/code] if the node lacks a parent. */
get_parent(): Node;

/** Returns the absolute path of the current node. This only works if the current node is inside the scene tree (see [method is_inside_tree]). */
get_path(): NodePathType;

/**
 * Returns the relative [NodePath] from this node to the specified [param node]. Both nodes must be in the same scene or the function will fail.
 *
 * If [param use_unique_path] is `true`, returns the shortest path considering unique node.
 *
 * **Note:** If you get a relative path which starts from a unique node, the path may be longer than a normal relative path due to the addition of the unique node's name.
 *
*/
get_path_to(): NodePathType;

/** Returns the time elapsed (in seconds) since the last physics-bound frame (see [method _physics_process]). This is always a constant value in physics processing unless the frames per second is changed via [member Engine.physics_ticks_per_second]. */
get_physics_process_delta_time(): float;

/** Returns the time elapsed (in seconds) since the last process callback. This value may vary from frame to frame. */
get_process_delta_time(): float;

/** Returns [code]true[/code] if this is an instance load placeholder. See [InstancePlaceholder]. */
get_scene_instance_load_placeholder(): boolean;

/** Returns the [SceneTree] that contains this node. Returns [code]null[/code] and prints an error if this node is not inside the scene tree. See also [method is_inside_tree]. */
get_tree(): SceneTree;

/**
 * Returns the tree as a [String]. Used mainly for debugging purposes. This version displays the path relative to the current node, and is good for copy/pasting into the [method get_node] function. It also can be used in game UI/UX.
 *
 * **Example output:**
 *
 * @example 
 * 
 * TheGame
 * TheGame/Menu
 * TheGame/Menu/Label
 * TheGame/Menu/Camera2D
 * TheGame/SplashScreen
 * TheGame/SplashScreen/Camera2D
 * @summary 
 * 
 *
*/
get_tree_string(): string;

/**
 * Similar to [method get_tree_string], this returns the tree as a [String]. This version displays a more graphical representation similar to what is displayed in the Scene Dock. It is useful for inspecting larger trees.
 *
 * **Example output:**
 *
 * @example 
 * 
 *  ┖╴TheGame
 *     ┠╴Menu
 *     ┃  ┠╴Label
 *     ┃  ┖╴Camera2D
 *     ┖╴SplashScreen
 *        ┖╴Camera2D
 * @summary 
 * 
 *
*/
get_tree_string_pretty(): string;

/** Returns the node's [Viewport]. */
get_viewport(): Viewport;

/** Returns the [Window] that contains this node. If the node is in the main window, this is equivalent to getting the root node ([code]get_tree().get_root()[/code]). */
get_window(): Window;

/** Returns [code]true[/code] if the node that the [NodePath] points to exists. */
has_node(): boolean;

/** Returns [code]true[/code] if the [NodePath] points to a valid node and its subname points to a valid resource, e.g. [code]Area2D/CollisionShape2D:shape[/code]. Properties with a non-[Resource] type (e.g. nodes or primitive math types) are not considered resources. */
has_node_and_resource(): boolean;

/** Returns [code]true[/code] if the given node is a direct or indirect child of the current node. */
is_ancestor_of(): boolean;

/** Returns [code]true[/code] if the node is folded (collapsed) in the Scene dock. This method is only intended for use with editor tooling. */
is_displayed_folded(): boolean;

/** Returns [code]true[/code] if [param node] has editable children enabled relative to this node. This method is only intended for use with editor tooling. */
is_editable_instance(): boolean;

/** Returns [code]true[/code] if the given node occurs later in the scene hierarchy than the current node. */
is_greater_than(): boolean;

/** Returns [code]true[/code] if this node is in the specified group. See notes in the description, and the group methods in [SceneTree]. */
is_in_group(): boolean;

/** Returns [code]true[/code] if this node is currently inside a [SceneTree]. */
is_inside_tree(): boolean;

/** Returns [code]true[/code] if the local system is the multiplayer authority of this node. */
is_multiplayer_authority(): boolean;

/**
 * Returns `true` if the node is ready, i.e. it's inside scene tree and all its children are initialized.
 *
 * [method request_ready] resets it back to `false`.
 *
*/
is_node_ready(): boolean;

/** Returns [code]true[/code] if physics processing is enabled (see [method set_physics_process]). */
is_physics_processing(): boolean;

/** Returns [code]true[/code] if internal physics processing is enabled (see [method set_physics_process_internal]). */
is_physics_processing_internal(): boolean;

/** Returns [code]true[/code] if processing is enabled (see [method set_process]). */
is_processing(): boolean;

/** Returns [code]true[/code] if the node is processing input (see [method set_process_input]). */
is_processing_input(): boolean;

/** Returns [code]true[/code] if internal processing is enabled (see [method set_process_internal]). */
is_processing_internal(): boolean;

/** Returns [code]true[/code] if the node is processing shortcuts (see [method set_process_shortcut_input]). */
is_processing_shortcut_input(): boolean;

/** Returns [code]true[/code] if the node is processing unhandled input (see [method set_process_unhandled_input]). */
is_processing_unhandled_input(): boolean;

/** Returns [code]true[/code] if the node is processing unhandled key input (see [method set_process_unhandled_key_input]). */
is_processing_unhandled_key_input(): boolean;

/**
 * Moves a child node to a different index (order) among the other children. Since calls, signals, etc. are performed by tree order, changing the order of children nodes may be useful. If [param to_index] is negative, the index will be counted from the end.
 *
 * **Note:** Internal children can only be moved within their expected "internal range" (see `internal` parameter in [method add_child]).
 *
*/
move_child(): void;

/** Similar to [method call_deferred_thread_group], but for notifications. */
notify_deferred_thread_group(): void;

/** Similar to [method call_thread_safe], but for notifications. */
notify_thread_safe(): void;

/**
 * Prints all orphan nodes (nodes outside the [SceneTree]). Used for debugging.
 *
 * **Note:** [method print_orphan_nodes] only works in debug builds. When called in a project exported in release mode, [method print_orphan_nodes] will not print anything.
 *
*/
print_orphan_nodes(): void;

/**
 * Prints the tree to stdout. Used mainly for debugging purposes. This version displays the path relative to the current node, and is good for copy/pasting into the [method get_node] function.
 *
 * **Example output:**
 *
 * @example 
 * 
 * TheGame
 * TheGame/Menu
 * TheGame/Menu/Label
 * TheGame/Menu/Camera2D
 * TheGame/SplashScreen
 * TheGame/SplashScreen/Camera2D
 * @summary 
 * 
 *
*/
print_tree(): void;

/**
 * Similar to [method print_tree], this prints the tree to stdout. This version displays a more graphical representation similar to what is displayed in the Scene Dock. It is useful for inspecting larger trees.
 *
 * **Example output:**
 *
 * @example 
 * 
 *  ┖╴TheGame
 *     ┠╴Menu
 *     ┃  ┠╴Label
 *     ┃  ┖╴Camera2D
 *     ┖╴SplashScreen
 *        ┖╴Camera2D
 * @summary 
 * 
 *
*/
print_tree_pretty(): void;

/** Calls the given method (if present) with the arguments given in [param args] on this node and recursively on all its children. If the [param parent_first] argument is [code]true[/code], the method will be called on the current node first, then on all its children. If [param parent_first] is [code]false[/code], the children will be called first. */
propagate_call(): void;

/** Notifies the current node and all its children recursively by calling [method Object.notification] on all of them. */
propagate_notification(): void;

/**
 * Queues a node for deletion at the end of the current frame. When deleted, all of its child nodes will be deleted as well, and all references to the node and its children will become invalid, see [method Object.free].
 *
 * It is safe to call [method queue_free] multiple times per frame on a node, and to [method Object.free] a node that is currently queued for deletion. Use [method Object.is_queued_for_deletion] to check whether a node will be deleted at the end of the frame.
 *
 * The node will only be freed after all other deferred calls are finished, so using [method queue_free] is not always the same as calling [method Object.free] through [method Object.call_deferred].
 *
*/
queue_free(): void;

/**
 * Removes a child node. The node is NOT deleted and must be deleted manually.
 *
 * **Note:** This function may set the [member owner] of the removed Node (or its descendants) to be `null`, if that [member owner] is no longer a parent or ancestor.
 *
*/
remove_child(): void;

/** Removes a node from the [param group]. Does nothing if the node is not in the [param group]. See notes in the description, and the group methods in [SceneTree]. */
remove_from_group(): void;

/**
 * Changes the parent of this [Node] to the [param new_parent]. The node needs to already have a parent.
 *
 * If [param keep_global_transform] is `true`, the node's global transform will be preserved if supported. [Node2D], [Node3D] and [Control] support this argument (but [Control] keeps only position).
 *
*/
reparent(): void;

/**
 * Replaces a node in a scene by the given one. Subscriptions that pass through this node will be lost.
 *
 * If [param keep_groups] is `true`, the [param node] is added to the same groups that the replaced node is in.
 *
 * **Note:** The given node will become the new parent of any child nodes that the replaced node had.
 *
 * **Note:** The replaced node is not automatically freed, so you either need to keep it in a variable for later use or free it using [method Object.free].
 *
*/
replace_by(): void;

/** Requests that [method _ready] be called again. Note that the method won't be called immediately, but is scheduled for when the node is added to the scene tree again. [method _ready] is called only for the node which requested it, which means that you need to request ready for each child if you want them to call [method _ready] too (in which case, [method _ready] will be called in the same order as it would normally). */
request_ready(): void;



/**
 * Changes the RPC mode for the given [param method] with the given [param config] which should be `null` (to disable) or a [Dictionary] in the form:
 *
 * @example 
 * 
 * {
 *     rpc_mode = MultiplayerAPI.RPCMode,
 *     transfer_mode = MultiplayerPeer.TransferMode,
 *     call_local = false,
 *     channel = 0,
 * }
 * @summary 
 * 
 *
 * See [enum MultiplayerAPI.RPCMode] and [enum MultiplayerPeer.TransferMode]. An alternative is annotating methods and properties with the corresponding [annotation @GDScript.@rpc] annotation (`@rpc("any_peer")`, `@rpc("authority")`). By default, methods are not exposed to networking (and RPCs).
 *
*/
rpc_config(): void;



/** Similar to [method call_deferred_thread_group], but for setting properties. */
set_deferred_thread_group(): void;

/** Sets the folded state of the node in the Scene dock. This method is only intended for use with editor tooling. */
set_display_folded(): void;

/** Sets the editable children state of [param node] relative to this node. This method is only intended for use with editor tooling. */
set_editable_instance(): void;

/**
 * Sets the node's multiplayer authority to the peer with the given peer ID. The multiplayer authority is the peer that has authority over the node on the network. Useful in conjunction with [method rpc_config] and the [MultiplayerAPI]. Defaults to peer ID 1 (the server). If [param recursive], the given peer is recursively set as the authority for all children of this node.
 *
 * **Warning:** This does **not** automatically replicate the new authority to other peers. It is developer's responsibility to do so. You can propagate the information about the new authority using [member MultiplayerSpawner.spawn_function], an RPC, or using a [MultiplayerSynchronizer]. Also, the parent's authority does **not** propagate to newly added children.
 *
*/
set_multiplayer_authority(): void;

/** Enables or disables physics (i.e. fixed framerate) processing. When a node is being processed, it will receive a [constant NOTIFICATION_PHYSICS_PROCESS] at a fixed (usually 60 FPS, see [member Engine.physics_ticks_per_second] to change) interval (and the [method _physics_process] callback will be called if exists). Enabled automatically if [method _physics_process] is overridden. Any calls to this before [method _ready] will be ignored. */
set_physics_process(): void;

/**
 * Enables or disables internal physics for this node. Internal physics processing happens in isolation from the normal [method _physics_process] calls and is used by some nodes internally to guarantee proper functioning even if the node is paused or physics processing is disabled for scripting ([method set_physics_process]). Only useful for advanced uses to manipulate built-in nodes' behavior.
 *
 * **Warning:** Built-in Nodes rely on the internal processing for their own logic, so changing this value from your code may lead to unexpected behavior. Script access to this internal logic is provided for specific advanced uses, but is unsafe and not supported.
 *
*/
set_physics_process_internal(): void;

/** Enables or disables processing. When a node is being processed, it will receive a [constant NOTIFICATION_PROCESS] on every drawn frame (and the [method _process] callback will be called if exists). Enabled automatically if [method _process] is overridden. Any calls to this before [method _ready] will be ignored. */
set_process(): void;

/** Enables or disables input processing. This is not required for GUI controls! Enabled automatically if [method _input] is overridden. Any calls to this before [method _ready] will be ignored. */
set_process_input(): void;

/**
 * Enables or disabled internal processing for this node. Internal processing happens in isolation from the normal [method _process] calls and is used by some nodes internally to guarantee proper functioning even if the node is paused or processing is disabled for scripting ([method set_process]). Only useful for advanced uses to manipulate built-in nodes' behavior.
 *
 * **Warning:** Built-in Nodes rely on the internal processing for their own logic, so changing this value from your code may lead to unexpected behavior. Script access to this internal logic is provided for specific advanced uses, but is unsafe and not supported.
 *
*/
set_process_internal(): void;

/** Enables shortcut processing. Enabled automatically if [method _shortcut_input] is overridden. Any calls to this before [method _ready] will be ignored. */
set_process_shortcut_input(): void;

/** Enables unhandled input processing. This is not required for GUI controls! It enables the node to receive all input that was not previously handled (usually by a [Control]). Enabled automatically if [method _unhandled_input] is overridden. Any calls to this before [method _ready] will be ignored. */
set_process_unhandled_input(): void;

/** Enables unhandled key input processing. Enabled automatically if [method _unhandled_key_input] is overridden. Any calls to this before [method _ready] will be ignored. */
set_process_unhandled_key_input(): void;

/** Sets whether this is an instance load placeholder. See [InstancePlaceholder]. */
set_scene_instance_load_placeholder(): void;

/** Similar to [method call_thread_safe], but for setting properties. */
set_thread_safe(): void;

/**
 * Updates the warning displayed for this node in the Scene Dock.
 *
 * Use [method _get_configuration_warnings] to setup the warning message to display.
 *
*/
update_configuration_warnings(): void;

  connect<T extends SignalsOf<Node>>(signal: T, method: SignalFunction<Node[T]>): number;



/**
 * Notification received when the node enters a [SceneTree].
 *
 * This notification is emitted **before** the related [signal tree_entered].
 *
*/
static NOTIFICATION_ENTER_TREE: any;

/**
 * Notification received when the node is about to exit a [SceneTree].
 *
 * This notification is emitted **after** the related [signal tree_exiting].
 *
*/
static NOTIFICATION_EXIT_TREE: any;

/**
 * **Deprecated.** This notification is no longer emitted. Use [constant NOTIFICATION_CHILD_ORDER_CHANGED] instead.
 *
*/
static NOTIFICATION_MOVED_IN_PARENT: any;

/**
 * Notification received when the node is ready. See [method _ready].
 *
*/
static NOTIFICATION_READY: any;

/**
 * Notification received when the node is paused.
 *
*/
static NOTIFICATION_PAUSED: any;

/**
 * Notification received when the node is unpaused.
 *
*/
static NOTIFICATION_UNPAUSED: any;

/**
 * Notification received every frame when the physics process flag is set (see [method set_physics_process]).
 *
*/
static NOTIFICATION_PHYSICS_PROCESS: any;

/**
 * Notification received every frame when the process flag is set (see [method set_process]).
 *
*/
static NOTIFICATION_PROCESS: any;

/**
 * Notification received when a node is set as a child of another node.
 *
 * **Note:** This doesn't mean that a node entered the [SceneTree].
 *
*/
static NOTIFICATION_PARENTED: any;

/**
 * Notification received when a node is unparented (parent removed it from the list of children).
 *
*/
static NOTIFICATION_UNPARENTED: any;

/**
 * Notification received by scene owner when its scene is instantiated.
 *
*/
static NOTIFICATION_SCENE_INSTANTIATED: any;

/**
 * Notification received when a drag operation begins. All nodes receive this notification, not only the dragged one.
 *
 * Can be triggered either by dragging a [Control] that provides drag data (see [method Control._get_drag_data]) or using [method Control.force_drag].
 *
 * Use [method Viewport.gui_get_drag_data] to get the dragged data.
 *
*/
static NOTIFICATION_DRAG_BEGIN: any;

/**
 * Notification received when a drag operation ends.
 *
 * Use [method Viewport.gui_is_drag_successful] to check if the drag succeeded.
 *
*/
static NOTIFICATION_DRAG_END: any;

/**
 * Notification received when the node's name or one of its parents' name is changed. This notification is **not** received when the node is removed from the scene tree to be added to another parent later on.
 *
*/
static NOTIFICATION_PATH_RENAMED: any;

/**
 * Notification received when the list of children is changed. This happens when child nodes are added, moved or removed.
 *
*/
static NOTIFICATION_CHILD_ORDER_CHANGED: any;

/**
 * Notification received every frame when the internal process flag is set (see [method set_process_internal]).
 *
*/
static NOTIFICATION_INTERNAL_PROCESS: any;

/**
 * Notification received every frame when the internal physics process flag is set (see [method set_physics_process_internal]).
 *
*/
static NOTIFICATION_INTERNAL_PHYSICS_PROCESS: any;

/**
 * Notification received when the node is ready, just before [constant NOTIFICATION_READY] is received. Unlike the latter, it's sent every time the node enters the tree, instead of only once.
 *
*/
static NOTIFICATION_POST_ENTER_TREE: any;

/**
 * Notification received when the node is disabled. See [constant PROCESS_MODE_DISABLED].
 *
*/
static NOTIFICATION_DISABLED: any;

/**
 * Notification received when the node is enabled again after being disabled. See [constant PROCESS_MODE_DISABLED].
 *
*/
static NOTIFICATION_ENABLED: any;

/**
 * Notification received right before the scene with the node is saved in the editor. This notification is only sent in the Godot editor and will not occur in exported projects.
 *
*/
static NOTIFICATION_EDITOR_PRE_SAVE: any;

/**
 * Notification received right after the scene with the node is saved in the editor. This notification is only sent in the Godot editor and will not occur in exported projects.
 *
*/
static NOTIFICATION_EDITOR_POST_SAVE: any;

/**
 * Notification received when the mouse enters the window.
 *
 * Implemented for embedded windows and on desktop and web platforms.
 *
*/
static NOTIFICATION_WM_MOUSE_ENTER: any;

/**
 * Notification received when the mouse leaves the window.
 *
 * Implemented for embedded windows and on desktop and web platforms.
 *
*/
static NOTIFICATION_WM_MOUSE_EXIT: any;

/**
 * Notification received when the node's parent [Window] is focused. This may be a change of focus between two windows of the same engine instance, or from the OS desktop or a third-party application to a window of the game (in which case [constant NOTIFICATION_APPLICATION_FOCUS_IN] is also emitted).
 *
 * A [Window] node receives this notification when it is focused.
 *
*/
static NOTIFICATION_WM_WINDOW_FOCUS_IN: any;

/**
 * Notification received when the node's parent [Window] is defocused. This may be a change of focus between two windows of the same engine instance, or from a window of the game to the OS desktop or a third-party application (in which case [constant NOTIFICATION_APPLICATION_FOCUS_OUT] is also emitted).
 *
 * A [Window] node receives this notification when it is defocused.
 *
*/
static NOTIFICATION_WM_WINDOW_FOCUS_OUT: any;

/**
 * Notification received from the OS when a close request is sent (e.g. closing the window with a "Close" button or [kbd]Alt + F4[/kbd]).
 *
 * Implemented on desktop platforms.
 *
*/
static NOTIFICATION_WM_CLOSE_REQUEST: any;

/**
 * Notification received from the OS when a go back request is sent (e.g. pressing the "Back" button on Android).
 *
 * Specific to the Android platform.
 *
*/
static NOTIFICATION_WM_GO_BACK_REQUEST: any;

/**
 * Notification received from the OS when the window is resized.
 *
*/
static NOTIFICATION_WM_SIZE_CHANGED: any;

/**
 * Notification received from the OS when the screen's DPI has been changed. Only implemented on macOS.
 *
*/
static NOTIFICATION_WM_DPI_CHANGE: any;

/**
 * Notification received when the mouse cursor enters the [Viewport]'s visible area, that is not occluded behind other [Control]s or [Window]s, provided its [member Viewport.gui_disable_input] is `false` and regardless if it's currently focused or not.
 *
*/
static NOTIFICATION_VP_MOUSE_ENTER: any;

/**
 * Notification received when the mouse cursor leaves the [Viewport]'s visible area, that is not occluded behind other [Control]s or [Window]s, provided its [member Viewport.gui_disable_input] is `false` and regardless if it's currently focused or not.
 *
*/
static NOTIFICATION_VP_MOUSE_EXIT: any;

/**
 * Notification received from the OS when the application is exceeding its allocated memory.
 *
 * Specific to the iOS platform.
 *
*/
static NOTIFICATION_OS_MEMORY_WARNING: any;

/**
 * Notification received when translations may have changed. Can be triggered by the user changing the locale. Can be used to respond to language changes, for example to change the UI strings on the fly. Useful when working with the built-in translation support, like [method Object.tr].
 *
*/
static NOTIFICATION_TRANSLATION_CHANGED: any;

/**
 * Notification received from the OS when a request for "About" information is sent.
 *
 * Specific to the macOS platform.
 *
*/
static NOTIFICATION_WM_ABOUT: any;

/**
 * Notification received from Godot's crash handler when the engine is about to crash.
 *
 * Implemented on desktop platforms if the crash handler is enabled.
 *
*/
static NOTIFICATION_CRASH: any;

/**
 * Notification received from the OS when an update of the Input Method Engine occurs (e.g. change of IME cursor position or composition string).
 *
 * Specific to the macOS platform.
 *
*/
static NOTIFICATION_OS_IME_UPDATE: any;

/**
 * Notification received from the OS when the application is resumed.
 *
 * Specific to the Android platform.
 *
*/
static NOTIFICATION_APPLICATION_RESUMED: any;

/**
 * Notification received from the OS when the application is paused.
 *
 * Specific to the Android platform.
 *
*/
static NOTIFICATION_APPLICATION_PAUSED: any;

/**
 * Notification received from the OS when the application is focused, i.e. when changing the focus from the OS desktop or a thirdparty application to any open window of the Godot instance.
 *
 * Implemented on desktop platforms.
 *
*/
static NOTIFICATION_APPLICATION_FOCUS_IN: any;

/**
 * Notification received from the OS when the application is defocused, i.e. when changing the focus from any open window of the Godot instance to the OS desktop or a thirdparty application.
 *
 * Implemented on desktop platforms.
 *
*/
static NOTIFICATION_APPLICATION_FOCUS_OUT: any;

/**
 * Notification received when text server is changed.
 *
*/
static NOTIFICATION_TEXT_SERVER_CHANGED: any;

/**
 * Inherits process mode from the node's parent. For the root node, it is equivalent to [constant PROCESS_MODE_PAUSABLE]. Default.
 *
*/
static PROCESS_MODE_INHERIT: any;

/**
 * Stops processing when the [SceneTree] is paused (process when unpaused). This is the inverse of [constant PROCESS_MODE_WHEN_PAUSED].
 *
*/
static PROCESS_MODE_PAUSABLE: any;

/**
 * Only process when the [SceneTree] is paused (don't process when unpaused). This is the inverse of [constant PROCESS_MODE_PAUSABLE].
 *
*/
static PROCESS_MODE_WHEN_PAUSED: any;

/**
 * Always process. Continue processing always, ignoring the [SceneTree]'s paused property. This is the inverse of [constant PROCESS_MODE_DISABLED].
 *
*/
static PROCESS_MODE_ALWAYS: any;

/**
 * Never process. Completely disables processing, ignoring the [SceneTree]'s paused property. This is the inverse of [constant PROCESS_MODE_ALWAYS].
 *
*/
static PROCESS_MODE_DISABLED: any;

/**
 * If the [member process_thread_group] property is sent to this, the node will belong to any parent (or grandparent) node that has a thread group mode that is not inherit. See [member process_thread_group] for more information.
 *
*/
static PROCESS_THREAD_GROUP_INHERIT: any;

/**
 * Process this node (and children nodes set to inherit) on the main thread. See [member process_thread_group] for more information.
 *
*/
static PROCESS_THREAD_GROUP_MAIN_THREAD: any;

/**
 * Process this node (and children nodes set to inherit) on a sub-thread. See [member process_thread_group] for more information.
 *
*/
static PROCESS_THREAD_GROUP_SUB_THREAD: any;

/** No documentation provided. */
static FLAG_PROCESS_THREAD_MESSAGES: any;

/** No documentation provided. */
static FLAG_PROCESS_THREAD_MESSAGES_PHYSICS: any;

/** No documentation provided. */
static FLAG_PROCESS_THREAD_MESSAGES_ALL: any;

/**
 * Duplicate the node's signals.
 *
*/
static DUPLICATE_SIGNALS: any;

/**
 * Duplicate the node's groups.
 *
*/
static DUPLICATE_GROUPS: any;

/**
 * Duplicate the node's scripts.
 *
*/
static DUPLICATE_SCRIPTS: any;

/**
 * Duplicate using instancing.
 *
 * An instance stays linked to the original so when the original changes, the instance changes too.
 *
*/
static DUPLICATE_USE_INSTANTIATION: any;

/**
 * Node will not be internal.
 *
*/
static INTERNAL_MODE_DISABLED: any;

/**
 * Node will be placed at the front of parent's node list, before any non-internal sibling.
 *
*/
static INTERNAL_MODE_FRONT: any;

/**
 * Node will be placed at the back of parent's node list, after any non-internal sibling.
 *
*/
static INTERNAL_MODE_BACK: any;


/**
 * Emitted when a child node enters the scene tree, either because it entered on its own or because this node entered with it.
 *
 * This signal is emitted **after** the child node's own [constant NOTIFICATION_ENTER_TREE] and [signal tree_entered].
 *
*/
$child_entered_tree: Signal<() => void>

/**
 * Emitted when a child node is about to exit the scene tree, either because it is being removed or freed directly, or because this node is exiting the tree.
 *
 * When this signal is received, the child [param node] is still in the tree and valid. This signal is emitted **after** the child node's own [signal tree_exiting] and [constant NOTIFICATION_EXIT_TREE].
 *
*/
$child_exiting_tree: Signal<() => void>

/**
 * Emitted when the list of children is changed. This happens when child nodes are added, moved or removed.
 *
*/
$child_order_changed: Signal<() => void>

/**
 * Emitted when the node is ready. Comes after [method _ready] callback and follows the same rules.
 *
*/
$ready: Signal<() => void>

/**
 * Emitted when the node is renamed.
 *
*/
$renamed: Signal<() => void>

/**
 * Emitted when this node is being replaced by the [param node], see [method replace_by].
 *
 * This signal is emitted **after** [param node] has been added as a child of the original parent node, but **before** all original child nodes have been reparented to [param node].
 *
*/
$replacing_by: Signal<() => void>

/**
 * Emitted when the node enters the tree.
 *
 * This signal is emitted **after** the related [constant NOTIFICATION_ENTER_TREE] notification.
 *
*/
$tree_entered: Signal<() => void>

/**
 * Emitted after the node exits the tree and is no longer active.
 *
*/
$tree_exited: Signal<() => void>

/**
 * Emitted when the node is still active but about to exit the tree. This is the right place for de-initialization (or a "destructor", if you will).
 *
 * This signal is emitted **before** the related [constant NOTIFICATION_EXIT_TREE] notification.
 *
*/
$tree_exiting: Signal<() => void>

}

