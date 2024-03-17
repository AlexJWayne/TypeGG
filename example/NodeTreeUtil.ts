class NodeTreeUtil {
  static findAcestorByName(node: Node, name: string): Node | null {
    const foundNode = node.get_node(name)
    if (foundNode) return foundNode

    const parent = node.get_parent()
    if (parent) return NodeTreeUtil.findAcestorByName(parent, name)

    return null
  }
}
