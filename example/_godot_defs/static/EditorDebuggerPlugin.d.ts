
/**
 * [EditorDebuggerPlugin] provides functions related to the editor side of the debugger.
 *
 * To interact with the debugger, an instance of this class must be added to the editor via [method EditorPlugin.add_debugger_plugin].
 *
 * Once added, the [method _setup_session] callback will be called for every [EditorDebuggerSession] available to the plugin, and when new ones are created (the sessions may be inactive during this stage).
 *
 * You can retrieve the available [EditorDebuggerSession]s via [method get_sessions] or get a specific one via [method get_session].
 *
 * @example 
 * 
 * 
 * @tool
 * extends EditorPlugin
 * class ExampleEditorDebugger extends EditorDebuggerPlugin:
 *     func _has_capture(prefix):
 *         # Return true if you wish to handle message with this prefix.
 *         return prefix == "my_plugin"
 *     func _capture(message, data, session_id):
 *         if message == "my_plugin:ping":
 *             get_session(session_id).send_message("my_plugin:echo", data)
 *     func _setup_session(session_id):
 *         # Add a new tab in the debugger session UI containing a label.
 *         var label = Label.new()
 *         label.name = "Example plugin"
 *         label.text = "Example plugin"
 *         var session = get_session(session_id)
 *         # Listens to the session started and stopped signals.
 *         session.started.connect(func (): print("Session started"))
 *         session.stopped.connect(func (): print("Session stopped"))
 *         session.add_session_tab(label)
 * var debugger = ExampleEditorDebugger.new()
 * func _enter_tree():
 *     add_debugger_plugin(debugger)
 * func _exit_tree():
 *     remove_debugger_plugin(debugger)
 * 
 * @summary 
 * 
 *
*/
declare class EditorDebuggerPlugin extends RefCounted  {

  
/**
 * [EditorDebuggerPlugin] provides functions related to the editor side of the debugger.
 *
 * To interact with the debugger, an instance of this class must be added to the editor via [method EditorPlugin.add_debugger_plugin].
 *
 * Once added, the [method _setup_session] callback will be called for every [EditorDebuggerSession] available to the plugin, and when new ones are created (the sessions may be inactive during this stage).
 *
 * You can retrieve the available [EditorDebuggerSession]s via [method get_sessions] or get a specific one via [method get_session].
 *
 * @example 
 * 
 * 
 * @tool
 * extends EditorPlugin
 * class ExampleEditorDebugger extends EditorDebuggerPlugin:
 *     func _has_capture(prefix):
 *         # Return true if you wish to handle message with this prefix.
 *         return prefix == "my_plugin"
 *     func _capture(message, data, session_id):
 *         if message == "my_plugin:ping":
 *             get_session(session_id).send_message("my_plugin:echo", data)
 *     func _setup_session(session_id):
 *         # Add a new tab in the debugger session UI containing a label.
 *         var label = Label.new()
 *         label.name = "Example plugin"
 *         label.text = "Example plugin"
 *         var session = get_session(session_id)
 *         # Listens to the session started and stopped signals.
 *         session.started.connect(func (): print("Session started"))
 *         session.stopped.connect(func (): print("Session stopped"))
 *         session.add_session_tab(label)
 * var debugger = ExampleEditorDebugger.new()
 * func _enter_tree():
 *     add_debugger_plugin(debugger)
 * func _exit_tree():
 *     remove_debugger_plugin(debugger)
 * 
 * @summary 
 * 
 *
*/
  new(): EditorDebuggerPlugin; 
  static "new"(): EditorDebuggerPlugin 



/** Override this method to process incoming messages. The [param session_id] is the ID of the [EditorDebuggerSession] that received the message (which you can retrieve via [method get_session]). */
protected _capture(): boolean;

/** Override this method to enable receiving messages from the debugger. If [param capture] is "my_message" then messages starting with "my_message:" will be passes to the [method _capture] method. */
protected _has_capture(): boolean;

/** Override this method to be notified whenever a new [EditorDebuggerSession] is created (the session may be inactive during this stage). */
protected _setup_session(): void;

/** Returns the [EditorDebuggerSession] with the given [param id]. */
get_session(): EditorDebuggerSession;

/**
 * Returns an array of [EditorDebuggerSession] currently available to this debugger plugin.
 *
 * **Note:** Sessions in the array may be inactive, check their state via [method EditorDebuggerSession.is_active].
 *
*/
get_sessions(): any[];

  connect<T extends SignalsOf<EditorDebuggerPlugin>>(signal: T, method: SignalFunction<EditorDebuggerPlugin[T]>): number;






}

