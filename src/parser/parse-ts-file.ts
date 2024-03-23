import { ClassDeclaration, Project, SourceFile } from 'ts-morph'

import { renderClass } from '../renderer/class'

import { parseClass } from './classes/class'

export function parseTsFile(tsCode: string): string {
  // TODO: make a real project out of all TS files.
  const { file } = getTsProject('temp.ts', tsCode)
  const fileClass = getFileClass(file)
  const parsedClass = parseClass(fileClass)
  return renderClass(parsedClass)
}

export function getTsProject(
  filename: string,
  tsCode: string,
): { project: Project; file: SourceFile } {
  const project = new Project({
    tsConfigFilePath: './example/tsconfig.json',
  })

  return {
    project,
    file: project.createSourceFile(filename, tsCode),
  }
}

function getFileClass(fileNode: SourceFile): ClassDeclaration {
  return fileNode.getClasses()[0]
}
