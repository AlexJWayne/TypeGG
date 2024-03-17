
/**
 * The [Rect2i] built-in [Variant] type represents an axis-aligned rectangle in a 2D space, using integer coordinates. It is defined by its [member position] and [member size], which are [Vector2i]. Because it does not rotate, it is frequently used for fast overlap tests (see [method intersects]).
 *
 * For floating-point coordinates, see [Rect2].
 *
 * **Note:** Negative values for [member size] are not supported. With negative size, most [Rect2i] methods do not work correctly. Use [method abs] to get an equivalent [Rect2i] with a non-negative size.
 *
 * **Note:** In a boolean context, a [Rect2i] evaluates to `false` if both [member position] and [member size] are zero (equal to [constant Vector2i.ZERO]). Otherwise, it always evaluates to `true`.
 *
*/
declare class Rect2i {

  
/**
 * The [Rect2i] built-in [Variant] type represents an axis-aligned rectangle in a 2D space, using integer coordinates. It is defined by its [member position] and [member size], which are [Vector2i]. Because it does not rotate, it is frequently used for fast overlap tests (see [method intersects]).
 *
 * For floating-point coordinates, see [Rect2].
 *
 * **Note:** Negative values for [member size] are not supported. With negative size, most [Rect2i] methods do not work correctly. Use [method abs] to get an equivalent [Rect2i] with a non-negative size.
 *
 * **Note:** In a boolean context, a [Rect2i] evaluates to `false` if both [member position] and [member size] are zero (equal to [constant Vector2i.ZERO]). Otherwise, it always evaluates to `true`.
 *
*/
  new(): Rect2i; 
  static "new"(): Rect2i 


/** The ending point. This is usually the bottom-right corner of the rectangle, and is equivalent to [code]position + size[/code]. Setting this point affects the [member size]. */
end: Vector2i;

/** The origin point. This is usually the top-left corner of the rectangle. */
position: Vector2i;

/**
 * The rectangle's width and height, starting from [member position]. Setting this value also affects the [member end] point.
 *
 * **Note:** It's recommended setting the width and height to non-negative values, as most methods in Godot assume that the [member position] is the top-left corner, and the [member end] is the bottom-right corner. To get an equivalent rectangle with non-negative size, use [method abs].
 *
*/
size: Vector2i;

/**
 * Returns a [Rect2i] equivalent to this rectangle, with its width and height modified to be non-negative values, and with its [member position] being the top-left corner of the rectangle.
 *
 * @example 
 * 
 * 
 * var rect = Rect2i(25, 25, -100, -50)
 * var absolute = rect.abs() # absolute is Rect2i(-75, -25, 100, 50)
 * 
 * 
 * var rect = new Rect2I(25, 25, -100, -50);
 * var absolute = rect.Abs(); // absolute is Rect2I(-75, -25, 100, 50)
 * 
 * @summary 
 * 
 *
 * **Note:** It's recommended to use this method when [member size] is negative, as most other methods in Godot assume that the [member position] is the top-left corner, and the [member end] is the bottom-right corner.
 *
*/
abs(): Rect2i;

/** Returns [code]true[/code] if this [Rect2i] completely encloses another one. */
encloses(): boolean;

/**
 * Returns a copy of this rectangle expanded to align the edges with the given [param to] point, if necessary.
 *
 * @example 
 * 
 * 
 * var rect = Rect2i(0, 0, 5, 2)
 * rect = rect.expand(Vector2i(10, 0)) # rect is Rect2i(0, 0, 10, 2)
 * rect = rect.expand(Vector2i(-5, 5)) # rect is Rect2i(-5, 0, 10, 5)
 * 
 * 
 * var rect = new Rect2I(0, 0, 5, 2);
 * rect = rect.Expand(new Vector2I(10, 0)); // rect is Rect2I(0, 0, 10, 2)
 * rect = rect.Expand(new Vector2I(-5, 5)); // rect is Rect2I(-5, 0, 10, 5)
 * 
 * @summary 
 * 
 *
*/
expand(): Rect2i;

/** Returns the rectangle's area. This is equivalent to [code]size.x * size.y[/code]. See also [method has_area]. */
get_area(): int;

/**
 * Returns the center point of the rectangle. This is the same as `position + (size / 2)`.
 *
 * **Note:** If the [member size] is odd, the result will be rounded towards [member position].
 *
*/
get_center(): Vector2i;

/**
 * Returns a copy of this rectangle extended on all sides by the given [param amount]. A negative [param amount] shrinks the rectangle instead. See also [method grow_individual] and [method grow_side].
 *
 * @example 
 * 
 * 
 * var a = Rect2i(4, 4, 8, 8).grow(4) # a is Rect2i(0, 0, 16, 16)
 * var b = Rect2i(0, 0, 8, 4).grow(2) # b is Rect2i(-2, -2, 12, 8)
 * 
 * 
 * var a = new Rect2I(4, 4, 8, 8).Grow(4); // a is Rect2I(0, 0, 16, 16)
 * var b = new Rect2I(0, 0, 8, 4).Grow(2); // b is Rect2I(-2, -2, 12, 8)
 * 
 * @summary 
 * 
 *
*/
grow(): Rect2i;

/** Returns a copy of this rectangle with its [param left], [param top], [param right], and [param bottom] sides extended by the given amounts. Negative values shrink the sides, instead. See also [method grow] and [method grow_side]. */
grow_individual(): Rect2i;

/** Returns a copy of this rectangle with its [param side] extended by the given [param amount] (see [enum Side] constants). A negative [param amount] shrinks the rectangle, instead. See also [method grow] and [method grow_individual]. */
grow_side(): Rect2i;

/** Returns [code]true[/code] if this rectangle has positive width and height. See also [method get_area]. */
has_area(): boolean;

/**
 * Returns `true` if the rectangle contains the given [param point]. By convention, points on the right and bottom edges are **not** included.
 *
 * **Note:** This method is not reliable for [Rect2i] with a **negative** [member size]. Use [method abs] first to get a valid rectangle.
 *
*/
has_point(): boolean;

/**
 * Returns the intersection between this rectangle and [param b]. If the rectangles do not intersect, returns an empty [Rect2i].
 *
 * @example 
 * 
 * 
 * var a = Rect2i(0, 0, 5, 10)
 * var b = Rect2i(2, 0, 8, 4)
 * var c = a.intersection(b) # c is Rect2i(2, 0, 3, 4)
 * 
 * 
 * var a = new Rect2I(0, 0, 5, 10);
 * var b = new Rect2I(2, 0, 8, 4);
 * var c = rect1.Intersection(rect2); // c is Rect2I(2, 0, 3, 4)
 * 
 * @summary 
 * 
 *
 * **Note:** If you only need to know whether two rectangles are overlapping, use [method intersects], instead.
 *
*/
intersection(): Rect2i;

/** Returns [code]true[/code] if this rectangle overlaps with the [param b] rectangle. The edges of both rectangles are excluded. */
intersects(): boolean;

/** Returns a [Rect2i] that encloses both this rectangle and [param b] around the edges. See also [method encloses]. */
merge(): Rect2i;

  connect<T extends SignalsOf<Rect2i>>(signal: T, method: SignalFunction<Rect2i[T]>): number;






}

