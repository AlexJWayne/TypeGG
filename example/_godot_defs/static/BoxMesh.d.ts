
/**
 * Generate an axis-aligned box [PrimitiveMesh].
 *
 * The box's UV layout is arranged in a 3×2 layout that allows texturing each face individually. To apply the same texture on all faces, change the material's UV property to `Vector3(3, 2, 1)`. This is equivalent to adding `UV *= vec2(3.0, 2.0)` in a vertex shader.
 *
 * **Note:** When using a large textured [BoxMesh] (e.g. as a floor), you may stumble upon UV jittering issues depending on the camera angle. To solve this, increase [member subdivide_depth], [member subdivide_height] and [member subdivide_width] until you no longer notice UV jittering.
 *
*/
declare class BoxMesh extends PrimitiveMesh  {

  
/**
 * Generate an axis-aligned box [PrimitiveMesh].
 *
 * The box's UV layout is arranged in a 3×2 layout that allows texturing each face individually. To apply the same texture on all faces, change the material's UV property to `Vector3(3, 2, 1)`. This is equivalent to adding `UV *= vec2(3.0, 2.0)` in a vertex shader.
 *
 * **Note:** When using a large textured [BoxMesh] (e.g. as a floor), you may stumble upon UV jittering issues depending on the camera angle. To solve this, increase [member subdivide_depth], [member subdivide_height] and [member subdivide_width] until you no longer notice UV jittering.
 *
*/
  new(): BoxMesh; 
  static "new"(): BoxMesh 


/** The box's width, height and depth. */
size: Vector3;

/** Number of extra edge loops inserted along the Z axis. */
subdivide_depth: int;

/** Number of extra edge loops inserted along the Y axis. */
subdivide_height: int;

/** Number of extra edge loops inserted along the X axis. */
subdivide_width: int;



  connect<T extends SignalsOf<BoxMesh>>(signal: T, method: SignalFunction<BoxMesh[T]>): number;






}

