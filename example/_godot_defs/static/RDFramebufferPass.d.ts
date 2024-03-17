
/**
 * This class contains the list of attachment descriptions for a framebuffer pass. Each points with an index to a previously supplied list of texture attachments.
 *
 * Multipass framebuffers can optimize some configurations in mobile. On desktop, they provide little to no advantage.
 *
 * This object is used by [RenderingDevice].
 *
*/
declare class RDFramebufferPass extends RefCounted  {

  
/**
 * This class contains the list of attachment descriptions for a framebuffer pass. Each points with an index to a previously supplied list of texture attachments.
 *
 * Multipass framebuffers can optimize some configurations in mobile. On desktop, they provide little to no advantage.
 *
 * This object is used by [RenderingDevice].
 *
*/
  new(): RDFramebufferPass; 
  static "new"(): RDFramebufferPass 


/** Color attachments in order starting from 0. If this attachment is not used by the shader, pass ATTACHMENT_UNUSED to skip. */
color_attachments: PackedInt32Array;

/** Depth attachment. ATTACHMENT_UNUSED should be used if no depth buffer is required for this pass. */
depth_attachment: int;

/** Used for multipass framebuffers (more than one render pass). Converts an attachment to an input. Make sure to also supply it properly in the [RDUniform] for the uniform set. */
input_attachments: PackedInt32Array;

/** Attachments to preserve in this pass (otherwise they are erased). */
preserve_attachments: PackedInt32Array;

/** If the color attachments are multisampled, non-multisampled resolve attachments can be provided. */
resolve_attachments: PackedInt32Array;



  connect<T extends SignalsOf<RDFramebufferPass>>(signal: T, method: SignalFunction<RDFramebufferPass[T]>): number;



/**
 * Attachment is unused.
 *
*/
static ATTACHMENT_UNUSED: any;



}

