
/**
 * [TubeTrailMesh] represents a straight tube-shaped mesh with variable width. The tube is composed of a number of cylindrical sections, each with the same [member section_length] and number of [member section_rings]. A [member curve] is sampled along the total length of the tube, meaning that the curve determines the radius of the tube along its length.
 *
 * This primitive mesh is usually used for particle trails.
 *
*/
declare class TubeTrailMesh extends PrimitiveMesh  {

  
/**
 * [TubeTrailMesh] represents a straight tube-shaped mesh with variable width. The tube is composed of a number of cylindrical sections, each with the same [member section_length] and number of [member section_rings]. A [member curve] is sampled along the total length of the tube, meaning that the curve determines the radius of the tube along its length.
 *
 * This primitive mesh is usually used for particle trails.
 *
*/
  new(): TubeTrailMesh; 
  static "new"(): TubeTrailMesh 


/** If [code]true[/code], generates a cap at the bottom of the tube. This can be set to [code]false[/code] to speed up generation and rendering when the cap is never seen by the camera. */
cap_bottom: boolean;

/** If [code]true[/code], generates a cap at the top of the tube. This can be set to [code]false[/code] to speed up generation and rendering when the cap is never seen by the camera. */
cap_top: boolean;

/** Determines the radius of the tube along its length. The radius of a particular section ring is obtained by multiplying the baseline [member radius] by the value of this curve at the given distance. For values smaller than [code]0[/code], the faces will be inverted. */
curve: Curve;

/** The number of sides on the tube. For example, a value of [code]5[/code] means the tube will be pentagonal. Higher values result in a more detailed tube at the cost of performance. */
radial_steps: int;

/** The baseline radius of the tube. The radius of a particular section ring is obtained by multiplying this radius by the value of the [member curve] at the given distance. */
radius: float;

/** The length of a section of the tube. */
section_length: float;

/** The number of rings in a section. The [member curve] is sampled on each ring to determine its radius. Higher values result in a more detailed tube at the cost of performance. */
section_rings: int;

/** The total number of sections on the tube. */
sections: int;



  connect<T extends SignalsOf<TubeTrailMesh>>(signal: T, method: SignalFunction<TubeTrailMesh[T]>): number;






}

