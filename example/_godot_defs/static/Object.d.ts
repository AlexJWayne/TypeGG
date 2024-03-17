
/**
 * An advanced [Variant] type. All classes in the engine inherit from Object. Each class may define new properties, methods or signals, which are available to all inheriting classes. For example, a [Sprite2D] instance is able to call [method Node.add_child] because it inherits from [Node].
 *
 * You can create new instances, using `Object.new()` in GDScript, or `new GodotObject` in C#.
 *
 * To delete an Object instance, call [method free]. This is necessary for most classes inheriting Object, because they do not manage memory on their own, and will otherwise cause memory leaks when no longer in use. There are a few classes that perform memory management. For example, [RefCounted] (and by extension [Resource]) deletes itself when no longer referenced, and [Node] deletes its children when freed.
 *
 * Objects can have a [Script] attached to them. Once the [Script] is instantiated, it effectively acts as an extension to the base class, allowing it to define and inherit new properties, methods and signals.
 *
 * Inside a [Script], [method _get_property_list] may be overridden to customize properties in several ways. This allows them to be available to the editor, display as lists of options, sub-divide into groups, save on disk, etc. Scripting languages offer easier ways to customize properties, such as with the [annotation @GDScript.@export] annotation.
 *
 * Godot is very dynamic. An object's script, and therefore its properties, methods and signals, can be changed at run-time. Because of this, there can be occasions where, for example, a property required by a method may not exist. To prevent run-time errors, see methods such as [method set], [method get], [method call], [method has_method], [method has_signal], etc. Note that these methods are **much** slower than direct references.
 *
 * In GDScript, you can also check if a given property, method, or signal name exists in an object with the `in` operator:
 *
 * @example 
 * 
 * var node = Node.new()
 * print("name" in node)         # Prints true
 * print("get_parent" in node)   # Prints true
 * print("tree_entered" in node) # Prints true
 * print("unknown" in node)      # Prints false
 * @summary 
 * 
 *
 * Notifications are [int] constants commonly sent and received by objects. For example, on every rendered frame, the [SceneTree] notifies nodes inside the tree with a [constant Node.NOTIFICATION_PROCESS]. The nodes receive it and may call [method Node._process] to update. To make use of notifications, see [method notification] and [method _notification].
 *
 * Lastly, every object can also contain metadata (data about data). [method set_meta] can be useful to store information that the object itself does not depend on. To keep your code clean, making excessive use of metadata is discouraged.
 *
 * **Note:** Unlike references to a [RefCounted], references to an object stored in a variable can become invalid without being set to `null`. To check if an object has been deleted, do **not** compare it against `null`. Instead, use [method @GlobalScope.is_instance_valid]. It's also recommended to inherit from [RefCounted] for classes storing data instead of [Object].
 *
 * **Note:** The `script` is not exposed like most properties. To set or get an object's [Script] in code, use [method set_script] and [method get_script], respectively.
 *
*/
declare class Object {

  
/**
 * An advanced [Variant] type. All classes in the engine inherit from Object. Each class may define new properties, methods or signals, which are available to all inheriting classes. For example, a [Sprite2D] instance is able to call [method Node.add_child] because it inherits from [Node].
 *
 * You can create new instances, using `Object.new()` in GDScript, or `new GodotObject` in C#.
 *
 * To delete an Object instance, call [method free]. This is necessary for most classes inheriting Object, because they do not manage memory on their own, and will otherwise cause memory leaks when no longer in use. There are a few classes that perform memory management. For example, [RefCounted] (and by extension [Resource]) deletes itself when no longer referenced, and [Node] deletes its children when freed.
 *
 * Objects can have a [Script] attached to them. Once the [Script] is instantiated, it effectively acts as an extension to the base class, allowing it to define and inherit new properties, methods and signals.
 *
 * Inside a [Script], [method _get_property_list] may be overridden to customize properties in several ways. This allows them to be available to the editor, display as lists of options, sub-divide into groups, save on disk, etc. Scripting languages offer easier ways to customize properties, such as with the [annotation @GDScript.@export] annotation.
 *
 * Godot is very dynamic. An object's script, and therefore its properties, methods and signals, can be changed at run-time. Because of this, there can be occasions where, for example, a property required by a method may not exist. To prevent run-time errors, see methods such as [method set], [method get], [method call], [method has_method], [method has_signal], etc. Note that these methods are **much** slower than direct references.
 *
 * In GDScript, you can also check if a given property, method, or signal name exists in an object with the `in` operator:
 *
 * @example 
 * 
 * var node = Node.new()
 * print("name" in node)         # Prints true
 * print("get_parent" in node)   # Prints true
 * print("tree_entered" in node) # Prints true
 * print("unknown" in node)      # Prints false
 * @summary 
 * 
 *
 * Notifications are [int] constants commonly sent and received by objects. For example, on every rendered frame, the [SceneTree] notifies nodes inside the tree with a [constant Node.NOTIFICATION_PROCESS]. The nodes receive it and may call [method Node._process] to update. To make use of notifications, see [method notification] and [method _notification].
 *
 * Lastly, every object can also contain metadata (data about data). [method set_meta] can be useful to store information that the object itself does not depend on. To keep your code clean, making excessive use of metadata is discouraged.
 *
 * **Note:** Unlike references to a [RefCounted], references to an object stored in a variable can become invalid without being set to `null`. To check if an object has been deleted, do **not** compare it against `null`. Instead, use [method @GlobalScope.is_instance_valid]. It's also recommended to inherit from [RefCounted] for classes storing data instead of [Object].
 *
 * **Note:** The `script` is not exposed like most properties. To set or get an object's [Script] in code, use [method set_script] and [method get_script], respectively.
 *
*/
  new(): Object; 
  static "new"(): Object 



/**
 * Override this method to customize the behavior of [method get]. Should return the given [param property]'s value, or `null` if the [param property] should be handled normally.
 *
 * Combined with [method _set] and [method _get_property_list], this method allows defining custom properties, which is particularly useful for editor plugins. Note that a property must be present in [method get_property_list], otherwise this method will not be called.
 *
 * @example 
 * 
 * 
 * func _get(property):
 *     if property == "fake_property":
 *         print("Getting my property!")
 *         return 4
 * func _get_property_list():
 *     return [
 *         { "name": "fake_property", "type": TYPE_INT }
 *     ]
 * 
 * 
 * public override Variant _Get(StringName property)
 * {
 *     if (property == "FakeProperty")
 *     {
 *         GD.Print("Getting my property!");
 *         return 4;
 *     }
 *     return default;
 * }
 * public override Godot.Collections.Array<Godot.Collections.Dictionary> _GetPropertyList()
 * {
 *     return new Godot.Collections.Array<Godot.Collections.Dictionary>()
 *     {
 *         new Godot.Collections.Dictionary()
 *         {
 *             { "name", "FakeProperty" },
 *             { "type", (int)Variant.Type.Int }
 *         }
 *     };
 * }
 * 
 * @summary 
 * 
 *
*/
protected _get(): any;

/**
 * Override this method to customize how script properties should be handled by the engine.
 *
 * Should return a property list, as an [Array] of dictionaries. The result is added to the array of [method get_property_list], and should be formatted in the same way. Each [Dictionary] must at least contain the `name` and `type` entries.
 *
 * The example below displays `hammer_type` in the Inspector dock, only if `holding_hammer` is `true`:
 *
 * @example 
 * 
 * 
 * @tool
 * extends Node2D
 * @export var holding_hammer = false:
 *     set(value):
 *         holding_hammer = value
 *         notify_property_list_changed()
 * var hammer_type = 0
 * func _get_property_list():
 *     # By default, `hammer_type` is not visible in the editor.
 *     var property_usage = PROPERTY_USAGE_NO_EDITOR
 *     if holding_hammer:
 *         property_usage = PROPERTY_USAGE_DEFAULT
 *     var properties = []
 *     properties.append({
 *         "name": "hammer_type",
 *         "type": TYPE_INT,
 *         "usage": property_usage, # See above assignment.
 *         "hint": PROPERTY_HINT_ENUM,
 *         "hint_string": "Wooden,Iron,Golden,Enchanted"
 *     })
 *     return properties
 * 
 * 
 * [Tool]
 * public partial class MyNode2D : Node2D
 * {
 *     private bool _holdingHammer;
 *     [Export]
 *     public bool HoldingHammer
 *     {
 *         get => _holdingHammer;
 *         set
 *         {
 *             _holdingHammer = value;
 *             NotifyPropertyListChanged();
 *         }
 *     }
 *     public int HammerType { get; set; }
 *     public override Godot.Collections.Array<Godot.Collections.Dictionary> _GetPropertyList()
 *     {
 *         // By default, `HammerType` is not visible in the editor.
 *         var propertyUsage = PropertyUsageFlags.NoEditor;
 *         if (HoldingHammer)
 *         {
 *             propertyUsage = PropertyUsageFlags.Default;
 *         }
 *         var properties = new Godot.Collections.Array<Godot.Collections.Dictionary>();
 *         properties.Add(new Godot.Collections.Dictionary()
 *         {
 *             { "name", "HammerType" },
 *             { "type", (int)Variant.Type.Int },
 *             { "usage", (int)propertyUsage }, // See above assignment.
 *             { "hint", (int)PropertyHint.Enum },
 *             { "hint_string", "Wooden,Iron,Golden,Enchanted" }
 *         });
 *         return properties;
 *     }
 * }
 * 
 * @summary 
 * 
 *
 * **Note:** This method is intended for advanced purposes. For most common use cases, the scripting languages offer easier ways to handle properties. See [annotation @GDScript.@export], [annotation @GDScript.@export_enum], [annotation @GDScript.@export_group], etc.
 *
 * **Note:** If the object's script is not [annotation @GDScript.@tool], this method will not be called in the editor.
 *
*/
protected _get_property_list(): Dictionary[];

/**
 * Called when the object's script is instantiated, oftentimes after the object is initialized in memory (through `Object.new()` in GDScript, or `new GodotObject` in C#). It can be also defined to take in parameters. This method is similar to a constructor in most programming languages.
 *
 * **Note:** If [method _init] is defined with **required** parameters, the Object with script may only be created directly. If any other means (such as [method PackedScene.instantiate] or [method Node.duplicate]) are used, the script's initialization will fail.
 *
*/
protected _init(): void;

/**
 * Called when the object receives a notification, which can be identified in [param what] by comparing it with a constant. See also [method notification].
 *
 * @example 
 * 
 * 
 * func _notification(what):
 *     if what == NOTIFICATION_PREDELETE:
 *         print("Goodbye!")
 * 
 * 
 * public override void _Notification(int what)
 * {
 *     if (what == NotificationPredelete)
 *     {
 *         GD.Print("Goodbye!");
 *     }
 * }
 * 
 * @summary 
 * 
 *
 * **Note:** The base [Object] defines a few notifications ([constant NOTIFICATION_POSTINITIALIZE] and [constant NOTIFICATION_PREDELETE]). Inheriting classes such as [Node] define a lot more notifications, which are also received by this method.
 *
*/
protected _notification(): void;

/**
 * Override this method to customize the given [param property]'s revert behavior. Should return `true` if the [param property] can be reverted in the Inspector dock. Use [method _property_get_revert] to specify the [param property]'s default value.
 *
 * **Note:** This method must return consistently, regardless of the current value of the [param property].
 *
*/
protected _property_can_revert(): boolean;

/**
 * Override this method to customize the given [param property]'s revert behavior. Should return the default value for the [param property]. If the default value differs from the [param property]'s current value, a revert icon is displayed in the Inspector dock.
 *
 * **Note:** [method _property_can_revert] must also be overridden for this method to be called.
 *
*/
protected _property_get_revert(): any;

/**
 * Override this method to customize the behavior of [method set]. Should set the [param property] to [param value] and return `true`, or `false` if the [param property] should be handled normally. The **exact** way to set the [param property] is up to this method's implementation.
 *
 * Combined with [method _get] and [method _get_property_list], this method allows defining custom properties, which is particularly useful for editor plugins. Note that a property **must** be present in [method get_property_list], otherwise this method will not be called.
 *
 * @example 
 * 
 * 
 * var internal_data = {}
 * func _set(property, value):
 *     if property == "fake_property":
 *         # Storing the value in the fake property.
 *         internal_data["fake_property"] = value
 *         return true
 *     return false
 * func _get_property_list():
 *     return [
 *         { "name": "fake_property", "type": TYPE_INT }
 *     ]
 * 
 * 
 * private Godot.Collections.Dictionary _internalData = new Godot.Collections.Dictionary();
 * public override bool _Set(StringName property, Variant value)
 * {
 *     if (property == "FakeProperty")
 *     {
 *         // Storing the value in the fake property.
 *         _internalData["FakeProperty"] = value;
 *         return true;
 *     }
 *     return false;
 * }
 * public override Godot.Collections.Array<Godot.Collections.Dictionary> _GetPropertyList()
 * {
 *     return new Godot.Collections.Array<Godot.Collections.Dictionary>()
 *     {
 *         new Godot.Collections.Dictionary()
 *         {
 *             { "name", "FakeProperty" },
 *             { "type", (int)Variant.Type.Int }
 *         }
 *     };
 * }
 * 
 * @summary 
 * 
 *
*/
protected _set(): boolean;

/**
 * Override this method to customize the return value of [method to_string], and therefore the object's representation as a [String].
 *
 * @example 
 * 
 * func _to_string():
 *     return "Welcome to Godot 4!"
 * func _init():
 *     print(self)       # Prints Welcome to Godot 4!"
 *     var a = str(self) # a is "Welcome to Godot 4!"
 * @summary 
 * 
 *
*/
protected _to_string(): string;

/**
 * Override this method to customize existing properties. Every property info goes through this method. The dictionary contents is the same as in [method _get_property_list].
 *
 * @example 
 * 
 * 
 * @tool
 * extends Node
 * @export var is_number_editable: bool:
 *     set(value):
 *         is_number_editable = value
 *         notify_property_list_changed()
 * @export var number: int
 * func _validate_property(property: Dictionary):
 *     if property.name == "number" and not is_number_editable:
 *         property.usage |= PROPERTY_USAGE_READ_ONLY
 * 
 * 
 * [Tool]
 * public partial class MyNode : Node
 * {
 *     private bool _isNumberEditable;
 *     [Export]
 *     public bool IsNumberEditable
 *     {
 *         get => _isNumberEditable;
 *         set
 *         {
 *             _isNumberEditable = value;
 *             NotifyPropertyListChanged();
 *         }
 *     }
 *     [Export]
 *     public int Number { get; set; }
 *     public override void _ValidateProperty(Godot.Collections.Dictionary property)
 *     {
 *         if (property["name"].AsStringName() == PropertyName.Number && IsNumberEditable)
 *         {
 *             var usage = property["usage"].As>PropertyUsageFlags<() | PropertyUsageFlags.ReadOnly;
 *             property["usage"] = (int)usage;
 *         }
 *     }
 * }
 * 
 * @summary 
 * 
 *
*/
protected _validate_property(): void;

/**
 * Adds a user-defined [param signal]. Optional arguments for the signal can be added as an [Array] of dictionaries, each defining a `name` [String] and a `type` [int] (see [enum Variant.Type]). See also [method has_user_signal].
 *
 * @example 
 * 
 * 
 * add_user_signal("hurt", [
 *     { "name": "damage", "type": TYPE_INT },
 *     { "name": "source", "type": TYPE_OBJECT }
 * ])
 * 
 * 
 * AddUserSignal("Hurt", new Godot.Collections.Array()
 * {
 *     new Godot.Collections.Dictionary()
 *     {
 *         { "name", "damage" },
 *         { "type", (int)Variant.Type.Int }
 *     },
 *     new Godot.Collections.Dictionary()
 *     {
 *         { "name", "source" },
 *         { "type", (int)Variant.Type.Object }
 *     }
 * });
 * 
 * @summary 
 * 
 *
*/
add_user_signal(): void;

/**
 * Calls the [param method] on the object and returns the result. This method supports a variable number of arguments, so parameters can be passed as a comma separated list.
 *
 * @example 
 * 
 * 
 * var node = Node3D.new()
 * node.call("rotate", Vector3(1.0, 0.0, 0.0), 1.571)
 * 
 * 
 * var node = new Node3D();
 * node.Call(Node3D.MethodName.Rotate, new Vector3(1f, 0f, 0f), 1.571f);
 * 
 * @summary 
 * 
 *
 * **Note:** In C#, [param method] must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the `MethodName` class to avoid allocating a new [StringName] on each call.
 *
*/
call(...args: any[]): any;

/**
 * Calls the [param method] on the object during idle time. Always returns null, **not** the method's result.
 *
 * Idle time happens mainly at the end of process and physics frames. In it, deferred calls will be run until there are none left, which means you can defer calls from other deferred calls and they'll still be run in the current idle time cycle. If not done carefully, this can result in infinite recursion without causing a stack overflow, which will hang the game similarly to an infinite loop.
 *
 * This method supports a variable number of arguments, so parameters can be passed as a comma separated list.
 *
 * @example 
 * 
 * 
 * var node = Node3D.new()
 * node.call_deferred("rotate", Vector3(1.0, 0.0, 0.0), 1.571)
 * 
 * 
 * var node = new Node3D();
 * node.CallDeferred(Node3D.MethodName.Rotate, new Vector3(1f, 0f, 0f), 1.571f);
 * 
 * @summary 
 * 
 *
 * See also [method Callable.call_deferred].
 *
 * **Note:** In C#, [param method] must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the `MethodName` class to avoid allocating a new [StringName] on each call.
 *
 * **Note:** If you're looking to delay the function call by a frame, refer to the [signal SceneTree.process_frame] and [signal SceneTree.physics_frame] signals.
 *
 * @example 
 * 
 * var node = Node3D.new()
 * # Make a Callable and bind the arguments to the node's rotate() call.
 * var callable = node.rotate.bind(Vector3(1.0, 0.0, 0.0), 1.571)
 * # Connect the callable to the process_frame signal, so it gets called in the next process frame.
 * # CONNECT_ONE_SHOT makes sure it only gets called once instead of every frame.
 * get_tree().process_frame.connect(callable, CONNECT_ONE_SHOT)
 * @summary 
 * 
 *
*/
call_deferred(...args: any[]): any;

/**
 * Calls the [param method] on the object and returns the result. Unlike [method call], this method expects all parameters to be contained inside [param arg_array].
 *
 * @example 
 * 
 * 
 * var node = Node3D.new()
 * node.callv("rotate", [Vector3(1.0, 0.0, 0.0), 1.571])
 * 
 * 
 * var node = new Node3D();
 * node.Callv(Node3D.MethodName.Rotate, new Godot.Collections.Array { new Vector3(1f, 0f, 0f), 1.571f });
 * 
 * @summary 
 * 
 *
 * **Note:** In C#, [param method] must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the `MethodName` class to avoid allocating a new [StringName] on each call.
 *
*/
callv(): any;

/** Returns [code]true[/code] if the object is allowed to translate messages with [method tr] and [method tr_n]. See also [method set_message_translation]. */
can_translate_messages(): boolean;

/** If this method is called during [constant NOTIFICATION_PREDELETE], this object will reject being freed and will remain allocated. This is mostly an internal function used for error handling to avoid the user from freeing objects when they are not intended to. */
cancel_free(): void;



/** Disconnects a [param signal] by name from a given [param callable]. If the connection does not exist, generates an error. Use [method is_connected] to make sure that the connection exists. */
disconnect(): void;

/**
 * Emits the given [param signal] by name. The signal must exist, so it should be a built-in signal of this class or one of its inherited classes, or a user-defined signal (see [method add_user_signal]). This method supports a variable number of arguments, so parameters can be passed as a comma separated list.
 *
 * Returns [constant ERR_UNAVAILABLE] if [param signal] does not exist or the parameters are invalid.
 *
 * @example 
 * 
 * 
 * emit_signal("hit", "sword", 100)
 * emit_signal("game_over")
 * 
 * 
 * EmitSignal(SignalName.Hit, "sword", 100);
 * EmitSignal(SignalName.GameOver);
 * 
 * @summary 
 * 
 *
 * **Note:** In C#, [param signal] must be in snake_case when referring to built-in Godot signals. Prefer using the names exposed in the `SignalName` class to avoid allocating a new [StringName] on each call.
 *
*/
emit_signal<U extends (...args: Args) => any, T extends Signal<U>, Args extends any[]>(signal: T, ...args: Args): void;

/** Deletes the object from memory. Pre-existing references to the object become invalid, and any attempt to access them will result in a run-time error. Checking the references with [method @GlobalScope.is_instance_valid] will return [code]false[/code]. */
free(): void;

/**
 * Returns the [Variant] value of the given [param property]. If the [param property] does not exist, this method returns `null`.
 *
 * @example 
 * 
 * 
 * var node = Node2D.new()
 * node.rotation = 1.5
 * var a = node.get("rotation") # a is 1.5
 * 
 * 
 * var node = new Node2D();
 * node.Rotation = 1.5f;
 * var a = node.Get("rotation"); // a is 1.5
 * 
 * @summary 
 * 
 *
 * **Note:** In C#, [param property] must be in snake_case when referring to built-in Godot properties. Prefer using the names exposed in the `PropertyName` class to avoid allocating a new [StringName] on each call.
 *
*/
get(): any;

/**
 * Returns the object's built-in class name, as a [String]. See also [method is_class].
 *
 * **Note:** This method ignores `class_name` declarations. If this object's script has defined a `class_name`, the base, built-in class name is returned instead.
 *
*/
get_class(): string;

/**
 * Returns an [Array] of signal connections received by this object. Each connection is represented as a [Dictionary] that contains three entries:
 *
 * - `signal` is a reference to the [Signal];
 *
 * - `callable` is a reference to the [Callable];
 *
 * - `flags` is a combination of [enum ConnectFlags].
 *
*/
get_incoming_connections(): Dictionary[];

/**
 * Gets the object's property indexed by the given [param property_path]. The path should be a [NodePath] relative to the current object and can use the colon character (`:`) to access nested properties.
 *
 * **Examples:** `"position:x"` or `"material:next_pass:blend_mode"`.
 *
 * @example 
 * 
 * 
 * var node = Node2D.new()
 * node.position = Vector2(5, -10)
 * var a = node.get_indexed("position")   # a is Vector2(5, -10)
 * var b = node.get_indexed("position:y") # b is -10
 * 
 * 
 * var node = new Node2D();
 * node.Position = new Vector2(5, -10);
 * var a = node.GetIndexed("position");   // a is Vector2(5, -10)
 * var b = node.GetIndexed("position:y"); // b is -10
 * 
 * @summary 
 * 
 *
 * **Note:** In C#, [param property_path] must be in snake_case when referring to built-in Godot properties. Prefer using the names exposed in the `PropertyName` class to avoid allocating a new [StringName] on each call.
 *
 * **Note:** This method does not support actual paths to nodes in the [SceneTree], only sub-property paths. In the context of nodes, use [method Node.get_node_and_resource] instead.
 *
*/
get_indexed(): any;

/** Returns the object's unique instance ID. This ID can be saved in [EncodedObjectAsID], and can be used to retrieve this object instance with [method @GlobalScope.instance_from_id]. */
get_instance_id(): int;

/**
 * Returns the object's metadata value for the given entry [param name]. If the entry does not exist, returns [param default]. If [param default] is `null`, an error is also generated.
 *
 * **Note:** A metadata's name must be a valid identifier as per [method StringName.is_valid_identifier] method.
 *
 * **Note:** Metadata that has a name starting with an underscore (`_`) is considered editor-only. Editor-only metadata is not displayed in the Inspector and should not be edited, although it can still be found by this method.
 *
*/
get_meta(): any;

/** Returns the object's metadata entry names as a [PackedStringArray]. */
get_meta_list(): StringName[];

/**
 * Returns this object's methods and their signatures as an [Array] of dictionaries. Each [Dictionary] contains the following entries:
 *
 * - `name` is the name of the method, as a [String];
 *
 * - `args` is an [Array] of dictionaries representing the arguments;
 *
 * - `default_args` is the default arguments as an [Array] of variants;
 *
 * - `flags` is a combination of [enum MethodFlags];
 *
 * - `id` is the method's internal identifier [int];
 *
 * - `return` is the returned value, as a [Dictionary];
 *
 * **Note:** The dictionaries of `args` and `return` are formatted identically to the results of [method get_property_list], although not all entries are used.
 *
*/
get_method_list(): Dictionary[];

/**
 * Returns the object's property list as an [Array] of dictionaries. Each [Dictionary] contains the following entries:
 *
 * - `name` is the property's name, as a [String];
 *
 * - `class_name` is an empty [StringName], unless the property is [constant TYPE_OBJECT] and it inherits from a class;
 *
 * - `type` is the property's type, as an [int] (see [enum Variant.Type]);
 *
 * - `hint` is **how** the property is meant to be edited (see [enum PropertyHint]);
 *
 * - `hint_string` depends on the hint (see [enum PropertyHint]);
 *
 * - `usage` is a combination of [enum PropertyUsageFlags].
 *
 * **Note:** In GDScript, all class members are treated as properties. In C# and GDExtension, it may be necessary to explicitly mark class members as Godot properties using decorators or attributes.
 *
*/
get_property_list(): Dictionary[];

/** Returns the object's [Script] instance, or [code]null[/code] if no script is attached. */
get_script(): any;

/**
 * Returns an [Array] of connections for the given [param signal] name. Each connection is represented as a [Dictionary] that contains three entries:
 *
 * - [code skip-lint]signal` is a reference to the [Signal];
 *
 * - `callable` is a reference to the connected [Callable];
 *
 * - `flags` is a combination of [enum ConnectFlags].
 *
*/
get_signal_connection_list(): Dictionary[];

/**
 * Returns the list of existing signals as an [Array] of dictionaries.
 *
 * **Note:** Due of the implementation, each [Dictionary] is formatted very similarly to the returned values of [method get_method_list].
 *
*/
get_signal_list(): Dictionary[];

/**
 * Returns `true` if a metadata entry is found with the given [param name]. See also [method get_meta], [method set_meta] and [method remove_meta].
 *
 * **Note:** A metadata's name must be a valid identifier as per [method StringName.is_valid_identifier] method.
 *
 * **Note:** Metadata that has a name starting with an underscore (`_`) is considered editor-only. Editor-only metadata is not displayed in the Inspector and should not be edited, although it can still be found by this method.
 *
*/
has_meta(): boolean;

/**
 * Returns `true` if the given [param method] name exists in the object.
 *
 * **Note:** In C#, [param method] must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the `MethodName` class to avoid allocating a new [StringName] on each call.
 *
*/
has_method(): boolean;

/**
 * Returns `true` if the given [param signal] name exists in the object.
 *
 * **Note:** In C#, [param signal] must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the `SignalName` class to avoid allocating a new [StringName] on each call.
 *
*/
has_signal(): boolean;

/** Returns [code]true[/code] if the given user-defined [param signal] name exists. Only signals added with [method add_user_signal] are included. */
has_user_signal(): boolean;

/** Returns [code]true[/code] if the object is blocking its signals from being emitted. See [method set_block_signals]. */
is_blocking_signals(): boolean;

/**
 * Returns `true` if the object inherits from the given [param class]. See also [method get_class].
 *
 * @example 
 * 
 * 
 * var sprite2d = Sprite2D.new()
 * sprite2d.is_class("Sprite2D") # Returns true
 * sprite2d.is_class("Node")     # Returns true
 * sprite2d.is_class("Node3D")   # Returns false
 * 
 * 
 * var sprite2D = new Sprite2D();
 * sprite2D.IsClass("Sprite2D"); // Returns true
 * sprite2D.IsClass("Node");     // Returns true
 * sprite2D.IsClass("Node3D");   // Returns false
 * 
 * @summary 
 * 
 *
 * **Note:** This method ignores `class_name` declarations in the object's script.
 *
*/
is_class(): boolean;

/**
 * Returns `true` if a connection exists between the given [param signal] name and [param callable].
 *
 * **Note:** In C#, [param signal] must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the `SignalName` class to avoid allocating a new [StringName] on each call.
 *
*/
is_connected(): boolean;

/** Returns [code]true[/code] if the [method Node.queue_free] method was called for the object. */
is_queued_for_deletion(): boolean;

/**
 * Sends the given [param what] notification to all classes inherited by the object, triggering calls to [method _notification], starting from the highest ancestor (the [Object] class) and going down to the object's script.
 *
 * If [param reversed] is `true`, the call order is reversed.
 *
 * @example 
 * 
 * 
 * var player = Node2D.new()
 * player.set_script(load("res://player.gd"))
 * player.notification(NOTIFICATION_ENTER_TREE)
 * # The call order is Object -> Node -> Node2D -> player.gd.
 * player.notification(NOTIFICATION_ENTER_TREE, true)
 * # The call order is player.gd -> Node2D -> Node -> Object.
 * 
 * 
 * var player = new Node2D();
 * player.SetScript(GD.Load("res://player.gd"));
 * player.Notification(NotificationEnterTree);
 * // The call order is GodotObject -> Node -> Node2D -> player.gd.
 * player.Notification(NotificationEnterTree, true);
 * // The call order is player.gd -> Node2D -> Node -> GodotObject.
 * 
 * @summary 
 * 
 *
*/
notification(): void;

/** Emits the [signal property_list_changed] signal. This is mainly used to refresh the editor, so that the Inspector and editor plugins are properly updated. */
notify_property_list_changed(): void;

/**
 * Returns `true` if the given [param property] has a custom default value. Use [method property_get_revert] to get the [param property]'s default value.
 *
 * **Note:** This method is used by the Inspector dock to display a revert icon. The object must implement [method _property_can_revert] to customize the default value. If [method _property_can_revert] is not implemented, this method returns `false`.
 *
*/
property_can_revert(): boolean;

/**
 * Returns the custom default value of the given [param property]. Use [method property_can_revert] to check if the [param property] has a custom default value.
 *
 * **Note:** This method is used by the Inspector dock to display a revert icon. The object must implement [method _property_get_revert] to customize the default value. If [method _property_get_revert] is not implemented, this method returns `null`.
 *
*/
property_get_revert(): any;

/**
 * Removes the given entry [param name] from the object's metadata. See also [method has_meta], [method get_meta] and [method set_meta].
 *
 * **Note:** A metadata's name must be a valid identifier as per [method StringName.is_valid_identifier] method.
 *
 * **Note:** Metadata that has a name starting with an underscore (`_`) is considered editor-only. Editor-only metadata is not displayed in the Inspector and should not be edited, although it can still be found by this method.
 *
*/
remove_meta(): void;

/**
 * Assigns [param value] to the given [param property]. If the property does not exist or the given [param value]'s type doesn't match, nothing happens.
 *
 * @example 
 * 
 * 
 * var node = Node2D.new()
 * node.set("global_scale", Vector2(8, 2.5))
 * print(node.global_scale) # Prints (8, 2.5)
 * 
 * 
 * var node = new Node2D();
 * node.Set("global_scale", new Vector2(8, 2.5));
 * GD.Print(node.GlobalScale); // Prints Vector2(8, 2.5)
 * 
 * @summary 
 * 
 *
 * **Note:** In C#, [param property] must be in snake_case when referring to built-in Godot properties. Prefer using the names exposed in the `PropertyName` class to avoid allocating a new [StringName] on each call.
 *
*/
set(): void;

/** If set to [code]true[/code], the object becomes unable to emit signals. As such, [method emit_signal] and signal connections will not work, until it is set to [code]false[/code]. */
set_block_signals(): void;

/**
 * Assigns [param value] to the given [param property], at the end of the current frame. This is equivalent to calling [method set] through [method call_deferred].
 *
 * @example 
 * 
 * 
 * var node = Node2D.new()
 * add_child(node)
 * node.rotation = 45.0
 * node.set_deferred("rotation", 90.0)
 * print(node.rotation) # Prints 45.0
 * await get_tree().process_frame
 * print(node.rotation) # Prints 90.0
 * 
 * 
 * var node = new Node2D();
 * node.Rotation = 45f;
 * node.SetDeferred("rotation", 90f);
 * GD.Print(node.Rotation); // Prints 45.0
 * await ToSignal(GetTree(), SceneTree.SignalName.ProcessFrame);
 * GD.Print(node.Rotation); // Prints 90.0
 * 
 * @summary 
 * 
 *
 * **Note:** In C#, [param property] must be in snake_case when referring to built-in Godot properties. Prefer using the names exposed in the `PropertyName` class to avoid allocating a new [StringName] on each call.
 *
*/
set_deferred(): void;

/**
 * Assigns a new [param value] to the property identified by the [param property_path]. The path should be a [NodePath] relative to this object, and can use the colon character (`:`) to access nested properties.
 *
 * @example 
 * 
 * 
 * var node = Node2D.new()
 * node.set_indexed("position", Vector2(42, 0))
 * node.set_indexed("position:y", -10)
 * print(node.position) # Prints (42, -10)
 * 
 * 
 * var node = new Node2D();
 * node.SetIndexed("position", new Vector2(42, 0));
 * node.SetIndexed("position:y", -10);
 * GD.Print(node.Position); // Prints (42, -10)
 * 
 * @summary 
 * 
 *
 * **Note:** In C#, [param property_path] must be in snake_case when referring to built-in Godot properties. Prefer using the names exposed in the `PropertyName` class to avoid allocating a new [StringName] on each call.
 *
*/
set_indexed(): void;

/** If set to [code]true[/code], allows the object to translate messages with [method tr] and [method tr_n]. Enabled by default. See also [method can_translate_messages]. */
set_message_translation(): void;

/**
 * Adds or changes the entry [param name] inside the object's metadata. The metadata [param value] can be any [Variant], although some types cannot be serialized correctly.
 *
 * If [param value] is `null`, the entry is removed. This is the equivalent of using [method remove_meta]. See also [method has_meta] and [method get_meta].
 *
 * **Note:** A metadata's name must be a valid identifier as per [method StringName.is_valid_identifier] method.
 *
 * **Note:** Metadata that has a name starting with an underscore (`_`) is considered editor-only. Editor-only metadata is not displayed in the Inspector and should not be edited, although it can still be found by this method.
 *
*/
set_meta(): void;

/**
 * Attaches [param script] to the object, and instantiates it. As a result, the script's [method _init] is called. A [Script] is used to extend the object's functionality.
 *
 * If a script already exists, its instance is detached, and its property values and state are lost. Built-in property values are still kept.
 *
*/
set_script(): void;

/** Returns a [String] representing the object. Defaults to [code]"<ClassName#RID>"[/code]. Override [method _to_string] to customize the string representation of the object. */
to_string(): string;

/**
 * Translates a [param message], using the translation catalogs configured in the Project Settings. Further [param context] can be specified to help with the translation.
 *
 * If [method can_translate_messages] is `false`, or no translation is available, this method returns the [param message] without changes. See [method set_message_translation].
 *
 * For detailed examples, see [url=$DOCS_URL/tutorials/i18n/internationalizing_games.html]Internationalizing games[/url].
 *
*/
tr(): string;

/**
 * Translates a [param message] or [param plural_message], using the translation catalogs configured in the Project Settings. Further [param context] can be specified to help with the translation.
 *
 * If [method can_translate_messages] is `false`, or no translation is available, this method returns [param message] or [param plural_message], without changes. See [method set_message_translation].
 *
 * The [param n] is the number, or amount, of the message's subject. It is used by the translation system to fetch the correct plural form for the current language.
 *
 * For detailed examples, see [url=$DOCS_URL/tutorials/i18n/localization_using_gettext.html]Localization using gettext[/url].
 *
 * **Note:** Negative and [float] numbers may not properly apply to some countable subjects. It's recommended handling these cases with [method tr].
 *
*/
tr_n(): string;

  connect<T extends SignalsOf<Object>>(signal: T, method: SignalFunction<Object[T]>): number;



/**
 * Notification received when the object is initialized, before its script is attached. Used internally.
 *
*/
static NOTIFICATION_POSTINITIALIZE: any;

/**
 * Notification received when the object is about to be deleted. Can act as the deconstructor of some programming languages.
 *
*/
static NOTIFICATION_PREDELETE: any;

/**
 * Deferred connections trigger their [Callable]s on idle time (at the end of the frame), rather than instantly.
 *
*/
static CONNECT_DEFERRED: any;

/**
 * Persisting connections are stored when the object is serialized (such as when using [method PackedScene.pack]). In the editor, connections created through the Node dock are always persisting.
 *
*/
static CONNECT_PERSIST: any;

/**
 * One-shot connections disconnect themselves after emission.
 *
*/
static CONNECT_ONE_SHOT: any;

/**
 * Reference-counted connections can be assigned to the same [Callable] multiple times. Each disconnection decreases the internal counter. The signal fully disconnects only when the counter reaches 0.
 *
*/
static CONNECT_REFERENCE_COUNTED: any;


/**
 * Emitted when [method notify_property_list_changed] is called.
 *
*/
$property_list_changed: Signal<() => void>

/**
 * Emitted when the object's script is changed.
 *
 * **Note:** When this signal is emitted, the new script is not initialized yet. If you need to access the new script, defer connections to this signal with [constant CONNECT_DEFERRED].
 *
*/
$script_changed: Signal<() => void>

}

