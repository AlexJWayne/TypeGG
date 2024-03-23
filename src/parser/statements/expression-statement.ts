import { ExpressionStatement } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDExpressionStatement } from '../../grammar/nodes'

import { parseExpression } from '../expressions/expression'

export function parseExpressionStatement(
  expressionStatement: ExpressionStatement,
): GDExpressionStatement {
  return {
    kind: GDKind.ExpressionStatement,
    expression: parseExpression(expressionStatement.getExpression()),
  }
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('expression', () => {
    expect('1').toParseStatements([
      {
        kind: GDKind.ExpressionStatement,
        expression: { kind: GDKind.NumericLiteral, value: 1 },
      },
    ])
  })
}
