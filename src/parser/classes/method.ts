import { MethodDeclaration } from 'ts-morph'

import { indent } from '../../util/indent'

import { parseStatements } from '../statements/statements'

import { parseMethodDeclaration } from './methodDeclaration'

export function parseMethod(methodNode: MethodDeclaration): string {
  return [
    parseMethodDeclaration(methodNode),
    indent(parseStatements(methodNode.getStatements())),
  ].join('')
}
