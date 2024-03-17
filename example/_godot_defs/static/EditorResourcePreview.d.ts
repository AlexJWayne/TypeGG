
/**
 * This node is used to generate previews for resources or files.
 *
 * **Note:** This class shouldn't be instantiated directly. Instead, access the singleton using [method EditorInterface.get_resource_previewer].
 *
*/
declare class EditorResourcePreview extends Node  {

  
/**
 * This node is used to generate previews for resources or files.
 *
 * **Note:** This class shouldn't be instantiated directly. Instead, access the singleton using [method EditorInterface.get_resource_previewer].
 *
*/
  new(): EditorResourcePreview; 
  static "new"(): EditorResourcePreview 



/** Create an own, custom preview generator. */
add_preview_generator(): void;

/** Check if the resource changed, if so, it will be invalidated and the corresponding signal emitted. */
check_for_invalidation(): void;

/**
 * Queue the [param resource] being edited for preview. Once the preview is ready, the [param receiver]'s [param receiver_func] will be called. The [param receiver_func] must take the following four arguments: [String] path, [Texture2D] preview, [Texture2D] thumbnail_preview, [Variant] userdata. [param userdata] can be anything, and will be returned when [param receiver_func] is called.
 *
 * **Note:** If it was not possible to create the preview the [param receiver_func] will still be called, but the preview will be null.
 *
*/
queue_edited_resource_preview(): void;

/**
 * Queue a resource file located at [param path] for preview. Once the preview is ready, the [param receiver]'s [param receiver_func] will be called. The [param receiver_func] must take the following four arguments: [String] path, [Texture2D] preview, [Texture2D] thumbnail_preview, [Variant] userdata. [param userdata] can be anything, and will be returned when [param receiver_func] is called.
 *
 * **Note:** If it was not possible to create the preview the [param receiver_func] will still be called, but the preview will be null.
 *
*/
queue_resource_preview(): void;

/** Removes a custom preview generator. */
remove_preview_generator(): void;

  connect<T extends SignalsOf<EditorResourcePreview>>(signal: T, method: SignalFunction<EditorResourcePreview[T]>): number;





/**
 * Emitted if a preview was invalidated (changed). [param path] corresponds to the path of the preview.
 *
*/
$preview_invalidated: Signal<() => void>

}

