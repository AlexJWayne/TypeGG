import chokidar, { FSWatcher } from 'chokidar'
import fs from 'fs'

import { parseTsFile } from '../parser/parseTsFile'

export function startWatching(root: string): FSWatcher {
  return chokidar
    .watch(`${root}/**/*.ts`, { persistent: true })
    .on('add', (path) => transpileTsFilePath(path))
    .on('change', (path) => transpileTsFilePath(path))
}

export async function transpileTsFilePath(filePath: string): Promise<void> {
  if (filePath.endsWith('.d.ts')) return

  console.log('Transpiling:', filePath)

  const tsFile = await fs.promises.readFile(filePath, 'utf-8')
  const gdFile = parseTsFile(tsFile)
  const gdFilePath = filePath.replace(/\.ts$/, '.gd')
  await fs.promises.writeFile(gdFilePath, gdFile)
}
