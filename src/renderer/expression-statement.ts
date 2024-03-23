import { GDExpressionStatement } from '../grammar/nodes'
import { line } from '../util/line'

import { renderExpression } from './expression'

export function renderExpressionStatement(
  expressionStatement: GDExpressionStatement,
): string {
  return line(renderExpression(expressionStatement.expression))
}
