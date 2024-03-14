import { parseMethodDeclaration } from './parse-method-declaration'
import { parseStatements } from './parse-statements'
import { MethodDeclaration } from 'ts-morph'

import { indent } from '../util/indent'

export function parseMethod(methodNode: MethodDeclaration): string {
  let output: string = "";
  output += `${parseMethodDeclaration(methodNode)}\n`;
  output += `${indent(parseStatements(methodNode.getStatements()))}\n`;
  return output;
}
