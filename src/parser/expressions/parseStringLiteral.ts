import { LiteralLikeNode } from 'ts-morph'

import { GD } from '../grammar_'

export function parseStringLiteral(
  stringLiteral: LiteralLikeNode,
): GD.StringLiteral {
  return {
    kind: GD.Kind.StringLiteral,
    value: stringLiteral.getLiteralText(),
  }
}
