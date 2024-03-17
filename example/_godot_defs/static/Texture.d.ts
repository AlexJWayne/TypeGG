
/**
 * [Texture] is the base class for all texture types. Common texture types are [Texture2D] and [ImageTexture]. See also [Image].
 *
*/
declare class Texture extends Resource  {

  
/**
 * [Texture] is the base class for all texture types. Common texture types are [Texture2D] and [ImageTexture]. See also [Image].
 *
*/
  new(): Texture; 
  static "new"(): Texture 





  connect<T extends SignalsOf<Texture>>(signal: T, method: SignalFunction<Texture[T]>): number;






}

