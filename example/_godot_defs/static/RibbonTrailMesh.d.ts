
/**
 * [RibbonTrailMesh] represents a straight ribbon-shaped mesh with variable width. The ribbon is composed of a number of flat or cross-shaped sections, each with the same [member section_length] and number of [member section_segments]. A [member curve] is sampled along the total length of the ribbon, meaning that the curve determines the size of the ribbon along its length.
 *
 * This primitive mesh is usually used for particle trails.
 *
*/
declare class RibbonTrailMesh extends PrimitiveMesh  {

  
/**
 * [RibbonTrailMesh] represents a straight ribbon-shaped mesh with variable width. The ribbon is composed of a number of flat or cross-shaped sections, each with the same [member section_length] and number of [member section_segments]. A [member curve] is sampled along the total length of the ribbon, meaning that the curve determines the size of the ribbon along its length.
 *
 * This primitive mesh is usually used for particle trails.
 *
*/
  new(): RibbonTrailMesh; 
  static "new"(): RibbonTrailMesh 


/** Determines the size of the ribbon along its length. The size of a particular section segment is obtained by multiplying the baseline [member size] by the value of this curve at the given distance. For values smaller than [code]0[/code], the faces will be inverted. */
curve: Curve;

/** The length of a section of the ribbon. */
section_length: float;

/** The number of segments in a section. The [member curve] is sampled on each segment to determine its size. Higher values result in a more detailed ribbon at the cost of performance. */
section_segments: int;

/** The total number of sections on the ribbon. */
sections: int;

/** Determines the shape of the ribbon. */
shape: int;

/** The baseline size of the ribbon. The size of a particular section segment is obtained by multiplying this size by the value of the [member curve] at the given distance. */
size: float;



  connect<T extends SignalsOf<RibbonTrailMesh>>(signal: T, method: SignalFunction<RibbonTrailMesh[T]>): number;



/**
 * Gives the mesh a single flat face.
 *
*/
static SHAPE_FLAT: any;

/**
 * Gives the mesh two perpendicular flat faces, making a cross shape.
 *
*/
static SHAPE_CROSS: any;



}

