import { GdFile } from "../gd-file";

import { parseClassName } from "./parse-class-name";
import { parseClassProperties } from "./parse-class-properties";
import { ClassDeclaration, Project, SourceFile } from "ts-morph";

export function parseTsFile(tsCode: string): GdFile {
  // TEMP for testing
  const project = new Project({ useInMemoryFileSystem: true });
  const file = project.createSourceFile("temp.ts", tsCode);
  // TEMP

  const fileClass = findFileClass(file);

  return {
    className: parseClassName(fileClass),
    properties: parseClassProperties(fileClass.getProperties()),
  };
}

function findFileClass(file: SourceFile): ClassDeclaration {
  const classes = file.getClasses();
  if (classes.length !== 1)
    throw new Error("Expected to find 1 class declaration");

  return classes[0];
}
