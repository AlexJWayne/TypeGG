import type { Type, TypedNode } from 'ts-morph'
import { UnionType } from 'typescript'

/** These types should have their type annotation cpmpletely omitted. */
const omittedTypes = new Set(['any', 'unknown', 'never'])

/** Maps Typescript primitive types to GDScript primitive types. */
export const primitiveTypesTsToGd: Record<string, string | undefined> = {
  string: 'String',
  number: 'float',
  boolean: 'bool',
  undefined: 'null',
}

/** Get the type for a `TypedNode`. */
export function getGdTypeForNode(
  typedNode: TypedNode & { getType(): Type },
): string {
  return getGdType(typedNode.getType())
}

/** Translate a Typescript type to GDScript type. */
export function getGdType(type: Type): string {
  let tsType = type.getText()

  if (omittedTypes.has(tsType)) return ''

  if (type.isArray())
    return `Array[${getGdType(type.getArrayElementTypeOrThrow())}]`
  if (type.isStringLiteral()) tsType = 'String'
  if (type.isUnion()) return parseUnionType(type)

  return primitiveTypesTsToGd[tsType] ?? tsType
}

function parseUnionType(type: Type<UnionType>) {
  const memberTypes = type
    .getUnionTypes()
    .map((memberType) => getGdType(memberType))
    .filter((memberType) => memberType !== 'null')

  return memberTypes.length === 1 //
    ? memberTypes[0]
    : ''
}

if (import.meta.vitest) {
  const { describe, expect, test } = import.meta.vitest

  describe('array', () => {
    test('string', () => {
      expect(`
        export class Foo {
          foo: string[];
        }
      `).toCompileTo(`
        class_name Foo
        var foo: Array[String]
      `)
    })
  })

  describe('unions', () => {
    test('two different extant types', () => {
      expect(`
        export class Foo {
          foo: string | int;
        }
      `).toCompileTo(`
        class_name Foo
        var foo
      `)
    })

    test('two members where one is null', () => {
      expect(`
        export class Foo {
          foo: string | null;
        }
      `).toCompileTo(`
        class_name Foo
        var foo: String
      `)
    })

    test('many members where one is null', () => {
      expect(`
        export class Foo {
          foo: string | Node | null;
        }
      `).toCompileTo(`
        class_name Foo
        var foo
      `)
    })
  })
}
