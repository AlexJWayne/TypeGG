
/**
 * See also [ResourceImporterOBJ], which is used for OBJ models that can be imported as a standalone [Mesh] or a scene.
 *
 * Additional options (such as extracting individual meshes or materials to files) are available in the **Advanced Import Settings** dialog. This dialog can be accessed by double-clicking a 3D scene in the FileSystem dock or by selecting a 3D scene in the FileSystem dock, going to the Import dock and choosing **Advanced**.
 *
 * **Note:** [ResourceImporterScene] is **not** used for [PackedScene]s, such as `.tscn` and `.scn` files.
 *
*/
declare class ResourceImporterScene extends ResourceImporter  {

  
/**
 * See also [ResourceImporterOBJ], which is used for OBJ models that can be imported as a standalone [Mesh] or a scene.
 *
 * Additional options (such as extracting individual meshes or materials to files) are available in the **Advanced Import Settings** dialog. This dialog can be accessed by double-clicking a 3D scene in the FileSystem dock or by selecting a 3D scene in the FileSystem dock, going to the Import dock and choosing **Advanced**.
 *
 * **Note:** [ResourceImporterScene] is **not** used for [PackedScene]s, such as `.tscn` and `.scn` files.
 *
*/
  new(): ResourceImporterScene; 
  static "new"(): ResourceImporterScene 


/** Contains properties for the scene's subresources. This is an internal option which is not visible in the Import dock. */
_subresources: Dictionary<any, any>;

/** The number of frames per second to use for baking animation curves to a series of points with linear interpolation. It's recommended to configure this value to match the value you're using as a baseline in your 3D modeling software. Higher values result in more precise animation with fast movement changes, at the cost of higher file sizes and memory usage. Thanks to interpolation, there is usually not much benefit in going above 30 FPS (as the animation will still appear smooth at higher rendering framerates). */
"animation/fps": float;

/** If [code]true[/code], import animations from the 3D scene. */
"animation/import": boolean;

/** If [code]true[/code], remove animation tracks that only contain default values. This can reduce output file size and memory usage with certain 3D scenes, depending on the contents of their animation tracks. */
"animation/remove_immutable_tracks": boolean;

/** If [code]true[/code], trim the beginning and end of animations if there are no keyframe changes. This can reduce output file size and memory usage with certain 3D scenes, depending on the contents of their animation tracks. */
"animation/trimming": boolean;

/** Path to an import script, which can run code after the import process has completed for custom processing. See [url=$DOCS_URL/tutorials/assets_pipeline/importing_3d_scenes/import_configuration.html#using-import-scripts-for-automation]Using import scripts for automation[/url] for more information. */
"import_script/path": string;

/** If [code]true[/code], enables the generation of shadow meshes on import. This optimizes shadow rendering without reducing quality by welding vertices together when possible. This in turn reduces the memory bandwidth required to render shadows. Shadow mesh generation currently doesn't support using a lower detail level than the source mesh (but shadow rendering will make use of LODs when relevant). */
"meshes/create_shadow_meshes": boolean;

/**
 * If `true`, generate vertex tangents using [url=http://www.mikktspace.com/]Mikktspace[/url] if the input meshes don't have tangent data. When possible, it's recommended to let the 3D modeling software generate tangents on export instead on relying on this option. Tangents are required for correct display of normal and height maps, along with any material/shader features that require tangents.
 *
 * If you don't need material features that require tangents, disabling this can reduce output file size and speed up importing if the source 3D file doesn't contain tangents.
 *
*/
"meshes/ensure_tangents": boolean;

/** If [code]true[/code], mesh compression will not be used. Consider enabling if you notice blocky artifacts in your mesh normals or UVs, or if you have meshes that are larger than a few thousand meters in each direction. */
"meshes/force_disable_compression": boolean;

/** If [code]true[/code], generates lower detail variants of the mesh which will be displayed in the distance to improve rendering performance. Not all meshes benefit from LOD, especially if they are never rendered from far away. Disabling this can reduce output file size and speed up importing. See [url=$DOCS_URL/tutorials/3d/mesh_lod.html#doc-mesh-lod]Mesh level of detail (LOD)[/url] for more information. */
"meshes/generate_lods": boolean;

/** Configures the meshes' [member GeometryInstance3D.gi_mode] in the 3D scene. If set to [b]Static Lightmaps[/b], sets the meshes' GI mode to Static and generates UV2 on import for [LightmapGI] baking. */
"meshes/light_baking": int;

/**
 * Controls the size of each texel on the baked lightmap. A smaller value results in more precise lightmaps, at the cost of larger lightmap sizes and longer bake times.
 *
 * **Note:** Only effective if [member meshes/light_baking] is set to **Static Lightmaps**.
 *
*/
"meshes/lightmap_texel_size": float;

/** If [code]true[/code], [member nodes/root_scale] will be applied to the descendant nodes, meshes, animations, bones, etc. This means that if you add a child node later on within the imported scene, it won't be scaled. If [code]false[/code], [member nodes/root_scale] will multiply the scale of the root node instead. */
"nodes/apply_root_scale": boolean;

/** Override for the root node name. If empty, the root node will use what the scene specifies, or the file name if the scene does not specify a root name. */
"nodes/root_name": string;

/** The uniform scale to use for the scene root. The default value of [code]1.0[/code] will not perform any rescaling. See [member nodes/apply_root_scale] for details of how this scale is applied. */
"nodes/root_scale": float;

/** Override for the root node type. If empty, the root node will use what the scene specifies, or [Node3D] if the scene does not specify a root type. Using a node type that inherits from [Node3D] is recommended. Otherwise, you'll lose the ability to position the node directly in the 3D editor. */
"nodes/root_type": string;

/**
 * If checked, use named [Skin]s for animation. The [MeshInstance3D] node contains 3 properties of relevance here: a skeleton [NodePath] pointing to the [Skeleton3D] node (usually `..`), a mesh, and a skin:
 *
 * - The [Skeleton3D] node contains a list of bones with names, their pose and rest, a name and a parent bone.
 *
 * - The mesh is all of the raw vertex data needed to display a mesh. In terms of the mesh, it knows how vertices are weight-painted and uses some internal numbering often imported from 3D modeling software.
 *
 * - The skin contains the information necessary to bind this mesh onto this Skeleton3D. For every one of the internal bone IDs chosen by the 3D modeling software, it contains two things. Firstly, a matrix known as the Bind Pose Matrix, Inverse Bind Matrix, or IBM for short. Secondly, the [Skin] contains each bone's name (if [member skins/use_named_skins] is `true`), or the bone's index within the [Skeleton3D] list (if [member skins/use_named_skins] is `false`).
 *
 * Together, this information is enough to tell Godot how to use the bone poses in the [Skeleton3D] node to render the mesh from each [MeshInstance3D]. Note that each [MeshInstance3D] may share binds, as is common in models exported from Blender, or each [MeshInstance3D] may use a separate [Skin] object, as is common in models exported from other tools such as Maya.
 *
*/
"skins/use_named_skins": boolean;



  connect<T extends SignalsOf<ResourceImporterScene>>(signal: T, method: SignalFunction<ResourceImporterScene[T]>): number;






}

