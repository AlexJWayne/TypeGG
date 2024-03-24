import { VariableDeclaration } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDVariableDeclaration } from '../../grammar/nodes'
import { getGdTypeForNode } from '../../util/get-gd-type'

import { parseExpression } from '../expressions/expression'

export function parseVariableDeclaration(
  variableDeclaration: VariableDeclaration,
): GDVariableDeclaration {
  const initializer = variableDeclaration.getInitializer()
  return {
    kind: GDKind.VariableDeclaration,
    name: variableDeclaration.getNameNode().getText(),
    type: getGdTypeForNode(variableDeclaration),
    initial: initializer ? parseExpression(initializer) : null,
  }
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('unintialized let', () => {
    expect('let foo: number').toParseStatements([
      {
        kind: GDKind.Fragment,
        statements: [
          {
            kind: GDKind.VariableDeclaration,
            name: 'foo',
            type: 'float',
            initial: null,
          },
        ],
      },
    ])
  })

  test('initialized let', () => {
    expect('let foo = "hello"').toParseStatements([
      {
        kind: GDKind.Fragment,
        statements: [
          {
            kind: GDKind.VariableDeclaration,
            name: 'foo',
            type: 'String',
            initial: { kind: GDKind.StringLiteral, value: 'hello' },
          },
        ],
      },
    ])
  })

  test('initialized const', () => {
    expect('const foo = "hello"').toParseStatements([
      {
        kind: GDKind.Fragment,
        statements: [
          {
            kind: GDKind.VariableDeclaration,
            name: 'foo',
            type: 'String',
            initial: { kind: GDKind.StringLiteral, value: 'hello' },
          },
        ],
      },
    ])
  })
}
