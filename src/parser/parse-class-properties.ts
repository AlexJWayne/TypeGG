import { GdProperty } from "../gd-file";
import { primitiveTypesTsToGd } from "../primitive-types-ts-to-gd";

import { PropertyDeclaration } from "ts-morph";

export function parseClassProperties(
  properties: PropertyDeclaration[],
): GdProperty[] {
  return properties.map(parseClassProperty);
}

export function parseClassProperty(property: PropertyDeclaration): GdProperty {
  const tsType = property.getType().getText();
  const gdType =
    primitiveTypesTsToGd[tsType as keyof typeof primitiveTypesTsToGd] ?? tsType;
  const intial = property.getInitializer()?.getText();

  return {
    name: property.getName(),
    type: gdType,
    intial,
  };
}
