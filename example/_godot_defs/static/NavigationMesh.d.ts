
/**
 * A navigation mesh is a collection of polygons that define which areas of an environment are traversable to aid agents in pathfinding through complicated spaces.
 *
*/
declare class NavigationMesh extends Resource  {

  
/**
 * A navigation mesh is a collection of polygons that define which areas of an environment are traversable to aid agents in pathfinding through complicated spaces.
 *
*/
  new(): NavigationMesh; 
  static "new"(): NavigationMesh 


/**
 * The minimum floor to ceiling height that will still allow the floor area to be considered walkable.
 *
 * **Note:** While baking, this value will be rounded up to the nearest multiple of [member cell_height].
 *
*/
agent_height: float;

/**
 * The minimum ledge height that is considered to still be traversable.
 *
 * **Note:** While baking, this value will be rounded down to the nearest multiple of [member cell_height].
 *
*/
agent_max_climb: float;

/** The maximum slope that is considered walkable, in degrees. */
agent_max_slope: float;

/**
 * The distance to erode/shrink the walkable area of the heightfield away from obstructions.
 *
 * **Note:** While baking, this value will be rounded up to the nearest multiple of [member cell_size].
 *
*/
agent_radius: float;

/** The cell height used to rasterize the navigation mesh vertices on the Y axis. Must match with the cell height on the navigation map. */
cell_height: float;

/** The cell size used to rasterize the navigation mesh vertices on the XZ plane. Must match with the cell size on the navigation map. */
cell_size: float;

/** The sampling distance to use when generating the detail mesh, in cell unit. */
detail_sample_distance: float;

/** The maximum distance the detail mesh surface should deviate from heightfield, in cell unit. */
detail_sample_max_error: float;

/** The maximum distance a simplified contour's border edges should deviate the original raw contour. */
edge_max_error: float;

/**
 * The maximum allowed length for contour edges along the border of the mesh. A value of `0.0` disables this feature.
 *
 * **Note:** While baking, this value will be rounded up to the nearest multiple of [member cell_size].
 *
*/
edge_max_length: float;

/** If the baking [AABB] has a volume the navigation mesh baking will be restricted to its enclosing area. */
filter_baking_aabb: AABB;

/** The position offset applied to the [member filter_baking_aabb] [AABB]. */
filter_baking_aabb_offset: Vector3;

/** If [code]true[/code], marks spans that are ledges as non-walkable. */
filter_ledge_spans: boolean;

/** If [code]true[/code], marks non-walkable spans as walkable if their maximum is within [member agent_max_climb] of a walkable neighbor. */
filter_low_hanging_obstacles: boolean;

/** If [code]true[/code], marks walkable spans as not walkable if the clearance above the span is less than [member agent_height]. */
filter_walkable_low_height_spans: boolean;

/**
 * The physics layers to scan for static colliders.
 *
 * Only used when [member geometry_parsed_geometry_type] is [constant PARSED_GEOMETRY_STATIC_COLLIDERS] or [constant PARSED_GEOMETRY_BOTH].
 *
*/
geometry_collision_mask: int;

/** Determines which type of nodes will be parsed as geometry. See [enum ParsedGeometryType] for possible values. */
geometry_parsed_geometry_type: int;

/** The source of the geometry used when baking. See [enum SourceGeometryMode] for possible values. */
geometry_source_geometry_mode: int;

/**
 * The name of the group to scan for geometry.
 *
 * Only used when [member geometry_source_geometry_mode] is [constant SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN] or [constant SOURCE_GEOMETRY_GROUPS_EXPLICIT].
 *
*/
geometry_source_group_name: StringName;

/**
 * Any regions with a size smaller than this will be merged with larger regions if possible.
 *
 * **Note:** This value will be squared to calculate the number of cells. For example, a value of 20 will set the number of cells to 400.
 *
*/
region_merge_size: float;

/**
 * The minimum size of a region for it to be created.
 *
 * **Note:** This value will be squared to calculate the minimum number of cells allowed to form isolated island areas. For example, a value of 8 will set the number of cells to 64.
 *
*/
region_min_size: float;

/** Partitioning algorithm for creating the navigation mesh polys. See [enum SamplePartitionType] for possible values. */
sample_partition_type: int;

/** The maximum number of vertices allowed for polygons generated during the contour to polygon conversion process. */
vertices_per_polygon: float;

/** Adds a polygon using the indices of the vertices you get when calling [method get_vertices]. */
add_polygon(): void;

/** Clears the internal arrays for vertices and polygon indices. */
clear(): void;

/** Clears the array of polygons, but it doesn't clear the array of vertices. */
clear_polygons(): void;

/**
 * Initializes the navigation mesh by setting the vertices and indices according to a [Mesh].
 *
 * **Note:** The given [param mesh] must be of type [constant Mesh.PRIMITIVE_TRIANGLES] and have an index array.
 *
*/
create_from_mesh(): void;

/** Returns whether or not the specified layer of the [member geometry_collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
get_collision_mask_value(): boolean;

/** Returns a [PackedInt32Array] containing the indices of the vertices of a created polygon. */
get_polygon(): PackedInt32Array;

/** Returns the number of polygons in the navigation mesh. */
get_polygon_count(): int;

/** Returns a [PackedVector3Array] containing all the vertices being used to create the polygons. */
get_vertices(): PackedVector3Array;

/** Based on [param value], enables or disables the specified layer in the [member geometry_collision_mask], given a [param layer_number] between 1 and 32. */
set_collision_mask_value(): void;

/** Sets the vertices that can be then indexed to create polygons with the [method add_polygon] method. */
set_vertices(): void;

  connect<T extends SignalsOf<NavigationMesh>>(signal: T, method: SignalFunction<NavigationMesh[T]>): number;



/**
 * Watershed partitioning. Generally the best choice if you precompute the navigation mesh, use this if you have large open areas.
 *
*/
static SAMPLE_PARTITION_WATERSHED: any;

/**
 * Monotone partitioning. Use this if you want fast navigation mesh generation.
 *
*/
static SAMPLE_PARTITION_MONOTONE: any;

/**
 * Layer partitioning. Good choice to use for tiled navigation mesh with medium and small sized tiles.
 *
*/
static SAMPLE_PARTITION_LAYERS: any;

/**
 * Represents the size of the [enum SamplePartitionType] enum.
 *
*/
static SAMPLE_PARTITION_MAX: any;

/**
 * Parses mesh instances as geometry. This includes [MeshInstance3D], [CSGShape3D], and [GridMap] nodes.
 *
*/
static PARSED_GEOMETRY_MESH_INSTANCES: any;

/**
 * Parses [StaticBody3D] colliders as geometry. The collider should be in any of the layers specified by [member geometry_collision_mask].
 *
*/
static PARSED_GEOMETRY_STATIC_COLLIDERS: any;

/**
 * Both [constant PARSED_GEOMETRY_MESH_INSTANCES] and [constant PARSED_GEOMETRY_STATIC_COLLIDERS].
 *
*/
static PARSED_GEOMETRY_BOTH: any;

/**
 * Represents the size of the [enum ParsedGeometryType] enum.
 *
*/
static PARSED_GEOMETRY_MAX: any;

/**
 * Scans the child nodes of the root node recursively for geometry.
 *
*/
static SOURCE_GEOMETRY_ROOT_NODE_CHILDREN: any;

/**
 * Scans nodes in a group and their child nodes recursively for geometry. The group is specified by [member geometry_source_group_name].
 *
*/
static SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN: any;

/**
 * Uses nodes in a group for geometry. The group is specified by [member geometry_source_group_name].
 *
*/
static SOURCE_GEOMETRY_GROUPS_EXPLICIT: any;

/**
 * Represents the size of the [enum SourceGeometryMode] enum.
 *
*/
static SOURCE_GEOMETRY_MAX: any;



}

