
/**
 * Base class for high-level multiplayer API implementations. See also [MultiplayerPeer].
 *
 * By default, [SceneTree] has a reference to an implementation of this class and uses it to provide multiplayer capabilities (i.e. RPCs) across the whole scene.
 *
 * It is possible to override the MultiplayerAPI instance used by specific tree branches by calling the [method SceneTree.set_multiplayer] method, effectively allowing to run both client and server in the same scene.
 *
 * It is also possible to extend or replace the default implementation via scripting or native extensions. See [MultiplayerAPIExtension] for details about extensions, [SceneMultiplayer] for the details about the default implementation.
 *
*/
declare class MultiplayerAPI extends RefCounted  {

  
/**
 * Base class for high-level multiplayer API implementations. See also [MultiplayerPeer].
 *
 * By default, [SceneTree] has a reference to an implementation of this class and uses it to provide multiplayer capabilities (i.e. RPCs) across the whole scene.
 *
 * It is possible to override the MultiplayerAPI instance used by specific tree branches by calling the [method SceneTree.set_multiplayer] method, effectively allowing to run both client and server in the same scene.
 *
 * It is also possible to extend or replace the default implementation via scripting or native extensions. See [MultiplayerAPIExtension] for details about extensions, [SceneMultiplayer] for the details about the default implementation.
 *
*/
  new(): MultiplayerAPI; 
  static "new"(): MultiplayerAPI 


/** The peer object to handle the RPC system (effectively enabling networking when set). Depending on the peer itself, the MultiplayerAPI will become a network server (check with [method is_server]) and will set root node's network mode to authority, or it will become a regular client peer. All child nodes are set to inherit the network mode by default. Handling of networking-related events (connection, disconnection, new clients) is done by connecting to MultiplayerAPI's signals. */
multiplayer_peer: MultiplayerPeer;

/** Returns a new instance of the default MultiplayerAPI. */
create_default_interface(): MultiplayerAPI;

/** Returns the default MultiplayerAPI implementation class name. This is usually [code]"SceneMultiplayer"[/code] when [SceneMultiplayer] is available. See [method set_default_interface]. */
get_default_interface(): StringName;

/** Returns the peer IDs of all connected peers of this MultiplayerAPI's [member multiplayer_peer]. */
get_peers(): PackedInt32Array;

/**
 * Returns the sender's peer ID for the RPC currently being executed.
 *
 * **Note:** If not inside an RPC this method will return 0.
 *
*/
get_remote_sender_id(): int;

/** Returns the unique peer ID of this MultiplayerAPI's [member multiplayer_peer]. */
get_unique_id(): int;

/** Returns [code]true[/code] if there is a [member multiplayer_peer] set. */
has_multiplayer_peer(): boolean;

/** Returns [code]true[/code] if this MultiplayerAPI's [member multiplayer_peer] is valid and in server mode (listening for connections). */
is_server(): boolean;

/**
 * Notifies the MultiplayerAPI of a new [param configuration] for the given [param object]. This method is used internally by [SceneTree] to configure the root path for this MultiplayerAPI (passing `null` and a valid [NodePath] as [param configuration]). This method can be further used by MultiplayerAPI implementations to provide additional features, refer to specific implementation (e.g. [SceneMultiplayer]) for details on how they use it.
 *
 * **Note:** This method is mostly relevant when extending or overriding the MultiplayerAPI behavior via [MultiplayerAPIExtension].
 *
*/
object_configuration_add(): int;

/**
 * Notifies the MultiplayerAPI to remove a [param configuration] for the given [param object]. This method is used internally by [SceneTree] to configure the root path for this MultiplayerAPI (passing `null` and an empty [NodePath] as [param configuration]). This method can be further used by MultiplayerAPI implementations to provide additional features, refer to specific implementation (e.g. [SceneMultiplayer]) for details on how they use it.
 *
 * **Note:** This method is mostly relevant when extending or overriding the MultiplayerAPI behavior via [MultiplayerAPIExtension].
 *
*/
object_configuration_remove(): int;

/**
 * Method used for polling the MultiplayerAPI. You only need to worry about this if you set [member SceneTree.multiplayer_poll] to `false`. By default, [SceneTree] will poll its MultiplayerAPI(s) for you.
 *
 * **Note:** This method results in RPCs being called, so they will be executed in the same context of this function (e.g. `_process`, `physics`, [Thread]).
 *
*/
poll(): int;



/** Sets the default MultiplayerAPI implementation class. This method can be used by modules and extensions to configure which implementation will be used by [SceneTree] when the engine starts. */
set_default_interface(): void;

  connect<T extends SignalsOf<MultiplayerAPI>>(signal: T, method: SignalFunction<MultiplayerAPI[T]>): number;



/**
 * Used with [method Node.rpc_config] to disable a method or property for all RPC calls, making it unavailable. Default for all methods.
 *
*/
static RPC_MODE_DISABLED: any;

/**
 * Used with [method Node.rpc_config] to set a method to be callable remotely by any peer. Analogous to the `@rpc("any_peer")` annotation. Calls are accepted from all remote peers, no matter if they are node's authority or not.
 *
*/
static RPC_MODE_ANY_PEER: any;

/**
 * Used with [method Node.rpc_config] to set a method to be callable remotely only by the current multiplayer authority (which is the server by default). Analogous to the `@rpc("authority")` annotation. See [method Node.set_multiplayer_authority].
 *
*/
static RPC_MODE_AUTHORITY: any;


/**
 * Emitted when this MultiplayerAPI's [member multiplayer_peer] successfully connected to a server. Only emitted on clients.
 *
*/
$connected_to_server: Signal<() => void>

/**
 * Emitted when this MultiplayerAPI's [member multiplayer_peer] fails to establish a connection to a server. Only emitted on clients.
 *
*/
$connection_failed: Signal<() => void>

/**
 * Emitted when this MultiplayerAPI's [member multiplayer_peer] connects with a new peer. ID is the peer ID of the new peer. Clients get notified when other clients connect to the same server. Upon connecting to a server, a client also receives this signal for the server (with ID being 1).
 *
*/
$peer_connected: Signal<() => void>

/**
 * Emitted when this MultiplayerAPI's [member multiplayer_peer] disconnects from a peer. Clients get notified when other clients disconnect from the same server.
 *
*/
$peer_disconnected: Signal<() => void>

/**
 * Emitted when this MultiplayerAPI's [member multiplayer_peer] disconnects from server. Only emitted on clients.
 *
*/
$server_disconnected: Signal<() => void>

}

