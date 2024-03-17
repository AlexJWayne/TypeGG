import { MethodDeclaration } from 'ts-morph'

import { indent } from '../util/indent'

import { parseMethodDeclaration } from './parse-method-declaration'
import { parseStatements } from './parse-statements'

export function parseMethod(methodNode: MethodDeclaration): string {
  return [
    parseMethodDeclaration(methodNode),
    indent(parseStatements(methodNode.getStatements())),
  ].join('')
}
