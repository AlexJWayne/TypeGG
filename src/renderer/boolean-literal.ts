import { GDKind } from '../grammar/kind'
import { GDBooleanLiteral } from '../grammar/nodes'

export function renderBooleanLiteral(node: GDBooleanLiteral): string {
  return node.value ? 'true' : 'false'
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('true', () => {
    expect(
      renderBooleanLiteral({
        kind: GDKind.BooleanLiteral,
        value: true,
      }),
    ).toEqual('true')
  })

  test('false', () => {
    expect(
      renderBooleanLiteral({
        kind: GDKind.BooleanLiteral,
        value: false,
      }),
    ).toEqual('false')
  })
}
