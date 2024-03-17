
/**
 * StreamPeer is an abstract base class mostly used for stream-based protocols (such as TCP). It provides an API for sending and receiving data through streams as raw data or strings.
 *
 * **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.
 *
*/
declare class StreamPeer extends RefCounted  {

  
/**
 * StreamPeer is an abstract base class mostly used for stream-based protocols (such as TCP). It provides an API for sending and receiving data through streams as raw data or strings.
 *
 * **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.
 *
*/
  new(): StreamPeer; 
  static "new"(): StreamPeer 


/** If [code]true[/code], this [StreamPeer] will using big-endian format for encoding and decoding. */
big_endian: boolean;

/** Gets a signed byte from the stream. */
get_8(): int;

/** Gets a signed 16-bit value from the stream. */
get_16(): int;

/** Gets a signed 32-bit value from the stream. */
get_32(): int;

/** Gets a signed 64-bit value from the stream. */
get_64(): int;

/** Returns the number of bytes this [StreamPeer] has available. */
get_available_bytes(): int;

/** Returns a chunk data with the received bytes. The number of bytes to be received can be requested in the [param bytes] argument. If not enough bytes are available, the function will block until the desired amount is received. This function returns two values, an [enum Error] code and a data array. */
get_data(): any[];

/** Gets a double-precision float from the stream. */
get_double(): float;

/** Gets a single-precision float from the stream. */
get_float(): float;

/** Returns a chunk data with the received bytes. The number of bytes to be received can be requested in the "bytes" argument. If not enough bytes are available, the function will return how many were actually received. This function returns two values, an [enum Error] code, and a data array. */
get_partial_data(): any[];

/** Gets an ASCII string with byte-length [param bytes] from the stream. If [param bytes] is negative (default) the length will be read from the stream using the reverse process of [method put_string]. */
get_string(): string;

/** Gets an unsigned byte from the stream. */
get_u8(): int;

/** Gets an unsigned 16-bit value from the stream. */
get_u16(): int;

/** Gets an unsigned 32-bit value from the stream. */
get_u32(): int;

/** Gets an unsigned 64-bit value from the stream. */
get_u64(): int;

/** Gets a UTF-8 string with byte-length [param bytes] from the stream (this decodes the string sent as UTF-8). If [param bytes] is negative (default) the length will be read from the stream using the reverse process of [method put_utf8_string]. */
get_utf8_string(): string;

/**
 * Gets a Variant from the stream. If [param allow_objects] is `true`, decoding objects is allowed.
 *
 * Internally, this uses the same decoding mechanism as the [method @GlobalScope.bytes_to_var] method.
 *
 * **Warning:** Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats such as remote code execution.
 *
*/
get_var(): any;

/** Puts a signed byte into the stream. */
put_8(): void;

/** Puts a signed 16-bit value into the stream. */
put_16(): void;

/** Puts a signed 32-bit value into the stream. */
put_32(): void;

/** Puts a signed 64-bit value into the stream. */
put_64(): void;

/** Sends a chunk of data through the connection, blocking if necessary until the data is done sending. This function returns an [enum Error] code. */
put_data(): int;

/** Puts a double-precision float into the stream. */
put_double(): void;

/** Puts a single-precision float into the stream. */
put_float(): void;

/** Sends a chunk of data through the connection. If all the data could not be sent at once, only part of it will. This function returns two values, an [enum Error] code and an integer, describing how much data was actually sent. */
put_partial_data(): any[];

/**
 * Puts a zero-terminated ASCII string into the stream prepended by a 32-bit unsigned integer representing its size.
 *
 * **Note:** To put an ASCII string without prepending its size, you can use [method put_data]:
 *
 * @example 
 * 
 * 
 * put_data("Hello world".to_ascii_buffer())
 * 
 * 
 * PutData("Hello World".ToAsciiBuffer());
 * 
 * @summary 
 * 
 *
*/
put_string(): void;

/** Puts an unsigned byte into the stream. */
put_u8(): void;

/** Puts an unsigned 16-bit value into the stream. */
put_u16(): void;

/** Puts an unsigned 32-bit value into the stream. */
put_u32(): void;

/** Puts an unsigned 64-bit value into the stream. */
put_u64(): void;

/**
 * Puts a zero-terminated UTF-8 string into the stream prepended by a 32 bits unsigned integer representing its size.
 *
 * **Note:** To put a UTF-8 string without prepending its size, you can use [method put_data]:
 *
 * @example 
 * 
 * 
 * put_data("Hello world".to_utf8_buffer())
 * 
 * 
 * PutData("Hello World".ToUtf8Buffer());
 * 
 * @summary 
 * 
 *
*/
put_utf8_string(): void;

/**
 * Puts a Variant into the stream. If [param full_objects] is `true` encoding objects is allowed (and can potentially include code).
 *
 * Internally, this uses the same encoding mechanism as the [method @GlobalScope.var_to_bytes] method.
 *
*/
put_var(): void;

  connect<T extends SignalsOf<StreamPeer>>(signal: T, method: SignalFunction<StreamPeer[T]>): number;






}

