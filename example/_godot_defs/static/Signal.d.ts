
/**
 * [Signal] is a built-in [Variant] type that represents a signal of an [Object] instance. Like all [Variant] types, it can be stored in variables and passed to functions. Signals allow all connected [Callable]s (and by extension their respective objects) to listen and react to events, without directly referencing one another. This keeps the code flexible and easier to manage.
 *
 * In GDScript, signals can be declared with the `signal` keyword. In C#, you may use the `[Signal]` attribute on a delegate.
 *
 * @example 
 * 
 * 
 * signal attacked
 * # Additional arguments may be declared.
 * # These arguments must be passed when the signal is emitted.
 * signal item_dropped(item_name, amount)
 * 
 * 
 * [Signal]
 * delegate void AttackedEventHandler();
 * // Additional arguments may be declared.
 * // These arguments must be passed when the signal is emitted.
 * [Signal]
 * delegate void ItemDroppedEventHandler(string itemName, int amount);
 * 
 * @summary 
 * 
 *
*/
declare class Signal<T extends (...args: any[]): any> {

  
/**
 * [Signal] is a built-in [Variant] type that represents a signal of an [Object] instance. Like all [Variant] types, it can be stored in variables and passed to functions. Signals allow all connected [Callable]s (and by extension their respective objects) to listen and react to events, without directly referencing one another. This keeps the code flexible and easier to manage.
 *
 * In GDScript, signals can be declared with the `signal` keyword. In C#, you may use the `[Signal]` attribute on a delegate.
 *
 * @example 
 * 
 * 
 * signal attacked
 * # Additional arguments may be declared.
 * # These arguments must be passed when the signal is emitted.
 * signal item_dropped(item_name, amount)
 * 
 * 
 * [Signal]
 * delegate void AttackedEventHandler();
 * // Additional arguments may be declared.
 * // These arguments must be passed when the signal is emitted.
 * [Signal]
 * delegate void ItemDroppedEventHandler(string itemName, int amount);
 * 
 * @summary 
 * 
 *
*/
  new(): Signal<T extends (...args: any[]): any>; 
  static "new"(): Signal<T extends (...args: any[]): any> 





/** Disconnects this signal from the specified [Callable]. If the connection does not exist, generates an error. Use [method is_connected] to make sure that the connection exists. */
disconnect(): void;

/** Emits this signal. All [Callable]s connected to this signal will be triggered. This method supports a variable number of arguments, so parameters can be passed as a comma separated list. */
emit(): void;

/**
 * Returns an [Array] of connections for this signal. Each connection is represented as a [Dictionary] that contains three entries:
 *
 * - `signal` is a reference to this signal;
 *
 * - `callable` is a reference to the connected [Callable];
 *
 * - `flags` is a combination of [enum Object.ConnectFlags].
 *
*/
get_connections(): any[];

/** Returns the name of this signal. */
get_name(): StringName;

/** Returns the object emitting this signal. */
get_object(): Object;

/** Returns the ID of the object emitting this signal (see [method Object.get_instance_id]). */
get_object_id(): int;

/** Returns [code]true[/code] if the specified [Callable] is connected to this signal. */
is_connected(): boolean;

/** Returns [code]true[/code] if the signal's name does not exist in its object, or the object is not valid. */
is_null(): boolean;

  connect<T extends SignalsOf<Signal<T extends (...args: any[]): any>>>(signal: T, method: SignalFunction<Signal<T extends (...args: any[]): any>[T]>): number;






}

