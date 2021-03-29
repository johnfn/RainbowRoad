import { Player } from "./Player"

export class Door extends Area2D {
  constructor() {
    super()

    this.connect("body_entered", this, "body_entered_fn")
  }

  body_entered_fn(body: PhysicsBody2D) {
    if (body instanceof Player) {
      body.enter_door()
    }
  }
}
