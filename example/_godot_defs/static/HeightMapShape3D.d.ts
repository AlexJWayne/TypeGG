
/**
 * A 3D heightmap shape, intended for use in physics. Usually used to provide a shape for a [CollisionShape3D]. This is useful for terrain, but it is limited as overhangs (such as caves) cannot be stored. Holes in a [HeightMapShape3D] are created by assigning very low values to points in the desired area.
 *
 * **Performance:** [HeightMapShape3D] is faster to check collisions against than [ConcavePolygonShape3D], but it is significantly slower than primitive shapes like [BoxShape3D].
 *
*/
declare class HeightMapShape3D extends Shape3D  {

  
/**
 * A 3D heightmap shape, intended for use in physics. Usually used to provide a shape for a [CollisionShape3D]. This is useful for terrain, but it is limited as overhangs (such as caves) cannot be stored. Holes in a [HeightMapShape3D] are created by assigning very low values to points in the desired area.
 *
 * **Performance:** [HeightMapShape3D] is faster to check collisions against than [ConcavePolygonShape3D], but it is significantly slower than primitive shapes like [BoxShape3D].
 *
*/
  new(): HeightMapShape3D; 
  static "new"(): HeightMapShape3D 


/** Height map data, pool array must be of [member map_width] * [member map_depth] size. */
map_data: PackedFloat32Array;

/** Number of vertices in the depth of the height map. Changing this will resize the [member map_data]. */
map_depth: int;

/** Number of vertices in the width of the height map. Changing this will resize the [member map_data]. */
map_width: int;



  connect<T extends SignalsOf<HeightMapShape3D>>(signal: T, method: SignalFunction<HeightMapShape3D[T]>): number;






}

