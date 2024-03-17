
/**
 * **Root motion** refers to an animation technique where a mesh's skeleton is used to give impulse to a character. When working with 3D animations, a popular technique is for animators to use the root skeleton bone to give motion to the rest of the skeleton. This allows animating characters in a way where steps actually match the floor below. It also allows precise interaction with objects during cinematics. See also [AnimationMixer].
 *
 * **Note:** [RootMotionView] is only visible in the editor. It will be hidden automatically in the running project.
 *
*/
declare class RootMotionView extends VisualInstance3D  {

  
/**
 * **Root motion** refers to an animation technique where a mesh's skeleton is used to give impulse to a character. When working with 3D animations, a popular technique is for animators to use the root skeleton bone to give motion to the rest of the skeleton. This allows animating characters in a way where steps actually match the floor below. It also allows precise interaction with objects during cinematics. See also [AnimationMixer].
 *
 * **Note:** [RootMotionView] is only visible in the editor. It will be hidden automatically in the running project.
 *
*/
  new(): RootMotionView; 
  static "new"(): RootMotionView 


/** Path to an [AnimationMixer] node to use as a basis for root motion. */
animation_path: NodePathType;

/** The grid's cell size in 3D units. */
cell_size: float;

/** The grid's color. */
color: Color;

/** The grid's radius in 3D units. The grid's opacity will fade gradually as the distance from the origin increases until this [member radius] is reached. */
radius: float;

/** If [code]true[/code], the grid's points will all be on the same Y coordinate ([i]local[/i] Y = 0). If [code]false[/code], the points' original Y coordinate is preserved. */
zero_y: boolean;



  connect<T extends SignalsOf<RootMotionView>>(signal: T, method: SignalFunction<RootMotionView[T]>): number;






}

