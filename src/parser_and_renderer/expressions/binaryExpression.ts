import { BinaryExpression } from 'ts-morph'

import { parseExpression } from './expression'

export function parseBinaryExpression(node: BinaryExpression): string {
  const operator = node.getOperatorToken().getText()
  const left = parseExpression(node.getLeft())
  const right = parseExpression(node.getRight())
  return `${left} ${operator} ${right}`
}
