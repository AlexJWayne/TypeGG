import { parseExpressionStatement } from './parse-expression-statement'
import { parseIfStatement } from './parse-if-statement'
import { parseReturnStatement } from './parse-return-statement'
import { parseVariableStatement } from './parse-variable-statement'
import { Node, SyntaxKind } from 'ts-morph'

import { printAstTree } from '../util/debug'

export function parseStatements(statements: Node[]): string {
  if (statements.length === 0) {
    return 'pass'
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
    .join('\n')
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
