
declare type AssetType = {
  'res://Player.tscn': import('/Users/johnfn/code/RainbowRoad/src/Player').Player,
  'res://icon.png': StreamTexture,
  'res://assets/block.png': StreamTexture,
  'res://assets/block1.png': StreamTexture,
  'res://assets/star-base.png': StreamTexture,
  'res://assets/star-glasses.png': StreamTexture,
  'res://compiled/Player.gd': import('/Users/johnfn/code/RainbowRoad/src/Player').Player,
  'res://compiled/Player.gd': import('/Users/johnfn/code/RainbowRoad/src/Player').Player,
  'res://RainbowRoad.png': StreamTexture,
  'res://favicon.png': StreamTexture,
  'res://MainScene.tscn': Node2D
}

declare type AssetPath = keyof AssetType;
  