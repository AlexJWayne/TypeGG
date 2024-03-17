
/**
 * Currently, has no direct usage, use the derived classes instead.
 *
*/
declare class VisualShaderNodeGroupBase extends VisualShaderNodeResizableBase  {

  
/**
 * Currently, has no direct usage, use the derived classes instead.
 *
*/
  new(): VisualShaderNodeGroupBase; 
  static "new"(): VisualShaderNodeGroupBase 



/** Adds an input port with the specified [param type] (see [enum VisualShaderNode.PortType]) and [param name]. */
add_input_port(): void;

/** Adds an output port with the specified [param type] (see [enum VisualShaderNode.PortType]) and [param name]. */
add_output_port(): void;

/** Removes all previously specified input ports. */
clear_input_ports(): void;

/** Removes all previously specified output ports. */
clear_output_ports(): void;

/** Returns a free input port ID which can be used in [method add_input_port]. */
get_free_input_port_id(): int;

/** Returns a free output port ID which can be used in [method add_output_port]. */
get_free_output_port_id(): int;

/** Returns the number of input ports in use. Alternative for [method get_free_input_port_id]. */
get_input_port_count(): int;

/** Returns a [String] description of the input ports as a colon-separated list using the format [code]id,type,name;[/code] (see [method add_input_port]). */
get_inputs(): string;

/** Returns the number of output ports in use. Alternative for [method get_free_output_port_id]. */
get_output_port_count(): int;

/** Returns a [String] description of the output ports as a colon-separated list using the format [code]id,type,name;[/code] (see [method add_output_port]). */
get_outputs(): string;

/** Returns [code]true[/code] if the specified input port exists. */
has_input_port(): boolean;

/** Returns [code]true[/code] if the specified output port exists. */
has_output_port(): boolean;

/** Returns [code]true[/code] if the specified port name does not override an existed port name and is valid within the shader. */
is_valid_port_name(): boolean;

/** Removes the specified input port. */
remove_input_port(): void;

/** Removes the specified output port. */
remove_output_port(): void;

/** Renames the specified input port. */
set_input_port_name(): void;

/** Sets the specified input port's type (see [enum VisualShaderNode.PortType]). */
set_input_port_type(): void;

/** Defines all input ports using a [String] formatted as a colon-separated list: [code]id,type,name;[/code] (see [method add_input_port]). */
set_inputs(): void;

/** Renames the specified output port. */
set_output_port_name(): void;

/** Sets the specified output port's type (see [enum VisualShaderNode.PortType]). */
set_output_port_type(): void;

/** Defines all output ports using a [String] formatted as a colon-separated list: [code]id,type,name;[/code] (see [method add_output_port]). */
set_outputs(): void;

  connect<T extends SignalsOf<VisualShaderNodeGroupBase>>(signal: T, method: SignalFunction<VisualShaderNodeGroupBase[T]>): number;






}

