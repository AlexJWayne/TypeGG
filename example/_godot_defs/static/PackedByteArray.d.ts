
/**
 * An array specifically designed to hold bytes. Packs data tightly, so it saves memory for large array sizes.
 *
 * [PackedByteArray] also provides methods to encode/decode various types to/from bytes. The way values are encoded is an implementation detail and shouldn't be relied upon when interacting with external apps.
 *
*/
declare class PackedByteArray {

  
/**
 * An array specifically designed to hold bytes. Packs data tightly, so it saves memory for large array sizes.
 *
 * [PackedByteArray] also provides methods to encode/decode various types to/from bytes. The way values are encoded is an implementation detail and shouldn't be relied upon when interacting with external apps.
 *
*/
  new(): PackedByteArray; 
  static "new"(): PackedByteArray 



/** Appends an element at the end of the array (alias of [method push_back]). */
append(): boolean;

/** Appends a [PackedByteArray] at the end of this array. */
append_array(): void;

/**
 * Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a [param before] specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.
 *
 * **Note:** Calling [method bsearch] on an unsorted array results in unexpected behavior.
 *
*/
bsearch(): int;

/** Clears the array. This is equivalent to using [method resize] with a size of [code]0[/code]. */
clear(): void;

/** Returns a new [PackedByteArray] with the data compressed. Set the compression mode using one of [enum FileAccess.CompressionMode]'s constants. */
compress(): PackedByteArray;

/** Returns the number of times an element is in the array. */
count(): int;

/** Decodes a 64-bit floating point number from the bytes starting at [param byte_offset]. Fails if the byte count is insufficient. Returns [code]0.0[/code] if a valid number can't be decoded. */
decode_double(): float;

/** Decodes a 32-bit floating point number from the bytes starting at [param byte_offset]. Fails if the byte count is insufficient. Returns [code]0.0[/code] if a valid number can't be decoded. */
decode_float(): float;

/** Decodes a 16-bit floating point number from the bytes starting at [param byte_offset]. Fails if the byte count is insufficient. Returns [code]0.0[/code] if a valid number can't be decoded. */
decode_half(): float;

/** Decodes a 8-bit signed integer number from the bytes starting at [param byte_offset]. Fails if the byte count is insufficient. Returns [code]0[/code] if a valid number can't be decoded. */
decode_s8(): int;

/** Decodes a 16-bit signed integer number from the bytes starting at [param byte_offset]. Fails if the byte count is insufficient. Returns [code]0[/code] if a valid number can't be decoded. */
decode_s16(): int;

/** Decodes a 32-bit signed integer number from the bytes starting at [param byte_offset]. Fails if the byte count is insufficient. Returns [code]0[/code] if a valid number can't be decoded. */
decode_s32(): int;

/** Decodes a 64-bit signed integer number from the bytes starting at [param byte_offset]. Fails if the byte count is insufficient. Returns [code]0[/code] if a valid number can't be decoded. */
decode_s64(): int;

/** Decodes a 8-bit unsigned integer number from the bytes starting at [param byte_offset]. Fails if the byte count is insufficient. Returns [code]0[/code] if a valid number can't be decoded. */
decode_u8(): int;

/** Decodes a 16-bit unsigned integer number from the bytes starting at [param byte_offset]. Fails if the byte count is insufficient. Returns [code]0[/code] if a valid number can't be decoded. */
decode_u16(): int;

/** Decodes a 32-bit unsigned integer number from the bytes starting at [param byte_offset]. Fails if the byte count is insufficient. Returns [code]0[/code] if a valid number can't be decoded. */
decode_u32(): int;

/** Decodes a 64-bit unsigned integer number from the bytes starting at [param byte_offset]. Fails if the byte count is insufficient. Returns [code]0[/code] if a valid number can't be decoded. */
decode_u64(): int;

/** Decodes a [Variant] from the bytes starting at [param byte_offset]. Returns [code]null[/code] if a valid variant can't be decoded or the value is [Object]-derived and [param allow_objects] is [code]false[/code]. */
decode_var(): any;

/** Decodes a size of a [Variant] from the bytes starting at [param byte_offset]. Requires at least 4 bytes of data starting at the offset, otherwise fails. */
decode_var_size(): int;

/** Returns a new [PackedByteArray] with the data decompressed. Set [param buffer_size] to the size of the uncompressed data. Set the compression mode using one of [enum FileAccess.CompressionMode]'s constants. */
decompress(): PackedByteArray;

/**
 * Returns a new [PackedByteArray] with the data decompressed. Set the compression mode using one of [enum FileAccess.CompressionMode]'s constants. **This method only accepts brotli, gzip, and deflate compression modes.**
 *
 * This method is potentially slower than [method decompress], as it may have to re-allocate its output buffer multiple times while decompressing, whereas [method decompress] knows it's output buffer size from the beginning.
 *
 * GZIP has a maximal compression ratio of 1032:1, meaning it's very possible for a small compressed payload to decompress to a potentially very large output. To guard against this, you may provide a maximum size this function is allowed to allocate in bytes via [param max_output_size]. Passing -1 will allow for unbounded output. If any positive value is passed, and the decompression exceeds that amount in bytes, then an error will be returned.
 *
*/
decompress_dynamic(): PackedByteArray;

/** Creates a copy of the array, and returns it. */
duplicate(): PackedByteArray;

/** Encodes a 64-bit floating point number as bytes at the index of [param byte_offset] bytes. The array must have at least 8 bytes of allocated space, starting at the offset. */
encode_double(): void;

/** Encodes a 32-bit floating point number as bytes at the index of [param byte_offset] bytes. The array must have at least 4 bytes of space, starting at the offset. */
encode_float(): void;

/** Encodes a 16-bit floating point number as bytes at the index of [param byte_offset] bytes. The array must have at least 2 bytes of space, starting at the offset. */
encode_half(): void;

/** Encodes a 8-bit signed integer number (signed byte) at the index of [param byte_offset] bytes. The array must have at least 1 byte of space, starting at the offset. */
encode_s8(): void;

/** Encodes a 16-bit signed integer number as bytes at the index of [param byte_offset] bytes. The array must have at least 2 bytes of space, starting at the offset. */
encode_s16(): void;

/** Encodes a 32-bit signed integer number as bytes at the index of [param byte_offset] bytes. The array must have at least 4 bytes of space, starting at the offset. */
encode_s32(): void;

/** Encodes a 64-bit signed integer number as bytes at the index of [param byte_offset] bytes. The array must have at least 8 bytes of space, starting at the offset. */
encode_s64(): void;

/** Encodes a 8-bit unsigned integer number (byte) at the index of [param byte_offset] bytes. The array must have at least 1 byte of space, starting at the offset. */
encode_u8(): void;

/** Encodes a 16-bit unsigned integer number as bytes at the index of [param byte_offset] bytes. The array must have at least 2 bytes of space, starting at the offset. */
encode_u16(): void;

/** Encodes a 32-bit unsigned integer number as bytes at the index of [param byte_offset] bytes. The array must have at least 4 bytes of space, starting at the offset. */
encode_u32(): void;

/** Encodes a 64-bit unsigned integer number as bytes at the index of [param byte_offset] bytes. The array must have at least 8 bytes of space, starting at the offset. */
encode_u64(): void;

/** Encodes a [Variant] at the index of [param byte_offset] bytes. A sufficient space must be allocated, depending on the encoded variant's size. If [param allow_objects] is [code]false[/code], [Object]-derived values are not permitted and will instead be serialized as ID-only. */
encode_var(): int;

/** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements. */
fill(): void;

/** Searches the array for a value and returns its index or [code]-1[/code] if not found. Optionally, the initial search index can be passed. */
find(): int;

/** Converts ASCII/Latin-1 encoded array to [String]. Fast alternative to [method get_string_from_utf8] if the content is ASCII/Latin-1 only. Unlike the UTF-8 function this function maps every byte to a character in the array. Multibyte sequences will not be interpreted correctly. For parsing user input always use [method get_string_from_utf8]. This is the inverse of [method String.to_ascii_buffer]. */
get_string_from_ascii(): string;

/** Converts UTF-8 encoded array to [String]. Slower than [method get_string_from_ascii] but supports UTF-8 encoded data. Use this function if you are unsure about the source of the data. For user input this function should always be preferred. Returns empty string if source array is not valid UTF-8 string. This is the inverse of [method String.to_utf8_buffer]. */
get_string_from_utf8(): string;

/** Converts UTF-16 encoded array to [String]. If the BOM is missing, system endianness is assumed. Returns empty string if source array is not valid UTF-16 string. This is the inverse of [method String.to_utf16_buffer]. */
get_string_from_utf16(): string;

/** Converts UTF-32 encoded array to [String]. System endianness is assumed. Returns empty string if source array is not valid UTF-32 string. This is the inverse of [method String.to_utf32_buffer]. */
get_string_from_utf32(): string;

/** Converts wide character ([code]wchar_t[/code], UTF-16 on Windows, UTF-32 on other platforms) encoded array to [String]. Returns empty string if source array is not valid wide string. This is the inverse of [method String.to_wchar_buffer]. */
get_string_from_wchar(): string;

/** Returns [code]true[/code] if the array contains [param value]. */
has(): boolean;

/** Returns [code]true[/code] if a valid [Variant] value can be decoded at the [param byte_offset]. Returns [code]false[/code] otherwise or when the value is [Object]-derived and [param allow_objects] is [code]false[/code]. */
has_encoded_var(): boolean;

/**
 * Returns a hexadecimal representation of this array as a [String].
 *
 * @example 
 * 
 * 
 * var array = PackedByteArray([11, 46, 255])
 * print(array.hex_encode()) # Prints: 0b2eff
 * 
 * 
 * var array = new byte[] {11, 46, 255};
 * GD.Print(array.HexEncode()); // Prints: 0b2eff
 * 
 * @summary 
 * 
 *
*/
hex_encode(): string;

/** Inserts a new element at a given position in the array. The position must be valid, or at the end of the array ([code]idx == size()[/code]). */
insert(): int;

/** Returns [code]true[/code] if the array is empty. */
is_empty(): boolean;

/** Appends an element at the end of the array. */
push_back(): boolean;

/** Removes an element from the array by index. */
remove_at(): void;

/** Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. */
resize(): int;

/** Reverses the order of the elements in the array. */
reverse(): void;

/** Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array. */
rfind(): int;

/** Changes the byte at the given index. */
set(): void;

/** Returns the number of elements in the array. */
size(): int;

/**
 * Returns the slice of the [PackedByteArray], from [param begin] (inclusive) to [param end] (exclusive), as a new [PackedByteArray].
 *
 * The absolute value of [param begin] and [param end] will be clamped to the array size, so the default value for [param end] makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).
 *
 * If either [param begin] or [param end] are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).
 *
*/
slice(): PackedByteArray;

/** Sorts the elements of the array in ascending order. */
sort(): void;

/**
 * Returns a copy of the data converted to a [PackedFloat32Array], where each block of 4 bytes has been converted to a 32-bit float (C++ [code skip-lint]float`).
 *
 * The size of the input array must be a multiple of 4 (size of 32-bit float). The size of the new array will be `byte_array.size() / 4`.
 *
 * If the original data can't be converted to 32-bit floats, the resulting data is undefined.
 *
*/
to_float32_array(): PackedFloat32Array;

/**
 * Returns a copy of the data converted to a [PackedFloat64Array], where each block of 8 bytes has been converted to a 64-bit float (C++ `double`, Godot [float]).
 *
 * The size of the input array must be a multiple of 8 (size of 64-bit double). The size of the new array will be `byte_array.size() / 8`.
 *
 * If the original data can't be converted to 64-bit floats, the resulting data is undefined.
 *
*/
to_float64_array(): PackedFloat64Array;

/**
 * Returns a copy of the data converted to a [PackedInt32Array], where each block of 4 bytes has been converted to a signed 32-bit integer (C++ `int32_t`).
 *
 * The size of the input array must be a multiple of 4 (size of 32-bit integer). The size of the new array will be `byte_array.size() / 4`.
 *
 * If the original data can't be converted to signed 32-bit integers, the resulting data is undefined.
 *
*/
to_int32_array(): PackedInt32Array;

/**
 * Returns a copy of the data converted to a [PackedInt64Array], where each block of 8 bytes has been converted to a signed 64-bit integer (C++ `int64_t`, Godot [int]).
 *
 * The size of the input array must be a multiple of 8 (size of 64-bit integer). The size of the new array will be `byte_array.size() / 8`.
 *
 * If the original data can't be converted to signed 64-bit integers, the resulting data is undefined.
 *
*/
to_int64_array(): PackedInt64Array;

  connect<T extends SignalsOf<PackedByteArray>>(signal: T, method: SignalFunction<PackedByteArray[T]>): number;






}

