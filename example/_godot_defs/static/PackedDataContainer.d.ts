
/**
 * [PackedDataContainer] can be used to efficiently store data from untyped containers. The data is packed into raw bytes and can be saved to file. Only [Array] and [Dictionary] can be stored this way.
 *
 * You can retrieve the data by iterating on the container, which will work as if iterating on the packed data itself. If the packed container is a [Dictionary], the data can be retrieved by key names ([String]/[StringName] only).
 *
 * @example 
 * 
 * var data = { "key": "value", "another_key": 123, "lock": Vector2() }
 * var packed = PackedDataContainer.new()
 * packed.pack(data)
 * ResourceSaver.save(packed, "packed_data.res")
 * @summary 
 * 
 *
 * @example 
 * 
 * var container = load("packed_data.res")
 * for key in container:
 *     prints(key, container[key])
 * # Prints:
 * # key value
 * # lock (0, 0)
 * # another_key 123
 * @summary 
 * 
 *
 * Nested containers will be packed recursively. While iterating, they will be returned as [PackedDataContainerRef].
 *
*/
declare class PackedDataContainer extends Resource  {

  
/**
 * [PackedDataContainer] can be used to efficiently store data from untyped containers. The data is packed into raw bytes and can be saved to file. Only [Array] and [Dictionary] can be stored this way.
 *
 * You can retrieve the data by iterating on the container, which will work as if iterating on the packed data itself. If the packed container is a [Dictionary], the data can be retrieved by key names ([String]/[StringName] only).
 *
 * @example 
 * 
 * var data = { "key": "value", "another_key": 123, "lock": Vector2() }
 * var packed = PackedDataContainer.new()
 * packed.pack(data)
 * ResourceSaver.save(packed, "packed_data.res")
 * @summary 
 * 
 *
 * @example 
 * 
 * var container = load("packed_data.res")
 * for key in container:
 *     prints(key, container[key])
 * # Prints:
 * # key value
 * # lock (0, 0)
 * # another_key 123
 * @summary 
 * 
 *
 * Nested containers will be packed recursively. While iterating, they will be returned as [PackedDataContainerRef].
 *
*/
  new(): PackedDataContainer; 
  static "new"(): PackedDataContainer 



/**
 * Packs the given container into a binary representation. The [param value] must be either [Array] or [Dictionary], any other type will result in invalid data error.
 *
 * **Note:** Subsequent calls to this method will overwrite the existing data.
 *
*/
pack(): int;

/** Returns the size of the packed container (see [method Array.size] and [method Dictionary.size]). */
size(): int;

  connect<T extends SignalsOf<PackedDataContainer>>(signal: T, method: SignalFunction<PackedDataContainer[T]>): number;






}

