
/**
 * This texture gives access to the camera texture provided by a [CameraFeed].
 *
 * **Note:** Many cameras supply YCbCr images which need to be converted in a shader.
 *
*/
declare class CameraTexture extends Texture2D  {

  
/**
 * This texture gives access to the camera texture provided by a [CameraFeed].
 *
 * **Note:** Many cameras supply YCbCr images which need to be converted in a shader.
 *
*/
  new(): CameraTexture; 
  static "new"(): CameraTexture 


/** The ID of the [CameraFeed] for which we want to display the image. */
camera_feed_id: int;

/** Convenience property that gives access to the active property of the [CameraFeed]. */
camera_is_active: boolean;


/** Which image within the [CameraFeed] we want access to, important if the camera image is split in a Y and CbCr component. */
which_feed: int;



  connect<T extends SignalsOf<CameraTexture>>(signal: T, method: SignalFunction<CameraTexture[T]>): number;






}

