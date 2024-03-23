import { GDKind } from '../grammar/kind'
import { GDSelfExpression } from '../grammar/nodes'

export function renderSelfExpression(node: GDSelfExpression): string {
  if (node.explicit) return 'self'
  return ''
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('explicit', () => {
    expect(
      renderSelfExpression({
        kind: GDKind.SelfExpression,
        explicit: true,
      }),
    ).toEqual('self')
  })

  test('implicit', () => {
    expect(
      renderSelfExpression({
        kind: GDKind.SelfExpression,
        explicit: false,
      }),
    ).toEqual('')
  })
}
