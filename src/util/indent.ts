const indentString = "    ";

export function indent(intentLevel: number, lines: string[]) {
  return lines.map((line) => indentString.repeat(intentLevel) + line);
}
