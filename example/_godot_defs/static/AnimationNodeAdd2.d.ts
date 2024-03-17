
/**
 * A resource to add to an [AnimationNodeBlendTree]. Blends two animations additively based on the amount value.
 *
 * If the amount is greater than `1.0`, the animation connected to "in" port is blended with the amplified animation connected to "add" port.
 *
 * If the amount is less than `0.0`, the animation connected to "in" port is blended with the inverted animation connected to "add" port.
 *
*/
declare class AnimationNodeAdd2 extends AnimationNodeSync  {

  
/**
 * A resource to add to an [AnimationNodeBlendTree]. Blends two animations additively based on the amount value.
 *
 * If the amount is greater than `1.0`, the animation connected to "in" port is blended with the amplified animation connected to "add" port.
 *
 * If the amount is less than `0.0`, the animation connected to "in" port is blended with the inverted animation connected to "add" port.
 *
*/
  new(): AnimationNodeAdd2; 
  static "new"(): AnimationNodeAdd2 





  connect<T extends SignalsOf<AnimationNodeAdd2>>(signal: T, method: SignalFunction<AnimationNodeAdd2[T]>): number;






}

