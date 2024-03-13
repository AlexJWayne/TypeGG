import { parseMethodDeclaration } from './parse-method-declaration'
import { parseStatements } from './parse-statements'
import { MethodDeclaration } from 'ts-morph'

export function parseMethod(methodNode: MethodDeclaration): string[] {
  return [
    ...parseMethodDeclaration(methodNode),
    ...parseStatements(methodNode.getStatements()),
  ];
}
