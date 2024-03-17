
/**
 * Compares `a` and `b` of [member type] by [member function]. Returns a boolean scalar. Translates to `if` instruction in shader code.
 *
*/
declare class VisualShaderNodeCompare extends VisualShaderNode  {

  
/**
 * Compares `a` and `b` of [member type] by [member function]. Returns a boolean scalar. Translates to `if` instruction in shader code.
 *
*/
  new(): VisualShaderNodeCompare; 
  static "new"(): VisualShaderNodeCompare 


/** Extra condition which is applied if [member type] is set to [constant CTYPE_VECTOR_3D]. */
condition: int;

/** A comparison function. See [enum Function] for options. */
function: int;

/** The type to be used in the comparison. See [enum ComparisonType] for options. */
type: int;



  connect<T extends SignalsOf<VisualShaderNodeCompare>>(signal: T, method: SignalFunction<VisualShaderNodeCompare[T]>): number;



/**
 * A floating-point scalar.
 *
*/
static CTYPE_SCALAR: any;

/**
 * An integer scalar.
 *
*/
static CTYPE_SCALAR_INT: any;

/**
 * An unsigned integer scalar.
 *
*/
static CTYPE_SCALAR_UINT: any;

/**
 * A 2D vector type.
 *
*/
static CTYPE_VECTOR_2D: any;

/**
 * A 3D vector type.
 *
*/
static CTYPE_VECTOR_3D: any;

/**
 * A 4D vector type.
 *
*/
static CTYPE_VECTOR_4D: any;

/**
 * A boolean type.
 *
*/
static CTYPE_BOOLEAN: any;

/**
 * A transform (`mat4`) type.
 *
*/
static CTYPE_TRANSFORM: any;

/**
 * Represents the size of the [enum ComparisonType] enum.
 *
*/
static CTYPE_MAX: any;

/**
 * Comparison for equality (`a == b`).
 *
*/
static FUNC_EQUAL: any;

/**
 * Comparison for inequality (`a != b`).
 *
*/
static FUNC_NOT_EQUAL: any;

/**
 * Comparison for greater than (`a > b`). Cannot be used if [member type] set to [constant CTYPE_BOOLEAN] or [constant CTYPE_TRANSFORM].
 *
*/
static FUNC_GREATER_THAN: any;

/**
 * Comparison for greater than or equal (`a >= b`). Cannot be used if [member type] set to [constant CTYPE_BOOLEAN] or [constant CTYPE_TRANSFORM].
 *
*/
static FUNC_GREATER_THAN_EQUAL: any;

/**
 * Comparison for less than (`a < b`). Cannot be used if [member type] set to [constant CTYPE_BOOLEAN] or [constant CTYPE_TRANSFORM].
 *
*/
static FUNC_LESS_THAN: any;

/**
 * Comparison for less than or equal (`a <= b`). Cannot be used if [member type] set to [constant CTYPE_BOOLEAN] or [constant CTYPE_TRANSFORM].
 *
*/
static FUNC_LESS_THAN_EQUAL: any;

/**
 * Represents the size of the [enum Function] enum.
 *
*/
static FUNC_MAX: any;

/**
 * The result will be true if all of component in vector satisfy the comparison condition.
 *
*/
static COND_ALL: any;

/**
 * The result will be true if any of component in vector satisfy the comparison condition.
 *
*/
static COND_ANY: any;

/**
 * Represents the size of the [enum Condition] enum.
 *
*/
static COND_MAX: any;



}

