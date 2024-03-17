import { Node } from 'ts-morph'

import { line } from '../../util/line'

import { parseStatement } from './statement'

export function parseStatements(statements: Node[]): string {
  if (statements.length === 0) return line('pass')
  return statements.map(parseStatement).join('')
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('no statements', () => {
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

  test('with statements', () => {
    expect(`
      export default class Foo {
        bar(): void {
          print('hello');
          print('world');
        }
      }
    `).toCompileTo(`
      class_name Foo
      func bar() -> void:
          print("hello")
          print("world")
    `)
  })
}
