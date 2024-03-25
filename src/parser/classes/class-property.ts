import { PropertyDeclaration, SyntaxKind } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDClassProperty, GDSignal } from '../../grammar/nodes'
import { getGdTypeForNode } from '../../util/get-gd-type'

import { parseExpression } from '../expressions/expression'

import { parseParameter } from './parameter'

export function parseClassProperty(
  propertyNode: PropertyDeclaration,
): GDClassProperty | GDSignal {
  if (isSignal(propertyNode)) {
    // TODO: Move to another file
    return {
      kind: GDKind.Signal,
      name: propertyNode.getName(),
      parameters:
        propertyNode
          .getFirstDescendantByKind(SyntaxKind.FunctionType)
          ?.getParameters()
          .map(parseParameter) ?? [],
    }
  }

  const initializer = propertyNode.getInitializer()
  return {
    kind: GDKind.ClassProperty,
    name: propertyNode.getName(),
    type: getGdTypeForNode(propertyNode),
    isExported: !!propertyNode.getDecorator('exports'),
    initial: initializer ? parseExpression(initializer) : null,
  }
}

function isSignal(propertyNode: PropertyDeclaration): boolean {
  return propertyNode.getType().getTargetType()?.getText() === 'Signal<T>'
}

if (import.meta.vitest) {
  const { describe, expect, test } = import.meta.vitest

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

  describe('signal', () => {
    test('simple', () => {
      expect(`
        export class Foo {
          onBar: Signal
        }
      `).toParseClass({
        kind: GDKind.Class,
        extends: null,
        name: 'Foo',
        methods: [],
        properties: [
          {
            kind: GDKind.Signal,
            name: 'onBar',
            parameters: [],
          },
        ],
      })
    })

    test('no parameters', () => {
      expect(`
        export class Foo {
          onBar: Signal<() => void>
        }
      `).toParseClass({
        kind: GDKind.Class,
        extends: null,
        name: 'Foo',
        methods: [],
        properties: [
          {
            kind: GDKind.Signal,
            name: 'onBar',
            parameters: [],
          },
        ],
      })
    })

    test('with parameters', () => {
      expect(`
        export class Foo {
          onBar: Signal<(bar: string, baz: int) => void>
        }
      `).toParseClass({
        kind: GDKind.Class,
        extends: null,
        name: 'Foo',
        methods: [],
        properties: [
          {
            kind: GDKind.Signal,
            name: 'onBar',
            parameters: [
              { kind: GDKind.Parameter, name: 'bar', type: 'String' },
              { kind: GDKind.Parameter, name: 'baz', type: 'int' },
            ],
          },
        ],
      })
    })
  })
}
