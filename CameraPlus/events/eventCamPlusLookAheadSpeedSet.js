const id = "EVENT_CAMERAPLUS_LOOKAHEAD_SPEED_SET";
const groups = ["CameraPlus", "EVENT_GROUP_CAMERA"];
const name = "Set CameraPlus Look-Ahead Speed";

const fields = [
  {
    key: "field",
    label: "Field",
    type: "select",
    width: "50%",
    defaultValue: "lookahead_speed_x",
    options: [
      ["lookahead_speed_x", "Look-Ahead Speed X"],
      ["lookahead_speed_y", "Look-Ahead Speed Y"],
      ["lookahead_speed_f", "Look-Ahead Speed Fade-Out"],
    ],
  },
  {
    key: "speed",
    label: "Speed",
    type: "select",
    width: "50%",
    defaultValue: "1",
    options: [
      ["0", "Instant"],
      ["64", "Speed ¼ (Slower)"],
	  ["32", "Speed ⅓"],
	  ["16", "Speed ½"],
	  ["1", "Speed 1"],
	  ["2", "Speed 2"],
	  ["3", "Speed 3"],
	  ["4", "Speed 4"],
	  ["5", "Speed 5"],
	  ["6", "Speed 6"],
	  ["7", "Speed 7"],
	  ["8", "Speed 8 (Faster)"],
    ],
  },
];

const compile = (input, helpers) => {
  const { appendRaw, _addComment } = helpers;
  
  const fieldName = `_${input.field}`;
  const speedVal = `${input.speed}`;

  _addComment("Set CameraPlus Look-Ahead Speed");
  appendRaw(
    `VM_SET_CONST_UINT8 ${fieldName}, ${speedVal}`
  );
};

module.exports = {
  id,
  name,
  groups,
  fields,
  compile,
  allowedBeforeInitFade: true,
};