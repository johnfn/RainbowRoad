export class Door extends Area2D {
  constructor() {
    super()

    this.connect("body_entered", this, "body_entered_fn")
  }

  body_entered_fn(body: any) {
    print("hello", body)
  }
}
