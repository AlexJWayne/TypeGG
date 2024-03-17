
/**
 * This class stores the result of a 3D navigation path query from the [NavigationServer3D].
 *
*/
declare class NavigationPathQueryResult3D extends RefCounted  {

  
/**
 * This class stores the result of a 3D navigation path query from the [NavigationServer3D].
 *
*/
  new(): NavigationPathQueryResult3D; 
  static "new"(): NavigationPathQueryResult3D 


/** The resulting path array from the navigation query. All path array positions are in global coordinates. Without customized query parameters this is the same path as returned by [method NavigationServer3D.map_get_path]. */
path: PackedVector3Array;

/** The [code]ObjectID[/code]s of the [Object]s which manage the regions and links each point of the path goes through. */
path_owner_ids: PackedInt64Array;

/** The [RID]s of the regions and links that each point of the path goes through. */
path_rids: RID[];

/** The type of navigation primitive (region or link) that each point of the path goes through. */
path_types: PackedInt32Array;

/** Reset the result object to its initial state. This is useful to reuse the object across multiple queries. */
reset(): void;

  connect<T extends SignalsOf<NavigationPathQueryResult3D>>(signal: T, method: SignalFunction<NavigationPathQueryResult3D[T]>): number;



/**
 * This segment of the path goes through a region.
 *
*/
static PATH_SEGMENT_TYPE_REGION: any;

/**
 * This segment of the path goes through a link.
 *
*/
static PATH_SEGMENT_TYPE_LINK: any;



}

