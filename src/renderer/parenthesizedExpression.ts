import { GDKind } from '../grammar/kind'
import { GDParenthesizedExpression } from '../grammar/nodes'

import { renderExpression } from './expression'

export function renderParenthesizedExpression(
  parenthesizedExpression: GDParenthesizedExpression,
): string {
  return `(${renderExpression(parenthesizedExpression.expression)})`
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('simple', () => {
    expect(
      renderParenthesizedExpression({
        kind: GDKind.ParenthesizedExpression,
        expression: {
          kind: GDKind.Identifier,
          name: 'foo',
        },
      }),
    ).toEqual('(foo)')
  })
}
