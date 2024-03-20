import { ParenthesizedExpression } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDParenthesizedExpression } from '../../grammar/nodes'

import { parseExpression } from './expression'

export function parseParenthesizedExpression(
  parenthesizedExpression: ParenthesizedExpression,
): GDParenthesizedExpression {
  return {
    kind: GDKind.ParenthesizedExpression,
    expression: parseExpression(parenthesizedExpression.getExpression()),
  }
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test.only('single parentheses', () => {
    expect('(1)').toParseStatements([
      {
        kind: GDKind.ParenthesizedExpression,
        expression: {
          kind: GDKind.NumericLiteral,
          value: 1,
        },
      },
    ])
  })
}
