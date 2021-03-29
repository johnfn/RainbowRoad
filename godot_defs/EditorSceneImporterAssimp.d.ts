
/**
 * This is an FBX 3D asset importer based on [url=http://assimp.org/]Assimp[/url]. It currently has many known limitations and works best with static meshes. Most animated meshes won't import correctly.
 *
 * If exporting a FBX scene from Autodesk Maya, use these FBX export settings:
 *
 * @example 
 * 
 * - Smoothing Groups
 * - Smooth Mesh
 * - Triangluate (for meshes with blend shapes)
 * - Bake Animation
 * - Resample All
 * - Deformed Models
 * - Skins
 * - Blend Shapes
 * - Curve Filters
 * - Constant Key Reducer
 * - Auto Tangents Only
 * - *Do not check* Constraints (as it will break the file)
 * - Can check Embed Media (embeds textures into the exported FBX file)
 *   - Note that when importing embedded media, the texture and mesh will be a single immutable file.
 *   - You will have to re-export then re-import the FBX if the texture has changed.
 * - Units: Centimeters
 * - Up Axis: Y
 * - Binary format in FBX 2017
 * @summary 
 * 
 *
*/
declare class EditorSceneImporterAssimp extends EditorSceneImporter {

  
/**
 * This is an FBX 3D asset importer based on [url=http://assimp.org/]Assimp[/url]. It currently has many known limitations and works best with static meshes. Most animated meshes won't import correctly.
 *
 * If exporting a FBX scene from Autodesk Maya, use these FBX export settings:
 *
 * @example 
 * 
 * - Smoothing Groups
 * - Smooth Mesh
 * - Triangluate (for meshes with blend shapes)
 * - Bake Animation
 * - Resample All
 * - Deformed Models
 * - Skins
 * - Blend Shapes
 * - Curve Filters
 * - Constant Key Reducer
 * - Auto Tangents Only
 * - *Do not check* Constraints (as it will break the file)
 * - Can check Embed Media (embeds textures into the exported FBX file)
 *   - Note that when importing embedded media, the texture and mesh will be a single immutable file.
 *   - You will have to re-export then re-import the FBX if the texture has changed.
 * - Units: Centimeters
 * - Up Axis: Y
 * - Binary format in FBX 2017
 * @summary 
 * 
 *
*/
  "new"(): EditorSceneImporterAssimp;
  static "new"(): EditorSceneImporterAssimp;






  connect<T extends SignalsOf<EditorSceneImporterAssimp>, U extends Node>(signal: T, node: U, method: keyof U): number;





  
}
