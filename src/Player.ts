// For next time:
// * set up a local autobuilder to HTML5 so we can use liveshare

export class Player extends KinematicBody2D {
  speed: float = 200.0
  vy: float = 0.0

  constructor() {
    super()

    print("Hello world")
  }

  _physics_process(delta: float) {
    let dx = 0.0
    let dy = 0.0

    if (!this.is_on_floor()) {
      this.vy += 0.03
    } else {
      this.vy = 0
    }

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

    if (Input.is_key_pressed(KeyList.KEY_SPACE) && this.is_on_floor()) {
      this.vy = -1.3
    }

    dy += this.vy

    const dPosition = new Vector2(dx, dy).mul(this.speed)

    this.move_and_slide(dPosition, new Vector2(0, -1))
  }
}
