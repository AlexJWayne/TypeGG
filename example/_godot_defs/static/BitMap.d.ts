
/**
 * A two-dimensional array of boolean values, can be used to efficiently store a binary matrix (every matrix element takes only one bit) and query the values using natural cartesian coordinates.
 *
*/
declare class BitMap extends Resource  {

  
/**
 * A two-dimensional array of boolean values, can be used to efficiently store a binary matrix (every matrix element takes only one bit) and query the values using natural cartesian coordinates.
 *
*/
  new(): BitMap; 
  static "new"(): BitMap 



/** Returns an image of the same size as the bitmap and with a [enum Image.Format] of type [constant Image.FORMAT_L8]. [code]true[/code] bits of the bitmap are being converted into white pixels, and [code]false[/code] bits into black. */
convert_to_image(): Image;

/** Creates a bitmap with the specified size, filled with [code]false[/code]. */
create(): void;

/** Creates a bitmap that matches the given image dimensions, every element of the bitmap is set to [code]false[/code] if the alpha value of the image at that position is equal to [param threshold] or less, and [code]true[/code] in other case. */
create_from_image_alpha(): void;

/** Returns bitmap's value at the specified position. */
get_bit(): boolean;

/** Returns bitmap's value at the specified position. */
get_bitv(): boolean;

/** Returns bitmap's dimensions. */
get_size(): Vector2i;

/** Returns the number of bitmap elements that are set to [code]true[/code]. */
get_true_bit_count(): int;

/** Applies morphological dilation or erosion to the bitmap. If [param pixels] is positive, dilation is applied to the bitmap. If [param pixels] is negative, erosion is applied to the bitmap. [param rect] defines the area where the morphological operation is applied. Pixels located outside the [param rect] are unaffected by [method grow_mask]. */
grow_mask(): void;

/**
 * Creates an [Array] of polygons covering a rectangular portion of the bitmap. It uses a marching squares algorithm, followed by Ramer-Douglas-Peucker (RDP) reduction of the number of vertices. Each polygon is described as a [PackedVector2Array] of its vertices.
 *
 * To get polygons covering the whole bitmap, pass:
 *
 * @example 
 * 
 * Rect2(Vector2(), get_size())
 * @summary 
 * 
 *
 * [param epsilon] is passed to RDP to control how accurately the polygons cover the bitmap: a lower [param epsilon] corresponds to more points in the polygons.
 *
*/
opaque_to_polygons(): PackedVector2Array[];

/** Resizes the image to [param new_size]. */
resize(): void;

/** Sets the bitmap's element at the specified position, to the specified value. */
set_bit(): void;

/** Sets a rectangular portion of the bitmap to the specified value. */
set_bit_rect(): void;

/** Sets the bitmap's element at the specified position, to the specified value. */
set_bitv(): void;

  connect<T extends SignalsOf<BitMap>>(signal: T, method: SignalFunction<BitMap[T]>): number;






}

