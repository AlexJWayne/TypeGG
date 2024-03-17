
/**
 * Returns a [Color] constructed from red ([param r8]), green ([param g8]), blue ([param b8]), and optionally alpha ([param a8]) integer channels, each divided by `255.0` for their final value. Using [method Color8] instead of the standard [Color] constructor is useful when you need to match exact color values in an [Image].
 *
 * @example 
 * 
 * var red = Color8(255, 0, 0)             # Same as Color(1, 0, 0).
 * var dark_blue = Color8(0, 0, 51)        # Same as Color(0, 0, 0.2).
 * var my_color = Color8(306, 255, 0, 102) # Same as Color(1.2, 1, 0, 0.4).
 * @summary 
 * 
 *
 * **Note:** Due to the lower precision of [method Color8] compared to the standard [Color] constructor, a color created with [method Color8] will generally not be equal to the same color created with the standard [Color] constructor. Use [method Color.is_equal_approx] for comparisons to avoid issues with floating-point precision error.
 *
*/
declare const Color8: () => Color
    
    
/**
 * Asserts that the [param condition] is `true`. If the [param condition] is `false`, an error is generated. When running from the editor, the running project will also be paused until you resume it. This can be used as a stronger form of [method @GlobalScope.push_error] for reporting errors to project developers or add-on users.
 *
 * An optional [param message] can be shown in addition to the generic "Assertion failed" message. You can use this to provide additional details about why the assertion failed.
 *
 * **Warning:** For performance reasons, the code inside [method assert] is only executed in debug builds or when running the project from the editor. Don't include code that has side effects in an [method assert] call. Otherwise, the project will behave differently when exported in release mode.
 *
 * @example 
 * 
 * # Imagine we always want speed to be between 0 and 20.
 * var speed = -10
 * assert(speed < 20) # True, the program will continue.
 * assert(speed >= 0) # False, the program will stop.
 * assert(speed >= 0 and speed < 20) # You can also combine the two conditional statements in one check.
 * assert(speed < 20, "the speed limit is 20") # Show a message.
 * @summary 
 * 
 *
*/
declare const assert: () => asserts condition
    
    
/**
 * Returns a single character (as a [String]) of the given Unicode code point (which is compatible with ASCII code).
 *
 * @example 
 * 
 * a = char(65)      # a is "A"
 * a = char(65 + 32) # a is "a"
 * a = char(8364)    # a is "€"
 * @summary 
 * 
 *
*/
declare const char: () => string
    
    
/**
 * **Deprecated.** Use [method @GlobalScope.type_convert] instead.
 *
 * Converts [param what] to [param type] in the best way possible. The [param type] uses the [enum Variant.Type] values.
 *
 * @example 
 * 
 * var a = [4, 2.5, 1.2]
 * print(a is Array) # Prints true
 * var b = convert(a, TYPE_PACKED_BYTE_ARRAY)
 * print(b)          # Prints [4, 2, 1]
 * print(b is Array) # Prints false
 * @summary 
 * 
 *
*/
declare const convert: () => any
    
    
/** Converts a [param dictionary] (created with [method inst_to_dict]) back to an Object instance. Can be useful for deserializing. */
declare const dict_to_inst: () => Object
    
    
/**
 * Returns an array of dictionaries representing the current call stack. See also [method print_stack].
 *
 * @example 
 * 
 * func _ready():
 *     foo()
 * func foo():
 *     bar()
 * func bar():
 *     print(get_stack())
 * @summary 
 * 
 *
 * Starting from `_ready()`, `bar()` would print:
 *
 * @example 
 * 
 * [{function:bar, line:12, source:res://script.gd}, {function:foo, line:9, source:res://script.gd}, {function:_ready, line:6, source:res://script.gd}]
 * @summary 
 * 
 *
 * **Note:** This function only works if the running instance is connected to a debugging server (i.e. an editor instance). [method get_stack] will not work in projects exported in release mode, or in projects exported in debug mode if not connected to a debugging server.
 *
 * **Note:** Calling this function from a [Thread] is not supported. Doing so will return an empty array.
 *
*/
declare const get_stack: () => any[]
    
    
/**
 * Returns the passed [param instance] converted to a Dictionary. Can be useful for serializing.
 *
 * **Note:** Cannot be used to serialize objects with built-in scripts attached or objects allocated within built-in scripts.
 *
 * @example 
 * 
 * var foo = "bar"
 * func _ready():
 *     var d = inst_to_dict(self)
 *     print(d.keys())
 *     print(d.values())
 * @summary 
 * 
 *
 * Prints out:
 *
 * @example 
 * 
 * [@subpath, @path, foo]
 * [, res://test.gd, bar]
 * @summary 
 * 
 *
*/
declare const inst_to_dict: () => Dictionary<any, any>
    
    
/**
 * Returns `true` if [param value] is an instance of [param type]. The [param type] value must be one of the following:
 *
 * - A constant from the [enum Variant.Type] enumeration, for example [constant TYPE_INT].
 *
 * - An [Object]-derived class which exists in [ClassDB], for example [Node].
 *
 * - A [Script] (you can use any class, including inner one).
 *
 * Unlike the right operand of the `is` operator, [param type] can be a non-constant value. The `is` operator supports more features (such as typed arrays) and is more performant. Use the operator instead of this method if you do not need dynamic type checking.
 *
 * Examples:
 *
 * @example 
 * 
 * print(is_instance_of(a, TYPE_INT))
 * print(is_instance_of(a, Node))
 * print(is_instance_of(a, MyClass))
 * print(is_instance_of(a, MyClass.InnerClass))
 * @summary 
 * 
 *
 * **Note:** If [param value] and/or [param type] are freed objects (see [method @GlobalScope.is_instance_valid]), or [param type] is not one of the above options, this method will raise a runtime error.
 *
 * See also [method @GlobalScope.typeof], [method type_exists], [method Array.is_same_typed] (and other [Array] methods).
 *
*/
declare const is_instance_of: () => boolean
    
    
/**
 * Returns the length of the given Variant [param var]. The length can be the character count of a [String], the element count of any array type or the size of a [Dictionary]. For every other Variant type, a run-time error is generated and execution is stopped.
 *
 * @example 
 * 
 * a = [1, 2, 3, 4]
 * len(a) # Returns 4
 * b = "Hello!"
 * len(b) # Returns 6
 * @summary 
 * 
 *
*/
declare const len: () => int
    
    
/**
 * Like [method @GlobalScope.print], but includes the current stack frame when running with the debugger turned on.
 *
 * The output in the console may look like the following:
 *
 * @example 
 * 
 * Test print
 * At: res://test.gd:15:_process()
 * @summary 
 * 
 *
 * **Note:** Calling this function from a [Thread] is not supported. Doing so will instead print the thread ID.
 *
*/
declare const print_debug: (...args: any[]) => void
    
    
/**
 * Prints a stack trace at the current code location. See also [method get_stack].
 *
 * The output in the console may look like the following:
 *
 * @example 
 * 
 * Frame 0 - res://test.gd:16 in function '_process'
 * @summary 
 * 
 *
 * **Note:** This function only works if the running instance is connected to a debugging server (i.e. an editor instance). [method print_stack] will not work in projects exported in release mode, or in projects exported in debug mode if not connected to a debugging server.
 *
 * **Note:** Calling this function from a [Thread] is not supported. Doing so will instead print the thread ID.
 *
*/
declare const print_stack: () => void
    
    
/**
 * Returns an array with the given range. [method range] can be called in three ways:
 *
 * `range(n: int)`: Starts from 0, increases by steps of 1, and stops **before** `n`. The argument `n` is **exclusive**.
 *
 * `range(b: int, n: int)`: Starts from `b`, increases by steps of 1, and stops **before** `n`. The arguments `b` and `n` are **inclusive** and **exclusive**, respectively.
 *
 * `range(b: int, n: int, s: int)`: Starts from `b`, increases/decreases by steps of `s`, and stops **before** `n`. The arguments `b` and `n` are **inclusive** and **exclusive**, respectively. The argument `s` **can** be negative, but not `0`. If `s` is `0`, an error message is printed.
 *
 * [method range] converts all arguments to [int] before processing.
 *
 * **Note:** Returns an empty array if no value meets the value constraint (e.g. `range(2, 5, -1)` or `range(5, 5, 1)`).
 *
 * Examples:
 *
 * @example 
 * 
 * print(range(4))        # Prints [0, 1, 2, 3]
 * print(range(2, 5))     # Prints [2, 3, 4]
 * print(range(0, 6, 2))  # Prints [0, 2, 4]
 * print(range(4, 1, -1)) # Prints [4, 3, 2]
 * @summary 
 * 
 *
 * To iterate over an [Array] backwards, use:
 *
 * @example 
 * 
 * var array = [3, 6, 9]
 * for i in range(array.size() - 1, -1, -1):
 *     print(array**)
 * @summary 
 * 
 *
 * Output:
 *
 * @example 
 * 
 * 9
 * 6
 * 3
 * @summary 
 * 
 *
 * To iterate over [float], convert them in the loop.
 *
 * @example 
 * 
 * for i in range (3, 0, -1):
 *     print(i / 10.0)
 * @summary 
 * 
 *
 * Output:
 *
 * @example 
 * 
 * 0.3
 * 0.2
 * 0.1
 * @summary 
 * 
 *
*/
declare const range: (...args: any[]) => any[]
    
    
/**
 * Returns `true` if the given [Object]-derived class exists in [ClassDB]. Note that [Variant] data types are not registered in [ClassDB].
 *
 * @example 
 * 
 * type_exists("Sprite2D") # Returns true
 * type_exists("NonExistentClass") # Returns false
 * @summary 
 * 
 *
*/
declare const type_exists: () => boolean
    
    