
/**
 * WAV is an uncompressed format, which can provide higher quality compared to Ogg Vorbis and MP3. It also has the lowest CPU cost to decode. This means high numbers of WAV sounds can be played at the same time, even on low-end deviceS.
 *
*/
declare class ResourceImporterWAV extends ResourceImporter  {

  
/**
 * WAV is an uncompressed format, which can provide higher quality compared to Ogg Vorbis and MP3. It also has the lowest CPU cost to decode. This means high numbers of WAV sounds can be played at the same time, even on low-end deviceS.
 *
*/
  new(): ResourceImporterWAV; 
  static "new"(): ResourceImporterWAV 


/**
 * The compression mode to use on import.
 *
 * **Disabled:** Imports audio data without any compression. This results in the highest possible quality.
 *
 * **RAM (Ima-ADPCM):** Performs fast lossy compression on import. Low CPU cost, but quality is noticeably decreased compared to Ogg Vorbis or even MP3.
 *
*/
"compress/mode": int;

/** The begin loop point to use when [member edit/loop_mode] is [b]Forward[/b], [b]Ping-Pong[/b] or [b]Backward[/b]. This is set in seconds after the beginning of the audio file. */
"edit/loop_begin": int;

/** The end loop point to use when [member edit/loop_mode] is [b]Forward[/b], [b]Ping-Pong[/b] or [b]Backward[/b]. This is set in seconds after the beginning of the audio file. A value of [code]-1[/code] uses the end of the audio file as the end loop point. */
"edit/loop_end": int;

/**
 * Controls how audio should loop. This is automatically read from the WAV metadata on import.
 *
 * **Disabled:** Don't loop audio, even if metadata indicates the file should be played back looping.
 *
 * **Forward:** Standard audio looping.
 *
 * **Ping-Pong:** Play audio forward until it's done playing, then play it backward and repeat. This is similar to mirrored texture repeat, but for audio.
 *
 * **Backward:** Play audio in reverse and loop back to the end when done playing.
 *
 * **Note:** In [AudioStreamPlayer], the [signal AudioStreamPlayer.finished] signal won't be emitted for looping audio when it reaches the end of the audio file, as the audio will keep playing indefinitely.
 *
*/
"edit/loop_mode": int;

/** If [code]true[/code], normalize the audio volume so that its peak volume is equal to 0 dB. When enabled, normalization will make audio sound louder depending on its original peak volume. */
"edit/normalize": boolean;

/** If [code]true[/code], automatically trim the beginning and end of the audio if it's lower than -50 dB after normalization (see [member edit/normalize]). This prevents having files with silence at the beginning or end, which increases their size unnecessarily and adds latency to the moment they are played back. A fade-in/fade-out period of 500 samples is also used during trimming to avoid audible pops. */
"edit/trim": boolean;

/**
 * If `true`, forces the imported audio to use 8-bit quantization if the source file is 16-bit or higher.
 *
 * Enabling this is generally not recommended, as 8-bit quantization decreases audio quality significantly. If you need smaller file sizes, consider using Ogg Vorbis or MP3 audio instead.
 *
*/
"force/8_bit": boolean;

/**
 * If set to a value greater than `0`, forces the audio's sample rate to be reduced to a value lower than or equal to the value specified in [member force/max_rate_hz].
 *
 * This can decrease file size noticeably on certain sounds, without impacting quality depending on the actual sound's contents. See [url=$DOCS_URL/tutorials/assets_pipeline/importing_audio_samples.html#doc-importing-audio-samples-best-practices]Best practices[/url] for more information.
 *
*/
"force/max_rate": boolean;

/** The frequency to limit the imported audio sample to (in Hz). Only effective if [member force/max_rate] is [code]true[/code]. */
"force/max_rate_hz": float;

/** If [code]true[/code], forces the imported audio to be mono if the source file is stereo. This decreases the file size by 50% by merging the two channels into one. */
"force/mono": boolean;



  connect<T extends SignalsOf<ResourceImporterWAV>>(signal: T, method: SignalFunction<ResourceImporterWAV[T]>): number;






}

