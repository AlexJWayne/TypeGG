
/**
 * An array specifically designed to hold [Vector2]. Packs data tightly, so it saves memory for large array sizes.
 *
*/
declare class PackedVector2Array {

  
/**
 * An array specifically designed to hold [Vector2]. Packs data tightly, so it saves memory for large array sizes.
 *
*/
  new(): PackedVector2Array; 
  static "new"(): PackedVector2Array 



/** Appends an element at the end of the array (alias of [method push_back]). */
append(): boolean;

/** Appends a [PackedVector2Array] at the end of this array. */
append_array(): void;

/**
 * Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a [param before] specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.
 *
 * **Note:** Calling [method bsearch] on an unsorted array results in unexpected behavior.
 *
 * **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.
 *
*/
bsearch(): int;

/** Clears the array. This is equivalent to using [method resize] with a size of [code]0[/code]. */
clear(): void;

/**
 * Returns the number of times an element is in the array.
 *
 * **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.
 *
*/
count(): int;

/** Creates a copy of the array, and returns it. */
duplicate(): PackedVector2Array;

/** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements. */
fill(): void;

/**
 * Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed.
 *
 * **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.
 *
*/
find(): int;

/**
 * Returns `true` if the array contains [param value].
 *
 * **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.
 *
*/
has(): boolean;

/** Inserts a new element at a given position in the array. The position must be valid, or at the end of the array ([code]idx == size()[/code]). */
insert(): int;

/** Returns [code]true[/code] if the array is empty. */
is_empty(): boolean;

/** Inserts a [Vector2] at the end. */
push_back(): boolean;

/** Removes an element from the array by index. */
remove_at(): void;

/** Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. */
resize(): int;

/** Reverses the order of the elements in the array. */
reverse(): void;

/**
 * Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array.
 *
 * **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.
 *
*/
rfind(): int;

/** Changes the [Vector2] at the given index. */
set(): void;

/** Returns the number of elements in the array. */
size(): int;

/**
 * Returns the slice of the [PackedVector2Array], from [param begin] (inclusive) to [param end] (exclusive), as a new [PackedVector2Array].
 *
 * The absolute value of [param begin] and [param end] will be clamped to the array size, so the default value for [param end] makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).
 *
 * If either [param begin] or [param end] are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).
 *
*/
slice(): PackedVector2Array;

/**
 * Sorts the elements of the array in ascending order.
 *
 * **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.
 *
*/
sort(): void;

/** Returns a [PackedByteArray] with each vector encoded as bytes. */
to_byte_array(): PackedByteArray;

  connect<T extends SignalsOf<PackedVector2Array>>(signal: T, method: SignalFunction<PackedVector2Array[T]>): number;






}

