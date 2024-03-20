import { ClassDeclaration, SyntaxKind } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDClass } from '../../grammar/nodes'

import { parseClassProperty } from './classProperty'
import { parseMethod } from './method'

export function parseClass(classNode: ClassDeclaration): GDClass {
  const className = classNode.getNameOrThrow()

  const extendsClassExpression = classNode.getExtends()?.getExpression()
  const extendsClassName =
    (extendsClassExpression &&
      extendsClassExpression.isKind(SyntaxKind.Identifier) &&
      extendsClassExpression.getText()) ||
    null

  return {
    kind: GDKind.Class,
    name: className,
    extends: extendsClassName,
    properties: classNode.getProperties().map(parseClassProperty),
    methods: classNode.getMethods().map(parseMethod),
  }
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('class name', () => {
    expect(`
      export class Foo {}
    `).toCompileTo(`
      class_name Foo
    `)
  })

  test('extends', () => {
    expect(`
      export class Foo extends Sprite2D {}
    `).toCompileTo(`
      class_name Foo
      extends Sprite2D
    `)
  })
}
