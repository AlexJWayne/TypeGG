
/**
 * This object manages all 3D rendering buffers for the rendering device based renderers. An instance of this object is created for every viewport that has 3D rendering enabled.
 *
 * All buffers are organized in **contexts**. The default context is called **render_buffers** and can contain amongst others the color buffer, depth buffer, velocity buffers, VRS density map and MSAA variants of these buffers.
 *
 * Buffers are only guaranteed to exist during rendering of the viewport.
 *
 * **Note:** this is an internal rendering server object only exposed for GDExtension plugins.
 *
*/
declare class RenderSceneBuffersRD extends RenderSceneBuffers  {

  
/**
 * This object manages all 3D rendering buffers for the rendering device based renderers. An instance of this object is created for every viewport that has 3D rendering enabled.
 *
 * All buffers are organized in **contexts**. The default context is called **render_buffers** and can contain amongst others the color buffer, depth buffer, velocity buffers, VRS density map and MSAA variants of these buffers.
 *
 * Buffers are only guaranteed to exist during rendering of the viewport.
 *
 * **Note:** this is an internal rendering server object only exposed for GDExtension plugins.
 *
*/
  new(): RenderSceneBuffersRD; 
  static "new"(): RenderSceneBuffersRD 



/** Frees all buffers related to this context. */
clear_context(): void;

/** Create a new texture with the given definition and cache this under the given name. Will return the existing texture if it already exists. */
create_texture(): RID;

/** Create a new texture using the given format and view and cache this under the given name. Will return the existing texture if it already exists. */
create_texture_from_format(): RID;

/** Create a new texture view for an existing texture and cache this under the given view_name. Will return the existing teture view if it already exists. Will error if the source texture doesn't exist. */
create_texture_view(): RID;

/** Returns the specified layer from the color texture we are rendering 3D content to. */
get_color_layer(): RID;

/** Returns the color texture we are rendering 3D content to. If multiview is used this will be a texture array with all views. */
get_color_texture(): RID;

/** Returns the specified layer from the depth texture we are rendering 3D content to. */
get_depth_layer(): RID;

/** Returns the depth texture we are rendering 3D content to. If multiview is used this will be a texture array with all views. */
get_depth_texture(): RID;

/** Returns the internal size of the render buffer (size before upscaling) with which textures are created by default. */
get_internal_size(): Vector2i;

/** Returns the render target associated with this buffers object. */
get_render_target(): RID;

/** Returns a cached texture with this name. */
get_texture(): RID;

/** Returns the texture format information with which a cached texture was created. */
get_texture_format(): RDTextureFormat;

/** Returns a specific slice (layer or mipmap) for a cached texture. */
get_texture_slice(): RID;

/** Returns the texture size of a given slice of a cached texture. */
get_texture_slice_size(): Vector2i;

/** Returns a specific view of a slice (layer or mipmap) for a cached texture. */
get_texture_slice_view(): RID;

/** Returns [code]true[/code] if TAA is enabled. */
get_use_taa(): boolean;

/** Returns the specified layer from the velocity texture we are rendering 3D content to. */
get_velocity_layer(): RID;

/** Returns the velocity texture we are rendering 3D content to. If multiview is used this will be a texture array with all views. */
get_velocity_texture(): RID;

/** Returns the view count for the associated viewport. */
get_view_count(): int;

/** Returns [code]true[/code] if a cached texture exists for this name. */
has_texture(): boolean;

  connect<T extends SignalsOf<RenderSceneBuffersRD>>(signal: T, method: SignalFunction<RenderSceneBuffersRD[T]>): number;






}

