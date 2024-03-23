import { GDKind } from '../grammar/kind'
import { GDBinaryExpression } from '../grammar/nodes'

import { renderExpression } from './expression'

export function renderBinaryExpression(
  binaryExpression: GDBinaryExpression,
): string {
  return [
    renderExpression(binaryExpression.left),
    binaryExpression.operator,
    renderExpression(binaryExpression.right),
  ].join(' ')
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('addition', () => {
    expect(
      renderBinaryExpression({
        kind: GDKind.BinaryExpression,
        operator: '+',
        left: {
          kind: GDKind.NumericLiteral,
          value: 1,
        },
        right: {
          kind: GDKind.NumericLiteral,
          value: 2,
        },
      }),
    ).toEqual('1 + 2')
  })
}
