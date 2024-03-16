import { NumericLiteral, StringLiteral } from 'ts-morph'

export function parseNumericLiteral(node: NumericLiteral): string {
  return node.getLiteralText()
}

export function parseStringLiteral(stringLiteral: StringLiteral): string {
  const stringValue = stringLiteral.getLiteralText()
  return `"${stringValue}"`
}
