
/**
 * [Callable] is a built-in [Variant] type that represents a function. It can either be a method within an [Object] instance, or a standalone function not related to any object, like a lambda function. Like all [Variant] types, it can be stored in variables and passed to other functions. It is most commonly used for signal callbacks.
 *
 * **Example:**
 *
 * @example 
 * 
 * 
 * func print_args(arg1, arg2, arg3 = ""):
 *     prints(arg1, arg2, arg3)
 * func test():
 *     var callable = Callable(self, "print_args")
 *     callable.call("hello", "world")  # Prints "hello world ".
 *     callable.call(Vector2.UP, 42, callable)  # Prints "(0, -1) 42 Node(node.gd)::print_args".
 *     callable.call("invalid")  # Invalid call, should have at least 2 arguments.
 * 
 * 
 * // Default parameter values are not supported.
 * public void PrintArgs(Variant arg1, Variant arg2, Variant arg3 = default)
 * {
 *     GD.PrintS(arg1, arg2, arg3);
 * }
 * public void Test()
 * {
 *     // Invalid calls fail silently.
 *     Callable callable = new Callable(this, MethodName.PrintArgs);
 *     callable.Call("hello", "world"); // Default parameter values are not supported, should have 3 arguments.
 *     callable.Call(Vector2.Up, 42, callable); // Prints "(0, -1) 42 Node(Node.cs)::PrintArgs".
 *     callable.Call("invalid"); // Invalid call, should have 3 arguments.
 * }
 * 
 * @summary 
 * 
 *
 * In GDScript, it's possible to create lambda functions within a method. Lambda functions are custom callables that are not associated with an [Object] instance. Optionally, lambda functions can also be named. The name will be displayed in the debugger, or when calling [method get_method].
 *
 * @example 
 * 
 * func _init():
 *     var my_lambda = func (message):
 *         print(message)
 *     # Prints Hello everyone!
 *     my_lambda.call("Hello everyone!")
 *     # Prints "Attack!", when the button_pressed signal is emitted.
 *     button_pressed.connect(func(): print("Attack!"))
 * @summary 
 * 
 *
 * **Note:** Methods of native types such as [Signal], [Array], or [Dictionary] are not of type [Callable] in order to avoid unnecessary overhead. If you need to pass those methods as [Callable], use a lambda function as a wrapper.
 *
 * @example 
 * 
 * func _init():
 *     var my_dictionary = { "hello": "world" }
 *     # This will not work, `clear` is not a callable.
 *     create_tween().tween_callback(my_dictionary.clear)
 *     # This will work, as lambdas are custom callables.
 *     create_tween().tween_callback(func(): my_dictionary.clear())
 * @summary 
 * 
 *
*/
declare class Callable {

  
/**
 * [Callable] is a built-in [Variant] type that represents a function. It can either be a method within an [Object] instance, or a standalone function not related to any object, like a lambda function. Like all [Variant] types, it can be stored in variables and passed to other functions. It is most commonly used for signal callbacks.
 *
 * **Example:**
 *
 * @example 
 * 
 * 
 * func print_args(arg1, arg2, arg3 = ""):
 *     prints(arg1, arg2, arg3)
 * func test():
 *     var callable = Callable(self, "print_args")
 *     callable.call("hello", "world")  # Prints "hello world ".
 *     callable.call(Vector2.UP, 42, callable)  # Prints "(0, -1) 42 Node(node.gd)::print_args".
 *     callable.call("invalid")  # Invalid call, should have at least 2 arguments.
 * 
 * 
 * // Default parameter values are not supported.
 * public void PrintArgs(Variant arg1, Variant arg2, Variant arg3 = default)
 * {
 *     GD.PrintS(arg1, arg2, arg3);
 * }
 * public void Test()
 * {
 *     // Invalid calls fail silently.
 *     Callable callable = new Callable(this, MethodName.PrintArgs);
 *     callable.Call("hello", "world"); // Default parameter values are not supported, should have 3 arguments.
 *     callable.Call(Vector2.Up, 42, callable); // Prints "(0, -1) 42 Node(Node.cs)::PrintArgs".
 *     callable.Call("invalid"); // Invalid call, should have 3 arguments.
 * }
 * 
 * @summary 
 * 
 *
 * In GDScript, it's possible to create lambda functions within a method. Lambda functions are custom callables that are not associated with an [Object] instance. Optionally, lambda functions can also be named. The name will be displayed in the debugger, or when calling [method get_method].
 *
 * @example 
 * 
 * func _init():
 *     var my_lambda = func (message):
 *         print(message)
 *     # Prints Hello everyone!
 *     my_lambda.call("Hello everyone!")
 *     # Prints "Attack!", when the button_pressed signal is emitted.
 *     button_pressed.connect(func(): print("Attack!"))
 * @summary 
 * 
 *
 * **Note:** Methods of native types such as [Signal], [Array], or [Dictionary] are not of type [Callable] in order to avoid unnecessary overhead. If you need to pass those methods as [Callable], use a lambda function as a wrapper.
 *
 * @example 
 * 
 * func _init():
 *     var my_dictionary = { "hello": "world" }
 *     # This will not work, `clear` is not a callable.
 *     create_tween().tween_callback(my_dictionary.clear)
 *     # This will work, as lambdas are custom callables.
 *     create_tween().tween_callback(func(): my_dictionary.clear())
 * @summary 
 * 
 *
*/
  new(): Callable; 
  static "new"(): Callable 



/**
 * Returns a copy of this [Callable] with one or more arguments bound. When called, the bound arguments are passed **after** the arguments supplied by [method call]. See also [method unbind].
 *
 * **Note:** When this method is chained with other similar methods, the order in which the argument list is modified is read from right to left.
 *
*/
bind(): Callable;

/**
 * Returns a copy of this [Callable] with one or more arguments bound, reading them from an array. When called, the bound arguments are passed **after** the arguments supplied by [method call]. See also [method unbind].
 *
 * **Note:** When this method is chained with other similar methods, the order in which the argument list is modified is read from right to left.
 *
*/
bindv(): Callable;

/** Calls the method represented by this [Callable]. Arguments can be passed and should match the method's signature. */
call(): any;

/**
 * Calls the method represented by this [Callable] in deferred mode, i.e. at the end of the current frame. Arguments can be passed and should match the method's signature.
 *
 * @example 
 * 
 * func _ready():
 *     grab_focus.call_deferred()
 * @summary 
 * 
 *
 * See also [method Object.call_deferred].
 *
*/
call_deferred(): void;

/** Calls the method represented by this [Callable]. Unlike [method call], this method expects all arguments to be contained inside the [param arguments] [Array]. */
callv(): any;

/** Return the bound arguments (as long as [method get_bound_arguments_count] is greater than zero), or empty (if [method get_bound_arguments_count] is less than or equal to zero). */
get_bound_arguments(): any[];

/** Returns the total amount of arguments bound (or unbound) via successive [method bind] or [method unbind] calls. If the amount of arguments unbound is greater than the ones bound, this function returns a value less than zero. */
get_bound_arguments_count(): int;

/** Returns the name of the method represented by this [Callable]. If the callable is a GDScript lambda function, returns the function's name or [code]"<anonymous lambda>"[/code]. */
get_method(): StringName;

/** Returns the object on which this [Callable] is called. */
get_object(): Object;

/** Returns the ID of this [Callable]'s object (see [method Object.get_instance_id]). */
get_object_id(): int;

/**
 * Returns the 32-bit hash value of this [Callable]'s object.
 *
 * **Note:** [Callable]s with equal content will always produce identical hash values. However, the reverse is not true. Returning identical hash values does **not** imply the callables are equal, because different callables can have identical hash values due to hash collisions. The engine uses a 32-bit hash algorithm for [method hash].
 *
*/
hash(): int;

/** Returns [code]true[/code] if this [Callable] is a custom callable. Custom callables are created from [method bind] or [method unbind]. In GDScript, lambda functions are also custom callables. */
is_custom(): boolean;

/** Returns [code]true[/code] if this [Callable] has no target to call the method on. */
is_null(): boolean;

/** Returns [code]true[/code] if this [Callable] is a standard callable. This method is the opposite of [method is_custom]. Returns [code]false[/code] if this callable is a lambda function. */
is_standard(): boolean;

/** Returns [code]true[/code] if the callable's object exists and has a valid method name assigned, or is a custom callable. */
is_valid(): boolean;





/**
 * Returns a copy of this [Callable] with a number of arguments unbound. In other words, when the new callable is called the last few arguments supplied by the user are ignored, according to [param argcount]. The remaining arguments are passed to the callable. This allows to use the original callable in a context that attempts to pass more arguments than this callable can handle, e.g. a signal with a fixed number of arguments. See also [method bind].
 *
 * **Note:** When this method is chained with other similar methods, the order in which the argument list is modified is read from right to left.
 *
 * @example 
 * 
 * func _ready():
 *     foo.unbind(1).call(1, 2) # Calls foo(1).
 *     foo.bind(3, 4).unbind(1).call(1, 2) # Calls foo(1, 3, 4), note that it does not change the arguments from bind.
 * @summary 
 * 
 *
*/
unbind(): Callable;

  connect<T extends SignalsOf<Callable>>(signal: T, method: SignalFunction<Callable[T]>): number;






}

