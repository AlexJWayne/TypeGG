import { GDKind } from '../grammar/kind'
import { GDStringLiteral } from '../grammar/nodes'

export function renderStringLiteral(expression: GDStringLiteral): string {
  return `"${expression.value.replace(/\n/g, '\\n')}"`
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('simple', () => {
    expect(
      renderStringLiteral({
        kind: GDKind.StringLiteral,
        value: 'Hello, World!',
      }),
    ).toEqual('"Hello, World!"')
  })

  test('line breaks', () => {
    expect(
      renderStringLiteral({
        kind: GDKind.StringLiteral,
        value: 'Hello,\nWorld!',
      }),
    ).toEqual('"Hello,\\nWorld!"')
  })
}
