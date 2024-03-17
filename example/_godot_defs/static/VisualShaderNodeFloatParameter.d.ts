
/**
 * Translated to `uniform float` in the shader language.
 *
*/
declare class VisualShaderNodeFloatParameter extends VisualShaderNodeParameter  {

  
/**
 * Translated to `uniform float` in the shader language.
 *
*/
  new(): VisualShaderNodeFloatParameter; 
  static "new"(): VisualShaderNodeFloatParameter 


/** A default value to be assigned within the shader. */
default_value: float;

/** Enables usage of the [member default_value]. */
default_value_enabled: boolean;

/** A hint applied to the uniform, which controls the values it can take when set through the Inspector. */
hint: int;

/** Minimum value for range hints. Used if [member hint] is set to [constant HINT_RANGE] or [constant HINT_RANGE_STEP]. */
max: float;

/** Maximum value for range hints. Used if [member hint] is set to [constant HINT_RANGE] or [constant HINT_RANGE_STEP]. */
min: float;

/** Step (increment) value for the range hint with step. Used if [member hint] is set to [constant HINT_RANGE_STEP]. */
step: float;



  connect<T extends SignalsOf<VisualShaderNodeFloatParameter>>(signal: T, method: SignalFunction<VisualShaderNodeFloatParameter[T]>): number;



/**
 * No hint used.
 *
*/
static HINT_NONE: any;

/**
 * A range hint for scalar value, which limits possible input values between [member min] and [member max]. Translated to `hint_range(min, max)` in shader code.
 *
*/
static HINT_RANGE: any;

/**
 * A range hint for scalar value with step, which limits possible input values between [member min] and [member max], with a step (increment) of [member step]). Translated to `hint_range(min, max, step)` in shader code.
 *
*/
static HINT_RANGE_STEP: any;

/**
 * Represents the size of the [enum Hint] enum.
 *
*/
static HINT_MAX: any;



}

