import { MethodDeclaration } from 'ts-morph'

import { getGdType } from '../../util/getGdType'
import { line } from '../../util/line'

import { parseParameter } from './parameter'

export function parseMethodDeclaration(methodNode: MethodDeclaration): string {
  const methodName = methodNode.getName()
  const methodReturnType = getGdType(methodNode.getReturnType())

  const parameters = methodNode.getParameters().map(parseParameter).join(', ')

  return line(
    '\n',
    methodNode.isStatic() && 'static ',
    'func ',
    `${methodName}(${parameters}) `,
    '-> ',
    `${methodReturnType}:`,
  )
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('empty method', () => {
    expect(`
      export default class Foo {
        bar() {}
      }
    `).toCompileTo(`
      class_name Foo
      func bar() -> void:
          pass
    `)
  })

  test('static method', () => {
    expect(`
      export default class Foo {
        static bar() {}
      }
    `).toCompileTo(`
      class_name Foo
      static func bar() -> void:
          pass
    `)
  })

  test('explicit return type', () => {
    expect(`
      export default class Foo {
        bar(): string {}
      }
    `).toCompileTo(`
      class_name Foo
      func bar() -> String:
          pass
    `)
  })

  test('implicit return type', () => {
    expect(`
      export default class Foo {
        bar() {
          return "baz";
        }
      }
    `).toCompileTo(`
      class_name Foo
      func bar() -> String:
          return "baz"
    `)
  })
}
