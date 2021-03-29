
/**
 * Returns the boolean result of the comparison between `INF` or `NaN` and a scalar parameter.
 *
*/
declare class VisualShaderNodeIs extends VisualShaderNode {

  
/**
 * Returns the boolean result of the comparison between `INF` or `NaN` and a scalar parameter.
 *
*/
  "new"(): VisualShaderNodeIs;
  static "new"(): VisualShaderNodeIs;



/** The comparison function. See [enum Function] for options. */
function: int;



  connect<T extends SignalsOf<VisualShaderNodeIs>, U extends Node>(signal: T, node: U, method: keyof U): number;



/**
 * Comparison with `INF` (Infinity).
 *
*/
static FUNC_IS_INF: 0;

/**
 * Comparison with `NaN` (Not a Number; denotes invalid numeric results, e.g. division by zero).
 *
*/
static FUNC_IS_NAN: 1;


  
}
