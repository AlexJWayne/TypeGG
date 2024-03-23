import { GDKind } from '../grammar/kind'
import { GDNumericLiteral } from '../grammar/nodes'

export function renderNumericLiteral(node: GDNumericLiteral): string {
  return node.value.toString()
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('simple', () => {
    expect(
      renderNumericLiteral({
        kind: GDKind.NumericLiteral,
        value: 42,
      }),
    ).toEqual('42')
  })
}
