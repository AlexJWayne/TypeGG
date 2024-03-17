
/**
 * Occludes light cast by a Light2D, casting shadows. The LightOccluder2D must be provided with an [OccluderPolygon2D] in order for the shadow to be computed.
 *
*/
declare class LightOccluder2D extends Node2D  {

  
/**
 * Occludes light cast by a Light2D, casting shadows. The LightOccluder2D must be provided with an [OccluderPolygon2D] in order for the shadow to be computed.
 *
*/
  new(): LightOccluder2D; 
  static "new"(): LightOccluder2D 


/** The [OccluderPolygon2D] used to compute the shadow. */
occluder: OccluderPolygon2D;

/** The LightOccluder2D's occluder light mask. The LightOccluder2D will cast shadows only from Light2D(s) that have the same light mask(s). */
occluder_light_mask: int;

/** If enabled, the occluder will be part of a real-time generated signed distance field that can be used in custom shaders. */
sdf_collision: boolean;



  connect<T extends SignalsOf<LightOccluder2D>>(signal: T, method: SignalFunction<LightOccluder2D[T]>): number;






}

