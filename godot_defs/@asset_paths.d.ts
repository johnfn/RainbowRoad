
declare type AssetType = {
  'res://MainScene.tscn': Node2D,
  'res://RainbowRoad.png': StreamTexture,
  'res://favicon.png': StreamTexture,
  'res://icon.png': StreamTexture,
  'res://compiled/Player.gd': import('/Users/johnfn/code/RainbowRoad/src/Player').Player,
  'res://compiled/Player.gd': import('/Users/johnfn/code/RainbowRoad/src/Player').Player
}

declare type AssetPath = keyof AssetType;
  