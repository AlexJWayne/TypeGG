import { ClassDeclaration } from 'ts-morph'

export function parseClass(classNode: ClassDeclaration): string[] {
  const className = classNode.getName();
  return [`class_name ${className}`];
}
