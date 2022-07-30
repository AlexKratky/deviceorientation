"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = exports.isLandscapeLeft = exports.isLandscapeRight = exports.isPortraitReversed = exports.isPortraitDefault = exports.isLandscape = exports.isPortrait = exports.getDeviceOrientation = void 0;
let _deviceOrientation_cachedEvent;
/**
 * @param {Boolean} exactAngle - If it is set to true, then return a number from 0 up to 360, which represents current angle (rounded), otherwise it only returns 0, 90, 180 or 270 depending on which is more close to the current device angle
 * @returns {Number} current angle of device, see exactAngle description for more details
 */
function getDeviceOrientation(event, exactAngle = false) {
    if (!event && !_deviceOrientation_cachedEvent) {
        return 0;
    }
    else if (!event) {
        event = _deviceOrientation_cachedEvent;
    }
    if (!event || !event.beta || !event.gamma) {
        return 0;
    }
    // shoutout to https://stackoverflow.com/a/40720543
    const x = event.beta; // In degree in the range [-180,180], x, 'front to back'
    const y = event.gamma; // In degree in the range [-90,90], y, 'left to right'
    // calculate the angle
    const rad = Math.atan2(y, x);
    let deg = rad * (180 / Math.PI);
    // take into account if phone is held sideways / in landscape mode
    const screenOrientation = screen.orientation;
    // 90, -90, or 0
    const angle = screenOrientation.angle || window.orientation || 0;
    // now deg is <-180,180>
    deg = Math.round(deg + angle);
    // so if its negative, we will convert it to <180,360>
    if (deg < 0) {
        deg = 360 + deg;
    }
    if (exactAngle) {
        return deg;
    }
    // should be 45 instead of 55, but its more preferable to keep default (portrait mode)
    if (deg > 55 && deg <= 135) {
        return 90;
    }
    if (deg > 135 && deg < 225) {
        return 180;
    }
    // should be 315 instead of 305, but its more preferable to keep default (portrait mode)
    if (deg >= 225 && deg < 305) {
        return 270;
    }
    return 0;
}
exports.getDeviceOrientation = getDeviceOrientation;
/**
 * @returns {Boolean} Returns true if device is in portrait mode, false otherwise
 */
function isPortrait(event) {
    const orientation = getDeviceOrientation(event);
    return (orientation === 0 || orientation === 180);
}
exports.isPortrait = isPortrait;
/**
 * @returns {Boolean} Returns true if device is in landscape (flipped to side) mode, false otherwise
 */
function isLandscape(event) {
    const orientation = getDeviceOrientation(event);
    return (orientation === 90 || orientation === 270);
}
exports.isLandscape = isLandscape;
/**
 * @returns {Boolean} Returns true if device is in standard portrait mode, false otherwise
 */
function isPortraitDefault(event) {
    return getDeviceOrientation(event) === 0;
}
exports.isPortraitDefault = isPortraitDefault;
/**
 * @returns {Boolean} Returns true if device is in reverse portrait mode, false otherwise
 */
function isPortraitReversed(event) {
    return getDeviceOrientation(event) === 180;
}
exports.isPortraitReversed = isPortraitReversed;
/**
 * @returns {Boolean} Returns true if device is in landscape (flipped to right side) position, false otherwise
 */
function isLandscapeRight(event) {
    return getDeviceOrientation(event) === 90;
}
exports.isLandscapeRight = isLandscapeRight;
/**
 * @returns {Boolean} Returns true if device is in landscape (flipped to left side) position, false otherwise
 */
function isLandscapeLeft(event) {
    return getDeviceOrientation(event) === 270;
}
exports.isLandscapeLeft = isLandscapeLeft;
/**
 * Sets `deviceorientation` listener for you, the last event will be cached, so you can call `getDeviceOrientation` without any parameter and the cached event will be used
 *
 * @param {Boolean} throwErrorIfNotSupported if sets to true, then it will throw an error if window.DeviceOrientationEvent is undefined
 */
function init(throwErrorIfNotSupported = false) {
    if (window.DeviceOrientationEvent === undefined) {
        if (throwErrorIfNotSupported) {
            throw new Error('DeviceOrientationEvent is not supported in current browser');
        }
        return;
    }
    window.addEventListener("deviceorientation", (event) => {
        _deviceOrientation_cachedEvent = event;
    }, true);
}
exports.init = init;
exports.default = {
    getDeviceOrientation,
    isPortrait,
    isLandscape,
    isPortraitDefault,
    isPortraitReversed,
    isLandscapeRight,
    isLandscapeLeft,
    init,
};
