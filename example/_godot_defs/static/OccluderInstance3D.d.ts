
/**
 * Occlusion culling can improve rendering performance in closed/semi-open areas by hiding geometry that is occluded by other objects.
 *
 * The occlusion culling system is mostly static. [OccluderInstance3D]s can be moved or hidden at run-time, but doing so will trigger a background recomputation that can take several frames. It is recommended to only move [OccluderInstance3D]s sporadically (e.g. for procedural generation purposes), rather than doing so every frame.
 *
 * The occlusion culling system works by rendering the occluders on the CPU in parallel using [url=https://www.embree.org/]Embree[/url], drawing the result to a low-resolution buffer then using this to cull 3D nodes individually. In the 3D editor, you can preview the occlusion culling buffer by choosing **Perspective > Debug Advanced... > Occlusion Culling Buffer** in the top-left corner of the 3D viewport. The occlusion culling buffer quality can be adjusted in the Project Settings.
 *
 * **Baking:** Select an [OccluderInstance3D] node, then use the **Bake Occluders** button at the top of the 3D editor. Only opaque materials will be taken into account; transparent materials (alpha-blended or alpha-tested) will be ignored by the occluder generation.
 *
 * **Note:** Occlusion culling is only effective if [member ProjectSettings.rendering/occlusion_culling/use_occlusion_culling] is `true`. Enabling occlusion culling has a cost on the CPU. Only enable occlusion culling if you actually plan to use it. Large open scenes with few or no objects blocking the view will generally not benefit much from occlusion culling. Large open scenes generally benefit more from mesh LOD and visibility ranges ([member GeometryInstance3D.visibility_range_begin] and [member GeometryInstance3D.visibility_range_end]) compared to occlusion culling.
 *
 * **Note:** Due to memory constraints, occlusion culling is not supported by default in Web export templates. It can be enabled by compiling custom Web export templates with `module_raycast_enabled=yes`.
 *
*/
declare class OccluderInstance3D extends Node3D  {

  
/**
 * Occlusion culling can improve rendering performance in closed/semi-open areas by hiding geometry that is occluded by other objects.
 *
 * The occlusion culling system is mostly static. [OccluderInstance3D]s can be moved or hidden at run-time, but doing so will trigger a background recomputation that can take several frames. It is recommended to only move [OccluderInstance3D]s sporadically (e.g. for procedural generation purposes), rather than doing so every frame.
 *
 * The occlusion culling system works by rendering the occluders on the CPU in parallel using [url=https://www.embree.org/]Embree[/url], drawing the result to a low-resolution buffer then using this to cull 3D nodes individually. In the 3D editor, you can preview the occlusion culling buffer by choosing **Perspective > Debug Advanced... > Occlusion Culling Buffer** in the top-left corner of the 3D viewport. The occlusion culling buffer quality can be adjusted in the Project Settings.
 *
 * **Baking:** Select an [OccluderInstance3D] node, then use the **Bake Occluders** button at the top of the 3D editor. Only opaque materials will be taken into account; transparent materials (alpha-blended or alpha-tested) will be ignored by the occluder generation.
 *
 * **Note:** Occlusion culling is only effective if [member ProjectSettings.rendering/occlusion_culling/use_occlusion_culling] is `true`. Enabling occlusion culling has a cost on the CPU. Only enable occlusion culling if you actually plan to use it. Large open scenes with few or no objects blocking the view will generally not benefit much from occlusion culling. Large open scenes generally benefit more from mesh LOD and visibility ranges ([member GeometryInstance3D.visibility_range_begin] and [member GeometryInstance3D.visibility_range_end]) compared to occlusion culling.
 *
 * **Note:** Due to memory constraints, occlusion culling is not supported by default in Web export templates. It can be enabled by compiling custom Web export templates with `module_raycast_enabled=yes`.
 *
*/
  new(): OccluderInstance3D; 
  static "new"(): OccluderInstance3D 


/**
 * The visual layers to account for when baking for occluders. Only [MeshInstance3D]s whose [member VisualInstance3D.layers] match with this [member bake_mask] will be included in the generated occluder mesh. By default, all objects with **opaque** materials are taken into account for the occluder baking.
 *
 * To improve performance and avoid artifacts, it is recommended to exclude dynamic objects, small objects and fixtures from the baking process by moving them to a separate visual layer and excluding this layer in [member bake_mask].
 *
*/
bake_mask: int;

/**
 * The simplification distance to use for simplifying the generated occluder polygon (in 3D units). Higher values result in a less detailed occluder mesh, which improves performance but reduces culling accuracy.
 *
 * The occluder geometry is rendered on the CPU, so it is important to keep its geometry as simple as possible. Since the buffer is rendered at a low resolution, less detailed occluder meshes generally still work well. The default value is fairly aggressive, so you may have to decrease it if you run into false negatives (objects being occluded even though they are visible by the camera). A value of `0.01` will act conservatively, and will keep geometry **perceptually** unaffected in the occlusion culling buffer. Depending on the scene, a value of `0.01` may still simplify the mesh noticeably compared to disabling simplification entirely.
 *
 * Setting this to `0.0` disables simplification entirely, but vertices in the exact same position will still be merged. The mesh will also be re-indexed to reduce both the number of vertices and indices.
 *
 * **Note:** This uses the [url=https://meshoptimizer.org/]meshoptimizer[/url] library under the hood, similar to LOD generation.
 *
*/
bake_simplification_distance: float;

/**
 * The occluder resource for this [OccluderInstance3D]. You can generate an occluder resource by selecting an [OccluderInstance3D] node then using the **Bake Occluders** button at the top of the editor.
 *
 * You can also draw your own 2D occluder polygon by adding a new [PolygonOccluder3D] resource to the [member occluder] property in the Inspector.
 *
 * Alternatively, you can select a primitive occluder to use: [QuadOccluder3D], [BoxOccluder3D] or [SphereOccluder3D].
 *
*/
occluder: Occluder3D;

/** Returns whether or not the specified layer of the [member bake_mask] is enabled, given a [param layer_number] between 1 and 32. */
get_bake_mask_value(): boolean;

/** Based on [param value], enables or disables the specified layer in the [member bake_mask], given a [param layer_number] between 1 and 32. */
set_bake_mask_value(): void;

  connect<T extends SignalsOf<OccluderInstance3D>>(signal: T, method: SignalFunction<OccluderInstance3D[T]>): number;






}

