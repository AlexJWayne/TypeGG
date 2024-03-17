
/**
 * [RenderingDevice] is an abstraction for working with modern low-level graphics APIs such as Vulkan. Compared to [RenderingServer] (which works with Godot's own rendering subsystems), [RenderingDevice] is much lower-level and allows working more directly with the underlying graphics APIs. [RenderingDevice] is used in Godot to provide support for several modern low-level graphics APIs while reducing the amount of code duplication required. [RenderingDevice] can also be used in your own projects to perform things that are not exposed by [RenderingServer] or high-level nodes, such as using compute shaders.
 *
 * On startup, Godot creates a global [RenderingDevice] which can be retrieved using [method RenderingServer.get_rendering_device]. This global [RenderingDevice] performs drawing to the screen.
 *
 * **Local RenderingDevices:** Using [method RenderingServer.create_local_rendering_device], you can create "secondary" rendering devices to perform drawing and GPU compute operations on separate threads.
 *
 * **Note:** [RenderingDevice] assumes intermediate knowledge of modern graphics APIs such as Vulkan, Direct3D 12, Metal or WebGPU. These graphics APIs are lower-level than OpenGL or Direct3D 11, requiring you to perform what was previously done by the graphics driver itself. If you have difficulty understanding the concepts used in this class, follow the [url=https://vulkan-tutorial.com/]Vulkan Tutorial[/url] or [url=https://vkguide.dev/]Vulkan Guide[/url]. It's recommended to have existing modern OpenGL or Direct3D 11 knowledge before attempting to learn a low-level graphics API.
 *
 * **Note:** [RenderingDevice] is not available when running in headless mode or when using the Compatibility rendering method.
 *
*/
declare class RenderingDevice extends Object  {

  
/**
 * [RenderingDevice] is an abstraction for working with modern low-level graphics APIs such as Vulkan. Compared to [RenderingServer] (which works with Godot's own rendering subsystems), [RenderingDevice] is much lower-level and allows working more directly with the underlying graphics APIs. [RenderingDevice] is used in Godot to provide support for several modern low-level graphics APIs while reducing the amount of code duplication required. [RenderingDevice] can also be used in your own projects to perform things that are not exposed by [RenderingServer] or high-level nodes, such as using compute shaders.
 *
 * On startup, Godot creates a global [RenderingDevice] which can be retrieved using [method RenderingServer.get_rendering_device]. This global [RenderingDevice] performs drawing to the screen.
 *
 * **Local RenderingDevices:** Using [method RenderingServer.create_local_rendering_device], you can create "secondary" rendering devices to perform drawing and GPU compute operations on separate threads.
 *
 * **Note:** [RenderingDevice] assumes intermediate knowledge of modern graphics APIs such as Vulkan, Direct3D 12, Metal or WebGPU. These graphics APIs are lower-level than OpenGL or Direct3D 11, requiring you to perform what was previously done by the graphics driver itself. If you have difficulty understanding the concepts used in this class, follow the [url=https://vulkan-tutorial.com/]Vulkan Tutorial[/url] or [url=https://vkguide.dev/]Vulkan Guide[/url]. It's recommended to have existing modern OpenGL or Direct3D 11 knowledge before attempting to learn a low-level graphics API.
 *
 * **Note:** [RenderingDevice] is not available when running in headless mode or when using the Compatibility rendering method.
 *
*/
  new(): RenderingDevice; 
  static "new"(): RenderingDevice 



/** Puts a memory barrier in place. This is used for synchronization to avoid data races. See also [method full_barrier], which may be useful for debugging. */
barrier(): void;

/**
 * Clears the contents of the [param buffer], clearing [param size_bytes] bytes, starting at [param offset]. Always raises a memory barrier.
 *
 * Prints an error if:
 *
 * - the size isn't a multiple of four
 *
 * - the region specified by [param offset] + [param size_bytes] exceeds the buffer
 *
 * - a draw list is currently active (created by [method draw_list_begin])
 *
 * - a compute list is currently active (created by [method compute_list_begin])
 *
*/
buffer_clear(): int;

/** Returns a copy of the data of the specified [param buffer], optionally [param offset_bytes] and [param size_bytes] can be set to copy only a portion of the buffer. */
buffer_get_data(): PackedByteArray;

/**
 * Updates a region of [param size_bytes] bytes, starting at [param offset], in the buffer, with the specified [param data]. Raises a memory barrier except when [param post_barrier] is set to [constant BARRIER_MASK_NO_BARRIER].
 *
 * Prints an error if:
 *
 * - the region specified by [param offset] + [param size_bytes] exceeds the buffer
 *
 * - a draw list is currently active (created by [method draw_list_begin])
 *
 * - a compute list is currently active (created by [method compute_list_begin])
 *
*/
buffer_update(): int;

/** Creates a timestamp marker with the specified [param name]. This is used for performance reporting with the [method get_captured_timestamp_cpu_time], [method get_captured_timestamp_gpu_time] and [method get_captured_timestamp_name] methods. */
capture_timestamp(): void;

/** Raises a Vulkan compute barrier in the specified [param compute_list]. */
compute_list_add_barrier(): void;

/**
 * Starts a list of compute commands created with the `compute_*` methods. The returned value should be passed to other `compute_list_*` functions.
 *
 * If [param allow_draw_overlap] is `true`, you may have one draw list running at the same time as one compute list. Multiple compute lists cannot be created at the same time; you must finish the previous compute list first using [method compute_list_end].
 *
 * A simple compute operation might look like this (code is not a complete example):
 *
 * @example 
 * 
 * var rd = RenderingDevice.new()
 * var compute_list = rd.compute_list_begin()
 * rd.compute_list_bind_compute_pipeline(compute_list, compute_shader_dilate_pipeline)
 * rd.compute_list_bind_uniform_set(compute_list, compute_base_uniform_set, 0)
 * rd.compute_list_bind_uniform_set(compute_list, dilate_uniform_set, 1)
 * for i in atlas_slices:
 *     rd.compute_list_set_push_constant(compute_list, push_constant, push_constant.size())
 *     rd.compute_list_dispatch(compute_list, group_size.x, group_size.y, group_size.z)
 *     # No barrier, let them run all together.
 * rd.compute_list_end()
 * @summary 
 * 
 *
*/
compute_list_begin(): int;

/** Tells the GPU what compute pipeline to use when processing the compute list. If the shader has changed since the last time this function was called, Godot will unbind all descriptor sets and will re-bind them inside [method compute_list_dispatch]. */
compute_list_bind_compute_pipeline(): void;

/** Binds the [param uniform_set] to this [param compute_list]. Godot ensures that all textures in the uniform set have the correct Vulkan access masks. If Godot had to change access masks of textures, it will raise a Vulkan image memory barrier. */
compute_list_bind_uniform_set(): void;

/** Submits the compute list for processing on the GPU. This is the compute equivalent to [method draw_list_draw]. */
compute_list_dispatch(): void;

/** Finishes a list of compute commands created with the [code]compute_*[/code] methods. */
compute_list_end(): void;

/** Sets the push constant data to [param buffer] for the specified [param compute_list]. The shader determines how this binary data is used. The buffer's size in bytes must also be specified in [param size_bytes] (this can be obtained by calling the [method PackedByteArray.size] method on the passed [param buffer]). */
compute_list_set_push_constant(): void;

/**
 * Creates a new compute pipeline. It can be accessed with the RID that is returned.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.
 *
*/
compute_pipeline_create(): RID;

/** Returns [code]true[/code] if the compute pipeline specified by the [param compute_pipeline] RID is valid, [code]false[/code] otherwise. */
compute_pipeline_is_valid(): boolean;

/** Create a new local [RenderingDevice]. This is most useful for performing compute operations on the GPU independently from the rest of the engine. */
create_local_device(): RenderingDevice;

/**
 * Create a command buffer debug label region that can be displayed in third-party tools such as [url=https://renderdoc.org/]RenderDoc[/url]. All regions must be ended with a [method draw_command_end_label] call. When viewed from the linear series of submissions to a single queue, calls to [method draw_command_begin_label] and [method draw_command_end_label] must be matched and balanced.
 *
 * The `VK_EXT_DEBUG_UTILS_EXTENSION_NAME` Vulkan extension must be available and enabled for command buffer debug label region to work. See also [method draw_command_insert_label] and [method draw_command_end_label].
 *
*/
draw_command_begin_label(): void;

/** Ends the command buffer debug label region started by a [method draw_command_begin_label] call. */
draw_command_end_label(): void;

/** Inserts a command buffer debug label region in the current command buffer. Unlike [method draw_command_begin_label], this region should not be ended with a [method draw_command_end_label] call. */
draw_command_insert_label(): void;

/**
 * Starts a list of raster drawing commands created with the `draw_*` methods. The returned value should be passed to other `draw_list_*` functions.
 *
 * Multiple draw lists cannot be created at the same time; you must finish the previous draw list first using [method draw_list_end].
 *
 * A simple drawing operation might look like this (code is not a complete example):
 *
 * @example 
 * 
 * var rd = RenderingDevice.new()
 * var clear_colors = PackedColorArray([Color(0, 0, 0, 0), Color(0, 0, 0, 0), Color(0, 0, 0, 0)]
 * var draw_list = rd.draw_list_begin(framebuffers**, RenderingDevice.INITIAL_ACTION_CLEAR, RenderingDevice.FINAL_ACTION_READ, RenderingDevice.INITIAL_ACTION_CLEAR, RenderingDevice.FINAL_ACTION_DISCARD, clear_colors)
 * # Draw opaque.
 * rd.draw_list_bind_render_pipeline(draw_list, raster_pipeline)
 * rd.draw_list_bind_uniform_set(draw_list, raster_base_uniform, 0)
 * rd.draw_list_set_push_constant(draw_list, raster_push_constant, raster_push_constant.size())
 * rd.draw_list_draw(draw_list, false, 1, slice_triangle_count** * 3)
 * # Draw wire.
 * rd.draw_list_bind_render_pipeline(draw_list, raster_pipeline_wire)
 * rd.draw_list_bind_uniform_set(draw_list, raster_base_uniform, 0)
 * rd.draw_list_set_push_constant(draw_list, raster_push_constant, raster_push_constant.size())
 * rd.draw_list_draw(draw_list, false, 1, slice_triangle_count** * 3)
 * rd.draw_list_end()
 * @summary 
 * 
 *
*/
draw_list_begin(): int;

/**
 * High-level variant of [method draw_list_begin], with the parameters automatically being adjusted for drawing onto the window specified by the [param screen] ID.
 *
 * **Note:** Cannot be used with local RenderingDevices, as these don't have a screen. If called on a local RenderingDevice, [method draw_list_begin_for_screen] returns [constant INVALID_ID].
 *
*/
draw_list_begin_for_screen(): int;

/** Variant of [method draw_list_begin] with support for multiple splits. The [param splits] parameter determines how many splits are created. */
draw_list_begin_split(): PackedInt64Array;

/** Binds [param index_array] to the specified [param draw_list]. */
draw_list_bind_index_array(): void;

/** Binds [param render_pipeline] to the specified [param draw_list]. */
draw_list_bind_render_pipeline(): void;

/** Binds [param uniform_set] to the specified [param draw_list]. A [param set_index] must also be specified, which is an identifier starting from [code]0[/code] that must match the one expected by the draw list. */
draw_list_bind_uniform_set(): void;

/** Binds [param vertex_array] to the specified [param draw_list]. */
draw_list_bind_vertex_array(): void;

/** Removes and disables the scissor rectangle for the specified [param draw_list]. See also [method draw_list_enable_scissor]. */
draw_list_disable_scissor(): void;

/** Submits [param draw_list] for rendering on the GPU. This is the raster equivalent to [method compute_list_dispatch]. */
draw_list_draw(): void;

/**
 * Creates a scissor rectangle and enables it for the specified [param draw_list]. Scissor rectangles are used for clipping by discarding fragments that fall outside a specified rectangular portion of the screen. See also [method draw_list_disable_scissor].
 *
 * **Note:** The specified [param rect] is automatically intersected with the screen's dimensions, which means it cannot exceed the screen's dimensions.
 *
*/
draw_list_enable_scissor(): void;

/** Finishes a list of raster drawing commands created with the [code]draw_*[/code] methods. */
draw_list_end(): void;

/** Sets blend constants for the specified [param draw_list] to [param color]. Blend constants are used only if the graphics pipeline is created with [constant DYNAMIC_STATE_BLEND_CONSTANTS] flag set. */
draw_list_set_blend_constants(): void;

/** Sets the push constant data to [param buffer] for the specified [param draw_list]. The shader determines how this binary data is used. The buffer's size in bytes must also be specified in [param size_bytes] (this can be obtained by calling the [method PackedByteArray.size] method on the passed [param buffer]). */
draw_list_set_push_constant(): void;

/** Switches to the next draw pass and returns the split's ID. Equivalent to [method draw_list_switch_to_next_pass_split] with [code]splits[/code] set to [code]1[/code]. */
draw_list_switch_to_next_pass(): int;

/** Switches to the next draw pass, with the number of splits allocated specified in [param splits]. The return value is an array containing the ID of each split. For single-split usage, see [method draw_list_switch_to_next_pass]. */
draw_list_switch_to_next_pass_split(): PackedInt64Array;

/**
 * Creates a new framebuffer. It can be accessed with the RID that is returned.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.
 *
*/
framebuffer_create(): RID;

/**
 * Creates a new empty framebuffer. It can be accessed with the RID that is returned.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.
 *
*/
framebuffer_create_empty(): RID;

/**
 * Creates a new multipass framebuffer. It can be accessed with the RID that is returned.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.
 *
*/
framebuffer_create_multipass(): RID;

/**
 * Creates a new framebuffer format with the specified [param attachments] and [param view_count]. Returns the new framebuffer's unique framebuffer format ID.
 *
 * If [param view_count] is greater than or equal to `2`, enables multiview which is used for VR rendering. This requires support for the Vulkan multiview extension.
 *
*/
framebuffer_format_create(): int;

/** Creates a new empty framebuffer format with the specified number of [param samples] and returns its ID. */
framebuffer_format_create_empty(): int;

/** Creates a multipass framebuffer format with the specified [param attachments], [param passes] and [param view_count] and returns its ID. If [param view_count] is greater than or equal to [code]2[/code], enables multiview which is used for VR rendering. This requires support for the Vulkan multiview extension. */
framebuffer_format_create_multipass(): int;

/** Returns the number of texture samples used for the given framebuffer [param format] ID (returned by [method framebuffer_get_format]). */
framebuffer_format_get_texture_samples(): int;

/** Returns the format ID of the framebuffer specified by the [param framebuffer] RID. This ID is guaranteed to be unique for the same formats and does not need to be freed. */
framebuffer_get_format(): int;

/** Returns [code]true[/code] if the framebuffer specified by the [param framebuffer] RID is valid, [code]false[/code] otherwise. */
framebuffer_is_valid(): boolean;

/** Tries to free an object in the RenderingDevice. To avoid memory leaks, this should be called after using an object as memory management does not occur automatically when using RenderingDevice directly. */
free_rid(): void;

/** Puts a [i]full[/i] memory barrier in place. This is a memory [method barrier] with all flags enabled. [method full_barrier] it should only be used for debugging as it can severely impact performance. */
full_barrier(): void;

/** Returns the timestamp in CPU time for the rendering step specified by [param index] (in microseconds since the engine started). See also [method get_captured_timestamp_gpu_time] and [method capture_timestamp]. */
get_captured_timestamp_cpu_time(): int;

/** Returns the timestamp in GPU time for the rendering step specified by [param index] (in microseconds since the engine started). See also [method get_captured_timestamp_cpu_time] and [method capture_timestamp]. */
get_captured_timestamp_gpu_time(): int;

/** Returns the timestamp's name for the rendering step specified by [param index]. See also [method capture_timestamp]. */
get_captured_timestamp_name(): string;

/** Returns the total number of timestamps (rendering steps) available for profiling. */
get_captured_timestamps_count(): int;

/** Returns the index of the last frame rendered that has rendering timestamps available for querying. */
get_captured_timestamps_frame(): int;

/** Returns the name of the video adapter (e.g. "GeForce GTX 1080/PCIe/SSE2"). Equivalent to [method RenderingServer.get_video_adapter_name]. See also [method get_device_vendor_name]. */
get_device_name(): string;

/** Returns the universally unique identifier for the pipeline cache. This is used to cache shader files on disk, which avoids shader recompilations on subsequent engine runs. This UUID varies depending on the graphics card model, but also the driver version. Therefore, updating graphics drivers will invalidate the shader cache. */
get_device_pipeline_cache_uuid(): string;

/** Returns the vendor of the video adapter (e.g. "NVIDIA Corporation"). Equivalent to [method RenderingServer.get_video_adapter_vendor]. See also [method get_device_name]. */
get_device_vendor_name(): string;

/** Returns the unique identifier of the driver [param resource] for the specified [param rid]. Some driver resource types ignore the specified [param rid] (see [enum DriverResource] descriptions). [param index] is always ignored but must be specified anyway. */
get_driver_resource(): int;

/** Returns the frame count kept by the graphics API. Higher values result in higher input lag, but with more consistent throughput. For the main [RenderingDevice], frames are cycled (usually 3 with triple-buffered V-Sync enabled). However, local [RenderingDevice]s only have 1 frame. */
get_frame_delay(): int;

/** Returns the memory usage in bytes corresponding to the given [param type]. When using Vulkan, these statistics are calculated by [url=https://github.com/GPUOpen-LibrariesAndSDKs/VulkanMemoryAllocator]Vulkan Memory Allocator[/url]. */
get_memory_usage(): int;

/**
 * Creates a new index array. It can be accessed with the RID that is returned.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.
 *
*/
index_array_create(): RID;

/**
 * Creates a new index buffer. It can be accessed with the RID that is returned.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.
 *
*/
index_buffer_create(): RID;

/**
 * Returns the value of the specified [param limit]. This limit varies depending on the current graphics hardware (and sometimes the driver version). If the given limit is exceeded, rendering errors will occur.
 *
 * Limits for various graphics hardware can be found in the [url=https://vulkan.gpuinfo.org/]Vulkan Hardware Database[/url].
 *
*/
limit_get(): int;

/**
 * Creates a new render pipeline. It can be accessed with the RID that is returned.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.
 *
*/
render_pipeline_create(): RID;

/** Returns [code]true[/code] if the render pipeline specified by the [param render_pipeline] RID is valid, [code]false[/code] otherwise. */
render_pipeline_is_valid(): boolean;

/**
 * Creates a new sampler. It can be accessed with the RID that is returned.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.
 *
*/
sampler_create(): RID;

/** Returns [code]true[/code] if implementation supports using a texture of [param format] with the given [param sampler_filter]. */
sampler_is_format_supported_for_filter(): boolean;

/**
 * Returns the screen's framebuffer format.
 *
 * **Note:** Only the main [RenderingDevice] returned by [method RenderingServer.get_rendering_device] has a format. If called on a local [RenderingDevice], this method prints an error and returns [constant INVALID_ID].
 *
*/
screen_get_framebuffer_format(): int;

/**
 * Returns the window height matching the graphics API context for the given window ID (in pixels). Despite the parameter being named [param screen], this returns the **window** size. See also [method screen_get_width].
 *
 * **Note:** Only the main [RenderingDevice] returned by [method RenderingServer.get_rendering_device] has a height. If called on a local [RenderingDevice], this method prints an error and returns [constant INVALID_ID].
 *
*/
screen_get_height(): int;

/**
 * Returns the window width matching the graphics API context for the given window ID (in pixels). Despite the parameter being named [param screen], this returns the **window** size. See also [method screen_get_height].
 *
 * **Note:** Only the main [RenderingDevice] returned by [method RenderingServer.get_rendering_device] has a width. If called on a local [RenderingDevice], this method prints an error and returns [constant INVALID_ID].
 *
*/
screen_get_width(): int;

/**
 * Sets the resource name for [param id] to [param name]. This is used for debugging with third-party tools such as [url=https://renderdoc.org/]RenderDoc[/url].
 *
 * The following types of resources can be named: texture, sampler, vertex buffer, index buffer, uniform buffer, texture buffer, storage buffer, uniform set buffer, shader, render pipeline and compute pipeline. Framebuffers cannot be named. Attempting to name an incompatible resource type will print an error.
 *
 * **Note:** Resource names are only set when the engine runs in verbose mode ([method OS.is_stdout_verbose] = `true`), or when using an engine build compiled with the `dev_mode=yes` SCons option. The graphics driver must also support the `VK_EXT_DEBUG_UTILS_EXTENSION_NAME` Vulkan extension for named resources to work.
 *
*/
set_resource_name(): void;

/**
 * Compiles a binary shader from [param spirv_data] and returns the compiled binary data as a [PackedByteArray]. This compiled shader is specific to the GPU model and driver version used; it will not work on different GPU models or even different driver versions. See also [method shader_compile_spirv_from_source].
 *
 * [param name] is an optional human-readable name that can be given to the compiled shader for organizational purposes.
 *
*/
shader_compile_binary_from_spirv(): PackedByteArray;

/**
 * Compiles a SPIR-V from the shader source code in [param shader_source] and returns the SPIR-V as a [RDShaderSPIRV]. This intermediate language shader is portable across different GPU models and driver versions, but cannot be run directly by GPUs until compiled into a binary shader using [method shader_compile_binary_from_spirv].
 *
 * If [param allow_cache] is `true`, make use of the shader cache generated by Godot. This avoids a potentially lengthy shader compilation step if the shader is already in cache. If [param allow_cache] is `false`, Godot's shader cache is ignored and the shader will always be recompiled.
 *
*/
shader_compile_spirv_from_source(): RDShaderSPIRV;

/**
 * Creates a new shader instance from a binary compiled shader. It can be accessed with the RID that is returned.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method. See also [method shader_compile_binary_from_spirv] and [method shader_create_from_spirv].
 *
*/
shader_create_from_bytecode(): RID;

/**
 * Creates a new shader instance from SPIR-V intermediate code. It can be accessed with the RID that is returned.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method. See also [method shader_compile_spirv_from_source] and [method shader_create_from_bytecode].
 *
*/
shader_create_from_spirv(): RID;

/** Create a placeholder RID by allocating an RID without initializing it for use in [method shader_create_from_bytecode]. This allows you to create an RID for a shader and pass it around, but defer compiling the shader to a later time. */
shader_create_placeholder(): RID;

/** Returns the internal vertex input mask. Internally, the vertex input mask is an unsigned integer consisting of the locations (specified in GLSL via. [code]layout(location = ...)[/code]) of the input variables (specified in GLSL by the [code]in[/code] keyword). */
shader_get_vertex_input_attribute_mask(): int;

/**
 * Creates a [url=https://vkguide.dev/docs/chapter-4/storage_buffers/]storage buffer[/url] with the specified [param data] and [param usage]. It can be accessed with the RID that is returned.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.
 *
*/
storage_buffer_create(): RID;

/**
 * Pushes the frame setup and draw command buffers then marks the local device as currently processing (which allows calling [method sync]).
 *
 * **Note:** Only available in local RenderingDevices.
 *
*/
submit(): void;

/**
 * Forces a synchronization between the CPU and GPU, which may be required in certain cases. Only call this when needed, as CPU-GPU synchronization has a performance cost.
 *
 * **Note:** Only available in local RenderingDevices.
 *
 * **Note:** [method sync] can only be called after a [method submit].
 *
*/
sync(): void;

/**
 * Creates a new texture buffer. It can be accessed with the RID that is returned.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.
 *
*/
texture_buffer_create(): RID;

/**
 * Clears the specified [param texture] by replacing all of its pixels with the specified [param color]. [param base_mipmap] and [param mipmap_count] determine which mipmaps of the texture are affected by this clear operation, while [param base_layer] and [param layer_count] determine which layers of a 3D texture (or texture array) are affected by this clear operation. For 2D textures (which only have one layer by design), [param base_layer] must be `0` and [param layer_count] must be `1`.
 *
 * **Note:** [param texture] can't be cleared while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to clear this texture.
 *
*/
texture_clear(): int;

/**
 * Copies the [param from_texture] to [param to_texture] with the specified [param from_pos], [param to_pos] and [param size] coordinates. The Z axis of the [param from_pos], [param to_pos] and [param size] must be `0` for 2-dimensional textures. Source and destination mipmaps/layers must also be specified, with these parameters being `0` for textures without mipmaps or single-layer textures. Returns [constant @GlobalScope.OK] if the texture copy was successful or [constant @GlobalScope.ERR_INVALID_PARAMETER] otherwise.
 *
 * **Note:** [param from_texture] texture can't be copied while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to copy this texture.
 *
 * **Note:** [param from_texture] texture requires the [constant TEXTURE_USAGE_CAN_COPY_FROM_BIT] to be retrieved.
 *
 * **Note:** [param to_texture] can't be copied while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to copy this texture.
 *
 * **Note:** [param to_texture] requires the [constant TEXTURE_USAGE_CAN_COPY_TO_BIT] to be retrieved.
 *
 * **Note:** [param from_texture] and [param to_texture] must be of the same type (color or depth).
 *
*/
texture_copy(): int;

/**
 * Creates a new texture. It can be accessed with the RID that is returned.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.
 *
 * **Note:** Not to be confused with [method RenderingServer.texture_2d_create], which creates the Godot-specific [Texture2D] resource as opposed to the graphics API's own texture type.
 *
*/
texture_create(): RID;

/** Returns an RID for an existing [param image] ([code]VkImage[/code]) with the given [param type], [param format], [param samples], [param usage_flags], [param width], [param height], [param depth], and [param layers]. This can be used to allow Godot to render onto foreign images. */
texture_create_from_extension(): RID;

/** Creates a shared texture using the specified [param view] and the texture information from [param with_texture]. */
texture_create_shared(): RID;

/**
 * Creates a shared texture using the specified [param view] and the texture information from [param with_texture]'s [param layer] and [param mipmap]. The number of included mipmaps from the original texture can be controlled using the [param mipmaps] parameter. Only relevant for textures with multiple layers, such as 3D textures, texture arrays and cubemaps. For single-layer textures, use [method texture_create_shared]
 *
 * For 2D textures (which only have one layer), [param layer] must be `0`.
 *
 * **Note:** Layer slicing is only supported for 2D texture arrays, not 3D textures or cubemaps.
 *
*/
texture_create_shared_from_slice(): RID;

/**
 * Returns the [param texture] data for the specified [param layer] as raw binary data. For 2D textures (which only have one layer), [param layer] must be `0`.
 *
 * **Note:** [param texture] can't be retrieved while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to retrieve this texture. Otherwise, an error is printed and a empty [PackedByteArray] is returned.
 *
 * **Note:** [param texture] requires the [constant TEXTURE_USAGE_CAN_COPY_FROM_BIT] to be retrieved. Otherwise, an error is printed and a empty [PackedByteArray] is returned.
 *
*/
texture_get_data(): PackedByteArray;

/** Returns the data format used to create this texture. */
texture_get_format(): RDTextureFormat;

/**
 * Returns the internal graphics handle for this texture object. For use when communicating with third-party APIs mostly with GDExtension.
 *
 * **Note:** This function returns a `uint64_t` which internally maps to a `GLuint` (OpenGL) or `VkImage` (Vulkan).
 *
*/
texture_get_native_handle(): int;

/** Returns [code]true[/code] if the specified [param format] is supported for the given [param usage_flags], [code]false[/code] otherwise. */
texture_is_format_supported_for_usage(): boolean;

/** Returns [code]true[/code] if the [param texture] is shared, [code]false[/code] otherwise. See [RDTextureView]. */
texture_is_shared(): boolean;

/** Returns [code]true[/code] if the [param texture] is valid, [code]false[/code] otherwise. */
texture_is_valid(): boolean;

/**
 * Resolves the [param from_texture] texture onto [param to_texture] with multisample antialiasing enabled. This must be used when rendering a framebuffer for MSAA to work. Returns [constant @GlobalScope.OK] if successful, [constant @GlobalScope.ERR_INVALID_PARAMETER] otherwise.
 *
 * **Note:** [param from_texture] and [param to_texture] textures must have the same dimension, format and type (color or depth).
 *
 * **Note:** [param from_texture] can't be copied while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to resolve this texture.
 *
 * **Note:** [param from_texture] requires the [constant TEXTURE_USAGE_CAN_COPY_FROM_BIT] to be retrieved.
 *
 * **Note:** [param from_texture] must be multisampled and must also be 2D (or a slice of a 3D/cubemap texture).
 *
 * **Note:** [param to_texture] can't be copied while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to resolve this texture.
 *
 * **Note:** [param to_texture] texture requires the [constant TEXTURE_USAGE_CAN_COPY_TO_BIT] to be retrieved.
 *
 * **Note:** [param to_texture] texture must **not** be multisampled and must also be 2D (or a slice of a 3D/cubemap texture).
 *
*/
texture_resolve_multisample(): int;

/**
 * Updates texture data with new data, replacing the previous data in place. The updated texture data must have the same dimensions and format. For 2D textures (which only have one layer), [param layer] must be `0`. Returns [constant @GlobalScope.OK] if the update was successful, [constant @GlobalScope.ERR_INVALID_PARAMETER] otherwise.
 *
 * **Note:** Updating textures is forbidden during creation of a draw or compute list.
 *
 * **Note:** The existing [param texture] can't be updated while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to update this texture.
 *
 * **Note:** The existing [param texture] requires the [constant TEXTURE_USAGE_CAN_UPDATE_BIT] to be updatable.
 *
*/
texture_update(): int;

/**
 * Creates a new uniform buffer. It can be accessed with the RID that is returned.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.
 *
*/
uniform_buffer_create(): RID;

/**
 * Creates a new uniform set. It can be accessed with the RID that is returned.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.
 *
*/
uniform_set_create(): RID;

/** Checks if the [param uniform_set] is valid, i.e. is owned. */
uniform_set_is_valid(): boolean;

/** Creates a vertex array based on the specified buffers. Optionally, [param offsets] (in bytes) may be defined for each buffer. */
vertex_array_create(): RID;

/**
 * It can be accessed with the RID that is returned.
 *
 * Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.
 *
*/
vertex_buffer_create(): RID;

/** Creates a new vertex format with the specified [param vertex_descriptions]. Returns a unique vertex format ID corresponding to the newly created vertex format. */
vertex_format_create(): int;

  connect<T extends SignalsOf<RenderingDevice>>(signal: T, method: SignalFunction<RenderingDevice[T]>): number;



/**
 * Rendering device type does not match any of the other enum values or is unknown.
 *
*/
static DEVICE_TYPE_OTHER: any;

/**
 * Rendering device is an integrated GPU, which is typically **(but not always)** slower than dedicated GPUs ([constant DEVICE_TYPE_DISCRETE_GPU]). On Android and iOS, the rendering device type is always considered to be [constant DEVICE_TYPE_INTEGRATED_GPU].
 *
*/
static DEVICE_TYPE_INTEGRATED_GPU: any;

/**
 * Rendering device is a dedicated GPU, which is typically **(but not always)** faster than integrated GPUs ([constant DEVICE_TYPE_INTEGRATED_GPU]).
 *
*/
static DEVICE_TYPE_DISCRETE_GPU: any;

/**
 * Rendering device is an emulated GPU in a virtual environment. This is typically much slower than the host GPU, which means the expected performance level on a dedicated GPU will be roughly equivalent to [constant DEVICE_TYPE_INTEGRATED_GPU]. Virtual machine GPU passthrough (such as VFIO) will not report the device type as [constant DEVICE_TYPE_VIRTUAL_GPU]. Instead, the host GPU's device type will be reported as if the GPU was not emulated.
 *
*/
static DEVICE_TYPE_VIRTUAL_GPU: any;

/**
 * Rendering device is provided by software emulation (such as Lavapipe or [url=https://github.com/google/swiftshader]SwiftShader[/url]). This is the slowest kind of rendering device available; it's typically much slower than [constant DEVICE_TYPE_INTEGRATED_GPU].
 *
*/
static DEVICE_TYPE_CPU: any;

/**
 * Represents the size of the [enum DeviceType] enum.
 *
*/
static DEVICE_TYPE_MAX: any;

/**
 * Vulkan device driver resource. This is a "global" resource and ignores the RID passed in
 *
*/
static DRIVER_RESOURCE_VULKAN_DEVICE: any;

/**
 * Physical device (graphics card) driver resource.
 *
*/
static DRIVER_RESOURCE_VULKAN_PHYSICAL_DEVICE: any;

/**
 * Vulkan instance driver resource.
 *
*/
static DRIVER_RESOURCE_VULKAN_INSTANCE: any;

/**
 * Vulkan queue driver resource.
 *
*/
static DRIVER_RESOURCE_VULKAN_QUEUE: any;

/**
 * Vulkan queue family index driver resource.
 *
*/
static DRIVER_RESOURCE_VULKAN_QUEUE_FAMILY_INDEX: any;

/**
 * Vulkan image driver resource.
 *
*/
static DRIVER_RESOURCE_VULKAN_IMAGE: any;

/**
 * Vulkan image view driver resource.
 *
*/
static DRIVER_RESOURCE_VULKAN_IMAGE_VIEW: any;

/**
 * Vulkan image native texture format driver resource.
 *
*/
static DRIVER_RESOURCE_VULKAN_IMAGE_NATIVE_TEXTURE_FORMAT: any;

/**
 * Vulkan sampler driver resource.
 *
*/
static DRIVER_RESOURCE_VULKAN_SAMPLER: any;

/**
 * Vulkan [url=https://vkguide.dev/docs/chapter-4/descriptors/]descriptor set[/url] driver resource.
 *
*/
static DRIVER_RESOURCE_VULKAN_DESCRIPTOR_SET: any;

/**
 * Vulkan buffer driver resource.
 *
*/
static DRIVER_RESOURCE_VULKAN_BUFFER: any;

/**
 * Vulkan compute pipeline driver resource.
 *
*/
static DRIVER_RESOURCE_VULKAN_COMPUTE_PIPELINE: any;

/**
 * Vulkan render pipeline driver resource.
 *
*/
static DRIVER_RESOURCE_VULKAN_RENDER_PIPELINE: any;

/**
 * 4-bit-per-channel red/green channel data format, packed into 8 bits. Values are in the `[0.0, 1.0]` range.
 *
 * **Note:** More information on all data formats can be found on the [url=https://registry.khronos.org/vulkan/specs/1.1/html/vkspec.html#_identification_of_formats]Identification of formats[/url] section of the Vulkan specification, as well as the [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/man/html/VkFormat.html]VkFormat[/url] enum.
 *
*/
static DATA_FORMAT_R4G4_UNORM_PACK8: any;

/**
 * 4-bit-per-channel red/green/blue/alpha channel data format, packed into 16 bits. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_R4G4B4A4_UNORM_PACK16: any;

/**
 * 4-bit-per-channel blue/green/red/alpha channel data format, packed into 16 bits. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_B4G4R4A4_UNORM_PACK16: any;

/**
 * Red/green/blue channel data format with 5 bits of red, 6 bits of green and 5 bits of blue, packed into 16 bits. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_R5G6B5_UNORM_PACK16: any;

/**
 * Blue/green/red channel data format with 5 bits of blue, 6 bits of green and 5 bits of red, packed into 16 bits. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_B5G6R5_UNORM_PACK16: any;

/**
 * Red/green/blue/alpha channel data format with 5 bits of red, 6 bits of green, 5 bits of blue and 1 bit of alpha, packed into 16 bits. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_R5G5B5A1_UNORM_PACK16: any;

/**
 * Blue/green/red/alpha channel data format with 5 bits of blue, 6 bits of green, 5 bits of red and 1 bit of alpha, packed into 16 bits. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_B5G5R5A1_UNORM_PACK16: any;

/**
 * Alpha/red/green/blue channel data format with 1 bit of alpha, 5 bits of red, 6 bits of green and 5 bits of blue, packed into 16 bits. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_A1R5G5B5_UNORM_PACK16: any;

/**
 * 8-bit-per-channel unsigned floating-point red channel data format with normalized value. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_R8_UNORM: any;

/**
 * 8-bit-per-channel signed floating-point red channel data format with normalized value. Values are in the `[-1.0, 1.0]` range.
 *
*/
static DATA_FORMAT_R8_SNORM: any;

/**
 * 8-bit-per-channel unsigned floating-point red channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 255.0]` range.
 *
*/
static DATA_FORMAT_R8_USCALED: any;

/**
 * 8-bit-per-channel signed floating-point red channel data format with scaled value (value is converted from integer to float). Values are in the `[-127.0, 127.0]` range.
 *
*/
static DATA_FORMAT_R8_SSCALED: any;

/**
 * 8-bit-per-channel unsigned integer red channel data format. Values are in the `[0, 255]` range.
 *
*/
static DATA_FORMAT_R8_UINT: any;

/**
 * 8-bit-per-channel signed integer red channel data format. Values are in the `[-127, 127]` range.
 *
*/
static DATA_FORMAT_R8_SINT: any;

/**
 * 8-bit-per-channel unsigned floating-point red channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_R8_SRGB: any;

/**
 * 8-bit-per-channel unsigned floating-point red/green channel data format with normalized value. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_R8G8_UNORM: any;

/**
 * 8-bit-per-channel signed floating-point red/green channel data format with normalized value. Values are in the `[-1.0, 1.0]` range.
 *
*/
static DATA_FORMAT_R8G8_SNORM: any;

/**
 * 8-bit-per-channel unsigned floating-point red/green channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 255.0]` range.
 *
*/
static DATA_FORMAT_R8G8_USCALED: any;

/**
 * 8-bit-per-channel signed floating-point red/green channel data format with scaled value (value is converted from integer to float). Values are in the `[-127.0, 127.0]` range.
 *
*/
static DATA_FORMAT_R8G8_SSCALED: any;

/**
 * 8-bit-per-channel unsigned integer red/green channel data format. Values are in the `[0, 255]` range.
 *
*/
static DATA_FORMAT_R8G8_UINT: any;

/**
 * 8-bit-per-channel signed integer red/green channel data format. Values are in the `[-127, 127]` range.
 *
*/
static DATA_FORMAT_R8G8_SINT: any;

/**
 * 8-bit-per-channel unsigned floating-point red/green channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_R8G8_SRGB: any;

/**
 * 8-bit-per-channel unsigned floating-point red/green/blue channel data format with normalized value. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_R8G8B8_UNORM: any;

/**
 * 8-bit-per-channel signed floating-point red/green/blue channel data format with normalized value. Values are in the `[-1.0, 1.0]` range.
 *
*/
static DATA_FORMAT_R8G8B8_SNORM: any;

/**
 * 8-bit-per-channel unsigned floating-point red/green/blue channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 255.0]` range.
 *
*/
static DATA_FORMAT_R8G8B8_USCALED: any;

/**
 * 8-bit-per-channel signed floating-point red/green/blue channel data format with scaled value (value is converted from integer to float). Values are in the `[-127.0, 127.0]` range.
 *
*/
static DATA_FORMAT_R8G8B8_SSCALED: any;

/**
 * 8-bit-per-channel unsigned integer red/green/blue channel data format. Values are in the `[0, 255]` range.
 *
*/
static DATA_FORMAT_R8G8B8_UINT: any;

/**
 * 8-bit-per-channel signed integer red/green/blue channel data format. Values are in the `[-127, 127]` range.
 *
*/
static DATA_FORMAT_R8G8B8_SINT: any;

/**
 * 8-bit-per-channel unsigned floating-point red/green/blue/blue channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_R8G8B8_SRGB: any;

/**
 * 8-bit-per-channel unsigned floating-point blue/green/red channel data format with normalized value. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_B8G8R8_UNORM: any;

/**
 * 8-bit-per-channel signed floating-point blue/green/red channel data format with normalized value. Values are in the `[-1.0, 1.0]` range.
 *
*/
static DATA_FORMAT_B8G8R8_SNORM: any;

/**
 * 8-bit-per-channel unsigned floating-point blue/green/red channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 255.0]` range.
 *
*/
static DATA_FORMAT_B8G8R8_USCALED: any;

/**
 * 8-bit-per-channel signed floating-point blue/green/red channel data format with scaled value (value is converted from integer to float). Values are in the `[-127.0, 127.0]` range.
 *
*/
static DATA_FORMAT_B8G8R8_SSCALED: any;

/**
 * 8-bit-per-channel unsigned integer blue/green/red channel data format. Values are in the `[0, 255]` range.
 *
*/
static DATA_FORMAT_B8G8R8_UINT: any;

/**
 * 8-bit-per-channel signed integer blue/green/red channel data format. Values are in the `[-127, 127]` range.
 *
*/
static DATA_FORMAT_B8G8R8_SINT: any;

/**
 * 8-bit-per-channel unsigned floating-point blue/green/red data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_B8G8R8_SRGB: any;

/**
 * 8-bit-per-channel unsigned floating-point red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_R8G8B8A8_UNORM: any;

/**
 * 8-bit-per-channel signed floating-point red/green/blue/alpha channel data format with normalized value. Values are in the `[-1.0, 1.0]` range.
 *
*/
static DATA_FORMAT_R8G8B8A8_SNORM: any;

/**
 * 8-bit-per-channel unsigned floating-point red/green/blue/alpha channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 255.0]` range.
 *
*/
static DATA_FORMAT_R8G8B8A8_USCALED: any;

/**
 * 8-bit-per-channel signed floating-point red/green/blue/alpha channel data format with scaled value (value is converted from integer to float). Values are in the `[-127.0, 127.0]` range.
 *
*/
static DATA_FORMAT_R8G8B8A8_SSCALED: any;

/**
 * 8-bit-per-channel unsigned integer red/green/blue/alpha channel data format. Values are in the `[0, 255]` range.
 *
*/
static DATA_FORMAT_R8G8B8A8_UINT: any;

/**
 * 8-bit-per-channel signed integer red/green/blue/alpha channel data format. Values are in the `[-127, 127]` range.
 *
*/
static DATA_FORMAT_R8G8B8A8_SINT: any;

/**
 * 8-bit-per-channel unsigned floating-point red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_R8G8B8A8_SRGB: any;

/**
 * 8-bit-per-channel unsigned floating-point blue/green/red/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_B8G8R8A8_UNORM: any;

/**
 * 8-bit-per-channel signed floating-point blue/green/red/alpha channel data format with normalized value. Values are in the `[-1.0, 1.0]` range.
 *
*/
static DATA_FORMAT_B8G8R8A8_SNORM: any;

/**
 * 8-bit-per-channel unsigned floating-point blue/green/red/alpha channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 255.0]` range.
 *
*/
static DATA_FORMAT_B8G8R8A8_USCALED: any;

/**
 * 8-bit-per-channel signed floating-point blue/green/red/alpha channel data format with scaled value (value is converted from integer to float). Values are in the `[-127.0, 127.0]` range.
 *
*/
static DATA_FORMAT_B8G8R8A8_SSCALED: any;

/**
 * 8-bit-per-channel unsigned integer blue/green/red/alpha channel data format. Values are in the `[0, 255]` range.
 *
*/
static DATA_FORMAT_B8G8R8A8_UINT: any;

/**
 * 8-bit-per-channel signed integer blue/green/red/alpha channel data format. Values are in the `[-127, 127]` range.
 *
*/
static DATA_FORMAT_B8G8R8A8_SINT: any;

/**
 * 8-bit-per-channel unsigned floating-point blue/green/red/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_B8G8R8A8_SRGB: any;

/**
 * 8-bit-per-channel unsigned floating-point alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_A8B8G8R8_UNORM_PACK32: any;

/**
 * 8-bit-per-channel signed floating-point alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Values are in the `[-1.0, 1.0]` range.
 *
*/
static DATA_FORMAT_A8B8G8R8_SNORM_PACK32: any;

/**
 * 8-bit-per-channel unsigned floating-point alpha/red/green/blue channel data format with scaled value (value is converted from integer to float), packed in 32 bits. Values are in the `[0.0, 255.0]` range.
 *
*/
static DATA_FORMAT_A8B8G8R8_USCALED_PACK32: any;

/**
 * 8-bit-per-channel signed floating-point alpha/red/green/blue channel data format with scaled value (value is converted from integer to float), packed in 32 bits. Values are in the `[-127.0, 127.0]` range.
 *
*/
static DATA_FORMAT_A8B8G8R8_SSCALED_PACK32: any;

/**
 * 8-bit-per-channel unsigned integer alpha/red/green/blue channel data format, packed in 32 bits. Values are in the `[0, 255]` range.
 *
*/
static DATA_FORMAT_A8B8G8R8_UINT_PACK32: any;

/**
 * 8-bit-per-channel signed integer alpha/red/green/blue channel data format, packed in 32 bits. Values are in the `[-127, 127]` range.
 *
*/
static DATA_FORMAT_A8B8G8R8_SINT_PACK32: any;

/**
 * 8-bit-per-channel unsigned floating-point alpha/red/green/blue channel data format with normalized value and non-linear sRGB encoding, packed in 32 bits. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_A8B8G8R8_SRGB_PACK32: any;

/**
 * Unsigned floating-point alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of red, 10 bits of green and 10 bits of blue. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_A2R10G10B10_UNORM_PACK32: any;

/**
 * Signed floating-point alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of red, 10 bits of green and 10 bits of blue. Values are in the `[-1.0, 1.0]` range.
 *
*/
static DATA_FORMAT_A2R10G10B10_SNORM_PACK32: any;

/**
 * Unsigned floating-point alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of red, 10 bits of green and 10 bits of blue. Values are in the `[0.0, 1023.0]` range for red/green/blue and `[0.0, 3.0]` for alpha.
 *
*/
static DATA_FORMAT_A2R10G10B10_USCALED_PACK32: any;

/**
 * Signed floating-point alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of red, 10 bits of green and 10 bits of blue. Values are in the `[-511.0, 511.0]` range for red/green/blue and `[-1.0, 1.0]` for alpha.
 *
*/
static DATA_FORMAT_A2R10G10B10_SSCALED_PACK32: any;

/**
 * Unsigned integer alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of red, 10 bits of green and 10 bits of blue. Values are in the `[0, 1023]` range for red/green/blue and `[0, 3]` for alpha.
 *
*/
static DATA_FORMAT_A2R10G10B10_UINT_PACK32: any;

/**
 * Signed integer alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of red, 10 bits of green and 10 bits of blue. Values are in the `[-511, 511]` range for red/green/blue and `[-1, 1]` for alpha.
 *
*/
static DATA_FORMAT_A2R10G10B10_SINT_PACK32: any;

/**
 * Unsigned floating-point alpha/blue/green/red channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of blue, 10 bits of green and 10 bits of red. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_A2B10G10R10_UNORM_PACK32: any;

/**
 * Signed floating-point alpha/blue/green/red channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of blue, 10 bits of green and 10 bits of red. Values are in the `[-1.0, 1.0]` range.
 *
*/
static DATA_FORMAT_A2B10G10R10_SNORM_PACK32: any;

/**
 * Unsigned floating-point alpha/blue/green/red channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of blue, 10 bits of green and 10 bits of red. Values are in the `[0.0, 1023.0]` range for blue/green/red and `[0.0, 3.0]` for alpha.
 *
*/
static DATA_FORMAT_A2B10G10R10_USCALED_PACK32: any;

/**
 * Signed floating-point alpha/blue/green/red channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of blue, 10 bits of green and 10 bits of red. Values are in the `[-511.0, 511.0]` range for blue/green/red and `[-1.0, 1.0]` for alpha.
 *
*/
static DATA_FORMAT_A2B10G10R10_SSCALED_PACK32: any;

/**
 * Unsigned integer alpha/blue/green/red channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of blue, 10 bits of green and 10 bits of red. Values are in the `[0, 1023]` range for blue/green/red and `[0, 3]` for alpha.
 *
*/
static DATA_FORMAT_A2B10G10R10_UINT_PACK32: any;

/**
 * Signed integer alpha/blue/green/red channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of blue, 10 bits of green and 10 bits of red. Values are in the `[-511, 511]` range for blue/green/red and `[-1, 1]` for alpha.
 *
*/
static DATA_FORMAT_A2B10G10R10_SINT_PACK32: any;

/**
 * 16-bit-per-channel unsigned floating-point red channel data format with normalized value. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_R16_UNORM: any;

/**
 * 16-bit-per-channel signed floating-point red channel data format with normalized value. Values are in the `[-1.0, 1.0]` range.
 *
*/
static DATA_FORMAT_R16_SNORM: any;

/**
 * 16-bit-per-channel unsigned floating-point red channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 65535.0]` range.
 *
*/
static DATA_FORMAT_R16_USCALED: any;

/**
 * 16-bit-per-channel signed floating-point red channel data format with scaled value (value is converted from integer to float). Values are in the `[-32767.0, 32767.0]` range.
 *
*/
static DATA_FORMAT_R16_SSCALED: any;

/**
 * 16-bit-per-channel unsigned integer red channel data format. Values are in the `[0.0, 65535]` range.
 *
*/
static DATA_FORMAT_R16_UINT: any;

/**
 * 16-bit-per-channel signed integer red channel data format. Values are in the `[-32767, 32767]` range.
 *
*/
static DATA_FORMAT_R16_SINT: any;

/**
 * 16-bit-per-channel signed floating-point red channel data format with the value stored as-is.
 *
*/
static DATA_FORMAT_R16_SFLOAT: any;

/**
 * 16-bit-per-channel unsigned floating-point red/green channel data format with normalized value. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_R16G16_UNORM: any;

/**
 * 16-bit-per-channel signed floating-point red/green channel data format with normalized value. Values are in the `[-1.0, 1.0]` range.
 *
*/
static DATA_FORMAT_R16G16_SNORM: any;

/**
 * 16-bit-per-channel unsigned floating-point red/green channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 65535.0]` range.
 *
*/
static DATA_FORMAT_R16G16_USCALED: any;

/**
 * 16-bit-per-channel signed floating-point red/green channel data format with scaled value (value is converted from integer to float). Values are in the `[-32767.0, 32767.0]` range.
 *
*/
static DATA_FORMAT_R16G16_SSCALED: any;

/**
 * 16-bit-per-channel unsigned integer red/green channel data format. Values are in the `[0.0, 65535]` range.
 *
*/
static DATA_FORMAT_R16G16_UINT: any;

/**
 * 16-bit-per-channel signed integer red/green channel data format. Values are in the `[-32767, 32767]` range.
 *
*/
static DATA_FORMAT_R16G16_SINT: any;

/**
 * 16-bit-per-channel signed floating-point red/green channel data format with the value stored as-is.
 *
*/
static DATA_FORMAT_R16G16_SFLOAT: any;

/**
 * 16-bit-per-channel unsigned floating-point red/green/blue channel data format with normalized value. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_R16G16B16_UNORM: any;

/**
 * 16-bit-per-channel signed floating-point red/green/blue channel data format with normalized value. Values are in the `[-1.0, 1.0]` range.
 *
*/
static DATA_FORMAT_R16G16B16_SNORM: any;

/**
 * 16-bit-per-channel unsigned floating-point red/green/blue channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 65535.0]` range.
 *
*/
static DATA_FORMAT_R16G16B16_USCALED: any;

/**
 * 16-bit-per-channel signed floating-point red/green/blue channel data format with scaled value (value is converted from integer to float). Values are in the `[-32767.0, 32767.0]` range.
 *
*/
static DATA_FORMAT_R16G16B16_SSCALED: any;

/**
 * 16-bit-per-channel unsigned integer red/green/blue channel data format. Values are in the `[0.0, 65535]` range.
 *
*/
static DATA_FORMAT_R16G16B16_UINT: any;

/**
 * 16-bit-per-channel signed integer red/green/blue channel data format. Values are in the `[-32767, 32767]` range.
 *
*/
static DATA_FORMAT_R16G16B16_SINT: any;

/**
 * 16-bit-per-channel signed floating-point red/green/blue channel data format with the value stored as-is.
 *
*/
static DATA_FORMAT_R16G16B16_SFLOAT: any;

/**
 * 16-bit-per-channel unsigned floating-point red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_R16G16B16A16_UNORM: any;

/**
 * 16-bit-per-channel signed floating-point red/green/blue/alpha channel data format with normalized value. Values are in the `[-1.0, 1.0]` range.
 *
*/
static DATA_FORMAT_R16G16B16A16_SNORM: any;

/**
 * 16-bit-per-channel unsigned floating-point red/green/blue/alpha channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 65535.0]` range.
 *
*/
static DATA_FORMAT_R16G16B16A16_USCALED: any;

/**
 * 16-bit-per-channel signed floating-point red/green/blue/alpha channel data format with scaled value (value is converted from integer to float). Values are in the `[-32767.0, 32767.0]` range.
 *
*/
static DATA_FORMAT_R16G16B16A16_SSCALED: any;

/**
 * 16-bit-per-channel unsigned integer red/green/blue/alpha channel data format. Values are in the `[0.0, 65535]` range.
 *
*/
static DATA_FORMAT_R16G16B16A16_UINT: any;

/**
 * 16-bit-per-channel signed integer red/green/blue/alpha channel data format. Values are in the `[-32767, 32767]` range.
 *
*/
static DATA_FORMAT_R16G16B16A16_SINT: any;

/**
 * 16-bit-per-channel signed floating-point red/green/blue/alpha channel data format with the value stored as-is.
 *
*/
static DATA_FORMAT_R16G16B16A16_SFLOAT: any;

/**
 * 32-bit-per-channel unsigned integer red channel data format. Values are in the `[0, 2^32 - 1]` range.
 *
*/
static DATA_FORMAT_R32_UINT: any;

/**
 * 32-bit-per-channel signed integer red channel data format. Values are in the `[2^31 + 1, 2^31 - 1]` range.
 *
*/
static DATA_FORMAT_R32_SINT: any;

/**
 * 32-bit-per-channel signed floating-point red channel data format with the value stored as-is.
 *
*/
static DATA_FORMAT_R32_SFLOAT: any;

/**
 * 32-bit-per-channel unsigned integer red/green channel data format. Values are in the `[0, 2^32 - 1]` range.
 *
*/
static DATA_FORMAT_R32G32_UINT: any;

/**
 * 32-bit-per-channel signed integer red/green channel data format. Values are in the `[2^31 + 1, 2^31 - 1]` range.
 *
*/
static DATA_FORMAT_R32G32_SINT: any;

/**
 * 32-bit-per-channel signed floating-point red/green channel data format with the value stored as-is.
 *
*/
static DATA_FORMAT_R32G32_SFLOAT: any;

/**
 * 32-bit-per-channel unsigned integer red/green/blue channel data format. Values are in the `[0, 2^32 - 1]` range.
 *
*/
static DATA_FORMAT_R32G32B32_UINT: any;

/**
 * 32-bit-per-channel signed integer red/green/blue channel data format. Values are in the `[2^31 + 1, 2^31 - 1]` range.
 *
*/
static DATA_FORMAT_R32G32B32_SINT: any;

/**
 * 32-bit-per-channel signed floating-point red/green/blue channel data format with the value stored as-is.
 *
*/
static DATA_FORMAT_R32G32B32_SFLOAT: any;

/**
 * 32-bit-per-channel unsigned integer red/green/blue/alpha channel data format. Values are in the `[0, 2^32 - 1]` range.
 *
*/
static DATA_FORMAT_R32G32B32A32_UINT: any;

/**
 * 32-bit-per-channel signed integer red/green/blue/alpha channel data format. Values are in the `[2^31 + 1, 2^31 - 1]` range.
 *
*/
static DATA_FORMAT_R32G32B32A32_SINT: any;

/**
 * 32-bit-per-channel signed floating-point red/green/blue/alpha channel data format with the value stored as-is.
 *
*/
static DATA_FORMAT_R32G32B32A32_SFLOAT: any;

/**
 * 64-bit-per-channel unsigned integer red channel data format. Values are in the `[0, 2^64 - 1]` range.
 *
*/
static DATA_FORMAT_R64_UINT: any;

/**
 * 64-bit-per-channel signed integer red channel data format. Values are in the `[2^63 + 1, 2^63 - 1]` range.
 *
*/
static DATA_FORMAT_R64_SINT: any;

/**
 * 64-bit-per-channel signed floating-point red channel data format with the value stored as-is.
 *
*/
static DATA_FORMAT_R64_SFLOAT: any;

/**
 * 64-bit-per-channel unsigned integer red/green channel data format. Values are in the `[0, 2^64 - 1]` range.
 *
*/
static DATA_FORMAT_R64G64_UINT: any;

/**
 * 64-bit-per-channel signed integer red/green channel data format. Values are in the `[2^63 + 1, 2^63 - 1]` range.
 *
*/
static DATA_FORMAT_R64G64_SINT: any;

/**
 * 64-bit-per-channel signed floating-point red/green channel data format with the value stored as-is.
 *
*/
static DATA_FORMAT_R64G64_SFLOAT: any;

/**
 * 64-bit-per-channel unsigned integer red/green/blue channel data format. Values are in the `[0, 2^64 - 1]` range.
 *
*/
static DATA_FORMAT_R64G64B64_UINT: any;

/**
 * 64-bit-per-channel signed integer red/green/blue channel data format. Values are in the `[2^63 + 1, 2^63 - 1]` range.
 *
*/
static DATA_FORMAT_R64G64B64_SINT: any;

/**
 * 64-bit-per-channel signed floating-point red/green/blue channel data format with the value stored as-is.
 *
*/
static DATA_FORMAT_R64G64B64_SFLOAT: any;

/**
 * 64-bit-per-channel unsigned integer red/green/blue/alpha channel data format. Values are in the `[0, 2^64 - 1]` range.
 *
*/
static DATA_FORMAT_R64G64B64A64_UINT: any;

/**
 * 64-bit-per-channel signed integer red/green/blue/alpha channel data format. Values are in the `[2^63 + 1, 2^63 - 1]` range.
 *
*/
static DATA_FORMAT_R64G64B64A64_SINT: any;

/**
 * 64-bit-per-channel signed floating-point red/green/blue/alpha channel data format with the value stored as-is.
 *
*/
static DATA_FORMAT_R64G64B64A64_SFLOAT: any;

/**
 * Unsigned floating-point blue/green/red data format with the value stored as-is, packed in 32 bits. The format's precision is 10 bits of blue channel, 11 bits of green channel and 11 bits of red channel.
 *
*/
static DATA_FORMAT_B10G11R11_UFLOAT_PACK32: any;

/**
 * Unsigned floating-point exposure/blue/green/red data format with the value stored as-is, packed in 32 bits. The format's precision is 5 bits of exposure, 9 bits of blue channel, 9 bits of green channel and 9 bits of red channel.
 *
*/
static DATA_FORMAT_E5B9G9R9_UFLOAT_PACK32: any;

/**
 * 16-bit unsigned floating-point depth data format with normalized value. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_D16_UNORM: any;

/**
 * 24-bit unsigned floating-point depth data format with normalized value, plus 8 unused bits, packed in 32 bits. Values for depth are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_X8_D24_UNORM_PACK32: any;

/**
 * 32-bit signed floating-point depth data format with the value stored as-is.
 *
*/
static DATA_FORMAT_D32_SFLOAT: any;

/**
 * 8-bit unsigned integer stencil data format.
 *
*/
static DATA_FORMAT_S8_UINT: any;

/**
 * 16-bit unsigned floating-point depth data format with normalized value, plus 8 bits of stencil in unsigned integer format. Values for depth are in the `[0.0, 1.0]` range. Values for stencil are in the `[0, 255]` range.
 *
*/
static DATA_FORMAT_D16_UNORM_S8_UINT: any;

/**
 * 24-bit unsigned floating-point depth data format with normalized value, plus 8 bits of stencil in unsigned integer format. Values for depth are in the `[0.0, 1.0]` range. Values for stencil are in the `[0, 255]` range.
 *
*/
static DATA_FORMAT_D24_UNORM_S8_UINT: any;

/**
 * 32-bit signed floating-point depth data format with the value stored as-is, plus 8 bits of stencil in unsigned integer format. Values for stencil are in the `[0, 255]` range.
 *
*/
static DATA_FORMAT_D32_SFLOAT_S8_UINT: any;

/**
 * VRAM-compressed unsigned red/green/blue channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel and 5 bits of blue channel. Using BC1 texture compression (also known as S3TC DXT1).
 *
*/
static DATA_FORMAT_BC1_RGB_UNORM_BLOCK: any;

/**
 * VRAM-compressed unsigned red/green/blue channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel and 5 bits of blue channel. Using BC1 texture compression (also known as S3TC DXT1).
 *
*/
static DATA_FORMAT_BC1_RGB_SRGB_BLOCK: any;

/**
 * VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel, 5 bits of blue channel and 1 bit of alpha channel. Using BC1 texture compression (also known as S3TC DXT1).
 *
*/
static DATA_FORMAT_BC1_RGBA_UNORM_BLOCK: any;

/**
 * VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel, 5 bits of blue channel and 1 bit of alpha channel. Using BC1 texture compression (also known as S3TC DXT1).
 *
*/
static DATA_FORMAT_BC1_RGBA_SRGB_BLOCK: any;

/**
 * VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel, 5 bits of blue channel and 4 bits of alpha channel. Using BC2 texture compression (also known as S3TC DXT3).
 *
*/
static DATA_FORMAT_BC2_UNORM_BLOCK: any;

/**
 * VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel, 5 bits of blue channel and 4 bits of alpha channel. Using BC2 texture compression (also known as S3TC DXT3).
 *
*/
static DATA_FORMAT_BC2_SRGB_BLOCK: any;

/**
 * VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel, 5 bits of blue channel and 8 bits of alpha channel. Using BC3 texture compression (also known as S3TC DXT5).
 *
*/
static DATA_FORMAT_BC3_UNORM_BLOCK: any;

/**
 * VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel, 5 bits of blue channel and 8 bits of alpha channel. Using BC3 texture compression (also known as S3TC DXT5).
 *
*/
static DATA_FORMAT_BC3_SRGB_BLOCK: any;

/**
 * VRAM-compressed unsigned red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is 8 bits of red channel. Using BC4 texture compression.
 *
*/
static DATA_FORMAT_BC4_UNORM_BLOCK: any;

/**
 * VRAM-compressed signed red channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. The format's precision is 8 bits of red channel. Using BC4 texture compression.
 *
*/
static DATA_FORMAT_BC4_SNORM_BLOCK: any;

/**
 * VRAM-compressed unsigned red/green channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is 8 bits of red channel and 8 bits of green channel. Using BC5 texture compression (also known as S3TC RGTC).
 *
*/
static DATA_FORMAT_BC5_UNORM_BLOCK: any;

/**
 * VRAM-compressed signed red/green channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. The format's precision is 8 bits of red channel and 8 bits of green channel. Using BC5 texture compression (also known as S3TC RGTC).
 *
*/
static DATA_FORMAT_BC5_SNORM_BLOCK: any;

/**
 * VRAM-compressed unsigned red/green/blue channel data format with the floating-point value stored as-is. The format's precision is 8 bits of red channel and 8 bits of green channel. Using BC6H texture compression (also known as BPTC HDR).
 *
*/
static DATA_FORMAT_BC6H_UFLOAT_BLOCK: any;

/**
 * VRAM-compressed signed red/green/blue channel data format with the floating-point value stored as-is. The format's precision is between 4 and 7 bits for the red/green/blue channels and between 0 and 8 bits for the alpha channel. Using BC7 texture compression (also known as BPTC HDR).
 *
*/
static DATA_FORMAT_BC6H_SFLOAT_BLOCK: any;

/**
 * VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is between 4 and 7 bits for the red/green/blue channels and between 0 and 8 bits for the alpha channel. Also known as BPTC LDR.
 *
*/
static DATA_FORMAT_BC7_UNORM_BLOCK: any;

/**
 * VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. The format's precision is between 4 and 7 bits for the red/green/blue channels and between 0 and 8 bits for the alpha channel. Also known as BPTC LDR.
 *
*/
static DATA_FORMAT_BC7_SRGB_BLOCK: any;

/**
 * VRAM-compressed unsigned red/green/blue channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Using ETC2 texture compression.
 *
*/
static DATA_FORMAT_ETC2_R8G8B8_UNORM_BLOCK: any;

/**
 * VRAM-compressed unsigned red/green/blue channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. Using ETC2 texture compression.
 *
*/
static DATA_FORMAT_ETC2_R8G8B8_SRGB_BLOCK: any;

/**
 * VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Red/green/blue use 8 bit of precision each, with alpha using 1 bit of precision. Using ETC2 texture compression.
 *
*/
static DATA_FORMAT_ETC2_R8G8B8A1_UNORM_BLOCK: any;

/**
 * VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. Red/green/blue use 8 bit of precision each, with alpha using 1 bit of precision. Using ETC2 texture compression.
 *
*/
static DATA_FORMAT_ETC2_R8G8B8A1_SRGB_BLOCK: any;

/**
 * VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Red/green/blue use 8 bits of precision each, with alpha using 8 bits of precision. Using ETC2 texture compression.
 *
*/
static DATA_FORMAT_ETC2_R8G8B8A8_UNORM_BLOCK: any;

/**
 * VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. Red/green/blue use 8 bits of precision each, with alpha using 8 bits of precision. Using ETC2 texture compression.
 *
*/
static DATA_FORMAT_ETC2_R8G8B8A8_SRGB_BLOCK: any;

/**
 * 11-bit VRAM-compressed unsigned red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Using ETC2 texture compression.
 *
*/
static DATA_FORMAT_EAC_R11_UNORM_BLOCK: any;

/**
 * 11-bit VRAM-compressed signed red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Using ETC2 texture compression.
 *
*/
static DATA_FORMAT_EAC_R11_SNORM_BLOCK: any;

/**
 * 11-bit VRAM-compressed unsigned red/green channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Using ETC2 texture compression.
 *
*/
static DATA_FORMAT_EAC_R11G11_UNORM_BLOCK: any;

/**
 * 11-bit VRAM-compressed signed red/green channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Using ETC2 texture compression.
 *
*/
static DATA_FORMAT_EAC_R11G11_SNORM_BLOCK: any;

/**
 * VRAM-compressed unsigned floating-point data format with normalized value, packed in 4×4 blocks (highest quality). Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 *
*/
static DATA_FORMAT_ASTC_4x4_UNORM_BLOCK: any;

/**
 * VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 4×4 blocks (highest quality). Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 *
*/
static DATA_FORMAT_ASTC_4x4_SRGB_BLOCK: any;

/**
 * VRAM-compressed unsigned floating-point data format with normalized value, packed in 5×4 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 *
*/
static DATA_FORMAT_ASTC_5x4_UNORM_BLOCK: any;

/**
 * VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 5×4 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 *
*/
static DATA_FORMAT_ASTC_5x4_SRGB_BLOCK: any;

/**
 * VRAM-compressed unsigned floating-point data format with normalized value, packed in 5×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 *
*/
static DATA_FORMAT_ASTC_5x5_UNORM_BLOCK: any;

/**
 * VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 5×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 *
*/
static DATA_FORMAT_ASTC_5x5_SRGB_BLOCK: any;

/**
 * VRAM-compressed unsigned floating-point data format with normalized value, packed in 6×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 *
*/
static DATA_FORMAT_ASTC_6x5_UNORM_BLOCK: any;

/**
 * VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 6×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 *
*/
static DATA_FORMAT_ASTC_6x5_SRGB_BLOCK: any;

/**
 * VRAM-compressed unsigned floating-point data format with normalized value, packed in 6×6 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 *
*/
static DATA_FORMAT_ASTC_6x6_UNORM_BLOCK: any;

/**
 * VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 6×6 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 *
*/
static DATA_FORMAT_ASTC_6x6_SRGB_BLOCK: any;

/**
 * VRAM-compressed unsigned floating-point data format with normalized value, packed in 8×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 *
*/
static DATA_FORMAT_ASTC_8x5_UNORM_BLOCK: any;

/**
 * VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 8×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 *
*/
static DATA_FORMAT_ASTC_8x5_SRGB_BLOCK: any;

/**
 * VRAM-compressed unsigned floating-point data format with normalized value, packed in 8×6 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 *
*/
static DATA_FORMAT_ASTC_8x6_UNORM_BLOCK: any;

/**
 * VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 8×6 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 *
*/
static DATA_FORMAT_ASTC_8x6_SRGB_BLOCK: any;

/**
 * VRAM-compressed unsigned floating-point data format with normalized value, packed in 8×8 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 *
*/
static DATA_FORMAT_ASTC_8x8_UNORM_BLOCK: any;

/**
 * VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 8×8 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 *
*/
static DATA_FORMAT_ASTC_8x8_SRGB_BLOCK: any;

/**
 * VRAM-compressed unsigned floating-point data format with normalized value, packed in 10×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 *
*/
static DATA_FORMAT_ASTC_10x5_UNORM_BLOCK: any;

/**
 * VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 10×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 *
*/
static DATA_FORMAT_ASTC_10x5_SRGB_BLOCK: any;

/**
 * VRAM-compressed unsigned floating-point data format with normalized value, packed in 10×6 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 *
*/
static DATA_FORMAT_ASTC_10x6_UNORM_BLOCK: any;

/**
 * VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 10×6 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 *
*/
static DATA_FORMAT_ASTC_10x6_SRGB_BLOCK: any;

/**
 * VRAM-compressed unsigned floating-point data format with normalized value, packed in 10×8 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 *
*/
static DATA_FORMAT_ASTC_10x8_UNORM_BLOCK: any;

/**
 * VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 10×8 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 *
*/
static DATA_FORMAT_ASTC_10x8_SRGB_BLOCK: any;

/**
 * VRAM-compressed unsigned floating-point data format with normalized value, packed in 10×10 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 *
*/
static DATA_FORMAT_ASTC_10x10_UNORM_BLOCK: any;

/**
 * VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 10×10 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 *
*/
static DATA_FORMAT_ASTC_10x10_SRGB_BLOCK: any;

/**
 * VRAM-compressed unsigned floating-point data format with normalized value, packed in 12×10 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 *
*/
static DATA_FORMAT_ASTC_12x10_UNORM_BLOCK: any;

/**
 * VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 12×10 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 *
*/
static DATA_FORMAT_ASTC_12x10_SRGB_BLOCK: any;

/**
 * VRAM-compressed unsigned floating-point data format with normalized value, packed in 12 blocks (lowest quality). Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 *
*/
static DATA_FORMAT_ASTC_12x12_UNORM_BLOCK: any;

/**
 * VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 12 blocks (lowest quality). Values are in the `[0.0, 1.0]` range. Using ASTC compression.
 *
*/
static DATA_FORMAT_ASTC_12x12_SRGB_BLOCK: any;

/**
 * 8-bit-per-channel unsigned floating-point green/blue/red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).
 *
*/
static DATA_FORMAT_G8B8G8R8_422_UNORM: any;

/**
 * 8-bit-per-channel unsigned floating-point blue/green/red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).
 *
*/
static DATA_FORMAT_B8G8R8G8_422_UNORM: any;

/**
 * 8-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel).
 *
*/
static DATA_FORMAT_G8_B8_R8_3PLANE_420_UNORM: any;

/**
 * 8-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, stored across 2 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel).
 *
*/
static DATA_FORMAT_G8_B8R8_2PLANE_420_UNORM: any;

/**
 * 8-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, stored across 2 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).
 *
*/
static DATA_FORMAT_G8_B8_R8_3PLANE_422_UNORM: any;

/**
 * 8-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, stored across 2 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).
 *
*/
static DATA_FORMAT_G8_B8R8_2PLANE_422_UNORM: any;

/**
 * 8-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, stored across 3 separate planes. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_G8_B8_R8_3PLANE_444_UNORM: any;

/**
 * 10-bit-per-channel unsigned floating-point red channel data with normalized value, plus 6 unused bits, packed in 16 bits. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_R10X6_UNORM_PACK16: any;

/**
 * 10-bit-per-channel unsigned floating-point red/green channel data with normalized value, plus 6 unused bits after each channel, packed in 2×16 bits. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_R10X6G10X6_UNORM_2PACK16: any;

/**
 * 10-bit-per-channel unsigned floating-point red/green/blue/alpha channel data with normalized value, plus 6 unused bits after each channel, packed in 4×16 bits. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_R10X6G10X6B10X6A10X6_UNORM_4PACK16: any;

/**
 * 10-bit-per-channel unsigned floating-point green/blue/green/red channel data with normalized value, plus 6 unused bits after each channel, packed in 4×16 bits. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). The green channel is listed twice, but contains different values to allow it to be represented at full resolution.
 *
*/
static DATA_FORMAT_G10X6B10X6G10X6R10X6_422_UNORM_4PACK16: any;

/**
 * 10-bit-per-channel unsigned floating-point blue/green/red/green channel data with normalized value, plus 6 unused bits after each channel, packed in 4×16 bits. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). The green channel is listed twice, but contains different values to allow it to be represented at full resolution.
 *
*/
static DATA_FORMAT_B10X6G10X6R10X6G10X6_422_UNORM_4PACK16: any;

/**
 * 10-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 2 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel).
 *
*/
static DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_420_UNORM_3PACK16: any;

/**
 * 10-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 2 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel).
 *
*/
static DATA_FORMAT_G10X6_B10X6R10X6_2PLANE_420_UNORM_3PACK16: any;

/**
 * 10-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).
 *
*/
static DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_422_UNORM_3PACK16: any;

/**
 * 10-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 3 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).
 *
*/
static DATA_FORMAT_G10X6_B10X6R10X6_2PLANE_422_UNORM_3PACK16: any;

/**
 * 10-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_444_UNORM_3PACK16: any;

/**
 * 12-bit-per-channel unsigned floating-point red channel data with normalized value, plus 6 unused bits, packed in 16 bits. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_R12X4_UNORM_PACK16: any;

/**
 * 12-bit-per-channel unsigned floating-point red/green channel data with normalized value, plus 6 unused bits after each channel, packed in 2×16 bits. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_R12X4G12X4_UNORM_2PACK16: any;

/**
 * 12-bit-per-channel unsigned floating-point red/green/blue/alpha channel data with normalized value, plus 6 unused bits after each channel, packed in 4×16 bits. Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_R12X4G12X4B12X4A12X4_UNORM_4PACK16: any;

/**
 * 12-bit-per-channel unsigned floating-point green/blue/green/red channel data with normalized value, plus 6 unused bits after each channel, packed in 4×16 bits. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). The green channel is listed twice, but contains different values to allow it to be represented at full resolution.
 *
*/
static DATA_FORMAT_G12X4B12X4G12X4R12X4_422_UNORM_4PACK16: any;

/**
 * 12-bit-per-channel unsigned floating-point blue/green/red/green channel data with normalized value, plus 6 unused bits after each channel, packed in 4×16 bits. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). The green channel is listed twice, but contains different values to allow it to be represented at full resolution.
 *
*/
static DATA_FORMAT_B12X4G12X4R12X4G12X4_422_UNORM_4PACK16: any;

/**
 * 12-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 2 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel).
 *
*/
static DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_420_UNORM_3PACK16: any;

/**
 * 12-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 2 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel).
 *
*/
static DATA_FORMAT_G12X4_B12X4R12X4_2PLANE_420_UNORM_3PACK16: any;

/**
 * 12-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).
 *
*/
static DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_422_UNORM_3PACK16: any;

/**
 * 12-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 3 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).
 *
*/
static DATA_FORMAT_G12X4_B12X4R12X4_2PLANE_422_UNORM_3PACK16: any;

/**
 * 12-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_444_UNORM_3PACK16: any;

/**
 * 16-bit-per-channel unsigned floating-point green/blue/red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).
 *
*/
static DATA_FORMAT_G16B16G16R16_422_UNORM: any;

/**
 * 16-bit-per-channel unsigned floating-point blue/green/red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).
 *
*/
static DATA_FORMAT_B16G16R16G16_422_UNORM: any;

/**
 * 16-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Stored across 2 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel).
 *
*/
static DATA_FORMAT_G16_B16_R16_3PLANE_420_UNORM: any;

/**
 * 16-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Stored across 2 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel).
 *
*/
static DATA_FORMAT_G16_B16R16_2PLANE_420_UNORM: any;

/**
 * 16-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).
 *
*/
static DATA_FORMAT_G16_B16_R16_3PLANE_422_UNORM: any;

/**
 * 16-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Stored across 3 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel).
 *
*/
static DATA_FORMAT_G16_B16R16_2PLANE_422_UNORM: any;

/**
 * 16-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range.
 *
*/
static DATA_FORMAT_G16_B16_R16_3PLANE_444_UNORM: any;

/**
 * Represents the size of the [enum DataFormat] enum.
 *
*/
static DATA_FORMAT_MAX: any;

/**
 * Vertex shader barrier mask.
 *
*/
static BARRIER_MASK_VERTEX: any;

/**
 * Fragment shader barrier mask.
 *
*/
static BARRIER_MASK_FRAGMENT: any;

/**
 * Compute barrier mask.
 *
*/
static BARRIER_MASK_COMPUTE: any;

/**
 * Transfer barrier mask.
 *
*/
static BARRIER_MASK_TRANSFER: any;

/**
 * Raster barrier mask (vertex and fragment). Equivalent to `BARRIER_MASK_VERTEX | BARRIER_MASK_FRAGMENT`.
 *
*/
static BARRIER_MASK_RASTER: any;

/**
 * Barrier mask for all types (vertex, fragment, compute, transfer).
 *
*/
static BARRIER_MASK_ALL_BARRIERS: any;

/**
 * No barrier for any type.
 *
*/
static BARRIER_MASK_NO_BARRIER: any;

/**
 * 1-dimensional texture.
 *
*/
static TEXTURE_TYPE_1D: any;

/**
 * 2-dimensional texture.
 *
*/
static TEXTURE_TYPE_2D: any;

/**
 * 3-dimensional texture.
 *
*/
static TEXTURE_TYPE_3D: any;

/**
 * [Cubemap] texture.
 *
*/
static TEXTURE_TYPE_CUBE: any;

/**
 * Array of 1-dimensional textures.
 *
*/
static TEXTURE_TYPE_1D_ARRAY: any;

/**
 * Array of 2-dimensional textures.
 *
*/
static TEXTURE_TYPE_2D_ARRAY: any;

/**
 * Array of [Cubemap] textures.
 *
*/
static TEXTURE_TYPE_CUBE_ARRAY: any;

/**
 * Represents the size of the [enum TextureType] enum.
 *
*/
static TEXTURE_TYPE_MAX: any;

/**
 * Perform 1 texture sample (this is the fastest but lowest-quality for antialiasing).
 *
*/
static TEXTURE_SAMPLES_1: any;

/**
 * Perform 2 texture samples.
 *
*/
static TEXTURE_SAMPLES_2: any;

/**
 * Perform 4 texture samples.
 *
*/
static TEXTURE_SAMPLES_4: any;

/**
 * Perform 8 texture samples. Not supported on mobile GPUs (including Apple Silicon).
 *
*/
static TEXTURE_SAMPLES_8: any;

/**
 * Perform 16 texture samples. Not supported on mobile GPUs and many desktop GPUs.
 *
*/
static TEXTURE_SAMPLES_16: any;

/**
 * Perform 32 texture samples. Not supported on most GPUs.
 *
*/
static TEXTURE_SAMPLES_32: any;

/**
 * Perform 64 texture samples (this is the slowest but highest-quality for antialiasing). Not supported on most GPUs.
 *
*/
static TEXTURE_SAMPLES_64: any;

/**
 * Represents the size of the [enum TextureSamples] enum.
 *
*/
static TEXTURE_SAMPLES_MAX: any;

/**
 * Texture can be sampled.
 *
*/
static TEXTURE_USAGE_SAMPLING_BIT: any;

/**
 * Texture can be used as a color attachment in a framebuffer.
 *
*/
static TEXTURE_USAGE_COLOR_ATTACHMENT_BIT: any;

/**
 * Texture can be used as a depth/stencil attachment in a framebuffer.
 *
*/
static TEXTURE_USAGE_DEPTH_STENCIL_ATTACHMENT_BIT: any;

/**
 * Texture can be used as a [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#descriptorsets-storageimage]storage image[/url].
 *
*/
static TEXTURE_USAGE_STORAGE_BIT: any;

/**
 * Texture can be used as a [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#descriptorsets-storageimage]storage image[/url] with support for atomic operations.
 *
*/
static TEXTURE_USAGE_STORAGE_ATOMIC_BIT: any;

/**
 * Texture can be read back on the CPU using [method texture_get_data] faster than without this bit, since it is always kept in the system memory.
 *
*/
static TEXTURE_USAGE_CPU_READ_BIT: any;

/**
 * Texture can be updated using [method texture_update].
 *
*/
static TEXTURE_USAGE_CAN_UPDATE_BIT: any;

/**
 * Texture can be a source for [method texture_copy].
 *
*/
static TEXTURE_USAGE_CAN_COPY_FROM_BIT: any;

/**
 * Texture can be a destination for [method texture_copy].
 *
*/
static TEXTURE_USAGE_CAN_COPY_TO_BIT: any;

/**
 * Texture can be used as a [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#descriptorsets-inputattachment]input attachment[/url] in a framebuffer.
 *
*/
static TEXTURE_USAGE_INPUT_ATTACHMENT_BIT: any;

/**
 * Return the sampled value as-is.
 *
*/
static TEXTURE_SWIZZLE_IDENTITY: any;

/**
 * Always return `0.0` when sampling.
 *
*/
static TEXTURE_SWIZZLE_ZERO: any;

/**
 * Always return `1.0` when sampling.
 *
*/
static TEXTURE_SWIZZLE_ONE: any;

/**
 * Sample the red color channel.
 *
*/
static TEXTURE_SWIZZLE_R: any;

/**
 * Sample the green color channel.
 *
*/
static TEXTURE_SWIZZLE_G: any;

/**
 * Sample the blue color channel.
 *
*/
static TEXTURE_SWIZZLE_B: any;

/**
 * Sample the alpha channel.
 *
*/
static TEXTURE_SWIZZLE_A: any;

/**
 * Represents the size of the [enum TextureSwizzle] enum.
 *
*/
static TEXTURE_SWIZZLE_MAX: any;

/**
 * 2-dimensional texture slice.
 *
*/
static TEXTURE_SLICE_2D: any;

/**
 * Cubemap texture slice.
 *
*/
static TEXTURE_SLICE_CUBEMAP: any;

/**
 * 3-dimensional texture slice.
 *
*/
static TEXTURE_SLICE_3D: any;

/**
 * Nearest-neighbor sampler filtering. Sampling at higher resolutions than the source will result in a pixelated look.
 *
*/
static SAMPLER_FILTER_NEAREST: any;

/**
 * Bilinear sampler filtering. Sampling at higher resolutions than the source will result in a blurry look.
 *
*/
static SAMPLER_FILTER_LINEAR: any;

/**
 * Sample with repeating enabled.
 *
*/
static SAMPLER_REPEAT_MODE_REPEAT: any;

/**
 * Sample with mirrored repeating enabled. When sampling outside the `[0.0, 1.0]` range, return a mirrored version of the sampler. This mirrored version is mirrored again if sampling further away, with the pattern repeating indefinitely.
 *
*/
static SAMPLER_REPEAT_MODE_MIRRORED_REPEAT: any;

/**
 * Sample with repeating disabled. When sampling outside the `[0.0, 1.0]` range, return the color of the last pixel on the edge.
 *
*/
static SAMPLER_REPEAT_MODE_CLAMP_TO_EDGE: any;

/**
 * Sample with repeating disabled. When sampling outside the `[0.0, 1.0]` range, return the specified [member RDSamplerState.border_color].
 *
*/
static SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER: any;

/**
 * Sample with mirrored repeating enabled, but only once. When sampling in the `[-1.0, 0.0]` range, return a mirrored version of the sampler. When sampling outside the `[-1.0, 1.0]` range, return the color of the last pixel on the edge.
 *
*/
static SAMPLER_REPEAT_MODE_MIRROR_CLAMP_TO_EDGE: any;

/**
 * Represents the size of the [enum SamplerRepeatMode] enum.
 *
*/
static SAMPLER_REPEAT_MODE_MAX: any;

/**
 * Return a floating-point transparent black color when sampling outside the `[0.0, 1.0]` range. Only effective if the sampler repeat mode is [constant SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER].
 *
*/
static SAMPLER_BORDER_COLOR_FLOAT_TRANSPARENT_BLACK: any;

/**
 * Return a integer transparent black color when sampling outside the `[0.0, 1.0]` range. Only effective if the sampler repeat mode is [constant SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER].
 *
*/
static SAMPLER_BORDER_COLOR_INT_TRANSPARENT_BLACK: any;

/**
 * Return a floating-point opaque black color when sampling outside the `[0.0, 1.0]` range. Only effective if the sampler repeat mode is [constant SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER].
 *
*/
static SAMPLER_BORDER_COLOR_FLOAT_OPAQUE_BLACK: any;

/**
 * Return a integer opaque black color when sampling outside the `[0.0, 1.0]` range. Only effective if the sampler repeat mode is [constant SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER].
 *
*/
static SAMPLER_BORDER_COLOR_INT_OPAQUE_BLACK: any;

/**
 * Return a floating-point opaque white color when sampling outside the `[0.0, 1.0]` range. Only effective if the sampler repeat mode is [constant SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER].
 *
*/
static SAMPLER_BORDER_COLOR_FLOAT_OPAQUE_WHITE: any;

/**
 * Return a integer opaque white color when sampling outside the `[0.0, 1.0]` range. Only effective if the sampler repeat mode is [constant SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER].
 *
*/
static SAMPLER_BORDER_COLOR_INT_OPAQUE_WHITE: any;

/**
 * Represents the size of the [enum SamplerBorderColor] enum.
 *
*/
static SAMPLER_BORDER_COLOR_MAX: any;

/**
 * Vertex attribute addressing is a function of the vertex. This is used to specify the rate at which vertex attributes are pulled from buffers.
 *
*/
static VERTEX_FREQUENCY_VERTEX: any;

/**
 * Vertex attribute addressing is a function of the instance index. This is used to specify the rate at which vertex attributes are pulled from buffers.
 *
*/
static VERTEX_FREQUENCY_INSTANCE: any;

/**
 * Index buffer in 16-bit unsigned integer format. This limits the maximum index that can be specified to `65535`.
 *
*/
static INDEX_BUFFER_FORMAT_UINT16: any;

/**
 * Index buffer in 32-bit unsigned integer format. This limits the maximum index that can be specified to `4294967295`.
 *
*/
static INDEX_BUFFER_FORMAT_UINT32: any;

/** No documentation provided. */
static STORAGE_BUFFER_USAGE_DISPATCH_INDIRECT: any;

/**
 * Sampler uniform.
 *
*/
static UNIFORM_TYPE_SAMPLER: any;

/**
 * Sampler uniform with a texture.
 *
*/
static UNIFORM_TYPE_SAMPLER_WITH_TEXTURE: any;

/**
 * Texture uniform.
 *
*/
static UNIFORM_TYPE_TEXTURE: any;

/**
 * Image uniform.
 *
*/
static UNIFORM_TYPE_IMAGE: any;

/**
 * Texture buffer uniform.
 *
*/
static UNIFORM_TYPE_TEXTURE_BUFFER: any;

/**
 * Sampler uniform with a texture buffer.
 *
*/
static UNIFORM_TYPE_SAMPLER_WITH_TEXTURE_BUFFER: any;

/**
 * Image buffer uniform.
 *
*/
static UNIFORM_TYPE_IMAGE_BUFFER: any;

/**
 * Uniform buffer uniform.
 *
*/
static UNIFORM_TYPE_UNIFORM_BUFFER: any;

/**
 * [url=https://vkguide.dev/docs/chapter-4/storage_buffers/]Storage buffer[/url] uniform.
 *
*/
static UNIFORM_TYPE_STORAGE_BUFFER: any;

/**
 * Input attachment uniform.
 *
*/
static UNIFORM_TYPE_INPUT_ATTACHMENT: any;

/**
 * Represents the size of the [enum UniformType] enum.
 *
*/
static UNIFORM_TYPE_MAX: any;

/**
 * Point rendering primitive (with constant size, regardless of distance from camera).
 *
*/
static RENDER_PRIMITIVE_POINTS: any;

/**
 * Line list rendering primitive. Lines are drawn separated from each other.
 *
*/
static RENDER_PRIMITIVE_LINES: any;

/**
 * [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#drawing-line-lists-with-adjacency]Line list rendering primitive with adjacency.[/url]
 *
 * **Note:** Adjacency is only useful with geometry shaders, which Godot does not expose.
 *
*/
static RENDER_PRIMITIVE_LINES_WITH_ADJACENCY: any;

/**
 * Line strip rendering primitive. Lines drawn are connected to the previous vertex.
 *
*/
static RENDER_PRIMITIVE_LINESTRIPS: any;

/**
 * [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#drawing-line-strips-with-adjacency]Line strip rendering primitive with adjacency.[/url]
 *
 * **Note:** Adjacency is only useful with geometry shaders, which Godot does not expose.
 *
*/
static RENDER_PRIMITIVE_LINESTRIPS_WITH_ADJACENCY: any;

/**
 * Triangle list rendering primitive. Triangles are drawn separated from each other.
 *
*/
static RENDER_PRIMITIVE_TRIANGLES: any;

/**
 * [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#drawing-triangle-lists-with-adjacency]Triangle list rendering primitive with adjacency.[/url]
 *
 *  **Note:** Adjacency is only useful with geometry shaders, which Godot does not expose.
 *
*/
static RENDER_PRIMITIVE_TRIANGLES_WITH_ADJACENCY: any;

/**
 * Triangle strip rendering primitive. Triangles drawn are connected to the previous triangle.
 *
*/
static RENDER_PRIMITIVE_TRIANGLE_STRIPS: any;

/**
 * [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#drawing-triangle-strips-with-adjacency]Triangle strip rendering primitive with adjacency.[/url]
 *
 * **Note:** Adjacency is only useful with geometry shaders, which Godot does not expose.
 *
*/
static RENDER_PRIMITIVE_TRIANGLE_STRIPS_WITH_AJACENCY: any;

/**
 * Triangle strip rendering primitive with **primitive restart** enabled. Triangles drawn are connected to the previous triangle, but a primitive restart index can be specified before drawing to create a second triangle strip after the specified index.
 *
 * **Note:** Only compatible with indexed draws.
 *
*/
static RENDER_PRIMITIVE_TRIANGLE_STRIPS_WITH_RESTART_INDEX: any;

/**
 * Tessellation patch rendering primitive. Only useful with tessellation shaders, which can be used to deform these patches.
 *
*/
static RENDER_PRIMITIVE_TESSELATION_PATCH: any;

/**
 * Represents the size of the [enum RenderPrimitive] enum.
 *
*/
static RENDER_PRIMITIVE_MAX: any;

/**
 * Do not use polygon front face or backface culling.
 *
*/
static POLYGON_CULL_DISABLED: any;

/**
 * Use polygon frontface culling (faces pointing towards the camera are hidden).
 *
*/
static POLYGON_CULL_FRONT: any;

/**
 * Use polygon backface culling (faces pointing away from the camera are hidden).
 *
*/
static POLYGON_CULL_BACK: any;

/**
 * Clockwise winding order to determine which face of a polygon is its front face.
 *
*/
static POLYGON_FRONT_FACE_CLOCKWISE: any;

/**
 * Counter-clockwise winding order to determine which face of a polygon is its front face.
 *
*/
static POLYGON_FRONT_FACE_COUNTER_CLOCKWISE: any;

/**
 * Keep the current stencil value.
 *
*/
static STENCIL_OP_KEEP: any;

/**
 * Set the stencil value to `0`.
 *
*/
static STENCIL_OP_ZERO: any;

/**
 * Replace the existing stencil value with the new one.
 *
*/
static STENCIL_OP_REPLACE: any;

/**
 * Increment the existing stencil value and clamp to the maximum representable unsigned value if reached. Stencil bits are considered as an unsigned integer.
 *
*/
static STENCIL_OP_INCREMENT_AND_CLAMP: any;

/**
 * Decrement the existing stencil value and clamp to the minimum value if reached. Stencil bits are considered as an unsigned integer.
 *
*/
static STENCIL_OP_DECREMENT_AND_CLAMP: any;

/**
 * Bitwise-invert the existing stencil value.
 *
*/
static STENCIL_OP_INVERT: any;

/**
 * Increment the stencil value and wrap around to `0` if reaching the maximum representable unsigned. Stencil bits are considered as an unsigned integer.
 *
*/
static STENCIL_OP_INCREMENT_AND_WRAP: any;

/**
 * Decrement the stencil value and wrap around to the maximum representable unsigned if reaching the minimum. Stencil bits are considered as an unsigned integer.
 *
*/
static STENCIL_OP_DECREMENT_AND_WRAP: any;

/**
 * Represents the size of the [enum StencilOperation] enum.
 *
*/
static STENCIL_OP_MAX: any;

/**
 * "Never" comparison (opposite of [constant COMPARE_OP_ALWAYS]).
 *
*/
static COMPARE_OP_NEVER: any;

/**
 * "Less than" comparison.
 *
*/
static COMPARE_OP_LESS: any;

/**
 * "Equal" comparison.
 *
*/
static COMPARE_OP_EQUAL: any;

/**
 * "Less than or equal" comparison.
 *
*/
static COMPARE_OP_LESS_OR_EQUAL: any;

/**
 * "Greater than" comparison.
 *
*/
static COMPARE_OP_GREATER: any;

/**
 * "Not equal" comparison.
 *
*/
static COMPARE_OP_NOT_EQUAL: any;

/**
 * "Greater than or equal" comparison.
 *
*/
static COMPARE_OP_GREATER_OR_EQUAL: any;

/**
 * "Always" comparison (opposite of [constant COMPARE_OP_NEVER]).
 *
*/
static COMPARE_OP_ALWAYS: any;

/**
 * Represents the size of the [enum CompareOperator] enum.
 *
*/
static COMPARE_OP_MAX: any;

/**
 * Clear logic operation (result is always `0`). See also [constant LOGIC_OP_SET].
 *
*/
static LOGIC_OP_CLEAR: any;

/**
 * AND logic operation.
 *
*/
static LOGIC_OP_AND: any;

/**
 * AND logic operation with the **destination** operand being inverted. See also [constant LOGIC_OP_AND_INVERTED].
 *
*/
static LOGIC_OP_AND_REVERSE: any;

/**
 * Copy logic operation (keeps the **source** value as-is). See also [constant LOGIC_OP_COPY_INVERTED] and [constant LOGIC_OP_NO_OP].
 *
*/
static LOGIC_OP_COPY: any;

/**
 * AND logic operation with the **source** operand being inverted. See also [constant LOGIC_OP_AND_REVERSE].
 *
*/
static LOGIC_OP_AND_INVERTED: any;

/**
 * No-op logic operation (keeps the **destination** value as-is). See also [constant LOGIC_OP_COPY].
 *
*/
static LOGIC_OP_NO_OP: any;

/**
 * Exclusive or (XOR) logic operation.
 *
*/
static LOGIC_OP_XOR: any;

/**
 * OR logic operation.
 *
*/
static LOGIC_OP_OR: any;

/**
 * Not-OR (NOR) logic operation.
 *
*/
static LOGIC_OP_NOR: any;

/**
 * Not-XOR (XNOR) logic operation.
 *
*/
static LOGIC_OP_EQUIVALENT: any;

/**
 * Invert logic operation.
 *
*/
static LOGIC_OP_INVERT: any;

/**
 * OR logic operation with the **destination** operand being inverted. See also [constant LOGIC_OP_OR_REVERSE].
 *
*/
static LOGIC_OP_OR_REVERSE: any;

/**
 * NOT logic operation (inverts the value). See also [constant LOGIC_OP_COPY].
 *
*/
static LOGIC_OP_COPY_INVERTED: any;

/**
 * OR logic operation with the **source** operand being inverted. See also [constant LOGIC_OP_OR_REVERSE].
 *
*/
static LOGIC_OP_OR_INVERTED: any;

/**
 * Not-AND (NAND) logic operation.
 *
*/
static LOGIC_OP_NAND: any;

/**
 * SET logic operation (result is always `1`). See also [constant LOGIC_OP_CLEAR].
 *
*/
static LOGIC_OP_SET: any;

/**
 * Represents the size of the [enum LogicOperation] enum.
 *
*/
static LOGIC_OP_MAX: any;

/**
 * Constant `0.0` blend factor.
 *
*/
static BLEND_FACTOR_ZERO: any;

/**
 * Constant `1.0` blend factor.
 *
*/
static BLEND_FACTOR_ONE: any;

/**
 * Color blend factor is `source color`. Alpha blend factor is `source alpha`.
 *
*/
static BLEND_FACTOR_SRC_COLOR: any;

/**
 * Color blend factor is `1.0 - source color`. Alpha blend factor is `1.0 - source alpha`.
 *
*/
static BLEND_FACTOR_ONE_MINUS_SRC_COLOR: any;

/**
 * Color blend factor is `destination color`. Alpha blend factor is `destination alpha`.
 *
*/
static BLEND_FACTOR_DST_COLOR: any;

/**
 * Color blend factor is `1.0 - destination color`. Alpha blend factor is `1.0 - destination alpha`.
 *
*/
static BLEND_FACTOR_ONE_MINUS_DST_COLOR: any;

/**
 * Color and alpha blend factor is `source alpha`.
 *
*/
static BLEND_FACTOR_SRC_ALPHA: any;

/**
 * Color and alpha blend factor is `1.0 - source alpha`.
 *
*/
static BLEND_FACTOR_ONE_MINUS_SRC_ALPHA: any;

/**
 * Color and alpha blend factor is `destination alpha`.
 *
*/
static BLEND_FACTOR_DST_ALPHA: any;

/**
 * Color and alpha blend factor is `1.0 - destination alpha`.
 *
*/
static BLEND_FACTOR_ONE_MINUS_DST_ALPHA: any;

/**
 * Color blend factor is `blend constant color`. Alpha blend factor is `blend constant alpha` (see [method draw_list_set_blend_constants]).
 *
*/
static BLEND_FACTOR_CONSTANT_COLOR: any;

/**
 * Color blend factor is `1.0 - blend constant color`. Alpha blend factor is `1.0 - blend constant alpha` (see [method draw_list_set_blend_constants]).
 *
*/
static BLEND_FACTOR_ONE_MINUS_CONSTANT_COLOR: any;

/**
 * Color and alpha blend factor is `blend constant alpha` (see [method draw_list_set_blend_constants]).
 *
*/
static BLEND_FACTOR_CONSTANT_ALPHA: any;

/**
 * Color and alpha blend factor is `1.0 - blend constant alpha` (see [method draw_list_set_blend_constants]).
 *
*/
static BLEND_FACTOR_ONE_MINUS_CONSTANT_ALPHA: any;

/**
 * Color blend factor is `min(source alpha, 1.0 - destination alpha)`. Alpha blend factor is `1.0`.
 *
*/
static BLEND_FACTOR_SRC_ALPHA_SATURATE: any;

/**
 * Color blend factor is `second source color`. Alpha blend factor is `second source alpha`. Only relevant for dual-source blending.
 *
*/
static BLEND_FACTOR_SRC1_COLOR: any;

/**
 * Color blend factor is `1.0 - second source color`. Alpha blend factor is `1.0 - second source alpha`. Only relevant for dual-source blending.
 *
*/
static BLEND_FACTOR_ONE_MINUS_SRC1_COLOR: any;

/**
 * Color and alpha blend factor is `second source alpha`. Only relevant for dual-source blending.
 *
*/
static BLEND_FACTOR_SRC1_ALPHA: any;

/**
 * Color and alpha blend factor is `1.0 - second source alpha`. Only relevant for dual-source blending.
 *
*/
static BLEND_FACTOR_ONE_MINUS_SRC1_ALPHA: any;

/**
 * Represents the size of the [enum BlendFactor] enum.
 *
*/
static BLEND_FACTOR_MAX: any;

/**
 * Additive blending operation (`source + destination`).
 *
*/
static BLEND_OP_ADD: any;

/**
 * Subtractive blending operation (`source - destination`).
 *
*/
static BLEND_OP_SUBTRACT: any;

/**
 * Reverse subtractive blending operation (`destination - source`).
 *
*/
static BLEND_OP_REVERSE_SUBTRACT: any;

/**
 * Minimum blending operation (keep the lowest value of the two).
 *
*/
static BLEND_OP_MINIMUM: any;

/**
 * Maximum blending operation (keep the highest value of the two).
 *
*/
static BLEND_OP_MAXIMUM: any;

/**
 * Represents the size of the [enum BlendOperation] enum.
 *
*/
static BLEND_OP_MAX: any;

/** No documentation provided. */
static DYNAMIC_STATE_LINE_WIDTH: any;

/** No documentation provided. */
static DYNAMIC_STATE_DEPTH_BIAS: any;

/** No documentation provided. */
static DYNAMIC_STATE_BLEND_CONSTANTS: any;

/** No documentation provided. */
static DYNAMIC_STATE_DEPTH_BOUNDS: any;

/** No documentation provided. */
static DYNAMIC_STATE_STENCIL_COMPARE_MASK: any;

/** No documentation provided. */
static DYNAMIC_STATE_STENCIL_WRITE_MASK: any;

/** No documentation provided. */
static DYNAMIC_STATE_STENCIL_REFERENCE: any;

/**
 * Start rendering and clear the whole framebuffer.
 *
*/
static INITIAL_ACTION_CLEAR: any;

/**
 * Start rendering and clear the framebuffer in the specified region.
 *
*/
static INITIAL_ACTION_CLEAR_REGION: any;

/**
 * Continue rendering and clear the framebuffer in the specified region. Framebuffer must have been left in [constant FINAL_ACTION_CONTINUE] state as the final action previously.
 *
*/
static INITIAL_ACTION_CLEAR_REGION_CONTINUE: any;

/**
 * Start rendering, but keep attached color texture contents. If the framebuffer was previously used to read in a shader, this will automatically insert a layout transition.
 *
*/
static INITIAL_ACTION_KEEP: any;

/**
 * Start rendering, ignore what is there; write above it. In general, this is the fastest option when you will be writing every single pixel and you don't need a clear color.
 *
*/
static INITIAL_ACTION_DROP: any;

/**
 * Continue rendering. Framebuffer must have been left in [constant FINAL_ACTION_CONTINUE] state as the final action previously.
 *
*/
static INITIAL_ACTION_CONTINUE: any;

/**
 * Represents the size of the [enum InitialAction] enum.
 *
*/
static INITIAL_ACTION_MAX: any;

/**
 * Store the texture for reading and make it read-only if it has the [constant TEXTURE_USAGE_SAMPLING_BIT] bit (only applies to color, depth and stencil attachments).
 *
*/
static FINAL_ACTION_READ: any;

/**
 * Discard the texture data and make it read-only if it has the [constant TEXTURE_USAGE_SAMPLING_BIT] bit (only applies to color, depth and stencil attachments).
 *
*/
static FINAL_ACTION_DISCARD: any;

/**
 * Store the texture and continue for further processing. Similar to [constant FINAL_ACTION_READ], but does not make the texture read-only if it has the [constant TEXTURE_USAGE_SAMPLING_BIT] bit.
 *
*/
static FINAL_ACTION_CONTINUE: any;

/**
 * Represents the size of the [enum FinalAction] enum.
 *
*/
static FINAL_ACTION_MAX: any;

/**
 * Vertex shader stage. This can be used to manipulate vertices from a shader (but not create new vertices).
 *
*/
static SHADER_STAGE_VERTEX: any;

/**
 * Fragment shader stage (called "pixel shader" in Direct3D). This can be used to manipulate pixels from a shader.
 *
*/
static SHADER_STAGE_FRAGMENT: any;

/**
 * Tessellation control shader stage. This can be used to create additional geometry from a shader.
 *
*/
static SHADER_STAGE_TESSELATION_CONTROL: any;

/**
 * Tessellation evaluation shader stage. This can be used to create additional geometry from a shader.
 *
*/
static SHADER_STAGE_TESSELATION_EVALUATION: any;

/**
 * Compute shader stage. This can be used to run arbitrary computing tasks in a shader, performing them on the GPU instead of the CPU.
 *
*/
static SHADER_STAGE_COMPUTE: any;

/**
 * Represents the size of the [enum ShaderStage] enum.
 *
*/
static SHADER_STAGE_MAX: any;

/**
 * Vertex shader stage bit (see also [constant SHADER_STAGE_VERTEX]).
 *
*/
static SHADER_STAGE_VERTEX_BIT: any;

/**
 * Fragment shader stage bit (see also [constant SHADER_STAGE_FRAGMENT]).
 *
*/
static SHADER_STAGE_FRAGMENT_BIT: any;

/**
 * Tessellation control shader stage bit (see also [constant SHADER_STAGE_TESSELATION_CONTROL]).
 *
*/
static SHADER_STAGE_TESSELATION_CONTROL_BIT: any;

/**
 * Tessellation evaluation shader stage bit (see also [constant SHADER_STAGE_TESSELATION_EVALUATION]).
 *
*/
static SHADER_STAGE_TESSELATION_EVALUATION_BIT: any;

/**
 * Compute shader stage bit (see also [constant SHADER_STAGE_COMPUTE]).
 *
*/
static SHADER_STAGE_COMPUTE_BIT: any;

/**
 * Khronos' GLSL shading language (used natively by OpenGL and Vulkan). This is the language used for core Godot shaders.
 *
*/
static SHADER_LANGUAGE_GLSL: any;

/**
 * Microsoft's High-Level Shading Language (used natively by Direct3D, but can also be used in Vulkan).
 *
*/
static SHADER_LANGUAGE_HLSL: any;

/**
 * Boolean specialization constant.
 *
*/
static PIPELINE_SPECIALIZATION_CONSTANT_TYPE_BOOL: any;

/**
 * Integer specialization constant.
 *
*/
static PIPELINE_SPECIALIZATION_CONSTANT_TYPE_INT: any;

/**
 * Floating-point specialization constant.
 *
*/
static PIPELINE_SPECIALIZATION_CONSTANT_TYPE_FLOAT: any;

/**
 * Maximum number of uniform sets that can be bound at a given time.
 *
*/
static LIMIT_MAX_BOUND_UNIFORM_SETS: any;

/**
 * Maximum number of color framebuffer attachments that can be used at a given time.
 *
*/
static LIMIT_MAX_FRAMEBUFFER_COLOR_ATTACHMENTS: any;

/**
 * Maximum number of textures that can be used per uniform set.
 *
*/
static LIMIT_MAX_TEXTURES_PER_UNIFORM_SET: any;

/**
 * Maximum number of samplers that can be used per uniform set.
 *
*/
static LIMIT_MAX_SAMPLERS_PER_UNIFORM_SET: any;

/**
 * Maximum number of [url=https://vkguide.dev/docs/chapter-4/storage_buffers/]storage buffers[/url] per uniform set.
 *
*/
static LIMIT_MAX_STORAGE_BUFFERS_PER_UNIFORM_SET: any;

/**
 * Maximum number of storage images per uniform set.
 *
*/
static LIMIT_MAX_STORAGE_IMAGES_PER_UNIFORM_SET: any;

/**
 * Maximum number of uniform buffers per uniform set.
 *
*/
static LIMIT_MAX_UNIFORM_BUFFERS_PER_UNIFORM_SET: any;

/**
 * Maximum index for an indexed draw command.
 *
*/
static LIMIT_MAX_DRAW_INDEXED_INDEX: any;

/**
 * Maximum height of a framebuffer (in pixels).
 *
*/
static LIMIT_MAX_FRAMEBUFFER_HEIGHT: any;

/**
 * Maximum width of a framebuffer (in pixels).
 *
*/
static LIMIT_MAX_FRAMEBUFFER_WIDTH: any;

/**
 * Maximum number of texture array layers.
 *
*/
static LIMIT_MAX_TEXTURE_ARRAY_LAYERS: any;

/**
 * Maximum supported 1-dimensional texture size (in pixels on a single axis).
 *
*/
static LIMIT_MAX_TEXTURE_SIZE_1D: any;

/**
 * Maximum supported 2-dimensional texture size (in pixels on a single axis).
 *
*/
static LIMIT_MAX_TEXTURE_SIZE_2D: any;

/**
 * Maximum supported 3-dimensional texture size (in pixels on a single axis).
 *
*/
static LIMIT_MAX_TEXTURE_SIZE_3D: any;

/**
 * Maximum supported cubemap texture size (in pixels on a single axis of a single face).
 *
*/
static LIMIT_MAX_TEXTURE_SIZE_CUBE: any;

/**
 * Maximum number of textures per shader stage.
 *
*/
static LIMIT_MAX_TEXTURES_PER_SHADER_STAGE: any;

/**
 * Maximum number of samplers per shader stage.
 *
*/
static LIMIT_MAX_SAMPLERS_PER_SHADER_STAGE: any;

/**
 * Maximum number of [url=https://vkguide.dev/docs/chapter-4/storage_buffers/]storage buffers[/url] per shader stage.
 *
*/
static LIMIT_MAX_STORAGE_BUFFERS_PER_SHADER_STAGE: any;

/**
 * Maximum number of storage images per shader stage.
 *
*/
static LIMIT_MAX_STORAGE_IMAGES_PER_SHADER_STAGE: any;

/**
 * Maximum number of uniform buffers per uniform set.
 *
*/
static LIMIT_MAX_UNIFORM_BUFFERS_PER_SHADER_STAGE: any;

/**
 * Maximum size of a push constant. A lot of devices are limited to 128 bytes, so try to avoid exceeding 128 bytes in push constants to ensure compatibility even if your GPU is reporting a higher value.
 *
*/
static LIMIT_MAX_PUSH_CONSTANT_SIZE: any;

/**
 * Maximum size of a uniform buffer.
 *
*/
static LIMIT_MAX_UNIFORM_BUFFER_SIZE: any;

/**
 * Maximum vertex input attribute offset.
 *
*/
static LIMIT_MAX_VERTEX_INPUT_ATTRIBUTE_OFFSET: any;

/**
 * Maximum number of vertex input attributes.
 *
*/
static LIMIT_MAX_VERTEX_INPUT_ATTRIBUTES: any;

/**
 * Maximum number of vertex input bindings.
 *
*/
static LIMIT_MAX_VERTEX_INPUT_BINDINGS: any;

/**
 * Maximum vertex input binding stride.
 *
*/
static LIMIT_MAX_VERTEX_INPUT_BINDING_STRIDE: any;

/**
 * Minimum uniform buffer offset alignment.
 *
*/
static LIMIT_MIN_UNIFORM_BUFFER_OFFSET_ALIGNMENT: any;

/**
 * Maximum shared memory size for compute shaders.
 *
*/
static LIMIT_MAX_COMPUTE_SHARED_MEMORY_SIZE: any;

/**
 * Maximum number of workgroups for compute shaders on the X axis.
 *
*/
static LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_X: any;

/**
 * Maximum number of workgroups for compute shaders on the Y axis.
 *
*/
static LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_Y: any;

/**
 * Maximum number of workgroups for compute shaders on the Z axis.
 *
*/
static LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_Z: any;

/**
 * Maximum number of workgroup invocations for compute shaders.
 *
*/
static LIMIT_MAX_COMPUTE_WORKGROUP_INVOCATIONS: any;

/**
 * Maximum workgroup size for compute shaders on the X axis.
 *
*/
static LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_X: any;

/**
 * Maximum workgroup size for compute shaders on the Y axis.
 *
*/
static LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_Y: any;

/**
 * Maximum workgroup size for compute shaders on the Z axis.
 *
*/
static LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_Z: any;

/**
 * Maximum viewport width (in pixels).
 *
*/
static LIMIT_MAX_VIEWPORT_DIMENSIONS_X: any;

/**
 * Maximum viewport height (in pixels).
 *
*/
static LIMIT_MAX_VIEWPORT_DIMENSIONS_Y: any;

/**
 * Memory taken by textures.
 *
*/
static MEMORY_TEXTURES: any;

/**
 * Memory taken by buffers.
 *
*/
static MEMORY_BUFFERS: any;

/**
 * Total memory taken. This is greater than the sum of [constant MEMORY_TEXTURES] and [constant MEMORY_BUFFERS], as it also includes miscellaneous memory usage.
 *
*/
static MEMORY_TOTAL: any;

/**
 * Returned by functions that return an ID if a value is invalid.
 *
*/
static INVALID_ID: any;

/**
 * Returned by functions that return a format ID if a value is invalid.
 *
*/
static INVALID_FORMAT_ID: any;



}

