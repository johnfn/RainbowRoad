export class Player extends KinematicBody2D {
  speed: float = 200

  constructor() {
    super()

    print("Hello world")
  }

  _physics_process(delta: float) {
    let dx = 0
    let dy = 0

    if (Input.is_key_pressed(KeyList.KEY_A)) {
      dx -= 1
    }

    if (Input.is_key_pressed(KeyList.KEY_D)) {
      dx += 1
    }

    if (Input.is_key_pressed(KeyList.KEY_W)) {
      dy -= 1
    }

    if (Input.is_key_pressed(KeyList.KEY_S)) {
      dy += 1
    }

    const dPosition = new Vector2(dx, dy).mul(this.speed)

    this.move_and_slide(dPosition, new Vector2(0, -1))
  }
}
