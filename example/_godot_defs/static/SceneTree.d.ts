
/**
 * As one of the most important classes, the [SceneTree] manages the hierarchy of nodes in a scene as well as scenes themselves. Nodes can be added, retrieved and removed. The whole scene tree (and thus the current scene) can be paused. Scenes can be loaded, switched and reloaded.
 *
 * You can also use the [SceneTree] to organize your nodes into groups: every node can be assigned as many groups as you want to create, e.g. an "enemy" group. You can then iterate these groups or even call methods and set properties on all the group's members at once.
 *
 * [SceneTree] is the default [MainLoop] implementation used by scenes, and is thus in charge of the game loop.
 *
*/
declare class SceneTree extends MainLoop  {

  
/**
 * As one of the most important classes, the [SceneTree] manages the hierarchy of nodes in a scene as well as scenes themselves. Nodes can be added, retrieved and removed. The whole scene tree (and thus the current scene) can be paused. Scenes can be loaded, switched and reloaded.
 *
 * You can also use the [SceneTree] to organize your nodes into groups: every node can be assigned as many groups as you want to create, e.g. an "enemy" group. You can then iterate these groups or even call methods and set properties on all the group's members at once.
 *
 * [SceneTree] is the default [MainLoop] implementation used by scenes, and is thus in charge of the game loop.
 *
*/
  new(): SceneTree; 
  static "new"(): SceneTree 


/**
 * If `true`, the application automatically accepts quitting requests.
 *
 * For mobile platforms, see [member quit_on_go_back].
 *
*/
auto_accept_quit: boolean;

/**
 * Returns the root node of the currently running scene, regardless of its structure.
 *
 * **Warning:** Setting this directly might not work as expected, and will **not** add or remove any nodes from the tree, consider using [method change_scene_to_file] or [method change_scene_to_packed] instead.
 *
*/
current_scene: Node;

/**
 * If `true`, collision shapes will be visible when running the game from the editor for debugging purposes.
 *
 * **Note:** This property is not designed to be changed at run-time. Changing the value of [member debug_collisions_hint] while the project is running will not have the desired effect.
 *
*/
debug_collisions_hint: boolean;

/**
 * If `true`, navigation polygons will be visible when running the game from the editor for debugging purposes.
 *
 * **Note:** This property is not designed to be changed at run-time. Changing the value of [member debug_navigation_hint] while the project is running will not have the desired effect.
 *
*/
debug_navigation_hint: boolean;

/**
 * If `true`, curves from [Path2D] and [Path3D] nodes will be visible when running the game from the editor for debugging purposes.
 *
 * **Note:** This property is not designed to be changed at run-time. Changing the value of [member debug_paths_hint] while the project is running will not have the desired effect.
 *
*/
debug_paths_hint: boolean;

/** The root of the edited scene. */
edited_scene_root: Node;

/**
 * If `true` (default value), enables automatic polling of the [MultiplayerAPI] for this SceneTree during [signal process_frame].
 *
 * If `false`, you need to manually call [method MultiplayerAPI.poll] to process network packets and deliver RPCs. This allows running RPCs in a different loop (e.g. physics, thread, specific time step) and for manual [Mutex] protection when accessing the [MultiplayerAPI] from threads.
 *
*/
multiplayer_poll: boolean;

/**
 * If `true`, the [SceneTree] is paused. Doing so will have the following behavior:
 *
 * - 2D and 3D physics will be stopped. This includes signals and collision detection.
 *
 * - [method Node._process], [method Node._physics_process] and [method Node._input] will not be called anymore in nodes.
 *
*/
paused: boolean;

/**
 * If `true`, the application quits automatically when navigating back (e.g. using the system "Back" button on Android).
 *
 * To handle 'Go Back' button when this option is disabled, use [constant DisplayServer.WINDOW_EVENT_GO_BACK_REQUEST].
 *
*/
quit_on_go_back: boolean;

/** The [SceneTree]'s root [Window]. */
root: Window;

/**
 * Calls [param method] on each member of the given group. You can pass arguments to [param method] by specifying them at the end of the method call. If a node doesn't have the given method or the argument list does not match (either in count or in types), it will be skipped.
 *
 * **Note:** [method call_group] will call methods immediately on all members at once, which can cause stuttering if an expensive method is called on lots of members.
 *
*/
call_group(...args: any[]): void;

/**
 * Calls [param method] on each member of the given group, respecting the given [enum GroupCallFlags]. You can pass arguments to [param method] by specifying them at the end of the method call. If a node doesn't have the given method or the argument list does not match (either in count or in types), it will be skipped.
 *
 * @example 
 * 
 * # Call the method in a deferred manner and in reverse order.
 * get_tree().call_group_flags(SceneTree.GROUP_CALL_DEFERRED | SceneTree.GROUP_CALL_REVERSE)
 * @summary 
 * 
 *
 * **Note:** Group call flags are used to control the method calling behavior. By default, methods will be called immediately in a way similar to [method call_group]. However, if the [constant GROUP_CALL_DEFERRED] flag is present in the [param flags] argument, methods will be called at the end of the frame in a way similar to [method Object.set_deferred].
 *
*/
call_group_flags(...args: any[]): void;

/**
 * Changes the running scene to the one at the given [param path], after loading it into a [PackedScene] and creating a new instance.
 *
 * Returns [constant OK] on success, [constant ERR_CANT_OPEN] if the [param path] cannot be loaded into a [PackedScene], or [constant ERR_CANT_CREATE] if that scene cannot be instantiated.
 *
 * **Note:** See [method change_scene_to_packed] for details on the order of operations.
 *
*/
change_scene_to_file(): int;

/**
 * Changes the running scene to a new instance of the given [PackedScene] (which must be valid).
 *
 * Returns [constant OK] on success, [constant ERR_CANT_CREATE] if the scene cannot be instantiated, or [constant ERR_INVALID_PARAMETER] if the scene is invalid.
 *
 * **Note:** Operations happen in the following order when [method change_scene_to_packed] is called:
 *
 * 1. The current scene node is immediately removed from the tree. From that point, [method Node.get_tree] called on the current (outgoing) scene will return `null`. [member current_scene] will be `null`, too, because the new scene is not available yet.
 *
 * 2. At the end of the frame, the formerly current scene, already removed from the tree, will be deleted (freed from memory) and then the new scene will be instantiated and added to the tree. [method Node.get_tree] and [member current_scene] will be back to working as usual.
 *
 * This ensures that both scenes aren't running at the same time, while still freeing the previous scene in a safe way similar to [method Node.queue_free].
 *
*/
change_scene_to_packed(): int;

/**
 * Returns a [SceneTreeTimer] which will emit [signal SceneTreeTimer.timeout] after the given time in seconds elapsed in this [SceneTree].
 *
 * If [param process_always] is set to `false`, pausing the [SceneTree] will also pause the timer.
 *
 * If [param process_in_physics] is set to `true`, will update the [SceneTreeTimer] during the physics frame instead of the process frame (fixed framerate processing).
 *
 * If [param ignore_time_scale] is set to `true`, will ignore [member Engine.time_scale] and update the [SceneTreeTimer] with the actual frame delta.
 *
 * Commonly used to create a one-shot delay timer as in the following example:
 *
 * @example 
 * 
 * 
 * func some_function():
 *     print("start")
 *     await get_tree().create_timer(1.0).timeout
 *     print("end")
 * 
 * 
 * public async Task SomeFunction()
 * {
 *     GD.Print("start");
 *     await ToSignal(GetTree().CreateTimer(1.0f), SceneTreeTimer.SignalName.Timeout);
 *     GD.Print("end");
 * }
 * 
 * @summary 
 * 
 *
 * The timer will be automatically freed after its time elapses.
 *
 * **Note:** The timer is processed after all of the nodes in the current frame, i.e. node's [method Node._process] method would be called before the timer (or [method Node._physics_process] if [param process_in_physics] is set to `true`).
 *
*/
create_timer(): SceneTreeTimer;

/**
 * Creates and returns a new [Tween]. The Tween will start automatically on the next process frame or physics frame (depending on [enum Tween.TweenProcessMode]).
 *
 * **Note:** When creating a [Tween] using this method, the [Tween] will not be tied to the [Node] that called it. It will continue to animate even if the [Node] is freed, but it will automatically finish if there's nothing left to animate. If you want the [Tween] to be automatically killed when the [Node] is freed, use [method Node.create_tween] or [method Tween.bind_node].
 *
*/
create_tween(): Tween;

/** Returns the first node in the specified group, or [code]null[/code] if the group is empty or does not exist. */
get_first_node_in_group(): Node;

/** Returns the current frame number, i.e. the total frame count since the application started. */
get_frame(): int;

/** Searches for the [MultiplayerAPI] configured for the given path, if one does not exist it searches the parent paths until one is found. If the path is empty, or none is found, the default one is returned. See [method set_multiplayer]. */
get_multiplayer(): MultiplayerAPI;

/** Returns the number of nodes in this [SceneTree]. */
get_node_count(): int;

/** Returns a list of all nodes assigned to the given group. */
get_nodes_in_group<T extends keyof Groups>(group: T): Groups[T][]

/** Returns an array of currently existing [Tween]s in the [SceneTree] (both running and paused). */
get_processed_tweens(): Tween[];

/**
 * Returns `true` if the given group exists.
 *
 * A group exists if any [Node] in the tree belongs to it (see [method Node.add_to_group]). Groups without nodes are removed automatically.
 *
*/
has_group<T extends keyof Groups>(name: T): boolean

/**
 * Sends the given notification to all members of the [param group].
 *
 * **Note:** [method notify_group] will immediately notify all members at once, which can cause stuttering if an expensive method is called as a result of sending the notification to lots of members.
 *
*/
notify_group(): void;

/**
 * Sends the given notification to all members of the [param group], respecting the given [enum GroupCallFlags].
 *
 * **Note:** Group call flags are used to control the notification sending behavior. By default, notifications will be sent immediately in a way similar to [method notify_group]. However, if the [constant GROUP_CALL_DEFERRED] flag is present in the [param call_flags] argument, notifications will be sent at the end of the current frame in a way similar to using `Object.call_deferred("notification", ...)`.
 *
*/
notify_group_flags(): void;

/** Queues the given object for deletion, delaying the call to [method Object.free] to the end of the current frame. */
queue_delete(): void;

/**
 * Quits the application at the end of the current iteration. Argument [param exit_code] can optionally be given (defaulting to 0) to customize the exit status code.
 *
 * By convention, an exit code of `0` indicates success whereas a non-zero exit code indicates an error.
 *
 * For portability reasons, the exit code should be set between 0 and 125 (inclusive).
 *
 * **Note:** On iOS this method doesn't work. Instead, as recommended by the iOS Human Interface Guidelines, the user is expected to close apps via the Home button.
 *
*/
quit(): void;

/**
 * Reloads the currently active scene.
 *
 * Returns [constant OK] on success, [constant ERR_UNCONFIGURED] if no [member current_scene] was defined yet, [constant ERR_CANT_OPEN] if [member current_scene] cannot be loaded into a [PackedScene], or [constant ERR_CANT_CREATE] if the scene cannot be instantiated.
 *
*/
reload_current_scene(): int;

/**
 * Sets the given [param property] to [param value] on all members of the given group.
 *
 * **Note:** [method set_group] will set the property immediately on all members at once, which can cause stuttering if a property with an expensive setter is set on lots of members.
 *
*/
set_group(): void;

/**
 * Sets the given [param property] to [param value] on all members of the given group, respecting the given [enum GroupCallFlags].
 *
 * **Note:** Group call flags are used to control the property setting behavior. By default, properties will be set immediately in a way similar to [method set_group]. However, if the [constant GROUP_CALL_DEFERRED] flag is present in the [param call_flags] argument, properties will be set at the end of the frame in a way similar to [method Object.call_deferred].
 *
*/
set_group_flags(): void;

/**
 * Sets a custom [MultiplayerAPI] with the given [param root_path] (controlling also the relative subpaths), or override the default one if [param root_path] is empty.
 *
 * **Note:** No [MultiplayerAPI] must be configured for the subpath containing [param root_path], nested custom multiplayers are not allowed. I.e. if one is configured for `"/root/Foo"` setting one for `"/root/Foo/Bar"` will cause an error.
 *
*/
set_multiplayer(): void;

/** If a current scene is loaded, calling this method will unload it. */
unload_current_scene(): void;

  connect<T extends SignalsOf<SceneTree>>(signal: T, method: SignalFunction<SceneTree[T]>): number;



/**
 * Call a group with no flags (default).
 *
*/
static GROUP_CALL_DEFAULT: any;

/**
 * Call a group in reverse scene order.
 *
*/
static GROUP_CALL_REVERSE: any;

/**
 * Call a group at the end of the current frame (process or physics).
 *
*/
static GROUP_CALL_DEFERRED: any;

/**
 * Call a group only once even if the call is executed many times.
 *
 * **Note:** Arguments are not taken into account when deciding whether the call is unique or not. Therefore when the same method is called with different arguments, only the first call will be performed.
 *
*/
static GROUP_CALL_UNIQUE: any;


/**
 * Emitted whenever a node is added to the [SceneTree].
 *
*/
$node_added: Signal<() => void>

/**
 * Emitted when a node's configuration changed. Only emitted in `tool` mode.
 *
*/
$node_configuration_warning_changed: Signal<() => void>

/**
 * Emitted whenever a node is removed from the [SceneTree].
 *
*/
$node_removed: Signal<() => void>

/**
 * Emitted whenever a node is renamed.
 *
*/
$node_renamed: Signal<() => void>

/**
 * Emitted immediately before [method Node._physics_process] is called on every node in the [SceneTree].
 *
*/
$physics_frame: Signal<() => void>

/**
 * Emitted immediately before [method Node._process] is called on every node in the [SceneTree].
 *
*/
$process_frame: Signal<() => void>

/**
 * Emitted whenever the [SceneTree] hierarchy changed (children being moved or renamed, etc.).
 *
*/
$tree_changed: Signal<() => void>

/**
 * This signal is only emitted in the editor, it allows the editor to update the visibility of disabled nodes. Emitted whenever any node's [member Node.process_mode] is changed.
 *
*/
$tree_process_mode_changed: Signal<() => void>

}

