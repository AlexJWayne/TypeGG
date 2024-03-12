import { MethodDeclaration, ParameterDeclaration } from 'ts-morph'

import { GdMethod } from '../gd-file'

export function parseMethods(methods: MethodDeclaration[]): GdMethod[] {
  return methods.map(parseMethod);
}

function parseMethod(method: MethodDeclaration): GdMethod {
  return {
    name: method.getName(),
    parameters: method.getParameters().map(parseParameter),
    returnType: parseReturnType(method),
  };
}

function parseParameter(parameter: ParameterDeclaration) {
  return {
    name: parameter.getName(),
    type: parameter.getType().getText(),
  };
}

function parseReturnType(method: MethodDeclaration) {
  return method.getReturnType().getText();
}
