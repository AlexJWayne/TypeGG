
/**
 * The [CameraServer] keeps track of different cameras accessible in Godot. These are external cameras such as webcams or the cameras on your phone.
 *
 * It is notably used to provide AR modules with a video feed from the camera.
 *
 * **Note:** This class is currently only implemented on macOS and iOS. On other platforms, no [CameraFeed]s will be available.
 *
*/
declare class CameraServerClass extends Object  {

  
/**
 * The [CameraServer] keeps track of different cameras accessible in Godot. These are external cameras such as webcams or the cameras on your phone.
 *
 * It is notably used to provide AR modules with a video feed from the camera.
 *
 * **Note:** This class is currently only implemented on macOS and iOS. On other platforms, no [CameraFeed]s will be available.
 *
*/
  new(): CameraServerClass; 
  static "new"(): CameraServerClass 



/** Adds the camera [param feed] to the camera server. */
add_feed(): void;

/** Returns an array of [CameraFeed]s. */
feeds(): CameraFeed[];

/** Returns the [CameraFeed] corresponding to the camera with the given [param index]. */
get_feed(): CameraFeed;

/** Returns the number of [CameraFeed]s registered. */
get_feed_count(): int;

/** Removes the specified camera [param feed]. */
remove_feed(): void;

  connect<T extends SignalsOf<CameraServerClass>>(signal: T, method: SignalFunction<CameraServerClass[T]>): number;



/**
 * The RGBA camera image.
 *
*/
static FEED_RGBA_IMAGE: any;

/**
 * The [url=https://en.wikipedia.org/wiki/YCbCr]YCbCr[/url] camera image.
 *
*/
static FEED_YCBCR_IMAGE: any;

/**
 * The Y component camera image.
 *
*/
static FEED_Y_IMAGE: any;

/**
 * The CbCr component camera image.
 *
*/
static FEED_CBCR_IMAGE: any;


/**
 * Emitted when a [CameraFeed] is added (e.g. a webcam is plugged in).
 *
*/
$camera_feed_added: Signal<() => void>

/**
 * Emitted when a [CameraFeed] is removed (e.g. a webcam is unplugged).
 *
*/
$camera_feed_removed: Signal<() => void>

}

