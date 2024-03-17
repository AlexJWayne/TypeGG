
/**
 * Provides data transformation and encoding utility functions.
 *
*/
declare class MarshallsClass extends Object  {

  
/**
 * Provides data transformation and encoding utility functions.
 *
*/
  new(): MarshallsClass; 
  static "new"(): MarshallsClass 



/** Returns a decoded [PackedByteArray] corresponding to the Base64-encoded string [param base64_str]. */
base64_to_raw(): PackedByteArray;

/** Returns a decoded string corresponding to the Base64-encoded string [param base64_str]. */
base64_to_utf8(): string;

/**
 * Returns a decoded [Variant] corresponding to the Base64-encoded string [param base64_str]. If [param allow_objects] is `true`, decoding objects is allowed.
 *
 * Internally, this uses the same decoding mechanism as the [method @GlobalScope.bytes_to_var] method.
 *
 * **Warning:** Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats such as remote code execution.
 *
*/
base64_to_variant(): any;

/** Returns a Base64-encoded string of a given [PackedByteArray]. */
raw_to_base64(): string;

/** Returns a Base64-encoded string of the UTF-8 string [param utf8_str]. */
utf8_to_base64(): string;

/**
 * Returns a Base64-encoded string of the [Variant] [param variant]. If [param full_objects] is `true`, encoding objects is allowed (and can potentially include code).
 *
 * Internally, this uses the same encoding mechanism as the [method @GlobalScope.var_to_bytes] method.
 *
*/
variant_to_base64(): string;

  connect<T extends SignalsOf<MarshallsClass>>(signal: T, method: SignalFunction<MarshallsClass[T]>): number;






}

