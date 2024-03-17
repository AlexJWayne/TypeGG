
/**
 * [Material] is a base resource used for coloring and shading geometry. All materials inherit from it and almost all [VisualInstance3D] derived nodes carry a [Material]. A few flags and parameters are shared between all material types and are configured here.
 *
 * Importantly, you can inherit from [Material] to create your own custom material type in script or in GDExtension.
 *
*/
declare class Material extends Resource  {

  
/**
 * [Material] is a base resource used for coloring and shading geometry. All materials inherit from it and almost all [VisualInstance3D] derived nodes carry a [Material]. A few flags and parameters are shared between all material types and are configured here.
 *
 * Importantly, you can inherit from [Material] to create your own custom material type in script or in GDExtension.
 *
*/
  new(): Material; 
  static "new"(): Material 


/**
 * Sets the [Material] to be used for the next pass. This renders the object again using a different material.
 *
 * **Note:** [member next_pass] materials are not necessarily drawn immediately after the source [Material]. Draw order is determined by material properties, [member render_priority], and distance to camera.
 *
 * **Note:** This only applies to [StandardMaterial3D]s and [ShaderMaterial]s with type "Spatial".
 *
*/
next_pass: Material;

/**
 * Sets the render priority for objects in 3D scenes. Higher priority objects will be sorted in front of lower priority objects. In other words, all objects with [member render_priority] `1` will render before all objects with [member render_priority] `0`).
 *
 * **Note:** This only applies to [StandardMaterial3D]s and [ShaderMaterial]s with type "Spatial".
 *
 * **Note:** This will not impact how transparent objects are sorted relative to opaque objects or how dynamic meshes will be sorted relative to other opaque meshes. This is because all transparent objects are drawn after all opaque objects and all dynamic opaque meshes are drawn before other opaque meshes.
 *
*/
render_priority: int;

/** Only exposed for the purpose of overriding. You cannot call this function directly. Used internally to determine if [member next_pass] should be shown in the editor or not. */
protected _can_do_next_pass(): boolean;

/** Only exposed for the purpose of overriding. You cannot call this function directly. Used internally to determine if [member render_priority] should be shown in the editor or not. */
protected _can_use_render_priority(): boolean;

/** Only exposed for the purpose of overriding. You cannot call this function directly. Used internally by various editor tools. */
protected _get_shader_mode(): int;

/** Only exposed for the purpose of overriding. You cannot call this function directly. Used internally by various editor tools. Used to access the RID of the [Material]'s [Shader]. */
protected _get_shader_rid(): RID;

/** Creates a placeholder version of this resource ([PlaceholderMaterial]). */
create_placeholder(): Resource;

/** Only available when running in the editor. Opens a popup that visualizes the generated shader code, including all variants and internal shader code. */
inspect_native_shader_code(): void;

  connect<T extends SignalsOf<Material>>(signal: T, method: SignalFunction<Material[T]>): number;



/**
 * Maximum value for the [member render_priority] parameter.
 *
*/
static RENDER_PRIORITY_MAX: any;

/**
 * Minimum value for the [member render_priority] parameter.
 *
*/
static RENDER_PRIORITY_MIN: any;



}

