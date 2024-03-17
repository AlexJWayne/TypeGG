
/**
 * This object is used by [RenderingDevice].
 *
*/
declare class RDPipelineRasterizationState extends RefCounted  {

  
/**
 * This object is used by [RenderingDevice].
 *
*/
  new(): RDPipelineRasterizationState; 
  static "new"(): RDPipelineRasterizationState 


/** The cull mode to use when drawing polygons, which determines whether front faces or backfaces are hidden. */
cull_mode: int;





/** If [code]true[/code], primitives are discarded immediately before the rasterization stage. */
discard_primitives: boolean;


/** The winding order to use to determine which face of a triangle is considered its front face. */
front_face: int;

/** The line width to use when drawing lines (in pixels). Thick lines may not be supported on all hardware. */
line_width: float;

/** The number of control points to use when drawing a patch with tessellation enabled. Higher values result in higher quality at the cost of performance. */
patch_control_points: int;

/** If [code]true[/code], performs wireframe rendering for triangles instead of flat or textured rendering. */
wireframe: boolean;



  connect<T extends SignalsOf<RDPipelineRasterizationState>>(signal: T, method: SignalFunction<RDPipelineRasterizationState[T]>): number;






}

