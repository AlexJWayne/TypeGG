
/**
 * A custom shader program implemented in the Godot shading language, saved with the `.gdshader` extension.
 *
 * This class is used by a [ShaderMaterial] and allows you to write your own custom behavior for rendering visual items or updating particle information. For a detailed explanation and usage, please see the tutorials linked below.
 *
*/
declare class Shader extends Resource  {

  
/**
 * A custom shader program implemented in the Godot shading language, saved with the `.gdshader` extension.
 *
 * This class is used by a [ShaderMaterial] and allows you to write your own custom behavior for rendering visual items or updating particle information. For a detailed explanation and usage, please see the tutorials linked below.
 *
*/
  new(): Shader; 
  static "new"(): Shader 


/** Returns the shader's code as the user has written it, not the full generated code used internally. */
code: string;

/**
 * Returns the texture that is set as default for the specified parameter.
 *
 * **Note:** [param name] must match the name of the uniform in the code exactly.
 *
 * **Note:** If the sampler array is used use [param index] to access the specified texture.
 *
*/
get_default_texture_parameter(): Texture2D;

/** Returns the shader mode for the shader. */
get_mode(): int;

/**
 * Get the list of shader uniforms that can be assigned to a [ShaderMaterial], for use with [method ShaderMaterial.set_shader_parameter] and [method ShaderMaterial.get_shader_parameter]. The parameters returned are contained in dictionaries in a similar format to the ones returned by [method Object.get_property_list].
 *
 * If argument [param get_groups] is true, parameter grouping hints will be provided.
 *
*/
get_shader_uniform_list(): any[];

/**
 * Sets the default texture to be used with a texture uniform. The default is used if a texture is not set in the [ShaderMaterial].
 *
 * **Note:** [param name] must match the name of the uniform in the code exactly.
 *
 * **Note:** If the sampler array is used use [param index] to access the specified texture.
 *
*/
set_default_texture_parameter(): void;

  connect<T extends SignalsOf<Shader>>(signal: T, method: SignalFunction<Shader[T]>): number;



/**
 * Mode used to draw all 3D objects.
 *
*/
static MODE_SPATIAL: any;

/**
 * Mode used to draw all 2D objects.
 *
*/
static MODE_CANVAS_ITEM: any;

/**
 * Mode used to calculate particle information on a per-particle basis. Not used for drawing.
 *
*/
static MODE_PARTICLES: any;

/**
 * Mode used for drawing skies. Only works with shaders attached to [Sky] objects.
 *
*/
static MODE_SKY: any;

/**
 * Mode used for setting the color and density of volumetric fog effect.
 *
*/
static MODE_FOG: any;



}

