import { parseTsFile } from './parser/parse-ts-file'
import { renderGdFile } from './renderer/render-gd-file'

export function transpile(tsCode: string) {
  const gdFile = parseTsFile(tsCode);
  return renderGdFile(gdFile);
}
