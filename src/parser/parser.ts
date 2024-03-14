import { parseClass } from './parse-class'
import { parseClassProperty } from './parse-class-property'
import { parseMethod } from './parse-method'
import { ClassDeclaration, Project, SourceFile } from 'ts-morph'

export function parseTsFile(tsCode: string): string {
  const { file } = getProject("temp.ts", tsCode);
  let output: string[] = [];

  const fileClass = getFileClass(file);

  output.push(parseClass(fileClass));

  // TODO: move the rest of this to parseClass() ?
  for (const property of fileClass.getProperties()) {
    output.push(parseClassProperty(property));
  }

  for (const method of fileClass.getMethods()) {
    output.push(parseMethod(method));
  }

  return output.join("\n");
}

function getProject(
  filename: string,
  tsCode: string,
): { project: Project; file: SourceFile } {
  const project = new Project({ useInMemoryFileSystem: true });

  return {
    project,
    file: project.createSourceFile(filename, tsCode),
  };
}

function getFileClass(fileNode: SourceFile): ClassDeclaration {
  return fileNode.getClasses()[0];
}
