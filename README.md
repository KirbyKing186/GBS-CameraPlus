# GBS-CameraPlus
**GB Studio plugin that extends the capabilities of the default camera.**

## Usage

### CameraPlus - Default

*CameraPlus Usage*: Decides whether the CameraPlus plugin will be used. By default, the CameraPlus plugin is enabled. Choosing to disable the CameraPlus plugin will ignore all modifications made by the plugin. Please note that even when CameraPlus is disabled, the engine and event files will still be compiled.

*Default Initial Configuration*: Decides what values the camera should initialize with at the beginning of a scene. By default, the CameraPlus plugin prefers the configuration provided by the plugin. Most scene types in the default engine of GB Studio have specific offset and deadzone values that can be different from the values configured by CameraPlus. Choosing "Prefer Scene Defaults Over Plugin Defaults" will choose the offset and deadzone values provided by the scene type.

*Default Offset X*: A customizable horizontal offset of the camera, which is measured in pixels. By default, it is set to 0. Positive values skew the camera to the left, while negative values skew the camera to the right. If Look-Ahead camera is enabled, Default Offset X is added to the existing offsets.

*Default Offset Y*: A customizable vertical offset of the camera, which is measured in pixels. By default, it is set to 8. Positive values skew the camera upwards, while negative values skew the camera downwards. If Look-Ahead camera is enabled, Default Offset Y is added to the existing offsets.

*Default Deadzone X*: A customizable value that describes how many pixels the player must move horizontally before the camera also moves horizontally. By default, it is set to 0.

*Default Deadzone Y*: A customizable value that describes how many pixels the player must move vertically before the camera also moves vertically. By default, it is set to 0.

### CameraPlus - Look-Ahead

*Look-Ahead Default Behavior*: Decides whether the Look-Ahead camera will be enabled, and decides which axes the Look-Ahead camera will effect. By default, it is disabled. If "Disabled" is chosen, the Look-Ahead camera will not be used, ignoring all values prefixed with "Look-Ahead". Choosing the X axis, the Y axis, or both the X and Y axes will activate the Look-Ahead camera for the selected field.

*Look-Ahead Initial Offsets*: Decides what offsets the Look-Ahead camera should start with. By default, the Look-Ahead camera will start a scene with the Look-Ahead offsets. 

*Look-Ahead Speed X*: Determines the speed that the camera will use when moving horizontally. By default, it is Speed 1. The speed is measured in pixels per frame.

*Look-Ahead Speed Y*: Determines the speed that the camera will use when moving vertically. By default, it is Speed 1. The speed is measured in pixels per frame.

*Look-Ahead Speed Fade-Out*: Determines the speed that the camera will use when fading out. By default, it is Speed 1. The speed is measured in pixels per frame.

*Look-Ahead Offset X*: A customizable horizontal offset of the camera that describes how many pixels the camera should move both left or right. By default, it is set to 16. For example, when Look-Ahead Offset X is set to 16, the player can see 16 more pixels when facing right, and 16 more pixels when facing left.

*Look-Ahead Offset Y*: A customizable horizontal offset of the camera that describes how many pixels the camera should move both upwards or downwards. By default, it is set to 16. For example, when Look-Ahead Offset Y is set to 16, the player can see 16 more pixels when facing up, and 16 more pixels when facing down.

## Credits

Developed and maintained by [KirbyKing186](https://github.com/KirbyKing186)

Assisted by [pau-tomas](https://github.com/pau-tomas) and his works on camera-related [GB Studio plugins](https://github.com/pau-tomas/gb-studio-plugins)