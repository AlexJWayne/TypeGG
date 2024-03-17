
/**
 * Class representing a cylindrical [PrimitiveMesh]. This class can be used to create cones by setting either the [member top_radius] or [member bottom_radius] properties to `0.0`.
 *
*/
declare class CylinderMesh extends PrimitiveMesh  {

  
/**
 * Class representing a cylindrical [PrimitiveMesh]. This class can be used to create cones by setting either the [member top_radius] or [member bottom_radius] properties to `0.0`.
 *
*/
  new(): CylinderMesh; 
  static "new"(): CylinderMesh 


/** Bottom radius of the cylinder. If set to [code]0.0[/code], the bottom faces will not be generated, resulting in a conic shape. See also [member cap_bottom]. */
bottom_radius: float;

/**
 * If `true`, generates a cap at the bottom of the cylinder. This can be set to `false` to speed up generation and rendering when the cap is never seen by the camera. See also [member bottom_radius].
 *
 * **Note:** If [member bottom_radius] is `0.0`, cap generation is always skipped even if [member cap_bottom] is `true`.
 *
*/
cap_bottom: boolean;

/**
 * If `true`, generates a cap at the top of the cylinder. This can be set to `false` to speed up generation and rendering when the cap is never seen by the camera. See also [member top_radius].
 *
 * **Note:** If [member top_radius] is `0.0`, cap generation is always skipped even if [member cap_top] is `true`.
 *
*/
cap_top: boolean;

/** Full height of the cylinder. */
height: float;

/** Number of radial segments on the cylinder. Higher values result in a more detailed cylinder/cone at the cost of performance. */
radial_segments: int;

/** Number of edge rings along the height of the cylinder. Changing [member rings] does not have any visual impact unless a shader or procedural mesh tool is used to alter the vertex data. Higher values result in more subdivisions, which can be used to create smoother-looking effects with shaders or procedural mesh tools (at the cost of performance). When not altering the vertex data using a shader or procedural mesh tool, [member rings] should be kept to its default value. */
rings: int;

/** Top radius of the cylinder. If set to [code]0.0[/code], the top faces will not be generated, resulting in a conic shape. See also [member cap_top]. */
top_radius: float;



  connect<T extends SignalsOf<CylinderMesh>>(signal: T, method: SignalFunction<CylinderMesh[T]>): number;






}

