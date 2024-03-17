
/**
 * This texture class allows you to use a 3D texture created directly on the [RenderingDevice] as a texture for materials, meshes, etc.
 *
*/
declare class Texture3DRD extends Texture3D  {

  
/**
 * This texture class allows you to use a 3D texture created directly on the [RenderingDevice] as a texture for materials, meshes, etc.
 *
*/
  new(): Texture3DRD; 
  static "new"(): Texture3DRD 


/** The RID of the texture object created on the [RenderingDevice]. */
texture_rd_rid: RID;



  connect<T extends SignalsOf<Texture3DRD>>(signal: T, method: SignalFunction<Texture3DRD[T]>): number;






}

