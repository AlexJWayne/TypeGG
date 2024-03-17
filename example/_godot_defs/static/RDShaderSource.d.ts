
/**
 * Shader source code in text form.
 *
 * See also [RDShaderFile]. [RDShaderSource] is only meant to be used with the [RenderingDevice] API. It should not be confused with Godot's own [Shader] resource, which is what Godot's various nodes use for high-level shader programming.
 *
*/
declare class RDShaderSource extends RefCounted  {

  
/**
 * Shader source code in text form.
 *
 * See also [RDShaderFile]. [RDShaderSource] is only meant to be used with the [RenderingDevice] API. It should not be confused with Godot's own [Shader] resource, which is what Godot's various nodes use for high-level shader programming.
 *
*/
  new(): RDShaderSource; 
  static "new"(): RDShaderSource 


/** The language the shader is written in. */
language: int;

/** Source code for the shader's compute stage. */
source_compute: string;

/** Source code for the shader's fragment stage. */
source_fragment: string;

/** Source code for the shader's tessellation control stage. */
source_tesselation_control: string;

/** Source code for the shader's tessellation evaluation stage. */
source_tesselation_evaluation: string;

/** Source code for the shader's vertex stage. */
source_vertex: string;

/** Returns source code for the specified shader [param stage]. Equivalent to getting one of [member source_compute], [member source_fragment], [member source_tesselation_control], [member source_tesselation_evaluation] or [member source_vertex]. */
get_stage_source(): string;

/** Sets [param source] code for the specified shader [param stage]. Equivalent to setting one of [member source_compute], [member source_fragment], [member source_tesselation_control], [member source_tesselation_evaluation] or [member source_vertex]. */
set_stage_source(): void;

  connect<T extends SignalsOf<RDShaderSource>>(signal: T, method: SignalFunction<RDShaderSource[T]>): number;






}

