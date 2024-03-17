
/**
 * Provides a low-level interface for creating parsers for [url=https://en.wikipedia.org/wiki/XML]XML[/url] files. This class can serve as base to make custom XML parsers.
 *
 * To parse XML, you must open a file with the [method open] method or a buffer with the [method open_buffer] method. Then, the [method read] method must be called to parse the next nodes. Most of the methods take into consideration the currently parsed node.
 *
 * Here is an example of using [XMLParser] to parse a SVG file (which is based on XML), printing each element and its attributes as a dictionary:
 *
 * @example 
 * 
 * 
 * var parser = XMLParser.new()
 * parser.open("path/to/file.svg")
 * while parser.read() != ERR_FILE_EOF:
 *     if parser.get_node_type() == XMLParser.NODE_ELEMENT:
 *         var node_name = parser.get_node_name()
 *         var attributes_dict = {}
 *         for idx in range(parser.get_attribute_count()):
 *             attributes_dict[parser.get_attribute_name(idx)] = parser.get_attribute_value(idx)
 *         print("The ", node_name, " element has the following attributes: ", attributes_dict)
 * 
 * 
 * var parser = new XmlParser();
 * parser.Open("path/to/file.svg");
 * while (parser.Read() != Error.FileEof)
 * {
 *     if (parser.GetNodeType() == XmlParser.NodeType.Element)
 *     {
 *         var nodeName = parser.GetNodeName();
 *         var attributesDict = new Godot.Collections.Dictionary();
 *         for (int idx = 0; idx < parser.GetAttributeCount(); idx++)
 *         {
 *             attributesDict[parser.GetAttributeName(idx)] = parser.GetAttributeValue(idx);
 *         }
 *         GD.Print($"The {nodeName} element has the following attributes: {attributesDict}");
 *     }
 * }
 * 
 * @summary 
 * 
 *
*/
declare class XMLParser extends RefCounted  {

  
/**
 * Provides a low-level interface for creating parsers for [url=https://en.wikipedia.org/wiki/XML]XML[/url] files. This class can serve as base to make custom XML parsers.
 *
 * To parse XML, you must open a file with the [method open] method or a buffer with the [method open_buffer] method. Then, the [method read] method must be called to parse the next nodes. Most of the methods take into consideration the currently parsed node.
 *
 * Here is an example of using [XMLParser] to parse a SVG file (which is based on XML), printing each element and its attributes as a dictionary:
 *
 * @example 
 * 
 * 
 * var parser = XMLParser.new()
 * parser.open("path/to/file.svg")
 * while parser.read() != ERR_FILE_EOF:
 *     if parser.get_node_type() == XMLParser.NODE_ELEMENT:
 *         var node_name = parser.get_node_name()
 *         var attributes_dict = {}
 *         for idx in range(parser.get_attribute_count()):
 *             attributes_dict[parser.get_attribute_name(idx)] = parser.get_attribute_value(idx)
 *         print("The ", node_name, " element has the following attributes: ", attributes_dict)
 * 
 * 
 * var parser = new XmlParser();
 * parser.Open("path/to/file.svg");
 * while (parser.Read() != Error.FileEof)
 * {
 *     if (parser.GetNodeType() == XmlParser.NodeType.Element)
 *     {
 *         var nodeName = parser.GetNodeName();
 *         var attributesDict = new Godot.Collections.Dictionary();
 *         for (int idx = 0; idx < parser.GetAttributeCount(); idx++)
 *         {
 *             attributesDict[parser.GetAttributeName(idx)] = parser.GetAttributeValue(idx);
 *         }
 *         GD.Print($"The {nodeName} element has the following attributes: {attributesDict}");
 *     }
 * }
 * 
 * @summary 
 * 
 *
*/
  new(): XMLParser; 
  static "new"(): XMLParser 



/**
 * Returns the number of attributes in the currently parsed element.
 *
 * **Note:** If this method is used while the currently parsed node is not [constant NODE_ELEMENT] or [constant NODE_ELEMENT_END], this count will not be updated and will still reflect the last element.
 *
*/
get_attribute_count(): int;

/** Returns the name of an attribute of the currently parsed element, specified by the [param idx] index. */
get_attribute_name(): string;

/** Returns the value of an attribute of the currently parsed element, specified by the [param idx] index. */
get_attribute_value(): string;

/** Returns the current line in the parsed file, counting from 0. */
get_current_line(): int;

/** Returns the value of an attribute of the currently parsed element, specified by its [param name]. This method will raise an error if the element has no such attribute. */
get_named_attribute_value(): string;

/** Returns the value of an attribute of the currently parsed element, specified by its [param name]. This method will return an empty string if the element has no such attribute. */
get_named_attribute_value_safe(): string;

/** Returns the contents of a text node. This method will raise an error if the current parsed node is of any other type. */
get_node_data(): string;

/** Returns the name of an element node. This method will raise an error if the currently parsed node is not of [constant NODE_ELEMENT] or [constant NODE_ELEMENT_END] type. */
get_node_name(): string;

/** Returns the byte offset of the currently parsed node since the beginning of the file or buffer. This is usually equivalent to the number of characters before the read position. */
get_node_offset(): int;

/** Returns the type of the current node. Compare with [enum NodeType] constants. */
get_node_type(): int;

/** Returns [code]true[/code] if the currently parsed element has an attribute with the [param name]. */
has_attribute(): boolean;

/** Returns [code]true[/code] if the currently parsed element is empty, e.g. [code]<element />[/code]. */
is_empty(): boolean;

/** Opens an XML [param file] for parsing. This method returns an error code. */
open(): int;

/** Opens an XML raw [param buffer] for parsing. This method returns an error code. */
open_buffer(): int;

/** Parses the next node in the file. This method returns an error code. */
read(): int;

/** Moves the buffer cursor to a certain offset (since the beginning) and reads the next node there. This method returns an error code. */
seek(): int;

/** Skips the current section. If the currently parsed node contains more inner nodes, they will be ignored and the cursor will go to the closing of the current element. */
skip_section(): void;

  connect<T extends SignalsOf<XMLParser>>(signal: T, method: SignalFunction<XMLParser[T]>): number;



/**
 * There's no node (no file or buffer opened).
 *
*/
static NODE_NONE: any;

/**
 * An element node type, also known as a tag, e.g. `<title>`.
 *
*/
static NODE_ELEMENT: any;

/**
 * An end of element node type, e.g. `</title>`.
 *
*/
static NODE_ELEMENT_END: any;

/**
 * A text node type, i.e. text that is not inside an element. This includes whitespace.
 *
*/
static NODE_TEXT: any;

/**
 * A comment node type, e.g. `<!--A comment-->`.
 *
*/
static NODE_COMMENT: any;

/**
 * A node type for CDATA (Character Data) sections, e.g. `<![CDATA[CDATA section]]>`.
 *
*/
static NODE_CDATA: any;

/**
 * An unknown node type.
 *
*/
static NODE_UNKNOWN: any;



}

