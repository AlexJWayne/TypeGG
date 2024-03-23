import { ReturnStatement } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDReturnStatement } from '../../grammar/nodes'

import { parseExpression } from '../expressions/expression'

export function parseReturnStatement(
  returnStatement: ReturnStatement,
): GDReturnStatement {
  const returnExpression = returnStatement.getExpression()
  return {
    kind: GDKind.ReturnStatement,
    expression: returnExpression ? parseExpression(returnExpression) : null,
  }
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('empty', () => {
    expect('return').toParseStatements([
      { kind: GDKind.ReturnStatement, expression: null },
    ])
  })

  test('literal', () => {
    expect("return 'foo'").toParseStatements([
      {
        kind: GDKind.ReturnStatement,
        expression: { kind: GDKind.StringLiteral, value: 'foo' },
      },
    ])
  })

  test('identifier', () => {
    expect('return foo').toParseStatements([
      {
        kind: GDKind.ReturnStatement,
        expression: { kind: GDKind.Identifier, name: 'foo' },
      },
    ])
  })

  test('expression', () => {
    expect('return 1 + 2').toParseStatements([
      {
        kind: GDKind.ReturnStatement,
        expression: {
          kind: GDKind.BinaryExpression,
          left: { kind: GDKind.NumericLiteral, value: 1 },
          operator: '+',
          right: { kind: GDKind.NumericLiteral, value: 2 },
        },
      },
    ])
  })
}
