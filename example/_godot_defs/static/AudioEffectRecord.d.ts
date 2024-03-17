
/**
 * Allows the user to record the sound from an audio bus. This can include all audio output by Godot when used on the "Master" audio bus.
 *
 * Can be used (with an [AudioStreamMicrophone]) to record from a microphone.
 *
 * It sets and gets the format in which the audio file will be recorded (8-bit, 16-bit, or compressed). It checks whether or not the recording is active, and if it is, records the sound. It then returns the recorded sample.
 *
*/
declare class AudioEffectRecord extends AudioEffect  {

  
/**
 * Allows the user to record the sound from an audio bus. This can include all audio output by Godot when used on the "Master" audio bus.
 *
 * Can be used (with an [AudioStreamMicrophone]) to record from a microphone.
 *
 * It sets and gets the format in which the audio file will be recorded (8-bit, 16-bit, or compressed). It checks whether or not the recording is active, and if it is, records the sound. It then returns the recorded sample.
 *
*/
  new(): AudioEffectRecord; 
  static "new"(): AudioEffectRecord 


/** Specifies the format in which the sample will be recorded. See [enum AudioStreamWAV.Format] for available formats. */
format: int;

/** Returns the recorded sample. */
get_recording(): AudioStreamWAV;

/** Returns whether the recording is active or not. */
is_recording_active(): boolean;

/** If [code]true[/code], the sound will be recorded. Note that restarting the recording will remove the previously recorded sample. */
set_recording_active(): void;

  connect<T extends SignalsOf<AudioEffectRecord>>(signal: T, method: SignalFunction<AudioEffectRecord[T]>): number;






}

