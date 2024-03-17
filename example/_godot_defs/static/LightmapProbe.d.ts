
/**
 * [LightmapProbe] represents the position of a single manually placed probe for dynamic object lighting with [LightmapGI].
 *
 * Typically, [LightmapGI] probes are placed automatically by setting [member LightmapGI.generate_probes_subdiv] to a value other than [constant LightmapGI.GENERATE_PROBES_DISABLED]. By creating [LightmapProbe] nodes before baking lightmaps, you can add more probes in specific areas for greater detail, or disable automatic generation and rely only on manually placed probes instead.
 *
*/
declare class LightmapProbe extends Node3D  {

  
/**
 * [LightmapProbe] represents the position of a single manually placed probe for dynamic object lighting with [LightmapGI].
 *
 * Typically, [LightmapGI] probes are placed automatically by setting [member LightmapGI.generate_probes_subdiv] to a value other than [constant LightmapGI.GENERATE_PROBES_DISABLED]. By creating [LightmapProbe] nodes before baking lightmaps, you can add more probes in specific areas for greater detail, or disable automatic generation and rely only on manually placed probes instead.
 *
*/
  new(): LightmapProbe; 
  static "new"(): LightmapProbe 





  connect<T extends SignalsOf<LightmapProbe>>(signal: T, method: SignalFunction<LightmapProbe[T]>): number;






}

