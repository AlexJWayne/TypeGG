import { ArrowFunction, SyntaxKind } from 'ts-morph'

import { indent } from '../util/indent'
import { line } from '../util/line'

import { parseExpression } from './parse-expression'
import { parseStatements } from './parse-statements'

export function parseArrowFunction(arrowFunction: ArrowFunction): string {
  const hasStatements = arrowFunction.getFirstChildByKind(SyntaxKind.Block)

  const body = hasStatements
    ? parseStatements(arrowFunction.getStatements()) // () => { ... }
    : line(`return ${parseExpression(arrowFunction.getBody())}`) // () => ...

  return [
    line('func():'), //
    indent(body),
  ].join('')
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('empty', () => {
    expect(`
      export default class Foo {
        foo() {
          const fn = () => {}
        }
      }
    `).toCompileTo(`
      class_name Foo
      func foo() -> void:
          var fn: Callable = func():
              pass
    `)
  })

  test('no braces return', () => {
    expect(`
      export default class Foo {
        foo() {
          const fn = () => 123
        }
      }
    `).toCompileTo(`
      class_name Foo
      func foo() -> void:
          var fn: Callable = func():
              return 123
    `)
  })

  test('braces', () => {
    expect(`
      export default class Foo {
        foo() {
          const fn = () => {
            print('foo')
            return 123
          }
        }
      }
    `).toCompileTo(`
      class_name Foo
      func foo() -> void:
          var fn: Callable = func():
              print("foo")
              return 123
    `)
  })
}
