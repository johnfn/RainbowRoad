declare type NodePathToTypePlayer = {
  "CollisionShape2D": CollisionShape2D,
  "RainbowRoad2": Sprite,
}    

  
import Player from './..//Users/johnfn/code/RainbowRoad/src/Player'

declare module './../src/Player' {
  interface Player {
    get_node<T extends keyof NodePathToTypePlayer>(path: T): NodePathToTypePlayer[T];
    connect<T extends SignalsOf<Player>, U extends Node>(signal: T, node: U, method: keyof U): number;
  }

  namespace Player {
    export function _new(): Player;

    export { _new as new };
  }
}
  