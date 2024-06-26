import { GDKind } from '../grammar/kind'
import { GDClassProperty, GDSignal } from '../grammar/nodes'
import { isGDSignal } from '../grammar/nodes-union'
import { line } from '../util/line'

import { renderExpression } from './expression'
import { renderSignal } from './signal'
import { renderTypeAnnotation } from './type-annotation'

export function renderClassProperty(
  classProperty: GDClassProperty | GDSignal,
): string {
  if (isGDSignal(classProperty)) return renderSignal(classProperty)

  return line(
    classProperty.isExported && '@export ',
    classProperty.isOnReady && '@onready ',
    `var ${classProperty.name}`,
    renderTypeAnnotation(classProperty.type),
    classProperty.initial && ` = ${renderExpression(classProperty.initial)}`,
  )
}

if (import.meta.vitest) {
  const { describe, expect, test } = import.meta.vitest

  test('instance property', () => {
    expect(
      renderClassProperty({
        kind: GDKind.ClassProperty,
        name: 'bar',
        type: 'String',
        initial: null,
        isExported: false,
        isOnReady: false,
      }),
    ).toEqualGdScript(`
      var bar: String
    `)
  })

  test('exported property', () => {
    expect(
      renderClassProperty({
        kind: GDKind.ClassProperty,
        name: 'foo',
        type: 'String',
        initial: null,
        isExported: true,
        isOnReady: false,
      }),
    ).toEqualGdScript(`
      @export var foo: String
    `)
  })

  test('onready property', () => {
    expect(
      renderClassProperty({
        kind: GDKind.ClassProperty,
        name: 'foo',
        type: 'String',
        initial: null,
        isExported: false,
        isOnReady: true,
      }),
    ).toEqualGdScript(`
      @onready var foo: String
    `)
  })

  test('initial', () => {
    expect(
      renderClassProperty({
        kind: GDKind.ClassProperty,
        name: 'foo',
        type: 'String',
        initial: { kind: GDKind.StringLiteral, value: 'baz' },
        isExported: false,
        isOnReady: false,
      }),
    ).toEqualGdScript(`
      var foo: String = "baz"
    `)
  })

  describe('signal', () => {
    test('no parameters', () => {
      expect(
        renderClassProperty({
          kind: GDKind.Signal,
          name: 'onBar',
          parameters: [],
        }),
      ).toEqualGdScript(`
        signal onBar
      `)
    })

    test('with parameters', () => {
      expect(
        renderClassProperty({
          kind: GDKind.Signal,
          name: 'onBar',
          parameters: [
            { kind: GDKind.Parameter, name: 'bar', type: 'String' },
            { kind: GDKind.Parameter, name: 'baz', type: 'int' },
          ],
        }),
      ).toEqualGdScript(`
        signal onBar(bar: String, baz: int)
      `)
    })
  })
}
