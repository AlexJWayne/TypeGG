const a: float = 1
const b: int = a

export class Spacehip extends Sprite2D {
  @exports myProp: int | null = null

  myInts: int[] = [1, 2, 3]
  myNodes: Node[]
  myNodes2: Array<Node>

  @onready mySprite: Sprite2D = this.get_node_unsafe('MySprite2D')

  onFoo: Signal
  onBar: Signal<(bar: string, baz: int) => boolean>

  launch() {
    if (this.myProp) {
      print('launch')
      if (true) {
        print('hello moon')
        if (true) {
          this.fly()
        }
      }
    }
  }

  fly() {
    const celestialBody = 'moon'
    print(`fly me to the ${celestialBody}!
And Back`)

    this.onFoo.emit()
    this.onFoo.connect(this.launch)
  }

  protected _ready(): void {
    this.launch()
  }
}
