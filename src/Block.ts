import { ColorSet } from "./ColorSet"

export class Block extends StaticBody2D {
  curr_beat: float = 0.0
  @exports
  beat_count: int = 1

  scale_curve(proximity: float) {
    proximity /= 1.5 // range of 3 beats since it's double sided
    return max(0.0, 1 - proximity)
  }

  _ready() {
    let sprite = this.get_child(1)
    sprite.modulate = ColorSet.colors[this.beat_count]
  }

  _physics_process(delta: float) {
    this.curr_beat += delta

    while (this.curr_beat >= ColorSet.colors.size()) {
      this.curr_beat -= ColorSet.colors.size()
    }

    let beat_dist = abs(this.curr_beat - this.beat_count)
    if (beat_dist > ColorSet.colors.size() / 2) {
      beat_dist = ColorSet.colors.size() - beat_dist
    }
    let scale_factor = this.scale_curve(beat_dist)
    let shape = this.get_child(0)
    let sprite = this.get_child(1)
    this.scale = new Vector2(scale_factor, scale_factor)
    sprite.scale = new Vector2(scale_factor, scale_factor)
    shape.scale = new Vector2(scale_factor, scale_factor)
    shape.disabled = scale_factor === 0.0
  }
}
