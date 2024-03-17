
/**
 * A simple server that opens a UDP socket and returns connected [PacketPeerUDP] upon receiving new packets. See also [method PacketPeerUDP.connect_to_host].
 *
 * After starting the server ([method listen]), you will need to [method poll] it at regular intervals (e.g. inside [method Node._process]) for it to process new packets, delivering them to the appropriate [PacketPeerUDP], and taking new connections.
 *
 * Below a small example of how it can be used:
 *
 * @example 
 * 
 * 
 * # server_node.gd
 * class_name ServerNode
 * extends Node
 * var server := UDPServer.new()
 * var peers = []
 * func _ready():
 *     server.listen(4242)
 * func _process(delta):
 *     server.poll() # Important!
 *     if server.is_connection_available():
 *         var peer: PacketPeerUDP = server.take_connection()
 *         var packet = peer.get_packet()
 *         print("Accepted peer: %s:%s" % [peer.get_packet_ip(), peer.get_packet_port()])
 *         print("Received data: %s" % [packet.get_string_from_utf8()])
 *         # Reply so it knows we received the message.
 *         peer.put_packet(packet)
 *         # Keep a reference so we can keep contacting the remote peer.
 *         peers.append(peer)
 *     for i in range(0, peers.size()):
 *         pass # Do something with the connected peers.
 * 
 * 
 * // ServerNode.cs
 * using Godot;
 * using System.Collections.Generic;
 * public partial class ServerNode : Node
 * {
 *     private UdpServer _server = new UdpServer();
 *     private List<PacketPeerUdp> _peers  = new List<PacketPeerUdp>();
 *     public override void _Ready()
 *     {
 *         _server.Listen(4242);
 *     }
 *     public override void _Process(double delta)
 *     {
 *         _server.Poll(); // Important!
 *         if (_server.IsConnectionAvailable())
 *         {
 *             PacketPeerUdp peer = _server.TakeConnection();
 *             byte[] packet = peer.GetPacket();
 *             GD.Print($"Accepted Peer: {peer.GetPacketIP()}:{peer.GetPacketPort()}");
 *             GD.Print($"Received Data: {packet.GetStringFromUtf8()}");
 *             // Reply so it knows we received the message.
 *             peer.PutPacket(packet);
 *             // Keep a reference so we can keep contacting the remote peer.
 *             _peers.Add(peer);
 *         }
 *         foreach (var peer in _peers)
 *         {
 *             // Do something with the peers.
 *         }
 *     }
 * }
 * 
 * @summary 
 * 
 *
 * @example 
 * 
 * 
 * # client_node.gd
 * class_name ClientNode
 * extends Node
 * var udp := PacketPeerUDP.new()
 * var connected = false
 * func _ready():
 *     udp.connect_to_host("127.0.0.1", 4242)
 * func _process(delta):
 *     if !connected:
 *         # Try to contact server
 *         udp.put_packet("The answer is... 42!".to_utf8_buffer())
 *     if udp.get_available_packet_count() > 0:
 *         print("Connected: %s" % udp.get_packet().get_string_from_utf8())
 *         connected = true
 * 
 * 
 * // ClientNode.cs
 * using Godot;
 * public partial class ClientNode : Node
 * {
 *     private PacketPeerUdp _udp = new PacketPeerUdp();
 *     private bool _connected = false;
 *     public override void _Ready()
 *     {
 *         _udp.ConnectToHost("127.0.0.1", 4242);
 *     }
 *     public override void _Process(double delta)
 *     {
 *         if (!_connected)
 *         {
 *             // Try to contact server
 *             _udp.PutPacket("The Answer Is..42!".ToUtf8Buffer());
 *         }
 *         if (_udp.GetAvailablePacketCount() > 0)
 *         {
 *             GD.Print($"Connected: {_udp.GetPacket().GetStringFromUtf8()}");
 *             _connected = true;
 *         }
 *     }
 * }
 * 
 * @summary 
 * 
 *
*/
declare class UDPServer extends RefCounted  {

  
/**
 * A simple server that opens a UDP socket and returns connected [PacketPeerUDP] upon receiving new packets. See also [method PacketPeerUDP.connect_to_host].
 *
 * After starting the server ([method listen]), you will need to [method poll] it at regular intervals (e.g. inside [method Node._process]) for it to process new packets, delivering them to the appropriate [PacketPeerUDP], and taking new connections.
 *
 * Below a small example of how it can be used:
 *
 * @example 
 * 
 * 
 * # server_node.gd
 * class_name ServerNode
 * extends Node
 * var server := UDPServer.new()
 * var peers = []
 * func _ready():
 *     server.listen(4242)
 * func _process(delta):
 *     server.poll() # Important!
 *     if server.is_connection_available():
 *         var peer: PacketPeerUDP = server.take_connection()
 *         var packet = peer.get_packet()
 *         print("Accepted peer: %s:%s" % [peer.get_packet_ip(), peer.get_packet_port()])
 *         print("Received data: %s" % [packet.get_string_from_utf8()])
 *         # Reply so it knows we received the message.
 *         peer.put_packet(packet)
 *         # Keep a reference so we can keep contacting the remote peer.
 *         peers.append(peer)
 *     for i in range(0, peers.size()):
 *         pass # Do something with the connected peers.
 * 
 * 
 * // ServerNode.cs
 * using Godot;
 * using System.Collections.Generic;
 * public partial class ServerNode : Node
 * {
 *     private UdpServer _server = new UdpServer();
 *     private List<PacketPeerUdp> _peers  = new List<PacketPeerUdp>();
 *     public override void _Ready()
 *     {
 *         _server.Listen(4242);
 *     }
 *     public override void _Process(double delta)
 *     {
 *         _server.Poll(); // Important!
 *         if (_server.IsConnectionAvailable())
 *         {
 *             PacketPeerUdp peer = _server.TakeConnection();
 *             byte[] packet = peer.GetPacket();
 *             GD.Print($"Accepted Peer: {peer.GetPacketIP()}:{peer.GetPacketPort()}");
 *             GD.Print($"Received Data: {packet.GetStringFromUtf8()}");
 *             // Reply so it knows we received the message.
 *             peer.PutPacket(packet);
 *             // Keep a reference so we can keep contacting the remote peer.
 *             _peers.Add(peer);
 *         }
 *         foreach (var peer in _peers)
 *         {
 *             // Do something with the peers.
 *         }
 *     }
 * }
 * 
 * @summary 
 * 
 *
 * @example 
 * 
 * 
 * # client_node.gd
 * class_name ClientNode
 * extends Node
 * var udp := PacketPeerUDP.new()
 * var connected = false
 * func _ready():
 *     udp.connect_to_host("127.0.0.1", 4242)
 * func _process(delta):
 *     if !connected:
 *         # Try to contact server
 *         udp.put_packet("The answer is... 42!".to_utf8_buffer())
 *     if udp.get_available_packet_count() > 0:
 *         print("Connected: %s" % udp.get_packet().get_string_from_utf8())
 *         connected = true
 * 
 * 
 * // ClientNode.cs
 * using Godot;
 * public partial class ClientNode : Node
 * {
 *     private PacketPeerUdp _udp = new PacketPeerUdp();
 *     private bool _connected = false;
 *     public override void _Ready()
 *     {
 *         _udp.ConnectToHost("127.0.0.1", 4242);
 *     }
 *     public override void _Process(double delta)
 *     {
 *         if (!_connected)
 *         {
 *             // Try to contact server
 *             _udp.PutPacket("The Answer Is..42!".ToUtf8Buffer());
 *         }
 *         if (_udp.GetAvailablePacketCount() > 0)
 *         {
 *             GD.Print($"Connected: {_udp.GetPacket().GetStringFromUtf8()}");
 *             _connected = true;
 *         }
 *     }
 * }
 * 
 * @summary 
 * 
 *
*/
  new(): UDPServer; 
  static "new"(): UDPServer 


/** Define the maximum number of pending connections, during [method poll], any new pending connection exceeding that value will be automatically dropped. Setting this value to [code]0[/code] effectively prevents any new pending connection to be accepted (e.g. when all your players have connected). */
max_pending_connections: int;

/** Returns the local port this server is listening to. */
get_local_port(): int;

/** Returns [code]true[/code] if a packet with a new address/port combination was received on the socket. */
is_connection_available(): boolean;

/** Returns [code]true[/code] if the socket is open and listening on a port. */
is_listening(): boolean;

/** Starts the server by opening a UDP socket listening on the given [param port]. You can optionally specify a [param bind_address] to only listen for packets sent to that address. See also [method PacketPeerUDP.bind]. */
listen(): int;

/** Call this method at regular intervals (e.g. inside [method Node._process]) to process new packets. And packet from known address/port pair will be delivered to the appropriate [PacketPeerUDP], any packet received from an unknown address/port pair will be added as a pending connection (see [method is_connection_available], [method take_connection]). The maximum number of pending connection is defined via [member max_pending_connections]. */
poll(): int;

/** Stops the server, closing the UDP socket if open. Will close all connected [PacketPeerUDP] accepted via [method take_connection] (remote peers will not be notified). */
stop(): void;

/** Returns the first pending connection (connected to the appropriate address/port). Will return [code]null[/code] if no new connection is available. See also [method is_connection_available], [method PacketPeerUDP.connect_to_host]. */
take_connection(): PacketPeerUDP;

  connect<T extends SignalsOf<UDPServer>>(signal: T, method: SignalFunction<UDPServer[T]>): number;






}

