
/**
 * Similar to how a [WorldEnvironment] node can be used to override the environment while a specific scene is loaded, [ShaderGlobalsOverride] can be used to override global shader parameters temporarily. Once the node is removed, the project-wide values for the global shader parameters are restored. See the [RenderingServer] `global_shader_parameter_*` methods for more information.
 *
 * **Note:** Only one [ShaderGlobalsOverride] can be used per scene. If there is more than one [ShaderGlobalsOverride] node in the scene tree, only the first node (in tree order) will be taken into account.
 *
 * **Note:** All [ShaderGlobalsOverride] nodes are made part of a `"shader_overrides_group"` group when they are added to the scene tree. The currently active [ShaderGlobalsOverride] node also has a `"shader_overrides_group_active"` group added to it. You can use this to check which [ShaderGlobalsOverride] node is currently active.
 *
*/
declare class ShaderGlobalsOverride extends Node  {

  
/**
 * Similar to how a [WorldEnvironment] node can be used to override the environment while a specific scene is loaded, [ShaderGlobalsOverride] can be used to override global shader parameters temporarily. Once the node is removed, the project-wide values for the global shader parameters are restored. See the [RenderingServer] `global_shader_parameter_*` methods for more information.
 *
 * **Note:** Only one [ShaderGlobalsOverride] can be used per scene. If there is more than one [ShaderGlobalsOverride] node in the scene tree, only the first node (in tree order) will be taken into account.
 *
 * **Note:** All [ShaderGlobalsOverride] nodes are made part of a `"shader_overrides_group"` group when they are added to the scene tree. The currently active [ShaderGlobalsOverride] node also has a `"shader_overrides_group_active"` group added to it. You can use this to check which [ShaderGlobalsOverride] node is currently active.
 *
*/
  new(): ShaderGlobalsOverride; 
  static "new"(): ShaderGlobalsOverride 





  connect<T extends SignalsOf<ShaderGlobalsOverride>>(signal: T, method: SignalFunction<ShaderGlobalsOverride[T]>): number;






}

