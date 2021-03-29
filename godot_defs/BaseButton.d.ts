
/**
 * BaseButton is the abstract base class for buttons, so it shouldn't be used directly (it doesn't display anything). Other types of buttons inherit from it.
 *
*/
declare class BaseButton extends Control {

  
/**
 * BaseButton is the abstract base class for buttons, so it shouldn't be used directly (it doesn't display anything). Other types of buttons inherit from it.
 *
*/
  "new"(): BaseButton;
  static "new"(): BaseButton;



/** Determines when the button is considered clicked, one of the [enum ActionMode] constants. */
action_mode: int;

/**
 * Binary mask to choose which mouse buttons this button will respond to.
 *
 * To allow both left-click and right-click, use `BUTTON_MASK_LEFT | BUTTON_MASK_RIGHT`.
 *
*/
button_mask: int;

/** If [code]true[/code], the button is in disabled state and can't be clicked or toggled. */
disabled: boolean;

/** Focus access mode to use when switching between enabled/disabled (see [member Control.focus_mode] and [member disabled]). */
enabled_focus_mode: int;


/** [ButtonGroup] associated to the button. */
group: ButtonGroup;

/**
 * If `true`, the button stays pressed when moving the cursor outside the button while pressing it.
 *
 * **Note:** This property only affects the button's visual appearance. Signals will be emitted at the same moment regardless of this property's value.
 *
*/
keep_pressed_outside: boolean;

/** If [code]true[/code], the button's state is pressed. Means the button is pressed down or toggled (if [member toggle_mode] is active). */
pressed: boolean;

/** [ShortCut] associated to the button. */
shortcut: ShortCut;

/** If [code]true[/code], the button will add information about its shortcut in the tooltip. */
shortcut_in_tooltip: boolean;

/** If [code]true[/code], the button is in toggle mode. Makes the button flip state between pressed and unpressed each time its area is clicked. */
toggle_mode: boolean;

/** Called when the button is pressed. If you need to know the button's pressed state (and [member toggle_mode] is active), use [method _toggled] instead. */
protected _pressed(): void;

/** Called when the button is toggled (only if [member toggle_mode] is active). */
protected _toggled(button_pressed: boolean): void;

/** Returns the visual state used to draw the button. This is useful mainly when implementing your own draw code by either overriding _draw() or connecting to "draw" signal. The visual state of the button is defined by the [enum DrawMode] enum. */
get_draw_mode(): int;

/** Returns [code]true[/code] if the mouse has entered the button and has not left it yet. */
is_hovered(): boolean;

  connect<T extends SignalsOf<BaseButton>, U extends Node>(signal: T, node: U, method: keyof U): number;



/**
 * The normal state (i.e. not pressed, not hovered, not toggled and enabled) of buttons.
 *
*/
static DRAW_NORMAL: 0;

/**
 * The state of buttons are pressed.
 *
*/
static DRAW_PRESSED: 1;

/**
 * The state of buttons are hovered.
 *
*/
static DRAW_HOVER: 2;

/**
 * The state of buttons are disabled.
 *
*/
static DRAW_DISABLED: 3;

/**
 * The state of buttons are both hovered and pressed.
 *
*/
static DRAW_HOVER_PRESSED: 4;

/**
 * Require just a press to consider the button clicked.
 *
*/
static ACTION_MODE_BUTTON_PRESS: 0;

/**
 * Require a press and a subsequent release before considering the button clicked.
 *
*/
static ACTION_MODE_BUTTON_RELEASE: 1;


  /**
 * Emitted when the button starts being held down.
 *
*/
button_down: Signal<() => void>

/**
 * Emitted when the button stops being held down.
 *
*/
button_up: Signal<() => void>

/**
 * Emitted when the button is toggled or pressed. This is on [signal button_down] if [member action_mode] is [constant ACTION_MODE_BUTTON_PRESS] and on [signal button_up] otherwise.
 *
 * If you need to know the button's pressed state (and [member toggle_mode] is active), use [signal toggled] instead.
 *
*/
pressed: Signal<() => void>

/**
 * Emitted when the button was just toggled between pressed and normal states (only if [member toggle_mode] is active). The new state is contained in the `button_pressed` argument.
 *
*/
toggled: Signal<(button_pressed: boolean) => void>

}
