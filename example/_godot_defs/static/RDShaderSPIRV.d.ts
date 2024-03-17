
/**
 * [RDShaderSPIRV] represents a [RDShaderFile]'s [url=https://www.khronos.org/spir/]SPIR-V[/url] code for various shader stages, as well as possible compilation error messages. SPIR-V is a low-level intermediate shader representation. This intermediate representation is not used directly by GPUs for rendering, but it can be compiled into binary shaders that GPUs can understand. Unlike compiled shaders, SPIR-V is portable across GPU models and driver versions.
 *
 * This object is used by [RenderingDevice].
 *
*/
declare class RDShaderSPIRV extends Resource  {

  
/**
 * [RDShaderSPIRV] represents a [RDShaderFile]'s [url=https://www.khronos.org/spir/]SPIR-V[/url] code for various shader stages, as well as possible compilation error messages. SPIR-V is a low-level intermediate shader representation. This intermediate representation is not used directly by GPUs for rendering, but it can be compiled into binary shaders that GPUs can understand. Unlike compiled shaders, SPIR-V is portable across GPU models and driver versions.
 *
 * This object is used by [RenderingDevice].
 *
*/
  new(): RDShaderSPIRV; 
  static "new"(): RDShaderSPIRV 


/** The SPIR-V bytecode for the compute shader stage. */
bytecode_compute: PackedByteArray;

/** The SPIR-V bytecode for the fragment shader stage. */
bytecode_fragment: PackedByteArray;

/** The SPIR-V bytecode for the tessellation control shader stage. */
bytecode_tesselation_control: PackedByteArray;

/** The SPIR-V bytecode for the tessellation evaluation shader stage. */
bytecode_tesselation_evaluation: PackedByteArray;

/** The SPIR-V bytecode for the vertex shader stage. */
bytecode_vertex: PackedByteArray;

/** The compilation error message for the compute shader stage (set by the SPIR-V compiler and Godot). If empty, shader compilation was successful. */
compile_error_compute: string;

/** The compilation error message for the fragment shader stage (set by the SPIR-V compiler and Godot). If empty, shader compilation was successful. */
compile_error_fragment: string;

/** The compilation error message for the tessellation control shader stage (set by the SPIR-V compiler and Godot). If empty, shader compilation was successful. */
compile_error_tesselation_control: string;

/** The compilation error message for the tessellation evaluation shader stage (set by the SPIR-V compiler and Godot). If empty, shader compilation was successful. */
compile_error_tesselation_evaluation: string;

/** The compilation error message for the vertex shader stage (set by the SPIR-V compiler and Godot). If empty, shader compilation was successful. */
compile_error_vertex: string;

/** Equivalent to getting one of [member bytecode_compute], [member bytecode_fragment], [member bytecode_tesselation_control], [member bytecode_tesselation_evaluation], [member bytecode_vertex]. */
get_stage_bytecode(): PackedByteArray;

/** Returns the compilation error message for the given shader [param stage]. Equivalent to getting one of [member compile_error_compute], [member compile_error_fragment], [member compile_error_tesselation_control], [member compile_error_tesselation_evaluation], [member compile_error_vertex]. */
get_stage_compile_error(): string;

/** Sets the SPIR-V [param bytecode] for the given shader [param stage]. Equivalent to setting one of [member bytecode_compute], [member bytecode_fragment], [member bytecode_tesselation_control], [member bytecode_tesselation_evaluation], [member bytecode_vertex]. */
set_stage_bytecode(): void;

/** Sets the compilation error message for the given shader [param stage] to [param compile_error]. Equivalent to setting one of [member compile_error_compute], [member compile_error_fragment], [member compile_error_tesselation_control], [member compile_error_tesselation_evaluation], [member compile_error_vertex]. */
set_stage_compile_error(): void;

  connect<T extends SignalsOf<RDShaderSPIRV>>(signal: T, method: SignalFunction<RDShaderSPIRV[T]>): number;






}

