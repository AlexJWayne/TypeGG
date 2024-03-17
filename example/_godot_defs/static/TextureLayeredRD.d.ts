
/**
 * Base class for [Texture2DArrayRD], [TextureCubemapRD] and [TextureCubemapArrayRD]. Cannot be used directly, but contains all the functions necessary for accessing the derived resource types.
 *
*/
declare class TextureLayeredRD extends TextureLayered  {

  
/**
 * Base class for [Texture2DArrayRD], [TextureCubemapRD] and [TextureCubemapArrayRD]. Cannot be used directly, but contains all the functions necessary for accessing the derived resource types.
 *
*/
  new(): TextureLayeredRD; 
  static "new"(): TextureLayeredRD 


/** The RID of the texture object created on the [RenderingDevice]. */
texture_rd_rid: RID;



  connect<T extends SignalsOf<TextureLayeredRD>>(signal: T, method: SignalFunction<TextureLayeredRD[T]>): number;






}

