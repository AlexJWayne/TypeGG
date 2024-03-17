
/**
 * Compiled shader file in SPIR-V form.
 *
 * See also [RDShaderSource]. [RDShaderFile] is only meant to be used with the [RenderingDevice] API. It should not be confused with Godot's own [Shader] resource, which is what Godot's various nodes use for high-level shader programming.
 *
*/
declare class RDShaderFile extends Resource  {

  
/**
 * Compiled shader file in SPIR-V form.
 *
 * See also [RDShaderSource]. [RDShaderFile] is only meant to be used with the [RenderingDevice] API. It should not be confused with Godot's own [Shader] resource, which is what Godot's various nodes use for high-level shader programming.
 *
*/
  new(): RDShaderFile; 
  static "new"(): RDShaderFile 


/** The base compilation error message, which indicates errors not related to a specific shader stage if non-empty. If empty, shader compilation is not necessarily successful (check [RDShaderSPIRV]'s error message members). */
base_error: string;

/** Returns the SPIR-V intermediate representation for the specified shader [param version]. */
get_spirv(): RDShaderSPIRV;

/** Returns the list of compiled versions for this shader. */
get_version_list(): StringName[];

/** Sets the SPIR-V [param bytecode] that will be compiled for the specified [param version]. */
set_bytecode(): void;

  connect<T extends SignalsOf<RDShaderFile>>(signal: T, method: SignalFunction<RDShaderFile[T]>): number;






}

