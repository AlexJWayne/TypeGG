import { expect } from 'vitest'

import { parseTsFile } from '../src/parser/parser'

expect.extend({
  /**
   * Compiles the typescript to GD script and re-indents the expected value
   * to remove indentation that all lines share. Also removes all empty lines
   * from recieved and expected. This should help expected scripts to look nice
   * in the test file.
   */
  toCompileTo(receivedTs: string, expectedGd: string) {
    const receivedGd = parseTsFile(receivedTs);
    const receivedFinal = removeEmptyLines(receivedGd.trim());

    const expectedFinal = removeEmptyLines(trimFromEachLineStart(expectedGd));

    return {
      pass: expectedFinal === receivedFinal,
      message: () => `expected${this.isNot ? " not" : ""} to compile to`,
      expected: expectedGd,
      actual: receivedGd,
    };
  },
});

function removeEmptyLines(gdScript: string): string {
  return gdScript
    .split("\n")
    .filter((line) => line.trim() !== "")
    .join("\n");
}

function trimFromEachLineStart(gdScript: string): string {
  const lines = gdScript.split("\n");
  const minPrefixSpaces = getMinPrefixSpaces(lines);
  const reindentedLines = lines.map((line) => line.slice(minPrefixSpaces));
  return reindentedLines.join("\n").trim();
}

function getMinPrefixSpaces(lines: string[]): number {
  const whitespacePrefixCounts = lines.map((line) => {
    if (line.trim() === "") return Infinity;
    const whitespace = line.match(/^(\s*)/)?.[1];
    return whitespace?.length ?? 0;
  });

  return Math.min(...whitespacePrefixCounts);
}
