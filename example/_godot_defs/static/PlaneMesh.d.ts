
/**
 * Class representing a planar [PrimitiveMesh]. This flat mesh does not have a thickness. By default, this mesh is aligned on the X and Z axes; this default rotation isn't suited for use with billboarded materials. For billboarded materials, change [member orientation] to [constant FACE_Z].
 *
 * **Note:** When using a large textured [PlaneMesh] (e.g. as a floor), you may stumble upon UV jittering issues depending on the camera angle. To solve this, increase [member subdivide_depth] and [member subdivide_width] until you no longer notice UV jittering.
 *
*/
declare class PlaneMesh extends PrimitiveMesh  {

  
/**
 * Class representing a planar [PrimitiveMesh]. This flat mesh does not have a thickness. By default, this mesh is aligned on the X and Z axes; this default rotation isn't suited for use with billboarded materials. For billboarded materials, change [member orientation] to [constant FACE_Z].
 *
 * **Note:** When using a large textured [PlaneMesh] (e.g. as a floor), you may stumble upon UV jittering issues depending on the camera angle. To solve this, increase [member subdivide_depth] and [member subdivide_width] until you no longer notice UV jittering.
 *
*/
  new(): PlaneMesh; 
  static "new"(): PlaneMesh 


/** Offset of the generated plane. Useful for particles. */
center_offset: Vector3;

/** Direction that the [PlaneMesh] is facing. See [enum Orientation] for options. */
orientation: int;

/** Size of the generated plane. */
size: Vector2;

/** Number of subdivision along the Z axis. */
subdivide_depth: int;

/** Number of subdivision along the X axis. */
subdivide_width: int;



  connect<T extends SignalsOf<PlaneMesh>>(signal: T, method: SignalFunction<PlaneMesh[T]>): number;



/**
 * [PlaneMesh] will face the positive X-axis.
 *
*/
static FACE_X: any;

/**
 * [PlaneMesh] will face the positive Y-axis. This matches the behavior of the [PlaneMesh] in Godot 3.x.
 *
*/
static FACE_Y: any;

/**
 * [PlaneMesh] will face the positive Z-axis. This matches the behavior of the QuadMesh in Godot 3.x.
 *
*/
static FACE_Z: any;



}

