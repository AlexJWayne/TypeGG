
/**
 * An array specifically designed to hold 32-bit integer values. Packs data tightly, so it saves memory for large array sizes.
 *
 * **Note:** This type stores signed 32-bit integers, which means it can take values in the interval `[-2^31, 2^31 - 1]`, i.e. `[-2147483648, 2147483647]`. Exceeding those bounds will wrap around. In comparison, [int] uses signed 64-bit integers which can hold much larger values. If you need to pack 64-bit integers tightly, see [PackedInt64Array].
 *
*/
declare class PackedInt32Array {

  
/**
 * An array specifically designed to hold 32-bit integer values. Packs data tightly, so it saves memory for large array sizes.
 *
 * **Note:** This type stores signed 32-bit integers, which means it can take values in the interval `[-2^31, 2^31 - 1]`, i.e. `[-2147483648, 2147483647]`. Exceeding those bounds will wrap around. In comparison, [int] uses signed 64-bit integers which can hold much larger values. If you need to pack 64-bit integers tightly, see [PackedInt64Array].
 *
*/
  new(): PackedInt32Array; 
  static "new"(): PackedInt32Array 



/** Appends an element at the end of the array (alias of [method push_back]). */
append(): boolean;

/** Appends a [PackedInt32Array] at the end of this array. */
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

/** Returns the number of times an element is in the array. */
count(): int;

/** Creates a copy of the array, and returns it. */
duplicate(): PackedInt32Array;

/** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements. */
fill(): void;

/** Searches the array for a value and returns its index or [code]-1[/code] if not found. Optionally, the initial search index can be passed. */
find(): int;

/** Returns [code]true[/code] if the array contains [param value]. */
has(): boolean;

/** Inserts a new integer at a given position in the array. The position must be valid, or at the end of the array ([code]idx == size()[/code]). */
insert(): int;

/** Returns [code]true[/code] if the array is empty. */
is_empty(): boolean;

/** Appends a value to the array. */
push_back(): boolean;

/** Removes an element from the array by index. */
remove_at(): void;

/** Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. */
resize(): int;

/** Reverses the order of the elements in the array. */
reverse(): void;

/** Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array. */
rfind(): int;

/** Changes the integer at the given index. */
set(): void;

/** Returns the number of elements in the array. */
size(): int;

/**
 * Returns the slice of the [PackedInt32Array], from [param begin] (inclusive) to [param end] (exclusive), as a new [PackedInt32Array].
 *
 * The absolute value of [param begin] and [param end] will be clamped to the array size, so the default value for [param end] makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).
 *
 * If either [param begin] or [param end] are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).
 *
*/
slice(): PackedInt32Array;

/** Sorts the elements of the array in ascending order. */
sort(): void;

/**
 * Returns a copy of the data converted to a [PackedByteArray], where each element have been encoded as 4 bytes.
 *
 * The size of the new array will be `int32_array.size() * 4`.
 *
*/
to_byte_array(): PackedByteArray;

  connect<T extends SignalsOf<PackedInt32Array>>(signal: T, method: SignalFunction<PackedInt32Array[T]>): number;






}

