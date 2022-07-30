# DeviceOrientation

* `event` represented in methods is `DeviceOrientationEvent` obtained from `deviceorientation` listener, see more [here](https://developer.mozilla.org/en-US/docs/Web/Events/Detecting_device_orientation). For supported browsers go [here](https://developer.mozilla.org/en-US/docs/Web/Events/Detecting_device_orientation#api.deviceorientationevent).

## Demo

You can see a demo of the above code at [https://alexkratky.github.io/deviceorientation/demo/](https://alexkratky.github.io/deviceorientation/demo/).

## Installation & Usage

To install run:

```bash
yarn add deviceorientation-js
# or
npm i deviceorientation-js
```

Then import methods you like to use like this:

```js
import { getDeviceOrientation, isLandscape, isPortrait, init } from 'deviceorientation'
// then you can call methods directly
```

or import all methods:

```js
import deviceorientation from 'deviceorientation'
// then you call methods on deviceorientation, e.g. deviceorientation.init()
```

to use without import in pure js, you can copy `deviceorientation.js` file from the demo folder and import it directly into your HTML:

```html
<script>
        var exports = {}
</script>
<script src="deviceorientation.js"></script>
<script>
    window.addEventListener("deviceorientation", (event) => console.log(getDeviceOrientation(event, true)), true);
</script>
```

but this solution is not recommended and is used only for demo purposes and limitations of Github pages.

## Example

```js
import { getDeviceOrientation } from 'deviceorientation'

let previousOrientation = null
const handleOrientation = (event) => {
    const orientation = getDeviceOrientation(event)
    if (previousOrientation && previousOrientation !== orientation) {
        alert('orientation changed')
    }
    previousOrientation = orientation
}

window.addEventListener("deviceorientation", handleOrientation, true);
```
## Methods

`getDeviceOrientation(event, exactAngle = false)`

* returns the device orientation as angle, if exactAngle is false (which is by default), it only returns 0, 90, 180 or 270 depending on which is more close to the current device angle. If it is set to true, it returns a number from 0 up to 360, which represents current angle (rounded).

`isPortrait(event)`

* if device is in portrait position, meaning `getDeviceOrientation(event, false) === 0 || getDeviceOrientation(event, false) === 180`

`isLandscape(event)`

* if device is in landscape (flipped to side) position, meaning `getDeviceOrientation(event, false) === 90 || getDeviceOrientation(event, false) === 270`

`isPortraitDefault(event)`

* if device is in standard portrait position, meaning `getDeviceOrientation(event, false) === 0`

`isLandscapeRight(event)`

*  if device is in landscape (flipped to right side) position `getDeviceOrientation(event, false) === 90`

`isPortraitReversed(event)`

* if device is in reverse portrait position, meaning `getDeviceOrientation(event, false) === 180`

`isLandscapeLeft(event)`

* if device is in landscape (flipped to left side) position `getDeviceOrientation(event, false) === 270`

`init(throwErrorIfNotSupported = false)`

* sets `deviceorientation` listener for you, the last event will be cached, so you can call `getDeviceOrientation` without any parameter and the cached event will be used