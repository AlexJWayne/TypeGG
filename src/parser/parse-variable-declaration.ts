import { parseExpression } from './parse-expression'
import { VariableDeclaration } from 'ts-morph'

import { getGdType } from '../util/get-gd-type'
import { line } from '../util/line'

export function parseVariableDeclaration(
  variableDeclaration: VariableDeclaration,
): string {
  const identifier = variableDeclaration.getNameNode().getText()
  const type = getGdType(variableDeclaration.getType())
  const valueExpression = variableDeclaration.getInitializer()
  const value = valueExpression && parseExpression(valueExpression)

  return line(`var ${identifier}: ${type}`, value && ` = ${value}`)
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('unintialized', () => {
    expect(`
      export default class Foo {
        foo() {
          let foo: number
        }
      }
    `).toCompileTo(`
      class_name Foo
      func foo() -> void:
          var foo: float
    `)
  })

  test('initialized', () => {
    expect(`
      export default class Foo {
        foo() {
          let foo = "hello"
        }
      }
    `).toCompileTo(`
      class_name Foo
      func foo() -> void:
          var foo: String = "hello"
    `)
  })
}
