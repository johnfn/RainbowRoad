
/**
*/
declare class EditorSceneImporter extends Reference {

  
/**
*/
  "new"(): EditorSceneImporter;
  static "new"(): EditorSceneImporter;




/** No documentation provided. */
protected _get_extensions(): any[];

/** No documentation provided. */
protected _get_import_flags(): int;

/** No documentation provided. */
protected _import_animation(path: string, flags: int, bake_fps: int): Animation;

/** No documentation provided. */
protected _import_scene(path: string, flags: int, bake_fps: int): Node;

/** No documentation provided. */
import_animation_from_other_importer(path: string, flags: int, bake_fps: int): Animation;

/** No documentation provided. */
import_scene_from_other_importer(path: string, flags: int, bake_fps: int): Node;

  connect<T extends SignalsOf<EditorSceneImporter>, U extends Node>(signal: T, node: U, method: keyof U): number;



/** No documentation provided. */
static IMPORT_SCENE: 1;

/** No documentation provided. */
static IMPORT_ANIMATION: 2;

/** No documentation provided. */
static IMPORT_ANIMATION_DETECT_LOOP: 4;

/** No documentation provided. */
static IMPORT_ANIMATION_OPTIMIZE: 8;

/** No documentation provided. */
static IMPORT_ANIMATION_FORCE_ALL_TRACKS_IN_ALL_CLIPS: 16;

/** No documentation provided. */
static IMPORT_ANIMATION_KEEP_VALUE_TRACKS: 32;

/** No documentation provided. */
static IMPORT_GENERATE_TANGENT_ARRAYS: 256;

/** No documentation provided. */
static IMPORT_FAIL_ON_MISSING_DEPENDENCIES: 512;

/** No documentation provided. */
static IMPORT_MATERIALS_IN_INSTANCES: 1024;

/** No documentation provided. */
static IMPORT_USE_COMPRESSION: 2048;


  
}
