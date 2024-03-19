import { LiteralLikeNode } from 'ts-morph'

export function parseStringLiteral(stringLiteral: LiteralLikeNode): string {
  const stringValue = stringLiteral.getLiteralText().replace(/\n/g, '\\n')
  return `"${stringValue}"`
}
