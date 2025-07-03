const id = "EVENT_CAMERAPLUS_PROPERTY_SET";
const groups = ["CameraPlus", "EVENT_GROUP_CAMERA", "EVENT_GROUP_VARIABLES"];
const name = "Set CameraPlus Property";

const fields = [
  {
    key: "field",
    label: "Field",
    type: "select",
    width: "50%",
    defaultValue: "scroll_x",
    options: [
	  // Default GBS camera variables
      ["scroll_x", "Scroll X"],
      ["scroll_y", "Scroll Y"],
      ["camera_x", "Camera X"],
      ["camera_y", "Camera Y"],
      ["camera_offset_x", "Current Camera Offset X"],
      ["camera_offset_y", "Current Camera Offset Y"],
      ["camera_deadzone_x", "Current Camera Deadzone X"],
      ["camera_deadzone_y", "Current Camera Deadzone Y"],
	  
	  // CameraPlus (Default) variables
	  ["camplus_init", "CameraPlus Default Initial Behavior"],
	  ["camplus_offset_x", "CameraPlus Default Camera Offset X"],
      ["camplus_offset_y", "CameraPlus Default Offset Y"],
      ["camplus_deadzone_x", "CameraPlus Default Deadzone X"],
      ["camplus_deadzone_y", "CameraPlus Default Deadzone Y"],
	  
	  // CameraPlus (Look-Ahead) variables
      ["lookahead_behavior", "Look-Ahead Axis Behavior"],
	  ["lookahead_init", "Look-Ahead Initial Offsets"],
	  ["lookahead_state", "Look-Ahead Current State"],
	  ["lookahead_offset_x", "Look-Ahead Offset X"],
      ["lookahead_offset_y", "Look-Ahead Offset Y"],
      ["lookahead_speed_x", "Look-Ahead Speed X"],
      ["lookahead_speed_y", "Look-Ahead Speed Y"],
      ["lookahead_speed_f", "Look-Ahead Speed Fade-Out"],
      ["lookahead_log_x", "Look-Ahead Modulo Tick X (Advanced)"],
      ["lookahead_log_y", "Look-Ahead Modulo Tick Y (Advanced)"],
      ["lookahead_log_f", "Look-Ahead Modulo Tick Fade-Out (Advanced)"],
      ["lookahead_check_x", "Look-Ahead Modulo Divisor X (Advanced)"],
      ["lookahead_check_y", "Look-Ahead Modulo Divisor Y (Advanced)"],
      ["lookahead_check_f", "Look-Ahead Modulo Divisor Fade-Out (Advanced)"],
	  ["camplus_status", "CameraPlus Usage Status (Debug)"],
    ],
  },
  {
    type: "group",
    width: "50%",
    fields: [
      {
        key: "variable",
	    label: "Variable",
        type: "variable",
        defaultValue: "LAST_VARIABLE",
        conditions: [
          {
            key: "type",
            eq: "variable",
          },
        ],
      },
      {
        key: "value",
	    label: "Number",
        type: "number",
        defaultValue: 0,
        min: -32768,
        max: 32767,
        conditions: [
          {
            key: "type",
            eq: "number",
          },
        ],
      },
	],
  },
  {
	key: "type",
	// Uses a Zero-Width Joiner for a label
	label: "‍",
	type: "selectbutton",
	options: [
	  ["number", "Number"],
	  ["variable", "Variable"],
	],
	inline: true,
	defaultValue: "number",
  },
];

const compile = (input, helpers) => {
  const { appendRaw, _addNL, getVariableAlias, _addComment } = helpers;
	
  const fieldVarTypeLookup = {
    scroll_x: "INT16",
    scroll_y: "INT16",
    camera_x: "INT16",
    camera_y: "INT16",
    camera_deadzone_x: "UINT8",
    camera_deadzone_y: "UINT8",
    camera_offset_x: "UINT8",
    camera_offset_y: "UINT8",
	
	camplus_status: "UINT8",
	camplus_offset_x: "INT8",
	camplus_offset_y: "INT8",
	camplus_deadzone_x: "INT8",
	camplus_deadzone_y: "INT8",
	
	lookahead_behavior: "UINT8",
	lookahead_init: "UINT8",
	lookahead_state: "UINT8",
	lookahead_offset_x: "INT8",
	lookahead_offset_y: "INT8",
	lookahead_speed_x: "UINT8",
	lookahead_speed_y: "UINT8",
	lookahead_speed_f: "UINT8",
	lookahead_log_x: "UINT8",
	lookahead_log_y: "UINT8",
	lookahead_log_f: "UINT8",
	lookahead_check_x: "UINT8",
	lookahead_check_y: "UINT8",
	lookahead_check_f: "UINT8",
  };
  
  const fieldName = `_${input.field}`;
  const numName = `${input.value}`;
  const varName = getVariableAlias(input.variable);
  
  if (input.type === "variable") {
    _addComment("Set CameraPlus Field Set to Variable");
    appendRaw(
	`VM_SET_${fieldVarTypeLookup[input.field]} ${fieldName}, ${varName}`
	)
  } else {
	_addComment("Set CameraPlus Field Set to Value");
    appendRaw(
    `VM_SET_CONST_${fieldVarTypeLookup[input.field]} ${fieldName}, ${numName}`
	)
  }
  _addNL();
};

module.exports = {
  id,
  name,
  groups,
  fields,
  compile,
  allowedBeforeInitFade: true,
};
