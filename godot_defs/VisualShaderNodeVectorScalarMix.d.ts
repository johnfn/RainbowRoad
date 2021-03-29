
/**
 * Translates to `mix(a, b, weight)` in the shader language, where `a` and `b` are vectors and `weight` is a scalar.
 *
*/
declare class VisualShaderNodeVectorScalarMix extends VisualShaderNode {

  
/**
 * Translates to `mix(a, b, weight)` in the shader language, where `a` and `b` are vectors and `weight` is a scalar.
 *
*/
  "new"(): VisualShaderNodeVectorScalarMix;
  static "new"(): VisualShaderNodeVectorScalarMix;






  connect<T extends SignalsOf<VisualShaderNodeVectorScalarMix>, U extends Node>(signal: T, node: U, method: keyof U): number;





  
}
