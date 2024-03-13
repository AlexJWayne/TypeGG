const indentString = "    ";

export function indent(lines: string[], intentLevel: number = 1): string[] {
  return lines.map((line) => indentString.repeat(intentLevel) + line);
}
