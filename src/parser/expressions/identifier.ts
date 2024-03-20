import { Identifier } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDIdentifier } from '../../grammar/nodes'

export function parseIdentifier(node: Identifier): GDIdentifier {
  return {
    kind: GDKind.Identifier,
    name: node.getText(),
  }
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

  test('identifier', () => {
    expect('foo').toParseStatements([{ kind: GDKind.Identifier, name: 'foo' }])
  })
}
