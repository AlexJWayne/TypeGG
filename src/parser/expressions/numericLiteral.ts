import { NumericLiteral } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDNumericLiteral } from '../../grammar/nodes'

export function parseNumericLiteral(node: NumericLiteral): GDNumericLiteral {
  return {
    kind: GDKind.NumericLiteral,
    value: node.getLiteralValue(),
  }
}
