import { Type } from 'ts-morph'

/** Maps Typescript primitive types to GDScript primitive types. */
export const primitiveTypesTsToGd: Record<string, string | undefined> = {
  string: 'String',
  number: 'float',
  boolean: 'bool',
}

/** Translate a Typescript type to GDScript type. */
export function getGdType(type: Type): string {
  const tsType = type.getText()

  if (type.getCallSignatures().length > 0) return 'Callable'

  return primitiveTypesTsToGd[tsType] ?? tsType
}
