import { VariableStatement } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDFragment } from '../../grammar/nodes'

import { parseVariableDeclaration } from './variableDeclaration'

export function parseVariableStatement(
  variableStatement: VariableStatement,
): GDFragment {
  return {
    kind: GDKind.Fragment,
    statements: variableStatement
      .getDeclarations()
      .map(parseVariableDeclaration),
  }
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('multiple', () => {
    expect('let foo = "hello", bar: number').toParseStatements([
      {
        kind: GDKind.Fragment,
        statements: [
          {
            kind: GDKind.VariableDeclaration,
            name: 'foo',
            type: 'String',
            initial: { kind: GDKind.StringLiteral, value: 'hello' },
          },
          {
            kind: GDKind.VariableDeclaration,
            name: 'bar',
            type: 'float',
            initial: null,
          },
        ],
      },
    ])
  })
}
