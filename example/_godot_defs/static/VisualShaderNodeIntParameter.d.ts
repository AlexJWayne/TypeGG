
/**
 * A [VisualShaderNodeParameter] of type [int]. Offers additional customization for range of accepted values.
 *
*/
declare class VisualShaderNodeIntParameter extends VisualShaderNodeParameter  {

  
/**
 * A [VisualShaderNodeParameter] of type [int]. Offers additional customization for range of accepted values.
 *
*/
  new(): VisualShaderNodeIntParameter; 
  static "new"(): VisualShaderNodeIntParameter 


/** Default value of this parameter, which will be used if not set externally. [member default_value_enabled] must be enabled; defaults to [code]0[/code] otherwise. */
default_value: int;

/** If [code]true[/code], the node will have a custom default value. */
default_value_enabled: boolean;

/** Range hint of this node. Use it to customize valid parameter range. */
hint: int;

/** The maximum value this parameter can take. [member hint] must be either [constant HINT_RANGE] or [constant HINT_RANGE_STEP] for this to take effect. */
max: int;

/** The minimum value this parameter can take. [member hint] must be either [constant HINT_RANGE] or [constant HINT_RANGE_STEP] for this to take effect. */
min: int;

/** The step between parameter's values. Forces the parameter to be a multiple of the given value. [member hint] must be [constant HINT_RANGE_STEP] for this to take effect. */
step: int;



  connect<T extends SignalsOf<VisualShaderNodeIntParameter>>(signal: T, method: SignalFunction<VisualShaderNodeIntParameter[T]>): number;



/**
 * The parameter will not constrain its value.
 *
*/
static HINT_NONE: any;

/**
 * The parameter's value must be within the specified [member min]/[member max] range.
 *
*/
static HINT_RANGE: any;

/**
 * The parameter's value must be within the specified range, with the given [member step] between values.
 *
*/
static HINT_RANGE_STEP: any;

/**
 * Represents the size of the [enum Hint] enum.
 *
*/
static HINT_MAX: any;



}

