import { Node, SyntaxKind } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDNode } from '../../grammar/nodesUnion'
import { printAstTree } from '../../util/debug'

import { parseExpressionStatement } from './expressionStatement'
import { parseIfStatement } from './ifStatement'
import { parseReturnStatement } from './returnStatement'
import { parseVariableStatement } from './variableStatement'

export function parseStatement(statement: Node): GDNode {
  if (statement.isKind(SyntaxKind.ExpressionStatement))
    return parseExpressionStatement(statement)

  if (statement.isKind(SyntaxKind.IfStatement))
    return parseIfStatement(statement)

  if (statement.isKind(SyntaxKind.ReturnStatement))
    return parseReturnStatement(statement)

  if (statement.isKind(SyntaxKind.VariableStatement))
    return parseVariableStatement(statement)

  console.error('Unknown statement kind', statement.getKindName())
  printAstTree(statement)
  return { kind: GDKind.Unsupported } as const
}
