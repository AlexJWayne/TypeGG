
/**
 * A data buffer stream peer that uses a byte array as the stream. This object can be used to handle binary data from network sessions. To handle binary data stored in files, [FileAccess] can be used directly.
 *
 * A [StreamPeerBuffer] object keeps an internal cursor which is the offset in bytes to the start of the buffer. Get and put operations are performed at the cursor position and will move the cursor accordingly.
 *
*/
declare class StreamPeerBuffer extends StreamPeer  {

  
/**
 * A data buffer stream peer that uses a byte array as the stream. This object can be used to handle binary data from network sessions. To handle binary data stored in files, [FileAccess] can be used directly.
 *
 * A [StreamPeerBuffer] object keeps an internal cursor which is the offset in bytes to the start of the buffer. Get and put operations are performed at the cursor position and will move the cursor accordingly.
 *
*/
  new(): StreamPeerBuffer; 
  static "new"(): StreamPeerBuffer 


/** The underlying data buffer. Setting this value resets the cursor. */
data_array: PackedByteArray;

/** Clears the [member data_array] and resets the cursor. */
clear(): void;

/** Returns a new [StreamPeerBuffer] with the same [member data_array] content. */
duplicate(): StreamPeerBuffer;

/** Returns the current cursor position. */
get_position(): int;

/** Returns the size of [member data_array]. */
get_size(): int;

/** Resizes the [member data_array]. This [i]doesn't[/i] update the cursor. */
resize(): void;

/** Moves the cursor to the specified position. [param position] must be a valid index of [member data_array]. */
seek(): void;

  connect<T extends SignalsOf<StreamPeerBuffer>>(signal: T, method: SignalFunction<StreamPeerBuffer[T]>): number;






}

