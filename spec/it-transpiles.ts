import { expect, it } from 'vitest'

import { transpile } from '../src/transpile'

export function itTranspiles(testName: string, tsCode: string, gdCode: string) {
  it(testName, () => {
    expect(transpile(tsCode)).toMatchGd(gdCode);
  });
}
