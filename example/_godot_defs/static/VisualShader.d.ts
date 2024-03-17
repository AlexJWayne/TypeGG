
/**
 * This class provides a graph-like visual editor for creating a [Shader]. Although [VisualShader]s do not require coding, they share the same logic with script shaders. They use [VisualShaderNode]s that can be connected to each other to control the flow of the shader. The visual shader graph is converted to a script shader behind the scenes.
 *
*/
declare class VisualShader extends Shader  {

  
/**
 * This class provides a graph-like visual editor for creating a [Shader]. Although [VisualShader]s do not require coding, they share the same logic with script shaders. They use [VisualShaderNode]s that can be connected to each other to control the flow of the shader. The visual shader graph is converted to a script shader behind the scenes.
 *
*/
  new(): VisualShader; 
  static "new"(): VisualShader 


/** The offset vector of the whole graph. */
graph_offset: Vector2;

/** Adds the specified [param node] to the shader. */
add_node(): void;

/** Adds a new varying value node to the shader. */
add_varying(): void;

/** Returns [code]true[/code] if the specified nodes and ports can be connected together. */
can_connect_nodes(): boolean;

/** Connects the specified nodes and ports. */
connect_nodes(): int;

/** Connects the specified nodes and ports, even if they can't be connected. Such connection is invalid and will not function properly. */
connect_nodes_forced(): void;

/** Connects the specified nodes and ports. */
disconnect_nodes(): void;

/** Returns the shader node instance with specified [param type] and [param id]. */
get_node(path: NodePathType): Node;

/** Returns the shader node instance with specified [param type] and [param id]. */
get_node_unsafe<T extends Node>(path: NodePathType): T;


/** Returns the list of connected nodes with the specified type. */
get_node_connections(): Dictionary[];

/** Returns the list of all nodes in the shader with the specified type. */
get_node_list(): PackedInt32Array;

/** Returns the position of the specified node within the shader graph. */
get_node_position(): Vector2;

/** Returns next valid node ID that can be added to the shader graph. */
get_valid_node_id(): int;

/** Returns [code]true[/code] if the shader has a varying with the given [param name]. */
has_varying(): boolean;

/** Returns [code]true[/code] if the specified node and port connection exist. */
is_node_connection(): boolean;

/** Removes the specified node from the shader. */
remove_node(): void;

/** Removes a varying value node with the given [param name]. Prints an error if a node with this name is not found. */
remove_varying(): void;

/** Replaces the specified node with a node of new class type. */
replace_node(): void;

/** Sets the mode of this shader. */
set_mode(): void;

/** Sets the position of the specified node. */
set_node_position(): void;

  connect<T extends SignalsOf<VisualShader>>(signal: T, method: SignalFunction<VisualShader[T]>): number;



/**
 * A vertex shader, operating on vertices.
 *
*/
static TYPE_VERTEX: any;

/**
 * A fragment shader, operating on fragments (pixels).
 *
*/
static TYPE_FRAGMENT: any;

/**
 * A shader for light calculations.
 *
*/
static TYPE_LIGHT: any;

/**
 * A function for the "start" stage of particle shader.
 *
*/
static TYPE_START: any;

/**
 * A function for the "process" stage of particle shader.
 *
*/
static TYPE_PROCESS: any;

/**
 * A function for the "collide" stage (particle collision handler) of particle shader.
 *
*/
static TYPE_COLLIDE: any;

/**
 * A function for the "start" stage of particle shader, with customized output.
 *
*/
static TYPE_START_CUSTOM: any;

/**
 * A function for the "process" stage of particle shader, with customized output.
 *
*/
static TYPE_PROCESS_CUSTOM: any;

/**
 * A shader for 3D environment's sky.
 *
*/
static TYPE_SKY: any;

/**
 * A compute shader that runs for each froxel of the volumetric fog map.
 *
*/
static TYPE_FOG: any;

/**
 * Represents the size of the [enum Type] enum.
 *
*/
static TYPE_MAX: any;

/**
 * Varying is passed from `Vertex` function to `Fragment` and `Light` functions.
 *
*/
static VARYING_MODE_VERTEX_TO_FRAG_LIGHT: any;

/**
 * Varying is passed from `Fragment` function to `Light` function.
 *
*/
static VARYING_MODE_FRAG_TO_LIGHT: any;

/**
 * Represents the size of the [enum VaryingMode] enum.
 *
*/
static VARYING_MODE_MAX: any;

/**
 * Varying is of type [float].
 *
*/
static VARYING_TYPE_FLOAT: any;

/**
 * Varying is of type [int].
 *
*/
static VARYING_TYPE_INT: any;

/**
 * Varying is of type unsigned [int].
 *
*/
static VARYING_TYPE_UINT: any;

/**
 * Varying is of type [Vector2].
 *
*/
static VARYING_TYPE_VECTOR_2D: any;

/**
 * Varying is of type [Vector3].
 *
*/
static VARYING_TYPE_VECTOR_3D: any;

/**
 * Varying is of type [Vector4].
 *
*/
static VARYING_TYPE_VECTOR_4D: any;

/**
 * Varying is of type [bool].
 *
*/
static VARYING_TYPE_BOOLEAN: any;

/**
 * Varying is of type [Transform3D].
 *
*/
static VARYING_TYPE_TRANSFORM: any;

/**
 * Represents the size of the [enum VaryingType] enum.
 *
*/
static VARYING_TYPE_MAX: any;

/**
 * Denotes invalid [VisualShader] node.
 *
*/
static NODE_ID_INVALID: any;

/**
 * Denotes output node of [VisualShader].
 *
*/
static NODE_ID_OUTPUT: any;



}

