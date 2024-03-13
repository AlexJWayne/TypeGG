import { parseParameter } from './parse-parameter'
import { MethodDeclaration } from 'ts-morph'

import { getGdType } from '../util/get-gd-type'

export function parseMethodDeclaration(
  methodNode: MethodDeclaration,
): string[] {
  const methodName = methodNode.getName();
  const methodReturnType = getGdType(methodNode.getReturnType());

  const parameters = methodNode.getParameters().map(parseParameter).join(", ");

  const methodDeclaration = [
    methodNode.isStatic() && "static",
    "func",
    `${methodName}(${parameters})`,
    "->",
    `${methodReturnType}:`,
  ]
    .filter((token) => token)
    .join(" ");

  return [methodDeclaration];
}
