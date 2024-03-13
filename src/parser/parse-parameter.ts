import { ParameterDeclaration } from 'ts-morph'

import { getGdType } from '../util/get-gd-type'

export function parseParameter(parameter: ParameterDeclaration): string {
  const name = parameter.getName();
  const type = getGdType(parameter.getType());
  return `${name}: ${type}`;
}
