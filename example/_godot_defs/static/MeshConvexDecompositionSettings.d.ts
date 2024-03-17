
/**
 * Parameters to be used with a [Mesh] convex decomposition operation.
 *
*/
declare class MeshConvexDecompositionSettings extends RefCounted  {

  
/**
 * Parameters to be used with a [Mesh] convex decomposition operation.
 *
*/
  new(): MeshConvexDecompositionSettings; 
  static "new"(): MeshConvexDecompositionSettings 


/** If enabled uses approximation for computing convex hulls. */
convex_hull_approximation: boolean;

/** Controls the precision of the convex-hull generation process during the clipping plane selection stage. Ranges from [code]1[/code] to [code]16[/code]. */
convex_hull_downsampling: int;

/** Maximum concavity. Ranges from [code]0.0[/code] to [code]1.0[/code]. */
max_concavity: float;

/** The maximum number of convex hulls to produce from the merge operation. */
max_convex_hulls: int;

/** Controls the maximum number of triangles per convex-hull. Ranges from [code]4[/code] to [code]1024[/code]. */
max_num_vertices_per_convex_hull: int;

/** Controls the adaptive sampling of the generated convex-hulls. Ranges from [code]0.0[/code] to [code]0.01[/code]. */
min_volume_per_convex_hull: float;

/** Mode for the approximate convex decomposition. */
mode: int;

/** If enabled normalizes the mesh before applying the convex decomposition. */
normalize_mesh: boolean;

/** Controls the granularity of the search for the "best" clipping plane. Ranges from [code]1[/code] to [code]16[/code]. */
plane_downsampling: int;

/** If enabled projects output convex hull vertices onto original source mesh to increase floating point accuracy of the results. */
project_hull_vertices: boolean;

/** Maximum number of voxels generated during the voxelization stage. */
resolution: int;

/** Controls the bias toward clipping along revolution axes. Ranges from [code]0.0[/code] to [code]1.0[/code]. */
revolution_axes_clipping_bias: float;

/** Controls the bias toward clipping along symmetry planes. Ranges from [code]0.0[/code] to [code]1.0[/code]. */
symmetry_planes_clipping_bias: float;



  connect<T extends SignalsOf<MeshConvexDecompositionSettings>>(signal: T, method: SignalFunction<MeshConvexDecompositionSettings[T]>): number;



/**
 * Constant for voxel-based approximate convex decomposition.
 *
*/
static CONVEX_DECOMPOSITION_MODE_VOXEL: any;

/**
 * Constant for tetrahedron-based approximate convex decomposition.
 *
*/
static CONVEX_DECOMPOSITION_MODE_TETRAHEDRON: any;



}

