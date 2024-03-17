
/**
 * A [VisualShaderNodeParameter] of type unsigned [int]. Offers additional customization for range of accepted values.
 *
*/
declare class VisualShaderNodeUIntParameter extends VisualShaderNodeParameter  {

  
/**
 * A [VisualShaderNodeParameter] of type unsigned [int]. Offers additional customization for range of accepted values.
 *
*/
  new(): VisualShaderNodeUIntParameter; 
  static "new"(): VisualShaderNodeUIntParameter 


/** Default value of this parameter, which will be used if not set externally. [member default_value_enabled] must be enabled; defaults to [code]0[/code] otherwise. */
default_value: int;

/** If [code]true[/code], the node will have a custom default value. */
default_value_enabled: boolean;



  connect<T extends SignalsOf<VisualShaderNodeUIntParameter>>(signal: T, method: SignalFunction<VisualShaderNodeUIntParameter[T]>): number;






}

