#ifndef CAMERA_H
#define CAMERA_H

#include <gbdk/platform.h>

#define SCREEN_WIDTH 160
#define SCREEN_HEIGHT 144
#define SCREEN_WIDTH_HALF 80
#define SCREEN_HEIGHT_HALF 72

#define CAMERA_UNLOCKED 0x00
#define CAMERA_LOCK_X_FLAG 0x01
#define CAMERA_LOCK_Y_FLAG 0x02
#define CAMERA_LOCK_FLAG (CAMERA_LOCK_X_FLAG | CAMERA_LOCK_Y_FLAG)

extern INT16 camera_x;
extern INT16 camera_y;
extern BYTE camera_offset_x;
extern BYTE camera_offset_y;
extern BYTE camera_deadzone_x;
extern BYTE camera_deadzone_y;
extern UBYTE camera_settings;

// CAMERAPLUS DEFAULT VARIABLES
extern UBYTE camplus_status;		//Decides whether the plugin will be used
extern UBYTE camplus_init;			// Decides whether to use plugin-defined values or scene-default values
extern BYTE camplus_offset_x;		// Plugin-Defined default X Offset value
extern BYTE camplus_offset_y;		// Plugin-Defined default Y Offset value
extern BYTE camplus_deadzone_x;		// Plugin-Defined default X Deadzone value
extern BYTE camplus_deadzone_y;		// Plugin-Defined default Y Deadzone value

// CAMERAPLUS LOOK-AHEAD VARIABLES
extern BYTE lookahead_offset_x;		// Look-ahead default X Offset value
extern BYTE lookahead_offset_y;		// Look-ahead default Y Offset value
extern UBYTE lookahead_check_x;		// Look-ahead "denominator" for when X movement uses a fraction speed
extern UBYTE lookahead_check_y;		// Look-ahead "denominator" for when Y movement uses a fraction speed
extern UBYTE lookahead_check_f;		// Look-ahead "denominator" for when Fade-Out movement uses a fraction speed
extern UBYTE lookahead_log_x;		// Look-ahead tick for stalling with X movement fraction speeds
extern UBYTE lookahead_log_y;		// Look-ahead tick for stalling with Y movement fraction speeds
extern UBYTE lookahead_log_f;		// Look-ahead tick for stalling with Fade-Out movement fraction speeds
extern UBYTE lookahead_speed_x;		// Look-ahead speed when moving the camera along the X-axis
extern UBYTE lookahead_speed_y;		// Look-ahead speed when moving the camera along the Y-axis
extern UBYTE lookahead_speed_f;		// Look-ahead speed when fading away the camera
extern UBYTE lookahead_state;		// Look-ahead state settings: 0 is default, 1 is fade-out, and 2 is paused
extern UBYTE lookahead_behavior;	// Look-ahead behavior across the X-axis and Y-axis
extern UBYTE lookahead_init;		// Look-ahead offsets when starting the scene

void camera_init(void) BANKED;

inline void camera_reset(void) {
    camera_deadzone_x = camera_deadzone_y = 0;
}

void camera_update(void) BANKED;

#endif