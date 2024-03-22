import { GDKind } from './kind'
import { GDNode } from './nodesUnion'

export interface GDNodeBase<T extends GDKind = GDKind> {
  kind: T
}

export interface GDIdentifier extends GDNodeBase<GDKind.Identifier> {
  name: string
}

export interface GDBooleanLiteral extends GDNodeBase<GDKind.BooleanLiteral> {
  value: boolean
}

export interface GDNumericLiteral extends GDNodeBase<GDKind.NumericLiteral> {
  value: number
}

export interface GDStringLiteral extends GDNodeBase<GDKind.StringLiteral> {
  value: string
}

export interface GDCallExpression extends GDNodeBase<GDKind.CallExpression> {
  arguments: GDNode[]
  callee: GDNode
}

export interface GDUnaryExpression extends GDNodeBase<GDKind.UnaryExpression> {
  operator: GDNode
  expression: GDNode
}

export interface GDBinaryExpression
  extends GDNodeBase<GDKind.BinaryExpression> {
  left: GDNode
  operator: string // ???
  right: GDNode
}

export interface GDClassProperty extends GDNodeBase<GDKind.ClassProperty> {
  name: string
  type: string | null
  isExported: boolean
  initial: GDNode | null
}

export interface GDClassMethod extends GDNodeBase<GDKind.ClassMethod> {
  name: string
  isStatic: boolean
  returnType: string | null
  parameters: GDParameter[]
  statements: GDNode[]
}

export interface GDParameter extends GDNodeBase<GDKind.Parameter> {
  name: string
  type: string | null
}

export interface GDParenthesizedExpression
  extends GDNodeBase<GDKind.ParenthesizedExpression> {
  expression: GDNode
}

export interface GDSelfKeyword extends GDNodeBase<GDKind.SelfKeyword> {}

export interface GDIfStatement extends GDNodeBase<GDKind.IfStatement> {
  condition: GDNode
  thenStatements: GDNode[]
  elseIfs: {
    condition: GDNode
    statements: GDNode[]
  }[]
  elseStatements: GDNode[] | null
}

export interface GDClass extends GDNodeBase<GDKind.Class> {
  name: string
  extends: string | null
  properties: GDClassProperty[]
  methods: GDClassMethod[]
}

export interface GDPropertyAccessExpression
  extends GDNodeBase<GDKind.PropertyAccessExpression> {
  object: GDNode
  property: GDIdentifier
}

export interface GDNullKeyword extends GDNodeBase<GDKind.NullKeyword> {}

export interface GDUnsupported extends GDNodeBase<GDKind.Unsupported> {}

export interface GDReturnStatement extends GDNodeBase<GDKind.ReturnStatement> {
  expression: GDNode | null
}

export interface GDVariableDeclaration
  extends GDNodeBase<GDKind.VariableDeclaration> {
  name: string
  type: string | null
  initial: GDNode | null
}

export interface GDFragment extends GDNodeBase<GDKind.Fragment> {
  statements: GDNode[]
}

export interface GDExpressionStatement
  extends GDNodeBase<GDKind.ExpressionStatement> {
  expression: GDNode
}
