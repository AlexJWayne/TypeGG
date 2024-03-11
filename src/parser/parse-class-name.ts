import { ClassDeclaration } from "ts-morph";

export function parseClassName(fileClass: ClassDeclaration): string {
  return fileClass.getNameOrThrow();
}
