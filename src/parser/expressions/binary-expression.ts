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
    expect('1 + 2').toParseExpression({
      kind: GDKind.BinaryExpression,
      left: { kind: GDKind.NumericLiteral, value: 1 },
      operator: '+',
      right: { kind: GDKind.NumericLiteral, value: 2 },
    })
  })
}
