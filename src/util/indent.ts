const indentString = "    ";

export function indent(lines: string[], intentLevel: number): string[] {
  return lines.map((line) => indentString.repeat(intentLevel) + line);
}
