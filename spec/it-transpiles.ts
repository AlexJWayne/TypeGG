import { expect, it } from 'vitest'

import { parseTsFile } from '../src/parser/parser'

export function itTranspiles(testName: string, tsCode: string, gdCode: string) {
  it(testName, () => {
    expect(parseTsFile(tsCode)).toMatchGd(gdCode);
  });
}
