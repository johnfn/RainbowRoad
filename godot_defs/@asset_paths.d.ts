
declare type AssetType = {
  'res://RainbowRoad.png': StreamTexture,
  'res://favicon.png': StreamTexture,
  'res://icon.png': StreamTexture,
  'res://assets/block.png': StreamTexture,
  'res://Player.tscn': import('/Users/johnfn/code/RainbowRoad/src/Player').Player,
  'res://MainScene.tscn': Node2D,
  'res://compiled/Player.gd': import('/Users/johnfn/code/RainbowRoad/src/Player').Player,
  'res://compiled/Player.gd': import('/Users/johnfn/code/RainbowRoad/src/Player').Player
}

declare type AssetPath = keyof AssetType;
  