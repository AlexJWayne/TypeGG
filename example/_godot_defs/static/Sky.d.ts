
/**
 * The [Sky] class uses a [Material] to render a 3D environment's background and the light it emits by updating the reflection/radiance cubemaps.
 *
*/
declare class Sky extends Resource  {

  
/**
 * The [Sky] class uses a [Material] to render a 3D environment's background and the light it emits by updating the reflection/radiance cubemaps.
 *
*/
  new(): Sky; 
  static "new"(): Sky 


/** Sets the method for generating the radiance map from the sky. The radiance map is a cubemap with increasingly blurry versions of the sky corresponding to different levels of roughness. Radiance maps can be expensive to calculate. See [enum ProcessMode] for options. */
process_mode: int;

/**
 * The [Sky]'s radiance map size. The higher the radiance map size, the more detailed the lighting from the [Sky] will be.
 *
 * See [enum RadianceSize] constants for values.
 *
 * **Note:** Some hardware will have trouble with higher radiance sizes, especially [constant RADIANCE_SIZE_512] and above. Only use such high values on high-end hardware.
 *
*/
radiance_size: int;

/** [Material] used to draw the background. Can be [PanoramaSkyMaterial], [ProceduralSkyMaterial], [PhysicalSkyMaterial], or even a [ShaderMaterial] if you want to use your own custom shader. */
sky_material: Material;



  connect<T extends SignalsOf<Sky>>(signal: T, method: SignalFunction<Sky[T]>): number;



/**
 * Radiance texture size is 32×32 pixels.
 *
*/
static RADIANCE_SIZE_32: any;

/**
 * Radiance texture size is 64×64 pixels.
 *
*/
static RADIANCE_SIZE_64: any;

/**
 * Radiance texture size is 128×128 pixels.
 *
*/
static RADIANCE_SIZE_128: any;

/**
 * Radiance texture size is 256×256 pixels.
 *
*/
static RADIANCE_SIZE_256: any;

/**
 * Radiance texture size is 512×512 pixels.
 *
*/
static RADIANCE_SIZE_512: any;

/**
 * Radiance texture size is 1024×1024 pixels.
 *
*/
static RADIANCE_SIZE_1024: any;

/**
 * Radiance texture size is 2048×2048 pixels.
 *
*/
static RADIANCE_SIZE_2048: any;

/**
 * Represents the size of the [enum RadianceSize] enum.
 *
*/
static RADIANCE_SIZE_MAX: any;

/**
 * Automatically selects the appropriate process mode based on your sky shader. If your shader uses `TIME` or `POSITION`, this will use [constant PROCESS_MODE_REALTIME]. If your shader uses any of the `LIGHT_*` variables or any custom uniforms, this uses [constant PROCESS_MODE_INCREMENTAL]. Otherwise, this defaults to [constant PROCESS_MODE_QUALITY].
 *
*/
static PROCESS_MODE_AUTOMATIC: any;

/**
 * Uses high quality importance sampling to process the radiance map. In general, this results in much higher quality than [constant PROCESS_MODE_REALTIME] but takes much longer to generate. This should not be used if you plan on changing the sky at runtime. If you are finding that the reflection is not blurry enough and is showing sparkles or fireflies, try increasing [member ProjectSettings.rendering/reflections/sky_reflections/ggx_samples].
 *
*/
static PROCESS_MODE_QUALITY: any;

/**
 * Uses the same high quality importance sampling to process the radiance map as [constant PROCESS_MODE_QUALITY], but updates over several frames. The number of frames is determined by [member ProjectSettings.rendering/reflections/sky_reflections/roughness_layers]. Use this when you need highest quality radiance maps, but have a sky that updates slowly.
 *
*/
static PROCESS_MODE_INCREMENTAL: any;

/**
 * Uses the fast filtering algorithm to process the radiance map. In general this results in lower quality, but substantially faster run times. If you need better quality, but still need to update the sky every frame, consider turning on [member ProjectSettings.rendering/reflections/sky_reflections/fast_filter_high_quality].
 *
 * **Note:** The fast filtering algorithm is limited to 256×256 cubemaps, so [member radiance_size] must be set to [constant RADIANCE_SIZE_256]. Otherwise, a warning is printed and the overridden radiance size is ignored.
 *
*/
static PROCESS_MODE_REALTIME: any;



}

