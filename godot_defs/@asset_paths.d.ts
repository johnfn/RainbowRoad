
declare type AssetType = {
  'res://Player.tscn': import('/Users/johnfn/code/RainbowRoad/src/Player').Player,
  'res://icon.png': StreamTexture,
  'res://assets/block.png': StreamTexture,
  'res://assets/block1.png': StreamTexture,
  'res://assets/star-base.png': StreamTexture,
  'res://assets/star-glasses.png': StreamTexture,
  'res://RainbowRoad.png': StreamTexture,
  'res://favicon.png': StreamTexture,
  'res://block.tscn': Sprite,
  'res://Door.tscn': Sprite,
  'res://MainScene.tscn': Node2D,
  'res://compiled/Player.gd': import('/Users/johnfn/code/RainbowRoad/src/Player').Player,
  'res://compiled/Player.gd': import('/Users/johnfn/code/RainbowRoad/src/Player').Player,
  'res://compiled/Door.gd': import('/Users/johnfn/code/RainbowRoad/src/Door').Door,
  'res://compiled/Door.gd': import('/Users/johnfn/code/RainbowRoad/src/Door').Door
}

declare type AssetPath = keyof AssetType;
  