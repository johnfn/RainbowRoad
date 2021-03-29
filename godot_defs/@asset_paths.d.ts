
declare type AssetType = {
  'res://RainbowRoad.png': StreamTexture,
  'res://favicon.png': StreamTexture,
  'res://icon.png': StreamTexture,
  'res://assets/block.png': StreamTexture,
  'res://compiled/Player.gd': import('/Users/johnfn/code/RainbowRoad/src/Player').Player,
  'res://compiled/Player.gd': import('/Users/johnfn/code/RainbowRoad/src/Player').Player,
  'res://MainScene.tscn': Node2D
}

declare type AssetPath = keyof AssetType;
  