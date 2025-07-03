const id = "EVENT_CAMERAPLUS_LOOKAHEAD_STATE_SET";
const groups = ["CameraPlus", "EVENT_GROUP_CAMERA"];
const name = "Set CameraPlus Look-Ahead State";

const fields = [
  {
    key: "state",
    label: "State",
    type: "select",
    defaultValue: "0",
    options: [
      ["0", "Default (Unpaused)"],
      ["1", "Fade-Out (Transitions to 'Paused' when done)"],
	  ["2", "Paused"],
    ],
  },
];

const compile = (input, helpers) => {
  const { appendRaw, _addComment } = helpers;

  const stateVal = `${input.state}`;

  _addComment("Set CameraPlus Look-Ahead State");
  appendRaw(
    `VM_SET_CONST_UINT8 _lookahead_state, ${stateVal}`
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