
/**
 * A parameter represents a variable in the shader which is set externally, i.e. from the [ShaderMaterial]. Parameters are exposed as properties in the [ShaderMaterial] and can be assigned from the Inspector or from a script.
 *
*/
declare class VisualShaderNodeParameter extends VisualShaderNode  {

  
/**
 * A parameter represents a variable in the shader which is set externally, i.e. from the [ShaderMaterial]. Parameters are exposed as properties in the [ShaderMaterial] and can be assigned from the Inspector or from a script.
 *
*/
  new(): VisualShaderNodeParameter; 
  static "new"(): VisualShaderNodeParameter 


/** Name of the parameter, by which it can be accessed through the [ShaderMaterial] properties. */
parameter_name: string;

/** Defines the scope of the parameter. */
qualifier: int;



  connect<T extends SignalsOf<VisualShaderNodeParameter>>(signal: T, method: SignalFunction<VisualShaderNodeParameter[T]>): number;



/**
 * The parameter will be tied to the [ShaderMaterial] using this shader.
 *
*/
static QUAL_NONE: any;

/**
 * The parameter will use a global value, defined in Project Settings.
 *
*/
static QUAL_GLOBAL: any;

/**
 * The parameter will be tied to the node with attached [ShaderMaterial] using this shader.
 *
*/
static QUAL_INSTANCE: any;

/**
 * Represents the size of the [enum Qualifier] enum.
 *
*/
static QUAL_MAX: any;



}

