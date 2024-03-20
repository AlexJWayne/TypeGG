import { BinaryExpression } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDBinaryExpression } from '../../grammar/nodes'

import { parseExpression } from './expression'

export function parseBinaryExpression(
  node: BinaryExpression,
): GDBinaryExpression {
  return {
    kind: GDKind.BinaryExpression,
    left: parseExpression(node.getLeft()),
    operator: node.getOperatorToken().getText(),
    right: parseExpression(node.getRight()),
  }
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('addition', () => {
    expect(`
      export class Foo {
        foo() {
          return 1 + 2
        }
      }
    `).toCompileTo(`
      class_name Foo
      func foo() -> float:
          return 1 + 2
    `)
  })
}
