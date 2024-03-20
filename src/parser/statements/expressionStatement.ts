import { ExpressionStatement } from 'ts-morph'

import { GDNode } from '../../grammar/nodesUnion'

import { parseExpression } from '../expressions/expression'

export function parseExpressionStatement(
  expressionStatement: ExpressionStatement,
): GDNode {
  return parseExpression(expressionStatement.getExpression())
}
