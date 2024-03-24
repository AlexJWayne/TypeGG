import chalk from 'chalk'
import chokidar, { FSWatcher } from 'chokidar'
import fs from 'fs'
import { Project } from 'ts-morph'

import { parseClass } from '../parser/classes/class'
import { renderClass } from '../renderer/class'
import { logElapsed, logElapsedAsync } from '../util/log-elapsed'

export function startWatching(root: string): FSWatcher {
  console.log(chalk.green('Loading Typescript Project'))
  const project = logElapsed(
    'Done',
    () => new Project({ tsConfigFilePath: './example/tsconfig.json' }),
  )

  return chokidar
    .watch(`${root}/**/*.ts`, { persistent: true })
    .on('add', (path) => {
      project.addSourceFileAtPath(path)
      transpileTsFilePath(project, path)
    })
    .on('change', async (path) => {
      await project.getSourceFileOrThrow(path).refreshFromFileSystem()
      transpileTsFilePath(project, path)
    })
}

export async function transpileTsFilePath(
  project: Project,
  filePath: string,
): Promise<void> {
  if (filePath.endsWith('.d.ts')) return
  const gdFilePath = filePath.replace(/\.ts$/, '.gd')

  logElapsedAsync(gdFilePath, async () => {
    const tsFile = project.getSourceFileOrThrow(filePath)
    const fileClass = tsFile.getClasses()[0]
    if (!fileClass) {
      console.error(`🚨 No class found in: ${filePath}`)
      return
    }

    const parsedClass = parseClass(fileClass)
    const gdSrc = renderClass(parsedClass)

    await fs.promises.writeFile(gdFilePath, gdSrc)
  })
}
