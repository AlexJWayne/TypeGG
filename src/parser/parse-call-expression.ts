import { CallExpression, SyntaxKind } from 'ts-morph'

import { parseExpression } from './parse-expression'

export function parseCallExpression(callExpression: CallExpression): string {
  const identifier = callExpression
    .getFirstDescendantByKindOrThrow(SyntaxKind.Identifier)
    .getText()

  const args = callExpression.getArguments().map(parseExpression)

  return `${identifier}(${args.join(', ')})`
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('global function', () => {
    expect(`
      export class Foo {
        foo() {
          print()
        }
      }
    `).toCompileTo(`
      class_name Foo
      func foo() -> void:
          print()
    `)
  })

  test('instance method', () => {
    expect(`
      export class Foo {
        foo() {
          this.bar()
        }
        bar() {}
      }
    `).toCompileTo(`
      class_name Foo
      func foo() -> void:
          bar()
      func bar() -> void:
          pass
    `)
  })

  test('with literal arguments', () => {
    expect(`
      export class Foo {
        foo() {
          print('foo', 'bar')
        }
      }
    `).toCompileTo(`
      class_name Foo
      func foo() -> void:
          print("foo", "bar")
    `)
  })

  test('with variable arguments', () => {
    expect(`
      export class Foo {
        foo() {
          var a = 'foo'
          var b = 'bar'
          print(a, b)
        }
      }
    `).toCompileTo(`
      class_name Foo
      func foo() -> void:
          var a: String = "foo"
          var b: String = "bar"
          print(a, b)
    `)
  })
}
