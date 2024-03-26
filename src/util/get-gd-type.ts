import type { Type, TypedNode } from 'ts-morph'

/** These types should have their type annotation cpmpletely omitted. */
const omittedTypes = new Set(['any', 'unknown', 'never'])

/** Maps Typescript primitive types to GDScript primitive types. */
export const primitiveTypesTsToGd: Record<string, string | undefined> = {
  string: 'String',
  number: 'float',
  boolean: 'bool',
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

  return primitiveTypesTsToGd[tsType] ?? tsType
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
}
