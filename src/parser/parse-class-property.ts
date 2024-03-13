import { PropertyDeclaration } from 'ts-morph'

import { getGdType } from '../util/get-gd-type'

export function parseClassProperty(
  propertyNode: PropertyDeclaration,
): string[] {
  const propertyName = propertyNode.getName();
  const propertyType = getGdType(propertyNode.getType());
  const propertyInitial = propertyNode.getInitializer()?.getText();

  let output = `var ${propertyName}: ${propertyType}`;
  if (propertyInitial) {
    output += ` = ${propertyInitial}`;
  }
  return [output];
}
