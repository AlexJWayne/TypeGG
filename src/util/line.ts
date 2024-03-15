/** Returns the input with a new line at the end, because:
 *
 * ```
 * line(long.complicated()?.expression.here() ?? "abc")
 * ```
 *
 * Is nicer than:
 *
 * ```
 * `${long.complicated()?.expression.here() ?? "abc"}\n`
 * ```
 */
export function line(str: string): string {
  return `${str}\n`;
}

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest;

  it("adds a new line character to the end", () => {
    expect(line("hello")).toStrictEqual("hello\n");
  });
}
