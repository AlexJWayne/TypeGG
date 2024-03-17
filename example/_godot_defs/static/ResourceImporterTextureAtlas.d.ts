
/**
 * This imports a collection of textures from a PNG image into an [AtlasTexture] or 2D [ArrayMesh]. This can be used to save memory when importing 2D animations from spritesheets. Texture atlases are only supported in 2D rendering, not 3D. See also [ResourceImporterTexture] and [ResourceImporterLayeredTexture].
 *
 * **Note:** [ResourceImporterTextureAtlas] does not handle importing [TileSetAtlasSource], which is created using the [TileSet] editor instead.
 *
*/
declare class ResourceImporterTextureAtlas extends ResourceImporter  {

  
/**
 * This imports a collection of textures from a PNG image into an [AtlasTexture] or 2D [ArrayMesh]. This can be used to save memory when importing 2D animations from spritesheets. Texture atlases are only supported in 2D rendering, not 3D. See also [ResourceImporterTexture] and [ResourceImporterLayeredTexture].
 *
 * **Note:** [ResourceImporterTextureAtlas] does not handle importing [TileSetAtlasSource], which is created using the [TileSet] editor instead.
 *
*/
  new(): ResourceImporterTextureAtlas; 
  static "new"(): ResourceImporterTextureAtlas 


/** Path to the atlas spritesheet. This [i]must[/i] be set to valid path to a PNG image. Otherwise, the atlas will fail to import. */
atlas_file: string;

/**
 * If `true`, discards empty areas from the atlas. This only affects final sprite positioning, not storage. See also [member trim_alpha_border_from_region].
 *
 * **Note:** Only effective if [member import_mode] is **Region**.
 *
*/
crop_to_region: boolean;

/**
 * **Region:** Imports the atlas in an [AtlasTexture] resource, which is rendered as a rectangle. This is fast to render, but transparent areas still have to be rendered if they can't be trimmed effectively by [member trim_alpha_border_from_region]. This can reduce performance when rendering large sprites on screen.
 *
 * **Mesh:** Imports the atlas as an [ArrayMesh] resource, keeping the original bitmap visible (but rendered as a polygon). This can be used to reduce fill rate when rendering large transparent sprites, at the cost of slower rendering if there are little to no transparent areas in the sprite.
 *
*/
import_mode: int;

/**
 * If `true`, trims the region to exclude fully transparent pixels using a clipping rectangle (which is never rotated). This can be used to save memory. See also [member crop_to_region].
 *
 * **Note:** Only effective if [member import_mode] is **Region**.
 *
*/
trim_alpha_border_from_region: boolean;



  connect<T extends SignalsOf<ResourceImporterTextureAtlas>>(signal: T, method: SignalFunction<ResourceImporterTextureAtlas[T]>): number;






}

