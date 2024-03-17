
/**
 * A material that uses a custom [Shader] program to render visual items (canvas items, meshes, skies, fog), or to process particles. Compared to other materials, [ShaderMaterial] gives deeper control over the generated shader code. For more information, see the shaders documentation index below.
 *
 * Multiple [ShaderMaterial]s can use the same shader and configure different values for the shader uniforms.
 *
 * **Note:** For performance reasons, the [signal Resource.changed] signal is only emitted when the [member Resource.resource_name] changes. Only in editor, it is also emitted for [member shader] changes.
 *
*/
declare class ShaderMaterial extends Material  {

  
/**
 * A material that uses a custom [Shader] program to render visual items (canvas items, meshes, skies, fog), or to process particles. Compared to other materials, [ShaderMaterial] gives deeper control over the generated shader code. For more information, see the shaders documentation index below.
 *
 * Multiple [ShaderMaterial]s can use the same shader and configure different values for the shader uniforms.
 *
 * **Note:** For performance reasons, the [signal Resource.changed] signal is only emitted when the [member Resource.resource_name] changes. Only in editor, it is also emitted for [member shader] changes.
 *
*/
  new(): ShaderMaterial; 
  static "new"(): ShaderMaterial 


/** The [Shader] program used to render this material. */
shader: Shader;

/** Returns the current value set for this material of a uniform in the shader. */
get_shader_parameter(): any;

/**
 * Changes the value set for this material of a uniform in the shader.
 *
 * **Note:** [param param] is case-sensitive and must match the name of the uniform in the code exactly (not the capitalized name in the inspector).
 *
 * **Note:** Changes to the shader uniform will be effective on all instances using this [ShaderMaterial]. To prevent this, use per-instance uniforms with [method GeometryInstance3D.set_instance_shader_parameter] or duplicate the [ShaderMaterial] resource using [method Resource.duplicate]. Per-instance uniforms allow for better shader reuse and are therefore faster, so they should be preferred over duplicating the [ShaderMaterial] when possible.
 *
*/
set_shader_parameter(): void;

  connect<T extends SignalsOf<ShaderMaterial>>(signal: T, method: SignalFunction<ShaderMaterial[T]>): number;






}

