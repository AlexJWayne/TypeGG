import { parseMethodDeclaration } from './parse-method-declaration'
import { parseStatements } from './parse-statements'
import { MethodDeclaration } from 'ts-morph'

import { indent } from '../util/indent'
import { line } from '../util/line'

export function parseMethod(methodNode: MethodDeclaration): string {
  let output: string = "";
  output += line(parseMethodDeclaration(methodNode));
  output += line(indent(parseStatements(methodNode.getStatements())));
  return output;
}
