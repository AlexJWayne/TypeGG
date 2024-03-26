import { GDKind } from '../grammar/kind'
import { GDSignal } from '../grammar/nodes'
import { line } from '../util/line'

import { renderParameter } from './renderParameter'

export function renderSignal(signal: GDSignal): string {
  return line(
    `signal ${signal.name}`,
    signal.parameters.length > 0 &&
      `(${signal.parameters.map(renderParameter).join(', ')})`,
  )
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('no parameters', () => {
    expect(
      renderSignal({
        kind: GDKind.Signal,
        name: 'onBar',
        parameters: [],
      }),
    ).toEqualGdScript(`
        signal onBar
      `)
  })

  test('with parameters', () => {
    expect(
      renderSignal({
        kind: GDKind.Signal,
        name: 'onBar',
        parameters: [
          { kind: GDKind.Parameter, name: 'bar', type: 'String' },
          { kind: GDKind.Parameter, name: 'baz', type: 'int' },
        ],
      }),
    ).toEqualGdScript(`
        signal onBar(bar: String, baz: int)
      `)
  })
}
