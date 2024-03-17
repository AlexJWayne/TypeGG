
/**
 * By inheriting this class you can create a custom [VisualShader] script addon which will be automatically added to the Visual Shader Editor. The [VisualShaderNode]'s behavior is defined by overriding the provided virtual methods.
 *
 * In order for the node to be registered as an editor addon, you must use the `@tool` annotation and provide a `class_name` for your custom script. For example:
 *
 * @example 
 * 
 * @tool
 * extends VisualShaderNodeCustom
 * class_name VisualShaderNodeNoise
 * @summary 
 * 
 *
*/
declare class VisualShaderNodeCustom extends VisualShaderNode  {

  
/**
 * By inheriting this class you can create a custom [VisualShader] script addon which will be automatically added to the Visual Shader Editor. The [VisualShaderNode]'s behavior is defined by overriding the provided virtual methods.
 *
 * In order for the node to be registered as an editor addon, you must use the `@tool` annotation and provide a `class_name` for your custom script. For example:
 *
 * @example 
 * 
 * @tool
 * extends VisualShaderNodeCustom
 * class_name VisualShaderNodeNoise
 * @summary 
 * 
 *
*/
  new(): VisualShaderNodeCustom; 
  static "new"(): VisualShaderNodeCustom 



/**
 * Override this method to define the path to the associated custom node in the Visual Shader Editor's members dialog. The path may look like `"MyGame/MyFunctions/Noise"`.
 *
 * Defining this method is **optional**. If not overridden, the node will be filed under the "Addons" category.
 *
*/
protected _get_category(): string;

/**
 * Override this method to define the actual shader code of the associated custom node. The shader code should be returned as a string, which can have multiple lines (the `"""` multiline string construct can be used for convenience).
 *
 * The [param input_vars] and [param output_vars] arrays contain the string names of the various input and output variables, as defined by `_get_input_*` and `_get_output_*` virtual methods in this class.
 *
 * The output ports can be assigned values in the shader code. For example, `return output_vars[0] + " = " + input_vars[0] + ";"`.
 *
 * You can customize the generated code based on the shader [param mode] (see [enum Shader.Mode]) and/or [param type] (see [enum VisualShader.Type]).
 *
 * Defining this method is **required**.
 *
*/
protected _get_code(): string;

/**
 * Override this method to define the input port which should be connected by default when this node is created as a result of dragging a connection from an existing node to the empty space on the graph.
 *
 * Defining this method is **optional**. If not overridden, the connection will be created to the first valid port.
 *
*/
protected _get_default_input_port(): int;

/**
 * Override this method to define the description of the associated custom node in the Visual Shader Editor's members dialog.
 *
 * Defining this method is **optional**.
 *
*/
protected _get_description(): string;

/**
 * Override this method to add a shader code to the beginning of each shader function (once). The shader code should be returned as a string, which can have multiple lines (the `"""` multiline string construct can be used for convenience).
 *
 * If there are multiple custom nodes of different types which use this feature the order of each insertion is undefined.
 *
 * You can customize the generated code based on the shader [param mode] (see [enum Shader.Mode]) and/or [param type] (see [enum VisualShader.Type]).
 *
 * Defining this method is **optional**.
 *
*/
protected _get_func_code(): string;

/**
 * Override this method to add shader code on top of the global shader, to define your own standard library of reusable methods, varyings, constants, uniforms, etc. The shader code should be returned as a string, which can have multiple lines (the `"""` multiline string construct can be used for convenience).
 *
 * Be careful with this functionality as it can cause name conflicts with other custom nodes, so be sure to give the defined entities unique names.
 *
 * You can customize the generated code based on the shader [param mode] (see [enum Shader.Mode]).
 *
 * Defining this method is **optional**.
 *
*/
protected _get_global_code(): string;

/**
 * Override this method to define the number of input ports of the associated custom node.
 *
 * Defining this method is **required**. If not overridden, the node has no input ports.
 *
*/
protected _get_input_port_count(): int;

/**
 * Override this method to define the default value for the specified input port. Prefer use this over [method VisualShaderNode.set_input_port_default_value].
 *
 * Defining this method is **required**. If not overridden, the node has no default values for their input ports.
 *
*/
protected _get_input_port_default_value(): any;

/**
 * Override this method to define the names of input ports of the associated custom node. The names are used both for the input slots in the editor and as identifiers in the shader code, and are passed in the `input_vars` array in [method _get_code].
 *
 * Defining this method is **optional**, but recommended. If not overridden, input ports are named as `"in" + str(port)`.
 *
*/
protected _get_input_port_name(): string;

/**
 * Override this method to define the returned type of each input port of the associated custom node (see [enum VisualShaderNode.PortType] for possible types).
 *
 * Defining this method is **optional**, but recommended. If not overridden, input ports will return the [constant VisualShaderNode.PORT_TYPE_SCALAR] type.
 *
*/
protected _get_input_port_type(): int;

/**
 * Override this method to define the name of the associated custom node in the Visual Shader Editor's members dialog and graph.
 *
 * Defining this method is **optional**, but recommended. If not overridden, the node will be named as "Unnamed".
 *
*/
protected _get_name(): string;

/**
 * Override this method to define the number of output ports of the associated custom node.
 *
 * Defining this method is **required**. If not overridden, the node has no output ports.
 *
*/
protected _get_output_port_count(): int;

/**
 * Override this method to define the names of output ports of the associated custom node. The names are used both for the output slots in the editor and as identifiers in the shader code, and are passed in the `output_vars` array in [method _get_code].
 *
 * Defining this method is **optional**, but recommended. If not overridden, output ports are named as `"out" + str(port)`.
 *
*/
protected _get_output_port_name(): string;

/**
 * Override this method to define the returned type of each output port of the associated custom node (see [enum VisualShaderNode.PortType] for possible types).
 *
 * Defining this method is **optional**, but recommended. If not overridden, output ports will return the [constant VisualShaderNode.PORT_TYPE_SCALAR] type.
 *
*/
protected _get_output_port_type(): int;

/**
 * Override this method to define the number of the properties.
 *
 * Defining this method is **optional**.
 *
*/
protected _get_property_count(): int;

/**
 * Override this method to define the default index of the property of the associated custom node.
 *
 * Defining this method is **optional**.
 *
*/
protected _get_property_default_index(): int;

/**
 * Override this method to define the names of the property of the associated custom node.
 *
 * Defining this method is **optional**.
 *
*/
protected _get_property_name(): string;

/**
 * Override this method to define the options inside the drop-down list property of the associated custom node.
 *
 * Defining this method is **optional**.
 *
*/
protected _get_property_options(): PackedStringArray;

/**
 * Override this method to define the return icon of the associated custom node in the Visual Shader Editor's members dialog.
 *
 * Defining this method is **optional**. If not overridden, no return icon is shown.
 *
*/
protected _get_return_icon_type(): int;

/**
 * Override this method to prevent the node to be visible in the member dialog for the certain [param mode] (see [enum Shader.Mode]) and/or [param type] (see [enum VisualShader.Type]).
 *
 * Defining this method is **optional**. If not overridden, it's `true`.
 *
*/
protected _is_available(): boolean;

/**
 * Override this method to enable high-end mark in the Visual Shader Editor's members dialog.
 *
 * Defining this method is **optional**. If not overridden, it's `false`.
 *
*/
protected _is_highend(): boolean;

/** Returns the selected index of the drop-down list option within a graph. You may use this function to define the specific behavior in the [method _get_code] or [method _get_global_code]. */
get_option_index(): int;

  connect<T extends SignalsOf<VisualShaderNodeCustom>>(signal: T, method: SignalFunction<VisualShaderNodeCustom[T]>): number;






}

