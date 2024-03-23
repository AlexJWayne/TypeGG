import { Type } from 'ts-morph'

/** These types should have their type annotation cpmpletely omitted. */
const omittedTypes = new Set(['any', 'unknown', 'never'])

/** Maps Typescript primitive types to GDScript primitive types. */
export const primitiveTypesTsToGd: Record<string, string | undefined> = {
  string: 'String',
  number: 'float',
  boolean: 'bool',
}

/** Translate a Typescript type to GDScript type. */
export function getGdType(type: Type): string {
  const tsType = type.getText()

  if (omittedTypes.has(tsType)) return ''

  if (type.getCallSignatures().length > 0) return 'Callable'
  if (type.isStringLiteral()) return 'String'

  return primitiveTypesTsToGd[tsType] ?? tsType
}
