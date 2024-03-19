import { GDNodeBase } from './nodes'

/**
 * Asserts that `node` is a node with kind of `kind`. Call with an explicit generic, sadly.
 *
 * ```
 * if (GD.isKind<GD.Identifier>(node, GD.Kind.Identifier)) {
 *   node.name // node has type `GD.Identifier`
 * }
 * ```
 */
export function isKind<T extends GDNodeBase>(
  node: GDNodeBase,
  kind: T['kind'],
): node is T {
  return node.kind === kind
}
