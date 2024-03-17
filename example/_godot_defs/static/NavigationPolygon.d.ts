
/**
 * A navigation mesh can be created either by baking it with the help of the [NavigationServer2D], or by adding vertices and convex polygon indices arrays manually.
 *
 * To bake a navigation mesh at least one outline needs to be added that defines the outer bounds of the baked area.
 *
 * @example 
 * 
 * 
 * var new_navigation_mesh = NavigationPolygon.new()
 * var bounding_outline = PackedVector2Array([Vector2(0, 0), Vector2(0, 50), Vector2(50, 50), Vector2(50, 0)])
 * new_navigation_mesh.add_outline(bounding_outline)
 * NavigationServer2D.bake_from_source_geometry_data(new_navigation_mesh, NavigationMeshSourceGeometryData2D.new());
 * $NavigationRegion2D.navigation_polygon = new_navigation_mesh
 * 
 * 
 * var newNavigationMesh = new NavigationPolygon();
 * var boundingOutline = new Vector2[] { new Vector2(0, 0), new Vector2(0, 50), new Vector2(50, 50), new Vector2(50, 0) };
 * newNavigationMesh.AddOutline(boundingOutline);
 * NavigationServer2D.BakeFromSourceGeometryData(newNavigationMesh, new NavigationMeshSourceGeometryData2D());
 * GetNode<NavigationRegion2D>("NavigationRegion2D").NavigationPolygon = newNavigationMesh;
 * 
 * @summary 
 * 
 *
 * Adding vertices and polygon indices manually.
 *
 * @example 
 * 
 * 
 * var new_navigation_mesh = NavigationPolygon.new()
 * var new_vertices = PackedVector2Array([Vector2(0, 0), Vector2(0, 50), Vector2(50, 50), Vector2(50, 0)])
 * new_navigation_mesh.vertices = new_vertices
 * var new_polygon_indices = PackedInt32Array([0, 1, 2, 3])
 * new_navigation_mesh.add_polygon(new_polygon_indices)
 * $NavigationRegion2D.navigation_polygon = new_navigation_mesh
 * 
 * 
 * var newNavigationMesh = new NavigationPolygon();
 * var newVertices = new Vector2[] { new Vector2(0, 0), new Vector2(0, 50), new Vector2(50, 50), new Vector2(50, 0) };
 * newNavigationMesh.Vertices = newVertices;
 * var newPolygonIndices = new int[] { 0, 1, 2, 3 };
 * newNavigationMesh.AddPolygon(newPolygonIndices);
 * GetNode<NavigationRegion2D>("NavigationRegion2D").NavigationPolygon = newNavigationMesh;
 * 
 * @summary 
 * 
 *
*/
declare class NavigationPolygon extends Resource  {

  
/**
 * A navigation mesh can be created either by baking it with the help of the [NavigationServer2D], or by adding vertices and convex polygon indices arrays manually.
 *
 * To bake a navigation mesh at least one outline needs to be added that defines the outer bounds of the baked area.
 *
 * @example 
 * 
 * 
 * var new_navigation_mesh = NavigationPolygon.new()
 * var bounding_outline = PackedVector2Array([Vector2(0, 0), Vector2(0, 50), Vector2(50, 50), Vector2(50, 0)])
 * new_navigation_mesh.add_outline(bounding_outline)
 * NavigationServer2D.bake_from_source_geometry_data(new_navigation_mesh, NavigationMeshSourceGeometryData2D.new());
 * $NavigationRegion2D.navigation_polygon = new_navigation_mesh
 * 
 * 
 * var newNavigationMesh = new NavigationPolygon();
 * var boundingOutline = new Vector2[] { new Vector2(0, 0), new Vector2(0, 50), new Vector2(50, 50), new Vector2(50, 0) };
 * newNavigationMesh.AddOutline(boundingOutline);
 * NavigationServer2D.BakeFromSourceGeometryData(newNavigationMesh, new NavigationMeshSourceGeometryData2D());
 * GetNode<NavigationRegion2D>("NavigationRegion2D").NavigationPolygon = newNavigationMesh;
 * 
 * @summary 
 * 
 *
 * Adding vertices and polygon indices manually.
 *
 * @example 
 * 
 * 
 * var new_navigation_mesh = NavigationPolygon.new()
 * var new_vertices = PackedVector2Array([Vector2(0, 0), Vector2(0, 50), Vector2(50, 50), Vector2(50, 0)])
 * new_navigation_mesh.vertices = new_vertices
 * var new_polygon_indices = PackedInt32Array([0, 1, 2, 3])
 * new_navigation_mesh.add_polygon(new_polygon_indices)
 * $NavigationRegion2D.navigation_polygon = new_navigation_mesh
 * 
 * 
 * var newNavigationMesh = new NavigationPolygon();
 * var newVertices = new Vector2[] { new Vector2(0, 0), new Vector2(0, 50), new Vector2(50, 50), new Vector2(50, 0) };
 * newNavigationMesh.Vertices = newVertices;
 * var newPolygonIndices = new int[] { 0, 1, 2, 3 };
 * newNavigationMesh.AddPolygon(newPolygonIndices);
 * GetNode<NavigationRegion2D>("NavigationRegion2D").NavigationPolygon = newNavigationMesh;
 * 
 * @summary 
 * 
 *
*/
  new(): NavigationPolygon; 
  static "new"(): NavigationPolygon 


/** The distance to erode/shrink the walkable surface when baking the navigation mesh. */
agent_radius: float;

/** The cell size used to rasterize the navigation mesh vertices. Must match with the cell size on the navigation map. */
cell_size: float;

/**
 * The physics layers to scan for static colliders.
 *
 * Only used when [member parsed_geometry_type] is [constant PARSED_GEOMETRY_STATIC_COLLIDERS] or [constant PARSED_GEOMETRY_BOTH].
 *
*/
parsed_collision_mask: int;

/** Determines which type of nodes will be parsed as geometry. See [enum ParsedGeometryType] for possible values. */
parsed_geometry_type: int;

/**
 * The group name of nodes that should be parsed for baking source geometry.
 *
 * Only used when [member source_geometry_mode] is [constant SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN] or [constant SOURCE_GEOMETRY_GROUPS_EXPLICIT].
 *
*/
source_geometry_group_name: StringName;

/** The source of the geometry used when baking. See [enum SourceGeometryMode] for possible values. */
source_geometry_mode: int;

/** Appends a [PackedVector2Array] that contains the vertices of an outline to the internal array that contains all the outlines. */
add_outline(): void;

/** Adds a [PackedVector2Array] that contains the vertices of an outline to the internal array that contains all the outlines at a fixed position. */
add_outline_at_index(): void;

/** Adds a polygon using the indices of the vertices you get when calling [method get_vertices]. */
add_polygon(): void;

/** Clears the internal arrays for vertices and polygon indices. */
clear(): void;

/** Clears the array of the outlines, but it doesn't clear the vertices and the polygons that were created by them. */
clear_outlines(): void;

/** Clears the array of polygons, but it doesn't clear the array of outlines and vertices. */
clear_polygons(): void;

/** Returns the [NavigationMesh] resulting from this navigation polygon. This navigation mesh can be used to update the navigation mesh of a region with the [method NavigationServer3D.region_set_navigation_mesh] API directly (as 2D uses the 3D server behind the scene). */
get_navigation_mesh(): NavigationMesh;

/** Returns a [PackedVector2Array] containing the vertices of an outline that was created in the editor or by script. */
get_outline(): PackedVector2Array;

/** Returns the number of outlines that were created in the editor or by script. */
get_outline_count(): int;

/** Returns whether or not the specified layer of the [member parsed_collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
get_parsed_collision_mask_value(): boolean;

/** Returns a [PackedInt32Array] containing the indices of the vertices of a created polygon. */
get_polygon(): PackedInt32Array;

/** Returns the count of all polygons. */
get_polygon_count(): int;

/** Returns a [PackedVector2Array] containing all the vertices being used to create the polygons. */
get_vertices(): PackedVector2Array;

/**
 * Creates polygons from the outlines added in the editor or by script.
 *
 * **Deprecated.** This function is deprecated, and might be removed in a future release. Use [method NavigationServer2D.parse_source_geometry_data] and [method NavigationServer2D.bake_from_source_geometry_data] instead.
 *
*/
make_polygons_from_outlines(): void;

/** Removes an outline created in the editor or by script. You have to call [method make_polygons_from_outlines] for the polygons to update. */
remove_outline(): void;

/** Changes an outline created in the editor or by script. You have to call [method make_polygons_from_outlines] for the polygons to update. */
set_outline(): void;

/** Based on [param value], enables or disables the specified layer in the [member parsed_collision_mask], given a [param layer_number] between 1 and 32. */
set_parsed_collision_mask_value(): void;

/** Sets the vertices that can be then indexed to create polygons with the [method add_polygon] method. */
set_vertices(): void;

  connect<T extends SignalsOf<NavigationPolygon>>(signal: T, method: SignalFunction<NavigationPolygon[T]>): number;



/**
 * Parses mesh instances as obstruction geometry. This includes [Polygon2D], [MeshInstance2D], [MultiMeshInstance2D], and [TileMap] nodes.
 *
 * Meshes are only parsed when they use a 2D vertices surface format.
 *
*/
static PARSED_GEOMETRY_MESH_INSTANCES: any;

/**
 * Parses [StaticBody2D] and [TileMap] colliders as obstruction geometry. The collider should be in any of the layers specified by [member parsed_collision_mask].
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
 * Scans nodes in a group and their child nodes recursively for geometry. The group is specified by [member source_geometry_group_name].
 *
*/
static SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN: any;

/**
 * Uses nodes in a group for geometry. The group is specified by [member source_geometry_group_name].
 *
*/
static SOURCE_GEOMETRY_GROUPS_EXPLICIT: any;

/**
 * Represents the size of the [enum SourceGeometryMode] enum.
 *
*/
static SOURCE_GEOMETRY_MAX: any;



}

