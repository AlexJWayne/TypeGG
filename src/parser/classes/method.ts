import { MethodDeclaration } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDClassMethod } from '../../grammar/nodes'
import { getGdType } from '../../util/getGdType'

import { parseStatement } from '../statements/statement'

import { parseParameter } from './parameter'

export function parseMethod(methodNode: MethodDeclaration): GDClassMethod {
  return {
    kind: GDKind.ClassMethod,
    name: methodNode.getName(),
    isStatic: methodNode.isStatic(),
    returnType: getGdType(methodNode.getReturnType()),
    parameters: methodNode.getParameters().map(parseParameter),
    statements: methodNode.getStatements().map(parseStatement),
  }
}
