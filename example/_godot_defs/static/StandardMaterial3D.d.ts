
/**
 * [StandardMaterial3D]'s properties are inherited from [BaseMaterial3D]. [StandardMaterial3D] uses separate textures for ambient occlusion, roughness and metallic maps. To use a single ORM map for all 3 textures, use an [ORMMaterial3D] instead.
 *
*/
declare class StandardMaterial3D extends BaseMaterial3D  {

  
/**
 * [StandardMaterial3D]'s properties are inherited from [BaseMaterial3D]. [StandardMaterial3D] uses separate textures for ambient occlusion, roughness and metallic maps. To use a single ORM map for all 3 textures, use an [ORMMaterial3D] instead.
 *
*/
  new(): StandardMaterial3D; 
  static "new"(): StandardMaterial3D 





  connect<T extends SignalsOf<StandardMaterial3D>>(signal: T, method: SignalFunction<StandardMaterial3D[T]>): number;






}

