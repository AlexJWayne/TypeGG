
/**
 * Translated to `uniform sampler2DArray` in the shader language.
 *
*/
declare class VisualShaderNodeTexture2DArray extends VisualShaderNodeSample3D  {

  
/**
 * Translated to `uniform sampler2DArray` in the shader language.
 *
*/
  new(): VisualShaderNodeTexture2DArray; 
  static "new"(): VisualShaderNodeTexture2DArray 


/** A source texture array. Used if [member VisualShaderNodeSample3D.source] is set to [constant VisualShaderNodeSample3D.SOURCE_TEXTURE]. */
texture_array: Texture2DArray;



  connect<T extends SignalsOf<VisualShaderNodeTexture2DArray>>(signal: T, method: SignalFunction<VisualShaderNodeTexture2DArray[T]>): number;






}

