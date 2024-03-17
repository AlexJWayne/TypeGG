export class Spacehip {
  @exports
  myProp: float = 123

  launch() {
    if (true) {
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
  }
}
