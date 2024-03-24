import type { Type, TypedNode, TypeNode } from 'ts-morph'

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
  return getGdTypeForTypeNodeWithFallbackType(
    typedNode.getTypeNode(),
    typedNode.getType(),
  )
}

export function getGdTypeForTypeNodeWithFallbackType(
  typeNode: TypeNode | null | undefined,
  type: Type,
): string {
  if (typeNode?.getText() === 'int') return 'int'
  return getGdType(type)
}

/** Translate a Typescript type to GDScript type. */
export function getGdType(type: Type): string {
  let tsType = type.getText()

  if (omittedTypes.has(tsType)) return ''

  if (type.isStringLiteral()) tsType = 'String'

  return primitiveTypesTsToGd[tsType] ?? tsType
}

if (import.meta.vitest) {
  const { describe, expect, test } = import.meta.vitest

  describe('int', () => {
    test('int', () => {
      expect(`
        export class Foo {
          foo: int;
        }
      `).toCompileTo(`
        class_name Foo
        var foo: int
      `)
    })

    test('return type', () => {
      expect(`
        export class Foo {
          foo(): int {}
        }
      `).toCompileTo(`
        class_name Foo
        func foo() -> int:
            pass
      `)
    })

    test('variable', () => {
      expect(`
        export class Foo {
          foo() {
            const n: int = 1
          }
        }
      `).toCompileTo(`
        class_name Foo
        func foo() -> void:
            var n: int = 1
      `)
    })

    test('parameter', () => {
      expect(`
        export class Foo {
          foo(n: int) {}
        }
      `).toCompileTo(`
        class_name Foo
        func foo(n: int) -> void:
            pass
      `)
    })
  })
}
