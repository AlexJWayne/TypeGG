
/**
 * [RDPipelineDepthStencilState] controls the way depth and stencil comparisons are performed when sampling those values using [RenderingDevice].
 *
*/
declare class RDPipelineDepthStencilState extends RefCounted  {

  
/**
 * [RDPipelineDepthStencilState] controls the way depth and stencil comparisons are performed when sampling those values using [RenderingDevice].
 *
*/
  new(): RDPipelineDepthStencilState; 
  static "new"(): RDPipelineDepthStencilState 













/** If [code]true[/code], enables depth testing which allows objects to be automatically occluded by other objects based on their depth. This also allows objects to be partially occluded by other objects. If [code]false[/code], objects will appear in the order they were drawn (like in Godot's 2D renderer). */
enable_depth_test: boolean;












  connect<T extends SignalsOf<RDPipelineDepthStencilState>>(signal: T, method: SignalFunction<RDPipelineDepthStencilState[T]>): number;






}

