import { LiteralLikeNode } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDStringLiteral } from '../../grammar/nodes'

export function parseStringLiteral(
  stringLiteral: LiteralLikeNode,
): GDStringLiteral {
  return {
    kind: GDKind.StringLiteral,
    value: stringLiteral.getLiteralText(),
  }
}
