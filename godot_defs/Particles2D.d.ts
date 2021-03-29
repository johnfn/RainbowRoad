
/**
 * 2D particle node used to create a variety of particle systems and effects. [Particles2D] features an emitter that generates some number of particles at a given rate.
 *
 * Use the `process_material` property to add a [ParticlesMaterial] to configure particle appearance and behavior. Alternatively, you can add a [ShaderMaterial] which will be applied to all particles.
 *
*/
declare class Particles2D extends Node2D {

  
/**
 * 2D particle node used to create a variety of particle systems and effects. [Particles2D] features an emitter that generates some number of particles at a given rate.
 *
 * Use the `process_material` property to add a [ParticlesMaterial] to configure particle appearance and behavior. Alternatively, you can add a [ShaderMaterial] which will be applied to all particles.
 *
*/
  "new"(): Particles2D;
  static "new"(): Particles2D;



/** Number of particles emitted in one emission cycle. */
amount: int;

/** Particle draw order. Uses [enum DrawOrder] values. */
draw_order: int;

/** If [code]true[/code], particles are being emitted. */
emitting: boolean;

/** How rapidly particles in an emission cycle are emitted. If greater than [code]0[/code], there will be a gap in emissions before the next cycle begins. */
explosiveness: float;

/** The particle system's frame rate is fixed to a value. For instance, changing the value to 2 will make the particles render at 2 frames per second. Note this does not slow down the simulation of the particle system itself. */
fixed_fps: int;

/** If [code]true[/code], results in fractional delta calculation which has a smoother particles display effect. */
fract_delta: boolean;

/** Amount of time each particle will exist. */
lifetime: float;

/** If [code]true[/code], particles use the parent node's coordinate space. If [code]false[/code], they use global coordinates. */
local_coords: boolean;

/**
 * Normal map to be used for the [member texture] property.
 *
 * **Note:** Godot expects the normal map to use X+, Y-, and Z+ coordinates. See [url=http://wiki.polycount.com/wiki/Normal_Map_Technical_Details#Common_Swizzle_Coordinates]this page[/url] for a comparison of normal map coordinates expected by popular engines.
 *
*/
normal_map: Texture;

/** If [code]true[/code], only one emission cycle occurs. If set [code]true[/code] during a cycle, emission will stop at the cycle's end. */
one_shot: boolean;

/** Particle system starts as if it had already run for this many seconds. */
preprocess: float;

/** [Material] for processing particles. Can be a [ParticlesMaterial] or a [ShaderMaterial]. */
process_material: Material;

/** Emission lifetime randomness ratio. */
randomness: float;

/** Particle system's running speed scaling ratio. A value of [code]0[/code] can be used to pause the particles. */
speed_scale: float;

/** Particle texture. If [code]null[/code], particles will be squares. */
texture: Texture;

/** Editor visibility helper. */
visibility_rect: Rect2;

/** Returns a rectangle containing the positions of all existing particles. */
capture_rect(): Rect2;

/** Restarts all the existing particles. */
restart(): void;

  connect<T extends SignalsOf<Particles2D>, U extends Node>(signal: T, node: U, method: keyof U): number;



/**
 * Particles are drawn in the order emitted.
 *
*/
static DRAW_ORDER_INDEX: 0;

/**
 * Particles are drawn in order of remaining lifetime.
 *
*/
static DRAW_ORDER_LIFETIME: 1;


  
}
