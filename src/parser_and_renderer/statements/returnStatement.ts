import { ReturnStatement } from 'ts-morph'

import { line } from '../../util/line'

import { parseExpression } from '../expressions/expression'

export function parseReturnStatement(returnStatement: ReturnStatement): string {
  const returnExpression = returnStatement.getExpression()

  const output = ['return']
  if (returnExpression) output.push(parseExpression(returnExpression))

  return line(output.join(' '))
}
