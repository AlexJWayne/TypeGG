import { VariableDeclaration } from 'ts-morph'

import { getTypeAnnotation } from '../../util/getGdType'
import { line } from '../../util/line'

import { parseExpression } from '../expressions/expression'

export function parseVariableDeclaration(
  variableDeclaration: VariableDeclaration,
): string {
  const identifier = variableDeclaration.getNameNode().getText()
  const typeAnnotation = getTypeAnnotation(variableDeclaration.getType())
  const valueExpression = variableDeclaration.getInitializer()
  const value = valueExpression && parseExpression(valueExpression)

  return line('var ', identifier, typeAnnotation, value && ` = ${value}`)
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

  test('multiple', () => {
    expect(`
      export default class Foo {
        foo() {
          let foo = "hello", bar: number
        }
      }
    `).toCompileTo(`
      class_name Foo
      func foo() -> void:
          var foo: String = "hello"
          var bar: float
    `)
  })
}
