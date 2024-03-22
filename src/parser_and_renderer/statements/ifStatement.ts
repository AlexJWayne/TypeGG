import { IfStatement } from 'ts-morph'

import { indent } from '../../util/indent'
import { line } from '../../util/line'

import { parseExpression } from '../expressions/expression'

import { parseStatements } from './statements'

export function parseIfStatement(statement: IfStatement): string {
  const condition = parseExpression(statement.getExpression())

  const thenStatement = statement.getThenStatement()
  const thenNodes =
    thenStatement.getChildSyntaxList()?.getChildren() ?? [thenStatement] ?? []

  const elseStatement = statement.getElseStatement()
  const elseNodes =
    elseStatement?.getChildSyntaxList()?.getChildren() ??
    (elseStatement && [elseStatement]) ??
    []

  const output = [
    line(`if ${condition}:`), //
    indent(parseStatements(thenNodes)),
  ]

  if (elseStatement && elseNodes) {
    output.push(
      line('else:'), //
      indent(parseStatements(elseNodes)),
    )
  }

  return output.join('')
}
