import { VariableDeclaration } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDVariableDeclaration } from '../../grammar/nodes'
import { getGdType } from '../../util/getGdType'

import { parseExpression } from '../expressions/expression'

export function parseVariableDeclaration(
  variableDeclaration: VariableDeclaration,
): GDVariableDeclaration {
  const initializer = variableDeclaration.getInitializer()
  return {
    kind: GDKind.VariableDeclaration,
    name: variableDeclaration.getNameNode().getText(),
    type: getGdType(variableDeclaration.getType()),
    initial: initializer ? parseExpression(initializer) : null,
  }
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
