import { GDKind } from '../grammar/kind'
import { GDVariableDeclaration } from '../grammar/nodes'
import { line } from '../util/line'

import { renderExpression } from './expression'
import { renderTypeAnnotation } from './typeAnnotation'

export function renderVariableDeclaration(node: GDVariableDeclaration): string {
  return line(
    'var ',
    node.name,
    renderTypeAnnotation(node.type),
    node.initial && ` = ${renderExpression(node.initial)}`,
  )
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('variable declaration', () => {
    expect(
      renderVariableDeclaration({
        kind: GDKind.VariableDeclaration,
        name: 'foo',
        type: null,
        initial: null,
      }),
    ).toEqual('var foo\n')
  })

  test('with type', () => {
    expect(
      renderVariableDeclaration({
        kind: GDKind.VariableDeclaration,
        name: 'foo',
        type: 'int',
        initial: null,
      }),
    ).toEqual('var foo: int\n')
  })

  test('with initial value', () => {
    expect(
      renderVariableDeclaration({
        kind: GDKind.VariableDeclaration,
        name: 'foo',
        type: null,
        initial: { kind: GDKind.NumericLiteral, value: 123 },
      }),
    ).toEqual('var foo = 123\n')
  })

  test('with type and initial value', () => {
    expect(
      renderVariableDeclaration({
        kind: GDKind.VariableDeclaration,
        name: 'foo',
        type: 'int',
        initial: { kind: GDKind.NumericLiteral, value: 123 },
      }),
    ).toEqual('var foo: int = 123\n')
  })
}
