
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
  'res://compiled/Door.gd': import('/Users/johnfn/code/RainbowRoad/src/Door').Door,
  'res://Level2.tscn': Node2D,
  'res://assets/end-door-closed.png': StreamTexture,
  'res://assets/start-door-closed.png': StreamTexture,
  'res://compiled/Player.gd': import('/Users/johnfn/code/RainbowRoad/src/Player').Player,
  'res://compiled/Player.gd': import('/Users/johnfn/code/RainbowRoad/src/Player').Player,
  'res://assets/rainbow.png': StreamTexture,
  'res://compiled/Door.gd': import('/Users/johnfn/code/RainbowRoad/src/Door').Door,
  'res://YouWin.tscn': Node2D,
  'res://MainScene.tscn': Node2D,
  'res://Level3.tscn': Node2D,
  'res://Hud.tscn': import('/Users/johnfn/code/RainbowRoad/src/Hud').Hud,
  'res://compiled/Hud.gd': import('/Users/johnfn/code/RainbowRoad/src/Hud').Hud,
  'res://compiled/Hud.gd': import('/Users/johnfn/code/RainbowRoad/src/Hud').Hud
}

declare type AssetPath = keyof AssetType;
  