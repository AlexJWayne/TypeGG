declare type int = number & { __brand__?: 'int' }
declare type float = number

declare function int(x: int | float): int
declare function float(x: int | float): float

// From @GDScript.xml ?

/**
 * Positive floating-point infinity. This is the result of floating-point
 * division when the divisor is [code]0.0[/code]. For negative infinity, use
 * [code]-INF[/code]. Dividing by [code]-0.0[/code] will result in negative
 * infinity if the numerator is positive, so dividing by [code]0.0[/code] is not
 * the same as dividing by [code]-0.0[/code] (despite [code]0.0 == -0.0[/code]
 * returning [code]true[/code]).
 *
 * [b]Note:[/b] Numeric infinity is only a concept with floating-point numbers,
 * and has no equivalent for integers.  Dividing an integer number by
 * [code]0[/code] will not result in [constant INF] and will result in a
 * run-time error instead.
 */
declare const INF: float

/**
 * Constant that represents how many times the diameter of a circle fits around
 * its perimeter. This is equivalent to [code]TAU / 2[/code].
 */
declare const PI: float

/**
 * The circle constant, the circumference of the unit circle in radians. This is
 * equivalent to [code]PI * 2[/code], or 360 degrees in rotations.
 */
declare const TAU: float

/**
 * "Not a Number", an invalid floating-point value. [constant NAN] has special
 * properties, including that it is not equal to itself ([code]NAN == NAN[/code]
 * returns [code]false[/code]). It is output by some invalid operations, such as
 * dividing floating-point [code]0.0[/code] by [code]0.0[/code].
 *
 * [b]Note:[/b] "Not a Number" is only a concept with floating-point numbers,
 * and has no equivalent for integers. Dividing an integer [code]0[/code] by
 * [code]0[/code] will not result in [constant NAN] and will result in a
 * run-time error instead.
 */
declare const NAN: float
