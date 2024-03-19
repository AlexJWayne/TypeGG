import { PropertyDeclaration } from 'ts-morph'

import { getTypeAnnotation } from '../../util/getGdType'
import { line } from '../../util/line'

export function parseClassProperty(propertyNode: PropertyDeclaration): string {
  const exportsDecorator = propertyNode.getDecorator('exports')
  const propertyName = propertyNode.getName()
  const propertyTypeAnnotation = getTypeAnnotation(propertyNode.getType())
  const propertyInitial = propertyNode.getInitializer()?.getText()

  return line(
    exportsDecorator && '@export ',
    `var ${propertyName}`,
    propertyTypeAnnotation,
    propertyInitial && ` = ${propertyInitial}`,
  )
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('instance property', () => {
    expect(`
      export default class Foo {
        bar: string = "baz";
      }
    `).toCompileTo(`
      class_name Foo
      var bar: String = "baz"
    `)
  })

  test('exported property', () => {
    expect(`
      export default class Foo {
        @exports
        foo: string
      }
    `).toCompileTo(`
      class_name Foo
      @export var foo: String
    `)
  })
}
