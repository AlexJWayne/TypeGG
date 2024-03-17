
/**
 * A resizable rectangular area with changeable [member title] and [member description] used for better organizing of other visual shader nodes.
 *
*/
declare class VisualShaderNodeComment extends VisualShaderNodeResizableBase  {

  
/**
 * A resizable rectangular area with changeable [member title] and [member description] used for better organizing of other visual shader nodes.
 *
*/
  new(): VisualShaderNodeComment; 
  static "new"(): VisualShaderNodeComment 


/** An additional description which placed below the title. */
description: string;

/** A title of the node. */
title: string;



  connect<T extends SignalsOf<VisualShaderNodeComment>>(signal: T, method: SignalFunction<VisualShaderNodeComment[T]>): number;






}

