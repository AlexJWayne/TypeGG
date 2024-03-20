import { GDClassProperty } from '../grammar/nodes'
import { line } from '../util/line'

import { renderTypeAnnotation } from './typeAnnotation'

export function renderClassProperty(classProperty: GDClassProperty): string {
  return line(
    classProperty.isExported && '@export ',
    `var ${classProperty.name}`,
    renderTypeAnnotation(classProperty.type),
    classProperty.initial && ` = ${classProperty.initial}`,
  )
}
