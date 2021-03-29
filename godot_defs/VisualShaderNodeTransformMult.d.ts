
/**
 * A multiplication operation on two transforms (4x4 matrices), with support for different multiplication operators.
 *
*/
declare class VisualShaderNodeTransformMult extends VisualShaderNode {

  
/**
 * A multiplication operation on two transforms (4x4 matrices), with support for different multiplication operators.
 *
*/
  "new"(): VisualShaderNodeTransformMult;
  static "new"(): VisualShaderNodeTransformMult;



/** The multiplication type to be performed on the transforms. See [enum Operator] for options. */
operator: int;



  connect<T extends SignalsOf<VisualShaderNodeTransformMult>, U extends Node>(signal: T, node: U, method: keyof U): number;



/**
 * Multiplies transform `a` by the transform `b`.
 *
*/
static OP_AxB: 0;

/**
 * Multiplies transform `b` by the transform `a`.
 *
*/
static OP_BxA: 1;

/**
 * Performs a component-wise multiplication of transform `a` by the transform `b`.
 *
*/
static OP_AxB_COMP: 2;

/**
 * Performs a component-wise multiplication of transform `b` by the transform `a`.
 *
*/
static OP_BxA_COMP: 3;


  
}
