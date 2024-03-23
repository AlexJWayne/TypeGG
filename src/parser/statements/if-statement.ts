import { IfStatement } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDIfStatement } from '../../grammar/nodes'

import { parseExpression } from '../expressions/expression'

import { parseStatement } from './statement'

export function parseIfStatement(statement: IfStatement): GDIfStatement {
  const thenStatement = statement.getThenStatement()
  const thenNodes =
    thenStatement.getChildSyntaxList()?.getChildren() ?? [thenStatement] ?? []

  const elseStatement = statement.getElseStatement()
  const elseNodes =
    elseStatement?.getChildSyntaxList()?.getChildren() ??
    (elseStatement && [elseStatement]) ??
    []

  return {
    kind: GDKind.IfStatement,
    condition: parseExpression(statement.getExpression()),
    thenStatements: thenNodes.map(parseStatement),
    elseIfs: [], // TODO
    elseStatements: elseStatement ? elseNodes.map(parseStatement) : null,
  }
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('empty', () => {
    expect('if (true) {}').toParseStatements([
      {
        kind: GDKind.IfStatement,
        condition: { kind: GDKind.BooleanLiteral, value: true },
        thenStatements: [],
        elseIfs: [],
        elseStatements: null,
      },
    ])
  })

  test('return', () => {
    expect('if (true) { return "bar"; }').toParseStatements([
      {
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
      },
    ])
  })

  test('nested', () => {
    expect(`
      if (true) {
        if (false) {
          return;
        }
      }
    `).toParseStatements([
      {
        kind: GDKind.IfStatement,
        condition: { kind: GDKind.BooleanLiteral, value: true },
        thenStatements: [
          {
            kind: GDKind.IfStatement,
            condition: { kind: GDKind.BooleanLiteral, value: false },
            thenStatements: [
              {
                kind: GDKind.ReturnStatement,
                expression: null,
              },
            ],
            elseIfs: [],
            elseStatements: null,
          },
        ],
        elseIfs: [],
        elseStatements: null,
      },
    ])
  })

  test('else', () => {
    expect(`
      if (true) {
        return "foo";
      } else {
        return "bar";
      }
    `).toParseStatements([
      {
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
      },
    ])
  })

  test('without braces', () => {
    expect('if (true) return').toParseStatements([
      {
        kind: GDKind.IfStatement,
        condition: { kind: GDKind.BooleanLiteral, value: true },
        thenStatements: [
          {
            kind: GDKind.ReturnStatement,
            expression: null,
          },
        ],
        elseIfs: [],
        elseStatements: null,
      },
    ])
  })

  test('else without braces', () => {
    expect(`
      if (true) return 123;
      else return 456;
    `).toParseStatements([
      {
        kind: GDKind.IfStatement,
        condition: { kind: GDKind.BooleanLiteral, value: true },
        thenStatements: [
          {
            kind: GDKind.ReturnStatement,
            expression: { kind: GDKind.NumericLiteral, value: 123 },
          },
        ],
        elseIfs: [],
        elseStatements: [
          {
            kind: GDKind.ReturnStatement,
            expression: { kind: GDKind.NumericLiteral, value: 456 },
          },
        ],
      },
    ])
  })
}
