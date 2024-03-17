import { ClassDeclaration, Project, SourceFile } from 'ts-morph'

import { parseClass } from './parse-class'

export function parseTsFile(tsCode: string): string {
  const { file } = getProject('temp.ts', tsCode)
  let output: string[] = []

  const fileClass = getFileClass(file)

  output.push(parseClass(fileClass))

  return output.join('')
}

function getProject(
  filename: string,
  tsCode: string,
): { project: Project; file: SourceFile } {
  const project = new Project({ useInMemoryFileSystem: true })

  return {
    project,
    file: project.createSourceFile(filename, tsCode),
  }
}

function getFileClass(fileNode: SourceFile): ClassDeclaration {
  return fileNode.getClasses()[0]
}
