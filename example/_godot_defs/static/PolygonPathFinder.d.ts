
/**
*/
declare class PolygonPathFinder extends Resource  {

  
/**
*/
  new(): PolygonPathFinder; 
  static "new"(): PolygonPathFinder 



/** No documentation provided. */
find_path(): PackedVector2Array;

/** No documentation provided. */
get_bounds(): Rect2;

/** No documentation provided. */
get_closest_point(): Vector2;

/** No documentation provided. */
get_intersections(): PackedVector2Array;

/** No documentation provided. */
get_point_penalty(): float;

/** No documentation provided. */
is_point_inside(): boolean;

/** No documentation provided. */
set_point_penalty(): void;

/** No documentation provided. */
setup(): void;

  connect<T extends SignalsOf<PolygonPathFinder>>(signal: T, method: SignalFunction<PolygonPathFinder[T]>): number;






}

