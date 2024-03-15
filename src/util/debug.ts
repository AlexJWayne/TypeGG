import { Node } from 'ts-morph'

/** Accepts any ts-morph `Node` and logs the types of its children recursively. */
export function printAstTree(node: Node, indent = 0) {
  console.log(' '.repeat(indent * 2), node.getKindName())
  for (const child of node.getChildren()) {
    printAstTree(child, indent + 1)
  }
}
