
/**
 * When used directly in an [AudioStreamPlayer] node, [AudioStreamMicrophone] plays back microphone input in real-time. This can be used in conjunction with [AudioEffectCapture] to process the data or save it.
 *
 * **Note:** [member ProjectSettings.audio/driver/enable_input] must be `true` for audio input to work. See also that setting's description for caveats related to permissions and operating system privacy settings.
 *
*/
declare class AudioStreamMicrophone extends AudioStream  {

  
/**
 * When used directly in an [AudioStreamPlayer] node, [AudioStreamMicrophone] plays back microphone input in real-time. This can be used in conjunction with [AudioEffectCapture] to process the data or save it.
 *
 * **Note:** [member ProjectSettings.audio/driver/enable_input] must be `true` for audio input to work. See also that setting's description for caveats related to permissions and operating system privacy settings.
 *
*/
  new(): AudioStreamMicrophone; 
  static "new"(): AudioStreamMicrophone 





  connect<T extends SignalsOf<AudioStreamMicrophone>>(signal: T, method: SignalFunction<AudioStreamMicrophone[T]>): number;






}

