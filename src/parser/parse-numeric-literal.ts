import { NumericLiteral } from 'ts-morph'

export function parseNumericLiteral(node: NumericLiteral): string {
  return node.getLiteralText()
}
