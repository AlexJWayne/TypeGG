
/**
 * This is the default [member MultiplayerAPI.multiplayer_peer] for the [member Node.multiplayer]. It mimics the behavior of a server with no peers connected.
 *
 * This means that the [SceneTree] will act as the multiplayer authority by default. Calls to [method MultiplayerAPI.is_server] will return `true`, and calls to [method MultiplayerAPI.get_unique_id] will return [constant MultiplayerPeer.TARGET_PEER_SERVER].
 *
*/
declare class OfflineMultiplayerPeer extends MultiplayerPeer  {

  
/**
 * This is the default [member MultiplayerAPI.multiplayer_peer] for the [member Node.multiplayer]. It mimics the behavior of a server with no peers connected.
 *
 * This means that the [SceneTree] will act as the multiplayer authority by default. Calls to [method MultiplayerAPI.is_server] will return `true`, and calls to [method MultiplayerAPI.get_unique_id] will return [constant MultiplayerPeer.TARGET_PEER_SERVER].
 *
*/
  new(): OfflineMultiplayerPeer; 
  static "new"(): OfflineMultiplayerPeer 





  connect<T extends SignalsOf<OfflineMultiplayerPeer>>(signal: T, method: SignalFunction<OfflineMultiplayerPeer[T]>): number;






}

