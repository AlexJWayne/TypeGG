import { Node, SyntaxKind } from 'ts-morph'

import { printAstTree } from '../../util/debug'
import { line } from '../../util/line'

import { parseExpressionStatement } from './expressionStatement'
import { parseIfStatement } from './ifStatement'
import { parseReturnStatement } from './returnStatement'
import { parseVariableStatement } from './variableStatement'

export function parseStatements(statements: Node[]): string {
  if (statements.length === 0) {
    return line('pass')
  }

  return statements
    .map((statement) => {
      if (statement.isKind(SyntaxKind.IfStatement))
        return parseIfStatement(statement)

      if (statement.isKind(SyntaxKind.ReturnStatement))
        return parseReturnStatement(statement)

      if (statement.isKind(SyntaxKind.ExpressionStatement))
        return parseExpressionStatement(statement)

      if (statement.isKind(SyntaxKind.VariableStatement))
        return parseVariableStatement(statement)

      console.error('Unknown statement kind', statement.getKindName())
      printAstTree(statement)
      return statement.getText()
    })
    .join('')
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('invocation', () => {
    expect(`
      export default class Foo {
        bar(): void {
          print("hello");
        }
      }
    `).toCompileTo(`
      class_name Foo
      func bar() -> void:
          print("hello")
    `)
  })
}
