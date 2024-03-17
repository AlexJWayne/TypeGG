
/**
 * ORMMaterial3D's properties are inherited from [BaseMaterial3D]. Unlike [StandardMaterial3D], ORMMaterial3D uses a single texture for ambient occlusion, roughness and metallic maps, known as an ORM texture.
 *
*/
declare class ORMMaterial3D extends BaseMaterial3D  {

  
/**
 * ORMMaterial3D's properties are inherited from [BaseMaterial3D]. Unlike [StandardMaterial3D], ORMMaterial3D uses a single texture for ambient occlusion, roughness and metallic maps, known as an ORM texture.
 *
*/
  new(): ORMMaterial3D; 
  static "new"(): ORMMaterial3D 





  connect<T extends SignalsOf<ORMMaterial3D>>(signal: T, method: SignalFunction<ORMMaterial3D[T]>): number;






}

