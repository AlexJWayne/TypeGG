
/**
 * [EditorResourceConversionPlugin] is invoked when the context menu is brought up for a resource in the editor inspector. Relevant conversion plugins will appear as menu options to convert the given resource to a target type.
 *
 * Below shows an example of a basic plugin that will convert an [ImageTexture] to a [PortableCompressedTexture2D].
 *
 * @example 
 * 
 * 
 * extends EditorResourceConversionPlugin
 * func _handles(resource: Resource):
 *     return resource is ImageTexture
 * func _converts_to():
 *     return "PortableCompressedTexture2D"
 * func _convert(itex: Resource):
 *     var ptex = PortableCompressedTexture2D.new()
 *     ptex.create_from_image(itex.get_image(), PortableCompressedTexture2D.COMPRESSION_MODE_LOSSLESS)
 *     return ptex
 * 
 * @summary 
 * 
 *
 * To use an [EditorResourceConversionPlugin], register it using the [method EditorPlugin.add_resource_conversion_plugin] method first.
 *
*/
declare class EditorResourceConversionPlugin extends RefCounted  {

  
/**
 * [EditorResourceConversionPlugin] is invoked when the context menu is brought up for a resource in the editor inspector. Relevant conversion plugins will appear as menu options to convert the given resource to a target type.
 *
 * Below shows an example of a basic plugin that will convert an [ImageTexture] to a [PortableCompressedTexture2D].
 *
 * @example 
 * 
 * 
 * extends EditorResourceConversionPlugin
 * func _handles(resource: Resource):
 *     return resource is ImageTexture
 * func _converts_to():
 *     return "PortableCompressedTexture2D"
 * func _convert(itex: Resource):
 *     var ptex = PortableCompressedTexture2D.new()
 *     ptex.create_from_image(itex.get_image(), PortableCompressedTexture2D.COMPRESSION_MODE_LOSSLESS)
 *     return ptex
 * 
 * @summary 
 * 
 *
 * To use an [EditorResourceConversionPlugin], register it using the [method EditorPlugin.add_resource_conversion_plugin] method first.
 *
*/
  new(): EditorResourceConversionPlugin; 
  static "new"(): EditorResourceConversionPlugin 



/** Takes an input [Resource] and converts it to the type given in [method _converts_to]. The returned [Resource] is the result of the conversion, and the input [Resource] remains unchanged. */
protected _convert(): Resource;

/** Returns the class name of the target type of [Resource] that this plugin converts source resources to. */
protected _converts_to(): string;

/** Called to determine whether a particular [Resource] can be converted to the target resource type by this plugin. */
protected _handles(): boolean;

  connect<T extends SignalsOf<EditorResourceConversionPlugin>>(signal: T, method: SignalFunction<EditorResourceConversionPlugin[T]>): number;






}

