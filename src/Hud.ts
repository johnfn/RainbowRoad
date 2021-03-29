export class Hud extends Node2D {
  glasses_start_x = 0.0
  glasses_stop_x = 0.0
  glasses_travel_distance = 0.0
  beats_per_sec = 0.0

  starGlasses = this.get_node("star-glasses")

  bpm = 140.0

  beats_past = 0.0

  constructor() {
    super()

    this.beats_per_sec = this.bpm / 60.0

    this.glasses_start_x = this.get_node("star-glasses").position.x
    this.glasses_stop_x = this.get_node("GlassesStop").position.x

    this.glasses_travel_distance = this.glasses_stop_x - this.glasses_start_x

    this.get_node("GlassesStop").queue_free()
  }

  _process(delta: float) {
    this.beats_past += (this.beats_per_sec * delta) / 2.0

    if (this.beats_past > 5.0) {
      this.beats_past -= 5.0
    }

    this.starGlasses.position.x =
      this.glasses_start_x +
      (this.beats_past / 5.0) * this.glasses_travel_distance
  }
}
