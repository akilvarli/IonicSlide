import { createHook } from "overmind-react";

// the state
const state = {
  value: "",
  changedBy: ""
};

// perform actions on the state
const actions = {
  // set the value
  setValue: ({ state }, { value, changedBy }) => {
    state.value = value;
    state.changedBy = changedBy;
  },
  // clear the value
  resetValue: ({ state }) => {
    state.value = null;
    state.changedBy = null;
  }
};

// hook to get access in our components
export const useOvermind = createHook();

// confirguraion object
export const config = {
  state,
  actions
};
