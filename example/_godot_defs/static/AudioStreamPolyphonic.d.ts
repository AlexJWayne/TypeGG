
/**
 * AudioStream that lets the user play custom streams at any time from code, simultaneously using a single player.
 *
 * Playback control is done via the [AudioStreamPlaybackPolyphonic] instance set inside the player, which can be obtained via [method AudioStreamPlayer.get_stream_playback], [method AudioStreamPlayer2D.get_stream_playback] or [method AudioStreamPlayer3D.get_stream_playback] methods. Obtaining the playback instance is only valid after the `stream` property is set as an [AudioStreamPolyphonic] in those players.
 *
*/
declare class AudioStreamPolyphonic extends AudioStream  {

  
/**
 * AudioStream that lets the user play custom streams at any time from code, simultaneously using a single player.
 *
 * Playback control is done via the [AudioStreamPlaybackPolyphonic] instance set inside the player, which can be obtained via [method AudioStreamPlayer.get_stream_playback], [method AudioStreamPlayer2D.get_stream_playback] or [method AudioStreamPlayer3D.get_stream_playback] methods. Obtaining the playback instance is only valid after the `stream` property is set as an [AudioStreamPolyphonic] in those players.
 *
*/
  new(): AudioStreamPolyphonic; 
  static "new"(): AudioStreamPolyphonic 


/** Maximum amount of simultaneous streams that can be played. */
polyphony: int;



  connect<T extends SignalsOf<AudioStreamPolyphonic>>(signal: T, method: SignalFunction<AudioStreamPolyphonic[T]>): number;






}

