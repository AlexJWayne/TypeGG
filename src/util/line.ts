/** Returns the input with a new line at the end, because:
 *
 * ```
 * line(long.complicated()?.expression.here() ?? "a", "b", isCool ? "c" : "d")
 * ```
 *
 * is nicer than:
 *
 * ```
 * `${long.complicated()?.expression.here() ?? "a"}b${isCool ? "c" : "d"}\n`
 * ```
 */
export function line(...strings: string[]): string {
  return `${strings.filter((str) => str).join("")}\n`;
}

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest;

  it("adds a new line character to the end", () => {
    expect(line("hello")).toStrictEqual("hello\n");
  });

  it("joins it's arguments tightly", () => {
    expect(line("hello", "world", "!")).toStrictEqual("helloworld!\n");
  });
}
