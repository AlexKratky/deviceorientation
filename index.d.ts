/**
 * @param {Boolean} exactAngle - If it is set to true, then return a number from 0 up to 360, which represents current angle (rounded), otherwise it only returns 0, 90, 180 or 270 depending on which is more close to the current device angle
 * @returns {Number} current angle of device, see exactAngle description for more details
 */
export declare function getDeviceOrientation(event: DeviceOrientationEvent, exactAngle?: Boolean): Number;
/**
 * @returns {Boolean} Returns true if device is in portrait mode, false otherwise
 */
export declare function isPortrait(event: DeviceOrientationEvent): Boolean;
/**
 * @returns {Boolean} Returns true if device is in landscape (flipped to side) mode, false otherwise
 */
export declare function isLandscape(event: DeviceOrientationEvent): Boolean;
/**
 * @returns {Boolean} Returns true if device is in standard portrait mode, false otherwise
 */
export declare function isPortraitDefault(event: DeviceOrientationEvent): Boolean;
/**
 * @returns {Boolean} Returns true if device is in reverse portrait mode, false otherwise
 */
export declare function isPortraitReversed(event: DeviceOrientationEvent): Boolean;
/**
 * @returns {Boolean} Returns true if device is in landscape (flipped to right side) position, false otherwise
 */
export declare function isLandscapeRight(event: DeviceOrientationEvent): Boolean;
/**
 * @returns {Boolean} Returns true if device is in landscape (flipped to left side) position, false otherwise
 */
export declare function isLandscapeLeft(event: DeviceOrientationEvent): Boolean;
/**
 * Sets `deviceorientation` listener for you, the last event will be cached, so you can call `getDeviceOrientation` without any parameter and the cached event will be used
 *
 * @param {Boolean} throwErrorIfNotSupported if sets to true, then it will throw an error if window.DeviceOrientationEvent is undefined
 */
export declare function init(throwErrorIfNotSupported?: Boolean): void;
declare const _default: {
    getDeviceOrientation: typeof getDeviceOrientation;
    isPortrait: typeof isPortrait;
    isLandscape: typeof isLandscape;
    isPortraitDefault: typeof isPortraitDefault;
    isPortraitReversed: typeof isPortraitReversed;
    isLandscapeRight: typeof isLandscapeRight;
    isLandscapeLeft: typeof isLandscapeLeft;
    init: typeof init;
};
export default _default;
//# sourceMappingURL=index.d.ts.map