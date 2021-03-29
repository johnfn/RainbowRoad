
/**
 * Control node for playing video streams using [VideoStream] resources.
 *
 * Supported video formats are [url=https://www.webmproject.org/]WebM[/url] ([VideoStreamWebm]), [url=https://www.theora.org/]Ogg Theora[/url] ([VideoStreamTheora]), and any format exposed via a GDNative plugin using [VideoStreamGDNative].
 *
*/
declare class VideoPlayer extends Control {

  
/**
 * Control node for playing video streams using [VideoStream] resources.
 *
 * Supported video formats are [url=https://www.webmproject.org/]WebM[/url] ([VideoStreamWebm]), [url=https://www.theora.org/]Ogg Theora[/url] ([VideoStreamTheora]), and any format exposed via a GDNative plugin using [VideoStreamGDNative].
 *
*/
  "new"(): VideoPlayer;
  static "new"(): VideoPlayer;



/** The embedded audio track to play. */
audio_track: int;

/** If [code]true[/code], playback starts when the scene loads. */
autoplay: boolean;

/** Amount of time in milliseconds to store in buffer while playing. */
buffering_msec: int;

/** Audio bus to use for sound playback. */
bus: string;

/** If [code]true[/code], the video scales to the control size. Otherwise, the control minimum size will be automatically adjusted to match the video stream's dimensions. */
expand: boolean;

/** If [code]true[/code], the video is paused. */
paused: boolean;

/** The assigned video stream. See description for supported formats. */
stream: VideoStream;

/** The current position of the stream, in seconds. */
stream_position: float;

/** Audio volume as a linear value. */
volume: float;

/** Audio volume in dB. */
volume_db: float;

/** Returns the video stream's name, or [code]"<No Stream>"[/code] if no video stream is assigned. */
get_stream_name(): string;

/** Returns the current frame as a [Texture]. */
get_video_texture(): Texture;

/**
 * Returns `true` if the video is playing.
 *
 * **Note:** The video is still considered playing if paused during playback.
 *
*/
is_playing(): boolean;

/** Starts the video playback from the beginning. If the video is paused, this will not unpause the video. */
play(): void;

/**
 * Stops the video playback and sets the stream position to 0.
 *
 * **Note:** Although the stream position will be set to 0, the first frame of the video stream won't become the current frame.
 *
*/
stop(): void;

  connect<T extends SignalsOf<VideoPlayer>, U extends Node>(signal: T, node: U, method: keyof U): number;





  /**
 * Emitted when playback is finished.
 *
*/
finished: Signal<() => void>

}
