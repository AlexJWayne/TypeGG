
/**
 * Unlike [ResourceImporterScene], [ResourceImporterOBJ] will import a single [Mesh] resource by default instead of importing a [PackedScene]. This makes it easier to use the [Mesh] resource in nodes that expect direct [Mesh] resources, such as [GridMap], [GPUParticles3D] or [CPUParticles3D]. Note that it is still possible to save mesh resources from 3D scenes using the **Advanced Import Settings** dialog, regardless of the source format.
 *
 * See also [ResourceImporterScene], which is used for more advanced 3D formats such as glTF.
 *
*/
declare class ResourceImporterOBJ extends ResourceImporter  {

  
/**
 * Unlike [ResourceImporterScene], [ResourceImporterOBJ] will import a single [Mesh] resource by default instead of importing a [PackedScene]. This makes it easier to use the [Mesh] resource in nodes that expect direct [Mesh] resources, such as [GridMap], [GPUParticles3D] or [CPUParticles3D]. Note that it is still possible to save mesh resources from 3D scenes using the **Advanced Import Settings** dialog, regardless of the source format.
 *
 * See also [ResourceImporterScene], which is used for more advanced 3D formats such as glTF.
 *
*/
  new(): ResourceImporterOBJ; 
  static "new"(): ResourceImporterOBJ 


/** If [code]true[/code], mesh compression will not be used. Consider enabling if you notice blocky artifacts in your mesh normals or UVs, or if you have meshes that are larger than a few thousand meters in each direction. */
force_disable_mesh_compression: boolean;

/**
 * If `true`, generate vertex tangents using [url=http://www.mikktspace.com/]Mikktspace[/url] if the source mesh doesn't have tangent data. When possible, it's recommended to let the 3D modeling software generate tangents on export instead on relying on this option. Tangents are required for correct display of normal and height maps, along with any material/shader features that require tangents.
 *
 * If you don't need material features that require tangents, disabling this can reduce output file size and speed up importing if the source 3D file doesn't contain tangents.
 *
*/
generate_tangents: boolean;

/** Offsets the mesh's data by the specified value. This can be used to work around misaligned meshes without having to modify the source file. */
offset_mesh: Vector3;

/** Unused parameter. This currently has no effect. */
optimize_mesh: boolean;

/** Scales the mesh's data by the specified value. This can be used to work around misscaled meshes without having to modify the source file. */
scale_mesh: Vector3;



  connect<T extends SignalsOf<ResourceImporterOBJ>>(signal: T, method: SignalFunction<ResourceImporterOBJ[T]>): number;






}

