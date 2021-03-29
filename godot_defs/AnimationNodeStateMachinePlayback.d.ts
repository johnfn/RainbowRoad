
/**
 * Allows control of [AnimationTree] state machines created with [AnimationNodeStateMachine]. Retrieve with `$AnimationTree.get("parameters/playback")`.
 *
 * **Example:**
 *
 * @example 
 * 
 * var state_machine = $AnimationTree.get("parameters/playback")
 * state_machine.travel("some_state")
 * @summary 
 * 
 *
*/
declare class AnimationNodeStateMachinePlayback extends Resource {

  
/**
 * Allows control of [AnimationTree] state machines created with [AnimationNodeStateMachine]. Retrieve with `$AnimationTree.get("parameters/playback")`.
 *
 * **Example:**
 *
 * @example 
 * 
 * var state_machine = $AnimationTree.get("parameters/playback")
 * state_machine.travel("some_state")
 * @summary 
 * 
 *
*/
  "new"(): AnimationNodeStateMachinePlayback;
  static "new"(): AnimationNodeStateMachinePlayback;




/** Returns the currently playing animation state. */
get_current_node(): string;

/** Returns the current travel path as computed internally by the A* algorithm. */
get_travel_path(): PoolStringArray;

/** Returns [code]true[/code] if an animation is playing. */
is_playing(): boolean;

/** Starts playing the given animation. */
start(node: string): void;

/** Stops the currently playing animation. */
stop(): void;

/** Transitions from the current state to another one, following the shortest path. */
travel(to_node: string): void;

  connect<T extends SignalsOf<AnimationNodeStateMachinePlayback>, U extends Node>(signal: T, node: U, method: keyof U): number;





  
}
