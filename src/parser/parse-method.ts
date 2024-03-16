import { parseMethodDeclaration } from './parse-method-declaration'
import { parseStatements } from './parse-statements'
import { MethodDeclaration } from 'ts-morph'

import { indent } from '../util/indent'

export function parseMethod(methodNode: MethodDeclaration): string {
  return [
    parseMethodDeclaration(methodNode),
    indent(parseStatements(methodNode.getStatements())),
  ].join('')
}
