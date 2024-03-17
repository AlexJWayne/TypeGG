
/**
 * The rendering server is the API backend for everything visible. The whole scene system mounts on it to display. The rendering server is completely opaque: the internals are entirely implementation-specific and cannot be accessed.
 *
 * The rendering server can be used to bypass the scene/[Node] system entirely. This can improve performance in cases where the scene system is the bottleneck, but won't improve performance otherwise (for instance, if the GPU is already fully utilized).
 *
 * Resources are created using the `*_create` functions. These functions return [RID]s which are not references to the objects themselves, but opaque **pointers** towards these objects.
 *
 * All objects are drawn to a viewport. You can use the [Viewport] attached to the [SceneTree] or you can create one yourself with [method viewport_create]. When using a custom scenario or canvas, the scenario or canvas needs to be attached to the viewport using [method viewport_set_scenario] or [method viewport_attach_canvas].
 *
 * **Scenarios:** In 3D, all visual objects must be associated with a scenario. The scenario is a visual representation of the world. If accessing the rendering server from a running game, the scenario can be accessed from the scene tree from any [Node3D] node with [method Node3D.get_world_3d]. Otherwise, a scenario can be created with [method scenario_create].
 *
 * Similarly, in 2D, a canvas is needed to draw all canvas items.
 *
 * **3D:** In 3D, all visible objects are comprised of a resource and an instance. A resource can be a mesh, a particle system, a light, or any other 3D object. In order to be visible resources must be attached to an instance using [method instance_set_base]. The instance must also be attached to the scenario using [method instance_set_scenario] in order to be visible. RenderingServer methods that don't have a prefix are usually 3D-specific (but not always).
 *
 * **2D:** In 2D, all visible objects are some form of canvas item. In order to be visible, a canvas item needs to be the child of a canvas attached to a viewport, or it needs to be the child of another canvas item that is eventually attached to the canvas. 2D-specific RenderingServer methods generally start with `canvas_*`.
 *
 * **Headless mode:** Starting the engine with the `--headless` [url=$DOCS_URL/tutorials/editor/command_line_tutorial.html]command line argument[/url] disables all rendering and window management functions. Most functions from [RenderingServer] will return dummy values in this case.
 *
*/
declare class RenderingServerClass extends Object  {

  
/**
 * The rendering server is the API backend for everything visible. The whole scene system mounts on it to display. The rendering server is completely opaque: the internals are entirely implementation-specific and cannot be accessed.
 *
 * The rendering server can be used to bypass the scene/[Node] system entirely. This can improve performance in cases where the scene system is the bottleneck, but won't improve performance otherwise (for instance, if the GPU is already fully utilized).
 *
 * Resources are created using the `*_create` functions. These functions return [RID]s which are not references to the objects themselves, but opaque **pointers** towards these objects.
 *
 * All objects are drawn to a viewport. You can use the [Viewport] attached to the [SceneTree] or you can create one yourself with [method viewport_create]. When using a custom scenario or canvas, the scenario or canvas needs to be attached to the viewport using [method viewport_set_scenario] or [method viewport_attach_canvas].
 *
 * **Scenarios:** In 3D, all visual objects must be associated with a scenario. The scenario is a visual representation of the world. If accessing the rendering server from a running game, the scenario can be accessed from the scene tree from any [Node3D] node with [method Node3D.get_world_3d]. Otherwise, a scenario can be created with [method scenario_create].
 *
 * Similarly, in 2D, a canvas is needed to draw all canvas items.
 *
 * **3D:** In 3D, all visible objects are comprised of a resource and an instance. A resource can be a mesh, a particle system, a light, or any other 3D object. In order to be visible resources must be attached to an instance using [method instance_set_base]. The instance must also be attached to the scenario using [method instance_set_scenario] in order to be visible. RenderingServer methods that don't have a prefix are usually 3D-specific (but not always).
 *
 * **2D:** In 2D, all visible objects are some form of canvas item. In order to be visible, a canvas item needs to be the child of a canvas attached to a viewport, or it needs to be the child of another canvas item that is eventually attached to the canvas. 2D-specific RenderingServer methods generally start with `canvas_*`.
 *
 * **Headless mode:** Starting the engine with the `--headless` [url=$DOCS_URL/tutorials/editor/command_line_tutorial.html]command line argument[/url] disables all rendering and window management functions. Most functions from [RenderingServer] will return dummy values in this case.
 *
*/
  new(): RenderingServerClass; 
  static "new"(): RenderingServerClass 


/** If [code]false[/code], disables rendering completely, but the engine logic is still being processed. You can call [method force_draw] to draw a frame even with rendering disabled. */
render_loop_enabled: boolean;

/** Bakes the material data of the Mesh passed in the [param base] parameter with optional [param material_overrides] to a set of [Image]s of size [param image_size]. Returns an array of [Image]s containing material properties as specified in [enum BakeChannels]. */
bake_render_uv2(): Image[];

/** As the RenderingServer actual logic may run on an separate thread, accessing its internals from the main (or any other) thread will result in errors. To make it easier to run code that can safely access the rendering internals (such as [RenderingDevice] and similar RD classes), push a callable via this function so it will be executed on the render thread. */
call_on_render_thread(): void;

/**
 * Creates a camera attributes object and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `camera_attributes_` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
 * **Note:** The equivalent resource is [CameraAttributes].
 *
*/
camera_attributes_create(): RID;

/** Sets the parameters to use with the auto-exposure effect. These parameters take on the same meaning as their counterparts in [CameraAttributes] and [CameraAttributesPractical]. */
camera_attributes_set_auto_exposure(): void;

/** Sets the parameters to use with the DOF blur effect. These parameters take on the same meaning as their counterparts in [CameraAttributesPractical]. */
camera_attributes_set_dof_blur(): void;

/** Sets the shape of the DOF bokeh pattern. Different shapes may be used to achieve artistic effect, or to meet performance targets. For more detail on available options see [enum DOFBokehShape]. */
camera_attributes_set_dof_blur_bokeh_shape(): void;

/** Sets the quality level of the DOF blur effect to one of the options in [enum DOFBlurQuality]. [param use_jitter] can be used to jitter samples taken during the blur pass to hide artifacts at the cost of looking more fuzzy. */
camera_attributes_set_dof_blur_quality(): void;

/**
 * Sets the exposure values that will be used by the renderers. The normalization amount is used to bake a given Exposure Value (EV) into rendering calculations to reduce the dynamic range of the scene.
 *
 * The normalization factor can be calculated from exposure value (EV100) as follows:
 *
 * @example 
 * 
 * func get_exposure_normalization(float ev100):
 *     			    return 1.0 / (pow(2.0, ev100) * 1.2)
 * @summary 
 * 
 *
 * The exposure value can be calculated from aperture (in f-stops), shutter speed (in seconds), and sensitivity (in ISO) as follows:
 *
 * @example 
 * 
 * func get_exposure(float aperture, float shutter_speed, float sensitivity):
 *     return log2((aperture * aperture) / shutterSpeed * (100.0 / sensitivity))
 * @summary 
 * 
 *
*/
camera_attributes_set_exposure(): void;

/**
 * Creates a 3D camera and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `camera_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
 * **Note:** The equivalent node is [Camera3D].
 *
*/
camera_create(): RID;

/** Sets the camera_attributes created with [method camera_attributes_create] to the given camera. */
camera_set_camera_attributes(): void;

/** Sets the cull mask associated with this camera. The cull mask describes which 3D layers are rendered by this camera. Equivalent to [member Camera3D.cull_mask]. */
camera_set_cull_mask(): void;

/** Sets the environment used by this camera. Equivalent to [member Camera3D.environment]. */
camera_set_environment(): void;

/** Sets camera to use frustum projection. This mode allows adjusting the [param offset] argument to create "tilted frustum" effects. */
camera_set_frustum(): void;

/** Sets camera to use orthogonal projection, also known as orthographic projection. Objects remain the same size on the screen no matter how far away they are. */
camera_set_orthogonal(): void;

/** Sets camera to use perspective projection. Objects on the screen becomes smaller when they are far away. */
camera_set_perspective(): void;

/** Sets [Transform3D] of camera. */
camera_set_transform(): void;

/** If [code]true[/code], preserves the horizontal aspect ratio which is equivalent to [constant Camera3D.KEEP_WIDTH]. If [code]false[/code], preserves the vertical aspect ratio which is equivalent to [constant Camera3D.KEEP_HEIGHT]. */
camera_set_use_vertical_aspect(): void;

/**
 * Creates a canvas and returns the assigned [RID]. It can be accessed with the RID that is returned. This RID will be used in all `canvas_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
 * Canvas has no [Resource] or [Node] equivalent.
 *
*/
canvas_create(): RID;

/** Subsequent drawing commands will be ignored unless they fall within the specified animation slice. This is a faster way to implement animations that loop on background rather than redrawing constantly. */
canvas_item_add_animation_slice(): void;

/** Draws a circle on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_circle]. */
canvas_item_add_circle(): void;

/** If [param ignore] is [code]true[/code], ignore clipping on items drawn with this canvas item until this is called again with [param ignore] set to false. */
canvas_item_add_clip_ignore(): void;

/** See also [method CanvasItem.draw_lcd_texture_rect_region]. */
canvas_item_add_lcd_texture_rect_region(): void;

/** Draws a line on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_line]. */
canvas_item_add_line(): void;

/** Draws a mesh created with [method mesh_create] with given [param transform], [param modulate] color, and [param texture]. This is used internally by [MeshInstance2D]. */
canvas_item_add_mesh(): void;

/** See also [method CanvasItem.draw_msdf_texture_rect_region]. */
canvas_item_add_msdf_texture_rect_region(): void;

/** Draws a 2D multiline on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_multiline] and [method CanvasItem.draw_multiline_colors]. */
canvas_item_add_multiline(): void;

/** Draws a 2D [MultiMesh] on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_multimesh]. */
canvas_item_add_multimesh(): void;

/** Draws a nine-patch rectangle on the [CanvasItem] pointed to by the [param item] [RID]. */
canvas_item_add_nine_patch(): void;

/** Draws particles on the [CanvasItem] pointed to by the [param item] [RID]. */
canvas_item_add_particles(): void;

/** Draws a 2D polygon on the [CanvasItem] pointed to by the [param item] [RID]. If you need more flexibility (such as being able to use bones), use [method canvas_item_add_triangle_array] instead. See also [method CanvasItem.draw_polygon]. */
canvas_item_add_polygon(): void;

/** Draws a 2D polyline on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_polyline] and [method CanvasItem.draw_polyline_colors]. */
canvas_item_add_polyline(): void;

/** Draws a 2D primitive on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_primitive]. */
canvas_item_add_primitive(): void;

/** Draws a rectangle on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_rect]. */
canvas_item_add_rect(): void;

/** Sets a [Transform2D] that will be used to transform subsequent canvas item commands. */
canvas_item_add_set_transform(): void;

/** Draws a 2D textured rectangle on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_texture_rect] and [method Texture2D.draw_rect]. */
canvas_item_add_texture_rect(): void;

/** Draws the specified region of a 2D textured rectangle on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_texture_rect_region] and [method Texture2D.draw_rect_region]. */
canvas_item_add_texture_rect_region(): void;

/**
 * Draws a triangle array on the [CanvasItem] pointed to by the [param item] [RID]. This is internally used by [Line2D] and [StyleBoxFlat] for rendering. [method canvas_item_add_triangle_array] is highly flexible, but more complex to use than [method canvas_item_add_polygon].
 *
 * **Note:** [param count] is unused and can be left unspecified.
 *
*/
canvas_item_add_triangle_array(): void;

/** Clears the [CanvasItem] and removes all commands in it. */
canvas_item_clear(): void;

/**
 * Creates a new CanvasItem instance and returns its [RID]. It can be accessed with the RID that is returned. This RID will be used in all `canvas_item_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
 * **Note:** The equivalent node is [CanvasItem].
 *
*/
canvas_item_create(): RID;

/**
 * Sets the canvas group mode used during 2D rendering for the canvas item specified by the [param item] RID. For faster but more limited clipping, use [method canvas_item_set_clip] instead.
 *
 * **Note:** The equivalent node functionality is found in [CanvasGroup] and [member CanvasItem.clip_children].
 *
*/
canvas_item_set_canvas_group_mode(): void;

/**
 * If [param clip] is `true`, makes the canvas item specified by the [param item] RID not draw anything outside of its rect's coordinates. This clipping is fast, but works only with axis-aligned rectangles. This means that rotation is ignored by the clipping rectangle. For more advanced clipping shapes, use [method canvas_item_set_canvas_group_mode] instead.
 *
 * **Note:** The equivalent node functionality is found in [member Label.clip_text], [RichTextLabel] (always enabled) and more.
 *
*/
canvas_item_set_clip(): void;

/** Sets the [CanvasItem] to copy a rect to the backbuffer. */
canvas_item_set_copy_to_backbuffer(): void;

/** If [param use_custom_rect] is [code]true[/code], sets the custom visibility rectangle (used for culling) to [param rect] for the canvas item specified by [param item]. Setting a custom visibility rect can reduce CPU load when drawing lots of 2D instances. If [param use_custom_rect] is [code]false[/code], automatically computes a visibility rectangle based on the canvas item's draw commands. */
canvas_item_set_custom_rect(): void;

/** Sets the default texture filter mode for the canvas item specified by the [param item] RID. Equivalent to [member CanvasItem.texture_filter]. */
canvas_item_set_default_texture_filter(): void;

/** Sets the default texture repeat mode for the canvas item specified by the [param item] RID. Equivalent to [member CanvasItem.texture_repeat]. */
canvas_item_set_default_texture_repeat(): void;

/** If [param enabled] is [code]true[/code], enables multichannel signed distance field rendering mode for the canvas item specified by the [param item] RID. This is meant to be used for font rendering, or with specially generated images using [url=https://github.com/Chlumsky/msdfgen]msdfgen[/url]. */
canvas_item_set_distance_field_mode(): void;

/** If [param enabled] is [code]true[/code], draws the canvas item specified by the [param item] RID behind its parent. Equivalent to [member CanvasItem.show_behind_parent]. */
canvas_item_set_draw_behind_parent(): void;

/** Sets the index for the [CanvasItem]. */
canvas_item_set_draw_index(): void;

/** Sets the light [param mask] for the canvas item specified by the [param item] RID. Equivalent to [member CanvasItem.light_mask]. */
canvas_item_set_light_mask(): void;

/** Sets a new [param material] to the canvas item specified by the [param item] RID. Equivalent to [member CanvasItem.material]. */
canvas_item_set_material(): void;

/** Multiplies the color of the canvas item specified by the [param item] RID, while affecting its children. See also [method canvas_item_set_self_modulate]. Equivalent to [member CanvasItem.modulate]. */
canvas_item_set_modulate(): void;

/** Sets a parent [CanvasItem] to the [CanvasItem]. The item will inherit transform, modulation and visibility from its parent, like [CanvasItem] nodes in the scene tree. */
canvas_item_set_parent(): void;

/** Multiplies the color of the canvas item specified by the [param item] RID, without affecting its children. See also [method canvas_item_set_modulate]. Equivalent to [member CanvasItem.self_modulate]. */
canvas_item_set_self_modulate(): void;

/** If [param enabled] is [code]true[/code], child nodes with the lowest Y position are drawn before those with a higher Y position. Y-sorting only affects children that inherit from the canvas item specified by the [param item] RID, not the canvas item itself. Equivalent to [member CanvasItem.y_sort_enabled]. */
canvas_item_set_sort_children_by_y(): void;

/** Sets the [param transform] of the canvas item specified by the [param item] RID. This affects where and how the item will be drawn. Child canvas items' transforms are multiplied by their parent's transform. Equivalent to [member Node2D.transform]. */
canvas_item_set_transform(): void;

/** Sets if the [CanvasItem] uses its parent's material. */
canvas_item_set_use_parent_material(): void;

/** Sets the rendering visibility layer associated with this [CanvasItem]. Only [Viewport] nodes with a matching rendering mask will render this [CanvasItem]. */
canvas_item_set_visibility_layer(): void;

/**
 * Sets the given [CanvasItem] as visibility notifier. [param area] defines the area of detecting visibility. [param enter_callable] is called when the [CanvasItem] enters the screen, [param exit_callable] is called when the [CanvasItem] exits the screen. If [param enable] is `false`, the item will no longer function as notifier.
 *
 * This method can be used to manually mimic [VisibleOnScreenNotifier2D].
 *
*/
canvas_item_set_visibility_notifier(): void;

/** Sets the visibility of the [CanvasItem]. */
canvas_item_set_visible(): void;

/** If this is enabled, the Z index of the parent will be added to the children's Z index. */
canvas_item_set_z_as_relative_to_parent(): void;

/** Sets the [CanvasItem]'s Z index, i.e. its draw order (lower indexes are drawn first). */
canvas_item_set_z_index(): void;

/** Attaches the canvas light to the canvas. Removes it from its previous canvas. */
canvas_light_attach_to_canvas(): void;

/**
 * Creates a canvas light and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `canvas_light_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
 * **Note:** The equivalent node is [Light2D].
 *
*/
canvas_light_create(): RID;

/** Attaches a light occluder to the canvas. Removes it from its previous canvas. */
canvas_light_occluder_attach_to_canvas(): void;

/**
 * Creates a light occluder and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `canvas_light_occluder_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
 * **Note:** The equivalent node is [LightOccluder2D].
 *
*/
canvas_light_occluder_create(): RID;

/** No documentation provided. */
canvas_light_occluder_set_as_sdf_collision(): void;

/** Enables or disables light occluder. */
canvas_light_occluder_set_enabled(): void;

/** The light mask. See [LightOccluder2D] for more information on light masks. */
canvas_light_occluder_set_light_mask(): void;

/** Sets a light occluder's polygon. */
canvas_light_occluder_set_polygon(): void;

/** Sets a light occluder's [Transform2D]. */
canvas_light_occluder_set_transform(): void;

/** Sets the blend mode for the given canvas light. See [enum CanvasLightBlendMode] for options. Equivalent to [member Light2D.blend_mode]. */
canvas_light_set_blend_mode(): void;

/** Sets the color for a light. */
canvas_light_set_color(): void;

/** Enables or disables a canvas light. */
canvas_light_set_enabled(): void;

/** Sets a canvas light's energy. */
canvas_light_set_energy(): void;

/** Sets a canvas light's height. */
canvas_light_set_height(): void;

/** The light mask. See [LightOccluder2D] for more information on light masks. */
canvas_light_set_item_cull_mask(): void;

/** The binary mask used to determine which layers this canvas light's shadows affects. See [LightOccluder2D] for more information on light masks. */
canvas_light_set_item_shadow_cull_mask(): void;

/** The layer range that gets rendered with this light. */
canvas_light_set_layer_range(): void;

/** The mode of the light, see [enum CanvasLightMode] constants. */
canvas_light_set_mode(): void;

/** Sets the color of the canvas light's shadow. */
canvas_light_set_shadow_color(): void;

/** Enables or disables the canvas light's shadow. */
canvas_light_set_shadow_enabled(): void;

/** Sets the canvas light's shadow's filter, see [enum CanvasLightShadowFilter] constants. */
canvas_light_set_shadow_filter(): void;

/** Smoothens the shadow. The lower, the smoother. */
canvas_light_set_shadow_smooth(): void;

/** Sets the texture to be used by a [PointLight2D]. Equivalent to [member PointLight2D.texture]. */
canvas_light_set_texture(): void;

/** Sets the offset of a [PointLight2D]'s texture. Equivalent to [member PointLight2D.offset]. */
canvas_light_set_texture_offset(): void;

/** Sets the scale factor of a [PointLight2D]'s texture. Equivalent to [member PointLight2D.texture_scale]. */
canvas_light_set_texture_scale(): void;

/** Sets the canvas light's [Transform2D]. */
canvas_light_set_transform(): void;

/** Sets the Z range of objects that will be affected by this light. Equivalent to [member Light2D.range_z_min] and [member Light2D.range_z_max]. */
canvas_light_set_z_range(): void;

/**
 * Creates a new light occluder polygon and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `canvas_occluder_polygon_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
 * **Note:** The equivalent resource is [OccluderPolygon2D].
 *
*/
canvas_occluder_polygon_create(): RID;

/** Sets an occluder polygons cull mode. See [enum CanvasOccluderPolygonCullMode] constants. */
canvas_occluder_polygon_set_cull_mode(): void;

/** Sets the shape of the occluder polygon. */
canvas_occluder_polygon_set_shape(): void;

/** No documentation provided. */
canvas_set_disable_scale(): void;

/** A copy of the canvas item will be drawn with a local offset of the mirroring [Vector2]. */
canvas_set_item_mirroring(): void;

/** Modulates all colors in the given canvas. */
canvas_set_modulate(): void;

/** Sets the [member ProjectSettings.rendering/2d/shadow_atlas/size] to use for [Light2D] shadow rendering (in pixels). The value is rounded up to the nearest power of 2. */
canvas_set_shadow_texture_size(): void;

/**
 * Creates a canvas texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `canvas_texture_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method. See also [method texture_2d_create].
 *
 * **Note:** The equivalent resource is [CanvasTexture] and is only meant to be used in 2D rendering, not 3D.
 *
*/
canvas_texture_create(): RID;

/** Sets the [param channel]'s [param texture] for the canvas texture specified by the [param canvas_texture] RID. Equivalent to [member CanvasTexture.diffuse_texture], [member CanvasTexture.normal_texture] and [member CanvasTexture.specular_texture]. */
canvas_texture_set_channel(): void;

/** Sets the [param base_color] and [param shininess] to use for the canvas texture specified by the [param canvas_texture] RID. Equivalent to [member CanvasTexture.specular_color] and [member CanvasTexture.specular_shininess]. */
canvas_texture_set_shading_parameters(): void;

/** Sets the texture [param filter] mode to use for the canvas texture specified by the [param canvas_texture] RID. */
canvas_texture_set_texture_filter(): void;

/** Sets the texture [param repeat] mode to use for the canvas texture specified by the [param canvas_texture] RID. */
canvas_texture_set_texture_repeat(): void;

/**
 * Creates a RenderingDevice that can be used to do draw and compute operations on a separate thread. Cannot draw to the screen nor share data with the global RenderingDevice.
 *
 * **Note:** When using the OpenGL backend or when running in headless mode, this function always returns `null`.
 *
*/
create_local_rendering_device(): RenderingDevice;

/**
 * Creates a decal and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `decal_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
 * To place in a scene, attach this decal to an instance using [method instance_set_base] using the returned RID.
 *
 * **Note:** The equivalent node is [Decal].
 *
*/
decal_create(): RID;

/** Sets the [param albedo_mix] in the decal specified by the [param decal] RID. Equivalent to [member Decal.albedo_mix]. */
decal_set_albedo_mix(): void;

/** Sets the cull [param mask] in the decal specified by the [param decal] RID. Equivalent to [member Decal.cull_mask]. */
decal_set_cull_mask(): void;

/** Sets the distance fade parameters in the decal specified by the [param decal] RID. Equivalent to [member Decal.distance_fade_enabled], [member Decal.distance_fade_begin] and [member Decal.distance_fade_length]. */
decal_set_distance_fade(): void;

/** Sets the emission [param energy] in the decal specified by the [param decal] RID. Equivalent to [member Decal.emission_energy]. */
decal_set_emission_energy(): void;

/** Sets the upper fade ([param above]) and lower fade ([param below]) in the decal specified by the [param decal] RID. Equivalent to [member Decal.upper_fade] and [member Decal.lower_fade]. */
decal_set_fade(): void;

/** Sets the color multiplier in the decal specified by the [param decal] RID to [param color]. Equivalent to [member Decal.modulate]. */
decal_set_modulate(): void;

/** Sets the normal [param fade] in the decal specified by the [param decal] RID. Equivalent to [member Decal.normal_fade]. */
decal_set_normal_fade(): void;

/** Sets the [param size] of the decal specified by the [param decal] RID. Equivalent to [member Decal.size]. */
decal_set_size(): void;

/** Sets the [param texture] in the given texture [param type] slot for the specified decal. Equivalent to [method Decal.set_texture]. */
decal_set_texture(): void;

/** Sets the texture [param filter] mode to use when rendering decals. This parameter is global and cannot be set on a per-decal basis. */
decals_set_filter(): void;

/**
 * Creates a directional light and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID can be used in most `light_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
 * To place in a scene, attach this directional light to an instance using [method instance_set_base] using the returned RID.
 *
 * **Note:** The equivalent node is [DirectionalLight3D].
 *
*/
directional_light_create(): RID;

/** Sets the [param size] of the directional light shadows in 3D. See also [member ProjectSettings.rendering/lights_and_shadows/directional_shadow/size]. This parameter is global and cannot be set on a per-viewport basis. */
directional_shadow_atlas_set_size(): void;

/** Sets the filter [param quality] for directional light shadows in 3D. See also [member ProjectSettings.rendering/lights_and_shadows/directional_shadow/soft_shadow_filter_quality]. This parameter is global and cannot be set on a per-viewport basis. */
directional_soft_shadow_filter_set_quality(): void;

/**
 * Generates and returns an [Image] containing the radiance map for the specified [param environment] RID's sky. This supports built-in sky material and custom sky shaders. If [param bake_irradiance] is `true`, the irradiance map is saved instead of the radiance map. The radiance map is used to render reflected light, while the irradiance map is used to render ambient light. See also [method sky_bake_panorama].
 *
 * **Note:** The image is saved in linear color space without any tonemapping performed, which means it will look too dark if viewed directly in an image editor.
 *
 * **Note:** [param size] should be a 2:1 aspect ratio for the generated panorama to have square pixels. For radiance maps, there is no point in using a height greater than [member Sky.radiance_size], as it won't increase detail. Irradiance maps only contain low-frequency data, so there is usually no point in going past a size of 128×64 pixels when saving an irradiance map.
 *
*/
environment_bake_panorama(): Image;

/**
 * Creates an environment and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `environment_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
 * **Note:** The equivalent resource is [Environment].
 *
*/
environment_create(): RID;

/** If [param enable] is [code]true[/code], enables bicubic upscaling for glow which improves quality at the cost of performance. Equivalent to [member ProjectSettings.rendering/environment/glow/upscale_mode]. */
environment_glow_set_use_bicubic_upscale(): void;

/** Sets the values to be used with the "adjustments" post-process effect. See [Environment] for more details. */
environment_set_adjustment(): void;

/** Sets the values to be used for ambient light rendering. See [Environment] for more details. */
environment_set_ambient_light(): void;

/** Sets the environment's background mode. Equivalent to [member Environment.background_mode]. */
environment_set_background(): void;

/** Color displayed for clear areas of the scene. Only effective if using the [constant ENV_BG_COLOR] background mode. */
environment_set_bg_color(): void;

/** Sets the intensity of the background color. */
environment_set_bg_energy(): void;

/** Sets the maximum layer to use if using Canvas background mode. */
environment_set_canvas_max_layer(): void;

/** Configures fog for the specified environment RID. See [code]fog_*[/code] properties in [Environment] for more information. */
environment_set_fog(): void;

/** Configures glow for the specified environment RID. See [code]glow_*[/code] properties in [Environment] for more information. */
environment_set_glow(): void;

/** Configures signed distance field global illumination for the specified environment RID. See [code]sdfgi_*[/code] properties in [Environment] for more information. */
environment_set_sdfgi(): void;

/** Sets the number of frames to use for converging signed distance field global illumination. Equivalent to [member ProjectSettings.rendering/global_illumination/sdfgi/frames_to_converge]. */
environment_set_sdfgi_frames_to_converge(): void;

/** Sets the update speed for dynamic lights' indirect lighting when computing signed distance field global illumination. Equivalent to [member ProjectSettings.rendering/global_illumination/sdfgi/frames_to_update_lights]. */
environment_set_sdfgi_frames_to_update_light(): void;

/** Sets the number of rays to throw per frame when computing signed distance field global illumination. Equivalent to [member ProjectSettings.rendering/global_illumination/sdfgi/probe_ray_count]. */
environment_set_sdfgi_ray_count(): void;

/** Sets the [Sky] to be used as the environment's background when using [i]BGMode[/i] sky. Equivalent to [member Environment.sky]. */
environment_set_sky(): void;

/** Sets a custom field of view for the background [Sky]. Equivalent to [member Environment.sky_custom_fov]. */
environment_set_sky_custom_fov(): void;

/** Sets the rotation of the background [Sky] expressed as a [Basis]. Equivalent to [member Environment.sky_rotation], where the rotation vector is used to construct the [Basis]. */
environment_set_sky_orientation(): void;

/** Sets the variables to be used with the screen-space ambient occlusion (SSAO) post-process effect. See [Environment] for more details. */
environment_set_ssao(): void;

/** Sets the quality level of the screen-space ambient occlusion (SSAO) post-process effect. See [Environment] for more details. */
environment_set_ssao_quality(): void;

/** Sets the quality level of the screen-space indirect lighting (SSIL) post-process effect. See [Environment] for more details. */
environment_set_ssil_quality(): void;

/** Sets the variables to be used with the screen-space reflections (SSR) post-process effect. See [Environment] for more details. */
environment_set_ssr(): void;

/** No documentation provided. */
environment_set_ssr_roughness_quality(): void;

/** Sets the variables to be used with the "tonemap" post-process effect. See [Environment] for more details. */
environment_set_tonemap(): void;

/** Sets the variables to be used with the volumetric fog post-process effect. See [Environment] for more details. */
environment_set_volumetric_fog(): void;

/** Enables filtering of the volumetric fog scattering buffer. This results in much smoother volumes with very few under-sampling artifacts. */
environment_set_volumetric_fog_filter_active(): void;

/** Sets the resolution of the volumetric fog's froxel buffer. [param size] is modified by the screen's aspect ratio and then used to set the width and height of the buffer. While [param depth] is directly used to set the depth of the buffer. */
environment_set_volumetric_fog_volume_size(): void;

/**
 * Creates a new fog volume and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `fog_volume_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
 * **Note:** The equivalent node is [FogVolume].
 *
*/
fog_volume_create(): RID;

/** Sets the [Material] of the fog volume. Can be either a [FogMaterial] or a custom [ShaderMaterial]. */
fog_volume_set_material(): void;

/** Sets the shape of the fog volume to either [constant RenderingServer.FOG_VOLUME_SHAPE_ELLIPSOID], [constant RenderingServer.FOG_VOLUME_SHAPE_CONE], [constant RenderingServer.FOG_VOLUME_SHAPE_CYLINDER], [constant RenderingServer.FOG_VOLUME_SHAPE_BOX] or [constant RenderingServer.FOG_VOLUME_SHAPE_WORLD]. */
fog_volume_set_shape(): void;

/** Sets the size of the fog volume when shape is [constant RenderingServer.FOG_VOLUME_SHAPE_ELLIPSOID], [constant RenderingServer.FOG_VOLUME_SHAPE_CONE], [constant RenderingServer.FOG_VOLUME_SHAPE_CYLINDER] or [constant RenderingServer.FOG_VOLUME_SHAPE_BOX]. */
fog_volume_set_size(): void;

/** Forces redrawing of all viewports at once. */
force_draw(): void;

/** Forces a synchronization between the CPU and GPU, which may be required in certain cases. Only call this when needed, as CPU-GPU synchronization has a performance cost. */
force_sync(): void;

/** Tries to free an object in the RenderingServer. To avoid memory leaks, this should be called after using an object as memory management does not occur automatically when using RenderingServer directly. */
free_rid(): void;

/** Returns the default clear color which is used when a specific clear color has not been selected. See also [method set_default_clear_color]. */
get_default_clear_color(): Color;

/** Returns the time taken to setup rendering on the CPU in milliseconds. This value is shared across all viewports and does [i]not[/i] require [method viewport_set_measure_render_time] to be enabled on a viewport to be queried. See also [method viewport_get_measured_render_time_cpu]. */
get_frame_setup_time_cpu(): float;

/**
 * Returns the global RenderingDevice.
 *
 * **Note:** When using the OpenGL backend or when running in headless mode, this function always returns `null`.
 *
*/
get_rendering_device(): RenderingDevice;

/**
 * Returns a statistic about the rendering engine which can be used for performance profiling. See [enum RenderingServer.RenderingInfo] for a list of values that can be queried. See also [method viewport_get_render_info], which returns information specific to a viewport.
 *
 * **Note:** Only 3D rendering is currently taken into account by some of these values, such as the number of draw calls.
 *
 * **Note:** Rendering information is not available until at least 2 frames have been rendered by the engine. If rendering information is not available, [method get_rendering_info] returns `0`. To print rendering information in `_ready()` successfully, use the following:
 *
 * @example 
 * 
 * func _ready():
 *     for _i in 2:
 *         await get_tree().process_frame
 *     print(RenderingServer.get_rendering_info(RENDERING_INFO_TOTAL_DRAW_CALLS_IN_FRAME))
 * @summary 
 * 
 *
*/
get_rendering_info(): int;

/** Returns the parameters of a shader. */
get_shader_parameter_list(): Dictionary[];

/** Returns the RID of the test cube. This mesh will be created and returned on the first call to [method get_test_cube], then it will be cached for subsequent calls. See also [method make_sphere_mesh]. */
get_test_cube(): RID;

/**
 * Returns the RID of a 256×256 texture with a testing pattern on it (in [constant Image.FORMAT_RGB8] format). This texture will be created and returned on the first call to [method get_test_texture], then it will be cached for subsequent calls. See also [method get_white_texture].
 *
 * Example of getting the test texture and applying it to a [Sprite2D] node:
 *
 * @example 
 * 
 * var texture_rid = RenderingServer.get_test_texture()
 * var texture = ImageTexture.create_from_image(RenderingServer.texture_2d_get(texture_rid))
 * $Sprite2D.texture = texture
 * @summary 
 * 
 *
*/
get_test_texture(): RID;

/**
 * Returns the version of the graphics video adapter **currently in use** (e.g. "1.2.189" for Vulkan, "3.3.0 NVIDIA 510.60.02" for OpenGL). This version may be different from the actual latest version supported by the hardware, as Godot may not always request the latest version. See also [method OS.get_video_adapter_driver_info].
 *
 * **Note:** When running a headless or server binary, this function returns an empty string.
 *
*/
get_video_adapter_api_version(): string;

/**
 * Returns the name of the video adapter (e.g. "GeForce GTX 1080/PCIe/SSE2").
 *
 * **Note:** When running a headless or server binary, this function returns an empty string.
 *
 * **Note:** On the web platform, some browsers such as Firefox may report a different, fixed GPU name such as "GeForce GTX 980" (regardless of the user's actual GPU model). This is done to make fingerprinting more difficult.
 *
*/
get_video_adapter_name(): string;

/**
 * Returns the type of the video adapter. Since dedicated graphics cards from a given generation will **usually** be significantly faster than integrated graphics made in the same generation, the device type can be used as a basis for automatic graphics settings adjustment. However, this is not always true, so make sure to provide users with a way to manually override graphics settings.
 *
 * **Note:** When using the OpenGL backend or when running in headless mode, this function always returns [constant RenderingDevice.DEVICE_TYPE_OTHER].
 *
*/
get_video_adapter_type(): int;

/**
 * Returns the vendor of the video adapter (e.g. "NVIDIA Corporation").
 *
 * **Note:** When running a headless or server binary, this function returns an empty string.
 *
*/
get_video_adapter_vendor(): string;

/**
 * Returns the ID of a 4×4 white texture (in [constant Image.FORMAT_RGB8] format). This texture will be created and returned on the first call to [method get_white_texture], then it will be cached for subsequent calls. See also [method get_test_texture].
 *
 * Example of getting the white texture and applying it to a [Sprite2D] node:
 *
 * @example 
 * 
 * var texture_rid = RenderingServer.get_white_texture()
 * var texture = ImageTexture.create_from_image(RenderingServer.texture_2d_get(texture_rid))
 * $Sprite2D.texture = texture
 * @summary 
 * 
 *
*/
get_white_texture(): RID;

/** If [param half_resolution] is [code]true[/code], renders [VoxelGI] and SDFGI ([member Environment.sdfgi_enabled]) buffers at halved resolution on each axis (e.g. 960×540 when the viewport size is 1920×1080). This improves performance significantly when VoxelGI or SDFGI is enabled, at the cost of artifacts that may be visible on polygon edges. The loss in quality becomes less noticeable as the viewport resolution increases. [LightmapGI] rendering is not affected by this setting. Equivalent to [member ProjectSettings.rendering/global_illumination/gi/use_half_resolution]. */
gi_set_use_half_resolution(): void;

/**
 * Creates a new global shader uniform.
 *
 * **Note:** Global shader parameter names are case-sensitive.
 *
*/
global_shader_parameter_add(): void;

/**
 * Returns the value of the global shader uniform specified by [param name].
 *
 * **Note:** [method global_shader_parameter_get] has a large performance penalty as the rendering thread needs to synchronize with the calling thread, which is slow. Do not use this method during gameplay to avoid stuttering. If you need to read values in a script after setting them, consider creating an autoload where you store the values you need to query at the same time you're setting them as global parameters.
 *
*/
global_shader_parameter_get(): any;

/**
 * Returns the list of global shader uniform names.
 *
 * **Note:** [method global_shader_parameter_get] has a large performance penalty as the rendering thread needs to synchronize with the calling thread, which is slow. Do not use this method during gameplay to avoid stuttering. If you need to read values in a script after setting them, consider creating an autoload where you store the values you need to query at the same time you're setting them as global parameters.
 *
*/
global_shader_parameter_get_list(): StringName[];

/**
 * Returns the type associated to the global shader uniform specified by [param name].
 *
 * **Note:** [method global_shader_parameter_get] has a large performance penalty as the rendering thread needs to synchronize with the calling thread, which is slow. Do not use this method during gameplay to avoid stuttering. If you need to read values in a script after setting them, consider creating an autoload where you store the values you need to query at the same time you're setting them as global parameters.
 *
*/
global_shader_parameter_get_type(): int;

/** Removes the global shader uniform specified by [param name]. */
global_shader_parameter_remove(): void;

/** Sets the global shader uniform [param name] to [param value]. */
global_shader_parameter_set(): void;

/** Overrides the global shader uniform [param name] with [param value]. Equivalent to the [ShaderGlobalsOverride] node. */
global_shader_parameter_set_override(): void;

/** Returns [code]true[/code] if changes have been made to the RenderingServer's data. [method force_draw] is usually called if this happens. */
has_changed(): boolean;

/** Not yet implemented. Always returns [code]false[/code]. */
has_feature(): boolean;

/** Returns [code]true[/code] if the OS supports a certain [param feature]. Features might be [code]s3tc[/code], [code]etc[/code], and [code]etc2[/code]. */
has_os_feature(): boolean;

/** Attaches a unique Object ID to instance. Object ID must be attached to instance for proper culling with [method instances_cull_aabb], [method instances_cull_convex], and [method instances_cull_ray]. */
instance_attach_object_instance_id(): void;

/** Attaches a skeleton to an instance. Removes the previous skeleton from the instance. */
instance_attach_skeleton(): void;

/**
 * Creates a visual instance and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `instance_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
 * An instance is a way of placing a 3D object in the scenario. Objects like particles, meshes, reflection probes and decals need to be associated with an instance to be visible in the scenario using [method instance_set_base].
 *
 * **Note:** The equivalent node is [VisualInstance3D].
 *
*/
instance_create(): RID;

/**
 * Creates a visual instance, adds it to the RenderingServer, and sets both base and scenario. It can be accessed with the RID that is returned. This RID will be used in all `instance_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method. This is a shorthand for using [method instance_create] and setting the base and scenario manually.
 *
*/
instance_create2(): RID;

/**
 * Returns the value of the per-instance shader uniform from the specified 3D geometry instance. Equivalent to [method GeometryInstance3D.get_instance_shader_parameter].
 *
 * **Note:** Per-instance shader parameter names are case-sensitive.
 *
*/
instance_geometry_get_shader_parameter(): any;

/** Returns the default value of the per-instance shader uniform from the specified 3D geometry instance. Equivalent to [method GeometryInstance3D.get_instance_shader_parameter]. */
instance_geometry_get_shader_parameter_default_value(): any;

/** Returns a dictionary of per-instance shader uniform names of the per-instance shader uniform from the specified 3D geometry instance. The returned dictionary is in PropertyInfo format, with the keys [code]name[/code], [code]class_name[/code], [code]type[/code], [code]hint[/code], [code]hint_string[/code] and [code]usage[/code]. Equivalent to [method GeometryInstance3D.get_instance_shader_parameter]. */
instance_geometry_get_shader_parameter_list(): Dictionary[];

/** Sets the shadow casting setting to one of [enum ShadowCastingSetting]. Equivalent to [member GeometryInstance3D.cast_shadow]. */
instance_geometry_set_cast_shadows_setting(): void;

/** Sets the flag for a given [enum InstanceFlags]. See [enum InstanceFlags] for more details. */
instance_geometry_set_flag(): void;

/** Sets the lightmap GI instance to use for the specified 3D geometry instance. The lightmap UV scale for the specified instance (equivalent to [member GeometryInstance3D.gi_lightmap_scale]) and lightmap atlas slice must also be specified. */
instance_geometry_set_lightmap(): void;

/** Sets the level of detail bias to use when rendering the specified 3D geometry instance. Higher values result in higher detail from further away. Equivalent to [member GeometryInstance3D.lod_bias]. */
instance_geometry_set_lod_bias(): void;

/** Sets a material that will be rendered for all surfaces on top of active materials for the mesh associated with this instance. Equivalent to [member GeometryInstance3D.material_overlay]. */
instance_geometry_set_material_overlay(): void;

/** Sets a material that will override the material for all surfaces on the mesh associated with this instance. Equivalent to [member GeometryInstance3D.material_override]. */
instance_geometry_set_material_override(): void;

/** Sets the per-instance shader uniform on the specified 3D geometry instance. Equivalent to [method GeometryInstance3D.set_instance_shader_parameter]. */
instance_geometry_set_shader_parameter(): void;

/**
 * Sets the transparency for the given geometry instance. Equivalent to [member GeometryInstance3D.transparency].
 *
 * A transparency of `0.0` is fully opaque, while `1.0` is fully transparent. Values greater than `0.0` (exclusive) will force the geometry's materials to go through the transparent pipeline, which is slower to render and can exhibit rendering issues due to incorrect transparency sorting. However, unlike using a transparent material, setting [param transparency] to a value greater than `0.0` (exclusive) will **not** disable shadow rendering.
 *
 * In spatial shaders, `1.0 - transparency` is set as the default value of the `ALPHA` built-in.
 *
 * **Note:** [param transparency] is clamped between `0.0` and `1.0`, so this property cannot be used to make transparent materials more opaque than they originally are.
 *
*/
instance_geometry_set_transparency(): void;

/** Sets the visibility range values for the given geometry instance. Equivalent to [member GeometryInstance3D.visibility_range_begin] and related properties. */
instance_geometry_set_visibility_range(): void;

/** Sets the base of the instance. A base can be any of the 3D objects that are created in the RenderingServer that can be displayed. For example, any of the light types, mesh, multimesh, particle system, reflection probe, decal, lightmap, voxel GI and visibility notifiers are all types that can be set as the base of an instance in order to be displayed in the scenario. */
instance_set_base(): void;

/** Sets the weight for a given blend shape associated with this instance. */
instance_set_blend_shape_weight(): void;

/** Sets a custom AABB to use when culling objects from the view frustum. Equivalent to setting [member GeometryInstance3D.custom_aabb]. */
instance_set_custom_aabb(): void;

/** Sets a margin to increase the size of the AABB when culling objects from the view frustum. This allows you to avoid culling objects that fall outside the view frustum. Equivalent to [member GeometryInstance3D.extra_cull_margin]. */
instance_set_extra_visibility_margin(): void;

/** If [code]true[/code], ignores both frustum and occlusion culling on the specified 3D geometry instance. This is not the same as [member GeometryInstance3D.ignore_occlusion_culling], which only ignores occlusion culling and leaves frustum culling intact. */
instance_set_ignore_culling(): void;

/** Sets the render layers that this instance will be drawn to. Equivalent to [member VisualInstance3D.layers]. */
instance_set_layer_mask(): void;

/** Sets the sorting offset and switches between using the bounding box or instance origin for depth sorting. */
instance_set_pivot_data(): void;

/** Sets the scenario that the instance is in. The scenario is the 3D world that the objects will be displayed in. */
instance_set_scenario(): void;

/** Sets the override material of a specific surface. Equivalent to [method MeshInstance3D.set_surface_override_material]. */
instance_set_surface_override_material(): void;

/** Sets the world space transform of the instance. Equivalent to [member Node3D.transform]. */
instance_set_transform(): void;

/** Sets the visibility parent for the given instance. Equivalent to [member Node3D.visibility_parent]. */
instance_set_visibility_parent(): void;

/** Sets whether an instance is drawn or not. Equivalent to [member Node3D.visible]. */
instance_set_visible(): void;

/**
 * Returns an array of object IDs intersecting with the provided AABB. Only 3D nodes that inherit from [VisualInstance3D] are considered, such as [MeshInstance3D] or [DirectionalLight3D]. Use [method @GlobalScope.instance_from_id] to obtain the actual nodes. A scenario RID must be provided, which is available in the [World3D] you want to query. This forces an update for all resources queued to update.
 *
 * **Warning:** This function is primarily intended for editor usage. For in-game use cases, prefer physics collision.
 *
*/
instances_cull_aabb(): PackedInt64Array;

/**
 * Returns an array of object IDs intersecting with the provided convex shape. Only 3D nodes that inherit from [VisualInstance3D] are considered, such as [MeshInstance3D] or [DirectionalLight3D]. Use [method @GlobalScope.instance_from_id] to obtain the actual nodes. A scenario RID must be provided, which is available in the [World3D] you want to query. This forces an update for all resources queued to update.
 *
 * **Warning:** This function is primarily intended for editor usage. For in-game use cases, prefer physics collision.
 *
*/
instances_cull_convex(): PackedInt64Array;

/**
 * Returns an array of object IDs intersecting with the provided 3D ray. Only 3D nodes that inherit from [VisualInstance3D] are considered, such as [MeshInstance3D] or [DirectionalLight3D]. Use [method @GlobalScope.instance_from_id] to obtain the actual nodes. A scenario RID must be provided, which is available in the [World3D] you want to query. This forces an update for all resources queued to update.
 *
 * **Warning:** This function is primarily intended for editor usage. For in-game use cases, prefer physics collision.
 *
*/
instances_cull_ray(): PackedInt64Array;

/** If [code]true[/code], this directional light will blend between shadow map splits resulting in a smoother transition between them. Equivalent to [member DirectionalLight3D.directional_shadow_blend_splits]. */
light_directional_set_blend_splits(): void;

/** Sets the shadow mode for this directional light. Equivalent to [member DirectionalLight3D.directional_shadow_mode]. See [enum LightDirectionalShadowMode] for options. */
light_directional_set_shadow_mode(): void;

/** If [code]true[/code], this light will not be used for anything except sky shaders. Use this for lights that impact your sky shader that you may want to hide from affecting the rest of the scene. For example, you may want to enable this when the sun in your sky shader falls below the horizon. */
light_directional_set_sky_mode(): void;

/** Sets whether to use a dual paraboloid or a cubemap for the shadow map. Dual paraboloid is faster but may suffer from artifacts. Equivalent to [member OmniLight3D.omni_shadow_mode]. */
light_omni_set_shadow_mode(): void;

/** Sets the texture filter mode to use when rendering light projectors. This parameter is global and cannot be set on a per-light basis. */
light_projectors_set_filter(): void;

/** Sets the bake mode to use for the specified 3D light. Equivalent to [member Light3D.light_bake_mode]. */
light_set_bake_mode(): void;

/** Sets the color of the light. Equivalent to [member Light3D.light_color]. */
light_set_color(): void;

/** Sets the cull mask for this 3D light. Lights only affect objects in the selected layers. Equivalent to [member Light3D.light_cull_mask]. */
light_set_cull_mask(): void;

/** Sets the distance fade for this 3D light. This acts as a form of level of detail (LOD) and can be used to improve performance. Equivalent to [member Light3D.distance_fade_enabled], [member Light3D.distance_fade_begin], [member Light3D.distance_fade_shadow], and [member Light3D.distance_fade_length]. */
light_set_distance_fade(): void;

/** Sets the maximum SDFGI cascade in which the 3D light's indirect lighting is rendered. Higher values allow the light to be rendered in SDFGI further away from the camera. */
light_set_max_sdfgi_cascade(): void;

/** If [code]true[/code], the 3D light will subtract light instead of adding light. Equivalent to [member Light3D.light_negative]. */
light_set_negative(): void;

/** Sets the specified 3D light parameter. See [enum LightParam] for options. Equivalent to [method Light3D.set_param]. */
light_set_param(): void;

/** Sets the projector texture to use for the specified 3D light. Equivalent to [member Light3D.light_projector]. */
light_set_projector(): void;

/** If [code]true[/code], reverses the backface culling of the mesh. This can be useful when you have a flat mesh that has a light behind it. If you need to cast a shadow on both sides of the mesh, set the mesh to use double-sided shadows with [method instance_geometry_set_cast_shadows_setting]. Equivalent to [member Light3D.shadow_reverse_cull_face]. */
light_set_reverse_cull_face_mode(): void;

/** If [code]true[/code], light will cast shadows. Equivalent to [member Light3D.shadow_enabled]. */
light_set_shadow(): void;

/**
 * Creates a new lightmap global illumination instance and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `lightmap_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
 * **Note:** The equivalent node is [LightmapGI].
 *
*/
lightmap_create(): RID;

/** No documentation provided. */
lightmap_get_probe_capture_bsp_tree(): PackedInt32Array;

/** No documentation provided. */
lightmap_get_probe_capture_points(): PackedVector3Array;

/** No documentation provided. */
lightmap_get_probe_capture_sh(): PackedColorArray;

/** No documentation provided. */
lightmap_get_probe_capture_tetrahedra(): PackedInt32Array;

/** Used to inform the renderer what exposure normalization value was used while baking the lightmap. This value will be used and modulated at run time to ensure that the lightmap maintains a consistent level of exposure even if the scene-wide exposure normalization is changed at run time. For more information see [method camera_attributes_set_exposure]. */
lightmap_set_baked_exposure_normalization(): void;

/** No documentation provided. */
lightmap_set_probe_bounds(): void;

/** No documentation provided. */
lightmap_set_probe_capture_data(): void;

/** No documentation provided. */
lightmap_set_probe_capture_update_speed(): void;

/** No documentation provided. */
lightmap_set_probe_interior(): void;

/** Set the textures on the given [param lightmap] GI instance to the texture array pointed to by the [param light] RID. If the lightmap texture was baked with [member LightmapGI.directional] set to [code]true[/code], then [param uses_sh] must also be [code]true[/code]. */
lightmap_set_textures(): void;

/** Returns a mesh of a sphere with the given number of horizontal subdivisions, vertical subdivisions and radius. See also [method get_test_cube]. */
make_sphere_mesh(): RID;

/**
 * Creates an empty material and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `material_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
 * **Note:** The equivalent resource is [Material].
 *
*/
material_create(): RID;

/** Returns the value of a certain material's parameter. */
material_get_param(): any;

/** Sets an object's next material. */
material_set_next_pass(): void;

/** Sets a material's parameter. */
material_set_param(): void;

/** Sets a material's render priority. */
material_set_render_priority(): void;

/** Sets a shader material's shader. */
material_set_shader(): void;

/** No documentation provided. */
mesh_add_surface(): void;

/** No documentation provided. */
mesh_add_surface_from_arrays(): void;

/** Removes all surfaces from a mesh. */
mesh_clear(): void;

/**
 * Creates a new mesh and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `mesh_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
 * To place in a scene, attach this mesh to an instance using [method instance_set_base] using the returned RID.
 *
 * **Note:** The equivalent resource is [Mesh].
 *
*/
mesh_create(): RID;

/** No documentation provided. */
mesh_create_from_surfaces(): RID;

/** Returns a mesh's blend shape count. */
mesh_get_blend_shape_count(): int;

/** Returns a mesh's blend shape mode. */
mesh_get_blend_shape_mode(): int;

/** Returns a mesh's custom aabb. */
mesh_get_custom_aabb(): AABB;

/** No documentation provided. */
mesh_get_surface(): Dictionary<any, any>;

/** Returns a mesh's number of surfaces. */
mesh_get_surface_count(): int;

/** Sets a mesh's blend shape mode. */
mesh_set_blend_shape_mode(): void;

/** Sets a mesh's custom aabb. */
mesh_set_custom_aabb(): void;

/** No documentation provided. */
mesh_set_shadow_mesh(): void;

/** Returns a mesh's surface's buffer arrays. */
mesh_surface_get_arrays(): any[];

/** Returns a mesh's surface's arrays for blend shapes. */
mesh_surface_get_blend_shape_arrays(): Array[];

/** Returns the stride of the attribute buffer for a mesh with given [param format]. */
mesh_surface_get_format_attribute_stride(): int;

/** Returns the stride of the combined normals and tangents for a mesh with given [param format]. Note importantly that, while normals and tangents are in the vertex buffer with vertices, they are only interleaved with each other and so have a different stride than vertex positions. */
mesh_surface_get_format_normal_tangent_stride(): int;

/** Returns the offset of a given attribute by [param array_index] in the start of its respective buffer. */
mesh_surface_get_format_offset(): int;

/** Returns the stride of the skin buffer for a mesh with given [param format]. */
mesh_surface_get_format_skin_stride(): int;

/** Returns the stride of the vertex positions for a mesh with given [param format]. Note importantly that vertex positions are stored consecutively and are not interleaved with the other attributes in the vertex buffer (normals and tangents). */
mesh_surface_get_format_vertex_stride(): int;

/** Returns a mesh's surface's material. */
mesh_surface_get_material(): RID;

/** Sets a mesh's surface's material. */
mesh_surface_set_material(): void;

/** No documentation provided. */
mesh_surface_update_attribute_region(): void;

/** No documentation provided. */
mesh_surface_update_skin_region(): void;

/** No documentation provided. */
mesh_surface_update_vertex_region(): void;

/** No documentation provided. */
multimesh_allocate_data(): void;

/**
 * Creates a new multimesh on the RenderingServer and returns an [RID] handle. This RID will be used in all `multimesh_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
 * To place in a scene, attach this multimesh to an instance using [method instance_set_base] using the returned RID.
 *
 * **Note:** The equivalent resource is [MultiMesh].
 *
*/
multimesh_create(): RID;

/** Calculates and returns the axis-aligned bounding box that encloses all instances within the multimesh. */
multimesh_get_aabb(): AABB;

/**
 * Returns the MultiMesh data (such as instance transforms, colors, etc). See [method multimesh_set_buffer] for a description of the returned data.
 *
 * **Note:** If the buffer is in the engine's internal cache, it will have to be fetched from GPU memory and possibly decompressed. This means [method multimesh_get_buffer] is potentially a slow operation and should be avoided whenever possible.
 *
*/
multimesh_get_buffer(): PackedFloat32Array;

/** Returns the number of instances allocated for this multimesh. */
multimesh_get_instance_count(): int;

/** Returns the RID of the mesh that will be used in drawing this multimesh. */
multimesh_get_mesh(): RID;

/** Returns the number of visible instances for this multimesh. */
multimesh_get_visible_instances(): int;

/** Returns the color by which the specified instance will be modulated. */
multimesh_instance_get_color(): Color;

/** Returns the custom data associated with the specified instance. */
multimesh_instance_get_custom_data(): Color;

/** Returns the [Transform3D] of the specified instance. */
multimesh_instance_get_transform(): Transform3D;

/** Returns the [Transform2D] of the specified instance. For use when the multimesh is set to use 2D transforms. */
multimesh_instance_get_transform_2d(): Transform2D;

/** Sets the color by which this instance will be modulated. Equivalent to [method MultiMesh.set_instance_color]. */
multimesh_instance_set_color(): void;

/** Sets the custom data for this instance. Custom data is passed as a [Color], but is interpreted as a [code]vec4[/code] in the shader. Equivalent to [method MultiMesh.set_instance_custom_data]. */
multimesh_instance_set_custom_data(): void;

/** Sets the [Transform3D] for this instance. Equivalent to [method MultiMesh.set_instance_transform]. */
multimesh_instance_set_transform(): void;

/** Sets the [Transform2D] for this instance. For use when multimesh is used in 2D. Equivalent to [method MultiMesh.set_instance_transform_2d]. */
multimesh_instance_set_transform_2d(): void;

/**
 * Set the entire data to use for drawing the [param multimesh] at once to [param buffer] (such as instance transforms and colors). [param buffer]'s size must match the number of instances multiplied by the per-instance data size (which depends on the enabled MultiMesh fields). Otherwise, an error message is printed and nothing is rendered. See also [method multimesh_get_buffer].
 *
 * The per-instance data size and expected data order is:
 *
 * @example 
 * 
 * 2D:
 *   - Position: 8 floats (8 floats for Transform2D)
 *   - Position + Vertex color: 12 floats (8 floats for Transform2D, 4 floats for Color)
 *   - Position + Custom data: 12 floats (8 floats for Transform2D, 4 floats of custom data)
 *   - Position + Vertex color + Custom data: 16 floats (8 floats for Transform2D, 4 floats for Color, 4 floats of custom data)
 * 3D:
 *   - Position: 12 floats (12 floats for Transform3D)
 *   - Position + Vertex color: 16 floats (12 floats for Transform3D, 4 floats for Color)
 *   - Position + Custom data: 16 floats (12 floats for Transform3D, 4 floats of custom data)
 *   - Position + Vertex color + Custom data: 20 floats (12 floats for Transform3D, 4 floats for Color, 4 floats of custom data)
 * @summary 
 * 
 *
*/
multimesh_set_buffer(): void;

/** Sets the mesh to be drawn by the multimesh. Equivalent to [member MultiMesh.mesh]. */
multimesh_set_mesh(): void;

/** Sets the number of instances visible at a given time. If -1, all instances that have been allocated are drawn. Equivalent to [member MultiMesh.visible_instance_count]. */
multimesh_set_visible_instances(): void;

/**
 * Creates an occluder instance and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `occluder_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
 * **Note:** The equivalent resource is [Occluder3D] (not to be confused with the [OccluderInstance3D] node).
 *
*/
occluder_create(): RID;

/** Sets the mesh data for the given occluder RID, which controls the shape of the occlusion culling that will be performed. */
occluder_set_mesh(): void;

/**
 * Creates a new omni light and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID can be used in most `light_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
 * To place in a scene, attach this omni light to an instance using [method instance_set_base] using the returned RID.
 *
 * **Note:** The equivalent node is [OmniLight3D].
 *
*/
omni_light_create(): RID;

/**
 * Creates a new 3D GPU particle collision or attractor and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID can be used in most `particles_collision_*` RenderingServer functions.
 *
 * **Note:** The equivalent nodes are [GPUParticlesCollision3D] and [GPUParticlesAttractor3D].
 *
*/
particles_collision_create(): RID;

/** Requests an update for the 3D GPU particle collision heightfield. This may be automatically called by the 3D GPU particle collision heightfield depending on its [member GPUParticlesCollisionHeightField3D.update_mode]. */
particles_collision_height_field_update(): void;

/** Sets the attenuation [param curve] for the 3D GPU particles attractor specified by the [param particles_collision] RID. Only used for attractors, not colliders. Equivalent to [member GPUParticlesAttractor3D.attenuation]. */
particles_collision_set_attractor_attenuation(): void;

/** Sets the directionality [param amount] for the 3D GPU particles attractor specified by the [param particles_collision] RID. Only used for attractors, not colliders. Equivalent to [member GPUParticlesAttractor3D.directionality]. */
particles_collision_set_attractor_directionality(): void;

/** Sets the [param strength] for the 3D GPU particles attractor specified by the [param particles_collision] RID. Only used for attractors, not colliders. Equivalent to [member GPUParticlesAttractor3D.strength]. */
particles_collision_set_attractor_strength(): void;

/** Sets the [param extents] for the 3D GPU particles collision by the [param particles_collision] RID. Equivalent to [member GPUParticlesCollisionBox3D.size], [member GPUParticlesCollisionSDF3D.size], [member GPUParticlesCollisionHeightField3D.size], [member GPUParticlesAttractorBox3D.size] or [member GPUParticlesAttractorVectorField3D.size] depending on the [param particles_collision] type. */
particles_collision_set_box_extents(): void;

/** Sets the collision or attractor shape [param type] for the 3D GPU particles collision or attractor specified by the [param particles_collision] RID. */
particles_collision_set_collision_type(): void;

/** Sets the cull [param mask] for the 3D GPU particles collision or attractor specified by the [param particles_collision] RID. Equivalent to [member GPUParticlesCollision3D.cull_mask] or [member GPUParticlesAttractor3D.cull_mask] depending on the [param particles_collision] type. */
particles_collision_set_cull_mask(): void;

/** Sets the signed distance field [param texture] for the 3D GPU particles collision specified by the [param particles_collision] RID. Equivalent to [member GPUParticlesCollisionSDF3D.texture] or [member GPUParticlesAttractorVectorField3D.texture] depending on the [param particles_collision] type. */
particles_collision_set_field_texture(): void;

/** Sets the heightmap [param resolution] for the 3D GPU particles heightfield collision specified by the [param particles_collision] RID. Equivalent to [member GPUParticlesCollisionHeightField3D.resolution]. */
particles_collision_set_height_field_resolution(): void;

/** Sets the [param radius] for the 3D GPU particles sphere collision or attractor specified by the [param particles_collision] RID. Equivalent to [member GPUParticlesCollisionSphere3D.radius] or [member GPUParticlesAttractorSphere3D.radius] depending on the [param particles_collision] type. */
particles_collision_set_sphere_radius(): void;

/**
 * Creates a GPU-based particle system and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `particles_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
 * To place in a scene, attach these particles to an instance using [method instance_set_base] using the returned RID.
 *
 * **Note:** The equivalent nodes are [GPUParticles2D] and [GPUParticles3D].
 *
 * **Note:** All `particles_*` methods only apply to GPU-based particles, not CPU-based particles. [CPUParticles2D] and [CPUParticles3D] do not have equivalent RenderingServer functions available, as these use [MultiMeshInstance2D] and [MultiMeshInstance3D] under the hood (see `multimesh_*` methods).
 *
*/
particles_create(): RID;

/** Manually emits particles from the [param particles] instance. */
particles_emit(): void;

/** Calculates and returns the axis-aligned bounding box that contains all the particles. Equivalent to [method GPUParticles3D.capture_aabb]. */
particles_get_current_aabb(): AABB;

/** Returns [code]true[/code] if particles are currently set to emitting. */
particles_get_emitting(): boolean;

/** Returns [code]true[/code] if particles are not emitting and particles are set to inactive. */
particles_is_inactive(): boolean;

/** Add particle system to list of particle systems that need to be updated. Update will take place on the next frame, or on the next call to [method instances_cull_aabb], [method instances_cull_convex], or [method instances_cull_ray]. */
particles_request_process(): void;

/** Reset the particles on the next update. Equivalent to [method GPUParticles3D.restart]. */
particles_restart(): void;

/** Sets the number of particles to be drawn and allocates the memory for them. Equivalent to [member GPUParticles3D.amount]. */
particles_set_amount(): void;

/** Sets the amount ratio for particles to be emitted. Equivalent to [member GPUParticles3D.amount_ratio]. */
particles_set_amount_ratio(): void;

/** No documentation provided. */
particles_set_collision_base_size(): void;

/** Sets a custom axis-aligned bounding box for the particle system. Equivalent to [member GPUParticles3D.visibility_aabb]. */
particles_set_custom_aabb(): void;

/** Sets the draw order of the particles to one of the named enums from [enum ParticlesDrawOrder]. See [enum ParticlesDrawOrder] for options. Equivalent to [member GPUParticles3D.draw_order]. */
particles_set_draw_order(): void;

/** Sets the mesh to be used for the specified draw pass. Equivalent to [member GPUParticles3D.draw_pass_1], [member GPUParticles3D.draw_pass_2], [member GPUParticles3D.draw_pass_3], and [member GPUParticles3D.draw_pass_4]. */
particles_set_draw_pass_mesh(): void;

/** Sets the number of draw passes to use. Equivalent to [member GPUParticles3D.draw_passes]. */
particles_set_draw_passes(): void;

/** Sets the [Transform3D] that will be used by the particles when they first emit. */
particles_set_emission_transform(): void;

/** Sets the velocity of a particle node, that will be used by [member ParticleProcessMaterial.inherit_velocity_ratio]. */
particles_set_emitter_velocity(): void;

/** If [code]true[/code], particles will emit over time. Setting to false does not reset the particles, but only stops their emission. Equivalent to [member GPUParticles3D.emitting]. */
particles_set_emitting(): void;

/** Sets the explosiveness ratio. Equivalent to [member GPUParticles3D.explosiveness]. */
particles_set_explosiveness_ratio(): void;

/** Sets the frame rate that the particle system rendering will be fixed to. Equivalent to [member GPUParticles3D.fixed_fps]. */
particles_set_fixed_fps(): void;

/** If [code]true[/code], uses fractional delta which smooths the movement of the particles. Equivalent to [member GPUParticles3D.fract_delta]. */
particles_set_fractional_delta(): void;

/** Sets the value that informs a [ParticleProcessMaterial] to rush all particles towards the end of their lifetime. */
particles_set_interp_to_end(): void;

/** No documentation provided. */
particles_set_interpolate(): void;

/** Sets the lifetime of each particle in the system. Equivalent to [member GPUParticles3D.lifetime]. */
particles_set_lifetime(): void;

/** Sets whether the GPU particles specified by the [param particles] RID should be rendered in 2D or 3D according to [param mode]. */
particles_set_mode(): void;

/** If [code]true[/code], particles will emit once and then stop. Equivalent to [member GPUParticles3D.one_shot]. */
particles_set_one_shot(): void;

/** Sets the preprocess time for the particles' animation. This lets you delay starting an animation until after the particles have begun emitting. Equivalent to [member GPUParticles3D.preprocess]. */
particles_set_pre_process_time(): void;

/**
 * Sets the material for processing the particles.
 *
 * **Note:** This is not the material used to draw the materials. Equivalent to [member GPUParticles3D.process_material].
 *
*/
particles_set_process_material(): void;

/** Sets the emission randomness ratio. This randomizes the emission of particles within their phase. Equivalent to [member GPUParticles3D.randomness]. */
particles_set_randomness_ratio(): void;

/** Sets the speed scale of the particle system. Equivalent to [member GPUParticles3D.speed_scale]. */
particles_set_speed_scale(): void;

/** No documentation provided. */
particles_set_subemitter(): void;

/** No documentation provided. */
particles_set_trail_bind_poses(): void;

/** If [param enable] is [code]true[/code], enables trails for the [param particles] with the specified [param length_sec] in seconds. Equivalent to [member GPUParticles3D.trail_enabled] and [member GPUParticles3D.trail_lifetime]. */
particles_set_trails(): void;

/** No documentation provided. */
particles_set_transform_align(): void;

/** If [code]true[/code], particles use local coordinates. If [code]false[/code] they use global coordinates. Equivalent to [member GPUParticles3D.local_coords]. */
particles_set_use_local_coordinates(): void;

/** Sets the filter quality for omni and spot light shadows in 3D. See also [member ProjectSettings.rendering/lights_and_shadows/positional_shadow/soft_shadow_filter_quality]. This parameter is global and cannot be set on a per-viewport basis. */
positional_soft_shadow_filter_set_quality(): void;

/**
 * Creates a reflection probe and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `reflection_probe_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
 * To place in a scene, attach this reflection probe to an instance using [method instance_set_base] using the returned RID.
 *
 * **Note:** The equivalent node is [ReflectionProbe].
 *
*/
reflection_probe_create(): RID;

/** Sets the reflection probe's custom ambient light color. Equivalent to [member ReflectionProbe.ambient_color]. */
reflection_probe_set_ambient_color(): void;

/** Sets the reflection probe's custom ambient light energy. Equivalent to [member ReflectionProbe.ambient_color_energy]. */
reflection_probe_set_ambient_energy(): void;

/** Sets the reflection probe's ambient light mode. Equivalent to [member ReflectionProbe.ambient_mode]. */
reflection_probe_set_ambient_mode(): void;

/** If [code]true[/code], reflections will ignore sky contribution. Equivalent to [member ReflectionProbe.interior]. */
reflection_probe_set_as_interior(): void;

/** Sets the render cull mask for this reflection probe. Only instances with a matching cull mask will be rendered by this probe. Equivalent to [member ReflectionProbe.cull_mask]. */
reflection_probe_set_cull_mask(): void;

/** If [code]true[/code], uses box projection. This can make reflections look more correct in certain situations. Equivalent to [member ReflectionProbe.box_projection]. */
reflection_probe_set_enable_box_projection(): void;

/** If [code]true[/code], computes shadows in the reflection probe. This makes the reflection much slower to compute. Equivalent to [member ReflectionProbe.enable_shadows]. */
reflection_probe_set_enable_shadows(): void;

/** Sets the intensity of the reflection probe. Intensity modulates the strength of the reflection. Equivalent to [member ReflectionProbe.intensity]. */
reflection_probe_set_intensity(): void;

/** Sets the max distance away from the probe an object can be before it is culled. Equivalent to [member ReflectionProbe.max_distance]. */
reflection_probe_set_max_distance(): void;

/** Sets the mesh level of detail to use in the reflection probe rendering. Higher values will use less detailed versions of meshes that have LOD variations generated, which can improve performance. Equivalent to [member ReflectionProbe.mesh_lod_threshold]. */
reflection_probe_set_mesh_lod_threshold(): void;

/** Sets the origin offset to be used when this reflection probe is in box project mode. Equivalent to [member ReflectionProbe.origin_offset]. */
reflection_probe_set_origin_offset(): void;

/** Sets the resolution to use when rendering the specified reflection probe. The [param resolution] is specified for each cubemap face: for instance, specifying [code]512[/code] will allocate 6 faces of 512×512 each (plus mipmaps for roughness levels). */
reflection_probe_set_resolution(): void;

/** Sets the size of the area that the reflection probe will capture. Equivalent to [member ReflectionProbe.size]. */
reflection_probe_set_size(): void;

/** Sets how often the reflection probe updates. Can either be once or every frame. See [enum ReflectionProbeUpdateMode] for options. */
reflection_probe_set_update_mode(): void;

/** Schedules a callback to the given callable after a frame has been drawn. */
request_frame_drawn_callback(): void;

/**
 * Creates a scenario and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `scenario_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
 * The scenario is the 3D world that all the visual instances exist in.
 *
*/
scenario_create(): RID;

/** Sets the camera attributes ([param effects]) that will be used with this scenario. See also [CameraAttributes]. */
scenario_set_camera_attributes(): void;

/** Sets the environment that will be used with this scenario. See also [Environment]. */
scenario_set_environment(): void;

/** Sets the fallback environment to be used by this scenario. The fallback environment is used if no environment is set. Internally, this is used by the editor to provide a default environment. */
scenario_set_fallback_environment(): void;

/** Sets the screen-space roughness limiter parameters, such as whether it should be enabled and its thresholds. Equivalent to [member ProjectSettings.rendering/anti_aliasing/screen_space_roughness_limiter/enabled], [member ProjectSettings.rendering/anti_aliasing/screen_space_roughness_limiter/amount] and [member ProjectSettings.rendering/anti_aliasing/screen_space_roughness_limiter/limit]. */
screen_space_roughness_limiter_set_active(): void;

/** Sets a boot image. The color defines the background color. If [param scale] is [code]true[/code], the image will be scaled to fit the screen size. If [param use_filter] is [code]true[/code], the image will be scaled with linear interpolation. If [param use_filter] is [code]false[/code], the image will be scaled with nearest-neighbor interpolation. */
set_boot_image(): void;

/** This method is currently unimplemented and does nothing if called with [param generate] set to [code]true[/code]. */
set_debug_generate_wireframes(): void;

/** Sets the default clear color which is used when a specific clear color has not been selected. See also [method get_default_clear_color]. */
set_default_clear_color(): void;

/**
 * Creates an empty shader and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `shader_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
 * **Note:** The equivalent resource is [Shader].
 *
*/
shader_create(): RID;

/** Returns a shader's source code as a string. */
shader_get_code(): string;

/**
 * Returns a default texture from a shader searched by name.
 *
 * **Note:** If the sampler array is used use [param index] to access the specified texture.
 *
*/
shader_get_default_texture_parameter(): RID;

/** Returns the default value for the specified shader uniform. This is usually the value written in the shader source code. */
shader_get_parameter_default(): any;

/** Sets the shader's source code (which triggers recompilation after being changed). */
shader_set_code(): void;

/**
 * Sets a shader's default texture. Overwrites the texture given by name.
 *
 * **Note:** If the sampler array is used use [param index] to access the specified texture.
 *
*/
shader_set_default_texture_parameter(): void;

/** Sets the path hint for the specified shader. This should generally match the [Shader] resource's [member Resource.resource_path]. */
shader_set_path_hint(): void;

/** No documentation provided. */
skeleton_allocate_data(): void;

/** Returns the [Transform3D] set for a specific bone of this skeleton. */
skeleton_bone_get_transform(): Transform3D;

/** Returns the [Transform2D] set for a specific bone of this skeleton. */
skeleton_bone_get_transform_2d(): Transform2D;

/** Sets the [Transform3D] for a specific bone of this skeleton. */
skeleton_bone_set_transform(): void;

/** Sets the [Transform2D] for a specific bone of this skeleton. */
skeleton_bone_set_transform_2d(): void;

/**
 * Creates a skeleton and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `skeleton_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
*/
skeleton_create(): RID;

/** Returns the number of bones allocated for this skeleton. */
skeleton_get_bone_count(): int;

/** No documentation provided. */
skeleton_set_base_transform_2d(): void;

/**
 * Generates and returns an [Image] containing the radiance map for the specified [param sky] RID. This supports built-in sky material and custom sky shaders. If [param bake_irradiance] is `true`, the irradiance map is saved instead of the radiance map. The radiance map is used to render reflected light, while the irradiance map is used to render ambient light. See also [method environment_bake_panorama].
 *
 * **Note:** The image is saved in linear color space without any tonemapping performed, which means it will look too dark if viewed directly in an image editor. [param energy] values above `1.0` can be used to brighten the resulting image.
 *
 * **Note:** [param size] should be a 2:1 aspect ratio for the generated panorama to have square pixels. For radiance maps, there is no point in using a height greater than [member Sky.radiance_size], as it won't increase detail. Irradiance maps only contain low-frequency data, so there is usually no point in going past a size of 128×64 pixels when saving an irradiance map.
 *
*/
sky_bake_panorama(): Image;

/**
 * Creates an empty sky and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `sky_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
*/
sky_create(): RID;

/** Sets the material that the sky uses to render the background, ambient and reflection maps. */
sky_set_material(): void;

/** Sets the process [param mode] of the sky specified by the [param sky] RID. Equivalent to [member Sky.process_mode]. */
sky_set_mode(): void;

/** Sets the [param radiance_size] of the sky specified by the [param sky] RID (in pixels). Equivalent to [member Sky.radiance_size]. */
sky_set_radiance_size(): void;

/**
 * Creates a spot light and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID can be used in most `light_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
 * To place in a scene, attach this spot light to an instance using [method instance_set_base] using the returned RID.
 *
*/
spot_light_create(): RID;

/** Sets [member ProjectSettings.rendering/environment/subsurface_scattering/subsurface_scattering_quality] to use when rendering materials that have subsurface scattering enabled. */
sub_surface_scattering_set_quality(): void;

/** Sets the [member ProjectSettings.rendering/environment/subsurface_scattering/subsurface_scattering_scale] and [member ProjectSettings.rendering/environment/subsurface_scattering/subsurface_scattering_depth_scale] to use when rendering materials that have subsurface scattering enabled. */
sub_surface_scattering_set_scale(): void;

/**
 * Creates a 2-dimensional texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `texture_2d_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
 * **Note:** The equivalent resource is [Texture2D].
 *
 * **Note:** Not to be confused with [method RenderingDevice.texture_create], which creates the graphics API's own texture type as opposed to the Godot-specific [Texture2D] resource.
 *
*/
texture_2d_create(): RID;

/**
 * Returns an [Image] instance from the given [param texture] [RID].
 *
 * Example of getting the test texture from [method get_test_texture] and applying it to a [Sprite2D] node:
 *
 * @example 
 * 
 * var texture_rid = RenderingServer.get_test_texture()
 * var texture = ImageTexture.create_from_image(RenderingServer.texture_2d_get(texture_rid))
 * $Sprite2D.texture = texture
 * @summary 
 * 
 *
*/
texture_2d_get(): Image;

/** Returns an [Image] instance from the given [param texture] [RID] and [param layer]. */
texture_2d_layer_get(): Image;

/**
 * Creates a 2-dimensional layered texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `texture_2d_layered_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
 * **Note:** The equivalent resource is [TextureLayered].
 *
*/
texture_2d_layered_create(): RID;

/**
 * Creates a placeholder for a 2-dimensional layered texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `texture_2d_layered_*` RenderingServer functions, although it does nothing when used. See also [method texture_2d_placeholder_create].
 *
 * **Note:** The equivalent resource is [PlaceholderTextureLayered].
 *
*/
texture_2d_layered_placeholder_create(): RID;

/**
 * Creates a placeholder for a 2-dimensional layered texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `texture_2d_layered_*` RenderingServer functions, although it does nothing when used. See also [method texture_2d_layered_placeholder_create]
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
 * **Note:** The equivalent resource is [PlaceholderTexture2D].
 *
*/
texture_2d_placeholder_create(): RID;

/**
 * Updates the texture specified by the [param texture] [RID] with the data in [param image]. A [param layer] must also be specified, which should be `0` when updating a single-layer texture ([Texture2D]).
 *
 * **Note:** The [param image] must have the same width, height and format as the current [param texture] data. Otherwise, an error will be printed and the original texture won't be modified. If you need to use different width, height or format, use [method texture_replace] instead.
 *
*/
texture_2d_update(): void;

/** [b]Note:[/b] The equivalent resource is [Texture3D]. */
texture_3d_create(): RID;

/** Returns 3D texture data as an array of [Image]s for the specified texture [RID]. */
texture_3d_get(): Image[];

/**
 * Creates a placeholder for a 3-dimensional texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `texture_3d_*` RenderingServer functions, although it does nothing when used.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
 * **Note:** The equivalent resource is [PlaceholderTexture3D].
 *
*/
texture_3d_placeholder_create(): RID;

/**
 * Updates the texture specified by the [param texture] [RID]'s data with the data in [param data]. All the texture's layers must be replaced at once.
 *
 * **Note:** The [param texture] must have the same width, height, depth and format as the current texture data. Otherwise, an error will be printed and the original texture won't be modified. If you need to use different width, height, depth or format, use [method texture_replace] instead.
 *
*/
texture_3d_update(): void;

/** Returns the [enum Image.Format] for the texture. */
texture_get_format(): int;

/**
 * Returns the internal graphics handle for this texture object. For use when communicating with third-party APIs mostly with GDExtension.
 *
 * **Note:** This function returns a `uint64_t` which internally maps to a `GLuint` (OpenGL) or `VkImage` (Vulkan).
 *
*/
texture_get_native_handle(): int;

/** No documentation provided. */
texture_get_path(): string;

/** Returns a texture [RID] that can be used with [RenderingDevice]. */
texture_get_rd_texture(): RID;

/** [i]Deprecated.[/i] ProxyTexture was removed in Godot 4, so this method does nothing when called and always returns a null [RID]. */
texture_proxy_create(): RID;

/** [i]Deprecated.[/i] ProxyTexture was removed in Godot 4, so this method cannot be used anymore. */
texture_proxy_update(): void;

/** Creates a new texture object based on a texture created directly on the [RenderingDevice]. If the texture contains layers, [param layer_type] is used to define the layer type. */
texture_rd_create(): RID;

/** Replaces [param texture]'s texture data by the texture specified by the [param by_texture] RID, without changing [param texture]'s RID. */
texture_replace(): void;

/** No documentation provided. */
texture_set_force_redraw_if_visible(): void;

/** No documentation provided. */
texture_set_path(): void;

/** No documentation provided. */
texture_set_size_override(): void;

/** Sets a viewport's camera. */
viewport_attach_camera(): void;

/** Sets a viewport's canvas. */
viewport_attach_canvas(): void;

/**
 * Copies the viewport to a region of the screen specified by [param rect]. If [method viewport_set_render_direct_to_screen] is `true`, then the viewport does not use a framebuffer and the contents of the viewport are rendered directly to screen. However, note that the root viewport is drawn last, therefore it will draw over the screen. Accordingly, you must set the root viewport to an area that does not cover the area that you have attached this viewport to.
 *
 * For example, you can set the root viewport to not render at all with the following code:
 *
 * FIXME: The method seems to be non-existent.
 *
 * @example 
 * 
 * 
 * func _ready():
 *     get_viewport().set_attach_to_screen_rect(Rect2())
 *     $Viewport.set_attach_to_screen_rect(Rect2(0, 0, 600, 600))
 * 
 * @summary 
 * 
 *
 * Using this can result in significant optimization, especially on lower-end devices. However, it comes at the cost of having to manage your viewports manually. For further optimization, see [method viewport_set_render_direct_to_screen].
 *
*/
viewport_attach_to_screen(): void;

/**
 * Creates an empty viewport and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `viewport_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
 * **Note:** The equivalent node is [Viewport].
 *
*/
viewport_create(): RID;

/**
 * Returns the CPU time taken to render the last frame in milliseconds. This **only** includes time spent in rendering-related operations; scripts' `_process` functions and other engine subsystems are not included in this readout. To get a complete readout of CPU time spent to render the scene, sum the render times of all viewports that are drawn every frame plus [method get_frame_setup_time_cpu]. Unlike [method Engine.get_frames_per_second], this method will accurately reflect CPU utilization even if framerate is capped via V-Sync or [member Engine.max_fps]. See also [method viewport_get_measured_render_time_gpu].
 *
 * **Note:** Requires measurements to be enabled on the specified [param viewport] using [method viewport_set_measure_render_time]. Otherwise, this method returns `0.0`.
 *
*/
viewport_get_measured_render_time_cpu(): float;

/**
 * Returns the GPU time taken to render the last frame in milliseconds. To get a complete readout of GPU time spent to render the scene, sum the render times of all viewports that are drawn every frame. Unlike [method Engine.get_frames_per_second], this method accurately reflects GPU utilization even if framerate is capped via V-Sync or [member Engine.max_fps]. See also [method viewport_get_measured_render_time_gpu].
 *
 * **Note:** Requires measurements to be enabled on the specified [param viewport] using [method viewport_set_measure_render_time]. Otherwise, this method returns `0.0`.
 *
 * **Note:** When GPU utilization is low enough during a certain period of time, GPUs will decrease their power state (which in turn decreases core and memory clock speeds). This can cause the reported GPU time to increase if GPU utilization is kept low enough by a framerate cap (compared to what it would be at the GPU's highest power state). Keep this in mind when benchmarking using [method viewport_get_measured_render_time_gpu]. This behavior can be overridden in the graphics driver settings at the cost of higher power usage.
 *
*/
viewport_get_measured_render_time_gpu(): float;

/**
 * Returns a statistic about the rendering engine which can be used for performance profiling. This is separated into render pass [param type]s, each of them having the same [param info]s you can query (different passes will return different values). See [enum RenderingServer.ViewportRenderInfoType] for a list of render pass types and [enum RenderingServer.ViewportRenderInfo] for a list of information that can be queried.
 *
 * See also [method get_rendering_info], which returns global information across all viewports.
 *
 * **Note:** Viewport rendering information is not available until at least 2 frames have been rendered by the engine. If rendering information is not available, [method viewport_get_render_info] returns `0`. To print rendering information in `_ready()` successfully, use the following:
 *
 * @example 
 * 
 * func _ready():
 *     for _i in 2:
 *         await get_tree().process_frame
 *     print(
 *             RenderingServer.viewport_get_render_info(get_viewport().get_viewport_rid(),
 *             RenderingServer.VIEWPORT_RENDER_INFO_TYPE_VISIBLE,
 *             RenderingServer.VIEWPORT_RENDER_INFO_DRAW_CALLS_IN_FRAME)
 *     )
 * @summary 
 * 
 *
*/
viewport_get_render_info(): int;

/** Returns the render target for the viewport. */
viewport_get_render_target(): RID;

/** Returns the viewport's last rendered frame. */
viewport_get_texture(): RID;

/** Detaches a viewport from a canvas and vice versa. */
viewport_remove_canvas(): void;

/** If [code]true[/code], sets the viewport active, else sets it inactive. */
viewport_set_active(): void;

/** Sets the rendering mask associated with this [Viewport]. Only [CanvasItem] nodes with a matching rendering visibility layer will be rendered by this [Viewport]. */
viewport_set_canvas_cull_mask(): void;

/**
 * Sets the stacking order for a viewport's canvas.
 *
 * [param layer] is the actual canvas layer, while [param sublayer] specifies the stacking order of the canvas among those in the same layer.
 *
*/
viewport_set_canvas_stacking(): void;

/** Sets the transformation of a viewport's canvas. */
viewport_set_canvas_transform(): void;

/** Sets the clear mode of a viewport. See [enum ViewportClearMode] for options. */
viewport_set_clear_mode(): void;

/** Sets the debug draw mode of a viewport. See [enum ViewportDebugDraw] for options. */
viewport_set_debug_draw(): void;

/** Sets the default texture filtering mode for the specified [param viewport] RID. See [enum CanvasItemTextureFilter] for options. */
viewport_set_default_canvas_item_texture_filter(): void;

/** Sets the default texture repeat mode for the specified [param viewport] RID. See [enum CanvasItemTextureRepeat] for options. */
viewport_set_default_canvas_item_texture_repeat(): void;

/** If [code]true[/code], the viewport's canvas (i.e. 2D and GUI elements) is not rendered. */
viewport_set_disable_2d(): void;

/** If [code]true[/code], the viewport's 3D elements are not rendered. */
viewport_set_disable_3d(): void;

/** Sets the viewport's environment mode which allows enabling or disabling rendering of 3D environment over 2D canvas. When disabled, 2D will not be affected by the environment. When enabled, 2D will be affected by the environment if the environment background mode is [constant ENV_BG_CANVAS]. The default behavior is to inherit the setting from the viewport's parent. If the topmost parent is also set to [constant VIEWPORT_ENVIRONMENT_INHERIT], then the behavior will be the same as if it was set to [constant VIEWPORT_ENVIRONMENT_ENABLED]. */
viewport_set_environment_mode(): void;

/** Determines how sharp the upscaled image will be when using the FSR upscaling mode. Sharpness halves with every whole number. Values go from 0.0 (sharpest) to 2.0. Values above 2.0 won't make a visible difference. */
viewport_set_fsr_sharpness(): void;

/** Sets the viewport's global transformation matrix. */
viewport_set_global_canvas_transform(): void;

/** Sets the measurement for the given [param viewport] RID (obtained using [method Viewport.get_viewport_rid]). Once enabled, [method viewport_get_measured_render_time_cpu] and [method viewport_get_measured_render_time_gpu] will return values greater than [code]0.0[/code] when queried with the given [param viewport]. */
viewport_set_measure_render_time(): void;

/** Sets the multisample anti-aliasing mode for 2D/Canvas on the specified [param viewport] RID. See [enum ViewportMSAA] for options. */
viewport_set_msaa_2d(): void;

/** Sets the multisample anti-aliasing mode for 3D on the specified [param viewport] RID. See [enum ViewportMSAA] for options. */
viewport_set_msaa_3d(): void;

/** Sets the [member ProjectSettings.rendering/occlusion_culling/bvh_build_quality] to use for occlusion culling. This parameter is global and cannot be set on a per-viewport basis. */
viewport_set_occlusion_culling_build_quality(): void;

/** Sets the [member ProjectSettings.rendering/occlusion_culling/occlusion_rays_per_thread] to use for occlusion culling. This parameter is global and cannot be set on a per-viewport basis. */
viewport_set_occlusion_rays_per_thread(): void;

/** Sets the viewport's parent to the viewport specified by the [param parent_viewport] RID. */
viewport_set_parent_viewport(): void;

/** Sets the number of subdivisions to use in the specified shadow atlas [param quadrant] for omni and spot shadows. See also [method Viewport.set_positional_shadow_atlas_quadrant_subdiv]. */
viewport_set_positional_shadow_atlas_quadrant_subdivision(): void;

/**
 * Sets the [param size] of the shadow atlas's images (used for omni and spot lights) on the viewport specified by the [param viewport] RID. The value is rounded up to the nearest power of 2. If [param use_16_bits] is `true`, use 16 bits for the omni/spot shadow depth map. Enabling this results in shadows having less precision and may result in shadow acne, but can lead to performance improvements on some devices.
 *
 * **Note:** If this is set to `0`, no positional shadows will be visible at all. This can improve performance significantly on low-end systems by reducing both the CPU and GPU load (as fewer draw calls are needed to draw the scene without shadows).
 *
*/
viewport_set_positional_shadow_atlas_size(): void;

/** If [code]true[/code], render the contents of the viewport directly to screen. This allows a low-level optimization where you can skip drawing a viewport to the root viewport. While this optimization can result in a significant increase in speed (especially on older devices), it comes at a cost of usability. When this is enabled, you cannot read from the viewport or from the screen_texture. You also lose the benefit of certain window settings, such as the various stretch modes. Another consequence to be aware of is that in 2D the rendering happens in window coordinates, so if you have a viewport that is double the size of the window, and you set this, then only the portion that fits within the window will be drawn, no automatic scaling is possible, even if your game scene is significantly larger than the window size. */
viewport_set_render_direct_to_screen(): void;

/** Sets the 3D resolution scaling mode. Bilinear scaling renders at different resolution to either undersample or supersample the viewport. FidelityFX Super Resolution 1.0, abbreviated to FSR, is an upscaling technology that produces high quality images at fast framerates by using a spatially aware upscaling algorithm. FSR is slightly more expensive than bilinear, but it produces significantly higher image quality. FSR should be used where possible. */
viewport_set_scaling_3d_mode(): void;

/**
 * Scales the 3D render buffer based on the viewport size uses an image filter specified in [enum ViewportScaling3DMode] to scale the output image to the full viewport size. Values lower than `1.0` can be used to speed up 3D rendering at the cost of quality (undersampling). Values greater than `1.0` are only valid for bilinear mode and can be used to improve 3D rendering quality at a high performance cost (supersampling). See also [enum ViewportMSAA] for multi-sample antialiasing, which is significantly cheaper but only smoothens the edges of polygons.
 *
 * When using FSR upscaling, AMD recommends exposing the following values as preset options to users "Ultra Quality: 0.77", "Quality: 0.67", "Balanced: 0.59", "Performance: 0.5" instead of exposing the entire scale.
 *
*/
viewport_set_scaling_3d_scale(): void;

/** Sets a viewport's scenario. The scenario contains information about environment information, reflection atlas, etc. */
viewport_set_scenario(): void;

/** Sets the viewport's screen-space antialiasing mode. */
viewport_set_screen_space_aa(): void;

/** Sets the viewport's 2D signed distance field [member ProjectSettings.rendering/2d/sdf/oversize] and [member ProjectSettings.rendering/2d/sdf/scale]. This is used when sampling the signed distance field in [CanvasItem] shaders as well as [GPUParticles2D] collision. This is [i]not[/i] used by SDFGI in 3D rendering. */
viewport_set_sdf_oversize_and_scale(): void;

/** Sets the viewport's width and height in pixels. */
viewport_set_size(): void;

/** If [code]true[/code], canvas item transforms (i.e. origin position) are snapped to the nearest pixel when rendering. This can lead to a crisper appearance at the cost of less smooth movement, especially when [Camera2D] smoothing is enabled. Equivalent to [member ProjectSettings.rendering/2d/snap/snap_2d_transforms_to_pixel]. */
viewport_set_snap_2d_transforms_to_pixel(): void;

/** If [code]true[/code], canvas item vertices (i.e. polygon points) are snapped to the nearest pixel when rendering. This can lead to a crisper appearance at the cost of less smooth movement, especially when [Camera2D] smoothing is enabled. Equivalent to [member ProjectSettings.rendering/2d/snap/snap_2d_vertices_to_pixel]. */
viewport_set_snap_2d_vertices_to_pixel(): void;

/**
 * Affects the final texture sharpness by reading from a lower or higher mipmap (also called "texture LOD bias"). Negative values make mipmapped textures sharper but grainier when viewed at a distance, while positive values make mipmapped textures blurrier (even when up close). To get sharper textures at a distance without introducing too much graininess, set this between `-0.75` and `0.0`. Enabling temporal antialiasing ([member ProjectSettings.rendering/anti_aliasing/quality/use_taa]) can help reduce the graininess visible when using negative mipmap bias.
 *
 * **Note:** When the 3D scaling mode is set to FSR 1.0, this value is used to adjust the automatic mipmap bias which is calculated internally based on the scale factor. The formula for this is `-log2(1.0 / scale) + mipmap_bias`.
 *
*/
viewport_set_texture_mipmap_bias(): void;

/** If [code]true[/code], the viewport renders its background as transparent. */
viewport_set_transparent_background(): void;

/** Sets when the viewport should be updated. See [enum ViewportUpdateMode] constants for options. */
viewport_set_update_mode(): void;

/** If [code]true[/code], enables debanding on the specified viewport. Equivalent to [member ProjectSettings.rendering/anti_aliasing/quality/use_debanding]. */
viewport_set_use_debanding(): void;

/**
 * If `true`, 2D rendering will use a high dynamic range (HDR) format framebuffer matching the bit depth of the 3D framebuffer. When using the Forward+ renderer this will be a `RGBA16` framebuffer, while when using the Mobile renderer it will be a `RGB10_A2` framebuffer. Additionally, 2D rendering will take place in linear color space and will be converted to sRGB space immediately before blitting to the screen (if the Viewport is attached to the screen). Practically speaking, this means that the end result of the Viewport will not be clamped into the `0-1` range and can be used in 3D rendering without color space adjustments. This allows 2D rendering to take advantage of effects requiring high dynamic range (e.g. 2D glow) as well as substantially improves the appearance of effects requiring highly detailed gradients. This setting has the same effect as [member Viewport.use_hdr_2d].
 *
 * **Note:** This setting will have no effect when using the GL Compatibility renderer as the GL Compatibility renderer always renders in low dynamic range for performance reasons.
 *
*/
viewport_set_use_hdr_2d(): void;

/** If [code]true[/code], enables occlusion culling on the specified viewport. Equivalent to [member ProjectSettings.rendering/occlusion_culling/use_occlusion_culling]. */
viewport_set_use_occlusion_culling(): void;

/** If [code]true[/code], use Temporal Anti-Aliasing. Equivalent to [member ProjectSettings.rendering/anti_aliasing/quality/use_taa]. */
viewport_set_use_taa(): void;

/** If [code]true[/code], the viewport uses augmented or virtual reality technologies. See [XRInterface]. */
viewport_set_use_xr(): void;

/** Sets the Variable Rate Shading (VRS) mode for the viewport. If the GPU does not support VRS, this property is ignored. Equivalent to [member ProjectSettings.rendering/vrs/mode]. */
viewport_set_vrs_mode(): void;

/** The texture to use when the VRS mode is set to [constant RenderingServer.VIEWPORT_VRS_TEXTURE]. Equivalent to [member ProjectSettings.rendering/vrs/texture]. */
viewport_set_vrs_texture(): void;

/**
 * Creates a new 3D visibility notifier object and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `visibility_notifier_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
 * To place in a scene, attach this mesh to an instance using [method instance_set_base] using the returned RID.
 *
 * **Note:** The equivalent node is [VisibleOnScreenNotifier3D].
 *
*/
visibility_notifier_create(): RID;

/** No documentation provided. */
visibility_notifier_set_aabb(): void;

/** No documentation provided. */
visibility_notifier_set_callbacks(): void;

/** No documentation provided. */
voxel_gi_allocate_data(): void;

/**
 * Creates a new voxel-based global illumination object and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `voxel_gi_*` RenderingServer functions.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.
 *
 * **Note:** The equivalent node is [VoxelGI].
 *
*/
voxel_gi_create(): RID;

/** No documentation provided. */
voxel_gi_get_data_cells(): PackedByteArray;

/** No documentation provided. */
voxel_gi_get_distance_field(): PackedByteArray;

/** No documentation provided. */
voxel_gi_get_level_counts(): PackedInt32Array;

/** No documentation provided. */
voxel_gi_get_octree_cells(): PackedByteArray;

/** No documentation provided. */
voxel_gi_get_octree_size(): Vector3i;

/** No documentation provided. */
voxel_gi_get_to_cell_xform(): Transform3D;

/** Used to inform the renderer what exposure normalization value was used while baking the voxel gi. This value will be used and modulated at run time to ensure that the voxel gi maintains a consistent level of exposure even if the scene-wide exposure normalization is changed at run time. For more information see [method camera_attributes_set_exposure]. */
voxel_gi_set_baked_exposure_normalization(): void;

/** Sets the [member VoxelGIData.bias] value to use on the specified [param voxel_gi]'s [RID]. */
voxel_gi_set_bias(): void;

/** Sets the [member VoxelGIData.dynamic_range] value to use on the specified [param voxel_gi]'s [RID]. */
voxel_gi_set_dynamic_range(): void;

/** Sets the [member VoxelGIData.energy] value to use on the specified [param voxel_gi]'s [RID]. */
voxel_gi_set_energy(): void;

/** Sets the [member VoxelGIData.interior] value to use on the specified [param voxel_gi]'s [RID]. */
voxel_gi_set_interior(): void;

/** Sets the [member VoxelGIData.normal_bias] value to use on the specified [param voxel_gi]'s [RID]. */
voxel_gi_set_normal_bias(): void;

/** Sets the [member VoxelGIData.propagation] value to use on the specified [param voxel_gi]'s [RID]. */
voxel_gi_set_propagation(): void;

/** Sets the [member ProjectSettings.rendering/global_illumination/voxel_gi/quality] value to use when rendering. This parameter is global and cannot be set on a per-VoxelGI basis. */
voxel_gi_set_quality(): void;

/** Sets the [member VoxelGIData.use_two_bounces] value to use on the specified [param voxel_gi]'s [RID]. */
voxel_gi_set_use_two_bounces(): void;

  connect<T extends SignalsOf<RenderingServerClass>>(signal: T, method: SignalFunction<RenderingServerClass[T]>): number;



/**
 * Marks an error that shows that the index array is empty.
 *
*/
static NO_INDEX_ARRAY: any;

/**
 * Number of weights/bones per vertex.
 *
*/
static ARRAY_WEIGHTS_SIZE: any;

/**
 * The minimum Z-layer for canvas items.
 *
*/
static CANVAS_ITEM_Z_MIN: any;

/**
 * The maximum Z-layer for canvas items.
 *
*/
static CANVAS_ITEM_Z_MAX: any;

/**
 * The maximum number of glow levels that can be used with the glow post-processing effect.
 *
*/
static MAX_GLOW_LEVELS: any;

/**
 * **Deprecated.** This constant is unused internally.
 *
*/
static MAX_CURSORS: any;

/**
 * The maximum number of directional lights that can be rendered at a given time in 2D.
 *
*/
static MAX_2D_DIRECTIONAL_LIGHTS: any;

/**
 * Array of 2-dimensional textures (see [Texture2DArray]).
 *
*/
static TEXTURE_LAYERED_2D_ARRAY: any;

/**
 * Cubemap texture (see [Cubemap]).
 *
*/
static TEXTURE_LAYERED_CUBEMAP: any;

/**
 * Array of cubemap textures (see [CubemapArray]).
 *
*/
static TEXTURE_LAYERED_CUBEMAP_ARRAY: any;

/**
 * Left face of a [Cubemap].
 *
*/
static CUBEMAP_LAYER_LEFT: any;

/**
 * Right face of a [Cubemap].
 *
*/
static CUBEMAP_LAYER_RIGHT: any;

/**
 * Bottom face of a [Cubemap].
 *
*/
static CUBEMAP_LAYER_BOTTOM: any;

/**
 * Top face of a [Cubemap].
 *
*/
static CUBEMAP_LAYER_TOP: any;

/**
 * Front face of a [Cubemap].
 *
*/
static CUBEMAP_LAYER_FRONT: any;

/**
 * Back face of a [Cubemap].
 *
*/
static CUBEMAP_LAYER_BACK: any;

/**
 * Shader is a 3D shader.
 *
*/
static SHADER_SPATIAL: any;

/**
 * Shader is a 2D shader.
 *
*/
static SHADER_CANVAS_ITEM: any;

/**
 * Shader is a particle shader (can be used in both 2D and 3D).
 *
*/
static SHADER_PARTICLES: any;

/**
 * Shader is a 3D sky shader.
 *
*/
static SHADER_SKY: any;

/**
 * Shader is a 3D fog shader.
 *
*/
static SHADER_FOG: any;

/**
 * Represents the size of the [enum ShaderMode] enum.
 *
*/
static SHADER_MAX: any;

/**
 * The minimum renderpriority of all materials.
 *
*/
static MATERIAL_RENDER_PRIORITY_MIN: any;

/**
 * The maximum renderpriority of all materials.
 *
*/
static MATERIAL_RENDER_PRIORITY_MAX: any;

/**
 * Array is a vertex position array.
 *
*/
static ARRAY_VERTEX: any;

/**
 * Array is a normal array.
 *
*/
static ARRAY_NORMAL: any;

/**
 * Array is a tangent array.
 *
*/
static ARRAY_TANGENT: any;

/**
 * Array is a vertex color array.
 *
*/
static ARRAY_COLOR: any;

/**
 * Array is a UV coordinates array.
 *
*/
static ARRAY_TEX_UV: any;

/**
 * Array is a UV coordinates array for the second set of UV coordinates.
 *
*/
static ARRAY_TEX_UV2: any;

/**
 * Array is a custom data array for the first set of custom data.
 *
*/
static ARRAY_CUSTOM0: any;

/**
 * Array is a custom data array for the second set of custom data.
 *
*/
static ARRAY_CUSTOM1: any;

/**
 * Array is a custom data array for the third set of custom data.
 *
*/
static ARRAY_CUSTOM2: any;

/**
 * Array is a custom data array for the fourth set of custom data.
 *
*/
static ARRAY_CUSTOM3: any;

/**
 * Array contains bone information.
 *
*/
static ARRAY_BONES: any;

/**
 * Array is weight information.
 *
*/
static ARRAY_WEIGHTS: any;

/**
 * Array is an index array.
 *
*/
static ARRAY_INDEX: any;

/**
 * Represents the size of the [enum ArrayType] enum.
 *
*/
static ARRAY_MAX: any;

/**
 * The number of custom data arrays available ([constant ARRAY_CUSTOM0], [constant ARRAY_CUSTOM1], [constant ARRAY_CUSTOM2], [constant ARRAY_CUSTOM3]).
 *
*/
static ARRAY_CUSTOM_COUNT: any;

/**
 * Custom data array contains 8-bit-per-channel red/green/blue/alpha color data. Values are normalized, unsigned floating-point in the `[0.0, 1.0]` range.
 *
*/
static ARRAY_CUSTOM_RGBA8_UNORM: any;

/**
 * Custom data array contains 8-bit-per-channel red/green/blue/alpha color data. Values are normalized, signed floating-point in the `[-1.0, 1.0]` range.
 *
*/
static ARRAY_CUSTOM_RGBA8_SNORM: any;

/**
 * Custom data array contains 16-bit-per-channel red/green color data. Values are floating-point in half precision.
 *
*/
static ARRAY_CUSTOM_RG_HALF: any;

/**
 * Custom data array contains 16-bit-per-channel red/green/blue/alpha color data. Values are floating-point in half precision.
 *
*/
static ARRAY_CUSTOM_RGBA_HALF: any;

/**
 * Custom data array contains 32-bit-per-channel red color data. Values are floating-point in single precision.
 *
*/
static ARRAY_CUSTOM_R_FLOAT: any;

/**
 * Custom data array contains 32-bit-per-channel red/green color data. Values are floating-point in single precision.
 *
*/
static ARRAY_CUSTOM_RG_FLOAT: any;

/**
 * Custom data array contains 32-bit-per-channel red/green/blue color data. Values are floating-point in single precision.
 *
*/
static ARRAY_CUSTOM_RGB_FLOAT: any;

/**
 * Custom data array contains 32-bit-per-channel red/green/blue/alpha color data. Values are floating-point in single precision.
 *
*/
static ARRAY_CUSTOM_RGBA_FLOAT: any;

/**
 * Represents the size of the [enum ArrayCustomFormat] enum.
 *
*/
static ARRAY_CUSTOM_MAX: any;

/**
 * Flag used to mark a vertex position array.
 *
*/
static ARRAY_FORMAT_VERTEX: any;

/**
 * Flag used to mark a normal array.
 *
*/
static ARRAY_FORMAT_NORMAL: any;

/**
 * Flag used to mark a tangent array.
 *
*/
static ARRAY_FORMAT_TANGENT: any;

/**
 * Flag used to mark a vertex color array.
 *
*/
static ARRAY_FORMAT_COLOR: any;

/**
 * Flag used to mark a UV coordinates array.
 *
*/
static ARRAY_FORMAT_TEX_UV: any;

/**
 * Flag used to mark a UV coordinates array for the second UV coordinates.
 *
*/
static ARRAY_FORMAT_TEX_UV2: any;

/**
 * Flag used to mark an array of custom per-vertex data for the first set of custom data.
 *
*/
static ARRAY_FORMAT_CUSTOM0: any;

/**
 * Flag used to mark an array of custom per-vertex data for the second set of custom data.
 *
*/
static ARRAY_FORMAT_CUSTOM1: any;

/**
 * Flag used to mark an array of custom per-vertex data for the third set of custom data.
 *
*/
static ARRAY_FORMAT_CUSTOM2: any;

/**
 * Flag used to mark an array of custom per-vertex data for the fourth set of custom data.
 *
*/
static ARRAY_FORMAT_CUSTOM3: any;

/**
 * Flag used to mark a bone information array.
 *
*/
static ARRAY_FORMAT_BONES: any;

/**
 * Flag used to mark a weights array.
 *
*/
static ARRAY_FORMAT_WEIGHTS: any;

/**
 * Flag used to mark an index array.
 *
*/
static ARRAY_FORMAT_INDEX: any;

/** No documentation provided. */
static ARRAY_FORMAT_BLEND_SHAPE_MASK: any;

/** No documentation provided. */
static ARRAY_FORMAT_CUSTOM_BASE: any;

/** No documentation provided. */
static ARRAY_FORMAT_CUSTOM_BITS: any;

/** No documentation provided. */
static ARRAY_FORMAT_CUSTOM0_SHIFT: any;

/** No documentation provided. */
static ARRAY_FORMAT_CUSTOM1_SHIFT: any;

/** No documentation provided. */
static ARRAY_FORMAT_CUSTOM2_SHIFT: any;

/** No documentation provided. */
static ARRAY_FORMAT_CUSTOM3_SHIFT: any;

/** No documentation provided. */
static ARRAY_FORMAT_CUSTOM_MASK: any;

/** No documentation provided. */
static ARRAY_COMPRESS_FLAGS_BASE: any;

/**
 * Flag used to mark that the array contains 2D vertices.
 *
*/
static ARRAY_FLAG_USE_2D_VERTICES: any;

/** No documentation provided. */
static ARRAY_FLAG_USE_DYNAMIC_UPDATE: any;

/**
 * Flag used to mark that the array uses 8 bone weights instead of 4.
 *
*/
static ARRAY_FLAG_USE_8_BONE_WEIGHTS: any;

/**
 * Flag used to mark that the mesh does not have a vertex array and instead will infer vertex positions in the shader using indices and other information.
 *
*/
static ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY: any;

/**
 * Flag used to mark that a mesh is using compressed attributes (vertices, normals, tangents, UVs). When this form of compression is enabled, vertex positions will be packed into an RGBA16UNORM attribute and scaled in the vertex shader. The normal and tangent will be packed into an RG16UNORM representing an axis, and a 16-bit float stored in the A-channel of the vertex. UVs will use 16-bit normalized floats instead of full 32-bit signed floats. When using this compression mode you must use either vertices, normals, and tangents or only vertices. You cannot use normals without tangents. Importers will automatically enable this compression if they can.
 *
*/
static ARRAY_FLAG_COMPRESS_ATTRIBUTES: any;

/**
 * Flag used to mark the start of the bits used to store the mesh version.
 *
*/
static ARRAY_FLAG_FORMAT_VERSION_BASE: any;

/**
 * Flag used to shift a mesh format int to bring the version into the lowest digits.
 *
*/
static ARRAY_FLAG_FORMAT_VERSION_SHIFT: any;

/**
 * Flag used to record the format used by prior mesh versions before the introduction of a version.
 *
*/
static ARRAY_FLAG_FORMAT_VERSION_1: any;

/**
 * Flag used to record the second iteration of the mesh version flag. The primary difference between this and [constant ARRAY_FLAG_FORMAT_VERSION_1] is that this version supports [constant ARRAY_FLAG_COMPRESS_ATTRIBUTES] and in this version vertex positions are de-interleaved from normals and tangents.
 *
*/
static ARRAY_FLAG_FORMAT_VERSION_2: any;

/**
 * Flag used to record the current version that the engine expects. Currently this is the same as [constant ARRAY_FLAG_FORMAT_VERSION_2].
 *
*/
static ARRAY_FLAG_FORMAT_CURRENT_VERSION: any;

/**
 * Flag used to isolate the bits used for mesh version after using [constant ARRAY_FLAG_FORMAT_VERSION_SHIFT] to shift them into place.
 *
*/
static ARRAY_FLAG_FORMAT_VERSION_MASK: any;

/**
 * Primitive to draw consists of points.
 *
*/
static PRIMITIVE_POINTS: any;

/**
 * Primitive to draw consists of lines.
 *
*/
static PRIMITIVE_LINES: any;

/**
 * Primitive to draw consists of a line strip from start to end.
 *
*/
static PRIMITIVE_LINE_STRIP: any;

/**
 * Primitive to draw consists of triangles.
 *
*/
static PRIMITIVE_TRIANGLES: any;

/**
 * Primitive to draw consists of a triangle strip (the last 3 vertices are always combined to make a triangle).
 *
*/
static PRIMITIVE_TRIANGLE_STRIP: any;

/**
 * Represents the size of the [enum PrimitiveType] enum.
 *
*/
static PRIMITIVE_MAX: any;

/**
 * Blend shapes are normalized.
 *
*/
static BLEND_SHAPE_MODE_NORMALIZED: any;

/**
 * Blend shapes are relative to base weight.
 *
*/
static BLEND_SHAPE_MODE_RELATIVE: any;

/**
 * Use [Transform2D] to store MultiMesh transform.
 *
*/
static MULTIMESH_TRANSFORM_2D: any;

/**
 * Use [Transform3D] to store MultiMesh transform.
 *
*/
static MULTIMESH_TRANSFORM_3D: any;

/**
 * Nearest-neighbor filter for light projectors (use for pixel art light projectors). No mipmaps are used for rendering, which means light projectors at a distance will look sharp but grainy. This has roughly the same performance cost as using mipmaps.
 *
*/
static LIGHT_PROJECTOR_FILTER_NEAREST: any;

/**
 * Linear filter for light projectors (use for non-pixel art light projectors). No mipmaps are used for rendering, which means light projectors at a distance will look smooth but blurry. This has roughly the same performance cost as using mipmaps.
 *
*/
static LIGHT_PROJECTOR_FILTER_LINEAR: any;

/**
 * Nearest-neighbor filter for light projectors (use for pixel art light projectors). Isotropic mipmaps are used for rendering, which means light projectors at a distance will look smooth but blurry. This has roughly the same performance cost as not using mipmaps.
 *
*/
static LIGHT_PROJECTOR_FILTER_NEAREST_MIPMAPS: any;

/**
 * Linear filter for light projectors (use for non-pixel art light projectors). Isotropic mipmaps are used for rendering, which means light projectors at a distance will look smooth but blurry. This has roughly the same performance cost as not using mipmaps.
 *
*/
static LIGHT_PROJECTOR_FILTER_LINEAR_MIPMAPS: any;

/**
 * Nearest-neighbor filter for light projectors (use for pixel art light projectors). Anisotropic mipmaps are used for rendering, which means light projectors at a distance will look smooth and sharp when viewed from oblique angles. This looks better compared to isotropic mipmaps, but is slower. The level of anisotropic filtering is defined by [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level].
 *
*/
static LIGHT_PROJECTOR_FILTER_NEAREST_MIPMAPS_ANISOTROPIC: any;

/**
 * Linear filter for light projectors (use for non-pixel art light projectors). Anisotropic mipmaps are used for rendering, which means light projectors at a distance will look smooth and sharp when viewed from oblique angles. This looks better compared to isotropic mipmaps, but is slower. The level of anisotropic filtering is defined by [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level].
 *
*/
static LIGHT_PROJECTOR_FILTER_LINEAR_MIPMAPS_ANISOTROPIC: any;

/**
 * Directional (sun/moon) light (see [DirectionalLight3D]).
 *
*/
static LIGHT_DIRECTIONAL: any;

/**
 * Omni light (see [OmniLight3D]).
 *
*/
static LIGHT_OMNI: any;

/**
 * Spot light (see [SpotLight3D]).
 *
*/
static LIGHT_SPOT: any;

/**
 * The light's energy multiplier.
 *
*/
static LIGHT_PARAM_ENERGY: any;

/**
 * The light's indirect energy multiplier (final indirect energy is [constant LIGHT_PARAM_ENERGY] * [constant LIGHT_PARAM_INDIRECT_ENERGY]).
 *
*/
static LIGHT_PARAM_INDIRECT_ENERGY: any;

/**
 * The light's volumetric fog energy multiplier (final volumetric fog energy is [constant LIGHT_PARAM_ENERGY] * [constant LIGHT_PARAM_VOLUMETRIC_FOG_ENERGY]).
 *
*/
static LIGHT_PARAM_VOLUMETRIC_FOG_ENERGY: any;

/**
 * The light's influence on specularity.
 *
*/
static LIGHT_PARAM_SPECULAR: any;

/**
 * The light's range.
 *
*/
static LIGHT_PARAM_RANGE: any;

/**
 * The size of the light when using spot light or omni light. The angular size of the light when using directional light.
 *
*/
static LIGHT_PARAM_SIZE: any;

/**
 * The light's attenuation.
 *
*/
static LIGHT_PARAM_ATTENUATION: any;

/**
 * The spotlight's angle.
 *
*/
static LIGHT_PARAM_SPOT_ANGLE: any;

/**
 * The spotlight's attenuation.
 *
*/
static LIGHT_PARAM_SPOT_ATTENUATION: any;

/**
 * The maximum distance for shadow splits. Increasing this value will make directional shadows visible from further away, at the cost of lower overall shadow detail and performance (since more objects need to be included in the directional shadow rendering).
 *
*/
static LIGHT_PARAM_SHADOW_MAX_DISTANCE: any;

/**
 * Proportion of shadow atlas occupied by the first split.
 *
*/
static LIGHT_PARAM_SHADOW_SPLIT_1_OFFSET: any;

/**
 * Proportion of shadow atlas occupied by the second split.
 *
*/
static LIGHT_PARAM_SHADOW_SPLIT_2_OFFSET: any;

/**
 * Proportion of shadow atlas occupied by the third split. The fourth split occupies the rest.
 *
*/
static LIGHT_PARAM_SHADOW_SPLIT_3_OFFSET: any;

/**
 * Proportion of shadow max distance where the shadow will start to fade out.
 *
*/
static LIGHT_PARAM_SHADOW_FADE_START: any;

/**
 * Normal bias used to offset shadow lookup by object normal. Can be used to fix self-shadowing artifacts.
 *
*/
static LIGHT_PARAM_SHADOW_NORMAL_BIAS: any;

/**
 * Bias the shadow lookup to fix self-shadowing artifacts.
 *
*/
static LIGHT_PARAM_SHADOW_BIAS: any;

/**
 * Sets the size of the directional shadow pancake. The pancake offsets the start of the shadow's camera frustum to provide a higher effective depth resolution for the shadow. However, a high pancake size can cause artifacts in the shadows of large objects that are close to the edge of the frustum. Reducing the pancake size can help. Setting the size to `0` turns off the pancaking effect.
 *
*/
static LIGHT_PARAM_SHADOW_PANCAKE_SIZE: any;

/**
 * The light's shadow opacity. Values lower than `1.0` make the light appear through shadows. This can be used to fake global illumination at a low performance cost.
 *
*/
static LIGHT_PARAM_SHADOW_OPACITY: any;

/**
 * Blurs the edges of the shadow. Can be used to hide pixel artifacts in low resolution shadow maps. A high value can make shadows appear grainy and can cause other unwanted artifacts. Try to keep as near default as possible.
 *
*/
static LIGHT_PARAM_SHADOW_BLUR: any;

/** No documentation provided. */
static LIGHT_PARAM_TRANSMITTANCE_BIAS: any;

/**
 * Constant representing the intensity of the light, measured in Lumens when dealing with a [SpotLight3D] or [OmniLight3D], or measured in Lux with a [DirectionalLight3D]. Only used when [member ProjectSettings.rendering/lights_and_shadows/use_physical_light_units] is `true`.
 *
*/
static LIGHT_PARAM_INTENSITY: any;

/**
 * Represents the size of the [enum LightParam] enum.
 *
*/
static LIGHT_PARAM_MAX: any;

/**
 * Light is ignored when baking. This is the fastest mode, but the light will be taken into account when baking global illumination. This mode should generally be used for dynamic lights that change quickly, as the effect of global illumination is less noticeable on those lights.
 *
*/
static LIGHT_BAKE_DISABLED: any;

/**
 * Light is taken into account in static baking ([VoxelGI], [LightmapGI], SDFGI ([member Environment.sdfgi_enabled])). The light can be moved around or modified, but its global illumination will not update in real-time. This is suitable for subtle changes (such as flickering torches), but generally not large changes such as toggling a light on and off.
 *
*/
static LIGHT_BAKE_STATIC: any;

/**
 * Light is taken into account in dynamic baking ([VoxelGI] and SDFGI ([member Environment.sdfgi_enabled]) only). The light can be moved around or modified with global illumination updating in real-time. The light's global illumination appearance will be slightly different compared to [constant LIGHT_BAKE_STATIC]. This has a greater performance cost compared to [constant LIGHT_BAKE_STATIC]. When using SDFGI, the update speed of dynamic lights is affected by [member ProjectSettings.rendering/global_illumination/sdfgi/frames_to_update_lights].
 *
*/
static LIGHT_BAKE_DYNAMIC: any;

/**
 * Use a dual paraboloid shadow map for omni lights.
 *
*/
static LIGHT_OMNI_SHADOW_DUAL_PARABOLOID: any;

/**
 * Use a cubemap shadow map for omni lights. Slower but better quality than dual paraboloid.
 *
*/
static LIGHT_OMNI_SHADOW_CUBE: any;

/**
 * Use orthogonal shadow projection for directional light.
 *
*/
static LIGHT_DIRECTIONAL_SHADOW_ORTHOGONAL: any;

/**
 * Use 2 splits for shadow projection when using directional light.
 *
*/
static LIGHT_DIRECTIONAL_SHADOW_PARALLEL_2_SPLITS: any;

/**
 * Use 4 splits for shadow projection when using directional light.
 *
*/
static LIGHT_DIRECTIONAL_SHADOW_PARALLEL_4_SPLITS: any;

/**
 * Use DirectionalLight3D in both sky rendering and scene lighting.
 *
*/
static LIGHT_DIRECTIONAL_SKY_MODE_LIGHT_AND_SKY: any;

/**
 * Only use DirectionalLight3D in scene lighting.
 *
*/
static LIGHT_DIRECTIONAL_SKY_MODE_LIGHT_ONLY: any;

/**
 * Only use DirectionalLight3D in sky rendering.
 *
*/
static LIGHT_DIRECTIONAL_SKY_MODE_SKY_ONLY: any;

/**
 * Lowest shadow filtering quality (fastest). Soft shadows are not available with this quality setting, which means the [member Light3D.shadow_blur] property is ignored if [member Light3D.light_size] and [member Light3D.light_angular_distance] is `0.0`.
 *
 * **Note:** The variable shadow blur performed by [member Light3D.light_size] and [member Light3D.light_angular_distance] is still effective when using hard shadow filtering. In this case, [member Light3D.shadow_blur] **is** taken into account. However, the results will not be blurred, instead the blur amount is treated as a maximum radius for the penumbra.
 *
*/
static SHADOW_QUALITY_HARD: any;

/**
 * Very low shadow filtering quality (faster). When using this quality setting, [member Light3D.shadow_blur] is automatically multiplied by 0.75× to avoid introducing too much noise. This division only applies to lights whose [member Light3D.light_size] or [member Light3D.light_angular_distance] is `0.0`).
 *
*/
static SHADOW_QUALITY_SOFT_VERY_LOW: any;

/**
 * Low shadow filtering quality (fast).
 *
*/
static SHADOW_QUALITY_SOFT_LOW: any;

/**
 * Medium low shadow filtering quality (average).
 *
*/
static SHADOW_QUALITY_SOFT_MEDIUM: any;

/**
 * High low shadow filtering quality (slow). When using this quality setting, [member Light3D.shadow_blur] is automatically multiplied by 1.5× to better make use of the high sample count. This increased blur also improves the stability of dynamic object shadows. This multiplier only applies to lights whose [member Light3D.light_size] or [member Light3D.light_angular_distance] is `0.0`).
 *
*/
static SHADOW_QUALITY_SOFT_HIGH: any;

/**
 * Highest low shadow filtering quality (slowest). When using this quality setting, [member Light3D.shadow_blur] is automatically multiplied by 2× to better make use of the high sample count. This increased blur also improves the stability of dynamic object shadows. This multiplier only applies to lights whose [member Light3D.light_size] or [member Light3D.light_angular_distance] is `0.0`).
 *
*/
static SHADOW_QUALITY_SOFT_ULTRA: any;

/**
 * Represents the size of the [enum ShadowQuality] enum.
 *
*/
static SHADOW_QUALITY_MAX: any;

/**
 * Reflection probe will update reflections once and then stop.
 *
*/
static REFLECTION_PROBE_UPDATE_ONCE: any;

/**
 * Reflection probe will update each frame. This mode is necessary to capture moving objects.
 *
*/
static REFLECTION_PROBE_UPDATE_ALWAYS: any;

/**
 * Do not apply any ambient lighting inside the reflection probe's box defined by its size.
 *
*/
static REFLECTION_PROBE_AMBIENT_DISABLED: any;

/**
 * Apply automatically-sourced environment lighting inside the reflection probe's box defined by its size.
 *
*/
static REFLECTION_PROBE_AMBIENT_ENVIRONMENT: any;

/**
 * Apply custom ambient lighting inside the reflection probe's box defined by its size. See [method reflection_probe_set_ambient_color] and [method reflection_probe_set_ambient_energy].
 *
*/
static REFLECTION_PROBE_AMBIENT_COLOR: any;

/**
 * Albedo texture slot in a decal ([member Decal.texture_albedo]).
 *
*/
static DECAL_TEXTURE_ALBEDO: any;

/**
 * Normal map texture slot in a decal ([member Decal.texture_normal]).
 *
*/
static DECAL_TEXTURE_NORMAL: any;

/**
 * Occlusion/Roughness/Metallic texture slot in a decal ([member Decal.texture_orm]).
 *
*/
static DECAL_TEXTURE_ORM: any;

/**
 * Emission texture slot in a decal ([member Decal.texture_emission]).
 *
*/
static DECAL_TEXTURE_EMISSION: any;

/**
 * Represents the size of the [enum DecalTexture] enum.
 *
*/
static DECAL_TEXTURE_MAX: any;

/**
 * Nearest-neighbor filter for decals (use for pixel art decals). No mipmaps are used for rendering, which means decals at a distance will look sharp but grainy. This has roughly the same performance cost as using mipmaps.
 *
*/
static DECAL_FILTER_NEAREST: any;

/**
 * Linear filter for decals (use for non-pixel art decals). No mipmaps are used for rendering, which means decals at a distance will look smooth but blurry. This has roughly the same performance cost as using mipmaps.
 *
*/
static DECAL_FILTER_LINEAR: any;

/**
 * Nearest-neighbor filter for decals (use for pixel art decals). Isotropic mipmaps are used for rendering, which means decals at a distance will look smooth but blurry. This has roughly the same performance cost as not using mipmaps.
 *
*/
static DECAL_FILTER_NEAREST_MIPMAPS: any;

/**
 * Linear filter for decals (use for non-pixel art decals). Isotropic mipmaps are used for rendering, which means decals at a distance will look smooth but blurry. This has roughly the same performance cost as not using mipmaps.
 *
*/
static DECAL_FILTER_LINEAR_MIPMAPS: any;

/**
 * Nearest-neighbor filter for decals (use for pixel art decals). Anisotropic mipmaps are used for rendering, which means decals at a distance will look smooth and sharp when viewed from oblique angles. This looks better compared to isotropic mipmaps, but is slower. The level of anisotropic filtering is defined by [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level].
 *
*/
static DECAL_FILTER_NEAREST_MIPMAPS_ANISOTROPIC: any;

/**
 * Linear filter for decals (use for non-pixel art decals). Anisotropic mipmaps are used for rendering, which means decals at a distance will look smooth and sharp when viewed from oblique angles. This looks better compared to isotropic mipmaps, but is slower. The level of anisotropic filtering is defined by [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level].
 *
*/
static DECAL_FILTER_LINEAR_MIPMAPS_ANISOTROPIC: any;

/**
 * Low [VoxelGI] rendering quality using 4 cones.
 *
*/
static VOXEL_GI_QUALITY_LOW: any;

/**
 * High [VoxelGI] rendering quality using 6 cones.
 *
*/
static VOXEL_GI_QUALITY_HIGH: any;

/**
 * 2D particles.
 *
*/
static PARTICLES_MODE_2D: any;

/**
 * 3D particles.
 *
*/
static PARTICLES_MODE_3D: any;

/** No documentation provided. */
static PARTICLES_TRANSFORM_ALIGN_DISABLED: any;

/** No documentation provided. */
static PARTICLES_TRANSFORM_ALIGN_Z_BILLBOARD: any;

/** No documentation provided. */
static PARTICLES_TRANSFORM_ALIGN_Y_TO_VELOCITY: any;

/** No documentation provided. */
static PARTICLES_TRANSFORM_ALIGN_Z_BILLBOARD_Y_TO_VELOCITY: any;

/** No documentation provided. */
static PARTICLES_EMIT_FLAG_POSITION: any;

/** No documentation provided. */
static PARTICLES_EMIT_FLAG_ROTATION_SCALE: any;

/** No documentation provided. */
static PARTICLES_EMIT_FLAG_VELOCITY: any;

/** No documentation provided. */
static PARTICLES_EMIT_FLAG_COLOR: any;

/** No documentation provided. */
static PARTICLES_EMIT_FLAG_CUSTOM: any;

/**
 * Draw particles in the order that they appear in the particles array.
 *
*/
static PARTICLES_DRAW_ORDER_INDEX: any;

/**
 * Sort particles based on their lifetime. In other words, the particle with the highest lifetime is drawn at the front.
 *
*/
static PARTICLES_DRAW_ORDER_LIFETIME: any;

/**
 * Sort particles based on the inverse of their lifetime. In other words, the particle with the lowest lifetime is drawn at the front.
 *
*/
static PARTICLES_DRAW_ORDER_REVERSE_LIFETIME: any;

/**
 * Sort particles based on their distance to the camera.
 *
*/
static PARTICLES_DRAW_ORDER_VIEW_DEPTH: any;

/** No documentation provided. */
static PARTICLES_COLLISION_TYPE_SPHERE_ATTRACT: any;

/** No documentation provided. */
static PARTICLES_COLLISION_TYPE_BOX_ATTRACT: any;

/** No documentation provided. */
static PARTICLES_COLLISION_TYPE_VECTOR_FIELD_ATTRACT: any;

/** No documentation provided. */
static PARTICLES_COLLISION_TYPE_SPHERE_COLLIDE: any;

/** No documentation provided. */
static PARTICLES_COLLISION_TYPE_BOX_COLLIDE: any;

/** No documentation provided. */
static PARTICLES_COLLISION_TYPE_SDF_COLLIDE: any;

/** No documentation provided. */
static PARTICLES_COLLISION_TYPE_HEIGHTFIELD_COLLIDE: any;

/** No documentation provided. */
static PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_256: any;

/** No documentation provided. */
static PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_512: any;

/** No documentation provided. */
static PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_1024: any;

/** No documentation provided. */
static PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_2048: any;

/** No documentation provided. */
static PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_4096: any;

/** No documentation provided. */
static PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_8192: any;

/**
 * Represents the size of the [enum ParticlesCollisionHeightfieldResolution] enum.
 *
*/
static PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_MAX: any;

/**
 * [FogVolume] will be shaped like an ellipsoid (stretched sphere).
 *
*/
static FOG_VOLUME_SHAPE_ELLIPSOID: any;

/**
 * [FogVolume] will be shaped like a cone pointing upwards (in local coordinates). The cone's angle is set automatically to fill the size. The cone will be adjusted to fit within the size. Rotate the [FogVolume] node to reorient the cone. Non-uniform scaling via size is not supported (scale the [FogVolume] node instead).
 *
*/
static FOG_VOLUME_SHAPE_CONE: any;

/**
 * [FogVolume] will be shaped like an upright cylinder (in local coordinates). Rotate the [FogVolume] node to reorient the cylinder. The cylinder will be adjusted to fit within the size. Non-uniform scaling via size is not supported (scale the [FogVolume] node instead).
 *
*/
static FOG_VOLUME_SHAPE_CYLINDER: any;

/**
 * [FogVolume] will be shaped like a box.
 *
*/
static FOG_VOLUME_SHAPE_BOX: any;

/**
 * [FogVolume] will have no shape, will cover the whole world and will not be culled.
 *
*/
static FOG_VOLUME_SHAPE_WORLD: any;

/**
 * Represents the size of the [enum FogVolumeShape] enum.
 *
*/
static FOG_VOLUME_SHAPE_MAX: any;

/**
 * Use bilinear scaling for the viewport's 3D buffer. The amount of scaling can be set using [member Viewport.scaling_3d_scale]. Values less than `1.0` will result in undersampling while values greater than `1.0` will result in supersampling. A value of `1.0` disables scaling.
 *
*/
static VIEWPORT_SCALING_3D_MODE_BILINEAR: any;

/**
 * Use AMD FidelityFX Super Resolution 1.0 upscaling for the viewport's 3D buffer. The amount of scaling can be set using [member Viewport.scaling_3d_scale]. Values less than `1.0` will be result in the viewport being upscaled using FSR. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` disables scaling.
 *
*/
static VIEWPORT_SCALING_3D_MODE_FSR: any;

/**
 * Use AMD FidelityFX Super Resolution 2.2 upscaling for the viewport's 3D buffer. The amount of scaling can be set using [member Viewport.scaling_3d_scale]. Values less than `1.0` will be result in the viewport being upscaled using FSR2. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` will use FSR2 at native resolution as a TAA solution.
 *
*/
static VIEWPORT_SCALING_3D_MODE_FSR2: any;

/**
 * Represents the size of the [enum ViewportScaling3DMode] enum.
 *
*/
static VIEWPORT_SCALING_3D_MODE_MAX: any;

/**
 * Do not update the viewport's render target.
 *
*/
static VIEWPORT_UPDATE_DISABLED: any;

/**
 * Update the viewport's render target once, then switch to [constant VIEWPORT_UPDATE_DISABLED].
 *
*/
static VIEWPORT_UPDATE_ONCE: any;

/**
 * Update the viewport's render target only when it is visible. This is the default value.
 *
*/
static VIEWPORT_UPDATE_WHEN_VISIBLE: any;

/**
 * Update the viewport's render target only when its parent is visible.
 *
*/
static VIEWPORT_UPDATE_WHEN_PARENT_VISIBLE: any;

/**
 * Always update the viewport's render target.
 *
*/
static VIEWPORT_UPDATE_ALWAYS: any;

/**
 * Always clear the viewport's render target before drawing.
 *
*/
static VIEWPORT_CLEAR_ALWAYS: any;

/**
 * Never clear the viewport's render target.
 *
*/
static VIEWPORT_CLEAR_NEVER: any;

/**
 * Clear the viewport's render target on the next frame, then switch to [constant VIEWPORT_CLEAR_NEVER].
 *
*/
static VIEWPORT_CLEAR_ONLY_NEXT_FRAME: any;

/**
 * Disable rendering of 3D environment over 2D canvas.
 *
*/
static VIEWPORT_ENVIRONMENT_DISABLED: any;

/**
 * Enable rendering of 3D environment over 2D canvas.
 *
*/
static VIEWPORT_ENVIRONMENT_ENABLED: any;

/**
 * Inherit enable/disable value from parent. If the topmost parent is also set to [constant VIEWPORT_ENVIRONMENT_INHERIT], then this has the same behavior as [constant VIEWPORT_ENVIRONMENT_ENABLED].
 *
*/
static VIEWPORT_ENVIRONMENT_INHERIT: any;

/**
 * Represents the size of the [enum ViewportEnvironmentMode] enum.
 *
*/
static VIEWPORT_ENVIRONMENT_MAX: any;

/**
 * Do not oversize the 2D signed distance field. Occluders may disappear when touching the viewport's edges, and [GPUParticles3D] collision may stop working earlier than intended. This has the lowest GPU requirements.
 *
*/
static VIEWPORT_SDF_OVERSIZE_100_PERCENT: any;

/**
 * 2D signed distance field covers 20% of the viewport's size outside the viewport on each side (top, right, bottom, left).
 *
*/
static VIEWPORT_SDF_OVERSIZE_120_PERCENT: any;

/**
 * 2D signed distance field covers 50% of the viewport's size outside the viewport on each side (top, right, bottom, left).
 *
*/
static VIEWPORT_SDF_OVERSIZE_150_PERCENT: any;

/**
 * 2D signed distance field covers 100% of the viewport's size outside the viewport on each side (top, right, bottom, left). This has the highest GPU requirements.
 *
*/
static VIEWPORT_SDF_OVERSIZE_200_PERCENT: any;

/**
 * Represents the size of the [enum ViewportSDFOversize] enum.
 *
*/
static VIEWPORT_SDF_OVERSIZE_MAX: any;

/**
 * Full resolution 2D signed distance field scale. This has the highest GPU requirements.
 *
*/
static VIEWPORT_SDF_SCALE_100_PERCENT: any;

/**
 * Half resolution 2D signed distance field scale on each axis (25% of the viewport pixel count).
 *
*/
static VIEWPORT_SDF_SCALE_50_PERCENT: any;

/**
 * Quarter resolution 2D signed distance field scale on each axis (6.25% of the viewport pixel count). This has the lowest GPU requirements.
 *
*/
static VIEWPORT_SDF_SCALE_25_PERCENT: any;

/**
 * Represents the size of the [enum ViewportSDFScale] enum.
 *
*/
static VIEWPORT_SDF_SCALE_MAX: any;

/**
 * Multisample antialiasing for 3D is disabled. This is the default value, and also the fastest setting.
 *
*/
static VIEWPORT_MSAA_DISABLED: any;

/**
 * Multisample antialiasing uses 2 samples per pixel for 3D. This has a moderate impact on performance.
 *
*/
static VIEWPORT_MSAA_2X: any;

/**
 * Multisample antialiasing uses 4 samples per pixel for 3D. This has a high impact on performance.
 *
*/
static VIEWPORT_MSAA_4X: any;

/**
 * Multisample antialiasing uses 8 samples per pixel for 3D. This has a very high impact on performance. Likely unsupported on low-end and older hardware.
 *
*/
static VIEWPORT_MSAA_8X: any;

/**
 * Represents the size of the [enum ViewportMSAA] enum.
 *
*/
static VIEWPORT_MSAA_MAX: any;

/**
 * Do not perform any antialiasing in the full screen post-process.
 *
*/
static VIEWPORT_SCREEN_SPACE_AA_DISABLED: any;

/**
 * Use fast approximate antialiasing. FXAA is a popular screen-space antialiasing method, which is fast but will make the image look blurry, especially at lower resolutions. It can still work relatively well at large resolutions such as 1440p and 4K.
 *
*/
static VIEWPORT_SCREEN_SPACE_AA_FXAA: any;

/**
 * Represents the size of the [enum ViewportScreenSpaceAA] enum.
 *
*/
static VIEWPORT_SCREEN_SPACE_AA_MAX: any;

/**
 * Low occlusion culling BVH build quality (as defined by Embree). Results in the lowest CPU usage, but least effective culling.
 *
*/
static VIEWPORT_OCCLUSION_BUILD_QUALITY_LOW: any;

/**
 * Medium occlusion culling BVH build quality (as defined by Embree).
 *
*/
static VIEWPORT_OCCLUSION_BUILD_QUALITY_MEDIUM: any;

/**
 * High occlusion culling BVH build quality (as defined by Embree). Results in the highest CPU usage, but most effective culling.
 *
*/
static VIEWPORT_OCCLUSION_BUILD_QUALITY_HIGH: any;

/**
 * Number of objects drawn in a single frame.
 *
*/
static VIEWPORT_RENDER_INFO_OBJECTS_IN_FRAME: any;

/**
 * Number of points, lines, or triangles drawn in a single frame.
 *
*/
static VIEWPORT_RENDER_INFO_PRIMITIVES_IN_FRAME: any;

/**
 * Number of draw calls during this frame.
 *
*/
static VIEWPORT_RENDER_INFO_DRAW_CALLS_IN_FRAME: any;

/**
 * Represents the size of the [enum ViewportRenderInfo] enum.
 *
*/
static VIEWPORT_RENDER_INFO_MAX: any;

/**
 * Visible render pass (excluding shadows).
 *
*/
static VIEWPORT_RENDER_INFO_TYPE_VISIBLE: any;

/**
 * Shadow render pass. Objects will be rendered several times depending on the number of amounts of lights with shadows and the number of directional shadow splits.
 *
*/
static VIEWPORT_RENDER_INFO_TYPE_SHADOW: any;

/**
 * Represents the size of the [enum ViewportRenderInfoType] enum.
 *
*/
static VIEWPORT_RENDER_INFO_TYPE_MAX: any;

/**
 * Debug draw is disabled. Default setting.
 *
*/
static VIEWPORT_DEBUG_DRAW_DISABLED: any;

/**
 * Objects are displayed without light information.
 *
*/
static VIEWPORT_DEBUG_DRAW_UNSHADED: any;

/**
 * Objects are displayed with only light information.
 *
*/
static VIEWPORT_DEBUG_DRAW_LIGHTING: any;

/**
 * Objects are displayed semi-transparent with additive blending so you can see where they are drawing over top of one another. A higher overdraw (represented by brighter colors) means you are wasting performance on drawing pixels that are being hidden behind others.
 *
 * **Note:** When using this debug draw mode, custom shaders will be ignored. This means vertex displacement won't be visible anymore.
 *
*/
static VIEWPORT_DEBUG_DRAW_OVERDRAW: any;

/**
 * Debug draw draws objects in wireframe.
 *
*/
static VIEWPORT_DEBUG_DRAW_WIREFRAME: any;

/**
 * Normal buffer is drawn instead of regular scene so you can see the per-pixel normals that will be used by post-processing effects.
 *
*/
static VIEWPORT_DEBUG_DRAW_NORMAL_BUFFER: any;

/**
 * Objects are displayed with only the albedo value from [VoxelGI]s.
 *
*/
static VIEWPORT_DEBUG_DRAW_VOXEL_GI_ALBEDO: any;

/**
 * Objects are displayed with only the lighting value from [VoxelGI]s.
 *
*/
static VIEWPORT_DEBUG_DRAW_VOXEL_GI_LIGHTING: any;

/**
 * Objects are displayed with only the emission color from [VoxelGI]s.
 *
*/
static VIEWPORT_DEBUG_DRAW_VOXEL_GI_EMISSION: any;

/**
 * Draws the shadow atlas that stores shadows from [OmniLight3D]s and [SpotLight3D]s in the upper left quadrant of the [Viewport].
 *
*/
static VIEWPORT_DEBUG_DRAW_SHADOW_ATLAS: any;

/**
 * Draws the shadow atlas that stores shadows from [DirectionalLight3D]s in the upper left quadrant of the [Viewport].
 *
 * The slice of the camera frustum related to the shadow map cascade is superimposed to visualize coverage. The color of each slice matches the colors used for [constant VIEWPORT_DEBUG_DRAW_PSSM_SPLITS]. When shadow cascades are blended the overlap is taken into account when drawing the frustum slices.
 *
 * The last cascade shows all frustum slices to illustrate the coverage of all slices.
 *
*/
static VIEWPORT_DEBUG_DRAW_DIRECTIONAL_SHADOW_ATLAS: any;

/**
 * Draws the estimated scene luminance. This is a 1×1 texture that is generated when autoexposure is enabled to control the scene's exposure.
 *
*/
static VIEWPORT_DEBUG_DRAW_SCENE_LUMINANCE: any;

/**
 * Draws the screen space ambient occlusion texture instead of the scene so that you can clearly see how it is affecting objects. In order for this display mode to work, you must have [member Environment.ssao_enabled] set in your [WorldEnvironment].
 *
*/
static VIEWPORT_DEBUG_DRAW_SSAO: any;

/**
 * Draws the screen space indirect lighting texture instead of the scene so that you can clearly see how it is affecting objects. In order for this display mode to work, you must have [member Environment.ssil_enabled] set in your [WorldEnvironment].
 *
*/
static VIEWPORT_DEBUG_DRAW_SSIL: any;

/**
 * Colors each PSSM split for the [DirectionalLight3D]s in the scene a different color so you can see where the splits are. In order they will be colored red, green, blue, yellow.
 *
*/
static VIEWPORT_DEBUG_DRAW_PSSM_SPLITS: any;

/**
 * Draws the decal atlas that stores decal textures from [Decal]s.
 *
*/
static VIEWPORT_DEBUG_DRAW_DECAL_ATLAS: any;

/**
 * Draws SDFGI cascade data. This is the data structure that is used to bounce lighting against and create reflections.
 *
*/
static VIEWPORT_DEBUG_DRAW_SDFGI: any;

/**
 * Draws SDFGI probe data. This is the data structure that is used to give indirect lighting dynamic objects moving within the scene.
 *
*/
static VIEWPORT_DEBUG_DRAW_SDFGI_PROBES: any;

/**
 * Draws the global illumination buffer ([VoxelGI] or SDFGI).
 *
*/
static VIEWPORT_DEBUG_DRAW_GI_BUFFER: any;

/**
 * Disable mesh LOD. All meshes are drawn with full detail, which can be used to compare performance.
 *
*/
static VIEWPORT_DEBUG_DRAW_DISABLE_LOD: any;

/**
 * Draws the [OmniLight3D] cluster. Clustering determines where lights are positioned in screen-space, which allows the engine to only process these portions of the screen for lighting.
 *
*/
static VIEWPORT_DEBUG_DRAW_CLUSTER_OMNI_LIGHTS: any;

/**
 * Draws the [SpotLight3D] cluster. Clustering determines where lights are positioned in screen-space, which allows the engine to only process these portions of the screen for lighting.
 *
*/
static VIEWPORT_DEBUG_DRAW_CLUSTER_SPOT_LIGHTS: any;

/**
 * Draws the [Decal] cluster. Clustering determines where decals are positioned in screen-space, which allows the engine to only process these portions of the screen for decals.
 *
*/
static VIEWPORT_DEBUG_DRAW_CLUSTER_DECALS: any;

/**
 * Draws the [ReflectionProbe] cluster. Clustering determines where reflection probes are positioned in screen-space, which allows the engine to only process these portions of the screen for reflection probes.
 *
*/
static VIEWPORT_DEBUG_DRAW_CLUSTER_REFLECTION_PROBES: any;

/**
 * Draws the occlusion culling buffer. This low-resolution occlusion culling buffer is rasterized on the CPU and is used to check whether instances are occluded by other objects.
 *
*/
static VIEWPORT_DEBUG_DRAW_OCCLUDERS: any;

/**
 * Draws the motion vectors buffer. This is used by temporal antialiasing to correct for motion that occurs during gameplay.
 *
*/
static VIEWPORT_DEBUG_DRAW_MOTION_VECTORS: any;

/**
 * Internal buffer is drawn instead of regular scene so you can see the per-pixel output that will be used by post-processing effects.
 *
*/
static VIEWPORT_DEBUG_DRAW_INTERNAL_BUFFER: any;

/**
 * Variable rate shading is disabled.
 *
*/
static VIEWPORT_VRS_DISABLED: any;

/**
 * Variable rate shading uses a texture. Note, for stereoscopic use a texture atlas with a texture for each view.
 *
*/
static VIEWPORT_VRS_TEXTURE: any;

/**
 * Variable rate shading texture is supplied by the primary [XRInterface].
 *
*/
static VIEWPORT_VRS_XR: any;

/**
 * Represents the size of the [enum ViewportVRSMode] enum.
 *
*/
static VIEWPORT_VRS_MAX: any;

/**
 * Automatically selects the appropriate process mode based on your sky shader. If your shader uses `TIME` or `POSITION`, this will use [constant SKY_MODE_REALTIME]. If your shader uses any of the `LIGHT_*` variables or any custom uniforms, this uses [constant SKY_MODE_INCREMENTAL]. Otherwise, this defaults to [constant SKY_MODE_QUALITY].
 *
*/
static SKY_MODE_AUTOMATIC: any;

/**
 * Uses high quality importance sampling to process the radiance map. In general, this results in much higher quality than [constant SKY_MODE_REALTIME] but takes much longer to generate. This should not be used if you plan on changing the sky at runtime. If you are finding that the reflection is not blurry enough and is showing sparkles or fireflies, try increasing [member ProjectSettings.rendering/reflections/sky_reflections/ggx_samples].
 *
*/
static SKY_MODE_QUALITY: any;

/**
 * Uses the same high quality importance sampling to process the radiance map as [constant SKY_MODE_QUALITY], but updates over several frames. The number of frames is determined by [member ProjectSettings.rendering/reflections/sky_reflections/roughness_layers]. Use this when you need highest quality radiance maps, but have a sky that updates slowly.
 *
*/
static SKY_MODE_INCREMENTAL: any;

/**
 * Uses the fast filtering algorithm to process the radiance map. In general this results in lower quality, but substantially faster run times. If you need better quality, but still need to update the sky every frame, consider turning on [member ProjectSettings.rendering/reflections/sky_reflections/fast_filter_high_quality].
 *
 * **Note:** The fast filtering algorithm is limited to 256×256 cubemaps, so [method sky_set_radiance_size] must be set to `256`. Otherwise, a warning is printed and the overridden radiance size is ignored.
 *
*/
static SKY_MODE_REALTIME: any;

/**
 * Use the clear color as background.
 *
*/
static ENV_BG_CLEAR_COLOR: any;

/**
 * Use a specified color as the background.
 *
*/
static ENV_BG_COLOR: any;

/**
 * Use a sky resource for the background.
 *
*/
static ENV_BG_SKY: any;

/**
 * Use a specified canvas layer as the background. This can be useful for instantiating a 2D scene in a 3D world.
 *
*/
static ENV_BG_CANVAS: any;

/**
 * Do not clear the background, use whatever was rendered last frame as the background.
 *
*/
static ENV_BG_KEEP: any;

/**
 * Displays a camera feed in the background.
 *
*/
static ENV_BG_CAMERA_FEED: any;

/**
 * Represents the size of the [enum EnvironmentBG] enum.
 *
*/
static ENV_BG_MAX: any;

/**
 * Gather ambient light from whichever source is specified as the background.
 *
*/
static ENV_AMBIENT_SOURCE_BG: any;

/**
 * Disable ambient light.
 *
*/
static ENV_AMBIENT_SOURCE_DISABLED: any;

/**
 * Specify a specific [Color] for ambient light.
 *
*/
static ENV_AMBIENT_SOURCE_COLOR: any;

/**
 * Gather ambient light from the [Sky] regardless of what the background is.
 *
*/
static ENV_AMBIENT_SOURCE_SKY: any;

/**
 * Use the background for reflections.
 *
*/
static ENV_REFLECTION_SOURCE_BG: any;

/**
 * Disable reflections.
 *
*/
static ENV_REFLECTION_SOURCE_DISABLED: any;

/**
 * Use the [Sky] for reflections regardless of what the background is.
 *
*/
static ENV_REFLECTION_SOURCE_SKY: any;

/**
 * Additive glow blending mode. Mostly used for particles, glows (bloom), lens flare, bright sources.
 *
*/
static ENV_GLOW_BLEND_MODE_ADDITIVE: any;

/**
 * Screen glow blending mode. Increases brightness, used frequently with bloom.
 *
*/
static ENV_GLOW_BLEND_MODE_SCREEN: any;

/**
 * Soft light glow blending mode. Modifies contrast, exposes shadows and highlights (vivid bloom).
 *
*/
static ENV_GLOW_BLEND_MODE_SOFTLIGHT: any;

/**
 * Replace glow blending mode. Replaces all pixels' color by the glow value. This can be used to simulate a full-screen blur effect by tweaking the glow parameters to match the original image's brightness.
 *
*/
static ENV_GLOW_BLEND_MODE_REPLACE: any;

/**
 * Mixes the glow with the underlying color to avoid increasing brightness as much while still maintaining a glow effect.
 *
*/
static ENV_GLOW_BLEND_MODE_MIX: any;

/**
 * Output color as they came in. This can cause bright lighting to look blown out, with noticeable clipping in the output colors.
 *
*/
static ENV_TONE_MAPPER_LINEAR: any;

/**
 * Use the Reinhard tonemapper. Performs a variation on rendered pixels' colors by this formula: `color = color / (1 + color)`. This avoids clipping bright highlights, but the resulting image can look a bit dull.
 *
*/
static ENV_TONE_MAPPER_REINHARD: any;

/**
 * Use the filmic tonemapper. This avoids clipping bright highlights, with a resulting image that usually looks more vivid than [constant ENV_TONE_MAPPER_REINHARD].
 *
*/
static ENV_TONE_MAPPER_FILMIC: any;

/**
 * Use the Academy Color Encoding System tonemapper. ACES is slightly more expensive than other options, but it handles bright lighting in a more realistic fashion by desaturating it as it becomes brighter. ACES typically has a more contrasted output compared to [constant ENV_TONE_MAPPER_REINHARD] and [constant ENV_TONE_MAPPER_FILMIC].
 *
 * **Note:** This tonemapping operator is called "ACES Fitted" in Godot 3.x.
 *
*/
static ENV_TONE_MAPPER_ACES: any;

/**
 * Lowest quality of roughness filter for screen-space reflections. Rough materials will not have blurrier screen-space reflections compared to smooth (non-rough) materials. This is the fastest option.
 *
*/
static ENV_SSR_ROUGHNESS_QUALITY_DISABLED: any;

/**
 * Low quality of roughness filter for screen-space reflections.
 *
*/
static ENV_SSR_ROUGHNESS_QUALITY_LOW: any;

/**
 * Medium quality of roughness filter for screen-space reflections.
 *
*/
static ENV_SSR_ROUGHNESS_QUALITY_MEDIUM: any;

/**
 * High quality of roughness filter for screen-space reflections. This is the slowest option.
 *
*/
static ENV_SSR_ROUGHNESS_QUALITY_HIGH: any;

/**
 * Lowest quality of screen-space ambient occlusion.
 *
*/
static ENV_SSAO_QUALITY_VERY_LOW: any;

/**
 * Low quality screen-space ambient occlusion.
 *
*/
static ENV_SSAO_QUALITY_LOW: any;

/**
 * Medium quality screen-space ambient occlusion.
 *
*/
static ENV_SSAO_QUALITY_MEDIUM: any;

/**
 * High quality screen-space ambient occlusion.
 *
*/
static ENV_SSAO_QUALITY_HIGH: any;

/**
 * Highest quality screen-space ambient occlusion. Uses the adaptive target setting which can be dynamically adjusted to smoothly balance performance and visual quality.
 *
*/
static ENV_SSAO_QUALITY_ULTRA: any;

/**
 * Lowest quality of screen-space indirect lighting.
 *
*/
static ENV_SSIL_QUALITY_VERY_LOW: any;

/**
 * Low quality screen-space indirect lighting.
 *
*/
static ENV_SSIL_QUALITY_LOW: any;

/**
 * High quality screen-space indirect lighting.
 *
*/
static ENV_SSIL_QUALITY_MEDIUM: any;

/**
 * High quality screen-space indirect lighting.
 *
*/
static ENV_SSIL_QUALITY_HIGH: any;

/**
 * Highest quality screen-space indirect lighting. Uses the adaptive target setting which can be dynamically adjusted to smoothly balance performance and visual quality.
 *
*/
static ENV_SSIL_QUALITY_ULTRA: any;

/**
 * Use 50% scale for SDFGI on the Y (vertical) axis. SDFGI cells will be twice as short as they are wide. This allows providing increased GI detail and reduced light leaking with thin floors and ceilings. This is usually the best choice for scenes that don't feature much verticality.
 *
*/
static ENV_SDFGI_Y_SCALE_50_PERCENT: any;

/**
 * Use 75% scale for SDFGI on the Y (vertical) axis. This is a balance between the 50% and 100% SDFGI Y scales.
 *
*/
static ENV_SDFGI_Y_SCALE_75_PERCENT: any;

/**
 * Use 100% scale for SDFGI on the Y (vertical) axis. SDFGI cells will be as tall as they are wide. This is usually the best choice for highly vertical scenes. The downside is that light leaking may become more noticeable with thin floors and ceilings.
 *
*/
static ENV_SDFGI_Y_SCALE_100_PERCENT: any;

/**
 * Throw 4 rays per frame when converging SDFGI. This has the lowest GPU requirements, but creates the most noisy result.
 *
*/
static ENV_SDFGI_RAY_COUNT_4: any;

/**
 * Throw 8 rays per frame when converging SDFGI.
 *
*/
static ENV_SDFGI_RAY_COUNT_8: any;

/**
 * Throw 16 rays per frame when converging SDFGI.
 *
*/
static ENV_SDFGI_RAY_COUNT_16: any;

/**
 * Throw 32 rays per frame when converging SDFGI.
 *
*/
static ENV_SDFGI_RAY_COUNT_32: any;

/**
 * Throw 64 rays per frame when converging SDFGI.
 *
*/
static ENV_SDFGI_RAY_COUNT_64: any;

/**
 * Throw 96 rays per frame when converging SDFGI. This has high GPU requirements.
 *
*/
static ENV_SDFGI_RAY_COUNT_96: any;

/**
 * Throw 128 rays per frame when converging SDFGI. This has very high GPU requirements, but creates the least noisy result.
 *
*/
static ENV_SDFGI_RAY_COUNT_128: any;

/**
 * Represents the size of the [enum EnvironmentSDFGIRayCount] enum.
 *
*/
static ENV_SDFGI_RAY_COUNT_MAX: any;

/**
 * Converge SDFGI over 5 frames. This is the most responsive, but creates the most noisy result with a given ray count.
 *
*/
static ENV_SDFGI_CONVERGE_IN_5_FRAMES: any;

/**
 * Configure SDFGI to fully converge over 10 frames.
 *
*/
static ENV_SDFGI_CONVERGE_IN_10_FRAMES: any;

/**
 * Configure SDFGI to fully converge over 15 frames.
 *
*/
static ENV_SDFGI_CONVERGE_IN_15_FRAMES: any;

/**
 * Configure SDFGI to fully converge over 20 frames.
 *
*/
static ENV_SDFGI_CONVERGE_IN_20_FRAMES: any;

/**
 * Configure SDFGI to fully converge over 25 frames.
 *
*/
static ENV_SDFGI_CONVERGE_IN_25_FRAMES: any;

/**
 * Configure SDFGI to fully converge over 30 frames. This is the least responsive, but creates the least noisy result with a given ray count.
 *
*/
static ENV_SDFGI_CONVERGE_IN_30_FRAMES: any;

/**
 * Represents the size of the [enum EnvironmentSDFGIFramesToConverge] enum.
 *
*/
static ENV_SDFGI_CONVERGE_MAX: any;

/**
 * Update indirect light from dynamic lights in SDFGI over 1 frame. This is the most responsive, but has the highest GPU requirements.
 *
*/
static ENV_SDFGI_UPDATE_LIGHT_IN_1_FRAME: any;

/**
 * Update indirect light from dynamic lights in SDFGI over 2 frames.
 *
*/
static ENV_SDFGI_UPDATE_LIGHT_IN_2_FRAMES: any;

/**
 * Update indirect light from dynamic lights in SDFGI over 4 frames.
 *
*/
static ENV_SDFGI_UPDATE_LIGHT_IN_4_FRAMES: any;

/**
 * Update indirect light from dynamic lights in SDFGI over 8 frames.
 *
*/
static ENV_SDFGI_UPDATE_LIGHT_IN_8_FRAMES: any;

/**
 * Update indirect light from dynamic lights in SDFGI over 16 frames. This is the least responsive, but has the lowest GPU requirements.
 *
*/
static ENV_SDFGI_UPDATE_LIGHT_IN_16_FRAMES: any;

/**
 * Represents the size of the [enum EnvironmentSDFGIFramesToUpdateLight] enum.
 *
*/
static ENV_SDFGI_UPDATE_LIGHT_MAX: any;

/**
 * Disables subsurface scattering entirely, even on materials that have [member BaseMaterial3D.subsurf_scatter_enabled] set to `true`. This has the lowest GPU requirements.
 *
*/
static SUB_SURFACE_SCATTERING_QUALITY_DISABLED: any;

/**
 * Low subsurface scattering quality.
 *
*/
static SUB_SURFACE_SCATTERING_QUALITY_LOW: any;

/**
 * Medium subsurface scattering quality.
 *
*/
static SUB_SURFACE_SCATTERING_QUALITY_MEDIUM: any;

/**
 * High subsurface scattering quality. This has the highest GPU requirements.
 *
*/
static SUB_SURFACE_SCATTERING_QUALITY_HIGH: any;

/**
 * Calculate the DOF blur using a box filter. The fastest option, but results in obvious lines in blur pattern.
 *
*/
static DOF_BOKEH_BOX: any;

/**
 * Calculates DOF blur using a hexagon shaped filter.
 *
*/
static DOF_BOKEH_HEXAGON: any;

/**
 * Calculates DOF blur using a circle shaped filter. Best quality and most realistic, but slowest. Use only for areas where a lot of performance can be dedicated to post-processing (e.g. cutscenes).
 *
*/
static DOF_BOKEH_CIRCLE: any;

/**
 * Lowest quality DOF blur. This is the fastest setting, but you may be able to see filtering artifacts.
 *
*/
static DOF_BLUR_QUALITY_VERY_LOW: any;

/**
 * Low quality DOF blur.
 *
*/
static DOF_BLUR_QUALITY_LOW: any;

/**
 * Medium quality DOF blur.
 *
*/
static DOF_BLUR_QUALITY_MEDIUM: any;

/**
 * Highest quality DOF blur. Results in the smoothest looking blur by taking the most samples, but is also significantly slower.
 *
*/
static DOF_BLUR_QUALITY_HIGH: any;

/**
 * The instance does not have a type.
 *
*/
static INSTANCE_NONE: any;

/**
 * The instance is a mesh.
 *
*/
static INSTANCE_MESH: any;

/**
 * The instance is a multimesh.
 *
*/
static INSTANCE_MULTIMESH: any;

/**
 * The instance is a particle emitter.
 *
*/
static INSTANCE_PARTICLES: any;

/**
 * The instance is a GPUParticles collision shape.
 *
*/
static INSTANCE_PARTICLES_COLLISION: any;

/**
 * The instance is a light.
 *
*/
static INSTANCE_LIGHT: any;

/**
 * The instance is a reflection probe.
 *
*/
static INSTANCE_REFLECTION_PROBE: any;

/**
 * The instance is a decal.
 *
*/
static INSTANCE_DECAL: any;

/**
 * The instance is a VoxelGI.
 *
*/
static INSTANCE_VOXEL_GI: any;

/**
 * The instance is a lightmap.
 *
*/
static INSTANCE_LIGHTMAP: any;

/**
 * The instance is an occlusion culling occluder.
 *
*/
static INSTANCE_OCCLUDER: any;

/**
 * The instance is a visible on-screen notifier.
 *
*/
static INSTANCE_VISIBLITY_NOTIFIER: any;

/**
 * The instance is a fog volume.
 *
*/
static INSTANCE_FOG_VOLUME: any;

/**
 * Represents the size of the [enum InstanceType] enum.
 *
*/
static INSTANCE_MAX: any;

/**
 * A combination of the flags of geometry instances (mesh, multimesh, immediate and particles).
 *
*/
static INSTANCE_GEOMETRY_MASK: any;

/**
 * Allows the instance to be used in baked lighting.
 *
*/
static INSTANCE_FLAG_USE_BAKED_LIGHT: any;

/**
 * Allows the instance to be used with dynamic global illumination.
 *
*/
static INSTANCE_FLAG_USE_DYNAMIC_GI: any;

/**
 * When set, manually requests to draw geometry on next frame.
 *
*/
static INSTANCE_FLAG_DRAW_NEXT_FRAME_IF_VISIBLE: any;

/**
 * Always draw, even if the instance would be culled by occlusion culling. Does not affect view frustum culling.
 *
*/
static INSTANCE_FLAG_IGNORE_OCCLUSION_CULLING: any;

/**
 * Represents the size of the [enum InstanceFlags] enum.
 *
*/
static INSTANCE_FLAG_MAX: any;

/**
 * Disable shadows from this instance.
 *
*/
static SHADOW_CASTING_SETTING_OFF: any;

/**
 * Cast shadows from this instance.
 *
*/
static SHADOW_CASTING_SETTING_ON: any;

/**
 * Disable backface culling when rendering the shadow of the object. This is slightly slower but may result in more correct shadows.
 *
*/
static SHADOW_CASTING_SETTING_DOUBLE_SIDED: any;

/**
 * Only render the shadows from the object. The object itself will not be drawn.
 *
*/
static SHADOW_CASTING_SETTING_SHADOWS_ONLY: any;

/**
 * Disable visibility range fading for the given instance.
 *
*/
static VISIBILITY_RANGE_FADE_DISABLED: any;

/**
 * Fade-out the given instance when it approaches its visibility range limits.
 *
*/
static VISIBILITY_RANGE_FADE_SELF: any;

/**
 * Fade-in the given instance's dependencies when reaching its visibility range limits.
 *
*/
static VISIBILITY_RANGE_FADE_DEPENDENCIES: any;

/**
 * Index of [Image] in array of [Image]s returned by [method bake_render_uv2]. Image uses [constant Image.FORMAT_RGBA8] and contains albedo color in the `.rgb` channels and alpha in the `.a` channel.
 *
*/
static BAKE_CHANNEL_ALBEDO_ALPHA: any;

/**
 * Index of [Image] in array of [Image]s returned by [method bake_render_uv2]. Image uses [constant Image.FORMAT_RGBA8] and contains the per-pixel normal of the object in the `.rgb` channels and nothing in the `.a` channel. The per-pixel normal is encoded as `normal * 0.5 + 0.5`.
 *
*/
static BAKE_CHANNEL_NORMAL: any;

/**
 * Index of [Image] in array of [Image]s returned by [method bake_render_uv2]. Image uses [constant Image.FORMAT_RGBA8] and contains ambient occlusion (from material and decals only) in the `.r` channel, roughness in the `.g` channel, metallic in the `.b` channel and sub surface scattering amount in the `.a` channel.
 *
*/
static BAKE_CHANNEL_ORM: any;

/**
 * Index of [Image] in array of [Image]s returned by [method bake_render_uv2]. Image uses [constant Image.FORMAT_RGBAH] and contains emission color in the `.rgb` channels and nothing in the `.a` channel.
 *
*/
static BAKE_CHANNEL_EMISSION: any;

/**
 * Diffuse canvas texture ([member CanvasTexture.diffuse_texture]).
 *
*/
static CANVAS_TEXTURE_CHANNEL_DIFFUSE: any;

/**
 * Normal map canvas texture ([member CanvasTexture.normal_texture]).
 *
*/
static CANVAS_TEXTURE_CHANNEL_NORMAL: any;

/**
 * Specular map canvas texture ([member CanvasTexture.specular_texture]).
 *
*/
static CANVAS_TEXTURE_CHANNEL_SPECULAR: any;

/**
 * The nine patch gets stretched where needed.
 *
*/
static NINE_PATCH_STRETCH: any;

/**
 * The nine patch gets filled with tiles where needed.
 *
*/
static NINE_PATCH_TILE: any;

/**
 * The nine patch gets filled with tiles where needed and stretches them a bit if needed.
 *
*/
static NINE_PATCH_TILE_FIT: any;

/**
 * Uses the default filter mode for this [Viewport].
 *
*/
static CANVAS_ITEM_TEXTURE_FILTER_DEFAULT: any;

/**
 * The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled).
 *
*/
static CANVAS_ITEM_TEXTURE_FILTER_NEAREST: any;

/**
 * The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled).
 *
*/
static CANVAS_ITEM_TEXTURE_FILTER_LINEAR: any;

/**
 * The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look pixelated from up close, and smooth from a distance.
 *
 * Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.
 *
*/
static CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS: any;

/**
 * The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look smooth from up close, and smooth from a distance.
 *
 * Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.
 *
*/
static CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS: any;

/**
 * The texture filter reads from the nearest pixel and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look pixelated from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level].
 *
 * **Note:** This texture filter is rarely useful in 2D projects. [constant CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS] is usually more appropriate in this case.
 *
*/
static CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC: any;

/**
 * The texture filter blends between the nearest 4 pixels and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look smooth from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level].
 *
 * **Note:** This texture filter is rarely useful in 2D projects. [constant CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS] is usually more appropriate in this case.
 *
*/
static CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC: any;

/**
 * Max value for [enum CanvasItemTextureFilter] enum.
 *
*/
static CANVAS_ITEM_TEXTURE_FILTER_MAX: any;

/**
 * Uses the default repeat mode for this [Viewport].
 *
*/
static CANVAS_ITEM_TEXTURE_REPEAT_DEFAULT: any;

/**
 * Disables textures repeating. Instead, when reading UVs outside the 0-1 range, the value will be clamped to the edge of the texture, resulting in a stretched out look at the borders of the texture.
 *
*/
static CANVAS_ITEM_TEXTURE_REPEAT_DISABLED: any;

/**
 * Enables the texture to repeat when UV coordinates are outside the 0-1 range. If using one of the linear filtering modes, this can result in artifacts at the edges of a texture when the sampler filters across the edges of the texture.
 *
*/
static CANVAS_ITEM_TEXTURE_REPEAT_ENABLED: any;

/**
 * Flip the texture when repeating so that the edge lines up instead of abruptly changing.
 *
*/
static CANVAS_ITEM_TEXTURE_REPEAT_MIRROR: any;

/**
 * Max value for [enum CanvasItemTextureRepeat] enum.
 *
*/
static CANVAS_ITEM_TEXTURE_REPEAT_MAX: any;

/**
 * Child draws over parent and is not clipped.
 *
*/
static CANVAS_GROUP_MODE_DISABLED: any;

/**
 * Parent is used for the purposes of clipping only. Child is clipped to the parent's visible area, parent is not drawn.
 *
*/
static CANVAS_GROUP_MODE_CLIP_ONLY: any;

/**
 * Parent is used for clipping child, but parent is also drawn underneath child as normal before clipping child to its visible area.
 *
*/
static CANVAS_GROUP_MODE_CLIP_AND_DRAW: any;

/** No documentation provided. */
static CANVAS_GROUP_MODE_TRANSPARENT: any;

/**
 * 2D point light (see [PointLight2D]).
 *
*/
static CANVAS_LIGHT_MODE_POINT: any;

/**
 * 2D directional (sun/moon) light (see [DirectionalLight2D]).
 *
*/
static CANVAS_LIGHT_MODE_DIRECTIONAL: any;

/**
 * Adds light color additive to the canvas.
 *
*/
static CANVAS_LIGHT_BLEND_MODE_ADD: any;

/**
 * Adds light color subtractive to the canvas.
 *
*/
static CANVAS_LIGHT_BLEND_MODE_SUB: any;

/**
 * The light adds color depending on transparency.
 *
*/
static CANVAS_LIGHT_BLEND_MODE_MIX: any;

/**
 * Do not apply a filter to canvas light shadows.
 *
*/
static CANVAS_LIGHT_FILTER_NONE: any;

/**
 * Use PCF5 filtering to filter canvas light shadows.
 *
*/
static CANVAS_LIGHT_FILTER_PCF5: any;

/**
 * Use PCF13 filtering to filter canvas light shadows.
 *
*/
static CANVAS_LIGHT_FILTER_PCF13: any;

/**
 * Max value of the [enum CanvasLightShadowFilter] enum.
 *
*/
static CANVAS_LIGHT_FILTER_MAX: any;

/**
 * Culling of the canvas occluder is disabled.
 *
*/
static CANVAS_OCCLUDER_POLYGON_CULL_DISABLED: any;

/**
 * Culling of the canvas occluder is clockwise.
 *
*/
static CANVAS_OCCLUDER_POLYGON_CULL_CLOCKWISE: any;

/**
 * Culling of the canvas occluder is counterclockwise.
 *
*/
static CANVAS_OCCLUDER_POLYGON_CULL_COUNTER_CLOCKWISE: any;

/**
 * Boolean global shader parameter (`global uniform bool ...`).
 *
*/
static GLOBAL_VAR_TYPE_BOOL: any;

/**
 * 2-dimensional boolean vector global shader parameter (`global uniform bvec2 ...`).
 *
*/
static GLOBAL_VAR_TYPE_BVEC2: any;

/**
 * 3-dimensional boolean vector global shader parameter (`global uniform bvec3 ...`).
 *
*/
static GLOBAL_VAR_TYPE_BVEC3: any;

/**
 * 4-dimensional boolean vector global shader parameter (`global uniform bvec4 ...`).
 *
*/
static GLOBAL_VAR_TYPE_BVEC4: any;

/**
 * Integer global shader parameter (`global uniform int ...`).
 *
*/
static GLOBAL_VAR_TYPE_INT: any;

/**
 * 2-dimensional integer vector global shader parameter (`global uniform ivec2 ...`).
 *
*/
static GLOBAL_VAR_TYPE_IVEC2: any;

/**
 * 3-dimensional integer vector global shader parameter (`global uniform ivec3 ...`).
 *
*/
static GLOBAL_VAR_TYPE_IVEC3: any;

/**
 * 4-dimensional integer vector global shader parameter (`global uniform ivec4 ...`).
 *
*/
static GLOBAL_VAR_TYPE_IVEC4: any;

/**
 * 2-dimensional integer rectangle global shader parameter (`global uniform ivec4 ...`). Equivalent to [constant GLOBAL_VAR_TYPE_IVEC4] in shader code, but exposed as a [Rect2i] in the editor UI.
 *
*/
static GLOBAL_VAR_TYPE_RECT2I: any;

/**
 * Unsigned integer global shader parameter (`global uniform uint ...`).
 *
*/
static GLOBAL_VAR_TYPE_UINT: any;

/**
 * 2-dimensional unsigned integer vector global shader parameter (`global uniform uvec2 ...`).
 *
*/
static GLOBAL_VAR_TYPE_UVEC2: any;

/**
 * 3-dimensional unsigned integer vector global shader parameter (`global uniform uvec3 ...`).
 *
*/
static GLOBAL_VAR_TYPE_UVEC3: any;

/**
 * 4-dimensional unsigned integer vector global shader parameter (`global uniform uvec4 ...`).
 *
*/
static GLOBAL_VAR_TYPE_UVEC4: any;

/**
 * Single-precision floating-point global shader parameter (`global uniform float ...`).
 *
*/
static GLOBAL_VAR_TYPE_FLOAT: any;

/**
 * 2-dimensional floating-point vector global shader parameter (`global uniform vec2 ...`).
 *
*/
static GLOBAL_VAR_TYPE_VEC2: any;

/**
 * 3-dimensional floating-point vector global shader parameter (`global uniform vec3 ...`).
 *
*/
static GLOBAL_VAR_TYPE_VEC3: any;

/**
 * 4-dimensional floating-point vector global shader parameter (`global uniform vec4 ...`).
 *
*/
static GLOBAL_VAR_TYPE_VEC4: any;

/**
 * Color global shader parameter (`global uniform vec4 ...`). Equivalent to [constant GLOBAL_VAR_TYPE_VEC4] in shader code, but exposed as a [Color] in the editor UI.
 *
*/
static GLOBAL_VAR_TYPE_COLOR: any;

/**
 * 2-dimensional floating-point rectangle global shader parameter (`global uniform vec4 ...`). Equivalent to [constant GLOBAL_VAR_TYPE_VEC4] in shader code, but exposed as a [Rect2] in the editor UI.
 *
*/
static GLOBAL_VAR_TYPE_RECT2: any;

/**
 * 2×2 matrix global shader parameter (`global uniform mat2 ...`). Exposed as a [PackedInt32Array] in the editor UI.
 *
*/
static GLOBAL_VAR_TYPE_MAT2: any;

/**
 * 3×3 matrix global shader parameter (`global uniform mat3 ...`). Exposed as a [Basis] in the editor UI.
 *
*/
static GLOBAL_VAR_TYPE_MAT3: any;

/**
 * 4×4 matrix global shader parameter (`global uniform mat4 ...`). Exposed as a [Projection] in the editor UI.
 *
*/
static GLOBAL_VAR_TYPE_MAT4: any;

/**
 * 2-dimensional transform global shader parameter (`global uniform mat2x3 ...`). Exposed as a [Transform2D] in the editor UI.
 *
*/
static GLOBAL_VAR_TYPE_TRANSFORM_2D: any;

/**
 * 3-dimensional transform global shader parameter (`global uniform mat3x4 ...`). Exposed as a [Transform3D] in the editor UI.
 *
*/
static GLOBAL_VAR_TYPE_TRANSFORM: any;

/**
 * 2D sampler global shader parameter (`global uniform sampler2D ...`). Exposed as a [Texture2D] in the editor UI.
 *
*/
static GLOBAL_VAR_TYPE_SAMPLER2D: any;

/**
 * 2D sampler array global shader parameter (`global uniform sampler2DArray ...`). Exposed as a [Texture2DArray] in the editor UI.
 *
*/
static GLOBAL_VAR_TYPE_SAMPLER2DARRAY: any;

/**
 * 3D sampler global shader parameter (`global uniform sampler3D ...`). Exposed as a [Texture3D] in the editor UI.
 *
*/
static GLOBAL_VAR_TYPE_SAMPLER3D: any;

/**
 * Cubemap sampler global shader parameter (`global uniform samplerCube ...`). Exposed as a [Cubemap] in the editor UI.
 *
*/
static GLOBAL_VAR_TYPE_SAMPLERCUBE: any;

/**
 * Represents the size of the [enum GlobalShaderParameterType] enum.
 *
*/
static GLOBAL_VAR_TYPE_MAX: any;

/**
 * Number of objects rendered in the current 3D scene. This varies depending on camera position and rotation.
 *
*/
static RENDERING_INFO_TOTAL_OBJECTS_IN_FRAME: any;

/**
 * Number of points, lines, or triangles rendered in the current 3D scene. This varies depending on camera position and rotation.
 *
*/
static RENDERING_INFO_TOTAL_PRIMITIVES_IN_FRAME: any;

/**
 * Number of draw calls performed to render in the current 3D scene. This varies depending on camera position and rotation.
 *
*/
static RENDERING_INFO_TOTAL_DRAW_CALLS_IN_FRAME: any;

/**
 * Texture memory used (in bytes).
 *
*/
static RENDERING_INFO_TEXTURE_MEM_USED: any;

/**
 * Buffer memory used (in bytes). This includes vertex data, uniform buffers, and many miscellaneous buffer types used internally.
 *
*/
static RENDERING_INFO_BUFFER_MEM_USED: any;

/**
 * Video memory used (in bytes). When using the Forward+ or mobile rendering backends, this is always greater than the sum of [constant RENDERING_INFO_TEXTURE_MEM_USED] and [constant RENDERING_INFO_BUFFER_MEM_USED], since there is miscellaneous data not accounted for by those two metrics. When using the GL Compatibility backend, this is equal to the sum of [constant RENDERING_INFO_TEXTURE_MEM_USED] and [constant RENDERING_INFO_BUFFER_MEM_USED].
 *
*/
static RENDERING_INFO_VIDEO_MEM_USED: any;

/**
 * Hardware supports shaders. This enum is currently unused in Godot 3.x.
 *
*/
static FEATURE_SHADERS: any;

/**
 * Hardware supports multithreading. This enum is currently unused in Godot 3.x.
 *
*/
static FEATURE_MULTITHREADED: any;


/**
 * Emitted at the end of the frame, after the RenderingServer has finished updating all the Viewports.
 *
*/
$frame_post_draw: Signal<() => void>

/**
 * Emitted at the beginning of the frame, before the RenderingServer updates all the Viewports.
 *
*/
$frame_pre_draw: Signal<() => void>

}

