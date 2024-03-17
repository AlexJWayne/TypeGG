
/**
 * PacketPeer is an abstraction and base class for packet-based protocols (such as UDP). It provides an API for sending and receiving packets both as raw data or variables. This makes it easy to transfer data over a protocol, without having to encode data as low-level bytes or having to worry about network ordering.
 *
 * **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.
 *
*/
declare class PacketPeer extends RefCounted  {

  
/**
 * PacketPeer is an abstraction and base class for packet-based protocols (such as UDP). It provides an API for sending and receiving packets both as raw data or variables. This makes it easy to transfer data over a protocol, without having to encode data as low-level bytes or having to worry about network ordering.
 *
 * **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.
 *
*/
  new(): PacketPeer; 
  static "new"(): PacketPeer 


/**
 * Maximum buffer size allowed when encoding [Variant]s. Raise this value to support heavier memory allocations.
 *
 * The [method put_var] method allocates memory on the stack, and the buffer used will grow automatically to the closest power of two to match the size of the [Variant]. If the [Variant] is bigger than [member encode_buffer_max_size], the method will error out with [constant ERR_OUT_OF_MEMORY].
 *
*/
encode_buffer_max_size: int;

/** Returns the number of packets currently available in the ring-buffer. */
get_available_packet_count(): int;

/** Gets a raw packet. */
get_packet(): PackedByteArray;

/** Returns the error state of the last packet received (via [method get_packet] and [method get_var]). */
get_packet_error(): int;

/**
 * Gets a Variant. If [param allow_objects] is `true`, decoding objects is allowed.
 *
 * Internally, this uses the same decoding mechanism as the [method @GlobalScope.bytes_to_var] method.
 *
 * **Warning:** Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats such as remote code execution.
 *
*/
get_var(): any;

/** Sends a raw packet. */
put_packet(): int;

/**
 * Sends a [Variant] as a packet. If [param full_objects] is `true`, encoding objects is allowed (and can potentially include code).
 *
 * Internally, this uses the same encoding mechanism as the [method @GlobalScope.var_to_bytes] method.
 *
*/
put_var(): int;

  connect<T extends SignalsOf<PacketPeer>>(signal: T, method: SignalFunction<PacketPeer[T]>): number;






}

