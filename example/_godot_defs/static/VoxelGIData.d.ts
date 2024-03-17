
/**
 * [VoxelGIData] contains baked voxel global illumination for use in a [VoxelGI] node. [VoxelGIData] also offers several properties to adjust the final appearance of the global illumination. These properties can be adjusted at run-time without having to bake the [VoxelGI] node again.
 *
 * **Note:** To prevent text-based scene files (`.tscn`) from growing too much and becoming slow to load and save, always save [VoxelGIData] to an external binary resource file (`.res`) instead of embedding it within the scene. This can be done by clicking the dropdown arrow next to the [VoxelGIData] resource, choosing **Edit**, clicking the floppy disk icon at the top of the Inspector then choosing **Save As...**.
 *
*/
declare class VoxelGIData extends Resource  {

  
/**
 * [VoxelGIData] contains baked voxel global illumination for use in a [VoxelGI] node. [VoxelGIData] also offers several properties to adjust the final appearance of the global illumination. These properties can be adjusted at run-time without having to bake the [VoxelGI] node again.
 *
 * **Note:** To prevent text-based scene files (`.tscn`) from growing too much and becoming slow to load and save, always save [VoxelGIData] to an external binary resource file (`.res`) instead of embedding it within the scene. This can be done by clicking the dropdown arrow next to the [VoxelGIData] resource, choosing **Edit**, clicking the floppy disk icon at the top of the Inspector then choosing **Save As...**.
 *
*/
  new(): VoxelGIData; 
  static "new"(): VoxelGIData 


/** The normal bias to use for indirect lighting and reflections. Higher values reduce self-reflections visible in non-rough materials, at the cost of more visible light leaking and flatter-looking indirect lighting. To prioritize hiding self-reflections over lighting quality, set [member bias] to [code]0.0[/code] and [member normal_bias] to a value between [code]1.0[/code] and [code]2.0[/code]. */
bias: float;

/** The dynamic range to use ([code]1.0[/code] represents a low dynamic range scene brightness). Higher values can be used to provide brighter indirect lighting, at the cost of more visible color banding in dark areas (both in indirect lighting and reflections). To avoid color banding, it's recommended to use the lowest value that does not result in visible light clipping. */
dynamic_range: float;

/** The energy of the indirect lighting and reflections produced by the [VoxelGI] node. Higher values result in brighter indirect lighting. If indirect lighting looks too flat, try decreasing [member propagation] while increasing [member energy] at the same time. See also [member use_two_bounces] which influences the indirect lighting's effective brightness. */
energy: float;

/** If [code]true[/code], [Environment] lighting is ignored by the [VoxelGI] node. If [code]false[/code], [Environment] lighting is taken into account by the [VoxelGI] node. [Environment] lighting updates in real-time, which means it can be changed without having to bake the [VoxelGI] node again. */
interior: boolean;

/** The normal bias to use for indirect lighting and reflections. Higher values reduce self-reflections visible in non-rough materials, at the cost of more visible light leaking and flatter-looking indirect lighting. See also [member bias]. To prioritize hiding self-reflections over lighting quality, set [member bias] to [code]0.0[/code] and [member normal_bias] to a value between [code]1.0[/code] and [code]2.0[/code]. */
normal_bias: float;

/** The multiplier to use when light bounces off a surface. Higher values result in brighter indirect lighting. If indirect lighting looks too flat, try decreasing [member propagation] while increasing [member energy] at the same time. See also [member use_two_bounces] which influences the indirect lighting's effective brightness. */
propagation: float;

/** If [code]true[/code], performs two bounces of indirect lighting instead of one. This makes indirect lighting look more natural and brighter at a small performance cost. The second bounce is also visible in reflections. If the scene appears too bright after enabling [member use_two_bounces], adjust [member propagation] and [member energy]. */
use_two_bounces: boolean;

/** No documentation provided. */
allocate(): void;

/**
 * Returns the bounds of the baked voxel data as an [AABB], which should match [member VoxelGI.size] after being baked (which only contains the size as a [Vector3]).
 *
 * **Note:** If the size was modified without baking the VoxelGI data, then the value of [method get_bounds] and [member VoxelGI.size] will not match.
 *
*/
get_bounds(): AABB;

/** No documentation provided. */
get_data_cells(): PackedByteArray;

/** No documentation provided. */
get_level_counts(): PackedInt32Array;

/** No documentation provided. */
get_octree_cells(): PackedByteArray;

/** No documentation provided. */
get_octree_size(): Vector3;

/** No documentation provided. */
get_to_cell_xform(): Transform3D;

  connect<T extends SignalsOf<VoxelGIData>>(signal: T, method: SignalFunction<VoxelGIData[T]>): number;






}

