import { ClassDeclaration, Project, SourceFile } from 'ts-morph'

import { parseClass } from './classes/class'

export function parseTsFile(tsCode: string): string {
  const { file } = getProject('temp.ts', tsCode)
  const fileClass = getFileClass(file)
  return parseClass(fileClass)
}

function getProject(
  filename: string,
  tsCode: string,
): { project: Project; file: SourceFile } {
  const project = new Project({
    //
  })

  return {
    project,
    file: project.createSourceFile(filename, tsCode),
  }
}

function getFileClass(fileNode: SourceFile): ClassDeclaration {
  return fileNode.getClasses()[0]
}
