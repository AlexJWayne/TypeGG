
/**
 * A **specialization constant** is a way to create additional variants of shaders without actually increasing the number of shader versions that are compiled. This allows improving performance by reducing the number of shader versions and reducing `if` branching, while still allowing shaders to be flexible for different use cases.
 *
 * This object is used by [RenderingDevice].
 *
*/
declare class RDPipelineSpecializationConstant extends RefCounted  {

  
/**
 * A **specialization constant** is a way to create additional variants of shaders without actually increasing the number of shader versions that are compiled. This allows improving performance by reducing the number of shader versions and reducing `if` branching, while still allowing shaders to be flexible for different use cases.
 *
 * This object is used by [RenderingDevice].
 *
*/
  new(): RDPipelineSpecializationConstant; 
  static "new"(): RDPipelineSpecializationConstant 


/** The identifier of the specialization constant. This is a value starting from [code]0[/code] and that increments for every different specialization constant for a given shader. */
constant_id: int;

/** The specialization constant's value. Only [bool], [int] and [float] types are valid for specialization constants. */
value: any;



  connect<T extends SignalsOf<RDPipelineSpecializationConstant>>(signal: T, method: SignalFunction<RDPipelineSpecializationConstant[T]>): number;






}

