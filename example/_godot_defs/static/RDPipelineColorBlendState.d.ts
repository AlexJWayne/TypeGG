
/**
 * This object is used by [RenderingDevice].
 *
*/
declare class RDPipelineColorBlendState extends RefCounted  {

  
/**
 * This object is used by [RenderingDevice].
 *
*/
  new(): RDPipelineColorBlendState; 
  static "new"(): RDPipelineColorBlendState 


/** The attachments that are blended together. */
attachments: RDPipelineColorBlendStateAttachment[];

/** The constant color to blend with. See also [method RenderingDevice.draw_list_set_blend_constants]. */
blend_constant: Color;

/** If [code]true[/code], performs the logic operation defined in [member logic_op]. */
enable_logic_op: boolean;

/** The logic operation to perform for blending. Only effective if [member enable_logic_op] is [code]true[/code]. */
logic_op: int;



  connect<T extends SignalsOf<RDPipelineColorBlendState>>(signal: T, method: SignalFunction<RDPipelineColorBlendState[T]>): number;






}

