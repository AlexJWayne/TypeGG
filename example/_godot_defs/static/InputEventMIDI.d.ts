
/**
 * InputEventMIDI allows receiving input events from MIDI (Musical Instrument Digital Interface) devices such as a piano.
 *
 * MIDI signals can be sent over a 5-pin MIDI connector or over USB, if your device supports both be sure to check the settings in the device to see which output it's using.
 *
 * To receive input events from MIDI devices, you need to call [method OS.open_midi_inputs]. You can check which devices are detected using [method OS.get_connected_midi_inputs].
 *
 * @example 
 * 
 * 
 * func _ready():
 *     OS.open_midi_inputs()
 *     print(OS.get_connected_midi_inputs())
 * func _input(input_event):
 *     if input_event is InputEventMIDI:
 *         _print_midi_info(input_event)
 * func _print_midi_info(midi_event: InputEventMIDI):
 *     print(midi_event)
 *     print("Channel " + str(midi_event.channel))
 *     print("Message " + str(midi_event.message))
 *     print("Pitch " + str(midi_event.pitch))
 *     print("Velocity " + str(midi_event.velocity))
 *     print("Instrument " + str(midi_event.instrument))
 *     print("Pressure " + str(midi_event.pressure))
 *     print("Controller number: " + str(midi_event.controller_number))
 *     print("Controller value: " + str(midi_event.controller_value))
 * 
 * 
 * public override void _Ready()
 * {
 *     OS.OpenMidiInputs();
 *     GD.Print(OS.GetConnectedMidiInputs());
 * }
 * public override void _Input(InputEvent @event)
 * {
 *     if (@event is InputEventMIDI midiEvent)
 *     {
 *         PrintMIDIInfo(midiEvent);
 *     }
 * }
 * private void PrintMIDIInfo(InputEventMIDI midiEvent)
 * {
 *     GD.Print(midiEvent);
 *     GD.Print($"Channel {midiEvent.Channel}");
 *     GD.Print($"Message {midiEvent.Message}");
 *     GD.Print($"Pitch {midiEvent.Pitch}");
 *     GD.Print($"Velocity {midiEvent.Velocity}");
 *     GD.Print($"Instrument {midiEvent.Instrument}");
 *     GD.Print($"Pressure {midiEvent.Pressure}");
 *     GD.Print($"Controller number: {midiEvent.ControllerNumber}");
 *     GD.Print($"Controller value: {midiEvent.ControllerValue}");
 * }
 * 
 * @summary 
 * 
 *
 * Note that Godot does not currently support MIDI output, so there is no way to emit MIDI signals from Godot. Only MIDI input works.
 *
*/
declare class InputEventMIDI extends InputEvent  {

  
/**
 * InputEventMIDI allows receiving input events from MIDI (Musical Instrument Digital Interface) devices such as a piano.
 *
 * MIDI signals can be sent over a 5-pin MIDI connector or over USB, if your device supports both be sure to check the settings in the device to see which output it's using.
 *
 * To receive input events from MIDI devices, you need to call [method OS.open_midi_inputs]. You can check which devices are detected using [method OS.get_connected_midi_inputs].
 *
 * @example 
 * 
 * 
 * func _ready():
 *     OS.open_midi_inputs()
 *     print(OS.get_connected_midi_inputs())
 * func _input(input_event):
 *     if input_event is InputEventMIDI:
 *         _print_midi_info(input_event)
 * func _print_midi_info(midi_event: InputEventMIDI):
 *     print(midi_event)
 *     print("Channel " + str(midi_event.channel))
 *     print("Message " + str(midi_event.message))
 *     print("Pitch " + str(midi_event.pitch))
 *     print("Velocity " + str(midi_event.velocity))
 *     print("Instrument " + str(midi_event.instrument))
 *     print("Pressure " + str(midi_event.pressure))
 *     print("Controller number: " + str(midi_event.controller_number))
 *     print("Controller value: " + str(midi_event.controller_value))
 * 
 * 
 * public override void _Ready()
 * {
 *     OS.OpenMidiInputs();
 *     GD.Print(OS.GetConnectedMidiInputs());
 * }
 * public override void _Input(InputEvent @event)
 * {
 *     if (@event is InputEventMIDI midiEvent)
 *     {
 *         PrintMIDIInfo(midiEvent);
 *     }
 * }
 * private void PrintMIDIInfo(InputEventMIDI midiEvent)
 * {
 *     GD.Print(midiEvent);
 *     GD.Print($"Channel {midiEvent.Channel}");
 *     GD.Print($"Message {midiEvent.Message}");
 *     GD.Print($"Pitch {midiEvent.Pitch}");
 *     GD.Print($"Velocity {midiEvent.Velocity}");
 *     GD.Print($"Instrument {midiEvent.Instrument}");
 *     GD.Print($"Pressure {midiEvent.Pressure}");
 *     GD.Print($"Controller number: {midiEvent.ControllerNumber}");
 *     GD.Print($"Controller value: {midiEvent.ControllerValue}");
 * }
 * 
 * @summary 
 * 
 *
 * Note that Godot does not currently support MIDI output, so there is no way to emit MIDI signals from Godot. Only MIDI input works.
 *
*/
  new(): InputEventMIDI; 
  static "new"(): InputEventMIDI 


/** The MIDI channel of this input event. There are 16 channels, so this value ranges from 0 to 15. MIDI channel 9 is reserved for the use with percussion instruments, the rest of the channels are for non-percussion instruments. */
channel: int;

/** If the message is [constant MIDI_MESSAGE_CONTROL_CHANGE], this indicates the controller number, otherwise this is zero. Controllers include devices such as pedals and levers. */
controller_number: int;

/** If the message is [constant MIDI_MESSAGE_CONTROL_CHANGE], this indicates the controller value, otherwise this is zero. Controllers include devices such as pedals and levers. */
controller_value: int;

/** The instrument of this input event. This value ranges from 0 to 127. Refer to the instrument list on the General MIDI wikipedia article to see a list of instruments, except that this value is 0-index, so subtract one from every number on that chart. A standard piano will have an instrument number of 0. */
instrument: int;

/**
 * Returns a value indicating the type of message for this MIDI signal. This is a member of the [enum MIDIMessage] enum.
 *
 * For MIDI messages between 0x80 and 0xEF, only the left half of the bits are returned as this value, as the other part is the channel (ex: 0x94 becomes 0x9). For MIDI messages from 0xF0 to 0xFF, the value is returned as-is.
 *
 * Notes will return [constant MIDI_MESSAGE_NOTE_ON] when activated, but they might not always return [constant MIDI_MESSAGE_NOTE_OFF] when deactivated, therefore your code should treat the input as stopped if some period of time has passed.
 *
 * Some MIDI devices may send [constant MIDI_MESSAGE_NOTE_ON] with zero velocity instead of [constant MIDI_MESSAGE_NOTE_OFF].
 *
 * For more information, see the note in [member velocity] and the MIDI message status byte list chart linked above.
 *
*/
message: int;

/** The pitch index number of this MIDI signal. This value ranges from 0 to 127. On a piano, middle C is 60, and A440 is 69, see the "MIDI note" column of the piano key frequency chart on Wikipedia for more information. */
pitch: int;

/** The pressure of the MIDI signal. This value ranges from 0 to 127. For many devices, this value is always zero. */
pressure: int;

/**
 * The velocity of the MIDI signal. This value ranges from 0 to 127. For a piano, this corresponds to how quickly the key was pressed, and is rarely above about 110 in practice.
 *
 * **Note:** Some MIDI devices may send a [constant MIDI_MESSAGE_NOTE_ON] message with zero velocity and expect this to be treated the same as a [constant MIDI_MESSAGE_NOTE_OFF] message, but device implementations vary so Godot reports event data exactly as received. Depending on the hardware and the needs of the game/app, this MIDI quirk can be handled robustly with a couple lines of script (check for [constant MIDI_MESSAGE_NOTE_ON] with velocity zero).
 *
*/
velocity: int;



  connect<T extends SignalsOf<InputEventMIDI>>(signal: T, method: SignalFunction<InputEventMIDI[T]>): number;






}

