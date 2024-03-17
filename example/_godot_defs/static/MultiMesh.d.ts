
/**
 * MultiMesh provides low-level mesh instancing. Drawing thousands of [MeshInstance3D] nodes can be slow, since each object is submitted to the GPU then drawn individually.
 *
 * MultiMesh is much faster as it can draw thousands of instances with a single draw call, resulting in less API overhead.
 *
 * As a drawback, if the instances are too far away from each other, performance may be reduced as every single instance will always render (they are spatially indexed as one, for the whole object).
 *
 * Since instances may have any behavior, the AABB used for visibility must be provided by the user.
 *
 * **Note:** A MultiMesh is a single object, therefore the same maximum lights per object restriction applies. This means, that once the maximum lights are consumed by one or more instances, the rest of the MultiMesh instances will **not** receive any lighting.
 *
 * **Note:** Blend Shapes will be ignored if used in a MultiMesh.
 *
*/
declare class MultiMesh extends Resource  {

  
/**
 * MultiMesh provides low-level mesh instancing. Drawing thousands of [MeshInstance3D] nodes can be slow, since each object is submitted to the GPU then drawn individually.
 *
 * MultiMesh is much faster as it can draw thousands of instances with a single draw call, resulting in less API overhead.
 *
 * As a drawback, if the instances are too far away from each other, performance may be reduced as every single instance will always render (they are spatially indexed as one, for the whole object).
 *
 * Since instances may have any behavior, the AABB used for visibility must be provided by the user.
 *
 * **Note:** A MultiMesh is a single object, therefore the same maximum lights per object restriction applies. This means, that once the maximum lights are consumed by one or more instances, the rest of the MultiMesh instances will **not** receive any lighting.
 *
 * **Note:** Blend Shapes will be ignored if used in a MultiMesh.
 *
*/
  new(): MultiMesh; 
  static "new"(): MultiMesh 



/** See [method set_instance_color]. */
color_array: PackedColorArray;

/** See [method set_instance_custom_data]. */
custom_data_array: PackedColorArray;

/**
 * Number of instances that will get drawn. This clears and (re)sizes the buffers. Setting data format or flags afterwards will have no effect.
 *
 * By default, all instances are drawn but you can limit this with [member visible_instance_count].
 *
*/
instance_count: int;

/**
 * [Mesh] resource to be instanced.
 *
 * The looks of the individual instances can be modified using [method set_instance_color] and [method set_instance_custom_data].
 *
*/
mesh: Mesh;

/** See [method set_instance_transform_2d]. */
transform_2d_array: PackedVector2Array;

/** See [method set_instance_transform]. */
transform_array: PackedVector3Array;

/** Format of transform used to transform mesh, either 2D or 3D. */
transform_format: int;

/** If [code]true[/code], the [MultiMesh] will use color data (see [method set_instance_color]). Can only be set when [member instance_count] is [code]0[/code] or less. This means that you need to call this method before setting the instance count, or temporarily reset it to [code]0[/code]. */
use_colors: boolean;

/** If [code]true[/code], the [MultiMesh] will use custom data (see [method set_instance_custom_data]). Can only be set when [member instance_count] is [code]0[/code] or less. This means that you need to call this method before setting the instance count, or temporarily reset it to [code]0[/code]. */
use_custom_data: boolean;

/** Limits the number of instances drawn, -1 draws all instances. Changing this does not change the sizes of the buffers. */
visible_instance_count: int;

/** Returns the visibility axis-aligned bounding box in local space. */
get_aabb(): AABB;

/** Gets a specific instance's color multiplier. */
get_instance_color(): Color;

/** Returns the custom data that has been set for a specific instance. */
get_instance_custom_data(): Color;

/** Returns the [Transform3D] of a specific instance. */
get_instance_transform(): Transform3D;

/** Returns the [Transform2D] of a specific instance. */
get_instance_transform_2d(): Transform2D;

/**
 * Sets the color of a specific instance by **multiplying** the mesh's existing vertex colors. This allows for different color tinting per instance.
 *
 * For the color to take effect, ensure that [member use_colors] is `true` on the [MultiMesh] and [member BaseMaterial3D.vertex_color_use_as_albedo] is `true` on the material. If you intend to set an absolute color instead of tinting, make sure the material's albedo color is set to pure white (`Color(1, 1, 1)`).
 *
*/
set_instance_color(): void;

/**
 * Sets custom data for a specific instance. Although [Color] is used, it is just a container for 4 floating point numbers.
 *
 * For the custom data to be used, ensure that [member use_custom_data] is `true`.
 *
 * This custom instance data has to be manually accessed in your custom shader using `INSTANCE_CUSTOM`.
 *
*/
set_instance_custom_data(): void;

/** Sets the [Transform3D] for a specific instance. */
set_instance_transform(): void;

/** Sets the [Transform2D] for a specific instance. */
set_instance_transform_2d(): void;

  connect<T extends SignalsOf<MultiMesh>>(signal: T, method: SignalFunction<MultiMesh[T]>): number;



/**
 * Use this when using 2D transforms.
 *
*/
static TRANSFORM_2D: any;

/**
 * Use this when using 3D transforms.
 *
*/
static TRANSFORM_3D: any;



}

