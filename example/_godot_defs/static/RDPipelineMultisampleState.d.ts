
/**
 * [RDPipelineMultisampleState] is used to control how multisample or supersample antialiasing is being performed when rendering using [RenderingDevice].
 *
*/
declare class RDPipelineMultisampleState extends RefCounted  {

  
/**
 * [RDPipelineMultisampleState] is used to control how multisample or supersample antialiasing is being performed when rendering using [RenderingDevice].
 *
*/
  new(): RDPipelineMultisampleState; 
  static "new"(): RDPipelineMultisampleState 


/** If [code]true[/code], alpha to coverage is enabled. This generates a temporary coverage value based on the alpha component of the fragment's first color output. This allows alpha transparency to make use of multisample antialiasing. */
enable_alpha_to_coverage: boolean;

/** If [code]true[/code], alpha is forced to either [code]0.0[/code] or [code]1.0[/code]. This allows hardening the edges of antialiased alpha transparencies. Only relevant if [member enable_alpha_to_coverage] is [code]true[/code]. */
enable_alpha_to_one: boolean;

/** If [code]true[/code], enables per-sample shading which replaces MSAA by SSAA. This provides higher quality antialiasing that works with transparent (alpha scissor) edges. This has a very high performance cost. See also [member min_sample_shading]. See the [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#primsrast-sampleshading]per-sample shading Vulkan documentation[/url] for more details. */
enable_sample_shading: boolean;

/** The multiplier of [member sample_count] that determines how many samples are performed for each fragment. Must be between [code]0.0[/code] and [code]1.0[/code] (inclusive). Only effective if [member enable_sample_shading] is [code]true[/code]. If [member min_sample_shading] is [code]1.0[/code], fragment invocation must only read from the coverage index sample. Tile image access must not be used if [member enable_sample_shading] is [i]not[/i] [code]1.0[/code]. */
min_sample_shading: float;

/** The number of MSAA samples (or SSAA samples if [member enable_sample_shading] is [code]true[/code]) to perform. Higher values result in better antialiasing, at the cost of performance. */
sample_count: int;

/** The sample mask array. See the [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#fragops-samplemask]sample mask Vulkan documentation[/url] for more details. */
sample_masks: int[];



  connect<T extends SignalsOf<RDPipelineMultisampleState>>(signal: T, method: SignalFunction<RDPipelineMultisampleState[T]>): number;






}

