import { PropertyDeclaration } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDClassProperty } from '../../grammar/nodes'
import { getGdTypeForNode } from '../../util/get-gd-type'

import { parseExpression } from '../expressions/expression'

export function parseClassProperty(
  propertyNode: PropertyDeclaration,
): GDClassProperty {
  const initializer = propertyNode.getInitializer()

  return {
    kind: GDKind.ClassProperty,
    name: propertyNode.getName(),
    type: getGdTypeForNode(propertyNode),
    isExported: !!propertyNode.getDecorator('exports'),
    initial: initializer ? parseExpression(initializer) : null,
  }
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('instance property', () => {
    expect(`
      export class Foo {
        bar: string = "baz";
      }
    `).toParseClass({
      kind: GDKind.Class,
      extends: null,
      name: 'Foo',
      methods: [],
      properties: [
        {
          kind: GDKind.ClassProperty,
          name: 'bar',
          type: 'String',
          isExported: false,
          initial: { kind: GDKind.StringLiteral, value: 'baz' },
        },
      ],
    })
  })

  test('exported property', () => {
    expect(`
      export default class Foo {
        @exports
        foo: string
      }
    `).toParseClass({
      kind: GDKind.Class,
      extends: null,
      name: 'Foo',
      methods: [],
      properties: [
        {
          kind: GDKind.ClassProperty,
          name: 'foo',
          type: 'String',
          isExported: true,
          initial: null,
        },
      ],
    })
  })
}
