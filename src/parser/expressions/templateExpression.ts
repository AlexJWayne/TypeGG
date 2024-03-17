import { TemplateExpression } from 'ts-morph'

import { parseExpression } from './expression'
import { parseStringLiteral } from './parseStringLiteral'

export function parseTemplateExpression(
  templateExpression: TemplateExpression,
): string {
  const head = parseStringLiteral(templateExpression.getHead())
  const spans = templateExpression
    .getTemplateSpans()
    .flatMap((span) => [
      `str(${parseExpression(span.getExpression())})`,
      parseStringLiteral(span.getLiteral()),
    ])

  return [head, ...spans].join(' + ')
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('empty', () => {
    expect(`
      export default class Foo {
        foo() {
          const str = \`\`
        }
      }
    `).toCompileTo(`
      class_name Foo
      func foo() -> void:
          var str: String = ""
    `)
  })

  test('simple value', () => {
    expect(`
      export default class Foo {
        foo() {
          const str = \`hello\`
        }
      }
    `).toCompileTo(`
      class_name Foo
      func foo() -> void:
          var str: String = "hello"
    `)
  })

  test('interpolated', () => {
    expect(`
      export default class Foo {
        foo() {
          const n: int = 123
          const str = \`hello \${n} and \${456}!\`
        }
      }
    `).toCompileTo(`
      class_name Foo
      func foo() -> void:
          var n: int = 123
          var str: String = "hello " + str(n) + " and " + str(456) + "!"
    `)
  })

  test('new lines', () => {
    expect(`
      export default class Foo {
        foo() {
          const str = \`hello
world\`
        }
      }
    `).toCompileTo(`
      class_name Foo
      func foo() -> void:
          var str: String = "hello\\nworld"
    `)
  })
}
