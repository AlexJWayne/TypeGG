
/**
 * [EngineDebugger] handles the communication between the editor and the running game. It is active in the running game. Messages can be sent/received through it. It also manages the profilers.
 *
*/
declare class EngineDebuggerClass extends Object  {

  
/**
 * [EngineDebugger] handles the communication between the editor and the running game. It is active in the running game. Messages can be sent/received through it. It also manages the profilers.
 *
*/
  new(): EngineDebuggerClass; 
  static "new"(): EngineDebuggerClass 



/** Returns [code]true[/code] if a capture with the given name is present otherwise [code]false[/code]. */
has_capture(): boolean;

/** Returns [code]true[/code] if a profiler with the given name is present otherwise [code]false[/code]. */
has_profiler(): boolean;

/** Returns [code]true[/code] if the debugger is active otherwise [code]false[/code]. */
is_active(): boolean;

/** Returns [code]true[/code] if a profiler with the given name is present and active otherwise [code]false[/code]. */
is_profiling(): boolean;

/** Calls the [code]add[/code] callable of the profiler with given [param name] and [param data]. */
profiler_add_frame_data(): void;

/** Calls the [code]toggle[/code] callable of the profiler with given [param name] and [param arguments]. Enables/Disables the same profiler depending on [param enable] argument. */
profiler_enable(): void;

/**
 * Registers a message capture with given [param name]. If [param name] is "my_message" then messages starting with "my_message:" will be called with the given callable.
 *
 * Callable must accept a message string and a data array as argument. If the message and data are valid then callable must return `true` otherwise `false`.
 *
*/
register_message_capture(): void;

/** Registers a profiler with the given [param name]. See [EngineProfiler] for more information. */
register_profiler(): void;

/** Sends a message with given [param message] and [param data] array. */
send_message(): void;

/** Unregisters the message capture with given [param name]. */
unregister_message_capture(): void;

/** Unregisters a profiler with given [param name]. */
unregister_profiler(): void;

  connect<T extends SignalsOf<EngineDebuggerClass>>(signal: T, method: SignalFunction<EngineDebuggerClass[T]>): number;






}

