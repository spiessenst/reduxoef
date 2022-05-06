import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const colorSlice = createSlice({
  name: "colorState",
  initialState,
  reducers: {
    addColor(state, { payload }) {
      state.push(payload);
    },
    changeColor(state, { payload }) {
      console.log(payload);

      state.map((obj) =>
        obj.id === payload.id ? { ...obj, hex: payload.hex } : obj
      );
    },
  },
});

export default colorSlice;
export const { addColor, changeColor } = colorSlice.actions;
