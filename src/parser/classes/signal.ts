import { PropertyDeclaration, SyntaxKind } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDSignal } from '../../grammar/nodes'

import { parseParameter } from './parameter'

export function parseSignal(propertyNode: PropertyDeclaration): GDSignal {
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

export function isSignal(propertyNode: PropertyDeclaration): boolean {
  return propertyNode.getType().getTargetType()?.getText() === 'Signal<T>'
}

if (import.meta.vitest) {
  const { describe, expect, test } = import.meta.vitest

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
}
