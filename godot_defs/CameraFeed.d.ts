
/**
 * A camera feed gives you access to a single physical camera attached to your device. When enabled, Godot will start capturing frames from the camera which can then be used.
 *
 * **Note:** Many cameras will return YCbCr images which are split into two textures and need to be combined in a shader. Godot does this automatically for you if you set the environment to show the camera image in the background.
 *
*/
declare class CameraFeed extends Reference {

  
/**
 * A camera feed gives you access to a single physical camera attached to your device. When enabled, Godot will start capturing frames from the camera which can then be used.
 *
 * **Note:** Many cameras will return YCbCr images which are split into two textures and need to be combined in a shader. Godot does this automatically for you if you set the environment to show the camera image in the background.
 *
*/
  "new"(): CameraFeed;
  static "new"(): CameraFeed;



/** If [code]true[/code], the feed is active. */
feed_is_active: boolean;

/** The transform applied to the camera's image. */
feed_transform: Transform2D;

/** Returns the unique ID for this feed. */
get_id(): int;

/** Returns the camera's name. */
get_name(): string;

/** Returns the position of camera on the device. */
get_position(): int;

  connect<T extends SignalsOf<CameraFeed>, U extends Node>(signal: T, node: U, method: keyof U): number;



/**
 * No image set for the feed.
 *
*/
static FEED_NOIMAGE: 0;

/**
 * Feed supplies RGB images.
 *
*/
static FEED_RGB: 1;

/**
 * Feed supplies YCbCr images that need to be converted to RGB.
 *
*/
static FEED_YCBCR: 2;

/**
 * Feed supplies separate Y and CbCr images that need to be combined and converted to RGB.
 *
*/
static FEED_YCBCR_SEP: 3;

/**
 * Unspecified position.
 *
*/
static FEED_UNSPECIFIED: 0;

/**
 * Camera is mounted at the front of the device.
 *
*/
static FEED_FRONT: 1;

/**
 * Camera is mounted at the back of the device.
 *
*/
static FEED_BACK: 2;


  
}
