import { expect, it } from 'vitest'

it.only('passes', () => {
  expect(1).toBe(1)
})

it('anonymous functions', () => {
  expect(`
    export default class Foo {
      foo() {
        const fn = () => {}
        fn()
      }
    }
  `).toCompileTo(`
    class_name Foo
    func foo() -> void:
        var fn = func():
            pass
        fn()
  `)
})
