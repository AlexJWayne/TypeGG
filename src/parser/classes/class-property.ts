import { PropertyDeclaration } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDClassProperty } from '../../grammar/nodes'
import { getGdType } from '../../util/get-gd-type'

import { parseExpression } from '../expressions/expression'

export function parseClassProperty(
  propertyNode: PropertyDeclaration,
): GDClassProperty {
  const initializer = propertyNode.getInitializer()
  return {
    kind: GDKind.ClassProperty,
    name: propertyNode.getName(),
    type: getGdType(propertyNode.getType()),
    isExported: !!propertyNode.getDecorator('exports'),
    initial: initializer ? parseExpression(initializer) : null,
  }
}

// if (import.meta.vitest) {
//   const { expect, test } = import.meta.vitest

//   test('instance property', () => {
//     expect(`
//       export default class Foo {
//         bar: string = "baz";
//       }
//     `).toCompileTo(`
//       class_name Foo
//       var bar: String = "baz"
//     `)
//   })

//   test('exported property', () => {
//     expect(`
//       export default class Foo {
//         @exports
//         foo: string
//       }
//     `).toCompileTo(`
//       class_name Foo
//       @export var foo: String
//     `)
//   })
// }
