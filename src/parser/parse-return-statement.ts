import { parseExpression } from './parse-expression'
import { ReturnStatement } from 'ts-morph'

import { line } from '../util/line'

export function parseReturnStatement(returnStatement: ReturnStatement): string {
  const returnExpression = returnStatement.getExpression()

  const output = ['return']
  if (returnExpression) output.push(parseExpression(returnExpression))

  return line(output.join(' '))
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('empty', () => {
    expect(`
      export default class Foo {
        bar(): void {
          return;
        }
      }
    `).toCompileTo(`
      class_name Foo
      func bar() -> void:
          return
    `)
  })

  test('value', () => {
    expect(`
      export default class Foo {
        bar(): string {
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
