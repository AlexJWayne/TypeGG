
/**
 * Controls how blending between source and destination fragments is performed when using [RenderingDevice].
 *
 * For reference, this is how common user-facing blend modes are implemented in Godot's 2D renderer:
 *
 * **Mix:**
 *
 * @example 
 * 
 * var attachment = RDPipelineColorBlendStateAttachment.new()
 * attachment.enable_blend = true
 * attachment.color_blend_op = RenderingDevice.BLEND_OP_ADD
 * attachment.src_color_blend_factor = RenderingDevice.BLEND_FACTOR_SRC_ALPHA
 * attachment.dst_color_blend_factor = RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA
 * attachment.alpha_blend_op = RenderingDevice.BLEND_OP_ADD
 * attachment.src_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_ONE
 * attachment.dst_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA
 * @summary 
 * 
 *
 * **Add:**
 *
 * @example 
 * 
 * var attachment = RDPipelineColorBlendStateAttachment.new()
 * attachment.enable_blend = true
 * attachment.alpha_blend_op = RenderingDevice.BLEND_OP_ADD
 * attachment.color_blend_op = RenderingDevice.BLEND_OP_ADD
 * attachment.src_color_blend_factor = RenderingDevice.BLEND_FACTOR_SRC_ALPHA
 * attachment.dst_color_blend_factor = RenderingDevice.BLEND_FACTOR_ONE
 * attachment.src_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_SRC_ALPHA
 * attachment.dst_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_ONE
 * @summary 
 * 
 *
 * **Subtract:**
 *
 * @example 
 * 
 * var attachment = RDPipelineColorBlendStateAttachment.new()
 * attachment.enable_blend = true
 * attachment.alpha_blend_op = RenderingDevice.BLEND_OP_REVERSE_SUBTRACT
 * attachment.color_blend_op = RenderingDevice.BLEND_OP_REVERSE_SUBTRACT
 * attachment.src_color_blend_factor = RenderingDevice.BLEND_FACTOR_SRC_ALPHA
 * attachment.dst_color_blend_factor = RenderingDevice.BLEND_FACTOR_ONE
 * attachment.src_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_SRC_ALPHA
 * attachment.dst_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_ONE
 * @summary 
 * 
 *
 * **Multiply:**
 *
 * @example 
 * 
 * var attachment = RDPipelineColorBlendStateAttachment.new()
 * attachment.enable_blend = true
 * attachment.alpha_blend_op = RenderingDevice.BLEND_OP_ADD
 * attachment.color_blend_op = RenderingDevice.BLEND_OP_ADD
 * attachment.src_color_blend_factor = RenderingDevice.BLEND_FACTOR_DST_COLOR
 * attachment.dst_color_blend_factor = RenderingDevice.BLEND_FACTOR_ZERO
 * attachment.src_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_DST_ALPHA
 * attachment.dst_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_ZERO
 * @summary 
 * 
 *
 * **Pre-multiplied alpha:**
 *
 * @example 
 * 
 * var attachment = RDPipelineColorBlendStateAttachment.new()
 * attachment.enable_blend = true
 * attachment.alpha_blend_op = RenderingDevice.BLEND_OP_ADD
 * attachment.color_blend_op = RenderingDevice.BLEND_OP_ADD
 * attachment.src_color_blend_factor = RenderingDevice.BLEND_FACTOR_ONE
 * attachment.dst_color_blend_factor = RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA
 * attachment.src_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_ONE
 * attachment.dst_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA
 * @summary 
 * 
 *
*/
declare class RDPipelineColorBlendStateAttachment extends RefCounted  {

  
/**
 * Controls how blending between source and destination fragments is performed when using [RenderingDevice].
 *
 * For reference, this is how common user-facing blend modes are implemented in Godot's 2D renderer:
 *
 * **Mix:**
 *
 * @example 
 * 
 * var attachment = RDPipelineColorBlendStateAttachment.new()
 * attachment.enable_blend = true
 * attachment.color_blend_op = RenderingDevice.BLEND_OP_ADD
 * attachment.src_color_blend_factor = RenderingDevice.BLEND_FACTOR_SRC_ALPHA
 * attachment.dst_color_blend_factor = RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA
 * attachment.alpha_blend_op = RenderingDevice.BLEND_OP_ADD
 * attachment.src_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_ONE
 * attachment.dst_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA
 * @summary 
 * 
 *
 * **Add:**
 *
 * @example 
 * 
 * var attachment = RDPipelineColorBlendStateAttachment.new()
 * attachment.enable_blend = true
 * attachment.alpha_blend_op = RenderingDevice.BLEND_OP_ADD
 * attachment.color_blend_op = RenderingDevice.BLEND_OP_ADD
 * attachment.src_color_blend_factor = RenderingDevice.BLEND_FACTOR_SRC_ALPHA
 * attachment.dst_color_blend_factor = RenderingDevice.BLEND_FACTOR_ONE
 * attachment.src_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_SRC_ALPHA
 * attachment.dst_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_ONE
 * @summary 
 * 
 *
 * **Subtract:**
 *
 * @example 
 * 
 * var attachment = RDPipelineColorBlendStateAttachment.new()
 * attachment.enable_blend = true
 * attachment.alpha_blend_op = RenderingDevice.BLEND_OP_REVERSE_SUBTRACT
 * attachment.color_blend_op = RenderingDevice.BLEND_OP_REVERSE_SUBTRACT
 * attachment.src_color_blend_factor = RenderingDevice.BLEND_FACTOR_SRC_ALPHA
 * attachment.dst_color_blend_factor = RenderingDevice.BLEND_FACTOR_ONE
 * attachment.src_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_SRC_ALPHA
 * attachment.dst_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_ONE
 * @summary 
 * 
 *
 * **Multiply:**
 *
 * @example 
 * 
 * var attachment = RDPipelineColorBlendStateAttachment.new()
 * attachment.enable_blend = true
 * attachment.alpha_blend_op = RenderingDevice.BLEND_OP_ADD
 * attachment.color_blend_op = RenderingDevice.BLEND_OP_ADD
 * attachment.src_color_blend_factor = RenderingDevice.BLEND_FACTOR_DST_COLOR
 * attachment.dst_color_blend_factor = RenderingDevice.BLEND_FACTOR_ZERO
 * attachment.src_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_DST_ALPHA
 * attachment.dst_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_ZERO
 * @summary 
 * 
 *
 * **Pre-multiplied alpha:**
 *
 * @example 
 * 
 * var attachment = RDPipelineColorBlendStateAttachment.new()
 * attachment.enable_blend = true
 * attachment.alpha_blend_op = RenderingDevice.BLEND_OP_ADD
 * attachment.color_blend_op = RenderingDevice.BLEND_OP_ADD
 * attachment.src_color_blend_factor = RenderingDevice.BLEND_FACTOR_ONE
 * attachment.dst_color_blend_factor = RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA
 * attachment.src_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_ONE
 * attachment.dst_alpha_blend_factor = RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA
 * @summary 
 * 
 *
*/
  new(): RDPipelineColorBlendStateAttachment; 
  static "new"(): RDPipelineColorBlendStateAttachment 


/** The blend mode to use for the alpha channel. */
alpha_blend_op: int;

/** The blend mode to use for the red/green/blue color channels. */
color_blend_op: int;

/** Controls how the blend factor for the alpha channel is determined based on the destination's fragments. */
dst_alpha_blend_factor: int;

/** Controls how the blend factor for the color channels is determined based on the destination's fragments. */
dst_color_blend_factor: int;

/** If [code]true[/code], performs blending between the source and destination according to the factors defined in [member src_color_blend_factor], [member dst_color_blend_factor], [member src_alpha_blend_factor] and [member dst_alpha_blend_factor]. The blend modes [member color_blend_op] and [member alpha_blend_op] are also taken into account, with [member write_r], [member write_g], [member write_b] and [member write_a] controlling the output. */
enable_blend: boolean;

/** Controls how the blend factor for the alpha channel is determined based on the source's fragments. */
src_alpha_blend_factor: int;

/** Controls how the blend factor for the color channels is determined based on the source's fragments. */
src_color_blend_factor: int;

/** If [code]true[/code], writes the new alpha channel to the final result. */
write_a: boolean;

/** If [code]true[/code], writes the new blue color channel to the final result. */
write_b: boolean;

/** If [code]true[/code], writes the new green color channel to the final result. */
write_g: boolean;

/** If [code]true[/code], writes the new red color channel to the final result. */
write_r: boolean;

/** Convenience method to perform standard mix blending with straight (non-premultiplied) alpha. This sets [member enable_blend] to [code]true[/code], [member src_color_blend_factor] to [constant RenderingDevice.BLEND_FACTOR_SRC_ALPHA], [member dst_color_blend_factor] to [constant RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA], [member src_alpha_blend_factor] to [constant RenderingDevice.BLEND_FACTOR_SRC_ALPHA] and [member dst_alpha_blend_factor] to [constant RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA]. */
set_as_mix(): void;

  connect<T extends SignalsOf<RDPipelineColorBlendStateAttachment>>(signal: T, method: SignalFunction<RDPipelineColorBlendStateAttachment[T]>): number;






}

