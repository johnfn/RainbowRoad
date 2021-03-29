class ColorSetSingleton extends Node2D {
  public colors: Array<Color> = [
    new Color(0, 0, 1),
    new Color(1, 0, 1),
    new Color(1, 0, 0),
    new Color(1, 1, 0),
    new Color(0, 1, 0),
    new Color(0, 1, 1),
  ]
}

export const ColorSet = new ColorSetSingleton()

// _ready() {
//   const root = this.get_tree().root;
//   const current_scene = root.get_child(root.get_child_count() - 1);
// }
