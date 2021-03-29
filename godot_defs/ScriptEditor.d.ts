
/**
 * **Note:** This class shouldn't be instantiated directly. Instead, access the singleton using [method EditorInterface.get_script_editor].
 *
*/
declare class ScriptEditor extends PanelContainer {

  
/**
 * **Note:** This class shouldn't be instantiated directly. Instead, access the singleton using [method EditorInterface.get_script_editor].
 *
*/
  "new"(): ScriptEditor;
  static "new"(): ScriptEditor;




/** No documentation provided. */
can_drop_data_fw(point: Vector2, data: any, from: Control): boolean;

/** No documentation provided. */
drop_data_fw(point: Vector2, data: any, from: Control): void;

/** Returns a [Script] that is currently active in editor. */
get_current_script(): Script;

/** No documentation provided. */
get_drag_data_fw(point: Vector2, from: Control): any;

/** Returns an array with all [Script] objects which are currently open in editor. */
get_open_scripts(): any[];

/** Goes to the specified line in the current script. */
goto_line(line_number: int): void;

/** No documentation provided. */
open_script_create_dialog(base_name: string, base_path: string): void;

  connect<T extends SignalsOf<ScriptEditor>, U extends Node>(signal: T, node: U, method: keyof U): number;





  /**
 * Emitted when user changed active script. Argument is a freshly activated [Script].
 *
*/
editor_script_changed: Signal<(script: Script) => void>

/**
 * Emitted when editor is about to close the active script. Argument is a [Script] that is going to be closed.
 *
*/
script_close: Signal<(script: Script) => void>

}
