
/**
 * [ProceduralSkyMaterial] provides a way to create an effective background quickly by defining procedural parameters for the sun, the sky and the ground. The sky and ground are defined by a main color, a color at the horizon, and an easing curve to interpolate between them. Suns are described by a position in the sky, a color, and a max angle from the sun at which the easing curve ends. The max angle therefore defines the size of the sun in the sky.
 *
 * [ProceduralSkyMaterial] supports up to 4 suns, using the color, and energy, direction, and angular distance of the first four [DirectionalLight3D] nodes in the scene. This means that the suns are defined individually by the properties of their corresponding [DirectionalLight3D]s and globally by [member sun_angle_max] and [member sun_curve].
 *
 * [ProceduralSkyMaterial] uses a lightweight shader to draw the sky and is therefore suited for real time updates. This makes it a great option for a sky that is simple and computationally cheap, but unrealistic. If you need a more realistic procedural option, use [PhysicalSkyMaterial].
 *
*/
declare class ProceduralSkyMaterial extends Material  {

  
/**
 * [ProceduralSkyMaterial] provides a way to create an effective background quickly by defining procedural parameters for the sun, the sky and the ground. The sky and ground are defined by a main color, a color at the horizon, and an easing curve to interpolate between them. Suns are described by a position in the sky, a color, and a max angle from the sun at which the easing curve ends. The max angle therefore defines the size of the sun in the sky.
 *
 * [ProceduralSkyMaterial] supports up to 4 suns, using the color, and energy, direction, and angular distance of the first four [DirectionalLight3D] nodes in the scene. This means that the suns are defined individually by the properties of their corresponding [DirectionalLight3D]s and globally by [member sun_angle_max] and [member sun_curve].
 *
 * [ProceduralSkyMaterial] uses a lightweight shader to draw the sky and is therefore suited for real time updates. This makes it a great option for a sky that is simple and computationally cheap, but unrealistic. If you need a more realistic procedural option, use [PhysicalSkyMaterial].
 *
*/
  new(): ProceduralSkyMaterial; 
  static "new"(): ProceduralSkyMaterial 


/** Color of the ground at the bottom. Blends with [member ground_horizon_color]. */
ground_bottom_color: Color;

/** How quickly the [member ground_horizon_color] fades into the [member ground_bottom_color]. */
ground_curve: float;

/** Multiplier for ground color. A higher value will make the ground brighter. */
ground_energy_multiplier: float;

/** Color of the ground at the horizon. Blends with [member ground_bottom_color]. */
ground_horizon_color: Color;

/** The sky cover texture to use. This texture must use an equirectangular projection (similar to [PanoramaSkyMaterial]). The texture's colors will be [i]added[/i] to the existing sky color, and will be multiplied by [member sky_energy_multiplier] and [member sky_cover_modulate]. This is mainly suited to displaying stars at night, but it can also be used to display clouds at day or night (with a non-physically-accurate look). */
sky_cover: Texture2D;

/** The tint to apply to the [member sky_cover] texture. This can be used to change the sky cover's colors or opacity independently of the sky energy, which is useful for day/night or weather transitions. Only effective if a texture is defined in [member sky_cover]. */
sky_cover_modulate: Color;

/** How quickly the [member sky_horizon_color] fades into the [member sky_top_color]. */
sky_curve: float;

/** Multiplier for sky color. A higher value will make the sky brighter. */
sky_energy_multiplier: float;

/** Color of the sky at the horizon. Blends with [member sky_top_color]. */
sky_horizon_color: Color;

/** Color of the sky at the top. Blends with [member sky_horizon_color]. */
sky_top_color: Color;

/** Distance from center of sun where it fades out completely. */
sun_angle_max: float;

/** How quickly the sun fades away between the edge of the sun disk and [member sun_angle_max]. */
sun_curve: float;

/** If [code]true[/code], enables debanding. Debanding adds a small amount of noise which helps reduce banding that appears from the smooth changes in color in the sky. */
use_debanding: boolean;



  connect<T extends SignalsOf<ProceduralSkyMaterial>>(signal: T, method: SignalFunction<ProceduralSkyMaterial[T]>): number;






}

