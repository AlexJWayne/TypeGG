import { expect } from "vitest";

expect.extend({
  /**
   * Reindents the expected value to remove indentation that all lines share,
   * and removes all empty lines from recieved and expected.
   */
  toMatchGd(received: string, expected: string) {
    const receivedFinal = removeEmptyLines(received.trim());
    const expectedFinal = removeEmptyLines(trimFromEachLineStart(expected));

    return {
      pass: expectedFinal === receivedFinal,
      message: () => `expected${this.isNot ? " not" : ""} to match gd script`,
      expected: expectedFinal,
      actual: receivedFinal,
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
