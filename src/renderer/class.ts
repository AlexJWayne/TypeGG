import { GDKind } from '../grammar/kind'
import { GDClass } from '../grammar/nodes'
import { line } from '../util/line'

import { renderClassProperty } from './classProperty'
import { renderMethod } from './method'

export function renderClass(classNode: GDClass): string {
  return [
    line('# Autogenerated by TypeGG'),
    line(),
    line(`class_name ${classNode.name}`),
    classNode.extends && line(`extends ${classNode.extends}`),
    classNode.properties.map(renderClassProperty),
    classNode.methods.map(renderMethod),
  ]
    .flat()
    .filter((ln) => ln)
    .join('')
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('class name', () => {
    expect(
      renderClass({
        kind: GDKind.Class,
        name: 'Foo',
        extends: null,
        properties: [],
        methods: [],
      }),
    ).toEqualGdScript(`
      class_name Foo
    `)
  })

  test('extends', () => {
    expect(
      renderClass({
        kind: GDKind.Class,
        name: 'Foo',
        extends: 'Sprite2D',
        properties: [],
        methods: [],
      }),
    ).toEqualGdScript(`
      class_name Foo
      extends Sprite2D
    `)
  })
}
