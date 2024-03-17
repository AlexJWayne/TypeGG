
/**
 * A [Texture2D] based on an [Image]. For an image to be displayed, an [ImageTexture] has to be created from it using the [method create_from_image] method:
 *
 * @example 
 * 
 * var image = Image.load_from_file("res://icon.svg")
 * var texture = ImageTexture.create_from_image(image)
 * $Sprite2D.texture = texture
 * @summary 
 * 
 *
 * This way, textures can be created at run-time by loading images both from within the editor and externally.
 *
 * **Warning:** Prefer to load imported textures with [method @GDScript.load] over loading them from within the filesystem dynamically with [method Image.load], as it may not work in exported projects:
 *
 * @example 
 * 
 * var texture = load("res://icon.svg")
 * $Sprite2D.texture = texture
 * @summary 
 * 
 *
 * This is because images have to be imported as a [CompressedTexture2D] first to be loaded with [method @GDScript.load]. If you'd still like to load an image file just like any other [Resource], import it as an [Image] resource instead, and then load it normally using the [method @GDScript.load] method.
 *
 * **Note:** The image can be retrieved from an imported texture using the [method Texture2D.get_image] method, which returns a copy of the image:
 *
 * @example 
 * 
 * var texture = load("res://icon.svg")
 * var image: Image = texture.get_image()
 * @summary 
 * 
 *
 * An [ImageTexture] is not meant to be operated from within the editor interface directly, and is mostly useful for rendering images on screen dynamically via code. If you need to generate images procedurally from within the editor, consider saving and importing images as custom texture resources implementing a new [EditorImportPlugin].
 *
 * **Note:** The maximum texture size is 16384×16384 pixels due to graphics hardware limitations.
 *
*/
declare class ImageTexture extends Texture2D  {

  
/**
 * A [Texture2D] based on an [Image]. For an image to be displayed, an [ImageTexture] has to be created from it using the [method create_from_image] method:
 *
 * @example 
 * 
 * var image = Image.load_from_file("res://icon.svg")
 * var texture = ImageTexture.create_from_image(image)
 * $Sprite2D.texture = texture
 * @summary 
 * 
 *
 * This way, textures can be created at run-time by loading images both from within the editor and externally.
 *
 * **Warning:** Prefer to load imported textures with [method @GDScript.load] over loading them from within the filesystem dynamically with [method Image.load], as it may not work in exported projects:
 *
 * @example 
 * 
 * var texture = load("res://icon.svg")
 * $Sprite2D.texture = texture
 * @summary 
 * 
 *
 * This is because images have to be imported as a [CompressedTexture2D] first to be loaded with [method @GDScript.load]. If you'd still like to load an image file just like any other [Resource], import it as an [Image] resource instead, and then load it normally using the [method @GDScript.load] method.
 *
 * **Note:** The image can be retrieved from an imported texture using the [method Texture2D.get_image] method, which returns a copy of the image:
 *
 * @example 
 * 
 * var texture = load("res://icon.svg")
 * var image: Image = texture.get_image()
 * @summary 
 * 
 *
 * An [ImageTexture] is not meant to be operated from within the editor interface directly, and is mostly useful for rendering images on screen dynamically via code. If you need to generate images procedurally from within the editor, consider saving and importing images as custom texture resources implementing a new [EditorImportPlugin].
 *
 * **Note:** The maximum texture size is 16384×16384 pixels due to graphics hardware limitations.
 *
*/
  new(): ImageTexture; 
  static "new"(): ImageTexture 



/** Creates a new [ImageTexture] and initializes it by allocating and setting the data from an [Image]. */
create_from_image(): ImageTexture;

/** Returns the format of the texture, one of [enum Image.Format]. */
get_format(): int;

/**
 * Replaces the texture's data with a new [Image]. This will re-allocate new memory for the texture.
 *
 * If you want to update the image, but don't need to change its parameters (format, size), use [method update] instead for better performance.
 *
*/
set_image(): void;

/** Resizes the texture to the specified dimensions. */
set_size_override(): void;

/**
 * Replaces the texture's data with a new [Image].
 *
 * **Note:** The texture has to be created using [method create_from_image] or initialized first with the [method set_image] method before it can be updated. The new image dimensions, format, and mipmaps configuration should match the existing texture's image configuration.
 *
 * Use this method over [method set_image] if you need to update the texture frequently, which is faster than allocating additional memory for a new texture each time.
 *
*/
update(): void;

  connect<T extends SignalsOf<ImageTexture>>(signal: T, method: SignalFunction<ImageTexture[T]>): number;






}

