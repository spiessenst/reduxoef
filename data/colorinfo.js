import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const colorSlice = createSlice({
  name: "colorState",
  initialState,
  reducers: {
    addColor(state, { payload }) {
      state.push(payload);
    },
    changeColor(state = initialState, { payload }) {
      const obj = state.find((color) => color.id === payload.id);
      obj.hex = payload.hex;
    },
  },
});

export default colorSlice;
export const { addColor, changeColor } = colorSlice.actions;
