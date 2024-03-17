
/**
 * Visual shader graphs consist of various nodes. Each node in the graph is a separate object and they are represented as a rectangular boxes with title and a set of properties. Each node also has connection ports that allow to connect it to another nodes and control the flow of the shader.
 *
*/
declare class VisualShaderNode extends Resource  {

  
/**
 * Visual shader graphs consist of various nodes. Each node in the graph is a separate object and they are represented as a rectangular boxes with title and a set of properties. Each node also has connection ports that allow to connect it to another nodes and control the flow of the shader.
 *
*/
  new(): VisualShaderNode; 
  static "new"(): VisualShaderNode 


/** Sets the output port index which will be showed for preview. If set to [code]-1[/code] no port will be open for preview. */
output_port_for_preview: int;

/** Clears the default input ports value. */
clear_default_input_values(): void;

/** Returns the input port which should be connected by default when this node is created as a result of dragging a connection from an existing node to the empty space on the graph. */
get_default_input_port(): int;

/** Returns an [Array] containing default values for all of the input ports of the node in the form [code][index0, value0, index1, value1, ...][/code]. */
get_default_input_values(): any[];

/** Returns the default value of the input [param port]. */
get_input_port_default_value(): any;

/** Removes the default value of the input [param port]. */
remove_input_port_default_value(): void;

/** Sets the default input ports values using an [Array] of the form [code][index0, value0, index1, value1, ...][/code]. For example: [code][0, Vector3(0, 0, 0), 1, Vector3(0, 0, 0)][/code]. */
set_default_input_values(): void;

/** Sets the default [param value] for the selected input [param port]. */
set_input_port_default_value(): void;

  connect<T extends SignalsOf<VisualShaderNode>>(signal: T, method: SignalFunction<VisualShaderNode[T]>): number;



/**
 * Floating-point scalar. Translated to [code skip-lint]float` type in shader code.
 *
*/
static PORT_TYPE_SCALAR: any;

/**
 * Integer scalar. Translated to [code skip-lint]int` type in shader code.
 *
*/
static PORT_TYPE_SCALAR_INT: any;

/**
 * Unsigned integer scalar. Translated to [code skip-lint]uint` type in shader code.
 *
*/
static PORT_TYPE_SCALAR_UINT: any;

/**
 * 2D vector of floating-point values. Translated to [code skip-lint]vec2` type in shader code.
 *
*/
static PORT_TYPE_VECTOR_2D: any;

/**
 * 3D vector of floating-point values. Translated to [code skip-lint]vec3` type in shader code.
 *
*/
static PORT_TYPE_VECTOR_3D: any;

/**
 * 4D vector of floating-point values. Translated to [code skip-lint]vec4` type in shader code.
 *
*/
static PORT_TYPE_VECTOR_4D: any;

/**
 * Boolean type. Translated to [code skip-lint]bool` type in shader code.
 *
*/
static PORT_TYPE_BOOLEAN: any;

/**
 * Transform type. Translated to [code skip-lint]mat4` type in shader code.
 *
*/
static PORT_TYPE_TRANSFORM: any;

/**
 * Sampler type. Translated to reference of sampler uniform in shader code. Can only be used for input ports in non-uniform nodes.
 *
*/
static PORT_TYPE_SAMPLER: any;

/**
 * Represents the size of the [enum PortType] enum.
 *
*/
static PORT_TYPE_MAX: any;



}

