
/**
 * When packing nested containers using [PackedDataContainer], they are recursively packed into [PackedDataContainerRef] (only applies to [Array] and [Dictionary]). Their data can be retrieved the same way as from [PackedDataContainer].
 *
 * @example 
 * 
 * var packed = PackedDataContainer.new()
 * packed.pack([1, 2, 3, ["abc", "def"], 4, 5, 6])
 * for element in packed:
 *     if element is PackedDataContainerRef:
 *         for subelement in element:
 *             print("::", subelement)
 *     else:
 *         print(element)
 * # Prints:
 * # 1
 * # 2
 * # 3
 * # ::abc
 * # ::def
 * # 4
 * # 5
 * # 6
 * @summary 
 * 
 *
*/
declare class PackedDataContainerRef extends RefCounted  {

  
/**
 * When packing nested containers using [PackedDataContainer], they are recursively packed into [PackedDataContainerRef] (only applies to [Array] and [Dictionary]). Their data can be retrieved the same way as from [PackedDataContainer].
 *
 * @example 
 * 
 * var packed = PackedDataContainer.new()
 * packed.pack([1, 2, 3, ["abc", "def"], 4, 5, 6])
 * for element in packed:
 *     if element is PackedDataContainerRef:
 *         for subelement in element:
 *             print("::", subelement)
 *     else:
 *         print(element)
 * # Prints:
 * # 1
 * # 2
 * # 3
 * # ::abc
 * # ::def
 * # 4
 * # 5
 * # 6
 * @summary 
 * 
 *
*/
  new(): PackedDataContainerRef; 
  static "new"(): PackedDataContainerRef 



/** Returns the size of the packed container (see [method Array.size] and [method Dictionary.size]). */
size(): int;

  connect<T extends SignalsOf<PackedDataContainerRef>>(signal: T, method: SignalFunction<PackedDataContainerRef[T]>): number;






}

