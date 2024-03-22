import { PropertyDeclaration } from 'ts-morph'

import { getTypeAnnotation } from '../../util/getGdType'
import { line } from '../../util/line'

export function parseClassProperty(propertyNode: PropertyDeclaration): string {
  const exportsDecorator = propertyNode.getDecorator('exports')
  const propertyName = propertyNode.getName()
  const propertyTypeAnnotation = getTypeAnnotation(propertyNode.getType())
  const propertyInitial = propertyNode.getInitializer()?.getText()

  return line(
    exportsDecorator && '@export ',
    `var ${propertyName}`,
    propertyTypeAnnotation,
    propertyInitial && ` = ${propertyInitial}`,
  )
}
