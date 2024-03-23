import { GDKind } from '../grammar/kind'
import { GDIfStatement } from '../grammar/nodes'
import { indent } from '../util/indent'
import { line } from '../util/line'

import { renderExpression } from './expression'
import { renderStatement } from './statement'

export function renderIfStatement(node: GDIfStatement): string {
  return [
    line(`if ${renderExpression(node.condition)}:`),

    node.thenStatements.length > 0
      ? indent(node.thenStatements.map(renderStatement).join(''))
      : indent('pass'),

    // TODO: else if

    node.elseStatements &&
      node.elseStatements.length > 0 && [
        line('else:'),
        indent(node.elseStatements.map(renderStatement).join('')),
      ],
  ]
    .flat()
    .join('')
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('empty', () => {
    expect(
      renderIfStatement({
        kind: GDKind.IfStatement,
        condition: { kind: GDKind.BooleanLiteral, value: true },
        thenStatements: [],
        elseIfs: [],
        elseStatements: null,
      }),
    ).toEqualGdScript(`
      if true:
          pass
    `)
  })

  test('return', () => {
    expect(
      renderIfStatement({
        kind: GDKind.IfStatement,
        condition: { kind: GDKind.BooleanLiteral, value: true },
        thenStatements: [
          {
            kind: GDKind.ReturnStatement,
            expression: { kind: GDKind.StringLiteral, value: 'bar' },
          },
        ],
        elseIfs: [],
        elseStatements: null,
      }),
    ).toEqualGdScript(`
      if true:
          return "bar"
    `)
  })

  test('nested', () => {
    expect(
      renderIfStatement({
        kind: GDKind.IfStatement,
        condition: { kind: GDKind.BooleanLiteral, value: true },
        thenStatements: [
          {
            kind: GDKind.IfStatement,
            condition: { kind: GDKind.BooleanLiteral, value: false },
            thenStatements: [
              { kind: GDKind.ReturnStatement, expression: null },
            ],
            elseIfs: [],
            elseStatements: null,
          },
        ],
        elseIfs: [],
        elseStatements: null,
      }),
    ).toEqualGdScript(`
      if true:
          if false:
              return
    `)
  })

  test('else', () => {
    expect(
      renderIfStatement({
        kind: GDKind.IfStatement,
        condition: { kind: GDKind.BooleanLiteral, value: true },
        thenStatements: [
          {
            kind: GDKind.ReturnStatement,
            expression: { kind: GDKind.StringLiteral, value: 'foo' },
          },
        ],
        elseIfs: [],
        elseStatements: [
          {
            kind: GDKind.ReturnStatement,
            expression: { kind: GDKind.StringLiteral, value: 'bar' },
          },
        ],
      }),
    ).toEqualGdScript(`
      if true:
          return "foo"
      else:
          return "bar"
    `)
  })
}
