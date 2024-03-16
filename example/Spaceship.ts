export class Spacehip {
  myProp: string = 'asd'

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
    print('fly')
  }
}
