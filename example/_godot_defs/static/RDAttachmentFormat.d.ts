
/**
 * This object is used by [RenderingDevice].
 *
*/
declare class RDAttachmentFormat extends RefCounted  {

  
/**
 * This object is used by [RenderingDevice].
 *
*/
  new(): RDAttachmentFormat; 
  static "new"(): RDAttachmentFormat 


/** The attachment's data format. */
format: int;

/** The number of samples used when sampling the attachment. */
samples: int;

/** The attachment's usage flags, which determine what can be done with it. */
usage_flags: int;



  connect<T extends SignalsOf<RDAttachmentFormat>>(signal: T, method: SignalFunction<RDAttachmentFormat[T]>): number;






}

