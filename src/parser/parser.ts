import {
  ClassDeclaration,
  MethodDeclaration,
  Project,
  PropertyDeclaration,
  ReturnStatement,
  SourceFile,
  Statement,
  ts,
} from 'ts-morph'

import { indent } from '../util/indent'
import { getGdType } from '../util/primitive-types-ts-to-gd'

export function parseTsFile(tsCode: string): string {
  const { file } = getProject("temp.ts", tsCode);
  let output: string[] = [];

  const fileClass = getFileClass(file);
  output.push(...parseClass(fileClass));

  for (const property of fileClass.getProperties()) {
    output.push(...parseClassProperty(property));
  }

  for (const method of fileClass.getMethods()) {
    output.push(...parseMethod(method));
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

function parseClass(classNode: ClassDeclaration): string[] {
  const className = classNode.getName();
  return [`class_name ${className}`];
}

function parseClassProperty(propertyNode: PropertyDeclaration): string[] {
  const propertyName = propertyNode.getName();
  const propertyType = getGdType(propertyNode.getType());
  const propertyInitial = propertyNode.getInitializer()?.getText();

  let output = `var ${propertyName}: ${propertyType}`;
  if (propertyInitial) {
    output += ` = ${propertyInitial}`;
  }
  return [output];
}

function parseMethod(methodNode: MethodDeclaration): string[] {
  const methodName = methodNode.getName();
  const methodReturnType = getGdType(methodNode.getReturnType());

  const parameters = methodNode
    .getParameters()
    .map((param) => {
      const paramName = param.getName();
      const paramType = getGdType(param.getType());
      return `${paramName}: ${paramType}`;
    })
    .join(", ");

  const statements = parseStatements(methodNode.getStatements());

  return [
    `func ${methodName}(${parameters}) -> ${methodReturnType}:`,
    ...indent(1, statements),
  ];
}

function parseStatements(statements: Statement[]): string[] {
  if (statements.length === 0) {
    return ["pass"];
  }

  return statements.flatMap((statement) => {
    if (statement.isKind(ts.SyntaxKind.ReturnStatement)) {
      return parseReturnStatement(statement);
    }

    console.error("Unknown statement kind", statement.getKindName());
    return statement.getText();
  });
}

function parseReturnStatement(returnStatement: ReturnStatement): string[] {
  const expression = returnStatement.getExpressionOrThrow().getText();
  return [`return ${expression}`];
}
