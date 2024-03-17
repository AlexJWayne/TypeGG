
/**
 * This class can be used to augment or replace the default [MultiplayerAPI] implementation via script or extensions.
 *
 * The following example augment the default implementation ([SceneMultiplayer]) by logging every RPC being made, and every object being configured for replication.
 *
 * @example 
 * 
 * 
 * extends MultiplayerAPIExtension
 * class_name LogMultiplayer
 * # We want to augment the default SceneMultiplayer.
 * var base_multiplayer = SceneMultiplayer.new()
 * func _init():
 *     # Just passthrough base signals (copied to var to avoid cyclic reference)
 *     var cts = connected_to_server
 *     var cf = connection_failed
 *     var pc = peer_connected
 *     var pd = peer_disconnected
 *     base_multiplayer.connected_to_server.connect(func(): cts.emit())
 *     base_multiplayer.connection_failed.connect(func(): cf.emit())
 *     base_multiplayer.peer_connected.connect(func(id): pc.emit(id))
 *     base_multiplayer.peer_disconnected.connect(func(id): pd.emit(id))
 * func _poll():
 *     return base_multiplayer.poll()
 * # Log RPC being made and forward it to the default multiplayer.
 * func _rpc(peer: int, object: Object, method: StringName, args: Array) -> Error:
 *     print("Got RPC for %d: %s::%s(%s)" % [peer, object, method, args])
 *     return base_multiplayer.rpc(peer, object, method, args)
 * # Log configuration add. E.g. root path (nullptr, NodePath), replication (Node, Spawner|Synchronizer), custom.
 * func _object_configuration_add(object, config: Variant) -> Error:
 *     if config is MultiplayerSynchronizer:
 *         print("Adding synchronization configuration for %s. Synchronizer: %s" % [object, config])
 *     elif config is MultiplayerSpawner:
 *         print("Adding node %s to the spawn list. Spawner: %s" % [object, config])
 *     return base_multiplayer.object_configuration_add(object, config)
 * # Log configuration remove. E.g. root path (nullptr, NodePath), replication (Node, Spawner|Synchronizer), custom.
 * func _object_configuration_remove(object, config: Variant) -> Error:
 *     if config is MultiplayerSynchronizer:
 *         print("Removing synchronization configuration for %s. Synchronizer: %s" % [object, config])
 *     elif config is MultiplayerSpawner:
 *         print("Removing node %s from the spawn list. Spawner: %s" % [object, config])
 *     return base_multiplayer.object_configuration_remove(object, config)
 * # These can be optional, but in our case we want to augment SceneMultiplayer, so forward everything.
 * func _set_multiplayer_peer(p_peer: MultiplayerPeer):
 *     base_multiplayer.multiplayer_peer = p_peer
 * func _get_multiplayer_peer() -> MultiplayerPeer:
 *     return base_multiplayer.multiplayer_peer
 * func _get_unique_id() -> int:
 *     return base_multiplayer.get_unique_id()
 * func _get_peer_ids() -> PackedInt32Array:
 *     return base_multiplayer.get_peers()
 * 
 * @summary 
 * 
 *
 * Then in your main scene or in an autoload call [method SceneTree.set_multiplayer] to start using your custom [MultiplayerAPI]:
 *
 * @example 
 * 
 * 
 * # autoload.gd
 * func _enter_tree():
 *     # Sets our custom multiplayer as the main one in SceneTree.
 * get_tree().set_multiplayer(LogMultiplayer.new())
 * 
 * @summary 
 * 
 *
 * Native extensions can alternatively use the [method MultiplayerAPI.set_default_interface] method during initialization to configure themselves as the default implementation.
 *
*/
declare class MultiplayerAPIExtension extends MultiplayerAPI  {

  
/**
 * This class can be used to augment or replace the default [MultiplayerAPI] implementation via script or extensions.
 *
 * The following example augment the default implementation ([SceneMultiplayer]) by logging every RPC being made, and every object being configured for replication.
 *
 * @example 
 * 
 * 
 * extends MultiplayerAPIExtension
 * class_name LogMultiplayer
 * # We want to augment the default SceneMultiplayer.
 * var base_multiplayer = SceneMultiplayer.new()
 * func _init():
 *     # Just passthrough base signals (copied to var to avoid cyclic reference)
 *     var cts = connected_to_server
 *     var cf = connection_failed
 *     var pc = peer_connected
 *     var pd = peer_disconnected
 *     base_multiplayer.connected_to_server.connect(func(): cts.emit())
 *     base_multiplayer.connection_failed.connect(func(): cf.emit())
 *     base_multiplayer.peer_connected.connect(func(id): pc.emit(id))
 *     base_multiplayer.peer_disconnected.connect(func(id): pd.emit(id))
 * func _poll():
 *     return base_multiplayer.poll()
 * # Log RPC being made and forward it to the default multiplayer.
 * func _rpc(peer: int, object: Object, method: StringName, args: Array) -> Error:
 *     print("Got RPC for %d: %s::%s(%s)" % [peer, object, method, args])
 *     return base_multiplayer.rpc(peer, object, method, args)
 * # Log configuration add. E.g. root path (nullptr, NodePath), replication (Node, Spawner|Synchronizer), custom.
 * func _object_configuration_add(object, config: Variant) -> Error:
 *     if config is MultiplayerSynchronizer:
 *         print("Adding synchronization configuration for %s. Synchronizer: %s" % [object, config])
 *     elif config is MultiplayerSpawner:
 *         print("Adding node %s to the spawn list. Spawner: %s" % [object, config])
 *     return base_multiplayer.object_configuration_add(object, config)
 * # Log configuration remove. E.g. root path (nullptr, NodePath), replication (Node, Spawner|Synchronizer), custom.
 * func _object_configuration_remove(object, config: Variant) -> Error:
 *     if config is MultiplayerSynchronizer:
 *         print("Removing synchronization configuration for %s. Synchronizer: %s" % [object, config])
 *     elif config is MultiplayerSpawner:
 *         print("Removing node %s from the spawn list. Spawner: %s" % [object, config])
 *     return base_multiplayer.object_configuration_remove(object, config)
 * # These can be optional, but in our case we want to augment SceneMultiplayer, so forward everything.
 * func _set_multiplayer_peer(p_peer: MultiplayerPeer):
 *     base_multiplayer.multiplayer_peer = p_peer
 * func _get_multiplayer_peer() -> MultiplayerPeer:
 *     return base_multiplayer.multiplayer_peer
 * func _get_unique_id() -> int:
 *     return base_multiplayer.get_unique_id()
 * func _get_peer_ids() -> PackedInt32Array:
 *     return base_multiplayer.get_peers()
 * 
 * @summary 
 * 
 *
 * Then in your main scene or in an autoload call [method SceneTree.set_multiplayer] to start using your custom [MultiplayerAPI]:
 *
 * @example 
 * 
 * 
 * # autoload.gd
 * func _enter_tree():
 *     # Sets our custom multiplayer as the main one in SceneTree.
 * get_tree().set_multiplayer(LogMultiplayer.new())
 * 
 * @summary 
 * 
 *
 * Native extensions can alternatively use the [method MultiplayerAPI.set_default_interface] method during initialization to configure themselves as the default implementation.
 *
*/
  new(): MultiplayerAPIExtension; 
  static "new"(): MultiplayerAPIExtension 



/** Called when the [member MultiplayerAPI.multiplayer_peer] is retrieved. */
protected _get_multiplayer_peer(): MultiplayerPeer;

/** Callback for [method MultiplayerAPI.get_peers]. */
protected _get_peer_ids(): PackedInt32Array;

/** Callback for [method MultiplayerAPI.get_remote_sender_id]. */
protected _get_remote_sender_id(): int;

/** Callback for [method MultiplayerAPI.get_unique_id]. */
protected _get_unique_id(): int;

/** Callback for [method MultiplayerAPI.object_configuration_add]. */
protected _object_configuration_add(): int;

/** Callback for [method MultiplayerAPI.object_configuration_remove]. */
protected _object_configuration_remove(): int;

/** Callback for [method MultiplayerAPI.poll]. */
protected _poll(): int;

/** Callback for [method MultiplayerAPI.rpc]. */
protected _rpc(): int;

/** Called when the [member MultiplayerAPI.multiplayer_peer] is set. */
protected _set_multiplayer_peer(): void;

  connect<T extends SignalsOf<MultiplayerAPIExtension>>(signal: T, method: SignalFunction<MultiplayerAPIExtension[T]>): number;






}

