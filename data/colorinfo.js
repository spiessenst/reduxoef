import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const colorSlice = createSlice({
  name: "colorState",
  initialState,
  reducers: {
    addColor(state, { payload }) {
      state.push(payload);
    },
  },
});

export default colorSlice;
export const { addColor } = colorSlice.actions;
