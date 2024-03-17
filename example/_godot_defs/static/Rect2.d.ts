
/**
 * The [Rect2] built-in [Variant] type represents an axis-aligned rectangle in a 2D space. It is defined by its [member position] and [member size], which are [Vector2]. It is frequently used for fast overlap tests (see [method intersects]). Although [Rect2] itself is axis-aligned, it can be combined with [Transform2D] to represent a rotated or skewed rectangle.
 *
 * For integer coordinates, use [Rect2i]. The 3D equivalent to [Rect2] is [AABB].
 *
 * **Note:** Negative values for [member size] are not supported. With negative size, most [Rect2] methods do not work correctly. Use [method abs] to get an equivalent [Rect2] with a non-negative size.
 *
 * **Note:** In a boolean context, a [Rect2] evaluates to `false` if both [member position] and [member size] are zero (equal to [constant Vector2.ZERO]). Otherwise, it always evaluates to `true`.
 *
*/
declare class Rect2Constructor {

  
/**
 * The [Rect2] built-in [Variant] type represents an axis-aligned rectangle in a 2D space. It is defined by its [member position] and [member size], which are [Vector2]. It is frequently used for fast overlap tests (see [method intersects]). Although [Rect2] itself is axis-aligned, it can be combined with [Transform2D] to represent a rotated or skewed rectangle.
 *
 * For integer coordinates, use [Rect2i]. The 3D equivalent to [Rect2] is [AABB].
 *
 * **Note:** Negative values for [member size] are not supported. With negative size, most [Rect2] methods do not work correctly. Use [method abs] to get an equivalent [Rect2] with a non-negative size.
 *
 * **Note:** In a boolean context, a [Rect2] evaluates to `false` if both [member position] and [member size] are zero (equal to [constant Vector2.ZERO]). Otherwise, it always evaluates to `true`.
 *
*/


/** The ending point. This is usually the bottom-right corner of the rectangle, and is equivalent to [code]position + size[/code]. Setting this point affects the [member size]. */
end: Vector2;

/** The origin point. This is usually the top-left corner of the rectangle. */
position: Vector2;

/**
 * The rectangle's width and height, starting from [member position]. Setting this value also affects the [member end] point.
 *
 * **Note:** It's recommended setting the width and height to non-negative values, as most methods in Godot assume that the [member position] is the top-left corner, and the [member end] is the bottom-right corner. To get an equivalent rectangle with non-negative size, use [method abs].
 *
*/
size: Vector2;

/**
 * Returns a [Rect2] equivalent to this rectangle, with its width and height modified to be non-negative values, and with its [member position] being the top-left corner of the rectangle.
 *
 * @example 
 * 
 * 
 * var rect = Rect2(25, 25, -100, -50)
 * var absolute = rect.abs() # absolute is Rect2(-75, -25, 100, 50)
 * 
 * 
 * var rect = new Rect2(25, 25, -100, -50);
 * var absolute = rect.Abs(); // absolute is Rect2(-75, -25, 100, 50)
 * 
 * @summary 
 * 
 *
 * **Note:** It's recommended to use this method when [member size] is negative, as most other methods in Godot assume that the [member position] is the top-left corner, and the [member end] is the bottom-right corner.
 *
*/
abs(): Rect2;

/** Returns [code]true[/code] if this rectangle [i]completely[/i] encloses the [param b] rectangle. */
encloses(): boolean;

/**
 * Returns a copy of this rectangle expanded to align the edges with the given [param to] point, if necessary.
 *
 * @example 
 * 
 * 
 * var rect = Rect2(0, 0, 5, 2)
 * rect = rect.expand(Vector2(10, 0)) # rect is Rect2(0, 0, 10, 2)
 * rect = rect.expand(Vector2(-5, 5)) # rect is Rect2(-5, 0, 10, 5)
 * 
 * 
 * var rect = new Rect2(0, 0, 5, 2);
 * rect = rect.Expand(new Vector2(10, 0)); // rect is Rect2(0, 0, 10, 2)
 * rect = rect.Expand(new Vector2(-5, 5)); // rect is Rect2(-5, 0, 10, 5)
 * 
 * @summary 
 * 
 *
*/
expand(): Rect2;

/** Returns the rectangle's area. This is equivalent to [code]size.x * size.y[/code]. See also [method has_area]. */
get_area(): float;

/** Returns the center point of the rectangle. This is the same as [code]position + (size / 2.0)[/code]. */
get_center(): Vector2;

/**
 * Returns a copy of this rectangle extended on all sides by the given [param amount]. A negative [param amount] shrinks the rectangle instead. See also [method grow_individual] and [method grow_side].
 *
 * @example 
 * 
 * 
 * var a = Rect2(4, 4, 8, 8).grow(4) # a is Rect2(0, 0, 16, 16)
 * var b = Rect2(0, 0, 8, 4).grow(2) # b is Rect2(-2, -2, 12, 8)
 * 
 * 
 * var a = new Rect2(4, 4, 8, 8).Grow(4); // a is Rect2(0, 0, 16, 16)
 * var b = new Rect2(0, 0, 8, 4).Grow(2); // b is Rect2(-2, -2, 12, 8)
 * 
 * @summary 
 * 
 *
*/
grow(): Rect2;

/** Returns a copy of this rectangle with its [param left], [param top], [param right], and [param bottom] sides extended by the given amounts. Negative values shrink the sides, instead. See also [method grow] and [method grow_side]. */
grow_individual(): Rect2;

/** Returns a copy of this rectangle with its [param side] extended by the given [param amount] (see [enum Side] constants). A negative [param amount] shrinks the rectangle, instead. See also [method grow] and [method grow_individual]. */
grow_side(): Rect2;

/** Returns [code]true[/code] if this rectangle has positive width and height. See also [method get_area]. */
has_area(): boolean;

/**
 * Returns `true` if the rectangle contains the given [param point]. By convention, points on the right and bottom edges are **not** included.
 *
 * **Note:** This method is not reliable for [Rect2] with a **negative** [member size]. Use [method abs] first to get a valid rectangle.
 *
*/
has_point(): boolean;

/**
 * Returns the intersection between this rectangle and [param b]. If the rectangles do not intersect, returns an empty [Rect2].
 *
 * @example 
 * 
 * 
 * var rect1 = Rect2(0, 0, 5, 10)
 * var rect2 = Rect2(2, 0, 8, 4)
 * var a = rect1.intersection(rect2) # a is Rect2(2, 0, 3, 4)
 * 
 * 
 * var rect1 = new Rect2(0, 0, 5, 10);
 * var rect2 = new Rect2(2, 0, 8, 4);
 * var a = rect1.Intersection(rect2); // a is Rect2(2, 0, 3, 4)
 * 
 * @summary 
 * 
 *
 * **Note:** If you only need to know whether two rectangles are overlapping, use [method intersects], instead.
 *
*/
intersection(): Rect2;

/** Returns [code]true[/code] if this rectangle overlaps with the [param b] rectangle. The edges of both rectangles are excluded, unless [param include_borders] is [code]true[/code]. */
intersects(): boolean;

/** Returns [code]true[/code] if this rectangle and [param rect] are approximately equal, by calling [method Vector2.is_equal_approx] on the [member position] and the [member size]. */
is_equal_approx(): boolean;

/** Returns [code]true[/code] if this rectangle's values are finite, by calling [method Vector2.is_finite] on the [member position] and the [member size]. */
is_finite(): boolean;

/** Returns a [Rect2] that encloses both this rectangle and [param b] around the edges. See also [method encloses]. */
merge(): Rect2;

  connect<T extends SignalsOf<Rect2>>(signal: T, method: SignalFunction<Rect2[T]>): number;






}

declare type Rect2 = Rect2Constructor;
declare var Rect2: typeof Rect2Constructor & {
    new(): Rect2; 



}
