
/**
*/
declare class EditorResourceConversionPlugin extends Reference {

  
/**
*/
  "new"(): EditorResourceConversionPlugin;
  static "new"(): EditorResourceConversionPlugin;




/** No documentation provided. */
protected _convert(resource: Resource): Resource;

/** No documentation provided. */
protected _converts_to(): string;

  connect<T extends SignalsOf<EditorResourceConversionPlugin>, U extends Node>(signal: T, node: U, method: keyof U): number;





  
}
