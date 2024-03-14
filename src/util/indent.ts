const indentString = "    ";

/** Indent all lines in a string an `indentLevel` level amount. Defaults to 1 indent level. */
export function indent(lines: string, intentLevel?: number): string;

/** Indent all lines in an array of strings an `indentLevel` level amount. Defaults to 1 indent level. */
export function indent(lines: string[], intentLevel?: number): string[];

export function indent(
  lines: string | string[],
  intentLevel: number = 1,
): string | string[] {
  if (Array.isArray(lines)) {
    return lines.map((line) => {
      if (!line) return line;
      return `${indentString.repeat(intentLevel)}${line}`;
    });
  }
  return indent(lines.split("\n"), intentLevel).join("\n");
}
