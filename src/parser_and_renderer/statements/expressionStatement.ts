import { ExpressionStatement } from 'ts-morph'

import { line } from '../../util/line'

import { parseExpression } from '../expressions/expression'

export function parseExpressionStatement(
  expressionStatement: ExpressionStatement,
): string {
  return line(parseExpression(expressionStatement.getExpression()))
}
