import { GDKind } from '../grammar/kind'
import { GDIdentifier } from '../grammar/nodes'

export function renderIdentifier(identifier: GDIdentifier): string {
  return identifier.name
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('simple', () => {
    expect(
      renderIdentifier({
        kind: GDKind.Identifier,
        name: 'foo',
      }),
    ).toEqual('foo')
  })
}
