import { GDKind } from '../grammar/kind'
import { GDClassProperty } from '../grammar/nodes'
import { line } from '../util/line'

import { renderExpression } from './expression'
import { renderTypeAnnotation } from './type-annotation'

export function renderClassProperty(classProperty: GDClassProperty): string {
  return line(
    classProperty.isExported && '@export ',
    `var ${classProperty.name}`,
    renderTypeAnnotation(classProperty.type),
    classProperty.initial && ` = ${renderExpression(classProperty.initial)}`,
  )
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('instance property', () => {
    expect(
      renderClassProperty({
        kind: GDKind.ClassProperty,
        name: 'bar',
        type: 'String',
        initial: null,
        isExported: false,
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
      }),
    ).toEqualGdScript(`
      @export var foo: String
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
      }),
    ).toEqualGdScript(`
      var foo: String = "baz"
    `)
  })
}
