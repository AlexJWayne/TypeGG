import { CallExpression } from 'ts-morph'

import { GDCallExpression } from '../../grammar/nodes'

import { parseExpression } from './expression'

export function parseCallExpression(
  callExpression: CallExpression,
): GDCallExpression {
  const parsedExpression = parseExpression(callExpression.getExpression())
  const parsedArguments = callExpression
    .getArguments()
    .map(parseExpression)
    .join(', ')
  return `${parsedExpression}(${parsedArguments})`
}

// if (import.meta.vitest) {
//   const { expect, test } = import.meta.vitest

//   test('global function', () => {
//     expect(`
//       export class Foo {
//         foo() {
//           print()
//         }
//       }
//     `).toCompileTo(`
//       class_name Foo
//       func foo() -> void:
//           print()
//     `)
//   })

//   test.only('instance method', () => {
//     expect(`
//       export class Foo {
//         foo() {
//           this.bar()
//         }
//         bar() {}
//       }
//     `).toCompileTo(`
//       class_name Foo
//       func foo() -> void:
//           self.bar()
//       func bar() -> void:
//           pass
//     `)
//   })

//   test('with literal arguments', () => {
//     expect(`
//       export class Foo {
//         foo() {
//           print('foo', 'bar')
//         }
//       }
//     `).toCompileTo(`
//       class_name Foo
//       func foo() -> void:
//           print("foo", "bar")
//     `)
//   })

//   test('with variable arguments', () => {
//     expect(`
//       export class Foo {
//         foo() {
//           var a = 'foo'
//           var b = 'bar'
//           print(a, b)
//         }
//       }
//     `).toCompileTo(`
//       class_name Foo
//       func foo() -> void:
//           var a: String = "foo"
//           var b: String = "bar"
//           print(a, b)
//     `)
//   })
// }
