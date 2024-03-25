import { GDParameter } from '../grammar/nodes'

import { renderTypeAnnotation } from './type-annotation'

export function renderParameter(parameter: GDParameter): string {
  return `${parameter.name}${renderTypeAnnotation(parameter.type)}`
}
