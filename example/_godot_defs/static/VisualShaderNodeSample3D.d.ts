
/**
 * A virtual class, use the descendants instead.
 *
*/
declare class VisualShaderNodeSample3D extends VisualShaderNode  {

  
/**
 * A virtual class, use the descendants instead.
 *
*/
  new(): VisualShaderNodeSample3D; 
  static "new"(): VisualShaderNodeSample3D 


/** An input source type. */
source: int;



  connect<T extends SignalsOf<VisualShaderNodeSample3D>>(signal: T, method: SignalFunction<VisualShaderNodeSample3D[T]>): number;



/**
 * Creates internal uniform and provides a way to assign it within node.
 *
*/
static SOURCE_TEXTURE: any;

/**
 * Use the uniform texture from sampler port.
 *
*/
static SOURCE_PORT: any;

/**
 * Represents the size of the [enum Source] enum.
 *
*/
static SOURCE_MAX: any;



}

