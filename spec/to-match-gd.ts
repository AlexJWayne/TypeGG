import { expect } from "vitest";

expect.extend({
  toMatchGd(received: string, expected: string) {
    const receivedFinal = received.trim();
    const expectedFinal = trimFromEachLineStart(expected);

    return {
      pass: expectedFinal === receivedFinal,
      message: () =>
        `expected ${receivedFinal}${this.isNot ? " not" : ""} to match ${expectedFinal}`,
      expected: receivedFinal,
      actual: receivedFinal,
    };
  },
});

function getMinPrefixSpaces(lines: string[]) {
  const whitespacePrefixCounts = lines.map((line) => {
    if (line.trim() === "") return Infinity;
    const whitespace = line.match(/^(\s*)/)?.[1];
    return whitespace?.length ?? 0;
  });

  return Math.min(...whitespacePrefixCounts);
}

function trimFromEachLineStart(gdScript: string) {
  const lines = gdScript.split("\n");
  const minPrefixSpaces = getMinPrefixSpaces(lines);
  const reindentedLines = lines.map((line) => line.slice(minPrefixSpaces));
  return reindentedLines.join("\n").trim();
}
