
/**
 * The output port of this node needs to be connected to `Model View Matrix` port of [VisualShaderNodeOutput].
 *
*/
declare class VisualShaderNodeBillboard extends VisualShaderNode  {

  
/**
 * The output port of this node needs to be connected to `Model View Matrix` port of [VisualShaderNodeOutput].
 *
*/
  new(): VisualShaderNodeBillboard; 
  static "new"(): VisualShaderNodeBillboard 


/** Controls how the object faces the camera. See [enum BillboardType]. */
billboard_type: int;

/** If [code]true[/code], the shader will keep the scale set for the mesh. Otherwise, the scale is lost when billboarding. */
keep_scale: boolean;



  connect<T extends SignalsOf<VisualShaderNodeBillboard>>(signal: T, method: SignalFunction<VisualShaderNodeBillboard[T]>): number;



/**
 * Billboarding is disabled and the node does nothing.
 *
*/
static BILLBOARD_TYPE_DISABLED: any;

/**
 * A standard billboarding algorithm is enabled.
 *
*/
static BILLBOARD_TYPE_ENABLED: any;

/**
 * A billboarding algorithm to rotate around Y-axis is enabled.
 *
*/
static BILLBOARD_TYPE_FIXED_Y: any;

/**
 * A billboarding algorithm designed to use on particles is enabled.
 *
*/
static BILLBOARD_TYPE_PARTICLES: any;

/**
 * Represents the size of the [enum BillboardType] enum.
 *
*/
static BILLBOARD_TYPE_MAX: any;



}

