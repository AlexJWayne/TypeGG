import { BooleanLiteral } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDBooleanLiteral } from '../../grammar/nodes'

export function parseBooleanLiteral(
  booleanLiteral: BooleanLiteral,
): GDBooleanLiteral {
  return {
    kind: GDKind.BooleanLiteral,
    value: booleanLiteral.getLiteralValue(),
  }
}
