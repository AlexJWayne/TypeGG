import { parseParameter } from './parse-parameter'
import { parseStatements } from './parse-statements'
import { MethodDeclaration } from 'ts-morph'

import { getGdType } from '../util/get-gd-type'

export function parseMethod(methodNode: MethodDeclaration): string[] {
  const methodName = methodNode.getName();
  const methodReturnType = getGdType(methodNode.getReturnType());

  const parameters = methodNode.getParameters().map(parseParameter).join(", ");

  const statements = parseStatements(methodNode.getStatements());

  return [
    `func ${methodName}(${parameters}) -> ${methodReturnType}:`,
    ...statements,
  ];
}
