import { StringLiteral } from 'ts-morph'

export function parseStringLiteral(stringLiteral: StringLiteral): string {
  const stringValue = stringLiteral.getLiteralText()
  return `"${stringValue}"`
}
