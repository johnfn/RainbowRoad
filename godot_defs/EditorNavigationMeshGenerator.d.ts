
/**
*/
declare class EditorNavigationMeshGenerator extends Object {

  
/**
*/
  "new"(): EditorNavigationMeshGenerator;
  static "new"(): EditorNavigationMeshGenerator;




/** No documentation provided. */
bake(nav_mesh: NavigationMesh, root_node: Node): void;

/** No documentation provided. */
clear(nav_mesh: NavigationMesh): void;

  connect<T extends SignalsOf<EditorNavigationMeshGenerator>, U extends Node>(signal: T, node: U, method: keyof U): number;





  
}
