
declare type AssetType = {
  'res://Player.tscn': import('/home/arch/RainbowRoad/src/Player').Player,
  'res://RainbowRoad.png': StreamTexture,
  'res://favicon.png': StreamTexture,
  'res://icon.png': StreamTexture,
  'res://test.tscn': Node2D,
  'res://assets/block.png': StreamTexture,
  'res://assets/block1.png': StreamTexture,
  'res://assets/star-base.png': StreamTexture,
  'res://assets/star-glasses.png': StreamTexture,
  'res://compiled/Player.gd': import('/home/arch/RainbowRoad/src/Player').Player,
  'res://compiled/Player.gd': import('/home/arch/RainbowRoad/src/Player').Player,
  'res://MainScene.tscn': Node2D,
  'res://blocktest.tscn': import('/home/arch/RainbowRoad/src/Block').Block,
  'res://block.tscn': import('/home/arch/RainbowRoad/src/Block').Block,
  'res://compiled/Block.gd': import('/home/arch/RainbowRoad/src/Block').Block,
  'res://compiled/Block.gd': import('/home/arch/RainbowRoad/src/Block').Block
}

declare type AssetPath = keyof AssetType;
  