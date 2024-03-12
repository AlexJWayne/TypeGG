import { Type } from 'ts-morph'

export const primitiveTypesTsToGd: Record<string, string | undefined> = {
  string: "String",
  number: "float",
  boolean: "bool",
};

export function getGdType(type: Type): string {
  const tsType = type.getText();
  return primitiveTypesTsToGd[tsType] ?? tsType;
}
