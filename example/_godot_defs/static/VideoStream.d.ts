
/**
 * Base resource type for all video streams. Classes that derive from [VideoStream] can all be used as resource types to play back videos in [VideoStreamPlayer].
 *
*/
declare class VideoStream extends Resource  {

  
/**
 * Base resource type for all video streams. Classes that derive from [VideoStream] can all be used as resource types to play back videos in [VideoStreamPlayer].
 *
*/
  new(): VideoStream; 
  static "new"(): VideoStream 


/**
 * The video file path or URI that this [VideoStream] resource handles.
 *
 * For [VideoStreamTheora], this filename should be an Ogg Theora video file with the `.ogv` extension.
 *
*/
file: string;

/** Called when the video starts playing, to initialize and return a subclass of [VideoStreamPlayback]. */
protected _instantiate_playback(): VideoStreamPlayback;

  connect<T extends SignalsOf<VideoStream>>(signal: T, method: SignalFunction<VideoStream[T]>): number;






}

